import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare broker for diabetics | Free Plan Comparison | MedicareYourself",
  description:
    "Medicare broker for diabetics who knows insulin costs, CGM coverage, and specialist access. Anthony Orner finds plans built for your daily reality. Free help.",
  openGraph: {
    title:
      "medicare broker for diabetics | Free Plan Comparison | MedicareYourself",
    description:
      "Medicare broker for diabetics who knows insulin costs, CGM coverage, and specialist access. Anthony Orner finds plans built for your daily reality. Free help.",
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
      name: "Medicare Broker for Diabetics",
      item: "https://www.medicareyourself.com/services/medicare-broker-for-diabetics",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Diabetics: Finding a Plan That Covers What Your Life Actually Looks Like",
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
    question: "Do you pay a Medicare broker?",
    answer:
      "No. Medicare brokers are paid by the insurance carriers, not by you. There's no fee, no commission you owe, and no catch. The help is free whether you enroll or not.",
  },
  {
    question:
      "Does Medicare cover continuous glucose monitors (CGMs) for Type 2 diabetes?",
    answer:
      "Medicare Part B covers CGMs for people who use insulin. If you have Type 2 diabetes and don't use insulin, CGM coverage is harder to get and may require an appeal. A broker can help you understand your options based on your specific treatment plan.",
  },
  {
    question:
      "What's the difference between Part B and Part D for diabetes supplies?",
    answer:
      "Part B covers blood glucose testing supplies, CGMs (for insulin users), and diabetes self-management training. Part D covers diabetes medications and supplies for injecting or inhaling insulin. Some supplies fall into gray areas depending on how they're used, which is exactly where a broker helps.",
  },
  {
    question: "Can a Medicare broker help me find plans that cover my endocrinologist?",
    answer:
      "Yes. A broker can check whether your endocrinologist, podiatrist, and eye doctor are in-network before you enroll. With Original Medicare plus a Supplement, you can see any provider who accepts Medicare. With Medicare Advantage, network rules vary by plan.",
  },
];

export default function MedicareBrokerForDiabetics() {
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
        <span className="text-gray-700">Medicare Broker for Diabetics</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Medicare Broker for Diabetics: Finding a Plan That Covers What Your Life Actually Looks Like
      </h1>

      <Image
        src="/images/hub_medicare-broker-for-diabetics.webp"
        alt="medicare broker for diabetics"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg text-gray-700 mb-2">
        A Medicare broker for diabetics does something most general agents skip: they start with your prescriptions, your devices, and your specialists before comparing a single plan. Diabetes management touches every part of Medicare - Part A, B, D, and Advantage - and the wrong plan choice shows up fast in surprise costs.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        I'm Anthony Orner, a licensed broker in NJ, and I work with people managing diabetes every week. The call is free.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why standard Medicare advice fails people with diabetes
        </h2>
        <p className="text-gray-700 mb-3">
          Most plan comparisons focus on monthly premiums. For someone with diabetes, the real cost is buried deeper: insulin tier placement, how many test strips you're allowed per month, whether your CGM is covered, and whether you need a referral to see your endocrinologist.
        </p>
        <p className="text-gray-700">
          A plan that looks cheap on paper can cost hundreds more per month once you add up diabetes-specific supplies and copays. Generic advice doesn't catch this. Disease-specific plan matching does.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Insulin, CGMs, and test strips - what each plan type actually covers
        </h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>
            <strong>Part B</strong> covers blood glucose testing supplies, diabetes self-management training, and CGMs for people who use insulin.
          </li>
          <li>
            <strong>Part D</strong> covers diabetes medications plus supplies for injecting or inhaling insulin. Formularies vary by plan - your insulin brand may be Tier 3 on one plan and Tier 5 on another.
          </li>
          <li>
            <strong>Medicare Advantage</strong> plans bundle A, B, and usually D together. Some include insulin savings programs. But network restrictions can limit which pharmacy fills your supplies and which doctors you see.
          </li>
        </ul>
        <p className="text-gray-700 mt-3">
          If you're not on insulin, getting CGM coverage through Medicare is significantly harder. That's a real frustration I hear constantly, and it's worth discussing your specific situation.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Plans that cover endocrinologists, podiatrists, and eye exams without referrals
        </h2>
        <p className="text-gray-700 mb-3">
          Diabetes care isn't one doctor. It's an endocrinologist, a podiatrist, an ophthalmologist, maybe a dietitian. With Original Medicare plus a Supplement, you pick any provider who accepts Medicare. No referrals, no network.
        </p>
        <p className="text-gray-700">
          Medicare Advantage plans may cost less monthly but often require referrals or limit you to in-network specialists. If you already have a care team you trust, that matters.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          The pharmacy fight you shouldn't have to deal with
        </h2>
        <p className="text-gray-700 mb-3">
          Every three months, the same cycle: pharmacy texts you to refill, then flags an "insurance issue." You call. You wait. You answer questions they already have on file. For insulin. That you've taken for years.
        </p>
        <p className="text-gray-700">
          I can't fix every pharmacy headache, but I can make sure you're on a plan where your medications are covered cleanly from the start - right tier, right pharmacy, right prior authorizations already accounted for.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What I actually check before recommending a plan
        </h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Your full medication list, including insulin type, dosage, and delivery method</li>
          <li>Whether your CGM or pump supplies are covered under Part B or Part D</li>
          <li>Your current specialists and whether they're in-network</li>
          <li>Total yearly out-of-pocket cost - not just the premium</li>
          <li>Pharmacy preferences and mail-order options for supplies</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          You manage enough already - let a broker handle the coverage part
        </h2>
        <p className="text-gray-700 mb-3">
          Diabetes doesn't take days off. The monitoring, the planning, the mental load of a condition that demands attention around the clock - that's already a lot. Choosing the right Medicare plan shouldn't add to it.
        </p>
        <p className="text-gray-700">
          I'll do the plan comparison, check your drugs and doctors, and walk you through your real options. No cost. No obligation. Just clear answers from someone who's done this for people in your exact situation.
        </p>
      </section>

      <section className="mt-10 bg-blue-50 rounded-lg p-6 text-center">
        <p className="text-xl font-semibold text-gray-900 mb-2">
          Talk to a broker who understands diabetes coverage
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
            get a free quote online
          </Link>
          .
        </p>
      </section>

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
              className="text-blue-700 hover:underline"
            >
              Medicare Advantage vs. Medigap: Which Is Better for You?
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/part-d-drug-coverage"
              className="text-blue-700 hover:underline"
            >
              Medicare Part D Drug Coverage Explained
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-broker-nj"
              className="text-blue-700 hover:underline"
            >
              Medicare Broker in NJ - Free Local Help
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-supplement-plans"
              className="text-blue-700 hover:underline"
            >
              Medicare Supplement Plans: What They Cover
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}