import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare broker for people with asthma | Free Help Finding Coverage | MedicareYourself",
  description:
    "Have asthma and need Medicare? Broker Anthony Orner helps you find carriers more likely to approve Medigap coverage. Free help — call 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-people-with-asthma" },
  openGraph: {
    title:
      "medicare broker for people with asthma | Free Help Finding Coverage | MedicareYourself",
    description:
      "Medicare broker for people with asthma — Anthony Orner knows which carriers approve asthma applicants for Medigap. Free help finding the right plan.",
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
      name: "Medicare Broker for People With Asthma",
      item: "https://medicareyourself.com/services/medicare-broker-for-people-with-asthma",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for People With Asthma: Finding the Right Plan When Underwriting Gets Complicated",
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
    "https://medicareyourself.com/services/medicare-broker-for-people-with-asthma",
};

const faqs = [
  {
    question: "Can I get Medicare if I have asthma?",
    answer:
      "Yes. Original Medicare (Parts A and B) has no health questions and no pre-existing condition exclusions. The underwriting challenge comes when you apply for a Medicare Supplement (Medigap) plan outside your 6-month open enrollment window. During open enrollment, carriers must accept you regardless of asthma history.",
  },
  {
    question: "Do you have to go through a broker for Medicare?",
    answer:
      "No, a broker isn't required. But if you have asthma, a broker who knows which carriers are lenient with respiratory conditions can save you from unnecessary denials. My help is free — carriers pay me, not you.",
  },
  {
    question:
      "Will my asthma medications be covered under Medicare?",
    answer:
      "Medicare Part B covers nebulizers and certain inhalation therapies when medically necessary. Inhalers and prescription medications typically fall under a Part D drug plan. Formularies vary by plan, so check that your specific medications are covered before enrolling.",
  },
  {
    question:
      "What if I get denied for a Medigap plan because of asthma?",
    answer:
      "A denial from one carrier doesn't mean every carrier will deny you. Underwriting guidelines differ significantly. An experienced broker can identify which companies are most likely to approve your application based on your specific asthma history and medication use.",
  },
];

export default function MedicareBrokerForPeopleWithAsthma() {
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
          Medicare Broker for People With Asthma
        </span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Medicare Broker for People With Asthma: Finding the Right Plan When
          Underwriting Gets Complicated
        </h1>

        <Image
          src="/images/medicare-broker-for-people-with-asthma.webp"
          alt="medicare broker for people with asthma"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Medicare broker for people with asthma is what I do every week. You
          know your inhalers, your triggers, your rescue plan. What you probably
          don't know is which insurance carriers will approve your Medigap
          application and which ones will flat-out decline you for using a daily
          controller medication.
        </p>
        <p className="text-lg mb-6">
          I'm Anthony Orner, a licensed Medicare broker, and I help people with
          asthma find real coverage without guessing.
        </p>

        <PhoneCTA />

        <section className="mt-8 mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            How asthma affects Medicare Supplement underwriting
          </h2>
          <p className="mb-2">
            Original Medicare itself doesn't care about pre-existing conditions.
            Parts A and B accept everyone who qualifies by age or disability. The
            problem shows up when you want a Medigap plan outside your initial
            6-month open enrollment window.
          </p>
          <p className="mb-2">
            During underwriting, carriers ask about your diagnosis, medication
            history, hospitalizations, and ER visits. Mild intermittent asthma
            with a rescue inhaler? Often approved. Daily controller medications
            like Advair or Symbicort? Some carriers flag that as a higher risk
            and decline.
          </p>
          <p>
            Your Medigap Open Enrollment Period starts the month you turn 65 and
            are enrolled in Part B. During those 6 months, no health questions.
            Miss that window and underwriting kicks in.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            Which carriers are most lenient with asthma applicants
          </h2>
          <p className="mb-2">
            This is where a broker earns their keep. Not every carrier draws the
            line in the same place. Some decline anyone on a daily inhaler.
            Others approve applicants with well-controlled asthma who haven't
            been hospitalized in 2-3 years.
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-2">
            <li>
              Some carriers distinguish between intermittent and persistent
              asthma
            </li>
            <li>
              Others focus on whether you've had ER visits or oral steroid bursts
              recently
            </li>
            <li>
              A few will approve you with a rate-up instead of a flat denial
            </li>
          </ul>
          <p>
            I track these underwriting guidelines across dozens of carriers so
            you don't submit blind applications and collect denials.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            Plan G vs. Medicare Advantage when you have asthma
          </h2>
          <p className="mb-2">
            Plan G covers everything Original Medicare doesn't except the Part B
            deductible ($283/year in 2026). You see any doctor who accepts
            Medicare. No referrals. No networks. For someone managing asthma with
            a pulmonologist, that flexibility matters.
          </p>
          <p className="mb-2">
            Medicare Advantage plans have no medical underwriting, so they accept
            everyone during enrollment periods. But they use networks, require
            prior authorizations for some treatments, and can change benefits
            yearly.
          </p>
          <p>
            If you can pass Medigap underwriting, Plan G usually gives you more
            predictable costs. If you can't, Medicare Advantage is your
            guaranteed-acceptance backup. Either way, you still need a Part D
            plan to cover inhalers and asthma medications.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            What Anthony Orner does differently for clients with pre-existing
            conditions
          </h2>
          <p className="mb-2">
            I pre-screen your health history against actual carrier underwriting
            guidelines before submitting a single application. That means fewer
            denials on your record and a faster path to the right plan.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>I review your medication list and claims history</li>
            <li>
              I match you with carriers most likely to approve your application
            </li>
            <li>
              If Medigap isn't realistic right now, I find the best Advantage
              plan for your prescriptions and doctors
            </li>
            <li>My help costs you nothing. Carriers pay the commission</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            What Medicare covers for asthma treatment
          </h2>
          <p className="mb-2">
            Medicare Part B covers nebulizers and certain inhalation therapies as
            durable medical equipment when your doctor prescribes them. Pulmonary
            rehabilitation, diagnostic spirometry, and office visits with your
            pulmonologist also fall under Part B.
          </p>
          <p>
            Prescription inhalers, oral medications like montelukast, and
            biologics for severe asthma are covered under Part D. Formulary
            placement varies by plan, so the copay on your Symbicort could be
            $30 on one plan and $90 on another. I check this before recommending
            anything.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Timing matters more than you think
          </h2>
          <p className="mb-2">
            If you're turning 65 soon, apply for your Medigap plan during your
            open enrollment period. Guaranteed issue. No health questions. No
            asthma underwriting. Start the process about 6 months before your
            Part B effective date so everything lines up.
          </p>
          <p>
            Already past that window? Call me anyway. I've gotten plenty of
            asthma clients approved outside open enrollment by knowing which
            doors to knock on.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-6 mb-8 text-center">
          <p className="text-xl font-semibold mb-2">
            Get honest help from a broker who knows asthma underwriting.
          </p>
          <p className="text-2xl font-bold mb-3">
            <a href="tel:8555591700" className="underline">
              855-559-1700
            </a>
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Get a Free Quote
          </Link>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
                className="text-blue-600 hover:underline"
              >
                Medicare Supplement Plan G: What It Covers in 2026
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
                href="/medicare-supplement/new-jersey"
                className="text-blue-600 hover:underline"
              >
                Medigap Underwriting: What to Expect With Pre-Existing
                Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/learn/medicare-parts-explained"
                className="text-blue-600 hover:underline"
              >
                Medicare Part D: Finding a Plan That Covers Your Medications
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
            <li>
              <Link
                href="/services/medicare-broker-for-people-with-cll"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For People With Cll
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
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/coverage/pulmonary-rehabilitation-programs" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Pulmonary Rehabilitation Coverage</a> and <a href="https://www.medicare.gov/basics/costs/medicare-costs" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — 2026 Costs at a Glance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need unbiased counseling? Contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey SHIP (State Health Insurance Assistance Program)</a> for free Medicare guidance.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: <a href="https://www.state.nj.us/dobi/division_insurance/ship/ship.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> offers free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need unbiased local help? Contact <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.htm" rel="noopener noreferrer" target="_blank" className="underline">New Jersey SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For free one-on-one Medicare counseling in your state, contact your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific help, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
      </section>
      </article>
    </>
  );
}