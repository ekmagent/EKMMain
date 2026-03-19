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
    "The best Medicare plan for foreign travel is Plan G or Plan N — both cover emergencies abroad. Compare options free with licensed broker Anthony Orner.",
  openGraph: {
    title:
      "the best medicare plan for foreign travel | Free Comparison | MedicareYourself",
    description:
      "The best Medicare plan for foreign travel is Plan G or Plan N — both cover emergencies abroad. Compare options free with licensed broker Anthony Orner.",
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
  datePublished: "2025-07-14",
  dateModified: "2025-07-14",
};

const faqs = [
  {
    question: "What is the best international travel medical insurance for seniors on Medicare?",
    answer:
      "For short trips, Medigap Plans C, D, F, G, M, and N all include foreign travel emergency coverage up to $50,000 lifetime. For extended stays abroad or non-emergency care, a standalone travel medical insurance policy gives broader protection than any Medigap plan.",
  },
  {
    question: "Does Medicare Advantage cover international travel?",
    answer:
      "Most Medicare Advantage plans do not cover care outside the U.S. A few may offer limited emergency coverage as an extra benefit, but it varies by plan and is never guaranteed. Check your plan's Evidence of Coverage before you travel.",
  },
  {
    question: "How much does Medigap foreign travel emergency coverage pay?",
    answer:
      "Medigap plans that include foreign travel emergency benefits cover 80% of costs after a $250 calendar-year deductible, up to a $50,000 lifetime maximum. You pay the remaining 20% plus any charges beyond that cap.",
  },
  {
    question: "Can I buy Medigap just for travel coverage?",
    answer:
      "No. Medigap is a year-round supplement to Original Medicare, not a travel-only policy. However, the foreign travel emergency benefit is included in most Medigap plans at no extra cost. If you only need travel coverage, a standalone travel insurance policy may be more cost-effective.",
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
        </Link>
        {" > "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>
        {" > "}
        <span className="text-gray-700">Best Medicare Plan for Foreign Travel</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        The Best Medicare Plan for Foreign Travel: Which Medigap Plans Cover You Abroad
      </h1>

      <Image
        src="/images/best-medicare-plan-for-foreign-travel.webp"
        alt="the best medicare plan for foreign travel"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        The best Medicare plan for foreign travel is a Medigap plan that includes the foreign travel emergency benefit. That means Plan G or Plan N for most people enrolling today. Original Medicare alone covers almost nothing outside the U.S., and most Medicare Advantage plans don't either.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Which Medigap plans include foreign travel emergency benefits
        </h2>
        <p className="text-gray-700 mb-2">
          Six standardized Medigap plans cover foreign travel emergencies: C, D, F, G, M, and N. Plans A, B, K, and L do not. Since Plan F closed to new enrollees after 2019, the most popular options with travel coverage are Plan G and Plan N.
        </p>
        <p className="text-gray-700">
          The benefit pays 80% of emergency care costs abroad after a $250 annual deductible. There's a $50,000 lifetime cap. It only applies to emergencies during the first 60 days of a trip.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Plan G vs Plan N travel coverage compared side by side
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm mb-4">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Feature</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Plan G</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Plan N</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Foreign travel emergency</td>
                <td className="border border-gray-300 px-4 py-2">Yes — 80% after $250 deductible</td>
                <td className="border border-gray-300 px-4 py-2">Yes — 80% after $250 deductible</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Lifetime max for travel</td>
                <td className="border border-gray-300 px-4 py-2">$50,000</td>
                <td className="border border-gray-300 px-4 py-2">$50,000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Part B deductible ($283/yr)</td>
                <td className="border border-gray-300 px-4 py-2">You pay it</td>
                <td className="border border-gray-300 px-4 py-2">You pay it</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Office visit copays</td>
                <td className="border border-gray-300 px-4 py-2">$0</td>
                <td className="border border-gray-300 px-4 py-2">Up to $20</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">ER copay (not admitted)</td>
                <td className="border border-gray-300 px-4 py-2">$0</td>
                <td className="border border-gray-300 px-4 py-2">Up to $50</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Monthly premium</td>
                <td className="border border-gray-300 px-4 py-2">Higher — rates vary by carrier</td>
                <td className="border border-gray-300 px-4 py-2">Lower — rates vary by carrier</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700">
          The foreign travel benefit is identical between G and N. Your choice comes down to how you want domestic cost-sharing to work. Plan G has no copays. Plan N trades small copays for a lower monthly premium.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why Medicare Advantage rarely covers care outside the U.S.
        </h2>
        <p className="text-gray-700 mb-2">
          Medicare Advantage plans use provider networks. Those networks don't extend overseas. A handful of plans offer limited urgent or emergency coverage abroad as a supplemental benefit, but it's inconsistent and often capped low.
        </p>
        <p className="text-gray-700">
          If you travel internationally more than once a year, Original Medicare paired with a Medigap plan gives you far more predictable protection than any Advantage plan.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          When supplemental travel insurance makes more sense than Medigap alone
        </h2>
        <p className="text-gray-700 mb-2">
          Medigap's $50,000 lifetime cap sounds reasonable until you picture a hospitalization in Europe or a medical evacuation. One airlift can exceed $100,000. The benefit also only covers emergencies, not routine care or pre-existing condition flare-ups abroad.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Trips longer than 60 days need standalone travel medical insurance</li>
          <li>Medical evacuation coverage requires a separate policy</li>
          <li>Non-emergency care abroad isn't covered by any Medigap plan</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What Medicare.gov says about coverage outside the U.S.
        </h2>
        <p className="text-gray-700 mb-2">
          According to Medicare.gov, Medicare usually doesn't cover health care while you're traveling outside the U.S. There are rare exceptions, like emergency care on a cruise ship within six hours of a U.S. port, or care at a Canadian hospital that's closer than the nearest U.S. hospital in a border emergency.
        </p>
        <p className="text-gray-700">
          These exceptions are narrow. Don't rely on them as a travel plan.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How to lock in the best rate on a Medigap plan with travel coverage
        </h2>
        <p className="text-gray-700 mb-2">
          Your Medigap Open Enrollment Period starts the month you turn 65 and are enrolled in Part B. During that six-month window, no carrier can charge you more or deny you based on health history. After it closes, medical underwriting applies in most states.
        </p>
        <p className="text-gray-700">
          If you're planning retirement travel, apply for Medigap up to 6 months before your Part B start date to lock in rates. Don't wait until your first trip is booked.
        </p>
      </section>

      <div className="mt-12 bg-blue-600 text-white rounded-lg p-8 text-center">
        <p className="text-xl font-semibold mb-2">
          Want help comparing Medigap plans with foreign travel coverage?
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/contact" className="underline font-bold">
            get a free quote
          </Link>{" "}
          — no obligation, no pressure.
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
              href="/services/medicare-supplement-plan-g"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plan G: Full Breakdown
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-supplement-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plan N: What It Covers
            </Link>
          </li>
          <li>
            <Link
              href="/services/medigap-vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medigap vs Medicare Advantage: How to Decide
            </Link>
          </li>
          <li>
            <Link
              href="/services/medigap-open-enrollment"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment: When and Why It Matters
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}