import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "best medicare supplement for people on disability | Free Plan Review | MedicareYourself",
  description:
    "Best Medicare Supplement for people on disability — find out which states guarantee access under 65 and which plan letters offer the strongest value. Free help.",
  openGraph: {
    title:
      "best medicare supplement for people on disability | Free Plan Review | MedicareYourself",
    description:
      "Best Medicare Supplement for people on disability — find out which states guarantee access under 65 and which plan letters offer the strongest value. Free help.",
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
      name: "Best Medicare Supplement for People on Disability",
      item: "https://www.medicareyourself.com/services/best-medicare-supplement-for-people-on-disability",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Best Medicare Supplement for People on Disability: Plans, Pricing, and Eligibility",
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
    "https://www.medicareyourself.com/services/best-medicare-supplement-for-people-on-disability",
};

const faqs = [
  {
    question: "Can you get a Medicare Supplement if you are on disability?",
    answer:
      "Yes, but access depends on your state. Some states require insurers to sell Medigap plans to disabled Medicare beneficiaries under 65. In states without these protections, carriers can deny coverage or charge significantly higher premiums based on health status. Call us at 855-559-1700 to check your state's rules.",
  },
  {
    question: "What are the top 3 Medicare Supplement plans?",
    answer:
      "The three most popular Medigap plans nationwide are Plan G, Plan N, and Plan F (Plan F is only available if you were eligible for Medicare before January 1, 2020). Plan G offers the most comprehensive coverage for new beneficiaries, while Plan N provides a lower premium in exchange for small copays at doctor visits.",
  },
  {
    question:
      "How long do you need to be on disability to qualify for Medicare?",
    answer:
      "You need to receive Social Security Disability Insurance (SSDI) benefits for 24 consecutive months before you automatically qualify for Medicare Part A and Part B. The 24-month waiting period begins the month you first receive SSDI payments.",
  },
  {
    question:
      "Are Medigap premiums more expensive for people under 65 on disability?",
    answer:
      "In most cases, yes. Carriers that do sell to under-65 beneficiaries typically charge higher premiums than they would for a 65-year-old. The exact difference varies by state, carrier, and plan letter. We can compare quotes for your specific situation - call 855-559-1700.",
  },
];

export default function BestMedicareSupplementDisability() {
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
          Best Medicare Supplement for People on Disability
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Best Medicare Supplement for People on Disability: Plans, Pricing, and
        Eligibility
      </h1>

      <Image
        src="/images/best-medicare-supplement-for-people-on-disability.webp"
        alt="best medicare supplement for people on disability"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        The best Medicare Supplement for people on disability isn't always the
        same plan that works for a 67-year-old retiree. If you qualified for
        Medicare through SSDI after 24 months of disability benefits, you have
        Original Medicare - but your options for Medigap coverage depend heavily
        on where you live.
      </p>
      <p className="text-lg mb-6">
        I'm Anthony Orner, a licensed Medicare broker, and I help under-65
        beneficiaries find Supplement plans that actually accept them. Here's
        what you need to know.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why under-65 Medigap access depends entirely on your state
        </h2>
        <p className="mb-3">
          Federal law only guarantees Medigap open enrollment for people who are
          65 or older and enrolled in Part B. If you're under 65 on disability,
          there is no federal requirement that insurers sell you a Supplement
          plan.
        </p>
        <p>
          That means your state decides. Some states have passed laws requiring
          carriers to offer at least one Medigap plan to disabled Medicare
          beneficiaries. Others leave it entirely up to the insurance company -
          which often means denial or sky-high premiums.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          States that guarantee supplement access for disabled beneficiaries
        </h2>
        <p className="mb-3">
          Several states mandate that insurers issue Medigap policies to
          under-65 Medicare beneficiaries on disability. Examples include:
        </p>
        <ul className="list-disc pl-6 mb-3 space-y-1">
          <li>Connecticut</li>
          <li>Maine</li>
          <li>Massachusetts</li>
          <li>Minnesota</li>
          <li>New York</li>
          <li>Oregon</li>
          <li>Wisconsin</li>
        </ul>
        <p>
          Rules vary by state - some require all plan letters to be available,
          while others only mandate certain plans. Call us at 855-559-1700 so we
          can confirm exactly what applies where you live.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Plan G vs. Plan N for younger Medicare recipients on SSDI
        </h2>
        <p className="mb-3">
          For under-65 beneficiaries who can get a Medigap plan, the choice
          usually comes down to Plan G or Plan N.
        </p>
        <ul className="list-disc pl-6 mb-3 space-y-1">
          <li>
            <strong>Plan G</strong> covers everything except the Part B
            deductible ($257/year in 2026). You pay the deductible, then
            basically nothing else for Medicare-covered services.
          </li>
          <li>
            <strong>Plan N</strong> has a lower monthly premium but charges up
            to a $20 copay for office visits and up to $50 for ER visits that
            don't result in admission.
          </li>
        </ul>
        <p>
          If you see doctors frequently - common for people managing a disability
          - Plan G's predictability often wins. The premium difference between G
          and N may only be $20-$40/month, but that gap narrows fast when copays
          stack up.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How to find affordable coverage when premiums are higher under 65
        </h2>
        <p className="mb-3">
          Under-65 Medigap premiums can be 2-3 times what a 65-year-old pays for
          the same plan. That's just the reality. But there are ways to reduce
          costs:
        </p>
        <ul className="list-disc pl-6 mb-3 space-y-1">
          <li>
            Compare multiple carriers - rates vary dramatically for the same
            plan letter
          </li>
          <li>
            Ask about household or non-smoker discounts
          </li>
          <li>
            Consider Plan N if you're in good enough health to handle occasional
            copays
          </li>
          <li>
            Check your state's Medicare Savings Program (MSP), which can cover
            your Part B premium if your income qualifies
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What happens when you turn 65 on disability Medicare
        </h2>
        <p className="mb-3">
          Here's the good news. When you turn 65, you get a fresh Medigap Open
          Enrollment Period - the same six-month guaranteed-issue window everyone
          else gets. No health questions. No higher premiums based on your
          disability.
        </p>
        <p>
          If you're stuck paying a high under-65 rate now, turning 65 is your
          chance to switch to a better-priced plan. Mark it on your calendar.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why working with a broker matters for under-65 Medicare
        </h2>
        <p className="mb-3">
          This isn't a situation where you can just go online and click "enroll."
          Carriers that accept under-65 applicants change regularly. Pricing
          varies wildly. Some states have protections you might not know about.
        </p>
        <p>
          I check which carriers are writing policies for disabled beneficiaries
          in your state right now and compare them side by side. There's no cost
          to you - brokers are paid by the insurance company, not the client.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-10 text-center">
        <p className="text-xl font-semibold mb-2">
          Need help finding a Medigap plan under 65?
        </p>
        <p className="mb-4">
          Call{" "}
          <a
            href="tel:8555591700"
            className="text-blue-700 font-bold hover:underline"
          >
            855-559-1700
          </a>{" "}
          for a free plan review, or{" "}
          <Link
            href="/quote"
            className="text-blue-700 font-bold hover:underline"
          >
            get a free quote online
          </Link>
          .
        </p>
        <p className="text-sm text-gray-600">
          Anthony Orner, Licensed Medicare Broker
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/services/medicare-plan-g"
              className="text-blue-700 hover:underline"
            >
              Medicare Plan G: Full Coverage Breakdown
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-plan-n"
              className="text-blue-700 hover:underline"
            >
              Medicare Plan N: What It Covers and What It Doesn't
            </Link>
          </li>
          <li>
            <Link
              href="/services/medigap-open-enrollment"
              className="text-blue-700 hover:underline"
            >
              Medigap Open Enrollment: When and How to Sign Up
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-savings-program"
              className="text-blue-700 hover:underline"
            >
              Medicare Savings Program: Do You Qualify?
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}