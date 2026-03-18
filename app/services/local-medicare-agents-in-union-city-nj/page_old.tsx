import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "local medicare agents in union city nj | Free Plan Comparison | MedicareYourself",
  description:
    "Local Medicare agents in Union City NJ — Anthony Orner is a licensed independent broker comparing Supplement and Advantage plans. Free, no-obligation quotes.",
  openGraph: {
    title:
      "local medicare agents in union city nj | Free Plan Comparison | MedicareYourself",
    description:
      "Local Medicare agents in Union City NJ — Anthony Orner is a licensed independent broker comparing Supplement and Advantage plans. Free, no-obligation quotes.",
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
      name: "Local Medicare Agents in Union City NJ",
      item: "https://www.medicareyourself.com/services/local-medicare-agents-in-union-city-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Local Medicare Agents in Union City, NJ — Independent Broker Serving Hudson County",
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
    question: "How do I pick a Medicare agent in Union City?",
    answer:
      "Look for a licensed, independent broker who represents multiple carriers rather than just one company. An independent agent can compare plans side by side and recommend the option that actually fits your budget and doctors. Ask if they charge a fee - a good Medicare broker is paid by the insurance carriers, not by you.",
  },
  {
    question: "How can I talk to a live person about Medicare?",
    answer:
      "You can call 1-800-MEDICARE (1-800-633-4227) to reach the federal helpline, available 24/7. For personalized plan comparisons with a local broker who knows Hudson County providers, call Anthony Orner at 855-559-1700. There is no cost and no obligation.",
  },
  {
    question: "Do I need a Medicare agent if I already have coverage?",
    answer:
      "Even if you have a plan, an annual review can save you money. Premiums, networks, and drug formularies change every year. During Medicare Advantage Open Enrollment (October 15 - December 7) or if you qualify for a Special Enrollment Period, a broker can check whether a different plan offers better value.",
  },
  {
    question: "Is there a cost to use a Medicare broker in Union City?",
    answer:
      "No. Licensed Medicare brokers are compensated by insurance carriers when you enroll. You pay nothing extra for their help. The plan premiums are the same whether you enroll directly or through a broker.",
  },
];

export default function LocalMedicareAgentsUnionCityNJ() {
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
          Local Medicare Agents in Union City NJ
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Local Medicare Agents in Union City, NJ — Independent Broker Serving
        Hudson County
      </h1>

      <Image
        src="/images/local-medicare-agents-in-union-city-nj.webp"
        alt="local medicare agents in union city nj"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Local Medicare agents in Union City, NJ can make the difference between
        overpaying for coverage and getting a plan that actually fits your
        health needs and budget. I'm Anthony Orner, a licensed independent
        Medicare broker serving Hudson County residents.
      </p>
      <p className="text-lg mb-6">
        I compare Supplement and Advantage plans from multiple carriers at no
        cost to you. Every consultation is free, with zero obligation to enroll.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why Union City residents need an independent Medicare broker
        </h2>
        <p className="mb-2">
          Union City sits in Hudson County - the smallest and most densely
          populated county in New Jersey. That density means more plan options,
          more carrier competition, and more confusion.
        </p>
        <p>
          A captive agent works for one insurance company. I work for you. As an
          independent broker, I compare rates from multiple carriers and show you
          which plan saves the most money for the coverage you actually use.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare Supplement plans most popular in Hudson County
        </h2>
        <p className="mb-2">
          The two plans I recommend most often to Hudson County clients are Plan
          G and Plan N. Here's why:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Plan G</strong> covers everything Medicare doesn't except
            the Part B deductible ($257/year in 2026). After that, your
            out-of-pocket cost is $0 for Medicare-approved services.
          </li>
          <li>
            <strong>Plan N</strong> has a lower monthly premium but includes
            small copays at office visits (up to $20) and the ER ($50). Good
            choice if you want to trade small copays for a lower bill each month.
          </li>
        </ul>
        <p className="mt-2">
          Rates vary by carrier, age, and zip code. I'll pull actual quotes for
          your situation in minutes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Bilingual support and accessibility for Union City clients
        </h2>
        <p className="mb-2">
          Union City has one of the largest Spanish-speaking populations in New
          Jersey. I work with bilingual resources to make sure language isn't a
          barrier to understanding your Medicare options.
        </p>
        <p>
          Consultations are available by phone or video, so you don't need to
          leave home. If you prefer in-person help, we can arrange that too.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          When to lock in your Medigap rate
        </h2>
        <p className="mb-2">
          Your Medigap Open Enrollment Period lasts 6 months, starting the month
          you turn 65 and are enrolled in Part B. During this window, no carrier
          can deny you or charge more for health conditions.
        </p>
        <p>
          My practice is to have clients apply up to 6 months before their Part
          B start date. This locks in your rate early and protects you from
          premium increases before coverage kicks in. The sooner you lock in, the
          better your rate.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What working with me looks like
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>You call or book online. Takes about 2 minutes.</li>
          <li>
            I ask about your doctors, prescriptions, and budget - no personal
            health questions required during Open Enrollment.
          </li>
          <li>
            I pull real quotes from multiple carriers and walk you through the
            numbers.
          </li>
          <li>
            You decide. No pressure, no sales pitch. If none of the options beat
            what you have, I'll tell you.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Book a free Medicare consultation by phone or video
        </h2>
        <p className="mb-2">
          Whether you're turning 65, retiring from a job with group insurance, or
          just want to review your current plan, I'm here to help. Hudson County
          residents get the same thorough comparison whether we meet by phone,
          video, or in person.
        </p>
        <p>
          Call <strong>855-559-1700</strong> or use the link below to schedule
          your free consultation.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center my-10">
        <p className="text-xl font-bold mb-2">
          Ready to compare Medicare plans in Union City?
        </p>
        <p className="mb-4">
          Call{" "}
          <a href="tel:855-559-1700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/quote" className="underline font-bold">
            Get a Free Quote
          </Link>
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-guides/medicare-supplement-plans-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plans in NJ - Complete Guide
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-plan-g-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Plan G in New Jersey - Benefits and Rates
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-plan-n-vs-plan-g"
              className="text-blue-600 hover:underline"
            >
              Medicare Plan N vs Plan G - Which One Saves You More?
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/when-to-enroll-in-medicare"
              className="text-blue-600 hover:underline"
            >
              When to Enroll in Medicare - Key Dates and Deadlines
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}