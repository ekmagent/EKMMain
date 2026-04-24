import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "average cost of supplemental health insurance for seniors with medicare | Free Broker Comparison | MedicareYourself",
  description:
    "Compare average Medigap costs for seniors on Medicare by age, state, and carrier. Get a free broker comparison — call 855-559-1700 to find your lowest rate.",
  alternates: { canonical: "https://medicareyourself.com/services/average-cost-of-supplemental-health-insurance-for-seniors-with-medicare" },
  openGraph: {
    title:
      "average cost of supplemental health insurance for seniors with medicare | Free Broker Comparison | MedicareYourself",
    description:
      "Average cost of supplemental health insurance for seniors with Medicare runs $90–$300+/month. See 2025–2026 rates by plan, age, and state. Free comparison.",
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
      name: "Average Cost of Supplemental Health Insurance for Seniors With Medicare",
      item: "https://medicareyourself.com/services/average-cost-of-supplemental-health-insurance-for-seniors-with-medicare",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Average Cost of Supplemental Health Insurance for Seniors With Medicare: What the Data Shows",
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
      "What is the average monthly cost of a Medigap plan for a 65-year-old?",
    answer:
      "For a 65-year-old enrolling during their Medigap Open Enrollment Period, Plan G typically runs $120–$200/month depending on carrier, state, gender, and tobacco status. Plan N usually costs $90–$160/month. Rates vary significantly by insurance company for the exact same coverage, so comparing carriers is essential.",
  },
  {
    question:
      "Why do Medigap premiums vary so much between insurance companies?",
    answer:
      "Every lettered Medigap plan offers identical benefits regardless of which company sells it. The difference is pricing method: community-rated, issue-age-rated, or attained-age-rated. Companies also set their own profit margins and have different claims experiences. Two carriers selling Plan G in the same zip code can differ by $50+/month.",
  },
  {
    question:
      "Is Medicare Advantage cheaper than Medigap supplemental insurance?",
    answer:
      "Medicare Advantage plans often have $0 premiums, making them look cheaper upfront. But they use copays, coinsurance, and network restrictions that can add up if you need care. Medigap has a monthly premium but covers most or all of your out-of-pocket costs with Original Medicare. Total annual spending depends on how much healthcare you actually use.",
  },
  {
    question:
      "When is the best time to buy supplemental insurance to get the lowest rate?",
    answer:
      "Your 6-month Medigap Open Enrollment Period, which starts the month you turn 65 and are enrolled in Part B, gives you guaranteed acceptance at the lowest available rate. Apply during this window and carriers can't charge more for pre-existing conditions or deny you coverage.",
  },
  {
    question: "Do Medigap premiums increase as I get older?",
    answer:
      "It depends on how the carrier prices the policy. Attained-age-rated plans increase as you age, issue-age-rated plans are based on your age at purchase, and community-rated plans charge everyone in an area the same regardless of age. All three pricing methods can also see increases over time due to inflation and claims costs.",
  },
  {
    question: "Does where I live affect what I pay for supplemental insurance?",
    answer:
      "Yes. Medigap premiums vary significantly by state and even by zip code within a state because carriers price based on local healthcare costs and claims experience. The same lettered plan from the same company can cost very different amounts in different regions.",
  },
  {
    question: "Can a broker help me find the lowest-cost supplemental plan?",
    answer:
      "Yes. A licensed independent broker can compare identical lettered plans across multiple carriers in your zip code, since benefits are standardized and price is the main difference. Call 855-559-1700 to compare rates at no cost to you.",
  }
,
  {
    question: "Does where I live affect how much I pay for Medigap?",
    answer:
      "Yes. Medigap premiums vary widely based on your state, zip code, and local claims experience. The same lettered plan with identical benefits can cost substantially more in one state than another. Comparing carriers licensed in your specific area is the only way to find the best available rate.",
  },
  {
    question: "What's the difference between community-rated, issue-age, and attained-age pricing?",
    answer:
      "Community-rated plans charge everyone the same premium regardless of age. Issue-age plans base your premium on your age when you first bought the policy and don't increase with age. Attained-age plans start lower but rise as you get older, which can make them more expensive long-term even if they look cheaper at first.",
  },
  {
    question: "Do I pay the Part B premium in addition to my Medigap plan?",
    answer:
      "Yes. Medigap supplements Original Medicare, so you must remain enrolled in Medicare Part B and continue paying the standard Part B premium. Your Medigap premium is separate and paid directly to the private insurance carrier that issued your policy.",
  }
,
  {
    question: "Does where I live affect how much I pay for supplemental insurance?",
    answer:
      "Yes. Medigap premiums vary widely by state and even by zip code within the same state. Carriers factor in local claims experience, state rating rules, and regional healthcare costs when setting prices. The same lettered plan with identical benefits can cost noticeably more or less depending on your location.",
  },
  {
    question: "Will my Medigap premium go up as I get older?",
    answer:
      "It depends on how your plan is priced. Attained-age policies increase as you age, issue-age policies are based on your age at enrollment but can still rise with inflation, and community-rated policies charge everyone the same regardless of age. All three types can adjust annually for inflation and claims costs.",
  },
  {
    question: "How can a licensed broker help me find the lowest Medigap premium?",
    answer:
      "Because every carrier sells the same lettered benefits but prices differ, a broker can compare multiple companies in your zip code side by side. This helps you avoid overpaying for identical coverage. Call 855-559-1700 to get a free comparison from Anthony Orner, a licensed Medicare broker.",
  }
];

export default function AverageCostSupplementalInsurancePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        {" > "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>
        {" > "}
        <span className="text-gray-700">
          Average Cost of Supplemental Health Insurance for Seniors With Medicare
        </span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
        Average Cost of Supplemental Health Insurance for Seniors With Medicare: What the Data Shows
      </h1>

      <Image
        src="/images/average-cost-of-supplemental-health-insurance-for-seniors-with-medicare.webp"
        alt="average cost of supplemental health insurance for seniors with medicare"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        Average cost of supplemental health insurance for seniors with Medicare falls between $90 and $300+ per month, depending on the plan letter, your age, where you live, and which carrier you choose. Those numbers can feel abstract until you see what real people in your zip code actually pay.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        I pull rate comparisons daily for clients in NJ and PA. Here's what drives those numbers and how to find the right price for your situation.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Medigap vs. Medicare Advantage — two different cost structures
        </h2>
        <p className="text-gray-700 mb-3">
          Medigap (Medicare Supplement) plans charge a monthly premium on top of your $202.90/month Part B premium. In return, they cover most or all of the gaps in Original Medicare: the $1,676 Part A deductible, the $283 Part B deductible (Plan G doesn't cover this one), and coinsurance like the $209.50/day for skilled nursing days 21–100.
        </p>
        <p className="text-gray-700 mb-3">
          Medicare Advantage plans often have $0 premiums. But you'll face copays, coinsurance, prior authorizations, and network restrictions at the point of care. Total annual cost depends heavily on how much healthcare you use.
        </p>
        <p className="text-gray-700">
          A $0 premium isn't the same as $0 cost. If you're comparing the two, look at total projected out-of-pocket spending, not just the monthly bill.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          National averages vs. what NJ and PA seniors actually pay
        </h2>
        <p className="text-gray-700 mb-3">
          Nationally, Medigap premiums can range from as low as $32/month for high-deductible plans to over $628/month for older enrollees in expensive markets. The most popular plan, Plan G, averages roughly $150–$250/month for a 65-year-old in the mid-Atlantic region.
        </p>
        <p className="text-gray-700">
          NJ and PA have different state rules, different carrier pools, and different pricing. Two carriers selling identical Plan G coverage in the same county can differ by $50 or more per month. That's why comparing isn't optional; it's where the savings are.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How age, gender, and tobacco use affect your premium
        </h2>
        <p className="text-gray-700 mb-3">
          Most Medigap carriers in our area use attained-age pricing, meaning your premium starts lower and increases as you get older. A 65-year-old might pay $140/month for Plan G; at 75, the same plan could be $200+.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <strong>Age:</strong> The single biggest factor. Locking in during your Medigap Open Enrollment Period (6 months starting the month you're 65 and enrolled in Part B) gets you the lowest rate with no medical underwriting.
          </li>
          <li>
            <strong>Gender:</strong> Women typically pay 5–15% less than men for the same plan.
          </li>
          <li>
            <strong>Tobacco use:</strong> Smokers pay 10–25% more with most carriers.
          </li>
          <li>
            <strong>Household discounts:</strong> Some carriers offer 5–7% off when two people in the same household enroll.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Plan G vs. Plan N — the cost tradeoff most seniors face
        </h2>
        <p className="text-gray-700 mb-3">
          Plan G covers everything except the $283/year Part B deductible. Plan N costs less per month but adds small copays at doctor visits (up to $20) and ER visits ($50, waived if admitted).
        </p>
        <p className="text-gray-700">
          For many seniors, the $30–$50/month savings on Plan N makes sense if you don't see specialists frequently. For others, Plan G's predictability is worth the extra premium. Neither answer is wrong; it depends on how you use healthcare.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why the same plan costs different amounts from different carriers
        </h2>
        <p className="text-gray-700 mb-3">
          Every Plan G is standardized by Medicare. The benefits are identical no matter who sells it. The only difference between Company A's Plan G and Company B's Plan G is the premium and the company's customer service.
        </p>
        <p className="text-gray-700">
          This is why a side-by-side carrier comparison saves real money. I regularly see clients save $400–$600/year by switching to a lower-cost carrier for the exact same coverage.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Request a side-by-side carrier comparison at no cost
        </h2>
        <p className="text-gray-700 mb-3">
          I'll pull real quotes from every major carrier in your zip code, organized by plan letter and sorted by price. You'll see exactly what you'd pay, no guessing, no ballpark numbers from a national website.
        </p>
        <p className="text-gray-700">
          There's no fee for this. Brokers are paid by the insurance carriers, not by you, and your premium is the same whether you call the carrier directly or work with me.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-xl p-8 text-center">
        <p className="text-xl font-semibold mb-2">
          Get your free side-by-side Medigap rate comparison
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
        <p className="text-sm opacity-90">
          Anthony Orner, Licensed Medicare Broker — NJ &amp; PA
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
              href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medigap Plan G vs. Plan N: Which One Saves You More?
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/turning-65"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment Period: When and Why It Matters
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plans in New Jersey
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
        </ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/health-drug-plans/medigap/basics/costs" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">Medicare.gov — Get Medigap Costs</a> and <a href="https://www.medicare.gov/health-drug-plans/medigap/basics/compare-plan-benefits" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">Compare Medigap Plan Benefits</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/index.shtml" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance</a> or the free <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">SHIP counseling program</a> for unbiased Medicare guidance.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific help, contact the <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> or the <a href="https://www.nj.gov/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
    </main>
  );
}