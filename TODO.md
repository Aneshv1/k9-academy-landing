# K9 Academy — To Do List

## Apprenticeship Marketing (May 2027 Intake)

- [ ] **Meta ad creatives** - Design image/video ads for the apprenticeship. Use hooks from `k9-apprenticeship-knowledge.md`
- [ ] **Meta campaign setup** - Create campaign targeting career changers, dog walkers, aspiring trainers. Set up audiences, budget, and ad sets
- [ ] **Klaviyo flow for applicants** - Triggered by "Apprenticeship Application" event. Confirmation email, follow-up sequence, interview scheduling
- [ ] **Retargeting ads** - Retarget people who hit /apprenticeship but didn't apply
- [ ] **Email nurture sequence** - For applicants after submission: what to expect, program prep, travel info for out-of-town applicants
- [ ] **Testimonials from past apprentices** - Get video/written testimonials for the page and ads
- [ ] **Application review process** - Set up internal workflow for reviewing and responding to applications within 48 hours

## Website Plan

### Audits
- [ ] **Page speed audit** - Run Lighthouse on all service pages, fix any scores below 90
- [ ] **Mobile UX audit** - Test all pages on iPhone/Android, fix any layout breaks or tap target issues
- [ ] **Form audit** - Test every form submission (contact, quiz, apprenticeship, chatbot lead capture) end to end
- [ ] **Broken link audit** - Scan all internal and external links sitewide
- [ ] **Image optimization** - Check all images are properly sized, compressed, and using modern formats (WebP/AVIF)
- [ ] **Accessibility audit** - Check contrast ratios, alt text, keyboard navigation, screen reader compatibility
- [ ] **Analytics audit** - Verify GA4, Meta Pixel, and Klaviyo events are all firing correctly on every page
- [ ] **Chatbot audit** - Test chatbot with 20+ questions, verify pricing accuracy, lead capture, and callback flow

### SEO
- [ ] **Fix sitemap** - 37 blog posts showing instead of 45, check for draft:true or date issues
- [ ] **Internal linking audit** - Make sure blog posts link to relevant service pages and vice versa
- [ ] **Meta descriptions** - Review and update meta descriptions on all service pages for click-through rate
- [ ] **Schema markup review** - Verify JSON-LD schemas are valid on all pages (LocalBusiness, Service, FAQ, Article)
- [ ] **Core Web Vitals** - Check LCP, FID, CLS in Search Console and fix any flagged pages
- [ ] **New blog content** - Publish 4 posts/month targeting long-tail keywords from Search Console data
- [ ] **Area page updates** - Add unique content to underperforming area pages (check Search Console for impressions vs clicks)
- [ ] **Competitor keyword gap** - Identify keywords competitors rank for that we don't, write content to fill gaps
- [ ] **Google Business Profile** - Weekly posts, respond to all reviews within 24 hours, add 20+ photos

### Progression Plan
- [ ] **Phase 1 (Now):** Clean up existing pages, fix all audits, ensure every form and tracking pixel works perfectly
- [ ] **Phase 2 (This Month):** Launch apprenticeship Meta ads, set up Klaviyo flows, start retargeting
- [ ] **Phase 3 (Next Month):** Add video testimonials to B&T, private lessons, and apprenticeship pages. Film hero video for homepage
- [ ] **Phase 4 (Ongoing):** 4 blog posts/month, monthly email campaigns, weekly Google Business posts, refresh top-performing content quarterly
- [ ] **Phase 5 (Q1 2027):** Ramp up apprenticeship ads 8 weeks before May intake, launch countdown email sequence, fill all spots

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

## Latest Completed (June 9, 2026)

- [x] Puppy page full conversion rework (3 pain points, urgency banner, quote, testimonials before pricing, removed filler)
- [x] Puppy Start Right testimonial video added
- [x] Events page: 5 event types with photos, bullets, requirements (impulse control, adult social, puppy social, group hike, pack walk)
- [x] Private lessons: "You need results quickly" pain point, photo+quote with Lincoln
- [x] Group classes: calm settling + reliable recall added to skills
- [x] Homepage: duplicate stats bar removed
- [x] Mobile chatbot fix (smaller floating box, not fullscreen)
- [x] Mobile hero optimization (tighter padding, hidden sub-text)
- [x] Build error fix (group-classes literal newlines)
- [x] Domain live: training.k9academy.ca
- [x] Klaviyo event naming fixed (puppy curriculum separate from group)
- [x] Klaviyo guide updated with events reference, campaign instructions, review automation, staff checklist
- [x] $2.5M marketing plan written
- [x] Daycare removed from contact form

## Latest Completed (September 2-3, 2026)

- [x] Apprenticeship page built and deployed (/apprenticeship, silent ad page)
- [x] Program updated: May 17-24, 8 days, 80 hours, $3,495 CAD
- [x] Canine first aid certification added to curriculum and value stack
- [x] All AI copy removed sitewide on apprenticeship page (no choppy fragments, no em dashes, natural sentences)
- [x] "Exclusive" changed to "Prestigious"
- [x] Misleading "paid professional in 8 days" headline replaced
- [x] 6 Meta ad copy variations written (career changer, passion angle, problem aware, short/punchy, hire hook, basic)
- [x] Apprenticeship knowledge file created for Leah (k9-apprenticeship-knowledge.md)
- [x] README updated with apprenticeship page, pricing, hidden pages
- [x] TODO updated with apprenticeship marketing tasks, website plan, audits, SEO, progression plan

## Latest Completed (June 10, 2026)

- [x] PR outreach emails (7 ready-to-send: BlogTO, Daily Hive, Toronto Star, podcast, vet, groomer, rescue)
- [x] Month 2 campaign emails (16 emails in email-campaigns/month-2/)
- [x] 10 new blog posts (55 total): best trainer Toronto, puppy socialization, training cost, e-collar guide, aggression guide, off-leash Toronto, Vaughan, Richmond Hill, Brampton, B&T timeline
- [x] Puppy Start Right conversion rework (3 pain points, single B&T vs 3 stays comparison, social proof, testimonial video, removed filler)
- [x] Group classes hero video added (rxf3wxky8qg)
- [x] Group classes hero badge: "#1 Rated Group Program in Toronto"
- [x] Level 2: off-leash guarantee, client quote (Katryna R.), removed bad indoor photo
- [x] Chatbot updated: no longer recommends specific programs, pushes for callback/lead capture
- [x] Events page: 5 event types with photos and bullets (impulse, social, puppy, hike, pack walk)
- [x] Affirm text updated on PSR page
