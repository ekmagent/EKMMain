import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Quote and Enroll in Plan G Online | Free Instant Rates | MedicareYourself",
  description:
    "Quote and enroll in Plan G online with a licensed NJ Medicare broker. Instant rates from top carriers, same-day enrollment. Free, no-obligation service.",
  openGraph: {
    title:
      "Quote and Enroll in Plan G Online | Free Instant Rates | MedicareYourself",
    description:
      "Quote and enroll in Plan G online with a licensed NJ Medicare broker. Instant rates from top carriers, same-day enrollment. Free, no-obligation service.",
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
      name: "Quote and Enroll in Plan G Online",
      item: "https://www.medicareyourself.com/services/quote-and-enroll-in-plan-g-online",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Quote and Enroll in Plan G Online — From Rate to Coverage in One Sitting",
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
  datePublished: "2025-01-01",
  dateModified: "2025-01-01",
};

const faqs = [
  {
    question: "How much does a Plan G cost for Medicare?",
    answer:
      "Plan G premiums vary by carrier, your age, zip code, and tobacco use. In NJ, monthly rates from top carriers can range widely. The best way to find your exact rate is to request a free quote - we compare multiple carriers side by side so you see the lowest option available to you.",
  },
  {
    question: "Can I enroll in Medicare Plan G anytime?",
    answer:
      "Your best window is your 6-month Medigap Open Enrollment Period, which starts the month you turn 65 and are enrolled in Part B. During this period, no carrier can deny you or charge more due to health conditions. Outside that window, you'll typically need to pass medical underwriting unless you qualify for a federal guaranteed issue right.",
  },
  {
    question: "What does Plan G cover that Original Medicare doesn't?",
    answer:
      "Plan G covers the Part A deductible ($1,676 in 2026), Part B excess charges, skilled nursing coinsurance ($209.50/day for days 21-100), and your 20% Part B coinsurance. The only thing you pay out of pocket is the annual Part B deductible of $283. After that, Plan G picks up the rest.",
  },
  {
    question: "How long does it take to enroll in Plan G online?",
    answer:
      "Most people finish in one sitting. You'll get an instant quote, review carrier options, and complete the application - often in under 30 minutes. A licensed broker walks you through every step by phone if you want help.",
  },
];

export default function QuoteAndEnrollInPlanGOnline() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/medicare-guides" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">Quote and Enroll in Plan G Online</span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Quote and Enroll in Plan G Online — From Rate to Coverage in One Sitting
      </h1>

      <Image
        src="/images/quote-and-enroll-in-plan-g-online.webp"
        alt="Quote and enroll in Plan G online"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Quote and enroll in Plan G online without chasing down agents, waiting on callbacks, or filling out the same form three times. You pick the carrier, see your rate instantly, and finish the application - all from your kitchen table.
      </p>
      <p className="text-lg mb-6">
        I'm Anthony Orner, a licensed NJ Medicare broker. This is a free service. You pay nothing extra - carriers pay me the same commission regardless of which one you choose.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          How to get your Plan G quote in under 60 seconds
        </h2>
        <p className="mb-2">
          You need three things: your zip code, date of birth, and tobacco status. That's it.
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Enter your info on our quote tool or call 855-559-1700</li>
          <li>See rates from multiple top carriers side by side</li>
          <li>Compare monthly premiums, rate increase history, and AM Best ratings</li>
        </ul>
        <p>
          No account to create. No email required to see rates. You'll have real numbers in front of you before you finish your coffee.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          What Plan G actually covers
        </h2>
        <p className="mb-2">
          Plan G is standardized by Medicare. Every carrier offers the exact same benefits. The only difference is price and company reputation.
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Part A deductible: $1,676 per benefit period - covered</li>
          <li>Part B coinsurance (your 20% after the deductible) - covered</li>
          <li>Skilled nursing coinsurance: $209.50/day for days 21-100 - covered</li>
          <li>Part B excess charges - covered</li>
          <li>Foreign travel emergency care - covered</li>
        </ul>
        <p>
          You pay the $283 annual Part B deductible. After that, Plan G handles the rest. No networks, no referrals, no prior authorizations.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          What happens between your quote and your effective date
        </h2>
        <p className="mb-2">
          Once you pick a carrier, I help you complete the application online or by phone. During your Medigap Open Enrollment Period, approval is guaranteed - no health questions asked.
        </p>
        <p className="mb-2">
          Outside that window, most carriers require medical underwriting. I'll tell you upfront which carriers are most likely to approve your application based on your health history.
        </p>
        <p>
          Typical timeline: application submitted, approval in 1-3 weeks, ID card in the mail before your effective date. You don't have a gap in coverage.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Common mistakes that delay online enrollment
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Waiting until after Part B starts.</strong> My practice is to have clients apply up to 6 months before their Part B start date. This locks in your rate early and protects you from premium increases before coverage begins.
          </li>
          <li>
            <strong>Switching from Advantage to Supplement without checking underwriting.</strong> If you've been on a Medicare Advantage plan and want to switch to Plan G, you'll likely face health questions. People with pre-existing conditions can get denied. Don't cancel anything until you're approved.
          </li>
          <li>
            <strong>Forgetting Part D.</strong> Plan G doesn't include prescription drug coverage. You'll need a separate Part D plan, and missing your enrollment window triggers a permanent late penalty.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Why locking in your rate early matters
        </h2>
        <p className="mb-2">
          Medigap premiums are lowest when you first become eligible. Every month you wait past your open enrollment period, you risk higher rates or denial based on health.
        </p>
        <p>
          If you're turning 65 soon, the smartest move is getting your quote now - even if coverage doesn't start for a few months. The sooner you lock in, the better your rate.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Start your Plan G quote and enroll right now
        </h2>
        <p>
          Call 855-559-1700 or use the link below. I'll compare carriers, answer your questions, and walk you through enrollment if you're ready. No pressure, no cost, no obligation.
        </p>
      </section>

      <div className="mt-10 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Ready to see your Plan G rates?
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
            href="/get-a-free-quote"
            className="text-blue-700 font-bold hover:underline"
          >
            Get a Free Quote
          </Link>
        </p>
        <p className="text-sm text-gray-600">
          Licensed NJ Medicare broker. No cost to you - ever.
        </p>
      </div>

      <section className="mt-12">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-guides/medicare-plan-g-cost"
              className="text-blue-700 hover:underline"
            >
              Medicare Plan G Cost: What You'll Actually Pay in 2026
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medigap-open-enrollment-period"
              className="text-blue-700 hover:underline"
            >
              Medigap Open Enrollment Period: When and Why It Matters
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/plan-g-vs-plan-n"
              className="text-blue-700 hover:underline"
            >
              Plan G vs Plan N: Which Supplement Plan Is Right for You?
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-supplement-vs-medicare-advantage"
              className="text-blue-700 hover:underline"
            >
              Medicare Supplement vs Medicare Advantage: Real Tradeoffs
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}