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
  alternates: { canonical: "https://medicareyourself.com/services/medicare-enrollment-help-for-people-with-diabetes-texas" },
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
      item: "https://medicareyourself.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Medicare Guides",
      item: "https://medicareyourself.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Medicare Enrollment Help for People with Diabetes in Texas",
      item: "https://medicareyourself.com/services/medicare-enrollment-help-for-people-with-diabetes-texas",
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
    url: "https://medicareyourself.com/about",
  },
  publisher: {
    "@type": "Organization",
    name: "EasyKind Medicare",
    alternateName: "MedicareYourself",
  },
  datePublished: "2026-03-18",
  dateModified: "2026-03-22",
};

const faqs = [
  {
    question: "Who qualifies for free Medicare in Texas?",
    answer:
      "Texans 65 and older who paid Medicare taxes for at least 10 years (40 quarters) qualify for premium-free Part A. Part B costs $202.90/month in 2026 for most people. Low-income Texans may qualify for a Medicare Savings Program through Texas Health and Human Services that pays Part B premiums and cost-sharing.",
  },
  {
    question: "What is the Medicare Diabetes Prevention Program?",
    answer:
      "Medicare Part B covers the Medicare Diabetes Prevention Program for beneficiaries at risk of type 2 diabetes. It includes 16 weekly group coaching sessions focused on diet, exercise, and lasting behavior changes. There's no cost if you qualify, and you can participate more than once.",
  },
  {
    question:
      "Does Medicare cover continuous glucose monitors (CGMs) for type 2 diabetes?",
    answer:
      "Medicare Part B covers CGMs as durable medical equipment when your doctor certifies medical necessity. You must use insulin or have a documented history of problematic blood sugar levels. Many Medicare Advantage plans in Texas also cover CGMs, sometimes with lower out-of-pocket costs than Original Medicare.",
  },
  {
    question:
      "Can I get a Medigap plan in Texas if I have diabetes?",
    answer:
      "During your 6-month Medigap Open Enrollment Period (starting the month you turn 65 and enroll in Part B), insurers cannot deny you or charge more due to diabetes. Outside that window, Texas Medigap carriers can use medical underwriting and may decline coverage or add a waiting period for pre-existing conditions like diabetes.",
  },
];

export default function MedicareEnrollmentHelpDiabetesTexas() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Medicare Enrollment Help for People with Diabetes in Texas
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Medicare Enrollment Help for People with Diabetes in Texas
      </h1>

      <Image
        src="/images/medicare-enrollment-help-for-people-with-diabetes-texas.webp"
        alt="Medicare enrollment help for people with diabetes in Texas"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        Medicare enrollment help for people with diabetes in Texas starts with one reality: the plan you pick determines whether your insulin, CGM sensors, and A1C testing cost you $20 a month or $200. That gap is real, and it hits hardest when you pick the wrong plan at the wrong time.
      </p>
      <p className="text-lg mb-6">
        If you're managing diabetes and turning 65, losing employer coverage, or switching plans during open enrollment, the decisions you make in the next few weeks affect your wallet and your health for the entire year.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How diabetes affects Medigap underwriting in Texas
        </h2>
        <p className="mb-3">
          Texas allows Medigap carriers to medically underwrite applicants outside the initial enrollment window. That means if you have type 1 or type 2 diabetes and miss your 6-month Medigap Open Enrollment Period, an insurer can deny your application or impose a waiting period for pre-existing conditions.
        </p>
        <p>
          Your Medigap OEP starts the month you turn 65 and are enrolled in Part B. During that window, no carrier in Texas can turn you down or charge you more because of diabetes. Miss it, and your options shrink fast.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare Advantage plans that cover CGMs, insulin, and A1C testing
        </h2>
        <p className="mb-3">
          Many Medicare Advantage (Part C) plans in Texas cover continuous glucose monitors, insulin, test strips, and routine A1C lab work. Some even offer $0 copays on preferred insulin through the Part D benefit built into the plan.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>CGMs like Dexcom and FreeStyle Libre are covered under Part B as durable medical equipment when medically necessary</li>
          <li>Part D insulin copays are capped at $35/month under the Inflation Reduction Act for all Medicare plans</li>
          <li>A1C testing and diabetes self-management training are covered preventive services under Part B at no cost to you</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Guaranteed-issue timing that protects Texas diabetics
        </h2>
        <p className="mb-3">
          Federal guaranteed-issue rights let you switch to a Medigap plan without medical underwriting in specific situations: your Medicare Advantage plan leaves your county, your carrier goes bankrupt, or you lose employer group coverage.
        </p>
        <p>
          If any of these apply to you, act immediately. These windows are short, typically 63 days, and once they close, Texas underwriting rules kick in. For someone with diabetes, that's the difference between guaranteed acceptance and a possible denial.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why the wrong plan costs diabetics more than anyone else
        </h2>
        <p className="mb-3">
          People without chronic conditions can survive in almost any plan. Diabetes is different. You're interacting with your coverage every single day: test strips, CGM sensors, insulin, endocrinologist visits, lab work.
        </p>
        <p>
          A plan with a high Part D deductible or narrow pharmacy network can cost you hundreds more per year. A plan that doesn't cover your specific CGM brand forces you to fight appeals or pay cash. These aren't hypothetical problems. They're what people actually deal with.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Texas-specific enrollment resources you should know about
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Texas Health and Human Services connects low-income Texans to Medicare Savings Programs that can cover Part B premiums and cost-sharing</li>
          <li>Medicare Part B covers the Diabetes Prevention Program for Texans at risk of type 2 diabetes: 16 free weekly sessions with no out-of-pocket costs</li>
          <li>The Medicare Advantage and Part D Open Enrollment runs October 15 through December 7 every year</li>
          <li>D-SNP (Dual Special Needs Plans) are available across Texas for people who qualify for both Medicare and Medicaid</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Connect with a broker who understands diabetic coverage needs
        </h2>
        <p className="mb-3">
          You shouldn't have to become an insurance expert just to keep your CGM covered. A licensed broker compares your current medications, devices, and doctors against every plan available in your Texas ZIP code. No charge to you.
        </p>
        <p>
          We'll check formulary tiers for your insulin, confirm your CGM is covered as DME, and make sure your endocrinologist is in-network. One call. Real answers.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center my-10">
        <p className="text-xl font-bold mb-2">
          Get free Medicare enrollment help for diabetes coverage in Texas
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/quote" className="underline font-bold">
            Get a Free Quote
          </Link>
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage vs. Medigap: Which Is Better for You?
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/turning-65"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment Period: What You Need to Know
            </Link>
          </li>
          <li>
            <Link
              href="/learn/medicare-parts-explained"
              className="text-blue-600 hover:underline"
            >
              Medicare Part D Insulin Costs: The $35 Cap Explained
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-enrollment-help-for-people-with-diabetes"
              className="text-blue-600 hover:underline"
            >
              Does Medicare Cover Continuous Glucose Monitors (CGMs)?
            </Link>
          </li>
                    <li>
              <Link
                href="/services/best-medicare-plan-for-chronic-conditions"
                className="text-blue-600 hover:underline"
              >
                Best Medicare Plan For Chronic Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-people-with-pre-existing-conditions"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For People With Pre Existing Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/services/you-get-a-medicare-supplement-plan-if-you-have-a-pre-existing-condition"
                className="text-blue-600 hover:underline"
              >
                You Get A Medicare Supplement Plan If You Have A Pre Existing Condition
              </Link>
            </li>
            <li>
              <Link
                href="/services/help-with-your-medicare-decision"
                className="text-blue-600 hover:underline"
              >
                Help With Your Medicare Decision
              </Link>
            </li>
</ul>
      </section>
    </main>
  );
}