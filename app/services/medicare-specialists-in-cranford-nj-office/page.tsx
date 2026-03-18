import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare specialists in cranford, nj office | Free Local Help | MedicareYourself",
  description:
    "Medicare specialists in Cranford, NJ — Anthony Orner is a licensed independent broker serving Union County. Compare plans across carriers. Free consultation.",
  openGraph: {
    title:
      "medicare specialists in cranford, nj office | Free Local Help | MedicareYourself",
    description:
      "Medicare specialists in Cranford, NJ — Anthony Orner is a licensed independent broker serving Union County. Compare plans across carriers. Free consultation.",
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
      name: "Medicare Specialists in Cranford, NJ Office",
      item: "https://www.medicareyourself.com/services/medicare-specialists-in-cranford-nj-office",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Specialists in Cranford, NJ: Licensed Broker Serving Union County",
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
  mainEntityOfPage:
    "https://www.medicareyourself.com/services/medicare-specialists-in-cranford-nj-office",
};

const faqs = [
  {
    question:
      "Does it cost anything to work with a Medicare specialist in Cranford?",
    answer:
      "No. Licensed Medicare brokers are paid by the insurance carriers, not by you. There is no fee for consultations, plan comparisons, or enrollment assistance.",
  },
  {
    question:
      "What is the difference between a Medicare specialist and a general insurance agent?",
    answer:
      "A Medicare specialist focuses exclusively on Medicare coverage options like Supplement plans, Advantage plans, and Part D. A general agent may sell auto, home, and other insurance lines and may not stay current on annual Medicare changes.",
  },
  {
    question: "Can I meet with a broker in person near Cranford?",
    answer:
      "Yes. Anthony Orner serves Union County and the Cranford area and is available for in-person meetings, phone calls, or video consultations. Call 855-559-1700 to set up an appointment.",
  },
  {
    question: "When should I contact a Medicare specialist before turning 65?",
    answer:
      "Ideally, reach out at least 6 months before your Part B start date. This gives you time to compare plans and, if you choose a Medigap policy, lock in your rate early during your Open Enrollment Period.",
  },
];

export default function MedicareSpecialistsCranfordNJ() {
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
          Medicare Specialists in Cranford, NJ Office
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Medicare Specialists in Cranford, NJ: Licensed Broker Serving Union
        County
      </h1>

      <Image
        src="/images/medicare-specialists-in-cranford-nj-office.webp"
        alt="Medicare specialists in Cranford, NJ office"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Medicare specialists in Cranford, NJ help you cut through the confusion
        of plan choices so you pick coverage that actually fits your doctors,
        prescriptions, and budget. I'm Anthony Orner, a licensed independent
        broker serving Union County residents.
      </p>
      <p className="mb-6">
        Whether you're turning 65 or reviewing a plan that no longer works, I
        compare options across multiple carriers at no cost to you.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why Cranford residents choose an independent Medicare specialist
        </h2>
        <p className="mb-2">
          Cranford is a tight-knit Union County town with a walkable downtown and
          easy train access to New York City. Residents here expect
          straightforward advice, not a sales pitch.
        </p>
        <p>
          As an independent broker, I'm not tied to one carrier. That means I
          show you plans from multiple insurers side by side and let you decide.
          There is zero cost for my help because carriers pay me directly.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Supplement and Advantage plans available in the Cranford area
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Medicare Supplement (Medigap):</strong> Plan G and Plan N are
            the most popular options in New Jersey. Plan G covers everything
            Original Medicare doesn't except the Part B deductible ($257/year in
            2026).
          </li>
          <li>
            <strong>Medicare Advantage (Part C):</strong> Several HMO and PPO
            plans operate in the 07016 zip code, some with $0 premiums and added
            dental, vision, and hearing benefits.
          </li>
          <li>
            <strong>Part D prescription drug plans:</strong> Formularies change
            each year. I review your medications against current plan formularies
            to find the lowest annual cost.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Locking in your Medigap rate before Part B starts
        </h2>
        <p className="mb-2">
          Your Medigap Open Enrollment Period lasts 6 months, starting the month
          you turn 65 and are enrolled in Part B. During this window, insurers
          cannot deny you or charge more based on health history.
        </p>
        <p>
          My practice is to have clients apply up to 6 months before their Part B
          start date. This locks in the rate early and protects you from premium
          increases before coverage even begins. The sooner you lock in, the
          better your rate.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How to meet with a broker by phone, video, or in person
        </h2>
        <p className="mb-2">
          I work around your schedule. Pick whatever format is easiest:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Phone:</strong> Call 855-559-1700 for a quick plan review.
          </li>
          <li>
            <strong>Video:</strong> A Zoom session lets us screen-share plan
            comparisons in real time.
          </li>
          <li>
            <strong>In person:</strong> I meet Cranford and Union County clients
            locally. Just call to arrange a time and place.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Key Medicare dates to know in 2026
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Medicare Advantage and Part D Open Enrollment: October 15 through
            December 7
          </li>
          <li>
            Part B monthly premium: $185/month
          </li>
          <li>
            Part A deductible: $1,676 per benefit period
          </li>
          <li>
            Late enrollment penalty for Part B: 10% for every 12-month period you
            delayed
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Schedule a free Medicare review for Cranford, NJ
        </h2>
        <p className="mb-2">
          A 15-minute call is usually all it takes to see if there's a better
          plan for you. I'll ask about your doctors, pharmacy preferences, and
          prescription list, then show you the options that match.
        </p>
        <p>
          No obligation. No pressure. Just clear answers from a licensed broker
          who knows Union County.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center mb-10">
        <p className="text-xl font-bold mb-2">
          Ready to compare Medicare plans in Cranford?
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
              Medicare Advantage Plans in NJ
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/plan-g-vs-plan-n"
              className="text-blue-600 hover:underline"
            >
              Plan G vs Plan N: Which Is Right for You?
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
  );
}