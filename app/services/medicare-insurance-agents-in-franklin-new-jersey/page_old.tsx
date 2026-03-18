import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare insurance agents in franklin new jersey | Free Quotes | MedicareYourself",
  description:
    "Medicare insurance agents in Franklin New Jersey — compare Supplement and Advantage plans with licensed broker Anthony Orner. Free quotes, zero pressure.",
  openGraph: {
    title:
      "medicare insurance agents in franklin new jersey | Free Quotes | MedicareYourself",
    description:
      "Medicare insurance agents in Franklin New Jersey — compare Supplement and Advantage plans with licensed broker Anthony Orner. Free quotes, zero pressure.",
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
      name: "Medicare Insurance Agents in Franklin, New Jersey",
      item: "https://www.medicareyourself.com/services/medicare-insurance-agents-in-franklin-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Insurance Agents in Franklin, New Jersey: Independent Broker Access",
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
  datePublished: "2025-07-15",
  dateModified: "2025-07-15",
};

const faqs = [
  {
    question: "Should I use an insurance agent for Medicare?",
    answer:
      "Yes. A licensed independent Medicare agent can compare plans from multiple carriers at no cost to you. The carriers pay the agent's commission, so you get professional guidance without paying a fee. An independent agent is not locked into one company, which means you see more options than working directly with a single insurer.",
  },
  {
    question: "Do Medicare insurance agents charge?",
    answer:
      "No. Independent Medicare agents like Anthony Orner are compensated directly by the insurance carriers. You pay nothing extra for the advice, plan comparisons, or enrollment assistance. The premiums you pay are the same whether you use an agent or enroll on your own.",
  },
  {
    question: "How can I get help with Medicare premiums in New Jersey?",
    answer:
      "New Jersey residents may qualify for Medicare Savings Programs (MSP) that help pay Part B premiums, deductibles, and coinsurance. Programs like QMB, SLMB, and QI have different income thresholds. Contact your local county assistance office or call us at 855-559-1700 and we can point you in the right direction.",
  },
  {
    question: "What is the highest reviewed Medicare insurance in NJ?",
    answer:
      "Plan ratings change each year, and the best plan depends on your doctors, prescriptions, and budget. In Somerset County, several Medicare Advantage and Medigap carriers consistently earn high CMS star ratings. The best way to find the right fit is a side-by-side comparison with an independent broker who knows the local network landscape.",
  },
];

export default function MedicareInsuranceAgentsFranklinNJ() {
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
          Medicare Insurance Agents in Franklin, New Jersey
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Medicare Insurance Agents in Franklin, New Jersey: Independent Broker
        Access
      </h1>

      <Image
        src="/images/medicare-insurance-agents-in-franklin-new-jersey.webp"
        alt="Medicare insurance agents in Franklin New Jersey"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Medicare insurance agents in Franklin, New Jersey can make the
        difference between a plan that works for your life and one that drains
        your wallet. Franklin Township sits in Somerset County, and residents
        here have access to a solid range of Medicare Supplement and Medicare
        Advantage carriers.
      </p>
      <p className="text-lg mb-6">
        I'm Anthony Orner, a licensed independent Medicare broker serving
        Franklin and surrounding Somerset County communities. My job is to
        compare your options across carriers so you don't have to.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why Franklin Township residents benefit from an independent broker
        </h2>
        <p className="mb-2">
          A captive agent works for one insurance company. An independent broker
          works for you. I'm contracted with multiple carriers, so I can pull
          quotes side by side and show you real price differences.
        </p>
        <p>
          You pay the same premium whether you enroll directly or through me.
          The carrier pays my commission - not you. That means zero cost for
          professional guidance.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Carriers and plan types available in Somerset County
        </h2>
        <p className="mb-2">
          Somerset County residents can choose from both Medicare Supplement
          (Medigap) and Medicare Advantage plans. Here's what I typically
          compare:
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-2">
          <li>
            <strong>Medigap Plan G</strong> - covers the Part A deductible
            ($1,676 in 2026), skilled nursing coinsurance, and Part B excess
            charges
          </li>
          <li>
            <strong>Medigap Plan N</strong> - lower premium than Plan G, but you
            pay small copays at office visits and the Part B deductible ($257)
          </li>
          <li>
            <strong>Medicare Advantage (Part C)</strong> - often $0 premium plans
            with built-in drug coverage and extras like dental and vision
          </li>
          <li>
            <strong>Part D prescription drug plans</strong> - standalone coverage
            if you go the Medigap route
          </li>
        </ul>
        <p>Rates vary by carrier, age, and tobacco status. I'll show you actual numbers.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Common Medicare mistakes Franklin residents make at 65
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Missing Medigap Open Enrollment.</strong> You get 6 months
            of guaranteed issue starting the month you turn 65 and have Part B.
            During this window, no health questions and no higher premiums. Miss
            it and carriers can deny you or charge more.
          </li>
          <li>
            <strong>Waiting too long to apply.</strong> I have my clients apply
            up to 6 months before their Part B start date to lock in rates
            early. The sooner you lock in, the better your rate.
          </li>
          <li>
            <strong>Skipping Part B enrollment.</strong> If you delay Part B
            without qualifying employer coverage, you face a 10% penalty for
            every 12 months you waited. That penalty lasts for life.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How the quoting process works
        </h2>
        <p className="mb-2">
          Call me or fill out the form. I'll ask about your doctors, medications,
          and budget. Then I pull quotes from every carrier available in Somerset
          County and lay them next to each other.
        </p>
        <p>
          The whole process takes about 15 minutes. No pressure, no obligation.
          If you want to enroll, I handle the paperwork.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare Advantage open enrollment dates
        </h2>
        <p className="mb-2">
          The Annual Enrollment Period for Medicare Advantage and Part D runs
          October 15 through December 7 each year. During this window you can
          switch Advantage plans, drop Advantage and return to Original Medicare,
          or change your Part D plan.
        </p>
        <p>
          If you're turning 65, you have a separate Initial Enrollment Period.
          Timing matters - call to confirm your specific dates.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Request a free side-by-side plan comparison
        </h2>
        <p>
          I serve Franklin Township, Somerset County, and all of New Jersey. Whether you're turning 65 next month or reconsidering your current plan, a quick comparison call can save you hundreds per year. No sign-up required - just a conversation.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-8 text-center mb-10">
        <p className="text-xl font-bold mb-2">
          Talk to a Licensed Medicare Broker Today
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-semibold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/contact" className="underline font-semibold">
            Get a Free Quote
          </Link>
        </p>
        <p className="text-sm opacity-90">
          No fees. No obligation. Just honest Medicare advice for Franklin, NJ
          residents.
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
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
              href="/medicare-guides/medicare-advantage-plans-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage Plans in NJ
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
          <li>
            <Link
              href="/medicare-guides/medigap-open-enrollment-nj"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment in New Jersey
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}