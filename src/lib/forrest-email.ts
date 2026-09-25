// Confirmation email for the Forrest Micke seminar. Used by the Stripe webhook
// and by the /api/seminar-email-test diagnostic endpoint.
export const EVENT = {
  title: 'Forrest Micke Seminar',
  dateLabel: 'Saturday May 15 and Sunday May 16, 2027',
  timeLabel: '9am to 5pm both days. Doors open 8:30am.',
  location: 'K9 Academy Leaside',
  address: '16-30 Canvarco Rd, Toronto, ON',
  phone: '437-778-5273',
  contactEmail: 'info@k9academy.ca',
  from: 'K9 Academy <info@k9academy.ca>',
  photo: 'https://training.k9academy.ca/images/forrest-micke-email.jpg',
  pageUrl: 'https://training.k9academy.ca/forrest-micke',
  policyHeadline: 'No refunds. Transfers only.',
  policyBody:
    'Seminar tickets are final sale. If you can no longer attend, you may transfer your ticket to another person by emailing us their name and email. No refunds, credits, or exchanges are issued for any reason.',
};
export const TICKETS: Record<string, string> = { working: 'Working Spot', audit: 'Audit Spot' };

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export type SeminarEmailInput = { first: string; ticketName: string; isWorking: boolean; amount: string; currency: string; ref: string };

const BRING_EVERYONE = [
  'Your own lunch, snacks, and water. Lunch is not provided.',
  'A notebook and pen. You will want to take notes.',
  'Comfortable layers. The training floor can run cool in the morning.',
];
const BRING_WORKING = [
  'Your dog, on a flat collar or harness with a regular leash.',
  'A crate for between turns. Most handlers crate in their car with the doors open, or use one of our kennels inside.',
  'Your dog’s favourite food and toys, and a treat pouch.',
  'A water bowl for your dog.',
];

export function buildSeminarEmail({ first, ticketName, isWorking, amount, currency, ref }: SeminarEmailInput) {
  const orange = '#f26522';
  const font = "font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif";
  const bring = isWorking ? [...BRING_WORKING, ...BRING_EVERYONE] : BRING_EVERYONE;
  const li = (t: string) => `<tr><td style="padding:0 10px 8px 0;color:${orange};font-weight:700;vertical-align:top">&#10003;</td><td style="padding:0 0 8px;color:#333;font-size:15px;line-height:1.5">${esc(t)}</td></tr>`;
  const row = (k: string, v: string) => `<tr><td style="padding:7px 0;color:#777;font-size:14px;width:90px;vertical-align:top">${k}</td><td style="padding:7px 0;color:#111;font-size:15px;font-weight:600">${v}</td></tr>`;
  const preheader = `Your ${ticketName} for the ${EVENT.title} is confirmed. ${EVENT.dateLabel}.`;

  const html = `<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>${EVENT.title}</title></head>
<body style="margin:0;padding:0;background:#f3f3f1;${font}">
<div style="display:none;max-height:0;overflow:hidden;opacity:0">${esc(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f3f1;padding:28px 12px">
<tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:14px;overflow:hidden">
  <tr><td style="background:${orange};padding:16px 32px;color:#fff;font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase">K9 Academy Toronto</td></tr>
  <tr><td><img src="${EVENT.photo}" width="600" alt="Forrest Micke" style="display:block;width:100%;height:auto;border:0"></td></tr>
  <tr><td style="padding:32px 32px 8px">
    <p style="margin:0 0 6px;color:${orange};font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase">You’re registered</p>
    <h1 style="margin:0 0 18px;color:#111;font-size:26px;line-height:1.2">${EVENT.title}</h1>
    <p style="margin:0 0 14px;color:#333;font-size:16px;line-height:1.6">Hi ${esc(first)},</p>
    <p style="margin:0 0 22px;color:#333;font-size:16px;line-height:1.6">Your <strong>${esc(ticketName)}</strong> is confirmed. Thank you for registering. We are looking forward to two full days with Forrest, and to seeing you there.</p>
  </td></tr>
  <tr><td style="padding:0 32px">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#faf7f3;border-radius:10px;padding:18px 20px">
      ${row('Ticket', esc(ticketName))}
      ${row('When', esc(EVENT.dateLabel) + '<br><span style="font-weight:400;color:#555">' + esc(EVENT.timeLabel) + '</span>')}
      ${row('Where', esc(EVENT.location) + '<br><span style="font-weight:400;color:#555">' + esc(EVENT.address) + '</span>')}
      ${row('Paid', `$${amount} ${currency}`)}
    </table>
  </td></tr>
  <tr><td style="padding:28px 32px 4px">
    <h2 style="margin:0 0 12px;color:#111;font-size:18px">What to bring</h2>
    <table role="presentation" cellpadding="0" cellspacing="0">${bring.map(li).join('')}</table>
    <p style="margin:12px 0 0;color:#555;font-size:14px;line-height:1.5">We will email parking details and the day-by-day schedule closer to the date.</p>
  </td></tr>
  <tr><td style="padding:24px 32px 8px">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-left:4px solid ${orange};background:#fff7f2;border-radius:6px">
      <tr><td style="padding:14px 16px;color:#333;font-size:14px;line-height:1.5"><strong style="color:#111">${EVENT.policyHeadline}</strong><br>${esc(EVENT.policyBody)}</td></tr>
    </table>
  </td></tr>
  <tr><td style="padding:22px 32px 30px;color:#333;font-size:15px;line-height:1.6">
    Questions? Reply to this email or call <a href="tel:${EVENT.phone.replace(/-/g, '')}" style="color:${orange};text-decoration:none;font-weight:600">${EVENT.phone}</a>.<br>
    <span style="color:#777;font-size:13px">Event page: <a href="${EVENT.pageUrl}" style="color:${orange}">${EVENT.pageUrl.replace('https://', '')}</a></span>
  </td></tr>
  <tr><td style="background:#111;padding:18px 32px;color:#999;font-size:12px;line-height:1.6">K9 Academy Leaside &middot; ${esc(EVENT.address)} &middot; ${EVENT.phone}<br>Order reference ${esc(ref.slice(-10))}</td></tr>
</table>
</td></tr></table>
</body></html>`;

  const text = `Hi ${first},\n\nYour ${ticketName} for the ${EVENT.title} is confirmed. Thank you for registering.\n\nWhen: ${EVENT.dateLabel}. ${EVENT.timeLabel}\nWhere: ${EVENT.location}, ${EVENT.address}\nPaid: $${amount} ${currency}\n\nWhat to bring:\n${bring.map((b) => `- ${b}`).join('\n')}\n\nWe will email parking details and the day-by-day schedule closer to the date.\n\n${EVENT.policyHeadline} ${EVENT.policyBody}\n\nQuestions? Reply to this email or call ${EVENT.phone}.\nEvent page: ${EVENT.pageUrl}\n\nK9 Academy Leaside, ${EVENT.address}\nOrder reference ${ref.slice(-10)}`;

  return { subject: `You’re in: ${EVENT.title} (${ticketName})`, html, text, from: EVENT.from, replyTo: EVENT.contactEmail };
}
