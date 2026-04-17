import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare quotes | Free Instant Rates From Every Carrier | MedicareYourself",
  description:
    "Compare free Medicare quotes from every major carrier side by side. Get instant Supplement and Advantage rates — no obligation. Call 855-559-1700 today.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-quotes" },
  openGraph: {
    title:
      "medicare quotes | Free Instant Rates From Every Carrier | MedicareYourself",
    description:
      "Medicare quotes from every major carrier compared side by side. Get free Supplement and Advantage rates instantly — no obligation, no runaround.",
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
      name: "Medicare Quotes",
      item: "https://medicareyourself.com/services/medicare-quotes",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Quotes: Compare Supplement and Advantage Rates in Minutes",
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
  mainEntityOfPage:
    "https://medicareyourself.com/services/medicare-quotes",
};

const faqs = [
  {
    question: "What information do I need to get a Medicare quote?",
    answer:
      "For Medigap quotes, you'll typically need your age, sex, zip code, tobacco status, and your Part B effective date. You do not need to provide your Social Security number or Medicare number just to see rates. Advantage plan quotes usually require only your zip code.",
  },
  {
    question: "Are Medicare quotes really free with no obligation?",
    answer:
      "Yes. A licensed broker like Anthony Orner is paid by the insurance carrier, not by you. You can compare every quote side by side and there's zero obligation to enroll in anything.",
  },
  {
    question: "How often should I compare Medicare quotes?",
    answer:
      "At minimum, review your rates once a year. Medicare Advantage and Part D plans can change benefits and costs annually. Medigap premiums also shift — a plan that was cheapest two years ago may not be today.",
  },
  {
    question: "Does Medicare pay for pacemaker surgery?",
    answer:
      "Yes. Medicare Part A covers pacemaker implantation as an inpatient hospital procedure. Part B covers the doctor's services. You're responsible for the Part A deductible ($1,676 in 2026) and any applicable coinsurance unless you have a Supplement plan that covers those costs.",
  },
];

export default function MedicareQuotesPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
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
        <span className="text-gray-700">Medicare Quotes</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Medicare Quotes: Compare Supplement and Advantage Rates in Minutes
      </h1>

      <Image
        src="/images/medicare-quotes.webp"
        alt="Medicare quotes comparison"
        width={800}
        height={400}
        className="w-full h-auto rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        Medicare quotes vary wildly between carriers, even for identical coverage. I pull rates from every major insurer so you can see the real differences in one call, not after a week of research.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        No forms to fill out. No Social Security number required. Just your age, zip code, and a few basics.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What a quote actually includes
        </h2>
        <p className="text-gray-700 mb-2">
          A real Medicare quote isn't just a monthly premium. It should show you:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-2">
          <li>Monthly premium by carrier and plan letter</li>
          <li>Out-of-pocket maximums (for Advantage plans)</li>
          <li>Copays, coinsurance, and deductible responsibility</li>
          <li>Whether the rate is attained-age, issue-age, or community-rated</li>
          <li>Household or non-tobacco discounts you qualify for</li>
        </ul>
        <p className="text-gray-700">
          If someone gives you a number without explaining the rating method, that quote is incomplete.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Supplement quotes vs. Advantage quotes
        </h2>
        <p className="text-gray-700 mb-2">
          These are two completely different products, and the quotes look different too.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>
            <strong>Medigap (Supplement):</strong> You pay a fixed monthly premium. Plan G from one carrier covers the exact same things as Plan G from another. The only real variable is price and financial stability.
          </li>
          <li>
            <strong>Medicare Advantage:</strong> Premiums can be $0, but you'll have copays, networks, and annual out-of-pocket limits. Quotes need to account for how you actually use healthcare, not just the sticker price.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why quotes vary by $80+/month for the same coverage
        </h2>
        <p className="text-gray-700 mb-2">
          Two carriers can sell the exact same Plan G in the same zip code at dramatically different prices. This isn't a gimmick. It comes down to rating method, claims experience in your area, and how aggressively a carrier prices to gain market share.
        </p>
        <p className="text-gray-700">
          One person shared finding Plan G quotes ranging from $157 to $200/month in the same New Jersey county. That $43/month gap adds up to over $500 a year for identical benefits. This is exactly why comparing matters.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          You don't need to hand over personal data just to see rates
        </h2>
        <p className="text-gray-700 mb-2">
          A common concern: do I need to give my Medicare number or Social Security number just to get a quote? No. For Medigap, all you need is your age, sex, zip code, tobacco status, and Part B start date. For Advantage plans, your zip code covers most of it.
        </p>
        <p className="text-gray-700">
          I don't collect sensitive information until you've decided to apply. That's how it should work.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          When timing changes your quote
        </h2>
        <p className="text-gray-700 mb-2">
          During your Medigap Open Enrollment Period (6 months starting when you're 65+ and enrolled in Part B), carriers must accept you at standard rates regardless of health history. Outside that window, medical underwriting can raise your quote significantly or result in denial.
        </p>
        <p className="text-gray-700">
          For Advantage and Part D, the Annual Enrollment Period runs October 15 through December 7. Quotes pulled in September reflect the upcoming year's rates.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Get your free quote with no obligation
        </h2>
        <p className="text-gray-700 mb-2">
          I'm Anthony Orner, a licensed Medicare broker. I work with every major carrier, so the quote I give you isn't limited to one company's products. My commission comes from the insurer. You pay nothing for my help.
        </p>
        <p className="text-gray-700">
          One call. Every rate. You pick what fits.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-xl p-8 text-center">
        <p className="text-2xl font-bold mb-2">
          Compare Every Medicare Rate in One Call
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-semibold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/quote" className="underline font-semibold">
            get a free quote online
          </Link>
          .
        </p>
        <p className="text-sm opacity-90">
          No obligation. No pressure. Just real numbers.
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
              href="/medicare-supplement/new-jersey"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plans Explained
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-advantage/new-jersey"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage Plans: How They Work
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medicare Plan G: Benefits and Costs
            </Link>
          </li>
          <li>
            <Link
              href="/learn/medicare-enrollment-periods"
              className="text-blue-600 hover:underline"
            >
              Medicare Enrollment Periods and Deadlines
            </Link>
          </li>
        </ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/plan-compare" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Medicare.gov Plan Finder</a> to compare plans in your area, or visit <a href="https://www.medicare.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Medicare.gov</a> to create an account and review your current coverage.</div>
      </section>
    </main>
  );
}