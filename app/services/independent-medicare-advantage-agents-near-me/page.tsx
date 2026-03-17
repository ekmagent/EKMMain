import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Independent Medicare Advantage Agents Near Me | Compare Every MA Plan in NJ | MedicareYourself",
  description:
    "Independent Medicare Advantage agents near you in New Jersey. Anthony Orner compares every major MA plan in your county at no cost. Book a free consultation.",
  openGraph: {
    title:
      "Independent Medicare Advantage Agents Near Me | Compare Every MA Plan in NJ | MedicareYourself",
    description:
      "Independent Medicare Advantage agents near you in New Jersey. Anthony Orner compares every major MA plan in your county at no cost. Book a free consultation.",
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
      name: "Independent Medicare Advantage Agents Near Me",
      item: "https://www.medicareyourself.com/services/independent-medicare-advantage-agents-near-me",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Find an Independent Medicare Advantage Agent Near You in NJ",
  description:
    "Independent Medicare Advantage agents near you in New Jersey. Anthony Orner compares every major MA plan in your county at no cost. Book a free consultation.",
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
  mainEntityOfPage:
    "https://www.medicareyourself.com/services/independent-medicare-advantage-agents-near-me",
};

const faqs = [
  {
    question: "What is an independent Medicare agent?",
    answer:
      "An independent Medicare agent is a licensed broker who is not employed by any single insurance carrier. They hold contracts with multiple companies so they can compare plans from different carriers side by side. Their commissions are paid by the insurance companies, not by you, so there is no cost for their help.",
  },
  {
    question:
      "How many Medicare Advantage carriers are available in New Jersey?",
    answer:
      "The number of Medicare Advantage carriers varies by county, but most NJ counties have between 5 and 10 or more carriers offering MA plans. An independent agent can show you all the options in your specific zip code so you are not limited to one company's lineup.",
  },
  {
    question: "Do independent agents charge a fee for their services?",
    answer:
      "No. Independent Medicare agents are compensated directly by the insurance carriers when you enroll in a plan. You pay nothing extra for their guidance. The plan premiums and benefits are the same whether you enroll through an agent or on your own.",
  },
  {
    question: "When can I switch my Medicare Advantage plan?",
    answer:
      "The Annual Enrollment Period runs from October 15 through December 7 each year. You can also make one plan switch during the Open Enrollment Period from January 1 through March 31. Special Enrollment Periods may apply if you qualify due to a move, loss of coverage, or other life events.",
  },
];

export default function IndependentMedicareAdvantageAgentsNearMe() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-600">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/hub" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-900">
          Independent Medicare Advantage Agents Near Me
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Find an Independent Medicare Advantage Agent Near You in NJ
      </h1>

      <Image
        src="/images/hub_independent-medicare-advantage-agents-near-me.webp"
        alt="Independent Medicare Advantage agents near me"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Searching for independent Medicare Advantage agents near you? If you live in New Jersey, you have access to dozens of MA plans across multiple carriers, and a local independent broker can lay them all out for you at no cost.
      </p>
      <p className="text-lg mb-6">
        I am Anthony Orner, a licensed Medicare broker based in NJ. I work with every major carrier in the state, which means my recommendations are based on your needs, not a sales quota.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why independence matters when choosing a Medicare Advantage plan
        </h2>
        <p className="mb-2">
          A captive agent works for one insurance company. They can only show you that company's plans, even if a competitor offers better benefits or a larger provider network in your area.
        </p>
        <p>
          An independent agent holds contracts with many carriers. That means I can compare plans from Aetna, Cigna, Humana, UnitedHealthcare, and others, then show you which one actually fits your doctors, prescriptions, and budget. No bias. No pressure.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Which Medicare Advantage carriers are available in your NJ county
        </h2>
        <p className="mb-2">
          Carrier availability changes from county to county. Bergen County might have 40+ MA plan options while a rural county has 15. Plan benefits, provider networks, and drug formularies differ too.
        </p>
        <p>
          When you call me, I run a search specific to your zip code. You see every available plan and exactly what each one covers. No guessing.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How an independent agent compares $0-premium Advantage plans
        </h2>
        <p className="mb-2">
          Many Medicare Advantage plans in NJ carry a $0 monthly premium on top of your Part B premium of $185/month in 2025. But $0-premium does not always mean lowest total cost.
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-2">
          <li>Copays for specialist visits can range from $20 to $50</li>
          <li>Maximum out-of-pocket limits vary from around $3,000 to $8,300</li>
          <li>Drug coverage tiers differ, which could cost you hundreds per year</li>
          <li>Some plans include dental, vision, hearing, and even grocery benefits</li>
        </ul>
        <p>
          I stack these details side by side so you pick the plan with the lowest real-world cost for your situation.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What to bring when meeting with an independent Medicare agent
        </h2>
        <p className="mb-2">
          A productive appointment takes about 30 minutes. Have these ready:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Your red, white, and blue Medicare card</li>
          <li>A list of current prescription medications with dosages</li>
          <li>Names of your doctors and any preferred hospitals</li>
          <li>Your monthly budget for healthcare costs</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          The enrollment periods you should know about
        </h2>
        <p className="mb-2">
          The Annual Enrollment Period (AEP) runs October 15 through December 7. That is the main window to enroll in or switch Medicare Advantage plans for the following year.
        </p>
        <p>
          If you are new to Medicare, your Initial Enrollment Period starts three months before your 65th birthday month and ends three months after. Miss it and you may face coverage gaps.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Get unbiased Medicare Advantage guidance from Anthony Orner
        </h2>
        <p className="mb-2">
          I treat every client like a neighbor, not a number. My service costs you nothing because the insurance carriers pay my commission directly, and your premiums stay exactly the same whether you use an agent or not.
        </p>
        <p>
          Call me to review your current plan or explore your Medicare Advantage options in any NJ county. Real answers, no sales pitch.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-8 text-center mb-10">
        <p className="text-xl font-bold mb-2">
          Ready to compare Medicare Advantage plans in your area?
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          for a free, no-obligation consultation.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
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
              href="/services/medicare-advantage-plans-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage Plans in NJ - Full Guide
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-plan-g-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Plan G in New Jersey - Benefits and Costs
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-enrollment-periods"
              className="text-blue-600 hover:underline"
            >
              Medicare Enrollment Periods Explained
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-supplement-vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medigap vs. Medicare Advantage - Which Is Right for You?
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}