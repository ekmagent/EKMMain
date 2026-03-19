import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "local medicare agent | Free Consultation, No Obligation | MedicareYourself",
  description:
    "Local medicare agent Anthony Orner is licensed in NJ and PA, representing top carriers. Get unbiased plan guidance at zero cost. Book a free call today.",
  openGraph: {
    title:
      "local medicare agent | Free Consultation, No Obligation | MedicareYourself",
    description:
      "Local medicare agent Anthony Orner is licensed in NJ and PA, representing top carriers. Get unbiased plan guidance at zero cost. Book a free call today.",
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
      item: "https://medicareyourself.com/medicare",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Local Medicare Agent",
      item: "https://medicareyourself.com/services/local-medicare-agent",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Local Medicare Agent in New Jersey: Licensed Help You Can Actually Meet",
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
    question: "Does a local Medicare agent charge me anything?",
    answer:
      "No. Licensed Medicare agents are compensated by the insurance carriers, not by you. There is zero cost for consultations, plan comparisons, or enrollment help.",
  },
  {
    question: "What is the difference between a captive and independent Medicare agent?",
    answer:
      "A captive agent represents one insurance company. An independent agent, like Anthony Orner, is contracted with multiple carriers and can compare plans across companies to find what fits your situation best.",
  },
  {
    question: "Can a local Medicare agent help me if I already have a plan?",
    answer:
      "Yes. During the Medicare Advantage Open Enrollment period (October 15 through December 7), a local agent can review your current coverage and help you switch plans if a better option exists.",
  },
  {
    question: "How do I know if a Medicare agent is licensed in my state?",
    answer:
      "You can verify any agent's license through your state's Department of Banking and Insurance. Anthony Orner is licensed in both New Jersey and Pennsylvania.",
  },
];

export default function LocalMedicareAgentPage() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-600">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          &gt;{" "}
          <Link href="/medicare" className="hover:underline">
            Medicare Guides
          </Link>{" "}
          &gt;{" "}
          <span className="text-gray-900">Local Medicare Agent</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Local Medicare Agent in New Jersey: Licensed Help You Can Actually Meet
        </h1>

        <Image
          src="/images/local-medicare-agent.webp"
          alt="local medicare agent"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg mb-2">
          A local Medicare agent sits across the table from you, knows your area's doctors, and picks up the phone when something goes wrong with a claim. That is a very different experience from calling an 800 number and getting a different person every time.
        </p>
        <p className="text-lg mb-6">
          I'm Anthony Orner, a licensed independent Medicare broker based in New Jersey. I'm contracted with the top carriers in NJ and PA, and every consultation is free.
        </p>

        <PhoneCTA />

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Why working with a local broker beats a 1-800 number
        </h2>
        <p className="mb-2">
          Call centers route you to whoever is available. That rep might be in Texas, unfamiliar with NJ Medicaid rules or which hospitals take which Advantage plans in Bergen County.
        </p>
        <p className="mb-6">
          A local agent knows the provider networks that matter here. I can tell you which plans keep Hackensack Meridian or RWJBarnabas in-network because I check those directories regularly for my clients.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          What a licensed Medicare agent actually does for you
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Compares Medicare Supplement (Medigap) rates across carriers side by side</li>
          <li>Reviews Medicare Advantage plan benefits, copays, and network restrictions</li>
          <li>Checks your prescriptions against Part D formularies before you enroll</li>
          <li>Handles the enrollment paperwork so nothing gets filed wrong</li>
          <li>Assists with claims issues or plan changes year after year</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Independent vs. captive - why it matters
        </h2>
        <p className="mb-2">
          Some agents work for a single insurance company. They can only show you that company's plans. As an independent broker, I represent multiple carriers. That means I can show you Plan G from three or four different companies and let you pick the best rate.
        </p>
        <p className="mb-6">
          There is no cost difference either way. Carriers pay agents the same commission whether the agent is captive or independent. You just get more options with an independent broker.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Areas in New Jersey Anthony Orner serves
        </h2>
        <p className="mb-2">
          I work with clients across all 21 New Jersey counties and parts of eastern Pennsylvania. Most consultations happen by phone or video, but I also meet clients in person when that works better.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>North Jersey: Bergen, Passaic, Essex, Morris, Hudson</li>
          <li>Central Jersey: Middlesex, Monmouth, Mercer, Somerset, Union</li>
          <li>South Jersey: Burlington, Camden, Ocean, Atlantic, Cape May</li>
          <li>Eastern Pennsylvania (licensed in PA)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          When to contact a local agent
        </h2>
        <p className="mb-2">
          The best time is three to six months before you turn 65. Your Medigap Open Enrollment Period lasts six months starting the month you turn 65 and are enrolled in Part B. During that window, no carrier can deny you or charge higher premiums based on health history.
        </p>
        <p className="mb-6">
          Already on Medicare? The Annual Enrollment Period runs October 15 through December 7 each year. That is the window to switch Medicare Advantage or Part D plans for the following year.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          How to schedule a free Medicare consultation
        </h2>
        <p className="mb-6">
          Call 855-559-1700 or use the link below. I'll ask a few questions about your current coverage, doctors, and prescriptions. Then I'll show you the plans that actually fit. No pressure, no obligation, no cost.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-10 text-center">
          <p className="text-xl font-semibold mb-2">
            Ready to talk with a local Medicare agent?
          </p>
          <p className="text-lg mb-4">
            Call{" "}
            <a
              href="tel:8555591700"
              className="text-blue-700 font-bold hover:underline"
            >
              855-559-1700
            </a>{" "}
            or schedule online.
          </p>
          <Link
            href="/get-a-free-quote"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare/supplement/plan-g-nj"
                className="text-blue-700 hover:underline"
              >
                Medicare Plan G in New Jersey: Rates and Coverage
              </Link>
            </li>
            <li>
              <Link
                href="/medicare/advantage/nj"
                className="text-blue-700 hover:underline"
              >
                Medicare Advantage Plans in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/medicare/eligibility/turning-65"
                className="text-blue-700 hover:underline"
              >
                Turning 65? Your Medicare Enrollment Checklist
              </Link>
            </li>
            <li>
              <Link
                href="/medicare/supplement/plan-g-vs-plan-n"
                className="text-blue-700 hover:underline"
              >
                Plan G vs. Plan N: Which Medigap Plan is Right for You?
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}