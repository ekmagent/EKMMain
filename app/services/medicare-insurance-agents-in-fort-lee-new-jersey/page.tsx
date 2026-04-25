import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare insurance agents in fort lee new jersey | Free Broker Help | MedicareYourself",
  description:
    "Medicare insurance agents in Fort Lee, New Jersey — Anthony Orner compares Medigap and Advantage plans from top carriers in Bergen County. Free quote.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-insurance-agents-in-fort-lee-new-jersey" },
  openGraph: {
    title:
      "medicare insurance agents in fort lee new jersey | Free Broker Help | MedicareYourself",
    description:
      "Medicare insurance agents in Fort Lee, New Jersey — Anthony Orner compares Medigap and Advantage plans from top carriers in Bergen County. Free quote.",
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
      name: "Medicare Insurance Agents in Fort Lee, New Jersey",
      item: "https://medicareyourself.com/services/medicare-insurance-agents-in-fort-lee-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Insurance Agents in Fort Lee, New Jersey — Independent Broker for Bergen County",
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
    question: "Should I use an insurance agent for Medicare?",
    answer:
      "Yes. A licensed Medicare agent helps you compare plans side by side at no cost to you. Brokers are paid by the insurance carriers, not by you, so the help is free. An independent broker can show you options from multiple companies instead of just one.",
  },
  {
    question: "How do I choose a Medicare insurance agent?",
    answer:
      "Look for an agent who is licensed in New Jersey, represents multiple carriers (not just one), and will explain both Medigap and Medicare Advantage options. Ask if they offer annual plan reviews. A good broker earns your trust by educating you, not pressuring you.",
  },
  {
    question: "What is the best Medicare plan in New Jersey?",
    answer:
      "There's no single best plan for everyone. The right choice depends on your doctors, prescriptions, budget, and how often you travel. In Bergen County, both Medigap plans and Medicare Advantage HMOs have strong provider networks. A broker can run a personalized comparison for free.",
  },
  {
    question: "How much does it cost to work with a Medicare broker in Fort Lee?",
    answer:
      "Nothing. Medicare brokers are compensated by insurance carriers when you enroll. You pay the same premium whether you use a broker or go directly to the carrier. There's no fee, no markup, and no obligation.",
  },
];

export default function MedicareInsuranceAgentsFortLeeNJ() {
  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span>Medicare Insurance Agents in Fort Lee, New Jersey</span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Medicare Insurance Agents in Fort Lee, New Jersey — Independent Broker
          for Bergen County
        </h1>

        <Image
          src="/images/medicare-insurance-agents-in-fort-lee-new-jersey.webp"
          alt="Medicare insurance agents in Fort Lee New Jersey"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Medicare insurance agents in Fort Lee, New Jersey don't all work the
          same way. Some represent a single carrier. I represent you. As an
          independent broker licensed in NJ, I compare Medigap and Medicare
          Advantage plans across multiple carriers so Fort Lee residents get a
          plan that actually fits their doctors, prescriptions, and budget.
        </p>

        <p className="text-lg mb-6">
          My name is Anthony Orner, and the consultation is free. No pressure,
          no obligation.
        </p>

        <PhoneCTA />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            How an independent broker differs from a captive agent
          </h2>
          <p className="mb-2">
            A captive agent works for one insurance company. They can only show
            you that company's plans, even if a competitor offers something
            better for your situation.
          </p>
          <p>
            An independent broker like me is contracted with multiple carriers. I
            can lay plans side by side and tell you which one covers your
            specific medications at the lowest cost. Same premiums either way.
            The carrier pays me, not you.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            Medigap and Medicare Advantage options in Bergen County
          </h2>
          <p className="mb-2">
            Fort Lee residents have strong options in both categories. Bergen
            County's hospital systems, including Holy Name Medical Center in
            Teaneck and Hackensack Meridian Health, are well-represented across
            Advantage networks and accepted by Original Medicare.
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-2">
            <li>
              <strong>Medigap (Medicare Supplement):</strong> Pairs with
              Original Medicare. You pick any doctor who takes Medicare. Plan G
              and Plan N are the most popular in NJ. Rates vary by carrier and
              age.
            </li>
            <li>
              <strong>Medicare Advantage (Part C):</strong> Replaces Original
              Medicare with an HMO or PPO. Often includes dental, vision, and
              drug coverage. Network restrictions apply.
            </li>
          </ul>
          <p>
            The right choice depends on how often you see specialists, whether
            you travel, and what prescriptions you take. That's exactly what a
            free comparison call answers.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            Why carrier network changes matter in Fort Lee
          </h2>
          <p className="mb-2">
            Hospitals and insurers renegotiate contracts every year. When a major
            health system drops a carrier, thousands of people suddenly can't see
            their doctors without switching plans. It happens more often than
            people expect.
          </p>
          <p>
            I track these network changes in Bergen County so you don't get
            surprised. If your plan's network shifts, I'll help you find an
            alternative during the right enrollment window.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            Fort Lee residents: key dates and enrollment periods to know
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Medigap Open Enrollment:</strong> 6 months starting the
              month you turn 65 and are enrolled in Part B. This is your best
              shot at guaranteed acceptance with no health questions.
            </li>
            <li>
              <strong>Medicare Advantage / Part D Open Enrollment:</strong>{" "}
              October 15 through December 7 each year.
            </li>
            <li>
              <strong>Part B premium (2026):</strong> $202.90/month.
            </li>
            <li>
              <strong>Part A deductible (2026):</strong> $1,676 per benefit
              period.
            </li>
            <li>
              <strong>Part B late enrollment penalty:</strong> 10% for every
              12-month period you delayed without creditable coverage. This
              penalty lasts permanently.
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            What to expect when you call
          </h2>
          <p className="mb-2">
            I'll ask about your doctors, medications, and what matters most to
            you. Then I'll run a comparison across the carriers I represent and
            walk you through the tradeoffs in plain language.
          </p>
          <p>
            Most calls take 15 to 20 minutes. No jargon, no hard sell. If you
            want to think it over, I'll email you everything we discussed.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            Get a free plan comparison from a licensed NJ broker
          </h2>
          <p>
            Whether you're turning 65, retiring from a job with benefits, or
            just unhappy with your current plan, I can help you sort through the
            options. Fort Lee has good choices. Let's find the one that's right
            for you.
          </p>
        </section>

        <div className="mt-10 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <p className="text-xl font-semibold mb-2">
            Talk to a licensed Medicare broker today
          </p>
          <p className="text-lg mb-4">
            Call{" "}
            <a
              href="tel:8555591700"
              className="text-blue-700 font-bold hover:underline"
            >
              855-559-1700
            </a>{" "}
            or{" "}
            <Link
              href="/contact"
              className="text-blue-700 font-bold hover:underline"
            >
              get a free quote online
            </Link>
            .
          </p>
          <p className="text-sm text-gray-600">
            No cost. No obligation. Just clear answers from Anthony Orner.
          </p>
        </div>

        <section className="mt-12">
          <FAQSection faqs={faqs} />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare-supplement/new-jersey"
                className="text-blue-700 hover:underline"
              >
                Medigap Plans in New Jersey: What You Need to Know
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-advantage/new-jersey"
                className="text-blue-700 hover:underline"
              >
                Medicare Advantage Plans in Bergen County
              </Link>
            </li>
            <li>
              <Link
                href="/learn/how-to-sign-up-for-medicare"
                className="text-blue-700 hover:underline"
              >
                When to Enroll in Medicare: Deadlines That Matter
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-blue-700 hover:underline"
              >
                About Anthony Orner — Licensed NJ Medicare Broker
              </Link>
            </li>
                      <li>
              <Link
                href="/services/find-an-nj-medicare-broker-near-you"
                className="text-blue-600 hover:underline"
              >
                Find An NJ Medicare Broker Near You
              </Link>
            </li>
            <li>
              <Link
                href="/services/free-medicare-broker-new-jersey"
                className="text-blue-600 hover:underline"
              >
                Free Medicare Broker New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/services/independent-medicare-agents-near-me"
                className="text-blue-600 hover:underline"
              >
                Independent Medicare Agents Near Me
              </Link>
            </li>
            <li>
              <Link
                href="/services/how-to-enroll-in-medicare-in-new-jersey"
                className="text-blue-600 hover:underline"
              >
                How To Enroll In Medicare In New Jersey
              </Link>
            </li>
</ul>
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/plan-compare" rel="noopener noreferrer" target="_blank" className="underline">Medicare Plan Finder on Medicare.gov</a> and <a href="https://www.medicare.gov/basics/get-started-with-medicare" rel="noopener noreferrer" target="_blank" className="underline">Get Started with Medicare</a>.</div>
            <div className="text-sm text-gray-600 mt-2">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> or verify licenses with the <a href="https://www.nj.gov/dobi/" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
      </article>
    </>
  );
}