import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { MF } from "@/lib/medicare-figures";
import { SITE_URL } from "@/lib/site";

const PAGE_PATH = "/medicare-supplement/compare-policies";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const APPLY_URL = "https://healthplans.now";

export const metadata: Metadata = {
  title: "Compare Medigap Policies: 2026 Plans, Costs & Apply",
  description:
    "Compare Medigap policies side-by-side: Plans G, N, F, K, L and more. 2026 benefits, costs, enrollment rules — then apply online in minutes.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Compare Medigap Policies: 2026 Plans, Costs & Apply",
    description:
      "Compare Medigap policies side-by-side: Plans G, N, F, K, L and more. 2026 benefits, costs, enrollment rules — then apply online in minutes.",
    type: "article",
    url: PAGE_URL,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Medicare Supplement", item: `${SITE_URL}/medicare-supplement` },
    { "@type": "ListItem", position: 3, name: "Compare Policies", item: PAGE_URL },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Compare Medigap Policies: 2026 Plan-by-Plan Benefits & Costs",
  description:
    "A complete 2026 comparison of Medicare Supplement (Medigap) policies: standardized plan letters, costs, enrollment rules, and how to apply.",
  datePublished: "2026-04-24",
  dateModified: "2026-04-24",
  inLanguage: "en-US",
  author: {
    "@type": "Person",
    name: "Anthony Orner",
    url: `${SITE_URL}/about`,
  },
  publisher: {
    "@type": "Organization",
    name: "MedicareYourself",
    url: SITE_URL,
  },
};

const faqs = [
  {
    question: "What is the best Medigap plan to compare first?",
    answer:
      `Plan G is the starting point for most people newly eligible for Medicare because it offers the most comprehensive coverage available, leaving only the ${MF.partBDeductible} Part B deductible for you to pay. Plan N is the next most popular for lower premiums with small copays.`,
  },
  {
    question: "Can I switch Medigap policies after my Open Enrollment Period ends?",
    answer:
      "Yes, you can apply to switch any time, but outside your 6-month Medigap Open Enrollment Period or a federal guaranteed-issue situation, carriers can use medical underwriting. That means they may review your health history and decline coverage or charge more.",
  },
  {
    question: "Do all carriers charge the same for the same Medigap plan?",
    answer:
      "No. Benefits are federally standardized, so Plan G from one carrier covers the exact same services as Plan G from another. However, monthly premiums, pricing method (community, issue-age, or attained-age), and rate-increase history vary significantly by carrier and ZIP code.",
  },
];

const planCompare = [
  { plan: "Plan G", covers: "Everything except Part B deductible", bestFor: "Most people — most comprehensive modern option", note: "Most Popular" },
  { plan: "High-Deductible G", covers: "Same as Plan G after annual deductible met", bestFor: "Healthy, want lowest premium with catastrophic protection", note: "" },
  { plan: "Plan N", covers: "Plan G minus Part B excess charges + small copays", bestFor: "Healthy, infrequent visits, want lower premium", note: "" },
  { plan: "Plan A", covers: "Basic benefits only", bestFor: "Very healthy, minimal utilization", note: "" },
  { plan: "Plan K", covers: "50% cost-sharing to annual out-of-pocket max", bestFor: "Budget-conscious, healthy", note: "" },
  { plan: "Plan L", covers: "75% cost-sharing to annual out-of-pocket max", bestFor: "Budget-conscious, moderate utilization", note: "" },
  { plan: "Plan F", covers: "Everything including Part B deductible", bestFor: "Only available if Medicare-eligible before 1/1/2020", note: "Closed to new enrollees" },
];

export default function CompareMedigapPoliciesPage() {
  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />

      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-4 pt-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/medicare-supplement" className="hover:text-blue-600">Medicare Supplement</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-900 font-medium">Compare Policies</span>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Compare Medigap Policies: 2026 Plan-by-Plan Benefits &amp; Costs
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              By <strong>Anthony Orner</strong>, Licensed Medicare Insurance Broker
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6 mt-4">
              Medigap policies are standardized by letter (A, B, C, D, F, G, K, L, M, N), so every
              Plan G sold is identical in benefits across carriers — only the premium and company
              differ. To compare Medigap policies, look at four things: which gaps each letter fills
              (Part A/B coinsurance, deductibles, excess charges, foreign travel), the monthly
              premium in your ZIP code, the carrier&apos;s rate-increase history, and whether you
              qualify during your 6-month Medigap Open Enrollment Period or must pass medical
              underwriting.
            </p>
            <p className="text-xs text-gray-400 mb-6">
              Last reviewed: April 2026 · Plan benefits sourced from CMS.gov · {MF.year} figures
              from lib/medicare-figures.ts
            </p>
            <a
              href={APPLY_URL}
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              Start Your Medigap Application →
            </a>
          </div>

          {/* Sidebar CTA */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 h-fit">
            <h2 className="text-lg font-bold text-gray-900 mb-2">
              Ready to Compare &amp; Apply?
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Get real 2026 rates from the carriers in your area and apply online — under 15
              minutes at healthplans.now.
            </p>
            <a
              href={APPLY_URL}
              className="block w-full text-center bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition-colors mb-3"
            >
              Apply at healthplans.now
            </a>
            <a
              href="tel:8555591700"
              className="block w-full text-center border border-blue-700 text-blue-700 hover:bg-blue-50 font-semibold py-3 rounded-lg transition-colors text-sm"
            >
              Or call 855-559-1700
            </a>
            <p className="text-xs text-gray-400 mt-3 text-center">Licensed independent broker</p>
          </div>
        </div>
      </section>

      {/* How Medigap Plans Compare */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          How Medigap Plans Compare in {MF.year}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Because benefits are federally standardized, comparing policies comes down to coverage
          level and price. Plan G is the most comprehensive plan available to people newly eligible
          for Medicare — it covers everything except the Part B deductible ({MF.partBDeductible} in{" "}
          {MF.year}). Plan N trades slightly lower premiums for small copays at office and ER visits
          and does not cover Part B excess charges. Plan F remains available only to those eligible
          for Medicare before January 1, 2020.
        </p>

        {/* Plan comparison table */}
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="text-left px-4 py-3 rounded-tl-lg">Plan</th>
                <th className="text-left px-4 py-3">What It Covers</th>
                <th className="text-left px-4 py-3 rounded-tr-lg">Best For</th>
              </tr>
            </thead>
            <tbody>
              {planCompare.map((row, i) => (
                <tr key={row.plan} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-semibold text-blue-700 border-b border-gray-100">
                    {row.plan}
                    {row.note === "Most Popular" && (
                      <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-normal">
                        Most Popular
                      </span>
                    )}
                    {row.note === "Closed to new enrollees" && (
                      <span className="ml-2 text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-normal">
                        Pre-2020 only
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{row.covers}</td>
                  <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{row.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">Plan G vs. Plan N</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed mb-6">
          <li>
            <strong>Plan G:</strong> Covers Part A deductible ({MF.partADeductible}), Part A/B
            coinsurance, skilled nursing coinsurance, Part B excess charges, and 80% foreign travel
            emergency. You pay only the {MF.partBDeductible} Part B deductible each year.
          </li>
          <li>
            <strong>Plan N:</strong> Covers the same core benefits except Part B excess charges. You
            pay up to $20 per office visit, up to $50 per ER visit (waived if admitted), and the
            Part B deductible.
          </li>
          <li>
            <strong>High-Deductible Plan G:</strong> Lower premium; you pay out-of-pocket until a
            yearly deductible is met, then the plan covers like standard Plan G.
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">Plans K, L, and M</h3>
        <p className="text-gray-700 leading-relaxed">
          Plans K and L cap out-of-pocket spending and cover a percentage (50% or 75%) of several
          benefits rather than 100%. Plan M splits the Part A deductible 50/50 with you. These plans
          trade lower premiums for more cost-sharing.
        </p>
      </section>

      {/* What Medigap Costs */}
      <section className="bg-green-50 border-y border-green-100 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What Medigap Costs in {MF.year}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Premiums vary by ZIP code, age, gender, and carrier, but every Medigap enrollee also
            pays the standard Medicare Part B premium of {MF.partBPremium}/month in {MF.year}. Plan
            G premiums typically run in the mid-range; Plan N is usually lower; Plan F (for those
            still eligible) is highest because it also covers the Part B deductible.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Carriers use one of three pricing methods — community-rated, issue-age-rated, or
            attained-age-rated — so two policies with identical benefits can diverge in price over
            time. Compare 10-year rate histories when possible.
          </p>
          <a
            href={APPLY_URL}
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
          >
            Apply for Your Medigap Plan →
          </a>
        </div>
      </section>

      {/* When You Can Enroll or Switch */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          When You Can Enroll or Switch
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Your best window is the <strong>6-month Medigap Open Enrollment Period</strong>, which
          starts the month you&apos;re 65 or older AND enrolled in Medicare Part B. During this
          window, carriers cannot deny you coverage or charge more for health conditions.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Outside that window, you generally go through medical underwriting unless you qualify for
          a federal guaranteed-issue right — for example, losing employer group coverage or moving
          out of a Medicare Advantage plan&apos;s service area. Switching carriers to lower your
          premium is common, but approval isn&apos;t guaranteed once the OEP closes.
        </p>
      </section>

      {/* Who Is Eligible */}
      <section className="max-w-6xl mx-auto px-4 py-12 border-t border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Who Is Eligible for Medigap?</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          You must be enrolled in Medicare Part A and Part B to buy a Medigap policy. Medigap does
          not work alongside Medicare Advantage — you&apos;d need to disenroll from MA first.
          Questions on eligibility? Call 855-559-1700 or apply online at healthplans.now.
        </p>
        <a
          href={APPLY_URL}
          className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
        >
          Switch Carriers in Minutes →
        </a>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-4">
        <FAQSection faqs={faqs} />
      </section>

      {/* Phone CTA band */}
      <PhoneCTA label="Talk to a Licensed Broker About Medigap Options" />

      {/* TPMO Disclosure */}
      <section className="max-w-6xl mx-auto px-4 py-10 border-t border-gray-100">
        <div className="bg-gray-50 border-l-4 border-gray-400 p-6 text-sm text-gray-700">
          <p className="mb-3">
            <strong>Disclosure.</strong> This page is published by MedicareYourself, a brand of
            EasyKind Medicare. We are a licensed independent Medicare insurance broker. We do not
            offer every plan available in your area. Any information we provide is limited to the
            plans we offer in your area. Please contact Medicare.gov or 1-800-MEDICARE (TTY
            1-877-486-2048), 24 hours a day, 7 days a week, to get information on all of your
            options. Plan availability, benefits, and premiums vary by state and are subject to
            federal and state regulations.
          </p>
          <p className="text-xs text-gray-500">
            Medicare has neither reviewed nor endorsed this information. Medicare figures cited on
            this page: Part B premium {MF.partBPremium}/month, Part B deductible{" "}
            {MF.partBDeductible}, Part A deductible {MF.partADeductible} ({MF.year}).
          </p>
        </div>
      </section>
    </>
  );
}
