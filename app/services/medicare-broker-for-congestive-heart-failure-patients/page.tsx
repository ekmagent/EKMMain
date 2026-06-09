import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for congestive heart failure patients | Free Plan Review | MedicareYourself",
  description:
    "Medicare broker for CHF patients — Anthony Orner finds plans covering cardiac rehab, heart meds & hospital stays. Call 855-559-1700 for a free plan review.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-congestive-heart-failure-patients" },
  openGraph: {
    title:
      "Medicare broker for congestive heart failure patients | Free Plan Review | MedicareYourself",
    description:
      "Medicare broker for congestive heart failure patients in NJ. Anthony Orner finds plans covering cardiac rehab, meds, and hospital stays. Free consultation.",
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
      name: "Medicare Broker for Congestive Heart Failure Patients",
      item: "https://medicareyourself.com/services/medicare-broker-for-congestive-heart-failure-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Congestive Heart Failure Patients Who Refuse to Accept Coverage Gaps",
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
      "Does Original Medicare cover cardiac rehab for congestive heart failure?",
    answer:
      "Yes. Medicare Part B covers cardiac rehabilitation programs when ordered by your doctor after a CHF diagnosis. You'll pay 20% coinsurance after meeting the $283 annual Part B deductible, unless you have supplemental coverage that picks up that cost.",
  },
  {
    question:
      "Is Medigap or Medicare Advantage better for heart failure patients?",
    answer:
      "It depends on your situation. Medigap plans like Plan G give you predictable costs and let you see any Medicare-accepting provider, which matters when you need specialists or hospital transfers. Medicare Advantage plans may offer lower premiums but can limit your network and carry higher out-of-pocket costs during hospitalizations. Call to discuss your specific medications and care team.",
  },
  {
    question:
      "Can I switch Medicare plans if my current one doesn't cover my heart failure medications?",
    answer:
      "You can switch Part D or Medicare Advantage plans during Open Enrollment (October 15 through December 7). Certain qualifying events, like moving out of your plan's service area or losing other coverage, may also trigger a Special Enrollment Period. Anthony can review your current drug list and find plans with better formulary coverage.",
  },
  {
    question: "How much could a CHF hospitalization cost on Original Medicare?",
    answer:
      "Each benefit period starts with a $1,676 Part A deductible in 2026. If you're readmitted within 60 days, that's the same benefit period. But a new admission after 60 days means another $1,676. Skilled nursing facility stays cost $209.50/day for days 21 through 100. Without supplemental coverage, these costs add up fast with CHF.",
  },
,
  {
    question: "Does Medicare cover heart failure medications like Entresto or Jardiance?",
    answer:
      "Brand-name CHF medications are typically covered under Medicare Part D prescription drug plans, but coverage tiers, prior authorization rules, and copays vary by plan formulary. Anthony can run your medication list through different Part D and Medicare Advantage formularies to find the lowest total cost. Switching to a better-aligned plan during Open Enrollment can meaningfully reduce annual drug spending.",
  },
  {
    question: "Will Medicare cover a heart failure remote monitoring device?",
    answer:
      "Medicare Part B generally covers remote physiologic monitoring services when ordered by your physician for managing chronic conditions like CHF. Some Medicare Advantage plans also include additional cardiac monitoring or in-home support as supplemental benefits. Coverage details depend on the specific plan and provider, so it's worth reviewing before you enroll.",
  },
  {
    question: "Can a Medicare broker help if I've already been diagnosed with CHF?",
    answer:
      "Yes. As a licensed broker, Anthony can compare Medicare Advantage and Part D plans without medical underwriting during valid enrollment windows. Medigap underwriting rules vary by state and timing, so it's important to review your guaranteed-issue rights before applying. Call 855-559-1700 for a free plan review tailored to your CHF care team and medications.",
  }
,
  {
    question: "Does Medicare cover heart failure medications under Part D?",
    answer:
      "Most Part D plans cover common heart failure medications, including beta blockers, ACE inhibitors, ARBs, and diuretics. Coverage and tier placement vary by plan formulary, so the same drug can have very different copays from one plan to the next. Anthony can run your medication list against available plans to find the lowest total cost.",
  },
  {
    question: "Why work with a Medicare broker instead of enrolling directly?",
    answer:
      "A licensed broker compares plans across multiple carriers at no cost to you, so you see how each option handles cardiac specialists, hospital networks, and your specific medications. Anthony Orner is licensed in NJ and 34 other states and can review your full situation rather than steering you toward a single carrier's plan.",
  }
,
  {
    question: "Does Medicare cover heart failure medications under Part D?",
    answer:
      "Yes. Medicare Part D plans cover prescription drugs commonly prescribed for CHF, including ACE inhibitors, beta blockers, diuretics, and SGLT2 inhibitors. Each plan has its own formulary, so the same medication can have very different copays from one plan to another. Anthony reviews your full medication list to find the plan with the lowest total annual cost.",
  },
  {
    question: "Will Medicare pay for a heart failure specialist or cardiologist?",
    answer:
      "Original Medicare Part B covers visits to cardiologists and heart failure specialists who accept Medicare assignment. With Medicare Advantage, you typically need to use in-network specialists and may need a referral. This is one reason CHF patients with established care teams often prefer Original Medicare paired with a Medigap plan.",
  },
  {
    question: "Does Medicare cover home health care after a CHF hospitalization?",
    answer:
      "Yes. Medicare Part A and Part B cover medically necessary home health services, including skilled nursing visits, physical therapy, and home health aide services, when ordered by your doctor and provided by a Medicare-certified agency. You must be considered homebound and need intermittent skilled care to qualify.",
  }
,
  {
    question: "Does Medicare cover heart failure medications under Part D?",
    answer:
      "Yes. Medicare Part D plans cover most prescription medications used to treat congestive heart failure, including ACE inhibitors, beta-blockers, and diuretics. Coverage and copays vary by plan formulary, so it's important to compare drug lists before enrolling. Anthony can run your medication list against available plans to find the lowest total cost.",
  },
  {
    question: "Will a Medicare Advantage plan require referrals to see a cardiologist?",
    answer:
      "It depends on the plan type. HMO Medicare Advantage plans often require a referral from your primary care doctor before seeing a cardiologist, while PPO plans typically allow direct specialist access at higher cost. Original Medicare with a Medigap plan does not require referrals to see any Medicare-accepting cardiologist.",
  },
  {
    question: "Can I keep my cardiologist if I switch Medicare plans?",
    answer:
      "If you have Original Medicare with a Medigap plan, you can see any provider who accepts Medicare nationwide. Medicare Advantage plans use provider networks, so you'll need to confirm your cardiologist is in-network before enrolling. Anthony verifies provider participation as part of every plan review.",
  }
,
  {
    question: "Does Medicare cover heart failure medications under Part D?",
    answer:
      "Most heart failure medications, including ACE inhibitors, beta blockers, diuretics, and SGLT2 inhibitors, are covered under Medicare Part D prescription drug plans. Coverage and copays vary by plan formulary, so it's important to compare plans based on your specific medication list. Anthony can run your drug list through multiple plans to find the lowest total annual cost.",
  },
  {
    question: "Will Medicare cover a cardiologist for ongoing CHF management?",
    answer:
      "Yes. Medicare Part B covers medically necessary visits to cardiologists for ongoing heart failure management, including diagnostic tests like echocardiograms and EKGs. With Original Medicare, you can see any cardiologist who accepts Medicare. Medicare Advantage plans typically require you to stay in-network or get referrals, which is something to weigh if you already have an established cardiac care team.",
  },
  {
    question: "Are home health services covered for CHF patients?",
    answer:
      "Medicare covers part-time skilled home health services for CHF patients who are homebound and need skilled nursing or therapy ordered by a doctor. This can include monitoring vital signs, medication management, and patient education. The benefit is the same under Original Medicare and Medicare Advantage, but Advantage plans may require prior authorization.",
  }
,
  {
    question: "Does Medicare cover heart failure medications under Part D?",
    answer:
      "Most Part D plans cover common CHF medications like ACE inhibitors, beta blockers, and diuretics, but each plan has its own formulary and tier structure. Your out-of-pocket costs can vary significantly between plans for the same drug. Anthony can compare formularies side by side to find the plan that covers your specific prescriptions at the lowest total cost.",
  },
  {
    question: "Will a Medicare Advantage plan let me keep my cardiologist?",
    answer:
      "Medicare Advantage plans use provider networks, so your cardiologist must be in-network for the plan to cover routine visits at the lowest cost. Before enrolling, it's important to verify your cardiologist, primary care doctor, and preferred hospital all participate. Anthony checks every provider in your care team before recommending a plan.",
  },
  {
    question: "Does Medicare cover home health care after a CHF hospitalization?",
    answer:
      "Yes. Medicare covers intermittent skilled nursing care, physical therapy, and home health aide services when ordered by your doctor after a qualifying hospital stay. You must be considered homebound and use a Medicare-certified home health agency. Supplemental coverage can help with any related costs not paid by Original Medicare.",
  }
,
  {
    question: "Will a Medicare broker charge me to find a plan that covers my heart failure care?",
    answer:
      "No. Licensed Medicare brokers like Anthony Orner are paid by the insurance carriers, not by you. You pay the same premium whether you enroll directly or work with a broker, so the plan review and ongoing support come at no cost to you. Call 855-559-1700 to start a free review.",
  },
  {
    question: "Can a Medicare Advantage plan drop my cardiologist mid-year?",
    answer:
      "Yes, Medicare Advantage provider networks can change during the plan year if a hospital system or specialist leaves the network. That's one reason CHF patients often prefer Medigap, which lets you see any provider who accepts Medicare. If your cardiologist is dropped, you may qualify for a Special Enrollment Period in some cases.",
  }
,
  {
    question: "Does Medicare cover heart failure medications under Part D?",
    answer:
      "Most heart failure medications, including ACE inhibitors, beta blockers, diuretics, and SGLT2 inhibitors, are covered under Medicare Part D prescription drug plans. However, each plan has its own formulary, so the same drug can cost very different amounts depending on the plan. Anthony reviews your full medication list before recommending a Part D or Medicare Advantage plan.",
  },
  {
    question: "Will Medicare pay for a heart failure specialist or cardiologist?",
    answer:
      "Yes. Medicare Part B covers visits to cardiologists and heart failure specialists when the care is medically necessary. With Original Medicare you can see any provider who accepts Medicare, while Medicare Advantage plans typically require you to stay within a network or get referrals. This is an important factor for CHF patients who already have an established care team.",
  },
  {
    question: "Does Medicare cover home health care for congestive heart failure?",
    answer:
      "Medicare covers intermittent home health services like skilled nursing visits, physical therapy, and home health aide care when ordered by your doctor and provided by a Medicare-certified agency. You must be considered homebound to qualify. This benefit can be especially helpful for CHF patients recovering after a hospital stay.",
  }
,
  {
    question: "Does Medicare cover heart failure medications under Part D?",
    answer:
      "Most Part D plans cover common CHF medications like ACE inhibitors, beta-blockers, diuretics, and ARNIs, but each plan has its own formulary and tier structure. The same drug can have very different copays from one plan to another. Anthony can compare your exact medication list against available plans to find the lowest total annual cost.",
  },
  {
    question: "Will Medicare pay for a heart failure specialist or cardiologist visits?",
    answer:
      "Yes. Medicare Part B covers visits to cardiologists and heart failure specialists when the care is medically necessary. With Original Medicare you can see any cardiologist who accepts Medicare, while Medicare Advantage plans typically require you to stay in-network and may need referrals. This is an important factor to weigh if you already have an established cardiology team.",
  },
  {
    question: "Does Medicare cover implantable devices like pacemakers or defibrillators for CHF?",
    answer:
      "Yes. Medicare covers medically necessary implantable cardiac devices such as pacemakers and ICDs when prescribed by your cardiologist for qualifying heart conditions. Part A covers the inpatient procedure and Part B covers outpatient follow-up monitoring. Your out-of-pocket cost depends heavily on whether you have a Medigap plan or Medicare Advantage coverage.",
  }
,
  {
    question: "Does Medicare cover heart failure medications under Part D?",
    answer:
      "Yes. Medicare Part D plans cover prescription medications commonly used for congestive heart failure, including ACE inhibitors, beta-blockers, diuretics, and SGLT2 inhibitors when they're on the plan's formulary. Each plan has its own drug list and tier pricing, so the same medication can cost very differently across plans. Anthony can compare your specific drug list against available Part D and Medicare Advantage plans.",
  }
,
  {
    question: "Does Medicare cover heart failure medications under Part D?",
    answer:
      "Yes. Medicare Part D plans cover most prescription medications used to treat congestive heart failure, including ACE inhibitors, beta blockers, diuretics, and SGLT2 inhibitors. Coverage and copays vary by plan formulary, so it's important to compare plans against your specific drug list before enrolling.",
  },
  {
    question: "Will Medicare cover an implantable device or heart procedure for CHF?",
    answer:
      "Medicare Part A covers inpatient hospital stays for procedures like pacemaker or defibrillator implantation, while Part B covers outpatient cardiac services and follow-up care. You'll be responsible for the Part A deductible and Part B coinsurance unless you have a Medigap or Medicare Advantage plan that reduces those costs.",
  }
,
  {
    question: "Does Medicare cover the implantable devices sometimes used for heart failure?",
    answer:
      "Yes. Medicare covers implantable cardioverter defibrillators (ICDs) and cardiac resynchronization therapy devices when they're medically necessary and you meet specific clinical criteria. Part A covers the inpatient procedure, while follow-up monitoring may fall under Part B. Your out-of-pocket cost depends on whether you have a Medigap plan or Medicare Advantage.",
  },
  {
    question: "Will Medicare pay for home health visits to monitor my heart failure?",
    answer:
      "Medicare Part A and Part B cover intermittent skilled nursing care and home health services when you're homebound and your doctor certifies you need them. This can include weight monitoring, medication management, and education to help prevent CHF hospital readmissions. There's no coinsurance for covered home health visits under Original Medicare.",
  },
  {
    question: "Are heart failure medications like Entresto or SGLT2 inhibitors covered under Part D?",
    answer:
      "Most heart failure medications are covered under Medicare Part D or the drug benefit built into a Medicare Advantage plan, but coverage tiers, prior authorization, and step therapy rules vary by plan. A formulary review before enrollment can prevent surprise costs at the pharmacy. Anthony can compare your exact medication list against available plans in your county.",
  }
,
  {
    question: "Does Medicare cover heart failure medications under Part D?",
    answer:
      "Yes. Medicare Part D plans cover most common CHF medications, including ACE inhibitors, ARBs, beta-blockers, and diuretics. Coverage and copays vary by plan formulary, so it's important to compare drug lists before enrolling. Anthony can run your medication list against available plans to find the lowest total cost.",
  }
,
  {
    question: "Does Medicare cover heart failure medications like entresto, beta blockers, and diuretics?",
    answer:
      "Most heart failure medications are covered under Medicare Part D prescription drug plans or through a Medicare Advantage plan that includes drug coverage. Coverage and copays vary by plan formulary, so the same medication can cost very different amounts depending on which plan you choose. Anthony can run your full medication list against available plans to find the lowest total cost.",
  }
,
  {
    question: "Does a Medicare broker cost anything for CHF patients?",
    answer:
      "No. Licensed Medicare brokers like Anthony Orner are paid by the insurance carriers, not by you. You pay the same plan premium whether you enroll directly or through a broker, so there's no added cost for personalized help comparing plans for heart failure care.",
  },
  {
    question: "Will Medicare cover a cardiologist for ongoing CHF management?",
    answer:
      "Yes. Medicare Part B covers medically necessary visits to cardiologists and other specialists for monitoring and treating congestive heart failure. With Original Medicare you can see any provider that accepts Medicare, while Medicare Advantage plans typically require you to stay within a network.",
  }
,
  {
    question: "Does Medicare cover heart failure medications under Part D?",
    answer:
      "Yes, Part D prescription drug plans cover most heart failure medications, but formularies and tier placements vary by plan. Common CHF drugs like ACE inhibitors, beta-blockers, and diuretics are typically covered, though newer medications may require prior authorization or higher copays. A broker can compare formularies to find the plan with the lowest cost for your specific drug list.",
  },
  {
    question: "Will Medicare pay for a cardiologist if I have congestive heart failure?",
    answer:
      "Yes. Medicare Part B covers visits to cardiologists and other specialists when medically necessary. Under Original Medicare, you can see any cardiologist who accepts Medicare without a referral. Medicare Advantage plans may require referrals and limit you to in-network specialists, so plan choice matters when you're managing CHF.",
  },
  {
    question: "Does Medicare cover home health care for congestive heart failure patients?",
    answer:
      "Yes, Medicare covers intermittent skilled nursing care, physical therapy, and home health aide services for CHF patients who are homebound and under a doctor's care plan. Services must be provided by a Medicare-certified home health agency. This benefit can be critical for monitoring fluid status and medication adherence after a hospitalization.",
  }
,
  {
    question: "Does Medicare cover heart failure medications under Part D?",
    answer:
      "Yes. Medicare Part D prescription drug plans cover most heart failure medications, including ACE inhibitors, beta blockers, diuretics, and newer agents like SGLT2 inhibitors. However, formularies vary by plan, so a medication covered by one plan may require prior authorization or be excluded by another. A broker can compare your specific drug list across available plans.",
  },
  {
    question: "Will Medicare pay for a cardiologist visit if I have CHF?",
    answer:
      "Yes. Medicare Part B covers medically necessary visits to cardiologists and other specialists for CHF management. You'll typically owe the Part B coinsurance after meeting the annual deductible, unless a Medigap or Medicare Advantage plan reduces that cost. You generally don't need a referral with Original Medicare, but some Medicare Advantage plans require one.",
  },
  {
    question: "Does Medicare cover home health care for CHF patients?",
    answer:
      "Medicare covers intermittent home health care for CHF patients who are homebound and need skilled nursing or therapy services ordered by a doctor. Covered services can include skilled nursing visits, physical therapy, and home health aide support tied to a skilled need. Custodial care alone is not covered.",
  }
,
  {
    question: "Does Medicare cover heart failure medications under Part D?",
    answer:
      "Yes. Medicare Part D prescription drug plans cover most heart failure medications, including ACE inhibitors, beta blockers, diuretics, and SGLT2 inhibitors. Coverage and copays vary by plan formulary, so it's important to compare plans based on your specific medication list. Anthony can run a personalized drug comparison to find the lowest total cost plan.",
  }
,
  {
    question: "Does Medicare cover heart failure medications like Entresto or beta-blockers?",
    answer:
      "Most heart failure medications are covered under Medicare Part D prescription drug plans, but coverage and tier placement vary by plan formulary. Some brand-name drugs like Entresto may sit on higher tiers with larger copays. Anthony can compare formularies side-by-side to find the plan that covers your specific medications at the lowest cost.",
  }
,
  {
    question: "Does Medicare cover heart failure medications under Part D?",
    answer:
      "Yes. Medicare Part D plans cover most heart failure medications, including ACE inhibitors, beta blockers, diuretics, and SGLT2 inhibitors when prescribed for CHF. Coverage and copays vary by plan formulary, so it's important to match your specific drug list to a plan that covers all of them at the lowest tier possible.",
  }
,
  {
    question: "Does Medicare cover heart failure medications like beta-blockers and ACE inhibitors?",
    answer:
      "Most heart failure medications are covered under Medicare Part D prescription drug plans. Coverage and copays vary by plan formulary, so the same medication can cost very different amounts depending on which Part D plan you choose. Anthony can compare your specific drug list across available plans to find the lowest total cost.",
  },
  {
    question: "Does Medicare cover implantable cardiac devices like pacemakers or defibrillators for CHF patients?",
    answer:
      "Yes. Medicare Part A covers implantation when performed as an inpatient procedure, and Part B covers outpatient implantation and follow-up device checks. Coinsurance and deductibles apply unless you have Medigap or other supplemental coverage. Your cardiologist must document medical necessity based on Medicare's coverage criteria.",
  },
  {
    question: "Are remote heart monitoring services covered by Medicare for CHF patients?",
    answer:
      "Medicare Part B covers remote patient monitoring and certain telehealth services when ordered by your doctor to manage chronic conditions like congestive heart failure. Some Medicare Advantage plans also include additional remote monitoring benefits. Standard Part B cost-sharing applies unless supplemental coverage offsets it.",
  }
];

export default function MedicareBrokerCHFPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />

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
          Medicare Broker for Congestive Heart Failure Patients
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Medicare Broker for Congestive Heart Failure Patients Who Refuse to
        Accept Coverage Gaps
      </h1>

      <Image
        src="/images/medicare-broker-for-congestive-heart-failure-patients.webp"
        alt="Medicare broker for congestive heart failure patients"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        A Medicare broker for congestive heart failure patients does one thing
        most agents won't: sit down with your medication list, your cardiologist
        referrals, and your hospital history, then find the plan that actually
        holds up when your heart doesn't cooperate. I'm Anthony Orner, a
        licensed broker in NJ, and I do this work every week.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        CHF changes your life overnight. Your coverage should change with it.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          The real cost of CHF: hospitalizations, medications, and monitoring
        </h2>
        <p className="text-gray-700 mb-2">
          One hospital stay costs $1,676 in Part A deductible alone in 2026. CHF
          patients average multiple admissions per year. If you end up in a
          skilled nursing facility for rehab, days 21 through 100 run $209.50
          per day out of your pocket without supplemental coverage.
        </p>
        <p className="text-gray-700">
          Then there are the meds. Entresto, Jardiance, and other Tier 4 or 5
          drugs can cost hundreds monthly under the wrong Part D plan. Add
          cardiac rehab sessions, echocardiograms, and regular cardiology
          visits, and you're looking at real money.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why most Medicare plans fall short for heart failure patients
        </h2>
        <p className="text-gray-700 mb-2">
          Most people pick a Medicare plan based on premium alone. That works
          fine if you're healthy. With CHF, the wrong plan can cost you tens of
          thousands in a single bad month.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Narrow networks that exclude your cardiologist or cardiac center</li>
          <li>Prior authorization delays on heart failure medications</li>
          <li>High copays for specialist visits you need every 4 to 6 weeks</li>
          <li>No coverage for out-of-area hospital transfers during emergencies</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Medigap vs. Medicare Advantage when you have CHF
        </h2>
        <p className="text-gray-700 mb-2">
          A Medigap Plan G paired with a standalone Part D plan gives you the
          most freedom. You pay the $283 Part B deductible, and after that,
          Plan G covers your 20% coinsurance on every Medicare-approved service.
          Any hospital. Any specialist. No network restrictions.
        </p>
        <p className="text-gray-700">
          Medicare Advantage can work for some CHF patients, but you need to
          check the maximum out-of-pocket, confirm your entire care team is
          in-network, and verify your meds are on formulary. One person I spoke
          with saved over a million dollars on a massive cardiac event because
          they'd enrolled in Original Medicare with a supplement. The wrong
          Advantage plan in that same situation could have meant six-figure bills.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How Anthony matches CHF patients with plans that actually work
        </h2>
        <p className="text-gray-700 mb-2">
          I start with your full picture: current meds, doctors, hospitals, and
          how often you're being seen. Then I compare every available plan in
          your area against that reality.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Run your prescriptions through every Part D formulary</li>
          <li>Verify your cardiologist and hospital are in-network</li>
          <li>Calculate your true annual cost, not just the premium</li>
          <li>Flag plans with prior auth requirements on your cardiac meds</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          When to call (and when it's urgent)
        </h2>
        <p className="text-gray-700 mb-2">
          If you're turning 65, your Medigap Open Enrollment Period is the
          6 months starting the month you turn 65 and are enrolled in Part B.
          During this window, no carrier can deny you or charge more because of
          your CHF diagnosis. Miss it, and guaranteed-issue options shrink
          dramatically.
        </p>
        <p className="text-gray-700">
          Already on Medicare and unhappy with your plan? Open Enrollment runs
          October 15 through December 7. But don't wait until October to start
          the conversation. Call now so we're ready when the window opens.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Your heart condition changed everything except your right to good coverage
        </h2>
        <p className="text-gray-700">
          Going from 18 holes to barely making it up the stairs is hard enough.
          You shouldn't also have to fight your insurance company for coverage on
          the meds and rehab keeping you alive. That's what I'm here for. The
          call is free, there's no obligation, and I'll tell you exactly where
          your current plan falls short.
        </p>
      </section>

      <div className="mt-12 bg-blue-600 text-white rounded-lg p-8 text-center">
        <p className="text-2xl font-bold mb-2">
          Talk to a broker who understands CHF coverage.
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-semibold">
            855-559-1700
          </a>{" "}
          for a free plan review.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Get a Free Quote
        </Link>
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
              Medicare Advantage vs. Medigap: Which Is Right for You?
            </Link>
          </li>
          <li>
            <Link
              href="/learn/medicare-parts-explained"
              className="text-blue-600 hover:underline"
            >
              Medicare Part D Prescription Drug Plans Explained
            </Link>
          </li>
          <li>
            <Link
              href="/services/free-medicare-broker-new-jersey"
              className="text-blue-600 hover:underline"
            >
              Find a Medicare Broker in New Jersey
            </Link>
          </li>
        </ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/coverage/cardiac-rehabilitation-programs" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Cardiac Rehabilitation Coverage</a> and <a href="https://www.medicare.gov/coverage/heart-disease-screenings" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Heart Disease Screenings</a>.</div>
            <div className="text-sm text-gray-600 mt-2">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Free unbiased counseling: <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a></div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free Medicare counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
    </main>
  );
}