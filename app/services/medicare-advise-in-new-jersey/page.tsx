import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare advise in new jersey | Free Expert Guidance | MedicareYourself",
  description:
    "Medicare advice in New Jersey from licensed broker Anthony Orner. Unbiased guidance on Medigap, Advantage, and Part D plans. Free consultation available.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-advise-in-new-jersey" },
  openGraph: {
    title:
      "medicare advise in new jersey | Free Expert Guidance | MedicareYourself",
    description:
      "Medicare advice in New Jersey from licensed broker Anthony Orner. Unbiased guidance on Medigap, Advantage, and Part D plans. Free consultation available.",
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
      name: "Medicare Advice in New Jersey",
      item: "https://medicareyourself.com/services/medicare-advise-in-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Medicare Advice in New Jersey from a Licensed Independent Broker",
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
    "https://medicareyourself.com/services/medicare-advise-in-new-jersey",
};

const faqs = [
  {
    question: "What is the New Jersey Medicare advisory?",
    answer:
      "New Jersey offers SHIP (State Health Insurance Assistance Program) counselors who provide free Medicare guidance. You can also work with a licensed independent broker like Anthony Orner, who compares plans across multiple carriers at no cost to you.",
  },
  {
    question: "What is the best Medicare plan in New Jersey?",
    answer:
      "There's no single best plan for everyone. If you want predictable costs and freedom to see any doctor who accepts Medicare, Medigap Plan G paired with a Part D drug plan is a strong choice. If you prefer lower premiums with bundled benefits like dental, a Medicare Advantage plan may work. The right answer depends on your doctors, prescriptions, and budget.",
  },
  {
    question:
      "Can I get Medicare advice in New Jersey without being sold something?",
    answer:
      "Yes. Anthony Orner offers free, no-obligation consultations. As an independent broker licensed with every major carrier in New Jersey, he's paid the same regardless of which plan you choose, so there's no incentive to push one over another.",
  },
  {
    question: "When should I start getting Medicare advice before I turn 65?",
    answer:
      "Start at least 3 months before your 65th birthday. Your Initial Enrollment Period begins 3 months before the month you turn 65 and ends 3 months after. If you want Medigap coverage, your 6-month open enrollment window starts when you're both 65 and enrolled in Part B, so timing matters.",
  },
];

export default function MedicareAdviseInNewJersey() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">Medicare Advice in New Jersey</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Medicare Advice in New Jersey from a Licensed Independent Broker
      </h1>

      <Image
        src="/images/hub_medicare-advise-in-new-jersey.webp"
        alt="medicare advise in new jersey"
        width={800}
        height={400}
        className="w-full h-auto rounded-lg mb-6"
      />

      <p className="text-lg mb-2">
        Medicare advice in New Jersey shouldn't require a decoder ring. But most
        people turning 65 say the same thing: "I thought I understood insurance
        until I hit Medicare." I'm Anthony Orner, an independent broker licensed
        across NJ, and I help people cut through the confusion without charging a
        dime.
      </p>

      <PhoneCTA />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Common Medicare questions NJ residents ask at 65
        </h2>
        <p className="mb-2">
          The questions I hear most often from folks in Bergen County, Monmouth
          County, and everywhere in between:
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-2">
          <li>Do I need Part B if I'm still working with employer coverage?</li>
          <li>
            What's the Part B late enrollment penalty? (10% per 12-month period
            you delayed)
          </li>
          <li>Should I get Medigap or Medicare Advantage?</li>
          <li>How do I pick a Part D drug plan that covers my medications?</li>
        </ul>
        <p>
          If you're still working at 65, you can enroll in Part A (free) and
          delay Part B without penalty as long as you have creditable employer
          coverage. The details matter. One wrong assumption can cost you for
          years.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medigap vs. Medicare Advantage: which path fits your situation
        </h2>
        <p className="mb-2">
          Medigap Plan G plus a standalone Part D plan gives you freedom to see
          any doctor who accepts Medicare, anywhere in the country. You pay
          higher monthly premiums but your out-of-pocket costs stay predictable.
          For 2026, you'd cover the $283 Part B deductible and Plan G handles
          the rest.
        </p>
        <p>
          Medicare Advantage bundles medical, drug, and often dental/vision into
          one plan with lower premiums. The trade-off: provider networks,
          referrals, and prior authorizations. For people who need ongoing dental
          work or want the simplicity of a single card, Advantage can make
          sense. Neither choice is universally "better." Your doctors, your
          prescriptions, and your tolerance for surprise bills should drive the
          decision.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How Anthony Orner helps you avoid costly enrollment mistakes
        </h2>
        <p className="mb-2">
          I'm licensed with every major carrier in New Jersey. That means I
          compare Cigna, UnitedHealthcare, Aetna, Humana, Horizon, and others
          side by side. I don't work for any of them. I work for you.
        </p>
        <p>
          The most expensive mistake I see: missing your Medigap open enrollment
          window. That 6-month period starts the month you turn 65 and are
          enrolled in Part B. During that window, carriers must accept you
          regardless of health history. After it closes, they can deny you or
          charge more. I make sure your timing is right.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Key 2026 Medicare costs you should know
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Part B premium: $202.90/month</li>
          <li>Part B deductible: $283/year</li>
          <li>Part A deductible: $1,676 per benefit period</li>
          <li>Skilled nursing coinsurance (days 21-100): $209.50/day</li>
          <li>
            Open Enrollment for Advantage and Part D: October 15 through
            December 7
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why independent advice beats a 1-800 number
        </h2>
        <p>
          Call a carrier's hotline and they'll only tell you about their plans.
          Call me and I'll show you what every carrier offers for your zip code,
          your medications, and your doctors. Same cost to you either way,
          because brokers are paid by the carriers. The difference is you get the
          full picture instead of one company's sales pitch.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Request free Medicare advice — no obligation, no pressure
        </h2>
        <p>
          You don't need to figure this out alone. Whether you're three months
          from 65 or already enrolled and wondering if you picked the right plan,
          I'll walk you through your options in plain English. One phone call.
          No charge. No pressure.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center mb-8">
        <p className="text-xl font-bold mb-2">
          Talk to Anthony Orner — Free Medicare Guidance
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/contact" className="underline font-bold">
            Get a Free Quote
          </Link>
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medigap Plan G in New Jersey: What It Covers and What It Costs
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage vs. Medigap: How to Decide
            </Link>
          </li>
          <li>
            <Link
              href="/learn/medicare-parts-explained"
              className="text-blue-600 hover:underline"
            >
              Choosing the Right Part D Plan for Your Medications
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/turning-65"
              className="text-blue-600 hover:underline"
            >
              Turning 65 Medicare Checklist: What to Do and When
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}