import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "find a medicare agent in plainfield nj | Free Broker Consultation | MedicareYourself",
  description:
    "Find a Medicare agent in Plainfield, NJ who compares rates from top carriers at no cost. Anthony Orner offers free consultations for Union County residents.",
  openGraph: {
    title:
      "find a medicare agent in plainfield nj | Free Broker Consultation | MedicareYourself",
    description:
      "Find a Medicare agent in Plainfield, NJ who compares rates from top carriers at no cost. Anthony Orner offers free consultations for Union County residents.",
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
      name: "Find a Medicare Agent in Plainfield, NJ",
      item: "https://www.medicareyourself.com/services/find-a-medicare-agent-in-plainfield-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Find a Medicare Agent in Plainfield, NJ for Honest, No-Cost Plan Guidance",
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
    question: "How do I pick a Medicare agent?",
    answer:
      "Look for an independent broker licensed in your state who represents multiple carriers, not just one. An independent agent can compare Supplement, Advantage, and Part D plans side by side. Ask whether their service is free to you - a good broker is paid by the insurance carrier, never by you.",
  },
  {
    question: "How do I speak to a live person at Medicare?",
    answer:
      "You can call 1-800-MEDICARE (1-800-633-4227) 24 hours a day, 7 days a week. However, a local broker like Anthony Orner can often answer your questions faster and help you compare plans at the same time - at no cost. Call 855-559-1700 for direct help.",
  },
  {
    question: "Does it cost anything to use a Medicare broker in Plainfield?",
    answer:
      "No. Licensed Medicare brokers are compensated by the insurance carriers, not by you. You pay the same premium whether you enroll directly or through a broker. The difference is that a broker does the comparison shopping for you.",
  },
  {
    question:
      "What is the Medigap Open Enrollment Period and why does it matter?",
    answer:
      "Your Medigap Open Enrollment Period lasts 6 months, starting the month you turn 65 and are enrolled in Part B. During this window, carriers must accept you at standard rates with no health questions. Miss it, and you could face medical underwriting or higher premiums.",
  },
];

export default function FindMedicareAgentPlainfieldNJ() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/medicare-guides" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Find a Medicare Agent in Plainfield, NJ
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Find a Medicare Agent in Plainfield, NJ for Honest, No-Cost Plan
        Guidance
      </h1>

      <Image
        src="/images/find-a-medicare-agent-in-plainfield-nj.webp"
        alt="find a medicare agent in Plainfield NJ"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Finding a Medicare agent in Plainfield, NJ doesn't have to be stressful.
        I'm Anthony Orner, an independent Medicare broker serving Union County,
        and I compare plans from multiple carriers so you don't have to call each
        one yourself. My consultations are always free.
      </p>

      <PhoneCTA />

      <section className="mt-8 mb-6">
        <h2 className="text-2xl font-semibold mb-3">
          Why Plainfield residents need an independent Medicare broker
        </h2>
        <p className="mb-2">
          Plainfield sits in Union County, where several major carriers compete
          for your business. A captive agent only shows you their company's
          plans. I show you options from multiple insurers and let you decide
          what fits your budget and your doctors.
        </p>
        <p>
          You pay the exact same premium whether you enroll through me or go
          directly to the carrier. There is zero markup.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">
          Supplement and Advantage plans available in Union County
        </h2>
        <p className="mb-2">
          Union County residents can choose from two main paths:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-2">
          <li>
            <strong>Medicare Supplement (Medigap)</strong> - Plans like G and N
            pair with Original Medicare. Plan G covers everything except the Part
            B deductible ($257/year in 2026). Rates vary by carrier and age.
          </li>
          <li>
            <strong>Medicare Advantage</strong> - Many $0-premium HMO and PPO
            plans are available in the 07060 zip code. These often bundle Part D
            drug coverage and extras like dental or vision.
          </li>
        </ul>
        <p>I help you weigh costs, network access, and flexibility side by side.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">
          Key enrollment windows and guaranteed-issue dates
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Medigap Open Enrollment:</strong> 6 months starting the
            month you turn 65 and have Part B. No health questions. No higher
            premiums. This is your best window.
          </li>
          <li>
            <strong>Medicare Advantage / Part D:</strong> October 15 through
            December 7 each year (Annual Election Period).
          </li>
          <li>
            <strong>Special Enrollment:</strong> Triggered by losing employer
            coverage, moving out of a plan's service area, or a plan dropping
            your county.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">
          Lock in your Medigap rate before Part B starts
        </h2>
        <p className="mb-2">
          If you're turning 65 soon, here's something most people don't know:
          you can apply for a Medigap plan up to 6 months before your Part B
          start date. I do this with almost every client. It locks in today's
          rate and protects you from any premium increases before coverage kicks
          in.
        </p>
        <p>The sooner you apply, the better your rate. Don't wait until the last week.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">
          What to expect when we talk
        </h2>
        <p className="mb-2">
          Our call takes about 15 to 20 minutes. I'll ask about your doctors,
          your prescriptions, and what you spend now. Then I pull up real quotes
          and walk you through the numbers. No pressure, no sales tricks.
        </p>
        <p>
          If a plan doesn't save you money or improve your coverage, I'll tell
          you to keep what you have.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Book a free call with Anthony Orner
        </h2>
        <p>
          Whether you're new to Medicare or reviewing your current plan, I'm
          here to help Union County residents get clear answers. Call me directly
          or schedule a time that works for you. There's never a charge.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center mb-10">
        <p className="text-xl font-bold mb-2">
          Ready to compare Medicare plans in Plainfield?
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or click below for a free quote.
        </p>
        <Link
          href="/get-a-free-quote"
          className="inline-block bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
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
              href="/medicare-guides/medicare-supplement-plans-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plans in NJ - Complete Guide
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-plans-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage Plans in NJ - What to Know
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-plan-g-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Plan G in NJ - Benefits and Costs
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/when-to-enroll-in-medicare"
              className="text-blue-600 hover:underline"
            >
              When to Enroll in Medicare - Key Dates and Deadlines
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}