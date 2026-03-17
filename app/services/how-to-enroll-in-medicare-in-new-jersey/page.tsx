import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "How to Enroll in Medicare in New Jersey | Step-by-Step Timeline | MedicareYourself",
  description:
    "How to enroll in Medicare in New Jersey — enrollment windows, Parts A and B sign-up, and NJ Medigap rules explained. Anthony Orner helps for free. Call today.",
  openGraph: {
    title:
      "How to Enroll in Medicare in New Jersey | Step-by-Step Timeline | MedicareYourself",
    description:
      "How to enroll in Medicare in New Jersey — enrollment windows, Parts A and B sign-up, and NJ Medigap rules explained. Anthony Orner helps for free. Call today.",
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
      item: "https://www.medicareyourself.com/hub",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "How to Enroll in Medicare in New Jersey",
      item: "https://www.medicareyourself.com/services/how-to-enroll-in-medicare-in-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Enroll in Medicare in New Jersey: A Step-by-Step Timeline",
  description:
    "How to enroll in Medicare in New Jersey — enrollment windows, Parts A and B sign-up, and NJ Medigap rules explained.",
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
    question: "What is the easiest way to enroll in Medicare?",
    answer:
      "The easiest way is to sign up online at ssa.gov. You can also call Social Security at 1-800-772-1213 or visit your local Social Security office. If you already collect Social Security benefits at least 4 months before turning 65, you'll be enrolled automatically in Parts A and B.",
  },
  {
    question: "How long does it take to get approved for Medicare in NJ?",
    answer:
      "Most Medicare applications are processed within 30 days. If you apply during your Initial Enrollment Period, your coverage start date depends on which month you sign up. Applying in the 3 months before your birthday month gives you the earliest possible start date.",
  },
  {
    question:
      "Do I have to sign up for Medicare Part B if I'm still working in New Jersey?",
    answer:
      "Not necessarily. If you have creditable employer coverage through your own job or your spouse's employer with 20+ employees, you can delay Part B without a penalty. Once that employer coverage ends, you get an 8-month Special Enrollment Period to sign up.",
  },
  {
    question: "Can I enroll in a Medigap plan anytime in New Jersey?",
    answer:
      "New Jersey guarantees year-round open enrollment for Medigap plans. Unlike most states, NJ insurers cannot deny you coverage or charge higher premiums based on health conditions, regardless of when you apply.",
  },
];

export default function HowToEnrollInMedicareInNewJersey() {
  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/hub" className="hover:underline">
            Medicare Guides
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">
            How to Enroll in Medicare in New Jersey
          </span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          How to Enroll in Medicare in New Jersey: A Step-by-Step Timeline
        </h1>

        <Image
          src="/images/hub_how-to-enroll-in-medicare-in-new-jersey.webp"
          alt="How to enroll in Medicare in New Jersey"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg text-gray-700 mb-2">
          Figuring out how to enroll in Medicare in New Jersey doesn't have to
          feel overwhelming. The process has clear deadlines and specific steps,
          and I walk NJ residents through every one of them for free.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Here's exactly what to do and when to do it.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            When your Medicare enrollment window opens and closes in NJ
          </h2>
          <p className="text-gray-700 mb-2">
            Your Initial Enrollment Period (IEP) is a 7-month window centered on
            the month you turn 65. It starts 3 months before your birthday
            month, includes your birthday month, and runs 3 months after.
          </p>
          <p className="text-gray-700">
            Miss it and you could face a late enrollment penalty of 10% per year
            added to your Part B premium for life. The 2025 Part B premium is
            $185/month, so a two-year delay means an extra $37/month permanently.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            Parts A, B, and D - what to sign up for and when
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <strong>Part A (Hospital Insurance):</strong> Free for most people
              with 40+ quarters of work history. Sign up at ssa.gov or your
              local Social Security office. The 2025 Part A deductible is $1,676
              per benefit period.
            </li>
            <li>
              <strong>Part B (Medical Insurance):</strong> Covers doctor visits
              and outpatient care at $185/month in 2025, with a $257 annual
              deductible. You sign up for this through Social Security too.
            </li>
            <li>
              <strong>Part D (Prescription Drugs):</strong> You enroll in Part D
              through a private insurance carrier. This happens after Parts A
              and B are active.
            </li>
          </ul>
          <p className="text-gray-700 mt-2">
            If you're already collecting Social Security at least 4 months
            before turning 65, you'll be enrolled in Parts A and B
            automatically. You'll get your red, white, and blue Medicare card in
            the mail.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            How to sign up if you're still working
          </h2>
          <p className="text-gray-700 mb-2">
            If you have creditable employer coverage from a company with 20 or
            more employees, you can delay Parts B and D without penalty. Many of
            my NJ clients are in this exact situation.
          </p>
          <p className="text-gray-700">
            Once that employer coverage ends, you get an 8-month Special
            Enrollment Period. Don't wait until the last month. File early so
            there's no gap in coverage.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            NJ-specific rules that affect your Medigap enrollment rights
          </h2>
          <p className="text-gray-700 mb-2">
            This is where New Jersey stands out. NJ law requires insurers to
            offer Medigap plans on a guaranteed-issue basis year-round. That
            means no health questions and no denial of coverage, no matter when
            you apply.
          </p>
          <p className="text-gray-700">
            Most states only give you 6 months of guaranteed issue when you
            first enroll in Part B. In NJ, you can switch Medigap plans later
            without worrying about medical underwriting. It's one of the
            strongest consumer protections in the country.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            The three ways to submit your enrollment
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <strong>Online:</strong> Apply at ssa.gov. This is the fastest
              option and available 24/7.
            </li>
            <li>
              <strong>By phone:</strong> Call Social Security at 1-800-772-1213
              (TTY 1-800-325-0778).
            </li>
            <li>
              <strong>In person:</strong> Visit your local Social Security
              office. There are locations across New Jersey in Newark, Trenton,
              Cherry Hill, and beyond.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            How a local broker walks you through every form for free
          </h2>
          <p className="text-gray-700 mb-2">
            I'm Anthony Orner, a licensed Medicare broker based in New Jersey.
            My service costs you nothing - I'm paid by the insurance carriers,
            not by you. Your premiums are exactly the same whether you use a
            broker or go direct.
          </p>
          <p className="text-gray-700">
            I help you pick between Original Medicare and Medicare Advantage,
            choose the right Medigap plan, and handle the paperwork. One call
            and you'll know exactly where you stand.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center mb-10">
          <p className="text-xl font-semibold mb-2">
            Ready to enroll? Let's get it done right.
          </p>
          <p className="mb-4">
            Call{" "}
            <a href="tel:8555591700" className="underline font-bold">
              855-559-1700
            </a>{" "}
            or{" "}
            <Link href="/quote" className="underline font-bold">
              Get a Free Quote
            </Link>
          </p>
          <p className="text-sm opacity-90">
            No cost. No pressure. Just honest Medicare help from a local NJ
            broker.
          </p>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Related resources
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/services/medicare-plan-g-nj"
                className="text-blue-600 hover:underline"
              >
                Medicare Plan G in New Jersey - Compare Rates from Top Carriers
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-supplement-plans-nj"
                className="text-blue-600 hover:underline"
              >
                Medicare Supplement Plans in NJ - Full Comparison Guide
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-part-b-cost"
                className="text-blue-600 hover:underline"
              >
                Medicare Part B Cost in 2025 - What You'll Actually Pay
              </Link>
            </li>
            <li>
              <Link
                href="/services/medigap-open-enrollment-nj"
                className="text-blue-600 hover:underline"
              >
                Medigap Open Enrollment in NJ - Your Guaranteed Issue Rights
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}