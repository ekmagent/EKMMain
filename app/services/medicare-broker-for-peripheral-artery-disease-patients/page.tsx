import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for peripheral artery disease patients | Free Consultation | MedicareYourself",
  description:
    "Medicare broker for peripheral artery disease patients — compare plans covering angioplasty, stents, and PAD medications. Free consultation with Anthony Orner.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-peripheral-artery-disease-patients" },
  openGraph: {
    title:
      "Medicare broker for peripheral artery disease patients | Free Consultation | MedicareYourself",
    description:
      "Medicare broker for peripheral artery disease patients matching you with plans covering vascular procedures and Rx. Anthony Orner offers free consultations.",
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
      name: "Medicare Broker for Peripheral Artery Disease Patients",
      item: "https://medicareyourself.com/services/medicare-broker-for-peripheral-artery-disease-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Peripheral Artery Disease Patients — Plans That Cover Vascular Care",
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
    "https://medicareyourself.com/services/medicare-broker-for-peripheral-artery-disease-patients",
};

const faqs = [
  {
    question: "Does Medicare cover angioplasty and stents for PAD?",
    answer:
      "Yes. Medicare Part A covers inpatient vascular procedures like angioplasty and stent placement when medically necessary. Part B covers outpatient vascular procedures and follow-up monitoring. You'll still owe the Part A deductible ($1,676 per benefit period in 2026) or the Part B 20% coinsurance unless you have supplemental coverage.",
  },
  {
    question: "What Part D drugs do PAD patients typically need covered?",
    answer:
      "Most PAD patients take blood thinners (like clopidogrel or rivaroxaban) and statins (like atorvastatin). Part D formularies vary by carrier, so it's critical to compare plans based on your exact prescriptions. A broker can run your drug list through plan comparison tools at no cost to you.",
  },
  {
    question: "Is Medigap or Medicare Advantage better for PAD patients?",
    answer:
      "It depends on your situation. Medigap plans cover the 20% Part B coinsurance on vascular procedures with no network restrictions, which matters if you see specialists at multiple facilities. Medicare Advantage may have lower premiums but can require referrals and prior authorizations for procedures. A broker can compare both options based on your doctors and treatment plan.",
  },
  {
    question: "Does a Medicare broker charge PAD patients for help?",
    answer:
      "No. Licensed Medicare brokers are paid by the insurance carriers, not by you. There's no fee for consultations, plan comparisons, or enrollment help.",
  },
];

export default function MedicareBrokerPAD() {
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
        <span>Medicare Broker for Peripheral Artery Disease Patients</span>
      </nav>

      <article className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">
          Medicare Broker for Peripheral Artery Disease Patients — Plans That
          Cover Vascular Care
        </h1>

        <Image
          src="/images/medicare-broker-for-peripheral-artery-disease-patients.webp"
          alt="Medicare broker for peripheral artery disease patients"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
        />

        <p className="text-lg mb-2">
          A Medicare broker for peripheral artery disease patients does something
          your insurer won't: compare every available plan against your actual
          vascular care needs. PAD means regular monitoring, potential procedures,
          and ongoing prescriptions. The wrong plan costs you thousands in
          coinsurance and formulary gaps.
        </p>
        <p className="mb-6">
          I'm Anthony Orner, a licensed Medicare broker. I help PAD patients find
          plans that actually cover their treatment, not just the basics.
        </p>

        <PhoneCTA />

        <section className="mt-8 mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            What Medicare covers for PAD: angioplasty, stents, and monitoring
          </h2>
          <p className="mb-2">
            Medicare Part A covers inpatient vascular procedures like angioplasty
            and stent placement. Part B covers outpatient procedures, diagnostic
            imaging (like ankle-brachial index testing), and follow-up visits with
            your vascular specialist. CMS maintains specific coverage
            determinations for endovascular management of peripheral arterial
            disease.
          </p>
          <p>
            The catch: Part B only pays 80%. That remaining 20% on a $40,000
            procedure is $8,000 out of your pocket. The 2026 Part A deductible is
            $1,676 per benefit period.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            Part D plans with strong blood thinner and statin coverage
          </h2>
          <p className="mb-2">
            PAD patients typically rely on blood thinners and statins daily.
            Formularies differ wildly between Part D carriers. A drug like
            clopidogrel might sit on Tier 1 with one plan and Tier 3 with another,
            changing your copay by $50+ per month.
          </p>
          <p>
            I run your exact medication list through every available plan in your
            zip code. You see real annual costs, not estimates.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            Why Medigap often makes sense for vascular disease patients
          </h2>
          <p className="mb-2">
            PAD can mean multiple procedures over time. Medigap Plan G covers that
            20% Part B coinsurance with no prior authorizations and no network
            restrictions. You pick any provider who accepts Medicare, anywhere in
            the country.
          </p>
          <p>
            If you're within your 6-month Medigap Open Enrollment window (starts
            the month you turn 65 and enroll in Part B), carriers can't deny you
            or charge more for your PAD diagnosis. Miss that window and medical
            underwriting applies in most states.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            How to verify your vascular specialist accepts your plan
          </h2>
          <p className="mb-2">
            Before enrolling, confirm your vascular surgeon and any imaging
            facilities are in-network. For Original Medicare with Medigap, any
            doctor who accepts Medicare assignment works. For Medicare Advantage,
            you'll need to check the plan's provider directory each year since
            networks change.
          </p>
          <p>
            I verify your providers before recommending any plan. No surprises at
            your next appointment.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            The real cost of choosing the wrong plan with PAD
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Part B coinsurance on outpatient vascular procedures: 20% with no
              cap under Original Medicare alone
            </li>
            <li>
              Part A deductible: $1,676 per benefit period (resets if you're
              readmitted after 60 days)
            </li>
            <li>
              SNF coinsurance for days 21-100: $209.50/day in 2026 if you need
              rehab after surgery
            </li>
            <li>
              Wrong Part D plan: potentially hundreds more per year on the same
              medications
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Schedule a free consultation about your PAD coverage
          </h2>
          <p className="mb-2">
            You don't pay me. Carriers do. My job is to match your vascular care
            needs to the plan that costs you the least and covers you the most.
            Bring your medication list and your doctors' names. I'll do the rest.
          </p>
          <p>
            Call <strong>855-559-1700</strong> or book a time below. Most
            consultations take about 15 minutes.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-6 text-center mb-8">
          <p className="text-xl font-semibold mb-2">
            Talk to a Medicare broker who understands PAD coverage.
          </p>
          <p className="text-lg mb-4">
            Call{" "}
            <a href="tel:8555591700" className="underline font-bold">
              855-559-1700
            </a>
          </p>
          <Link
            href="/quote"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100"
          >
            Get a Free Quote
          </Link>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/services/medicare-broker-for-heart-disease-patients"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker for Heart Disease Patients
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
                className="text-blue-600 hover:underline"
              >
                Medigap Plan G vs. Plan N: Which Covers More?
              </Link>
            </li>
            <li>
              <Link
                href="/learn/medicare-parts-explained"
                className="text-blue-600 hover:underline"
              >
                How Medicare Part D Drug Coverage Works
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-supplement/new-jersey/turning-65"
                className="text-blue-600 hover:underline"
              >
                Medigap Open Enrollment: Why Timing Matters
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
            <li>
              <Link
                href="/services/medicare-broker-for-kidney-disease-patients"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For Kidney Disease Patients
              </Link>
            </li>
</ul>
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/coverage/cardiovascular-disease-screenings" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">Medicare.gov — Cardiovascular Disease Screenings</a> and <a href="https://www.cms.gov/medicare-coverage-database/view/article.aspx?articleId=60400&ver=4" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">CMS Endovascular Management for Peripheral Arterial Disease</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need unbiased counseling? Contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare guidance.</div>
            <div className="text-sm text-gray-600 mt-4">Need unbiased help in your state? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
      </section>
      </article>
    </>
  );
}