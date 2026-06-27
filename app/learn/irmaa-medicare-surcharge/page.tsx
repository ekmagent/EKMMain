import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "IRMAA Explained: Medicare's Income Surcharge (2026)",
  description:
    "IRMAA explained: how Medicare's income surcharge affects Part B & Part D, who pays, and how to appeal with SSA-44. Free broker help — call 855-559-1700.",
  alternates: { canonical: `${SITE_URL}/learn/irmaa-medicare-surcharge` },
  openGraph: {
    title: "IRMAA Explained: Medicare's Income Surcharge (2026)",
    description:
      "What IRMAA is, how the income brackets work, and how to appeal with SSA-44 if your income dropped. Free guidance: 855-559-1700.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://medicareyourself.com" },
    { "@type": "ListItem", position: 2, name: "Learn", item: "https://medicareyourself.com/learn" },
    { "@type": "ListItem", position: 3, name: "IRMAA Medicare Surcharge", item: "https://medicareyourself.com/learn/irmaa-medicare-surcharge" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "IRMAA Explained: Medicare's Income-Related Surcharge (2026)",
  datePublished: "2026-03-19",
  dateModified: "2026-03-19",
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

const partBBrackets = [
  { filing: "Single", joint: "Married Filing Jointly", surcharge: "$0", total: "$202.90" , income: "$106,000 or less", jointIncome: "$212,000 or less" },
  { filing: "Single", joint: "Married Filing Jointly", surcharge: "+$70.00", total: "$272.90", income: "$106,001–$133,000", jointIncome: "$212,001–$266,000" },
  { filing: "Single", joint: "Married Filing Jointly", surcharge: "+$175.00", total: "$377.90", income: "$133,001–$167,000", jointIncome: "$266,001–$334,000" },
  { filing: "Single", joint: "Married Filing Jointly", surcharge: "+$280.10", total: "$483.00", income: "$167,001–$200,000", jointIncome: "$334,001–$400,000" },
  { filing: "Single", joint: "Married Filing Jointly", surcharge: "+$385.00", total: "$587.90", income: "$200,001–$500,000", jointIncome: "$400,001–$750,000" },
  { filing: "Single", joint: "Married Filing Jointly", surcharge: "+$420.80", total: "$623.70", income: "Above $500,000", jointIncome: "Above $750,000" },
];

const lifeChangingEvents = [
  "Marriage or divorce",
  "Death of a spouse",
  "You or your spouse stopped working or reduced work hours",
  "Loss of income-producing property (due to disaster, etc.)",
  "Loss of pension income",
  "Employer settlement or closure",
];

const faqs = [
  {
    question: "What is IRMAA?",
    answer:
      "IRMAA stands for Income-Related Monthly Adjustment Amount. It is an extra charge added to your Medicare Part B and Part D premiums if your income exceeds certain thresholds. It is not a penalty — it is a surcharge based on your ability to pay. Most Medicare beneficiaries (about 93%) do not pay IRMAA.",
  },
  {
    question: "What income does Social Security use to calculate IRMAA?",
    answer:
      "Social Security uses your Modified Adjusted Gross Income (MAGI) from your federal tax return two years prior. For 2026 premiums, they look at your 2024 tax return. MAGI is your adjusted gross income plus tax-exempt interest income.",
  },
  {
    question: "Does IRMAA apply to Part D (prescription drug plans) too?",
    answer:
      "Yes. If your income triggers IRMAA, you will also pay an extra amount on top of your Part D plan premium. The Part D IRMAA surcharge uses the same income brackets but different dollar amounts. The surcharge ranges from about $13 to $81 per month in 2025, depending on your income tier.",
  },
  {
    question: "How do I know if I owe IRMAA?",
    answer:
      "Social Security will send you a letter (called an \"initial determination\") before the start of each year if IRMAA applies to you. The letter explains the surcharge amount and which tax return it is based on. Your Part B premium with IRMAA is automatically deducted from your Social Security benefit.",
  },
  {
    question: "Can I appeal IRMAA if my income has dropped?",
    answer:
      "Yes. If you have experienced a life-changing event that significantly reduced your income — such as retirement, job loss, divorce, or death of a spouse — you can file Form SSA-44 to request that Social Security use your more recent (lower) income instead of the two-year-old tax return. You can submit the form online, by mail, or in person at your local Social Security office.",
  },
  {
    question: "What is the SSA-44 form?",
    answer:
      "Form SSA-44 is the official form to request a reduction in your IRMAA surcharge. It is titled \"Medicare Income-Related Monthly Adjustment Amount — Life-Changing Event.\" You use it to report a qualifying life-changing event and provide evidence of your reduced income. Download it at ssa.gov/forms/ssa-44.pdf.",
  },
  {
    question: "Is IRMAA permanent?",
    answer:
      "No. IRMAA is recalculated every year based on your most recent tax return available to the IRS (two years prior). If your income drops below the threshold in a future year, the surcharge goes away. You can also request a new determination at any time if a life-changing event lowers your income.",
  },
  {
    question: "Does selling my house trigger IRMAA?",
    answer:
      "It can. If the capital gain from selling your home pushes your MAGI above the IRMAA threshold for that tax year, you may owe the surcharge two years later. However, the first $250,000 of gain ($500,000 for married couples) on a primary residence is typically excluded from taxable income. A one-time spike usually only affects one year of IRMAA.",
  },
  {
    question: "How do I appeal IRMAA if my income has dropped?",
    answer:
      "File Form SSA-44 with the Social Security Administration if you've had a life-changing event such as retirement, marriage, divorce, or the death of a spouse. You'll need supporting documentation like a more recent tax return or a letter from your former employer. If approved, Social Security will recalculate your Part B and Part D premiums based on your updated income.",
  },
  {
    question: "Is IRMAA recalculated every year?",
    answer:
      "Yes. Social Security reviews your tax return each year and determines IRMAA based on your MAGI from two years prior. If your income drops below the thresholds, your surcharge will automatically go away the following year — no appeal needed.",
  },
  {
    question: "Can Roth conversions or capital gains trigger IRMAA?",
    answer:
      "Yes. Because IRMAA is based on Modified Adjusted Gross Income, one-time income events like Roth IRA conversions, large capital gains, or required minimum distributions can push you into a higher bracket. Many retirees plan these events carefully to avoid crossing an IRMAA threshold.",
  },
  {
    question: "How do I appeal an IRMAA determination?",
    answer:
      "If you've experienced a life-changing event that reduced your income, you can file Form SSA-44 with the Social Security Administration to request a new IRMAA determination. Qualifying events include retirement, marriage, divorce, death of a spouse, or loss of pension income. You'll need to submit documentation of the event and an estimate of your new income. For help understanding your options, call 855-559-1700.",
  },
  {
    question: "Will I have to pay IRMAA every year?",
    answer:
      "IRMAA is recalculated each year based on your tax return from two years prior. If your income drops below the threshold, your IRMAA surcharge will be removed automatically the following year. Because income fluctuates, some beneficiaries pay IRMAA one year but not the next.",
  },
  {
    question: "How is IRMAA paid?",
    answer:
      "If you receive Social Security benefits, your IRMAA Part B surcharge is deducted directly from your monthly check along with your standard Part B premium. The Part D IRMAA surcharge is billed separately by Medicare — it is not paid to your Part D plan. If you don't yet collect Social Security, Medicare will bill you directly.",
  },
  {
    question: "How do I appeal an IRMAA determination?",
    answer:
      "If you had a life-changing event that reduced your income, you can file Form SSA-44 with the Social Security Administration to request a new IRMAA determination. Qualifying events include retirement, marriage, divorce, death of a spouse, or loss of pension income. You can also request a reconsideration if you believe SSA used incorrect or outdated tax information.",
  },
  {
    question: "Is IRMAA permanent once I start paying it?",
    answer:
      "No. IRMAA is recalculated every year based on your tax return from two years prior. If your income drops below the threshold in a future year, your IRMAA surcharge will be removed automatically. You do not need to reapply each year unless you experience a life-changing event you want SSA to consider sooner.",
  },
  {
    question: "Does IRMAA affect my Medicare Advantage or Medigap premium?",
    answer:
      "IRMAA only applies to Part B and Part D premiums. It does not increase your Medicare Advantage plan premium or your Medigap (Medicare Supplement) premium directly. However, if you have a Medicare Advantage plan that includes drug coverage, the Part D portion of IRMAA is still paid separately to Medicare.",
  },
  {
    question: "How do I appeal an IRMAA determination if my income has dropped?",
    answer:
      "If you've had a life-changing event that reduced your income — such as retirement, divorce, or the death of a spouse — you can request a reduction by filing Form SSA-44 with the Social Security Administration. You'll need to provide documentation of the event and evidence of your more recent or expected income. If you'd like help understanding the process, call 855-559-1700.",
  },
  {
    question: "Will IRMAA automatically go away if my income decreases?",
    answer:
      "Yes, but not immediately. Because Social Security uses tax returns from two years prior, a drop in income today won't affect your IRMAA until that lower income appears on a processed tax return. If the income change is due to a qualifying life-changing event, you can file SSA-44 to have it adjusted sooner rather than waiting.",
  }
,
  {
    question: "How do I appeal IRMAA if my income has dropped?",
    answer:
      "If you've experienced a life-changing event such as retirement, divorce, or the death of a spouse, you can file Form SSA-44 with the Social Security Administration to request a reduction. You'll need documentation of the event and your estimated current-year income. If approved, SSA will recalculate your IRMAA based on your new income rather than your tax return from two years ago.",
  },
  {
    question: "Does IRMAA reset every year?",
    answer:
      "Yes. Social Security recalculates IRMAA annually using your most recent available tax return, which is generally from two years prior. If your income drops below the threshold in a later year, your surcharge will be removed automatically once SSA receives the updated tax data from the IRS.",
  },
  {
    question: "Can a licensed broker help me plan around IRMAA?",
    answer:
      "A licensed Medicare broker can help you understand how IRMAA interacts with your Part B and Part D costs and choose plans that fit your budget. While brokers don't provide tax advice, we can explain the brackets and help you coordinate with your tax professional. Call 855-559-1700 for free guidance.",
  }
,
  {
    question: "How do I appeal IRMAA if my income has dropped?",
    answer:
      "If you've experienced a life-changing event such as retirement, divorce, or the death of a spouse, you can request a reduction by filing Form SSA-44 with the Social Security Administration. You'll need documentation of the event and proof of your reduced income. SSA reviews appeals case by case, and approved appeals can significantly lower or eliminate your IRMAA surcharge.",
  },
  {
    question: "Is IRMAA recalculated every year?",
    answer:
      "Yes. Social Security reviews your most recent tax return annually to determine whether IRMAA applies for the upcoming year. If your income drops below the threshold, the surcharge goes away automatically the following year — you don't need to reapply.",
  }
,
  {
    question: "How do I appeal an IRMAA determination if my income has dropped?",
    answer:
      "If you've experienced a life-changing event such as retirement, divorce, or the death of a spouse, you can file Form SSA-44 with the Social Security Administration to request a reduction or removal of your IRMAA surcharge. You'll need to provide documentation of the event and an estimate of your reduced income for the current or upcoming year. Social Security will review your request and adjust your Part B and Part D premiums if approved.",
  },
  {
    question: "Is IRMAA a one-time charge or does it apply every year?",
    answer:
      "IRMAA is recalculated every year based on your tax return from two years prior. If your income drops below the threshold in a future year, your IRMAA will go away automatically once Social Security processes the updated tax data. You don't need to reapply each year unless you're appealing based on a life-changing event.",
  },
  {
    question: "How is IRMAA collected from my benefits?",
    answer:
      "The Part B IRMAA surcharge is deducted directly from your Social Security check along with your standard Part B premium. The Part D IRMAA surcharge is billed separately by Medicare — it is not paid to your Part D plan — and is also typically deducted from Social Security if you receive benefits.",
  }
,
  {
    question: "How do I appeal an IRMAA determination if my income has dropped?",
    answer:
      "If you've experienced a life-changing event such as retirement, divorce, or loss of a spouse, you can file Form SSA-44 with the Social Security Administration to request a reduction in your IRMAA. You'll need to provide documentation of the event and an estimate of your new income. SSA will review your request and adjust your surcharge if approved. You can also call SSA directly to start the process.",
  },
  {
    question: "Is IRMAA a one-time charge or does it recur every year?",
    answer:
      "IRMAA is reassessed every year based on your most recent tax return on file (typically from two years prior). If your income drops below the threshold in a future year, your IRMAA surcharge will go away automatically. Conversely, if your income rises, you may be moved into a higher bracket. There is no permanent IRMAA designation.",
  },
  {
    question: "Can a licensed broker help me plan around IRMAA?",
    answer:
      "Yes. While brokers cannot file your SSA-44 appeal for you, we can help you understand how IRMAA affects your total Medicare costs and coordinate your Part B, Part D, and supplemental coverage choices accordingly. Call 855-559-1700 to speak with Anthony Orner for free guidance on your Medicare options.",
  }
,
  {
    question: "How do I appeal an IRMAA determination if my income has dropped?",
    answer:
      "You can request a reduction by filing Form SSA-44 with the Social Security Administration if you've experienced a life-changing event such as retirement, marriage, divorce, or the death of a spouse. Submit the form along with documentation of the event and your reduced income to your local SSA office. If you'd like help understanding whether you qualify, call 855-559-1700.",
  },
  {
    question: "Is IRMAA recalculated every year?",
    answer:
      "Yes. Social Security reviews your tax return data each year and adjusts your IRMAA status based on your most recent MAGI from two years prior. If your income drops below the threshold, the surcharge goes away automatically the following year — no appeal needed.",
  }
,
  {
    question: "How do I appeal IRMAA if my income has dropped?",
    answer:
      "If you experienced a life-changing event such as retirement, divorce, or the death of a spouse, you can request a reduction by filing Form SSA-44 with the Social Security Administration. Include documentation of the event and an estimate of your current year's income. SSA will review your request and adjust your IRMAA if approved, often back to the start of the year.",
  },
  {
    question: "Is IRMAA recalculated every year?",
    answer:
      "Yes. Social Security reviews your most recent tax return on file each year (typically from two years prior) to determine whether IRMAA applies. If your income drops below the threshold, your surcharge will go away automatically the following year. There's nothing you need to file to remove IRMAA once your income falls.",
  },
  {
    question: "Can I avoid IRMAA with tax planning?",
    answer:
      "Sometimes. Since IRMAA is based on MAGI, strategies like Roth conversions done before Medicare age, qualified charitable distributions from IRAs, and managing capital gains timing can help keep income under the brackets. Talk with a tax professional — a Medicare broker can explain the IRMAA rules but cannot give tax advice.",
  }
,
  {
    question: "How do I appeal an IRMAA determination if my income has gone down?",
    answer:
      "If you've experienced a life-changing event that reduced your income — like retirement, divorce, or the death of a spouse — you can request a reduction by filing Form SSA-44 with the Social Security Administration. You'll need to provide documentation of the event and an estimate of your current year's income. SSA will review the request and adjust your IRMAA if approved.",
  },
  {
    question: "Will IRMAA go away on its own if my income drops?",
    answer:
      "Yes, but with a delay. Because IRMAA is based on your tax return from two years prior, a drop in income today will eventually flow through to your Medicare premiums in two years. If you don't want to wait, file Form SSA-44 to request an earlier adjustment based on a qualifying life-changing event.",
  },
  {
    question: "Does IRMAA come out of my Social Security check?",
    answer:
      "Yes. If you receive Social Security benefits, your Part B premium plus any IRMAA surcharge is automatically deducted from your monthly check. The Part D IRMAA surcharge is also typically deducted from Social Security, even though your base Part D premium is paid directly to your drug plan.",
  }
,
  {
    question: "How do I appeal an IRMAA determination if my income has dropped?",
    answer:
      "If you've experienced a life-changing event such as retirement, divorce, or the death of a spouse, you can request a reduction by filing Form SSA-44 with the Social Security Administration. You'll need to provide documentation of the event and an estimate of your new income. SSA will review your request and adjust your IRMAA if approved. Call 855-559-1700 if you'd like help understanding the process.",
  },
  {
    question: "Is IRMAA permanent once it's applied to my Medicare premiums?",
    answer:
      "No. IRMAA is recalculated each year based on your most recent tax return on file with the IRS. If your income drops below the threshold in a future tax year, your IRMAA surcharge will be reduced or removed automatically. You don't need to reapply each year unless you're appealing based on a life-changing event.",
  },
  {
    question: "Do both spouses pay IRMAA if a couple's joint income exceeds the threshold?",
    answer:
      "Yes. If you and your spouse are both enrolled in Medicare and your joint MAGI exceeds the threshold, each spouse pays the IRMAA surcharge on their own Part B and Part D premiums. The surcharge is assessed individually, even though it's based on household income from your joint tax return.",
  }
,
  {
    question: "How do I appeal an IRMAA determination if my income has dropped?",
    answer:
      "If you experienced a life-changing event such as retirement, divorce, or the death of a spouse, you can file Form SSA-44 with the Social Security Administration to request a reduction. You'll need to provide documentation of the event and an estimate of your new income. SSA reviews these requests and can adjust your IRMAA based on your current financial situation rather than your tax return from two years ago.",
  },
  {
    question: "Will IRMAA stay on my premium forever once I'm subject to it?",
    answer:
      "No. IRMAA is recalculated every year based on your most recent tax return on file with the IRS. If your income drops below the threshold in a future tax year, your surcharge will be removed automatically. You don't need to reapply each year unless you're filing an SSA-44 appeal due to a life-changing event.",
  },
  {
    question: "Can a Medicare broker help me plan around IRMAA?",
    answer:
      "A licensed broker can't change your tax situation, but we can help you understand how IRMAA affects your total Medicare costs and which plan structures make the most sense given your income. For tax planning strategies like Roth conversions or capital gains timing, you should also consult a CPA or financial advisor. Call 855-559-1700 to review your options.",
  }
,
  {
    question: "How do I appeal an IRMAA determination if my income has dropped?",
    answer:
      "You can request a reduction by filing Form SSA-44 with the Social Security Administration if you've experienced a qualifying life-changing event such as retirement, marriage, divorce, or the death of a spouse. You'll need to provide documentation of the event and evidence of your reduced income. SSA reviews each request individually and will issue a new determination if approved.",
  },
  {
    question: "Will I have to pay IRMAA every year once I'm subject to it?",
    answer:
      "Not necessarily. Social Security recalculates IRMAA each year based on the most recent tax return on file (typically two years prior). If your income drops below the threshold in a later tax year, the surcharge will automatically come off once SSA receives that updated information from the IRS.",
  },
  {
    question: "How is the IRMAA surcharge collected?",
    answer:
      "For most beneficiaries, IRMAA is deducted directly from your Social Security benefit along with your standard Part B premium. If you're not yet receiving Social Security, Medicare will bill you directly. The Part D surcharge is paid to Medicare separately from the premium you pay your drug plan.",
  }
,
  {
    question: "How do I appeal an IRMAA determination if my income has dropped?",
    answer:
      "If you've experienced a life-changing event such as retirement, divorce, or the death of a spouse, you can request a reduction by filing Form SSA-44 with the Social Security Administration. Include documentation of the event and your estimated current-year income. SSA will review your request and adjust your IRMAA if approved.",
  },
  {
    question: "Is IRMAA recalculated every year?",
    answer:
      "Yes. Social Security reviews your tax return each year to determine whether IRMAA applies for the upcoming year. If your income drops below the threshold, the surcharge is removed automatically the following year — you do not have to reapply.",
  },
  {
    question: "Can I avoid IRMAA with tax planning?",
    answer:
      "Yes, in many cases. Strategies like Roth conversions before age 63, qualified charitable distributions from IRAs, and managing capital gains can help keep your MAGI below IRMAA thresholds. Because IRMAA uses income from two years prior, planning ahead is essential — speak with a tax professional for personalized guidance.",
  }
,
  {
    question: "How do I appeal an IRMAA determination if my income has dropped?",
    answer:
      "You can request a reduction by filing form SSA-44 with the Social Security Administration if you experienced a qualifying life-changing event, such as retirement, marriage, divorce, or the death of a spouse. Submit the form with documentation of the event and your estimated current income to your local SSA office. If you'd like help understanding the process, call 855-559-1700.",
  },
  {
    question: "Is IRMAA a one-time charge or does it continue every year?",
    answer:
      "IRMAA is reassessed every year based on your most recent tax return on file with the IRS, which is typically from two years prior. If your income drops below the threshold in a later tax year, your IRMAA surcharge will be removed automatically the following year. You do not need to reapply each year unless you're appealing based on a life-changing event.",
  }
,
  {
    question: "How do I appeal IRMAA if my income has dropped?",
    answer:
      "You can request a reduction by filing Form SSA-44 with the Social Security Administration if you experienced a qualifying life-changing event, such as retirement, marriage, divorce, or the death of a spouse. Submit the form along with documentation of the event and your expected income to your local SSA office. If approved, SSA will recalculate your IRMAA based on your more recent income.",
  },
  {
    question: "Is IRMAA recalculated every year?",
    answer:
      "Yes. Social Security reviews your tax return data from the IRS each year and recalculates whether IRMAA applies based on your most recent available return. That means your surcharge can go up, go down, or disappear entirely from one year to the next as your income changes.",
  },
  {
    question: "How is IRMAA paid?",
    answer:
      "For most people, the Part B IRMAA surcharge is deducted directly from their Social Security benefit along with the standard Part B premium. The Part D IRMAA surcharge is billed separately by Medicare and is paid directly to Medicare, not to your Part D plan.",
  }
,
  {
    question: "How do I appeal an IRMAA determination?",
    answer:
      "You can request a reconsideration by filing form SSA-44 with the Social Security Administration if you experienced a qualifying life-changing event such as retirement, marriage, divorce, or the death of a spouse. Submit the form along with documentation of the event and your reduced income to your local SSA office. If approved, SSA will recalculate your IRMAA based on your more recent income.",
  },
  {
    question: "Will IRMAA go away if my income drops?",
    answer:
      "IRMAA is recalculated each year based on your tax return from two years prior, so a drop in income will eventually lower or eliminate your surcharge automatically. If your income dropped due to a life-changing event, you do not have to wait — you can file SSA-44 to have IRMAA adjusted sooner. A licensed broker can walk you through the process at 855-559-1700.",
  },
  {
    question: "Does IRMAA come out of my Social Security check?",
    answer:
      "Yes. If you receive Social Security benefits, your Part B premium and any IRMAA surcharge are typically deducted directly from your monthly benefit payment. The Part D IRMAA surcharge is also paid to Medicare (not your drug plan) and is usually withheld from Social Security as well.",
  }
,
  {
    question: "How do I appeal an IRMAA determination if my income has dropped?",
    answer:
      "If you've experienced a life-changing event such as retirement, divorce, or the death of a spouse, you can request a reduction by filing Form SSA-44 with the Social Security Administration. Submit the form along with documentation of the event and your reduced income estimate. SSA will review your request and adjust your IRMAA if approved. Call 855-559-1700 if you'd like help understanding the process.",
  },
  {
    question: "Do I have to pay IRMAA every year?",
    answer:
      "IRMAA is recalculated each year based on your most recent available tax return, which is typically two years prior. If your income drops below the threshold in a later tax year, your IRMAA surcharge will be reduced or removed automatically. You don't need to reapply each year unless you're appealing based on a life-changing event.",
  },
  {
    question: "Can I avoid IRMAA with tax planning?",
    answer:
      "Yes, careful income planning can help some retirees stay below IRMAA thresholds. Strategies include managing Roth conversions, timing capital gains, using qualified charitable distributions from IRAs, and spreading taxable withdrawals across years. Consult a tax professional, since even a small amount over a bracket triggers the full surcharge for that tier.",
  }
,
  {
    question: "How do I appeal an IRMAA determination?",
    answer:
      "If you experienced a life-changing event that reduced your income, you can appeal by filing Form SSA-44 with the Social Security Administration. Qualifying events include marriage, divorce, death of a spouse, work stoppage or reduction, and loss of pension or income-producing property. Submit the form along with supporting documentation to your local SSA office.",
  },
  {
    question: "Will I get a notice if I owe IRMAA?",
    answer:
      "Yes. The Social Security Administration mails a predetermination notice followed by an initial determination notice if you owe IRMAA for the upcoming year. The notice explains the surcharge amount, which tax year was used, and your right to appeal if your income has since dropped.",
  },
  {
    question: "Does IRMAA change each year?",
    answer:
      "Yes. IRMAA income brackets and surcharge amounts are updated annually by CMS, and your status is recalculated each year using your most recent IRS tax return on file. If your income decreases below the threshold, your IRMAA can be removed the following year automatically.",
  }
,
  {
    question: "How do I appeal an IRMAA determination if my income has dropped?",
    answer:
      "If you've experienced a life-changing event such as retirement, divorce, or the death of a spouse, you can request a reduction by filing Form SSA-44 with the Social Security Administration. Submit the form along with documentation of the event and your estimated current income. SSA will review and, if approved, recalculate your IRMAA based on your more recent income.",
  },
  {
    question: "How will I know if I have to pay IRMAA?",
    answer:
      "Social Security mails a predetermination notice if they believe you owe IRMAA based on your tax return from two years ago. The notice explains the surcharge amount and how to appeal if you've had a qualifying life-changing event. The extra amount is typically deducted directly from your Social Security benefit.",
  },
  {
    question: "Does IRMAA change every year?",
    answer:
      "Yes. Social Security recalculates IRMAA annually based on your most recent tax return, so your surcharge can go up, go down, or disappear entirely from year to year. The income brackets themselves are also adjusted periodically for inflation.",
  }
,
  {
    question: "How do I appeal an IRMAA determination?",
    answer:
      "If you've had a life-changing event that reduced your income, you can request a new IRMAA determination by filing Form SSA-44 with the Social Security Administration. You'll need to provide documentation of the event and an estimate of your reduced income. SSA reviews the request and, if approved, recalculates your IRMAA based on the more recent income.",
  },
  {
    question: "Is IRMAA recalculated every year?",
    answer:
      "Yes. Social Security reviews your most recent IRS tax return data each year to determine whether IRMAA applies for the upcoming year. If your income drops below the threshold, your surcharge will automatically go away the following year without any action on your part.",
  },
  {
    question: "Can Roth conversions or capital gains trigger IRMAA?",
    answer:
      "Yes. One-time income events like Roth IRA conversions, large capital gains, or required minimum distributions can push your MAGI over an IRMAA threshold. Because IRMAA uses a two-year lookback, careful tax planning before age 63 can help you avoid surprise surcharges later. Call 855-559-1700 to discuss your situation with a licensed broker.",
  }
,
  {
    question: "How do I appeal an IRMAA determination if my income has dropped?",
    answer:
      "If you've had a life-changing event like retirement, divorce, or the death of a spouse, you can request a reconsideration by filing Form SSA-44 with the Social Security Administration. You'll need to provide documentation of the event and your estimated new income. If approved, SSA will recalculate your premium using the lower income figure. Call 855-559-1700 if you'd like help walking through the form.",
  },
  {
    question: "Will IRMAA continue every year or is it a one-time charge?",
    answer:
      "IRMAA is recalculated annually based on your most recent tax return on file (typically from two years prior). If your income drops below the threshold in a later year, the surcharge goes away automatically. Many beneficiaries pay IRMAA one year and not the next, depending on income fluctuations like Roth conversions or capital gains.",
  },
  {
    question: "Does IRMAA come out of my Social Security check?",
    answer:
      "Yes. The Part B IRMAA surcharge is deducted directly from your Social Security benefit along with your standard Part B premium. The Part D IRMAA surcharge is also billed by Medicare (not your drug plan) and is typically deducted from Social Security as well, even though your base Part D premium is paid to your plan.",
  }
,
  {
    question: "How do I appeal an IRMAA determination if my income has dropped?",
    answer:
      "If you experienced a life-changing event such as retirement, divorce, or the death of a spouse, you can file Form SSA-44 with the Social Security Administration to request a reduction. You'll need to provide documentation of the event and your estimated current-year income. SSA will review the request and may adjust your IRMAA based on more recent income. You can also call SSA directly to start the process.",
  },
  {
    question: "Does IRMAA reset every year?",
    answer:
      "Yes. Social Security recalculates IRMAA annually using your most recent tax return on file, which is typically from two years prior. If your income drops back below the threshold, your IRMAA surcharge will go away automatically the following year. You do not need to reapply each year unless you're filing an appeal based on a life-changing event.",
  },
  {
    question: "Can I avoid IRMAA with Roth conversions or tax planning?",
    answer:
      "Strategic tax planning before age 63 can help some retirees stay below IRMAA thresholds, since the surcharge is based on MAGI from two years prior. Roth conversions, capital gains timing, and managing required minimum distributions are common strategies people discuss with their tax advisor. We do not provide tax advice, but we can help you understand how IRMAA brackets work so you can plan accordingly.",
  }
,
  {
    question: "How do I appeal an IRMAA determination?",
    answer:
      "If you've experienced a life-changing event that reduced your income, you can file Form SSA-44 with the Social Security Administration to request a reduction. You'll need documentation of the event, such as a marriage certificate, death certificate, or proof of work stoppage. SSA reviews your request and notifies you of their decision in writing. Call 855-559-1700 if you'd like help understanding the process.",
  },
  {
    question: "Does IRMAA reset each year?",
    answer:
      "Yes. Social Security recalculates your IRMAA every year based on the most recent tax return available, which is typically from two years prior. If your income drops below the threshold, your IRMAA surcharge goes away automatically the following year. You do not need to reapply each year unless you're appealing based on a life-changing event.",
  }
,
  {
    question: "How do I appeal IRMAA if my income has dropped?",
    answer:
      "You can request a reduction by filing Form SSA-44 with the Social Security Administration if you've experienced a life-changing event such as retirement, divorce, or the death of a spouse. Submit the form along with supporting documentation like a signed statement from your employer or a death certificate. SSA will review your request and adjust your IRMAA surcharge if approved. You can also call or visit your local Social Security office for help.",
  },
  {
    question: "Does IRMAA reset each year?",
    answer:
      "Yes. Social Security recalculates IRMAA every year based on your most recent available tax return, which is generally from two years prior. If your income drops below the threshold, your IRMAA surcharge will go away automatically the following year. You do not need to reapply unless you want SSA to use more recent income due to a life-changing event.",
  },
  {
    question: "Can a licensed Medicare broker help me understand IRMAA?",
    answer:
      "Yes. A licensed broker can explain how IRMAA affects your total Medicare costs and help you plan your Part B, Part D, and supplemental coverage accordingly. While brokers don't file SSA-44 appeals for you, they can walk you through the process and coordinate with your tax advisor. Call 855-559-1700 for free guidance from a licensed Medicare broker.",
  }
,
  {
    question: "How do I appeal an IRMAA determination if my income has dropped?",
    answer:
      "If you experienced a qualifying life-changing event — such as retirement, the death of a spouse, divorce, or loss of pension income — you can file Form SSA-44 with the Social Security Administration to request a reduction. You'll need documentation of the event and your estimated current-year income. Social Security reviews the request and, if approved, recalculates your IRMAA based on your more recent income.",
  },
  {
    question: "How will I know if I owe IRMAA?",
    answer:
      "Social Security mails an initial determination letter each year notifying you of any IRMAA surcharge for the upcoming year. The letter explains which tax year's income was used and what your adjusted Part B and Part D premiums will be. If you disagree with the determination, you have 60 days to request a reconsideration.",
  },
  {
    question: "Is IRMAA recalculated every year?",
    answer:
      "Yes. Social Security reviews your most recent tax return data from the IRS each year and recalculates whether IRMAA applies. If your income drops below the threshold in a later tax year, the surcharge will automatically come off once that return is processed — no appeal needed.",
  }
,
  {
    question: "How do I appeal an IRMAA determination if my income has dropped?",
    answer:
      "If you've experienced a life-changing event such as retirement, divorce, or the death of a spouse, you can file Form SSA-44 with the Social Security Administration to request a reduction. Submit the form along with documentation of the event and your expected lower income. SSA will review and adjust your IRMAA if approved. You can also call SSA directly to start the appeal.",
  },
  {
    question: "When does IRMAA stop applying to my Medicare premiums?",
    answer:
      "IRMAA is recalculated each year based on your tax return from two years prior. If your income drops below the IRMAA thresholds, the surcharge will automatically come off the following year. You don't have to reapply unless you want a faster adjustment through an SSA-44 life-changing event appeal.",
  }
,
  {
    question: "How do I appeal an IRMAA determination?",
    answer:
      "If you've experienced a life-changing event that reduced your income, you can file Form SSA-44 with the Social Security Administration to request a new IRMAA determination. Qualifying events include retirement, marriage, divorce, death of a spouse, or loss of pension income. You'll need documentation such as a marriage certificate, death certificate, or proof of work stoppage to support your appeal.",
  },
  {
    question: "Does IRMAA get recalculated every year?",
    answer:
      "Yes. The Social Security Administration reviews your tax return data each year and recalculates IRMAA annually based on your most recent tax filing from two years prior. If your income drops below the threshold, your IRMAA surcharge will be removed automatically the following year.",
  },
  {
    question: "Who notifies me if I owe IRMAA?",
    answer:
      "The Social Security Administration mails you a predetermination notice if your income triggers IRMAA, followed by an initial determination notice with your new premium amount. The surcharge is typically deducted directly from your Social Security benefit, or billed quarterly if you're not yet collecting Social Security.",
  }
,
  {
    question: "How do I appeal an IRMAA determination if my income has dropped?",
    answer:
      "If you've experienced a life-changing event such as retirement, marriage, divorce, or the death of a spouse, you can request a reduction by filing Form SSA-44 with the Social Security Administration. You'll need to provide documentation of the event and your estimated current-year income. SSA reviews these requests and can adjust your IRMAA based on more recent income rather than your tax return from two years ago.",
  },
  {
    question: "Does IRMAA reset each year?",
    answer:
      "Yes. Social Security reviews your IRMAA status every year using the most recent federal tax return available, which is typically two years prior. If your income drops below the threshold in a later tax year, your IRMAA surcharge will automatically be removed the following year — no appeal needed.",
  },
  {
    question: "Will I get a separate bill for the IRMAA surcharge?",
    answer:
      "No. If you receive Social Security benefits, your Part B premium plus any IRMAA is deducted directly from your monthly benefit. The Part D IRMAA surcharge is billed separately by Medicare, not by your drug plan, and must be paid even if your plan premium is paid another way.",
  }
,
  {
    question: "How do I appeal an IRMAA determination?",
    answer:
      "If you've had a qualifying life-changing event that reduced your income, you can appeal using Form SSA-44. Submit the completed form along with supporting documentation (such as proof of retirement or a death certificate) to your local Social Security office. Social Security will review your request and adjust your IRMAA if approved.",
  },
  {
    question: "Does IRMAA reset each year?",
    answer:
      "Yes. Social Security recalculates IRMAA every year based on your most recent available tax return, which is typically from two years prior. If your income drops below the threshold, your IRMAA surcharge will automatically end the following year. You don't need to reapply each year unless you're appealing based on a life-changing event.",
  },
  {
    question: "How do I pay the IRMAA surcharge?",
    answer:
      "The Part B IRMAA surcharge is deducted directly from your Social Security benefit, or billed by Medicare if you're not yet collecting Social Security. The Part D IRMAA surcharge is also typically deducted from your Social Security benefit, separate from the premium you pay to your Part D plan. You cannot pay IRMAA directly to your insurance carrier.",
  }
,
  {
    question: "How do I appeal an IRMAA determination?",
    answer:
      "If you've had a life-changing event that reduced your income, you can appeal IRMAA by filing form SSA-44 with the Social Security Administration. You'll need to provide documentation of the event and your estimated current-year income. SSA can also accept a request to reconsider if the IRS data used was incorrect or outdated.",
  },
  {
    question: "Is IRMAA permanent once it's applied?",
    answer:
      "No. IRMAA is recalculated every year based on your most recent tax return on file (typically from two years prior). If your income drops below the threshold in a future year, your IRMAA surcharge will automatically be removed. You do not need to reapply each year unless you're appealing based on a life-changing event.",
  },
  {
    question: "Can a licensed broker help me with IRMAA?",
    answer:
      "A broker cannot file your SSA-44 appeal for you — that goes directly through Social Security. However, we can help you understand how IRMAA affects your total Medicare costs, plan around it when choosing Part D or Medicare Advantage coverage, and coordinate timing of enrollment decisions. Call 855-559-1700 for free guidance.",
  }
,
  {
    question: "How do I appeal an IRMAA determination if my income has dropped?",
    answer:
      "If you've experienced a life-changing event such as retirement, divorce, or the death of a spouse, you can request a reduction by filing Form SSA-44 with the Social Security Administration. Submit the form along with documentation of the event and your reduced income. SSA reviews each request individually and will notify you of their decision in writing.",
  },
  {
    question: "Will IRMAA apply every year once I trigger it?",
    answer:
      "Not necessarily. IRMAA is recalculated each year based on your tax return from two years prior. If your income drops below the threshold in a future year, your IRMAA surcharge will automatically end the following adjustment cycle without needing to appeal.",
  },
  {
    question: "Can I avoid IRMAA through tax planning before enrolling in Medicare?",
    answer:
      "Yes, proactive planning can help. Strategies such as Roth conversions earlier in life, managing capital gains, and timing required minimum distributions can keep your MAGI below IRMAA thresholds. Consult a tax professional, since IRMAA looks back two years at your reported income.",
  }
,
  {
    question: "How do I appeal an IRMAA determination if my income has dropped?",
    answer:
      "If you've experienced a life-changing event such as retirement, divorce, or the death of a spouse, you can file Form SSA-44 with the Social Security Administration to request a reduction. You'll need documentation of the event and an estimate of your current year's income. SSA reviews appeals case by case and can adjust your surcharge for the current year. Call 855-559-1700 if you'd like help understanding the process.",
  },
  {
    question: "Does IRMAA reset each year?",
    answer:
      "Yes. Social Security re-evaluates IRMAA every year using your most recent available tax return, which is typically from two years prior. If your income drops below the threshold, your surcharge goes away automatically the following year. There is no need to reapply once your income returns to a lower bracket.",
  },
  {
    question: "Can I avoid IRMAA with Medicare Advantage instead of Original Medicare?",
    answer:
      "No. IRMAA applies to your Part B and Part D premiums regardless of whether you choose Original Medicare or Medicare Advantage. Even if your Medicare Advantage plan has a $0 premium, you still owe the standard Part B premium plus any IRMAA surcharge. Switching plan types does not change how the income surcharge is calculated.",
  }
,
  {
    question: "How do I appeal an IRMAA determination?",
    answer:
      "If you've experienced a life-changing event that reduced your income, you can file Form SSA-44 with the Social Security Administration to request a reduction in your IRMAA surcharge. Acceptable events include marriage, divorce, death of a spouse, work stoppage or reduction, and loss of pension or income-producing property. You'll need to submit documentation supporting both the event and your reduced income estimate.",
  },
  {
    question: "Is IRMAA recalculated every year?",
    answer:
      "Yes. Social Security reviews your most recent tax return data from the IRS each year to determine whether you owe IRMAA for the upcoming year. If your income drops below the threshold, your surcharge will go away automatically the following year. If it rises, you may begin owing IRMAA or move into a higher bracket.",
  },
  {
    question: "Can a Medicare broker help me plan around IRMAA?",
    answer:
      "A licensed Medicare broker can't change your tax situation, but we can help you understand how IRMAA affects your total Medicare costs and choose plans that work with your budget. We can also walk you through the SSA-44 appeal process if you've had a qualifying life-changing event. Call 855-559-1700 for free guidance.",
  }
,
  {
    question: "How do I appeal an IRMAA determination if my income has dropped?",
    answer:
      "If you experienced a life-changing event such as retirement, divorce, or the death of a spouse, you can file Form SSA-44 with the Social Security Administration to request a reduction. Include documentation of the event and an estimate of your current year income. SSA will review and, if approved, adjust your IRMAA going forward. A licensed broker can walk you through the process at 855-559-1700.",
  },
  {
    question: "Will IRMAA go away on its own if my income decreases?",
    answer:
      "Yes, but with a two-year lag. Because Social Security uses your tax return from two years prior, a drop in income will eventually flow through to a lower IRMAA — or remove it entirely — once that lower-income tax year is reviewed. If you cannot wait, filing SSA-44 after a qualifying life event is the faster path.",
  },
  {
    question: "Does IRMAA come out of my Social Security check?",
    answer:
      "Yes. The Part B IRMAA surcharge is deducted directly from your Social Security benefit along with your standard Part B premium. The Part D IRMAA surcharge is also billed through Social Security (or directly by Medicare if you don't receive benefits yet), not by your drug plan.",
  }
,
  {
    question: "How will I know if I owe IRMAA?",
    answer:
      "The Social Security Administration (SSA) will send you a notice if you owe IRMAA. The notice explains your new Part B and/or Part D premium amount, how it was calculated based on your tax return from two years prior, and your right to appeal if you believe the determination is incorrect.",
  },
  {
    question: "Can I appeal IRMAA if my income has dropped?",
    answer:
      "Yes. If you experienced a qualifying life-changing event — such as retirement, the death of a spouse, marriage, or divorce — you can file Form SSA-44 to request a reduction. Submit the form with supporting documentation to your local Social Security office. A licensed broker can walk you through the process at 855-559-1700.",
  },
  {
    question: "Is IRMAA recalculated every year?",
    answer:
      "Yes. SSA reviews your most recent tax return on file each year and recalculates whether IRMAA applies. If your income falls below the threshold in a later tax year, the surcharge will be removed automatically once SSA receives that updated return from the IRS.",
  }
,
  {
    question: "How do I appeal an IRMAA determination if my income has dropped?",
    answer:
      "You can request a reduction by filing Form SSA-44 with the Social Security Administration if you've experienced a life-changing event such as retirement, divorce, or the death of a spouse. You'll need to provide documentation of the event and an estimate of your new income. SSA reviews each request individually and may adjust your surcharge accordingly.",
  },
  {
    question: "Is IRMAA permanent once I'm charged?",
    answer:
      "No. IRMAA is recalculated every year based on your most recent tax return on file with the IRS. If your income drops below the threshold in a later tax year, your surcharge will be removed automatically the following year. You don't need to reapply each year unless you're requesting a reduction due to a life-changing event.",
  }
,
  {
    question: "How do I appeal an IRMAA determination if my income has dropped?",
    answer:
      "If you've had a life-changing event such as retirement, divorce, or the death of a spouse, you can request a reduction by filing Form SSA-44 with the Social Security Administration. You'll need to provide documentation of the event and an estimate of your new income. SSA reviews these requests and can adjust or remove your IRMAA surcharge for the year.",
  },
  {
    question: "Is IRMAA recalculated every year?",
    answer:
      "Yes. Social Security reviews your tax return data each year and reassesses whether IRMAA applies based on your most recent MAGI on file. If your income drops below the threshold in a later tax year, your IRMAA surcharge will automatically go away. You don't need to reapply each year unless you're filing an appeal based on a life-changing event.",
  },
  {
    question: "Can a Medicare broker help me reduce or avoid IRMAA?",
    answer:
      "A broker can't change what the IRS reports to Social Security, but we can help you understand which life-changing events qualify for an SSA-44 appeal and walk you through the documentation. We can also help you plan your Part D and Medicare Advantage choices so the IRMAA surcharge isn't compounded by an inefficient plan. Call 855-559-1700 for free guidance.",
  }
,
  {
    question: "How do I appeal IRMAA if my income has dropped?",
    answer:
      "If you've experienced a life-changing event such as retirement, divorce, or the death of a spouse, you can request a reduction by filing Form SSA-44 with the Social Security Administration. Include documentation of the event and your estimated current-year income. SSA reviews these requests and can adjust your IRMAA based on your more recent income rather than the tax return from two years ago.",
  },
  {
    question: "Will IRMAA automatically go away if my income drops?",
    answer:
      "Yes, eventually. Because IRMAA is recalculated each year using your tax return from two years prior, a drop in income will flow through automatically once that lower return is filed. If you don't want to wait two years, you can file Form SSA-44 to request an earlier adjustment based on a qualifying life-changing event.",
  },
  {
    question: "Does selling a house or taking a Roth conversion trigger IRMAA?",
    answer:
      "It can. One-time income spikes like capital gains, large Roth conversions, or required minimum distributions all count toward MAGI and can push you into a higher IRMAA bracket for one year. Planning the timing of these events with a tax advisor before you turn 63 can help avoid surprise surcharges later.",
  }
,
  {
    question: "How do I appeal an IRMAA determination?",
    answer:
      "If you experienced a life-changing event that reduced your income, you can file Form SSA-44 with the Social Security Administration to request a reduction or removal of your IRMAA surcharge. Acceptable events include retirement, marriage, divorce, death of a spouse, or loss of pension income. You'll need to provide documentation, and SSA will review your more recent income to recalculate your surcharge.",
  },
  {
    question: "Is IRMAA permanent once I owe it?",
    answer:
      "No. IRMAA is recalculated every year based on your tax return from two years prior. If your income drops below the threshold in a future tax year, your surcharge will automatically be reduced or removed the following year. You don't need to reapply unless you're appealing based on a life-changing event.",
  },
  {
    question: "Does selling a house or doing a Roth conversion trigger IRMAA?",
    answer:
      "Potentially yes. One-time income events like capital gains from selling property, large Roth IRA conversions, or required minimum distributions can push your MAGI above an IRMAA threshold for that year. Since IRMAA uses a two-year lookback, the surcharge would apply two years after the income event, then drop off once your income normalizes.",
  }
,
  {
    question: "How do I appeal IRMAA if my income has dropped?",
    answer:
      "If you experienced a qualifying life-changing event — such as retirement, divorce, or the death of a spouse — you can file Form SSA-44 with the Social Security Administration to request a reduction. You'll need to provide documentation of the event and an estimate of your new, lower income. Social Security reviews the request and adjusts your IRMAA if approved.",
  },
  {
    question: "Does IRMAA get recalculated every year?",
    answer:
      "Yes. Social Security reviews your tax return each year to determine whether IRMAA applies for the upcoming year. If your income drops below the threshold in a later tax year, your IRMAA surcharge will automatically be removed or reduced the following year without needing to file an appeal.",
  },
  {
    question: "Can a Medicare broker help me plan around IRMAA?",
    answer:
      "A licensed broker can't change your tax return, but we can help you understand how your plan choices and income decisions affect your total Medicare costs. If you'd like a free review of your situation, call 855-559-1700 to speak with Anthony Orner.",
  }
,
  {
    question: "How do I appeal an IRMAA determination if my income has dropped?",
    answer:
      "If you've had a life-changing event that reduced your income, you can file Form SSA-44 with the Social Security Administration to request a reduction. Qualifying events include retirement, work stoppage or reduction, marriage, divorce, death of a spouse, loss of pension, or loss of income-producing property. You'll need to provide documentation of the event and your estimated new income. SSA reviews the request and can adjust your IRMAA going forward.",
  },
  {
    question: "Will IRMAA last forever once I start paying it?",
    answer:
      "No. IRMAA is recalculated each year based on your tax return from two years prior. If your income drops below the threshold in a later year, your IRMAA surcharge will go away automatically once SSA processes that year's tax data. You don't need to reapply unless you want to use SSA-44 to request an earlier adjustment based on a life-changing event.",
  },
  {
    question: "Can a Medicare broker help me understand IRMAA?",
    answer:
      "Yes. While brokers cannot file your SSA-44 appeal for you, we can explain how IRMAA interacts with your Part B and Part D premiums and help you plan coverage around it. Call 855-559-1700 to speak with a licensed broker about your situation at no cost.",
  }
,
  {
    question: "How do I appeal an IRMAA determination?",
    answer:
      "You can appeal IRMAA by filing Form SSA-44 with the Social Security Administration if you experienced a qualifying life-changing event that reduced your income. Common qualifying events include retirement, marriage, divorce, death of a spouse, or loss of pension income. You'll need to provide documentation such as a marriage certificate, death certificate, or proof of work stoppage. SSA reviews appeals individually and adjusts your surcharge if approved.",
  },
  {
    question: "Will IRMAA go away on its own if my income drops?",
    answer:
      "Yes, but with a two-year lag. Because Social Security uses your tax return from two years prior, a drop in income today won't reduce your IRMAA until the corresponding tax year is used. If you don't want to wait, filing Form SSA-44 after a qualifying life-changing event can get the surcharge reduced sooner.",
  },
  {
    question: "Can I reduce my IRMAA through tax planning?",
    answer:
      "Yes. Strategies such as Roth conversions before age 63, qualified charitable distributions from IRAs, tax-loss harvesting, and careful timing of capital gains can help keep your MAGI below the next IRMAA bracket. Because the brackets are cliffs — crossing by even one dollar moves you to a higher tier — proactive planning with a tax professional is often worthwhile.",
  }
,
  {
    question: "How will I know if I have to pay IRMAA?",
    answer:
      "The Social Security Administration mails you a predetermination notice if your income exceeds the IRMAA thresholds. The notice explains the surcharge amount, which tax year was used to calculate it, and how to appeal if you've had a life-changing event. You can also call us at 855-559-1700 if you need help understanding the notice.",
  },
  {
    question: "How do I appeal IRMAA if my income has dropped?",
    answer:
      "File Form SSA-44 with the Social Security Administration to request a new initial determination. You'll need to document a qualifying life-changing event such as retirement, divorce, or loss of pension income, along with a recent tax return or estimate of your current year's income. SSA reviews the request and adjusts your premium if approved.",
  },
  {
    question: "Is IRMAA recalculated every year?",
    answer:
      "Yes. Social Security reviews your tax return data from the IRS each year and recalculates your IRMAA based on your most recent MAGI. If your income drops below the threshold, the surcharge goes away automatically the following year — you don't need to reapply.",
  }
,
  {
    question: "How do I appeal an IRMAA determination?",
    answer:
      "If you've had a life-changing event that reduced your income, you can file Form SSA-44 with the Social Security Administration to request a reduction or removal of your IRMAA surcharge. Qualifying events include retirement, marriage, divorce, death of a spouse, or loss of pension income. You'll need documentation such as a marriage certificate, death certificate, or proof of work stoppage.",
  },
  {
    question: "Will I pay IRMAA forever once I'm assessed?",
    answer:
      "No. IRMAA is recalculated every year based on your most recent tax return on file with the IRS, which is typically from two years prior. If your income drops below the threshold in a future year, your IRMAA surcharge will go away automatically. You don't need to reapply each year.",
  },
  {
    question: "Can a Medicare broker help me plan around IRMAA?",
    answer:
      "Yes. While a broker cannot reduce your IRMAA directly, we can help you understand how plan choices, enrollment timing, and Part D selection interact with your income situation. Call 855-559-1700 for a free review of your Medicare options.",
  }
,
  {
    question: "How do I appeal an IRMAA determination?",
    answer:
      "If you experienced a life-changing event that reduced your income, you can file Form SSA-44 with the Social Security Administration to request a reconsideration. Common qualifying events include retirement, marriage, divorce, death of a spouse, or loss of pension income. You'll need documentation supporting both the event and your reduced income estimate.",
  },
  {
    question: "When will I find out if I owe IRMAA?",
    answer:
      "Social Security sends an Initial IRMAA Determination notice in late fall before the new plan year begins. The notice explains the surcharge amount, the tax year used to calculate it, and your appeal rights. If you disagree, you generally have 60 days from the date of the notice to request reconsideration.",
  },
  {
    question: "Does IRMAA go away if my income drops?",
    answer:
      "Yes. IRMAA is recalculated each year based on your most recent tax return on file with the IRS. If your income falls below the threshold, the surcharge will automatically come off the following year. If your income dropped due to a qualifying life-changing event, you don't have to wait — file Form SSA-44 to request a sooner adjustment.",
  }
,
  {
    question: "How do I appeal an IRMAA determination if my income has dropped?",
    answer:
      "If you've experienced a life-changing event such as retirement, divorce, or the death of a spouse, you can file Form SSA-44 with the Social Security Administration to request a reduction. Include documentation of the event and your estimated current-year income. SSA will review your request and adjust your IRMAA if approved. Call us at 855-559-1700 if you need help understanding the process.",
  },
  {
    question: "Will IRMAA go away on its own if my income drops later?",
    answer:
      "Yes. Because IRMAA is recalculated every year based on your tax return from two years prior, a drop in income will eventually reduce or eliminate your surcharge automatically. If you don't want to wait two years, you can file SSA-44 when the income change is tied to a qualifying life-changing event. Otherwise, the adjustment happens once SSA receives updated IRS data.",
  },
  {
    question: "How will I know if I owe IRMAA?",
    answer:
      "The Social Security Administration mails an initial determination letter explaining your new Part B and Part D premium amounts and the income data they used. If you disagree with the determination, the letter explains your appeal rights and deadlines. Review it carefully and act quickly if you plan to file SSA-44.",
  }
,
  {
    question: "How do I appeal an IRMAA determination if my income has dropped?",
    answer:
      "If you experienced a life-changing event such as retirement, divorce, or the death of a spouse, you can file Form SSA-44 with the Social Security Administration to request a reduction. Include documentation of the event and your estimated current-year income. SSA will review the request and adjust your IRMAA if approved. You can also call SSA directly to start the process.",
  },
  {
    question: "Does IRMAA reset every year?",
    answer:
      "Yes. Social Security recalculates IRMAA each year using your most recent tax return on file, which is typically from two years prior. If your income drops below the threshold in a later year, your surcharge will go away automatically once SSA processes the updated return. You do not need to reapply each year unless you are appealing based on a life-changing event.",
  },
  {
    question: "How is the IRMAA surcharge paid?",
    answer:
      "The Part B IRMAA surcharge is deducted from your Social Security benefit along with your standard Part B premium, or billed directly by Medicare if you are not yet collecting Social Security. The Part D IRMAA is billed separately by Medicare, not by your drug plan. Missing these payments can affect your Medicare coverage, so it is important to stay current.",
  }
,
  {
    question: "How do I appeal an IRMAA determination if my income has dropped?",
    answer:
      "If you experienced a life-changing event such as retirement, divorce, or the death of a spouse, you can request a reduction by filing Form SSA-44 with the Social Security Administration. You'll need to provide documentation of the event and your reduced expected income. SSA reviews these requests case-by-case and can adjust your IRMAA going forward. Call 855-559-1700 if you'd like help understanding the process.",
  },
  {
    question: "Will IRMAA last forever once I'm subject to it?",
    answer:
      "No. IRMAA is recalculated every year based on your tax return from two years prior. If your income drops below the threshold in a future tax year, your surcharge will go away automatically once SSA receives that updated tax data from the IRS.",
  }
,
  {
    question: "How do I appeal IRMAA if my income has dropped?",
    answer:
      "If you experienced a life-changing event such as retirement, divorce, or the death of a spouse, you can file Form SSA-44 with the Social Security Administration to request a reduction. You'll need to provide documentation of the event and your estimated new income. SSA will review your request and adjust your IRMAA if approved. You can also call SSA directly to start the process.",
  },
  {
    question: "Does IRMAA go away if my income drops in the future?",
    answer:
      "Yes. Because IRMAA is recalculated each year using your tax return from two years prior, a lower income in a later tax year will eventually reduce or eliminate your surcharge. You do not need to reapply each year unless you want SSA to use a more recent year due to a qualifying life-changing event.",
  },
  {
    question: "Can a Medicare broker help me plan around IRMAA?",
    answer:
      "A licensed broker cannot give tax advice, but we can explain how IRMAA interacts with your Part B and Part D premiums and help you choose coverage that fits your situation. For income planning, we recommend coordinating with your tax professional. Call 855-559-1700 to discuss your Medicare options.",
  }
,
  {
    question: "How do I appeal an IRMAA determination if my income has dropped?",
    answer:
      "If you've experienced a life-changing event such as retirement, divorce, or the death of a spouse, you can request a new IRMAA determination by filing Form SSA-44 with the Social Security Administration. You'll need to provide documentation of the event and an estimate of your reduced income. If approved, SSA will use your more recent income to calculate your surcharge instead of the tax return from two years ago. Call 855-559-1700 if you'd like help understanding the process.",
  },
  {
    question: "Does IRMAA change every year?",
    answer:
      "Yes. Social Security recalculates IRMAA annually based on your most recent federal tax return on file. If your income drops below the threshold in a later year, your surcharge will be removed automatically the following year. The income brackets themselves are also adjusted by Medicare each year.",
  },
  {
    question: "Can I avoid IRMAA with smart tax planning?",
    answer:
      "In some cases, yes. Strategies such as Roth conversions before age 63, managing capital gains, using qualified charitable distributions from an IRA, and timing large withdrawals can help keep your MAGI below the IRMAA thresholds. Because IRMAA is based on income from two years prior, planning ahead is important. Always consult a qualified tax advisor before making changes.",
  }
,
  {
    question: "How do I appeal IRMAA if my income has dropped?",
    answer:
      "If you experienced a life-changing event such as retirement, divorce, or the death of a spouse, you can request a reduction by filing Form SSA-44 with the Social Security Administration. Include documentation of the event and an estimate of your new income. SSA will review and, if approved, recalculate your IRMAA based on the updated income.",
  },
  {
    question: "Does IRMAA reset each year?",
    answer:
      "Yes. Social Security recalculates IRMAA every year using your most recent tax return on file, typically from two years prior. If your income drops below the threshold, your surcharge goes away automatically the following year — no appeal needed.",
  },
  {
    question: "Can a Medicare broker help me plan around IRMAA?",
    answer:
      "A broker cannot change your tax return, but we can help you understand how IRMAA interacts with your Part B, Part D, and Medicare Advantage choices. We can also walk you through the SSA-44 appeal process if you've had a qualifying life-changing event. Call 855-559-1700 for free guidance.",
  }
,
  {
    question: "How do I appeal IRMAA if my income has dropped?",
    answer:
      "If you experienced a life-changing event such as retirement, divorce, or the death of a spouse, you can file Form SSA-44 with the Social Security Administration to request a reduction. Include documentation of the event and your estimated current-year income. SSA will review the request and adjust your IRMAA if approved. You can also call SSA directly to start the process.",
  },
  {
    question: "When does IRMAA go away if my income drops?",
    answer:
      "IRMAA is recalculated each year based on your tax return from two years prior. If your income falls below the threshold, the surcharge will automatically be removed the following year once SSA receives updated IRS data. If you need relief sooner due to a qualifying life-changing event, file Form SSA-44 to request an earlier adjustment.",
  },
  {
    question: "Can a Medicare broker help me plan around IRMAA?",
    answer:
      "A licensed broker cannot reduce your IRMAA, but we can help you understand how it affects your Part B and Part D costs and choose coverage that fits your budget. We can also explain when an SSA-44 appeal may apply. Call 855-559-1700 for free guidance.",
  }
,
  {
    question: "How do I appeal an IRMAA determination?",
    answer:
      "If you've had a qualifying life-changing event that reduced your income, you can file Form SSA-44 with the Social Security Administration to request a lower IRMAA. Submit the form with supporting documentation such as a marriage certificate, death certificate, or proof of work stoppage. You can also request reconsideration if you believe SSA used outdated or incorrect tax information.",
  },
  {
    question: "Does IRMAA reset each year?",
    answer:
      "Yes. Social Security recalculates IRMAA every year based on your most recent tax return on file, which is typically from two years prior. If your income drops below the threshold, your IRMAA surcharge will go away automatically the following year — no appeal needed.",
  },
  {
    question: "How is IRMAA paid?",
    answer:
      "The Part B IRMAA surcharge is added to your standard Part B premium and is usually deducted directly from your Social Security check. The Part D IRMAA surcharge is billed separately by Medicare, even if you pay your Part D plan premium to a private insurer. Both are paid to the government, not to your plan.",
  }
,
  {
    question: "How do I appeal IRMAA if my income has dropped?",
    answer:
      "You can request a reduction by filing Form SSA-44 with the Social Security Administration if you experienced a qualifying life-changing event, such as retirement, marriage, divorce, or the death of a spouse. Include documentation of the event and proof of your reduced income. SSA reviews the request and, if approved, recalculates your IRMAA based on your current expected income.",
  },
  {
    question: "Will IRMAA go away on its own if my income decreases?",
    answer:
      "Yes, IRMAA is recalculated each year using your most recent tax return on file with the IRS. If your income drops below the threshold, your surcharge will be removed automatically the following year. However, if the change is due to a life-changing event, filing Form SSA-44 can speed up the adjustment instead of waiting two years.",
  },
  {
    question: "Do I pay IRMAA directly to my Medicare plan?",
    answer:
      "No. The Part B IRMAA surcharge is typically deducted from your Social Security benefit along with your standard premium. The Part D IRMAA is also collected by Social Security or billed by Medicare directly — not paid to your drug plan. Your private Part D plan only receives its standard plan premium.",
  }
,
  {
    question: "How do I appeal IRMAA if my income has dropped?",
    answer:
      "If you've experienced a life-changing event such as retirement, divorce, or the death of a spouse, you can file Form SSA-44 with the Social Security Administration to request a reduction. You'll need to provide documentation of the event and an estimate of your reduced income. Social Security reviews the request and adjusts your IRMAA if approved.",
  },
  {
    question: "Is IRMAA recalculated every year?",
    answer:
      "Yes. Social Security reviews your tax return each year and recalculates IRMAA based on the most recent MAGI data from the IRS. If your income drops below the thresholds, your IRMAA surcharge goes away automatically the following year — you do not need to reapply.",
  },
  {
    question: "Can I avoid IRMAA with tax planning?",
    answer:
      "Some beneficiaries reduce IRMAA exposure by managing taxable income two years before Medicare enrollment — for example, through Roth conversions completed earlier, qualified charitable distributions from IRAs, or timing capital gains. Because IRMAA uses a two-year lookback, planning ahead matters. Consult a tax professional for strategies specific to your situation.",
  }
,
  {
    question: "How do I appeal IRMAA if my income has dropped?",
    answer:
      "If you experienced a life-changing event such as retirement, divorce, or the death of a spouse, you can request a reduction by filing Form SSA-44 with the Social Security Administration. You'll need documentation of the event and your expected new income. If approved, SSA will recalculate your IRMAA based on your updated income rather than your tax return from two years ago.",
  },
  {
    question: "Do I get billed separately for IRMAA, or is it added to my premium?",
    answer:
      "For Part B, the IRMAA surcharge is added to your standard Part B premium and is typically deducted from your Social Security check. For Part D, the IRMAA surcharge is billed separately by Medicare or deducted from Social Security — it is not paid to your Part D plan. You continue paying your Part D plan premium directly to the insurer.",
  },
  {
    question: "Does IRMAA reset every year?",
    answer:
      "Yes. Social Security recalculates IRMAA each year using your most recent tax return on file, which is generally from two years prior. If your income drops below the threshold in a future year, your IRMAA surcharge will go away automatically once SSA receives the updated tax data from the IRS.",
  }
,
  {
    question: "How do I appeal IRMAA if my income has dropped?",
    answer:
      "If you've experienced a life-changing event such as retirement, divorce, or the death of a spouse, you can request a reduction by filing Form SSA-44 with the Social Security Administration. You'll need to provide documentation of the event and an estimate of your new income. SSA can then use your more recent income instead of the tax return from two years prior. For help walking through the process, call 855-559-1700.",
  },
  {
    question: "Is IRMAA recalculated every year?",
    answer:
      "Yes. Social Security reviews your most recent tax return each year to determine whether IRMAA applies and at what tier. If your income drops below the threshold in a later year, the surcharge will be removed automatically once SSA receives the updated IRS data. You do not need to reapply each year unless you're requesting a reduction based on a life-changing event.",
  },
  {
    question: "How is the IRMAA surcharge paid?",
    answer:
      "The Part B IRMAA surcharge is typically deducted directly from your Social Security benefit, just like your standard Part B premium. The Part D IRMAA surcharge is billed separately by Medicare — not by your drug plan — and can also be deducted from Social Security if you choose. If you're not yet collecting Social Security, you'll receive a bill from Medicare.",
  }
,
  {
    question: "How do I appeal IRMAA if my income has dropped?",
    answer:
      "If you've experienced a life-changing event such as retirement, marriage, divorce, or the death of a spouse, you can file Form SSA-44 with the Social Security Administration to request a reduction. You'll need to provide documentation of the event and an estimate of your reduced income. SSA reviews these requests case-by-case and adjusts your premium if approved. Call 855-559-1700 if you'd like help understanding the process.",
  },
  {
    question: "Will IRMAA go away on its own if my income decreases?",
    answer:
      "Yes, eventually. Because IRMAA is based on your tax return from two years prior, a drop in income will automatically lower or remove your surcharge once SSA receives the updated tax data. If you don't want to wait two years, filing SSA-44 after a qualifying life-changing event is the faster route.",
  },
  {
    question: "Does IRMAA affect Medicare Advantage or Medigap premiums?",
    answer:
      "No. IRMAA only applies to your Part B premium and your Part D prescription drug premium. It is paid directly to Medicare, not to your Medicare Advantage or Medigap plan. However, if your Medicare Advantage plan includes drug coverage, the Part D portion of IRMAA still applies.",
  }
,
  {
    question: "Can I appeal IRMAA if my income has dropped?",
    answer:
      "Yes. If you experienced a life-changing event such as retirement, marriage, divorce, or the death of a spouse, you can file Form SSA-44 with the Social Security Administration to request a reduction. You'll need documentation of the event and your current expected income. If approved, SSA will use your more recent income instead of the two-year-old tax return.",
  },
  {
    question: "Is IRMAA recalculated every year?",
    answer:
      "Yes. Social Security reviews your most recent tax return each year to determine whether IRMAA applies for the upcoming calendar year. If your income drops below the threshold, the surcharge goes away automatically the next year. You do not need to reapply if your income naturally decreases.",
  },
  {
    question: "How is the IRMAA surcharge paid?",
    answer:
      "For Part B, the IRMAA surcharge is added to your monthly Part B premium and typically deducted directly from your Social Security benefit. For Part D, the surcharge is billed separately by Medicare or Social Security — it is not paid to your Part D plan. You continue paying your regular Part D plan premium to the insurance carrier.",
  }
,
  {
    question: "Can I appeal IRMAA if my income has dropped?",
    answer:
      "Yes. If you experienced a qualifying life-changing event such as retirement, divorce, or the death of a spouse, you can file Form SSA-44 with the Social Security Administration to request a reduction. You'll need to provide documentation of the event and an estimate of your current year's income. If approved, SSA will use your more recent income instead of the two-year-old tax return.",
  },
  {
    question: "How will I know if I owe IRMAA?",
    answer:
      "Social Security mails an initial determination notice each fall explaining whether you owe IRMAA for the upcoming year and how the amount was calculated. The surcharge is automatically deducted from your Social Security benefit or billed directly if you don't yet collect benefits. Part D IRMAA is billed separately by Social Security, not by your drug plan.",
  },
  {
    question: "Does IRMAA recalculate every year?",
    answer:
      "Yes. Social Security reviews your most recent tax return each year, so IRMAA can go up, down, or disappear entirely as your income changes. Because there's a two-year lookback, a one-time income spike — like a Roth conversion or large capital gain — will only affect you for a single year in most cases.",
  }
,
  {
    question: "How do I appeal an IRMAA determination if my income has dropped?",
    answer:
      "You can appeal by filing Form SSA-44 with the Social Security Administration if you experienced a qualifying life-changing event, such as retirement, the death of a spouse, or divorce. You'll need documentation of the event and an estimate of your reduced income for the current year. If approved, SSA will recalculate your IRMAA using your updated income instead of the tax return from two years prior.",
  },
  {
    question: "Does IRMAA get reviewed every year?",
    answer:
      "Yes. Social Security recalculates IRMAA annually based on the most recent tax return data provided by the IRS. If your income drops below the threshold in a future year, your IRMAA surcharge will be reduced or eliminated automatically the following year. You do not need to reapply once your income falls back below the bracket.",
  },
  {
    question: "Can a licensed broker help me plan around IRMAA?",
    answer:
      "A licensed Medicare broker can help you understand how IRMAA affects your total Medicare costs and coordinate with your tax or financial advisor on timing decisions. While brokers do not file IRMAA appeals for you, we can explain the SSA-44 process and help you compare Part D and Medicare Advantage options. Call 855-559-1700 for free guidance.",
  }
,
  {
    question: "How do I appeal an IRMAA determination if my income has dropped?",
    answer:
      "If you've experienced a qualifying life-changing event — such as retirement, divorce, or the death of a spouse — you can file Form SSA-44 with the Social Security Administration to request a reduction. You'll need to provide documentation of the event and an estimate of your reduced income. SSA reviews these requests and adjusts your IRMAA if approved. You can also call SSA directly to start the process.",
  },
  {
    question: "Will IRMAA automatically go away if my income decreases?",
    answer:
      "Eventually, yes — IRMAA is recalculated each year based on your tax return from two years prior. If your income drops and you wait, the surcharge will adjust on its own once SSA receives the updated tax data. However, if the drop is due to a life-changing event, filing Form SSA-44 can speed up the reduction rather than waiting two years.",
  },
  {
    question: "Can a Medicare broker help me reduce or appeal IRMAA?",
    answer:
      "A licensed broker cannot change your IRMAA determination — that's handled by the Social Security Administration. However, we can help you understand which life-changing events qualify, walk you through the SSA-44 process, and review how IRMAA affects your Part B and Part D costs. Call 855-559-1700 for free guidance.",
  }
,
  {
    question: "How do I appeal an IRMAA determination if my income has dropped?",
    answer:
      "If you've experienced a life-changing event such as retirement, divorce, or the death of a spouse, you can request a reduction by filing Form SSA-44 with the Social Security Administration. You'll need documentation of the event and your reduced income estimate. SSA reviews the request and, if approved, recalculates your IRMAA based on the new circumstances.",
  },
  {
    question: "Will IRMAA go away on its own if my income drops?",
    answer:
      "Yes, IRMAA is recalculated every year based on your most recent tax return on file (typically two years prior). If your income falls below the threshold in a later tax year, your IRMAA surcharge will be removed automatically once SSA receives the updated IRS data. You don't have to wait if the drop was caused by a qualifying life-changing event — you can file SSA-44 to update it sooner.",
  },
  {
    question: "How am I notified that I owe IRMAA?",
    answer:
      "Social Security mails a predetermination notice followed by an initial determination letter explaining the surcharge amount and the income data used. The letter also explains your right to appeal or request a new decision if you had a life-changing event. If you disagree with the income figures, you can request a reconsideration through SSA.",
  }
,
  {
    question: "How do I appeal IRMAA if my income has dropped?",
    answer:
      "If you experienced a life-changing event such as retirement, divorce, or the death of a spouse, you can request a reduction by filing Form SSA-44 with the Social Security Administration. You'll need to provide documentation of the event and an estimate of your new, lower income. If approved, SSA will recalculate your IRMAA based on the more recent income.",
  },
  {
    question: "Is IRMAA recalculated every year?",
    answer:
      "Yes. Social Security reviews your IRMAA status each year using your most recent IRS tax return data. If your income drops below the threshold, your surcharge will automatically be removed for the following year — no appeal needed unless you want it adjusted sooner.",
  },
  {
    question: "Can a Roth conversion or one-time capital gain trigger IRMAA?",
    answer:
      "Yes. Because IRMAA is based on Modified Adjusted Gross Income, large one-time events like Roth IRA conversions, home sales, or capital gains can push you into a higher bracket two years later. Careful tax planning before age 63 can help avoid an unexpected surcharge later in retirement.",
  }
];

export default function IrmaaPage() {
  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />

      <nav className="max-w-4xl mx-auto px-4 pt-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/learn/what-is-medigap" className="hover:text-blue-600">Learn</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-900 font-medium">IRMAA Medicare Surcharge</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          IRMAA Explained: Medicare&apos;s Income-Related Surcharge (2026)
        </h1>
        <p className="text-sm text-gray-400 mb-6">
          By <strong className="text-gray-600">Anthony Orner</strong>, Licensed Medicare Insurance Broker · Updated March 2026
        </p>

        {/* Quick summary */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-1">In plain English</p>
          <p className="text-gray-700">
            If you earn above a certain amount, Medicare charges you extra on your Part B and Part D premiums.
            This surcharge is called <strong>IRMAA</strong>. It is based on your tax return from two years ago.
            If your income has dropped since then, you can appeal.
          </p>
        </div>

        {/* What is IRMAA */}
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">What Is IRMAA?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          IRMAA stands for <strong>Income-Related Monthly Adjustment Amount</strong>. It is an additional
          amount that higher-income Medicare beneficiaries pay on top of the standard Part B premium
          ($202.90/month in 2026) and their Part D drug plan premium.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          About <strong>93% of Medicare beneficiaries</strong> pay only the standard premium. IRMAA only
          applies if your modified adjusted gross income (MAGI) exceeds certain thresholds.
        </p>

        {/* How it's calculated */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">How IRMAA Is Calculated</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Social Security determines your IRMAA based on the <strong>tax return from two years ago</strong>.
          For your 2026 premiums, they look at your <strong>2024 federal tax return</strong>. Specifically,
          they use your Modified Adjusted Gross Income (MAGI), which is your adjusted gross income plus
          any tax-exempt interest income.
        </p>
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-1">Why the two-year lookback?</p>
          <p className="text-gray-700 text-sm">
            The IRS shares your tax data with Social Security, and the most recent finalized return
            is typically from two years prior. This means a high-income year in 2024 affects your
            2026 premiums — even if your income is lower now.
          </p>
        </div>

        {/* Bracket table */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2025 Part B IRMAA Brackets</h2>
        <p className="text-gray-600 text-sm mb-4">
          The table below shows the monthly Part B surcharge by income level. CMS publishes updated
          brackets each fall for the following year.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="text-left px-4 py-3 rounded-tl-lg">Individual (Single)</th>
                <th className="text-left px-4 py-3">Married Filing Jointly</th>
                <th className="text-left px-4 py-3">Monthly Surcharge</th>
                <th className="text-left px-4 py-3 rounded-tr-lg">Total Part B Premium</th>
              </tr>
            </thead>
            <tbody>
              {partBBrackets.map((row, i) => (
                <tr key={i} className={i === 0 ? "bg-green-50" : i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 border-b border-gray-100 text-gray-700">{row.income}</td>
                  <td className="px-4 py-3 border-b border-gray-100 text-gray-700">{row.jointIncome}</td>
                  <td className="px-4 py-3 border-b border-gray-100 font-semibold text-gray-900">{row.surcharge}</td>
                  <td className="px-4 py-3 border-b border-gray-100 text-gray-700">{row.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mb-8">
          Source:{" "}
          <a
            href="https://www.medicare.gov/your-medicare-costs/part-b-costs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Medicare.gov — Part B Costs
          </a>
          . Brackets shown are for 2025; CMS announces 2026 amounts in fall 2025.
          Married filing separately has different thresholds — see the CMS announcement for details.
        </p>

        {/* CTA */}
        <div className="my-8 bg-gray-900 text-white rounded-xl p-6 text-center">
          <p className="font-bold text-lg mb-2">Not sure if IRMAA applies to you?</p>
          <p className="text-gray-300 text-sm mb-4">
            We can review your situation and explain your options — no cost, no obligation.
          </p>
          <PhoneCTA label="Call for Free Guidance" />
        </div>

        {/* Appeal process */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">How to Appeal IRMAA (Form SSA-44)</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          If your income has dropped significantly since the tax year Social Security is using, you
          may be able to get the surcharge reduced or eliminated. The process is straightforward:
        </p>

        {/* Steps */}
        <div className="space-y-4 mb-8">
          {[
            {
              step: "1",
              title: "Confirm you had a qualifying life-changing event",
              detail:
                "Social Security will only reconsider your IRMAA if your income changed due to a specific qualifying event (see list below). Simply having lower income is not enough — you need a triggering event.",
            },
            {
              step: "2",
              title: "Download Form SSA-44",
              detail:
                "This is the official form titled \"Medicare Income-Related Monthly Adjustment Amount — Life-Changing Event.\" You can download it, fill it out online at ssa.gov, or pick up a copy at your local Social Security office.",
            },
            {
              step: "3",
              title: "Gather your documentation",
              detail:
                "You will need proof of the life-changing event (e.g., retirement letter, divorce decree, death certificate) and evidence of your reduced income (e.g., recent pay stubs, pension statement, or a signed statement of expected income).",
            },
            {
              step: "4",
              title: "Submit the form",
              detail:
                "You can submit online through your my Social Security account, mail the completed form and documents to your local Social Security office, or schedule an appointment to submit in person.",
            },
          ].map((s) => (
            <div key={s.step} className="flex gap-4 p-4 border border-gray-100 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-800 text-white rounded-full flex items-center justify-center font-bold text-sm">
                {s.step}
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{s.title}</p>
                <p className="text-gray-600 text-sm mt-1">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Download link */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-2">Download the SSA-44 Form (PDF)</p>
          <p className="text-gray-700 text-sm mb-3">
            This is the official form from the Social Security Administration to request a
            reduction in your IRMAA surcharge.
          </p>
          <a
            href="https://www.ssa.gov/forms/ssa-44.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-800 text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-blue-900 transition-colors"
          >
            Download SSA-44 (PDF) →
          </a>
          <p className="text-xs text-gray-500 mt-2">
            Opens ssa.gov in a new tab. You can also{" "}
            <a
              href="https://www.ssa.gov/myaccount/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              file online through your my Social Security account
            </a>.
          </p>
        </div>

        {/* Life-changing events */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">Qualifying Life-Changing Events</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Social Security will reconsider your IRMAA if one of these events caused your income to decrease:
        </p>
        <div className="grid md:grid-cols-2 gap-3 mb-8">
          {lifeChangingEvents.map((event) => (
            <div key={event} className="flex items-start gap-2 p-3 border border-gray-100 rounded-lg">
              <span className="text-green-600 font-bold mt-0.5">✓</span>
              <span className="text-gray-700 text-sm">{event}</span>
            </div>
          ))}
        </div>
        <div className="bg-red-50 border border-red-100 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-1">What does NOT qualify</p>
          <p className="text-gray-700 text-sm">
            A one-time spike in income (like selling a home or a Roth conversion) does <strong>not</strong> qualify
            as a life-changing event. However, since IRMAA is recalculated each year, the surcharge from a
            one-time event will typically only last for one year.
          </p>
        </div>

        {/* Second CTA */}
        <div className="mb-10">
          <PhoneCTA label="Questions About IRMAA? Call Free" />
        </div>

        {/* FAQ */}
        <div className="mb-10">
          <FAQSection faqs={faqs} title="IRMAA — Frequently Asked Questions" />
        </div>

        {/* Related links */}
        <div className="bg-gray-50 rounded-xl p-6 text-sm border border-gray-100">
          <p className="font-semibold text-gray-900 mb-2">Also helpful</p>
          <ul className="space-y-1 text-gray-600">
            <li>
              <Link href="/learn/medicare-parts-explained" className="text-blue-600 hover:underline">
                Medicare Parts A, B, C & D explained
              </Link>
            </li>
            <li>
              <Link href="/learn/how-to-sign-up-for-medicare" className="text-blue-600 hover:underline">
                How and when to sign up for Medicare
              </Link>
            </li>
            <li>
              <Link href="/learn/medicare-help-low-income" className="text-blue-600 hover:underline">
                Medicare help for people on a fixed income
              </Link>
            </li>
            <li>
              <Link href="/medicare-supplement/new-jersey/cost" className="text-blue-600 hover:underline">
                What does Medicare Supplement cost in New Jersey?
              </Link>
            </li>
            <li>
              <Link href="/services/best-and-cheapest-medicare-supplement" className="text-blue-600 hover:underline">
                Best and Cheapest Medicare Supplement Plans
              </Link>
            </li>
            <li>
              <Link href="/services/best-medicare-supplement-rates-by-age-plan-g-plan-n-plan-f-rates" className="text-blue-600 hover:underline">
                Medicare Supplement Rates by Age
              </Link>
            </li>
            <li>
              <Link href="/services/help-with-your-medicare-decision" className="text-blue-600 hover:underline">
                Help With Your Medicare Decision
              </Link>
            </li>
          </ul>
          <p className="font-semibold text-gray-900 mt-4 mb-2">Explore your options</p>
          <ul className="space-y-1 text-gray-600">
            <li>
              <Link href="/services/switch-medigap-plans" className="text-blue-600 hover:underline">
                Switch Medigap Plans
              </Link>
            </li>
            <li>
              <Link href="/services/how-can-i-save-money-on-my-medicare-supplement" className="text-blue-600 hover:underline">
                How Can I Save Money on My Medicare Supplement?
              </Link>
            </li>
            <li>
              <Link href="/services/medicare-supplement-plan-medigap-premium-hikes" className="text-blue-600 hover:underline">
                Medigap Premium Hikes — What to Do
              </Link>
            </li>
          </ul>
          <p className="mt-3 text-xs text-gray-400">
            EasyKind Medicare is an independent brokerage and is not affiliated with Medicare, CMS, SSA, or any government agency.
          </p>
        </div>
      </article>
    </>
  );
}
