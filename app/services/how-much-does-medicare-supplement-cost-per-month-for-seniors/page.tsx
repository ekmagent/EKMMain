import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "How Much Does Medicare Supplement Cost per Month for Seniors? | Free 2026 Rate Quote | MedicareYourself",
  description:
    "How much does Medicare Supplement cost per month for seniors? Compare Plan G and N rates by age and zip. Call 855-559-1700 for a free personalized quote.",
  alternates: { canonical: "https://medicareyourself.com/services/how-much-does-medicare-supplement-cost-per-month-for-seniors" },
  openGraph: {
    title:
      "How Much Does Medicare Supplement Cost per Month for Seniors? | Free 2026 Rate Quote | MedicareYourself",
    description:
      "How much does Medicare Supplement cost per month for seniors? See real Plan G and Plan N rates by age from NJ carriers. Get a free personalized quote today.",
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
      name: "How Much Does Medicare Supplement Cost Per Month for Seniors",
      item: "https://medicareyourself.com/services/how-much-does-medicare-supplement-cost-per-month-for-seniors",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "How Much Does Medicare Supplement Cost Per Month for Seniors? Actual Premiums by Plan and Age",
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
      "What is the average monthly cost of a Medicare Supplement plan for a 65-year-old?",
    answer:
      "For a 65-year-old in NJ or PA, Plan G premiums typically range from $120 to $220 per month depending on the carrier, your zip code, and whether you're a tobacco user. Plan N runs roughly $80 to $160. These are starting rates; they increase over time.",
  },
  {
    question: "Why do Medicare Supplement premiums vary so much between companies?",
    answer:
      "Every lettered Medigap plan offers identical benefits regardless of which company sells it. The difference is pricing method. Some carriers use attained-age rating (premiums rise as you age), while others use issue-age or community rating. Long-term rate increase history also varies widely by carrier.",
  },
  {
    question: "Do Medicare Supplement premiums go up every year?",
    answer:
      "Yes. Premiums can increase due to age (attained-age plans), inflation, and block rate increases when claims rise across your pool of policyholders. Annual increases of 3–8% are common, though some years certain carriers push 10–18% jumps.",
  },
  {
    question: "When is the best time to buy a Medicare Supplement plan?",
    answer:
      "Your Medigap Open Enrollment Period, which is the 6 months starting when you're 65 or older AND enrolled in Part B. During this window, carriers can't charge more or deny you based on health conditions. After it closes, you may face medical underwriting.",
  },
,
  {
    question: "Does where I live affect my Medicare Supplement premium?",
    answer:
      "Yes. Medigap insurance companies set premiums based on your zip code, in addition to your age, gender, and tobacco use. The same lettered plan from the same carrier can cost noticeably more or less just a few towns away. That's why a personalized quote is the only reliable way to see your actual monthly cost.",
  },
  {
    question: "Are Medicare Supplement benefits the same across every insurance company?",
    answer:
      "Yes. Per Medicare.gov, the benefits in each lettered Medigap plan are standardized and identical no matter which insurance company sells it. The only real difference between two carriers offering the same plan letter is the premium and the carrier's rate-increase history. That's why comparing prices across carriers matters so much.",
  }
,
  {
    question: "How do insurance companies decide what to charge for the same Medigap plan?",
    answer:
      "Each company chooses one of three pricing methods: community-rated (everyone pays the same regardless of age), issue-age rated (based on the age you bought it), or attained-age rated (rises as you get older). The benefits inside each lettered plan are identical, so the price and pricing method are the only real differences between carriers.",
  },
  {
    question: "Can I switch Medicare Supplement carriers to lower my premium?",
    answer:
      "Yes, you can apply to switch carriers at any time, but outside of your Medigap Open Enrollment Period or a guaranteed-issue right, most states allow medical underwriting. That means a new carrier can review your health and decline your application or charge more. We compare current rates against your existing plan before recommending a switch.",
  },
  {
    question: "Do I still pay the Part B premium if I have a Medicare Supplement plan?",
    answer:
      "Yes. A Medigap policy is in addition to Original Medicare, so you continue paying the standard Part B premium directly to Medicare along with your Medigap premium to the private carrier. Your Medigap plan only covers gaps left by Parts A and B.",
  }
,
  {
    question: "Is there a yearly out-of-pocket limit with Medicare alone if I don't buy a Supplement plan?",
    answer:
      "No. Original Medicare by itself has no annual cap on what you can pay out-of-pocket for covered services. A Medigap policy is one of the few ways to add that financial protection, which is why many seniors weigh the monthly premium against the unlimited exposure of going without supplemental coverage.",
  },
  {
    question: "Are Medicare Supplement benefits different from one company to another?",
    answer:
      "No. The benefits in each lettered Medigap plan are standardized by federal law, so a Plan G from one carrier covers the exact same services as a Plan G from another. Price is the main difference between policies with the same plan letter, which is why comparing carriers matters. Call 855-559-1700 for a side-by-side rate comparison.",
  }
,
  {
    question: "Are Medicare Supplement premiums the only cost I'll pay with a Medigap plan?",
    answer:
      "No. In addition to your Medigap premium, you'll still pay your monthly Part B premium to Medicare. Depending on the plan letter you choose, you may also be responsible for the Part B deductible before coverage kicks in. Call 855-559-1700 to review which out-of-pocket costs each plan covers.",
  },
  {
    question: "Can I switch Medicare Supplement plans later if I find a lower premium?",
    answer:
      "You can apply to switch Medigap plans at any time, but outside of your Open Enrollment Period or a guaranteed issue situation, the new carrier can use medical underwriting. That means they can deny coverage or charge more based on your health. A licensed broker can review whether you'd likely qualify before you drop your current plan.",
  },
  {
    question: "Does Medicare Supplement cost more if I enroll after age 65?",
    answer:
      "Often yes. If you enroll outside your Medigap Open Enrollment Period, carriers in most states can use medical underwriting and may charge higher rates or decline coverage. Additionally, attained-age rated plans naturally cost more the older you are when you enroll.",
  }
,
  {
    question: "How do insurance companies set prices for Medigap policies?",
    answer:
      "Insurance companies use one of three pricing methods: community-rated (the same premium regardless of age), issue-age-rated (based on your age when you buy the policy), or attained-age-rated (based on your current age, rising as you get older). Each method affects how much you'll pay now and in the future. The pricing method a carrier uses can make a significant difference in lifetime cost even when benefits are identical.",
  },
  {
    question: "Are Medigap premiums the only cost I'll pay with a Medicare Supplement plan?",
    answer:
      "No. In addition to your Medigap premium, you must continue paying the Part B premium to Medicare each month. Depending on the plan letter you choose, you may also be responsible for the Part B deductible or small copays for office visits. Call 855-559-1700 to review what your total monthly Medicare costs would look like.",
  }
,
  {
    question: "Are Medicare Supplement premiums the only cost I'll pay each month?",
    answer:
      "No. In addition to your Medigap premium, you'll continue paying the standard Part B premium to Medicare, and most people add a separate Part D prescription drug plan with its own premium. Your total monthly Medicare cost is the sum of these pieces.",
  },
  {
    question: "Can I switch Medicare Supplement plans later to get a lower premium?",
    answer:
      "Yes, you can apply to switch carriers at any time, but outside of your Medigap Open Enrollment Period or a guaranteed-issue situation, the new company can use medical underwriting. That means they can review your health history and decline coverage or charge more. Call 855-559-1700 and we'll review whether switching makes sense for your situation.",
  },
  {
    question: "Does tobacco use raise my Medicare Supplement premium?",
    answer:
      "Most carriers charge tobacco users a higher rate, typically through a percentage surcharge on the base premium. A few carriers don't ask, so shopping the market matters if you're a current or recent tobacco user.",
  }
,
  {
    question: "Can I switch Medicare Supplement plans later if my premium gets too high?",
    answer:
      "Yes, you can apply to switch Medigap plans or carriers at any time, but outside of your Open Enrollment Period or a guaranteed issue situation, the new carrier can require medical underwriting. That means they can review your health history and either approve, deny, or rate up your application. Call 855-559-1700 and we can shop your current rate against other carriers to see if a switch makes sense.",
  },
  {
    question: "Is Medicare Supplement worth the monthly premium compared to Medicare Advantage?",
    answer:
      "It depends on how you use healthcare and how predictable you want your costs to be. Medigap plans like Plan G leave you with minimal out-of-pocket costs after the Part B deductible and let you see any provider that accepts Medicare nationwide. Medicare Advantage plans usually have lower or no premiums but use networks and require copays at the point of care.",
  },
  {
    question: "Does Medicare Supplement cover the Part B premium?",
    answer:
      "No. You must continue paying your standard Part B premium directly to Medicare in addition to your Medigap premium. The Medigap policy only fills gaps in Original Medicare cost-sharing such as deductibles, coinsurance, and copays — it does not replace or reimburse the Part B premium itself.",
  }
,
  {
    question: "How do insurance companies set prices for Medigap policies?",
    answer:
      "Medigap carriers use one of three pricing methods: community-rated (same premium regardless of age), issue-age-rated (based on the age you buy), or attained-age-rated (premium rises as you get older). The method your carrier uses significantly affects how much you'll pay long-term. Ask your broker which rating method applies before enrolling.",
  },
  {
    question: "Can I switch Medicare Supplement plans to lower my monthly cost?",
    answer:
      "You can apply to switch Medigap plans at any time, but outside your Open Enrollment or a guaranteed-issue period, the new carrier can require medical underwriting and may deny coverage or charge more based on health. A licensed broker can review your current premium, shop competing carriers, and tell you whether switching makes sense.",
  }
,
  {
    question: "Can I switch Medicare Supplement plans later to get a lower premium?",
    answer:
      "Yes, you can apply to switch Medigap plans at any time, but outside of your Open Enrollment Period or a guaranteed issue situation, carriers in most states can use medical underwriting. That means they can review your health history and decline coverage or charge more. Some states have additional protections, so it's worth reviewing your options with a licensed broker before switching.",
  }
,
  {
    question: "Can I switch Medicare Supplement plans later if my premium gets too high?",
    answer:
      "You can apply to switch Medigap plans at any time, but outside of your Open Enrollment Period or a guaranteed issue right, most carriers will require medical underwriting. That means they can ask health questions and deny coverage or charge more based on your conditions. It's worth shopping your rate annually to see if switching makes sense.",
  },
  {
    question: "Does Medicare Supplement cover the Part B premium or Part A deductible?",
    answer:
      "Medigap plans do not pay your monthly Part B premium — that's a separate cost you pay to Medicare. However, Plan G and Plan N both cover the Part A hospital deductible in full, which is one of the biggest out-of-pocket exposures Original Medicare leaves behind.",
  },
  {
    question: "Is Plan G or Plan N cheaper long-term for most seniors?",
    answer:
      "Plan N usually has a lower monthly premium than Plan G, but it comes with small office and ER copays and doesn't cover the Part B deductible or excess charges. For seniors who rarely visit doctors, Plan N can save money; for those with frequent specialist visits, Plan G's predictable coverage often wins out.",
  }
];

export default function HowMuchDoesMedicareSupplementCostPerMonthForSeniors() {
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
          How Much Does Medicare Supplement Cost Per Month for Seniors
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
        How Much Does Medicare Supplement Cost Per Month for Seniors? Actual Premiums by Plan and Age
      </h1>

      <Image
        src="/images/how-much-does-medicare-supplement-cost-per-month-for-seniors.webp"
        alt="how much does medicare supplement cost per month for seniors"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        How much does Medicare Supplement cost per month for seniors depends on your age, zip code, plan letter, and carrier. Most seniors in NJ and PA pay between $80 and $280 per month for the most popular plans.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        That range is wide because a 65-year-old on Plan N pays a very different premium than a 78-year-old on Plan G. Here's how to figure out what you'll actually pay.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Monthly cost ranges for Plan G, Plan N, and Plan F
        </h2>
        <p className="text-gray-700 mb-3">
          Premiums vary by carrier, but here are realistic ranges for NJ and PA in 2025:
        </p>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li><strong>Plan G (age 65):</strong> $120–$220/month. The most popular Medigap plan. Covers everything except the $283 annual Part B deductible.</li>
          <li><strong>Plan N (age 65):</strong> $80–$160/month. Lower premiums, but you'll pay small copays at some office and ER visits.</li>
          <li><strong>Plan F (age 65):</strong> $160–$280/month. Only available if you were eligible for Medicare before January 1, 2020. Highest coverage, highest premium.</li>
        </ul>
        <p className="text-gray-700 mt-3">
          At age 75, expect roughly 25–40% more than these starting rates depending on the carrier's rate history.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Factors that raise or lower your premium
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li><strong>Age:</strong> Attained-age rated plans increase as you get older. Issue-age plans lock your rate to the age you enrolled.</li>
          <li><strong>Tobacco use:</strong> Smokers often pay 10–25% more.</li>
          <li><strong>Zip code:</strong> Urban areas in NJ tend to be pricier than rural PA counties.</li>
          <li><strong>Household discounts:</strong> Some carriers offer 5–7% off when both spouses enroll.</li>
          <li><strong>Block rate increases:</strong> When your carrier's overall claims rise, everyone in that pool sees a hike. This is the increase most people don't see coming.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Sample rates from top carriers in NJ and PA
        </h2>
        <p className="text-gray-700 mb-3">
          I can't publish exact carrier rates here since they shift quarterly. But I can tell you this: in NJ, I regularly see a $90/month difference between the cheapest and most expensive Plan G for the same 65-year-old in the same zip code.
        </p>
        <p className="text-gray-700">
          The cheapest starting rate isn't always the best deal. Some carriers price low to attract new enrollees, then stack aggressive rate increases in years 3–5. I look at a carrier's 5- and 10-year rate history before recommending anything. Call and I'll show you the actual numbers.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why the starting premium isn't the whole story
        </h2>
        <p className="text-gray-700 mb-3">
          Most people focus entirely on what they'll pay at 65. But the real cost question is what you're paying at 72, 78, or 83.
        </p>
        <p className="text-gray-700">
          When age increases and block increases stack together, 10–18% jumps in a single year aren't unusual. A plan that starts $30/month cheaper can end up costing you thousands more over a decade. I help clients compare long-term rate behavior, not just day-one sticker prices.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          When to lock in your best rate
        </h2>
        <p className="text-gray-700 mb-3">
          Your Medigap Open Enrollment Period lasts 6 months, starting the month you turn 65 and are enrolled in Part B. During this window, no carrier can charge you more or turn you down for health conditions.
        </p>
        <p className="text-gray-700">
          If you're approaching 65, start shopping about 6 months before your Part B effective date. Miss the window and you may face medical underwriting, which can mean higher premiums or outright denial.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How to get a personalized quote in under 2 minutes
        </h2>
        <p className="text-gray-700">
          I'm Anthony Orner, a licensed Medicare broker in NJ. Give me your age, zip code, and which plan letter you're considering, and I'll pull real quotes from multiple carriers with their rate increase history. No cost, no obligation, and no pressure. Just numbers you can actually use.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-xl p-8 text-center mb-10">
        <p className="text-xl font-semibold mb-2">
          Get your free personalized Medigap quote
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/quote" className="underline font-bold">
            get a free quote online
          </Link>
        </p>
        <p className="text-sm opacity-90">
          Anthony Orner, Licensed Medicare Broker | EasyKind Medicare
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10 mb-4">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Related resources
        </h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plan G vs. Plan N: Which Saves You More?
            </Link>
          </li>
          <li>
            <Link
              href="/services/best-and-cheapest-medicare-supplement"
              className="text-blue-600 hover:underline"
            >
              Best Medicare Supplement Plans in NJ for 2025–2026
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-supplement-open-enrollment-online"
              className="text-blue-600 hover:underline"
            >
              When to Enroll in Medigap: Open Enrollment and Guaranteed Issue
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement vs. Medicare Advantage: Honest Comparison
            </Link>
          </li>
          <li>
            <Link
              href="/services/exploring-medicare-supplemental-insurance-medigap-cost"
              className="text-blue-600 hover:underline"
            >
              Exploring Medicare Supplemental Insurance (Medigap) Costs
            </Link>
          </li>
          <li>
            <Link
              href="/services/how-much-does-the-best-medicare-supplemental-insurance-cost-per-month"
              className="text-blue-600 hover:underline"
            >
              How Much Does the Best Supplemental Insurance Cost Per Month?
            </Link>
          </li>
        </ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/health-drug-plans/medigap/basics/costs" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Get Medigap Costs</a> and <a href="https://www.medicare.gov/health-drug-plans/medigap/basics/how-to-compare-policies" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — How to Compare Medigap Policies</a>.</div>
            <div className="text-sm text-gray-600 mt-4">NJ residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can compare Medigap rates and file complaints through the <a href="https://www.nj.gov/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance</a> or get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For NJ-specific help, contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">New Jersey Department of Banking and Insurance</a> or the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP program</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For NJ-specific guidance, contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For NJ-specific guidance, contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific help, visit the <a href="https://www.nj.gov/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">New Jersey Department of Banking and Insurance</a> or contact your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can compare carrier rates and file complaints through the <a href="https://www.state.nj.us/dobi/division_insurance/" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-700 underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For free local counseling, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a> or the <a href="https://www.nj.gov/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">NJ residents can compare Medigap rates and consumer protections through the <a href="https://www.state.nj.us/dobi/division_insurance/ins_seniors.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">New Jersey Department of Banking and Insurance — Senior Resources</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free unbiased help from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For free unbiased counseling, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-700 underline">State Health Insurance Assistance Program (SHIP)</a> or the <a href="https://www.nj.gov/dobi/" rel="noopener noreferrer" target="_blank" className="text-blue-700 underline">NJ Department of Banking and Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free unbiased counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For NJ residents: contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Free state counseling: <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> offers unbiased Medicare guidance to New Jersey seniors.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/dobi/division_insurance/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can compare rates and file complaints through the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Free, unbiased state help: <a href="https://www.state.nj.us/dobi/division_insurance/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For free, unbiased counseling, contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey State Health Insurance Assistance Program (SHIP)</a> or your state's local SHIP office.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific help, contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">New Jersey Department of Banking and Insurance</a> or your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific guidance, contact <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">SHIP (State Health Insurance Assistance Program)</a> for free counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/dobi/division_consumers/insurance/ship.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can compare carrier rates and file complaints through the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">New Jersey Department of Banking and Insurance</a> or get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/dobi/division_consumers/insurance/ship.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can compare carrier rate histories through the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased plan counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can compare rates and file complaints through the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific help, contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">SHIP counselor</a> for free unbiased Medicare guidance.</div>
            <div className="text-sm text-gray-600 mt-4">Need unbiased local help? Contact <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">the NJ Department of Banking and Insurance</a> or your state's SHIP program.</div>
      </section>
    </main>
  );
}