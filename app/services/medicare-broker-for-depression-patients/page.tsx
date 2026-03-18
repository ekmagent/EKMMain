import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for depression patients | Free Mental Health Plan Review | MedicareYourself",
  description:
    "Medicare broker for depression patients — Anthony Orner matches you with plans covering therapy, psychiatry, and medications in NJ. Free, no-pressure review.",
  openGraph: {
    title:
      "Medicare broker for depression patients | Free Mental Health Plan Review | MedicareYourself",
    description:
      "Medicare broker for depression patients — Anthony Orner matches you with plans covering therapy, psychiatry, and medications in NJ. Free, no-pressure review.",
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
      name: "Medicare Broker for Depression Patients",
      item: "https://www.medicareyourself.com/services/medicare-broker-for-depression-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Depression Patients — Plans That Support Ongoing Mental Health Treatment",
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
      "Nothing. My services are free to you. I'm paid by the insurance carriers, not by my clients. There's no fee for plan reviews, comparisons, or help with enrollment.",
  },
  {
    question: "Does Medicare pay for depression treatment?",
    answer:
      "Yes. Medicare Part B covers outpatient therapy, psychiatry visits, and depression screenings with no session limits. You pay the $283 annual Part B deductible, then 20% of each visit. Part D covers antidepressant medications, though copays vary by plan and formulary tier.",
  },
  {
    question:
      "Can I see a therapist through telehealth with Medicare?",
    answer:
      "Yes. Medicare covers therapy via video and phone permanently. This is especially helpful if mobility issues, fatigue, or transportation make in-person visits difficult. Some providers are easier to access through telehealth, though availability varies by plan type.",
  },
  {
    question:
      "Should I choose Original Medicare or Medicare Advantage for mental health care?",
    answer:
      "It depends on your treatment situation. Original Medicare with a Supplement lets you see any provider who accepts Medicare, with no referrals needed. Medicare Advantage may have lower premiums but restricts you to a network and may require prior authorizations for certain mental health services. I can help you compare both based on your specific providers and medications.",
  },
];

export default function MedicareBrokerForDepressionPatients() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />

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
          Medicare Broker for Depression Patients
        </span>
      </nav>

      <div className="bg-[#1e40af] rounded-lg p-6 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Medicare Broker for Depression Patients — Plans That Support Ongoing
          Mental Health Treatment
        </h1>
        <Image
          src="/images/medicare-broker-for-depression-patients_photo.webp"
          alt="Medicare broker for depression patients"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />
      </div>

      <p className="text-lg mb-2">
        Medicare broker for depression patients - that's the kind of search
        that tells me someone is tired of figuring this out alone. You know
        Medicare covers mental health. But finding a therapist who actually
        takes your plan, confirming your medications are on formulary, and
        sorting out what you'll actually owe per visit? That's where things
        fall apart.
      </p>
      <p className="text-lg mb-6">
        I'm Anthony Orner, a licensed Medicare broker in New Jersey. I help
        people match their treatment plans to the right Medicare coverage -
        therapy, psychiatry, prescriptions, all of it. No cost to you, ever.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How Medicare covers therapy, psychiatry, and antidepressants
        </h2>
        <p className="mb-3">
          Medicare Part B covers outpatient mental health services with no
          annual session limits. That includes individual therapy, group
          therapy, psychiatry visits, and depression screenings. You pay the
          $283 yearly deductible, then 20% of each approved visit.
        </p>
        <p>
          Part D covers antidepressants like SSRIs, SNRIs, and other
          commonly prescribed medications. Your copay depends on which
          formulary tier your drug lands on - and that varies by plan.
          Starting in 2024, Medicare expanded access to over 400,000 new
          mental health providers, including licensed marriage and family
          therapists and mental health counselors.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          The real problem: finding providers who take your plan
        </h2>
        <p className="mb-3">
          On paper, Medicare covers therapy. In practice, many therapists
          don't accept Medicare because reimbursement rates are low. The ones
          who do may be booked months out. If you have mobility issues or
          fatigue that makes leaving the house hard, the search feels even
          more impossible.
        </p>
        <p>
          I check provider networks before recommending a plan. There's no
          point in a plan with great mental health "benefits" if nobody near
          you accepts it.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Supplement vs. Advantage: which handles mental health costs better
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Original Medicare + Supplement (Medigap):</strong> You can
            see any psychiatrist or therapist in the country who accepts
            Medicare. No referrals, no prior authorization. A Plan G
            Supplement covers the 20% coinsurance, so your therapy visits
            cost $0 after the deductible.
          </li>
          <li>
            <strong>Medicare Advantage:</strong> May offer lower premiums and
            extra benefits like $0 copay telehealth. But you're limited to a
            network, and some plans require prior authorization for mental
            health visits. If your preferred provider isn't in-network, you
            pay full price.
          </li>
        </ul>
        <p className="mt-3">
          Which is better depends on your providers, your medications, and
          how often you're in treatment. I'll lay out the real numbers for
          your situation.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Part D formulary checks for common depression medications
        </h2>
        <p className="mb-3">
          Not every Part D plan covers your specific antidepressant at the
          same tier. A drug that costs $10/month on one plan might cost $45
          on another. If your doctor adjusts your medication, the wrong plan
          could leave you with a surprise bill.
        </p>
        <p>
          I run formulary checks against your current prescriptions and flag
          any restrictions like prior authorization or step therapy
          requirements. You'll know exactly what you'll pay before you
          enroll.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Telehealth access matters for depression care
        </h2>
        <p>
          Medicare permanently covers therapy via video and phone. This is a
          real option if leaving home on tough days isn't realistic. Some
          Advantage plans offer $0 copay telehealth visits. I can show you
          which plans in NJ have the best telehealth mental health access,
          including providers with actual openings.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Get a personalized plan review around your treatment plan
        </h2>
        <p>
          Bring me your therapist's name, your psychiatrist, your
          prescriptions. I'll tell you which plans cover them, what you'll
          owe per visit, and whether there's a better option you haven't
          considered. No cost, no pressure. Just answers that match your
          actual life.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 my-10 text-center">
        <p className="text-xl font-semibold mb-2">
          Talk through your Medicare options with a local licensed broker.
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
              href="/services/medicare-broker-for-mental-health"
              className="text-blue-600 hover:underline"
            >
              Medicare Broker for Mental Health Coverage
            </Link>
          </li>
          <li>
            <Link
              href="/guides/medicare-part-d-drug-coverage"
              className="text-blue-600 hover:underline"
            >
              Understanding Medicare Part D Drug Coverage
            </Link>
          </li>
          <li>
            <Link
              href="/guides/medicare-supplement-vs-advantage"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement vs. Medicare Advantage
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-broker-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Broker in New Jersey
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}