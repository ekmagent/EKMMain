import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "linden nj medicare insurance agents | Free Quote | MedicareYourself",
  description:
    "Linden NJ Medicare insurance agents — Anthony Orner compares Supplement and Advantage plans across carriers in Union County. Free quote, no obligation.",
  openGraph: {
    title:
      "linden nj medicare insurance agents | Free Quote | MedicareYourself",
    description:
      "Linden NJ Medicare insurance agents — Anthony Orner compares Supplement and Advantage plans across carriers in Union County. Free quote, no obligation.",
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
      item: "https://www.medicareyourself.com/medicare-guides",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Linden NJ Medicare Insurance Agents",
      item: "https://www.medicareyourself.com/services/linden-nj-medicare-insurance-agents",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Linden NJ Medicare Insurance Agents: Independent Broker for Union County",
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
  datePublished: "2025-01-01",
  dateModified: "2025-07-01",
};

const faqs = [
  {
    question: "Should I use an insurance agent for Medicare?",
    answer:
      "Yes. A licensed Medicare agent can compare plans across multiple carriers at no cost to you. Independent brokers aren't locked into one company, so they can show you options a captive agent can't. You get personalized guidance without paying a fee.",
  },
  {
    question: "What is the highest reviewed Medicare insurance in NJ?",
    answer:
      "Plan ratings change each year based on CMS Star Ratings. In New Jersey, several carriers consistently rate well for both Medicare Advantage and Medigap plans. The best plan for you depends on your doctors, prescriptions, and budget. Anthony can pull current ratings and compare them side by side.",
  },
  {
    question: "How can I get help with Medicare premiums in New Jersey?",
    answer:
      "New Jersey offers programs like NJ PAAD (Pharmaceutical Assistance to the Aged and Disabled) and Medicaid-linked Medicare Savings Programs that can help cover Part B premiums and drug costs. Income limits apply. Anthony can help you determine if you qualify.",
  },
  {
    question: "Do Medicare insurance agents charge?",
    answer:
      "No. Licensed Medicare agents are paid by the insurance carriers, not by you. There's no fee for consultations, plan comparisons, or enrollment help. The plans cost the same whether you enroll directly or through a broker.",
  },
];

export default function LindenNJMedicareInsuranceAgents() {
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
          Linden NJ Medicare Insurance Agents
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Linden NJ Medicare Insurance Agents: Independent Broker for Union County
      </h1>

      <Image
        src="/images/linden-nj-medicare-insurance-agents.webp"
        alt="Linden NJ Medicare insurance agents"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Linden NJ Medicare insurance agents who work for a single carrier can only show you what that carrier sells. I'm Anthony Orner, an independent licensed broker who compares plans from multiple companies so you see the full picture.
      </p>
      <p className="text-lg mb-6">
        My office serves Linden, Roselle, Rahway, Cranford, and the rest of Union County. Every consultation is free, and you'll never be charged a fee.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What a licensed independent broker does differently in Linden
        </h2>
        <p className="mb-3">
          A captive agent represents one insurance company. I represent you. That means I can pull quotes from multiple carriers and lay them next to each other so you can see real differences in premiums, networks, and drug coverage.
        </p>
        <p>
          If a plan's rates jump next year, I'll reach out and help you switch. You won't need to start over with someone new.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare Supplement and Advantage plans available in 07036
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Medicare Supplement (Medigap):</strong> Plan G and Plan N are the most popular in Linden. They work with any doctor who accepts Medicare nationwide. Rates vary by carrier, even for identical coverage.
          </li>
          <li>
            <strong>Medicare Advantage:</strong> Several HMO and PPO options in Union County include prescription drug coverage, dental, and vision. Networks typically include RWJBarnabas Health and Trinitas Regional Medical Center.
          </li>
          <li>
            <strong>Part D (drug plans):</strong> Stand-alone prescription plans pair with Medigap. Formularies change annually, so I verify your medications are covered before you enroll.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How Linden seniors can lower their Medicare costs
        </h2>
        <p className="mb-3">
          The Part B premium for 2026 is $202.90/month. On top of that, Original Medicare leaves you with a $1,676 Part A deductible per hospital stay and 20% coinsurance on outpatient care after a $283 Part B deductible.
        </p>
        <p>
          A Supplement plan eliminates most or all of those costs. An Advantage plan may lower your monthly premium but uses a network. I'll run both scenarios with your actual doctors and prescriptions so you can compare real out-of-pocket costs.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why timing matters for new enrollees
        </h2>
        <p className="mb-3">
          Your Medigap Open Enrollment Period starts the month you turn 65 and are enrolled in Part B. During those six months, carriers must accept you at their best rate with no health questions.
        </p>
        <p>
          My practice is to have clients apply up to six months before their Part B start date. This locks in the rate early and protects you from premium increases before coverage begins. The sooner you lock in, the better your rate.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Local healthcare access in Union County
        </h2>
        <p className="mb-3">
          Linden residents are close to Robert Wood Johnson University Hospital in Rahway, Trinitas Regional Medical Center in Elizabeth, and the broader RWJBarnabas Health system. Advantage plan networks vary, so I confirm your providers are in-network before recommending anything.
        </p>
        <p>
          If you see specialists in Newark or New York City, Medigap gives you the broadest access since it works with any Medicare-accepting provider nationwide.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Book a free Medicare consultation in Linden
        </h2>
        <p>
          Call or schedule a time to go over your options. I'll compare plans, check your doctors and medications, and give you a clear recommendation. No pressure, no cost, no obligation.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center mb-10">
        <p className="text-xl font-semibold mb-2">
          Talk to a licensed Medicare broker who serves Linden and Union County
        </p>
        <p className="text-lg mb-3">
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
            Get a Free Quote
          </Link>
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/services/union-county-medicare-broker"
              className="text-blue-700 hover:underline"
            >
              Union County Medicare Broker
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-supplement-plan-g-nj"
              className="text-blue-700 hover:underline"
            >
              Medicare Supplement Plan G in NJ
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-vs-medigap"
              className="text-blue-700 hover:underline"
            >
              Medicare Advantage vs. Medigap
            </Link>
          </li>
          <li>
            <Link
              href="/services/rahway-nj-medicare-insurance"
              className="text-blue-700 hover:underline"
            >
              Rahway NJ Medicare Insurance
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}