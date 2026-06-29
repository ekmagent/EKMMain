import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare part d insurance brokers 18517 | Free Plan Comparison | MedicareYourself",
  description:
    "Compare every Medicare Part D drug plan in 18517 with licensed broker Anthony Orner. Free Rx cost review to lower your annual spend — call 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-part-d-insurance-brokers-18517" },
  openGraph: {
    title:
      "medicare part d insurance brokers 18517 | Free Plan Comparison | MedicareYourself",
    description:
      "Medicare Part D insurance brokers near 18517 — Anthony Orner compares every drug plan in your zip code at no cost. Book a free review today.",
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
      name: "Medicare Part D Insurance Brokers 18517",
      item: "https://medicareyourself.com/services/medicare-part-d-insurance-brokers-18517",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Part D Insurance Brokers Serving 18517: Find the Right Drug Plan",
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
    "https://medicareyourself.com/services/medicare-part-d-insurance-brokers-18517",
};

const faqs = [
  {
    question: "Who has the best Medicare Part D insurance for 18517?",
    answer:
      "There's no single 'best' Part D plan. The right plan depends on your specific prescriptions, preferred pharmacy, and whether you qualify for Extra Help. A broker compares every plan available in your zip code to find the one with the lowest total annual cost for your exact drug list.",
  },
  {
    question:
      "Will I face a penalty if I delay enrolling in Medicare Part D?",
    answer:
      "Yes. If you go 63 or more consecutive days without creditable drug coverage after your Initial Enrollment Period, you'll pay a late enrollment penalty: 1% of the national base premium multiplied by the number of months you were without coverage. That penalty lasts as long as you have Part D.",
  },
  {
    question: "Does a Medicare Part D broker cost me anything?",
    answer:
      "No. Licensed Medicare brokers are paid by the insurance carriers, not by you. The plan you enroll in costs the same whether you use a broker or sign up directly. You get expert guidance at zero extra cost.",
  },
  {
    question: "When can I change my Part D plan in 2025 or 2026?",
    answer:
      "Medicare Part D Open Enrollment runs October 15 through December 7 each year. During this window, you can switch plans for the following year. Some qualifying events also trigger Special Enrollment Periods throughout the year.",
  },
,
  {
    question: "How does a Medicare Part D broker compare plans for my specific medications?",
    answer:
      "A licensed broker enters your full prescription list, dosages, and preferred pharmacy into the Medicare Plan Finder to project the total annual cost — premiums, deductibles, and copays combined — for every Part D plan available in your zip code. This reveals which plan is cheapest for your exact drugs, since the same medication can cost very different amounts on different formularies.",
  },
  {
    question: "Can I get help paying for Medicare Part D in 18517?",
    answer:
      "Yes. The federal Extra Help program (also called the Low Income Subsidy) reduces or eliminates Part D premiums, deductibles, and copays for those who qualify based on income and resources. Pennsylvania also offers the PACE and PACENET programs, which can work alongside Part D to lower prescription costs for eligible residents.",
  },
  {
    question: "What's the difference between a standalone Part D plan and Medicare Advantage drug coverage?",
    answer:
      "A standalone Part D plan adds prescription coverage to Original Medicare or a Medicare Supplement. A Medicare Advantage plan with drug coverage (MAPD) bundles medical and prescription benefits into one plan. You generally cannot have both a standalone Part D plan and an MAPD at the same time, so a broker can help you weigh which structure fits your situation.",
  }
,
  {
    question: "What does Medicare Part D actually cover in 18517?",
    answer:
      "Medicare Part D covers outpatient prescription drugs through private insurance plans approved by Medicare. Each plan has its own formulary — the list of covered medications — along with preferred pharmacies and tiered copay structures. Coverage standards are set by CMS, but the specific drugs, costs, and pharmacy networks vary by plan in your zip code.",
  },
  {
    question: "Can I get help paying for Part D if I have limited income?",
    answer:
      "Yes. The Extra Help program (also called the Low-Income Subsidy) can significantly reduce or eliminate your Part D premium, deductible, and copays. Eligibility is based on income and resources, and you can apply through Social Security or your state Medicaid office. A broker can help you determine if you qualify and complete the application.",
  },
  {
    question: "Should I choose a standalone Part D plan or a Medicare Advantage plan with drug coverage?",
    answer:
      "It depends on how you want the rest of your Medicare benefits structured. Standalone Part D pairs with Original Medicare and a Medigap policy, while Medicare Advantage plans often bundle drug coverage with medical benefits. A broker reviews your prescriptions, doctors, and budget to recommend the structure that fits your situation.",
  }
,
  {
    question: "What's the difference between a stand-alone Part D plan and Medicare Advantage drug coverage near 18517?",
    answer:
      "A stand-alone Part D plan adds prescription coverage to Original Medicare or a Medicare Supplement. Medicare Advantage plans (MA-PD) bundle medical and drug coverage into one plan. A broker can show you both options side-by-side so you can compare total costs and pharmacy networks before deciding.",
  },
  {
    question: "What is the Part D coverage phase structure I should know about?",
    answer:
      "Part D has three phases: the deductible phase, the initial coverage phase, and the catastrophic coverage phase. Starting in 2025, the coverage gap (donut hole) was eliminated and a new annual out-of-pocket cap applies. A broker can walk you through how your specific medications move through these phases throughout the year.",
  },
  {
    question: "Can I get help paying for my Part D plan if I have limited income?",
    answer:
      "Yes. The Extra Help program (also called the Low-Income Subsidy) can significantly reduce your Part D premium, deductible, and copays. New Jersey residents may also qualify for PAAD or Senior Gold. A licensed broker can screen you for these programs during your free review.",
  }
,
  {
    question: "What's the difference between a stand-alone Part D plan and drug coverage through Medicare Advantage?",
    answer:
      "A stand-alone Part D plan adds prescription drug coverage to Original Medicare (Parts A and B) or a Medicare Supplement plan. Medicare Advantage plans (Part C) often bundle drug coverage into a single plan. A broker can help you decide which structure fits your medications, doctors, and budget.",
  },
  {
    question: "Can a broker help me apply for Extra Help with Part D costs?",
    answer:
      "Yes. Extra Help (also called the Low Income Subsidy) is a federal program that reduces Part D premiums, deductibles, and copays for people who meet income and resource limits. A licensed broker can review your eligibility and walk you through the Social Security application at no cost. Call 855-559-1700 to get started.",
  },
  {
    question: "What if my prescriptions change after I enroll in a Part D plan?",
    answer:
      "You generally stay in your chosen plan until the next Annual Enrollment Period (October 15 – December 7), unless a Special Enrollment Period applies. If a new medication makes your current plan expensive, a broker can re-run the Plan Finder during open enrollment to switch you to a lower-cost option for the following year.",
  }
,
  {
    question: "What does Medicare Part D cover for residents near 18517?",
    answer:
      "Medicare Part D covers outpatient prescription drugs through private plans approved by Medicare. Each plan has its own formulary, preferred pharmacy network, and cost-sharing structure. Coverage includes most brand-name and generic medications, though the specific drugs covered vary by plan.",
  },
  {
    question: "Can I get Extra Help paying for my Part D plan?",
    answer:
      "Yes. The Extra Help program (also called the Low-Income Subsidy) helps eligible beneficiaries pay Part D premiums, deductibles, and copays. Eligibility is based on income and resources, and you can apply through the Social Security Administration. A broker can help you determine if you may qualify before enrolling.",
  },
  {
    question: "How do I get started with a Part D review in 18517?",
    answer:
      "Call 855-559-1700 to schedule a free Part D review with licensed broker Anthony Orner. Have your prescription list, dosages, and preferred pharmacy ready. The review compares every Part D plan available in your zip code so you can see total projected annual cost before enrolling.",
  }
];

export default function MedicarePartDBrokers18517() {
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
          Medicare Part D Insurance Brokers 18517
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Medicare Part D Insurance Brokers Serving 18517: Find the Right Drug Plan
      </h1>

      <Image
        src="/images/medicare-part-d-insurance-brokers-18517.webp"
        alt="Medicare Part D insurance brokers 18517"
        width={800}
        height={400}
        className="w-full h-auto rounded-lg mb-6"
      />

      <p className="text-lg mb-2">
        Medicare Part D insurance brokers in the 18517 area do something most people don't have time for: compare every drug plan available in your zip code, line by line, against your actual prescriptions. I'm Anthony Orner, a licensed Medicare broker, and I do this work at no cost to you.
      </p>
      <p className="text-lg mb-6">
        The right Part D plan can save you hundreds a year. The wrong one can leave you paying full price for a Tier 3 drug you assumed was covered.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Why a broker matters for Part D in the Pocono region
        </h2>
        <p className="mb-3">
          Zip code 18517 sits in Monroe and Lackawanna County territory, where plan availability shifts from year to year. A drug plan that worked well in 2024 may have dropped your medication from its formulary or moved it to a higher tier for 2025.
        </p>
        <p>
          I track those changes across every carrier serving the Poconos. You don't have to spend hours on medicare.gov trying to figure out tier structures and deductible traps.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          How we match your prescriptions to the lowest-cost plan
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>You share your current medication list, dosages, and preferred pharmacy.</li>
          <li>I run your drugs through every Part D plan available in 18517.</li>
          <li>We compare total annual cost: premiums + deductibles + copays at each coverage stage.</li>
          <li>You pick the plan that fits. I handle the enrollment paperwork.</li>
        </ul>
        <p className="mt-3">
          The whole process takes about 15 minutes by phone.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          2025-2026 Part D changes that affect 18517 residents
        </h2>
        <p className="mb-3">
          The Inflation Reduction Act capped out-of-pocket drug costs at $2,100 per year in 2026. That's real money for anyone on expensive brand-name medications. The catastrophic coverage phase also changed: once you hit $2,100, you pay $0 for the rest of the year.
        </p>
        <p>
          For 2026, Open Enrollment runs October 15 through December 7. If your plan's formulary shifts or premiums jump, that's your window to switch.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Common frustrations Part D plans cause
        </h2>
        <p className="mb-3">
          People tell me they feel like Part D is designed to confuse them. Their doctor prescribes a drug and it's Tier 3, so the plan barely covers it. They never hit their deductible, which means the insurance essentially pays nothing.
        </p>
        <p>
          That frustration is valid. But the fix isn't skipping Part D. It's finding the plan where your specific drugs sit on lower tiers or have the smallest copays. That's what a broker does.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Don't skip Part D and risk the penalty
        </h2>
        <p className="mb-3">
          If you delay Part D without creditable drug coverage, Medicare charges a permanent late enrollment penalty: 1% of the national base premium for every month you went uncovered. After a two-year gap, that penalty adds up fast and never goes away.
        </p>
        <p>
          Even if you're healthy now and take no prescriptions, a $0-premium Part D plan protects you from that penalty.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Schedule a free Part D review with Anthony Orner
        </h2>
        <p className="mb-3">
          I work with residents across the 18517 area, Dunmore, Throop, and surrounding Lackawanna County communities. Grab your pill bottles, give me a call, and I'll show you exactly what each plan costs for your medications.
        </p>
        <p>
          No charge. No pressure. Just a clear answer.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Ready to find the lowest-cost Part D plan in 18517?
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/quote" className="underline font-bold">
            Get a Free Quote
          </Link>
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
              Medicare Part D Explained: How Drug Plans Work
            </Link>
          </li>
          <li>
            <Link
              href="/learn/medicare-parts-explained"
              className="text-blue-600 hover:underline"
            >
              Part D Late Enrollment Penalty: What It Costs and How to Avoid It
            </Link>
          </li>
          <li>
            <Link
              href="/learn/medicare-enrollment-periods"
              className="text-blue-600 hover:underline"
            >
              Medicare Open Enrollment: Key Dates and What You Can Change
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/pennsylvania"
              className="text-blue-600 hover:underline"
            >
              Medicare Brokers in Pennsylvania
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
                href="/services/best-and-cheapest-medicare-supplement"
                className="text-blue-600 hover:underline"
              >
                Best And Cheapest Medicare Supplement
              </Link>
            </li>
            <li>
              <Link
                href="/services/independent-medicare-agents-near-me"
                className="text-blue-600 hover:underline"
              >
                Independent Medicare Agents Near Me
              </Link>
            </li>
            <li>
              <Link
                href="/services/compare-and-enroll-in-plan-g-online"
                className="text-blue-600 hover:underline"
              >
                Compare And Enroll In Plan G Online
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-brokers-in-my-area"
                className="text-blue-600 hover:underline"
              >
                Medicare Brokers In My Area
              </Link>
            </li>
</ul>
            <div className="text-sm text-gray-600 mt-4">Pennsylvania residents near 18517 can also contact <a href="https://www.aging.pa.gov/aging-services/pharmaceutical-assistance/Pages/APPRISE.aspx" rel="noopener noreferrer" target="_blank" className="underline">PA APPRISE (State SHIP Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Pennsylvania residents near 18517 can also get free, unbiased counseling from <a href="https://www.aging.pa.gov/aging-services/insurance/Pages/default.aspx" rel="noopener noreferrer" target="_blank" className="underline">PA APPRISE</a>, the state's SHIP program.</div>
            <div className="text-sm text-gray-600 mt-4">Pennsylvania residents can get free, unbiased counseling from <a href="https://www.aging.pa.gov/aging-services/insurance/Pages/default.aspx" rel="noopener noreferrer" target="_blank" className="underline">PA APPRISE</a>, the state's SHIP program.</div>
            <div className="text-sm text-gray-600 mt-4">Pennsylvania residents in 18517 can also get free Medicare counseling through <a href="https://www.aging.pa.gov/aging-services/Pages/APPRISE.aspx" rel="noopener noreferrer" target="_blank" className="underline">APPRISE, Pennsylvania's State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-2">Pennsylvania residents in 18517 can also contact <a href="https://www.aging.pa.gov/aging-services/insurance/Pages/default.aspx" rel="noopener noreferrer" target="_blank" className="underline">PA APPRISE</a>, the state's free SHIP counseling program, or the <a href="https://www.insurance.pa.gov/" rel="noopener noreferrer" target="_blank" className="underline">Pennsylvania Insurance Department</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Free local counseling: <a href="https://www.insurance.pa.gov/Consumers/Pages/APPRISE.aspx" rel="noopener noreferrer" target="_blank" className="underline">Pennsylvania APPRISE SHIP Program</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Free local counseling: <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">Find your State Health Insurance Assistance Program (SHIP)</a> for unbiased Medicare guidance.</div>
            <div className="text-sm text-gray-600 mt-4">Pennsylvania residents near 18517 can also contact <a href="https://www.aging.pa.gov/aging-services/PA-MEDI/Pages/default.aspx" rel="noopener noreferrer" target="_blank" className="underline">PA MEDI (the state's SHIP program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Pennsylvania residents can get free, unbiased counseling through <a href="https://www.aging.pa.gov/aging-services/pace/Pages/APPRISE.aspx" rel="noopener noreferrer" target="_blank" className="underline">APPRISE, Pennsylvania's SHIP program</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Pennsylvania residents in 18517 can also contact <a href="https://www.aging.pa.gov/aging-services/pharmaceutical-assistance/Pages/APPRISE.aspx" rel="noopener noreferrer" target="_blank" className="underline">PA APPRISE</a>, the state's free SHIP counseling program.</div>
            <div className="text-sm text-gray-600 mt-4">Pennsylvania residents in 18517 can also get free, unbiased Medicare counseling through <a href="https://www.aging.pa.gov/aging-services/pages/apprise.aspx" rel="noopener noreferrer" target="_blank" className="underline">PA APPRISE</a>, the state's SHIP program.</div>
            <div className="text-sm text-gray-600 mt-4">Free local counseling: <a href="https://www.pa.gov/agencies/aging/programs-and-services/health-and-wellness/apprise-health-insurance-counseling.html" rel="noopener noreferrer" target="_blank" className="underline">Pennsylvania APPRISE SHIP Program</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Pennsylvania residents in 18517 can also contact <a href="https://www.aging.pa.gov/aging-services/insurance/Pages/default.aspx" rel="noopener noreferrer" target="_blank" className="underline">PA APPRISE</a>, the state's free SHIP Medicare counseling program.</div>
            <div className="text-sm text-gray-600 mt-4">Pennsylvania residents in 18517 can get free local counseling from <a href="https://www.aging.pa.gov/aging-services/pages/apprise.aspx" rel="noopener noreferrer" target="_blank" className="underline">APPRISE, the PA State Health Insurance Assistance Program</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Pennsylvania residents in 18517 can also contact <a href="https://www.aging.pa.gov/aging-services/Pages/APPRISE.aspx" rel="noopener noreferrer" target="_blank" className="underline">PA APPRISE (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Free local counseling: <a href="https://www.insurance.pa.gov/Coverage/Pages/Medicare.aspx" rel="noopener noreferrer" target="_blank" className="underline">Pennsylvania Insurance Department — Medicare</a> and the <a href="https://www.aging.pa.gov/aging-services/pace/Pages/APPRISE.aspx" rel="noopener noreferrer" target="_blank" className="underline">PA APPRISE SHIP program</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Free local counseling: contact the <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for unbiased Medicare guidance in your area.</div>
            <div className="text-sm text-gray-600 mt-4">Pennsylvania residents can also contact <a href="https://www.aging.pa.gov/aging-services/pharmaceutical-assistance/Pages/APPRISE.aspx" rel="noopener noreferrer" target="_blank" className="underline">APPRISE</a>, Pennsylvania's free SHIP Medicare counseling program.</div>
            <div className="text-sm text-gray-600 mt-4">Pennsylvania residents in 18517 can also contact <a href="https://www.aging.pa.gov/aging-services/pharmaceutical-assistance/Pages/APPRISE.aspx" rel="noopener noreferrer" target="_blank" className="underline">PA APPRISE</a>, the state's free SHIP counseling program.</div>
      </section>
    </>
  );
}