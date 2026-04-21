import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Plan G Rates by Age in New Jersey | 2026 Costs | MedicareYourself",
  description:
    "See real Plan G rates for ages 65-70+ in New Jersey. Anthony Orner compares top carriers by age to find your lowest rate. Free quote in 2 minutes.",
  alternates: { canonical: `${SITE_URL}/services/plan-g-rates-by-age-new-jersey` },
  openGraph: {
    title: "Plan G Rates by Age in New Jersey | 2026 Costs | MedicareYourself",
    description:
      "See real Plan G rates for ages 65-70+ in New Jersey. Anthony Orner compares top carriers by age to find your lowest rate. Free quote in 2 minutes.",
  },
};

const faqs = [
  {
    question: "How much does Plan G cost for a 65-year-old in New Jersey?",
    answer:
      "Plan G rates for a 65-year-old in New Jersey range from about $125 to $210 per month depending on the carrier, your county, and whether you use tobacco. During your Medigap Open Enrollment Period (first 6 months after enrolling in Part B), carriers cannot charge more based on health conditions.",
  },
  {
    question: "Do Plan G rates increase as you get older in NJ?",
    answer:
      "It depends on the carrier's pricing method. Most NJ carriers use attained-age rating, meaning premiums increase as you age. A few use issue-age rating, where the rate is based on your age when you first buy the policy and only increases due to inflation — not aging. Issue-age carriers tend to cost more upfront but less over time.",
  },
  {
    question: "Can I switch Plan G carriers at age 70 in New Jersey?",
    answer:
      "Yes. You can apply to switch Medigap carriers at any time of year — there is no annual enrollment period for Medigap. Outside your initial 6-month Open Enrollment Period, carriers may use medical underwriting. If you are in good health, switching is usually straightforward. Call to check which carriers are accepting applications in your county.",
  },
  {
    question: "Why are Plan G rates different in different NJ counties?",
    answer:
      "Carriers price Medigap policies by rating area, which often aligns with counties. Northern NJ counties like Bergen, Essex, and Morris tend to have higher premiums than southern NJ counties like Cape May and Cumberland. The coverage is identical everywhere — only the price differs.",
  },
  {
    question: "Is Plan G worth it at age 70?",
    answer:
      "For most people, yes. At 70 you are more likely to use medical services, and Plan G covers everything except the $257 annual Part B deductible. Without Plan G, you would pay 20% of all Part B services with no out-of-pocket cap. One hospital stay or surgery could cost thousands. The predictable monthly premium protects against unpredictable bills.",
  },
];

export default function PlanGRatesByAgeNJPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medicareyourself.com" },
      { "@type": "ListItem", position: 2, name: "Medicare Guides", item: "https://medicareyourself.com/services" },
      { "@type": "ListItem", position: 3, name: "Plan G Rates by Age in NJ", item: "https://medicareyourself.com/services/plan-g-rates-by-age-new-jersey" },
    ],
  };

  /* ── Rate data — NJ DOBI published rates, rounded to nearest $5 ───── */
  const rates = [
    { age: "65", low: "$125", mid: "$165", high: "$210" },
    { age: "66", low: "$130", mid: "$170", high: "$220" },
    { age: "67", low: "$135", mid: "$180", high: "$230" },
    { age: "68", low: "$140", mid: "$185", high: "$240" },
    { age: "69", low: "$150", mid: "$195", high: "$250" },
    { age: "70", low: "$155", mid: "$200", high: "$260" },
  ];

  return (
    <>
      <SchemaMarkup schema={breadcrumb} />

      <nav className="max-w-6xl mx-auto px-4 pt-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">&rsaquo;</span>
        <Link href="/services" className="hover:text-blue-600">Medicare Guides</Link>
        <span className="mx-2">&rsaquo;</span>
        <span className="text-gray-900 font-medium">Plan G Rates by Age in NJ</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Plan G Rates by Age in New Jersey: What You Will Actually Pay
        </h1>
        <p className="text-xs text-gray-400 mb-6">Last reviewed: March 2026 · Source: NJ DOBI rate filings</p>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-1">Quick answer</p>
          <p className="text-gray-700">
            Plan G in New Jersey costs between <strong>$125 and $260 per month</strong> depending on your age, carrier, and county. A 65-year-old typically pays $125–$210. By age 70, expect $155–$260. The cheapest carrier at 65 is not always the cheapest at 70 — comparing by age matters.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Plan G Monthly Premiums for Ages 65 to 70 in NJ</h2>
        <p className="text-gray-600 mb-4">
          These ranges reflect non-tobacco rates from major carriers filing in New Jersey. Your actual rate depends on your specific zip code, gender, and carrier.
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="text-left px-4 py-3">Age</th>
                <th className="text-left px-4 py-3">Lowest Rate</th>
                <th className="text-left px-4 py-3">Mid-Range</th>
                <th className="text-left px-4 py-3">Highest Rate</th>
              </tr>
            </thead>
            <tbody>
              {rates.map((row, i) => (
                <tr key={row.age} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-medium text-gray-900 border-b border-gray-100">{row.age}</td>
                  <td className="px-4 py-3 text-green-700 font-semibold border-b border-gray-100">{row.low}</td>
                  <td className="px-4 py-3 text-blue-700 font-semibold border-b border-gray-100">{row.mid}</td>
                  <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{row.high}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mb-8">
          Rates shown are monthly, non-tobacco, female. Male rates are typically 5–15% higher. Rates rounded to nearest $5 from NJ DOBI filings.
        </p>

        <div className="my-8 bg-gray-900 text-white rounded-xl p-6 text-center">
          <p className="font-bold text-lg mb-2">Get your exact Plan G rate for your age and zip code</p>
          <p className="text-gray-300 text-sm mb-4">Free comparison across all carriers in your NJ county. Takes 2 minutes.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PhoneCTA label="Call for My Rate" />
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-lg transition-colors"
            >
              Get a Free Quote Online
            </Link>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Plan G Rates Vary by Age and Carrier</h2>
        <p className="text-gray-700 mb-4">
          Two factors drive the difference: <strong>rating method</strong> and <strong>carrier pricing</strong>. Most NJ carriers use attained-age rating — your premium goes up as you age. A few use issue-age rating, where your rate is locked to the age you first enrolled and only rises with inflation.
        </p>
        <p className="text-gray-700 mb-4">
          At age 65, attained-age carriers are usually cheaper. By age 72–75, issue-age carriers often cost less because their rates have not climbed with age. Which is better for you depends on how long you plan to keep the policy.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Get the Lowest Plan G Rate in New Jersey</h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-8">
          <li><strong>Enroll during Open Enrollment.</strong> Your first 6 months on Part B give you guaranteed-issue rights — no health questions, no rate surcharges.</li>
          <li><strong>Compare at least 5 carriers.</strong> The cheapest Plan G carrier varies by county and age. A $30/month difference adds up to $360/year.</li>
          <li><strong>Ask about household discounts.</strong> Many carriers offer 5–12% off if your spouse also has a Medigap policy.</li>
          <li><strong>Consider issue-age carriers if you are under 68.</strong> Higher initial premium but lower lifetime cost.</li>
          <li><strong>Work with an independent broker.</strong> We compare every carrier in your zip code at no cost to you — carriers pay us, not you.</li>
        </ol>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Enroll in Plan G at Any Age</h2>
        <p className="text-gray-700 mb-4">
          If you are within your 6-month Medigap Open Enrollment window (starts when you turn 65 and enroll in Part B), you can enroll in any Plan G policy with no health questions. Outside that window, most carriers require medical underwriting.
        </p>
        <p className="text-gray-700 mb-4">
          If you are in good health, switching carriers at any age is usually straightforward — even at 70. I pre-screen your health history before submitting any application so you know where you stand. Call to check which carriers are accepting applications in your county.
        </p>

        <div className="my-8 bg-blue-700 text-white rounded-xl p-6 text-center">
          <p className="font-bold text-lg mb-2">Not sure which carrier has the best rate for your age?</p>
          <p className="text-blue-100 text-sm mb-4">Anthony compares every Plan G carrier in your NJ zip code — free, no obligation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PhoneCTA label="Call Anthony" variant="secondary" />
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-lg transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>

        <FAQSection faqs={faqs} title="Plan G Rates in New Jersey — FAQ" />

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-2">Related guides:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/medicare-supplement/new-jersey/cost" className="text-blue-600 hover:underline text-sm">Medicare Costs in NJ 2026</Link>
            <Link href="/medicare-supplement/new-jersey/plan-g-vs-plan-n" className="text-blue-600 hover:underline text-sm">Plan G vs Plan N in NJ</Link>
            <Link href="/medicare-supplement/new-jersey/turning-65" className="text-blue-600 hover:underline text-sm">Turning 65 in NJ</Link>
            <Link href="/medicare-supplement/switch-carriers" className="text-blue-600 hover:underline text-sm">How to Switch Carriers</Link>
          </div>
        </div>
      </article>
    </>
  );
}
