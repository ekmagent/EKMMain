import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for lupus patients | Free Coverage Review | MedicareYourself",
  description:
    "Medicare broker for lupus patients in NJ. Anthony Orner finds plans covering biologics, labs, and specialist visits through every flare. Free plan review.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-lupus-patients" },
  openGraph: {
    title:
      "Medicare broker for lupus patients | Free Coverage Review | MedicareYourself",
    description:
      "Medicare broker for lupus patients in NJ. Anthony Orner finds plans covering biologics, labs, and specialist visits through every flare. Free plan review.",
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
      name: "Medicare Broker for Lupus Patients",
      item: "https://medicareyourself.com/services/medicare-broker-for-lupus-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Lupus Patients Whose Coverage Shouldn't Be as Unpredictable as Their Flares",
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
    question: "Can you get Medicare with lupus?",
    answer:
      "Yes. If you're 65 or older, you qualify for Medicare regardless of lupus. If you're under 65, you can qualify through Social Security Disability Insurance (SSDI) after a 24-month waiting period from when disability benefits begin. Some lupus patients with end-stage renal disease may qualify sooner.",
  },
  {
    question: "What insurance covers lupus treatments like biologics?",
    answer:
      "Medicare covers lupus treatment across multiple parts. Part B covers infused biologics like belimumab (Benlysta) and anifrolumab (Saphnelo) administered in a doctor's office or infusion center. Self-injected biologics may fall under Part D. Lab work, rheumatology visits, and imaging are covered under Part B. The right Medigap or Advantage plan reduces what you pay out of pocket.",
  },
  {
    question: "How does a lupus diagnosis change my Medigap options in NJ?",
    answer:
      "During your Medigap Open Enrollment Period (the 6 months starting when you turn 65 and have Part B), insurers in NJ cannot deny you or charge more because of lupus. Outside that window, medical underwriting applies, and a lupus diagnosis could mean higher premiums or denial. Timing your enrollment correctly is critical.",
  },
  {
    question: "Why would a lupus patient need a Medicare broker?",
    answer:
      "Lupus requires coordination across rheumatologists, labs, imaging, and high-cost medications. A broker who understands these needs can match you with a plan that keeps your specialists in-network, covers your specific drugs, and protects you from unexpected costs during flares. Anthony Orner provides this review at no cost to you.",
  },
];

export default function MedicareBrokerForLupusPatients() {
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
        <span className="text-gray-700">Medicare Broker for Lupus Patients</span>
      </nav>

      <h1 className="text-3xl font-bold mb-4 leading-snug">
        Medicare Broker for Lupus Patients Whose Coverage Shouldn&apos;t Be as
        Unpredictable as Their Flares
      </h1>

      <Image
        src="/images/medicare-broker-for-lupus-patients.webp"
        alt="Medicare broker for lupus patients"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        A Medicare broker for lupus patients does one thing most plans don't: account for what happens when your body turns on you without warning. You didn't spend years fighting for a diagnosis just to fight your insurance company every time you need labs, a rheumatology visit, or a biologic infusion.
      </p>
      <p className="text-lg mb-6">
        I'm Anthony Orner, a licensed Medicare broker in New Jersey. I help lupus patients find plans built for how they actually use healthcare. No cost to you.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Rheumatology visits, biologics, and lab work: what your plan must cover
        </h2>
        <p className="mb-2">
          Medicare Part B covers doctor-administered biologics like Benlysta and Saphnelo at 80% after the $283 annual deductible. You're responsible for the remaining 20%, which on a $3,000+ infusion adds up fast.
        </p>
        <p className="mb-2">
          Part B also covers ANA panels, complement levels, CBC draws, and rheumatology visits. But if your self-injected medication falls under Part D, copays depend entirely on your plan's formulary tier. Wrong plan, wrong tier, and suddenly you're staring at a bill that forces you to skip doses.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          How a lupus diagnosis changes your Medigap options in NJ
        </h2>
        <p className="mb-2">
          Your Medigap Open Enrollment Period lasts 6 months, starting the month you turn 65 and are enrolled in Part B. During that window, no carrier in NJ can deny you or charge more because of lupus.
        </p>
        <p className="mb-2">
          Miss that window and medical underwriting kicks in. A lupus diagnosis with organ involvement or biologic use can mean rejection. I've seen it happen. If you're approaching 65, call me before that clock starts.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why lupus patients often get stuck in the wrong Medicare plan
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>They picked an Advantage plan with a narrow network that dropped their rheumatologist mid-year.</li>
          <li>Their biologic moved to a higher Part D tier, jumping copays from $40 to $1,500 a month.</li>
          <li>They didn't realize infusion center coverage varies by plan.</li>
          <li>They chose the cheapest premium without checking specialist access or drug formularies.</li>
        </ul>
        <p className="mt-3">
          Lupus costs aren't optional. When you're in a flare, you can't shop around or wait until next enrollment.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          What I check before recommending a plan
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Every medication you take, including infusions, injectables, and daily pills</li>
          <li>Your rheumatologist, dermatologist, nephrologist, and any other specialists</li>
          <li>How often you need lab work and which facilities you use</li>
          <li>Whether a Medigap plan or Medicare Advantage plan gives you better protection at your usage level</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          The real cost of getting this wrong
        </h2>
        <p className="mb-2">
          I talk to people who've stopped taking biologics because their plan made them unaffordable. Others have waited months for a new rheumatologist because their network shrank. Some didn't know about manufacturer assistance programs or Extra Help through Social Security.
        </p>
        <p>
          These aren't abstract problems. They're the difference between managing lupus and being managed by it.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          Get matched with coverage that shows up when your body won&apos;t
        </h2>
        <p className="mb-2">
          You already spend enough energy explaining your condition to people who don't get it. Your Medicare plan shouldn't be another fight.
        </p>
        <p>
          Call me for a free plan review. I'll look at your medications, your doctors, and your actual healthcare needs. Then I'll show you what's available and what it costs. No pressure, no sales pitch.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Talk to a broker who understands lupus coverage.
        </p>
        <p className="text-2xl font-bold mb-3">
          <a href="tel:8555591700" className="underline">
            855-559-1700
          </a>
        </p>
        <Link
          href="/quote"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Get a Free Quote
        </Link>
      </div>

      <section className="mt-10">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/services/best-medicare-plan-for-chronic-conditions"
              className="text-blue-600 hover:underline"
            >
              Medicare Broker for Chronic Conditions
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/turning-65"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment in NJ
            </Link>
          </li>
          <li>
            <Link
              href="/learn/medicare-parts-explained"
              className="text-blue-600 hover:underline"
            >
              Medicare Part D and Biologic Medications
            </Link>
          </li>
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
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/coverage/infusion-pumps-supplies" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Infused drug coverage</a> · <a href="https://www.medicare.gov/basics/get-started-with-medicare/medicare-basics/parts-of-medicare" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Parts of Medicare</a> · <a href="https://www.state.nj.us/dobi/division_insurance/ship/shipindex.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP — Free Medicare counseling</a></div>
      </section>
    </main>
  );
}