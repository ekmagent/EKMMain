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
    "Medicare broker for stroke survivors needing rehab, therapy, and specialist coverage. Anthony Orner finds the right plan. Free review, no obligation.",
  openGraph: {
    title:
      "Medicare broker for stroke survivors | Free Plan Review | MedicareYourself",
    description:
      "Medicare broker for stroke survivors needing rehab, therapy, and specialist coverage. Anthony Orner finds the right plan. Free review, no obligation.",
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
      name: "Medicare Broker for Stroke Survivors",
      item: "https://www.medicareyourself.com/services/medicare-broker-for-stroke-survivors",
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
      "Nothing. Medicare brokers are paid by insurance carriers, not by you. My plan reviews, comparisons, and enrollment help are completely free. You get the same plan at the same price - I just help you find the right one.",
  },
  {
    question: "Does Medicare cover stroke victims?",
    answer:
      "Yes. Medicare Part A covers inpatient hospital stays and rehab in skilled nursing facilities. Part B covers outpatient physical therapy, occupational therapy, and speech therapy when deemed medically necessary. Part D covers prescriptions like blood thinners and statins. The challenge is making sure your specific plan covers the providers and medications you actually need.",
  },
  {
    question:
      "Can I switch from Medicare Advantage to Original Medicare after a stroke?",
    answer:
      "You can switch during Annual Enrollment (October 15 - December 7) or during the Medicare Advantage Open Enrollment Period (January 1 - March 31). In some cases, you may qualify for a Special Enrollment Period. Call me and I'll walk through your specific situation - timing matters, especially when rehab is ongoing.",
  },
  {
    question: "How long does Medicare cover rehab after a stroke?",
    answer:
      "Medicare Part A covers up to 100 days in a skilled nursing facility per benefit period - days 1-20 at no cost, days 21-100 at $209.50/day coinsurance (2026). Outpatient therapy under Part B continues as long as your doctor certifies it's medically necessary. There's no fixed time limit on outpatient therapy, but coverage can vary by plan type.",
  },
];

export default function MedicareBrokerForStrokeSurvivors() {
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
          Medicare Broker for Stroke Survivors
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Medicare Broker for Stroke Survivors — Plans That Support the Rebuilding
        Process
      </h1>

      <Image
        src="/images/hub_medicare-broker-for-stroke-survivors.webp"
        alt="Medicare broker for stroke survivors"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        A Medicare broker for stroke survivors can be the difference between a
        plan that works and one that fights you at every step. Recovery after
        stroke is hard enough without spending hours on hold trying to get
        therapy approved or figuring out why a medication isn't covered.
      </p>
      <p className="text-lg mb-6">
        I'm Anthony Orner, a licensed Medicare broker. I help stroke survivors
        and their families find plans that actually cover the care they need -
        the rehab, the specialists, the prescriptions. No cost to you.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How Medicare covers speech, physical, and occupational therapy after
          stroke
        </h2>
        <p className="mb-2">
          Medicare Part A covers inpatient rehab in hospitals and skilled nursing
          facilities. Days 1-20 in a SNF cost $0. Days 21-100 carry a $209.50/day
          coinsurance in 2026.
        </p>
        <p className="mb-2">
          Part B covers outpatient physical therapy, occupational therapy, and
          speech-language pathology when your doctor certifies it's medically
          necessary. There's no hard time limit - but your plan type affects how
          smoothly approvals go.
        </p>
        <p>
          Many families don't realize that some plans require prior
          authorization for every therapy extension. That's where the right plan
          choice saves you real headaches.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Supplement vs. Advantage: which protects stroke survivors better
        </h2>
        <p className="mb-2">
          This is the biggest question I get from stroke survivors and
          caregivers. Both paths have real tradeoffs.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-3">
          <li>
            <strong>Original Medicare + Supplement (Medigap):</strong> You can
            see any provider that accepts Medicare. No referrals or prior
            authorizations for therapy. Plan G covers the Part A deductible
            ($1,676 in 2026) and most other gaps. More provider freedom during
            long recovery.
          </li>
          <li>
            <strong>Medicare Advantage:</strong> Lower monthly premiums and an
            out-of-pocket max. But network restrictions can limit which rehab
            facilities and specialists you access. Some plans require prior
            authorization for extended therapy.
          </li>
        </ul>
        <p>
          I've seen families stuck fighting for rehab days on the wrong
          Advantage plan. I've also seen people overpaying for a Supplement they
          didn't need. The answer depends on your situation - I'll help you
          compare honestly.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Prescription coverage for blood thinners, statins, and recovery meds
        </h2>
        <p className="mb-2">
          After a stroke, you're likely on several medications - blood thinners
          like warfarin or Eliquis, statins for cholesterol, maybe blood
          pressure meds or anti-seizure drugs. These add up fast.
        </p>
        <p className="mb-2">
          Part D formularies vary by carrier. A drug that's Tier 2 on one plan
          might be Tier 4 on another, costing you hundreds more per year. I run
          your medication list through plan formularies to find the lowest
          out-of-pocket cost.
        </p>
        <p>
          Formularies also change every year. A plan that covered your meds this
          year might drop one next year. That's why an annual review matters.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          The invisible parts of recovery that insurance ignores
        </h2>
        <p className="mb-2">
          You might look fine to people around you. But the fatigue, the
          frustration when words won't come out right, the grip that isn't what
          it was - that's real. So is the anger that catches you off guard, and
          the boredom that sets in when your world gets smaller.
        </p>
        <p>
          Insurance doesn't see any of that. But your plan should at least cover
          the therapy and medications that help you rebuild. I make sure it does.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What caregivers need to know about Medicare after a stroke
        </h2>
        <p className="mb-2">
          If you're the one making calls, filling out paperwork, and researching
          plans while working full time - I get it. The system doesn't make it
          easy, and it hits hardest when you're already exhausted.
        </p>
        <p>
          You don't need to become a Medicare expert. That's my job. One call
          and I'll review what you have, flag any gaps, and tell you whether a
          change makes sense. No pressure, no sales pitch.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Request a free review from a broker who understands invisible recovery
        </h2>
        <p className="mb-2">
          I'll look at your current coverage, your doctors, your prescriptions,
          and your therapy needs. Then I'll tell you if your plan is working or
          if something better exists. Takes about 15 minutes.
        </p>
        <p>Free. No obligation. No switching unless you want to.</p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center mb-10">
        <p className="text-lg font-semibold mb-2">
          Talk to a licensed Medicare broker who helps stroke survivors every
          day.
        </p>
        <p className="text-2xl font-bold text-blue-700 mb-3">
          <a href="tel:8555591700">855-559-1700</a>
        </p>
        <Link
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
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
              href="/medicare-guides/medicare-supplement-vs-advantage"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement vs. Medicare Advantage: How to Choose
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-part-d-drug-coverage"
              className="text-blue-600 hover:underline"
            >
              Medicare Part D: How Prescription Drug Coverage Works
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-broker-for-chronic-conditions"
              className="text-blue-600 hover:underline"
            >
              Medicare Broker for Chronic Conditions
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/skilled-nursing-facility-coverage"
              className="text-blue-600 hover:underline"
            >
              Medicare Skilled Nursing Facility Coverage Explained
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}