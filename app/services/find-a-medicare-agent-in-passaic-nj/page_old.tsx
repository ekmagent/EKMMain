import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "find a medicare agent in passaic nj | Free Independent Advice | MedicareYourself",
  description:
    "Find a Medicare agent in Passaic NJ — Anthony Orner compares Supplement and Advantage plans across every major carrier. Free consultation, no obligation.",
  openGraph: {
    title:
      "find a medicare agent in passaic nj | Free Independent Advice | MedicareYourself",
    description:
      "Find a Medicare agent in Passaic NJ — Anthony Orner compares Supplement and Advantage plans across every major carrier. Free consultation, no obligation.",
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
      name: "Find a Medicare Agent in Passaic NJ",
      item: "https://medicareyourself.com/services/find-a-medicare-agent-in-passaic-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Find a Medicare Agent in Passaic, NJ Who Compares Every Major Carrier",
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
      "Look for a licensed, independent broker rather than a captive agent. An independent broker represents multiple carriers and can give you a true side-by-side comparison. Ask if they charge a fee (they should not - brokers are paid by the carriers). Confirm they are licensed in New Jersey and familiar with Passaic County plan availability.",
  },
  {
    question: "How do I speak to a live person at Medicare?",
    answer:
      "You can call 1-800-MEDICARE (1-800-633-4227) 24 hours a day, 7 days a week. TTY users should call 1-877-486-2048. However, Medicare's representatives can only explain your benefits - they cannot compare plans or recommend one. For plan comparisons, contact an independent broker.",
  },
  {
    question: "Does it cost anything to work with a Medicare agent in Passaic?",
    answer:
      "No. An independent Medicare broker is paid a commission by the insurance carrier, not by you. Your premium is the same whether you enroll directly or through a broker. You get free guidance at no extra cost.",
  },
  {
    question: "When is the best time to contact a Medicare agent?",
    answer:
      "If you are turning 65, reach out at least 6 months before your Part B start date. This gives you time to compare plans during your Medigap Open Enrollment Period and lock in your rate early. If you already have Medicare, the Annual Enrollment Period runs October 15 through December 7 each year.",
  },
];

export default function FindMedicareAgentPassaicNJ() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        {" > "}
        <Link href="/medicare-guides" className="hover:underline">
          Medicare Guides
        </Link>
        {" > "}
        <span className="text-gray-700">Find a Medicare Agent in Passaic NJ</span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Find a Medicare Agent in Passaic, NJ Who Compares Every Major Carrier
      </h1>

      <Image
        src="/images/find-a-medicare-agent-in-passaic-nj.webp"
        alt="find a medicare agent in passaic nj"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="mb-3">
        Finding a Medicare agent in Passaic, NJ who actually works for you - not a single insurance company - makes a real difference in what you pay. I'm Anthony Orner, an independent Medicare broker licensed in New Jersey. I compare plans from every major carrier so you see the full picture before you enroll.
      </p>
      <p className="mb-6">
        There is no fee for my services. Your premium stays the same whether you call a carrier directly or go through me.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What an independent broker can do that a captive agent cannot
        </h2>
        <p className="mb-3">
          A captive agent represents one carrier. They will show you that carrier's plan and nothing else. An independent broker like me is contracted with multiple insurance companies and can lay out your options side by side.
        </p>
        <p>
          That means you see the actual price differences between Plan G from Carrier A versus Plan G from Carrier B. Same coverage, potentially very different premiums.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare options available in Passaic County for 2025-2026
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Medicare Supplement (Medigap):</strong> Plan G and Plan N are the most popular standardized options. Benefits are identical across carriers - only the premium varies.
          </li>
          <li>
            <strong>Medicare Advantage (Part C):</strong> HMO and PPO plans available in Passaic County, some with $0 premiums and added dental/vision benefits.
          </li>
          <li>
            <strong>Part D prescription drug plans:</strong> Standalone drug coverage if you choose Original Medicare with a Supplement.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Red flags when choosing a Medicare agent
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>They pressure you to enroll during the first phone call.</li>
          <li>They only show you one carrier's plans.</li>
          <li>They charge you a fee. Brokers are paid by the carrier, not you.</li>
          <li>They cannot clearly explain the difference between a Supplement and an Advantage plan.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why timing matters if you are turning 65
        </h2>
        <p className="mb-3">
          Your Medigap Open Enrollment Period lasts 6 months, starting the month you turn 65 and are enrolled in Part B. During this window, carriers must accept you at standard rates with no health questions.
        </p>
        <p>
          My practice is to have clients apply up to 6 months before their Part B start date. This locks in the rate early and protects you from premium increases before your coverage kicks in. The sooner you lock in, the better your rate.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          2026 Medicare costs you should know
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Part B premium: $185/month</li>
          <li>Part B deductible: $257/year</li>
          <li>Part A deductible: $1,676 per benefit period</li>
          <li>Skilled nursing facility coinsurance (days 21-100): $209.50/day</li>
        </ul>
        <p className="mt-3">
          A Medicare Supplement plan like Plan G covers all of these costs except the Part B deductible. That is a lot of financial exposure eliminated for one predictable monthly premium.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">
          Get a free side-by-side quote from Anthony Orner
        </h2>
        <p className="mb-3">
          I live and work in New Jersey. I know which carriers are competitively priced in Passaic County right now and which ones are raising rates. A five-minute phone call gives you a clear comparison you will not get from a carrier's 800 number.
        </p>
        <p>
          Call me or request a quote online. No pressure, no obligation.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center mb-10">
        <p className="text-xl font-bold mb-2">
          Ready to compare Medicare plans in Passaic County?
        </p>
        <p className="mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-semibold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/contact" className="underline font-semibold">
            Get a Free Quote
          </Link>
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/medicare-guides/medicare-supplement-plans-nj" className="text-blue-600 hover:underline">
              Medicare Supplement Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link href="/medicare-guides/medicare-plan-g-nj" className="text-blue-600 hover:underline">
              Medicare Plan G in NJ - Benefits and Costs
            </Link>
          </li>
          <li>
            <Link href="/medicare-guides/medicare-advantage-plans-nj" className="text-blue-600 hover:underline">
              Medicare Advantage Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link href="/medicare-guides/when-to-enroll-in-medicare" className="text-blue-600 hover:underline">
              When to Enroll in Medicare - Key Dates and Deadlines
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}