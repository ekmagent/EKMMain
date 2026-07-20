import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare broker for people on disability | Free Guidance | MedicareYourself",
  description:
    "Medicare broker for people on disability — Anthony Orner helps under-65 SSDI recipients in NJ find Medigap or Advantage coverage. Free consultation.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-people-on-disability" },
  openGraph: {
    title:
      "medicare broker for people on disability | Free Guidance | MedicareYourself",
    description:
      "Medicare broker for people on disability — Anthony Orner helps under-65 SSDI recipients in NJ find Medigap or Advantage coverage. Free consultation.",
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
      name: "Medicare Broker for People on Disability",
      item: "https://medicareyourself.com/services/medicare-broker-for-people-on-disability",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for People on Disability: Navigating Under-65 Enrollment in NJ",
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
  mainEntityOfPage:
    "https://medicareyourself.com/services/medicare-broker-for-people-on-disability",
};

const faqs = [
  {
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. Medicare brokers are paid by the insurance carriers, not by you. My consultations are free, and there's no obligation to enroll in anything.",
  },
  {
    question:
      "When does Medicare start if I'm approved for SSDI?",
    answer:
      "Medicare coverage begins after you've received SSDI benefits for 24 months. Your Part A and Part B will start automatically at the 25th month. The clock starts from your disability onset date, not your approval date, so some people are closer to eligibility than they realize.",
  },
  {
    question:
      "Can I get a Medigap plan if I'm under 65 in New Jersey?",
    answer:
      "Yes. New Jersey requires Medigap carriers to offer policies to Medicare-eligible residents under 65 — and NJ caps what you pay: carriers cannot charge an under-65 enrollee more than the age-65 rate for the same plan. Enroll during your 6-month Medigap Open Enrollment window, which starts the month your Part B is active.",
  },
  {
    question:
      "What happens to my Medicare if I go back to work?",
    answer:
      "You can keep Medicare for at least 93 months (about 8.5 years) after returning to work under Social Security's Extended Period of Medicare Coverage. This gives you real room to test whether working is sustainable without losing healthcare.",
  },
];

export default function MedicareBrokerForPeopleOnDisability() {
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
          Medicare Broker for People on Disability
        </span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          Medicare Broker for People on Disability: Navigating Under-65 Enrollment in NJ
        </h1>

        <Image
          src="/images/medicare-broker-for-people-on-disability.webp"
          alt="medicare broker for people on disability"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
        />

        <p className="text-lg mb-2">
          A Medicare broker for people on disability can cut through the confusion that hits when you're under 65 and suddenly enrolled in a system designed for retirees. Most of the standard Medicare advice doesn't apply to your situation. I'm Anthony Orner, a licensed broker in New Jersey, and I help SSDI recipients figure out the right coverage without the stress.
        </p>

        <PhoneCTA />

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">
            How Medicare works when you qualify through SSDI
          </h2>
          <p className="mb-2">
            After 24 months of receiving Social Security Disability Insurance, you're automatically enrolled in Medicare Parts A and B. Part A (hospital coverage) is premium-free if you worked at least 10 years. Part B costs $202.90/month in 2026, deducted from your SSDI check.
          </p>
          <p>
            That automatic enrollment catches people off guard. One month your SSDI payment drops by $200 and nobody warned you. If that payment is $1,450 a month, that's a real hit. State programs like Medicaid or the Medicare Savings Program may cover your Part B premium depending on income. Call me and I'll check your eligibility.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">
            The 24-month waiting period and what counts
          </h2>
          <p className="mb-2">
            The 24-month clock starts at your disability onset date, not the date you got your approval letter. If your claim took two years to process, you may already qualify for Medicare the month your benefits begin. Back payments often overlap with the waiting period.
          </p>
          <p>
            This is one of the most misunderstood parts of disability Medicare. I've worked with people in NJ who didn't realize they were already in their Medigap enrollment window until it was almost too late.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">
            Medigap options for under-65 disability beneficiaries in New Jersey
          </h2>
          <p className="mb-2">
            New Jersey is one of the states that requires Medigap carriers to sell policies to Medicare-eligible people under 65. Even better, NJ caps the premium: an under-65 enrollee cannot be charged more than the age-65 rate for the same plan. Rates still vary significantly between companies, so comparing carriers matters.
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-2">
            <li>Your 6-month Medigap Open Enrollment starts when Part B kicks in</li>
            <li>During this window, carriers can't deny you or charge more for health conditions</li>
            <li>Missing this window means potential medical underwriting later</li>
            <li>Plan G and Plan N are the most common choices for under-65 enrollees</li>
          </ul>
          <p>
            I compare rates across every carrier available in your county so you don't overpay.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">
            Medicare Advantage vs. supplement plans for disability enrollees
          </h2>
          <p className="mb-2">
            Medicare Advantage plans bundle everything into one card and often include dental, vision, and gym memberships at no extra premium. For someone managing multiple specialists and chronic conditions, though, the network restrictions can be a real problem.
          </p>
          <p className="mb-2">
            A Medigap supplement paired with a standalone Part D drug plan gives you the widest access to doctors and hospitals. You pay a monthly premium, but you avoid surprise bills and referral hassles.
          </p>
          <p>
            There's no single right answer. It depends on your medications, your doctors, and how often you need care. That's exactly what I sort out for you.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">
            What daily life with disability Medicare actually looks like
          </h2>
          <p className="mb-2">
            You're managing pain, fatigue, appointments, and medications. The last thing you need is to spend hours comparing insurance plans while barely keeping up with the week. I hear from people on SSDI who say they're overwhelmed and afraid of choosing wrong.
          </p>
          <p>
            That fear is valid. A bad plan choice can mean losing access to a specialist or paying hundreds more per month than you should. My job is to take that weight off you. One call, and I handle the research and paperwork.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">
            Get free help choosing the right plan before your window closes
          </h2>
          <p className="mb-2">
            Your Medigap Open Enrollment window doesn't wait. Once it passes, your options shrink and your costs can rise. Whether you just got your SSDI approval or you've had Medicare for a while and feel like you picked the wrong plan, I can help.
          </p>
          <p>
            I work with SSDI recipients across New Jersey. The consultation is free. There's no obligation to enroll in anything. Just honest answers from someone who does this every day.
          </p>
        </section>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-10 mb-10 text-center">
          <p className="text-xl font-semibold mb-2">
            Talk to a broker who understands disability Medicare.
          </p>
          <p className="text-lg mb-4">
            Call{" "}
            <a
              href="tel:8555591700"
              className="text-blue-700 font-bold hover:underline"
            >
              855-559-1700
            </a>{" "}
            or{" "}
            <Link
              href="/contact"
              className="text-blue-700 font-bold hover:underline"
            >
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
                href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
                className="text-blue-700 hover:underline"
              >
                Medigap Plan G in New Jersey: Costs and Coverage
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-supplement/new-jersey/vs-medicare-advantage"
                className="text-blue-700 hover:underline"
              >
                Medicare Advantage vs. Medigap: Which Is Right for You?
              </Link>
            </li>
            <li>
              <Link
                href="/learn/irmaa-medicare-surcharge"
                className="text-blue-700 hover:underline"
              >
                Medicare Part B Premium in 2026: What You'll Pay
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-supplement/new-jersey/turning-65"
                className="text-blue-700 hover:underline"
              >
                Medigap Open Enrollment: Why the Window Matters
              </Link>
            </li>
                      <li>
              <Link
                href="/services/you-get-a-medicare-supplement-if-you-are-on-disability"
                className="text-blue-600 hover:underline"
              >
                You Get A Medicare Supplement If You Are On Disability
              </Link>
            </li>
            <li>
              <Link
                href="/services/best-medicare-supplement-for-people-on-disability"
                className="text-blue-600 hover:underline"
              >
                Best Medicare Supplement For People On Disability
              </Link>
            </li>
            <li>
              <Link
                href="/services/help-with-your-medicare-decision"
                className="text-blue-600 hover:underline"
              >
                Help With Your Medicare Decision
              </Link>
            </li>
</ul>
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/basics/get-started-with-medicare/medicare-basics/medicare-and-disability" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Medicare and Disability</a> and <a href="https://www.ssa.gov/benefits/disability/" rel="noopener noreferrer" target="_blank" className="underline">SSA — Disability Benefits</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased counseling.</div>
      </section>
      </article>
    </>
  );
}