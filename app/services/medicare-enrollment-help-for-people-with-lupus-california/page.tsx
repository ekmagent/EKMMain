import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare enrollment help for people with lupus california | Free Guidance | MedicareYourself",
  description:
    "Medicare enrollment help for people with lupus in California. Learn your rights, compare plans covering rheumatologists and biologics. Free broker guidance.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-enrollment-help-for-people-with-lupus-california" },
  openGraph: {
    title:
      "medicare enrollment help for people with lupus california | Free Guidance | MedicareYourself",
    description:
      "Medicare enrollment help for people with lupus in California. Learn your rights, compare plans covering rheumatologists and biologics. Free broker guidance.",
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
      name: "Medicare Enrollment Help for People with Lupus in California",
      item: "https://medicareyourself.com/services/medicare-enrollment-help-for-people-with-lupus-california",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Enrollment Help for People with Lupus in California: What You Need to Know",
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
    question: "Can you get Medicare with lupus before age 65?",
    answer:
      "Yes. If lupus qualifies you for Social Security Disability Insurance (SSDI), you become eligible for Medicare after a 24-month waiting period from your first SSDI payment. This applies regardless of your age.",
  },
  {
    question: "What are the support resources for lupus patients on Medicare in California?",
    answer:
      "California offers several resources including the Health Insurance Counseling and Advocacy Program (HICAP) for free Medicare counseling, the Lupus Foundation of America's California chapter for local support services, and licensed Medicare brokers who can help match your treatment needs to the right plan at no cost.",
  },
  {
    question: "Does Medicare cover biologic infusions like Saphnelo or Benlysta for lupus?",
    answer:
      "Medicare Part B typically covers infusions administered in a doctor's office or infusion center, including biologics for lupus. Part D covers self-administered medications. Costs depend on your specific plan, and out-of-pocket amounts can be significant. A broker can help you find plans that minimize your share.",
  },
  {
    question: "When can I enroll in a Medigap plan if I'm under 65 with lupus in California?",
    answer:
      "California requires Medigap carriers to offer at least two standardized plans to Medicare beneficiaries under 65 on SSDI. You'll want to apply during your Medigap Open Enrollment Period, which starts the month you turn 65 and enroll in Part B. Under-65 rules differ, so call us to confirm your options.",
  },
];

export default function MedicareEnrollmentHelpLupusCalifornia() {
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
          Medicare Enrollment Help for People with Lupus in California
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Medicare Enrollment Help for People with Lupus in California: What You Need to Know
      </h1>

      <Image
        src="/images/medicare-enrollment-help-for-people-with-lupus-california.webp"
        alt="Medicare enrollment help for people with lupus in California"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        Medicare enrollment help for people with lupus in California starts with understanding
        how your diagnosis connects to your eligibility and plan options. Living with lupus
        means managing rheumatologist visits, lab work, biologics, and flares that don't follow
        a schedule.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        The wrong plan can leave you stuck choosing between affording your infusion and keeping
        your lights on. We help you avoid that.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How lupus qualifies you for Medicare before 65
        </h2>
        <p className="text-gray-700 mb-2">
          Systemic lupus can qualify you for SSDI if it prevents you from working. After 24
          months of receiving SSDI payments, you automatically become eligible for Medicare
          Parts A and B.
        </p>
        <p className="text-gray-700">
          Many people with lupus land on Medicare in their 30s or 40s. That changes the
          enrollment math. You're not turning 65 with a standard open enrollment window. You
          need someone who understands under-65 rules in California specifically.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          California Medigap rules for lupus patients on SSDI
        </h2>
        <p className="text-gray-700 mb-2">
          California requires Medigap insurers to sell at least two plan types to disabled
          Medicare beneficiaries under 65. That's better than many states, but premiums for
          under-65 enrollees can be higher.
        </p>
        <p className="text-gray-700">
          Timing matters. Your Medigap Open Enrollment Period gives you guaranteed issue
          rights, meaning carriers can't deny you or charge more because of lupus. Miss that
          window and you may face medical underwriting. Call us before your Part B start date to
          lock things in.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Choosing between Supplement and Advantage plans with lupus
        </h2>
        <p className="text-gray-700 mb-3">
          This decision is personal, and with lupus it carries real financial weight. Here's how
          to think about it:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <strong>Medigap (Supplement):</strong> Higher monthly premium, but predictable
            costs. You pick any doctor who accepts Medicare. No prior authorizations for
            specialists or infusions.
          </li>
          <li>
            <strong>Medicare Advantage:</strong> Lower premium (sometimes $0), but you're
            locked into a network. Referrals and prior auth can delay treatment during a flare.
          </li>
          <li>
            <strong>For active lupus:</strong> If you're on biologics like Benlysta or Saphnelo,
            check how the plan handles Part B infusion copays. The 2026 Part B deductible is
            $283/year, and you'll owe 20% coinsurance on infusions without a Supplement.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Part D coverage and biologic costs
        </h2>
        <p className="text-gray-700 mb-2">
          Part D covers self-administered lupus medications like hydroxychloroquine and
          mycophenolate. If your biologic is administered in a clinical setting, it falls under
          Part B instead.
        </p>
        <p className="text-gray-700">
          Part D deductibles and formulary tiers vary by carrier. Some lupus patients have hit
          sudden deductible walls that interrupted their infusions. We check formularies before
          you enroll so you're not blindsided.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          California-specific resources worth knowing
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <strong>HICAP:</strong> California's free Medicare counseling program, available in
            every county.
          </li>
          <li>
            <strong>Medi-Medi:</strong> If your income is low enough, you may qualify for both
            Medi-Cal and Medicare, which can cover premiums and cost-sharing.
          </li>
          <li>
            Major health systems like UCLA Health, UC San Francisco, and Cedars-Sinai have
            lupus specialty clinics that accept Original Medicare.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Steps to enroll with a licensed broker who understands autoimmune conditions
        </h2>
        <ol className="list-decimal pl-6 text-gray-700 space-y-2">
          <li>Call us at <strong>855-559-1700</strong>. Tell us about your medications, doctors, and treatment schedule.</li>
          <li>We'll verify your eligibility window and check California's under-65 Medigap rules for your situation.</li>
          <li>We compare plans across carriers, checking networks, formularies, and total yearly cost with your lupus care factored in.</li>
          <li>We handle the application. No cost to you. Brokers are paid by the carrier, not the client.</li>
        </ol>
        <p className="text-gray-700 mt-3">
          You shouldn't have to call Medicare, then Social Security, then your pharmacy, then
          back again. One call to us can replace all of that.
        </p>
      </section>

      <div className="mt-12 bg-blue-600 text-white rounded-xl p-8 text-center">
        <p className="text-xl font-bold mb-2">
          Get Free Medicare Guidance for Lupus in California
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/quote" className="underline font-bold">
            Get a Free Quote
          </Link>
        </p>
        <p className="text-sm opacity-90">
          Licensed broker. No pressure. We help you find the right plan for your treatment.
        </p>
      </div>

      <section className="mt-12">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-supplement/new-jersey/turning-65"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment Period: When It Starts and Why It Matters
            </Link>
          </li>
          <li>
            <Link
              href="/learn/medicare-parts-explained"
              className="text-blue-600 hover:underline"
            >
              What Does Medicare Part B Cover?
            </Link>
          </li>
          <li>
            <Link
              href="/services/you-get-a-medicare-supplement-if-you-are-on-disability"
              className="text-blue-600 hover:underline"
            >
              Getting Medicare Under 65 Through Disability
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement vs. Medicare Advantage: How to Decide
            </Link>
          </li>
                    <li>
              <Link
                href="/services/best-medicare-plan-for-chronic-conditions"
                className="text-blue-600 hover:underline"
              >
                Best Medicare Plan For Chronic Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-people-with-pre-existing-conditions"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For People With Pre Existing Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/services/you-get-a-medicare-supplement-plan-if-you-have-a-pre-existing-condition"
                className="text-blue-600 hover:underline"
              >
                You Get A Medicare Supplement Plan If You Have A Pre Existing Condition
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
            <li>
              <Link
                href="/services/medicare-enrollment-help-for-people-with-lupus"
                className="text-blue-600 hover:underline"
              >
                Medicare Enrollment Help For People With Lupus
              </Link>
            </li>
</ul>
      </section>
    </main>
  );
}