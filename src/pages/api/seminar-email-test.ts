import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { buildSeminarEmail } from '../../lib/forrest-email';

export const prerender = false;

// Sends a sample seminar confirmation to ?to=... Protected by ?key=<STRIPE_WEBHOOK_SECRET>.
// Returns Resend's raw response so delivery problems can be diagnosed without log access.
export const GET: APIRoute = async ({ url }) => {
  const key = url.searchParams.get('key') || '';
  const to = url.searchParams.get('to') || '';
  const ticket = url.searchParams.get('ticket') === 'working' ? 'Working Spot' : 'Audit Spot';
  if (!key || key !== (import.meta.env.STRIPE_WEBHOOK_SECRET || '')) return new Response('forbidden', { status: 403 });
  if (!to) return new Response('missing to', { status: 400 });
  const resend = new Resend(import.meta.env.RESEND_API_KEY || '');
  const m = buildSeminarEmail({ first: 'Anesh', ticketName: ticket, isWorking: ticket === 'Working Spot', amount: ticket === 'Working Spot' ? '500.00' : '300.00', currency: 'USD', ref: 'cs_live_SAMPLE' });
  const r = await resend.emails.send({ from: m.from, to, replyTo: m.replyTo, subject: `[SAMPLE] ${m.subject}`, html: m.html, text: m.text });
  return new Response(JSON.stringify({ hasKey: !!import.meta.env.RESEND_API_KEY, from: m.from, to, result: r }, null, 2), { headers: { 'Content-Type': 'application/json' } });
};
