import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for thyroid disease patients | Free Plan Review | MedicareYourself",
  description:
    "Medicare broker for thyroid patients — compare NJ plans covering levothyroxine, TSH labs, and endocrinologist visits. Free review with Anthony Orner.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-thyroid-disease-patients" },
  openGraph: {
    title:
      "Medicare broker for thyroid disease patients | Free Plan Review | MedicareYourself",
    description:
      "Medicare broker for thyroid disease patients — find NJ plans covering lab work, thyroid meds, and specialist care. Anthony Orner compares options free.",
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
      name: "Medicare Broker for Thyroid Disease Patients",
      item: "https://medicareyourself.com/services/medicare-broker-for-thyroid-disease-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Thyroid Disease Patients — Plans Covering Lab Work, Meds, and Specialist Visits",
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
};

const faqs = [
  {
    question: "Is levothyroxine covered by Medicare Part D?",
    answer:
      "Yes. Generic levothyroxine is on most Part D formularies. However, brand-name Synthroid may sit on a higher tier with larger copays. A broker can compare formularies to find which plan gives you the lowest cost for your exact prescription.",
  },
  {
    question: "What is a natural alternative to Synthroid?",
    answer:
      "Desiccated thyroid products like NP Thyroid are natural alternatives derived from porcine thyroid glands. Medicare Part D plans may cover these, but formulary placement varies widely. Always confirm coverage before switching medications.",
  },
  {
    question: "Does Medicare cover thyroid blood tests?",
    answer:
      "Medicare Part B covers medically necessary blood tests, including TSH and T4 panels, when your doctor orders them. You pay nothing for clinical lab tests from a participating provider after the Part B deductible is met.",
  },
  {
    question: "How does a Medicare broker help thyroid patients specifically?",
    answer:
      "A broker compares Part D formularies for your thyroid medications, checks specialist network access for endocrinologists, and evaluates whether Medigap or Advantage gives you better value based on how often you need labs and office visits. The service is free to you.",
  },
];

export default function MedicareBrokerThyroidDisease() {
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
          Medicare Broker for Thyroid Disease Patients
        </span>
      </nav>

      <article className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Medicare Broker for Thyroid Disease Patients — Plans Covering Lab
          Work, Meds, and Specialist Visits
        </h1>

        <Image
          src="/images/medicare-broker-for-thyroid-disease-patients.webp"
          alt="Medicare broker for thyroid disease patients"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          A Medicare broker for thyroid disease patients does something most people don't have time for: comparing dozens of plans against your specific meds, labs, and doctors. When you're managing hypothyroidism or Graves' disease, you need a plan that actually works for the care you already receive.
        </p>
        <p className="text-lg mb-6">
          I'm Anthony Orner, a licensed Medicare broker in New Jersey. I'll review your thyroid treatment and match it to the right plan at no cost to you.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How Medicare covers TSH testing, biopsies, and ultrasounds
          </h2>
          <p className="mb-2">
            Medicare Part B covers medically necessary lab work, including TSH panels and free T4 tests, at no cost when ordered by your doctor and performed by a participating lab. Thyroid ultrasounds and fine-needle biopsies are also covered under Part B as diagnostic procedures.
          </p>
          <p>
            After meeting the $283 annual Part B deductible (2026), you typically pay 20% coinsurance for imaging and procedures. That 20% is exactly where your plan choice matters most.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Part D formulary differences for Synthroid, methimazole, and generics
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Generic levothyroxine lands on Tier 1 or Tier 2 in most Part D plans, often with copays under $10.
            </li>
            <li>
              Brand-name Synthroid frequently sits on Tier 3, which can mean $40+ monthly copays depending on the plan.
            </li>
            <li>
              Methimazole (for hyperthyroidism) is usually generic and well-covered, but prior authorization requirements vary.
            </li>
            <li>
              Desiccated thyroid products like NP Thyroid have inconsistent Part D coverage. Some plans exclude them entirely.
            </li>
          </ul>
          <p className="mt-2">
            I check your exact medications against every available formulary so there are no surprises at the pharmacy counter.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Supplement vs. Advantage for frequent endocrinology visits
          </h2>
          <p className="mb-2">
            If you see an endocrinologist two to four times a year plus regular blood draws, those copays add up on a Medicare Advantage plan. A Medigap supplement (like Plan G) paired with a standalone Part D plan lets you see any Medicare-accepting specialist without referrals or network restrictions.
          </p>
          <p>
            Advantage plans can work well if your endocrinologist is in-network and the plan's specialist copay is reasonable. The right answer depends on your doctors, your medications, and how often you need labs.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why thyroid patients can't use a one-size-fits-all plan
          </h2>
          <p className="mb-2">
            Thyroid disease isn't one condition. Hashimoto's, Graves', thyroid cancer follow-up, and nodule monitoring all require different combinations of labs, imaging, meds, and specialist frequency. A plan that's great for someone on generic levothyroxine alone may be expensive for someone needing quarterly ultrasounds and brand-name medication.
          </p>
          <p>
            That's the gap a broker fills. I look at your full treatment picture, not just one line item.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            The 20% coinsurance problem and how to solve it
          </h2>
          <p className="mb-2">
            Original Medicare leaves you responsible for 20% of Part B-approved costs with no annual cap. A thyroid biopsy or surgical consultation can generate hundreds in out-of-pocket costs quickly.
          </p>
          <p>
            Medigap Plan G covers that 20% after you pay the $283 Part B deductible. For thyroid patients who need ongoing diagnostics, that protection often saves more than the monthly premium costs.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Get a free plan review based on your thyroid treatment
          </h2>
          <p className="mb-2">
            Tell me what medications you take, which doctors you see, and how often you get labs. I'll compare every plan available in your area and show you the real costs side by side.
          </p>
          <p>
            No charge. No pressure. Just clear answers about what each plan actually covers for your thyroid care.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center my-10">
          <p className="text-xl font-semibold mb-3">
            Ready for a plan that fits your thyroid treatment?
          </p>
          <p className="text-lg mb-4">
            Call{" "}
            <a
              href="tel:8555591700"
              className="underline font-bold"
            >
              855-559-1700
            </a>{" "}
            or{" "}
            <Link
              href="/quote"
              className="underline font-bold"
            >
              Get a Free Quote
            </Link>
          </p>
          <p className="text-sm opacity-90">
            Anthony Orner, Licensed Medicare Broker — NJ
          </p>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/learn/medicare-parts-explained"
                className="text-blue-600 hover:underline"
              >
                Medicare Part D Drug Coverage Guide
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
                className="text-blue-600 hover:underline"
              >
                Medigap Plan G vs. Plan N
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-supplement/new-jersey/vs-medicare-advantage"
                className="text-blue-600 hover:underline"
              >
                Medicare Advantage vs. Medigap
              </Link>
            </li>
            <li>
              <Link
                href="/services/free-medicare-broker-new-jersey"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker in New Jersey
              </Link>
            </li>
                      <li>
              <Link
                href="/services/best-medicare-plan-for-chronic-conditions"
                className="text-blue-600 hover:underline"
              >
                Best Medicare Plan For Chronic Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-people-with-pre-existing-conditions"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For People With Pre Existing Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/services/you-get-a-medicare-supplement-plan-if-you-have-a-pre-existing-condition"
                className="text-blue-600 hover:underline"
              >
                You Get A Medicare Supplement Plan If You Have A Pre Existing Condition
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
</ul>
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/coverage/thyroid-cancer-screenings" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Thyroid-related coverage</a> and <a href="https://www.medicare.gov/drug-coverage-part-d" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Part D prescription drug coverage</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: free unbiased counseling is available through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
      </section>
      </article>
    </>
  );
}