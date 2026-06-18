import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "the best medicare plan for foreign travel | Free Comparison | MedicareYourself",
  description:
    "Find the best Medicare plan for foreign travel. Compare Medigap Plans G & N with emergency coverage abroad — free help from a licensed broker. Call 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/best-medicare-plan-for-foreign-travel" },
  openGraph: {
    title:
      "the best medicare plan for foreign travel | Free Comparison | MedicareYourself",
    description:
      "The best Medicare plan for foreign travel is Plan G or Plan N — both cover emergency care abroad. Compare options free with Anthony Orner.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://medicareyourself.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Medicare Guides",
      item: "https://medicareyourself.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Best Medicare Plan for Foreign Travel",
      item: "https://medicareyourself.com/services/best-medicare-plan-for-foreign-travel",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "The Best Medicare Plan for Foreign Travel: Which Medigap Plans Cover You Abroad",
  author: {
    "@type": "Person",
    name: "Anthony Orner",
    url: "https://medicareyourself.com/about",
  },
  publisher: {
    "@type": "Organization",
    name: "EasyKind Medicare",
    alternateName: "MedicareYourself",
  },
  datePublished: "2026-03-18",
  dateModified: "2026-03-19",
};

const faqs = [
  {
    question: "Are there Medigap plans that cover foreign travel?",
    answer:
      "Yes. Medigap Plans C, D, F, G, M, and N all include foreign travel emergency coverage. After a $250 deductible, they pay 80% of emergency care costs abroad, up to a $50,000 lifetime limit. Plans G and N are the most popular choices for travelers.",
  },
  {
    question:
      "What is the best international travel medical insurance for seniors?",
    answer:
      "If you travel frequently or take extended trips, a standalone travel medical insurance policy often provides better coverage than Medigap alone. These policies can cover non-emergency care, medical evacuation, and trip interruption. Many seniors pair Medigap with a separate travel policy for full protection.",
  },
  {
    question: "Does Medicare Advantage cover you outside the United States?",
    answer:
      "Most Medicare Advantage plans do not cover care outside the U.S. Some PPO plans offer limited emergency coverage abroad, but it varies by plan and is rarely reliable for regular travelers. If you travel internationally, Original Medicare with a Medigap supplement is typically the stronger option.",
  },
  {
    question: "How much does Medigap foreign travel emergency coverage pay?",
    answer:
      "Medigap foreign travel emergency coverage pays 80% of approved charges after a $250 calendar-year deductible. There's a $50,000 lifetime maximum. This covers genuine emergencies only, not routine or pre-planned care abroad.",
  },
];

export default function BestMedicarePlanForForeignTravel() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Best Medicare Plan for Foreign Travel
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        The Best Medicare Plan for Foreign Travel: Which Medigap Plans Cover You
        Abroad
      </h1>

      <Image
        src="/images/best-medicare-plan-for-foreign-travel.webp"
        alt="the best medicare plan for foreign travel"
        width={800}
        height={400}
        className="w-full h-auto rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        The best Medicare plan for foreign travel is a Medigap supplement like
        Plan G or Plan N. Original Medicare alone won't cover you outside the
        U.S. in most situations, and that catches a lot of people off guard
        right before a trip.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        Here's what actually works, what doesn't, and when you need something
        beyond Medigap.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Which Medigap plans include foreign travel emergency benefits
        </h2>
        <p className="text-gray-700 mb-2">
          Six Medigap plans cover foreign travel emergencies: C, D, F, G, M, and
          N. Plan F is closed to anyone who became eligible for Medicare after
          January 1, 2020. For most people enrolling now, Plan G and Plan N are
          the real contenders.
        </p>
        <p className="text-gray-700">
          The benefit structure is identical across all six plans: 80% of
          emergency charges after a $250 annual deductible, with a $50,000
          lifetime cap.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Plan G vs Plan N travel coverage compared side by side
        </h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Feature
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Plan G
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Plan N
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Foreign travel emergency
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Yes — 80% after $250
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Yes — 80% after $250
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Lifetime max (travel)
                </td>
                <td className="border border-gray-300 px-4 py-2">$50,000</td>
                <td className="border border-gray-300 px-4 py-2">$50,000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Part B deductible ($283/yr)
                </td>
                <td className="border border-gray-300 px-4 py-2">You pay</td>
                <td className="border border-gray-300 px-4 py-2">You pay</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Part B excess charges
                </td>
                <td className="border border-gray-300 px-4 py-2">Covered</td>
                <td className="border border-gray-300 px-4 py-2">
                  Not covered
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Office visit copays
                </td>
                <td className="border border-gray-300 px-4 py-2">$0</td>
                <td className="border border-gray-300 px-4 py-2">
                  Up to $20
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Monthly premium
                </td>
                <td className="border border-gray-300 px-4 py-2">Higher</td>
                <td className="border border-gray-300 px-4 py-2">Lower</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700">
          The travel benefit is identical. The real difference is domestic
          coverage. Plan G covers Part B excess charges and has no copays. Plan N
          costs less monthly but has small copays and leaves you exposed to
          excess charges. Rates vary by carrier and location.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why Medicare Advantage rarely covers care outside the U.S.
        </h2>
        <p className="text-gray-700 mb-2">
          Medicare Advantage plans are network-based. Most HMO plans offer zero
          coverage abroad. Some PPO plans include limited emergency benefits
          outside the U.S., but the details vary wildly by carrier and plan
          year.
        </p>
        <p className="text-gray-700">
          If you travel internationally more than once a year, Medicare Advantage
          is usually the wrong fit. Original Medicare paired with a Medigap plan
          gives you far more predictable protection.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          When supplemental travel insurance makes more sense than Medigap alone
        </h2>
        <p className="text-gray-700 mb-2">
          Medigap foreign travel coverage only kicks in for emergencies. It
          won't pay for routine doctor visits abroad, medical evacuation, or
          trip cancellation. The $50,000 lifetime cap can run out fast if you
          need surgery or an ICU stay overseas.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Extended trips (30+ days) often need standalone travel medical insurance</li>
          <li>Medical evacuation alone can cost $50,000 to $100,000+</li>
          <li>Annual travel policies run roughly $100 to $500 depending on age and trip length</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What counts as "outside the U.S." under Medicare rules
        </h2>
        <p className="text-gray-700">
          Medicare considers the 50 states, D.C., Puerto Rico, U.S. Virgin
          Islands, Guam, Northern Mariana Islands, and American Samoa as
          domestic. Everywhere else counts as foreign. A cruise that docks in
          the Bahamas? That's foreign. Canada? Foreign. Mexico? Foreign. Don't
          assume your coverage travels with you.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How to lock in the best rate on a Medigap plan with travel coverage
        </h2>
        <p className="text-gray-700 mb-2">
          Your Medigap Open Enrollment Period starts the month you turn 65 and
          are enrolled in Part B. During those 6 months, carriers can't deny
          you or charge more for health conditions. After that window closes,
          you may face medical underwriting.
        </p>
        <p className="text-gray-700">
          If you're planning trips abroad in retirement, apply for Medigap
          during this window. It's the cleanest path to locking in a good rate
          on Plan G or Plan N.
        </p>
      </section>

      <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
        <p className="text-xl font-semibold text-blue-900 mb-2">
          Want to compare Medigap plans with travel coverage?
        </p>
        <p className="text-gray-700 mb-4">
          Call{" "}
          <a
            href="tel:8555591700"
            className="text-blue-700 font-bold hover:underline"
          >
            855-559-1700
          </a>{" "}
          or{" "}
          <Link
            href="/quote"
            className="text-blue-700 font-bold hover:underline"
          >
            get a free quote online
          </Link>
          . Anthony Orner, licensed Medicare broker.
        </p>
      </div>

      <section className="mt-12">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Related resources
        </h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/services/compare-and-enroll-in-plan-g-online"
              className="text-blue-700 hover:underline"
            >
              Medigap Plan G: What It Covers and What It Costs
            </Link>
          </li>
          <li>
            <Link
              href="/services/quickest-way-to-enroll-into-plan-n"
              className="text-blue-700 hover:underline"
            >
              Medigap Plan N: Is the Lower Premium Worth It?
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-700 hover:underline"
            >
              Medicare Advantage vs Medigap: How to Decide
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/turning-65"
              className="text-blue-700 hover:underline"
            >
              Medigap Open Enrollment: When to Apply
            </Link>
          </li>
        </ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/coverage/travel-outside-the-u.s." rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Travel Outside the U.S.</a> and <a href="https://www.medicare.gov/publications/11037-medicare-coverage-outside-the-united-states.pdf" rel="noopener noreferrer" target="_blank" className="underline">CMS Publication 11037: Medicare Coverage Outside the United States (PDF)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
      </section>
    </main>
  );
}