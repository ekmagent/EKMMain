import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "find a medicare agent in north brunswick nj | Free Local Help | MedicareYourself",
  description:
    "Find a Medicare agent in North Brunswick NJ who compares every major carrier. Anthony Orner offers free, local guidance for Middlesex County residents. Call today.",
  openGraph: {
    title:
      "find a medicare agent in north brunswick nj | Free Local Help | MedicareYourself",
    description:
      "Find a Medicare agent in North Brunswick NJ who compares every major carrier. Anthony Orner offers free, local guidance for Middlesex County residents. Call today.",
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
      name: "Find a Medicare Agent in North Brunswick NJ",
      item: "https://www.medicareyourself.com/services/find-a-medicare-agent-in-north-brunswick-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Find a Medicare Agent in North Brunswick, NJ Who Actually Works for You",
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
  datePublished: "2025-07-01",
  dateModified: "2025-07-01",
};

const faqs = [
  {
    question: "How do I pick a Medicare agent?",
    answer:
      "Look for an independent, licensed broker who represents multiple carriers - not just one. Ask if they charge a fee (they shouldn't). A good agent will compare plans side by side and explain costs specific to your doctors and prescriptions. If they pressure you into a decision the same day, walk away.",
  },
  {
    question: "How do I speak to a live person at Medicare?",
    answer:
      "You can call 1-800-MEDICARE (1-800-633-4227) 24 hours a day, 7 days a week. TTY users can dial 1-877-486-2048. But keep in mind that Medicare's phone representatives can only give general information. They cannot compare plans or recommend a specific policy. That is what a licensed local agent does.",
  },
  {
    question: "Does it cost anything to use a Medicare agent in North Brunswick?",
    answer:
      "No. Licensed Medicare agents are paid by the insurance carriers, not by you. Whether you enroll in a Medicare Advantage plan, a Medigap policy, or a Part D drug plan, there is zero cost for the agent's help. The premium you pay is the same whether you use an agent or go directly to the carrier.",
  },
  {
    question: "When should I contact a Medicare agent before turning 65?",
    answer:
      "Start 6 months before your Part B effective date. This gives you time to compare all available plans and, if you are considering a Medigap policy, apply early to lock in the best rate. Your Medigap Open Enrollment Period lasts 6 months starting the month you turn 65 and have Part B - guaranteed issue with no health questions.",
  },
];

export default function FindMedicareAgentNorthBrunswickNJ() {
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
          Find a Medicare Agent in North Brunswick NJ
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Find a Medicare Agent in North Brunswick, NJ Who Actually Works for You
      </h1>

      <Image
        src="/images/find-a-medicare-agent-in-north-brunswick-nj.webp"
        alt="find a medicare agent in north brunswick nj"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Finding a Medicare agent in North Brunswick, NJ should not involve a 45-minute hold with a national call center. You deserve someone local who knows which carriers serve Middlesex County, which doctors are in network, and how to save you money on premiums.
      </p>
      <p className="text-lg mb-6">
        I am Anthony Orner, a licensed independent Medicare broker based right here in New Jersey. My help costs you nothing - carriers pay me, not you.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why North Brunswick residents deserve a local broker, not a call center
        </h2>
        <p className="mb-2">
          North Brunswick sits in the heart of Middlesex County, with access to providers at Robert Wood Johnson and Saint Peter's. A call center rep in Arizona does not know that.
        </p>
        <p>
          A local broker understands your provider networks, your pharmacy options, and the specific plans available at your zip code. That matters when the difference between two plans is $80 a month.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What a licensed Medicare agent does that Google can't
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Compares Medicare Advantage, Medigap, and Part D plans from every major carrier in your area</li>
          <li>Checks whether your current doctors and prescriptions are covered under each plan</li>
          <li>Identifies which plan actually costs you the least over a full year - not just the lowest premium</li>
          <li>Handles enrollment paperwork and follows up if there are any issues</li>
        </ul>
        <p className="mt-3">
          Google gives you a list. I give you a recommendation based on your actual situation.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Plans and carriers available in Middlesex County
        </h2>
        <p className="mb-2">
          Middlesex County residents have access to Medicare Advantage plans, Medicare Supplement (Medigap) policies, and standalone Part D drug plans from carriers like Aetna, Cigna, Humana, UnitedHealthcare, and others. Rates vary by carrier and your specific situation.
        </p>
        <p>
          As an independent broker, I am not locked into one company. I compare them all and show you the numbers.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Key enrollment dates you need to know
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Medigap Open Enrollment:</strong> 6 months starting the month you turn 65 and have Part B. Guaranteed issue - no health questions, no higher premiums.
          </li>
          <li>
            <strong>Medicare Advantage / Part D Open Enrollment:</strong> October 15 through December 7 each year.
          </li>
          <li>
            <strong>Part B late penalty:</strong> 10% added to your premium for every 12-month period you delayed enrollment without qualifying coverage.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          2026 Medicare costs to budget for
        </h2>
        <p className="mb-2">
          Your Part B premium is $185 per month for 2026. The Part B deductible is $257 per year. The Part A deductible is $1,676 per benefit period.
        </p>
        <p>
          These costs add up fast without the right coverage. A Medigap plan like Plan G or Plan N can dramatically reduce your out-of-pocket exposure.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Schedule a no-cost consultation with Anthony Orner
        </h2>
        <p className="mb-2">
          Whether you are turning 65 soon, retiring and losing employer coverage, or reviewing your current plan during open enrollment, I am here to help.
        </p>
        <p>
          Call me directly. No scripts. No upsells. Just honest plan comparisons that save you money.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center my-10">
        <p className="text-xl font-semibold mb-2">
          Ready to compare Medicare plans in North Brunswick?
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
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-guides/medicare-supplement-plans-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plans in NJ - Full Comparison
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-plan-g-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Plan G in New Jersey - What It Covers and Costs
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-plans-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage Plans in NJ - 2026 Options
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/when-to-enroll-in-medicare"
              className="text-blue-600 hover:underline"
            >
              When to Enroll in Medicare - Key Deadlines
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}