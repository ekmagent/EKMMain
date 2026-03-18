import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "free independent medicare broker near me new jersey | No-Cost Quotes | MedicareYourself",
  description:
    "Free independent Medicare broker near you in New Jersey. Anthony Orner compares 12+ Medigap and Advantage carriers at zero cost. Call for a free quote today.",
  openGraph: {
    title:
      "free independent medicare broker near me new jersey | No-Cost Quotes | MedicareYourself",
    description:
      "Free independent Medicare broker near you in New Jersey. Anthony Orner compares 12+ Medigap and Advantage carriers at zero cost. Call for a free quote today.",
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
      name: "Free Independent Medicare Broker Near You in New Jersey",
      item: "https://www.medicareyourself.com/services/free-independent-medicare-broker-near-me-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Free Independent Medicare Broker Near You in New Jersey",
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
  datePublished: "2025-07-14",
  dateModified: "2025-07-14",
};

const faqs = [
  {
    question: "Are Medicare brokers free?",
    answer:
      "Yes. Independent Medicare brokers are paid commissions by insurance carriers, not by you. The plans cost the same whether you enroll directly or through a broker. You get expert guidance at zero cost.",
  },
  {
    question: "Is it a good idea to use a Medicare broker?",
    answer:
      "Absolutely. An independent broker compares plans from multiple carriers to find the best fit for your situation. A captive agent can only show you one company's products. Working with a broker gives you more options and an unbiased recommendation.",
  },
  {
    question: "What's the difference between a Medicare agent and broker?",
    answer:
      "A Medicare agent typically represents one insurance company. An independent broker is licensed with multiple carriers and can compare plans across all of them. This means a broker can shop the market on your behalf instead of pushing a single company's product.",
  },
  {
    question:
      "What is the maximum income to qualify for free health care in NJ?",
    answer:
      "New Jersey has programs like NJ FamilyCare and Medicare Savings Programs for lower-income residents. Income limits change annually. Call us at 855-559-1700 and we can check whether you qualify for any cost-saving programs.",
  },
];

export default function FreeIndependentMedicareBrokerNearMeNewJersey() {
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
          Free Independent Medicare Broker Near You in New Jersey
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Free Independent Medicare Broker Near You in New Jersey
      </h1>

      <Image
        src="/images/free-independent-medicare-broker-near-me-new-jersey.webp"
        alt="Free independent Medicare broker near me in New Jersey"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Free independent Medicare broker near me in New Jersey - that's the
        search that brings most of my clients to me. I'm Anthony Orner, a
        licensed independent Medicare broker based right here in NJ, and I never
        charge a fee for my services.
      </p>
      <p className="text-lg mb-6">
        Whether you're turning 65, retiring, or just want to make sure you have
        the right plan, I'll compare your options across multiple carriers and
        walk you through every detail.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why independent brokers in NJ never charge you a fee
        </h2>
        <p className="mb-2">
          Insurance carriers pay broker commissions directly. You pay the exact
          same premium whether you call a carrier yourself or work with me. The
          difference is you get someone in your corner comparing plans instead of
          selling you one company's product.
        </p>
        <p>
          This is true for both Medigap (Medicare Supplement) plans and Medicare
          Advantage plans. Zero cost to you, every time.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How many carriers Anthony Orner compares for every client
        </h2>
        <p className="mb-2">
          I'm licensed with 12 or more carriers across New Jersey. That includes
          the top Medigap insurers offering Plan G, Plan N, and other
          standardized supplements, plus major Medicare Advantage and Part D
          providers.
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-2">
          <li>Medigap plans from 7+ carriers</li>
          <li>Medicare Advantage plans from 8+ carriers</li>
          <li>Part D prescription drug plans</li>
          <li>Dental and vision options when available</li>
        </ul>
        <p>
          A captive agent shows you one company. I show you 10 or more side by
          side, then explain which one makes sense for your doctors, your
          prescriptions, and your budget.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          In-person, phone, and virtual appointments across New Jersey
        </h2>
        <p className="mb-2">
          I work with clients from Bergen County down to Cape May. You pick how
          you want to meet.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>In-person at your kitchen table or local coffee shop</li>
          <li>Phone call - quick and easy if you already know what you need</li>
          <li>
            Video call through Zoom for screen-sharing plan comparisons in real
            time
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Lock in your rate before Part B starts
        </h2>
        <p className="mb-2">
          Turning 65? Your Medigap Open Enrollment Period lasts 6 months
          starting the month you turn 65 and are enrolled in Part B. During that
          window, carriers cannot deny you or charge higher premiums based on
          health history.
        </p>
        <p>
          My practice is to have clients apply up to 6 months before their Part
          B start date. This locks in today's rate early, protecting you from
          premium increases before coverage even begins. The sooner you lock in,
          the better your rate.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What makes an independent broker different from a captive agent
        </h2>
        <p className="mb-2">
          A captive agent works for one insurance company. If that company's plan
          isn't the best fit, they can't offer you an alternative. An
          independent broker like me works for you.
        </p>
        <p>
          I have no quotas to hit for any single carrier. My only goal is
          matching you with the plan that covers what you need at the lowest
          price. Period.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">
          Get a free Medicare plan comparison in under 10 minutes
        </h2>
        <p className="mb-2">
          Most of my initial consultations take less than 10 minutes. I'll ask
          about your doctors, medications, and how you use healthcare. Then I
          pull up real-time rates from every carrier I represent.
        </p>
        <p>
          You walk away with a clear side-by-side comparison and my honest
          recommendation. No pressure, no obligation. Call 855-559-1700 to get
          started.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center mb-10">
        <p className="text-xl font-bold mb-2">
          Ready for your free plan comparison?
        </p>
        <p className="mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-semibold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/get-a-free-quote" className="underline font-semibold">
            Get a Free Quote
          </Link>{" "}
          online.
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
              Medicare Supplement Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-plan-g-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Plan G in NJ - Coverage and Costs
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-plans-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-blue-600 hover:underline"
            >
              About Anthony Orner - Your NJ Medicare Broker
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}