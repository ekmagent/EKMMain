import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare insurance agents in atlantic city new jersey | Free Quotes | MedicareYourself",
  description:
    "Medicare insurance agents in Atlantic City New Jersey — Anthony Orner compares plans from top carriers in Atlantic County. Free quotes, licensed broker support.",
  openGraph: {
    title:
      "medicare insurance agents in atlantic city new jersey | Free Quotes | MedicareYourself",
    description:
      "Medicare insurance agents in Atlantic City New Jersey — Anthony Orner compares plans from top carriers in Atlantic County. Free quotes, licensed broker support.",
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
      name: "Medicare Insurance Agents in Atlantic City, New Jersey",
      item: "https://www.medicareyourself.com/services/medicare-insurance-agents-in-atlantic-city-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Insurance Agents in Atlantic City, New Jersey: Honest Broker Help",
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
  mainEntityOfPage:
    "https://www.medicareyourself.com/services/medicare-insurance-agents-in-atlantic-city-new-jersey",
};

const faqs = [
  {
    question: "Should I use an insurance agent for Medicare?",
    answer:
      "Yes. A licensed Medicare agent compares plans across multiple carriers at no cost to you. Brokers are paid by insurance companies, not by you, so the quotes are free. An independent agent can show you options a single-carrier representative cannot.",
  },
  {
    question: "How do I pick a Medicare agent?",
    answer:
      "Look for a licensed, independent broker who represents multiple carriers in your county. Ask if they handle both Medicare Supplement and Medicare Advantage plans. Check that they are familiar with Atlantic County's specific plan options and network availability.",
  },
  {
    question: "Does Medicare have a local office in Atlantic City?",
    answer:
      "Medicare itself does not operate local offices. You can visit your local Social Security office for enrollment help, or you can work with a licensed Medicare broker like Anthony Orner who serves Atlantic City residents by phone and in person.",
  },
  {
    question: "What does a Medicare broker in Atlantic City cost?",
    answer:
      "Nothing. Licensed Medicare brokers are compensated by the insurance carrier when you enroll. You pay the same premium whether you use a broker or go directly to the carrier. There is no fee for quotes or consultations.",
  },
];

export default function MedicareInsuranceAgentsAtlanticCityNJ() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/medicare" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Medicare Insurance Agents in Atlantic City, New Jersey
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Medicare Insurance Agents in Atlantic City, New Jersey: Honest Broker
        Help
      </h1>

      <Image
        src="/images/medicare-insurance-agents-in-atlantic-city-new-jersey.webp"
        alt="Medicare insurance agents in Atlantic City New Jersey"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Medicare insurance agents in Atlantic City, New Jersey can save you
        hours of research and thousands of dollars over time. I'm Anthony Orner,
        a licensed independent Medicare broker who compares plans from top
        carriers across Atlantic County.
      </p>
      <p className="text-lg mb-6">
        Whether you're turning 65 or rethinking your current coverage, I'll walk
        you through every option at no cost. Let me do the homework for you.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why Atlantic City residents should use an independent broker
        </h2>
        <p className="mb-2">
          A captive agent works for one insurance company. An independent broker
          like me works for you. I'm contracted with multiple carriers, so I
          show you side-by-side comparisons instead of pushing a single product.
        </p>
        <p>
          My quotes are always free. Insurance companies pay my commission, not
          you. Your premium is the same whether you call a carrier directly or go
          through me.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Supplement and Advantage plans serving Atlantic County
        </h2>
        <p className="mb-2">
          Atlantic County has solid options for both Medicare Supplement
          (Medigap) and Medicare Advantage plans. Here's a quick breakdown:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-2">
          <li>
            <strong>Medicare Supplement Plan G</strong> - Covers everything
            Original Medicare doesn't except the Part B deductible ($257/year in
            2026). Rates vary by carrier and age.
          </li>
          <li>
            <strong>Medicare Supplement Plan N</strong> - Lower premium than Plan
            G, but you pay small copays at office visits and the Part B
            deductible.
          </li>
          <li>
            <strong>Medicare Advantage (Part C)</strong> - Bundles hospital,
            medical, and often drug coverage. Some plans in Atlantic County
            include dental and vision at $0 premium.
          </li>
        </ul>
        <p>
          I'll help you figure out which type fits your doctors, prescriptions,
          and budget.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Common enrollment pitfalls for shore-area retirees
        </h2>
        <p className="mb-2">
          The biggest mistake I see in Atlantic City? Waiting too long. Your
          Medigap Open Enrollment Period lasts 6 months starting the month
          you're 65 and enrolled in Part B. During this window, no carrier can
          deny you or charge more for health conditions.
        </p>
        <p className="mb-2">
          Miss that window and you may face medical underwriting, higher
          premiums, or flat-out denial.
        </p>
        <p>
          Another pitfall: assuming every doctor at AtlantiCare or Shore Medical
          Center accepts every Medicare Advantage plan. Networks change annually.
          I verify provider access before you enroll.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How the enrollment timeline works
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Turning 65:</strong> Medigap Open Enrollment starts the
            month your Part B begins. Apply early to lock in your rate.
          </li>
          <li>
            <strong>Medicare Advantage / Part D:</strong> Annual Enrollment runs
            October 15 through December 7 each year.
          </li>
          <li>
            <strong>Special Enrollment:</strong> Triggered by events like losing
            employer coverage or moving out of a plan's service area.
          </li>
          <li>
            <strong>Part B late penalty:</strong> 10% added to your premium for
            every 12-month period you delayed without qualifying coverage.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What to expect when you call me
        </h2>
        <p className="mb-2">
          No sales pitch. I ask about your doctors, medications, and budget.
          Then I pull real quotes from carriers available in Atlantic County and
          walk you through the numbers.
        </p>
        <p>
          Most calls take 15 to 20 minutes. You'll hang up with a clear
          recommendation, not more confusion.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Get a free Atlantic City Medicare quote from Anthony Orner
        </h2>
        <p className="mb-2">
          I've helped retirees across the Jersey Shore find the right Medicare
          plan without overpaying. Whether you need a Supplement, Advantage, or
          Part D drug plan, I'll compare your options and explain the trade-offs
          in plain English.
        </p>
        <p>Call today. The quote is free, and so is the advice.</p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center mb-10">
        <p className="text-xl font-semibold mb-2">
          Ready to compare Medicare plans in Atlantic City?
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a
            href="tel:8555591700"
            className="text-blue-700 font-bold hover:underline"
          >
            855-559-1700
          </a>{" "}
          or{" "}
          <Link
            href="/quote"
            className="text-blue-700 font-bold hover:underline"
          >
            Get a Free Quote
          </Link>
        </p>
        <p className="text-sm text-gray-600">
          Anthony Orner - Licensed Medicare Broker serving Atlantic County, NJ
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-supplement-plan-g-nj"
              className="text-blue-700 hover:underline"
            >
              Medicare Supplement Plan G in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-advantage-nj"
              className="text-blue-700 hover:underline"
            >
              Medicare Advantage Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/when-to-enroll-in-medicare"
              className="text-blue-700 hover:underline"
            >
              When to Enroll in Medicare
            </Link>
          </li>
          <li>
            <Link
              href="/medigap-open-enrollment"
              className="text-blue-700 hover:underline"
            >
              Medigap Open Enrollment Period Explained
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}