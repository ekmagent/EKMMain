import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "which medicare supplemental plan best for copd patient? | Free Expert Advice | MedicareYourself",
  description:
    "Best Medigap plan for COPD? Compare Plan G vs Plan N for oxygen, inhalers & pulmonologist visits. Free licensed broker review — call 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/which-medicare-supplemental-plan-best-for-copd-patient" },
  openGraph: {
    title:
      "which medicare supplemental plan best for copd patient? | Free Expert Advice | MedicareYourself",
    description:
      "Which Medicare Supplemental plan is best for a COPD patient? Compare Plan G and Plan N for pulmonary care costs. Free broker recommendation — no obligation.",
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
      name: "Which Medicare Supplemental Plan Best for COPD Patient",
      item: "https://medicareyourself.com/services/which-medicare-supplemental-plan-best-for-copd-patient",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Which Medicare Supplemental Plan Is Best for a COPD Patient? A Broker's Honest Answer",
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
  dateModified: "2026-03-19",
};

const faqs = [
  {
    question: "What is the best Medicare Supplement for COPD?",
    answer:
      "For most COPD patients, Plan G offers the strongest financial protection. It covers the Part A deductible ($1,676 per benefit period in 2026), all Part B excess charges, and 100% of Medicare-approved coinsurance. With frequent specialist visits, ER trips, and oxygen therapy, Plan G eliminates almost all surprise costs beyond your monthly premium and the $283 Part B deductible.",
  },
  {
    question: "Does Medicare cover oxygen therapy and nebulizers for COPD?",
    answer:
      "Yes. Medicare Part B covers home oxygen equipment and nebulizers when your doctor documents medical necessity. You must meet specific criteria, including qualifying oxygen saturation levels. After Medicare pays its 80%, your Medigap plan covers the remaining 20% coinsurance.",
  },
  {
    question: "What is the new prescription drug cap for COPD medications?",
    answer:
      "Starting in 2025, Medicare caps annual out-of-pocket Part D prescription costs at $2,100 as of 2026. This is significant for COPD patients who use multiple inhalers, which can be expensive even with insurance. Note that Medigap plans don't cover prescriptions. You'll need a standalone Part D plan alongside your supplement.",
  },
  {
    question: "Can I get a Medigap plan if I already have COPD?",
    answer:
      "During your Medigap Open Enrollment Period (the 6 months starting when you're 65+ and enrolled in Part B), insurers cannot deny you or charge more due to COPD. Outside that window, medical underwriting may apply and approval isn't guaranteed. Call us at 855-559-1700 to review your options.",
  },
,
  {
    question: "Does Medicare cover pulmonary rehabilitation for COPD?",
    answer:
      "Yes. Medicare Part B covers pulmonary rehabilitation programs for patients with moderate to very severe COPD when referred by the doctor treating the condition. After Medicare pays its share, a Medigap plan like Plan G or Plan N covers the remaining coinsurance, which can add up over a multi-session program.",
  },
  {
    question: "Is Plan N a good option for a COPD patient on a tighter budget?",
    answer:
      "Plan N can work well if you want a lower monthly premium and don't mind small copays for office and ER visits. However, Plan N does not cover Part B excess charges, so if your pulmonologist does not accept Medicare assignment, you could owe more. We can review local provider billing patterns before you decide.",
  },
  {
    question: "Will my Medigap plan cover hospital stays for COPD flare-ups?",
    answer:
      "Yes. All standardized Medigap plans cover Part A hospital coinsurance and add extra days of coverage after Medicare benefits are used up. Plan G and Plan N both cover the Part A deductible and hospital coinsurance in full, which is valuable for COPD patients who may face repeated admissions.",
  }
,
  {
    question: "Is Plan G or Plan N better for a COPD patient with frequent ER visits?",
    answer:
      "Plan G is typically the stronger choice for COPD patients with frequent ER visits because it covers Part B excess charges and leaves no copays at the time of service. Plan N has lower premiums but charges a copay for office and ER visits and does not cover excess charges. If your COPD requires repeated specialist or hospital encounters, Plan G's predictability often outweighs the premium difference.",
  },
  {
    question: "Will a Medigap plan cover my COPD inhalers and prescription drugs?",
    answer:
      "No. Medigap (Medicare Supplement) plans do not cover prescription drugs, including COPD inhalers and nebulizer solutions taken at home. You'll need a separate Medicare Part D prescription drug plan to help with these costs. Call 855-559-1700 and we'll help match you with a Part D plan that covers your specific inhalers.",
  }
,
  {
    question: "Is Plan G or Plan N better for a COPD patient who visits the ER often?",
    answer:
      "Plan G is generally the better choice for COPD patients with frequent ER visits because it covers Part B excess charges and waives the small copays that Plan N applies to office and emergency room visits. Plan N has a lower premium but can add up quickly when COPD flare-ups lead to multiple urgent visits per year. A broker can compare the total annual cost based on your usage.",
  },
  {
    question: "Will a Medigap plan cover my COPD inhalers and prescriptions?",
    answer:
      "No. Medicare Supplement (Medigap) plans do not cover prescription drugs, including COPD inhalers, nebulizer solutions, or oral medications. You'll need a separate Part D prescription drug plan to cover those costs. Call 855-559-1700 and we'll help you pair your Medigap plan with the right Part D plan for your specific medications.",
  },
  {
    question: "Does Medicare cover smoking cessation counseling for COPD patients?",
    answer:
      "Yes. Medicare Part B covers smoking and tobacco-use cessation counseling sessions per year for people who use tobacco, with no out-of-pocket cost when your provider accepts assignment. This benefit is especially valuable for COPD patients, since quitting smoking is the single most effective way to slow disease progression.",
  }
,
  {
    question: "Which parts of Medicare help with COPD care?",
    answer:
      "Part A covers inpatient hospital stays for COPD exacerbations, while Part B covers doctor visits, outpatient pulmonary rehab, oxygen equipment, and nebulizers when medically necessary. Part D covers inhalers and other prescription medications. A Medigap plan sits alongside Original Medicare to pay the coinsurance and deductibles you would otherwise owe out of pocket.",
  },
  {
    question: "Is Plan N a reasonable alternative to Plan G for COPD patients?",
    answer:
      "Plan N typically has a lower monthly premium than Plan G but leaves you responsible for small copays at office and ER visits and does not cover Part B excess charges. For a COPD patient with frequent pulmonologist visits and possible ER trips, those copays and excess charges can add up. Plan G usually offers more predictable costs, but a broker review can confirm which fits your situation.",
  }
,
  {
    question: "Is Plan G or Plan N better for a COPD patient?",
    answer:
      "Plan G typically offers more predictable costs for COPD patients because it covers Part B excess charges and leaves only the annual Part B deductible as your out-of-pocket responsibility. Plan N has lower premiums but charges copays for office and ER visits and does not cover excess charges, which can add up with frequent pulmonologist visits. If you see specialists often or use durable medical equipment, Plan G usually provides stronger protection.",
  },
  {
    question: "Will Medigap cover my COPD inhalers and prescriptions?",
    answer:
      "No. Medicare Supplement (Medigap) plans do not cover prescription drugs, including COPD inhalers and nebulizer medications taken at home. You'll need a separate Medicare Part D prescription drug plan to help with those costs. A licensed broker can help you compare Part D plans that include your specific inhalers on their formulary.",
  },
  {
    question: "Does Medicare cover pulmonary rehabilitation programs?",
    answer:
      "Yes. Medicare Part B covers comprehensive pulmonary rehabilitation programs for beneficiaries with moderate to very severe COPD when referred by the doctor treating the condition. After Medicare pays its share, your Medigap plan picks up the remaining coinsurance, making rehab visits affordable for most enrollees.",
  }
,
  {
    question: "Is Plan N a good alternative to Plan G for COPD patients?",
    answer:
      "Plan N can work for COPD patients who want a lower monthly premium and don't mind small copays for office and ER visits. However, Plan N does not cover Part B excess charges, which can add up if your pulmonologist doesn't accept Medicare assignment. For patients with frequent specialist visits, Plan G usually provides more predictable costs.",
  },
  {
    question: "Will my Medigap plan cover COPD-related hospital stays?",
    answer:
      "Yes. After Medicare Part A pays its share, your Medigap plan covers the Part A coinsurance for hospital stays and typically adds extra days of coverage after Medicare benefits are exhausted. Plan G and Plan N both include this protection, which is valuable for COPD patients who may face recurring hospitalizations from exacerbations.",
  },
  {
    question: "Should COPD patients consider Medicare Advantage instead of Medigap?",
    answer:
      "Medicare Advantage plans often have lower premiums but use networks and require referrals or prior authorization for specialists, oxygen, and pulmonary rehab. For COPD patients who need consistent access to pulmonologists and predictable costs, a Medigap plan paired with a Part D plan generally offers more flexibility. Call 855-559-1700 to compare both options.",
  }
,
  {
    question: "Is Plan G or Plan N better for a COPD patient with frequent doctor visits?",
    answer:
      "Plan G typically offers more predictable costs for COPD patients because it covers Part B excess charges and leaves you with only the annual Part B deductible. Plan N has a lower premium but includes copays for office and ER visits, which can add up quickly when you see pulmonologists regularly. For someone managing chronic respiratory disease, Plan G's predictability is usually worth the higher premium.",
  },
  {
    question: "Do Medigap plans cover inhalers and COPD prescriptions?",
    answer:
      "No. Medigap (Medicare Supplement) plans do not cover outpatient prescription drugs like inhalers, bronchodilators, or corticosteroids. You'll need a standalone Medicare Part D prescription drug plan to cover these medications. We can help you pair a Medigap plan with a Part D plan that covers your specific COPD inhalers.",
  }
,
  {
    question: "Is Plan N a good option for COPD patients on a tighter budget?",
    answer:
      "Plan N can work for COPD patients who want lower monthly premiums and don't mind small copays for office and ER visits. However, Plan N does not cover Part B excess charges, which matters if your pulmonologist doesn't accept Medicare assignment. For frequent specialist users, Plan G is often the safer pick.",
  },
  {
    question: "Does Medigap cover COPD-related hospital stays and readmissions?",
    answer:
      "Yes. Medigap plans like G and N cover Part A hospital coinsurance and provide an additional 365 days of hospital coverage after Medicare benefits are exhausted. For COPD patients prone to exacerbations requiring readmission, this protection is one of the most valuable features of a supplement plan.",
  }
,
  {
    question: "Is Plan G or Plan N better for a COPD patient?",
    answer:
      "Plan G typically offers more predictable costs for COPD patients because it covers Part B excess charges and leaves only the annual Part B deductible as out-of-pocket. Plan N has lower premiums but includes copays for office and ER visits and does not cover excess charges, which can add up with frequent pulmonologist appointments. If you see specialists often or want minimal surprises, Plan G is usually the safer choice.",
  },
  {
    question: "Does a Medigap plan cover COPD inhalers and prescription drugs?",
    answer:
      "No. Medigap (Medicare Supplement) plans do not cover prescription drugs, including inhalers, nebulizer medications, or oral COPD treatments. You'll need a standalone Medicare Part D plan to cover these medications. A broker can help you compare formularies to make sure your specific inhalers are covered at the lowest cost.",
  }
,
  {
    question: "Is Plan G or Plan N better for a COPD patient who visits the pulmonologist often?",
    answer:
      "Plan G is generally the better fit for frequent specialist users. Plan N requires a copay for each office and ER visit (waived if admitted) and does not cover Part B excess charges, which can add up quickly for COPD patients seeing pulmonologists regularly. Plan G eliminates those copays and excess charges, making budgeting predictable.",
  },
  {
    question: "Does a Medigap plan cover COPD inhalers and prescription drugs?",
    answer:
      "No. Medigap plans only fill gaps in Original Medicare (Parts A and B) and do not include prescription drug coverage. COPD patients will need a standalone Part D plan to cover inhalers, nebulizer solutions, and other maintenance medications. We can help you pair a Medigap plan with a Part D plan that covers your specific inhalers.",
  }
,
  {
    question: "Is Plan N a good alternative to Plan G for COPD patients?",
    answer:
      "Plan N can work for COPD patients who want a lower monthly premium and don't mind small copays for office and ER visits. However, Plan N does not cover Part B excess charges, which can add up if your pulmonologist does not accept Medicare assignment. Plan G is usually the safer choice for patients with frequent specialist care.",
  },
  {
    question: "Will Medigap cover my COPD-related hospital stays?",
    answer:
      "Yes. All standardized Medigap plans cover the Part A hospital coinsurance and provide additional hospital days after Medicare benefits are used up. Plan G and Plan N also cover the Part A deductible, which is helpful for COPD patients who may face exacerbation-related admissions.",
  }
,
  {
    question: "Is Plan N a good option for COPD patients on a budget?",
    answer:
      "Plan N can work for COPD patients who want lower monthly premiums and don't mind small copays for office and ER visits. However, Plan N does not cover Part B excess charges, which could add up if your pulmonologist doesn't accept Medicare assignment. Plan G typically offers more predictable costs for frequent specialist care.",
  }
,
  {
    question: "Is Plan G or Plan N better for a COPD patient on a tighter budget?",
    answer:
      "Plan N typically has a lower monthly premium than Plan G, but it requires copays for office and ER visits and does not cover Part B excess charges. For COPD patients with frequent pulmonologist visits, those copays can add up. Plan G usually offers more predictable costs, but Plan N can work if your providers accept Medicare assignment and your visit frequency is moderate.",
  },
  {
    question: "Will my Medigap plan let me see any pulmonologist I choose?",
    answer:
      "Yes. Medigap plans, including Plan G and Plan N, let you see any provider in the United States who accepts Original Medicare — no networks or referrals required. This is a major advantage for COPD patients who may need specialized pulmonary care or second opinions at major medical centers.",
  }
,
  {
    question: "Is Plan G or Plan N better for a COPD patient with frequent doctor visits?",
    answer:
      "Plan G typically works best for COPD patients with frequent pulmonologist visits, ER trips, and ongoing oxygen needs because it covers Part B excess charges and leaves you with only the annual Part B deductible. Plan N has lower premiums but requires copays for office and ER visits, plus it doesn't cover excess charges. For high-utilization COPD care, Plan G's predictability usually outweighs the premium difference.",
  },
  {
    question: "Does Medicare cover pulmonary rehabilitation and how does Medigap help?",
    answer:
      "Medicare Part B covers comprehensive pulmonary rehabilitation programs for patients with moderate to very severe COPD when ordered by a physician. After Medicare pays its share, your Medigap plan covers the remaining coinsurance, meaning Plan G enrollees typically pay nothing beyond the Part B deductible for these sessions.",
  },
  {
    question: "Do I need a separate Part D plan for COPD inhalers?",
    answer:
      "Yes. Medigap plans do not include prescription drug coverage, so COPD patients using inhalers, nebulizer solutions, or oral medications need a standalone Part D plan. Choosing the right Part D formulary is critical because inhaler pricing varies significantly between plans — call 855-559-1700 for a free formulary check.",
  }
];

export default function WhichMedicareSupplementalPlanBestForCOPDPatient() {
  return (
    <div>
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span>Which Medicare Supplemental Plan Best for COPD Patient</span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Which Medicare Supplemental Plan Is Best for a COPD Patient? A
        Broker&apos;s Honest Answer
      </h1>

      <Image
        src="/images/which-medicare-supplemental-plan-best-for-copd-patient.webp"
        alt="which medicare supplemental plan best for copd patient"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="mb-2">
        Which Medicare Supplemental plan is best for a COPD patient? After
        helping hundreds of people with chronic lung conditions choose coverage,
        my answer is almost always <strong>Plan G</strong>. Here&apos;s why, and
        when Plan N might work too.
      </p>

      <p className="mb-6">
        COPD doesn&apos;t stay predictable. You might go months feeling stable,
        then land in the ER twice in one week. Your plan needs to handle that
        reality.
      </p>

      <PhoneCTA />

      <h2 className="text-2xl font-semibold mt-10 mb-3">
        Why COPD patients face higher out-of-pocket risk on Original Medicare
      </h2>
      <p className="mb-2">
        Original Medicare covers 80% of approved Part B services. You pay the
        other 20% with no annual cap. For someone managing COPD, that 20% adds
        up fast: pulmonologist visits, spirometry testing, ER copays, oxygen
        equipment, nebulizer treatments, and pulmonary rehab sessions.
      </p>
      <p className="mb-6">
        Each hospital admission also triggers a $1,676 Part A deductible (2026).
        COPD exacerbations can mean multiple hospital stays per year. Without a
        supplement, you pay that deductible every benefit period.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">
        Plan G vs. Plan N for frequent pulmonologist and ER visits
      </h2>
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-3 text-left">Feature</th>
              <th className="border border-gray-300 p-3 text-left">Plan G</th>
              <th className="border border-gray-300 p-3 text-left">Plan N</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-3">Part A deductible ($1,676)</td>
              <td className="border border-gray-300 p-3">Covered</td>
              <td className="border border-gray-300 p-3">Covered</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">Part B deductible ($283)</td>
              <td className="border border-gray-300 p-3">Not covered</td>
              <td className="border border-gray-300 p-3">Not covered</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">Part B coinsurance</td>
              <td className="border border-gray-300 p-3">100% covered</td>
              <td className="border border-gray-300 p-3">100% covered*</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">Office visit copay</td>
              <td className="border border-gray-300 p-3">$0</td>
              <td className="border border-gray-300 p-3">Up to $20</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">ER copay (no admission)</td>
              <td className="border border-gray-300 p-3">$0</td>
              <td className="border border-gray-300 p-3">Up to $50</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">Part B excess charges</td>
              <td className="border border-gray-300 p-3">Covered</td>
              <td className="border border-gray-300 p-3">Not covered</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">Monthly premium</td>
              <td className="border border-gray-300 p-3">Higher</td>
              <td className="border border-gray-300 p-3">Lower</td>
            </tr>
          </tbody>
        </table>
        <p className="text-xs text-gray-500 mt-1">*Plan N may require copays for some office and ER visits.</p>
      </div>
      <p className="mb-6">
        If you see a pulmonologist regularly and have had ER visits for
        exacerbations, those Plan N copays stack up. Plan G&apos;s higher
        premium usually pays for itself. Plan N can work if your COPD is mild
        and well-controlled.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">
        How supplement plans handle oxygen, nebulizers, and pulmonary rehab
      </h2>
      <p className="mb-2">
        Medicare Part B covers home oxygen equipment, portable concentrators,
        and nebulizer machines when your doctor documents medical necessity.
        Pulmonary rehabilitation is also covered. Medicare pays 80%, and your
        Medigap plan picks up the remaining 20%.
      </p>
      <p className="mb-6">
        One frustration I hear often: suppliers send whatever oxygen equipment
        they have on the truck. Your supplement covers costs the same regardless
        of brand. If equipment quality matters to you, ask about switching
        suppliers before signing a rental agreement.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">
        Don&apos;t forget Part D for inhalers
      </h2>
      <p className="mb-2">
        Medigap plans do not cover prescriptions. COPD inhalers can be
        expensive, and formularies change year to year. You need a standalone
        Part D plan.
      </p>
      <p className="mb-6">
        The good news: Medicare now caps out-of-pocket Part D costs at $2,100
        per year. That&apos;s a real relief for anyone juggling multiple
        inhalers and maintenance medications.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">
        Timing matters: lock in your rate during open enrollment
      </h2>
      <p className="mb-6">
        Your Medigap Open Enrollment Period lasts 6 months, starting when
        you&apos;re 65 or older and enrolled in Part B. During this window,
        carriers cannot deny you or increase your premium because of COPD.
        Outside this window, medical underwriting applies and acceptance
        isn&apos;t guaranteed. If you&apos;re approaching 65, start the
        conversation at least 6 months before your Part B effective date.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">
        Get a free plan recommendation based on your COPD treatment
      </h2>
      <p className="mb-6">
        Every COPD case is different. I&apos;ll look at your medications, your
        doctors, how often you&apos;ve been hospitalized, and what you spend
        now. Then I&apos;ll match you with the Medigap plan and Part D
        combination that gives you the lowest total cost. No obligation, no
        pressure.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8 text-center">
        <p className="text-lg font-semibold mb-2">
          Talk to a licensed Medicare broker who understands COPD coverage.
        </p>
        <p className="text-2xl font-bold text-blue-700 mb-3">
          <a href="tel:855-559-1700">855-559-1700</a>
        </p>
        <Link
          href="/quote"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
        >
          Get a Free Quote
        </Link>
      </div>

      <FAQSection faqs={faqs} />

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/services/compare-and-enroll-in-plan-g-online"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plan G: What It Covers and Costs
            </Link>
          </li>
          <li>
            <Link
              href="/services/quickest-way-to-enroll-into-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plan N: Is It Right for You?
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/turning-65"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment Period: When and Why It Matters
            </Link>
          </li>
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
      </div>
    </div>
  );
}