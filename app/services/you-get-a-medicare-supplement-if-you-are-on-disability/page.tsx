import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "you get a medicare supplement if you are on disability | Free Guide | MedicareYourself",
  description:
    "On SSDI and under 65? Many states guarantee your right to a Medigap plan. Compare options with a licensed broker — call 855-559-1700 for free help today.",
  alternates: { canonical: "https://medicareyourself.com/services/you-get-a-medicare-supplement-if-you-are-on-disability" },
  openGraph: {
    title:
      "you get a medicare supplement if you are on disability | Free Guide | MedicareYourself",
    description:
      "You get a Medicare Supplement if you are on disability, but rules vary by state. Learn which plans accept under-65 enrollees and how to apply. Free help.",
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
      name: "Medicare Supplement on Disability",
      item: "https://medicareyourself.com/services/you-get-a-medicare-supplement-if-you-are-on-disability",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "You Get a Medicare Supplement if You Are on Disability — Here's How It Works State by State",
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
  dateModified: "2026-03-19",
};

const faqs = [
  {
    question:
      "Can I buy a Medigap plan if I'm under 65 and on disability?",
    answer:
      "Yes, but it depends on your state. There is no federal law requiring insurers to sell Medigap to disabled beneficiaries under 65. However, more than 30 states have laws that require or encourage Medigap access for disabled Medicare enrollees. Call us at 855-559-1700 to check your state's rules.",
  },
  {
    question:
      "How long after SSDI approval do I get Medicare?",
    answer:
      "You become eligible for Medicare after 24 months of receiving Social Security Disability Insurance (SSDI) payments. Part A is typically premium-free if you worked 10+ years. Part B costs $202.90/month in 2026.",
  },
  {
    question:
      "Is a Medicare Supplement or Medicare Advantage better for someone on disability?",
    answer:
      "Both are options, but they work differently. A Medigap plan covers cost-sharing gaps with Original Medicare and lets you see any doctor who accepts Medicare. Medicare Advantage uses networks and may include extra benefits like dental or vision. The best choice depends on your health needs and budget.",
  },
  {
    question:
      "Will my Medigap premium be higher because I'm under 65?",
    answer:
      "In most states, yes. Carriers typically charge higher premiums for under-65 disabled enrollees. Rates vary significantly by carrier and state, so comparing plans is critical. Call 855-559-1700 for free rate comparisons.",
  },

  {
    question: "Does Medicare automatically enroll me after 24 months of SSDI?",
    answer:
      "Yes. If you have received Social Security Disability Insurance for 24 months, you are automatically enrolled in Medicare Parts A and B in the 25th month. Your red, white, and blue Medicare card arrives in the mail about three months before coverage begins. You can choose to keep or drop Part B if you have other coverage.",
  },
  {
    question: "Do I get a Medigap Open Enrollment Period when I turn 65?",
    answer:
      "Yes. Even if you already had Medicare under 65 due to disability, you get a fresh 6-month Medigap Open Enrollment Period starting the month you turn 65 and are enrolled in Part B. During this window, you have guaranteed issue rights and cannot be denied coverage or charged more for health reasons.",
  },
  {
    question: "What happens to my Medigap options when I turn 65?",
    answer:
      "When you turn 65, you get a new Medigap Open Enrollment Period. During this six-month window starting the month you turn 65 and are enrolled in Part B, you can buy any Medigap plan sold in your state with no medical underwriting. Premiums typically drop significantly compared to under-65 disability rates.",
  },
  {
    question: "Does End-Stage Renal Disease (ESRD) qualify me for Medicare before 65?",
    answer:
      "Yes. People with ESRD requiring dialysis or a kidney transplant can qualify for Medicare at any age. ALS (Lou Gehrig's disease) also qualifies you for Medicare immediately once SSDI benefits begin, without the 24-month waiting period.",
  },
  {
    question: "Can I switch from Medicare Advantage to a Medigap plan while on disability?",
    answer:
      "You can try, but approval depends on your state's rules and medical underwriting. Some states offer guaranteed-issue rights for disabled enrollees switching plans, while others let carriers decline coverage based on health history. Call 855-559-1700 and we'll review your specific situation.",
  }
,
  {
    question: "What happens to my Medigap rates when I turn 65?",
    answer:
      "When you turn 65, you get a new Medigap Open Enrollment Period that lasts six months. During this window, you can apply for any Medigap plan in your state at standard age-65 rates without medical underwriting. Many disabled enrollees use this opportunity to switch to a lower-priced plan.",
  },
  {
    question: "Can I be denied a Medigap plan because of my health if I'm under 65?",
    answer:
      "In states without guaranteed-issue protections for disabled enrollees, carriers can use medical underwriting and may decline your application based on health history. In states with under-65 Medigap protections, you typically have guaranteed-issue rights during certain windows. Call 855-559-1700 to confirm what applies in your state.",
  }
,
  {
    question: "What happens to my Medigap plan when I turn 65?",
    answer:
      "When you turn 65, you get a second Medigap Open Enrollment Period. This means you can switch to any Medigap plan with any carrier without medical underwriting. Many under-65 disabled enrollees use this milestone to lower their premiums by re-shopping their coverage.",
  }
,
  {
    question: "What if my state doesn't guarantee Medigap access for under-65 disabled enrollees?",
    answer:
      "If your state doesn't require carriers to sell Medigap to disabled beneficiaries under 65, you may still find a carrier willing to offer coverage voluntarily, though premiums may be higher. You can also enroll in a Medicare Advantage plan as an alternative. When you turn 65, you'll get a fresh Medigap Open Enrollment Period with guaranteed issue rights. Call 855-559-1700 to review your options.",
  }
,
  {
    question: "Can I switch Medigap plans later when I turn 65?",
    answer:
      "Yes. When you turn 65, you get a brand-new Medigap Open Enrollment Period that lasts six months and starts the month your Part B coverage begins under your age-65 eligibility. During this window, you can buy any Medigap plan sold in your state with guaranteed issue rights, regardless of health history. This is often a great opportunity to lower your premium.",
  }
,
  {
    question: "Do I have a Medigap Open Enrollment Period when I turn 65, even if I already had Medicare due to disability?",
    answer:
      "Yes. In most states, you get a fresh six-month Medigap Open Enrollment Period when you turn 65, regardless of whether you were already enrolled in Medicare due to disability. During this window, insurers cannot deny you coverage or charge more based on health. This is often the best opportunity to switch to a more affordable Medigap plan.",
  }
,
  {
    question: "Can I switch from Medicare Advantage to a Medigap plan when I turn 65?",
    answer:
      "Yes. When you turn 65, you typically get a new six-month Medigap Open Enrollment Period, even if you already had Medicare due to disability. During this window, insurers cannot deny you coverage or charge more based on health. This is often the best time for under-65 disability enrollees to lock in better Medigap rates.",
  },
  {
    question: "Do I qualify for Extra Help with prescription drug costs if I'm on SSDI?",
    answer:
      "You may qualify for the Extra Help (Low Income Subsidy) program if your income and resources fall below federal limits. This program helps pay Part D premiums, deductibles, and copays. You can apply through the Social Security Administration at ssa.gov or by calling our team for guidance.",
  },
  {
    question: "What happens to my Medigap plan when I turn 65?",
    answer:
      "When you turn 65, you generally gain a fresh Medigap Open Enrollment Period regardless of your disability status. This lets you shop for new plans at standard age-65 rates, which are often lower than under-65 disability rates. Call 855-559-1700 before your 65th birthday to compare options.",
  }
,
  {
    question: "What is the 24-month Medicare waiting period for SSDI?",
    answer:
      "If you qualify for Social Security Disability Insurance, you generally must wait 24 months from your SSDI entitlement date before Medicare coverage begins. Medicare Parts A and B start automatically in the 25th month. People with ALS or End-Stage Renal Disease may qualify sooner without the waiting period.",
  },
  {
    question: "Can I switch from Medicare Advantage to Medigap if I'm under 65 and disabled?",
    answer:
      "It depends on your state's protections and the timing of your request. Some states grant guaranteed issue rights to disabled enrollees during specific windows, while others allow carriers to medically underwrite or decline coverage. Call 855-559-1700 to review your state's rules and switching options.",
  },
  {
    question: "Do I get a second Medigap open enrollment when I turn 65?",
    answer:
      "Yes. Even if you already had Medicare due to disability, you receive a fresh six-month Medigap Open Enrollment Period starting the month you turn 65 and are enrolled in Part B. During this window, you can buy any Medigap plan sold in your state without medical underwriting.",
  }
];

export default function MedicareSupplementDisabilityPage() {
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
        <span className="text-gray-700">Medicare Supplement on Disability</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
        You Get a Medicare Supplement if You Are on Disability — Here's How It
        Works State by State
      </h1>

      <Image
        src="/images/you-get-a-medicare-supplement-if-you-are-on-disability.webp"
        alt="you get a medicare supplement if you are on disability"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        You get a Medicare Supplement if you are on disability, but whether a
        carrier must sell you one depends entirely on where you live. Federal law
        does not require Medigap insurers to cover disabled beneficiaries under
        65. Your state fills that gap, or it doesn't.
      </p>
      <p className="text-lg mb-6">
        That's the part most people don't find out until they've already been
        denied. Let's fix that.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Medigap rights for disabled Medicare beneficiaries under 65
        </h2>
        <p className="mb-3">
          After 24 months on SSDI, you're automatically enrolled in Medicare
          Parts A and B. Part A is usually premium-free. Part B costs $202.90/month
          in 2026. But Original Medicare still leaves real gaps: the $1,676 Part A
          deductible, 20% coinsurance on outpatient care, and skilled nursing
          facility costs up to $209.50/day after day 20.
        </p>
        <p>
          A Medigap (Medicare Supplement) plan covers those gaps. The catch: the
          federal 6-month open enrollment guarantee only kicks in at age 65. If
          you're under 65 on disability, your access to Medigap depends on state
          law.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Which states guarantee supplement access on disability
        </h2>
        <p className="mb-3">
          Over 30 states require insurers to offer at least some Medigap plans to
          disabled Medicare beneficiaries under 65. The protections vary widely:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-3">
          <li>
            Some states mandate full guaranteed issue for all standardized plans.
          </li>
          <li>
            Others limit access to Plans A and B, or only certain carriers.
          </li>
          <li>
            A handful of states have no protections at all for under-65 enrollees.
          </li>
        </ul>
        <p>
          Rules change. If you're unsure about your state, call us at{" "}
          <strong>855-559-1700</strong> and we'll confirm what's available to you
          right now.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          New Jersey and Pennsylvania rules for disabled enrollees
        </h2>
        <p className="mb-3">
          New Jersey requires Medigap carriers to offer coverage to disabled
          Medicare beneficiaries under 65 during a guaranteed issue period when
          they first enroll in Part B. This is a real advantage. Not every state
          gives you that window.
        </p>
        <p>
          Pennsylvania also has protections, though the available plan options and
          pricing differ. In both states, premiums for under-65 enrollees tend to
          run higher than for 65+ applicants. Comparing carriers matters because
          the rate spread can be significant.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          How to apply for a Medigap plan while on SSDI
        </h2>
        <p className="mb-3">
          Timing is everything. In states with guaranteed issue for disabled
          enrollees, your window usually opens when your Part B coverage starts.
          Miss it and you may face medical underwriting or outright denial.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Know exactly when your Part B effective date is.</li>
          <li>Apply during your state's guaranteed issue window if one exists.</li>
          <li>Compare at least 3-4 carriers. Premiums vary widely for under-65 applicants.</li>
          <li>If your state has no protections, consider a Medicare Advantage plan as an alternative.</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Why premiums are higher under 65 and what to expect
        </h2>
        <p className="mb-3">
          Plan G for a 40-year-old on disability can cost $250 to $400/month or
          more, compared to $100 to $200 for a 65-year-old in the same zip code.
          Carriers price the risk differently. Some are far more competitive for
          under-65 enrollees than others.
        </p>
        <p>
          That $200/month difference between carriers? On a fixed SSDI income,
          it's groceries. It's a utility bill. This is why working with a broker
          who knows the under-65 market matters.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare Advantage as an alternative for disabled beneficiaries
        </h2>
        <p className="mb-3">
          If Medigap isn't available or affordable in your state, a Medicare
          Advantage plan is your other option. Many MA plans charge $0 premiums
          beyond your Part B cost and include dental, vision, and hearing.
        </p>
        <p>
          The tradeoff: you'll use a provider network and deal with prior
          authorizations. For someone seeing multiple specialists, that can be a
          real consideration. We help you weigh both sides honestly.
        </p>
      </section>

      <section className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
        <p className="text-xl font-bold mb-2">
          Need help finding a Medigap plan on disability?
        </p>
        <p className="mb-4">
          Call{" "}
          <a
            href="tel:8555591700"
            className="underline font-semibold text-white"
          >
            855-559-1700
          </a>{" "}
          for free, no-pressure guidance from a licensed broker.
        </p>
        <Link
          href="/quote"
          className="inline-block bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
        >
          Get a Free Quote
        </Link>
      </section>

      <section className="mt-12">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-3">
          <li>
            <Link
              href="/services/best-medicare-supplement-for-people-on-disability"
              className="text-blue-600 hover:underline"
            >
              Medigap Plans for People Under 65
            </Link>
          </li>
          <li>
            <Link
              href="/services/compare-and-enroll-in-plan-g-online"
              className="text-blue-600 hover:underline"
            >
              Medicare Plan G: What It Covers and Costs in 2026
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
              href="/services/you-get-a-medicare-supplement-if-you-are-on-disability"
              className="text-blue-600 hover:underline"
            >
              SSDI and Medicare Enrollment: Timeline and Steps
            </Link>
          </li>
                    <li>
              <Link
                href="/services/medicare-broker-for-people-on-disability"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For People On Disability
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
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/basics/get-started-with-medicare/medicare-basics/people-under-65-with-disabilities" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">Medicare.gov — People Under 65 With Disabilities</a> and <a href="https://www.medicare.gov/health-drug-plans/medigap" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">Medicare.gov — Medigap Basics</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Contact your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Find your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific guidance? Find your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific rules on under-65 Medigap access, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a> for free, unbiased counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific rules, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a> for free local counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: see the <a href="https://www.nj.gov/dobi/division_insurance/medsuppunder50/intro.html" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance — Medicare Supplement Under 50 Program</a> for state-specific protections.</div>
            <div className="text-sm text-gray-600 mt-4">State help: <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">Find your local SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling in your state.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Find your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free counseling on Medigap rules for under-65 enrollees.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Find your local <a href="https://www.shiphelp.org/about-medicare/regional-ship-location" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">local State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">local SHIP counselor</a> for free Medicare guidance in your state.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific guidance? Contact your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific guidance? Find your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific Medigap rules, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free local counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific Medigap rules and free counseling, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific Medigap rules for under-65 enrollees, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free local counseling.</div>
            <div className="text-sm text-gray-600 mt-4">State help: <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">Find your local SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific Medigap rules, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a> for free, unbiased counseling.</div>
            <div className="text-sm text-gray-600 mt-4">State help: contact your <a href="https://www.shiphelp.org/about-medicare/regional-ship-location" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a> for free local Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific help, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Find your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Find your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling in your state.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific Medigap rules, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">local SHIP (State Health Insurance Assistance Program)</a> for free, unbiased counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific Medigap rules, contact your <a href="https://www.shiphelp.org/about-medicare/regional-ship-location" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">State Health Insurance Assistance Program (SHIP)</a> for free local counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific guidance, contact your <a href="https://www.shiphelp.org/about-medicare/regional-ship-location" rel="noopener noreferrer" target="_blank" className="underline">local SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Contact your <a href="https://www.shiphelp.org/about-medicare/regional-ship-location" rel="noopener noreferrer" target="_blank" className="underline">local SHIP counselor</a> for free, unbiased Medicare guidance in your state.</div>
            <div className="text-sm text-gray-600 mt-4">State help: Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling specific to your state's Medigap rules for under-65 enrollees.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Find your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific Medigap rules and free counseling, contact your <a href="https://www.shiphelp.org/about-medicare/regional-ship-location" rel="noopener noreferrer" target="_blank" className="underline">local SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Find your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free local Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Find your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific help, contact your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific guidance? Find your free counselor at <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific Medigap rules? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free local counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific Medigap rules, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free local counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free local Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling in your area.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific Medigap rules, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free, unbiased counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific Medigap rules, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific help, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">local State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a> for free local counseling on Medigap rules where you live.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">local SHIP counselor</a> for free, unbiased Medicare guidance.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific Medigap rules for under-65 enrollees, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free local counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Find your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">SHIP counselor</a> for free, unbiased Medicare guidance in your state.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific Medigap rules on disability, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a> for free local counseling.</div>
      </section>

      <p className="text-sm text-gray-500 mt-10">
        Written by Anthony Orner, Licensed Medicare Broker | EasyKind Medicare |
        Last updated July 2025
      </p>
    </main>
  );
}