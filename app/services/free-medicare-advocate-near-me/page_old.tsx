import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "free medicare advocate near me | No-Cost Licensed NJ Broker | MedicareYourself",
  description:
    "Free Medicare advocate near you in New Jersey. Anthony Orner is a licensed independent broker who compares plans at no cost. Schedule a free consultation.",
  openGraph: {
    title:
      "free medicare advocate near me | No-Cost Licensed NJ Broker | MedicareYourself",
    description:
      "Free Medicare advocate near you in New Jersey. Anthony Orner is a licensed independent broker who compares plans at no cost. Schedule a free consultation.",
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
      name: "Free Medicare Advocate Near Me",
      item: "https://www.medicareyourself.com/services/free-medicare-advocate-near-me",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Free Medicare Advocate Near You in New Jersey",
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
  datePublished: "2025-07-15",
  dateModified: "2025-07-15",
};

const faqs = [
  {
    question: "Does Medicare pay for advocates?",
    answer:
      "Medicare itself doesn't pay for patient advocates. However, independent Medicare brokers like Anthony Orner provide free plan comparison and enrollment help. Brokers are compensated by insurance carriers, not by you. Some states also fund SHIP (State Health Insurance Assistance Program) counselors who offer free Medicare guidance.",
  },
  {
    question:
      "Can a Social Security office help with Medicare questions?",
    answer:
      "Social Security offices handle Medicare enrollment and premium billing, but they don't compare plans or recommend coverage. For help choosing between Medicare Advantage, Medigap, or Part D plans, you need a licensed broker or a SHIP counselor who can review your specific doctors, prescriptions, and budget.",
  },
  {
    question:
      "What's the difference between a Medicare advocate and a Medicare broker?",
    answer:
      "A Medicare advocate broadly refers to anyone who helps you with Medicare decisions. A licensed Medicare broker is a specific type of advocate who holds a state insurance license, is certified by Medicare carriers, and can actually enroll you in plans. An independent broker works with multiple carriers and isn't tied to one company.",
  },
  {
    question: "Is there really no cost for a Medicare broker's help?",
    answer:
      "Correct. Licensed Medicare brokers are paid commissions by insurance carriers when you enroll in a plan. You pay the same premium whether you use a broker or enroll directly. There's no fee, no markup, and no obligation.",
  },
];

export default function FreeMedicareAdvocateNearMe() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        {" > "}
        <Link href="/medicare-guides" className="hover:underline">
          Medicare Guides
        </Link>
        {" > "}
        <span className="text-gray-700">Free Medicare Advocate Near Me</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Free Medicare Advocate Near You in New Jersey
      </h1>

      <Image
        src="/images/free-medicare-advocate-near-me.webp"
        alt="free medicare advocate near me"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        Free Medicare advocate help is closer than you think. I'm Anthony Orner, a licensed independent Medicare broker based in New Jersey, and I help people compare plans, check doctor networks, and enroll in coverage without charging a dime.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        You shouldn't have to figure out Medicare alone, especially when the wrong plan choice can cost you thousands.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What a Medicare advocate does vs. what a broker does
        </h2>
        <p className="text-gray-700 mb-2">
          "Medicare advocate" isn't a regulated title. It could mean a volunteer SHIP counselor, a hospital social worker, or a paid service that charges you by the hour.
        </p>
        <p className="text-gray-700 mb-2">
          A licensed Medicare broker does the same advocacy work but can also enroll you directly. I hold a New Jersey insurance license, I'm certified with major carriers each year, and I can pull up real-time plan data for your zip code, doctors, and prescriptions.
        </p>
        <p className="text-gray-700">
          That's the practical difference: I don't just explain your options. I execute them.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why my help is 100% free to you
        </h2>
        <p className="text-gray-700 mb-2">
          Insurance carriers pay brokers a commission when you enroll through them. Your premium stays exactly the same whether you call the carrier yourself or work with me. There's no fee, no hidden charge, and no obligation.
        </p>
        <p className="text-gray-700">
          I get paid to do the legwork. You get a plan that actually fits.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How an independent advocate finds unbiased plan options
        </h2>
        <p className="text-gray-700 mb-2">
          "Independent" means I'm not captive to one insurance company. I compare plans across multiple carriers so I can show you what genuinely works for your situation. That includes:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-2">
          <li>Medicare Advantage plans (HMO, PPO, DSNP)</li>
          <li>Medigap/Medicare Supplement policies (Plans G, N, and others)</li>
          <li>Part D prescription drug coverage</li>
        </ul>
        <p className="text-gray-700">
          I've seen people pick a $0-premium Advantage plan that looked great on paper, then get hit with out-of-network costs and surprise copays. The details matter more than the sticker price.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What I check before recommending any plan
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Whether your current doctors are in-network</li>
          <li>Your prescription drug costs under each plan's formulary</li>
          <li>Total out-of-pocket exposure, not just the monthly premium</li>
          <li>Whether you travel or split time between states</li>
          <li>Upcoming procedures or specialist referrals you're planning</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Key numbers to know for 2026
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Part B premium: $202.90/month</li>
          <li>Part B deductible: $283/year</li>
          <li>Part A hospital deductible: $1,676 per benefit period</li>
          <li>Medicare Advantage and Part D Open Enrollment: October 15 through December 7</li>
          <li>Medigap Open Enrollment: 6 months starting the month you turn 65 and are enrolled in Part B</li>
        </ul>
        <p className="text-gray-700 mt-2">
          Miss your Medigap open enrollment window and carriers can charge higher rates or deny coverage based on health history. That's one of the biggest mistakes I help people avoid.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Schedule a free Medicare advocacy session today
        </h2>
        <p className="text-gray-700 mb-2">
          One phone call. I'll review your current coverage, check your doctors and medications, and show you what's available in your area. If your current plan is already the best fit, I'll tell you that too.
        </p>
        <p className="text-gray-700">
          No pressure, no sales pitch. Just clear answers from someone who does this every day in New Jersey.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Talk to a licensed Medicare advocate for free
        </p>
        <p className="text-2xl font-bold mb-4">
          <a href="tel:8555591700" className="underline">
            855-559-1700
          </a>
        </p>
        <Link
          href="/get-a-free-quote"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Get a Free Quote
        </Link>
      </div>

      <section className="mt-12">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Related resources
        </h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-vs-medigap"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage vs. Medigap: Which Is Right for You?
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
              href="/services/medicare-broker-near-me"
              className="text-blue-600 hover:underline"
            >
              Find a Medicare Broker Near You in NJ
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-part-b-enrollment"
              className="text-blue-600 hover:underline"
            >
              Medicare Part B Enrollment: What You Need to Know
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}