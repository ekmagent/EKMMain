import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare agents near me | Free Unbiased Plan Comparison | MedicareYourself",
  description:
    "Medicare agents near me — find an independent broker who compares every major carrier with no bias. Anthony Orner offers free, no-pressure consultations.",
  openGraph: {
    title:
      "medicare agents near me | Free Unbiased Plan Comparison | MedicareYourself",
    description:
      "Medicare agents near me — find an independent broker who compares every major carrier with no bias. Anthony Orner offers free, no-pressure consultations.",
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
      item: "https://medicareyourself.com/medicare",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Medicare Agents Near Me",
      item: "https://medicareyourself.com/services/medicare-agents-near-me",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Agents Near Me: What to Look for and How to Get Honest Help",
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
  datePublished: "2025-07-15",
  dateModified: "2025-07-15",
};

const faqs = [
  {
    question: "Should I use a Medicare agent?",
    answer:
      "Yes. A licensed Medicare agent helps you compare plans, understand costs, and enroll correctly at no charge to you. Agents are paid by the insurance carriers, so there is no fee for their help. The key is choosing an independent agent who represents multiple carriers rather than just one company.",
  },
  {
    question: "How do I know if a Medicare agent is independent?",
    answer:
      "Ask them directly: 'How many carriers do you represent?' A captive agent works for one insurance company and can only show you their plans. An independent broker contracts with many carriers and can compare options across the market. You want the second type.",
  },
  {
    question: "Do Medicare agents charge a fee for their services?",
    answer:
      "No. Licensed Medicare agents and brokers are compensated by the insurance carriers when you enroll in a plan. You pay the same premium whether you use an agent or enroll on your own. There should never be a fee charged to you.",
  },
  {
    question: "Can a Medicare agent help me after I enroll?",
    answer:
      "A good agent stays with you year after year. They should review your coverage annually, help you switch plans during Open Enrollment (October 15 through December 7) if something better is available, and assist with claims or billing issues.",
  },
];

export default function MedicareAgentsNearMe() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/medicare" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">Medicare Agents Near Me</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Medicare Agents Near Me: What to Look for and How to Get Honest Help
      </h1>

      <Image
        src="/images/medicare-agents-near-me.webp"
        alt="Medicare agents near me"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Medicare agents near me is one of the most common searches people make when they are turning 65 or reviewing their coverage. The problem? Not every agent you find works in your best interest.
      </p>
      <p className="text-lg mb-6">
        Some represent a single carrier. Others push the plan that pays them the highest commission. Here is how to tell the difference and find an agent who actually helps you.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Captive vs. independent agents - why it matters
        </h2>
        <p className="mb-3">
          A captive agent works for one insurance company. They can only show you that company's plans. If a competitor offers better rates or better coverage in your county, you will never hear about it.
        </p>
        <p>
          An independent broker contracts with multiple carriers. I personally compare plans from every major insurer available in your area. Same premiums, broader view, better decision.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What a good Medicare agent actually does for you
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Compares Medicare Advantage, Medigap, and Part D plans side by side across carriers</li>
          <li>Explains the real costs: the 2026 Part B premium is $185/month, the Part A deductible is $1,676 per benefit period, and the Part B deductible is $257/year</li>
          <li>Handles your enrollment paperwork correctly and on time</li>
          <li>Reviews your plan every year during Open Enrollment (October 15 through December 7) and recommends changes only if they save you money</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Red flags to watch for when choosing an agent
        </h2>
        <p className="mb-3">
          Walk away if an agent pressures you to enroll on the spot. Medicare gives you time to decide, and a trustworthy agent respects that.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>They refuse to tell you how many carriers they represent</li>
          <li>They only recommend one plan without explaining alternatives</li>
          <li>They ask for payment - licensed agents are paid by carriers, never by you</li>
          <li>They contact you without your permission through cold calls or door knocking</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Local knowledge matters more than a national call center
        </h2>
        <p className="mb-3">
          Medicare plan availability varies by county. A local broker knows which carriers have strong provider networks in your area and which plans your doctors actually accept.
        </p>
        <p>
          A 1-800 number call center agent reading a script does not have that knowledge. They cannot tell you which hospital systems dropped a specific Medicare Advantage plan last year.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How agents are paid and why it costs you nothing
        </h2>
        <p className="mb-3">
          Insurance carriers pay agents a commission when you enroll. Your premium stays the same whether you use an agent or go directly to the carrier. There is zero financial downside to getting professional help.
        </p>
        <p>
          The real cost is enrolling in the wrong plan because nobody showed you all your options.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Work with a licensed independent broker at no cost
        </h2>
        <p className="mb-3">
          I am Anthony Orner, a licensed independent Medicare broker. I compare every major carrier available in your area and walk you through the differences in plain English. No sales pitch. No pressure.
        </p>
        <p>
          Whether you are turning 65, leaving employer coverage, or just want to make sure your current plan still makes sense, one phone call can save you hundreds of dollars a year.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-8 text-center my-10">
        <p className="text-2xl font-bold mb-3">
          Talk to an Independent Medicare Broker Today
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-semibold">
            855-559-1700
          </a>{" "}
          for a free, no-pressure plan comparison.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Get a Free Quote
        </Link>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-12 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-3">
          <li>
            <Link
              href="/medicare/medicare-advantage-vs-medigap"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage vs. Medigap: Which Is Right for You?
            </Link>
          </li>
          <li>
            <Link
              href="/medicare/plan-g"
              className="text-blue-600 hover:underline"
            >
              Medicare Plan G: Benefits, Costs, and How to Enroll
            </Link>
          </li>
          <li>
            <Link
              href="/medicare/open-enrollment"
              className="text-blue-600 hover:underline"
            >
              Medicare Open Enrollment: Dates and What You Can Change
            </Link>
          </li>
          <li>
            <Link
              href="/medicare/part-b-premium"
              className="text-blue-600 hover:underline"
            >
              2026 Medicare Part B Premium and Deductible
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}