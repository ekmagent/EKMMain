import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare broker for people with CLL | Free Consult | MedicareYourself",
  description:
    "Medicare broker for people with CLL — get clear guidance on Medigap underwriting, Part D oral cancer drugs, and specialist access. Call 855-559-1700 today.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-people-with-cll" },
  openGraph: {
    title:
      "medicare broker for people with CLL | Free Consult | MedicareYourself",
    description:
      "Medicare broker for people with CLL — honest guidance on Medigap underwriting, Medicare Advantage, and guaranteed issue options. Call Anthony Orner today.",
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
      name: "Medicare Broker for People With CLL",
      item: "https://medicareyourself.com/services/medicare-broker-for-people-with-cll",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for People With CLL: Navigating Coverage With Chronic Lymphocytic Leukemia",
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
    question: "Does Medicare pay for CLL treatment?",
    answer:
      "Yes. Original Medicare (Parts A and B) covers CLL treatments including chemotherapy, targeted therapies like BTK inhibitors, lab work, and oncologist visits. Part A covers inpatient hospital stays. Part B covers outpatient infusions and doctor appointments. Part D covers oral cancer medications. Your out-of-pocket costs depend on whether you have a Medigap plan, Medicare Advantage, or Original Medicare alone.",
  },
  {
    question:
      "Can I get a Medigap plan if I have chronic lymphocytic leukemia?",
    answer:
      "It depends on timing. During your 6-month Medigap Open Enrollment Period (starting the month you turn 65 and have Part B), no carrier can deny you or charge more due to CLL. Outside that window, most states allow medical underwriting, and a CLL diagnosis will likely result in a denial. Guaranteed issue situations may still apply if you qualify.",
  },
  {
    question: "What is the new treatment for chronic lymphocytic leukemia?",
    answer:
      "Targeted therapies like BTK inhibitors and BCL-2 inhibitors have largely replaced traditional chemotherapy for many CLL patients. These oral medications are typically covered under Medicare Part D. Your oncologist and a CLL specialist can help determine the best treatment approach based on your specific genetic markers.",
  },
  {
    question: "Should I choose Medicare Advantage or Original Medicare with CLL?",
    answer:
      "CLL patients who need ongoing oncology care, frequent lab work, or access to specialists at major cancer centers often do better on Original Medicare with a Medigap supplement. Medicare Advantage plans use provider networks that may limit access to CLL specialists. Call us at 855-559-1700 to compare your specific options.",
  },
,
  {
    question: "Will Medicare cover a second opinion from a CLL specialist?",
    answer:
      "Yes. Medicare Part B covers second opinions from specialists, including CLL experts at academic cancer centers. If the first and second opinions differ, Medicare will also cover a third opinion. With Original Medicare plus Medigap, you can see any oncologist nationwide who accepts Medicare, which is often helpful for accessing CLL specialists.",
  }
,
  {
    question: "Does Medicare Part B cover a second opinion from a CLL specialist?",
    answer:
      "Yes. Medicare Part B covers second opinions for medical conditions when your doctor recommends surgery or a major treatment decision, and this includes consultations with CLL specialists. If the first and second opinions differ, Medicare may also help cover a third opinion. Call 855-559-1700 if you need help confirming whether a specific specialist accepts Medicare assignment.",
  }
,
  {
    question: "How does the Medigap Open Enrollment Period protect CLL patients?",
    answer:
      "Your Medigap Open Enrollment Period is a 6-month window that begins when you are 65 or older and enrolled in Part B. During this time, insurance carriers cannot deny coverage, charge higher premiums, or impose waiting periods because of your CLL diagnosis. Missing this window often means facing medical underwriting, which can make Medigap coverage difficult to obtain with CLL.",
  },
  {
    question: "Are CLL clinical trials covered by Medicare?",
    answer:
      "Yes. Medicare covers routine costs of qualifying clinical trials, including doctor visits, lab work, and standard care items you would receive outside the trial. The investigational drug or device itself is typically paid for by the trial sponsor. This can be especially valuable for CLL patients exploring newer targeted therapies or CAR-T research.",
  },
  {
    question: "Do I need a referral to see a CLL specialist under Medicare?",
    answer:
      "With Original Medicare, you do not need a referral to see any provider who accepts Medicare, including hematologists and oncologists at major cancer centers. Medicare Advantage plans, however, often require referrals and limit you to in-network specialists. This is one reason many CLL patients prefer Original Medicare paired with a Medigap plan.",
  }
,
  {
    question: "Does Medicare cover clinical trials for CLL?",
    answer:
      "Yes. Medicare covers routine costs of qualifying clinical trials, including doctor visits, lab tests, and items or services typically covered for patients not in a trial. This is important for CLL patients, as many advances in treatment come through clinical trial participation. Speak with your oncologist about trials at NCI-designated cancer centers.",
  },
  {
    question: "Are CLL specialists covered under Medicare?",
    answer:
      "Original Medicare allows you to see any oncologist or hematologist who accepts Medicare assignment, including CLL specialists at major academic medical centers. Medicare Advantage plans restrict you to in-network providers, which may exclude top CLL experts. If specialist access matters to you, Original Medicare paired with a Medigap plan typically offers more flexibility.",
  }
,
  {
    question: "Does Medicare cover clinical trials for CLL?",
    answer:
      "Yes. Medicare covers routine costs of qualifying clinical trials, including doctor visits, lab work, and standard care that would be covered outside the trial. This is important for CLL patients who may want to access investigational targeted therapies. Your oncologist's office can confirm whether a specific trial qualifies for Medicare coverage.",
  },
  {
    question: "Are oral CLL medications covered under Part B or Part D?",
    answer:
      "Most oral targeted therapies for CLL, including BTK inhibitors and BCL-2 inhibitors, are covered under Medicare Part D rather than Part B. Part B typically covers infused or injected cancer drugs administered in a clinic. Choosing a Part D plan with a strong specialty tier formulary is critical when living with CLL.",
  }
,
  {
    question: "Does Medicare Part B cover a second opinion from a CLL specialist?",
    answer:
      "Yes. Medicare Part B covers second opinions from specialists when your doctor recommends surgery or a major treatment decision. For CLL patients considering chemotherapy, BTK inhibitors, or clinical trial enrollment, getting a second opinion from a CLL specialist at a major cancer center is often a smart step. Medicare may also cover a third opinion if the first two differ.",
  },
  {
    question: "Are CLL clinical trials covered by Medicare?",
    answer:
      "Medicare covers routine costs of qualifying clinical trials, including office visits, lab work, and standard care that would be covered outside the trial. The investigational drug itself is typically paid for by the trial sponsor. Talk with your oncologist and trial coordinator to confirm what Medicare and any supplemental coverage will pay before enrolling.",
  }
];

export default function MedicareBrokerForPeopleWithCLL() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
        <Link href="/">Home</Link> &gt;{" "}
        <Link href="/services">Medicare Guides</Link> &gt;{" "}
        <span>Medicare Broker for People With CLL</span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Medicare Broker for People With CLL: Navigating Coverage With Chronic
        Lymphocytic Leukemia
      </h1>

      <Image
        src="/images/medicare-broker-for-people-with-cll.webp"
        alt="medicare broker for people with CLL"
        width={800}
        height={400}
        className="w-full h-auto mb-6 rounded-lg"
      />

      <p className="mb-4">
        A Medicare broker for people with CLL understands something most agents
        don't: your diagnosis changes the rules. CLL can sit quietly on watch
        and wait for years, or it can mean BTK inhibitors, monthly labs, and
        frequent oncology visits. Either way, it affects which Medicare plans
        you can get and which ones you actually need.
      </p>

      <p className="mb-6">
        I'm Anthony Orner, a licensed Medicare broker. I help CLL patients sort
        through underwriting roadblocks, find the right coverage structure, and
        avoid costly mistakes during enrollment.
      </p>

      <PhoneCTA />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why CLL makes Medicare Supplement underwriting difficult
        </h2>
        <p className="mb-3">
          Most Medigap carriers ask health questions before approving your
          application. A CLL diagnosis, even if you're on watch and wait, almost
          always triggers a decline outside your open enrollment window.
        </p>
        <p className="mb-3">
          Carriers see an active blood cancer and stop reading. They don't
          distinguish between early-stage CLL and someone in active treatment.
          That's why timing matters more for CLL patients than almost anyone
          else on Medicare.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare Advantage vs. Medigap when you have CLL
        </h2>
        <p className="mb-3">
          Medicare Advantage plans can't deny you for pre-existing conditions.
          That's a real advantage if you've missed your Medigap window. But
          Advantage plans use provider networks, which can create problems:
        </p>
        <ul className="list-disc pl-6 mb-3 space-y-2">
          <li>Your CLL specialist may be out of network</li>
          <li>Prior authorizations can delay treatment decisions</li>
          <li>Out-of-pocket maximums can reach $8,000+ in a treatment year</li>
          <li>Switching back to Original Medicare later may mean no Medigap access</li>
        </ul>
        <p>
          Original Medicare with a Medigap plan (like Plan G) gives you
          unrestricted access to any Medicare-accepting oncologist. Plan G
          covers everything except the $283 annual Part B deductible. For
          someone with ongoing cancer care, that freedom matters.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Guaranteed issue situations that bypass health questions
        </h2>
        <p className="mb-3">
          Federal guaranteed issue rights let you enroll in certain Medigap
          plans without medical underwriting. Common triggers:
        </p>
        <ul className="list-disc pl-6 mb-3 space-y-2">
          <li>Losing employer or union group health coverage</li>
          <li>Your Medicare Advantage plan leaves your area or violates its contract</li>
          <li>You dropped a Medigap plan to try Medicare Advantage and want to return within 12 months</li>
        </ul>
        <p>
          These windows are narrow and non-negotiable. If you qualify, we need
          to act quickly. I track these deadlines for my clients so nothing
          gets missed.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How a broker advocates for CLL patients during enrollment
        </h2>
        <p className="mb-3">
          People facing a cancer diagnosis often ask me what to expect from
          Medicare coverage during treatment. The answer depends entirely on
          your plan structure. I walk you through:
        </p>
        <ul className="list-disc pl-6 mb-3 space-y-2">
          <li>Which Part D plans cover your specific CLL medications at the lowest cost</li>
          <li>Whether a C-SNP (Chronic Special Needs Plan) fits your situation</li>
          <li>How to protect your ability to see specialists at major cancer centers</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Your Medigap open enrollment window is everything
        </h2>
        <p className="mb-3">
          If you're approaching 65 and have CLL, apply for Medigap during your
          6-month open enrollment period. It starts the month you turn 65 and
          are enrolled in Part B. During this window, no carrier can turn you
          down or charge more because of your diagnosis.
        </p>
        <p>
          Miss it, and you may never get Medigap coverage. If you're within 6
          months of turning 65, call me now. This is the one thing I can't fix
          after the fact.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Part D coverage for CLL medications
        </h2>
        <p className="mb-3">
          Oral targeted therapies for CLL fall under Medicare Part D. These
          drugs can cost thousands per month at retail. Not every Part D plan
          covers every CLL medication on the same tier, and copays vary
          significantly between plans.
        </p>
        <p>
          I compare Part D formularies against your specific prescriptions so
          you're not surprised at the pharmacy counter during treatment.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 text-center">
        <p className="text-lg font-semibold mb-2">
          Talk to a broker who understands CLL and Medicare.
        </p>
        <p className="mb-4">
          Call{" "}
          <a href="tel:8555591700" className="text-blue-700 font-bold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/contact" className="text-blue-700 underline">
            get a free quote online
          </Link>
          . No pressure, no sign-up required.
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-700 underline"
            >
              Medicare Advantage vs. Medigap: Which Is Right for You?
            </Link>
          </li>
          <li>
            <Link
              href="/services/you-get-a-medicare-supplement-plan-if-you-have-a-pre-existing-condition"
              className="text-blue-700 underline"
            >
              Guaranteed Issue Medigap Rights Explained
            </Link>
          </li>
          <li>
            <Link
              href="/learn/medicare-parts-explained"
              className="text-blue-700 underline"
            >
              Medicare Part D Prescription Drug Plans
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-broker-for-cancer-survivors"
              className="text-blue-700 underline"
            >
              Medicare Broker for Cancer Patients
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
                href="/services/help-with-your-medicare-decision"
                className="text-blue-600 hover:underline"
              >
                Help With Your Medicare Decision
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-people-with-asthma"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For People With Asthma
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-people-with-crohns"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For People With Crohns
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-people-with-diabetes"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For People With Diabetes
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-people-with-lupus"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For People With Lupus
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-people-with-parkinsons"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For People With Parkinsons
              </Link>
            </li>
</ul>
            <div className="text-sm text-gray-600 mt-4">Helpful resources: <a href="https://www.medicare.gov/coverage/chemotherapy" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">Medicare.gov — Chemotherapy Coverage</a> and <a href="https://www.medicare.gov/health-drug-plans/medigap/basics/when-to-buy" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">Medicare.gov — When to Buy Medigap</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">New Jersey State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For free, unbiased counseling, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> or the <a href="https://www.nj.gov/dobi/division_insurance/" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a>.</div>
      </section>
    </>
  );
}