import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import QuoteWidget from "@/components/QuoteWidget";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Best Medicare Supplement Plans in NJ 2026",
  description:
    "Compare 2026 NJ Medicare Supplement plans. Community-rated Plan G & Plan N, NJ enrollment rules, and free broker guidance. Call 855-559-1700 today.",
  alternates: { canonical: `${SITE_URL}/medicare-supplement/new-jersey` },
  openGraph: {
    title: "Best Medicare Supplement Plans in NJ 2026",
    description:
      "Compare Medicare Supplement plans in New Jersey. Plan G rates from top carriers, NJ enrollment rules, and free guidance. Call 855-559-1700.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://medicareyourself.com" },
    { "@type": "ListItem", position: 2, name: "Medicare Supplement", item: "https://medicareyourself.com/medicare-supplement" },
    { "@type": "ListItem", position: 3, name: "New Jersey", item: "https://medicareyourself.com/medicare-supplement/new-jersey" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Medicare Supplement Plans in New Jersey (2026)",
  description: "A comprehensive guide to Medicare Supplement (Medigap) plans in New Jersey, including Plan G rates, NJ-specific enrollment rules, and carrier comparisons.",
  datePublished: "2026-01-01",
  dateModified: "2026-04-16",
  author: {
    "@type": "Person",
    name: "MedicareYourself",
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
    question: "What is the best Medicare Supplement plan in New Jersey in 2026?",
    answer:
      "Plan G is the most popular Medicare Supplement plan in New Jersey for new enrollees in 2026. It covers everything Medicare covers except the Part B deductible ($283 in 2026), giving you near-zero out-of-pocket costs with any doctor who accepts Medicare. For those who qualify, Plan N offers lower premiums with small copays.",
  },
  {
    question: "How much does Medicare Supplement Plan G cost in New Jersey?",
    answer:
      "Medicare Supplement Plan G premiums in New Jersey typically range from $130 to $220 per month for a 65-year-old, depending on the carrier and your county. Because plan letters are federally standardized, a Plan G from one carrier covers the exact same benefits as Plan G from any other — the only real difference is price and rate increase history. Comparing carriers is the best way to get the most coverage for your dollar.",
  },
  {
    question: "Does New Jersey have special Medigap enrollment rules?",
    answer:
      "Like all states, New Jersey follows the federal Medigap Open Enrollment Period: a 6-month window starting the month you turn 65 and enroll in Medicare Part B. During this window no carrier can deny you coverage or charge more based on health. Enrolling during this window locks in the best possible terms — do not miss it.",
  },
  {
    question: "What is the difference between Medigap Plan G and Plan N in New Jersey?",
    answer:
      "Plan G covers all Medicare cost-sharing except the Part B deductible. Plan N also skips the Part B deductible but adds copays of up to $20 per doctor visit and up to $50 per ER visit. Plan N typically costs $20–$40 less per month than Plan G, making it a good option if you rarely visit specialists.",
  },
  {
    question: "Can I keep my doctors with a Medicare Supplement plan in New Jersey?",
    answer:
      "Yes. Medicare Supplement plans work with any doctor or hospital in the United States that accepts Original Medicare — there are no networks. This is a key advantage over Medicare Advantage plans, which restrict you to in-network providers. For NJ residents who want maximum flexibility, including when traveling or visiting specialists at major academic medical centers, Medigap is often the better choice.",
  },
  {
    question: "When is the best time to enroll in a Medicare Supplement plan in New Jersey?",
    answer:
      "The best time to enroll is during your 6-month Medigap Open Enrollment Period, which begins the month you are both 65 and enrolled in Medicare Part B. During this window you cannot be turned down or charged more due to health conditions. Missing this window can make it harder or more expensive to get Medigap coverage later, so timing your enrollment correctly is one of the most important decisions you will make.",
  },
  {
    question: "Which companies offer Medicare Supplement plans in New Jersey?",
    answer:
      "Major carriers offering Medigap plans in New Jersey include Aetna, Cigna, Mutual of Omaha, United American, Horizon Blue Cross Blue Shield of New Jersey, and several others. Rates and plan availability vary by carrier and zip code. An independent broker like MedicareYourself can compare all available options for you at no cost.",
  },
  {
    question: "What is the NJ SHIP program and how can it help me?",
    answer:
      "The New Jersey State Health Insurance Assistance Program (SHIP NJ) is a free, unbiased counseling service funded by the federal government. SHIP counselors can explain your Medicare options and rights. You can reach NJ SHIP at 1-800-792-8820. MedicareYourself works alongside SHIP to provide additional carrier comparisons and enrollment assistance.",
  },
];

const planData = [
  { plan: "Plan A", covers: "Basic benefits only", bestFor: "Very healthy, minimal use" },
  { plan: "Plan B", covers: "Basic + Part A deductible", bestFor: "Low hospital risk" },
  { plan: "Plan G", covers: "Everything except Part B deductible", bestFor: "Most people — best value" },
  { plan: "Plan N", covers: "Plan G minus small copays", bestFor: "Healthy, want lower premiums" },
  { plan: "Plan K", covers: "50% cost-sharing up to out-of-pocket max", bestFor: "Younger, very healthy" },
  { plan: "Plan L", covers: "75% cost-sharing up to out-of-pocket max", bestFor: "Budget-conscious, healthy" },
,
  {
    question: "Does New Jersey use community-rated pricing for Medigap?",
    answer:
      "Yes. New Jersey is a community-rated state, meaning Medigap carriers charge the same premium to everyone with the same plan in a given area regardless of age. This differs from issue-age or attained-age states where premiums rise as you get older. Community rating can make Medigap more predictable over time in NJ.",
  },
  {
    question: "Can I switch Medicare Supplement plans in New Jersey after my Open Enrollment Period?",
    answer:
      "You can apply to switch Medigap plans in New Jersey at any time, but outside your 6-month Medigap Open Enrollment Period carriers may use medical underwriting and can deny coverage or charge more based on health. Certain guaranteed issue situations — like losing other coverage — protect your right to enroll. Call 855-559-1700 to review your options before switching.",
  }
,
  {
    question: "Is Medigap coverage guaranteed if I apply outside my Open Enrollment Period in New Jersey?",
    answer:
      "Outside the 6-month Medigap Open Enrollment Period, carriers in New Jersey can generally use medical underwriting and may decline coverage or charge more based on your health history. Limited guaranteed-issue rights still apply in specific situations, such as losing other creditable coverage or moving out of a plan's service area. It is best to apply during your initial 6-month window to lock in coverage without health questions.",
  }
,
  {
    question: "Is Medicare Supplement coverage in New Jersey community-rated?",
    answer:
      "New Jersey Medigap plans are generally community-rated, meaning premiums are based on the geographic area rather than your individual age. This can make Medigap more affordable for older enrollees compared to age-rated states. Rates still vary by carrier, so comparing options is important.",
  },
  {
    question: "Can I switch Medicare Supplement plans in New Jersey after my Open Enrollment Period?",
    answer:
      "Yes, you can apply to switch Medigap plans in New Jersey at any time, but outside your 6-month Medigap Open Enrollment Period or a guaranteed-issue situation, carriers can use medical underwriting. That means you may be denied or charged more based on health. Call 855-559-1700 to review whether switching makes sense for your situation.",
  },
  {
    question: "Do Medicare Supplement plans in New Jersey cover prescription drugs?",
    answer:
      "No. Medicare Supplement plans sold today do not include prescription drug coverage. To cover medications, you'll need to enroll in a separate standalone Medicare Part D plan alongside your Medigap policy.",
  }
,
  {
    question: "Is New Jersey a community-rated state for Medigap?",
    answer:
      "Yes. New Jersey uses community rating for Medicare Supplement plans, which means carriers cannot charge you a higher premium based on your age. Everyone enrolled in the same plan with the same carrier pays the same base rate, though premiums can still increase over time due to inflation and claims experience.",
  },
  {
    question: "When is the best time to enroll in a Medigap plan in New Jersey?",
    answer:
      "The best time to enroll is during your 6-month Medigap Open Enrollment Period, which begins the month you are 65 or older and enrolled in Medicare Part B. During this window, you have guaranteed issue rights — no carrier can deny coverage or charge more due to pre-existing conditions. Outside this window, you may be subject to medical underwriting.",
  },
  {
    question: "Do Medicare Supplement plans in New Jersey cover prescription drugs?",
    answer:
      "No. Medicare Supplement (Medigap) plans do not include prescription drug coverage. To get prescription coverage, you will need to enroll in a separate Medicare Part D plan. Our licensed brokers can help you pair the right Medigap and Part D combination at no cost — call 855-559-1700.",
  }
,
  {
    question: "Is New Jersey a community-rated state for Medicare Supplement plans?",
    answer:
      "Yes. New Jersey uses community rating for Medigap, which means carriers cannot charge you more based on your age. Everyone enrolled in the same plan with the same carrier pays the same base premium, regardless of whether they are 65 or 85. This can make Medigap more affordable as you age compared to age-rated states.",
  },
  {
    question: "When can I switch Medicare Supplement plans in New Jersey?",
    answer:
      "You can apply to switch Medigap plans in New Jersey at any time, but outside your 6-month Medigap Open Enrollment Period or a federal guaranteed issue right, carriers can review your health history and may decline coverage or charge more. If you are considering a switch, speak with a licensed broker first to confirm you can qualify. Call 855-559-1700 for a free review.",
  },
  {
    question: "Do Medicare Supplement plans in New Jersey cover prescription drugs?",
    answer:
      "No. Medicare Supplement plans sold today do not include prescription drug coverage. To get drug coverage in New Jersey, you need to enroll in a separate Medicare Part D prescription drug plan alongside your Medigap plan.",
  }
,
  {
    question: "Are Medicare Supplement plans in New Jersey community-rated?",
    answer:
      "Yes. New Jersey uses community rating for Medigap plans, which means premiums are based on the geographic area rather than your individual age. This is different from age-rated or attained-age states where premiums increase as you get older. Community rating can be especially beneficial for older enrollees comparing long-term costs.",
  },
  {
    question: "When is the best time to enroll in a Medicare Supplement plan in New Jersey?",
    answer:
      "The best time to enroll is during your 6-month Medigap Open Enrollment Period, which begins the month you are 65 or older and enrolled in Medicare Part B. During this window, carriers cannot deny you coverage or charge more due to pre-existing conditions. Outside this window, you may be subject to medical underwriting unless you qualify for a guaranteed issue right.",
  }
,
  {
    question: "Can I switch Medicare Supplement plans in New Jersey after my Open Enrollment Period?",
    answer:
      "Yes, you can apply to switch Medigap plans at any time in New Jersey, but outside of your 6-month Medigap Open Enrollment Period or a federally protected guaranteed-issue situation, carriers may use medical underwriting. That means they can review your health history and potentially decline coverage or charge a higher premium. A licensed broker can help you compare carriers and identify whether you qualify for a switch.",
  },
  {
    question: "Does New Jersey use community rating for Medicare Supplement premiums?",
    answer:
      "Yes. New Jersey uses community rating for Medigap, which means carriers charge the same premium to everyone enrolled in a given plan regardless of age. This differs from age-rated states where premiums increase as you get older. Premiums can still change year to year based on overall claims and inflation, so comparing carriers remains important.",
  },
  {
    question: "Do Medicare Supplement plans in New Jersey cover prescription drugs?",
    answer:
      "No. Medicare Supplement (Medigap) plans sold today do not include prescription drug coverage. To get drug coverage, you'll need to enroll in a separate standalone Medicare Part D plan. We can help you pair a Medigap plan with a Part D plan that fits your medications and pharmacy preferences.",
  }
];

export default function NJMedicareSupplementPage() {
  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />

      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-4 pt-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">›</span>
        <span>Medicare Supplement</span>
        <span className="mx-2">›</span>
        <span className="text-gray-900 font-medium">New Jersey</span>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Best Medicare Supplement Plans in New Jersey (2026)
            </h1>
        <p className="text-sm text-gray-500 mt-2">By <strong>Anthony Orner</strong>, Licensed Medicare Insurance Broker — NJ &amp; 34 states</p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>The short answer:</strong> Plan G is the best Medicare Supplement plan for most New Jersey
              residents in 2026. It covers nearly all out-of-pocket Medicare costs, lets you use any doctor who
              accepts Medicare, and costs $130–$220/month depending on your carrier and county.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Plan G is the same plan at every carrier — same benefits, federally standardized.
              The difference is price and how aggressively carriers raise rates over time.
              Below we explain your options, current rates, top carriers, and how to choose.
            </p>
            <p className="text-xs text-gray-400 mb-6">
              Last reviewed: April 2026 · Data sourced from CMS.gov and NJ Department of Banking and Insurance
            </p>
            <PhoneCTA label="Compare NJ Plans Free" />
          </div>

          {/* Sidebar CTA */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 h-fit">
            <h2 className="text-lg font-bold text-gray-900 mb-2">Get Your NJ Medigap Rates</h2>
            <p className="text-sm text-gray-600 mb-4">
              Free comparison from all carriers in your NJ zip code. No obligation.
            </p>
            <a
              href="tel:8555591700"
              className="block w-full text-center bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition-colors mb-3"
            >
              Call 855-559-1700
            </a>
            <Link
              href="/quote"
              className="block w-full text-center border border-blue-700 text-blue-700 hover:bg-blue-50 font-semibold py-3 rounded-lg transition-colors text-sm"
            >
              Online Quote Tool
            </Link>
            <p className="text-xs text-gray-400 mt-3 text-center">Free · Unbiased · No pressure</p>
          </div>
        </div>
      </section>

      {/* NJ-specific callout */}
      <section className="bg-green-50 border-y border-green-100 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            How to Get the Best Medigap Coverage in New Jersey
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="bg-white rounded-lg p-4 border border-green-100">
              <h3 className="font-semibold text-gray-900 mb-2">Plan Letters Are All the Same</h3>
              <p className="text-gray-600">
                A Plan G from Aetna covers the exact same benefits as Plan G from Mutual of Omaha.
                Federal law standardizes every plan letter — think of it like a can of Diet Coke.
                Same product, different price. Your job is finding the best price from a stable carrier.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-green-100">
              <h3 className="font-semibold text-gray-900 mb-2">Rate Increase History Matters</h3>
              <p className="text-gray-600">
                Some carriers raise premiums 2–4% per year. Others raise 10–15%. Over 10 years that
                difference compounds dramatically. An independent broker can show you each carrier&apos;s
                rate increase history — not just today&apos;s lowest quote.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-green-100">
              <h3 className="font-semibold text-gray-900 mb-2">DOBI Oversight</h3>
              <p className="text-gray-600">
                The <a href="https://www.state.nj.us/dobi/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">NJ Department of Banking and Insurance (DOBI)</a> regulates all Medigap plans sold
                in the state. File complaints at dobi.nj.gov or call 1-800-446-7467.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plan comparison table */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Medigap Plans Available in New Jersey (2026)
        </h2>
        <p className="text-gray-600 mb-6">
          All plans are standardized by CMS — Plan G from Aetna covers the same benefits as Plan G
          from any other carrier. The only difference is price and customer service.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="text-left px-4 py-3 rounded-tl-lg">Plan</th>
                <th className="text-left px-4 py-3">What It Covers</th>
                <th className="text-left px-4 py-3 rounded-tr-lg">Best For</th>
              </tr>
            </thead>
            <tbody>
              {planData.map((row, i) => (
                <tr key={row.plan} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-semibold text-blue-700 border-b border-gray-100">
                    {row.plan}
                    {row.plan === "Plan G" && (
                      <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-normal">
                        Most Popular
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{row.covers}</td>
                  <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{row.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-2">
          Source: <a href="https://www.medicare.gov/health-drug-plans/medigap" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Medicare.gov</a> standardized plans. Plan F is only available to those who became Medicare-eligible before January 1, 2020.
        </p>
      </section>

      {/* NJ Medicare at a Glance — hub navigation */}
      <section className="max-w-6xl mx-auto px-4 py-12 border-t border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          New Jersey Medigap at a Glance (2026)
        </h2>
        <p className="text-gray-600 mb-6">
          Every New Jersey Medicare Supplement decision comes down to a handful of questions.
          Pick the one that fits your situation and jump to the full breakdown.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/medicare-supplement/new-jersey/cost" className="group block bg-white border border-gray-200 hover:border-blue-300 hover:shadow-md rounded-xl p-5 transition-all">
            <p className="text-xs uppercase tracking-wide text-blue-700 font-semibold mb-1">Cost</p>
            <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-700 mb-1">How much does Medigap cost in NJ?</h3>
            <p className="text-sm text-gray-600">Plan G rates by age, carrier comparison, and 2026 pricing for NJ zip codes.</p>
          </Link>
          <Link href="/medicare-supplement/new-jersey/plan-g-vs-plan-n" className="group block bg-white border border-gray-200 hover:border-blue-300 hover:shadow-md rounded-xl p-5 transition-all">
            <p className="text-xs uppercase tracking-wide text-blue-700 font-semibold mb-1">Plan Choice</p>
            <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-700 mb-1">Plan G vs Plan N in New Jersey</h3>
            <p className="text-sm text-gray-600">Side-by-side comparison: copays, premiums, and which is right for NJ retirees.</p>
          </Link>
          <Link href="/medicare-supplement/new-jersey/vs-medicare-advantage" className="group block bg-white border border-gray-200 hover:border-blue-300 hover:shadow-md rounded-xl p-5 transition-all">
            <p className="text-xs uppercase tracking-wide text-blue-700 font-semibold mb-1">Medigap vs Advantage</p>
            <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-700 mb-1">Medigap vs Medicare Advantage in NJ</h3>
            <p className="text-sm text-gray-600">Network access, out-of-pocket limits, and why NJ academic medical centers matter.</p>
          </Link>
          <Link href="/medicare-supplement/new-jersey/turning-65" className="group block bg-white border border-gray-200 hover:border-blue-300 hover:shadow-md rounded-xl p-5 transition-all">
            <p className="text-xs uppercase tracking-wide text-blue-700 font-semibold mb-1">Turning 65</p>
            <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-700 mb-1">Turning 65 in New Jersey — your checklist</h3>
            <p className="text-sm text-gray-600">Your 6-month Medigap window, what to sign up for, and NJ-specific deadlines.</p>
          </Link>
        </div>

        {/* NJ-specific 2026 context — unique to the hub */}
        <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3">What&apos;s Changed for NJ Medicare in 2026</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• <strong>Part B premium:</strong> $202.90/month standard premium — up from $174.70 in 2025.</li>
            <li>• <strong>Part B deductible:</strong> $283 — the one cost Plan G doesn&apos;t cover.</li>
            <li>• <strong>Part A deductible:</strong> $1,676 per benefit period — Plan G covers this in full.</li>
            <li>• <strong>Carrier activity in NJ:</strong> Most major carriers filed single-digit rate increases for 2026, though specific increases vary by birth year and enrollment month.</li>
            <li>• <strong>Medigap OEP reminder:</strong> Your 6-month federal Open Enrollment window is the one chance to enroll in any plan with no health questions.</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-4">
        <FAQSection faqs={faqs} title="Medicare Supplement Questions — New Jersey" />
      </section>

      {/* Related service pages */}
      <section className="max-w-6xl mx-auto px-4 mt-10">
        <div className="border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-500 mb-3">Helpful resources:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/how-to-enroll-in-medicare-in-new-jersey" className="text-blue-600 hover:underline text-sm">How to Enroll in Medicare in NJ</Link>
            <Link href="/services/compare-and-enroll-in-plan-g-online" className="text-blue-600 hover:underline text-sm">Compare and Enroll in Plan G Online</Link>
            <Link href="/services/quickest-way-to-enroll-into-plan-g" className="text-blue-600 hover:underline text-sm">Quickest Way to Enroll in Plan G</Link>
            <Link href="/services/find-an-nj-medicare-broker-near-you" className="text-blue-600 hover:underline text-sm">Find an NJ Medicare Broker Near You</Link>
            <Link href="/services/how-much-is-plan-g-in-nj" className="text-blue-600 hover:underline text-sm">How Much Is Plan G in NJ?</Link>
          </div>
        </div>
      </section>

      {/* Other States */}
      <section className="max-w-3xl mx-auto px-4 mt-10">
        <p className="text-gray-600 text-sm">
          We also help beneficiaries in other states.{" "}
          <Link href="/medicare-supplement/pennsylvania" className="text-blue-700 hover:underline font-medium">
            Compare Medicare Supplement plans in Pennsylvania →
          </Link>
        </p>
      </section>

      {/* Bottom CTA */}
      <section className="bg-blue-800 text-white py-14 px-4 mt-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">
            Ready to compare NJ Medigap rates?
          </h2>
          <p className="text-blue-100 mb-6">
            Our licensed advisors compare every carrier available in your New Jersey zip code —
            free, with no obligation.
          </p>
          <PhoneCTA size="lg" label="Get Your NJ Rates" />
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Compare Live NJ Medicare Supplement Rates</h2>
          <p className="text-gray-600 text-sm mb-5">Enter your zip code to see real carrier rates for your age and plan. Rates are from CSG Actuarial and updated daily.</p>
          <QuoteWidget defaultZip="07901" />
        </div>
            <div className="text-sm text-gray-600 mt-4">New Jersey resource: <a href="https://www.nj.gov/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> offers free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey help: <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-700 underline">NJ State Health Insurance Assistance Program (SHIP)</a> offers free, unbiased Medicare counseling to NJ residents.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey help: <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> offers free, unbiased Medicare counseling to NJ residents.</div>
      </section>
    </>
  );
}
