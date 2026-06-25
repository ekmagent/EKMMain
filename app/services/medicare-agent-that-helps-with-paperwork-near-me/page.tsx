import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare agent that helps with paperwork near me | Free Help in NJ | MedicareYourself",
  description:
    "Licensed NJ Medicare broker Anthony Orner completes your applications and carrier paperwork at no cost—accuracy guaranteed. Call 855-559-1700 for free help.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-agent-that-helps-with-paperwork-near-me" },
  openGraph: {
    title:
      "medicare agent that helps with paperwork near me | Free Help in NJ | MedicareYourself",
    description:
      "Medicare agent that helps with paperwork near you in NJ. Anthony Orner handles applications, carrier forms, and CMS enrollment at no cost. Book a free call.",
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
      name: "Medicare Agent That Helps With Paperwork Near Me",
      item: "https://medicareyourself.com/services/medicare-agent-that-helps-with-paperwork-near-me",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "A Medicare Agent That Actually Helps With Your Paperwork",
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
  mainEntityOfPage:
    "https://medicareyourself.com/services/medicare-agent-that-helps-with-paperwork-near-me",
};

const faqs = [
  {
    question: "Can a Social Security office help with Medicare questions?",
    answer:
      "Social Security handles Part A and Part B enrollment, address changes, and Extra Help applications. But they won't compare plans, fill out carrier-specific forms, or walk you through Medigap or Medicare Advantage options. A licensed Medicare agent like Anthony does all of that at no cost to you.",
  },
  {
    question: "Does a Medicare agent charge for help with paperwork?",
    answer:
      "No. Licensed Medicare brokers are paid by the insurance carriers, not by you. Anthony's help with applications, carrier forms, and CMS enrollment is completely free.",
  },
  {
    question: "What documents do I need to enroll in Medicare?",
    answer:
      "You'll typically need your Social Security number, a government-issued ID, your current insurance card (if applicable), and proof of any employer coverage. Anthony will tell you exactly what's needed based on your situation so nothing gets missed.",
  },
  {
    question: "What happens if I fill out Medicare paperwork wrong?",
    answer:
      "Errors on enrollment forms can delay your coverage start date, trigger late enrollment penalties, or cause claims to be denied. One wrong field on a coordination of benefits form can mean months of rejected claims. Having an agent review everything before submission prevents these problems.",
  },
];

export default function MedicareAgentPaperworkPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

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
          Medicare Agent That Helps With Paperwork
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        A Medicare Agent That Actually Helps With Your Paperwork
      </h1>

      <Image
        src="/images/medicare-agent-that-helps-with-paperwork-near-me_vector.webp"
        alt="Medicare agent that helps with paperwork near me"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        A Medicare agent that helps with paperwork isn't a luxury. It's the difference between coverage that starts on time and a stack of denied claims you don't understand. I'm Anthony Orner, a licensed Medicare broker in New Jersey, and I handle the forms so you don't have to guess.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What paperwork is required when you enroll in Medicare
        </h2>
        <p className="text-gray-700 mb-2">
          Medicare enrollment involves multiple layers of forms depending on your situation:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-2">
          <li>CMS-40B application for Part B (if you delayed enrollment past 65)</li>
          <li>Employer coverage verification (form CMS-L564) if you had group insurance</li>
          <li>Carrier-specific enrollment forms for Medigap or Medicare Advantage</li>
          <li>Part D prescription drug plan applications</li>
          <li>Extra Help/Low-Income Subsidy forms if you qualify for cost assistance</li>
        </ul>
        <p className="text-gray-700">
          Miss one form or check one wrong box and your coverage start date can shift by months. That's real money out of your pocket.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How Anthony handles your Medicare application from start to finish
        </h2>
        <p className="text-gray-700 mb-2">
          I don't hand you a packet and wish you luck. Here's what working with me looks like:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>We review your current coverage, medications, and doctors on a free call</li>
          <li>I identify the exact forms you need and pre-fill them for you</li>
          <li>I submit carrier applications directly and confirm receipt</li>
          <li>I follow up with carriers and CMS until your enrollment is confirmed</li>
          <li>If a claim gets denied due to a paperwork issue, I help resolve it</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Common Medicare paperwork mistakes that delay coverage
        </h2>
        <p className="text-gray-700 mb-2">
          I see the same errors every enrollment season. People fill out forms they found online without realizing they're outdated. They list the wrong effective date. They forget to include employer verification and trigger a Part B late enrollment penalty of 10% per year they delayed.
        </p>
        <p className="text-gray-700">
          Coordination of benefits mistakes are the worst. If Medicare and your employer plan aren't coded correctly as primary and secondary payer, every single claim gets bounced back. I've seen people stuck with thousands in bills for months because one form was filled out wrong.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why calling 1-800-MEDICARE isn't always enough
        </h2>
        <p className="text-gray-700 mb-2">
          Medicare's helpline (1-800-633-4227) is available 24/7, and the State Health Insurance Assistance Program (SHIP) offers free counseling. Both are solid resources for general questions.
        </p>
        <p className="text-gray-700">
          But neither will compare 20+ Medigap carriers for you, pre-fill your applications, or submit them on your behalf. They inform. I execute. And I stay with you after enrollment to handle problems if they come up.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What this costs you (nothing)
        </h2>
        <p className="text-gray-700">
          Licensed Medicare brokers are paid by insurance carriers. You pay the same premium whether you enroll yourself or I do it for you. The difference is I catch the errors before they cost you. There's no fee, no obligation, and no catch.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Get free hands-on enrollment help in New Jersey
        </h2>
        <p className="text-gray-700">
          Whether you're turning 65, leaving employer coverage, or just confused by a stack of Medicare mail, I'll sort it out. I work with clients across New Jersey by phone, video, or in person. One call and we'll figure out exactly what you need.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Let me handle your Medicare paperwork.
        </p>
        <p className="mb-4">
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
              href="/learn/how-to-sign-up-for-medicare"
              className="text-blue-600 hover:underline"
            >
              Medicare Part B Enrollment and Late Penalties
            </Link>
          </li>
          <li>
            <Link
              href="/services/free-medicare-broker-new-jersey"
              className="text-blue-600 hover:underline"
            >
              Find a Medicare Broker Near You in NJ
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/turning-65"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment: When to Apply
            </Link>
          </li>
        </ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/basics/get-started-with-medicare/sign-up/how-do-i-sign-up-for-medicare" rel="noopener noreferrer" target="_blank" className="underline">How to sign up for Medicare (Medicare.gov)</a> and <a href="https://www.ssa.gov/medicare/sign-up" rel="noopener noreferrer" target="_blank" className="underline">Apply for Medicare through Social Security</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For free local counseling, contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For free local counseling in New Jersey, contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> or contact the <a href="https://www.state.nj.us/dobi/" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">NJ residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">NJ residents can also get free counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">New Jersey State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For free, unbiased counseling in New Jersey, contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
      </section>
    </main>
  );
}