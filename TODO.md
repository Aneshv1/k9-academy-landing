# K9 Academy — To Do List

## This Week (Do Now)

- [ ] **Set up Google Search Console** — go to search.google.com/search-console, verify your domain, submit sitemap: `https://k9-academy-landing.vercel.app/sitemap-index.xml`
- [ ] **Optimize Google Business Profile** — add photos, all services, service areas (Leaside, East York, Davisville, Moore Park, Lawrence Park, Rosedale, Yorkville, Summerhill, Midtown, Forest Hill, Don Mills), update hours, write keyword-rich description
- [ ] **Set up review request** — add automated email in Klaviyo asking for a Google review after training completion
- [ ] **Get real tracking IDs** — Google Analytics, Microsoft Clarity, Meta Pixel — or remove the placeholder scripts (they're loading for nothing right now)
- [ ] **Update group-classes schedule dates** — cohort dates are from April (past). Update to current upcoming dates.
- [ ] **Record group classes hero video** — overview video showcasing both Level 1 and Level 2 programs. Placeholder is ready on the page.

## This Month

- [ ] **Build the guide PDF** — content is in `guide-design-prompt.md`, paste into claude.ai to design, download as PDF, host as lead magnet
- [ ] **Submit to local directories** — Yelp, Yellow Pages Canada, BBB, 411.ca, BlogTO, DogTrainingDirectory.ca
- [ ] **Contact 3 local vets** — ask to be listed on their "recommended trainers" page (free backlink)
- [ ] **Add real hero media to private-lessons** — still has placeholder hero section (no video/photo)
- [ ] **Verify og-image.jpg** exists in public/ folder (1200x630px, under 200KB) — needed for social shares
- [ ] **Create favicon + OG image** for Academy Daycare site too
- [ ] **Write 2nd blog post for May** — see content ideas in `seo-plan.md`

## Ongoing (Monthly)

- [ ] **Publish 2 new blog posts per month** — content calendar through December is in `seo-plan.md`
- [ ] **Get 5-10 new Google reviews per month** — use the Klaviyo flow
- [ ] **Post weekly on Google Business Profile** — training tips, client wins, photos
- [ ] **Refresh existing blog posts quarterly** — update dates, add new info, keep content fresh
- [ ] **Monitor Google Search Console** — check which keywords are ranking, fix crawl errors

## Technical Debt

- [ ] **Klaviyo cleanup** — group-classes and puppy-classes both fire `Curriculum Download` event (naming collision). Rename one. Service field not mapped to Klaviyo properties. Client-side only (leaky).
- [ ] **Build Klaviyo email flows** — 7 flows are written in `klaviyo-flows.md`, need to be built in Klaviyo
- [ ] **CASL consent tracking** — no consent checkbox on forms yet (Canadian anti-spam law)
- [ ] **Remove or replace placeholder tracking scripts** — GA_MEASUREMENT_ID, YOUR_CLARITY_PROJECT_ID, YOUR_PIXEL_ID in Layout.astro
- [ ] **Rebuild Klaviyo email templates** — 21 HTML templates exist in `email-templates/` but need to be rebuilt using the strategy in `email-playbook.md` and `klaviyo-flows.md`

## Future Enhancements

- [ ] **Add /faq page** — aggregate top 20 FAQs from all service pages into one AIO-optimized page
- [ ] **Add HowTo schema** to how-to blog posts (potty training, crate training, leash walking) for Google step-by-step cards
- [ ] **Academy Daycare site** — hero photo from Google Drive, analytics setup, favicon
- [ ] **RSS feed** for the blog
- [ ] **More YouTube videos** — add transformation videos to private-lessons page as content becomes available
- [ ] **Real Instagram embed** — consider Elfsight or similar service to pull live posts into the homepage section

## Recently Completed

- [x] **Rebuilt group-classes page** — Level 1 deep-dive with test videos, comparison chart, Level 2 off-leash section, Level 3 "The Impossible" aspirational section, FAQ accordion, sticky mobile CTA
- [x] **Added Level 1 test videos** — YouTube embeds (3N_QU9tk5Bs, bUkxQEh7Omo) on group-classes page
- [x] **Added FAQ to group-classes** — 7 questions covering top objections (tried elsewhere, reactive dogs, all breeds, missed sessions, etc.)
- [x] **Added comparison chart** — K9 Academy Group vs Other Group Classes vs Private Lessons (elsewhere)
- [x] **Added sticky mobile CTA** — slides up on scroll, shows on mobile/tablet only
- [x] **Removed fake Instagram/Facebook DMs** — from group-classes, board-and-train, and private-lessons pages
- [x] **Published tick/Lyme disease blog post** — comprehensive 2026 guide for Ontario dog owners
- [x] **Built 21 Klaviyo email templates** — in `email-templates/` (need rebuild per playbook)

## What's Live Right Now

- **48 indexed pages** on k9-academy-landing.vercel.app
  - 5 service pages (home, private, group, board & train, puppy, puppy start right)
  - 31 SEO blog posts at /blog (including new ticks/Lyme post)
  - 11 neighbourhood landing pages at /areas/
  - Blog index at /blog
- **SEO infrastructure**: sitemap, robots.txt, JSON-LD schemas (LocalBusiness, Service, FAQPage, Article), canonical URLs, meta tags on all pages
- **Footer**: area links for internal linking + Google discovery
- **Homepage**: blog section, Instagram phone mockup, podcast embed
