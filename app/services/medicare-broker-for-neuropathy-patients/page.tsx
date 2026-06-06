import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for neuropathy patients | Free Plan Review | MedicareYourself",
  description:
    "Medicare broker for neuropathy patients — compare plans covering EMGs, nerve tests, podiatry, PT & Rx. Free review with Anthony Orner. Call 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-neuropathy-patients" },
  openGraph: {
    title:
      "Medicare broker for neuropathy patients | Free Plan Review | MedicareYourself",
    description:
      "Medicare broker for neuropathy patients comparing plans that cover nerve testing, specialist visits, and Rx. Anthony Orner finds the right fit — free review.",
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
      name: "Medicare Broker for Neuropathy Patients",
      item: "https://medicareyourself.com/services/medicare-broker-for-neuropathy-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Neuropathy Patients: Coverage for Nerve Pain Treatment and Testing",
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
    question: "Will Medicare pay for neuropathy treatment?",
    answer:
      "Yes. Medicare Part B covers doctor visits, nerve conduction studies, EMGs, and physical therapy for neuropathy when ordered by your physician. Part D covers prescription medications like gabapentin and duloxetine. Medicare Advantage plans often bundle these benefits with additional coverage like podiatry visits. The specifics depend on your plan type, so a plan review helps you understand exactly what's covered.",
  },
  {
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. Medicare brokers like Anthony Orner are paid by the insurance carriers, not by you. A plan review is completely free, and there's no obligation to enroll. You get expert guidance at zero cost.",
  },
  {
    question:
      "Does Medicare cover podiatrist visits for non-diabetic neuropathy?",
    answer:
      "Original Medicare limits routine podiatry coverage, especially for non-diabetic neuropathy. However, some Medicare Advantage plans include podiatry benefits. If foot care is a priority, it's worth comparing Advantage plans in your area that cover podiatrist visits.",
  },
  {
    question: "Can I switch Medigap plans if I was denied due to neuropathy?",
    answer:
      "Outside your Medigap Open Enrollment Period, carriers can use medical underwriting and may deny applicants with conditions like peripheral neuropathy. If you're within your 6-month open enrollment window or have a federal guaranteed issue right, you can't be denied. Call to discuss your specific situation and timing.",
  },
];

export default function MedicareBrokerForNeuropathyPatients() {
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
          Medicare Broker for Neuropathy Patients
        </span>
      </nav>

      <article className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Medicare Broker for Neuropathy Patients: Coverage for Nerve Pain
          Treatment and Testing
        </h1>

        <Image
          src="/images/medicare-broker-for-neuropathy-patients.webp"
          alt="Medicare broker for neuropathy patients"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Medicare broker for neuropathy patients isn't a luxury. When your feet
          burn at night, when gabapentin barely takes the edge off, and when a
          supplement carrier denies you because of a peripheral neuropathy
          diagnosis, you need someone who actually understands how these plans
          handle nerve pain care.
        </p>
        <p className="text-lg mb-6">
          I'm Anthony Orner, a licensed Medicare broker. I compare plans
          specifically around the treatments neuropathy patients use most: nerve
          testing, specialist visits, and the prescriptions that keep daily pain
          manageable.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How Medicare covers nerve conduction studies and EMGs
          </h2>
          <p className="mb-2">
            Medicare Part B covers nerve conduction studies (NCS) and
            electromyography (EMGs) when your doctor orders them to diagnose or
            monitor neuropathy. You pay 20% of the Medicare-approved amount after
            your $283 annual Part B deductible.
          </p>
          <p>
            A Medigap plan can cover that 20% coinsurance. A Medicare Advantage
            plan may require a copay instead. Either way, you shouldn't skip
            diagnostic testing because of cost uncertainty.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Prescription drug plans that cover neuropathy medications
          </h2>
          <p className="mb-2">
            Common neuropathy drugs include gabapentin, pregabalin (Lyrica),
            duloxetine, and topical lidocaine patches. Part D plans vary widely
            in how they tier and price these medications.
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-2">
            <li>
              The 2025 Part D out-of-pocket cap of $2,000/year applies going
              forward, which matters if you're on expensive brand-name nerve pain
              medications.
            </li>
            <li>
              Lidocaine patches may face coverage restrictions for non-diabetic
              neuropathy. I check formularies before you enroll so there are no
              surprises.
            </li>
            <li>
              Generic gabapentin is on most formularies at low cost. Pregabalin
              costs more and lands on higher tiers with some carriers.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Medigap or Advantage: which handles specialist visits better
          </h2>
          <p className="mb-2">
            Neuropathy care usually means regular neurologist visits, sometimes
            podiatry, and occasionally physical therapy. With Original Medicare
            plus a Medigap plan, you see any Medicare-accepting specialist
            without referrals or network restrictions.
          </p>
          <p>
            Medicare Advantage plans may require referrals and limit you to a
            network, but some include podiatry and OTC pain relief allowances
            that Original Medicare doesn't cover. The right choice depends on
            your doctors, your medications, and how often you need specialist
            care.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why neuropathy patients get denied Medigap coverage
          </h2>
          <p className="mb-2">
            If you apply for a Medigap plan outside your 6-month open enrollment
            window, carriers can ask health questions. A peripheral neuropathy
            diagnosis can trigger a denial. This catches people off guard.
          </p>
          <p>
            Timing matters. During your Medigap Open Enrollment Period (6 months
            starting the month you turn 65 and are enrolled in Part B), no
            carrier can deny you or charge more because of neuropathy. Miss that
            window and your options shrink.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Diabetic vs. non-diabetic neuropathy coverage differences
          </h2>
          <p className="mb-2">
            Medicare covers diabetic neuropathy more generously. If you have
            diabetes, Part B pays for therapeutic shoes, regular foot exams, and
            enhanced preventive care. Non-diabetic neuropathy patients often
            don't qualify for the same podiatry or footwear benefits.
          </p>
          <p>
            That gap frustrates people. If your neuropathy stems from
            chemotherapy, autoimmune conditions, or idiopathic causes, I help you
            find plans that fill in what Original Medicare leaves out.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Book a free plan review tailored to neuropathy care
          </h2>
          <p className="mb-2">
            I look at your specific medications, your specialists, and your
            diagnosis to compare plans side by side. No cost, no obligation. If
            your current plan isn't covering what you need, or if a claim was
            denied, let's talk about your options.
          </p>
          <p>
            Over half of Medicare denials get overturned on appeal, but most
            people never file one. You don't have to accept a denial without
            pushback.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-6 text-center my-10">
          <p className="text-xl font-semibold mb-2">
            Call 855-559-1700 for a free neuropathy-focused plan review.
          </p>
          <p className="mb-4">
            Anthony Orner compares your options at no cost. No pressure, no
            obligation.
          </p>
          <Link
            href="tel:8555591700"
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
                Medigap vs. Medicare Advantage: How to Choose
              </Link>
            </li>
            <li>
              <Link
                href="/learn/medicare-parts-explained"
                className="text-blue-600 hover:underline"
              >
                Medicare Part D Drug Coverage Explained
              </Link>
            </li>
            <li>
              <Link
                href="/services/best-medicare-plan-for-chronic-conditions"
                className="text-blue-600 hover:underline"
              >
                Medicare for Chronic Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/services/help-with-your-medicare-decision"
                className="text-blue-600 hover:underline"
              >
                Book a Free Medicare Plan Review
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
</ul>
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/coverage/nerve-conduction-studies" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">Medicare.gov — Nerve conduction studies coverage</a> and <a href="https://www.medicare.gov/coverage/foot-care" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">Medicare.gov — Foot care coverage</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Free unbiased counseling: <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> offers one-on-one Medicare guidance in every state.</div>
            <div className="text-sm text-gray-600 mt-4">For free, unbiased counseling on neuropathy coverage in your state, contact your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> or the <a href="https://www.nj.gov/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Free unbiased counseling: <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need unbiased state help? Contact <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">your local SHIP counselor</a> or the <a href="https://www.nj.gov/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific help, contact the <a href="https://www.state.nj.us/dobi/division_insurance/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey Department of Banking and Insurance</a> or your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">SHIP counselor</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Free local help: <a href="https://www.state.nj.us/dobi/division_insurance/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need unbiased help? Contact <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.htm" rel="noopener noreferrer" target="_blank" className="underline">New Jersey SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Free unbiased counseling: <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need unbiased local help? Contact <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">your State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
      </section>
      </article>
    </>
  );
}