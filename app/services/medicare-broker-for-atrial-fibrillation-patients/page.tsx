import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for atrial fibrillation patients | Free Carrier Comparison | MedicareYourself",
  description:
    "Medicare broker for AFib patients in NJ. Anthony Orner compares plans covering blood thinners, ablation & cardiology visits. Free review — call 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-atrial-fibrillation-patients" },
  openGraph: {
    title:
      "Medicare broker for atrial fibrillation patients | Free Carrier Comparison | MedicareYourself",
    description:
      "Medicare broker for atrial fibrillation patients in NJ. Anthony Orner finds plans covering blood thinners, monitoring, and cardiology. Free plan review.",
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
      name: "Medicare Broker for Atrial Fibrillation Patients",
      item: "https://medicareyourself.com/services/medicare-broker-for-atrial-fibrillation-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Atrial Fibrillation Patients Who Deserve Coverage Without the Financial Stress",
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
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. Licensed Medicare brokers like Anthony Orner are paid by the insurance carriers, not by you. The plan you choose costs the same whether you use a broker or go direct. You get free expert guidance with zero markup.",
  },
  {
    question: "Is atrial fibrillation covered by Medicare?",
    answer:
      "Yes. Medicare covers AFib diagnosis, treatment, and monitoring. Part B covers cardiology visits, EKGs, echocardiograms, and Holter monitors. Part A covers hospital stays and procedures like catheter ablation. Part D or Medicare Advantage covers prescription blood thinners. The key is choosing a plan that minimizes your out-of-pocket costs for the specific services you use most.",
  },
  {
    question:
      "Can I get a Medigap plan in New Jersey if I already have an AFib diagnosis?",
    answer:
      "During your Medigap Open Enrollment Period (the 6 months starting when you turn 65 and are enrolled in Part B), carriers cannot deny you or charge more because of AFib. Outside that window, medical underwriting may apply. That's why timing matters so much. Call Anthony to review your enrollment options.",
  },
  {
    question:
      "Does Medicare cover catheter ablation for atrial fibrillation?",
    answer:
      "Medicare Part A covers catheter ablation as a medically necessary inpatient or outpatient hospital procedure. You'll owe the Part A deductible ($1,676 per benefit period in 2026) plus any coinsurance. A Medigap plan can cover most or all of that gap. Some patients report ablation charges over $90,000 before insurance, which makes your supplemental coverage critical.",
  },
,
  {
    question: "What should I look for in a Medicare plan if I take blood thinners for AFib?",
    answer:
      "Check the plan's drug formulary to confirm your specific anticoagulant (such as warfarin, apixaban, rivaroxaban, or dabigatran) is covered and on a reasonable tier. Compare the deductible, copay, and coinsurance for each tier across plans. Also review pharmacy network rules and any prior authorization or step therapy requirements that could delay your prescription.",
  },
  {
    question: "Can I appeal a Medicare denial for an AFib treatment or medication?",
    answer:
      "Yes. Medicare and Medicare Advantage plans both have a formal appeals process if a treatment, procedure, or medication is denied. You can request a redetermination, and your cardiologist can submit clinical documentation supporting medical necessity. Many AFib-related denials are overturned on appeal when proper records are submitted.",
  },
  {
    question: "Should an AFib patient choose Medicare Advantage or Medigap?",
    answer:
      "It depends on your providers, budget, and how often you use care. Medigap paired with Original Medicare and a Part D plan offers broad provider access and predictable out-of-pocket costs, which many AFib patients prefer for ongoing cardiology care. Medicare Advantage may have lower premiums but uses networks and prior authorization. Anthony can compare both side by side based on your cardiologist and medications.",
  }
,
  {
    question: "Will my cardiologist accept my Medicare plan?",
    answer:
      "It depends on the plan type. Original Medicare with a Medigap plan is accepted by any provider that accepts Medicare assignment, which gives you the broadest access to cardiologists and electrophysiologists. Medicare Advantage plans use networks, so you'll need to confirm your cardiologist is in-network before enrolling. Anthony can verify your providers before you choose a plan.",
  }
,
  {
    question: "Will switching Medicare plans affect my current cardiologist relationship?",
    answer:
      "It depends on the plan type. Original Medicare with a Medigap plan lets you see any cardiologist who accepts Medicare nationwide. Medicare Advantage plans use provider networks, so you'd need to confirm your cardiologist is in-network before enrolling. Anthony reviews provider directories with you before you make any change.",
  }
,
  {
    question: "Should I choose Medicare Advantage or Medigap if I have atrial fibrillation?",
    answer:
      "It depends on your providers, medications, and budget. Medigap plans typically offer broader access to specialists and predictable out-of-pocket costs, which many AFib patients prefer for ongoing cardiology care and procedures. Medicare Advantage plans may have lower premiums but use networks and prior authorization. Anthony can compare both side by side based on your doctors and prescriptions.",
  }
];

export default function MedicareBrokerForAtrialFibrillationPatients() {
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
          Medicare Broker for Atrial Fibrillation Patients
        </span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Medicare Broker for Atrial Fibrillation Patients Who Deserve Coverage Without the Financial Stress
        </h1>

        <Image
          src="/images/medicare-broker-for-atrial-fibrillation-patients.webp"
          alt="Medicare broker for atrial fibrillation patients"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          A Medicare broker for atrial fibrillation patients does one thing most people can't do alone: match your specific cardiac care needs to the plan that actually covers them well. I'm Anthony Orner, a licensed Medicare broker in New Jersey, and I work with AFib patients every enrollment season.
        </p>
        <p className="text-lg mb-6">
          That flutter at 2 AM is stressful enough. You shouldn't also be wondering whether your plan will cover the cardiologist visit, the blood thinner refill, or the ablation your EP is recommending.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Blood thinners, ablations, and what your plan needs to cover
          </h2>
          <p className="mb-2">
            AFib treatment isn't one prescription and done. It's ongoing monitoring, rate or rhythm control medications, and possibly procedures. Here's what your Medicare plan should handle:
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-2">
            <li>Anticoagulants like Eliquis or Xarelto (Part D or MA drug formulary)</li>
            <li>Beta blockers, calcium channel blockers, or antiarrhythmics</li>
            <li>EKGs, echocardiograms, Holter monitors, and event monitors (Part B)</li>
            <li>Catheter ablation or electrical cardioversion (Part A)</li>
            <li>Electrophysiologist and cardiologist office visits (Part B)</li>
          </ul>
          <p>
            Some blood thinners run over $130/month without the right plan. I compare Part D formularies and MA drug tiers to find you the lowest real cost.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How AFib diagnosis affects Medigap enrollment in New Jersey
          </h2>
          <p className="mb-2">
            Your Medigap Open Enrollment Period lasts 6 months, starting the month you turn 65 and have Part B. During that window, no carrier in NJ can deny you or charge higher premiums because of your AFib diagnosis.
          </p>
          <p>
            Miss that window and medical underwriting kicks in. Carriers can ask about your heart history and may decline your application. If you're approaching 65 with an AFib diagnosis, call me at least 6 months before your Part B start date. Timing is everything here.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Medicare Advantage vs. Medigap when you're managing heart rhythm issues
          </h2>
          <p className="mb-2">
            Medicare Advantage plans often have $0 premiums and extra benefits. But they use provider networks. If your electrophysiologist or cardiac center isn't in-network, you'll pay significantly more or need a referral.
          </p>
          <p className="mb-2">
            Medigap (like Plan G) pairs with Original Medicare and lets you see any provider who accepts Medicare. No referrals. No network restrictions. You pay the Part B deductible ($283 in 2026), and Plan G covers the rest.
          </p>
          <p>
            For AFib patients who see multiple specialists and may need procedures, that flexibility often matters more than the premium difference. I'll run the numbers both ways for your situation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What happens when Medicare denies an AFib procedure
          </h2>
          <p className="mb-2">
            Some patients hit a wall trying to get ablation approved. Medicare covers catheter ablation when it's medically necessary, but denials happen. You have the right to appeal.
          </p>
          <p>
            I help clients understand what their plan actually requires for prior authorization and point them to the right resources if a denial comes through. You shouldn't have to figure out the appeals process alone while managing active symptoms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            The real cost of AFib without the right plan
          </h2>
          <p className="mb-2">
            An ablation can generate charges over $90,000. Even with Original Medicare paying 80%, you'd owe roughly $18,000 out of pocket without supplemental coverage. The Part A inpatient deductible alone is $1,676 per benefit period in 2026.
          </p>
          <p>
            Add monthly blood thinner costs, quarterly cardiology visits, and monitoring devices. The wrong plan bleeds money every month. The right plan keeps your costs predictable.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Stop worrying about bills on top of every heart flutter
          </h2>
          <p className="mb-2">
            You're already tracking your heart rate, watching your triggers, managing medications. You don't need a second full-time job decoding insurance formularies and provider directories.
          </p>
          <p>
            I compare plans across every major carrier in New Jersey, check that your cardiologist and medications are covered, and walk you through the real costs. No charge to you, ever. Carriers pay my commission, and your plan costs the same whether you use me or go direct.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center my-10">
          <p className="text-xl font-semibold mb-2">
            Ready to find a plan that covers your AFib care?
          </p>
          <p className="mb-4">
            Call Anthony Orner for a free, no-pressure plan comparison.
          </p>
          <a
            href="tel:8555591700"
            className="text-2xl font-bold underline block mb-3"
          >
            855-559-1700
          </a>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100"
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
                href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
                className="text-blue-600 hover:underline"
              >
                Medigap Plan G in New Jersey: What It Covers and What It Costs
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-supplement/new-jersey/vs-medicare-advantage"
                className="text-blue-600 hover:underline"
              >
                Medicare Advantage vs. Medigap: How to Decide
              </Link>
            </li>
            <li>
              <Link
                href="/learn/medicare-parts-explained"
                className="text-blue-600 hover:underline"
              >
                Medicare Part D: How Prescription Drug Coverage Works
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-heart-disease-patients"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker for Heart Disease Patients in NJ
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
                href="/services/medicare-broker-for-alzheimers-patients"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For Alzheimers Patients
              </Link>
            </li>
</ul>
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/coverage/cardiovascular-disease-screenings" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">Medicare.gov — Cardiovascular Disease Screenings</a> and <a href="https://www.medicare.gov/coverage/prescription-drugs-outpatient" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">Medicare.gov — Prescription Drug Coverage</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey help: <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a></div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/dobi/division_insurance/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
      </section>
      </article>
    </>
  );
}