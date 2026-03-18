import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "best medicare insurance brokers near me | Free Quotes, No Cost | MedicareYourself",
  description:
    "Best Medicare insurance brokers near you in NJ. Anthony Orner is an independent licensed broker who compares every major carrier at no cost. Free quote.",
  openGraph: {
    title:
      "best medicare insurance brokers near me | Free Quotes, No Cost | MedicareYourself",
    description:
      "Best Medicare insurance brokers near you in NJ. Anthony Orner is an independent licensed broker who compares every major carrier at no cost. Free quote.",
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
      name: "Best Medicare Insurance Brokers Near Me",
      item: "https://www.medicareyourself.com/services/best-medicare-insurance-brokers-near-me",
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
    question: "How to choose a Medicare broker?",
    answer:
      "Look for a broker who is licensed in your state, independent (not tied to one carrier), and willing to show you plans from multiple insurers side by side. Ask how many carriers they represent. A good broker explains tradeoffs honestly and never pressures you into a decision.",
  },
  {
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. Medicare brokers are paid commissions by the insurance carriers, not by you. The premiums you pay are the same whether you use a broker or enroll directly. There's no fee, no markup, and no catch.",
  },
  {
    question: "What's the difference between a Medicare broker and a Medicare agent?",
    answer:
      "A captive agent works for one insurance company and can only sell that company's plans. An independent broker represents multiple carriers and can compare options across the market. Independent brokers typically find better fits because they aren't locked into one product line.",
  },
  {
    question: "Can a Medicare broker help me switch plans?",
    answer:
      "Yes. During the Medicare Advantage/Part D Open Enrollment (October 15 through December 7) or if you have a qualifying life event, a broker can help you compare new options and switch plans at no cost.",
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
        <Link href="/medicare-guides" className="hover:underline">
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
          src="/images/hub_best-medicare-insurance-brokers-near-me.webp"
          alt="best medicare insurance brokers near me"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Best Medicare insurance brokers near you aren't the ones with the biggest ads. They're the ones who represent enough carriers to actually compare your options. That distinction matters more than most people realize when they're picking a plan that covers their doctors, medications, and budget.
        </p>
        <p className="text-lg mb-6">
          I'm Anthony Orner, an independent licensed broker in New Jersey. Here's what I tell every person who calls me for the first time.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What separates a good Medicare broker from a captive agent
          </h2>
          <p className="mb-2">
            A captive agent works for one insurance company. They sell that company's plans, period. If your best option is with a different carrier, they can't help you find it.
          </p>
          <p>
            An independent broker like me contracts with multiple carriers. I can pull quotes from Aetna, Cigna, Humana, United, Mutual of Omaha, and others, then lay them side by side so you see real differences in price and coverage. No loyalty to any one insurer.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Questions to ask before choosing a Medicare broker
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>How many insurance carriers do you represent?</li>
            <li>Are you licensed in my state?</li>
            <li>Do you charge any fees? (The answer should always be no.)</li>
            <li>Will you help me during claims or billing issues after enrollment?</li>
            <li>Can you explain the tradeoffs between Medicare Advantage and Medigap?</li>
          </ul>
          <p className="mt-3">
            If a broker can't answer these clearly, keep looking.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why independent brokers get you lower rates in NJ
          </h2>
          <p className="mb-2">
            New Jersey has dozens of Medicare Supplement and Medicare Advantage plans. Premiums for the same coverage can vary by $50 to $100+ per month depending on the carrier. An independent broker sees the full picture.
          </p>
          <p>
            Captive agents only show you one slice. That might be fine. Or it might cost you hundreds of dollars a year you didn't need to spend.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            There's no cost to use a Medicare broker
          </h2>
          <p className="mb-2">
            This surprises people. Medicare brokers are compensated by the insurance carriers directly. Your premium is identical whether you enroll through a broker, call the carrier, or sign up on medicare.gov.
          </p>
          <p>
            The difference: a broker does the comparison work for you and is available when something goes wrong later.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            When to reach out to a broker
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Turning 65:</strong> Your Medigap Open Enrollment Period starts the month you turn 65 and are enrolled in Part B. This is your best window for guaranteed acceptance.
            </li>
            <li>
              <strong>Retiring and losing employer coverage:</strong> You may qualify for a Special Enrollment Period and federal guaranteed issue rights.
            </li>
            <li>
              <strong>Annual Enrollment (Oct 15 - Dec 7):</strong> If your current plan changed premiums, drug formulary, or provider network.
            </li>
          </ul>
          <p className="mt-3">
            Don't wait until the last week. Good brokers get booked during enrollment season.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Work with Anthony Orner — licensed and independent in New Jersey
          </h2>
          <p className="mb-2">
            I work with people across New Jersey, from Bergen County to Ocean County and everywhere in between. Every consultation is free. I compare every major Medicare carrier, explain the tradeoffs in plain language, and let you decide.
          </p>
          <p>
            No pressure. No gimmicks. Just a straight answer about which plan fits your situation.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center my-10">
          <p className="text-xl font-semibold mb-2">
            Ready to compare your Medicare options?
          </p>
          <p className="text-lg mb-4">
            Call{" "}
            <a
              href="tel:8555591700"
              className="underline font-bold"
            >
              855-559-1700
            </a>{" "}
            or{" "}
            <Link
              href="/contact"
              className="underline font-bold"
            >
              get a free quote online
            </Link>
            .
          </p>
          <p className="text-sm opacity-90">
            No fees. No obligation. Licensed in New Jersey.
          </p>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10 mb-8">
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
                href="/medicare-guides/medicare-advantage-vs-medigap"
                className="text-blue-600 hover:underline"
              >
                Medicare Advantage vs. Medigap: Which Is Right for You?
              </Link>
            </li>
            <li>
              <Link
                href="/services/independent-medicare-agent-nj"
                className="text-blue-600 hover:underline"
              >
                Independent Medicare Agent in NJ
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/when-to-enroll-in-medicare"
                className="text-blue-600 hover:underline"
              >
                When to Enroll in Medicare
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}