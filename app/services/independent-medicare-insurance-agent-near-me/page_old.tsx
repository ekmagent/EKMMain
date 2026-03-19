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
    "Independent Medicare insurance agent near me? Anthony Orner is licensed in multiple states, compares top carriers at no charge. Book a free call today.",
  openGraph: {
    title:
      "independent medicare insurance agent near me | Free No-Obligation Help | MedicareYourself",
    description:
      "Independent Medicare insurance agent near me? Anthony Orner is licensed in multiple states, compares top carriers at no charge. Book a free call today.",
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
  datePublished: "2025-07-01",
  dateModified: "2025-07-01",
};

const faqs = [
  {
    question: "What is an independent Medicare insurance agent?",
    answer:
      "An independent Medicare insurance agent is not tied to a single insurance carrier. They hold appointments with multiple companies, which means they can compare plans from different carriers and recommend options based on your specific needs and budget rather than a corporate sales quota.",
  },
  {
    question:
      "Does an independent Medicare agent charge me for their services?",
    answer:
      "No. Independent Medicare agents are paid commissions by the insurance carriers, not by you. The premium you pay is the same whether you use an agent or enroll directly with the carrier. There is zero added cost for their help.",
  },
  {
    question: "How do I know if a Medicare agent is properly licensed?",
    answer:
      "You can verify any agent's license through your state's Department of Insurance website. Ask the agent for their National Producer Number (NPN) and confirm they hold active appointments with the carriers they are quoting. A trustworthy agent will share this information without hesitation.",
  },
  {
    question: "Can an independent agent help me during Open Enrollment?",
    answer:
      "Yes. During the Medicare Advantage and Part D Open Enrollment period (October 15 through December 7), an independent agent can review your current coverage, compare it against new plan options, and help you switch if a better fit exists. They can also assist with Medigap enrollment during your 6-month Medigap Open Enrollment Period.",
  },
];

export default function IndependentMedicareInsuranceAgentNearMe() {
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
          Independent Medicare Insurance Agent Near Me
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4 leading-tight">
        Independent Medicare Insurance Agent Near Me: How to Find One You Can
        Trust
      </h1>

      <Image
        src="/images/independent-medicare-insurance-agent-near-me.webp"
        alt="independent medicare insurance agent near me"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Independent Medicare insurance agent near me - that is one of the most
        common searches I see from people turning 65 or switching coverage. The
        good news: you do not have to settle for a call center or a captive
        agent locked into one carrier. You deserve someone local, licensed, and
        free to shop every option on your behalf.
      </p>
      <p className="text-lg mb-6">
        My name is Anthony Orner. I am an independent, licensed Medicare broker
        serving clients in multiple states, and every consultation I offer is
        free with no obligation.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why working with an independent agent saves you money
        </h2>
        <p className="mb-2">
          A captive agent represents one insurance company. An independent agent
          like me holds carrier appointments with multiple companies, so I can
          line up plans side by side and show you the real cost differences.
        </p>
        <p>
          You pay the same premium whether you use an agent or go direct. My
          commission comes from the carrier, never from you. The only difference
          is that I do the comparison work so you do not have to.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How to verify an agent's licenses and carrier appointments
        </h2>
        <p className="mb-2">
          Before you share any personal information, confirm the agent is
          legitimate. Here is how:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Ask for their National Producer Number (NPN) and look it up on the
            NAIC database or your state's Department of Insurance site.
          </li>
          <li>
            Confirm they are appointed with the specific carriers they are
            quoting. An agent cannot legally sell a plan without an active
            appointment.
          </li>
          <li>
            Check that their state license is current - not expired or
            suspended.
          </li>
        </ul>
        <p className="mt-2">
          A good agent hands this information over willingly. If they hesitate,
          keep looking.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Questions to ask before your first meeting
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>How many carriers do you represent?</li>
          <li>
            Will you help me compare Medicare Supplement, Medicare Advantage,
            and Part D plans?
          </li>
          <li>Do you charge any fees? (The answer should always be no.)</li>
          <li>
            Will you be available after enrollment if I have billing issues or
            need to file a claim?
          </li>
          <li>Are you licensed in my state?</li>
        </ul>
        <p className="mt-2">
          These five questions separate a professional from someone reading a
          script.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What an independent agent actually does for you
        </h2>
        <p className="mb-2">
          I review your prescriptions, your doctors, and your budget. Then I
          pull quotes from every carrier I represent and walk you through the
          differences in plain English.
        </p>
        <p>
          After enrollment, I stay your agent of record. If you get a confusing
          bill or need to change plans during the next Open Enrollment (October
          15 through December 7), you call me directly - not an 800 number.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Understanding your enrollment windows
        </h2>
        <p className="mb-2">
          Timing matters with Medicare. Your Medigap Open Enrollment Period
          lasts 6 months, starting the month you turn 65 and are enrolled in
          Part B. During this window, carriers cannot deny you or charge higher
          premiums based on health history.
        </p>
        <p>
          Miss that window and you may face medical underwriting. The Part B
          premium for 2026 is $185 per month, and the Part B deductible is $257
          per year. An independent agent helps you plan around these numbers so
          nothing catches you off guard.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Request a free consultation with Anthony Orner
        </h2>
        <p className="mb-2">
          I work with clients in New Jersey and multiple other states. Whether
          you are turning 65 next month or reviewing your current plan, I will
          give you a straight comparison at no cost.
        </p>
        <p>
          Call me at 855-559-1700 or book online. No pressure, no surprises.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center mb-10">
        <p className="text-xl font-semibold mb-2">
          Talk to an independent Medicare agent today
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a
            href="tel:855-559-1700"
            className="text-blue-700 font-bold hover:underline"
          >
            855-559-1700
          </a>{" "}
          or{" "}
          <Link
            href="/contact"
            className="text-blue-700 font-bold hover:underline"
          >
            Get a Free Quote
          </Link>
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-guides/medicare-supplement-plans"
              className="text-blue-700 hover:underline"
            >
              Medicare Supplement Plans: A Complete Breakdown
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-vs-medigap"
              className="text-blue-700 hover:underline"
            >
              Medicare Advantage vs. Medigap: Which Is Right for You?
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/when-to-enroll-in-medicare"
              className="text-blue-700 hover:underline"
            >
              When to Enroll in Medicare: Key Dates and Deadlines
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-blue-700 hover:underline"
            >
              About Anthony Orner - Licensed Medicare Broker
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}