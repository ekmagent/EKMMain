import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare insurance agents in camden new jersey | Free Quotes | MedicareYourself",
  description:
    "Medicare insurance agents in Camden New Jersey — Anthony Orner compares Medigap and Advantage plans across South Jersey carriers. Free quote, no obligation.",
  openGraph: {
    title:
      "medicare insurance agents in camden new jersey | Free Quotes | MedicareYourself",
    description:
      "Medicare insurance agents in Camden New Jersey — Anthony Orner compares Medigap and Advantage plans across South Jersey carriers. Free quote, no obligation.",
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
      name: "Medicare Insurance Agents in Camden, New Jersey",
      item: "https://medicareyourself.com/services/medicare-insurance-agents-in-camden-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Insurance Agents in Camden, New Jersey: Independent Broker Access for South Jersey",
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
    question: "Should I use an insurance agent for Medicare?",
    answer:
      "Yes. A licensed independent broker compares plans from multiple carriers at no cost to you. Broker commissions are paid by the insurance company, so you pay the same premium whether you use an agent or enroll directly. The advantage is side-by-side plan comparisons you won't get from a single-carrier agent.",
  },
  {
    question: "What is the best Medicare plan in New Jersey?",
    answer:
      "There is no single best plan for everyone. If you want predictable costs and freedom to see any doctor who accepts Medicare, Medigap Plan G is the most popular Supplement in NJ. If you prefer lower premiums and are okay with a provider network, a Medicare Advantage plan may fit. The right choice depends on your doctors, medications, and budget.",
  },
  {
    question: "Does Medicare have a local office in Camden?",
    answer:
      "Medicare itself does not have storefront offices. Your local Social Security office in Camden can help with enrollment in Original Medicare (Parts A and B). For plan selection - Medigap, Advantage, or Part D - you'll want to work with a licensed broker who can compare options specific to Camden County.",
  },
  {
    question: "When can I enroll in a Medigap plan in Camden, NJ?",
    answer:
      "Your Medigap Open Enrollment Period lasts 6 months, starting the month you turn 65 and are enrolled in Part B. During this window, no carrier can deny you or charge higher premiums based on health. After it closes, medical underwriting applies. That's why locking in early matters.",
  },
];

export default function MedicareInsuranceAgentsCamdenNJ() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/medicare-guides" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Medicare Insurance Agents in Camden, New Jersey
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Medicare Insurance Agents in Camden, New Jersey: Independent Broker
        Access for South Jersey
      </h1>

      <Image
        src="/images/medicare-insurance-agents-in-camden-new-jersey.webp"
        alt="medicare insurance agents in camden new jersey"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Medicare insurance agents in Camden, New Jersey don't all work the same
        way. Some represent a single carrier. Others, like me, are independent
        brokers who compare plans across every major insurer licensed in South
        Jersey.
      </p>
      <p className="text-lg mb-6">
        That difference matters when you're choosing between Medigap and
        Medicare Advantage - or trying to figure out which Part D drug plan
        actually covers your prescriptions. I'm Anthony Orner, and I help
        Camden County residents sort through this every day at no cost.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What Camden County Medicare beneficiaries should know in 2025
        </h2>
        <p className="mb-2">
          In 2026, your Part B premium is $185/month and the Part B deductible
          is $257/year. The Part A deductible jumps to $1,676 per benefit
          period. Those out-of-pocket costs add up fast without supplemental
          coverage.
        </p>
        <p>
          Camden County falls within South Jersey's competitive insurance
          market, which means you have real choices. Multiple carriers offer
          both Medigap and Advantage plans here, and premiums can vary
          significantly for the exact same coverage.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medigap vs. Medicare Advantage in the South Jersey market
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Medigap (Medicare Supplement):</strong> You keep Original
            Medicare. Plan G covers everything except the $257 Part B
            deductible. You can see any doctor in the country who accepts
            Medicare. Premiums are higher but out-of-pocket costs are
            predictable.
          </li>
          <li>
            <strong>Medicare Advantage (Part C):</strong> You use a network of
            doctors (HMO or PPO). Many plans have $0 premiums and include
            dental, vision, and hearing. Out-of-pocket maximums cap your annual
            spending, but referrals or prior authorizations may be required.
          </li>
        </ul>
        <p className="mt-3">
          Neither option is universally better. It depends on your health, your
          doctors, and how you feel about networks versus freedom of choice.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Carriers and plans available in the Camden area
        </h2>
        <p className="mb-2">
          Camden County has strong carrier competition. On the Medigap side,
          you'll find plans from Aetna, Cigna, Mutual of Omaha, and United
          American, among others. For Medicare Advantage, Aetna, Humana, and
          UnitedHealthcare all offer plans in this zip code range.
        </p>
        <p>
          Rates vary by carrier for the identical coverage. That's why working
          with an independent broker makes sense - I pull quotes from all of
          them and show you the numbers side by side.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why working with an independent broker costs you nothing
        </h2>
        <p className="mb-2">
          I get paid by the insurance company, not by you. Your premium is the
          same whether you call a carrier directly or go through me. The only
          difference is you get an unbiased comparison instead of a sales pitch
          for one company's product.
        </p>
        <p>
          I also handle annual reviews. Plans change every year, and I check
          your coverage each fall before the Medicare Advantage Open Enrollment
          period (October 15 - December 7) to make sure you're still on the
          best option.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Locking in your Medigap rate early
        </h2>
        <p className="mb-2">
          If you're turning 65 or getting Part B for the first time, your
          Medigap Open Enrollment Period is your golden window. It lasts 6
          months starting the month you're both 65+ and enrolled in Part B.
          During this time, no health questions. No denial.
        </p>
        <p>
          My practice is to have clients apply up to 6 months before their Part
          B start date. This locks in the rate early and protects you from
          premium increases before coverage begins. The sooner you lock in, the
          better your rate.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Get a free Camden-area Medicare quote in minutes
        </h2>
        <p>
          Call me at <strong>855-559-1700</strong> and I'll pull rates from
          every carrier available in Camden County. No obligation, no pressure.
          If you're within a few months of turning 65, now is the time to start
          comparing.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center my-10">
        <p className="text-xl font-bold mb-2">
          Ready to compare Camden County Medicare plans?
        </p>
        <p className="mb-4">
          Call <strong>855-559-1700</strong> for a free, no-obligation quote.
        </p>
        <Link
          href="/quote"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
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
              href="/services/medigap-plan-g-nj"
              className="text-blue-600 hover:underline"
            >
              Medigap Plan G in New Jersey: Full Breakdown
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-advantage-plans-south-jersey"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage Plans in South Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medigap-vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medigap vs. Medicare Advantage: How to Decide
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/when-to-enroll-in-medicare-nj"
              className="text-blue-600 hover:underline"
            >
              When to Enroll in Medicare in New Jersey
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}