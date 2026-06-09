# Klaviyo Email Flows Setup Guide

This guide walks you through setting up all 10 automated email flows in Klaviyo for K9 Academy. Each flow is triggered when a visitor takes an action on the website (fills out a form, takes the quiz, etc.)

**Login:** Use the K9 Academy Klaviyo account at https://www.klaviyo.com/login
**Email templates:** All HTML templates are in the `email-templates/flows/` folder in this repo.
**Detailed strategy:** Read `klaviyo-flows.md` for the full email playbook with subject lines, timing, and copy strategy.

---

## How the Website Sends Data to Klaviyo

When someone fills out a form on the site, the following happens automatically:

1. Their **profile** is created/updated in Klaviyo with:
   - Email, first name, last name, phone
   - Dog info, service interest, message
   - Source: "Landing Page"

2. An **event** called `Landing Page Inquiry` is tracked with:
   - Name, email, phone
   - Dog info, service interest, message

3. When someone takes the **behaviour quiz**, an event called `Behaviour Quiz Completed` is tracked with their scores.

You use these events as **triggers** for your flows.

---

## How to Create a Flow (Step by Step)

### Step 1: Go to Flows
- Log into Klaviyo → click **Flows** in the left sidebar → click **Create Flow** → **Build your own**

### Step 2: Name the Flow
- Name it clearly, e.g., "Board & Train Inquiry Sequence"

### Step 3: Set the Trigger
- Choose **Metric** as the trigger type
- Select the event: `Landing Page Inquiry`
- Add a **Trigger Filter**: `Service Interest` equals the service code (see table below)

### Step 4: Add Emails
- Click the **+** button to add an **Email** action
- Set the **delay** (e.g., 0 minutes for immediate, 2 days, 4 days, etc.)
- Click on the email block → **Edit Content**
- Choose **Code editor** or **Drag & Drop**
- If using Code editor: paste the HTML from the template file

### Step 5: Set Subject Line and Preview Text
- Each template file has the subject line in a comment at the top
- Also listed in the table below

### Step 6: Set Sender
- From: `K9 Academy <contact@k9academy.ca>`
- Reply-to: `contact@k9academy.ca`

### Step 7: Turn it Live
- Review each email in the flow
- Click **Review and Turn On** at the top right
- Set status to **Live**

---

## Flow 1: Board & Train Inquiry

**Trigger:** Event `Landing Page Inquiry` where `Service Interest` = `bt_4wk`
**Templates:** `email-templates/flows/board-and-train/`

| # | Delay | Subject Line | File |
|---|-------|-------------|------|
| 1 | Immediate | Your Board & Train inquiry | email-1-immediate.html |
| 2 | 2 days | What actually happens during Board & Train | email-2-day2.html |
| 3 | 4 days | The dogs other trainers gave up on | email-3-day4.html |
| 4 | 7 days | A spot just opened up | email-4-day7.html |

---

## Flow 2: Private Training Inquiry

**Trigger:** Event `Landing Page Inquiry` where `Service Interest` = `private_single` or `private_6`
**Templates:** `email-templates/flows/private-training/`

| # | Delay | Subject Line | File |
|---|-------|-------------|------|
| 1 | Immediate | Your private training inquiry | email-1-immediate.html |
| 2 | 2 days | What to expect in your first session | email-2-day2.html |
| 3 | 5 days | Results that stick | email-3-day5.html |

---

## Flow 3: Group Classes Inquiry

**Trigger:** Event `Landing Page Inquiry` where `Service Interest` = `group_puppy` or `group`
**Templates:** `email-templates/flows/group-classes/`

| # | Delay | Subject Line | File |
|---|-------|-------------|------|
| 1 | Immediate | Your group class inquiry | email-1-immediate.html |
| 2 | 3 days | What Level 1 actually covers | email-2-day3.html |
| 3 | 6 days | The curriculum breakdown | email-3-curriculum.html |

---

## Flow 4: Puppy Start Right Inquiry

**Trigger:** Event `Landing Page Inquiry` where `Service Interest` = `puppy_start_right`
**Templates:** `email-templates/flows/puppy-start-right/`

| # | Delay | Subject Line | File |
|---|-------|-------------|------|
| 1 | Immediate | Your Puppy Start Right inquiry | email-1-immediate.html |
| 2 | 2 days | Why the first year matters most | email-2-day2.html |
| 3 | 5 days | What most puppy owners get wrong | email-3-day5.html |

---

## Flow 5: Daycare Inquiry

**Trigger:** Event `Landing Page Inquiry` where `Service Interest` = `daycare`
**Templates:** `email-templates/flows/daycare/`

| # | Delay | Subject Line | File |
|---|-------|-------------|------|
| 1 | Immediate | Your daycare inquiry | email-1-immediate.html |
| 2 | 3 days | What a day at Academy Daycare looks like | email-2-day3.html |

---

## Flow 6: General Inquiry (no specific service selected)

**Trigger:** Event `Landing Page Inquiry` where `Service Interest` is empty or `Not sure yet`
**Templates:** `email-templates/flows/general-inquiry/`

| # | Delay | Subject Line | File |
|---|-------|-------------|------|
| 1 | Immediate | We got your message | email-1-immediate.html |
| 2 | 1 day | Here's how we can help | email-2-24hr.html |
| 3 | 4 days | Still thinking about it? | email-3-day4.html |

---

## Flow 7: Quiz Nurture

**Trigger:** Event `Behaviour Quiz Completed`
**Templates:** `email-templates/flows/quiz-nurture/`

| # | Delay | Subject Line | File |
|---|-------|-------------|------|
| 1 | Immediate | Your dog scored [Score]/[MaxScore] | email-1-results.html |
| 2 | 2 days | The #1 mistake owners make | email-2-mistake.html |
| 3 | 5 days | Here's what we'd recommend | email-3-recommendation.html |
| 4 | 8 days | This won't fix itself | email-4-urgency.html |

**Note:** Email 1 (quiz results) is already sent automatically by the website via Resend. You can skip email 1 in Klaviyo or use it as a backup.

---

## Flow 8: Post-Booking Confirmation

**Trigger:** This needs to be triggered manually or via a tag/list when a client books.
**Templates:** `email-templates/flows/post-booking/`

| # | Delay | Subject Line | File |
|---|-------|-------------|------|
| 1 | Immediate | You're confirmed | email-1-confirmed.html |

**Setup:** Create a Klaviyo list called "Booked Clients." When someone books, add them to this list. Set the flow trigger to "Added to list: Booked Clients."

---

## Flow 9: Re-engagement (30/60/90 days)

**Trigger:** Time since last event. Set up a segment of people who inquired 30+ days ago but never booked.
**Templates:** `email-templates/flows/re-engagement/`

| # | Delay | Subject Line | File |
|---|-------|-------------|------|
| 1 | 30 days after inquiry | Still dealing with it? | email-1-30days.html |
| 2 | 60 days after inquiry | Things don't get better on their own | email-2-60days.html |
| 3 | 90 days after inquiry | One last thing | email-3-90days.html |

**Setup:** Create a segment: "Has Landing Page Inquiry > 30 days ago AND has NOT been added to Booked Clients list." Use a Date trigger or build it as a segment-triggered flow.

---

## Flow 10: Review Request

**Trigger:** Triggered after program completion. Add graduates to a "Program Completed" list.
**Templates:** `email-templates/flows/review-request/`

| # | Delay | Subject Line | File |
|---|-------|-------------|------|
| 1 | 14 days after completion | How's [Dog Name] doing? | email-1-14days.html |
| 2 | 21 days after completion | Quick favour? | email-2-21days.html |

**Setup:** Create a list called "Program Completed." Add clients when they graduate. Flow triggers on "Added to list."

---

## Service Interest Codes (Reference)

These are the values sent from the website form dropdown:

| Form Selection | Code sent to Klaviyo |
|---------------|---------------------|
| Board & Train | `bt_4wk` |
| Private Lessons | `private_single` |
| Group Classes | `group_puppy` |
| Daycare | `daycare` |
| Not sure yet | (empty) |
| Behaviour Quiz | Event: `Behaviour Quiz Completed` |
| In-Home Application | `in_home_private` |

---

## Testing a Flow

1. Set the flow to **Manual** mode first (not Live)
2. Submit a test form on the website with your own email
3. Check Klaviyo → Profiles → find your profile → check the Events tab
4. Verify the event came through with the right data
5. Manually trigger the flow for your profile to test the emails
6. Once confirmed working, set to **Live**

---

## Important Rules

- **Never discount.** No promo codes, no "limited time offers." Full price, always.
- **Sender:** Always from `K9 Academy <contact@k9academy.ca>`
- **Sign off:** Always "Anesh" or just end naturally. Never "The K9 Academy Team."
- **No em-dashes** in any email copy.
- **Reply-to:** Always `contact@k9academy.ca` so replies go to the team.
- **Frequency:** Don't add people to multiple flows at the same time. Use flow filters to exclude people already in another active flow.

---

## Klaviyo Events Reference (Updated)

These are the events fired from the website. Use them as flow triggers.

| Action on Website | Klaviyo Event Name | Data Included |
|---|---|---|
| Contact form submission | `Landing Page Inquiry` | name, email, phone, dog info, service interest, message |
| Group classes curriculum download | `Curriculum Download` | name, email, curriculum: "Group Classes" |
| Puppy curriculum download | `Puppy Curriculum Download` | name, email, curriculum: "Puppy Classes" |
| Behaviour quiz completed | `Behaviour Quiz Completed` | email, score, max score, challenge, quiz path |
| Chatbot lead captured | Sent via Resend only (not Klaviyo) | name, email, phone, chat transcript |
| In-home application | `Landing Page Inquiry` with service = `in_home_private` | name, email, phone, neighbourhood, dog info |

### Service Interest Codes (from contact form dropdown)

| Form Selection | Code in Klaviyo |
|---|---|
| Board & Train | `bt_4wk` |
| Private Lessons | `private_single` |
| Group Classes | `group_puppy` |
| Not sure yet | (empty) |
| In-Home (from /in-home page) | `in_home_private` |

---

## Monthly Campaign Emails

In addition to automated flows, you need to send **16 campaign emails per month** (3-4 per week). These go to your entire list.

### Where to Find Them
- Templates: `email-campaigns/month-1/` (and future months)
- Instructions: `email-campaigns/README.md`
- Strategy: `MARKETING-PLAN-2.5M.md`

### How to Send Campaigns in Klaviyo
1. Go to **Campaigns** in Klaviyo
2. Click **Create Campaign**
3. Select your main list (all contacts)
4. **Exclude** anyone currently in an active flow (first 7-10 days after inquiry)
5. Copy the subject line and body from the campaign file
6. For **plain-text emails**: use Klaviyo's text-only template. No images, no branding. Just text.
7. For **graphic emails**: use Klaviyo's drag-and-drop editor with K9 branding
8. Schedule for the correct day (see filename: `week-1-monday-educational.md`)
9. **Sender:** K9 Academy <contact@k9academy.ca>
10. **Reply-to:** contact@k9academy.ca

### Monthly Pillar Balance (follow this every month)

| Pillar | Count | Format |
|---|---|---|
| Educational (training tips, myth busting) | 4 | 3 graphic, 1 plain-text |
| Social Proof (transformations, reviews) | 3 | 2 graphic, 1 plain-text |
| Brand/Community (Anesh stories, BTS) | 3 | 1 graphic, 2 plain-text |
| Service Spotlight (program deep dives) | 4 | 3 graphic, 1 plain-text |
| Offer/Sale (urgency, scarcity, events) | 2 | 2 graphic |
| **Total** | **16** | **11 graphic, 5 plain-text** |

---

## Google Reviews Automation

The review request flow is triggered when you add a client to the "Program Completed" list in Klaviyo.

### How to Request Reviews
1. Create a Klaviyo list called **"Program Completed"**
2. When a client graduates from any program, add them to this list
3. The flow sends 2 emails:
   - **Day 14:** "How's [Dog Name] doing?" (check-in + soft ask)
   - **Day 21:** "Quick favour?" (direct ask for Google review with link)
4. Include the direct Google review link: `https://g.page/r/YOUR_GOOGLE_PLACE_ID/review`

### Getting Your Google Review Link
1. Search "K9 Academy Training" on Google
2. Click your business listing
3. Click "Write a review"
4. Copy the URL from your browser
5. Use this URL in the review request email template

---

## Checklist: Everything Staff Needs to Do

### Week 1 Setup (one-time)
- [ ] Log into Klaviyo
- [ ] Build all 10 automated flows (follow the flow tables above)
- [ ] Test each flow with a test submission
- [ ] Create "Program Completed" list for review requests
- [ ] Create "Booked Clients" list for post-booking flow
- [ ] Schedule week 1 campaign emails (4 emails)
- [ ] Verify all events are coming through (submit test forms on live site)

### Every Week (ongoing)
- [ ] Schedule 3-4 campaign emails for the week
- [ ] Add graduating clients to "Program Completed" list
- [ ] Add booked clients to "Booked Clients" list
- [ ] Check Klaviyo analytics: open rates, click rates, unsubscribes
- [ ] Monitor bounced emails and clean list

### Every Month (ongoing)
- [ ] Write or use next month's 16 campaign emails
- [ ] Review flow performance (how many emails sent, conversion rate)
- [ ] Clean email list: remove hard bounces, inactive 6+ months
- [ ] Update flow content if pricing or programs change
- [ ] Report: leads from email, bookings attributed to email
