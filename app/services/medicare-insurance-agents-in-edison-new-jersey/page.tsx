import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare insurance agents in edison new jersey | Free Local Help | MedicareYourself",
  description:
    "Medicare insurance agents in Edison, New Jersey — Anthony Orner is a licensed broker comparing Medigap and Advantage plans across carriers. Free consultation.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-insurance-agents-in-edison-new-jersey" },
  openGraph: {
    title:
      "medicare insurance agents in edison new jersey | Free Local Help | MedicareYourself",
    description:
      "Medicare insurance agents in Edison, New Jersey — Anthony Orner is a licensed broker comparing Medigap and Advantage plans across carriers. Free consultation.",
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
      name: "Medicare Insurance Agents in Edison, New Jersey",
      item: "https://medicareyourself.com/services/medicare-insurance-agents-in-edison-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Insurance Agents in Edison, New Jersey — Licensed Broker Serving Middlesex County",
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
    question: "Do Medicare insurance agents charge a fee?",
    answer:
      "No. Licensed Medicare brokers are paid by the insurance carriers, not by you. Your consultation and enrollment assistance cost nothing out of pocket.",
  },
  {
    question: "Should I use an insurance agent for Medicare?",
    answer:
      "An independent broker compares plans across multiple carriers so you don't have to call each one yourself. You get unbiased guidance at no cost, and a broker can help you switch plans during future enrollment periods too.",
  },
  {
    question: "What is the best supplemental insurance for Medicare in NJ?",
    answer:
      "It depends on your doctors, prescriptions, and budget. Medigap Plan G is the most popular in New Jersey because it covers nearly all out-of-pocket costs after the $283 annual Part B deductible. Plan N offers lower premiums with small copays. A broker can run quotes for your specific situation.",
  },
  {
    question: "When is the best time to enroll in a Medigap plan in Edison?",
    answer:
      "Your Medigap Open Enrollment Period starts the month you turn 65 and are enrolled in Part B. During this 6-month window, carriers must accept you regardless of health history and at their best rate. After it closes, medical underwriting may apply.",
  },
];

export default function MedicareInsuranceAgentsEdisonNJ() {
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
          Medicare Insurance Agents in Edison, New Jersey
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
        Medicare Insurance Agents in Edison, New Jersey — Licensed Broker
        Serving Middlesex County
      </h1>

      <Image
        src="/images/hub_medicare-insurance-agents-in-edison-new-jersey.webp"
        alt="Medicare insurance agents in Edison New Jersey"
        width={800}
        height={400}
        className="w-full h-auto rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        Medicare insurance agents in Edison, New Jersey don't all work the same
        way. I'm Anthony Orner, an independent licensed broker who compares
        Medigap and Medicare Advantage plans across carriers so you see real
        options side by side.
      </p>
      <p className="text-lg mb-6">
        Every consultation is free. No pressure, no cost, no obligation.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Why Edison residents work with an independent Medicare broker
        </h2>
        <p className="mb-3">
          A captive agent sells one carrier's plans. I'm contracted with
          multiple carriers, which means I can show you what's actually
          available in Middlesex County rather than what one company wants to
          sell you.
        </p>
        <p>
          You get honest comparisons. If a lower-premium plan covers your
          doctors at JFK University Medical Center or Robert Wood Johnson, I'll
          tell you. If it doesn't, I'll tell you that too.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Medigap and Advantage plans available in Middlesex County
        </h2>
        <p className="mb-3">
          Edison residents typically choose between two paths:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-3">
          <li>
            <strong>Medigap (Medicare Supplement):</strong> Pairs with Original
            Medicare. Plan G covers everything after the $283 Part B deductible.
            Plan N has lower premiums with small copays at office visits. Rates
            vary by carrier.
          </li>
          <li>
            <strong>Medicare Advantage (Part C):</strong> Replaces Original
            Medicare with a network-based plan. Many include dental, vision, and
            drug coverage. $0 premium options exist in this zip code, but
            network restrictions matter.
          </li>
        </ul>
        <p>
          The right choice depends on which doctors you use, what medications
          you take, and how much predictability you want in your costs.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Carrier networks shift — that affects you directly
        </h2>
        <p className="mb-3">
          Hospitals and insurers renegotiate contracts every year. A plan that
          covered your specialist last year might drop them next year. This is a
          real problem people run into, and it's stressful when you find out
          mid-treatment.
        </p>
        <p>
          I track network changes in the Edison and greater Middlesex County
          area. Before enrollment, we verify that your providers are in-network
          for the plan you're considering.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          What to bring to your first Medicare consultation
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Your red, white, and blue Medicare card (or Medicare number)</li>
          <li>A list of current prescriptions with dosages</li>
          <li>Names of your doctors and any specialists you see regularly</li>
          <li>
            Your current plan's Summary of Benefits (if you already have
            coverage)
          </li>
        </ul>
        <p className="mt-3">
          With this info, I can run accurate plan comparisons in about 15
          minutes.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Key enrollment dates to know
        </h2>
        <p className="mb-3">
          <strong>Turning 65:</strong> Your Medigap Open Enrollment Period lasts
          6 months starting the month you're 65 and enrolled in Part B. This is
          your best window for guaranteed acceptance at the lowest rates. Apply
          up to 6 months before your Part B start date to lock things in.
        </p>
        <p>
          <strong>Already on Medicare:</strong> Medicare Advantage and Part D
          Open Enrollment runs October 15 through December 7 each year. If your
          current plan changed or your needs shifted, that's when we review
          options.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Schedule a free phone or in-person appointment in Edison
        </h2>
        <p className="mb-3">
          I meet with Edison residents by phone, video, or in person — whatever
          works for you. Most consultations take 20 to 30 minutes. There's no
          fee, and I don't push one plan over another.
        </p>
        <p>
          Call today and we'll figure out which plan fits your situation.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
        <p className="text-xl font-bold mb-2">
          Talk to a licensed Medicare broker in Edison
        </p>
        <p className="text-2xl font-bold mb-3">
          <a href="tel:8555591700" className="underline">
            855-559-1700
          </a>
        </p>
        <Link
          href="/contact"
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
              href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medigap Plan G in New Jersey — What It Covers and Costs
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-advantage/new-jersey"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage Plans in Middlesex County
            </Link>
          </li>
          <li>
            <Link
              href="/learn/how-to-sign-up-for-medicare"
              className="text-blue-600 hover:underline"
            >
              When to Enroll in Medicare — Key Dates and Deadlines
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medigap vs. Medicare Advantage — How to Decide
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}