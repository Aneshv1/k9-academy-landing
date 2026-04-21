import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

export const prerender = false;

const supabaseUrl = import.meta.env.SUPABASE_URL || 'https://gpcsjdvpdyvkfkwpynhf.supabase.co';
const supabaseServiceKey = import.meta.env.SUPABASE_SERVICE_ROLE_KEY || '';
const resendApiKey = import.meta.env.RESEND_API_KEY || '';
const notifyFrom = import.meta.env.NOTIFY_FROM || 'K9 Academy Leads <leads@k9academy.ca>';
const notifyTo = import.meta.env.NOTIFY_TO || 'contact@k9academy.ca';

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, email, phone, dog_info, service, message } = body;

    if (!name || !email) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const results = { supabase: false, email: false };

    if (supabaseServiceKey) {
      try {
        const supabase = createClient(supabaseUrl, supabaseServiceKey);

        const { error } = await supabase.from('leads').insert({
          owner_name: name,
          email,
          phone,
          dog_name: dog_info || null,
          service: service || 'private_6',
          challenge: message || null,
          stage: 'new',
          priority: 'normal',
          source: 'landing_page',
        });

        if (!error) results.supabase = true;
        else console.error('Supabase error:', error.message);
      } catch (e) {
        console.error('Supabase insert failed:', e);
      }
    }

    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey);
        const rows: Array<[string, string]> = [
          ['Name', name],
          ['Email', email],
          ['Phone', phone],
          ['Service', service || '—'],
          ['Dog', dog_info || '—'],
          ['Message', message || '—'],
        ];
        const html = `
          <h2 style="margin:0 0 16px;font-family:system-ui,sans-serif">New lead from landing page</h2>
          <table style="border-collapse:collapse;font-family:system-ui,sans-serif;font-size:14px">
            ${rows
              .map(
                ([k, v]) =>
                  `<tr><td style="padding:6px 12px 6px 0;color:#666;vertical-align:top"><strong>${k}</strong></td><td style="padding:6px 0;white-space:pre-wrap">${escapeHtml(String(v))}</td></tr>`
              )
              .join('')}
          </table>
          <p style="margin-top:16px;color:#888;font-size:12px;font-family:system-ui,sans-serif">Reply to this email to respond directly to the lead.</p>
        `;
        const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n');

        const { error } = await resend.emails.send({
          from: notifyFrom,
          to: notifyTo,
          replyTo: email,
          subject: `New lead: ${name} — ${service || 'inquiry'}`,
          html,
          text,
        });

        if (!error) results.email = true;
        else console.error('Resend error:', error);
      } catch (e) {
        console.error('Resend send failed:', e);
      }
    }

    if (resendApiKey && service === 'behaviour_quiz' && body.quiz_scores && body.quiz_total != null) {
      try {
        const resend = new Resend(resendApiKey);
        const s = body.quiz_scores as Record<string, number>;
        const total = body.quiz_total as number;
        const pct = Math.round((total / 18) * 100);

        const areaLabels: Record<string, string> = {
          leash: 'Leash Walking',
          reactivity: 'Reactivity',
          recall: 'Off-Leash Recall',
          alone: 'Separation Tolerance',
          settling: 'Settling at Home',
          aggression: 'Aggression',
        };

        const grade = total >= 15 ? 'Your dog is ahead of the pack' : total >= 10 ? 'There is real room for improvement' : 'Your dog needs professional help';
        const gradeColor = total >= 15 ? '#10b981' : total >= 10 ? '#f59e0b' : '#ef4444';

        const areaRows = Object.entries(areaLabels).map(([key, label]) => {
          const val = s[key] ?? 0;
          const color = val === 3 ? '#10b981' : val === 2 ? '#f59e0b' : '#ef4444';
          const status = val === 3 ? 'Good' : val === 2 ? 'Could be better' : 'Needs work';
          return `<tr><td style="padding:8px 12px;font-size:14px;color:#333">${escapeHtml(label)}</td><td style="padding:8px 12px;font-size:14px;font-weight:bold;color:${color};text-align:right">${val}/3 — ${status}</td></tr>`;
        }).join('');

        const tips: string[] = [];
        if ((s.reactivity ?? 3) <= 1) tips.push('Your dog\'s reactivity is the #1 priority. Reactivity almost always gets worse without intervention — not better. Start by creating distance from triggers and rewarding calm behaviour.');
        if ((s.alone ?? 3) <= 1) tips.push('Separation anxiety is a genuine panic response. Practice "boring departures" — pick up keys, put on shoes, then sit back down. Desensitize your dog to departure cues gradually.');
        if ((s.recall ?? 3) <= 1) tips.push('Off-leash recall starts at home with zero distractions. Say your dog\'s name once, reward when they look. Do this 10x a day for a week before trying it outside.');
        if ((s.leash ?? 3) <= 1) tips.push('Stop walking the moment your dog pulls. Wait for slack, then continue. Painful the first few days — most dogs get it by day 4 or 5.');
        if ((s.aggression ?? 3) <= 1) tips.push('Aggression that involves snapping or biting needs professional help immediately. Manage the environment to prevent triggers while you seek a trainer.');
        if ((s.settling ?? 3) <= 1) tips.push('Teach the "place" command. Lure your dog onto a bed, reward them for staying. Start at 10 seconds and build up. This is one of the most transformative commands you can teach.');
        if (tips.length === 0) tips.push('Your dog is in solid shape. Targeted group classes or a tune-up session can take you from good to great.');

        const tipsHtml = tips.map(t => `<li style="margin-bottom:10px;font-size:14px;color:#555;line-height:1.5">${escapeHtml(t)}</li>`).join('');

        const quizHtml = `
          <div style="font-family:system-ui,-apple-system,sans-serif;max-width:560px;margin:0 auto">
            <div style="text-align:center;padding:32px 0 24px">
              <img src="https://k9-academy-landing.vercel.app/logo.png" alt="K9 Academy" style="height:40px;margin:0 auto 16px" />
              <h1 style="margin:0;font-size:24px;color:#111">Your Behaviour Assessment Results</h1>
            </div>

            <div style="text-align:center;padding:24px;background:#fafafa;border-radius:12px;margin-bottom:24px">
              <p style="margin:0 0 4px;font-size:13px;color:#888">Your dog scored</p>
              <p style="margin:0;font-size:48px;font-weight:800;color:#e8782a">${total}<span style="font-size:24px;color:#999"> / 18</span></p>
              <p style="margin:8px 0 0;font-size:16px;font-weight:700;color:${gradeColor}">${grade}</p>
            </div>

            <h2 style="font-size:16px;color:#111;margin:0 0 12px">Score Breakdown</h2>
            <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
              ${areaRows}
            </table>

            <h2 style="font-size:16px;color:#111;margin:0 0 12px">What To Focus On</h2>
            <ul style="padding-left:20px;margin:0 0 32px">${tipsHtml}</ul>

            <div style="text-align:center;padding:24px;background:#1a1a1a;border-radius:12px">
              <p style="margin:0 0 8px;font-size:14px;color:#999">Ready for real results?</p>
              <a href="https://k9-academy-landing.vercel.app/#contact" style="display:inline-block;padding:12px 28px;background:#e8782a;color:#fff;font-weight:700;font-size:14px;text-decoration:none;border-radius:8px">Talk to a Trainer</a>
              <p style="margin:12px 0 0;font-size:12px;color:#666">437-778-5273 · contact@k9academy.ca</p>
            </div>

            <p style="margin:24px 0 0;font-size:11px;color:#bbb;text-align:center">K9 Academy Dog Training Center · 16-30 Canvarco Rd, Toronto ON</p>
          </div>
        `;

        const quizText = `Your dog scored ${total}/18 — ${grade}.\n\n${Object.entries(areaLabels).map(([k, l]) => `${l}: ${s[k] ?? 0}/3`).join('\n')}\n\nK9 Academy · 437-778-5273 · contact@k9academy.ca`;

        await resend.emails.send({
          from: 'K9 Academy <contact@k9academy.ca>',
          to: email,
          replyTo: 'contact@k9academy.ca',
          subject: `Your dog scored ${total}/18 — here's the full breakdown`,
          html: quizHtml,
          text: quizText,
        });

        results.email = true;
      } catch (e) {
        console.error('Quiz results email failed:', e);
      }
    }

    return new Response(JSON.stringify({ success: true, ...results }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
