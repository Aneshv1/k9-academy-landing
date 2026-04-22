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

## FLOW 4: Group Curriculum Download

**Trigger:** Metric → `Curriculum Download` WHERE `Curriculum = Group Classes`

### Email 1 — Immediate
**Subject:** Here's your group class curriculum
**Preview text:** Level 1, 2, and 3 — full breakdown inside

> Hi {{ person.first_name|default:"there" }},
>
> Here's the full curriculum for our group obedience classes:
>
> **Level 1 — Basic Obedience (6 weeks, $595)**
> Loose leash walking, sit, down, stay, place, come, name recognition around distractions. Your dog learns to listen in a real-world group environment — not just your living room. Leash pulling is typically fixed by session 1.
>
> **Level 2 — Advanced Obedience (6 weeks + test, $595)**
> E-collar introduction, off-leash recall, distraction proofing, distance commands. Ends with a graduation hike where your dog is fully off leash on a real trail. This is where most owners say "I can't believe that's my dog."
>
> **Level 3 — Elite Obedience (8 weeks, $595)**
> Power heel, send-outs, A-frame, advanced off-leash work. For dogs that have graduated Level 2 and want to go further. Includes the "IMPOSSIBLE" test.
>
> **Level 1 + 2 Bundle — $995 (save $195)**
>
> Everyone starts at Level 1 regardless of experience. Our Level 1 covers more than most centres' highest level.
>
> Classes run at our Leaside location (16-30 Canvarco Rd). Small groups, limited spots.
>
> **[CTA: "Get on the Waitlist"]** → /group-classes#contact
>
> — K9 Academy

---

### Email 2 — Day 3
**Subject:** Next Level 1 class starts soon
**Preview text:** Spots are limited

> Hi {{ person.first_name|default:"there" }},
>
> Just a quick heads up — our next Level 1 group class is coming up and spots are filling.
>
> We keep groups small so every dog gets individual attention. That means they fill fast — we usually have a waitlist within a week of opening a new cohort.
>
> If you want in, get on the list now and we'll confirm your spot as soon as the next class opens.
>
> **[CTA: "Join the Waitlist"]** → /group-classes#contact
>
> Questions? Reply to this email or call us at **437-778-5273**.
>
> — K9 Academy

---

## FLOW 5: Puppy Curriculum Download

**Trigger:** Metric → `Curriculum Download` WHERE `Curriculum = Puppy Classes`

### Email 1 — Immediate
**Subject:** Here's your puppy program curriculum
**Preview text:** Puppy Program, Foundation, and Puppy Start Right compared

> Hi {{ person.first_name|default:"there" }},
>
> Here's the full breakdown of our puppy programs:
>
> **Puppy Program — 4 sessions, $450**
> For puppies under 5.5 months. Covers commands (sit, down, place, come), no-bite training, leash walking fundamentals, potty + crate training, recall intro, and structured socialization. Includes handbook, clicker, and certificate.
>
> **Foundation Program — 10 sessions, $785 (save $260)**
> Everything in the Puppy Program plus the full Level 1 obedience curriculum. Your puppy gets the strongest possible start in one seamless program.
>
> **Puppy Start Right — 3 × 2-week stays, $3,995**
> Our premium program. Three board and train stays spread across your puppy's first year — timed to their development stages:
> - Stay 1 (~8-14 weeks): Socialization, confidence, manners
> - Stay 2 (~4-6 months): Leash walking, obedience, calmness
> - Stay 3 (~7-10 months): Full off-leash reliability
>
> One board and train too young doesn't stick. Three at the right times builds a foundation that lasts.
>
> **[CTA: "Get on the Waitlist"]** → /puppy-classes#contact
>
> — K9 Academy

---

### Email 2 — Day 3
**Subject:** The first 6 months matter more than you think
**Preview text:** Here's why

> Hi {{ person.first_name|default:"there" }},
>
> Most of the adult dogs we work with — the reactive ones, the ones that pull, the ones that can't be left alone — developed those behaviours in their first 6 months.
>
> Not because their owners did anything wrong. But because the critical socialization window closed, bad habits formed, and by the time they were "old enough for training" the problems were 10x harder to fix.
>
> Starting now — even if your puppy seems fine — is the single best investment you can make in the next 10+ years with your dog.
>
> Our next puppy class opens soon. Get on the list and we'll reach out as soon as there's a spot.
>
> **[CTA: "Get on the Waitlist"]** → /puppy-classes#contact
>
> — K9 Academy

---

## FLOW 6: Puppy Start Right Nurture

**Trigger:** Metric → `Landing Page Inquiry` WHERE `Service = puppy_start_right` OR page URL contains `/puppy-start-right`

(For leads who inquire specifically about the $3,995 Puppy Start Right program)

### Email 1 — Immediate
**Subject:** We got your Puppy Start Right inquiry, {{ person.first_name|default:"" }}
**Preview text:** Here's what happens next

> Hi {{ person.first_name|default:"there" }},
>
> Thanks for your interest in Puppy Start Right — our 3-stay board and train program for puppies.
>
> Someone from our team will call you within a few hours to discuss your puppy's age, breed, and what you want to achieve. We'll map out the timing for all 3 stays based on where your puppy is right now.
>
> Quick reminder of how it works:
>
> **Stay 1 (~8-14 weeks)** — Socialization, confidence building, manners, crate introduction
> **Stay 2 (~4-6 months)** — Leash walking, obedience, calmness, impulse control
> **Stay 3 (~7-10 months)** — Full off-leash training, reliability in all scenarios
>
> Each stay is 2 weeks. Each builds on the last. Your puppy graduates fully trained and off-leash reliable — with no adolescent regression to undo.
>
> **$3,995 for all 3 stays.** Financing available through Affirm.
>
> Talk soon.
>
> — K9 Academy
> 437-778-5273

---

### Email 2 — Day 2
**Subject:** Why we don't do one long board and train for puppies
**Preview text:** Here's what most places get wrong

> Hi {{ person.first_name|default:"there" }},
>
> Most board and train programs take your puppy for 4-6 weeks when they're young and send them home "trained." The problem? Puppies change dramatically in their first year.
>
> What they learn at 12 weeks starts fading at 5 months when adolescent energy hits. By 8 months they're selectively ignoring everything. The owner ends up paying for training again — or worse, dealing with a dog that "used to be trained."
>
> That's why we built Puppy Start Right as 3 separate stays:
>
> - **Stay 1** catches the socialization window before it closes
> - **Stay 2** reinforces everything as your puppy's brain and body change
> - **Stay 3** locks in off-leash reliability before the teenage phase undoes your progress
>
> It costs the same as most single board and train programs — but the results actually last.
>
> If you haven't already, let's get on a call and plan the timing. Reply here or call **437-778-5273**.
>
> — K9 Academy

---

### Email 3 — Day 5
**Subject:** What Puppy Start Right graduates look like
**Preview text:** Real results from real puppies

> Hi {{ person.first_name|default:"there" }},
>
> Here's what owners typically tell us after the third stay:
>
> "We dropped off a puppy and picked up a dog." Reliable recall off leash. Walks calmly on a loose leash. Settles at home without being told. Greets strangers politely. Comes when called — every time.
>
> The best part? They didn't have to undo a single bad habit. Because we caught everything at the right developmental stage before it became a problem.
>
> Limited spots available — we only run a few Puppy Start Right puppies at a time to ensure individual attention.
>
> **[CTA: "Apply Now"]** → /puppy-start-right#contact
>
> — K9 Academy

---

## FLOW 7: Re-engagement (Cold Leads)

**Trigger:** Segment → Profile has NOT placed an order / been contacted in 30 days AND has opened at least 1 email

**Timing:** Send at 30 days, 60 days, 90 days after last activity

### Email 1 — 30 days
**Subject:** Still thinking about training for your dog?
**Preview text:** No pressure — just checking in

> Hi {{ person.first_name|default:"there" }},
>
> You reached out to us a little while ago about training. We know life gets busy and timing isn't always right.
>
> If things have changed and you're ready to get started, we're here. If not, no worries at all.
>
> One thing worth knowing: the longer behavioural issues go unaddressed, the harder they are to fix. What takes 6 sessions now might take 12 in six months.
>
> **[CTA: "Get in Touch"]** → /#contact
>
> — K9 Academy

---

### Email 2 — 60 days
**Subject:** A quick update from K9 Academy
**Preview text:** New classes + programs

> Hi {{ person.first_name|default:"there" }},
>
> Quick update — we've opened new group class cohorts and have spots available for private training.
>
> If your dog is still dealing with [pull challenge from profile if available, otherwise generic: "the same issues"], we'd love to help. Most clients see a difference within the first session.
>
> Reply to this email, call **437-778-5273**, or book online.
>
> — K9 Academy

---

### Email 3 — 90 days (final)
**Subject:** Last one from us
**Preview text:** Unless you want to hear more

> Hi {{ person.first_name|default:"there" }},
>
> This is the last email we'll send unless you tell us otherwise. We don't want to clog your inbox.
>
> If your dog still needs help, we're here — just reply or call **437-778-5273**. We take cases other trainers have given up on, and we've seen it all.
>
> If you're all good, no action needed. We'll stop reaching out.
>
> All the best to you and your dog.
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
