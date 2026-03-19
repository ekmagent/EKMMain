import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare insurance agents in elizabeth new jersey | Free Quotes | MedicareYourself",
  description:
    "Medicare insurance agents in Elizabeth New Jersey — Anthony Orner compares Supplement and Advantage plans across carriers. Free quotes, no obligation.",
  openGraph: {
    title:
      "medicare insurance agents in elizabeth new jersey | Free Quotes | MedicareYourself",
    description:
      "Medicare insurance agents in Elizabeth New Jersey — Anthony Orner compares Supplement and Advantage plans across carriers. Free quotes, no obligation.",
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
      name: "Medicare Insurance Agents in Elizabeth, New Jersey",
      item: "https://medicareyourself.com/services/medicare-insurance-agents-in-elizabeth-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Insurance Agents in Elizabeth, New Jersey: Independent Broker Access",
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
    question: "Should I use an insurance agent for Medicare?",
    answer:
      "Yes. A licensed Medicare agent costs you nothing - carriers pay the agent directly. An independent broker can compare plans from multiple companies at once, which saves you time and often money. You get objective guidance during enrollment without any extra fees on your premium.",
  },
  {
    question: "What is the best Medicare plan in New Jersey?",
    answer:
      "There is no single best plan for everyone. Medicare Supplement Plan G is the most popular Medigap choice because it covers everything except the annual Part B deductible ($257 in 2026). Medicare Advantage HMOs may work if you prefer lower premiums and can use a network. The right plan depends on your doctors, medications, and budget.",
  },
  {
    question: "How do I pick a Medicare agent?",
    answer:
      "Look for an independent broker, not a captive agent tied to one carrier. Confirm they are licensed in New Jersey and ask how many carriers they represent. An independent broker should offer a free side-by-side comparison and never pressure you into one plan.",
  },
  {
    question:
      "When should I contact a Medicare agent in Elizabeth before turning 65?",
    answer:
      "Contact a broker at least 6 months before your Part B start date. This gives you time to compare plans and apply early, which can lock in a lower Medigap rate before your coverage even begins.",
  },
];

export default function MedicareInsuranceAgentsElizabethNJ() {
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
          Medicare Insurance Agents in Elizabeth, New Jersey
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Medicare Insurance Agents in Elizabeth, New Jersey: Independent Broker
        Access
      </h1>

      <Image
        src="/images/medicare-insurance-agents-in-elizabeth-new-jersey.webp"
        alt="Medicare insurance agents in Elizabeth New Jersey"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Medicare insurance agents in Elizabeth, New Jersey range from captive
        agents selling one company's plans to independent brokers who compare
        rates across a dozen or more carriers. The difference matters when you
        are making a decision that affects your healthcare costs for years.
      </p>
      <p className="text-lg mb-6">
        I'm Anthony Orner, a licensed independent Medicare broker serving Union
        County. I work with multiple carriers so I can show you what is actually
        the best fit - not just what one company wants me to sell.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How an independent broker differs from a captive agent
        </h2>
        <p className="mb-2">
          A captive agent represents one insurance company. They can only show
          you that company's plans, even if a competitor offers a lower rate for
          identical coverage.
        </p>
        <p>
          An independent broker like me is appointed with multiple carriers. I
          pull quotes from all of them, lay them side by side, and let you pick.
          There is no cost difference to you - carriers pay the broker the same
          commission regardless.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Top Medicare Supplement carriers available in Union County
        </h2>
        <p className="mb-2">
          Elizabeth is in Union County, and several strong Medigap carriers write
          policies here. The carriers I most frequently quote for Elizabeth
          residents include:
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-2">
          <li>Aetna</li>
          <li>Cigna</li>
          <li>Mutual of Omaha</li>
          <li>United American</li>
          <li>Anthem (via Empire BCBS network)</li>
        </ul>
        <p>
          Rates vary by carrier, age, and tobacco status. Plan G from one
          company can cost $30-$50 more per month than Plan G from another - same
          exact benefits. That is why comparing matters.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Common Medicare mistakes Elizabeth residents make at 65
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Waiting too long to enroll. Your Medigap Open Enrollment Period
            lasts 6 months starting the month you turn 65 and have Part B.
            During this window, no carrier can deny you or charge more for
            health conditions. Miss it, and you face medical underwriting.
          </li>
          <li>
            Choosing a plan based on premium alone. A $0-premium Medicare
            Advantage plan may have $5,000-$8,000 in out-of-pocket exposure.
            Compare total potential costs, not just the monthly number.
          </li>
          <li>
            Ignoring the Part B late enrollment penalty. If you delay Part B
            without creditable employer coverage, you pay a 10% penalty for
            every 12-month period you were late - and it never goes away.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why applying early can lock in a better rate
        </h2>
        <p className="mb-2">
          My practice is to have clients apply for their Medigap plan up to 6
          months before their Part B start date. Carriers will accept the
          application and set your rate at that point.
        </p>
        <p>
          Medigap premiums tend to increase over time. The sooner you lock in,
          the better your rate. If you are turning 65 next year, now is the time
          to start comparing - not the month your coverage begins.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          2026 Medicare costs Elizabeth residents should know
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Part B monthly premium: $185</li>
          <li>Part B annual deductible: $257</li>
          <li>Part A hospital deductible: $1,676 per benefit period</li>
          <li>
            Skilled nursing facility coinsurance: $209.50/day for days 21-100
          </li>
        </ul>
        <p className="mt-2">
          A Medigap Plan G covers all of these except the $257 Part B
          deductible. Plan N covers most, but adds small copays for office and
          ER visits. I can walk you through which one fits your situation.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Get a side-by-side plan comparison at no cost
        </h2>
        <p className="mb-2">
          I will pull real-time quotes from every carrier available in Elizabeth,
          show you the rates next to each other, and explain the trade-offs in
          plain English. No pressure, no obligation.
        </p>
        <p>
          Whether you are turning 65, leaving employer coverage, or just want to
          see if a better rate exists, a quick call gets you the numbers you
          need.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center my-10">
        <p className="text-xl font-semibold mb-2">
          Ready for your free Medicare comparison?
        </p>
        <p className="mb-4">
          Call{" "}
          <a
            href="tel:8555591700"
            className="text-blue-700 font-bold hover:underline"
          >
            855-559-1700
          </a>{" "}
          or{" "}
          <Link
            href="/get-a-free-quote"
            className="text-blue-700 font-bold hover:underline"
          >
            Get a Free Quote
          </Link>{" "}
          online.
        </p>
        <p className="text-sm text-gray-600">
          Anthony Orner, Licensed Medicare Broker - serving Elizabeth and all of
          Union County.
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/services/medicare-supplement-plan-g-nj"
              className="text-blue-700 hover:underline"
            >
              Medicare Supplement Plan G in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-advantage-plans-nj"
              className="text-blue-700 hover:underline"
            >
              Medicare Advantage Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/guides/when-to-enroll-in-medicare"
              className="text-blue-700 hover:underline"
            >
              When to Enroll in Medicare: Deadlines and Penalties
            </Link>
          </li>
          <li>
            <Link
              href="/guides/medigap-open-enrollment-period"
              className="text-blue-700 hover:underline"
            >
              Understanding Your Medigap Open Enrollment Period
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}