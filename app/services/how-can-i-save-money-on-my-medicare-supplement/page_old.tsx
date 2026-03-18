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
    "How can I save money on my Medicare Supplement? Switch carriers, stack discounts, or change plan letters. Free rate review shows your actual savings potential.",
  openGraph: {
    title:
      "how can i save money on my medicare supplement | Free Rate Review | MedicareYourself",
    description:
      "How can I save money on my Medicare Supplement? Switch carriers, stack discounts, or change plan letters. Free rate review shows your actual savings potential.",
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
      name: "How Can I Save Money on My Medicare Supplement?",
      item: "https://www.medicareyourself.com/services/how-can-i-save-money-on-my-medicare-supplement",
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
    question: "What if I can't afford a Medicare Supplement plan?",
    answer:
      "If premiums are too high, you have options. You may qualify for a state Medicare Savings Program that helps pay Part B premiums and other costs. Switching to a lower-cost carrier for the same plan letter is another option. You could also consider moving from Plan G to Plan N to reduce your monthly premium. Call us at 855-559-1700 and we will review your situation for free.",
  },
  {
    question: "Can I switch Medicare Supplement carriers without losing coverage?",
    answer:
      "Yes. Every Medigap plan with the same letter provides identical benefits regardless of the carrier. If you qualify medically (or have a guaranteed issue right), you can switch to a cheaper carrier and keep the exact same coverage. Your new policy starts the day the old one ends - no gap.",
  },
  {
    question: "How often should I compare Medicare Supplement rates?",
    answer:
      "At least once a year. Carriers adjust premiums at different rates, so the cheapest option this year may not be the cheapest next year. A quick annual rate comparison can save you hundreds of dollars. We do these comparisons for free - just call 855-559-1700.",
  },
  {
    question: "Will I lose my benefits if I switch to a cheaper Medigap plan?",
    answer:
      "Not if you stay with the same plan letter. A Plan G from one carrier covers the exact same things as a Plan G from another. The only difference is the premium. If you switch plan letters (say, from G to N), the benefits do change slightly, so make sure you understand the tradeoff first.",
  },
];

export default function HowCanISaveMoneyOnMyMedicareSupplement() {
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
          How Can I Save Money on My Medicare Supplement?
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        How Can I Save Money on My Medicare Supplement? 7 Strategies That Actually Work
      </h1>

      <Image
        src="/images/how-can-i-save-money-on-my-medicare-supplement.webp"
        alt="how can I save money on my Medicare Supplement"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg text-gray-700 mb-2">
        How can I save money on my Medicare Supplement without giving up coverage? It is a question I hear almost every week from clients watching their premiums creep up year after year. The good news: there are real, proven strategies that can cut your costs - sometimes by $50 to $100 a month.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        Here are seven approaches I use with my own clients in New Jersey and beyond.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Switching carriers for the same plan letter at a lower premium
        </h2>
        <p className="text-gray-700 mb-2">
          This is the single biggest money saver. A Plan G from Carrier A covers the exact same benefits as a Plan G from Carrier B. The federal government standardizes them. The only difference? The price.
        </p>
        <p className="text-gray-700">
          Carriers price their plans differently based on their own claims experience. So one company might charge $180/month while another charges $260 for identical coverage. If you qualify health-wise, switching is straightforward and there is no gap in coverage.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Household, non-smoker, and payment discounts most people miss
        </h2>
        <p className="text-gray-700 mb-2">
          Many carriers offer discounts that never get applied because nobody asks. Common ones include:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Household discount (5-7% off when two people in the same home have policies)</li>
          <li>Non-smoker discount</li>
          <li>Electronic funds transfer (EFT) or autopay discount</li>
          <li>Annual pay discount (pay the full year upfront for a reduced total)</li>
        </ul>
        <p className="text-gray-700 mt-2">
          Stacking two or three of these together adds up fast.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          When dropping from Plan G to Plan N makes financial sense
        </h2>
        <p className="text-gray-700 mb-2">
          Plan N costs less per month than Plan G. The tradeoff: you pay the $257 annual Part B deductible yourself, plus up to $20 copays for some office visits and $50 for ER visits that do not result in an admission.
        </p>
        <p className="text-gray-700">
          If those small out-of-pocket costs add up to less than the premium difference, Plan N saves you money. For healthy people who see the doctor a few times a year, this math often works out.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Check if you qualify for a state Medicare Savings Program
        </h2>
        <p className="text-gray-700 mb-2">
          State-run Medicare Savings Programs can help pay your Part B premium ($185/month in 2026) and possibly other costs. Eligibility depends on your income and resources. Many people who qualify never apply because they do not know these programs exist.
        </p>
        <p className="text-gray-700">
          Contact your State Medical Assistance office or call us and we can point you in the right direction.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Avoid late enrollment penalties that inflate your costs forever
        </h2>
        <p className="text-gray-700 mb-2">
          The Part B late enrollment penalty adds 10% to your premium for every 12-month period you delayed enrollment without qualifying coverage. That penalty never goes away.
        </p>
        <p className="text-gray-700">
          Enrolling on time is one of the simplest ways to keep your total Medicare costs down for life.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Request a free rate comparison against your current premium
        </h2>
        <p className="text-gray-700 mb-2">
          The fastest way to find out if you are overpaying? Let us compare your current Medigap premium against every carrier available in your area. It takes about five minutes on the phone.
        </p>
        <p className="text-gray-700">
          I do this for clients every day. There is no cost, no obligation, and no pressure. Call 855-559-1700 and tell me what you are paying - I will tell you if we can beat it.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center my-10">
        <p className="text-xl font-semibold text-blue-900 mb-2">
          Find out how much you could save - in 5 minutes
        </p>
        <p className="text-blue-800 mb-4">
          Call{" "}
          <a
            href="tel:8555591700"
            className="font-bold underline"
          >
            855-559-1700
          </a>{" "}
          or{" "}
          <Link
            href="/quote"
            className="font-bold underline"
          >
            get a free quote online
          </Link>
          .
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Related resources
        </h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/services/medicare-plan-g"
              className="text-blue-700 hover:underline"
            >
              Medicare Plan G - Benefits, Costs, and How It Works
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-plan-n"
              className="text-blue-700 hover:underline"
            >
              Medicare Plan N - What It Covers and Who It Is Best For
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-supplement-vs-medicare-advantage"
              className="text-blue-700 hover:underline"
            >
              Medicare Supplement vs Medicare Advantage - Which Is Right for You?
            </Link>
          </li>
          <li>
            <Link
              href="/services/medigap-open-enrollment"
              className="text-blue-700 hover:underline"
            >
              Medigap Open Enrollment - When and Why It Matters
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}