import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "free medicare agent that helps with paperwork | Zero Cost Help | MedicareYourself",
  description:
    "Free Medicare agent that helps with paperwork from start to finish. Anthony Orner handles applications, carrier forms, and enrollment at no cost. Call today.",
  openGraph: {
    title:
      "free medicare agent that helps with paperwork | Zero Cost Help | MedicareYourself",
    description:
      "Free Medicare agent that helps with paperwork from start to finish. Anthony Orner handles applications, carrier forms, and enrollment at no cost. Call today.",
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
      name: "Free Medicare Agent That Helps With Paperwork",
      item: "https://www.medicareyourself.com/services/free-medicare-agent-that-helps-with-paperwork",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "A Free Medicare Agent Who Actually Helps You With the Paperwork",
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
  datePublished: "2025-07-01",
  dateModified: "2025-07-01",
};

const faqs = [
  {
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Zero. Licensed Medicare brokers like Anthony are paid by the insurance carriers, not by you. The plans cost the same whether you enroll directly or through a broker. You get expert help at no extra charge.",
  },
  {
    question: "Can a Social Security office help with Medicare questions?",
    answer:
      "Social Security can help you sign up for Part A and Part B, change your address, and apply for Extra Help with drug costs. But they won't compare Medigap or Medicare Advantage plans for you. A licensed broker handles that side of things.",
  },
  {
    question:
      "What documents do I need to enroll in a Medicare plan?",
    answer:
      "You'll need your Medicare card (red, white, and blue), a list of current medications with dosages, your doctors' names, and your preferred pharmacy. Anthony will walk you through everything else on the call.",
  },
  {
    question: "Does the broker fill out the application for me?",
    answer:
      "Yes. Anthony completes your carrier applications, submits enrollment forms, and confirms everything is processed. You review and approve, but you don't have to wrestle with the paperwork yourself.",
  },
];

export default function FreeAgentPaperworkPage() {
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
        <span className="text-gray-700">
          Free Medicare Agent That Helps With Paperwork
        </span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          A Free Medicare Agent Who Actually Helps You With the Paperwork
        </h1>

        <Image
          src="/images/free-medicare-agent-that-helps-with-paperwork.webp"
          alt="free medicare agent that helps with paperwork"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          A free Medicare agent that helps with paperwork can save you hours of
          confusion and prevent costly enrollment mistakes. I'm Anthony Orner, a
          licensed Medicare broker in New Jersey, and I handle your applications,
          carrier forms, and enrollment from start to finish.
        </p>
        <p className="text-lg mb-6">
          You pay nothing for my help. Carriers pay me directly, so your plan
          costs the same whether you call me or go it alone.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What paperwork is involved in enrolling in Medicare
          </h2>
          <p className="mb-2">
            Medicare enrollment involves more forms than most people expect:
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-2">
            <li>Part A and Part B enrollment through Social Security</li>
            <li>Carrier-specific applications for Medigap or Medicare Advantage</li>
            <li>Part D prescription drug plan enrollment forms</li>
            <li>Employer creditable coverage documentation if you delayed Part B</li>
          </ul>
          <p>
            Each form has its own deadlines. Miss one and you could face a Part B
            late enrollment penalty of 10% for every 12-month period you delayed.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How a licensed broker handles applications at no cost to you
          </h2>
          <p className="mb-2">
            I compare plans across multiple carriers, then fill out your
            application myself. You review, approve, and I submit it. After
            that, I follow up with the carrier to confirm your enrollment went
            through.
          </p>
          <p>
            This costs you $0. The insurance carrier pays the broker's
            commission, and your premium stays the same either way. Medicare.gov
            confirms you can get free counseling through licensed agents and
            State Health Insurance Assistance Programs (SHIPs).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Common enrollment mistakes that delay your coverage
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Wrong effective date:</strong> Applying too late in your
              Initial Enrollment Period can push your start date back months.
            </li>
            <li>
              <strong>Missing creditable coverage proof:</strong> Without your
              employer's letter, you may get hit with a late penalty.
            </li>
            <li>
              <strong>Incomplete applications:</strong> A missing signature or
              wrong Medicare number sends the whole form back.
            </li>
            <li>
              <strong>Choosing a plan without checking your doctors:</strong>{" "}
              Medicare Advantage networks vary widely. Confirm your providers
              before you sign.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What to have ready before your call with Anthony
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Your Medicare card (red, white, and blue)</li>
            <li>List of current prescriptions with dosages</li>
            <li>Names of your doctors and specialists</li>
            <li>Your preferred pharmacy</li>
          </ul>
          <p className="mt-2">
            That's it. I handle the rest. The call typically takes 20 to 30
            minutes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why people put off Medicare paperwork
          </h2>
          <p className="mb-2">
            Most folks I talk to aren't lazy. They're overwhelmed. They've heard
            horror stories about surprise costs, denied claims, or pushy
            salespeople. Some have been getting monthly calls from companies
            they've never heard of and don't know who to trust.
          </p>
          <p>
            I don't cold-call. I don't push one plan over another. I show you
            what fits your doctors, medications, and budget, then I do the
            paperwork so you don't have to.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            2026 costs you should know before enrolling
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Part B premium: $202.90/month</li>
            <li>Part B deductible: $283/year</li>
            <li>Part A deductible: $1,676 per benefit period</li>
            <li>SNF coinsurance (days 21-100): $209.50/day</li>
          </ul>
          <p className="mt-2">
            These numbers matter when comparing Medigap vs. Medicare Advantage.
            I'll walk you through exactly what you'd pay out of pocket under
            each option.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center my-10">
          <p className="text-2xl font-bold mb-2">
            Let me handle the paperwork. You handle retirement.
          </p>
          <p className="text-lg mb-4">
            Call{" "}
            <a
              href="tel:8555591700"
              className="underline font-semibold text-white"
            >
              855-559-1700
            </a>{" "}
            or{" "}
            <Link
              href="/get-a-free-quote"
              className="underline font-semibold text-white"
            >
              Get a Free Quote
            </Link>
          </p>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare-guides/how-to-enroll-in-medicare"
                className="text-blue-600 hover:underline"
              >
                How to Enroll in Medicare: Step-by-Step Guide
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/medigap-vs-medicare-advantage"
                className="text-blue-600 hover:underline"
              >
                Medigap vs. Medicare Advantage: Which One Fits?
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/medicare-part-b-late-enrollment-penalty"
                className="text-blue-600 hover:underline"
              >
                Part B Late Enrollment Penalty: What It Costs
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
        </section>
      </article>
    </>
  );
}