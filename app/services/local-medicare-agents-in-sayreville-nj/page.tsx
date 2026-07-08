import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "local medicare agents in sayreville nj | Free Independent Guidance | MedicareYourself",
  description:
    "Local Medicare agents in Sayreville, NJ. Independent broker Anthony Orner compares top carriers side by side — free, no-pressure help. Call 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/local-medicare-agents-in-sayreville-nj" },
  openGraph: {
    title:
      "local medicare agents in sayreville nj | Free Independent Guidance | MedicareYourself",
    description:
      "Local Medicare agents in Sayreville NJ — Anthony Orner is a licensed independent broker in Middlesex County. Compare top carriers side by side. Free quote.",
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
      name: "Local Medicare Agents in Sayreville NJ",
      item: "https://medicareyourself.com/services/local-medicare-agents-in-sayreville-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Local Medicare Agents in Sayreville, NJ — Licensed Broker Serving Middlesex County",
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
    question: "How do I pick a Medicare agent?",
    answer:
      "Look for an independent broker licensed in your state who represents multiple carriers. An independent agent can compare plans across companies, unlike a captive agent who sells for only one insurer. Ask if they charge fees (they shouldn't — brokers are paid by the carrier, not you).",
  },
  {
    question: "Do I need a Medicare agent?",
    answer:
      "You're not required to use one, but a licensed agent can save you hours of research and help you avoid costly mistakes like late enrollment penalties. There's no cost to you for using a broker — carriers pay the agent directly.",
  },
  {
    question: "Can I switch Medicare plans without losing coverage?",
    answer:
      "Yes. During valid enrollment periods like the Annual Election Period (October 15 – December 7) or the Medicare Advantage Open Enrollment Period (January 1 – March 31), you can switch plans with no gap in coverage. Your new plan starts on a set date so the old one ends the same day.",
  },
  {
    question: "What's the difference between a Medicare agent and a Medicare broker?",
    answer:
      "A Medicare agent typically represents one carrier. A Medicare broker is independent and works with multiple carriers, giving you side-by-side comparisons. Anthony Orner is an independent broker, meaning he's not locked into recommending any single company's plans.",
  },
];

export default function LocalMedicareAgentsSayrevilleNJ() {
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
        <span className="text-gray-700">
          Local Medicare Agents in Sayreville NJ
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Local Medicare Agents in Sayreville, NJ — Licensed Broker Serving
        Middlesex County
      </h1>

      <Image
        src="/images/local-medicare-agents-in-sayreville-nj.webp"
        alt="local medicare agents in sayreville nj"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        Local Medicare agents in Sayreville, NJ don't have to mean a
        one-carrier sales pitch. I'm Anthony Orner, an independent broker
        licensed in New Jersey who works with multiple carriers so you see real
        options, not just the plan that pays the highest commission.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        I serve Sayreville, South Amboy, Old Bridge, and the broader Middlesex
        County area. Appointments are free, and I never charge a fee.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why Sayreville residents choose an independent Medicare broker
        </h2>
        <p className="text-gray-700 mb-2">
          Carrier networks shift in Middlesex County more often than you'd
          think. One year a plan covers Hackensack Meridian Health doctors at
          Raritan Bay Medical Center; the next year, the network changes and
          your specialist is out.
        </p>
        <p className="text-gray-700">
          An independent broker tracks these network changes for you. I compare
          plans across carriers so you're not blindsided after enrollment ends.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Supplement and Advantage carriers available in Middlesex County
        </h2>
        <p className="text-gray-700 mb-3">
          Sayreville falls in the NJ-NYC metro rating area, which means you
          have access to a wide pool of carriers. Plans I commonly compare for
          clients here include:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Medicare Supplement (Medigap) Plans G, N, and high-deductible G</li>
          <li>Medicare Advantage HMO and PPO plans with local provider networks</li>
          <li>Standalone Part D prescription drug plans</li>
          <li>Dental and vision coverage options</li>
        </ul>
        <p className="text-gray-700 mt-3">
          Rates vary by carrier, age, and tobacco status. I pull live quotes so
          you see exact numbers, not estimates.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How to switch Medicare plans without a coverage gap
        </h2>
        <p className="text-gray-700 mb-2">
          The Annual Election Period runs October 15 through December 7. Changes
          take effect January 1. During this window, you can switch Advantage
          plans or add, drop, or change Part D coverage with no gap.
        </p>
        <p className="text-gray-700">
          If you're on a Medicare Advantage plan and want to move to a different
          Advantage plan or return to Original Medicare, the Medicare Advantage
          Open Enrollment (January 1 through March 31) gives you one more shot.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What new-to-Medicare enrollees in Sayreville should know
        </h2>
        <p className="text-gray-700 mb-2">
          Turning 65? Your Medigap Open Enrollment Period is the 6 months
          starting the month you turn 65 and are enrolled in Part B. During this
          window, carriers can't deny you or charge more for health conditions.
        </p>
        <p className="text-gray-700">
          Miss it, and you may face medical underwriting. If you're still
          working with employer coverage, the timing rules change. Call me 6
          months before your Part B start date so we get the sequence right.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          2026 Medicare costs you should budget for
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Part B premium: $202.90/month</li>
          <li>Part B deductible: $283/year</li>
          <li>Part A hospital deductible: $1,676 per benefit period</li>
          <li>Skilled nursing facility coinsurance (days 21-100): $209.50/day</li>
        </ul>
        <p className="text-gray-700 mt-3">
          These are the costs Original Medicare leaves on your plate. A
          Supplement or Advantage plan covers some or all of them depending on
          which plan you choose.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Get a free no-obligation quote from Anthony Orner
        </h2>
        <p className="text-gray-700 mb-2">
          I meet clients in person across Sayreville and Middlesex County, by
          phone, or over video. Appointments typically run 20 to 30 minutes.
          You'll leave with a clear side-by-side comparison and zero pressure.
        </p>
        <p className="text-gray-700">
          If your doctor network or prescription costs changed this year, let's
          make sure your plan still fits. One call and we'll sort it out.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Talk to a Licensed Medicare Broker in Middlesex County
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/contact" className="underline font-bold">
            get a free quote online
          </Link>
        </p>
      </div>

      <section className="mt-12">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Related resources
        </h2>
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
              Medicare Advantage Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/learn/how-to-sign-up-for-medicare"
              className="text-blue-600 hover:underline"
            >
              When to Enroll in Medicare
            </Link>
          </li>
          <li>
            <Link
              href="/services/local-medicare-agents-in-sayreville-nj"
              className="text-blue-600 hover:underline"
            >
              Local Medicare Agents in Old Bridge, NJ
            </Link>
          </li>
        </ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/plan-compare" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov Plan Compare</a> and <a href="https://www.medicare.gov/talk-to-someone" rel="noopener noreferrer" target="_blank" className="underline">Talk to Someone at Medicare.gov</a>. New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free unbiased counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> or contact the <a href="https://www.nj.gov/dobi/" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-2">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Free local counseling: <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey State Health Insurance Assistance Program (SHIP)</a> offers unbiased Medicare guidance to Sayreville and Middlesex County residents.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
    </main>
  );
}