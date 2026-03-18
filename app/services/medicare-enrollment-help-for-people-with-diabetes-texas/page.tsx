import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare enrollment help for people with diabetes texas | Free Guidance | MedicareYourself",
  description:
    "Medicare enrollment help for people with diabetes in Texas. Learn which plans cover insulin, CGMs, and testing without underwriting hurdles. Free broker help.",
  openGraph: {
    title:
      "medicare enrollment help for people with diabetes texas | Free Guidance | MedicareYourself",
    description:
      "Medicare enrollment help for people with diabetes in Texas. Learn which plans cover insulin, CGMs, and testing without underwriting hurdles. Free broker help.",
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
      name: "Medicare Enrollment Help for People with Diabetes in Texas",
      item: "https://www.medicareyourself.com/services/medicare-enrollment-help-for-people-with-diabetes-texas",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Medicare Enrollment Help for People with Diabetes in Texas",
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
  datePublished: "2025-07-15",
  dateModified: "2025-07-15",
};

const faqs = [
  {
    question: "What's the best Medicare plan for someone with diabetes?",
    answer:
      "It depends on your medications and providers. Medicare Advantage plans often bundle insulin, CGM, and A1C testing coverage into one plan with low copays. A Medigap plan paired with a standalone Part D plan can also work well if you want broader provider access. A broker can compare both options based on your specific prescriptions.",
  },
  {
    question: "Who qualifies for free Medicare in Texas?",
    answer:
      "If you have limited income and resources, you may qualify for a Medicare Savings Program through Texas Health and Human Services. These programs can pay your Part B premium ($185/month in 2026) and may also cover deductibles and coinsurance. Call 800-252-9240 or visit hhs.texas.gov/medicare to check eligibility.",
  },
  {
    question: "What is the Medicare diabetes program?",
    answer:
      "The Medicare Diabetes Prevention Program is covered under Part B. It includes 16 weekly group sessions focused on diet, exercise, and behavior changes to help prevent type 2 diabetes. If you qualify, you pay nothing for the program. There is no limit to the number of times you can participate.",
  },
  {
    question: "Does diabetes qualify for disability in Texas?",
    answer:
      "Diabetes alone does not automatically qualify you for disability. However, if diabetes-related complications prevent you from working, you may qualify for Social Security Disability, which can lead to Medicare eligibility before age 65. A disability determination depends on your specific medical records and functional limitations.",
  },
];

export default function MedicareEnrollmentHelpDiabetesTexas() {
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
          Medicare Enrollment Help for People with Diabetes in Texas
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Medicare Enrollment Help for People with Diabetes in Texas
      </h1>

      <Image
        src="/images/medicare-enrollment-help-for-people-with-diabetes-texas.webp"
        alt="Medicare enrollment help for people with diabetes in Texas"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Medicare enrollment help for people with diabetes in Texas starts with
        understanding which plans actually cover what you need. Insulin, continuous
        glucose monitors, A1C testing, and diabetes self-management training are
        all covered under Medicare, but the details vary dramatically between
        Original Medicare, Medigap, and Medicare Advantage.
      </p>
      <p className="text-lg mb-6">
        I help Texas residents with diabetes pick the right plan and enroll during
        the right window. No cost to you.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How diabetes affects Medigap underwriting in Texas
        </h2>
        <p className="mb-2">
          Texas Medigap insurers can ask health questions outside your open
          enrollment period. Diabetes is one of the conditions that can lead to
          higher premiums or outright denial if you apply late.
        </p>
        <p className="mb-2">
          Your Medigap Open Enrollment Period lasts 6 months, starting the month
          you turn 65 and are enrolled in Part B. During this window, no carrier
          can charge you more or reject you because of diabetes. Miss it, and
          your options shrink fast.
        </p>
        <p>
          After your 6-month Medigap Open Enrollment Period, Texas insurers
          can use medical underwriting. Timing matters.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare Advantage plans that cover CGMs, insulin, and A1C testing
        </h2>
        <p className="mb-2">
          Many Texas Medicare Advantage plans include Part D drug coverage that
          covers insulin. Some plans cap insulin copays at $35/month under the
          Inflation Reduction Act. That alone can save hundreds per year.
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-2">
          <li>Continuous glucose monitors (CGMs) are covered under Part B with a doctor's order</li>
          <li>A1C testing is covered as a diabetes screening under Part B at no cost to you</li>
          <li>Diabetes self-management training is covered under Part B with a referral</li>
          <li>Blood sugar testing supplies (meters, test strips, lancets) are Part B-covered</li>
        </ul>
        <p>
          Medicare Advantage plans in Texas often bundle these benefits together with
          added perks like transportation to endocrinologist visits.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Guaranteed-issue timing that protects Texas diabetics
        </h2>
        <p className="mb-2">
          Beyond the initial 6-month Medigap Open Enrollment Period, federal
          guaranteed issue rights kick in under specific circumstances:
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-2">
          <li>You lose employer or union group health coverage</li>
          <li>Your Medicare Advantage plan leaves your service area</li>
          <li>Your insurance company goes bankrupt or violates its contract</li>
          <li>You move out of your current plan's service area</li>
        </ul>
        <p>
          If any of these apply, you can switch to a Medigap plan without health
          underwriting. For someone managing diabetes, this can be the difference
          between affordable coverage and being locked out.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          The Medicare Diabetes Prevention Program
        </h2>
        <p className="mb-2">
          Medicare Part B covers the Diabetes Prevention Program at no cost if you
          qualify. The program starts with 16 weekly group sessions over 6 months
          focused on diet, exercise, and lasting behavior changes.
        </p>
        <p>
          You can participate more than once. This program targets people at risk
          for type 2 diabetes, not those already diagnosed. Ask your doctor if
          you're eligible.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Texas resources for Medicare beneficiaries with diabetes
        </h2>
        <p className="mb-2">
          Texas Health and Human Services offers Medicare counseling through their
          HICAP program. You can call 800-252-9240 for free help understanding
          your benefits.
        </p>
        <p>
          If you have limited income, you may qualify for a Medicare Savings
          Program that pays your $185/month Part B premium and possibly your
          $257 annual Part B deductible.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Connect with a broker who understands diabetic coverage needs
        </h2>
        <p className="mb-2">
          I compare Medicare Advantage and Medigap plans side by side for Texas
          residents with diabetes every week. There is no charge for my help. The
          insurance carriers pay my commission, not you.
        </p>
        <p>
          Whether you're turning 65, losing employer coverage, or unhappy with
          your current plan during Open Enrollment (October 15 through December 7),
          I can walk you through your options in one phone call.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center mb-10">
        <p className="text-xl font-semibold mb-2">
          Ready to find the right Medicare plan for your diabetes needs?
        </p>
        <p className="text-lg mb-3">
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
          </Link>
        </p>
        <p className="text-sm text-gray-600">
          Licensed broker help at no cost to you.
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-vs-medigap"
              className="text-blue-700 hover:underline"
            >
              Medicare Advantage vs. Medigap: Which Is Right for You?
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medigap-open-enrollment-period"
              className="text-blue-700 hover:underline"
            >
              Understanding Your Medigap Open Enrollment Period
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-part-d-insulin-savings"
              className="text-blue-700 hover:underline"
            >
              Medicare Part D Insulin Savings Under the Inflation Reduction Act
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-enrollment-periods"
              className="text-blue-700 hover:underline"
            >
              Medicare Enrollment Periods Explained
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}