# K9 Academy — To Do List

## Urgent (Do Now)

- [ ] **Set up Klaviyo email flows** — 10 flows with 28 emails are written in `email-templates/` and documented in `klaviyo-flows.md`. Need to be built inside Klaviyo manually. Flows: quiz nurture, board & train inquiry, private training, group classes, puppy start right, daycare, general inquiry, post-booking, re-engagement, review request.
- [ ] **Update group class schedule dates** — cohort dates may be outdated. Update `startDate` fields in `src/pages/group-classes.astro`.
- [ ] **Test chatbot lead emails** — send a test message through the chatbot with an email address. Confirm lead arrives at contact@k9academy.ca with chat transcript.
- [ ] **Test contact form** — submit a test inquiry. Confirm it hits Supabase + sends email via Resend.
- [ ] **Load Anthropic credits** — the chatbot uses Claude Haiku. Make sure there are credits at console.anthropic.com or it will stop working.

## This Week

- [ ] **Set up Google Search Console** — verify domain at search.google.com/search-console, submit sitemap: `https://k9-academy-landing.vercel.app/sitemap-index.xml`
- [ ] **Set up tracking** — add real IDs for Google Analytics, Microsoft Clarity, and Meta Pixel in `src/layouts/Layout.astro` (currently commented out with placeholder IDs)
- [ ] **Optimize Google Business Profile** — add photos, all services, service areas, update hours, keyword-rich description
- [ ] **Build events page** — hidden page at `/events` for dog socials, puppy socials, and drop-in events with Stripe payment. Details TBD from Anesh.
- [ ] **Get real training photos** — replace/supplement current photos with high-quality shots from training sessions, facility, and team

## This Month

- [ ] **Build the guide PDF** — content is in `guide-design-prompt.md`, paste into claude.ai to design, download as PDF, host as lead magnet
- [ ] **Submit to local directories** — Yelp, Yellow Pages Canada, BBB, 411.ca, BlogTO, DogTrainingDirectory.ca
- [ ] **Contact 3 local vets** — ask to be listed on their "recommended trainers" page (free backlink)
- [ ] **Verify og-image.jpg** exists in public/ folder (1200x630px, under 200KB) — needed for social shares
- [ ] **Add HowTo schema** to how-to blog posts (potty training, crate training, leash walking) for Google step-by-step cards

## Ongoing (Monthly)

- [ ] **Publish 2 new blog posts per month** — content calendar through December is in `seo-plan.md`
- [ ] **Get 5-10 new Google reviews per month** — use the Klaviyo review request flow
- [ ] **Post weekly on Google Business Profile** — training tips, client wins, photos
- [ ] **Refresh existing blog posts quarterly** — update dates, add new info, keep content fresh
- [ ] **Monitor Google Search Console** — check ranking keywords, fix crawl errors

## Technical Debt

- [ ] **Klaviyo cleanup** — group-classes and puppy-classes both fire `Curriculum Download` event (naming collision). Rename one.
- [ ] **CASL consent tracking** — no consent checkbox on forms yet (Canadian anti-spam law)
- [ ] **Remove placeholder tracking scripts** — GA_MEASUREMENT_ID, YOUR_CLARITY_PROJECT_ID, YOUR_PIXEL_ID in Layout.astro are loading for nothing

## Recently Completed

- [x] **Homepage redesign** — rebuilt PAS section, before/after transformation, featured review with husky photo, real training photos on program cards, compact trust strip, K9 vs Other Trainers comparison table, trimmed content hub
- [x] **AI chatbot** — Claude Haiku chatbot on every page, knows all programs/pricing/FAQ, captures leads via Resend to contact@k9academy.ca
- [x] **Testimonials rewrite** — replaced polished reviews with real client email excerpts
- [x] **Group classes updates** — puppy CTA leads to puppy classes, "clear visible results" row added to comparison chart
- [x] **FAQ page** — 24 questions across 5 categories
- [x] **35 blog posts** — SEO content covering reactivity, board & train, puppy training, etc.
- [x] **11 area pages** — neighbourhood landing pages for local SEO
- [x] **21 Klaviyo email templates** — HTML templates in email-templates/
- [x] **Behavioural quiz** — scored assessment with email results via Resend
- [x] **Puppy Start Right page** — premium 3-stage puppy board & train

## What's Live Right Now

- **https://k9-academy-landing.vercel.app/**
- 7 service pages (home, private, group, board & train, puppy, puppy start right, FAQ)
- 35 SEO blog posts at /blog
- 11 neighbourhood landing pages at /areas/
- AI chatbot on every page
- Contact form → Supabase + Resend + Klaviyo
- Behavioural quiz → scored email results
- SEO: sitemap, robots.txt, JSON-LD schemas, canonical URLs, meta tags
