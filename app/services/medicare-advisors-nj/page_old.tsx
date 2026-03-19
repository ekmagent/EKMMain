import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare advisors nj | Free Licensed Broker Help | MedicareYourself",
  description:
    "Medicare advisors in NJ who compare every major carrier at no cost to you. Anthony Orner offers free, unbiased plan guidance. Call 855-559-1700.",
  openGraph: {
    title:
      "medicare advisors nj | Free Licensed Broker Help | MedicareYourself",
    description:
      "Medicare advisors in NJ who compare every major carrier at no cost to you. Anthony Orner offers free, unbiased plan guidance. Call 855-559-1700.",
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
      name: "Medicare Advisors NJ",
      item: "https://medicareyourself.com/services/medicare-advisors-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Advisors in NJ: What a Licensed Broker Actually Does for You",
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
    question: "What is the New Jersey Medicare advisory?",
    answer:
      "New Jersey does not have a single official 'Medicare advisory' agency. The state operates SHIP (State Health Insurance Assistance Program), which provides free counseling. Independent licensed brokers like Anthony Orner also offer no-cost plan comparisons across all major carriers in NJ.",
  },
  {
    question:
      "Do I pay anything for a Medicare advisor's help in New Jersey?",
    answer:
      "No. Licensed Medicare brokers are paid by the insurance carriers, not by you. The plan premiums are identical whether you enroll directly or through a broker. You get expert guidance at zero additional cost.",
  },
  {
    question:
      "When should I contact a Medicare advisor before turning 65?",
    answer:
      "Reach out at least 6 months before your Part B start date. For Medigap plans especially, applying early can lock in your rate before any premium increases take effect. Your 6-month Medigap Open Enrollment starts the month you turn 65 and are enrolled in Part B.",
  },
  {
    question:
      "Can a Medicare advisor help me switch plans after open enrollment?",
    answer:
      "Yes, but your options depend on the time of year and your circumstances. Medicare Advantage Open Enrollment runs October 15 through December 7. Special Enrollment Periods apply if you have qualifying life events. A broker can identify which windows are available to you.",
  },
];

export default function MedicareAdvisorsNJ() {
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
          <span className="text-gray-700">Medicare Advisors NJ</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Medicare Advisors in NJ: What a Licensed Broker Actually Does for
          You
        </h1>

        <Image
          src="/images/medicare-advisors-nj.webp"
          alt="Medicare advisors NJ"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg mb-2">
          Medicare advisors in NJ help you compare plans across every major
          carrier without charging you a dime. The carriers pay broker
          commissions directly, so the premium you see is exactly the same
          whether you call a 1-800 number or sit across the table from
          someone like me.
        </p>
        <p className="text-lg mb-6">
          I'm Anthony Orner, a licensed Medicare broker based in New Jersey.
          Here's what working with an independent advisor actually looks
          like.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Advisor, agent, broker - which title matters and why
          </h2>
          <p className="mb-2">
            These titles get tossed around interchangeably, but there's a
            real difference. A <strong>captive agent</strong> works for one
            insurance company and can only show you their plans. An{" "}
            <strong>independent broker</strong> is contracted with multiple
            carriers and can compare options side by side.
          </p>
          <p>
            "Advisor" is a general term with no specific licensing
            requirement. What matters is whether the person helping you holds
            an active New Jersey health insurance producer license and
            carries contracts with more than one carrier. Ask before you
            share any personal information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How New Jersey's guaranteed-issue rules protect you
          </h2>
          <p className="mb-2">
            Every person turning 65 gets a 6-month Medigap Open Enrollment
            Period starting the month they are both 65 and enrolled in Part
            B. During this window, no insurance company in NJ can deny you or
            charge more based on health conditions.
          </p>
          <p>
            Outside that window, federal guaranteed-issue rights kick in for
            specific situations: losing employer coverage, your plan leaving
            your county, or your carrier going bankrupt. Rules vary, so call
            to confirm your eligibility.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Supplement and Advantage plans compared across NJ carriers
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Medicare Supplement (Medigap) Plan G:</strong> Covers
              the Part A deductible ($1,676 in 2026), Part B excess charges,
              and skilled nursing coinsurance ($209.50/day for days 21-100).
              You pay the $257 Part B deductible yourself.
            </li>
            <li>
              <strong>Medicare Advantage (Part C):</strong> Bundles Part A
              and B into one plan, often with $0 premiums, dental, vision,
              and hearing benefits. Trade-off: you use a provider network and
              face copays per service.
            </li>
            <li>
              Rates vary by carrier, zip code, age, and tobacco status. I
              run quotes from all contracted carriers in your county so you
              see the full picture.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why locking in your Medigap rate early matters
          </h2>
          <p className="mb-2">
            My practice is to have clients apply for Medigap up to 6 months
            before their Part B start date. This locks in your rate early and
            protects you from premium increases that can happen before
            coverage begins.
          </p>
          <p>
            The sooner you lock in, the better your rate. Waiting until the
            last week of your Open Enrollment Period means you might pay more
            simply because another rate increase went into effect.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What a free plan review covers
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              A side-by-side comparison of Medigap vs. Medicare Advantage for
              your specific doctors and prescriptions
            </li>
            <li>
              Part D drug plan analysis to check whether your medications are
              on a plan's formulary
            </li>
            <li>
              A review of any employer or retiree coverage you may already
              have
            </li>
            <li>
              Clear explanation of the 2026 costs: $185/month Part B
              premium, $257 annual Part B deductible, and what each
              Supplement plan covers beyond that
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Talk to Anthony Orner for a free plan review
          </h2>
          <p className="mb-2">
            I work with clients across every New Jersey county, from Bergen
            to Cape May. Whether you're turning 65 next month or
            reconsidering a plan you've had for years, I'll walk you through
            your options in plain language.
          </p>
          <p>No pressure, no cost, no obligation. That's how this works.</p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-6 text-center my-10">
          <p className="text-xl font-semibold mb-2">
            Ready to compare your Medicare options in NJ?
          </p>
          <p className="mb-4">
            Call{" "}
            <a
              href="tel:8555591700"
              className="underline font-bold text-white"
            >
              855-559-1700
            </a>{" "}
            or{" "}
            <Link
              href="/contact"
              className="underline font-bold text-white"
            >
              get a free quote online
            </Link>
            .
          </p>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/services/medicare-plan-g-nj"
                className="text-blue-600 hover:underline"
              >
                Medicare Plan G in NJ: Costs and Coverage
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-advantage-nj"
                className="text-blue-600 hover:underline"
              >
                Medicare Advantage Plans in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/guides/medigap-open-enrollment"
                className="text-blue-600 hover:underline"
              >
                Medigap Open Enrollment: When and How to Enroll
              </Link>
            </li>
            <li>
              <Link
                href="/guides/turning-65-medicare"
                className="text-blue-600 hover:underline"
              >
                Turning 65? Your Medicare Enrollment Checklist
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}