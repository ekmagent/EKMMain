import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "hoboken nj medicare insurance agents | Free Consultation | MedicareYourself",
  description:
    "Hoboken NJ Medicare insurance agents — Anthony Orner compares Supplement & Advantage plans across carriers in Hudson County. Free consultation, call today.",
  alternates: { canonical: "https://medicareyourself.com/services/hoboken-nj-medicare-insurance-agents" },
  openGraph: {
    title:
      "hoboken nj medicare insurance agents | Free Consultation | MedicareYourself",
    description:
      "Hoboken NJ Medicare insurance agents — Anthony Orner compares Supplement and Advantage plans in Hudson County. Independent broker. Free consultation.",
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
      name: "Hoboken NJ Medicare Insurance Agents",
      item: "https://medicareyourself.com/services/hoboken-nj-medicare-insurance-agents",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Hoboken NJ Medicare Insurance Agents: Your Local Independent Broker",
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
  mainEntityOfPage:
    "https://medicareyourself.com/services/hoboken-nj-medicare-insurance-agents",
};

const faqs = [
  {
    question: "Should I use an insurance agent for Medicare?",
    answer:
      "Yes. A licensed independent broker compares plans across multiple carriers at no cost to you. Brokers are paid by insurance companies, not by you, so the consultation and ongoing support are free.",
  },
  {
    question: "What is the best Medicare plan in New Jersey?",
    answer:
      "There's no single best plan. The right choice depends on your doctors, prescriptions, budget, and whether you travel. An independent broker in Hoboken can run a side-by-side comparison for your specific situation.",
  },
  {
    question: "Do insurance agents get commission for Medicare?",
    answer:
      "Yes. Medicare brokers earn a commission from the insurance carrier when you enroll. This doesn't increase your premium. You pay the same rate whether you use a broker or go directly to the carrier.",
  },
  {
    question: "When should I contact a Medicare agent in Hoboken?",
    answer:
      "Ideally, reach out about 6 months before you turn 65. For Medigap plans, your 6-month Open Enrollment Period starts the month you're 65 and enrolled in Part B. Missing that window can mean higher rates or medical underwriting.",
  },
];

export default function HobokenNJMedicareInsuranceAgents() {
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
          Hoboken NJ Medicare Insurance Agents
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Hoboken NJ Medicare Insurance Agents: Your Local Independent Broker
      </h1>

      <Image
        src="/images/hoboken-nj-medicare-insurance-agents.webp"
        alt="Hoboken NJ Medicare insurance agents"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        Hoboken NJ Medicare insurance agents who work for one carrier can only
        show you that carrier's plans. I'm Anthony Orner, a licensed independent
        broker serving Hudson County, and I compare plans across multiple
        insurers to find what actually fits your needs.
      </p>
      <p className="text-lg mb-6">
        No cost for my help. No pressure. Just a clear look at your options.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Why Hoboken residents need an independent Medicare broker
        </h2>
        <p className="mb-3">
          Hoboken is a one-square-mile city with big-city healthcare access.
          CarePoint Health's Hoboken University Medical Center has changed hands
          multiple times, and the broader Hudson County hospital landscape keeps
          shifting. Your Medicare plan needs to keep up with those changes.
        </p>
        <p>
          A captive agent represents one company. I represent you. I can pull
          quotes from multiple carriers and show you which plans include the
          doctors and hospitals you actually use in Hoboken, Jersey City, and
          across the Hudson.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare Supplement vs. Advantage plans in 07030
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Medicare Supplement (Medigap):</strong> Pays after Original
            Medicare. You can see any doctor who accepts Medicare nationwide. Monthly
            premiums are higher, but out-of-pocket costs are predictable. Plan G
            and Plan N are the most popular in New Jersey.
          </li>
          <li>
            <strong>Medicare Advantage (Part C):</strong> Replaces Original
            Medicare with a private plan. Often includes dental, vision, and drug
            coverage. Lower premiums but narrower networks and copays at point of
            care.
          </li>
        </ul>
        <p className="mt-3">
          Many Hoboken residents who travel between NJ and NYC providers prefer
          Medigap for its flexibility. Others want the bundled benefits of
          Advantage. I'll walk you through the tradeoffs for your situation.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Carrier options and rate comparisons for Hoboken seniors
        </h2>
        <p className="mb-3">
          New Jersey has multiple Medigap and Advantage carriers competing for
          your business. Rates vary by carrier, age, and tobacco status. Two Plan
          G policies from different companies cover the exact same benefits but
          can differ by $50 or more per month.
        </p>
        <p>
          I run side-by-side comparisons so you can see the numbers. No guessing,
          no sales pitch.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Key enrollment windows to know
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Medigap Open Enrollment:</strong> 6 months starting the month
            you turn 65 and have Part B. During this window, carriers can't deny
            you or charge more for health conditions.
          </li>
          <li>
            <strong>Medicare Advantage/Part D:</strong> Annual Enrollment runs
            October 15 through December 7.
          </li>
          <li>
            <strong>2026 Part B premium:</strong> $202.90/month. Part A
            deductible: $1,676 per benefit period.
          </li>
        </ul>
        <p className="mt-3">
          Miss your Medigap window and you could face medical underwriting or
          higher premiums. Start the conversation early.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          What working with me looks like
        </h2>
        <p className="mb-3">
          You call or fill out a form. We talk for 15 to 20 minutes about your
          doctors, medications, and budget. I pull real quotes and walk you
          through them. You decide. No deadlines I invent, no awkward follow-up
          calls.
        </p>
        <p>
          If your needs change next year, I'm still here. I don't disappear
          after enrollment.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Get a free Medicare plan review in Hoboken
        </h2>
        <p>
          Whether you're turning 65 near Stevens Institute, retiring from a job
          in Midtown, or just wondering if your current plan still makes sense,
          I'll give you a straight answer. Call today for a free, no-obligation
          review.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Talk to a licensed Hoboken-area Medicare broker today.
        </p>
        <p className="text-2xl font-bold mb-4">
          <a href="tel:8555591700" className="underline">
            855-559-1700
          </a>
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
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
              href="/services/hoboken-nj-medicare-insurance-agents"
              className="text-blue-600 hover:underline"
            >
              Jersey City NJ Medicare Insurance Agents
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plan G in New Jersey
            </Link>
          </li>
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
              href="/medicare-supplement/new-jersey/turning-65"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment Period Explained
            </Link>
          </li>
                    <li>
              <Link
                href="/services/find-an-nj-medicare-broker-near-you"
                className="text-blue-600 hover:underline"
              >
                Find An NJ Medicare Broker Near You
              </Link>
            </li>
            <li>
              <Link
                href="/services/free-medicare-broker-new-jersey"
                className="text-blue-600 hover:underline"
              >
                Free Medicare Broker New Jersey
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
                href="/services/how-to-enroll-in-medicare-in-new-jersey"
                className="text-blue-600 hover:underline"
              >
                How To Enroll In Medicare In New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/services/hillsborough-nj-medicare-insurance-agents"
                className="text-blue-600 hover:underline"
              >
                Hillsborough NJ Medicare Insurance Agents
              </Link>
            </li>
            <li>
              <Link
                href="/services/kearny-nj-medicare-insurance-agents"
                className="text-blue-600 hover:underline"
              >
                Kearny NJ Medicare Insurance Agents
              </Link>
            </li>
</ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/plan-compare" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Medicare.gov Plan Compare</a> · <a href="https://www.medicare.gov/basics/get-started-with-medicare" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Get Started with Medicare</a></div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-2">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-2">New Jersey residents can also get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-2">New Jersey residents can also get free Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
    </main>
  );
}