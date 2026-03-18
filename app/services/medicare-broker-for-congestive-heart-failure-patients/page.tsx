import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for congestive heart failure patients | Free Plan Review | MedicareYourself",
  description:
    "Medicare broker for congestive heart failure patients in NJ. Anthony Orner finds plans covering cardiac rehab, meds, and hospital stays. Free consultation.",
  openGraph: {
    title:
      "Medicare broker for congestive heart failure patients | Free Plan Review | MedicareYourself",
    description:
      "Medicare broker for congestive heart failure patients in NJ. Anthony Orner finds plans covering cardiac rehab, meds, and hospital stays. Free consultation.",
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
      name: "Medicare Broker for Congestive Heart Failure Patients",
      item: "https://www.medicareyourself.com/services/medicare-broker-for-congestive-heart-failure-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Congestive Heart Failure Patients Who Refuse to Accept Coverage Gaps",
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
    question: "Can you get Medicare if you have congestive heart failure?",
    answer:
      "Yes. Medicare does not deny coverage based on pre-existing conditions like CHF. If you're 65 or older, or qualify through disability, you're eligible for Original Medicare (Parts A and B). During your Medigap Open Enrollment Period - the 6 months starting when you turn 65 and have Part B - you can also enroll in a Medicare Supplement plan with no health questions asked.",
  },
  {
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. Licensed Medicare brokers like Anthony are paid by the insurance carriers, not by you. There's no fee, no markup, and no difference in plan pricing whether you use a broker or enroll on your own. You get free plan comparisons and ongoing support at no cost.",
  },
  {
    question:
      "Does Medicare cover cardiac rehabilitation for heart failure patients?",
    answer:
      "Medicare Part B covers cardiac rehabilitation programs when ordered by a doctor. You'll typically pay 20% of the Medicare-approved amount after your $283 annual Part B deductible. A Medigap plan like Plan G covers that 20%, so your out-of-pocket cost for cardiac rehab drops to zero after the deductible.",
  },
  {
    question:
      "What's better for CHF patients - Medigap or Medicare Advantage?",
    answer:
      "It depends on your situation, but CHF patients with frequent hospitalizations and specialist visits often benefit from Medigap (especially Plan G) paired with a standalone Part D drug plan. This combination has no network restrictions and no prior authorization for most services. Call Anthony at 855-559-1700 to compare both options side by side for free.",
  },
];

export default function MedicareBrokerForCongestiveHeartFailurePatients() {
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
          Medicare Broker for Congestive Heart Failure Patients
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Medicare Broker for Congestive Heart Failure Patients Who Refuse to Accept Coverage Gaps
      </h1>

      <Image
        src="/images/medicare-broker-for-congestive-heart-failure-patients.webp"
        alt="Medicare broker for congestive heart failure patients"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        A Medicare broker for congestive heart failure patients does one thing most agents won't: look at your actual medical reality before recommending a plan. The breathlessness, the daily weigh-ins, the cardiologist visits every few weeks, the medications that keep changing - your coverage needs to match all of it, not just check a box.
      </p>
      <p className="text-lg mb-6">
        I'm Anthony Orner, a licensed Medicare broker in New Jersey. I help CHF patients find plans that cover what they actually use - not what looks good on paper.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          The real cost of CHF: hospitalizations, medications, and monitoring
        </h2>
        <p className="mb-3">
          Heart failure is expensive to manage. A single hospitalization can run well into six figures. The Part A deductible alone is $1,676 per benefit period in 2026 - and CHF patients often have multiple benefit periods in a single year.
        </p>
        <p className="mb-3">
          Then there are the medications. Entresto, Lasix, ACE inhibitors, beta-blockers. Formularies change every year. One client's Tier 2 drug became Tier 5 overnight - that's the difference between $15 and $200+ per fill.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Why most Medicare plans fall short for heart failure patients
        </h2>
        <p className="mb-3">
          Most plan comparisons look at premiums and star ratings. They don't account for how often you'll actually use the plan. With CHF, you're not a "maybe I'll need it" enrollee. You're using the system constantly.
        </p>
        <ul className="list-disc pl-6 mb-3 space-y-2">
          <li>Prior authorizations that delay cardiac rehab</li>
          <li>Network restrictions that block your cardiologist</li>
          <li>Hospital copays that stack up with each readmission</li>
          <li>Part D plans that don't cover your specific drug regimen</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Medigap vs. Medicare Advantage when you have CHF
        </h2>
        <p className="mb-3">
          Medicare Advantage plans cap your out-of-pocket spending and often include extras like transportation and gym memberships. But they come with networks, referrals, and prior authorizations - all friction points when you need fast access to care.
        </p>
        <p className="mb-3">
          Medigap Plan G with a standalone Part D plan costs more monthly but eliminates surprises. After the $283 Part B deductible, Plan G covers 100% of Medicare-approved costs. No copays at the cardiologist. No hospital bills after surgery. No network to worry about.
        </p>
        <p className="mb-3">
          One person with a massive cardiac event paid about $257 for their Part B deductible and monthly premiums on Plan G. The total bill was over a million dollars. That's the difference the right plan makes.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          How Anthony matches CHF patients with plans that actually work
        </h2>
        <p className="mb-3">
          I start with your medication list, your doctors, and your recent hospital history. Not a sales script. I run your drugs through every available Part D formulary to find the lowest annual cost. Then I match that with the right Medigap or Advantage plan based on how you actually use healthcare.
        </p>
        <p className="mb-3">
          If you're in NJ, I know which carriers have the best rates and which health systems - RWJBarnabas, Hackensack Meridian, Cooper - your plan needs to include.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Your Medigap open enrollment window matters more than you think
        </h2>
        <p className="mb-3">
          If you're turning 65, you have a one-time, 6-month Medigap Open Enrollment Period starting the month you're 65 and enrolled in Part B. During this window, no carrier can deny you or charge more because of CHF. Miss it, and you may face medical underwriting - which is a real problem with a heart failure diagnosis on your record.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Your diagnosis changed your life - your coverage should keep up
        </h2>
        <p className="mb-3">
          You didn't plan for daily pill organizers, monthly lab work, and knowing every ER in your zip code. But that's your reality now. The least your Medicare plan can do is keep up with it - not fight you at every claim.
        </p>
        <p>
          Call me at 855-559-1700. I'll review your current coverage, your prescriptions, and your doctors. Free, no obligation, and I'll tell you the truth about what you have and what you need.
        </p>
      </section>

      <section className="mt-10 bg-blue-50 rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Talk to a licensed Medicare broker who understands CHF
        </p>
        <p className="mb-4">
          Call{" "}
          <a
            href="tel:8555591700"
            className="text-blue-700 font-bold underline"
          >
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/contact" className="text-blue-700 font-bold underline">
            get a free quote online
          </Link>
          .
        </p>
      </section>

      <section className="mt-10">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-guides/medigap-plan-g-nj"
              className="text-blue-700 hover:underline"
            >
              Medigap Plan G in New Jersey: What It Covers and What It Costs
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-vs-medigap"
              className="text-blue-700 hover:underline"
            >
              Medicare Advantage vs. Medigap: How to Decide
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-part-d-drug-plans-nj"
              className="text-blue-700 hover:underline"
            >
              Medicare Part D Drug Plans in NJ
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-broker-nj"
              className="text-blue-700 hover:underline"
            >
              Find a Licensed Medicare Broker in New Jersey
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}