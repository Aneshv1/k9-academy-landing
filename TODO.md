# K9 Academy — To Do List

## Urgent (Do Now)

- [ ] **Build Klaviyo email flows** — 10 flows with 28 emails. Follow `KLAVIYO-SETUP-GUIDE.md` step by step. Templates in `email-templates/flows/`.
- [ ] **Schedule month 1 email campaigns** — 16 emails in `email-campaigns/month-1/`. Send 3-4 per week through Klaviyo.
- [ ] **Test chatbot on live site** — ask it about pricing, programs, and "can I talk to someone?" Verify leads arrive at contact@k9academy.ca.
- [ ] **Test contact form on live site** — submit a test inquiry. Confirm it hits Supabase + sends email via Resend.
- [ ] **Load Anthropic credits** — chatbot uses Claude Sonnet. Make sure there are credits at console.anthropic.com.
- [ ] **Call every lead same day** — set this as a non-negotiable rule. Most competitors take 2-3 days. Same-day callback is the #1 revenue lever.
- [ ] **Optimize Google Business Profile** — add 20+ training photos, all services, service areas, hours, write keyword-rich description.

## This Week

- [ ] **Create Stripe payment links** for events — $45 (impulse control), $55 (adult social), $35 (puppy social). Plug into `src/pages/events.astro`.
- [ ] **Stripe tax registration** — add HST 13% tax rate in Stripe dashboard. Apply to all payment links.
- [ ] **Film hero video** — use the script outline discussed. Upload to YouTube, swap ID in `src/pages/index.astro`.
- [ ] **Set up Microsoft Clarity** — free heatmaps at clarity.microsoft.com. Get project ID, add to `src/layouts/Layout.astro`.
- [ ] **Get before/after photos** — for private lessons page transformation section.
- [ ] **Set event dates** — uncomment events in `src/pages/events.astro` when dates are confirmed.
- [ ] **Set up Google Ads** — $3,000-$5,000/month. Target "board and train Toronto," "dog training Toronto," "dog trainer near me." Details in `MARKETING-PLAN-2.5M.md`.
- [ ] **Start posting on Instagram daily** — training clips, client wins, behind the scenes. Consistency beats quality.
- [ ] **Post on Google Business Profile 3x/week** — training tips, photos, client wins.
- [ ] **Respond to every Google review within 24 hours** — positive and negative.
- [ ] **Request Google reviews from every graduating client** — automate via Klaviyo review request flow.

## This Month

- [ ] **Set up Meta Ads** — $2,000-$3,000/month. Video ads with transformations. Retarget website visitors. Details in `MARKETING-PLAN-2.5M.md`.
- [ ] **Run 4 events** — 2x impulse control, 1x adult social, 1x puppy social. Minimum.
- [ ] **Contact 5 local vets** — offer free training consult for their clients. Build referral pipeline.
- [ ] **Contact 3 dog walkers/groomers** — cross-referral partnerships.
- [ ] **Formalize referral program** — graduates get a free drop-in for every referral that books.
- [ ] **Submit to local directories** — Yelp, Yellow Pages Canada, BBB, 411.ca, BlogTO, DogTrainingDirectory.ca.
- [ ] **Publish 4 new blog posts** — 2 educational, 1 area-specific, 1 comparison.
- [ ] **Launch digital products** — e-collar course ($197-$297), reactivity guide ($47), puppy starter pack ($27) on online store.
- [ ] **Set up CASL consent checkbox** — add to all forms (Canadian anti-spam law requirement).

## Ongoing (Weekly)

- [ ] **Same-day callback on every lead** — non-negotiable
- [ ] **3-4 emails per week** via Klaviyo (campaigns from monthly templates)
- [ ] **1 Instagram post per day** — training videos, tips, client wins, behind the scenes
- [ ] **1 YouTube transformation video per week**
- [ ] **3 Google Business Profile posts per week**
- [ ] **Respond to all reviews within 24 hours**
- [ ] **Track lead source on every inquiry** — Google, Instagram, referral, website

## Ongoing (Monthly)

- [ ] **Write next month's 16 campaign emails** — follow pillar balance in `email-campaigns/README.md`
- [ ] **Publish 4 new blog posts** — content calendar in `seo-plan.md`
- [ ] **Get 10+ new Google reviews**
- [ ] **Run 4+ events** — drop-ins, socials, hikes
- [ ] **Run 1 graduate hike** ($55, 15 spots) — builds community + Instagram content
- [ ] **Monitor Google Search Console** — check ranking keywords, fix crawl errors
- [ ] **Monitor Google Analytics** — traffic, page views, form submissions, conversion rate
- [ ] **Review ad spend vs leads** — Google Ads under $50/lead, Meta under $40/lead
- [ ] **Check Anthropic credits** — top up if chatbot usage is high
- [ ] **Review and respond to all client emails/inquiries same day**

## Quarterly

- [ ] **Run CGC Test Day** ($75/dog, 10 spots) — gives training a formal credential
- [ ] **Client appreciation event** — free for graduates, builds loyalty + referrals
- [ ] **Pitch to local media** — BlogTO, Daily Hive, Toronto Star "best dog trainers" features
- [ ] **Enter business awards** — Readers' Choice, Consumer Choice, ThreeBest
- [ ] **Review and raise prices** — $200-$500 increase per program annually
- [ ] **Write next quarter's blog content calendar**
- [ ] **Refresh top-performing blog posts** — update dates, add new info

## Technical Debt

- [ ] **Klaviyo event naming** — group-classes and puppy-classes both fire `Curriculum Download` event (naming collision). Rename one.
- [ ] **CASL consent tracking** — add consent checkbox to all forms (ContactForm, QuizForm, in-home application)
- [ ] **Set up Microsoft Clarity** — add real project ID to `src/layouts/Layout.astro` (placeholder currently)
- [ ] **Fix sitemap** — 37 blog posts showing instead of 45. Check for `draft: true` or date issues.
- [ ] **Puppy page rework** — apply same conversion treatment as B&T and private lessons pages
- [ ] **Link Google Ads to Analytics** — Tools → Linked accounts → Google Analytics in Ads dashboard
- [ ] **Set up conversion tracking in Google Ads** — track form fills and phone calls as conversions

## Revenue Targets (Monthly)

| Stream | Target | How |
|---|---|---|
| Board & Train | $80,000 | 20 dogs/month @ $4,000 avg |
| Private Lessons | $20,000 | 13 packages/month |
| In-Home Training | $10,000 | 16 sessions/month |
| Group Classes | $15,000 | 25 students/month |
| Puppy Programs | $10,000 | 15 students/month |
| Puppy Start Right | $12,000 | 3 enrollments/month |
| Drop-In Events | $5,000 | 100 attendees/month |
| Daycare | $25,000 | 50 dogs rotating |
| Boarding | $15,000 | 20 dogs/month |
| Digital Products | $5,000 | Online store + courses |
| **TOTAL** | **$200,000/month** | **$2.4M/year** |

Full plan with phases, ad budgets, and strategy in `MARKETING-PLAN-2.5M.md`.

## Recently Completed

- [x] Homepage redesign with conversion optimization
- [x] Board & Train full rework (3 transformation videos, lifetime support, off-leash guarantee, before/after)
- [x] Private Lessons full rework (photo quotes, session flow, new headline)
- [x] Group Classes rework (first day video, Level 3 teaser, bundle positioning)
- [x] AI Chatbot (Claude Sonnet, auto-popup, correct pricing, callback flow)
- [x] In-Home premium page ($625/session, Hormozi framework)
- [x] Events page (drop-ins + socials with Stripe)
- [x] 30 area pages targeting wealthy neighbourhoods
- [x] 45 blog posts (10 in-home focused)
- [x] Google Analytics (G-450PG6DTXP)
- [x] Google Search Console (verified, sitemap submitted)
- [x] Meta Pixel (886775375816530)
- [x] Klaviyo wired in + setup guide written
- [x] 16 month 1 campaign emails written
- [x] 28 flow emails with HTML templates
- [x] Domain: training.k9academy.ca live
- [x] Mobile optimization (tighter heroes, chatbot fixes)
- [x] Em-dashes removed sitewide
- [x] README, TODO, Klaviyo guide, marketing plan for staff
