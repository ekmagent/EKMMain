import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare Advantage Agents Near Me | Free NJ Help | MedicareYourself",
  description:
    "Find a local Medicare Advantage agent in NJ. Anthony Orner compares $0-premium MA plans by county and helps you enroll free. Call 855-559-1700 today.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-advantage-agents-near-me" },
  openGraph: {
    title:
      "Medicare Advantage Agents Near Me | Free NJ Help | MedicareYourself",
    description:
      "Medicare Advantage agents near you in NJ. Anthony Orner compares $0-premium MA plans by county and helps you enroll free. Call 855-559-1700.",
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
      name: "Medicare Advantage Agents Near Me",
      item: "https://medicareyourself.com/services/medicare-advantage-agents-near-me",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Medicare Advantage Agents Near You in New Jersey",
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
  datePublished: "2026-03-17",
  dateModified: "2026-03-22",
};

const faqs = [
  {
    question: "Do Medicare Advantage agents charge a fee?",
    answer:
      "No. Licensed Medicare Advantage agents are paid by insurance carriers, not by you. There is no fee, no markup, and no cost difference between enrolling through an agent or enrolling directly with the carrier.",
  },
  {
    question: "How do I know which Medicare Advantage plan covers my doctors in NJ?",
    answer:
      "Each MA plan has a provider network specific to your county. A local agent can check whether your doctors and hospitals are in-network before you enroll, saving you from surprise out-of-network costs.",
  },
  {
    question: "Can I switch from Medicare Advantage back to Original Medicare?",
    answer:
      "Yes. During the Medicare Advantage Open Enrollment Period (January 1 through March 31), you can drop your MA plan and return to Original Medicare. However, in most states including NJ, you may not have guaranteed issue rights for a Medigap plan at that point, which could mean medical underwriting.",
  },
  {
    question: "When is the best time to enroll in a Medicare Advantage plan?",
    answer:
      "The Annual Enrollment Period runs October 15 through December 7 for coverage starting January 1. If you're turning 65, your Initial Enrollment Period starts three months before your birthday month. A local agent can confirm your exact window.",
  },

  {
    question: "What does a Medicare Advantage plan typically include that Original Medicare does not?",
    answer:
      "Most Medicare Advantage plans bundle Part A, Part B, and Part D prescription drug coverage into a single plan. Many also include extras like dental, vision, hearing, and fitness benefits that Original Medicare does not cover. Benefits vary by plan and county, so a local agent can confirm what is available where you live.",
  }
];

export default function MedicareAdvantageAgentsNearMe() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">Medicare Advantage Agents Near Me</span>
      </nav>

      <article className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Medicare Advantage Agents Near You in New Jersey
        </h1>

        <Image
          src="/images/medicare-advantage-agents-near-me_vector.webp"
          alt="Medicare Advantage agents near me"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Medicare Advantage agents near you don't cost a dime, and they can save you hours of confusing plan comparisons. I'm Anthony Orner, a licensed broker based in New Jersey, and I help people across the state find MA plans that actually match their doctors, prescriptions, and budget.
        </p>
        <p className="text-lg mb-6">
          No sales pitch. Just a straight conversation about what's available in your county.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What a Medicare Advantage agent does during enrollment
          </h2>
          <p className="mb-2">
            Most people turning 65 don't realize Medicare has dozens of moving parts. Part A, Part B, Part C, Part D, enrollment windows, penalties. It feels like learning a new language.
          </p>
          <p>
            A local agent cuts through that. I review your current medications, check which plans include your preferred doctors, compare copays and out-of-pocket maximums, and handle the enrollment paperwork. You get a plan that fits. I get paid by the carrier, not you.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How NJ Medicare Advantage plans differ by county
          </h2>
          <p className="mb-2">
            MA plans are tied to your zip code. A $0-premium HMO available in Bergen County might not exist in Ocean County. Networks change too. A plan that includes Hackensack Meridian facilities in one county may not in another.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Urban counties (Essex, Hudson, Bergen) typically have 30+ MA options</li>
            <li>Southern and rural counties may have fewer plans with narrower networks</li>
            <li>Some plans include dental, vision, hearing, and gym memberships at no extra premium</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Advantage vs. Medigap: which path a good agent helps you evaluate
          </h2>
          <p className="mb-2">
            Many people assume Medicare Advantage works like employer coverage. It's similar in some ways: you pick a network, pay copays, and have an out-of-pocket max. But MA plans can restrict which hospitals you use, especially for non-emergency care.
          </p>
          <p className="mb-2">
            Medigap (Medicare Supplement) works differently. You keep Original Medicare, add a supplement that covers cost-sharing, and see any Medicare-accepting provider nationwide. The tradeoff? Higher monthly premiums.
          </p>
          <p>
            A good agent lays out both paths honestly. I'll show you what each costs in your specific situation so you can decide with real numbers, not guesses.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why "free" really means free
          </h2>
          <p className="mb-2">
            People are skeptical, and I don't blame them. Here's how it works: Medicare carriers pay agents a commission set by CMS. Your premium stays the same whether you enroll through an agent, a carrier website, or Medicare.gov.
          </p>
          <p>
            You're not paying more for help. You're just getting someone who knows the local plan landscape on your side.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What happens if your MA plan drops your area
          </h2>
          <p className="mb-2">
            Carriers exit service areas every year. If your plan sends a non-renewal letter, you'll get a Special Enrollment Period and guaranteed issue rights to buy a Medigap policy within 63 days. That's a rare and valuable window.
          </p>
          <p>
            Don't let it pass without talking to someone who can walk you through your options.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Get free Medicare Advantage help from Anthony Orner
          </h2>
          <p className="mb-2">
            I work with people across New Jersey, from Cape May to Sussex County. Whether you're turning 65, losing employer coverage, or rethinking a plan that isn't working anymore, I'll compare what's available in your county and explain the tradeoffs in plain English.
          </p>
          <p>
            Call <strong>855-559-1700</strong> or schedule a consultation below. No obligation, no pressure.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-6 text-center my-10">
          <p className="text-xl font-semibold mb-2">
            Ready to compare Medicare Advantage plans in your area?
          </p>
          <p className="mb-4">
            Call{" "}
            <a
              href="tel:8555591700"
              className="underline font-bold text-white"
            >
              855-559-1700
            </a>{" "}
            or{" "}
            <Link
              href="/contact"
              className="underline font-bold text-white"
            >
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
                href="/medicare-advantage/new-jersey"
                className="text-blue-600 hover:underline"
              >
                How Medicare Advantage Works in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/learn/what-is-medigap"
                className="text-blue-600 hover:underline"
              >
                Medigap Plans in NJ: What They Cover and Cost
              </Link>
            </li>
            <li>
              <Link
                href="/learn/medicare-enrollment-periods"
                className="text-blue-600 hover:underline"
              >
                Medicare Enrollment Periods Explained
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-agents-near-me"
                className="text-blue-600 hover:underline"
              >
                Find a Medicare Broker Near You in NJ
              </Link>
            </li>
                      <li>
              <Link
                href="/services/help-with-your-medicare-decision"
                className="text-blue-600 hover:underline"
              >
                Help With Your Medicare Decision
              </Link>
            </li>
            <li>
              <Link
                href="/services/best-and-cheapest-medicare-supplement"
                className="text-blue-600 hover:underline"
              >
                Best And Cheapest Medicare Supplement
              </Link>
            </li>
            <li>
              <Link
                href="/services/independent-medicare-agents-near-me"
                className="text-blue-600 hover:underline"
              >
                Independent Medicare Agents Near Me
              </Link>
            </li>
            <li>
              <Link
                href="/services/compare-and-enroll-in-plan-g-online"
                className="text-blue-600 hover:underline"
              >
                Compare And Enroll In Plan G Online
              </Link>
            </li>
            <li>
              <Link
                href="/services/independent-medicare-advantage-agents-near-me"
                className="text-blue-600 hover:underline"
              >
                Independent Medicare Advantage Agents Near Me
              </Link>
            </li>
</ul>
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/plan-compare" target="_blank" rel="noopener noreferrer" className="underline">Compare Medicare Advantage plans on Medicare.gov</a> and learn <a href="https://www.medicare.gov/basics/get-started-with-medicare/get-more-coverage/joining-a-plan" target="_blank" rel="noopener noreferrer" className="underline">how to join a Medicare Advantage plan</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Free NJ counseling: <a href="https://www.state.nj.us/humanservices/doas/services/ship/" target="_blank" rel="noopener noreferrer" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased Medicare counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Free unbiased counseling: <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
      </section>
      </article>
    </>
  );
}