import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare supplement insurance for crohn's patients? | Free Guidance | MedicareYourself",
  description:
    "Medicare supplement insurance for Crohn's patients covers the 20% gap on biologics and colonoscopies. See which carriers approve IBD applicants. Free guidance.",
  openGraph: {
    title:
      "medicare supplement insurance for crohn's patients? | Free Guidance | MedicareYourself",
    description:
      "Medicare supplement insurance for Crohn's patients covers the 20% gap on biologics and colonoscopies. See which carriers approve IBD applicants. Free guidance.",
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
      name: "Medicare Supplement Insurance for Crohn's Patients",
      item: "https://medicareyourself.com/services/medicare-supplement-insurance-for-crohns-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Supplement Insurance for Crohn's Patients: What's Covered and How to Get Approved",
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
  datePublished: "2025-07-15",
  dateModified: "2025-07-15",
};

const faqs = [
  {
    question:
      "Can I get a Medigap plan if I have Crohn's disease?",
    answer:
      "Yes. During your 6-month Medigap Open Enrollment Period (starting the month you turn 65 and have Part B), no carrier can deny you or charge more because of Crohn's. Outside that window, approval depends on the carrier's underwriting guidelines - some accept stable IBD applicants.",
  },
  {
    question:
      "Does Medicare cover Remicade and other biologic infusions for Crohn's?",
    answer:
      "Part B covers physician-administered biologic infusions like Remicade at 80% of the approved amount after your $257 annual deductible. A Medigap plan like Plan G picks up the remaining 20%, which can save you thousands per infusion cycle.",
  },
  {
    question:
      "What is the best Medigap plan for someone with Crohn's disease?",
    answer:
      "Plan G is the most popular choice because it covers the 20% Part B coinsurance on specialist visits, colonoscopies, and biologic infusions. Plan N is a lower-premium alternative but adds small copays for some office visits.",
  },
  {
    question:
      "What if I missed my Medigap Open Enrollment Period and have Crohn's?",
    answer:
      "You may still qualify through a federal Guaranteed Issue trigger, such as losing employer coverage or leaving a Medicare Advantage plan. Some carriers also underwrite Crohn's patients individually if the condition is stable. Call us at 855-559-1700 to check your options.",
  },
];

export default function MedicareSupplementCrohnsPage() {
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
          <Link href="/services" className="hover:underline">
            Medicare Guides
          </Link>{" "}
          &gt;{" "}
          <span className="text-gray-700">
            Medicare Supplement Insurance for Crohn&apos;s Patients
          </span>
        </nav>

        <h1 className="text-3xl font-bold mb-4">
          Medicare Supplement Insurance for Crohn&apos;s Patients: What&apos;s Covered and How to Get Approved
        </h1>

        <Image
          src="/images/medicare-supplement-insurance-for-crohns-patients.webp"
          alt="medicare supplement insurance for crohn's patients"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg mb-2">
          Medicare supplement insurance for Crohn&apos;s patients fills the 20% coinsurance gap that Original Medicare leaves on biologics, colonoscopies, and specialist visits. If you manage IBD, that 20% adds up fast - a single Remicade infusion can run thousands before Medicare pays its share.
        </p>
        <p className="text-lg mb-6">
          I&apos;m Anthony Orner, a licensed Medicare broker in NJ, and I help Crohn&apos;s patients lock in Medigap coverage every month. Here&apos;s exactly how it works.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How Original Medicare covers Crohn&apos;s - infusions, scopes, and biologics
          </h2>
          <p className="mb-2">
            Part B covers outpatient Crohn&apos;s care at 80% after your $257 annual deductible. That includes:
          </p>
          <ul className="list-disc pl-6 mb-3 space-y-1">
            <li>Physician-administered biologic infusions (Remicade, Entyvio, Stelara IV)</li>
            <li>Diagnostic and surveillance colonoscopies</li>
            <li>Gastroenterologist office visits and labs</li>
          </ul>
          <p>
            Part A covers inpatient hospital stays for flares or surgery. The Part A deductible is $1,676 per benefit period - a cost Medigap plans also cover.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Which Medigap plans eliminate the 20% coinsurance on specialist visits
          </h2>
          <p className="mb-2">
            Plan G is the go-to for Crohn&apos;s patients. It covers the Part B coinsurance on every infusion, every scope, and every specialist appointment. You pay the $257 Part B deductible once per year, then Plan G handles the rest.
          </p>
          <p>
            Plan N costs less per month but adds a copay of up to $20 for some office visits and up to $50 for ER visits that don&apos;t result in admission. For frequent specialist visits, Plan G usually wins on total annual cost.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Underwriting with Crohn&apos;s: carriers that approve IBD applicants
          </h2>
          <p className="mb-2">
            Outside your Open Enrollment Period, carriers can ask medical questions. Crohn&apos;s disease triggers a decline at many companies. But not all.
          </p>
          <p className="mb-2">
            Several carriers will approve applicants with stable, well-managed IBD - meaning no hospitalizations or surgery in the past 12 to 24 months. Each carrier has different criteria, and I know which ones are currently accepting Crohn&apos;s patients in your state.
          </p>
          <p>
            Rates vary by carrier, age, and location. Call 855-559-1700 and I&apos;ll run a comparison for you at no cost.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Guaranteed-issue paths that bypass medical questions entirely
          </h2>
          <p className="mb-2">
            Your strongest option is the 6-month Medigap Open Enrollment Period. It starts the month you turn 65 and are enrolled in Part B. During this window, no carrier can deny you or charge more because of Crohn&apos;s. Zero health questions.
          </p>
          <p>
            Federal Guaranteed Issue rights also kick in if you lose employer coverage, leave a Medicare Advantage plan during certain periods, or your carrier leaves your area. These let you enroll in Plan A, B, C, F, K, or L without medical underwriting.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why locking in early matters for Crohn&apos;s patients
          </h2>
          <p className="mb-2">
            My practice is to have clients apply for their Medigap plan up to 6 months before their Part B start date. This locks in the rate early and protects you from premium increases before coverage begins.
          </p>
          <p>
            For someone with Crohn&apos;s, this is especially critical. Once your Open Enrollment Period closes, you may face underwriting that could limit your plan choices or increase your costs.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Self-injectable biologics fall under Part D, not Part B
          </h2>
          <p className="mb-2">
            One detail that catches people off guard: self-injectable biologics like Humira and Stelara subcutaneous are covered under Part D, not Part B. Medigap does not help with Part D drug costs.
          </p>
          <p>
            You&apos;ll need a standalone Part D plan with a formulary that covers your specific medication. I can help you check formulary coverage alongside your Medigap comparison.
          </p>
        </section>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center my-10">
          <p className="text-xl font-semibold mb-2">
            Get a free Medigap comparison tailored to Crohn&apos;s patients
          </p>
          <p className="mb-4">
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
                href="/services/medicare-plan-g"
                className="text-blue-700 hover:underline"
              >
                Medicare Plan G: Full Benefits Breakdown
              </Link>
            </li>
            <li>
              <Link
                href="/services/medigap-open-enrollment"
                className="text-blue-700 hover:underline"
              >
                Medigap Open Enrollment Period Explained
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-plan-n"
                className="text-blue-700 hover:underline"
              >
                Medicare Plan N: When It Makes Sense
              </Link>
            </li>
            <li>
              <Link
                href="/services/guaranteed-issue-medigap"
                className="text-blue-700 hover:underline"
              >
                Guaranteed Issue Rights for Medigap
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}