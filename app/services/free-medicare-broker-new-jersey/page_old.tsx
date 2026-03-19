import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "free medicare broker new jersey | No Fees, No Obligation | MedicareYourself",
  description:
    "Free Medicare broker in New Jersey — Anthony Orner is licensed, independent, and paid by carriers so you pay nothing. Compare plans with zero obligation.",
  openGraph: {
    title:
      "free medicare broker new jersey | No Fees, No Obligation | MedicareYourself",
    description:
      "Free Medicare broker in New Jersey — Anthony Orner is licensed, independent, and paid by carriers so you pay nothing. Compare plans with zero obligation.",
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
      name: "Free Medicare Broker New Jersey",
      item: "https://medicareyourself.com/services/free-medicare-broker-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Free Medicare Broker in New Jersey: Licensed Help That Never Costs You a Dime",
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
    question: "Are Medicare brokers free?",
    answer:
      "Yes. Licensed Medicare brokers are paid commissions directly by the insurance carriers. You never pay a fee, a retainer, or any hidden cost for broker services. The plan you choose costs the same whether you use a broker or enroll on your own.",
  },
  {
    question:
      "What's the difference between a Medicare agent and a Medicare broker?",
    answer:
      "A Medicare agent typically represents one carrier (a 'captive' agent). A Medicare broker is independent and licensed to sell plans from multiple carriers. This means a broker can compare options side by side and recommend whichever plan fits your situation best, not just the one their employer sells.",
  },
  {
    question: "Do I have to buy a plan if I talk to a broker?",
    answer:
      "No. There is zero obligation. You can call, ask questions, get a plan comparison, and take as much time as you need. A good broker gives you the information and lets you decide.",
  },
  {
    question: "Can a Medicare broker help me in any county in New Jersey?",
    answer:
      "Yes. Anthony Orner is licensed statewide in New Jersey and can quote plans in all 21 counties. Carrier availability and pricing vary by ZIP code, so it helps to compare plans specific to your area.",
  },
];

export default function FreeMedicareBrokerNewJersey() {
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
        <span className="text-gray-700">Free Medicare Broker New Jersey</span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Free Medicare Broker in New Jersey: Licensed Help That Never Costs You a
        Dime
      </h1>

      <Image
        src="/images/free-medicare-broker-new-jersey.webp"
        alt="free Medicare broker in New Jersey"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        A free Medicare broker in New Jersey saves you time, frustration, and
        potentially hundreds of dollars a year on coverage you did not know
        existed. I'm Anthony Orner, an independent licensed broker who works with
        multiple carriers across all 21 NJ counties.
      </p>
      <p className="mb-6">
        You pay nothing for my help. Not a dollar. Let me explain why.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How brokers get paid by carriers instead of by you
        </h2>
        <p className="mb-2">
          Insurance carriers build broker commissions into every plan's premium.
          That premium is the same whether you enroll through a broker, call the
          carrier directly, or sign up on medicare.gov.
        </p>
        <p>
          Using a broker does not add a single cent to your cost. The carrier
          pays me after you enroll. If you never enroll, I never get paid. That
          is the model.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What an independent broker does that a captive agent cannot
        </h2>
        <p className="mb-2">
          A captive agent works for one company. They can only show you plans
          from that company. An independent broker like me holds contracts with
          many carriers, so I can line up plans side by side and show you which
          one actually fits.
        </p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Compare Medicare Advantage plans from multiple carriers</li>
          <li>Quote Medigap Plan G, Plan N, and other supplements across carriers</li>
          <li>Review Part D drug plans to check your specific medications</li>
          <li>Give you honest advice when one plan clearly beats another</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Carriers I quote across NJ
        </h2>
        <p className="mb-2">
          I work with major carriers available in New Jersey, including those
          offering Medicare Advantage, Medigap, and Part D prescription drug
          plans. Carrier availability varies by county and ZIP code, which is
          exactly why a side-by-side comparison matters.
        </p>
        <p>
          Whether you live in Bergen County, Ocean County, or anywhere in
          between, I can pull rates specific to your location and health
          situation.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          When to call a broker (timing matters)
        </h2>
        <p className="mb-2">
          Turning 65? Your Medigap Open Enrollment Period lasts 6 months starting
          the month you turn 65 and are enrolled in Part B. During that window,
          carriers cannot charge you more or deny you coverage based on health
          history.
        </p>
        <p className="mb-2">
          Already on Medicare? The Medicare Advantage and Part D Open Enrollment
          runs October 15 through December 7 each year. That is the window to
          switch plans or drop one for another.
        </p>
        <p>Miss these windows and your options shrink. Call early.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What a free consultation looks like
        </h2>
        <p className="mb-2">
          The call takes about 5 minutes to start. I ask a few questions: your
          ZIP code, the medications you take, your doctors, and what matters most
          to you (low premiums, low copays, specific hospital access).
        </p>
        <p>
          Then I build a comparison. You review it, ask questions, and decide on
          your timeline. No pressure, no obligation, no games.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Schedule a no-cost plan comparison in under 5 minutes
        </h2>
        <p className="mb-2">
          You have nothing to lose by calling. The 2026 Part B premium is
          $185/month and the Part B deductible is $257/year. Those costs are
          fixed by Medicare. What is not fixed is how much you pay on top of
          that, and that is where the right plan saves you real money.
        </p>
        <p>Pick up the phone and let's find your best option.</p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center mb-10">
        <p className="text-xl font-bold mb-2">
          Talk to Anthony Orner - Free, No Obligation
        </p>
        <p className="text-2xl font-bold mb-3">
          <a href="tel:8555591700" className="underline">
            855-559-1700
          </a>
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100"
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
              href="/medicare-guides/medicare-supplement-plans-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plans in New Jersey
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
              href="/medicare-guides/medigap-plan-g-nj"
              className="text-blue-600 hover:underline"
            >
              Medigap Plan G in NJ: Benefits and Costs
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/turning-65-medicare-nj"
              className="text-blue-600 hover:underline"
            >
              Turning 65 in New Jersey: Your Medicare Checklist
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}