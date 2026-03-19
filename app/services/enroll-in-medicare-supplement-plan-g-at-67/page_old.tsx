import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Enroll in Medicare Supplement Plan G at 67 | Free Rate Quote | MedicareYourself",
  description:
    "Enroll in Medicare Supplement Plan G at 67 — learn about guaranteed issue rights, underwriting, and real rates. Anthony Orner walks you through it. Free quote.",
  openGraph: {
    title:
      "Enroll in Medicare Supplement Plan G at 67 | Free Rate Quote | MedicareYourself",
    description:
      "Enroll in Medicare Supplement Plan G at 67 — learn about guaranteed issue rights, underwriting, and real rates. Anthony Orner walks you through it. Free quote.",
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
      name: "Enroll in Medicare Supplement Plan G at 67",
      item: "https://medicareyourself.com/services/enroll-in-medicare-supplement-plan-g-at-67",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Enroll in Medicare Supplement Plan G at 67: Eligibility, Rates, and Next Steps",
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
    question: "Can you enroll in Medicare Supplement Plan G at any time?",
    answer:
      "Not without conditions. Your federal Medigap Open Enrollment Period lasts 6 months starting when you're 65+ and enrolled in Part B. Outside that window, carriers can require medical underwriting. Certain guaranteed issue events - like losing employer coverage or leaving a Medicare Advantage plan - may also qualify you. At 67, underwriting is the most common path unless you have a qualifying event.",
  },
  {
    question: "Is Plan G more expensive at 67 than at 65?",
    answer:
      "Usually, yes. Most carriers use attained-age pricing, meaning your premium rises as you get older. Enrolling two years later means a higher starting rate. The difference varies by carrier and location, but waiting generally costs more per month for the life of the policy.",
  },
  {
    question: "What does Plan G cover that Original Medicare doesn't?",
    answer:
      "Plan G covers the Part A deductible ($1,676 per benefit period in 2026), Part B excess charges, skilled nursing facility coinsurance ($209.50/day for days 21-100), and your 20% Part B coinsurance. The only thing you pay out of pocket is the annual Part B deductible of $283.",
  },
  {
    question: "Do I need a broker to apply for Plan G at 67?",
    answer:
      "You don't need one, but a broker can compare rates across multiple carriers at no cost to you. Since you'll likely face underwriting at 67, a broker knows which carriers are most favorable for your health profile and can help you avoid unnecessary denials.",
  },
];

export default function EnrollInMedicareSupplementPlanGAt67() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

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
          Enroll in Medicare Supplement Plan G at 67
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Enroll in Medicare Supplement Plan G at 67: Eligibility, Rates, and Next
        Steps
      </h1>

      <Image
        src="/images/enroll-in-medicare-supplement-plan-g-at-67.webp"
        alt="Enroll in Medicare Supplement Plan G at 67"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Enrolling in Medicare Supplement Plan G at 67 is absolutely doable, but
        the rules are different than they were at 65. You've missed your federal
        Medigap Open Enrollment Period, which means most carriers will ask health
        questions before approving you.
      </p>
      <p className="text-lg mb-6">
        That doesn't mean you're out of options. It means you need to be
        strategic about how and where you apply. I'm Anthony Orner, a licensed
        Medicare broker in NJ, and I help people in exactly this situation every
        week.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Are you guaranteed issue for Plan G at age 67?
        </h2>
        <p className="mb-3">
          Under federal law, your guaranteed issue Medigap window is 6 months
          long. It starts the month you're both 65 or older and enrolled in Part
          B. At 67, that window has typically closed.
        </p>
        <p>
          However, specific events can reopen guaranteed issue rights. If you're
          losing employer or union coverage, leaving a Medicare Advantage plan,
          or your current plan is ending, you may qualify. Outside of those
          triggers, you'll go through medical underwriting.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What Plan G costs at 67 vs. enrolling earlier
        </h2>
        <p className="mb-3">
          Most Medigap carriers use attained-age rating. That means your premium
          is based on your current age. Enrolling at 67 instead of 65 means a
          higher starting premium, and that gap compounds over time.
        </p>
        <p>
          Rates vary by carrier and zip code, so there's no single number. But
          the pattern is consistent: the longer you wait, the more you pay
          monthly for identical benefits. I can pull real quotes for your area so
          you see exact numbers.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medical underwriting at 67: what carriers look for
        </h2>
        <p className="mb-3">
          Underwriting means the insurance company reviews your health history
          before deciding to accept you. Common questions include:
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>Current medications and dosages</li>
          <li>Recent hospitalizations or surgeries</li>
          <li>Chronic conditions like diabetes, COPD, or heart disease</li>
          <li>Cancer history and treatment timeline</li>
          <li>Height and weight</li>
        </ul>
        <p>
          Every carrier draws different lines. One might decline you for a
          condition another will accept. This is where working with a broker
          matters - I know which carriers are lenient on specific health
          profiles.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why the carrier matters as much as the letter
        </h2>
        <p className="mb-3">
          Plan G is standardized by the federal government. The benefits are
          identical no matter which company sells it. What's not identical is
          long-term rate behavior.
        </p>
        <p>
          Some carriers price low to attract new customers, then raise rates
          aggressively once their block of policyholders ages. When age-based
          increases and block rate increases stack together, you can see 10-18%
          jumps in a single year. I focus on carriers with stable rate histories,
          not just the cheapest first-year premium.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What Plan G actually covers for you
        </h2>
        <p className="mb-3">
          With Plan G and Original Medicare, your only annual out-of-pocket cost
          is the $283 Part B deductible (2026). After that, Plan G picks up:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Part A hospital deductible - $1,676 per benefit period</li>
          <li>Skilled nursing coinsurance - $209.50/day for days 21-100</li>
          <li>Part B coinsurance (the 20% you'd otherwise owe)</li>
          <li>Part B excess charges</li>
          <li>Foreign travel emergency care (80%)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How to apply for Plan G at 67 with a broker's help
        </h2>
        <p className="mb-3">
          Here's what the process looks like when you call me:
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>Quick health review to identify which carriers will likely approve you</li>
          <li>Side-by-side rate comparison across multiple carriers in your area</li>
          <li>Application submitted to the carrier with the best fit for your situation</li>
          <li>No cost to you - carriers pay my commission, not you</li>
        </ul>
        <p>
          The whole conversation usually takes about 15 minutes. If you qualify,
          we can have your application in the same day.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-10 text-center">
        <p className="text-lg font-semibold mb-2">
          Ready to see your Plan G rates at 67?
        </p>
        <p className="mb-4">
          Call{" "}
          <a
            href="tel:8555591700"
            className="text-blue-700 font-bold hover:underline"
          >
            855-559-1700
          </a>{" "}
          or{" "}
          <Link
            href="/contact"
            className="text-blue-700 font-bold hover:underline"
          >
            get a free quote online
          </Link>
          . No obligation. No pressure.
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/services/medicare-supplement-plan-g"
              className="text-blue-700 hover:underline"
            >
              Medicare Supplement Plan G: Full Benefits Guide
            </Link>
          </li>
          <li>
            <Link
              href="/services/medigap-open-enrollment-period"
              className="text-blue-700 hover:underline"
            >
              Understanding Your Medigap Open Enrollment Period
            </Link>
          </li>
          <li>
            <Link
              href="/services/plan-g-vs-plan-n"
              className="text-blue-700 hover:underline"
            >
              Plan G vs. Plan N: Which Is Right for You?
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-supplement-underwriting"
              className="text-blue-700 hover:underline"
            >
              Medicare Supplement Underwriting: What to Expect
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}