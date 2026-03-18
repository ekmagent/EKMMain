import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "which medicare supplemental plan best for copd patient | Free Guidance | MedicareYourself",
  description:
    "Which Medicare Supplemental plan is best for a COPD patient? Compare Plan G vs. Plan N for pulmonology, oxygen, and inhalers. Free broker guidance.",
  openGraph: {
    title:
      "which medicare supplemental plan best for copd patient | Free Guidance | MedicareYourself",
    description:
      "Which Medicare Supplemental plan is best for a COPD patient? Compare Plan G vs. Plan N for pulmonology, oxygen, and inhalers. Free broker guidance.",
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
      item: "https://www.medicareyourself.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Medicare Guides",
      item: "https://www.medicareyourself.com/medicare-guides",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Which Medicare Supplemental Plan Best for COPD Patient",
      item: "https://www.medicareyourself.com/services/which-medicare-supplemental-plan-best-for-copd-patient",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Which Medicare Supplemental Plan Is Best for a COPD Patient?",
  author: {
    "@type": "Person",
    name: "Anthony Orner",
    url: "https://www.medicareyourself.com/about",
  },
  publisher: {
    "@type": "Organization",
    name: "EasyKind Medicare",
    alternateName: "MedicareYourself",
  },
  datePublished: "2025-07-01",
  dateModified: "2025-07-01",
};

const faqs = [
  {
    question:
      "Which Medicare Supplement plan covers the most COPD-related costs?",
    answer:
      "Plan G covers the most. After you pay the $283 Part B deductible, Plan G picks up 100% of remaining Medicare-approved costs, including pulmonologist visits, oxygen therapy, and pulmonary rehabilitation. You won't face copays or coinsurance surprises at the doctor's office.",
  },
  {
    question: "Does Medigap cover COPD inhalers and prescription medications?",
    answer:
      "No. Medigap plans do not cover prescription drugs. You need a separate Medicare Part D plan for inhalers like Trelegy, Breztri, or albuterol nebulizer solutions. Starting in 2025, Part D caps your annual out-of-pocket drug costs at $2,000, which helps with expensive COPD medications.",
  },
  {
    question: "What is the new prescription cost cap for COPD drugs?",
    answer:
      "Medicare Part D now caps annual out-of-pocket prescription costs at $2,000. This is significant for COPD patients who use multiple inhalers or nebulizer medications, since some of these drugs can cost $300-$500 per month without the cap.",
  },
  {
    question:
      "Can I get a Medigap plan if I've already been diagnosed with COPD?",
    answer:
      "During your 6-month Medigap Open Enrollment Period (starting the month you turn 65 and are enrolled in Part B), no carrier can deny you or charge more because of COPD. Outside that window, carriers in most states can use medical underwriting, and COPD may affect your options. Call us to check what's available in your state.",
  },
];

export default function WhichMedicarePlanCOPD() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/medicare-guides" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Which Medicare Supplemental Plan Best for COPD Patient
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Which Medicare Supplemental Plan Is Best for a COPD Patient?
      </h1>

      <Image
        src="/images/which-medicare-supplemental-plan-best-for-copd-patient.webp"
        alt="which medicare supplemental plan best for copd patient"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
      />

      <p className="text-lg mb-2">
        Which Medicare Supplemental plan is best for a COPD patient depends on how often you see specialists, whether you're on oxygen, and how much unpredictability you can absorb financially. COPD isn't one bad month. It's nebulizer treatments on hard breathing days, pulmonologist visits every few months, and the exhaustion of planning life around your lungs.
      </p>
      <p className="text-lg mb-6">
        I'm Anthony Orner, a licensed Medicare broker, and I help people with COPD figure out which Medigap plan actually fits their reality.
      </p>

      <PhoneCTA />

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why Plan G and Plan N cover COPD treatment differently
        </h2>
        <p className="mb-2">
          Plan G pays everything Medicare approves after you meet the $283/year Part B deductible. No copays at the pulmonologist. No coinsurance on oxygen equipment. No surprises.
        </p>
        <p className="mb-2">
          Plan N costs less monthly but charges up to $20 copays for office visits and up to $50 for ER visits that don't result in admission. If you're seeing a pulmonologist every 6-8 weeks and hitting urgent care during flare-ups, those copays add up.
        </p>
        <p>
          For someone with stable, mild COPD, Plan N can save money. For someone managing frequent exacerbations, Plan G removes the guesswork.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          Common COPD costs that Medigap pays vs. what you still owe
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Pulmonologist visits:</strong> Medicare Part B covers 80%. Plan G pays the remaining 20%. Plan N pays 20% minus the office copay.
          </li>
          <li>
            <strong>Home oxygen therapy:</strong> Part B covers oxygen equipment rental when you meet medical criteria. Both Plan G and Plan N cover the 20% coinsurance.
          </li>
          <li>
            <strong>Pulmonary rehabilitation:</strong> Covered under Part B. Both plans pick up the coinsurance.
          </li>
          <li>
            <strong>Hospital stays for exacerbations:</strong> Part A applies. Both plans cover the $1,676 Part A deductible per benefit period.
          </li>
          <li>
            <strong>Inhalers and nebulizer meds:</strong> Neither plan covers these. You need a Part D drug plan.
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          How pulmonology visits, inhalers, and oxygen factor into plan choice
        </h2>
        <p className="mb-2">
          COPD patients I talk to are often shocked by inhaler costs. Trelegy and Breztri can run $300-$500 a month at pharmacy counters. Medigap won't touch that. What matters is pairing the right supplement with a solid Part D plan that covers your specific medications.
        </p>
        <p>
          The 2025 Part D out-of-pocket cap at $2,000/year helps enormously. But you still need to check your Part D formulary before enrolling. Not every plan covers the same inhalers at the same tier.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          Getting approved for a supplement after a COPD diagnosis
        </h2>
        <p className="mb-2">
          Timing matters. During your 6-month Medigap Open Enrollment Period, starting the month you're 65 and enrolled in Part B, every carrier must accept you regardless of COPD status. No health questions, no higher premiums because of your diagnosis.
        </p>
        <p>
          Miss that window, and most states allow carriers to medically underwrite. COPD, especially with oxygen use, can limit your options. If you're approaching 65 and already have a diagnosis, apply 6 months before your Part B start date to lock things in.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          The real cost difference between Plan G and Plan N for COPD
        </h2>
        <p className="mb-2">
          Plan N premiums typically run $30-$60 less per month than Plan G. That's $360-$720/year in savings. But if you're making 8+ specialist visits and a couple ER trips during bad flare-ups, Plan N copays can eat that savings and then some.
        </p>
        <p>
          Rates vary by carrier, age, and location. I can pull actual quotes for your zip code in a few minutes.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why pairing your supplement with the right Part D plan matters most
        </h2>
        <p className="mb-2">
          Your Medigap plan handles doctor visits, hospital stays, and oxygen. Your Part D plan handles the medications that keep you breathing. Getting one right and the other wrong leaves a gap that hits your wallet hard.
        </p>
        <p>
          I look at both together. We'll match your inhaler list against Part D formularies and pair it with the supplement that fits your visit frequency. One call covers everything.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Get a plan recommendation matched to your COPD treatment.
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          for free, no-obligation guidance.
        </p>
        <Link
          href="/get-a-free-quote"
          className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
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
              href="/services/medicare-supplement-plan-g"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plan G: Full Breakdown
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-supplement-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plan N: What It Covers
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-part-d-drug-plans"
              className="text-blue-600 hover:underline"
            >
              Medicare Part D Drug Plans Explained
            </Link>
          </li>
          <li>
            <Link
              href="/services/medigap-open-enrollment-period"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment: When and Why It Matters
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}