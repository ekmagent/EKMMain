import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { MF } from "@/lib/medicare-figures";
import { SITE_URL } from "@/lib/site";

const PAGE_PATH = "/medicare-supplement/mutual-of-omaha-medigap-review";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const APPLY_URL = "https://healthplans.now";
const DATA_AS_OF = "2026-04-26";

export const metadata: Metadata = {
  title: "Mutual of Omaha Medigap Review 2026: Four Companies, One Brand",
  description:
    "Honest data on the Mutual of Omaha Medigap family. Four A+ rated legal entities, escalating rate filings (up to +30%), and loss ratios near 100% across most states.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Mutual of Omaha Medigap Review 2026: Four Companies, One Brand",
    description:
      "Honest data on the Mutual of Omaha Medigap family. Four A+ rated legal entities, escalating rate filings (up to +30%), and loss ratios near 100% across most states.",
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
    { "@type": "ListItem", position: 3, name: "Mutual of Omaha Medigap Review", item: PAGE_URL },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mutual of Omaha Medigap Review 2026: Four Companies, One Brand — State-by-State Report",
  description:
    "A data-grounded review of the Mutual of Omaha Medicare Supplement carrier family — four legally separate A+ rated insurance companies — across Pennsylvania, New Jersey, Ohio, North Carolina, and Texas, with rate filings and loss ratios from CSG Actuarial.",
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
    { "@type": "InsuranceAgency", name: "Mutual of Omaha Insurance Company", identifier: "NAIC 71412" },
    { "@type": "InsuranceAgency", name: "United of Omaha Life Insurance Company", identifier: "NAIC 69868" },
    { "@type": "InsuranceAgency", name: "Omaha Insurance Company", identifier: "NAIC 13100" },
    { "@type": "InsuranceAgency", name: "Omaha Supplemental Insurance Company", identifier: "NAIC 16537" },
  ],
};

const faqs = [
  {
    question: "Is Mutual of Omaha the same company as United of Omaha or Omaha Insurance Company?",
    answer:
      "They are four separate legally distinct insurance companies sharing the Mutual of Omaha brand and an AM Best A+ (Stable) financial strength rating. Mutual of Omaha Insurance Company (NAIC 71412), United of Omaha Life Insurance Company (NAIC 69868), Omaha Insurance Company (NAIC 13100), and Omaha Supplemental Insurance Company (NAIC 16537) each issue Medigap policies in different states. Your policy is written by whichever entity is licensed in your state.",
  },
  {
    question: "Has Mutual of Omaha raised Medicare Supplement rates recently?",
    answer:
      "Yes, repeatedly. In Texas, Mutual of Omaha filed a +25% Plan G rate increase in June 2025. In Pennsylvania, United of Omaha filed +19% in June 2025 — the latest in a string of escalating annual increases (3% in 2022, 5% in 2023, 12% in 2024, 19% in 2025). Ohio Omaha Supplemental filed +30% in April 2025. North Carolina Omaha Insurance filed +25% in April 2025. Loss ratios across the family are near or above 100% in most states, suggesting more increases are likely.",
  },
  {
    question: "Is Mutual of Omaha Plan G priced competitively?",
    answer:
      "No. Across the four states we have direct quote data for, Mutual of Omaha Plan G is consistently mid-to-high pack: 51.5% above the cheapest in Pennsylvania, 51.1% in North Carolina, 38.1% in Ohio, and 63.9% in Texas. For identical federally-standardized benefits, lower-priced carriers are available in every state we reviewed. Mutual of Omaha trades premium for brand recognition.",
  },
];

const stateData = [
  {
    code: "PA",
    name: "Pennsylvania",
    entity: "United of Omaha Life Insurance Company",
    naic: "69868",
    planG65NonHHD: 208.62,
    marketLow: 137.68,
    marketHigh: 295.51,
    marketMedian: 189.81,
    marketCarriers: 30,
    rank: 24,
    pctVsLow: 51.5,
    recentFilings: [
      { date: "2022-06-01", pct: 3.00 },
      { date: "2023-06-01", pct: 5.00 },
      { date: "2024-05-15", pct: 12.00 },
      { date: "2025-06-01", pct: 19.00 },
    ],
    lossRatioTrend: [
      { year: 2023, lives: 10303, lossRatio: 1.24 },
      { year: 2024, lives: 9397,  lossRatio: 0.93 },
      { year: 2025, lives: 11888, lossRatio: 0.96 },
    ],
    verdict: "Four consecutive annual rate increases of 3% → 5% → 12% → 19% — each one larger than the last. Loss ratio peaked at 124% in 2023 and is back near 100% despite the hikes. Ranks 24 of 30 carriers; you're paying 51.5% above the cheapest Pennsylvania Plan G for identical benefits. Compare carriers before choosing.",
    verdictTone: "avoid",
  },
  {
    code: "NJ",
    name: "New Jersey",
    entity: "Mutual of Omaha Insurance Company (Medigap presence; not in our quote sample)",
    naic: "71412",
    planG65NonHHD: null,
    marketLow: 147.88,
    marketHigh: 260.98,
    marketMedian: 179.94,
    marketCarriers: 19,
    rank: null,
    pctVsLow: null,
    recentFilings: [],
    lossRatioTrend: [
      { year: 2023, lives: 872, lossRatio: 0.63 },
      { year: 2024, lives: 868, lossRatio: 0.77 },
      { year: 2025, lives: 597, lossRatio: 0.86 },
    ],
    verdict: "Mutual of Omaha Insurance Company has a Medigap block in New Jersey (597 lives in 2025), but they do not appear in our flagship Cherry Hill ZIP 08002 quote sample at age 65 F non-tobacco — likely a pricing tier or rating-class issue. Loss ratio climbed from 63% (2023) to 86% (2025), a healthy-but-rising pattern. Call us at 855-559-1700 for a state-specific NJ Mutual of Omaha quote.",
    verdictTone: "info",
  },
  {
    code: "OH",
    name: "Ohio",
    entity: "Omaha Supplemental Insurance Company",
    naic: "16537",
    planG65NonHHD: 163.23,
    marketLow: 118.17,
    marketHigh: 342.84,
    marketMedian: 164.49,
    marketCarriers: 34,
    rank: 16,
    pctVsLow: 38.1,
    recentFilings: [
      { date: "2024-04-01", pct: 6.00 },
      { date: "2025-04-01", pct: 30.00 },
    ],
    lossRatioTrend: [
      { year: 2023, lives: 6489,  lossRatio: 1.94 },
      { year: 2024, lives: 4112,  lossRatio: 0.83 },
      { year: 2025, lives: 16231, lossRatio: 0.97 },
    ],
    verdict: "+30% rate filing effective April 2025 — the largest single-year filing in our review. The 2023 loss ratio of 194% (claims nearly double premiums) explains why. Membership shrank as healthy policyholders fled then exploded back when pricing reset. Currently ranks 16 of 34, costing 38% above the cheapest Plan G. Loss ratio at 97% in 2025 means the rebalance hasn't fully held — expect more pressure.",
    verdictTone: "avoid",
  },
  {
    code: "NC",
    name: "North Carolina",
    entity: "Omaha Insurance Company",
    naic: "13100",
    planG65NonHHD: 153.87,
    marketLow: 101.83,
    marketHigh: 280.62,
    marketMedian: 147.50,
    marketCarriers: 31,
    rank: 22,
    pctVsLow: 51.1,
    recentFilings: [
      { date: "2022-05-01", pct: 2.99 },
      { date: "2024-05-01", pct: 12.00 },
      { date: "2025-04-01", pct: 25.01 },
    ],
    lossRatioTrend: [
      { year: 2023, lives: 17727, lossRatio: 1.16 },
      { year: 2024, lives: 16018, lossRatio: 0.92 },
      { year: 2025, lives: 22508, lossRatio: 0.95 },
    ],
    verdict: "Three rate filings in three years culminating in a +25.01% increase effective April 2025. The 2023 loss ratio of 116% triggered the cascade. Currently ranks 22 of 31 carriers; you're paying 51% above the cheapest NC Plan G. Membership grew despite the increases (16k → 22k) but loss ratio remains at 95% — more rate pressure likely.",
    verdictTone: "avoid",
  },
  {
    code: "TX",
    name: "Texas",
    entity: "Mutual of Omaha Insurance Company",
    naic: "71412",
    planG65NonHHD: 213.00,
    marketLow: 129.92,
    marketHigh: 284.86,
    marketMedian: 179.97,
    marketCarriers: 28,
    rank: 22,
    pctVsLow: 63.9,
    recentFilings: [
      { date: "2023-07-01", pct: 5.00 },
      { date: "2024-04-15", pct: 12.50 },
      { date: "2025-06-15", pct: 25.00 },
    ],
    lossRatioTrend: [
      { year: 2023, lives: 42924, lossRatio: 1.03 },
      { year: 2024, lives: 37893, lossRatio: 0.95 },
      { year: 2025, lives: 65638, lossRatio: 0.97 },
    ],
    verdict: "Worst value in our review. Mutual of Omaha Plan G in Texas is 63.9% more expensive than the cheapest Plan G ($213 vs $130) — for identical federally-standardized benefits. The +25% filing effective June 2025 followed +12.5% in 2024 and +5% in 2023, an escalating cadence. Loss ratio still at 97% in 2025 despite the hikes. The Texas Medigap market has 28 carriers; Mutual of Omaha ranks 22nd. Strongly compare alternatives.",
    verdictTone: "avoid",
  },
];

function verdictClasses(tone: string): string {
  switch (tone) {
    case "avoid": return "bg-red-50 border-l-4 border-red-400 text-red-900";
    case "caution": return "bg-amber-50 border-l-4 border-amber-400 text-amber-900";
    case "ok": return "bg-green-50 border-l-4 border-green-400 text-green-900";
    case "info": return "bg-blue-50 border-l-4 border-blue-400 text-blue-900";
    default: return "bg-gray-50 border-l-4 border-gray-400 text-gray-900";
  }
}

export default function MutualOfOmahaMedigapReviewPage() {
  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />

      <nav className="max-w-6xl mx-auto px-4 pt-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/medicare-supplement" className="hover:text-blue-600">Medicare Supplement</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-900 font-medium">Mutual of Omaha Medigap Review</span>
      </nav>

      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Mutual of Omaha Medigap Review {MF.year}: Four Companies, One Brand &mdash; State-by-State Report
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              By <strong>Anthony Orner</strong>, Licensed Medicare Insurance Broker · Data as of {DATA_AS_OF}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6 mt-4">
              Mutual of Omaha Medicare Supplement policies are issued by one of four legally
              separate insurance companies under the Mutual of Omaha brand, depending on your
              state: <strong>Mutual of Omaha Insurance Company</strong>, <strong>United of Omaha
              Life Insurance Company</strong>, <strong>Omaha Insurance Company</strong>, or{" "}
              <strong>Omaha Supplemental Insurance Company</strong>. All four carry an AM Best A+
              (Stable) financial strength rating.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              The Mutual of Omaha brand has the highest name recognition of any Medigap carrier we
              cover. The pricing data does not match the brand reputation. Across every state we
              reviewed with current quote data, Mutual of Omaha Plan G is{" "}
              <strong>38% to 64% more expensive than the cheapest Plan G in the same state</strong>{" "}
              for identical federally-standardized benefits. Recent rate increases of +19% to +30%
              have hit Mutual of Omaha policyholders in 2024-2025, with loss ratios still near or
              above 100% &mdash; meaning more rate pressure is likely.
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
              <li><strong>Four legal entities:</strong> NAIC 71412, 69868, 13100, 16537</li>
              <li><strong>AM Best:</strong> A+ (Stable) on all four</li>
              <li><strong>Rate type:</strong> Attained-age in every state</li>
              <li><strong>Premium vs. cheapest Plan G:</strong> +38% to +64%</li>
              <li><strong>Recent rate filings:</strong> +19% PA, +30% OH, +25% NC, +25% TX</li>
              <li><strong>Loss ratios:</strong> 95%-97% in 4 of 5 states</li>
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
            Why Mutual of Omaha Has Four Companies (And Why It Matters)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            When you receive a Mutual of Omaha Plan G or Plan N quote, your policy is issued by
            one of four legal entities depending on your state of residence. They share the
            Mutual of Omaha brand and the same A+ AM Best financial strength rating &mdash; but
            they have different NAIC company codes, different rate-filing histories, and
            different loss-ratio trajectories. The brand reputation is consistent across the
            family. The pricing and rate-history experience is not.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            More importantly: the data is not flattering. Across every state we have current
            quote data for, Mutual of Omaha Plan G is the most expensive single carrier we cover
            in our reviews. The Texas premium of $213/month at age 65 is{" "}
            <strong>$83 above the cheapest Plan G</strong> in the state for the same benefits;
            over 20 years of attained-age increases that gap compounds into tens of thousands of
            dollars. The brand recognition does not translate to better coverage &mdash; all
            Medigap plan letters are federally standardized.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Loss ratios &mdash; claims paid divided by premiums collected &mdash; tell us why
            rates keep rising. When a carrier's loss ratio approaches or exceeds 100% in a state,
            they are losing money on that block of business and will file for a rate increase.
            Healthy policyholders shop around and switch out, leaving the sicker pool, raising
            the loss ratio further. Mutual of Omaha's loss ratios across the family are
            consistently 86%-97% in 2025 in our reviewed states despite three years of rate
            hikes. That suggests pricing has not caught up to claims experience and more
            increases are likely.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Four Mutual of Omaha Medigap Companies</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-3">Mutual of Omaha Insurance Company</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li><strong>NAIC:</strong> 71412</li>
              <li><strong>Established:</strong> 1966</li>
              <li><strong>AM Best:</strong> A+ (Stable)</li>
              <li><strong>Issues Medigap in our review:</strong> Texas (and New Jersey, off-sample)</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-3">United of Omaha Life Insurance Company</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li><strong>NAIC:</strong> 69868</li>
              <li><strong>Established:</strong> 2008</li>
              <li><strong>AM Best:</strong> A+ (Stable)</li>
              <li><strong>Issues Medigap in our review:</strong> Pennsylvania</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-3">Omaha Insurance Company</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li><strong>NAIC:</strong> 13100</li>
              <li><strong>Established:</strong> 2012</li>
              <li><strong>AM Best:</strong> A+ (Stable)</li>
              <li><strong>Issues Medigap in our review:</strong> North Carolina</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-3">Omaha Supplemental Insurance Company</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li><strong>NAIC:</strong> 16537</li>
              <li><strong>Established:</strong> 2019</li>
              <li><strong>AM Best:</strong> A+ (Stable)</li>
              <li><strong>Issues Medigap in our review:</strong> Ohio</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 bg-amber-50 border-l-4 border-amber-400 p-4 text-sm text-amber-900">
          <strong>About attained-age pricing:</strong> Every Mutual of Omaha entity uses
          attained-age pricing. Your premium increases every year as you age, in addition to any
          filed rate increase. Over a 15-20 year Medigap tenure, attained-age pricing compounds
          dramatically versus issue-age or community-rated alternatives.
        </div>
      </section>

      <section className="bg-blue-50 border-y border-blue-100 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">State-by-State Report Cards</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Each card shows current Plan G premium for a 65-year-old female non-tobacco user,
            Mutual of Omaha&apos;s market rank, every filed rate increase in our data, and the
            loss-ratio trend. As of {DATA_AS_OF} via CSG Actuarial.
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
                      <div className="text-gray-500 text-xs uppercase tracking-wide">Plan G @ 65 F</div>
                      <div className="text-2xl font-bold text-gray-900">
                        {s.planG65NonHHD != null ? `$${s.planG65NonHHD.toFixed(2)}/mo` : "Not in sample"}
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs uppercase tracking-wide">Market Spread</div>
                      <div className="text-lg font-semibold text-gray-900">${s.marketLow.toFixed(2)} &ndash; ${s.marketHigh.toFixed(2)}</div>
                      <div className="text-xs text-gray-500">Median ${s.marketMedian.toFixed(2)} &middot; {s.marketCarriers} carriers</div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs uppercase tracking-wide">Mutual of Omaha Rank</div>
                      <div className="text-2xl font-bold text-gray-900">
                        {s.rank != null ? `${s.rank}` : "—"}
                        {s.rank != null && <span className="text-base text-gray-500 font-normal"> of {s.marketCarriers}</span>}
                      </div>
                      <div className="text-xs text-gray-500">
                        {s.pctVsLow != null ? `+${s.pctVsLow}% above cheapest Plan G` : "Quote unavailable in sample"}
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Filed Rate Increases ({s.name}, Plan G)</h4>
                    {s.recentFilings.length === 0 ? (
                      <p className="text-sm text-gray-700">No rate increases on file with CSG for the Plan G product line in {s.name} as of {DATA_AS_OF} (the entity has a small Medigap block in NJ but no recent state filings in our data).</p>
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
                                <td className={`px-3 py-2 font-semibold ${f.pct >= 15 ? "text-red-700" : "text-gray-800"}`}>
                                  +{f.pct}%
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Plan G and Plan N with Mutual of Omaha</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Mutual of Omaha offers Plan G, Plan N, and High-Deductible Plan G across most of its
          state footprint. Because all Medigap plan letters are federally standardized, a Mutual
          of Omaha Plan G covers the same services as any other carrier&apos;s Plan G. The only
          differences are premium, rate-increase history, and the underlying legal entity issuing
          your policy.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Mutual of Omaha&apos;s competitive advantage isn&apos;t price &mdash; the data shows
          they consistently price well above the state-by-state market low. Their advantage is
          brand recognition, A+ financial strength, and a household discount that varies by state
          (typically 7-12% when both spouses enroll). For consumers who value the brand and are
          willing to pay 38-64% above the cheapest carrier for the same benefits, Mutual of Omaha
          is a defensible choice. For shoppers comparing on cost and rate stability, the data
          points elsewhere.
        </p>
      </section>

      <section className="bg-green-50 border-y border-green-100 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Apply for Mutual of Omaha Medigap</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Because Mutual of Omaha&apos;s pricing is consistently above the state-by-state Plan G
            cheapest, we recommend running a full multi-carrier comparison before choosing. If
            after seeing the alternatives you still prefer Mutual of Omaha for the brand
            recognition and A+ rating, that&apos;s a defensible choice &mdash; but make it with
            full visibility into what you&apos;re paying versus the available options.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Applying online at healthplans.now takes most people under 15 minutes and compares
            Mutual of Omaha alongside every other carrier in your area. Federal law gives you a{" "}
            <strong>30-day free look period</strong> after any Medigap policy is issued; you can
            review and cancel for a full refund of premium paid.
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

      <PhoneCTA label="Questions About Mutual of Omaha Medigap? Talk to a Licensed Broker" />

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
