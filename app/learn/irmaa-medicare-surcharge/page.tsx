import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "IRMAA Explained: Medicare's Income Surcharge (2026)",
  description:
    "Learn how 2026 Medicare IRMAA surcharges work on Part B & D, who pays, and how to appeal with SSA-44. Free licensed broker help — call 855-559-1700 today.",
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
