import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for macular degeneration patients | Free Plan Match | MedicareYourself",
  description:
    "Medicare broker helping macular degeneration patients find plans covering anti-VEGF injections, OCT scans & retina specialists. Call 855-559-1700 today.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-macular-degeneration-patients" },
  openGraph: {
    title:
      "Medicare broker for macular degeneration patients | Free Plan Match | MedicareYourself",
    description:
      "Medicare broker for macular degeneration patients finding plans that cover eye injections and retinal monitoring. Anthony Orner provides free plan matching.",
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
      name: "Medicare Broker for Macular Degeneration Patients",
      item: "https://medicareyourself.com/services/medicare-broker-for-macular-degeneration-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Macular Degeneration Patients — Coverage for Injections, Monitoring, and More",
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
    question: "Will Medicare pay for macular degeneration treatment?",
    answer:
      "Yes. Medicare Part B covers medically necessary AMD treatments including anti-VEGF injections, laser therapy, and diagnostic tests like OCT scans. After your $283 annual Part B deductible, you pay 20% of the Medicare-approved amount.",
  },
  {
    question:
      "Does Medicare cover Eylea and Avastin injections for wet AMD?",
    answer:
      "Part B covers both Eylea and Avastin when administered in a doctor's office. Costs vary significantly: Avastin runs about $50 per injection while Eylea can exceed $1,850. Your retina specialist can help determine which drug is right for you, and a Medigap plan can cover the 20% coinsurance.",
  },
  {
    question:
      "Is a Medicare Advantage plan or Original Medicare better for macular degeneration?",
    answer:
      "Original Medicare with a Medigap supplement often gives AMD patients wider access to retina specialists without referrals or network restrictions. Some Medicare Advantage plans add routine vision benefits, but may limit which specialists you can see. Call us at 855-559-1700 to compare options based on your specific doctors and treatment plan.",
  },
  {
    question: "Does Medicare cover AREDS vitamins for dry AMD?",
    answer:
      "AREDS2 supplements are available over the counter, so Part D typically does not cover them. However, if your doctor writes a prescription for a specific formulation, some Part D plans may cover it. We can check your plan's formulary to find out.",
  },
];

export default function MedicareBrokerMacularDegenerationPage() {
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
          Medicare Broker for Macular Degeneration Patients
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
        Medicare Broker for Macular Degeneration Patients — Coverage for
        Injections, Monitoring, and More
      </h1>

      <Image
        src="/images/medicare-broker-for-macular-degeneration-patients.webp"
        alt="Medicare broker for macular degeneration patients"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        A Medicare broker for macular degeneration patients does one thing well: match you with coverage that actually fits your treatment. If you're getting eye injections every month or tracking dry AMD with regular scans, the wrong plan can cost you thousands.
      </p>
      <p className="text-lg mb-6">
        I'm Anthony Orner, a licensed Medicare broker. I help AMD patients sort through Part B, Part D, Medigap, and Advantage options so nothing falls through the cracks. The call is free.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          How Medicare Part B covers anti-VEGF eye injections
        </h2>
        <p className="mb-3">
          Part B covers anti-VEGF drugs like Avastin, Eylea, and Lucentis when your retina specialist administers them in-office. These are classified as Part B drugs, not Part D.
        </p>
        <p className="mb-3">
          After your $283 annual Part B deductible (2026), you pay 20% of the Medicare-approved amount. That 20% adds up fast when Eylea runs over $1,850 per injection and you're going in monthly. A Medigap plan can cover that coinsurance completely.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Frequency of retinal exams and OCT scans under Medicare
        </h2>
        <p className="mb-3">
          Part B covers diagnostic OCT scans, fluorescein angiography, and visual acuity testing when your doctor orders them as medically necessary. For wet AMD patients, that often means imaging every 4 to 8 weeks.
        </p>
        <p>
          Dry AMD patients typically see a retina specialist once or twice a year for monitoring. If your condition progresses, your doctor adjusts the schedule and Medicare follows.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Part D coverage for dry AMD supplements and prescriptions
        </h2>
        <p className="mb-3">
          AREDS2 vitamins are the standard recommendation for intermediate dry AMD. Since they're available over the counter, most Part D plans won't cover them. Budget roughly $25 to $40 a month out of pocket.
        </p>
        <p>
          If your ophthalmologist prescribes other medications, Part D formularies vary by plan. I check your specific drugs against available plans to find the lowest total cost.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Why plan choice matters more with AMD
        </h2>
        <p className="mb-3">
          People dealing with macular degeneration often worry about two things: keeping their specialist and controlling costs if treatment escalates. Those are the right concerns.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-3">
          <li>
            <strong>Original Medicare + Medigap:</strong> See any retina specialist who accepts Medicare. No referrals. Medigap covers the 20% coinsurance on injections.
          </li>
          <li>
            <strong>Medicare Advantage:</strong> May add routine eye exams and eyewear benefits, but can restrict which specialists you see and require prior authorization for treatments.
          </li>
        </ul>
        <p>
          If your retina specialist is already managing your care, switching to a plan with a narrow network can disrupt treatment at the worst time.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          The real cost concern nobody warns you about
        </h2>
        <p className="mb-3">
          Wet AMD treatment can mean 12 or more injections a year. At 20% coinsurance on a $1,850 drug, that's over $4,400 annually in out-of-pocket costs with Original Medicare alone. Avastin brings that down dramatically at roughly $50 per injection, but not every specialist uses it.
        </p>
        <p>
          A Medigap Plan G or Plan N eliminates or reduces that exposure. I'll run the numbers based on your actual treatment frequency.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Get a free plan match for your macular degeneration care
        </h2>
        <p className="mb-3">
          You shouldn't have to figure out formularies, coinsurance math, and specialist networks while managing a condition that threatens your vision. That's what I do.
        </p>
        <p>
          Call me at <strong>855-559-1700</strong> for a free, no-pressure plan comparison. I'll look at your doctors, your drugs, and your treatment schedule and show you what makes sense.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
        <p className="text-xl font-bold mb-2">
          Talk to a broker who understands AMD coverage
        </p>
        <p className="text-lg mb-4">
          Call <strong>855-559-1700</strong> or{" "}
          <Link
            href="/quote"
            className="underline font-semibold text-white"
          >
            Get a Free Quote
          </Link>
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
              Original Medicare vs. Medicare Advantage
            </Link>
          </li>
          <li>
            <Link
              href="/learn/medicare-parts-explained"
              className="text-blue-600 hover:underline"
            >
              Medicare Part B Costs in 2026
            </Link>
          </li>
          <li>
            <Link
              href="/learn/medicare-parts-explained"
              className="text-blue-600 hover:underline"
            >
              Medicare Part D Explained
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
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/coverage/macular-degeneration-tests-treatment" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Macular Degeneration Tests &amp; Treatment Coverage</a> and <a href="https://www.medicare.gov/basics/costs/medicare-costs" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Part B Costs &amp; Deductible</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free Medicare counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling from the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
      </section>
    </main>
  );
}