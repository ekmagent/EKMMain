import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for glaucoma patients | Free Coverage Review | MedicareYourself",
  description:
    "Glaucoma and Medicare? Compare plans covering drops, SLT laser & surgery with broker Anthony Orner. Free coverage review — call 855-559-1700 today.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-glaucoma-patients" },
  openGraph: {
    title:
      "Medicare broker for glaucoma patients | Free Coverage Review | MedicareYourself",
    description:
      "Medicare broker for glaucoma patients comparing plans covering eye drops, laser treatment, and surgery. Anthony Orner offers free reviews in NJ.",
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
      name: "Medicare Broker for Glaucoma Patients",
      item: "https://medicareyourself.com/services/medicare-broker-for-glaucoma-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Glaucoma Patients: Find Plans That Cover Drops, Lasers, and Surgery",
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
    question: "Will Medicare pay for glaucoma treatment?",
    answer:
      "Yes. Medicare Part B covers glaucoma screenings once every 12 months for high-risk beneficiaries and pays 80% of the Medicare-approved amount for medically necessary treatment including laser procedures and surgery. You pay the remaining 20% coinsurance after meeting the Part B deductible ($283 in 2026). Prescription eye drops are covered under Part D, but formulary placement and copays vary by plan.",
  },
  {
    question: "Does Medicare cover selective laser trabeculoplasty for glaucoma?",
    answer:
      "Medicare Part B covers selective laser trabeculoplasty (SLT) when your ophthalmologist determines it's medically necessary. You'll pay 20% coinsurance after the Part B deductible. Some Medicare Advantage plans may have different cost-sharing, so it's worth comparing before scheduling the procedure.",
  },
  {
    question: "How much does glaucoma surgery cost out of pocket?",
    answer:
      "Out-of-pocket costs depend on your coverage type. With Original Medicare, you pay the Part B deductible ($283 in 2026) plus 20% of the Medicare-approved amount. For a procedure like trabeculectomy or MIGS, that 20% can add up to hundreds or even over a thousand dollars. A Medigap plan can cover most or all of that coinsurance. Medicare Advantage copays vary by plan and network.",
  },
  {
    question: "What benefits can you claim if you have glaucoma?",
    answer:
      "Medicare covers annual glaucoma screenings (for high-risk patients), diagnostic testing, laser treatments like SLT, surgical procedures including trabeculectomy and MIGS, and follow-up visits under Part B. Prescription eye drops like latanoprost or timolol fall under Part D. Some Medicare Advantage plans add routine vision benefits that Original Medicare doesn't include.",
  },

  {
    question: "How often does Medicare cover glaucoma screenings?",
    answer:
      "Medicare Part B covers a glaucoma screening once every 12 months for beneficiaries at high risk. High-risk categories include people with diabetes, a family history of glaucoma, African Americans age 50 or older, and Hispanic Americans age 65 or older. The screening must be performed or supervised by an eye doctor legally authorized to provide the service in your state.",
  },
  {
    question: "Are glaucoma eye drops covered by Original Medicare?",
    answer:
      "No. Original Medicare (Parts A and B) does not cover self-administered prescription eye drops for glaucoma. These medications fall under Medicare Part D or the prescription drug benefit included in most Medicare Advantage plans. Formulary tier, copay, and prior authorization rules vary by plan, so comparing Part D drug lists before enrollment is important.",
  },
  {
    question: "Can a Medigap plan lower my glaucoma treatment costs?",
    answer:
      "Yes. Medigap (Medicare Supplement) plans help pay the 20% coinsurance Original Medicare leaves behind for covered services like laser procedures, diagnostic testing, and surgery. Plans G and N cover most out-of-pocket costs after the Part B deductible ($283 in 2026). A free plan review can help you compare Medigap premiums against Medicare Advantage copays for your specific treatment plan.",
  }
,
  {
    question: "Who qualifies as high risk for a Medicare-covered glaucoma screening?",
    answer:
      "Medicare considers you high risk if you have diabetes, a family history of glaucoma, are African American and age 50 or older, or are Hispanic and age 65 or older. If you meet one of these criteria, Part B covers a screening once every 12 months when performed or supervised by a state-authorized eye doctor. Talk with your ophthalmologist to confirm eligibility before scheduling.",
  },
  {
    question: "Are glaucoma eye drops covered by Medicare?",
    answer:
      "Prescription glaucoma eye drops such as latanoprost, timolol, and brimonidine are covered under Medicare Part D, not Part B. Each Part D or Medicare Advantage plan with drug coverage has its own formulary, tier placement, and copay structure, so the same medication can cost very different amounts depending on your plan. A broker can compare plans using your specific drug list to minimize annual out-of-pocket costs.",
  },
  {
    question: "Does Medicare Advantage cover glaucoma care differently than Original Medicare?",
    answer:
      "Medicare Advantage plans must cover everything Original Medicare covers, including glaucoma screenings, diagnostic testing, laser procedures, and surgery. However, cost-sharing comes in the form of copays rather than the standard 20% coinsurance, and you typically need to use in-network ophthalmologists. Many Advantage plans also bundle Part D drug coverage and routine vision benefits that Original Medicare doesn't include.",
  }
,
  {
    question: "Who is considered high-risk for glaucoma under Medicare?",
    answer:
      "Medicare considers you high-risk if you have diabetes, a family history of glaucoma, are African American and age 50 or older, or are Hispanic American and age 65 or older. If you fall into one of these categories, Part B covers a glaucoma screening once every 12 months. The screening must be performed or supervised by an eye doctor legally authorized to do so in your state.",
  },
  {
    question: "Are glaucoma eye drops covered by Medicare Part B or Part D?",
    answer:
      "Prescription glaucoma drops like latanoprost, timolol, or brimonidine are covered under Medicare Part D, not Part B. Each Part D plan has its own formulary, tier placement, and copay structure, so the same medication can cost very different amounts on different plans. Comparing drug plans annually based on your specific prescriptions is one of the most impactful things a glaucoma patient can do.",
  },
  {
    question: "Should glaucoma patients choose Medigap or Medicare Advantage?",
    answer:
      "It depends on your providers, medications, and budget. Medigap paired with Original Medicare gives you nationwide access to any provider that accepts Medicare and predictable cost-sharing for procedures like SLT or trabeculectomy. Medicare Advantage plans often include routine vision benefits but use networks and prior authorization, which can affect access to specific glaucoma specialists. A free review can help you weigh the trade-offs for your situation.",
  }
,
  {
    question: "How often does Medicare cover glaucoma screenings?",
    answer:
      "Medicare Part B covers glaucoma screenings once every 12 months for people considered high-risk. High-risk groups include people with diabetes, a family history of glaucoma, African Americans age 50 and older, and Hispanic Americans age 65 and older. The screening must be performed or supervised by an eye doctor legally authorized to do so in your state.",
  },
  {
    question: "Are glaucoma eye drops covered by Medicare?",
    answer:
      "Prescription glaucoma eye drops such as latanoprost, timolol, and brimonidine are typically covered under Medicare Part D or through a Medicare Advantage plan that includes drug coverage. Formulary placement, tier, and copay vary significantly between plans, which is why a side-by-side plan comparison matters when you take daily drops. A licensed broker can run your specific medications through each plan's formulary before you enroll.",
  },
  {
    question: "Should I choose Medigap or Medicare Advantage if I have glaucoma?",
    answer:
      "It depends on your providers, medications, and budget. Medigap paired with Original Medicare and a Part D plan offers broad access to any ophthalmologist who accepts Medicare and predictable cost-sharing on procedures like SLT or trabeculectomy. Medicare Advantage may offer lower premiums and added routine vision benefits but uses networks and prior authorization. A free review with Anthony Orner at 855-559-1700 can clarify which fits your situation.",
  }
,
  {
    question: "Does Medicare cover prescription eye drops for glaucoma?",
    answer:
      "Prescription eye drops used to treat glaucoma, such as latanoprost or timolol, are typically covered under Medicare Part D prescription drug plans. Each plan has its own formulary, tier placement, and copay structure, so the same medication can cost very different amounts depending on the plan you choose. Comparing Part D formularies during Annual Enrollment is one of the most important steps for glaucoma patients.",
  },
  {
    question: "Who is considered high-risk for Medicare glaucoma screenings?",
    answer:
      "Medicare considers you high-risk if you have diabetes, a family history of glaucoma, are African American and age 50 or older, or are Hispanic American and age 65 or older. If you meet one of these criteria, Part B covers a glaucoma screening once every 12 months when performed by a state-licensed eye doctor.",
  }
,
  {
    question: "Are glaucoma eye drops covered by Medicare?",
    answer:
      "Prescription glaucoma eye drops such as latanoprost, timolol, and brimonidine are covered under Medicare Part D, not Part B. Each Part D plan has its own formulary, tier placement, and copays, so the same medication can cost very different amounts depending on which plan you choose. Comparing formularies during the Annual Enrollment Period can help you find the lowest total cost for your specific drops.",
  },
  {
    question: "Can I see any ophthalmologist with Medicare if I have glaucoma?",
    answer:
      "With Original Medicare, you can see any ophthalmologist in the U.S. who accepts Medicare assignment, with no referral needed. Medicare Advantage plans typically use provider networks and may require you to stay in-network or get a referral to see a specialist. If keeping a specific glaucoma specialist matters, confirm their network status before enrolling in any plan.",
  },
  {
    question: "Why work with a Medicare broker if I have glaucoma?",
    answer:
      "A licensed Medicare broker can compare Part D formularies to see which plans cover your specific eye drops at the lowest tier, and check whether your ophthalmologist is in-network on Medicare Advantage options. Broker services are free to you because carriers pay the commission. Anthony Orner offers a no-cost coverage review at 855-559-1700.",
  }
,
  {
    question: "Who is eligible for Medicare-covered glaucoma screenings?",
    answer:
      "Medicare considers you high-risk and eligible for an annual glaucoma screening if you have diabetes, a family history of glaucoma, are African American and age 50 or older, or are Hispanic and age 65 or older. The screening must be performed or supervised by an eye doctor who is legally authorized to do so in your state. After the Part B deductible, you pay 20% of the Medicare-approved amount.",
  },
  {
    question: "Do Medicare Advantage plans cover glaucoma treatment differently than Original Medicare?",
    answer:
      "Medicare Advantage plans must cover everything Original Medicare covers, including glaucoma screenings, laser procedures, and surgery. However, copays, networks, and prior authorization rules vary by plan. As a licensed broker, Anthony Orner can compare specific plans in your area to confirm your ophthalmologist is in-network and review drop formularies before you enroll.",
  },
  {
    question: "Are glaucoma eye drops covered by Medicare Part D?",
    answer:
      "Yes. Prescription glaucoma eye drops such as latanoprost, timolol, and brimonidine are typically covered under Medicare Part D or the Part D portion of a Medicare Advantage plan. Each plan has its own formulary, tier placement, and copay structure, so the same drop can cost very different amounts depending on the plan you choose.",
  }
,
  {
    question: "Who is eligible for Medicare's annual glaucoma screening?",
    answer:
      "Medicare Part B covers a glaucoma screening once every 12 months for people considered high risk. That includes individuals with diabetes, a family history of glaucoma, African Americans age 50 and older, and Hispanic Americans age 65 and older. The screening must be performed or supervised by an eye doctor legally authorized to do so in your state.",
  },
  {
    question: "Are glaucoma eye drops covered by Original Medicare?",
    answer:
      "Original Medicare (Parts A and B) generally does not cover prescription glaucoma eye drops you take at home. Drops like latanoprost, timolol, or brimonidine are covered under Medicare Part D prescription drug plans or through a Medicare Advantage plan that includes drug coverage. Formulary tiers and copays vary, so comparing Part D plans during Annual Enrollment can lower your costs.",
  },
  {
    question: "Should I choose Medigap or Medicare Advantage if I have glaucoma?",
    answer:
      "It depends on how often you see specialists and which ophthalmologist you want to keep. Medigap paired with Original Medicare gives you nationwide access to any provider that accepts Medicare and helps cover the Part B coinsurance for laser and surgical procedures. Medicare Advantage may offer lower premiums and routine vision extras, but you'll need to stay in-network and follow plan rules. A free review with broker Anthony Orner at 855-559-1700 can compare both paths.",
  }
,
  {
    question: "How often does Medicare cover glaucoma screenings?",
    answer:
      "Medicare Part B covers glaucoma screenings once every 12 months for people considered high risk. That includes individuals with diabetes, a family history of glaucoma, African Americans age 50 and older, and Hispanic Americans age 65 and older. The screening must be performed or supervised by an eye doctor legally authorized to do so in your state.",
  }
,
  {
    question: "Who qualifies as high-risk for Medicare's glaucoma screening benefit?",
    answer:
      "Medicare considers you high-risk if you have diabetes, a family history of glaucoma, are African American and age 50 or older, or are Hispanic American and age 65 or older. If you meet one of these criteria, Part B covers a screening once every 12 months. The exam must be performed or supervised by an eye doctor legally authorized to do the test in your state.",
  },
  {
    question: "Are glaucoma eye drops covered under Part B or Part D?",
    answer:
      "Prescription glaucoma eye drops such as latanoprost, timolol, or brimonidine are covered under Medicare Part D, not Part B. Formulary tier, prior authorization rules, and copays vary widely between Part D plans, so comparing drug coverage each year during Annual Enrollment can make a meaningful difference. A licensed broker can run your specific medications against available plans in your ZIP code.",
  },
  {
    question: "Should glaucoma patients choose Medigap or Medicare Advantage?",
    answer:
      "It depends on your providers, medications, and budget. Medigap plans tend to offer predictable costs and broad access to any ophthalmologist who accepts Medicare, which can matter if you need ongoing specialist care or surgery. Medicare Advantage plans may include extra vision benefits but often use networks and prior authorization. A free coverage review can compare both paths side by side — call 855-559-1700.",
  }
,
  {
    question: "How often does Medicare cover glaucoma screenings?",
    answer:
      "Medicare Part B covers a glaucoma screening once every 12 months for people considered high risk. High-risk groups include people with diabetes, a family history of glaucoma, African Americans age 50 or older, and Hispanic Americans age 65 or older. The screening must be performed or supervised by a state-licensed eye doctor.",
  },
  {
    question: "Are glaucoma eye drops covered by Medicare?",
    answer:
      "Prescription glaucoma eye drops such as latanoprost, timolol, and brimonidine are covered under Medicare Part D, not Part B. Coverage and copays depend on your specific Part D plan's formulary and tier placement. A licensed broker can compare Part D plans to find one that covers your specific drops at the lowest cost.",
  },
  {
    question: "Does Medicare Advantage cover glaucoma treatment differently than Original Medicare?",
    answer:
      "Medicare Advantage plans must cover everything Original Medicare covers, including glaucoma screenings, laser treatments, and surgery. However, cost-sharing, prior authorization rules, and provider networks vary by plan. Some Advantage plans also include routine vision benefits that Original Medicare does not cover.",
  }
,
  {
    question: "Who qualifies as high-risk for Medicare's glaucoma screening benefit?",
    answer:
      "Medicare considers you high-risk if you have diabetes, a family history of glaucoma, are African American and age 50 or older, or are Hispanic American and age 65 or older. If you meet one of these criteria, Part B covers a screening once every 12 months when performed or supervised by an eye doctor legally authorized in your state. Talk with your ophthalmologist about documenting your risk factors.",
  }
,
  {
    question: "How often does Medicare cover glaucoma screenings?",
    answer:
      "Medicare Part B covers a glaucoma screening once every 12 months for people considered high-risk. High-risk groups include those with diabetes, a family history of glaucoma, African Americans age 50 and older, and Hispanic Americans age 65 and older. The screening must be performed or supervised by an eye doctor who is legally authorized to do so in your state.",
  },
  {
    question: "Are glaucoma eye drops covered by Medicare Part B or Part D?",
    answer:
      "Prescription glaucoma eye drops like latanoprost, timolol, or brimonidine are covered under Medicare Part D, not Part B. Each Part D plan has its own formulary, tier placement, and copay structure, so the same medication can cost very different amounts depending on the plan. Comparing Part D formularies during enrollment is essential if you rely on daily drops.",
  },
  {
    question: "Can a Medigap plan help with glaucoma treatment costs?",
    answer:
      "Yes. Because Original Medicare leaves you responsible for the Part B deductible and 20% coinsurance on laser treatments and surgery, a Medigap (Medicare Supplement) plan can cover most or all of that out-of-pocket exposure. Plan G and Plan N are popular choices for beneficiaries managing ongoing conditions like glaucoma. A licensed broker can compare premiums and benefits side by side.",
  }
,
  {
    question: "Who qualifies as high-risk for Medicare's annual glaucoma screening?",
    answer:
      "Medicare considers you high-risk if you have diabetes, a family history of glaucoma, are African American and age 50 or older, or are Hispanic and age 65 or older. If you meet one of these criteria, Part B covers a screening once every 12 months. The screening must be performed or supervised by an eye doctor legally authorized to do so in your state.",
  }
,
  {
    question: "Who is considered high-risk for glaucoma under Medicare's screening benefit?",
    answer:
      "Medicare considers you high-risk if you have diabetes, a family history of glaucoma, are African American and age 50 or older, or are Hispanic American and age 65 or older. If you fall into one of these groups, Medicare Part B covers a glaucoma screening once every 12 months. The screening must be performed or supervised by an eye doctor legally allowed to do so in your state.",
  }
];

export default function MedicareBrokerForGlaucomaPatients() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
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
          Medicare Broker for Glaucoma Patients
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4 leading-tight">
        Medicare Broker for Glaucoma Patients: Find Plans That Cover Drops,
        Lasers, and Surgery
      </h1>

      <Image
        src="/images/medicare-broker-for-glaucoma-patients.webp"
        alt="Medicare broker for glaucoma patients"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        A Medicare broker for glaucoma patients does something most beneficiaries don't have time to do themselves: compare how dozens of plans handle eye drops, laser procedures, and surgical coverage side by side. Glaucoma doesn't wait for open enrollment, and neither should your plan review.
      </p>
      <p className="text-lg mb-6">
        I'm Anthony Orner, a licensed Medicare broker in New Jersey. I help people with glaucoma find plans that actually match the treatment they're already getting or the procedures they need next.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          What Medicare Part B covers for glaucoma screening and treatment
        </h2>
        <p className="mb-2">
          Part B covers one glaucoma screening every 12 months if you're considered high risk. That includes anyone with diabetes, a family history of glaucoma, African Americans 50 and older, or Hispanic Americans 65 and older. The test must be performed by an ophthalmologist or optometrist legally authorized in your state.
        </p>
        <p>
          After the Part B deductible ($283 in 2026), you pay 20% of the Medicare-approved amount. Follow-up diagnostic tests and office visits related to glaucoma are also covered under Part B as medically necessary care.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Part D plans with affordable glaucoma eye drop formularies
        </h2>
        <p className="mb-2">
          Here's where things get frustrating. Two Part D plans in the same zip code can put the same eye drop on completely different cost tiers. Latanoprost might be $3 on one plan and $45 on another. Brand-name drops like Vyzulta or Rhopressa are even more unpredictable.
        </p>
        <p>
          I check your specific prescriptions against every available formulary. If you're using two or three drops daily, the difference between plans can be hundreds of dollars a year.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          SLT, trabeculectomy, and MIGS: how Medicare handles surgical options
        </h2>
        <p className="mb-2">
          Medicare Part B covers glaucoma surgeries when deemed medically necessary. That includes selective laser trabeculoplasty (SLT), trabeculectomy, and minimally invasive glaucoma surgery (MIGS) procedures like iStent.
        </p>
        <p>
          Your cost-sharing depends on your plan type. With Original Medicare, you pay 20% coinsurance after the deductible. With a Medigap supplement like Plan G, that coinsurance drops to $0. Medicare Advantage plans set their own copays, and some require prior authorization.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Why your ophthalmologist's network matters
        </h2>
        <p className="mb-2">
          If you've built trust with a glaucoma specialist, you don't want to lose access because of a plan switch. Original Medicare lets you see any provider that accepts Medicare. Medicare Advantage plans use networks, and not every ophthalmologist or surgical center participates.
        </p>
        <p>
          I verify your doctors and facilities before recommending any plan. That includes checking whether your surgeon is in-network for the specific procedure you need.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Medigap vs. Medicare Advantage for ongoing glaucoma care
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Medigap (Plan G or N):</strong> Pairs with Original Medicare. Covers Part B coinsurance so you pay little or nothing for surgeries and office visits. No network restrictions. You add a standalone Part D plan for drops.
          </li>
          <li>
            <strong>Medicare Advantage:</strong> May include Part D drug coverage and extra vision benefits. Copays for procedures vary. Network restrictions apply. Some plans require referrals or prior authorization for surgery.
          </li>
        </ul>
        <p className="mt-2">
          Neither option is universally better. It depends on how often you see your specialist, which drops you use, and whether surgery is on the table.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Request a free glaucoma-focused plan review
        </h2>
        <p className="mb-2">
          Bring me your current prescriptions, your ophthalmologist's name, and any upcoming procedures. I'll compare every plan available in your area and show you exactly what each one covers and costs.
        </p>
        <p>
          No charge. No obligation. Just clear answers from someone who does this every day.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Call 855-559-1700 for a free glaucoma coverage review
        </p>
        <p className="mb-4">
          Anthony Orner, Licensed Medicare Broker
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
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/learn/medicare-parts-explained"
              className="text-blue-600 hover:underline"
            >
              What Does Medicare Part B Cover?
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medigap Plan G vs. Plan N: Which Is Better?
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
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/coverage/glaucoma-screenings" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">Medicare.gov — Glaucoma Screenings Coverage</a> and <a href="https://www.medicare.gov/coverage/eye-exams" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">Medicare.gov — Eye Exams</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased help through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/dobi/division_consumers/insurance/ship.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/dobi/division_insurance/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/dobi/division_insurance/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/dobi/division_insurance/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling from the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
    </div>
  );
}