import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "when can i change my medicare supplement plan for 2026 | Free Switching Help | MedicareYourself",
  description:
    "When can I change my Medicare Supplement plan for 2026? Learn switch rules, guaranteed-issue rights, and underwriting timelines. Free help from a broker.",
  openGraph: {
    title:
      "when can i change my medicare supplement plan for 2026 | Free Switching Help | MedicareYourself",
    description:
      "When can I change my Medicare Supplement plan for 2026? Learn switch rules, guaranteed-issue rights, and underwriting timelines. Free help from a broker.",
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
      name: "When Can I Change My Medicare Supplement Plan for 2026",
      item: "https://www.medicareyourself.com/services/when-can-i-change-my-medicare-supplement-plan-for-2026",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "When Can I Change My Medicare Supplement Plan for 2026? Key Dates and Rules",
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
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
};

const faqs = [
  {
    question: "What time of year can you change Medicare Supplement plans?",
    answer:
      "There is no annual enrollment period for Medigap. You can apply to switch your Medicare Supplement plan any time of year. However, outside your initial 6-month Medigap Open Enrollment Period or a guaranteed-issue situation, insurance companies can use medical underwriting to decide whether to approve your application and what rate to charge.",
  },
  {
    question: "Is it too late to change Medicare plans for 2026?",
    answer:
      "For Medicare Advantage and Part D, the Annual Enrollment Period runs October 15 through December 7 for coverage starting January 1, 2026. For Medicare Supplement (Medigap) plans, there is no annual deadline. You can apply to switch at any time, but approval may depend on your health status unless you qualify for guaranteed-issue rights.",
  },
  {
    question:
      "Do I need to cancel my current Medigap plan before applying for a new one?",
    answer:
      "No. Keep your current Medigap policy active until your new policy is in effect. Once your new plan is approved and active, you will have a 30-day free look period to decide if you want to keep it. Only cancel your old plan after you are certain you want to stay with the new one. You will pay both premiums during the overlap month.",
  },
];

export default function WhenCanIChangeMyMedicareSupplementPlanFor2026() {
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
          When Can I Change My Medicare Supplement Plan for 2026
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4 text-gray-900">
        When Can I Change My Medicare Supplement Plan for 2026? Key Dates and Rules
      </h1>

      <Image
        src="/images/when-can-i-change-my-medicare-supplement-plan-for-2026.webp"
        alt="when can I change my Medicare Supplement plan for 2026"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg text-gray-700 mb-2">
        When can I change my Medicare Supplement plan for 2026? The short answer: you can apply to switch any time of year. Medigap does not follow the same enrollment calendar as Medicare Advantage or Part D.
      </p>
      <p className="text-gray-700 mb-6">
        But "can apply" and "will get approved" are two different things. Your timing matters because it determines whether a carrier can ask health questions or charge you more. Here is exactly how it works.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          There is no annual enrollment period for Medigap switches
        </h2>
        <p className="text-gray-700 mb-2">
          Medicare Advantage and Part D have an Annual Enrollment Period every October 15 through December 7. Medigap does not. You can submit an application to change your Medicare Supplement plan on any date, whether that is March, July, or November.
        </p>
        <p className="text-gray-700">
          The catch is that federal law only guarantees you the right to buy any Medigap policy during your one-time, 6-month Medigap Open Enrollment Period. That window starts the month you turn 65 and are enrolled in Part B. Miss it, and your options narrow.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Guaranteed-issue rights that let you change without underwriting
        </h2>
        <p className="text-gray-700 mb-2">
          Certain life events give you federally protected guaranteed-issue rights. During these windows, an insurance company cannot deny you coverage, charge more because of health conditions, or impose a waiting period for pre-existing conditions.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Your Medicare Advantage plan leaves your area or stops operating</li>
          <li>You lose employer or union group health coverage</li>
          <li>Your Medigap insurance company goes bankrupt or violates its contract</li>
          <li>You moved out of your plan's service area</li>
          <li>You dropped a Medigap policy to join a Medicare Advantage plan for the first time and want to switch back within 12 months</li>
        </ul>
        <p className="text-gray-700 mt-2">
          If one of these applies to you, act within 63 days of losing coverage. That deadline is strict.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          How medical underwriting works if you switch outside a protected window
        </h2>
        <p className="text-gray-700 mb-2">
          Outside your Open Enrollment Period or a guaranteed-issue event, carriers in most states can use medical underwriting. That means they review your health history, current medications, and recent treatments.
        </p>
        <p className="text-gray-700">
          If you are in good health, underwriting usually is not a problem. If you have chronic conditions, a carrier may decline your application or offer a higher premium. Rules vary by state, so call to confirm how your state handles Medigap underwriting.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Steps to switch your Medigap plan before 2026 rates take effect
        </h2>
        <p className="text-gray-700 mb-2">
          Most carriers announce rate increases in the first quarter. If you want a lower premium before a 2026 rate hike hits, follow this process:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 space-y-1">
          <li>Call us at 855-559-1700 so we can compare current rates across carriers</li>
          <li>Submit your application to the new carrier while keeping your existing plan active</li>
          <li>Wait for approval, then use your 30-day free look period to confirm you are satisfied</li>
          <li>Cancel your old policy only after the new one is in effect</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Why switching sooner can save you money
        </h2>
        <p className="text-gray-700 mb-2">
          Medigap premiums are based partly on your age at the time you apply. The younger and healthier you are when you switch, the better your rate. Waiting another year means you are one year older on the application.
        </p>
        <p className="text-gray-700">
          For clients on Plan G or Plan N, I often see savings of $30 to $60 per month just by moving to a different carrier offering the same standardized benefits. That is $360 to $720 per year in your pocket.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Keep your current coverage until the new plan is active
        </h2>
        <p className="text-gray-700 mb-2">
          This is the most common mistake I see. People cancel their Medigap policy before the new one is approved, then get stuck with a gap in coverage or a denial they did not expect.
        </p>
        <p className="text-gray-700">
          Always overlap. You will pay two premiums for about one month. That one extra payment is far cheaper than an uncovered hospital stay with the 2026 Part A deductible at $1,676 per benefit period.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-10 text-center">
        <p className="text-xl font-semibold text-blue-900 mb-2">
          Ready to compare Medigap rates for 2026?
        </p>
        <p className="text-gray-700 mb-4">
          Call <a href="tel:8555591700" className="text-blue-700 font-bold hover:underline">855-559-1700</a> for a free, no-obligation quote, or{" "}
          <Link href="/contact" className="text-blue-700 font-bold hover:underline">
            get a free quote online
          </Link>.
        </p>
        <p className="text-sm text-gray-500">
          Anthony Orner, Licensed Medicare Broker
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">
          Related resources
        </h2>
        <ul className="space-y-2">
          <li>
            <Link href="/services/medicare-plan-g" className="text-blue-700 hover:underline">
              Medicare Plan G: Benefits, Costs, and Coverage Details
            </Link>
          </li>
          <li>
            <Link href="/services/medicare-plan-n" className="text-blue-700 hover:underline">
              Medicare Plan N: What It Covers and What You Pay
            </Link>
          </li>
          <li>
            <Link href="/services/medigap-open-enrollment" className="text-blue-700 hover:underline">
              Medigap Open Enrollment Period: Your One-Time Window Explained
            </Link>
          </li>
          <li>
            <Link href="/services/medicare-supplement-vs-medicare-advantage" className="text-blue-700 hover:underline">
              Medicare Supplement vs. Medicare Advantage: Which Is Right for You?
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}