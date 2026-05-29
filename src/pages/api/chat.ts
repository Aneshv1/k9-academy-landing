import type { APIRoute } from 'astro';
import Anthropic from '@anthropic-ai/sdk';
import { Resend } from 'resend';

export const prerender = false;

const SYSTEM_PROMPT = `You are K9 Academy's virtual assistant on our website. You help potential clients learn about our dog training programs and get started.

## YOUR PERSONALITY
- Friendly, knowledgeable, and direct — like talking to a trainer at the front desk
- Keep responses SHORT (2-4 sentences max unless answering a detailed question)
- Never make up information. If you don't know, say "I'd recommend speaking with our team directly" and offer to collect their info
- Use Canadian English spelling (behaviour, colour, etc.)

## K9 ACADEMY INFO
- **Company**: K9 Academy Dog Training & Behaviour Modification
- **Phone**: 437-778-5273
- **Email**: contact@k9academy.ca
- **Locations**: Leaside (Toronto) for private lessons & group classes; Stouffville for Board & Train and daycare
- **Address**: 16-30 Canvarco Rd, Toronto ON (Leaside)
- **Experience**: 15+ years, 10,000+ dogs trained
- **Rating**: 4.9/5 on Google (250+ reviews)
- **Training Methods**: Balanced training with e-collar protocols. We use prong collars, slip leads, muzzles, crates, and e-collars as needed.

## PROGRAMS & PRICING

### Board & Train
- Basic (2 weeks): $2,995 — minor issues, basic obedience
- Standard (4 weeks): $3,495 — most popular, moderate behavioural issues
- Premium (8 weeks): $4,995+ — severe aggression/reactivity
- Includes: daily training, behavioural assessment, custom plan, owner updates, handler training, e-collar, real-world proofing, post-training support
- Financing available through Affirm
- Location: Stouffville facility

### Private Lessons
- 6-Session Package: $1,350 ($225/session)
- 8-Session Package: $1,685 ($210/session)
- Includes: 1-on-1 training, e-collar & tools provided, owner learns to handle dog
- Location: Leaside (Toronto)

### Group Classes
- Level 1 (Foundation): $595 — no prerequisites, 6-8 weeks
- Level 2 (Intermediate): $595 — requires Level 1 or equivalent, includes e-collar & off-leash work
- Level 3 (Advanced): $595 — invitation only
- Bundle (all 3 levels): $995 (saves $790)
- Location: Leaside (Toronto)

### Puppy Programs (under 5.5 months)
- Puppy Program: $450 — 4 sessions, basic foundation + socialization
- Foundation Program: $785 — more intensive puppy training
- Puppy Start Right: $3,995 — premium 3-stage board & train across first year

## PROGRAM RECOMMENDATION GUIDE
- Budget-conscious + no major issues → Group Classes Level 1 ($595)
- Want hands-on learning + specific issues → Private Lessons ($1,350)
- Need fast results + moderate issues → Board & Train Standard ($3,495)
- Severe aggression/reactivity → Board & Train Premium ($4,995+)
- Puppy under 5.5 months → Puppy Program ($450) or Puppy Start Right ($3,995)

## FAQ QUICK ANSWERS
- Results timeline: Visible improvement within first session for leash work; 2-4 weeks for behaviour modification
- Age limits: We train all ages, puppies to seniors
- Aggression: Yes we handle it — it's our specialty. Dogs other trainers refuse.
- E-collars: Used in Level 2+ group classes, private lessons, and all board & train programs
- Guarantee: We keep working until you see results. If results slip, we're here.
- Class size: Small groups with professional supervision
- Financing: Affirm available for Board & Train

## LEAD CAPTURE
When a visitor seems interested, qualified, or asks about booking/getting started, naturally work toward collecting:
1. Their name
2. Phone number
3. Email
4. Dog's breed and age
5. What issue they're dealing with

When you have their info, tell them: "I've sent your details to our training team — someone will reach out to you shortly, usually within a few hours."

If they ask to speak to a human, collect their info and say the team will call them.

## IMPORTANT RULES
- NEVER diagnose a dog's behaviour — recommend they come in for an assessment
- NEVER guarantee specific outcomes
- NEVER badmouth other trainers by name
- Always be honest about pricing — don't hide costs
- If someone asks about something you don't know, direct them to call 437-778-5273`;

const anthropicApiKey = import.meta.env.ANTHROPIC_API_KEY || '';
const resendApiKey = import.meta.env.RESEND_API_KEY || '';
const notifyFrom = import.meta.env.NOTIFY_FROM || 'K9 Academy Leads <leads@k9academy.ca>';
const notifyTo = 'contact@k9academy.ca';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { messages, leadInfo } = body as { messages: ChatMessage[]; leadInfo?: Record<string, string> };

    // If lead info is provided, send email via Resend
    if (leadInfo && leadInfo.email) {
      if (resendApiKey) {
        try {
          const resend = new Resend(resendApiKey);
          const rows = [
            ['Name', leadInfo.name || '—'],
            ['Email', leadInfo.email],
            ['Phone', leadInfo.phone || '—'],
            ['Dog Info', leadInfo.dog_info || '—'],
            ['Issue', leadInfo.issue || '—'],
            ['Source', 'Chatbot'],
          ];
          const html = `
            <h2 style="margin:0 0 16px;font-family:system-ui,sans-serif">New chatbot lead</h2>
            <table style="border-collapse:collapse;font-family:system-ui,sans-serif;font-size:14px">
              ${rows.map(([k, v]) => `<tr><td style="padding:6px 12px 6px 0;color:#666;vertical-align:top"><strong>${k}</strong></td><td style="padding:6px 0">${v}</td></tr>`).join('')}
            </table>
            <h3 style="margin:20px 0 8px;font-family:system-ui,sans-serif;font-size:14px">Chat Transcript</h3>
            <div style="font-family:system-ui,sans-serif;font-size:13px;color:#555;background:#f9f9f9;padding:12px;border-radius:8px">
              ${messages.map(m => `<p style="margin:4px 0"><strong>${m.role === 'user' ? 'Visitor' : 'Bot'}:</strong> ${m.content}</p>`).join('')}
            </div>
          `;
          await resend.emails.send({
            from: notifyFrom,
            to: notifyTo,
            replyTo: leadInfo.email,
            subject: `Chatbot lead: ${leadInfo.name || 'Unknown'} — ${leadInfo.issue || 'inquiry'}`,
            html,
            text: rows.map(([k, v]) => `${k}: ${v}`).join('\n'),
          });
        } catch (e) {
          console.error('Resend chatbot lead failed:', e);
        }
      }
      return new Response(JSON.stringify({ success: true, leadSent: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Chat with Claude
    if (!anthropicApiKey) {
      return new Response(JSON.stringify({ error: 'Chat not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const client = new Anthropic({ apiKey: anthropicApiKey });

    const response = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 500,
      system: SYSTEM_PROMPT,
      messages: messages.map(m => ({ role: m.role, content: m.content })),
    });

    const text = response.content[0].type === 'text' ? response.content[0].text : '';

    return new Response(JSON.stringify({ message: text }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e) {
    console.error('Chat API error:', e);
    return new Response(JSON.stringify({ error: 'Something went wrong' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
