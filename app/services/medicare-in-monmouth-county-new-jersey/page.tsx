import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare in monmouth county new jersey | Free Local Broker Quotes | MedicareYourself",
  description:
    "Compare Medicare Advantage, Medigap & Part D plans in Monmouth County, NJ with a licensed local broker. Free zip-code review — call 855-559-1700 today.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-in-monmouth-county-new-jersey" },
  openGraph: {
    title:
      "medicare in monmouth county new jersey | Free Local Broker Quotes | MedicareYourself",
    description:
      "Medicare in Monmouth County, New Jersey — see Supplement and Advantage plans in your zip code. Free comparison from a licensed local broker.",
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
      name: "Medicare in Monmouth County, New Jersey",
      item: "https://medicareyourself.com/services/medicare-in-monmouth-county-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare in Monmouth County, New Jersey: Plans, Costs, and Local Broker Support",
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
};

const faqs = [
  {
    question:
      "What Medicare plans are available in Monmouth County, New Jersey?",
    answer:
      "Monmouth County residents can choose from Original Medicare (Parts A and B), Medicare Supplement (Medigap) plans, Medicare Advantage plans, and Part D prescription drug plans. Plan availability and premiums depend on your specific zip code.",
  },
  {
    question: "Does my Monmouth County zip code affect my Medicare costs?",
    answer:
      "Yes. Medicare Advantage plan availability and premiums, as well as Medigap rates, vary by zip code within Monmouth County. Zip codes closer to the Shore may see different carrier options than those in western parts of the county.",
  },
  {
    question:
      "Is there free Medicare counseling available in Monmouth County?",
    answer:
      "Yes. Monmouth County offers free SHIP (State Health Insurance Assistance Program) counseling through Family and Children's Service. You can also call a licensed local broker like Anthony Orner at 855-559-1700 for a free plan comparison.",
  },
  {
    question: "When can I enroll in Medicare in Monmouth County?",
    answer:
      "Your Initial Enrollment Period starts 3 months before you turn 65 and lasts 7 months. Medicare Advantage and Part D Open Enrollment runs October 15 through December 7 each year. Medigap Open Enrollment lasts 6 months starting the month you turn 65 and are enrolled in Part B.",
  },
];

export default function MedicareInMonmouthCountyNewJersey() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        {" > "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>
        {" > "}
        <span className="text-gray-700">
          Medicare in Monmouth County, New Jersey
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Medicare in Monmouth County, New Jersey: Plans, Costs, and Local Broker
        Support
      </h1>

      <Image
        src="/images/medicare-in-monmouth-county-new-jersey.webp"
        alt="Medicare in Monmouth County New Jersey"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        Medicare in Monmouth County, New Jersey gives you more plan choices than
        most of the state. From Red Bank to Freehold to the Shore towns, your
        exact address determines which carriers and plan types you can access.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        I'm Anthony Orner, a licensed Medicare broker based right here in New
        Jersey. I help Monmouth County residents compare every option at no cost.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Supplement and Advantage plans available in Monmouth County
        </h2>
        <p className="text-gray-700 mb-2">
          You have two main paths after Original Medicare:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-2">
          <li>
            <strong>Medicare Supplement (Medigap)</strong> plans cover gaps in
            Original Medicare. Plan G and Plan N are the most popular in Monmouth
            County. Rates vary by carrier and zip code.
          </li>
          <li>
            <strong>Medicare Advantage</strong> plans bundle hospital, medical,
            and often drug coverage into one plan. Several major carriers offer
            $0-premium options in Monmouth County with added dental and vision.
          </li>
        </ul>
        <p className="text-gray-700">
          Which path fits you depends on your doctors, your medications, and how
          you use healthcare. That's what a comparison call sorts out.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How your zip code affects your premium
        </h2>
        <p className="text-gray-700 mb-2">
          Monmouth County spans dozens of zip codes, from 07701 (Red Bank) to
          07728 (Freehold) to 07753 (Neptune). Carriers price Medigap plans
          differently across these areas.
        </p>
        <p className="text-gray-700">
          Medicare Advantage networks also shift by zip code. A plan available in
          Marlboro might not cover your doctors in Long Branch. Always verify
          provider networks before you enroll.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Key enrollment dates for Monmouth County residents
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>
            <strong>Initial Enrollment:</strong> 3 months before your 65th
            birthday through 3 months after (7-month window).
          </li>
          <li>
            <strong>Medigap Open Enrollment:</strong> 6 months starting the
            month you turn 65 and have Part B. This is your guaranteed-issue
            window for Supplement plans.
          </li>
          <li>
            <strong>Annual Open Enrollment:</strong> October 15 through December
            7 for Medicare Advantage and Part D changes.
          </li>
          <li>
            <strong>Part B late penalty:</strong> 10% added to your $202.90/month
            premium for every 12 months you delayed without creditable coverage.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          2026 costs every Monmouth County enrollee should know
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Part B premium: $202.90/month</li>
          <li>Part B deductible: $283/year</li>
          <li>Part A hospital deductible: $1,676 per benefit period</li>
          <li>Skilled nursing coinsurance (days 21-100): $209.50/day</li>
        </ul>
        <p className="text-gray-700 mt-2">
          These costs are why most people add either a Supplement or Advantage
          plan. Without one, a single hospital stay can cost thousands out of
          pocket.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Local resources and hospital systems
        </h2>
        <p className="text-gray-700 mb-2">
          Monmouth County is served by Hackensack Meridian Health, including
          Monmouth Medical Center in Long Branch and Bayshore Medical Center in
          Holmdel. CentraState Medical Center in Freehold is part of the Atlantic
          Health System.
        </p>
        <p className="text-gray-700">
          Monmouth County also offers free SHIP Medicare counseling through
          Family and Children's Service at (732) 222-9111. The county runs a Part
          B reimbursement program for eligible residents at medicare.co.monmouth.nj.us.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Get a free Monmouth County Medicare plan comparison
        </h2>
        <p className="text-gray-700 mb-2">
          I compare Supplement and Advantage plans from every major carrier
          available in your zip code. No cost, no obligation, no pressure.
        </p>
        <p className="text-gray-700">
          One call gives you a clear side-by-side of what you'd pay and what
          you'd get. If you're turning 65, retiring, or just want to see if a
          better plan exists, that's exactly what I'm here for.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 rounded-lg p-6 text-center text-white">
        <p className="text-xl font-bold mb-2">
          Talk to a Licensed Monmouth County Medicare Broker
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a
            href="tel:8555591700"
            className="underline font-bold text-white"
          >
            855-559-1700
          </a>{" "}
          or{" "}
          <Link
            href="/quote"
            className="underline font-bold text-white"
          >
            get a free quote online
          </Link>
          .
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
              href="/medicare-supplement/new-jersey"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-advantage/new-jersey"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/services/how-much-is-plan-g-in-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Plan G in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/learn/how-to-sign-up-for-medicare"
              className="text-blue-600 hover:underline"
            >
              Medicare Enrollment Guide for New Jersey
            </Link>
          </li>
        </ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/plan-compare" rel="noopener noreferrer" target="_blank" className="underline">Compare Medicare plans on Medicare.gov</a> and review <a href="https://www.medicare.gov/basics/get-started-with-medicare/sign-up/when-does-medicare-coverage-start" rel="noopener noreferrer" target="_blank" className="underline">when your Medicare coverage starts</a>.</div>
            <div className="text-sm text-gray-600 mt-2">Monmouth County residents can also access free SHIP counseling through <a href="https://www.fcsmonmouth.org/_home/services/medicare-counseling/" rel="noopener noreferrer" target="_blank" className="underline">Family and Children's Service SHIP</a> or find other <a href="https://www.nj.gov/humanservices/doas/assistance/medicare/offices.shtml" rel="noopener noreferrer" target="_blank" className="underline">New Jersey SHIP local offices</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased Medicare counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey resources: <a href="https://www.nj.gov/humanservices/doas/services/l-p/msp/" rel="noopener noreferrer" target="_blank" className="underline">NJ Division of Aging Services — Medicare Savings Programs</a></div>
            <div className="text-sm text-gray-600 mt-4">For free state counseling, visit the <a href="https://www.nj.gov/humanservices/doas/assistance/medicare/offices.shtml" rel="noopener noreferrer" target="_blank" className="underline">New Jersey SHIP (State Health Insurance Assistance Program) local offices</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Local help: <a href="https://www.fcsmonmouth.org/_home/services/medicare-counseling/" rel="noopener noreferrer" target="_blank" className="underline">Family and Children's Service of Monmouth County SHIP Counseling</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Local help: <a href="https://www.fcsmonmouth.org/_home/services/medicare-counseling/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">SHIP Medicare Counseling through Family and Children's Service of Monmouth County</a></div>
      </section>
    </main>
  );
}