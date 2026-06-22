import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "independent medicare insurance agent near me | Free No-Obligation Help | MedicareYourself",
  description:
    "Independent Medicare agent near you: Anthony Orner compares top carriers across NJ & 34 states at no cost. Call 855-559-1700 for a free plan review.",
  alternates: { canonical: "https://medicareyourself.com/services/independent-medicare-insurance-agent-near-me" },
  openGraph: {
    title:
      "independent medicare insurance agent near me | Free No-Obligation Help | MedicareYourself",
    description:
      "Independent Medicare insurance agent near me? Anthony Orner compares top carriers across multiple states at no cost to you. Book a free consultation today.",
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
      name: "Independent Medicare Insurance Agent Near Me",
      item: "https://medicareyourself.com/services/independent-medicare-insurance-agent-near-me",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Independent Medicare Insurance Agent Near Me: How to Find One You Can Trust",
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
    question: "What is an independent Medicare insurance agent?",
    answer:
      "An independent Medicare insurance agent isn't tied to a single carrier. They hold appointments with multiple insurance companies, which means they can compare plans from different carriers and recommend whichever one fits your situation best. Captive agents can only sell one company's products.",
  },
  {
    question: "How much do Medicare agents charge?",
    answer:
      "Independent Medicare agents don't charge you anything. Carriers pay the agent a commission directly. Your premium stays the same whether you enroll through an agent, online, or by calling the carrier. There's no hidden fee or markup.",
  },
  {
    question: "How do I verify that a Medicare agent is properly licensed?",
    answer:
      "Ask for their National Producer Number (NPN). You can look it up on the National Insurance Producer Registry (NIPR) at nipr.com. Confirm they hold an active health insurance license in your state and that they have current carrier appointments for the plans they're recommending.",
  },
  {
    question:
      "What's the difference between an independent agent and a Medicare SHIP counselor?",
    answer:
      "SHIP counselors are volunteers who provide free, unbiased Medicare education but cannot enroll you in a plan. Independent agents can educate you AND handle enrollment directly. Both are free to use. An independent agent can also follow up year after year to review your coverage.",
  },
];

export default function IndependentMedicareInsuranceAgentNearMe() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />

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
          Independent Medicare Insurance Agent Near Me
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4 text-gray-900">
        Independent Medicare Insurance Agent Near Me: How to Find One You Can
        Trust
      </h1>

      <Image
        src="/images/independent-medicare-insurance-agent-near-me.webp"
        alt="independent medicare insurance agent near me"
        width={800}
        height={400}
        className="w-full h-auto rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        An independent Medicare insurance agent near you can compare plans from
        multiple carriers and help you enroll in the one that actually fits your
        budget and doctors. No cost. No obligation. No sales pitch for a single
        company's product.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        I'm Anthony Orner, licensed in multiple states, and I work this way
        every day. Here's how to find an agent you can trust.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Why working with an independent agent saves you money
        </h2>
        <p className="text-gray-700 mb-2">
          A captive agent sells one carrier. If that carrier's Plan G costs $187
          a month but another carrier offers Plan G at $142, the captive agent
          can't tell you. An independent agent can.
        </p>
        <p className="text-gray-700">
          Medicare isn't one-size-fits-all. Between Original Medicare, Medigap,
          Medicare Advantage, and Part D, you're facing dozens of combinations.
          An independent agent narrows the field based on your prescriptions,
          your providers, and your zip code.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          How to verify an agent's licenses and carrier appointments
        </h2>
        <p className="text-gray-700 mb-3">
          Before you share any personal information, verify these three things:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <strong>Active state license:</strong> Ask for their NPN (National
            Producer Number) and look it up at nipr.com.
          </li>
          <li>
            <strong>Carrier appointments:</strong> An agent must be formally
            appointed by each carrier they sell. Ask which carriers they
            represent.
          </li>
          <li>
            <strong>Annual certification:</strong> CMS requires agents to
            complete training each year for every plan type they sell. A
            legitimate agent will confirm this without hesitation.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          The real cost: what you pay an independent agent
        </h2>
        <p className="text-gray-700">
          Zero. The insurance carrier pays the agent's commission. Your premium
          is exactly the same whether you enroll through an agent, call the
          carrier directly, or go through medicare.gov. If anyone tries to charge
          you a fee for Medicare enrollment help, walk away.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Questions to ask before your first meeting
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>How many carriers do you represent in my state?</li>
          <li>Will you review my current prescriptions against each plan's formulary?</li>
          <li>Do you help with annual plan reviews during Open Enrollment (October 15 through December 7)?</li>
          <li>Can you explain both Medigap and Medicare Advantage so I can compare?</li>
          <li>Will you be my point of contact if I have billing or claims issues later?</li>
        </ul>
        <p className="text-gray-700 mt-3">
          An honest agent welcomes these questions. If someone dodges them or
          pressures you to enroll today, that's your signal to keep looking.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Red flags that mean you should find a different agent
        </h2>
        <p className="text-gray-700 mb-3">
          People share stories online about agents who misrepresented
          commissions, used misleading lead tactics, or pushed one plan without
          explaining alternatives. Watch for:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>They only discuss one plan type and refuse to compare.</li>
          <li>They create false urgency outside of a real enrollment window.</li>
          <li>They can't clearly explain how they get paid.</li>
          <li>They contacted you through misleading ads or robocalls.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Request a free consultation with Anthony Orner
        </h2>
        <p className="text-gray-700 mb-2">
          Medicare can feel like learning a new language, especially if you're
          turning 65 or losing employer coverage. You shouldn't have to figure it
          out alone, and you shouldn't have to wonder if the person helping you
          has your back.
        </p>
        <p className="text-gray-700">
          I compare plans from top carriers, explain your options in plain
          English, and never charge you a dime. If you're looking for an
          independent agent you can actually talk to, call me.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-8 text-center my-10">
        <p className="text-xl font-semibold mb-2">
          Talk to an independent Medicare agent today
        </p>
        <p className="text-3xl font-bold mb-4">
          <a href="tel:8555591700" className="hover:underline">
            855-559-1700
          </a>
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Get a Free Quote
        </Link>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          Related resources
        </h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medigap vs. Medicare Advantage: Which Is Right for You?
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/turning-65"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment: When and Why It Matters
            </Link>
          </li>
          <li>
            <Link
              href="/learn/how-to-sign-up-for-medicare"
              className="text-blue-600 hover:underline"
            >
              Medicare Part B Enrollment: Timing, Costs, and Penalties
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-blue-600 hover:underline"
            >
              About Anthony Orner, Licensed Medicare Broker
            </Link>
          </li>
        </ul>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can verify licenses or get free counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For free, unbiased Medicare counseling in New Jersey, contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can verify an agent's license or get free counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can verify licensure or get free counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
      </section>
    </main>
  );
}