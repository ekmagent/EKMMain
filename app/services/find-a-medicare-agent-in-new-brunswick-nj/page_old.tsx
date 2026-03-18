import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "find a medicare agent in new brunswick nj | Free Local Guidance | MedicareYourself",
  description:
    "Find a Medicare agent in New Brunswick NJ who compares plans from every top carrier. Anthony Orner provides free, licensed guidance. Schedule a call today.",
  openGraph: {
    title:
      "find a medicare agent in new brunswick nj | Free Local Guidance | MedicareYourself",
    description:
      "Find a Medicare agent in New Brunswick NJ who compares plans from every top carrier. Anthony Orner provides free, licensed guidance. Schedule a call today.",
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
      name: "Find a Medicare Agent in New Brunswick NJ",
      item: "https://www.medicareyourself.com/services/find-a-medicare-agent-in-new-brunswick-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Find a Medicare Agent in New Brunswick, NJ for Unbiased Plan Advice",
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
    question: "How to pick a Medicare agent?",
    answer:
      "Look for a licensed, independent broker who represents multiple carriers rather than just one company. Ask if they charge a fee (they shouldn't - brokers are paid by the insurance carriers, not you). Confirm they're licensed in New Jersey, and check that they can compare both Medicare Supplement and Medicare Advantage plans so you see all your options.",
  },
  {
    question: "How do I speak to a live person at Medicare?",
    answer:
      "You can call 1-800-MEDICARE (1-800-633-4227), available 24/7. However, Medicare representatives explain your benefits - they don't compare private insurance plans or recommend specific coverage. For plan comparisons in New Brunswick, a local independent broker can walk you through your choices side by side at no cost.",
  },
  {
    question: "Is there a fee to work with a Medicare agent in New Brunswick?",
    answer:
      "No. Licensed Medicare brokers are compensated by the insurance carriers when you enroll. You pay the same premium whether you use a broker or go directly to the carrier. There's no markup, no hidden charge, and no obligation.",
  },
  {
    question: "When should I contact a Medicare agent before turning 65?",
    answer:
      "Reach out about six months before your 65th birthday. If you're considering a Medigap plan, applying up to six months before your Part B start date can lock in a lower rate. Your Medigap Open Enrollment Period begins the month you turn 65 and are enrolled in Part B, lasting six months with guaranteed issue rights.",
  },
];

export default function FindMedicareAgentNewBrunswickNJ() {
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
          Find a Medicare Agent in New Brunswick NJ
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Find a Medicare Agent in New Brunswick, NJ for Unbiased Plan Advice
      </h1>

      <Image
        src="/images/find-a-medicare-agent-in-new-brunswick-nj.webp"
        alt="find a medicare agent in new brunswick nj"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Finding a Medicare agent in New Brunswick, NJ doesn't have to be complicated. New Brunswick sits in Middlesex County with a mix of retirees, Rutgers University employees aging into Medicare, and residents who simply want clear answers about their coverage options.
      </p>
      <p className="text-lg mb-6">
        I'm Anthony Orner, a licensed independent Medicare broker serving central New Jersey. I compare plans from every major carrier so you don't have to guess. My help is free - always.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What makes an independent broker different in New Brunswick
        </h2>
        <p className="mb-2">
          A captive agent works for one insurance company. They sell that company's plans and nothing else. An independent broker like me is contracted with multiple carriers, so I can lay your options side by side.
        </p>
        <p>
          You get the same premium either way. The carrier pays my commission, not you. The only difference is how many plans you actually get to compare before deciding.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Supplement vs. Advantage: which plans fit Middlesex County residents
        </h2>
        <p className="mb-2">
          Medicare Supplement (Medigap) plans pay after Original Medicare. You keep your freedom to see any doctor who accepts Medicare nationwide. Plan G is the most popular option in New Jersey - it covers everything except the $257 annual Part B deductible.
        </p>
        <p className="mb-2">
          Medicare Advantage bundles Part A, Part B, and usually Part D into one plan. Many have $0 premiums and include dental, vision, and hearing. The tradeoff is a provider network and prior authorizations.
        </p>
        <p>
          Which one works better depends on your doctors, medications, and budget. That's exactly what a free review with me sorts out.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why timing matters for Medigap applicants
        </h2>
        <p className="mb-2">
          Your Medigap Open Enrollment Period lasts six months. It starts the month you turn 65 and are enrolled in Part B. During this window, no carrier can deny you or charge more based on health history.
        </p>
        <p>
          My practice is to have clients apply up to six months before their Part B start date. This locks in a rate early and protects you from potential premium increases before coverage actually begins. The sooner you lock in, the better your rate.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Key enrollment dates New Brunswick residents should know
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Initial Enrollment Period:</strong> 3 months before your 65th birthday, your birthday month, and 3 months after.
          </li>
          <li>
            <strong>Medicare Advantage / Part D Open Enrollment:</strong> October 15 through December 7 each year.
          </li>
          <li>
            <strong>Medigap Open Enrollment:</strong> 6-month window starting the month you're both 65+ and enrolled in Part B.
          </li>
          <li>
            <strong>Part B late enrollment penalty:</strong> 10% added to your premium for every 12 months you delayed without qualifying coverage.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What to expect during a free plan review
        </h2>
        <p className="mb-2">
          I'll ask about your current doctors, prescriptions, and how often you travel. Then I run a comparison across carriers. The whole call usually takes 20 to 30 minutes.
        </p>
        <p>
          No pressure, no obligation. If the plan you already have is the best fit, I'll tell you that.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Book a free Medicare review with Anthony Orner
        </h2>
        <p className="mb-2">
          Whether you're turning 65 this year or already on Medicare and want to double-check your coverage, I'm here to help. I serve New Brunswick, the rest of Middlesex County, and all of New Jersey.
        </p>
        <p>
          Call <strong>855-559-1700</strong> or schedule online. There's zero cost and zero commitment.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center mb-10">
        <p className="text-xl font-semibold mb-2">
          Ready to compare Medicare plans in New Brunswick?
        </p>
        <p className="mb-4">
          Call{" "}
          <a
            href="tel:855-559-1700"
            className="underline font-bold text-white"
          >
            855-559-1700
          </a>{" "}
          for a free, no-obligation consultation.
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
              href="/services/medicare-agent-middlesex-county-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Agent in Middlesex County, NJ
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
              href="/medicare-guides/medicare-advantage-vs-medigap"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage vs. Medigap
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medigap-open-enrollment-nj"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment in NJ
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}