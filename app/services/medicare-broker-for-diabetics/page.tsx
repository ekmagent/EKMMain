import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare broker for diabetics | Free Help Finding the Right Plan | MedicareYourself",
  description:
    "Medicare broker for diabetics: compare plans covering insulin, CGMs, and your endocrinologist. Free expert help from Anthony Orner. Call 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-diabetics" },
  openGraph: {
    title:
      "medicare broker for diabetics | Free Help Finding the Right Plan | MedicareYourself",
    description:
      "Medicare broker for diabetics who understands insulin costs, CGM coverage, and specialist access. Anthony Orner finds plans built for your daily reality. Free help.",
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
      name: "Medicare Broker for Diabetics",
      item: "https://medicareyourself.com/services/medicare-broker-for-diabetics",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Diabetics: Finding a Plan That Covers What Your Life Actually Looks Like",
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
      "It depends on your medications, devices, and specialists. Someone on insulin with a CGM has very different needs than someone managing with metformin alone. A broker who understands diabetes can compare formularies, device coverage, and specialist networks across dozens of plans to find the best fit for your specific situation.",
  },
  {
    question: "Do I pay a Medicare broker?",
    answer:
      "No. Licensed Medicare brokers are paid by the insurance carriers, not by you. The plans cost the same whether you enroll yourself or work with a broker. You get expert guidance at no extra charge.",
  },
  {
    question: "Does Medicare cover continuous glucose monitors (CGMs)?",
    answer:
      "Medicare Part B covers CGMs for beneficiaries who use insulin. If you're Type 2 and not on insulin, coverage is more limited and often denied. A broker can help identify Medicare Advantage plans with broader CGM coverage or guide you through the criteria Medicare requires.",
  },
  {
    question:
      "Can a Medicare broker help me find plans that cover my endocrinologist?",
    answer:
      "Yes. A broker can check whether your endocrinologist, podiatrist, and ophthalmologist are in-network before you enroll. This prevents surprises and referral requirements that delay the care you need.",
  },

  {
    question: "Does Medicare cover insulin costs in 2026?",
    answer:
      "Yes. Under the Inflation Reduction Act, insulin covered by Medicare Part D is capped at $35 per month per covered prescription, and insulin used with a pump covered under Part B is also capped at $35. A broker can confirm that the specific insulin you use is on a plan's formulary before you enroll.",
  },
  {
    question: "Will my diabetes medications be covered under every Medicare plan?",
    answer:
      "No. Each Medicare Part D and Medicare Advantage plan has its own formulary, and tier placement and prior authorization rules vary. A broker reviews your exact medication list against each plan's formulary so you don't end up paying more than necessary or facing coverage denials.",
  },
  {
    question: "Does Medicare cover diabetes self-management training and nutrition counseling?",
    answer:
      "Yes. Medicare Part B covers diabetes self-management training (DSMT) with a doctor's referral and medical nutrition therapy (MNT) for people with diabetes or kidney disease. Many Medicare Advantage plans also offer additional wellness benefits that support diabetes management.",
  }
,
  {
    question: "Does Medicare cover diabetes self-management training?",
    answer:
      "Yes. Medicare Part B covers diabetes self-management training (DSMT) when ordered by your doctor as part of your treatment plan. This training helps you learn how to manage diabetes through diet, exercise, medication, and blood sugar monitoring. A broker can help you identify plans with low or no out-of-pocket cost for these covered services.",
  },
  {
    question: "Are diabetic supplies like test strips and lancets covered by Medicare?",
    answer:
      "Yes. Medicare Part B covers blood glucose monitors, test strips, lancets, and control solutions as durable medical equipment when prescribed by your doctor. Coverage amounts and supplier requirements can vary by plan, so a broker can compare which Medicare Advantage plans offer enhanced supply benefits.",
  },
  {
    question: "Can I switch Medicare plans if my diabetes medications change?",
    answer:
      "You can typically change Medicare Advantage or Part D plans during the Annual Enrollment Period each fall or during the Medicare Advantage Open Enrollment Period in early spring. Certain life events also trigger Special Enrollment Periods. A broker can review your current medications and recommend a better-fit plan during these windows.",
  }
,
  {
    question: "Are diabetes supplies like test strips and lancets covered by Medicare?",
    answer:
      "Yes. Medicare Part B covers blood glucose test strips, lancets, lancet devices, and glucose monitors as durable medical equipment when prescribed by your doctor. Coverage amounts and supplier requirements can vary, so a broker can help confirm which suppliers in your area are Medicare-approved before you fill an order.",
  },
  {
    question: "Does Medicare cover diabetes self-management training?",
    answer:
      "Yes. Medicare Part B covers Diabetes Self-Management Training (DSMT) for beneficiaries with a diabetes diagnosis when ordered by the doctor managing your condition. This includes education on monitoring blood sugar, healthy eating, and reducing complications. A broker can help you verify which providers in a plan's network offer this benefit.",
  },
  {
    question: "Can switching Medicare plans during Annual Enrollment help lower my diabetes costs?",
    answer:
      "Often, yes. Formularies, preferred pharmacies, and specialist networks change every year, so the plan that was best last year may not be best this year. During the Annual Enrollment Period (October 15 – December 7), a broker can re-shop your medications and devices across available plans to see if a switch would lower your out-of-pocket costs.",
  }
,
  {
    question: "Does Medicare cover diabetes self-management training?",
    answer:
      "Yes. Medicare Part B covers diabetes self-management training (DSMT) for beneficiaries diagnosed with diabetes, when ordered by the doctor treating your condition. This program helps you learn how to manage your diabetes through nutrition, monitoring, and lifestyle changes. A broker can confirm how your plan handles cost sharing for DSMT visits.",
  },
  {
    question: "Are diabetes test strips and lancets covered by Medicare?",
    answer:
      "Yes. Medicare Part B covers blood glucose test strips, lancets, lancet devices, and glucose monitors as durable medical equipment when prescribed by your doctor. Quantities covered depend on whether you use insulin. A broker can help you compare Medicare Advantage plans that may offer additional supply benefits.",
  },
  {
    question: "Can I switch Medicare plans if my diabetes medications change?",
    answer:
      "You can change plans during the Annual Enrollment Period each fall, and in some cases during the Medicare Advantage Open Enrollment Period in early spring. If a plan drops your medication from its formulary mid-year, you may also qualify for a transition fill or formulary exception. A broker can help you time changes around your treatment plan.",
  }
,
  {
    question: "Are diabetes self-management training and nutrition counseling covered by Medicare?",
    answer:
      "Yes. Medicare Part B covers Diabetes Self-Management Training (DSMT) when ordered by your doctor, and Medical Nutrition Therapy (MNT) is covered for people with diabetes or kidney disease when provided by a registered dietitian. A broker can confirm which providers in your area accept Medicare assignment for these services.",
  },
  {
    question: "Does Medicare cover diabetic shoes and supplies?",
    answer:
      "Medicare Part B covers therapeutic shoes or inserts for people with diabetes who meet specific medical criteria, along with blood sugar testing supplies like monitors, test strips, and lancets. Coverage rules and supplier requirements vary, so a broker can help you understand what your specific plan requires for these supplies.",
  },
  {
    question: "When can I switch Medicare plans if my diabetes care needs change?",
    answer:
      "Most people can change Medicare Advantage or Part D plans during the Annual Enrollment Period each fall, with coverage starting January 1. There is also a Medicare Advantage Open Enrollment Period in the first quarter of the year. If you qualify for a Special Enrollment Period — for example, due to moving or losing other coverage — you may be able to switch outside those windows.",
  }
,
  {
    question: "Does Medicare cover the Medicare Diabetes Prevention Program?",
    answer:
      "Yes. Medicare Part B covers the Medicare Diabetes Prevention Program for eligible beneficiaries at no cost. It provides training on diet and exercise changes to help prevent the progression to type 2 diabetes. A broker can help you understand eligibility and find providers offering the program.",
  },
  {
    question: "Can I switch Medicare plans if my diabetes medications change?",
    answer:
      "Yes, but typically only during specific enrollment periods like the Annual Enrollment Period or a Special Enrollment Period if you qualify. If your medications, devices, or doctors change, a broker can review your current plan during the next eligible window and recommend alternatives. Call 855-559-1700 for a free review.",
  },
  {
    question: "Does Medicare cover diabetic supplies like test strips and lancets?",
    answer:
      "Yes. Medicare Part B covers blood sugar testing supplies including test strips, lancets, and glucose monitors as durable medical equipment when prescribed by your doctor. Insulin pumps and the insulin used with them are also covered under Part B. A broker can confirm supply coverage and preferred suppliers under each plan.",
  }
,
  {
    question: "Can I switch Medicare plans if my current one stops covering my diabetes medication?",
    answer:
      "Yes, but timing matters. You can change Medicare Advantage or Part D plans during the Annual Enrollment Period each fall, and certain Special Enrollment Periods may apply if your plan drops a drug mid-year. A broker can help you review formulary changes and switch to a plan that still covers your specific insulin or oral medication.",
  },
  {
    question: "Are diabetes supplies like test strips and lancets covered by Medicare?",
    answer:
      "Yes. Medicare Part B covers blood glucose monitors, test strips, and lancets as durable medical equipment when prescribed by your doctor. Coverage details and supplier networks vary, so a broker can help you confirm which suppliers are in-network under your plan.",
  },
  {
    question: "Do Medicare Advantage plans offer extra benefits for people with diabetes?",
    answer:
      "Some do. Certain Medicare Advantage plans, including Chronic Condition Special Needs Plans (C-SNPs) designed for diabetes, may offer enhanced benefits like nutrition counseling, expanded CGM coverage, or reduced cost-sharing on diabetic supplies. A broker can identify which C-SNPs or standard Advantage plans are available in your county.",
  }
];

export default function MedicareBrokerForDiabetics() {
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
        <span className="text-gray-700">Medicare Broker for Diabetics</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
        Medicare Broker for Diabetics: Finding a Plan That Covers What Your Life
        Actually Looks Like
      </h1>

      <Image
        src="/images/medicare-broker-for-diabetics.webp"
        alt="medicare broker for diabetics"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        A medicare broker for diabetics does something most plan comparison
        tools can't: look at your actual daily routine and match it to coverage
        that works. Not coverage that looks fine on paper, then fails you at the
        pharmacy counter.
      </p>
      <p className="text-lg mb-6">
        I'm Anthony Orner, a licensed Medicare broker. I help people with
        diabetes find plans that cover their insulin, devices, and specialists
        without the runaround. My help is free.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why standard Medicare advice fails people with diabetes
        </h2>
        <p className="mb-3">
          Most Medicare guides treat diabetes as a line item. Check a box, move
          on. But your reality is test strips running out before the refill date,
          pharmacy staff asking for information your doctor already sent, and
          insurance denying a CGM because you're "not on insulin yet."
        </p>
        <p>
          Generic plan comparisons don't account for how often you see
          specialists, which insulin tier your plan uses, or whether your
          endocrinologist is in-network. A broker who understands diabetes does.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Insulin, CGMs, and test strips: what each plan type actually covers
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Original Medicare (Part B):</strong> Covers insulin pumps,
            CGMs (if you use insulin), and diabetes self-management training.
            Test strips and lancets fall under Part B's durable medical equipment
            benefit.
          </li>
          <li>
            <strong>Part D:</strong> Covers injectable and inhaled insulin. Under
            the Inflation Reduction Act, insulin copays are capped at $35/month
            for Part D enrollees.
          </li>
          <li>
            <strong>Medicare Advantage:</strong> Plans vary widely. Some cover
            CGMs more broadly. Some restrict test strip brands. I compare
            formularies plan by plan so you know before you enroll.
          </li>
        </ul>
        <p className="mt-3">
          CGM denials are one of the most common frustrations I hear about.
          Medicare Part B requires insulin use for CGM coverage. Some Advantage
          plans have different criteria. I'll find out which ones.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Plans that cover endocrinologists, podiatrists, and eye exams without
          referrals
        </h2>
        <p className="mb-3">
          Diabetes doesn't stay in one doctor's office. You need an
          endocrinologist, a podiatrist checking your feet, and annual dilated
          eye exams. Original Medicare lets you see any provider who accepts
          Medicare. Advantage plans use networks.
        </p>
        <p>
          Before recommending any plan, I verify that your current specialists
          are in-network. If you prefer PPO-style access without referrals, I'll
          show you which plans offer that in your area.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          The $35 insulin cap and what it actually means for your costs
        </h2>
        <p className="mb-3">
          Since 2023, Medicare Part D plans cap insulin copays at $35 per
          month's supply. This applies in the deductible phase too. But not
          every insulin brand is on every plan's formulary at the same tier.
        </p>
        <p>
          I check your specific insulin against each plan's drug list. The cap
          helps, but you still need a plan that covers your exact medication
          without prior authorization delays.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What your daily life looks like matters more than any brochure
        </h2>
        <p className="mb-3">
          You know what it's like to fight with a pharmacy over a refill that
          should be routine. To get a denial letter for a device your doctor
          prescribed. To manage a condition that never takes a day off while
          also trying to figure out which Medicare plan won't make it harder.
        </p>
        <p>
          That's exactly why working with a broker who gets it makes a real
          difference. I don't just compare premiums. I look at the full picture
          of what you actually use.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          You manage enough already: let a broker handle the coverage part
        </h2>
        <p className="mb-3">
          You're already tracking carbs, monitoring glucose, scheduling
          appointments, and managing medications. Sorting through dozens of
          Medicare plans shouldn't be another thing on your list.
        </p>
        <p>
          I do the comparison work. You make the final call. No cost to you,
          ever. Carriers pay me, not you. The plan costs the same either way.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 my-10 text-center">
        <p className="text-xl font-semibold mb-2">
          Ready to find a plan that actually covers your diabetes care?
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/contact" className="underline font-bold">
            get a free quote online
          </Link>
          .
        </p>
        <p className="text-sm opacity-90">
          Anthony Orner, Licensed Medicare Broker
        </p>
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
              Medicare Part D Explained: Drug Coverage Basics
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage vs. Medigap: Which Is Right for You?
            </Link>
          </li>
          <li>
            <Link
              href="/services/free-medicare-broker-new-jersey"
              className="text-blue-600 hover:underline"
            >
              Medicare Broker in NJ: Local Help You Can Trust
            </Link>
          </li>
          <li>
            <Link
              href="/learn/medicare-parts-explained"
              className="text-blue-600 hover:underline"
            >
              How Medicare Covers Specialist Visits
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
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/coverage/continuous-glucose-monitors" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Continuous Glucose Monitor Coverage</a> and <a href="https://www.medicare.gov/coverage/diabetes-supplies-services" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Diabetes Supplies &amp; Services</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For free, unbiased counseling, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> or the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" target="_blank" rel="noopener noreferrer" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: free unbiased Medicare counseling is available through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For free state-based counseling, contact your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> or the <a href="https://www.nj.gov/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free local counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased Medicare counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free unbiased counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
    </main>
  );
}