import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "tampa medicare agent | Free Plan Comparison | MedicareYourself",
  description:
    "Tampa Medicare agent Anthony Orner compares Supplement and Advantage plans across top Florida carriers. No cost, no obligation. Request your free quote now.",
  openGraph: {
    title:
      "tampa medicare agent | Free Plan Comparison | MedicareYourself",
    description:
      "Tampa Medicare agent Anthony Orner compares Supplement and Advantage plans across top Florida carriers. No cost, no obligation. Request your free quote now.",
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
      item: "https://medicareyourself.com/medicare-guides",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Tampa Medicare Agent",
      item: "https://medicareyourself.com/services/tampa-medicare-agent",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Tampa Medicare Agent: Licensed Broker Help for Supplement and Advantage Plans",
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
  mainEntityOfPage:
    "https://medicareyourself.com/services/tampa-medicare-agent",
};

const faqs = [
  {
    question: "Does it cost anything to use a Tampa Medicare agent?",
    answer:
      "No. Licensed Medicare brokers are paid by the insurance carrier, not by you. Our plan comparisons and consultations are completely free with no obligation.",
  },
  {
    question:
      "What is the difference between an independent broker and a captive agent?",
    answer:
      "A captive agent represents one insurance company and can only show you that company's plans. An independent broker like Anthony Orner works with multiple carriers, so you see a broader range of options and pricing.",
  },
  {
    question:
      "When is the best time to enroll in a Medigap plan in Tampa?",
    answer:
      "Your Medigap Open Enrollment Period starts the month you turn 65 and are enrolled in Part B. It lasts 6 months. During this window, carriers cannot deny you coverage or charge higher premiums based on health. Applying early - up to 6 months before your Part B start date - can lock in the best rate.",
  },
  {
    question:
      "Does Florida use attained-age or issue-age rating for Medigap?",
    answer:
      "Most Florida Medigap carriers use attained-age rating. That means your premium can increase as you get older, which is why locking in a plan early during your open enrollment window matters so much in this state.",
  },
];

export default function TampaMedicareAgent() {
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
        <span className="text-gray-700">Tampa Medicare Agent</span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Tampa Medicare Agent: Licensed Broker Help for Supplement and Advantage
        Plans
      </h1>

      <Image
        src="/images/tampa-medicare-agent.webp"
        alt="Tampa Medicare agent helping with plan comparison"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        A Tampa Medicare agent can save you real money by comparing Supplement
        and Advantage plans across every major Florida carrier. I'm Anthony
        Orner, a licensed independent Medicare broker, and I do this comparison
        for Tampa-area residents at no cost to you.
      </p>
      <p className="mb-6">
        The carriers pay me, not you. That means you get unbiased help choosing
        the right plan for your budget and doctors.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How a Tampa Medicare broker differs from a captive agent
        </h2>
        <p className="mb-2">
          A captive agent works for one insurance company. They can only show you
          that company's plans, even if a competitor offers the same coverage for
          less.
        </p>
        <p>
          As an independent broker, I quote plans from multiple carriers side by
          side. You see all the options. You pick the one that fits.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare Supplement and Advantage plans available in Hillsborough
          County
        </h2>
        <p className="mb-2">Tampa residents in Hillsborough County have access to:</p>
        <ul className="list-disc pl-6 space-y-1 mb-2">
          <li>
            <strong>Medicare Supplement (Medigap)</strong> - Plan G, Plan N, and
            others that cover gaps Original Medicare leaves behind, like the
            $1,676 Part A deductible and 20% Part B coinsurance
          </li>
          <li>
            <strong>Medicare Advantage (Part C)</strong> - HMO and PPO plans
            that may bundle prescription drug coverage, dental, and vision into
            one plan
          </li>
          <li>
            <strong>Part D prescription drug plans</strong> - Standalone drug
            coverage paired with Original Medicare and a Supplement
          </li>
        </ul>
        <p>
          I'll walk you through which combination works best based on your
          prescriptions, preferred doctors, and monthly budget.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Florida's attained-age rating and why it affects your premium
        </h2>
        <p className="mb-2">
          Florida carriers typically use attained-age pricing for Medigap plans.
          Your premium starts based on your current age and increases as you get
          older.
        </p>
        <p>
          This is why timing matters. The younger you are when you enroll, the
          lower your starting rate. Waiting even a year can mean a higher premium
          for the exact same plan.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why your Medigap open enrollment window is critical
        </h2>
        <p className="mb-2">
          Your Medigap Open Enrollment Period lasts 6 months, starting the month
          you're both 65 and enrolled in Part B. During this window, no carrier
          can turn you down or charge more because of a health condition.
        </p>
        <p>
          My practice is to have clients apply up to 6 months before their Part
          B start date. This locks in the rate early and protects you from
          premium increases before coverage even begins. The sooner you lock in,
          the better your rate.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What to expect when we work together
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>A 15-minute call to review your medications, doctors, and budget</li>
          <li>A side-by-side comparison of plans from multiple carriers</li>
          <li>A clear recommendation with no pressure to buy</li>
          <li>Free help with enrollment paperwork if you choose a plan</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Get a free Tampa Medicare quote in minutes
        </h2>
        <p className="mb-2">
          Whether you're turning 65, retiring, or just reviewing your current
          coverage during Open Enrollment (October 15 through December 7), I can
          run a free comparison in minutes.
        </p>
        <p>
          Call me directly or request a quote online. There's no cost and no
          obligation.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center my-10">
        <p className="text-xl font-bold mb-2">
          Talk to a Licensed Tampa Medicare Agent Today
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
              href="/medicare-guides/medicare-supplement-plan-g"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plan G: Full Breakdown
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
              href="/medicare-guides/when-to-enroll-in-medicare"
              className="text-blue-600 hover:underline"
            >
              When to Enroll in Medicare: Key Dates and Deadlines
            </Link>
          </li>
          <li>
            <Link
              href="/services/florida-medicare-broker"
              className="text-blue-600 hover:underline"
            >
              Florida Medicare Broker: Statewide Plan Comparison
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}