# K9 Academy — To Do List

## Urgent (Do Now)

- [ ] **Build Klaviyo email flows** — 10 flows with 28 emails. Follow `KLAVIYO-SETUP-GUIDE.md` step by step. Templates in `email-templates/flows/`.
- [ ] **Schedule month 1 email campaigns** — 16 emails in `email-campaigns/month-1/`. Send 3-4 per week through Klaviyo.
- [ ] **Test chatbot on live site** — ask it about pricing, programs, and "can I talk to someone?" Verify leads arrive at contact@k9academy.ca.
- [ ] **Test contact form on live site** — submit a test inquiry. Confirm it hits Supabase + sends email via Resend.
- [ ] **Load Anthropic credits** — chatbot uses Claude Sonnet. Make sure there are credits at console.anthropic.com.

## This Week

- [ ] **Create Stripe payment links** for events — $45 (impulse control), $55 (adult social), $35 (puppy social). Plug into `src/pages/events.astro`.
- [ ] **Stripe tax registration** — add HST 13% tax rate in Stripe dashboard. Apply to all payment links.
- [ ] **Film hero video** — use the script outline discussed. Upload to YouTube, swap ID in `src/pages/index.astro`.
- [ ] **Set up Microsoft Clarity** — free heatmaps at clarity.microsoft.com. Get project ID, add to `src/layouts/Layout.astro`.
- [ ] **Get before/after photos** — for private lessons page transformation section.
- [ ] **Set event dates** — uncomment events in `src/pages/events.astro` when dates are confirmed.

## Ongoing (Monthly)

- [ ] **Publish 2 new blog posts per month** — content calendar in `seo-plan.md`
- [ ] **Write and schedule next month's 16 campaign emails** — follow the pillar balance in `email-campaigns/README.md`
- [ ] **Get 5-10 new Google reviews per month** — use the Klaviyo review request flow
- [ ] **Post weekly on Google Business Profile** — training tips, client wins, photos
- [ ] **Monitor Google Search Console** — check ranking keywords, fix crawl errors
- [ ] **Monitor Google Analytics** — track traffic, page views, form submissions
- [ ] **Check Anthropic credits** — top up if chatbot usage is high

## Technical Debt

- [ ] **Klaviyo event naming** — group-classes and puppy-classes both fire `Curriculum Download` event (naming collision). Rename one.
- [ ] **CASL consent tracking** — no consent checkbox on forms yet (Canadian anti-spam law)
- [ ] **Remove placeholder Clarity script** — `YOUR_CLARITY_PROJECT_ID` in Layout.astro (add real ID or remove)

## Recently Completed

- [x] **Homepage redesign** — PAS section, before/after, featured review with husky photo, real training photos, compact trust strip, K9 vs Other Trainers comparison, trimmed content hub
- [x] **Board & Train full rework** — 3 transformation videos with quotes, 3 pricing tiers + 8wk note, lifetime support banner (3-column), 100% off-leash guarantee on 4wk, before/after section, comparison chart with highlighted rows, removed filler sections
- [x] **Private Lessons full rework** — new headline, 3 pain points, 2 photo+quote combos (J.S. + Lincoln), session flow timeline, social proof before pricing, removed filler sections, in-home upsell
- [x] **Group Classes rework** — first day video, Level 3 teaser, bundle "most popular" positioning, comparison chart with results row
- [x] **AI Chatbot** — Claude Sonnet, correct B&T pricing (2/4/6/8wk), callback flow, auto-popup after 5s, dark preview bubble, captures leads via Resend
- [x] **In-Home premium page** — Hormozi framework, PAS, $625/session, premium positioning, areas served, application form
- [x] **Events page** — 3 event types (impulse control, adult social, puppy social), Stripe payment links, notify-me waitlist
- [x] **30 area pages** — Toronto premium + York Region + GTA West + Brampton/Caledon
- [x] **45 blog posts** — 10 in-home focused, area-specific, reactivity, separation anxiety, doorbell training
- [x] **Blog CTAs upgraded** — conversion section + in-home promo + stats bar on every post
- [x] **Area pages upgraded** — Google pill, dual CTA, FUD reducers, in-home promo, testimonial, stats
- [x] **Google Analytics** — G-450PG6DTXP live on all pages
- [x] **Google Search Console** — verified, sitemap submitted
- [x] **Meta Pixel** — 886775375816530 live on all pages
- [x] **Testimonials rewritten** — from real client emails
- [x] **Em-dashes removed sitewide** — rule added to K9 Marketing Brain
- [x] **Daycare removed from contact form dropdown**
- [x] **Phone number pill in navbar**
- [x] **Klaviyo setup guide** — full step-by-step in `KLAVIYO-SETUP-GUIDE.md`
- [x] **Month 1 campaign emails** — 16 emails across 5 pillars in `email-campaigns/month-1/`
- [x] **README updated** for staff

## What's Live Right Now

- **https://k9-academy-landing.vercel.app/**
- 7 service pages (home, private, group, board & train, puppy, puppy start right, FAQ)
- 2 hidden pages (/in-home, /events)
- 45 SEO blog posts at /blog
- 30 neighbourhood landing pages at /areas/
- AI chatbot on every page (Claude Sonnet)
- Contact form → Supabase + Resend + Klaviyo
- Behavioural quiz → scored email results
- Google Analytics + Search Console + Meta Pixel
- SEO: sitemap, robots.txt, JSON-LD schemas, canonical URLs, meta tags
