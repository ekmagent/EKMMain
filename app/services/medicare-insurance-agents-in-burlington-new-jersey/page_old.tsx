import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare insurance agents in burlington new jersey | Free Local Help | MedicareYourself",
  description:
    "Medicare insurance agents in Burlington, New Jersey — Anthony Orner is a licensed independent broker comparing plans across carriers. Free consultation, no obligation.",
  openGraph: {
    title:
      "medicare insurance agents in burlington new jersey | Free Local Help | MedicareYourself",
    description:
      "Medicare insurance agents in Burlington, New Jersey — Anthony Orner is a licensed independent broker comparing plans across carriers. Free consultation, no obligation.",
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
      item: "https://medicareyourself.com/medicare-guides",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Medicare Insurance Agents in Burlington, New Jersey",
      item: "https://medicareyourself.com/services/medicare-insurance-agents-in-burlington-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Insurance Agents in Burlington, New Jersey: Licensed Broker Serving Burlington County",
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
  datePublished: "2025-01-01",
  dateModified: new Date().toISOString().split("T")[0],
};

const faqs = [
  {
    question: "Should I use an insurance agent for Medicare?",
    answer:
      "Yes. A licensed Medicare agent compares plans across multiple carriers at no cost to you. Agents are paid by insurance companies, not by you, so the help is free. An independent broker can show you options you would not find on your own.",
  },
  {
    question: "How do I pick a Medicare agent?",
    answer:
      "Look for a licensed, independent broker who represents multiple carriers rather than just one company. Ask if the consultation is free and whether they cover both Medicare Supplement and Medicare Advantage plans. An independent agent gives you broader options.",
  },
  {
    question: "Does Medicare have a local office?",
    answer:
      "Medicare itself does not operate storefront offices. You can contact 1-800-MEDICARE for general questions, but a local licensed broker like Anthony Orner can provide personalized plan comparisons specific to Burlington County and New Jersey.",
  },
  {
    question: "How much does it cost to use a Medicare broker in Burlington, NJ?",
    answer:
      "Nothing. Independent Medicare brokers are compensated by the insurance carriers. You pay the same premium whether you enroll through a broker or directly with the carrier. There is no fee and no obligation.",
  },
];

export default function MedicareInsuranceAgentsBurlingtonNJ() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          {" > "}
          <Link href="/medicare-guides" className="hover:underline">
            Medicare Guides
          </Link>
          {" > "}
          <span className="text-gray-700">
            Medicare Insurance Agents in Burlington, New Jersey
          </span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Medicare Insurance Agents in Burlington, New Jersey: Licensed Broker Serving Burlington County
        </h1>

        <Image
          src="/images/medicare-insurance-agents-in-burlington-new-jersey.webp"
          alt="Medicare insurance agents in Burlington New Jersey"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg mb-2">
          Medicare insurance agents in Burlington, New Jersey help you cut through the noise and find the right plan for your health and budget. I'm Anthony Orner, an independent licensed Medicare broker serving Burlington County and surrounding areas.
        </p>
        <p className="text-lg mb-6">
          I compare plans from multiple carriers so you don't have to. The consultation is free, and there is zero obligation to enroll.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why Burlington County residents work with an independent broker
          </h2>
          <p className="mb-2">
            A captive agent sells one company's plans. I don't work that way. As an independent broker, I represent multiple carriers operating in Burlington County. That means I can show you side-by-side comparisons you won't see from a single-carrier agent.
          </p>
          <p>
            You pay the exact same premium whether you enroll through me or go directly to the carrier. My compensation comes from the insurance company, not from you.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Medicare Supplement and Advantage plans available in Burlington
          </h2>
          <p className="mb-2">
            Burlington County residents have access to both Medicare Supplement (Medigap) and Medicare Advantage plans. Here's a quick breakdown:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-3">
            <li>
              <strong>Medicare Supplement (Plan G, Plan N, others):</strong> Pairs with Original Medicare. You choose any doctor who accepts Medicare. Premiums vary by carrier and age.
            </li>
            <li>
              <strong>Medicare Advantage (Part C):</strong> Replaces Original Medicare with a network-based plan. Often includes dental, vision, and drug coverage.
            </li>
            <li>
              <strong>Part D prescription drug plans:</strong> Standalone drug coverage for those on Original Medicare and a Supplement.
            </li>
          </ul>
          <p>
            I'll walk you through which type fits your situation. There's no one-size-fits-all answer.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Key enrollment windows to know
          </h2>
          <p className="mb-2">
            Your Medigap Open Enrollment Period lasts 6 months, starting the month you turn 65 and are enrolled in Part B. During this window, carriers cannot deny you or charge higher premiums based on health history. Miss it, and you may face medical underwriting.
          </p>
          <p>
            Medicare Advantage and Part D open enrollment runs October 15 through December 7 each year. Planning ahead matters.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Lock in your Medigap rate early
          </h2>
          <p className="mb-2">
            If you're turning 65 soon, here's something most people don't realize: you can apply for a Medigap plan up to 6 months before your Part B start date. I recommend this approach because it locks in your rate early, protecting you from any premium increases before coverage begins.
          </p>
          <p>
            The sooner you lock in, the better your rate. Call me and I'll tell you exactly when to apply based on your Part B effective date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What to expect during a free Medicare consultation
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>We review your current coverage, medications, and doctors</li>
            <li>I pull real-time quotes from multiple carriers in Burlington County</li>
            <li>You see exactly what you'd pay monthly and at the doctor's office</li>
            <li>No pressure. You decide on your timeline</li>
          </ul>
          <p className="mt-3">
            Most calls take 15 to 20 minutes. Some people want to meet in person, and that works too.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How to schedule a call or meeting from Burlington, NJ
          </h2>
          <p className="mb-2">
            Call me directly at <strong>855-559-1700</strong>. I serve Burlington, Mount Holly, Medford, Moorestown, and all of Burlington County. Phone consultations, video calls, and in-person meetings are all available.
          </p>
          <p>
            Whether you're turning 65 next month or reviewing your current plan during open enrollment, I'll give you honest answers and real numbers.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-6 text-center my-10">
          <p className="text-xl font-semibold mb-2">
            Ready to compare Medicare plans in Burlington County?
          </p>
          <p className="mb-4">
            Call <strong>855-559-1700</strong> for a free, no-obligation consultation.
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
                href="/medicare-guides/medicare-supplement-plans-nj"
                className="text-blue-600 hover:underline"
              >
                Medicare Supplement Plans in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/medicare-advantage-plans-nj"
                className="text-blue-600 hover:underline"
              >
                Medicare Advantage Plans in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/medicare-plan-g-nj"
                className="text-blue-600 hover:underline"
              >
                Medicare Plan G in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/when-to-enroll-in-medicare"
                className="text-blue-600 hover:underline"
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