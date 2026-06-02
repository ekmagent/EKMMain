import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Plan G Rates for a 70-Year-Old in New Jersey | Free Quote in Minutes | MedicareYourself",
  description:
    "Compare Plan G rates for a 70-year-old in NJ with a licensed local broker. See how community-rated Medigap pricing works. Call 855-559-1700 for free quotes.",
  alternates: { canonical: "https://medicareyourself.com/services/plan-g-rates-for-70-year-old-in-new-jersey" },
  openGraph: {
    title:
      "Plan G Rates for a 70-Year-Old in New Jersey | Free Quote in Minutes | MedicareYourself",
    description:
      "Plan G rates for 70-year-olds in New Jersey vary widely by carrier. Compare real NJ premiums side by side. Get a free quote from a licensed local broker.",
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
      name: "Plan G Rates for 70 Year Old in New Jersey",
      item: "https://medicareyourself.com/services/plan-g-rates-for-70-year-old-in-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Plan G Rates for 70 Year Old in New Jersey: What Every Carrier Charges",
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
    question: "How much is Medicare Plan G in NJ for a 70-year-old?",
    answer:
      "Plan G premiums for a 70-year-old in New Jersey typically range from around $150 to over $350 per month depending on the carrier, your ZIP code, and whether the company uses attained-age or issue-age pricing. Call us at 855-559-1700 for an exact quote with your details.",
  },
  {
    question: "Do Plan G premiums increase with age?",
    answer:
      "With attained-age carriers, yes. Your premium rises as you get older. Issue-age carriers base your rate on the age you enrolled, so annual increases come from inflation and medical costs rather than birthdays. New Jersey offers both types.",
  },
  {
    question: "How much cheaper is Plan G than Plan F?",
    answer:
      "Plan F is no longer available to people who became eligible for Medicare after January 1, 2020. For those grandfathered into Plan F, the premium is often higher than Plan G even though Plan G only differs by requiring you to pay the $283 annual Part B deductible yourself.",
  },
  {
    question: "Can I switch Medigap carriers at age 70 in New Jersey?",
    answer:
      "Yes. New Jersey has a yearly 30-day open enrollment window around your Medigap policy anniversary. You can also switch anytime if you pass medical underwriting. A licensed broker can help you find the right timing and carrier.",
  },
  {
    question: "Does New Jersey use community rating for Medigap Plan G?",
    answer:
      "New Jersey uses community-rated pricing for Medigap, meaning carriers generally charge the same premium regardless of age within a given plan and area. That said, premiums still vary significantly between carriers, so shopping multiple companies is essential. Call 855-559-1700 and we'll pull live NJ rates for you.",
  },
  {
    question: "When can a 70-year-old in New Jersey enroll in Plan G?",
    answer:
      "The federal 6-month Medigap Open Enrollment Period starts when you are 65 or older and enrolled in Part B, giving you guaranteed issue rights during that window. Outside of that window or a qualifying guaranteed-issue situation, carriers in NJ may use medical underwriting. A licensed broker can review your options and timing.",
  },
  {
    question: "Is Plan G worth it at age 70 in New Jersey?",
    answer:
      "Plan G covers nearly all Medicare-approved out-of-pocket costs except the annual Part B deductible, which makes budgeting predictable at age 70. Whether it is the best value depends on your health, the carrier's rate stability, and how it compares to Plan N or high-deductible Plan G. We'll walk through the tradeoffs with you on a quick call.",
  }
,
  {
    question: "What does Medicare Plan G cover for a 70-year-old in New Jersey?",
    answer:
      "Plan G covers the Part A hospital coinsurance and deductible, Part B coinsurance, the first three pints of blood, skilled nursing facility coinsurance, hospice coinsurance, and Part B excess charges. The only standard Medicare-covered cost you pay out of pocket is the annual Part B deductible. After that deductible is met, Plan G typically leaves you with little to no cost-sharing on Medicare-approved services.",
  },
  {
    question: "Should a 70-year-old in NJ choose Plan G or Plan N?",
    answer:
      "Plan N usually has a lower premium than Plan G but adds small office-visit and ER copays and does not cover Part B excess charges. Plan G offers more predictable out-of-pocket costs once the Part B deductible is met. The right choice depends on how often you see doctors and your tolerance for variable copays — call 855-559-1700 and we'll compare both side by side.",
  }
,
  {
    question: "Why do Plan G premiums vary so much between carriers in New Jersey?",
    answer:
      "Every Medigap Plan G covers the exact same federally standardized benefits, so the only real difference between carriers is price and customer service. Insurance companies set their own premiums based on claims experience, administrative costs, and how they price policies in your area. That's why comparing multiple NJ carriers side by side is so important.",
  },
  {
    question: "Is Plan G worth it for a 70-year-old in New Jersey?",
    answer:
      "For most NJ retirees, Plan G offers the most comprehensive coverage available to people newly eligible for Medicare, leaving only the annual Part B deductible as out-of-pocket exposure. It pairs well with Original Medicare and lets you see any provider nationwide that accepts Medicare. Whether it's the best value depends on your health, budget, and how often you use care.",
  }
,
  {
    question: "Why do Plan G premiums vary so much between NJ carriers?",
    answer:
      "Every Medigap Plan G covers the same federally standardized benefits, so the only real difference between carriers is price and customer service. Insurance companies set their own premiums based on their claims experience, administrative costs, and discounts they offer. That's why shopping multiple carriers in New Jersey can lead to meaningful savings on identical coverage.",
  },
  {
    question: "Is Plan G worth it for a 70-year-old in New Jersey?",
    answer:
      "Plan G covers nearly all out-of-pocket costs under Original Medicare except the annual Part B deductible, making it one of the most comprehensive Medigap options available. For a 70-year-old who wants predictable healthcare spending and the freedom to see any doctor that accepts Medicare, Plan G is often a strong fit. Call 855-559-1700 to compare your options with a licensed broker.",
  },
  {
    question: "When does the Medigap Open Enrollment Period apply in NJ?",
    answer:
      "The federal 6-month Medigap Open Enrollment Period begins the month you turn 65 and are enrolled in Medicare Part B. During this window, you have guaranteed issue rights and cannot be denied coverage or charged more for health reasons. If you're already past this period at age 70, you may need to answer health questions to switch carriers.",
  }
,
  {
    question: "Why do Plan G premiums vary so much between carriers in New Jersey?",
    answer:
      "Even though every Plan G policy covers the exact same federally standardized benefits, each insurance company sets its own premium. That means the price is the only real difference between Plan G policies from different carriers. Shopping multiple NJ carriers is the most effective way to lower your monthly cost.",
  },
  {
    question: "Is it worth using a broker to compare Plan G rates in NJ?",
    answer:
      "Yes. A licensed independent broker can quote multiple New Jersey carriers in one call, explain how community-rated pricing works in NJ, and flag which companies have a history of stable renewal increases. There's no extra cost to you — premiums are the same whether you enroll through a broker or directly with the carrier.",
  }
,
  {
    question: "What does Medicare Plan G cover in New Jersey?",
    answer:
      "Plan G covers the Part A hospital coinsurance and deductible, Part B coinsurance, the first three pints of blood, skilled nursing facility coinsurance, and Part B excess charges. The only major out-of-pocket cost left to you is the annual Part B deductible. Coverage is standardized federally, so benefits are identical across NJ carriers.",
  },
  {
    question: "Should I work with a Medicare broker in New Jersey for Plan G?",
    answer:
      "A licensed NJ broker can compare every carrier offering Plan G in your area side by side at no cost to you. Because Medigap benefits are standardized, the only real differences are price, carrier stability, and household discounts. Call 855-559-1700 to speak with Anthony Orner directly.",
  }
,
  {
    question: "What does Medigap Plan G cover for a 70-year-old in New Jersey?",
    answer:
      "Plan G covers your Part A hospital coinsurance and deductible, Part B coinsurance, the first three pints of blood, skilled nursing facility coinsurance, hospice coinsurance, and foreign travel emergency care up to plan limits. The only standard Medicare-covered cost you pay out of pocket is the annual Part B deductible. After that, most Medicare-approved services are covered in full.",
  },
  {
    question: "Is Plan G the same with every carrier in New Jersey?",
    answer:
      "Yes. Medigap Plan G benefits are standardized by federal law, so the coverage is identical no matter which insurance company you choose in New Jersey. The only differences between carriers are premium price, customer service, and household discounts. That is why comparing multiple NJ carriers side by side is the best way to save.",
  },
  {
    question: "When should a 70-year-old apply for Plan G in New Jersey?",
    answer:
      "The best time to enroll is during your 6-month Medigap Open Enrollment Period, which begins the month you are 65 or older and enrolled in Part B. If you missed that window, you may still apply at any time, but carriers in NJ can require medical underwriting outside of guaranteed issue situations. Call 855-559-1700 and we will review your timing options.",
  }
,
  {
    question: "Why do Plan G premiums vary between carriers in New Jersey?",
    answer:
      "Even though every Medigap Plan G covers identical benefits by federal law, insurance companies each set their own premium. Differences come from underwriting practices, discounts, household savings, and overhead. That's why comparing multiple carriers side by side is the only way to find the best Plan G price in NJ.",
  },
  {
    question: "Is the 6-month Medigap Open Enrollment Period still relevant at age 70?",
    answer:
      "Yes. The 6-month Medigap Open Enrollment Period begins when you're 65 or older and enrolled in Part B. If you delayed Part B and are just now enrolling at 70, your one-time guaranteed-issue window opens then. Outside that window, carriers in NJ may apply medical underwriting.",
  }
,
  {
    question: "Why do Plan G premiums differ between carriers if benefits are identical?",
    answer:
      "Every Medigap Plan G covers the exact same federally standardized benefits, regardless of which insurance company sells it. The only difference between carriers is price and customer service. That's why comparing multiple NJ carriers side by side is the single most effective way to lower your premium.",
  },
  {
    question: "When is the best time to lock in Plan G as a 70-year-old in NJ?",
    answer:
      "The strongest protection comes during your 6-month Medigap Open Enrollment Period that begins when you're 65 and enrolled in Part B. Outside that window, most carriers in New Jersey require medical underwriting, which can affect approval. A licensed broker can review your situation and identify any guaranteed-issue rights you may qualify for.",
  },
  {
    question: "Should I work with a broker or call carriers directly?",
    answer:
      "A licensed independent broker can quote multiple NJ carriers in one call at no cost to you—premiums are the same whether you enroll through a broker or directly. Call 855-559-1700 to compare live Plan G rates with Anthony Orner, a licensed NJ Medicare broker.",
  }
,
  {
    question: "Why do Plan G premiums vary so much between carriers in New Jersey?",
    answer:
      "Every insurance company sets its own price for Medigap policies, even though the benefits in each lettered plan are standardized by federal law. That means Plan G coverage is identical across carriers, but the monthly premium can differ significantly. Comparing multiple carriers is the only way to find the best value.",
  }
,
  {
    question: "Why do Plan G premiums vary so much between carriers in New Jersey?",
    answer:
      "The benefits in Plan G are standardized by federal law, so every carrier covers the exact same things. The only real difference between policies is the premium each insurance company charges. That's why comparing multiple carriers side by side can save you hundreds of dollars per year for identical coverage.",
  },
  {
    question: "What is the Medigap Open Enrollment Period for a 70-year-old in New Jersey?",
    answer:
      "Your federal Medigap Open Enrollment Period is the 6-month window that begins the month you're 65 or older and enrolled in Medicare Part B. During this window, you have guaranteed issue rights and cannot be denied or charged more for health reasons. If you're 70 and missed this window, a licensed broker can review your options — call 855-559-1700.",
  }
,
  {
    question: "Why do Plan G premiums vary so much between carriers in New Jersey?",
    answer:
      "Every Medigap Plan G covers the exact same federally standardized benefits, regardless of which carrier sells it. The only real difference between policies is the premium each company charges, which is why shopping multiple carriers is so important. A licensed NJ broker can pull side-by-side quotes in minutes at 855-559-1700.",
  },
  {
    question: "Is the 6-month Medigap Open Enrollment Period the best time to enroll?",
    answer:
      "Yes. The federal 6-month Medigap Open Enrollment Period starts when you're 65 or older and enrolled in Part B, and during this window carriers cannot deny coverage or charge more based on your health. Outside this window, you may need to pass medical underwriting to switch plans in New Jersey.",
  },
  {
    question: "What does Plan G cover for a 70-year-old in New Jersey?",
    answer:
      "Plan G covers nearly all of the out-of-pocket costs Original Medicare leaves behind, including the Part A hospital deductible, coinsurance, and excess charges, with the only major exception being the annual Part B deductible. Once that deductible is met, your covered Medicare services are generally paid in full.",
  }
];

export default function PlanGRates70NJ() {
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
        <span>Plan G Rates for 70 Year Old in New Jersey</span>
      </nav>

      <article className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Plan G Rates for 70 Year Old in New Jersey: What Every Carrier Charges
        </h1>

        <Image
          src="/images/plan-g-rates-for-70-year-old-in-new-jersey.webp"
          alt="plan g rates for 70 year old in new jersey"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Plan G rates for a 70-year-old in New Jersey spread across a wide range depending on which carrier you pick, where you live, and how that company prices its policies. I've seen monthly premiums differ by $150+ for the exact same coverage in the same county.
        </p>
        <p className="text-lg mb-6">
          That gap is real money. Here's what drives it and how to land on the right side.
        </p>

        <PhoneCTA />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            2025 Plan G premiums for 70-year-olds across NJ carriers
          </h2>
          <p>
            Every Plan G policy sold in New Jersey covers the same benefits. The only difference is the premium. For a 70-year-old, monthly rates typically fall between $150 and $350+, depending on the insurer.
          </p>
          <p className="mt-2">
            Some carriers sit well under $200/month. Others charge over $300 for identical coverage. The New Jersey Department of Human Services publishes rate charts you can review, but the fastest way to compare is a side-by-side quote from a broker who works with all major carriers.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            Why your ZIP code changes your monthly rate
          </h2>
          <p>
            Carriers divide New Jersey into rating areas. A 70-year-old in Bergen County may pay a different premium than someone the same age in Cape May. Healthcare costs, hospital networks, and local claims data all factor in.
          </p>
          <p className="mt-2">
            Your exact ZIP code matters. When you call for a quote, have it ready.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            Issue-age vs. attained-age carriers available in New Jersey
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Attained-age:</strong> Your premium goes up as you age. Most NJ carriers use this model. At 70, your rate is already higher than what a 65-year-old pays with the same company.
            </li>
            <li>
              <strong>Issue-age:</strong> Your rate is based on the age you first enrolled. Annual increases still happen due to medical inflation, but you avoid the age-based bump each birthday.
            </li>
          </ul>
          <p className="mt-2">
            If you're enrolling at 70, an issue-age carrier locks your rate class now rather than letting it climb through your 70s and 80s. That difference compounds.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            How to switch carriers at 70 without a coverage gap
          </h2>
          <p>
            New Jersey gives Medigap policyholders a 30-day open enrollment window each year around your policy anniversary date. During that window, you can switch to a new carrier without answering health questions.
          </p>
          <p className="mt-2">
            Outside that window, you'll need to pass medical underwriting. A licensed broker coordinates the timing so your old plan ends the day your new plan starts. No gap.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            What Plan G covers (and what you still pay)
          </h2>
          <p>
            Plan G covers everything Original Medicare doesn't except the Part B deductible, which is $283/year in 2026. That means:
          </p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>$0 out-of-pocket for the $1,676 Part A deductible</li>
            <li>$0 for skilled nursing coinsurance ($209.50/day for days 21-100)</li>
            <li>$0 for Part B excess charges</li>
            <li>Foreign travel emergency coverage included</li>
          </ul>
          <p className="mt-2">
            Your only cost beyond the monthly premium: that $283 deductible once a year.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            Don't wait for next year's rate increase
          </h2>
          <p>
            I talk to people who stayed with an overpriced carrier for years because switching felt complicated. It's not. A 10-minute call gets you a side-by-side comparison. If a better rate exists, we handle the paperwork.
          </p>
          <p className="mt-2">
            If you switched from Plan G to a Medicare Advantage plan and regret it, getting back may require medical underwriting. That reality makes the decision harder to reverse the longer you wait.
          </p>
        </section>

        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
          <p className="text-xl font-semibold mb-2">
            Get your personalized Plan G rate in minutes.
          </p>
          <p className="text-lg mb-4">
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
            </Link>{" "}
            online.
          </p>
          <p className="text-sm text-gray-600">
            Licensed NJ broker. No obligation. No pressure.
          </p>
        </div>

        <section className="mt-12">
          <FAQSection faqs={faqs} />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
                className="text-blue-700 hover:underline"
              >
                Plan G vs. Plan N in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/services/best-and-cheapest-medicare-supplement"
                className="text-blue-700 hover:underline"
              >
                Best Medigap Plans in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/services/best-medicare-supplement-rates-by-age-plan-g-plan-n-plan-f-rates"
                className="text-blue-700 hover:underline"
              >
                Medicare Supplement Rates by Age
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-supplement-open-enrollment-online"
                className="text-blue-700 hover:underline"
              >
                When to Enroll in Medigap
              </Link>
            </li>
                      <li>
              <Link
                href="/services/compare-and-enroll-in-plan-g-online"
                className="text-blue-600 hover:underline"
              >
                Compare And Enroll In Plan G Online
              </Link>
            </li>
            <li>
              <Link
                href="/services/how-much-is-plan-g-in-nj"
                className="text-blue-600 hover:underline"
              >
                How Much Is Plan G In NJ
              </Link>
            </li>
            <li>
              <Link
                href="/services/quickest-way-to-enroll-into-plan-g"
                className="text-blue-600 hover:underline"
              >
                Quickest Way To Enroll Into Plan G
              </Link>
            </li>
            <li>
              <Link
                href="/services/plan-g-rates-for-68-year-old-in-new-jersey"
                className="text-blue-700 hover:underline"
              >
                Plan G Rates For 68 Year Old In New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/services/plan-g-rates-for-69-year-old-in-new-jersey"
                className="text-blue-700 hover:underline"
              >
                Plan G Rates For 69 Year Old In New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-supplement-plan-g-cost-for-70-year-old"
                className="text-blue-700 hover:underline"
              >
                Medicare Supplement Plan G Cost For 70 Year Old
              </Link>
            </li>
</ul>
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/health-drug-plans/medigap" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Compare Medigap policies</a> and the <a href="https://www.nj.gov/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey SHIP (State Health Insurance Assistance Program)</a> for free unbiased counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey resource: <a href="https://www.nj.gov/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> and <a href="https://www.nj.gov/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also review the <a href="https://www.nj.gov/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey resource: <a href="https://www.state.nj.us/dobi/division_insurance/ihcseh/heshome.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance — Medicare Supplement</a></div>
            <div className="text-sm text-gray-600 mt-4">New Jersey help: <a href="https://www.state.nj.us/dobi/division_insurance/ship/shipindex.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a></div>
            <div className="text-sm text-gray-600 mt-4">New Jersey help: <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.htm" rel="noopener noreferrer" target="_blank">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For free NJ counseling, visit the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey resources: <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> and the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey help: <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> offers free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey help: <a href="https://www.state.nj.us/dobi/division_insurance/ins_index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> and the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey help: <a href="https://www.nj.gov/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> offers free Medicare counseling for NJ residents.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
      </section>
      </article>
    </>
  );
}