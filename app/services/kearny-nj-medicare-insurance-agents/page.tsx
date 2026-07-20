import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import LocalServiceSchema from "@/components/LocalServiceSchema";

export const metadata: Metadata = {
  title:
    "kearny nj medicare insurance agents | Free Consultation | MedicareYourself",
  description:
    "Kearny NJ Medicare insurance agents — Anthony Orner is a licensed independent broker comparing Supplement and Advantage plans in Hudson County. Free consult.",
  alternates: { canonical: "https://medicareyourself.com/services/kearny-nj-medicare-insurance-agents" },
  openGraph: {
    title:
      "kearny nj medicare insurance agents | Free Consultation | MedicareYourself",
    description:
      "Kearny NJ Medicare insurance agents — Anthony Orner is a licensed independent broker comparing Supplement and Advantage plans in Hudson County. Free consult.",
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
      name: "Kearny NJ Medicare Insurance Agents",
      item: "https://medicareyourself.com/services/kearny-nj-medicare-insurance-agents",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Kearny NJ Medicare Insurance Agents: Licensed Broker Serving Hudson County",
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
    question:
      "How much does it cost to use a Medicare insurance agent in Kearny NJ?",
    answer:
      "Nothing. Licensed Medicare brokers like Anthony Orner are paid by the insurance carriers, not by you. The plans cost the same whether you enroll directly or through a broker.",
  },
  {
    question:
      "What's the difference between a captive agent and an independent broker?",
    answer:
      "A captive agent represents one insurance company. An independent broker compares plans from multiple carriers, so you see more options and can find the best fit for your budget and doctors.",
  },
  {
    question: "When is the best time to enroll in Medicare in Kearny?",
    answer:
      "Your Medigap Open Enrollment Period starts the month you turn 65 and are enrolled in Part B. It lasts 6 months. During this window, carriers can't deny you or charge more for health conditions. For Medicare Advantage, Open Enrollment runs October 15 through December 7 each year.",
  },
  {
    question: "Can I keep my doctors if I switch Medicare plans?",
    answer:
      "It depends on the plan's network. Anthony checks your doctors and prescriptions against each plan before recommending anything, so you know exactly what you're getting before you sign.",
  },
];

export default function KearnyNJMedicareInsuranceAgents() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />
      <LocalServiceSchema citySlug="kearny" />

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
          Kearny NJ Medicare Insurance Agents
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Kearny NJ Medicare Insurance Agents: Licensed Broker Serving Hudson
        County
      </h1>

      <Image
        src="/images/kearny-nj-medicare-insurance-agents.webp"
        alt="Kearny NJ Medicare insurance agents"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        Kearny NJ Medicare insurance agents aren't all the same. Some work for a
        single carrier. I'm Anthony Orner, an independent broker who compares
        plans from multiple companies so Kearny residents get the right coverage
        at the right price.
      </p>
      <p className="text-lg mb-6">
        My service is free. Carriers pay me, not you. The plan costs the same
        either way.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why Kearny residents work with an independent broker
        </h2>
        <p className="mb-2">
          Most insurance agencies in the 07032 area sell auto, home, and
          commercial policies. Medicare is a specialty. It has its own enrollment
          windows, penalty rules, and plan structures that general agents may not
          track closely.
        </p>
        <p>
          An independent Medicare broker works across carriers. That means I can
          show you plans from multiple insurers side by side, rather than selling
          you whatever one company offers.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare Supplement and Advantage options in 07032
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Medicare Supplement (Medigap):</strong> Covers gaps in
            Original Medicare. Plan G is the most popular in New Jersey. You pick
            any doctor who accepts Medicare. Rates vary by carrier and age.
          </li>
          <li>
            <strong>Medicare Advantage (Part C):</strong> Bundles hospital,
            medical, and usually drug coverage into one plan. Many include
            dental, vision, and hearing. Networks matter here, so we check your
            Hudson County providers first.
          </li>
          <li>
            <strong>Part D (Prescription Drug):</strong> If you choose Medigap,
            you'll need a standalone drug plan. I run your medications through
            the formulary before we pick one.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How Anthony Orner helps Kearny seniors save on premiums
        </h2>
        <p className="mb-2">
          I compare rates from every major carrier available in Hudson County.
          Two Plan G policies cover the exact same benefits, but premiums can
          differ by $80 or more per month. That's nearly $1,000 a year.
        </p>
        <p>
          I also check whether you qualify for federal Guaranteed Issue rights,
          like if you're losing employer coverage or leaving a Medicare Advantage
          plan. These let you switch Medigap carriers without medical
          underwriting.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Key enrollment deadlines you shouldn't miss
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Medigap Open Enrollment:</strong> 6 months starting the
            month you turn 65 and have Part B. This is your best window for
            guaranteed acceptance and the lowest rates.
          </li>
          <li>
            <strong>Medicare Advantage/Part D:</strong> October 15 through
            December 7 annually.
          </li>
          <li>
            <strong>Part B late enrollment penalty:</strong> 10% for every
            12-month period you delayed. This stacks and lasts for life.
          </li>
        </ul>
        <p className="mt-2">
          The 2026 Part B premium is $202.90/month. The Part A deductible is
          $1,736 per benefit period. These costs make choosing the right
          supplemental plan worth real money.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What happens when networks change in Hudson County
        </h2>
        <p className="mb-2">
          Carrier network changes are a growing concern in New Jersey. When a
          hospital system or large practice drops an insurer, patients scramble.
          If you're on a Medicare Advantage plan and your providers leave the
          network, you may have Guaranteed Issue rights to switch to Medigap
          without health questions.
        </p>
        <p>
          I keep track of these changes for Kearny-area clients and reach out
          when action is needed.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Schedule a free Medicare review in Kearny
        </h2>
        <p className="mb-2">
          Whether you're turning 65, retiring from a Kearny employer, or just
          want to check if your current plan is still the best deal, I'll run a
          full comparison at no cost.
        </p>
        <p>
          Call{" "}
          <a href="tel:8555591700" className="text-blue-600 font-semibold">
            855-559-1700
          </a>{" "}
          or use the link below. Most reviews take 15 to 20 minutes by phone.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center mb-10">
        <p className="text-xl font-bold mb-2">
          Talk to a licensed Medicare broker today
        </p>
        <p className="mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-semibold">
            855-559-1700
          </a>{" "}
          for a free, no-obligation plan comparison.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
        >
          Get a Free Quote
        </Link>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/services/hoboken-nj-medicare-insurance-agents"
              className="text-blue-600 hover:underline"
            >
              Hudson County Medicare Broker
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
              href="/learn/medicare-enrollment-periods"
              className="text-blue-600 hover:underline"
            >
              NJ Medicare Enrollment Deadlines
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
            <div className="text-sm text-gray-600 mt-4">Official Medicare resources: <a href="https://www.medicare.gov/plan-compare" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Medicare.gov Plan Finder</a> and <a href="https://www.medicare.gov/basics/get-started-with-medicare" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Get Started with Medicare</a>. For free local counseling, visit the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
    </main>
  );
}