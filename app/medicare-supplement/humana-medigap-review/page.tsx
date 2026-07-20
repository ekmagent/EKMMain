import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { MF } from "@/lib/medicare-figures";
import { SITE_URL } from "@/lib/site";

const PAGE_PATH = "/medicare-supplement/humana-medigap-review";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const APPLY_URL = "https://healthplans.now";
const DATA_AS_OF = "2026-07-15";

export const metadata: Metadata = {
  title: "Humana Medigap Review 2026: Rate History, Loss Ratios, State-by-State",
  description:
    "Honest data on Humana Medicare Supplement: actual rate filings, loss ratios, and state-by-state pricing from CSG Actuarial. Plan G, N, and High-Deductible G reviewed.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Humana Medigap Review 2026: Rate History, Loss Ratios, State-by-State",
    description:
      "Honest data on Humana Medicare Supplement: actual rate filings, loss ratios, and state-by-state pricing from CSG Actuarial. Plan G, N, and High-Deductible G reviewed.",
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
    { "@type": "ListItem", position: 3, name: "Humana Medigap Review", item: PAGE_URL },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Humana Medigap Review 2026: Rate History, Loss Ratios, and State-by-State Pricing",
  description:
    "A data-grounded 2026 review of Humana Medicare Supplement policies across Pennsylvania, New Jersey, Ohio, and Texas — including every filed rate increase since 2020 and annual loss ratios from state market data.",
  datePublished: "2026-04-24",
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
    { "@type": "InsuranceAgency", name: "Humana Insurance Company", identifier: "NAIC 60219" },
    { "@type": "InsuranceAgency", name: "Humana Insurance Company of Kentucky" },
  ],
};

const faqs = [
  {
    question: "Has Humana raised Medicare Supplement rates recently?",
    answer:
      "Yes. In the last 12 months Humana filed rate increases on its Plan G Achieve product in every state we reviewed: Pennsylvania +19.53% (effective November 1, 2025), New Jersey +16.22% (August 1, 2025), Ohio +25.03% (April 1, 2026), and Texas +18.02% (April 1, 2026).",
  },
  {
    question: "Who actually underwrites a Humana Medigap policy?",
    answer:
      "In Pennsylvania, Texas, and several other states, Humana Medicare Supplement policies are marketed as \"Humana Achieve\" and are legally underwritten by Humana Insurance Company of Kentucky (NAIC 60219). The underwriting company name on your policy paperwork may differ from the Humana brand name on your marketing materials.",
  },
  {
    question: "Is Humana Plan G priced competitively in every state?",
    answer:
      "No. Humana's competitive position varies dramatically by state. In Pennsylvania and New Jersey Plan G, Humana is mid-pack. In Ohio and Texas, Humana's Plan G premium runs 52% to 67% above the state's cheapest Plan G for identical federally-standardized benefits — in Texas that gap is the largest in our dataset.",
  },
];

// Compact per-state data — all values verified from CSG Actuarial snapshot ${DATA_AS_OF}
const stateData = [
  {
    code: "PA",
    name: "Pennsylvania",
    planG65NonHHD: 177.02,
    planG65HHD: 155.54,
    hhdDiscountPct: 12.1,
    marketLow: 137.68,
    marketHigh: 295.51,
    marketMedian: 197.50,
    marketCarriers: 28,
    rank: 8,
    recentFilings: [
      { date: "2024-10-01", pct: 7.42 },
      { date: "2025-11-01", pct: 19.53 },
    ],
    lossRatioTrend: [
      { year: 2023, lives: 461,    lossRatio: 0.667 },
      { year: 2024, lives: 4720,   lossRatio: 1.054 },
      { year: 2025, lives: 11761,  lossRatio: 1.080 },
    ],
    verdict: "Mid-pack pricing with rapidly growing membership and loss ratios above 100% for two years running. Recent +19.53% filing is a direct response to unsustainable claims costs. Expect further rate pressure.",
    verdictTone: "caution",
  },
  {
    code: "NJ",
    name: "New Jersey",
    planG65NonHHD: 182.60,
    planG65HHD: 169.68,
    hhdDiscountPct: 7.1,
    marketLow: 147.88,
    marketHigh: 260.98,
    marketMedian: 181.62,
    marketCarriers: 18,
    rank: 10,
    recentFilings: [
      { date: "2024-06-01", pct: 7.01 },
      { date: "2025-08-01", pct: 16.22 },
    ],
    lossRatioTrend: [
      { year: 2020, lives: 600,  lossRatio: 0.459 },
      { year: 2021, lives: 2086, lossRatio: 0.732 },
      { year: 2022, lives: 3200, lossRatio: 0.780 },
      { year: 2023, lives: 3613, lossRatio: 0.902 },
      { year: 2024, lives: 3956, lossRatio: 0.941 },
      { year: 2025, lives: 4362, lossRatio: 1.006 },
    ],
    verdict: "Loss ratio climbed every single year from 46% (2020) to 100.6% (2025). Crossing the 100% threshold triggered the recent +16.22% filing. Pattern strongly suggests continued rate pressure.",
    verdictTone: "caution",
  },
  {
    code: "OH",
    name: "Ohio",
    planG65NonHHD: 179.25,
    planG65HHD: 157.50,
    hhdDiscountPct: 12.1,
    marketLow: 118.17,
    marketHigh: 342.84,
    marketMedian: 179.81,
    marketCarriers: 32,
    rank: 16,
    recentFilings: [
      { date: "2021-01-01", pct: 5.51 },
      { date: "2022-03-01", pct: 5.51 },
      { date: "2023-04-01", pct: -5.00 },
      { date: "2024-04-01", pct: 7.50 },
      { date: "2025-04-01", pct: 7.52 },
      { date: "2026-04-01", pct: 25.03 },
    ],
    lossRatioTrend: [
      { year: 2020, lives: 415,  lossRatio: 0.558 },
      { year: 2021, lives: 846,  lossRatio: 0.761 },
      { year: 2022, lives: 982,  lossRatio: 0.789 },
      { year: 2023, lives: 1264, lossRatio: 0.867 },
      { year: 2024, lives: 2003, lossRatio: 0.969 },
      { year: 2025, lives: 4491, lossRatio: 0.920 },
    ],
    verdict: "Six rate filings in six years with the most recent a 25.03% increase effective April 1, 2026 — the largest in this dataset. Rank 16 of 32 carriers is mid-pack, but Humana Plan G in Ohio is still 52% more expensive than the state's cheapest Plan G for identical benefits. Shop competitors first.",
    verdictTone: "caution",
  },
  {
    code: "TX",
    name: "Texas",
    planG65NonHHD: 217.63,
    planG65HHD: 191.27,
    hhdDiscountPct: 12.1,
    marketLow: 129.92,
    marketHigh: 284.86,
    marketMedian: 194.91,
    marketCarriers: 24,
    rank: 18,
    recentFilings: [
      { date: "2024-03-01", pct: 8.51 },
      { date: "2025-03-01", pct: 10.52 },
      { date: "2026-04-01", pct: 18.02 },
    ],
    lossRatioTrend: [
      { year: 2023, lives: 4492,  lossRatio: 1.514 },
      { year: 2024, lives: 21768, lossRatio: 0.996 },
      { year: 2025, lives: 39525, lossRatio: 1.208 },
    ],
    verdict: "Humana Plan G in Texas is 67.5% more expensive than the cheapest Plan G in the state — the largest gap in this dataset. The loss ratio hit 151% in 2023 and was back above 120% in 2025 even after the 8.5% and 10.5% filings, with membership growing fast — further rate pressure is likely. For identical federally-standardized benefits, Texas shoppers should compare before choosing Humana.",
    verdictTone: "avoid",
  },
];

function verdictClasses(tone: string): string {
  switch (tone) {
    case "avoid":
      return "bg-red-50 border-l-4 border-red-400 text-red-900";
    case "caution":
      return "bg-amber-50 border-l-4 border-amber-400 text-amber-900";
    default:
      return "bg-green-50 border-l-4 border-green-400 text-green-900";
  }
}

export default function HumanaMedigapReviewPage() {
  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />

      <nav className="max-w-6xl mx-auto px-4 pt-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/medicare-supplement" className="hover:text-blue-600">Medicare Supplement</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-900 font-medium">Humana Medigap Review</span>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Humana Medigap Review {MF.year}: Rate History, Loss Ratios &amp; State-by-State Pricing
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              By <strong>Anthony Orner</strong>, Licensed Medicare Insurance Broker · Data as of {DATA_AS_OF}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6 mt-4">
              Humana Medicare Supplement policies — marketed as <strong>Humana Achieve</strong> in
              most states and legally underwritten by Humana Insurance Company of Kentucky (NAIC
              60219) — hold an AM Best A (Stable) financial strength rating. In the last 12 months,
              Humana filed Plan G rate increases of 16% to 25% in every state we reviewed, driven
              by loss ratios that reached or exceeded 100% in three of four states.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              This review uses actual state rate filings and CSG Actuarial market data to show where
              Humana Medigap is priced competitively and where it is not. Humana ranks anywhere from
              8th to 18th among the carriers competing for your premium dollar, depending on the
              state. Benefits are federally standardized, so identical Plan G coverage is available
              from other carriers at lower cost in every state reviewed.
            </p>
            <a
              href={APPLY_URL}
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              Compare All Carriers at healthplans.now →
            </a>
          </div>

          <aside className="bg-blue-50 border border-blue-100 rounded-xl p-6 h-fit">
            <h2 className="text-lg font-bold text-gray-900 mb-2">The Short Answer</h2>
            <ul className="text-sm text-gray-700 space-y-2 mb-4">
              <li><strong>AM Best:</strong> A (Stable)</li>
              <li><strong>Rate type:</strong> Attained-age (premiums rise with age)</li>
              <li><strong>Household discount:</strong> 7–12% depending on state</li>
              <li><strong>Recent rate filings:</strong> +16% to +25% across every reviewed state</li>
              <li><strong>Best value state (of 4):</strong> PA &amp; NJ Plan N</li>
              <li><strong>Worst value state (of 4):</strong> TX Plan G (67% above cheapest)</li>
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
            {/* PLACEHOLDER: future MedSup Report lead-capture CTA drops here */}
          </aside>
        </div>
      </section>

      {/* The Disclosure */}
      <section className="bg-gray-50 border-y border-gray-200 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            National Ratings Don&apos;t Tell You How Humana Prices in Your State
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Medicare Supplement benefits are federally standardized — every Plan G covers the same
            services regardless of which carrier you buy from. What varies is the premium, the
            carrier&apos;s rate-increase history, and the pricing method. Those three variables can
            swing your lifetime cost by tens of thousands of dollars.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Here is why a carrier&apos;s national reputation and AM Best rating don&apos;t predict
            your state&apos;s experience: Medigap premiums are filed with each state&apos;s
            Department of Insurance and approved on a state-by-state basis. When a carrier&apos;s{" "}
            <strong>loss ratio</strong> in a particular state (claims paid ÷ premiums collected)
            climbs toward or above 100%, the carrier is losing money on that block of business. They
            can&apos;t just absorb it indefinitely — they file for a rate increase. Healthy
            policyholders, who shop the market, switch to cheaper carriers. The remaining pool
            skews sicker, loss ratios rise further, and the cycle repeats. This is called the{" "}
            <strong>adverse selection spiral</strong>, and it is the single most important dynamic
            to understand before choosing a Medigap carrier.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Humana&apos;s public state-market data shows this pattern in real time. The sections
            below document each filed rate increase, the yearly loss ratio, and Humana&apos;s rank
            in each state&apos;s current pricing spread. All figures are sourced from CSG
            Actuarial and state Department of Insurance filings.
          </p>
        </div>
      </section>

      {/* National Overview */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Humana Medigap: Company &amp; Product Facts</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-3">Company</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li><strong>Legal entity:</strong> Humana Insurance Company (NAIC 60219); policies in PA, TX, and several other states are marketed as &quot;Humana Achieve&quot; and underwritten by Humana Insurance Company of Kentucky</li>
              <li><strong>AM Best:</strong> A (Excellent), outlook Stable</li>
              <li><strong>Standard &amp; Poor&apos;s:</strong> A</li>
              <li><strong>Established:</strong> 2004 (Humana Insurance Company subsidiary)</li>
              <li><strong>Customer satisfaction ratio (CSG):</strong> 0.83</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-3">Product</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li><strong>Plans offered (states reviewed):</strong> Plan G, Plan N, High-Deductible G; some states also offer Plan A</li>
              <li><strong>Rate type:</strong> <span className="text-red-700 font-semibold">Attained-age</span> — premiums rise every year as you age, in addition to annual filed increases</li>
              <li><strong>Household discount:</strong> 7.1% (NJ) to 12.1% (PA, OH, TX) for eligible applicants</li>
              <li><strong>Part B deductible for {MF.year}:</strong> {MF.partBDeductible} (Plan G covers everything else; you pay this)</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 bg-amber-50 border-l-4 border-amber-400 p-4 text-sm text-amber-900">
          <strong>About attained-age pricing:</strong> Humana uses attained-age pricing in all four
          states we reviewed. That means your premium automatically increases each year just
          because you got a year older — separately from any filed rate increase. Over a 15–20 year
          Medigap tenure this compounds meaningfully versus community-rated or issue-age-rated
          carriers where your premium tracks inflation only.
        </div>
      </section>

      {/* State-by-state report cards */}
      <section className="bg-blue-50 border-y border-blue-100 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">State-by-State Report Cards</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Each card below shows Humana&apos;s current Plan G premium for a 65-year-old female
            non-tobacco user, market rank, every filed rate increase in the state, and the loss
            ratio trend. Data as of {DATA_AS_OF} via CSG Actuarial.
          </p>

          <div className="space-y-8">
            {stateData.map((s) => (
              <article key={s.code} id={`${s.code.toLowerCase()}-card`} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <header className="bg-blue-800 text-white px-6 py-4">
                  <h3 className="text-xl font-bold">{s.name} ({s.code})</h3>
                </header>

                <div className="p-6">
                  {/* Pricing row */}
                  <div className="grid md:grid-cols-3 gap-4 mb-6 text-sm">
                    <div>
                      <div className="text-gray-500 text-xs uppercase tracking-wide">Humana Plan G @ 65 F</div>
                      <div className="text-2xl font-bold text-gray-900">${s.planG65NonHHD.toFixed(2)}/mo</div>
                      <div className="text-xs text-gray-500">Base rate · ${s.planG65HHD.toFixed(2)} with household discount ({s.hhdDiscountPct}%)</div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs uppercase tracking-wide">Market Spread</div>
                      <div className="text-lg font-semibold text-gray-900">${s.marketLow.toFixed(2)} – ${s.marketHigh.toFixed(2)}</div>
                      <div className="text-xs text-gray-500">Median ${s.marketMedian.toFixed(2)} · {s.marketCarriers} carriers</div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs uppercase tracking-wide">Humana Rank</div>
                      <div className="text-2xl font-bold text-gray-900">{s.rank} <span className="text-base text-gray-500 font-normal">of {s.marketCarriers}</span></div>
                      <div className="text-xs text-gray-500">
                        {Math.round(((s.planG65NonHHD / s.marketLow - 1) * 100))}% above cheapest Plan G
                      </div>
                    </div>
                  </div>

                  {/* Filed rate increases */}
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
                          {s.recentFilings.map((f) => (
                            <tr key={f.date} className="border-b border-gray-100">
                              <td className="px-3 py-2 text-gray-800">{f.date}</td>
                              <td className={`px-3 py-2 font-semibold ${f.pct >= 15 ? "text-red-700" : f.pct < 0 ? "text-green-700" : "text-gray-800"}`}>
                                {f.pct >= 0 ? "+" : ""}{f.pct}%
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Loss ratio trend */}
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
                      Loss ratio = claims paid ÷ premiums collected. A ratio above 100% means Humana
                      paid out more than it collected. Source: CSG Actuarial med_supp_market_data,
                      as of {DATA_AS_OF}.
                    </p>
                  </div>

                  {/* Verdict */}
                  <div className={`rounded p-4 text-sm ${verdictClasses(s.verdictTone)}`}>
                    <strong>Our verdict for {s.name}:</strong> {s.verdict}
                  </div>
                </div>
              </article>
            ))}

            {/* North Carolina note — quotes in snapshot, loss-ratio detail not yet */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-sm text-gray-700">
              <h3 className="font-semibold text-gray-900 mb-2">North Carolina — Snapshot</h3>
              <p>
                We place Humana Medicare Supplement policies in North Carolina. In the July 2026
                filed-rate data, Humana Plan G ranks 17 of 29 NC carriers at $167.63/month (65 F
                non-tobacco), 64.6% above the state&apos;s cheapest filing, after +12.9% (March
                2025) and +25% (March 2026) rate filings. NC loss-ratio detail is not yet in our
                dataset. For current NC quotes, call{" "}
                <a href="tel:8555591700" className="text-blue-700 hover:underline font-medium">855-559-1700</a>
                {" "}or apply at{" "}
                <a href={APPLY_URL} className="text-blue-700 hover:underline font-medium">healthplans.now</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plan-by-plan */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Humana Plan G, Plan N &amp; High-Deductible Plan G</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Because all Medigap plan letters are federally standardized, a Humana Plan G covers the
          exact same services as Plan G from any other carrier. Plan N and High-Deductible Plan G
          behave the same way — identical benefits across carriers, only premium and rate history
          differ.
        </p>
        <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-6">Plan G with Humana</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Humana Plan G covers everything Original Medicare covers with one exception: the{" "}
          {MF.partBDeductible} Part B deductible, which you pay out of pocket each year. Humana
          uses attained-age pricing in every state we reviewed, so expect your premium to rise each
          year from both the age step and any state-approved rate filing.
        </p>
        <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-6">Plan N with Humana</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Humana Plan N trades the Part B excess charges coverage and a small office/ER copay for a
          lower monthly premium. In Pennsylvania, Humana Plan N ranks 3rd of 28 carriers at 65 F
          non-tobacco, which makes PA the best value for a Humana Medigap applicant among the
          states we reviewed.
        </p>
        <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-6">High-Deductible Plan G with Humana</h3>
        <p className="text-gray-700 leading-relaxed">
          High-Deductible G runs a substantially lower monthly premium but shifts several thousand
          dollars of annual deductible risk to you before the plan pays. For healthy 65-year-olds
          with emergency savings, it can be a reasonable fit. Humana HDG ranks middle-of-pack in
          every state we reviewed.
        </p>
      </section>

      {/* How to apply */}
      <section className="bg-green-50 border-y border-green-100 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Apply for a Humana Medigap Plan</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Because the decision to enroll in Humana versus a lower-priced competitor depends
            entirely on your state, your age, your household status, and your tolerance for
            attained-age pricing over time, we recommend comparing all carriers licensed in your
            ZIP before applying. Humana sits between the least-expensive and most-expensive
            carriers in every state we reviewed — applying through a multi-carrier comparison tool
            is the only way to know whether Humana is your best option.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Applying online at healthplans.now takes most people under 15 minutes and compares
            Humana alongside every other carrier in your ZIP. Federal law gives you a{" "}
            <strong>30-day free look period</strong> once any Medigap policy is issued; you may
            review and cancel for a full premium refund if you change your mind.
          </p>
          <a
            href={APPLY_URL}
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
          >
            Compare &amp; Apply at healthplans.now →
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-4">
        <FAQSection faqs={faqs} />
      </section>

      {/* Phone CTA */}
      <PhoneCTA label="Questions About Humana Medigap? Talk to a Licensed Broker" />

      {/* Data + Compliance */}
      <section className="max-w-6xl mx-auto px-4 py-10 border-t border-gray-100">
        <div className="bg-gray-50 border-l-4 border-gray-400 p-6 text-sm text-gray-700">
          <p className="mb-3">
            <strong>Data sources &amp; methodology.</strong> All carrier rates, filed rate
            increases, and historical loss-ratio data on this page are sourced from the CSG
            Actuarial API as of {DATA_AS_OF}. Loss ratios are computed from CSG&apos;s{" "}
            <code>med_supp_market_data</code> field (claims ÷ premiums per state per year); the
            New Jersey and Ohio loss-ratio histories reflect the April 2026 CSG pull, the most
            recent to include state-level detail for those markets. Current
            Plan G premiums reflect a Female 65 non-tobacco applicant at a flagship ZIP in each
            state (Philadelphia 19103, Cherry Hill 08002, Cleveland 44101, Houston 77002). Rates
            in smaller ZIPs within the same state may differ.
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
