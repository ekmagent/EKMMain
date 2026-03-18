import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "find a medicare agent in piscataway nj | Free Broker Help | MedicareYourself",
  description:
    "Find a Medicare agent in Piscataway, NJ who compares rates from every major carrier. Anthony Orner offers free, licensed broker guidance. Call today.",
  openGraph: {
    title:
      "find a medicare agent in piscataway nj | Free Broker Help | MedicareYourself",
    description:
      "Find a Medicare agent in Piscataway, NJ who compares rates from every major carrier. Anthony Orner offers free, licensed broker guidance. Call today.",
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
      name: "Find a Medicare Agent in Piscataway, NJ",
      item: "https://www.medicareyourself.com/services/find-a-medicare-agent-in-piscataway-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Find a Medicare Agent in Piscataway, NJ for Unbiased Plan Comparisons",
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
    question: "How much do Medicare agents charge?",
    answer:
      "Licensed Medicare agents are paid a commission by the insurance carrier you enroll with. You pay nothing for the service. My consultations, plan comparisons, and enrollment help are completely free to you.",
  },
  {
    question: "How to pick a Medicare agent?",
    answer:
      "Look for a broker who is independent, meaning they work with multiple carriers rather than just one. Ask if they are licensed in your state and whether they can show you both Medicare Supplement and Medicare Advantage options. An independent agent gives you a broader view of what is available.",
  },
  {
    question: "How do I speak to a live person at Medicare?",
    answer:
      "You can call 1-800-MEDICARE (1-800-633-4227), available 24/7. For help comparing plans and enrolling, you can also call a licensed broker like me at 855-559-1700 during business hours.",
  },
  {
    question: "Can a Medicare agent help me if I already have coverage?",
    answer:
      "Yes. If you are unhappy with your current plan or your rates increased, I can review your coverage and compare it to other options during the appropriate enrollment period. There is no cost for this review.",
  },
];

export default function FindMedicareAgentPiscatawayNJ() {
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
          Find a Medicare Agent in Piscataway, NJ
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Find a Medicare Agent in Piscataway, NJ for Unbiased Plan Comparisons
      </h1>

      <Image
        src="/images/find-a-medicare-agent-in-piscataway-nj.webp"
        alt="find a medicare agent in Piscataway NJ"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Finding a Medicare agent in Piscataway, NJ does not have to involve hours of phone calls and confusing paperwork. I'm Anthony Orner, a licensed independent Medicare broker who works with residents across Middlesex County. My job is to compare plans from every major carrier so you don't have to.
      </p>
      <p className="text-lg mb-6">
        There is no charge for my help. Carriers pay my commission, not you.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why an independent broker beats calling each carrier yourself
        </h2>
        <p className="mb-2">
          When you call a carrier directly, their representative can only show you that company's plans. An independent broker like me is contracted with 10+ carriers and can lay your options side by side in one conversation.
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-2">
          <li>One call replaces a dozen</li>
          <li>You see the full picture, not a sales pitch from one company</li>
          <li>I handle the enrollment paperwork for you</li>
        </ul>
        <p>
          The result: you pick the plan that fits your doctors, prescriptions, and budget rather than settling for whatever one carrier offers.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Top Medicare Supplement carriers serving Middlesex County
        </h2>
        <p className="mb-2">
          Piscataway falls in Middlesex County, and you have strong carrier options here. I regularly quote plans from Aetna, Cigna, Mutual of Omaha, United American, and others.
        </p>
        <p className="mb-2">
          Plan G is the most popular Medigap choice for people new to Medicare in 2026. It covers everything except the annual Part B deductible of $257. Rates vary by carrier, age, and tobacco status, so comparing across companies is where real savings happen.
        </p>
        <p>
          I can pull live rates for your specific zip code in minutes. Just call 855-559-1700.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Turning 65 in Piscataway? Here is your open enrollment timeline
        </h2>
        <p className="mb-2">
          Your Medigap Open Enrollment Period lasts six months. It starts the month you turn 65 and are enrolled in Part B. During this window, carriers must accept you at standard rates with no health questions.
        </p>
        <p className="mb-2">
          My practice is to have clients apply up to six months before their Part B start date. This locks in your rate early and protects you from premium increases before coverage begins. The sooner you lock in, the better your rate.
        </p>
        <p>
          Miss this window and you could face medical underwriting, which means higher premiums or even denial.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What to expect during a free consultation
        </h2>
        <p className="mb-2">
          I keep things simple. During our call or video meeting, I ask about your current doctors, any prescriptions, and what matters most to you - low premiums, low out-of-pocket costs, or something in between.
        </p>
        <p>
          Then I pull up real-time quotes and walk you through two or three strong options. No pressure, no hard sell. You decide on your timeline.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare Advantage vs. Medigap in Piscataway
        </h2>
        <p className="mb-2">
          Piscataway has competitive Medicare Advantage plans with $0 premiums and extra benefits like dental and vision. But these plans use provider networks and have annual out-of-pocket maximums that can reach several thousand dollars.
        </p>
        <p>
          Medicare Supplement plans cost more monthly but give you predictable costs and let you see any provider that accepts Medicare nationwide. I help you weigh both paths based on your health and budget.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Book a free phone or video consultation
        </h2>
        <p className="mb-2">
          Whether you are turning 65 next month or reviewing your current coverage, I am here to help. I serve Piscataway, Edison, New Brunswick, and all of Middlesex County.
        </p>
        <p>
          Call 855-559-1700 or schedule a video meeting at a time that works for you. There is zero cost and zero obligation.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center my-10">
        <p className="text-xl font-semibold mb-2">
          Ready to compare Medicare plans in Piscataway?
        </p>
        <p className="mb-4">
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
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-guides/medicare-supplement-plan-g-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plan G in NJ - Full Breakdown
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-vs-medigap"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage vs. Medigap - Which Is Right for You?
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
          <li>
            <Link
              href="/services/find-a-medicare-agent-in-edison-nj"
              className="text-blue-600 hover:underline"
            >
              Find a Medicare Agent in Edison, NJ
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}