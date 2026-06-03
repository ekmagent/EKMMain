import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for COPD patients | Free Plan Review | MedicareYourself",
  description:
    "Medicare broker for COPD patients — compare plans covering inhalers, oxygen, and pulmonary rehab. Free review with Anthony Orner. Call 855-559-1700 today.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-copd-patients" },
  openGraph: {
    title:
      "Medicare broker for COPD patients | Free Plan Review | MedicareYourself",
    description:
      "Medicare broker for COPD patients needing real coverage for inhalers, oxygen, pulmonary rehab. Anthony Orner finds plans that fit. Free review.",
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
      name: "Medicare Broker for COPD Patients",
      item: "https://medicareyourself.com/services/medicare-broker-for-copd-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for COPD Patients — Coverage That Sees Past the Diagnosis",
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
    "https://medicareyourself.com/services/medicare-broker-for-copd-patients",
};

const faqs = [
  {
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. Medicare brokers are paid by insurance carriers, not by you. My plan reviews, recommendations, and ongoing support are completely free to you as a beneficiary.",
  },
  {
    question: "Does Medicare pay for COPD treatment?",
    answer:
      "Yes. Medicare Part B covers pulmonary rehabilitation, oxygen therapy, and nebulizers when medically necessary. Part D covers most inhaler medications, though formularies and copays vary by plan. The 2025 Part D redesign caps annual out-of-pocket drug costs at $2,000, which can significantly reduce inhaler expenses.",
  },
  {
    question: "Will my smoking history affect which Medicare plans I can get?",
    answer:
      "Medicare Advantage and Part D plans cannot deny you coverage or charge more based on smoking history. Medigap plans may use tobacco status in pricing outside your initial open enrollment period. During your 6-month Medigap Open Enrollment window, carriers cannot charge you more or deny you for any health reason, including COPD or smoking history.",
  },
  {
    question:
      "What's the difference between Supplement and Advantage plans for COPD?",
    answer:
      "Medigap (Supplement) plans let you see any provider that accepts Medicare with no referrals or network restrictions. Medicare Advantage plans may offer added benefits like transportation to appointments but require you to use network providers and may need prior authorizations for treatments. For COPD patients who see multiple specialists or need frequent care, the right choice depends on your specific treatment plan.",
  },
  {
    question: "Does Medicare cover oxygen equipment for COPD at home?",
    answer:
      "Yes. Medicare Part B covers home oxygen equipment rental and related supplies when your doctor certifies it is medically necessary to treat a lung condition like COPD. You typically pay the Part B coinsurance after meeting the Part B deductible, and the supplier must be Medicare-approved.",
  }
,
  {
    question: "Who is eligible for Medicare-covered pulmonary rehabilitation?",
    answer:
      "Medicare Part B covers a comprehensive pulmonary rehabilitation program if you have moderate to very severe COPD and a referral from the doctor treating your condition. The program includes exercise, education, and breathing techniques designed to help you breathe better and stay independent. Coverage requires that the program be considered medically necessary and delivered by an approved provider.",
  }
,
  {
    question: "Are pulmonary rehabilitation programs covered by Medicare for COPD?",
    answer:
      "Yes. Medicare Part B covers comprehensive pulmonary rehabilitation programs for beneficiaries with moderate to very severe COPD when referred by the treating provider. Coverage includes exercise training, education, and psychosocial support. After meeting the Part B deductible, you typically pay coinsurance for each session.",
  },
  {
    question: "Can a Medicare broker help me switch plans if my COPD medications change?",
    answer:
      "Yes. If your inhaler or nebulizer medications change, your current Part D or Medicare Advantage formulary may no longer be the best fit. During the Annual Enrollment Period each fall, I can review your drug list against available plans and recommend changes. Special Enrollment Periods may also apply in certain situations.",
  }
,
  {
    question: "Does Medicare cover pulmonary rehabilitation for COPD?",
    answer:
      "Yes. Medicare Part B covers pulmonary rehabilitation programs for beneficiaries with moderate to very severe COPD when referred by the doctor treating the condition. Coverage typically includes exercise training, education, and counseling sessions. After meeting the Part B deductible, you pay a coinsurance for each session in a hospital outpatient setting.",
  },
  {
    question: "Can I switch Medicare plans if my COPD treatment changes?",
    answer:
      "Yes. You can change Medicare Advantage or Part D plans during the Annual Enrollment Period each fall, and the Medicare Advantage Open Enrollment Period runs from January through March. You may also qualify for a Special Enrollment Period if you move, lose other coverage, or qualify for Extra Help. Call 855-559-1700 to review whether your current plan still fits your treatment plan.",
  }
,
  {
    question: "Does Medicare cover pulmonary rehabilitation for COPD?",
    answer:
      "Yes. Medicare Part B covers pulmonary rehabilitation programs for beneficiaries with moderate to very severe COPD when referred by the doctor treating the condition. Coverage includes exercise training, education, and psychosocial support delivered by a qualified program. After meeting the Part B deductible, you typically pay coinsurance for each session.",
  },
  {
    question: "Are COPD inhalers covered under Medicare Part B or Part D?",
    answer:
      "Most maintenance and rescue inhalers fall under Part D prescription drug coverage, while nebulizer medications used with durable medical equipment are generally covered under Part B. Formularies, tiers, and copays differ by plan, so the same inhaler can cost very different amounts depending on which Part D or Medicare Advantage plan you choose. A broker review can flag plans that place your specific inhalers on lower tiers.",
  },
  {
    question: "Can I switch Medicare plans if my COPD treatment changes?",
    answer:
      "You can change Medicare Advantage and Part D plans during the Annual Enrollment Period each fall, and during the Medicare Advantage Open Enrollment Period in early spring. Certain life events, such as moving or losing other coverage, can trigger a Special Enrollment Period. If your pulmonologist changes your inhaler regimen, it is worth reviewing whether your current plan still offers the best coverage.",
  }
,
  {
    question: "Does Medicare cover pulmonary rehabilitation for COPD?",
    answer:
      "Yes. Medicare Part B covers comprehensive pulmonary rehabilitation programs for beneficiaries with moderate to very severe COPD when referred by the treating physician. Coverage includes exercise training, education, and psychosocial support. Each plan handles cost-sharing differently, so I review the specifics before you enroll.",
  },
  {
    question: "Can I switch Medicare plans if my COPD treatment changes?",
    answer:
      "Yes. You can review and switch Medicare Advantage or Part D plans during the Annual Enrollment Period each fall, or during the Medicare Advantage Open Enrollment Period in early spring. If you qualify for Extra Help or a Special Enrollment Period, you may be able to change plans outside those windows. I track these windows for every client I work with.",
  },
  {
    question: "Are COPD inhalers covered under Part B or Part D?",
    answer:
      "Most maintenance and rescue inhalers are covered under Medicare Part D prescription drug plans. Nebulizer medications administered through durable medical equipment may fall under Part B instead. Formularies vary widely between plans, so matching your specific inhalers to the right drug plan is one of the most important parts of my review.",
  }
,
  {
    question: "Am I eligible for Medicare-covered pulmonary rehabilitation with COPD?",
    answer:
      "Medicare Part B covers a comprehensive pulmonary rehabilitation program if you have moderate to very severe COPD and a referral from the doctor treating your condition. The program includes exercise, education, and breathing techniques designed to help you breathe better and live more independently. Coverage requires the program be furnished in a doctor's office or hospital outpatient setting.",
  },
  {
    question: "Can a Medicare broker help me switch plans if my inhaler is no longer covered?",
    answer:
      "Yes. If your Part D or Medicare Advantage plan drops your inhaler from its formulary or raises the tier, I can review alternative plans during the Annual Enrollment Period each fall. In some cases a Special Enrollment Period may also apply. Call 855-559-1700 for a free formulary check.",
  },
  {
    question: "Does Medicare cover nebulizers and nebulizer medications for COPD?",
    answer:
      "Yes. Medicare Part B covers nebulizers as durable medical equipment when prescribed by your doctor for use in the home, along with certain nebulizer medications used with the device. You'll typically be responsible for the Part B coinsurance after meeting your deductible, and the supplier must be enrolled in Medicare.",
  }
,
  {
    question: "Does Medicare cover pulmonary rehabilitation for COPD patients?",
    answer:
      "Yes. Medicare Part B covers comprehensive pulmonary rehabilitation programs for beneficiaries with moderate to very severe COPD when referred by the doctor treating the chronic respiratory disease. These programs include exercise, education, and psychosocial support to help improve breathing and quality of life. Coverage requires physician certification of medical necessity.",
  },
  {
    question: "Are COPD inhalers covered under Medicare Part B or Part D?",
    answer:
      "Most maintenance and rescue inhalers are covered under Medicare Part D prescription drug plans, not Part B. Nebulizer medications used with durable medical equipment at home are typically covered under Part B. Because formularies and tier placement vary widely, comparing Part D plans against your specific inhaler list is essential before enrolling.",
  },
  {
    question: "Can I switch Medicare plans if my COPD medications change?",
    answer:
      "You can change Medicare Advantage or Part D plans during the Annual Enrollment Period each fall, and certain qualifying events may trigger a Special Enrollment Period. If your pulmonologist prescribes a new inhaler or biologic, a free plan review can identify whether a different Part D formulary would lower your costs. Call 855-559-1700 to review your options.",
  }
,
  {
    question: "Does Medicare cover pulmonary rehabilitation for COPD?",
    answer:
      "Yes. Medicare Part B covers pulmonary rehabilitation programs for beneficiaries with moderate to very severe COPD when referred by the doctor treating the condition. Coverage includes exercise training, education, and psychosocial assessment delivered by qualified providers.",
  },
  {
    question: "Are COPD inhalers covered under Medicare Part D?",
    answer:
      "Most COPD inhalers are covered under Medicare Part D, but formularies, tiers, and prior authorization rules vary by plan. A broker can compare your specific inhaler list across plans to find the lowest total annual cost. This matters because switching plans during Annual Enrollment can dramatically change what you pay at the pharmacy.",
  },
  {
    question: "Can I change Medicare plans if my COPD treatment changes?",
    answer:
      "Yes. You can switch Medicare Advantage or Part D plans during the Annual Enrollment Period each fall, and the Medicare Advantage Open Enrollment Period in the first quarter of the year. Certain Special Enrollment Periods may also apply if you lose coverage, move, or qualify for Extra Help.",
  }
,
  {
    question: "Does Medicare cover pulmonary rehabilitation for COPD?",
    answer:
      "Yes. Medicare Part B covers comprehensive pulmonary rehabilitation programs for beneficiaries with moderate to very severe COPD when referred by the doctor treating the chronic respiratory condition. Programs typically include exercise training, education, nutrition counseling, and psychosocial support. You will generally pay a coinsurance after meeting the Part B deductible.",
  },
  {
    question: "Can a Medicare broker help me switch plans if my COPD medications change?",
    answer:
      "Yes. If your prescribed inhalers, nebulizer medications, or other COPD treatments change, I can review your current plan's formulary against newer options during the Annual Enrollment Period or a qualifying Special Enrollment Period. Switching to a plan that covers your specific medications at a lower tier can meaningfully reduce your out-of-pocket costs. Call 855-559-1700 for a free review.",
  },
  {
    question: "Are COPD-related doctor visits and specialists covered by Medicare?",
    answer:
      "Yes. Medicare Part B covers visits to pulmonologists, primary care doctors, and other specialists who treat COPD, including diagnostic tests like spirometry and chest imaging when medically necessary. Under Original Medicare you typically pay a coinsurance after meeting the Part B deductible. Medicare Advantage plans cover the same services but may require network providers and prior authorization.",
  }
,
  {
    question: "Does Medicare cover pulmonary rehabilitation for COPD?",
    answer:
      "Yes. Medicare Part B covers comprehensive pulmonary rehabilitation programs for beneficiaries with moderate to very severe COPD when referred by the treating physician. Coverage typically includes exercise training, education, and psychosocial support delivered in an outpatient setting. A broker can help you confirm how your specific plan handles the coinsurance for these sessions.",
  },
  {
    question: "Can I switch Medicare plans if my COPD inhaler is dropped from the formulary?",
    answer:
      "Formularies can change each plan year, and a dropped drug alone does not create a special enrollment period mid-year. However, during the Annual Enrollment Period each fall, you can switch Part D or Medicare Advantage plans to one that covers your inhalers. I review formularies against your current prescription list every year to catch these changes early.",
  },
  {
    question: "What should COPD patients look for when choosing a Medicare plan?",
    answer:
      "Focus on inhaler coverage tier and copay structure, access to your pulmonologist, oxygen supplier network, and prior authorization requirements for nebulizers or rehab. Plan design matters more than premium for chronic conditions like COPD. I compare these details side by side so you can see total expected cost, not just the sticker price.",
  }
];

export default function MedicareBrokerForCOPDPatients() {
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
        <span className="text-gray-700">Medicare Broker for COPD Patients</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
        Medicare Broker for COPD Patients — Coverage That Sees Past the Diagnosis
      </h1>

      <Image
        src="/images/medicare-broker-for-copd-patients.webp"
        alt="Medicare broker for COPD patients"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        A Medicare broker for COPD patients does what most insurance websites
        won't: start with your breathing, not your history. You're dealing with
        exhaustion that turns cooking dinner into a project. Inhalers that cost
        more than you expected. Equipment needs that change as your condition
        shifts.
      </p>
      <p className="text-lg mb-6">
        I'm Anthony Orner, a licensed Medicare broker. I help people with COPD
        find plans that actually cover what they use every day.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why your smoking history doesn't define your coverage options
        </h2>
        <p className="mb-2">
          You're tired of that being the first question. Here's what matters:
          Medicare Advantage and Part D plans cannot deny coverage or raise
          premiums because you smoked.
        </p>
        <p>
          During your 6-month Medigap Open Enrollment Period, no carrier can
          turn you down or charge more for COPD, emphysema, or tobacco use.
          That window starts the month you're 65 and enrolled in Part B. Miss
          it, and some carriers will factor in health status. Timing matters
          more than history.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Plans that cover inhalers, pulmonary rehab, and oxygen without surprises
        </h2>
        <p className="mb-2">
          COPD treatment touches multiple parts of Medicare. Here's how it
          breaks down:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-3">
          <li>
            <strong>Part B</strong> covers pulmonary rehabilitation (if you have
            moderate to very severe COPD), home oxygen equipment, and
            nebulizers. You pay 20% of the Medicare-approved amount after the
            $283/year deductible.
          </li>
          <li>
            <strong>Part D</strong> covers inhaler medications like Trelegy,
            Spiriva, and albuterol. Formulary placement and copays vary by
            plan, which is exactly where I dig in for you.
          </li>
          <li>
            <strong>2025 Part D cap:</strong> Annual out-of-pocket drug costs
            are now capped at $2,000. If you're on multiple inhalers, that
            single change can save you hundreds.
          </li>
        </ul>
        <p>
          I check your exact medications against every available formulary. Not
          just whether they're covered, but what tier and what you'll actually
          pay at your pharmacy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How Supplement vs. Advantage plans handle COPD differently
        </h2>
        <p className="mb-2">
          This is the decision that shapes your day-to-day care:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-3">
          <li>
            <strong>Medigap (Supplement):</strong> See any doctor who accepts
            Medicare. No referrals. No network restrictions. No prior
            authorizations for covered services. You pair it with a standalone
            Part D plan for prescriptions.
          </li>
          <li>
            <strong>Medicare Advantage:</strong> Often includes Part D built in,
            plus extras like transportation to appointments. But you'll need to
            stay in-network and may face prior authorizations for certain
            treatments or equipment.
          </li>
        </ul>
        <p>
          If you see a pulmonologist, a primary care doctor, and need regular
          oxygen resupply, network restrictions can create real friction.
          I'll lay out both paths honestly so you pick what fits your life.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Oxygen equipment, BiPAP, and what Medicare actually requires
        </h2>
        <p className="mb-2">
          Medicare Part B covers home oxygen equipment, but you have to meet
          specific medical criteria including documented blood oxygen levels.
          Your doctor handles the qualifying tests.
        </p>
        <p>
          If your needs change, like moving from a concentrator to higher-flow
          equipment or adding a BiPAP for sleep, new documentation is required.
          I help you understand what's covered before you're stuck with a bill.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          The real cost concern: inhalers that keep changing tiers
        </h2>
        <p className="mb-2">
          Formularies shift every year. The inhaler that cost you $35 last year
          might jump to $80 this year because the carrier moved it to a higher
          tier. Your doctor's office usually doesn't check which tier they're
          prescribing from.
        </p>
        <p>
          That's my job. I compare your current prescriptions across every
          available Part D plan, flag tier changes before they hit your wallet,
          and find the plan with the lowest actual cost for what you take.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Get a free plan review built around your breathing, not your past
        </h2>
        <p className="mb-2">
          You don't need another website that lists what Medicare covers in
          theory. You need someone who'll look at your medications, your
          doctors, your equipment, and tell you which plan keeps your costs
          lowest while covering everything you rely on.
        </p>
        <p>
          Call me. No cost, no obligation, no judgment. Just a real
          conversation about what works for you right now.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center my-10">
        <p className="text-xl font-semibold mb-2">
          Talk to a broker who understands COPD coverage.
        </p>
        <p className="text-2xl font-bold mb-3">
          <a href="tel:855-559-1700" className="underline">
            855-559-1700
          </a>
        </p>
        <Link
          href="/quote"
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
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medigap vs. Medicare Advantage: Which Is Right for You?
            </Link>
          </li>
          <li>
            <Link
              href="/learn/medicare-parts-explained"
              className="text-blue-600 hover:underline"
            >
              Medicare Part D Explained: What It Covers and What It Costs
            </Link>
          </li>
          <li>
            <Link
              href="/services/best-medicare-plan-for-chronic-conditions"
              className="text-blue-600 hover:underline"
            >
              Medicare Broker for Chronic Conditions
            </Link>
          </li>
          <li>
            <Link
              href="/learn/medicare-enrollment-periods"
              className="text-blue-600 hover:underline"
            >
              Medicare Open Enrollment: Key Dates and What to Do
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
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/coverage/pulmonary-rehabilitation-programs" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Pulmonary Rehabilitation Coverage</a> &middot; <a href="https://www.medicare.gov/coverage/oxygen-equipment-accessories" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Oxygen Equipment & Accessories</a></div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For free, unbiased counseling in your state, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Free state counseling: <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP — State Health Insurance Assistance Program</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-level help? Contact <a href="https://www.state.nj.us/dobi/division_insurance/ship/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need local help? Contact <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">New Jersey SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey beneficiaries: <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> offers free Medicare counseling.</div>
      </section>
    </main>
  );
}