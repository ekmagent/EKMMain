import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare broker for people with parkinsons | Free Consultation | MedicareYourself",
  description:
    "Medicare broker for people with Parkinson's — find coverage for specialists, medications, therapy, and DBS. Free help from a licensed broker.",
  openGraph: {
    title:
      "medicare broker for people with parkinsons | Free Consultation | MedicareYourself",
    description:
      "Medicare broker for people with Parkinson's — find coverage for specialists, medications, therapy, and DBS. Free help from a licensed broker.",
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
      name: "Medicare Broker for People With Parkinson's",
      item: "https://medicareyourself.com/services/medicare-broker-for-people-with-parkinsons",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for People With Parkinson's: Finding Coverage That Actually Fits",
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
  datePublished: "2025-01-01",
  dateModified: "2025-01-01",
};

const faqs = [
  {
    question: "Does Medicare cover deep brain stimulation (DBS) for Parkinson's?",
    answer:
      "Yes. Medicare covers DBS surgery when specific clinical criteria are met, including an adequate trial of medication therapy. Your neurologist will need to document that medications alone aren't controlling symptoms sufficiently. Out-of-pocket costs depend on whether you have Original Medicare with a Medigap plan or a Medicare Advantage plan.",
  },
  {
    question:
      "What Medicare plan is best for someone with Parkinson's disease?",
    answer:
      "It depends on your medications, specialists, and how often you need therapy. Original Medicare with a Medigap plan (like Plan G) gives you the widest provider access and predictable costs. Medicare Advantage plans may offer lower premiums but can require referrals and prior authorizations. A licensed broker can compare both options based on your specific situation.",
  },
  {
    question: "Does Medicare cover physical and speech therapy for Parkinson's?",
    answer:
      "Yes. Medicare Part B covers medically necessary physical therapy, occupational therapy, and speech-language pathology. You'll pay 20% of the Medicare-approved amount after meeting the $283 annual Part B deductible, unless you have supplemental coverage that picks up that cost.",
  },
  {
    question:
      "Can I switch Medicare plans if my Parkinson's medications aren't covered?",
    answer:
      "During Medicare Open Enrollment (October 15 through December 7), you can switch Part D or Medicare Advantage plans. If your drug isn't on your plan's formulary mid-year, you can request an exception from your plan or work with a broker to find better coverage for the next enrollment period.",
  },
];

export default function MedicareBrokerForPeopleWithParkinsons() {
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
        <span className="text-gray-700">
          Medicare Broker for People With Parkinson&apos;s
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Medicare Broker for People With Parkinson&apos;s: Finding Coverage That
        Actually Fits
      </h1>

      <Image
        src="/images/medicare-broker-for-people-with-parkinsons.webp"
        alt="medicare broker for people with parkinsons"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        A Medicare broker for people with Parkinson&apos;s can make the difference between a plan that works on paper and one that actually covers your neurologist, your medications, and the therapy appointments that keep you moving. I&apos;m Anthony Orner, a licensed Medicare broker, and I help people with Parkinson&apos;s sort through their options without the guesswork.
      </p>
      <p className="text-lg mb-6">
        You&apos;re already managing enough. Let me handle the insurance part.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why Parkinson&apos;s patients need predictable out-of-pocket costs
        </h2>
        <p className="mb-3">
          Parkinson&apos;s isn&apos;t one doctor and one prescription. It&apos;s a neurologist, a movement disorder specialist, a physical therapist, a speech therapist, and sometimes an occupational therapist. That adds up fast under Original Medicare, where you owe 20% of every approved service after the $283 Part B deductible.
        </p>
        <p>
          Families dealing with Parkinson&apos;s tell me the same thing: they need to know what they&apos;ll owe each month. Surprise bills make everything harder. The right plan structure eliminates most of that uncertainty.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medigap vs Medicare Advantage when you see multiple specialists
        </h2>
        <p className="mb-3">
          With Original Medicare and a Medigap plan like Plan G, you can see any specialist in the country who accepts Medicare. No referrals. No prior authorizations for standard care. You pay the $283 Part B deductible, and Plan G covers essentially everything else.
        </p>
        <p>
          Medicare Advantage plans often have lower monthly premiums, but they use provider networks. If your movement disorder specialist or DBS surgeon is out-of-network, you could face steep costs or need to switch doctors. For someone coordinating care across multiple providers, network restrictions can become a real problem.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medications and Part D coverage for Parkinson&apos;s
        </h2>
        <p className="mb-3">
          Parkinson&apos;s medications like carbidopa-levodopa, dopamine agonists, and MAO-B inhibitors vary widely in cost depending on your Part D plan&apos;s formulary. Some plans place brand-name Parkinson&apos;s drugs on higher tiers with steep copays.
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>Check whether your specific medications are on a plan&apos;s formulary before enrolling</li>
          <li>Look at which tier your drugs fall on, not just whether they&apos;re listed</li>
          <li>Ask about quantity limits or step therapy requirements</li>
          <li>Review annual out-of-pocket totals, not just monthly premiums</li>
        </ul>
        <p>
          I run your exact medication list through every available Part D plan so you see real cost comparisons, not estimates.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Therapy coverage you should know about
        </h2>
        <p className="mb-3">
          Medicare Part B covers physical therapy, occupational therapy, and speech-language pathology when medically necessary. For Parkinson&apos;s, speech therapy can help with swallowing difficulties and vocal cord function. Physical therapy helps with balance and mobility, two areas that families worry about most.
        </p>
        <p>
          Under Original Medicare, you pay 20% of the approved amount for these services. A Medigap plan can pick up that 20%, making regular therapy sessions financially manageable long-term.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Guaranteed issue situations that skip medical underwriting
        </h2>
        <p className="mb-3">
          If you&apos;re turning 65 and enrolling in Part B, your 6-month Medigap Open Enrollment Period gives you guaranteed issue rights. No health questions. No higher premiums because of Parkinson&apos;s. This window matters more for someone with a pre-existing condition than almost anyone else.
        </p>
        <p>
          Outside that window, federal guaranteed issue rights still apply in specific situations: losing employer coverage, leaving a Medicare Advantage plan, or if your plan leaves your service area. I&apos;ll tell you exactly which rights apply to your situation.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What a broker does that a website can&apos;t
        </h2>
        <p className="mb-3">
          Online plan finders don&apos;t ask whether your neurologist is planning DBS surgery next year. They don&apos;t factor in that you might need skilled nursing facility care, where days 21 through 100 cost $209.50 per day without supplemental coverage. They don&apos;t know that your medication list could change as the disease progresses.
        </p>
        <p>
          I look at where you are now and where you might be in two to three years. Then I match you with a plan that holds up. My help costs you nothing - I&apos;m paid by the insurance carriers, not by you.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center mb-10">
        <p className="text-xl font-semibold mb-2">
          Talk to a broker who understands Parkinson&apos;s coverage
        </p>
        <p className="mb-4">
          Call{" "}
          <a
            href="tel:8555591700"
            className="text-blue-700 font-bold hover:underline"
          >
            855-559-1700
          </a>{" "}
          or{" "}
          <Link
            href="/contact"
            className="text-blue-700 font-bold hover:underline"
          >
            get a free quote online
          </Link>
          . No obligation. No pressure.
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/services/medicare-plan-g"
              className="text-blue-700 hover:underline"
            >
              Medicare Plan G: What It Covers and What It Costs
            </Link>
          </li>
          <li>
            <Link
              href="/services/medigap-open-enrollment"
              className="text-blue-700 hover:underline"
            >
              Medigap Open Enrollment: Your 6-Month Window Explained
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-part-d-guide"
              className="text-blue-700 hover:underline"
            >
              Medicare Part D: How to Find the Right Drug Plan
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-advantage-vs-medigap"
              className="text-blue-700 hover:underline"
            >
              Medicare Advantage vs Medigap: Which One Fits Your Situation
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}