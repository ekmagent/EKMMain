import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "howell nj medicare insurance agents | Free Independent Broker Help | MedicareYourself",
  description:
    "Howell NJ Medicare insurance agents — Anthony Orner compares Supplement and Advantage plans from top carriers in Monmouth County. Free no-obligation quote.",
  openGraph: {
    title:
      "howell nj medicare insurance agents | Free Independent Broker Help | MedicareYourself",
    description:
      "Howell NJ Medicare insurance agents — Anthony Orner compares Supplement and Advantage plans from top carriers in Monmouth County. Free no-obligation quote.",
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
      name: "Howell NJ Medicare Insurance Agents",
      item: "https://www.medicareyourself.com/services/howell-nj-medicare-insurance-agents",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Howell NJ Medicare Insurance Agents — Independent Broker Covering Monmouth County",
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
  datePublished: "2025-01-01",
  dateModified: new Date().toISOString().split("T")[0],
};

const faqs = [
  {
    question: "What is the best Medicare plan in New Jersey?",
    answer:
      "There is no single best plan for everyone. It depends on your doctors, prescriptions, and budget. Medicare Supplement Plan G is popular because it covers nearly everything Original Medicare does not, leaving you with only the $257 Part B annual deductible. Medicare Advantage plans may have lower premiums but use provider networks. An independent broker can compare both types side by side for your situation.",
  },
  {
    question: "Should I use an insurance agent for Medicare?",
    answer:
      "Yes, especially an independent agent. A captive agent only shows you one carrier's plans. An independent broker like Anthony Orner compares plans across multiple carriers to find the right fit for your needs and budget. The service is free to you because brokers are paid by the insurance companies, not the client.",
  },
  {
    question: "How much do Medicare agents charge?",
    answer:
      "Medicare agents do not charge you anything. Brokers are compensated directly by the insurance carriers. Your premium is the same whether you enroll through a broker or go directly to the insurance company. There is zero cost or obligation for a consultation.",
  },
  {
    question: "When is the best time to enroll in a Medigap plan in Howell?",
    answer:
      "Your Medigap Open Enrollment Period begins the month you turn 65 and are enrolled in Part B. During this 6-month window, carriers cannot deny you or charge higher premiums due to health conditions. Anthony's practice is to have clients apply up to 6 months before their Part B start date to lock in the best rate early.",
  },
];

export default function HowellNJMedicareInsuranceAgents() {
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
        <span className="text-gray-700">Howell NJ Medicare Insurance Agents</span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Howell NJ Medicare Insurance Agents — Independent Broker Covering Monmouth County
      </h1>

      <Image
        src="/images/howell-nj-medicare-insurance-agents.webp"
        alt="Howell NJ Medicare insurance agents"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Howell NJ Medicare insurance agents are not all the same. Most directories list captive agents who represent a single carrier, which means you only see a fraction of what is available in Monmouth County.
      </p>
      <p className="text-lg mb-6">
        I am Anthony Orner, an independent licensed Medicare broker. I compare Supplement and Advantage plans from multiple carriers so you get real choices, not a sales pitch for one company.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Why Howell residents choose an independent Medicare broker
        </h2>
        <p className="mb-2">
          Howell Township sits right in the middle of Monmouth County with ZIP codes 07731 and 07728. You have access to a wide range of plans, but sorting through them alone is a headache.
        </p>
        <p className="mb-2">
          An independent broker works for you, not an insurance company. I am not limited to one carrier. That means I can lay out your options honestly and let you decide what fits your budget and your doctors.
        </p>
        <p>
          The service costs you nothing. Brokers are paid by the carriers, and your premium stays the same whether you call me or call the company directly.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Supplement and Advantage plans available in 07731 and 07728
        </h2>
        <p className="mb-2">
          Medicare Supplement (Medigap) plans fill the gaps in Original Medicare. Plan G is the most popular option for people turning 65 in New Jersey. You pay the $257 annual Part B deductible, and the plan covers essentially everything else.
        </p>
        <p className="mb-2">
          Medicare Advantage (Part C) bundles hospital, medical, and often drug coverage into one plan. Many Advantage plans in Monmouth County include dental, vision, and hearing benefits. They use provider networks, so checking that your doctors are in-network is critical before enrolling.
        </p>
        <p>
          I compare both types side by side so you can see the real tradeoffs, not just the premium.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          How Monmouth County rates compare to the rest of New Jersey
        </h2>
        <p className="mb-2">
          Medicare Supplement premiums vary by ZIP code, age, and carrier. In Monmouth County, rates can differ by $30 to $50 per month between the most and least expensive carriers for the same Plan G coverage.
        </p>
        <p>
          That is why comparing matters. One carrier may have the lowest rate at age 65 but increase faster than another over time. I walk you through the numbers so there are no surprises.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Turning 65? Lock in your rate before Part B starts
        </h2>
        <p className="mb-2">
          Your Medigap Open Enrollment Period lasts 6 months starting the month you turn 65 and have Part B. During this window, no carrier can deny you or charge more based on your health.
        </p>
        <p className="mb-2">
          My practice is to have clients apply up to 6 months before their Part B start date. This locks in the rate early, protecting you from any premium increases that may happen before your coverage begins.
        </p>
        <p>
          The sooner you start the process, the better your rate. Do not wait until the last month.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Key enrollment dates every Howell resident should know
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Medigap Open Enrollment:</strong> 6 months starting the month you are 65 and enrolled in Part B. Guaranteed issue, no health questions.
          </li>
          <li>
            <strong>Medicare Advantage / Part D Open Enrollment:</strong> October 15 through December 7 each year.
          </li>
          <li>
            <strong>Part B late enrollment penalty:</strong> 10% added to your $185/month premium for every 12-month period you delayed without qualifying coverage.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Request your free Howell Medicare consultation
        </h2>
        <p className="mb-2">
          Whether you are new to Medicare or reviewing your current plan, a quick call can save you hundreds a year. I will compare your options and explain them in plain English.
        </p>
        <p>
          Call me or fill out the form below. There is no cost and no obligation.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-8 text-center">
        <p className="text-2xl font-bold mb-2">Get a Free Medicare Quote</p>
        <p className="text-lg mb-4">
          Call Anthony Orner today for a no-obligation Monmouth County plan comparison.
        </p>
        <a
          href="tel:8555591700"
          className="text-3xl font-bold underline hover:text-blue-100"
        >
          855-559-1700
        </a>
        <div className="mt-4">
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold rounded-lg px-6 py-3 hover:bg-blue-50"
          >
            Get a Free Quote Online
          </Link>
        </div>
      </div>

      <section className="mt-12">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-3">
          <li>
            <Link
              href="/services/medicare-supplement-plans-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-advantage-plans-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-plan-g-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Plan G in NJ - Rates and Benefits
            </Link>
          </li>
          <li>
            <Link
              href="/services/monmouth-county-medicare-agents"
              className="text-blue-600 hover:underline"
            >
              Monmouth County Medicare Agents
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}