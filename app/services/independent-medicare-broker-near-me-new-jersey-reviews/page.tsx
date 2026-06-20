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
    "Read New Jersey client reviews of independent Medicare broker Anthony Orner. Compare Medigap, Advantage & Part D at no cost. Call 855-559-1700 today.",
  alternates: { canonical: "https://medicareyourself.com/services/independent-medicare-broker-near-me-new-jersey-reviews" },
  openGraph: {
    title:
      "independent medicare broker near me new jersey reviews | Free Consultation | MedicareYourself",
    description:
      "Independent Medicare broker near me in New Jersey — read real client reviews of Anthony Orner. Licensed, independent, no cost to you. Book a free call today.",
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
      name: "Independent Medicare Broker Near Me in New Jersey: Reviews",
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
  datePublished: "2026-03-18",
  dateModified: "2026-03-22",
};

const faqs = [
  {
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. Independent Medicare brokers are paid by the insurance carriers, not by you. The plans cost the same whether you enroll directly or through a broker. You get free guidance with zero markup.",
  },
  {
    question: "What is the best Medicare plan in New Jersey?",
    answer:
      "There's no single best plan for everyone. The right choice depends on your doctors, prescriptions, budget, and how often you travel. An independent broker compares plans across multiple carriers to find your best fit — not just the plan that pays the highest commission.",
  },
  {
    question:
      "What's the difference between an independent broker and a captive agent?",
    answer:
      "A captive agent works for one insurance company and can only show you their plans. An independent broker is licensed with multiple carriers and can compare options side by side. You get broader choices and unbiased recommendations.",
  },
  {
    question: "How do I verify a Medicare broker's license in New Jersey?",
    answer:
      "Visit the NJ Department of Banking and Insurance website and search for the broker's name. You can confirm their active license status and see which lines of insurance they're authorized to sell.",
  },
];

export default function IndependentMedicareBrokerNJReviewsPage() {
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
          Independent Medicare Broker NJ Reviews
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Independent Medicare Broker Near Me in New Jersey: Reviews and What
        Clients Say
      </h1>

      <Image
        src="/images/independent-medicare-broker-near-me-new-jersey-reviews.webp"
        alt="Independent Medicare broker near me New Jersey reviews"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        Independent Medicare broker near me in New Jersey reviews matter because
        choosing someone to handle your coverage is personal. You're trusting
        them with your doctors, your prescriptions, and your budget. I'm Anthony
        Orner, a licensed independent broker based right here in NJ, and I want
        you to see exactly what working with me looks like before you pick up the
        phone.
      </p>

      <PhoneCTA />

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          What real NJ clients say about working with Anthony Orner
        </h2>
        <p className="mb-2">
          Clients consistently mention three things: I explain options without
          rushing, I follow up after enrollment, and I don't push one plan over
          another. People turning 65 in towns like Toms River, Cherry Hill, and
          Morristown tell me the same thing: they expected a sales pitch and got
          a conversation instead.
        </p>
        <p>
          Several clients have shared that they felt overwhelmed by mailers and
          TV ads before we spoke. After one call, they understood what Part A,
          Part B, Medigap, and Medicare Advantage actually meant for their
          specific situation.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          How to evaluate a Medicare broker beyond star ratings
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Independence:</strong> Do they represent multiple carriers or
            just one? A captive agent can only show you their company's plans.
          </li>
          <li>
            <strong>License verification:</strong> Check the NJ Department of
            Banking and Insurance to confirm active status.
          </li>
          <li>
            <strong>Post-enrollment support:</strong> A good broker helps with
            claims issues and annual reviews, not just initial sign-up.
          </li>
          <li>
            <strong>No cost to you:</strong> Carriers pay the broker. If anyone
            charges you a fee, walk away.
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          Questions to ask any NJ broker before you enroll
        </h2>
        <p className="mb-2">
          Before you commit, ask these directly:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>How many carriers do you represent?</li>
          <li>Will you check if my doctors are in-network?</li>
          <li>Do you review my drug list against each plan's formulary?</li>
          <li>What happens if I need help after January 1?</li>
          <li>Are you available during the Medicare Advantage Open Enrollment (October 15 through December 7)?</li>
        </ul>
        <p className="mt-2">
          If you get vague answers or feel rushed, that tells you everything.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why independent matters more than you think
        </h2>
        <p className="mb-2">
          New Jersey has dozens of Medicare Advantage and Medigap carriers. An
          independent broker compares them all. A captive agent shows you one
          company's lineup and calls it a day.
        </p>
        <p>
          That difference can mean hundreds of dollars a year in premiums, better
          drug coverage, or keeping the specialist you've seen for a decade. The
          2026 Part B premium is $202.90/month and the Part B deductible is
          $283/year. Those baseline costs are fixed, but everything layered on
          top varies wildly by plan.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          What NJ residents often get wrong about Medicare reviews
        </h2>
        <p className="mb-2">
          Many people pick a plan at 65 and never look at it again. Plans change
          every year: networks shift, formularies update, premiums adjust. What
          worked in 2024 might cost you more in 2026.
        </p>
        <p>
          I do annual coverage reviews for every client. No charge. If your
          current plan is still the best fit, I'll tell you. If something better
          exists, I'll show you the numbers side by side.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          Schedule a free review of your current Medicare coverage
        </h2>
        <p className="mb-2">
          Whether you're turning 65 next month or you've been on Medicare for
          years, a 15-minute call can show you what you might be missing. Bring
          your drug list and your current plan card. I'll do the rest.
        </p>
        <p>
          No cost. No pressure. Just clear answers from someone licensed in New
          Jersey who works for you, not for one carrier.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
        <p className="text-xl font-bold mb-2">
          Talk to an independent NJ Medicare broker today
        </p>
        <p className="mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-semibold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/contact" className="underline font-semibold">
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
              href="/medicare-supplement/new-jersey"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-advantage/new-jersey"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage Plans in NJ
            </Link>
          </li>
          <li>
            <Link
              href="/learn/medicare-parts-explained"
              className="text-blue-600 hover:underline"
            >
              Medicare Part D Drug Coverage Guide
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-blue-600 hover:underline"
            >
              About Anthony Orner — Your Licensed NJ Broker
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
                href="/services/best-independent-medicare-broker-near-me-new-jersey"
                className="text-blue-600 hover:underline"
              >
                Best Independent Medicare Broker Near Me New Jersey
              </Link>
            </li>
</ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/basics/get-started-with-medicare" target="_blank" rel="noopener noreferrer" className="underline">Medicare.gov — Get Started with Medicare</a> and <a href="https://www.medicare.gov/talk-to-someone" target="_blank" rel="noopener noreferrer" className="underline">Talk to Someone at Medicare.gov</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Verify a broker's license or get free NJ counseling: <a href="https://www.state.nj.us/dobi/" target="_blank" rel="noopener noreferrer" className="underline">NJ Department of Banking and Insurance</a> and <a href="https://www.nj.gov/humanservices/doas/services/ship/" target="_blank" rel="noopener noreferrer" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Verify a broker's license or file a concern with the <a href="https://www.state.nj.us/dobi/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey Department of Banking and Insurance</a>, or get free unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Verify a broker's license: <a href="https://www.state.nj.us/dobi/index.shtml" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a>. Free unbiased counseling: <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP Program</a>.</div>
            <div className="text-sm text-gray-600 mt-2">Verify a New Jersey broker license through the <a href="https://www.state.nj.us/dobi/" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP</a>.</div>
            <div className="text-sm text-gray-600 mt-2">Verify any New Jersey broker's license through the <a href="https://www.state.nj.us/dobi/index.shtml" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP</a>.</div>
      </section>
    </main>
  );
}