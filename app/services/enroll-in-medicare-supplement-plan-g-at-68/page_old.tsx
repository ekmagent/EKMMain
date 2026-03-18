import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Enroll in Medicare Supplement Plan G at 68 | Free Guidance | MedicareYourself",
  description:
    "Enroll in Medicare Supplement Plan G at 68 — understand guaranteed issue rights, underwriting, and current rates. Anthony Orner guides you. Free consultation.",
  openGraph: {
    title:
      "Enroll in Medicare Supplement Plan G at 68 | Free Guidance | MedicareYourself",
    description:
      "Enroll in Medicare Supplement Plan G at 68 — understand guaranteed issue rights, underwriting, and current rates. Anthony Orner guides you. Free consultation.",
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
      item: "https://www.medicareyourself.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Enroll in Medicare Supplement Plan G at 68",
      item: "https://www.medicareyourself.com/services/enroll-in-medicare-supplement-plan-g-at-68",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Enroll in Medicare Supplement Plan G at 68: Your Options and What to Expect",
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
    question: "Can you enroll in Medicare Supplement Plan G at any time?",
    answer:
      "Not without conditions. Your federal Medigap Open Enrollment Period is a one-time, 6-month window starting when you're 65 or older and enrolled in Part B. Outside that window, carriers can require medical underwriting. Certain guaranteed issue situations - like losing employer coverage or leaving a Medicare Advantage plan - may also qualify you. At 68, your path depends on your specific circumstances.",
  },
  {
    question: "Will I be denied Plan G at 68 because of health conditions?",
    answer:
      "It's possible. Outside of guaranteed issue situations, carriers ask health questions and can decline applications based on conditions like diabetes, COPD, or recent hospitalizations. However, underwriting standards vary by carrier. Some are more lenient than others. A broker can identify which companies are most likely to approve your application.",
  },
  {
    question: "Is Plan G worth the higher premium at 68 versus a Medicare Advantage plan?",
    answer:
      "Plan G gives you freedom to see any Medicare-accepting provider nationwide with no referrals and no network restrictions. You pay the annual Part B deductible ($283 in 2026), and Plan G covers nearly everything else. Medicare Advantage plans may have $0 premiums but come with copays, prior authorizations, and network limitations. The right choice depends on your health, your doctors, and how you use care.",
  },
  {
    question: "How much does Plan G cost at age 68?",
    answer:
      "Premiums vary by carrier, location, gender, and tobacco use. At 68, you'll generally pay more than someone who enrolled at 65 because most plans are attained-age rated - meaning premiums increase as you age. The carrier you choose also matters long-term. I can pull current quotes from multiple carriers so you see actual numbers for your situation.",
  },
];

export default function EnrollInMedicareSupplementPlanGAt68() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />

      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        {" > "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>
        {" > "}
        <span className="text-gray-700">
          Enroll in Medicare Supplement Plan G at 68
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Enroll in Medicare Supplement Plan G at 68: Your Options and What to
        Expect
      </h1>

      <Image
        src="/images/enroll-in-medicare-supplement-plan-g-at-68.webp"
        alt="Enroll in Medicare Supplement Plan G at 68"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Enrolling in Medicare Supplement Plan G at 68 is absolutely doable, but
        the process looks different than it would have at 65. Your guaranteed
        issue window has likely passed, which means carriers can ask about your
        health before approving coverage.
      </p>
      <p className="text-lg mb-6">
        That doesn't mean you're out of options. It means you need a clear
        strategy and someone who knows which carriers to approach.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Guaranteed issue vs. underwriting at age 68
        </h2>
        <p className="mb-3">
          Under federal law, your Medigap Open Enrollment Period is a one-time,
          6-month window. It starts the month you turn 65 and have Part B. During
          that window, no carrier can deny you or charge more for health
          conditions.
        </p>
        <p className="mb-3">
          At 68, that window is closed unless you qualify for a guaranteed issue
          right. These kick in under specific situations:
        </p>
        <ul className="list-disc pl-6 mb-3 space-y-1">
          <li>You're losing employer or union group coverage</li>
          <li>You're leaving a Medicare Advantage plan within your first year</li>
          <li>Your current plan is ending or the carrier violated its contract</li>
          <li>You moved out of your plan's service area</li>
        </ul>
        <p>
          If none of those apply, you'll go through medical underwriting. That's
          the reality for most people enrolling at 68.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What Plan G premiums look like at 68
        </h2>
        <p className="mb-3">
          Most Medigap plans are attained-age rated. That means your premium
          goes up as you get older. At 68, you're starting three years higher
          than someone who locked in at 65.
        </p>
        <p className="mb-3">
          But age is only part of the equation. Carriers also apply block rate
          increases when claims in your pool rise. When those stack with age
          increases, you can see 10-18% jumps in a single year.
        </p>
        <p>
          The carrier you choose matters more than most people realize. Plan G
          benefits are standardized by law, so every Plan G covers the same
          things. What's not standardized is how aggressively a carrier raises
          rates over time. I track this across dozens of carriers.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Common health questions carriers ask during underwriting
        </h2>
        <p className="mb-3">
          If you're going through underwriting, expect questions about:
        </p>
        <ul className="list-disc pl-6 mb-3 space-y-1">
          <li>Current medications and dosages</li>
          <li>Hospitalizations or surgeries in the past 2-3 years</li>
          <li>
            Chronic conditions like diabetes, COPD, heart disease, or cancer
            history
          </li>
          <li>Upcoming scheduled procedures or pending test results</li>
          <li>Height and weight</li>
        </ul>
        <p>
          Every carrier weighs these differently. One might decline you for a
          condition another will accept with a standard rate. That's why working
          with a broker who knows the underwriting tendencies of each company
          saves you time and rejected applications.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why the carrier matters as much as the plan letter
        </h2>
        <p className="mb-3">
          People get fixated on finding the cheapest Plan G. That's the wrong
          target. A carrier that prices low to attract new members may hit you
          with steep increases in years two through five.
        </p>
        <p>
          You want a carrier with a stable rate history and a large, healthy
          block of policyholders. I'll show you rate trend data so you're
          choosing based on long-term cost, not just today's quote.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What Plan G actually covers in 2026
        </h2>
        <p className="mb-3">
          Plan G picks up nearly all the gaps in Original Medicare. You pay the
          annual Part B deductible ($283 in 2026). After that, Plan G covers:
        </p>
        <ul className="list-disc pl-6 mb-3 space-y-1">
          <li>Part A deductible ($1,676 per benefit period)</li>
          <li>Part B coinsurance (the 20% Medicare doesn't pay)</li>
          <li>
            Skilled nursing facility coinsurance ($209.50/day for days 21-100)
          </li>
          <li>Foreign travel emergency care</li>
          <li>Part A hospice coinsurance</li>
        </ul>
        <p>
          No networks. No referrals. Any doctor who accepts Medicare accepts your
          Plan G. That freedom is why people who've experienced Medicare
          Advantage restrictions often want to switch back.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How a broker simplifies your enrollment at 68
        </h2>
        <p className="mb-3">
          At 68, enrollment isn't as simple as picking a plan and signing up.
          You need someone who can assess your guaranteed issue rights, pre-screen
          your health history against carrier guidelines, and submit your
          application to the right company the first time.
        </p>
        <p>
          I'm Anthony Orner, a licensed Medicare broker. I work with multiple
          carriers, so I'm not pushing one company. My help costs you nothing.
          Brokers are paid by the carrier, and your premium is the same whether
          you use a broker or apply directly.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-10 text-center">
        <p className="text-xl font-semibold mb-2">
          Ready to see your Plan G options at 68?
        </p>
        <p className="mb-4">
          Call{" "}
          <a
            href="tel:8555591700"
            className="text-blue-700 font-bold hover:underline"
          >
            855-559-1700
          </a>{" "}
          for a free, no-pressure consultation.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
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
              href="/services/medicare-supplement-plan-g"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plan G: Full Benefits Guide
            </Link>
          </li>
          <li>
            <Link
              href="/services/medigap-open-enrollment-period"
              className="text-blue-600 hover:underline"
            >
              Understanding Your Medigap Open Enrollment Period
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-supplement-underwriting"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Underwriting: What to Expect
            </Link>
          </li>
          <li>
            <Link
              href="/services/plan-g-vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Plan G vs. Medicare Advantage: Honest Comparison
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}