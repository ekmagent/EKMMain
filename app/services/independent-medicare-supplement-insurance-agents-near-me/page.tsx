import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Independent Medicare Supplement Insurance Agents Near Me | Compare Medigap Rates Across Carriers | MedicareYourself",
  description:
    "Independent Medicare Supplement insurance agents near you in NJ. Anthony Orner compares Plan G and Plan N rates across all top carriers. Free quote in minutes.",
  openGraph: {
    title:
      "Independent Medicare Supplement Insurance Agents Near Me | Compare Medigap Rates Across Carriers | MedicareYourself",
    description:
      "Independent Medicare Supplement insurance agents near you in NJ. Anthony Orner compares Plan G and Plan N rates across all top carriers. Free quote in minutes.",
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
      item: "https://www.medicareyourself.com/hub",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Independent Medicare Supplement Agents Near Me",
      item: "https://www.medicareyourself.com/services/independent-medicare-supplement-insurance-agents-near-me",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Independent Medicare Supplement Insurance Agents Near You in NJ",
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
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage:
    "https://www.medicareyourself.com/services/independent-medicare-supplement-insurance-agents-near-me",
};

const faqs = [
  {
    question:
      "What is an independent Medicare Supplement insurance agent?",
    answer:
      "An independent agent is not tied to one insurance company. They hold contracts with multiple Medigap carriers, which means they can compare rates and benefits across the market on your behalf. Their services are free to you - carriers pay the agent's commission regardless of which plan you choose.",
  },
  {
    question:
      "How much does it cost to use an independent Medigap agent?",
    answer:
      "Nothing. Independent Medicare Supplement agents are compensated by the insurance carrier, not by you. Your premium is the same whether you buy directly from a carrier or through an agent. The difference is that an agent does the comparison shopping for you.",
  },
  {
    question:
      "Can I switch Medigap plans in NJ without answering health questions?",
    answer:
      "Yes. New Jersey offers year-round guaranteed issue rights for Medicare Supplement plans. This means you can switch carriers or plans at any time without medical underwriting, which is unusual compared to most states.",
  },
  {
    question:
      "What Medigap plans do most people in NJ choose?",
    answer:
      "Plan G and Plan N are the most popular choices. Plan G covers everything except the annual Part B deductible ($257 in 2026). Plan N has lower premiums but includes small copays for office and ER visits. An independent agent can show you exact pricing for both.",
  },
];

export default function IndependentMedicareSuppAgentsPage() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          &gt;{" "}
          <Link href="/services" className="hover:underline">
            Medicare Guides
          </Link>{" "}
          &gt;{" "}
          <span className="text-gray-700">
            Independent Medicare Supplement Agents Near Me
          </span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Independent Medicare Supplement Insurance Agents Near You in NJ
        </h1>

        <Image
          src="/images/hub_independent-medicare-supplement-insurance-agents-near-me.webp"
          alt="Independent Medicare Supplement insurance agents near me"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg text-gray-700 mb-2">
          Finding independent Medicare Supplement insurance agents near you in New Jersey gives you access to every major Medigap carrier through one phone call. I'm Anthony Orner, a licensed independent broker based in NJ, and I work for you, not for any single insurance company.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          That means I show you real rates from real carriers, side by side. No pressure, no hidden agenda.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            How a nearby independent agent saves you money on Medigap
          </h2>
          <p className="text-gray-700 mb-2">
            A captive agent works for one carrier. They can only sell you that carrier's plan, even if a competitor offers the same Plan G for $40 less per month. An independent agent removes that limitation entirely.
          </p>
          <p className="text-gray-700">
            I pull quotes from every carrier I represent, line them up, and let you pick the best price. Same exact standardized coverage. Lower premium. That $40 difference? It adds up to $480 a year back in your pocket.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Carriers an independent NJ Medigap agent can quote for you
          </h2>
          <p className="text-gray-700 mb-3">
            Because Medicare Supplement plans are standardized by the federal government, a Plan G from one carrier covers the same things as a Plan G from another. The only real difference is price. Here are some of the carriers I regularly quote in New Jersey:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Aetna</li>
            <li>Cigna</li>
            <li>Mutual of Omaha</li>
            <li>United American</li>
            <li>Gerber Life</li>
            <li>Anthem (Empire BlueCross BlueShield in NJ)</li>
          </ul>
          <p className="text-gray-700 mt-3">
            Rates change throughout the year. I check them before every appointment so you get current pricing.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Why NJ residents have a unique Medigap advantage
          </h2>
          <p className="text-gray-700 mb-2">
            New Jersey offers year-round guaranteed issue for Medicare Supplement plans. Most states lock you into a six-month open enrollment window around your 65th birthday. Miss it, and you could face medical underwriting or outright denial.
          </p>
          <p className="text-gray-700">
            In NJ, you can switch Medigap carriers any time without health questions. This means an independent agent can re-shop your rate every year and move you if a better deal shows up.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            What to expect during your first call with an independent agent
          </h2>
          <p className="text-gray-700 mb-3">
            No sales pitch. Here's how our call actually goes:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>I ask about your current coverage and what you're paying now</li>
            <li>We confirm your Medicare Part A and Part B effective dates</li>
            <li>I pull live quotes for Plan G and Plan N from multiple carriers</li>
            <li>We compare costs and I answer every question you have</li>
            <li>You decide if and when you want to enroll - zero pressure</li>
          </ul>
          <p className="text-gray-700 mt-3">
            Most calls take about 15 minutes. Some people enroll that day. Others take a week to think it over. Both are fine.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Plan G vs Plan N - the two plans I quote most often
          </h2>
          <p className="text-gray-700 mb-2">
            Plan G covers your 20% Part B coinsurance, Part A deductible ($1,676 in 2026), skilled nursing copays, and foreign travel emergencies. Your only out-of-pocket cost is the $257 annual Part B deductible.
          </p>
          <p className="text-gray-700 mb-2">
            Plan N has lower premiums but includes a $20 copay for some office visits and a $50 copay for ER visits that don't result in admission. For people who rarely visit the doctor, Plan N can save $300-$600 per year.
          </p>
          <p className="text-gray-700">
            I show you both options with actual dollar amounts so the decision is simple math, not guesswork.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Schedule a free Medicare Supplement review with Anthony Orner
          </h2>
          <p className="text-gray-700 mb-2">
            Whether you're turning 65, leaving an employer plan, or just wondering if you're overpaying for your current Medigap policy, I can help. The review is free, the call is quick, and you'll walk away with clear numbers.
          </p>
          <p className="text-gray-700">
            Your Part B premium is already $185 per month in 2026. Let's make sure you're not paying more than you need to on top of that.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center mb-10">
          <p className="text-2xl font-bold mb-3">
            Get a free Medigap quote in minutes
          </p>
          <p className="text-lg mb-4">
            Call now to compare Plan G and Plan N rates from every top carrier in NJ.
          </p>
          <a
            href="tel:8555591700"
            className="text-3xl font-bold underline hover:text-blue-100"
          >
            855-559-1700
          </a>
          <div className="mt-4">
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Related resources
          </h2>
          <ul className="space-y-3">
            <li>
              <Link
                href="/services/medicare-plan-g-cost"
                className="text-blue-600 hover:underline"
              >
                Medicare Plan G Cost in 2026 - What You'll Actually Pay
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-plan-n-vs-plan-g"
                className="text-blue-600 hover:underline"
              >
                Medicare Plan N vs Plan G - Which One Saves You More?
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-supplement-plans-nj"
                className="text-blue-600 hover:underline"
              >
                Medicare Supplement Plans in NJ - Your Complete Guide
              </Link>
            </li>
            <li>
              <Link
                href="/services/when-to-enroll-in-medicare"
                className="text-blue-600 hover:underline"
              >
                When to Enroll in Medicare - Key Dates and Deadlines
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}