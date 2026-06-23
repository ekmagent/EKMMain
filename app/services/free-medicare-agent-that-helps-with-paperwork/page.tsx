import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "free medicare agent that helps with paperwork | Zero Cost Enrollment Help | MedicareYourself",
  description:
    "Free Medicare agent who fills out every application and carrier form for you at zero cost. Call Anthony at 855-559-1700 for hands-on enrollment help today.",
  alternates: { canonical: "https://medicareyourself.com/services/free-medicare-agent-that-helps-with-paperwork" },
  openGraph: {
    title:
      "free medicare agent that helps with paperwork | Zero Cost Enrollment Help | MedicareYourself",
    description:
      "Free Medicare agent that helps with paperwork — applications, carrier forms, and enrollment handled start to finish. Anthony Orner, licensed NJ broker. Call today.",
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
      name: "Free Medicare Agent That Helps With Paperwork",
      item: "https://medicareyourself.com/services/free-medicare-agent-that-helps-with-paperwork",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "A Free Medicare Agent Who Actually Helps You With the Paperwork",
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
  datePublished: "2026-03-17",
  dateModified: "2026-03-22",
};

const faqs = [
  {
    question: "Can a Social Security office help with Medicare questions?",
    answer:
      "Social Security handles enrollment in Original Medicare (Parts A and B). But they don't compare Medigap plans, Medicare Advantage options, or Part D drug plans. A licensed Medicare broker like Anthony does all of that, plus the paperwork, at no cost to you.",
  },
  {
    question: "Why is a Medicare agent free?",
    answer:
      "Licensed Medicare brokers are paid by insurance carriers, not by you. The plan costs the same whether you enroll yourself or have a broker handle everything. You get help with applications, comparisons, and ongoing service without paying a dime.",
  },
  {
    question: "What forms do I need to fill out for Medicare enrollment?",
    answer:
      "It depends on what you're enrolling in. Original Medicare uses a Social Security application. Medigap, Medicare Advantage, and Part D each have separate carrier applications. Anthony handles all of these forms for you and submits them directly.",
  },
  {
    question: "Can a Medicare agent help me switch plans too?",
    answer:
      "Yes. During Open Enrollment (October 15 through December 7), or if you qualify for a Special Enrollment Period, Anthony can handle the switch, cancel the old plan, and make sure there's no gap in coverage.",
  },
,
  {
    question: "Can I call Medicare directly instead of using a broker?",
    answer:
      "Yes, you can reach Medicare at 1-800-MEDICARE (1-800-633-4227) 24 hours a day, 7 days a week. They can answer general questions, but they won't compare specific Medigap, Medicare Advantage, or Part D plans side by side. A licensed broker like Anthony can do that comparison and handle the paperwork for you at no cost.",
  },
  {
    question: "What information do I need to give an agent to handle my paperwork?",
    answer:
      "You'll typically need your Medicare number, effective dates for Part A and Part B, a list of your prescriptions, and your preferred doctors and pharmacies. Anthony uses that to match you with plans and complete the carrier applications. Nothing gets submitted until you review and approve it.",
  },
  {
    question: "Does using a free Medicare agent affect my plan price?",
    answer:
      "No. Premiums are filed with and approved by state regulators, so the same plan costs the same whether you enroll on your own or through a licensed broker. The carrier pays the broker a standard commission that is built into the plan regardless.",
  }
];

export default function FreeMedicareAgentPaperworkPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
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
          Free Medicare Agent That Helps With Paperwork
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        A Free Medicare Agent Who Actually Helps You With the Paperwork
      </h1>

      <Image
        src="/images/free-medicare-agent-that-helps-with-paperwork_photo.webp"
        alt="free medicare agent that helps with paperwork"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        A free Medicare agent that helps with paperwork takes the most stressful
        part of enrollment off your plate. I'm Anthony Orner, a licensed broker
        in New Jersey, and I handle applications, carrier forms, and submissions
        so you don't have to figure it out alone.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        You pay nothing. The insurance carriers compensate me directly. Your plan
        costs the same either way.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What paperwork is involved in enrolling in Medicare
        </h2>
        <p className="text-gray-700 mb-2">
          Medicare enrollment isn't one form. It's several, depending on what
          you need:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-2">
          <li>Social Security application for Parts A and B</li>
          <li>Carrier-specific application for Medicare Advantage (Part C)</li>
          <li>Separate application for a Medigap/Medicare Supplement plan</li>
          <li>Part D prescription drug plan enrollment form</li>
          <li>
            Creditable coverage documentation if you're leaving employer
            insurance
          </li>
        </ul>
        <p className="text-gray-700">
          Miss one form or check the wrong box, and your coverage gets delayed.
          That's where I come in.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How a licensed broker handles applications at no cost to you
        </h2>
        <p className="text-gray-700 mb-2">
          I compare plans across 30+ carriers, walk you through the best fit,
          then fill out and submit the paperwork myself. You review, confirm, and
          sign. That's it.
        </p>
        <p className="text-gray-700">
          Carriers pay brokers the same commission whether you call them directly
          or work with me. The difference is you get a person who follows up,
          catches errors, and stays on the phone with the carrier when something
          needs fixing.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Common enrollment mistakes that delay your coverage
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <strong>Wrong effective date.</strong> Applying too late can leave
            you uncovered for weeks or months.
          </li>
          <li>
            <strong>Missing Part B enrollment.</strong> A late enrollment penalty
            adds 10% to your $202.90/month premium for every 12-month period you
            delayed.
          </li>
          <li>
            <strong>Incomplete carrier forms.</strong> One blank field can bounce
            your entire application back.
          </li>
          <li>
            <strong>No creditable coverage letter.</strong> If you're leaving an
            employer plan, you need proof your old drug coverage was creditable.
            Without it, you could face a Part D penalty.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What to have ready before your call with Anthony
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Your Medicare card (red, white, and blue) or Medicare number</li>
          <li>List of current prescriptions with dosages</li>
          <li>Names of your doctors and preferred hospitals</li>
          <li>
            Your Part B effective date (or expected date if you haven't enrolled
            yet)
          </li>
          <li>
            Creditable coverage letter from your employer, if applicable
          </li>
        </ul>
        <p className="text-gray-700 mt-2">
          Don't have all of this? Call anyway. I'll help you track it down.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why people skip the paperwork and then pay for it later
        </h2>
        <p className="text-gray-700 mb-2">
          I hear it constantly: someone turned 65 months ago, assumed everything
          was automatic, and now they're dealing with late penalties or a gap in
          coverage. Others tried to enroll online, got confused by carrier
          portals, and gave up halfway through.
        </p>
        <p className="text-gray-700">
          Medicare doesn't fix mistakes for free. But getting help upfront costs
          you nothing.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Ongoing support after enrollment
        </h2>
        <p className="text-gray-700 mb-2">
          Enrollment isn't the end. I help with annual plan reviews during Open
          Enrollment (October 15 through December 7), claims issues, and plan
          switches if your needs change. One call gets you a real person who
          already knows your file.
        </p>
        <p className="text-gray-700">
          No phone trees. No repeating your story to a stranger every time.
        </p>
      </section>

      <div className="mt-12 bg-blue-600 text-white rounded-lg p-8 text-center">
        <p className="text-2xl font-bold mb-2">
          Let me handle the paperwork. You handle retirement.
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-semibold">
            855-559-1700
          </a>{" "}
          or get started online.
        </p>
        <Link
          href="/quote"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
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
              href="/learn/how-to-sign-up-for-medicare"
              className="text-blue-600 hover:underline"
            >
              How to Enroll in Medicare: Step-by-Step Guide
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/turning-65"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment Period Explained
            </Link>
          </li>
          <li>
            <Link
              href="/learn/how-to-sign-up-for-medicare"
              className="text-blue-600 hover:underline"
            >
              Medicare Part B Late Enrollment Penalty
            </Link>
          </li>
          <li>
            <Link
              href="/services/free-medicare-broker-new-jersey"
              className="text-blue-600 hover:underline"
            >
              Licensed Medicare Broker in New Jersey
            </Link>
          </li>
        </ul>
            <div className="text-sm text-gray-600 mt-4">For official Medicare information, visit <a href="https://www.medicare.gov/talk-to-someone" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">Medicare.gov's Talk to Someone page</a> or call 1-800-MEDICARE (1-800-633-4227), available 24/7.</div>
            <div className="text-sm text-gray-600 mt-4">You can also get free one-on-one Medicare counseling from your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free one-on-one counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also reach the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Prefer a state-run counselor? New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Prefer a non-broker counselor? Find free local help through your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling from the <a href="https://www.nj.gov/humanservices/doas/services/q-z/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Prefer free, unbiased counseling from a non-broker? Find your local SHIP (State Health Insurance Assistance Program) at <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">shiphelp.org</a> for one-on-one Medicare counseling in your state.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">State help: <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free local Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
    </main>
  );
}