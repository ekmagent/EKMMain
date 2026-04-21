# Compact Keywords Cheatsheet
**One-page reference for the most common questions**

---

## THE CORE IDEA IN 3 SENTENCES

Target **low-volume, low-competition, high-intent keywords** where competitors have DA under 30 and aren't optimized yet. Write **400-500 word pages** with keyword in URL, title, H1, first sentence, meta, and first image alt. **Expect 3-4 months** before pages rank. Be patient and defend your house first (technical SEO, on-page, internal linking).

---

## YOUR WEEKLY RHYTHM (Every Monday, ~1 hour)

1. **Review keywords** (15 min) — Google Sheets > Keywords tab. "Would someone searching this pick up the phone?"
2. **SERP-check top 10** (30-45 min) — Use MozBar. Check DA, page scores, keyword placement, content type.
3. **Apply skip rules** (5 min) — DA 50+ everywhere? All "Best of" lists? Skip.
4. **Approve keywords** (5 min) — Sheets > Page Blueprints > Status = "approved"

**That's it.** Build script handles the rest.

---

## PAGE TEMPLATE (One Page, One Keyword, 400-500 Words)

```
Title: Keyword | Benefit | Brand
Meta: Include keyword naturally
H1: Keyword | Benefit

Hero Image (WebP, compressed, keyword in alt)

Intro (1-2 sentences, keyword in first sentence)
CTA Button ("Get Quote", "Call Now")

--- Body (3-4 short sections) ---
H2: Section title
2-3 short paragraphs (1-3 sentences each)
Bullet points (features, use cases)

--- FAQ (5-7 pairs) ---
Q: Keyword variant
A: 2-3 sentences

--- Footer ---
Phone CTA
Hub page link
```

**Score target: 96-98 (not 100)**

---

## WHEN YOU SEE [THIS], DO [THAT]

| Situation | Action |
|-----------|--------|
| Pages not ranking (position 15+) | Is it been 2-3 months? Yes = wait. No = check on-page score (over-optimized?). Check GSC (indexed?). |
| Indexing is slow | Submit to GSC > URL Inspection > Request Indexing immediately after deploy. |
| Keyword research is stuck | Do the "Overlooked Details" brainstorm (30 min). Mine client language from phone calls. Check GSC positions 13-25. |
| Should we target this keyword? | SERP-check with MozBar first. Apply 7 skip rules. If borderline: make YouTube Short instead. |
| Page has grammar issues | Script output is readable. Edit in `.tsx` file, rebuild. |
| Page sounds too AI-ish | AI detection score > 4. Edit for natural phrasing, shorter sentences, more direct. |
| Page score is 100 (over-optimized) | De-optimize. Remove some keyword mentions. Target 96-98. |
| Image is still an SVG placeholder | Replace with real WebP image. Compress with TinyPNG. Add keyword to filename. |

---

## EDWARD'S RULES (The Non-Negotiables)

- **Title Format:** `Keyword | Benefit | Brand` (e.g., "Plan G Rates NJ | Compare Free | MedicareYourself")
- **Keyword placement:** URL slug, title (start), H1 (start), first sentence, meta description, first image alt
- **On-page score:** 96-98 out of 100. NOT 100. Google penalizes over-optimization.
- **Page length:** 400-500 words. Thin, focused, answerable.
- **Tone:** Neutral. No "best", "greatest", no superlatives. No AI-sounding fluff.
- **Sentences:** 1-3 per paragraph max. Punchy.
- **Images:** Real branded images, not generic stock. WebP format, compressed. Keyword in filename and first alt text.
- **Hub page:** Link from hub page (tier-1 internal linking). Click depth ≤ 2 from homepage.
- **Schema markup:** Every page must have JSON-LD structured data.
- **No top-of-funnel:** "What is Medigap?" pages go on blog/resource. Service pages target bottom-of-funnel only ("Plan G rates in NJ").

---

## SKIP THIS KEYWORD IF...

- DA 50+ everywhere AND keyword in every title/URL
- All results are "5 Best..." or "Top 10..." lists
- How-to article #1, product #2 (mixed intent)
- Results about a different industry/product
- High volume but random unrelated results
- Nobody targets it BUT all results DA 70+ (Google wants authority)
- You're already targeting a keyword with overlapping SERP

---

## KEY FILES YOU TOUCH

| File | You Touch It | When |
|------|--------------|------|
| Google Sheets (Internal SEO Sheet) | Yes | Weekly (Keywords tab), Monthly (GSC decisions) |
| `scripts/find-compact-keywords.js` | Yes | Add seed topics (weekly), quarterly refresh |
| `scripts/competitor-keyword-analysis.js` | Yes | Update competitors quarterly (Moz True Competitor) |
| `KEYWORD-CHECKLIST.md` | Yes | Reference every Monday |
| `public/images/` | Yes | Replace SVG placeholders with real WebP |
| Everything else | Rarely | Scripts handle it |

---

## YOUR MONTHLY & QUARTERLY TASKS

**MONTHLY (1st of month, ~20 min):**
- GSC opportunity review: positions 6-25 = optimize existing or new page?
- Client language mining: add phrases from calls as seed topics

**QUARTERLY (~30 min):**
- Moz True Competitor: any new competitors? Update script.
- Seed topic audit: remove irrelevant, add new discoveries.
- "Overlooked Details" refresh: new services, new client language.

---

## AUTOMATION STATUS

| Task | Automated? | You? |
|------|------------|------|
| Find keywords | 95% | Review + override relevance |
| SERP analysis | Partial (DA + scores) | Make the judgment call with MozBar |
| Build pages | 95% | Approve keyword first |
| Grammar/spelling | Yes | Fix flagged issues |
| AI detection | Yes | Edit if score > 4 |
| On-page score | Yes | Check against Moz live page |
| GSC tracking | Yes | Decide: optimize vs. new page |
| SERP tracking | Yes | Add keywords to Moz tracking |
| Technical audit | Yes | Review for blockers |
| Video scripts | Yes | Record + publish |
| Expert quotes | No | Pitch on Featured.com / Source of Sources |
| Link building | No | You drive this |
| Social media | No | You create accounts + post |
| Images | No | Replace placeholders, compress |

---

## THE HONEST TIMELINE

- **Month 1-2:** Build 5-10 pages. Replace images. Submit to GSC. Be patient.
- **Month 3-4:** First pages should start ranking. Check SERP tracker (`serp-log.tsv`).
- **Month 4-6:** Optimize positions 6-25 (Section 2 strategy). Build more pages. Start link building.
- **Month 6+:** If pages still stuck at position 6+, apply Module 09 troubleshooting (above-the-fold hooks, internal linking, fresh content angle).

**Edward's rule: Expect 3-4 months before pages rank. Don't panic at month 2.**

---

## PRIORITY ACTIONS (RIGHT NOW)

1. ✅ **"Overlooked Details" brainstorm** (30 min) — Highest ROI task
2. ✅ **Install MozBar** (5 min) — You'll use it every Monday
3. ✅ **Create social media profiles** (30 min) — Facebook, LinkedIn, YouTube minimum
4. ✅ **Fill out Google Business Profile** (20 min) — NAP consistency
5. ✅ **Start Monday SERP-checking rhythm** (weekly, 45 min) — Most important human step

**After those:** Replace SVG images, start expert quote outreach (Source of Sources is free), consider YouTube Shorts for competitive keywords.

---

## MOST COMMON MISTAKE

**Over-optimizing (page score = 100).** Edward says Google hates this. If your page scores 100:
- Remove some keyword mentions
- Vary keyword placement
- Add related terms that aren't your exact target
- Target 96-98

---

## RESOURCES

- Full reference: `.claude/EDWARD-STURM-COMPACT-KEYWORDS.md` (this repo)
- Weekly checklist: `KEYWORD-CHECKLIST.md` (this repo)
- Module 09 (troubleshooting stuck pages): Course folder
- Moz True Competitor: `moz.com/tools/competitive-research`
- MozBar: `moz.com/products/pro/seo-toolbar`

---

**Print this. Refer to it every Monday before you start your SERP checking.**