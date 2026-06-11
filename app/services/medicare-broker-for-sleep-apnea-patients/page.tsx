import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for sleep apnea patients | Free CPAP Coverage Check | MedicareYourself",
  description:
    "Work with a licensed Medicare broker for sleep apnea — understand CPAP coverage, the 90-day compliance rule, and DME suppliers. Free review: 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-sleep-apnea-patients" },
  openGraph: {
    title:
      "Medicare broker for sleep apnea patients | Free CPAP Coverage Check | MedicareYourself",
    description:
      "Medicare broker for sleep apnea patients helping you understand CPAP coverage rules, the 90-day compliance window, and the best plan. Free coverage check.",
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
      name: "Medicare Broker for Sleep Apnea Patients",
      item: "https://medicareyourself.com/services/medicare-broker-for-sleep-apnea-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Sleep Apnea Patients: CPAP, Sleep Studies, and Plan Selection",
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
    question: "Does Medicare cover CPAP machines for sleep apnea?",
    answer:
      "Yes. Medicare Part B covers CPAP devices and supplies after a qualifying sleep study and diagnosis of obstructive sleep apnea. You pay 20% of the Medicare-approved amount after meeting the $283 annual Part B deductible.",
  },
  {
    question: "What is the Medicare 90-day CPAP compliance rule?",
    answer:
      "Medicare requires you to use your CPAP at least 4 hours per night for 70% of nights during a consecutive 90-day period. If you don't meet this threshold, Medicare can stop covering your machine and supplies.",
  },
  {
    question: "Is a sleep study covered by Medicare?",
    answer:
      "Medicare Part B covers Type I, II, III, and IV sleep tests when ordered by your doctor and you show clinical signs of sleep apnea. Type I tests must be done in a sleep lab facility. You pay 20% after the Part B deductible.",
  },
  {
    question: "Should I choose Medigap or Medicare Advantage for sleep apnea equipment?",
    answer:
      "With Original Medicare plus a Medigap plan like Plan G, your 20% coinsurance for CPAP equipment is covered. Medicare Advantage plans may have lower premiums but can require prior authorization and limit you to in-network DME suppliers. A broker can compare both options for your situation.",
  },
,
  {
    question: "Does Medicare cover CPAP supplies like masks and tubing?",
    answer:
      "Yes. Medicare Part B covers replacement CPAP accessories including masks, cushions, tubing, filters, and headgear on a set replacement schedule. You must purchase supplies from a Medicare-enrolled DME supplier, and you pay your standard Part B coinsurance after meeting the deductible.",
  },
  {
    question: "How long does Medicare rent a CPAP machine before I own it?",
    answer:
      "Medicare rents CPAP machines for a 13-month period if you continue to use the device and meet compliance requirements. After 13 months of consecutive rental payments, you own the machine outright. Medicare continues to cover supplies and accessories after ownership transfers.",
  },
  {
    question: "Can a Medicare broker help me find a DME supplier for my CPAP?",
    answer:
      "Yes. A licensed Medicare broker can help you confirm whether a DME supplier accepts Medicare assignment and whether your specific plan has in-network requirements. This is especially important with Medicare Advantage plans, which often limit you to contracted suppliers.",
  }
,
  {
    question: "Do I need a sleep study to qualify for Medicare CPAP coverage?",
    answer:
      "Yes. Medicare requires a face-to-face clinical evaluation with your doctor followed by a qualifying sleep study before approving CPAP therapy. The study can be done in a sleep lab or, in some cases, as a home sleep test ordered by your physician.",
  },
  {
    question: "Can I switch DME suppliers if I'm unhappy with my CPAP provider?",
    answer:
      "Yes, but the process depends on your plan. With Original Medicare you can choose any Medicare-enrolled DME supplier that accepts assignment, while Medicare Advantage plans typically restrict you to in-network suppliers. A broker can help you confirm which suppliers are available under your current coverage.",
  }
,
  {
    question: "Can I switch DME suppliers if I'm unhappy with my current CPAP provider?",
    answer:
      "Yes, you can switch to a different Medicare-enrolled DME supplier, though the process depends on whether you're in the rental period or post-ownership. During the 13-month rental, transferring suppliers can be complicated and may require coordination between providers. A Medicare broker can help you understand your options and find an in-network supplier that meets your needs.",
  },
  {
    question: "Does Medicare cover BiPAP machines or only CPAP for sleep apnea?",
    answer:
      "Medicare Part B covers BiPAP (bilevel positive airway pressure) devices when CPAP therapy has been tried and documented as ineffective, or when your doctor determines BiPAP is medically necessary. The same compliance and DME supplier rules apply. Your doctor must provide documentation supporting the need for a BiPAP over a standard CPAP.",
  },
  {
    question: "What happens if I was diagnosed with sleep apnea before enrolling in Medicare?",
    answer:
      "If you were diagnosed and used a CPAP before Medicare eligibility, you may still qualify for Medicare-covered equipment, but you'll typically need a new face-to-face evaluation with your doctor and documentation of continued need. Medicare may also require a new compliance period. A broker can help you understand transition requirements based on your plan choice.",
  }
];

export default function MedicareBrokerForSleepApneaPatients() {
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
          Medicare Broker for Sleep Apnea Patients
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Medicare Broker for Sleep Apnea Patients: CPAP, Sleep Studies, and Plan
        Selection
      </h1>

      <Image
        src="/images/medicare-broker-for-sleep-apnea-patients.webp"
        alt="Medicare broker for sleep apnea patients"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        A Medicare broker for sleep apnea patients can save you real money and a
        lot of frustration. Between CPAP rental rules, compliance tracking, and
        choosing the right plan for ongoing supply costs, the details trip people
        up fast.
      </p>
      <p className="text-lg mb-6">
        I'm Anthony Orner, a licensed Medicare broker. I help people with sleep
        apnea figure out which plan actually covers their equipment without
        surprise bills. That starts with understanding how Medicare handles CPAP
        from day one.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How Medicare covers CPAP machines and supplies
        </h2>
        <p className="mb-2">
          Medicare Part B covers CPAP devices and related supplies once you have
          a qualifying sleep study and an obstructive sleep apnea diagnosis from
          your doctor. You'll pay 20% of the Medicare-approved amount after
          meeting the $283 annual Part B deductible.
        </p>
        <p>
          Covered supplies include masks, tubing, filters, and humidifier
          chambers. Medicare rents the CPAP for 13 months. After that, you own
          it.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          The 90-day compliance rule you need to know about
        </h2>
        <p className="mb-2">
          This catches a lot of people off guard. Medicare requires proof that
          you use your CPAP at least 4 hours per night on 70% of nights during a
          consecutive 90-day window. Your machine tracks this automatically.
        </p>
        <p>
          If you fall short, Medicare can stop paying for the machine and
          supplies. That means you could end up buying everything out of pocket.
          Talk to your sleep doctor early if you're struggling with mask fit or
          pressure settings.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Sleep studies: what Part B actually pays for
        </h2>
        <p className="mb-2">
          Medicare Part B covers Type I through Type IV sleep tests when your
          doctor orders them and you show clinical signs of sleep apnea. Type I
          tests (the in-lab overnight studies) must be done in a certified sleep
          lab facility.
        </p>
        <p>
          Home sleep tests (Type II-IV) are also covered. You pay 20% after the
          deductible. Ask your provider for costs upfront so there are no
          surprises.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medigap vs. Advantage for sleep apnea equipment costs
        </h2>
        <p className="mb-2">
          With Original Medicare plus a Medigap plan like Plan G, your 20%
          coinsurance on CPAP equipment and sleep studies is covered. You pick
          any Medicare-accepting DME supplier you want.
        </p>
        <p className="mb-2">
          Medicare Advantage plans may have lower monthly premiums, but they
          often require prior authorization for CPAP equipment and limit you to
          in-network suppliers. Some Advantage plans charge flat copays for DME
          that can add up over 13 months of rental.
        </p>
        <p>
          The right choice depends on how much equipment and how many follow-up
          visits you need. That's exactly what I compare for you.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What most people wish someone had told them sooner
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            CPAP supplies need regular replacement. Masks every 3 months,
            tubing and filters on schedule. Plan coverage varies on replacement
            timelines.
          </li>
          <li>
            If you switch plans mid-rental, you could lose coverage continuity on
            your CPAP. Timing matters.
          </li>
          <li>
            Struggling with mask comfort is normal. Don't quit before the 90-day
            window closes. Work with your provider to adjust.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Get a free plan comparison for sleep apnea coverage
        </h2>
        <p className="mb-2">
          I'll review your current plan, check your DME supplier network, and
          tell you exactly what you'd pay for CPAP equipment under each option.
          No cost, no obligation.
        </p>
        <p>
          One call can clear up months of confusion. I do this every day for
          people dealing with exactly this situation.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center mb-10">
        <p className="text-xl font-semibold mb-2">
          Talk to a Medicare broker who understands sleep apnea coverage.
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
            href="/contact"
            className="text-blue-700 font-bold hover:underline"
          >
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
              href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
              className="text-blue-700 hover:underline"
            >
              Medigap Plan G: What It Covers and What It Costs
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-700 hover:underline"
            >
              Medicare Advantage vs. Medigap: How to Decide
            </Link>
          </li>
          <li>
            <Link
              href="/learn/medicare-parts-explained"
              className="text-blue-700 hover:underline"
            >
              Medicare DME Coverage: What You Need to Know
            </Link>
          </li>
          <li>
            <Link
              href="/learn/medicare-parts-explained"
              className="text-blue-700 hover:underline"
            >
              Part B Deductible and Coinsurance Explained
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
                href="/services/medicare-broker-for-people-with-pre-existing-conditions"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For People With Pre Existing Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/services/you-get-a-medicare-supplement-plan-if-you-have-a-pre-existing-condition"
                className="text-blue-600 hover:underline"
              >
                You Get A Medicare Supplement Plan If You Have A Pre Existing Condition
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
</ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/coverage/continuous-positive-airway-pressure-devices" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — CPAP therapy coverage</a> and <a href="https://www.medicare.gov/coverage/sleep-studies" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Sleep studies coverage</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/shipindex.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey beneficiaries can also get free help from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
    </main>
  );
}