import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for sleep apnea patients | Free CPAP Coverage Check | MedicareYourself",
  description:
    "Medicare broker for sleep apnea patients helping you understand CPAP coverage rules and find the best plan. Anthony Orner offers a free coverage check.",
  openGraph: {
    title:
      "Medicare broker for sleep apnea patients | Free CPAP Coverage Check | MedicareYourself",
    description:
      "Medicare broker for sleep apnea patients helping you understand CPAP coverage rules and find the best plan. Anthony Orner offers a free coverage check.",
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
      name: "Medicare Broker for Sleep Apnea Patients",
      item: "https://www.medicareyourself.com/services/medicare-broker-for-sleep-apnea-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Sleep Apnea Patients: CPAP, Sleep Studies, and Plan Selection",
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
  datePublished: "2025-07-28",
  dateModified: "2025-07-28",
};

const faqs = [
  {
    question: "What treatment does Medicare cover for sleep apnea?",
    answer:
      "Medicare Part B covers CPAP machines, masks, tubing, and related accessories as durable medical equipment (DME) for obstructive sleep apnea. Coverage starts with a 12-week trial period after a qualifying sleep study diagnosis. You pay 20% of the Medicare-approved amount after meeting the Part B deductible ($283 in 2026).",
  },
  {
    question: "How to get Medicare to pay for CPAP?",
    answer:
      "You need a sleep study that confirms obstructive sleep apnea, ordered by your doctor. Medicare then covers a 12-week CPAP trial. During that trial, you must demonstrate compliance - using the machine at least 4 hours per night for 70% of nights in a 30-day period. Meet that threshold, and Medicare continues covering your equipment and supplies.",
  },
  {
    question:
      "What happens if I don't meet the 90-day CPAP compliance requirement?",
    answer:
      "If you don't meet compliance during the initial trial period, Medicare can stop covering your CPAP equipment. You'd need to restart the qualification process, which means another sleep study and another trial. Talk to your sleep doctor early if you're struggling with mask fit or comfort - there are options before the deadline passes.",
  },
  {
    question: "Does Medigap cover CPAP costs that Original Medicare doesn't?",
    answer:
      "Yes. A Medigap plan like Plan G covers your 20% Part B coinsurance for CPAP equipment and supplies after you pay the annual Part B deductible. This can significantly reduce your out-of-pocket cost for ongoing CPAP supplies like masks, filters, and tubing replacements.",
  },
];

export default function MedicareBrokerForSleepApneaPatients() {
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
          Medicare Broker for Sleep Apnea Patients
        </span>
      </nav>

      <div className="bg-[#1e40af] rounded-lg p-6 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Medicare Broker for Sleep Apnea Patients: CPAP, Sleep Studies, and
          Plan Selection
        </h1>
        <Image
          src="/images/medicare-broker-for-sleep-apnea-patients_photo.webp"
          alt="Medicare broker for sleep apnea patients"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />
      </div>

      <p className="text-lg mb-2">
        A Medicare broker for sleep apnea patients can save you real frustration
        - and real money. Medicare covers CPAP equipment, but the rules around
        compliance timelines, supply replacements, and plan choice trip people up
        constantly.
      </p>
      <p className="text-lg mb-6">
        I'm Anthony Orner, a licensed Medicare broker. I'll walk you through
        what's covered, what the deadlines actually mean, and which plan type
        protects you best.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How Medicare covers CPAP machines and supplies
        </h2>
        <p className="mb-3">
          Medicare Part B covers CPAP therapy as durable medical equipment (DME)
          for obstructive sleep apnea. That includes the machine itself, masks,
          tubing, and filters. You need a qualifying sleep study first - either
          in-lab or an approved home test.
        </p>
        <p>
          After the Part B deductible ($283 in 2026), you pay 20% of the
          Medicare-approved amount. That 20% is where your plan choice makes a
          big difference.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          The 90-day compliance rule you need to know about
        </h2>
        <p className="mb-3">
          Medicare starts with a 12-week CPAP trial. During that window, you
          must prove you're actually using the machine - at least 4 hours a
          night, on 70% of nights within a 30-day period.
        </p>
        <p>
          Miss that mark, and Medicare can pull coverage. You'd have to start
          over with a new sleep study. People get sick, struggle with mask fit,
          or just can't adjust in time. If you're having trouble, talk to your
          sleep doctor before the deadline - not after.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medigap vs. Advantage for sleep apnea equipment costs
        </h2>
        <p className="mb-3">
          With Original Medicare alone, you're paying 20% out of pocket for
          every CPAP supply order. Over years of replacements - masks, cushions,
          filters, tubing - that adds up.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-3">
          <li>
            <strong>Medigap (Plan G, Plan N):</strong> Covers that 20%
            coinsurance. After your annual deductible, your CPAP supplies cost
            you nothing extra. You also choose any Medicare-accepting DME
            supplier.
          </li>
          <li>
            <strong>Medicare Advantage:</strong> May have lower premiums but
            often requires network DME suppliers. Copays for equipment vary by
            plan and can change yearly.
          </li>
        </ul>
        <p>
          If you're using a CPAP every night for years, predictable costs
          usually win.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Ongoing supply replacements Medicare covers
        </h2>
        <p className="mb-3">
          Medicare has a replacement schedule for CPAP supplies. Masks and
          cushions can be replaced every few months. Tubing and filters on their
          own schedule. Your DME supplier should track this for you, but many
          don't.
        </p>
        <p>
          Knowing what's covered and when keeps you from paying out of pocket
          for supplies Medicare would have paid for.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why plan choice matters more than you'd think
        </h2>
        <p className="mb-3">
          Sleep apnea isn't a one-time treatment. It's nightly. Your CPAP costs
          are ongoing - and so are sleep doctor visits, follow-up studies if your
          pressure needs adjusting, and the occasional mask trial when something
          stops working.
        </p>
        <p>
          The wrong plan means surprise bills, network hassles, or paying full
          price for a replacement mask because your supplier wasn't in-network.
          The right plan means you stop thinking about it.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Get a free plan comparison for sleep apnea coverage
        </h2>
        <p className="mb-3">
          I'll look at your current plan, your CPAP supplier, your sleep doctor,
          and your budget - then show you what actually makes sense. No cost, no
          obligation, no pressure.
        </p>
        <p>
          Call me at{" "}
          <a href="tel:8555591700" className="text-blue-700 font-semibold">
            855-559-1700
          </a>{" "}
          or use the link below.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center mb-10">
        <p className="text-xl font-semibold mb-2">
          Ready to check your CPAP coverage?
        </p>
        <p className="mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/contact" className="underline font-bold">
            Get a Free Quote
          </Link>
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-guides/medigap-plan-g"
              className="text-blue-700 hover:underline"
            >
              Medicare Supplement Plan G: What It Covers
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-vs-medigap"
              className="text-blue-700 hover:underline"
            >
              Medicare Advantage vs. Medigap: How to Decide
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/durable-medical-equipment-coverage"
              className="text-blue-700 hover:underline"
            >
              Medicare DME Coverage: What Qualifies
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/part-b-deductible"
              className="text-blue-700 hover:underline"
            >
              Understanding the Part B Deductible in 2026
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}