import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "how much does the best medicare supplemental insurance cost per month | Free Plan-by-Plan Breakdown | MedicareYourself",
  description:
    "Compare Medicare Supplement Plan G and Plan N monthly costs by carrier and age. Save with a free, no-obligation quote — call 855-559-1700 today.",
  alternates: { canonical: "https://medicareyourself.com/services/how-much-does-the-best-medicare-supplemental-insurance-cost-per-month" },
  openGraph: {
    title:
      "how much does the best medicare supplemental insurance cost per month | Free Plan-by-Plan Breakdown | MedicareYourself",
    description:
      "How much does the best Medicare Supplemental insurance cost per month? Compare Plan G and Plan N rates from top carriers. Free quote — no obligation.",
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
      name: "How Much Does the Best Medicare Supplemental Insurance Cost Per Month",
      item: "https://medicareyourself.com/services/how-much-does-the-best-medicare-supplemental-insurance-cost-per-month",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "How Much Does the Best Medicare Supplemental Insurance Cost Per Month? Plan G and Plan N Compared",
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
      "How much does the best Medicare Supplement plan cost per month in 2025?",
    answer:
      "Depending on your age, zip code, and carrier, the best-rated Medigap plans (G and N) typically range from $90 to $300+ per month. Plan N runs lower because it shares a small amount of cost with you at the doctor's office. Rates vary significantly by insurance company, so comparing multiple carriers is essential.",
  },
  {
    question: "Is Plan G or Plan N a better value?",
    answer:
      "Plan G covers everything except the Part B deductible ($283/year in 2026). Plan N costs less per month but charges up to $20 copays for office visits and up to $50 for ER visits that don't result in admission. If you see doctors frequently, Plan G may save you more overall. If you're healthy and want lower premiums, Plan N is worth considering.",
  },
  {
    question: "Why do premiums vary so much between insurance companies?",
    answer:
      "Every Medigap plan with the same letter offers identical medical benefits by law. The difference is how each carrier prices its policies: community-rated, issue-age-rated, or attained-age-rated. Some carriers also price aggressively low to attract new members, then raise rates significantly after a few years through block increases.",
  },
  {
    question: "When is the best time to buy a Medigap plan to lock in the lowest rate?",
    answer:
      "Your Medigap Open Enrollment Period starts the month you turn 65 and are enrolled in Part B. During this 6-month window, carriers must accept you at their best rate regardless of health. After that window closes, you may face medical underwriting and higher premiums or denial.",
  },
,
  {
    question: "Does where I live affect how much I pay for a Medigap plan?",
    answer:
      "Yes. Medigap premiums vary widely by zip code because insurers price policies based on local claims experience, demographics, and competition. Two people with the same plan letter and carrier can pay very different amounts depending on their state and even county.",
  }
,
  {
    question: "Does where I live affect how much I pay for a Medigap plan?",
    answer:
      "Yes. Medigap premiums vary by zip code because carriers factor in local medical costs, claims history, and state regulations. Two neighbors in different states — or even different counties — can pay very different rates for the exact same Plan G or Plan N coverage.",
  }
,
  {
    question: "Does where I live affect how much I pay for a Medigap plan?",
    answer:
      "Yes. Medigap premiums vary significantly by zip code because carriers base rates on local claims experience, demographics, and state regulations. Two people with the same plan letter can pay very different amounts depending on their county. Comparing carrier rates in your specific area is the only way to find the true lowest price.",
  }
,
  {
    question: "Does where I live affect how much I pay for a Medigap plan?",
    answer:
      "Yes. Medigap premiums vary significantly by zip code because insurers price plans based on local claims experience, demographics, and state regulations. Two neighbors in different states — or even different counties — can pay very different amounts for identical Plan G coverage. That's why a personalized quote by zip code is the only way to know your true cost.",
  },
  {
    question: "Will my Medigap premium go up every year?",
    answer:
      "Most Medigap policies use attained-age rating, meaning your premium increases as you get older, plus annual adjustments for inflation and claims experience. Community-rated and issue-age-rated policies don't increase with age but may still rise due to inflation. Reviewing your plan annually helps ensure you're not overpaying compared to other carriers offering the same benefits.",
  }
,
  {
    question: "Does where I live affect how much I pay for a Medigap plan?",
    answer:
      "Yes. Medigap premiums vary significantly by zip code because carriers factor in local healthcare costs, claims history, and state regulations. Two neighbors in different states — or even different counties — can pay very different rates for the exact same plan letter. Always compare quotes specific to your address before enrolling.",
  },
  {
    question: "Can my Medigap premium go up after I enroll?",
    answer:
      "Yes. Most Medigap policies use attained-age pricing, meaning your premium increases as you get older. Carriers can also raise rates across an entire block of policyholders due to inflation and claims experience. Choosing a financially stable carrier with a history of modest increases helps protect your long-term budget.",
  },
  {
    question: "How do I get an accurate quote for my situation?",
    answer:
      "The most accurate way is to compare quotes from multiple carriers using your actual age, zip code, gender, and tobacco status. As a licensed broker representing many top-rated carriers, I can run a side-by-side comparison in minutes at no cost. Call 855-559-1700 to get your personalized rates.",
  }
,
  {
    question: "Does where I live affect how much I pay for Medigap?",
    answer:
      "Yes. Medigap premiums vary by zip code because carriers base rates on local claims experience and demographics. The same Plan G from the same company can cost noticeably more in one county than another. That is why it is important to compare quotes specific to your address rather than relying on national averages.",
  },
  {
    question: "Is there a yearly out-of-pocket limit with Original Medicare alone?",
    answer:
      "No. Original Medicare does not cap your annual out-of-pocket spending. Adding a Medigap policy is how many beneficiaries create predictable monthly costs and limit exposure to large hospital or outpatient bills. Without supplemental coverage, your share of costs could continue to grow with each service.",
  },
  {
    question: "Can I switch Medigap plans later if I find a cheaper rate?",
    answer:
      "You can apply to switch Medigap plans at any time, but outside your initial Open Enrollment Period you may face medical underwriting. That means a carrier can review your health history and either charge more or decline coverage. Some states have additional protections, so it is worth reviewing your options with a licensed broker before switching.",
  }
,
  {
    question: "Does where I live affect my Medicare Supplement premium?",
    answer:
      "Yes. Medigap premiums vary significantly by zip code because carriers price policies based on local claims experience and state regulations. Two people the same age with the same Plan G can pay very different rates depending on where they live.",
  }
,
  {
    question: "Does where I live affect how much I pay for a Medigap plan?",
    answer:
      "Yes. Medigap premiums vary by zip code because carriers price based on local claims experience, demographics, and state regulations. The same Plan G from the same carrier can cost noticeably more in one county than another. That's why a personalized quote based on your zip code is the only accurate way to compare.",
  },
  {
    question: "Do Medigap plans cover prescription drugs?",
    answer:
      "No. Medicare Supplement plans sold today do not include prescription drug coverage. To get drug coverage, you'll need to enroll in a separate standalone Medicare Part D plan. Pairing a Medigap policy with a Part D plan is the most common approach for predictable costs.",
  },
  {
    question: "Can my Medigap premium go up each year?",
    answer:
      "Yes. Most carriers use attained-age rating, which means your premium increases as you get older, plus general inflation adjustments. The benefits themselves never change because they're standardized by Medicare, but the price you pay can rise annually. Reviewing your plan each year helps ensure you're not overpaying.",
  }
,
  {
    question: "Does where I live affect how much I pay for a Medigap plan?",
    answer:
      "Yes. Medigap premiums vary widely by zip code because carriers price policies based on local claims experience, state regulations, and demographics. The same Plan G from the same carrier can cost noticeably more or less depending on whether you live in an urban or rural area. That's why getting quotes specific to your zip code matters.",
  },
  {
    question: "Are Medigap benefits the same across every insurance company?",
    answer:
      "Yes. Every Medigap plan with the same letter offers identical standardized benefits by federal law, regardless of which insurance company sells it. The only real differences between carriers are the monthly premium, customer service, and how aggressively they raise rates over time. That makes price and carrier stability the two factors worth comparing closely.",
  }
,
  {
    question: "Does where I live affect how much I pay for a Medigap plan?",
    answer:
      "Yes. Medigap premiums vary widely by zip code because insurers price policies based on local claims data, healthcare costs, and state regulations. Two people with identical plans can pay very different rates depending on the state and even the county they live in. That's why it's important to compare carriers licensed in your specific area.",
  },
  {
    question: "Can my Medigap premium go up after I enroll?",
    answer:
      "Yes. Most Medigap plans use attained-age pricing, meaning your premium increases as you get older, plus annual adjustments for inflation and claims experience. Community-rated and issue-age-rated plans may rise more slowly with age but still adjust over time. Reviewing your plan every couple of years helps ensure you're not overpaying.",
  },
  {
    question: "Do all insurance companies charge the same for the same Medigap plan letter?",
    answer:
      "No. By federal law, every Medigap plan with the same letter offers identical benefits, but each carrier sets its own premium. According to Medicare.gov, the price is the only real difference between policies with the same plan letter from different companies. Shopping across carriers is the single best way to lower your monthly cost.",
  }
,
  {
    question: "Does where I live affect my Medicare Supplement premium?",
    answer:
      "Yes. Medigap premiums vary widely by zip code because carriers factor in local medical costs, claims history, and state regulations. Two neighbors in different zip codes can pay noticeably different rates for the exact same Plan G or Plan N benefits. Call 855-559-1700 for a quote based on your specific location.",
  }
,
  {
    question: "Does where I live affect my Medicare Supplement premium?",
    answer:
      "Yes. Insurance companies set Medigap rates by zip code because medical costs and claims experience vary by region. Two people the same age can pay very different premiums for the identical plan letter depending on their state and county. Call 855-559-1700 to compare local carrier rates for your area.",
  }
,
  {
    question: "Does where I live affect my Medicare Supplement premium?",
    answer:
      "Yes. Medigap premiums vary widely by zip code because insurance companies factor in local medical costs and claims experience. Two people with the same age and plan letter can pay very different premiums depending on the state and even the county where they live.",
  },
  {
    question: "Will my Medigap premium increase over time?",
    answer:
      "Most Medigap policies are attained-age-rated, meaning the premium increases as you get older. Premiums can also rise due to inflation and overall claims experience within the carrier's block of business. Comparing carriers periodically helps you make sure you're still getting a competitive rate.",
  }
,
  {
    question: "Does where I live affect how much I pay for a Medigap plan?",
    answer:
      "Yes. Medigap premiums vary by state, county, and even zip code because carriers price based on local claims experience and competition. Two people with the same plan letter and the same carrier can pay very different premiums depending on their location. That's why comparing carrier rates in your specific zip code is the only reliable way to find the lowest price.",
  },
  {
    question: "Will my Medigap premium go up every year?",
    answer:
      "Most Medigap policies are attained-age-rated, meaning premiums increase as you get older, plus annual adjustments for inflation and claims. Issue-age and community-rated policies don't increase with age but can still rise due to inflation. Reviewing your rate annually and shopping carriers can help you stay on the lowest available premium if you can pass underwriting.",
  },
  {
    question: "Can I switch Medigap plans later to save money?",
    answer:
      "You can apply to switch Medigap plans or carriers at any time, but outside your Open Enrollment Period or a guaranteed-issue situation, you'll typically go through medical underwriting. If you're in good health, switching can lock in a lower premium. Call 855-559-1700 to compare your current rate against other carriers before renewing.",
  }
,
  {
    question: "Does where I live affect how much I pay for a Medigap plan?",
    answer:
      "Yes. Medigap premiums vary significantly by zip code because carriers base rates on local claims experience, demographics, and state regulations. Two people the same age with the same plan letter can pay very different amounts depending on whether they live in a high-cost or low-cost area. That's why comparing quotes specific to your zip code matters.",
  }
,
  {
    question: "Does where I live affect how much my Medicare Supplement plan costs?",
    answer:
      "Yes. Medigap premiums vary significantly by state, county, and even zip code because insurers price policies based on local claims experience and demographics. The same Plan G from the same carrier can cost very different amounts depending on your location. That's why comparing quotes specific to your zip code matters more than looking at national averages.",
  },
  {
    question: "Can my Medicare Supplement premium go up after I enroll?",
    answer:
      "Yes, premiums can increase over time due to inflation, claims trends, and the rating method your carrier uses. Attained-age policies rise as you get older, while community-rated and issue-age-rated policies have different increase patterns. Choosing a financially stable carrier with a history of moderate rate increases can help protect your long-term costs.",
  },
  {
    question: "How do I get the lowest monthly rate on the best Medicare Supplement plan?",
    answer:
      "The best way is to compare multiple top-rated carriers side by side for your exact age, zip code, and gender, since prices for identical coverage can vary widely. Enrolling during your Medigap Open Enrollment Period also locks in the best available rate without medical underwriting. Call 855-559-1700 for a free, no-obligation comparison.",
  }
,
  {
    question: "Does where I live affect how much I pay for a Medigap plan?",
    answer:
      "Yes. Medigap premiums vary significantly by state and even by zip code because carriers price based on local claims experience, demographics, and state insurance regulations. Two people with identical plans can pay very different amounts depending on where they live. That's why comparing carriers in your specific area is essential.",
  }
,
  {
    question: "Does where I live affect how much I pay for Medigap?",
    answer:
      "Yes, your zip code is one of the biggest factors in your monthly premium. Carriers price Medigap policies based on regional claims experience, so the same plan letter can cost noticeably more in one state or county than another. Your age, gender, and tobacco use also influence the rate.",
  },
  {
    question: "Can my Medigap premium go up after I enroll?",
    answer:
      "Yes. Medigap premiums can increase due to inflation, claims experience, and your rating method (community-rated, issue-age-rated, or attained-age-rated). Attained-age policies typically rise as you get older, while community-rated plans charge the same regardless of age but can still increase across the board.",
  }
,
  {
    question: "Does where I live affect how much I pay for Medicare Supplement insurance?",
    answer:
      "Yes, your ZIP code is a major factor in Medigap premiums. Carriers price policies based on local claims experience, so the same Plan G can cost noticeably more in one state or county than another. Tobacco use, gender, and age at enrollment can also influence your rate. Call 855-559-1700 to compare rates available in your specific area.",
  }
,
  {
    question: "Does where I live affect how much I pay for a Medigap plan?",
    answer:
      "Yes. Medigap premiums vary widely by zip code because carriers price based on local claims experience, state regulations, and competition. Two neighbors in different counties — or even different zip codes — can pay noticeably different rates for the exact same Plan G or Plan N policy. Call 855-559-1700 for a quote specific to your area.",
  }
,
  {
    question: "Does where I live affect my Medicare Supplement premium?",
    answer:
      "Yes. Medigap premiums vary by zip code because carriers price policies based on local claims experience, hospital costs, and state regulations. Two neighbors in different states — or even different counties — can pay very different rates for the identical Plan G or Plan N coverage.",
  }
,
  {
    question: "Does where I live affect my Medigap premium?",
    answer:
      "Yes. Carriers price Medigap policies by zip code because medical costs, utilization, and competition vary by region. Two people the same age can pay very different monthly premiums depending on their state and county. That's why comparing quotes specific to your zip code matters.",
  },
  {
    question: "Will my Medigap premium increase every year?",
    answer:
      "Most Medigap policies experience annual rate adjustments due to inflation, claims experience, and your rating method. Attained-age-rated plans typically increase as you get older, while community-rated plans charge the same regardless of age but still adjust for inflation. No carrier can guarantee flat premiums for life.",
  },
  {
    question: "Can I switch Medigap plans later if I find a lower rate?",
    answer:
      "You can apply to switch carriers at any time, but outside your initial Open Enrollment Period most states allow medical underwriting. That means the new carrier can review your health history and decline coverage or charge more. A few states have guaranteed-issue rules that make switching easier — call 855-559-1700 to review your options.",
  }
,
  {
    question: "Does where I live affect my Medigap premium?",
    answer:
      "Yes. Medigap premiums vary widely by zip code because carriers factor in local healthcare costs, claims history, and state regulations. The same Plan G from the same carrier can cost noticeably more in one county versus a neighboring one. That's why a personalized quote based on your zip code is the only way to know your true rate.",
  }
,
  {
    question: "Does where I live affect how much I pay for a Medigap plan?",
    answer:
      "Yes. Medigap premiums vary widely by state and even by zip code because carriers use local claims experience and demographics to set rates. The same Plan G from the same carrier can cost noticeably more in a high-cost urban area than in a rural one. That's why comparing quotes specific to your zip code matters.",
  }
,
  {
    question: "Does where I live affect how much I pay for a Medigap plan?",
    answer:
      "Yes. Medigap premiums vary significantly by state and even by zip code because carriers price based on local claims data, demographics, and competition. The same Plan G from the same carrier can cost noticeably more in one area than another. Always compare rates specific to your zip code before enrolling.",
  }
,
  {
    question: "Does where I live affect how much I pay for a Medigap plan?",
    answer:
      "Yes. Medigap premiums vary by zip code because carriers price policies based on local claims experience, demographics, and state regulations. Two people with the same plan letter can pay very different amounts depending on the state and even the county they live in. A few states (like Massachusetts, Minnesota, and Wisconsin) standardize Medigap plans differently than the rest of the country.",
  },
  {
    question: "Do Medigap premiums increase every year?",
    answer:
      "Most Medigap policies experience rate increases over time due to inflation, medical cost trends, and the age of the policyholder. The size and frequency of increases depend on how the carrier rates its plans — community-rated, issue-age-rated, or attained-age-rated. Working with a licensed broker can help you compare carriers known for stable rate histories.",
  },
  {
    question: "Can I switch Medigap plans later if I find a lower rate?",
    answer:
      "You can apply to switch Medigap plans at any time, but outside your Open Enrollment Period or a guaranteed-issue situation, carriers can use medical underwriting and deny coverage or charge more based on health. Some states have special rules — like annual birthday or anniversary rules — that allow switching without underwriting. Call 855-559-1700 to review your options for your state.",
  }
,
  {
    question: "Does where I live affect how much I pay for a Medigap policy?",
    answer:
      "Yes. Medigap premiums vary widely by state, county, and even zip code because insurers price based on local claims experience and competition. Two neighbors with the same Plan G from the same carrier could pay very different rates if they live across a county line. Call 855-559-1700 for a quote specific to your zip code.",
  },
  {
    question: "What's the difference between community-rated, issue-age, and attained-age pricing?",
    answer:
      "Community-rated plans charge the same premium regardless of age. Issue-age policies base your rate on the age you were when you bought the plan, and that starting point never changes due to age. Attained-age policies start lower but increase as you get older, which can make them more expensive over time.",
  }
,
  {
    question: "Does where I live affect how much I pay for Medigap?",
    answer:
      "Yes. Medigap premiums vary widely by zip code because carriers use local claims data, demographics, and state regulations to set rates. The same Plan G from the same carrier can cost noticeably more in one zip code than in a neighboring one. This is why getting quotes specific to your address is essential.",
  }
,
  {
    question: "Does where I live affect how much I pay for a Medigap plan?",
    answer:
      "Yes. Medigap premiums vary widely by zip code because carriers price based on local claims history and state regulations. Two people with the same plan letter and same age can pay very different premiums depending on their state and county. Call 855-559-1700 for a quote specific to your zip code.",
  },
  {
    question: "Will my Medigap premium go up every year?",
    answer:
      "Most Medigap policies are attained-age-rated, meaning premiums increase as you get older, plus inflation and claims adjustments. Community-rated and issue-age-rated policies don't raise premiums based on your age, but can still go up due to inflation. Asking your broker how a carrier prices its plans helps you predict future costs.",
  }
,
  {
    question: "Does where I live affect how much I pay for a Medigap plan?",
    answer:
      "Yes. Medigap premiums vary widely by zip code because insurers price policies based on local claims experience and state regulations. Two people the same age with the same plan letter can pay very different premiums depending on where they live. That's why comparing carrier rates in your specific area matters.",
  }
,
  {
    question: "Does where I live affect how much I pay for a Medigap plan?",
    answer:
      "Yes. Medigap premiums vary widely by zip code because carriers factor in local healthcare costs, claims experience, and state regulations. Two neighbors in different counties can pay noticeably different rates for the exact same lettered plan. Comparing carriers licensed in your specific area is the only way to find your true lowest cost.",
  }
];

export default function HowMuchDoesBestMedicareSupplementalInsuranceCostPerMonth() {
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
          How Much Does the Best Medicare Supplemental Insurance Cost Per Month
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        How Much Does the Best Medicare Supplemental Insurance Cost Per Month? Plan G and Plan N Compared
      </h1>

      <Image
        src="/images/how-much-does-the-best-medicare-supplemental-insurance-cost-per-month.webp"
        alt="how much does the best medicare supplemental insurance cost per month"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        How much does the best Medicare Supplemental insurance cost per month? Most people pay between $90 and $300+, depending on the plan letter, carrier, age, and zip code. The two plans worth comparing in 2025 and 2026 are Plan G and Plan N.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        The starting premium matters, but what you pay at 75 or 80 matters more. I'll break down the real costs so you know what to expect.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What makes a Medigap plan &quot;the best&quot; — coverage vs. cost
        </h2>
        <p className="text-gray-700 mb-2">
          Every Medigap plan with the same letter covers the exact same benefits, no matter which company sells it. That&apos;s federal law. A Plan G from one carrier is medically identical to a Plan G from another.
        </p>
        <p className="text-gray-700">
          So &quot;best&quot; really means: which plan letter fits your health needs, and which carrier offers stable long-term pricing? The cheapest premium today isn&apos;t always the cheapest over 10 years.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Monthly premiums for top-rated plans in 2025–2026
        </h2>
        <p className="text-gray-700 mb-3">
          Premiums vary by carrier, but here&apos;s the general range for a 65-year-old:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-3">
          <li><strong>Plan G:</strong> Roughly $120–$250/month</li>
          <li><strong>Plan N:</strong> Roughly $90–$200/month</li>
        </ul>
        <p className="text-gray-700">
          Rates climb with age. At 72, you might see premiums 20–40% higher than your starting rate. At 80+, the gap widens. That&apos;s why carrier selection and pricing method (community-rated vs. attained-age) matter so much.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Plan G vs. Plan N: where the price difference goes
        </h2>

        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Feature</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Plan G</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Plan N</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Part B deductible ($283 in 2026)</td>
                <td className="border border-gray-300 px-4 py-2">You pay it</td>
                <td className="border border-gray-300 px-4 py-2">You pay it</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Part B excess charges</td>
                <td className="border border-gray-300 px-4 py-2">Covered</td>
                <td className="border border-gray-300 px-4 py-2">Not covered</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Office visit copays</td>
                <td className="border border-gray-300 px-4 py-2">$0</td>
                <td className="border border-gray-300 px-4 py-2">Up to $20</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">ER copay (no admission)</td>
                <td className="border border-gray-300 px-4 py-2">$0</td>
                <td className="border border-gray-300 px-4 py-2">Up to $50</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">SNF coinsurance (days 21–100)</td>
                <td className="border border-gray-300 px-4 py-2">Covered</td>
                <td className="border border-gray-300 px-4 py-2">Covered</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Typical monthly premium (age 65)</td>
                <td className="border border-gray-300 px-4 py-2">$120–$250</td>
                <td className="border border-gray-300 px-4 py-2">$90–$200</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700">
          Plan N saves you $20–$50/month in premiums. In exchange, you share small costs at the doctor and lose excess charge protection. For most people, Plan G is the safer long-term bet. Plan N makes sense if you rarely visit the doctor and your providers all accept Medicare assignment.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          The rate increase nobody warns you about
        </h2>
        <p className="text-gray-700 mb-2">
          Your premium goes up for two separate reasons: your age and your carrier&apos;s block rate increases. When both hit the same year, 10–18% jumps are common. Some carriers price low on purpose to attract new customers, then raise rates sharply once you&apos;re locked in and underwriting makes switching harder.
        </p>
        <p className="text-gray-700">
          That&apos;s why I look at a carrier&apos;s 5- and 10-year rate history before I recommend them. The lowest quote at 65 can become the most expensive plan by 75.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Your open enrollment window is your biggest advantage
        </h2>
        <p className="text-gray-700 mb-2">
          During your 6-month Medigap Open Enrollment Period (starting the month you turn 65 and enroll in Part B), every carrier must accept you at their best rate. No health questions. No denials.
        </p>
        <p className="text-gray-700">
          Miss that window, and you face medical underwriting. If you have any health conditions, premiums can be significantly higher or you may be declined altogether. Start comparing carriers at least 6 months before Part B begins.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Find the best plan at the lowest rate for your situation
        </h2>
        <p className="text-gray-700">
          I compare rates from multiple carriers to find the plan that balances strong coverage with stable pricing. One call, and I&apos;ll show you exactly what Plan G and Plan N cost for your age and zip code, with real numbers, not estimates.
        </p>
      </section>

      <section className="mt-10 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
        <p className="text-xl font-semibold text-blue-900 mb-2">
          Get your personalized Medigap quote in minutes.
        </p>
        <p className="text-blue-800 mb-4">
          Call{" "}
          <a
            href="tel:8555591700"
            className="font-bold underline hover:text-blue-600"
          >
            855-559-1700
          </a>{" "}
          or{" "}
          <Link
            href="/quote"
            className="font-bold underline hover:text-blue-600"
          >
            get a free quote online
          </Link>
          . No obligation. No pressure.
        </p>
      </section>

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
              className="text-blue-700 hover:underline"
            >
              Medigap Plan G vs. Plan N: Full Comparison
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-supplement-open-enrollment-online"
              className="text-blue-700 hover:underline"
            >
              When to Enroll in a Medigap Plan
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-supplement-rate-jumped-why-and-what-can-i-do"
              className="text-blue-700 hover:underline"
            >
              Understanding Medicare Supplement Rate Increases
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-700 hover:underline"
            >
              Original Medicare vs. Medicare Advantage
            </Link>
          </li>
        </ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/health-drug-plans/medigap/basics/costs" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — How Medigap Costs Are Set</a> and <a href="https://www.medicare.gov/health-drug-plans/medigap/basics/compare-plan-benefits" rel="noopener noreferrer" target="_blank" className="underline">Compare Medigap Plan Benefits</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Free one-on-one counseling is available through your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a>, or contact the <a href="https://www.nj.gov/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medigap counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can compare state-specific rates through the <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-700 underline">New Jersey State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific guidance, contact the <a href="https://www.nj.gov/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">New Jersey Department of Banking and Insurance</a> or your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific guidance, contact the <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling in your state.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific guidance, contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">New Jersey Department of Banking and Insurance</a> or your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can compare carrier rates and file complaints through the <a href="https://www.nj.gov/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">New Jersey Department of Banking and Insurance</a> or get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can compare Medigap rates through the <a href="https://www.state.nj.us/dobi/division_insurance/ihcseh/medsuppinfo.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance</a> or get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a> or contact the <a href="https://www.nj.gov/dobi/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can verify carrier rates and file complaints with the <a href="https://www.nj.gov/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or get free unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can verify rates and carrier complaints through the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">New Jersey Department of Banking and Insurance</a> or get free counseling from <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">State help: <a href="https://www.nj.gov/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> &middot; <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">SHIP — Free State Medicare Counseling</a></div>
            <div className="text-sm text-gray-600 mt-4">For free, unbiased counseling, contact your <a href="https://www.shiphelp.org/about-medicare/regional-ship-location" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a> or the <a href="https://www.nj.gov/dobi/division_insurance/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">New Jersey SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-level help? Contact the <a href="https://www.nj.gov/dobi/division_insurance/" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">SHIP counseling program</a> for free, unbiased guidance.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For unbiased state-level counseling, visit the <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a> to find free help in your state.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or the free <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP program</a> for unbiased Medigap counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific guidance, visit the <a href="https://www.nj.gov/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">New Jersey Department of Banking and Insurance</a> or your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
      </section>
    </main>
  );
}