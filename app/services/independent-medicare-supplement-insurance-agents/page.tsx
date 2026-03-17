import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Independent Medicare Supplement Insurance Agents | Compare Every Top Carrier Free | MedicareYourself",
  description:
    "Independent Medicare Supplement insurance agents compare every top carrier for you. Anthony Orner is licensed, independent, and free to work with. Get a quote.",
  openGraph: {
    title:
      "Independent Medicare Supplement Insurance Agents | Compare Every Top Carrier Free | MedicareYourself",
    description:
      "Independent Medicare Supplement insurance agents compare every top carrier for you. Anthony Orner is licensed, independent, and free to work with. Get a quote.",
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
      name: "Independent Medicare Supplement Insurance Agents",
      item: "https://www.medicareyourself.com/services/independent-medicare-supplement-insurance-agents",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Why You Want an Independent Medicare Supplement Insurance Agent",
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
};

const faqs = [
  {
    question: "Do independent Medicare Supplement agents charge a fee?",
    answer:
      "No. Independent Medicare Supplement agents are paid a commission by the insurance carrier you choose. You pay the same monthly premium whether you use an agent or enroll directly with the carrier.",
  },
  {
    question:
      "What is the difference between an independent and a captive Medicare agent?",
    answer:
      "A captive agent works for one insurance company and can only sell that company's plans. An independent agent is licensed with multiple carriers and can show you quotes from all of them so you can compare rates side by side.",
  },
  {
    question: "Can I switch Medicare Supplement agents without changing my plan?",
    answer:
      "Yes. You can assign a new agent of record to your existing Medigap policy without changing your plan or your premium. Your coverage stays exactly the same.",
  },
  {
    question:
      "Does New Jersey allow year-round enrollment in Medicare Supplement plans?",
    answer:
      "Yes. New Jersey offers year-round guaranteed issue rights for Medigap plans. This means NJ residents can enroll in or switch Medicare Supplement plans at any time without medical underwriting.",
  },
];

export default function IndependentMedicareSupplementInsuranceAgents() {
  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-600">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          &gt;{" "}
          <Link href="/services" className="hover:underline">
            Medicare Guides
          </Link>{" "}
          &gt;{" "}
          <span className="text-gray-900">
            Independent Medicare Supplement Insurance Agents
          </span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Independent Medicare Supplement Insurance Agents: What Sets Them Apart
        </h1>

        <Image
          src="/images/hub_independent-medicare-supplement-insurance-agents.webp"
          alt="independent medicare supplement insurance agents"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg mb-2">
          Independent Medicare Supplement insurance agents work for you, not for
          one carrier. They hold licenses with multiple companies, which means
          they can pull real quotes from every major insurer and lay them out
          side by side.
        </p>
        <p className="text-lg mb-6">
          That single difference can save you hundreds of dollars a year on the
          exact same Medigap coverage.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Independent vs. captive Medicare Supplement agents explained
          </h2>
          <p className="mb-2">
            A captive agent sells plans from one company. If that company's Plan
            G costs $180/month but a competitor charges $145/month for identical
            benefits, the captive agent can't tell you. They literally aren't
            licensed to sell the cheaper option.
          </p>
          <p>
            An independent agent has contracts with many carriers. Same
            standardized plan, better price shopping. No loyalty conflict.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How independent agents compare Plan G and Plan N across carriers
          </h2>
          <p className="mb-2">
            Every Medicare Supplement plan labeled "Plan G" covers the same
            benefits no matter which company sells it. The only variable is
            price. An independent agent runs quotes from 10 or more carriers at
            once.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Plan G covers everything except the Part B deductible ($257 in 2026)</li>
            <li>Plan N has lower premiums but adds small copays at doctor visits</li>
            <li>Monthly rates for the same plan can vary $40-$80 between carriers</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What it costs to use an independent Medicare agent (nothing)
          </h2>
          <p className="mb-2">
            You pay zero. The insurance carrier pays the agent's commission
            directly. Your premium is identical whether you call the carrier
            yourself or go through an independent agent.
          </p>
          <p>
            There is no catch. You get free expert help and the same price you'd
            pay on your own.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why this matters even more in New Jersey
          </h2>
          <p className="mb-2">
            NJ gives you year-round guaranteed issue rights for Medigap. That
            means you can switch plans any time without medical underwriting. An
            independent agent can check rates every year and move you to a
            cheaper carrier if one opens up.
          </p>
          <p>
            Most states lock you in after your initial enrollment window. New
            Jersey doesn't. Take advantage of it.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What to look for in an independent Medicare Supplement agent
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Licensed in your state and contracted with multiple Medigap carriers</li>
            <li>Willing to show you quotes from every company they represent</li>
            <li>Available after enrollment to help with claims or future rate reviews</li>
            <li>No pressure to pick the most expensive plan</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Connect with an independent NJ Medicare Supplement agent today
          </h2>
          <p className="mb-2">
            I'm Anthony Orner, a licensed independent Medicare broker in New
            Jersey. I work with all the top Medigap carriers and my help costs
            you nothing. I'll pull current quotes, explain the trade-offs
            between Plan G and Plan N, and let you decide with zero pressure.
          </p>
          <p>
            Call{" "}
            <a href="tel:8555591700" className="text-blue-700 font-semibold">
              855-559-1700
            </a>{" "}
            or request a quote below.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-6 text-center my-10">
          <p className="text-xl font-bold mb-2">
            Ready to compare Medicare Supplement rates?
          </p>
          <p className="mb-4">
            Call{" "}
            <a
              href="tel:8555591700"
              className="underline font-semibold text-white"
            >
              855-559-1700
            </a>{" "}
            to speak with Anthony directly.
          </p>
          <Link
            href="/quote"
            className="inline-block bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
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
                href="/services/medicare-supplement-plan-g-nj"
                className="text-blue-700 hover:underline"
              >
                Medicare Supplement Plan G in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-supplement-plan-n-nj"
                className="text-blue-700 hover:underline"
              >
                Medicare Supplement Plan N in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/services/medigap-plans-nj"
                className="text-blue-700 hover:underline"
              >
                Medigap Plans in NJ - Full Guide
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-near-me"
                className="text-blue-700 hover:underline"
              >
                Find a Medicare Broker Near You
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}