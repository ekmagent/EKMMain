import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "independent medicare broker near me new jersey reviews | Free Consultation | MedicareYourself",
  description:
    "Independent Medicare broker near me in New Jersey reviews — see what NJ clients say about Anthony Orner. Licensed, no-cost help. Book a free call today.",
  openGraph: {
    title:
      "independent medicare broker near me new jersey reviews | Free Consultation | MedicareYourself",
    description:
      "Independent Medicare broker near me in New Jersey reviews — see what NJ clients say about Anthony Orner. Licensed, no-cost help. Book a free call today.",
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
      item: "https://medicareyourself.com/medicare",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Independent Medicare Broker NJ Reviews",
      item: "https://medicareyourself.com/services/independent-medicare-broker-near-me-new-jersey-reviews",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Independent Medicare Broker Near Me in New Jersey: Reviews and What Clients Say",
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
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
};

const faqs = [
  {
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. Medicare brokers are paid by the insurance carriers, not by you. My service is free whether you enroll in a Medigap plan, Medicare Advantage, or Part D prescription drug plan. There is no fee for consultations, plan comparisons, or ongoing support.",
  },
  {
    question: "What is the best Medicare plan in New Jersey?",
    answer:
      "There is no single best plan for everyone. The right plan depends on your doctors, medications, budget, and how often you travel. An independent broker compares options across multiple carriers to find the best fit for your specific situation. Call 855-559-1700 for a free comparison.",
  },
  {
    question:
      "How is an independent Medicare broker different from a captive agent?",
    answer:
      "A captive agent represents one insurance company and can only show you that company's plans. An independent broker like me is contracted with multiple carriers and can compare plans side by side. I have no incentive to push one carrier over another because my compensation is the same regardless of which plan you choose.",
  },
  {
    question: "Can a Medicare broker help me switch plans?",
    answer:
      "Yes. During the Medicare Advantage and Part D Open Enrollment Period (October 15 through December 7), I can help you review your current plan and switch if a better option exists. For Medigap plans, switching rules depend on your health and situation. Call me to discuss your options.",
  },
];

export default function IndependentMedicareBrokerNJReviewsPage() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-600">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          {" > "}
          <Link href="/medicare" className="hover:underline">
            Medicare Guides
          </Link>
          {" > "}
          <span className="text-gray-900">
            Independent Medicare Broker NJ Reviews
          </span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Independent Medicare Broker Near Me in New Jersey: Reviews and What
          Clients Say
        </h1>

        <Image
          src="/images/independent-medicare-broker-near-me-new-jersey-reviews.webp"
          alt="independent medicare broker near me new jersey reviews"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg text-gray-800 mb-2">
          Independent Medicare broker near me in New Jersey reviews matter when
          you are choosing someone to help with your coverage. I am Anthony
          Orner, a licensed independent broker serving all 21 New Jersey
          counties. Here is what clients actually say and how to evaluate any
          broker before trusting them with your Medicare decisions.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            What real NJ clients say about working with Anthony Orner
          </h2>
          <p className="text-gray-800 mb-3">
            Clients consistently mention three things: I explain options in
            plain English, I do not pressure anyone toward a specific carrier,
            and I answer my phone after enrollment. That last part surprises
            people.
          </p>
          <p className="text-gray-800">
            Many NJ clients come to me after a frustrating experience with a
            captive agent who could only show one company's plans. When you work
            with an independent broker, you get an honest comparison across
            carriers. My compensation is the same no matter which plan you pick.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            How to evaluate a Medicare broker beyond star ratings
          </h2>
          <p className="text-gray-800 mb-3">
            Online reviews help, but they do not tell the whole story. Look for
            these specifics:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            <li>
              Are they independent or captive? Ask directly how many carriers
              they represent.
            </li>
            <li>
              Do they hold an active NJ insurance license? You can verify this on
              the NJ Department of Banking and Insurance website.
            </li>
            <li>
              Will they help you after enrollment? Claims issues, billing
              problems, and annual reviews are part of the job.
            </li>
            <li>
              Do they explain costs clearly? A good broker tells you about the
              Part B premium ($185/month in 2026), the Part A deductible
              ($1,676 per benefit period), and plan-specific costs.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            Questions to ask any NJ broker before you enroll
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            <li>How many insurance carriers do you represent?</li>
            <li>Do I pay anything for your service? (The answer should be no.)</li>
            <li>
              Will you review my coverage every year during Open Enrollment
              (October 15 through December 7)?
            </li>
            <li>Can you help with both Medigap and Medicare Advantage?</li>
            <li>What happens if I need help with a claim after I enroll?</li>
          </ul>
          <p className="text-gray-800 mt-3">
            If a broker dodges any of these questions, keep looking.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            Why independent matters more than convenient
          </h2>
          <p className="text-gray-800 mb-3">
            Searching for a broker "near me" makes sense. You want someone
            local. But independence matters more than proximity. A captive agent
            down the street can only show you one carrier's lineup. I compare
            plans from multiple carriers across New Jersey so you see real
            options, not a sales pitch.
          </p>
          <p className="text-gray-800">
            I meet clients by phone, video, or in person. Geography does not
            limit your choices.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            My service covers all 21 New Jersey counties
          </h2>
          <p className="text-gray-800 mb-3">
            Whether you live in Bergen County, Ocean County, Camden County, or
            anywhere in between, I can help. Plan availability and rates vary by
            zip code. I run comparisons based on your specific location,
            doctors, and prescriptions.
          </p>
          <p className="text-gray-800">
            There is no cost to you. Carriers pay me directly, and my
            compensation does not change based on which plan you choose.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            Schedule a free review of your current Medicare coverage
          </h2>
          <p className="text-gray-800 mb-3">
            If you are already on Medicare and wondering whether your plan still
            makes sense, call me for a free review. Plans change every year.
            Premiums shift, networks adjust, and drug formularies get updated.
          </p>
          <p className="text-gray-800">
            A 15-minute call can save you hundreds of dollars annually. I will
            tell you honestly if your current plan is still the best fit or if
            something better is available.
          </p>
        </section>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-10 text-center">
          <p className="text-xl font-semibold text-blue-900 mb-2">
            Ready to talk with an independent NJ Medicare broker?
          </p>
          <p className="text-blue-800 mb-4">
            Call{" "}
            <a
              href="tel:855-559-1700"
              className="font-bold underline text-blue-900"
            >
              855-559-1700
            </a>{" "}
            for a free, no-obligation consultation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Get a Free Quote
          </Link>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Related resources
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare/medicare-supplement-plans-nj"
                className="text-blue-700 hover:underline"
              >
                Medicare Supplement Plans in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/medicare/medicare-advantage-plans-nj"
                className="text-blue-700 hover:underline"
              >
                Medicare Advantage Plans in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/medicare/plan-g-nj"
                className="text-blue-700 hover:underline"
              >
                Medicare Plan G in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-blue-700 hover:underline"
              >
                About Anthony Orner - Licensed Medicare Broker
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}