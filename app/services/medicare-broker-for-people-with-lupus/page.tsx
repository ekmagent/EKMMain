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
    "Living with lupus? Broker Anthony Orner compares Medigap, Advantage & Part D for rheumatology visits, infusions & meds. Call 855-559-1700 for a free review.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-people-with-lupus" },
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
      name: "Medicare Broker for People With Lupus",
      item: "https://medicareyourself.com/services/medicare-broker-for-people-with-lupus",
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
    "https://medicareyourself.com/services/medicare-broker-for-people-with-lupus",
};

const faqs = [
  {
    question: "Can I get Medicare if I have lupus?",
    answer:
      "Yes. If you're 65 or older, you qualify for Medicare regardless of health conditions. If you're under 65, you may qualify through Social Security Disability Insurance (SSDI) after a 24-month waiting period. Many lupus patients receive SSDI and transition to Medicare well before 65.",
  },
  {
    question: "What insurance covers lupus treatment best?",
    answer:
      "Original Medicare (Parts A and B) covers rheumatologist visits, lab work, infusions like Saphnelo or Benlysta under Part B, and hospitalizations. A Medigap plan (like Plan G) helps cover the 20% coinsurance that adds up fast with ongoing lupus care. Part D covers oral medications like hydroxychloroquine.",
  },
  {
    question: "How hard is it to get Social Security disability with lupus?",
    answer:
      "It can be difficult. The SSA evaluates lupus under its immune system disorders listing. You'll need thorough documentation from your rheumatologist showing how lupus limits your ability to work. Many applicants are initially denied and succeed on appeal. A disability attorney can help.",
  },
  {
    question: "Will a Medicare Supplement plan deny me because of lupus?",
    answer:
      "Outside your Medigap Open Enrollment Period, most carriers will ask health questions and may decline applicants with lupus. That's why timing matters. During your 6-month open enrollment window or during a guaranteed issue event, carriers cannot deny you or charge more based on your health.",
  },
,
  {
    question: "Does Medicare cover infusion treatments for lupus?",
    answer:
      "Yes. Medicare Part B typically covers physician-administered infusion therapies used for lupus, including biologics given in a clinic or infusion center. You're responsible for the Part B deductible and coinsurance unless a Medigap plan or Medicare Advantage plan helps cover those costs. Always confirm coverage and prior authorization requirements before starting a new infusion.",
  }
,
  {
    question: "Are lupus medications like hydroxychloroquine covered by Medicare Part D?",
    answer:
      "Yes. Oral lupus medications including hydroxychloroquine, methotrexate, and prednisone are typically covered under Medicare Part D prescription drug plans. Formularies and tier placement vary by plan, so it's important to compare drug plans annually against your specific medication list to keep out-of-pocket costs predictable.",
  },
  {
    question: "Should someone with lupus choose a Medicare Advantage plan or Medigap?",
    answer:
      "It depends on your providers, medications, and travel needs. Medigap plans pair with Original Medicare and let you see any rheumatologist or specialist nationwide who accepts Medicare, which is valuable for complex autoimmune care. Medicare Advantage plans often have lower premiums but use networks and prior authorization, which can complicate access to specialists and biologics.",
  },
  {
    question: "Can I switch Medicare plans if my lupus treatment changes?",
    answer:
      "Yes. During the Annual Enrollment Period from October 15 to December 7, you can change your Medicare Advantage or Part D plan to better match your treatment. Switching to a Medigap plan outside your initial open enrollment may require medical underwriting, so it helps to review your options with a broker before making changes.",
  }
,
  {
    question: "Are lupus medications covered under Part B or Part D?",
    answer:
      "It depends on how the drug is administered. Infusion biologics given in a clinic or doctor's office are usually billed under Part B, while oral medications like hydroxychloroquine fall under Part D prescription drug plans. Choosing a Part D plan that includes your specific lupus medications on its formulary is essential to managing out-of-pocket costs.",
  },
  {
    question: "Should lupus patients choose Medigap or Medicare Advantage?",
    answer:
      "It depends on your providers, medications, and budget. Medigap plans paired with Original Medicare offer broad provider access and predictable cost-sharing, which can benefit lupus patients who see specialists and need infusions. Medicare Advantage plans may have lower premiums but use networks and prior authorization, which can affect access to rheumatologists and biologics.",
  }
,
  {
    question: "Are lupus medications covered under Part B or Part D?",
    answer:
      "It depends on how the drug is administered. Infusions and injections given in a clinical setting by a provider are typically billed under Part B, while oral medications like hydroxychloroquine and prednisone are covered under a Part D prescription drug plan. Choosing a Part D plan that lists your specific lupus medications on its formulary is key to keeping out-of-pocket costs manageable.",
  },
  {
    question: "Should someone with lupus choose Medigap or Medicare Advantage?",
    answer:
      "Medigap plans generally offer broader provider access and predictable costs, which can help lupus patients who need consistent rheumatology care and frequent labs. Medicare Advantage plans may have lower monthly premiums but use networks and prior authorization, which can affect access to specialists and infusion centers. A broker can compare both options against your treatment plan.",
  },
  {
    question: "Can a broker help me switch plans if my lupus treatment changes?",
    answer:
      "Yes. During the Annual Enrollment Period each fall, you can review Part D and Medicare Advantage plans to match your current medications and providers. If you have Medigap and want to switch carriers, medical underwriting may apply outside of guaranteed issue windows. Call 855-559-1700 to review your options.",
  }
];

export default function MedicareBrokerForPeopleWithLupus() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
        <Link href="/">Home</Link> &gt;{" "}
        <Link href="/services">Medicare Guides</Link> &gt;{" "}
        <span>Medicare Broker for People With Lupus</span>
      </nav>

      <article className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Medicare Broker for People With Lupus: How to Secure the Best Coverage
        </h1>

        <Image
          src="/images/medicare-broker-for-people-with-lupus.webp"
          alt="medicare broker for people with lupus"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          A medicare broker for people with lupus can mean the difference between coverage that actually works and a plan that leaves you stuck with thousands in out-of-pocket costs every time you need bloodwork, infusions, or a flare-up lands you in the hospital. I'm Anthony Orner, a licensed Medicare broker, and I help lupus patients find plans that match their treatment needs without overpaying.
        </p>
        <p className="mb-6">
          Lupus doesn't follow a schedule. Your coverage shouldn't fall apart when it flares.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How lupus impacts your Medicare Supplement application
          </h2>
          <p className="mb-2">
            Most Medigap carriers ask about autoimmune conditions during underwriting. A lupus diagnosis, especially systemic lupus (SLE), often triggers a decline outside protected enrollment windows.
          </p>
          <p>
            If you're on immunosuppressants, biologics, or have lupus nephritis in your records, standard applications get flagged. That doesn't mean you're out of options. It means you need a broker who knows which doors are still open.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Which plan type covers lupus treatment most effectively
          </h2>
          <p className="mb-2">
            Lupus care is expensive. Rheumatology visits, monthly labs, specialty infusions like Saphnelo or Benlysta (covered under Part B), and hospitalizations during severe flares can leave you facing the 20% Medicare coinsurance on every service.
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-2">
            <li><strong>Medigap Plan G:</strong> Covers all cost-sharing after the $283/year Part B deductible. No networks, no referrals. See any rheumatologist who takes Medicare.</li>
            <li><strong>Medicare Advantage (Part C):</strong> Lower premiums but uses provider networks. Can work if your specialists are in-network, but prior authorizations on biologics can delay treatment.</li>
            <li><strong>Part D:</strong> Covers oral medications like hydroxychloroquine and mycophenolate. The 2026 Part D deductible matters if you're managing multiple prescriptions.</li>
          </ul>
          <p>
            When flares are unpredictable and you're seeing four or five specialists, freedom to choose providers without authorization delays is worth more than a lower premium.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Carriers that may approve applicants with lupus
          </h2>
          <p className="mb-2">
            Not every carrier uses the same underwriting criteria. Some have stricter health questions than others. A few will consider lupus patients who are stable and not currently on certain biologics.
          </p>
          <p>
            I work with dozens of carriers and know which ones have underwriting guidelines that give lupus patients a realistic shot at approval. Rates vary by carrier, so I compare options side by side before we apply anywhere.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Guaranteed issue paths that skip medical underwriting entirely
          </h2>
          <p className="mb-2">
            Guaranteed issue rights let you enroll in a Medigap plan with no health questions. Federal triggers include:
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-2">
            <li>Losing employer or union group coverage</li>
            <li>Your Medicare Advantage plan leaves your area or violates its contract</li>
            <li>You're in your 6-month Medigap Open Enrollment Period (starts when you're 65+ and enrolled in Part B)</li>
          </ul>
          <p>
            If you're under 65 on Medicare through SSDI, guaranteed issue rules vary by state. Some states offer protections; others don't. I'll tell you exactly what applies to your situation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why timing matters more than you think
          </h2>
          <p className="mb-2">
            The best time to lock in Medigap coverage is during your open enrollment window. Carriers can't reject you or charge higher premiums based on lupus during that period. Miss it, and underwriting becomes the gatekeeper.
          </p>
          <p>
            If you're approaching 65, apply about 6 months before your Part B start date. If you're already past that window, call me. We'll find what's still available.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What a lupus-focused Medicare review actually looks like
          </h2>
          <p className="mb-2">
            When you call, I'll ask about your current treatment plan, medications, specialists, and how often you're being seen. We'll look at:
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-2">
            <li>Whether your rheumatologist and infusion center accept Original Medicare</li>
            <li>Your total drug costs under Part D (including biologics and specialty meds)</li>
            <li>Which Medigap carriers have the best shot at approving your application</li>
            <li>Whether a guaranteed issue path is available right now</li>
          </ul>
          <p>
            No cost. No obligation. Just clarity on what your options actually are.
          </p>
        </section>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center my-10">
          <p className="text-xl font-semibold mb-2">
            Talk to a broker who understands lupus coverage.
          </p>
          <p className="text-lg mb-3">
            Call{" "}
            <a
              href="tel:8555591700"
              className="text-blue-700 font-bold underline"
            >
              855-559-1700
            </a>{" "}
            or{" "}
            <Link
              href="/quote"
              className="text-blue-700 font-bold underline"
            >
              Get a Free Quote
            </Link>
          </p>
          <p className="text-sm text-gray-600">
            Anthony Orner, Licensed Medicare Broker
          </p>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
                className="text-blue-700 underline"
              >
                Medigap Plan G: What It Covers and What It Costs
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-supplement/new-jersey"
                className="text-blue-700 underline"
              >
                Guaranteed Issue Rights for Medicare Supplement Plans
              </Link>
            </li>
            <li>
              <Link
                href="/services/you-get-a-medicare-supplement-if-you-are-on-disability"
                className="text-blue-700 underline"
              >
                Medicare Under 65: Coverage Through Disability
              </Link>
            </li>
            <li>
              <Link
                href="/learn/medicare-parts-explained"
                className="text-blue-700 underline"
              >
                Medicare Part D: How Prescription Drug Coverage Works
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
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/what-medicare-covers" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">What Medicare covers (Medicare.gov)</a> and <a href="https://www.cms.gov/medicare/coverage/coverage-general-information" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">CMS coverage information</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Free state counseling: <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">SHIP — State Health Insurance Assistance Program</a> or the <a href="https://www.nj.gov/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For free, unbiased counseling in New Jersey, contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For free, unbiased counseling in your state, contact your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-700 underline">State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For free, unbiased counseling, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> or the <a href="https://www.state.nj.us/dobi/division_insurance/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey Department of Banking and Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need free local counseling? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank">State Health Insurance Assistance Program (SHIP)</a> for unbiased Medicare help in your state.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For free local Medicare counseling, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a> or the <a href="https://www.nj.gov/dobi/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free local Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Free unbiased counseling: <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free local counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
      </article>
    </>
  );
}