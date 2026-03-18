import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "what time of the year can you switch medicare supplement plans | Free Help From a Licensed Broker | MedicareYourself",
  description:
    "What time of year can you switch Medicare Supplement plans? Medigap has no annual enrollment window. Learn when you qualify and get free help from Anthony Orner.",
  openGraph: {
    title:
      "what time of the year can you switch medicare supplement plans | Free Help From a Licensed Broker | MedicareYourself",
    description:
      "What time of year can you switch Medicare Supplement plans? Medigap has no annual enrollment window. Learn when you qualify and get free help from Anthony Orner.",
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
      name: "When Can You Switch Medicare Supplement Plans?",
      item: "https://www.medicareyourself.com/services/what-time-of-year-can-you-switch-medicare-supplement-plans",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Time of the Year Can You Switch Medicare Supplement Plans?",
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
    question: "Can I switch my Medicare Supplement plan at any time?",
    answer:
      "Technically, you can apply to switch any time of year. But outside your initial 6-month Medigap Open Enrollment Period or a guaranteed issue situation, the new carrier can ask health questions and may deny you based on pre-existing conditions.",
  },
  {
    question:
      "Is there an annual enrollment period for Medicare Supplement plans?",
    answer:
      "No. Unlike Medicare Advantage, Medigap has no annual enrollment period. Your main window with guaranteed acceptance is the 6-month Medigap Open Enrollment Period that starts the month you turn 65 and are enrolled in Part B.",
  },
  {
    question: "What triggers guaranteed issue rights for Medigap?",
    answer:
      "Federal guaranteed issue rights apply in specific situations: losing employer or union coverage, losing Medicare Advantage coverage, your carrier going bankrupt, your plan violating its contract, or moving out of your plan's service area. Some states offer additional protections.",
  },
  {
    question: "Will I pay more if I switch Medigap plans after 65?",
    answer:
      "If you pass medical underwriting, you may actually save money by switching to a carrier with lower rates. But if you have health conditions, you could be denied or charged more. A licensed broker can check rates across carriers before you apply.",
  },
];

export default function WhatTimeOfYearSwitchMedigap() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
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
          When Can You Switch Medicare Supplement Plans?
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        What Time of the Year Can You Switch Medicare Supplement Plans?
      </h1>

      <Image
        src="/images/what-time-of-year-can-you-switch-medicare-supplement-plans.webp"
        alt="what time of the year can you switch medicare supplement plans"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        What time of the year can you switch Medicare Supplement plans? The short answer: there's no single annual window like Medicare Advantage has. You can apply year-round, but your rights change depending on when and why you're switching.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        Most people don't realize this until they're staring at a premium increase and wondering what their options are. Let me break it down.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Medigap has no annual enrollment period — here's what that means
        </h2>
        <p className="text-gray-700 mb-2">
          Medicare Advantage has its Open Enrollment from October 15 through December 7 each year. Medigap doesn't work that way. There's no specific season where everyone gets to shop.
        </p>
        <p className="text-gray-700">
          Your main protected window is the 6-month Medigap Open Enrollment Period. It starts the month you turn 65 and are enrolled in Part B. During those six months, no carrier can deny you or charge more for health conditions. After that, the rules shift.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          When you can switch without answering health questions
        </h2>
        <p className="text-gray-700 mb-3">
          Outside your initial enrollment, federal law gives you guaranteed issue rights in specific situations:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-3">
          <li>You're losing employer or union group health coverage</li>
          <li>Your Medicare Advantage plan is leaving your area or shutting down</li>
          <li>Your Medigap carrier goes bankrupt or violates its contract</li>
          <li>You moved out of your plan's service area</li>
        </ul>
        <p className="text-gray-700">
          In these cases, carriers must accept you regardless of health status. Some states offer extra protections beyond federal rules. Rules vary by state, so call to confirm what applies to you.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How medical underwriting works if you missed guaranteed issue
        </h2>
        <p className="text-gray-700 mb-2">
          If none of the guaranteed issue triggers apply, you can still apply to switch. But the new insurance company can ask about your health history. They may approve you, charge a higher rate, or decline your application entirely.
        </p>
        <p className="text-gray-700">
          This is where people get stuck. They see a better rate, apply, and get denied because of diabetes or a heart condition. Always check eligibility before canceling your current plan.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why rate increases make switching worth exploring
        </h2>
        <p className="text-gray-700 mb-2">
          Plan G from one carrier has the exact same medical benefits as Plan G from another. What's different is how they price it over time. Some carriers attract new members with low introductory rates, then raise premiums aggressively as the block ages.
        </p>
        <p className="text-gray-700">
          When age-based increases and block rate increases stack together, 10% to 18% jumps in a single year aren't unusual. That's the kind of increase that makes people pick up the phone.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Don't cancel your current plan until the new one is active
        </h2>
        <p className="text-gray-700 mb-2">
          If you do switch, keep both policies active until the new one is confirmed. According to Medicare.gov, you get a 30-day free look period with your new Medigap policy. You'll pay premiums on both plans during that overlap, but a coverage gap is far worse.
        </p>
        <p className="text-gray-700">
          This is one of those details that sounds minor until it matters a lot.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How Anthony finds a lower rate and handles the switch for you
        </h2>
        <p className="text-gray-700 mb-2">
          I'm Anthony Orner, a licensed Medicare broker. I compare rates across multiple carriers, check whether you'll qualify based on your health, and handle the paperwork if a switch makes sense. If it doesn't make sense, I'll tell you that too.
        </p>
        <p className="text-gray-700">
          There's no fee for my help. The carriers pay me, not you. One call and you'll know exactly where you stand.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center mb-10">
        <p className="text-xl font-semibold mb-2">
          Ready to find out if you can save?
        </p>
        <p className="mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/quote" className="underline font-bold">
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
              href="/services/medicare-supplement-plan-g"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plan G: What It Covers
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-supplement-vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement vs. Medicare Advantage
            </Link>
          </li>
          <li>
            <Link
              href="/services/medigap-open-enrollment-period"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment Period Explained
            </Link>
          </li>
          <li>
            <Link
              href="/services/guaranteed-issue-rights-medicare"
              className="text-blue-600 hover:underline"
            >
              Guaranteed Issue Rights for Medicare Supplement
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}