import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "best independent medicare broker near me new jersey | Free Consultation | MedicareYourself",
  description:
    "Best independent Medicare broker near me in New Jersey? Anthony Orner compares 20+ carriers, charges nothing, and serves every NJ county. Call today.",
  openGraph: {
    title:
      "best independent medicare broker near me new jersey | Free Consultation | MedicareYourself",
    description:
      "Best independent Medicare broker near me in New Jersey? Anthony Orner compares 20+ carriers, charges nothing, and serves every NJ county. Call today.",
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
      name: "Best Independent Medicare Broker Near Me in New Jersey",
      item: "https://medicareyourself.com/services/best-independent-medicare-broker-near-me-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Best Independent Medicare Broker Near Me in New Jersey: What to Look For and Who to Call",
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
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
};

const faqs = [
  {
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. Medicare brokers are paid a commission by the insurance carrier you choose. The premium you pay is the same whether you use a broker or go directly to the carrier. There is zero markup.",
  },
  {
    question: "What is the best Medicare plan in New Jersey?",
    answer:
      "There is no single best plan for everyone. It depends on your doctors, prescriptions, budget, and health. An independent broker compares options from 20+ carriers to find the plan that fits your specific situation - not the one that pays the highest commission.",
  },
  {
    question:
      "What is the difference between an independent and a captive Medicare broker?",
    answer:
      "A captive broker works for one insurance company and can only show you that company's plans. An independent broker is licensed with multiple carriers and can compare rates, networks, and benefits across them all - giving you a genuinely unbiased recommendation.",
  },
  {
    question: "Can a Medicare broker help me in any New Jersey county?",
    answer:
      "Yes. Anthony Orner serves clients in all 21 New Jersey counties by phone, video, or in person. Whether you are in Bergen County, Ocean County, or anywhere in between, you get the same thorough plan comparison.",
  },
];

export default function BestIndependentMedicareBrokerNearMeNewJersey() {
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
          Best Independent Medicare Broker Near Me in New Jersey
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Best Independent Medicare Broker Near Me in New Jersey: What to Look For
        and Who to Call
      </h1>

      <Image
        src="/images/best-independent-medicare-broker-near-me-new-jersey.webp"
        alt="best independent medicare broker near me new jersey"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Best independent Medicare broker near me in New Jersey - that search
        tells me you already know you want someone who works for you, not for one
        insurance company. Good instinct. The broker you pick determines which
        plans you even get to see.
      </p>
      <p className="mb-6">
        I'm Anthony Orner, a licensed independent Medicare broker based in New
        Jersey. I work with 20+ carriers, I charge you nothing, and I'll show
        you the math on every option.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Independent vs. captive: why carrier access determines your rate
        </h2>
        <p className="mb-2">
          A captive agent represents one carrier. If that carrier's Plan G costs
          $180/month but a competitor charges $135/month for the same coverage,
          the captive agent can't tell you. They literally cannot offer the
          cheaper plan.
        </p>
        <p>
          An independent broker is contracted with many carriers. I run
          side-by-side quotes from all of them, so you see the full picture
          before you decide. Same plan letters, same standardized benefits -
          different prices.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Credentials and red flags when choosing a NJ Medicare broker
        </h2>
        <p className="mb-2">Look for these when evaluating any broker:</p>
        <ul className="list-disc pl-6 space-y-2 mb-3">
          <li>Active NJ Department of Banking and Insurance license</li>
          <li>
            AHIP certification (required annually to sell Medicare plans)
          </li>
          <li>
            Contracts with multiple carriers - ask how many. Fewer than 5 is a
            warning sign.
          </li>
          <li>Willingness to show you plans they do NOT recommend, and why</li>
        </ul>
        <p>
          Red flag: any broker who pressures you to enroll on the first call or
          refuses to explain why they recommend one plan over another.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How Anthony Orner serves clients statewide by phone and in person
        </h2>
        <p className="mb-2">
          I work with clients in all 21 New Jersey counties. Most consultations
          happen by phone or video - you don't need to drive anywhere. If you
          prefer a face-to-face meeting, I accommodate that too.
        </p>
        <p>
          Whether you're in Monmouth County, Essex County, or Cape May County,
          you get the same full comparison. Geography doesn't limit your options.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What a plan comparison actually looks like
        </h2>
        <p className="mb-2">
          I pull real-time quotes from every carrier available in your zip code.
          You'll see monthly premiums, household discounts, rate increase
          history, and any underwriting requirements - all on one sheet.
        </p>
        <p>
          For Medicare Supplement plans, every Plan G is identical in coverage
          regardless of carrier. The only variable is price and company
          stability. That's exactly what I compare.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          When to lock in your rate if you are new to Medicare
        </h2>
        <p className="mb-2">
          Your Medigap Open Enrollment Period lasts 6 months starting the month
          you turn 65 and are enrolled in Part B. During this window, no health
          questions and no higher premiums. Miss it and you may face medical
          underwriting.
        </p>
        <p>
          My practice is to have clients apply up to 6 months before their Part
          B start date. This locks in today's rate early. The sooner you apply,
          the better your rate.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Request a side-by-side plan comparison at no cost
        </h2>
        <p className="mb-2">
          There is no fee. Carriers pay me the same commission regardless of
          which plan you pick - so my only job is to match you with the right
          one. If you already have coverage, I can check whether a better rate
          exists.
        </p>
        <p>Call 855-559-1700 or fill out the form below to get started.</p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center mb-10">
        <p className="text-xl font-semibold mb-2">
          Get your free NJ Medicare plan comparison
        </p>
        <p className="mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or request a quote online.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
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
              href="/medicare-guides/medicare-supplement-plan-g-new-jersey"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plan G in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-plans-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage Plans in NJ
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/turning-65-medicare-checklist-nj"
              className="text-blue-600 hover:underline"
            >
              Turning 65 Medicare Checklist for NJ
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medigap-open-enrollment-nj"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment Period in New Jersey
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}