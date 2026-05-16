import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare broker for people with parkinsons | Free Consultation | MedicareYourself",
  description:
    "Medicare broker for people with Parkinson's — Anthony Orner matches your specialists, medications, and therapy needs to the right plan. Free consultation.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-people-with-parkinsons" },
  openGraph: {
    title:
      "medicare broker for people with parkinsons | Free Consultation | MedicareYourself",
    description:
      "Medicare broker for people with Parkinson's — Anthony Orner matches your specialists, medications, and therapy needs to the right plan. Free consultation.",
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
      name: "Medicare Broker for People With Parkinson's",
      item: "https://medicareyourself.com/services/medicare-broker-for-people-with-parkinsons",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for People With Parkinson's: Finding Coverage That Actually Fits",
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
  datePublished: "2026-03-17",
  dateModified: "2026-03-22",
};

const faqs = [
  {
    question: "Can I get Medicare if I have Parkinson's?",
    answer:
      "Yes. If you're 65 or older, you qualify for Medicare regardless of health conditions. If you're under 65, you may qualify through Social Security Disability after a 24-month waiting period. Parkinson's alone doesn't disqualify you from any Medicare plan type.",
  },
  {
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. Medicare brokers are paid by the insurance carriers, not by you. Anthony's consultations and plan recommendations are completely free. You'll never see a fee from us.",
  },
  {
    question:
      "Will my Parkinson's diagnosis affect which Medicare plans I can enroll in?",
    answer:
      "For Medicare Advantage, carriers must accept you regardless of pre-existing conditions during eligible enrollment periods. For Medigap, your health history can matter outside of your 6-month Open Enrollment Period. Guaranteed issue situations may also apply. Call to discuss your specific timeline.",
  },
  {
    question: "Does Medicare cover DBS surgery for Parkinson's?",
    answer:
      "Medicare covers deep brain stimulation (DBS) when medically necessary and certain clinical criteria are met. Part A covers the hospital stay, Part B covers the physician services. Your out-of-pocket costs depend heavily on whether you have a Medigap plan, Medicare Advantage, or Original Medicare alone.",
  },
];

export default function MedicareBrokerForPeopleWithParkinsons() {
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
          Medicare Broker for People With Parkinson&apos;s
        </span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Medicare Broker for People With Parkinson&apos;s: Finding Coverage
          That Actually Fits
        </h1>

        <Image
          src="/images/medicare-broker-for-people-with-parkinsons_vector.webp"
          alt="medicare broker for people with parkinsons"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          A Medicare broker for people with Parkinson&apos;s does one thing a
          generic agent won&apos;t: build your plan around the reality of
          movement disorder specialists, carbidopa-levodopa refills, physical
          therapy sessions, and the possibility of procedures like DBS down the
          road. I&apos;m Anthony Orner, and I help Parkinson&apos;s patients and
          their families match coverage to actual treatment needs, not just check
          a box during enrollment.
        </p>

        <p className="mb-6">
          This consultation is free. The carriers pay me, you don&apos;t.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why Parkinson&apos;s patients need predictable out-of-pocket costs
          </h2>
          <p className="mb-3">
            Parkinson&apos;s isn&apos;t one specialist and one prescription.
            It&apos;s a neurologist, a movement disorder specialist, a physical
            therapist, maybe an occupational therapist and a speech therapist
            too. Each visit has a copay or coinsurance. Each medication has a
            tier. The costs stack up fast when you&apos;re managing a condition
            that touches every part of daily life.
          </p>
          <p>
            With Original Medicare alone, you pay 20% of Part B services with no
            annual cap. That 20% on a $100,000 DBS surgery is $20,000 out of
            your pocket. Predictability matters here more than almost any other
            diagnosis.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Medigap vs Medicare Advantage when you see multiple specialists
          </h2>
          <p className="mb-3">
            Medicare Advantage plans use networks. If your movement disorder
            specialist is out of network, you either pay more or switch doctors.
            For someone with Parkinson&apos;s who&apos;s built trust with a care
            team, switching isn&apos;t just inconvenient. It can set back your
            treatment.
          </p>
          <p className="mb-3">
            Medigap (Medicare Supplement) plans work with any provider who
            accepts Medicare. No referrals. No network restrictions. Plan G, the
            most popular option, covers everything except the $283 annual Part B
            deductible. Rates vary by carrier, age, and location.
          </p>
          <p>
            Medicare Advantage can work well if your entire care team is
            in-network and you want built-in drug coverage. I&apos;ll compare
            both options against your actual provider list.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Guaranteed issue situations that skip medical underwriting
          </h2>
          <p className="mb-3">
            Outside your initial Medigap Open Enrollment Period (6 months
            starting when you&apos;re 65+ and enrolled in Part B), carriers in
            most states can ask health questions. A Parkinson&apos;s diagnosis
            could mean higher rates or denial.
          </p>
          <p>
            But federal guaranteed issue rights exist. If you&apos;re losing
            employer coverage, leaving a Medicare Advantage plan, or your
            carrier exits your area, you can get Medigap without medical
            underwriting. Timing these windows correctly is one of the most
            valuable things a broker does.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How Anthony builds a plan around your treatment schedule
          </h2>
          <p className="mb-3">
            I start with your medications, your doctors, and your therapy
            schedule. Not a sales script. I check every drug on the Part D
            formulary. I verify every provider is in-network (or confirm you
            don&apos;t need a network at all). Then I show you the numbers side
            by side.
          </p>
          <p>
            Families dealing with Parkinson&apos;s have enough on their plate.
            The last thing you need is a surprise bill because someone didn&apos;t
            check whether your neurologist takes the plan they sold you.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What about Part D drug coverage for Parkinson&apos;s medications?
          </h2>
          <p className="mb-3">
            Parkinson&apos;s medications like carbidopa-levodopa, dopamine
            agonists, and MAO-B inhibitors land on different formulary tiers
            depending on the plan. The wrong Part D plan could cost you hundreds
            more per year than the right one.
          </p>
          <p>
            I run your full medication list through every available Part D plan
            in your area and rank them by total annual cost, not just the monthly
            premium.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            The financial burden families don&apos;t talk about
          </h2>
          <p className="mb-3">
            Parkinson&apos;s is progressive. Costs grow over time. Adult
            children become caregivers. Financial planning for a parent with PD
            means thinking about skilled nursing facility coverage too. Under
            Original Medicare, SNF coinsurance runs $209.50/day for days 21
            through 100 in 2026. A good Medigap plan covers that entirely.
          </p>
          <p>
            Getting the right Medicare coverage now saves real money later. And
            it takes one less thing off your family&apos;s plate.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-8 my-10 text-center">
          <p className="text-xl font-semibold mb-3">
            Talk to a broker who understands Parkinson&apos;s care needs.
          </p>
          <p className="text-2xl font-bold mb-4">
            <a href="tel:8555591700" className="underline">
              855-559-1700
            </a>
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100"
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
                href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
                className="text-blue-600 hover:underline"
              >
                Medigap Plan G: What It Covers and What It Costs
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-supplement/new-jersey/vs-medicare-advantage"
                className="text-blue-600 hover:underline"
              >
                Medicare Advantage vs Medigap: How to Choose
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-supplement/new-jersey"
                className="text-blue-600 hover:underline"
              >
                Guaranteed Issue Rights for Medigap
              </Link>
            </li>
            <li>
              <Link
                href="/learn/medicare-parts-explained"
                className="text-blue-600 hover:underline"
              >
                Part D Drug Coverage: Finding the Right Plan
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
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/coverage/deep-brain-stimulation-for-essential-tremor-parkinsons-disease" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Deep Brain Stimulation coverage</a> and <a href="https://www.medicare.gov/basics/costs/medicare-costs" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — 2026 costs at a glance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
      </section>
      </article>
    </>
  );
}