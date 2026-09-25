# Forrest Micke Seminar Page

Registration page for Forrest Micke's two-day seminar at K9 Academy Leaside.
This is a separate event, unrelated to the apprenticeship page.

- **URL (once deployed):** training.k9academy.ca/forrest-micke
- **Event:** Sat May 15 + Sun May 16, 2027, 9am to 5pm, 16-30 Canvarco Rd, Toronto
- **Status:** LIVE on main since 2026-09-25 at training.k9academy.ca/forrest-micke
- **Source brief:** `FORREST-MICKE-BRIEF.md` (research + verified bio facts)

## Continue on another machine

```bash
git clone https://github.com/Aneshv1/k9-academy-landing.git   # or: git fetch && git pull
cd k9-academy-landing
git checkout forrest-micke-seminar
npm install
npm run dev
# open http://localhost:4321/forrest-micke/
```

## Files

| File | What it is |
|------|------------|
| `src/pages/forrest-micke/index.astro` | The landing page. All editable settings are at the top of the file. |
| `src/pages/forrest-micke/confirmed.astro` | Page Stripe redirects to after payment. Fires Meta `Purchase`, GA4 `purchase`, Klaviyo `Forrest Seminar Registered`. noindex. |
| `src/pages/api/submit.ts` | Existing lead email endpoint. Added the `forrest_seminar` label. |
| `astro.config.mjs` | Confirmed page excluded from the sitemap. |

## Flow

Ad → `/forrest-micke` → pick ticket → form → Stripe Payment Link → `/forrest-micke/confirmed?ticket=working|audit`

On form submit:
1. Lead email to contact@k9academy.ca via `/api/submit` (subject shows the ticket type). Note the email means "sent to checkout", not "paid". Stripe is the record of who paid.
2. Klaviyo `identify` (ticket_type, is_k9_client, is_trainer, dog_name, dog_breed as separate properties) + `Forrest Seminar Checkout Started` event.
3. Meta `InitiateCheckout` + GA4 `begin_checkout` with value in USD.
4. Redirect to the Stripe link with the email prefilled.

## Tickets (decided)

| Ticket | Price | Cap | Notes |
|--------|-------|-----|-------|
| Working Spot | $500 USD | 8, shown on page | Handler + dog. Form asks dog name, breed, age, goal, reactivity history. |
| Audit Spot | $300 USD | Unlimited, **never mention this on the page** | No dog. |

- No video application. People register and pay straight away.
- Refund policy: **non-refundable, transferable** to another person.
- Currency: USD (overrides the CAD in the brief).

## Settings at the top of `index.astro`

- `STRIPE_LINKS`: paste the two Payment Links here. While they contain `REPLACE_`, the form shows "call us to register" instead of going to checkout.
- `PRICES`: 500 / 300. Also update `PRICES` in `confirmed.astro` if these change.
- `WORKING_SPOTS_LEFT`: lower manually as Working Spots sell. The page does not count sales.
- `SHOW_FORREST_REVIEWS`: keep `false` until Forrest's team approves using his reviews.
- `FORREST_PHOTO`: set to e.g. `/images/forrest-micke.jpg` once real photos arrive. The bio switches to a photo + text layout automatically.

## Copy direction (from Anesh)

- Minimal conversion tactics. Mainly edify Forrest and explain what happens at the seminar.
- No AI-sounding sales copy, no em dashes, Canadian spelling.
- Topic list is Forrest's own "Learn About" list, used word for word (Canadian spelling only).

## Payments and confirmation email (done 2026-09-25)

- Stripe Payment Links are live in `STRIPE_LINKS` (Working Spot $500 USD capped at 8 sales in Stripe, Audit Spot $300 USD). Both carry metadata `event=forrest_micke`, `ticket=working|audit`.
- `src/pages/api/stripe-webhook.ts` listens for `checkout.session.completed`, sends the buyer a confirmation (template in `src/lib/forrest-email.ts`, from info@k9academy.ca) and a "PAID:" notice to contact@k9academy.ca. If the buyer email fails, staff get an "ACTION NEEDED" email.
- `src/pages/api/seminar-email-test.ts?key=<STRIPE_WEBHOOK_SECRET>&to=<email>&ticket=working|audit` sends a sample confirmation and returns Resend's response.
- Env: `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET` in Vercel (production + preview). Never commit them.
- Tested end to end with a $1 link on 2026-09-25 (refunded, link deactivated). First email landed in junk; fixed by sending from info@ with a light layout.
- Stripe checkout shows the business name "K9 Expeditions" (Stripe account setting).

## Launch checklist

- [x] **Stripe:** create 2 Payment Links ($500 USD Working Spot, $300 USD Audit Spot). Set "After payment" redirect to
  `https://training.k9academy.ca/forrest-micke/confirmed?ticket=working` and `...?ticket=audit`. Paste into `STRIPE_LINKS`.
  Optionally cap the Working Spot link at 8 sales in Stripe (Payment Link → limit number of payments).
- [ ] **Forrest's written approval** for his name, bio, photos and reviews in ads + the page.
- [ ] **Photos:** 3 or 4 real photos from Forrest's team (no AI images of Forrest, no photos lifted from his site). Real Leaside floor photos to replace the hero background if wanted.
- [ ] Confirm the "How the two days run" description with Forrest (lecture + working sessions format).
- [ ] FAQ gaps not yet on the page: parking, filming rules. (Lunch, what to bring, doors open 8:30 are in the confirmation email; add to page FAQ too.) (Dog waiting between turns is answered: crate in car with doors open, or a kennel inside.)
- [ ] Klaviyo: list `Forrest Micke Seminar 2027: Registered`, flow triggered by `Forrest Seminar Registered` (confirmation, 30/7/1-day reminders, post-event survey). Abandoned flow off `Forrest Seminar Checkout Started` without a `Registered` event.
- [x] Test a real purchase end to end, check the Meta Purchase event in Events Manager.
- [x] Merge `forrest-micke-seminar` into `main` to go live.
