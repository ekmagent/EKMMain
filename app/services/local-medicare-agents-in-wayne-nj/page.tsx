import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "local medicare agents in wayne nj | Free Independent Broker Help | MedicareYourself",
  description:
    "Local Medicare agents in Wayne, NJ — Anthony Orner is a licensed independent broker comparing Supplement and Advantage plans across carriers. Free quote today.",
  alternates: { canonical: "https://medicareyourself.com/services/local-medicare-agents-in-wayne-nj" },
  openGraph: {
    title:
      "local medicare agents in wayne nj | Free Independent Broker Help | MedicareYourself",
    description:
      "Local Medicare agents in Wayne, NJ — Anthony Orner is a licensed independent broker comparing Supplement and Advantage plans across carriers. Free quote today.",
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
      name: "Local Medicare Agents in Wayne, NJ",
      item: "https://medicareyourself.com/services/local-medicare-agents-in-wayne-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Local Medicare Agents in Wayne, NJ: Independent Broker Serving Passaic County",
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
    question: "How do I pick a Medicare agent in Wayne, NJ?",
    answer:
      "Look for a licensed, independent broker who works with multiple carriers rather than one company. Ask whether they handle both Medicare Supplement and Medicare Advantage plans so you can compare all your options in one conversation. An independent agent has no incentive to push a single plan.",
  },
  {
    question: "How do I speak to a live person about Medicare?",
    answer:
      "You can call 1-800-MEDICARE (1-800-633-4227) for general questions. For personalized plan comparisons specific to Wayne and Passaic County, call a local independent broker like Anthony Orner at 855-559-1700. There's no hold queue, and the help is free.",
  },
  {
    question:
      "Is there a cost for using a local Medicare broker in Wayne?",
    answer:
      "No. Licensed Medicare brokers are paid by insurance carriers, not by you. You pay the same premium whether you enroll directly with a carrier or through a broker. The difference is you get someone who shops multiple plans on your behalf.",
  },
  {
    question:
      "Can I switch from Medicare Advantage back to a Medigap plan?",
    answer:
      "You can, but timing matters. Outside your initial Medigap Open Enrollment Period, carriers in most states can medically underwrite you. Certain federal guaranteed issue triggers, like losing MA coverage when a plan exits your area, may protect you. Call to discuss your specific situation.",
  },
];

export default function LocalMedicareAgentsWayneNJ() {
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
          Local Medicare Agents in Wayne, NJ
        </span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Local Medicare Agents in Wayne, NJ: Independent Broker Serving
          Passaic County
        </h1>

        <Image
          src="/images/hub_local-medicare-agents-in-wayne-nj.webp"
          alt="local medicare agents in wayne nj"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Local Medicare agents in Wayne, NJ give you a real advantage: someone who knows Passaic County's provider networks, understands which carriers actually serve this area, and sits on your side of the table. I'm Anthony Orner, a licensed independent Medicare broker based in New Jersey.
        </p>
        <p className="text-lg mb-6">
          I compare Supplement and Advantage plans across carriers so you don't have to call each one yourself. The help is free.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why Wayne residents benefit from an independent Medicare broker
          </h2>
          <p className="mb-2">
            A captive agent works for one carrier. An independent broker works for you. I'm contracted with multiple insurance companies, which means I can line up plans side by side and show you real differences in premiums, networks, and out-of-pocket costs.
          </p>
          <p>
            Wayne sits close to St. Joseph's Health, Valley Hospital in Ridgewood, and major specialty centers in Paterson and Morristown. Which plans include the doctors and facilities you already use? That's where the comparison starts.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Medicare Supplement and Advantage plans available in Passaic County
          </h2>
          <p className="mb-2">
            Passaic County residents typically have access to both plan types:
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-2">
            <li>
              <strong>Medicare Supplement (Medigap):</strong> Covers gaps in Original Medicare. Plan G and Plan N are the most popular. Rates vary by carrier, age, and tobacco status.
            </li>
            <li>
              <strong>Medicare Advantage (Part C):</strong> Replaces Original Medicare with an all-in-one plan. Many include prescription drug coverage, dental, vision, and hearing benefits.
            </li>
          </ul>
          <p>
            The right fit depends on your doctors, medications, and how you use healthcare. There's no single "best plan" for everyone in Wayne.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How to compare carriers without calling each one yourself
          </h2>
          <p className="mb-2">
            People tell me they're exhausted before they even pick a plan. You call one carrier, sit on hold, get a quote, then repeat that five more times. By the third call you can't remember what the first one said.
          </p>
          <p>
            That's exactly what I handle. One phone call with me covers every carrier I'm contracted with. I pull quotes, check your doctors' network status, and walk you through the tradeoffs in plain English.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Network disruptions happen, and they matter
          </h2>
          <p className="mb-2">
            Hospital systems and insurers renegotiate contracts every year. When a major health system drops a carrier, thousands of people scramble. If you're on a Medicare Advantage plan and your provider leaves the network mid-year, you need options fast.
          </p>
          <p>
            An independent broker monitors these changes. I'll help you understand whether switching makes sense and when you're eligible to do it.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Key enrollment dates Wayne residents should know
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Medigap Open Enrollment:</strong> 6 months starting the month you turn 65 and are enrolled in Part B. This is your best window for guaranteed acceptance and the lowest rates.
            </li>
            <li>
              <strong>Medicare Advantage/Part D Open Enrollment:</strong> October 15 through December 7 each year.
            </li>
            <li>
              <strong>New to Medicare?</strong> Start your research at least 6 months before your Part B effective date if you're considering a Supplement plan.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Get a free Medicare quote from Wayne, NJ
          </h2>
          <p className="mb-2">
            No pushy sales pitch. No obligation. Call me and I'll pull quotes from multiple carriers, answer your questions, and help you understand what you're actually paying for.
          </p>
          <p>
            If you're turning 65, retiring, or just frustrated with your current plan, one conversation can clear things up.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-6 text-center my-10">
          <p className="text-xl font-semibold mb-2">
            Talk to a local, independent Medicare broker today.
          </p>
          <p className="text-2xl font-bold mb-3">
            <a href="tel:8555591700" className="underline">
              855-559-1700
            </a>
          </p>
          <Link
            href="/quote"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Get a Free Quote
          </Link>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
                className="text-blue-600 hover:underline"
              >
                Medigap Plan G vs. Plan N: Which One Saves You More?
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
                href="/learn/how-to-sign-up-for-medicare"
                className="text-blue-600 hover:underline"
              >
                When to Enroll in Medicare: Deadlines That Cost You Money
              </Link>
            </li>
            <li>
              <Link
                href="/services/free-medicare-broker-new-jersey"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker in New Jersey: Statewide Independent Help
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}