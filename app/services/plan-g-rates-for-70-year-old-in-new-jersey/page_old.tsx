import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Plan G Rates for 70 Year Old in New Jersey | Free Quote in Minutes | MedicareYourself",
  description:
    "Plan G rates for 70-year-olds in New Jersey vary widely by carrier. Compare real NJ premiums side by side. Get a free quote from a licensed local broker.",
  openGraph: {
    title:
      "Plan G Rates for 70 Year Old in New Jersey | Free Quote in Minutes | MedicareYourself",
    description:
      "Plan G rates for 70-year-olds in New Jersey vary widely by carrier. Compare real NJ premiums side by side. Get a free quote from a licensed local broker.",
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
      name: "Plan G Rates for 70 Year Old in New Jersey",
      item: "https://medicareyourself.com/services/plan-g-rates-for-70-year-old-in-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Plan G Rates for 70 Year Old in New Jersey: What Every Carrier Charges",
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
    question: "How much is Medicare Plan G in NJ?",
    answer:
      "Plan G premiums in New Jersey vary by carrier, your age, your ZIP code, and whether the carrier uses issue-age or attained-age pricing. Monthly rates for a 70-year-old can differ by $80 or more between the cheapest and most expensive carrier in the same county. A licensed broker can run a side-by-side comparison at no cost.",
  },
  {
    question: "Do Plan G premiums increase with age?",
    answer:
      "It depends on the carrier's pricing method. Attained-age carriers raise your premium as you get older. Issue-age carriers base your rate on the age you enrolled, so your premium doesn't increase due to aging - only due to inflation or medical cost adjustments. Both types operate in New Jersey.",
  },
  {
    question: "What is the best Medigap insurance company in New Jersey?",
    answer:
      "There's no single best company. The lowest-cost carrier at age 70 may not be the lowest at 75. What matters is comparing the pricing model, rate increase history, and claims experience. A broker who works with multiple carriers can show you which ones have the most stable rates in your specific NJ county.",
  },
  {
    question: "Can I switch Plan G carriers at 70 without losing coverage?",
    answer:
      "Yes. You can apply with a new carrier at any time. In most cases you'll need to pass medical underwriting, but if you're in good health, switching can save you real money. Your new policy starts the day your old one ends - no gap required if timed correctly.",
  },
];

export default function PlanGRates70NJ() {
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
          <span className="text-gray-700">
            Plan G Rates for 70 Year Old in New Jersey
          </span>
        </nav>

        <h1 className="text-3xl font-bold mb-4">
          Plan G Rates for 70 Year Old in New Jersey: What Every Carrier Charges
        </h1>

        <Image
          src="/images/plan-g-rates-for-70-year-old-in-new-jersey.webp"
          alt="Plan G rates for 70 year old in New Jersey"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg mb-2">
          Plan G rates for a 70-year-old in New Jersey can swing by $80 or more
          per month depending on the carrier and your ZIP code. That gap is real
          money - over $900 a year between the cheapest and priciest option for
          the exact same coverage.
        </p>
        <p className="text-lg mb-6">
          I'm Anthony Orner, a licensed Medicare broker based in New Jersey. Here's what actually drives those differences and how to find your best rate.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            2025 Plan G premiums for 70-year-olds across NJ carriers
          </h2>
          <p className="mb-3">
            Every Plan G policy covers the same benefits - the Part A deductible
            ($1,676 in 2026), Part B excess charges, skilled nursing coinsurance,
            and more. The only difference between carriers is the premium.
          </p>
          <p>
            At age 70, NJ carriers range from roughly the low $200s to well over
            $300/month. Rates shift every year, so a carrier that was cheapest
            two years ago may not be today. I run live comparisons across all
            available carriers so you see current numbers, not outdated quotes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why your ZIP code changes your monthly rate
          </h2>
          <p className="mb-3">
            Carriers price by rating area, not just state. A 70-year-old in
            Bergen County often pays a different premium than someone the same
            age in Ocean County or Camden County.
          </p>
          <p>
            North Jersey ZIP codes near Hackensack Meridian and RWJBarnabas
            facilities may see different rate bands than South Jersey areas
            closer to Cooper or Jefferson Health networks. Your exact ZIP matters
            more than you'd think.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Issue-age vs. attained-age carriers available in New Jersey
          </h2>
          <p className="mb-3">
            This is the detail most people miss, and it affects what you'll pay
            at 75, 80, and beyond.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Issue-age carriers</strong> lock your base rate to the age
              you enrolled. Your premium won't climb just because you got older.
              Increases only come from inflation or claims trends.
            </li>
            <li>
              <strong>Attained-age carriers</strong> raise your rate as you age.
              They sometimes start lower, but the math catches up quickly after
              70.
            </li>
          </ul>
          <p className="mt-3">
            Both types sell Plan G in New Jersey. At 70, an issue-age policy
            often makes more financial sense long-term, but it depends on the
            specific carriers available in your county.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How to switch carriers at 70 without a coverage gap
          </h2>
          <p className="mb-3">
            If you already have Plan G but your premiums have climbed, you're not
            stuck. You can apply with a different carrier at any time. Most
            carriers require medical underwriting after your initial Medigap open
            enrollment, but if your health is decent, approval is common.
          </p>
          <p>
            Timing matters. Your new policy effective date aligns with when you
            cancel the old one - no gap in coverage. I handle the coordination
            so nothing slips through.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            The real cost of waiting to compare
          </h2>
          <p className="mb-3">
            I talk to people every week who stayed with the same carrier for
            years without checking rates. Some were overpaying by $60-$100/month
            and didn't know it. Others switched to a Medicare Advantage plan to
            save on premiums, then couldn't get back on Plan G because of health
            changes.
          </p>
          <p>
            At 70, you still have options. That window doesn't stay open forever.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What a free rate comparison looks like
          </h2>
          <p className="mb-3">
            You give me your ZIP code, date of birth, and tobacco status. I pull
            current rates from every carrier writing Plan G in your area. You see
            the numbers side by side - no cost, no obligation, and no pressure to
            switch.
          </p>
          <p>Takes about five minutes.</p>
        </section>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center my-10">
          <p className="text-lg font-semibold mb-2">
            Compare Plan G rates in your NJ ZIP code
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
            . No sign-up required.
          </p>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/services/medicare-supplement-plan-g"
                className="text-blue-700 hover:underline"
              >
                Medicare Supplement Plan G: Full Benefits Breakdown
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
                href="/services/medigap-open-enrollment-nj"
                className="text-blue-700 hover:underline"
              >
                Medigap Open Enrollment in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-supplement-rates-by-age"
                className="text-blue-700 hover:underline"
              >
                Medicare Supplement Rates by Age
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}