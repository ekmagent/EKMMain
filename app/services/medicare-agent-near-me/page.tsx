import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare agent near me | Free Local Broker Help, No Obligation | MedicareYourself",
  description:
    "Medicare agent near me — Anthony Orner is a licensed independent broker in NJ and PA comparing 30+ carriers. Free consultation by phone, video, or in person.",
  openGraph: {
    title:
      "medicare agent near me | Free Local Broker Help, No Obligation | MedicareYourself",
    description:
      "Medicare agent near me — Anthony Orner is a licensed independent broker in NJ and PA comparing 30+ carriers. Free consultation by phone, video, or in person.",
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
      item: "https://www.medicareyourself.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Medicare Guides",
      item: "https://www.medicareyourself.com/medicare",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Medicare Agent Near Me",
      item: "https://www.medicareyourself.com/services/medicare-agent-near-me",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Agent Near Me: Find a Licensed Independent Broker Who Works for You",
  author: {
    "@type": "Person",
    name: "Anthony Orner",
    url: "https://www.medicareyourself.com/about",
  },
  publisher: {
    "@type": "Organization",
    name: "EasyKind Medicare",
    alternateName: "MedicareYourself",
  },
  datePublished: "2025-07-01",
  dateModified: "2025-07-01",
};

const faqs = [
  {
    question: "Should I use an agent for Medicare?",
    answer:
      "Yes. A licensed Medicare agent compares plans across multiple carriers at no cost to you. The carrier pays the agent's commission, so there is no fee or markup on your premium whether you use an agent or enroll directly.",
  },
  {
    question: "Where can I go in person for Medicare help?",
    answer:
      "You can meet with an independent broker like Anthony Orner in person if you're in NJ or PA. You can also visit your local State Health Insurance Assistance Program (SHIP) office for free Medicare counseling. Avoid going directly to a single carrier's office, since they can only show you their own plans.",
  },
  {
    question: "How much does a Medicare agent cost?",
    answer:
      "Nothing. Independent Medicare brokers are paid by the insurance carriers, not by you. Your premium is the same whether you enroll through a broker, directly with the carrier, or on medicare.gov.",
  },
  {
    question: "What's the difference between a captive agent and an independent broker?",
    answer:
      "A captive agent represents one insurance company and can only sell that company's plans. An independent broker is contracted with many carriers and can compare options across the market to find the best fit for your situation and budget.",
  },
];

export default function MedicareAgentNearMe() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/medicare" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">Medicare Agent Near Me</span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Medicare Agent Near Me: Find a Licensed Independent Broker Who Works for
        You
      </h1>

      <Image
        src="/images/medicare-agent-near-me.webp"
        alt="Medicare agent near me"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Medicare agent near me is one of the most common searches I see, and I
        get why. You want someone local who can sit across from you and explain
        your options honestly. I'm Anthony Orner, a licensed independent broker
        serving New Jersey and Pennsylvania, and I compare plans from 30+
        carriers so you don't have to.
      </p>
      <p className="mb-6">
        My help is completely free. The insurance carrier pays my commission, not
        you. Your premium stays the same whether you enroll with me or go
        directly to the company.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why proximity matters less than independence and carrier access
        </h2>
        <p className="mb-2">
          A nearby agent who only sells one company's plans can only show you one
          company's prices. That's like buying a car at a dealership that carries
          one brand. You might get a good vehicle, but you'll never know if
          something better existed down the road.
        </p>
        <p>
          An independent broker is contracted with many carriers. I can pull
          quotes from over 30, side by side, and show you exactly where you save.
          Whether I'm across town or across the state, what matters is the number
          of options I bring to the table.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What a good Medicare agent actually does during a consultation
        </h2>
        <p className="mb-2">Here's what I cover in a typical meeting:</p>
        <ul className="list-disc pl-6 space-y-1 mb-2">
          <li>Review your current doctors, prescriptions, and budget</li>
          <li>
            Explain the real difference between Medicare Advantage and Medigap
          </li>
          <li>
            Compare specific plan rates from multiple carriers - not just one
          </li>
          <li>
            Check for enrollment timing - your Medigap Open Enrollment Period
            lasts 6 months starting the month you turn 65 and are enrolled in
            Part B
          </li>
          <li>Handle all the paperwork so nothing falls through the cracks</li>
        </ul>
        <p>The whole thing takes about 20 to 30 minutes. No pressure. No obligation.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Phone, video, and in-person options for NJ and PA residents
        </h2>
        <p className="mb-2">
          I work with clients however they're most comfortable. Some people want
          to meet at their kitchen table. Others prefer a quick Zoom call. Most
          of my appointments actually happen by phone - it's fast and I can
          screen-share plan comparisons if needed.
        </p>
        <p>
          If you're in New Jersey or Pennsylvania, I'm licensed in your state and
          familiar with the carriers that operate there. Location doesn't limit
          what I can do for you.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Captive agents vs. independent brokers
        </h2>
        <p className="mb-2">
          A captive agent works for one insurance company. They may be great at
          explaining that company's plans, but they cannot show you a competitor's
          lower rate. They're paid to sell their employer's products.
        </p>
        <p>
          I'm independent. I don't work for any single carrier. My job is to
          match you with the best plan at the best price, period. If a carrier
          raises your rate at renewal, I move you to a better option.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Key 2026 numbers your agent should know
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Part B premium: $185/month</li>
          <li>Part B deductible: $257/year</li>
          <li>Part A deductible: $1,676 per benefit period</li>
          <li>
            Skilled nursing facility coinsurance (days 21-100): $209.50/day
          </li>
          <li>Medicare Advantage Open Enrollment: October 15 - December 7</li>
        </ul>
        <p className="mt-2">
          If your agent can't rattle off these numbers, they might not be working
          Medicare full-time. Ask.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Request a free Medicare plan comparison in two minutes
        </h2>
        <p className="mb-2">
          Call me at 855-559-1700. I'll ask a few quick questions about your
          situation, pull quotes from multiple carriers, and walk you through
          your best options. No sign-up required. No sales pitch.
        </p>
        <p>
          If you're turning 65 soon, the earlier you call, the better. I can
          help you apply for a Medigap plan up to 6 months before your Part B
          start date, locking in the lowest available rate before it goes up.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center mb-10">
        <p className="text-xl font-semibold mb-2">
          Talk to a licensed independent broker today
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a
            href="tel:855-559-1700"
            className="text-blue-700 font-bold hover:underline"
          >
            855-559-1700
          </a>{" "}
          or{" "}
          <Link
            href="/quote"
            className="text-blue-700 font-bold hover:underline"
          >
            Get a Free Quote
          </Link>
        </p>
        <p className="text-sm text-gray-600">
          No cost. No obligation. NJ and PA residents.
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare/supplement/plan-g-nj"
              className="text-blue-700 hover:underline"
            >
              Medicare Plan G in New Jersey - Rates and Coverage
            </Link>
          </li>
          <li>
            <Link
              href="/medicare/advantage-vs-medigap"
              className="text-blue-700 hover:underline"
            >
              Medicare Advantage vs. Medigap - Which Is Right for You?
            </Link>
          </li>
          <li>
            <Link
              href="/medicare/enrollment-periods"
              className="text-blue-700 hover:underline"
            >
              Medicare Enrollment Periods Explained
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-blue-700 hover:underline"
            >
              About Anthony Orner - Licensed Medicare Broker
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}