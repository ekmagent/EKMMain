import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Best Medicare Supplement Plans in Pennsylvania (2026)",
  description:
    "Compare Medicare Supplement plans in Pennsylvania for 2026. Plan G vs Plan N, costs, enrollment rules, and how PA differs from other states. Free help: 855-559-1700.",
};

const faqs = [
  {
    question: "What is the best Medicare Supplement plan in Pennsylvania in 2026?",
    answer:
      "Plan G is the most popular Medicare Supplement plan for new enrollees in Pennsylvania in 2026. It covers everything Original Medicare leaves behind except the Part B deductible ($257/year). Plan N is the second most common choice — it has lower premiums but requires small copays ($20 for office visits, $50 for ER). Both are standardized, so coverage is identical across all carriers; only the price differs.",
  },
  {
    question: "How much does Medicare Supplement cost in Pennsylvania?",
    answer:
      "Medicare Supplement Plan G in Pennsylvania typically costs between $100 and $200 per month for a 65-year-old, depending on the carrier, county, and gender. Prices vary more in PA than in NJ because Pennsylvania uses attained-age rating — premiums increase as you get older. Comparing multiple carriers at enrollment is especially important in PA for this reason.",
  },
  {
    question: "Does Pennsylvania have guaranteed issue for Medigap?",
    answer:
      "Pennsylvania does not have year-round guaranteed issue for Medigap like New Jersey does. In PA, you have guaranteed acceptance during your 6-month Medigap Open Enrollment Period — the 6 months starting the month you turn 65 and are enrolled in Part B. After that window closes, insurers can use medical underwriting and deny you coverage or charge higher premiums based on health conditions. Enrolling during your open enrollment period is critical in Pennsylvania.",
  },
  {
    question: "What is attained-age rating and how does it affect PA Medigap premiums?",
    answer:
      "Pennsylvania allows attained-age rating for Medigap plans, meaning your premium increases each year as you get older — on top of any general rate increases. This differs from community rating (used in NJ) where everyone the same plan pays the same rate. In PA, a plan that costs $130/month at 65 may cost significantly more by age 75. When comparing plans in PA, ask carriers how their rates have increased historically.",
  },
  {
    question: "Can I switch Medicare Supplement plans in Pennsylvania?",
    answer:
      "After your Medigap Open Enrollment Period ends, switching plans in Pennsylvania requires passing medical underwriting. Insurers can ask about your health history and decline your application. If you are in good health, you may qualify for a lower-premium plan with a different carrier. If you have significant health conditions, you may be locked into your current plan. This is why choosing carefully at 65 matters more in PA than in states with guaranteed issue.",
  },
  {
    question: "What does Medicare Supplement Plan G cover in Pennsylvania?",
    answer:
      "Plan G in Pennsylvania covers: the Part A hospital deductible ($1,676 in 2026), Part A coinsurance and hospital costs, Part B coinsurance (the 20% you owe on all outpatient services), Part B excess charges, skilled nursing facility coinsurance, hospice care coinsurance, and foreign travel emergency care (80% up to plan limits). The only gap is the Part B deductible ($257/year), which you pay out of pocket. After that, Plan G covers virtually all remaining Medicare-approved costs.",
  },
];

export default function PennsylvaniaMedigapPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.medicareyourself.com" },
      { "@type": "ListItem", position: 2, name: "Medicare Supplement PA", item: "https://www.medicareyourself.com/medicare-supplement/pennsylvania" },
    ],
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Medicare Supplement Plans in Pennsylvania (2026)",
    description: "Compare Medicare Supplement plans in Pennsylvania for 2026. Plan G vs Plan N, costs, enrollment rules, and PA-specific rules.",
    author: { "@type": "Organization", name: "MedicareYourself", url: "https://www.medicareyourself.com" },
    publisher: { "@type": "Organization", name: "MedicareYourself", url: "https://www.medicareyourself.com" },
    dateModified: "2026-03-01",
    mainEntityOfPage: "https://www.medicareyourself.com/medicare-supplement/pennsylvania",
  };

  const plans = [
    {
      name: "Plan G",
      monthlyEst: "$100–$200",
      partADeductible: "✓ Covered",
      partBCoinsurance: "✓ Covered",
      partBDeductible: "✗ You pay $257",
      excessCharges: "✓ Covered",
      bestFor: "Most new enrollees — near-complete coverage",
      popular: true,
    },
    {
      name: "Plan N",
      monthlyEst: "$75–$155",
      partADeductible: "✓ Covered",
      partBCoinsurance: "✓ Covered (copays apply)",
      partBDeductible: "✗ You pay $257",
      excessCharges: "✗ Not covered",
      bestFor: "Healthy enrollees who rarely see specialists",
      popular: false,
    },
    {
      name: "Plan K",
      monthlyEst: "$50–$90",
      partADeductible: "50% Covered",
      partBCoinsurance: "50% Covered",
      partBDeductible: "✗ You pay $257",
      excessCharges: "✗ Not covered",
      bestFor: "Budget-focused with $7,220 out-of-pocket cap",
      popular: false,
    },
  ];

  return (
    <>
      <SchemaMarkup schema={breadcrumb} />
      <SchemaMarkup schema={article} />
      <nav className="max-w-6xl mx-auto px-4 pt-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-900 font-medium">Medicare Supplement Pennsylvania</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Best Medicare Supplement Plans in Pennsylvania (2026)
        </h1>
        <p className="text-xs text-gray-400 mb-8">Last reviewed: March 2026 · Sources: CMS.gov, Pennsylvania Insurance Department</p>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-1">Important for Pennsylvania residents</p>
          <p className="text-gray-700 text-sm">
            Pennsylvania does <strong>not</strong> have year-round guaranteed issue for Medigap. Your 6-month Open Enrollment Period at 65 is your best — and often only — chance to get coverage without medical underwriting. Missing this window can make Medigap difficult or impossible to obtain later if you develop health conditions.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Pennsylvania Medigap Plan Comparison (2026)</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="text-left px-4 py-3">Plan</th>
                <th className="text-center px-4 py-3">Est. Monthly Cost</th>
                <th className="text-center px-4 py-3">Part A Deductible</th>
                <th className="text-center px-4 py-3">Part B Coinsurance</th>
                <th className="text-center px-4 py-3">Part B Deductible</th>
                <th className="text-center px-4 py-3">Excess Charges</th>
              </tr>
            </thead>
            <tbody>
              {plans.map((plan, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 border-b border-gray-100">
                    <span className="font-bold text-gray-900">{plan.name}</span>
                    {plan.popular && <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Most popular</span>}
                    <p className="text-xs text-gray-500 mt-0.5">{plan.bestFor}</p>
                  </td>
                  <td className="px-4 py-3 text-center border-b border-gray-100 font-medium">{plan.monthlyEst}</td>
                  <td className="px-4 py-3 text-center border-b border-gray-100">{plan.partADeductible}</td>
                  <td className="px-4 py-3 text-center border-b border-gray-100">{plan.partBCoinsurance}</td>
                  <td className="px-4 py-3 text-center border-b border-gray-100">{plan.partBDeductible}</td>
                  <td className="px-4 py-3 text-center border-b border-gray-100">{plan.excessCharges}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mb-8">Estimates for a 65-year-old non-smoker in Pennsylvania. Actual rates vary by carrier, county, and gender. Request a free quote for exact pricing.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">How Pennsylvania Medigap Rules Differ from Other States</h2>
        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">Attained-Age Rating</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Pennsylvania uses attained-age rating, meaning your Medigap premium increases each year as you get older. This is different from community rating states (like New Jersey) where everyone on the same plan pays the same premium. Over a 10–15 year period, this can add up significantly. When comparing PA carriers, ask about their historical rate increase track record — not just the current premium.
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">No Year-Round Guaranteed Issue</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              After your 6-month Open Enrollment Period, PA insurers can underwrite your application. A cancer diagnosis, heart condition, diabetes with complications, or other serious conditions may result in denial or higher premiums. Unlike New Jersey, there is no state law protecting you after the federal open enrollment window closes.
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">PACE and PACENET for Low-Income Seniors</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Pennsylvania has PACE (Pharmaceutical Assistance Contract for the Elderly) and PACENET programs that help low-income seniors pay for prescription drugs. These are separate from Medigap and worth exploring if your income is below $33,500 (single) or $41,500 (married) annually.
            </p>
          </div>
        </div>

        <div className="my-8 bg-gray-900 text-white rounded-xl p-6 text-center">
          <p className="font-bold text-lg mb-2">Compare Pennsylvania Medigap rates — free.</p>
          <p className="text-gray-300 text-sm mb-4">We&apos;re licensed in PA and compare all major carriers. No obligation, no pressure.</p>
          <PhoneCTA label="Get PA Medigap Quotes Free" />
        </div>

        <FAQSection faqs={faqs} title="Pennsylvania Medicare Supplement — FAQ" />

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-2">Related guides:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/medicare-supplement/new-jersey" className="text-blue-600 hover:underline text-sm">Best Medigap Plans in NJ</Link>
            <Link href="/learn/what-is-medigap" className="text-blue-600 hover:underline text-sm">What Is Medigap?</Link>
            <Link href="/learn/medicare-parts-explained" className="text-blue-600 hover:underline text-sm">Medicare Parts A, B, C, D Explained</Link>
          </div>
        </div>
      </article>
    </>
  );
}
