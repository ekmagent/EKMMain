import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Medicare Advantage Agents Near Me | NJ Plans | MedicareYourself",
  description:
    "Medicare Advantage agents near you in NJ. Anthony Orner compares $0-premium MA plans in your county and helps you enroll for free. Schedule a consultation today.",
  openGraph: {
    title: "Medicare Advantage Agents Near Me | NJ Plans | MedicareYourself",
    description:
      "Medicare Advantage agents near you in NJ. Anthony Orner compares $0-premium MA plans in your county and helps you enroll for free. Schedule a consultation today.",
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
      name: "Medicare Advantage Agents Near Me",
      item: "https://www.medicareyourself.com/services/medicare-advantage-agents-near-me",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Medicare Advantage Agents Near You in New Jersey",
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
    question: "Who is the best person to talk to about Medicare Advantage plans?",
    answer:
      "A licensed, independent Medicare broker is your best resource. Unlike captive agents who represent a single carrier, an independent broker like Anthony Orner can compare plans from multiple insurance companies in your county at no cost to you. Brokers are compensated by the carriers, so you never pay a fee for their help.",
  },
  {
    question: "How much does it cost to work with a Medicare Advantage agent?",
    answer:
      "Nothing. Medicare Advantage agents are paid a commission by the insurance carrier when you enroll. This commission is the same regardless of which plan you choose, so a good agent has no financial incentive to push one plan over another.",
  },
  {
    question: "Can a Medicare Advantage agent help me switch plans?",
    answer:
      "Yes. During the Annual Enrollment Period (October 15 through December 7) you can switch Medicare Advantage plans for the following year. You can also make one change during the Open Enrollment Period from January 1 through March 31. An agent handles the paperwork and confirms your doctors and medications are covered by the new plan.",
  },
  {
    question: "Are Medicare Advantage plans in NJ different by county?",
    answer:
      "Absolutely. Carrier networks, premiums, copays, and extra benefits like dental and vision all vary by county. A plan that offers $0 copay specialists in Bergen County may not even be available in Ocean County. That is why working with a local NJ agent matters.",
  },
];

export default function MedicareAdvantageAgentsNearMe() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-600">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-900">Medicare Advantage Agents Near Me</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Medicare Advantage Agents Near You in New Jersey
      </h1>

      <Image
        src="/images/hub_medicare-advantage-agents-near-me.webp"
        alt="Medicare Advantage agents near me in New Jersey"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Searching for Medicare Advantage agents near you in New Jersey? I'm Anthony Orner, a licensed independent Medicare broker serving every county in NJ. I compare plans from multiple carriers, help you verify your doctors are in-network, and handle enrollment - all at zero cost to you.
      </p>
      <p className="text-lg mb-6">
        The carriers pay my commission, not you. Let me do the legwork so you pick the right plan.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What a Medicare Advantage agent does during enrollment
        </h2>
        <p className="mb-2">
          A Medicare Advantage agent reviews your current medications, checks which doctors accept a plan's network, and compares out-of-pocket costs across every option in your zip code. This matters because one missed detail - like your cardiologist being out-of-network - can cost you thousands.
        </p>
        <p>
          During the Annual Enrollment Period (October 15 through December 7), I sit down with clients one-on-one. We go through each plan side by side. Once you pick, I submit the application and confirm enrollment.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How NJ Medicare Advantage plans differ by county
        </h2>
        <p className="mb-2">
          Medicare Advantage plans are tied to your county of residence. A $0-premium HMO in Essex County may have completely different copays, drug coverage, and provider networks than a $0-premium HMO in Monmouth County. Some counties have 30+ plan options. Others have fewer than 10.
        </p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Bergen and Hudson counties typically have the most plan choices</li>
          <li>Rural counties like Sussex or Salem often have fewer carriers</li>
          <li>Extra benefits like dental allowances and OTC cards vary widely by plan and region</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Advantage vs. Medigap: which path a good agent helps you evaluate
        </h2>
        <p className="mb-2">
          Medicare Advantage bundles Part A, Part B, and usually Part D into one plan with a network. Medigap (Medicare Supplement) covers the gaps in Original Medicare and lets you see any doctor who accepts Medicare nationwide.
        </p>
        <p className="mb-2">
          New Jersey offers year-round guaranteed issue for Medigap plans. That's unusual - most states don't. This means you can switch from Medicare Advantage to a Medigap plan without medical underwriting, giving you flexibility that residents of other states don't have.
        </p>
        <p>
          A good agent walks you through both paths honestly, not just the one that's easier to sell.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why an independent broker beats a captive agent
        </h2>
        <p className="mb-2">
          Captive agents represent a single insurance company. They can only show you that company's plans. An independent broker like me is contracted with multiple carriers - Aetna, Humana, UnitedHealthcare, Cigna, and others operating in NJ.
        </p>
        <p>
          I earn the same commission regardless of which carrier you choose. My job is matching you with the best fit, not hitting a sales quota for one company.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What to bring when you meet with a Medicare Advantage agent
        </h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Your red, white, and blue Medicare card (or your Medicare number)</li>
          <li>A list of current prescription medications with dosages</li>
          <li>Names of your preferred doctors and specialists</li>
          <li>Your pharmacy preference</li>
          <li>Any upcoming procedures or planned treatments</li>
        </ul>
        <p className="mt-2">
          With this information, I can run accurate plan comparisons in about 20 minutes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Get free Medicare Advantage help from Anthony Orner
        </h2>
        <p className="mb-2">
          I work with Medicare beneficiaries across all 21 New Jersey counties. Whether you're turning 65, retiring, or just want to make sure your current plan still makes sense, I'm here to help. Consultations are always free.
        </p>
        <p>
          Call me at 855-559-1700 or schedule a time that works for you. In-person meetings, phone calls, and video consultations are all available.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-8 text-center mb-10">
        <p className="text-xl font-bold mb-2">
          Ready to compare Medicare Advantage plans in your NJ county?
        </p>
        <p className="mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          for a free, no-obligation consultation.
        </p>
        <Link
          href="/contact"
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
              href="/services/medicare-advantage-plans-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage Plans in NJ - Full Guide
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-supplement-plans-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-plan-g-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Plan G in NJ - Rates and Coverage
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-enrollment-periods"
              className="text-blue-600 hover:underline"
            >
              Medicare Enrollment Periods Explained
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}