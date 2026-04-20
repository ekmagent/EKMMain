import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "IRMAA Explained: Medicare's Income Surcharge (2026)",
  description:
    "2026 IRMAA brackets explained: Part B & Part D income surcharges, how MAGI is used, and how to appeal with SSA-44. Free broker help at 855-559-1700.",
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
  { filing: "Single", joint: "Married Filing Jointly", surcharge: "$0", total: "$185.00" , income: "$106,000 or less", jointIncome: "$212,000 or less" },
  { filing: "Single", joint: "Married Filing Jointly", surcharge: "+$70.00", total: "$255.00", income: "$106,001–$133,000", jointIncome: "$212,001–$266,000" },
  { filing: "Single", joint: "Married Filing Jointly", surcharge: "+$175.00", total: "$360.00", income: "$133,001–$167,000", jointIncome: "$266,001–$334,000" },
  { filing: "Single", joint: "Married Filing Jointly", surcharge: "+$280.10", total: "$465.10", income: "$167,001–$200,000", jointIncome: "$334,001–$400,000" },
  { filing: "Single", joint: "Married Filing Jointly", surcharge: "+$385.00", total: "$570.00", income: "$200,001–$500,000", jointIncome: "$400,001–$750,000" },
  { filing: "Single", joint: "Married Filing Jointly", surcharge: "+$420.80", total: "$605.80", income: "Above $500,000", jointIncome: "Above $750,000" },
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
,
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
  }
,
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
  }
,
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
          ($185/month in 2026) and their Part D drug plan premium.
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
