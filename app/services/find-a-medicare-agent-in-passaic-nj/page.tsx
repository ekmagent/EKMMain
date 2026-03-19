import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "find a medicare agent in passaic nj | Free Independent Advice | MedicareYourself",
  description:
    "Find a Medicare agent in Passaic NJ — Anthony Orner compares Supplement and Advantage plans across every major carrier. Free consultation, no obligation.",
  openGraph: {
    title:
      "find a medicare agent in passaic nj | Free Independent Advice | MedicareYourself",
    description:
      "Find a Medicare agent in Passaic NJ — Anthony Orner compares Supplement and Advantage plans across every major carrier. Free consultation, no obligation.",
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
      name: "Find a Medicare Agent in Passaic NJ",
      item: "https://medicareyourself.com/services/find-a-medicare-agent-in-passaic-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Find a Medicare Agent in Passaic, NJ Who Compares Every Major Carrier",
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
  datePublished: "2025-07-01",
  dateModified: "2025-07-01",
};

const faqs = [
  {
    question: "How to pick a Medicare agent?",
    answer:
      "Look for an independent broker licensed in New Jersey who represents multiple carriers. Ask how many plans they can quote. If they only show you one company's options, they're captive — and you won't see the full picture. A good agent should explain costs clearly, never pressure you, and offer ongoing support after enrollment.",
  },
  {
    question: "How do I speak to a live person about Medicare?",
    answer:
      "You can call 1-800-MEDICARE (1-800-633-4227) 24/7 for general questions. For personalized plan comparisons in Passaic County, call an independent broker like Anthony Orner at 855-559-1700 during business hours — no phone tree, no hold music.",
  },
  {
    question: "Does it cost extra to use a Medicare broker in Passaic?",
    answer:
      "No. Medicare brokers are paid by insurance carriers, not by you. Your premium stays the same whether you enroll directly or through a broker. The difference is that a broker does the comparison work for you across multiple companies.",
  },
  {
    question: "When is the best time to enroll in Medicare in New Jersey?",
    answer:
      "For Medicare Advantage and Part D, Open Enrollment runs October 15 through December 7. For Medigap (Supplement) plans, your best window is the 6-month Medigap Open Enrollment Period starting the month you turn 65 and have Part B. During this window, carriers can't deny you or charge more for health conditions.",
  },
];

export default function FindMedicareAgentPassaicNJ() {
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
        <span className="text-gray-700">Find a Medicare Agent in Passaic NJ</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Find a Medicare Agent in Passaic, NJ Who Compares Every Major Carrier
      </h1>

      <Image
        src="/images/hub_find-a-medicare-agent-in-passaic-nj.webp"
        alt="find a medicare agent in passaic nj"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        Finding a Medicare agent in Passaic, NJ shouldn't mean calling a 1-800 number and hoping someone picks up. I'm Anthony Orner, an independent Medicare broker licensed in New Jersey, and I compare plans across every major carrier so you see real options, not just one company's lineup.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        No cost to you. No pressure. Just a side-by-side look at what's actually available in Passaic County.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What an independent broker can do that a captive agent cannot
        </h2>
        <p className="text-gray-700 mb-2">
          A captive agent works for one insurance company. They'll show you that company's plans and nothing else. An independent broker like me is contracted with multiple carriers, which means I can pull quotes from Aetna, Cigna, Humana, United, Mutual of Omaha, and others in a single appointment.
        </p>
        <p className="text-gray-700">
          You get an honest comparison. I get paid the same commission regardless of which carrier you pick, so there's zero incentive for me to steer you wrong.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Medicare options available in Passaic County for 2025–2026
        </h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>
            <strong>Medicare Supplement (Medigap):</strong> Plans like G and N that cover gaps in Original Medicare. Rates vary by carrier, age, and zip code.
          </li>
          <li>
            <strong>Medicare Advantage (Part C):</strong> HMO and PPO plans that bundle hospital, medical, and often drug coverage. Several carriers offer $0-premium options in Passaic County.
          </li>
          <li>
            <strong>Part D prescription drug plans:</strong> Standalone drug coverage for people who stay on Original Medicare.
          </li>
          <li>
            <strong>Dental, vision, and hearing:</strong> Available as standalone policies or bundled into many Advantage plans.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why Passaic County residents need local expertise
        </h2>
        <p className="text-gray-700 mb-2">
          Passaic County's provider networks shift every year. Hospitals like St. Joseph's University Medical Center and providers throughout Clifton, Wayne, and Paterson may be in-network for one Advantage plan and out-of-network for another. Carrier changes like the ones hitting UnitedHealthcare members across parts of New Jersey make it critical to verify your doctors before you enroll.
        </p>
        <p className="text-gray-700">
          I check network directories for your specific doctors and pharmacies before recommending anything.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Red flags when choosing a Medicare agent
        </h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>They only quote one carrier's plans.</li>
          <li>They pressure you to enroll on the first call.</li>
          <li>They can't explain the difference between Supplement and Advantage clearly.</li>
          <li>They won't give you a straight answer about what a plan doesn't cover.</li>
          <li>They disappear after enrollment and you can't reach them for service issues.</li>
        </ul>
        <p className="text-gray-700 mt-3">
          A good broker stays with you year after year, reviews your plan each fall, and picks up the phone when something goes wrong.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Key enrollment dates to know
        </h2>
        <p className="text-gray-700 mb-2">
          Medicare Advantage and Part D Open Enrollment runs October 15 through December 7. Miss it and you're generally locked in for the year.
        </p>
        <p className="text-gray-700 mb-2">
          For Medigap, your guaranteed-issue window is the 6 months starting the month you turn 65 and enroll in Part B. Apply during this period and no carrier can deny you or charge extra for pre-existing conditions.
        </p>
        <p className="text-gray-700">
          Turning 65 soon? Start the conversation at least 6 months early so you're not scrambling when the window opens.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Get a free side-by-side quote from Anthony Orner
        </h2>
        <p className="text-gray-700 mb-2">
          I'll pull quotes from every major carrier available in Passaic County, lay them out side by side, and walk you through the tradeoffs in plain English. No jargon, no hard sell.
        </p>
        <p className="text-gray-700">
          Call me at <strong>855-559-1700</strong> or request a quote online. Most calls take about 15 minutes.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Ready to compare Medicare plans in Passaic County?
        </p>
        <p className="mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/contact" className="underline font-bold">
            Get a Free Quote
          </Link>
        </p>
      </div>

      <section className="mt-10">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Related resources
        </h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/services/medicare-supplement-plans-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-advantage-plans-passaic-county"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage Plans in Passaic County
            </Link>
          </li>
          <li>
            <Link
              href="/services/when-to-enroll-in-medicare-nj"
              className="text-blue-600 hover:underline"
            >
              When to Enroll in Medicare in NJ
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-plan-g-vs-plan-n-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Plan G vs Plan N in New Jersey
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}