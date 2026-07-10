import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare specialists in cranford, nj office | Free Local Help | MedicareYourself",
  description:
    "Medicare specialists in Cranford, NJ — licensed broker Anthony Orner compares Medigap, Advantage & Part D across carriers at no cost. Call 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-specialists-in-cranford-nj-office" },
  openGraph: {
    title:
      "medicare specialists in cranford, nj office | Free Local Help | MedicareYourself",
    description:
      "Medicare specialists in Cranford, NJ — Anthony Orner is a licensed independent broker serving Union County. Compare plans across carriers. Free consultation.",
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
      name: "Medicare Specialists in Cranford, NJ Office",
      item: "https://medicareyourself.com/services/medicare-specialists-in-cranford-nj-office",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Specialists in Cranford, NJ: Licensed Broker Serving Union County",
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
    question: "What services are offered by a Medicare specialist in Cranford?",
    answer:
      "A licensed Medicare specialist in Cranford can help you compare Medicare Supplement (Medigap), Medicare Advantage (Part C), Part D prescription drug plans, dental, vision, and hearing coverage. Anthony Orner works independently across multiple carriers so recommendations are based on your needs, not one company's product line.",
  },
  {
    question: "What is the phone number for Medicare help in New Jersey?",
    answer:
      "For official Medicare questions, call 1-800-MEDICARE (1-800-633-4227). For free local broker help comparing plans in Union County, call Anthony Orner at 855-559-1700.",
  },
  {
    question: "Does it cost anything to work with a Medicare broker in Cranford?",
    answer:
      "No. Licensed Medicare brokers are compensated by the insurance carriers, not by you. There's no fee for consultations, plan comparisons, or enrollment assistance.",
  },
  {
    question: "When should I start looking at Medicare plans before I turn 65?",
    answer:
      "If you're interested in a Medigap plan, apply about 6 months before your Part B start date. Your Medigap Open Enrollment Period is the 6 months starting the month you turn 65 and are enrolled in Part B. During this window, carriers can't deny you or charge more based on health history.",
  },
,
  {
    question: "Can a Cranford Medicare broker help me switch plans during the Annual Enrollment Period?",
    answer:
      "Yes. The Medicare Annual Enrollment Period runs from October 15 through December 7 each year. During this window, you can switch Medicare Advantage plans, change Part D prescription drug plans, or move between Original Medicare and Medicare Advantage. A licensed broker can review your current coverage and compare alternatives across multiple carriers at no cost.",
  },
  {
    question: "Do I need to live in Cranford to work with Anthony Orner?",
    answer:
      "No. Anthony Orner is licensed in New Jersey and 34 additional states, so residents throughout Union County and beyond can get help. Consultations are available by phone, video, or in person depending on your preference.",
  },
  {
    question: "What's the difference between a Medicare broker and a captive agent?",
    answer:
      "A captive agent represents a single insurance company and can only offer that carrier's plans. An independent broker like Anthony Orner contracts with multiple carriers, so plan recommendations are based on your specific needs, doctors, and prescriptions rather than one company's product line.",
  }
,
  {
    question: "Do I need to live in Cranford to work with Anthony Orner?",
    answer:
      "No. Anthony Orner is licensed in New Jersey and 34 additional states, so residents throughout Union County and beyond can get help comparing Medicare plans. Consultations can be done in person, by phone, or virtually based on what works best for you.",
  }
,
  {
    question: "Do I need to live in Cranford to work with a local Medicare broker?",
    answer:
      "No. Anthony Orner is licensed in New Jersey and 34 other states, so you can work with him whether you live in Cranford, elsewhere in Union County, or out of state. Meetings can be done in person locally or by phone and video. Call 855-559-1700 to set up a free consultation.",
  },
  {
    question: "What is the difference between Medicare Advantage and Medigap?",
    answer:
      "Medicare Advantage (Part C) replaces Original Medicare with a private plan that often bundles Part D and extras like dental or vision, typically using a network. Medigap works alongside Original Medicare to help pay deductibles, coinsurance, and copays, and lets you see any provider that accepts Medicare. A Cranford broker can walk through the trade-offs based on your doctors, prescriptions, and budget.",
  }
];

export default function MedicareSpecialistsCranfordNJOffice() {
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
        <span className="text-gray-700">
          Medicare Specialists in Cranford, NJ Office
        </span>
      </nav>

      <article className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Medicare Specialists in Cranford, NJ: Licensed Broker Serving Union County
        </h1>

        <Image
          src="/images/medicare-specialists-in-cranford-nj-office.webp"
          alt="Medicare specialists in Cranford, NJ office"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Medicare specialists in Cranford, NJ help you cut through carrier noise and find the right plan for your doctors, prescriptions, and budget. I'm Anthony Orner, a licensed independent broker serving Union County. My consultations are always free.
        </p>

        <PhoneCTA />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            Why Cranford residents choose an independent Medicare specialist
          </h2>
          <p className="mb-3">
            Cranford sits in Union County with access to major health systems like RWJBarnabas and Trinitas Regional Medical Center. Which plans include your local doctors matters more than a TV ad.
          </p>
          <p>
            An independent broker isn't locked to one carrier. I compare options across multiple insurers so you see the real tradeoffs, not just one company's pitch.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            Supplement and Advantage plans available in the Cranford area
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Medigap (Medicare Supplement):</strong> Plans like G and N cover gaps in Original Medicare. You keep your choice of any doctor who accepts Medicare. Rates vary by carrier and age.
            </li>
            <li>
              <strong>Medicare Advantage (Part C):</strong> Network-based plans that often bundle prescription drugs, dental, vision, and hearing. Some have $0 premiums, but check the provider network carefully.
            </li>
            <li>
              <strong>Part D (Prescription Drug):</strong> Standalone drug plans pair with Original Medicare or Medigap. Formularies change yearly, so review your medications each fall.
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            How to meet with a broker by phone, video, or in person
          </h2>
          <p className="mb-3">
            I work with Cranford-area clients however it's easiest for you. Call, schedule a video session, or meet locally. Most reviews take about 20 minutes.
          </p>
          <p>
            Bring your Medicare card, a list of current medications, and the names of doctors you want to keep. That's all I need to pull accurate plan comparisons.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            Key enrollment windows to know in 2026
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Medigap Open Enrollment:</strong> 6 months starting the month you're 65+ and enrolled in Part B. This is your guaranteed-issue window. Miss it, and carriers can underwrite based on health.
            </li>
            <li>
              <strong>Annual Enrollment (AEP):</strong> October 15 through December 7 for Medicare Advantage and Part D changes.
            </li>
            <li>
              <strong>Part B late penalty:</strong> 10% added to your $202.90/month premium for each 12-month period you delayed without qualifying coverage.
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            What a free Medicare review actually covers
          </h2>
          <p className="mb-3">
            I check whether your current plan still fits. Carriers adjust networks, formularies, and costs every year. A plan that worked in 2025 might cost you more in 2026.
          </p>
          <p>
            There's no obligation and no fee. Insurance carriers pay the broker, not you. You get the same plan at the same price whether you enroll directly or through me.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            Schedule a free Medicare review for Cranford, NJ
          </h2>
          <p>
            Call <strong>855-559-1700</strong> or request a callback below. I'll walk you through your options, answer every question, and only recommend a plan if it genuinely fits.
          </p>
        </section>

        <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
          <p className="text-xl font-semibold mb-2">
            Talk to a licensed Medicare specialist today
          </p>
          <p className="mb-4">
            Call{" "}
            <a
              href="tel:8555591700"
              className="underline font-bold"
            >
              855-559-1700
            </a>{" "}
            or{" "}
            <Link
              href="/contact"
              className="underline font-bold"
            >
              Get a Free Quote
            </Link>
          </p>
        </div>

        <section className="mt-12">
          <FAQSection faqs={faqs} />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
                className="text-blue-600 hover:underline"
              >
                Medigap Plan G vs. Plan N: Which Saves You More?
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-advantage/new-jersey"
                className="text-blue-600 hover:underline"
              >
                Medicare Advantage Plans in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/learn/how-to-sign-up-for-medicare"
                className="text-blue-600 hover:underline"
              >
                Medicare Part B Enrollment: Deadlines and Penalties
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
                      <li>
              <Link
                href="/services/us-medicare-brokers"
                className="text-blue-600 hover:underline"
              >
                Us Medicare Brokers
              </Link>
            </li>
            <li>
              <Link
                href="/services/independent-medicare-agents-near-me"
                className="text-blue-600 hover:underline"
              >
                Independent Medicare Agents Near Me
              </Link>
            </li>
            <li>
              <Link
                href="/services/help-with-your-medicare-decision"
                className="text-blue-600 hover:underline"
              >
                Help With Your Medicare Decision
              </Link>
            </li>
            <li>
              <Link
                href="/services/best-medicare-plan-for-chronic-conditions"
                className="text-blue-600 hover:underline"
              >
                Best Medicare Plan For Chronic Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-specialists-in-south-carolina"
                className="text-blue-600 hover:underline"
              >
                Medicare Specialists In South Carolina
              </Link>
            </li>
</ul>
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/plan-compare" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov Plan Finder</a> and <a href="https://www.medicare.gov/basics/get-started-with-medicare" rel="noopener noreferrer" target="_blank" className="underline">Get Started with Medicare</a>. For New Jersey SHIP counseling, visit <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
      </article>
    </>
  );
}