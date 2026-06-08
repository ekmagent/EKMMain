import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare broker for heart disease patients | Free Help Finding the Right Plan | MedicareYourself",
  description:
    "Medicare broker for heart disease patients — find plans covering cardiologists, cardiac rehab & heart meds. Free unbiased help. Call 855-559-1700 today.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-heart-disease-patients" },
  openGraph: {
    title:
      "medicare broker for heart disease patients | Free Help Finding the Right Plan | MedicareYourself",
    description:
      "Medicare broker for heart disease patients matching you to plans covering cardiac rehab, specialists, and costly prescriptions. Call Anthony Orner — it's free.",
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
      name: "Medicare Broker for Heart Disease Patients",
      item: "https://medicareyourself.com/services/medicare-broker-for-heart-disease-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Heart Disease Patients: Plans That Cover the Full Picture, Not Just the Diagnosis",
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
    "https://medicareyourself.com/services/medicare-broker-for-heart-disease-patients",
};

const faqs = [
  {
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. Medicare brokers are paid by the insurance carriers, not by you. There's no fee for consultations, plan comparisons, or enrollment help. The plans and premiums are the same whether you enroll directly or through a broker.",
  },
  {
    question: "Which type of Medicare plan is best for heart patients?",
    answer:
      "It depends on your doctors, medications, and how often you need specialist care. Original Medicare with a Medigap supplement (like Plan G) gives you the widest access to cardiologists and hospitals with predictable costs. Medicare Advantage can work if your providers are in-network and the plan's maximum out-of-pocket fits your budget. A broker can compare both options based on your specific cardiac care needs.",
  },
  {
    question:
      "Does Medicare cover cardiac rehabilitation?",
    answer:
      "Yes. Medicare Part B covers cardiac rehab programs for qualifying conditions including heart attack, coronary artery bypass surgery, stable angina, heart valve repair or replacement, and heart or heart-lung transplant. You'll typically pay 20% of the Medicare-approved amount after the Part B deductible ($283 in 2026), unless your Medigap plan covers that share.",
  },
  {
    question:
      "Can I switch Medicare plans if my heart condition worsens?",
    answer:
      "You can switch Medicare Advantage plans during the Open Enrollment Period (October 15 through December 7) or the Medicare Advantage Open Enrollment (January 1 through March 31). If you're on Original Medicare with a Medigap supplement, switching supplement carriers outside your Medigap Open Enrollment Period may require medical underwriting. Call us to review your options.",
  },

  {
    question: "Do Medicare Advantage plans cover heart medications?",
    answer:
      "Most Medicare Advantage plans include Part D prescription drug coverage, which typically covers common cardiac medications like statins, beta blockers, ACE inhibitors, and anticoagulants. However, each plan has its own formulary, tier structure, and preferred pharmacies. A broker can check that your specific heart medications are covered at the lowest possible cost before you enroll.",
  },
  {
    question: "Will Medicare cover my cardiologist visits and testing?",
    answer:
      "Medicare Part B covers medically necessary cardiologist visits, EKGs, stress tests, echocardiograms, and cardiac catheterization. You pay 20% of the Medicare-approved amount after meeting the $283 Part B deductible in 2026, unless you have a Medigap plan that covers that coinsurance. Medicare Advantage plans cover the same services but use copays and require in-network providers.",
  }
,
  {
    question: "Will a Medicare Advantage plan cover my cardiologist?",
    answer:
      "Only if your cardiologist is in the plan's network. Medicare Advantage plans use provider networks, so before enrolling it's critical to verify that your cardiologist, hospital, and any specialists you see accept the specific plan. A broker can check network status for every plan in your area before you commit.",
  }
,
  {
    question: "Will Medicare cover my cardiologist visits and heart procedures?",
    answer:
      "Yes. Medicare Part B covers medically necessary cardiologist visits, diagnostic tests like EKGs and echocardiograms, and outpatient procedures. Part A covers inpatient hospital stays for heart surgery, stent placement, and other cardiac admissions. With Original Medicare you pay coinsurance unless a Medigap plan covers your share, while Medicare Advantage plans use copays and networks that vary by carrier.",
  }
,
  {
    question: "Will a Medicare Advantage plan cover my cardiologist?",
    answer:
      "Only if your cardiologist is in the plan's network. Medicare Advantage plans use provider networks, so seeing an out-of-network specialist may cost more or not be covered at all. Before enrolling, a broker can verify that your specific cardiologist and preferred hospital system are in-network for any plan you're considering.",
  },
  {
    question: "Are heart medications covered under Medicare?",
    answer:
      "Prescription drugs like statins, blood thinners, and beta-blockers are typically covered under Medicare Part D or the drug coverage built into a Medicare Advantage plan. Each plan has its own formulary, so the same medication can have very different costs depending on the plan. A broker compares formularies to find the plan with the lowest total cost for your exact medication list.",
  },
  {
    question: "Do I need a referral to see a cardiologist with Medicare?",
    answer:
      "With Original Medicare, you can see any cardiologist who accepts Medicare without a referral. Medicare Advantage HMO plans usually require a referral from your primary care doctor, while PPO plans typically do not. This is one reason plan structure matters so much for heart patients who see specialists regularly.",
  }
,
  {
    question: "Will my cardiologist accept my Medicare plan?",
    answer:
      "With Original Medicare, any cardiologist who accepts Medicare assignment will treat you, which is the vast majority nationwide. Medicare Advantage plans use provider networks, so you'll need to confirm your cardiologist is in-network before enrolling. A broker can run your specific doctors against each plan's directory before you commit.",
  }
,
  {
    question: "Will my cardiologist accept Medicare?",
    answer:
      "Most cardiologists accept Original Medicare, which gives you broad access to specialists nationwide without referrals. With Medicare Advantage, you'll need to confirm your cardiologist is in the plan's network and check whether referrals are required. A broker can verify provider participation before you enroll so there are no surprises.",
  }
,
  {
    question: "Does Medicare cover heart medications like statins, blood thinners, and beta blockers?",
    answer:
      "Most heart medications are covered under Medicare Part D prescription drug plans, but each plan has its own formulary and tier pricing. The same medication can have very different copays depending on the plan you choose. A broker can run your specific medication list against available Part D and Medicare Advantage plans to find the lowest total annual cost.",
  }
,
  {
    question: "Are heart medications covered under Medicare Part D?",
    answer:
      "Most heart medications including statins, blood thinners, beta blockers, and ACE inhibitors are covered under Medicare Part D prescription drug plans. However, formularies and tier placement vary significantly between plans, so a drug that's affordable on one plan may be costly on another. A broker can run your specific medication list against available plans to find the lowest total annual cost.",
  }
,
  {
    question: "Will my cardiologist accept the Medicare plan I choose?",
    answer:
      "With Original Medicare, any cardiologist who accepts Medicare assignment will see you, which is most cardiologists nationwide. With Medicare Advantage, your cardiologist must be in the plan's network, so always confirm before enrolling. A broker can verify your specific doctors against each plan's network before you make a decision.",
  },
  {
    question: "Are heart medications like blood thinners and statins covered by Medicare?",
    answer:
      "Yes, prescription drugs including blood thinners, statins, beta blockers, and ACE inhibitors are covered under Medicare Part D or through a Medicare Advantage plan that includes drug coverage. Each plan has its own formulary, so the same medication may have different copays depending on the plan. We compare formularies to find the lowest total cost for your specific heart medications.",
  },
  {
    question: "Does Medicare cover heart procedures like stents, bypass surgery, or pacemakers?",
    answer:
      "Yes. Medicare Part A covers inpatient hospital stays for procedures like coronary artery bypass surgery and pacemaker implantation, while Part B covers outpatient procedures and follow-up care. Your out-of-pocket costs depend on whether you have a Medigap supplement or a Medicare Advantage plan with its own cost-sharing structure.",
  }
,
  {
    question: "Will my cardiologist accept my Medicare plan?",
    answer:
      "It depends on the plan type. Original Medicare is accepted by any provider who takes Medicare assignment, which includes the vast majority of cardiologists nationwide. Medicare Advantage plans use provider networks, so you'll want to confirm your cardiologist is in-network before enrolling — a broker can verify this for every plan being compared.",
  },
  {
    question: "Does Medicare Part D cover common heart medications?",
    answer:
      "Yes, Part D plans cover most heart medications including statins, blood thinners, beta-blockers, and ACE inhibitors, but each plan has its own formulary and pricing tiers. The same drug can cost very different amounts depending on which Part D plan you choose. A broker can run your specific medication list against available plans to find the lowest annual out-of-pocket cost.",
  }
,
  {
    question: "Does Medicare cover heart medications and blood thinners?",
    answer:
      "Medicare Part D prescription drug plans cover most heart medications, including blood thinners, statins, beta-blockers, and ACE inhibitors. However, formularies vary by plan, so the same drug may have very different copays depending on which plan you choose. A broker can run your actual medication list through plan finders to identify the lowest total annual cost.",
  },
  {
    question: "Are pre-existing heart conditions covered by Medicare?",
    answer:
      "Yes. Medicare does not exclude pre-existing conditions, so coverage for heart disease, prior heart attacks, or cardiac surgeries begins as soon as your Medicare is active. The one caveat is Medigap supplement plans: outside your Medigap Open Enrollment Period or a guaranteed-issue situation, insurers can use medical underwriting and may decline or charge more based on cardiac history.",
  },
  {
    question: "Will my Medicare plan cover follow-up visits with my cardiologist?",
    answer:
      "Original Medicare Part B covers medically necessary cardiologist visits, diagnostic tests, and most outpatient cardiac care, with you responsible for the Part B deductible and coinsurance. Medicare Advantage plans also cover cardiology but typically require the specialist to be in-network and may require a referral. Confirming your cardiologist's network status before enrolling is critical.",
  }
,
  {
    question: "Will a Medicare plan cover my heart medications?",
    answer:
      "Most heart medications, including statins, beta blockers, ACE inhibitors, and blood thinners, are covered under Medicare Part D or the drug benefit built into a Medicare Advantage plan. Each plan has its own formulary, so the same drug can have very different copays depending on the plan. A broker can run your exact medication list through every available plan to find the one with the lowest total annual cost.",
  },
  {
    question: "Can I keep seeing my current cardiologist on Medicare?",
    answer:
      "If you choose Original Medicare with a Medigap supplement, you can see any cardiologist in the country who accepts Medicare — no network restrictions or referrals. With Medicare Advantage, your cardiologist must be in the plan's network, and you may need a referral from your primary care doctor. Confirming network status before enrolling is one of the most important steps for heart patients.",
  },
  {
    question: "Does Medicare cover heart procedures like stents, bypass, or pacemakers?",
    answer:
      "Yes. Medicare Part A covers inpatient hospital care for procedures such as coronary stents, bypass surgery, valve repair, and pacemaker or defibrillator implantation. Part B covers related physician services and follow-up outpatient care. Your out-of-pocket share depends on whether you have a Medigap supplement or are enrolled in a Medicare Advantage plan with its own cost-sharing structure.",
  }
,
  {
    question: "Are heart medications covered by Medicare?",
    answer:
      "Most heart medications are covered through Medicare Part D prescription drug plans or Medicare Advantage plans that include drug coverage. Common cardiac drugs like statins, beta-blockers, ACE inhibitors, and anticoagulants are typically on plan formularies, though tier placement and cost-sharing vary. A broker can compare formularies to find the plan that covers your specific medications at the lowest cost.",
  }
,
  {
    question: "Will my cardiologist accept my Medicare plan?",
    answer:
      "If you have Original Medicare, any provider who accepts Medicare assignment will see you — that includes the vast majority of cardiologists nationwide. If you have Medicare Advantage, your cardiologist must be in that plan's network, and referrals may be required. Before enrolling, a broker can verify your specific cardiologist and hospital system are covered in-network.",
  },
  {
    question: "Are heart medications covered under Medicare?",
    answer:
      "Yes. Common cardiac medications like statins, beta-blockers, ACE inhibitors, anticoagulants, and antiarrhythmics are covered under Medicare Part D prescription drug plans or through a Medicare Advantage plan that includes drug coverage. Each plan has its own formulary and tier structure, so the same medication can have very different copays across plans. A broker can run your exact drug list against available plans to find the lowest total cost.",
  },
  {
    question: "Does Medicare cover heart procedures like stents, bypass, or pacemakers?",
    answer:
      "Yes. Medicare Part A covers inpatient hospital care including coronary bypass surgery, valve replacement, and pacemaker or defibrillator implantation. Part B covers medically necessary outpatient procedures such as diagnostic catheterizations and many stent placements performed in outpatient settings. Your out-of-pocket share depends on whether you have a Medigap supplement or a Medicare Advantage plan with a maximum out-of-pocket limit.",
  }
,
  {
    question: "Will Medicare cover my cardiologist visits and heart medications?",
    answer:
      "Medicare Part B covers medically necessary cardiologist visits, diagnostic tests like echocardiograms and stress tests, and outpatient procedures after you meet the Part B deductible. Heart medications are covered under Part D prescription drug plans or through a Medicare Advantage plan that includes drug coverage. A broker can review your specific medications against each plan's formulary to find the lowest total cost.",
  },
  {
    question: "Do I need a referral to see a cardiologist with Medicare?",
    answer:
      "Original Medicare does not require referrals to see specialists, including cardiologists, as long as the provider accepts Medicare. Medicare Advantage HMO plans typically require a referral from your primary care doctor, while PPO plans usually do not. If you see your cardiologist frequently, this difference can be a key factor in choosing the right plan.",
  }
,
  {
    question: "Will Medicare cover my heart medications?",
    answer:
      "Yes, but coverage depends on the specific Part D or Medicare Advantage prescription drug plan you choose. Each plan has its own formulary, tier structure, and preferred pharmacies, so the same medication can cost very different amounts across plans. A broker can run your exact medication list through multiple plans to find the one with the lowest total annual cost for your heart prescriptions.",
  },
  {
    question: "Are cardiologists and heart specialists covered under Medicare Advantage?",
    answer:
      "Medicare Advantage plans cover cardiologists, but only within the plan's provider network in most cases. If your current cardiologist is out-of-network, you may pay significantly more or not be covered at all. Before enrolling, it's important to confirm that your specialists, preferred hospitals, and any planned procedures are in-network with the plan you're considering.",
  },
  {
    question: "Does Medicare cover heart procedures like stents, bypass surgery, or pacemakers?",
    answer:
      "Yes. Medicare Part A covers inpatient hospital stays for procedures like coronary bypass surgery and pacemaker implantation, while Part B covers many outpatient cardiac procedures and follow-up care. Your out-of-pocket costs depend on whether you have Original Medicare with a Medigap supplement or a Medicare Advantage plan, which is why plan selection matters so much for heart patients.",
  }
,
  {
    question: "Will Medicare cover my heart medications?",
    answer:
      "Most heart medications, including statins, beta-blockers, ACE inhibitors, and blood thinners, are covered under Medicare Part D prescription drug plans or through a Medicare Advantage plan with drug coverage. Coverage and copays vary significantly between plans, so it's important to compare each plan's formulary against your specific prescriptions. A broker can run your medication list through every available plan to find the lowest total annual cost.",
  },
  {
    question: "Are cardiologist visits covered under Medicare?",
    answer:
      "Yes. Medicare Part B covers medically necessary visits to cardiologists, including diagnostic tests like EKGs, echocardiograms, and stress tests. Under Original Medicare you'll pay the Part B coinsurance after the deductible, while Medicare Advantage plans typically charge a specialist copay. A Medigap policy can cover most or all of the Part B coinsurance.",
  },
  {
    question: "Do I need a referral to see a cardiologist with Medicare?",
    answer:
      "With Original Medicare, you do not need a referral to see any cardiologist who accepts Medicare. Medicare Advantage HMO plans usually require a referral from your primary care doctor and that the cardiologist be in-network, while PPO plans generally allow direct access. This is a key reason heart patients should review plan type carefully before enrolling.",
  }
,
  {
    question: "Does Medicare cover heart medications?",
    answer:
      "Yes, but through Medicare Part D prescription drug plans, not Original Medicare. Common cardiac medications like statins, blood thinners, beta-blockers, and ACE inhibitors are typically covered, though tier placement and copays vary by plan. A broker can run your specific medication list through each plan's formulary to find the lowest total annual cost.",
  },
  {
    question: "Are cardiologist visits covered under Medicare?",
    answer:
      "Yes. Medicare Part B covers visits to cardiologists when they're medically necessary, including diagnostic tests like EKGs, echocardiograms, and stress tests. Under Original Medicare you can see any cardiologist who accepts Medicare, while Medicare Advantage plans typically require you to use in-network specialists and may require referrals.",
  },
  {
    question: "Will a pre-existing heart condition affect my Medicare enrollment?",
    answer:
      "Not for Original Medicare or Medicare Advantage — you cannot be denied coverage or charged more based on your heart condition. However, Medigap supplement plans can use medical underwriting outside your initial Medigap Open Enrollment Period, which means a heart condition could affect your ability to switch supplements later. This is why timing your enrollment correctly matters.",
  }
,
  {
    question: "Are heart medications covered under Medicare?",
    answer:
      "Most heart medications are covered under Medicare Part D prescription drug plans or through a Medicare Advantage plan that includes drug coverage. Each plan has its own formulary, so the same medication may have very different costs depending on the plan you choose. A broker can run your specific prescription list against available plans to find the lowest total annual cost.",
  }
,
  {
    question: "Does Medicare cover heart medications like blood thinners and statins?",
    answer:
      "Yes, but coverage comes through Medicare Part D prescription drug plans or a Medicare Advantage plan with built-in drug coverage. Each plan has its own formulary, so the same medication may be tier 2 on one plan and tier 4 on another. A broker can run your exact medication list through plan finders to identify the lowest total annual cost for your specific cardiac prescriptions.",
  },
  {
    question: "Will Medicare cover my cardiologist visits and heart procedures?",
    answer:
      "Medicare Part B covers medically necessary cardiologist visits, EKGs, stress tests, and diagnostic imaging, while Part A covers inpatient hospital care for procedures like stent placement, bypass surgery, and valve replacement. With Original Medicare you typically pay the Part B coinsurance unless you have a Medigap plan. Medicare Advantage plans cover the same services but often require in-network providers and prior authorization for procedures.",
  },
  {
    question: "What should heart patients look for when comparing Medicare plans?",
    answer:
      "Check that your cardiologist and preferred hospital system are in-network, confirm your heart medications are on the formulary at an affordable tier, and compare the maximum out-of-pocket limits since cardiac care can be expensive. Also look at whether the plan covers cardiac rehab, remote heart monitoring, and access to specialists without referrals. A broker can compare these details side-by-side at no cost to you.",
  }
,
  {
    question: "Will Medicare cover my heart medications?",
    answer:
      "Medicare Part D and Medicare Advantage plans with drug coverage include heart medications, but each plan has its own formulary with different tiers and pricing. Common cardiac drugs like statins, beta-blockers, blood thinners, and ACE inhibitors are typically covered, though your specific brand may sit on a higher tier in some plans. A broker can run your exact medication list through every available plan to find the lowest total annual cost.",
  }
,
  {
    question: "Will my cardiologist accept my Medicare plan?",
    answer:
      "With Original Medicare, any cardiologist who accepts Medicare assignment will see you, which is the vast majority of cardiac specialists nationwide. With Medicare Advantage, you're limited to the plan's network, so it's important to verify your cardiologist is in-network before enrolling. A broker can check provider directories for every plan you're considering.",
  }
,
  {
    question: "Will my cardiologist accept my Medicare plan?",
    answer:
      "If you have Original Medicare, any provider who accepts Medicare assignment will see you, which includes the vast majority of cardiologists nationwide. With Medicare Advantage, your cardiologist must be in the plan's network, and you may need a referral depending on the plan type. A broker can verify your specific cardiologist's participation before you enroll.",
  },
  {
    question: "Are heart medications covered under Medicare Part D?",
    answer:
      "Yes, but coverage varies by plan formulary. Common cardiac medications like statins, beta-blockers, ACE inhibitors, and anticoagulants are typically covered, though tier placement and prior authorization rules differ between plans. A broker can run your exact medication list through available Part D and Medicare Advantage drug plans to find the lowest total annual cost.",
  },
  {
    question: "Does Medicare cover heart procedures like stents and bypass surgery?",
    answer:
      "Yes. Medicare Part A covers inpatient hospital care for procedures like coronary artery bypass grafting and valve replacement, while Part B covers outpatient cardiac procedures, diagnostic tests, and physician services. Your out-of-pocket share depends on whether you have Original Medicare alone, a Medigap supplement, or a Medicare Advantage plan.",
  }
,
  {
    question: "Will Medicare cover my cardiologist visits?",
    answer:
      "Yes. Medicare Part B covers medically necessary visits to cardiologists, including diagnostic testing like EKGs, echocardiograms, and stress tests. After meeting the Part B deductible, you typically pay 20% of the Medicare-approved amount unless you have a Medigap plan or Medicare Advantage plan that covers that share. With Medicare Advantage, make sure your cardiologist is in the plan's network.",
  },
  {
    question: "Are heart medications covered under Medicare?",
    answer:
      "Heart medications such as statins, beta blockers, ACE inhibitors, and blood thinners are typically covered under Medicare Part D prescription drug plans or through the drug benefit included in most Medicare Advantage plans. Each plan has its own formulary, so the same medication can have very different costs depending on the plan. A broker can run your specific drug list against available plans to find the lowest total annual cost.",
  }
,
  {
    question: "Does Medicare cover heart medications like blood thinners and statins?",
    answer:
      "Yes, prescription heart medications are typically covered under Medicare Part D or through a Medicare Advantage plan that includes drug coverage. Coverage and copays vary significantly between plans, so it's important to check each plan's formulary against your specific medication list. A broker can run your drug list through plan comparison tools to find the lowest total annual cost.",
  }
,
  {
    question: "Will Medicare cover my heart medications?",
    answer:
      "Medicare Part D prescription drug plans cover most cardiac medications including blood thinners, statins, beta blockers, and ACE inhibitors. However, formularies and tier placement vary widely between plans, which means the same medication can cost very different amounts depending on which plan you choose. A broker can run your exact medication list against available Part D plans to find the lowest total annual cost.",
  },
  {
    question: "Does Medicare cover heart procedures like stents, bypass surgery, or pacemakers?",
    answer:
      "Yes. Medicare Part A covers inpatient hospital care for procedures like coronary artery bypass grafting, stent placement, valve repair or replacement, and pacemaker or defibrillator implantation. Part B covers the surgeon, anesthesiologist, and outpatient follow-up care. Your share of the costs depends on whether you have Original Medicare alone, a Medigap supplement, or a Medicare Advantage plan.",
  },
  {
    question: "Can my cardiologist stay the same if I switch Medicare plans?",
    answer:
      "With Original Medicare and a Medigap supplement, you can see any cardiologist or hospital nationwide that accepts Medicare. With Medicare Advantage, you're limited to the plan's network, so changing plans could mean changing cardiologists. Before recommending any plan, we verify your current cardiology team is in-network so you don't lose continuity of care.",
  }
,
  {
    question: "Will Medicare cover my heart medications?",
    answer:
      "Medicare Part D plans cover prescription drugs, but each plan has its own formulary that determines which heart medications are included and at what tier. Common cardiac drugs like statins, beta blockers, ACE inhibitors, and anticoagulants are typically covered, though costs vary by plan. A broker can compare formularies to find the plan that covers your specific medications at the lowest total cost.",
  }
,
  {
    question: "Will my cardiologist accept Medicare?",
    answer:
      "Most cardiologists in the United States accept Original Medicare, but Medicare Advantage plans use provider networks that vary by carrier and county. Before enrolling, a broker can verify that your specific cardiologist, hospital system, and any affiliated cardiac surgeons are in-network. This step is especially important if you receive care at a specialty heart center or academic medical center.",
  }
];

export default function MedicareBrokerHeartDiseasePatients() {
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
          Medicare Broker for Heart Disease Patients
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
        Medicare Broker for Heart Disease Patients: Plans That Cover the Full Picture, Not Just the Diagnosis
      </h1>

      <Image
        src="/images/medicare-broker-for-heart-disease-patients.webp"
        alt="medicare broker for heart disease patients"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        A medicare broker for heart disease patients looks at more than your diagnosis. I look at your cardiologist network, your medication tiers, your rehab schedule, and the costs that pile up when the wrong plan leaves gaps. I'm Anthony Orner, a licensed Medicare broker, and I do this for free.
      </p>

      <p className="text-lg text-gray-700 mb-6">
        You already know the fatigue that hits after a short walk, the background worry every time your chest feels off. Your Medicare plan shouldn't add to that weight.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Why heart disease makes choosing the wrong plan so costly
        </h2>
        <p className="text-gray-700 mb-2">
          Heart disease isn't one bill. It's an ongoing cycle of specialist visits, imaging, blood work, medication adjustments, and sometimes emergency procedures that cost six or seven figures. One real-world example: a single heart attack with three surgeries and weeks in cardiac ICU totaled over $1.2 million. The patient on the right Medigap plan paid roughly $283 for his Part B deductible plus monthly premiums.
        </p>
        <p className="text-gray-700">
          On the wrong plan, you'd face copays at every turn. The 2026 Part A deductible alone is $1,676 per benefit period, and skilled nursing coinsurance runs $209.50 per day for days 21 through 100.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Cardiac rehab, specialists, and prescriptions: what to look for in a plan
        </h2>
        <p className="text-gray-700 mb-3">
          Medicare Part B covers cardiac rehabilitation for qualifying conditions like heart attack, bypass surgery, stable angina, and valve repair. But coverage approval is only half the story. Here's what I check:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Is your cardiologist in-network (for Advantage plans)?</li>
          <li>Does the plan cover your cardiac rehab facility without prior authorization delays?</li>
          <li>Are your blood thinners, statins, or Tier 5 specialty drugs on the formulary at a price you can afford?</li>
          <li>Do you need referrals to see a specialist, or can you go directly?</li>
          <li>What's the actual out-of-pocket maximum if you need emergency surgery?</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Supplement vs. Advantage when you have a cardiac history
        </h2>
        <p className="text-gray-700 mb-2">
          Original Medicare plus a Medigap supplement (like Plan G) lets you see any cardiologist or hospital that accepts Medicare. No network restrictions, no referrals. After your $283 Part B deductible in 2026, Plan G covers the rest. That predictability matters when one event can generate dozens of separate bills.
        </p>
        <p className="text-gray-700 mb-2">
          Medicare Advantage plans often have lower premiums and may include drug coverage and extras. But they use provider networks, and out-of-pocket costs after a major cardiac event can reach $5,000 to $8,000 or more depending on the plan's maximum.
        </p>
        <p className="text-gray-700">
          Neither option is universally better. It depends on your doctors, your drugs, and how much financial uncertainty you can absorb. That's exactly what I help you figure out.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          You stopped doing the things you love. Your coverage shouldn't hold you back too.
        </h2>
        <p className="text-gray-700 mb-2">
          People with heart conditions quietly adjust their whole lives. You skip the walk, cancel the trip, avoid the grandkids' soccer game because you don't trust how you'll feel. That's hard enough.
        </p>
        <p className="text-gray-700">
          When your insurance creates its own set of worries, like surprise bills after a hospital stay or discovering your new medication isn't covered, it compounds everything. I match you to a plan that removes those variables so you can focus on the things that actually matter.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Preventive heart benefits Medicare already covers
        </h2>
        <p className="text-gray-700 mb-3">
          Medicare Part B includes heart-specific preventive screenings at no extra cost to you (with a doctor who accepts assignment):
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Cardiovascular screening blood tests once every five years</li>
          <li>Cardiovascular behavioral therapy to help reduce risk</li>
          <li>Annual wellness visits to monitor ongoing heart health</li>
        </ul>
        <p className="text-gray-700 mt-3">
          Many people with heart disease don't realize these are covered. I make sure you know what you're entitled to and that your plan supports all of it.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          How to get started with a free plan review
        </h2>
        <p className="text-gray-700 mb-2">
          Bring me your medication list, your cardiologist's name, and any upcoming procedures. I'll compare Medigap supplements, Medicare Advantage plans, and Part D options side by side. No cost, no obligation.
        </p>
        <p className="text-gray-700">
          If you're turning 65, your Medigap Open Enrollment Period starts the month you turn 65 and are enrolled in Part B. That six-month window gives you guaranteed acceptance regardless of your heart condition. Apply up to six months early to lock in your rate. After that window closes, carriers can use medical underwriting and may charge more or deny coverage.
        </p>
      </section>

      <section className="mt-10 bg-blue-600 text-white rounded-lg p-8 text-center">
        <p className="text-xl font-semibold mb-2">
          Talk to a broker who understands cardiac care costs.
        </p>
        <p className="text-3xl font-bold mb-4">
          <a href="tel:855-559-1700" className="underline">
            855-559-1700
          </a>
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Get a Free Quote
        </Link>
      </section>

      <section className="mt-12">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          Related resources
        </h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medigap Plan G: What It Covers and What It Costs
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
              Medicare Part D: Finding a Plan That Covers Your Medications
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
        </ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/coverage/cardiac-rehabilitation-programs" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Cardiac Rehabilitation Coverage</a> and <a href="https://www.medicare.gov/basics/costs/medicare-costs" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — 2026 Costs at a Glance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need unbiased state help? Contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/shipindex.htm" rel="noopener noreferrer" target="_blank" className="underline">New Jersey State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Free local counseling: <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> offers unbiased Medicare guidance in every state.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
    </main>
  );
}