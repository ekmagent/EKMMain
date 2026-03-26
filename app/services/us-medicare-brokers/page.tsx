import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "US Medicare Brokers | Free Unbiased Help | MedicareYourself",
  description:
    "US Medicare brokers compare Supplement and Advantage plans across carriers at no cost to you. Learn how Anthony Orner finds the best rate. Free quote.",
  alternates: { canonical: "https://medicareyourself.com/services/us-medicare-brokers" },
  openGraph: {
    title: "US Medicare Brokers | Free Unbiased Help | MedicareYourself",
    description:
      "US Medicare brokers compare Supplement and Advantage plans across carriers at no cost to you. Learn how Anthony Orner finds the best rate. Free quote.",
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
      name: "US Medicare Brokers",
      item: "https://medicareyourself.com/services/us-medicare-brokers",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "US Medicare Brokers: How Independent Brokers Help You Choose the Right Plan",
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
  mainEntityOfPage:
    "https://medicareyourself.com/services/us-medicare-brokers",
};

const faqs = [
  {
    question: "Are Medicare brokers legitimate?",
    answer:
      "Yes. Licensed Medicare brokers must hold valid state insurance licenses, complete annual CMS certification, and follow strict marketing regulations. You can verify any broker's license through your state's Department of Insurance website.",
  },
  {
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. Medicare brokers are paid commissions by insurance carriers. These commissions are built into every plan's premium whether you use a broker or not, so working with one adds zero cost to you.",
  },
  {
    question: "What is the difference between a Medicare broker and an agent?",
    answer:
      "A captive agent represents one insurance company and can only show you that carrier's plans. An independent broker is contracted with multiple carriers and can compare options across all of them to find the best fit for your situation.",
  },
  {
    question: "Can a Medicare broker help me switch plans?",
    answer:
      "Yes. During Open Enrollment (October 15 through December 7 for Advantage and Part D plans) or during a qualifying Special Enrollment Period, a broker can help you review and switch to a better plan at no charge.",
  },
];

export default function USMedicareBrokersPage() {
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
        <span className="text-gray-700">US Medicare Brokers</span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          US Medicare Brokers: How Independent Brokers Help You Choose the Right
          Plan
        </h1>

        <Image
          src="/images/us-medicare-brokers.webp"
          alt="US Medicare brokers helping seniors compare plans"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          US Medicare brokers work for you, not for any single insurance company. An independent broker compares Supplement, Advantage, and Part D plans across dozens of carriers to match your health needs and budget.
        </p>
        <p className="text-lg mb-6">
          I'm Anthony Orner, a licensed broker in NJ, and I do this every day. Here's what you should know before picking someone to help with your Medicare decisions.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What a Medicare broker does that an agent cannot
          </h2>
          <p className="mb-2">
            A captive agent sells plans from one carrier. That's it. If their company's Plan G costs $40 more per month than a competitor's identical Plan G, they can't tell you.
          </p>
          <p>
            An independent broker is contracted with multiple carriers and can show you all of them side by side. Same benefits, different prices. You pick.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How independent brokers are paid (and why it costs you nothing)
          </h2>
          <p className="mb-2">
            Carriers pay brokers a commission when you enroll. This commission is already baked into every plan's premium. You pay the same rate whether you call the carrier directly, use their website, or work with a broker.
          </p>
          <p>
            The difference: a broker shops for you. No extra cost. No hidden fees.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why carrier count matters
          </h2>
          <p className="mb-2">
            In most states, a dozen or more carriers offer Medicare Supplement plans. Premiums for the exact same Plan G can vary by $80 or more per month between carriers in the same zip code.
          </p>
          <p>
            A broker contracted with 30+ carriers catches those gaps. A single-carrier agent can't.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Questions to ask before hiring any Medicare broker
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Are you licensed in my state? (Verify through your state's Department of Insurance.)</li>
            <li>How many carriers do you represent?</li>
            <li>Will you help me during annual enrollment and if I need to switch later?</li>
            <li>Do you sell both Medigap and Medicare Advantage plans?</li>
          </ul>
          <p className="mt-3">
            If a broker only sells Advantage plans, they may not show you the Supplement option that actually fits better. Ask.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            When to contact a broker
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Turning 65:</strong> Your Medigap Open Enrollment Period lasts 6 months starting the month you turn 65 and are enrolled in Part B. This is your best window for guaranteed issue rates.</li>
            <li><strong>Leaving employer coverage:</strong> You may qualify for a Special Enrollment Period and federal guaranteed issue rights.</li>
            <li><strong>Annual Enrollment:</strong> October 15 through December 7 is the window to change Advantage or Part D plans.</li>
            <li><strong>Rates went up:</strong> A broker can re-shop your Supplement plan to see if another carrier offers a lower premium for the same coverage.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Work with a licensed broker who compares dozens of carriers
          </h2>
          <p className="mb-2">
            I compare Supplement and Advantage plans from over 30 carriers. Every recommendation is based on your doctors, medications, and what you can comfortably spend each month.
          </p>
          <p>
            No pressure. No cost. Just honest answers and a plan that fits.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center my-10">
          <p className="text-xl font-semibold mb-3">
            Ready for an honest Medicare comparison?
          </p>
          <p className="text-lg mb-4">
            Call{" "}
            <a
              href="tel:8555591700"
              className="underline font-bold"
            >
              855-559-1700
            </a>{" "}
            or{" "}
            <Link
              href="/quote"
              className="underline font-bold"
            >
              get a free quote online
            </Link>
            .
          </p>
          <p className="text-sm opacity-90">
            Licensed in multiple states. No obligation.
          </p>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare-supplement/new-jersey"
                className="text-blue-600 hover:underline"
              >
                Medicare Supplement Plans Explained
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-advantage/new-jersey"
                className="text-blue-600 hover:underline"
              >
                Medicare Advantage Plans: What You Need to Know
              </Link>
            </li>
            <li>
              <Link
                href="/learn/how-to-sign-up-for-medicare"
                className="text-blue-600 hover:underline"
              >
                When to Enroll in Medicare: Key Dates and Deadlines
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
                href="/services/medicare-agent-for-someone-with-pre-existing-conditions-california"
                className="text-blue-600 hover:underline"
              >
                Medicare Agent For Someone With Pre Existing Conditions California
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-consultant-in-ft-lauderdale-fl"
                className="text-blue-600 hover:underline"
              >
                Medicare Consultant In Ft Lauderdale FL
              </Link>
            </li>
</ul>
        </section>
      </article>
    </>
  );
}