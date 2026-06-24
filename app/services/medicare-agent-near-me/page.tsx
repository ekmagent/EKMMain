import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare agent near me | Free Local Broker Help, No Obligation | MedicareYourself",
  description:
    "Looking for a Medicare agent near you? Independent broker Anthony Orner compares 30+ carriers free by phone, video, or in person. Call 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-agent-near-me" },
  openGraph: {
    title:
      "medicare agent near me | Free Local Broker Help, No Obligation | MedicareYourself",
    description:
      "Medicare agent near me — Anthony Orner is a licensed independent broker in NJ and PA comparing 30+ carriers. Free consultation by phone, video, or in person.",
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
      name: "Medicare Agent Near Me",
      item: "https://medicareyourself.com/services/medicare-agent-near-me",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Agent Near Me: Find a Licensed Independent Broker Who Works for You",
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
    question: "Should I use an agent for Medicare?",
    answer:
      "Yes. A licensed Medicare agent compares plans across multiple carriers at no cost to you. The carriers pay the agent's commission, so you get professional guidance without a fee. An independent agent can show you options a single-carrier agent can't.",
  },
  {
    question: "How much does a Medicare agent cost?",
    answer:
      "Nothing. Medicare agents are paid by the insurance carriers, not by you. Your premium stays the same whether you enroll directly or through a broker. There's no hidden markup.",
  },
  {
    question: "What's the difference between a captive agent and an independent broker?",
    answer:
      "A captive agent represents one insurance company. An independent broker is contracted with many carriers and can compare plans side by side. Independence means the recommendation fits your needs, not a sales quota.",
  },
  {
    question: "Can I work with a Medicare agent by phone or video?",
    answer:
      "Absolutely. Licensed brokers can conduct full consultations and enrollments by phone, video, or in person. All methods are CMS-compliant. Choose whatever feels most comfortable for you.",
  },
];

export default function MedicareAgentNearMePage() {
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
        <span className="text-gray-700">Medicare Agent Near Me</span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Medicare Agent Near Me: Find a Licensed Independent Broker Who Works
          for You
        </h1>

        <Image
          src="/images/medicare-agent-near-me.webp"
          alt="Medicare agent near me"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Medicare agent near me is the search that brings most people to this
          page. You want someone local, someone you can trust, someone who isn't
          going to push whatever plan pays the highest commission.
        </p>
        <p className="text-lg mb-6">
          I'm Anthony Orner, a licensed independent Medicare broker serving New
          Jersey and Pennsylvania. I compare plans from 30+ carriers, and you
          pay nothing for my help.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why independence matters more than proximity
          </h2>
          <p className="mb-3">
            A captive agent down the street can only show you one company's
            plans. That's like shopping for a car at a dealership that sells one
            brand. An independent broker pulls quotes from dozens of carriers and
            lays them side by side.
          </p>
          <p>
            Proximity is nice, but carrier access is what actually saves you
            money. I work with clients across NJ and PA whether they're five
            miles away or fifty.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What a good agent actually does during a consultation
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Reviews your current prescriptions and checks each plan's
              formulary and copay tiers
            </li>
            <li>
              Confirms your doctors are in-network before you commit to anything
            </li>
            <li>
              Compares total annual costs, not just the monthly premium
            </li>
            <li>
              Explains the difference between Medicare Advantage and Medigap so
              you pick the right structure
            </li>
            <li>
              Handles the enrollment paperwork and follows up after your
              coverage starts
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Phone, video, and in-person options for NJ and PA residents
          </h2>
          <p className="mb-3">
            You don't have to drive anywhere. I conduct full consultations and
            CMS-compliant enrollments by phone or video. If you prefer sitting
            across a table, I do that too.
          </p>
          <p>
            Every method gives you the same access to every plan. Pick whatever
            feels easiest.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            You pay nothing for broker help
          </h2>
          <p className="mb-3">
            This surprises people. Carriers pay agent commissions directly. Your
            premium is identical whether you enroll online, call 1-800-MEDICARE,
            or work with me.
          </p>
          <p>
            The only difference is you get a real person who knows your plan, answers your calls, and helps you switch if something isn't working.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Key 2026 numbers you should know
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Part B premium: $202.90/month</li>
            <li>Part B deductible: $283/year</li>
            <li>Part A deductible: $1,676 per benefit period</li>
            <li>
              Medicare Advantage and Part D Open Enrollment: October 15 through
              December 7
            </li>
            <li>
              Medigap Open Enrollment: 6 months starting the month you turn 65
              and are enrolled in Part B
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Request a free Medicare plan comparison in two minutes
          </h2>
          <p className="mb-3">
            Call or fill out the form. I'll pull quotes, check your doctors and
            drugs, and walk you through your best options. No obligation. No
            pressure. No automated phone tree.
          </p>
          <p>
            You'll talk to me directly. That's the whole point.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center my-10">
          <p className="text-xl font-semibold mb-3">
            Ready to compare Medicare plans with a licensed broker?
          </p>
          <p className="text-2xl font-bold mb-4">
            <a href="tel:8555591700" className="underline">
              855-559-1700
            </a>
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
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
                href="/medicare-supplement/new-jersey/vs-medicare-advantage"
                className="text-blue-600 hover:underline"
              >
                Medicare Advantage vs. Medigap: Which Structure Fits You?
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-supplement/new-jersey/turning-65"
                className="text-blue-600 hover:underline"
              >
                Medigap Open Enrollment: Why Timing Matters
              </Link>
            </li>
            <li>
              <Link
                href="/services/free-medicare-broker-new-jersey"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/learn/irmaa-medicare-surcharge"
                className="text-blue-600 hover:underline"
              >
                2026 Part B Premium and Deductible Explained
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
                href="/services/best-medicare-broker-no-cost-to-you"
                className="text-blue-600 hover:underline"
              >
                Best Medicare Broker No Cost To You
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
</ul>
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/plan-compare/" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov Plan Finder</a> and <a href="https://www.medicare.gov/talk-to-someone" rel="noopener noreferrer" target="_blank" className="underline">Talk to Someone at Medicare.gov</a>.</div>
            <div className="text-sm text-gray-600 mt-2">Free unbiased counseling is also available through <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" target="_blank" rel="noopener noreferrer" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Free local counseling is also available through <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For free, unbiased counseling, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a>.</div>
      </section>
      </article>
    </>
  );
}