import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for arthritis sufferers | Free Plan Comparison | MedicareYourself",
  description:
    "Medicare broker for arthritis sufferers — compare plans covering biologics, rheumatologists, and joint care. Free help from Anthony Orner. Call 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-arthritis-sufferers" },
  openGraph: {
    title:
      "Medicare broker for arthritis sufferers | Free Plan Comparison | MedicareYourself",
    description:
      "Medicare broker for arthritis sufferers who need biologics, specialist visits, and joint care covered right. Anthony Orner compares plans for free.",
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
      name: "Medicare Broker for Arthritis Sufferers",
      item: "https://medicareyourself.com/services/medicare-broker-for-arthritis-sufferers",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Arthritis Sufferers — Coverage That Doesn't Make You Negotiate Twice",
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
    question: "Does Medicare cover biologics like Humira or Remicade for arthritis?",
    answer:
      "Yes, but how they're covered depends on the drug and how it's administered. Infused biologics like Remicade are typically covered under Part B at a doctor's office. Self-injected biologics like Humira fall under Part D. Out-of-pocket costs vary dramatically by plan, so comparing formularies before enrollment is critical.",
  },
  {
    question: "Is a Medigap plan or Medicare Advantage better for arthritis?",
    answer:
      "It depends on your treatment. If you see multiple specialists and take expensive medications, Original Medicare with a Medigap plan often gives you more predictable costs and broader provider access. Medicare Advantage plans may offer lower premiums but can require prior authorizations and have narrower networks. A broker can compare both options based on your specific medications and doctors.",
  },
  {
    question: "How do I find out if my arthritis medication is on a plan's formulary?",
    answer:
      "Every Part D and Medicare Advantage plan publishes a formulary listing covered drugs and their tier placement. Your broker can cross-reference your medications across every available plan in your area to find the lowest total cost. This is one of the most valuable things a broker does for arthritis patients.",
  },
  {
    question: "Does it cost anything to work with a Medicare broker for arthritis coverage?",
    answer:
      "No. Licensed Medicare brokers are paid by the insurance carriers, not by you. There's no fee for plan comparisons, enrollment help, or ongoing support. You get the same plan at the same price whether you enroll directly or through a broker.",
  },
];

export default function MedicareBrokerForArthritisSufferers() {
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
          Medicare Broker for Arthritis Sufferers
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Medicare Broker for Arthritis Sufferers — Coverage That Doesn't Make You Negotiate Twice
      </h1>

      <Image
        src="/images/medicare-broker-for-arthritis-sufferers.webp"
        alt="Medicare broker for arthritis sufferers"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        A Medicare broker for arthritis sufferers does one thing most online tools can't: match your exact medications, specialists, and joint care needs to the plan that actually covers them. Some mornings your joints decide the agenda before your brain does. Buttons, stairs, jar lids. You're already negotiating with your body. Your insurance shouldn't be another fight.
      </p>

      <p className="text-lg text-gray-700 mb-6">
        I'm Anthony Orner, a licensed Medicare broker. I compare every plan available in your area against your prescriptions and providers, at no cost to you.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How Medicare covers biologics, DMARDs, and joint replacements
        </h2>
        <p className="text-gray-700 mb-2">
          Medicare splits arthritis drug coverage in a way that catches people off guard. Infused biologics like Remicade go through Part B at your doctor's office. Self-injected biologics like Humira or Enbrel go through Part D.
        </p>
        <p className="text-gray-700">
          DMARDs like methotrexate are Part D. Joint replacements are covered under Part A as inpatient procedures. Each "part" has different cost-sharing, and the wrong plan choice can mean hundreds or thousands in unexpected bills.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why drug formularies matter more than you think with arthritis
        </h2>
        <p className="text-gray-700 mb-2">
          Every Part D plan has its own formulary. One plan might put your biologic on Tier 3. Another puts it on Tier 5 with a $1,800 monthly copay. People who've been on commercial insurance or Medicaid are blindsided by this when they switch to Medicare.
        </p>
        <p className="text-gray-700">
          The drug that finally works for your RA or PsA might technically be "covered" but priced so high it's functionally not. I check every formulary in your ZIP code so you don't find out the hard way.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Supplement vs. Advantage plans for chronic joint conditions
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <strong>Original Medicare + Medigap + Part D:</strong> See any Medicare-accepting doctor. No referrals needed for rheumatologists. Predictable costs. You'll pay a separate Part D premium, so formulary research is essential.
          </li>
          <li>
            <strong>Medicare Advantage (Part C):</strong> Often lower monthly premiums. May require prior authorizations for biologics and specialist visits. Network restrictions can limit your choice of rheumatologist.
          </li>
        </ul>
        <p className="text-gray-700 mt-3">
          For someone managing active RA or PsA with biologics, provider flexibility and drug coverage usually outweigh a lower premium. But the right answer depends on your specific situation.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Prior authorizations and step therapy for arthritis drugs
        </h2>
        <p className="text-gray-700 mb-2">
          Many Medicare Advantage and Part D plans require step therapy. That means they'll want you to try cheaper drugs first before they approve the one your rheumatologist actually prescribed. If you've already failed methotrexate and two other DMARDs, you shouldn't have to prove it again to a new plan.
        </p>
        <p className="text-gray-700">
          I look at which plans have the fewest authorization hurdles for your current treatment. Less red tape, fewer gaps in care.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          The real cost numbers you need to know in 2026
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Part B premium (2026): $202.90/month</li>
          <li>Part B deductible: $283/year</li>
          <li>Part A deductible: $1,676 per benefit period</li>
          <li>Part D/Advantage Open Enrollment: October 15 through December 7</li>
          <li>Medigap Open Enrollment: 6 months starting when you're 65+ and enrolled in Part B</li>
        </ul>
        <p className="text-gray-700 mt-3">
          For arthritis patients considering Medigap, that 6-month open enrollment window matters. Carriers must accept you regardless of your RA or PsA diagnosis during that period. Miss it, and underwriting can price you out or deny you.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Get a free plan review built around what your body actually needs
        </h2>
        <p className="text-gray-700 mb-2">
          Bring me your medication list, your rheumatologist's name, and your ZIP code. I'll show you every plan option, what each one will cost you for the year, and which ones cover your drugs without forcing you through step therapy hoops.
        </p>
        <p className="text-gray-700">
          No charge. No obligation. I get paid by the carriers, not by you. Same plans, same prices, better guidance.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-8 text-center">
        <p className="text-xl font-semibold mb-3">
          Call 855-559-1700 for a free arthritis-focused plan comparison
        </p>
        <p className="mb-4">
          Or request a callback at a time that works for you.
        </p>
        <Link
          href="/quote"
          className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors"
        >
          Get a Free Quote
        </Link>
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
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medigap vs. Medicare Advantage: Which Is Right for You?
            </Link>
          </li>
          <li>
            <Link
              href="/learn/medicare-parts-explained"
              className="text-blue-600 hover:underline"
            >
              Medicare Part D Drug Coverage Explained
            </Link>
          </li>
          <li>
            <Link
              href="/services/best-medicare-plan-for-chronic-conditions"
              className="text-blue-600 hover:underline"
            >
              Medicare Broker for Chronic Conditions
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/turning-65"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment: What You Need to Know
            </Link>
          </li>
        </ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/coverage/prescription-drugs-outpatient" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Part B drug coverage</a> and <a href="https://www.medicare.gov/plan-compare/" rel="noopener noreferrer" target="_blank" className="underline">Medicare Plan Finder</a> to compare formularies for arthritis medications.</div>
            <div className="text-sm text-gray-600 mt-4">Need unbiased local help? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For free, unbiased counseling, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
      </section>
    </main>
  );
}