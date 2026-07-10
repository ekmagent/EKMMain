# Entity Anchors — NAP Consistency & Citation Setup

**Goal:** identical business facts everywhere Google, Bing, Apple, and AI models look.
One character of drift ("Rt 70" vs "Route 70") fragments the entity. Copy-paste only —
never retype.

---

## The Canonical NAP Block (copy-paste, never retype)

```
EasyKind Medicare
1309 Route 70 West, Cherry Hill, NJ 08002
855-559-1700
anthony@easykindmedicare.com
https://medicareyourself.com
```

**Supporting facts (use verbatim when a field asks):**

| Field | Value |
|---|---|
| Legal entity | EasyKind Health LLC (d/b/a EasyKind Medicare) |
| Site brand | MedicareYourself (medicareyourself.com) |
| Owner/agent | Anthony Orner, Licensed Insurance Broker |
| NPN | 20586791 |
| NPI | 1902584006 |
| Enrollment site | https://healthplans.now (secondary link only — primary website field is always medicareyourself.com) |
| Category | Insurance Agency / Insurance Broker |
| Founded | *(fill in actual year — must match everywhere once chosen)* |

**Standard short description (reuse on every directory):**

```
EasyKind Medicare is an independent Medicare insurance brokerage in Cherry Hill, NJ, led by licensed broker Anthony Orner (NPN 20586791). We compare Medicare Supplement (Medigap) and Medicare Advantage plans using filed-rate data and carrier rate-increase history, published openly at medicareyourself.com. Licensed in New Jersey and 34 other states, strongest in NJ, PA, OH, and TX. Comparisons are free. Licensed insurance broker, not affiliated with or endorsed by Medicare or any government agency.
```

---

## Setup Checklist — Ordered by Impact

### 1. Bing Places + Bing Webmaster Tools — HIGHEST PRIORITY (~45 min total)

**Why first:** ChatGPT and Copilot answer from Bing's index. Bing Webmaster Tools now has an
**AI Performance report** that shows when ChatGPT/Copilot actually cite medicareyourself.com —
this is the only free window into AI-citation traffic, which is exactly the "honest data"
strategy's payoff. Bing Places is also thin competition: most Medicare agents skip it.

**A. Bing Places (~20 min)**
1. Start at: https://www.bingplaces.com
2. Sign in with a Microsoft account tied to anthony@easykindmedicare.com.
3. Easiest path: choose **"Import from Google Business Profile"** — it syncs the GBP listing
   (do GBP first). Otherwise create manually:
   - Business name: `EasyKind Medicare`
   - Address: `1309 Route 70 West, Cherry Hill, NJ 08002`
   - Phone: `855-559-1700`
   - Website: `https://medicareyourself.com`
   - Category: Insurance Agency
   - Description: paste the standard short description above.
4. Verify by phone or postcard.

**B. Bing Webmaster Tools site verification (~15 min)**
1. Start at: https://www.bing.com/webmasters
2. Sign in with the same Microsoft account → **Add a site** → `https://medicareyourself.com`
3. Fastest verification: **"Import from Google Search Console"** — one OAuth click, since GSC
   is already verified for this site. No DNS work needed.
   - Fallback options: add the `<meta name="msvalidate.01" ...>` tag to the site layout, or a
     CNAME/XML-file method. Use the GSC import — it also pulls sitemaps.
4. Confirm the sitemap appears (medicareyourself.com/sitemap.xml); submit it if not.
5. Open **Reports → AI Performance** (rolling out through 2026): note the baseline of
   ChatGPT/Copilot citations, then check monthly. This is the scoreboard for the
   honest-data/GEO content strategy.

**Expected time: 45 min. Impact: high (AI citations + uncontested local listing).**

---

### 2. LinkedIn — Company Page + Personal Profile (~60 min)

**Why #2:** LinkedIn pages are heavily crawled, rank for "[name] medicare broker" searches,
and are one of the strongest entity-confirmation signals AI models use for a person.

**A. Company page (~25 min)**
1. Start at: https://www.linkedin.com/company/setup/new/
2. Fields:
   - Name: `EasyKind Medicare`
   - Public URL: `linkedin.com/company/easykind-medicare`
   - Website: `https://medicareyourself.com`
   - Industry: Insurance
   - Company size: 1–10 employees
   - Type: Privately held
   - Location: `1309 Route 70 West, Cherry Hill, NJ 08002`
   - Tagline (verbatim): `Independent Medicare brokerage — Medigap and Medicare Advantage comparisons built on filed-rate data. NJ, PA, OH, TX + 31 more states.`
   - About (verbatim): paste the standard short description from the NAP block section.
3. Upload logo + a banner (reuse site brand colors: teal #2D6E5F, orange #E8842A).

**B. Personal profile rewrite (~35 min)**

Headline (verbatim, 210-char safe):
```
Independent Medicare Broker | Medigap & Medicare Advantage | Licensed in NJ, PA, OH, TX + 31 more states | I publish the filed-rate data carriers don't show you — medicareyourself.com
```

About section (verbatim):
```
Most people choosing a Medicare plan are comparing marketing brochures. I compare regulator filings.

I'm Anthony Orner, an independent Medicare insurance broker (NPN 20586791) based in Cherry Hill, NJ, licensed in 35 states — deepest in New Jersey, Pennsylvania, Ohio, and Texas. My brokerage, EasyKind Medicare, publishes the numbers that actually predict what a Medigap policy will cost you over time: filed rates, carrier rate-increase histories, and financial strength ratings, at medicareyourself.com — even when the data is unflattering to a carrier I represent.

What I help with:
• Medicare Supplement (Medigap) comparisons — Plan G, Plan N, and when each wins
• Medicare Advantage plan reviews — networks, formularies, and real out-of-pocket exposure
• Part D drug plan analysis against your exact prescription list
• Turning-65 enrollment timing, including the 6-month Medigap Open Enrollment window
• Switching Medigap carriers, with a straight explanation of medical underwriting first

My comparisons are free — carriers pay brokers at essentially the same rate regardless of which plan you pick, so I have no reason to steer you.

Licensed insurance broker. Not affiliated with or endorsed by Medicare or any government agency. We do not offer every plan available in your area.

855-559-1700 | anthony@easykindmedicare.com
```

3. Set current position: `Independent Medicare Broker — EasyKind Medicare` linked to the new
   company page. Add the license states to the Licenses & Certifications section
   (issuer: state Departments of Insurance; credential ID: NPN 20586791).
4. Contact info: website `medicareyourself.com`, email, phone.

**Expected time: 60 min. Impact: high (entity + person authority).**

---

### 3. Apple Business Connect (~30 min + verification wait)

**Why #3:** feeds Apple Maps, Siri, and Spotlight — the default on every iPhone your
60-something clients carry. Also an entity signal Apple's and others' models ingest.

1. Start at: https://businessconnect.apple.com
2. Sign in with an Apple ID (create one on anthony@easykindmedicare.com if needed).
3. **Add business:**
   - Name: `EasyKind Medicare`
   - Category: Insurance Agency
   - Address: `1309 Route 70 West, Cherry Hill, NJ 08002`
   - Phone: `855-559-1700`
   - Website: `https://medicareyourself.com`
   - "About" (verbatim): paste the standard short description.
4. Verification: usually a phone call to the listed number or document upload
   (an EasyKind Health LLC document with the address works). Can take a few days.
5. Once live, add the logo, cover photo, and set **Showcase** to the current seasonal
   message (reuse the monthly Google Post from gbp-kit.md).

**Expected time: 30 min active. Impact: medium-high.**

---

### 4. NABIP Find-an-Agent Directory (~30 min; requires membership)

**Why #4:** industry-authoritative directory (National Association of Benefits and
Insurance Professionals) — a trusted-source citation for both Google and AI models, and a
credibility badge consumers recognize. Requires paid NABIP membership; if not yet a member,
weigh dues (roughly $400–500/yr with state/local chapter) against the credibility value.

1. Start at: https://nabip.org → **Membership → Join** (join national + NJ chapter, e.g.
   NABIP New Jersey), then log in to the member portal.
2. Complete the member profile that powers the **Find an Agent** consumer directory
   (https://nabip.org/find-an-agent or the member-profile equivalent):
   - Name: `Anthony Orner`
   - Agency: `EasyKind Medicare`
   - Address / Phone / Email / Website: paste the canonical NAP block exactly.
   - Specialty checkboxes: Medicare / Medicare Supplement / Senior products.
   - Bio: paste the standard short description.
3. Add the NABIP member logo to the medicareyourself.com about page once membership is
   active (reciprocal entity link).

**Expected time: 30 min once membership is processed. Impact: medium (high trust, lower volume).**

---

### 5. BBB — Better Business Bureau (~45 min; accreditation optional/paid)

**Why #5:** BBB business profiles are free, rank well for "[business name] reviews," and are
a source AI models quote for legitimacy. Accreditation (paid, ~$500+/yr) is optional; the
free profile still anchors NAP.

1. Start at: https://www.bbb.org/get-listed (serving BBB is **BBB Serving New Jersey**).
2. Search first — a stub profile may already exist; if so, **claim** it instead of creating.
3. Fields:
   - Business name: `EasyKind Medicare` (legal name field: `EasyKind Health LLC`)
   - Address / Phone / Website / Email: paste the canonical NAP block exactly.
   - Category: Medicare Insurance / Insurance Agency
   - Description: paste the standard short description.
   - License info: NPN 20586791, NJ Department of Banking & Insurance.
4. Verification is typically by phone/email to the business.
5. Decide on accreditation later — it's a sales call they'll make; the free listing is the
   SEO/entity value.

**Expected time: 45 min. Impact: medium.**

---

### 6. Yelp (~25 min)

**Why last:** low senior usage for insurance and aggressive review filtering, but Yelp data
syndicates into Apple Maps and several AI training/citation pipelines, so the NAP anchor is
still worth 25 minutes. **Never solicit Yelp reviews — Yelp penalizes asked-for reviews.**

1. Start at: https://biz.yelp.com → "Manage my free listing."
2. Search for the business first; claim if it exists, otherwise add:
   - Name: `EasyKind Medicare`
   - Address / Phone / Website: paste the canonical NAP block exactly.
   - Category: Insurance
   - From the business / specialty text: paste the standard short description.
3. Verify by phone or email.
4. Decline all Yelp Ads upsells (they will call — repeatedly).

**Expected time: 25 min. Impact: low-medium (syndication value).**

---

## Maintenance Rules

1. **Any NAP change updates all six + GBP within one week.** Keep this file as the master.
2. Quarterly: search `"EasyKind Medicare" Cherry Hill` on Google and Bing; fix any
   directory that shows drifted data (old phone formats, "Rte 70," etc.).
3. Monthly: check Bing Webmaster Tools → AI Performance for ChatGPT/Copilot citation trends.
4. Never let a directory upsell change the business name field ("EasyKind Medicare —
   Medicare Plans" = entity drift + suspension risk on Google).
