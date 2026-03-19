import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "help with your medicare decision | Free, No-Pressure Guidance | MedicareYourself",
  description:
    "Help with your Medicare decision from a licensed independent broker. Anthony Orner explains every option clearly. Schedule a free consultation today.",
  openGraph: {
    title:
      "help with your medicare decision | Free, No-Pressure Guidance | MedicareYourself",
    description:
      "Help with your Medicare decision from a licensed independent broker. Anthony Orner explains every option clearly. Schedule a free consultation today.",
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
      name: "Help with Your Medicare Decision",
      item: "https://medicareyourself.com/services/help-with-your-medicare-decision",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Help with Your Medicare Decision: Unbiased Guidance from a Licensed Broker",
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
    question: "Can I get help with my Medicare decision for free?",
    answer:
      "Yes. Licensed independent brokers like Anthony Orner are paid by the insurance carriers, not by you. A consultation costs you nothing and there is no obligation to enroll in any plan.",
  },
  {
    question:
      "What is the difference between an independent broker and a captive agent?",
    answer:
      "An independent broker represents multiple carriers and can show you plans from different companies side by side. A captive agent works for one company and can only offer that company's products.",
  },
  {
    question: "When should I start making my Medicare decision?",
    answer:
      "Start at least 3 to 6 months before your 65th birthday or your Part B start date. This gives you enough time to compare options and, if you choose a Medigap plan, apply early to lock in rates before coverage begins.",
  },
  {
    question: "Does Medicare.gov offer decision-making help?",
    answer:
      "Medicare.gov has plan comparison tools and a 24/7 helpline at 1-800-633-4227. Your state also has a free State Health Insurance Assistance Program (SHIP) that provides unbiased counseling. Working with a licensed broker gives you an additional layer of personalized guidance.",
  },
];

export default function HelpWithYourMedicareDecision() {
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
        <span className="text-gray-700">Help with Your Medicare Decision</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Help with Your Medicare Decision: Unbiased Guidance from a Licensed
        Broker
      </h1>

      <Image
        src="/images/help-with-your-medicare-decision.webp"
        alt="help with your medicare decision"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg text-gray-700 mb-2">
        Help with your Medicare decision starts with understanding two paths:
        Original Medicare with a Supplement, or Medicare Advantage. Both are
        legitimate. Neither is universally "better."
      </p>
      <p className="text-lg text-gray-700 mb-6">
        I'm Anthony Orner, a licensed independent broker in New Jersey. I walk
        people through this choice every day, and I never charge a fee. Let me
        show you how the decision actually breaks down.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Original Medicare + Supplement vs. Medicare Advantage - laid out
          clearly
        </h2>
        <p className="text-gray-700 mb-2">
          Original Medicare (Parts A and B) lets you see any doctor who accepts
          Medicare nationwide. You pay the Part B deductible of $257 per year,
          then typically 20% of approved services. A Medigap plan like Plan G
          covers most or all of that 20%.
        </p>
        <p className="text-gray-700">
          Medicare Advantage (Part C) bundles everything into one plan, often
          with $0 premiums and extras like dental or vision. The trade-off?
          You're limited to a network, and you'll pay copays and coinsurance per
          service. One isn't a scam. They just work differently.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Key factors that change which path is right for you
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Your doctors.</strong> If your specialists are out of
            network on local Advantage plans, Original Medicare + Supplement
            gives you full freedom.
          </li>
          <li>
            <strong>Your budget.</strong> Can you handle the $185/month Part B
            premium plus a Supplement premium? Or do you need the lowest
            possible monthly cost right now?
          </li>
          <li>
            <strong>Your health.</strong> If you use a lot of services, a
            Supplement protects you from high out-of-pocket costs. Advantage
            plans have annual out-of-pocket maximums but the bills can still add
            up.
          </li>
          <li>
            <strong>Travel.</strong> Spend winters in Florida? Original Medicare
            works everywhere. Most Advantage plans don't.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Common mistakes people make when choosing for the first time
        </h2>
        <p className="text-gray-700 mb-2">
          The biggest mistake: waiting too long. Your Medigap Open Enrollment
          Period lasts 6 months starting the month you turn 65 and are enrolled
          in Part B. During that window, no health questions, no higher
          premiums. Miss it, and carriers can decline you or charge more.
        </p>
        <p className="text-gray-700">
          Another common one: picking a plan based only on the premium. A $0
          premium Advantage plan sounds great until a hospital stay hits you with
          thousands in copays. Always look at total potential costs, not just the
          monthly number.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why an independent broker gives you a clearer picture
        </h2>
        <p className="text-gray-700 mb-2">
          I represent multiple carriers. That means I can show you Plan G quotes
          from several companies, compare Advantage plans head to head, and tell
          you which one actually fits your situation. I'm not pushing one
          product.
        </p>
        <p className="text-gray-700">
          Medicare.gov has useful comparison tools, and your state SHIP program
          offers free counseling too. A broker adds personalized advice on top of
          those resources.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Lock in your Medigap rate before Part B starts
        </h2>
        <p className="text-gray-700 mb-2">
          Here's something most people don't know: you can apply for a Medigap
          plan up to 6 months before your Part B start date. I have my clients
          do exactly that. It locks in today's rate and protects you from premium
          increases before coverage kicks in.
        </p>
        <p className="text-gray-700">
          If you're turning 65 in the next few months, the clock is already
          running. The sooner you lock in, the better your rate.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Book a free 15-minute Medicare decision call
        </h2>
        <p className="text-gray-700">
          No sales pitch. No pressure. Just 15 minutes where I answer your
          specific questions and lay out your real options. Call me at{" "}
          <a
            href="tel:8555591700"
            className="text-blue-600 font-semibold hover:underline"
          >
            855-559-1700
          </a>{" "}
          or use the link below to schedule a time that works for you.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center mb-10">
        <p className="text-xl font-semibold text-gray-900 mb-2">
          Ready for real answers about your Medicare options?
        </p>
        <p className="text-gray-700 mb-4">
          Call{" "}
          <a
            href="tel:8555591700"
            className="text-blue-600 font-semibold hover:underline"
          >
            855-559-1700
          </a>{" "}
          or schedule online.
        </p>
        <Link
          href="/get-a-free-quote"
          className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Get a Free Quote
        </Link>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Related resources
        </h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-guides/medicare-supplement-vs-advantage"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement vs. Medicare Advantage: Full Comparison
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medigap-plan-g"
              className="text-blue-600 hover:underline"
            >
              Medicare Plan G: What It Covers and What It Costs
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/when-to-enroll-in-medicare"
              className="text-blue-600 hover:underline"
            >
              When to Enroll in Medicare: Key Dates and Deadlines
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-blue-600 hover:underline"
            >
              About Anthony Orner - Licensed Medicare Broker
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}