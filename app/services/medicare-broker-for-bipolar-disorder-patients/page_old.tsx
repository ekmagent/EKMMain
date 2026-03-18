import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for bipolar disorder patients | Free Plan Analysis | MedicareYourself",
  description:
    "Medicare broker for bipolar disorder patients — find NJ plans covering mood stabilizers, psychiatric care, and lab work. Free drug-specific plan analysis.",
  openGraph: {
    title:
      "Medicare broker for bipolar disorder patients | Free Plan Analysis | MedicareYourself",
    description:
      "Medicare broker for bipolar disorder patients — find NJ plans covering mood stabilizers, psychiatric care, and lab work. Free drug-specific plan analysis.",
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
      name: "Medicare Broker for Bipolar Disorder Patients",
      item: "https://www.medicareyourself.com/services/medicare-broker-for-bipolar-disorder-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Bipolar Disorder Patients — Plans Built Around Complex Medication Regimens",
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
  datePublished: "2025-07-01",
  dateModified: "2025-07-01",
};

const faqs = [
  {
    question: "Can you get Medicare if you are bipolar?",
    answer:
      "Yes. If you're 65 or older, you qualify for Medicare regardless of any mental health diagnosis. If you're under 65 with bipolar disorder, you may qualify through Social Security Disability Insurance (SSDI) after a 24-month waiting period. Medicare Parts A, B, and D all cover aspects of bipolar treatment including psychiatric visits, therapy, and prescription medications.",
  },
  {
    question:
      "Does Medicare Part D cover lithium and other mood stabilizers?",
    answer:
      "Part D plans are required to cover most mood stabilizers and antipsychotics, but the tier placement - and your out-of-pocket cost - varies significantly between plans. Lithium may be on a low-cost generic tier with one plan and a higher tier with another. That's why a drug-specific plan comparison matters so much.",
  },
  {
    question:
      "Does Medicare cover inpatient psychiatric hospitalization?",
    answer:
      "Medicare Part A covers inpatient psychiatric care in a general hospital with no lifetime limit on days. There is a separate 190-day lifetime limit for freestanding psychiatric hospitals. You'll pay the Part A deductible of $1,676 per benefit period. Some Medicare Advantage plans offer additional behavioral health benefits.",
  },
  {
    question:
      "How do I find a therapist or psychiatrist who accepts Medicare?",
    answer:
      "Many therapists don't accept Medicare due to low reimbursement rates. A Medicare broker can help you identify plans - particularly Medicare Advantage plans - with broader behavioral health networks. Anthony Orner can check whether your current providers are in-network before you enroll.",
  },
];

export default function MedicareBrokerBipolarDisorderPatients() {
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
          Medicare Broker for Bipolar Disorder Patients
        </span>
      </nav>

      <div className="bg-[#1e40af] rounded-lg p-6 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Medicare Broker for Bipolar Disorder Patients — Plans Built Around
          Complex Medication Regimens
        </h1>
        <Image
          src="/images/medicare-broker-for-bipolar-disorder-patients_photo.webp"
          alt="Medicare broker for bipolar disorder patients"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />
      </div>

      <p className="text-lg mb-2">
        A Medicare broker for bipolar disorder patients does something most
        online plan-finder tools can't: cross-reference your exact medications,
        your psychiatrist, your therapist, and your lab work schedule against
        every plan available in your area. I'm Anthony Orner, a licensed
        Medicare broker in New Jersey, and I do this at no cost to you.
      </p>
      <p className="text-lg mb-6">
        When you're managing bipolar disorder, the wrong plan isn't just
        inconvenient. It can mean gaps in medication, surprise costs on a drug
        you've taken for years, or losing access to a provider who finally
        understands your history.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How Medicare covers mood stabilizers, antipsychotics, and lab work
        </h2>
        <p className="mb-3">
          Medicare Part B covers outpatient psychiatric visits, therapy, and
          intensive outpatient programs. After the $283 annual Part B
          deductible, you pay 20% of the Medicare-approved amount for mental
          health services.
        </p>
        <p>
          Lab work for lithium monitoring - blood draws to check therapeutic
          levels, kidney function, thyroid panels - is covered under Part B as
          well. These are routine when you're on lithium, and skipping them
          isn't an option.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Part D tier placement for lithium, lamictal, and other bipolar meds
        </h2>
        <p className="mb-3">
          Part D formularies group drugs into cost tiers. Generic lithium
          carbonate often lands on a lower tier, but lamotrigine, quetiapine,
          aripiprazole, and other bipolar medications can fall anywhere
          depending on the plan.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            One plan may cover your exact combination of a mood stabilizer
            plus an atypical antipsychotic for $30/month total.
          </li>
          <li>
            Another plan might charge $150+ for the same drugs - or require
            prior authorization that delays refills.
          </li>
          <li>
            Step therapy requirements can force you to try a different drug
            first, even if your current one is working.
          </li>
        </ul>
        <p className="mt-3">
          I run your full medication list through every available plan to find
          the lowest cost with the fewest restrictions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Inpatient psychiatric coverage under Part A and Advantage plans
        </h2>
        <p className="mb-3">
          If you need inpatient stabilization, Part A covers psychiatric
          hospitalization in a general hospital with the standard $1,676
          deductible per benefit period. There's no lifetime day limit in a
          general hospital setting.
        </p>
        <p>
          Freestanding psychiatric hospitals have a separate 190-day lifetime
          limit under Original Medicare. Some Medicare Advantage plans offer
          expanded behavioral health networks and may reduce your inpatient
          cost sharing.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Finding providers who actually accept your plan
        </h2>
        <p className="mb-3">
          One of the biggest frustrations people with bipolar disorder face on
          Medicare: finding a psychiatrist or therapist who takes their
          coverage. Low reimbursement rates mean many providers opt out.
        </p>
        <p>
          Before recommending any plan, I verify that your current providers
          are in-network. If you're looking for a new psychiatrist, I can help
          identify plans with the strongest behavioral health directories in
          your part of New Jersey.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why a drug-specific comparison matters for bipolar disorder
        </h2>
        <p className="mb-3">
          Most people with bipolar disorder take multiple medications.
          Switching plans without checking every drug's tier, prior
          authorization requirements, and quantity limits is a real risk.
        </p>
        <p>
          A medication change forced by insurance - not your doctor - can
          destabilize months of progress. I look at every detail so you don't
          get caught off guard.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Get a drug-specific plan analysis at no cost
        </h2>
        <p>
          Call me with your medication list and your providers. I'll run a
          full comparison across every plan available in your ZIP code and
          show you which ones cover your regimen at the lowest cost - with no
          surprises. There's no fee, no obligation, and no pressure.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 mb-10 text-center">
        <p className="text-xl font-semibold mb-2">
          Talk to a licensed Medicare broker who understands bipolar
          medication needs.
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

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/services/medicare-broker-for-mental-health"
              className="text-blue-600 hover:underline"
            >
              Medicare Broker for Mental Health Coverage
            </Link>
          </li>
          <li>
            <Link
              href="/guides/medicare-part-d-drug-coverage"
              className="text-blue-600 hover:underline"
            >
              Understanding Medicare Part D Drug Coverage
            </Link>
          </li>
          <li>
            <Link
              href="/guides/medicare-advantage-vs-medigap"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage vs. Medigap: Which Is Right for You?
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-broker-nj"
              className="text-blue-600 hover:underline"
            >
              Licensed Medicare Broker in New Jersey
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}