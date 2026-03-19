import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare agent for someone with pre existing conditions california | Free Help | MedicareYourself",
  description:
    "Medicare agent for pre-existing conditions in California. Learn which plans skip health questions, when to enroll, and connect with a licensed broker free.",
  openGraph: {
    title:
      "medicare agent for someone with pre existing conditions california | Free Help | MedicareYourself",
    description:
      "Medicare agent for pre-existing conditions in California. Learn which plans skip health questions, when to enroll, and connect with a licensed broker free.",
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
      item: "https://medicareyourself.com/medicare",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Medicare Agent for Pre-Existing Conditions in California",
      item: "https://medicareyourself.com/services/medicare-agent-for-someone-with-pre-existing-conditions-california",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Agent for Someone with Pre-Existing Conditions in California",
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
  datePublished: "2025-07-14",
  dateModified: "2025-07-14",
};

const faqs = [
  {
    question:
      "Can you get a Medicare Supplement plan if you have a pre-existing condition?",
    answer:
      "Yes, but timing matters. During your 6-month Medigap Open Enrollment Period (starting when you turn 65 and have Part B), insurers cannot deny you or charge more because of health history. Outside that window, California offers a limited annual open enrollment for certain Medigap plans, but carriers can impose up to a 6-month pre-existing condition waiting period. Federal guaranteed issue rights also apply in specific situations like losing employer coverage.",
  },
  {
    question:
      "Does lupus qualify for Medicare?",
    answer:
      "Lupus can qualify you for Medicare before age 65 if you've received Social Security Disability Insurance (SSDI) for 24 months. Once enrolled, Original Medicare and Medicare Advantage plans cover lupus treatments without pre-existing condition exclusions. The key is choosing a plan with specialists and medications that match your treatment plan.",
  },
  {
    question:
      "Do Medicare Advantage plans in California deny coverage for pre-existing conditions?",
    answer:
      "No. Medicare Advantage plans cannot deny enrollment or refuse to cover treatment based on pre-existing conditions. If you're eligible for Medicare Parts A and B and live in the plan's service area, you can enroll during the appropriate enrollment period regardless of health history.",
  },
  {
    question:
      "What happens if I missed my Medigap Open Enrollment Period in California?",
    answer:
      "California law gives you an annual window to switch between certain Medigap plans, but insurers can apply a pre-existing condition waiting period of up to 6 months. You may also qualify for federal guaranteed issue rights if you lose other coverage. A licensed agent can review your specific situation and find the best path forward.",
  },
];

export default function MedicareAgentPreExistingConditionsCalifornia() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/medicare" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Medicare Agent for Pre-Existing Conditions in California
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Medicare Agent for Someone with Pre-Existing Conditions in California
      </h1>

      <Image
        src="/images/medicare-agent-for-someone-with-pre-existing-conditions-california.webp"
        alt="Medicare agent for someone with pre existing conditions California"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        A Medicare agent for someone with pre-existing conditions in California can help you find coverage that actually works with your health history, not against it. If you've been diagnosed with diabetes, heart disease, COPD, cancer, or any chronic illness, the plan you pick and the enrollment window you use make a real difference in what you'll pay out of pocket.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        The good news: Medicare itself doesn't deny coverage for pre-existing conditions. The tricky part is Medigap, where timing is everything.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          California's guaranteed-issue windows that bypass health questions
        </h2>
        <p className="text-gray-700 mb-2">
          Your strongest protection is the 6-month Medigap Open Enrollment Period. It starts the month you turn 65 and are enrolled in Part B. During this window, no insurer in California can reject you, charge higher premiums, or exclude pre-existing conditions.
        </p>
        <p className="text-gray-700 mb-2">
          California also offers a limited annual open enrollment that lets you switch between certain Medigap plans. But here's the catch: carriers can impose up to a 6-month waiting period for conditions treated in the months before your new policy starts.
        </p>
        <p className="text-gray-700">
          Federal guaranteed issue rights kick in when you lose employer coverage, your Medicare Advantage plan leaves your area, or your carrier goes bankrupt. These are real protections, but you need to act within specific deadlines.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Which plans accept pre-existing conditions without a waiting period
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <strong>Medicare Advantage (Part C):</strong> Cannot deny you or exclude conditions. If you have Parts A and B and live in the plan's service area, you're in.
          </li>
          <li>
            <strong>Medicare Part D:</strong> Prescription drug plans must accept all eligible enrollees regardless of health status.
          </li>
          <li>
            <strong>Medigap during Open Enrollment:</strong> Full guaranteed issue, no health questions, no waiting periods.
          </li>
          <li>
            <strong>Medigap outside Open Enrollment:</strong> This is where pre-existing condition waiting periods or denials can happen in California.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Medigap vs. Medicare Advantage when you have a chronic illness
        </h2>
        <p className="text-gray-700 mb-2">
          With a chronic condition, the choice between Medigap and Medicare Advantage isn't just about monthly premium. It's about access and cost predictability.
        </p>
        <p className="text-gray-700 mb-2">
          Medigap (like Plan G) pairs with Original Medicare and gives you access to any doctor nationwide who takes Medicare. No referrals, no network restrictions. You'll pay a monthly premium, but your out-of-pocket costs for covered services become very predictable. With Plan G, you only cover the $283 annual Part B deductible, then Medigap handles the rest.
        </p>
        <p className="text-gray-700">
          Medicare Advantage plans often have $0 premiums and include extras like dental, vision, and hearing. But they use networks. If your specialists are out of network, or you need treatment at a facility like UCLA Health, City of Hope, or Cedars-Sinai, check the plan directory carefully. Copays and coinsurance for ongoing treatments can add up fast.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why working with a licensed agent matters for complicated health histories
        </h2>
        <p className="text-gray-700 mb-2">
          People often don't realize Medigap rules are different from ACA marketplace rules. The ACA banned pre-existing condition exclusions for under-65 health plans. Medicare Supplement plans follow different federal and state rules. That gap in understanding costs people real money.
        </p>
        <p className="text-gray-700">
          A licensed Medicare agent knows which enrollment windows apply to your situation, which carriers in California are currently accepting applications with underwriting, and which plans cover your doctors and drugs. You pay nothing for this help. Brokers are paid by the insurance carriers, not by you.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What to have ready when you call
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Your Medicare card (or your Part A and Part B effective dates)</li>
          <li>A list of current medications with dosages</li>
          <li>Names of your doctors and specialists</li>
          <li>Any diagnosis or treatment dates for chronic conditions</li>
          <li>Whether you have or recently lost other coverage (employer, VA, Medicaid)</li>
        </ul>
        <p className="text-gray-700 mt-3">
          This lets your agent match you to the right plan quickly instead of guessing.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Don't wait until a diagnosis forces the decision
        </h2>
        <p className="text-gray-700 mb-2">
          Too many people delay choosing supplemental coverage, then face a cancer diagnosis or a new heart condition without a secondary plan in place. At that point, options narrow and costs rise.
        </p>
        <p className="text-gray-700">
          If you're approaching 65 or recently enrolled in Part B, your best window is open right now. If you missed it, there may still be paths. Either way, a quick call can clarify what's available to you today.
        </p>
      </section>

      <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
        <p className="text-xl font-semibold text-blue-900 mb-2">
          Talk to a licensed Medicare agent about your options in California
        </p>
        <p className="text-blue-800 mb-4">
          Free, no-obligation help for people with pre-existing conditions.
        </p>
        <p className="text-2xl font-bold text-blue-900 mb-4">
          <a href="tel:8555591700" className="hover:underline">
            855-559-1700
          </a>
        </p>
        <Link
          href="/quote"
          className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
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
              href="/medicare/medigap-open-enrollment"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment: What You Need to Know
            </Link>
          </li>
          <li>
            <Link
              href="/medicare/medicare-advantage-california"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage Plans in California
            </Link>
          </li>
          <li>
            <Link
              href="/medicare/plan-g-vs-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medigap Plan G vs. Plan N: Which Is Better?
            </Link>
          </li>
          <li>
            <Link
              href="/medicare/guaranteed-issue-rights"
              className="text-blue-600 hover:underline"
            >
              Medicare Guaranteed Issue Rights Explained
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}