import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "independent medicare supplement insurance agents near me | Free Quote | MedicareYourself",
  description:
    "Independent Medicare Supplement insurance agents near you in NJ. Anthony Orner compares Plan G and Plan N rates across top carriers. Free quote in minutes.",
  openGraph: {
    title:
      "independent medicare supplement insurance agents near me | Free Quote | MedicareYourself",
    description:
      "Independent Medicare Supplement insurance agents near you in NJ. Anthony Orner compares Plan G and Plan N rates across top carriers. Free quote in minutes.",
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
      name: "Independent Medicare Supplement Insurance Agents Near Me",
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
  mainEntityOfPage:
    "https://www.medicareyourself.com/services/independent-medicare-supplement-insurance-agents-near-me",
};

const faqs = [
  {
    question: "What is an independent Medicare agent?",
    answer:
      "An independent Medicare agent isn't tied to a single insurance company. They hold contracts with multiple carriers, which means they can compare Medigap rates side by side and recommend the plan that actually fits your budget and health needs. Their service is free to you because the carrier pays the commission.",
  },
  {
    question: "Which Medigap company has the best customer service?",
    answer:
      "Customer service varies, but carriers like Mutual of Omaha, Aetna, and Cigna consistently rank well for claims processing and responsiveness. An independent agent can share real-world feedback from clients on each carrier's service quality in New Jersey.",
  },
  {
    question: "Can I switch Medigap carriers without medical underwriting?",
    answer:
      "Outside your initial 6-month Medigap Open Enrollment Period, most switches require medical underwriting. New Jersey does offer certain protections, but guaranteed issue rights are limited to specific qualifying events. Call to confirm whether your situation qualifies.",
  },
  {
    question: "How much does it cost to use an independent Medicare Supplement agent?",
    answer:
      "Nothing. Independent agents are paid by the insurance carrier, not by you. The premium you pay is the same whether you enroll directly or through an agent. The difference is you get expert comparison shopping at no extra cost.",
  },
];

export default function IndependentMedicareSuppAgentsPage() {
  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/medicare-guides" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Independent Medicare Supplement Insurance Agents Near Me
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Independent Medicare Supplement Insurance Agents Near You in NJ
      </h1>

      <Image
        src="/images/independent-medicare-supplement-insurance-agents-near-me.webp"
        alt="Independent Medicare Supplement insurance agents near me"
        width={800}
        height={400}
        className="w-full h-auto rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        Independent Medicare Supplement insurance agents near you work with
        multiple carriers, not just one. That single difference can save you
        hundreds a year on the exact same Medigap coverage.
      </p>
      <p className="text-lg mb-6">
        I'm Anthony Orner, a licensed independent broker based in New Jersey.
        I'll compare Plan G and Plan N rates across every top carrier available
        in your zip code, free of charge.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          How a nearby independent agent saves you money on Medigap
        </h2>
        <p className="mb-2">
          Plan G from one carrier covers the same things as Plan G from another.
          Benefits are standardized by Medicare. What's not standardized is the
          premium, and that's where companies compete.
        </p>
        <p className="mb-2">
          A captive agent shows you one price. I show you rates from 10+ carriers
          and let you pick. Same benefits, different cost. That's the entire
          advantage.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Carriers an independent NJ Medigap agent can quote for you
        </h2>
        <ul className="list-disc pl-6 space-y-1 mb-2">
          <li>Mutual of Omaha</li>
          <li>Aetna</li>
          <li>Cigna</li>
          <li>United American</li>
          <li>Anthem (Wellpoint)</li>
          <li>Philadelphia American</li>
          <li>Accendo (CVS/Aetna)</li>
        </ul>
        <p>
          Rates vary by carrier, age, gender, and zip code. I pull real-time
          quotes so you see today's actual numbers, not outdated estimates.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Why the starting premium isn't the whole story
        </h2>
        <p className="mb-2">
          Most people focus on what they'll pay at 65. The real question is what
          you'll pay at 75. Some carriers price low to attract new enrollees, then
          hit the block with steep increases once the pool ages.
        </p>
        <p>
          I track long-term rate behavior across carriers. A plan that costs $15
          more per month today but holds steady saves you thousands over a decade.
          I'll walk you through the history so you can choose with your eyes open.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          What to expect during your first call with an independent agent
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>I'll ask about your Part B effective date, medications, and doctors.</li>
          <li>We'll review whether Plan G or Plan N fits your situation.</li>
          <li>I'll pull quotes from every available carrier in your county.</li>
          <li>You pick. No pressure, no upsells, no surprise calls from other agents.</li>
        </ul>
        <p className="mt-2">
          The whole process takes about 15 minutes by phone.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Don't wait until 65 to start comparing
        </h2>
        <p className="mb-2">
          Your Medigap Open Enrollment Period starts the month you turn 65 and
          are enrolled in Part B. It lasts six months. During that window, no
          carrier can deny you or charge more for health conditions.
        </p>
        <p>
          After it closes, you'll face medical underwriting. Pre-existing
          conditions like Type 2 diabetes can make it difficult or impossible to
          switch later. Apply up to 6 months before your Part B start date to
          lock in the best rate.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Schedule a free Medicare Supplement review with Anthony Orner
        </h2>
        <p className="mb-2">
          Whether you're turning 65, retiring off employer coverage, or tired of
          annual rate jumps on your current plan, one call gives you clarity. I'll
          compare every option and explain each one in plain English.
        </p>
        <p>
          No cost. No obligation. Just honest answers from a local NJ broker who
          does this every day.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Call 855-559-1700 for your free Medigap quote
        </p>
        <p className="mb-4">
          Or compare plans online in minutes.
        </p>
        <Link
          href="/get-a-free-quote"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Get a Free Quote
        </Link>
      </div>

      <section className="mt-12">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-guides/plan-g-vs-plan-n"
              className="text-blue-600 hover:underline"
            >
              Plan G vs Plan N: Which Medigap Plan Is Right for You?
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medigap-open-enrollment-period"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment Period Explained
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-supplement-rate-increases"
              className="text-blue-600 hover:underline"
            >
              How Medicare Supplement Rate Increases Work
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-broker-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Broker in NJ: Local Help from Anthony Orner
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}