import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Enroll in Medicare Supplement Plan G at 69 | Free Broker Guidance | MedicareYourself",
  description:
    "Enroll in Medicare Supplement Plan G at 69 with licensed broker help. Learn eligibility, underwriting steps, and how to apply. No fee, no obligation.",
  openGraph: {
    title:
      "Enroll in Medicare Supplement Plan G at 69 | Free Broker Guidance | MedicareYourself",
    description:
      "Enroll in Medicare Supplement Plan G at 69 with licensed broker help. Learn eligibility, underwriting steps, and how to apply. No fee, no obligation.",
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
      name: "Enroll in Medicare Supplement Plan G at 69",
      item: "https://medicareyourself.com/services/enroll-in-medicare-supplement-plan-g-at-69",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Enroll in Medicare Supplement Plan G at 69: Eligibility, Timing, and Next Steps",
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
    question: "Can I enroll in Plan G at 69 without health questions?",
    answer:
      "Only if you qualify for a federal guaranteed issue right - such as losing employer coverage or leaving a Medicare Advantage plan. Outside those situations, carriers will ask health questions through underwriting.",
  },
  {
    question: "How much does Plan G cost at age 69?",
    answer:
      "Rates vary by carrier, your zip code, gender, and tobacco use. At 69, you'll pay more than someone who locked in at 65, but premiums are still competitive. A licensed broker can pull real quotes for your area at no cost.",
  },
  {
    question: "What does Plan G cover that Original Medicare doesn't?",
    answer:
      "Plan G covers the Part A deductible ($1,676 per benefit period in 2026), Part B excess charges, skilled nursing coinsurance ($209.50/day for days 21-100), and your 20% Part B coinsurance. You pay only the annual Part B deductible of $283.",
  },
  {
    question: "Can I be denied Plan G at 69 for a health condition?",
    answer:
      "Yes. Outside your Medigap Open Enrollment Period or a guaranteed issue event, carriers can decline your application based on health history. Common conditions like diabetes, COPD, or heart disease may affect approval - but each carrier underwrites differently.",
  },
];

export default function EnrollPlanGAt69Page() {
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
          <Link href="/services" className="hover:underline">
            Medicare Guides
          </Link>{" "}
          &gt;{" "}
          <span className="text-gray-700">
            Enroll in Medicare Supplement Plan G at 69
          </span>
        </nav>

        <h1 className="text-3xl font-bold mb-4">
          Enroll in Medicare Supplement Plan G at 69: Eligibility, Timing, and
          Next Steps
        </h1>

        <Image
          src="/images/enroll-in-medicare-supplement-plan-g-at-69.webp"
          alt="Enroll in Medicare Supplement Plan G at 69"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg mb-2">
          Enrolling in Medicare Supplement Plan G at 69 is absolutely possible -
          but the process looks different than it did at 65. Your Medigap Open
          Enrollment Period is behind you, which means most carriers will review
          your health history before issuing a policy.
        </p>
        <p className="text-lg mb-6">
          That doesn't mean you're out of options. It means you need the right
          strategy and someone who knows which carriers are most likely to say
          yes.
        </p>

        <PhoneCTA />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            Are you guaranteed issue for Plan G at age 69?
          </h2>
          <p className="mb-3">
            Under federal law, your Medigap Open Enrollment Period is a one-time
            window: six months starting the month you're both 65 or older and
            enrolled in Part B. During that window, no carrier can deny you or
            charge more based on health.
          </p>
          <p className="mb-3">
            At 69, that window has closed. However, you may still have guaranteed
            issue rights if any of these apply:
          </p>
          <ul className="list-disc pl-6 mb-3 space-y-1">
            <li>You're losing employer or union group health coverage</li>
            <li>You're leaving a Medicare Advantage plan</li>
            <li>Your current Medigap carrier is going bankrupt or left your area</li>
            <li>Your plan violated its contract</li>
          </ul>
          <p>
            Some states offer additional protections. Rules vary by state - call
            to confirm your specific situation.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            What underwriting looks like outside open enrollment
          </h2>
          <p className="mb-3">
            If you don't have a guaranteed issue right, you'll go through medical
            underwriting. That means the carrier asks about your health history,
            medications, and recent treatments.
          </p>
          <p>
            Underwriting isn't automatic rejection. It's a review. Some carriers
            are stricter than others, and a broker who works with multiple
            companies knows which ones are more flexible for specific health
            profiles.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            Common health conditions that may affect your application
          </h2>
          <p className="mb-3">
            Carriers evaluate conditions differently. A few that commonly come up
            during underwriting at 69:
          </p>
          <ul className="list-disc pl-6 mb-3 space-y-1">
            <li>Diabetes (type and management matter)</li>
            <li>COPD or other respiratory conditions</li>
            <li>Heart disease, stents, or bypass history</li>
            <li>Cancer history (timing of treatment is a key factor)</li>
            <li>Joint replacements scheduled or recent</li>
          </ul>
          <p>
            Having one of these doesn't mean automatic denial. Each carrier draws
            its own line. That's exactly why working with an independent broker -
            not a single-company agent - matters.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            Step-by-step enrollment process with a licensed broker
          </h2>
          <ol className="list-decimal pl-6 mb-3 space-y-2">
            <li>
              We review your health history and current coverage to identify which
              carriers are most likely to approve you.
            </li>
            <li>
              We pull real quotes from multiple carriers so you can compare
              premiums - not just today's rate, but long-term pricing behavior.
            </li>
            <li>
              We submit your application to the best-fit carrier. If one declines,
              we pivot to another without starting from scratch.
            </li>
            <li>
              Once approved, your Plan G coverage begins on the effective date.
              There's no gap if we plan the timing right.
            </li>
          </ol>
          <p>This costs you nothing. Brokers are paid by the carrier, not you.</p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            Why premium behavior matters more than starting price
          </h2>
          <p className="mb-3">
            Plan G is standardized - identical benefits regardless of carrier. But
            premiums aren't. Some carriers price aggressively low to attract new
            members, then raise rates steeply year after year.
          </p>
          <p>
            At 69, you want a carrier with stable long-term rate increases, not
            the cheapest month-one premium. I help you compare pricing history so
            you're not shocked at 73 or 78.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            What Plan G leaves for you to pay
          </h2>
          <p className="mb-3">
            Plan G covers nearly everything Original Medicare doesn't - the Part A
            deductible ($1,676 in 2026), Part B coinsurance, skilled nursing
            facility coinsurance, and Part B excess charges. You're responsible
            for:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>The annual Part B deductible: $283 in 2026</li>
            <li>Your monthly Part B premium: $202.90 in 2026</li>
            <li>Your Plan G monthly premium (varies by carrier and location)</li>
          </ul>
        </section>

        <section className="mt-10 bg-blue-50 rounded-lg p-6 text-center">
          <p className="text-xl font-semibold mb-2">
            Ready to see if you can get approved?
          </p>
          <p className="mb-4">
            Call{" "}
            <a
              href="tel:8555591700"
              className="text-blue-700 font-bold hover:underline"
            >
              855-559-1700
            </a>{" "}
            for a free, no-obligation review of your options.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Get a Free Quote
          </Link>
        </section>

        <section className="mt-10">
          <FAQSection faqs={faqs} />
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/services/medicare-supplement-plan-g"
                className="text-blue-600 hover:underline"
              >
                Medicare Supplement Plan G: Full Benefits Breakdown
              </Link>
            </li>
            <li>
              <Link
                href="/services/medigap-underwriting"
                className="text-blue-600 hover:underline"
              >
                How Medigap Underwriting Works After 65
              </Link>
            </li>
            <li>
              <Link
                href="/services/plan-g-vs-plan-n"
                className="text-blue-600 hover:underline"
              >
                Plan G vs Plan N: Which Is Right for You?
              </Link>
            </li>
            <li>
              <Link
                href="/services/guaranteed-issue-medigap"
                className="text-blue-600 hover:underline"
              >
                Guaranteed Issue Rights for Medigap Plans
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}