import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare agents near me | Free Unbiased Plan Comparison | MedicareYourself",
  description:
    "Medicare agents near me — find an independent broker who compares every major carrier with no bias. Anthony Orner offers free, no-pressure consultations.",
  openGraph: {
    title:
      "medicare agents near me | Free Unbiased Plan Comparison | MedicareYourself",
    description:
      "Medicare agents near me — find an independent broker who compares every major carrier with no bias. Anthony Orner offers free, no-pressure consultations.",
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
      item: "https://medicareyourself.com/medicare",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Medicare Agents Near Me",
      item: "https://medicareyourself.com/services/medicare-agents-near-me",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Agents Near Me: What to Look for and How to Get Honest Help",
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
  mainEntityOfPage:
    "https://medicareyourself.com/services/medicare-agents-near-me",
};

const faqs = [
  {
    question: "Do Medicare agents charge a fee for their help?",
    answer:
      "No. Licensed Medicare agents and brokers are paid by insurance carriers, not by you. You pay $0 for consultations, plan comparisons, and enrollment assistance. Your premium stays the same whether you enroll directly or through an agent.",
  },
  {
    question: "What's the difference between a Medicare agent and a broker?",
    answer:
      "A captive agent represents one insurance company and can only show you that company's plans. An independent broker (like EasyKind Medicare) is contracted with multiple carriers and can compare plans across companies to find the best fit for your situation.",
  },
  {
    question: "How do I know if a Medicare agent is licensed?",
    answer:
      "Ask for their National Producer Number (NPN). You can verify any agent's license on your state's Department of Insurance website. A legitimate agent will share this information without hesitation.",
  },
  {
    question: "Can a Medicare agent help me switch plans?",
    answer:
      "Yes. During the Annual Enrollment Period (October 15 – December 7) or if you qualify for a Special Enrollment Period, a licensed agent can help you review your current coverage and switch to a plan that better fits your needs.",
  },
];

export default function MedicareAgentsNearMe() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/medicare" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">Medicare Agents Near Me</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Medicare Agents Near Me: What to Look for and How to Get Honest Help
      </h1>

      <Image
        src="/images/hub_medicare-agents-near-me.webp"
        alt="medicare agents near me"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        Medicare agents near me is one of the most common searches people make when they're turning 65 or losing employer coverage. The problem isn't finding an agent. It's finding one who actually works for you and not a single insurance company.
      </p>
      <p className="text-lg mb-6">
        Here's what separates a good Medicare agent from a bad one, and how to tell the difference before you sign anything.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Captive vs. independent agents — why it matters
        </h2>
        <p className="mb-2">
          A captive agent works for one insurance company. They can only show you that company's plans. If their carrier doesn't offer the best option for your prescriptions or doctors, you'll never hear about the one that does.
        </p>
        <p>
          An independent broker is contracted with multiple carriers. They compare Medicare Advantage, Medigap, and Part D plans across companies. Same enrollment, same premiums, zero bias.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What a good agent actually does for you
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Reviews your current prescriptions and checks formulary coverage across carriers</li>
          <li>Confirms your doctors are in-network before you enroll</li>
          <li>Explains the real cost differences between Medicare Advantage and Medigap</li>
          <li>Walks you through the 2026 Part B premium ($202.90/month) and Part A deductible ($1,676 per benefit period) so you understand what Original Medicare doesn't cover</li>
          <li>Follows up after enrollment if you have billing issues or need to switch plans</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Red flags to watch for when choosing an agent
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>They push one plan hard</strong> without asking about your medications or providers</li>
          <li><strong>They won't share their NPN</strong> (National Producer Number) so you can verify their license</li>
          <li><strong>They create false urgency</strong> outside of a real enrollment window</li>
          <li><strong>They claim their help has a fee.</strong> Licensed agents are paid by carriers. You pay $0</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How to verify any agent's license
        </h2>
        <p className="mb-2">
          Every licensed Medicare agent has an NPN. Ask for it. Then check it on your state's Department of Insurance website or at <a href="https://nipr.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">nipr.com</a>.
        </p>
        <p>
          If someone avoids this question, walk away.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          When you should talk to an agent
        </h2>
        <p className="mb-2">
          The best time is 2-3 months before you turn 65. Your Medigap Open Enrollment Period starts the month you're 65 and enrolled in Part B, and lasts six months. During that window, carriers can't deny you or charge more for pre-existing conditions.
        </p>
        <p>
          Already on Medicare? The Annual Enrollment Period runs October 15 through December 7. That's your yearly window to compare plans and switch if your current coverage isn't working.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Work with a licensed independent broker at no cost
        </h2>
        <p className="mb-2">
          I'm Anthony Orner, a licensed independent Medicare broker with EasyKind Medicare. I compare plans from every major carrier and give you a straight answer about what fits your situation.
        </p>
        <p>
          No pressure, no sales pitch, no cost to you. Call or schedule a time that works.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center my-10">
        <p className="text-xl font-semibold mb-2">
          Ready for an honest plan comparison?
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/quote" className="underline font-bold">
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
              href="/medicare/medicare-advantage-vs-medigap"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage vs. Medigap: Which Is Right for You?
            </Link>
          </li>
          <li>
            <Link
              href="/medicare/medigap-open-enrollment"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment: When and Why It Matters
            </Link>
          </li>
          <li>
            <Link
              href="/medicare/part-b-enrollment"
              className="text-blue-600 hover:underline"
            >
              Part B Enrollment: Deadlines and Late Penalties
            </Link>
          </li>
          <li>
            <Link
              href="/services/free-medicare-consultation"
              className="text-blue-600 hover:underline"
            >
              Schedule a Free Medicare Consultation
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}