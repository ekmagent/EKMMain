import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "find a medicare agent in newark nj | Free No-Obligation Help | MedicareYourself",
  description:
    "Find a medicare agent in Newark NJ — Anthony Orner is an independent broker comparing Medigap and Advantage plans in Essex County. Free consultation today.",
  openGraph: {
    title:
      "find a medicare agent in newark nj | Free No-Obligation Help | MedicareYourself",
    description:
      "Find a medicare agent in Newark NJ — Anthony Orner is an independent broker comparing Medigap and Advantage plans in Essex County. Free consultation today.",
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
      name: "Find a Medicare Agent in Newark NJ",
      item: "https://www.medicareyourself.com/services/find-a-medicare-agent-in-newark-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Find a Medicare Agent in Newark, NJ: Licensed Broker Serving Essex County",
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
    question: "How much does it cost to use a Medicare agent in Newark?",
    answer:
      "Nothing. Licensed Medicare brokers are paid by insurance carriers, not by you. My consultations are free, and there is no obligation to enroll through me.",
  },
  {
    question:
      "What is the difference between a captive agent and an independent broker?",
    answer:
      "A captive agent represents one insurance company and can only show you their plans. An independent broker like me works with multiple carriers, so I can compare options across companies and find the plan that actually fits your situation.",
  },
  {
    question: "When should I contact a Medicare agent before turning 65?",
    answer:
      "Reach out at least 6 months before your 65th birthday. For Medigap plans, I have clients apply up to 6 months before their Part B start date to lock in the best rate early.",
  },
  {
    question: "Can a Medicare broker help me switch plans during open enrollment?",
    answer:
      "Yes. During the Medicare Advantage and Part D open enrollment period (October 15 through December 7), I can review your current plan, compare it to new options, and help you switch if a better fit is available.",
  },
];

export default function FindMedicareAgentNewarkNJ() {
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
            Find a Medicare Agent in Newark NJ
          </span>
        </nav>

        <h1 className="text-3xl font-bold mb-4">
          Find a Medicare Agent in Newark, NJ: Licensed Broker Serving Essex County
        </h1>

        <Image
          src="/images/find-a-medicare-agent-in-newark-nj.webp"
          alt="find a medicare agent in newark nj"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg mb-2">
          Finding a Medicare agent in Newark, NJ doesn't have to mean sorting through directories or sitting on hold with a call center. I'm Anthony Orner, an independent Medicare broker licensed in New Jersey, and I work directly with Newark and Essex County residents to compare plans side by side.
        </p>
        <p className="text-lg mb-6">
          My consultations are free. No sign-up required, no pressure, and no cost to you - ever.
        </p>

        <PhoneCTA />

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Medicare plan options available to Newark residents
        </h2>
        <p className="mb-2">
          Newark falls in Essex County, which gives you access to a solid range of Medicare plans. Here's what I help clients compare:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>
            <strong>Medicare Supplement (Medigap)</strong> - Plans like G and N that cover gaps Original Medicare leaves behind, including the Part A deductible ($1,676 per benefit period in 2026) and skilled nursing coinsurance ($209.50/day for days 21-100).
          </li>
          <li>
            <strong>Medicare Advantage (Part C)</strong> - All-in-one plans from private carriers that often include dental, vision, and prescription drug coverage.
          </li>
          <li>
            <strong>Part D prescription drug plans</strong> - Standalone drug coverage paired with Original Medicare and a Medigap policy.
          </li>
        </ul>
        <p>
          Which option works best depends on your doctors, medications, and budget. That's exactly what we sort out together.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          How an independent broker saves Newark clients money
        </h2>
        <p className="mb-2">
          A captive agent works for one company. I don't. As an independent broker, I compare plans from multiple carriers and show you prices and benefits side by side. You see what each plan actually costs - same plan, different price depending on the carrier.
        </p>
        <p>
          This matters because Medigap Plan G from Carrier A and Plan G from Carrier B cover the exact same benefits. The only difference is the premium. I find you the lowest one.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Common Medicare mistakes Newark enrollees make
        </h2>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>
            <strong>Missing the Medigap Open Enrollment Period.</strong> You get 6 months starting the month you turn 65 and are enrolled in Part B. During this window, no health questions and no higher premiums. Miss it, and carriers can deny you or charge more.
          </li>
          <li>
            <strong>Delaying Part B enrollment.</strong> If you don't have qualifying employer coverage and you delay Part B, you'll pay a 10% penalty for every 12 months you waited - for life.
          </li>
          <li>
            <strong>Choosing a plan based on premium alone.</strong> A $0 premium Advantage plan can cost you more out of pocket if you need surgery, specialist visits, or expensive prescriptions.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Why timing matters if you're turning 65 in Newark
        </h2>
        <p className="mb-2">
          My practice is to have clients apply for their Medigap plan up to 6 months before their Part B start date. This locks in the rate early and protects you from premium increases before coverage even begins.
        </p>
        <p>
          The sooner you lock in, the better your rate. Call me well before your birthday - not after.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          What to expect when you call
        </h2>
        <p className="mb-2">
          Here's how it works. You call or book online. We spend 15-20 minutes reviewing your situation - your doctors, your prescriptions, your budget. I run the numbers and show you real options.
        </p>
        <p>
          No jargon. No sales pitch. If I can help, great. If your current plan is already the best fit, I'll tell you that too.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Book a free Medicare consultation - no sign-up required
        </h2>
        <p className="mb-6">
          Whether you're turning 65 next month or already on Medicare and want a second opinion during open enrollment (October 15 through December 7), I'm here to help. The Part B premium in 2026 is $185/month - let's make sure the rest of your coverage isn't costing more than it should.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-10 text-center">
          <p className="text-xl font-semibold mb-2">
            Talk to a licensed Medicare broker today
          </p>
          <p className="text-lg mb-3">
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
            No obligation. No cost. Real answers about your Medicare options in Newark.
          </p>
        </div>

        <FAQSection faqs={faqs} />

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare-guides/medicare-supplement-plans-nj"
                className="text-blue-700 hover:underline"
              >
                Medicare Supplement Plans in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/medicare-plan-g-nj"
                className="text-blue-700 hover:underline"
              >
                Medicare Plan G in NJ: Benefits and Costs
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
                href="/medicare-guides/when-to-enroll-in-medicare"
                className="text-blue-700 hover:underline"
              >
                When to Enroll in Medicare: Key Dates and Deadlines
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}