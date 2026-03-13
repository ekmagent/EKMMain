import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Medigap Plan G vs Plan N in New Jersey (2026): Which Is Better?",
  description:
    "Plan G vs Plan N in New Jersey: detailed cost comparison, coverage differences, and which plan saves more money for NJ residents in 2026. Free expert guidance: 855-559-1700.",
};

const faqs = [
  {
    question: "Is Plan G or Plan N better in New Jersey?",
    answer:
      "For most New Jersey residents, Plan G is the better choice because it eliminates virtually all out-of-pocket costs after the Part B deductible ($257 in 2026). Plan N makes sense if you are in excellent health, rarely visit specialists, and want to save $20–$40/month on premiums — but you must be comfortable with copays up to $20 per office visit and $50 per ER visit.",
  },
  {
    question: "How much does Plan N cost compared to Plan G in New Jersey?",
    answer:
      "In New Jersey, Plan N typically costs $20–$40 less per month than Plan G for the same age and carrier. For a 65-year-old, Plan G averages $150–$220/month while Plan N averages $120–$185/month depending on your county and insurer. Because NJ uses community rating, these premiums do not increase as you age.",
  },
  {
    question: "What does Plan N not cover that Plan G does?",
    answer:
      "Plan N does not cover the Medicare Part B deductible ($257 in 2026), Part B excess charges (when doctors charge above Medicare rates), and it adds copays: up to $20 per doctor visit and up to $50 per emergency room visit if you are not admitted. Plan G covers all of these.",
  },
  {
    question: "What are Part B excess charges and do I need to worry about them in NJ?",
    answer:
      "Part B excess charges occur when a doctor does not accept Medicare assignment and charges up to 15% above the Medicare-approved rate. In New Jersey, most doctors accept Medicare assignment, so excess charges are uncommon — but not impossible. If you see out-of-state specialists frequently, Plan G's excess charge coverage has more value.",
  },
  {
    question: "Can I switch from Plan N to Plan G in New Jersey?",
    answer:
      "Yes — and New Jersey's year-round guaranteed issue rules make this easier than in most states. You can switch from Plan N to Plan G at any time without being denied or charged more due to health conditions. This is a major advantage unique to New Jersey that most other states do not offer.",
  },
];

export default function PlanGvsPlanNPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.medicareyourself.com" },
      { "@type": "ListItem", position: 2, name: "Medicare Supplement NJ", item: "https://www.medicareyourself.com/medicare-supplement/new-jersey" },
      { "@type": "ListItem", position: 3, name: "Plan G vs Plan N", item: "https://www.medicareyourself.com/medicare-supplement/new-jersey/plan-g-vs-plan-n" },
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
        <span className="text-gray-900 font-medium">Plan G vs Plan N</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Medigap Plan G vs Plan N in New Jersey (2026): Which Is Better?
        </h1>
        <p className="text-xs text-gray-400 mb-6">Last reviewed: March 2026 · Sources: CMS.gov, NJ DOBI</p>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-1">The short answer</p>
          <p className="text-gray-700">
            <strong>Plan G is the better choice for most NJ residents.</strong> The $20–$40/month premium savings from Plan N rarely offset the copays and coverage gaps — especially in New Jersey where community rating means your Plan G premium stays the same as you age.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Side-by-Side Coverage Comparison</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="text-left px-4 py-3">Coverage Item</th>
                <th className="text-center px-4 py-3">Plan G</th>
                <th className="text-center px-4 py-3">Plan N</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Part A hospital coinsurance + 365 extra days", "✅ Covered", "✅ Covered"],
                ["Part B coinsurance / copayment", "✅ Covered", "✅ Covered (with copays)"],
                ["Part A hospice coinsurance", "✅ Covered", "✅ Covered"],
                ["Part A deductible ($1,676 in 2026)", "✅ Covered", "✅ Covered"],
                ["Part B deductible ($257 in 2026)", "✅ Covered", "❌ Not covered"],
                ["Part B excess charges", "✅ Covered", "❌ Not covered"],
                ["Foreign travel emergency (80%)", "✅ Covered", "✅ Covered"],
                ["Doctor visit copay", "None", "Up to $20"],
                ["ER visit copay (not admitted)", "None", "Up to $50"],
              ].map(([item, g, n], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{item}</td>
                  <td className="px-4 py-3 text-center border-b border-gray-100 text-green-700 font-medium">{g}</td>
                  <td className={`px-4 py-3 text-center border-b border-gray-100 font-medium ${n.includes("❌") ? "text-red-600" : "text-green-700"}`}>{n}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Math: When Does Plan N Actually Save You Money?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Plan N saves you $20–$40/month in premiums — about $240–$480/year. To break even, you would need to have fewer than 12–24 doctor visits per year with no excess charges and no ER visits. For most Medicare beneficiaries who see doctors regularly, Plan G wins on total cost.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The scenario where Plan N clearly wins: you are 65–70, in excellent health, see your primary care doctor twice a year, and rarely visit specialists. In that case, the premium savings accumulate without being offset by copays.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">New Jersey&apos;s Community Rating: Why It Changes the Calculation</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          In most states, Medigap premiums rise as you age (attained-age rating). In New Jersey, community rating means your premium is set by the insurer for everyone — it does not increase because you got older. This makes the Plan G vs Plan N decision less about short-term savings and more about which coverage model fits your healthcare usage.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          It also means there is less urgency to lock in Plan G at 65. Because NJ also has year-round guaranteed issue, you can start with Plan N and switch to Plan G later without medical underwriting if your health changes.
        </p>

        <div className="my-8 bg-gray-900 text-white rounded-xl p-6 text-center">
          <p className="font-bold text-lg mb-2">Not sure which plan fits your situation?</p>
          <p className="text-gray-300 text-sm mb-4">We compare Plan G and Plan N rates from every carrier in your NJ zip code — free.</p>
          <PhoneCTA label="Get Your NJ Plan Comparison" />
        </div>

        <FAQSection faqs={faqs} title="Plan G vs Plan N — New Jersey FAQ" />

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-2">Related guides:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/medicare-supplement/new-jersey" className="text-blue-600 hover:underline text-sm">Best Medigap Plans in NJ</Link>
            <Link href="/medicare-supplement/new-jersey/cost" className="text-blue-600 hover:underline text-sm">Medicare Costs in NJ 2026</Link>
            <Link href="/medicare-supplement/new-jersey/vs-medicare-advantage" className="text-blue-600 hover:underline text-sm">Medigap vs Medicare Advantage NJ</Link>
          </div>
        </div>
      </article>
    </>
  );
}
