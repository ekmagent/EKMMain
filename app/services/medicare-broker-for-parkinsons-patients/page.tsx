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
    "Medicare broker for Parkinson's patients — compare Part D, specialist networks & DBS coverage. Free plan review with Anthony Orner. Call 855-559-1700 today.",
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
      </section>
    </main>
  );
}