import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "best medicare insurance brokers near me | Free Quote, No Cost | MedicareYourself",
  description:
    "Best Medicare insurance brokers near you in NJ. Anthony Orner is an independent licensed broker who compares every major carrier at no cost. Get a free quote.",
  alternates: { canonical: "https://medicareyourself.com/services/best-medicare-insurance-brokers-near-me" },
  openGraph: {
    title:
      "best medicare insurance brokers near me | Free Quote, No Cost | MedicareYourself",
    description:
      "Best Medicare insurance brokers near you in NJ. Anthony Orner is an independent licensed broker who compares every major carrier at no cost. Get a free quote.",
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
      name: "Best Medicare Insurance Brokers Near Me",
      item: "https://medicareyourself.com/services/best-medicare-insurance-brokers-near-me",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Find the Best Medicare Insurance Broker Near You",
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
    question: "How do I choose a Medicare broker?",
    answer:
      "Look for a broker who is independently licensed, not tied to one carrier. Ask how many companies they represent, whether they charge a fee (they shouldn't), and if they help with claims issues after enrollment. An independent broker can show you plans from every major carrier so you're comparing real options, not a curated few.",
  },
  {
    question: "Do Medicare brokers charge a fee?",
    answer:
      "No. Licensed Medicare brokers are paid a commission by the insurance carrier you choose. You pay the same premium whether you enroll directly or through a broker. There's no added cost for their help.",
  },
  {
    question: "What's the difference between a Medicare broker and a Medicare agent?",
    answer:
      "A captive agent works for one insurance company and can only sell that company's plans. An independent broker is contracted with multiple carriers and can compare options across the market. This means a broker can find you the best rate and coverage match, not just the plan their employer sells.",
  },
  {
    question: "Can a Medicare broker help me switch plans?",
    answer:
      "Yes. During the Medicare Advantage/Part D Open Enrollment (October 15 through December 7) or if you have a qualifying life event, an independent broker can review your current plan, compare alternatives, and handle the enrollment paperwork for you.",
  },
];

export default function BestMedicareBrokersNearMe() {
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
        <span className="text-gray-700">
          Best Medicare Insurance Brokers Near Me
        </span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          How to Find the Best Medicare Insurance Broker Near You
        </h1>

        <Image
          src="/images/best-medicare-insurance-brokers-near-me_vector.webp"
          alt="best medicare insurance brokers near me"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          The best Medicare insurance brokers near you aren't the ones with the
          biggest ad budget. They're the ones who sit down, listen to your
          doctor list and medication needs, and show you every plan that fits.
        </p>
        <p className="text-lg mb-6">
          That's a harder thing to search for online. Here's what actually
          matters when you're choosing someone to trust with your healthcare
          coverage.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What separates a good Medicare broker from a captive agent
          </h2>
          <p className="mb-2">
            A captive agent works for one insurance company. They sell that
            company's plans, period. If their carrier's Plan G costs $40 more
            per month than a competitor's, they can't tell you about the
            cheaper option.
          </p>
          <p>
            An independent broker is contracted with multiple carriers. They
            pull rates from across the market and lay them side by side. Same
            coverage letter, different price. That's the advantage.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Questions to ask before choosing a Medicare broker
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>How many insurance carriers do you represent?</li>
            <li>Are you licensed in my state?</li>
            <li>Do you charge me anything? (The answer should be no.)</li>
            <li>Will you help me if I have a claims problem after I enroll?</li>
            <li>Can you compare both Medicare Advantage and Medigap plans?</li>
          </ul>
          <p className="mt-3">
            If someone dodges these questions or rushes you toward one plan,
            that's your signal to keep looking.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why independent brokers get you lower rates in NJ
          </h2>
          <p className="mb-2">
            New Jersey has dozens of carriers offering Medigap and Medicare
            Advantage plans. Premiums for the exact same Plan G can vary by
            $80 or more per month depending on the company.
          </p>
          <p>
            An independent broker sees those differences instantly. A captive
            agent never will. In NJ, where Medigap Open Enrollment lasts 6
            months starting the month you turn 65 and have Part B, locking in
            the right rate from the start saves you real money year after year.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What a broker should never charge you
          </h2>
          <p className="mb-2">
            Medicare brokers earn a commission from the carrier when you
            enroll. You pay the same monthly premium whether you use a broker
            or go directly to the insurance company.
          </p>
          <p>
            If anyone asks you for an upfront fee, a "consultation charge," or
            anything beyond your normal plan premium, walk away. That's not
            how legitimate Medicare brokerage works.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            When to contact a broker (timing matters)
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Turning 65:</strong> Start 6 months before your Part B
              effective date to compare Medigap rates during your open
              enrollment window.
            </li>
            <li>
              <strong>Retiring after 65:</strong> Contact a broker as soon as
              you know your employer coverage end date.
            </li>
            <li>
              <strong>Annual enrollment:</strong> October 15 through December 7
              for Medicare Advantage and Part D changes.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Work with Anthony Orner — licensed and independent in New Jersey
          </h2>
          <p className="mb-2">
            I'm Anthony Orner, an independent Medicare broker based in NJ. I'm
            contracted with every major carrier in the state, and I don't charge
            you a cent. My job is to compare your options honestly, explain the
            tradeoffs in plain English, and help you enroll in the plan that
            actually fits your doctors, medications, and budget.
          </p>
          <p>
            After enrollment, I'm still your broker. Claims issues, plan
            questions, annual reviews. One call: 855-559-1700.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center my-10">
          <p className="text-xl font-semibold mb-3">
            Ready to compare Medicare plans with an independent broker?
          </p>
          <p className="text-lg mb-4">
            Call{" "}
            <a
              href="tel:8555591700"
              className="underline font-bold text-white"
            >
              855-559-1700
            </a>{" "}
            or{" "}
            <Link
              href="/contact"
              className="underline font-bold text-white"
            >
              get a free quote online
            </Link>
            .
          </p>
          <p className="text-sm opacity-90">
            No fees. No pressure. Just honest plan comparisons.
          </p>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare-supplement/new-jersey"
                className="text-blue-600 hover:underline"
              >
                Medigap Plans in New Jersey: What You Need to Know
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
                href="/learn/how-to-sign-up-for-medicare"
                className="text-blue-600 hover:underline"
              >
                When to Enroll in Medicare: Key Dates and Deadlines
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-blue-600 hover:underline"
              >
                About Anthony Orner — Your Independent Medicare Broker
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
                href="/services/best-medicare-broker-no-cost-to-you"
                className="text-blue-600 hover:underline"
              >
                Best Medicare Broker No Cost To You
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
                href="/services/help-with-your-medicare-decision"
                className="text-blue-600 hover:underline"
              >
                Help With Your Medicare Decision
              </Link>
            </li>
            <li>
              <Link
                href="/services/best-medicare-insurance-broker-near-hackensack-nj"
                className="text-blue-600 hover:underline"
              >
                Best Medicare Insurance Broker Near Hackensack NJ
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-brokers-in-my-area"
                className="text-blue-600 hover:underline"
              >
                Medicare Brokers In My Area
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-part-d-insurance-brokers-18517"
                className="text-blue-600 hover:underline"
              >
                Medicare Part D Insurance Brokers 18517
              </Link>
            </li>
</ul>
        </section>
      </article>
    </>
  );
}