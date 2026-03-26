import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "how can i save money on my medicare supplement | Free Rate Review | MedicareYourself",
  description:
    "How can I save money on my Medicare Supplement? Switch carriers, stack discounts, or change plan letters. Free rate review shows your actual savings.",
  alternates: { canonical: "https://medicareyourself.com/services/how-can-i-save-money-on-my-medicare-supplement" },
  openGraph: {
    title:
      "how can i save money on my medicare supplement | Free Rate Review | MedicareYourself",
    description:
      "How can I save money on my Medicare Supplement? Switch carriers, stack discounts, or change plan letters. Free rate review shows your actual savings.",
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
      name: "How Can I Save Money on My Medicare Supplement?",
      item: "https://medicareyourself.com/services/how-can-i-save-money-on-my-medicare-supplement",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "How Can I Save Money on My Medicare Supplement? 7 Strategies That Actually Work",
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
};

const faqs = [
  {
    question: "What if I can't afford a Medicare Supplement plan?",
    answer:
      "You may qualify for a Medicare Savings Program through your state, which can help pay Part B premiums and other costs. Medicaid may also cover expenses if your income and resources are limited. If a Plan G premium is too high, Plan N offers lower premiums with small copays at the doctor. Call us at 855-559-1700 and we'll review every option.",
  },
  {
    question:
      "Can I switch Medicare Supplement carriers without losing coverage?",
    answer:
      "Yes. Plan letters are standardized by the federal government, so a Plan G from one carrier covers exactly the same benefits as a Plan G from another. If you qualify medically (or have a guaranteed issue right), you can switch to a lower-cost carrier and keep identical coverage.",
  },
  {
    question: "How often should I compare Medicare Supplement rates?",
    answer:
      "At least once a year, or anytime you receive a rate increase notice. Carriers adjust premiums at different times, so the cheapest option last year may not be the cheapest today. A quick rate comparison takes about 10 minutes.",
  },
  {
    question: "Will switching carriers reset my waiting period?",
    answer:
      "If you've already satisfied any pre-existing condition waiting period on your current plan, that credit transfers to your new carrier. You won't start over.",
  },
];

export default function HowCanISaveMoneyOnMyMedicareSupplement() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        {" > "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>
        {" > "}
        <span className="text-gray-700">
          How Can I Save Money on My Medicare Supplement?
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        How Can I Save Money on My Medicare Supplement? 7 Strategies That
        Actually Work
      </h1>

      <Image
        src="/images/how-can-i-save-money-on-my-medicare-supplement.webp"
        alt="how can i save money on my medicare supplement"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        How can I save money on my Medicare Supplement? Most people overpay
        simply because they never compare after their first enrollment. The
        starting premium isn't the problem. It's the 10-18% annual increases
        that stack up by your mid-70s.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        Here are seven real strategies I use with clients every week.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Switching carriers for the same plan letter at a lower premium
        </h2>
        <p className="text-gray-700 mb-2">
          Plan G from Carrier A covers exactly the same benefits as Plan G from
          Carrier B. That's federal law. The only difference is what they charge
          you.
        </p>
        <p className="text-gray-700">
          I regularly see $40-$80/month differences between carriers in the same
          zip code for identical coverage. If you pass underwriting, switching
          saves you real money with zero coverage loss.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Household, non-smoker, and payment discounts most people miss
        </h2>
        <p className="text-gray-700 mb-2">
          Many carriers offer discounts that aren't advertised. They add up fast:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>
            <strong>Household discount:</strong> 5-7% off if you live with
            another adult, even if they're on a different plan
          </li>
          <li>
            <strong>Non-smoker discount:</strong> available from most carriers if
            you haven't used tobacco in 12+ months
          </li>
          <li>
            <strong>EFT/bank draft discount:</strong> pay by automatic withdrawal
            instead of paper bill for another 2-5% off
          </li>
          <li>
            <strong>Annual pay discount:</strong> some carriers reduce your total
            if you pay the full year upfront
          </li>
        </ul>
        <p className="text-gray-700 mt-2">
          Stacking two or three of these together can cut $15-$30/month off your
          premium.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          When dropping from Plan G to Plan N makes financial sense
        </h2>
        <p className="text-gray-700 mb-2">
          Plan N typically costs $30-$50 less per month than Plan G. The
          tradeoff: you pay the $283 Part B deductible each year plus up to $20
          copays for some office visits.
        </p>
        <p className="text-gray-700">
          If you're healthy and see the doctor a few times a year, Plan N often
          saves $200-$400 annually after those small out-of-pocket costs. It's
          not right for everyone, but the math works for many people.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Understand how your carrier prices by age
        </h2>
        <p className="text-gray-700 mb-2">
          Medigap carriers use one of three pricing methods: attained-age (rate
          goes up as you age), issue-age (locked to the age you bought it), or
          community-rated (same rate for everyone regardless of age).
        </p>
        <p className="text-gray-700">
          Attained-age plans often start cheap and get expensive fast. That
          aggressive introductory premium that looked great at 65 can double by
          78. Knowing your carrier's pricing method tells you whether your rate
          increases are normal or a sign to shop.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Check if you qualify for state savings programs
        </h2>
        <p className="text-gray-700 mb-2">
          Medicare Savings Programs can pay your Part B premium ($202.90/month in
          2026) if your income qualifies. That frees up real budget for your
          Supplement premium.
        </p>
        <p className="text-gray-700">
          Contact your State Medical Assistance office or call us. Many people
          who qualify never apply because they don't know these programs exist.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Request a free rate comparison against your current premium
        </h2>
        <p className="text-gray-700 mb-2">
          The fastest way to know if you're overpaying: tell us your current
          plan letter, carrier, zip code, and what you pay. We'll run a
          comparison across every carrier available in your area.
        </p>
        <p className="text-gray-700">
          Takes about 10 minutes. No obligation. If your current rate is already
          competitive, I'll tell you that too.
        </p>
      </section>

      <div className="mt-12 bg-blue-600 text-white rounded-xl p-8 text-center">
        <p className="text-2xl font-bold mb-2">
          Find out what you could save
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:855-559-1700" className="underline font-semibold">
            855-559-1700
          </a>{" "}
          for a free rate comparison, or{" "}
          <Link href="/quote" className="underline font-semibold">
            get a free quote online
          </Link>
          .
        </p>
        <p className="text-sm opacity-90">
          Anthony Orner, Licensed Medicare Broker
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
              href="/services/switch-medigap-plans"
              className="text-blue-600 hover:underline"
            >
              Switch Medigap Plans — See If You Could Save in 2 Minutes
            </Link>
          </li>
          <li>
            <Link
              href="/services/compare-and-enroll-in-plan-g-online"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plan G: What It Covers and Costs
            </Link>
          </li>
          <li>
            <Link
              href="/services/quickest-way-to-enroll-into-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plan N: Lower Premiums, Small Copays
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/turning-65"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment: When You Have Guaranteed Issue Rights
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-supplement-rate-jumped-why-and-what-can-i-do"
              className="text-blue-600 hover:underline"
            >
              Why Your Medicare Supplement Rate Increased (And What to Do)
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}