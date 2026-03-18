import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare insurance agent near me | Free NJ Broker Consultation | MedicareYourself",
  description:
    "Medicare insurance agent near me in New Jersey — Anthony Orner is a licensed independent broker comparing plans by phone or video. Free no-pressure quote.",
  openGraph: {
    title:
      "medicare insurance agent near me | Free NJ Broker Consultation | MedicareYourself",
    description:
      "Medicare insurance agent near me in New Jersey — Anthony Orner is a licensed independent broker comparing plans by phone or video. Free no-pressure quote.",
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
      item: "https://www.medicareyourself.com/medicare",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Medicare Insurance Agent Near Me",
      item: "https://www.medicareyourself.com/services/medicare-insurance-agent-near-me",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Insurance Agent Near Me — Find a Licensed Independent Broker in New Jersey",
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
    question: "Should I use an agent for Medicare?",
    answer:
      "Yes. A licensed Medicare broker compares plans from multiple carriers on your behalf at no cost to you. Brokers are paid by insurance companies, not by clients. An independent broker can show you options a single-carrier agent cannot.",
  },
  {
    question:
      "Do I have to meet a Medicare agent in person to get help?",
    answer:
      "No. Phone and video consultations are just as effective as in-person meetings. Anthony Orner reviews your medications, doctors, and budget over a call and can screen-share plan comparisons in real time.",
  },
  {
    question: "How much does it cost to use a Medicare broker in NJ?",
    answer:
      "Nothing. Independent Medicare brokers like Anthony Orner are compensated by the insurance carriers. You pay the same premium whether you enroll directly or through a broker.",
  },
  {
    question: "What areas in New Jersey does Anthony Orner serve?",
    answer:
      "Anthony serves all 21 New Jersey counties, including Bergen, Essex, Middlesex, Monmouth, Ocean, Morris, Mercer, Burlington, Camden, and beyond. Since consultations happen by phone or video, your zip code does not limit access.",
  },
];

export default function MedicareInsuranceAgentNearMe() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        {" > "}
        <Link href="/medicare" className="hover:underline">
          Medicare Guides
        </Link>
        {" > "}
        <span className="text-gray-700">Medicare Insurance Agent Near Me</span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Medicare Insurance Agent Near Me — Find a Licensed Independent Broker in New Jersey
      </h1>

      <Image
        src="/images/medicare-insurance-agent-near-me.webp"
        alt="Medicare insurance agent near me in New Jersey"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Medicare insurance agent near me is one of the most common searches I see from people turning 65 in New Jersey. The instinct makes sense - you want someone local who understands your situation. But here is the truth: proximity matters far less than independence and licensing.
      </p>
      <p className="mb-6">
        I am Anthony Orner, a licensed independent Medicare broker serving all of New Jersey. Every consultation is free, and I never charge you a dime.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why "near me" matters less than "independent and licensed"
        </h2>
        <p className="mb-2">
          A captive agent works for one insurance company. They can only show you that carrier's plans. An independent broker like me represents multiple carriers, so I compare options side by side and recommend the one that actually fits your budget and prescriptions.
        </p>
        <p>
          Your broker's office address does not affect your plan options. What matters is that they hold an active NJ insurance license and have contracts with the carriers selling plans in your county.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          NJ counties and zip codes I serve
        </h2>
        <p className="mb-3">
          I work with Medicare beneficiaries across all 21 New Jersey counties. Here are some of the areas I help most often:
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>Bergen, Essex, Hudson, and Passaic counties (North Jersey)</li>
          <li>Middlesex, Monmouth, and Ocean counties (Central Jersey)</li>
          <li>Mercer, Burlington, and Camden counties (South Jersey)</li>
          <li>Morris, Somerset, Union, and Hunterdon counties</li>
          <li>Cape May, Cumberland, Salem, and Gloucester counties</li>
        </ul>
        <p>
          Since we meet by phone or video, your zip code never limits your access to help.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How a phone or video consultation replaces an office visit
        </h2>
        <p className="mb-2">
          You do not need to drive anywhere. I pull up your drug list, check which doctors are in-network, and screen-share plan comparisons so you see exactly what I see. Most consultations take 20 to 30 minutes.
        </p>
        <p>
          This approach is actually faster than sitting in an office - no waiting room, no traffic, and you get the same personalized analysis.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What I compare during your free consultation
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Medicare Supplement (Medigap) plans: Plan G, Plan N, and others</li>
          <li>Medicare Advantage plans with prescription drug coverage</li>
          <li>Stand-alone Part D prescription drug plans</li>
          <li>Your total annual costs - premiums, deductibles, copays, and drug costs combined</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Key enrollment windows to know
        </h2>
        <p className="mb-2">
          Your Medigap Open Enrollment Period lasts 6 months, starting the month you turn 65 and are enrolled in Part B. During this window, no carrier can deny you or charge more based on health history. Miss it and you may face medical underwriting.
        </p>
        <p>
          Medicare Advantage and Part D plans use the Annual Enrollment Period: October 15 through December 7. Outside of that, you typically need a qualifying event to make changes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Get matched with a free Medicare plan comparison today
        </h2>
        <p>
          Stop searching for a Medicare insurance agent near you and start talking to one who is ready to help. I will compare plans from multiple carriers, walk you through the numbers, and let you decide with zero pressure.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center mb-10">
        <p className="text-xl font-bold mb-2">
          Ready for your free Medicare plan comparison?
        </p>
        <p className="mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-semibold">
            855-559-1700
          </a>{" "}
          or click below to get started.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
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
              href="/medicare/medicare-supplement-plans-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare/medicare-advantage-plans-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage Plans in NJ
            </Link>
          </li>
          <li>
            <Link
              href="/medicare/plan-g-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Plan G in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare/when-to-enroll-in-medicare"
              className="text-blue-600 hover:underline"
            >
              When to Enroll in Medicare
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}