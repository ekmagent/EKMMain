import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for Parkinson's patients | Free Plan Review | MedicareYourself",
  description:
    "Medicare broker for Parkinson's patients — compare Part D, DBS coverage, and specialist access. Free plan review with Anthony Orner. Call 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-parkinsons-patients" },
  openGraph: {
    title:
      "Medicare broker for Parkinson's patients | Free Plan Review | MedicareYourself",
    description:
      "Medicare broker for Parkinson's patients needing specialist access, therapy coverage, and the right drug plan. Anthony Orner reviews your options free.",
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
      name: "Medicare Broker for Parkinson's Patients",
      item: "https://medicareyourself.com/services/medicare-broker-for-parkinsons-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Parkinson's Patients — A Plan That Fights as Hard as You Do",
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
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. I'm paid by the insurance carriers, not by you. My plan reviews, comparisons, and enrollment help are completely free. You get the same premiums you'd find on your own, plus someone who understands Parkinson's-specific coverage needs.",
  },
  {
    question: "Can I get Medicare if I have Parkinson's?",
    answer:
      "Yes. If you're 65 or older, you qualify for Medicare regardless of pre-existing conditions. If you're under 65 with Parkinson's, you may qualify through Social Security Disability after a 24-month waiting period. Original Medicare covers Parkinson's treatments including medications, specialist visits, therapies, and deep brain stimulation when medically necessary.",
  },
  {
    question: "Does Medicare cover deep brain stimulation (DBS) surgery?",
    answer:
      "Medicare covers DBS when it's deemed medically necessary and performed at a Medicare-approved facility. You'll typically need documentation showing that medication alone isn't controlling symptoms adequately. Under Original Medicare with a Supplement, your out-of-pocket cost can be minimal. Under Advantage plans, check the plan's prior authorization requirements and specialist network carefully.",
  },
  {
    question:
      "What should Parkinson's patients look for in a Part D drug plan?",
    answer:
      "Look for a plan that covers your specific medications, especially carbidopa-levodopa combinations, at a low tier. Some patients take 15-20 pills a day across multiple prescriptions. Even small copay differences per fill add up fast. I run your full medication list through every available plan to find the lowest annual cost.",
  },
,
  {
    question: "Does Medicare cover physical, occupational, and speech therapy for Parkinson's?",
    answer:
      "Yes. Medicare Part B covers medically necessary outpatient physical therapy, occupational therapy, and speech-language pathology services when prescribed by your doctor. These therapies are commonly used to help Parkinson's patients maintain mobility, daily function, and communication. After you meet the Part B deductible, you typically pay coinsurance unless you have a Supplement that covers it.",
  },
  {
    question: "Is Medicare Advantage or Medigap better for Parkinson's patients?",
    answer:
      "It depends on your priorities. A Medicare Supplement (Medigap) plan paired with Original Medicare gives you nationwide access to any provider that accepts Medicare and predictable out-of-pocket costs, which matters when you see movement disorder specialists. Medicare Advantage plans often include extras but use networks and prior authorizations that can affect specialist access and DBS approvals. I'll walk you through both based on your doctors and medications.",
  },
  {
    question: "Can I switch Medicare plans if my Parkinson's medications change?",
    answer:
      "Yes, during the Annual Enrollment Period each fall (October 15 to December 7), you can change your Part D or Medicare Advantage plan for the following year. There's also a Medicare Advantage Open Enrollment Period in early spring. If your medication list has changed, it's worth re-running your plan comparison every year to make sure your drugs are still covered at the lowest tier.",
  }
,
  {
    question: "Should Parkinson's patients choose Original Medicare with a Supplement or a Medicare Advantage plan?",
    answer:
      "It depends on your priorities. Original Medicare with a Medigap policy gives you nationwide access to any provider who accepts Medicare, which matters if you see a movement disorder specialist out of state. Medicare Advantage plans may offer extra benefits but use networks and prior authorization, which can complicate access to specialists and DBS surgery. I'll walk you through the trade-offs based on your doctors and medications.",
  },
  {
    question: "Will Medicare cover a movement disorder specialist?",
    answer:
      "Yes. Medicare Part B covers visits to neurologists and movement disorder specialists when they accept Medicare. Under Original Medicare you can see any participating specialist without a referral. Under Medicare Advantage you typically need the specialist to be in-network and may need a referral from your primary care doctor.",
  }
,
  {
    question: "Should Parkinson's patients choose Original Medicare with a Supplement or Medicare Advantage?",
    answer:
      "It depends on your priorities. Original Medicare paired with a Medigap plan offers broad access to any provider that accepts Medicare, which matters when you need movement disorder specialists who may be out of network on Advantage plans. Medicare Advantage may offer lower premiums and extra benefits like transportation, but requires staying within networks and following prior authorization rules for therapies and DBS. I walk through both side by side for your situation.",
  },
  {
    question: "Will Medicare cover a movement disorder specialist outside my local area?",
    answer:
      "Under Original Medicare, you can see any neurologist or movement disorder specialist nationwide who accepts Medicare assignment. Under Medicare Advantage, coverage is usually limited to the plan's network, and out-of-area specialists may require referrals or be considered out-of-network. This is a key reason many Parkinson's patients prefer Original Medicare plus a Supplement.",
  }
,
  {
    question: "Will Medicare cover a neurologist who specializes in movement disorders?",
    answer:
      "Yes. Original Medicare lets you see any neurologist who accepts Medicare, with no referral required. Medicare Advantage plans usually restrict you to in-network specialists and may require a referral from your primary care doctor. If you have a movement disorder specialist you want to keep, I verify network status before recommending any plan.",
  },
  {
    question: "Is a Medicare Supplement or Medicare Advantage plan better for someone with Parkinson's?",
    answer:
      "For many Parkinson's patients, a Medicare Supplement plan paired with a standalone Part D drug plan offers more predictable costs and broader specialist access, since there are no networks under Original Medicare. Advantage plans can have lower upfront premiums but may require prior authorization for therapies, DBS, and imaging. The right choice depends on your medications, doctors, and budget — I review both sides with you.",
  },
  {
    question: "Can I switch Medicare plans if my Parkinson's symptoms change?",
    answer:
      "Yes. During the Annual Enrollment Period each fall, you can change Part D plans or switch between Original Medicare and Advantage. Some patients also qualify for Special Enrollment Periods after a diagnosis change, move, or loss of other coverage. I reach out every year to make sure your plan still fits your current medications and care team.",
  }
,
  {
    question: "When can I change my Medicare plan if my Parkinson's treatment needs change?",
    answer:
      "The Annual Enrollment Period runs October 15 through December 7 each year, when you can switch Part D or Medicare Advantage plans. There's also a Medicare Advantage Open Enrollment Period from January 1 through March 31. If you qualify for Extra Help or move, you may get a Special Enrollment Period. Call 855-559-1700 and I'll review whether a change makes sense for your situation.",
  }
,
  {
    question: "Should Parkinson's patients choose Medicare Advantage or Original Medicare with a Supplement?",
    answer:
      "It depends on your specialists, medications, and travel needs. Original Medicare with a Medigap plan gives you nationwide access to any provider who accepts Medicare, which matters if you see a movement disorder specialist out of state. Advantage plans can offer extras like dental and transportation, but they use networks and prior authorization. I walk you through the tradeoffs based on your specific care team.",
  },
  {
    question: "Will Medicare cover a neurologist or movement disorder specialist?",
    answer:
      "Yes. Medicare Part B covers visits to neurologists and movement disorder specialists when they accept Medicare assignment. With Original Medicare you do not need a referral. With a Medicare Advantage plan, check whether the specialist is in-network and whether a referral from your primary care doctor is required.",
  },
  {
    question: "What happens if my Parkinson's medication isn't on my Part D plan's formulary?",
    answer:
      "You can request a formulary exception with documentation from your prescriber, switch to a covered alternative if clinically appropriate, or change plans during the Annual Enrollment Period. This is why I review your full medication list before recommending a Part D plan — the goal is to avoid surprise non-coverage at the pharmacy counter.",
  }
,
  {
    question: "When can I change my Medicare plan if my Parkinson's treatment needs change?",
    answer:
      "The Annual Enrollment Period runs from October 15 through December 7 each year, when you can switch Part D or Medicare Advantage plans. There's also a Medicare Advantage Open Enrollment Period from January 1 through March 31. If you qualify for Extra Help or move, you may get a Special Enrollment Period. I'll review your plan every year to make sure it still fits your medication list and care team.",
  },
  {
    question: "Should a Parkinson's patient choose Original Medicare or Medicare Advantage?",
    answer:
      "It depends on your specialists, medications, and where you receive care. Original Medicare with a Supplement and standalone Part D gives you nationwide access to any provider who accepts Medicare, which matters if you see a movement disorder specialist out of state. Medicare Advantage plans may offer extra benefits but use networks and prior authorization. I compare both side-by-side based on your actual doctors and prescriptions.",
  },
  {
    question: "Will Medicare cover a movement disorder specialist?",
    answer:
      "Yes. Medicare Part B covers visits to neurologists and movement disorder specialists when medically necessary. With Original Medicare, you can see any specialist who accepts Medicare without a referral. With Medicare Advantage, you'll need to confirm the specialist is in-network and check whether a referral is required.",
  }
,
  {
    question: "When can I change my Medicare plan if my Parkinson's treatment needs change?",
    answer:
      "Most people can change plans during the Annual Enrollment Period each fall, from October 15 to December 7, with coverage starting January 1. Medicare Advantage enrollees also get the Medicare Advantage Open Enrollment Period from January 1 to March 31. If you qualify for Extra Help or move into a Special Needs Plan area, you may have a Special Enrollment Period to switch outside those windows.",
  }
,
  {
    question: "When should I review my Medicare plan if I have Parkinson's?",
    answer:
      "Review your plan every year during the Annual Enrollment Period from October 15 to December 7. Drug formularies, tiers, and specialist networks change yearly, and Parkinson's medications can move tiers without notice. A quick annual review makes sure your current plan still covers your prescriptions at the lowest cost.",
  },
  {
    question: "Should Parkinson's patients choose Medicare Advantage or Medigap?",
    answer:
      "It depends on your providers, medications, and budget. Medigap paired with Original Medicare offers broader specialist access and predictable out-of-pocket costs, which many Parkinson's patients prefer for movement disorder neurologists and DBS centers. Medicare Advantage may have lower premiums but uses networks and prior authorization that can affect access to specialty care.",
  },
  {
    question: "Can a Medicare broker help me find a movement disorder specialist?",
    answer:
      "Yes. Before recommending a plan, I check whether your current neurologist or preferred Parkinson's Foundation Center of Excellence is in-network. If you're on Original Medicare with a Supplement, you can generally see any provider that accepts Medicare, which gives you the widest specialist access.",
  }
,
  {
    question: "When can Parkinson's patients change Medicare plans?",
    answer:
      "Most people can change plans during the Annual Enrollment Period from October 15 to December 7 each year. If you have a Medicare Advantage plan, you also have the Medicare Advantage Open Enrollment Period from January 1 to March 31 to switch plans or return to Original Medicare. Qualifying life events like moving or losing other coverage can trigger Special Enrollment Periods.",
  },
  {
    question: "Should Parkinson's patients choose Original Medicare or Medicare Advantage?",
    answer:
      "It depends on your providers, medications, and how often you see specialists. Original Medicare with a Medigap plan offers broader access to neurologists and movement disorder specialists nationwide with predictable out-of-pocket costs. Medicare Advantage plans may include extras but use networks and prior authorization, which can complicate access to DBS surgery or specialized therapy. I compare both side by side using your actual doctor and drug list.",
  }
,
  {
    question: "Should Parkinson's patients choose Original Medicare with a Supplement or a Medicare Advantage plan?",
    answer:
      "It depends on your providers and how often you see them. Original Medicare with a Medigap plan gives you access to any doctor or hospital that accepts Medicare nationwide, which matters if you see a movement disorder specialist or travel for DBS evaluation. Medicare Advantage plans can offer extra benefits but use networks and prior authorization, so we verify your neurologist and preferred hospital are in-network before recommending one.",
  }
];

export default function MedicareBrokerForParkinsonsPatients() {
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
          Medicare Broker for Parkinson&#39;s Patients
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
        Medicare Broker for Parkinson&#39;s Patients — A Plan That Fights as
        Hard as You Do
      </h1>

      <Image
        src="/images/medicare-broker-for-parkinsons-patients.webp"
        alt="Medicare broker for Parkinson's patients"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        A Medicare broker for Parkinson&#39;s patients does one thing most
        agents won&#39;t: look at your actual daily reality before recommending a
        plan. I&#39;m Anthony Orner, a licensed broker who builds coverage around
        your medication list, your therapy schedule, and the specialists keeping
        you moving.
      </p>
      <p className="text-lg mb-6">
        Every movement takes conscious effort now. Your plan shouldn&#39;t take
        that same kind of fight.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How Medicare covers carbidopa-levodopa, DBS, and movement disorder
          specialists
        </h2>
        <p className="mb-2">
          Original Medicare (Parts A and B) covers Parkinson&#39;s treatments
          including neurologist visits, movement disorder specialists, and
          deep brain stimulation surgery when medically necessary. Part B covers
          outpatient specialist care after your $283 annual deductible.
        </p>
        <p>
          DBS is covered at Medicare-approved facilities, but you&#39;ll need
          documentation showing medications alone aren&#39;t controlling your
          symptoms. Part D handles your prescriptions. Carbidopa-levodopa is
          generally available at lower tiers, but combination drugs and extended-release
          formulations vary widely by plan. When you&#39;re taking 15 or 20 pills
          a day, a $10 copay difference per fill costs you hundreds a year.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Supplement vs. Advantage: which gives Parkinson&#39;s patients more
          flexibility
        </h2>
        <p className="mb-2">
          A Medicare Supplement (Medigap) paired with a standalone Part D plan
          lets you see any doctor in the country who accepts Medicare. No
          referrals. No prior authorization for most services. That matters when
          you need a specific movement disorder specialist or a DBS center that
          isn&#39;t in a narrow network.
        </p>
        <p>
          Medicare Advantage plans can work if the network includes the right
          neurologists and hospitals, and some add benefits like transportation
          to appointments. But check prior authorization rules carefully. I&#39;ll
          compare both options against your actual care needs so there&#39;s no
          guessing.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Physical therapy, speech therapy, and fall prevention coverage
        </h2>
        <p className="mb-2">
          Medicare Part B covers physical therapy, occupational therapy, and
          speech-language pathology when ordered by your doctor. These aren&#39;t
          extras for Parkinson&#39;s patients. They&#39;re essential.
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-2">
          <li>PT helps with gait freezing, balance, and fall prevention</li>
          <li>Speech therapy addresses the voice and swallowing changes most patients face</li>
          <li>OT helps adapt daily tasks that tremor and rigidity make harder</li>
        </ul>
        <p>
          Falls are one of the biggest risks with Parkinson&#39;s. The right
          plan keeps therapy accessible without surprise denials or network
          restrictions slowing you down.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Your Part D plan matters more than you think
        </h2>
        <p className="mb-2">
          Parkinson&#39;s medications change over time. What works in year one
          may not work in year three, and your drug plan needs to keep up. I run
          your complete prescription list through every Part D plan available in
          your area to find the lowest total annual cost.
        </p>
        <p>
          During Open Enrollment (October 15 through December 7), we review
          whether your current plan still covers your medications at the best
          price. Formularies change every year. Skipping this review can cost you
          thousands.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What caregivers and family members should know
        </h2>
        <p className="mb-2">
          If you&#39;re managing Medicare decisions for a parent with
          Parkinson&#39;s, you&#39;re probably balancing this alongside
          everything else. I work with families regularly. You can call on your
          loved one&#39;s behalf, and I&#39;ll walk through every option in plain
          language.
        </p>
        <p>
          Skilled nursing facility stays after a hospitalization cost $0 for days
          1-20 under Medicare, then $209.50 per day for days 21-100 in 2026. A
          Supplement plan can cover that coinsurance entirely. These are the
          details that matter when a fall changes everything overnight.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Request a free review from a broker who understands what every day
          costs you
        </h2>
        <p className="mb-2">
          I don&#39;t charge anything for plan reviews. The insurance carriers
          pay me, so you get unbiased comparisons at no cost. I&#39;ll look at
          your medications, your doctors, your therapy needs, and your budget.
        </p>
        <p>
          Call me at{" "}
          <a href="tel:8555591700" className="text-blue-600 font-semibold">
            855-559-1700
          </a>{" "}
          or request a callback below. One conversation can save you real money
          and real frustration.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center mb-10">
        <p className="text-xl font-bold mb-2">
          Talk to a broker who knows Parkinson&#39;s coverage inside and out.
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
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
              href="/learn/what-is-medigap"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plans: What They Cover and Cost
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage vs. Medigap: How to Choose
            </Link>
          </li>
          <li>
            <Link
              href="/learn/medicare-parts-explained"
              className="text-blue-600 hover:underline"
            >
              Part D Drug Plans: Finding the Right Prescription Coverage
            </Link>
          </li>
          <li>
            <Link
              href="/services/best-medicare-plan-for-chronic-conditions"
              className="text-blue-600 hover:underline"
            >
              Medicare Physical Therapy Coverage Explained
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
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/coverage/deep-brain-stimulation-for-essential-tremor-parkinsons-disease" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Deep Brain Stimulation coverage</a> and <a href="https://www.medicare.gov/drug-coverage-part-d" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Part D prescription drug coverage</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For free, unbiased counseling in New Jersey, contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Free unbiased counseling is available through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need unbiased state-level help? Contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need local help? Contact <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">your State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling — or call 855-559-1700 to review your options with Anthony.</div>
            <div className="text-sm text-gray-600 mt-4">Need local help? Contact <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">your State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Free unbiased counseling: <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For free unbiased counseling, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> or the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Free, unbiased counseling: <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need free local counseling? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for unbiased Medicare guidance in your state.</div>
      </section>
    </main>
  );
}