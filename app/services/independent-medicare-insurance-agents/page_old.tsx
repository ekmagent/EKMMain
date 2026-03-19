import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "independent medicare insurance agents | Free Plan Comparison | MedicareYourself",
  description:
    "Independent Medicare insurance agents compare plans from dozens of carriers at no cost. See how Anthony Orner finds lower rates. Free consultation.",
  openGraph: {
    title:
      "independent medicare insurance agents | Free Plan Comparison | MedicareYourself",
    description:
      "Independent Medicare insurance agents compare plans from dozens of carriers at no cost. See how Anthony Orner finds lower rates. Free consultation.",
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
      name: "Independent Medicare Insurance Agents",
      item: "https://medicareyourself.com/services/independent-medicare-insurance-agents",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Independent Medicare Insurance Agents: Why Working With One Saves You Money",
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
  datePublished: "2025-07-01",
  dateModified: "2025-07-01",
};

const faqs = [
  {
    question: "What is an independent Medicare agent?",
    answer:
      "An independent Medicare agent is a licensed broker who isn't tied to a single insurance company. They can compare plans from dozens of carriers - Medicare Supplement, Medicare Advantage, and Part D - to find the best fit for your situation. Their services are free to you because insurance carriers pay their commissions.",
  },
  {
    question:
      "How is an independent agent different from a captive agent?",
    answer:
      "A captive agent works for one insurance company and can only show you that company's plans. An independent agent represents multiple carriers, so they can compare premiums, networks, and benefits side by side. This means you see real options instead of a single sales pitch.",
  },
  {
    question: "Do independent Medicare agents charge a fee?",
    answer:
      "No. Independent Medicare agents are paid by insurance carriers, not by you. Your premium is the same whether you enroll through an agent or directly with the carrier. There's no markup and no hidden cost.",
  },
  {
    question: "How do I know if a Medicare agent is licensed?",
    answer:
      "Ask for their National Producer Number (NPN) and verify it through your state's Department of Banking and Insurance. A legitimate agent will have no problem sharing this. You can also check that they're certified with the carriers they represent.",
  },
];

export default function IndependentMedicareInsuranceAgentsPage() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <main className="max-w-4xl mx-auto px-4 py-8">
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
            Independent Medicare Insurance Agents
          </span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Independent Medicare Insurance Agents: Why Working With One Saves You Money
        </h1>

        <Image
          src="/images/independent-medicare-insurance-agents.webp"
          alt="independent medicare insurance agents"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg mb-2">
          Independent Medicare insurance agents compare plans from 30+ carriers so you don't have to call each company yourself. You pay nothing for this service - the carriers pay the agent, and your premium stays exactly the same.
        </p>
        <p className="text-lg mb-6">
          I'm Anthony Orner, a licensed independent broker in New Jersey. Here's why the distinction between independent and captive matters for your wallet.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Captive vs. independent: the difference that affects your premium
          </h2>
          <p className="mb-3">
            A captive agent works for one company. They can only sell you that company's plans - even if a competitor offers the same coverage for $40 less per month.
          </p>
          <p>
            An independent agent has contracts with multiple carriers. That means I can pull rates from dozens of companies and show you an actual comparison, not just one option presented as the best.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How an independent agent compares carriers side by side
          </h2>
          <p className="mb-3">
            When you call me, I ask about your doctors, prescriptions, and budget. Then I run quotes across every carrier available in your zip code. Here's what I'm comparing:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Monthly premiums for the same plan letter (Plan G from Carrier A vs. Carrier B vs. Carrier C)</li>
            <li>Rate increase history - some carriers raise premiums aggressively, others stay stable</li>
            <li>Household and payment discounts you might not know exist</li>
            <li>Part D formularies matched to your actual medications</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What to look for in a licensed Medicare broker
          </h2>
          <p className="mb-3">
            Not all agents are equal. Before you work with anyone, check three things:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>License status.</strong> Verify their NPN through your state's insurance department.</li>
            <li><strong>Number of carriers.</strong> If they only represent two or three companies, you're not getting a real comparison.</li>
            <li><strong>Ongoing support.</strong> A good broker helps after enrollment - with claims issues, annual reviews, and plan changes every year.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why people regret not using an independent agent sooner
          </h2>
          <p className="mb-3">
            Picking a Part D plan and a Medigap plan at the same time is harder than most people expect. You're comparing dozens of options across multiple categories, and the stakes feel high because they are.
          </p>
          <p>
            Many people I talk to spent hours on Medicare.gov comparing plans alone before calling me. Within one conversation, we usually narrow it down to two or three real choices. That's the value of working with someone who does this every day.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Your premium is the same whether you use an agent or not
          </h2>
          <p>
            This surprises people. Insurance carriers set the premium. Whether you enroll online, call the carrier directly, or go through an independent agent, you pay the same rate. The carrier compensates the agent separately. There's no markup. You just get help for free.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Request a free multi-carrier comparison
          </h2>
          <p>
            I'll pull quotes from every carrier in your area, match Part D plans to your prescriptions, and walk you through the tradeoffs in plain English. No cost, no pressure, no obligation to enroll.
          </p>
        </section>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center mb-10">
          <p className="text-lg font-semibold mb-2">
            Talk to an independent Medicare agent today
          </p>
          <p className="mb-4">
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
          </p>
          <p className="text-sm text-gray-600">
            Anthony Orner, Licensed Medicare Broker - NJ
          </p>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare-guides/medicare-supplement-plans"
                className="text-blue-700 hover:underline"
              >
                Medicare Supplement Plans Explained
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/medicare-plan-g"
                className="text-blue-700 hover:underline"
              >
                Medicare Plan G: What It Covers and What It Costs
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/medicare-advantage-vs-medigap"
                className="text-blue-700 hover:underline"
              >
                Medicare Advantage vs. Medigap: How to Decide
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/medicare-part-d"
                className="text-blue-700 hover:underline"
              >
                Medicare Part D: Finding the Right Drug Plan
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}