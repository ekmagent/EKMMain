import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "free medicare advocate near me | Licensed NJ Broker, $0 Cost | MedicareYourself",
  description:
    "Free Medicare advocate near you in New Jersey. Anthony Orner is a licensed independent broker who compares plans at no cost. Schedule a free consultation.",
  alternates: { canonical: "https://medicareyourself.com/services/free-medicare-advocate-near-me" },
  openGraph: {
    title:
      "free medicare advocate near me | Licensed NJ Broker, $0 Cost | MedicareYourself",
    description:
      "Free Medicare advocate near you in New Jersey. Anthony Orner is a licensed independent broker who compares plans at no cost. Schedule a free consultation.",
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
      name: "Free Medicare Advocate Near Me",
      item: "https://medicareyourself.com/services/free-medicare-advocate-near-me",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Free Medicare Advocate Near You in New Jersey",
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
    "https://medicareyourself.com/services/free-medicare-advocate-near-me",
};

const faqs = [
  {
    question: "Is a free Medicare advocate really free?",
    answer:
      "Yes. Independent Medicare brokers like Anthony Orner are paid by insurance carriers, not by you. There's no fee, no hidden charge, and no obligation. You pay the same premium whether you use a broker or enroll directly.",
  },
  {
    question:
      "What's the difference between a Medicare advocate and a SHIP counselor?",
    answer:
      "State Health Insurance Assistance Program (SHIP) counselors provide free education and can explain your options, but they cannot enroll you in a plan. An independent broker can do both: give you unbiased guidance and handle the enrollment paperwork for you.",
  },
  {
    question: "Can a Medicare advocate help me switch plans?",
    answer:
      "Absolutely. During Annual Enrollment Period (October 15 through December 7) or if you have a qualifying life event, an advocate can review your current coverage, compare alternatives, and switch you to a better-fitting plan at no cost.",
  },
  {
    question: "How do I know a Medicare advocate is unbiased?",
    answer:
      "Ask if they're contracted with multiple carriers. An independent broker works with many insurance companies, not just one. That means the recommendation is based on your needs, not a single company's product lineup.",
  },
];

export default function FreeMedicareAdvocateNearMe() {
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
        <span className="text-gray-700">Free Medicare Advocate Near Me</span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Free Medicare Advocate Near You in New Jersey
        </h1>

        <Image
          src="/images/free-medicare-advocate-near-me_vector.webp"
          alt="free medicare advocate near me"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Free Medicare advocate near me is one of the most common searches I
          see from people in New Jersey who are tired of sorting through plan
          options alone. I'm Anthony Orner, a licensed independent broker, and I
          help people across NJ compare Medicare plans at zero cost.
        </p>
        <p className="text-lg mb-6">
          You shouldn't have to guess which plan protects your doctors, your
          prescriptions, and your budget. That's what I'm here for.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What a Medicare advocate does vs. what a broker does
          </h2>
          <p className="mb-2">
            Some states run free counseling programs (called SHIP) where trained
            volunteers explain Medicare benefits and help you understand your
            options. They provide education, but they can't enroll you.
          </p>
          <p>
            An independent broker does both. I walk you through every option,
            then handle the application and enrollment paperwork. Same unbiased
            guidance, but with follow-through.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why Anthony's help is 100% free to you
          </h2>
          <p className="mb-2">
            Insurance carriers pay brokers a commission when you enroll. Your
            premium stays the same whether you call the carrier directly or work
            with me. There's no markup, no fee, no catch.
          </p>
          <p>
            You get a licensed professional reviewing your medications, checking
            your doctor network, and comparing costs across carriers. All at $0.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How an independent advocate finds unbiased plan options
          </h2>
          <p className="mb-2">
            I'm contracted with multiple insurance carriers, not tied to one
            company. That means when I recommend a plan, it's based on your
            situation, not a sales quota.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>I check which plans cover your specific prescriptions</li>
            <li>I verify your doctors are in-network before you enroll</li>
            <li>
              I compare out-of-pocket costs across Medicare Advantage, Medigap,
              and Part D options
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            The details inside your plan matter more than the premium
          </h2>
          <p className="mb-2">
            A $0 premium plan can look amazing on paper. Then you find out your
            longtime doctor is out of network, a medication you depend on costs
            more than expected, or traveling out of state creates coverage gaps.
          </p>
          <p>
            I've seen this play out too many times. My job is to flag those
            problems before they cost you money or access to care.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Key numbers you should know for 2026
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Part B monthly premium: $202.90</li>
            <li>Part B annual deductible: $283</li>
            <li>Part A deductible: $1,736 per benefit period</li>
            <li>
              Medicare Advantage/Part D Open Enrollment: October 15 through
              December 7
            </li>
            <li>
              Medigap Open Enrollment: 6 months starting the month you turn 65
              and are enrolled in Part B
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Schedule a free Medicare advocacy session today
          </h2>
          <p className="mb-2">
            One phone call. I'll review your current coverage (or help you start
            fresh), compare your options, and answer every question you have. No
            pressure, no obligation.
          </p>
          <p>
            Call{" "}
            <a
              href="tel:8555591700"
              className="text-blue-600 font-semibold hover:underline"
            >
              855-559-1700
            </a>{" "}
            or book a time that works for you.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-6 text-center mb-10">
          <p className="text-xl font-bold mb-2">
            Talk to a licensed Medicare advocate today
          </p>
          <p className="mb-4">
            Call{" "}
            <a
              href="tel:8555591700"
              className="underline font-semibold text-white"
            >
              855-559-1700
            </a>{" "}
            for a free, no-obligation consultation.
          </p>
          <Link
            href="/quote"
            className="inline-block bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
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
                Medicare Advantage vs. Medigap: Which Is Right for You?
              </Link>
            </li>
            <li>
              <Link
                href="/learn/how-to-sign-up-for-medicare"
                className="text-blue-600 hover:underline"
              >
                When to Enroll in Medicare Without Getting Penalized
              </Link>
            </li>
            <li>
              <Link
                href="/services/free-independent-medicare-broker-near-me-new-jersey"
                className="text-blue-600 hover:underline"
              >
                Independent Medicare Broker in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/learn/how-to-sign-up-for-medicare"
                className="text-blue-600 hover:underline"
              >
                How the Part B Late Enrollment Penalty Works
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
                href="/services/help-with-your-medicare-decision"
                className="text-blue-600 hover:underline"
              >
                Help With Your Medicare Decision
              </Link>
            </li>
</ul>
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/talk-to-someone" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">Medicare.gov — Talk to Someone</a> and <a href="https://www.medicare.gov/basics/get-started-with-medicare" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">Get Started with Medicare</a>.</div>
            <div className="text-sm text-gray-600 mt-2">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
      </section>
      </article>
    </>
  );
}