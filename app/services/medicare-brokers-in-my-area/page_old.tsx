import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare brokers in my area | Free NJ Plan Comparison | MedicareYourself",
  description:
    "Medicare brokers in your area of New Jersey. Anthony Orner is a licensed independent broker who compares Medigap and Advantage plans for free. Call today.",
  openGraph: {
    title:
      "medicare brokers in my area | Free NJ Plan Comparison | MedicareYourself",
    description:
      "Medicare brokers in your area of New Jersey. Anthony Orner is a licensed independent broker who compares Medigap and Advantage plans for free. Call today.",
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
      name: "Medicare Brokers in My Area",
      item: "https://medicareyourself.com/services/medicare-brokers-in-my-area",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Medicare Brokers in Your Area: What to Look For in NJ",
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
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. Medicare brokers are paid by the insurance carriers, not by you. There is no fee for consultations, plan comparisons, or enrollment help. The plans cost the same whether you use a broker or go directly to the carrier.",
  },
  {
    question: "How do I verify a Medicare broker is licensed in New Jersey?",
    answer:
      "Visit the New Jersey Department of Banking and Insurance website (DOBI) and search for the broker by name or license number. Any legitimate broker will share their NJ Producer License number if you ask.",
  },
  {
    question:
      "What is the difference between a captive and independent Medicare broker?",
    answer:
      "A captive broker works for one insurance company and can only show you that company's plans. An independent broker is contracted with multiple carriers and can compare options across companies to find the best fit for your needs and budget.",
  },
  {
    question: "Can a local Medicare broker help me switch plans?",
    answer:
      "Yes. A local broker can help you switch during the Medicare Advantage Open Enrollment Period (October 15 through December 7) or during qualifying Special Enrollment Periods throughout the year. They can also help with Medigap applications.",
  },
];

export default function MedicareBrokersInMyArea() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/medicare-guides" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">Medicare Brokers in My Area</span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Medicare Brokers in Your Area: What to Look For in NJ
        </h1>

        <Image
          src="/images/medicare-brokers-in-my-area_photo.webp"
          alt="Medicare brokers in my area"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Medicare brokers in your area aren't all the same. Some work for one
          carrier. Others compare dozens of plans across multiple companies. That
          distinction matters more than most people realize before they enroll.
        </p>
        <p className="text-lg mb-6">
          I'm Anthony Orner, a licensed independent Medicare broker based in New
          Jersey. Here's what I'd want you to know before picking someone to help
          with your coverage.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How to verify a Medicare broker is licensed in your state
          </h2>
          <p className="mb-2">
            Any broker helping you enroll in a Medicare plan must hold a valid
            state insurance producer license. In New Jersey, you can verify this
            through the Department of Banking and Insurance (DOBI) website.
          </p>
          <p>
            Ask for their NJ license number. If they hesitate, that tells you
            something. A licensed broker will also have an Annual Notice of
            Change training certification for the current plan year.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Captive vs. independent Medicare brokers and why it matters
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Captive brokers</strong> represent one insurance company.
              They can only show you that company's plans.
            </li>
            <li>
              <strong>Independent brokers</strong> are contracted with multiple
              carriers and can compare Medigap, Medicare Advantage, and Part D
              options side by side.
            </li>
          </ul>
          <p className="mt-3">
            Both are free to use. But if a broker can only show you one carrier's
            lineup, you're not getting a real comparison. Always ask how many
            carriers they represent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What a local NJ Medicare broker can do that a 1-800 number cannot
          </h2>
          <p className="mb-2">
            National call centers read scripts. They don't know which NJ
            hospitals are in-network for a specific Advantage plan, or that your
            specialist at RWJBarnabas might not be covered by every carrier.
          </p>
          <p>
            A local broker knows the provider networks, the county-level plan
            differences, and the formulary quirks that actually affect your
            out-of-pocket costs. That local knowledge saves real money.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why people turning 65 find this more confusing than expected
          </h2>
          <p className="mb-2">
            Part A, Part B, Part C, Part D, Medigap letters, enrollment windows,
            late penalties. People who've managed employer insurance for decades
            still find Medicare overwhelming. That's not a personal failing.
            It's a badly designed system.
          </p>
          <p>
            A broker's job is to cut through that. I walk you through your
            specific situation: still working with employer coverage? Just
            retiring? Already on Medicare and unhappy? Each path has different
            rules and timelines.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What a good broker should do before recommending a plan
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Review your current medications and check Part D formularies</li>
            <li>Confirm your doctors are in-network for any plan they suggest</li>
            <li>
              Explain total annual costs, not just the monthly premium
            </li>
            <li>
              Discuss whether Medigap or Medicare Advantage fits your health
              needs and budget
            </li>
          </ul>
          <p className="mt-3">
            If someone jumps straight to a recommendation without asking these
            questions, find a different broker.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Talk to Anthony Orner, a local NJ Medicare broker
          </h2>
          <p className="mb-2">
            I'm an independent broker licensed in New Jersey. I compare plans
            from multiple carriers at no cost to you. We can meet by phone,
            video, or in person.
          </p>
          <p>
            If you're approaching 65, recently retired, or just want to see
            whether your current plan still makes sense, I'll give you a straight
            answer. No pressure, no scripts, no 1-800 runaround.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center my-10">
          <p className="text-xl font-bold mb-2">
            Ready to compare Medicare plans with a local NJ broker?
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
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/services/medicare-agent-near-me"
                className="text-blue-600 hover:underline"
              >
                Find a Medicare Agent Near You in NJ
              </Link>
            </li>
            <li>
              <Link
                href="/guides/medigap-vs-medicare-advantage"
                className="text-blue-600 hover:underline"
              >
                Medigap vs. Medicare Advantage: Which Is Right for You?
              </Link>
            </li>
            <li>
              <Link
                href="/guides/medicare-enrollment-periods"
                className="text-blue-600 hover:underline"
              >
                Medicare Enrollment Periods Explained
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-blue-600 hover:underline"
              >
                About Anthony Orner, Licensed NJ Medicare Broker
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}