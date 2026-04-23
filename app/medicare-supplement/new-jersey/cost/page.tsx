import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Medicare Supplement Cost in NJ 2026",
  description:
    "2026 NJ Medicare Supplement costs: Part B $202.90/mo, $283 deductible, Plan G rates by county. Compare NJ Medigap carriers — call 855-559-1700 for a free quote.",
  alternates: { canonical: `${SITE_URL}/medicare-supplement/new-jersey/cost` },
  openGraph: {
    title: "Medicare Supplement Cost in NJ 2026",
    description:
      "Medicare Supplement costs in NJ for 2026: Part B premiums, Plan G rates by carrier, and out-of-pocket estimates. Call 855-559-1700.",
  },
};

const faqs = [
  {
    question: "How much does Medicare cost per month in New Jersey in 2026?",
    answer:
      "The base cost of Medicare in New Jersey is the Part B premium of $202.90/month (2026), which everyone pays regardless of which plan they choose. If you add a Medigap Plan G, expect to pay an additional $130–$220/month depending on carrier and county — totaling roughly $315–$405/month for comprehensive coverage with no networks and near-zero out-of-pocket costs.",
  },
  {
    question: "Is Medicare free in New Jersey?",
    answer:
      "Medicare Part A (hospital insurance) is free for most people who worked and paid Medicare taxes for at least 10 years. Part B (medical insurance) costs $202.90/month in 2026. Part D (drug coverage) averages $30–$50/month. Medigap coverage is optional but eliminates most cost-sharing. There is no such thing as completely free comprehensive Medicare coverage.",
  },
  {
    question: "Why are Medigap premiums different across New Jersey counties?",
    answer:
      "Medigap premiums vary by county in New Jersey because insurers price by rating area. Northern NJ counties (Bergen, Morris, Essex) tend to have higher premiums than southern NJ counties (Cape May, Cumberland, Salem). The coverage is identical — only the price changes. Comparing carriers in your specific zip code is essential.",
  },
  {
    question: "Does New Jersey have income-based help paying for Medicare?",
    answer:
      "Yes. New Jersey has several assistance programs: the Medicare Savings Program (MSP) can pay your Part B premium if you qualify based on income. Extra Help (Low Income Subsidy) assists with Part D drug costs. The PAAD (Pharmaceutical Assistance to the Aged and Disabled) program helps NJ residents with prescription drug costs. Contact NJ SHIP at 1-800-792-8820 to check eligibility.",
  },
  {
    question: "What is the Medicare Part B deductible in New Jersey in 2026?",
    answer:
      "The Medicare Part B deductible is $283 in 2026 — this is a federal amount that applies nationwide, not NJ-specific. Plan G covers everything except this deductible. Plan F covers it entirely but is only available to those who became Medicare-eligible before January 1, 2020.",
  },
  {
    question: "Does New Jersey use community rating for Medigap premiums?",
    answer:
      "Yes. New Jersey uses community rating for Medicare Supplement plans, meaning premiums are not based on your individual age. Everyone enrolled in the same plan with the same carrier pays the same base rate, though prices can still differ by county and carrier. This generally keeps long-term costs more predictable than age-rated states.",
  },
  {
    question: "When is the best time to buy a Medigap plan in New Jersey to get the lowest cost?",
    answer:
      "The best time is during your 6-month Medigap Open Enrollment Period, which starts the month you are 65 or older and enrolled in Part B. During this window, you have guaranteed issue rights — carriers cannot deny you or charge more due to health. Outside this window, you may face medical underwriting. Call 855-559-1700 to review your options.",
  },
  {
    question: "What is the Part A hospital deductible in New Jersey for 2026?",
    answer:
      "The Medicare Part A hospital deductible is $1,676 per benefit period in 2026. This is a federal amount and applies in every state, including New Jersey. Medigap Plan G and Plan N both fully cover this deductible, which is one of the main reasons many NJ beneficiaries add a supplement.",
  },
,
  {
    question: "Do Medigap premiums in New Jersey increase each year?",
    answer:
      "Yes, Medigap premiums can increase over time due to inflation and rising healthcare costs, even in community-rated states like New Jersey. However, because NJ uses community rating, your premium will not increase solely because you get older. Rate changes apply to all policyholders in the same plan and area. Call 855-559-1700 to compare carriers with stable rate histories.",
  },
  {
    question: "Are Medicare Supplement benefits the same across all New Jersey carriers?",
    answer:
      "Yes. Medigap plans are standardized by the federal government, so Plan G from one carrier provides identical benefits as Plan G from another carrier. The only differences are the monthly premium, the insurer's customer service, and rate stability. This makes price shopping in New Jersey straightforward — same coverage, different cost.",
  }
];

export default function NJMedicareCostPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medicareyourself.com" },
      { "@type": "ListItem", position: 2, name: "Medicare Supplement NJ", item: "https://medicareyourself.com/medicare-supplement/new-jersey" },
      { "@type": "ListItem", position: 3, name: "Medicare Costs NJ 2026", item: "https://medicareyourself.com/medicare-supplement/new-jersey/cost" },
    ],
    dateModified: "2026-04-21",
  };

  return (
    <>
      <SchemaMarkup schema={breadcrumb} />
      <nav className="max-w-6xl mx-auto px-4 pt-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/medicare-supplement/new-jersey" className="hover:text-blue-600">Medicare Supplement NJ</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-900 font-medium">Medicare Costs in NJ 2026</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          How Much Does Medicare Cost in New Jersey in 2026?
        </h1>
        <p className="text-sm text-gray-500 mt-2">By <strong>Anthony Orner</strong>, Licensed Medicare Insurance Broker — NJ &amp; 34 states</p>
        <p className="text-xs text-gray-400 mb-6">Last reviewed: April 2026 · Sources: CMS.gov, NJ DOBI</p>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-2">2026 Cost Breakdown for NJ Medicare</p>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold text-gray-900">Monthly Costs</p>
              <p className="text-gray-700 mt-1"><strong>$202.90</strong> Part B premium</p>
              <p className="text-gray-700"><strong>$130–$220</strong> Plan G average</p>
              <p className="text-gray-700"><strong>~$40</strong> Part D drug plan</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Annual Deductibles</p>
              <p className="text-gray-700 mt-1"><strong>$283</strong> Part B (covered by Plan G)</p>
              <p className="text-gray-700"><strong>$1,676</strong> Part A per benefit period</p>
              <p className="text-gray-700"><strong>$0</strong> out-of-pocket with Plan G</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-1">Quick answer</p>
          <p className="text-gray-700">
            Most NJ residents with comprehensive Medigap coverage (Plan G) pay <strong>$333–$423/month total</strong> — that is the <a href="https://www.medicare.gov/your-medicare-costs/part-b-costs" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">$202.90 Part B premium</a> plus $130–$220 for Plan G. In return, they have near-zero out-of-pocket costs and can see any doctor in the US who accepts Medicare.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2026 Medicare Cost Summary — New Jersey</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="text-left px-4 py-3">Cost Item</th>
                <th className="text-left px-4 py-3">2026 Amount</th>
                <th className="text-left px-4 py-3">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Part A premium", "$0 for most", "Free if 40+ quarters of Medicare taxes"],
                ["Part A deductible (per benefit period)", "$1,676", "Covered by Plan G and Plan N"],
                ["Part B premium", "$202.90/month", "Federal standard; higher if IRMAA applies"],
                ["Part B deductible", "$283/year", "Covered by Plan G, not Plan N"],
                ["Medigap Plan G (NJ avg)", "$130–$220/month", "Varies by carrier and county"],
                ["Medigap Plan N (NJ avg)", "$110–$185/month", "Plus up to $20 copay per visit"],
                ["Part D drug plan (avg)", "$30–$60/month", "Varies by plan and drugs needed"],
              ].map(([item, amount, notes], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-medium text-gray-900 border-b border-gray-100">{item}</td>
                  <td className="px-4 py-3 text-blue-700 font-semibold border-b border-gray-100">{amount}</td>
                  <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Total Monthly Cost Scenarios</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-3">Original Medicare Only</h3>
            <div className="space-y-1 text-sm text-gray-600 mb-3">
              <div className="flex justify-between"><span>Part B premium</span><span>$202.90</span></div>
              <div className="flex justify-between"><span>Part D drug plan</span><span>~$40</span></div>
              <div className="flex justify-between font-semibold text-gray-900 border-t pt-2 mt-2"><span>Monthly total</span><span>~$243</span></div>
            </div>
            <p className="text-xs text-red-600">⚠️ Unlimited out-of-pocket exposure — 20% of all Part B costs with no cap</p>
          </div>
          <div className="border-2 border-blue-400 rounded-xl p-5 bg-blue-50">
            <h3 className="font-bold text-gray-900 mb-3">Plan G + Part D (Recommended)</h3>
            <div className="space-y-1 text-sm text-gray-600 mb-3">
              <div className="flex justify-between"><span>Part B premium</span><span>$202.90</span></div>
              <div className="flex justify-between"><span>Medigap Plan G</span><span>~$165</span></div>
              <div className="flex justify-between"><span>Part D drug plan</span><span>~$40</span></div>
              <div className="flex justify-between font-semibold text-gray-900 border-t pt-2 mt-2"><span>Monthly total</span><span>~$408</span></div>
            </div>
            <p className="text-xs text-green-700">✅ Near-zero out-of-pocket — only the $283 Part B deductible per year</p>
          </div>
        </div>

        <div className="my-8 bg-gray-900 text-white rounded-xl p-6 text-center">
          <p className="font-bold text-lg mb-2">Get exact Plan G rates for your NJ zip code</p>
          <p className="text-gray-300 text-sm mb-4">Rates vary by carrier and county. A free comparison takes 10 minutes.</p>
          <PhoneCTA label="Get My NJ Rate Comparison" />
        </div>

        <FAQSection faqs={faqs} title="Medicare Costs in New Jersey — FAQ" />

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-2">Related guides:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/medicare-supplement/new-jersey" className="text-blue-600 hover:underline text-sm">Best Medigap Plans in NJ</Link>
            <Link href="/medicare-supplement/new-jersey/plan-g-vs-plan-n" className="text-blue-600 hover:underline text-sm">Plan G vs Plan N NJ</Link>
            <Link href="/medicare-supplement/new-jersey/turning-65" className="text-blue-600 hover:underline text-sm">Turning 65 in NJ</Link>
            <Link href="/services/how-much-is-plan-g-in-nj" className="text-blue-600 hover:underline text-sm">How Much Is Plan G in NJ?</Link>
            <Link href="/services/how-can-i-save-money-on-my-medicare-supplement" className="text-blue-600 hover:underline text-sm">How to Save Money on Your Supplement</Link>
            <Link href="/services/best-medicare-supplement-rates-by-age-plan-g-plan-n-plan-f-rates" className="text-blue-600 hover:underline text-sm">Medigap Rates by Age</Link>
          </div>
        </div>
      </article>
    </>
  );
}
