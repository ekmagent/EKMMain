import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for multiple sclerosis patients | Free Plan Comparison | MedicareYourself",
  description:
    "Medicare broker for multiple sclerosis patients in NJ. Anthony Orner navigates underwriting and finds plans covering infusions and MRIs. Free consultation.",
  openGraph: {
    title:
      "Medicare broker for multiple sclerosis patients | Free Plan Comparison | MedicareYourself",
    description:
      "Medicare broker for multiple sclerosis patients in NJ. Anthony Orner navigates underwriting and finds plans covering infusions and MRIs. Free consultation.",
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
      name: "Medicare Broker for Multiple Sclerosis Patients",
      item: "https://www.medicareyourself.com/services/medicare-broker-for-multiple-sclerosis-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Multiple Sclerosis Patients Fighting a War Nobody Else Can See",
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
    question: "Can you get Medicare if you have multiple sclerosis?",
    answer:
      "Yes. If you're 65 or older, you qualify for Medicare like anyone else. If you're under 65, you can qualify through Social Security Disability Insurance (SSDI) after a 24-month waiting period from when you first receive disability benefits. Once enrolled, Original Medicare covers MS-related services including MRIs, neurologist visits, and Part B infusion drugs like Ocrevus.",
  },
  {
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. Medicare brokers are paid by the insurance carriers, not by you. There's no fee for plan comparisons, enrollment help, or ongoing support. You get the same plan at the same price whether you use a broker or enroll directly.",
  },
  {
    question: "What is the golden test for MS?",
    answer:
      "MRI is considered the gold standard for diagnosing and monitoring MS. Brain and spinal cord MRIs detect lesions that indicate disease activity. Under Original Medicare Part B, diagnostic MRIs are covered at 80% after the $283 annual deductible. The right Medicare plan can significantly reduce your remaining 20% out-of-pocket cost for these scans.",
  },
  {
    question:
      "Does Medicare cover MS infusion treatments like Ocrevus or Tysabri?",
    answer:
      "Infusion drugs administered in a doctor's office or outpatient facility are typically covered under Medicare Part B, not Part D. You'll pay 20% coinsurance after the Part B deductible. A Medigap plan can cover most or all of that 20%, which matters when a single infusion can cost thousands.",
  },
];

export default function MedicareBrokerForMSPatients() {
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
          Medicare Broker for Multiple Sclerosis Patients
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Medicare Broker for Multiple Sclerosis Patients Fighting a War Nobody
        Else Can See
      </h1>

      <Image
        src="/images/hub_medicare-broker-for-multiple-sclerosis-patients.webp"
        alt="Medicare broker for multiple sclerosis patients"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        A Medicare broker for multiple sclerosis patients does what most online
        plan finders can't: match your actual treatment needs - infusions, MRIs,
        specialist visits - to the plan that covers them best. I'm Anthony
        Orner, a licensed broker in NJ, and I work with MS patients who are
        tired of the wrong plan costing them thousands.
      </p>
      <p className="text-lg mb-6">
        The hardest part isn't always the symptoms. It's the fatigue nobody sees,
        the tingling nobody believes, and the fear that the wrong insurance
        choice will make everything harder.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          MS drug costs, MRIs, and why plan choice matters more than you think
        </h2>
        <p className="mb-3">
          A single Ocrevus infusion can run $30,000+. Under Part B, you pay 20%
          coinsurance after the $283 annual deductible. That's potentially
          thousands out of pocket - per infusion, twice a year.
        </p>
        <p className="mb-3">
          MRIs for monitoring lesions add up fast too. The wrong plan leaves you
          exposed. The right one covers nearly all of it. That gap is where I
          spend most of my time with MS clients.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Medigap underwriting with an MS diagnosis: what's actually possible
        </h2>
        <p className="mb-3">
          During your 6-month Medigap Open Enrollment Period (starting the month
          you turn 65 and have Part B), no carrier can deny you or charge more
          because of MS. That window is everything.
        </p>
        <p className="mb-3">
          Outside that window, underwriting applies, and an MS diagnosis
          typically means denial for Medigap. If you're approaching 65, don't
          wait. Lock in your Medigap plan during Open Enrollment - it may be
          your only shot at guaranteed issue.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare Advantage vs. supplement when you need specialty infusions
        </h2>
        <p className="mb-3">
          Medicare Advantage plans can look attractive with $0 premiums and extra
          benefits. But research shows MA plans cover only about 33% of newer MS
          drugs compared to 81% for older medications. Prior authorization
          denials hit around 50% initially.
        </p>
        <ul className="list-disc pl-6 mb-3 space-y-1">
          <li>
            Original Medicare + Medigap: broader provider access, no referrals
            for neurologists, predictable costs on infusions
          </li>
          <li>
            Medicare Advantage: lower premiums but network restrictions, prior
            auth requirements, and formulary limits on newer DMTs
          </li>
          <li>
            The best choice depends on your specific drugs, doctors, and how
            often you need imaging
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Part D and disease-modifying therapies
        </h2>
        <p className="mb-3">
          Some MS medications fall under Part B (infusions given in medical
          settings). Others - like oral or self-injected DMTs - fall under Part
          D. Formularies vary wildly between plans. A drug covered on one plan
          may require step therapy or prior auth on another.
        </p>
        <p className="mb-3">
          I check your specific medications against every available Part D plan
          to find the lowest real cost, not just the lowest premium.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Under 65 with MS and qualifying for Medicare through SSDI
        </h2>
        <p className="mb-3">
          If you're under 65 and receiving SSDI for MS, you become eligible for
          Medicare after a 24-month waiting period. When that enrollment hits,
          you get a Medigap Open Enrollment Period with guaranteed issue rights.
          Don't let it pass without talking to someone who understands the
          stakes.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Work with a broker who understands MS is more than what shows on the
          surface
        </h2>
        <p className="mb-3">
          I've sat with people who look perfectly fine on the outside while
          managing brutal fatigue, brain fog, and the constant weight of
          wondering what tomorrow brings. Insurance paperwork shouldn't be
          another thing draining you.
        </p>
        <p className="mb-3">
          I compare plans across carriers, check your neurologist and infusion
          center networks, and handle the details so you can focus on living.
          There's no fee for my help - ever.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-10 mb-10 text-center">
        <p className="text-xl font-semibold mb-2">
          Talk through your MS coverage options with a licensed Medicare broker.
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
          </Link>{" "}
          - no cost, no obligation.
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-guides/medigap-open-enrollment"
              className="text-blue-700 hover:underline"
            >
              Medigap Open Enrollment Period: What You Need to Know
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-vs-medigap"
              className="text-blue-700 hover:underline"
            >
              Medicare Advantage vs. Medigap: How to Decide
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/part-d-plan-comparison"
              className="text-blue-700 hover:underline"
            >
              Part D Plan Comparison: Finding the Right Drug Coverage
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-broker-nj"
              className="text-blue-700 hover:underline"
            >
              Medicare Broker in New Jersey
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}