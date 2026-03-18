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
    "Independent Medicare Supplement insurance agents compare every top carrier for you. Anthony Orner is licensed, independent, and free to work with. Get a quote.",
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
      name: "Independent Medicare Supplement Insurance Agents",
      item: "https://www.medicareyourself.com/services/independent-medicare-supplement-insurance-agents",
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
    url: "https://www.medicareyourself.com/about",
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
    question: "What is an independent Medicare agent?",
    answer:
      "An independent Medicare agent is licensed to sell plans from multiple insurance carriers, not just one company. This means they can compare premiums, rate histories, and financial strength across carriers to find the best fit for you. Their commissions are paid by the carrier, so you pay nothing extra.",
  },
  {
    question: "How do I find a good Medicare agent?",
    answer:
      "Look for an agent who is licensed in your state, works independently (not captive to one carrier), and is willing to explain rate increase history alongside the starting premium. Ask how many carriers they represent. A good agent will also help you time your enrollment to protect your guaranteed issue rights.",
  },
  {
    question: "Can an independent agent help me switch Medigap plans?",
    answer:
      "Yes. An independent agent can shop your current plan letter across carriers to find a lower rate. Outside of your initial Medigap Open Enrollment Period, you may need to pass medical underwriting to switch. Your agent can tell you which carriers are most likely to approve your application based on your health history.",
  },
  {
    question: "Do independent Medicare agents charge a fee?",
    answer:
      "No. Independent Medicare Supplement agents are paid a commission by the insurance carrier when you enroll. You pay the same premium whether you use an agent or apply directly. There is zero cost to you for their help.",
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
        <Link href="/medicare-guides" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Independent Medicare Supplement Insurance Agents
        </span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Why You Want an Independent Medicare Supplement Insurance Agent
        </h1>

        <Image
          src="/images/independent-medicare-supplement-insurance-agents.webp"
          alt="independent medicare supplement insurance agents"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Independent Medicare Supplement insurance agents work for you, not for
          one carrier. They compare Plan G, Plan N, and other letters across
          every major insurer to find the rate and rate history that actually
          protect you long-term.
        </p>
        <p className="text-lg mb-6">
          I'm Anthony Orner, a licensed independent broker in New Jersey. I
          represent multiple carriers, and I never charge a fee. Here's why that
          matters.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Independent vs. captive Medicare Supplement agents explained
          </h2>
          <p className="mb-2">
            A captive agent sells plans from one company. If that company raises
            rates 14% next year, they can't move you. They'll tell you to call
            customer service.
          </p>
          <p>
            An independent agent represents multiple carriers. If your current
            insurer becomes expensive, I can shop you a new Plan G from a
            different carrier with the same exact benefits and a better rate
            history. That flexibility is the whole point.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How independent agents compare Plan G and Plan N across carriers
          </h2>
          <p className="mb-2">
            Plan G is standardized by Medicare. Every Plan G covers the same
            things regardless of which company issues it. What's not identical is
            pricing behavior over time.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Some carriers price aggressively low at first, then raise rates
              steeply as the block ages.
            </li>
            <li>
              Others start slightly higher but hold steadier year over year.
            </li>
            <li>
              I look at 5- and 10-year rate increase history, not just today's
              premium.
            </li>
          </ul>
          <p className="mt-2">
            The difference between a good pick and a bad one can be thousands of
            dollars by the time you're 75.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            The starting premium trap most people fall into
          </h2>
          <p className="mb-2">
            Most people shopping for a Medigap plan focus entirely on the
            lowest monthly premium at 65. That's the first mistake.
          </p>
          <p>
            Attained-age rate increases and block rate increases can stack
            together. Annual jumps of 10-18% happen. An independent agent shows
            you which carriers have a track record of stability, not just which
            one looks cheapest on day one.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What it costs to use an independent Medicare agent (nothing)
          </h2>
          <p className="mb-2">
            You pay $0. The insurance carrier pays the agent's commission.
            Your premium is the same whether you enroll through me, through a
            captive agent, or directly on the carrier's website.
          </p>
          <p>
            The only difference? I'll actually tell you when a different company
            is the better deal.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Timing your enrollment to protect your rights
          </h2>
          <p className="mb-2">
            Your Medigap Open Enrollment Period lasts 6 months, starting the
            month you turn 65 and are enrolled in Part B. During this window,
            no carrier can deny you or charge more based on health.
          </p>
          <p>
            Miss it, and you'll face medical underwriting. Pre-existing
            conditions like Type 2 diabetes can lock you out of Supplement plans
            entirely. I've talked to people who switched to a $0-premium
            Advantage plan and couldn't get their Plan G back. That's a mistake
            an independent agent helps you avoid before it happens.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Connect with an independent NJ Medicare Supplement agent today
          </h2>
          <p className="mb-2">
            I'll show you rates from every major carrier I represent, explain the
            rate increase history behind each one, and help you enroll in the
            plan that fits your budget now and later.
          </p>
          <p>No pressure. No fee. Just a straight comparison you can trust.</p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-6 text-center my-10">
          <p className="text-xl font-semibold mb-2">
            Talk to an independent Medicare Supplement agent today.
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

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare-guides/medigap-plan-g"
                className="text-blue-600 hover:underline"
              >
                Medicare Supplement Plan G: What It Covers and What It Costs
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/medigap-plan-n"
                className="text-blue-600 hover:underline"
              >
                Medicare Supplement Plan N: A Lower-Premium Alternative
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/medigap-open-enrollment"
                className="text-blue-600 hover:underline"
              >
                Medigap Open Enrollment: Deadlines and Guaranteed Issue Rights
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-blue-600 hover:underline"
              >
                About Anthony Orner: Your Independent Medicare Broker in NJ
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}