import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for kidney disease patients | Free Coverage Review | MedicareYourself",
  description:
    "Kidney disease Medicare broker help — compare ESRD, dialysis, and transplant coverage at no cost. Call 855-559-1700 for a free plan review today.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-kidney-disease-patients" },
  openGraph: {
    title:
      "Medicare broker for kidney disease patients | Free Coverage Review | MedicareYourself",
    description:
      "Medicare broker for kidney disease patients navigating CKD stages, dialysis, and ESRD rules. Anthony Orner simplifies your coverage options. Free review.",
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
      name: "Medicare Broker for Kidney Disease Patients",
      item: "https://medicareyourself.com/services/medicare-broker-for-kidney-disease-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Kidney Disease Patients — One Less Thing to Worry About",
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
    question: "Can I get Medicare if I have kidney disease?",
    answer:
      "Yes. If you have End-Stage Renal Disease (ESRD), you can qualify for Medicare regardless of age once you start regular dialysis or receive a kidney transplant. You typically need to apply through Social Security. If you already have employer coverage, coordination rules determine which plan pays first.",
  },
  {
    question: "Which insurance is best for CKD patients?",
    answer:
      "It depends on your CKD stage and treatment. Earlier stages may do well with a Medicare Advantage plan that covers nephrology visits and lab work at low cost. Patients on dialysis or approaching transplant often benefit from Original Medicare with a Medigap supplement for more predictable out-of-pocket costs. A broker can compare your specific options at no charge.",
  },
  {
    question:
      "How does Medicare work after a kidney transplant?",
    answer:
      "Medicare ESRD coverage generally continues for 36 months after a successful transplant. After that, if you don't qualify for Medicare on another basis (age or disability), your ESRD-based coverage ends. However, Medicare Part B offers an immunosuppressive drug benefit for transplant recipients who lose full coverage. The monthly premium for this benefit is $122.00 in 2026.",
  },
  {
    question:
      "Do I need a Medicare broker if I have kidney disease?",
    answer:
      "You don't have to use one, but ESRD enrollment rules are unusually complex. Coordination between Medicare and employer plans, special enrollment periods, transplant timelines, and Part D drug coverage for medications like phosphate binders all create real risk of costly mistakes. A licensed broker helps you avoid gaps at no cost to you.",
  },
,
  {
    question: "When should I enroll in Medicare if I'm starting dialysis?",
    answer:
      "Medicare eligibility based on ESRD typically begins the fourth month of in-center dialysis, though it can start sooner if you train for home dialysis. You apply through Social Security, not automatically. Timing matters because delaying enrollment can create coverage gaps or affect how your employer plan coordinates with Medicare.",
  }
,
  {
    question: "When should I enroll in Medicare if I'm starting dialysis?",
    answer:
      "Medicare eligibility based on ESRD typically begins the fourth month after you start in-center dialysis. If you train for and start home dialysis earlier, coverage can begin the first month of dialysis. Enrolling promptly through Social Security helps you avoid gaps, especially if you also have employer coverage with coordination-of-benefits rules.",
  },
  {
    question: "Does Medicare cover dialysis and related medications?",
    answer:
      "Yes. Medicare Part B covers outpatient dialysis treatments, most dialysis-related drugs, and home dialysis training and equipment when you meet the requirements. Part D plans cover oral medications such as phosphate binders. Reviewing your plan's formulary each year is important because drug tiers and pharmacy networks can change.",
  }
,
  {
    question: "Can I enroll in a Medicare Advantage plan if I have ESRD?",
    answer:
      "Yes. As of 2021, federal rules allow patients with End-Stage Renal Disease to enroll in any Medicare Advantage plan available in their area, not just Special Needs Plans. This opened up more options, but the right choice still depends on your dialysis center's network status and your medication needs. A licensed broker can compare plans side by side at no cost.",
  },
  {
    question: "Does Medicare cover dialysis at home?",
    answer:
      "Yes. Medicare Part B covers home dialysis training, equipment, and supplies for eligible patients, as well as in-center dialysis treatments. Some support services, like a home dialysis aide, are not covered by Medicare. Your nephrologist and dialysis team can help determine whether home dialysis is appropriate for you.",
  }
,
  {
    question: "When should I enroll in Medicare if I'm starting dialysis?",
    answer:
      "Medicare eligibility based on ESRD typically begins the fourth month of regular outpatient dialysis. If you complete a home dialysis training program or receive a kidney transplant, coverage can start sooner. It's wise to apply through Social Security as soon as your nephrologist confirms a treatment plan so you don't miss enrollment windows.",
  }
,
  {
    question: "Does Medicare cover dialysis at home?",
    answer:
      "Yes. Medicare Part B covers home dialysis training, equipment, and supplies when prescribed by your doctor. You'll typically need to work with a Medicare-certified dialysis facility that supports home treatment. Home dialysis can also affect when your Medicare coverage starts, since eligibility may begin earlier than for in-center dialysis.",
  },
  {
    question: "Can I switch to a Medicare Advantage plan if I have ESRD?",
    answer:
      "Yes. Since 2021, people with ESRD can enroll in any Medicare Advantage plan available in their area during valid enrollment periods. Before switching, it's important to confirm your nephrologist, dialysis center, and transplant team are in-network. A licensed broker can compare plan networks and drug formularies side by side at no cost.",
  }
];

export default function MedicareBrokerKidneyDisease() {
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
          Medicare Broker for Kidney Disease Patients
        </span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Medicare Broker for Kidney Disease Patients — One Less Thing to Worry
          About
        </h1>

        <Image
          src="/images/medicare-broker-for-kidney-disease-patients.webp"
          alt="Medicare broker for kidney disease patients"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          A Medicare broker for kidney disease patients can cut through the confusion that piles up between nephrology appointments, dietary restrictions, and insurance paperwork. Between CKD stages, dialysis schedules, and ESRD enrollment rules, your coverage needs shift constantly.
        </p>
        <p className="text-lg mb-6">
          I'm Anthony Orner, a licensed Medicare broker. I help kidney patients match their plan to their actual treatment, not a generic checklist. No cost to you, ever.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Medicare coverage at every CKD stage, including dialysis and transplant
          </h2>
          <p className="mb-3">
            Early-stage CKD (stages 1-3) usually means frequent lab work, specialist visits, and blood pressure medications. A Medicare Advantage plan with low copays for nephrology and predictable drug costs can work well here.
          </p>
          <p>
            Once you reach stage 4 or begin dialysis, costs escalate fast. Original Medicare paired with a Medigap supplement gives you broader provider access and more predictable out-of-pocket costs when you're in treatment three or more days a week.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How ESRD special enrollment rules affect your plan options
          </h2>
          <p className="mb-3">
            ESRD qualifies you for Medicare at any age, but the enrollment timeline isn't straightforward. Coverage can start as early as the first month of dialysis or up to three months later, depending on when you apply and your training schedule.
          </p>
          <p>
            If you have employer insurance, Medicare becomes secondary for the first 30 months, then flips to primary. Miss that coordination window and your employer plan may refuse claims retroactively. I've seen patients blindsided by five-figure bills because no one explained the switch.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Coordinating Part D with kidney-specific prescriptions and phosphate binders
          </h2>
          <p className="mb-3">
            Kidney patients often take 10+ daily medications. Phosphate binders like sevelamer, immunosuppressants after transplant, and blood pressure drugs all need to land on the same formulary at a tier you can afford.
          </p>
          <p>
            I run your full medication list through available Part D plans to find the lowest total annual cost. One wrong plan choice can mean hundreds of dollars a month in out-of-pocket drug costs.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What happens to your Medicare after a kidney transplant
          </h2>
          <p className="mb-3">
            ESRD-based Medicare continues for 36 months post-transplant. After that, it ends unless you qualify for Medicare through age or disability. Many transplant recipients don't realize this until they're about to lose coverage for the immunosuppressive drugs keeping their kidney alive.
          </p>
          <p>
            Medicare's Part B immunosuppressive drug benefit exists for exactly this situation. It covers anti-rejection medications for a monthly premium. I help you plan for this transition well before the 36-month cliff.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why kidney patients get stuck in insurance limbo
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Employer plans pushing you to apply for ESRD Medicare to reduce their costs, sometimes mid-hospitalization
            </li>
            <li>
              Social Security processing delays that leave you paying premiums on coverage you tried to cancel months ago
            </li>
            <li>
              Confusion about whether Medicare Advantage plans even accept ESRD patients (most now do, since the 21st Century Cures Act removed restrictions starting in 2021)
            </li>
            <li>
              Transplant recipients under 65 facing $700+/month in Part A and Part B premiums because they haven't met the 40-quarter work history requirement
            </li>
          </ul>
          <p className="mt-3">
            These aren't edge cases. I hear them every week.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Request a free review so your insurance stops adding to the overwhelm
          </h2>
          <p className="mb-3">
            You're already managing appointments, dietary restrictions, fatigue, and the constant monitoring that comes with kidney disease. Your insurance shouldn't be another source of stress and confusion.
          </p>
          <p>
            Call me or fill out a quick form. I'll review your current coverage, check your medications, and show you exactly what your options look like. No pressure, no sales pitch, no cost.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center mb-10">
          <p className="text-xl font-semibold mb-2">
            Talk to a Medicare broker who understands kidney disease coverage.
          </p>
          <p className="text-2xl font-bold mb-4">
            <a href="tel:8555591700" className="underline">
              855-559-1700
            </a>
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Get a Free Quote
          </Link>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
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
                href="/learn/medicare-parts-explained"
                className="text-blue-600 hover:underline"
              >
                Understanding Medicare Part D Drug Coverage
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
                href="/services/what-is-the-best-medicare-plan-for-dialysis"
                className="text-blue-600 hover:underline"
              >
                ESRD and Medicare Enrollment: What You Need to Know
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
                href="/services/medicare-broker-for-peripheral-artery-disease-patients"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For Peripheral Artery Disease Patients
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-thyroid-disease-patients"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For Thyroid Disease Patients
              </Link>
            </li>
</ul>
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/basics/end-stage-renal-disease" rel="noopener noreferrer" target="_blank" className="underline">Medicare coverage for ESRD (Medicare.gov)</a> and <a href="https://www.cms.gov/medicare/coverage/end-stage-renal-disease" rel="noopener noreferrer" target="_blank" className="underline">CMS End-Stage Renal Disease program</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling from the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need unbiased help in your state? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For free, unbiased counseling in New Jersey, contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-level help? Contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">New Jersey Department of Banking and Insurance</a> or your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">State help: <a href="https://www.state.nj.us/dobi/division_insurance/ship/shipmain.htm" rel="noopener noreferrer" target="_blank" className="underline">New Jersey SHIP — free Medicare counseling</a></div>
      </section>
      </article>
    </>
  );
}