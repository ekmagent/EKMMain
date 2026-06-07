import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare Supplement Insurance for Crohn's Patients | Free Guidance | MedicareYourself",
  description:
    "Medigap for Crohn's patients helps cover the Part B coinsurance on biologic infusions, colonoscopies & GI specialist visits. Call 855-559-1700 for free help.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-supplement-insurance-for-crohns-patients" },
  openGraph: {
    title:
      "Medicare Supplement Insurance for Crohn's Patients | Free Guidance | MedicareYourself",
    description:
      "Medicare supplement insurance for Crohn's patients covers the 20% gap on biologics and colonoscopies. See which carriers approve IBD applicants. Free help.",
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
      name: "Medicare Supplement Insurance for Crohn's Patients",
      item: "https://medicareyourself.com/services/medicare-supplement-insurance-for-crohns-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Supplement Insurance for Crohn's Patients: What's Covered and How to Get Approved",
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
    question:
      "Can I get a Medigap plan if I already have Crohn's disease?",
    answer:
      "Yes. During your 6-month Medigap Open Enrollment Period (starting the month you turn 65 and have Part B), no carrier can deny you or charge more because of Crohn's. Outside that window, some carriers still approve IBD applicants, and guaranteed-issue triggers can also bypass medical questions entirely.",
  },
  {
    question:
      "Does Medicare cover biologic infusions like Remicade for Crohn's?",
    answer:
      "Medicare Part B covers provider-administered biologic infusions at 80% of the approved amount after you meet the $283 annual deductible. A Medigap plan like Plan G picks up the remaining 20%, which can save thousands per infusion cycle.",
  },
  {
    question:
      "Which Medigap plan is best for someone with Crohn's disease?",
    answer:
      "Plan G is the most popular choice. It covers the 20% Part B coinsurance on specialist visits, infusions, colonoscopies, and hospital stays. The only out-of-pocket cost is the $283 Part B deductible each year.",
  },
  {
    question:
      "What if my Medigap application gets denied because of Crohn's?",
    answer:
      "If you're outside your Open Enrollment Period and get denied, you may still qualify through a federal guaranteed-issue trigger, such as losing employer coverage or leaving a Medicare Advantage plan. Call us at 855-559-1700 and we'll identify your options.",
  },
,
  {
    question: "Will Medicare cover colonoscopies for Crohn's monitoring?",
    answer:
      "Medicare covers diagnostic colonoscopies needed to monitor Crohn's disease under Part B. When a colonoscopy is performed for diagnostic reasons rather than routine screening, Part B coinsurance applies, and a Medigap plan can cover that share. Your gastroenterologist's billing code determines whether the visit is treated as screening or diagnostic.",
  },
  {
    question: "Is a Special Needs Plan a better option than Medigap for Crohn's patients?",
    answer:
      "Chronic Condition Special Needs Plans (C-SNPs) are Medicare Advantage plans tailored to people with specific chronic illnesses, and some are designed for autoimmune or gastrointestinal conditions. They include care coordination and customized drug formularies, but they use network restrictions unlike Medigap. The right choice depends on your providers, medications, and travel needs — call 855-559-1700 to compare.",
  },
  {
    question: "Are Crohn's medications covered under Part B or Part D?",
    answer:
      "It depends on how the medication is administered. Infusions given in a doctor's office or infusion center are usually billed under Part B, while self-injected or oral Crohn's medications are typically covered under a Part D prescription drug plan. A Medigap plan only helps with Part B cost-sharing, so pairing it with a strong Part D plan matters for IBD patients.",
  }
,
  {
    question: "Does a Medigap plan cover specialist visits to my gastroenterologist?",
    answer:
      "Yes. Once Medicare Part B approves the visit, your Medigap plan picks up the Part B coinsurance based on the letter plan you choose. With Plan G, for example, your gastroenterologist visits are covered after you meet the annual Part B deductible. You can see any provider nationwide who accepts Medicare.",
  },
  {
    question: "Are Crohn's-related hospital stays covered by Medicare Supplement insurance?",
    answer:
      "Yes. Medicare Part A covers inpatient hospital stays, including flare-related admissions and bowel surgeries, but leaves you responsible for the Part A deductible and daily coinsurance after a set number of days. Medigap plans like Plan G and Plan N cover the Part A deductible, coinsurance, and an additional 365 days of hospital coverage after Medicare benefits are exhausted.",
  },
  {
    question: "Can I switch Medigap plans later if my Crohn's symptoms change?",
    answer:
      "You can apply to switch Medigap plans at any time, but outside your Open Enrollment or a guaranteed-issue window, carriers can use medical underwriting. Some states have additional protections that let you switch without underwriting. Call 855-559-1700 and we'll review your state's rules and carrier options before you apply.",
  }
,
  {
    question: "Does Medicare cover parenteral or enteral nutrition for Crohn's patients?",
    answer:
      "Medicare Part B may cover parenteral (intravenous) and enteral (tube) nutrition when it's deemed medically necessary for Crohn's patients who cannot adequately absorb nutrients through normal digestion. Coverage typically requires documentation from your gastroenterologist showing medical necessity. A Medigap plan can help pay the Part B coinsurance that applies to these therapies.",
  },
  {
    question: "Are ostomy supplies covered for Crohn's patients on Medicare?",
    answer:
      "Yes. Medicare Part B covers medically necessary ostomy supplies for patients who have had colostomy, ileostomy, or urinary ostomy surgery related to Crohn's disease. Part B pays its share after the deductible, and a Medigap plan can pick up the remaining coinsurance. Supplies must be obtained from a Medicare-enrolled supplier.",
  },
  {
    question: "Can I switch Medigap plans later if my Crohn's symptoms worsen?",
    answer:
      "You can apply to switch Medigap plans at any time, but outside guaranteed-issue windows carriers can use medical underwriting and may decline or surcharge based on your Crohn's history. Some states have additional protections that allow switching without underwriting. Call 855-559-1700 and we'll review your state rules and timing options.",
  }
,
  {
    question: "Does Medicare cover enteral or parenteral nutrition for severe Crohn's?",
    answer:
      "Medicare may cover parenteral (intravenous) and enteral (tube feeding) nutrition when they are deemed medically necessary for patients who cannot maintain nutrition through normal digestion. Coverage falls under Part B's durable medical equipment and prosthetic device benefits. A Medigap policy can help cover the coinsurance portion that Medicare doesn't pay.",
  },
  {
    question: "Are ostomy supplies covered for Crohn's patients on Medicare?",
    answer:
      "Yes. Medicare Part B covers ostomy supplies for beneficiaries who have had a colostomy, ileostomy, or urinary ostomy, which are sometimes required after Crohn's-related surgery. After the Part B deductible, Medicare pays its share and a Medigap plan can cover the remaining coinsurance.",
  },
  {
    question: "How do I switch Medigap plans if my Crohn's symptoms get worse?",
    answer:
      "Outside your initial Open Enrollment Period, switching Medigap plans usually requires medical underwriting, and Crohn's can affect approval. However, some states have annual or birthday-month switching rules, and certain guaranteed-issue situations let you change plans without health questions. Call 855-559-1700 and we'll review your state's specific rules.",
  }
,
  {
    question: "Does Medicare cover nutritional support like tube feeding for Crohn's patients?",
    answer:
      "Medicare can cover enteral nutrition (tube feeding) and parenteral nutrition (intravenous feeding) when they are medically necessary for IBD patients who cannot adequately digest food. Coverage falls under Part B's durable medical equipment and prosthetic device benefits, and a Medigap plan helps pay the coinsurance portion. Documentation from your gastroenterologist is typically required for approval.",
  },
  {
    question: "Are ostomy supplies covered if my Crohn's required surgery?",
    answer:
      "Yes. Medicare Part B covers medically necessary ostomy supplies for patients who have had colostomy, ileostomy, or urinary ostomy surgery related to Crohn's complications. After the Part B deductible, Medicare pays its share of the approved amount, and a Medigap plan like Plan G can cover the remaining coinsurance.",
  },
  {
    question: "Can a broker help me compare Medigap carriers that accept Crohn's applicants?",
    answer:
      "Yes. As an independent broker licensed in NJ and 34 states, I can compare which carriers underwrite favorably for IBD applicants and identify whether you qualify for guaranteed-issue rights. Call 855-559-1700 for a no-cost review of your situation and the plans available in your ZIP code.",
  }
,
  {
    question: "Does Medigap cover ostomy supplies for Crohn's patients who've had surgery?",
    answer:
      "Medicare Part B covers medically necessary ostomy supplies for beneficiaries who've had a colostomy, ileostomy, or urinary ostomy after Crohn's-related surgery. Part B pays its share after the deductible, and a Medigap plan like Plan G covers the remaining coinsurance. You'll need a prescription and supplies must come from a Medicare-enrolled supplier.",
  }
,
  {
    question: "Does Medigap help with ostomy supplies for Crohn's patients who've had surgery?",
    answer:
      "Medicare Part B covers medically necessary ostomy supplies for beneficiaries who have had a colostomy, ileostomy, or urinary ostomy. After Part B pays its share, a Medigap plan such as Plan G covers the remaining coinsurance. Your supplier must be enrolled in Medicare for the claim to be paid.",
  },
  {
    question: "Are nutritional therapies for Crohn's covered under Medicare?",
    answer:
      "Medicare may cover parenteral (intravenous) and enteral (tube feeding) nutrition when it's medically necessary and meets specific criteria, such as a non-functioning digestive tract. These are billed under Part B as durable medical equipment, and a Medigap plan can pick up the coinsurance. Routine oral nutritional supplements are generally not covered.",
  },
  {
    question: "Can I switch Medigap plans later if my Crohn's worsens?",
    answer:
      "You can apply to switch Medigap plans at any time, but outside your Open Enrollment Period or a guaranteed-issue window, carriers can use medical underwriting and may decline you because of Crohn's. Some states have additional protections that allow plan changes without underwriting. Call 855-559-1700 to review your state's rules before switching.",
  }
,
  {
    question: "Does Medicare cover enteral or parenteral nutrition for Crohn's patients?",
    answer:
      "Medicare may cover enteral nutrition (tube feeding) and parenteral nutrition (intravenous feeding) under the prosthetic device benefit when a physician documents that the patient cannot maintain nutrition through normal eating. Coverage requirements are strict and require medical necessity documentation. A Medigap plan can help pick up the Part B coinsurance once Medicare approves the claim.",
  },
  {
    question: "Are ostomy supplies covered if Crohn's leads to surgery?",
    answer:
      "Yes. Medicare Part B covers medically necessary ostomy supplies for beneficiaries who have had a colostomy, ileostomy, or urinary ostomy. After the Part B deductible, Medicare pays its share and a Medigap plan can cover the remaining coinsurance, which adds up quickly for patients who need monthly supplies.",
  },
  {
    question: "Can I switch Medigap plans later if my Crohn's gets more severe?",
    answer:
      "You can apply to switch Medigap plans at any time, but outside your Open Enrollment Period or a guaranteed-issue window, carriers may use medical underwriting and could decline you based on Crohn's. We review your timing and any guaranteed-issue rights before recommending a switch — call 855-559-1700 to talk it through.",
  }
];

export default function MedicareSupplementCrohnsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />

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
          Medicare Supplement Insurance for Crohn&#39;s Patients
        </span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
        Medicare Supplement Insurance for Crohn&#39;s Patients: What&#39;s Covered and How to Get Approved
      </h1>

      <Image
        src="/images/medicare-supplement-insurance-for-crohns-patients.webp"
        alt="Medicare supplement insurance for Crohn's patients"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        Medicare supplement insurance for Crohn&#39;s patients closes the 20% gap that Original Medicare leaves on infusions, colonoscopies, and specialist visits. If you&#39;re tired of fighting with insurance every time your treatment changes, a Medigap plan locks in predictable costs so you can focus on managing your health instead of managing paperwork.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How Original Medicare covers Crohn&#39;s — infusions, scopes, and biologics
        </h2>
        <p className="text-gray-700 mb-2">
          Part B covers 80% of outpatient Crohn&#39;s care after you meet the $283 annual deductible. That includes provider-administered biologics like Remicade infusions, diagnostic colonoscopies, and GI specialist visits.
        </p>
        <p className="text-gray-700">
          The remaining 20% is yours. On a biologic that runs $5,000+ per infusion every 8 weeks, that 20% adds up to thousands a year. Part A covers inpatient hospital stays with a $1,676 deductible per benefit period.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Which Medigap plans eliminate the 20% coinsurance on specialist visits
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <strong>Plan G</strong> — Covers 100% of Part B coinsurance, Part A deductible, skilled nursing facility costs ($209.50/day for days 21-100), and excess charges. You only pay the $283 Part B deductible.
          </li>
          <li>
            <strong>Plan N</strong> — Similar to G but with up to $20 copays at some office visits and a slightly lower premium. Good if your infusions are your biggest cost.
          </li>
          <li>
            <strong>Plan F</strong> — Only available if you were eligible for Medicare before January 1, 2020. Covers everything G covers plus the Part B deductible.
          </li>
        </ul>
        <p className="text-gray-700 mt-2">
          For Crohn&#39;s patients getting regular infusions, Plan G usually offers the best value. Rates vary by carrier, age, and ZIP code.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Underwriting with Crohn&#39;s: carriers that approve IBD applicants
        </h2>
        <p className="text-gray-700 mb-2">
          Outside Open Enrollment, most Medigap carriers ask health questions. Crohn&#39;s disease and ulcerative colitis can trigger a decline with some companies. But not all carriers treat IBD the same way.
        </p>
        <p className="text-gray-700">
          Some carriers approve applicants whose Crohn&#39;s is stable, meaning no hospitalizations or surgery within the past 12-24 months. Others decline any active IBD diagnosis. The carrier mix varies by state. That&#39;s why working with a broker who knows which companies to submit to matters. One denial doesn&#39;t mean you&#39;re out of options.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Guaranteed-issue paths that bypass medical questions entirely
        </h2>
        <p className="text-gray-700 mb-2">
          Three situations give you guaranteed-issue rights, meaning no health questions, no denials:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <strong>Medigap Open Enrollment</strong> — 6 months starting when you&#39;re 65+ and enrolled in Part B. This is your best window. Apply as early as 6 months before Part B starts to lock in your rate.
          </li>
          <li>
            <strong>Leaving a Medicare Advantage plan</strong> — Within your first 12 months on MA, you can switch to Original Medicare + Medigap with guaranteed-issue rights.
          </li>
          <li>
            <strong>Losing employer or union group coverage</strong> — Federal law gives you guaranteed-issue access to certain Medigap plans.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What about Part D and biologic prescriptions?
        </h2>
        <p className="text-gray-700 mb-2">
          Here&#39;s where many Crohn&#39;s patients get caught off guard. Medigap does not cover prescription drugs. If your biologic is self-administered (like Humira injections at home), it falls under Part D, not Part B. Part D formularies and costs vary widely by plan.
        </p>
        <p className="text-gray-700">
          Manufacturer assistance programs and Extra Help (Low-Income Subsidy) can reduce Part D costs significantly. We help you compare Part D plans alongside your Medigap so nothing slips through the cracks.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Your next step: get matched to the right plan
        </h2>
        <p className="text-gray-700">
          You already spend enough energy managing flares, coordinating with your GI, and dealing with prior authorizations. Let us handle the insurance side. We&#39;ll identify which carriers in your state approve Crohn&#39;s patients, find your lowest rate, and check for guaranteed-issue eligibility. One call, no pressure.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Talk to a licensed Medicare broker who understands IBD coverage.
        </p>
        <p className="text-2xl font-bold mb-3">
          <a href="tel:8555591700" className="underline">
            855-559-1700
          </a>
        </p>
        <Link
          href="/quote"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Get a Free Quote
        </Link>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Related resources
        </h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/services/best-and-cheapest-medicare-supplement"
              className="text-blue-600 hover:underline"
            >
              Best Medicare Supplement Plans for 2026
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medigap Plan G vs. Plan N: Which Saves You More?
            </Link>
          </li>
          <li>
            <Link
              href="/services/you-get-a-medicare-supplement-plan-if-you-have-a-pre-existing-condition"
              className="text-blue-600 hover:underline"
            >
              Guaranteed-Issue Medigap Rights Explained
            </Link>
          </li>
          <li>
            <Link
              href="/learn/medicare-parts-explained"
              className="text-blue-600 hover:underline"
            >
              Medicare Part D Prescription Coverage Guide
            </Link>
          </li>
        </ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/health-drug-plans/medigap" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">Medicare.gov Medigap basics</a> and <a href="https://www.medicare.gov/coverage/infusion-pumps-supplies" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">Medicare Part B infusion coverage</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free one-on-one Medicare counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free one-on-one counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/dobi/division_consumers/insurance/ship.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For free local counseling, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/dobi/division_insurance/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/shipindex.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific help, contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/shipindex.htm" rel="noopener noreferrer" target="_blank" className="underline">New Jersey State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free local counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">New Jersey State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
      </section>
    </main>
  );
}