import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for stroke survivors | Free Plan Review | MedicareYourself",
  description:
    "Stroke survivor Medicare broker — compare plans covering rehab, therapy, home health & DME. Free plan review with Anthony Orner. Call 855-559-1700 today.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-stroke-survivors" },
  openGraph: {
    title:
      "Medicare broker for stroke survivors | Free Plan Review | MedicareYourself",
    description:
      "Medicare broker for stroke survivors needing rehab, therapy, and specialist coverage. Anthony Orner finds the right plan. Free review.",
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
      name: "Medicare Broker for Stroke Survivors",
      item: "https://medicareyourself.com/services/medicare-broker-for-stroke-survivors",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Stroke Survivors — Plans That Support the Rebuilding Process",
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
    "https://medicareyourself.com/services/medicare-broker-for-stroke-survivors",
};

const faqs = [
  {
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. Medicare brokers are paid by the insurance carriers, not by you. My plan reviews, comparisons, and enrollment help are completely free to stroke survivors and their families.",
  },
  {
    question: "Do stroke victims qualify for Medicare?",
    answer:
      "If you're 65 or older, you qualify for Medicare regardless of health history. If you're under 65 and received Social Security Disability (SSDI) for 24 months after a stroke, you also qualify. Some people under 65 may qualify sooner through End-Stage Renal Disease or ALS provisions.",
  },
  {
    question:
      "Can I switch from Medicare Advantage to Original Medicare after a stroke?",
    answer:
      "Outside of the annual Open Enrollment Period (October 15 through December 7), switching options are limited. However, Medicare Advantage enrollees can switch to Original Medicare during the Medicare Advantage Open Enrollment Period from January 1 through March 31. Certain qualifying events may also trigger Special Enrollment. Call me to review your specific situation.",
  },
  {
    question: "Does Medicare cover long-term rehabilitation after a stroke?",
    answer:
      "Medicare Part A covers inpatient rehab and skilled nursing facility stays (days 1 through 20 at $0 coinsurance, days 21 through 100 at $209.50/day in 2026). Part B covers outpatient physical, speech, and occupational therapy when deemed medically necessary. Coverage is not unlimited, so the right supplemental plan matters.",
  },

  {
    question: "Does Medicare cover speech and occupational therapy after a stroke?",
    answer:
      "Yes. Medicare Part B covers outpatient speech-language pathology and occupational therapy when your doctor certifies the services are medically necessary. There is no longer a hard cap on therapy services, but your provider must document that continued care is reasonable. Coinsurance and the Part B deductible still apply.",
  },
  {
    question: "Will Medicare pay for a skilled nursing facility after a stroke hospital stay?",
    answer:
      "Medicare Part A covers skilled nursing facility care after a qualifying inpatient hospital stay of at least three days, as long as skilled care is needed for stroke recovery. Days 1-20 have $0 coinsurance and days 21-100 require a daily coinsurance. After day 100 in a benefit period, you are responsible for all costs.",
  },
  {
    question: "Does a Medicare Supplement plan help with stroke recovery costs?",
    answer:
      "Yes. Medigap plans can cover the Part A hospital deductible, skilled nursing coinsurance, and the 20% Part B coinsurance on therapy and specialist visits. For stroke survivors with ongoing rehab needs, this predictable cost structure often saves money. I compare Medigap and Advantage options side by side so you can see the full picture.",
  }
,
  {
    question: "What should stroke survivors look for in a Medicare plan?",
    answer:
      "Focus on access to neurologists, rehabilitation facilities, and outpatient therapy providers in the plan's network. Also review prescription drug coverage for blood thinners and blood pressure medications, and check whether durable medical equipment like walkers or wheelchairs is covered. A broker can compare these details across plans side by side.",
  },
  {
    question: "Does Medicare cover home health care after a stroke?",
    answer:
      "Yes. Medicare Part A and Part B cover medically necessary home health services when ordered by your doctor and provided by a Medicare-certified agency. Covered services can include part-time skilled nursing, physical therapy, speech-language pathology, and occupational therapy. You must be considered homebound to qualify.",
  }
,
  {
    question: "Will my stroke specialists and rehab facilities be covered if I switch plans?",
    answer:
      "It depends on the plan type. Original Medicare is accepted by any provider who takes Medicare nationwide, while Medicare Advantage plans use networks that vary by carrier. Before switching, I verify that your neurologist, rehab center, and therapy providers are in-network so your recovery isn't disrupted.",
  },
  {
    question: "Does Medicare cover home health care after a stroke?",
    answer:
      "Yes. Medicare Part A and Part B cover medically necessary home health services, including skilled nursing, physical therapy, speech-language pathology, and occupational therapy, when ordered by your doctor and provided by a Medicare-certified home health agency. You must be considered homebound to qualify.",
  },
  {
    question: "What Medicare plan is best for a stroke survivor?",
    answer:
      "There is no single best plan — it depends on your providers, prescriptions, budget, and recovery needs. Many stroke survivors prefer Original Medicare paired with a Medigap plan and a standalone Part D plan for predictable costs and broad provider access. I review your specific situation and compare options at no cost.",
  }
,
  {
    question: "What should stroke survivors look for when comparing Medicare plans during Open Enrollment?",
    answer:
      "Focus on whether your neurologist, rehab facility, and therapists are in-network, and check prescription drug coverage for blood thinners and blood pressure medications. Review out-of-pocket maximums, therapy coverage limits, and any prior authorization requirements for rehab services. Open Enrollment runs October 15 through December 7 each year and is your main chance to switch plans.",
  },
  {
    question: "Should a stroke survivor choose Medicare Advantage or Original Medicare with a Supplement?",
    answer:
      "It depends on your providers, budget, and how often you need specialist care. Original Medicare paired with a Medigap plan typically offers broader provider access and more predictable out-of-pocket costs, which can matter during long rehab. Medicare Advantage may include extras like transportation or fitness benefits but usually requires network providers and prior authorizations. I'll walk through both options with you.",
  },
  {
    question: "Can a family member or caregiver help manage Medicare decisions for a stroke survivor?",
    answer:
      "Yes. With proper authorization, a spouse, adult child, or designated representative can join calls, review plans, and help with enrollment. I regularly work with care partners to make sure the stroke survivor's medical needs and provider preferences drive the plan choice.",
  }
,
  {
    question: "Does Medicare cover home health care after a stroke?",
    answer:
      "Yes. Medicare Part A and Part B cover medically necessary home health services for stroke survivors who are considered homebound and need skilled care, including intermittent skilled nursing, physical therapy, speech-language pathology, and occupational therapy. A doctor must certify the need and a Medicare-certified home health agency must provide the care.",
  },
  {
    question: "Will Medicare pay for a wheelchair or walker after a stroke?",
    answer:
      "Medicare Part B covers durable medical equipment (DME) such as wheelchairs, walkers, and hospital beds when your doctor prescribes them as medically necessary for use in your home. You'll typically be responsible for the Part B deductible and coinsurance, and the equipment must come from a Medicare-approved supplier.",
  },
  {
    question: "Can a Medicare Advantage plan be better for stroke recovery than Original Medicare?",
    answer:
      "It depends. Some Medicare Advantage plans bundle extras like transportation to therapy, over-the-counter benefits, or expanded rehab support, but they use provider networks and require prior authorization for many services. Original Medicare with a Medigap plan offers broader provider access and more predictable out-of-pocket costs. I'll walk you through both side by side.",
  }
,
  {
    question: "What stroke-related equipment and home medical supplies does Medicare cover?",
    answer:
      "Medicare Part B covers durable medical equipment (DME) deemed medically necessary by your doctor, such as walkers, wheelchairs, hospital beds, and canes. After meeting the Part B deductible, you typically pay coinsurance for DME from Medicare-approved suppliers. Some Medicare Advantage plans include additional benefits like grab bars or shower seats that Original Medicare does not cover.",
  },
  {
    question: "Should a stroke survivor choose Medicare Advantage or Original Medicare with a Medigap plan?",
    answer:
      "It depends on your providers, prescriptions, and recovery needs. Original Medicare with a Medigap plan offers broad provider access and predictable out-of-pocket costs, which can help if you see many specialists or need ongoing rehab. Medicare Advantage may offer lower premiums and extra benefits but uses networks and prior authorization. I review both side by side so you can decide with full information.",
  },
  {
    question: "Can a caregiver or family member help manage Medicare decisions for a stroke survivor?",
    answer:
      "Yes. With written authorization, a family member or caregiver can speak with Medicare, brokers, and insurance carriers on the survivor's behalf. I regularly work with adult children and spouses during plan reviews, especially when aphasia or cognitive changes make phone calls difficult. Call 855-559-1700 to set up a family-friendly review.",
  }
,
  {
    question: "Does Medicare cover durable medical equipment like walkers or wheelchairs after a stroke?",
    answer:
      "Yes. Medicare Part B covers medically necessary durable medical equipment (DME) such as walkers, wheelchairs, hospital beds, and canes when prescribed by your doctor. You'll typically be responsible for the Part B deductible and coinsurance. A Medigap plan or Medicare Advantage plan can help reduce those out-of-pocket costs.",
  },
  {
    question: "When should a stroke survivor review their Medicare plan?",
    answer:
      "The Medicare Annual Open Enrollment Period (October 15 through December 7) is the main window to compare plans and switch coverage for the following year. After a stroke, your care needs often change — new specialists, therapies, and medications — so an annual review helps ensure your plan still fits. I offer free plan reviews any time of year.",
  },
  {
    question: "Will Medicare cover home health care after a stroke?",
    answer:
      "Yes. Medicare Part A and Part B can cover intermittent skilled nursing care, physical therapy, speech-language pathology, and occupational therapy at home if you are homebound and your doctor certifies the need. Home health aide services may also be covered alongside skilled care. Coverage requires care from a Medicare-certified home health agency.",
  }
,
  {
    question: "Does Medicare cover durable medical equipment like walkers or wheelchairs after a stroke?",
    answer:
      "Yes. Medicare Part B covers durable medical equipment (DME) such as walkers, wheelchairs, hospital beds, and canes when your doctor prescribes them as medically necessary. You typically pay the Part B coinsurance after meeting the deductible. The right Medigap or Medicare Advantage plan can reduce or eliminate that out-of-pocket cost.",
  },
  {
    question: "Will Medicare cover home health care after a stroke?",
    answer:
      "Yes. If your doctor certifies that you are homebound and need skilled nursing or therapy services, Medicare Part A and Part B cover intermittent home health care, including physical therapy, speech-language pathology, and occupational therapy. Home health aide services may also be covered when tied to skilled care. Coverage requires care from a Medicare-certified home health agency.",
  },
  {
    question: "Is a Medicare Supplement or Medicare Advantage plan better for stroke survivors?",
    answer:
      "It depends on your providers, budget, and recovery needs. Medicare Supplement (Medigap) plans pair with Original Medicare and offer broad provider access plus predictable out-of-pocket costs — often a strong fit for ongoing rehab and specialist care. Medicare Advantage plans may include extras like transportation or fitness benefits but use networks and prior authorization. I'll compare both based on your situation — call 855-559-1700.",
  }
,
  {
    question: "Does Medicare cover home health care after a stroke?",
    answer:
      "Yes. If your doctor certifies you are homebound and need skilled care, Medicare Part A and Part B cover intermittent skilled nursing, physical therapy, speech-language pathology, and occupational therapy at home. Home health aide services may also be covered when tied to skilled care. A Medicare-certified home health agency must provide the services.",
  },
  {
    question: "Will Medicare pay for durable medical equipment like a wheelchair or walker after a stroke?",
    answer:
      "Yes. Medicare Part B covers durable medical equipment (DME) such as wheelchairs, walkers, hospital beds, and commode chairs when your doctor prescribes them as medically necessary. You typically pay the Part B coinsurance after meeting the deductible. The supplier must be enrolled in Medicare for the equipment to be covered.",
  },
  {
    question: "Should a stroke survivor choose Medicare Advantage or a Medigap plan?",
    answer:
      "It depends on your providers, prescriptions, and out-of-pocket tolerance. Medigap plans pair with Original Medicare and offer broad provider access plus predictable cost-sharing, which can be valuable when rehab and specialist visits are frequent. Medicare Advantage plans often bundle drug coverage and extras but use networks and prior authorization. I'll compare both sides for your situation — call 855-559-1700.",
  }
,
  {
    question: "Does Medicare cover durable medical equipment after a stroke?",
    answer:
      "Yes. Medicare Part B covers durable medical equipment (DME) like wheelchairs, walkers, hospital beds, and canes when prescribed by your doctor as medically necessary. You typically pay the Part B coinsurance after meeting the Part B deductible. The supplier must be enrolled in Medicare for coverage to apply.",
  },
  {
    question: "Will Medicare pay for home health care after a stroke?",
    answer:
      "Yes, if you're homebound and need skilled nursing or therapy services certified by your doctor. Medicare covers part-time skilled nursing, physical therapy, speech-language pathology, and occupational therapy at home through a Medicare-certified home health agency. Custodial care alone (help with bathing or dressing) is not covered.",
  },
  {
    question: "Should a stroke survivor choose Medicare Advantage or a Medigap plan?",
    answer:
      "It depends on your providers, prescriptions, and budget. Medigap plans typically offer broader provider access and predictable out-of-pocket costs, which can matter for ongoing rehab and specialist care. Medicare Advantage may include extras like transportation or fitness benefits but uses networks. I'll compare both based on your stroke recovery needs — call 855-559-1700.",
  }
,
  {
    question: "Does Medicare cover durable medical equipment like wheelchairs or walkers after a stroke?",
    answer:
      "Yes. Medicare Part B covers medically necessary durable medical equipment (DME) such as wheelchairs, walkers, hospital beds, and canes when prescribed by your doctor. You typically pay the Part B coinsurance after meeting the annual deductible. A Medicare Supplement plan can help cover those out-of-pocket costs.",
  },
  {
    question: "Will Medicare pay for home health care after a stroke?",
    answer:
      "Medicare Part A and Part B cover eligible home health services — including intermittent skilled nursing, physical therapy, speech-language pathology, and occupational therapy — when ordered by your doctor and provided by a Medicare-certified home health agency. You must be considered homebound to qualify. Personal care alone (bathing, dressing) is not covered if it's the only service needed.",
  },
  {
    question: "Should a stroke survivor choose Medicare Advantage or Original Medicare with a Medigap plan?",
    answer:
      "It depends on your providers, prescriptions, and recovery needs. Original Medicare paired with a Medigap plan offers broad provider access and predictable out-of-pocket costs, which can matter when you're seeing multiple specialists. Medicare Advantage may offer extras like transportation or fitness benefits but uses networks. I'll compare both side-by-side for your situation.",
  }
,
  {
    question: "Will Medicare pay for home health care after a stroke?",
    answer:
      "Yes. Medicare Part A and Part B cover medically necessary home health services when you're certified as homebound by your doctor. This can include skilled nursing, physical therapy, speech-language pathology, and occupational therapy delivered in your home. A Medicare-certified home health agency must provide the care.",
  },
  {
    question: "Does Medicare cover durable medical equipment like walkers or wheelchairs after a stroke?",
    answer:
      "Yes. Medicare Part B covers medically necessary durable medical equipment (DME) such as walkers, wheelchairs, hospital beds, and canes when prescribed by your doctor. You'll typically be responsible for the Part B deductible and a coinsurance percentage. The supplier must be enrolled in Medicare for the equipment to be covered.",
  },
  {
    question: "Are stroke-related prescription medications covered by Medicare?",
    answer:
      "Prescription medications such as blood thinners, blood pressure drugs, and cholesterol medications are generally covered under Medicare Part D or through a Medicare Advantage plan with drug coverage. Each plan has its own formulary, so the same medication may cost very differently from one plan to another. I can compare your exact drug list across plans during a free review.",
  }
,
  {
    question: "What Medicare coverage helps with durable medical equipment after a stroke?",
    answer:
      "Medicare Part B covers durable medical equipment (DME) like wheelchairs, walkers, hospital beds, and canes when prescribed by your doctor as medically necessary. After meeting the Part B deductible, you typically pay a coinsurance for covered equipment. A Medigap or Medicare Advantage plan can help reduce these out-of-pocket costs.",
  },
  {
    question: "Does Medicare cover home health care after a stroke?",
    answer:
      "Yes. Medicare Part A and Part B cover intermittent skilled nursing care, physical therapy, speech-language pathology, and occupational therapy at home when ordered by your doctor and you are considered homebound. The care must be provided through a Medicare-certified home health agency. Coverage typically includes part-time services rather than continuous 24-hour care.",
  },
  {
    question: "Can a Medicare broker help me find a plan that includes my neurologist and rehab center?",
    answer:
      "Yes. As a licensed broker, I check provider networks across Medicare Advantage and supplement plans to confirm your neurologist, rehab facility, and therapists are covered. This is one of the most important steps for stroke survivors who already have an established care team. Call 855-559-1700 for a free network check.",
  }
,
  {
    question: "Does Medicare cover home health care after a stroke?",
    answer:
      "Yes. If your doctor certifies you are homebound and need skilled nursing or therapy, Medicare Part A and/or Part B cover intermittent home health services, including physical therapy, speech-language pathology, and occupational therapy. A Medicare-certified home health agency must provide the care.",
  },
  {
    question: "Does Medicare cover durable medical equipment like walkers or wheelchairs after a stroke?",
    answer:
      "Yes. Medicare Part B covers medically necessary durable medical equipment (DME) such as walkers, wheelchairs, hospital beds, and canes when prescribed by your doctor. You typically pay the Part B coinsurance after meeting the Part B deductible, and the supplier must be enrolled in Medicare.",
  },
  {
    question: "Is a Medicare Supplement or Medicare Advantage plan better for stroke survivors?",
    answer:
      "It depends on your providers, budget, and ongoing care needs. Medicare Supplement plans offer broader provider access and predictable out-of-pocket costs for frequent therapy and specialist visits, while Medicare Advantage plans may bundle extras but use networks and prior authorization. I review both sides with you on a free call at 855-559-1700.",
  }
,
  {
    question: "Does Medicare cover home health care after a stroke?",
    answer:
      "Yes. Medicare Part A and Part B cover medically necessary home health services, including part-time skilled nursing, physical therapy, speech-language pathology, and occupational therapy, when ordered by your doctor. You must be considered homebound and receive services from a Medicare-certified home health agency. Call 855-559-1700 to review which plans best coordinate home health benefits.",
  },
  {
    question: "Will Medicare pay for durable medical equipment like walkers or wheelchairs after a stroke?",
    answer:
      "Yes. Medicare Part B covers durable medical equipment (DME) such as walkers, wheelchairs, hospital beds, and certain communication devices when prescribed by your doctor as medically necessary. You typically pay the Part B coinsurance after meeting the Part B deductible. A Medigap or Medicare Advantage plan can help reduce out-of-pocket DME costs.",
  },
  {
    question: "Does Medicare cover follow-up visits with neurologists and specialists?",
    answer:
      "Yes. Medicare Part B covers medically necessary visits with neurologists, cardiologists, and other specialists involved in your stroke recovery. Original Medicare lets you see any provider who accepts Medicare, while Medicare Advantage plans typically use provider networks and may require referrals.",
  }
,
  {
    question: "Does Medicare cover durable medical equipment (DME) needed after a stroke?",
    answer:
      "Yes. Medicare Part B covers medically necessary durable medical equipment such as wheelchairs, walkers, hospital beds, and certain communication devices when prescribed by your doctor. You'll typically pay the Part B coinsurance after meeting the deductible, and the supplier must be Medicare-approved. A Medigap or Medicare Advantage plan can help with the out-of-pocket portion.",
  },
  {
    question: "Does Medicare cover home health care after a stroke?",
    answer:
      "Yes. Medicare Part A and Part B cover part-time skilled nursing care, physical therapy, speech-language pathology, and occupational therapy at home when you're certified as homebound and a doctor orders the care. The services must be provided by a Medicare-certified home health agency. I can help you compare plans that strengthen home health and caregiver support benefits.",
  },
  {
    question: "Should a stroke survivor choose Medicare Advantage or Original Medicare with a Medigap plan?",
    answer:
      "It depends on your providers, prescriptions, and how much predictability you want in costs. Original Medicare with a Medigap plan offers broad provider access and predictable out-of-pocket costs, which many stroke survivors prefer for ongoing specialist and therapy care. Medicare Advantage may offer extra benefits like transportation or OTC allowances but uses networks. I'll compare both sides for your situation — call 855-559-1700.",
  }
,
  {
    question: "Will a Medicare Supplement plan help cover stroke recovery costs?",
    answer:
      "Yes. Medigap plans help cover the out-of-pocket costs Original Medicare leaves behind, including hospital coinsurance, skilled nursing facility coinsurance after day 20, and the Part B coinsurance for therapy visits. For stroke survivors who use a lot of rehab and specialist care, a Medigap plan can make budgeting much more predictable.",
  },
  {
    question: "Does Medicare cover durable medical equipment like walkers or wheelchairs after a stroke?",
    answer:
      "Yes. Medicare Part B covers medically necessary durable medical equipment such as walkers, wheelchairs, hospital beds, and certain communication devices when prescribed by your doctor. You generally pay the Part B coinsurance after meeting the Part B deductible, and the supplier must be Medicare-approved.",
  },
  {
    question: "Can a Medicare broker help me coordinate coverage with my neurologist and rehab team?",
    answer:
      "Yes. As an independent broker, I review which plans include your neurologist, rehab facility, and therapists in network, and I check that your prescriptions are on the plan's formulary. That way your existing care team stays intact when you enroll or switch plans.",
  }
,
  {
    question: "Does Medicare cover durable medical equipment like walkers or wheelchairs after a stroke?",
    answer:
      "Yes. Medicare Part B covers durable medical equipment (DME) such as walkers, wheelchairs, hospital beds, and canes when your doctor prescribes them as medically necessary for home use. You'll typically pay the Part B coinsurance after meeting the Part B deductible. Choosing a supplier that accepts Medicare assignment helps keep costs predictable.",
  },
  {
    question: "Will Medicare pay for home health care during stroke recovery?",
    answer:
      "Medicare Part A and Part B cover eligible home health services — including part-time skilled nursing, physical therapy, speech-language pathology, and occupational therapy — when you're homebound and a doctor certifies the need. Services must be provided by a Medicare-certified home health agency. Custodial care alone, like help with bathing or meals, is not covered.",
  },
  {
    question: "Are stroke medications covered by Medicare?",
    answer:
      "Medications administered during a hospital stay fall under Part A, while drugs given in a doctor's office or outpatient setting are typically covered by Part B. Prescription medications you take at home — such as blood thinners or blood pressure drugs — are covered through a Medicare Part D plan or a Medicare Advantage plan that includes drug coverage. I'll help you compare formularies so your specific prescriptions are covered affordably.",
  }
,
  {
    question: "Does Medicare cover home health care after a stroke?",
    answer:
      "Yes. Medicare Part A and Part B cover intermittent skilled nursing care, physical therapy, speech-language pathology, and occupational therapy at home when you are considered homebound and your doctor certifies the services are medically necessary. Home health aide services may also be covered when tied to skilled care. Coverage must be provided by a Medicare-certified home health agency.",
  },
  {
    question: "Will Medicare pay for durable medical equipment like wheelchairs or walkers after a stroke?",
    answer:
      "Yes. Medicare Part B covers durable medical equipment (DME) such as wheelchairs, walkers, hospital beds, and canes when prescribed by your doctor for use in the home. After meeting the Part B deductible, you typically pay coinsurance for the equipment. The supplier must be Medicare-approved for coverage to apply.",
  },
  {
    question: "Are stroke prevention screenings covered by Medicare?",
    answer:
      "Medicare Part B covers several preventive services that help reduce stroke risk, including cardiovascular disease screenings, diabetes screenings, and blood pressure checks during your Annual Wellness Visit. Many of these preventive services are covered at no cost when you see a provider who accepts Medicare assignment.",
  }
,
  {
    question: "Does Medicare cover home health care after a stroke?",
    answer:
      "Yes. Medicare Part A and Part B cover intermittent skilled nursing care, physical therapy, speech-language pathology, and occupational therapy at home when you are certified as homebound and your doctor orders a plan of care. Home health aide services may also be covered when you already receive skilled care. A Medicare-certified home health agency must provide the services.",
  },
  {
    question: "Does Medicare cover durable medical equipment like walkers or wheelchairs after a stroke?",
    answer:
      "Yes. Medicare Part B covers durable medical equipment (DME) such as walkers, wheelchairs, hospital beds, and canes when your doctor prescribes them as medically necessary for use at home. You'll typically pay a percentage of the Medicare-approved amount after meeting the Part B deductible. Choosing suppliers that accept Medicare assignment keeps costs predictable.",
  },
  {
    question: "Should a stroke survivor choose Medicare Advantage or a Medigap plan?",
    answer:
      "It depends on your providers, rehab needs, and budget. Medigap paired with Original Medicare offers broad provider access and predictable out-of-pocket costs — helpful when you need specialists or out-of-network rehab. Medicare Advantage may include extras like transportation or fitness benefits but uses network rules and prior authorization. Call 855-559-1700 for a side-by-side review.",
  }
];

export default function MedicareBrokerForStrokeSurvivors() {
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
        <span className="text-gray-700">Medicare Broker for Stroke Survivors</span>
      </nav>

      <article className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Medicare Broker for Stroke Survivors — Plans That Support the Rebuilding Process
        </h1>

        <Image
          src="/images/medicare-broker-for-stroke-survivors.webp"
          alt="Medicare broker for stroke survivors"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Medicare broker for stroke survivors isn't a niche title I invented. It's what families search for when they realize the wrong plan can block the rehab their loved one desperately needs. The words that won't come out right, the hand that won't grip, the exhaustion nobody else sees because you "look fine."
        </p>
        <p className="text-lg mb-6">
          I'm Anthony Orner, a licensed Medicare broker. I help stroke survivors and their caregivers find plans that actually cover the rebuilding process.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How Medicare covers speech, physical, and occupational therapy after stroke
          </h2>
          <p className="mb-2">
            Medicare Part A covers inpatient rehab and skilled nursing facility (SNF) stays. Days 1 through 20 cost $0 in coinsurance. Days 21 through 100 cost $209.50/day in 2026. After day 100, Medicare stops paying entirely.
          </p>
          <p className="mb-2">
            Part B covers outpatient physical therapy, occupational therapy, and speech-language pathology when your doctor orders it as medically necessary. There's no fixed cap, but Medicare reviews utilization at certain dollar thresholds.
          </p>
          <p>
            The gap between what you need and what gets authorized is where the right plan makes the difference.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Supplement vs. Advantage: which protects stroke survivors better
          </h2>
          <p className="mb-2">
            This is the decision I walk families through most often. Medicare Advantage plans have out-of-pocket maximums, which sounds protective. But many Advantage plans require prior authorization for rehab days and may limit you to 10 to 14 days in a SNF before cutting coverage.
          </p>
          <p className="mb-2">
            Original Medicare with a Medigap supplement (like Plan G) lets you access any Medicare-accepting provider and covers that $209.50/day SNF coinsurance. No network restrictions. No authorization delays during the critical recovery window.
          </p>
          <p>
            For stroke survivors facing months of therapy, that flexibility can be the difference between recovering and getting stuck.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Prescription coverage for blood thinners, statins, and recovery meds
          </h2>
          <p className="mb-2">
            After a stroke, your medication list grows fast. Blood thinners like warfarin or Eliquis, statins, anti-seizure drugs, blood pressure medications. Each Part D plan has its own formulary and tier pricing.
          </p>
          <p>
            I run your actual prescriptions through plan formularies to find the Part D plan with the lowest total cost. Not the lowest premium. The lowest cost when you actually fill your medications.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why caregivers call me more than survivors do
          </h2>
          <p className="mb-2">
            Most of my calls come from an adult child or a spouse who's working full time, managing rehab schedules, and trying to decode insurance denials at midnight. They're exhausted. The system wasn't built for families in crisis.
          </p>
          <p>
            I take the insurance piece off your plate. I handle the plan comparison, the enrollment, and the follow-up.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            When you can switch plans after a stroke
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Annual Open Enrollment:</strong> October 15 through December 7. You can switch from Advantage to Original Medicare (or vice versa) and choose new Part D coverage.
            </li>
            <li>
              <strong>Medicare Advantage Open Enrollment:</strong> January 1 through March 31. Advantage enrollees can switch to Original Medicare and pick up a Part D plan.
            </li>
            <li>
              <strong>Special Enrollment Periods:</strong> Certain qualifying events (like moving, losing employer coverage, or institutional care) may open a window to change plans outside standard enrollment.
            </li>
          </ul>
          <p className="mt-2">
            Timing matters. Call me before you assume you're locked in.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Request a free review from a broker who understands invisible recovery
          </h2>
          <p className="mb-2">
            Stroke recovery doesn't follow a straight line. Some weeks feel like progress, others like starting over. Your Medicare plan should handle both without making you fight for every therapy session.
          </p>
          <p>
            I'll review your current coverage, check your prescriptions, and tell you honestly if there's a better option. No cost, no pressure, no commitment.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center mb-10">
          <p className="text-xl font-semibold mb-2">
            Talk to a Medicare broker who gets it.
          </p>
          <p className="text-lg mb-4">
            Call{" "}
            <a href="tel:8555591700" className="underline font-bold">
              855-559-1700
            </a>{" "}
            or{" "}
            <Link href="/quote" className="underline font-bold">
              Get a Free Quote
            </Link>
          </p>
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
                Part D Prescription Drug Plans Explained
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-dementia-patients"
                className="text-blue-600 hover:underline"
              >
                Medicare Help for Caregivers
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
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/coverage/inpatient-rehabilitation-care" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Inpatient Rehabilitation Care</a> and <a href="https://www.medicare.gov/coverage/outpatient-therapy" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Outpatient Therapy Coverage</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Free local help: <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> offers unbiased Medicare counseling for stroke survivors and caregivers in every state.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Free unbiased counseling: <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a></div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need free local counseling? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for unbiased Medicare guidance.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need free local counseling? Find your state's SHIP counselor at the <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">official State Health Insurance Assistance Program directory</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased Medicare counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need local help? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling in your state.</div>
      </section>
      </article>
    </>
  );
}