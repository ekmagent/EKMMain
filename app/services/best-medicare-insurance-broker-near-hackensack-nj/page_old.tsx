import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Best Medicare Insurance Broker Near Hackensack, NJ | Free Quote | MedicareYourself",
  description:
    "Best medicare insurance broker near Hackensack, NJ — Anthony Orner compares top Medigap and Advantage carriers in Bergen County. Free, no-pressure quote.",
  openGraph: {
    title:
      "Best Medicare Insurance Broker Near Hackensack, NJ | Free Quote | MedicareYourself",
    description:
      "Best medicare insurance broker near Hackensack, NJ — Anthony Orner compares top Medigap and Advantage carriers in Bergen County. Free, no-pressure quote.",
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
      name: "Best Medicare Insurance Broker Near Hackensack, NJ",
      item: "https://medicareyourself.com/services/best-medicare-insurance-broker-near-hackensack-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Best Medicare Insurance Broker Near Hackensack, NJ — Independent, Licensed, Local",
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
  datePublished: "2025-07-01",
  dateModified: "2025-07-01",
};

const faqs = [
  {
    question: "Should I use a Medicare insurance broker?",
    answer:
      "Yes. A Medicare broker is free to you - carriers pay the broker's commission. You get objective plan comparisons across multiple insurance companies instead of being limited to one carrier's lineup. There is no extra cost for using a broker versus enrolling directly.",
  },
  {
    question: "Who is the best person to talk to about Medicare plans?",
    answer:
      "An independent, licensed Medicare broker who represents multiple carriers. Unlike a captive agent tied to one company, an independent broker like Anthony Orner can compare plans from Aetna, Cigna, Mutual of Omaha, and others to find the right fit for your budget and doctors.",
  },
  {
    question:
      "What's the difference between a Medicare agent and a Medicare broker?",
    answer:
      "A Medicare agent typically works for one insurance carrier and can only sell that company's plans. A Medicare broker is contracted with many carriers and can shop the entire market on your behalf. Both are licensed, but a broker gives you more options.",
  },
  {
    question: "Does it cost anything to work with a Medicare broker in Hackensack?",
    answer:
      "No. Medicare brokers are compensated by the insurance carriers, not by you. The premium you pay is the same whether you enroll through a broker, directly with the carrier, or on medicare.gov.",
  },
];

export default function BestMedicareBrokerHackensack() {
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
        <span className="text-gray-700">
          Best Medicare Insurance Broker Near Hackensack, NJ
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Best Medicare Insurance Broker Near Hackensack, NJ — Independent, Licensed, Local
      </h1>

      <Image
        src="/images/best-medicare-insurance-broker-near-hackensack-nj.webp"
        alt="best medicare insurance broker near hackensack, nj"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Best medicare insurance broker near Hackensack, NJ - that is what Bergen County residents search when they are tired of confusing mailers and one-size-fits-all advice. I am Anthony Orner, an independent licensed broker who works with multiple carriers so you see real options side by side. My consultations are free, and I never pressure you into a plan that does not fit.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          What makes a Medicare broker better than a captive agent
        </h2>
        <p className="mb-2">
          A captive agent works for one insurance company. They can only show you that company's plans, even if a competitor has a lower rate or better network for your doctors.
        </p>
        <p>
          As an independent broker, I am contracted with over a dozen carriers. I pull quotes from all of them, lay the numbers next to each other, and let you decide. Same premium either way - carriers pay me, not you.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Carriers available to Hackensack residents in 2025
        </h2>
        <p className="mb-2">
          Bergen County has strong carrier competition, which means more choices and often better rates. Here are some of the carriers I compare for Hackensack-area clients:
        </p>
        <ul className="list-disc ml-6 space-y-1 mb-2">
          <li>Aetna</li>
          <li>Cigna</li>
          <li>Mutual of Omaha</li>
          <li>United American</li>
          <li>Humana</li>
          <li>UnitedHealthcare (AARP)</li>
          <li>Wellcare</li>
        </ul>
        <p>
          Rates vary by carrier, age, gender, and tobacco use. I run all the numbers so you do not have to call each company yourself.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          How Anthony Orner helps Bergen County clients save
        </h2>
        <p className="mb-2">
          Most of my Hackensack-area clients save by choosing Plan G or Plan N for their Medigap coverage. Plan G covers everything Original Medicare does not, except the Part B deductible ($257 in 2026). Plan N costs less per month but adds small copays at some visits.
        </p>
        <p>
          I walk you through both options with actual dollar amounts so you can see the real annual cost, not just the monthly premium.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Why timing matters for your enrollment
        </h2>
        <p className="mb-2">
          Your Medigap Open Enrollment Period lasts 6 months starting the month you turn 65 and are enrolled in Part B. During this window, carriers must accept you at the best available rate with no health questions.
        </p>
        <p>
          Miss it, and you may face medical underwriting or higher premiums. I recommend clients apply up to 6 months before their Part B start date to lock in the lowest rate early.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare Advantage options in the Hackensack area
        </h2>
        <p className="mb-2">
          If you prefer an all-in-one plan with built-in drug coverage, dental, and vision, Medicare Advantage may work for you. Several carriers offer $0-premium HMO and PPO plans in Bergen County.
        </p>
        <p>
          The tradeoff is network restrictions and out-of-pocket maximums. I help you compare the network against your current doctors so there are no surprises.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Request your free Hackensack-area Medicare quote
        </h2>
        <p className="mb-2">
          Whether you are turning 65, retiring from a Bergen County employer, or reviewing your current plan during open enrollment (October 15 through December 7), I will build a comparison specific to your situation.
        </p>
        <p>
          One call. Multiple carriers. No cost. No obligation.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-8 mt-10 text-center">
        <p className="text-xl font-bold mb-2">
          Talk to a Licensed Medicare Broker Today
        </p>
        <p className="mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-semibold">
            855-559-1700
          </a>{" "}
          or request your comparison online.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100"
        >
          Get a Free Quote
        </Link>
      </div>

      <section className="mt-12">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-guides/medicare-supplement-plan-g-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plan G in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-supplement-plan-n-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plan N in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-plans-bergen-county"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage Plans in Bergen County
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/when-to-enroll-in-medicare-nj"
              className="text-blue-600 hover:underline"
            >
              When to Enroll in Medicare in NJ
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}