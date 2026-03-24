import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare specialists in south carolina | Free Multi-Carrier Quotes | MedicareYourself",
  description:
    "Medicare specialists in South Carolina — Anthony Orner compares Supplement and Advantage plans from top SC carriers. Free quotes, licensed guidance.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-specialists-in-south-carolina" },
  openGraph: {
    title:
      "medicare specialists in south carolina | Free Multi-Carrier Quotes | MedicareYourself",
    description:
      "Medicare specialists in South Carolina — Anthony Orner compares Supplement and Advantage plans from top SC carriers. Free quotes, licensed guidance.",
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
      name: "Medicare Specialists in South Carolina",
      item: "https://medicareyourself.com/services/medicare-specialists-in-south-carolina",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Specialists in South Carolina: Licensed Broker Support for SC Residents",
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
  dateModified: "2026-03-22",
  mainEntityOfPage:
    "https://medicareyourself.com/services/medicare-specialists-in-south-carolina",
};

const faqs = [
  {
    question:
      "What is the income limit for Medicare in South Carolina?",
    answer:
      "There's no income limit to qualify for Medicare in South Carolina. If you're 65 or older (or under 65 with certain disabilities) and have worked at least 10 years paying Medicare taxes, you qualify. However, higher earners may pay an Income-Related Monthly Adjustment Amount (IRMAA) on top of the standard $202.90/month Part B premium for 2026.",
  },
  {
    question:
      "Do I need a Medicare specialist or can I enroll on my own in SC?",
    answer:
      "You can enroll in Original Medicare through Social Security on your own. But choosing between Medigap and Advantage plans, comparing carriers, and understanding SC underwriting rules is where most people get tripped up. An independent specialist compares plans across multiple carriers at no cost to you.",
  },
  {
    question:
      "When is Medigap open enrollment in South Carolina?",
    answer:
      "Your Medigap Open Enrollment Period lasts 6 months, starting the month you turn 65 and are enrolled in Part B. During this window, SC carriers must accept you regardless of health. After it closes, South Carolina does not guarantee year-round open enrollment for Medigap — carriers can use medical underwriting and may deny coverage.",
  },
  {
    question:
      "How much does it cost to work with a Medicare specialist in SC?",
    answer:
      "Nothing. Independent Medicare brokers like Anthony Orner are paid by insurance carriers, not by you. The plan premiums are the same whether you enroll directly or through a broker. You get expert guidance at zero additional cost.",
  },
];

export default function MedicareSpecialistsSouthCarolina() {
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
          Medicare Specialists in South Carolina
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Medicare Specialists in South Carolina: Licensed Broker Support for SC
        Residents
      </h1>

      <Image
        src="/images/hub_medicare-specialists-in-south-carolina.webp"
        alt="medicare specialists in south carolina"
        width={800}
        height={400}
        className="w-full h-auto rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        Medicare specialists in South Carolina help you cut through the noise of plan options, carrier differences, and underwriting rules specific to SC. If you're turning 65 or re-evaluating a plan that's gotten too expensive, an independent broker compares your options across multiple carriers so you don't have to.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        I'm Anthony Orner, a licensed Medicare broker. I work with SC residents by phone to build side-by-side plan comparisons at no cost to you.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why South Carolina retirees need an independent Medicare specialist
        </h2>
        <p className="text-gray-700 mb-2">
          SC has a heavy presence of both Medicare Advantage and Medigap carriers, especially in metro areas like Columbia, Greenville, Charleston, and Myrtle Beach. That's a lot of plans to sort through alone.
        </p>
        <p className="text-gray-700">
          A captive agent sells one carrier's products. An independent specialist shops across carriers to find the plan that actually fits your doctors, prescriptions, and budget. Same premiums either way.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Supplement and Advantage plans available across SC counties
        </h2>
        <p className="text-gray-700 mb-3">
          Your plan options depend on which SC county you live in. Here's the general breakdown:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <strong>Medigap (Supplement):</strong> Plans like G and N are available statewide. Rates vary by carrier, age, and tobacco use. You keep Original Medicare and can see any provider that accepts Medicare.
          </li>
          <li>
            <strong>Medicare Advantage:</strong> HMO and PPO plans vary by county. Urban counties like Richland, Greenville, and Charleston typically have more plan choices. Rural counties may have fewer options.
          </li>
          <li>
            <strong>Part D (drug coverage):</strong> Standalone plans pair with Medigap. Advantage plans usually include drug coverage built in.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          South Carolina Medigap underwriting rules to know before you enroll
        </h2>
        <p className="text-gray-700 mb-2">
          This trips people up. Your 6-month Medigap Open Enrollment Period starts when you're both 65 and enrolled in Part B. During that window, no health questions. No denial.
        </p>
        <p className="text-gray-700">
          After it closes, South Carolina does not offer guaranteed issue Medigap access outside of specific federal triggers (like losing employer coverage or leaving a Medicare Advantage plan within 12 months of first joining). If you have health conditions, waiting can cost you access entirely.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          When Medigap premiums climb, here's what to consider
        </h2>
        <p className="text-gray-700 mb-2">
          Many SC residents on Plan G or Plan F have seen premiums rise sharply year after year. Some are paying close to $500/month. That's real money on a fixed income.
        </p>
        <p className="text-gray-700">
          Switching Medigap carriers (if you can pass underwriting) or evaluating a Medicare Advantage plan are both worth a serious look. I run the numbers on both paths so you can compare the actual costs, not just the sticker price.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          2026 Medicare costs every SC resident should know
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Part B premium: $202.90/month</li>
          <li>Part B deductible: $283/year</li>
          <li>Part A hospital deductible: $1,676 per benefit period</li>
          <li>Skilled nursing facility coinsurance (days 21-100): $209.50/day</li>
          <li>Part B late enrollment penalty: 10% added per 12-month delay</li>
        </ul>
        <p className="text-gray-700 mt-2">
          These costs are what Medigap and Advantage plans help cover. The right plan depends on how often you see doctors and which hospitals you use.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Get a free SC Medicare plan comparison from Anthony Orner
        </h2>
        <p className="text-gray-700">
          I compare Supplement and Advantage plans from multiple carriers available in your SC county. One call, no pressure, no cost. I'll show you what each plan actually covers, what it costs, and which doctors are in network. You decide.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-xl p-8 text-center">
        <p className="text-xl font-semibold mb-2">
          Ready for a free SC Medicare plan comparison?
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/quote" className="underline font-bold">
            Get a Free Quote
          </Link>
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
              href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medigap Plan G: What It Covers and What It Costs
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage vs. Medigap: How to Decide
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/turning-65"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment: When and Why It Matters
            </Link>
          </li>
          <li>
            <Link
              href="/learn/how-to-sign-up-for-medicare"
              className="text-blue-600 hover:underline"
            >
              Part B Late Enrollment Penalty: What You'll Pay
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}