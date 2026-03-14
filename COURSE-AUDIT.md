# Edward Sturm Compact Keywords Course — Full Audit Report
## MedicareYourself.com Implementation Gap Analysis

**Date:** March 14, 2026
**Course:** 14 modules, 36 videos, ~9 hours
**Source:** All transcripts + PDFs reviewed against codebase

---

# OVERALL SCORE BY MODULE

| Module | Name | Coverage | Score | Notes |
|--------|------|----------|-------|-------|
| 01 | Introduction | Conceptual | **100%** | No action items — philosophy/framing only |
| 02 | Critical Basics | Conceptual | **100%** | No action items — defines compact keywords |
| 03 | The New SEO | Conceptual + Examples | **95%** | Gap: Algoroo.com volatility monitoring not implemented |
| 04 | Getting Technical | Defensive SEO | **95%** | Done today. Gap: free SF version can't do headless CLI |
| 05 | On-Page SEO | Page Template | **85%** | Several gaps — see details below |
| 06 | On-Site SEO | Info Architecture | **90%** | Hub page exists. Gaps in image SEO and NAP consistency |
| 07 | Finding Compact Keywords | Keyword Research | **95%** | Done today. Gap: your manual HITL tasks (MozBar, brainstorm) |
| 08 | Putting up Pages | Page Building | **95%** | Done today. Automated grammar/AI/scoring. Gap: batch planning is manual |
| 09 | After Publishing | Troubleshooting | **70%** | Deferred — need ranking data first. Change log script exists. |
| 10 | ColorBliss Case Study | Programmatic SEO | **80%** | `build-compact-pages.js` does this. Gap: no QA on AI pages |
| 11 | Ranking Without Website | Video/Social SEO | **75%** | Scripts exist but Module 11 transcripts are binary (not transcribed) |
| 12 | Link Building | Backlinks | **70%** | 3 of 5 strategies automated. Gaps in events, podcasts, micro-SaaS |
| 13 | Overview | Strategy Recap | **100%** | No new content — recap only |
| 14 | Conclusion | Wrap-up | **100%** | No action items |

**Weighted overall: ~87%**

---

# MODULE-BY-MODULE GAP ANALYSIS

---

## MODULE 01: Introduction (100%)

No gaps. This is philosophy: target bottom-of-funnel keywords, 400-500 word pages, defensive SEO first.

---

## MODULE 02: Critical Basics (100%)

No gaps. Defines compact keywords:
- Bottom-of-funnel only (person knows what they want, doesn't know the brand)
- Low competition, low volume, high conversion
- DA under 10 can rank #1

Your entire strategy follows this.

---

## MODULE 03: The New SEO (95%)

| Instruction | Status | Gap |
|-------------|--------|-----|
| Use Moz (or Ahrefs/Semrush) as SEO tool | Done | Moz API integrated |
| Use SERP Analysis to evaluate keywords | Done | Serper + Moz DA in scripts |
| Don't rely on keyword difficulty scores | Done | Edward's rule in checklist |
| Keyword in URL, title, meta desc, H1, first sentence | Done | Enforced in build template |
| Brand name at end of title with pipe separator | Done | Fixed today |
| Templatize sections across pages | Done | Build script uses template |
| Use Bing Webmaster Tools | Done | `fetch-bing-grounding.js` |
| Check Algoroo.com for SERP volatility | **NOT DONE** | Could add to weekly monitoring |
| Avoid top-of-funnel content on website | Done | BOF filters in keyword scripts |

**Gap:** Algoroo.com monitoring — minor, not critical.

---

## MODULE 04: Getting Technical (95%)

| Instruction | Status | Gap |
|-------------|--------|-----|
| HTTPS | Done | Site uses https |
| Connect Google Search Console (all variations) | Done | GSC integrated |
| Connect Bing Webmaster Tools | Done | Bing script exists |
| Submit XML sitemaps to GSC + Bing | Done | `sitemap.ts` exists |
| Sitemap listed in robots.txt | Done | `robots.ts` exists |
| Crawl site with Screaming Frog | Done | `screaming-frog-crawl.js` built today |
| Filter to HTML, check 404s, 301s, noindex | Done | Crawl performed today |
| Export to Site Audit Template | Done | Google Sheets + TSV |
| Fix page titles, meta descs, H1s | Done | All fixed today |
| Server-side rendering | Done | Next.js = SSR by default |
| Check for lorem ipsum placeholder text | Done | `site-audit.js` checks word count |
| Custom 404 page | Done | `not-found.tsx` deployed |
| Privacy + Terms pages | Done | Deployed today |
| Page speed: CDN, image compression, WebP, responsive images | Done | Vercel CDN, Next.js Image optimization |
| Re-audit after major changes | Done | Weekly automated audit |

**Gap:** Screaming Frog headless CLI requires paid licence. Workaround: manual GUI crawl + parse script.

---

## MODULE 05: On-Page SEO (85%)

| Instruction | Status | Gap |
|-------------|--------|-----|
| Keyword in URL slug | Done | Build script enforces |
| Keyword at beginning of page title | Done | Build script enforces |
| Keyword in meta description | Done | Build script enforces |
| Keyword as H1 | Done | Build script enforces |
| Keyword at beginning of first sentence | Done | Build script enforces |
| Keyword in first image alt text | Done | Build script enforces |
| Page score target 96-98, NOT 100 | Done | On-page scorer built today |
| Page title format: Keyword \| Benefit \| Brand | Done | Fixed today |
| **Short, punchy sentences (1-3 sentences per paragraph)** | **PARTIAL** | Claude generates but no enforcement/check |
| **Bullet points for features/use cases** | **PARTIAL** | Not explicitly checked |
| **Neutral tone — no superlatives (no "best", "greatest")** | **NOT CHECKED** | Should add to Claude prompt or validation |
| **No AI-generated copy (or heavily human-reviewed)** | **PARTIAL** | AI detection check added, but pages ARE AI-generated |
| **80% of unique content near TOP of page** | **NOT CHECKED** | Build template puts intro + CTA first, but not validated |
| **Real product/service images, not generic stock** | **NOT DONE** | SVG placeholders created; real images need manual upload |
| **Templatized reusable sections** | **PARTIAL** | PhoneCTA, FAQSection, SchemaMarkup are shared. But section body copy is generated fresh per page |
| **Mobile layout: H1 → intro → CTA → image (not image first)** | **NOT CHECKED** | Next.js responsive, but layout order not specifically validated |
| **SERP preview tool to test title/meta length** | **AUTOMATED** | On-page scorer checks lengths |
| **Awkward keywords: rephrase naturally for H1, use raw in URL** | **IN PROMPT** | Claude instructed to handle fragments naturally |
| **Target 1-3 keywords per page, normally just 1** | **DONE** | Each page targets 1 keyword |

**Gaps to close:**
1. Add "neutral tone" instruction to Claude prompt (no superlatives, no sensationalism)
2. Real images (not placeholders) — this is a manual HITL task per page
3. Validate that 80% of unique content is above the fold

---

## MODULE 06: On-Site SEO (90%)

| Instruction | Status | Gap |
|-------------|--------|-----|
| Hub page linking to all BOF landing pages | Done | `/hub` page exists |
| Hub page in footer | Done | Footer links to hub |
| Hub page layout: H1 → intro → categorized links → CTA | Done | Hub page follows this |
| Click depth ≤ 2 from homepage | Done | Footer = 1 click, hub = 2 clicks |
| No orphan pages | Done | Fixed PA orphan today |
| Image SEO: keyword in file name | **PARTIAL** | Build script names files `hub_{slug}.webp` but keyword not in filename |
| Image SEO: keyword in alt text | Done | Build script enforces |
| Image SEO: compress images (TinyPNG) | **NOT AUTOMATED** | Manual step — placeholder SVGs need replacement |
| Image SEO: use WebP format | Done | Template specifies .webp |
| NAP consistency (Name, Address, Phone) | **PARTIAL** | Phone consistent (855-559-1700). Footer updated with EasyKind Health LLC. But no address listed. |
| Social profiles in footer | **NOT DONE** | Footer has a TODO comment for this |
| Outbound links to authoritative sources | Done | Pages link to Medicare.gov, CMS.gov |
| Legal pages (privacy, terms) | Done | Deployed today |

**Gaps to close:**
1. Create social media profiles (Facebook, LinkedIn, YouTube minimum) and add to footer
2. Add business address for NAP consistency (if applicable)
3. Image filename should include keyword (rename from `hub_slug.webp` to `keyword-slug.webp`)

---

## MODULE 07: Finding Compact Keywords (95%)

| Instruction | Status | Gap |
|-------------|--------|-----|
| Keywords Tab in Internal SEO Template | Done | Google Sheets with all columns |
| Competitor keyword export | Done | `competitor-keyword-analysis.js` |
| SERP analysis per keyword | **HITL** | Checklist created. YOU must do this. |
| Moz True Competitor tool | **HITL** | One-time task in checklist |
| ChatGPT for seed keyword ideas | Done | Claude does this |
| Google Sheets =AI() filter | Done | Claude does equivalent server-side |
| High leverage keywords (BOF + for + plural) | Done | Seeds in script |
| Article submission / Write for Us page | Done | Built today |
| GSC low-hanging fruit (positions 6-25) | Done | `gsc-keyword-opportunities.tsv` |
| SERP overlap check (1 page vs separate) | **HITL** | Column in Sheets, you check manually |
| 7 deprioritization rules | **HITL** | In checklist |
| "Overlooked details" brainstorm | **HITL** | You must do this (30 min) |
| Volume=0 keywords still valuable | Done | Script doesn't filter out 0-volume |
| YouTube for competitive keywords | Done | `generate-video-seo.js` prioritizes these |

**Gaps:** All remaining gaps are YOUR manual tasks — no code to write.

---

## MODULE 08: Putting up Pages (95%)

| Instruction | Status | Gap |
|-------------|--------|-----|
| Site SEO Layout Tab | Done | Page Blueprints tab in Sheets |
| Plan ~5 pages at a time | **HITL** | Rule in checklist |
| Content notes / words to fit in | **PARTIAL** | Claude researches competitors but doesn't extract "words to fit in" as a visible list for your review |
| Spelling/grammar check | Done | Automated via Claude |
| AI detection check | Done | Automated via Claude Haiku |
| Meta Sharing Debugger | Done | Automated OG tag validation |
| Moz On-Page Grader (96-98) | Done | Custom 13-factor scorer |
| Submit to GSC | **HITL** | Reminder logged with exact URL |
| Track keywords in Moz with labels | **HITL** | Manual step |
| Mark as Done in Sheet | Done | Automated |
| Use capitalizemytitle.com for title casing | N/A | Claude generates correct casing |
| Use totheweb.com SERP preview | Done | On-page scorer checks lengths |
| H2s in sentence case | Done | Enforced in Claude prompt |
| Different OG title/description for social | N/A | Edward usually leaves blank |

---

## MODULE 09: After Publishing a Page (70%)

| Instruction | Status | Gap |
|-------------|--------|-----|
| Check above-the-fold section if not ranking | **DEFERRED** | Need 2-3 months of ranking data first |
| Add more detail to opening hook | **DEFERRED** | |
| Use more relevant images (not AI-generated) | **GAP** | Pages currently use SVG placeholders |
| Make page title competitive with extra CTA | Done | Title formula includes benefit |
| De-optimize from 100 to 96-98 if needed | Done | Scorer flags 100 as over-optimization |
| Rephrase awkward keywords naturally | Done | In Claude prompt |
| Internal link from hub + other relevant pages | **PARTIAL** | Hub links exist, cross-links limited |
| Keep a change log | Done | `change-log.js` runs weekly |
| Check for technical problems if ALL pages not ranking | Done | `site-audit.js` + Screaming Frog |
| Track keywords weekly | Done | `serp-tracker.js` |
| Be patient — 3-4 months to rank | N/A | Awareness |
| If mixed intent, add top-of-funnel sections to page | **DEFERRED** | |
| Submit newsletter to newsletter directories | **NOT DONE** | No newsletter exists yet |

**Action when ready (2-3 months from now):**
1. Review ranking data in `serp-log.tsv`
2. For pages stuck at positions 6+, troubleshoot using Module 09 checklist
3. Replace placeholder images with real branded images

---

## MODULE 10: ColorBliss Case Study (80%)

| Instruction | Status | Gap |
|-------------|--------|-----|
| Templatized pages with variable fields | Done | `build-compact-pages.js` |
| Hub page interlinking | Done | `/hub` page |
| Target page score 96-97 | Done | Scorer targets this |
| Avoid keyword stuffing | Done | Density check with penalty |
| QA AI-generated pages | **PARTIAL** | Grammar + AI detection checks exist, but no visual QA (broken formatting, nonsensical content) |
| Low DA can rank for BOF keywords | N/A | Awareness |

---

## MODULE 11: Ranking Without Using a Website (75%)

**NOTE: Transcripts are binary (video files). Methodology extracted from COURSE INDEX.md and existing scripts.**

| Instruction | Status | Gap |
|-------------|--------|-----|
| Keyword at beginning of YouTube title | Done | `generate-video-seo.js` |
| Keyword at beginning of YouTube description | Done | `generate-video-seo.js` |
| Create 1 video per BOF keyword | Done | Script generates for each keyword |
| YouTube Shorts for search | Done | Scripts target short-form |
| TikTok with keyword in caption | Done | `generate-video-seo.js` |
| Instagram Reels | Done | `generate-video-seo.js` |
| Competitor brand name targeting via video | Done | `generate-competitor-videos.js` |
| **Actually record and publish videos** | **NOT DONE** | Scripts generate scripts/titles, but no videos exist yet |
| X/Twitter threads | Done | `generate-x-threads.js` |
| Social media posting strategy | Done | `generate-social-posts.js` |

**Gap:** Scripts generate content, but **no videos have been recorded or published**. This is a HITL/creative task.

---

## MODULE 12: Link Building (70%)

### 12-01: Directories (85%)

| Instruction | Status | Gap |
|-------------|--------|-----|
| Submit to directories using template | Done | `directory-tracker.js` |
| Google Business Profile fully filled out | **UNKNOWN** | Not tracked in codebase |
| Semrush Local SEO tool submission | **NOT DONE** | No Semrush integration |
| Use boostbenchmark.com | **NOT DONE** | $67 curated directory list |
| Link directory listings to hub page (not homepage) | **PARTIAL** | Script tracks submissions but unclear if hub page is the target |

### 12-02: Expert Quotes + Press Releases (80%)

| Instruction | Status | Gap |
|-------------|--------|-----|
| Featured.com (1-2 submissions/day) | **NOT DONE** | No account. $39.80/month. |
| Source of Sources (free, 2-3 emails/day) | **NOT DONE** | No account. Free. |
| Quoted ($99/month) | **NOT DONE** | Expensive, lower priority |
| Help a B2B Writer (free) | **NOT DONE** | No account. Free. |
| Press releases via PRLog.org | Done | `generate-press-release.js` |
| Press kit page on website | **NOT DONE** | No `/press` page |
| "As Seen In" logos on website | **NOT DONE** | Need press coverage first |
| Short punchy expert responses | N/A | HITL task |

### 12-03: Event Link Building (0%)

| Instruction | Status | Gap |
|-------------|--------|-----|
| Join Meetup groups in your niche/city | **NOT DONE** | |
| Take over abandoned groups | **NOT DONE** | |
| Co-host events for email list + backlinks | **NOT DONE** | |
| Marketing blurb in event communications | **NOT DONE** | |

**Note:** Edward says this can be outsourced to a VA. Low priority for Medicare niche (less event-driven than tech).

### 12-04: Linkable Assets (40%)

| Instruction | Status | Gap |
|-------------|--------|-----|
| Statistics/data article as link magnet | **NOT DONE** | Could create "Medicare Statistics 2026" page |
| Micro-SaaS tool on your domain | **NOT DONE** | QuoteWidget exists but isn't embeddable/shareable |
| Podcast page on your domain | **NOT DONE** | No podcast |
| Newsletter landing page on domain | **NOT DONE** | No newsletter |
| TikTok promotion of linkable assets | **NOT DONE** | No TikToks |

### 12-05: Podcast Links (0%)

| Instruction | Status | Gap |
|-------------|--------|-----|
| PodMatch ($29-62/month) | **NOT DONE** | |
| Matchmaker.fm (free tier) | **NOT DONE** | |
| Write show descriptions yourself with keywords | **NOT DONE** | |
| Repurpose podcast content into short-form video | **NOT DONE** | |

---

# COMPLETE HITL TASK LIST — What YOU Must Do

## Organized by Priority and Schedule

---

### IMMEDIATE (This Week) — One-Time Setup

| # | Task | Time | Module |
|---|------|------|--------|
| 1 | Install MozBar Chrome extension | 5 min | 07 |
| 2 | Run Moz True Competitor on medicareyourself.com, update competitor list | 10 min | 07 |
| 3 | "Overlooked details" brainstorm — list services in client language, add as seed topics | 30 min | 07 |
| 4 | Set up `articles@medicareyourself.com` email for Write for Us | 5 min | 07 |
| 5 | Create social media profiles: Facebook, LinkedIn, YouTube (minimum) | 30 min | 06 |
| 6 | Add social profile links to Footer.tsx | 5 min | 06 |
| 7 | Fully fill out Google Business Profile (photos, media, reviews, NAP) | 20 min | 12 |

---

### WEEKLY (Every Monday, ~1 hour)

| # | Task | Time | Module |
|---|------|------|--------|
| 1 | Review new keywords in Google Sheets — override Claude's relevance scores where needed | 15 min | 07 |
| 2 | SERP-check top 10 keyword candidates using MozBar (DA, page scores, keyword in titles/URLs, content type) | 30 min | 07 |
| 3 | Check SERP overlap for similar keywords (1 page vs separate) | 5 min | 07 |
| 4 | Apply deprioritization rules, approve/reject keywords | 5 min | 07 |
| 5 | Review any newly built pages — read them, check AI detection flag, replace placeholder images | 10 min | 08 |

---

### AFTER EACH PAGE DEPLOYS (~10 min per page)

| # | Task | Time | Module |
|---|------|------|--------|
| 1 | Read the page yourself — does it satisfy search intent? | 2 min | 08 |
| 2 | Replace SVG placeholder with real branded WebP image (compress with TinyPNG) | 3 min | 05/06 |
| 3 | Submit URL to Google Search Console (Request Indexing) | 1 min | 08 |
| 4 | Add keyword + variations to Moz tracking with hub page label | 2 min | 08 |
| 5 | Check Moz On-Page Grader on live page (target 96-98) | 2 min | 08 |

---

### MONTHLY (1st of each month, ~30 min)

| # | Task | Time | Module |
|---|------|------|--------|
| 1 | GSC "Wait and See" review — check positions 6-25 for optimize/new page opportunities | 15 min | 07 |
| 2 | Client language mining — add phrases from phone calls as seed topics | 10 min | 07 |
| 3 | Review `gsc-keyword-opportunities.tsv` — decide OPTIMIZE_EXISTING vs NEW_PAGE for each | 5 min | 07 |

---

### QUARTERLY (every 3 months, ~1 hour)

| # | Task | Time | Module |
|---|------|------|--------|
| 1 | Run Moz True Competitor — update competitor list | 10 min | 07 |
| 2 | Audit seed topics — remove irrelevant, add new from GSC + client calls | 10 min | 07 |
| 3 | "Overlooked details" refresh — new services/language to target | 15 min | 07 |
| 4 | Review Module 09 troubleshooting for pages stuck at position 6+ | 15 min | 09 |
| 5 | Check Screaming Frog crawl results (or manual GUI crawl) for new technical issues | 10 min | 04 |

---

### WHEN READY / AS BUDGET ALLOWS

| # | Task | Module | Priority | Cost |
|---|------|--------|----------|------|
| 1 | Sign up for Source of Sources (free) — respond to 1-2 journalist queries/day | 12 | High | Free |
| 2 | Sign up for Featured.com — respond to 1-2 queries/day | 12 | High | $40/month |
| 3 | Record first YouTube Short (use script from `video-scripts/`) | 11 | High | Free |
| 4 | Build a `/press` page with brand logos, headshot, media kit | 12 | Medium | Free |
| 5 | Create a "Medicare Statistics 2026" linkable asset page | 12 | Medium | Free |
| 6 | Sign up for PodMatch ($29/month) and pitch to Medicare/retirement podcasts | 12 | Medium | $29/month |
| 7 | Make QuoteWidget embeddable (generates backlinks when other sites embed it) | 12 | Medium | Free |
| 8 | Start a newsletter with landing page on domain | 12 | Low | Free |
| 9 | Explore Meetup group takeover in NJ/NYC Medicare/retirement niche | 12 | Low | $174/year |
| 10 | Use boostbenchmark.com curated directory list | 12 | Low | $67 one-time |

---

# WHAT'S AUTOMATED vs WHAT'S MANUAL

| Automated (scripts handle it) | Manual (you do it) |
|---|---|
| Competitor keyword discovery | SERP-check keywords with MozBar |
| Relevance scoring (Claude 1-10) | Override relevance with your judgment |
| Page element generation (title/H1/H2/meta) | Approve/reject in Sheets |
| Page building from approved blueprints | Read + review built pages |
| Grammar/spelling check | Fix flagged issues |
| AI detection scoring | Edit if flagged as AI-sounding |
| On-page SEO score (13 factors) | Check Moz On-Page Grader on live page |
| OG tag validation | Optional visual check via Meta Debugger |
| GSC opportunity detection (positions 6-25) | Decide: optimize existing or new page |
| SERP tracking (10 keywords weekly) | Add new keywords to Moz with labels |
| Site audit (weekly source-level) | Screaming Frog GUI crawl (quarterly) |
| Change log tracking | Review changes if page isn't ranking |
| Video SEO scripts/titles/descriptions | Record and publish the actual videos |
| Press release drafts | Submit to PRLog ($615/release) |
| Social media post drafts | Post to your accounts |
| Expert quote drafts | Submit on Featured.com / Source of Sources |
| Directory submission tracking | Ensure directory links point to hub page |

---

# GAPS THAT COULD BE CLOSED WITH CODE (Future)

| Gap | What it would take | Priority |
|-----|-------------------|----------|
| Algoroo.com SERP volatility monitoring | Scrape or API if available | Low |
| Neutral tone validation (no superlatives) | Add to Claude prompt + validation regex | Medium |
| Content position validation (80% unique content above fold) | Parse generated page, check keyword density in first vs second half | Low |
| Press kit page (`/press`) | Write the page | Medium |
| Medicare Statistics linkable asset page | Write the page | Medium |
| Newsletter signup page | Write the page + set up email service | Low |
| Embeddable QuoteWidget for backlinks | Add embed code output + tracking | Medium |
| Module 11 transcription (Whisper) | Run Whisper on 2 video files | Low |
| Social profile creation | Can't automate — you create accounts | High (manual) |

---

# SUMMARY

**What's working (87% of the course):**
Your automation covers the full keyword research → page building → deployment pipeline. Technical SEO is solid. On-page optimization follows Edward's exact formulas. Weekly cron handles ongoing research and monitoring.

**What needs your hands (the remaining 13%):**
1. SERP judgment calls (weekly MozBar checks)
2. Content quality (reading pages, replacing images)
3. Link building outreach (expert quotes, directories, podcasts)
4. Video recording
5. Social media profiles
6. GSC strategic decisions (optimize vs new page)

**The honest truth about reaching 100%:**
You can reach ~95% with code + weekly HITL. The last 5% requires sustained link building effort (expert quotes, podcasts, events) and content creation (videos, images) that cannot be automated.
