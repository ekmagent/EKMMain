import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Medicare Help on a Fixed Income (2026)",
  description:
    "Lower or eliminate Medicare costs with Extra Help, QMB, SLMB & Medicare Savings Programs. Free help finding what you qualify for: 855-559-1700.",
  alternates: { canonical: `${SITE_URL}/learn/medicare-help-low-income` },
  openGraph: {
    title: "Medicare Help on a Fixed Income (2026)",
    description:
      "Programs that lower or eliminate Medicare costs: Extra Help, QMB, SLMB, and Medicare Savings Programs. Free guidance: 855-559-1700.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://medicareyourself.com" },
    { "@type": "ListItem", position: 2, name: "Learn", item: "https://medicareyourself.com/learn" },
    { "@type": "ListItem", position: 3, name: "Medicare Help for Low Income", item: "https://medicareyourself.com/learn/medicare-help-low-income" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Medicare Help for People on a Fixed Income (2026)",
  datePublished: "2026-01-01",
  dateModified: "2026-03-13",
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

const faqs = [
  {
    question: "What is the Medicare Savings Program?",
    answer:
      "Medicare Savings Programs (MSPs) are state-administered programs that help people with limited income pay Medicare premiums, deductibles, and coinsurance. There are four levels: QMB, SLMB, QI, and QDWI. Eligibility is based on income and assets. You apply through your state Medicaid office — in New Jersey, through NJ FamilyCare.",
  },
  {
    question: "What is QMB and who qualifies?",
    answer:
      "The Qualified Medicare Beneficiary (QMB) program is the most comprehensive Medicare Savings Program. It pays your Part A and Part B premiums, deductibles, and coinsurance. In 2026, you may qualify if your monthly income is at or below approximately $1,235 (individual) or $1,663 (couple). Asset limits apply and vary by state. QMB also automatically qualifies you for Extra Help with drug costs.",
  },
  {
    question: "What is Extra Help for Medicare drug costs?",
    answer:
      "Extra Help (also called the Low Income Subsidy or LIS) is a federal program that reduces or eliminates out-of-pocket costs for Medicare Part D prescription drugs. In 2026 you may qualify with income up to about $22,590 (individual) or $30,660 (couple). People with Extra Help pay little or nothing for covered drugs. Apply through Social Security at ssa.gov or by calling 1-800-772-1213.",
  },
  {
    question: "What is SLMB and how does it differ from QMB?",
    answer:
      "The Specified Low-Income Medicare Beneficiary (SLMB) program pays only your Part B monthly premium ($202.90/month in 2026). It is available to people with slightly higher income than QMB — roughly 100–120% of the Federal Poverty Level. SLMB also automatically qualifies you for Extra Help with drug costs, which can save hundreds per year.",
  },
  {
    question: "Can I get Medicare Supplement if I have low income?",
    answer:
      "Yes, and it may still make sense depending on your situation. If you qualify for QMB, that program covers your cost-sharing already, so a Medigap plan would overlap. However, if you do not qualify for MSPs and are worried about unpredictable medical bills, a Medicare Supplement plan with a predictable monthly premium may provide peace of mind. Call 855-559-1700 to talk through your specific situation — there is no cost to get guidance.",
  },
  {
    question: "How do I apply for Medicare Savings Programs in New Jersey?",
    answer:
      "In New Jersey, apply for Medicare Savings Programs through NJ FamilyCare at njfamilycare.org or call 1-800-701-0710. You can also get free help from NJ SHIP (State Health Insurance Assistance Program) at 1-800-792-8820. An independent broker like EasyKind Medicare can also help you understand which programs you may qualify for before you apply.",
  },
];

const programs = [
  {
    name: "QMB",
    fullName: "Qualified Medicare Beneficiary",
    covers: "Part A & B premiums, deductibles, coinsurance",
    income: "~100% FPL (~$1,235/mo individual)",
    drugHelp: "Yes — automatic Extra Help",
    highlight: true,
  },
  {
    name: "SLMB",
    fullName: "Specified Low-Income Medicare Beneficiary",
    covers: "Part B premium only ($202.90/mo)",
    income: "100–120% FPL (~$1,235–$1,480/mo)",
    drugHelp: "Yes — automatic Extra Help",
    highlight: false,
  },
  {
    name: "QI",
    fullName: "Qualifying Individual",
    covers: "Part B premium only",
    income: "120–135% FPL (~$1,480–$1,660/mo)",
    drugHelp: "Yes — automatic Extra Help",
    highlight: false,
  },
  {
    name: "Extra Help",
    fullName: "Low Income Subsidy (LIS)",
    covers: "Part D drug costs — copays, deductibles, premiums",
    income: "Up to ~150% FPL (~$1,843/mo)",
    drugHelp: "This IS the drug help program",
    highlight: false,
  },
];

export default function LowIncomeMedicarePage() {
  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />

      <nav className="max-w-4xl mx-auto px-4 pt-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/learn/what-is-medigap" className="hover:text-blue-600">Learn</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-900 font-medium">Medicare Help for Limited Income</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Medicare Help for People on a Fixed Income (2026)
        </h1>
        <p className="text-sm text-gray-400 mb-6">
          By <strong className="text-gray-600">Anthony Orner</strong>, Licensed Medicare Insurance Broker · Updated March 2026
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          If cost is your primary concern with Medicare, you are not alone — and there are real programs
          designed to help. Many people who qualify for these programs never apply because they do not
          know they exist.
        </p>
        <p className="text-gray-600 leading-relaxed mb-8">
          These are federal and state programs — not insurance products. They are free to apply for
          and can save hundreds or thousands of dollars per year in Medicare costs.
        </p>

        {/* Programs table */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Programs at a Glance (2026)</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="text-left px-4 py-3 rounded-tl-lg">Program</th>
                <th className="text-left px-4 py-3">What It Pays</th>
                <th className="text-left px-4 py-3">Income Limit (approx.)</th>
                <th className="text-left px-4 py-3 rounded-tr-lg">Drug Help?</th>
              </tr>
            </thead>
            <tbody>
              {programs.map((p, i) => (
                <tr key={p.name} className={p.highlight ? "bg-green-50" : i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 border-b border-gray-100">
                    <p className="font-bold text-blue-800">{p.name}</p>
                    <p className="text-xs text-gray-500">{p.fullName}</p>
                  </td>
                  <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{p.covers}</td>
                  <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{p.income}</td>
                  <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{p.drugHelp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mb-8">
          Income limits are approximate and updated annually. Asset limits also apply. Contact your state Medicaid office for exact 2026 figures.
          Source: <a href="https://www.medicare.gov/your-medicare-costs/get-help-paying-costs" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Medicare.gov</a>
        </p>

        {/* How to apply */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Apply</h2>
        <div className="space-y-3 mb-8">
          {[
            {
              label: "Extra Help (drug costs)",
              detail: "Apply at ssa.gov or call Social Security at 1-800-772-1213. Takes about 30 minutes online.",
              href: "https://www.ssa.gov/extrahelp",
            },
            {
              label: "QMB / SLMB / QI (Medicare Savings Programs)",
              detail: "Apply through your state Medicaid office. In NJ: NJFamilyCare.org or 1-800-701-0710. In PA: compass.state.pa.us or 1-800-692-7462.",
              href: "https://www.medicare.gov/your-medicare-costs/get-help-paying-costs/medicare-savings-programs",
            },
            {
              label: "Free counseling via SHIP",
              detail: "Your state's free Medicare counseling program can walk you through eligibility. NJ SHIP: 1-800-792-8820. PA APPRISE: 1-800-783-7067.",
              href: "https://www.shiphelp.org",
            },
          ].map((item) => (
            <div key={item.label} className="flex gap-3 p-4 border border-gray-100 rounded-lg">
              <div className="flex-shrink-0 w-2 h-2 bg-blue-700 rounded-full mt-2" />
              <div>
                <p className="font-semibold text-gray-900 text-sm">{item.label}</p>
                <p className="text-gray-600 text-sm">{item.detail}</p>
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-xs hover:underline">
                  {item.href.replace("https://", "")}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-10">
          <PhoneCTA label="Not Sure What You Qualify For? Call Free" />
        </div>

        <div className="mb-10">
          <FAQSection faqs={faqs} title="Low-Income Medicare Questions" />
        </div>

        <div className="bg-gray-50 rounded-xl p-6 text-sm border border-gray-100">
          <p className="font-semibold text-gray-900 mb-2">Also helpful</p>
          <ul className="space-y-1 text-gray-600">
            <li>
              <Link href="/learn/what-is-medigap" className="text-blue-600 hover:underline">
                What is Medigap insurance?
              </Link>
            </li>
            <li>
              <Link href="/learn/how-to-sign-up-for-medicare" className="text-blue-600 hover:underline">
                How and when to sign up for Medicare
              </Link>
            </li>
            <li>
              <Link href="/medicare-supplement/new-jersey" className="text-blue-600 hover:underline">
                Medicare Supplement plans in New Jersey
              </Link>
            </li>
            <li>
              <Link href="/services/best-medicare-supplement-for-people-on-disability" className="text-blue-600 hover:underline">
                Best Medicare Supplement for People on Disability
              </Link>
            </li>
            <li>
              <Link href="/services/you-get-a-medicare-supplement-if-you-are-on-disability" className="text-blue-600 hover:underline">
                Medicare Supplement If You Are on Disability
              </Link>
            </li>
            <li>
              <Link href="/services/how-much-does-medicare-supplement-cost-per-month-for-seniors" className="text-blue-600 hover:underline">
                How Much Does Medicare Supplement Cost Per Month?
              </Link>
            </li>
          </ul>
          <p className="font-semibold text-gray-900 mt-4 mb-2">Explore your options</p>
          <ul className="space-y-1 text-gray-600">
            <li>
              <Link href="/services/how-can-i-save-money-on-my-medicare-supplement" className="text-blue-600 hover:underline">
                How Can I Save Money on My Medicare Supplement?
              </Link>
            </li>
            <li>
              <Link href="/services/best-and-cheapest-medicare-supplement" className="text-blue-600 hover:underline">
                Best and Cheapest Medicare Supplement Plans
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
