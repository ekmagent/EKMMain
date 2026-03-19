import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "find a medicare agent in montclair nj | Free Local Help | MedicareYourself",
  description:
    "Find a medicare agent in Montclair NJ — Anthony Orner is a licensed independent broker comparing top carriers in Essex County. Free consultation, no pressure.",
  openGraph: {
    title:
      "find a medicare agent in montclair nj | Free Local Help | MedicareYourself",
    description:
      "Find a medicare agent in Montclair NJ — Anthony Orner is a licensed independent broker comparing top carriers in Essex County. Free consultation, no pressure.",
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
      name: "Find a Medicare Agent in Montclair NJ",
      item: "https://medicareyourself.com/services/find-a-medicare-agent-in-montclair-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Find a Medicare Agent in Montclair, NJ Who Works for You, Not One Carrier",
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
  datePublished: "2025-07-01",
  dateModified: "2025-07-01",
};

const faqs = [
  {
    question: "How do I pick a Medicare agent?",
    answer:
      "Look for a licensed, independent broker who represents multiple carriers rather than just one company. Ask how many plans they can compare, whether they charge a fee (they shouldn't - brokers are paid by the carriers), and whether they'll review your plan each year during Open Enrollment.",
  },
  {
    question: "Is there a cost to work with a Medicare broker in Montclair?",
    answer:
      "No. Independent Medicare brokers are paid by the insurance carriers, not by you. Your premium stays the same whether you enroll directly with a carrier or through a broker. The only difference is you get personalized help at no extra cost.",
  },
  {
    question: "What is the Medigap Open Enrollment Period?",
    answer:
      "Your Medigap Open Enrollment Period lasts 6 months, starting the month you turn 65 and are enrolled in Part B. During this window, carriers must accept you at standard rates with no health questions. After it closes, you may face medical underwriting and higher premiums.",
  },
  {
    question: "Can I meet with a Medicare agent in person in Montclair?",
    answer:
      "Yes. Anthony Orner meets with Montclair and Essex County clients by phone, Zoom, or in person. Call 855-559-1700 to schedule a time that works for you.",
  },
];

export default function FindMedicareAgentMontclairNJ() {
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
          Find a Medicare Agent in Montclair NJ
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Find a Medicare Agent in Montclair, NJ Who Works for You, Not One Carrier
      </h1>

      <Image
        src="/images/find-a-medicare-agent-in-montclair-nj.webp"
        alt="find a medicare agent in montclair nj"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Finding a Medicare agent in Montclair, NJ starts with knowing the difference between a captive agent tied to one carrier and an independent broker who compares plans across the market. Most people don't realize they have a choice.
      </p>
      <p className="text-lg mb-6">
        I'm Anthony Orner, a licensed independent Medicare broker serving Montclair and the rest of Essex County. I work with multiple carriers so you see real options, not a single company's pitch.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why Montclair residents choose an independent broker
        </h2>
        <p className="mb-2">
          A captive agent sells one company's plans. That's it. An independent broker like me is contracted with multiple carriers and can show you side-by-side comparisons.
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-2">
          <li>I compare rates from carriers like Aetna, Cigna, Mutual of Omaha, and others</li>
          <li>You pay the same premium whether you use a broker or enroll directly</li>
          <li>I re-shop your plan every year during Open Enrollment (October 15 through December 7)</li>
        </ul>
        <p>There's no fee. Carriers pay me, not you.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medigap and Advantage plans available in Essex County
        </h2>
        <p className="mb-2">
          Essex County has strong carrier competition, which means more plan choices and better pricing for you. The two main paths are Medicare Supplement (Medigap) and Medicare Advantage.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Medigap Plan G covers everything except the Part B deductible ($257/year in 2026)</li>
          <li>Medigap Plan N has lower premiums but adds small copays at the doctor</li>
          <li>Medicare Advantage plans bundle Part A, Part B, and often Part D into one plan with network rules</li>
        </ul>
        <p className="mt-2">
          Which path is right depends on your doctors, prescriptions, and budget. That's exactly what a free review covers.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How Anthony Orner helps Montclair clients compare rates
        </h2>
        <p className="mb-2">
          I pull real quotes from every carrier I'm contracted with and lay them out on one sheet. You see the monthly premium, the plan letter, and the carrier rating. No guesswork.
        </p>
        <p>
          If you're turning 65, your Medigap Open Enrollment Period is the 6-month window starting the month you're both 65 and enrolled in Part B. During that window, no carrier can reject you or charge more for health history. I typically have clients apply up to 6 months before their Part B start date to lock in the best rate early.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What to bring to your Medicare review
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Your Medicare card (red, white, and blue) or your Part B start date</li>
          <li>A list of current medications and dosages</li>
          <li>Names of your doctors and preferred hospitals</li>
        </ul>
        <p className="mt-2">
          That's enough for me to build an accurate comparison. The whole review takes about 20 minutes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Montclair is in Essex County's strongest coverage zone
        </h2>
        <p className="mb-2">
          Because Montclair sits in a densely populated part of northern New Jersey, carrier networks here are broad. Whether you prefer Hackensack Meridian, RWJBarnabas, or another system, most plans include access.
        </p>
        <p>
          That density also means more carriers compete for your business. Competition drives premiums down, and I make sure you benefit from it.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Schedule a free Medicare review - phone, Zoom, or in person
        </h2>
        <p className="mb-2">
          I meet with clients however works best. Most Montclair residents prefer Zoom or a quick phone call, but I'm happy to sit down in person too.
        </p>
        <p>
          Zero pressure, zero cost. If you don't change plans, that's fine. At least you'll know what's available.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center my-10">
        <p className="text-xl font-semibold mb-2">
          Ready to compare Medicare plans in Montclair?
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
            href="/get-a-free-quote"
            className="text-blue-700 font-bold hover:underline"
          >
            Get a Free Quote
          </Link>
        </p>
        <p className="text-sm text-gray-600">
          Anthony Orner - Licensed Medicare Broker serving Essex County, NJ
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-guides/medicare-supplement-plans-nj"
              className="text-blue-700 hover:underline"
            >
              Medicare Supplement Plans in NJ - Full Guide
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-plan-g-nj"
              className="text-blue-700 hover:underline"
            >
              Medicare Plan G in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-plans-nj"
              className="text-blue-700 hover:underline"
            >
              Medicare Advantage Plans in NJ
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-blue-700 hover:underline"
            >
              About Anthony Orner - Your Independent Medicare Broker
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}