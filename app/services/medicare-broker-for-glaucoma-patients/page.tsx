import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for glaucoma patients | Free Coverage Review | MedicareYourself",
  description:
    "Medicare broker for glaucoma patients comparing plans covering eye drops, laser treatment, and surgery. Anthony Orner offers free reviews in NJ.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-glaucoma-patients" },
  openGraph: {
    title:
      "Medicare broker for glaucoma patients | Free Coverage Review | MedicareYourself",
    description:
      "Medicare broker for glaucoma patients comparing plans covering eye drops, laser treatment, and surgery. Anthony Orner offers free reviews in NJ.",
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
      name: "Medicare Broker for Glaucoma Patients",
      item: "https://medicareyourself.com/services/medicare-broker-for-glaucoma-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Glaucoma Patients: Find Plans That Cover Drops, Lasers, and Surgery",
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
    question: "Will Medicare pay for glaucoma treatment?",
    answer:
      "Yes. Medicare Part B covers glaucoma screenings once every 12 months for high-risk beneficiaries and pays 80% of the Medicare-approved amount for medically necessary treatment including laser procedures and surgery. You pay the remaining 20% coinsurance after meeting the Part B deductible ($283 in 2026). Prescription eye drops are covered under Part D, but formulary placement and copays vary by plan.",
  },
  {
    question: "Does Medicare cover selective laser trabeculoplasty for glaucoma?",
    answer:
      "Medicare Part B covers selective laser trabeculoplasty (SLT) when your ophthalmologist determines it's medically necessary. You'll pay 20% coinsurance after the Part B deductible. Some Medicare Advantage plans may have different cost-sharing, so it's worth comparing before scheduling the procedure.",
  },
  {
    question: "How much does glaucoma surgery cost out of pocket?",
    answer:
      "Out-of-pocket costs depend on your coverage type. With Original Medicare, you pay the Part B deductible ($283 in 2026) plus 20% of the Medicare-approved amount. For a procedure like trabeculectomy or MIGS, that 20% can add up to hundreds or even over a thousand dollars. A Medigap plan can cover most or all of that coinsurance. Medicare Advantage copays vary by plan and network.",
  },
  {
    question: "What benefits can you claim if you have glaucoma?",
    answer:
      "Medicare covers annual glaucoma screenings (for high-risk patients), diagnostic testing, laser treatments like SLT, surgical procedures including trabeculectomy and MIGS, and follow-up visits under Part B. Prescription eye drops like latanoprost or timolol fall under Part D. Some Medicare Advantage plans add routine vision benefits that Original Medicare doesn't include.",
  },
];

export default function MedicareBrokerForGlaucomaPatients() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
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
          Medicare Broker for Glaucoma Patients
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4 leading-tight">
        Medicare Broker for Glaucoma Patients: Find Plans That Cover Drops,
        Lasers, and Surgery
      </h1>

      <Image
        src="/images/hub_medicare-broker-for-glaucoma-patients.webp"
        alt="Medicare broker for glaucoma patients"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        A Medicare broker for glaucoma patients does something most beneficiaries don't have time to do themselves: compare how dozens of plans handle eye drops, laser procedures, and surgical coverage side by side. Glaucoma doesn't wait for open enrollment, and neither should your plan review.
      </p>
      <p className="text-lg mb-6">
        I'm Anthony Orner, a licensed Medicare broker in New Jersey. I help people with glaucoma find plans that actually match the treatment they're already getting or the procedures they need next.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          What Medicare Part B covers for glaucoma screening and treatment
        </h2>
        <p className="mb-2">
          Part B covers one glaucoma screening every 12 months if you're considered high risk. That includes anyone with diabetes, a family history of glaucoma, African Americans 50 and older, or Hispanic Americans 65 and older. The test must be performed by an ophthalmologist or optometrist legally authorized in your state.
        </p>
        <p>
          After the Part B deductible ($283 in 2026), you pay 20% of the Medicare-approved amount. Follow-up diagnostic tests and office visits related to glaucoma are also covered under Part B as medically necessary care.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Part D plans with affordable glaucoma eye drop formularies
        </h2>
        <p className="mb-2">
          Here's where things get frustrating. Two Part D plans in the same zip code can put the same eye drop on completely different cost tiers. Latanoprost might be $3 on one plan and $45 on another. Brand-name drops like Vyzulta or Rhopressa are even more unpredictable.
        </p>
        <p>
          I check your specific prescriptions against every available formulary. If you're using two or three drops daily, the difference between plans can be hundreds of dollars a year.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          SLT, trabeculectomy, and MIGS: how Medicare handles surgical options
        </h2>
        <p className="mb-2">
          Medicare Part B covers glaucoma surgeries when deemed medically necessary. That includes selective laser trabeculoplasty (SLT), trabeculectomy, and minimally invasive glaucoma surgery (MIGS) procedures like iStent.
        </p>
        <p>
          Your cost-sharing depends on your plan type. With Original Medicare, you pay 20% coinsurance after the deductible. With a Medigap supplement like Plan G, that coinsurance drops to $0. Medicare Advantage plans set their own copays, and some require prior authorization.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Why your ophthalmologist's network matters
        </h2>
        <p className="mb-2">
          If you've built trust with a glaucoma specialist, you don't want to lose access because of a plan switch. Original Medicare lets you see any provider that accepts Medicare. Medicare Advantage plans use networks, and not every ophthalmologist or surgical center participates.
        </p>
        <p>
          I verify your doctors and facilities before recommending any plan. That includes checking whether your surgeon is in-network for the specific procedure you need.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Medigap vs. Medicare Advantage for ongoing glaucoma care
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Medigap (Plan G or N):</strong> Pairs with Original Medicare. Covers Part B coinsurance so you pay little or nothing for surgeries and office visits. No network restrictions. You add a standalone Part D plan for drops.
          </li>
          <li>
            <strong>Medicare Advantage:</strong> May include Part D drug coverage and extra vision benefits. Copays for procedures vary. Network restrictions apply. Some plans require referrals or prior authorization for surgery.
          </li>
        </ul>
        <p className="mt-2">
          Neither option is universally better. It depends on how often you see your specialist, which drops you use, and whether surgery is on the table.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Request a free glaucoma-focused plan review
        </h2>
        <p className="mb-2">
          Bring me your current prescriptions, your ophthalmologist's name, and any upcoming procedures. I'll compare every plan available in your area and show you exactly what each one covers and costs.
        </p>
        <p>
          No charge. No obligation. Just clear answers from someone who does this every day.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Call 855-559-1700 for a free glaucoma coverage review
        </p>
        <p className="mb-4">
          Anthony Orner, Licensed Medicare Broker
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Get a Free Quote
        </Link>
      </div>

      <section className="mt-12">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
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
              href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medigap Plan G vs. Plan N: Which Is Better?
            </Link>
          </li>
          <li>
            <Link
              href="/learn/medicare-parts-explained"
              className="text-blue-600 hover:underline"
            >
              How Medicare Part D Drug Coverage Works
            </Link>
          </li>
          <li>
            <Link
              href="/services/free-medicare-broker-new-jersey"
              className="text-blue-600 hover:underline"
            >
              Medicare Broker in New Jersey
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}