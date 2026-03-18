import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "how much does medicare supplement cost per month for seniors | Free Quote | MedicareYourself",
  description:
    "How much does Medicare Supplement cost per month for seniors? See real Plan G and Plan N rates by age from NJ and PA carriers. Free personalized quote.",
  openGraph: {
    title:
      "how much does medicare supplement cost per month for seniors | Free Quote | MedicareYourself",
    description:
      "How much does Medicare Supplement cost per month for seniors? See real Plan G and Plan N rates by age from NJ and PA carriers. Free personalized quote.",
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
      name: "How Much Does Medicare Supplement Cost Per Month for Seniors",
      item: "https://www.medicareyourself.com/services/how-much-does-medicare-supplement-cost-per-month-for-seniors",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "How Much Does Medicare Supplement Cost Per Month for Seniors? Actual Premiums by Plan and Age",
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
  datePublished: "2025-06-01",
  dateModified: "2025-06-01",
};

const faqs = [
  {
    question: "What is the average cost of a good Medicare Supplement plan?",
    answer:
      "Depending on your age, location, and carrier, Medicare Supplement premiums typically range from $90 to $350+ per month for the most popular plans (G and N). A 65-year-old in NJ will generally pay less than a 74-year-old for identical coverage because most plans use attained-age pricing.",
  },
  {
    question: "Is Plan G or Plan N cheaper per month?",
    answer:
      "Plan N premiums are usually $30 to $70 less per month than Plan G. The tradeoff: Plan N has small copays (up to $20 for office visits, up to $50 for ER visits that don't result in admission) and doesn't cover Part B excess charges. For many seniors, Plan N is a smart way to save.",
  },
  {
    question: "Do Medicare Supplement premiums go up every year?",
    answer:
      "Yes, most Medigap premiums increase annually. With attained-age rated plans, your premium rises as you get older. On top of that, carriers can apply block rate increases when claims costs rise for your pool of insureds. These two increases can stack, sometimes resulting in 10-18% jumps in a single year.",
  },
  {
    question: "When is the best time to buy a Medicare Supplement plan?",
    answer:
      "Your Medigap Open Enrollment Period, which is the 6 months starting the month you turn 65 and are enrolled in Part B, gives you guaranteed acceptance at the lowest rates. Apply up to 6 months before your Part B start date to lock in your rate without medical underwriting.",
  },
];

export default function HowMuchDoesMedicareSupplementCostPerMonthForSeniors() {
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
          How Much Does Medicare Supplement Cost Per Month for Seniors
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
        How Much Does Medicare Supplement Cost Per Month for Seniors? Actual Premiums by Plan and Age
      </h1>

      <Image
        src="/images/hub_how-much-does-medicare-supplement-cost-per-month-for-seniors.webp"
        alt="how much does medicare supplement cost per month for seniors"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        How much does Medicare Supplement cost per month for seniors depends on three things: which plan letter you choose, how old you are, and which carrier you pick. Premiums across all Medigap plans can range from roughly $32 to $628 per month, but the plans most seniors actually buy fall into a much tighter range.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        I'm Anthony Orner, a licensed Medicare broker in New Jersey. Here's what real pricing looks like right now.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Monthly cost ranges for Plan G, Plan N, and Plan F
        </h2>
        <p className="text-gray-700 mb-3">
          These three plans account for the vast majority of Medigap enrollments. Each plan letter is standardized, meaning the benefits are identical no matter which carrier sells it. The only difference between carriers is the premium.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-3">
          <li><strong>Plan G:</strong> $120 to $280/month for most seniors ages 65-78. You pay only the $283 annual Part B deductible, then Plan G covers everything else.</li>
          <li><strong>Plan N:</strong> $80 to $220/month. Lower premiums, but you'll have small copays at office and ER visits.</li>
          <li><strong>Plan F:</strong> $150 to $350/month. Only available if you were eligible for Medicare before January 1, 2020. Covers everything, including the Part B deductible.</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Factors that raise or lower your premium
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>Age:</strong> Most carriers use attained-age pricing. A 68-year-old pays less than a 74-year-old for the same plan.</li>
          <li><strong>Tobacco use:</strong> Smokers typically pay 15-25% more.</li>
          <li><strong>Location:</strong> Rates in northern NJ differ from south Jersey or eastern PA, even with the same carrier.</li>
          <li><strong>Gender:</strong> Some carriers charge different rates for men and women.</li>
          <li><strong>Household discounts:</strong> Many carriers offer 5-7% off if your spouse is also enrolled.</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Sample rates from top carriers in NJ and PA
        </h2>
        <p className="text-gray-700 mb-3">
          Rates vary by carrier, but here's the general picture for a non-smoking female on Plan G:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Age 65: roughly $120-$170/month</li>
          <li>Age 68: roughly $135-$195/month</li>
          <li>Age 74: roughly $165-$250/month</li>
          <li>Age 80+: roughly $210-$310/month</li>
        </ul>
        <p className="text-gray-700 mt-3">
          Men typically pay $10-$30 more per month. These are ballpark ranges. Your actual quote depends on carrier, zip code, and health history (outside Open Enrollment).
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why the starting premium isn't the whole story
        </h2>
        <p className="text-gray-700 mb-3">
          This is the part most people miss. A carrier that starts $20 cheaper at age 65 can be $80 more expensive by age 78. That happens when age-based increases stack on top of block rate increases from rising claims in your insured pool.
        </p>
        <p className="text-gray-700">
          Some carriers price aggressively low to attract new enrollees, then raise rates steeply. Others start slightly higher but hold steadier over time. I look at 5 to 10-year rate histories before recommending a carrier. The cheapest plan today isn't always the cheapest plan over a decade.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Locking in your best rate during open enrollment
        </h2>
        <p className="text-gray-700 mb-3">
          Your Medigap Open Enrollment Period starts the month you turn 65 and are enrolled in Part B. It lasts 6 months. During this window, no carrier can deny you or charge more because of health conditions.
        </p>
        <p className="text-gray-700">
          After that window closes, most carriers in NJ and PA can medically underwrite your application. Pre-existing conditions like Type 2 diabetes or heart disease can mean denial. Apply up to 6 months before your Part B start date so you're covered from day one.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How to get a personalized quote in under 2 minutes
        </h2>
        <p className="text-gray-700 mb-3">
          I compare rates from multiple carriers in NJ and PA side by side, including their long-term rate increase history. One quick call gives you real numbers, not website estimates.
        </p>
        <p className="text-gray-700">
          No pressure, no obligation. Just accurate pricing so you can make a confident decision.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-xl p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Get your free personalized Medigap quote
        </p>
        <p className="mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/get-a-free-quote" className="underline font-bold">
            Get a Free Quote
          </Link>{" "}
          online.
        </p>
      </div>

      <section className="mt-12">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Related resources
        </h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/services/medicare-supplement-plan-g"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plan G: What It Covers and Costs
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-supplement-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plan N: Is It Worth the Savings?
            </Link>
          </li>
          <li>
            <Link
              href="/services/medigap-open-enrollment-period"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment: Why Timing Matters
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-supplement-vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement vs. Medicare Advantage: Which Is Right for You?
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}