import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for cataracts patients | Free Plan Comparison | MedicareYourself",
  description:
    "Medicare broker for cataracts patients — Anthony Orner helps you find plans covering surgery, IOLs, and follow-up care in NJ. Free comparison, no obligation.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-cataracts-patients" },
  openGraph: {
    title:
      "Medicare broker for cataracts patients | Free Plan Comparison | MedicareYourself",
    description:
      "Medicare broker for cataracts patients — Anthony Orner helps you find plans covering surgery, IOLs, and follow-up care in NJ. Free comparison, no obligation.",
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
      name: "Medicare Broker for Cataracts Patients",
      item: "https://medicareyourself.com/services/medicare-broker-for-cataracts-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Cataracts Patients — Find Plans That Cover Surgery and Follow-Up Care",
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
    question: "How bad do cataracts have to be for Medicare to pay?",
    answer:
      "Medicare doesn't use a specific vision threshold. Your ophthalmologist needs to document that cataracts are causing functional impairment that affects your daily life. If your doctor determines surgery is medically necessary, Part B will generally cover it.",
  },
  {
    question: "How do I get Medicare to cover cataract surgery?",
    answer:
      "Start with a referral from your eye doctor confirming medical necessity. Use a Medicare-participating surgeon and an approved facility. Part B covers the surgery and a standard intraocular lens (IOL). If you want a premium lens, you'll pay the upgrade cost out of pocket unless your plan helps offset it.",
  },
  {
    question: "What does Medicare pay for cataract surgery in 2026?",
    answer:
      "After you meet the $283 Part B deductible for 2026, Medicare pays 80% of the approved amount for cataract surgery. You're responsible for the remaining 20% coinsurance unless you have a Medigap supplement or Medicare Advantage plan that covers it.",
  },
  {
    question: "Is Medicare going to stop paying for cataract surgery?",
    answer:
      "No. Cataract surgery remains a covered Part B benefit. It's one of the most common Medicare-covered procedures in the country. There are no pending changes to eliminate this coverage.",
  },
];

export default function MedicareBrokerForCataractsPatients() {
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
          Medicare Broker for Cataracts Patients
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4 leading-tight">
        Medicare Broker for Cataracts Patients — Find Plans That Cover Surgery
        and Follow-Up Care
      </h1>

      <Image
        src="/images/medicare-broker-for-cataracts-patients.webp"
        alt="Medicare broker for cataracts patients"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        A Medicare broker for cataracts patients can save you real money by
        matching you to plans that minimize your out-of-pocket costs for surgery,
        lenses, and post-op visits. I'm Anthony Orner, a licensed broker in NJ,
        and I do this comparison for free.
      </p>
      <p className="mb-6">
        Cataracts affect more than half of Americans over 80. The surgery is safe
        and routine, but the bills can still surprise you if your coverage has
        gaps.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What Medicare Parts A and B cover for cataract surgery
        </h2>
        <p className="mb-2">
          Medicare Part B covers cataract surgery when your doctor determines
          it's medically necessary. This includes the procedure itself, a
          standard monofocal intraocular lens (IOL), and one pair of
          prescription eyeglasses or contact lenses after surgery.
        </p>
        <p>
          In 2026, you'll pay the $283 Part B deductible, then 20% coinsurance
          on the Medicare-approved amount. That 20% is where many people get
          caught off guard.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How supplement and Advantage plans handle post-op costs
        </h2>
        <p className="mb-2">
          A Medigap supplement (like Plan G) picks up most or all of that 20%
          coinsurance. You pay your monthly premium and the Part B deductible,
          and the rest is covered.
        </p>
        <p>
          Medicare Advantage plans work differently. Many have $0 or low copays
          for outpatient surgery, but you need to use in-network providers. Some
          Advantage plans also include routine vision benefits that Original
          Medicare doesn't offer.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          IOL upgrades, premium lenses, and out-of-pocket gaps
        </h2>
        <p className="mb-2">
          Medicare covers a standard monofocal IOL. If you want a multifocal,
          toric, or accommodating lens, you'll pay the difference between the
          standard lens cost and the premium lens cost. That upgrade can run
          $1,500 to $4,000 per eye.
        </p>
        <p>
          No Medigap or Advantage plan covers this upgrade cost. But knowing
          that upfront helps you budget properly rather than finding out in the
          surgeon's office.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Follow-up visits and corrective lenses after surgery
        </h2>
        <p className="mb-2">
          Part B covers post-operative visits with your surgeon. You're also
          entitled to one pair of corrective lenses (glasses or contacts) after
          each cataract surgery. This is one of the only times Medicare pays for
          eyeglasses.
        </p>
        <p>
          Your share depends on the provider's charges and whether they accept
          Medicare assignment. I help clients find surgeons who do.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why cataracts patients benefit from a broker
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            I compare Medigap and Advantage plans side by side so you see the
            real cost for your specific surgery timeline.
          </li>
          <li>
            I know which NJ plans offer stronger vision benefits for ongoing eye
            care after cataracts.
          </li>
          <li>
            My service is free. Carriers pay my commission, not you. There's no
            markup on any plan.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Get a plan comparison specific to your cataract treatment
        </h2>
        <p>
          If you're planning cataract surgery or just learned you need it, call
          me before you enroll in or change any plan. A 10-minute conversation
          can save you hundreds on a procedure you're already going to have.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center mb-10">
        <p className="text-xl font-bold mb-2">
          Talk to Anthony — no cost, no obligation
        </p>
        <p className="text-2xl font-bold mb-3">
          <a href="tel:8555591700" className="underline">
            855-559-1700
          </a>
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-2 rounded hover:bg-gray-100"
        >
          Get a Free Quote
        </Link>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/learn/medicare-parts-explained"
              className="text-blue-600 hover:underline"
            >
              What Medicare Part B Covers in 2026
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey"
              className="text-blue-600 hover:underline"
            >
              Medigap Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage vs. Medigap: Which Is Better?
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-broker-for-cataracts-patients"
              className="text-blue-600 hover:underline"
            >
              Medicare Broker for Vision Care
            </Link>
          </li>
                    <li>
              <Link
                href="/services/best-medicare-plan-for-chronic-conditions"
                className="text-blue-600 hover:underline"
              >
                Best Medicare Plan For Chronic Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-people-with-pre-existing-conditions"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For People With Pre Existing Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/services/you-get-a-medicare-supplement-plan-if-you-have-a-pre-existing-condition"
                className="text-blue-600 hover:underline"
              >
                You Get A Medicare Supplement Plan If You Have A Pre Existing Condition
              </Link>
            </li>
            <li>
              <Link
                href="/services/help-with-your-medicare-decision"
                className="text-blue-600 hover:underline"
              >
                Help With Your Medicare Decision
              </Link>
            </li>
</ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/coverage/cataract-surgery" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Cataract Surgery Coverage</a> and <a href="https://www.medicare.gov/coverage/eyeglasses-contact-lenses" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Eyeglasses &amp; Contact Lenses After Cataract Surgery</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: <a href="https://www.state.nj.us/dobi/division_insurance/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> offers free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
      </section>
    </main>
  );
}