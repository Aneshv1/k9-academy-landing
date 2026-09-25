import type { APIRoute } from 'astro';
import Stripe from 'stripe';
import { Resend } from 'resend';

export const prerender = false;

// Fires on Stripe `checkout.session.completed` for the Forrest Micke seminar
// Payment Links. Sends the buyer a confirmation from us and notifies the team.
// Stripe stays the record of who paid.

const stripeKey = import.meta.env.STRIPE_SECRET_KEY || '';
const webhookSecret = import.meta.env.STRIPE_WEBHOOK_SECRET || '';
const resendApiKey = import.meta.env.RESEND_API_KEY || '';
const eventsFrom = import.meta.env.EVENTS_FROM || 'K9 Academy <events@k9academy.ca>';
const notifyTo = import.meta.env.NOTIFY_TO || 'contact@k9academy.ca';

const EVENT = {
  title: 'Forrest Micke Seminar',
  dateLabel: 'Saturday May 15 and Sunday May 16, 2027',
  timeLabel: '9am to 5pm both days',
  location: 'K9 Academy Leaside',
  address: '16-30 Canvarco Rd, Toronto, ON',
  phone: '437-778-5273',
  contactEmail: 'info@k9academy.ca',
  policyHeadline: 'No refunds. Transfers only.',
  policyBody:
    'Seminar tickets are final sale. If you can no longer attend, you may transfer your ticket to another person by emailing us their name and email. No refunds, credits, or exchanges are issued for any reason.',
};
const TICKETS: Record<string, string> = { working: 'Working Spot', audit: 'Audit Spot' };

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export const POST: APIRoute = async ({ request }) => {
  if (!stripeKey || !webhookSecret) return new Response('Not configured', { status: 500 });
  const stripe = new Stripe(stripeKey);
  const sig = request.headers.get('stripe-signature') || '';
  const raw = await request.text();

  let evt: Stripe.Event;
  try {
    evt = stripe.webhooks.constructEvent(raw, sig, webhookSecret);
  } catch (e: any) {
    return new Response(`Bad signature: ${e.message}`, { status: 400 });
  }

  if (evt.type !== 'checkout.session.completed') return new Response('ignored', { status: 200 });
  const session = evt.data.object as Stripe.Checkout.Session;
  if (session.payment_status !== 'paid') return new Response('unpaid', { status: 200 });
  if (session.metadata?.event !== 'forrest_micke') return new Response('other product', { status: 200 });

  const ticketId = session.metadata?.ticket || '';
  const ticketName = TICKETS[ticketId] || 'Seminar ticket';
  const isWorking = ticketId === 'working';
  const name = session.customer_details?.name || '';
  const first = name.split(' ')[0] || 'there';
  const email = session.customer_details?.email || '';
  const phone = session.customer_details?.phone || '';
  const amount = ((session.amount_total || 0) / 100).toFixed(2);
  const currency = (session.currency || 'usd').toUpperCase();
  const ref = session.id;

  if (!resendApiKey || !email) return new Response('no email', { status: 200 });

  const resend = new Resend(resendApiKey);
  const orange = '#f97316';
  const row = (k: string, v: string) =>
    `<tr><td style="padding:8px 0;color:#999;width:110px;vertical-align:top">${k}</td><td style="padding:8px 0;font-weight:600">${v}</td></tr>`;

  const html = `
<div style="background:#0a0a0a;padding:32px 16px;font-family:system-ui,-apple-system,sans-serif">
  <div style="max-width:560px;margin:0 auto;background:#141414;border:1px solid #262626;border-radius:16px;overflow:hidden">
    <div style="background:${orange};padding:20px 28px;color:#fff">
      <p style="margin:0;font-size:11px;letter-spacing:2px;text-transform:uppercase;opacity:.85">You're registered</p>
      <h1 style="margin:6px 0 0;font-size:22px">${EVENT.title}</h1>
    </div>
    <div style="padding:28px;color:#e5e5e5;font-size:15px;line-height:1.6">
      <p style="margin:0 0 16px">Hi ${esc(first)},</p>
      <p style="margin:0 0 20px">Your ${esc(ticketName)} is confirmed. Thank you for registering. Here is everything you need for now.</p>
      <table style="border-collapse:collapse;width:100%;font-size:14px;margin-bottom:20px">
        ${row('Ticket', esc(ticketName))}
        ${row('When', esc(EVENT.dateLabel) + '<br><span style="font-weight:400;color:#bbb">' + esc(EVENT.timeLabel) + '</span>')}
        ${row('Where', esc(EVENT.location) + '<br><span style="font-weight:400;color:#bbb">' + esc(EVENT.address) + '</span>')}
        ${row('Paid', `$${amount} ${currency}`)}
        ${row('Reference', `<span style="font-weight:400;color:#888;font-size:12px">${esc(ref)}</span>`)}
      </table>
      <p style="margin:0 0 20px;font-size:14px;color:#ccc">${
        isWorking
          ? 'Bring your dog, a crate for between turns (in your car with the doors open, or inside in one of our kennels), your dog\'s favourite food and toys, and a notebook.'
          : 'No dog needed. Bring a notebook. You will watch every working team get coached by Forrest across both days.'
      } We will email arrival details, parking, and a schedule closer to the date.</p>
      <div style="background:#1f1f1f;border-left:3px solid ${orange};padding:12px 16px;border-radius:6px;font-size:13px;color:#ccc;margin-bottom:20px">
        <strong style="color:#fff">${EVENT.policyHeadline}</strong><br>${esc(EVENT.policyBody)}
      </div>
      <p style="margin:0 0 8px;font-size:14px">Questions? Reply to this email or call <a href="tel:${EVENT.phone.replace(/-/g, '')}" style="color:${orange}">${EVENT.phone}</a>.</p>
      <p style="margin:0;color:#888;font-size:13px">K9 Academy Toronto</p>
    </div>
  </div>
</div>`;

  const text = `Hi ${first},\n\nYour ${ticketName} for the ${EVENT.title} is confirmed.\n\nWhen: ${EVENT.dateLabel}, ${EVENT.timeLabel}\nWhere: ${EVENT.location}, ${EVENT.address}\nPaid: $${amount} ${currency}\nReference: ${ref}\n\n${EVENT.policyHeadline} ${EVENT.policyBody}\n\nQuestions? Reply to this email or call ${EVENT.phone}.\n\nK9 Academy Toronto`;

  const [buyer, staff] = await Promise.all([
    resend.emails.send(
      {
        from: eventsFrom,
        to: email,
        replyTo: EVENT.contactEmail,
        subject: `You're in: ${EVENT.title} (${ticketName})`,
        html,
        text,
      },
      { idempotencyKey: `fm-buyer-${ref}` },
    ),
    resend.emails.send(
      {
        from: eventsFrom,
        to: notifyTo,
        replyTo: email || undefined,
        subject: `PAID: ${name || email} bought a ${ticketName} (Forrest seminar)`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nTicket: ${ticketName}\nPaid: $${amount} ${currency}\nStripe session: ${ref}\n\nThe form details (dog, goals, reactivity) arrived in the earlier "sent to checkout" lead email for this person.`,
      },
      { idempotencyKey: `fm-staff-${ref}` },
    ),
  ]);
  if (buyer.error) console.error('Buyer email error', buyer.error);
  if (staff.error) console.error('Staff email error', staff.error);

  return new Response('ok', { status: 200 });
};
