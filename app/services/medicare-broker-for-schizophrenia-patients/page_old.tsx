import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for schizophrenia patients | Free Coverage Analysis | MedicareYourself",
  description:
    "Medicare broker for schizophrenia patients — Anthony Orner finds NJ plans covering antipsychotics, injectables, and psychiatric care. Free consultation.",
  openGraph: {
    title:
      "Medicare broker for schizophrenia patients | Free Coverage Analysis | MedicareYourself",
    description:
      "Medicare broker for schizophrenia patients — Anthony Orner finds NJ plans covering antipsychotics, injectables, and psychiatric care. Free consultation.",
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
      name: "Medicare Broker for Schizophrenia Patients",
      item: "https://medicareyourself.com/services/medicare-broker-for-schizophrenia-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Schizophrenia Patients — Ensuring Coverage for Antipsychotics and Ongoing Care",
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
  datePublished: "2025-07-01",
  dateModified: "2025-07-01",
};

const faqs = [
  {
    question: "Do people with schizophrenia qualify for Medicare?",
    answer:
      "Yes. Many people with schizophrenia qualify for Medicare through SSDI (Social Security Disability Insurance). After receiving SSDI for 24 months, you become eligible for Medicare regardless of age. People 65 and older qualify through standard age-based enrollment.",
  },
  {
    question:
      "Does Medicare cover long-acting injectable antipsychotics?",
    answer:
      "Part B covers some injectable antipsychotics administered in a doctor's office or clinic. Part D covers self-administered medications. Formulary coverage varies by plan, so it's critical to check that your specific medication is covered before enrolling.",
  },
  {
    question: "What is the 190-day lifetime limit for psychiatric hospitals?",
    answer:
      "Medicare Part A covers inpatient psychiatric hospital care but limits it to 190 days over your lifetime. Once those days are used, Medicare will not cover additional stays at a freestanding psychiatric hospital. Acute care hospitals with psychiatric units are not subject to this limit.",
  },
  {
    question:
      "Can a Medicare broker help if I'm on both Medicare and Medicaid?",
    answer:
      "Absolutely. Dual-eligible beneficiaries often have access to Special Needs Plans (SNPs) designed for people with chronic conditions like schizophrenia. A broker can review whether a D-SNP or C-SNP gives you better drug coverage and mental health access than your current setup.",
  },
];

export default function MedicareBrokerSchizophreniaPatients() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <main className="max-w-4xl mx-auto px-4 py-8">
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
            Medicare Broker for Schizophrenia Patients
          </span>
        </nav>

        <div className="bg-[#1e40af] rounded-lg p-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Medicare Broker for Schizophrenia Patients — Ensuring Coverage for Antipsychotics and Ongoing Care
          </h1>
          <Image
            src="/images/medicare-broker-for-schizophrenia-patients.webp"
            alt="Medicare broker for schizophrenia patients"
            width={800}
            height={400}
            className="rounded-lg mb-6 w-full"
          />
        </div>

        <p className="text-lg mb-4">
          A Medicare broker for schizophrenia patients does one thing most agents
          won't - look at your actual treatment plan and match it to a plan that
          covers what you need. I'm Anthony Orner, a licensed Medicare broker in
          New Jersey, and I've helped families figure out the medication,
          hospital, and specialist pieces that keep falling through the cracks.
        </p>

        <p className="text-lg mb-6">
          If you or someone you care for is managing schizophrenia, the wrong
          plan can mean gaps in antipsychotic coverage or surprise costs during a
          crisis. Let me review what you're on and what you need.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Medicare coverage for antipsychotic medications and injectables
          </h2>
          <p className="mb-3">
            Most oral antipsychotics fall under Part D. But formularies differ
            wildly between plans. One plan may cover your medication at Tier 2
            while another puts it at Tier 4 with prior authorization. That's not
            a small difference - it's hundreds of dollars a month.
          </p>
          <p>
            Long-acting injectables like paliperidone palmitate are sometimes
            covered under Part B when administered in a clinical setting. I check
            both Part B and Part D coverage for every medication you're taking so
            nothing gets missed.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Part A psychiatric hospital benefits and the 190-day lifetime limit
          </h2>
          <p className="mb-3">
            Medicare Part A has a 190-day lifetime cap on care in freestanding
            psychiatric hospitals. Once those days are gone, they're gone. This
            catches families off guard, especially when someone has been
            hospitalized multiple times over the years.
          </p>
          <p>
            Psychiatric units inside general acute care hospitals are not subject
            to the 190-day limit. That's a critical distinction. If your days
            are running low - or already used up - there are still options, but
            you need to plan around them.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How Advantage plans handle specialist and crisis services
          </h2>
          <p className="mb-3">
            Some Medicare Advantage plans offer behavioral health benefits beyond
            what Original Medicare covers, like care coordination programs or
            expanded outpatient visits. But networks matter. If your psychiatrist
            or crisis team isn't in-network, you're paying more or switching
            providers during a vulnerable time.
          </p>
          <p>
            Chronic Condition Special Needs Plans (C-SNPs) are designed for
            people with specific conditions and sometimes include schizophrenia.
            These plans coordinate care around your condition and often have
            tailored formularies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Dual eligibility - when you have both Medicare and Medicaid
          </h2>
          <p className="mb-3">
            Many people with schizophrenia qualify for both Medicare and
            Medicaid. If that's your situation, Dual-Eligible Special Needs
            Plans (D-SNPs) can coordinate benefits between both programs. Medicaid
            can also pick up costs Medicare won't cover - including psychiatric
            hospital stays after the 190-day limit.
          </p>
          <p>
            I'll check whether your state Medicaid covers what Medicare doesn't
            and which D-SNP options are available in your area.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why formulary reviews matter every year
          </h2>
          <p className="mb-3">
            Plans change their formularies annually. A medication that was
            covered this year might be dropped or moved to a higher tier next
            year. For someone whose stability depends on a specific antipsychotic,
            that change can be destabilizing in every sense.
          </p>
          <p>
            I run a full formulary check during every enrollment period - October
            15 through December 7 - to make sure your drugs are still covered at
            a cost that makes sense.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Request a plan review tailored to schizophrenia treatment
          </h2>
          <p className="mb-3">
            Bring me your medication list, your doctors, and your concerns. I'll
            do the work of comparing plans against your actual treatment - not
            just what looks good on paper. There's no cost for this, and no
            obligation.
          </p>
          <p>
            You don't need to understand every piece of Medicare to make a good
            decision. You just need someone who'll sit with the details and
            explain what matters for your situation.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-6 mb-10 text-center">
          <p className="text-xl font-semibold mb-2">
            Talk to a licensed Medicare broker who understands schizophrenia
            coverage.
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
            .
          </p>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/services/medicare-mental-health-coverage"
                className="text-blue-600 hover:underline"
              >
                Medicare Mental Health Coverage Guide
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-part-d-drug-coverage"
                className="text-blue-600 hover:underline"
              >
                Understanding Medicare Part D Drug Coverage
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-advantage-plans-nj"
                className="text-blue-600 hover:underline"
              >
                Medicare Advantage Plans in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/services/dual-eligible-medicare-medicaid"
                className="text-blue-600 hover:underline"
              >
                Dual Eligible Medicare and Medicaid Plans
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}