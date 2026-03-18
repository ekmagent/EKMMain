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
      name: "Medicare Broker for Glaucoma Patients",
      item: "https://www.medicareyourself.com/services/medicare-broker-for-glaucoma-patients",
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
    question: "Will Medicare pay for glaucoma treatment?",
    answer:
      "Yes. Medicare Part B covers glaucoma screenings once every 12 months for high-risk patients, plus medically necessary treatments like laser procedures and surgery. Part D covers prescription eye drops, though your out-of-pocket cost depends on your plan's formulary tier. I can compare formularies to find your lowest cost.",
  },
  {
    question:
      "Does Medicare cover selective laser trabeculoplasty for glaucoma?",
    answer:
      "Medicare Part B covers SLT (selective laser trabeculoplasty) as a medically necessary outpatient procedure. You'll pay 20% of the Medicare-approved amount after meeting your Part B deductible of $283 in 2026. Some Medicare Advantage plans may have different cost-sharing - call me to compare.",
  },
  {
    question: "What benefits can you claim if you have glaucoma?",
    answer:
      "With Original Medicare, you get annual glaucoma screenings (if high-risk), Part B coverage for laser and surgical treatments, and Part D coverage for prescription eye drops. Some Medicare Advantage plans add routine vision benefits like eye exams beyond the annual screening. A plan review can show you exactly what's available.",
  },
  {
    question: "How much does glaucoma surgery cost out of pocket?",
    answer:
      "With Medicare Part B, you pay 20% of the Medicare-approved amount after your $283 annual deductible (2026). A Medigap plan like Plan G can cover that 20%, bringing your surgical cost to $0 after paying the Part B deductible. Without supplemental coverage, costs vary by procedure - trabeculectomy and MIGS can run thousands before Medicare's share.",
  },
];

export default function MedicareBrokerForGlaucomaPatients() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/medicare-guides" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Medicare Broker for Glaucoma Patients
        </span>
      </nav>

      <div className="bg-[#1e40af] rounded-lg p-6 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Medicare Broker for Glaucoma Patients: Find Plans That Cover Drops,
          Lasers, and Surgery
        </h1>
        <Image
          src="/images/medicare-broker-for-glaucoma-patients.webp"
          alt="Medicare broker for glaucoma patients"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />
      </div>

      <p className="text-lg mb-2">
        A Medicare broker for glaucoma patients does what most plan-comparison
        websites can't - match your specific drops, your doctor, and your
        treatment plan to the coverage that actually costs you the least. I'm
        Anthony Orner, a licensed Medicare broker in New Jersey, and I do this
        work every day.
      </p>
      <p className="text-lg mb-6">
        Glaucoma doesn't wait for open enrollment. Your drops run out monthly.
        Your eye pressure checks are ongoing. You need a plan that keeps up.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What Medicare Part B covers for glaucoma screening and treatment
        </h2>
        <p className="mb-2">
          Part B covers one glaucoma screening every 12 months if you're
          high-risk. That includes people with diabetes, a family history of
          glaucoma, African Americans 50 and older, and Hispanic Americans 65
          and older.
        </p>
        <p className="mb-2">
          The screening must be performed by an eye doctor legally authorized in
          your state - typically an ophthalmologist. After meeting the $283 Part
          B deductible (2026), you pay 20% of the Medicare-approved amount.
        </p>
        <p>
          Part B also covers medically necessary treatment - including laser
          procedures and surgery - under the same 20% coinsurance structure.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Part D plans with affordable glaucoma eye drop formularies
        </h2>
        <p className="mb-2">
          This is where most people lose money without realizing it. Glaucoma
          drops like latanoprost, timolol, or branded options like Vyzulta and
          Rhopressa land on different formulary tiers depending on the plan.
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-2">
          <li>Generic prostaglandin analogs are usually Tier 1 or 2 - low copay</li>
          <li>Branded drops can hit Tier 3 or higher - $40-$100+ per month</li>
          <li>Some plans require step therapy or prior authorization</li>
        </ul>
        <p>
          I compare Part D formularies side by side so you know your exact copay
          before you enroll. Not after.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          SLT, trabeculectomy, and MIGS: how Medicare handles surgical options
        </h2>
        <p className="mb-2">
          Selective laser trabeculoplasty (SLT), trabeculectomy, and minimally
          invasive glaucoma surgery (MIGS) are all covered under Part B as
          outpatient procedures. You'll owe the 20% coinsurance unless you have
          supplemental coverage.
        </p>
        <p>
          A Medigap plan like Plan G covers that 20%, leaving you responsible
          only for the annual Part B deductible. If surgery is on the table,
          supplemental coverage matters a lot.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why glaucoma patients need more than a basic plan comparison
        </h2>
        <p className="mb-2">
          Most people shopping for Medicare look at premiums. Glaucoma patients
          need to look deeper - at formulary tiers, specialist networks, and
          whether a plan covers the specific procedure your ophthalmologist
          recommends.
        </p>
        <p>
          Switching drops because your plan doesn't cover them isn't just
          inconvenient. It can change your eye pressure management. That's a
          medical risk, not just a billing issue.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare Advantage vs. Original Medicare for ongoing eye care
        </h2>
        <p className="mb-2">
          Some Medicare Advantage plans include routine vision benefits -
          helpful if you want coverage beyond the annual Part B screening. But
          Advantage plans use provider networks, which matters if you see a
          specific glaucoma specialist.
        </p>
        <p>
          Original Medicare with a Medigap plan lets you see any
          Medicare-accepting ophthalmologist in the country. The tradeoff is
          you'll need a standalone Part D plan for drops. I'll walk you through
          both options honestly.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Request a free glaucoma-focused plan review
        </h2>
        <p className="mb-2">
          Bring me your drop list, your doctor's name, and any upcoming
          procedures. I'll show you which plans cover everything - and what
          you'll actually pay.
        </p>
        <p>
          No cost. No obligation. Just a clear look at your options from someone
          who does this full-time in New Jersey.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 mb-10 text-center">
        <p className="text-xl font-semibold mb-2">
          Talk to a licensed Medicare broker who understands glaucoma coverage.
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/contact" className="underline font-bold">
            get a free quote online
          </Link>
          .
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-guides/medicare-part-b-coverage"
              className="text-blue-600 hover:underline"
            >
              What Does Medicare Part B Cover?
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-part-d-drug-plans"
              className="text-blue-600 hover:underline"
            >
              How Medicare Part D Drug Plans Work
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medigap-plan-g"
              className="text-blue-600 hover:underline"
            >
              Medigap Plan G: What It Covers and What It Costs
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-broker-nj"
              className="text-blue-600 hover:underline"
            >
              Find a Medicare Broker in New Jersey
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}