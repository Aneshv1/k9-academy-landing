# K9 Academy — Klaviyo Flow Playbook

All flows below use data already being sent to Klaviyo from the landing site. Profile properties and events are wired and live.

---

## FLOW 1: Quiz Results Nurture

**Trigger:** Metric → `Behaviour Quiz Completed` OR `Guide Requested`

### Email 1 — Immediate (0 min delay)
**Subject:** Your dog scored {{ event.Score }}/{{ event.MaxScore }} — here's what that means
**Preview text:** Plus one thing you can try today

> Hi {{ person.first_name|default:"there" }},
>
> You just took the K9 Academy behaviour assessment — thanks for doing that.
>
> Your dog scored **{{ event.Score }}** out of {{ event.MaxScore }}. Here's what stood out:
>
> [Dynamic block: pull from event properties. Show weakest areas.]
>
> **One thing to try today:**
> [Pull the top tip from event.Challenge — e.g., if Challenge = "reactivity", show the reactivity tip from the guide]
>
> The full behaviour guide is attached — it covers all 6 areas in detail with actionable tips for each.
>
> If you want faster results, we're here: **437-778-5273** or reply to this email.
>
> — The K9 Academy Team

**Attach:** Behaviour Assessment PDF (upload to Klaviyo as hosted file)

---

### Email 2 — Day 2
**Subject:** The #1 mistake owners make with {{ event.Challenge|replace:"_":" " }} dogs
**Preview text:** It's not what you think

> Hi {{ person.first_name|default:"there" }},
>
> When we see dogs that struggle with [challenge], there's almost always one thing the owner is doing that makes it worse — without realizing it.
>
> [Write 3-4 sentences specific to the challenge. Use the "What most owners get wrong" section from the guide as a template.]
>
> The good news: it's fixable. And it's usually faster than you think.
>
> We've worked with over 10,000 dogs in Toronto — many with the exact same issue your dog has. Here's what one of our clients said:
>
> [Pull a 2-3 sentence testimonial matching the challenge. Use the real review data from the landing page.]
>
> Want to talk about your dog specifically? Reply to this email or call us at **437-778-5273**.
>
> — K9 Academy

---

### Email 3 — Day 5
**Subject:** What training actually looks like for your dog
**Preview text:** It's not what you've seen on YouTube

> Hi {{ person.first_name|default:"there" }},
>
> Based on your quiz answers, here's what we'd typically recommend for a dog like yours:
>
> **[Conditional block based on quiz score:]**
>
> **Score 6-9 (adult) / 6-8 (puppy):**
> Your dog would benefit most from **Private Training** or **Board & Train**. These are for dogs with multiple behavioural issues that reinforce each other — trying to fix them one at a time in a group setting usually doesn't work.
> - Private Training: 6 or 8 sessions, $1,350-$1,685
> - Board & Train: 2-8 weeks, $2,995-$4,995
>
> **Score 10-14 (adult) / 8-12 (puppy):**
> **Group Classes** are the sweet spot. Real-world distractions, structured progression, and a community of owners working through the same stuff.
> - Level 1: $595 (6 weeks)
> - Level 1+2 Bundle: $995 (save $195)
>
> **Score 15-18 (adult) / 13-15 (puppy):**
> Your dog is in great shape. A **Level 2 or Level 3** group class would take you from good to off-leash reliable. Or a tune-up private session if there's one specific thing you want to nail.
>
> [CTA button: "Get Started — Talk to a Trainer"]
>
> — K9 Academy

---

### Email 4 — Day 7
**Subject:** Spots are filling for {{ current_month }} classes
**Preview text:** Just a heads up

> Hi {{ person.first_name|default:"there" }},
>
> Quick note — our next round of group classes and private training spots are filling up for [month].
>
> We open new cohorts regularly but they always fill. If you've been thinking about it, now's a good time to get on the list so you don't have to wait another cycle.
>
> No pressure — just didn't want you to miss the window.
>
> **[CTA: "Get on the List"]** → links to /#contact
>
> — K9 Academy
> 437-778-5273

---

## FLOW 2: Form Submission Auto-Reply

**Trigger:** Metric → `Landing Page Inquiry`

### Email 1 — Immediate
**Subject:** We got your message, {{ person.first_name|default:"" }}
**Preview text:** Someone from our team will be in touch shortly

> Hi {{ person.first_name|default:"there" }},
>
> Thanks for reaching out to K9 Academy. We got your inquiry and someone from our team will be in touch within a few hours — usually much sooner.
>
> In the meantime, here are a few things that might help:
>
> - **[Take our free behaviour quiz](https://k9-academy-landing.vercel.app/#quiz)** — get a score and personalized tips for your dog
> - **Call us directly:** 437-778-5273
> - **Visit us:** 16-30 Canvarco Rd, Leaside, Toronto
>
> Talk soon.
>
> — K9 Academy Team

---

### Email 2 — 24 hours (only if not marked as contacted)
**Subject:** Following up on your inquiry
**Preview text:** We don't want you to fall through the cracks

> Hi {{ person.first_name|default:"there" }},
>
> Just following up — we received your inquiry yesterday and want to make sure we connect.
>
> If you'd prefer to skip email and just talk, call us at **437-778-5273** — we usually pick up on the first ring.
>
> — K9 Academy

---

## FLOW 3: Puppy Quiz Nurture

**Trigger:** Metric → `Behaviour Quiz Completed` WHERE `Puppy Path = true`

(Override Flow 1 for puppy quiz takers)

### Email 1 — Immediate
**Subject:** Your puppy scored {{ event.Score }}/15 — here's the breakdown
**Preview text:** Plus the puppy curriculum

> Hi {{ person.first_name|default:"there" }},
>
> Your puppy scored **{{ event.Score }}/15** on the K9 Academy assessment. Here's where they stand:
>
> [Score breakdown table from the Resend email — replicate the format]
>
> **What we'd recommend:**
>
> Based on your answers, the **{{ event.Score >= 13 ? "Foundation Program" : "Puppy Program" }}** is the best fit:
>
> **Puppy Program** — 4 sessions, $450
> Covers commands, socialization, bite inhibition, potty + crate training, and leash walking fundamentals.
>
> **Foundation Program** — 10 sessions, $785 (save $260)
> Everything in the Puppy Program plus full Level One obedience. The complete package.
>
> Both include the K9 Academy Puppy Handbook, clicker, and certificate.
>
> **[CTA: "Get on the Waitlist"]** → /puppy-classes#contact
>
> — K9 Academy

### Email 2 — Day 3
**Subject:** The socialization window is closing
**Preview text:** It shuts around 14-16 weeks

> Hi {{ person.first_name|default:"there" }},
>
> Quick heads up — the critical socialization window for puppies closes around 14-16 weeks. After that, introducing new experiences gets significantly harder.
>
> This doesn't mean your puppy is doomed if they're past that age. But it does mean that every week you wait, the work gets a little harder.
>
> Our Puppy Program is designed around this window. We expose your puppy to new people, dogs, sounds, and environments in a structured way — not a free-for-all playgroup.
>
> New puppy classes open regularly. Get on the list and we'll reach out as soon as the next one opens.
>
> **[CTA: "Get on the Waitlist"]**
>
> — K9 Academy

---

## SETUP NOTES

### Events available in Klaviyo (already firing):
- `Landing Page Inquiry` — from ContactForm on all pages
- `Behaviour Quiz Completed` — from quiz (adult path)
- `Guide Requested` — from quiz (both paths)
- `Curriculum Download` — from puppy/group curriculum forms

### Profile properties available for segmentation:
- `Source` — "Quiz", "Landing Page", "Guide Banner"
- `Quiz Challenge` — pulling, reactivity, recall, separation, etc.
- `Quiz Score` — total numeric score
- `Quiz Dog Age` — age bracket
- `Quiz Reactivity` / `Quiz Alone` / etc. — individual scores (1-3)
- `Quiz Path` — "adult" or "puppy"
- `Recommended Program` — program name (when applicable)
- `Phone` — captured on main form, optional on quiz

### Sender settings:
- **From:** K9 Academy <contact@k9academy.ca>
- **Reply-to:** contact@k9academy.ca (same inbox you check)

### Timing notes:
- Flow 1 (quiz nurture) should suppress if the person submits a contact form inquiry (they're already talking to you)
- Flow 2 (auto-reply) should suppress if they already went through the quiz flow
- Use Klaviyo's "Has not been in this flow" filter to prevent overlap
