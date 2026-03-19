import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for fibromyalgia patients | Free No-Judgment Consultation | MedicareYourself",
  description:
    "Medicare broker for fibromyalgia patients in NJ. Anthony Orner finds plans covering pain management, meds, and specialist care. Free, no-judgment quote.",
  openGraph: {
    title:
      "Medicare broker for fibromyalgia patients | Free No-Judgment Consultation | MedicareYourself",
    description:
      "Medicare broker for fibromyalgia patients in NJ. Anthony Orner finds plans covering pain management, meds, and specialist care. Free, no-judgment quote.",
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
      name: "Medicare Broker for Fibromyalgia Patients",
      item: "https://medicareyourself.com/services/medicare-broker-for-fibromyalgia-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Fibromyalgia Patients — We Believe You, and We're Here to Help",
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
    question: "Is fibromyalgia covered by Medicare?",
    answer:
      "Yes. Medicare Part B covers medically necessary doctor visits, diagnostic tests, and treatments related to fibromyalgia. Part D covers FDA-approved medications like duloxetine, pregabalin, and milnacipran, though specific formulary coverage varies by plan. The key is choosing a plan that keeps your doctors in-network and your medications affordable.",
  },
  {
    question: "Do Medicare brokers charge you?",
    answer:
      "No. Licensed Medicare brokers like Anthony Orner are paid by the insurance carriers, not by you. There's no fee for consultations, plan comparisons, or enrollment help. The plan you get through a broker costs the same as buying it directly.",
  },
  {
    question: "Is fibromyalgia a progressive disease?",
    answer:
      "Fibromyalgia is not considered classically progressive like MS or Parkinson's, but symptoms can worsen over time without proper management. Flare-ups, stress, and inadequate treatment can increase pain, fatigue, and cognitive symptoms. That's why having a plan that covers consistent specialist care and medications matters so much.",
  },
  {
    question: "What is the average age of people with fibromyalgia?",
    answer:
      "Fibromyalgia is most commonly diagnosed between ages 35 and 60, but many people live with it for years before getting a diagnosis. By the time you're Medicare-eligible at 65, you may have been managing symptoms for decades - which makes choosing the right coverage even more critical.",
  },
];

export default function MedicareBrokerFibromyalgiaPage() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <main className="max-w-4xl mx-auto px-4 py-8">
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
            Medicare Broker for Fibromyalgia Patients
          </span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Medicare Broker for Fibromyalgia Patients — We Believe You, and We're
          Here to Help
        </h1>

        <Image
          src="/images/medicare-broker-for-fibromyalgia-patients.webp"
          alt="Medicare broker for fibromyalgia patients"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg text-gray-700 mb-2">
          A Medicare broker for fibromyalgia patients does something most of the
          healthcare system hasn't done for you: listen first, then find a plan
          that actually fits your reality. I'm Anthony Orner, a licensed broker
          in NJ, and I work with fibro patients who are tired of fighting their
          insurance on top of fighting their symptoms.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          The pain is real. The fatigue is real. The brain fog is real. Your
          coverage should reflect that.
        </p>

        <PhoneCTA />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            Pain management, medications, and what Medicare actually covers for
            fibro
          </h2>
          <p className="text-gray-700 mb-3">
            Medicare Part B covers doctor visits, rheumatology referrals, and
            medically necessary treatments for fibromyalgia. Part D covers
            FDA-approved fibro medications like pregabalin (Lyrica), duloxetine
            (Cymbalta), and milnacipran (Savella) - but every Part D plan has a
            different formulary, and tier placement affects what you actually
            pay.
          </p>
          <p className="text-gray-700">
            I check your specific prescriptions against plan formularies before
            we pick anything. No surprises at the pharmacy counter.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            How fibromyalgia affects your Medigap and Advantage options
          </h2>
          <p className="text-gray-700 mb-3">
            If you're enrolling during your Medigap Open Enrollment Period (the
            6 months starting when you're 65+ and on Part B), no carrier can
            deny you or charge more because of fibromyalgia. That window
            matters. Outside of it, medical underwriting applies in most states,
            and a fibro diagnosis can affect approval.
          </p>
          <p className="text-gray-700">
            Medicare Advantage plans can't deny you for pre-existing conditions
            during Annual Enrollment (October 15 - December 7), but network
            restrictions and prior authorization rules vary widely. Some plans
            make it harder to see the specialists you depend on.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            The hidden costs of brain fog, fatigue, and specialist visits
          </h2>
          <p className="text-gray-700 mb-3">
            Fibro patients often see rheumatologists, pain management
            specialists, neurologists, and sometimes physical therapists or
            mental health providers. Under Original Medicare, each visit means
            20% coinsurance after the $283 Part B deductible. That adds up fast
            when you're managing multiple appointments per month.
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>
              Medigap Plan G covers that 20% coinsurance - you pay the $283
              deductible and nothing else
            </li>
            <li>
              Medicare Advantage plans may have $20-$50 specialist copays per
              visit, plus referral requirements
            </li>
            <li>
              Part D out-of-pocket costs depend entirely on which tier your
              medications land on
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            When your condition is invisible, your plan has to work harder
          </h2>
          <p className="text-gray-700 mb-3">
            People with fibromyalgia know what it's like to have their symptoms
            questioned. You shouldn't have to fight your insurance company for
            treatments your doctor has already prescribed. I look for plans with
            fewer prior authorization hurdles and broader specialist access so
            you spend less time on hold and more time managing your health.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            Medication restrictions you should know about
          </h2>
          <p className="text-gray-700 mb-3">
            Many fibro patients use a combination of treatments - prescriptions,
            physical therapy, sometimes pain management protocols. Medicare has
            specific rules around certain drug combinations, and Part D plans
            can apply step therapy or quantity limits that affect your access.
          </p>
          <p className="text-gray-700">
            I review your full medication list and flag any plan that would
            create problems before you enroll. Better to know now than at the
            pharmacy.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            Work with a broker who takes your condition as seriously as you do
          </h2>
          <p className="text-gray-700 mb-3">
            I'm Anthony Orner, and I'm based in New Jersey. I don't rush calls,
            I don't dismiss conditions I can't see, and I don't push plans that
            pay me more. You bring your doctors, your prescriptions, and your
            budget. I bring the plan comparison. No cost to you, ever.
          </p>
          <p className="text-gray-700">
            You've spent enough energy explaining yourself to people who don't
            get it. You don't have to do that here.
          </p>
        </section>

        <div className="mt-10 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <p className="text-xl font-semibold text-blue-900 mb-2">
            Ready to find a plan that works with your fibromyalgia - not against
            it?
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
            . No pressure, no judgment.
          </p>
        </div>

        <section className="mt-12">
          <FAQSection faqs={faqs} />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Related resources
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare-guides/medigap-plan-g-nj"
                className="text-blue-700 hover:underline"
              >
                Medigap Plan G in New Jersey - What It Covers and Costs
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/medicare-part-d-prescription-drug-coverage"
                className="text-blue-700 hover:underline"
              >
                Medicare Part D Prescription Drug Coverage Explained
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-chronic-pain-patients"
                className="text-blue-700 hover:underline"
              >
                Medicare Broker for Chronic Pain Patients
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/medicare-advantage-vs-medigap"
                className="text-blue-700 hover:underline"
              >
                Medicare Advantage vs. Medigap - Which Is Right for You?
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}