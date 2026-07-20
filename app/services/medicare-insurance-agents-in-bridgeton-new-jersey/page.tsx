import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import LocalServiceSchema from "@/components/LocalServiceSchema";

export const metadata: Metadata = {
  title:
    "medicare insurance agents in bridgeton new jersey | Free Local Broker | MedicareYourself",
  description:
    "Medicare agents in Bridgeton, NJ — Anthony Orner compares Supplement & Advantage plans across top carriers at no cost. Call 855-559-1700 for a free quote.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-insurance-agents-in-bridgeton-new-jersey" },
  openGraph: {
    title:
      "medicare insurance agents in bridgeton new jersey | Free Local Broker | MedicareYourself",
    description:
      "Medicare insurance agents in Bridgeton, New Jersey — Anthony Orner compares Supplement and Advantage plans across carriers in Cumberland County. Free quote.",
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
      name: "Medicare Insurance Agents in Bridgeton, New Jersey",
      item: "https://medicareyourself.com/services/medicare-insurance-agents-in-bridgeton-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Insurance Agents in Bridgeton, New Jersey — Independent Broker for Cumberland County",
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
    question: "Should I use an insurance agent for Medicare?",
    answer:
      "Yes. A licensed independent broker compares plans across multiple carriers at no cost to you. Brokers are paid by the insurance companies, not by you, so there's no fee for their help. An independent agent can show you options a captive agent tied to one company cannot.",
  },
  {
    question: "How do I choose a Medicare insurance agent?",
    answer:
      "Look for an agent who is independent (not tied to a single carrier), licensed in New Jersey, and willing to explain both Medicare Supplement and Medicare Advantage options. Ask how many carriers they represent. If the answer is one, keep looking.",
  },
  {
    question: "What is the best Medicare plan in New Jersey?",
    answer:
      "There's no single best plan for everyone. The right plan depends on your doctors, prescriptions, budget, and how often you travel. A Medigap Plan G offers strong coverage with predictable costs, while some Medicare Advantage plans offer $0 premiums with network restrictions. An independent broker can compare both side by side for your situation.",
  },
  {
    question: "When can I enroll in a Medigap plan in Bridgeton?",
    answer:
      "Your Medigap Open Enrollment Period lasts 6 months, starting the month you turn 65 and are enrolled in Part B. During this window, carriers must accept you regardless of health history. After it closes, you may face medical underwriting or denial. Plan ahead — ideally 6 months before your Part B start date.",
  },
];

export default function MedicareInsuranceAgentsBridgetonNJ() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <LocalServiceSchema citySlug="bridgeton" />
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
          Medicare Insurance Agents in Bridgeton, New Jersey
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Medicare Insurance Agents in Bridgeton, New Jersey — Independent Broker
        for Cumberland County
      </h1>

      <Image
        src="/images/medicare-insurance-agents-in-bridgeton-new-jersey.webp"
        alt="Medicare insurance agents in Bridgeton New Jersey"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        Medicare insurance agents in Bridgeton, New Jersey can make the
        difference between overpaying for coverage and finding a plan that
        actually fits your doctors, your prescriptions, and your budget. I'm
        Anthony Orner, an independent Medicare broker licensed in New Jersey, and
        I help folks in Cumberland County compare plans across carriers for free.
      </p>
      <p className="text-lg mb-6">
        No cost. No obligation. Just clear answers.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Why an independent broker matters in a rural county like Cumberland
        </h2>
        <p className="mb-3">
          Cumberland County has fewer healthcare providers than most of New
          Jersey. Finding doctors who accept your plan isn't always
          straightforward, and people in South Jersey know that frustration
          firsthand. A captive agent selling one carrier's products can't tell
          you if a competitor has a better network for the providers you actually
          use.
        </p>
        <p>
          As an independent broker, I represent multiple carriers. That means I
          can show you which plans include Inspira Health Network facilities,
          which ones work if you travel to Philadelphia for specialists, and
          where the real cost differences are.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Supplement and Advantage plans available in Bridgeton 08302
        </h2>
        <p className="mb-3">
          Bridgeton residents with Original Medicare can choose a Medigap
          (Supplement) plan to cover out-of-pocket costs like the $1,736 Part A
          deductible and $283 Part B deductible in 2026. Plan G is the most
          popular standardized option — it covers everything except the Part B
          deductible.
        </p>
        <p>
          Medicare Advantage (Part C) plans bundle hospital, medical, and
          usually drug coverage into one plan. Some offer $0 premiums in the
          08302 zip code, but they use provider networks. If your doctors aren't
          in-network, you'll pay more or need referrals. I'll check your
          providers before recommending anything.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Carrier options and rate differences in South Jersey
        </h2>
        <p className="mb-3">
          Medigap plans are standardized by the federal government, so Plan G
          from one carrier covers the same benefits as Plan G from another. The
          difference? Price. Rates vary by carrier, and in South Jersey, monthly
          premiums for the same plan can differ by $40-$80 depending on the
          insurer and their rating method.
        </p>
        <p>
          I compare rates from multiple carriers so you don't have to call each
          one individually. One phone call covers it.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Provider access is the real issue in Cumberland County
        </h2>
        <p className="mb-3">
          People in South Jersey have told me they've spent months trying to find
          a doctor accepting new patients. That problem gets worse if your plan
          has a narrow network. Before you pick any Medicare Advantage plan, you
          need to verify your doctors, your pharmacy, and any specialists you see
          are in-network.
        </p>
        <p>
          With a Medigap plan plus Original Medicare, any doctor who accepts
          Medicare accepts you. In a county with limited providers, that
          flexibility matters.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Key enrollment windows to know
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Medigap Open Enrollment:</strong> 6 months starting the
            month you're 65+ and enrolled in Part B. This is your guaranteed
            issue window — no health questions asked.
          </li>
          <li>
            <strong>Medicare Advantage / Part D:</strong> October 15 through
            December 7 each year.
          </li>
          <li>
            <strong>Turning 65?</strong> Start planning at least 6 months before
            your Part B effective date to lock in the best Medigap rates.
          </li>
          <li>
            <strong>Part B late enrollment penalty:</strong> 10% added to your
            $202.90/month premium for every 12 months you delayed without
            creditable coverage.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Request a free Bridgeton Medicare plan review
        </h2>
        <p className="mb-3">
          I'll sit down with you (by phone or in person) and compare your
          current coverage against what's available. If your plan is already the
          best fit, I'll tell you that. If there's a better option, I'll show
          you the numbers.
        </p>
        <p>
          There's no fee for my help. Carriers pay me, not you. Call today and
          let's get your plan sorted out.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Talk to a local Medicare broker who knows Cumberland County
        </p>
        <p className="text-2xl font-bold mb-3">
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
              href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medigap Plan G in New Jersey — What It Covers and Costs
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-advantage/new-jersey"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage Plans in South Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/learn/how-to-sign-up-for-medicare"
              className="text-blue-600 hover:underline"
            >
              When to Enroll in Medicare — Deadlines and Penalties
            </Link>
          </li>
          <li>
            <Link
              href="/services/best-medicare-broker-no-cost-to-you"
              className="text-blue-600 hover:underline"
            >
              Independent Broker vs. Captive Agent — What's the Difference?
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
</ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/plan-compare" rel="noopener noreferrer" target="_blank" className="underline">Medicare Plan Finder on Medicare.gov</a> and <a href="https://www.medicare.gov/basics/get-started-with-medicare" rel="noopener noreferrer" target="_blank" className="underline">Get Started with Medicare</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
    </main>
  );
}