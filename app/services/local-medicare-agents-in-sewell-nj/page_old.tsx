import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "local medicare agents in sewell nj | Free Quotes, No Pressure | MedicareYourself",
  description:
    "Local Medicare agents in Sewell NJ — Anthony Orner serves Gloucester County as a licensed independent broker. Compare plans across carriers. Free quotes.",
  openGraph: {
    title:
      "local medicare agents in sewell nj | Free Quotes, No Pressure | MedicareYourself",
    description:
      "Local Medicare agents in Sewell NJ — Anthony Orner serves Gloucester County as a licensed independent broker. Compare plans across carriers. Free quotes.",
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
      name: "Local Medicare Agents in Sewell NJ",
      item: "https://medicareyourself.com/services/local-medicare-agents-in-sewell-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Local Medicare Agents in Sewell, NJ — Gloucester County Broker You Can Trust",
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
    question: "How to pick a Medicare agent?",
    answer:
      "Look for a licensed independent broker, not a captive agent tied to one carrier. An independent broker can compare plans from multiple companies side by side and recommend the best fit for your prescriptions, doctors, and budget. Ask if they charge a fee (they shouldn't - brokers are paid by the carriers, not by you).",
  },
  {
    question: "How do I speak to a live person at Medicare?",
    answer:
      "You can call 1-800-MEDICARE (1-800-633-4227) 24 hours a day, 7 days a week. TTY users can call 1-877-486-2048. However, if you want help comparing specific plans and carriers in Gloucester County, a local independent broker can walk you through options one-on-one at no cost.",
  },
  {
    question: "Is there a fee to work with a local Medicare agent in Sewell?",
    answer:
      "No. Independent Medicare brokers are compensated by the insurance carriers, not by you. The plan premiums you pay are the same whether you enroll on your own or through a broker. You get personalized guidance at zero extra cost.",
  },
  {
    question: "When should I contact a Medicare broker before turning 65?",
    answer:
      "Reach out at least 6 months before your 65th birthday. Your Medigap Open Enrollment Period starts the month you turn 65 and are enrolled in Part B. Applying early can lock in lower rates before your coverage even begins.",
  },
];

export default function LocalMedicareAgentsInSewellNJ() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <main className="max-w-4xl mx-auto px-4 py-8">
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
            Local Medicare Agents in Sewell NJ
          </span>
        </nav>

        <h1 className="text-3xl font-bold mb-4">
          Local Medicare Agents in Sewell, NJ — Gloucester County Broker You Can
          Trust
        </h1>

        <Image
          src="/images/local-medicare-agents-in-sewell-nj.webp"
          alt="local medicare agents in Sewell NJ"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg mb-2">
          Local Medicare agents in Sewell, NJ can save you real money and real
          headaches - if you pick the right one. I'm Anthony Orner, a licensed
          independent Medicare broker serving Gloucester County residents from
          right here in South Jersey.
        </p>
        <p className="text-lg mb-6">
          I work with multiple carriers, not just one. That means you see the
          full picture before you commit.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why Sewell residents benefit from an independent Medicare broker
          </h2>
          <p className="mb-2">
            A captive agent represents one insurance company. An independent
            broker represents you. I compare plans from multiple carriers and
            show you the actual costs - not just the lowest premium.
          </p>
          <p>
            There's no fee to work with me. Carriers pay the broker commission,
            and your premium stays the same either way.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Supplement and Advantage plans available in Gloucester County
          </h2>
          <p className="mb-2">
            Gloucester County residents have access to both Medicare Supplement
            (Medigap) and Medicare Advantage plans. Here's the quick difference:
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-2">
            <li>
              <strong>Medigap plans</strong> (like Plan G or Plan N) pair with
              Original Medicare. You pick any doctor who takes Medicare. Plan G
              covers everything except the Part B deductible ($257/year in 2026).
            </li>
            <li>
              <strong>Medicare Advantage plans</strong> bundle hospital, medical,
              and often drug coverage into one plan. Many have $0 premiums but
              use provider networks.
            </li>
          </ul>
          <p>
            Which one fits depends on your doctors, prescriptions, and how often
            you travel. I'll lay out both options so you can decide with actual
            numbers in front of you.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How to avoid overpaying for Medicare coverage after 65
          </h2>
          <p className="mb-2">
            The biggest mistake I see? Waiting too long. Your Medigap Open
            Enrollment Period lasts 6 months starting the month you turn 65 and
            have Part B. During that window, no health questions and no higher
            premiums.
          </p>
          <p>
            Miss it and carriers can decline you or charge more based on your
            health. I have clients apply up to 6 months before their Part B
            start date to lock in the best rate early.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What to expect when you call
          </h2>
          <p className="mb-2">
            No scripts. No pressure. I'll ask a few questions about your
            medications, your doctors, and your budget. Then I'll pull up real
            quotes from carriers available in the 08080 zip code and surrounding
            areas.
          </p>
          <p>
            The whole process usually takes about 20 minutes. You can enroll on
            the spot or take time to think it over.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Key enrollment dates Gloucester County residents should know
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Medigap Open Enrollment:</strong> 6-month window starting
              at age 65 + Part B enrollment
            </li>
            <li>
              <strong>Medicare Advantage / Part D Open Enrollment:</strong>{" "}
              October 15 - December 7 each year
            </li>
            <li>
              <strong>Part B late enrollment penalty:</strong> 10% surcharge for
              every 12-month period you delay without creditable coverage
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Schedule a free consultation with Anthony Orner
          </h2>
          <p className="mb-2">
            Whether you're turning 65 next month or reviewing your current plan
            before Open Enrollment, I'm here to help. I serve Sewell,
            Washington Township, Turnersville, and all of Gloucester County.
          </p>
          <p>
            Call me directly or request a callback. There's never a charge, and
            you're never locked in.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-6 text-center mb-10">
          <p className="text-xl font-bold mb-2">
            Ready to compare Medicare plans in Sewell?
          </p>
          <p className="mb-4">
            Call{" "}
            <a
              href="tel:8555591700"
              className="underline font-semibold text-white"
            >
              855-559-1700
            </a>{" "}
            or request your free quote online.
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
                href="/services/medicare-broker-near-me-nj"
                className="text-blue-600 hover:underline"
              >
                Find a Medicare Broker Near You in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/plans/medicare-plan-g-nj"
                className="text-blue-600 hover:underline"
              >
                Medicare Plan G in New Jersey - What It Covers and Costs
              </Link>
            </li>
            <li>
              <Link
                href="/guides/medicare-supplement-vs-advantage"
                className="text-blue-600 hover:underline"
              >
                Medicare Supplement vs. Medicare Advantage - Which Is Right for
                You?
              </Link>
            </li>
            <li>
              <Link
                href="/guides/when-to-enroll-in-medicare"
                className="text-blue-600 hover:underline"
              >
                When to Enroll in Medicare - Deadlines and Penalties
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}