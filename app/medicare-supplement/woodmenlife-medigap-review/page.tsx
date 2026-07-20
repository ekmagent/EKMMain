import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { MF } from "@/lib/medicare-figures";
import { SITE_URL } from "@/lib/site";

const PAGE_PATH = "/medicare-supplement/woodmenlife-medigap-review";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const APPLY_URL = "https://healthplans.now";
const DATA_AS_OF = "2026-07-15";

export const metadata: Metadata = {
  title: "WoodmenLife Medigap Review 2026: Rate History & Loss Ratios",
  description:
    "Honest data on WoodmenLife Medicare Supplement: A+ rated, attained-age pricing, multiple rate filings (up to +41.6%), and loss ratios climbing in every state we reviewed.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "WoodmenLife Medigap Review 2026: Rate History & Loss Ratios",
    description:
      "Honest data on WoodmenLife Medicare Supplement: A+ rated, attained-age pricing, multiple rate filings (up to +41.6%), and loss ratios climbing in every state we reviewed.",
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
    { "@type": "ListItem", position: 3, name: "WoodmenLife Medigap Review", item: PAGE_URL },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WoodmenLife Medigap Review 2026: State-by-State Rate History & Loss Ratios",
  description:
    "A data-grounded review of WoodmenLife Medicare Supplement Plan G across Pennsylvania, New Jersey, Ohio, North Carolina, and Texas — including every filed rate increase and the carrier's loss-ratio trajectory in each state.",
  datePublished: "2026-04-26",
  dateModified: "2026-07-20",
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
    { "@type": "InsuranceAgency", name: "WoodmenLife", identifier: "NAIC 57320" },
  ],
};

const faqs = [
  {
    question: "Is WoodmenLife a real Medicare Supplement carrier?",
    answer:
      "Yes. WoodmenLife (NAIC 57320) is an AM Best A+ (Stable) rated carrier writing Medicare Supplement policies in all five states we reviewed: Pennsylvania, New Jersey, Ohio, North Carolina, and Texas. The Medigap-issuing legal entity has been on file with state insurance departments since 2023 (the parent fraternal organization is older).",
  },
  {
    question: "Has WoodmenLife raised Medicare Supplement rates recently?",
    answer:
      "Yes, repeatedly. WoodmenLife filed Plan G rate increases of +9% in mid-2024 across all five states, followed by +15% to +18% filings in 2025 in four of them, with additional 2026 filings on top. Texas skipped 2025 and then saw the most dramatic — a +41.6% Plan G filing effective February 2026, the largest single-year increase in our entire carrier review dataset.",
  },
  {
    question: "Is WoodmenLife competitively priced?",
    answer:
      "No. Across all five states we reviewed, WoodmenLife Plan G ranks between 12th and 15th of 18-32 carriers competing — paying 39% to 52% above the cheapest Plan G in each state. Combined with attained-age pricing, this means WoodmenLife is generally a higher-cost option for identical federally-standardized Medigap benefits.",
  },
];

const stateData = [
  {
    code: "PA",
    name: "Pennsylvania",
    planG65NonHHD: 194.50,
    marketLow: 137.68,
    marketHigh: 295.51,
    marketMedian: 197.50,
    marketCarriers: 28,
    rank: 13,
    pctVsLow: 41.3,
    recentFilings: [
      { date: "2024-06-01", pct: 9.01 },
      { date: "2025-06-01", pct: 15.00 },
      { date: "2026-01-15", pct: 8.99 },
    ],
    lossRatioTrend: [
      { year: 2024, lives: 28, lossRatio: 0.52 },
      { year: 2025, lives: 75, lossRatio: 1.27 },
    ],
    verdict: "Three rate filings in 23 months totaling roughly 36% compounded. Tiny PA block (75 lives in 2025) but loss ratio jumped to 127% — claims significantly outpacing premiums. Mid-pack pricing at rank 13 of 28, 41% above the cheapest Plan G. Strong upward rate pressure likely.",
    verdictTone: "avoid",
  },
  {
    code: "NJ",
    name: "New Jersey",
    planG65NonHHD: 205.29,
    marketLow: 147.88,
    marketHigh: 260.98,
    marketMedian: 181.62,
    marketCarriers: 18,
    rank: 15,
    pctVsLow: 38.8,
    recentFilings: [
      { date: "2024-06-01", pct: 9.00 },
      { date: "2025-06-01", pct: 15.00 },
      { date: "2026-03-01", pct: 9.00 },
    ],
    lossRatioTrend: [
      { year: 2024, lives: 7, lossRatio: 1.57 },
      { year: 2025, lives: 7, lossRatio: 1.14 },
    ],
    verdict: "Tiny NJ block (7 lives) with loss ratios 114-157% — the carrier is losing money on this state and recent rate filings reflect it. Ranks 15 of 18 carriers; you're paying 39% above the cheapest NJ Plan G. With only seven policyholders, the data is statistically thin but the rate-filing pattern suggests the company is not finding equilibrium here.",
    verdictTone: "avoid",
  },
  {
    code: "OH",
    name: "Ohio",
    planG65NonHHD: 170.59,
    marketLow: 118.17,
    marketHigh: 342.84,
    marketMedian: 179.81,
    marketCarriers: 32,
    rank: 12,
    pctVsLow: 44.4,
    recentFilings: [
      { date: "2024-05-01", pct: 9.00 },
      { date: "2025-04-01", pct: 15.00 },
      { date: "2026-06-01", pct: 9.00 },
    ],
    lossRatioTrend: [
      { year: 2023, lives: 5,  lossRatio: 0.00 },
      { year: 2024, lives: 48, lossRatio: 0.47 },
      { year: 2025, lives: 97, lossRatio: 0.98 },
    ],
    verdict: "Best WoodmenLife rank in our review — 12 of 32, but now 44% above the cheapest Plan G after a third filing (+9% effective June 2026) landed on top of the 9% and 15% increases. Loss ratio climbed from 0% (5 lives) → 47% (48 lives) → 98% (97 lives) as the block grew, the classic adverse-selection trajectory. Likely more rate pressure ahead.",
    verdictTone: "caution",
  },
  {
    code: "NC",
    name: "North Carolina",
    planG65NonHHD: 152.66,
    marketLow: 101.84,
    marketHigh: 315.20,
    marketMedian: 156.00,
    marketCarriers: 29,
    rank: 13,
    pctVsLow: 49.9,
    recentFilings: [
      { date: "2024-05-15", pct: 9.01 },
      { date: "2025-01-01", pct: 0.00 },
      { date: "2025-04-01", pct: 18.00 },
      { date: "2026-01-15", pct: 15.00 },
    ],
    lossRatioTrend: [
      { year: 2023, lives: 63,  lossRatio: 0.34 },
      { year: 2024, lives: 259, lossRatio: 0.69 },
      { year: 2025, lives: 506, lossRatio: 0.76 },
    ],
    verdict: "Four filings in 23 months: +9%, +0%, +18%, +15% — totaling roughly 47% compounded. Loss ratio still healthy at 76% but climbing fast. Currently ranks 13 of 29 carriers; you're still paying 50% above the cheapest NC Plan G. Membership growing (63 → 506 lives) while rate filings escalate.",
    verdictTone: "avoid",
  },
  {
    code: "TX",
    name: "Texas",
    planG65NonHHD: 197.75,
    marketLow: 129.92,
    marketHigh: 284.86,
    marketMedian: 194.91,
    marketCarriers: 24,
    rank: 14,
    pctVsLow: 52.2,
    recentFilings: [
      { date: "2024-05-15", pct: 9.01 },
      { date: "2026-02-15", pct: 41.60 },
    ],
    lossRatioTrend: [
      { year: 2023, lives: 198,  lossRatio: 0.83 },
      { year: 2024, lives: 1256, lossRatio: 0.89 },
      { year: 2025, lives: 3371, lossRatio: 0.93 },
    ],
    verdict: "+41.60% rate filing effective February 2026 — the largest single-year Plan G increase in our entire dataset. Membership grew rapidly (198 → 3371 lives) while loss ratio climbed from 83% to 93%. The +41.6% filing is the carrier resetting pricing aggressively to catch up. Anyone enrolled before February 2026 just absorbed the full increase. Currently ranks 14 of 24 carriers; you're paying 52% above the cheapest TX Plan G.",
    verdictTone: "avoid",
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

export default function WoodmenLifeMedigapReviewPage() {
  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />

      <nav className="max-w-6xl mx-auto px-4 pt-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/medicare-supplement" className="hover:text-blue-600">Medicare Supplement</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-900 font-medium">WoodmenLife Medigap Review</span>
      </nav>

      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              WoodmenLife Medigap Review {MF.year}: State-by-State Rate History &amp; Loss Ratios
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              By <strong>Anthony Orner</strong>, Licensed Medicare Insurance Broker · Data as of {DATA_AS_OF}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6 mt-4">
              WoodmenLife (NAIC 57320) holds an AM Best A+ (Stable) financial strength rating and
              writes Medicare Supplement Plan G in all five states we reviewed. The pricing data
              tells a consistent story: WoodmenLife is mid-pack to high in every state, ranging
              from 39% to 52% above the cheapest Plan G in the same state for identical
              federally-standardized benefits.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Recent rate filings paint a starker picture. WoodmenLife filed Plan G increases in
              all five states in the last 24 months. The Texas filing of <strong>+41.60% effective
              February 2026</strong> is the largest single-year Plan G increase we have seen in
              any carrier review &mdash; a direct response to claims experience that pricing
              hadn&apos;t kept up with. Loss ratios across the family are climbing toward 100% in
              most states despite the recent hikes, suggesting more rate pressure ahead.
            </p>
            <p className="text-xs text-gray-400 mb-6">
              Last reviewed: July 2026 · CSG Actuarial rate &amp; market data
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
              <li><strong>NAIC:</strong> 57320</li>
              <li><strong>AM Best:</strong> A+ (Stable)</li>
              <li><strong>Rate type:</strong> Attained-age (every state)</li>
              <li><strong>Premium vs. cheapest Plan G:</strong> +39% to +52%</li>
              <li><strong>Largest 2026 filing:</strong> Texas +41.60%</li>
              <li><strong>Best fit (of 5):</strong> Ohio Plan G &mdash; rank 12 of 32</li>
              <li><strong>Worst fit:</strong> Texas Plan G &mdash; rank 14, +52% above cheapest</li>
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
            Why WoodmenLife&apos;s Rate History Matters More Than Its Brand
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            WoodmenLife&apos;s A+ AM Best rating is real and current &mdash; the carrier is
            financially strong. But financial strength is necessary, not sufficient, for a good
            Medigap value. The economic question is what the carrier&apos;s pricing trajectory
            looks like over your 15-20 year Medigap tenure: which way are filed rate increases
            going, and what do loss ratios suggest is coming next?
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The data on WoodmenLife is consistent: <strong>multiple Plan G rate increases in every
            state we reviewed</strong>, totaling roughly 30-50% compounded over 23 months in some
            states. The +41.60% Texas filing effective February 2026 is the single largest filed
            increase in our entire carrier dataset. Combined with attained-age pricing &mdash;
            where premiums automatically rise each year as you age &mdash; the long-term cost
            curve compounds aggressively.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Loss ratios &mdash; claims paid divided by premiums collected &mdash; tell us why
            rates keep rising. WoodmenLife&apos;s loss ratios in our reviewed states have been
            climbing rapidly as their book of business grows. When loss ratios approach or exceed
            100%, more rate increases follow. The state-by-state report cards below show every
            filed rate increase and the loss-ratio history.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">WoodmenLife Medigap: Company &amp; Product Facts</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-3">Company</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li><strong>Legal entity:</strong> WoodmenLife (NAIC 57320)</li>
              <li><strong>AM Best:</strong> A+ (Stable)</li>
              <li><strong>Medigap-issuing entity established:</strong> 2023 (parent fraternal organization is older)</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-3">Product</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li><strong>Plans offered (states reviewed):</strong> Plan G, Plan N, High-Deductible Plan G</li>
              <li><strong>Rate type:</strong> <span className="text-red-700 font-semibold">Attained-age</span> (premiums rise annually with age)</li>
              <li><strong>State footprint:</strong> All 5 of our review states (PA, NJ, OH, NC, TX)</li>
              <li><strong>Part B deductible for {MF.year}:</strong> {MF.partBDeductible}</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 bg-amber-50 border-l-4 border-amber-400 p-4 text-sm text-amber-900">
          <strong>About attained-age pricing:</strong> WoodmenLife uses attained-age pricing in
          all five states we reviewed. Your premium rises each year as you age, in addition to
          any state-approved rate filing. With the recent +41.60% TX filing and similar large
          increases in other states, the long-term cost trajectory of a WoodmenLife Medigap
          policy is aggressive.
        </div>
      </section>

      <section className="bg-blue-50 border-y border-blue-100 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">State-by-State Report Cards</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Each card below shows WoodmenLife&apos;s current Plan G premium for a 65-year-old
            female non-tobacco user, market rank, every filed rate increase in our data, and the
            loss-ratio trend. As of {DATA_AS_OF} via CSG Actuarial.
          </p>

          <div className="space-y-8">
            {stateData.map((s) => (
              <article key={s.code} id={`${s.code.toLowerCase()}-card`} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <header className="bg-blue-800 text-white px-6 py-4">
                  <h3 className="text-xl font-bold">{s.name} ({s.code})</h3>
                </header>

                <div className="p-6">
                  <div className="grid md:grid-cols-3 gap-4 mb-6 text-sm">
                    <div>
                      <div className="text-gray-500 text-xs uppercase tracking-wide">WoodmenLife Plan G @ 65 F</div>
                      <div className="text-2xl font-bold text-gray-900">${s.planG65NonHHD.toFixed(2)}/mo</div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs uppercase tracking-wide">Market Spread</div>
                      <div className="text-lg font-semibold text-gray-900">${s.marketLow.toFixed(2)} &ndash; ${s.marketHigh.toFixed(2)}</div>
                      <div className="text-xs text-gray-500">Median ${s.marketMedian.toFixed(2)} &middot; {s.marketCarriers} carriers</div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs uppercase tracking-wide">WoodmenLife Rank</div>
                      <div className="text-2xl font-bold text-gray-900">{s.rank} <span className="text-base text-gray-500 font-normal">of {s.marketCarriers}</span></div>
                      <div className="text-xs text-gray-500">+{s.pctVsLow}% above cheapest Plan G</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Filed Rate Increases ({s.name}, Plan G)</h4>
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
                              <td className={`px-3 py-2 font-semibold ${f.pct >= 15 ? "text-red-700" : f.pct === 0 ? "text-gray-500" : "text-gray-800"}`}>
                                {f.pct === 0 ? "no change" : `+${f.pct}%`}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Plan G and Plan N with WoodmenLife</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          WoodmenLife offers Plan G, Plan N, and High-Deductible Plan G in the states we
          reviewed. Because all Medigap plan letters are federally standardized, a WoodmenLife
          Plan G covers the same services as Plan G from any other carrier &mdash; only premium
          and rate-history differ.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Given WoodmenLife&apos;s consistently mid-to-high pricing across every state in our
          review and the recent magnitude of rate filings (especially the +41.60% Texas filing),
          we recommend running a multi-carrier comparison before choosing. Lower-priced
          alternatives with more stable rate histories are available in every state we reviewed.
        </p>
      </section>

      <section className="bg-green-50 border-y border-green-100 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Apply</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Compare all carriers in your ZIP before choosing &mdash; especially with WoodmenLife,
            where the pricing data and rate-filing history don&apos;t make a strong case relative
            to lower-cost alternatives. If you specifically prefer WoodmenLife after seeing the
            data, that&apos;s a defensible choice; we&apos;ll help you apply.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Applying online at healthplans.now takes most people under 15 minutes and compares
            WoodmenLife alongside every other carrier in your area. Federal law gives you a{" "}
            <strong>30-day free look period</strong> after any Medigap policy is issued.
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

      <PhoneCTA label="Questions About WoodmenLife Medigap? Talk to a Licensed Broker" />

      <section className="max-w-6xl mx-auto px-4 py-10 border-t border-gray-100">
        <div className="bg-gray-50 border-l-4 border-gray-400 p-6 text-sm text-gray-700">
          <p className="mb-3">
            <strong>Data sources &amp; methodology.</strong> All carrier rates, filed rate
            increases, and historical loss-ratio data on this page are sourced from the CSG
            Actuarial API as of {DATA_AS_OF}. Loss ratios are computed from CSG&apos;s state-level
            market data (claims &divide; premiums per state per year). Current Plan G premiums
            reflect a Female 65 non-tobacco applicant at a flagship ZIP in each state
            (Philadelphia 19103, Cherry Hill 08002, Cleveland 44101, Charlotte 28202, Houston
            77002). Rates in smaller ZIPs may differ.
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
