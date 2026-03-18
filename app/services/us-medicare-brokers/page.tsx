import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "US Medicare Brokers | Free Unbiased Help | MedicareYourself",
  description:
    "US Medicare brokers compare Supplement and Advantage plans across carriers at no cost to you. Learn how Anthony Orner finds your best rate. Free quote.",
  openGraph: {
    title: "US Medicare Brokers | Free Unbiased Help | MedicareYourself",
    description:
      "US Medicare brokers compare Supplement and Advantage plans across carriers at no cost to you. Learn how Anthony Orner finds your best rate. Free quote.",
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
      name: "US Medicare Brokers",
      item: "https://www.medicareyourself.com/services/us-medicare-brokers",
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
    question: "Are Medicare brokers legitimate?",
    answer:
      "Yes. Licensed Medicare brokers are regulated by their state's Department of Insurance and must follow CMS marketing guidelines. They're appointed by carriers to sell plans but are paid the same commission regardless of which plan you choose, so there's no financial incentive to steer you toward one company over another.",
  },
  {
    question: "What is the difference between a Medicare broker and an agent?",
    answer:
      "A captive agent represents one insurance company and can only show you that company's plans. An independent broker is appointed with multiple carriers and can compare plans side by side to find the best fit for your situation. Both are free to use.",
  },
  {
    question: "How do I know if a Medicare broker is independent?",
    answer:
      "Ask how many carriers they represent. A truly independent broker works with dozens of insurance companies. You can also verify their license through your state's Department of Insurance website. If they only mention one carrier's plans, they're likely a captive agent.",
  },
  {
    question: "Do I pay more if I use a Medicare broker?",
    answer:
      "No. Premiums are set by the insurance carrier and filed with your state. Whether you buy directly from the company or through a broker, you pay the exact same rate. The carrier pays the broker's commission, not you.",
  },
];

export default function USMedicareBrokersPage() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          &gt;{" "}
          <Link href="/medicare" className="hover:underline">
            Medicare Guides
          </Link>{" "}
          &gt;{" "}
          <span className="text-gray-700">US Medicare Brokers</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          US Medicare Brokers: How Independent Brokers Help You Choose the Right Plan
        </h1>

        <Image
          src="/images/us-medicare-brokers.webp"
          alt="US Medicare brokers comparing plans"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg mb-2">
          US Medicare brokers work with dozens of insurance carriers so you don't have to call each one yourself. Instead of hearing one company's pitch, you get a side-by-side comparison of Supplement, Advantage, and Part D plans tailored to your doctors, prescriptions, and budget.
        </p>
        <p className="text-lg mb-6">
          I'm Anthony Orner, a licensed independent broker. Here's how the process actually works.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What a Medicare broker does that an agent cannot
          </h2>
          <p className="mb-2">
            A captive agent sells plans from one carrier. That's it. If their company's Plan G costs $40 more than a competitor's, they can't tell you.
          </p>
          <p>
            An independent broker is appointed with multiple companies. I can pull rates from dozens of carriers in your zip code and show you which ones cover your preferred hospitals and pharmacies. Same plan letter, same standardized benefits - different price.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How independent brokers are paid (and why it costs you nothing)
          </h2>
          <p className="mb-2">
            Insurance carriers pay broker commissions directly. Your premium is the same whether you buy through a broker, a captive agent, or directly from the company. Rates are filed with your state - no markups, no hidden fees.
          </p>
          <p>
            Because every carrier pays roughly the same commission, I have no reason to push one over another. The math works in your favor.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What to look for when choosing a broker
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Active state insurance license (verify through your state's Department of Insurance)</li>
            <li>Appointments with multiple carriers, not just one or two</li>
            <li>Willingness to explain what they don't recommend, and why</li>
            <li>No pressure to enroll on the first call</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Questions to ask before hiring any Medicare broker
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>How many carriers do you represent in my state?</li>
            <li>Will you help me check if my doctors and prescriptions are covered?</li>
            <li>Can you help me during Annual Enrollment and after I'm enrolled?</li>
            <li>Are you available year-round if I have a billing issue or need to switch?</li>
          </ul>
          <p className="mt-3">
            A good broker says yes to all four. If they dodge the last two, keep looking.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            When to contact a broker
          </h2>
          <p className="mb-2">
            The best time depends on your situation. Turning 65? Your Medigap Open Enrollment Period lasts 6 months starting the month you turn 65 and are enrolled in Part B. During that window, carriers can't deny you or charge more for health conditions.
          </p>
          <p>
            Already on Medicare Advantage? Open Enrollment runs October 15 through December 7 each year. If you're unhappy with your current plan, that's your window to compare.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Work with a licensed broker who compares dozens of carriers
          </h2>
          <p>
            I help people across the country compare Medicare Supplement, Advantage, and Part D plans. One call, multiple options, zero cost. If your current plan still makes sense, I'll tell you that too.
          </p>
        </section>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center my-10">
          <p className="text-xl font-semibold mb-2">
            Ready to compare your options?
          </p>
          <p className="mb-4">
            Call{" "}
            <a
              href="tel:8555591700"
              className="text-blue-700 font-bold hover:underline"
            >
              855-559-1700
            </a>{" "}
            or{" "}
            <Link
              href="/quote"
              className="text-blue-700 font-bold hover:underline"
            >
              get a free quote online
            </Link>
            . No obligation, no pressure.
          </p>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare/supplement"
                className="text-blue-700 hover:underline"
              >
                Medicare Supplement Plans Explained
              </Link>
            </li>
            <li>
              <Link
                href="/medicare/advantage"
                className="text-blue-700 hover:underline"
              >
                Medicare Advantage Plans: What to Know
              </Link>
            </li>
            <li>
              <Link
                href="/medicare/plan-g"
                className="text-blue-700 hover:underline"
              >
                Medicare Plan G: Benefits and Costs
              </Link>
            </li>
            <li>
              <Link
                href="/medicare/when-to-enroll"
                className="text-blue-700 hover:underline"
              >
                When to Enroll in Medicare
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}