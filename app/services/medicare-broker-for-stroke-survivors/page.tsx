import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for stroke survivors | Free Plan Review | MedicareYourself",
  description:
    "Medicare broker for stroke survivors needing rehab, therapy, and specialist coverage. Anthony Orner finds the right plan. Free review.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-stroke-survivors" },
  openGraph: {
    title:
      "Medicare broker for stroke survivors | Free Plan Review | MedicareYourself",
    description:
      "Medicare broker for stroke survivors needing rehab, therapy, and specialist coverage. Anthony Orner finds the right plan. Free review.",
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
      name: "Medicare Broker for Stroke Survivors",
      item: "https://medicareyourself.com/services/medicare-broker-for-stroke-survivors",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Stroke Survivors — Plans That Support the Rebuilding Process",
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
  mainEntityOfPage:
    "https://medicareyourself.com/services/medicare-broker-for-stroke-survivors",
};

const faqs = [
  {
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. Medicare brokers are paid by the insurance carriers, not by you. My plan reviews, comparisons, and enrollment help are completely free to stroke survivors and their families.",
  },
  {
    question: "Do stroke victims qualify for Medicare?",
    answer:
      "If you're 65 or older, you qualify for Medicare regardless of health history. If you're under 65 and received Social Security Disability (SSDI) for 24 months after a stroke, you also qualify. Some people under 65 may qualify sooner through End-Stage Renal Disease or ALS provisions.",
  },
  {
    question:
      "Can I switch from Medicare Advantage to Original Medicare after a stroke?",
    answer:
      "Outside of the annual Open Enrollment Period (October 15 through December 7), switching options are limited. However, Medicare Advantage enrollees can switch to Original Medicare during the Medicare Advantage Open Enrollment Period from January 1 through March 31. Certain qualifying events may also trigger Special Enrollment. Call me to review your specific situation.",
  },
  {
    question: "Does Medicare cover long-term rehabilitation after a stroke?",
    answer:
      "Medicare Part A covers inpatient rehab and skilled nursing facility stays (days 1 through 20 at $0 coinsurance, days 21 through 100 at $209.50/day in 2026). Part B covers outpatient physical, speech, and occupational therapy when deemed medically necessary. Coverage is not unlimited, so the right supplemental plan matters.",
  },
];

export default function MedicareBrokerForStrokeSurvivors() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">Medicare Broker for Stroke Survivors</span>
      </nav>

      <article className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Medicare Broker for Stroke Survivors — Plans That Support the Rebuilding Process
        </h1>

        <Image
          src="/images/hub_medicare-broker-for-stroke-survivors.webp"
          alt="Medicare broker for stroke survivors"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Medicare broker for stroke survivors isn't a niche title I invented. It's what families search for when they realize the wrong plan can block the rehab their loved one desperately needs. The words that won't come out right, the hand that won't grip, the exhaustion nobody else sees because you "look fine."
        </p>
        <p className="text-lg mb-6">
          I'm Anthony Orner, a licensed Medicare broker. I help stroke survivors and their caregivers find plans that actually cover the rebuilding process.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How Medicare covers speech, physical, and occupational therapy after stroke
          </h2>
          <p className="mb-2">
            Medicare Part A covers inpatient rehab and skilled nursing facility (SNF) stays. Days 1 through 20 cost $0 in coinsurance. Days 21 through 100 cost $209.50/day in 2026. After day 100, Medicare stops paying entirely.
          </p>
          <p className="mb-2">
            Part B covers outpatient physical therapy, occupational therapy, and speech-language pathology when your doctor orders it as medically necessary. There's no fixed cap, but Medicare reviews utilization at certain dollar thresholds.
          </p>
          <p>
            The gap between what you need and what gets authorized is where the right plan makes the difference.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Supplement vs. Advantage: which protects stroke survivors better
          </h2>
          <p className="mb-2">
            This is the decision I walk families through most often. Medicare Advantage plans have out-of-pocket maximums, which sounds protective. But many Advantage plans require prior authorization for rehab days and may limit you to 10 to 14 days in a SNF before cutting coverage.
          </p>
          <p className="mb-2">
            Original Medicare with a Medigap supplement (like Plan G) lets you access any Medicare-accepting provider and covers that $209.50/day SNF coinsurance. No network restrictions. No authorization delays during the critical recovery window.
          </p>
          <p>
            For stroke survivors facing months of therapy, that flexibility can be the difference between recovering and getting stuck.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Prescription coverage for blood thinners, statins, and recovery meds
          </h2>
          <p className="mb-2">
            After a stroke, your medication list grows fast. Blood thinners like warfarin or Eliquis, statins, anti-seizure drugs, blood pressure medications. Each Part D plan has its own formulary and tier pricing.
          </p>
          <p>
            I run your actual prescriptions through plan formularies to find the Part D plan with the lowest total cost. Not the lowest premium. The lowest cost when you actually fill your medications.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why caregivers call me more than survivors do
          </h2>
          <p className="mb-2">
            Most of my calls come from an adult child or a spouse who's working full time, managing rehab schedules, and trying to decode insurance denials at midnight. They're exhausted. The system wasn't built for families in crisis.
          </p>
          <p>
            I take the insurance piece off your plate. I handle the plan comparison, the enrollment, and the follow-up.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            When you can switch plans after a stroke
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Annual Open Enrollment:</strong> October 15 through December 7. You can switch from Advantage to Original Medicare (or vice versa) and choose new Part D coverage.
            </li>
            <li>
              <strong>Medicare Advantage Open Enrollment:</strong> January 1 through March 31. Advantage enrollees can switch to Original Medicare and pick up a Part D plan.
            </li>
            <li>
              <strong>Special Enrollment Periods:</strong> Certain qualifying events (like moving, losing employer coverage, or institutional care) may open a window to change plans outside standard enrollment.
            </li>
          </ul>
          <p className="mt-2">
            Timing matters. Call me before you assume you're locked in.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Request a free review from a broker who understands invisible recovery
          </h2>
          <p className="mb-2">
            Stroke recovery doesn't follow a straight line. Some weeks feel like progress, others like starting over. Your Medicare plan should handle both without making you fight for every therapy session.
          </p>
          <p>
            I'll review your current coverage, check your prescriptions, and tell you honestly if there's a better option. No cost, no pressure, no commitment.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center mb-10">
          <p className="text-xl font-semibold mb-2">
            Talk to a Medicare broker who gets it.
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
                href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
                className="text-blue-600 hover:underline"
              >
                Medigap Plan G: What It Covers and What It Costs
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-supplement/new-jersey/vs-medicare-advantage"
                className="text-blue-600 hover:underline"
              >
                Medicare Advantage vs. Medigap: How to Decide
              </Link>
            </li>
            <li>
              <Link
                href="/learn/medicare-parts-explained"
                className="text-blue-600 hover:underline"
              >
                Part D Prescription Drug Plans Explained
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-dementia-patients"
                className="text-blue-600 hover:underline"
              >
                Medicare Help for Caregivers
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}