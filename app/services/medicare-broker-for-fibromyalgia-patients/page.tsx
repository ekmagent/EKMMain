import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for fibromyalgia patients | Free No-Judgment Consultation | MedicareYourself",
  description:
    "Medicare broker for fibromyalgia patients — Anthony Orner finds plans covering pain specialists, PT, and meds. Free no-judgment review. Call 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-fibromyalgia-patients" },
  openGraph: {
    title:
      "Medicare broker for fibromyalgia patients | Free No-Judgment Consultation | MedicareYourself",
    description:
      "Medicare broker for fibromyalgia patients in NJ. Anthony Orner finds plans covering pain management, meds, and specialist care. Free, no-judgment quote.",
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
      name: "Medicare Broker for Fibromyalgia Patients",
      item: "https://medicareyourself.com/services/medicare-broker-for-fibromyalgia-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Fibromyalgia Patients — We Believe You, and We're Here to Help",
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
    question: "Does Medicare cover fibromyalgia treatment?",
    answer:
      "Yes. Medicare Part B covers doctor visits, diagnostic tests, and outpatient therapies for fibromyalgia. Part D covers FDA-approved medications like duloxetine, pregabalin, and milnacipran. Coverage details depend on your specific plan and formulary.",
  },
  {
    question:
      "Can I see a rheumatologist or pain specialist with Medicare if I have fibromyalgia?",
    answer:
      "Medicare Part B covers specialist visits when referred by your primary care provider. Medicare Advantage plans may require in-network referrals. A broker can help you find plans with strong specialist networks in your area.",
  },
  {
    question:
      "Will my fibromyalgia affect which Medigap plan I can get?",
    answer:
      "During your 6-month Medigap Open Enrollment Period (starting when you turn 65 and enroll in Part B), insurers cannot deny you or charge more due to fibromyalgia. Outside that window, medical underwriting may apply in most states. Timing matters.",
  },
  {
    question:
      "How do I find a Medicare plan that covers my fibro medications?",
    answer:
      "Call Anthony Orner at 855-559-1700 for a free plan comparison. He'll check your specific medications against Part D formularies so you know your costs before you enroll.",
  },
  {
    question: "Does Medicare Advantage cover physical therapy for fibromyalgia?",
    answer:
      "Yes. Medicare Advantage plans must cover everything Original Medicare covers, including medically necessary physical therapy for fibromyalgia. Many plans also include extra benefits like chiropractic visits, acupuncture for chronic pain, or fitness programs. Coverage rules, prior authorization requirements, and network restrictions vary by plan.",
  }
];

export default function MedicareBrokerForFibromyalgiaPatients() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

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
          Medicare Broker for Fibromyalgia Patients
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
        Medicare Broker for Fibromyalgia Patients — We Believe You, and We're
        Here to Help
      </h1>

      <Image
        src="/images/medicare-broker-for-fibromyalgia-patients.webp"
        alt="Medicare broker for fibromyalgia patients"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        A Medicare broker for fibromyalgia patients does something most people in
        your life haven't done: take your pain at face value and build a plan
        around it. The fatigue, the brain fog, the days you can barely get out of
        bed. None of that is in your head.
      </p>
      <p className="text-lg mb-6">
        I'm Anthony Orner, a licensed Medicare broker in New Jersey, and I help
        people with fibro find coverage that actually works for their daily
        reality.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Pain management, medications, and what Medicare actually covers for
          fibro
        </h2>
        <p className="mb-2">
          Medicare Part B covers outpatient visits with your primary care doctor,
          rheumatologist, or pain management specialist. It also covers
          diagnostic testing used to rule out other conditions.
        </p>
        <p className="mb-2">
          Part D covers FDA-approved fibromyalgia medications including
          pregabalin (Lyrica), duloxetine (Cymbalta), and milnacipran (Savella).
          Formularies vary by plan. The wrong Part D plan could stick you with
          tier-3 copays on a drug you take every single day.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          How fibromyalgia affects your Medigap and Advantage options
        </h2>
        <p className="mb-2">
          If you're turning 65 and enrolling in Part B, your 6-month Medigap
          Open Enrollment Period is critical. During that window, no carrier can
          deny you or increase your premium because of fibromyalgia. Miss it, and
          medical underwriting kicks in.
        </p>
        <p className="mb-2">
          Medicare Advantage plans can work well for fibro patients who need
          built-in drug coverage and specialist access. But network restrictions
          matter. I'll check whether your current providers are in-network before
          you commit to anything.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          The hidden costs of brain fog, fatigue, and specialist visits
        </h2>
        <p className="mb-2">
          Fibromyalgia rarely travels alone. Many patients also manage sleep
          disorders, depression, anxiety, or POTS. Each condition adds visits,
          tests, and prescriptions.
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-2">
          <li>Part B deductible: $283/year (2026)</li>
          <li>20% coinsurance on every outpatient visit under Original Medicare</li>
          <li>Part D copays that shift when plans change their formulary tiers</li>
          <li>Out-of-pocket costs for therapies like massage or acupuncture that Medicare doesn't cover</li>
        </ul>
        <p>
          Those 20% coinsurance charges add up fast when you're seeing multiple
          specialists. A Medigap plan or the right Advantage plan can cap that
          exposure.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Why fibro patients get dismissed by the system
        </h2>
        <p className="mb-2">
          Fibromyalgia doesn't show up on an X-ray. There's no blood test that
          confirms it. That makes it an "invisible illness," and the insurance
          system wasn't built for invisible illnesses. People with fibro
          routinely face denied disability claims, inadequate documentation, and
          providers who minimize their symptoms.
        </p>
        <p>
          You shouldn't have to fight your insurance on top of fighting your
          condition. That's what I'm here for.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Your medication list matters more than you think
        </h2>
        <p className="mb-2">
          I've seen fibro patients paying hundreds more per year because their
          Part D plan placed their daily medications on a higher formulary tier.
          Before enrollment, I run your exact prescriptions through every
          available plan to find the lowest total annual cost.
        </p>
        <p>
          If you're on medications that interact with Medicare's coverage rules
          (like opioid guidelines), we'll talk through your options honestly so
          nothing catches you off guard.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Work with a broker who takes your condition as seriously as you do
        </h2>
        <p className="mb-2">
          I won't rush you. I won't second-guess your symptoms. I'll ask about
          your doctors, your prescriptions, and what a bad flare day actually
          looks like for you. Then I'll match that reality to the plan options
          available in New Jersey.
        </p>
        <p>
          The call is free. There's no judgment, no pressure, and no sign-up
          required.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-xl p-8 text-center">
        <p className="text-xl font-bold mb-2">
          Ready for a plan that works with your body, not against it?
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/quote" className="underline font-bold">
            get a free quote online
          </Link>
          .
        </p>
      </div>

      <section className="mt-12">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/learn/medicare-parts-explained"
              className="text-blue-600 hover:underline"
            >
              Medicare Part D Prescription Drug Coverage
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey"
              className="text-blue-600 hover:underline"
            >
              Medigap Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-broker-for-chronic-pain-patients"
              className="text-blue-600 hover:underline"
            >
              Medicare Broker for Chronic Pain Patients
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage vs. Medigap: Which Is Right for You?
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
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/coverage/chronic-care-management-services" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Chronic Care Management Services</a> and <a href="https://www.medicare.gov/drug-coverage-part-d" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Part D Prescription Drug Coverage</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need free one-on-one counseling? Contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey help: <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> offers free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: free, unbiased counseling is available through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: free, unbiased Medicare counseling is available through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: free, unbiased counseling is available through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
    </main>
  );
}