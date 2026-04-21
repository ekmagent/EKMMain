# Edward Sturm Compact Keywords — Quick Reference
**For Claude Code when working on MedicareYourself.com SEO tasks**

Last updated: March 14, 2026 | Implementation: 87% automated, 13% manual (HITL)

---

## 1. THE METHODOLOGY

### What is Compact Keywords?
A bottom-of-funnel SEO strategy targeting high-intent, low-competition keywords—the opposite of traditional high-volume keyword hunting.

**Core Philosophy:**
- **Keyword Profile:** Low competition, low volume, high conversion. Person knows what they want, doesn't know the brand.
- **Target DA:** Rank pages where competitors are DA under 10-30. Avoid head-on battles with AARP (DA 92), Medicare.gov (DA 94).
- **Page Size:** 400-500 words. Thin, focused, answerable. Edward: "Stop writing fluffy 2000-word articles."
- **Defensibility:** Start with defensive SEO (technical, on-page, structure) before link building. Fix your house first.
- **Timeline:** Expect 3-4 months before pages rank. Patience required.

### The Searcher's Journey
1. **Awareness** (top-of-funnel) — "What is Medigap?" — avoid this
2. **Consideration** (middle) — "Medigap vs. Medicare Advantage" — limited targeting
3. **Decision** (bottom) — "Medicare Supplement Plan G rates NJ" — TARGET THIS
   - Person is ready to call
   - High conversion intent
   - Low search volume (50-200/mo typical)
   - Competitors haven't optimized yet

---

## 2. THE PIPELINE

### Overview: Research → Build → Deploy → Monitor → Optimize

```
Saturday (Automated)
  ├─ Competitor keyword discovery (Serper + Moz)
  ├─ Relevance scoring (Claude 1-10)
  ├─ SERP analysis (DA, page scores)
  ├─ Deduplication
  └─ Sheets update with new keywords

Monday (You: 1 hour review)
  ├─ SERP-check top 10 with MozBar
  ├─ Apply skip rules
  └─ Approve keywords for building

Automated (on approval)
  ├─ Page element generation (title, H1, H2s, meta)
  ├─ Content research + writing
  ├─ Grammar/spelling check
  ├─ AI detection scoring
  ├─ On-page SEO score (target 96-98)
  └─ OG tag validation

You: After Build (~10 min per page)
  ├─ Read the page (does it work?)
  ├─ Replace SVG placeholder with real image
  └─ Review script output (grammar, AI score)

Deploy
  ├─ Build script pushes to production
  └─ Script logs exact URL + GSC submission reminder

You: After Deploy (~3 min per page)
  ├─ Submit to Google Search Console
  ├─ Add keyword to Moz tracking with label
  └─ (Optional) Check Moz On-Page Grader on live page

Weekly Monitor (Automated)
  ├─ serp-tracker.js — rank positions for top 10 keywords
  └─ site-audit.js — crawl for technical issues

Monthly (You: ~20 min)
  ├─ GSC opportunity review (positions 6-25)
  └─ Client language mining (add seed topics)

Quarterly (You: ~30 min)
  ├─ Moz True Competitor audit
  ├─ Seed topic refresh
  └─ Troubleshoot pages stuck at position 6+
```

### Key Data Sources
- **`service-index.json`** — Discovered pages, consumed by sitemap + index pages
- **`gsc-keyword-opportunities.tsv`** — Positions 6-25 from GSC, for optimization vs. new page decisions
- **`serp-log.tsv`** — Weekly rank tracking for approved keywords
- **Google Sheets (Internal SEO Sheet)** — Source of truth: Keywords tab (new discoveries), Page Blueprints tab (approved + built)
- **Moz** — Competitor analysis, true competitor tool, keyword tracking, on-page grading

---

## 3. THE GAPS

### What's NOT Automated (Stays Manual)

| Task | Why | Schedule |
|------|-----|----------|
| **SERP judgment calls** | Only humans understand intent. MozBar + eyeballs. | Weekly (45 min) |
| **Content quality review** | Read pages. Is searcher satisfied? Would they call? | Per page (~5 min) |
| **Real images** | Placeholder SVGs need replacement with branded WebP. TinyPNG compression. | Per page (~3 min) |
| **Keyword tracking in Moz** | Add keyword + variations to Moz Keyword Tracking with hub page label. | Per page (~2 min) |
| **GSC strategic decisions** | Decide for each position 6-25 keyword: optimize existing page OR build new page? | Monthly (~15 min) |
| **Video recording** | Scripts generate scripts, titles, descriptions. YOU record + publish on YouTube, TikTok, Instagram Reels. | As budget allows |
| **Social media profiles** | Create Facebook, LinkedIn, YouTube accounts. Can't automate. | One-time (~30 min) |
| **Link building outreach** | Expert quotes (Featured.com, Source of Sources), press releases, directories, podcasts. Requires email/pitching. | Ongoing (~2 hrs/week) |
| **Newsletter** | No newsletter infrastructure exists yet. | Future (low priority) |
| **NAP consistency** | Add business address to Footer, ensure phone/address consistency. | One-time (~20 min) |

### Code Gaps That Could Be Closed
- Algoroo.com SERP volatility monitoring (low priority)
- Neutral tone validation (no superlatives, no "best/greatest")
- Content position validation (verify 80% unique content above fold)
- Module 11 transcription (Whisper on 2 video files)
- Embeddable QuoteWidget for backlinks

**Current implementation gap: ~13%. The last 5% requires sustained link building effort that cannot be automated.**

---

## 4. PRIORITY ACTIONS (RIGHT NOW)

### THIS WEEK — Foundation Setup (One-time, ~2 hours)

1. **Install MozBar** chrome extension (5 min)
   - Log in with your Moz account
   - You'll use this weekly for SERP checking

2. **Run Moz True Competitor Analysis** (10 min)
   - Moz > Competitive Research > True Competitor > enter `medicareyourself.com`
   - Update `scripts/competitor-keyword-analysis.js` line 40 with new competitors found

3. **"Overlooked Details" brainstorm** (30 min)
   - Sit with blank doc
   - List every service you offer **in client language** (not marketing speak)
   - Examples: "I help you find the cheapest plan", "I explain if you need Medigap", "I can check if you qualify for subsidies"
   - Add as seed topics to `scripts/find-compact-keywords.js` line 53
   - This is the single highest-leverage HITL task

4. **Create social media profiles** (30 min)
   - Facebook business page
   - LinkedIn company page
   - YouTube channel
   - Add links to Footer.tsx (there's a TODO comment)

5. **Fill out Google Business Profile** (20 min)
   - Photos, media, review responses, NAP (Name, Address, Phone)
   - Phone: 855-559-1700 (already consistent)
   - Address: Add if applicable
   - This drives local visibility

### FIRST MONTH — Weekly Rhythm (Recurring, ~1 hour/week)

**Every Monday:**

1. **Review new keywords** (15 min)
   - Google Sheets > Keywords tab > sort by Date Added
   - For each: "Would someone searching this pick up the phone?"
   - Override Claude's relevance score in "Your Relevance (1-10)" column if your gut differs
   - You know Medicare better than Claude

2. **SERP-check top 10 candidates** (30-45 min) — **THIS IS THE MOST IMPORTANT STEP**
   - Open Google, type keyword
   - MozBar each result. Check:
     - **DA:** Under 30 is good, over 50 is warning
     - **Page Score:** Yellow/orange (under 80) is good, green (85+) is too optimized
     - **Keyword in title/URL?** Nobody having it = easier to rank
     - **Content type:** Service/product pages = you can rank; "Best of" lists = harder
     - **Can you beat #1?** Click and read it
   - Fill Sheets columns: SERP Checked?, DA Range, Page Score Range, Content Type, SERP Notes
   - Example good SERP note: "Wide open. DA 12-28, yellow page scores, nobody has keyword in title/URL. Top result is thin. Easy #1."
   - Example bad note: "Competitive. AARP (DA 92) + Medicare.gov (DA 94) everywhere. Skip."

3. **Check for keyword overlap** (5 min)
   - Similar keywords like "medigap plan g nj" and "medicare supplement plan g new jersey"?
   - Google both. Same SERP = one page targets both
   - Write "Same SERP as [other keyword]" or "Unique" in Overlap column

4. **Apply deprioritization rules** (5 min)
   - **SKIP if:** DA 50+ AND keyword everywhere AND all results are "5 Best" lists AND Google buckets this differently than you expect
   - **CONSIDER FOR YOUTUBE** instead if competitive but still relevant
   - See KEYWORD-CHECKLIST.md for full 7-rule checklist

5. **Approve keywords** (5 min)
   - Google Sheets > Page Blueprints tab
   - Set Status = "approved" for keywords passing steps 2-4
   - **Rule:** Never approve if "SERP Checked?" column is blank
   - Build script picks these up next run

### MONTHLY — Strategic Reviews

**1st of each month (~20 min):**

1. **GSC Opportunity Review**
   - Google Search Console > Performance > 12-month view
   - For each page published 2+ months ago:
     - **Positions 6-13:** Add 2-3 sentences to EXISTING page (low-hanging fruit)
     - **Positions 13-25:** Consider NEW landing page (add to Keywords sheet)
     - **High impressions, low CTR:** Rewrite title + meta description
   - Also check `gsc-keyword-opportunities.tsv` (auto-generated)

2. **Client Language Mining**
   - After month of calls, what phrases sounded like Google searches?
   - "I'm turning 65 and don't know where to start" → keyword seed
   - "Can I switch without a health exam?" → keyword seed
   - Add to `scripts/find-compact-keywords.js` SEED_TOPICS (line 53)

### QUARTERLY — Growth Moves

Every 3 months (~30 min):

1. **Competitor refresh** — Run Moz True Competitor again
2. **Seed topic audit** — Remove irrelevant seeds, add GSC discoveries
3. **"Overlooked details" refresh** — New services, new client language patterns
4. **Module 09 troubleshooting** — For pages stuck at position 6+ (once you have 2-3 months ranking data)

### WHEN READY — High-Impact (Deferred, as budget allows)

| Action | Impact | Cost | Time |
|--------|--------|------|------|
| Sign up for **Source of Sources** (free) | 2-3 journalist queries/day → expert quote backlinks | Free | 10 min/day |
| Sign up for **Featured.com** | 1-2 queries/day → expert quote backlinks | $40/month | 10 min/day |
| Record first **YouTube Short** | Use script from `video-scripts/`. Keyword at start of title. | Free | 30 min |
| Build `/press` page | Brand logos, headshot, media kit. Press kit template. | Free | 2 hrs one-time |
| Create "Medicare Statistics 2026" linkable asset | Attracts backlinks when cited. | Free | 4 hrs one-time |

---

## 5. QUICK GLOSSARY & EDWARD'S RULES

### Key Terms

| Term | Meaning |
|------|---------|
| **BOF** | Bottom-of-funnel. Decision-stage searches. Target these. |
| **DA** | Domain Authority (Moz 0-100). Indicator of ranking difficulty. |
| **SERP** | Search Engine Results Page. The Google results for a keyword. |
| **Compact Keyword** | Low-volume, low-competition, high-intent keyword Edward's strategy targets. |
| **Hub Page** | Central landing page (`/hub`) linking to all BOF service pages. Tier-1 internal linking. |
| **Service Page** | Standalone 400-500 word page targeting one compact keyword. Examples: `plan-g-rates-nj.tsx`. |
| **Schema Markup** | JSON-LD structured data. Helps Google understand page type. All pages must have it. |
| **Page Score** | 13-factor on-page SEO score (0-100). Target 96-98, not 100. Edward: "Over-optimization kills rankings." |
| **HITL** | Human-In-The-Loop. Tasks that require human judgment (SERP checking, image selection, outreach). |
| **GI / Guaranteed Issue** | Federal rule: Medigap companies can't decline you for 6 months after Medicare Part B start. Critical for timing pages. |
| **OEP** | Open Enrollment Period. 7-month window when Medicare Advantage/Supplement changes are free. Critical dates for page targeting. |

### Edward's Page Title Formula

```
Target Keyword | Benefit or Searcher's Goal | Brand Name
```

**Examples:**
- `Medicare Supplement Plan G NJ | Compare Rates Free | MedicareYourself`
- `Turning 65 in New Jersey | Medicare Checklist | MedicareYourself`
- `Switch Medigap Plans | No Health Exam | MedicareYourself`

**Format Rules:**
- Title Case for title + H1
- Sentence case for H2s + meta description
- Keep under 60 characters for Google truncation

### Edward's On-Page SEO Target

**Score: 96-98 out of 100. NOT 100.**

> "Google does not like pages that are over-optimized. 96 to 98 is the sweet spot."

**Keyword MUST appear in:**
1. Page URL slug (at start if possible)
2. Page title (at beginning)
3. H1 (at beginning)
4. First sentence of body (naturally, no forced stuffing)
5. Meta description (naturally)
6. First image alt text (keyword first, then descriptive)

**Page Structure (400-500 words):**
```
Hero section
  ├─ H1 (keyword at start)
  ├─ Intro (keyword in first sentence, 1-2 sentences max)
  ├─ CTA button ("Get Quote", "Call Now")
  └─ Hero image (WebP, compressed, keyword in alt)

Body (3-4 short sections)
  ├─ H2 (sentence case, keyword if natural)
  ├─ 2-3 short paragraphs (1-3 sentences each)
  ├─ Bullet points (features, use cases)
  └─ Section image (optional)

FAQ Accordion (5-7 QA pairs)
  ├─ Question (keyword if natural)
  └─ Answer (2-3 sentences)

Footer CTA
  ├─ Phone CTA component
  └─ Hub page link
```

### Edward's Keyword Rating System

| Rating | Characteristics | Action |
|--------|-----------------|--------|
| **Dream Keyword** | DA under 30, yellow page scores, nobody targeting it, product pages ranking | Target immediately |
| **Good Keyword** | Mixed DAs, some targeting, product + some list results | Target soon |
| **Save for Later** | High DA (50+) but nobody targeting yet | Wait until your DA is 20-30+, OR make YouTube short |
| **Skip** | High DA + high targeting, all "Best of" lists, informational intent | Don't target |

### Edward's Skip Rules (SERP Checking)

Skip a keyword if:
1. **DA 50+ everywhere AND keyword in every title/URL** — Too competitive, you can't outrank yet
2. **All results are "5 Best..." or "Top 10..." lists** — List intent, not purchase intent. Harder, less conversion.
3. **How-to article #1, product #2** — Mixed intent. Google isn't sure what searchers want.
4. **Results are about a different product/industry** — Google has bucketed this keyword differently than you expect.
5. **High volume but results from random unrelated niches** — Broad keyword. High volume but low conversion.
6. **Nobody targets it but all results DA 70+** — Google wants authority. Wait until your DA is 20-30+.
7. **Overlaps with keyword you're already targeting** — Avoid cannibalization. One page = both keywords if SERP overlap.

### Edward's Tone Rules

- **Neutral tone** — No superlatives ("best", "greatest", "perfect")
- **Short, punchy sentences** — 1-3 sentences per paragraph max
- **Bullet points for features/use cases** — Scannable, not dense prose
- **Real product talk, not flowery marketing** — "We compare rates from 20+ carriers" not "Discover the perfect plan today"
- **No AI-generated copy feel** — Write naturally. Edward: "Humans can smell AI."

### Edward's Image Rules

- **Keyword in filename** (e.g., `plan-g-rates-nj.webp` not `image-001.webp`)
- **Keyword in first image alt text** (first = keyword-focused, rest = descriptive)
- **WebP format, compressed** (TinyPNG or similar)
- **Real branded images, not generic stock** — Show searchers they're in the right place
- **Mobile layout:** H1 → intro → CTA → image (not image first)

### Edward's General Rules

- **Plan ~5 pages at a time before building** — Prevents repetition, overlap, disorganized hubs
- **Don't rely on keyword difficulty scores** — Use Moz DA + eyeballs on SERP instead
- **Keyword in URL, title, meta desc, H1, first sentence** — All 5 required
- **Brand name at end of title with pipe separator** — `Keyword | Benefit | Brand`
- **Target bottom-of-funnel only** — Avoid top-of-funnel awareness content on your main site
- **Avoid over-optimization (100)** — 96-98 is the sweet spot
- **Templatize reusable sections** — PhoneCTA, FAQSection, SchemaMarkup shared across pages
- **Submit sitemap to GSC + Bing** — All XML variations (with/without www)
- **Check Screaming Frog quarterly** — Look for 404s, 301s, noindex issues

---

## 6. WHEN THE USER SAYS...

### "Pages not ranking" or "Why are we at position 15?"
1. Check `serp-log.tsv` — Has the page been indexed for 2-3 months?
2. Run `site-audit.js` — Any technical issues blocking indexing?
3. GSC > URL Inspection — Is page indexed and URL inspectable?
4. Check on-page score — Is it 96-98 or dropped to 100 (over-optimized)?
5. Review Module 09 troubleshooting checklist (after 2-3 months ranking data exists)
6. **Most likely:** Just needs time. Edward says expect 3-4 months. Be patient.

### "Indexing is slow" or "Pages not in Google"
1. Submit to GSC > URL Inspection > Request Indexing (immediately after deploy)
2. Add to sitemap — `sitemap.ts` should auto-discover via `service-index.json`
3. Check `robots.txt` — Ensure page is not blocked
4. Check page headers — Ensure no noindex meta tag
5. Run `site-audit.js` — Check for crawlability issues
6. Bing Webmaster Tools — Some pages index Bing first, then Google follows

### "Keyword research is stuck" or "No good keywords to target"
1. Have you done the **"Overlooked Details" brainstorm?** This is the highest-leverage task. (30 min)
2. Check `gsc-keyword-opportunities.tsv` — Are there positions 13-25 opportunities you haven't explored?
3. Mine client language from phone calls — Are there phrases people use that sound like searches?
4. Check Moz True Competitor — New competitors = new keyword angles
5. Try different seed topics in `scripts/find-compact-keywords.js` — Be specific to Medicare scenarios

### "Build script failed" or "Page has grammar issues"
1. Check build log — What did Claude flag?
2. **Grammar issues:** Script output is readable. Manually fix in the `.tsx` file, rebuild.
3. **AI detection score > 4:** Page sounds too AI-ish. Edit for more natural phrasing, shorter sentences, more direct.
4. **On-page score < 90:** Check keyword placement. Is it in H1, first sentence, meta description, URL?
5. **OG tag validation failed:** Check page frontmatter. Brand name should be "MedicareYourself".

### "Should we target this keyword or skip it?"
Follow Edward's skip rules (see glossary above). If unsure:
- **SERP-check it first** with MozBar (top 10 results, DA, page scores)
- **Apply the 7 skip rules** (all in Section 5 > Edward's Skip Rules)
- If borderline competitive: **Target via YouTube Short instead** of web page
- If high-intent but competitive: **Wait until your DA is 20+**, then revisit

### "Next steps to improve rankings?"
Priority order (Edward's sequencing):
1. **Defensive SEO first** — Technical fixes, on-page optimization, structure
2. **Hub page + internal linking** — Tier-1 hub, cross-links between service pages
3. **Real images + branded presence** — Replace placeholders, fill out Google Business Profile
4. **GSC + SERP tracking** — Monitor weekly, optimize positions 6-25 monthly
5. **Expert quotes + press** — Source of Sources (free), Featured.com ($40/mo)
6. **YouTube shorts** — Especially for competitive keywords you can't rank web pages on yet
7. **Newsletter + linkable assets** — Long-term, after you have ranking data

---

## 7. FILE LOCATIONS

| File/Script | Purpose | You Touch It | When |
|-------------|---------|--------------|------|
| `scripts/find-compact-keywords.js` | Discover keywords via Serper + Moz | Yes | Add seed topics (weekly), review output (weekly) |
| `scripts/build-compact-pages.js` | Build pages from approved keywords | Rarely | Approve keywords first, script does the rest |
| `scripts/serp-tracker.js` | Weekly rank tracking | No | Check `serp-log.tsv` output (weekly) |
| `scripts/competitor-keyword-analysis.js` | Competitor research | Yes | Update competitor list after Moz True Competitor (quarterly) |
| `scripts/site-audit.js` | Technical SEO audit | No | Check output for crawlability issues (weekly) |
| `scripts/screaming-frog-crawl.js` | Crawl site for 404s, 301s, noindex | No | Review output quarterly |
| `lib/medicare-figures.ts` | 2026 Medicare cost source of truth | Yes | Update annually (e.g., Part B premium, Part A deductible) |
| `Google Sheets (Internal SEO Sheet)` | All keyword research + approval decisions | Yes | Weekly (Keywords tab), Monthly (GSC decisions) |
| `public/images/` | Page images (currently SVGs) | Yes | Replace with real WebP images after page builds |
| `app/services/[slug].tsx` | Service page templates | No | Build script generates, you review |
| `/hub` page (`app/services/hub/page.tsx`) | Central hub page | Rarely | Update if category structure changes |
| `sitemap.ts` | XML sitemap | No | Auto-generated from service-index.json |
| `KEYWORD-CHECKLIST.md` | Weekly playbook | You | Reference every Monday |

---

## 8. HELPFUL CONTEXT FOR CLAUDE WHEN WORKING

**When Claude is generating page content:**
- Enforce Page Title Formula: `Keyword | Benefit | Brand`
- Target on-page score 96-98 (not 100)
- Check keyword placement: URL, title, H1, first sentence, meta, first image alt
- Enforce 400-500 word target
- No superlatives. Neutral tone.
- Punchy sentences (1-3 per paragraph)
- SchemaMarkup + structured data required

**When Claude is troubleshooting indexing/ranking issues:**
- First question: Is page in Google Search Console?
- Second: Has it been 2-3 months since publish? (Edward says be patient)
- Third: Check on-page score. Is it over-optimized (100)?
- Fourth: Check internal linking. Is it linked from hub page?
- Fifth: Check GSC for indexing errors or mobile usability issues

**When Claude is reviewing SEO decisions:**
- You (the human) are the SERP authority. Claude can research, but you SERP-check with MozBar.
- Low DA is good (under 30). High DA (over 50) means be careful.
- Yellow/orange page scores are target. Green (85+) means over-optimization.
- One page per keyword (avoid cannibalization).
- Always ask: "Would someone Googling this be ready to pick up the phone?"

---

## 9. CURRENT STATUS & NEXT IMMEDIATE ACTIONS

**As of March 14, 2026:**
- ✅ Technical SEO: 95% done (HTTPS, GSC, Bing, Screaming Frog, sitemaps)
- ✅ On-page template: 85% done (title formula, keyword placement, schema)
- ✅ Build pipeline: 95% done (automated keyword discovery → page building → grammar/AI checks)
- ✅ Monitoring: Weekly SERP tracker + site audit
- ⚠️  Images: Placeholder SVGs need replacement (manual per page)
- ⚠️  Link building: 70% done (directories, press releases). Missing expert quotes (Featured.com, Source of Sources)
- ⚠️  Video SEO: Scripts exist, no videos published yet
- ❌ Social media: Profiles not created yet (one-time setup)

**RIGHT NOW PRIORITIES (in order):**
1. **"Overlooked Details" brainstorm** (30 min) — Highest ROI
2. **Weekly SERP-checking rhythm** (45 min/week) — Most important human step
3. **Replace SVG placeholder images** (3 min per page) — Quick wins
4. **Create social media profiles** (one-time 30 min) — Foundation for NAP consistency
5. **Start expert quote outreach** (Source of Sources is free) — Link building in action

---

**End of Reference Guide.**

Use this document to:
- **Quick lookup:** What is Edward's rule on [X]?
- **Context setting:** User mentions "pages not ranking" → check Section 6
- **Task planning:** What should we do next? → check Section 4
- **Validation:** Does this action follow the course methodology? → check Section 5