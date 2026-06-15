import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for high cholesterol patients | Free Plan Comparison | MedicareYourself",
  description:
    "Compare Medicare plans for high cholesterol patients with broker Anthony Orner. Find coverage for statins, lipid panels & cardiology. Call 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-high-cholesterol-patients" },
  openGraph: {
    title:
      "Medicare broker for high cholesterol patients | Free Plan Comparison | MedicareYourself",
    description:
      "Medicare broker for high cholesterol patients in NJ. Anthony Orner finds plans covering statins, labs, and cardiology visits. Free consultation.",
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
      name: "Medicare Broker for High Cholesterol Patients",
      item: "https://medicareyourself.com/services/medicare-broker-for-high-cholesterol-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for High Cholesterol Patients Who Need Coverage That Matches Their Commitment",
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
    "https://medicareyourself.com/services/medicare-broker-for-high-cholesterol-patients",
};

const faqs = [
  {
    question: "Does Medicare cover cholesterol medication?",
    answer:
      "Yes. Medicare Part D plans cover most statins and other cholesterol-lowering drugs, though formularies vary by carrier. Some plans place brand-name statins on higher tiers with larger copays, while generics like atorvastatin and rosuvastatin are often on preferred tiers. A broker can compare formularies to find the lowest cost for your specific prescription.",
  },
  {
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. Medicare brokers are paid by insurance carriers, not by you. There's no fee for consultations, plan comparisons, or enrollment help. The plans cost the same whether you enroll directly or through a broker.",
  },
  {
    question:
      "Will high cholesterol affect my Medigap premiums in New Jersey?",
    answer:
      "During your 6-month Medigap Open Enrollment Period (starting the month you turn 65 and are enrolled in Part B), carriers cannot charge you more or deny you coverage for high cholesterol. Outside that window, NJ carriers can use medical underwriting, and a cholesterol diagnosis could affect your options or pricing.",
  },
  {
    question: "How often does Medicare cover cholesterol lab work?",
    answer:
      "Medicare Part B covers cardiovascular screening blood tests, including cholesterol and lipid panels, once every five years at no cost. If your doctor orders more frequent labs to monitor your treatment, Part B typically covers those as medically necessary, subject to the $283 annual deductible in 2026.",
  },
];

export default function MedicareBrokerHighCholesterolPage() {
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
          Medicare Broker for High Cholesterol Patients
        </span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Medicare Broker for High Cholesterol Patients Who Need Coverage That
          Matches Their Commitment
        </h1>

        <Image
          src="/images/medicare-broker-for-high-cholesterol-patients.webp"
          alt="Medicare broker for high cholesterol patients"
          width={800}
          height={400}
          className="w-full h-auto rounded-lg mb-6"
        />

        <p className="text-lg mb-2">
          A Medicare broker for high cholesterol patients helps you find
          coverage that actually keeps up with how you manage this condition.
          You're tracking your numbers, taking your medication, showing up for
          lab draws. Your plan should support that effort, not create new
          obstacles every time you need a refill or a follow-up.
        </p>

        <p className="text-lg mb-6">
          I'm Anthony Orner, a licensed Medicare broker in New Jersey, and I
          help people with ongoing conditions like high cholesterol match their
          real healthcare needs to the right plan.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why statin users need more than a default Medicare plan
          </h2>
          <p className="mb-3">
            Not all Part D formularies treat statins the same. One plan might
            put your atorvastatin on Tier 1 with a $3 copay. Another might
            classify it differently and charge $25. If your doctor switches you
            to a brand-name option like Crestor, that gap widens fast.
          </p>
          <p>
            I compare formularies side by side so you're not overpaying for a
            medication you take every single day.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Lab work, specialist visits, and what your plan should cover
          </h2>
          <p className="mb-3">
            Managing cholesterol means regular lipid panels, sometimes every
            few months while your doctor adjusts dosage. Medicare Part B covers
            cardiovascular screening blood tests every five years at no cost.
            Medically necessary labs ordered more frequently are also covered,
            subject to the 2026 Part B deductible of $283.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Lipid panels and fasting cholesterol tests</li>
            <li>Cardiology referrals and specialist copays</li>
            <li>Annual wellness visits to review your treatment plan</li>
            <li>Medication therapy management programs under Part D</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How high cholesterol affects Medigap underwriting in NJ
          </h2>
          <p className="mb-3">
            If you're turning 65 and enrolling in Part B, you have a 6-month
            Medigap Open Enrollment Period where no carrier can deny you or
            charge more for a pre-existing condition like high cholesterol.
            That's federal law.
          </p>
          <p>
            Outside that window, New Jersey carriers can apply medical
            underwriting. A cholesterol diagnosis on your application could
            mean higher premiums or a denial. Timing matters here, and I make
            sure you don't miss that protected enrollment window.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            The real cost of choosing the wrong Part D plan
          </h2>
          <p className="mb-3">
            Someone on a daily statin who picks the cheapest Part D premium
            without checking the formulary might spend hundreds more per year
            in copays than someone who paid a little more upfront for better
            drug coverage. I've seen it happen more than I'd like.
          </p>
          <p>
            I run your specific medications through every available plan so
            you see the true total cost, not just the premium.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What a broker does that a website can't
          </h2>
          <p className="mb-3">
            Medicare plan-finder tools are useful, but they can't ask you
            whether your doctor is considering switching your medication, or
            whether you're dealing with muscle aches that might mean trying a
            different statin next quarter. Those details change which plan is
            best for you.
          </p>
          <p>
            A broker costs you nothing. Carriers pay my commission, and the
            plan price is the same whether you enroll through me or directly.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Get a plan that covers every lab draw and medication adjustment
          </h2>
          <p>
            You're already putting in the work to manage your cholesterol.
            Your Medicare plan should make that easier, not harder. Call me for
            a free consultation and I'll walk through your medications, your
            doctors, and your options. No pressure, just answers.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center my-10">
          <p className="text-xl font-semibold mb-2">
            Talk to Anthony Orner, Licensed Medicare Broker
          </p>
          <p className="text-3xl font-bold mb-4">
            <a href="tel:8555591700" className="underline">
              855-559-1700
            </a>
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
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
                href="/medicare-supplement/new-jersey/turning-65"
                className="text-blue-600 hover:underline"
              >
                Medigap Open Enrollment in New Jersey: What You Need to Know
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
                href="/services/free-medicare-broker-new-jersey"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/learn/medicare-parts-explained"
                className="text-blue-600 hover:underline"
              >
                Medicare Preventive Services and Screenings
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
                href="/services/medicare-broker-for-high-blood-pressure-patients"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For High Blood Pressure Patients
              </Link>
            </li>
</ul>
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/coverage/cardiovascular-disease-screenings" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">Medicare.gov — Cardiovascular Disease Screenings</a> and <a href="https://www.medicare.gov/drug-coverage-part-d" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">Medicare.gov — Part D Prescription Drug Coverage</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Free, unbiased counseling is available through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">New Jersey SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased Medicare counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free unbiased Medicare counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: visit the <a href="https://www.state.nj.us/dobi/division_insurance/ins_ombudsman.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free counseling.</div>
      </section>
      </article>
    </>
  );
}