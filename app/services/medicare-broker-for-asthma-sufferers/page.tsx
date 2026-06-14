import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for asthma sufferers | Free Inhaler Coverage Check | MedicareYourself",
  description:
    "Medicare broker for asthma sufferers: Anthony Orner compares Part D formularies so inhalers and nebulizer meds cost less. Call 855-559-1700 for a free review.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-asthma-sufferers" },
  openGraph: {
    title:
      "Medicare broker for asthma sufferers | Free Inhaler Coverage Check | MedicareYourself",
    description:
      "Medicare broker for asthma sufferers tired of overpaying for inhalers and rescue meds. Anthony Orner finds plans that cover what you breathe. Free review.",
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
      name: "Medicare Broker for Asthma Sufferers",
      item: "https://medicareyourself.com/services/medicare-broker-for-asthma-sufferers",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Asthma Sufferers — Because Breathing Shouldn't Be a Luxury",
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
  mainEntityOfPage:
    "https://medicareyourself.com/services/medicare-broker-for-asthma-sufferers",
};

const faqs = [
  {
    question: "Does it cost to use a Medicare broker?",
    answer:
      "No. Licensed Medicare brokers like Anthony Orner are paid by insurance carriers, not by you. There's no fee for plan comparisons, enrollment help, or ongoing support. The plans cost the same whether you enroll directly or through a broker.",
  },
  {
    question: "Can I get Medicare if I have asthma?",
    answer:
      "Yes. Medicare eligibility is based on age (65+) or qualifying disability, not your health conditions. Asthma does not disqualify you. In fact, choosing the right plan matters more when you have a chronic condition because drug formularies and provider networks vary widely.",
  },
  {
    question:
      "Will Medicare Part D cover my rescue inhaler and maintenance medications?",
    answer:
      "Most Part D plans cover common inhalers, but the tier placement and copay amounts differ significantly between plans. A rescue inhaler like albuterol might be $10 on one plan and $45 on another. I compare formularies side by side so you get the lowest total cost for your specific prescriptions.",
  },
  {
    question:
      "What's the difference between Medicare Advantage and Medigap for asthma care?",
    answer:
      "Medicare Advantage bundles hospital, doctor, and often drug coverage into one plan, usually with copays per visit. Medigap (Medicare Supplement) covers cost-sharing from Original Medicare, giving you broader provider access but requiring a separate Part D plan. The best fit depends on how often you see specialists and use the ER.",
  },
,
  {
    question: "Are nebulizers and nebulizer medications covered by Medicare?",
    answer:
      "Yes. Nebulizers are typically covered under Medicare Part B as durable medical equipment when prescribed by your doctor for use at home. The medications used with the nebulizer, such as albuterol solution, are also generally covered under Part B rather than Part D when administered through the device. You'll usually pay the Part B coinsurance after meeting your deductible.",
  }
,
  {
    question: "When can I switch Medicare plans if my current one stops covering my inhaler?",
    answer:
      "If your Part D or Medicare Advantage plan drops your medication mid-year, you may qualify for a Special Enrollment Period. Otherwise, you can change plans during the Annual Enrollment Period from October 15 to December 7, or the Medicare Advantage Open Enrollment Period from January 1 to March 31. I can help you review formulary changes each fall before they take effect.",
  }
];

export default function MedicareBrokerForAsthmaSufferers() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">Medicare Broker for Asthma Sufferers</span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Medicare Broker for Asthma Sufferers — Because Breathing Shouldn&apos;t Be a Luxury
        </h1>

        <Image
          src="/images/medicare-broker-for-asthma-sufferers.webp"
          alt="Medicare broker for asthma sufferers"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          A Medicare broker for asthma sufferers does one thing most plan-finder tools can&apos;t: compare formularies drug by drug so your inhalers don&apos;t drain your bank account. I&apos;m Anthony Orner, a licensed Medicare broker, and I help people with asthma find Part D and Advantage plans that actually cover what they use.
        </p>
        <p className="text-lg mb-6">
          You already know the feeling. The inhaler running low, the refill price higher than last time, the insurance company requesting a &ldquo;prior authorization&rdquo; for medication your doctor prescribed months ago. That&apos;s what I fix.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why some Part D plans make inhalers affordable and others don&apos;t
          </h2>
          <p className="mb-2">
            Every Part D plan has a formulary, and every formulary groups drugs into tiers. Your albuterol rescue inhaler might sit on Tier 1 (low copay) with one carrier and Tier 3 (high copay) with another. Same drug, different price.
          </p>
          <p>
            Plans also negotiate different prices with pharmacies. A $10 difference per refill adds up to $120 a year on just one medication. Multiply that across a maintenance inhaler and a rescue inhaler and the gap widens fast.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Rescue vs. maintenance medications: how formulary tiers affect your costs
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Rescue inhalers</strong> (albuterol, levalbuterol): Usually Tier 1 or 2, but some plans require specific brands. Generic albuterol is widely covered; name-brand alternatives often cost 3-5x more.
            </li>
            <li>
              <strong>Maintenance inhalers</strong> (fluticasone/salmeterol, budesonide/formoterol): Often Tier 3 or higher. Some plans require step therapy, meaning your insurer makes you try a cheaper drug first before covering what your doctor actually prescribed.
            </li>
            <li>
              <strong>Biologics</strong> (for severe asthma): Specialty tier. Copays can reach hundreds per month without the right plan.
            </li>
          </ul>
          <p className="mt-2">
            Step therapy is the reason some people get denial letters after their pulmonologist already prescribed something specific. I check for these restrictions before you enroll.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Supplement vs. Advantage plans for pulmonologist and ER coverage
          </h2>
          <p className="mb-2">
            If you see a pulmonologist regularly and occasionally need the ER for severe attacks, the plan structure matters. Medicare Advantage plans usually charge copays per specialist visit ($20-$50) and ER visits ($90-$250). Medigap plans cover the cost-sharing from Original Medicare, so your out-of-pocket is more predictable.
          </p>
          <p>
            Advantage plans often include Part D coverage built in. Medigap requires a separate Part D plan, but gives you wider provider access. There&apos;s no single right answer. It depends on your medications, your doctors, and how often your asthma lands you in urgent care.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            The 2025 Medicare Prescription Payment Plan can help
          </h2>
          <p className="mb-2">
            Starting in 2025, Medicare introduced the Prescription Payment Plan under Part D. It lets you spread your out-of-pocket drug costs into predictable monthly payments instead of paying large amounts at the pharmacy counter. This is especially helpful if you use expensive maintenance inhalers.
          </p>
          <p>
            You can opt in through your Part D or Advantage plan. I&apos;ll tell you if it makes sense for your medication list.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What I check when reviewing plans for asthma patients
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Formulary tier for every inhaler and oral medication you take</li>
            <li>Prior authorization and step therapy requirements</li>
            <li>Preferred pharmacy pricing (retail vs. mail-order)</li>
            <li>Pulmonologist and allergist network inclusion</li>
            <li>Annual out-of-pocket maximums for both drugs and medical</li>
            <li>ER and urgent care copay structure</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Get a free plan check so your next refill isn&apos;t a financial panic
          </h2>
          <p className="mb-2">
            Call me with your medication list. I&apos;ll run the numbers across available plans in your area and show you exactly what each one costs for your drugs, your doctors, and your situation. No fee. No obligation. No pressure.
          </p>
          <p>
            Open Enrollment for Medicare Advantage and Part D runs October 15 through December 7. But you can call anytime to start planning.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center mb-10">
          <p className="text-xl font-semibold mb-2">
            Ready for a plan that covers what you breathe?
          </p>
          <p className="text-lg mb-4">
            Call{" "}
            <a
              href="tel:855-559-1700"
              className="underline font-bold text-white"
            >
              855-559-1700
            </a>{" "}
            or{" "}
            <Link
              href="/quote"
              className="underline font-bold text-white"
            >
              Get a Free Quote
            </Link>
          </p>
          <p className="text-sm opacity-90">
            Anthony Orner, Licensed Medicare Broker
          </p>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/services/medicare-broker-for-copd-patients"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker for COPD Patients
              </Link>
            </li>
            <li>
              <Link
                href="/learn/medicare-parts-explained"
                className="text-blue-600 hover:underline"
              >
                Medicare Part D Explained
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-supplement/new-jersey/vs-medicare-advantage"
                className="text-blue-600 hover:underline"
              >
                Medigap vs. Medicare Advantage
              </Link>
            </li>
            <li>
              <Link
                href="/learn/medicare-parts-explained"
                className="text-blue-600 hover:underline"
              >
                How to Lower Medicare Prescription Drug Costs
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
            <li>
              <Link
                href="/services/medicare-broker-for-arthritis-sufferers"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For Arthritis Sufferers
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-back-pain-sufferers"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For Back Pain Sufferers
              </Link>
            </li>
</ul>
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/drug-coverage-part-d" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Drug Coverage (Part D)</a> and <a href="https://www.medicare.gov/plan-compare/" rel="noopener noreferrer" target="_blank" className="underline">Medicare Plan Finder</a> to compare formularies for your inhalers.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-level help? Contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">New Jersey Department of Banking and Insurance</a> or your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">SHIP counselor</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For free local counseling, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a> or the <a href="https://www.nj.gov/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
      </section>
      </article>
    </>
  );
}