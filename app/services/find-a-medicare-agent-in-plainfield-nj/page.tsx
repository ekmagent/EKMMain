import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "find a medicare agent in plainfield nj | Free Broker Consultation | MedicareYourself",
  description:
    "Find a Medicare agent in Plainfield, NJ who compares rates from top carriers at no cost. Anthony Orner offers free consultations for Union County residents.",
  alternates: { canonical: "https://medicareyourself.com/services/find-a-medicare-agent-in-plainfield-nj" },
  openGraph: {
    title:
      "find a medicare agent in plainfield nj | Free Broker Consultation | MedicareYourself",
    description:
      "Find a Medicare agent in Plainfield, NJ who compares rates from top carriers at no cost. Anthony Orner offers free consultations for Union County residents.",
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
      name: "Find a Medicare Agent in Plainfield, NJ",
      item: "https://medicareyourself.com/services/find-a-medicare-agent-in-plainfield-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Find a Medicare Agent in Plainfield, NJ for Honest, No-Cost Plan Guidance",
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
    question: "How much does it cost to use a Medicare agent in Plainfield, NJ?",
    answer:
      "Nothing. Independent Medicare brokers are paid by the insurance carriers, not by you. Your premiums stay the same whether you enroll directly or through a licensed agent.",
  },
  {
    question:
      "What's the difference between a Medicare agent and a Medicare broker?",
    answer:
      "A captive agent represents one insurance company. An independent broker compares plans from multiple carriers and recommends the best fit for your situation. You get broader options with a broker.",
  },
  {
    question: "When can I change my Medicare plan in New Jersey?",
    answer:
      "Medicare Advantage and Part D Open Enrollment runs October 15 through December 7 each year. Medigap Open Enrollment is the 6 months starting the month you turn 65 and are enrolled in Part B. Certain qualifying events may trigger Special Enrollment Periods year-round.",
  },
  {
    question: "Can a Plainfield Medicare agent help me if I already have coverage?",
    answer:
      "Yes. If your current plan dropped a provider, raised costs, or stopped covering a medication, a broker can review your options during the next enrollment window or check whether you qualify for a Special Enrollment Period.",
  },
];

export default function FindMedicareAgentPlainfieldNJ() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Find a Medicare Agent in Plainfield, NJ
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Find a Medicare Agent in Plainfield, NJ for Honest, No-Cost Plan
        Guidance
      </h1>

      <Image
        src="/images/find-a-medicare-agent-in-plainfield-nj.webp"
        alt="find a medicare agent in plainfield nj"
        width={800}
        height={400}
        className="w-full h-auto rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        Finding a Medicare agent in Plainfield, NJ shouldn't mean guessing which
        carrier's 1-800 number to call. You deserve someone local who compares
        plans across multiple insurers and tells you the truth about what each
        one actually covers.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        I'm Anthony Orner, a licensed independent Medicare broker serving Union
        County. My consultations are always free.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why Plainfield residents need an independent Medicare broker
        </h2>
        <p className="text-gray-700 mb-2">
          Plainfield sits in Union County with access to major hospital systems
          like RWJBarnabas Health and Hackensack Meridian. But network access
          varies sharply between plans. A carrier that covers your cardiologist
          might not cover the imaging center two blocks away.
        </p>
        <p className="text-gray-700">
          An independent broker checks those details before you enroll, not
          after. I'm not locked into selling one company's products, so I can
          tell you which plan actually works with the providers you use.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Supplement and Advantage plans available in Union County
        </h2>
        <p className="text-gray-700 mb-3">
          Union County residents typically have strong options in both categories:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>Medicare Supplement (Medigap):</strong> Pairs with Original
            Medicare. Plan G and Plan N are the most popular choices. Rates vary
            by carrier and age, but you can see any doctor who accepts Medicare.
          </li>
          <li>
            <strong>Medicare Advantage (Part C):</strong> Replaces Original
            Medicare with a managed plan. Many $0-premium HMO and PPO options
            exist in this area, often including dental, vision, and Part D drug
            coverage.
          </li>
        </ul>
        <p className="text-gray-700 mt-3">
          The right choice depends on your doctors, prescriptions, and how often
          you travel. That's exactly what we sort out on a call.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Key enrollment windows and guaranteed-issue dates
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>Medigap Open Enrollment:</strong> 6 months starting the
            month you turn 65 and are enrolled in Part B. During this window, no
            carrier can deny you or charge more for health reasons.
          </li>
          <li>
            <strong>Annual Enrollment (AEP):</strong> October 15 through
            December 7. This is when you can switch Medicare Advantage or Part D
            plans for the following year.
          </li>
          <li>
            <strong>Special Enrollment Periods:</strong> Triggered by qualifying
            events like losing employer coverage or moving out of a plan's
            service area.
          </li>
          <li>
            <strong>Part B late penalty:</strong> 10% added to your premium for
            every 12-month period you delayed enrollment without qualifying
            coverage. The 2026 Part B premium is $202.90/month.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What real people get frustrated about
        </h2>
        <p className="text-gray-700 mb-2">
          Insurance problems in New Jersey often boil down to one thing: a
          provider or health system stops accepting your plan, and nobody warned
          you. Network changes hit mid-year. Billing surprises show up months
          later. Switching plans feels impossible because nobody picks up the
          phone.
        </p>
        <p className="text-gray-700">
          Having a broker means you have one person to call who already knows
          your plan and can walk you through your options when things go sideways.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How a free consultation works
        </h2>
        <p className="text-gray-700 mb-2">
          You call or schedule a time. I ask about your medications, doctors, and
          what matters most to you. Then I compare plans from multiple carriers
          and walk you through the real costs, not just the premium.
        </p>
        <p className="text-gray-700">
          No pressure, no enrollment deadline tricks. If your current plan is the
          best fit, I'll tell you that too.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Book a free call with Anthony Orner
        </h2>
        <p className="text-gray-700">
          Whether you're turning 65, retiring from a Union County employer, or
          frustrated with the plan you picked last fall, I can help you sort it
          out. Plainfield residents get the same carrier access as anyone in
          NJ, but which plan fits you is personal. Let's figure it out together.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Call 855-559-1700 for free Medicare guidance
        </p>
        <p className="mb-4">
          No cost. No obligation. Licensed and independent.
        </p>
        <Link
          href="tel:8555591700"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
        >
          Get a Free Quote
        </Link>
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
              href="/medicare-supplement/new-jersey"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-advantage/new-jersey"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage Plans in Union County
            </Link>
          </li>
          <li>
            <Link
              href="/learn/how-to-sign-up-for-medicare"
              className="text-blue-600 hover:underline"
            >
              When to Enroll in Medicare
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-blue-600 hover:underline"
            >
              About Anthony Orner, Licensed Medicare Broker
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}