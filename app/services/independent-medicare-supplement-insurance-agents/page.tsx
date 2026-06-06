import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "independent medicare supplement insurance agents | Free Help | MedicareYourself",
  description:
    "Work with an independent Medicare Supplement agent who compares every top carrier at no cost. Honest, pressure-free guidance. Call 855-559-1700 today.",
  alternates: { canonical: "https://medicareyourself.com/services/independent-medicare-supplement-insurance-agents" },
  openGraph: {
    title:
      "independent medicare supplement insurance agents | Free Help | MedicareYourself",
    description:
      "Independent Medicare Supplement insurance agents compare every top carrier for you. Anthony Orner is licensed, independent, and free to work with. Get a quote.",
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
      name: "Independent Medicare Supplement Insurance Agents",
      item: "https://medicareyourself.com/services/independent-medicare-supplement-insurance-agents",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Why You Want an Independent Medicare Supplement Insurance Agent",
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
    question: "What is an independent Medicare agent?",
    answer:
      "An independent Medicare agent is licensed to sell plans from multiple insurance carriers, not just one. This means they can compare rates, coverage stability, and carrier reputation across the market to find the best fit for you. They work for you, not for a single company.",
  },
  {
    question: "How do I find a good Medicare agent?",
    answer:
      "Look for someone who is licensed in your state, represents multiple carriers, and doesn't charge you a fee. Ask whether they review your plan annually and whether they'll help you switch carriers if rates increase. A good agent explains tradeoffs honestly instead of pushing one option.",
  },
  {
    question:
      "Does it cost anything to use an independent Medicare Supplement agent?",
    answer:
      "No. Independent Medicare Supplement agents are paid a commission by the insurance carrier you choose. Your premium is the same whether you use an agent or enroll directly. There is no fee, no markup, and no hidden cost.",
  },
  {
    question: "Can an independent agent help me switch Medigap carriers?",
    answer:
      "Yes. If your current carrier raises rates significantly, an independent agent can compare your plan across other carriers and help you apply for a new policy. Approval outside of your Medigap Open Enrollment Period typically requires medical underwriting, so acting early matters.",
  },
];

export default function IndependentMedicareSuppAgentsPage() {
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
        <span>Independent Medicare Supplement Insurance Agents</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Why You Want an Independent Medicare Supplement Insurance Agent
      </h1>

      <Image
        src="/images/independent-medicare-supplement-insurance-agents_vector.webp"
        alt="independent medicare supplement insurance agents"
        width={800}
        height={400}
        className="w-full h-auto rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        Independent Medicare Supplement insurance agents work with multiple
        carriers, not just one. That single difference changes everything about
        the advice you get, the rates you see, and how your plan performs five or
        ten years from now.
      </p>
      <p className="text-lg mb-6">
        I&apos;m Anthony Orner, a licensed independent Medicare broker in New
        Jersey. I don&apos;t charge a fee and I don&apos;t work for any single
        insurance company.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Independent vs. captive Medicare Supplement agents explained
        </h2>
        <p className="mb-2">
          A captive agent represents one carrier. They can only show you that
          carrier&apos;s rates and plans. If another company offers the same Plan
          G for $40 less per month, a captive agent can&apos;t tell you about
          it.
        </p>
        <p>
          An independent agent is contracted with many carriers. I pull quotes
          from across the market, compare them side by side, and show you
          what&apos;s actually available. Same coverage. Different prices.
          Different long-term rate behavior.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How independent agents compare Plan G and Plan N across carriers
        </h2>
        <p className="mb-2">
          Plan G and Plan N are standardized by Medicare. A Plan G from Carrier A
          covers the exact same benefits as a Plan G from Carrier B. The
          difference is the premium and how it changes over time.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Some carriers price aggressively low to attract new enrollees, then
            raise rates steeply as the pool ages.
          </li>
          <li>
            Others price moderately at the start with more stable increases
            year-over-year.
          </li>
          <li>
            Rate increases can stack: age-based increases plus block rate
            increases in the same year. Jumps of 10-18% in one year are not
            unusual with certain carriers.
          </li>
        </ul>
        <p className="mt-2">
          I track this carrier pricing behavior so you don&apos;t have to. The
          cheapest plan at 65 is rarely the cheapest plan at 78.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What it costs to use an independent Medicare agent (nothing)
        </h2>
        <p className="mb-2">
          You pay zero. The insurance carrier pays the agent&apos;s commission.
          Your premium is the same whether you call the carrier directly, go
          through their website, or work with me.
        </p>
        <p>
          The only difference is that with me, you get someone comparing every
          competitive option instead of selling you one company&apos;s product.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why the starting premium isn&apos;t the whole story
        </h2>
        <p className="mb-2">
          Most people shopping for a Medicare Supplement focus on the starting
          premium. That&apos;s understandable but incomplete. Attained-age
          rating means your premium increases as you get older. Block rate
          increases happen when claims rise within your pool of insured members.
        </p>
        <p>
          When both stack in the same year, it hurts. An independent agent tracks
          which carriers have a history of stable pricing and which ones
          don&apos;t.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Annual reviews protect your budget
        </h2>
        <p className="mb-2">
          I review my clients&apos; plans every year. If your carrier raised
          rates and a competitor now offers the same standardized plan for
          significantly less, I&apos;ll let you know and help you apply.
        </p>
        <p>
          Switching carriers outside your Medigap Open Enrollment Period
          typically requires medical underwriting. That&apos;s why acting before
          health changes matter is smart.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Connect with an independent NJ Medicare Supplement agent today
        </h2>
        <p className="mb-2">
          If you&apos;re turning 65 soon, your Medigap Open Enrollment Period
          starts the month you turn 65 and are enrolled in Part B. During those
          six months, no carrier can deny you or charge more based on health.
          Apply about six months before your Part B start date to lock in your
          rate on time.
        </p>
        <p>
          Already on Medicare and want a second opinion on your plan? Call me.
          I&apos;ll pull fresh quotes and tell you exactly where you stand.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center my-10">
        <p className="text-xl font-semibold mb-2">
          Talk to an independent Medicare Supplement agent for free.
        </p>
        <p className="text-lg mb-4">
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
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link
              href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
              className="text-blue-600 hover:underline"
            >
              Plan G vs. Plan N: Which Medigap Plan Is Right for You?
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/turning-65"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment: When and Why It Matters
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/cost"
              className="text-blue-600 hover:underline"
            >
              How Medicare Supplement Rates Work Over Time
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-blue-600 hover:underline"
            >
              About Anthony Orner, Licensed Medicare Broker
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
                href="/services/free-medicare-broker-new-jersey"
                className="text-blue-600 hover:underline"
              >
                Free Medicare Broker New Jersey
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
                href="/services/independent-medicare-insurance-agents"
                className="text-blue-600 hover:underline"
              >
                Independent Medicare Insurance Agents
              </Link>
            </li>
            <li>
              <Link
                href="/services/independent-medicare-supplement-insurance-agents-near-me"
                className="text-blue-600 hover:underline"
              >
                Independent Medicare Supplement Insurance Agents Near Me
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-supplement-insurance-for-crohns-patients"
                className="text-blue-600 hover:underline"
              >
                Medicare Supplement Insurance For Crohns Patients
              </Link>
            </li>
</ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/health-drug-plans/medigap" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov Medigap basics</a> and <a href="https://www.medicare.gov/talk-to-someone" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Talk to someone</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For free, unbiased counseling, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> or the <a href="https://www.nj.gov/dobi/division_insurance/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey Department of Banking and Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or the free <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP program</a> for unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Free state counseling: <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">Find your local SHIP program</a> for unbiased Medicare guidance in your state.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
      </section>
    </>
  );
}