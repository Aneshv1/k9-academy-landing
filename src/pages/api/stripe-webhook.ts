import type { APIRoute } from 'astro';
import Stripe from 'stripe';
import { Resend } from 'resend';
import { TICKETS, buildSeminarEmail } from '../../lib/forrest-email';

export const prerender = false;

// Fires on Stripe `checkout.session.completed` for the Forrest Micke seminar
// Payment Links. Sends the buyer a confirmation from us and notifies the team.
// Stripe stays the record of who paid.

const stripeKey = import.meta.env.STRIPE_SECRET_KEY || '';
const webhookSecret = import.meta.env.STRIPE_WEBHOOK_SECRET || '';
const resendApiKey = import.meta.env.RESEND_API_KEY || '';
const eventsFrom = import.meta.env.EVENTS_FROM || 'K9 Academy <events@k9academy.ca>';
const notifyTo = import.meta.env.NOTIFY_TO || 'contact@k9academy.ca';

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
  const mail = buildSeminarEmail({ first, ticketName, isWorking, amount, currency, ref });
  const [buyer, staff] = await Promise.all([
    resend.emails.send(
      {
        from: eventsFrom,
        to: email,
        replyTo: mail.replyTo,
        subject: mail.subject,
        html: mail.html,
        text: mail.text,
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
  if (buyer.error) {
    console.error('Buyer email error', buyer.error);
    await resend.emails.send({ from: eventsFrom, to: notifyTo, subject: `ACTION NEEDED: confirmation email to ${email} failed (Forrest seminar)`, text: `Resend error: ${JSON.stringify(buyer.error)}\n\nSend them the confirmation manually. Name: ${name}, ticket: ${ticketName}, Stripe: ${ref}` });
  }
  if (staff.error) console.error('Staff email error', staff.error);

  return new Response('ok', { status: 200 });
};
