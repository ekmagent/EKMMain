import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for cancer survivors | Free Coverage Review | MedicareYourself",
  description:
    "Cancer survivor on Medicare? Anthony Orner reviews oncology, scan, and Part D coverage at no cost. Free plan review — call 855-559-1700 today.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-cancer-survivors" },
  openGraph: {
    title:
      "Medicare broker for cancer survivors | Free Coverage Review | MedicareYourself",
    description:
      "Medicare broker for cancer survivors navigating post-treatment coverage — scans, oncology visits, prescriptions. Anthony Orner reviews your plan for free.",
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
      name: "Medicare Broker for Cancer Survivors",
      item: "https://medicareyourself.com/services/medicare-broker-for-cancer-survivors",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Cancer Survivors — Because the Fight Doesn't End When Treatment Does",
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
    "https://medicareyourself.com/services/medicare-broker-for-cancer-survivors",
};

const faqs = [
  {
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. Medicare brokers are paid by the insurance carriers, not by you. My plan reviews, comparisons, and enrollment help are completely free. Your premium stays the same whether you enroll directly or through me.",
  },
  {
    question:
      "Does Medicare cover follow-up scans and oncology visits after cancer treatment?",
    answer:
      "Yes. Original Medicare (Part B) covers medically necessary follow-up care including CT scans, PET scans, blood work, and oncology visits at 80% after the $283 annual deductible. Your out-of-pocket share depends on whether you have a Supplement plan, Advantage plan, or neither.",
  },
  {
    question:
      "Can I switch from Medicare Advantage to a Supplement plan after a cancer diagnosis?",
    answer:
      "You can switch during certain windows, but medical underwriting may apply for Medigap plans outside your initial open enrollment period. Some federal guaranteed issue situations allow switching without health questions. Call me and I'll tell you exactly what applies to your situation.",
  },
  {
    question:
      "Are oral chemotherapy drugs covered under Medicare Part D?",
    answer:
      "Self-administered oral cancer drugs typically fall under Part D. In 2025 and beyond, Part D has a $2,000 annual out-of-pocket cap, which significantly reduces costs for expensive cancer medications. The specific drug must be on your plan's formulary, so the right Part D plan matters enormously.",
  },
];

export default function MedicareBrokerForCancerSurvivors() {
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
        <span className="text-gray-700">Medicare Broker for Cancer Survivors</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
        Medicare Broker for Cancer Survivors — Because the Fight Doesn't End When Treatment Does
      </h1>

      <Image
        src="/images/medicare-broker-for-cancer-survivors.webp"
        alt="Medicare broker for cancer survivors"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        A Medicare broker for cancer survivors does something no one else in your life is doing right now: making sure the plan you're on actually covers what comes next. Everyone celebrated when treatment ended. But nobody handed you a guide for the scans, the labs, the prescriptions, and the anxiety that follows.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        I'm Anthony Orner, a licensed Medicare broker. I help cancer survivors in remission or surveillance figure out whether their current plan has real gaps. The review is free.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What post-treatment coverage actually looks like on Medicare
        </h2>
        <p className="text-gray-700 mb-2">
          Original Medicare Part B covers 80% of outpatient cancer follow-up care after you meet the $283 annual deductible. That remaining 20% has no cap. One PET scan, one MRI, one specialist visit, and you're looking at hundreds out of pocket, fast.
        </p>
        <p className="text-gray-700">
          If you don't have a Supplement plan or an Advantage plan with reasonable cost-sharing, that 20% coinsurance accumulates with zero ceiling. That's the part most survivors don't realize until the bills arrive.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Follow-up scans, labs, and oncology visits: what's covered and what's not
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>CT scans, PET scans, and bloodwork ordered by your oncologist are covered under Part B when medically necessary.</li>
          <li>Oncology office visits, including surveillance check-ups, fall under Part B at 80%.</li>
          <li>IV chemotherapy administered in a clinic or hospital outpatient setting is Part B. Self-administered oral chemo drugs usually fall under Part D.</li>
          <li>Routine screenings like colonoscopies for colorectal cancer survivors may be covered at 100% as preventive care, depending on risk category and timing.</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Supplement vs. Advantage plans for ongoing cancer surveillance
        </h2>
        <p className="text-gray-700 mb-2">
          A Medigap Supplement (like Plan G) picks up most or all of that 20% coinsurance. You see any doctor who accepts Medicare. No prior authorizations, no network restrictions. For survivors who need regular oncology access, that freedom matters.
        </p>
        <p className="text-gray-700">
          Medicare Advantage plans often have lower premiums and an out-of-pocket maximum (typically $3,000 to $8,000). But they require networks and prior authorizations. I've heard from too many people whose Advantage plan dropped their hospital system mid-treatment. If your oncologist is in-network today, confirm they'll stay there.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          The Part D problem survivors don't see coming
        </h2>
        <p className="text-gray-700 mb-2">
          Oral cancer medications can cost thousands per month. Part D now has a $2,000 annual out-of-pocket cap, which helps significantly. But your specific drug must be on your plan's formulary, and tier placement determines your cost-sharing in the months before you hit that cap.
        </p>
        <p className="text-gray-700">
          The wrong Part D plan can mean $3,000 in the first three months. The right one can cut that in half. This is exactly the kind of thing I check in a plan review.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why network disruptions hit cancer survivors hardest
        </h2>
        <p className="text-gray-700 mb-2">
          Continuity of care isn't a luxury when your oncologist knows your tumor markers, your scan history, and your treatment response. Switching providers because a network changed on January 1st isn't an inconvenience. It's a medical risk.
        </p>
        <p className="text-gray-700">
          I help survivors stress-test their current plan. Is your oncologist in-network? Your hospital system? Your imaging center? If any answer is uncertain, we fix it before it becomes a crisis.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          A free plan review for the chapter nobody prepared you for
        </h2>
        <p className="text-gray-700 mb-2">
          You survived treatment. You shouldn't have to fight your insurance too. I'll review your current Medicare coverage, check your prescriptions against Part D formularies, and tell you plainly whether your plan protects you or leaves you exposed.
        </p>
        <p className="text-gray-700">
          No cost. No obligation. Just a straight answer from someone who does this every day.
        </p>
      </section>

      <div className="mt-10 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
        <p className="text-xl font-semibold text-blue-900 mb-2">
          Get a free coverage review from Anthony Orner
        </p>
        <p className="text-blue-800 mb-4">
          Call{" "}
          <a
            href="tel:8555591700"
            className="font-bold underline hover:text-blue-600"
          >
            855-559-1700
          </a>{" "}
          or{" "}
          <Link
            href="/contact"
            className="font-bold underline hover:text-blue-600"
          >
            Get a Free Quote
          </Link>
        </p>
      </div>

      <section className="mt-12">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Related resources
        </h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
              className="text-blue-700 hover:underline"
            >
              Medigap Plan G: What It Covers and What It Costs
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-700 hover:underline"
            >
              Medicare Advantage vs. Medigap: Which Is Right for You?
            </Link>
          </li>
          <li>
            <Link
              href="/learn/medicare-parts-explained"
              className="text-blue-700 hover:underline"
            >
              Understanding Medicare Part D Drug Coverage
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey"
              className="text-blue-700 hover:underline"
            >
              Medicare Guaranteed Issue Rights Explained
            </Link>
          </li>
        </ul>
            <div className="text-sm text-gray-600 mt-4"><p>Official resources: <a href="https://www.medicare.gov/publications/11931-medicare-coverage-of-cancer-treatment-services.pdf" rel="noopener noreferrer" target="_blank" className="underline">Medicare Coverage of Cancer Treatment Services (Medicare.gov PDF)</a> and <a href="https://www.medicare.gov/coverage/chemotherapy" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov: Chemotherapy Coverage</a>.</p></div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need free unbiased counseling? Contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a> for one-on-one Medicare help.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also reach the free <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-700 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey help: <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> — free, unbiased Medicare counseling.</div>
      </section>
    </main>
  );
}