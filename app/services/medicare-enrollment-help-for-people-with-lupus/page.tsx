import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare Enrollment Help for People With Lupus | Free Guidance | MedicareYourself",
  description:
    "Medicare enrollment help for people with lupus. Learn disability-based eligibility, drug coverage, and NJ plan options. Free guidance from Anthony Orner.",
  openGraph: {
    title:
      "Medicare Enrollment Help for People With Lupus | Free Guidance | MedicareYourself",
    description:
      "Medicare enrollment help for people with lupus. Learn disability-based eligibility, drug coverage, and NJ plan options. Free guidance from Anthony Orner.",
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
      item: "https://www.medicareyourself.com/medicare",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Medicare Enrollment Help for People With Lupus",
      item: "https://www.medicareyourself.com/services/medicare-enrollment-help-for-people-with-lupus",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Medicare Enrollment Help for People Living With Lupus",
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
  mainEntityOfPage:
    "https://www.medicareyourself.com/services/medicare-enrollment-help-for-people-with-lupus",
};

const faqs = [
  {
    question: "Does lupus qualify you for Medicare?",
    answer:
      "Yes. If lupus prevents you from working and you receive Social Security Disability Insurance (SSDI), you become eligible for Medicare after 24 months of SSDI benefits. You do not need to be 65.",
  },
  {
    question:
      "What Medicare plans cover lupus medications like Benlysta or Saphnelo?",
    answer:
      "Infusion medications like Saphnelo and Benlysta are typically covered under Medicare Part B when administered in a clinical setting. Oral medications like hydroxychloroquine (Plaquenil) fall under Part D. A Medicare Advantage plan with strong Part D drug coverage or a standalone Part D plan paired with Original Medicare can help manage these costs.",
  },
  {
    question:
      "Can I get a Medigap plan in NJ if I have a lupus diagnosis?",
    answer:
      "NJ has specific rules around Medigap enrollment. During your Medigap Open Enrollment Period (6 months starting the month you turn 65 and have Part B), insurance carriers cannot deny you or charge more due to lupus. Outside that window, rules vary. Call us to confirm your options.",
  },
  {
    question: "Is there a cost limit on Part D drugs in 2026?",
    answer:
      "Yes. Starting in 2025, Medicare Part D includes a $2,000 annual out-of-pocket cap on prescription drug costs. This is a significant change for people with lupus who rely on expensive medications.",
  },
];

export default function MedicareEnrollmentHelpLupus() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/medicare" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Medicare Enrollment Help for People With Lupus
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Medicare Enrollment Help for People Living With Lupus
      </h1>

      <Image
        src="/images/medicare-enrollment-help-for-people-with-lupus_photo.webp"
        alt="Medicare enrollment help for people with lupus"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
      />

      <p className="text-lg mb-2">
        Medicare enrollment help for people with lupus starts with understanding
        that your situation isn't generic. Between specialty medications,
        flare-ups that make it hard to get out of bed, and the runaround between
        pharmacies, Social Security, and insurers, the last thing you need is a
        confusing enrollment process.
      </p>
      <p className="text-lg mb-6">
        I'm Anthony Orner, a licensed Medicare broker in New Jersey. I help
        people with lupus find the right Medicare plan and avoid costly gaps in
        coverage. No charge for my guidance.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How lupus qualifies you for Medicare before age 65
        </h2>
        <p className="mb-2">
          Systemic lupus can qualify you for Medicare through SSDI. Once you've
          received Social Security Disability benefits for 24 consecutive months,
          Medicare kicks in automatically. You'll get Parts A and B.
        </p>
        <p>
          Many people with lupus enter Medicare in their 30s, 40s, or 50s
          through this path. Your enrollment timeline and plan options look
          different than someone turning 65, and that matters when choosing
          coverage.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Which Medicare plans best cover lupus medications and specialists
        </h2>
        <p className="mb-2">
          Lupus treatment often involves expensive drugs. Here's how Medicare
          splits them:
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>
            <strong>Part B</strong> covers infusion treatments like Benlysta and
            Saphnelo when given in a doctor's office or infusion center.
          </li>
          <li>
            <strong>Part D</strong> covers oral prescriptions like
            hydroxychloroquine (Plaquenil), mycophenolate, and prednisone.
          </li>
          <li>
            <strong>Medicare Advantage</strong> plans bundle A, B, and usually D
            together, but network restrictions can limit which rheumatologists
            you see.
          </li>
        </ul>
        <p>
          If you rely on specific specialists or infusion centers, make sure your
          plan's network includes them. Losing access mid-treatment isn't just
          inconvenient. It's dangerous.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          The Part D out-of-pocket cap changes the math
        </h2>
        <p className="mb-2">
          If you've hit a wall with Part D deductibles or copays for specialty
          lupus drugs, there's real relief now. The $2,000 annual Part D
          out-of-pocket cap means your prescription spending has a hard ceiling.
        </p>
        <p>
          That said, not every Part D plan covers every drug at the same tier.
          Formulary details matter. I check your specific medications against
          each plan's formulary before recommending anything.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Navigating underwriting with a lupus diagnosis in NJ
        </h2>
        <p className="mb-2">
          If you're enrolling in Medigap (Medicare Supplement) during your Open
          Enrollment Period, carriers in NJ cannot deny you or charge higher
          premiums because of lupus. That window is 6 months starting the month
          you're 65 and enrolled in Part B.
        </p>
        <p>
          For people under 65 on disability-based Medicare, Medigap access
          varies by state. NJ has specific protections, but timing is everything.
          Call me so we can confirm exactly what's available to you right now.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why lupus makes picking the wrong plan so costly
        </h2>
        <p className="mb-2">
          Lupus isn't predictable. A flare can mean sudden ER visits, imaging,
          lab work, and medication changes within days. Picking a plan with high
          deductibles or thin specialist networks because it's cheap upfront can
          cost you thousands during a bad flare.
        </p>
        <p>
          I've talked with people who spent hours bouncing between Medicare,
          Social Security, and specialty pharmacies just trying to keep their
          infusions going. A broker who understands lupus can prevent that cycle.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Get personalized enrollment guidance from a licensed broker
        </h2>
        <p className="mb-2">
          I work with people across New Jersey who are managing lupus and trying
          to make Medicare actually work for them. I'll review your medications,
          your doctors, and your budget, then show you the plans that fit.
        </p>
        <p>
          No cost. No pressure. Just clear answers from someone who does this
          every day.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center mb-10">
        <p className="text-xl font-semibold mb-2">
          Talk to a licensed Medicare broker who understands lupus coverage.
        </p>
        <p className="text-2xl font-bold mb-3">
          <a href="tel:8555591700" className="underline">
            855-559-1700
          </a>
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100"
        >
          Get a Free Quote
        </Link>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare/medicare-part-b"
              className="text-blue-600 hover:underline"
            >
              Understanding Medicare Part B Coverage
            </Link>
          </li>
          <li>
            <Link
              href="/medicare/medicare-part-d"
              className="text-blue-600 hover:underline"
            >
              Medicare Part D Prescription Drug Plans
            </Link>
          </li>
          <li>
            <Link
              href="/medicare/medigap-plans-nj"
              className="text-blue-600 hover:underline"
            >
              Medigap Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-disability"
              className="text-blue-600 hover:underline"
            >
              Medicare for People on Disability Under 65
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}