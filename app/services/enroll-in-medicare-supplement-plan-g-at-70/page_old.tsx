import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Enroll in Medicare Supplement Plan G at 70 | Free Broker Help | MedicareYourself",
  description:
    "Enroll in Medicare Supplement Plan G at 70 — learn about underwriting, guaranteed issue rights, and top carriers for 2025. Free broker assistance.",
  openGraph: {
    title:
      "Enroll in Medicare Supplement Plan G at 70 | Free Broker Help | MedicareYourself",
    description:
      "Enroll in Medicare Supplement Plan G at 70 — learn about underwriting, guaranteed issue rights, and top carriers for 2025. Free broker assistance.",
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
      name: "Enroll in Medicare Supplement Plan G at 70",
      item: "https://medicareyourself.com/services/enroll-in-medicare-supplement-plan-g-at-70",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Enroll in Medicare Supplement Plan G at 70: What You Need to Know",
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
    question: "Can you enroll in Medicare Supplement Plan G at any time?",
    answer:
      "You can apply for Plan G at any age, but outside of your Medigap Open Enrollment Period (which starts the month you turn 65 and enroll in Part B), most carriers require medical underwriting. At 70, you'll likely answer health questions unless you qualify for a federal guaranteed issue right.",
  },
  {
    question: "Will I pay more for Plan G at 70 than someone who enrolled at 65?",
    answer:
      "Yes. Most carriers use attained-age or issue-age pricing, so premiums at 70 are higher than at 65. The exact difference depends on the carrier, your state, and your health. That said, Plan G still protects you from nearly all out-of-pocket Medicare costs, which matters more as you age.",
  },
  {
    question: "What if I get denied for Plan G at 70?",
    answer:
      "Denial is possible if you have certain health conditions. But not every carrier has the same underwriting criteria. Some are more lenient with conditions like controlled diabetes or past cancer in remission. A broker can match you with the carrier most likely to approve your application.",
  },
  {
    question: "Is Plan G better than Medicare Advantage at 70?",
    answer:
      "Plan G gives you the freedom to see any doctor who accepts Medicare, anywhere in the country, with no network restrictions or prior authorizations. Medicare Advantage may have lower premiums but comes with network limits and cost-sharing that can add up. The right choice depends on your health, budget, and how you use healthcare.",
  },
];

export default function EnrollPlanGAt70Page() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <main className="max-w-4xl mx-auto px-4 py-8">
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
            Enroll in Medicare Supplement Plan G at 70
          </span>
        </nav>

        <h1 className="text-3xl font-bold mb-4">
          Enroll in Medicare Supplement Plan G at 70: What You Need to Know
        </h1>

        <Image
          src="/images/enroll-in-medicare-supplement-plan-g-at-70.webp"
          alt="Enroll in Medicare Supplement Plan G at 70"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg mb-2">
          Enrolling in Medicare Supplement Plan G at 70 is absolutely possible - but the process looks different than it did at 65. You've missed your Medigap Open Enrollment Period, which means most carriers will ask health questions before they approve you.
        </p>
        <p className="text-lg mb-6">
          That doesn't mean you're out of options. I'm Anthony Orner, a licensed Medicare broker, and I help people in their 70s get into Plan G every week. Here's what you're actually looking at.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Do you still have guaranteed issue rights at 70?
          </h2>
          <p className="mb-3">
            Your federal Medigap Open Enrollment Period is a one-time, 6-month window that starts the month you turn 65 and have Part B. After that closes, guaranteed issue only kicks in under specific federal triggers:
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li>You're leaving a Medicare Advantage plan within 12 months of first joining</li>
            <li>Your employer or union coverage is ending</li>
            <li>Your insurance company went bankrupt or violated its contract</li>
            <li>You moved out of your plan's service area</li>
          </ul>
          <p>
            If one of these applies to you at 70, you may be able to get Plan G without any health questions. If not, you'll go through underwriting. That's where a broker makes a real difference.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Health questions you may face during underwriting
          </h2>
          <p className="mb-3">
            Underwriting at 70 isn't automatic rejection. Carriers ask about specific conditions and medications. Common questions cover:
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li>Heart disease, stroke, or COPD in the past 2-3 years</li>
            <li>Cancer treatment within the last 5 years (varies by carrier)</li>
            <li>Insulin-dependent diabetes</li>
            <li>Kidney disease or dialysis</li>
            <li>Use of oxygen equipment or a walker</li>
          </ul>
          <p>
            If your conditions are well-managed - say, blood pressure medication and controlled cholesterol - many carriers will still approve you. Each carrier's underwriting guidelines are different, and that's exactly why I check multiple carriers before submitting anything.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Best carriers for 70-year-old applicants in 2025
          </h2>
          <p className="mb-3">
            Plan G is standardized by Medicare. The medical benefits are identical no matter which company sells it. What isn't identical: premiums, rate increase history, underwriting leniency, and customer service.
          </p>
          <p className="mb-3">
            At 70, I focus on two things when recommending a carrier. First, will they approve you based on your health history? Second, how have their rates behaved over time? A low starting premium that jumps 15% a year isn't a bargain - it's a problem at 78.
          </p>
          <p>
            Rates vary by carrier and your zip code, so I run quotes from multiple companies to find the best fit. No cost to you for this.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why Plan G still makes sense at 70
          </h2>
          <p className="mb-3">
            Plan G covers everything Original Medicare doesn't - except the Part B deductible ($283/year in 2026). That means no copays for doctor visits, no 20% coinsurance on outpatient care, and no surprise bills from hospital stays where the Part A deductible is $1,676 per benefit period.
          </p>
          <p>
            At 70, you're likely using healthcare more than you did at 65. Plan G gives you the freedom to see any doctor accepting Medicare nationwide, with no referrals and no network headaches.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What happens if you wait longer
          </h2>
          <p className="mb-3">
            Every year you wait, two things work against you. Your premiums go up because you're older. And your health may change, making underwriting harder to pass.
          </p>
          <p>
            I've worked with 70-year-olds who got approved easily and 72-year-olds who hit a wall because of a new diagnosis. If you're healthy enough now, locking in coverage sooner is almost always better.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How I handle your application start to finish
          </h2>
          <p className="mb-3">
            Here's the process when you call me:
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li>We review your health history honestly - I need the full picture to find the right carrier</li>
            <li>I run quotes from multiple companies in your area</li>
            <li>I pre-screen your health answers against each carrier's underwriting before we apply</li>
            <li>I submit your application and follow up until it's approved</li>
          </ul>
          <p>
            No cost to you. I'm paid by the insurance carrier, and your premium is the same whether you use a broker or go direct.
          </p>
        </section>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center mb-10">
          <p className="text-xl font-semibold mb-2">
            Ready to see your Plan G options at 70?
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
              href="/quote"
              className="text-blue-700 font-bold hover:underline"
            >
              Get a Free Quote
            </Link>{" "}
            online. No obligation, no pressure.
          </p>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/services/medicare-supplement-plan-g"
                className="text-blue-700 hover:underline"
              >
                Medicare Supplement Plan G: Full Benefits Breakdown
              </Link>
            </li>
            <li>
              <Link
                href="/services/medigap-underwriting"
                className="text-blue-700 hover:underline"
              >
                How Medigap Underwriting Works After 65
              </Link>
            </li>
            <li>
              <Link
                href="/services/plan-g-vs-plan-n"
                className="text-blue-700 hover:underline"
              >
                Plan G vs Plan N: Which Is Right for You?
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-supplement-guaranteed-issue"
                className="text-blue-700 hover:underline"
              >
                Medicare Supplement Guaranteed Issue Rights Explained
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}