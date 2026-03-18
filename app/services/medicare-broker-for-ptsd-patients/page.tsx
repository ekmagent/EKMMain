import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for PTSD patients | Free Mental Health Plan Review | MedicareYourself",
  description:
    "Medicare broker for PTSD patients — find NJ plans covering trauma therapy, prescriptions, and telehealth. Anthony Orner compares your options free.",
  openGraph: {
    title:
      "Medicare broker for PTSD patients | Free Mental Health Plan Review | MedicareYourself",
    description:
      "Medicare broker for PTSD patients — find NJ plans covering trauma therapy, prescriptions, and telehealth. Anthony Orner compares your options free.",
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
      name: "Medicare Broker for PTSD Patients",
      item: "https://www.medicareyourself.com/services/medicare-broker-for-ptsd-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for PTSD Patients — Find Plans Covering Trauma-Focused Therapy and Medications",
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
    question: "Can I get Medicare if I have PTSD?",
    answer:
      "Yes. If you qualify for Medicare through age (65+) or Social Security Disability (SSDI), PTSD does not disqualify you. Many people with PTSD receive Medicare through SSDI after a 24-month waiting period from their first disability payment.",
  },
  {
    question: "Do you pay a Medicare broker?",
    answer:
      "No. Medicare brokers like Anthony Orner are paid by insurance carriers, not by you. Plan comparisons, recommendations, and enrollment help are free to you with no obligation.",
  },
  {
    question: "Does Medicare pay for PTSD counseling?",
    answer:
      "Medicare Part B covers outpatient mental health services including individual therapy, group therapy, and psychiatric evaluations. You pay 20% of the Medicare-approved amount after the $283 annual Part B deductible. Trauma-focused approaches like CBT and EMDR are covered when provided by a Medicare-accepting provider.",
  },
  {
    question: "Can I use telehealth for PTSD therapy with Medicare?",
    answer:
      "Yes. Medicare covers telehealth mental health visits, which can make consistent therapy more accessible - especially on difficult days. Coverage and copays depend on your specific plan.",
  },
];

export default function MedicareBrokerForPTSDPatients() {
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
          <span className="text-gray-700">Medicare Broker for PTSD Patients</span>
        </nav>

        <div className="bg-[#1e40af] rounded-lg p-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Medicare Broker for PTSD Patients — Find Plans Covering Trauma-Focused Therapy and Medications
          </h1>
          <Image
            src="/images/medicare-broker-for-ptsd-patients.webp"
            alt="Medicare broker for PTSD patients"
            width={800}
            height={400}
            className="rounded-lg mb-6 w-full"
          />
        </div>

        <p className="text-lg mb-2">
          Medicare broker for PTSD patients isn't a title you'll find on a business card, but it's exactly what I do. If you're managing PTSD and trying to figure out which Medicare plan actually covers your therapy, your medications, and your providers - I'll walk through it with you, for free.
        </p>
        <p className="text-lg mb-6">
          I'm Anthony Orner, a licensed Medicare broker in New Jersey. I've helped people sort through this when they felt stuck, overwhelmed, or exhausted from calling insurance numbers that go nowhere.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What Medicare covers for PTSD: CBT, EMDR, and medication
          </h2>
          <p className="mb-3">
            Medicare Part B covers outpatient mental health services, including the therapies most used for PTSD. That means cognitive behavioral therapy (CBT), EMDR, individual and group counseling, and psychiatric evaluations are covered when delivered by a Medicare-accepting provider.
          </p>
          <p>
            You'll pay 20% of the Medicare-approved amount after your $283 annual Part B deductible. A Medigap plan can reduce or eliminate that 20%.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            The real problem: finding a trauma therapist who takes Medicare
          </h2>
          <p className="mb-3">
            Coverage on paper means little if no one near you accepts your plan. This is the frustration I hear most - people qualifying for benefits but unable to find a trauma-informed therapist who actually takes Medicare or their Medicare Advantage plan.
          </p>
          <p>
            I check provider networks before recommending a plan. If you have a therapist you want to keep, I'll verify they're in-network. If you're searching, I can point you toward plans with stronger behavioral health directories in your area.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            VA benefits vs. Medicare: when you need both
          </h2>
          <p className="mb-3">
            If you're a veteran with PTSD, you may have VA healthcare and Medicare. They work differently and don't always overlap. VA covers PTSD treatment at VA facilities at no cost if your PTSD is service-connected. Medicare gives you access to civilian providers.
          </p>
          <p>
            Having both can expand your options. I'll help you understand where each one applies so you're not paying out of pocket for something that should be covered.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Part D coverage for prazosin, sertraline, and other PTSD prescriptions
          </h2>
          <p className="mb-3">
            Common PTSD medications like sertraline (Zoloft), paroxetine (Paxil), and prazosin are generally available through Part D plans, but formularies vary. A drug that costs $10 on one plan might cost $45 on another - or require prior authorization.
          </p>
          <p>
            I run your specific medications through plan formularies so you see actual costs, not guesses. If your doctor adjusts your prescription mid-year, that matters for choosing the right plan during enrollment.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Telehealth for PTSD therapy through Medicare
          </h2>
          <p className="mb-3">
            Some days, leaving the house isn't realistic. Medicare now covers telehealth mental health visits, which can make the difference between keeping a weekly appointment and skipping it for a month.
          </p>
          <p>
            Not every plan handles telehealth the same way. Some Medicare Advantage plans offer $0 copay virtual behavioral health visits. I'll compare those options based on how you actually use your coverage.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Get a free plan match for your PTSD treatment needs
          </h2>
          <p className="mb-3">
            You shouldn't have to become an insurance expert on top of everything else. Tell me your therapist, your medications, and what's not working with your current plan. I'll show you what's available - no cost, no pressure, no sales pitch.
          </p>
          <p>
            If you're on SSDI and new to Medicare, or if you've been on a plan that isn't covering what you need, this is a good time to call.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-6 mb-10 text-center">
          <p className="text-xl font-semibold mb-2">
            Talk to a licensed Medicare broker who understands PTSD coverage.
          </p>
          <p className="mb-4">
            Call{" "}
            <a href="tel:8555591700" className="underline font-bold">
              855-559-1700
            </a>{" "}
            or{" "}
            <Link href="/contact" className="underline font-bold">
              get a free quote online
            </Link>
            . No obligation.
          </p>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/services/medicare-broker-for-mental-health"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker for Mental Health Coverage
              </Link>
            </li>
            <li>
              <Link
                href="/guides/medicare-part-d-prescription-drug-plans"
                className="text-blue-600 hover:underline"
              >
                Understanding Medicare Part D Prescription Drug Plans
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-veterans"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker for Veterans
              </Link>
            </li>
            <li>
              <Link
                href="/guides/medicare-advantage-vs-medigap"
                className="text-blue-600 hover:underline"
              >
                Medicare Advantage vs. Medigap: Which Is Right for You?
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}