import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Find a Medicare Agent in Mount Laurel NJ | Free Local Help | MedicareYourself",
  description:
    "Find a Medicare agent in Mount Laurel, NJ who compares every major carrier at no cost. Anthony Orner offers free, no-pressure help — call 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/find-a-medicare-agent-in-mount-laurel-nj" },
  openGraph: {
    title:
      "Find a Medicare Agent in Mount Laurel NJ | Free Local Help | MedicareYourself",
    description:
      "Find a Medicare agent in Mount Laurel, NJ who compares every major carrier. Anthony Orner offers free, no-pressure consultations. Call or book online today.",
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
      name: "Find a Medicare Agent in Mount Laurel NJ",
      item: "https://medicareyourself.com/services/find-a-medicare-agent-in-mount-laurel-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Find a Medicare Agent in Mount Laurel, NJ Who Works for You — Not an Insurance Company",
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
    question: "How do I pick a Medicare agent?",
    answer:
      "Look for an independent broker licensed in New Jersey who represents multiple carriers, not just one. Ask how many plans they compare, whether they charge a fee (they shouldn't), and if they help with annual plan reviews. A good agent explains tradeoffs clearly and never pressures you into a decision.",
  },
  {
    question: "Do I need an agent to get Medicare?",
    answer:
      "You don't need one, but working with a licensed broker costs you nothing and can save you hundreds per year. Medicare.gov shows plan options but can't tell you which one fits your doctors, prescriptions, and budget. An independent agent does that comparison for you.",
  },
  {
    question: "How much does it cost to use a Medicare broker in Mount Laurel?",
    answer:
      "Zero. Independent Medicare brokers are paid by the insurance carriers, not by you. Your premium is the same whether you enroll directly or through a broker. The difference is you get personalized guidance at no extra cost.",
  },
  {
    question: "When should I contact a Medicare agent before turning 65?",
    answer:
      "Reach out about six months before your 65th birthday. This gives you time to compare plans during your Medigap Open Enrollment Period, when carriers must accept you regardless of health history. Missing this window can mean higher rates or denial later.",
  },
];

export default function FindMedicareAgentMountLaurelNJ() {
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
          Find a Medicare Agent in Mount Laurel NJ
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Find a Medicare Agent in Mount Laurel, NJ Who Works for You — Not an
        Insurance Company
      </h1>

      <Image
        src="/images/find-a-medicare-agent-in-mount-laurel-nj.webp"
        alt="Find a Medicare agent in Mount Laurel NJ"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        Finding a Medicare agent in Mount Laurel, NJ shouldn't mean getting
        locked into one carrier's products. An independent broker compares plans
        across every major insurer so the recommendation actually fits your
        doctors, your medications, and your budget.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        I'm Anthony Orner, a licensed Medicare broker serving Burlington County.
        My consultations are free, and I never charge you a dime.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What a licensed broker does that Medicare.gov cannot
        </h2>
        <p className="text-gray-700 mb-2">
          Medicare.gov lists plans. It doesn't tell you which one covers your
          cardiologist at Virtua or whether your prescriptions land in a
          cheaper tier with a different carrier.
        </p>
        <p className="text-gray-700">
          A broker cross-references your provider network, pharmacy costs, and
          out-of-pocket limits across every available plan. That's the
          difference between picking a plan and picking the right plan.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Medicare Supplement and Advantage options in Burlington County
        </h2>
        <p className="text-gray-700 mb-2">
          Mount Laurel residents typically choose between two paths:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <strong>Medicare Supplement (Medigap):</strong> Pairs with Original
            Medicare. You pick any doctor who accepts Medicare. Plan G and Plan N
            are the most popular standardized options. Rates vary by carrier.
          </li>
          <li>
            <strong>Medicare Advantage:</strong> Replaces Original Medicare with
            a network-based plan. Many include Part D drug coverage, dental, and
            vision. Networks in Burlington County typically center around Virtua
            and Cooper health systems.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why Mount Laurel residents overpay without a rate comparison
        </h2>
        <p className="text-gray-700 mb-2">
          Medigap plans are standardized by the federal government. Plan G from
          one carrier covers exactly the same benefits as Plan G from another.
          The only difference? Price.
        </p>
        <p className="text-gray-700">
          I've seen premium gaps of $80 or more per month between carriers for
          the same plan in the same zip code. Without a side-by-side comparison,
          you'd never know you were overpaying.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Your Medigap open enrollment window matters
        </h2>
        <p className="text-gray-700 mb-2">
          You get a one-time, six-month Medigap Open Enrollment Period starting
          the month you turn 65 and are enrolled in Part B. During this window,
          no carrier can deny you or charge more because of health conditions.
        </p>
        <p className="text-gray-700">
          Miss it and you may face medical underwriting, higher premiums, or
          outright denial. Start the conversation about six months before your
          Part B effective date.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Real concerns I hear from South Jersey residents
        </h2>
        <p className="text-gray-700 mb-2">
          People in this area worry about provider networks shifting. When a
          major health system drops a carrier, it can disrupt care overnight.
          That's not hypothetical; it happens in South Jersey.
        </p>
        <p className="text-gray-700">
          Having a broker means someone reviews your plan annually and flags
          network changes, premium increases, or better options before they
          become problems.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Schedule a free consultation with Anthony Orner
        </h2>
        <p className="text-gray-700 mb-2">
          I meet with Mount Laurel clients by phone, video, or in person.
          There's no sales pitch. We'll review what you have, compare what's
          available, and you'll make the call.
        </p>
        <p className="text-gray-700">
          If your current plan is already the best fit, I'll tell you that too.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Ready to compare your options?
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/quote" className="underline font-bold">
            Get a Free Quote
          </Link>{" "}
          online.
        </p>
        <p className="text-sm opacity-90">
          No cost. No obligation. Licensed in New Jersey.
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
              href="/medicare-supplement/new-jersey"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-advantage/new-jersey"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/turning-65"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment: What You Need to Know
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
              className="text-blue-600 hover:underline"
            >
              Plan G vs. Plan N: Which Is Right for You?
            </Link>
          </li>
        </ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/plan-compare/" rel="noopener noreferrer" target="_blank" className="underline">Medicare Plan Finder on Medicare.gov</a> and <a href="https://www.medicare.gov/talk-to-someone" rel="noopener noreferrer" target="_blank" className="underline">Medicare's Talk to Someone tool</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-2">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey beneficiaries can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> or contact the <a href="https://www.state.nj.us/dobi/" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
    </main>
  );
}