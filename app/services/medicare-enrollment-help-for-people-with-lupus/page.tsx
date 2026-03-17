import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare Enrollment Help for People With Lupus | Disability Coverage & Plan Options | MedicareYourself",
  description:
    "Medicare enrollment help for people with lupus. Learn about disability-based eligibility, drug coverage, and plan options. Anthony Orner offers free NJ guidance.",
  openGraph: {
    title:
      "Medicare Enrollment Help for People With Lupus | Disability Coverage & Plan Options | MedicareYourself",
    description:
      "Medicare enrollment help for people with lupus. Learn about disability-based eligibility, drug coverage, and plan options. Anthony Orner offers free NJ guidance.",
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
      item: "https://www.medicareyourself.com/hub",
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
  description:
    "Medicare enrollment help for people with lupus. Learn about disability-based eligibility, drug coverage, and plan options. Anthony Orner offers free NJ guidance.",
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
    question: "Can you get Medicare with lupus?",
    answer:
      "Yes. If lupus prevents you from working and you qualify for Social Security Disability Insurance (SSDI), you become eligible for Medicare after 24 months of receiving disability benefits. This applies regardless of your age, so many lupus patients enroll well before turning 65.",
  },
  {
    question: "What are the support resources for lupus patients on Medicare?",
    answer:
      "The Lupus Foundation of America offers financial assistance resources and educational guides on Medicare Part D. Medicare's Extra Help program can reduce prescription drug costs. A licensed Medicare broker can also help you compare plans that cover your specific lupus medications and rheumatology visits at no cost to you.",
  },
  {
    question: "What is lupus fatigue and how does it affect Medicare decisions?",
    answer:
      "Lupus fatigue is an overwhelming exhaustion that goes beyond normal tiredness. It can make managing paperwork, comparing plans, and meeting enrollment deadlines extremely difficult. Working with a broker means someone handles the research and enrollment process for you, so you can focus on managing your health.",
  },
  {
    question:
      "Does Medicare cover lupus medications like Benlysta and hydroxychloroquine?",
    answer:
      "Medicare Part D covers most lupus medications including hydroxychloroquine (Plaquenil). Infusion treatments like Benlysta (belimumab) administered in a doctor's office are typically covered under Part B. Coverage details and copays vary by plan, so checking each plan's formulary before enrolling is critical.",
  },
];

export default function MedicareEnrollmentHelpLupus() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/services" className="hover:underline">
            Medicare Guides
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">
            Medicare Enrollment Help for People With Lupus
          </span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Medicare Enrollment Help for People Living With Lupus
        </h1>

        <Image
          src="/images/hub_medicare-enrollment-help-for-people-with-lupus.webp"
          alt="Medicare enrollment help for people with lupus"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg text-gray-700 mb-2">
          Finding the right Medicare enrollment help for people with lupus starts
          with understanding how your diagnosis affects eligibility, drug
          coverage, and out-of-pocket costs. Lupus creates specific healthcare
          needs that not every Medicare plan handles well.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          I'm Anthony Orner, a licensed Medicare broker in New Jersey, and I
          help lupus patients sort through their options every year - at no cost.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            How lupus qualifies you for Medicare before age 65
          </h2>
          <p className="text-gray-700 mb-2">
            You don't need to be 65 to get Medicare. If systemic lupus
            erythematosus (SLE) prevents you from working and you receive Social
            Security Disability Insurance, you qualify for Medicare after 24
            consecutive months of SSDI payments.
          </p>
          <p className="text-gray-700">
            That 24-month waiting period is firm. Your Part A coverage begins
            automatically on month 25, and you'll have the option to enroll in
            Part B at that time for $185/month in 2026.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            Which Medicare plans best cover lupus medications and specialists
          </h2>
          <p className="text-gray-700 mb-2">
            Lupus treatment typically involves multiple prescriptions. Hydroxychloroquine, mycophenolate, and corticosteroids are common. These are covered under Medicare Part D.
          </p>
          <p className="text-gray-700 mb-2">
            Infusion therapies like belimumab (Benlysta) given at your rheumatologist's office fall under Part B. You pay 20% of the Medicare-approved amount after meeting the $257 Part B deductible in 2026.
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>Part D: Covers oral lupus medications - check the formulary tier before you enroll</li>
            <li>Part B: Covers physician-administered infusions and lab work</li>
            <li>Medigap Plan G: Picks up the 20% coinsurance Part B leaves behind</li>
            <li>Medicare Advantage: May offer lower premiums but check specialist network restrictions</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            Why Part D plan selection matters with lupus
          </h2>
          <p className="text-gray-700 mb-2">
            Not every Part D plan covers the same drugs at the same price. A medication on Tier 2 with one plan might sit on Tier 4 with another, costing you hundreds more per year.
          </p>
          <p className="text-gray-700">
            The Lupus Foundation of America recommends reviewing your Part D plan annually during Open Enrollment (October 15 through December 7). If your income is limited, Medicare's Extra Help program can significantly reduce your drug copays.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            Navigating underwriting with a lupus diagnosis in NJ
          </h2>
          <p className="text-gray-700 mb-2">
            Here's good news if you're in New Jersey. The state requires Medigap carriers to offer guaranteed issue year-round. That means no insurance company can deny you coverage or charge more because of your lupus diagnosis.
          </p>
          <p className="text-gray-700">
            This is a major advantage. In most other states, applying for Medigap outside your initial enrollment window with a pre-existing condition like lupus can result in denial or higher premiums. In NJ, that doesn't happen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            Managing enrollment deadlines when you have lupus fatigue
          </h2>
          <p className="text-gray-700 mb-2">
            Lupus fatigue is real. The exhaustion makes it hard to research plans, compare formularies, and meet deadlines. Missing an enrollment window can mean penalties or coverage gaps.
          </p>
          <p className="text-gray-700">
            That's exactly where a broker helps. I do the comparison work, explain what matters for your specific medications, and handle the paperwork. You make the final call.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            Get personalized enrollment guidance from a licensed broker
          </h2>
          <p className="text-gray-700 mb-2">
            Every lupus patient's treatment plan is different. Your Medicare plan should match your actual prescriptions, specialists, and budget - not a generic recommendation.
          </p>
          <p className="text-gray-700">
            I work with clients across New Jersey to find the right combination of Original Medicare, Medigap, and Part D (or Medicare Advantage if it fits). There's no fee for my help. Carriers pay me, not you.
          </p>
        </section>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center my-10">
          <p className="text-xl font-semibold text-blue-900 mb-2">
            Ready to find the right Medicare plan for your lupus care?
          </p>
          <p className="text-blue-800 mb-4">
            Call{" "}
            <a
              href="tel:8555591700"
              className="font-bold underline hover:text-blue-600"
            >
              855-559-1700
            </a>{" "}
            for a free, no-obligation consultation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Get a Free Quote
          </Link>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10 mb-4">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Related resources
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/services/medicare-plan-g-nj"
                className="text-blue-600 hover:underline"
              >
                Medicare Plan G in New Jersey - Rates and Coverage Details
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-part-d-plans-nj"
                className="text-blue-600 hover:underline"
              >
                Best Medicare Part D Plans in NJ for 2026
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-disability-eligibility"
                className="text-blue-600 hover:underline"
              >
                How to Get Medicare Through Disability Before 65
              </Link>
            </li>
            <li>
              <Link
                href="/services/medigap-guaranteed-issue-nj"
                className="text-blue-600 hover:underline"
              >
                NJ Medigap Guaranteed Issue Rights Explained
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}