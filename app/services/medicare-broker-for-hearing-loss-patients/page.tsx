import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for hearing loss patients | Free Plan Review | MedicareYourself",
  description:
    "Medicare broker for hearing loss patients — compare NJ Advantage plans with hearing aid and audiology benefits at no cost. Call 855-559-1700 today.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-hearing-loss-patients" },
  openGraph: {
    title:
      "Medicare broker for hearing loss patients | Free Plan Review | MedicareYourself",
    description:
      "Medicare broker for hearing loss patients — find plans with hearing aid and audiology benefits. Anthony Orner compares NJ options at no cost. Call today.",
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
      name: "Medicare Broker for Hearing Loss Patients",
      item: "https://medicareyourself.com/services/medicare-broker-for-hearing-loss-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Hearing Loss Patients — Navigate Coverage for Hearing Aids and Audiology",
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
    question: "Will Medicare pay for hearing loss?",
    answer:
      "Original Medicare (Parts A and B) does not cover hearing aids or hearing aid fitting exams. However, Part B does cover diagnostic hearing exams when ordered by your doctor to determine if you need medical treatment. Many Medicare Advantage plans in NJ include hearing aid allowances as a supplemental benefit.",
  },
  {
    question: "Who helps with hearing impairment coverage under Medicare?",
    answer:
      "A licensed Medicare broker can compare plans that include hearing benefits at no cost to you. Anthony Orner reviews Medicare Advantage options across NJ carriers to find plans with hearing aid allowances, audiology visits, and fitting coverage.",
  },
  {
    question: "Does Medicare cover cochlear implants?",
    answer:
      "Yes. Unlike hearing aids, cochlear implants are covered under Original Medicare Part B when deemed medically necessary. You pay 20% of the Medicare-approved amount after meeting the $283 annual Part B deductible.",
  },
  {
    question: "How much do hearing aids cost on Medicare Advantage?",
    answer:
      "Costs vary by plan. Some NJ Medicare Advantage plans offer hearing aid allowances ranging from a few hundred dollars to over $1,000 per ear. Copays and brand restrictions differ between carriers. A broker can compare the exact benefit amounts across your available plans.",
  },

  {
    question: "Does Medicare cover diagnostic hearing exams?",
    answer:
      "Yes. Medicare Part B covers diagnostic hearing and balance exams when your doctor or other health care provider orders them to see if you need medical treatment. You pay 20% of the Medicare-approved amount after the annual Part B deductible of $283 in 2026.",
  },
  {
    question: "Can a Medicare broker help me switch plans if my current one does not cover hearing aids?",
    answer:
      "Yes. During the Annual Enrollment Period (October 15 to December 7) or the Medicare Advantage Open Enrollment Period (January 1 to March 31), a licensed broker can help you compare plans that include hearing benefits. Anthony Orner reviews your current coverage and identifies NJ plans with stronger hearing aid allowances at no cost to you.",
  }
,
  {
    question: "Does Original Medicare cover hearing aids or fitting exams?",
    answer:
      "No. Original Medicare does not cover hearing aids or the exams needed to fit them, so you would pay all costs out of pocket. However, some Medicare Advantage plans include hearing aid coverage as a supplemental benefit. A licensed broker can help you compare plans that offer this extra coverage.",
  },
  {
    question: "What hearing services does Medicare Part B cover?",
    answer:
      "Medicare Part B covers diagnostic hearing and balance exams when your doctor orders them to determine whether you need medical treatment. Part B also covers certain audiology services without a physician referral for non-acute hearing conditions. Hearing aids and routine hearing exams remain excluded under Original Medicare.",
  },
  {
    question: "How do I find a Medicare Advantage plan with hearing benefits in NJ?",
    answer:
      "The fastest way is to work with a licensed Medicare broker who can compare carriers side by side at no cost to you. Anthony Orner reviews Medicare Advantage options across New Jersey to identify plans with hearing aid allowances, audiology visits, and fitting coverage. Call 855-559-1700 for a free plan review.",
  }
];

export default function MedicareBrokerForHearingLossPatients() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
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
          Medicare Broker for Hearing Loss Patients
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
        Medicare Broker for Hearing Loss Patients — Navigate Coverage for
        Hearing Aids and Audiology
      </h1>

      <Image
        src="/images/medicare-broker-for-hearing-loss-patients.webp"
        alt="Medicare broker for hearing loss patients"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        A Medicare broker for hearing loss patients can save you hours of
        frustration comparing plans that may or may not cover what you actually
        need. Hearing aids are expensive. Original Medicare doesn&apos;t pay for
        them. But certain Medicare Advantage plans in NJ do, and the differences
        between those plans matter more than most people realize.
      </p>
      <p className="text-lg mb-6">
        I&apos;m Anthony Orner, a licensed Medicare broker in New Jersey. I help
        people with hearing loss find plans that include real hearing benefits,
        not just fine-print promises.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What Original Medicare does and doesn&apos;t cover for hearing
        </h2>
        <p className="mb-2">
          Original Medicare Part B covers diagnostic hearing exams when your
          doctor orders them to determine if you need medical treatment. That
          includes audiology testing for conditions like sudden hearing loss or
          balance disorders.
        </p>
        <p>
          What Part B does not cover: hearing aids, hearing aid fitting exams, or
          routine hearing screenings. You pay 100% out of pocket. For many
          people, that means $3,000 to $7,000 or more with no help from
          Medicare.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Advantage plans that include hearing aid benefits in NJ
        </h2>
        <p className="mb-2">
          Many Medicare Advantage (Part C) plans in New Jersey include hearing
          aid allowances as supplemental benefits. These can range from a few
          hundred dollars to over $1,000 per ear, depending on the carrier and
          plan tier.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Some plans cover one pair of hearing aids every one to three years</li>
          <li>Copays and brand restrictions vary widely between carriers</li>
          <li>A few plans include fitting exams and follow-up adjustments</li>
          <li>Network requirements may limit which audiologists you can see</li>
        </ul>
        <p className="mt-2">
          Not every Advantage plan with &quot;hearing benefits&quot; offers
          meaningful coverage. I compare the actual dollar amounts and
          restrictions so you don&apos;t get stuck with a plan that covers $200
          when you need $2,000.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Cochlear implants vs. hearing aids: different coverage rules
        </h2>
        <p className="mb-2">
          Cochlear implants are classified as prosthetic devices. Original
          Medicare Part B covers them when medically necessary. After meeting
          your $283 annual Part B deductible, you pay 20% of the
          Medicare-approved amount.
        </p>
        <p>
          Hearing aids are not prosthetics under Medicare rules. That one
          classification difference means the gap between full coverage and zero
          coverage. If your audiologist has discussed both options, the plan you
          choose should account for whichever path you&apos;re on.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why cost frustration is the real barrier
        </h2>
        <p className="mb-2">
          People put off getting hearing aids for years because of cost. The
          markup at some audiology offices can feel impossible on a fixed income.
          Seniors shouldn&apos;t have to choose between hearing their
          grandchildren and paying their bills.
        </p>
        <p>
          The right Medicare Advantage plan won&apos;t eliminate the cost
          entirely, but it can reduce it by thousands. That&apos;s worth a
          15-minute phone call.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How I match plans to your hearing needs
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>I review every Medicare Advantage plan available in your NJ zip code</li>
          <li>I compare hearing aid allowances, fitting coverage, and audiologist networks</li>
          <li>I check whether your current doctors and prescriptions are also covered</li>
          <li>I explain the tradeoffs between Advantage plans and Original Medicare plus Medigap</li>
        </ul>
        <p className="mt-2">
          There&apos;s no cost to you for this. Carriers pay my commission, not
          you. My job is to find the best fit, not push one plan.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Request a free plan match based on your hearing needs
        </h2>
        <p className="mb-2">
          Medicare Advantage and Part D Open Enrollment runs October 15 through
          December 7. If you&apos;re newly eligible, your Medigap Open
          Enrollment Period starts the month you turn 65 and are enrolled in Part
          B.
        </p>
        <p>
          Call me anytime to review your options. I&apos;ll tell you exactly
          which NJ plans cover hearing aids, how much they pay, and what
          restrictions apply.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 mb-10 text-center">
        <p className="text-xl font-bold mb-2">
          Talk to a Medicare broker who understands hearing loss coverage.
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/contact" className="underline font-bold">
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
              href="/medicare-advantage/new-jersey"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage Plans in NJ
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey"
              className="text-blue-600 hover:underline"
            >
              Medigap Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-agents-near-me"
              className="text-blue-600 hover:underline"
            >
              Find a Medicare Broker Near You
            </Link>
          </li>
          <li>
            <Link
              href="/learn/medicare-parts-explained"
              className="text-blue-600 hover:underline"
            >
              What Does Medicare Part B Cover?
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
            <div className="text-sm text-gray-600 mt-4">Learn more from official sources: <a href="https://www.medicare.gov/coverage/hearing-balance-exams" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">Medicare.gov — Hearing &amp; Balance Exams</a> and <a href="https://www.medicare.gov/coverage/hearing-aids" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">Medicare.gov — Hearing Aids Coverage</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">NJ residents can contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey resource: <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> offers free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey beneficiaries can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">NJ residents can also get free, unbiased counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">New Jersey State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For free, unbiased Medicare counseling in New Jersey, contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
    </main>
  );
}