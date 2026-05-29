import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "find a medicare agent in north brunswick nj | Free Local Help | MedicareYourself",
  description:
    "Find a Medicare agent in North Brunswick NJ who compares every major carrier at no cost. Anthony Orner offers free local guidance—call 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/find-a-medicare-agent-in-north-brunswick-nj" },
  openGraph: {
    title:
      "find a medicare agent in north brunswick nj | Free Local Help | MedicareYourself",
    description:
      "Find a Medicare agent in North Brunswick NJ who compares every major carrier. Anthony Orner offers free, local guidance for Middlesex County residents. Call today.",
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
      name: "Find a Medicare Agent in North Brunswick NJ",
      item: "https://medicareyourself.com/services/find-a-medicare-agent-in-north-brunswick-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Find a Medicare Agent in North Brunswick, NJ Who Actually Works for You",
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
    question: "How do I pick a Medicare agent in North Brunswick?",
    answer:
      "Look for a licensed, independent broker who works with multiple carriers, not just one. Ask whether they charge a fee (they shouldn't). A good agent will review your doctors, prescriptions, and budget before recommending anything.",
  },
  {
    question: "How do I speak to a live person about Medicare?",
    answer:
      "You can call 1-800-MEDICARE (1-800-633-4227) for general questions. But if you want someone local who can sit down and compare plans side by side, call a licensed broker like Anthony Orner at 855-559-1700.",
  },
  {
    question: "Does it cost anything to use a Medicare agent?",
    answer:
      "No. Independent Medicare brokers are paid by the insurance carriers, not by you. The plan you choose costs the same whether you enroll through an agent, online, or directly with the carrier.",
  },
  {
    question: "What Medicare plans are available in Middlesex County?",
    answer:
      "Middlesex County residents can choose from Original Medicare with a Medigap supplement, Medicare Advantage (Part C), and standalone Part D prescription drug plans. Multiple carriers serve this area, and plan options change each year.",
  },
];

export default function FindMedicareAgentNorthBrunswickNJ() {
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
        <span className="text-gray-700">
          Find a Medicare Agent in North Brunswick NJ
        </span>
      </nav>

      <article className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Find a Medicare Agent in North Brunswick, NJ Who Actually Works for You
        </h1>

        <Image
          src="/images/find-a-medicare-agent-in-north-brunswick-nj.webp"
          alt="find a medicare agent in north brunswick nj"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Finding a Medicare agent in North Brunswick, NJ shouldn't mean getting bounced between call centers and 1-800 numbers. You deserve someone local who knows the carriers in Middlesex County, the hospitals you actually use, and the plans that fit your prescriptions and your budget.
        </p>
        <p className="text-lg mb-6">
          I'm Anthony Orner, a licensed independent Medicare broker serving North Brunswick and surrounding communities. My help costs you nothing.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why North Brunswick residents deserve a local broker, not a call center
          </h2>
          <p className="mb-2">
            North Brunswick sits in the middle of Middlesex County with access to Robert Wood Johnson University Hospital, Saint Peter's University Hospital, and a wide network of specialists across central New Jersey. A call center agent in another state won't know which plans keep those providers in-network.
          </p>
          <p>
            A local broker checks your specific doctors and pharmacies before recommending a single plan. That matters more than any TV ad.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What a licensed Medicare agent does that Google can't
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Compares plans across every major carrier available in your ZIP code</li>
            <li>Checks that your current doctors and medications are covered before you enroll</li>
            <li>Handles enrollment paperwork and follows up if anything goes wrong</li>
            <li>Helps you switch plans during Open Enrollment (October 15 through December 7) if your needs change</li>
          </ul>
          <p className="mt-3">
            Google gives you a list. I give you an answer.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Plans and carriers available in Middlesex County
          </h2>
          <p className="mb-2">
            Middlesex County has strong competition among carriers, which means more choices for you. I work with multiple insurance companies offering:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Medicare Advantage (Part C) plans, including HMO and PPO options</li>
            <li>Medigap (Medicare Supplement) plans like Plan G and Plan N</li>
            <li>Standalone Part D prescription drug plans</li>
          </ul>
          <p className="mt-3">
            Rates vary by carrier, age, and tobacco status. I'll show you an apples-to-apples comparison so you can pick what actually makes sense.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Real frustrations I hear from people in this area
          </h2>
          <p className="mb-2">
            Folks tell me they've spent hours on hold with Medicare, searched online for doctors who accept their plan, or been blindsided when a local hospital stopped accepting their insurance. That's not a small inconvenience. It's scary.
          </p>
          <p>
            Having a broker means you have one person to call when any of that happens. I pick up the phone.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Key numbers you should know for 2026
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Part B premium: $202.90/month</li>
            <li>Part B deductible: $283/year</li>
            <li>Part A deductible: $1,676 per benefit period</li>
            <li>Medigap Open Enrollment: 6 months starting the month you turn 65 and are enrolled in Part B</li>
            <li>Part B late enrollment penalty: 10% per 12-month period you delayed</li>
          </ul>
          <p className="mt-3">
            These costs add up. The right plan can protect you from thousands in out-of-pocket expenses.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Schedule a no-cost consultation with Anthony Orner
          </h2>
          <p className="mb-2">
            Whether you're turning 65, retiring, or just want to make sure you're not overpaying, I'll walk you through your options. No pressure, no fee, no catch. The carriers pay me, so you get objective advice at zero cost.
          </p>
          <p>
            Call <strong>855-559-1700</strong> or book online. I serve North Brunswick, East Brunswick, South Brunswick, New Brunswick, and all of Middlesex County.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-6 text-center mb-10">
          <p className="text-xl font-semibold mb-2">
            Ready to see your options?
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
              href="/quote"
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
                href="/medicare-supplement/new-jersey/vs-medicare-advantage"
                className="text-blue-600 hover:underline"
              >
                Medicare Advantage vs. Medigap: Which Is Right for You?
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
                className="text-blue-600 hover:underline"
              >
                Medigap Plan G in New Jersey: What It Covers
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
                href="/services/find-a-medicare-agent-in-new-brunswick-nj"
                className="text-blue-600 hover:underline"
              >
                Find a Medicare Agent in New Brunswick, NJ
              </Link>
            </li>
                      <li>
              <Link
                href="/services/find-an-nj-medicare-broker-near-you"
                className="text-blue-600 hover:underline"
              >
                Find An NJ Medicare Broker Near You
              </Link>
            </li>
            <li>
              <Link
                href="/services/free-medicare-broker-new-jersey"
                className="text-blue-600 hover:underline"
              >
                Free Medicare Broker New Jersey
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
                href="/services/how-to-enroll-in-medicare-in-new-jersey"
                className="text-blue-600 hover:underline"
              >
                How To Enroll In Medicare In New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/services/find-a-medicare-agent-in-north-bergen-nj"
                className="text-blue-600 hover:underline"
              >
                Find A Medicare Agent In North Bergen NJ
              </Link>
            </li>
</ul>
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/plan-compare" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov Plan Finder</a> and <a href="https://www.medicare.gov/talk-to-someone" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov Talk to Someone</a>.</div>
            <div className="text-sm text-gray-600 mt-2">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">North Brunswick residents can also get free unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
      </article>
    </>
  );
}