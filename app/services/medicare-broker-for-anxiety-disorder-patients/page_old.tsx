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
      name: "Medicare Broker for Anxiety Disorder Patients",
      item: "https://www.medicareyourself.com/services/medicare-broker-for-anxiety-disorder-patients",
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
    url: "https://www.medicareyourself.com/about",
  },
  publisher: {
    "@type": "Organization",
    name: "EasyKind Medicare",
    alternateName: "MedicareYourself",
  },
  datePublished: "2025-08-01",
  dateModified: "2025-08-01",
};

const faqs = [
  {
    question: "Does Medicare cover anxiety disorders?",
    answer:
      "Yes. Medicare Part B covers outpatient mental health services including therapy and psychiatry visits for diagnosed anxiety disorders. You'll typically pay 20% of the Medicare-approved amount after the $283 annual Part B deductible. Part D plans cover prescription medications like SSRIs and benzodiazepines, though formularies vary by plan.",
  },
  {
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. A licensed Medicare broker like Anthony Orner is paid by the insurance carriers, not by you. There's no fee for plan comparisons, advice, or enrollment help. The plans cost the same whether you use a broker or enroll on your own.",
  },
  {
    question: "What's the difference between a Medicare agent and a Medicare broker?",
    answer:
      "A Medicare agent typically represents one insurance company. A broker works with multiple carriers and can compare plans across companies to find the best fit for your specific medications, providers, and budget. A broker advocates for you, not one carrier.",
  },
  {
    question: "Is Talkspace free with Medicare?",
    answer:
      "Some Medicare Advantage plans include Talkspace or similar telehealth therapy platforms at no additional cost. Coverage depends on the specific plan. Anthony can check whether your current or prospective plan includes telehealth therapy options for anxiety treatment.",
  },
];

export default function MedicareBrokerAnxietyDisorderPatients() {
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
          Medicare Broker for Anxiety Disorder Patients
        </span>
      </nav>

      <div className="bg-[#1e40af] rounded-lg p-6 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Medicare Broker for Anxiety Disorder Patients — Coverage for Therapy, Medication, and More
        </h1>
        <Image
          src="/images/medicare-broker-for-anxiety-disorder-patients_photo.webp"
          alt="Medicare broker for anxiety disorder patients"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />
      </div>

      <p className="text-lg mb-2">
        A Medicare broker for anxiety disorder patients does something most plan comparison tools can't - match your specific medications, therapists, and treatment routine to plans that actually cover them well. I'm Anthony Orner, a licensed broker in New Jersey, and I do this work every day at no cost to you.
      </p>
      <p className="text-lg mb-6">
        If you've ever lost sleep wondering whether your SSRI will stay on formulary next year, or whether switching plans means losing your therapist, you already know why having someone in your corner matters.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare's mental health benefits for anxiety disorders
        </h2>
        <p className="mb-3">
          Medicare Part B covers outpatient mental health care, including therapy and psychiatry visits for anxiety disorders like generalized anxiety, panic disorder, and social anxiety. You'll pay 20% of the Medicare-approved amount after meeting the $283 annual Part B deductible.
        </p>
        <p>
          Covered providers include psychiatrists, clinical psychologists, licensed clinical social workers, and psychiatric nurse practitioners - as long as they accept Medicare assignment. There's no hard limit on the number of sessions, but your provider may need to document ongoing medical necessity.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Comparing Part D plans for benzodiazepines and SSRIs
        </h2>
        <p className="mb-3">
          Not all Part D plans cover the same anxiety medications at the same tier. One plan might put your SSRI at Tier 1 with a low copay. Another might require prior authorization or place it on a higher tier.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Formularies change every year - what was covered last year may not be covered the same way this year</li>
          <li>Some benzodiazepines require prior authorization or quantity limits</li>
          <li>I compare your exact prescriptions across every available plan to find the lowest total cost</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How telehealth expands access to anxiety treatment
        </h2>
        <p className="mb-3">
          Medicare covers telehealth therapy for anxiety, meaning you can see a licensed therapist from home over video or phone. This matters if leaving the house during a bad week feels like too much, or if the closest therapist accepting Medicare is 45 minutes away.
        </p>
        <p>
          Some Medicare Advantage plans include additional telehealth platforms at no extra cost. I can tell you which ones are available in your area.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why the right plan choice reduces more than just cost
        </h2>
        <p className="mb-3">
          People dealing with anxiety often tell me the insurance process itself creates more stress. Denied claims, surprise bills, phone calls to outsourced call centers that go nowhere. I hear it constantly.
        </p>
        <p>
          Choosing the right plan from the start - one that covers your medications, your providers, and your preferred way of getting care - removes one source of worry you don't need. And if something goes wrong after enrollment, you have a local person to call instead of a 1-800 number.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare Advantage vs. Original Medicare for anxiety care
        </h2>
        <p className="mb-3">
          Original Medicare with a Supplement (like Plan G) gives you the widest provider access. Any therapist or psychiatrist who takes Medicare, anywhere in the country, is in your network. That flexibility matters when finding a good mental health provider is already hard enough.
        </p>
        <p>
          Medicare Advantage plans may offer lower premiums and extras like telehealth therapy platforms, but they use provider networks. If your therapist isn't in-network, you'll pay more or need to switch. I'll lay out the real tradeoffs based on your situation.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Schedule a free plan comparison for your specific needs
        </h2>
        <p className="mb-3">
          Bring me your medication list, your current providers, and your questions. I'll compare plans across multiple carriers and show you the total cost picture - premiums, copays, drug costs, everything.
        </p>
        <p>
          No charge. No obligation. No pressure. Just clear answers from a licensed NJ Medicare broker who understands that the last thing you need is more uncertainty.
        </p>
      </section>

      <div className="bg-blue-600 rounded-lg p-6 text-center text-white mb-10">
        <p className="text-xl font-semibold mb-2">
          Talk to a licensed Medicare broker who gets it.
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a
            href="tel:8555591700"
            className="underline font-bold hover:text-blue-100"
          >
            855-559-1700
          </a>{" "}
          or{" "}
          <Link
            href="/contact"
            className="underline font-bold hover:text-blue-100"
          >
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
              href="/medicare-guides/medicare-mental-health-coverage"
              className="text-blue-600 hover:underline"
            >
              Medicare Mental Health Coverage Guide
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-part-d-prescription-drug-plans"
              className="text-blue-600 hover:underline"
            >
              Understanding Medicare Part D Prescription Drug Plans
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-broker-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Broker in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-telehealth-coverage"
              className="text-blue-600 hover:underline"
            >
              Medicare Telehealth Coverage Options
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}