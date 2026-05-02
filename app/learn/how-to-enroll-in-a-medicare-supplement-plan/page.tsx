import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { SITE_URL } from "@/lib/site";
import { MF } from "@/lib/medicare-figures";

export const metadata: Metadata = {
  title: "How to Enroll in a Medicare Supplement Plan (2026): The 5-Step Guide",
  description:
    "Enroll in a Medicare Supplement plan in 5 steps and lock in guaranteed-issue rates during your 6-month Medigap window. Call 855-559-1700 to compare carriers.",
  alternates: { canonical: `${SITE_URL}/learn/how-to-enroll-in-a-medicare-supplement-plan` },
  openGraph: {
    title: "How to Enroll in a Medicare Supplement Plan (2026): The 5-Step Guide",
    description:
      "The federally-standardized enrollment process, the 6-month window that matters, and the one step most applicants skip that costs them hundreds of dollars a month.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://medicareyourself.com" },
    { "@type": "ListItem", position: 2, name: "Learn", item: "https://medicareyourself.com/learn" },
    {
      "@type": "ListItem",
      position: 3,
      name: "How to Enroll in a Medicare Supplement Plan",
      item: "https://medicareyourself.com/learn/how-to-enroll-in-a-medicare-supplement-plan",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Enroll in a Medicare Supplement Plan (2026): The 5-Step Guide",
  datePublished: "2026-04-21",
  dateModified: "2026-04-21",
  author: {
    "@type": "Person",
    name: "Anthony Orner",
    url: "https://medicareyourself.com/about",
  },
  publisher: {
    "@type": "Organization",
    name: "MedicareYourself",
    url: "https://medicareyourself.com",
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Enroll in a Medicare Supplement Plan",
  description:
    "The 5 steps to enroll in a Medicare Supplement (Medigap) plan in 2026, including the step most applicants skip.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Confirm you have Medicare Part A and Part B",
      text: "You cannot buy a Medicare Supplement plan without both Part A and Part B. If you are not yet enrolled, start at ssa.gov/medicare. Part B currently costs $202.90/month for most enrollees in 2026.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Compare every licensed carrier in your state, not just one insurer's website",
      text: "Medigap plan benefits are federally standardized — a Plan G from any carrier covers the exact same services as a Plan G from any other carrier. But monthly premiums for that same Plan G can vary by $500 or more across carriers in the same state for identical coverage. Applying directly to one insurer means you only see one price for a federally-standardized product.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Choose your plan letter",
      text: "Plan G is the most comprehensive plan available to anyone newly eligible for Medicare in 2026, covering everything except the annual Part B deductible ($283). Plan N has lower premiums with small copays for office visits and ER. Plan F is only available to people eligible for Medicare before January 1, 2020.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Apply during your 6-month Medigap Open Enrollment Period",
      text: "Your Medigap Open Enrollment Period is the 6-month window starting the month you are both 65 or older AND enrolled in Part B. During this window, no carrier can deny you or charge more based on health conditions. This is a one-time, federally protected window — not the same as the annual Medicare Open Enrollment that runs October 15 to December 7.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Submit your application through a licensed broker rather than direct-to-insurer",
      text: "Medigap commissions are regulated and built into every premium whether you apply direct, through a broker, or through an agent — the price is the same. Going through a broker means you see every carrier's price for the identical benefits at once, catch household discounts most applicants miss, and check rate-increase history before you commit. Call 855-559-1700 to compare every carrier in your state in one call.",
    },
  ],
};

const faqs = [
  {
    question: "Can I enroll in a Medicare Supplement plan at any time?",
    answer:
      "You can apply at any time, but acceptance is only guaranteed during specific windows. Your 6-month Medigap Open Enrollment Period — the 6 months starting when you are both 65 and enrolled in Part B — is the only time every carrier must accept you regardless of health. Outside that window (and outside federal guaranteed-issue triggers), insurers can use medical underwriting and may deny you or charge a higher rate based on pre-existing conditions.",
  },
  {
    question: "Do I have to go through a broker to enroll in Medigap?",
    answer:
      "No, but there is no financial downside to using one. Medigap commissions are federally regulated and built into every premium — carriers charge the same rate whether you apply directly, through a broker, or through a captive agent. Going through an independent broker is the only way to see every carrier's price for the identical coverage in one place, which is typically a $500+ per month swing for the same Plan G benefits.",
  },
  {
    question: "How long does a Medigap application take to process?",
    answer:
      "If you are in your Open Enrollment Period or qualify for guaranteed issue, the application itself can be completed in a single phone call, and most carriers approve within a few business days. If you apply outside those windows and go through medical underwriting, processing typically takes 1–3 weeks depending on the carrier and any required medical records.",
  },
  {
    question: "Can I be denied a Medicare Supplement plan?",
    answer:
      "Only outside your Medigap Open Enrollment Period and outside federal guaranteed-issue situations. During your 6-month OEP, no carrier can deny you. Federal guaranteed-issue triggers include losing employer group coverage, your Medicare Advantage plan leaving your service area, insurer bankruptcy, and certain trial-right situations. Outside those protections, carriers use medical underwriting.",
  },
  {
    question: "What happens if I miss my 6-month Medigap Open Enrollment Period?",
    answer:
      "You do not lose the ability to buy Medigap — you lose the guaranteed-issue protection. After OEP closes, carriers can ask health questions, review your medical records, and either decline coverage, require a rate-up, or impose a pre-existing condition look-back period. Some applicants can still qualify at standard rates; others cannot. This is why enrolling during the OEP window is the single most consequential decision in Medigap shopping.",
  },
  {
    question: "Is Plan G the best Medicare Supplement plan?",
    answer:
      "Plan G is the most comprehensive plan available to anyone newly eligible for Medicare since 2020, and it is the plan the majority of new Medigap enrollees choose. It covers everything Original Medicare leaves behind except the annual Part B deductible ($283). Plan N is a strong lower-premium alternative with small office-visit and ER copays. Plan F is richer than Plan G but is closed to anyone who became Medicare-eligible on or after January 1, 2020.",
  },
  {
    question: "Do I need a medical exam to enroll in Medigap?",
    answer:
      "No Medigap carrier requires an in-person medical exam. Applications involve a health questionnaire only — and during your Medigap Open Enrollment Period or any federal guaranteed-issue situation, carriers cannot use your answers against you. Outside those windows, carriers review your answers and may pull a prescription history report before making an underwriting decision.",
  },
  {
    question: "Does Medigap cover prescription drugs?",
    answer:
      "No. Medigap plans do not cover prescription drugs. For medication coverage, you need a separate Medicare Part D prescription drug plan. You can enroll in Part D at the same time you enroll in your Medigap plan — most brokers handle both in the same conversation.",
  },
  {
    question: "Can I switch Medigap plans later?",
    answer:
      "Yes, but switching outside your OEP or a guaranteed-issue trigger typically requires medical underwriting. If you are healthy, you can often switch to a cheaper carrier for the identical coverage. A few states have additional switching protections — Missouri's anniversary rule, California's and Oregon's birthday rules, and year-round community-rated access in New York and Connecticut — but most states follow standard federal underwriting rules.",
  },
  {
    question: "What is the difference between Medigap and Medicare Advantage enrollment?",
    answer:
      "They are completely different processes with different timing. Medicare Advantage uses the annual Medicare Open Enrollment Period (October 15 to December 7) and has no medical underwriting. Medigap uses a one-time 6-month OEP tied to your 65th birthday and Part B start date, with medical underwriting applied afterward. You cannot have both a Medigap plan and a Medicare Advantage plan at the same time.",
  },
  {
    question: "Does New Jersey have year-round Medigap open enrollment?",
    answer:
      "No. New Jersey follows the standard federal 6-month Medigap Open Enrollment Period. New Jersey does have specific Medigap protections for people under 65 on Medicare due to disability, and the state prohibits tobacco rate differentials during your OEP — but it is not a year-round guaranteed-issue state like New York or Connecticut.",
  },
  {
    question: "When should I start the Medigap enrollment process?",
    answer:
      "Ideally 3–6 months before your Part B effective date. Many carriers will accept an application up to 6 months in advance of coverage starting, which lets you lock in your current-age rate and avoid a last-minute scramble. Waiting until the last month of your OEP is the most common mistake — it works, but it removes your ability to compare quotes at a calm pace.",
  },
  {
    question: "Do I need both Medicare Part A and Part B to enroll in a Medicare Supplement plan?",
    answer:
      "Yes. You must be enrolled in both Part A and Part B before you can buy a Medicare Supplement (Medigap) policy. If you don't yet have both parts, you'll need to sign up through the Social Security Administration first at ssa.gov/medicare.",
  },
  {
    question: "Can I switch Medicare Supplement plans after my Open Enrollment Period ends?",
    answer:
      "You can apply to switch plans at any time, but outside your 6-month Medigap Open Enrollment Period carriers in most states can use medical underwriting. That means they can deny your application or charge more based on your health history. A few states have additional guaranteed-issue rights — we can tell you what applies where you live.",
  },
  {
    question: "Does the Medicare Supplement enrollment process vary by state?",
    answer:
      "The federal Medigap standardization rules apply nationwide, but Massachusetts, Minnesota, and Wisconsin have their own standardized plan designs. Some states also offer additional protections like annual guaranteed-issue windows or birthday rules. Carrier availability and pricing always vary by state and ZIP code.",
  }
,
  {
    question: "Do I need both Medicare Part A and Part B to buy a Medigap policy?",
    answer:
      "Yes. Generally, you must have Original Medicare — both Part A and Part B — to buy a Medicare Supplement (Medigap) policy. If you are not yet enrolled in Part B, you will need to sign up through the Social Security Administration before a Medigap carrier can issue coverage.",
  },
  {
    question: "Can my spouse and I share one Medigap policy?",
    answer:
      "No. A Medigap policy only covers one person. If you and your spouse both want Medicare Supplement coverage, each of you must buy your own separate policy, even if you choose the same plan letter from the same carrier.",
  },
  {
    question: "Can I switch Medigap plans after my Open Enrollment Period ends?",
    answer:
      "You can apply to switch Medigap plans at any time, but outside your 6-month Medigap Open Enrollment Period carriers in most states can use medical underwriting to deny coverage or charge higher premiums based on your health. A licensed broker can tell you whether you are likely to qualify before you apply.",
  }
,
  {
    question: "Do I need both Medicare Part A and Part B to buy a Medigap policy?",
    answer:
      "Yes. Medicare.gov states that you generally must have Original Medicare — both Part A and Part B — to buy a Medigap policy. If you only have Part A, you'll need to enroll in Part B before a Medigap application can be approved.",
  },
  {
    question: "Can my spouse and I share one Medigap policy?",
    answer:
      "No. A Medigap policy only covers one person. If you and your spouse both want Medicare Supplement coverage, each of you must buy your own separate policy, even if you choose the same plan letter from the same carrier.",
  },
  {
    question: "When is the best time to buy a Medicare Supplement policy?",
    answer:
      "Medicare.gov identifies the Medigap Open Enrollment Period as your best time to buy. During this one-time 6-month window, insurance companies cannot use medical underwriting to deny you coverage or charge you more based on your health. To review your options before the window closes, call 855-559-1700.",
  }
,
  {
    question: "Do I need both Medicare Part A and Part B to buy a Medigap policy?",
    answer:
      "Yes. You generally must have Original Medicare — both Part A and Part B — to purchase a Medicare Supplement (Medigap) policy. If you only have Part A, you'll need to enroll in Part B before a carrier can issue your Medigap coverage.",
  },
  {
    question: "Can my spouse and I share one Medigap policy?",
    answer:
      "No. A Medigap policy only covers one person. If you and your spouse both want Medigap coverage, each of you must apply for and purchase your own separate policy, even if you choose the same plan letter from the same carrier.",
  },
  {
    question: "Can I switch Medigap plans later if my health changes?",
    answer:
      "You can apply to switch Medigap plans at any time, but outside your 6-month Medigap Open Enrollment Period, carriers in most states can use medical underwriting to deny coverage or charge more based on your health. That's why choosing the right plan during your initial enrollment window is so important. Call 855-559-1700 to review your options before your window closes.",
  }
,
  {
    question: "When is the best time to buy a Medicare Supplement policy?",
    answer:
      "The best time to buy is during your Medigap Open Enrollment Period — the 6-month window that starts the first month you are both 65 or older and enrolled in Medicare Part B. During this window, insurance companies cannot deny you coverage or charge you more based on your health. Outside this window, carriers in most states can use medical underwriting to decline your application or raise your premium.",
  },
  {
    question: "Do I need both Medicare Part A and Part B to enroll in a Medigap plan?",
    answer:
      "Yes. According to Medicare.gov, you generally must have Original Medicare — both Part A and Part B — before you can buy a Medigap policy. A Medigap policy only covers one person, so if you and your spouse both want coverage, each of you must buy your own separate policy.",
  },
  {
    question: "Can I switch Medicare Supplement plans after I enroll?",
    answer:
      "You can apply to switch Medigap plans at any time, but outside your Open Enrollment Period or a guaranteed-issue situation, the new carrier can use medical underwriting and may decline your application or charge a higher premium. This is why choosing the right plan during your initial 6-month window is important. Call 855-559-1700 to review whether switching makes sense in your situation.",
  }
,
  {
    question: "When is the best time to buy a Medigap policy?",
    answer:
      "The best time to buy a Medigap policy is during your 6-month Medigap Open Enrollment Period, which begins the first month you are both 65 or older and enrolled in Medicare Part B. During this window, insurance companies cannot use medical underwriting to deny you coverage or charge you more based on health conditions. Missing this window can mean higher premiums or denial of coverage later.",
  },
  {
    question: "Do I need both Medicare Part A and Part B to buy a Medigap policy?",
    answer:
      "Yes. According to Medicare.gov, you generally must have Original Medicare — both Part A and Part B — before you can buy a Medigap policy. A Medigap plan works alongside Original Medicare to help pay your share of covered costs. Call 855-559-1700 if you need help confirming your Part A and Part B status before applying.",
  },
  {
    question: "Can my spouse and I share one Medigap policy?",
    answer:
      "No. A Medigap policy only covers one person, so if you and your spouse both want Medigap coverage, each of you must buy your own separate policy. You don't have to choose the same plan letter or the same carrier — each spouse can shop independently for the best fit.",
  }
,
  {
    question: "When is the best time to buy a Medicare Supplement policy?",
    answer:
      "The best time is during your 6-month Medigap Open Enrollment Period, which starts the first month you are both 65 or older and enrolled in Medicare Part B. During this window, insurance companies cannot deny you coverage or charge you more based on your health. Outside this window, carriers in most states can use medical underwriting to reject your application or raise your premium.",
  },
  {
    question: "Do I need both Medicare Part A and Part B to enroll in a Medigap plan?",
    answer:
      "Yes. According to Medicare.gov, you generally must have Original Medicare — both Part A and Part B — before you can buy a Medigap policy. A Medigap plan supplements what Original Medicare pays, so it cannot stand alone. If you are not yet enrolled in Part B, you must complete that step at ssa.gov/medicare first.",
  },
  {
    question: "Can my spouse and I share one Medigap policy?",
    answer:
      "No. A Medigap policy only covers one person, so if you and your spouse both want Medigap coverage, each of you must buy your own separate policy. Many carriers do offer a household discount when both spouses enroll, which can reduce your premium. Call 855-559-1700 to compare carriers that offer this discount in your state.",
  }
,
  {
    question: "When is the best time to buy a Medicare Supplement policy?",
    answer:
      "The best time to buy is during your Medigap Open Enrollment Period, which is the 6-month window that starts the first month you are both 65 or older and enrolled in Medicare Part B. During this window, insurance companies cannot use medical underwriting to deny you a policy or charge you more based on your health. Outside this window, in most states, carriers can refuse coverage or raise your rate based on pre-existing conditions.",
  },
  {
    question: "Do I need both Medicare Part A and Part B to enroll in a Medigap plan?",
    answer:
      "Yes. Generally, you must be enrolled in both Medicare Part A and Part B to buy a Medicare Supplement policy. If you are not yet enrolled in Part B, you will need to sign up through the Social Security Administration before a Medigap carrier will issue your policy. A Medigap policy only covers one person, so spouses must each buy their own.",
  },
  {
    question: "Can I switch Medigap plans after I enroll?",
    answer:
      "You can apply to switch Medigap plans at any time, but outside your initial 6-month Medigap Open Enrollment Period, carriers in most states can use medical underwriting to approve, deny, or rate your application based on your health. That is why choosing the right plan letter and carrier the first time matters. Call 855-559-1700 to compare options before you apply.",
  }
,
  {
    question: "When is the best time to buy a Medicare Supplement policy?",
    answer:
      "The best time to buy is during your 6-month Medigap Open Enrollment Period, which starts the first month you are both 65 or older and enrolled in Medicare Part B. During this window, insurance companies cannot deny you coverage or charge more based on pre-existing conditions. Outside this window, carriers in most states can use medical underwriting to decline your application or raise your rate.",
  },
  {
    question: "Do I need both Medicare Part A and Part B to enroll in a Medigap plan?",
    answer:
      "Yes. You generally must be enrolled in both Medicare Part A and Part B before you can buy a Medigap policy. Each Medigap policy covers only one person, so spouses must each buy their own policy. If you are not yet enrolled in Medicare, you can sign up at ssa.gov/medicare.",
  },
  {
    question: "Can I switch Medicare Supplement plans after I enroll?",
    answer:
      "You can apply to switch Medigap plans at any time, but outside your Open Enrollment Period or a guaranteed-issue situation, the new carrier can use medical underwriting and may decline you or charge more based on health. Before switching, it is important to compare benefits and confirm the new policy will be issued. Call 855-559-1700 to review your options before canceling an existing policy.",
  }
];

export default function HowToEnrollMedigapPage() {
  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema, howToSchema]} />

      <nav className="max-w-4xl mx-auto px-4 pt-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/learn" className="hover:text-blue-600">Learn</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-900 font-medium">How to Enroll in a Medicare Supplement Plan</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          How to Enroll in a Medicare Supplement Plan (2026): The 5-Step Guide
        </h1>
        <p className="text-sm text-gray-500 mb-1">
          By <strong className="text-gray-600">Anthony Orner</strong>, Licensed Medicare Insurance Broker
        </p>
        <p className="text-xs text-gray-400 mb-6">Last reviewed: April 2026</p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Medicare Supplement (Medigap) plan benefits are set by federal law and identical
          across every carrier. What is not identical is the monthly premium — the same Plan G
          coverage can vary by $500 or more per month between carriers in the same state. This
          guide walks through the 5 steps to enroll, explains the 6-month window that protects
          you from health questions, and shows the one step most applicants skip.
        </p>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">The 5 Steps to Enroll in a Medigap Plan</h2>
          <ol className="space-y-4">
            {[
              {
                step: "1",
                title: "Confirm you have Medicare Part A and Part B",
                body: `You cannot buy a Medigap plan without both. Part B currently costs ${MF.partBPremium}/month for most enrollees. If you are not yet enrolled, start at ssa.gov/medicare.`,
              },
              {
                step: "2",
                title: "Compare every licensed carrier in your state",
                body: "Medigap benefits are federally standardized — a Plan G from one carrier covers the exact same services as a Plan G from any other. Premiums for identical coverage can vary by $500+/month. Applying directly to one insurer means you only see one price.",
              },
              {
                step: "3",
                title: "Choose your plan letter",
                body: `Plan G is the most comprehensive plan available to anyone newly eligible for Medicare in 2026, covering everything except the annual Part B deductible (${MF.partBDeductible}). Plan N is a lower-premium alternative with small copays. Plan F is closed to new enrollees.`,
              },
              {
                step: "4",
                title: "Apply during your 6-month Medigap Open Enrollment Period",
                body: "The 6-month window starting the month you are both 65 or older AND enrolled in Part B. During this window, no carrier can deny you or charge more based on health. One time, federally protected, not the same as the annual Medicare Open Enrollment.",
              },
              {
                step: "5",
                title: "Submit through a licensed broker, not direct-to-insurer",
                body: "Medigap commissions are regulated and built into every premium — the price is the same whether you apply direct, through a broker, or through an agent. A broker shows every carrier's price at once, catches household discounts most applicants miss, and pulls rate-increase history before you commit. Call 855-559-1700 for a no-cost comparison across every licensed carrier in your state.",
              },
            ].map((item) => (
              <li key={item.step} className="flex gap-4 bg-white rounded-lg p-4 border border-blue-100">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {item.step}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="my-8 bg-gray-900 text-white rounded-xl p-6 text-center">
          <p className="font-bold text-lg mb-2">See every Medigap carrier in your state in one call</p>
          <p className="text-gray-300 text-sm mb-4">
            Free quote comparison across every licensed carrier. No obligation. No cost difference vs. applying direct.
          </p>
          <PhoneCTA label="Compare Every Carrier Free" />
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
          Why Applying Direct to One Insurer Costs Money
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The most important thing to understand about Medigap is that it is a{" "}
          <em>federally-standardized product</em>. A Plan G from Insurer A and a Plan G from
          Insurer Z cover the exact same list of services at the exact same percentages, in
          the same doctor&apos;s offices and hospitals, with the same claims process. The only
          differences are the monthly premium, the carrier&apos;s rate-increase history, the
          available discounts, and the carrier&apos;s financial strength rating.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Those differences are substantial. In a typical state, the lowest and highest Plan G
          premiums for the same 67-year-old enrollee routinely span $500 or more per month for
          identical coverage. Over 20 years of Medigap enrollment, that spread is six figures
          of preventable spending.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Three specific levers most applicants miss when applying directly:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>
            <strong>Household discount.</strong> Most carriers offer a discount of 5%–14% when
            another adult in the household has (or applies for) Medigap coverage. Eligibility
            rules vary: some require marriage, some accept civil unions, some accept
            cohabitation. Carriers that advertise the discount rarely volunteer the eligibility
            nuances.
          </li>
          <li>
            <strong>Rate-increase history.</strong> Two carriers can quote identical rates
            today and diverge by hundreds of dollars per month within a few years depending on
            their rate-filing patterns. Brokers pull the rate-increase history from the same
            actuarial database insurers use.
          </li>
          <li>
            <strong>Pricing methodology.</strong> Community-rated, issue-age-rated, and
            attained-age-rated carriers price the same Plan G very differently over time. The
            cheapest Plan G today is not always the cheapest Plan G at age 75.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
          The 6-Month Window That Matters Most
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Your Medigap Open Enrollment Period starts the month you are both 65 or older <em>and</em>{" "}
          enrolled in Part B, and runs for 6 consecutive months. During this window, every
          carrier licensed in your state is required to accept your application regardless of
          your health history, and they cannot charge you a higher premium because of a
          pre-existing condition.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          After those 6 months end, the rules change: carriers can ask health questions, review
          your prescription records, apply pre-existing condition look-backs, and either decline
          your application, charge a rate-up, or impose a waiting period. A significant minority
          of applicants lose access to the cheapest carriers after OEP closes.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Practical timing: most carriers accept an application up to 6 months before your Part
          B effective date. Applying early locks in your current-age rate and gives you time to
          compare quotes without pressure. The most common mistake is waiting until the last
          month of OEP and rushing through a single insurer&apos;s website.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
          Federal Guaranteed-Issue Triggers Outside OEP
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Even if your OEP has closed, federal law requires carriers to accept you — and prohibits
          health-based rate-ups — if you qualify under a guaranteed-issue trigger:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-6">
          <li>Losing employer or union group health coverage</li>
          <li>Your Medicare Advantage plan leaves your service area or ends</li>
          <li>Your Medigap carrier goes bankrupt or commits fraud</li>
          <li>Medicare Advantage trial right — switching back within 12 months of your first MA enrollment</li>
          <li>Moving out of your current plan&apos;s service area</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          Timing matters: most guaranteed-issue windows are only 63 days from the qualifying
          event. State-specific protections can extend or supplement these federal rules — New
          York and Connecticut offer year-round community-rated access, Missouri has an
          anniversary rule, California and Oregon have birthday rules — but most states follow
          federal rules only.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
          What to Compare Across Carriers
        </h2>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• <strong>Monthly premium</strong> for the specific plan letter, your age, your ZIP code, and tobacco status</li>
            <li>• <strong>Household discount</strong> availability and eligibility rules</li>
            <li>• <strong>Rate-increase history</strong> over the past 3–5 years</li>
            <li>• <strong>Pricing methodology</strong> (community-rated, issue-age-rated, or attained-age-rated)</li>
            <li>• <strong>AM Best financial strength rating</strong> (A- or better is standard)</li>
            <li>• <strong>Pre-existing condition look-back period</strong> (some carriers waive it, most apply 6 months)</li>
            <li>• <strong>Application type</strong> (electronic vs. PDF — affects approval speed)</li>
            <li>• <strong>Customer service reputation</strong> and claims payment history</li>
          </ul>
        </div>

        <div className="my-8 bg-gray-900 text-white rounded-xl p-6 text-center">
          <p className="font-bold text-lg mb-2">Get the full carrier comparison for your ZIP and age</p>
          <p className="text-gray-300 text-sm mb-4">
            One call covers every licensed carrier, every discount, and the rate-increase history. No cost.
          </p>
          <PhoneCTA label="Call to Compare Carriers" />
        </div>

        <div className="mb-10">
          <FAQSection faqs={faqs} title="Medicare Supplement Enrollment FAQ" />
        </div>

        <div className="my-8 bg-blue-700 text-white rounded-xl p-6 text-center">
          <p className="font-bold text-lg mb-2">Ready to enroll?</p>
          <p className="text-blue-100 text-sm mb-4">
            Every licensed carrier in your state, every discount you qualify for, in one phone call.
          </p>
          <PhoneCTA label="Start Your Free Comparison" variant="secondary" />
        </div>

        <div className="bg-gray-50 rounded-xl p-6 text-sm border border-gray-100 mb-8">
          <p className="font-semibold text-gray-900 mb-2">Related guides</p>
          <ul className="space-y-1 text-gray-600">
            <li>
              <Link href="/learn/what-is-medigap" className="text-blue-600 hover:underline">
                What Is Medigap? Medicare Supplement Insurance Explained
              </Link>
            </li>
            <li>
              <Link href="/learn/how-to-sign-up-for-medicare" className="text-blue-600 hover:underline">
                How to Sign Up for Medicare (Parts A &amp; B)
              </Link>
            </li>
            <li>
              <Link href="/medicare-supplement/new-jersey" className="text-blue-600 hover:underline">
                Best Medigap Plans in New Jersey
              </Link>
            </li>
            <li>
              <Link href="/services/quickest-way-to-enroll-into-plan-g" className="text-blue-600 hover:underline">
                Quickest Way to Enroll Into Plan G
              </Link>
            </li>
            <li>
              <Link href="/services/quickest-way-to-enroll-into-plan-n" className="text-blue-600 hover:underline">
                Quickest Way to Enroll Into Plan N
              </Link>
            </li>
            <li>
              <Link href="/services/medicare-supplement-open-enrollment-online" className="text-blue-600 hover:underline">
                Medicare Supplement Open Enrollment Online
              </Link>
            </li>
            <li>
              <Link href="/services/switch-medigap-plans" className="text-blue-600 hover:underline">
                Switch Medigap Plans
              </Link>
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 text-sm text-gray-600 border border-gray-100">
          <p className="font-semibold text-gray-900 mb-1">Official resources</p>
          <ul className="space-y-1">
            <li>
              <a
                href="https://www.medicare.gov/health-drug-plans/medigap"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Medicare.gov — Medigap (Medicare Supplement Insurance)
              </a>
            </li>
            <li>
              <a
                href="https://www.medicare.gov/health-drug-plans/medigap/when-can-i-buy-medigap"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Medicare.gov — When can I buy Medigap?
              </a>
            </li>
            <li>
              <a
                href="https://www.ssa.gov/medicare"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Social Security Administration — Medicare enrollment
              </a>
            </li>
          </ul>
          <p className="mt-3 text-xs text-gray-400">
            MedicareYourself (EasyKind Medicare) is an independent brokerage licensed to sell Medicare
            Supplement plans across multiple states. We are not affiliated with Medicare, CMS, or SSA.
          </p>
        </div>
      </article>
    </>
  );
}
