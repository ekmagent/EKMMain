import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Plan G Rates for 69 Year Old in New Jersey | Free Carrier Comparison | MedicareYourself",
  description:
    "Plan G rates for 69-year-olds in New Jersey vary by carrier and pricing method. See real quotes from top insurers. Free comparison from a licensed NJ broker.",
  openGraph: {
    title:
      "Plan G Rates for 69 Year Old in New Jersey | Free Carrier Comparison | MedicareYourself",
    description:
      "Plan G rates for 69-year-olds in New Jersey vary by carrier and pricing method. See real quotes from top insurers. Free comparison from a licensed NJ broker.",
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
      name: "Plan G Rates for 69 Year Old in New Jersey",
      item: "https://medicareyourself.com/services/plan-g-rates-for-69-year-old-in-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Plan G Rates for 69 Year Old in New Jersey: Carrier-by-Carrier Breakdown",
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
    question: "What is the average Plan G rate for a 69-year-old in New Jersey?",
    answer:
      "Plan G rates for 69-year-olds in NJ typically range from roughly $150 to over $300 per month depending on the carrier, your gender, zip code, and whether the plan uses attained-age or issue-age pricing. The only way to get an accurate quote is to compare multiple carriers side by side.",
  },
  {
    question: "Can I switch Plan G carriers at 69 without medical underwriting?",
    answer:
      "In most cases, switching carriers at 69 requires medical underwriting unless you qualify for a federal guaranteed issue right - such as losing employer coverage or your current insurer leaving the market. New Jersey also offers a birthday rule window for certain plan changes. Call a licensed broker to check your specific situation.",
  },
  {
    question: "Does Plan G cover the Part B deductible?",
    answer:
      "No. Plan G covers everything Original Medicare doesn't - except the annual Part B deductible, which is $283 in 2026. After you meet that deductible, Plan G pays your remaining out-of-pocket costs at 100%.",
  },
  {
    question: "Will my Plan G premium go up when I turn 70?",
    answer:
      "If you're on an attained-age plan, yes - your premium increases as you age, and turning 70 triggers another rate tier. Issue-age plans base your rate on the age you enrolled, so they don't increase due to birthdays alone (though they can still rise with inflation or medical cost adjustments).",
  },
];

export default function PlanGRates69NJ() {
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
        <span className="text-gray-700">
          Plan G Rates for 69 Year Old in New Jersey
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Plan G Rates for 69 Year Old in New Jersey: Carrier-by-Carrier Breakdown
      </h1>

      <Image
        src="/images/plan-g-rates-for-69-year-old-in-new-jersey.webp"
        alt="Plan G rates for 69 year old in New Jersey"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Plan G rates for a 69-year-old in New Jersey depend on three things: which carrier you choose, how that carrier prices its policies, and your zip code. The spread between the cheapest and most expensive option can be $100+ per month - for the exact same coverage.
      </p>
      <p className="text-lg mb-6">
        I'm Anthony Orner, a licensed NJ Medicare broker. Here's what I see when I run quotes for clients your age.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          What 69-year-olds actually pay for Plan G in NJ
        </h2>
        <p className="mb-2">
          At 69, you're past your Medigap Open Enrollment window. That means rates depend heavily on underwriting and the pricing model your carrier uses. Monthly premiums I see for 69-year-olds in New Jersey generally fall between $150 and $320.
        </p>
        <p className="mb-2">
          Your exact rate shifts based on county, tobacco use, and household discounts some carriers offer. North Jersey zip codes near Hackensack Meridian and RWJBarnabas hospitals sometimes price differently than South Jersey areas closer to Cooper or Virtua networks.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Which carriers offer the lowest premiums at age 69
        </h2>
        <p className="mb-2">
          NJ has over a dozen carriers selling Plan G. The New Jersey Department of Human Services publishes rate comparison charts - and the differences are real. Some of the carriers I quote regularly for clients in their late 60s include national names and regional options.
        </p>
        <p className="mb-2">
          But cheapest today doesn't always mean cheapest over time. A carrier with a low entry rate but aggressive annual increases can cost you more within three to four years. I look at rate history, not just the current number.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Attained-age vs. issue-age pricing and why it matters now
        </h2>
        <p className="mb-2">
          This is the single biggest factor most people overlook. Here's the short version:
        </p>
        <ul className="list-disc pl-6 mb-3 space-y-1">
          <li>
            <strong>Attained-age:</strong> Your premium goes up every year as you age. At 69, you're paying more than you did at 65 - and it'll jump again at 70.
          </li>
          <li>
            <strong>Issue-age:</strong> Your premium is based on the age you first enrolled. It can still increase for inflation or claims experience, but not because of your birthday.
          </li>
          <li>
            <strong>Community-rated:</strong> Everyone pays the same regardless of age. Rare in NJ, but worth knowing about.
          </li>
        </ul>
        <p>
          At 69, switching from an attained-age plan to an issue-age plan could save you thousands over the next decade - if you can pass underwriting.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          How to lock in your best rate before you turn 70
        </h2>
        <p className="mb-2">
          Turning 70 bumps you into a higher rate tier on attained-age plans. If you've been thinking about switching carriers, doing it at 69 locks in a lower age band. Every month you wait costs you.
        </p>
        <p>
          You'll need to pass medical underwriting in most cases. Conditions like diabetes or heart disease can complicate approval - which is why people who switch from Plan G to a Medicare Advantage plan and then try to come back often find themselves stuck. I see it more than I'd like.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          What Plan G actually covers at this age
        </h2>
        <p className="mb-2">
          Plan G is standardized across all carriers in New Jersey. That means whether you pay $160 or $310 per month, you get the same benefits:
        </p>
        <ul className="list-disc pl-6 mb-3 space-y-1">
          <li>Part A deductible ($1,676 per benefit period in 2026) - covered</li>
          <li>Part A hospital coinsurance and costs up to 365 extra days - covered</li>
          <li>Part B excess charges - covered</li>
          <li>Skilled nursing facility coinsurance ($209.50/day for days 21-100) - covered</li>
          <li>Part B deductible ($283/year) - not covered (this is what separates Plan G from the old Plan F)</li>
        </ul>
        <p>
          After that $283 deductible, you pay nothing else out of pocket. No copays, no surprise bills, no network restrictions.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Why comparing carriers matters more than comparing plans
        </h2>
        <p className="mb-2">
          Every Plan G is identical. The only variable is price. And price varies a lot in New Jersey. A free carrier comparison takes about 10 minutes over the phone - I'll pull real-time quotes from every major insurer writing Plan G in your zip code.
        </p>
        <p>
          No cost. No obligation. Just numbers on a page so you can make a clear decision.
        </p>
      </section>

      <div className="mt-10 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Ready to see your Plan G rates side by side?
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
            get a free quote online
          </Link>
          . I'll compare every carrier in NJ for your age and zip code.
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
              href="/services/medicare-supplement-plan-g-new-jersey"
              className="text-blue-700 hover:underline"
            >
              Medicare Supplement Plan G in New Jersey - Full Guide
            </Link>
          </li>
          <li>
            <Link
              href="/services/plan-g-vs-plan-n-new-jersey"
              className="text-blue-700 hover:underline"
            >
              Plan G vs. Plan N in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/services/best-medigap-plans-new-jersey"
              className="text-blue-700 hover:underline"
            >
              Best Medigap Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-supplement-rates-by-age-nj"
              className="text-blue-700 hover:underline"
            >
              Medicare Supplement Rates by Age in NJ
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}