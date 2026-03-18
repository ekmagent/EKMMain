import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare broker for people with lupus | Free Coverage Guidance | MedicareYourself",
  description:
    "Medicare broker for people with lupus — Anthony Orner helps lupus patients find coverage through underwriting-friendly carriers or guaranteed issue. Free consult.",
  openGraph: {
    title:
      "medicare broker for people with lupus | Free Coverage Guidance | MedicareYourself",
    description:
      "Medicare broker for people with lupus — Anthony Orner helps lupus patients find coverage through underwriting-friendly carriers or guaranteed issue. Free consult.",
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
      name: "Medicare Broker for People With Lupus",
      item: "https://www.medicareyourself.com/services/medicare-broker-for-people-with-lupus",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for People With Lupus: How to Secure the Best Coverage",
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
    question: "Can you get Medicare if you have lupus?",
    answer:
      "Yes. If you're 65 or older, you qualify for Medicare regardless of health status. If you're under 65, you may qualify after receiving Social Security Disability Insurance (SSDI) for 24 months. Lupus qualifies as a disabling condition under Social Security rules, though approval often requires documentation of how lupus limits your daily functioning.",
  },
  {
    question: "How hard is it to get Social Security disability with lupus?",
    answer:
      "It can be difficult because lupus symptoms fluctuate. The SSA evaluates lupus under its immune system disorders listing. You'll need thorough medical records showing how lupus affects your ability to work - lab results, treatment history, and physician statements about functional limitations all matter. Many applicants are denied initially and succeed on appeal.",
  },
  {
    question: "What insurance covers lupus treatment?",
    answer:
      "Original Medicare (Parts A and B) covers doctor visits, hospital stays, lab work, and infusion treatments like Benlysta or Saphnelo. Part D covers prescription drugs like hydroxychloroquine. A Medicare Supplement (Medigap) plan helps cover the 20% coinsurance that Part B leaves behind - which adds up fast with specialty medications and frequent appointments.",
  },
  {
    question: "Will lupus prevent me from getting a Medigap plan?",
    answer:
      "Not always. During your Medigap Open Enrollment Period (the first 6 months after turning 65 and enrolling in Part B), insurers cannot deny you or charge more due to lupus. Outside that window, medical underwriting applies - but some carriers are more lenient with autoimmune conditions. A broker can identify which ones.",
  },
];

export default function MedicareBrokerLupusPage() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          &gt;{" "}
          <Link href="/medicare-guides" className="hover:underline">
            Medicare Guides
          </Link>{" "}
          &gt;{" "}
          <span className="text-gray-700">
            Medicare Broker for People With Lupus
          </span>
        </nav>

        <h1 className="text-3xl font-bold mb-4 text-gray-900">
          Medicare Broker for People With Lupus: How to Secure the Best Coverage
        </h1>

        <Image
          src="/images/medicare-broker-for-people-with-lupus.webp"
          alt="medicare broker for people with lupus"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg text-gray-700 mb-2">
          A Medicare broker for people with lupus does something most insurance
          websites can't: match your specific treatment needs to the right plan
          and the right carrier, without guessing. I'm Anthony Orner, a licensed
          Medicare broker, and I help lupus patients find Medigap or Medicare
          Advantage coverage that actually works for the way you use healthcare.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          No cost. No pressure. Just answers.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            How lupus impacts your Medicare Supplement application
          </h2>
          <p className="text-gray-700 mb-2">
            Outside your Medigap Open Enrollment Period, most carriers ask
            health questions before approving a Supplement plan. Lupus - especially
            systemic lupus with kidney, heart, or joint involvement - can trigger
            a decline from carriers with strict underwriting.
          </p>
          <p className="text-gray-700">
            That doesn't mean you're out of options. It means your timing and
            carrier selection matter more than they do for someone without a
            chronic condition. That's where a broker earns their keep.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            Which plan type covers lupus treatment most effectively
          </h2>
          <p className="text-gray-700 mb-2">
            Lupus means rheumatology visits, lab panels, possibly infusion
            treatments, dermatology, nephrology, and medications that cost
            thousands before insurance. That 20% Part B coinsurance adds up
            fast when you're seeing multiple specialists and getting infusions
            monthly.
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>
              <strong>Plan G</strong> covers everything except the $283/year
              Part B deductible. No networks, no referrals. You see any
              Medicare-accepting doctor.
            </li>
            <li>
              <strong>Plan N</strong> costs less monthly but adds small copays
              at office visits and the ER.
            </li>
            <li>
              <strong>Medicare Advantage (Part C)</strong> may work if your
              rheumatologist and specialists are in-network, but prior
              authorizations for specialty drugs can delay treatment.
            </li>
          </ul>
          <p className="text-gray-700 mt-2">
            If you're managing active lupus with specialty medications, the
            freedom of Original Medicare plus a Supplement plan often makes more
            sense than fighting prior auth battles during a flare.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            Carriers that may approve applicants with lupus
          </h2>
          <p className="text-gray-700 mb-2">
            Not every carrier underwrites lupus the same way. Some decline
            anyone with an autoimmune diagnosis. Others will approve you if
            your lupus is stable and well-managed - no hospitalizations in
            the past 12 months, no organ involvement.
          </p>
          <p className="text-gray-700">
            I work with dozens of carriers and know which ones take a closer
            look rather than an automatic decline. That kind of knowledge
            doesn't show up on a comparison website. It comes from submitting
            applications and seeing results.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            Guaranteed issue paths that skip medical underwriting entirely
          </h2>
          <p className="text-gray-700 mb-2">
            There are specific situations where insurers must accept you
            regardless of lupus:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>
              Your 6-month Medigap Open Enrollment Period (starts the month
              you're 65+ and enrolled in Part B) - no health questions allowed
            </li>
            <li>Leaving a Medicare Advantage plan within your first 12 months</li>
            <li>Losing employer or union group coverage</li>
            <li>Your current plan leaves your area or goes bankrupt</li>
          </ul>
          <p className="text-gray-700 mt-2">
            These windows are time-limited. Miss them and you're back to
            underwriting. I track these deadlines so you don't have to.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            Don't forget Part D - your medications need a plan too
          </h2>
          <p className="text-gray-700 mb-2">
            Hydroxychloroquine, mycophenolate, Benlysta, Saphnelo - these
            drugs vary wildly in cost depending on your Part D plan's
            formulary and tier placement. The 2026 Part D redesign caps
            out-of-pocket drug costs, but deductibles and coverage gaps still
            catch people off guard.
          </p>
          <p className="text-gray-700">
            I'll check your specific prescriptions against available Part D
            plans to make sure you're not paying more than you need to.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            What working with a lupus-aware broker looks like
          </h2>
          <p className="text-gray-700 mb-2">
            You call or email. We go through your doctors, medications,
            treatment schedule, and any upcoming changes. I compare plans
            across carriers, check underwriting guidelines for your specific
            situation, and give you clear options with real numbers.
          </p>
          <p className="text-gray-700">
            You don't pay me. Carriers do. My job is to find the plan that
            fits your health - not the one that pays me the highest commission.
          </p>
        </section>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-10 text-center">
          <p className="text-xl font-semibold text-blue-900 mb-2">
            Talk to a broker who understands lupus coverage
          </p>
          <p className="text-blue-800 mb-4">
            Call{" "}
            <a
              href="tel:8555591700"
              className="font-bold underline hover:text-blue-600"
            >
              855-559-1700
            </a>{" "}
            or{" "}
            <Link
              href="/quote"
              className="font-bold underline hover:text-blue-600"
            >
              Get a Free Quote
            </Link>
          </p>
          <p className="text-sm text-blue-700">
            No cost. No obligation. Just honest guidance from Anthony Orner,
            licensed Medicare broker.
          </p>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Related resources
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare-guides/medigap-plan-g"
                className="text-blue-700 hover:underline"
              >
                Medicare Supplement Plan G: What It Covers
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/guaranteed-issue-medigap"
                className="text-blue-700 hover:underline"
              >
                Guaranteed Issue Medigap Rights Explained
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/medicare-part-d-drug-coverage"
                className="text-blue-700 hover:underline"
              >
                Medicare Part D: How Drug Coverage Works
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-chronic-conditions"
                className="text-blue-700 hover:underline"
              >
                Medicare Broker for Chronic Conditions
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}