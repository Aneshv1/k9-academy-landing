# Forrest Micke at K9 Academy: Registration Landing Page Brief

Original research brief. Decisions made since (see `FORREST-MICKE-SEMINAR.md`) override it:
prices are USD ($500 Working / $300 Audit), no video application, non-refundable but transferable,
and the topic list is Forrest's own "Learn About" list.

---

## 0. Launch blockers

| # | Item | Status | Notes |
|---|------|--------|-------|
| 1 | Seminar topic / title | `[TBD]` | Confirm with Forrest. His signature series is "The Everyday Working Dog". Recent US events ran as "Essentials of Modern Dog Training" |
| 2 | Ticket types | Decided | Working Spot + Audit Spot |
| 3 | Prices | Decided | $500 USD / $300 USD. Benchmark (do not publish): May 2025 US event Team $625/$725 (8 spots), Auditor $425/$525 (30 spots) |
| 4 | Capacity | Decided | 8 Working Spots, Audit unlimited (not mentioned) |
| 5 | Checkout | Stripe Payment Links | Links not created yet |
| 6 | Refund / transfer policy | Decided | Non-refundable, transferable |
| 7 | Written approval from Forrest's team | `[TBD]` | For use of his name, photos, bio and reviews in paid ads + this page |
| 8 | Real photos | `[TBD]` | 2 to 4 of Forrest (he supplies them), 2 to 3 of the Leaside floor. **No AI-generated images of Forrest** |
| 9 | Lunch / parking / kennel space details | `[TBD]` | |
| 10 | Vaccination + dog requirements | `[TBD]` | K9's standard policy |

## 1. Event facts (confirmed)

- **Who:** Forrest Micke, visiting trainer and educator
- **Host:** K9 Academy
- **When:** Saturday May 15 and Sunday May 16, 2027, 9:00am to 5:00pm both days. Doors 8:30am, arrive by 8:45am `[confirm]`
- **Where:** K9 Academy Leaside, 16-30 Canvarco Rd, Toronto, ON

**Verified bio facts** (forrestmicke.com, Kynology.org, Leerburg University). Only use these claims:
- Professional dog trainer based in the San Francisco Bay Area
- 20+ years in dog training
- 150+ seminars and workshops taught around the world
- "Everyday Working Dog" seminar series presented 60+ times in 5 countries
- Specializes in protection sports and obedience, foundations to advanced performance
- Started in shelter and rescue behaviour modification (shelter-dog rehab programs 2007 to 2010)
- Has taught dog-sport clubs, rescues, search and rescue teams, law enforcement K9 units and private owners
- Collaborator with Michael Ellis and Dr. Stewart Hilliard on the Kynology project
- Central role in developing CPP, China's first protection suit sport
- Leerburg University instructor: *Teaching Engagement Skills* and *The Heeler's Toolbox* I, II, III
- Known for a relationship-centred approach, on-the-spot assessment of handler and dog teams, patient tailored feedback

## 2. Audience + voice

- Single goal: register (buy a ticket). No "book a free assessment" CTA.
- Audience: serious owners who already train, GTA trainers and apprentices, K9 Academy alumni (Klaviyo).
- Voice: calm teaching voice, plain headers, Canadian spelling, no em dashes.

## 3. Forrest's topic list ("Learn About")

- 'Reinforcement as a Process'
- Behavior Economics
- Developing Play & Food Dynamics
- Harnessing Arousal & Anticipation
- Managing Criteria, Sessions & Expectations
- Negative Reinforcement Prep & Principles
- Basic to Advanced Obedience
- Modern Marker Concepts
- Generalizing Behavior
- Individual Troubleshooting

## 4. Reviews of Forrest (forrestmicke.com/reviews)

**Only with permission from Forrest's team**, quoted verbatim. Never write new or reworded testimonials.
- "He's just such a well-rounded dog guy. An incredible eye for detail in training." James W.
- "Forrest is superb. He takes the time to understand you, your dog and what you want from your relationship." A.A.
- "I had the opportunity to work with Forrest for an extended period of time and admire his ability to adjust to each dog and handler." Etienne S.
- "Forrest Micke is one of those rare individuals whose genuine interest in people equals his ability to effectively communicate his understanding of dog behavior." Jaquie D.

Host stats: 4.9★ · 250+ reviews · 10,000+ dogs trained · 15+ years.

## 5. Draft schedule `[TBD: confirm with Forrest]`

| Time | Saturday May 15 | Sunday May 16 |
|---|---|---|
| 8:30 | Doors open, check-in | Doors open |
| 9:00 | Lecture: foundations | Recap + Q&A |
| 10:30 | Working teams on the floor | Working teams on the floor |
| 12:30 | Lunch `[TBD]` | Lunch |
| 1:30 | Working teams (continued) | Working teams + proofing |
| 4:30 | Open Q&A | Wrap-up + individual takeaways |
| 5:00 | End | End |

## 6. Open FAQ items `[TBD]`

- Dog fit criteria (age, vaccination, crates calmly, not seriously dog-reactive)
- What to bring (leash, flat collar, usual tools, high-value food + toys, crate, water, notebook)
- Lunch included? Single-day option? Parking? Recording / filming rules?
- Contact: 437-778-5273, info@k9academy.ca

## 7. Klaviyo (account Y8jyJQ)

- List: `Forrest Micke Seminar 2027: Registered`
- `dog_name` in its own field, never combined into one "Dog Info" field (broke personalization before)
- `ticket_type` and `is_k9_client` as profile properties
- Flow: confirmation → 30-day, 7-day, 1-day reminders with arrival info → post-event survey + upsell to K9 programs
- Abandoned-registration flow if possible
