import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare insurance agents in bridgeton new jersey | Free Local Broker | MedicareYourself",
  description:
    "Medicare insurance agents in Bridgeton, New Jersey — Anthony Orner compares Supplement and Advantage plans across carriers in Cumberland County. Free quote.",
  openGraph: {
    title:
      "medicare insurance agents in bridgeton new jersey | Free Local Broker | MedicareYourself",
    description:
      "Medicare insurance agents in Bridgeton, New Jersey — Anthony Orner compares Supplement and Advantage plans across carriers in Cumberland County. Free quote.",
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
      item: "https://www.medicareyourself.com/medicare",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Medicare Insurance Agents in Bridgeton, New Jersey",
      item: "https://www.medicareyourself.com/services/medicare-insurance-agents-in-bridgeton-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Insurance Agents in Bridgeton, New Jersey — Independent Broker for Cumberland County",
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
  datePublished: "2025-01-01",
  dateModified: "2025-07-01",
};

const faqs = [
  {
    question: "What is the best Medicare plan in New Jersey?",
    answer:
      "There is no single best plan for everyone. The right choice depends on your doctors, prescriptions, budget, and how often you travel. An independent broker can compare Supplement and Advantage options side-by-side so you pick the plan that actually fits your situation.",
  },
  {
    question: "Should I use an insurance agent for Medicare?",
    answer:
      "Yes. A licensed Medicare agent costs you nothing out of pocket - carriers pay the agent directly. You get professional guidance on plan differences, enrollment timing, and rate comparisons without paying extra for the help.",
  },
  {
    question: "How to pick a Medicare agent?",
    answer:
      "Look for an independent broker who is not tied to a single insurance company. Ask whether they compare multiple carriers and both Supplement and Advantage plans. A good agent should also be licensed in your state and willing to review your coverage annually.",
  },
  {
    question: "How do I speak to a live person at Medicare?",
    answer:
      "You can call 1-800-MEDICARE (1-800-633-4227) 24 hours a day, 7 days a week. TTY users can dial 1-877-486-2048. For local plan comparisons and enrollment help, you can also call an independent broker like Anthony Orner at 855-559-1700.",
  },
];

export default function MedicareInsuranceAgentsBridgetonNJ() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/medicare" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Medicare Insurance Agents in Bridgeton, New Jersey
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Medicare Insurance Agents in Bridgeton, New Jersey — Independent Broker
        for Cumberland County
      </h1>

      <Image
        src="/images/medicare-insurance-agents-in-bridgeton-new-jersey.webp"
        alt="Medicare insurance agents in Bridgeton New Jersey"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Medicare insurance agents in Bridgeton, New Jersey are not all the same.
        Some work for a single carrier, which means you only see that company's
        plans. As an independent broker licensed in New Jersey, I compare
        Supplement and Advantage options from multiple carriers so Cumberland
        County residents get a real choice - not a sales pitch.
      </p>
      <p className="mb-6">
        My name is Anthony Orner, and I help people in the 08302 zip code and
        surrounding areas find coverage that matches their doctors, medications,
        and budget. There is no fee for my help.
      </p>

      <PhoneCTA />

      <h2 className="text-2xl font-semibold mt-10 mb-3">
        Why an independent broker matters in a rural county like Cumberland
      </h2>
      <p className="mb-2">
        Cumberland County has fewer provider networks than Bergen or Middlesex.
        That limits which Medicare Advantage plans actually work here. A captive
        agent locked into one carrier may not tell you that.
      </p>
      <p className="mb-6">
        An independent broker checks which networks include your local doctors
        and which plans cover prescriptions you actually take. The difference can
        be hundreds of dollars a year.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">
        Supplement and Advantage plans available in Bridgeton 08302
      </h2>
      <p className="mb-2">
        Bridgeton residents generally have two paths:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          <strong>Medicare Supplement (Medigap):</strong> Plans like G and N pair
          with Original Medicare. You keep any doctor who accepts Medicare. Plan
          G covers everything except the $257 annual Part B deductible in 2026.
        </li>
        <li>
          <strong>Medicare Advantage (Part C):</strong> Managed-care plans that
          often include prescription drug coverage, dental, and vision. Network
          restrictions apply, so check provider directories carefully.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-3">
        Carrier options and rate differences in South Jersey
      </h2>
      <p className="mb-2">
        Multiple carriers offer Medigap plans in Cumberland County, and their
        rates are not identical. Two Plan G policies provide the exact same
        benefits by law, but one carrier might charge $40 less per month than
        another.
      </p>
      <p className="mb-6">
        I pull current rates from every carrier I represent so you can see the
        price spread in one sitting. Rates vary by age, gender, tobacco use, and
        the carrier's pricing method, so a personalized comparison is the only
        way to know your real cost.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">
        Enrollment timing you should not ignore
      </h2>
      <p className="mb-2">
        Your Medigap Open Enrollment Period lasts 6 months. It starts the month
        you turn 65 and are enrolled in Part B. During this window, no carrier
        can deny you or charge more based on health history.
      </p>
      <p className="mb-6">
        Miss that window and you could face medical underwriting, higher
        premiums, or outright denial. If you are approaching 65, call now - not
        after your birthday.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">
        What a free plan review looks like
      </h2>
      <p className="mb-2">
        I ask about your doctors, medications, and how you use healthcare. Then I
        run the numbers across carriers. The whole call usually takes 15-20
        minutes.
      </p>
      <p className="mb-6">
        You walk away with a clear side-by-side comparison. No obligation, no
        pressure. If you already have a plan, I can check whether a better rate
        exists for the same coverage.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">
        Request a free Bridgeton Medicare plan review
      </h2>
      <p className="mb-6">
        Whether you are new to Medicare or reviewing a plan you have held for
        years, a quick call can save you real money. I work with Bridgeton
        residents year-round and know which carriers are competitive in the 08302
        area right now.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-10 text-center">
        <p className="text-xl font-semibold mb-2">
          Call Anthony Orner: 855-559-1700
        </p>
        <p className="mb-4">
          Free Medicare plan comparison for Bridgeton and Cumberland County
          residents.
        </p>
        <Link
          href="tel:8555591700"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
        >
          Get a Free Quote
        </Link>
      </div>

      <FAQSection faqs={faqs} />

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare/supplement/plan-g-new-jersey"
              className="text-blue-600 hover:underline"
            >
              Medicare Plan G in New Jersey - Benefits and Costs
            </Link>
          </li>
          <li>
            <Link
              href="/medicare/advantage/new-jersey"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare/enrollment/when-to-enroll"
              className="text-blue-600 hover:underline"
            >
              When to Enroll in Medicare - Key Dates and Deadlines
            </Link>
          </li>
          <li>
            <Link
              href="/medicare/supplement/plan-g-vs-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medicare Plan G vs Plan N - Which Saves You More?
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}