import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare broker for people with parkinsons | Free Consultation | MedicareYourself",
  description:
    "Medicare broker for people with Parkinson's — Anthony Orner matches coverage to your specialists, medications, and therapy schedule. Call for a free consultation.",
  openGraph: {
    title:
      "medicare broker for people with parkinsons | Free Consultation | MedicareYourself",
    description:
      "Medicare broker for people with Parkinson's — Anthony Orner matches coverage to your specialists, medications, and therapy schedule. Call for a free consultation.",
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
      name: "Medicare Broker for People With Parkinson's",
      item: "https://medicareyourself.com/services/medicare-broker-for-people-with-parkinsons",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for People With Parkinson's: Finding Coverage That Actually Fits",
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
  datePublished: "2025-01-01",
  dateModified: "2025-01-01",
};

const faqs = [
  {
    question: "Can I get Medicare if I have Parkinson's?",
    answer:
      "Yes. If you're 65 or older and eligible for Social Security, you qualify for Medicare regardless of pre-existing conditions like Parkinson's. If you're under 65, you may qualify through Social Security Disability Insurance (SSDI) after a 24-month waiting period.",
  },
  {
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. Medicare brokers are paid by insurance carriers, not by you. There's no fee for consultations, plan comparisons, or enrollment help. The plan costs the same whether you enroll directly or through a broker.",
  },
  {
    question: "What's the difference between a Medicare agent and a Medicare broker?",
    answer:
      "An agent typically represents one insurance company. A broker works with multiple carriers and can compare plans across companies to find the best fit for your situation. For someone managing Parkinson's, that flexibility matters.",
  },
  {
    question: "What is the 5:2:1 rule for Parkinson's?",
    answer:
      "The 5:2:1 rule is a clinical guideline that flags advanced Parkinson's: taking 5+ doses of levodopa daily, experiencing 2+ hours of 'off' time, or dealing with 1+ hour of troublesome dyskinesia. If any apply, it's time to discuss advanced therapies like DBS with your neurologist.",
  },
];

export default function MedicareBrokerForPeopleWithParkinsons() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/medicare-guides" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Medicare Broker for People With Parkinson&apos;s
        </span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Medicare Broker for People With Parkinson&apos;s: Finding Coverage That
          Actually Fits
        </h1>

        <Image
          src="/images/medicare-broker-for-people-with-parkinsons_photo.webp"
          alt="medicare broker for people with parkinsons"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          A Medicare broker for people with Parkinson&apos;s doesn&apos;t just compare premiums. I look at your neurologist visits, your medication list, your therapy schedule, and how fast things might change. Then I match you with a plan built for where you are right now.
        </p>
        <p className="text-lg mb-6">
          I&apos;m Anthony Orner, a licensed Medicare broker. I work with families dealing with Parkinson&apos;s every enrollment season, and I know what these plans actually cover when it counts.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why Parkinson&apos;s patients need predictable out-of-pocket costs
          </h2>
          <p className="mb-2">
            Parkinson&apos;s medication costs add up fast. Levodopa alone can require multiple daily doses, and many patients take several drugs on top of that. Prescription refills running $1,000 to $3,000+ per month is a reality families deal with.
          </p>
          <p>
            Then add speech therapy, physical therapy, neurologist copays, and potential procedures like deep brain stimulation (DBS). You need a plan where you can predict what you&apos;ll owe each month, not one that surprises you with 20% coinsurance on a $250,000 surgery.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Medigap vs Medicare Advantage when you see multiple specialists
          </h2>
          <p className="mb-2">
            With Parkinson&apos;s, you&apos;re likely seeing a movement disorder specialist, a physical therapist, possibly a speech therapist, and your primary care doctor. That&apos;s a lot of moving parts.
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-2">
            <li>
              <strong>Medigap (Medicare Supplement):</strong> You keep Original Medicare and see any provider who accepts Medicare. No referrals. No network restrictions. Plans like Plan G leave you paying only the $283 Part B deductible for 2026.
            </li>
            <li>
              <strong>Medicare Advantage:</strong> Lower premiums, but you&apos;re locked into a network. If your neurologist or DBS surgeon is out-of-network, costs jump significantly or coverage disappears.
            </li>
          </ul>
          <p>
            For most Parkinson&apos;s patients who need specialist flexibility, Medigap tends to be the safer bet. But the right choice depends on your specific doctors and drug list.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Guaranteed issue situations that skip medical underwriting
          </h2>
          <p className="mb-2">
            If you&apos;re already on Medicare Advantage and want to switch to Medigap, you usually face medical underwriting. With Parkinson&apos;s, that can mean denial.
          </p>
          <p className="mb-2">
            But federal guaranteed issue rights let you enroll in Medigap Plan A, B, C, F, K, or L without health questions in specific situations:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Your Medicare Advantage plan leaves your area or stops operating</li>
            <li>You lose employer or union coverage</li>
            <li>You&apos;re within 12 months of first joining a Medicare Advantage plan and want to switch back to Original Medicare</li>
          </ul>
          <p className="mt-2">
            These windows are narrow. Missing one can lock you out of Medigap for good. I track these timelines so you don&apos;t have to.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Part D and Parkinson&apos;s drug costs
          </h2>
          <p className="mb-2">
            Starting in 2025, Part D has a $2,000 annual out-of-pocket cap on prescription drugs. That&apos;s significant for Parkinson&apos;s patients on multiple medications.
          </p>
          <p>
            I compare Part D formularies to make sure your specific drugs are covered at the lowest tier possible. A plan that covers carbidopa-levodopa as Tier 1 vs. Tier 3 can save you hundreds per year.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What families going through this actually worry about
          </h2>
          <p className="mb-2">
            The families I work with aren&apos;t just thinking about this year. They&apos;re thinking about what happens when symptoms progress. When a parent needs skilled nursing. When DBS becomes the conversation. When the person managing the finances is also the caregiver.
          </p>
          <p>
            I build plans with progression in mind. SNF coinsurance alone runs $209.50/day for days 21 through 100 in 2026 under Original Medicare without a supplement. That&apos;s over $16,000 in a single stay. The right Medigap plan covers that entirely.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How Anthony builds a plan around your treatment schedule
          </h2>
          <p className="mb-2">
            Here&apos;s what a call with me looks like:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>We review every doctor, specialist, and therapist on your team</li>
            <li>I check your full medication list against Part D formularies</li>
            <li>We talk about what&apos;s coming next: DBS evaluation, increased therapy, potential facility care</li>
            <li>I show you 3-4 plan options with actual costs, not estimates</li>
          </ul>
          <p className="mt-2">
            No charge. No pressure. I work with multiple carriers, so I&apos;m not pushing one company&apos;s product.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center mb-10">
          <p className="text-xl font-semibold mb-2">
            Talk to a broker who understands Parkinson&apos;s care.
          </p>
          <p className="text-lg mb-4">
            Call{" "}
            <a
              href="tel:8555591700"
              className="underline font-bold text-white"
            >
              855-559-1700
            </a>{" "}
            or{" "}
            <Link
              href="/quote"
              className="underline font-bold text-white"
            >
              get a free quote online
            </Link>
            .
          </p>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare-guides/medigap-plan-g"
                className="text-blue-600 hover:underline"
              >
                Medigap Plan G: What It Covers and What It Costs
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/medicare-advantage-vs-medigap"
                className="text-blue-600 hover:underline"
              >
                Medicare Advantage vs Medigap: How to Decide
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/part-d-drug-coverage"
                className="text-blue-600 hover:underline"
              >
                Part D Drug Coverage: What Parkinson&apos;s Patients Should Know
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/guaranteed-issue-rights"
                className="text-blue-600 hover:underline"
              >
                Guaranteed Issue Rights: When You Can Switch Without Underwriting
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}