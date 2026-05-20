import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "top medicare advisors | Free Independent Broker Help | MedicareYourself",
  description:
    "Find top Medicare advisors with Anthony Orner — independent, multi-carrier broker offering free, no-pressure plan comparisons. Call 855-559-1700 today.",
  alternates: { canonical: "https://medicareyourself.com/services/top-medicare-advisors" },
  openGraph: {
    title:
      "top medicare advisors | Free Independent Broker Help | MedicareYourself",
    description:
      "Top medicare advisors share five traits: independence, carrier access, transparency, and more. See how Anthony Orner compares. Free consultation available.",
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
      name: "Top Medicare Advisors",
      item: "https://medicareyourself.com/services/top-medicare-advisors",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Top Medicare Advisors: What to Look for and How to Choose the Right One",
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
    question: "Are Medicare advisors the same as insurance salespeople?",
    answer:
      "Not always. An independent Medicare advisor represents multiple carriers and works for you, not one company. A captive agent sells only their employer's plans. Always ask how many carriers an advisor can quote before you commit.",
  },
  {
    question: "How do Medicare advisors get paid?",
    answer:
      "Licensed Medicare brokers earn commissions directly from insurance carriers when you enroll in a plan. You pay nothing extra for their help. The premium is the same whether you use a broker or enroll on your own.",
  },
  {
    question: "When should I contact a Medicare advisor?",
    answer:
      "Reach out at least three months before you turn 65 or before your employer coverage ends. For Medigap, applying six months before your Part B start date helps lock in the best rate during your open enrollment window.",
  },
  {
    question: "What if a Medicare advisor gave me bad advice?",
    answer:
      "You can file a complaint with your state's Department of Insurance. You can also switch plans during the appropriate enrollment period. If you're unsure about advice you've received, get a second opinion from an independent broker.",
  },
];

export default function TopMedicareAdvisorsPage() {
  return (
    <div>
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
        <span className="text-gray-700">Top Medicare Advisors</span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Top Medicare Advisors: What to Look for and How to Choose the Right One
      </h1>

      <Image
        src="/images/top-medicare-advisors.webp"
        alt="top medicare advisors"
        width={800}
        height={400}
        className="w-full h-auto rounded-lg mb-6"
      />

      <p className="text-lg mb-2">
        Top medicare advisors share a handful of specific traits that set them
        apart from the rest. Most people searching for Medicare help feel the
        same frustration: it's hard to tell who's genuinely working for you and
        who's just selling a product.
      </p>
      <p className="text-lg mb-6">
        Here's what separates the best from the rest, and the red flags that
        should send you looking elsewhere.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Five traits that separate great Medicare advisors from average ones
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Independence.</strong> They represent multiple carriers, not
            just one. This means they can actually comparison shop for you.
          </li>
          <li>
            <strong>Carrier access.</strong> The best brokers are contracted with
            10+ carriers in your state, so they can match your doctors,
            prescriptions, and budget against real plan options.
          </li>
          <li>
            <strong>Transparency about compensation.</strong> They tell you
            upfront that carriers pay their commission and your premium stays the
            same either way.
          </li>
          <li>
            <strong>Annual plan reviews.</strong> Good advisors call you every
            year before open enrollment to make sure your plan still fits.
          </li>
          <li>
            <strong>Willingness to say "don't switch."</strong> If your current
            plan still works, an honest advisor tells you so.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why independent brokers consistently outperform captive agents
        </h2>
        <p className="mb-3">
          A captive agent works for one insurance company. They can only show you
          that company's plans. An independent broker works for you and can quote
          plans across carriers.
        </p>
        <p>
          Think of it this way: a captive agent is like a car salesperson at one
          dealership. An independent broker is like a friend who can pull prices
          from every lot in town. Same cost to you, better results.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Red flags to watch for when choosing a Medicare advisor
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            They push one plan without asking about your doctors, medications, or
            budget first.
          </li>
          <li>
            They pressure you with artificial deadlines outside of actual
            enrollment periods.
          </li>
          <li>
            They can't clearly explain how they get paid.
          </li>
          <li>
            They tell you Medigap requires immediate purchase during Part B
            enrollment with no exceptions. (In reality, guaranteed issue rights
            apply in several situations, including loss of employer coverage or
            moving out of a plan's service area.)
          </li>
          <li>
            They disappear after enrollment and don't offer annual reviews.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How Anthony Orner's approach puts clients first
        </h2>
        <p className="mb-3">
          I'm Anthony Orner, a licensed independent Medicare broker in New
          Jersey. I work with carriers across the state and I don't charge you a
          dime. Your premium is identical whether you call a carrier directly or
          go through me.
        </p>
        <p>
          Every consultation starts with your doctors, your prescriptions, and
          your budget. I show you what fits. If your current plan is still the
          best option, I'll say so. Every client gets an annual review call
          before open enrollment.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Key numbers you should know before talking to any advisor
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>2026 Part B premium: $202.90/month</li>
          <li>Part B deductible: $283/year</li>
          <li>Part A deductible: $1,676 per benefit period</li>
          <li>
            Medigap Open Enrollment: 6 months starting the month you turn 65 and
            are enrolled in Part B
          </li>
          <li>
            Medicare Advantage / Part D Open Enrollment: October 15 through
            December 7
          </li>
        </ul>
        <p className="mt-3">
          An advisor who doesn't know these numbers off the top of their head
          probably isn't one of the top ones.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          When to reach out for help
        </h2>
        <p className="mb-3">
          Contact an advisor at least three months before you turn 65. If you're
          considering a Medigap plan, start six months before your Part B
          effective date to lock in guaranteed issue pricing.
        </p>
        <p>
          Already on Medicare and unsure if your plan still makes sense? That's
          what annual reviews are for. One call can save you hundreds.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-8 text-center my-10">
        <p className="text-xl font-semibold mb-2">
          Talk to an independent Medicare advisor at no cost.
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/contact" className="underline font-bold">
            get a free quote online
          </Link>
          .
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/services/medicare-agents-near-me"
              className="text-blue-600 hover:underline"
            >
              Find a Medicare Broker Near You
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/turning-65"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment: What You Need to Know
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage vs. Medigap: How to Decide
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-blue-600 hover:underline"
            >
              About Anthony Orner
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
                href="/services/licensed-medicare-advisors"
                className="text-blue-600 hover:underline"
              >
                Licensed Medicare Advisors
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-advisors-nj"
                className="text-blue-600 hover:underline"
              >
                Medicare Advisors NJ
              </Link>
            </li>
</ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/basics/get-started-with-medicare/get-more-coverage/find-out-about-your-options" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Medicare.gov — Get Help with Your Medicare Choices</a> and <a href="https://www.medicare.gov/talk-to-someone" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Medicare.gov — Talk to Someone</a> for free counseling options.</div>
            <div className="text-sm text-gray-600 mt-2">Prefer free state-based counseling? Find your local <a href="https://www.shiphelp.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">SHIP (State Health Insurance Assistance Program)</a> counselor for unbiased Medicare guidance at no cost.</div>
            <div className="text-sm text-gray-600 mt-4">Free one-on-one counseling is also available through your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> or the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a>.</div>
      </section>
    </div>
  );
}