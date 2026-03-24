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
    "Tampa medicare agent Anthony Orner compares Supplement and Advantage plans across top Florida carriers. No cost, no obligation. Request your free quote now.",
  alternates: { canonical: "https://medicareyourself.com/services/tampa-medicare-agent" },
  openGraph: {
    title:
      "tampa medicare agent | Free Plan Comparison | MedicareYourself",
    description:
      "Tampa medicare agent Anthony Orner compares Supplement and Advantage plans across top Florida carriers. No cost, no obligation. Request your free quote now.",
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
  datePublished: "2026-03-18",
  dateModified: "2026-03-22",
};

const faqs = [
  {
    question: "Does it cost anything to use a Tampa Medicare agent?",
    answer:
      "No. Licensed Medicare brokers are paid by the insurance carriers, not by you. Our plan comparisons and consultations are completely free with no obligation.",
  },
  {
    question:
      "What is the difference between a Medicare broker and a captive agent in Tampa?",
    answer:
      "A captive agent represents one carrier and can only show you that company's plans. An independent broker like Anthony Orner compares plans across multiple carriers so you can see the full picture before choosing.",
  },
  {
    question:
      "Does Florida use attained-age or issue-age rating for Medigap?",
    answer:
      "Florida uses attained-age rating for most Medigap policies. That means your premium can increase as you get older, which makes choosing the right plan and timing your enrollment especially important.",
  },
  {
    question:
      "When is the best time to enroll in a Medigap plan in Tampa?",
    answer:
      "Your Medigap Open Enrollment Period starts the month you turn 65 and are enrolled in Part B. During this 6-month window, carriers cannot deny you or charge more for health conditions. Apply up to 6 months before your Part B start date to lock in your rate.",
  },
];

export default function TampaMedicareAgent() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">Tampa Medicare Agent</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Tampa Medicare Agent: Licensed Broker Help for Supplement and Advantage
        Plans
      </h1>

      <Image
        src="/images/hub_tampa-medicare-agent.webp"
        alt="Tampa medicare agent"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        A Tampa medicare agent who works independently can show you plans from
        multiple carriers side by side, not just one company's lineup. I'm
        Anthony Orner, a licensed broker serving Hillsborough County and the
        greater Tampa Bay area.
      </p>
      <p className="text-lg mb-6">
        My comparisons cost you nothing. Carriers pay me directly, so my only
        job is finding the plan that actually fits your situation.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          How a Tampa Medicare broker differs from a captive agent
        </h2>
        <p className="mb-2">
          A captive agent sells for one insurance company. If that company's Plan
          G costs $40 more per month than a competitor's identical Plan G, they
          can't tell you. An independent broker can.
        </p>
        <p>
          I compare rates across top Florida carriers for every client. Same
          standardized benefits, different premiums. That difference adds up fast.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare Supplement and Advantage plans available in Hillsborough
          County
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Medigap Plan G:</strong> Covers everything Original Medicare
            doesn't except the Part B deductible ($283/year in 2026). Most
            popular Supplement in Tampa.
          </li>
          <li>
            <strong>Medigap Plan N:</strong> Lower premium than G, but you'll pay
            small copays at office visits and the Part B deductible.
          </li>
          <li>
            <strong>Medicare Advantage (Part C):</strong> Bundles hospital, medical, and
            often drug coverage into one plan. Many Tampa HMO and PPO options
            carry $0 premiums but use provider networks.
          </li>
          <li>
            <strong>Part D:</strong> Standalone prescription drug plan, paired
            with Original Medicare and a Supplement.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Florida's attained-age rating and why it affects your premium
        </h2>
        <p className="mb-2">
          Florida allows attained-age pricing on Medigap policies. Your premium
          starts based on your current age and rises as you get older. A plan
          that costs $130/month at 65 could cost $200+ at 75 with the same
          carrier.
        </p>
        <p>
          This makes your initial carrier choice critical. I show you each
          company's rate history so you're not surprised five years from now.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Why timing matters for Medigap enrollment in Tampa
        </h2>
        <p className="mb-2">
          Your Medigap Open Enrollment Period lasts 6 months, starting the month
          you're both 65 and enrolled in Part B. During this window, no carrier
          in Florida can reject you or charge more for pre-existing conditions.
        </p>
        <p>
          Miss it, and carriers can underwrite you. Apply up to 6 months before
          your Part B start date to lock in the best rate.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Local hospitals and networks to consider
        </h2>
        <p className="mb-2">
          If you use Tampa General Hospital, AdventHealth Tampa, or St. Joseph's
          Hospital, your plan choice matters. Original Medicare with a Supplement
          works at any provider that accepts Medicare. Advantage plans may
          restrict you to specific networks in Hillsborough County.
        </p>
        <p>
          I verify network access for your doctors before recommending any
          Advantage plan.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Get a free Tampa Medicare quote in minutes
        </h2>
        <p className="mb-2">
          Call me directly. I'll ask a few questions about your doctors, prescriptions, and budget, then pull quotes from multiple carriers. The whole call usually takes about 15 minutes.
        </p>
        <p>
          No pressure, no obligation. If the plan you have now is already the
          best fit, I'll tell you that too.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Ready to compare Tampa Medicare plans?
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/quote" className="underline font-bold">
            get a free quote online
          </Link>
          .
        </p>
      </div>

      <section className="mt-12">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medigap Plan G: What It Covers and What It Costs
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
              href="/services/tampa-medicare-agent"
              className="text-blue-600 hover:underline"
            >
              Florida Medigap Rules and Enrollment Windows
            </Link>
          </li>
          <li>
            <Link
              href="/learn/how-to-sign-up-for-medicare"
              className="text-blue-600 hover:underline"
            >
              When to Enroll in Medicare Part B
            </Link>
          </li>
                    <li>
              <Link
                href="/services/us-medicare-brokers"
                className="text-blue-600 hover:underline"
              >
                Us Medicare Brokers
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
                href="/services/help-with-your-medicare-decision"
                className="text-blue-600 hover:underline"
              >
                Help With Your Medicare Decision
              </Link>
            </li>
            <li>
              <Link
                href="/services/best-medicare-plan-for-chronic-conditions"
                className="text-blue-600 hover:underline"
              >
                Best Medicare Plan For Chronic Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-consultant-in-ft-lauderdale-fl"
                className="text-blue-600 hover:underline"
              >
                Medicare Consultant In Ft Lauderdale FL
              </Link>
            </li>
</ul>
      </section>
    </main>
  );
}