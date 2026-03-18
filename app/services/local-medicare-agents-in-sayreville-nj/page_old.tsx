import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "local medicare agents in sayreville nj | Free Independent Guidance | MedicareYourself",
  description:
    "Local Medicare agents in Sayreville NJ — Anthony Orner is a licensed independent broker in Middlesex County. Compare top carriers side by side. Free quote.",
  openGraph: {
    title:
      "local medicare agents in sayreville nj | Free Independent Guidance | MedicareYourself",
    description:
      "Local Medicare agents in Sayreville NJ — Anthony Orner is a licensed independent broker in Middlesex County. Compare top carriers side by side. Free quote.",
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
      name: "Local Medicare Agents in Sayreville NJ",
      item: "https://www.medicareyourself.com/services/local-medicare-agents-in-sayreville-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Local Medicare Agents in Sayreville, NJ — Licensed Broker Serving Middlesex County",
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
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
};

const faqs = [
  {
    question: "How do I pick a Medicare agent?",
    answer:
      "Look for a licensed, independent broker who represents multiple carriers - not just one company. Ask if they charge a fee (they shouldn't - agents are paid by the insurance carrier, not you). A good agent will ask about your doctors, prescriptions, and budget before recommending anything.",
  },
  {
    question: "Do I need a Medicare agent?",
    answer:
      "You don't have to use one, but working with a local agent costs you nothing and can save hours of research. An independent broker compares plans from multiple carriers so you're not stuck with whichever company has the biggest advertising budget.",
  },
  {
    question: "How do I speak to a live person at Medicare?",
    answer:
      "You can call 1-800-MEDICARE (1-800-633-4227) 24 hours a day, 7 days a week. But if you want help comparing specific plans side by side, a local licensed broker can often answer your questions faster and with more personalized detail.",
  },
  {
    question: "Is there a cost to use a Medicare broker in Sayreville?",
    answer:
      "No. Independent Medicare brokers like Anthony Orner are compensated by the insurance carriers. You pay the same premium whether you enroll directly or through a broker - but with a broker, you get personalized plan comparisons at no extra charge.",
  },
];

export default function LocalMedicareAgentsSayrevilleNJ() {
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
            Local Medicare Agents in Sayreville NJ
          </span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Local Medicare Agents in Sayreville, NJ — Licensed Broker Serving
          Middlesex County
        </h1>

        <Image
          src="/images/local-medicare-agents-in-sayreville-nj.webp"
          alt="local medicare agents in Sayreville NJ"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg text-gray-700 mb-2">
          Local Medicare agents in Sayreville, NJ can make the difference
          between picking the cheapest plan and picking the right one. I'm
          Anthony Orner, an independent Medicare broker licensed in New Jersey,
          and I help Middlesex County residents compare plans from multiple
          carriers at zero cost.
        </p>
        <p className="text-gray-700 mb-6">
          Whether you're turning 65 or rethinking your current coverage, a
          quick call gets you a side-by-side comparison tailored to your
          doctors and prescriptions.
        </p>

        <PhoneCTA />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Why Sayreville residents choose an independent Medicare broker
          </h2>
          <p className="text-gray-700 mb-2">
            A captive agent works for one insurance company. I don't. As an
            independent broker, I represent plans from multiple carriers, so my
            recommendations are based on what fits your situation - not a sales
            quota.
          </p>
          <p className="text-gray-700">
            My services are free. Carriers pay the broker directly, and your
            premium stays the same whether you enroll through me or on your own.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Supplement and Advantage carriers available in Middlesex County
          </h2>
          <p className="text-gray-700 mb-3">
            Sayreville falls within Middlesex County, which has strong carrier
            competition for both Medicare Supplement (Medigap) and Medicare
            Advantage plans. Here's what I typically compare for clients:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Medicare Supplement Plans G and N from multiple insurers</li>
            <li>Medicare Advantage HMO and PPO options with $0 premiums</li>
            <li>Prescription Drug (Part D) standalone plans</li>
            <li>Dental and vision add-ons bundled with Advantage plans</li>
          </ul>
          <p className="text-gray-700 mt-3">
            Rates vary by carrier, age, and tobacco status. I pull real quotes
            so you see actual numbers, not estimates.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            How to switch Medicare plans without a coverage gap
          </h2>
          <p className="text-gray-700 mb-2">
            Timing matters. Medicare Advantage and Part D changes happen during
            Open Enrollment from October 15 through December 7 each year, with
            new coverage starting January 1.
          </p>
          <p className="text-gray-700 mb-2">
            Medigap switches work differently. If you're still in your 6-month
            Medigap Open Enrollment Period (which starts the month you turn 65
            and are enrolled in Part B), you have guaranteed issue rights. No
            health questions, no higher premiums.
          </p>
          <p className="text-gray-700">
            Outside that window, you may need to pass medical underwriting.
            That's exactly why having a broker matters - I know when your best
            enrollment windows open.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            2026 Medicare costs you should know
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Part B premium: $185/month</li>
            <li>Part B deductible: $257/year</li>
            <li>Part A deductible: $1,676 per benefit period</li>
            <li>
              Skilled Nursing Facility coinsurance: $209.50/day for days 21-100
            </li>
          </ul>
          <p className="text-gray-700 mt-3">
            These out-of-pocket costs are exactly what Medigap plans like Plan G
            help cover. Plan G pays everything Original Medicare doesn't - except
            the Part B deductible.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            What to have ready before we talk
          </h2>
          <p className="text-gray-700 mb-3">
            A 15-minute phone call is usually all it takes. Here's what helps me
            give you the most accurate comparison:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Your Medicare card (or your Part B start date)</li>
            <li>A list of current prescriptions with dosages</li>
            <li>Names of your preferred doctors and specialists</li>
            <li>Your current plan details if you're already on Medicare</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Get a free no-obligation quote from Anthony Orner
          </h2>
          <p className="text-gray-700">
            I live and work in New Jersey. When you call, you talk to me - not a
            call center. I'll pull real quotes from the carriers available in
            Sayreville's zip codes so you can compare premiums, copays, and
            networks side by side.
          </p>
        </section>

        <div className="mt-10 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <p className="text-xl font-semibold text-blue-900 mb-2">
            Ready to compare plans? Call today.
          </p>
          <a
            href="tel:8555591700"
            className="text-2xl font-bold text-blue-700 hover:underline"
          >
            855-559-1700
          </a>
          <p className="mt-3">
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              Get a Free Quote
            </Link>
          </p>
        </div>

        <section className="mt-12">
          <FAQSection faqs={faqs} />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Related resources
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare-guides/medicare-supplement-plans-nj"
                className="text-blue-600 hover:underline"
              >
                Medicare Supplement Plans in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/medicare-plan-g-nj"
                className="text-blue-600 hover:underline"
              >
                Medicare Plan G in NJ - What It Covers and Costs
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/medicare-advantage-plans-nj"
                className="text-blue-600 hover:underline"
              >
                Medicare Advantage Plans in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/when-to-enroll-in-medicare"
                className="text-blue-600 hover:underline"
              >
                When to Enroll in Medicare - Key Dates and Deadlines
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}