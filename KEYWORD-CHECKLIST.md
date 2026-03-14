# Compact Keywords — HITL Checklist (Edward Sturm Module 07)

This is your human-in-the-loop workflow for finding and approving compact keywords.
The scripts do the grunt work. You make the strategic decisions.

---

## WEEKLY (Every Monday, ~1 hour)

### 1. Review New Keywords (15 min)
Open the **Internal SEO Sheet** (Keywords tab + Page Blueprints tab).

- [ ] Sort by "Date Added" (newest first)
- [ ] For each new keyword, check:
  - Does Claude's relevance score (1-10) match YOUR gut feeling?
  - Is this actually bottom-of-funnel? (Would someone searching this be ready to call you?)
  - Is this relevant to Medicare Supplement / Medicare Advantage brokerage?
- [ ] Override Claude's score in the "Your Relevance (1-10)" column if needed

### 2. SERP Analysis — The Critical Step (30-45 min)
**Edward says: "I ignore difficulty scores and look at the SERPs myself."**

For each keyword you're considering approving:

- [ ] **Google it.** Actually type it into Google.
- [ ] **Check DA** of top 5 results (MozBar extension shows this next to each result)
  - DA < 30 = good opportunity
  - DA > 50 across the board = skip for now
- [ ] **Check Page Scores** — click MozBar's On-Page Grader icon
  - Yellow/orange (< 80) = nobody targeting properly = "wide open"
  - Green (85+) = competitive
- [ ] **Is the keyword in their page titles?** Look at the blue links in the SERP
  - If NO result has your exact keyword at the beginning = wide open
- [ ] **Is the keyword in their URLs?** Look at the green URLs
  - If no result has the keyword in the URL slug = opportunity
- [ ] **What content type ranks?**
  - Products/services = bottom of funnel (GOOD — target it)
  - "5 Best..." / "Top 10..." lists = deprioritize (harder, less conversion)
  - How-to articles = deprioritize (informational intent)
- [ ] **Fill in the HITL columns in Google Sheets:**
  - "SERP Checked?" → Yes
  - "DA Range (manual)" → e.g., "15-35"
  - "Page Score Range" → e.g., "yellow/orange"
  - "KW in Titles?" → Yes/No
  - "KW in URLs?" → Yes/No
  - "Content Type" → Product / List / How-to
  - "SERP Notes" → Your observations (e.g., "Wide open. Nobody targeting. Top result is generic Medicare.gov page. Low DAs.")

### 3. SERP Overlap Check (5 min)
When you see similar keywords (e.g., "medigap plan g nj" and "medicare supplement plan g new jersey"):

- [ ] Google BOTH keywords
- [ ] Are 70%+ of results identical? → ONE page for both
- [ ] Are results mostly different? → SEPARATE pages
- [ ] Note in "SERP Overlap With" column: "Same SERP as [keyword]" or "Unique"

### 4. Apply Deprioritization Rules (5 min)
Before approving, check Edward's 7 scenarios:

| Skip if... | What you see |
|-------------|-------------|
| High DA + High Targeting | DA 50+ AND keyword in titles/URLs everywhere |
| All "Best Of" Lists | Top results are "5 Best...", "Top 10..." |
| Mixed Intent | How-to at #1, product at #2 |
| SERP doesn't match your niche | Results about something else entirely |
| Too broad | High volume but results from completely different industries |
| Low targeting BUT very high DA | Nobody targets it but DA 70+ across board → wait until your DA is 20-30+ |

### 5. Approve or Reject (5 min)
- [ ] Set "Status" to **"approved"** for keywords that pass all checks
- [ ] Set "Status" to **"deprioritize"** for ones to revisit later
- [ ] Set "Status" to **"skip"** for ones that failed checks
- [ ] Never auto-approve — every approved keyword should have "SERP Checked? = Yes"

---

## MONTHLY (1st of each month, ~20 min)

### GSC "Wait and See" Review
**Edward 07-04: Publish a broad page → wait → see what it ranks for → spin off pages.**

- [ ] Open Google Search Console → Performance → 12-month view
- [ ] For each page published 2+ months ago, click the page URL
- [ ] Look at keywords in **positions 6-13**:
  - [ ] Can you add this keyword to the EXISTING page? (Add a few sentences mentioning it)
- [ ] Look at keywords in **positions 13+**:
  - [ ] Is this a new dedicated page opportunity? Add to Keywords tab.
- [ ] Check: any keywords with high impressions but low CTR?
  - [ ] Rewrite the page title/meta description to better match that keyword

### Client Language Mining
**Edward 07-09: "There are things that brands do that everybody else does. But people take it for granted and they don't put it in their language."**

- [ ] What did clients say on the phone this month?
- [ ] Any phrases that sounded like a Google search? Add as seed topics.
- [ ] Examples: "I'm turning 65 and confused", "my rates went up", "switching from Humana"

---

## QUARTERLY (every 3 months, ~30 min)

### Competitor Discovery
- [ ] Go to Moz → Competitive Research → True Competitor
- [ ] Enter `medicareyourself.com`, click "Find Competitors"
- [ ] Any new competitors? Add to `scripts/competitor-keyword-analysis.js` COMPETITORS array
- [ ] Also: Google your top 10 keywords manually — who's showing up that isn't in your competitor list?

### Seed Topic Refresh
- [ ] Review the seed topics in `scripts/find-compact-keywords.js` (SEED_TOPICS array)
- [ ] Add new seeds from: client calls, GSC discoveries, competitor analysis
- [ ] Remove any seeds that consistently produce irrelevant results

### "Overlooked Details" Brainstorm
- [ ] List every service you provide in plain language:
  - "We compare rates from 20+ carriers"
  - "Licensed in NJ, PA, and 33 other states"
  - "No cost — carriers pay our commission"
  - "We handle all the paperwork"
  - "We help with enrollment, not just quotes"
- [ ] Turn each into potential keywords / page topics

---

## ONE-TIME SETUP (do these once)

- [ ] Install MozBar Chrome extension (https://moz.com/products/pro/seo-toolbar)
- [ ] Run Moz True Competitor on medicareyourself.com — update competitor list
- [ ] Do the "overlooked details" brainstorm — list every service in plain language, add as seeds
- [ ] Verify the new HITL columns appear in Google Sheets after next weekly run

---

## REFERENCE: Edward's Keyword Evaluation Shorthand

**Dream keyword (target immediately):**
> Low DA (under 30), page scores yellow/orange, nobody has keyword in title or URL, products ranking (not lists/how-tos)

**Good keyword (target soon):**
> Mixed DAs (some low, some high), some targeting but not direct, products + some lists

**Save for later:**
> High DA but nobody targeting (need DA 20-30+ to compete) — consider YouTube short instead

**Skip:**
> High DA + high targeting, all lists, informational intent, niche mismatch
