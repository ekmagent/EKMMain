import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "What Time of the Year Can You Switch Medicare Supplement Plans | Know Your Rights | MedicareYourself",
  description:
    "What time of year can you switch Medicare Supplement plans? Medigap rules differ from Advantage. Learn when you qualify and switch for free with Anthony Orner.",
  openGraph: {
    title:
      "What Time of the Year Can You Switch Medicare Supplement Plans | Know Your Rights | MedicareYourself",
    description:
      "What time of year can you switch Medicare Supplement plans? Medigap rules differ from Advantage. Learn when you qualify and switch for free with Anthony Orner.",
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
      item: "https://www.medicareyourself.com/hub",
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
  description:
    "What time of year can you switch Medicare Supplement plans? Medigap rules differ from Advantage. Learn when you qualify and switch for free with Anthony Orner.",
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
    question:
      "Can you change your Medicare Supplement plan anytime of the year?",
    answer:
      "Technically yes, you can apply for a new Medigap policy any time of year. However, outside of your initial 6-month Medigap Open Enrollment Period or a guaranteed issue situation, insurance companies can use medical underwriting to deny your application or charge higher premiums based on your health.",
  },
  {
    question:
      "What is the difference between Medigap open enrollment and Medicare Advantage open enrollment?",
    answer:
      "Medicare Advantage has an Annual Enrollment Period each fall (October 15 through December 7) when you can switch plans. Medigap has no annual enrollment period. Your best window is the one-time, 6-month Medigap Open Enrollment Period that starts when you turn 65 and enroll in Part B.",
  },
  {
    question: "Does New Jersey have special Medigap switching rules?",
    answer:
      "Yes. New Jersey offers year-round guaranteed issue rights for Medigap. This means NJ residents can switch Medigap plans at any time without answering health questions or being denied coverage, which is a significant protection not available in most states.",
  },
  {
    question: "Should I cancel my current Medigap plan before the new one starts?",
    answer:
      "No. Keep your current policy active until the new one is confirmed and in effect. When your new policy arrives, you have a 30-day free look period to decide if you want to keep it. You will pay both premiums during the overlap month, but that protects you from any gap in coverage.",
  },
];

export default function WhatTimeOfYearCanYouSwitchMedigapPlans() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />

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
          When Can You Switch Medicare Supplement Plans?
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        What Time of the Year Can You Switch Medicare Supplement Plans?
      </h1>

      <Image
        src="/images/hub_what-time-of-year-can-you-switch-medicare-supplement-plans.webp"
        alt="what time of the year can you switch medicare supplement plans"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        If you are wondering what time of the year you can switch Medicare Supplement plans, the short answer might surprise you: there is no single annual window like Medicare Advantage has. Medigap plays by different rules, and the timing depends entirely on your personal situation and your state.
      </p>
      <p className="text-lg mb-6">
        I am Anthony Orner, a licensed Medicare broker, and I help people sort through these rules every day. Let me break it down clearly.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medigap has no annual enrollment period - here is what that means
        </h2>
        <p className="mb-3">
          Medicare Advantage has the Annual Enrollment Period every October 15 through December 7. Many people assume Medigap works the same way. It does not.
        </p>
        <p className="mb-3">
          Medigap policies can be applied for at any point during the year. There is no single fall window you need to wait for. But "can apply" and "will be accepted" are two very different things.
        </p>
        <p>
          Your ability to switch without obstacles depends on whether you have guaranteed issue rights or if your state provides extra protections.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          When you can switch without answering health questions
        </h2>
        <p className="mb-3">
          Federal law gives you guaranteed issue rights in specific situations. During these windows, an insurance company cannot deny you a Medigap policy or charge you more because of pre-existing conditions.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-3">
          <li>
            <strong>Your 6-month Medigap Open Enrollment Period:</strong> This starts the month you turn 65 and are enrolled in Part B. Best rates, no health questions, guaranteed acceptance.
          </li>
          <li>
            <strong>Your Medicare Advantage plan leaves your area</strong> or stops providing coverage - you get a guaranteed issue right to pick up a Medigap plan.
          </li>
          <li>
            <strong>You joined a Medicare Advantage plan when first eligible</strong> and want to switch back to Original Medicare within 12 months.
          </li>
          <li>
            <strong>Your Medigap insurer goes bankrupt</strong> or you were misled when you bought your current policy.
          </li>
        </ul>
        <p>
          These rights are federal, meaning they apply in every state. But some states go further.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          New Jersey residents have year-round guaranteed issue
        </h2>
        <p className="mb-3">
          If you live in NJ, you have a major advantage. New Jersey offers year-round guaranteed issue for Medigap policies. You can switch plans any time of year without answering health questions and without being denied.
        </p>
        <p>
          This is not the norm. Most states only offer guaranteed issue during your initial 6-month window or in the specific situations listed above. NJ, along with a handful of other states, provides much stronger consumer protections.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How medical underwriting works if you missed guaranteed issue
        </h2>
        <p className="mb-3">
          Outside of a guaranteed issue period (and outside of states like NJ), insurance companies can ask about your health history. This process is called medical underwriting.
        </p>
        <p className="mb-3">
          They can deny your application, charge higher premiums, or exclude pre-existing conditions based on your answers. Common deal-breakers include diabetes with insulin, COPD, recent cancer treatment, and heart disease.
        </p>
        <p>
          That said, some carriers are more lenient than others. This is where working with a broker who knows the underwriting guidelines for each company makes a real difference.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Do not cancel your current plan until the new one is active
        </h2>
        <p className="mb-3">
          One mistake I see often: people cancel their existing Medigap policy before the new one is confirmed. Do not do this.
        </p>
        <p className="mb-3">
          When your new policy arrives, you get a 30-day free look period to decide if you want to keep it. During that month, yes, you will pay two premiums. That small overlap cost protects you from ending up with no supplemental coverage if something goes wrong with the new application.
        </p>
        <p>
          Only cancel your old policy once you are certain the new one is in place.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">
          How Anthony finds a lower rate and handles the switch for you
        </h2>
        <p className="mb-3">
          I compare rates across multiple carriers for your specific age, ZIP code, and health profile. If a better rate exists, I will find it. If medical underwriting is required, I know which companies are most likely to approve you.
        </p>
        <p className="mb-3">
          The entire process is free to you. I handle the paperwork, coordinate the timing, and make sure you are never without coverage during the transition.
        </p>
        <p>
          Call me at <strong>855-559-1700</strong> and I will tell you exactly where you stand and what your options are.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-8 text-center mb-10">
        <p className="text-xl font-semibold mb-3">
          Ready to see if you can save on your Medigap plan?
        </p>
        <p className="mb-4">
          Call{" "}
          <a
            href="tel:8555591700"
            className="underline font-bold text-white"
          >
            855-559-1700
          </a>{" "}
          for a free, no-pressure rate comparison.
        </p>
        <Link
          href="/quote"
          className="inline-block bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Get a Free Quote
        </Link>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-3">
          <li>
            <Link
              href="/services/medicare-supplement-plan-g"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plan G: What It Covers and What It Costs
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-supplement-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plan N: Is It Right for You?
            </Link>
          </li>
          <li>
            <Link
              href="/services/medigap-open-enrollment-period"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment Period: Your Best Window for Coverage
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-advantage-vs-medigap"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage vs. Medigap: How to Decide
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}