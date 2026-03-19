import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare insurance agents in brick new jersey | Free Local Help | MedicareYourself",
  description:
    "Medicare insurance agents in Brick, New Jersey — Anthony Orner is a licensed independent broker serving Ocean County. Compare plans free, no obligation.",
  openGraph: {
    title:
      "medicare insurance agents in brick new jersey | Free Local Help | MedicareYourself",
    description:
      "Medicare insurance agents in Brick, New Jersey — Anthony Orner is a licensed independent broker serving Ocean County. Compare plans free, no obligation.",
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
      name: "Medicare Insurance Agents in Brick, New Jersey",
      item: "https://medicareyourself.com/services/medicare-insurance-agents-in-brick-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Insurance Agents in Brick, New Jersey: Local, Licensed, and Independent",
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
    question: "Should I use an insurance agent for Medicare?",
    answer:
      "Yes. A licensed Medicare agent can compare plans across multiple carriers at no cost to you. Agents are paid by the insurance companies, not by you, so there is no fee for their help. An independent broker like Anthony Orner can show you options from many carriers rather than being limited to one company's products.",
  },
  {
    question: "How do I pick a Medicare agent in Brick, NJ?",
    answer:
      "Look for a broker who is licensed in New Jersey, independent (not captive to one carrier), and willing to explain costs in plain language. Ask if they can show you both Medicare Supplement and Medicare Advantage options. If they only push one type of plan, that is a red flag.",
  },
  {
    question: "Is there a fee to work with a Medicare broker in Brick?",
    answer:
      "No. Independent Medicare brokers are compensated by the insurance carriers. You pay the same premium whether you enroll directly or through a broker. The difference is that a broker does the comparison work for you.",
  },
  {
    question: "When should I contact a Medicare agent before turning 65?",
    answer:
      "Contact an agent at least 6 months before your Part B start date. Anthony's practice is to have clients apply for Medigap plans up to 6 months early, which can lock in a better rate before coverage begins. The earlier you start, the more options you have.",
  },
];

export default function MedicareInsuranceAgentsBrickNJ() {
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
        <span className="text-gray-700">
          Medicare Insurance Agents in Brick, New Jersey
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Medicare Insurance Agents in Brick, New Jersey: Local, Licensed, and Independent
      </h1>

      <Image
        src="/images/medicare-insurance-agents-in-brick-new-jersey.webp"
        alt="Medicare insurance agents in Brick New Jersey"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Medicare insurance agents in Brick, New Jersey can save you real money
        on your monthly premiums, but only if you work with someone who is truly
        independent. I'm Anthony Orner, a licensed Medicare broker serving Ocean
        County. I compare plans from multiple carriers so you don't have to call
        eight different companies yourself.
      </p>
      <p className="text-lg mb-6">
        Every consultation is free. No obligation, no pressure.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why Brick Township residents benefit from an independent broker
        </h2>
        <p className="mb-2">
          A captive agent sells plans from one carrier. I work with over a dozen.
          That means I can show you the actual lowest rate for your situation
          rather than the lowest rate one company happens to offer.
        </p>
        <p>
          Brick has a large retiree population, and many residents stay with
          the same plan year after year without checking if a better rate exists.
          A quick comparison call can fix that.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare Supplement and Advantage options available in Ocean County
        </h2>
        <p className="mb-2">
          Ocean County has strong carrier competition for both Medicare
          Supplement (Medigap) and Medicare Advantage plans. Here's a quick
          breakdown:
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-2">
          <li>
            <strong>Medicare Supplement (Medigap):</strong> Standardized plans
            like Plan G and Plan N that cover gaps in Original Medicare. You
            keep any doctor who accepts Medicare.
          </li>
          <li>
            <strong>Medicare Advantage:</strong> All-in-one plans that often
            include dental, vision, and hearing. Network restrictions apply.
          </li>
          <li>
            <strong>Part D:</strong> Standalone prescription drug coverage,
            needed if you choose a Medigap plan.
          </li>
        </ul>
        <p>I help you figure out which path makes sense for your doctors, medications, and budget.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Average Plan G and Plan N rates for Brick ZIP codes in 2025
        </h2>
        <p className="mb-2">
          Rates vary by carrier, age, gender, and tobacco status. For a 65-year-old
          non-smoker in Brick (ZIP codes 08723, 08724), Plan G premiums from
          competitive carriers typically range from approximately $130 to $210
          per month. Plan N runs lower, often $90 to $160 per month.
        </p>
        <p>
          These are ballpark figures. Rates change quarterly, and your exact
          quote depends on your profile. Call me at 855-559-1700 for a
          real-time comparison.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Lock in your Medigap rate before your Part B starts
        </h2>
        <p className="mb-2">
          If you're turning 65 and planning to enroll in a Medigap plan, timing
          matters. Your Medigap Open Enrollment Period lasts 6 months starting
          the month you turn 65 and are enrolled in Part B. During this window,
          no health questions and no higher premiums.
        </p>
        <p>
          My practice is to have clients apply up to 6 months before their Part
          B start date. This locks in today's rate early, protecting you from
          any premium increases before your coverage kicks in. The sooner you
          lock in, the better your rate.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Key 2026 Medicare costs you should know
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Part B premium: $185/month</li>
          <li>Part B deductible: $257/year</li>
          <li>Part A deductible: $1,676 per benefit period</li>
          <li>Skilled nursing facility coinsurance (days 21-100): $209.50/day</li>
          <li>Medicare Advantage / Part D Open Enrollment: October 15 - December 7</li>
        </ul>
        <p className="mt-2">
          Without a Supplement or Advantage plan, those costs come straight out
          of your pocket. That's exactly why a plan comparison matters.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Book a free phone or in-person Medicare review in Brick
        </h2>
        <p className="mb-2">
          I meet with Brick Township residents by phone, video, or in person -
          whatever works best for you. A typical review takes about 20 minutes.
          I'll pull up current rates, check your doctors and prescriptions, and
          give you a clear recommendation.
        </p>
        <p>
          No cost. No obligation. Just straight answers from someone who does
          this every day.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center my-10">
        <p className="text-xl font-bold mb-2">
          Ready to compare Medicare plans in Brick, NJ?
        </p>
        <p className="mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or request your free quote online.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100"
        >
          Get a Free Quote
        </Link>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-guides/medicare-supplement-plan-g-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plan G in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-supplement-plan-n-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plan N in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-ocean-county"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage Plans in Ocean County
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/when-to-enroll-in-medicare-nj"
              className="text-blue-600 hover:underline"
            >
              When to Enroll in Medicare in New Jersey
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}