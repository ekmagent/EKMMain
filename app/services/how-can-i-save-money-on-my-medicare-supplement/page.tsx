import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "how can i save money on my medicare supplement | Free Rate Review | MedicareYourself",
  description:
    "How can I save money on my Medicare Supplement? Compare carriers, stack household discounts, and switch plan letters. Call 855-559-1700 for a free rate review.",
  alternates: { canonical: "https://medicareyourself.com/services/how-can-i-save-money-on-my-medicare-supplement" },
  openGraph: {
    title:
      "how can i save money on my medicare supplement | Free Rate Review | MedicareYourself",
    description:
      "How can I save money on my Medicare Supplement? Switch carriers, stack discounts, or change plan letters. Free rate review shows your actual savings.",
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
      name: "How Can I Save Money on My Medicare Supplement?",
      item: "https://medicareyourself.com/services/how-can-i-save-money-on-my-medicare-supplement",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "How Can I Save Money on My Medicare Supplement? 7 Strategies That Actually Work",
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
    question: "What if I can't afford a Medicare Supplement plan?",
    answer:
      "You may qualify for a Medicare Savings Program through your state, which can help pay Part B premiums and other costs. Medicaid may also cover expenses if your income and resources are limited. If a Plan G premium is too high, Plan N offers lower premiums with small copays at the doctor. Call us at 855-559-1700 and we'll review every option.",
  },
  {
    question:
      "Can I switch Medicare Supplement carriers without losing coverage?",
    answer:
      "Yes. Plan letters are standardized by the federal government, so a Plan G from one carrier covers exactly the same benefits as a Plan G from another. If you qualify medically (or have a guaranteed issue right), you can switch to a lower-cost carrier and keep identical coverage.",
  },
  {
    question: "How often should I compare Medicare Supplement rates?",
    answer:
      "At least once a year, or anytime you receive a rate increase notice. Carriers adjust premiums at different times, so the cheapest option last year may not be the cheapest today. A quick rate comparison takes about 10 minutes.",
  },
  {
    question: "Will switching carriers reset my waiting period?",
    answer:
      "If you've already satisfied any pre-existing condition waiting period on your current plan, that credit transfers to your new carrier. You won't start over.",
  },
,
  {
    question: "Do I need to keep Original Medicare to have a Medicare Supplement?",
    answer:
      "Yes. To buy or keep a Medigap policy, you generally must be enrolled in both Medicare Part A and Part B. Medigap policies only work alongside Original Medicare, not with Medicare Advantage plans.",
  },
  {
    question: "Does a Medicare Supplement policy cover my spouse?",
    answer:
      "No. Each Medigap policy only covers one person, so you and your spouse would each need to purchase your own policy. Some carriers offer a household discount when both spouses are enrolled, which is one of the easiest ways to lower your premium.",
  },
  {
    question: "Can I get help paying my Part B premium if money is tight?",
    answer:
      "Yes. Medicare Savings Programs run by your state can help pay your Part B premium and other out-of-pocket costs if you qualify based on income and resources. You can also explore Supplemental Security Income and Medicaid. Call 855-559-1700 and we'll walk through which programs you may qualify for.",
  }
,
  {
    question: "Are Medicare Supplement household discounts common?",
    answer:
      "Many carriers offer a household discount when two people in the same home are enrolled, and some apply the discount even if your spouse or roommate isn't on the same plan. The discount and eligibility rules vary by carrier and state. We can check which carriers offer the largest household discount in your area.",
  }
,
  {
    question: "Are Medicare Savings Programs worth applying for?",
    answer:
      "Yes. Medicare Savings Programs are state-run programs that can help pay your Part B premium, and in some cases your Part A premium, deductibles, and coinsurance. Eligibility is based on income and resources, and the limits vary by state. You can apply through your state Medicaid office even if you don't think you'll qualify.",
  }
,
  {
    question: "Are there state programs that can help lower my Medicare costs?",
    answer:
      "Yes. Medicare Savings Programs run by each state can help pay Part B premiums, and in some cases Part A premiums, deductibles, and coinsurance, for people who meet income and resource limits. Your State Health Insurance Assistance Program (SHIP) offers free one-on-one counseling to help you apply. You can learn more at Medicare.gov or call us at 855-559-1700 for a personalized review.",
  }
,
  {
    question: "Are there state programs that can help lower my Medicare costs?",
    answer:
      "Yes. Medicare Savings Programs run by your state can help pay Part B premiums, and in some cases Part A premiums, deductibles, and coinsurance. You may also qualify for Extra Help with prescription drug costs or Supplemental Security Income through Social Security. Visit Medicare.gov or call us at 855-559-1700 to see which programs you may qualify for.",
  },
  {
    question: "Does household discount lower my Medicare Supplement premium?",
    answer:
      "Many carriers offer a household or spousal discount when more than one adult in the home enrolls in a Medigap policy with the same company. The discount amount varies by carrier and state. We can check which carriers offer this discount in your area during a free rate review.",
  }
,
  {
    question: "Why do Medigap premiums for the same plan letter vary so much between carriers?",
    answer:
      "Each insurance company sets its own price for a Medigap policy, even though the benefits in each lettered plan are standardized by the federal government. Carriers also use different pricing methods — community-rated, issue-age-rated, or attained-age-rated — which affect how your premium changes over time. That's why comparing carriers for the same plan letter is one of the most effective ways to save.",
  }
,
  {
    question: "When is the best time to buy a Medigap policy to lock in lower rates?",
    answer:
      "The best time is during your Medigap Open Enrollment Period, which starts the month you're 65 or older and enrolled in Medicare Part B. During this six-month window, carriers can't deny you coverage or charge more based on health conditions. Buying outside this window may require medical underwriting, which can raise your premium or result in denial.",
  },
  {
    question: "Are there state programs that can help me afford Medicare costs?",
    answer:
      "Yes. Medicare Savings Programs administered by your state can help pay Part B premiums, deductibles, and coinsurance if you meet income and resource limits. You can also explore Supplemental Security Income through Social Security and your state's SHIP program for free counseling. Call 855-559-1700 and we'll point you to the right resources.",
  }
,
  {
    question: "Are there government programs that can help me pay my Medicare costs?",
    answer:
      "Yes. Medicare Savings Programs run by your state can help pay Part B premiums and other out-of-pocket costs if you qualify based on income and resources. Supplemental Security Income through Social Security may also help certain people with limited incomes. You can learn more at medicare.gov/basics/costs/help or call us at 855-559-1700 for guidance.",
  }
,
  {
    question: "When is the best time to buy a Medicare Supplement at the lowest rate?",
    answer:
      "Your Medigap Open Enrollment Period is the best time to buy. During this 6-month window, which starts when you're 65 or older and enrolled in Part B, carriers cannot deny you coverage or charge more based on health. Buying outside this window may require medical underwriting, which can affect your rate.",
  },
  {
    question: "Are household discounts available on Medicare Supplement plans?",
    answer:
      "Many carriers offer household or spousal discounts when two adults in the same home both enroll in a Medigap policy. Discount amounts and eligibility rules vary by carrier and state. We can check which carriers in your area offer this when reviewing your options.",
  },
  {
    question: "Does my ZIP code affect my Medicare Supplement premium?",
    answer:
      "Yes. Carriers rate Medigap premiums by ZIP code, age, gender, and tobacco use. Two people with the same Plan G can pay very different premiums depending on where they live. Comparing carriers specific to your ZIP code is the fastest way to find savings.",
  }
,
  {
    question: "When is the best time to buy a Medigap policy to get the lowest rate?",
    answer:
      "Your Medigap Open Enrollment Period is the best window, since carriers cannot use medical underwriting to deny you or charge more during that time. Outside this window, you may still switch carriers if you can pass underwriting or qualify for a guaranteed issue right. Locking in coverage early often results in lower lifetime premiums.",
  },
  {
    question: "Are there household or spousal discounts on Medicare Supplement plans?",
    answer:
      "Many carriers offer household or household premium discounts when two adults in the same home each enroll in a Medigap policy, and some offer the discount even if only one spouse enrolls. These discounts vary by carrier and state. A licensed broker can quickly identify which carriers in your area offer them.",
  },
  {
    question: "Can a Medicare Savings Program help if my Supplement premium is too high?",
    answer:
      "Yes. State-run Medicare Savings Programs can help pay your Part B premium and other Medicare costs if your income and resources fall within program limits. Lowering those out-of-pocket Medicare costs can free up budget for your Supplement premium. You can review eligibility at Medicare.gov or call us for help applying.",
  }
,
  {
    question: "When is the best time to buy a Medicare Supplement to save money?",
    answer:
      "Your Medigap Open Enrollment Period is the best time to buy. It starts the first month you have Medicare Part B and you're 65 or older, and lasts 6 months. During this window, carriers can't deny you coverage or charge more based on health, which usually means lower premiums.",
  },
  {
    question: "Can household or paperless discounts lower my Medigap premium?",
    answer:
      "Yes. Many carriers offer household discounts when two people in the same home are enrolled, plus smaller discounts for electronic funds transfer or paperless billing. Stacking these discounts at the time of application can meaningfully reduce your monthly premium. Call 855-559-1700 and we'll check which discounts each carrier offers in your state.",
  },
  {
    question: "Does changing plan letters (like G to N) actually save money?",
    answer:
      "It can. Plan N typically has a lower premium than Plan G in exchange for small copays at office and ER visits and not covering the Part B excess charge. For people who don't see specialists frequently, the premium savings can outweigh the copays.",
  }
,
  {
    question: "Are there different ways insurance companies price Medigap policies?",
    answer:
      "Yes. Insurance companies use one of three pricing methods: community-rated, issue-age-rated, or attained-age-rated. Each method affects how your premium changes over time, so two plans with identical benefits can cost very different amounts as you age. Comparing pricing structures — not just today's premium — can lead to long-term savings.",
  },
  {
    question: "Can household discounts lower my Medicare Supplement premium?",
    answer:
      "Many carriers offer household or multi-policy discounts when more than one adult in the same home enrolls, and some offer discounts simply for living with another adult. The discount amount and eligibility rules vary by carrier and state. Asking about every available discount before you apply is one of the easiest ways to reduce your premium.",
  },
  {
    question: "Does where I live affect my Medigap premium?",
    answer:
      "Yes. Medigap premiums vary based on the insurance company, the plan letter, and your ZIP code or state. Two neighbors with the same plan letter from different carriers can pay very different premiums, which is why a local rate comparison is important.",
  }
,
  {
    question: "When is the best time to buy a Medigap policy to save the most money?",
    answer:
      "Your Medigap Open Enrollment Period is the best time to buy. During this window, insurance companies cannot use medical underwriting to deny you coverage or charge you more based on health history. Buying outside this window may mean higher premiums or being declined, which limits your ability to shop for savings later.",
  },
  {
    question: "Can a Medicare Savings Program lower my Medicare Supplement costs?",
    answer:
      "A Medicare Savings Program won't directly pay your Medigap premium, but it can help pay your Part B premium and other Original Medicare costs, freeing up money in your budget. Eligibility is based on income and resources and is determined by your state. You can also explore Supplemental Security Income through Social Security if your income is limited.",
  }
,
  {
    question: "Are there government programs that help pay my Medicare costs?",
    answer:
      "Yes. Medicare Savings Programs run by your state can help pay Part A and Part B premiums, deductibles, and coinsurance if you meet income and resource limits. Supplemental Security Income (SSI) through Social Security may also help certain people with lower incomes. Medicare.gov has a tool to check your eligibility, or call us at 855-559-1700 and we'll point you in the right direction.",
  },
  {
    question: "Does household discount really lower my Medicare Supplement premium?",
    answer:
      "Many carriers offer a household or spousal discount when more than one adult in the home has a Medigap policy with them, and some offer it even if your spouse or roommate only has Original Medicare. The discount is applied to your premium for as long as you keep the policy. Not every carrier offers it, which is why comparing multiple companies matters.",
  },
  {
    question: "Will changing from Plan F or Plan G to Plan N really save me money?",
    answer:
      "Plan N typically has a lower monthly premium than Plan G or Plan F in exchange for small copays at doctor visits and the ER, plus you pay the Part B deductible and any Part B excess charges. For people who don't visit the doctor often, the premium savings can outweigh the copays. We can run the numbers side by side so you see your real out-of-pocket picture.",
  }
];

export default function HowCanISaveMoneyOnMyMedicareSupplement() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        {" > "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>
        {" > "}
        <span className="text-gray-700">
          How Can I Save Money on My Medicare Supplement?
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        How Can I Save Money on My Medicare Supplement? 7 Strategies That
        Actually Work
      </h1>

      <Image
        src="/images/how-can-i-save-money-on-my-medicare-supplement.webp"
        alt="how can i save money on my medicare supplement"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        How can I save money on my Medicare Supplement? Most people overpay
        simply because they never compare after their first enrollment. The
        starting premium isn't the problem. It's the 10-18% annual increases
        that stack up by your mid-70s.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        Here are seven real strategies I use with clients every week.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Switching carriers for the same plan letter at a lower premium
        </h2>
        <p className="text-gray-700 mb-2">
          Plan G from Carrier A covers exactly the same benefits as Plan G from
          Carrier B. That's federal law. The only difference is what they charge
          you.
        </p>
        <p className="text-gray-700">
          I regularly see $40-$80/month differences between carriers in the same
          zip code for identical coverage. If you pass underwriting, switching
          saves you real money with zero coverage loss.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Household, non-smoker, and payment discounts most people miss
        </h2>
        <p className="text-gray-700 mb-2">
          Many carriers offer discounts that aren't advertised. They add up fast:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>
            <strong>Household discount:</strong> 5-7% off if you live with
            another adult, even if they're on a different plan
          </li>
          <li>
            <strong>Non-smoker discount:</strong> available from most carriers if
            you haven't used tobacco in 12+ months
          </li>
          <li>
            <strong>EFT/bank draft discount:</strong> pay by automatic withdrawal
            instead of paper bill for another 2-5% off
          </li>
          <li>
            <strong>Annual pay discount:</strong> some carriers reduce your total
            if you pay the full year upfront
          </li>
        </ul>
        <p className="text-gray-700 mt-2">
          Stacking two or three of these together can cut $15-$30/month off your
          premium.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          When dropping from Plan G to Plan N makes financial sense
        </h2>
        <p className="text-gray-700 mb-2">
          Plan N typically costs $30-$50 less per month than Plan G. The
          tradeoff: you pay the $283 Part B deductible each year plus up to $20
          copays for some office visits.
        </p>
        <p className="text-gray-700">
          If you're healthy and see the doctor a few times a year, Plan N often
          saves $200-$400 annually after those small out-of-pocket costs. It's
          not right for everyone, but the math works for many people.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Understand how your carrier prices by age
        </h2>
        <p className="text-gray-700 mb-2">
          Medigap carriers use one of three pricing methods: attained-age (rate
          goes up as you age), issue-age (locked to the age you bought it), or
          community-rated (same rate for everyone regardless of age).
        </p>
        <p className="text-gray-700">
          Attained-age plans often start cheap and get expensive fast. That
          aggressive introductory premium that looked great at 65 can double by
          78. Knowing your carrier's pricing method tells you whether your rate
          increases are normal or a sign to shop.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Check if you qualify for state savings programs
        </h2>
        <p className="text-gray-700 mb-2">
          Medicare Savings Programs can pay your Part B premium ($202.90/month in
          2026) if your income qualifies. That frees up real budget for your
          Supplement premium.
        </p>
        <p className="text-gray-700">
          Contact your State Medical Assistance office or call us. Many people
          who qualify never apply because they don't know these programs exist.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Request a free rate comparison against your current premium
        </h2>
        <p className="text-gray-700 mb-2">
          The fastest way to know if you're overpaying: tell us your current
          plan letter, carrier, zip code, and what you pay. We'll run a
          comparison across every carrier available in your area.
        </p>
        <p className="text-gray-700">
          Takes about 10 minutes. No obligation. If your current rate is already
          competitive, I'll tell you that too.
        </p>
      </section>

      <div className="mt-12 bg-blue-600 text-white rounded-xl p-8 text-center">
        <p className="text-2xl font-bold mb-2">
          Find out what you could save
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:855-559-1700" className="underline font-semibold">
            855-559-1700
          </a>{" "}
          for a free rate comparison, or{" "}
          <Link href="/quote" className="underline font-semibold">
            get a free quote online
          </Link>
          .
        </p>
        <p className="text-sm opacity-90">
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
              href="/services/switch-medigap-plans"
              className="text-blue-600 hover:underline"
            >
              Switch Medigap Plans — See If You Could Save in 2 Minutes
            </Link>
          </li>
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
              Medicare Supplement Plan N: Lower Premiums, Small Copays
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/turning-65"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment: When You Have Guaranteed Issue Rights
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-supplement-rate-jumped-why-and-what-can-i-do"
              className="text-blue-600 hover:underline"
            >
              Why Your Medicare Supplement Rate Increased (And What to Do)
            </Link>
          </li>
        </ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/basics/costs/help/medicare-savings-programs" rel="noopener noreferrer" target="_blank" className="underline">Medicare Savings Programs (Medicare.gov)</a> &middot; <a href="https://www.medicare.gov/basics/costs/help" rel="noopener noreferrer" target="_blank" className="underline">Get help with Medicare costs</a></div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free one-on-one counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need one-on-one help? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need free, unbiased one-on-one help? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">State Health Insurance Assistance Program (SHIP)</a> for personalized Medicare counseling at no cost.</div>
            <div className="text-sm text-gray-600 mt-4">For free, unbiased one-on-one help, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need free one-on-one help comparing plans? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for unbiased counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For free one-on-one counseling, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Free, unbiased counseling is available through your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Free local counseling: contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for unbiased Medicare guidance.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Free local counseling: contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for unbiased help comparing Medigap options in your state.</div>
            <div className="text-sm text-gray-600 mt-4">Free local help: contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a> for unbiased Medicare counseling in your state.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-700 underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Free, unbiased local help is available through your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Free unbiased counseling: contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for one-on-one Medicare help.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need free, unbiased local help? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a> for one-on-one Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need free one-on-one help in your state? Contact your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a> for unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Free, unbiased counseling is available through your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For free one-on-one counseling, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> or the <a href="https://www.nj.gov/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">New Jersey Department of Banking and Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-700 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Free local counseling: <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">Find your State Health Insurance Assistance Program (SHIP)</a> for unbiased Medicare guidance.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need free one-on-one help? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a> for unbiased Medicare counseling in your state.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free local counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For free local counseling, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> or the <a href="https://www.nj.gov/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need one-on-one help in your state? Contact your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need free one-on-one help? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a> for unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need free one-on-one counseling? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a> for unbiased Medicare help in your state.</div>
            <div className="text-sm text-gray-600 mt-4">Need free one-on-one counseling? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a> for unbiased Medicare help in your state.</div>
      </section>
    </main>
  );
}