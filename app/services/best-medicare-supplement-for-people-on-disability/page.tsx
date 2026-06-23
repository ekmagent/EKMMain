import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "best medicare supplement for people on disability | Free Plan Review | MedicareYourself",
  description:
    "Best Medicare Supplement for people on disability: compare state rules, plan letters, and pricing. Call 855-559-1700 for free licensed broker help.",
  alternates: { canonical: "https://medicareyourself.com/services/best-medicare-supplement-for-people-on-disability" },
  openGraph: {
    title:
      "best medicare supplement for people on disability | Free Plan Review | MedicareYourself",
    description:
      "Best Medicare Supplement for people on disability — which states guarantee under-65 access and which plan letters offer the strongest value. Free help.",
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
      name: "Best Medicare Supplement for People on Disability",
      item: "https://medicareyourself.com/services/best-medicare-supplement-for-people-on-disability",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Best Medicare Supplement for People on Disability: Plans, Pricing, and Eligibility",
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
    "https://medicareyourself.com/services/best-medicare-supplement-for-people-on-disability",
};

const faqs = [
  {
    question: "Can someone on disability get a Medicare Supplement?",
    answer:
      "Yes, but access depends on your state. Some states require Medigap carriers to sell supplement plans to disabled Medicare beneficiaries under 65. In states without those protections, carriers can deny coverage or charge significantly higher premiums. Call us at 855-559-1700 and we'll check your state's rules for free.",
  },
  {
    question:
      "How long do I wait for Medicare after being approved for disability?",
    answer:
      "You'll receive Medicare Part A and Part B automatically after 24 months of receiving Social Security Disability Insurance (SSDI) benefits. The 24-month clock starts from your disability entitlement date, not the date you applied.",
  },
  {
    question:
      "Is Medicare Advantage or a Medigap plan better for someone on disability?",
    answer:
      "It depends on your health needs and budget. Medigap plans cover more out-of-pocket costs and let you see any Medicare-accepting doctor. Medicare Advantage plans often include dental, vision, and drug coverage but use provider networks. If you see many specialists, a supplement typically offers more flexibility.",
  },
  {
    question: "Why are Medigap premiums higher for people under 65?",
    answer:
      "Carriers price under-65 Medigap policies separately from the 65+ pool. Fewer people are in the under-65 risk group, and medical costs for disability beneficiaries tend to be higher. This means premiums can be two to three times what a 65-year-old would pay for the same plan letter.",
  },
,
  {
    question: "Do I get a Medigap Open Enrollment Period when I turn 65 if I already had Medicare on disability?",
    answer:
      "Yes. Even if you've had Medicare for years due to disability, you get a fresh six-month Medigap Open Enrollment Period when you turn 65. During that window, carriers must sell you any Medigap plan they offer at their best available rate regardless of your health history. This is often the best opportunity to switch into a more affordable supplement.",
  },
  {
    question: "Which Medigap plan letters are typically available to people under 65 on disability?",
    answer:
      "Plan availability for under-65 beneficiaries depends entirely on state law and carrier participation. In states with under-65 protections, Plan A is the most commonly required offering, though some states mandate broader access including Plans G and N. Call 855-559-1700 and we'll confirm which plan letters are available to you in your state.",
  }
,
  {
    question: "Which Medigap plan letter is most popular for disability beneficiaries under 65?",
    answer:
      "Plan G and Plan N are the most commonly chosen letters for under-65 enrollees in states that guarantee access, because they offer comprehensive coverage of Medicare cost-sharing. Plan A is the minimum benefit package every Medigap carrier must offer to those eligible. The right choice depends on your state's rules, your budget, and how often you expect to use care.",
  },
  {
    question: "Will my Medigap premium drop when I turn 65?",
    answer:
      "In most cases, yes. When you turn 65, you receive a new six-month Medigap Open Enrollment Period and can switch to a 65+ rated policy, which is typically priced much lower than under-65 rates. This is true even if you've had Medicare for years due to disability.",
  },
  {
    question: "Does Medicare cover prescription drugs for people on disability?",
    answer:
      "Original Medicare (Parts A and B) does not include outpatient prescription drug coverage. Disability beneficiaries can enroll in a standalone Part D plan alongside a Medigap policy, or choose a Medicare Advantage plan that bundles drug coverage. We can help you compare both routes at 855-559-1700.",
  }
,
  {
    question: "Which Medigap plan letter is most popular for people on disability?",
    answer:
      "Plan G and Plan N are commonly chosen because they offer broad coverage of out-of-pocket costs after the Part B deductible. For people under 65, availability and pricing vary widely by state and carrier. We can review which plan letters carriers in your state actually sell to disability beneficiaries — call 855-559-1700.",
  }
,
  {
    question: "Which Medigap plan letter is most popular for people on disability?",
    answer:
      "Plan G and Plan N are commonly chosen for their balance of coverage and cost. Plan G covers nearly all out-of-pocket costs except the Part B deductible, while Plan N has slightly lower premiums in exchange for small copays at doctor visits. The right choice depends on your state's pricing and your expected use of care. Call 855-559-1700 for a free comparison.",
  }
,
  {
    question: "Which states require Medigap carriers to sell to people under 65 on disability?",
    answer:
      "A number of states have laws requiring at least some Medigap plans to be offered to disabled beneficiaries under 65, but the rules and plan letters available vary widely by state. Some states only mandate access to certain plan letters, while others limit how carriers can price the policies. Call 855-559-1700 and we'll confirm what's available where you live.",
  },
  {
    question: "Can I switch from Medicare Advantage to a Medigap plan if I'm under 65 on disability?",
    answer:
      "You can apply to switch, but outside of a guaranteed-issue period the carrier may use medical underwriting and could decline your application or charge higher premiums. State protections sometimes allow disabled beneficiaries a one-time chance to enroll without underwriting. We can review your situation and timing at no cost.",
  },
  {
    question: "Does a Medigap plan cover prescription drugs for people on disability?",
    answer:
      "No. Medigap plans sold today do not include prescription drug coverage. If you want drug coverage alongside a Medicare Supplement, you'll need to enroll in a standalone Medicare Part D plan.",
  }
,
  {
    question: "Which Medigap plan letter is usually best for someone on disability?",
    answer:
      "Plan G is often considered the strongest value because it covers nearly all Medicare-approved out-of-pocket costs except the Part B deductible. Plan N is a lower-premium option that still offers solid coverage but includes small copays for some office and ER visits. The right choice depends on your state's under-65 rules and how predictable you want your costs to be.",
  },
  {
    question: "Can I switch from Medicare Advantage to a Medigap plan while on disability?",
    answer:
      "You can apply to switch, but outside of a guaranteed issue period, the Medigap carrier can use medical underwriting and may decline you or charge more. Some states offer annual open enrollment windows or birthday rules that let under-65 beneficiaries change plans without underwriting. Call 855-559-1700 and we'll check what's available in your state.",
  },
  {
    question: "Do I have to wait 24 months for Medicare if I have ALS or ESRD?",
    answer:
      "No. People diagnosed with ALS (Lou Gehrig's disease) become eligible for Medicare the same month their SSDI benefits begin, with no 24-month waiting period. Those with End-Stage Renal Disease (ESRD) follow a separate eligibility timeline tied to dialysis or transplant.",
  }
,
  {
    question: "Do all Medigap carriers sell plans to people under 65 on disability?",
    answer:
      "No. Federal law does not require carriers to offer Medigap to beneficiaries under 65. Availability depends on your state's rules and each carrier's underwriting guidelines. We can check which carriers actively sell to under-65 disability beneficiaries in your state.",
  }
,
  {
    question: "Which Medigap plan letter is most popular for people on disability?",
    answer:
      "Plan G is often considered a strong value because it covers most out-of-pocket costs after the Part B deductible. Plan N is another option with lower premiums in exchange for small copays at office visits and emergency rooms. The best choice depends on your state's pricing, your health needs, and what carriers offer to under-65 beneficiaries in your area.",
  }
,
  {
    question: "When can I enroll in a Medigap plan if I'm on disability?",
    answer:
      "Federal law guarantees a six-month Medigap Open Enrollment Period that begins when you're 65 or older and enrolled in Part B. For people under 65 on disability, federal law does not guarantee this enrollment window, but many states have their own rules requiring carriers to offer at least one Medigap plan to disabled beneficiaries. Call 855-559-1700 to confirm what's available in your state.",
  },
  {
    question: "Which Medigap plan letter is most popular for people on disability?",
    answer:
      "Plan G is often the most comprehensive option available to people on disability in states that allow under-65 enrollment, covering nearly all Medicare-approved out-of-pocket costs except the Part B deductible. Plan N is another popular choice for those who want lower premiums and are willing to pay small copays at the doctor's office. The best fit depends on your state's available carriers and your expected healthcare use.",
  }
,
  {
    question: "Which Medigap plan letter is typically best for someone on disability?",
    answer:
      "Plan G and Plan N are often the most popular choices because they cover most out-of-pocket costs after the Part B deductible. Plan G offers the most comprehensive coverage available to newly eligible beneficiaries, while Plan N has lower premiums in exchange for small copays at office and ER visits. The right letter depends on your budget and how often you use care.",
  },
  {
    question: "Can I switch from Medicare Advantage to a Medigap plan while on disability?",
    answer:
      "You can apply to switch, but outside of a guaranteed issue right, carriers in most states can use medical underwriting to approve or deny your application when you're under 65. A few states offer broader switching protections for disabled beneficiaries. Call 855-559-1700 and we'll review your state's rules before you make a change.",
  },
  {
    question: "Does a Medigap plan cover prescription drugs if I'm on disability?",
    answer:
      "No. Medigap plans sold today do not include prescription drug coverage. You'll need a standalone Medicare Part D plan to cover medications, and we can help you compare Part D options alongside your supplement at no cost.",
  }
];

export default function BestMedicareSupplementForPeopleOnDisability() {
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
        <span>Best Medicare Supplement for People on Disability</span>
      </nav>

      <article className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Best Medicare Supplement for People on Disability: Plans, Pricing, and Eligibility
        </h1>

        <Image
          src="/images/best-medicare-supplement-for-people-on-disability.webp"
          alt="best medicare supplement for people on disability"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Best medicare supplement for people on disability isn't one-size-fits-all. Your state, your age, and your specific health needs determine which plan letter you can actually get and what you'll pay for it.
        </p>
        <p className="text-lg mb-6">
          If you're under 65 on SSDI, you already know the system wasn't designed with you in mind. Let's fix that.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why under-65 Medigap access depends entirely on your state
          </h2>
          <p className="mb-3">
            Federal law guarantees Medigap Open Enrollment for people turning 65. It does not guarantee that same protection for disabled beneficiaries under 65. That gap is massive.
          </p>
          <p>
            Each state decides whether insurers must sell Medigap plans to disabled Medicare recipients. Some states require it. Others leave you completely exposed to medical underwriting, higher rates, or flat-out denial.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            States that guarantee supplement access for disabled beneficiaries
          </h2>
          <p className="mb-3">
            Roughly half of states have some form of protection for under-65 Medigap buyers. The strength of those protections varies widely:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-3">
            <li>Some states require all carriers to offer at least one plan to disabled beneficiaries.</li>
            <li>Others guarantee issue rights but only during a specific enrollment window after your Part B starts.</li>
            <li>A few states allow carriers to charge higher premiums for under-65 applicants even when they must sell to you.</li>
          </ul>
          <p>
            Rules vary by state. Call us at 855-559-1700 and we'll confirm exactly what your state requires.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Plan G vs. Plan N for younger Medicare recipients on SSDI
          </h2>
          <p className="mb-3">
            For most disabled beneficiaries, Plan G and Plan N offer the strongest value. Here's the real difference:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-3">
            <li><strong>Plan G</strong> covers everything except the Part B deductible ($283/year in 2026). No copays, no surprise bills. You see any doctor who accepts Medicare.</li>
            <li><strong>Plan N</strong> has lower monthly premiums but charges up to $20 copays for office visits and up to $50 for ER visits that don't result in admission.</li>
          </ul>
          <p>
            If you see multiple specialists regularly, Plan G often saves more in the long run. If your visits are predictable and infrequent, Plan N's lower premium may work.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How to find affordable coverage when premiums are higher under 65
          </h2>
          <p className="mb-3">
            Under-65 Medigap premiums can run two to three times higher than what someone at 65 pays. That's a hard reality when you're living on $1,400-$1,800/month in SSDI.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Check if your state's Medicaid program (like a Medicare Savings Program) will pay your Part B premium of $202.90/month. That frees up cash for a supplement.</li>
            <li>Compare at least five carriers. Rates for the same plan letter can differ by $100+/month.</li>
            <li>Ask about household or payment-mode discounts. Small savings add up on a fixed income.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What about Medicare Advantage instead of a supplement?
          </h2>
          <p className="mb-3">
            If your state doesn't guarantee Medigap access or if the premiums are out of reach, a Medicare Advantage plan is worth considering. Many Advantage plans include dental, vision, and drug coverage with $0 premiums.
          </p>
          <p>
            Special Needs Plans (SNPs) exist specifically for people with chronic conditions or dual Medicare-Medicaid eligibility. They coordinate care around your conditions, which matters when you're managing multiple specialists.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Don't choose a plan when you're overwhelmed
          </h2>
          <p className="mb-3">
            Getting disability approval is exhausting. Learning Medicare on top of managing chronic pain, fatigue, or flare-ups is a lot. You don't have to figure this out alone at midnight the day before a deadline.
          </p>
          <p>
            We review your state's rules, compare carriers, and walk you through the real costs. No pressure. Just the facts you need to make a decision that fits your life right now.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-6 mb-10 text-center">
          <p className="text-xl font-semibold mb-2">
            Free plan review for disabled Medicare beneficiaries
          </p>
          <p className="mb-4">
            Call{" "}
            <a href="tel:855-559-1700" className="underline font-bold">
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
                href="/services/compare-and-enroll-in-plan-g-online"
                className="text-blue-600 hover:underline"
              >
                Medicare Supplement Plan G: What It Covers and Costs
              </Link>
            </li>
            <li>
              <Link
                href="/services/quickest-way-to-enroll-into-plan-n"
                className="text-blue-600 hover:underline"
              >
                Medicare Supplement Plan N: Is the Lower Premium Worth It?
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-supplement/new-jersey/vs-medicare-advantage"
                className="text-blue-600 hover:underline"
              >
                Medicare Advantage vs. Medigap: How to Decide
              </Link>
            </li>
            <li>
              <Link
                href="/learn/medicare-help-low-income"
                className="text-blue-600 hover:underline"
              >
                Medicare Savings Programs: Help Paying Your Part B Premium
              </Link>
            </li>
                      <li>
              <Link
                href="/services/you-get-a-medicare-supplement-if-you-are-on-disability"
                className="text-blue-600 hover:underline"
              >
                You Get A Medicare Supplement If You Are On Disability
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
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/health-drug-plans/medigap" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">Medicare.gov — Medigap (Medicare Supplement) Plans</a> and <a href="https://www.medicare.gov/basics/get-started-with-medicare/medicare-basics/medicare-for-people-under-65" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">Medicare for People Under 65 with Disabilities</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific help, contact your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Find your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Find your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific help, contact your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific Medigap rules, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free, unbiased counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free local Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">State help: find your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free one-on-one Medicare counseling in your state.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling in your state.</div>
            <div className="text-sm text-gray-600 mt-4">State help: <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">Find your State Health Insurance Assistance Program (SHIP)</a> for free, local Medicare counseling tailored to disability beneficiaries.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific Medigap rules, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free local counseling.</div>
            <div className="text-sm text-gray-600 mt-4">State help: Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling in your state.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free local counseling on disability Medigap rules.</div>
            <div className="text-sm text-gray-600 mt-4">For free state-specific counseling on Medigap rules for people under 65, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific Medigap rules and free counseling, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific Medigap rules and free counseling, visit your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Free state counseling: <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">Find your local SHIP program</a> for unbiased Medicare guidance in your state.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific guidance? Contact your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Get free unbiased help from your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a> to confirm under-65 Medigap rules where you live.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Contact your <a href="https://www.shiphelp.org/about-medicare/regional-ship-location" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific guidance, contact your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Find your local SHIP counselor at <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">shiphelp.org</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Contact your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific Medigap rules and free counseling, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For free one-on-one help in your state, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific help, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific help, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">local SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific help, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific guidance, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific Medigap rules, contact your <a href="https://www.shiphelp.org/about-medicare/regional-ship-location" rel="noopener noreferrer" target="_blank" className="underline">local SHIP counselor</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">State help: Find your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">SHIP counselor</a> for free, unbiased Medicare guidance in your state.</div>
      </section>
      </article>
    </>
  );
}