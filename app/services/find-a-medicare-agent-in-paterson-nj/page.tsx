import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "find a medicare agent in paterson nj | Free Guidance, No Fees | MedicareYourself",
  description:
    "Find a medicare agent in Paterson NJ — Anthony Orner compares Medigap and Advantage plans across Passaic County carriers. Free, no-obligation consultation.",
  openGraph: {
    title:
      "find a medicare agent in paterson nj | Free Guidance, No Fees | MedicareYourself",
    description:
      "Find a medicare agent in Paterson NJ — Anthony Orner compares Medigap and Advantage plans across Passaic County carriers. Free, no-obligation consultation.",
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
      name: "Find a Medicare Agent in Paterson NJ",
      item: "https://www.medicareyourself.com/services/find-a-medicare-agent-in-paterson-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Find a Medicare Agent in Paterson, NJ: Independent Broker Serving Passaic County",
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
  datePublished: "2025-01-01",
  dateModified: new Date().toISOString().split("T")[0],
};

const faqs = [
  {
    question: "How to pick a Medicare agent?",
    answer:
      "Look for a licensed, independent broker who represents multiple carriers rather than just one company. An independent agent can compare plans side by side and recommend what actually fits your doctors, prescriptions, and budget. Ask if they charge a fee - a legitimate Medicare agent is paid by insurance carriers, not by you.",
  },
  {
    question: "How do I speak to a live person at Medicare?",
    answer:
      "You can call 1-800-MEDICARE (1-800-633-4227) 24 hours a day, 7 days a week. TTY users can dial 1-877-486-2048. However, Medicare representatives cannot recommend specific plans. For personalized plan comparisons, an independent broker like Anthony Orner can walk you through your options at no cost.",
  },
  {
    question:
      "Does it cost extra to use a Medicare agent instead of enrolling on my own?",
    answer:
      "No. Medicare agents are compensated by insurance carriers. Your premium is the same whether you enroll directly with a carrier, through medicare.gov, or with a broker. You get free guidance without paying a penny more.",
  },
  {
    question: "When is the best time to meet with a Medicare agent in Paterson?",
    answer:
      "If you are turning 65, reach out at least 6 months before your Part B start date. This gives you time to compare plans and lock in rates during your Medigap Open Enrollment Period. For existing Medicare beneficiaries, the Annual Enrollment Period runs October 15 through December 7 each year.",
  },
];

export default function FindMedicareAgentPatersonNJ() {
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
          Find a Medicare Agent in Paterson NJ
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Find a Medicare Agent in Paterson, NJ: Independent Broker Serving
        Passaic County
      </h1>

      <Image
        src="/images/find-a-medicare-agent-in-paterson-nj.webp"
        alt="find a medicare agent in paterson nj"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Finding a Medicare agent in Paterson, NJ does not have to be stressful. I am Anthony Orner, a licensed independent Medicare broker serving Paterson and the greater Passaic County area. I compare plans from multiple carriers so you get the right coverage - not just the one plan a captive agent is allowed to sell.
      </p>
      <p className="text-lg mb-6">
        My consultations are always free. No pressure, no fees, no obligation.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare plan options for Paterson and Passaic County residents
        </h2>
        <p className="mb-2">
          Paterson residents turning 65 typically choose between two paths:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong>Original Medicare + Medigap supplement</strong> - Part A and Part B with a supplement plan (like Plan G or Plan N) that covers most or all of your out-of-pocket costs. You add a standalone Part D drug plan separately.
          </li>
          <li>
            <strong>Medicare Advantage (Part C)</strong> - An all-in-one plan from a private carrier that bundles hospital, medical, and usually prescription drug coverage. Many Advantage plans in Passaic County carry $0 premiums but use provider networks.
          </li>
        </ul>
        <p>
          Both options have trade-offs. Which one fits depends on your doctors, your medications, and how you use healthcare.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          How I help Paterson clients choose the right plan
        </h2>
        <p className="mb-2">
          I start by asking about your situation - not by pushing a product. We review your current doctors, prescriptions, and any upcoming procedures. Then I run plan comparisons across every carrier available in Passaic County.
        </p>
        <p>
          You see the costs side by side. I explain what each plan covers and where the gaps are. You decide. That is how this works.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Why an independent broker costs you nothing extra
        </h2>
        <p className="mb-2">
          This surprises people. Whether you enroll through me, call a carrier directly, or sign up on medicare.gov, your monthly premium is identical. Insurance companies pay brokers a commission - it never comes out of your pocket.
        </p>
        <p>
          The difference is you get someone who actually explains your options. A 1-800 number will not do that.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Key numbers every Paterson Medicare beneficiary should know
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>2026 Part B premium: $185/month</li>
          <li>2026 Part B deductible: $257/year</li>
          <li>2026 Part A deductible: $1,676 per benefit period</li>
          <li>
            Skilled nursing coinsurance (days 21-100): $209.50/day without
            supplemental coverage
          </li>
          <li>
            Part B late enrollment penalty: 10% added for every 12 months you
            delayed
          </li>
        </ul>
        <p className="mt-3">
          These costs add up fast. A Medigap plan or the right Advantage plan can shield you from most of them.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Turning 65? Lock in your Medigap rate early
        </h2>
        <p className="mb-2">
          Your Medigap Open Enrollment Period lasts 6 months, starting the month you turn 65 and are enrolled in Part B. During this window, carriers cannot deny you or charge more based on health history. Miss it, and you may face medical underwriting.
        </p>
        <p>
          My practice is to have clients apply up to 6 months before their Part B start date. This locks in your rate early and protects you from premium increases before coverage kicks in. The sooner you act, the better your rate.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Schedule your free Paterson-area Medicare consultation
        </h2>
        <p className="mb-2">
          Whether you live in Paterson, Clifton, Wayne, or anywhere in Passaic County, I am a phone call away. We can meet by phone or video - whatever is easiest for you.
        </p>
        <p>
          Call me at <strong>855-559-1700</strong> or use the link below. No cost, no commitment.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Ready to compare Medicare plans in Paterson?
        </p>
        <p className="mb-4">
          Call <strong>855-559-1700</strong> or get started online.
        </p>
        <Link
          href="/get-a-free-quote"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Get a Free Quote
        </Link>
      </div>

      <section className="mt-12">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-guides/medicare-supplement-plans-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plans in NJ: Complete Guide
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-plan-g-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Plan G in New Jersey: Benefits and Costs
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-plans-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage Plans in NJ: What to Know
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/when-to-enroll-in-medicare"
              className="text-blue-600 hover:underline"
            >
              When to Enroll in Medicare: Enrollment Periods Explained
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}