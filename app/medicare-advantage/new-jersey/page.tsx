import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Best Medicare Advantage Plans in NJ 2026",
  description:
    "Compare 2026 New Jersey Medicare Advantage plans with $0 premium options, dental, vision, and Part D drug coverage. Call 855-559-1700 for licensed NJ broker help.",
  alternates: { canonical: `${SITE_URL}/medicare-advantage/new-jersey` },
  openGraph: {
    title: "Best Medicare Advantage Plans in NJ 2026",
    description:
      "Compare Medicare Advantage plans in New Jersey. $0 premiums, drug coverage, dental and vision benefits. Call 855-559-1700.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://medicareyourself.com" },
    { "@type": "ListItem", position: 2, name: "Medicare Advantage", item: "https://medicareyourself.com/medicare-advantage" },
    { "@type": "ListItem", position: 3, name: "New Jersey", item: "https://medicareyourself.com/medicare-advantage/new-jersey" },
  ],
};

const faqs = [
  {
    question: "What are the best Medicare Advantage plans in New Jersey in 2026?",
    answer:
      "The leading Medicare Advantage carriers in New Jersey include UnitedHealthcare (AARP), Horizon Blue Cross Blue Shield of NJ, Aetna, and Humana. The best plan depends on your county, preferred doctors, and prescription drugs. Many NJ counties have $0 premium HMO options with drug coverage included.",
  },
  {
    question: "Are there $0 premium Medicare Advantage plans in New Jersey?",
    answer:
      "Yes. Many New Jersey counties have Medicare Advantage plans with $0 monthly premiums. You still pay your Part B premium ($202.90/month in 2026), but the Advantage plan itself costs nothing extra. These $0 plans typically have HMO networks and copays for services, so doctor network compatibility is important to check.",
  },
  {
    question: "Does Medicare Advantage cover dental and vision in New Jersey?",
    answer:
      "Most Medicare Advantage plans in New Jersey include some dental, vision, and hearing benefits — coverage that Original Medicare does not provide. Dental coverage typically includes preventive care (cleanings, X-rays) and may include basic restorative work. Vision coverage often includes an annual eye exam and allowance for glasses or contacts.",
  },
  {
    question: "What is the difference between HMO and PPO Medicare Advantage plans in NJ?",
    answer:
      "HMO plans require you to use in-network doctors and get referrals to see specialists. They tend to have lower premiums and copays. PPO plans let you see out-of-network providers at a higher cost and typically don't require referrals. In New Jersey, where many beneficiaries want access to major academic medical centers like RWJBarnabas or Hackensack Meridian, checking network inclusion is critical.",
  },
  {
    question: "Can I switch from Medicare Advantage back to Original Medicare in New Jersey?",
    answer:
      "Yes. You can switch back to Original Medicare during the Annual Enrollment Period (October 15 – December 7) or the Medicare Advantage Open Enrollment Period (January 1 – March 31). However, if you want to add a Medigap plan after switching back and your 6-month Medigap Open Enrollment Period has passed, insurers may use medical underwriting and could deny coverage based on health conditions. This is why the initial choice between Medicare Advantage and Medigap at 65 is so important.",
  },
,
  {
    question: "When can I enroll in a Medicare Advantage plan in New Jersey?",
    answer:
      "You can first enroll during your Initial Enrollment Period, which is the 7-month window around your 65th birthday. After that, the Annual Enrollment Period runs October 15 through December 7 each year for coverage starting January 1. The Medicare Advantage Open Enrollment Period (January 1 – March 31) also lets current Advantage members switch plans or return to Original Medicare.",
  },
  {
    question: "Do Medicare Advantage plans in NJ include prescription drug coverage?",
    answer:
      "Most Medicare Advantage plans in New Jersey are MA-PD plans that bundle Part D prescription drug coverage into the same plan. A small number of MA-only plans exclude drug coverage, typically for veterans with VA benefits or those with other creditable coverage. Always confirm your specific medications are on the plan's formulary before enrolling.",
  },
  {
    question: "How do I compare Medicare Advantage plans by county in New Jersey?",
    answer:
      "Plan availability, premiums, and provider networks vary by county in New Jersey, so a plan offered in Bergen County may differ from one in Cape May. You can compare plans on Medicare.gov using your ZIP code, or call our office at 855-559-1700 for a free side-by-side review based on your doctors and prescriptions.",
  }
];

export default function NJMedicareAdvantagePage() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />

      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-4 pt-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">›</span>
        <span>Medicare Advantage</span>
        <span className="mx-2">›</span>
        <span className="text-gray-900 font-medium">New Jersey</span>
      </nav>

      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Best Medicare Advantage Plans in New Jersey (2026)
            </h1>
        <p className="text-sm text-gray-500 mt-2">By <strong>Anthony Orner</strong>, Licensed Medicare Insurance Broker — NJ &amp; 34 states</p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>The short answer:</strong> New Jersey has competitive Medicare Advantage options
              with several $0 premium plans available in most counties, including drug, dental, and vision
              benefits. The best plan depends on which doctors and hospitals you need in-network.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Medicare Advantage plans replace Original Medicare. You get all Part A and Part B
              benefits through the private insurer, often with extras like dental and vision — but
              you must use in-network providers. Use the <a href="https://www.medicare.gov/plan-compare" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Medicare Plan Finder</a> to compare plans by county. If you later want to switch back to Original Medicare
              with a Medigap plan, medical underwriting may apply if your initial Open Enrollment Period has passed.
            </p>
            <p className="text-xs text-gray-400 mb-6">
              Last reviewed: March 2026 · Plan availability varies by county
            </p>
            <PhoneCTA label="Compare NJ MA Plans Free" />
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 h-fit">
            <h2 className="text-lg font-bold text-gray-900 mb-2">Find Plans in Your County</h2>
            <p className="text-sm text-gray-600 mb-4">
              Medicare Advantage plan availability varies by NJ county. Call us for a free county-specific comparison.
            </p>
            <a
              href="tel:8555591700"
              className="block w-full text-center bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition-colors mb-3"
            >
              Call 855-559-1700
            </a>
            <Link
              href="/quote"
              className="block w-full text-center border border-blue-700 text-blue-700 hover:bg-blue-50 font-semibold py-3 rounded-lg transition-colors text-sm"
            >
              Online Quote Tool
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4">
        <FAQSection faqs={faqs} title="Medicare Advantage Questions — New Jersey" />
      </section>

      {/* Related service pages */}
      <section className="max-w-6xl mx-auto px-4 mt-10">
        <div className="border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-500 mb-3">Learn more about your options:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/help-with-your-medicare-decision" className="text-blue-600 hover:underline text-sm">Help With Your Medicare Decision</Link>
            <Link href="/services/best-medicare-plan-for-chronic-conditions" className="text-blue-600 hover:underline text-sm">Best Medicare Plan for Chronic Conditions</Link>
            <Link href="/services/quickest-way-to-enroll-into-medicare-advantage-plan" className="text-blue-600 hover:underline text-sm">Quickest Way to Enroll in Medicare Advantage</Link>
            <Link href="/services/medicare-supplement-for-seniors-turning-65" className="text-blue-600 hover:underline text-sm">Medicare Supplement for Seniors Turning 65</Link>
            <Link href="/services/how-to-enroll-in-medicare-in-new-jersey" className="text-blue-600 hover:underline text-sm">How to Enroll in Medicare in NJ</Link>
          </div>
        </div>
      </section>

      <section className="bg-blue-800 text-white py-14 px-4 mt-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">Compare NJ Medicare Advantage plans now</h2>
          <p className="text-blue-100 mb-6">
            We check every plan available in your New Jersey county — free, no obligation.
          </p>
          <PhoneCTA size="lg" label="Get Your NJ MA Comparison" />
        </div>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/plan-compare" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Medicare.gov Plan Compare</a> and <a href="https://www.medicare.gov/basics/get-started-with-medicare/medicare-basics/parts-of-medicare" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Parts of Medicare</a>.</div>
            <div className="text-sm text-gray-600 mt-2">New Jersey help: <a href="https://www.nj.gov/humanservices/doas/services/ship/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">NJ State Health Insurance Assistance Program (SHIP)</a> offers free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey help: <a href="https://www.nj.gov/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">NJ State Health Insurance Assistance Program (SHIP)</a> offers free, unbiased Medicare counseling to New Jersey residents.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey help: <a href="https://www.nj.gov/humanservices/doas/services/ship/" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">NJ State Health Insurance Assistance Program (SHIP)</a> offers free, unbiased Medicare counseling to New Jersey residents.</div>
            <div className="text-sm text-gray-600 mt-4">For free unbiased counseling, contact <a href="https://www.nj.gov/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">New Jersey SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey beneficiaries can also get free, unbiased counseling from <a href="https://www.nj.gov/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-700 underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey help: <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-700 underline">NJ State Health Insurance Assistance Program (SHIP)</a> offers free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey help: <a href="https://www.nj.gov/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-700 underline">NJ State Health Insurance Assistance Program (SHIP)</a> offers free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey help: <a href="https://www.nj.gov/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-700 underline">NJ State Health Insurance Assistance Program (SHIP)</a> offers free, unbiased Medicare counseling for New Jersey beneficiaries.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey help: <a href="https://www.nj.gov/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> offers free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey help: <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-700 underline">NJ State Health Insurance Assistance Program (SHIP)</a> offers free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey help: <a href="https://www.nj.gov/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> offers free, unbiased Medicare counseling for New Jersey residents.</div>
            <div className="text-sm text-gray-600 mt-4">Free unbiased counseling: <a href="https://www.nj.gov/humanservices/doas/services/ship/" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">New Jersey State Health Insurance Assistance Program (SHIP)</a></div>
            <div className="text-sm text-gray-600 mt-4">New Jersey help: <a href="https://www.nj.gov/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a></div>
      </section>
    </>
  );
}
