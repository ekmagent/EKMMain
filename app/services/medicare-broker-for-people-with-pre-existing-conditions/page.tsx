import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare broker for people with pre-existing conditions | Free Guidance | MedicareYourself",
  description:
    "Have a pre-existing condition? A licensed Medicare broker explains Medigap underwriting, guaranteed issue rights, and Advantage options. Call 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-people-with-pre-existing-conditions" },
  openGraph: {
    title:
      "medicare broker for people with pre-existing conditions | Free Guidance | MedicareYourself",
    description:
      "Medicare broker for people with pre-existing conditions — learn which plans skip health questions and which carriers are lenient. Free help from Anthony Orner.",
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
      name: "Medicare Broker for People with Pre-Existing Conditions",
      item: "https://medicareyourself.com/services/medicare-broker-for-people-with-pre-existing-conditions",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for People with Pre-Existing Conditions: Your Coverage Options Explained",
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
    question:
      "Can you get a Medicare Supplement plan if you have a pre-existing condition?",
    answer:
      "Yes, but timing matters. During your 6-month Medigap Open Enrollment Period (starting the month you turn 65 and are enrolled in Part B), carriers cannot deny you or charge more due to health history. Outside that window, most carriers can use medical underwriting and may decline your application. Certain guaranteed issue rights also bypass health questions entirely.",
  },
  {
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. Medicare brokers are paid by the insurance carriers, not by you. There's no fee for consultations, plan comparisons, or enrollment help. The plan costs the same whether you enroll directly or through a broker.",
  },
  {
    question:
      "Does Original Medicare cover pre-existing conditions?",
    answer:
      "Yes. Original Medicare (Part A and Part B) has covered pre-existing conditions since 1965. There are no waiting periods and no surcharges based on your health history. The challenge arises with Medigap supplement plans, which may use medical underwriting outside of protected enrollment windows.",
  },
  {
    question:
      "What if I missed my Medigap Open Enrollment Period and have a pre-existing condition?",
    answer:
      "You still have options. Some carriers are more lenient with underwriting than others, and certain life events trigger federal guaranteed issue rights that bypass health questions. A broker who knows which carriers accept specific conditions can save you from wasting time on applications that won't get approved.",
  },

  {
    question: "Are Medicare Advantage plans available if I have pre-existing conditions?",
    answer:
      "Yes. Medicare Advantage plans cannot deny enrollment based on pre-existing conditions, with the historical exception of End-Stage Renal Disease (ESRD), which changed in 2021 — ESRD patients can now enroll in Medicare Advantage plans. You can join during your Initial Enrollment Period, Annual Enrollment (Oct 15–Dec 7), or certain Special Enrollment Periods.",
  },
  {
    question: "Do Medicare Part D drug plans use medical underwriting?",
    answer:
      "No. Medicare Part D prescription drug plans are guaranteed issue during valid enrollment periods and do not ask health questions. Your current medications and conditions will not affect your ability to enroll, though they should factor into which plan's formulary you choose.",
  },
  {
    question: "Can switching Medigap plans trigger underwriting if I have health issues?",
    answer:
      "In most states, yes. If you already have a Medigap plan and want to switch to a different one outside a protected enrollment window, the new carrier can typically require medical underwriting. A few states have birthday rules or annual switch windows that allow changes without health questions, so the rules depend on where you live.",
  }
,
  {
    question: "Do Medicare Advantage plans use medical underwriting for pre-existing conditions?",
    answer:
      "No. Medicare Advantage plans cannot deny enrollment, charge more, or impose waiting periods based on pre-existing conditions. The only exception historically was End-Stage Renal Disease, but that restriction was removed starting in 2021, so people with ESRD can now enroll in Medicare Advantage plans during applicable enrollment periods.",
  },
  {
    question: "Which pre-existing conditions make Medigap underwriting harder?",
    answer:
      "Conditions carriers scrutinize most closely include recent cancer treatment, congestive heart failure, COPD, diabetes with complications, kidney disease, and recent strokes or heart attacks. Each carrier has its own underwriting guidelines, so a condition that disqualifies you with one insurer may be acceptable to another. That's why working with a broker who knows carrier-specific rules matters.",
  },
  {
    question: "What is a guaranteed issue right and how does it help?",
    answer:
      "Guaranteed issue rights are federal protections that require Medigap carriers to sell you a policy without medical underwriting, regardless of your health history. They are triggered by specific situations, such as losing employer coverage or a Medicare Advantage plan leaving your area. When a guaranteed issue right applies, pre-existing conditions cannot be used to deny or surcharge your policy.",
  }
,
  {
    question: "Which Medicare plans never use medical underwriting?",
    answer:
      "Original Medicare (Part A and Part B) and Medicare Advantage plans do not use medical underwriting, so pre-existing conditions cannot block enrollment or raise your price. Stand-alone Part D prescription drug plans also accept you regardless of health history. Medigap (Medicare Supplement) plans are the main exception, since carriers can ask health questions outside of protected enrollment windows.",
  },
  {
    question: "Do guaranteed issue rights apply to pre-existing conditions?",
    answer:
      "Yes. When a federal guaranteed issue right is triggered — such as losing employer coverage, a Medicare Advantage plan leaving your area, or moving out of a plan's service area — Medigap carriers must sell you certain plans without asking about your health. These protections override medical underwriting, so a pre-existing condition cannot be used to deny you or raise your premium during the qualifying window.",
  },
  {
    question: "How does a broker help if I've already been declined for a Medigap plan?",
    answer:
      "An experienced broker tracks which carriers accept which conditions and which ones are stricter, so you avoid repeat declines that can complicate future applications. They can also identify whether you qualify for a guaranteed issue right, a Medicare Advantage plan with strong benefits for your condition, or a state-specific protection. There is no cost to you for this guidance.",
  }
,
  {
    question: "Can a Medicare Advantage plan charge me more because of a pre-existing condition?",
    answer:
      "No. Medicare Advantage plans cannot deny enrollment or charge a higher premium based on your health history, with the narrow exception of End-Stage Renal Disease rules that have largely been removed. Plans must accept you during your Initial Enrollment Period, the Annual Election Period, or any qualifying Special Enrollment Period.",
  },
  {
    question: "What counts as a pre-existing condition for Medigap underwriting?",
    answer:
      "Insurers generally define a pre-existing condition as any health issue diagnosed or treated before your Medigap policy begins. Common examples include diabetes, heart disease, COPD, and cancer history. Each carrier sets its own underwriting guidelines, which is why working with a broker who knows carrier-specific rules can be valuable.",
  },
  {
    question: "Does a Medigap plan have a waiting period for pre-existing conditions?",
    answer:
      "It can. If you enroll during your Medigap Open Enrollment Period without prior creditable coverage, a carrier may impose a look-back period before covering treatment for a pre-existing condition. Continuous creditable coverage before enrolling can reduce or eliminate that waiting period.",
  }
,
  {
    question: "What counts as a pre-existing condition for Medicare purposes?",
    answer:
      "A pre-existing condition is any health problem you had before applying for or enrolling in a new insurance plan. This can include chronic conditions like diabetes, heart disease, or cancer history, as well as prior injuries or surgeries. Original Medicare has covered pre-existing conditions since the program began in 1965.",
  },
  {
    question: "Can a Medigap carrier impose a waiting period for pre-existing conditions?",
    answer:
      "In some cases, yes. Even when you have guaranteed issue rights or apply during your Medigap Open Enrollment Period, a carrier may impose a pre-existing condition waiting period of up to six months if you did not have prior creditable coverage. Creditable coverage from a previous health plan can reduce or eliminate that waiting period.",
  },
  {
    question: "Why does working with a broker matter when you have a pre-existing condition?",
    answer:
      "Underwriting guidelines vary widely between carriers, and a condition that triggers a denial at one company may be accepted at another. A licensed broker who represents multiple carriers can match your specific health history to the carriers most likely to approve you, saving time and avoiding application denials that can sit on your record.",
  }
,
  {
    question: "What counts as a pre-existing condition for Medicare purposes?",
    answer:
      "A pre-existing condition is any health problem you had before applying for or enrolling in a new insurance plan. This can include chronic conditions like diabetes, heart disease, or COPD, as well as past injuries or illnesses. Original Medicare does not factor these in, but Medigap carriers may consider them during medical underwriting.",
  },
  {
    question: "Can a Medicare Advantage plan charge me more because of my health?",
    answer:
      "No. Medicare Advantage plans cannot deny enrollment or charge higher premiums based on pre-existing conditions, except in the case of End-Stage Renal Disease in limited situations. Plan premiums are the same regardless of your health history during valid enrollment periods.",
  },
  {
    question: "How does a broker help if I have multiple health conditions?",
    answer:
      "A broker familiar with carrier underwriting guidelines knows which insurers are more lenient with specific conditions and which will likely decline. This saves you from submitting applications that get denied and helps target carriers most likely to approve your coverage. The guidance is free since brokers are paid by the carriers.",
  }
,
  {
    question: "Which pre-existing conditions make Medigap underwriting harder?",
    answer:
      "Carriers vary, but conditions like recent cancer treatment, congestive heart failure, COPD, kidney disease, and insulin-dependent diabetes often trigger declines or higher-rate offers outside of open enrollment. Some carriers are more lenient with controlled conditions than others. A broker who works with multiple carriers can match your specific health profile to the company most likely to approve you.",
  },
  {
    question: "Can a Medicare Advantage plan drop me if my health declines?",
    answer:
      "No. Medicare Advantage plans cannot drop you or raise your premium because your health changes after enrollment. Plans can change their benefits or leave a service area at year-end, but that applies to all enrollees equally — not based on individual health. You also keep guaranteed access to Original Medicare at any time.",
  },
  {
    question: "Do I need to disclose my pre-existing conditions to a Medicare broker?",
    answer:
      "It helps. Sharing your health history lets the broker steer you toward carriers and plan types most likely to approve you and cover your needs. Brokers are required to keep your information confidential, and the conversation itself does not trigger any application or underwriting review.",
  }
,
  {
    question: "Which pre-existing conditions are hardest to get approved for outside Medigap Open Enrollment?",
    answer:
      "Conditions that commonly trigger underwriting denials include recent cancer treatment, congestive heart failure, COPD requiring oxygen, kidney disease requiring dialysis, and recent stroke. Each carrier maintains its own underwriting guidelines, so a condition declined by one company may be accepted by another. A broker who works with multiple carriers can match your specific health history to a company likely to approve you.",
  },
  {
    question: "Can a Medigap plan impose a waiting period for my pre-existing condition?",
    answer:
      "Yes. Even when you enroll during your Medigap Open Enrollment Period, a carrier can impose a pre-existing condition waiting period of up to 6 months if you did not have prior creditable coverage. If you had at least 6 months of continuous creditable coverage before enrolling, the waiting period is waived. Original Medicare still covers the condition during any Medigap waiting period.",
  },
  {
    question: "Does end-stage renal disease (ESRD) affect my Medicare plan options?",
    answer:
      "As of 2021, people with ESRD can enroll in Medicare Advantage plans, which was previously restricted. ESRD does not affect eligibility for Original Medicare or Part D. Medigap availability for ESRD beneficiaries varies by state, and a broker can confirm which supplement options are available where you live.",
  }
,
  {
    question: "Which pre-existing conditions are hardest to get approved with for Medigap underwriting?",
    answer:
      "Carriers vary, but conditions commonly flagged during underwriting include recent cancer treatment, COPD requiring oxygen, congestive heart failure, kidney disease requiring dialysis, and recent strokes or heart attacks. Each carrier publishes its own knockout questions and look-back periods. A broker who works with multiple carriers can match your specific health history to the carrier most likely to approve you. Call 855-559-1700 to review your options before applying.",
  },
  {
    question: "Does a Medicare Advantage plan have a waiting period for pre-existing conditions?",
    answer:
      "No. Medicare Advantage plans cannot impose waiting periods or deny enrollment based on pre-existing conditions, with the historical exception of End-Stage Renal Disease, which was removed as a barrier starting in 2021. As long as you're enrolled in Part A and Part B and live in the plan's service area, you can join during a valid election period regardless of health history.",
  }
,
  {
    question: "Which pre-existing conditions are hardest to get approved with for a Medigap plan?",
    answer:
      "Conditions that often trigger declines during medical underwriting include recent cancer treatment, congestive heart failure, COPD requiring oxygen, dialysis, recent stroke, and insulin-dependent diabetes with complications. Each carrier sets its own underwriting rules, so a condition declined by one insurer may be accepted by another. A broker who works with multiple carriers can match your health history to the most lenient available option.",
  },
  {
    question: "Can a Medicare Advantage plan drop me if my health gets worse?",
    answer:
      "No. Medicare Advantage plans cannot cancel your coverage or raise your premium because of a change in your health. You keep guaranteed renewal rights as long as the plan stays in your service area and you continue paying any applicable premium. You can also switch plans during the Annual Enrollment Period or, in some cases, a Special Enrollment Period.",
  }
,
  {
    question: "Which pre-existing conditions make Medigap underwriting harder?",
    answer:
      "Carriers vary widely, but conditions commonly scrutinized include recent cancer treatment, COPD, congestive heart failure, kidney disease requiring dialysis, and uncontrolled diabetes with complications. Each insurer maintains its own underwriting guidelines, so a condition that disqualifies you with one carrier may be accepted by another. A broker can pre-screen carriers before you submit an application to avoid unnecessary denials.",
  },
  {
    question: "Can I switch from Medicare Advantage to a Medigap plan with a pre-existing condition?",
    answer:
      "It depends on timing and your state. Outside of guaranteed issue situations — such as a trial right within your first 12 months on Medicare Advantage — most carriers will require medical underwriting on the Medigap application. Some states have additional protections that allow switching without health questions, so the rules where you live matter.",
  },
  {
    question: "How can a broker help me find coverage with a pre-existing condition?",
    answer:
      "An independent broker represents multiple carriers and knows which insurers are more lenient on specific conditions and which apply strict underwriting. That carrier-by-carrier knowledge helps you target applications likely to be approved and avoid wasting time on declines. You can reach Anthony Orner at 855-559-1700 for a free review of your options.",
  }
,
  {
    question: "Can a Medicare Advantage plan deny me because of a pre-existing condition?",
    answer:
      "No. Medicare Advantage plans cannot deny enrollment or charge higher premiums based on pre-existing conditions. As long as you're enrolled in Part A and Part B and live in the plan's service area, you can join during a valid enrollment period regardless of your health history.",
  },
  {
    question: "Which Medigap carriers are most lenient with underwriting?",
    answer:
      "Carrier underwriting guidelines vary widely and change over time, so there's no single answer that fits every condition or state. Some carriers automatically decline certain diagnoses, while others may approve with a rate-up or no adjustment at all. A licensed broker can pre-screen your medications and conditions against multiple carriers before you submit an application.",
  },
  {
    question: "Do I have to answer health questions to switch Medicare Advantage or Part D plans?",
    answer:
      "No. Medicare Advantage and Part D prescription drug plans never use medical underwriting. You can switch during the Annual Enrollment Period or other valid election periods without answering any health questions, even if you have multiple chronic conditions.",
  }
,
  {
    question: "Which pre-existing conditions make Medigap underwriting harder?",
    answer:
      "Outside of guaranteed issue windows, carriers commonly scrutinize conditions such as COPD, congestive heart failure, recent cancer treatment, diabetes with complications, and certain mental health diagnoses. Each carrier maintains its own list of declinable and rate-up conditions, so an application denied by one company may still be approved by another. A broker who knows current carrier guidelines can route your application to the most lenient option.",
  }
];

export default function MedicareBrokerPreExistingConditions() {
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
          Medicare Broker for People with Pre-Existing Conditions
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Medicare Broker for People with Pre-Existing Conditions: Your Coverage Options Explained
      </h1>

      <Image
        src="/images/medicare-broker-for-people-with-pre-existing-conditions.webp"
        alt="medicare broker for people with pre-existing conditions"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        A Medicare broker for people with pre-existing conditions knows which doors are open and which ones will waste your time. Original Medicare itself doesn't care about your health history. It has covered pre-existing conditions since 1965, with no waiting periods and no surcharges.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        The real problem shows up when you want supplemental coverage. That's where a broker who understands underwriting actually matters.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How pre-existing conditions affect Medigap underwriting
        </h2>
        <p className="text-gray-700 mb-2">
          Medicare Supplement (Medigap) plans help cover what Original Medicare doesn't: the $1,676 Part A deductible, the $283 Part B deductible, and coinsurance that can add up fast. But outside of protected enrollment windows, carriers can ask about your health.
        </p>
        <p className="text-gray-700">
          Diabetes, heart disease, COPD, cancer history. Any of these can lead to a denial or a higher rate. The application isn't just a formality. It's medical underwriting, and it's legal outside your initial enrollment window.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Guaranteed issue rights that bypass health questions entirely
        </h2>
        <p className="text-gray-700 mb-3">
          Federal law gives you guaranteed issue rights under specific circumstances. When you have these rights, carriers cannot deny you, charge more, or impose waiting periods for pre-existing conditions.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Your Medicare Advantage plan leaves your area or stops operating</li>
          <li>You lose employer or union group coverage</li>
          <li>Your Medigap carrier goes bankrupt or violated its contract</li>
          <li>You're in your 6-month Medigap Open Enrollment Period (starts when you're 65+ and enrolled in Part B)</li>
        </ul>
        <p className="text-gray-700 mt-3">
          These rights have strict deadlines. Miss the window and you're back to underwriting.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Medicare Advantage as an alternative when supplement underwriting is strict
        </h2>
        <p className="text-gray-700 mb-2">
          Medicare Advantage plans cannot deny you based on pre-existing conditions. Period. If you enroll during Open Enrollment (October 15 through December 7) or your Initial Enrollment Period, you're in regardless of health history.
        </p>
        <p className="text-gray-700">
          Many Advantage plans include prescription drug coverage, dental, and vision. Trade-offs exist: network restrictions, prior authorizations, and out-of-pocket maximums instead of the predictability Medigap offers. But for someone who can't pass supplement underwriting, Advantage may be the stronger move.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Work with a broker who knows which carriers are lenient
        </h2>
        <p className="text-gray-700 mb-2">
          Not every carrier underwrites the same way. Some decline anyone with insulin-dependent diabetes. Others approve it routinely. Some won't touch a cancer diagnosis within five years. Others look at it case by case.
        </p>
        <p className="text-gray-700">
          I work with dozens of carriers and know their underwriting tendencies. That means I can steer your application toward the carrier most likely to say yes, instead of letting you get denied and flagged in industry databases.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Your Medigap Open Enrollment window is your biggest asset
        </h2>
        <p className="text-gray-700 mb-2">
          If you haven't turned 65 yet, this is the single most important thing to know: your 6-month Medigap Open Enrollment Period is the one time carriers must accept you regardless of health. No questions. No denials. No waiting periods.
        </p>
        <p className="text-gray-700">
          Start planning at least 6 months before your Part B effective date. Once that window closes, it doesn't reopen.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What a free consultation looks like
        </h2>
        <p className="text-gray-700 mb-2">
          You tell me your conditions, your medications, and what matters most to you in a plan. I tell you exactly which path gives you the best shot at solid coverage. No cost to you, ever. Brokers are paid by the carriers, not by clients.
        </p>
        <p className="text-gray-700">
          If you've been putting this off because you're worried about being turned down, that's the exact reason to call. The earlier we talk, the more options you have.
        </p>
      </section>

      <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
        <p className="text-xl font-semibold text-blue-900 mb-2">
          Get honest answers about your coverage options.
        </p>
        <p className="text-gray-700 mb-4">
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
          </Link>
        </p>
        <p className="text-sm text-gray-500">
          Anthony Orner, Licensed Medicare Broker
        </p>
      </div>

      <section className="mt-12">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Related resources
        </h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-supplement/new-jersey/turning-65"
              className="text-blue-700 hover:underline"
            >
              Medigap Open Enrollment Period: What You Need to Know
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-700 hover:underline"
            >
              Medicare Advantage vs. Medigap: Which Is Right for You?
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey"
              className="text-blue-700 hover:underline"
            >
              Federal Guaranteed Issue Rights Explained
            </Link>
          </li>
          <li>
            <Link
              href="/services/help-with-your-medicare-decision"
              className="text-blue-700 hover:underline"
            >
              Schedule a Free Medicare Consultation
            </Link>
          </li>
        </ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/health-drug-plans/medigap/basics/ready-to-buy" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — When to buy Medigap</a> and <a href="https://www.medicare.gov/basics/get-started-with-medicare/sign-up/when-does-medicare-coverage-start" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Guaranteed issue rights</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Free, unbiased counseling is available through your <a href="https://www.shiphelp.org/" target="_blank" rel="noopener noreferrer" className="underline">State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Free local counseling: <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a></div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">State help: <a href="https://www.state.nj.us/dobi/division_insurance/ihcseh/shipindex.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a></div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free unbiased counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free unbiased Medicare counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free local Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.htm" rel="noopener noreferrer" target="_blank">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased Medicare counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
    </main>
  );
}