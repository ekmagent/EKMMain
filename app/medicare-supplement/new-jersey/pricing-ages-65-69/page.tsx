import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { SITE_URL } from "@/lib/site";
import { getSnapshot, formatUsd, type CsgAgeEntry } from "@/lib/csg-snapshot";

export const metadata: Metadata = {
  title: "NJ Medicare Supplement Pricing Ages 65–69 (2026)",
  description:
    "2026 New Jersey Medigap premium spreads for ages 65–69, verified against CSG Actuarial rate filings. See the carrier-by-carrier price gap for identical Plan G and Plan N coverage. Call 855-559-1700.",
  alternates: { canonical: `${SITE_URL}/medicare-supplement/new-jersey/pricing-ages-65-69` },
  openGraph: {
    title: "NJ Medicare Supplement Pricing Ages 65–69 (2026)",
    description:
      "See the 2026 Plan G and Plan N premium spread across every licensed carrier in New Jersey for ages 65, 67, and 69. Verified against CSG Actuarial rate filings.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://medicareyourself.com" },
    { "@type": "ListItem", position: 2, name: "Medicare Supplement", item: "https://medicareyourself.com/medicare-supplement" },
    { "@type": "ListItem", position: 3, name: "New Jersey", item: "https://medicareyourself.com/medicare-supplement/new-jersey" },
    {
      "@type": "ListItem",
      position: 4,
      name: "Pricing for Ages 65–69",
      item: "https://medicareyourself.com/medicare-supplement/new-jersey/pricing-ages-65-69",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "New Jersey Medicare Supplement Pricing for Ages 65–69 (2026)",
  description:
    "CSG Actuarial–verified Medigap premium spreads for New Jersey across Plan G and Plan N at ages 65, 67, and 69.",
  datePublished: "2026-04-21",
  dateModified: "2026-04-21",
  author: {
    "@type": "Person",
    name: "Anthony Orner",
    url: "https://medicareyourself.com/about",
  },
  publisher: {
    "@type": "Organization",
    name: "MedicareYourself",
    url: "https://medicareyourself.com",
  },
};

const faqs = [
  {
    question: "How much does Plan G cost in New Jersey in 2026?",
    answer:
      "2026 Plan G premiums in New Jersey vary substantially across carriers for federally-identical coverage. The spread reflects differences in carrier pricing methodology (community-rated, issue-age-rated, and attained-age-rated carriers all operate in NJ), rate-increase history, and available household discounts. Comparing every licensed carrier is the only reliable way to find the lowest rate for your specific situation.",
  },
  {
    question: "Does Plan G cost the same at 65 as it does at 69 in New Jersey?",
    answer:
      "It depends on the carrier. New Jersey has a mix of Medigap pricing methodologies: community-rated carriers charge everyone the same regardless of age, issue-age-rated carriers lock your rate at the age you enrolled, and attained-age-rated carriers increase premiums every year as you age. A 69-year-old can pay significantly more for the same Plan G coverage from an attained-age carrier than a 65-year-old pays from the same carrier.",
  },
  {
    question: "What is the typical spread between the cheapest and most expensive Plan G in NJ?",
    answer:
      "The spread between the lowest and highest Plan G premium for the same New Jersey enrollee routinely exceeds $100 per month, and in many cases $300 or more — for coverage that is federally standardized and covers the exact same services. Over a 20-year Medigap enrollment, that gap compounds into tens of thousands of dollars in preventable spending. This is why carrier comparison is the single highest-leverage decision in Medigap shopping.",
  },
  {
    question: "Can I get a household discount on my NJ Medigap plan?",
    answer:
      "Most carriers licensed in New Jersey offer a household discount of 5% to 14% off the monthly premium. Eligibility varies by carrier: some require both spouses to apply, some accept civil unions or cohabitation, and some only require another adult in the household to have (or be applying for) coverage with any Medigap carrier. Because the rules differ, the discount is often missed by applicants going direct to a single insurer.",
  },
  {
    question: "Does New Jersey charge smokers more for Medigap during open enrollment?",
    answer:
      "No. New Jersey is one of the few states that prohibits tobacco rate differentials during the Medigap Open Enrollment Period. If you enroll during your 6-month OEP (the six months starting when you are both 65 and enrolled in Part B), tobacco and non-tobacco applicants pay the same rate for the same Plan G or Plan N coverage. Outside OEP, tobacco rating may apply with medical underwriting.",
  },
  {
    question: "How many Medigap carriers are licensed in New Jersey?",
    answer:
      "More than 20 carriers actively file Medigap rates in New Jersey, offering standardized Plan A, B, C, D, F, G, HDF, K, L, M, and N policies. Each carrier prices the same federally-standardized coverage differently based on their book of business, rate-filing history, and pricing methodology. Not every carrier offers every plan letter, and not every carrier is available in every ZIP code.",
  },
  {
    question: "What is the difference between Plan G and Plan N pricing in New Jersey?",
    answer:
      "Plan N premiums typically run $20 to $40 per month lower than Plan G from the same carrier. Plan N adds small copays (up to $20 per office visit and up to $50 per ER visit) and does not cover Part B excess charges, but otherwise provides comparable coverage. If you rarely visit specialists and your preferred providers do not charge excess fees, Plan N often delivers better monthly value than Plan G.",
  },
  {
    question: "How often do New Jersey Medigap carriers raise rates?",
    answer:
      "Most Medigap carriers in New Jersey file rate adjustments annually. The size and frequency of increases vary widely — some carriers have maintained flat rates for 2+ consecutive years while others raise rates 5% to 10% every cycle. A broker can pull rate-increase history from the CSG Actuarial database and show you which carriers have the most stable pricing before you commit.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

type AgeTableRow = { age: string; data: CsgAgeEntry };

function AgeTable({ rows, planLabel }: { rows: AgeTableRow[]; planLabel: string }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-gray-50 text-gray-700">
          <tr>
            <th className="text-left px-4 py-3 font-semibold">Age</th>
            <th className="text-right px-4 py-3 font-semibold">Lowest</th>
            <th className="text-right px-4 py-3 font-semibold">Highest</th>
            <th className="text-right px-4 py-3 font-semibold">Spread</th>
            <th className="text-right px-4 py-3 font-semibold">Carriers</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ age, data }) => (
            <tr key={age} className="border-t border-gray-100">
              <td className="px-4 py-3 font-medium text-gray-900">{planLabel}, age {age}</td>
              <td className="px-4 py-3 text-right text-gray-900">{formatUsd(data.low)}/mo</td>
              <td className="px-4 py-3 text-right text-gray-900">{formatUsd(data.high)}/mo</td>
              <td className="px-4 py-3 text-right font-semibold text-blue-700">{formatUsd(data.spread)}/mo</td>
              <td className="px-4 py-3 text-right text-gray-600">{data.carrierCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function NJPricingAges65to69Page() {
  const snapshot = getSnapshot();
  const nj = snapshot?.states?.NJ;
  const planG = nj?.plans?.G ?? {};
  const planN = nj?.plans?.N ?? {};

  const gRows: AgeTableRow[] = ["65", "67", "69"]
    .filter((a) => planG[a])
    .map((a) => ({ age: a, data: planG[a] }));
  const nRows: AgeTableRow[] = ["65", "67", "69"]
    .filter((a) => planN[a])
    .map((a) => ({ age: a, data: planN[a] }));

  const headlineSpread = gRows.length > 0
    ? `$${Math.min(...gRows.map((r) => r.data.low)).toFixed(0)} to $${Math.max(...gRows.map((r) => r.data.high)).toFixed(0)}`
    : null;
  const headlineCarrierCount = gRows.length > 0
    ? Math.max(...gRows.map((r) => r.data.carrierCount))
    : null;
  const headlineSpreadDollars = gRows.length > 0
    ? (Math.max(...gRows.map((r) => r.data.high)) - Math.min(...gRows.map((r) => r.data.low))).toFixed(0)
    : null;

  const hhdPoints = gRows
    .map((r) => r.data.hhd)
    .filter((h) => h.carriersOffering > 0);
  const hhdMinPct = hhdPoints.length
    ? Math.min(...hhdPoints.map((h) => h.minDiscountPct ?? Infinity).filter((n) => Number.isFinite(n)))
    : null;
  const hhdMaxPct = hhdPoints.length
    ? Math.max(...hhdPoints.map((h) => h.maxDiscountPct ?? -Infinity).filter((n) => Number.isFinite(n)))
    : null;
  const hhdCarriers = hhdPoints.length
    ? Math.max(...hhdPoints.map((h) => h.carriersOffering))
    : null;

  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema, faqSchema]} />

      <nav className="max-w-4xl mx-auto px-4 pt-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/medicare-supplement/new-jersey" className="hover:text-blue-600">New Jersey</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-900 font-medium">Pricing for Ages 65–69</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          New Jersey Medicare Supplement Pricing for Ages 65–69 (2026)
        </h1>
        <p className="text-sm text-gray-500 mb-1">
          By <strong className="text-gray-600">Anthony Orner</strong>, Licensed Medicare Insurance Broker
        </p>
        {snapshot?.asOfDate ? (
          <p className="text-xs text-gray-400 mb-6">
            Verified against CSG Actuarial rate filings · Updated {snapshot.asOfDate} · Sample ZIP {nj?.sampleZip}, {nj?.sampleCity}
          </p>
        ) : (
          <p className="text-xs text-gray-400 mb-6">Last reviewed: April 2026</p>
        )}

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Medicare Supplement (Medigap) benefits are set by federal law — a Plan G from any
          licensed New Jersey carrier covers the exact same services as Plan G from any other
          carrier, at the same doctor&apos;s offices and hospitals, with the same claims
          process. What differs is the monthly premium, the rate-increase history, and the
          discounts the carrier offers. This page shows the 2026 spread across every licensed
          carrier in New Jersey for ages 65, 67, and 69.
        </p>

        {headlineSpread && headlineCarrierCount && headlineSpreadDollars ? (
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-8">
            <p className="text-sm font-semibold text-blue-900 mb-1">2026 NJ Plan G Spread</p>
            <p className="text-2xl font-bold text-gray-900 mb-2">
              {headlineSpread}/month across {headlineCarrierCount} carriers
            </p>
            <p className="text-sm text-gray-700">
              A ${headlineSpreadDollars}/month gap between the cheapest and most expensive
              Plan G in New Jersey — for coverage that is federally identical. Over 20 years of
              Medigap enrollment, that gap compounds into six figures of preventable spending.
            </p>
          </div>
        ) : (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
            <p className="text-sm font-semibold text-amber-900 mb-1">Live NJ Plan G Spread</p>
            <p className="text-gray-700 text-sm">
              2026 NJ Medigap rate data refreshes weekly from the CSG Actuarial rate-filing
              database. For your current carrier-by-carrier spread at your age and ZIP code,
              call 855-559-1700 — we pull every licensed carrier in one call.
            </p>
          </div>
        )}

        <div className="my-8 bg-gray-900 text-white rounded-xl p-6 text-center">
          <p className="font-bold text-lg mb-2">See the full carrier-by-carrier breakdown</p>
          <p className="text-gray-300 text-sm mb-4">
            Every licensed NJ Medigap carrier, every discount you qualify for, every rate-increase history — in one phone call. No cost.
          </p>
          <PhoneCTA label="Call for NJ Carrier Comparison" />
        </div>

        {gRows.length > 0 && (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
              Plan G Premium Spread by Age
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Plan G is the most comprehensive plan available to anyone newly eligible for
              Medicare in 2026 — it covers everything Original Medicare leaves behind except
              the annual Part B deductible ($283). The table below shows the monthly premium
              spread across every licensed Plan G carrier in New Jersey for ages 65, 67, and 69.
            </p>
            <AgeTable rows={gRows} planLabel="Plan G" />
            <p className="text-xs text-gray-500 mt-2 mb-6">
              Source: CSG Actuarial rate filings, {snapshot?.asOfDate}. Sample ZIP {nj?.sampleZip}, {nj?.sampleCity}. In-state rates may vary by rating area.
            </p>
          </>
        )}

        {nRows.length > 0 && (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
              Plan N Premium Spread by Age
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Plan N trades lower premiums for small copays (up to $20 per office visit and up
              to $50 per ER visit) and does not cover Part B excess charges. For enrollees who
              rarely see specialists and whose providers do not charge excess fees, Plan N is
              frequently the best monthly value in the NJ market.
            </p>
            <AgeTable rows={nRows} planLabel="Plan N" />
            <p className="text-xs text-gray-500 mt-2 mb-6">
              Source: CSG Actuarial rate filings, {snapshot?.asOfDate}. Sample ZIP {nj?.sampleZip}, {nj?.sampleCity}.
            </p>
          </>
        )}

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
          Why the Price Gap Is So Wide in New Jersey
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          New Jersey allows Medigap carriers to use three different pricing methodologies in
          parallel, and the mix is the single biggest driver of the premium spread:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>
            <strong>Community-rated carriers</strong> charge every enrollee the same base rate
            regardless of age. Older applicants benefit most; the youngest applicants often
            find these carriers priced higher than age-based alternatives.
          </li>
          <li>
            <strong>Issue-age-rated carriers</strong> lock your rate at the age you enrolled.
            Applying at 65 and holding the same plan for 15 years means no age-based premium
            increases — only general rate adjustments.
          </li>
          <li>
            <strong>Attained-age-rated carriers</strong> raise your premium every year as you
            age. These carriers often offer the cheapest Plan G at 65 and the most expensive
            at 75. The cheapest Plan G today is not always the cheapest Plan G at age 75.
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-6">
          Because these methodologies coexist in NJ, the 2026 Plan G premium for a single
          67-year-old enrollee can differ by hundreds of dollars a month depending solely on
          which carrier issued the policy. A broker can show you not just today&apos;s rates
          but the projected rates over the next 10 years based on each carrier&apos;s
          pricing methodology and historical rate-adjustment pattern.
        </p>

        {hhdMinPct !== null && hhdMaxPct !== null && hhdCarriers !== null ? (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
              The Household Discount Most NJ Applicants Miss
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {hhdCarriers} of the licensed NJ Medigap carriers offer a household discount,
              ranging from {hhdMinPct}% to {hhdMaxPct}% off the standard monthly premium.
              Eligibility rules vary by carrier: some require marriage, some accept civil
              unions, some accept cohabitation, and some only require another adult in the
              household to have (or be applying for) Medigap coverage with any carrier.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Because the eligibility rules differ carrier by carrier, this discount is
              routinely missed by applicants going direct to a single insurer&apos;s website.
              It is the second-largest lever after carrier selection itself.
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
              The Household Discount Most NJ Applicants Miss
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Most NJ Medigap carriers offer a household discount in the 5%–14% range off the
              standard monthly premium. Eligibility rules vary by carrier: some require
              marriage, some accept civil unions or cohabitation, and some only require
              another adult in the household to have (or be applying for) Medigap coverage
              with any carrier. Because the rules differ, the discount is routinely missed by
              applicants going direct to a single insurer.
            </p>
          </>
        )}

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
          New Jersey–Specific Protections
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>
            <strong>Tobacco-neutral during OEP.</strong> New Jersey is one of the few states
            that prohibits tobacco rate differentials during the Medigap Open Enrollment
            Period. If you enroll during your 6-month OEP, tobacco and non-tobacco applicants
            pay the same rate for identical coverage.
          </li>
          <li>
            <strong>Under-65 Medigap access.</strong> New Jersey requires carriers to offer
            Medigap policies to beneficiaries under 65 who are on Medicare due to disability,
            with specific access windows tied to Part B enrollment. This is not federally
            required — many states do not have this protection.
          </li>
          <li>
            <strong>Standard federal 6-month OEP only.</strong> NJ does not have year-round
            guaranteed-issue access like New York or Connecticut. The 6-month window that
            starts when you are both 65 and enrolled in Part B is still the most important
            timing decision in NJ Medigap shopping.
          </li>
        </ul>

        <div className="my-8 bg-gray-900 text-white rounded-xl p-6 text-center">
          <p className="font-bold text-lg mb-2">Get your ZIP-specific quote in one call</p>
          <p className="text-gray-300 text-sm mb-4">
            Rates vary by NJ rating area. Call to see every licensed carrier at your age, your ZIP, with every discount you qualify for.
          </p>
          <PhoneCTA label="Call for NJ Quote" />
        </div>

        <div className="mb-10">
          <FAQSection faqs={faqs} title="New Jersey Medigap Pricing FAQ" />
        </div>

        <div className="my-8 bg-blue-700 text-white rounded-xl p-6 text-center">
          <p className="font-bold text-lg mb-2">Ready to compare carriers?</p>
          <p className="text-blue-100 text-sm mb-4">
            Every NJ-licensed carrier, every discount, every rate-increase history — in one phone call. Free to you.
          </p>
          <PhoneCTA label="Start Your NJ Comparison" variant="secondary" />
        </div>

        <div className="bg-gray-50 rounded-xl p-6 text-sm border border-gray-100 mb-8">
          <p className="font-semibold text-gray-900 mb-2">Related NJ Medigap guides</p>
          <ul className="space-y-1 text-gray-600">
            <li>
              <Link href="/medicare-supplement/new-jersey" className="text-blue-600 hover:underline">
                Best Medicare Supplement Plans in New Jersey (2026)
              </Link>
            </li>
            <li>
              <Link href="/medicare-supplement/new-jersey/cost" className="text-blue-600 hover:underline">
                Medicare Supplement Cost in NJ
              </Link>
            </li>
            <li>
              <Link href="/medicare-supplement/new-jersey/plan-g-vs-plan-n" className="text-blue-600 hover:underline">
                Plan G vs Plan N in New Jersey
              </Link>
            </li>
            <li>
              <Link href="/medicare-supplement/new-jersey/turning-65" className="text-blue-600 hover:underline">
                Turning 65 in New Jersey
              </Link>
            </li>
            <li>
              <Link href="/learn/how-to-enroll-in-a-medicare-supplement-plan" className="text-blue-600 hover:underline">
                How to Enroll in a Medicare Supplement Plan
              </Link>
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 text-sm text-gray-600 border border-gray-100">
          <p className="font-semibold text-gray-900 mb-1">Data source &amp; methodology</p>
          <p className="mb-2">
            Premium spreads on this page are pulled from the CSG Actuarial rate-filing
            database — the same source licensed Medigap brokers use to compare carriers. The
            snapshot reflects sample-ZIP rates for Female applicants non-tobacco at ages 65,
            67, and 69 in {nj?.sampleCity ?? "New Jersey"}. In-state rates can vary by rating
            area; call for your ZIP-specific quote.
          </p>
          <p className="text-xs text-gray-400">
            MedicareYourself (EasyKind Medicare) is an independent brokerage licensed in NJ and 34 states.
            We are not affiliated with Medicare, CMS, or any insurance carrier.
          </p>
        </div>
      </article>
    </>
  );
}
