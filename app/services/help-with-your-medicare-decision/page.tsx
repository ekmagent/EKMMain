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
    "Get free, unbiased help with your Medicare decision from licensed broker Anthony Orner. Compare every option clearly with no pressure — call 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/help-with-your-medicare-decision" },
  openGraph: {
    title:
      "help with your medicare decision | Free, No-Pressure Guidance | MedicareYourself",
    description:
      "Get help with your Medicare decision from a licensed independent broker. Anthony Orner explains every option without pressure. Schedule a free consultation.",
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
  datePublished: "2026-03-18",
  dateModified: "2026-03-22",
};

const faqs = [
  {
    question: "Can I get help with my Medicare decision for free?",
    answer:
      "Yes. Licensed independent brokers like Anthony Orner at EasyKind Medicare offer free consultations. Brokers are paid by insurance carriers, not by you. There is no cost for guidance, and no obligation to enroll.",
  },
  {
    question:
      "What is the difference between Original Medicare and Medicare Advantage?",
    answer:
      "Original Medicare (Parts A and B) lets you see any provider that accepts Medicare nationwide. You can add a Medigap supplement to reduce out-of-pocket costs. Medicare Advantage (Part C) bundles coverage through a private insurer, often including drug, dental, and vision benefits, but typically limits you to a network of providers.",
  },
  {
    question: "When can I enroll in a Medicare plan?",
    answer:
      "Your Initial Enrollment Period starts 3 months before the month you turn 65 and ends 3 months after. Medicare Advantage and Part D Open Enrollment runs October 15 through December 7 each year. Medigap Open Enrollment lasts 6 months starting the month you turn 65 and are enrolled in Part B.",
  },
  {
    question:
      "Are the Medicare help lines I see on TV the same as an independent broker?",
    answer:
      "Not always. Many TV ads connect you to call centers that may only represent certain carriers. An independent broker works with multiple carriers and is not locked into selling one company's plans. Ask any agent whether they are independent or captive before taking advice.",
  },
  {
    question: "Where can I get free, unbiased Medicare counseling besides a broker?",
    answer:
      "Every state has a State Health Insurance Assistance Program (SHIP) that offers free, one-on-one Medicare counseling. You can also call 1-800-MEDICARE (1-800-633-4227) 24 hours a day, 7 days a week to speak with a representative. TTY users can call 1-877-486-2048.",
  },
  {
    question: "How does an independent broker decide which Medicare plan to recommend?",
    answer:
      "An independent broker reviews your doctors, prescriptions, budget, and travel needs, then compares plans across multiple carriers to find options that fit. The goal is to match you with a plan that covers your providers and medications at the lowest total cost. You make the final decision — the broker's job is to explain trade-offs clearly.",
  }
,
  {
    question: "How does an independent broker decide which Medicare plan to recommend?",
    answer:
      "An independent broker reviews your doctors, prescriptions, budget, and travel needs before comparing plans across multiple carriers. The goal is to match you with coverage that fits your situation, not to push a single product. You stay in control of the final decision, and there is no cost or obligation to enroll.",
  },
  {
    question: "What should I have ready before a Medicare consultation?",
    answer:
      "Have your Medicare card or Part A/B effective dates, a list of current prescriptions with dosages, and the names of doctors or specialists you want to keep. Knowing your ZIP code and any planned travel also helps narrow plan options. This information lets a broker run an accurate side-by-side comparison during the call.",
  },
  {
    question: "Can I change my Medicare plan if I make the wrong choice?",
    answer:
      "Yes. During the Annual Enrollment Period from October 15 through December 7, you can switch Medicare Advantage or Part D plans for the following year. There is also a Medicare Advantage Open Enrollment Period from January 1 through March 31. Special Enrollment Periods may apply if you move, lose other coverage, or qualify for Extra Help.",
  }
,
  {
    question: "How does an independent broker get paid if the consultation is free?",
    answer:
      "Independent Medicare brokers are compensated by the insurance carriers when a client enrolls in a plan. The commission is set by Medicare rules and does not change your premium — you pay the same price whether you enroll through a broker or directly with the carrier. That's why consultations, plan comparisons, and ongoing service can be offered at no cost to you.",
  }
];

export default function HelpWithYourMedicareDecision() {
  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">Help with Your Medicare Decision</span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Help with Your Medicare Decision: Unbiased Guidance from a Licensed
          Broker
        </h1>

        <Image
          src="/images/help-with-your-medicare-decision.webp"
          alt="help with your medicare decision"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Help with your Medicare decision starts with someone who will lay out
          every option honestly. I'm Anthony Orner, an independent licensed
          broker in New Jersey, and I work with multiple carriers so I can
          recommend what actually fits your situation.
        </p>
        <p className="text-lg mb-6">
          No scripts. No pressure. Just clear answers to the questions keeping
          you up at night.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Original Medicare + supplement vs. Medicare Advantage, laid out
            clearly
          </h2>
          <p className="mb-2">
            Original Medicare (Parts A and B) covers hospitals and doctors
            nationwide. In 2026, Part B costs $202.90/month with a $283 annual
            deductible. Part A carries a $1,676 deductible per benefit period.
            Those gaps add up fast.
          </p>
          <p className="mb-2">
            A Medigap supplement fills most or all of those gaps. Medicare
            Advantage bundles everything into one plan, often with $0 premiums
            and built-in drug, dental, and vision coverage, but restricts you to
            a network.
          </p>
          <p>
            Neither path is universally better. The right answer depends on your
            doctors, your prescriptions, and how you use healthcare.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Key factors that change which path is right for you
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Your doctors:</strong> Do they accept Medicare Assignment?
              Are they in specific Advantage networks?
            </li>
            <li>
              <strong>Your prescriptions:</strong> Drug formularies vary wildly
              between Part D and Advantage plans.
            </li>
            <li>
              <strong>Travel habits:</strong> Original Medicare works anywhere in
              the U.S. Most Advantage plans don't.
            </li>
            <li>
              <strong>Budget preference:</strong> Lower monthly premium with
              possible high out-of-pocket costs? Or higher premium with
              predictable expenses?
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Common mistakes people make when choosing for the first time
          </h2>
          <p className="mb-2">
            Waiting too long to apply for Medigap. Your guaranteed issue window
            lasts only 6 months starting the month you turn 65 and enroll in
            Part B. Miss it, and carriers can charge more or deny you based on
            health.
          </p>
          <p className="mb-2">
            Delaying Part B when you don't have creditable employer coverage. The
            late enrollment penalty is 10% added to your premium for every
            12-month period you waited. That penalty never goes away.
          </p>
          <p>
            Picking a plan based on premium alone. A $0-premium Advantage plan
            with a $8,300 out-of-pocket max could cost more than a $180/month
            supplement if you need surgery or extended care.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why an independent broker instead of a call center
          </h2>
          <p className="mb-2">
            Those 1-800 numbers on TV ads often connect you to agents locked
            into one or two carriers. They can only show you what they sell.
          </p>
          <p>
            As an independent broker, I compare plans across carriers and
            recommend based on your needs, not a sales quota. My service is free
            to you. Carriers pay me, so the cost of your plan stays the same
            whether you call me or go direct.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            You can also get free help from your state
          </h2>
          <p className="mb-2">
            Every state runs a State Health Insurance Assistance Program (SHIP).
            SHIP counselors are volunteers trained to answer Medicare questions.
            They're unbiased and free. You can call 1-800-MEDICARE
            (1-800-633-4227) for a referral.
          </p>
          <p>
            I encourage people to use every resource available. Talk to SHIP.
            Talk to me. Compare what you hear. Good decisions come from good
            information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Book a free 15-minute Medicare decision call
          </h2>
          <p className="mb-2">
            Bring your medication list and your current doctors. I'll walk you
            through which plans cover what, what the real costs look like, and
            which enrollment windows apply to you.
          </p>
          <p>
            Fifteen minutes. No obligation. You'll hang up knowing exactly what
            to do next.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center mb-10">
          <p className="text-xl font-bold mb-2">
            Call 855-559-1700 to talk with Anthony directly.
          </p>
          <p className="mb-4">
            Or schedule online when it's convenient for you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
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
                href="/medicare-supplement/new-jersey/vs-medicare-advantage"
                className="text-blue-600 hover:underline"
              >
                Original Medicare vs. Medicare Advantage: Full Comparison
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-supplement/new-jersey/turning-65"
                className="text-blue-600 hover:underline"
              >
                Medigap Open Enrollment: What You Need to Know
              </Link>
            </li>
            <li>
              <Link
                href="/learn/how-to-sign-up-for-medicare"
                className="text-blue-600 hover:underline"
              >
                Medicare Part B Enrollment and Late Penalties
              </Link>
            </li>
            <li>
              <Link
                href="/services/help-with-your-medicare-decision"
                className="text-blue-600 hover:underline"
              >
                Book a Free Medicare Consultation
              </Link>
            </li>
                      <li>
              <Link
                href="/services/free-medicare-advocate-near-me"
                className="text-blue-600 hover:underline"
              >
                Free Medicare Advocate Near Me
              </Link>
            </li>
            <li>
              <Link
                href="/services/free-medicare-agent-that-helps-with-paperwork"
                className="text-blue-600 hover:underline"
              >
                Free Medicare Agent That Helps With Paperwork
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-agent-that-helps-with-paperwork-near-me"
                className="text-blue-600 hover:underline"
              >
                Medicare Agent That Helps With Paperwork Near Me
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-quotes"
                className="text-blue-600 hover:underline"
              >
                Medicare Quotes
              </Link>
            </li>
</ul>
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/talk-to-someone" rel="noopener noreferrer" target="_blank" className="underline">Talk to someone at Medicare.gov</a> (1-800-MEDICARE, available 24/7) or visit <a href="https://www.medicare.gov/" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov</a> for plan comparisons and enrollment details.</div>
            <div className="text-sm text-gray-600 mt-4">Prefer state-based counseling? Find your local SHIP at <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">shiphelp.org</a> for free, unbiased Medicare guidance.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased Medicare counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For free, unbiased counseling in your state, visit the <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP) locator</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, one-on-one counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">New Jersey State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For free local counseling, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased Medicare counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free Medicare counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For free, unbiased one-on-one Medicare counseling in your state, contact your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For free, unbiased state-level Medicare counseling, contact your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">You can also get free one-on-one counseling from your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also access free, unbiased counseling through <a href="https://www.nj.gov/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For free, unbiased one-on-one counseling, contact your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey State Health Insurance Assistance Program (SHIP)</a> for free, one-on-one Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, one-on-one Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For free state-based counseling, visit the <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> locator to find counselors in your area.</div>
            <div className="text-sm text-gray-600 mt-4">For free, unbiased counseling in your state, contact your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey State Health Insurance Assistance Program (SHIP)</a> for free, one-on-one Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">New Jersey State Health Insurance Assistance Program (SHIP)</a> for free, one-on-one Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
      </section>
      </article>
    </>
  );
}