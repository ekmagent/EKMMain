import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare specialists in south carolina | Free Multi-Carrier Quotes | MedicareYourself",
  description:
    "Medicare specialists in South Carolina — Anthony Orner compares Supplement and Advantage plans from top SC carriers. Free quotes, licensed guidance.",
  openGraph: {
    title:
      "medicare specialists in south carolina | Free Multi-Carrier Quotes | MedicareYourself",
    description:
      "Medicare specialists in South Carolina — Anthony Orner compares Supplement and Advantage plans from top SC carriers. Free quotes, licensed guidance.",
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
      item: "https://www.medicareyourself.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Medicare Specialists in South Carolina",
      item: "https://www.medicareyourself.com/services/medicare-specialists-in-south-carolina",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Specialists in South Carolina: Licensed Broker Support for SC Residents",
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
    "https://www.medicareyourself.com/services/medicare-specialists-in-south-carolina",
};

const faqs = [
  {
    question: "What does a Medicare specialist do?",
    answer:
      "A Medicare specialist is a licensed broker or agent who helps you compare Medicare Supplement, Medicare Advantage, and Part D prescription drug plans. They review your health needs, prescriptions, doctors, and budget, then present options from multiple carriers so you can make an informed choice. Their services are typically free to you because carriers pay the broker directly.",
  },
  {
    question:
      "Do I have to pay a Medicare specialist in South Carolina for help?",
    answer:
      "No. Independent Medicare brokers like Anthony Orner are compensated by the insurance carriers, not by you. There is no fee to get quotes, ask questions, or enroll through a licensed specialist.",
  },
  {
    question: "When is the best time to contact a Medicare specialist in SC?",
    answer:
      "Ideally, reach out 3 to 6 months before you turn 65 or before your Part B start date. For Medigap plans, your 6-month Open Enrollment Period begins the month you turn 65 and have Part B. For Medicare Advantage, the Annual Enrollment Period runs October 15 through December 7. The earlier you start, the more options you protect.",
  },
  {
    question:
      "Can a South Carolina Medicare specialist help me switch plans?",
    answer:
      "Yes. If you already have coverage and want to explore other options, a specialist can compare your current plan against alternatives during an eligible enrollment window. Call 855-559-1700 to discuss your situation.",
  },
];

export default function MedicareSpecialistsSouthCarolina() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        {" > "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>
        {" > "}
        <span className="text-gray-700">
          Medicare Specialists in South Carolina
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Medicare Specialists in South Carolina: Licensed Broker Support for SC Residents
      </h1>

      <Image
        src="/images/medicare-specialists-in-south-carolina.webp"
        alt="Medicare specialists in South Carolina"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Medicare specialists in South Carolina help you cut through confusing plan options and find coverage that actually fits your life. With dozens of carriers offering Supplement, Advantage, and Part D plans across the state, having a licensed broker compare them side by side saves you real money.
      </p>
      <p className="mb-6">
        I'm Anthony Orner, an independent Medicare broker. I work with multiple carriers - not just one - so I can show you what's available across SC without steering you toward a single company.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why South Carolina retirees need an independent Medicare specialist
        </h2>
        <p className="mb-2">
          South Carolina has a large retiree population, and carriers compete aggressively for your business. That sounds good until you realize the sheer number of plan options makes comparison shopping overwhelming on your own.
        </p>
        <p>
          An independent specialist isn't tied to one carrier. I compare rates from multiple insurers so you see the full picture before you commit.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Supplement and Advantage plans available across SC counties
        </h2>
        <p className="mb-2">
          Medicare Supplement (Medigap) plans like Plan G and Plan N are standardized by the federal government. That means Plan G from one carrier covers the same benefits as Plan G from another. The difference is price and company reputation.
        </p>
        <ul className="list-disc ml-6 mb-2 space-y-1">
          <li>Plan G covers the Part A deductible ($1,676 in 2026), skilled nursing coinsurance, and Part B excess charges</li>
          <li>Plan N has lower premiums but includes small copays at some visits</li>
          <li>Medicare Advantage plans vary by county - network, copays, and extra benefits differ depending on where you live in SC</li>
        </ul>
        <p>
          I can pull quotes for your specific county and zip code. Rates vary by carrier, so a quick comparison call often reveals savings.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          South Carolina Medigap underwriting rules to know before you enroll
        </h2>
        <p className="mb-2">
          Your Medigap Open Enrollment Period lasts 6 months. It starts the month you turn 65 and are enrolled in Part B. During this window, no carrier in South Carolina can deny you or charge more based on health history.
        </p>
        <p>
          Miss that window and you'll face medical underwriting. Pre-existing conditions could mean higher premiums or outright denial. That's why I recommend starting the process early - ideally months before your Part B effective date - so you lock in your rate while guaranteed issue protections are in place.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How working with a broker differs from going direct
        </h2>
        <p className="mb-2">
          When you call a carrier directly, their agent can only show you that company's plans. A broker shows you plans from multiple carriers at once. Same coverage, same pricing - the carrier pays my commission, not you.
        </p>
        <p>
          There are over 2,600 licensed Medicare agents in South Carolina. Not all of them are independent. Ask whether your agent represents one company or many. It matters.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Key enrollment dates SC residents should know
        </h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Medigap Open Enrollment: 6-month window starting at age 65 + Part B enrollment</li>
          <li>Medicare Advantage and Part D Annual Enrollment: October 15 through December 7</li>
          <li>Medicare Advantage Open Enrollment: January 1 through March 31 (switch Advantage plans or return to Original Medicare)</li>
          <li>Part B late enrollment penalty: 10% added to your $185/month premium for each 12-month period you delayed</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Get a free SC Medicare plan comparison from Anthony Orner
        </h2>
        <p className="mb-2">
          Whether you're turning 65 in Charleston, retiring in Greenville, or moving to Myrtle Beach, I can pull real quotes for your area. The call is free, there's no obligation, and you'll walk away knowing exactly what your options cost.
        </p>
        <p>
          Call 855-559-1700 or use the link below to request your personalized comparison.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center mb-10">
        <p className="text-xl font-bold mb-2">
          Ready to compare Medicare plans in South Carolina?
        </p>
        <p className="mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-semibold">
            855-559-1700
          </a>{" "}
          or request your free quote online.
        </p>
        <Link
          href="/get-a-free-quote"
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
              href="/services/medicare-supplement-plan-g"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plan G - Full Breakdown
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-supplement-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plan N - What It Covers
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-advantage-plans"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage Plans - How They Work
            </Link>
          </li>
          <li>
            <Link
              href="/services/medigap-open-enrollment"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment - When and Why It Matters
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}