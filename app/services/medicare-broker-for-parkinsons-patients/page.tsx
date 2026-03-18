import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for Parkinson's patients | Free Plan Review | MedicareYourself",
  description:
    "Medicare broker for Parkinson's patients needing specialist access, therapy coverage, and the right drug plan. Anthony Orner reviews your options free.",
  openGraph: {
    title:
      "Medicare broker for Parkinson's patients | Free Plan Review | MedicareYourself",
    description:
      "Medicare broker for Parkinson's patients needing specialist access, therapy coverage, and the right drug plan. Anthony Orner reviews your options free.",
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
      name: "Medicare Broker for Parkinson's Patients",
      item: "https://www.medicareyourself.com/services/medicare-broker-for-parkinsons-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Parkinson's Patients — A Plan That Fights as Hard as You Do",
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
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. As a licensed Medicare broker, I'm paid by the insurance carriers - not by you. My plan reviews, comparisons, and enrollment help are completely free. You get the same plan at the same price whether you use a broker or enroll directly.",
  },
  {
    question: "Can you get Medicare if you have Parkinson's disease?",
    answer:
      "Yes. If you're 65 or older, you qualify for Medicare regardless of health conditions. If you're under 65 and have been receiving Social Security Disability for 24 months due to Parkinson's, you also qualify. Medicare covers Parkinson's-related medications, specialist visits, therapies, and procedures like deep brain stimulation.",
  },
  {
    question:
      "Does Medicare cover deep brain stimulation (DBS) for Parkinson's?",
    answer:
      "Medicare covers DBS surgery when specific criteria are met, including documented response to levodopa therapy and evaluation by a movement disorder specialist. Under Original Medicare, you'd pay 20% of the approved amount after the $283 Part B deductible - unless you have a Medigap plan that covers that cost share.",
  },
  {
    question: "How do I find the right Part D plan for Parkinson's medications?",
    answer:
      "Parkinson's drug regimens are complex and change as the condition progresses. I check your specific medications - carbidopa-levodopa, dopamine agonists, MAO-B inhibitors, and any others - against every available Part D formulary to find the plan with the lowest total cost and fewest coverage restrictions. Call 855-559-1700 for a free drug plan review.",
  },
];

export default function MedicareBrokerParkinsonsPage() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          &gt;{" "}
          <Link href="/medicare-guides" className="hover:underline">
            Medicare Guides
          </Link>{" "}
          &gt;{" "}
          <span className="text-gray-700">
            Medicare Broker for Parkinson&#39;s Patients
          </span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Medicare Broker for Parkinson&#39;s Patients — A Plan That Fights as
          Hard as You Do
        </h1>

        <Image
          src="/images/medicare-broker-for-parkinsons-patients.webp"
          alt="Medicare broker for Parkinson's patients"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg text-gray-700 mb-2">
          A Medicare broker for Parkinson&#39;s patients can make the difference
          between a plan that covers the basics and one that actually keeps up
          with how your needs change. I&#39;m Anthony Orner, a licensed broker
          who&#39;ll match your medications, specialists, and therapies to the
          right plan - at no cost to you.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Every movement takes more effort now. Your plan shouldn&#39;t.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            How Medicare covers carbidopa-levodopa, DBS, and movement disorder
            specialists
          </h2>
          <p className="text-gray-700 mb-3">
            Original Medicare (Parts A and B) covers neurologist visits,
            movement disorder specialists, and medically necessary procedures
            like deep brain stimulation when specific clinical criteria are met.
            Part B covers outpatient doctor visits with a $283 annual deductible,
            then you pay 20% of approved charges.
          </p>
          <p className="text-gray-700">
            Parkinson&#39;s medications - carbidopa-levodopa, dopamine agonists,
            COMT inhibitors - fall under Part D. But not every Part D plan
            covers the same drugs at the same tier. I cross-reference your exact
            medication list against available formularies so you don&#39;t get
            blindsided by a coverage gap or prior authorization surprise.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            Supplement vs. Advantage: which gives Parkinson&#39;s patients more
            flexibility
          </h2>
          <p className="text-gray-700 mb-3">
            This is the biggest decision you&#39;ll make, and it matters more
            with Parkinson&#39;s than most conditions. Here&#39;s the real
            tradeoff:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <strong>Medicare Supplement (Medigap):</strong> Use any
              Medicare-accepting doctor or hospital nationwide. No referrals, no
              network restrictions. Plan G covers everything except the $283
              Part B deductible. You&#39;ll need a separate Part D drug plan.
            </li>
            <li>
              <strong>Medicare Advantage:</strong> Often includes Part D, dental,
              vision, and sometimes fitness benefits in one plan. But you&#39;re
              locked into a network - and prior authorizations for procedures
              like DBS can create delays you don&#39;t have time for.
            </li>
          </ul>
          <p className="text-gray-700 mt-3">
            If you need to see a specific movement disorder specialist or want
            the freedom to switch doctors as your condition changes, Medigap
            usually wins. I&#39;ll walk you through both based on your actual
            situation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            Physical therapy, speech therapy, and fall prevention coverage
          </h2>
          <p className="text-gray-700 mb-3">
            Medicare covers physical therapy, occupational therapy, and speech
            therapy when they&#39;re medically necessary. For Parkinson&#39;s
            patients, that means:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              Physical therapy for gait training, balance work, and fall
              prevention
            </li>
            <li>
              Speech-language pathology for swallowing difficulties and voice
              volume (LSVT LOUD is covered when billed correctly)
            </li>
            <li>
              Occupational therapy for daily living tasks that are getting harder
            </li>
          </ul>
          <p className="text-gray-700 mt-3">
            Under Original Medicare with a supplement, you won&#39;t deal with
            network restrictions on which therapy providers you see. With
            Advantage plans, check that your preferred therapists are in-network
            before enrolling.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            When your medication regimen changes - and it will
          </h2>
          <p className="text-gray-700 mb-3">
            Parkinson&#39;s medications don&#39;t stay the same. Doses increase.
            New drugs get added. What your Part D plan covered well last year
            might not work this year. Families I talk to are often caught off
            guard when a drug moves to a higher tier or suddenly requires step
            therapy.
          </p>
          <p className="text-gray-700">
            I review your drug plan every year during Open Enrollment (October
            15 - December 7) and flag any formulary changes before they cost you
            money.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            Skilled nursing and home health coverage after a hospital stay
          </h2>
          <p className="text-gray-700 mb-3">
            Falls, freezing episodes, and complications can lead to hospital
            stays. Original Medicare covers up to 100 days in a skilled nursing
            facility after a qualifying stay - but days 21 through 100 cost
            $209.50 per day in 2026. A Medigap Plan G covers that coinsurance
            completely.
          </p>
          <p className="text-gray-700">
            Medicare also covers home health services - skilled nursing, therapy,
            and aide services - when you&#39;re homebound and need intermittent
            care. No prior hospital stay required.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            Request a free review from a broker who understands what every day
            costs you
          </h2>
          <p className="text-gray-700 mb-3">
            The wrong plan doesn&#39;t just cost money - it costs time, energy,
            and access to the care that keeps you moving. I&#39;ll review your
            doctors, prescriptions, and therapy needs, then show you which plans
            actually fit. No cost. No obligation. No pressure.
          </p>
          <p className="text-gray-700">
            Call <strong>855-559-1700</strong> or request a review online. I
            work with families across NJ dealing with Parkinson&#39;s, and I
            take the time to get this right.
          </p>
        </section>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-10 text-center">
          <p className="text-xl font-semibold text-blue-900 mb-2">
            Talk to a broker who knows Parkinson&#39;s coverage inside and out.
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
              get a free quote online
            </Link>
            .
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
                href="/medicare-guides/medicare-supplement-plan-g"
                className="text-blue-700 hover:underline"
              >
                Medicare Supplement Plan G - What It Covers and Costs
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/medicare-part-d-drug-plans"
                className="text-blue-700 hover:underline"
              >
                Medicare Part D Drug Plans - Finding the Right Formulary
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/medicare-advantage-vs-medigap"
                className="text-blue-700 hover:underline"
              >
                Medicare Advantage vs. Medigap - Which Plan Type Fits You
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-nj"
                className="text-blue-700 hover:underline"
              >
                Medicare Broker in NJ - Free Local Plan Help
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}