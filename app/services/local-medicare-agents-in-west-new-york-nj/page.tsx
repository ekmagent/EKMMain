import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "local medicare agents in west new york nj | Free Plan Comparison | MedicareYourself",
  description:
    "Local Medicare agents in West New York, NJ — Anthony Orner compares Medigap and Advantage plans across Hudson County carriers. Free consultation.",
  alternates: { canonical: "https://medicareyourself.com/services/local-medicare-agents-in-west-new-york-nj" },
  openGraph: {
    title:
      "local medicare agents in west new york nj | Free Plan Comparison | MedicareYourself",
    description:
      "Local Medicare agents in West New York, NJ — Anthony Orner compares Medigap and Advantage plans across Hudson County carriers. Free consultation.",
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
      name: "Local Medicare Agents in West New York, NJ",
      item: "https://medicareyourself.com/services/local-medicare-agents-in-west-new-york-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Local Medicare Agents in West New York, NJ — Independent Broker for Hudson County",
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
    question:
      "How much does it cost to work with a local Medicare agent in West New York?",
    answer:
      "Nothing. Licensed Medicare brokers are paid by the insurance carriers, not by you. There's no fee for plan comparisons, consultations, or enrollment help.",
  },
  {
    question:
      "What's the difference between an independent broker and a captive agent?",
    answer:
      "A captive agent works for one insurance company and can only show you their plans. An independent broker like Anthony Orner compares plans from multiple carriers, so you see the full picture before choosing.",
  },
  {
    question:
      "Can I get Medicare help in Spanish in West New York?",
    answer:
      "Yes. Anthony provides bilingual Medicare assistance for West New York's large Spanish-speaking community. You can discuss plan details, costs, and enrollment in the language you're most comfortable with.",
  },
  {
    question:
      "When should I contact a Medicare broker if I'm turning 65?",
    answer:
      "Start about 6 months before your 65th birthday. This gives you time to compare plans and apply for Medigap coverage during your Open Enrollment Period, when you can't be denied or charged more for health conditions.",
  },
];

export default function LocalMedicareAgentsWestNewYorkNJ() {
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
          Local Medicare Agents in West New York, NJ
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
        Local Medicare Agents in West New York, NJ — Independent Broker for
        Hudson County
      </h1>

      <Image
        src="/images/hub_local-medicare-agents-in-west-new-york-nj.webp"
        alt="local medicare agents in west new york nj"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        Local Medicare agents in West New York, NJ can make the difference between overpaying for coverage and finding a plan that actually fits your doctors, prescriptions, and budget. I'm Anthony Orner, an independent licensed broker serving Hudson County residents.
      </p>
      <p className="text-lg mb-6">
        I compare plans from multiple carriers side by side so you don't have to call each one yourself.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          How an independent broker saves you time and money
        </h2>
        <p className="mb-3">
          Captive agents sell one company's plans. That's it. An independent broker works across carriers, which means I show you options a single-company agent can't.
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>Compare Medigap, Advantage, and Part D plans in one sitting</li>
          <li>No cost to you, ever. Carriers pay the broker</li>
          <li>I handle the paperwork and follow up if there's a problem</li>
        </ul>
        <p>
          People tell me they've spent weeks calling insurance companies, getting transferred, hitting dead ends. One conversation with a broker who knows Hudson County can replace all of that.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare Supplement and Advantage plans in Hudson County
        </h2>
        <p className="mb-3">
          West New York sits right across the Hudson from Manhattan, and your plan needs to work on both sides of the river. Medicare Advantage plans use provider networks. If your doctors practice in both NJ and NY, network restrictions matter.
        </p>
        <p>
          Medigap (Medicare Supplement) plans let you see any doctor who accepts Medicare nationwide. In 2026, the Part B premium is $202.90/month and the Part A deductible is $1,676 per benefit period. Medigap plans cover some or all of those gaps. Rates vary by carrier, age, and zip code.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Bilingual Medicare help for West New York residents
        </h2>
        <p className="mb-3">
          West New York has one of the largest Spanish-speaking communities in New Jersey. I provide bilingual consultations so you can ask questions and review plan details in the language you prefer.
        </p>
        <p>
          Understanding copays, formularies, and network rules is hard enough in your first language. You shouldn't have to guess at the fine print.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Why network disruptions matter more than you think
        </h2>
        <p className="mb-3">
          Carriers and health systems drop each other more often than people realize. When a major provider stops accepting your plan mid-year, you're stuck scrambling for care or paying out of pocket.
        </p>
        <p>
          I track carrier-provider relationships in Hudson County and alert my clients when changes affect them. If you need to switch during a Special Enrollment Period, I'll walk you through it.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Turning 65? Lock in your Medigap rate early
        </h2>
        <p className="mb-3">
          Your Medigap Open Enrollment Period starts the month you turn 65 and are enrolled in Part B. It lasts 6 months. During this window, no carrier can turn you down or charge you more based on health history.
        </p>
        <p>
          Start the process about 6 months before your birthday. That gives us time to compare plans without rushing. Miss the window and you could face medical underwriting or higher premiums.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Get a free quote from a licensed NJ Medicare broker
        </h2>
        <p className="mb-3">
          I'll compare plans, explain the trade-offs in plain language, and help you enroll. No obligation, no pressure, no cost.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Call for a free phone or video consultation</li>
          <li>Bring your current plan details and prescription list</li>
          <li>I'll show you what you're paying vs. what you could be paying</li>
        </ul>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Ready to compare Medicare plans in West New York?
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/contact" className="underline font-bold">
            get a free quote online
          </Link>
          .
        </p>
        <p className="text-sm opacity-90">
          Anthony Orner — Licensed Medicare Broker, NJ
        </p>
      </div>

      <section className="mt-10">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
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
              href="/medicare-advantage/new-jersey"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage Plans in Hudson County
            </Link>
          </li>
          <li>
            <Link
              href="/learn/how-to-sign-up-for-medicare"
              className="text-blue-600 hover:underline"
            >
              Medicare Part B Enrollment: Timing and Penalties
            </Link>
          </li>
          <li>
            <Link
              href="/services/free-medicare-broker-new-jersey"
              className="text-blue-600 hover:underline"
            >
              Find a Medicare Broker in New Jersey
            </Link>
          </li>
                    <li>
              <Link
                href="/services/find-an-nj-medicare-broker-near-you"
                className="text-blue-600 hover:underline"
              >
                Find An NJ Medicare Broker Near You
              </Link>
            </li>
            <li>
              <Link
                href="/services/independent-medicare-agents-near-me"
                className="text-blue-600 hover:underline"
              >
                Independent Medicare Agents Near Me
              </Link>
            </li>
            <li>
              <Link
                href="/services/how-to-enroll-in-medicare-in-new-jersey"
                className="text-blue-600 hover:underline"
              >
                How To Enroll In Medicare In New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/services/local-medicare-agents-in-west-orange-nj"
                className="text-blue-600 hover:underline"
              >
                Local Medicare Agents In West Orange NJ
              </Link>
            </li>
</ul>
      </section>
    </main>
  );
}