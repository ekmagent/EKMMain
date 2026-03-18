import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare Supplement for Seniors Turning 65 | Lock in Low Rates Free | MedicareYourself",
  description:
    "Medicare supplement for seniors turning 65 — lock in guaranteed-issue rates during open enrollment. Anthony Orner compares top carriers. Free quote in minutes.",
  openGraph: {
    title:
      "Medicare Supplement for Seniors Turning 65 | Lock in Low Rates Free | MedicareYourself",
    description:
      "Medicare supplement for seniors turning 65 — lock in guaranteed-issue rates during open enrollment. Anthony Orner compares top carriers. Free quote in minutes.",
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
      name: "Medicare Supplement for Seniors Turning 65",
      item: "https://www.medicareyourself.com/services/medicare-supplement-for-seniors-turning-65",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Supplement for Seniors Turning 65: Your One Best Window for Low Rates",
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
    question: "How much does a Medicare Supplement cost at age 65?",
    answer:
      "Rates vary by carrier, plan letter, zip code, and tobacco status. At 65, you're entering at the lowest age-based rate most carriers offer. I compare plans from multiple carriers to find your best rate - call 855-559-1700 for a free quote.",
  },
  {
    question:
      "What happens if I miss my Medigap open enrollment period?",
    answer:
      "After your 6-month Medigap open enrollment window closes, carriers can ask health questions and deny coverage or charge higher premiums based on pre-existing conditions. This window only opens once - when you're first 65 and enrolled in Part B.",
  },
  {
    question: "Can I apply for a Medicare Supplement before I turn 65?",
    answer:
      "Yes. My practice is to have clients apply up to 6 months before their Part B start date. This locks in your rate early and protects you from premium increases before coverage begins.",
  },
  {
    question: "Is Plan G or Plan N better for someone turning 65?",
    answer:
      "Plan G covers everything after the $283 annual Part B deductible - no copays, no surprises. Plan N has lower premiums but charges up to $20 copays for some office visits and up to $50 for ER visits that don't result in admission. Your answer depends on how often you see doctors and how much predictability you want.",
  },
];

export default function MedicareSupplementSeniorsTurning65() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        {" > "}
        <Link href="/medicare-guides" className="hover:underline">
          Medicare Guides
        </Link>
        {" > "}
        <span className="text-gray-700">
          Medicare Supplement for Seniors Turning 65
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
        Medicare Supplement for Seniors Turning 65: Your One Best Window for Low
        Rates
      </h1>

      <Image
        src="/images/medicare-supplement-for-seniors-turning-65.webp"
        alt="Medicare supplement for seniors turning 65"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg text-gray-700 mb-2">
        Medicare supplement for seniors turning 65 comes down to one thing most
        people learn too late: your enrollment timing controls your rate for
        life. The 6-month window after you turn 65 and enroll in Part B is the
        only time every carrier must accept you at the lowest price, no health
        questions asked.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        I'm Anthony Orner, a licensed Medicare broker in NJ. I help clients
        apply up to 6 months before their Part B start date to lock in rates
        early. The sooner you apply, the better your rate.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Why your 6-month open enrollment window is worth protecting
        </h2>
        <p className="text-gray-700 mb-2">
          Your Medigap Open Enrollment Period starts the month you turn 65 and
          are enrolled in Part B. It lasts exactly 6 months. During this window,
          carriers cannot turn you down, charge more for health conditions, or
          impose waiting periods.
        </p>
        <p className="text-gray-700">
          Miss it, and you'll face medical underwriting. I've talked to people
          who switched to a Medicare Advantage plan, then wanted their
          Supplement back a few years later - only to be denied because of
          conditions like diabetes or heart disease. That window doesn't reopen.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Plan G vs Plan N for new enrollees at 65
        </h2>
        <p className="text-gray-700 mb-3">
          Both are strong choices. Here's the real difference:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-3">
          <li>
            <strong>Plan G:</strong> You pay the $283/year Part B deductible.
            After that, everything is covered. No copays at the doctor. No
            surprise bills.
          </li>
          <li>
            <strong>Plan N:</strong> Lower monthly premium, but you may owe up
            to $20 copays for some office visits and up to $50 for ER visits
            that don't lead to admission.
          </li>
        </ul>
        <p className="text-gray-700">
          If you see specialists often or want total predictability, Plan G
          usually wins. If you're healthy and want to save on the monthly
          premium, Plan N is worth quoting.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          How attained-age pricing affects your premium every year
        </h2>
        <p className="text-gray-700 mb-2">
          Most Medigap plans use attained-age pricing. That means your premium
          goes up as you get older - not just from inflation, but because
          you've aged another year. It's predictable, but it stacks.
        </p>
        <p className="text-gray-700">
          On top of that, carriers can raise rates for your entire block of
          policyholders when claims increase. When age increases and block
          increases hit in the same year, 10-18% jumps aren't unusual. This is
          why choosing a carrier with stable long-term pricing matters more than
          picking whoever has the cheapest rate today.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Step-by-step enrollment timeline before your 65th birthday
        </h2>
        <ul className="list-decimal pl-6 text-gray-700 space-y-2">
          <li>
            <strong>6 months before turning 65:</strong> Call me. We'll compare
            carriers and apply early to lock in your rate.
          </li>
          <li>
            <strong>3 months before:</strong> Sign up for Medicare Parts A and B
            through Social Security (your Initial Enrollment Period starts 3
            months before your birthday month).
          </li>
          <li>
            <strong>Your birthday month:</strong> Your Medigap Open Enrollment
            starts. If you applied early, your plan is already in place.
          </li>
          <li>
            <strong>Within 6 months after Part B starts:</strong> Last chance to
            enroll with guaranteed issue rights.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          The carrier matters more than the letter
        </h2>
        <p className="text-gray-700 mb-2">
          Plan G is standardized by Medicare. Every carrier's Plan G covers the
          exact same benefits. What's different is how they price it over time.
        </p>
        <p className="text-gray-700">
          Some carriers price low to attract new enrollees, then raise rates
          aggressively. Others start slightly higher but hold steadier over 10
          or 15 years. I track carrier rate histories so you're not chasing the
          cheapest quote today and paying for it at 75.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Still working at 65? Here's what changes
        </h2>
        <p className="text-gray-700 mb-2">
          If you have employer coverage when you turn 65, you can delay Part B
          without penalty. But delaying Part B also delays your Medigap open
          enrollment window.
        </p>
        <p className="text-gray-700">
          Once you retire and enroll in Part B, your 6-month guaranteed issue
          window starts then. Don't wait until after you've left the job to
          start planning - call ahead so we can line everything up.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center mb-10">
        <p className="text-xl font-semibold text-blue-900 mb-2">
          Ready to lock in your rate before 65?
        </p>
        <p className="text-gray-700 mb-4">
          I compare plans from multiple carriers at no cost to you. One call,
          real answers.
        </p>
        <a
          href="tel:855-559-1700"
          className="text-2xl font-bold text-blue-700 hover:underline block mb-2"
        >
          855-559-1700
        </a>
        <Link
          href="/contact"
          className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Get a Free Quote
        </Link>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          Related resources
        </h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/services/medicare-plan-g"
              className="text-blue-600 hover:underline"
            >
              Medicare Plan G: What It Covers and What It Costs
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medicare Plan N: Lower Premiums with Small Copays
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-supplement-vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement vs Medicare Advantage: Which Is Right for You?
            </Link>
          </li>
          <li>
            <Link
              href="/services/medigap-open-enrollment"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment: What You Need to Know
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}