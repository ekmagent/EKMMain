import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare broker for people on disability | Free Guidance | MedicareYourself",
  description:
    "Medicare broker for people on disability — Anthony Orner helps under-65 SSDI recipients in NJ find Medigap or Advantage coverage. Free consultation available.",
  openGraph: {
    title:
      "medicare broker for people on disability | Free Guidance | MedicareYourself",
    description:
      "Medicare broker for people on disability — Anthony Orner helps under-65 SSDI recipients in NJ find Medigap or Advantage coverage. Free consultation available.",
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
      name: "Medicare Broker for People on Disability",
      item: "https://www.medicareyourself.com/services/medicare-broker-for-people-on-disability",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for People on Disability: Navigating Under-65 Enrollment in NJ",
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
  datePublished: "2025-07-01",
  dateModified: "2025-07-01",
};

const faqs = [
  {
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. A licensed Medicare broker like Anthony Orner is paid by the insurance carriers, not by you. You get the same plan at the same price whether you use a broker or go direct. The difference is you get someone who can compare multiple options on your behalf.",
  },
  {
    question: "What does Medicare cover for people with disabilities?",
    answer:
      "Medicare for disability recipients includes Part A (hospital coverage) and Part B (doctor visits, outpatient care, preventive services). You can also add Part D for prescription drugs or choose a Medicare Advantage plan that bundles all of these together. The benefits are the same as what a 65-year-old receives.",
  },
  {
    question:
      "When does Medicare start after qualifying for SSDI?",
    answer:
      "Medicare coverage typically begins after you have received Social Security Disability Insurance (SSDI) benefits for 24 months. There are exceptions for ALS (Lou Gehrig's disease) and End-Stage Renal Disease, where coverage can start sooner. Your Part A and Part B will usually begin automatically at the 25th month.",
  },
  {
    question:
      "Can someone under 65 on disability get a Medigap plan in New Jersey?",
    answer:
      "Yes, but availability and pricing vary. Federal law does not require insurance companies to sell Medigap plans to people under 65, but some states including New Jersey have their own rules. The options are more limited than what a 65-year-old would see, and premiums may be higher. Call Anthony at 855-559-1700 to find out exactly what is available to you.",
  },
];

export default function MedicareBrokerForPeopleOnDisability() {
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
          Medicare Broker for People on Disability
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Medicare Broker for People on Disability: Navigating Under-65 Enrollment in NJ
      </h1>

      <Image
        src="/images/medicare-broker-for-people-on-disability.webp"
        alt="medicare broker for people on disability"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        A Medicare broker for people on disability can save you hours of confusion and potentially thousands of dollars. If you are under 65 and receiving SSDI in New Jersey, your enrollment rules, plan options, and timelines look different from the standard turning-65 crowd.
      </p>
      <p className="text-lg mb-6">
        I am Anthony Orner, a licensed Medicare broker based in NJ. I work with under-65 disability recipients every week, and my help costs you nothing.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How Medicare works when you qualify through SSDI
        </h2>
        <p className="mb-2">
          After receiving SSDI benefits for 24 consecutive months, you automatically qualify for Medicare Parts A and B. Your coverage starts the 25th month. Two exceptions skip that waiting period: ALS (coverage begins the month your SSDI starts) and End-Stage Renal Disease.
        </p>
        <p>
          Once enrolled, you pay the same $185/month Part B premium as everyone else. Part A is typically premium-free if you or your spouse paid Medicare taxes for at least 10 years. You also face the same $257 annual Part B deductible and $1,676 Part A deductible per benefit period.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medigap options for under-65 disability beneficiaries in New Jersey
        </h2>
        <p className="mb-2">
          Here is where things get tricky. Federal law guarantees Medigap open enrollment for people turning 65, but it does not require insurers to sell Medigap to those under 65. Some NJ carriers do offer policies to disability recipients, but the selection is narrower and premiums run higher.
        </p>
        <p>
          Not every carrier participates. That is exactly why having a broker matters. I can quickly tell you which companies are writing under-65 policies in your zip code right now, and what they charge.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare Advantage vs. supplement plans for disability enrollees
        </h2>
        <p className="mb-2">
          You have two main paths. A Medicare Supplement (Medigap) plan pairs with Original Medicare and covers gaps like the Part A deductible and the 20% Part B coinsurance. A Medicare Advantage plan replaces Original Medicare and often bundles prescription drug coverage, dental, and vision into one plan.
        </p>
        <ul className="list-disc pl-6 mb-2 space-y-1">
          <li>Medigap typically means higher monthly premiums but lower out-of-pocket costs when you need care.</li>
          <li>Medicare Advantage often has $0 or low premiums but uses provider networks and copays.</li>
          <li>If you see specialists frequently, a Medigap plan like Plan G may give you more flexibility.</li>
        </ul>
        <p>
          The right choice depends on your doctors, medications, and budget. I will walk through the math with you for free.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why enrollment timing matters more for disability recipients
        </h2>
        <p className="mb-2">
          When you turn 65, you get a clear 6-month Medigap open enrollment window with guaranteed issue. Under 65, that protection may not apply the same way. Missing your enrollment window can mean higher premiums or even denial based on health questions.
        </p>
        <p>
          I have seen people wait a few months and lose access to a plan they qualified for earlier. Do not let that happen.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What a broker does that Medicare.gov cannot
        </h2>
        <p className="mb-2">
          Medicare.gov is a solid resource for general information. But it cannot tell you which carriers in your NJ county are actually accepting under-65 applicants this month. It cannot compare three Medigap quotes side by side on a phone call.
        </p>
        <p>
          I can. And I do not charge for it. Insurance companies pay me the same commission whether you find them yourself or I help you. So there is zero downside to calling.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Get free help choosing the right plan before your window closes
        </h2>
        <p className="mb-2">
          If you are on SSDI and approaching your 25th month, or if you already have Medicare and want to review your options, call me at 855-559-1700. I will check what is available in your area, compare costs, and give you a straight answer.
        </p>
        <p>
          No pressure. No obligation. Just clear information from a licensed NJ broker who does this every day.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-8 text-center my-10">
        <p className="text-2xl font-bold mb-2">
          Ready to Compare Your Options?
        </p>
        <p className="text-lg mb-4">
          Call Anthony Orner at{" "}
          <a href="tel:8555591700" className="underline font-semibold">
            855-559-1700
          </a>{" "}
          for a free, no-obligation consultation.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
        >
          Get a Free Quote
        </Link>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-guides/medicare-supplement-plans-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plans in NJ: Your Complete Guide
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-vs-medigap"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage vs. Medigap: How to Decide
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medigap-plan-g-nj"
              className="text-blue-600 hover:underline"
            >
              Medigap Plan G in New Jersey: Benefits and Costs
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-broker-nj"
              className="text-blue-600 hover:underline"
            >
              Why Work with a Medicare Broker in NJ
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}