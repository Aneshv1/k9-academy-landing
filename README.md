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
    faq.astro                — 24 FAQs across 5 categories
    blog/                    — blog index + individual posts
    areas/                   — neighbourhood landing pages (SEO)
    api/
      submit.ts              — contact form + quiz results handler (Supabase + Resend)
      chat.ts                — AI chatbot API (Claude Haiku + Resend for leads)
  components/
    Navbar.astro             — site navigation
    Footer.astro             — footer with area links
    ContactForm.astro        — lead capture form (Supabase + Resend + Klaviyo)
    ChatBot.astro            — AI chatbot widget (appears on every page)
    Testimonials.astro       — client testimonials (from real emails)
    QuizForm.astro           — behavioural assessment quiz
    YouTubeEmbed.astro       — lazy-loaded YouTube player
    GuideBanner.astro        — PDF guide download banner
  content/
    blog/                    — 35 markdown blog posts
  data/
    areas.ts                 — neighbourhood data for area pages
  layouts/
    Layout.astro             — base layout (includes chatbot)
    BlogPost.astro           — blog post layout
  styles/
    global.css               — Tailwind + custom styles
public/
  images/                    — training photos, husky, group class, etc.
  badges/                    — award badges (Readers' Choice, ThreeBest, etc.)
  logo.png                   — K9 Academy logo
  robots.txt                 — SEO robots file
email-templates/             — 21 Klaviyo email HTML templates
```

## Key brand facts

- **10,000+ dogs trained** · **15+ years** · **4.9/5 Google (250+ reviews)**
- Phone: 437-778-5273
- Email: contact@k9academy.ca
- Leaside location: 16-30 Canvarco Rd, Toronto (private + group)
- Stouffville location: Board & Train + daycare
- Training methods: balanced training, e-collar protocols

## Pricing (keep in sync across pages)

| Program | Price |
|---------|-------|
| Puppy Program | $450 |
| Group Level 1/2/3 | $595 each |
| Group Bundle (all 3) | $995 |
| Foundation Program | $785 |
| Private 6-Session | $1,350 |
| Private 8-Session | $1,685 |
| Board & Train Basic (2wk) | $2,995 |
| Board & Train Standard (4wk) | $3,495 |
| Board & Train Premium (8wk) | $4,995+ |
| Puppy Start Right | $3,995 |

## AI Chatbot

The chatbot (`src/components/ChatBot.astro` + `src/pages/api/chat.ts`) uses Claude Haiku to answer visitor questions about programs, pricing, and training. It:
- Knows all programs, pricing, FAQ answers, locations, and methods
- Captures lead info (email/phone) from conversations
- Emails leads + full chat transcript to contact@k9academy.ca via Resend
- Costs ~$0.01-0.05 per conversation

The knowledge base is in the system prompt inside `api/chat.ts`. Update it if pricing or programs change.

## Updating content

- **Blog posts**: Add markdown files to `src/content/blog/`
- **Testimonials**: Edit `src/components/Testimonials.astro`
- **Group class dates**: Edit schedule block in `src/pages/group-classes.astro` (search for `startDate`)
- **Photos**: Drop images in `public/images/`, reference as `/images/filename.jpg`
- **Chatbot knowledge**: Update the `SYSTEM_PROMPT` in `src/pages/api/chat.ts`
- **Email templates**: In `email-templates/` — need to be built in Klaviyo manually

## Social proof sections

Private lessons and group classes pages have social proof grids with:
- Google Reviews cards
- Client email screenshots
- Before/after stories

Each is data-driven — edit the arrays inline in the page files.
