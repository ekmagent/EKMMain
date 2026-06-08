import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "average cost of supplemental health insurance for seniors with medicare | Free Broker Comparison | MedicareYourself",
  description:
    "Compare 2026 Medigap costs by carrier, age, and state. Call 855-559-1700 for a free licensed broker rate review and lock in your lowest monthly premium.",
  alternates: { canonical: "https://medicareyourself.com/services/average-cost-of-supplemental-health-insurance-for-seniors-with-medicare" },
  openGraph: {
    title:
      "average cost of supplemental health insurance for seniors with medicare | Free Broker Comparison | MedicareYourself",
    description:
      "Average cost of supplemental health insurance for seniors with Medicare runs $90–$300+/month. See 2025–2026 rates by plan, age, and state. Free comparison.",
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
      name: "Average Cost of Supplemental Health Insurance for Seniors With Medicare",
      item: "https://medicareyourself.com/services/average-cost-of-supplemental-health-insurance-for-seniors-with-medicare",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Average Cost of Supplemental Health Insurance for Seniors With Medicare: What the Data Shows",
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
      "What is the average monthly cost of a Medigap plan for a 65-year-old?",
    answer:
      "For a 65-year-old enrolling during their Medigap Open Enrollment Period, Plan G typically runs $120–$200/month depending on carrier, state, gender, and tobacco status. Plan N usually costs $90–$160/month. Rates vary significantly by insurance company for the exact same coverage, so comparing carriers is essential.",
  },
  {
    question:
      "Why do Medigap premiums vary so much between insurance companies?",
    answer:
      "Every lettered Medigap plan offers identical benefits regardless of which company sells it. The difference is pricing method: community-rated, issue-age-rated, or attained-age-rated. Companies also set their own profit margins and have different claims experiences. Two carriers selling Plan G in the same zip code can differ by $50+/month.",
  },
  {
    question:
      "Is Medicare Advantage cheaper than Medigap supplemental insurance?",
    answer:
      "Medicare Advantage plans often have $0 premiums, making them look cheaper upfront. But they use copays, coinsurance, and network restrictions that can add up if you need care. Medigap has a monthly premium but covers most or all of your out-of-pocket costs with Original Medicare. Total annual spending depends on how much healthcare you actually use.",
  },
  {
    question:
      "When is the best time to buy supplemental insurance to get the lowest rate?",
    answer:
      "Your 6-month Medigap Open Enrollment Period, which starts the month you turn 65 and are enrolled in Part B, gives you guaranteed acceptance at the lowest available rate. Apply during this window and carriers can't charge more for pre-existing conditions or deny you coverage.",
  },
  {
    question: "Do Medigap premiums increase as I get older?",
    answer:
      "It depends on how the carrier prices the policy. Attained-age-rated plans increase as you age, issue-age-rated plans are based on your age at purchase, and community-rated plans charge everyone in an area the same regardless of age. All three pricing methods can also see increases over time due to inflation and claims costs.",
  },
  {
    question: "Does where I live affect what I pay for supplemental insurance?",
    answer:
      "Yes. Medigap premiums vary significantly by state and even by zip code within a state because carriers price based on local healthcare costs and claims experience. The same lettered plan from the same company can cost very different amounts in different regions.",
  },
  {
    question: "Can a broker help me find the lowest-cost supplemental plan?",
    answer:
      "Yes. A licensed independent broker can compare identical lettered plans across multiple carriers in your zip code, since benefits are standardized and price is the main difference. Call 855-559-1700 to compare rates at no cost to you.",
  }
,
  {
    question: "Does where I live affect how much I pay for Medigap?",
    answer:
      "Yes. Medigap premiums vary widely based on your state, zip code, and local claims experience. The same lettered plan with identical benefits can cost substantially more in one state than another. Comparing carriers licensed in your specific area is the only way to find the best available rate.",
  },
  {
    question: "What's the difference between community-rated, issue-age, and attained-age pricing?",
    answer:
      "Community-rated plans charge everyone the same premium regardless of age. Issue-age plans base your premium on your age when you first bought the policy and don't increase with age. Attained-age plans start lower but rise as you get older, which can make them more expensive long-term even if they look cheaper at first.",
  },
  {
    question: "Do I pay the Part B premium in addition to my Medigap plan?",
    answer:
      "Yes. Medigap supplements Original Medicare, so you must remain enrolled in Medicare Part B and continue paying the standard Part B premium. Your Medigap premium is separate and paid directly to the private insurance carrier that issued your policy.",
  }
,
  {
    question: "Does where I live affect how much I pay for supplemental insurance?",
    answer:
      "Yes. Medigap premiums vary widely by state and even by zip code within the same state. Carriers factor in local claims experience, state rating rules, and regional healthcare costs when setting prices. The same lettered plan with identical benefits can cost noticeably more or less depending on your location.",
  },
  {
    question: "Will my Medigap premium go up as I get older?",
    answer:
      "It depends on how your plan is priced. Attained-age policies increase as you age, issue-age policies are based on your age at enrollment but can still rise with inflation, and community-rated policies charge everyone the same regardless of age. All three types can adjust annually for inflation and claims costs.",
  },
  {
    question: "How can a licensed broker help me find the lowest Medigap premium?",
    answer:
      "Because every carrier sells the same lettered benefits but prices differ, a broker can compare multiple companies in your zip code side by side. This helps you avoid overpaying for identical coverage. Call 855-559-1700 to get a free comparison from Anthony Orner, a licensed Medicare broker.",
  }
,
  {
    question: "Does the cost of a Medigap plan increase as I get older?",
    answer:
      "It depends on the pricing method the insurance company uses. Attained-age-rated policies increase as you age, issue-age-rated policies are based on your age at purchase and don't rise due to age, and community-rated policies charge the same premium regardless of age. All three may still increase due to inflation and other factors.",
  }
,
  {
    question: "Does the cost of supplemental insurance go up as I age?",
    answer:
      "It depends on how the carrier prices the plan. Attained-age-rated policies increase as you get older, issue-age-rated policies are based on your age at purchase, and community-rated policies charge everyone in your area the same regardless of age. All three pricing methods can also see annual rate increases due to inflation and claims experience.",
  },
  {
    question: "Do I still pay the Part B premium if I have a Medigap plan?",
    answer:
      "Yes. A Medigap policy is in addition to Original Medicare, so you continue paying the standard Part B premium directly to Medicare along with your Medigap premium to the private insurer. Some higher-income beneficiaries also pay an income-related adjustment on top of the standard Part B premium.",
  },
  {
    question: "Can a broker help me find the lowest-cost Medigap plan?",
    answer:
      "Yes. Because every lettered Medigap plan offers identical federally standardized benefits, the only real difference is price and the carrier's rate-increase history. A licensed broker can compare every available carrier in your zip code at once so you don't overpay for the same coverage. Call 855-559-1700 for a free comparison.",
  }
,
  {
    question: "Does my state affect how much I pay for Medigap?",
    answer:
      "Yes, location is one of the biggest pricing factors. Medigap premiums vary widely by state and even by zip code due to local claims costs, regulations, and competition among carriers. Some states like New York and Connecticut also require community-rated pricing, which changes how age affects your premium.",
  },
  {
    question: "Will my Medigap premium go up every year?",
    answer:
      "Most Medigap policies sold today are attained-age-rated, meaning premiums increase as you get older in addition to standard inflation adjustments. Issue-age and community-rated policies don't raise rates based on your age, but all policies can increase due to inflation and claims experience. Asking about the rating method before you enroll helps predict long-term costs.",
  },
  {
    question: "Can a licensed broker help me find the lowest Medigap rate?",
    answer:
      "Yes. An independent broker licensed with multiple carriers can quote every Medigap plan available in your zip code and identify which company offers the lowest premium for the same lettered plan. Since benefits are standardized by Medicare, the only thing that changes is price and the carrier's rate stability. Call 855-559-1700 to compare your options.",
  }
,
  {
    question: "Does where I live affect what I pay for a Medigap policy?",
    answer:
      "Yes. Medicare.gov confirms that Medigap premiums vary widely based on the insurance company, the plan letter, and where you live. The same Plan G in one zip code can cost noticeably more or less than in a neighboring area. A licensed broker can pull rates specific to your county to find the lowest premium available.",
  },
  {
    question: "How do insurance companies set Medigap prices?",
    answer:
      "Carriers use one of three pricing methods: community-rated (same premium regardless of age), issue-age-rated (based on the age you buy), or attained-age-rated (increases as you get older). Each method affects what you'll pay now and in the future. Understanding which method a carrier uses helps you predict long-term cost — call 855-559-1700 to compare.",
  },
  {
    question: "Do Medigap premiums increase every year?",
    answer:
      "Most Medigap policies see annual rate adjustments due to inflation and claims experience, regardless of pricing method. Attained-age-rated plans also increase as you get older. Switching carriers later may require medical underwriting outside your Open Enrollment Period, so locking in a competitively priced plan early matters.",
  }
,
  {
    question: "Does where I live affect my Medigap premium?",
    answer:
      "Yes. Medigap premiums vary widely by state and even by zip code because carriers price based on local claims experience and state regulations. The same lettered plan from the same carrier can cost noticeably more in one region than another, which is why comparing rates in your specific area matters.",
  },
  {
    question: "Will my Medigap premium go up as I get older?",
    answer:
      "It depends on how the policy is rated. Attained-age policies increase as you age, issue-age policies are based on your enrollment age and only rise with inflation, and community-rated policies charge everyone in an area the same regardless of age. All three types can also see rate adjustments over time due to inflation and claims trends.",
  }
,
  {
    question: "Does where I live affect how much I pay for Medigap?",
    answer:
      "Yes. Medigap premiums vary widely by state and even by zip code because carriers price policies based on local claims experience and state regulations. The same lettered plan with identical benefits can cost noticeably more in one state than another. That's why comparing carrier rates in your specific area matters more than looking at national averages.",
  }
,
  {
    question: "Does where I live affect the cost of Medigap supplemental insurance?",
    answer:
      "Yes. Medigap premiums vary widely by state and even by zip code because each carrier prices based on local claims data, state regulations, and competition. The same Plan G can cost noticeably more in one state than another, which is why comparing rates filed in your specific area matters.",
  },
  {
    question: "Will my Medigap premium go up as I get older?",
    answer:
      "It depends on the pricing method. Attained-age-rated policies increase as you age, issue-age-rated policies are based on your age at purchase and only rise with inflation, and community-rated policies charge everyone the same regardless of age. Asking how a plan is rated before enrolling helps you predict long-term costs.",
  },
  {
    question: "Can I switch Medigap plans later if I find a cheaper rate?",
    answer:
      "You can apply to switch Medigap plans at any time, but outside your Open Enrollment Period or a guaranteed issue right, carriers can use medical underwriting and deny coverage or charge more. A licensed broker can review your health and state rules to see if switching is realistic before you apply.",
  }
,
  {
    question: "Does where I live affect my Medigap premium?",
    answer:
      "Yes. Medigap premiums vary widely by state, county, and even zip code because insurers price based on local claims experience and demographics. The same lettered plan from the same carrier can cost meaningfully more in one area than another, which is why a broker comparison across multiple carriers in your specific zip code matters.",
  },
  {
    question: "Will my Medigap premium go up as I get older?",
    answer:
      "It depends on how the carrier prices the policy. Attained-age-rated plans increase as you age, issue-age-rated plans are based on your age at purchase, and community-rated plans charge everyone in an area the same regardless of age. All three types can still rise due to inflation and claims trends.",
  },
  {
    question: "Can I switch Medigap plans later if I find a cheaper rate?",
    answer:
      "You can apply to switch Medigap plans at any time, but outside of your Open Enrollment Period or a guaranteed-issue situation, carriers can use medical underwriting and may decline you or charge more for pre-existing conditions. A licensed broker can review whether you qualify before you drop your current coverage.",
  }
,
  {
    question: "Does where I live affect how much I pay for a Medigap plan?",
    answer:
      "Yes. Medicare.gov confirms Medigap premiums vary widely based on the insurance company, the plan, and where you live. Two people in different zip codes can pay very different rates for the exact same lettered plan. That's why comparing carriers licensed in your state is the most reliable way to find the lowest rate.",
  },
  {
    question: "Are the benefits different if I pick a cheaper Medigap carrier?",
    answer:
      "No. Per Medicare.gov, the benefits in each lettered Medigap plan are standardized and identical no matter which insurance company sells it. Plan G from one carrier covers the exact same gaps as Plan G from another carrier. Price is the main difference, so shopping carriers can save you money for the same coverage.",
  }
,
  {
    question: "How do insurance companies decide how to price Medigap policies?",
    answer:
      "Carriers use one of three rating methods: community-rated (same premium regardless of age), issue-age-rated (based on the age you buy), or attained-age-rated (increases as you get older). The rating method affects not only your starting premium but how much it rises over time. Medicare.gov recommends asking which method a carrier uses before enrolling.",
  }
,
  {
    question: "Does where I live affect how much I pay for Medigap?",
    answer:
      "Yes. Medigap premiums vary widely by state and even by zip code because insurance companies factor in local claims experience, demographics, and regulatory environment. The same lettered plan from the same carrier can cost significantly more in one state than another, which is why comparing quotes in your specific area matters.",
  },
  {
    question: "Will my Medigap premium go up as I get older?",
    answer:
      "It depends on the pricing method your carrier uses. Attained-age-rated policies increase as you age, issue-age-rated policies are based on your age at enrollment but can rise with inflation, and community-rated policies charge everyone in your area the same regardless of age. All three types can still see annual rate adjustments for inflation and claims trends.",
  }
,
  {
    question: "Does where I live affect what I pay for Medigap?",
    answer:
      "Yes. Medicare.gov notes that Medigap premiums vary widely depending on the insurance company, the plan, and where you live. Two seniors in different zip codes can pay very different rates for the exact same lettered plan. That's why a broker comparison across your specific state and county matters.",
  },
  {
    question: "Do Medigap plans cover the Part B premium or Part A deductible?",
    answer:
      "Medigap plans do not pay your Part B premium — you continue paying that to Medicare directly. However, most popular Medigap plans, including Plan G and Plan N, fully cover the Part A hospital deductible. Coverage of other cost-sharing items depends on the specific plan letter you choose.",
  }
,
  {
    question: "Does where I live affect what I pay for Medigap coverage?",
    answer:
      "Yes. Medigap premiums vary widely by state, zip code, and even by county because each insurance company sets its own pricing based on local claims experience and regulations. The same lettered plan with identical benefits can cost very different amounts depending on your location. That's why comparing carriers in your specific area matters.",
  },
  {
    question: "Will my Medigap premium go up as I get older?",
    answer:
      "It depends on the pricing method your carrier uses. Attained-age-rated policies increase as you age, issue-age-rated policies are based on the age you first enrolled, and community-rated policies charge everyone in your area the same regardless of age. All three types can also rise due to inflation and claims experience.",
  }
,
  {
    question: "Do Medigap premiums increase as I get older?",
    answer:
      "It depends on how the insurance company prices its policies. Attained-age-rated plans increase as you age, issue-age-rated plans are based on your age at purchase, and community-rated plans charge everyone the same regardless of age. All three pricing methods may still see annual increases due to inflation and claims experience.",
  },
  {
    question: "Does Medigap cover the Part B premium or Part A deductible?",
    answer:
      "Medigap does not cover your monthly Part B premium — you continue paying that to Medicare directly. However, most Medigap plans, including Plan G and Plan N, fully cover the Part A hospital deductible and many other Original Medicare out-of-pocket costs. Coverage specifics depend on the lettered plan you choose.",
  },
  {
    question: "Can I switch Medigap plans later to lower my cost?",
    answer:
      "Yes, but outside your Medigap Open Enrollment Period most states allow carriers to use medical underwriting, which means you can be denied or charged more for health conditions. A few states have annual or birthday rules that allow guaranteed switching. Call 855-559-1700 to review your state's rules before changing plans.",
  }
,
  {
    question: "Does where I live affect the cost of supplemental health insurance?",
    answer:
      "Yes. Medigap premiums vary widely by state and even by zip code because insurers price based on local claims experience, demographics, and state regulations. The same lettered plan with identical benefits can cost significantly more in one region than another. Comparing carriers licensed in your specific state is the only way to find your lowest available rate.",
  },
  {
    question: "Will my Medigap premium go up as I get older?",
    answer:
      "It depends on how the carrier prices the plan. Attained-age-rated policies increase as you age, issue-age-rated policies are based on your age at purchase, and community-rated policies charge everyone the same regardless of age. All three types can still increase over time due to inflation and claims trends, so the pricing method matters for long-term affordability.",
  },
  {
    question: "Can a licensed broker help me find the cheapest supplemental plan?",
    answer:
      "Yes. An independent broker can compare every Medigap carrier available in your state and show you side-by-side pricing for the same lettered plan. Because benefits are standardized by Medicare, you're really shopping for the lowest premium and most stable rate history. Call 855-559-1700 for a free comparison with no obligation.",
  }
,
  {
    question: "How much can Medigap premiums vary depending on where I live?",
    answer:
      "Medigap premiums vary widely by state, zip code, insurance company, and the specific lettered plan you choose. Industry data shows monthly premiums can range from under fifty dollars to several hundred dollars for the same lettered plan. That's why comparing multiple carriers in your zip code is the single most important step in lowering your cost.",
  },
  {
    question: "Do Medigap premiums increase as I get older?",
    answer:
      "It depends on how the carrier prices its policy. Attained-age-rated plans go up as you age, issue-age-rated plans are based on the age you enrolled and don't rise with age, and community-rated plans charge everyone in your area the same regardless of age. All three pricing types can also rise annually due to inflation and claims experience.",
  },
  {
    question: "Does a Medigap plan cover the Part B premium or Part A deductible?",
    answer:
      "Medigap plans don't pay your Part B premium — you continue paying that directly to Medicare. However, most popular Medigap plans, including Plan G, fully cover the Part A hospital deductible and many other Original Medicare cost-sharing amounts. Coverage details vary by lettered plan, which is standardized across all carriers.",
  }
,
  {
    question: "Does the Medigap plan I pick affect what Original Medicare pays?",
    answer:
      "No. Original Medicare pays its share of approved costs first, and then your Medigap policy pays its share based on the lettered plan you chose. The benefits within each lettered plan are standardized by federal law, so coverage is identical from one carrier to the next.",
  },
  {
    question: "Will my Medigap premium increase as I get older?",
    answer:
      "It depends on how the carrier prices the policy. Attained-age-rated plans increase as you age, issue-age-rated plans are based on the age you bought in, and community-rated plans charge everyone in an area the same regardless of age. All three pricing types can also see annual increases due to inflation and claims experience.",
  },
  {
    question: "Can a licensed broker help me find the lowest Medigap rate?",
    answer:
      "Yes. Because every carrier sets its own premium for the exact same standardized benefits, a licensed broker can quickly compare rates across multiple companies in your zip code. Call 855-559-1700 to get a side-by-side comparison at no cost to you.",
  }
,
  {
    question: "Does where I live really change what I pay for Medigap?",
    answer:
      "Yes. Medicare.gov confirms that Medigap premiums vary widely based on the insurance company, the specific lettered plan, and your geographic location. The same Plan G can cost dramatically different amounts in two neighboring states, or even two zip codes in the same state. That's why pulling quotes from multiple carriers licensed in your area matters.",
  }
,
  {
    question: "Does where I live affect what I pay for Medicare supplemental insurance?",
    answer:
      "Yes, location is one of the biggest factors in Medigap pricing. Premiums vary widely by state and even by zip code because each insurance company sets its own rates based on local claims experience and state regulations. The exact same lettered plan can cost dramatically more in one area than another.",
  },
  {
    question: "Will my Medigap premium go up as I get older?",
    answer:
      "It depends on how the policy is priced. Attained-age-rated plans increase as you age, issue-age-rated plans are based on your age when you bought the policy, and community-rated plans charge everyone in the area the same regardless of age. All three types can still increase due to inflation and rising healthcare costs.",
  },
  {
    question: "Does a broker charge me extra to compare supplemental insurance rates?",
    answer:
      "No. Licensed Medicare brokers are paid by the insurance carriers, so comparing plans through a broker costs you nothing. Premiums are set by the carrier and filed with your state, meaning you pay the same rate whether you enroll directly or through a broker. Call 855-559-1700 for a free comparison.",
  }
,
  {
    question: "Do Medigap premiums increase as I get older?",
    answer:
      "It depends on how the carrier prices the policy. Community-rated plans charge the same premium regardless of age, issue-age-rated plans base premiums on your age at purchase, and attained-age-rated plans increase as you grow older. All three pricing methods can also rise due to inflation and claims experience.",
  },
  {
    question: "Does where I live affect the cost of supplemental insurance?",
    answer:
      "Yes. Medigap premiums vary widely by state and even by zip code because carriers price policies based on local claims experience, competition, and state regulations. The same lettered plan with identical benefits can cost significantly more in one state than another.",
  }
,
  {
    question: "Do Medigap premiums go up as I get older?",
    answer:
      "It depends on how the carrier prices the policy. Attained-age-rated plans increase as you age, issue-age-rated plans are based on your age at purchase, and community-rated plans charge the same regardless of age. All three types can still see annual increases due to inflation and claims experience, so the pricing method matters for long-term cost.",
  },
  {
    question: "Does where I live affect what I pay for supplemental insurance?",
    answer:
      "Yes, premiums for the same lettered Medigap plan vary significantly by state and even by zip code. Carriers price based on local claims data, regulations, and competition. According to Medicare.gov, Medigap premiums vary widely depending on the insurance company, the plan, and where you live.",
  },
  {
    question: "Can I be charged more for a Medigap plan if I have health conditions?",
    answer:
      "If you apply during your 6-month Medigap Open Enrollment Period or qualify for a guaranteed issue right, carriers cannot charge you more or deny coverage based on health. Outside those windows, most states allow medical underwriting, which can raise your premium or result in denial. Timing your application matters.",
  }
,
  {
    question: "What factors most affect what I'll pay for Medigap coverage?",
    answer:
      "Premiums are influenced by your age, gender, tobacco use, zip code, the insurance carrier's pricing method (community-rated, issue-age-rated, or attained-age-rated), and the specific lettered plan you choose. Because benefits within each lettered plan are standardized, the carrier you pick is often the biggest controllable factor. A licensed broker can compare every carrier in your zip code at once.",
  },
  {
    question: "Will my Medigap premium go up every year?",
    answer:
      "Most Medigap policies experience annual rate increases tied to inflation, medical trend, and claims experience. Attained-age-rated policies also increase as you get older, while issue-age-rated and community-rated policies don't raise premiums based on your age alone. Reviewing your plan each year ensures you're not overpaying for identical coverage.",
  },
  {
    question: "Can a broker help me find a lower rate without changing my benefits?",
    answer:
      "Yes. Since every carrier selling the same lettered Medigap plan must offer identical benefits, switching carriers can lower your premium without reducing coverage. A licensed broker compares pricing across multiple carriers at no cost to you. Call 855-559-1700 to run a free comparison for your zip code.",
  }
,
  {
    question: "Do Medigap premiums increase as I get older?",
    answer:
      "It depends on how the carrier prices the policy. Attained-age-rated plans increase as you age, issue-age-rated plans are based on your age when you bought the policy, and community-rated plans charge everyone in the area the same regardless of age. All three pricing methods can also see annual increases due to inflation and claims experience.",
  }
,
  {
    question: "Do Medigap premiums increase as I get older?",
    answer:
      "It depends on how the carrier prices the policy. Attained-age-rated plans go up as you get older, issue-age-rated plans are based on your age when you bought the policy, and community-rated plans charge everyone in the area the same regardless of age. All three types may also increase due to inflation and claims experience.",
  },
  {
    question: "Does the same Medigap plan letter cover the same things at every company?",
    answer:
      "Yes. Medicare standardizes Medigap benefits by plan letter, so Plan G from one carrier provides the exact same coverage as Plan G from another carrier. The only real difference between identical plans is the monthly premium, which is why comparing carriers in your zip code can save significant money. Call 855-559-1700 for a free side-by-side comparison.",
  },
  {
    question: "Do I need a separate drug plan if I have a Medigap policy?",
    answer:
      "Yes. Medigap policies sold today do not include prescription drug coverage, so most enrollees pair their plan with a standalone Medicare Part D drug plan. Skipping Part D when first eligible can also trigger a late enrollment penalty that lasts as long as you have Medicare.",
  }
,
  {
    question: "Do Medigap premiums increase as I get older?",
    answer:
      "It depends on the carrier's pricing method. Attained-age-rated policies increase as you get older, issue-age-rated policies are based on your age at purchase but can rise with inflation, and community-rated policies charge the same regardless of age. All three methods can also see annual rate adjustments tied to claims experience and inflation.",
  },
  {
    question: "Does a Medigap plan cover prescription drugs?",
    answer:
      "No. Medigap plans sold today do not include prescription drug coverage. To get drug coverage with Original Medicare and a Medigap policy, you need to enroll in a standalone Medicare Part D prescription drug plan.",
  }
,
  {
    question: "Do Medigap premiums increase as I get older?",
    answer:
      "It depends on the carrier's pricing method. Attained-age-rated policies increase as you age, issue-age-rated policies are based on your age at purchase and don't rise due to age, and community-rated policies charge the same premium regardless of age. All three types may still increase due to inflation and claims experience.",
  },
  {
    question: "Does where I live affect how much I pay for a Medigap plan?",
    answer:
      "Yes. Medicare.gov notes that Medigap premiums vary widely based on the insurance company, the specific plan, and your location. Even within the same state, ZIP-level rating can produce meaningful price differences for identical coverage.",
  }
,
  {
    question: "Does my Medigap premium increase as I get older?",
    answer:
      "It depends on how the carrier prices the policy. Attained-age-rated plans increase as you age, issue-age-rated plans lock in your age at enrollment, and community-rated plans charge everyone in your area the same regardless of age. All three pricing methods can also see annual increases due to inflation and claims experience.",
  },
  {
    question: "Does supplemental insurance cover the Part B premium or Part A deductible?",
    answer:
      "Medigap plans do not cover the Part B premium — you continue paying that directly to Medicare. However, most Medigap plans (including Plan G and Plan N) fully cover the Part A hospital deductible, and Plan G covers the Part B deductible after you meet it once per year.",
  },
  {
    question: "Can I switch Medigap plans later to find a lower price?",
    answer:
      "You can apply to switch Medigap plans at any time, but outside your Open Enrollment Period or a guaranteed-issue situation, carriers in most states can use medical underwriting and deny coverage or charge more based on health history. A licensed broker can review whether you qualify for a lower-cost plan with the same benefits before you drop your current coverage.",
  }
,
  {
    question: "Does where I live affect what I pay for a Medigap policy?",
    answer:
      "Yes. Medicare.gov confirms that Medigap premiums vary widely based on the insurance company, the specific plan letter, and your geographic location. Two people with the same plan letter in different zip codes can pay very different premiums for identical coverage. That's why comparing carriers licensed in your state is critical.",
  },
  {
    question: "Can I be denied Medigap coverage or charged more for health issues?",
    answer:
      "During your 6-month Medigap Open Enrollment Period, insurance companies must sell you any policy they offer at their best available rate regardless of health status. Outside that window, in most states carriers can use medical underwriting and either deny coverage or charge higher premiums. A few states have year-round guaranteed issue rules.",
  },
  {
    question: "Do Medigap premiums go up as I get older?",
    answer:
      "It depends on how the carrier prices the plan. Community-rated policies charge everyone the same regardless of age, issue-age-rated policies base premiums on your age at purchase, and attained-age-rated policies increase as you get older. All three pricing methods are also subject to general rate increases over time.",
  }
,
  {
    question: "Do Medigap premiums increase as I get older?",
    answer:
      "It depends on the pricing method your carrier uses. Attained-age policies increase as you age, issue-age policies are based on your age at purchase, and community-rated policies charge the same regardless of age. All three can still see annual increases due to inflation and claims experience.",
  },
  {
    question: "Does where I live affect the cost of supplemental insurance?",
    answer:
      "Yes, Medigap premiums vary widely by state and even by zip code. According to Medicare.gov, the same lettered plan can have very different premiums depending on the insurance company and your location. State regulations and local medical costs both influence the final rate.",
  },
  {
    question: "Can I switch Medigap plans later to lower my premium?",
    answer:
      "You can apply to switch Medigap plans at any time, but outside of your Open Enrollment Period or a guaranteed issue right, carriers can use medical underwriting. That means you could be charged more or denied based on health history. A licensed broker can check whether you qualify for a lower-cost switch in your state.",
  }
,
  {
    question: "Does the cost of supplemental insurance go up every year?",
    answer:
      "Most Medigap policies increase in price over time due to inflation and rising medical costs. How quickly premiums rise depends on the carrier's rating method — community-rated, issue-age-rated, or attained-age-rated plans each behave differently as you age. Asking a broker to show projected rate history for each carrier is one of the best ways to avoid a plan that looks cheap today but climbs sharply later.",
  }
,
  {
    question: "Does the federal government set Medigap prices?",
    answer:
      "No. While the benefits in each lettered Medigap plan are standardized by federal law, each private insurance company sets its own premium. Medicare.gov confirms the price is the only difference between policies with the same plan letter sold by different companies, which is why shopping multiple carriers matters.",
  },
  {
    question: "Will my Medigap premium go up as I get older?",
    answer:
      "It depends on the pricing method. Attained-age policies increase as you age, issue-age policies are based on the age you bought the plan, and community-rated policies charge everyone in the area the same regardless of age. All three types can still see annual increases due to inflation and claims costs.",
  },
  {
    question: "How can a licensed broker help me find the lowest supplemental insurance rate?",
    answer:
      "An independent broker can quote multiple carriers at once and identify which insurer is most competitive in your zip code for your age and household. Because broker compensation is built into the rate by the carrier, you don't pay more for using one. Call 855-559-1700 for a free side-by-side comparison.",
  }
,
  {
    question: "How do the three Medigap pricing methods affect what I pay over time?",
    answer:
      "Community-rated plans charge everyone the same premium regardless of age. Issue-age-rated plans base your premium on the age you were when you bought the policy and don't increase due to aging. Attained-age-rated plans start lower but rise as you get older, which can make them more expensive long-term. All three are still subject to inflation and carrier rate adjustments.",
  }
,
  {
    question: "How do insurance companies set Medigap premiums?",
    answer:
      "Per Medicare.gov, carriers use one of three pricing methods: community-rated (same premium regardless of age), issue-age-rated (based on the age you bought the policy), or attained-age-rated (premium rises as you get older). The pricing method affects what you pay now and how rates change over time. Call 855-559-1700 to compare which pricing structure fits your long-term budget.",
  },
  {
    question: "Does the same Medigap plan letter cost the same at every company?",
    answer:
      "No. Medicare.gov confirms that benefits within each lettered plan are standardized, but premiums can vary significantly between insurance companies selling the identical plan in the same zip code. That's why comparing carriers through a licensed broker is the most effective way to find the lowest rate for the coverage you want.",
  },
  {
    question: "Can my Medigap premium go up after I enroll?",
    answer:
      "Yes. Premiums can increase due to inflation, claims experience, or your age depending on the pricing method used by the carrier. Community-rated plans don't raise rates based on your age, while attained-age-rated plans typically increase as you grow older.",
  }
,
  {
    question: "How do insurance companies set Medigap premiums?",
    answer:
      "Medigap carriers use one of three pricing methods: community-rated (same price regardless of age), issue-age-rated (based on the age you buy the policy), or attained-age-rated (premium rises as you get older). Each method affects how much you pay today and how rates change in the future. According to Medicare.gov, the benefits in each lettered plan are identical no matter which company sells it — only the price differs.",
  }
,
  {
    question: "Does the state I live in affect my Medigap premium?",
    answer:
      "Yes. Medigap premiums vary widely by zip code because carriers price based on local claims experience, state regulations, and competition. The same Plan G from the same insurer can cost noticeably more or less depending on where you live, which is why a licensed broker comparison across carriers in your specific state matters.",
  }
,
  {
    question: "What are the three Medigap pricing methods and why do they matter?",
    answer:
      "Insurance companies set Medigap premiums using one of three methods: community-rated (everyone pays the same regardless of age), issue-age-rated (based on the age you bought the policy and doesn't increase due to age), or attained-age-rated (starts lower but increases as you get older). Attained-age policies often look cheapest at 65 but can become the most expensive over time. Knowing which method your carrier uses helps you predict long-term costs.",
  },
  {
    question: "Does my zip code really affect what I pay for a Medigap plan?",
    answer:
      "Yes. Medicare.gov confirms that Medigap premiums vary widely based on where you live, even for the exact same lettered plan. Carriers price by state and often by zip code based on local claims experience and medical costs. Two neighbors in different counties can pay noticeably different premiums for identical coverage.",
  },
  {
    question: "Can a licensed broker actually find me a lower rate than going direct?",
    answer:
      "A licensed independent broker compares rates from multiple carriers in your zip code at no cost to you, since commissions are paid by the insurance company and built into the standardized premium. Because every lettered Medigap plan offers identical benefits, the only real variable is price and carrier stability. Call 855-559-1700 to compare your options side by side.",
  }
,
  {
    question: "Do Medigap premiums increase as I get older?",
    answer:
      "It depends on how the carrier prices the policy. Attained-age-rated plans go up as you age, issue-age-rated plans are based on your age when you bought the policy, and community-rated plans charge everyone in the area the same regardless of age. All three types can still be affected by inflation and claims experience. Call 855-559-1700 to compare which pricing method works best for your situation.",
  },
  {
    question: "Does where I live affect what I pay for supplemental insurance?",
    answer:
      "Yes. According to Medicare.gov, Medigap premiums vary widely by state and even zip code because of differences in local healthcare costs, state regulations, and how many carriers compete in your area. The same lettered plan can cost significantly more in one state than another.",
  }
];

export default function AverageCostSupplementalInsurancePage() {
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
          Average Cost of Supplemental Health Insurance for Seniors With Medicare
        </span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
        Average Cost of Supplemental Health Insurance for Seniors With Medicare: What the Data Shows
      </h1>

      <Image
        src="/images/average-cost-of-supplemental-health-insurance-for-seniors-with-medicare.webp"
        alt="average cost of supplemental health insurance for seniors with medicare"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        Average cost of supplemental health insurance for seniors with Medicare falls between $90 and $300+ per month, depending on the plan letter, your age, where you live, and which carrier you choose. Those numbers can feel abstract until you see what real people in your zip code actually pay.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        I pull rate comparisons daily for clients in NJ and PA. Here's what drives those numbers and how to find the right price for your situation.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Medigap vs. Medicare Advantage — two different cost structures
        </h2>
        <p className="text-gray-700 mb-3">
          Medigap (Medicare Supplement) plans charge a monthly premium on top of your $202.90/month Part B premium. In return, they cover most or all of the gaps in Original Medicare: the $1,676 Part A deductible, the $283 Part B deductible (Plan G doesn't cover this one), and coinsurance like the $209.50/day for skilled nursing days 21–100.
        </p>
        <p className="text-gray-700 mb-3">
          Medicare Advantage plans often have $0 premiums. But you'll face copays, coinsurance, prior authorizations, and network restrictions at the point of care. Total annual cost depends heavily on how much healthcare you use.
        </p>
        <p className="text-gray-700">
          A $0 premium isn't the same as $0 cost. If you're comparing the two, look at total projected out-of-pocket spending, not just the monthly bill.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          National averages vs. what NJ and PA seniors actually pay
        </h2>
        <p className="text-gray-700 mb-3">
          Nationally, Medigap premiums can range from as low as $32/month for high-deductible plans to over $628/month for older enrollees in expensive markets. The most popular plan, Plan G, averages roughly $150–$250/month for a 65-year-old in the mid-Atlantic region.
        </p>
        <p className="text-gray-700">
          NJ and PA have different state rules, different carrier pools, and different pricing. Two carriers selling identical Plan G coverage in the same county can differ by $50 or more per month. That's why comparing isn't optional; it's where the savings are.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How age, gender, and tobacco use affect your premium
        </h2>
        <p className="text-gray-700 mb-3">
          Most Medigap carriers in our area use attained-age pricing, meaning your premium starts lower and increases as you get older. A 65-year-old might pay $140/month for Plan G; at 75, the same plan could be $200+.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <strong>Age:</strong> The single biggest factor. Locking in during your Medigap Open Enrollment Period (6 months starting the month you're 65 and enrolled in Part B) gets you the lowest rate with no medical underwriting.
          </li>
          <li>
            <strong>Gender:</strong> Women typically pay 5–15% less than men for the same plan.
          </li>
          <li>
            <strong>Tobacco use:</strong> Smokers pay 10–25% more with most carriers.
          </li>
          <li>
            <strong>Household discounts:</strong> Some carriers offer 5–7% off when two people in the same household enroll.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Plan G vs. Plan N — the cost tradeoff most seniors face
        </h2>
        <p className="text-gray-700 mb-3">
          Plan G covers everything except the $283/year Part B deductible. Plan N costs less per month but adds small copays at doctor visits (up to $20) and ER visits ($50, waived if admitted).
        </p>
        <p className="text-gray-700">
          For many seniors, the $30–$50/month savings on Plan N makes sense if you don't see specialists frequently. For others, Plan G's predictability is worth the extra premium. Neither answer is wrong; it depends on how you use healthcare.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why the same plan costs different amounts from different carriers
        </h2>
        <p className="text-gray-700 mb-3">
          Every Plan G is standardized by Medicare. The benefits are identical no matter who sells it. The only difference between Company A's Plan G and Company B's Plan G is the premium and the company's customer service.
        </p>
        <p className="text-gray-700">
          This is why a side-by-side carrier comparison saves real money. I regularly see clients save $400–$600/year by switching to a lower-cost carrier for the exact same coverage.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Request a side-by-side carrier comparison at no cost
        </h2>
        <p className="text-gray-700 mb-3">
          I'll pull real quotes from every major carrier in your zip code, organized by plan letter and sorted by price. You'll see exactly what you'd pay, no guessing, no ballpark numbers from a national website.
        </p>
        <p className="text-gray-700">
          There's no fee for this. Brokers are paid by the insurance carriers, not by you, and your premium is the same whether you call the carrier directly or work with me.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-xl p-8 text-center">
        <p className="text-xl font-semibold mb-2">
          Get your free side-by-side Medigap rate comparison
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
        <p className="text-sm opacity-90">
          Anthony Orner, Licensed Medicare Broker — NJ &amp; PA
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
              href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medigap Plan G vs. Plan N: Which One Saves You More?
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
              href="/medicare-supplement/new-jersey"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plans in New Jersey
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
        </ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/health-drug-plans/medigap/basics/costs" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">Medicare.gov — Get Medigap Costs</a> and <a href="https://www.medicare.gov/health-drug-plans/medigap/basics/compare-plan-benefits" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">Compare Medigap Plan Benefits</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/index.shtml" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance</a> or the free <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">SHIP counseling program</a> for unbiased Medicare guidance.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific help, contact the <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> or the <a href="https://www.nj.gov/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific rate help, contact the <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling in your area.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific rate filings and free counseling, visit the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance</a> or your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">SHIP program</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific rate filings and consumer help, visit the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">New Jersey Department of Banking and Insurance</a> or your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can compare Medigap rates and file complaints through the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free local Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.htm" rel="noopener noreferrer" target="_blank" className="underline">New Jersey State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">New Jersey Department of Banking and Insurance</a> or your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">SHIP counselor</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can compare rates and file complaints through the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: contact <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free local Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific rate help, contact the <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> or the <a href="https://www.nj.gov/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a> or contact the <a href="https://www.state.nj.us/dobi/division_insurance/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_consumers/insurance/ship.htm" rel="noopener noreferrer" target="_blank" className="text-blue-700 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a> or contact the <a href="https://www.nj.gov/dobi/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> or contact the <a href="https://www.nj.gov/dobi/division_insurance/" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can verify rates and file complaints with the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific Medigap rate guidance, contact your <a href="https://www.shiphelp.org/about-medicare/regional-ship-location" rel="noopener noreferrer" target="_blank" className="text-blue-700 underline">local SHIP (State Health Insurance Assistance Program)</a> for free, unbiased counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also compare rates and get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can verify rates and file complaints with the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance</a> or get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can compare rates and file complaints through the <a href="https://www.nj.gov/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank">NJ Department of Banking and Insurance</a> or get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank">NJ SHIP</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a> or contact the <a href="https://www.nj.gov/dobi/division_insurance/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For free, unbiased local counseling on Medigap pricing, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> or the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can verify carrier rates and file complaints through the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance</a> or get free unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free counseling on Medigap costs.</div>
      </section>
    </main>
  );
}