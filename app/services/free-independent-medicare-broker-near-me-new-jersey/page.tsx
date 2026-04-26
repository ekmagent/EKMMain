import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "free independent medicare broker near me new jersey | Free Quote | MedicareYourself",
  description:
    "Free independent Medicare broker near you in New Jersey. Anthony Orner compares top Medigap and Advantage carriers at no charge. Request a free quote today.",
  alternates: { canonical: "https://medicareyourself.com/services/free-independent-medicare-broker-near-me-new-jersey" },
  openGraph: {
    title:
      "free independent medicare broker near me new jersey | Free Quote | MedicareYourself",
    description:
      "Free independent Medicare broker near you in New Jersey. Anthony Orner compares top Medigap and Advantage carriers at no charge. Request a free quote today.",
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
      name: "Free Independent Medicare Broker Near You in New Jersey",
      item: "https://medicareyourself.com/services/free-independent-medicare-broker-near-me-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Free Independent Medicare Broker Near You in New Jersey",
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
    question: "Are Medicare brokers free?",
    answer:
      "Yes. Independent Medicare brokers are paid by insurance carriers, not by you. There is no fee, no markup, and no hidden cost. You pay the same premium whether you enroll directly with a carrier or through a broker.",
  },
  {
    question:
      "What's the difference between a Medicare agent and a Medicare broker?",
    answer:
      "A Medicare agent typically represents one insurance company. An independent broker is licensed with multiple carriers and can compare plans across all of them. This means a broker can show you options from 7, 10, or even 12+ carriers side by side, rather than only recommending one company's products.",
  },
  {
    question: "How do I find a trustworthy Medicare broker in New Jersey?",
    answer:
      "Look for a broker who is licensed in New Jersey, works independently (not captive to one carrier), and is willing to show you plans from multiple companies. Ask how many carriers they represent. A good broker will never pressure you and will explain the tradeoffs clearly.",
  },
  {
    question: "Can I meet with a Medicare broker in person in NJ?",
    answer:
      "Yes. Anthony Orner offers in-person, phone, and virtual appointments across New Jersey. Whether you're in North Jersey, the Shore, or South Jersey, you can schedule a free consultation in the format that works best for you.",
  },
];

export default function FreeIndependentMedicareBrokerNearMeNewJersey() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
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
          Free Independent Medicare Broker Near You in New Jersey
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Free Independent Medicare Broker Near You in New Jersey
      </h1>

      <Image
        src="/images/free-independent-medicare-broker-near-me-new-jersey.webp"
        alt="Free independent Medicare broker near me New Jersey"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        Free independent Medicare broker near me in New Jersey is one of the most common searches I see from people turning 65 or reviewing their coverage. I&apos;m Anthony Orner, a licensed independent broker based in NJ, and I help people compare plans from multiple carriers without charging a dime.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        Medicare feels overwhelming when you first dig into it. Part A, Part B, Advantage, Medigap, drug plans. Most people tell me they didn&apos;t realize how many choices they&apos;d face. That&apos;s exactly why an independent broker exists.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why independent brokers in NJ never charge you a fee
        </h2>
        <p className="text-gray-700 mb-2">
          Insurance carriers pay brokers directly. Your premium stays the same whether you call a carrier yourself or work with me. There&apos;s no markup, no hidden cost, no catch.
        </p>
        <p className="text-gray-700">
          The difference is what you get: someone who sits on your side of the table and compares options across companies instead of pushing one carrier&apos;s products.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How many carriers Anthony Orner compares for every client
        </h2>
        <p className="text-gray-700 mb-2">
          I&apos;m licensed with 12+ Medicare carriers in New Jersey. That means for every client, I can pull quotes from companies offering Medigap, Medicare Advantage, and Part D plans and lay them out side by side.
        </p>
        <p className="text-gray-700">
          A captive agent at one company shows you one option. I show you the market. You pick what fits your doctors, medications, and budget.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What an independent broker actually does differently
        </h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Checks if your doctors are in-network across multiple plans</li>
          <li>Runs your prescriptions through each carrier&apos;s formulary</li>
          <li>Explains what you&apos;d actually pay out-of-pocket, not just the premium</li>
          <li>Tells you when a plan isn&apos;t a good fit, even if it means recommending fewer products</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          In-person, phone, and virtual appointments across New Jersey
        </h2>
        <p className="text-gray-700 mb-2">
          I work with clients from Bergen County to Cape May. Whether you prefer to sit across a table, talk on the phone, or hop on a video call, I&apos;ll meet you wherever you&apos;re comfortable.
        </p>
        <p className="text-gray-700">
          No office visit required. Most people start with a quick phone call and have a clear plan within one conversation.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Key dates and numbers you should know for 2026
        </h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Part B monthly premium: $202.90</li>
          <li>Part B annual deductible: $283</li>
          <li>Part A deductible: $1,676 per benefit period</li>
          <li>Medigap Open Enrollment: 6 months starting the month you turn 65 and are enrolled in Part B</li>
          <li>Medicare Advantage/Part D Open Enrollment: October 15 through December 7</li>
          <li>Part B late enrollment penalty: 10% for every 12-month period you delayed</li>
        </ul>
        <p className="text-gray-700 mt-3">
          If you&apos;re new to Medicare and considering Medigap, apply up to 6 months before your Part B start date to lock in the best rate. Miss that window and medical underwriting can increase your costs significantly.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Get a free Medicare plan comparison in under 10 minutes
        </h2>
        <p className="text-gray-700 mb-2">
          Call me with your zip code, current doctors, and medication list. In under 10 minutes, I&apos;ll tell you which plans cover your needs and what they&apos;ll actually cost.
        </p>
        <p className="text-gray-700">
          No pressure. No sales pitch. Just clear information so you can make a decision you feel good about.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center my-10">
        <p className="text-xl font-semibold mb-2">
          Ready for a free, no-obligation comparison?
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
        <p className="text-sm opacity-90">
          Anthony Orner, Licensed Medicare Broker in New Jersey
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Related resources
        </h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-supplement/new-jersey"
              className="text-blue-600 hover:underline"
            >
              Medigap Plans in New Jersey: What You Need to Know
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
              href="/learn/medicare-enrollment-periods"
              className="text-blue-600 hover:underline"
            >
              Medicare Enrollment Periods Explained
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-blue-600 hover:underline"
            >
              About Anthony Orner and EasyKind Medicare
            </Link>
          </li>
        </ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/basics/get-started-with-medicare/get-more-coverage/working-with-an-agent-or-broker" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov: Working with an agent or broker</a> &middot; <a href="https://www.medicare.gov/plan-compare/" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov Plan Finder</a></div>
            <div className="text-sm text-gray-600 mt-2">For free unbiased counseling in New Jersey, contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
      </section>
    </main>
  );
}