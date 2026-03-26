import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "hillsborough nj medicare insurance agents | Free Broker Consultation | MedicareYourself",
  description:
    "Hillsborough NJ Medicare insurance agents — Anthony Orner is a licensed independent broker comparing Supplement and Advantage plans. Free Somerset County quote.",
  alternates: { canonical: "https://medicareyourself.com/services/hillsborough-nj-medicare-insurance-agents" },
  openGraph: {
    title:
      "hillsborough nj medicare insurance agents | Free Broker Consultation | MedicareYourself",
    description:
      "Hillsborough NJ Medicare insurance agents — Anthony Orner is a licensed independent broker comparing Supplement and Advantage plans. Free Somerset County quote.",
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
      item: "https://medicareyourself.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Hillsborough NJ Medicare Insurance Agents",
      item: "https://medicareyourself.com/services/hillsborough-nj-medicare-insurance-agents",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Hillsborough NJ Medicare Insurance Agents — Licensed Independent Broker Serving Somerset County",
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
  datePublished: "2026-03-18",
  dateModified: "2026-03-22",
};

const faqs = [
  {
    question: "Should I use an insurance agent for Medicare?",
    answer:
      "Yes. A licensed independent broker compares plans from multiple carriers at no cost to you. Carriers pay broker commissions directly, so you get unbiased guidance without paying a fee. An independent broker in Hillsborough can match you with the best rates across Supplement and Advantage plans available in Somerset County.",
  },
  {
    question: "Do Medicare insurance agents charge?",
    answer:
      "No. Licensed Medicare brokers are paid by the insurance carriers, not by you. There's no consultation fee, no enrollment fee, and no hidden cost. The plan premiums are the same whether you enroll directly with a carrier or through an independent broker.",
  },
  {
    question: "How can I get help with Medicare premiums in New Jersey?",
    answer:
      "New Jersey offers several programs. The Medicare Savings Program (MSP) can pay your Part B premium of $202.90/month if you qualify by income. NJ PAAD and Senior Gold help with prescription costs. An independent broker can check your eligibility and point you to the right program.",
  },
  {
    question: "What is the highest reviewed Medicare insurance in NJ?",
    answer:
      "Plan ratings change yearly through CMS Star Ratings. In New Jersey, several carriers consistently score 4+ stars for Advantage plans, and Medigap plans are standardized by letter (Plan G, Plan N, etc.) so coverage is identical across carriers. The real difference is premium cost and customer service. A broker compares current ratings and prices side by side for your zip code.",
  },
];

export default function HillsboroughNJMedicareInsuranceAgents() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Hillsborough NJ Medicare Insurance Agents
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Hillsborough NJ Medicare Insurance Agents — Licensed Independent Broker
        Serving Somerset County
      </h1>

      <Image
        src="/images/hillsborough-nj-medicare-insurance-agents.webp"
        alt="Hillsborough NJ Medicare insurance agents"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        Hillsborough NJ Medicare insurance agents aren't all the same. Some work
        for one carrier and can only sell that carrier's plans. I'm Anthony
        Orner, an independent broker who compares plans from multiple companies
        so you see real options, not a sales pitch.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        Every consultation is free. I'll show you exactly what each plan costs in
        the 08844 zip code and which local doctors accept it.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How an independent broker differs from a carrier-employed agent
        </h2>
        <p className="text-gray-700 mb-2">
          A captive agent represents one insurance company. They'll recommend
          what they have, even if a competitor's plan fits you better.
        </p>
        <p className="text-gray-700">
          An independent broker like me is licensed with multiple carriers. I
          pull quotes from all of them, lay the numbers side by side, and let you
          choose. Same premiums either way because carriers set the price
          regardless of enrollment channel.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Medicare Supplement and Advantage plans in Hillsborough 08844
        </h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>
            <strong>Medigap (Supplement):</strong> Standardized plans like Plan G
            and Plan N cover gaps Original Medicare leaves behind. Plan G pays
            everything except the $283/year Part B deductible. Premiums vary by
            carrier but coverage is identical letter-to-letter.
          </li>
          <li>
            <strong>Medicare Advantage:</strong> Private plans that bundle Part A,
            Part B, and usually Part D. Many include dental, vision, and hearing.
            Network restrictions apply, so confirming your Somerset County
            doctors are in-network matters.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Somerset County rate factors that affect your premium
        </h2>
        <p className="text-gray-700 mb-2">
          Your zip code, age, tobacco use, and enrollment timing all affect what
          you pay. In New Jersey, Medigap carriers use attained-age rating, so
          premiums increase as you get older.
        </p>
        <p className="text-gray-700">
          Enrolling during your 6-month Medigap Open Enrollment Period (starting
          when you're 65+ and enrolled in Part B) locks in guaranteed-issue
          rights. Miss that window and carriers can charge more or decline you
          based on health history.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why local doctor access matters more than plan ratings
        </h2>
        <p className="text-gray-700 mb-2">
          Wait times for specialists in northern New Jersey are stretching longer
          each year. If your plan's network is too narrow, you could face months
          of delay getting an appointment or need to drive well outside Somerset
          County.
        </p>
        <p className="text-gray-700">
          I verify provider directories before recommending any Advantage plan.
          For Medigap, any doctor who accepts Medicare accepts your plan. That
          distinction alone drives many Hillsborough residents toward Supplement
          coverage.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          When to start your Medicare plan search
        </h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>
            <strong>Turning 65:</strong> Apply for Medigap up to 6 months before
            your Part B start date to lock in the best rate and guaranteed
            acceptance.
          </li>
          <li>
            <strong>Leaving employer coverage:</strong> You get a Special
            Enrollment Period and federal guaranteed-issue rights for Medigap.
          </li>
          <li>
            <strong>Annual Enrollment:</strong> Medicare Advantage and Part D
            changes happen October 15 through December 7 each year.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Get a free Medicare plan comparison for Hillsborough
        </h2>
        <p className="text-gray-700 mb-2">
          One call. I'll pull every plan available in 08844, compare costs and
          coverage, and walk you through the differences in plain English. No
          pressure, no fee, no obligation.
        </p>
        <p className="text-gray-700">
          If you qualify for New Jersey's Medicare Savings Program or PAAD
          prescription assistance, I'll flag that too. Most people don't know
          these programs exist.
        </p>
      </section>

      <div className="mt-12 bg-blue-600 text-white rounded-lg p-8 text-center">
        <p className="text-2xl font-bold mb-2">
          Talk to a licensed Hillsborough Medicare broker today
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-semibold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/contact" className="underline font-semibold">
            get a free quote online
          </Link>
        </p>
      </div>

      <section className="mt-12">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Related resources
        </h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-supplement/new-jersey"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-advantage/new-jersey"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/turning-65"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment Period Explained
            </Link>
          </li>
          <li>
            <Link
              href="/services/hillsborough-nj-medicare-insurance-agents"
              className="text-blue-600 hover:underline"
            >
              Somerset County Medicare Broker Services
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}