import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "local medicare agents in trenton nj | Free Plan Comparison | MedicareYourself",
  description:
    "Local medicare agents in Trenton, NJ compare every major carrier for you. Anthony Orner offers free, licensed broker guidance in Mercer County. Call today.",
  openGraph: {
    title:
      "local medicare agents in trenton nj | Free Plan Comparison | MedicareYourself",
    description:
      "Local medicare agents in Trenton, NJ compare every major carrier for you. Anthony Orner offers free, licensed broker guidance in Mercer County. Call today.",
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
      name: "Local Medicare Agents in Trenton NJ",
      item: "https://medicareyourself.com/services/local-medicare-agents-in-trenton-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Local Medicare Agents in Trenton, NJ: Licensed Broker Help at No Cost",
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
    question: "Do I pay anything to use a local Medicare agent in Trenton?",
    answer:
      "No. Licensed Medicare brokers are paid by the insurance carriers, not by you. You get the same plan pricing whether you enroll directly or through a broker, so there is zero cost for professional guidance.",
  },
  {
    question: "What is the difference between a Medicare agent and a broker?",
    answer:
      "A captive agent represents one insurance company. A broker like Anthony Orner is contracted with multiple carriers and can compare plans across companies to find the best fit for your budget and health needs.",
  },
  {
    question:
      "When is the Medigap Open Enrollment Period for Trenton residents?",
    answer:
      "Your Medigap Open Enrollment lasts 6 months starting the month you turn 65 and are enrolled in Part B. During this window, carriers cannot deny you or charge higher premiums due to health conditions. Missing it can limit your options.",
  },
  {
    question: "Can a Trenton Medicare agent help with prescription drug plans?",
    answer:
      "Yes. A licensed broker can compare Part D prescription drug plans available in Mercer County, check if your medications are on each plan's formulary, and enroll you during the appropriate enrollment period.",
  },
];

export default function LocalMedicareAgentsTrentonNJ() {
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
          <Link href="/medicare" className="hover:underline">
            Medicare Guides
          </Link>{" "}
          &gt;{" "}
          <span className="text-gray-700">
            Local Medicare Agents in Trenton NJ
          </span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Local Medicare Agents in Trenton, NJ: Licensed Broker Help at No Cost
        </h1>

        <Image
          src="/images/local-medicare-agents-in-trenton-nj.webp"
          alt="local medicare agents in trenton nj"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg mb-2">
          Local Medicare agents in Trenton, NJ give you a real advantage when
          choosing coverage. Instead of calling each carrier yourself, you get
          one person who already knows what every major plan costs in Mercer
          County.
        </p>
        <p className="text-lg mb-6">
          I'm Anthony Orner, a licensed Medicare broker serving Trenton and
          surrounding areas. My help costs you nothing. The carriers pay me, so
          you get the same rates you'd find on your own.
        </p>

        <PhoneCTA />

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          What makes a broker local and why it matters
        </h2>
        <p className="mb-3">
          A "local" broker actually knows which hospitals and doctors Trenton
          residents use. Capital Health Regional Medical Center, St. Francis
          Medical Center, and the Penn Medicine practices along Route 1 all
          accept different networks. I keep track so you don't have to.
        </p>
        <p className="mb-3">
          Local also means I'm available for a phone call or a sit-down meeting.
          You're not filing a support ticket with a call center in another state.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Medicare Supplement carriers serving Mercer County
        </h2>
        <p className="mb-3">
          Several major carriers offer Medigap plans in the 08608, 08609, and
          08610 zip codes. As a broker, I compare rates across all of them in a
          single appointment. Rates vary by carrier, age, and tobacco status, so
          getting multiple quotes matters.
        </p>
        <ul className="list-disc ml-6 mb-3 space-y-1">
          <li>Plan G - covers everything except the $257/year Part B deductible</li>
          <li>Plan N - lower premiums, small copays at some office visits</li>
          <li>
            Plan A and Plan B - available but less popular due to fewer benefits
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Trenton-area enrollment deadlines you cannot afford to miss
        </h2>
        <p className="mb-3">
          Your Medigap Open Enrollment Period lasts 6 months starting the month
          you turn 65 and have Part B. During this window, no carrier in New
          Jersey can reject you or charge more for health conditions. Miss it and
          you may face medical underwriting.
        </p>
        <p className="mb-3">
          For Medicare Advantage and Part D drug plans, the Annual Enrollment
          Period runs October 15 through December 7 each year. Mark it on your
          calendar.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          How a free broker consultation actually works
        </h2>
        <p className="mb-3">
          You call me at 855-559-1700. We spend about 15 to 20 minutes reviewing
          your current coverage, doctors, prescriptions, and budget. I run
          quotes on the spot and walk you through side-by-side comparisons.
        </p>
        <p className="mb-3">
          No pressure to enroll that day. I send you everything in writing so you
          can decide on your own time.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          2026 Medicare costs every Trenton resident should know
        </h2>
        <ul className="list-disc ml-6 mb-3 space-y-1">
          <li>Part B premium: $185/month</li>
          <li>Part B deductible: $257/year</li>
          <li>Part A deductible: $1,676 per benefit period</li>
          <li>Skilled nursing coinsurance (days 21-100): $209.50/day</li>
          <li>
            Part B late enrollment penalty: 10% for every 12 months you delayed
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Schedule a free consultation with Anthony Orner
        </h2>
        <p className="mb-3">
          Whether you're turning 65, retiring from state employment, or just
          want to check if you're overpaying, one call gives you clarity. I work
          with Mercer County residents year-round and I'm happy to answer
          questions even if you're not ready to switch.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-10 mb-10 text-center">
          <p className="text-xl font-semibold mb-2">
            Ready to compare Medicare plans in Trenton?
          </p>
          <p className="mb-4">
            Call{" "}
            <a
              href="tel:8555591700"
              className="text-blue-700 font-bold hover:underline"
            >
              855-559-1700
            </a>{" "}
            for a free, no-obligation quote.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Get a Free Quote
          </Link>
        </div>

        <FAQSection faqs={faqs} />

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare/medicare-supplement-plans-nj"
                className="text-blue-600 hover:underline"
              >
                Medicare Supplement Plans in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/medicare/medicare-plan-g-nj"
                className="text-blue-600 hover:underline"
              >
                Medicare Plan G in NJ: Benefits and Costs
              </Link>
            </li>
            <li>
              <Link
                href="/medicare/medicare-advantage-plans-nj"
                className="text-blue-600 hover:underline"
              >
                Medicare Advantage Plans in New Jersey
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
        </div>
      </main>
    </>
  );
}