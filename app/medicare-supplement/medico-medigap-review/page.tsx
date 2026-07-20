import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { MF } from "@/lib/medicare-figures";
import { SITE_URL } from "@/lib/site";

const PAGE_PATH = "/medicare-supplement/medico-medigap-review";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const APPLY_URL = "https://healthplans.now";
const DATA_AS_OF = "2026-07-15";

export const metadata: Metadata = {
  title: "Medico Medigap Review 2026: Two Companies, One Brand",
  description:
    "Honest data on Medico Medicare Supplement: two A-rated legal entities (Medico Life & Health and Medico Insurance Company), state-by-state rate filings, and loss ratios from CSG Actuarial.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Medico Medigap Review 2026: Two Companies, One Brand",
    description:
      "Honest data on Medico Medicare Supplement: two A-rated legal entities (Medico Life & Health and Medico Insurance Company), state-by-state rate filings, and loss ratios from CSG Actuarial.",
    type: "article",
    url: PAGE_URL,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Medicare Supplement", item: `${SITE_URL}/medicare-supplement` },
    { "@type": "ListItem", position: 3, name: "Medico Medigap Review", item: PAGE_URL },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Medico Medigap Review 2026: Two Companies, One Brand — State-by-State Report",
  description:
    "A data-grounded review of Medico Medicare Supplement policies across the two legal entities (Medico Insurance Company and Medico Life and Health Insurance Company), covering Pennsylvania, New Jersey, Ohio, North Carolina, and Texas — with rate filings and loss-ratio history from CSG Actuarial.",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
  inLanguage: "en-US",
  author: {
    "@type": "Person",
    name: "Anthony Orner",
    url: `${SITE_URL}/about`,
  },
  publisher: {
    "@type": "Organization",
    name: "MedicareYourself",
    url: SITE_URL,
  },
  about: [
    { "@type": "InsuranceAgency", name: "Medico Insurance Company", identifier: "NAIC 31119" },
    { "@type": "InsuranceAgency", name: "Medico Life and Health Insurance Company", identifier: "NAIC 65641" },
  ],
};

const faqs = [
  {
    question: "Are Medico Insurance Company and Medico Life and Health Insurance Company the same?",
    answer:
      "They are two separate legal entities sharing the Medico brand, both currently AM Best A (Stable) rated. Medico Insurance Company (NAIC 31119) was established in 1992 and writes Medigap in over 30 states including New Jersey and North Carolina. Medico Life and Health Insurance Company (NAIC 65641) was established in 2017 and writes in a smaller footprint including Ohio, Pennsylvania, and Texas.",
  },
  {
    question: "Has Medico raised Medicare Supplement rates recently?",
    answer:
      "Yes. In the last 12 months Medico filed Plan G rate increases of +18.59% in Pennsylvania (effective September 2025), +9% in Ohio (February 2026), +4% to +18.59% in North Carolina depending on rating tier (September 2025), +24.28% in Texas (February 2026), and +9% in New Jersey (effective May 2026). Every state in our five-state footprint now has a recent Medico filing on record.",
  },
  {
    question: "Is Medico Medigap competitively priced?",
    answer:
      "It varies by state. In New Jersey Plan G, Medico ranks 8th out of 18 carriers (22.0% above the cheapest) after its May 2026 +9% filing — mid-pack rather than a bargain. Medico uses attained-age pricing in every state we reviewed, meaning your premium rises annually with age in addition to filed rate increases.",
  },
];

const stateData = [
  {
    code: "NJ",
    name: "New Jersey",
    entity: "Medico Insurance Company",
    naic: "31119",
    planG65NonHHD: 180.36,
    marketLow: 147.88,
    marketHigh: 260.98,
    marketMedian: 181.62,
    marketCarriers: 18,
    rank: 8,
    pctVsLow: 22.0,
    recentFilings: [{ date: "2026-05-01", pct: 9 }],
    lossRatioTrend: [
      { year: 2025, lives: 2436, lossRatio: 0.68 },
    ],
    verdict: "Still Medico's best market in our footprint, but the May 2026 +9% filing moved it from bargain to mid-pack: rank 8 of 18 in NJ Plan G at 22% above the cheapest filing. Loss ratio was healthy at 68% in 2025. Compare against the market leaders before choosing.",
    verdictTone: "ok",
    note: "Rates from Medico Insurance Company (older 1992-established legal entity).",
  },
  {
    code: "PA",
    name: "Pennsylvania",
    entity: "Medico Life and Health Insurance Company",
    naic: "65641",
    planG65NonHHD: 176.21,
    marketLow: 137.68,
    marketHigh: 295.51,
    marketMedian: 197.50,
    marketCarriers: 28,
    rank: 7,
    pctVsLow: 28.0,
    recentFilings: [
      { date: "2025-09-01", pct: 18.59 },
    ],
    lossRatioTrend: [
      { year: 2024, lives: 484,  lossRatio: 0.43 },
      { year: 2025, lives: 2403, lossRatio: 0.82 },
    ],
    verdict: "Mid-pack pricing (rank 7 of 28) following an 18.59% rate filing in September 2025. Loss ratio nearly doubled from 43% to 82% in one year as membership grew 5x — the typical adverse-selection trajectory we'd expect to push another rate filing within 12-18 months. Compare carriers before choosing.",
    verdictTone: "caution",
    note: "Rates from Medico Life and Health (newer 2017-established legal entity).",
  },
  {
    code: "OH",
    name: "Ohio",
    entity: "Medico Life and Health Insurance Company",
    naic: "65641",
    planG65NonHHD: 146.89,
    marketLow: 118.17,
    marketHigh: 342.84,
    marketMedian: 179.81,
    marketCarriers: 32,
    rank: 6,
    pctVsLow: 24.3,
    recentFilings: [
      { date: "2026-02-01", pct: 9.00 },
    ],
    lossRatioTrend: [
      { year: 2025, lives: 753, lossRatio: 0.74 },
    ],
    verdict: "Reasonable pricing — rank 6 of 32, 24% above the state's cheapest Plan G. Recent 9% rate filing is the smallest of any Medico state filing in this review. Loss ratio at 74% is healthy. New entrant (only 2025 data) so trend hard to project. Worth a look for OH Medigap shoppers.",
    verdictTone: "ok",
    note: "Rates from Medico Life and Health Insurance Company.",
  },
  {
    code: "NC",
    name: "North Carolina",
    entity: "Medico Insurance Company",
    naic: "31119",
    planG65NonHHD: 128.01,
    marketLow: 101.84,
    marketHigh: 315.20,
    marketMedian: 156.00,
    marketCarriers: 29,
    rank: 5,
    pctVsLow: 25.7,
    recentFilings: [
      { date: "2025-09-01", pct: 4.00 },
      { date: "2025-09-01", pct: 18.59 },
    ],
    lossRatioTrend: [
      { year: 2023, lives: 4231, lossRatio: 0.81 },
      { year: 2024, lives: 5187, lossRatio: 0.87 },
      { year: 2025, lives: 5868, lossRatio: 0.89 },
    ],
    verdict: "Two simultaneous rate filings in September 2025 — +4% on some rating tiers, +18.59% on others — depending on which Medico product line you're on. Loss ratio climbed 81% → 87% → 89% over three years and may push another filing soon. Optional dental rider available in NC, which is unusual for Medigap.",
    verdictTone: "caution",
    note: "Rates from Medico Insurance Company. Optional Dental Rider available.",
  },
  {
    code: "TX",
    name: "Texas",
    entity: "Medico Life and Health Insurance Company",
    naic: "65641",
    planG65NonHHD: 175.22,
    marketLow: 129.92,
    marketHigh: 284.86,
    marketMedian: 194.91,
    marketCarriers: 24,
    rank: 7,
    pctVsLow: 34.9,
    recentFilings: [
      { date: "2025-09-01", pct: 0 },
      { date: "2026-02-01", pct: 24.28 },
    ],
    lossRatioTrend: [
      { year: 2025, lives: 2951, lossRatio: 0.76 },
    ],
    verdict: "Largest rate filing of any Medico state in this review — +24.28% effective February 2026. Rank 7 of 24 but still 34.9% above the cheapest Plan G in TX. New entrant so loss-ratio history is thin, but the size of the recent filing suggests pricing was previously too low for the claims experience. Compare carriers before choosing.",
    verdictTone: "avoid",
    note: "Rates from Medico Life and Health Insurance Company.",
  },
];

function verdictClasses(tone: string): string {
  switch (tone) {
    case "avoid": return "bg-red-50 border-l-4 border-red-400 text-red-900";
    case "caution": return "bg-amber-50 border-l-4 border-amber-400 text-amber-900";
    case "ok": return "bg-green-50 border-l-4 border-green-400 text-green-900";
    default: return "bg-gray-50 border-l-4 border-gray-400 text-gray-900";
  }
}

export default function MedicoMedigapReviewPage() {
  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />

      <nav className="max-w-6xl mx-auto px-4 pt-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/medicare-supplement" className="hover:text-blue-600">Medicare Supplement</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-900 font-medium">Medico Medigap Review</span>
      </nav>

      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Medico Medigap Review {MF.year}: Two Companies, One Brand &mdash; State-by-State Report
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              By <strong>Anthony Orner</strong>, Licensed Medicare Insurance Broker · Data as of {DATA_AS_OF}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6 mt-4">
              Medico is a Medicare Supplement brand operating through two legally separate insurance
              companies: <strong>Medico Insurance Company</strong> (NAIC 31119, established 1992)
              and <strong>Medico Life and Health Insurance Company</strong> (NAIC 65641, established
              2017). Both currently hold an AM Best A (Stable) financial strength rating. The
              company you actually buy from depends on your state.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              In the five states reviewed below, Medico ranks competitively in New Jersey (5th of
              19 carriers for Plan G) and uneven elsewhere. Recent filings include a +24.28% Plan G
              rate increase in Texas (effective February 2026) and dual +4% / +18.59% filings in
              North Carolina depending on rating tier. New Jersey is the only state in this review
              with no recent Medico rate filing on record.
            </p>
            <p className="text-xs text-gray-400 mb-6">
              Last reviewed: April 2026 · CSG Actuarial rate &amp; market data
            </p>
            <a
              href={APPLY_URL}
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              Compare All Carriers at healthplans.now &rarr;
            </a>
          </div>

          <aside className="bg-blue-50 border border-blue-100 rounded-xl p-6 h-fit">
            <h2 className="text-lg font-bold text-gray-900 mb-2">The Short Answer</h2>
            <ul className="text-sm text-gray-700 space-y-2 mb-4">
              <li><strong>Two legal entities:</strong> NAIC 31119 + 65641</li>
              <li><strong>AM Best:</strong> A (Stable) on both</li>
              <li><strong>Rate type:</strong> Attained-age in all 5 states</li>
              <li><strong>Best fit (of 5):</strong> NJ Plan G &mdash; rank 5 of 19</li>
              <li><strong>Largest recent filing:</strong> TX +24.28% (Feb 2026)</li>
              <li><strong>NC oddity:</strong> Optional dental rider available</li>
            </ul>
            <a
              href={APPLY_URL}
              className="block w-full text-center bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition-colors mb-3"
            >
              Apply at healthplans.now
            </a>
            <a
              href="tel:8555591700"
              className="block w-full text-center border border-blue-700 text-blue-700 hover:bg-blue-50 font-semibold py-3 rounded-lg transition-colors text-sm"
            >
              Or call 855-559-1700
            </a>
          </aside>
        </div>
      </section>

      <section className="bg-gray-50 border-y border-gray-200 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Medico Has Two Companies (And Why It Matters For Your Policy)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            When you receive a Medico Plan G or Plan N quote, your policy is issued by one of two
            distinct insurance companies depending on the state you live in. They share the Medico
            brand and, currently, the same A AM Best financial strength rating &mdash; but they have
            different NAIC company codes, different rate filings, and (in some states) different
            product features. This kind of brand-family structure is common in the insurance
            industry and rarely disclosed clearly to consumers in plain language.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            More importantly: <strong>each state&apos;s rate-filing history and loss ratio trend
            differs</strong>. A carrier that&apos;s priced competitively in one state can be
            mid-pack or expensive in another, even within the same brand family. State-level
            premiums are filed and approved by state insurance departments individually, so &quot;is
            Medico a good Medigap carrier?&quot; is the wrong question. The right question is
            &quot;is Medico priced competitively in MY state, and what&apos;s their rate-increase
            history here?&quot;
          </p>
          <p className="text-gray-700 leading-relaxed">
            The state-by-state report cards below show current Plan G premium for a 65-year-old
            female non-tobacco user, market rank, recent filed rate increases, and the loss ratio
            trend (claims paid &divide; premiums collected &mdash; a leading indicator of future
            rate hikes). All sourced from CSG Actuarial as of {DATA_AS_OF}.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Medico Medigap: Company Facts</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-3">Medico Insurance Company</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li><strong>NAIC:</strong> 31119</li>
              <li><strong>Established:</strong> 1992 (34 years)</li>
              <li><strong>AM Best:</strong> A (Stable)</li>
              <li><strong>States in our review:</strong> New Jersey, North Carolina</li>
              <li><strong>Footprint:</strong> 30+ states nationally</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-3">Medico Life and Health Insurance Company</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li><strong>NAIC:</strong> 65641</li>
              <li><strong>Established:</strong> 2017 (9 years)</li>
              <li><strong>AM Best:</strong> A (Stable)</li>
              <li><strong>States in our review:</strong> Pennsylvania, Ohio, Texas</li>
              <li><strong>Footprint:</strong> ~12 states nationally</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 bg-amber-50 border-l-4 border-amber-400 p-4 text-sm text-amber-900">
          <strong>About attained-age pricing:</strong> Medico uses attained-age pricing in all
          five states reviewed. That means your premium rises every year as you age, separately
          from any filed rate increase. Over a 15-20 year Medigap tenure, attained-age pricing
          compounds meaningfully versus community-rated or issue-age-rated alternatives.
        </div>
      </section>

      <section className="bg-blue-50 border-y border-blue-100 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">State-by-State Report Cards</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Each card below shows Medico&apos;s current Plan G premium for a 65-year-old female
            non-tobacco user, market rank, recent filed rate increases, and the loss ratio trend.
            Data as of {DATA_AS_OF} via CSG Actuarial.
          </p>

          <div className="space-y-8">
            {stateData.map((s) => (
              <article key={s.code} id={`${s.code.toLowerCase()}-card`} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <header className="bg-blue-800 text-white px-6 py-4">
                  <h3 className="text-xl font-bold">{s.name} ({s.code})</h3>
                  <p className="text-sm text-blue-100 mt-1">Issued by {s.entity} (NAIC {s.naic})</p>
                </header>

                <div className="p-6">
                  <div className="grid md:grid-cols-3 gap-4 mb-6 text-sm">
                    <div>
                      <div className="text-gray-500 text-xs uppercase tracking-wide">Medico Plan G @ 65 F</div>
                      <div className="text-2xl font-bold text-gray-900">${s.planG65NonHHD.toFixed(2)}/mo</div>
                      <div className="text-xs text-gray-500">{s.note}</div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs uppercase tracking-wide">Market Spread</div>
                      <div className="text-lg font-semibold text-gray-900">${s.marketLow.toFixed(2)} &ndash; ${s.marketHigh.toFixed(2)}</div>
                      <div className="text-xs text-gray-500">Median ${s.marketMedian.toFixed(2)} &middot; {s.marketCarriers} carriers</div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs uppercase tracking-wide">Medico Rank</div>
                      <div className="text-2xl font-bold text-gray-900">{s.rank} <span className="text-base text-gray-500 font-normal">of {s.marketCarriers}</span></div>
                      <div className="text-xs text-gray-500">+{s.pctVsLow}% above cheapest Plan G</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Filed Rate Increases ({s.name}, Plan G)</h4>
                    {s.recentFilings.length === 0 ? (
                      <p className="text-sm text-gray-700">No rate increases on file with CSG for the Plan G product line in {s.name} as of {DATA_AS_OF}.</p>
                    ) : (
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="bg-gray-100 text-gray-700">
                              <th className="text-left px-3 py-2">Effective Date</th>
                              <th className="text-left px-3 py-2">Filed Increase</th>
                            </tr>
                          </thead>
                          <tbody>
                            {s.recentFilings.map((f, i) => (
                              <tr key={`${f.date}-${i}`} className="border-b border-gray-100">
                                <td className="px-3 py-2 text-gray-800">{f.date}</td>
                                <td className={`px-3 py-2 font-semibold ${f.pct >= 15 ? "text-red-700" : f.pct < 0 ? "text-green-700" : "text-gray-800"}`}>
                                  {f.pct >= 0 ? "+" : ""}{f.pct}%
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Loss Ratio Trend ({s.name})</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-gray-100 text-gray-700">
                            <th className="text-left px-3 py-2">Year</th>
                            <th className="text-right px-3 py-2">Policyholders</th>
                            <th className="text-right px-3 py-2">Loss Ratio</th>
                          </tr>
                        </thead>
                        <tbody>
                          {s.lossRatioTrend.map((r) => {
                            const pct = Math.round(r.lossRatio * 1000) / 10;
                            return (
                              <tr key={r.year} className="border-b border-gray-100">
                                <td className="px-3 py-2 text-gray-800">{r.year}</td>
                                <td className="px-3 py-2 text-right text-gray-700">{r.lives.toLocaleString()}</td>
                                <td className={`px-3 py-2 text-right font-semibold ${pct >= 100 ? "text-red-700" : pct >= 90 ? "text-amber-700" : "text-gray-800"}`}>
                                  {pct}%{pct >= 100 ? " ⚠" : ""}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Loss ratio = claims paid &divide; premiums collected. Source: CSG Actuarial,
                      as of {DATA_AS_OF}.
                    </p>
                  </div>

                  <div className={`rounded p-4 text-sm ${verdictClasses(s.verdictTone)}`}>
                    <strong>Our verdict for {s.name}:</strong> {s.verdict}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Plan G and Plan N with Medico</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Medico Medigap policies are issued in three rating tiers in most states &mdash;
          Preferred, Standard I, and Standard II &mdash; based on health-history responses during
          the application. Lower-risk applicants typically qualify for the Preferred tier with the
          lowest premium. The rates shown in the report cards above reflect the Preferred tier
          where applicable.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Plan G with Medico</strong> covers everything Original Medicare covers except
          the {MF.partBDeductible} Part B deductible. Because all Medigap plan letters are
          federally standardized, a Medico Plan G covers the same services as a Plan G from any
          other carrier &mdash; only premium and rate-history differ.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <strong>Plan N with Medico</strong> trades Part B excess charge coverage and small
          office/ER copays for a lower monthly premium. North Carolina applicants on Medico
          Insurance Company also have access to an optional dental rider that can be added to a
          Medigap policy &mdash; an unusual carrier-specific feature.
        </p>
      </section>

      <section className="bg-green-50 border-y border-green-100 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Apply for Medico Medigap</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Because Medico&apos;s competitive position varies dramatically by state, we strongly
            recommend comparing all carriers in your ZIP before choosing. In New Jersey, Medico is
            a top-5 Plan G option worth serious consideration. In Texas after the recent +24.28%
            filing, you&apos;ll likely find better pricing elsewhere for identical
            federally-standardized benefits.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Applying online at healthplans.now takes most people under 15 minutes and compares
            Medico alongside every other carrier in your area. Federal law gives you a{" "}
            <strong>30-day free look period</strong> after any Medigap policy is issued; you can
            review the full policy and cancel for a full refund of premium paid if you change
            your mind.
          </p>
          <a
            href={APPLY_URL}
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
          >
            Compare &amp; Apply at healthplans.now &rarr;
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4">
        <FAQSection faqs={faqs} />
      </section>

      <PhoneCTA label="Questions About Medico Medigap? Talk to a Licensed Broker" />

      <section className="max-w-6xl mx-auto px-4 py-10 border-t border-gray-100">
        <div className="bg-gray-50 border-l-4 border-gray-400 p-6 text-sm text-gray-700">
          <p className="mb-3">
            <strong>Data sources &amp; methodology.</strong> All carrier rates, filed rate
            increases, and historical loss-ratio data on this page are sourced from the CSG
            Actuarial API as of {DATA_AS_OF}. Loss ratios are computed from CSG&apos;s state-level
            market data (claims &divide; premiums per state per year). Current Plan G premiums
            reflect a Female 65 non-tobacco applicant at a flagship ZIP in each state
            (Philadelphia 19103, Cherry Hill 08002, Cleveland 44101, Charlotte 28202, Houston
            77002). Rates in smaller ZIPs within the same state may differ.
          </p>
          <p className="mb-3">
            <strong>Disclosure.</strong> This page is published by MedicareYourself, a brand of
            EasyKind Medicare. We are a licensed independent Medicare insurance broker. We do not
            offer every plan available in your area. Any information we provide is limited to the
            plans we offer in your area. Please contact Medicare.gov or 1-800-MEDICARE (TTY
            1-877-486-2048), 24 hours a day, 7 days a week, to get information on all of your
            options. Plan availability, plan letters, and premiums vary by state and are subject
            to state Department of Insurance rate filings.
          </p>
          <p className="text-xs text-gray-500">
            Medicare has neither reviewed nor endorsed this information. {MF.year} Medicare
            figures: Part B premium {MF.partBPremium}/month, Part B deductible{" "}
            {MF.partBDeductible}, Part A deductible {MF.partADeductible}.
          </p>
        </div>
      </section>
    </>
  );
}
