import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare Supplement Plan G Cost for 70 Year Old | Free Rate Lookup | MedicareYourself",
  description:
    "Medicare Supplement Plan G cost for 70-year-olds varies by carrier, state, and pricing model. Compare real premiums and get a free quote from Anthony Orner.",
  openGraph: {
    title:
      "Medicare Supplement Plan G Cost for 70 Year Old | Free Rate Lookup | MedicareYourself",
    description:
      "Medicare Supplement Plan G cost for 70-year-olds varies by carrier, state, and pricing model. Compare real premiums and get a free quote from Anthony Orner.",
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
      name: "Medicare Supplement Plan G Cost for 70 Year Old",
      item: "https://medicareyourself.com/services/medicare-supplement-plan-g-cost-for-70-year-old",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Supplement Plan G Cost for 70-Year-Olds: Real Premiums From Top Carriers",
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
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
};

const faqs = [
  {
    question: "What is the average Plan G cost for a 70-year-old?",
    answer:
      "Plan G premiums for a 70-year-old typically range from about $150 to $300+ per month depending on your state, carrier, gender, and whether you use tobacco. Rates vary significantly - the only way to know your exact premium is to get quotes from multiple carriers.",
  },
  {
    question: "Why is Plan G more expensive at 70 than at 65?",
    answer:
      "Most carriers use attained-age pricing, which means your premium increases as you get older. At 70, you're five years past the lowest entry point. You've also missed your Medigap Open Enrollment Period, so carriers can factor in your health history during underwriting.",
  },
  {
    question: "Can I switch Plan G carriers at 70 to get a lower rate?",
    answer:
      "Yes, you can apply to switch carriers at any time. However, outside of guaranteed issue situations, you'll need to pass medical underwriting. If you're in good health, switching to a lower-cost carrier can save you hundreds per year on the same exact coverage.",
  },
  {
    question: "What does Plan G cover that Original Medicare doesn't?",
    answer:
      "Plan G covers the Part A deductible ($1,676 in 2026), Part B coinsurance (20% of approved charges), skilled nursing facility coinsurance ($209.50/day for days 21-100), and Part B excess charges. Your only remaining cost is the annual Part B deductible of $283.",
  },
];

export default function MedicareSupplementPlanGCostFor70YearOld() {
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
          Medicare Supplement Plan G Cost for 70 Year Old
        </span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
        Medicare Supplement Plan G Cost for 70-Year-Olds: Real Premiums From Top
        Carriers
      </h1>

      <Image
        src="/images/medicare-supplement-plan-g-cost-for-70-year-old.webp"
        alt="Medicare Supplement Plan G cost for 70 year old"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg text-gray-700 mb-2">
        Medicare Supplement Plan G cost for a 70-year-old runs roughly $150 to
        $300+ per month, but that range hides a lot. Your actual rate depends on
        where you live, which carrier you choose, and how that carrier prices
        their plans over time.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        At 70, you're past your initial Medigap Open Enrollment window - so
        understanding what drives your premium matters more than ever.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Average monthly Plan G premiums at age 70 in 2025
        </h2>
        <p className="text-gray-700 mb-3">
          Nationally, Plan G premiums for 70-year-olds cluster between $160 and
          $280 per month for non-tobacco users. Women generally pay slightly less
          than men. State matters a lot - the same carrier might charge $170 in
          one state and $250 in another.
        </p>
        <p className="text-gray-700">
          The only reliable way to know your rate is to pull quotes from multiple
          carriers for your specific zip code, age, and health profile. I do
          this daily - call and I'll run them for you in about 10 minutes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How attained-age pricing affects your rate at 70
        </h2>
        <p className="text-gray-700 mb-3">
          Most carriers use attained-age pricing. That means your premium goes
          up every year simply because you're a year older. At 65, Plan G might
          cost $120. By 70, it's $180. By 78, it could be $260+.
        </p>
        <p className="text-gray-700">
          On top of age increases, carriers file rate increases when claims costs
          rise within their insured pool. When both stack in the same year, you
          might see a 10-18% jump. This is why choosing the right carrier
          matters as much as choosing the right plan letter.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Carrier comparison: who offers the best long-term value
        </h2>
        <p className="text-gray-700 mb-3">
          Plan G is standardized. Every carrier's Plan G covers the same
          benefits. The difference is how they price it now and how they raise it
          later.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            Some carriers price low to attract new enrollees, then raise rates
            aggressively once the pool ages.
          </li>
          <li>
            Others start slightly higher but have a track record of moderate,
            predictable increases over time.
          </li>
          <li>
            The cheapest plan today isn't always the cheapest plan five years
            from now.
          </li>
        </ul>
        <p className="text-gray-700 mt-3">
          I track rate history across carriers so I can show you who's been
          stable - not just who's cheapest right now.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Ways to reduce your Plan G premium without losing coverage
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <strong>Shop carriers annually.</strong> If you're in good health,
            you can apply to switch. Same coverage, potentially lower rate.
          </li>
          <li>
            <strong>Ask about household discounts.</strong> Many carriers offer
            5-7% off if you live with another adult, even if they're not on the
            same plan.
          </li>
          <li>
            <strong>Consider payment mode discounts.</strong> Paying annually or
            using bank draft instead of monthly billing can save 2-5%.
          </li>
          <li>
            <strong>Check for non-tobacco rates.</strong> If you haven't used
            tobacco in 12+ months, make sure you're not being charged tobacco
            rates.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What Plan G leaves you responsible for in 2026
        </h2>
        <p className="text-gray-700 mb-3">
          Plan G covers everything except the annual Part B deductible. In 2026,
          that's $283. After that, Plan G picks up 100% of Medicare-approved
          charges - including the Part A deductible ($1,676 per benefit period),
          skilled nursing coinsurance, and Part B excess charges.
        </p>
        <p className="text-gray-700">
          That $283 deductible is the only out-of-pocket medical cost you'll
          face all year. No copays, no surprise bills, no network restrictions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Switching from Medicare Advantage to Plan G at 70
        </h2>
        <p className="text-gray-700 mb-3">
          Some people at 70 are coming off a Medicare Advantage plan and want
          the freedom of Plan G. This is possible, but outside of certain
          guaranteed issue situations, you'll face medical underwriting. Health
          conditions like diabetes or heart disease can make approval harder -
          or impossible with some carriers.
        </p>
        <p className="text-gray-700">
          If you're thinking about this switch, don't wait. The healthier you
          are when you apply, the more options you have. I can tell you upfront
          which carriers are most likely to approve your application.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-10 text-center">
        <p className="text-xl font-semibold text-blue-900 mb-2">
          Get your actual Plan G rate in minutes
        </p>
        <p className="text-gray-700 mb-4">
          I'll compare carriers for your age, zip code, and health profile. No
          cost, no obligation.
        </p>
        <p className="text-2xl font-bold text-blue-800 mb-3">
          <a href="tel:855-559-1700" className="hover:underline">
            855-559-1700
          </a>
        </p>
        <Link
          href="/get-a-free-quote"
          className="inline-block bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition"
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
              className="text-blue-700 hover:underline"
            >
              Medicare Supplement Plan G: Full Coverage Breakdown
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-supplement-plan-n-vs-plan-g"
              className="text-blue-700 hover:underline"
            >
              Plan N vs Plan G: Which Saves You More?
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-supplement-rates-by-age"
              className="text-blue-700 hover:underline"
            >
              Medicare Supplement Rates by Age: What to Expect
            </Link>
          </li>
          <li>
            <Link
              href="/services/switching-from-medicare-advantage-to-medigap"
              className="text-blue-700 hover:underline"
            >
              Switching From Medicare Advantage to Medigap
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}