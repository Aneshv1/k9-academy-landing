# K9 Academy Landing

Astro + Tailwind marketing site for K9 Academy Toronto. Deployed on Vercel.

## Continuing on another computer

```bash
gh repo clone Aneshv1/k9-academy-landing
cd k9-academy-landing
npm install
npm run dev
```

Site runs at http://localhost:4321

Link to Vercel (optional, for `vercel env pull` / deploys):

```bash
vercel link --project k9-academy-landing --scope k9-academy
```

## Scripts

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run preview` — preview the build
- `vercel deploy` — preview deploy
- `vercel deploy --prod` — production deploy

## Project layout

```
src/
  pages/
    index.astro              — home
    private-lessons.astro    — private training ($1,350 / $1,685)
    group-classes.astro      — Level 1/2/3 group obedience
    board-and-train.astro    — board & train programs
    puppy-classes.astro      — puppy program
    api/                     — form handlers
  components/
    Navbar.astro
    Footer.astro
    ContactForm.astro
    Awards.astro
  layouts/
    Layout.astro
  styles/
    global.css
public/
  (drop hero.mp4, hero.jpg, group-hero.mp4, etc. here)
```

## Hero media placeholders

Both `private-lessons.astro` and `group-classes.astro` have a hero media slot with a placeholder. To swap in a real asset:

1. Drop the file at `public/hero.mp4` (private) or `public/group-hero.mp4` (group).
2. In the page, find the `<!-- TODO: Replace with hero video or photo -->` comment.
3. Replace the placeholder `<div>` below it with the commented `<video>` or `<img>` tag.

## Upcoming class dates

`src/pages/group-classes.astro` has a schedule block with placeholder dates marked `[DATE TBD]`. Update them in the `startDate` field of each cohort object. Status options per cohort:

- `'almost-full'` — red badge (use with `spotsText: 'N spots left'`)
- `'filling'` — amber pulsing badge
- `'open'` — green badge
- `'waitlist'` — grey badge

## Social proof sections

Both `private-lessons.astro` and `group-classes.astro` have a large SOCIAL PROOF section with:

- Google Reviews grid (9 cards)
- Instagram + Facebook DM mockups (8 cards)
- Client emails (4 cards)

Each card is data-driven — edit the arrays inline. Private page tags by **issue** (aggression, separation anxiety, etc.); group page tags by **breed + issue**.

The headline count reads "10,000+ dogs trained" — keep this in sync if it changes.

## Key brand facts baked into copy

- **10,000+ dogs trained** (in social proof headers, hero floating card)
- **4.9/5 Google** · **250+ reviews**
- Private training: 6-session Advanced Obedience ($1,350) + 8-session Behaviour Modification ($1,685)
- Group: Level 1/2/3 at $595 each, Level 1+2 bundle $995
- Leaside location: 16-30 Canvarco Rd, Toronto
- Phone: 437-778-5273

## Deploy

Pushes to `main` auto-deploy production via Vercel.

Manual:

```bash
vercel deploy --prod
```
