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
      item: "https://medicareyourself.com/medicare-guides",
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
  datePublished: "2025-07-01",
  dateModified: "2025-07-01",
};

const faqs = [
  {
    question: "Does Medicare cover biologic infusions for lupus like Saphnelo or Benlysta?",
    answer:
      "Medicare Part B typically covers infusions administered in a doctor's office or infusion center. Self-injected biologics may fall under Part D instead. Coverage details and out-of-pocket costs vary by plan, so it's worth reviewing your specific drug list with a broker before enrolling.",
  },
  {
    question: "Can I switch Medicare plans if my lupus medications aren't covered?",
    answer:
      "You can switch Medicare Advantage or Part D plans during Open Enrollment (October 15 to December 7). For Medigap, switching outside your initial open enrollment period may require medical underwriting. Call to discuss your options based on your specific situation.",
  },
  {
    question: "Does lupus qualify me for Medicare before age 65?",
    answer:
      "If lupus prevents you from working and you receive Social Security Disability Insurance (SSDI), you become eligible for Medicare after 24 months of disability benefits. Some lupus patients with end-stage renal disease may qualify sooner.",
  },
  {
    question: "How does a Medicare broker help lupus patients differently than an online tool?",
    answer:
      "Online comparison tools don't account for how often you see specialists, which biologics you take, or how frequently your treatment changes. A broker reviews your full medication list, your doctors' networks, and your lab frequency to match you with a plan that actually fits your care needs.",
  },
];

export default function MedicareBrokerForLupusPatients() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
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
        <span className="text-gray-700">Medicare Broker for Lupus Patients</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
        Medicare Broker for Lupus Patients Whose Coverage Shouldn't Be as Unpredictable as Their Flares
      </h1>

      <Image
        src="/images/medicare-broker-for-lupus-patients.webp"
        alt="Medicare broker for lupus patients"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg text-gray-700 mb-2">
        A Medicare broker for lupus patients does what online plan finders can't: account for biologics that change, specialists you can't lose, and lab work that runs every few weeks. I'm Anthony Orner, a licensed broker in NJ, and I help people with lupus find plans built around how they actually use their coverage.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        You already spend enough energy managing flares. Choosing a Medicare plan shouldn't add to the exhaustion.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Rheumatology visits, biologics, and lab work: what your plan must cover
        </h2>
        <p className="text-gray-700 mb-3">
          Lupus care isn't one doctor and one prescription. You're likely seeing a rheumatologist, dermatologist, nephrologist, or cardiologist - sometimes all of them. Your plan needs to cover:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-3">
          <li>Specialist visits without referral barriers that delay care during flares</li>
          <li>Biologic infusions (Part B) and self-injected medications (Part D)</li>
          <li>Frequent bloodwork - CBC, ANA, complement levels, kidney panels</li>
          <li>Imaging for joint inflammation or organ involvement</li>
        </ul>
        <p className="text-gray-700">
          Original Medicare Part B covers most outpatient care at 80% after the $283 annual deductible. That remaining 20% on biologics and frequent labs adds up fast without supplemental coverage.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          How a lupus diagnosis changes your Medigap options in NJ
        </h2>
        <p className="text-gray-700 mb-3">
          Your Medigap Open Enrollment Period lasts 6 months starting the month you turn 65 and are enrolled in Part B. During that window, no carrier can deny you or charge more because of lupus.
        </p>
        <p className="text-gray-700">
          Outside that window, medical underwriting applies. Lupus can make it harder - or more expensive - to get approved. If you're on Medicare through SSDI before 65, NJ rules around guaranteed issue differ. Call me to confirm what applies to your situation before assuming you're locked out.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Why lupus patients often end up in the wrong Medicare plan
        </h2>
        <p className="text-gray-700 mb-3">
          People pick a plan when they're feeling okay. Then a flare hits, and suddenly they need an infusion their Part D doesn't cover without a $2,000 deductible. Or their rheumatologist isn't in-network on their Medicare Advantage plan, and switching mid-year isn't an option.
        </p>
        <p className="text-gray-700">
          Lupus treatment changes. Your plan needs to handle the worst months, not just the stable ones.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          The real cost problem nobody warns you about
        </h2>
        <p className="text-gray-700 mb-3">
          Specialty pharmacy costs for drugs like Benlysta or Saphnelo can trigger massive out-of-pocket expenses under Part D. Some plans have high deductibles on specialty tiers that hit you in January before any coverage kicks in.
        </p>
        <p className="text-gray-700">
          I check formularies, tier placement, and manufacturer assistance programs so you're not blindsided at the infusion center. Rates vary by carrier and plan - I compare them so you don't have to call six places.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Medicare Advantage vs. Medigap when you have lupus
        </h2>
        <p className="text-gray-700 mb-3">
          Medicare Advantage plans can work for people with stable, predictable care. Lupus is neither. Network restrictions, prior authorizations on biologics, and referral requirements can slow down treatment when you need it most.
        </p>
        <p className="text-gray-700">
          A Medigap plan (like Plan G or Plan N) paired with Original Medicare lets you see any Medicare-accepting specialist without network limits. For many lupus patients, that flexibility matters more than the extra benefits Advantage plans advertise.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Get matched with coverage that shows up when your body won't
        </h2>
        <p className="text-gray-700 mb-3">
          You shouldn't have to spend your good days fighting insurance phone trees. Bring me your medication list, your doctors, and your concerns. I'll show you which plans actually cover your care - at no cost to you.
        </p>
        <p className="text-gray-700">
          I work with multiple carriers across NJ. My job is finding the plan that fits your care, not selling you the one that pays me the most.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-10 text-center">
        <p className="text-xl font-semibold text-gray-900 mb-2">
          Talk to a broker who understands lupus care needs
        </p>
        <p className="text-gray-700 mb-4">
          Call{" "}
          <a
            href="tel:8555591700"
            className="text-blue-700 font-bold hover:underline"
          >
            855-559-1700
          </a>{" "}
          or{" "}
          <Link
            href="/get-a-free-quote"
            className="text-blue-700 font-bold hover:underline"
          >
            get a free quote online
          </Link>
          . No obligation. No pressure.
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          Related resources
        </h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-guides/medigap-plan-g-nj"
              className="text-blue-700 hover:underline"
            >
              Medigap Plan G in NJ: What It Covers and What It Costs
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-part-d-drug-coverage"
              className="text-blue-700 hover:underline"
            >
              Medicare Part D: How Drug Coverage Works
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-broker-for-chronic-illness"
              className="text-blue-700 hover:underline"
            >
              Medicare Broker for Chronic Illness
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-vs-medigap"
              className="text-blue-700 hover:underline"
            >
              Medicare Advantage vs. Medigap: Which Is Right for You?
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}