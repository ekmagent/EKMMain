import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare insurance agents in belleville new jersey | Free Plan Comparison | MedicareYourself",
  description:
    "Medicare insurance agents in Belleville, New Jersey — Anthony Orner compares Medigap and Advantage plans in Essex County at no cost. Book a free consultation.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-insurance-agents-in-belleville-new-jersey" },
  openGraph: {
    title:
      "medicare insurance agents in belleville new jersey | Free Plan Comparison | MedicareYourself",
    description:
      "Medicare insurance agents in Belleville, New Jersey — Anthony Orner compares Medigap and Advantage plans in Essex County at no cost. Book a free consultation.",
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
      name: "Medicare Insurance Agents in Belleville, New Jersey",
      item: "https://medicareyourself.com/services/medicare-insurance-agents-in-belleville-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Insurance Agents in Belleville, New Jersey: Independent Broker Serving Essex County",
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
    question: "Do Medicare insurance agents charge for their help?",
    answer:
      "No. Licensed Medicare brokers like Anthony Orner are paid by the insurance carriers, not by you. Plan comparisons, enrollment help, and ongoing support are free to Belleville residents.",
  },
  {
    question: "Should I use an insurance agent for Medicare?",
    answer:
      "An independent broker compares plans from multiple carriers at once, which saves you hours of research. Captive agents only show one company's options. Independent brokers show you the full picture so you pick what actually fits your doctors, prescriptions, and budget.",
  },
  {
    question: "How can I get help with Medicare premiums in New Jersey?",
    answer:
      "New Jersey offers programs like NJ PAAD (Pharmaceutical Assistance to the Aged and Disabled) and the Medicare Savings Programs, which can help cover Part B premiums and drug costs. Anthony can walk you through eligibility during your free consultation.",
  },
  {
    question: "What is the highest reviewed Medicare insurance in NJ?",
    answer:
      "Plan ratings change yearly. In Essex County, several Medicare Advantage and Medigap carriers earn 4+ stars from CMS. The best plan depends on your specific doctors, medications, and how often you travel. A broker can match you based on your actual situation, not just star ratings.",
  },
];

export default function MedicareInsuranceAgentsBellevilleNewJersey() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
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
          Medicare Insurance Agents in Belleville, New Jersey
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Medicare Insurance Agents in Belleville, New Jersey: Independent Broker
        Serving Essex County
      </h1>

      <Image
        src="/images/medicare-insurance-agents-in-belleville-new-jersey.webp"
        alt="Medicare insurance agents in Belleville New Jersey"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        Medicare insurance agents in Belleville, New Jersey don't all work the same way. Some represent a single carrier. I'm Anthony Orner, an independent broker who compares plans from multiple companies so Belleville residents see real options side by side.
      </p>
      <p className="text-lg mb-6">
        No cost to you. No pressure. Just honest answers about what covers your doctors and prescriptions in 07109.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Belleville Medicare demographics and why plan choice matters here
        </h2>
        <p className="mb-3">
          Belleville sits in Essex County, one of the most densely populated counties in New Jersey. That density means more carrier competition, which is good news for you. More carriers means more plan options and sharper pricing.
        </p>
        <p>
          Many Belleville residents rely on Clara Maass Medical Center in neighboring Belleville or hospitals in Newark and Montclair. Your plan needs to include the providers you actually use. I check network directories before recommending anything.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Medigap and Medicare Advantage carriers available in 07109
        </h2>
        <p className="mb-3">
          Belleville's zip code typically has access to:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-3">
          <li>
            <strong>Medigap (Medicare Supplement):</strong> Carriers like Aetna, Cigna, United American, and Mutual of Omaha offer Plans G and N in Essex County. Rates vary by carrier, age, and tobacco use.
          </li>
          <li>
            <strong>Medicare Advantage:</strong> Aetna, Horizon, UnitedHealthcare, and Humana typically offer HMO and PPO options in 07109, often with $0 premiums and added dental/vision benefits.
          </li>
          <li>
            <strong>Part D:</strong> Standalone drug plans pair with Medigap. I run your medications through every available formulary to find the lowest annual cost.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          How an independent broker saves Belleville residents money
        </h2>
        <p className="mb-3">
          A captive agent shows you one company's lineup. I show you plans from all the major carriers in Essex County. Same enrollment, same coverage, but you actually see what's available.
        </p>
        <p>
          One common mistake: people pick a Medicare Advantage plan without checking if their specialists are in-network. Provider networks shift every year. I verify your doctors and pharmacies before enrollment, and I re-check them each Annual Enrollment Period (October 15 through December 7).
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          2026 Medicare costs Belleville residents should know
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Part B premium: $202.90/month</li>
          <li>Part B deductible: $283/year</li>
          <li>Part A inpatient deductible: $1,676 per benefit period</li>
          <li>Skilled nursing facility coinsurance (days 21-100): $209.50/day</li>
          <li>Part B late enrollment penalty: 10% for every 12 months you delayed</li>
        </ul>
        <p className="mt-3">
          These out-of-pocket costs are exactly why most Belleville residents choose either a Medigap plan or a Medicare Advantage plan. Going with Original Medicare alone leaves real financial gaps.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Medigap enrollment timing for Belleville residents turning 65
        </h2>
        <p className="mb-3">
          Your Medigap Open Enrollment Period lasts 6 months, starting the month you turn 65 and are enrolled in Part B. During this window, carriers can't deny you or charge more for health conditions. Miss it, and you may face medical underwriting.
        </p>
        <p>
          I tell clients to start planning about 6 months before their Part B effective date. That gives us time to compare rates without rushing.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Schedule a free Medicare consultation by phone or video
        </h2>
        <p className="mb-3">
          I work with Belleville residents by phone, video, or in person. Most consultations take about 20 minutes. I'll ask about your doctors, medications, and how you use healthcare. Then I'll show you what actually makes sense.
        </p>
        <p>
          No sign-up required. No obligation. Call 855-559-1700 or book online.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-8 text-center">
        <p className="text-2xl font-bold mb-3">
          Talk to a Licensed Medicare Broker — Free
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-semibold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/quote" className="underline font-semibold">
            Get a Free Quote
          </Link>
        </p>
      </div>

      <section className="mt-12">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medigap Plan G vs. Plan N: Which Saves You More?
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage vs. Medigap: How to Decide
            </Link>
          </li>
          <li>
            <Link
              href="/services/find-a-medicare-agent-in-montclair-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Insurance Agents in Essex County, New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/learn/medicare-help-low-income"
              className="text-blue-600 hover:underline"
            >
              New Jersey Medicare Savings Programs: Eligibility and How to Apply
            </Link>
          </li>
                    <li>
              <Link
                href="/services/find-an-nj-medicare-broker-near-you"
                className="text-blue-600 hover:underline"
              >
                Find An NJ Medicare Broker Near You
              </Link>
            </li>
            <li>
              <Link
                href="/services/free-medicare-broker-new-jersey"
                className="text-blue-600 hover:underline"
              >
                Free Medicare Broker New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/services/independent-medicare-agents-near-me"
                className="text-blue-600 hover:underline"
              >
                Independent Medicare Agents Near Me
              </Link>
            </li>
            <li>
              <Link
                href="/services/how-to-enroll-in-medicare-in-new-jersey"
                className="text-blue-600 hover:underline"
              >
                How To Enroll In Medicare In New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-insurance-agents-in-bayonne-new-jersey"
                className="text-blue-600 hover:underline"
              >
                Medicare Insurance Agents In Bayonne New Jersey
              </Link>
            </li>
</ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/plan-compare" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">Medicare.gov Plan Finder</a> · <a href="https://www.medicare.gov/basics/get-started-with-medicare" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">Getting Started with Medicare</a></div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
      </section>
    </main>
  );
}