import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Exploring Medicare Supplemental Insurance (Medigap) Cost | Free Rate Comparison | MedicareYourself",
  description:
    "Exploring Medicare Supplemental insurance (Medigap) cost? See average premiums by plan letter, pricing model, and state. Compare carriers free with a broker.",
  openGraph: {
    title:
      "Exploring Medicare Supplemental Insurance (Medigap) Cost | Free Rate Comparison | MedicareYourself",
    description:
      "Exploring Medicare Supplemental insurance (Medigap) cost? See average premiums by plan letter, pricing model, and state. Compare carriers free with a broker.",
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
      name: "Exploring Medigap Cost",
      item: "https://medicareyourself.com/services/exploring-medicare-supplemental-insurance-medigap-cost",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Exploring Medicare Supplemental Insurance (Medigap) Cost: Real Numbers and What Drives Them",
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
    question: "Do Medigap plans cover chiropractic?",
    answer:
      "Medigap plans only cover costs that Original Medicare approves. Medicare Part B covers limited chiropractic care - specifically manual manipulation of the spine to correct a subluxation. If Medicare approves the chiropractic visit, your Medigap plan will help pay your share of that cost. Other chiropractic services not covered by Medicare will not be covered by Medigap either.",
  },
  {
    question: "Why do two companies charge different prices for the same Medigap plan letter?",
    answer:
      "Every Medigap plan with the same letter offers identical benefits regardless of which insurance company sells it. The only difference is the premium. Companies set their own rates based on their claims experience, operating costs, and pricing model (community-rated, issue-age-rated, or attained-age-rated). That is why comparing carriers is critical before you buy.",
  },
  {
    question: "When is the best time to buy a Medigap policy?",
    answer:
      "Your best window is during your 6-month Medigap Open Enrollment Period, which starts the month you turn 65 and are enrolled in Part B. During this period, companies cannot charge you more or deny you coverage for health reasons. My practice is to have clients apply up to 6 months before their Part B start date to lock in rates early.",
  },
  {
    question: "Can my Medigap premium increase after I enroll?",
    answer:
      "Yes. All Medigap premiums can increase over time due to inflation and rising healthcare costs. However, how fast your premium rises depends on the pricing model your carrier uses. Community-rated and issue-age-rated plans tend to have more predictable increases than attained-age-rated plans, which raise your premium as you age.",
  },
];

export default function ExploringMedigapCostPage() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          &gt;{" "}
          <Link href="/medicare-guides" className="hover:underline">
            Medicare Guides
          </Link>{" "}
          &gt;{" "}
          <span className="text-gray-700">Exploring Medigap Cost</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Exploring Medicare Supplemental Insurance (Medigap) Cost: Real Numbers and What Drives Them
        </h1>

        <Image
          src="/images/exploring-medicare-supplemental-insurance-medigap-cost.webp"
          alt="exploring medicare supplemental insurance medigap cost"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg text-gray-700 mb-2">
          Exploring Medicare Supplemental Insurance (Medigap) cost is one of the smartest moves you can make before committing to a plan. Premiums vary widely - sometimes by $100/month or more for the exact same coverage - depending on your carrier, location, and age. Understanding what drives those differences puts real money back in your pocket.
        </p>

        <PhoneCTA />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            What Medigap premiums actually cover in 2025-2026
          </h2>
          <p className="text-gray-700 mb-2">
            Medigap plans help pay the out-of-pocket costs Original Medicare leaves behind. That includes the Part A deductible ($1,676 per benefit period in 2026), the Part B deductible ($257/year), and the 20% coinsurance on Part B services.
          </p>
          <p className="text-gray-700">
            Skilled nursing facility stays can cost $209.50/day for days 21-100. Plans like Plan G and Plan C cover that coinsurance in full. Your monthly premium is what you pay to avoid those unpredictable bills.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Three pricing models that determine your rate
          </h2>
          <p className="text-gray-700 mb-3">
            Insurance companies use one of three methods to set your premium. This single factor can make a bigger difference over 20 years than the plan letter you choose.
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <strong>Community-rated (no-age-rated):</strong> Everyone pays the same premium regardless of age. Your rate won't increase just because you get older.
            </li>
            <li>
              <strong>Issue-age-rated:</strong> Your premium is based on your age when you buy the policy. Younger buyers get a lower starting rate that doesn't jump with birthdays.
            </li>
            <li>
              <strong>Attained-age-rated:</strong> Your premium starts low but increases as you age. This is the most common model and usually the cheapest at 65 - but the most expensive by 80.
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Average Medigap costs by plan letter and state
          </h2>
          <p className="text-gray-700 mb-2">
            Costs vary dramatically by location. A Plan G policy might run $120/month in one state and over $250/month in another. Here in New Jersey, rates tend to sit above the national average because of state regulations and healthcare costs.
          </p>
          <p className="text-gray-700 mb-2">
            Plan G is the most popular plan sold today. Plan N comes in lower - typically $20-$50/month less - but you'll pay small copays at some office visits and the Part B deductible out of pocket.
          </p>
          <p className="text-gray-700">
            Plan F is only available if you became eligible for Medicare before January 1, 2020. Rates for Plan F tend to climb faster because no new enrollees are joining the risk pool.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            How to compare carriers and find the best value
          </h2>
          <p className="text-gray-700 mb-2">
            Every Plan G is identical in benefits no matter who sells it. The only difference is the premium. That means carrier comparison is pure math - same coverage, different price tag.
          </p>
          <p className="text-gray-700">
            I recommend pulling quotes from at least four or five carriers in your ZIP code. A broker can do this for you at no cost. You pay the same premium whether you use a broker or go direct.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Why locking in your rate early matters
          </h2>
          <p className="text-gray-700 mb-2">
            Your 6-month Medigap Open Enrollment Period starts the month you turn 65 and are enrolled in Part B. During this window, no insurer can deny you or charge more based on health history. Miss it, and you may face medical underwriting.
          </p>
          <p className="text-gray-700">
            My practice is to have clients apply up to 6 months before their Part B start date. This locks in the rate early and protects against any premium increases before coverage kicks in. The sooner you lock in, the better your rate.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Household and payment discounts worth asking about
          </h2>
          <p className="text-gray-700 mb-2">
            Many carriers offer discounts you won't see on a rate sheet unless you ask. Common ones include household discounts (both spouses enrolled with the same carrier), annual-pay discounts, and electronic funds transfer (EFT) discounts.
          </p>
          <p className="text-gray-700">
            These can knock 5-15% off your annual premium. When I run a comparison, I factor these in so you see the true out-of-pocket number.
          </p>
        </section>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-10 text-center">
          <p className="text-xl font-semibold text-blue-900 mb-2">
            Ready to see your real Medigap rates?
          </p>
          <p className="text-gray-700 mb-4">
            Call{" "}
            <a
              href="tel:8555591700"
              className="text-blue-700 font-bold hover:underline"
            >
              855-559-1700
            </a>{" "}
            for a free, no-pressure comparison from a licensed broker.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition"
          >
            Get a Free Quote
          </Link>
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
                href="/services/medicare-plan-g-cost"
                className="text-blue-700 hover:underline"
              >
                Medicare Plan G Cost - What You'll Actually Pay
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-plan-n-vs-plan-g"
                className="text-blue-700 hover:underline"
              >
                Medicare Plan N vs Plan G - Which Saves More?
              </Link>
            </li>
            <li>
              <Link
                href="/services/medigap-open-enrollment-period"
                className="text-blue-700 hover:underline"
              >
                Medigap Open Enrollment Period - Timing and Rules
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-supplement-plans-nj"
                className="text-blue-700 hover:underline"
              >
                Medicare Supplement Plans in New Jersey
              </Link>
            </li>
          </ul>
        </section>

        <p className="text-sm text-gray-500 mt-10">
          Written by Anthony Orner, Licensed Medicare Broker |{" "}
          <Link href="/about" className="hover:underline">
            About the Author
          </Link>
        </p>
      </main>
    </>
  );
}