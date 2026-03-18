import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "average cost of medicare supplement insurance by age in 2026 | Free Rate Comparison | MedicareYourself",
  description:
    "Average cost of Medicare Supplement insurance by age in 2026 — actual monthly premiums from NJ carriers at 65, 70, 75+. Get a free personalized quote.",
  openGraph: {
    title:
      "average cost of medicare supplement insurance by age in 2026 | Free Rate Comparison | MedicareYourself",
    description:
      "Average cost of Medicare Supplement insurance by age in 2026 — actual monthly premiums from NJ carriers at 65, 70, 75+. Get a free personalized quote.",
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
      name: "Average Cost of Medicare Supplement Insurance by Age in 2026",
      item: "https://www.medicareyourself.com/services/average-cost-of-medicare-supplement-insurance-by-age-in-2026",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Average Cost of Medicare Supplement Insurance by Age in 2026: Real Rates from NJ Carriers",
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
    question: "How much does Medigap insurance cost in 2026?",
    answer:
      "Medigap premiums in 2026 vary by plan letter, your age, zip code, gender, and tobacco use. In New Jersey, monthly rates for Plan G typically range from around $120 at age 65 to over $300 at age 80, depending on the carrier. The only way to get your exact rate is to request a personalized quote.",
  },
  {
    question:
      "Why does my Medicare Supplement premium increase every year even if I don't use it?",
    answer:
      "Most Medigap plans use attained-age rating, meaning your premium rises as you get older. On top of that, carriers can file block rate increases when overall claims in your pool go up. These two factors can stack, leading to 10-18% jumps in a single year.",
  },
  {
    question: "When is the best time to buy a Medicare Supplement plan?",
    answer:
      "Your Medigap Open Enrollment Period gives you the strongest protections. It lasts 6 months, starting the month you turn 65 and are enrolled in Part B. During this window, carriers must accept you regardless of health and cannot charge more for pre-existing conditions.",
  },
  {
    question:
      "Is Plan G or Plan N a better value for someone over 70?",
    answer:
      "Plan G covers almost everything after the $283 Part B deductible. Plan N costs less per month but adds small copays at doctor visits and the ER. For people over 70 who see doctors frequently, Plan G often provides better overall value. For healthy, budget-conscious enrollees, Plan N can save $40-$60 monthly.",
  },
];

export default function AverageCostMedigapByAge2026() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
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
          Average Cost of Medicare Supplement Insurance by Age in 2026
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4 leading-tight">
        Average Cost of Medicare Supplement Insurance by Age in 2026: Real Rates from NJ Carriers
      </h1>

      <Image
        src="/images/hub_average-cost-of-medicare-supplement-insurance-by-age-in-2026.webp"
        alt="average cost of medicare supplement insurance by age in 2026"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        Average cost of Medicare Supplement insurance by age in 2026 is the question I hear most from people approaching their enrollment window. The honest answer: your premium depends heavily on when you buy. A 65-year-old and a 75-year-old can pay vastly different amounts for identical coverage.
      </p>
      <p className="text-lg mb-6">
        Here's what real NJ rates look like and how to use that information before your next birthday.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          What determines your Medigap premium at each age
        </h2>
        <p className="mb-2">
          Three factors drive your rate: age, zip code, and the carrier's rating method. Most NJ carriers use attained-age pricing, which means your premium goes up every year just because you're older.
        </p>
        <p>
          Then there's the block rate increase. When your carrier's pool of policyholders files more claims, everyone in that block shares the cost. Age increases plus block increases can stack together. That's how people see 10-18% jumps in a single year and feel blindsided.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          2026 monthly rates at ages 65, 70, 75, and 80
        </h2>
        <p className="mb-3">
          Rates vary by carrier, but here's a realistic range for Plan G in New Jersey based on current carrier filings:
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li><strong>Age 65:</strong> roughly $120 - $175/month</li>
          <li><strong>Age 70:</strong> roughly $155 - $220/month</li>
          <li><strong>Age 75:</strong> roughly $200 - $280/month</li>
          <li><strong>Age 80:</strong> roughly $260 - $350/month</li>
        </ul>
        <p>
          These are general ranges across multiple NJ carriers. Your actual number depends on gender, tobacco status, and household discounts. I can pull your exact rate in a few minutes.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Which plans offer the best value by age bracket
        </h2>
        <p className="mb-2">
          Plan G is the most popular Medigap plan in 2026. After you pay the $283 annual Part B deductible, it covers everything else Original Medicare doesn't. For people 65-70, Plan G hits the sweet spot of cost versus coverage.
        </p>
        <p>
          Plan N costs $40-$60 less per month but includes small copays at office visits and the ER. If you're healthy and don't visit doctors often, Plan N at age 65-70 can save you $500-$700 a year. Past 75, most clients prefer Plan G's simplicity.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          How to lock in a lower rate before your next birthday
        </h2>
        <p className="mb-2">
          Your Medigap Open Enrollment Period starts the month you turn 65 and are enrolled in Part B. It lasts 6 months. During this window, no carrier can deny you or charge extra for health conditions.
        </p>
        <p>
          Every birthday that passes means a higher starting premium. If you're planning ahead, apply up to 6 months before your Part B start date to lock in the youngest rate possible.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          The carrier matters more than the plan letter
        </h2>
        <p className="mb-2">
          Plan G is standardized. Every carrier's Plan G covers the same benefits. What's not the same: long-term premium behavior.
        </p>
        <p>
          Some carriers price low to attract enrollees, then raise rates steeply once the block ages. Others start slightly higher but hold steadier over time. I track these patterns across NJ carriers so you don't end up switching plans at 78 because your premium doubled.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Don't forget what Medicare itself costs in 2026
        </h2>
        <p className="mb-2">
          Your Medigap premium sits on top of standard Medicare costs. In 2026, Part B runs $202.90/month. The Part A deductible is $1,676 per benefit period. Skilled nursing coinsurance is $209.50/day for days 21-100.
        </p>
        <p>
          A good Medigap plan covers most or all of those gaps. That's the whole point. When you compare total out-of-pocket costs, the monthly premium usually makes sense.
        </p>
      </section>

      <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Get your exact 2026 Medigap rate in minutes
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
            href="/quote"
            className="text-blue-700 font-bold hover:underline"
          >
            Get a Free Quote
          </Link>{" "}
          online. No pressure, no sign-up required.
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
              href="/services/medicare-supplement-plan-g-nj"
              className="text-blue-700 hover:underline"
            >
              Medicare Supplement Plan G in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-supplement-plan-n-vs-plan-g"
              className="text-blue-700 hover:underline"
            >
              Plan N vs. Plan G: Which Saves You More?
            </Link>
          </li>
          <li>
            <Link
              href="/services/medigap-open-enrollment-period"
              className="text-blue-700 hover:underline"
            >
              Medigap Open Enrollment Period Explained
            </Link>
          </li>
          <li>
            <Link
              href="/services/2026-medicare-costs"
              className="text-blue-700 hover:underline"
            >
              2026 Medicare Part A and Part B Costs
            </Link>
          </li>
        </ul>
      </section>

      <p className="mt-10 text-sm text-gray-500">
        Written by Anthony Orner, Licensed Medicare Broker | EasyKind Medicare
        (MedicareYourself) | Last updated 2025
      </p>
    </main>
  );
}