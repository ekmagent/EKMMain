import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "you get a medicare supplement plan if you have a pre-existing condition | Free Expert Help | MedicareYourself",
  description:
    "You get a Medicare Supplement plan if you have a pre-existing condition when you enroll during the right window. Learn guaranteed-issue rules and avoid waiting periods.",
  openGraph: {
    title:
      "you get a medicare supplement plan if you have a pre-existing condition | Free Expert Help | MedicareYourself",
    description:
      "You get a Medicare Supplement plan if you have a pre-existing condition when you enroll during the right window. Learn guaranteed-issue rules and avoid waiting periods.",
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
      name: "Medicare Supplement with Pre-Existing Conditions",
      item: "https://medicareyourself.com/services/you-get-a-medicare-supplement-plan-if-you-have-a-pre-existing-condition",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "You Can Get a Medicare Supplement Plan If You Have a Pre-Existing Condition — Here's How",
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
  datePublished: "2025-07-14",
  dateModified: "2025-07-14",
};

const faqs = [
  {
    question:
      "Can I be denied a Medigap plan because of a pre-existing condition?",
    answer:
      "During your 6-month Medigap Open Enrollment Period (starting when you turn 65 and have Part B), no insurance company can deny you coverage or charge you more due to pre-existing conditions. Outside that window, companies in most states can use medical underwriting and may deny your application.",
  },
  {
    question:
      "What is a pre-existing condition waiting period for Medicare Supplement?",
    answer:
      "Some Medigap insurers can impose a waiting period of up to 6 months before they cover treatment for a pre-existing condition. This only applies if you had the condition treated or diagnosed in the 6 months before your Medigap policy started. Having prior creditable coverage can reduce or eliminate this waiting period.",
  },
  {
    question:
      "Do any states require insurers to sell Medigap plans year-round regardless of health?",
    answer:
      "Some states like Connecticut, Massachusetts, and New York have additional consumer protections that extend guaranteed-issue rights beyond the federal minimum. Rules vary by state, so call us at 855-559-1700 to confirm what applies where you live.",
  },
  {
    question:
      "What are federal guaranteed-issue rights for Medigap?",
    answer:
      "Federal law gives you guaranteed-issue rights in specific situations: losing employer or union coverage, losing Medicare Advantage coverage, your plan going bankrupt, moving out of your plan's service area, or your plan violating its contract. During these events, insurers cannot deny you a Medigap policy.",
  },
];

export default function PreExistingConditionMedigapPage() {
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
          <span className="text-gray-700">
            Medicare Supplement with Pre-Existing Conditions
          </span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          You Can Get a Medicare Supplement Plan If You Have a Pre-Existing
          Condition - Here's How
        </h1>

        <Image
          src="/images/you-get-a-medicare-supplement-plan-if-you-have-a-pre-existing-condition.webp"
          alt="you get a medicare supplement plan if you have a pre-existing condition"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg text-gray-700 mb-2">
          You get a Medicare Supplement plan if you have a pre-existing condition - you just need to apply during the right enrollment window. The timing matters more than your health history. Miss the protected period and insurers can use medical underwriting to deny you or charge more.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          I help clients with diabetes, heart conditions, and COPD lock in Medigap coverage every month. Here's how you can do it too.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Guaranteed-issue rights that skip medical underwriting entirely
          </h2>
          <p className="text-gray-700 mb-2">
            Your strongest protection is the 6-month Medigap Open Enrollment Period. It starts the month you turn 65 and are enrolled in Part B. During this window, no insurer can refuse to sell you any Medigap policy it offers, regardless of your health.
          </p>
          <p className="text-gray-700">
            They also cannot charge you more because of pre-existing conditions. This is federal law, and it applies in every state.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Why applying early locks in your best rate
          </h2>
          <p className="text-gray-700 mb-2">
            In my practice, I have clients apply for their Medigap plan up to 6 months before their Part B start date. This locks in the rate early and protects them from premium increases before coverage begins.
          </p>
          <p className="text-gray-700">
            The sooner you lock in, the better your rate. Waiting costs you money even if your health hasn't changed.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            What happens if you apply outside a protected enrollment period
          </h2>
          <p className="text-gray-700 mb-2">
            Outside your Open Enrollment Period, insurance companies in most states can use medical underwriting. That means they can:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-2">
            <li>Ask health questions on your application</li>
            <li>Deny coverage based on your medical history</li>
            <li>Charge higher premiums for certain conditions</li>
            <li>Impose a waiting period before covering pre-existing conditions</li>
          </ul>
          <p className="text-gray-700">
            This is why timing your enrollment is so critical. One month late can mean the difference between easy approval and a rejection letter.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Federal guaranteed-issue triggers beyond the initial period
          </h2>
          <p className="text-gray-700 mb-2">
            Federal law also provides guaranteed-issue rights in specific life events:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>You lose employer or union group health coverage</li>
            <li>You lose Medicare Advantage coverage (plan leaves your area or stops operating)</li>
            <li>Your insurance company goes bankrupt</li>
            <li>You moved out of your plan's service area</li>
            <li>Your plan violated its contract with you</li>
          </ul>
          <p className="text-gray-700 mt-2">
            During these events, insurers must accept your application without health questions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            States with extra consumer protections for pre-existing conditions
          </h2>
          <p className="text-gray-700 mb-2">
            Some states go further than federal rules. Connecticut, Massachusetts, and New York have additional protections that extend guaranteed-issue rights beyond the federal 6-month window.
          </p>
          <p className="text-gray-700">
            Rules vary by state. If you're unsure what protections apply where you live, call us at 855-559-1700 and we'll look it up together.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Pre-existing condition waiting periods: how they work and how to avoid them
          </h2>
          <p className="text-gray-700 mb-2">
            Even when you're approved for a Medigap policy, insurers can impose a waiting period of up to 6 months for pre-existing conditions. This applies to conditions that were treated or diagnosed in the 6 months before your policy started.
          </p>
          <p className="text-gray-700 mb-2">
            Here's the key: if you had prior creditable coverage (like employer insurance or Medicare Advantage) with no gap longer than 63 days, that waiting period shrinks or disappears entirely.
          </p>
          <p className="text-gray-700">
            Keep proof of your prior coverage. It can save you months of out-of-pocket costs.
          </p>
        </section>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-10 text-center">
          <p className="text-xl font-semibold text-blue-900 mb-2">
            Have a pre-existing condition? Let's find your best Medigap option.
          </p>
          <p className="text-blue-800 mb-4">
            Call{" "}
            <a
              href="tel:8555591700"
              className="font-bold underline hover:text-blue-600"
            >
              855-559-1700
            </a>{" "}
            for a free quote - no obligation.
          </p>
          <Link
            href="/quote"
            className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Get a Free Quote
          </Link>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Related resources
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/services/medicare-supplement-plan-g"
                className="text-blue-600 hover:underline"
              >
                Medicare Supplement Plan G - What It Covers and Costs
              </Link>
            </li>
            <li>
              <Link
                href="/services/medigap-open-enrollment-period"
                className="text-blue-600 hover:underline"
              >
                Medigap Open Enrollment Period - Your Best Window for Coverage
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-supplement-vs-medicare-advantage"
                className="text-blue-600 hover:underline"
              >
                Medicare Supplement vs. Medicare Advantage - Which Is Right for You?
              </Link>
            </li>
            <li>
              <Link
                href="/services/turning-65-medicare-checklist"
                className="text-blue-600 hover:underline"
              >
                Turning 65 Medicare Checklist - Steps to Enroll on Time
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}