import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for hearing loss patients | Free Plan Review | MedicareYourself",
  description:
    "Medicare broker for hearing loss patients — find plans with hearing aid and audiology benefits. Anthony Orner compares NJ options at no cost. Call today.",
  openGraph: {
    title:
      "Medicare broker for hearing loss patients | Free Plan Review | MedicareYourself",
    description:
      "Medicare broker for hearing loss patients — find plans with hearing aid and audiology benefits. Anthony Orner compares NJ options at no cost. Call today.",
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
      name: "Medicare Broker for Hearing Loss Patients",
      item: "https://www.medicareyourself.com/services/medicare-broker-for-hearing-loss-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Hearing Loss Patients — Navigate Coverage for Hearing Aids and Audiology",
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
    question: "Does Medicare cover anything for hearing loss?",
    answer:
      "Original Medicare (Parts A and B) does not cover hearing aids or hearing aid fitting exams. However, Medicare Part B does cover diagnostic hearing and balance exams when ordered by a doctor to determine if you need medical treatment. Many Medicare Advantage plans in NJ include hearing aid allowances and routine hearing exams as supplemental benefits.",
  },
  {
    question: "Who helps with hearing impairment?",
    answer:
      "Audiologists perform hearing evaluations and fit hearing aids. Your primary care doctor can refer you for diagnostic testing covered under Part B. A licensed Medicare broker like Anthony Orner can help you find a plan that includes hearing benefits so you're not paying entirely out of pocket.",
  },
  {
    question: "Can cochlear nerve damage be repaired?",
    answer:
      "Cochlear nerve damage (sensorineural hearing loss) is generally permanent and cannot be reversed. However, cochlear implants can bypass the damaged nerve fibers and stimulate the auditory nerve directly. Unlike hearing aids, cochlear implant surgery and related services are covered by Original Medicare when deemed medically necessary.",
  },
  {
    question:
      "How much do Medicare Advantage plans cover for hearing aids in NJ?",
    answer:
      "Coverage varies by plan and carrier. Some NJ Medicare Advantage plans offer hearing aid allowances of $500 to $2,500 or more per year, plus routine hearing exams. Benefits, copays, and network restrictions differ significantly between plans. Call 855-559-1700 to compare your specific options.",
  },
];

export default function MedicareBrokerForHearingLossPatients() {
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
            Medicare Broker for Hearing Loss Patients
          </span>
        </nav>

        <div className="bg-[#1e40af] rounded-lg p-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Medicare Broker for Hearing Loss Patients — Navigate Coverage for
            Hearing Aids and Audiology
          </h1>
          <Image
            src="/images/medicare-broker-for-hearing-loss-patients.webp"
            alt="Medicare broker for hearing loss patients"
            width={800}
            height={400}
            className="rounded-lg mb-6 w-full"
          />
        </div>

        <p className="text-lg mb-2">
          A Medicare broker for hearing loss patients can save you hours of
          comparing plans that may or may not cover the hearing aids or audiology
          visits you actually need. I'm Anthony Orner, a licensed broker in New
          Jersey, and I help people with hearing loss find plans that fit their
          specific situation - at no cost to you.
        </p>
        <p className="mb-6">
          Hearing loss quietly changes daily life. Conversations get exhausting.
          Family gatherings feel isolating. Doctor visits become stressful when
          you can't catch every word. The right Medicare plan won't fix
          everything, but it can make hearing aids and exams far more affordable.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What Original Medicare does and doesn't cover for hearing
          </h2>
          <p className="mb-2">
            Original Medicare (Parts A and B) does not cover hearing aids or
            exams to fit hearing aids. You pay 100% out of pocket. That's
            straight from medicare.gov.
          </p>
          <p>
            Part B does cover diagnostic hearing exams - but only when a doctor
            orders one to decide if you need medical treatment. A routine hearing
            check to see if you need aids? Not covered.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Advantage plans that include hearing aid benefits in NJ
          </h2>
          <p className="mb-2">
            Most Medicare Advantage plans in New Jersey now include some level of
            hearing benefits. But "some level" does a lot of heavy lifting in
            that sentence.
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-2">
            <li>
              Some plans offer $500/year for hearing aids. Others offer $2,500 or
              more.
            </li>
            <li>
              Routine hearing exams may be covered annually, or only every two
              years.
            </li>
            <li>
              Network restrictions matter - your audiologist may not be in every
              plan.
            </li>
            <li>
              Copays for hearing-related visits vary widely between carriers.
            </li>
          </ul>
          <p>
            I compare these details side by side so you don't sign up for a plan
            that looks good on paper but falls short when you need it.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Cochlear implants vs. hearing aids: different coverage rules
          </h2>
          <p className="mb-2">
            Cochlear implants and hearing aids are treated completely differently
            by Medicare. Cochlear implant surgery is covered under Original
            Medicare when medically necessary. Hearing aids are not covered at
            all under Parts A and B.
          </p>
          <p>
            If your audiologist has recommended a cochlear implant, Part B
            typically covers the surgery, the device, and follow-up
            rehabilitation. If you need standard hearing aids instead, you'll
            need an Advantage plan or a standalone hearing discount program.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            The real cost of skipping hearing coverage
          </h2>
          <p className="mb-2">
            A pair of quality hearing aids can run $2,000 to $7,000. That's a
            real number that stops a lot of people from getting help they need.
          </p>
          <p>
            I've talked with families where a parent refuses aids because of
            cost, then slowly pulls back from conversations, misses important
            medical instructions, or can't hear alarms in the house. The right
            plan won't make hearing aids free, but it can cut the cost
            significantly.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How I match you to the right plan
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>I ask about your hearing needs, audiologist, and budget</li>
            <li>
              I compare every NJ Medicare Advantage plan's hearing benefits
            </li>
            <li>
              I check whether your current doctors and prescriptions are covered
              too
            </li>
            <li>
              I walk you through each option and let you decide - no pressure
            </li>
          </ul>
          <p className="mt-2">
            This service is free. I'm paid by the insurance carriers, not by
            you.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Request a free plan match based on your hearing needs
          </h2>
          <p>
            If you or a family member has hearing loss and you're unsure what
            Medicare covers, call me. I'll tell you exactly which NJ plans
            include hearing aid allowances, audiology visits, and routine exams.
            No enrollment obligation. Just honest answers.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-6 mb-10 text-center">
          <p className="text-xl font-semibold mb-2">
            Compare NJ plans with hearing benefits - no cost, no obligation.
          </p>
          <p className="text-2xl font-bold mb-3">
            <a href="tel:8555591700" className="underline">
              855-559-1700
            </a>
          </p>
          <Link
            href="/get-a-free-quote"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
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
                href="/services/medicare-advantage-plans-nj"
                className="text-blue-600 hover:underline"
              >
                Medicare Advantage Plans in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-chronic-conditions"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker for Chronic Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/medicare-advantage-vs-medigap"
                className="text-blue-600 hover:underline"
              >
                Medicare Advantage vs. Medigap: Which Is Right for You?
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/what-does-medicare-cover"
                className="text-blue-600 hover:underline"
              >
                What Does Medicare Cover?
              </Link>
            </li>
          </ul>
        </section>

        <p className="text-sm text-gray-500 mt-10">
          Written by Anthony Orner, Licensed Medicare Broker, NJ. Last updated
          July 2025.
        </p>
      </main>
    </>
  );
}