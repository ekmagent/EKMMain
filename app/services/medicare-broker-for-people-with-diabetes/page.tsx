import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare broker for people with diabetes | Free Plan Comparison | MedicareYourself",
  description:
    "Medicare broker for people with diabetes — Anthony Orner compares plans covering insulin, CGMs & endocrinologists. Free, no-obligation help. Call 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-people-with-diabetes" },
  openGraph: {
    title:
      "medicare broker for people with diabetes | Free Plan Comparison | MedicareYourself",
    description:
      "Medicare broker for people with diabetes — Anthony Orner finds NJ plans covering insulin, CGMs, and endocrinology visits. Free comparison, no obligation.",
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
      name: "Medicare Broker for People with Diabetes",
      item: "https://medicareyourself.com/services/medicare-broker-for-people-with-diabetes",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for People with Diabetes: Plans That Cover What You Actually Need",
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
    question: "What's the best Medicare plan for someone with diabetes?",
    answer:
      "It depends on your medications and doctors. If you use insulin or a CGM, a Medicare Advantage plan with strong Part D formulary coverage or Original Medicare paired with a Medigap plan and standalone Part D can both work well. A broker can compare your specific drug list against available plans to find the lowest total cost.",
  },
  {
    question:
      "Does Medicare cover continuous glucose monitors like the FreeStyle Libre?",
    answer:
      "Yes. Medicare Part B covers therapeutic CGMs for beneficiaries who use insulin and meet certain criteria, including a prescription from your treating physician. You'll typically pay 20% of the Medicare-approved amount after the $283 Part B deductible (2026). A Medigap plan can cover that 20%.",
  },
  {
    question: "Can I switch Medicare plans if my diabetes costs are too high?",
    answer:
      "You can change Medicare Advantage or Part D plans during the Annual Enrollment Period (October 15 through December 7). If you have a guaranteed issue right, you may also be able to switch Medigap plans without medical underwriting. Call us to check your options.",
  },
  {
    question: "Does a Medicare broker charge people with diabetes extra?",
    answer:
      "No. Licensed Medicare brokers are paid by the insurance carriers, not by you. Our service is free whether you have diabetes, other conditions, or none at all.",
  },
];

export default function MedicareBrokerForPeopleWithDiabetes() {
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
        <span className="text-gray-700">
          Medicare Broker for People with Diabetes
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Medicare Broker for People with Diabetes: Plans That Cover What You
        Actually Need
      </h1>

      <Image
        src="/images/medicare-broker-for-people-with-diabetes.webp"
        alt="Medicare broker for people with diabetes"
        width={800}
        height={400}
        className="w-full h-auto rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        A Medicare broker for people with diabetes does one thing most online
        tools can't: match your exact medications, supplies, and specialists to
        the plan that actually costs the least. I'm Anthony Orner, a licensed
        broker in New Jersey, and I do this for free.
      </p>
      <p className="text-lg mb-6">
        Between insulin, test strips, CGM sensors, endocrinologist visits, and
        lab work, your costs add up fast. The wrong plan makes it worse. The
        right one can save you hundreds every year.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How diabetes affects your Medigap and Advantage options
        </h2>
        <p className="mb-2">
          Diabetes is a pre-existing condition, and that matters for Medigap
          pricing. Outside your Medigap Open Enrollment Period (the 6 months
          starting the month you turn 65 and have Part B), carriers in most
          states can medically underwrite you. That means higher premiums or
          denial.
        </p>
        <p>
          Medicare Advantage plans can't deny you for diabetes during open
          enrollment. But formulary differences mean your insulin copay can swing
          by $50+ per month between plans in the same zip code.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Insulin, CGMs, and Part D: what to look for in a plan
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Insulin:</strong> Check which tier your specific insulin
            falls on. Some Part D plans cap insulin copays at $35/month under the
            Inflation Reduction Act provisions. Not all plans handle this the
            same way.
          </li>
          <li>
            <strong>CGMs:</strong> Medicare Part B covers therapeutic continuous
            glucose monitors (like FreeStyle Libre) for insulin users. You pay
            20% after your $283 deductible (2026). A Medigap plan picks up that
            20%.
          </li>
          <li>
            <strong>Test strips and lancets:</strong> Covered under Part B
            through Medicare-contracted suppliers. Your pharmacy may not bill
            Part B directly, so check before filling.
          </li>
          <li>
            <strong>Endocrinology visits:</strong> Covered under Part B at 80%.
            Advantage plans may require referrals or network restrictions.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why guaranteed issue timing matters with pre-existing conditions
        </h2>
        <p className="mb-2">
          During your Medigap Open Enrollment Period, no carrier can charge you
          more or turn you down because of diabetes. Miss that window, and
          underwriting kicks in.
        </p>
        <p>
          Federal guaranteed issue rights also apply in specific situations:
          losing employer coverage, moving out of a plan's service area, or a
          carrier leaving Medicare. If any of these apply to you, call me before
          you assume you're stuck.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Let a broker match your medications to the lowest-cost plan
        </h2>
        <p className="mb-2">
          I pull your full medication list, check every available plan's
          formulary, and calculate your real annual cost. Not the advertised
          premium. The actual total: premiums, copays, deductibles, and supply
          costs combined.
        </p>
        <p>
          That's the number that matters when you're filling prescriptions every
          30 days.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          The daily cost burden most insurance content ignores
        </h2>
        <p className="mb-2">
          Managing diabetes is expensive and exhausting. Between endo visits,
          blood labs, medication changes, and supply reorders, you're already
          doing a lot. Figuring out which Medicare plan won't break the bank
          shouldn't be another full-time job.
        </p>
        <p>
          That's exactly why a broker exists. I handle the comparison. You make
          the final call.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What this costs you: nothing
        </h2>
        <p>
          Insurance carriers pay my commission. You pay the same premium whether
          you use a broker or enroll yourself. The only difference is you get
          someone who's already done the homework on which plans actually cover
          your insulin, your CGM, and your doctors.
        </p>
      </section>

      <section className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-10 text-center">
        <p className="text-xl font-semibold mb-2">
          Ready for a plan that covers your diabetes supplies and medications?
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a
            href="tel:8555591700"
            className="text-blue-700 font-bold hover:underline"
          >
            855-559-1700
          </a>{" "}
          or{" "}
          <Link
            href="/contact"
            className="text-blue-700 font-bold hover:underline"
          >
            get a free quote online
          </Link>
          . No pressure, no obligation.
        </p>
      </section>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/learn/medicare-parts-explained"
              className="text-blue-700 hover:underline"
            >
              Medicare Part D Drug Coverage Guide
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/turning-65"
              className="text-blue-700 hover:underline"
            >
              Medigap Open Enrollment: What You Need to Know
            </Link>
          </li>
          <li>
            <Link
              href="/services/free-medicare-broker-new-jersey"
              className="text-blue-700 hover:underline"
            >
              Medicare Broker in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-700 hover:underline"
            >
              Medicare Advantage vs. Medigap: Which Is Right for You?
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
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/coverage/continuous-glucose-monitors" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Continuous Glucose Monitor coverage</a> and <a href="https://www.medicare.gov/coverage/diabetes-supplies-services" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Diabetes supplies &amp; services</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free one-on-one Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey help: <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a></div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: free, unbiased Medicare counseling is available through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey help: <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> — free Medicare counseling for residents.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-700 hover:underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
      </section>
    </>
  );
}