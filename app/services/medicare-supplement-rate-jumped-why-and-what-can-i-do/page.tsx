import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "My Medicare Supplement Rate Just Jumped — Why, and What Can I Do? | Free Rate Comparison | MedicareYourself",
  description:
    "Medicare Supplement rate jumped? Learn why Medigap premiums rise and how switching to the same plan letter with a new carrier may lower your cost. Free review.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-supplement-rate-jumped-why-and-what-can-i-do" },
  openGraph: {
    title:
      "My Medicare Supplement Rate Just Jumped — Why, and What Can I Do? | Free Rate Comparison | MedicareYourself",
    description:
      "My Medicare Supplement rate just jumped — here's why premiums increase and how switching carriers can cut your cost. Free comparison from Anthony Orner.",
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
      name: "Medicare Supplement Rate Jumped — Why and What to Do",
      item: "https://medicareyourself.com/services/medicare-supplement-rate-jumped-why-and-what-can-i-do",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Your Medicare Supplement Rate Just Jumped — Here's Why and What You Can Do About It",
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
  datePublished: "2026-03-17",
  dateModified: "2026-03-22",
};

const faqs = [
  {
    question: "Can my Medicare Supplement rate increase more than once a year?",
    answer:
      "Yes. Some carriers apply annual rate increases on your policy anniversary date, but your state's insurance department may also approve a separate block rate increase at a different time. That means two increases in one calendar year are possible.",
  },
  {
    question:
      "Do I need to wait until open enrollment to switch Medigap carriers?",
    answer:
      "No. Medicare Supplement plans don't follow the October-December enrollment period. You can apply to switch carriers any time of year. However, outside your initial Medigap Open Enrollment Period, you'll typically need to pass medical underwriting unless a federal guaranteed issue right applies.",
  },
  {
    question:
      "Will I lose coverage if I switch from one Plan G to another carrier's Plan G?",
    answer:
      "No. Medigap plans are standardized by letter. A Plan G from one carrier covers exactly the same benefits as a Plan G from any other carrier. Only the premium and company differ.",
  },
  {
    question: "Why do some carriers raise rates so much more than others?",
    answer:
      "It depends on the carrier's pricing strategy and the health of their insured pool. Some companies price low initially to attract members, then raise rates aggressively later. Others price moderately from the start and show more stable increases over time.",
  },
];

export default function MedicareSupplementRateJumpedPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />

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
          Medicare Supplement Rate Jumped — Why and What to Do
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
        Your Medicare Supplement Rate Just Jumped — Here's Why and What You Can
        Do About It
      </h1>

      <Image
        src="/images/medicare-supplement-rate-jumped-why-and-what-can-i-do_vector.webp"
        alt="my medicare supplement rate just jumped — why and what can I do"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        My Medicare Supplement rate just jumped is one of the most common calls I
        get, especially mid-year when carriers push through 15% to 20%
        increases. You're not imagining it. These hikes are real, and they're
        hitting harder than usual in 2025.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        The good news: you're not stuck. Let me walk you through what's causing
        it and what you can actually do right now.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Three reasons your Medigap premium increased this year
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>Age-based increases.</strong> If your plan uses attained-age
            pricing, your premium goes up automatically as you get older. This
            part is predictable.
          </li>
          <li>
            <strong>Block rate increases.</strong> When claims rise across your
            carrier's pool of insured members, everyone in that block shares the
            cost. This has nothing to do with your personal health.
          </li>
          <li>
            <strong>Medical inflation.</strong> Healthcare costs are climbing.
            Carriers adjust premiums when the cost of covering hospital stays,
            doctor visits, and skilled nursing crosses their projections.
          </li>
        </ul>
        <p className="text-gray-700 mt-3">
          When age increases and block increases stack together, 10% to 18%
          jumps in a single year are not unusual. Some carriers have pushed past
          that in 2025.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How attained-age vs issue-age pricing changes your bill
        </h2>
        <p className="text-gray-700 mb-3">
          Most Medigap policies use <strong>attained-age pricing</strong>. Your
          rate increases as you age, on top of any block increases the carrier
          files with the state.
        </p>
        <p className="text-gray-700 mb-3">
          <strong>Issue-age pricing</strong> locks your base rate to the age you
          were when you bought the plan. You'll still see adjustments for
          inflation, but the age-related component stays flat. Fewer carriers
          offer this model, and availability varies by state.
        </p>
        <p className="text-gray-700">
          At 67, the difference may feel small. By 78 or 83, it can be hundreds
          of dollars a year.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          The company matters more than the letter plan
        </h2>
        <p className="text-gray-700 mb-3">
          Plan G is standardized. A Plan G from one carrier covers the exact
          same benefits as a Plan G from another. What's not identical is
          long-term premium behavior.
        </p>
        <p className="text-gray-700">
          Some carriers price aggressively low to attract new members, then
          raise rates hard once the block ages. Others start a bit higher but
          deliver more stable increases over time. I track this data across
          carriers so you don't have to guess.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          When switching carriers saves money without losing coverage
        </h2>
        <p className="text-gray-700 mb-3">
          You can apply to switch Medigap carriers at any time of year. There's
          no open enrollment window to wait for. If another carrier offers the
          same plan letter at a lower rate for your age and zip code, the
          medical benefits are identical.
        </p>
        <p className="text-gray-700 mb-3">
          The catch: outside your initial 6-month Medigap Open Enrollment
          Period, most carriers require medical underwriting. If you're in good
          health, this is often straightforward. If you have significant
          pre-existing conditions, federal guaranteed issue rights may apply in
          certain situations (like losing employer coverage or a carrier leaving
          your area).
        </p>
        <p className="text-gray-700">
          Don't drop your current plan until a new one is approved and in force.
          That's a rule I enforce with every client.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What people wish they'd known sooner
        </h2>
        <p className="text-gray-700 mb-3">
          Most people focus entirely on the starting premium when they first
          pick a Medigap plan. That's the wrong number to obsess over. The real
          question is: what will I be paying at 75, 80, 85?
        </p>
        <p className="text-gray-700">
          A $20/month savings today from a carrier with aggressive rate history
          can cost you thousands over a decade. I show clients actual rate
          history before they choose.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How to get a free rate comparison before your next payment
        </h2>
        <p className="text-gray-700 mb-3">
          I'll pull current rates from multiple carriers for your exact age, zip
          code, and plan type. Takes about 10 minutes on the phone. No
          obligation, no pressure.
        </p>
        <p className="text-gray-700">
          If switching saves you money, I handle the paperwork. If staying put
          makes more sense, I'll tell you that too.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Stop overpaying for the same coverage.
        </p>
        <p className="mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/quote" className="underline font-bold">
            get a free quote online
          </Link>
          . Anthony Orner will run a side-by-side comparison at no cost.
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
              href="/services/switch-medigap-plans"
              className="text-blue-600 hover:underline"
            >
              Switch Medigap Plans — See If You Could Save in 2 Minutes
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medigap Plan G vs Plan N: Which Saves You More?
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-supplement-open-enrollment-online"
              className="text-blue-600 hover:underline"
            >
              When to Enroll in a Medicare Supplement Plan
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement vs Medicare Advantage
            </Link>
          </li>
          <li>
            <Link
              href="/services/you-get-a-medicare-supplement-plan-if-you-have-a-pre-existing-condition"
              className="text-blue-600 hover:underline"
            >
              Guaranteed Issue Rights for Medigap Plans
            </Link>
          </li>
        </ul>
            <div className="text-sm text-gray-600 mt-4">Learn more from official sources: <a href="https://www.medicare.gov/health-drug-plans/medigap" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">Medicare.gov — Medigap (Medicare Supplement Insurance)</a> and <a href="https://www.medicare.gov/health-drug-plans/medigap/basics/costs" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">How Medigap Policies Are Priced</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific guidance, contact the <a href="https://www.state.nj.us/dobi/index.html" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">New Jersey Department of Banking and Insurance</a> or your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">local SHIP counselor</a> for free, unbiased Medicare help.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">NJ Department of Banking and Insurance</a> or the free <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">NJ State Health Insurance Assistance Program (SHIP)</a> for unbiased Medigap guidance.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific help, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">State Health Insurance Assistance Program (SHIP)</a> or the <a href="https://www.nj.gov/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">NJ Department of Banking and Insurance</a> for free counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">NJ Department of Banking and Insurance</a> or get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">NJ SHIP</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific help, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">State Health Insurance Assistance Program (SHIP)</a> or the <a href="https://www.nj.gov/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">New Jersey Department of Banking and Insurance</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
      </section>
    </main>
  );
}