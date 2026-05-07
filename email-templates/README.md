# K9 Academy — Klaviyo Email Templates

## What's in this folder

38 ready-to-use HTML email templates for Klaviyo. Each file is a standalone HTML email that you copy and paste into Klaviyo's code editor.

### Flows (28 emails — automated, trigger-based)

| Folder | Emails | When they send |
|--------|--------|---------------|
| `flows/board-and-train/` | 4 emails | When someone inquires about Board & Train |
| `flows/private-training/` | 3 emails | When someone inquires about Private Training |
| `flows/group-classes/` | 3 emails | When someone inquires about Group Classes |
| `flows/daycare/` | 2 emails | When someone inquires about Daycare |
| `flows/general-inquiry/` | 3 emails | When someone submits a general inquiry |
| `flows/quiz-nurture/` | 4 emails | After someone completes the behaviour quiz |
| `flows/puppy-start-right/` | 3 emails | When someone inquires about Puppy Start Right |
| `flows/post-booking/` | 1 email | After someone books a program |
| `flows/review-request/` | 2 emails | 14 and 21 days after training is completed |
| `flows/re-engagement/` | 3 emails | 30, 60, and 90 days after a lead goes cold |

### Campaigns (10 emails — manual sends)

All in `campaigns/may-2026/`. These are the May 2026 campaign calendar:

| File | Type | Subject Line |
|------|------|-------------|
| `campaign-01-transformation.html` | Transformation Story | He lunged at every dog on the block... |
| `campaign-02-training-tip.html` | Training Tip | Stop saying your dog's name when they do something wrong |
| `campaign-03-new-cohort.html` | New Cohort | New Level 1 group class — May cohort |
| `campaign-04-myth-buster.html` | Myth Buster | Your dog doesn't need to "meet" every dog on the street |
| `campaign-05-reviews.html` | Review Spotlight | What 250+ Google reviews say about K9 Academy |
| `campaign-06-behind-scenes.html` | Behind the Scenes | A look inside a Board & Train day |
| `campaign-07-place-command.html` | Training Tip | The "place" command will change your life |
| `campaign-08-reactive-story.html` | Transformation Story | "I used to cross the street when I saw another dog" |
| `campaign-09-summer-push.html` | Seasonal Push | Summer is the hardest season for untrained dogs |
| `campaign-10-trainer-spotlight.html` | Trainer Spotlight | Meet the trainers behind K9 Academy |

---

## How to upload a FLOW email to Klaviyo (step by step)

### Step 1: Create the flow in Klaviyo

1. Log in to Klaviyo at **klaviyo.com**
2. Click **Flows** in the left sidebar
3. Click **Create Flow** (top right)
4. Click **Build your own** (bottom option — don't use a template)
5. Give it a name (e.g. "Board & Train Inquiry Flow")
6. Click **Create Flow**

### Step 2: Set the trigger

1. On the left panel, you'll see **Trigger**
2. Click it and choose the trigger type:
   - For inquiry flows: **Metric** > select `Landing Page Inquiry`
   - For quiz flows: **Metric** > select `Behaviour Quiz Completed`
   - For review request: **Metric** > select when someone is tagged as `completed`
   - For re-engagement: **List/Segment** > choose your cold leads segment
3. If the flow needs filtering (e.g. Board & Train only), click **Add Filter** and set:
   - Property: `Service Interest`
   - Equals: `bt_4wk` (for Board & Train), `private_single` (for Private), `group_puppy` (for Group), etc.
4. Click **Done**

### Step 3: Add the first email

1. From the left panel, drag **Email** into the flow
2. Click on the email block to open it
3. Give it a name (e.g. "Email 1 — Immediate")
4. Set the **Subject Line** — this is written at the top of each HTML file as the `<title>` tag. Copy it from there.
5. Set the **Preview Text** — this is in the HTML file inside the hidden preheader `<div>`. Copy from there.
6. Click **Edit Email Content**

### Step 4: Paste the HTML

1. In the email editor, click **Source Code** (the `< >` icon in the top right, or look for "HTML" or "Code" view)
2. **Select all** the existing code and **delete it**
3. Open the HTML file from this folder on your computer:
   - Right-click the `.html` file
   - Open with **TextEdit** (Mac) or **Notepad** (Windows)
   - Or open in a code editor like VS Code
4. **Select all** the code (Cmd+A on Mac, Ctrl+A on Windows)
5. **Copy** it (Cmd+C / Ctrl+C)
6. Go back to Klaviyo and **paste** it into the code editor (Cmd+V / Ctrl+V)
7. Click **Save** or **Done**
8. Click **Preview** to make sure it looks right — check both desktop and mobile views

### Step 5: Add time delays between emails

1. Go back to the flow view
2. Between emails, drag a **Time Delay** from the left panel
3. Set the delay:
   - Email 1: No delay (sends immediately)
   - Email 2: Usually **2 days** (check the file name — `day2` means 2 day delay)
   - Email 3: Usually **2-3 more days** after Email 2
   - Email 4: Usually **3 more days** after Email 3
4. The file names tell you the timing: `email-1-immediate`, `email-2-day2`, `email-3-day4`, `email-4-day7`

### Step 6: Repeat for each email in the flow

Repeat Steps 3-5 for each email file in the folder. Add them in order (email-1, email-2, email-3, etc.) with time delays between them.

### Step 7: Set the flow to LIVE

1. Once all emails are added and you've previewed each one
2. Click the **Status** dropdown in the top right (it will say "Draft" or "Manual")
3. Change it to **Live**
4. The flow is now active and will automatically send when triggered

---

## How to upload a CAMPAIGN email to Klaviyo (step by step)

### Step 1: Create the campaign

1. Click **Campaigns** in the left sidebar
2. Click **Create Campaign** (top right)
3. Choose **Email**
4. Give it a name (e.g. "May 5 — Transformation Story")
5. Click **Continue**

### Step 2: Choose your audience

1. Under **Recipients**, select your engaged segment (people who have opened an email in the last 90 days)
2. If you don't have this segment yet, create one:
   - Go to **Lists & Segments** > **Create Segment**
   - Condition: "Has opened email at least once in the last 90 days"
   - Save it as "Engaged Subscribers"
3. Click **Continue**

### Step 3: Set subject line and preview text

1. Copy the subject line from the HTML file's `<title>` tag
2. Copy the preview text from the hidden preheader `<div>` at the top of the email body
3. Click **Continue**

### Step 4: Paste the HTML

1. In the email editor, click **Source Code** / **HTML** / `< >` icon
2. Delete all existing code
3. Open the campaign HTML file in TextEdit/Notepad
4. Select all, copy, paste into Klaviyo
5. Save and preview (check desktop + mobile)
6. Click **Continue**

### Step 5: Schedule or send

1. Choose **Schedule** and pick the date/time
2. Or choose **Send Now** if it's ready
3. Click **Schedule Campaign** or **Send**

---

## Campaign schedule for May 2026

| Date | File | Type |
|------|------|------|
| May 5 (Mon) | campaign-01-transformation.html | Transformation Story |
| May 7 (Wed) | campaign-02-training-tip.html | Training Tip |
| May 12 (Mon) | campaign-03-new-cohort.html | New Cohort Opening |
| May 14 (Wed) | campaign-04-myth-buster.html | Myth Buster |
| May 16 (Fri) | campaign-05-reviews.html | Review Spotlight |
| May 19 (Mon) | campaign-06-behind-scenes.html | Behind the Scenes |
| May 21 (Wed) | campaign-07-place-command.html | Training Tip |
| May 23 (Fri) | campaign-08-reactive-story.html | Transformation Story |
| May 26 (Mon) | campaign-09-summer-push.html | Seasonal Push |
| May 28 (Wed) | campaign-10-trainer-spotlight.html | Trainer Spotlight |

---

## Important notes

- **Preview every email** on both desktop and mobile before going live
- **Test send to yourself** first — in the email editor, click "Send Test Email" and enter your email address
- **The review request flow** has a placeholder link `#google-review-link` — replace this with your actual Google review link before going live
- **Personalization**: The emails use Klaviyo variables like `{{ person.first_name|default:"there" }}` — these will automatically fill in the subscriber's name. Don't change these.
- **Unsubscribe links**: Every email has Klaviyo's `{% unsubscribe %}` and `{% manage_preferences %}` tags built in. These are required by law — don't remove them.
- **Images**: The emails use the K9 Academy logo from `k9academytraining.ca/logo.png`. If this URL changes, update it in every template.

---

## Flow triggers reference

| Flow | Trigger Event | Filter |
|------|--------------|--------|
| Board & Train | `Landing Page Inquiry` | Service Interest = `bt_4wk` |
| Private Training | `Landing Page Inquiry` | Service Interest = `private_single` |
| Group Classes | `Landing Page Inquiry` | Service Interest = `group_puppy` |
| Daycare | `Landing Page Inquiry` | Service Interest = `daycare` |
| General Inquiry | `Landing Page Inquiry` | Service Interest is blank or "Not sure yet" |
| Quiz Nurture | `Behaviour Quiz Completed` | Quiz Path = `adult` |
| Puppy Start Right | `Landing Page Inquiry` | Service Interest = `puppy_start_right` |
| Post-Booking | Manual tag or stage change to `booked` | — |
| Review Request | Manual tag or stage change to `completed` | 14 day delay before first email |
| Re-engagement | Segment: No activity in 30 days, opened at least 1 email | Emails at 30/60/90 days |

---

## Questions?

Contact Anesh or reply to the team chat. The full email strategy is documented in `email-playbook.md` and `klaviyo-flows.md` in the project root.
