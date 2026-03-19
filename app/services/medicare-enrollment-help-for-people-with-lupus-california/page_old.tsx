import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare enrollment help for people with lupus california | Free Guidance | MedicareYourself",
  description:
    "Medicare enrollment help for people with lupus in California. Learn your rights, compare plans covering rheumatologists and biologics. Free broker guidance.",
  openGraph: {
    title:
      "medicare enrollment help for people with lupus california | Free Guidance | MedicareYourself",
    description:
      "Medicare enrollment help for people with lupus in California. Learn your rights, compare plans covering rheumatologists and biologics. Free broker guidance.",
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
      item: "https://medicareyourself.com/medicare",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Medicare Enrollment Help for People with Lupus California",
      item: "https://medicareyourself.com/services/medicare-enrollment-help-for-people-with-lupus-california",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Enrollment Help for People with Lupus in California: What You Need to Know",
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
  datePublished: "2025-07-14",
  dateModified: "2025-07-14",
};

const faqs = [
  {
    question: "Can you get Medicare with lupus?",
    answer:
      "Yes. If lupus causes you to qualify for Social Security Disability Insurance (SSDI), you become eligible for Medicare after 24 months of receiving SSDI benefits. You do not need to wait until age 65.",
  },
  {
    question: "What are the support resources for lupus patients?",
    answer:
      "The Lupus Foundation of America offers health educator support, financial assistance resource lists, and local chapters in California. For Medicare-specific help, a licensed broker can compare plans that cover your rheumatologists, lab work, and biologic medications at no cost to you.",
  },
  {
    question:
      "Does California offer guaranteed issue rights for Medigap if I have lupus?",
    answer:
      "California has specific Medigap rules for people under 65 on Medicare due to disability. Not all carriers are required to offer plans to under-65 beneficiaries, and pricing may differ. Call us at 855-559-1700 to confirm which carriers in your area offer coverage and at what rates.",
  },
  {
    question: "Are biologic drugs for lupus covered under Medicare?",
    answer:
      "Biologics administered by a doctor in a clinical setting (like Benlysta infusions) are typically covered under Part B. Self-injected biologics may fall under Part D. Formularies vary by plan, so comparing your specific medications across plans is critical.",
  },
];

export default function MedicareEnrollmentHelpLupusCalifornia() {
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
          <Link href="/medicare" className="hover:underline">
            Medicare Guides
          </Link>{" "}
          &gt;{" "}
          <span className="text-gray-700">
            Medicare Enrollment Help for People with Lupus California
          </span>
        </nav>

        <h1 className="text-3xl font-bold mb-4">
          Medicare Enrollment Help for People with Lupus in California: What You
          Need to Know
        </h1>

        <Image
          src="/images/medicare-enrollment-help-for-people-with-lupus-california.webp"
          alt="Medicare enrollment help for people with lupus in California"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg mb-2">
          Medicare enrollment help for people with lupus in California starts
          with understanding how disability-based Medicare works and which plans
          actually cover your treatments. Lupus patients often face unique
          coverage decisions around biologics, frequent lab work, and specialist
          access. I help California residents sort through those decisions every
          day at no cost.
        </p>

        <PhoneCTA />

        <section className="mt-8 mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            How lupus qualifies you for Medicare before 65
          </h2>
          <p className="mb-2">
            Systemic lupus erythematosus (SLE) can qualify you for Social
            Security Disability Insurance if it causes severe organ involvement,
            joint dysfunction, or other functional limitations documented by your
            doctors. Once you have been receiving SSDI for 24 consecutive months,
            you automatically become eligible for Medicare Parts A and B.
          </p>
          <p>
            You do not need to wait until 65. Many lupus patients in California
            enter Medicare in their 30s or 40s through this pathway. Your Part B
            premium in 2026 is $185 per month, deducted from your SSDI check.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            California Medigap rules for lupus patients on SSDI
          </h2>
          <p className="mb-2">
            Here is where California gets tricky. Federal law only guarantees
            Medigap open enrollment when you turn 65 and have Part B. If you are
            under 65 on Medicare due to disability, federal guaranteed issue does
            not automatically apply.
          </p>
          <p>
            California does require some insurers to sell Medigap policies to
            disabled beneficiaries under 65, but not all carriers participate and
            premiums can be higher. Rules vary by carrier, so call us at
            855-559-1700 to find out exactly which companies will write a policy
            in your zip code.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            Choosing between Supplement and Advantage plans with lupus
          </h2>
          <p className="mb-2">
            This is one of the biggest decisions you will make. With active
            lupus, consider these factors:
          </p>
          <ul className="list-disc pl-6 mb-3 space-y-2">
            <li>
              <strong>Medicare Supplement (Medigap):</strong> Works with any
              doctor who accepts Medicare. No referrals needed for
              rheumatologists. Plan G covers everything after the $257 annual
              Part B deductible.
            </li>
            <li>
              <strong>Medicare Advantage:</strong> May have lower premiums but
              uses a network. Check that your rheumatologist, infusion center,
              and lab are in-network. Prior authorization for biologics is
              common.
            </li>
          </ul>
          <p>
            If you see multiple specialists and receive regular infusions, the
            freedom of a Supplement plan often makes more financial sense long
            term.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            What lupus treatments Medicare covers
          </h2>
          <p className="mb-2">
            Part B covers doctor-administered biologics like Benlysta infusions,
            outpatient lab work (ANA panels, complement levels), and visits with
            your rheumatologist. You pay 20% of the Medicare-approved amount
            after your $257 deductible, unless a Supplement plan covers that
            share.
          </p>
          <p>
            Self-injected medications and oral prescriptions like
            hydroxychloroquine fall under Part D. Formularies vary by plan, so
            always run your specific drug list through each plan before
            enrolling.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            Why working with a broker who understands autoimmune conditions
            matters
          </h2>
          <p className="mb-2">
            A generic plan comparison misses critical details for lupus patients.
            Does the Advantage plan require prior auth for your biologic? Is
            your infusion center in-network? What happens if you flare and need
            an ER visit out of your service area?
          </p>
          <p>
            I look at these specifics before recommending a plan. My service is
            free to you. Carriers pay me the same commission regardless of which
            plan you choose, so my only goal is finding the right fit.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Steps to enroll in the right Medicare plan today
          </h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              Call 855-559-1700 or request a callback. Tell us about your lupus
              treatments and current doctors.
            </li>
            <li>
              We check your California zip code for available Medigap carriers
              (especially under-65 options) and Advantage plans with your
              providers in-network.
            </li>
            <li>
              We run your prescriptions through Part D plans to find the lowest
              annual drug cost.
            </li>
            <li>
              You pick the plan. We handle the enrollment paperwork.
            </li>
          </ol>
        </section>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 text-center">
          <p className="text-xl font-semibold mb-2">
            Get your free Medicare plan comparison today
          </p>
          <p className="mb-4">
            Call{" "}
            <a
              href="tel:855-559-1700"
              className="text-blue-700 font-bold hover:underline"
            >
              855-559-1700
            </a>{" "}
            or{" "}
            <Link
              href="/quote"
              className="text-blue-700 font-bold hover:underline"
            >
              Get a Free Quote
            </Link>
          </p>
          <p className="text-sm text-gray-600">
            Licensed broker. No cost. No obligation.
          </p>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare/medicare-supplement-plans-california"
                className="text-blue-700 hover:underline"
              >
                Medicare Supplement Plans in California
              </Link>
            </li>
            <li>
              <Link
                href="/medicare/medicare-advantage-california"
                className="text-blue-700 hover:underline"
              >
                Medicare Advantage Plans in California
              </Link>
            </li>
            <li>
              <Link
                href="/medicare/medicare-part-d-drug-coverage"
                className="text-blue-700 hover:underline"
              >
                Medicare Part D Drug Coverage Guide
              </Link>
            </li>
            <li>
              <Link
                href="/medicare/medicare-disability-under-65"
                className="text-blue-700 hover:underline"
              >
                Medicare for Disability Under 65
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}