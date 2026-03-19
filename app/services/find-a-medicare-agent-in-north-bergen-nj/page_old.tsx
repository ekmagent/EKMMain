import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "find a medicare agent in north bergen nj | Free Broker Help | MedicareYourself",
  description:
    "Find a Medicare agent in North Bergen, NJ who compares Supplement and Advantage plans across carriers. Anthony Orner offers free, no-pressure consultations.",
  openGraph: {
    title:
      "find a medicare agent in north bergen nj | Free Broker Help | MedicareYourself",
    description:
      "Find a Medicare agent in North Bergen, NJ who compares Supplement and Advantage plans across carriers. Anthony Orner offers free, no-pressure consultations.",
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
      name: "Find a Medicare Agent in North Bergen, NJ",
      item: "https://medicareyourself.com/services/find-a-medicare-agent-in-north-bergen-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Find a Medicare Agent in North Bergen, NJ — Independent Broker Comparing Every Major Carrier",
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
    question: "How do I pick a Medicare agent?",
    answer:
      "Look for a licensed, independent broker who works with multiple carriers rather than just one. An independent agent can compare plans side-by-side and recommend coverage based on your doctors, prescriptions, and budget. Ask whether they charge a fee (they shouldn't) and whether they hold a valid NJ Department of Banking and Insurance license.",
  },
  {
    question: "Do Medicare agents charge a fee?",
    answer:
      "No. Licensed Medicare agents and brokers are paid commissions by the insurance carriers, not by you. You pay the same premium whether you enroll through a broker or directly with the carrier. There is zero cost for the help.",
  },
  {
    question: "How do I speak to a live person at Medicare?",
    answer:
      "You can call 1-800-MEDICARE (1-800-633-4227), available 24/7. However, Medicare representatives can only explain your benefits. They cannot compare plans or recommend a specific policy. For plan comparison and enrollment help, contact an independent broker like Anthony Orner at 855-559-1700.",
  },
  {
    question: "Can a Medicare agent help me switch plans?",
    answer:
      "Yes. During Open Enrollment (October 15 through December 7 for Medicare Advantage and Part D), or if you have a qualifying event that triggers a Special Enrollment Period, your agent can help you compare options and switch to a plan that better fits your needs.",
  },
];

export default function FindMedicareAgentNorthBergenNJ() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        {" > "}
        <Link href="/medicare-guides" className="hover:underline">
          Medicare Guides
        </Link>
        {" > "}
        <span className="text-gray-700">
          Find a Medicare Agent in North Bergen, NJ
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Find a Medicare Agent in North Bergen, NJ - Independent Broker Comparing Every Major Carrier
      </h1>

      <Image
        src="/images/find-a-medicare-agent-in-north-bergen-nj.webp"
        alt="find a medicare agent in North Bergen NJ"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Finding a Medicare agent in North Bergen, NJ doesn't have to feel like a guessing game. I'm Anthony Orner, a licensed independent Medicare broker serving the 07047 zip code and all of Hudson County.
      </p>
      <p className="text-lg mb-6">
        I compare Supplement and Advantage plans across every major carrier at no cost to you. The carriers pay me, not you.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What an independent broker does that a captive agent cannot
        </h2>
        <p className="mb-2">
          A captive agent works for one insurance company. They can only show you that company's plans. If a competitor offers a lower rate or better network, you'll never hear about it.
        </p>
        <p>
          As an independent broker, I'm contracted with all the major carriers available in North Bergen. I pull real quotes from each one and lay them out so you can compare premiums, networks, and drug formularies in a single sitting.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare Supplement and Advantage options in North Bergen 07047
        </h2>
        <p className="mb-2">
          North Bergen residents generally have strong access to both plan types:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-2">
          <li>
            <strong>Medicare Supplement (Medigap):</strong> Plan G and Plan N are the most popular standardized options. You keep Original Medicare and can see any doctor nationwide who accepts Medicare.
          </li>
          <li>
            <strong>Medicare Advantage (Part C):</strong> Several HMO and PPO plans serve 07047 with $0 premium options, dental/vision benefits, and Part D drug coverage built in. Network restrictions apply.
          </li>
        </ul>
        <p>Rates vary by carrier, age, and tobacco status. I quote them all for free.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How plan selection differs in Hudson County vs. other NJ counties
        </h2>
        <p className="mb-2">
          Hudson County sits right across from Manhattan, so many carriers compete hard for your business here. That competition often means more Medicare Advantage plan choices and more competitive Medigap rates than you'd find in rural South Jersey counties.
        </p>
        <p>
          Your local hospital network matters, too. If you use providers tied to specific health systems in North Bergen or Jersey City, certain Advantage plans will fit better than others. I check your doctors against every plan's provider directory before making a recommendation.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Key enrollment periods to know
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Medigap Open Enrollment:</strong> 6 months starting the month you turn 65 and have Part B. During this window, carriers cannot deny you or charge higher premiums based on health.
          </li>
          <li>
            <strong>Medicare Advantage/Part D Open Enrollment:</strong> October 15 through December 7 each year.
          </li>
          <li>
            <strong>Special Enrollment Periods:</strong> Triggered by events like losing employer coverage or moving out of a plan's service area.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          2026 Medicare costs you should budget for
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Part B monthly premium: $185</li>
          <li>Part B annual deductible: $257</li>
          <li>Part A hospital deductible: $1,676 per benefit period</li>
          <li>Skilled Nursing Facility coinsurance (days 21-100): $209.50/day</li>
        </ul>
        <p className="mt-2">
          A good Supplement plan covers most or all of these gaps. That's why getting quotes before your enrollment window closes can save you thousands.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Get a free North Bergen Medicare plan comparison
        </h2>
        <p className="mb-2">
          I'll ask about your doctors, medications, and monthly budget. Then I'll show you every plan option from every carrier available in 07047. No pressure, no obligation, no charge.
        </p>
        <p>
          Call me or request a comparison online. Most consultations take about 15 minutes.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center mb-10">
        <p className="text-xl font-semibold mb-2">
          Ready to compare Medicare plans in North Bergen?
        </p>
        <p className="text-lg mb-4">
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
            Get a Free Quote
          </Link>
        </p>
        <p className="text-sm text-gray-600">
          Anthony Orner - Licensed Medicare Broker, NJ
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-guides/medicare-supplement-plans-nj"
              className="text-blue-700 hover:underline"
            >
              Medicare Supplement Plans in NJ - Complete Guide
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-plans-nj"
              className="text-blue-700 hover:underline"
            >
              Medicare Advantage Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/plan-g-vs-plan-n"
              className="text-blue-700 hover:underline"
            >
              Plan G vs. Plan N - Which Is Better for You?
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/when-to-enroll-in-medicare"
              className="text-blue-700 hover:underline"
            >
              When to Enroll in Medicare - Enrollment Periods Explained
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}