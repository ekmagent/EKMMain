import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare agent that helps with paperwork near me | Free Help in NJ | MedicareYourself",
  description:
    "Medicare agent that helps with paperwork near you in NJ. Anthony Orner handles applications, carrier forms, and CMS enrollment at no cost. Book a free call.",
  openGraph: {
    title:
      "medicare agent that helps with paperwork near me | Free Help in NJ | MedicareYourself",
    description:
      "Medicare agent that helps with paperwork near you in NJ. Anthony Orner handles applications, carrier forms, and CMS enrollment at no cost. Book a free call.",
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
      name: "Medicare Agent That Helps With Paperwork",
      item: "https://www.medicareyourself.com/services/medicare-agent-that-helps-with-paperwork-near-me",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "A Medicare Agent That Actually Helps With Your Paperwork",
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
    "https://www.medicareyourself.com/services/medicare-agent-that-helps-with-paperwork-near-me",
};

const faqs = [
  {
    question: "Does a Medicare agent charge to help with paperwork?",
    answer:
      "No. Licensed Medicare brokers like Anthony Orner are paid by the insurance carriers, not by you. Application help, form filing, and enrollment support cost you nothing.",
  },
  {
    question: "What paperwork do I need to enroll in Medicare?",
    answer:
      "You'll need your Medicare card (red, white, and blue), a completed carrier application, and sometimes proof of prior coverage or a prescription drug list. The exact forms depend on whether you're choosing Medicare Advantage, Medigap, or Part D.",
  },
  {
    question: "Can a Medicare agent submit my application for me?",
    answer:
      "Yes. A licensed agent can complete your application, submit it to the carrier, and confirm your enrollment with CMS. You sign the form, and your agent handles the rest.",
  },
  {
    question: "How do I find a Medicare agent near me in New Jersey?",
    answer:
      "Call Anthony Orner at 855-559-1700. He works with Medicare beneficiaries across New Jersey and handles everything from initial paperwork to plan activation.",
  },
];

export default function MedicareAgentPaperworkPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />

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
          Medicare Agent That Helps With Paperwork
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        A Medicare Agent That Actually Helps With Your Paperwork
      </h1>

      <Image
        src="/images/hub_medicare-agent-that-helps-with-paperwork-near-me.webp"
        alt="medicare agent that helps with paperwork near me"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        A Medicare agent that helps with paperwork can save you hours of frustration and prevent costly enrollment errors. I'm Anthony Orner, a licensed Medicare broker in New Jersey, and I handle every form, application, and carrier submission for you at zero cost.
      </p>
      <p className="text-lg mb-6">
        You shouldn't have to figure out CMS enrollment codes on your own.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          What paperwork is required when you enroll in Medicare
        </h2>
        <p className="mb-2">
          The forms depend on what you're signing up for. Here's what's typically involved:
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>A carrier-specific application (Medigap, Medicare Advantage, or Part D)</li>
          <li>Your Medicare Beneficiary Identifier (MBI) from your red, white, and blue card</li>
          <li>Proof of creditable drug coverage, if switching plans</li>
          <li>A Scope of Appointment form before any agent can legally discuss plans with you</li>
        </ul>
        <p>
          Some carriers also require prescription drug lists or doctor information upfront. Miss a field, and your application gets kicked back.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          How Anthony handles your Medicare application from start to finish
        </h2>
        <p className="mb-2">
          I don't hand you a blank form and wish you luck. Here's what happens when you call:
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>We review your Medicare card, current coverage, and what you need</li>
          <li>I fill out every carrier form and double-check your information</li>
          <li>I submit the application directly to the insurance company</li>
          <li>I confirm enrollment with CMS and follow up until your plan is active</li>
        </ul>
        <p>
          You sign one form. I do the rest. That's how it should work.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Common Medicare paperwork mistakes that delay coverage
        </h2>
        <p className="mb-2">
          I see the same errors every enrollment season:
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Wrong MBI number or transposed digits</li>
          <li>Missing Part B effective date (this one stalls Medigap applications constantly)</li>
          <li>Incomplete prescription drug lists that trigger Part D issues</li>
          <li>Applying outside your enrollment window without realizing it</li>
        </ul>
        <p>
          One wrong date can delay your coverage by weeks. An agent catches these before they become problems.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Why this service costs you nothing
        </h2>
        <p className="mb-2">
          Insurance carriers pay licensed brokers a commission when you enroll. Your premium stays the same whether you use an agent or apply on your own. There's no fee, no markup, no catch.
        </p>
        <p>
          You get a real person who knows the forms, knows the carriers, and picks up the phone when something goes wrong.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Enrollment windows you need to know
        </h2>
        <p className="mb-2">
          Paperwork only works if you file it during the right window:
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li><strong>Medigap Open Enrollment:</strong> 6 months starting the month you turn 65 and have Part B. This is your best shot at guaranteed issue.</li>
          <li><strong>Medicare Advantage/Part D:</strong> October 15 through December 7 each year</li>
          <li><strong>Special Enrollment Periods:</strong> Triggered by losing employer coverage, moving, or other qualifying events</li>
        </ul>
        <p>
          Miss a window and you could face the Part B late enrollment penalty: 10% added to your $202.90/month premium for every 12 months you delayed.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Get free hands-on enrollment help in New Jersey
        </h2>
        <p className="mb-2">
          If you're in New Jersey and tired of staring at Medicare forms, call me. I work with beneficiaries across the state, whether you're turning 65, retiring, or switching plans during open enrollment.
        </p>
        <p>
          One phone call. No paperwork headaches. Your coverage handled right.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-8 text-center">
        <p className="text-xl font-bold mb-2">
          Let someone else deal with the forms.
        </p>
        <p className="mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/get-a-free-quote" className="underline font-bold">
            Get a Free Quote
          </Link>
        </p>
      </div>

      <section className="mt-12">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-12">
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
              href="/medicare-guides/medigap-open-enrollment-period"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment Period Explained
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-vs-medigap"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage vs. Medigap: Which Is Right for You?
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-broker-new-jersey"
              className="text-blue-600 hover:underline"
            >
              Medicare Broker in New Jersey
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}