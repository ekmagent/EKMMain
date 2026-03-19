import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "irvington nj medicare insurance agents | Free Local Broker | MedicareYourself",
  description:
    "Irvington NJ Medicare insurance agents - Anthony Orner is a licensed independent broker comparing Supplement and Advantage plans in Essex County. Free quote.",
  openGraph: {
    title:
      "irvington nj medicare insurance agents | Free Local Broker | MedicareYourself",
    description:
      "Irvington NJ Medicare insurance agents - Anthony Orner is a licensed independent broker comparing Supplement and Advantage plans in Essex County. Free quote.",
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
      item: "https://medicareyourself.com/medicare-guides",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Irvington NJ Medicare Insurance Agents",
      item: "https://medicareyourself.com/services/irvington-nj-medicare-insurance-agents",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Irvington NJ Medicare Insurance Agents — Licensed Broker Serving Essex County",
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
  datePublished: "2025-01-01",
  dateModified: "2025-01-01",
};

const faqs = [
  {
    question:
      "Does it cost extra to use a Medicare insurance agent in Irvington NJ?",
    answer:
      "No. Independent Medicare brokers are paid by the insurance carriers, not by you. There is no fee for consultations, plan comparisons, or enrollment assistance. Your premium stays the same whether you use a broker or go directly to the carrier.",
  },
  {
    question:
      "What is the difference between a captive and independent Medicare agent?",
    answer:
      "A captive agent represents one insurance company and can only show you that company's plans. An independent broker like Anthony Orner is licensed with multiple carriers and can compare Supplement and Advantage options side by side to find the best fit for your situation.",
  },
  {
    question: "When should I contact a Medicare agent before turning 65?",
    answer:
      "Reach out at least six months before your 65th birthday. Your Medigap Open Enrollment Period starts the month you turn 65 and are enrolled in Part B. Applying early locks in your rate and gives you guaranteed issue rights with no health questions.",
  },
  {
    question:
      "Can an Irvington Medicare broker help with Medicare Advantage and Part D?",
    answer:
      "Yes. An independent broker can compare Medicare Advantage plans with prescription drug coverage (Part C) as well as standalone Part D drug plans. During Open Enrollment from October 15 to December 7, your broker can review your current plan and switch you if a better option exists.",
  },
];

export default function IrvingtonNJMedicareInsuranceAgents() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/medicare-guides" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Irvington NJ Medicare Insurance Agents
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Irvington NJ Medicare Insurance Agents — Licensed Broker Serving Essex
        County
      </h1>

      <Image
        src="/images/irvington-nj-medicare-insurance-agents.webp"
        alt="Irvington NJ Medicare insurance agents"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Irvington NJ Medicare insurance agents are not all the same. Some work
        for a single carrier, which means you only see that company's plans. As
        an independent broker licensed in New Jersey, I compare Supplement and
        Advantage options from multiple carriers so you get an honest side-by-side
        look at what is available in the 07111 zip code.
      </p>
      <p className="text-lg mb-6">
        My name is Anthony Orner, and I help Irvington residents choose the right
        Medicare coverage without any cost to them. The carriers pay me - you
        never do.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What an independent broker offers Irvington Medicare beneficiaries
        </h2>
        <p className="mb-2">
          A captive agent shows you one company's lineup. I show you plans from
          several carriers and explain the trade-offs in plain English. There is no
          pressure and no sales pitch.
        </p>
        <ul className="list-disc ml-6 mb-2 space-y-1">
          <li>Side-by-side premium comparisons for Medigap plans</li>
          <li>Medicare Advantage plan reviews including network and drug coverage</li>
          <li>Enrollment help at no charge - your premium stays the same</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare Supplement and Advantage plans in Irvington 07111
        </h2>
        <p className="mb-2">
          Irvington falls inside Essex County, which means you have access to a
          solid mix of Medicare Advantage HMO and PPO plans as well as every
          standardized Medigap letter plan. Plan G and Plan N are the most popular
          Supplement options I write in this area.
        </p>
        <p>
          Plan G covers everything Original Medicare does not, except the Part B
          deductible of $257 per year. Plan N has a lower premium but adds small
          copays at office visits. Both are strong choices depending on your budget.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Essex County carrier options and how premiums are rated
        </h2>
        <p className="mb-2">
          New Jersey Medigap carriers use different rating methods. Some are
          community-rated, meaning everyone pays the same regardless of age. Others
          are attained-age, so your premium increases as you get older. This
          matters a lot over a 20-year retirement.
        </p>
        <p>
          I walk you through both types and show you real numbers so you can pick
          the structure that makes sense for your situation. Rates vary by carrier,
          and I will pull current quotes for your age and zip code.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why timing matters for Medigap enrollment
        </h2>
        <p className="mb-2">
          Your Medigap Open Enrollment Period lasts six months. It starts the
          month you turn 65 and are enrolled in Part B. During this window, no
          carrier can deny you or charge more because of health conditions.
        </p>
        <p>
          My practice is to have clients apply up to six months before their Part B
          start date. This locks in the rate early and protects you from premium
          increases before coverage begins. The sooner you lock in, the better your
          rate.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Key 2026 Medicare costs to know
        </h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Part B premium: $185/month</li>
          <li>Part B deductible: $257/year</li>
          <li>Part A deductible: $1,676 per benefit period</li>
          <li>Skilled nursing facility coinsurance (days 21-100): $209.50/day</li>
          <li>Medicare Advantage Open Enrollment: October 15 - December 7</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Schedule a free Irvington Medicare plan review
        </h2>
        <p className="mb-2">
          Whether you are turning 65 next month or reviewing your current plan,
          I can pull up-to-date quotes for your specific zip code and health needs.
          Calls typically take about 15 minutes.
        </p>
        <p>
          Call me at 855-559-1700 or use the link below to request a free
          comparison. There is zero obligation and zero cost.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center mb-10">
        <p className="text-xl font-semibold mb-2">
          Talk to a licensed Medicare broker today
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          for a free plan comparison
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100"
        >
          Get a Free Quote
        </Link>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/services/essex-county-medicare-broker"
              className="text-blue-600 hover:underline"
            >
              Essex County Medicare Broker - Free Plan Comparison
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-plan-g-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Plan G in New Jersey - Benefits and Rates
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-supplement-vs-advantage"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement vs. Medicare Advantage
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medigap-open-enrollment-nj"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment in NJ - What You Need to Know
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}