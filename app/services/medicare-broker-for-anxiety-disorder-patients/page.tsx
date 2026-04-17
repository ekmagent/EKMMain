import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for anxiety disorder patients | Free Coverage Review | MedicareYourself",
  description:
    "Medicare broker for anxiety disorder patients — find plans covering therapy, prescriptions, and telehealth in NJ. Anthony Orner reviews your options free.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-anxiety-disorder-patients" },
  openGraph: {
    title:
      "Medicare broker for anxiety disorder patients | Free Coverage Review | MedicareYourself",
    description:
      "Medicare broker for anxiety disorder patients — find plans covering therapy, prescriptions, and telehealth in NJ. Anthony Orner reviews your options free.",
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
      name: "Medicare Broker for Anxiety Disorder Patients",
      item: "https://medicareyourself.com/services/medicare-broker-for-anxiety-disorder-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Anxiety Disorder Patients — Coverage for Therapy, Medication, and More",
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
  mainEntityOfPage:
    "https://medicareyourself.com/services/medicare-broker-for-anxiety-disorder-patients",
};

const faqs = [
  {
    question: "Does Medicare cover anxiety disorders?",
    answer:
      "Yes. Medicare Part B covers outpatient mental health services for diagnosed anxiety disorders, including therapy sessions with psychiatrists, clinical psychologists, licensed clinical social workers, and other qualified providers. You pay 20% of the Medicare-approved amount after meeting the $283 annual Part B deductible.",
  },
  {
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. Licensed Medicare brokers like Anthony Orner are paid by insurance carriers, not by you. There's no fee for plan comparisons, enrollment help, or ongoing support.",
  },
  {
    question: "Do you have to use a broker for Medicare?",
    answer:
      "No, but working with a broker who understands mental health coverage can save you real money. A broker compares formularies, provider networks, and copay structures across plans so you don't end up with surprise costs on your medications or therapy visits.",
  },
  {
    question:
      "Can I get telehealth therapy for anxiety through Medicare?",
    answer:
      "Yes. Medicare covers telehealth mental health visits, including therapy and psychiatric appointments conducted by video or phone. This is especially helpful if anxiety itself makes leaving home difficult or if local providers are limited.",
  },
];

export default function MedicareBrokerAnxietyDisorderPatients() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Medicare Broker for Anxiety Disorder Patients
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Medicare Broker for Anxiety Disorder Patients — Coverage for Therapy,
        Medication, and More
      </h1>

      <Image
        src="/images/medicare-broker-for-anxiety-disorder-patients.webp"
        alt="Medicare broker for anxiety disorder patients"
        width={800}
        height={400}
        className="w-full h-auto rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        A Medicare broker for anxiety disorder patients does one thing well: matches you with a plan that actually covers the therapy, medications, and providers you rely on. I'm Anthony Orner, a licensed broker in New Jersey, and I do this work every day at no cost to you.
      </p>
      <p className="text-lg mb-6">
        Choosing the wrong plan can mean denied prescriptions, surprise copays, or losing access to your therapist. I'll make sure that doesn't happen.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare's mental health benefits for anxiety disorders
        </h2>
        <p className="mb-2">
          Part B covers outpatient mental health care for diagnosed anxiety disorders, including generalized anxiety, panic disorder, and social anxiety. Covered providers include psychiatrists, clinical psychologists, licensed clinical social workers, nurse practitioners, and physician assistants.
        </p>
        <p>
          After your $283 annual Part B deductible, you typically pay 20% of the Medicare-approved amount per visit. A Medigap plan or Medicare Advantage plan can reduce or eliminate that out-of-pocket cost.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Comparing Part D plans for benzodiazepines and SSRIs
        </h2>
        <p className="mb-2">
          Not every Part D plan covers your specific medication at the same tier or copay. SSRIs like sertraline or escitalopram are widely covered, but the cost difference between plans can be $30+ per month. Benzodiazepines have additional restrictions on some formularies.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>I check each plan's formulary for your exact prescriptions</li>
          <li>I flag prior authorization or step therapy requirements before you enroll</li>
          <li>I compare total annual drug costs, not just monthly premiums</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          How telehealth expands access to anxiety treatment
        </h2>
        <p className="mb-2">
          Medicare covers telehealth therapy and psychiatric visits by video or phone. If anxiety makes it hard to leave the house, or if local providers don't accept Medicare, telehealth removes that barrier.
        </p>
        <p>
          Many Medicare Advantage plans offer $0 copay telehealth mental health visits. I'll identify which ones serve your area and include your preferred providers.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          What I hear from people living with anxiety and Medicare
        </h2>
        <p className="mb-2">
          The insurance process itself triggers anxiety for a lot of people. Worrying about denied claims, picking the wrong Part D plan, waking up at night wondering if your medications will be covered next year. That stress is real, and it's the exact problem I solve.
        </p>
        <p>
          You shouldn't have to become an insurance expert while managing your mental health. That's my job.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Why a broker matters more than a plan finder tool
        </h2>
        <p className="mb-2">
          Medicare.gov's plan finder is useful, but it doesn't tell you which plans have the best mental health provider networks in your area. It won't flag that your psychiatrist left a network mid-year, or that a plan requires prior authorization on your anxiety medication.
        </p>
        <p>
          I review those details for you and stay available after enrollment if anything changes.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Schedule a free plan comparison for your specific needs
        </h2>
        <p className="mb-2">
          Call me at <strong>855-559-1700</strong> and tell me what medications you take, which providers you see, and what matters most to you. I'll compare your options across Original Medicare with Medigap, Medicare Advantage, and Part D plans.
        </p>
        <p>
          No pressure, no cost, no obligation. Just clear answers from someone who does this every day in New Jersey.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-8 text-center">
        <p className="text-xl font-semibold mb-2">
          Ready for a plan that covers your anxiety treatment?
        </p>
        <p className="mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/contact" className="underline font-bold">
            Get a Free Quote
          </Link>
        </p>
      </div>

      <section className="mt-10">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/services/medicare-broker-for-anxiety-disorder-patients"
              className="text-blue-600 hover:underline"
            >
              Medicare Mental Health Coverage Guide
            </Link>
          </li>
          <li>
            <Link
              href="/learn/medicare-parts-explained"
              className="text-blue-600 hover:underline"
            >
              Understanding Part D Prescription Drug Plans
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
              href="/services/medicare-broker-for-anxiety-disorder-patients"
              className="text-blue-600 hover:underline"
            >
              Medicare Telehealth Options in New Jersey
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
                href="/services/best-and-cheapest-medicare-supplement"
                className="text-blue-600 hover:underline"
              >
                Best And Cheapest Medicare Supplement
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
                href="/services/compare-and-enroll-in-plan-g-online"
                className="text-blue-600 hover:underline"
              >
                Compare And Enroll In Plan G Online
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-alzheimers-patients"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For Alzheimers Patients
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-atrial-fibrillation-patients"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For Atrial Fibrillation Patients
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-bipolar-disorder-patients"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For Bipolar Disorder Patients
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-cataracts-patients"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For Cataracts Patients
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-depression-patients"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For Depression Patients
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-dialysis-patients"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For Dialysis Patients
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-epilepsy-patients"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For Epilepsy Patients
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-fibromyalgia-patients"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For Fibromyalgia Patients
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-glaucoma-patients"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For Glaucoma Patients
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-hearing-loss-patients"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For Hearing Loss Patients
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-lupus-patients"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For Lupus Patients
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-macular-degeneration-patients"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For Macular Degeneration Patients
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-multiple-sclerosis-patients"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For Multiple Sclerosis Patients
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-neuropathy-patients"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For Neuropathy Patients
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-obesity-patients"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For Obesity Patients
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-osteoporosis-patients"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For Osteoporosis Patients
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-parkinsons-patients"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For Parkinsons Patients
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-ptsd-patients"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For Ptsd Patients
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-rheumatoid-arthritis-patients"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For Rheumatoid Arthritis Patients
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-schizophrenia-patients"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For Schizophrenia Patients
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-sleep-apnea-patients"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For Sleep Apnea Patients
              </Link>
            </li>
</ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/coverage/mental-health-care-outpatient" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Outpatient Mental Health Care</a> and <a href="https://www.medicare.gov/coverage/mental-health-care-inpatient" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Inpatient Mental Health Care</a>.</div>
      </section>
    </>
  );
}