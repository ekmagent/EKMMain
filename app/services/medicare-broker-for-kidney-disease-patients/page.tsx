import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for kidney disease patients | Free Coverage Review | MedicareYourself",
  description:
    "Medicare broker for kidney disease patients navigating CKD stages, dialysis, and ESRD rules. Anthony Orner simplifies your coverage options. Free review.",
  openGraph: {
    title:
      "Medicare broker for kidney disease patients | Free Coverage Review | MedicareYourself",
    description:
      "Medicare broker for kidney disease patients navigating CKD stages, dialysis, and ESRD rules. Anthony Orner simplifies your coverage options. Free review.",
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
      name: "Medicare Broker for Kidney Disease Patients",
      item: "https://www.medicareyourself.com/services/medicare-broker-for-kidney-disease-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Kidney Disease Patients — One Less Thing to Worry About",
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
    question: "Can I get Medicare if I have kidney disease?",
    answer:
      "Yes. If you have End-Stage Renal Disease (ESRD) requiring regular dialysis or a kidney transplant, you can qualify for Medicare at any age - you don't have to be 65. You or your spouse must have enough work credits under Social Security, Railroad Retirement, or as a government employee. For earlier CKD stages, standard Medicare eligibility rules apply (age 65+ or qualifying disability).",
  },
  {
    question: "Which insurance is best for CKD patients?",
    answer:
      "It depends on your CKD stage, whether you're on dialysis, your prescriptions, and your doctors. Some people do best with Original Medicare plus a Supplement (Medigap) and a Part D drug plan. Others benefit from a Medicare Advantage plan with built-in drug coverage and extras like transportation to dialysis. A broker can compare your specific options at no cost to you.",
  },
  {
    question:
      "How long does Medicare last after a kidney transplant?",
    answer:
      "Medicare coverage based on ESRD generally continues for 36 months after a successful kidney transplant. After that, if you don't qualify for Medicare another way (age or disability), your full A and B coverage ends. However, a special Part B benefit covers immunosuppressive drugs indefinitely if you lose other coverage. The rules are confusing - call to review your specific timeline.",
  },
  {
    question:
      "Does Medicare cover dialysis costs?",
    answer:
      "Medicare covers dialysis treatments, including in-center hemodialysis and home dialysis. Under Original Medicare, you pay 20% of the Medicare-approved amount for dialysis after meeting your Part B deductible ($283 in 2026). A Medigap plan or Medicaid can help cover that 20%. Some Medicare Advantage plans also cover dialysis with different cost-sharing structures.",
  },
];

export default function MedicareBrokerKidneyDiseasePatients() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/medicare-guides" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Medicare Broker for Kidney Disease Patients
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Medicare Broker for Kidney Disease Patients — One Less Thing to Worry About
      </h1>

      <Image
        src="/images/hub_medicare-broker-for-kidney-disease-patients.webp"
        alt="Medicare broker for kidney disease patients"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        A Medicare broker for kidney disease patients can cut through the confusion that piles up alongside the appointments, labs, and dietary restrictions. Between tracking your GFR, coordinating with nephrologists, and managing medications, insurance shouldn't be another source of exhaustion.
      </p>
      <p className="text-lg mb-6">
        I'm Anthony Orner, a licensed Medicare broker in New Jersey. I help people with CKD, dialysis, and transplant histories find the right coverage - and I don't charge you a cent for it.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare coverage at every CKD stage, including dialysis and transplant
        </h2>
        <p className="mb-3">
          Early-stage CKD is usually covered under standard Medicare (Part A and Part B) like any other condition. Your nephrologist visits, bloodwork, and imaging fall under Part B after your $283 annual deductible.
        </p>
        <p className="mb-3">
          Once you reach ESRD and need regular dialysis or a transplant, Medicare eligibility opens up regardless of age. That's a lifeline - but it also means a whole new layer of enrollment rules, coordination questions, and cost-sharing to sort through.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How ESRD special enrollment rules affect your plan options
        </h2>
        <p className="mb-3">
          If you qualify for Medicare through ESRD, you can enroll in Part A and Part B outside normal enrollment windows. But the details matter. Your coverage start date depends on when you begin dialysis, whether you're doing home training, or whether you've had a transplant.
        </p>
        <p className="mb-3">
          People with ESRD can now enroll in Medicare Advantage plans - a change from earlier rules that restricted access. Still, not every MA plan works well for dialysis patients. I'll compare what's actually available in your area and check that your dialysis center and nephrologist are in-network.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Coordinating Part D with kidney-specific prescriptions and phosphate binders
        </h2>
        <p className="mb-3">
          Kidney disease often means a long medication list: phosphate binders, blood pressure drugs, erythropoietin, immunosuppressants after transplant. Formularies vary by plan, and a drug covered this year might shift tiers next year.
        </p>
        <p className="mb-3">
          I run your full prescription list through available Part D plans to find one that actually covers what you take - at the lowest out-of-pocket cost. No guessing.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What happens to your Medicare after a transplant
        </h2>
        <p className="mb-3">
          This is where people get blindsided. Medicare based on ESRD generally continues for 36 months after a successful transplant. After that, if you don't qualify for Medicare through age or disability, your Part A and B coverage can end.
        </p>
        <p className="mb-3">
          There is a special Part B-only benefit that covers immunosuppressive drugs if you lose all other coverage. But the rules around coordination with employer insurance, Medicaid, and Marketplace plans are genuinely complicated. I help you plan ahead so you're not scrambling at the 36-month mark.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Coordinating Medicare with employer or other insurance
        </h2>
        <p className="mb-3">
          If you have group insurance through an employer, Medicare coordination rules depend on the size of the employer and how long you've had ESRD. For the first 30 months, your employer plan typically pays primary. After that, Medicare becomes primary.
        </p>
        <p className="mb-3">
          Getting this wrong means denied claims, surprise bills, and hours on hold with billing departments. I'll review your situation and make sure your coverage layers are set up correctly.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Request a free review so your insurance stops adding to the overwhelm
        </h2>
        <p className="mb-3">
          You're already managing enough. A 15-minute call with me can clarify your enrollment timeline, compare plan options for your specific medications and providers, and flag anything you might be missing.
        </p>
        <p>
          No cost. No obligation. Just straightforward answers from someone who does this every day.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center mb-10">
        <p className="text-lg font-semibold mb-2">
          Talk to a licensed Medicare broker who understands kidney disease coverage.
        </p>
        <p className="text-xl font-bold mb-3">
          Call{" "}
          <a href="tel:8555591700" className="text-blue-700 underline">
            855-559-1700
          </a>
        </p>
        <Link
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
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
              href="/medicare-guides/esrd-medicare-eligibility"
              className="text-blue-700 hover:underline"
            >
              ESRD Medicare Eligibility: Who Qualifies and When
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-part-d-drug-plans"
              className="text-blue-700 hover:underline"
            >
              Medicare Part D Drug Plans: How to Compare Coverage
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medigap-vs-medicare-advantage"
              className="text-blue-700 hover:underline"
            >
              Medigap vs. Medicare Advantage: Which Works Better for You?
            </Link>
          </li>
          <li>
            <Link
              href="/services/free-medicare-plan-review"
              className="text-blue-700 hover:underline"
            >
              Free Medicare Plan Review with Anthony Orner
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}