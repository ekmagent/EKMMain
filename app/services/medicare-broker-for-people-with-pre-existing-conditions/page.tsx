import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare broker for people with pre-existing conditions | Free Guidance | MedicareYourself",
  description:
    "Medicare broker for people with pre-existing conditions — know which carriers underwrite leniently and when health questions don't apply. Call 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-people-with-pre-existing-conditions" },
  openGraph: {
    title:
      "medicare broker for people with pre-existing conditions | Free Guidance | MedicareYourself",
    description:
      "Medicare broker for people with pre-existing conditions — learn which plans skip health questions and which carriers are lenient. Free help from Anthony Orner.",
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
      name: "Medicare Broker for People with Pre-Existing Conditions",
      item: "https://medicareyourself.com/services/medicare-broker-for-people-with-pre-existing-conditions",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for People with Pre-Existing Conditions: Your Coverage Options Explained",
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
};

const faqs = [
  {
    question:
      "Can you get a Medicare Supplement plan if you have a pre-existing condition?",
    answer:
      "Yes, but timing matters. During your 6-month Medigap Open Enrollment Period (starting the month you turn 65 and are enrolled in Part B), carriers cannot deny you or charge more due to health history. Outside that window, most carriers can use medical underwriting and may decline your application. Certain guaranteed issue rights also bypass health questions entirely.",
  },
  {
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. Medicare brokers are paid by the insurance carriers, not by you. There's no fee for consultations, plan comparisons, or enrollment help. The plan costs the same whether you enroll directly or through a broker.",
  },
  {
    question:
      "Does Original Medicare cover pre-existing conditions?",
    answer:
      "Yes. Original Medicare (Part A and Part B) has covered pre-existing conditions since 1965. There are no waiting periods and no surcharges based on your health history. The challenge arises with Medigap supplement plans, which may use medical underwriting outside of protected enrollment windows.",
  },
  {
    question:
      "What if I missed my Medigap Open Enrollment Period and have a pre-existing condition?",
    answer:
      "You still have options. Some carriers are more lenient with underwriting than others, and certain life events trigger federal guaranteed issue rights that bypass health questions. A broker who knows which carriers accept specific conditions can save you from wasting time on applications that won't get approved.",
  },
,
  {
    question: "Are Medicare Advantage plans available if I have pre-existing conditions?",
    answer:
      "Yes. Medicare Advantage plans cannot deny enrollment based on pre-existing conditions, with the historical exception of End-Stage Renal Disease (ESRD), which changed in 2021 — ESRD patients can now enroll in Medicare Advantage plans. You can join during your Initial Enrollment Period, Annual Enrollment (Oct 15–Dec 7), or certain Special Enrollment Periods.",
  },
  {
    question: "Do Medicare Part D drug plans use medical underwriting?",
    answer:
      "No. Medicare Part D prescription drug plans are guaranteed issue during valid enrollment periods and do not ask health questions. Your current medications and conditions will not affect your ability to enroll, though they should factor into which plan's formulary you choose.",
  },
  {
    question: "Can switching Medigap plans trigger underwriting if I have health issues?",
    answer:
      "In most states, yes. If you already have a Medigap plan and want to switch to a different one outside a protected enrollment window, the new carrier can typically require medical underwriting. A few states have birthday rules or annual switch windows that allow changes without health questions, so the rules depend on where you live.",
  }
];

export default function MedicareBrokerPreExistingConditions() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Medicare Broker for People with Pre-Existing Conditions
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Medicare Broker for People with Pre-Existing Conditions: Your Coverage Options Explained
      </h1>

      <Image
        src="/images/medicare-broker-for-people-with-pre-existing-conditions.webp"
        alt="medicare broker for people with pre-existing conditions"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        A Medicare broker for people with pre-existing conditions knows which doors are open and which ones will waste your time. Original Medicare itself doesn't care about your health history. It has covered pre-existing conditions since 1965, with no waiting periods and no surcharges.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        The real problem shows up when you want supplemental coverage. That's where a broker who understands underwriting actually matters.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How pre-existing conditions affect Medigap underwriting
        </h2>
        <p className="text-gray-700 mb-2">
          Medicare Supplement (Medigap) plans help cover what Original Medicare doesn't: the $1,676 Part A deductible, the $283 Part B deductible, and coinsurance that can add up fast. But outside of protected enrollment windows, carriers can ask about your health.
        </p>
        <p className="text-gray-700">
          Diabetes, heart disease, COPD, cancer history. Any of these can lead to a denial or a higher rate. The application isn't just a formality. It's medical underwriting, and it's legal outside your initial enrollment window.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Guaranteed issue rights that bypass health questions entirely
        </h2>
        <p className="text-gray-700 mb-3">
          Federal law gives you guaranteed issue rights under specific circumstances. When you have these rights, carriers cannot deny you, charge more, or impose waiting periods for pre-existing conditions.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Your Medicare Advantage plan leaves your area or stops operating</li>
          <li>You lose employer or union group coverage</li>
          <li>Your Medigap carrier goes bankrupt or violated its contract</li>
          <li>You're in your 6-month Medigap Open Enrollment Period (starts when you're 65+ and enrolled in Part B)</li>
        </ul>
        <p className="text-gray-700 mt-3">
          These rights have strict deadlines. Miss the window and you're back to underwriting.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Medicare Advantage as an alternative when supplement underwriting is strict
        </h2>
        <p className="text-gray-700 mb-2">
          Medicare Advantage plans cannot deny you based on pre-existing conditions. Period. If you enroll during Open Enrollment (October 15 through December 7) or your Initial Enrollment Period, you're in regardless of health history.
        </p>
        <p className="text-gray-700">
          Many Advantage plans include prescription drug coverage, dental, and vision. Trade-offs exist: network restrictions, prior authorizations, and out-of-pocket maximums instead of the predictability Medigap offers. But for someone who can't pass supplement underwriting, Advantage may be the stronger move.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Work with a broker who knows which carriers are lenient
        </h2>
        <p className="text-gray-700 mb-2">
          Not every carrier underwrites the same way. Some decline anyone with insulin-dependent diabetes. Others approve it routinely. Some won't touch a cancer diagnosis within five years. Others look at it case by case.
        </p>
        <p className="text-gray-700">
          I work with dozens of carriers and know their underwriting tendencies. That means I can steer your application toward the carrier most likely to say yes, instead of letting you get denied and flagged in industry databases.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Your Medigap Open Enrollment window is your biggest asset
        </h2>
        <p className="text-gray-700 mb-2">
          If you haven't turned 65 yet, this is the single most important thing to know: your 6-month Medigap Open Enrollment Period is the one time carriers must accept you regardless of health. No questions. No denials. No waiting periods.
        </p>
        <p className="text-gray-700">
          Start planning at least 6 months before your Part B effective date. Once that window closes, it doesn't reopen.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What a free consultation looks like
        </h2>
        <p className="text-gray-700 mb-2">
          You tell me your conditions, your medications, and what matters most to you in a plan. I tell you exactly which path gives you the best shot at solid coverage. No cost to you, ever. Brokers are paid by the carriers, not by clients.
        </p>
        <p className="text-gray-700">
          If you've been putting this off because you're worried about being turned down, that's the exact reason to call. The earlier we talk, the more options you have.
        </p>
      </section>

      <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
        <p className="text-xl font-semibold text-blue-900 mb-2">
          Get honest answers about your coverage options.
        </p>
        <p className="text-gray-700 mb-4">
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
        <p className="text-sm text-gray-500">
          Anthony Orner, Licensed Medicare Broker
        </p>
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
              href="/medicare-supplement/new-jersey/turning-65"
              className="text-blue-700 hover:underline"
            >
              Medigap Open Enrollment Period: What You Need to Know
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
              href="/medicare-supplement/new-jersey"
              className="text-blue-700 hover:underline"
            >
              Federal Guaranteed Issue Rights Explained
            </Link>
          </li>
          <li>
            <Link
              href="/services/help-with-your-medicare-decision"
              className="text-blue-700 hover:underline"
            >
              Schedule a Free Medicare Consultation
            </Link>
          </li>
        </ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/health-drug-plans/medigap/basics/ready-to-buy" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — When to buy Medigap</a> and <a href="https://www.medicare.gov/basics/get-started-with-medicare/sign-up/when-does-medicare-coverage-start" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Guaranteed issue rights</a>.</div>
      </section>
    </main>
  );
}