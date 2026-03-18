import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare Supplement Plan G Cost for 69 Year Old | See Real Rates Free | MedicareYourself",
  description:
    "Medicare Supplement Plan G cost for a 69-year-old varies by carrier and pricing method. See 2025 rate examples and compare with a licensed broker. Free quote.",
  openGraph: {
    title:
      "Medicare Supplement Plan G Cost for 69 Year Old | See Real Rates Free | MedicareYourself",
    description:
      "Medicare Supplement Plan G cost for a 69-year-old varies by carrier and pricing method. See 2025 rate examples and compare with a licensed broker. Free quote.",
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
      name: "Medicare Supplement Plan G Cost for 69 Year Old",
      item: "https://www.medicareyourself.com/services/medicare-supplement-plan-g-cost-for-69-year-old",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Supplement Plan G Cost for a 69-Year-Old: What Carriers Charge in 2025",
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
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
};

const faqs = [
  {
    question: "What is the cost of Medicare Supplement Plan G for 2026?",
    answer:
      "Plan G premiums for 2026 haven't been released yet by most carriers. In 2025, rates for a 69-year-old typically range from roughly $140 to $280 per month depending on the carrier, your location, and whether the plan uses issue-age or attained-age pricing. Call us for updated 2026 rates as they become available.",
  },
  {
    question: "What is the best Medicare Supplement Plan G?",
    answer:
      "Every Plan G offers identical benefits regardless of carrier - that's federal law. The difference is premium cost and long-term rate stability. The 'best' Plan G is the one from a financially strong carrier with a track record of moderate annual increases. A licensed broker can show you which carriers have the steadiest pricing history in your state.",
  },
  {
    question: "Do Plan G premiums increase with age?",
    answer:
      "It depends on the pricing method. Attained-age plans increase as you get older, on top of any inflation-based rate hikes. Issue-age plans base your rate on the age you enrolled, so aging alone doesn't raise your premium. Both types can still have block rate increases when claims rise across the insured pool.",
  },
  {
    question:
      "Can I switch Plan G carriers at 69 without medical underwriting?",
    answer:
      "Outside your initial Medigap Open Enrollment Period, most carriers require medical underwriting to switch. Some states have special protections, and certain federal guaranteed issue triggers apply - like losing employer coverage or your plan leaving the market. A broker can check whether you qualify for a switch without health questions.",
  },
];

export default function MedicareSupplementPlanGCost69YearOld() {
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
          <Link href="/services" className="hover:underline">
            Medicare Guides
          </Link>{" "}
          &gt;{" "}
          <span className="text-gray-700">
            Medicare Supplement Plan G Cost for 69 Year Old
          </span>
        </nav>

        <h1 className="text-3xl font-bold mb-4 text-gray-900">
          Medicare Supplement Plan G Cost for a 69-Year-Old: What Carriers
          Charge in 2025
        </h1>

        <Image
          src="/images/medicare-supplement-plan-g-cost-for-69-year-old.webp"
          alt="Medicare Supplement Plan G cost for 69 year old"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg text-gray-700 mb-2">
          Medicare Supplement Plan G cost for a 69-year-old typically falls
          between $140 and $280 per month in 2025 - but your actual rate depends
          heavily on the carrier you choose and how they price their policies.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          At 69, you're past the initial enrollment window that comes with
          guaranteed issue protections. That means the carrier, pricing method,
          and your health history all matter more. Here's what you should know.
        </p>

        <PhoneCTA />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            How age 69 affects your Plan G premium
          </h2>
          <p className="text-gray-700 mb-3">
            At 69, you've been on Medicare for four years. If you enrolled in
            Plan G at 65 with an attained-age carrier, your premium has already
            climbed several times - once for each birthday, plus any block rate
            increases on top of that.
          </p>
          <p className="text-gray-700 mb-3">
            If you're shopping for Plan G for the first time at 69, carriers
            will price you based on current age. You won't get the rate a
            65-year-old sees. But there's still a wide spread between the
            cheapest and most expensive carriers, and that gap is where a broker
            earns their keep.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            Sample monthly rates from top-rated carriers
          </h2>
          <p className="text-gray-700 mb-3">
            Plan G benefits are identical across every carrier - that's federal
            law. The only difference is what you pay each month. For a
            69-year-old in 2025, here's a general range:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-3 space-y-1">
            <li>Lower-cost carriers: roughly $140 - $175/month</li>
            <li>Mid-range carriers: roughly $175 - $220/month</li>
            <li>Higher-cost carriers: roughly $220 - $280/month</li>
          </ul>
          <p className="text-gray-700">
            Exact premiums depend on your zip code, gender, tobacco use, and the
            carrier's pricing structure. I can pull real quotes for your specific
            situation in minutes.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            Issue-age vs. attained-age pricing explained for 69-year-olds
          </h2>
          <p className="text-gray-700 mb-3">
            <strong>Attained-age</strong> plans start lower but increase with
            every birthday. At 69, you're already paying more than you did at
            65, and the increases continue every year.
          </p>
          <p className="text-gray-700 mb-3">
            <strong>Issue-age</strong> plans lock your rate to the age you first
            enroll. If you buy at 69, your rate is set to that age - aging alone
            won't push it higher. You'll still see inflation-based adjustments,
            but not birthday-driven hikes.
          </p>
          <p className="text-gray-700">
            Both types can hit you with block rate increases when claims in your
            insured pool rise. That's the part nobody warns you about - 10% to
            18% jumps in a single year aren't unusual when age increases and
            block increases stack together.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            Why the carrier matters more than the plan letter
          </h2>
          <p className="text-gray-700 mb-3">
            Since every Plan G covers the same things, the real decision is
            which company to buy it from. Some carriers price aggressively low
            to attract new customers, then raise rates steeply in years three
            through five.
          </p>
          <p className="text-gray-700">
            Others start a bit higher but hold steadier over time. At 69, you
            want a carrier with a solid track record of moderate annual
            increases - not the cheapest premium today, but the most predictable
            cost over the next decade.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            What Plan G covers at any age
          </h2>
          <p className="text-gray-700 mb-3">
            Plan G picks up nearly everything Original Medicare doesn't:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-3 space-y-1">
            <li>Part A deductible ($1,676 per benefit period in 2026)</li>
            <li>Part A hospital coinsurance and extra 365 days of coverage</li>
            <li>Skilled nursing facility coinsurance ($209.50/day, days 21-100)</li>
            <li>Part B excess charges (100%)</li>
            <li>Foreign travel emergency care (80%)</li>
          </ul>
          <p className="text-gray-700">
            Your only out-of-pocket cost with Plan G is the annual Part B
            deductible ($283 in 2026). After that, you pay nothing for
            Medicare-covered services.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            Compare Plan G rates at 69 with a licensed broker
          </h2>
          <p className="text-gray-700 mb-3">
            Shopping at 69 is different from shopping at 65. You likely won't
            have guaranteed issue rights, which means underwriting applies. Some
            carriers are stricter than others - and a broker who works with
            multiple carriers knows which ones are more likely to approve you
            based on your health profile.
          </p>
          <p className="text-gray-700">
            I'm Anthony Orner, a licensed Medicare broker. I'll pull quotes from
            multiple carriers, show you each company's rate increase history,
            and help you pick the Plan G that costs the least over time - not
            just today.
          </p>
        </section>

        <div className="mt-10 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <p className="text-xl font-semibold text-blue-900 mb-2">
            See what Plan G actually costs at your age and zip code
          </p>
          <p className="text-gray-700 mb-4">
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
            . No cost, no obligation.
          </p>
        </div>

        <section className="mt-12">
          <FAQSection faqs={faqs} />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Related resources
          </h2>
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
                href="/services/medicare-supplement-plan-g-vs-plan-n"
                className="text-blue-700 hover:underline"
              >
                Plan G vs. Plan N: Which Saves You More?
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
                href="/services/medicare-supplement-rate-increases"
                className="text-blue-700 hover:underline"
              >
                How Medicare Supplement Rate Increases Work
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}