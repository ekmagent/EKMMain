import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare insurance agents in bloomfield new jersey | Free Broker Help | MedicareYourself",
  description:
    "Medicare insurance agents in Bloomfield New Jersey — compare every major carrier with independent broker Anthony Orner. Free quotes, zero sales pressure.",
  openGraph: {
    title:
      "medicare insurance agents in bloomfield new jersey | Free Broker Help | MedicareYourself",
    description:
      "Medicare insurance agents in Bloomfield New Jersey — compare every major carrier with independent broker Anthony Orner. Free quotes, zero sales pressure.",
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
      item: "https://www.medicareyourself.com/medicare",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Medicare Insurance Agents in Bloomfield, New Jersey",
      item: "https://www.medicareyourself.com/services/medicare-insurance-agents-in-bloomfield-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Insurance Agents in Bloomfield, New Jersey: Broker-Level Guidance",
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
    question:
      "Do Medicare insurance agents in Bloomfield, NJ charge a fee for their help?",
    answer:
      "No. Independent Medicare brokers are paid by the insurance carriers, not by you. The plans cost the same whether you enroll on your own or work with a broker. You get free guidance without paying a premium surcharge.",
  },
  {
    question:
      "What is the difference between a captive Medicare agent and an independent broker?",
    answer:
      "A captive agent represents one insurance company and can only show you that company's plans. An independent broker is contracted with multiple carriers, so they can compare rates and benefits side-by-side to find the best fit for your situation.",
  },
  {
    question: "When is the best time to enroll in a Medicare plan in New Jersey?",
    answer:
      "Your Medigap Open Enrollment Period starts the month you turn 65 and are enrolled in Part B. It lasts 6 months and gives you guaranteed issue rights - no health questions and no higher premiums. For Medicare Advantage and Part D, the annual enrollment runs October 15 through December 7.",
  },
  {
    question:
      "Can I switch Medicare plans if I already have coverage in Bloomfield?",
    answer:
      "Yes. During the Medicare Advantage Open Enrollment (October 15 - December 7), you can switch Advantage or Part D plans. Switching Medigap plans outside your initial enrollment may require medical underwriting in New Jersey. Call to discuss your specific options.",
  },
];

export default function MedicareInsuranceAgentsBloomfieldNJ() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

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
          Medicare Insurance Agents in Bloomfield, New Jersey
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Medicare Insurance Agents in Bloomfield, New Jersey: Broker-Level
        Guidance
      </h1>

      <Image
        src="/images/medicare-insurance-agents-in-bloomfield-new-jersey.webp"
        alt="Medicare insurance agents in Bloomfield New Jersey"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Medicare insurance agents in Bloomfield, New Jersey come in two
        varieties, and the type you choose affects which plans you actually see.
        A captive agent shows you one carrier's lineup. An independent broker
        shows you all of them.
      </p>
      <p className="text-lg mb-6">
        I'm Anthony Orner, a licensed independent Medicare broker serving
        Bloomfield and the rest of Essex County. I compare every major carrier so
        you don't have to.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Captive agent vs. independent broker: what Bloomfield residents should
          know
        </h2>
        <p className="mb-2">
          A captive agent works for one insurance company. They might know their
          own products well, but they can't tell you if a competitor offers
          something better or cheaper.
        </p>
        <p>
          An independent broker like me holds contracts with multiple carriers. I
          pull quotes from all of them and lay them side-by-side. Same plans,
          same prices - you just get a wider view.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Supplement and Advantage carriers serving Essex County
        </h2>
        <p className="mb-2">
          Bloomfield sits in Essex County, which has strong carrier competition
          for both Medicare Supplement (Medigap) and Medicare Advantage plans.
          That's good news for you. More competition means more options and
          better rates.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Multiple Medigap carriers offer Plan G and Plan N in your zip code
          </li>
          <li>
            Several Medicare Advantage plans include $0-premium HMO and PPO
            options
          </li>
          <li>
            Part D standalone drug plans vary widely - formulary details matter
          </li>
        </ul>
        <p className="mt-2">
          Rates vary by carrier, age, and tobacco status. I run the numbers for
          free.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How to avoid overpaying for the same Medicare benefits
        </h2>
        <p className="mb-2">
          Medigap plans are standardized by the federal government. Plan G from
          one company covers exactly the same benefits as Plan G from another.
          The only difference is the premium.
        </p>
        <p>
          Some Bloomfield residents pay $50 to $80 more per month than they need
          to because they never compared carriers. A five-minute phone call fixes
          that.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Your Medigap open enrollment window matters
        </h2>
        <p className="mb-2">
          If you're turning 65 and enrolling in Part B, you get a one-time
          6-month Medigap Open Enrollment Period. During this window, carriers
          must accept you at standard rates - no health questions, no denials.
        </p>
        <p>
          I typically have clients apply up to 6 months before their Part B start
          date. This locks in your rate early and protects you from premium
          increases before coverage kicks in. The sooner you lock in, the better
          your rate.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Key 2026 Medicare costs to know
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Part B premium: $185/month</li>
          <li>Part B deductible: $257/year</li>
          <li>Part A deductible: $1,676 per benefit period</li>
          <li>
            Skilled nursing facility coinsurance (days 21-100): $209.50/day
          </li>
          <li>
            Part B late enrollment penalty: 10% for each 12-month period you
            delayed
          </li>
        </ul>
        <p className="mt-2">
          These costs add up fast without the right plan in place.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Schedule a free consultation with Anthony Orner
        </h2>
        <p className="mb-2">
          I work with Bloomfield residents year-round. Whether you're new to
          Medicare or reviewing your current coverage, I'll compare your options
          at no cost. Zero sales pressure. You decide on your own timeline.
        </p>
        <p>
          Call me directly or request a callback. I answer most calls personally.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center mb-10">
        <p className="text-xl font-semibold mb-2">
          Ready to compare Medicare plans in Bloomfield?
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or click below for a free quote.
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
              href="/medicare/plan-g-new-jersey"
              className="text-blue-600 hover:underline"
            >
              Medicare Plan G in New Jersey: Full Breakdown
            </Link>
          </li>
          <li>
            <Link
              href="/medicare/medicare-advantage-essex-county"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage Plans in Essex County
            </Link>
          </li>
          <li>
            <Link
              href="/medicare/medigap-open-enrollment-nj"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-blue-600 hover:underline"
            >
              About Anthony Orner - Licensed Medicare Broker
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}