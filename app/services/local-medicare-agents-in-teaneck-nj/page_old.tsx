import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "local medicare agents in teaneck nj | Free Consultation | MedicareYourself",
  description:
    "Local Medicare agents in Teaneck NJ — Anthony Orner is a licensed independent broker serving Bergen County. Compare plans free. No pressure, no sales pitch.",
  openGraph: {
    title:
      "local medicare agents in teaneck nj | Free Consultation | MedicareYourself",
    description:
      "Local Medicare agents in Teaneck NJ — Anthony Orner is a licensed independent broker serving Bergen County. Compare plans free. No pressure, no sales pitch.",
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
      name: "Local Medicare Agents in Teaneck NJ",
      item: "https://medicareyourself.com/services/local-medicare-agents-in-teaneck-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Local Medicare Agents in Teaneck, NJ — Licensed Help Without the Sales Pitch",
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
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
};

const faqs = [
  {
    question: "How to pick a Medicare agent?",
    answer:
      "Look for an independent, licensed broker who represents multiple carriers rather than just one company. Ask if they charge you anything (they shouldn't - agents are paid by the insurance carriers). Confirm they're licensed in New Jersey and ask how many Medicare clients they currently serve in Bergen County.",
  },
  {
    question: "Do I need an agent to get Medicare?",
    answer:
      "You don't need an agent to enroll in Original Medicare (Parts A and B) - that happens through Social Security. But when choosing a Medicare Supplement (Medigap) plan, Medicare Advantage plan, or Part D drug plan, an independent broker can compare options across carriers at no cost to you. The plans and premiums are the same whether you use an agent or enroll directly.",
  },
  {
    question: "How do I speak to a live person at Medicare?",
    answer:
      "You can call 1-800-MEDICARE (1-800-633-4227), available 24/7. TTY users can call 1-877-486-2048. However, Medicare representatives can only explain your benefits - they cannot compare private plan options or recommend specific Medigap or Advantage plans. For plan comparisons, a licensed broker is a better resource.",
  },
  {
    question: "Is there a cost to work with a Medicare agent in Teaneck?",
    answer:
      "No. Licensed Medicare agents are compensated directly by the insurance carriers. You pay the same premium whether you enroll through an agent, online, or by calling the carrier. There is zero added cost for using a broker's services.",
  },
];

export default function LocalMedicareAgentsTeaneckNJ() {
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
          Local Medicare Agents in Teaneck NJ
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Local Medicare Agents in Teaneck, NJ — Licensed Help Without the Sales Pitch
      </h1>

      <Image
        src="/images/local-medicare-agents-in-teaneck-nj.webp"
        alt="local medicare agents in Teaneck NJ"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Local Medicare agents in Teaneck, NJ give you something a 1-800 number
        can't: someone who knows the carriers, the doctors, and the hospital
        networks in Bergen County. I'm Anthony Orner, an independent licensed
        broker, and I help Teaneck residents compare Medicare plans without
        pressure or a hard sell.
      </p>
      <p className="text-lg mb-6">
        My consultations are free. The premiums you pay are identical whether
        you use a broker or go direct.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Why Teaneck residents work with an independent broker
        </h2>
        <p className="mb-2">
          Teaneck is a diverse community with a wide range of healthcare needs.
          A captive agent tied to one carrier will only show you that carrier's
          plans. An independent broker like me represents multiple insurance
          companies, so I can lay options side-by-side and let you choose.
        </p>
        <p>
          No quotas. No preferred carrier. Just an honest comparison based on
          your doctors, prescriptions, and budget.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare Supplement vs. Advantage: what sells most in Bergen County
        </h2>
        <p className="mb-2">
          Both plan types are popular here, but they work very differently.
          Medicare Supplement (Medigap) plans like Plan G cover your cost-sharing
          under Original Medicare. In 2026, the Part B deductible is $257/year -
          that's all you'd pay out-of-pocket with Plan G on top of your premium.
        </p>
        <p>
          Medicare Advantage (Part C) bundles everything into one plan, often
          with $0 premiums and added dental or vision. The tradeoff is network
          restrictions. Bergen County has strong Advantage options, but whether
          they fit depends on which hospitals and specialists you use.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          What to ask before you hire a Medicare agent
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Are you licensed to sell Medicare plans in New Jersey?</li>
          <li>How many carriers do you represent? (More is better.)</li>
          <li>Do you charge any fees? (The answer should always be no.)</li>
          <li>Can you help me during Annual Enrollment (October 15 - December 7) and year-round for Medigap?</li>
          <li>Will you be available after enrollment if I have a claims issue?</li>
        </ul>
        <p className="mt-3">
          If an agent dodges any of these, find a different one.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Know your enrollment windows
        </h2>
        <p className="mb-2">
          Your Medigap Open Enrollment Period lasts 6 months, starting the month
          you turn 65 and are enrolled in Part B. During this window, carriers
          cannot deny you or charge more based on health conditions. Miss it, and
          you may face medical underwriting.
        </p>
        <p>
          For Medicare Advantage and Part D, Annual Enrollment runs October 15
          through December 7 each year. I track all of these dates for my
          clients so nothing slips through the cracks.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Cost numbers you should know for 2026
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Part B premium: $185/month</li>
          <li>Part B deductible: $257/year</li>
          <li>Part A hospital deductible: $1,676 per benefit period</li>
          <li>Skilled nursing coinsurance (days 21-100): $209.50/day</li>
          <li>Part B late enrollment penalty: 10% for every 12 months you delayed</li>
        </ul>
        <p className="mt-3">
          These costs add up fast without a Supplement or Advantage plan
          covering the gaps.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Schedule a free phone or in-person consultation
        </h2>
        <p className="mb-2">
          I meet Teaneck and Bergen County residents by phone, video, or in
          person - whatever is easiest for you. We'll review your current
          coverage, check whether your doctors are in-network, and compare
          premiums across carriers.
        </p>
        <p>
          No obligation. No cost. Call 855-559-1700 to set up a time that works
          for your schedule.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-8 text-center">
        <p className="text-xl font-bold mb-2">
          Ready to compare Medicare plans in Teaneck?
        </p>
        <p className="mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-semibold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/contact" className="underline font-semibold">
            Get a Free Quote
          </Link>
        </p>
      </div>

      <section className="mt-12">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-guides/medicare-supplement-plan-g-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plan G in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-plans-bergen-county"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage Plans in Bergen County
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medigap-open-enrollment-nj"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-part-b-enrollment"
              className="text-blue-600 hover:underline"
            >
              Medicare Part B Enrollment Guide
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}