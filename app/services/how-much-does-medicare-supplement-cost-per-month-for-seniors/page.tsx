import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "How Much Does Medicare Supplement Cost per Month for Seniors? | Free 2026 Rate Quote | MedicareYourself",
  description:
    "How much does Medicare Supplement cost per month for seniors? See real Plan G and Plan N rates by age from NJ carriers. Get a free personalized quote today.",
  alternates: { canonical: "https://medicareyourself.com/services/how-much-does-medicare-supplement-cost-per-month-for-seniors" },
  openGraph: {
    title:
      "How Much Does Medicare Supplement Cost per Month for Seniors? | Free 2026 Rate Quote | MedicareYourself",
    description:
      "How much does Medicare Supplement cost per month for seniors? See real Plan G and Plan N rates by age from NJ carriers. Get a free personalized quote today.",
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
      name: "How Much Does Medicare Supplement Cost Per Month for Seniors",
      item: "https://medicareyourself.com/services/how-much-does-medicare-supplement-cost-per-month-for-seniors",
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
    url: "https://medicareyourself.com/about",
  },
  publisher: {
    "@type": "Organization",
    name: "EasyKind Medicare",
    alternateName: "MedicareYourself",
  },
  datePublished: "2026-03-18",
  dateModified: "2026-03-22",
};

const faqs = [
  {
    question:
      "What is the average monthly cost of a Medicare Supplement plan for a 65-year-old?",
    answer:
      "For a 65-year-old in NJ or PA, Plan G premiums typically range from $120 to $220 per month depending on the carrier, your zip code, and whether you're a tobacco user. Plan N runs roughly $80 to $160. These are starting rates; they increase over time.",
  },
  {
    question: "Why do Medicare Supplement premiums vary so much between companies?",
    answer:
      "Every lettered Medigap plan offers identical benefits regardless of which company sells it. The difference is pricing method. Some carriers use attained-age rating (premiums rise as you age), while others use issue-age or community rating. Long-term rate increase history also varies widely by carrier.",
  },
  {
    question: "Do Medicare Supplement premiums go up every year?",
    answer:
      "Yes. Premiums can increase due to age (attained-age plans), inflation, and block rate increases when claims rise across your pool of policyholders. Annual increases of 3–8% are common, though some years certain carriers push 10–18% jumps.",
  },
  {
    question: "When is the best time to buy a Medicare Supplement plan?",
    answer:
      "Your Medigap Open Enrollment Period, which is the 6 months starting when you're 65 or older AND enrolled in Part B. During this window, carriers can't charge more or deny you based on health conditions. After it closes, you may face medical underwriting.",
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
        <Link href="/services" className="hover:underline">
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
        src="/images/how-much-does-medicare-supplement-cost-per-month-for-seniors.webp"
        alt="how much does medicare supplement cost per month for seniors"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        How much does Medicare Supplement cost per month for seniors depends on your age, zip code, plan letter, and carrier. Most seniors in NJ and PA pay between $80 and $280 per month for the most popular plans.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        That range is wide because a 65-year-old on Plan N pays a very different premium than a 78-year-old on Plan G. Here's how to figure out what you'll actually pay.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Monthly cost ranges for Plan G, Plan N, and Plan F
        </h2>
        <p className="text-gray-700 mb-3">
          Premiums vary by carrier, but here are realistic ranges for NJ and PA in 2025:
        </p>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li><strong>Plan G (age 65):</strong> $120–$220/month. The most popular Medigap plan. Covers everything except the $283 annual Part B deductible.</li>
          <li><strong>Plan N (age 65):</strong> $80–$160/month. Lower premiums, but you'll pay small copays at some office and ER visits.</li>
          <li><strong>Plan F (age 65):</strong> $160–$280/month. Only available if you were eligible for Medicare before January 1, 2020. Highest coverage, highest premium.</li>
        </ul>
        <p className="text-gray-700 mt-3">
          At age 75, expect roughly 25–40% more than these starting rates depending on the carrier's rate history.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Factors that raise or lower your premium
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li><strong>Age:</strong> Attained-age rated plans increase as you get older. Issue-age plans lock your rate to the age you enrolled.</li>
          <li><strong>Tobacco use:</strong> Smokers often pay 10–25% more.</li>
          <li><strong>Zip code:</strong> Urban areas in NJ tend to be pricier than rural PA counties.</li>
          <li><strong>Household discounts:</strong> Some carriers offer 5–7% off when both spouses enroll.</li>
          <li><strong>Block rate increases:</strong> When your carrier's overall claims rise, everyone in that pool sees a hike. This is the increase most people don't see coming.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Sample rates from top carriers in NJ and PA
        </h2>
        <p className="text-gray-700 mb-3">
          I can't publish exact carrier rates here since they shift quarterly. But I can tell you this: in NJ, I regularly see a $90/month difference between the cheapest and most expensive Plan G for the same 65-year-old in the same zip code.
        </p>
        <p className="text-gray-700">
          The cheapest starting rate isn't always the best deal. Some carriers price low to attract new enrollees, then stack aggressive rate increases in years 3–5. I look at a carrier's 5- and 10-year rate history before recommending anything. Call and I'll show you the actual numbers.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why the starting premium isn't the whole story
        </h2>
        <p className="text-gray-700 mb-3">
          Most people focus entirely on what they'll pay at 65. But the real cost question is what you're paying at 72, 78, or 83.
        </p>
        <p className="text-gray-700">
          When age increases and block increases stack together, 10–18% jumps in a single year aren't unusual. A plan that starts $30/month cheaper can end up costing you thousands more over a decade. I help clients compare long-term rate behavior, not just day-one sticker prices.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          When to lock in your best rate
        </h2>
        <p className="text-gray-700 mb-3">
          Your Medigap Open Enrollment Period lasts 6 months, starting the month you turn 65 and are enrolled in Part B. During this window, no carrier can charge you more or turn you down for health conditions.
        </p>
        <p className="text-gray-700">
          If you're approaching 65, start shopping about 6 months before your Part B effective date. Miss the window and you may face medical underwriting, which can mean higher premiums or outright denial.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How to get a personalized quote in under 2 minutes
        </h2>
        <p className="text-gray-700">
          I'm Anthony Orner, a licensed Medicare broker in NJ. Give me your age, zip code, and which plan letter you're considering, and I'll pull real quotes from multiple carriers with their rate increase history. No cost, no obligation, and no pressure. Just numbers you can actually use.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-xl p-8 text-center mb-10">
        <p className="text-xl font-semibold mb-2">
          Get your free personalized Medigap quote
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/quote" className="underline font-bold">
            get a free quote online
          </Link>
        </p>
        <p className="text-sm opacity-90">
          Anthony Orner, Licensed Medicare Broker | EasyKind Medicare
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10 mb-4">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Related resources
        </h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plan G vs. Plan N: Which Saves You More?
            </Link>
          </li>
          <li>
            <Link
              href="/services/best-and-cheapest-medicare-supplement"
              className="text-blue-600 hover:underline"
            >
              Best Medicare Supplement Plans in NJ for 2025–2026
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-supplement-open-enrollment-online"
              className="text-blue-600 hover:underline"
            >
              When to Enroll in Medigap: Open Enrollment and Guaranteed Issue
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement vs. Medicare Advantage: Honest Comparison
            </Link>
          </li>
          <li>
            <Link
              href="/services/exploring-medicare-supplemental-insurance-medigap-cost"
              className="text-blue-600 hover:underline"
            >
              Exploring Medicare Supplemental Insurance (Medigap) Costs
            </Link>
          </li>
          <li>
            <Link
              href="/services/how-much-does-the-best-medicare-supplemental-insurance-cost-per-month"
              className="text-blue-600 hover:underline"
            >
              How Much Does the Best Supplemental Insurance Cost Per Month?
            </Link>
          </li>
        </ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/health-drug-plans/medigap/basics/costs" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Get Medigap Costs</a> and <a href="https://www.medicare.gov/health-drug-plans/medigap/basics/how-to-compare-policies" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — How to Compare Medigap Policies</a>.</div>
            <div className="text-sm text-gray-600 mt-4">NJ residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can compare Medigap rates and file complaints through the <a href="https://www.nj.gov/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance</a> or get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP</a>.</div>
      </section>
    </main>
  );
}