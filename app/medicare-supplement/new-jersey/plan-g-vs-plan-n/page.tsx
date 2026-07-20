import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Plan G vs Plan N in NJ | Compare 2026",
  description:
    "Plan G vs Plan N in NJ for 2026: compare premiums, copays, coverage, and carrier pricing methods. Find your best fit — call 855-559-1700 for free quotes.",
  alternates: { canonical: `${SITE_URL}/medicare-supplement/new-jersey/plan-g-vs-plan-n` },
  openGraph: {
    title: "Plan G vs Plan N in NJ | Compare 2026",
    description:
      "Plan G vs Plan N in New Jersey: cost comparison, coverage differences, and which Medigap plan saves more in 2026. Call 855-559-1700.",
  },
};

const faqs = [
  {
    question: "Is Plan G or Plan N better in New Jersey?",
    answer:
      "For most New Jersey residents, Plan G is the better choice because it eliminates virtually all out-of-pocket costs after the Part B deductible ($283 in 2026). Plan N makes sense if you are in excellent health, rarely visit specialists, and want to save $20–$40/month on premiums — but you must be comfortable with copays up to $20 per office visit and $50 per ER visit.",
  },
  {
    question: "How much does Plan N cost compared to Plan G in New Jersey?",
    answer:
      "In New Jersey, Plan N typically costs $20–$40 less per month than Plan G for the same age and carrier. For a 65-year-old, Plan G averages $150–$220/month while Plan N averages $120–$185/month depending on your insurer. Note that most NJ carriers use attained-age rating, so both premiums typically rise as you get older — check each carrier's rating method and rate-increase history before choosing.",
  },
  {
    question: "What does Plan N not cover that Plan G does?",
    answer:
      "Plan N does not cover the Medicare Part B deductible ($283 in 2026), Part B excess charges (when doctors charge above Medicare rates), and it adds copays: up to $20 per doctor visit and up to $50 per emergency room visit if you are not admitted. Plan G covers all of these.",
  },
  {
    question: "What are Part B excess charges and do I need to worry about them in NJ?",
    answer:
      "Part B excess charges occur when a doctor does not accept Medicare assignment and charges up to 15% above the Medicare-approved rate. In New Jersey, most doctors accept Medicare assignment, so excess charges are uncommon — but not impossible. If you see out-of-state specialists frequently, Plan G's excess charge coverage has more value.",
  },
  {
    question: "Can I switch from Plan N to Plan G in New Jersey?",
    answer:
      "You can apply to switch from Plan N to Plan G at any time, but outside of your 6-month Medigap Open Enrollment Period, insurers may use medical underwriting. If you are in good health, switching is usually straightforward. If you have significant health conditions, it may be more difficult. That is why choosing the right plan during your initial enrollment window matters.",
  },
  {
    question: "Does New Jersey use community rating for Plan G and Plan N pricing?",
    answer:
      "No — New Jersey does not mandate community rating. Most NJ Medigap carriers use attained-age rating, meaning both Plan G and Plan N premiums typically rise as you get older, on top of general rate increases. A minority of carriers (notably AARP/UnitedHealthcare) are community-rated. When comparing Plan G vs Plan N, look at each carrier's rating method and rate-increase history, not just the age-65 premium gap.",
  },
  {
    question: "When can I enroll in Plan G or Plan N in New Jersey without medical underwriting?",
    answer:
      "Your best window is the 6-month Medigap Open Enrollment Period that begins the month you turn 65 and are enrolled in Medicare Part B. During this period, insurers in New Jersey must sell you any Medigap plan they offer without health questions. Outside that window, applications may be subject to medical underwriting.",
  },
  {
    question: "Do Plan G and Plan N cover the Part A deductible in New Jersey?",
    answer:
      "Yes. Both Plan G and Plan N fully cover the Medicare Part A hospital deductible, which is $1,736 per benefit period in 2026. They also both cover Part A coinsurance and an additional 365 days of hospital care after Medicare benefits are exhausted.",
  },
  {
    question: "Is the network the same for Plan G and Plan N in NJ?",
    answer:
      "Yes. Both Plan G and Plan N let you see any provider nationwide who accepts Original Medicare — there are no networks or referrals required. This is one of the biggest advantages of Medigap compared to Medicare Advantage plans in New Jersey.",
  },
  {
    question: "Does Plan N still cover foreign travel emergencies like Plan G?",
    answer:
      "Yes. Both Plan G and Plan N include foreign travel emergency coverage up to plan limits after a $250 deductible, covering 80% of billed charges for emergency care during the first 60 days of a trip abroad. Lifetime maximum is $50,000 on both plans.",
  }
];

export default function PlanGvsPlanNPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medicareyourself.com" },
      { "@type": "ListItem", position: 2, name: "Medicare Supplement NJ", item: "https://medicareyourself.com/medicare-supplement/new-jersey" },
      { "@type": "ListItem", position: 3, name: "Plan G vs Plan N", item: "https://medicareyourself.com/medicare-supplement/new-jersey/plan-g-vs-plan-n" },
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
        <span className="text-gray-900 font-medium">Plan G vs Plan N</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Medigap Plan G vs Plan N in New Jersey (2026): Which Is Better?
        </h1>
        <p className="text-sm text-gray-500 mt-2">By <strong>Anthony Orner</strong>, Licensed Medicare Insurance Broker — NJ &amp; 34 states</p>
        <p className="text-xs text-gray-400 mb-6">Last reviewed: July 10, 2026 · Sources: CMS.gov, NJ DOBI, CSG Actuarial filed rates</p>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-2">What's Different for NJ Plan G vs Plan N in 2026</p>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Part B deductible is <strong>$283</strong> (covered by Plan G, not Plan N)</li>
            <li>• Part A hospital deductible is <strong>$1,736 per benefit period</strong> (both plans cover it)</li>
            <li>• Most NJ carriers use attained-age rating — your premium <strong>typically rises as you age</strong>, so check the carrier&apos;s rating method</li>
            <li>• Plan N copays up to <strong>$20 per doctor visit, $50 per ER visit</strong> still apply</li>
          </ul>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-1">The short answer</p>
          <p className="text-gray-700">
            <strong>Plan G is the better choice for most NJ residents.</strong> The $20–$40/month premium savings from Plan N rarely offset the copays and coverage gaps once you factor in real-world doctor and ER visits over a typical year.
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
                ["Part A deductible ($1,736 in 2026)", "✅ Covered", "✅ Covered"],
                ["Part B deductible ($283 in 2026)", "✅ Covered", "❌ Not covered"],
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

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Plan G and Plan N Actually Cost in New Jersey (2026 Filed Rates)</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Based on CSG Actuarial filed-rate data (July 2026, age 65, ZIP 08002 Cherry Hill, no household discount), New Jersey Plan G premiums run from <strong>$147.88 to $260.98/month across 18 carriers</strong> — a $113/month spread for federally identical benefits. Plan N runs <strong>$106.57 to $208.53/month across 19 carriers</strong>. The carrier you pick matters more than the plan letter.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="text-left px-4 py-3 rounded-tl-lg">NJ Plan G at 65 (filed rates)</th>
                <th className="text-left px-4 py-3">Monthly premium</th>
                <th className="text-left px-4 py-3 rounded-tr-lg">Market rank</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Cheapest filed Plan G", "$147.88", "1 of 18"],
                ["Medico (Wellabe)", "$180.36", "8 of 18"],
                ["NJ market median", "$181.62", "—"],
                ["Humana", "$182.60", "10 of 18"],
                ["WoodmenLife", "$205.29", "15 of 18"],
                ["Most expensive filed Plan G", "$260.98", "18 of 18"],
              ].map(([label, rate, rank], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{label}</td>
                  <td className="px-4 py-3 text-gray-900 font-medium border-b border-gray-100">{rate}</td>
                  <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{rank}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mb-4">
          Source: CSG Actuarial filed rates, April 2026 · age 65, female, non-tobacco, ZIP 08002 · Full carrier-by-carrier analysis in our{" "}
          <Link href="/medicare-supplement/medico-medigap-review" className="text-blue-600 hover:underline">Medico</Link>,{" "}
          <Link href="/medicare-supplement/humana-medigap-review" className="text-blue-600 hover:underline">Humana</Link>, and{" "}
          <Link href="/medicare-supplement/woodmenlife-medigap-review" className="text-blue-600 hover:underline">WoodmenLife</Link> reviews, or see{" "}
          <Link href="/medicare-supplement/new-jersey/pricing-ages-65-69" className="text-blue-600 hover:underline">NJ Plan G &amp; N pricing for ages 65–69</Link>.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How NJ Carriers Price Medigap: Why the Rating Method Changes the Calculation</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          New Jersey does not mandate a single pricing method — each carrier chooses its own. Most NJ Medigap carriers use attained-age rating, meaning your premium rises as you get older on top of general rate increases. A minority (notably AARP/UnitedHealthcare) are community-rated, charging the same premium regardless of age. That means the cheapest Plan G or Plan N at 65 is not always the cheapest at 75 — compare each carrier&apos;s rating method and rate-increase history, not just today&apos;s premium gap.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          However, keep in mind that switching from Plan N to Plan G after your 6-month <a href="https://www.medicare.gov/health-drug-plans/medigap/basics/when-can-i-buy-medigap" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Medigap Open Enrollment Period</a> may require medical underwriting. If your health changes later, switching could be more difficult. Consider your long-term healthcare needs when choosing between Plan G and Plan N at 65.
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
            <Link href="/services/compare-and-enroll-in-plan-g-online" className="text-blue-600 hover:underline text-sm">Compare and Enroll in Plan G Online</Link>
            <Link href="/services/quickest-way-to-enroll-into-plan-n" className="text-blue-600 hover:underline text-sm">Enroll in Plan N</Link>
            <Link href="/services/best-medicare-supplement-rates-by-age-plan-g-plan-n-plan-f-rates" className="text-blue-600 hover:underline text-sm">Medigap Rates by Age</Link>
          </div>
        </div>
      </article>
    </>
  );
}
