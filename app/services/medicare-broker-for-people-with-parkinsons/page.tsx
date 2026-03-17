import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare Broker for People With Parkinson's | Specialists, Meds & Therapy Covered | MedicareYourself",
  description:
    "Medicare broker for people with Parkinson's — Anthony Orner helps you find coverage that handles specialists, medications, and therapy. Free consultation.",
  openGraph: {
    title:
      "Medicare Broker for People With Parkinson's | Specialists, Meds & Therapy Covered | MedicareYourself",
    description:
      "Medicare broker for people with Parkinson's — Anthony Orner helps you find coverage that handles specialists, medications, and therapy. Free consultation.",
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
      name: "Medicare Broker for People With Parkinson's",
      item: "https://www.medicareyourself.com/services/medicare-broker-for-people-with-parkinsons",
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
    url: "https://www.medicareyourself.com/about",
  },
  publisher: {
    "@type": "Organization",
    name: "EasyKind Medicare",
    alternateName: "MedicareYourself",
  },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
};

const faqs = [
  {
    question: "Can I get Medicare if I have Parkinson's?",
    answer:
      "Yes. If you're 65 or older, you qualify for Medicare regardless of any health condition, including Parkinson's disease. If you're under 65, you may qualify through Social Security Disability Insurance (SSDI) after a 24-month waiting period. Medicare covers neurologist visits, prescription medications, physical therapy, occupational therapy, and speech therapy related to Parkinson's treatment.",
  },
  {
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. A licensed Medicare broker like Anthony Orner is paid by the insurance carriers, not by you. The premiums you pay are the same whether you enroll directly or work with a broker. You get free guidance and plan comparisons at no extra cost.",
  },
  {
    question:
      "Does Medicare cover deep brain stimulation (DBS) for Parkinson's?",
    answer:
      "Medicare Part A covers the hospital stay for DBS surgery, and Part B covers the doctors performing the procedure. You'll still owe coinsurance and deductibles, which is exactly why choosing the right Medigap or Medicare Advantage plan matters. A broker can help you estimate your total out-of-pocket exposure before any procedure.",
  },
  {
    question:
      "Can I switch Medicare plans if my Parkinson's symptoms get worse?",
    answer:
      "You can change Medicare Advantage or Part D plans every year during Open Enrollment (October 15 through December 7). In New Jersey, you also have year-round guaranteed issue rights for Medigap, so you can switch supplement plans without medical underwriting at any time.",
  },
];

export default function MedicareBrokerParkinsons() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/hub" className="hover:underline">
          Medicare Guides
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">
          Medicare Broker for People With Parkinson&apos;s
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
        Medicare Broker for People With Parkinson&apos;s: Finding Coverage That
        Actually Fits
      </h1>

      <Image
        src="/images/hub_medicare-broker-for-people-with-parkinsons.webp"
        alt="Medicare broker for people with Parkinson's"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg text-gray-700 mb-2">
        A Medicare broker for people with Parkinson&apos;s does something a
        general enrollment website can&apos;t: match your specific treatment
        schedule, specialist network, and medication list to a plan that
        controls your costs. Parkinson&apos;s care involves neurology, physical
        therapy, occupational therapy, speech therapy, and often expensive
        medications like carbidopa-levodopa or dopamine agonists.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        I&apos;m Anthony Orner, a licensed Medicare broker in New Jersey. I work
        with Parkinson&apos;s patients and their families every week, and
        I&apos;ll walk you through what actually matters.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Why Parkinson&apos;s patients need predictable out-of-pocket costs
        </h2>
        <p className="text-gray-700 mb-3">
          Parkinson&apos;s is progressive. Your care costs tend to rise over
          time, not stay flat. That makes cost predictability critical.
        </p>
        <p className="text-gray-700 mb-3">
          Original Medicare (Parts A and B) leaves you exposed. Part B covers
          80% of outpatient services after the $257 annual deductible - you pay
          the other 20% with no cap. If you&apos;re seeing a movement disorder
          specialist every quarter, doing PT twice a week, and filling multiple
          prescriptions, that 20% adds up fast.
        </p>
        <p className="text-gray-700">
          A Medigap plan or a Medicare Advantage plan with a low out-of-pocket
          maximum puts a ceiling on what you spend. That ceiling matters more
          than almost anything else when you have a chronic condition.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Medigap vs Medicare Advantage when you see multiple specialists
        </h2>
        <p className="text-gray-700 mb-3">
          Parkinson&apos;s patients often coordinate between four or five
          providers: neurologist, physical therapist, occupational therapist,
          speech-language pathologist, and primary care. Here&apos;s how the two
          paths compare:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-3">
          <li>
            <strong>Medigap (Plan G or Plan N):</strong> You pick any doctor
            who accepts Medicare. No referrals, no network restrictions. Plan G
            covers everything except the $257 Part B deductible. You add a
            standalone Part D plan for medications.
          </li>
          <li>
            <strong>Medicare Advantage (Part C):</strong> Lower premiums, but
            you use a network. Copays apply at each visit. Some plans cap your
            annual out-of-pocket at $3,000 to $5,000. Check that your
            movement disorder specialist is in-network before enrolling.
          </li>
        </ul>
        <p className="text-gray-700">
          If you travel to a Parkinson&apos;s center of excellence outside your
          area, Medigap gives you that flexibility. If you want lower monthly
          costs and can stay in-network, Advantage can work.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Medications and Part D coverage for Parkinson&apos;s
        </h2>
        <p className="text-gray-700 mb-3">
          Parkinson&apos;s medications range from generic carbidopa-levodopa
          (relatively affordable) to brand-name drugs and newer therapies that
          can cost hundreds per month. Your Part D formulary matters.
        </p>
        <p className="text-gray-700 mb-3">
          I run your exact medication list through every available Part D plan
          in your zip code. The difference between the cheapest and most
          expensive plan can be $1,500 or more per year for the same drugs.
        </p>
        <p className="text-gray-700">
          This check takes me about 15 minutes. It could save you thousands.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Guaranteed issue situations that skip medical underwriting
        </h2>
        <p className="text-gray-700 mb-3">
          Medical underwriting can be a real concern when you have a
          Parkinson&apos;s diagnosis. Carriers in most states can deny Medigap
          coverage or charge higher premiums based on health history - outside
          your initial enrollment window.
        </p>
        <p className="text-gray-700 mb-3">
          New Jersey is different. NJ guarantees Medigap enrollment year-round,
          regardless of health conditions. No medical questions. No higher
          premiums because of Parkinson&apos;s.
        </p>
        <p className="text-gray-700">
          If you&apos;re in another state, federal guaranteed issue rights kick
          in during specific situations, like losing employer coverage or
          leaving a Medicare Advantage plan within 12 months. I help you
          identify and use these windows.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Therapy and rehabilitation coverage under Medicare
        </h2>
        <p className="text-gray-700 mb-3">
          Medicare Part B covers physical therapy, occupational therapy, and
          speech-language pathology services. These are central to managing
          Parkinson&apos;s symptoms like gait problems, fine motor decline, and
          speech changes.
        </p>
        <p className="text-gray-700">
          There&apos;s no hard annual cap on therapy anymore, but Medicare may
          review claims that exceed certain thresholds. Your therapist handles
          the documentation. Your plan handles the cost-sharing. I make sure
          those cost-sharing numbers don&apos;t surprise you.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          How Anthony builds a plan around your treatment schedule
        </h2>
        <p className="text-gray-700 mb-3">
          Here&apos;s what happens when you call me:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-3">
          <li>
            You tell me your doctors, your medications, and how often you see
            each specialist.
          </li>
          <li>
            I check which plans cover your neurologist and movement disorder
            specialist.
          </li>
          <li>
            I run your prescriptions through every Part D formulary available
            in your area.
          </li>
          <li>
            I estimate your total annual costs under Medigap Plan G, Plan N,
            and the best Medicare Advantage options.
          </li>
          <li>
            You pick. No pressure, no sales pitch. Just numbers on a page.
          </li>
        </ul>
        <p className="text-gray-700">
          The consultation is free. I get paid by the carrier you choose, and
          your premium stays the same whether you use me or enroll on your own.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-8 text-center my-10">
        <p className="text-xl font-semibold mb-2">
          Ready to find the right Medicare plan for your Parkinson&apos;s care?
        </p>
        <p className="mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          for a free, no-obligation consultation with Anthony.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
        >
          Get a Free Quote
        </Link>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          Related resources
        </h2>
        <ul className="space-y-3">
          <li>
            <Link
              href="/services/medicare-plan-g-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Plan G in New Jersey: Rates and Benefits
            </Link>
          </li>
          <li>
            <Link
              href="/services/medigap-vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medigap vs Medicare Advantage: Which Is Right for You?
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-part-d-plan-comparison"
              className="text-blue-600 hover:underline"
            >
              Medicare Part D Plan Comparison
            </Link>
          </li>
          <li>
            <Link
              href="/services/guaranteed-issue-medigap-rights"
              className="text-blue-600 hover:underline"
            >
              Guaranteed Issue Rights for Medigap Plans
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}