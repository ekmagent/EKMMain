import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for chronic pain patients | Free Coverage Consultation | MedicareYourself",
  description:
    "Medicare broker for chronic pain patients in NJ. Anthony Orner finds plans covering pain management, injections, and specialist visits. Free plan review.",
  openGraph: {
    title:
      "Medicare broker for chronic pain patients | Free Coverage Consultation | MedicareYourself",
    description:
      "Medicare broker for chronic pain patients in NJ. Anthony Orner finds plans covering pain management, injections, and specialist visits. Free plan review.",
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
      name: "Medicare Broker for Chronic Pain Patients",
      item: "https://www.medicareyourself.com/services/medicare-broker-for-chronic-pain-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Chronic Pain Patients Who Deserve a Plan That Finally Sees Them",
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
    question: "Does Medicare cover chronic pain management?",
    answer:
      "Yes. Medicare Part B covers monthly chronic pain management services including pain assessments, medication management, and care coordination. You pay 20% of the Medicare-approved amount after meeting the $283 annual Part B deductible. Covered treatments can include physical therapy, acupuncture for chronic low back pain, chiropractic services, and interventional procedures when medically necessary.",
  },
  {
    question:
      "Will a Medigap plan cover the 20% coinsurance for pain treatments?",
    answer:
      "Most Medigap plans cover Part B coinsurance, which means the 20% you'd normally owe after the deductible for injections, PT, specialist visits, and pain management services can be covered. Plan G covers 100% of that coinsurance. Plan N covers it with small copays for some office visits.",
  },
  {
    question:
      "Can I get a Medicare Supplement plan if I have chronic pain conditions?",
    answer:
      "During your Medigap Open Enrollment Period - the 6 months starting the month you turn 65 and are enrolled in Part B - no insurance company can deny you or charge more because of chronic pain. Outside that window in NJ, medical underwriting may apply and pre-existing conditions could affect eligibility. Call to discuss your specific situation.",
  },
  {
    question:
      "Is Medicare Advantage or a Supplement better for chronic pain patients?",
    answer:
      "It depends on how often you see specialists. Medicare Advantage plans may require prior authorization for injections or procedures and limit you to in-network providers. A Supplement plan lets you see any doctor who accepts Medicare with no referrals or prior auth. For people with ongoing, multi-provider pain treatment, that freedom often matters more than the lower premium of an Advantage plan.",
  },
];

export default function MedicareBrokerChronicPainPatients() {
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
          Medicare Broker for Chronic Pain Patients
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Medicare Broker for Chronic Pain Patients Who Deserve a Plan That
        Finally Sees Them
      </h1>

      <Image
        src="/images/medicare-broker-for-chronic-pain-patients.webp"
        alt="Medicare broker for chronic pain patients"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg text-gray-700 mb-2">
        A Medicare broker for chronic pain patients does something most plan
        comparison tools can't: look at how you actually live and match it to
        coverage that keeps up. I'm Anthony Orner, a licensed Medicare broker in
        New Jersey, and I work with people whose treatment plans are anything but
        simple.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        Some of you sleep in a chair because it's the only position that works.
        Every week means juggling specialist appointments, injection schedules,
        and prescription refills. Your plan should handle that without making you
        fight for every approval.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Pain management, injections, and PT: what your plan should cover
        </h2>
        <p className="text-gray-700 mb-3">
          Medicare Part B covers a range of chronic pain treatments: physical
          therapy, occupational therapy, acupuncture for chronic low back pain,
          chiropractic services, and monthly pain management services including
          medication management and care coordination.
        </p>
        <p className="text-gray-700 mb-3">
          Part B also covers interventional procedures like nerve blocks and
          radio frequency ablation when conservative treatments haven't worked
          and medical necessity is documented. You'll pay 20% of the
          Medicare-approved amount after the $283 annual deductible - unless a
          Supplement plan picks that up for you.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How chronic pain conditions affect Medigap underwriting in NJ
        </h2>
        <p className="text-gray-700 mb-3">
          Timing matters. During your 6-month Medigap Open Enrollment Period
          (starts when you're 65+ and enrolled in Part B), insurers can't deny
          you or charge higher premiums because of chronic pain or any other
          health condition. That's federal law.
        </p>
        <p className="text-gray-700 mb-3">
          Outside that window, medical underwriting applies in most situations.
          A chronic pain diagnosis could mean higher rates or denial. If you're
          approaching 65, don't wait to explore your options.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Medicare Advantage vs. Supplement for ongoing pain treatment
        </h2>
        <p className="text-gray-700 mb-3">
          This is where the wrong choice really costs you. Medicare Advantage
          plans often require prior authorization for injections and procedures.
          They can restrict you to in-network pain specialists. If your doctor
          isn't in network, you start over.
        </p>
        <p className="text-gray-700 mb-3">
          A Medicare Supplement (Medigap) plan lets you see any provider who
          accepts Medicare. No referrals. No prior auth for Part B services. For
          people managing pain across multiple specialists, that flexibility
          isn't a luxury - it's the difference between getting treatment and
          fighting for it.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Stop negotiating with your coverage the way you negotiate with your
          body
        </h2>
        <p className="text-gray-700 mb-3">
          You already weigh every decision against what your body can handle
          today. Your insurance shouldn't add to that weight. People tell me
          about spending hours on hold trying to get a procedure approved, or
          discovering their medication got dropped from formulary with no
          warning.
        </p>
        <p className="text-gray-700">
          That's not a coverage gap. That's a system that wasn't built with you
          in mind. I help you find one that was.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Part D and your pain medications
        </h2>
        <p className="text-gray-700 mb-3">
          Formularies change every year. The Part D plan that covered your
          medications in 2025 might tier them differently in 2026 - or drop them
          entirely. I review your specific prescriptions against current
          formularies so you're not blindsided by a cost spike.
        </p>
        <p className="text-gray-700">
          If you're on a combination of medications that took years to get
          right, protecting that regimen is a priority, not an afterthought.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What a free plan review looks like
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>We go through your doctors, specialists, and treatment schedule</li>
          <li>I check your prescriptions against current Part D formularies</li>
          <li>
            We compare Medigap vs. Advantage based on your actual healthcare
            usage - not a generic recommendation
          </li>
          <li>
            You get a clear picture of what you'll pay out of pocket under each
            option
          </li>
          <li>No cost. No obligation. No pressure to enroll in anything.</li>
        </ul>
      </section>

      <section className="mt-12 bg-blue-50 rounded-lg p-6 text-center">
        <p className="text-xl font-semibold text-gray-900 mb-2">
          Talk to a broker who understands chronic pain coverage
        </p>
        <p className="text-gray-700 mb-4">
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
            get a free quote online
          </Link>
          .
        </p>
        <p className="text-sm text-gray-500">
          Anthony Orner, Licensed Medicare Broker - NJ
        </p>
      </section>

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
              href="/medicare-guides/medicare-advantage-vs-medigap"
              className="text-blue-700 hover:underline"
            >
              Medicare Advantage vs. Medigap: Which Is Right for You?
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medigap-plan-g-nj"
              className="text-blue-700 hover:underline"
            >
              Medigap Plan G in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/part-d-prescription-drug-coverage"
              className="text-blue-700 hover:underline"
            >
              Understanding Part D Prescription Drug Coverage
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-broker-nj"
              className="text-blue-700 hover:underline"
            >
              Find a Medicare Broker in New Jersey
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}