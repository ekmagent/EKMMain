# MedicareYourself SEO Playbook
## Edward Sturm Compact Keywords — Complete HITL Checklist

Scripts handle research, scoring, and page generation.
**You** handle strategy, SERP judgment, and quality control.

---

# ONE-TIME SETUP

Do these before your first Monday cycle. ~45 min total.

| # | Task | Where | Time |
|---|------|-------|------|
| 1 | Install MozBar Chrome extension | [moz.com/products/pro/seo-toolbar](https://moz.com/products/pro/seo-toolbar) — log in with your Moz account | 5 min |
| 2 | Run Moz True Competitor | Moz > Competitive Research > True Competitor > enter `medicareyourself.com` > add new competitors to `scripts/competitor-keyword-analysis.js` line 40 | 10 min |
| 3 | "Overlooked details" brainstorm | Sit down with a blank doc. List every service you provide in the language your clients use on the phone. Add as seed topics to `scripts/find-compact-keywords.js` line 53. | 30 min |
| 4 | Set up `articles@medicareyourself.com` | Email forwarding for Write for Us submissions | 5 min |

---

# WEEKLY — Every Monday (~1 hour)

The scripts ran over the weekend (Saturday/Monday cron). Your job is to review what they found and make decisions.

---

## Step 1: Review New Keywords
**Time:** 15 min | **Where:** Google Sheets (Internal SEO Sheet)

Open the **Keywords** tab. Sort by "Date Added" (newest first).

For each new keyword ask yourself:

> "If someone Googled this, would they be ready to pick up the phone and call me?"

- **YES** = bottom-of-funnel, keep it
- **MAYBE** = score it 3-5, keep but deprioritize
- **NO** = mark as "skip"

Check Claude's relevance score. Override it in the **"Your Relevance (1-10)"** column if your gut says different. You know Medicare better than Claude.

---

## Step 2: SERP Check the Top 10 Candidates
**Time:** 30-45 min | **Where:** Google.com + MozBar

This is the step Edward says matters most. Pick your top 10 keywords by relevance + volume. For each one:

### Open Google. Type the keyword. Look at the results.

**Check these 6 things:**

| What to Check | How | Good Sign | Bad Sign |
|---|---|---|---|
| **Domain Authority** | MozBar shows DA next to each result | DA under 30 | DA over 50 everywhere |
| **Page Score** | Click MozBar On-Page Grader icon | Yellow/orange (under 80) | Green (85+) |
| **Keyword in titles?** | Read the blue title links | Nobody has your exact keyword | Multiple results have it |
| **Keyword in URLs?** | Read the green URL lines | Keyword not in any URL slug | Keyword in multiple URLs |
| **Content type** | What are the results? | Service/product pages | "Best of" lists or how-to articles |
| **Can you beat #1?** | Click into the top result, read it | Thin, generic, no screenshot, confusing | Detailed, well-targeted, great UX |

### Fill in the Sheets columns:

| Column | What to Write |
|--------|--------------|
| SERP Checked? | Yes |
| DA Range (manual) | e.g., "12-35" |
| Page Score Range | e.g., "yellow/orange" |
| KW in Titles? | Yes / No |
| KW in URLs? | Yes / No |
| Content Type | Product / List / How-to |
| SERP Notes | Your observations in plain English |

### Example good note:
> "Wide open. Top results DA 15-28, all page scores yellow. Nobody has keyword in title or URL. Top result is a generic Medicare.gov page. Easy #1."

### Example bad note:
> "Competitive. AARP (DA 92) and Medicare.gov (DA 94) dominate. All results are well-targeted. Skip for now."

---

## Step 3: Check for Overlapping Keywords
**Time:** 5 min | **Where:** Google.com

When you see similar keywords (e.g., "medigap plan g nj" and "medicare supplement plan g new jersey"):

1. Google both keywords
2. Compare the results side by side
3. **70%+ same results?** = ONE page targets both. Write "Same SERP as [keyword]" in the Overlap column.
4. **Different results?** = Separate pages. Write "Unique" in the Overlap column.

---

## Step 4: Apply the Skip Rules
**Time:** 5 min | **Where:** Google Sheets

Before approving, run through this quick mental checklist:

| SKIP if you see... | Why |
|---------------------|-----|
| DA 50+ AND keyword in every title/URL | Too competitive — you can't outrank them yet |
| All results are "5 Best..." or "Top 10..." lists | List intent, not purchase intent — harder, less conversion |
| How-to article at #1, product at #2 | Mixed intent — Google isn't sure what searchers want |
| Results are about a different product/industry | Google has bucketed this keyword differently than you expect |
| High volume but results from random unrelated niches | Broad keyword — high volume but low conversion |
| Nobody targets it but every result is DA 70+ | Google wants authority for this topic — wait until your DA is 20-30+ |

For competitive keywords you still want: flag for **YouTube short** instead of web page.

---

## Step 5: Approve
**Time:** 5 min | **Where:** Google Sheets (Page Blueprints tab)

- Set **Status = "approved"** for keywords that passed Steps 2-4
- Set **Status = "deprioritize"** for keywords to revisit later
- Set **Status = "skip"** for keywords that failed

**Rule:** Never approve a keyword where "SERP Checked?" is blank.

The build script will pick up approved keywords on the next run.

---

# AFTER EACH PAGE IS BUILT

The build script (`build-compact-pages.js`) automatically runs:
- Grammar/spelling check (Claude)
- AI detection scoring (Claude Haiku)
- On-page SEO score (13 factors, target 96-98)
- OG tag validation
- GSC submission URL reminder

**You still need to do these 3 things:**

### Pre-Deploy (~5 min per page)

| # | Task | Details |
|---|------|---------|
| 1 | **Read the page** | Does it answer the searcher's question immediately? Would YOU call 855-559-1700 after reading this? |
| 2 | **Replace placeholder image** | Swap the SVG in `public/images/` with a real branded WebP. Compress with TinyPNG first. Edward says: "Show your searchers they are in the right place." |
| 3 | **Review script output** | If grammar issues were flagged, fix them. If AI detection score was >4, edit for more natural voice. If on-page score was <90, check keyword placement. |

### Post-Deploy (~3 min per page)

| # | Task | Details |
|---|------|---------|
| 1 | **Submit to GSC** | The script logs the exact URL. Go to GSC > URL Inspection > paste > Request Indexing. |
| 2 | **Track keyword in Moz** | Add keyword to Moz Keyword Tracking. Use a label matching the hub page (e.g., "Hub", "Medicare Supplement NJ"). Set region: National (US). |

### Batch Planning Rule

Plan **~5 pages at a time** before building. This prevents:
- Repetitive content across similar pages
- Making separate pages when one page could target both keywords
- Disorganized hub page categories

---

# MONTHLY — 1st of Each Month (~20 min)

---

## GSC Opportunity Review

**Where:** Google Search Console > Performance > 12-month view

For each page published 2+ months ago:

1. Click the page URL in GSC to see all keywords it ranks for
2. **Positions 6-13** (page 1 / top of page 2):
   - These are low-hanging fruit
   - Add a few sentences mentioning this keyword to the EXISTING page
   - Don't make a new page — just strengthen the current one
3. **Positions 13-25** (page 2-3):
   - Consider making a NEW dedicated landing page for this keyword
   - Add it to the Keywords tab in your Sheet
4. **High impressions but low CTR:**
   - Rewrite the page title and meta description to better match this keyword

The script also generates `gsc-keyword-opportunities.tsv` with this data — check that file too.

---

## Client Language Mining

After a month of client calls, ask yourself:

> "What phrases did people use that sounded like a Google search?"

Examples:
- "I'm turning 65 and don't know where to start" → keyword seed
- "My Mutual of Omaha rates went up 30%" → keyword seed
- "Can I switch my Medigap plan without a health exam?" → keyword seed
- "Does Medicare cover my husband too?" → keyword seed

Add these to `scripts/find-compact-keywords.js` SEED_TOPICS (line 53).

---

# QUARTERLY — Every 3 Months (~30 min)

---

## Competitor Refresh

1. Go to Moz > Competitive Research > True Competitor
2. Enter `medicareyourself.com`
3. Any new competitors? Add to `scripts/competitor-keyword-analysis.js` line 40
4. Google your top 10 keywords — who's ranking that isn't in your competitor list?

## Seed Topic Audit

1. Review `scripts/find-compact-keywords.js` SEED_TOPICS array
2. Remove seeds that consistently produce irrelevant results
3. Add new seeds from GSC discoveries + client calls

## "Overlooked Details" Refresh

List everything you do that competitors also do but don't talk about:
- "We compare rates from 20+ carriers"
- "Licensed in 35 states"
- "No cost to you"
- "We handle the paperwork"
- "Medicare enrollment assistance"

Turn each into a potential keyword or page topic.

---

# COME BACK IN 2-3 MONTHS — Module 09

After you've published 10-15 pages and have ranking data, review Module 09 (After Publishing a Page) for troubleshooting pages that aren't ranking. The transcript is at:

```
/Users/anthonyorner/Claude Code/Karpathy AutoResearch/Compact Keywords Course/09 - After Publishing a Page/
```

Key topics covered:
- Above-the-fold bounce rate issues
- When to re-optimize vs. rebuild a page
- Adding more detail to pages stuck on page 2
- Link building to push pages from page 2 to page 1

---

# QUICK REFERENCE

## Edward's Keyword Rating System

| Rating | What it means | Action |
|--------|--------------|--------|
| **Dream keyword** | DA under 30, page scores yellow, nobody targeting, products ranking | Target immediately |
| **Good keyword** | Mixed DAs, some targeting, products + some lists | Target soon |
| **Save for later** | High DA but nobody targeting | Wait until your DA is 20-30+, or make a YouTube short |
| **Skip** | High DA + high targeting, all lists, informational intent | Don't target |

## Edward's Page Title Formula

```
Target Keyword | Benefit or Searcher's Goal | Brand Name
```

Examples:
- Medicare Supplement Plan G NJ | Compare Rates Free | MedicareYourself
- Turning 65 in New Jersey | Medicare Checklist | MedicareYourself

## Edward's On-Page Optimization Target

**Score: 96-98 out of 100. NOT 100.**

> "Google does not like pages that are over-optimized. 96 to 98 is the sweet spot."

The keyword must appear in:
1. Page title (at the beginning)
2. URL slug
3. H1
4. First sentence
5. Meta description
6. First image alt text

## Casing Rules

- **Title Case:** Page title, H1
- **Sentence case:** H2s, meta description

## What the Scripts Handle vs. What You Handle

| Scripts (automated) | You (manual) |
|---|---|
| Find competitor keywords | SERP-check candidates |
| Score relevance 1-10 | Override with your judgment |
| Generate page elements | Approve/reject in Sheets |
| Build pages from approved keywords | Read + review before deploy |
| Grammar check | Fix flagged issues |
| AI detection check | Edit if flagged as AI-sounding |
| On-page SEO score (96-98 target) | Adjust if score is wrong |
| OG tag validation | Visual check via Meta Debugger (optional) |
| GSC opportunity detection | Decide: optimize existing or new page |
| Track rankings (SERP tracker) | Add keywords to Moz with labels |
