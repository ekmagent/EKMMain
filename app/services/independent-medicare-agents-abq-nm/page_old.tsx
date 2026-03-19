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
    "Independent Medicare agents in ABQ NM compare plans from multiple carriers at no cost to you. Get unbiased Supplement and Advantage help. Free consultation.",
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
      item: "https://medicareyourself.com/medicare-guides",
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
  datePublished: "2025-07-01",
  dateModified: "2025-07-01",
};

const faqs = [
  {
    question: "How much do Medicare agents charge?",
    answer:
      "Independent Medicare agents do not charge you anything. They are compensated by the insurance carriers when you enroll in a plan. Your premium stays the same whether you use an agent or enroll directly with the carrier.",
  },
  {
    question: "What is an independent Medicare agent?",
    answer:
      "An independent Medicare agent is a licensed broker who is not tied to a single insurance company. They can compare plans from multiple carriers and recommend the one that best fits your health needs and budget, rather than pushing one company's products.",
  },
  {
    question: "Can an independent agent help with both Medicare Supplement and Medicare Advantage?",
    answer:
      "Yes. Independent agents in Albuquerque are typically licensed to sell both Medicare Supplement (Medigap) policies and Medicare Advantage plans. They can walk you through the differences and help you pick the right path.",
  },
  {
    question: "When should I contact a Medicare agent in Albuquerque?",
    answer:
      "Ideally, reach out 2-3 months before you turn 65 or before your Part B start date. For Medicare Advantage changes, the Annual Enrollment Period runs October 15 through December 7. An agent can help you prepare ahead of time so you don't miss key deadlines.",
  },
];

export default function IndependentMedicareAgentsABQNM() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
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
        <span className="text-gray-700">Independent Medicare Agents ABQ NM</span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Independent Medicare Agents in ABQ NM — Why Independence Matters for Your Coverage
      </h1>

      <Image
        src="/images/independent-medicare-agents-abq-nm.webp"
        alt="independent medicare agents abq nm"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-3">
        Independent Medicare agents in ABQ NM give you something a captive agent never can: an honest side-by-side comparison of plans from multiple carriers. If you live in the Albuquerque area and you are approaching 65 or already on Medicare, working with an independent broker means your options are not limited to one company's lineup.
      </p>
      <p className="mb-6">
        The best part? This service costs you nothing out of pocket. Here is how it works and why Albuquerque residents are choosing independent help.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What makes an independent agent different from a captive one
        </h2>
        <p className="mb-2">
          A captive agent works for one insurance company. They can only show you that company's plans. If a competitor has a lower rate or better network in Bernalillo County, you will never hear about it.
        </p>
        <p>
          An independent agent contracts with multiple carriers. That means they can pull quotes from several companies, lay them next to each other, and let you pick the best fit. No sales quotas for a single brand.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare Supplement and Advantage options in Albuquerque
        </h2>
        <p className="mb-2">
          Albuquerque has a competitive Medicare market. You will find several Medicare Advantage (Part C) plans with $0 premiums and added dental or vision benefits. Medicare Supplement plans like Plan G and Plan N are also available from multiple carriers, and rates vary significantly.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Plan G covers everything Original Medicare does not, except the $257 annual Part B deductible</li>
          <li>Plan N has lower premiums but includes small copays at office visits</li>
          <li>Medicare Advantage plans bundle Part A, Part B, and usually Part D into one plan</li>
        </ul>
        <p className="mt-2">
          An independent agent can help you decide which path makes sense for your doctors, prescriptions, and budget.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How independent brokers get paid without charging you
        </h2>
        <p className="mb-2">
          Insurance carriers pay agent commissions directly. Your premium is the same whether you enroll through an agent, go online, or call the carrier yourself. There is zero markup.
        </p>
        <p>
          This is federally regulated. No licensed Medicare agent can charge you a fee for enrollment help. If someone asks for payment, walk away and report them to CMS.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why Albuquerque residents benefit from local knowledge
        </h2>
        <p className="mb-2">
          Provider networks change by ZIP code. A plan that works great in Santa Fe might have limited doctors in the ABQ metro area. A local independent agent knows which carriers have strong networks at Presbyterian, UNM Hospital, and Lovelace.
        </p>
        <p>
          They also understand New Mexico-specific Medigap rules and can flag anything that affects your enrollment window.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Key enrollment windows to keep in mind
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Medigap Open Enrollment: 6 months starting the month you turn 65 and have Part B - guaranteed issue, no health questions</li>
          <li>Medicare Advantage and Part D Annual Enrollment: October 15 through December 7</li>
          <li>Part B late enrollment penalty: 10% per 12-month period you delayed signing up</li>
        </ul>
        <p className="mt-2">
          Missing these dates can cost you. An independent agent keeps you on track.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Connect with a licensed independent agent today
        </h2>
        <p className="mb-2">
          Whether you are turning 65, retiring from Sandia National Labs, or switching from a plan that no longer fits, a quick phone call can save you hundreds a year. We compare plans from multiple carriers and walk you through every option at no cost.
        </p>
        <p>
          Call now or request a free consultation below.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center mb-10">
        <p className="text-xl font-semibold mb-2">
          Ready to compare Medicare plans in Albuquerque?
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a
            href="tel:8555591700"
            className="text-blue-700 font-bold hover:underline"
          >
            855-559-1700
          </a>{" "}
          for a free, no-obligation consultation.
        </p>
        <Link
          href="/get-a-free-quote"
          className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
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
              href="/medicare-guides/medicare-supplement-plan-g"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plan G - Full Breakdown
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-vs-medigap"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage vs. Medigap - Which Is Right for You?
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/when-to-enroll-in-medicare"
              className="text-blue-600 hover:underline"
            >
              When to Enroll in Medicare - Deadlines and Penalties
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-broker-near-me"
              className="text-blue-600 hover:underline"
            >
              Find a Medicare Broker Near You
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}