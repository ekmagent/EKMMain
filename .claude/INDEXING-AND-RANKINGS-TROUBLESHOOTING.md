# Indexing & Rankings Troubleshooting
**For when the user says "pages not ranking" or "indexing is slow"**

---

## QUICK DIAGNOSIS FLOWCHART

```
User says: "Pages not ranking"
    │
    └─→ Is it been 2-3 months since publish?
        │
        ├─ NO (less than 2 months)
        │  └─→ RELAX. Edward says: expect 3-4 months. This is normal.
        │      • Check page is in Google Search Console (indexed)
        │      • Check on-page score (target 96-98, not 100)
        │      • Page will start ranking soon. Be patient.
        │
        └─ YES (2+ months old)
           └─→ TROUBLESHOOT:
               1. Check Google Search Console
               2. Run technical audit
               3. Check on-page score
               4. Review Module 09 troubleshooting
```

---

## DIAGNOSIS TREE (In Order of Likelihood)

### 1. IS THE PAGE EVEN INDEXED?

**Check:** Google Search Console > URL Inspection

**Copy the page URL.** Go to GSC. Paste URL. Click "Inspect."

| Result | Status | Next Action |
|--------|--------|-------------|
| "URL is on Google" | ✅ Indexed | Go to step 2 |
| "URL not on Google" | ❌ Not indexed | Scroll to "Request Indexing" button. Click. Wait 2-7 days. |
| "Page is indexed but not in Search Console" | ✅ Indexed | Go to step 2 |

**Quick fix if not indexed:** Make sure page was submitted to GSC right after deploy. Check your GSC submissions log (GSC > Settings > Crawl > Request indexing history).

---

### 2. DOES THE PAGE HAVE ANY CRAWLABILITY ISSUES?

**Check:** Google Search Console > URL Inspection > "Coverage" section

| Issue | Meaning | Action |
|-------|---------|--------|
| "Excluded - noindex" | Page has `<meta name="robots" content="noindex">` | Find page file (`.tsx`). Remove noindex tag. Rebuild. |
| "Excluded - robots.txt" | `robots.txt` is blocking this path | Check `robots.ts`. Should not block `/services/*` or `/learn/*`. Fix. |
| "Crawled but not indexed" | Google crawled it, didn't like it | See step 3 (on-page issues) or step 4 (content issues) |
| "Crawl anomaly" | Google had trouble crawling | Run `site-audit.js`. Check for broken internal links, redirect loops, missing resources. |
| No issues shown | ✅ Clean | Go to step 3 |

---

### 3. IS THE ON-PAGE SEO SCORE OFF?

**Check:** `app/services/[slug].tsx` or your page file. Look at build script output.

**Also check:** Moz On-Page Grader on the live page (open the page in browser, click Moz menu if installed)

| Score | Problem | Action |
|-------|---------|--------|
| 100 | OVER-OPTIMIZED | This kills rankings. De-optimize: remove some keyword mentions, vary placement, add related terms. Target 96-98. |
| 90-95 | Slightly low | Check: Is keyword in title (start)? H1 (start)? First sentence? Meta description? First image alt? Add if missing. |
| < 85 | Major issues | Check script output for specific issues (title too short? H1 missing? Image alt missing?). Fix. Rebuild. |

**Fix:** Edit the `.tsx` file. Rebuild with `node scripts/build-compact-pages.js [slug]`. Re-test.

---

### 4. IS THE CONTENT SATISFYING SEARCH INTENT?

**Check:** Actually read the page yourself.

| Question | Yes = Good | No = Problem |
|----------|-----------|-------------|
| Does it answer the search query in the first 100 words? | ✅ | ❌ Rewrite intro. Make it punchier. |
| Would a reader know what to do next (call, get quote)? | ✅ | ❌ Add stronger CTA. |
| Is the page 400-500 words? | ✅ | ❌ Too short = thin content. Add FAQ section. |
| Does it sound natural (not AI-ish)? | ✅ | ❌ AI detection flagged it. Edit for natural phrasing. |
| Are sentences 1-3 per paragraph? | ✅ | ❌ Edit. Break up long paragraphs. |
| Is there a real image (not SVG placeholder)? | ✅ | ❌ Replace placeholder. This matters for CTR. |

**If content is weak:** Edit the `.tsx` file. Rewrite intro, strengthen CTA, replace image. Rebuild.

---

### 5. IS THE INTERNAL LINKING WEAK?

**Check:** Is the page linked from hub page? Are other relevant pages linked TO this page?

| Link | Expected | Check |
|------|----------|-------|
| **Hub page link** | Every service page should be linked from `/hub` | Go to `/hub`. Search for your keyword. Is there a link? If not: add to hub page. |
| **Cross-links** | Related pages should link to each other | Open page. Scroll to footer. Are there links to related pages? If not: add manually. |
| **Breadcrumb** | Optional but helpful | Check page has breadcrumb navigation (Home > Services > This Page). |

**If links missing:** Edit hub page or service page `.tsx`. Add links manually. Rebuild.

---

### 6. HOW LONG HAS THE PAGE BEEN INDEXED?

**Check:** `serp-log.tsv` or Google Search Console Performance report

| Timeline | Status | Expectation |
|----------|--------|-------------|
| 0-2 weeks | Just published | Not in SERP yet. Normal. |
| 2-4 weeks | Indexed, not ranking | Being evaluated. Should start appearing in positions 30-50. |
| 1 month | Positions 30-50 | Good progress. Next: improve with link building or GSC optimization. |
| 2-3 months | Positions 10-30 | On track. Can optimize with Module 09 techniques. |
| 3+ months | Below 20 | Edward's rule: "If stuck at position 6+, review above-the-fold hooks and internal linking." |

**Edward's reality:** 3-4 months is normal. Don't expect top 3 in month 1.

---

## STEP-BY-STEP TROUBLESHOOTING FOR "PAGES NOT RANKING" (2+ Months Old)

### Step 1: Verify Indexing

```bash
# Manually check in Google Search Console
1. GSC > URL Inspection
2. Paste page URL
3. Check "URL on Google" status
4. If not indexed: Click "Request Indexing"
```

**If indexed, continue to Step 2. If not indexed, wait 2-7 days after requesting.**

---

### Step 2: Run Technical Audit

```bash
# Check for crawlability issues
node scripts/site-audit.js
# Review output for your page URL
# Look for: 404s, noindex, robots.txt blocks, crawl anomalies
```

**If issues found:** Fix in code. Run `npm run build`. Test again.

**No issues:** Continue to Step 3.

---

### Step 3: Check On-Page SEO Score

1. Open page in browser
2. Install MozBar (if not already)
3. Click MozBar > On-Page Grader
4. Read the score (target 96-98)

| If Score | Action |
|----------|--------|
| 100 | De-optimize. Remove keyword mentions. Target 96-98. |
| 90-95 | Add missing keyword placements (title, H1, first sentence, meta, image alt). |
| < 85 | Major issue. Check what's missing (title, meta, H1, etc.). Fix. |

**Fix:** Edit `.tsx` file. Rebuild.

---

### Step 4: Review Content Quality

Read the page as if you're the searcher.

1. **First 100 words:** Does it answer the question?
   - YES → Good
   - NO → Rewrite intro to be punchier and more direct

2. **Does it have a clear CTA?**
   - YES → Good
   - NO → Add "Call 855-559-1700" or "Get Quote" button

3. **Page length:**
   - 400-500 words → Good
   - < 300 words → Thin. Add FAQ section.

4. **Tone:**
   - Natural, conversational → Good
   - Sounds AI-ish, floury, full of buzzwords → Edit. Make shorter, punchier.

5. **Image quality:**
   - Real branded image (WebP) → Good
   - SVG placeholder → Replace with real image. Compress with TinyPNG.

**If content is weak:** Edit `.tsx`. Rebuild.

---

### Step 5: Check Internal Linking

**Hub page link:**
1. Go to `/hub`
2. Search for your keyword on the page
3. Is there a link to your page?
   - YES → Good
   - NO → Add link to hub page. Rebuild.

**Cross-links (optional):**
- Are related pages linking to this one?
- Does this page link to related pages?
- If sparse: add 2-3 relevant internal links

---

### Step 6: Check for Keyword Overlap

**Is your keyword cannibalizing another page?**

1. Go to Google
2. Search your target keyword
3. Look at the results — do you have OTHER pages ranking for this keyword?
   - YES → Only one page should target one keyword. Consolidate or de-optimize one.
   - NO → Good, no cannibalization.

---

### Step 7: Module 09 Troubleshooting (If Still Stuck at Position 6+)

**Only do this after 2-3 months of ranking data.**

Key questions from Module 09:
- **Above-the-fold hook:** Does the page have a compelling opening 100 words that makes reader want to scroll? (Common issue: generic, boring intro)
- **Brevity:** Is page 400-500 words? Add 200 more detailed words if it feels thin.
- **Unique angle:** Does this page have something competitors don't? (Example: "We compare 20+ carriers" when others don't mention this)
- **Images:** Are images real branded images or stock/generic? Real images = higher CTR.
- **Link juice:** Is page linked from hub + other relevant pages? Internal linking matters.
- **Fresh angle:** Can you add a unique section (e.g., "For Medicare in 2026" when competitors target generic "Plan G rates")?

**Action:** Rewrite intro, add unique detail, replace image, strengthen internal links. Rebuild.

---

## COMMON ISSUES & FIXES

### Issue: "Pages indexed but not ranking (position 100+)"

**Causes (in order of likelihood):**
1. On-page SEO score is 100 (over-optimized) → De-optimize to 96-98
2. Page is too thin (< 300 words) → Add more content (FAQ section, more H2 sections)
3. Page doesn't have internal links from hub → Add hub page link
4. Page intro is generic/boring → Rewrite first 100 words to be punchier
5. Page has SVG placeholder image → Replace with real image
6. Keyword too competitive (all results DA 50+) → Wait for higher DA, or target with YouTube short

**Quick fix:** Replace image, add internal link from hub, rewrite intro. Rebuild. Wait 1-2 weeks.

---

### Issue: "Page in GSC but can't find it in Google search results"

**Causes:**
1. Recently indexed (< 2 weeks) → Normal. Wait.
2. Page title/meta description are generic → Rewrite to match search intent better. Rebuild.
3. Page is indexed but not ranking because on-page SEO is weak → Check on-page score (step 3).

**Quick fix:** Rewrite title and meta description to better match the keyword. Rebuild. Wait 1 week.

---

### Issue: "Google says 'Crawled but not indexed'"

**Meaning:** Google saw the page, evaluated it, but decided not to index it (usually means content is too thin or duplicate).

**Causes:**
1. Page is too short (< 300 words) → Add more content
2. Page is duplicate of another page → Merge content
3. Page is not useful (spam-like, keyword-stuffed) → Rewrite naturally

**Quick fix:** Add more content (FAQ section, more H2 sections). Rewrite in natural tone (de-keyword-stuff). Rebuild.

---

### Issue: "URL inspection shows 'Excluded - noindex'"

**Meaning:** Page has a noindex meta tag. Google is told not to index it.

**Causes:**
1. Page file (`.tsx`) has `<meta name="robots" content="noindex">`
2. Or page has `noindex` in a meta tag somewhere

**Quick fix:** Find page file. Remove noindex tag. Rebuild.

---

### Issue: "Page score is 100 (over-optimized)"

**Problem:** Google doesn't like pages optimized to perfection. Feels unnatural.

**Fix:**
1. Open page in browser
2. Count keyword mentions. If > 5-7, remove some.
3. Vary keyword placement. Don't put it in every H2.
4. Add related terms (synonyms) to break up exact-match pattern
5. Rewrite to feel more natural
6. Target 96-98 on re-test

**Example:**
- **Before (100):** "Plan G" in title, H1, H2, first sentence, last sentence, image alt = 6x = over-optimized
- **After (97):** "Plan G" in title, H1, first sentence, image alt = 4x. H2 uses "Medicare Supplement Plan G". Last section uses "Plan G rates". = natural, not stuffed

---

## WHAT TO CHECK IF ALL PAGES NOT RANKING

**Rare, but if you're seeing NO pages rank after 3+ months:**

1. **Site-level issue?**
   - Run `site-audit.js`
   - Check for widespread 404s, noindex, crawl errors
   - Check robots.txt (should not block your main paths)

2. **Google Search Console errors?**
   - Check Coverage report
   - Are most pages "Excluded"?
   - If yes: check for noindex meta tags, robots.txt blocks, duplicate content

3. **Site speed?**
   - Next.js + Vercel = fast by default
   - But check: are images unoptimized (huge file sizes)?
   - Google PageSpeed Insights: https://pagespeed.web.dev

4. **Domain authority too new?**
   - If site is < 3 months old, Google may be cautious
   - Submit to GSC + Bing. Be patient. This is normal.

---

## WHAT NOT TO DO

❌ **Don't:** Immediately rebuild/redeploy the same page 10 times hoping to trigger a re-crawl. Google doesn't like spam.

❌ **Don't:** Over-optimize to page score 100. De-optimize to 96-98.

❌ **Don't:** Target the exact same keyword with 3 different pages. One page per keyword.

❌ **Don't:** Add tons of keywords to the first sentence. Keep it natural: 1 mention, naturally phrased.

❌ **Don't:** Panic in month 1-2. Edward says expect 3-4 months. Be patient.

❌ **Don't:** Ignore internal linking. Hub page link is critical.

✅ **Do:** Replace placeholder images with real images. This helps CTR and user experience.

✅ **Do:** Read your pages. Does the first sentence answer the question?

✅ **Do:** Check MozBar. Is the page score 96-98?

✅ **Do:** Wait 2-3 months before calling a page a failure.

---

## CHECKLIST: IS THIS PAGE READY TO RANK?

Before deciding "this page isn't ranking, something's broken," check this:

- [ ] Page is indexed in Google Search Console (URL Inspection shows "URL is on Google")
- [ ] Page has no technical issues (no noindex, no robots.txt block, no crawl errors)
- [ ] On-page SEO score is 96-98 (not 100, not 85)
- [ ] Page title starts with keyword
- [ ] H1 starts with keyword
- [ ] Keyword in first sentence of body
- [ ] Keyword in meta description
- [ ] First image has keyword in alt text
- [ ] Page is 400-500 words (not < 300)
- [ ] Page is linked from hub page
- [ ] Page has a clear CTA (call, quote, etc.)
- [ ] Image is real (not SVG placeholder)
- [ ] Content is natural (not keyword-stuffed, not AI-sounding)
- [ ] It's been 2-3+ months since publish

**If ALL checked:** Page should rank within 3-4 months. Be patient.

**If ANY unchecked:** Fix that issue. Rebuild. Re-test in 1-2 weeks.

---

## WHEN TO ESCALATE TO MODULE 09

Only after:
- ✅ Page has been published 2-3+ months
- ✅ Page is indexed in GSC
- ✅ Page has no technical issues
- ✅ On-page score is 96-98
- ✅ Page is linked from hub
- ✅ Content is solid (not thin, natural tone)

**And it's still at position 6+:**

Then review Module 09 (After Publishing a Page) for advanced troubleshooting:
- Above-the-fold bounce rate issues
- Re-optimization strategies
- Link building to push from page 2 to page 1
- Unique angle discovery

Module 09 transcript location: `/Users/anthonyorner/Claude Code/Karpathy AutoResearch/Compact Keywords Course/09 - After Publishing a Page/`

---

**Remember: Edward says 3-4 months is normal. Don't panic in month 1-2.**