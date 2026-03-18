import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare insurance agents in bridgewater new jersey | Free Rate Comparison | MedicareYourself",
  description:
    "Medicare insurance agents in Bridgewater, New Jersey who compare Supplement and Advantage plans. Anthony Orner shops top carriers free. Request a quote today.",
  openGraph: {
    title:
      "medicare insurance agents in bridgewater new jersey | Free Rate Comparison | MedicareYourself",
    description:
      "Medicare insurance agents in Bridgewater, New Jersey who compare Supplement and Advantage plans. Anthony Orner shops top carriers free. Request a quote today.",
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
      name: "Medicare Insurance Agents in Bridgewater, New Jersey",
      item: "https://www.medicareyourself.com/services/medicare-insurance-agents-in-bridgewater-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Insurance Agents in Bridgewater, New Jersey: Independent Broker Help at No Cost",
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
    question: "What is the highest reviewed Medicare insurance in NJ?",
    answer:
      "There is no single 'best' plan for everyone. The highest-rated options depend on whether you need a Medicare Supplement (Medigap) or Medicare Advantage plan, your doctors, your prescriptions, and your budget. An independent broker can compare carriers side by side so you see which plan actually scores highest for your situation.",
  },
  {
    question: "Should I use an insurance agent for Medicare?",
    answer:
      "Yes. An independent Medicare agent shops multiple carriers at once instead of pushing one company's products. You get unbiased comparisons of premiums, networks, and benefits. The agent handles the paperwork, and you pay nothing extra for the help - carriers pay the broker directly.",
  },
  {
    question: "Do Medicare insurance agents charge a fee?",
    answer:
      "No. Licensed Medicare agents are compensated by the insurance carriers, not by you. The premium you pay is the same whether you enroll directly or go through a broker. There is zero cost for the advice, the rate comparison, or the enrollment assistance.",
  },
  {
    question: "When should I contact a Medicare agent in Bridgewater?",
    answer:
      "Reach out at least six months before your Part B start date if you want a Medigap plan. For Medicare Advantage, the Annual Enrollment Period runs October 15 through December 7. The earlier you call, the more time you have to compare options without feeling rushed.",
  },
];

export default function MedicareInsuranceAgentsBridgewaterNJ() {
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
          Medicare Insurance Agents in Bridgewater, New Jersey
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Medicare Insurance Agents in Bridgewater, New Jersey: Independent Broker Help at No Cost
      </h1>

      <Image
        src="/images/medicare-insurance-agents-in-bridgewater-new-jersey.webp"
        alt="Medicare insurance agents in Bridgewater New Jersey"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Medicare insurance agents in Bridgewater, New Jersey give you access to every major carrier without the legwork of calling each one yourself. As an independent broker licensed in New Jersey, I compare Supplement and Advantage plans from multiple companies so you see real numbers side by side.
      </p>
      <p className="mb-6">
        You never pay a fee for my help. The carriers compensate me directly, so your premium stays the same whether you enroll through a broker or on your own.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How a Bridgewater broker compares every major carrier
        </h2>
        <p className="mb-2">
          A captive agent sells one company's products. I work independently. That means I pull quotes from carriers like Aetna, Cigna, Mutual of Omaha, United American, and others active in Somerset County.
        </p>
        <p>
          I line up premiums, rate increase histories, and household discounts in a single spreadsheet. You pick the plan that fits your budget. No pressure, no hidden agenda.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Popular Medicare Supplement plans in Somerset County
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Plan G</strong> - Covers everything Original Medicare does not, except the annual Part B deductible ($257 in 2026). Most popular choice for new enrollees.
          </li>
          <li>
            <strong>Plan N</strong> - Lower monthly premium than Plan G. You pay up to a $20 copay for some office visits and the Part B deductible.
          </li>
          <li>
            <strong>High-Deductible Plan G</strong> - Lowest premium of all. You cover out-of-pocket costs until you hit the plan deductible, then the plan pays like standard Plan G.
          </li>
        </ul>
        <p className="mt-2">
          Rates vary by carrier, age, and zip code. I can pull your specific numbers in minutes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Turning 65 in Bridgewater? Timeline and enrollment steps
        </h2>
        <p className="mb-2">
          Your Medigap Open Enrollment Period lasts six months, starting the month you turn 65 and are enrolled in Part B. During this window, no carrier can deny you or charge more based on health history. Miss it, and you may face medical underwriting.
        </p>
        <p>
          My practice is to have clients apply up to six months before their Part B start date. Locking in early protects you from premium increases that can happen between now and your coverage start. The sooner you lock in, the better your rate.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare Advantage options in the 08807 area
        </h2>
        <p className="mb-2">
          Bridgewater residents have access to several Medicare Advantage plans with $0 premiums, dental and vision benefits, and prescription drug coverage built in. These are HMO or PPO networks, so doctor access matters.
        </p>
        <p>
          Annual Enrollment runs October 15 through December 7. I can check whether your current doctors are in-network before you commit.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What to bring to your Medicare consultation
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Your red, white, and blue Medicare card (or your Part B start date)</li>
          <li>A list of current prescriptions with dosages</li>
          <li>Names of your preferred doctors and specialists</li>
          <li>Any current insurance information (employer plan, retiree benefits, VA)</li>
        </ul>
        <p className="mt-2">
          Having this ready saves time and lets me give you accurate quotes on the first call.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Get a free quote from Anthony Orner today
        </h2>
        <p className="mb-2">
          I live and work in New Jersey. I know the carriers active in Somerset County and which ones have the most competitive rates right now. Whether you are turning 65, retiring, or reviewing your current plan during open enrollment, I am here to help.
        </p>
        <p>
          Call me or request a quote online. There is never a charge, and there is never an obligation.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center mb-10">
        <p className="text-xl font-bold mb-2">
          Ready to compare Medicare plans in Bridgewater?
        </p>
        <p className="mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-semibold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/contact" className="underline font-semibold">
            Get a Free Quote
          </Link>
        </p>
        <p className="text-sm">
          Anthony Orner, Licensed Medicare Broker - No cost, no obligation.
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
              Medicare Plan G in NJ: Benefits and Costs
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
              href="/medicare-guides/turning-65-medicare-checklist"
              className="text-blue-600 hover:underline"
            >
              Turning 65? Your Medicare Enrollment Checklist
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}