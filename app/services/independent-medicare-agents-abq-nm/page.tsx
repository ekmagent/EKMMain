import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "independent medicare agents abq nm | Free Local Help | MedicareYourself",
  description:
    "Independent Medicare agents serving ABQ, NM compare Advantage, Medigap & Part D plans from multiple carriers at no cost. Call 855-559-1700 for local help.",
  alternates: { canonical: "https://medicareyourself.com/services/independent-medicare-agents-abq-nm" },
  openGraph: {
    title:
      "independent medicare agents abq nm | Free Local Help | MedicareYourself",
    description:
      "Independent Medicare agents in ABQ NM compare plans from multiple carriers at no cost to you. Get unbiased Supplement and Advantage help. Free consultation.",
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
      name: "Independent Medicare Agents ABQ NM",
      item: "https://medicareyourself.com/services/independent-medicare-agents-abq-nm",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Independent Medicare Agents in ABQ NM — Why Independence Matters for Your Coverage",
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
    question: "What is an independent Medicare agent?",
    answer:
      "An independent Medicare agent is licensed to sell plans from multiple insurance carriers, not just one company. This means they can compare options across carriers and recommend the plan that actually fits your needs and budget, rather than pushing the only product they're allowed to sell.",
  },
  {
    question: "How much do Medicare agents charge?",
    answer:
      "Independent Medicare agents don't charge you anything. They're paid commissions directly by insurance carriers when you enroll in a plan. The premium you pay is the same whether you use an agent or enroll on your own, so there's no financial downside to getting expert help.",
  },
  {
    question: "What's the difference between a Medicare agent and a Medicare broker?",
    answer:
      "The terms are often used interchangeably. Technically, an agent represents insurance carriers while a broker represents you, the consumer. In practice, an independent agent who works with multiple carriers functions much like a broker because they shop across companies on your behalf.",
  },
  {
    question: "Who is the best person to talk to about Medicare?",
    answer:
      "A licensed independent Medicare agent is your best resource. Unlike captive agents tied to one carrier, independent agents compare plans side by side. Unlike the 1-800-MEDICARE helpline, they can give you personalized recommendations based on your doctors, prescriptions, and budget.",
  },
,
  {
    question: "Can an independent Medicare agent in Albuquerque help with both Medicare Advantage and Medigap plans?",
    answer:
      "Yes. Licensed independent agents are typically appointed with multiple carriers offering Medicare Advantage, Medicare Supplement (Medigap), and Part D prescription drug plans. That allows them to compare both approaches side by side so you can decide which structure fits your doctors, prescriptions, and budget in the ABQ area.",
  },
  {
    question: "Where can I get free, unbiased Medicare counseling in New Mexico besides an agent?",
    answer:
      "New Mexico's State Health Insurance Assistance Program (SHIP), known locally as the Benefits Counseling program through the Aging and Long-Term Services Department, offers free one-on-one Medicare counseling. SHIP counselors are not paid by insurance carriers, so they're a good complement to an independent agent when you want a second opinion.",
  },
  {
    question: "Do independent Medicare agents in ABQ meet with clients in person?",
    answer:
      "Many do. Independent agents serving Albuquerque commonly offer in-person consultations, phone appointments, and virtual meetings so you can choose what's most comfortable. In-person visits can be especially helpful when reviewing plan documents, drug formularies, or provider networks together.",
  }
,
  {
    question: "Does an independent Medicare agent in Albuquerque know the local provider networks?",
    answer:
      "Yes. Independent agents who serve the Albuquerque area stay current on which carriers contract with local hospital systems and physician groups in Bernalillo County. Before recommending a Medicare Advantage plan, a good agent will check that your specific doctors and preferred facilities are in-network.",
  },
  {
    question: "Will I get help after I enroll, or only during sign-up?",
    answer:
      "A reputable independent Medicare agent provides ongoing service after enrollment, not just during the application. That includes help with claims questions, ID card issues, annual plan reviews during the Annual Enrollment Period, and switching plans if your health needs or prescriptions change.",
  },
  {
    question: "Can I keep my current doctors if I switch plans with an Albuquerque Medicare agent?",
    answer:
      "In many cases, yes — but it depends on the plan type. With Original Medicare plus a Medigap policy, you can see any provider nationwide that accepts Medicare. With a Medicare Advantage plan, your agent will verify your doctors are in the plan's network before you enroll.",
  }
];

export default function IndependentMedicareAgentsABQNM() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />

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
          Independent Medicare Agents ABQ NM
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
        Independent Medicare Agents in ABQ NM — Why Independence Matters for
        Your Coverage
      </h1>

      <Image
        src="/images/independent-medicare-agents-abq-nm.webp"
        alt="independent medicare agents abq nm"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2 text-gray-800">
        Independent Medicare agents in ABQ NM work for you, not for one insurance company. That distinction changes everything about the advice you get.
      </p>
      <p className="text-lg mb-6 text-gray-800">
        Whether you're turning 65, retiring from Sandia Labs or Kirtland AFB, or just moved to Albuquerque and need to sort out coverage, an independent agent compares plans across carriers so you don't have to guess.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          What makes an independent agent different from a captive one
        </h2>
        <p className="text-gray-800 mb-2">
          A captive agent represents a single insurance company. They can only show you that company's plans. If a competitor has a better rate or better network coverage near Presbyterian or UNM Hospital, they can't tell you.
        </p>
        <p className="text-gray-800">
          An independent agent is contracted with multiple carriers. They lay your options side by side and let you pick. No steering, no blind spots.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Medicare Supplement and Advantage options in Albuquerque
        </h2>
        <p className="text-gray-800 mb-2">
          Bernalillo County has solid competition among Medicare Advantage carriers, which often means $0-premium HMO and PPO options with dental, vision, and hearing built in. But network restrictions matter here. Your plan needs to cover the providers you actually use, whether that's Lovelace, UNM Health, or Presbyterian.
        </p>
        <p className="text-gray-800">
          Medicare Supplement (Medigap) plans give you more provider flexibility. Plan G is the most popular standardized option. Rates vary by carrier, and that's exactly where an independent agent saves you real money by comparing quotes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          How independent brokers get paid without charging you
        </h2>
        <p className="text-gray-800 mb-2">
          This surprises people: you pay nothing for an independent agent's help. Zero. The insurance carrier pays the agent a commission when you enroll. Your premium stays the same whether you use an agent or go direct.
        </p>
        <p className="text-gray-800">
          There's no catch. The agent's incentive is to keep you happy so you stay enrolled. That's the business model.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Key enrollment windows to know
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-800">
          <li>
            <strong>Medigap Open Enrollment:</strong> 6 months starting the month you turn 65 and have Part B. This is your guaranteed-issue window with no health questions.
          </li>
          <li>
            <strong>Medicare Advantage / Part D:</strong> Annual Enrollment runs October 15 through December 7.
          </li>
          <li>
            <strong>New to ABQ?</strong> Moving into a new service area triggers a Special Enrollment Period for Medicare Advantage.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          2026 Medicare costs you should budget for
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-800">
          <li>Part B premium: $202.90/month</li>
          <li>Part B deductible: $283/year</li>
          <li>Part A deductible: $1,676 per benefit period</li>
          <li>SNF coinsurance (days 21-100): $209.50/day</li>
        </ul>
        <p className="text-gray-800 mt-2">
          These numbers are why people in Albuquerque carry supplemental coverage. Without it, one hospital stay can cost thousands.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Connect with a licensed independent agent today
        </h2>
        <p className="text-gray-800 mb-2">
          You shouldn't have to sort through 30+ plan options alone. A quick phone call gets you a licensed agent who knows the Albuquerque market, understands which carriers have strong local networks, and will walk you through your choices with zero pressure.
        </p>
        <p className="text-gray-800">
          No cost, no obligation. Just straight answers.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-8 text-center mb-10">
        <p className="text-xl font-bold mb-2">
          Talk to an independent Medicare agent who works for you.
        </p>
        <p className="text-2xl font-bold mb-4">
          <a href="tel:8555591700" className="underline">
            855-559-1700
          </a>
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
        >
          Get a Free Quote
        </Link>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          Related resources
        </h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plan G: What It Covers and What It Costs
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage vs. Medigap: How to Choose
            </Link>
          </li>
          <li>
            <Link
              href="/learn/how-to-sign-up-for-medicare"
              className="text-blue-600 hover:underline"
            >
              When to Enroll in Medicare: Deadlines That Matter
            </Link>
          </li>
          <li>
            <Link
              href="/services/independent-medicare-agents-abq-nm"
              className="text-blue-600 hover:underline"
            >
              Medicare Broker Services in New Mexico
            </Link>
          </li>
        </ul>
            <div className="text-sm text-gray-600 mt-4">Official Medicare resources: <a href="https://www.medicare.gov/plan-compare" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">Medicare Plan Finder on Medicare.gov</a> and <a href="https://www.medicare.gov/talk-to-someone" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">Talk to Someone at Medicare.gov</a>. For New Mexico-specific help, contact <a href="https://www.benefits.nm.gov/SHIP.aspx" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">New Mexico SHIP (Senior Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Mexico residents can also get free, unbiased counseling from <a href="https://www.benefitsmycare.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">New Mexico SHIP (Benefits My Care)</a> or contact the <a href="https://www.osi.state.nm.us/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">New Mexico Office of Superintendent of Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Mexico residents can also get free, unbiased counseling through the <a href="https://www.benefits.aoa.nm.gov/Benefits-Counseling" rel="noopener noreferrer" target="_blank" className="underline">New Mexico SHIP / Benefits Counseling Program</a> or verify agent licensing with the <a href="https://www.osi.state.nm.us/" rel="noopener noreferrer" target="_blank" className="underline">New Mexico Office of Superintendent of Insurance</a>.</div>
      </section>
    </main>
  );
}