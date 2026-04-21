# K9 Academy Website Playbook
## A complete blueprint for building high-converting service landing pages

Use this as a reference when building new sites (e.g., Academy Daycare). Every tactic here was built and tested on the K9 Academy Training landing site.

---

## STACK

- **Framework:** Astro (static + server routes, fast, SEO-friendly)
- **Styling:** Tailwind CSS
- **Hosting:** Vercel (auto-deploy from GitHub on push to main)
- **Database:** Supabase (leads table)
- **Email notifications:** Resend (instant alerts to team on form submit)
- **Email marketing:** Klaviyo (client-side tracking + server-side events)
- **DNS:** Cloudflare
- **Analytics:** GA4, Meta Pixel, Microsoft Clarity (placeholders — replace IDs)

### Setup commands
```bash
npm create astro@latest
npx astro add tailwind
npm install @supabase/supabase-js resend @astrojs/sitemap
```

### Vercel env vars needed
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `RESEND_API_KEY`
- `KLAVIYO_PRIVATE_API_KEY` (if doing server-side)
- `KLAVIYO_LIST_ID` (if doing server-side)
- `NOTIFY_FROM` (e.g., `Leads <leads@yourdomain.ca>`)
- `NOTIFY_TO` (e.g., `contact@yourdomain.ca`)

---

## SITE ARCHITECTURE

### Pages
```
src/pages/
  index.astro              — homepage (hero, quiz, programs, social proof, about, contact)
  [service-1].astro        — service page (hero, pain points, programs/pricing, social proof, contact)
  [service-2].astro        — repeat for each service
  [service-3].astro
  api/submit.ts            — form handler (Supabase + Resend + Klaviyo)
```

### Components
```
src/components/
  Navbar.astro             — fixed nav, desktop links + mobile hamburger menu
  Footer.astro             — contact info, social links, legal
  ContactForm.astro        — main lead capture form (name, email, phone, service, message)
  QuizForm.astro           — scored behaviour assessment with email gate
  GuideBanner.astro        — slim CTA banner on service pages linking to quiz
  YouTubeEmbed.astro       — thumbnail lazy-load (no iframe until click)
  Awards.astro             — trust badges / awards strip
src/layouts/
  Layout.astro             — head tags, meta, SEO, analytics, JSON-LD
```

---

## DESIGN SYSTEM

### Colors
- **Primary:** Orange (k9-orange) — CTAs, accents, badges
- **Dark:** neutral-950 — hero backgrounds, dark sections
- **Light:** white / neutral-50 — content sections
- **Text:** neutral-900 (headings), neutral-400/500 (body on dark), neutral-600 (body on light)

### Pattern: Alternating sections
Dark → Light → Dark → Light. Never two of the same background color in a row. Creates visual rhythm without borders.

### Typography
- Font: Inter (system-ui fallback)
- H1: text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold
- H2: text-3xl sm:text-4xl font-extrabold
- Body: text-sm leading-relaxed
- All caps labels: text-xs tracking-widest uppercase

---

## HERO PATTERN (every service page)

Split layout: copy left, media right.

**Left side:**
1. Google review pill (4.9/5 · 250+ reviews)
2. H1 headline — short, punchy, keyword-optimized
3. Quote badge (client quote in italics, subtle border)
4. Subtext — 1-2 sentences, what you do + for who
5. Outcome checklist — 6 items in 2-col grid with orange checkmarks
6. CTA buttons — primary orange + secondary phone link
7. Trust line — small text badges (free consultation, X dogs trained, etc.)

**Right side:**
- YouTubeEmbed component (thumbnail + play button, no iframe until click)
- Or hero image/video placeholder

### Hero headlines that work
- "Fix the behaviour **other trainers couldn't**"
- "The class that **replaces every other class** you've ever tried"
- "A transformed dog — **without doing it yourself**"
- "A [service] where they **actually learn**"

Pattern: promise + bold differentiator. Keep under 10 words for the main line.

---

## SOCIAL PROOF STRATEGY

### Three tiers per service page

**1. Google Reviews (9 cards)**
- Colored circle with initial (profile icon)
- Name, time ago
- Issue badge (orange pill: "Reactivity", "Separation anxiety", etc.)
- 5 stars
- Headline (bold)
- Review text
- Detail line (breed + program)
- Source: scrape real reviews from Google/Yelp/Bark, rewrite in real client voice

**2. Instagram / Facebook DMs (6-8 cards)**
- Gradient avatar circle
- Handle + platform
- Issue badge
- Chat bubbles (left-aligned, gray bg)
- Voice: fragments, ALL CAPS, casual spelling, "lol", "ngl", "rn"
- No perfect grammar. Real texts are messy.

**3. Client Emails (4-5 cards)**
- Anonymized: initials only (B. W., not Brittany Watson)
- Masked email: b•••••@gmail.com
- Issue badge
- Subject line (bold)
- Body text (whitespace-pre-line)
- "to contact@yourdomain.ca"
- Vary lengths dramatically — one should be 2 lines, one should be 3 paragraphs

### Key rules
- Spread issues across ALL behavioural categories (don't cluster)
- Reference real trainer names
- Reference specific programs by name
- Include real breeds your clients have
- Not every review is a dramatic transformation — some are just "thanks, it worked"
- Pull voice patterns from actual reviews (scrape Google/Yelp/Bark first)

---

## LEAD CAPTURE STRATEGY

### Primary: Contact Form (every page)
Fields: name, email, phone, dog info, service dropdown, message
Submits to `/api/submit` → Supabase + Resend notification + Klaviyo

### Secondary: Behaviour Quiz (homepage)
Scored assessment — 6-7 questions, each scored 1-3.
- Step 1: category select (determines path — e.g., puppy vs adult)
- Steps 2-7: scored behavioural questions
- Results hidden behind email gate ("Your results are ready — where should we send them?")
- After email submit: personalized results email via Resend with score, breakdown, tips, and curriculum
- Soft CTA: "or skip straight to talking to us →"
- Fires Klaviyo event with all scores as properties for segmentation

### Tertiary: Guide Banner (service pages)
Slim dark banner above contact form: "Take the Quiz" → links to homepage quiz.
Does NOT compete with the main form — just catches people who aren't ready to commit.

### Lead magnet philosophy
- Don't give away a PDF that teaches enough to DIY
- The quiz IS the lead magnet — people love seeing their score
- Hide the score behind email capture (they answer questions for free, pay with email to see results)
- The follow-up email delivers real value (score + tips + curriculum)
- Every email ends with a soft CTA, not a hard sell

---

## API ROUTE PATTERN (api/submit.ts)

```typescript
// 1. Validate (name + email required, phone optional for quiz)
// 2. Supabase insert (leads table)
// 3. Resend → internal notification to team (every submission)
// 4. Resend → personalized results email to lead (quiz submissions only)
// 5. Klaviyo handled client-side via _learnq (upgrade to server-side later)
// 6. Return { success: true, supabase: bool, email: bool }
```

### Resend notification email
- From: `Leads <leads@yourdomain.ca>`
- To: `contact@yourdomain.ca`
- Reply-to: lead's email (so you can hit Reply and respond directly)
- Subject: `New lead: {name} — {service}`
- Body: clean HTML table with all form fields

### Resend quiz results email
- From: `Brand Name <contact@yourdomain.ca>`
- To: lead's email
- Reply-to: `contact@yourdomain.ca`
- Subject: `Your dog scored {score}/{max} — here's the full breakdown`
- Body: branded HTML with score, breakdown table, personalized tips, CTA

---

## SEO CHECKLIST

### Foundations (Layout.astro)
- [ ] Unique `<title>` per page with target keyword + brand
- [ ] Unique `<meta name="description">` per page (under 160 chars)
- [ ] `<link rel="canonical">` on every page
- [ ] `<meta property="og:title/description/image/url/type">` per page
- [ ] `<meta name="twitter:card" content="summary_large_image">`
- [ ] `lang="en"` on `<html>`
- [ ] LocalBusiness JSON-LD (address, phone, geo, rating, price range)

### Per service page
- [ ] Service JSON-LD with offers/pricing
- [ ] FAQPage JSON-LD (4+ questions with keyword-rich answers)
- [ ] One H1 per page containing target keyword
- [ ] Target keyword in first paragraph of body copy

### Infrastructure
- [ ] `@astrojs/sitemap` installed, `site` set in astro.config.mjs
- [ ] `public/robots.txt` with sitemap directive
- [ ] `public/og-image.jpg` (1200x630)
- [ ] Google Search Console verified
- [ ] Submit sitemap URL in Search Console

### Target keyword format
- Homepage: "[service] [city]" (e.g., "dog training Toronto")
- Service pages: "[specific service] [city]" (e.g., "board and train dog training Toronto")

---

## YOUTUBE EMBED PATTERN

Never load YouTube iframes on page load. Use the YouTubeEmbed component:
1. Show high-res thumbnail (`img.youtube.com/vi/{id}/maxresdefault.jpg`)
2. Overlay with orange play button
3. On click: replace with iframe + autoplay
4. Saves ~500KB per video on initial page load

For video carousels: main video uses YouTubeEmbed, thumbnail strip below. Clicking a thumbnail replaces the main video with an iframe.

---

## NAVBAR PATTERN

Desktop: direct links to each service page + phone number + orange CTA button
Mobile: phone icon + hamburger menu → dropdown with all pages + CTA

No dropdown menus on desktop. Direct links feel bigger and more established than a "Programs" dropdown.

---

## RESEND SETUP (email notifications)

1. Sign up at resend.com (free: 3,000 emails/mo)
2. Add domain → auto-configure via Cloudflare (or manual DNS)
3. Create API key (sending access only)
4. Add `RESEND_API_KEY` to Vercel env (production + preview)
5. Wire into api/submit.ts

### Sender addresses
- `leads@yourdomain.ca` — internal notifications (to your team)
- `contact@yourdomain.ca` — client-facing emails (quiz results, auto-replies)
- Reply-to always points to the inbox you actually check

---

## KLAVIYO SETUP

### Client-side (already working)
```html
<script async src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=YOUR_ID"></script>
```
Push `identify` + `track` events from form submit handlers and quiz.

### Events to fire
- `Landing Page Inquiry` — main contact form
- `Behaviour Quiz Completed` — quiz (with all scores as properties)
- `Guide Requested` — quiz email capture
- `Curriculum Download` — any curriculum/guide download form

### Profile properties for segmentation
- Source, Quiz Challenge, Quiz Score, Quiz Dog Age
- Individual area scores (Reactivity: 1, Recall: 3, etc.)
- Recommended Program
- Phone

### Flows to build
See `klaviyo-flows.md` for full playbook with email copy, subject lines, and conditional logic.

---

## PRIVACY PATTERNS

- Client emails: show initials only (B. W., not full names)
- Email addresses: masked (b•••••@gmail.com)
- DM handles: use dog-name handles, not real person handles
- Google reviews: first name + last initial is fine (matches Google's display)
- Never use a real client's full name + email + specific story without consent

---

## CONVERSION OPTIMIZATION NOTES

- Every page ends with a contact form — no dead ends
- Phone number visible in navbar on every page (one-tap on mobile)
- "Get Started" CTA is orange and appears in navbar, hero, and end of every section
- Social proof sections end with a CTA button
- Quiz is on the homepage only — service pages have direct contact forms (visitor already knows what they want)
- Guide banner on service pages is subtle — doesn't compete with the main form
- Urgency: cohort dates with status badges (Almost full / Filling fast / Open / Waitlist)
- Trust: Google review count, star rating, and "10,000+ dogs trained" appear on every hero

---

## DEPLOYMENT

```bash
# Preview
vercel deploy

# Production
vercel deploy --prod

# Or just push to main — auto-deploys via GitHub integration
git push origin main
```

Auto-deploy is configured. Every push to `main` triggers a production build on Vercel (~18 seconds).
