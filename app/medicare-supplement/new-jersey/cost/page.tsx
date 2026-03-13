import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "How Much Does Medicare Cost in New Jersey in 2026?",
  description:
    "Medicare costs in New Jersey 2026: Part B premiums, Medigap Plan G rates by carrier, Medicare Advantage costs, and total out-of-pocket estimates. Free comparison: 855-559-1700.",
};

const faqs = [
  {
    question: "How much does Medicare cost per month in New Jersey in 2026?",
    answer:
      "The base cost of Medicare in New Jersey is the Part B premium of $185/month (2026), which everyone pays regardless of which plan they choose. If you add a Medigap Plan G, expect to pay an additional $130–$220/month depending on carrier and county — totaling roughly $315–$405/month for comprehensive coverage with no networks and near-zero out-of-pocket costs.",
  },
  {
    question: "Is Medicare free in New Jersey?",
    answer:
      "Medicare Part A (hospital insurance) is free for most people who worked and paid Medicare taxes for at least 10 years. Part B (medical insurance) costs $185/month in 2026. Part D (drug coverage) averages $30–$50/month. Medigap coverage is optional but eliminates most cost-sharing. There is no such thing as completely free comprehensive Medicare coverage.",
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
      "The Medicare Part B deductible is $257 in 2026 — this is a federal amount that applies nationwide, not NJ-specific. Plan G covers everything except this deductible. Plan F covers it entirely but is only available to those who became Medicare-eligible before January 1, 2020.",
  },
];

export default function NJMedicareCostPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.medicareyourself.com" },
      { "@type": "ListItem", position: 2, name: "Medicare Supplement NJ", item: "https://www.medicareyourself.com/medicare-supplement/new-jersey" },
      { "@type": "ListItem", position: 3, name: "Medicare Costs NJ 2026", item: "https://www.medicareyourself.com/medicare-supplement/new-jersey/cost" },
    ],
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
        <p className="text-xs text-gray-400 mb-6">Last reviewed: March 2026 · Sources: CMS.gov, NJ DOBI</p>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-1">Quick answer</p>
          <p className="text-gray-700">
            Most NJ residents with comprehensive Medigap coverage (Plan G) pay <strong>$315–$405/month total</strong> — that is the $185 Part B premium plus $130–$220 for Plan G. In return, they have near-zero out-of-pocket costs and can see any doctor in the US who accepts Medicare.
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
                ["Part B premium", "$185/month", "Federal standard; higher if IRMAA applies"],
                ["Part B deductible", "$257/year", "Covered by Plan G, not Plan N"],
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
              <div className="flex justify-between"><span>Part B premium</span><span>$185</span></div>
              <div className="flex justify-between"><span>Part D drug plan</span><span>~$40</span></div>
              <div className="flex justify-between font-semibold text-gray-900 border-t pt-2 mt-2"><span>Monthly total</span><span>~$225</span></div>
            </div>
            <p className="text-xs text-red-600">⚠️ Unlimited out-of-pocket exposure — 20% of all Part B costs with no cap</p>
          </div>
          <div className="border-2 border-blue-400 rounded-xl p-5 bg-blue-50">
            <h3 className="font-bold text-gray-900 mb-3">Plan G + Part D (Recommended)</h3>
            <div className="space-y-1 text-sm text-gray-600 mb-3">
              <div className="flex justify-between"><span>Part B premium</span><span>$185</span></div>
              <div className="flex justify-between"><span>Medigap Plan G</span><span>~$165</span></div>
              <div className="flex justify-between"><span>Part D drug plan</span><span>~$40</span></div>
              <div className="flex justify-between font-semibold text-gray-900 border-t pt-2 mt-2"><span>Monthly total</span><span>~$390</span></div>
            </div>
            <p className="text-xs text-green-700">✅ Near-zero out-of-pocket — only the $257 Part B deductible per year</p>
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
          </div>
        </div>
      </article>
    </>
  );
}
