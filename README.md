# K9 Academy Landing

Astro + Tailwind marketing site for K9 Academy Toronto. Deployed on Vercel at **https://k9-academy-landing.vercel.app/**

## Getting started on a new computer

```bash
# 1. Clone the repo
gh repo clone Aneshv1/k9-academy-landing
cd k9-academy-landing

# 2. Install dependencies
npm install

# 3. Link to Vercel (needed to pull environment variables)
npx vercel link --project k9-academy-landing --scope k9-academy

# 4. Pull environment variables (.env file)
npx vercel env pull

# 5. Run the dev server
npm run dev
```

Site runs at http://localhost:4321

## Environment variables

These are set in Vercel and pulled via `npx vercel env pull`:

| Variable | Purpose |
|----------|---------|
| `SUPABASE_URL` | Supabase project URL for lead storage |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service key |
| `RESEND_API_KEY` | Resend for email notifications |
| `ANTHROPIC_API_KEY` | Claude AI for the chatbot |
| `NOTIFY_FROM` | Sender email for lead notifications |
| `NOTIFY_TO` | Where leads are emailed (contact@k9academy.ca) |

## Scripts

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run preview` — preview the build

## Deploy

Pushes to `main` auto-deploy to production via Vercel. No manual deploy needed.

Manual deploy (if needed):
```bash
npx vercel deploy --prod
```

## Project layout

```
src/
  pages/
    index.astro              — homepage
    board-and-train.astro    — board & train programs
    private-lessons.astro    — private training ($1,350 / $1,685)
    group-classes.astro      — Level 1/2/3 group obedience ($595 each)
    puppy-classes.astro      — puppy program ($450)
    puppy-start-right.astro  — puppy start right B&T ($3,995)
    in-home.astro            — premium in-home training ($625/session) [HIDDEN]
    events.astro             — drop-in classes + socials with Stripe [HIDDEN]
    faq.astro                — 24 FAQs across 5 categories
    blog/                    — blog index + individual posts
    areas/                   — 30 neighbourhood landing pages (SEO)
    api/
      submit.ts              — contact form + quiz results (Supabase + Resend)
      chat.ts                — AI chatbot API (Claude Haiku + Resend)
  components/
    Navbar.astro             — site navigation
    Footer.astro             — footer with area links
    ContactForm.astro        — lead capture form (Supabase + Resend + Klaviyo)
    ChatBot.astro            — AI chatbot widget (every page)
    BlogPostCTA.astro        — CTA + in-home promo at bottom of every blog post
    Testimonials.astro       — client testimonials (from real emails)
    QuizForm.astro           — behavioural assessment quiz
    YouTubeEmbed.astro       — lazy-loaded YouTube player
    GuideBanner.astro        — PDF guide download banner
  content/
    blog/                    — 45 markdown blog posts
  data/
    areas.ts                 — 30 neighbourhood entries for area pages
  layouts/
    Layout.astro             — base layout (includes chatbot)
    BlogPost.astro           — blog post layout with CTA
  styles/
    global.css               — Tailwind + custom styles
public/
  images/                    — training photos
  badges/                    — award badges
  logo.png                   — K9 Academy logo
  robots.txt                 — SEO robots file
email-templates/             — 21 Klaviyo email HTML templates
```

## Key brand facts

- **10,000+ dogs trained** · **15+ years** · **4.9/5 Google (250+ reviews)**
- Phone: 437-778-5273
- Email: contact@k9academy.ca
- Leaside: 16-30 Canvarco Rd, Toronto (private + group)
- Stouffville: 22 Cardico Dr, Gormley (Board & Train + daycare)
- Training methods: balanced training, e-collar protocols

## Pricing (keep in sync across pages + chatbot)

| Program | Price |
|---------|-------|
| Puppy Program | $450 |
| Group Level 1/2/3 | $595 each |
| Group Bundle (L1+L2) | $995 |
| Foundation Program | $785 |
| Private 6-Session | $1,350 |
| Private 8-Session | $1,685 |
| In-Home (per session) | $625 (+travel fee outside Toronto core) |
| Board & Train Basic (2wk) | $2,995 |
| Board & Train Standard (4wk) | $3,495 |
| Board & Train Premium (8wk) | $4,995+ |
| Puppy Start Right | $3,995 |
| Drop-In Impulse Control | $45 |
| Adult Dog Social | $55 |
| Puppy Social | $35 |

If you change pricing, update it in:
1. The service page itself
2. `src/pages/api/chat.ts` (chatbot system prompt)
3. This README

## Hidden pages

These pages are NOT linked in the nav or sitemap. Only accessible via direct link:

- `/in-home` — premium in-home training ($625/session, by application)
- `/events` — drop-in classes and socials with Stripe payment

## AI Chatbot

The chatbot (`ChatBot.astro` + `api/chat.ts`) uses Claude Haiku. It:
- Knows all programs, pricing, FAQ answers, locations, methods
- Captures lead info (email/phone) from conversations
- Emails leads + full chat transcript to contact@k9academy.ca via Resend
- Costs ~$0.01-0.05 per conversation

Update the `SYSTEM_PROMPT` in `api/chat.ts` if pricing or programs change.

## Events page

Edit `src/pages/events.astro`. Events are managed in an array at the top of the file:

1. Uncomment an event block
2. Set the `date`, `time`, and `stripeLink`
3. Push to deploy

When the event is over, comment it out or delete it. The page shows "Notify Me" when no dates are scheduled.

## Updating content

| What | Where |
|------|-------|
| Blog posts | Add `.md` files to `src/content/blog/` |
| Area pages | Add entries to `src/data/areas.ts` (pages auto-generate) |
| Testimonials | Edit `src/components/Testimonials.astro` |
| Group class dates | Edit `startDate` in `src/pages/group-classes.astro` |
| Photos | Drop in `public/images/`, reference as `/images/filename.jpg` |
| Chatbot knowledge | Update `SYSTEM_PROMPT` in `src/pages/api/chat.ts` |
| Email templates | In `email-templates/` (build in Klaviyo manually) |
| Events | Edit array in `src/pages/events.astro` |

## Writing rules (important)

- **Never use em-dashes (—)** in any copy. Use periods, commas, semicolons, or colons instead. Em-dashes are an AI writing giveaway.
- Write in Anesh's voice: direct, no fluff, expert, real, fifth-grade reading level.
- No corporate speak. No "vibecoded" look.
- Prices are non-negotiable. Never hint at discounts.

## SEO pages

**30 area pages** at `/areas/[slug]`:
- Toronto: Leaside, East York, Moore Park, Davisville, Lawrence Park, Rosedale, Yorkville, Summerhill, Midtown, Forest Hill, Don Mills, Bridle Path, York Mills, Casa Loma, Deer Park, The Annex, Hoggs Hollow, Chaplin Estates
- York Region: King City, Aurora, Kleinburg, Vaughan, Richmond Hill, Markham, Newmarket, Stouffville
- GTA: Oakville, Mississauga, Caledon, Brampton

**45 blog posts** at `/blog/[slug]`:
- Covers reactivity, board & train, puppy training, in-home training, area-specific posts, comparisons

## Social proof sections

Private lessons and group classes pages have social proof grids with:
- Google Reviews cards
- Client email screenshots
- Before/after stories

Each is data-driven. Edit the arrays inline in the page files.
