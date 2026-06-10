import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for chronic pain patients | Free Coverage Consultation | MedicareYourself",
  description:
    "Living with chronic pain? Broker Anthony Orner compares Medicare plans covering pain management, PT, injections & specialists. Free review — call 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-chronic-pain-patients" },
  openGraph: {
    title:
      "Medicare broker for chronic pain patients | Free Coverage Consultation | MedicareYourself",
    description:
      "Medicare broker for chronic pain patients in NJ. Anthony Orner finds plans covering pain management, injections, and specialist visits. Free plan review.",
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
      name: "Medicare Broker for Chronic Pain Patients",
      item: "https://medicareyourself.com/services/medicare-broker-for-chronic-pain-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Chronic Pain Patients Who Deserve a Plan That Finally Sees Them",
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
    "https://medicareyourself.com/services/medicare-broker-for-chronic-pain-patients",
};

const faqs = [
  {
    question: "Does Medicare cover chronic pain management?",
    answer:
      "Yes. Medicare Part B covers chronic pain management and treatment services, including monthly pain assessments, medication management, and care coordination. Part B also covers physical therapy, occupational therapy, chiropractic services, and acupuncture for chronic low back pain. After the $283 annual Part B deductible, you typically pay 20% of the Medicare-approved amount.",
  },
  {
    question: "How do I choose a Medicare broker for chronic pain needs?",
    answer:
      "Look for a licensed broker who understands how pain management billing works, which plans have the best specialist networks in your area, and how Medigap underwriting may affect people with pre-existing conditions. A good broker will ask about your current treatments, medications, and providers before recommending anything.",
  },
  {
    question:
      "Are Medicare Advantage chronic condition special needs plans worth it?",
    answer:
      "C-SNPs (Chronic Condition Special Needs Plans) are designed for people with specific chronic conditions, but they don't always mean lower costs. Some have higher out-of-pocket maximums and drug copays than standard Medicare Advantage plans. Compare the actual formulary and specialist copays before enrolling.",
  },
  {
    question: "Does Medigap cover pain management specialists?",
    answer:
      "Medigap supplements your Original Medicare coverage. If Part B covers the pain management service, your Medigap plan helps pay the remaining costs. Plan G, for example, covers the 20% coinsurance Part B leaves behind after you meet the $283 annual deductible. Any Medicare-accepting specialist is in-network with Original Medicare.",
  },
,
  {
    question: "Will my pain medications be covered under Medicare Part D?",
    answer:
      "Most prescription pain medications are covered under a Medicare Part D plan or the drug benefit built into a Medicare Advantage plan, but each plan has its own formulary, tier structure, and prior authorization rules. Opioid prescriptions in particular often require step therapy or quantity limits. Before enrolling, a broker can run your specific medication list through each plan's formulary to estimate your true annual drug cost.",
  },
  {
    question: "Can I switch Medicare plans if my pain specialist leaves the network?",
    answer:
      "If your Medicare Advantage plan drops a key provider mid-year, you may qualify for a Special Enrollment Period in some cases, but it isn't automatic. With Original Medicare and a Medigap plan, network changes aren't a concern because any provider that accepts Medicare is covered. This is one reason chronic pain patients often prefer Medigap when underwriting allows.",
  },
  {
    question: "Does Medicare cover physical therapy and chiropractic care for chronic pain?",
    answer:
      "Medicare Part B covers medically necessary physical therapy with no hard cap, though therapy above an annual threshold requires your provider to confirm continued medical necessity. Part B also covers manual manipulation of the spine by a chiropractor to correct a subluxation and covers acupuncture for chronic low back pain under specific conditions. Call 855-559-1700 to review which plan pairs best with your treatment schedule.",
  }
,
  {
    question: "What pain management treatments does Medicare Part B cover monthly?",
    answer:
      "Medicare Part B covers monthly chronic pain management and treatment services, which can include a pain assessment, care planning, medication management, and coordination of care with your providers. These services are bundled and billed monthly when you have a diagnosed chronic pain condition. After your Part B deductible, you typically pay coinsurance on the Medicare-approved amount.",
  }
,
  {
    question: "What pain management services are covered under Medicare Part B?",
    answer:
      "Medicare Part B covers monthly chronic pain management and treatment services, which can include a comprehensive pain assessment, care planning, medication management, and care coordination with your providers. Part B also covers physical therapy, occupational therapy, and acupuncture for chronic low back pain when medically necessary. After you meet the Part B deductible, you typically pay 20% of the Medicare-approved amount.",
  }
,
  {
    question: "Can a Medicare broker help me keep my current pain management specialist?",
    answer:
      "Yes. A licensed broker reviews each plan's provider network before recommending coverage and confirms whether your current pain specialist, physical therapist, or interventional doctor participates. With Original Medicare plus Medigap, any provider who accepts Medicare is in-network, which often gives chronic pain patients the most flexibility. Call 855-559-1700 for a free provider check.",
  },
  {
    question: "Do Medicare drug plans cover pain medications and injections?",
    answer:
      "Part D plans cover most oral pain medications, but each plan has its own formulary, tier structure, and prior authorization rules. Injectable treatments administered in a doctor's office, such as epidural steroid injections or trigger point injections, are typically billed under Part B rather than Part D. A broker can run your specific medication list against each plan's formulary before you enroll.",
  },
  {
    question: "Can I switch Medicare plans if my chronic pain treatment changes?",
    answer:
      "You can change Medicare Advantage or Part D plans during the Annual Enrollment Period each fall, and during the Medicare Advantage Open Enrollment Period in early spring. Switching to a Medigap plan outside your initial enrollment window may require medical underwriting, which can affect approval for people with chronic conditions. A broker can explain which switches are guaranteed-issue in your state.",
  }
];

export default function MedicareBrokerForChronicPainPatients() {
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
          Medicare Broker for Chronic Pain Patients
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4 leading-tight">
        Medicare Broker for Chronic Pain Patients Who Deserve a Plan That
        Finally Sees Them
      </h1>

      <Image
        src="/images/medicare-broker-for-chronic-pain-patients.webp"
        alt="Medicare broker for chronic pain patients"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        A Medicare broker for chronic pain patients does something most plan
        comparison tools can't: they start with your treatment reality, not a
        spreadsheet. Some nights you sleep in a recliner because lying flat isn't
        an option. Your week revolves around injections, PT appointments, and
        medication refills.
      </p>
      <p className="text-lg mb-6">
        I'm Anthony Orner, a licensed Medicare broker in New Jersey, and I help
        people living with chronic pain find plans that actually cover the care
        they're already getting.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Pain management, injections, and PT: what your plan should cover
        </h2>
        <p className="mb-2">
          Medicare Part B covers a wide range of pain management services. That
          includes physical therapy, occupational therapy, chiropractic care,
          acupuncture for chronic low back pain, and monthly chronic pain
          management programs with pain assessments and medication coordination.
        </p>
        <p className="mb-2">
          After your $283 Part B deductible, you pay 20% of the
          Medicare-approved amount. That 20% adds up fast when you're seeing
          specialists every month. The right plan fills that gap.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          How chronic pain conditions affect Medigap underwriting in NJ
        </h2>
        <p className="mb-2">
          During your 6-month Medigap Open Enrollment window (starting the month
          you turn 65 and enroll in Part B), carriers in NJ can't deny you or
          charge more for pre-existing conditions like fibromyalgia, spinal
          stenosis, or neuropathy.
        </p>
        <p className="mb-2">
          Miss that window, and underwriting kicks in. Carriers can ask health
          questions and may decline your application based on pain-related
          diagnoses or medication history. Timing matters more than most people
          realize.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare Advantage vs. supplement for ongoing pain treatment
        </h2>
        <p className="mb-2">
          Medicare Advantage plans can look great on paper with $0 premiums and
          bundled benefits. But network restrictions hit chronic pain patients
          hard. If your pain management doctor or interventional specialist is
          out of network, you're starting over with someone who doesn't know your
          history.
        </p>
        <p className="mb-2">
          A Medigap supplement with Original Medicare lets you see any
          Medicare-accepting provider in the country. No referrals. No prior
          authorization surprises for the injection series you've been getting
          every three months.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Stop negotiating with your coverage the way you negotiate with your
          body
        </h2>
        <p className="mb-2">
          You already ration energy every single day. You shouldn't have to ration
          care because your plan makes it harder to see the right specialist or
          fill the right prescription.
        </p>
        <p>
          "But you don't look sick" might be the loneliest sentence you hear. Your
          Medicare plan should not make you prove your pain is real.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Watch out for chronic condition special needs plans
        </h2>
        <p className="mb-2">
          C-SNPs (Chronic Condition Special Needs Plans) sound like they're built
          for you. Sometimes they are. But many have higher out-of-pocket
          maximums, higher drug copays, and tighter networks than standard
          Medicare Advantage plans from the same carrier.
        </p>
        <p>
          Don't pick a plan by its label. Compare the formulary, the specialist
          copays, and the out-of-pocket max line by line. That's exactly what I
          do during a free plan review.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          What a free plan review looks like
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            We go through your current medications, specialists, and treatment
            schedule
          </li>
          <li>
            I check which plans in NJ cover your specific providers and drugs
          </li>
          <li>
            We compare your real out-of-pocket costs across Medigap and
            Advantage options
          </li>
          <li>
            If you're approaching 65, we map out your Medigap Open Enrollment
            timeline so underwriting doesn't become a problem
          </li>
        </ul>
        <p className="mt-3">
          No cost. No pressure. Just a clear picture of what each plan actually
          covers for the care you need right now.
        </p>
      </section>

      <div className="mt-12 bg-blue-600 text-white rounded-lg p-8 text-center">
        <p className="text-xl font-semibold mb-2">
          Ready for a plan that works as hard as you do?
        </p>
        <p className="mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/quote" className="underline font-bold">
            get a free quote online
          </Link>
          .
        </p>
        <p className="text-sm opacity-90">
          Anthony Orner, Licensed Medicare Broker — New Jersey
        </p>
      </div>

      <section className="mt-12">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-12">
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
              href="/medicare-supplement/new-jersey/turning-65"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment in New Jersey
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
              href="/services/free-medicare-broker-new-jersey"
              className="text-blue-600 hover:underline"
            >
              Find a Medicare Broker in New Jersey
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
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/coverage/chronic-pain-management-treatment-services" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Chronic Pain Management &amp; Treatment Services</a> and <a href="https://www.medicare.gov/coverage/pain-management" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Pain Management Coverage</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey help: <a href="https://www.state.nj.us/dobi/division_insurance/ship/shipmain.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> — free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need free, unbiased counseling? Contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">New Jersey SHIP (State Health Insurance Assistance Program)</a> for personalized Medicare guidance.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for unbiased Medicare guidance.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For free local counseling, contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">New Jersey SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
    </main>
  );
}