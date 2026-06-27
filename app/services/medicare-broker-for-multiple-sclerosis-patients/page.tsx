import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for multiple sclerosis patients | Free Plan Comparison | MedicareYourself",
  description:
    "Medicare broker for MS patients — Anthony Orner finds plans covering infusions, MRIs, DMTs and your neurologist. Call 855-559-1700 for a free plan review.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-multiple-sclerosis-patients" },
  openGraph: {
    title:
      "Medicare broker for multiple sclerosis patients | Free Plan Comparison | MedicareYourself",
    description:
      "Medicare broker for multiple sclerosis patients in NJ. Anthony Orner navigates underwriting and finds plans covering infusions and MRIs. Free consultation.",
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
      name: "Medicare Broker for Multiple Sclerosis Patients",
      item: "https://medicareyourself.com/services/medicare-broker-for-multiple-sclerosis-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Multiple Sclerosis Patients Fighting a War Nobody Else Can See",
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
    "https://medicareyourself.com/services/medicare-broker-for-multiple-sclerosis-patients",
};

const faqs = [
  {
    question: "Can you get Medicare with multiple sclerosis?",
    answer:
      "Yes. If you're 65 or older, you qualify for Medicare regardless of health status. If you're under 65 with MS, you can qualify through Social Security Disability Insurance (SSDI) after a 24-month waiting period from when your disability benefits begin. Once eligible, you get Part A and Part B, and can add Part D or a Medicare Advantage plan.",
  },
  {
    question:
      "Does Medicare cover MS infusion drugs like Ocrevus or Tysabri?",
    answer:
      "Infusion drugs administered in a doctor's office or outpatient setting are typically covered under Medicare Part B, not Part D. You'll pay 20% coinsurance after the $283 annual Part B deductible unless you have a Medigap plan that covers that gap. This distinction matters because it affects which plan structure saves you the most money.",
  },
  {
    question:
      "Can I get a Medigap plan if I already have an MS diagnosis?",
    answer:
      "During your Medigap Open Enrollment Period (the 6 months starting the month you turn 65 and are enrolled in Part B), insurers cannot deny you or charge more due to MS. Outside that window, most states allow medical underwriting, which means an MS diagnosis could lead to denial. Certain federal guaranteed issue situations may also apply. Call to discuss your specific timing.",
  },
  {
    question: "Is Medicare Advantage or Medigap better for MS patients?",
    answer:
      "It depends on your treatment plan. Medicare Advantage may offer lower premiums but can require prior authorizations for MRIs and specialty drugs. Medigap paired with Original Medicare gives you more freedom to see any provider who accepts Medicare, with no referrals or network restrictions. For people on high-cost infusion therapies, the out-of-pocket structure of each option can mean thousands of dollars in difference.",
  },
  {
    question: "Will Medicare cover the MRIs I need to monitor my MS?",
    answer:
      "Yes. Medicare Part B covers medically necessary diagnostic MRIs when ordered by a doctor who accepts Medicare. With Original Medicare you'll owe the Part B deductible and coinsurance unless a Medigap plan fills that gap. Medicare Advantage plans also cover MRIs but often require prior authorization and use of in-network imaging centers.",
  },
  {
    question: "What should MS patients look for when comparing Part D drug plans?",
    answer:
      "Check each plan's formulary to confirm your specific disease-modifying therapy is covered and note its tier, since specialty tier drugs carry higher cost-sharing. Review prior authorization and step therapy rules, which are common for MS medications. A broker can run your exact drug list through multiple plans to find the lowest total annual cost.",
  },
  {
    question: "Can I keep my neurologist if I switch Medicare plans?",
    answer:
      "With Original Medicare plus Medigap, you can see any neurologist nationwide who accepts Medicare — no networks or referrals. With Medicare Advantage, you're generally limited to the plan's network, so confirm your MS specialist is in-network before enrolling. This matters because many communities have a shortage of neurologists trained in MS care.",
  }
,
  {
    question: "Will Medicare cover MRIs needed to monitor MS progression?",
    answer:
      "Yes. Medically necessary MRIs ordered by your doctor to monitor MS are covered under Medicare Part B as diagnostic imaging. You'll typically owe the Part B deductible and coinsurance unless you have a Medigap plan. Medicare Advantage plans cover MRIs too, but often require prior authorization, which can delay scans.",
  }
,
  {
    question: "Will Medicare cover MRI scans to monitor my MS?",
    answer:
      "Yes. Medicare Part B covers medically necessary MRI scans ordered by your doctor to monitor MS progression or treatment response. You'll typically pay the Part B coinsurance after meeting the annual deductible, unless you have a Medigap plan that covers those costs. Medicare Advantage plans cover MRIs but may require prior authorization before the scan is approved.",
  }
,
  {
    question: "Does Medicare cover MRI scans for MS monitoring?",
    answer:
      "Yes. Medicare Part B covers medically necessary MRI scans ordered by your doctor to monitor MS progression. You'll typically pay the Part B deductible and coinsurance unless you have a Medigap plan that covers those costs. Medicare Advantage plans must cover MRIs but may require prior authorization.",
  }
,
  {
    question: "Will Medicare cover my MRI scans for MS monitoring?",
    answer:
      "Yes. Medicare Part B covers medically necessary MRI scans ordered by your doctor to monitor MS progression. You'll be responsible for the Part B deductible and coinsurance unless you have supplemental coverage. Medicare Advantage plans cover MRIs but may require prior authorization before the scan is approved.",
  }
,
  {
    question: "Does Medicare cover MRI scans needed to monitor MS progression?",
    answer:
      "Yes. Medicare Part B covers medically necessary MRI scans ordered by your doctor to diagnose or monitor MS. You'll be responsible for the Part B deductible and coinsurance unless you have a Medigap policy or Medicare Advantage plan that reduces those costs. Some Medicare Advantage plans require prior authorization before the scan.",
  }
,
  {
    question: "Will Medicare cover MRIs needed to monitor my MS?",
    answer:
      "Yes. Medicare Part B covers medically necessary MRIs ordered by your doctor to monitor MS progression. You'll typically pay the Part B deductible and coinsurance unless you have a Medigap plan that covers those costs. Medicare Advantage plans cover MRIs but may require prior authorization, which can delay scans.",
  }
,
  {
    question: "Will Medicare cover MRI scans needed to monitor MS progression?",
    answer:
      "Yes. Medicare Part B covers medically necessary MRI scans ordered by your doctor to monitor MS, and you'll typically owe the Part B deductible plus coinsurance unless you have a Medigap plan that covers cost-sharing. Medicare Advantage plans also cover MRIs but often require prior authorization, which can delay imaging. A broker can help you compare how each plan type handles diagnostic imaging.",
  }
,
  {
    question: "Does Medicare Part D cover oral MS medications?",
    answer:
      "Yes. Oral disease-modifying therapies for MS that you take at home are typically covered under Medicare Part D prescription drug plans, not Part B. Coverage tiers, prior authorization rules, and out-of-pocket costs vary significantly between Part D plans, so comparing formularies before enrolling is essential to avoid surprises at the pharmacy.",
  }
,
  {
    question: "Will Medicare cover MRI scans needed to monitor MS progression?",
    answer:
      "Yes. Medicare Part B covers medically necessary MRI scans ordered by your doctor to monitor MS. Under Original Medicare you pay the Part B coinsurance after meeting the deductible, while Medicare Advantage plans may require prior authorization before approving the scan. A Medigap policy can help cover the coinsurance.",
  }
,
  {
    question: "Will Medicare cover MRIs needed to monitor my MS?",
    answer:
      "Yes. Medically necessary MRIs are covered under Medicare Part B when ordered by your doctor to monitor disease progression or treatment response. Under Original Medicare, you typically pay the Part B deductible and a coinsurance percentage of the Medicare-approved amount. Medicare Advantage plans must cover MRIs but may require prior authorization and use in-network imaging facilities.",
  }
,
  {
    question: "Will Medicare cover MRI scans needed to monitor MS progression?",
    answer:
      "Yes. Medicare Part B covers medically necessary MRI scans ordered by your doctor to monitor MS activity and treatment response. You'll typically pay the Part B coinsurance after meeting the annual deductible, unless a Medigap policy covers that cost share. Medicare Advantage plans also cover MRIs but may require prior authorization.",
  }
,
  {
    question: "Does Medicare cover MRIs needed to monitor MS progression?",
    answer:
      "Yes. Medically necessary MRIs ordered by your doctor to monitor MS are covered under Medicare Part B. With Original Medicare, you'll pay the Part B coinsurance after meeting the deductible, while Medicare Advantage plans may require prior authorization and have different cost-sharing. A Medigap plan can help cover the out-of-pocket Part B costs.",
  }
,
  {
    question: "Does Medicare cover MRI scans for MS monitoring?",
    answer:
      "Yes. Medically necessary MRIs ordered by your doctor to monitor MS progression are covered under Medicare Part B. You'll typically pay coinsurance after meeting the Part B deductible, unless you have a Medigap plan or Medicare Advantage plan that covers cost-sharing differently. Some Medicare Advantage plans require prior authorization for MRIs.",
  }
,
  {
    question: "Does Medicare cover MRIs needed to monitor MS progression?",
    answer:
      "Yes. Medically necessary MRIs ordered by your doctor to monitor multiple sclerosis are covered under Medicare Part B as diagnostic imaging. You'll typically pay coinsurance after meeting the Part B deductible, unless you have a Medigap plan that covers those costs. Medicare Advantage plans cover MRIs too, but may require prior authorization.",
  }
,
  {
    question: "Will Medicare cover my MRI scans for MS monitoring?",
    answer:
      "Yes. Medically necessary MRIs ordered by your doctor to monitor MS progression are covered under Medicare Part B as diagnostic imaging. You'll typically be responsible for the Part B deductible and coinsurance unless you have a Medigap plan that covers those costs. Medicare Advantage plans cover MRIs but often require prior authorization.",
  }
,
  {
    question: "Does Medicare cover MRIs for monitoring MS progression?",
    answer:
      "Yes. MRIs ordered by your doctor to monitor MS are covered under Medicare Part B as diagnostic imaging. You'll typically pay the Part B coinsurance after meeting the annual deductible, unless a Medigap policy covers that cost. Medicare Advantage plans usually cover MRIs but may require prior authorization before the scan is approved.",
  }
,
  {
    question: "Does Medicare cover MRI scans for MS monitoring?",
    answer:
      "Yes. Medicare Part B covers medically necessary MRI scans ordered by your doctor to monitor MS progression. You'll typically pay coinsurance after meeting the Part B deductible. Medicare Advantage plans also cover MRIs but may require prior authorization, which can delay scheduling.",
  }
,
  {
    question: "Does Medicare cover MRIs needed to monitor MS progression?",
    answer:
      "Yes. Medicare Part B covers medically necessary MRIs ordered by your doctor to monitor MS lesions and disease activity. You'll typically pay coinsurance after meeting the Part B deductible, unless you have a Medigap plan that covers those costs. Medicare Advantage plans also cover MRIs but may require prior authorization.",
  }
,
  {
    question: "Does Medicare cover MRI scans for MS monitoring?",
    answer:
      "Yes. Medicare Part B covers medically necessary MRIs ordered by your doctor to monitor MS progression. You'll typically owe the Part B deductible and coinsurance unless you have a Medigap plan or Medicare Advantage plan that reduces those costs. Some Advantage plans require prior authorization before the scan is approved.",
  }
,
  {
    question: "Does Medicare cover physical therapy and rehabilitation for MS?",
    answer:
      "Yes. Medicare Part B covers medically necessary outpatient physical therapy, occupational therapy, and speech-language pathology services when prescribed by your doctor. There is no longer a hard cap on therapy services, but your provider must document that continued therapy is medically necessary. This is important for MS patients managing mobility, balance, and fatigue.",
  }
,
  {
    question: "Does Medicare cover MRIs needed to monitor MS progression?",
    answer:
      "Yes. Medically necessary MRIs ordered by your doctor to monitor MS are covered under Medicare Part B as diagnostic imaging. You'll generally be responsible for the Part B deductible and coinsurance unless a Medigap plan covers those costs. Medicare Advantage plans cover MRIs too, but may require prior authorization before the scan is approved.",
  },
  {
    question: "Will Medicare cover physical therapy and rehabilitation for MS?",
    answer:
      "Medicare Part B covers medically necessary outpatient physical therapy, occupational therapy, and speech-language pathology services when ordered by your doctor. There is no longer a hard cap on therapy services, but ongoing care must be documented as medically necessary. Home health therapy may also be covered if you meet the homebound criteria.",
  },
  {
    question: "What happens to my MS coverage if I'm under 65 and on Medicare due to disability?",
    answer:
      "If you qualified for Medicare through SSDI, you receive the same Part A and Part B benefits as someone over 65. However, Medigap protections for people under 65 vary by state — some states require insurers to offer Medigap plans to disabled enrollees, while others do not. A licensed broker can review your state's specific rules with you.",
  }
,
  {
    question: "Will Medicare cover MRI scans I need to monitor my MS progression?",
    answer:
      "Yes. Medicare Part B covers medically necessary MRI scans ordered by your doctor to monitor MS, including brain and spinal cord imaging. You'll typically be responsible for the Part B deductible and coinsurance unless you have a Medigap plan. Medicare Advantage plans may require prior authorization before scheduling an MRI.",
  }
,
  {
    question: "How do I qualify for Medicare under 65 with multiple sclerosis?",
    answer:
      "If MS prevents you from working, you can apply for Social Security Disability Insurance (SSDI). After receiving SSDI benefits for 24 months, you're automatically enrolled in Medicare Part A and Part B. This pathway is common for people with progressive forms of MS who can no longer maintain employment.",
  }
,
  {
    question: "Does Medicare cover MRIs needed to monitor MS progression?",
    answer:
      "Yes. Medicare Part B covers medically necessary MRIs ordered by your doctor to monitor MS activity and treatment response. You typically pay coinsurance after meeting the Part B deductible, unless a Medigap plan covers that cost-sharing. With a Medicare Advantage plan, MRIs may require prior authorization and use in-network imaging centers.",
  },
  {
    question: "Does Medicare cover physical and occupational therapy for MS?",
    answer:
      "Medicare Part B covers medically necessary physical therapy, occupational therapy, and speech-language pathology services when prescribed by your doctor as part of an MS care plan. There are no longer hard caps on therapy services, but ongoing care above certain thresholds requires your therapist to confirm medical necessity. Coinsurance applies after the Part B deductible.",
  },
  {
    question: "Can I qualify for Medicare under 65 if MS has caused disability?",
    answer:
      "Yes. If MS leaves you unable to work, you can apply for Social Security Disability Insurance (SSDI). After receiving SSDI for 24 months, you are automatically enrolled in Medicare Part A and Part B. At that point, a licensed broker can help you compare Part D, Medicare Advantage, and Medigap options available in your state.",
  }
,
  {
    question: "Does Medicare cover physical therapy and rehabilitation for MS?",
    answer:
      "Yes. Medicare Part B covers medically necessary outpatient physical therapy, occupational therapy, and speech-language pathology services when prescribed by your doctor as part of your MS treatment plan. There is no longer a hard cap on therapy services, but your provider must document that continued therapy is medically necessary. Home health therapy may also be covered if you meet homebound criteria.",
  },
  {
    question: "Will Medicare pay for MRIs to monitor MS progression?",
    answer:
      "Yes. MRIs ordered by your doctor to diagnose or monitor multiple sclerosis are covered under Medicare Part B as diagnostic imaging. You'll typically owe the Part B deductible and coinsurance unless a Medigap plan covers those costs. Medicare Advantage plans cover MRIs too, but most require prior authorization before the scan is approved.",
  },
  {
    question: "What happens if my MS specialist isn't in a Medicare Advantage network?",
    answer:
      "With Medicare Advantage, going out-of-network can mean higher costs or no coverage at all, depending on whether the plan is an HMO or PPO. If keeping a specific neurologist or MS center is critical, Original Medicare with a Medigap plan generally lets you see any provider who accepts Medicare nationwide. We review your current care team before recommending any plan.",
  }
,
  {
    question: "Does Medicare Part D cover oral MS medications?",
    answer:
      "Yes. Oral disease-modifying therapies for MS, such as those taken at home in pill form, are generally covered under Medicare Part D prescription drug plans rather than Part B. Coverage, tier placement, and prior authorization rules vary by plan, so it's important to check each plan's formulary before enrolling. A broker can run your specific medications against available plans to find the lowest total cost.",
  }
,
  {
    question: "Does Medicare cover MRI scans for MS monitoring?",
    answer:
      "Yes. Medically necessary MRI scans ordered by your doctor to monitor MS progression are covered under Medicare Part B as diagnostic imaging. You'll typically pay the Part B coinsurance after meeting the annual deductible, unless you have a Medigap plan or Medicare Advantage plan that covers those costs differently. Medicare Advantage plans often require prior authorization before approving the scan.",
  },
  {
    question: "Will Medicare cover physical therapy and rehabilitation for MS?",
    answer:
      "Yes. Medicare Part B covers medically necessary outpatient physical therapy, occupational therapy, and speech-language pathology services when prescribed by your doctor as part of your MS care plan. There is no longer a hard cap on therapy services, but providers must document medical necessity once costs exceed an annual threshold. Home health therapy may also be covered if you meet homebound criteria.",
  },
  {
    question: "What happens to my Medicare if I'm under 65 and on SSDI for MS?",
    answer:
      "After receiving Social Security Disability Insurance for 24 months, you're automatically enrolled in Medicare Part A and Part B. You can then choose to add a Part D plan, enroll in a Medicare Advantage plan, or in some states purchase a Medigap policy. Medigap rights for people under 65 vary by state, which is why timing and state of residence matter when planning your coverage.",
  }
,
  {
    question: "Does Medicare cover physical therapy and rehabilitation for MS?",
    answer:
      "Yes. Medicare Part B covers medically necessary outpatient physical therapy, occupational therapy, and speech-language pathology services when prescribed by your doctor. There is no longer a hard cap on therapy services, though your provider must document medical necessity once costs exceed an annual threshold. Inpatient rehabilitation may be covered under Part A if you meet the criteria.",
  }
,
  {
    question: "How long is the Medicare waiting period if I have MS and qualify through disability?",
    answer:
      "If you qualify for Medicare through Social Security Disability Insurance because of MS, there's a 24-month waiting period from when your SSDI cash benefits begin before Medicare coverage starts. Unlike ALS or ESRD, MS does not waive this waiting period. Once it ends, you're automatically enrolled in Part A and Part B.",
  }
,
  {
    question: "Does Medicare cover physical therapy and rehabilitation for MS?",
    answer:
      "Yes. Medicare Part B covers medically necessary outpatient physical therapy, occupational therapy, and speech-language pathology services when prescribed by your doctor. There is no longer a hard cap on therapy services, but documentation requirements apply above certain thresholds. Home health therapy may also be covered if you qualify as homebound.",
  }
,
  {
    question: "How does Medicare cover MRIs for MS monitoring?",
    answer:
      "Medicare Part B covers medically necessary MRIs used to monitor MS progression when ordered by your doctor. Under Original Medicare, you pay the Part B deductible and then coinsurance unless a Medigap plan covers the gap. Medicare Advantage plans cover MRIs too, but may require prior authorization and use of in-network imaging facilities.",
  }
,
  {
    question: "Does Medicare cover MRIs needed to monitor MS progression?",
    answer:
      "Yes. Medically necessary MRIs ordered by your doctor to monitor MS are covered under Medicare Part B as diagnostic imaging. You'll typically pay the Part B coinsurance after meeting the annual deductible, unless a Medigap plan covers that share. Medicare Advantage plans cover MRIs too, but often require prior authorization.",
  },
  {
    question: "Will Medicare Part D cover oral MS disease-modifying therapies?",
    answer:
      "Oral disease-modifying therapies for MS are generally covered under Medicare Part D prescription drug plans, though they are usually placed on a specialty tier. Your out-of-pocket cost depends on the specific plan's formulary and tier structure. Comparing Part D formularies before enrolling is critical because coverage and cost-sharing vary widely between plans.",
  },
  {
    question: "Can a Medicare broker help me keep my current neurologist?",
    answer:
      "Yes. As a licensed broker, Anthony Orner reviews each plan's provider network or Medicare-accepting status to confirm your neurologist and MS care team are covered before you enroll. With Original Medicare plus a Medigap plan, you can see any provider who accepts Medicare nationwide, with no network limitations.",
  }
,
  {
    question: "Will Medicare cover MRIs needed to monitor MS progression?",
    answer:
      "Yes. Medically necessary MRIs ordered by your doctor to monitor MS are covered under Medicare Part B as diagnostic imaging. You'll typically be responsible for the Part B deductible and coinsurance unless you have a Medigap plan that fills those gaps. Medicare Advantage plans cover MRIs but may require prior authorization before the scan is approved.",
  }
,
  {
    question: "Does Medicare cover MRIs needed to monitor MS progression?",
    answer:
      "Yes. Medically necessary MRIs ordered by your doctor to monitor multiple sclerosis are covered under Medicare Part B as diagnostic imaging. You'll typically owe the Part B deductible and coinsurance unless a Medigap plan picks up that share. Medicare Advantage plans cover MRIs too, but often require prior authorization before the scan is approved.",
  }
,
  {
    question: "Will Medicare cover the MRIs I need to monitor my MS progression?",
    answer:
      "Yes. Medicare Part B covers medically necessary MRIs ordered by your doctor to monitor MS activity and treatment response. Under Original Medicare you'll owe the Part B coinsurance after meeting the deductible, which a Medigap plan can help offset. Medicare Advantage plans also cover MRIs but often require prior authorization, so timing matters when your neurologist needs imaging quickly.",
  },
  {
    question: "Does Medicare cover physical, occupational, and speech therapy for MS?",
    answer:
      "Yes. Medicare Part B covers outpatient physical therapy, occupational therapy, and speech-language pathology when prescribed as medically necessary by your doctor. There is no longer a hard cap on therapy services, though documentation requirements increase above certain thresholds. These therapies are often central to maintaining function and mobility for people living with MS.",
  },
  {
    question: "What happens to my MS drug coverage if I qualify for Medicare before age 65 through SSDI?",
    answer:
      "Once you complete the 24-month SSDI waiting period, you're enrolled in Medicare Parts A and B. Self-administered MS disease-modifying therapies fall under Part D, while infused therapies given at an office or infusion center are billed under Part B. Reviewing both your Part D formulary and your Part B coinsurance exposure is essential before picking a plan.",
  }
,
  {
    question: "Does Medicare cover MRIs needed to monitor MS progression?",
    answer:
      "Yes. Medically necessary MRIs ordered by your doctor to monitor MS are covered under Medicare Part B. With Original Medicare you'll generally pay the Part B coinsurance after the deductible, while Medicare Advantage plans may require prior authorization and have their own cost-sharing. A Medigap plan can help offset the Part B coinsurance.",
  }
,
  {
    question: "Will Medicare cover MRIs to monitor my MS progression?",
    answer:
      "Yes. Medically necessary MRIs ordered by your doctor to monitor multiple sclerosis are covered under Medicare Part B as diagnostic imaging. Under Original Medicare, you'll pay the Part B coinsurance after meeting the annual deductible unless a Medigap plan covers it. Medicare Advantage plans cover MRIs too, but most require prior authorization, which can delay imaging.",
  }
,
  {
    question: "Will Medicare cover the MRIs I need to monitor my MS progression?",
    answer:
      "Yes. Medically necessary MRIs ordered by your doctor to monitor MS are covered under Medicare Part B when performed at a facility that accepts Medicare. Under Original Medicare, you'll pay the Part B deductible and coinsurance unless you have Medigap. Medicare Advantage plans may require prior authorization before approving the scan.",
  }
,
  {
    question: "Does Medicare cover MRIs needed to monitor MS progression?",
    answer:
      "Yes. Medically necessary MRIs are covered under Medicare Part B when ordered by your doctor to diagnose or monitor MS. You'll be responsible for the Part B deductible and coinsurance unless you have a Medigap plan that fills those gaps. Medicare Advantage plans may require prior authorization before the scan is approved.",
  }
,
  {
    question: "Does Medicare cover MRIs needed to monitor MS progression?",
    answer:
      "Yes. Medically necessary MRIs ordered by your doctor to monitor MS are covered under Medicare Part B as diagnostic imaging. You'll typically be responsible for the Part B deductible and coinsurance unless a Medigap plan covers those costs. Medicare Advantage plans cover MRIs too, but may require prior authorization before the scan is approved.",
  },
  {
    question: "Will Medicare cover physical or occupational therapy for MS?",
    answer:
      "Medicare Part B covers medically necessary physical therapy, occupational therapy, and speech-language pathology services when prescribed by your doctor. There is no longer a hard cap on therapy visits, but services must remain medically necessary and documented. A licensed broker can help confirm whether your specific plan adds any extra rehab benefits.",
  },
  {
    question: "What happens if my MS specialist isn't in a Medicare Advantage network?",
    answer:
      "Most Medicare Advantage plans restrict you to in-network providers except in emergencies, which can be a problem if you've built a relationship with a specific neurologist. Original Medicare paired with a Medigap plan lets you see any provider nationwide who accepts Medicare. We review your current care team before recommending any plan structure.",
  }
,
  {
    question: "Will Medicare cover MRIs needed to monitor MS progression?",
    answer:
      "Yes. Medicare Part B covers medically necessary MRIs ordered by your doctor to monitor multiple sclerosis. You'll typically pay coinsurance after meeting the Part B deductible, unless a Medigap policy covers that cost-sharing. With Medicare Advantage, prior authorization is often required before the scan is approved.",
  },
  {
    question: "Does Medicare Part D cover oral MS medications?",
    answer:
      "Yes. Oral disease-modifying therapies for MS are generally covered under Medicare Part D prescription drug plans, though they're usually placed on a specialty tier with higher cost-sharing. Formularies and tier placement vary by plan, so the right Part D choice depends on which specific medication you take. A broker can compare formularies to find the plan that covers your drug at the lowest total annual cost.",
  },
  {
    question: "Can I qualify for Extra Help paying for MS medications?",
    answer:
      "Yes. The Extra Help program (also called the Low Income Subsidy) helps Medicare beneficiaries with limited income and resources pay Part D premiums, deductibles, and copays. Many MS patients on SSDI qualify. You can apply through Social Security at ssa.gov or call us and we'll walk you through eligibility.",
  }
,
  {
    question: "Does Medicare Part D cover oral MS medications?",
    answer:
      "Yes. Oral disease-modifying therapies for MS, such as those taken at home in pill form, are generally covered under Medicare Part D prescription drug plans. Coverage tiers, prior authorization requirements, and out-of-pocket costs vary by plan, so it's important to compare formularies before enrolling. A broker can check whether your specific medication is on a plan's formulary and at what tier.",
  }
,
  {
    question: "Does Medicare Part D cover oral MS disease-modifying therapies?",
    answer:
      "Yes. Oral disease-modifying therapies you take at home are generally covered under Medicare Part D, not Part B. Each Part D plan has its own formulary, so the same medication can have very different out-of-pocket costs depending on the plan you choose. Reviewing formularies before enrollment is critical for MS patients.",
  }
,
  {
    question: "Does Medicare cover MRIs for monitoring MS progression?",
    answer:
      "Yes. Medicare Part B covers medically necessary MRIs ordered by your doctor to monitor MS progression or evaluate new symptoms. You'll typically pay the Part B coinsurance after meeting the annual deductible, unless a Medigap plan covers that cost share. Medicare Advantage plans cover MRIs too but often require prior authorization.",
  }
,
  {
    question: "Does Medicare cover MRI scans for MS monitoring?",
    answer:
      "Yes. Medicare Part B covers medically necessary MRI scans ordered by your doctor to monitor MS progression or response to therapy. You'll typically pay the Part B coinsurance after meeting the annual deductible, unless a Medigap plan covers that share. Medicare Advantage plans also cover MRIs but often require prior authorization.",
  }
,
  {
    question: "Does Medicare cover MRIs for monitoring multiple sclerosis?",
    answer:
      "Yes. Medicare Part B covers medically necessary MRI scans when ordered by your doctor to monitor MS progression or response to therapy. You'll typically pay coinsurance after meeting the Part B deductible, and a Medigap plan can reduce or eliminate that out-of-pocket cost. Medicare Advantage plans may require prior authorization before scheduling the scan.",
  }
,
  {
    question: "Does Medicare cover MRIs for monitoring MS progression?",
    answer:
      "Yes. Medicare Part B covers medically necessary MRIs ordered by your doctor to monitor MS activity and treatment response. You'll typically pay the Part B coinsurance after meeting the annual deductible, unless a Medigap plan covers that cost sharing. Under Medicare Advantage, MRIs are covered but often require prior authorization.",
  },
  {
    question: "Will Medicare cover physical therapy and rehabilitation for MS?",
    answer:
      "Medicare Part B covers medically necessary physical therapy, occupational therapy, and speech-language pathology services when prescribed by your doctor. There are no longer hard annual caps, but therapy beyond a certain threshold requires your provider to document medical necessity. Home health therapy may also be covered if you meet homebound criteria.",
  }
,
  {
    question: "Does Medicare cover MRIs needed to monitor MS progression?",
    answer:
      "Yes. Medically necessary MRIs are covered under Medicare Part B when ordered by your doctor to monitor MS. You'll typically owe the Part B deductible and coinsurance unless you have a Medigap plan that helps cover those costs. Medicare Advantage plans cover MRIs too, but may require prior authorization.",
  }
,
  {
    question: "Does Medicare cover MRIs needed to monitor MS progression?",
    answer:
      "Yes. Medically necessary MRIs ordered by your doctor to monitor MS are covered under Medicare Part B as diagnostic imaging. You'll typically pay coinsurance after the Part B deductible unless you have a Medigap plan that helps with that cost. Medicare Advantage plans may require prior authorization before scheduling an MRI.",
  },
  {
    question: "Will Medicare cover physical therapy and rehab for MS?",
    answer:
      "Yes. Medicare Part B covers medically necessary outpatient physical therapy, occupational therapy, and speech-language pathology services when prescribed by your doctor as part of your MS care plan. There is no longer a hard cap on therapy services, though medical necessity documentation is required above certain thresholds. Inpatient rehab is covered under Part A when criteria are met.",
  },
  {
    question: "How does a Medicare broker help MS patients specifically?",
    answer:
      "A broker reviews your neurologist, infusion center, and current MS medications, then compares plans to confirm coverage and out-of-pocket costs for each. For MS patients, the broker focuses on Part B coverage of infusions, MRI authorization rules, and whether your Medigap timing protects you from underwriting. Call 855-559-1700 for a free review of your situation.",
  }
,
  {
    question: "Does Medicare cover MRIs needed to monitor MS progression?",
    answer:
      "Yes. Medically necessary MRIs ordered by your doctor to monitor multiple sclerosis are covered under Medicare Part B as diagnostic imaging. You'll be responsible for the Part B deductible and coinsurance unless you have a Medigap policy that covers those costs. Medicare Advantage plans cover MRIs too, but often require prior authorization.",
  },
  {
    question: "Will Medicare cover physical therapy and rehabilitation for MS?",
    answer:
      "Yes. Medicare Part B covers medically necessary physical therapy, occupational therapy, and speech-language pathology services when ordered by your doctor as part of an MS treatment plan. There is no longer a hard cap on therapy services, but your provider must document medical necessity above certain thresholds. Home health therapy may also be covered if you meet homebound criteria.",
  },
  {
    question: "What happens if my MS specialist isn't in a Medicare Advantage network?",
    answer:
      "With Medicare Advantage, going out of network can mean higher costs or no coverage outside emergencies, depending on whether the plan is an HMO or PPO. Original Medicare paired with a Medigap plan lets you see any neurologist nationwide who accepts Medicare, with no referrals required. This is often the deciding factor for MS patients with established specialist relationships.",
  }
,
  {
    question: "Does Medicare cover MRIs needed to monitor MS progression?",
    answer:
      "Yes. Medicare Part B covers medically necessary MRIs ordered by your doctor to monitor MS activity and treatment response. You'll typically pay the Part B coinsurance after meeting the annual Part B deductible. Medicare Advantage plans cover MRIs too, but often require prior authorization from your plan before the scan is approved.",
  }
,
  {
    question: "Does Medicare cover MRI scans for MS monitoring?",
    answer:
      "Yes. Medicare Part B covers medically necessary MRIs ordered by your doctor to monitor MS progression. You'll typically pay the Part B coinsurance after meeting the annual deductible unless you have a Medigap plan that covers those costs. Medicare Advantage plans cover MRIs too, but may require prior authorization from your plan.",
  },
  {
    question: "Will Medicare cover physical therapy and rehabilitation for MS?",
    answer:
      "Yes. Medicare Part B covers medically necessary outpatient physical therapy, occupational therapy, and speech-language pathology services when ordered by your doctor as part of your MS care plan. There is no longer a hard cap on therapy services, but providers must document that ongoing therapy is medically necessary. Home health therapy may also be covered under Part A if you qualify as homebound.",
  },
  {
    question: "What happens if my MS specialist isn't in a Medicare Advantage network?",
    answer:
      "Medicare Advantage plans typically only cover in-network providers except in emergencies. If your neurologist isn't in the plan's network, you may pay full cost out of pocket or need to switch doctors. This is why many MS patients choose Original Medicare with a Medigap plan, which lets you see any provider who accepts Medicare nationwide. Call 855-559-1700 to review your provider list before enrolling.",
  }
,
  {
    question: "Does Medicare cover MRIs needed to monitor MS progression?",
    answer:
      "Yes. Medically necessary MRIs ordered by your doctor to monitor MS are covered under Medicare Part B as diagnostic imaging. You'll be responsible for the Part B deductible and coinsurance unless a Medigap plan covers those costs. Medicare Advantage plans may require prior authorization before scheduling the MRI.",
  },
  {
    question: "Does Medicare Part D cover oral MS disease-modifying therapies?",
    answer:
      "Oral DMTs you take at home, such as fingolimod or dimethyl fumarate, are generally covered under Medicare Part D rather than Part B. Each Part D plan has its own formulary and tier placement, so the same medication can cost very different amounts depending on the plan you choose. Comparing formularies before enrolling is critical for MS patients on specialty drugs.",
  },
  {
    question: "What happens if I qualify for Medicare under 65 due to MS disability?",
    answer:
      "If you receive Social Security Disability Insurance for MS, you become eligible for Medicare after a 24-month waiting period. You'll automatically be enrolled in Parts A and B, and you can then add a Part D plan or enroll in Medicare Advantage. Medigap rights for under-65 enrollees vary by state, so it's important to review your options carefully.",
  }
,
  {
    question: "Does Medicare cover MRI scans needed to monitor MS progression?",
    answer:
      "Yes. Medically necessary MRIs ordered by your doctor to monitor multiple sclerosis are covered under Medicare Part B when performed at a Medicare-approved facility. You'll be responsible for the Part B deductible and coinsurance unless you have a Medigap plan that covers those costs. Under Medicare Advantage, prior authorization is often required before the scan is approved.",
  },
  {
    question: "Will Medicare Part D cover oral MS disease-modifying therapies?",
    answer:
      "Oral DMTs that you take at home are generally covered under Medicare Part D rather than Part B. Each Part D plan has its own formulary, so coverage tiers and prior authorization requirements vary by plan. Choosing a Part D plan that places your specific DMT on a lower tier can make a significant difference in your out-of-pocket cost.",
  },
  {
    question: "Can I keep my neurologist when I enroll in Medicare?",
    answer:
      "With Original Medicare paired with a Medigap plan, you can see any neurologist nationwide who accepts Medicare, with no referrals required. With Medicare Advantage, you'll need to confirm your neurologist is in-network and may need a referral from your primary care doctor. Before enrolling, it's worth confirming network status directly with your neurologist's office.",
  }
];

export default function MedicareBrokerForMSPatients() {
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
          Medicare Broker for Multiple Sclerosis Patients
        </span>
      </nav>

      <article className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Medicare Broker for Multiple Sclerosis Patients Fighting a War Nobody Else Can See
        </h1>

        <Image
          src="/images/medicare-broker-for-multiple-sclerosis-patients.webp"
          alt="Medicare broker for multiple sclerosis patients"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          A Medicare broker for multiple sclerosis patients does something most agents won't: look past the surface. The fatigue nobody sees, the tingling nobody believes, the medication costs that can bankrupt a household. I'm Anthony Orner, a licensed Medicare broker in New Jersey, and I help people with MS find plans that actually match how they live and what they need.
        </p>
        <p className="mb-6">
          This isn't about picking the cheapest premium. It's about making sure your infusions, MRIs, and specialists are covered without a fight every time you need care.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            MS drug costs, MRIs, and why plan choice matters more than you think
          </h2>
          <p className="mb-2">
            MS medications like Ocrevus can run over $80,000 per year at retail. When those drugs are given by infusion in a doctor's office, they fall under Part B, not Part D. That means your 20% coinsurance on a single infusion can be thousands of dollars.
          </p>
          <p>
            MRIs to monitor lesions are also covered under Part B. The wrong plan structure means prior authorization delays and surprise bills. The right one means predictable costs and fewer phone calls to insurance companies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Medigap underwriting with an MS diagnosis: what's actually possible
          </h2>
          <p className="mb-2">
            Your timing changes everything. During your 6-month Medigap Open Enrollment Period, no insurer can turn you down or charge more because of MS. Miss that window, and most carriers in most states can decline your application through medical underwriting.
          </p>
          <p>
            Federal guaranteed issue rights apply in specific situations: losing employer coverage, a plan leaving your area, or a carrier going bankrupt. If you're approaching 65 with an MS diagnosis, apply for Medigap 6 months before your Part B start date to lock in your rate. I'll walk you through the exact timeline.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Medicare Advantage vs. supplement when you need specialty infusions
          </h2>
          <p className="mb-2">
            Medicare Advantage plans can look attractive with low premiums and extra benefits. But research shows Advantage plans cover only about 33% of newer MS drugs compared to 81% of older medications. If your neurologist prescribes a newer therapy, you may face step therapy requirements or prior authorization denials.
          </p>
          <ul className="list-disc ml-6 mb-2 space-y-1">
            <li>Original Medicare + Medigap: See any Medicare-accepting provider. No referrals. No network restrictions. Predictable out-of-pocket costs.</li>
            <li>Medicare Advantage: Lower premiums but narrower networks, prior auth requirements, and potentially higher costs for specialty care.</li>
            <li>Initial prior authorization denials for MS treatments reach roughly 50%, though about 82% succeed on appeal.</li>
          </ul>
          <p>
            For someone managing active MS, the freedom of Original Medicare often outweighs the savings of Advantage. But your situation is specific. That's what the call is for.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Part D and the drugs that keep you stable
          </h2>
          <p className="mb-2">
            Oral MS medications like fingolimod or daily prescriptions for fatigue and pain management go through Part D. Not all Part D plans cover the same drugs at the same tier. One plan might put your medication on Tier 5 (specialty) while another puts it on Tier 3.
          </p>
          <p>
            I run your exact drug list through every available plan to find the lowest total annual cost. Not the lowest premium. The lowest actual spend when you add up premiums, deductibles, and copays together.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            SSDI, the 24-month wait, and getting Medicare before 65
          </h2>
          <p className="mb-2">
            Many MS patients qualify for Medicare through SSDI well before turning 65. After receiving disability benefits for 24 months, Medicare kicks in automatically. But you still face plan decisions: Part D enrollment, whether to add a supplement, and how to coordinate with any existing coverage.
          </p>
          <p>
            Getting this right from the start prevents the late enrollment penalties and coverage gaps that cause real financial damage. The Part B late enrollment penalty alone is 10% per year you delayed, and it lasts for life.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Work with a broker who understands MS is more than what shows on the surface
          </h2>
          <p className="mb-2">
            I've talked with people whose medication costs have driven them to bankruptcy. People who skipped infusions because they lost coverage for two years. People terrified that aging off a parent's insurance means losing access to the one drug keeping them stable.
          </p>
          <p>
            You don't need a sales pitch. You need someone who'll sit with your drug list, your diagnosis timeline, and your budget, then show you exactly what each plan will cost. My consultations are free. I get paid by the insurance carriers, not by you.
          </p>
        </section>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center my-10">
          <p className="text-xl font-semibold mb-2">
            Talk to a broker who gets it. No cost, no pressure.
          </p>
          <p className="text-lg mb-3">
            Call{" "}
            <a
              href="tel:8555591700"
              className="text-blue-700 font-bold hover:underline"
            >
              855-559-1700
            </a>{" "}
            or{" "}
            <Link
              href="/quote"
              className="text-blue-700 font-bold hover:underline"
            >
              Get a Free Quote
            </Link>
          </p>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
                className="text-blue-700 hover:underline"
              >
                Medigap Plan G: What It Covers and What It Costs
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-supplement/new-jersey/vs-medicare-advantage"
                className="text-blue-700 hover:underline"
              >
                Medicare Advantage vs. Medigap: How to Decide
              </Link>
            </li>
            <li>
              <Link
                href="/learn/medicare-parts-explained"
                className="text-blue-700 hover:underline"
              >
                Medicare Part D Drug Plans: Finding the Right Fit
              </Link>
            </li>
            <li>
              <Link
                href="/services/you-get-a-medicare-supplement-if-you-are-on-disability"
                className="text-blue-700 hover:underline"
              >
                Medicare Through Disability: What to Know Before 65
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
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/basics/get-started-with-medicare" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Get Started with Medicare</a> and <a href="https://www.medicare.gov/health-drug-plans/health-plans/your-coverage-options" rel="noopener noreferrer" target="_blank" className="underline">Your Medicare Coverage Options</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey help: <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">NJ residents: free counseling is available through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-700 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey help: <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a></div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific help, contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey help: <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a></div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">NJ residents can also get free, unbiased Medicare counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
      </section>
      </article>
    </>
  );
}