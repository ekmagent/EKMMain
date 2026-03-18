import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Find a Medicare Agent in Mount Laurel NJ | Free Local Help | MedicareYourself",
  description:
    "Find a Medicare agent in Mount Laurel, NJ who compares every major carrier. Anthony Orner offers free, no-pressure consultations. Call or book online today.",
  openGraph: {
    title:
      "Find a Medicare Agent in Mount Laurel NJ | Free Local Help | MedicareYourself",
    description:
      "Find a Medicare agent in Mount Laurel, NJ who compares every major carrier. Anthony Orner offers free, no-pressure consultations. Call or book online today.",
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
      name: "Find a Medicare Agent in Mount Laurel, NJ",
      item: "https://www.medicareyourself.com/services/find-a-medicare-agent-in-mount-laurel-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Find a Medicare Agent in Mount Laurel, NJ Who Works for You — Not an Insurance Company",
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
    question: "How do I pick a Medicare agent?",
    answer:
      "Look for an independent broker licensed in New Jersey who represents multiple carriers, not just one company. Ask if their service is free to you (it should be - brokers are paid by insurance companies, not clients). Make sure they can compare Medicare Supplement, Medicare Advantage, and Part D plans side by side.",
  },
  {
    question:
      "Is there a cost to work with a Medicare agent in Mount Laurel, NJ?",
    answer:
      "No. A licensed Medicare broker is paid a commission by the insurance carrier you choose. You pay the same premium whether you enroll directly or through a broker. The difference is you get expert guidance at no extra cost.",
  },
  {
    question: "When should I contact a Medicare agent before turning 65?",
    answer:
      "Ideally, reach out at least 6 months before your Part B start date. This gives you time to compare plans and lock in a Medigap rate early. Your Medigap Open Enrollment Period lasts 6 months starting the month you turn 65 and are enrolled in Part B, and during this window no carrier can deny you or charge more based on health.",
  },
  {
    question: "What Medicare plans are available in Burlington County?",
    answer:
      "Burlington County residents can choose from Original Medicare with a Medigap supplement (Plan G and Plan N are the most popular), Medicare Advantage plans from several carriers, and standalone Part D prescription drug plans. An independent broker can compare all of these for your specific situation.",
  },
];

export default function FindMedicareAgentMountLaurelNJ() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/medicare-guides" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Find a Medicare Agent in Mount Laurel, NJ
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Find a Medicare Agent in Mount Laurel, NJ Who Works for You - Not an
        Insurance Company
      </h1>

      <Image
        src="/images/find-a-medicare-agent-in-mount-laurel-nj.webp"
        alt="find a medicare agent in mount laurel nj"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Finding a Medicare agent in Mount Laurel, NJ shouldn't mean sitting
        through a high-pressure sales pitch. As an independent broker licensed in
        New Jersey, I compare plans from every major carrier so you see real
        options, not just whatever one company is pushing this quarter.
      </p>
      <p className="text-lg mb-6">
        My name is Anthony Orner, and I help Burlington County residents choose
        the right Medicare coverage at no cost to them. Here's how the process
        works.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What a licensed broker does that Medicare.gov cannot
        </h2>
        <p className="mb-2">
          Medicare.gov is a useful tool. It lists plans and estimated costs. But
          it can't tell you which Plan G carrier in Burlington County has the
          slowest rate increases over time, or which Medicare Advantage network
          includes your doctors at Virtua.
        </p>
        <p>
          A broker fills those gaps. I know local provider networks, carrier
          reputations, and the pricing history behind each plan. That context
          matters when you're locking in coverage you'll use for decades.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare Supplement and Advantage options in Burlington County
        </h2>
        <p className="mb-2">
          Mount Laurel sits in Burlington County, where you have access to a
          strong mix of both Medicare Supplement (Medigap) and Medicare Advantage
          plans. The most popular Medigap options I write here are:
        </p>
        <ul className="list-disc ml-6 mb-2 space-y-1">
          <li>
            <strong>Plan G</strong> - covers everything except the Part B
            deductible ($257/year in 2026)
          </li>
          <li>
            <strong>Plan N</strong> - lower premium, but you pay small copays at
            office visits and the ER
          </li>
        </ul>
        <p>
          Medicare Advantage plans in this area often include dental, vision, and
          prescription drug coverage bundled in. The trade-off is network
          restrictions. I walk you through both paths so you pick what actually
          fits your life.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why Mount Laurel residents overpay without a rate comparison
        </h2>
        <p className="mb-2">
          Medigap premiums for the exact same Plan G can vary by $80 or more per
          month depending on the carrier. Same benefits. Same coverage. Just a
          different logo on the card.
        </p>
        <p>
          If you enrolled without comparing rates, you may be overpaying right
          now. I run a side-by-side comparison at no charge so you can see what
          every carrier charges for your age and zip code.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Lock in your Medigap rate before your enrollment window closes
        </h2>
        <p className="mb-2">
          Your Medigap Open Enrollment Period starts the month you turn 65 and
          are enrolled in Part B. It lasts six months. During this window,
          carriers cannot deny you or charge higher premiums based on health
          conditions.
        </p>
        <p>
          My practice is to have clients apply up to 6 months before their Part
          B start date. This locks in the rate early and protects you from
          premium increases before coverage begins. The sooner you apply, the
          better your rate.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          No cost to you, ever
        </h2>
        <p className="mb-2">
          I get paid by the insurance carrier you choose. You pay the same
          monthly premium whether you call the carrier directly or go through me.
          The difference? You get someone who answers the phone when you have a
          billing issue or need to switch plans during Annual Enrollment (October
          15 through December 7).
        </p>
        <p>Free help now. Free help later. That's how independent brokers work.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Schedule a free consultation with Anthony Orner
        </h2>
        <p className="mb-2">
          Whether you're turning 65, retiring from a Burlington County employer,
          or just want to see if your current plan is still the best deal, I'm
          happy to run the numbers. Consultations are free and there's zero
          obligation.
        </p>
        <p>
          Call <strong>855-559-1700</strong> or book online. Most consultations
          take about 15 minutes.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center my-10">
        <p className="text-xl font-semibold mb-2">
          Ready to compare Medicare plans in Mount Laurel?
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
              href="/medicare-guides/medicare-supplement-plans-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-plan-g-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Plan G in NJ - Benefits and Costs
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-plans-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/when-to-enroll-in-medicare"
              className="text-blue-600 hover:underline"
            >
              When to Enroll in Medicare - Enrollment Periods Explained
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}