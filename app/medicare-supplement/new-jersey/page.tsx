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
    "Compare Medicare Supplement plans in New Jersey. Plan G rates from top carriers, NJ enrollment rules, and free guidance. Call 855-559-1700.",
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
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.medicareyourself.com" },
    { "@type": "ListItem", position: 2, name: "Medicare Supplement", item: "https://www.medicareyourself.com/medicare-supplement" },
    { "@type": "ListItem", position: 3, name: "New Jersey", item: "https://www.medicareyourself.com/medicare-supplement/new-jersey" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Medicare Supplement Plans in New Jersey (2026)",
  description: "A comprehensive guide to Medicare Supplement (Medigap) plans in New Jersey, including Plan G rates, NJ-specific enrollment rules, and carrier comparisons.",
  datePublished: "2026-01-01",
  dateModified: "2026-03-13",
  author: {
    "@type": "Person",
    name: "MedicareYourself",
    url: "https://www.medicareyourself.com/about",
  },
  publisher: {
    "@type": "Organization",
    name: "MedicareYourself",
    url: "https://www.medicareyourself.com",
  },
};

const faqs = [
  {
    question: "What is the best Medicare Supplement plan in New Jersey in 2026?",
    answer:
      "Plan G is the most popular Medicare Supplement plan in New Jersey for new enrollees in 2026. It covers everything Medicare covers except the Part B deductible ($257 in 2026), giving you near-zero out-of-pocket costs with any doctor who accepts Medicare. For those who qualify, Plan N offers lower premiums with small copays.",
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
              Last reviewed: March 2026 · Data sourced from CMS.gov and NJ Department of Banking and Insurance
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
                The NJ Department of Banking and Insurance (DOBI) regulates all Medigap plans sold
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
          Source: CMS Medicare Supplement standardized plans. Plan F is only available to those who became Medicare-eligible before January 1, 2020.
        </p>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-4">
        <FAQSection faqs={faqs} title="Medicare Supplement Questions — New Jersey" />
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
      </section>
    </>
  );
}
