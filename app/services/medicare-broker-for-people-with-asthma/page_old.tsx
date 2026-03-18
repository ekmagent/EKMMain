import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare broker for people with asthma | Free Help Finding Coverage | MedicareYourself",
  description:
    "Medicare broker for people with asthma — Anthony Orner knows which carriers approve asthma applicants for Medigap. Free help finding the right plan.",
  openGraph: {
    title:
      "medicare broker for people with asthma | Free Help Finding Coverage | MedicareYourself",
    description:
      "Medicare broker for people with asthma — Anthony Orner knows which carriers approve asthma applicants for Medigap. Free help finding the right plan.",
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
      name: "Medicare Broker for People With Asthma",
      item: "https://www.medicareyourself.com/services/medicare-broker-for-people-with-asthma",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for People With Asthma: Finding the Right Plan When Underwriting Gets Complicated",
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
  datePublished: "2025-01-01",
  dateModified: "2025-01-01",
};

const faqs = [
  {
    question: "Can I get Medicare if I have asthma?",
    answer:
      "Yes. Medicare eligibility is based on age (65+) or qualifying disability — not your health conditions. Asthma does not disqualify you from Original Medicare, Medicare Advantage, or Part D. The challenge comes when applying for a Medigap supplement outside your open enrollment period, where health underwriting may apply.",
  },
  {
    question: "What asthma inhalers will Medicare pay for?",
    answer:
      "Medicare Part D covers most prescription inhalers, but the specific brands and your copay depend on the plan's formulary. Some plans put brand-name inhalers on higher cost tiers. A broker can compare Part D formularies to find a plan that covers your exact inhalers at the lowest cost.",
  },
  {
    question: "Is asthma a lifelong disability?",
    answer:
      "Asthma is a chronic condition, but it's not automatically classified as a disability under Medicare rules. Some people with severe, persistent asthma may qualify for Social Security Disability, which can trigger Medicare eligibility before age 65. Most people with asthma qualify for Medicare through the standard age-65 pathway.",
  },
  {
    question:
      "Will asthma affect my Medicare Supplement premiums?",
    answer:
      "During your Medigap Open Enrollment Period — the 6 months starting when you're 65+ and enrolled in Part B — carriers cannot charge you more or deny you for asthma. Outside that window, underwriting applies and some carriers may increase premiums or decline coverage based on asthma severity.",
  },
];

export default function MedicareBrokerForPeopleWithAsthma() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        {" > "}
        <Link href="/medicare-guides" className="hover:underline">
          Medicare Guides
        </Link>
        {" > "}
        <span className="text-gray-700">Medicare Broker for People With Asthma</span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Medicare Broker for People With Asthma: Finding the Right Plan When Underwriting Gets Complicated
      </h1>

      <Image
        src="/images/medicare-broker-for-people-with-asthma.webp"
        alt="Medicare broker for people with asthma"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="mb-4">
        A Medicare broker for people with asthma can save you from one of the most frustrating parts of turning 65: discovering that a condition you've managed for years suddenly complicates your insurance options. You know your rescue inhaler costs, your controller medication schedule, your triggers. What you might not know is how carriers view all of that during underwriting.
      </p>

      <p className="mb-6">
        I'm Anthony Orner, a licensed Medicare broker. I work with asthma clients regularly and know which carriers are worth applying to - and which ones will waste your time.
      </p>

      <PhoneCTA />

      <h2 className="text-2xl font-semibold mt-10 mb-3">
        How asthma affects Medicare Supplement underwriting
      </h2>
      <p className="mb-4">
        During your Medigap Open Enrollment Period - the 6 months starting when you're 65+ and enrolled in Part B - no carrier can deny you or charge more because of asthma. That's federal law.
      </p>
      <p className="mb-4">
        Outside that window, it's a different story. Carriers ask about your asthma severity, hospitalizations, ER visits, and medications. Mild intermittent asthma with a rescue inhaler? Usually fine. Moderate-to-severe persistent asthma with oral steroids or biologics? Some carriers will decline you outright.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">
        Which carriers are most lenient with asthma applicants
      </h2>
      <p className="mb-4">
        Not every carrier underwrites asthma the same way. Some treat any inhaler use as a red flag. Others only care if you've been hospitalized in the last two years. A few will approve moderate asthma with no rate increase at all.
      </p>
      <p className="mb-4">
        I track which carriers approve asthma applicants and which ones don't, so you're not submitting blind applications and stacking up denials. One denial doesn't hurt you - but the process is exhausting when you're already managing a condition.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">
        Plan G vs. Medicare Advantage when you have asthma
      </h2>
      <p className="mb-4">
        Plan G covers your 20% share of Part B costs after a $283 annual deductible. No networks, no referrals, no prior authorizations for specialist visits. If your asthma requires a pulmonologist or allergist, you pick the doctor.
      </p>
      <p className="mb-4">
        Medicare Advantage plans can work too, especially if your asthma is well-controlled and your doctors are in-network. But copays for specialist visits and potential prior authorization for medications are real tradeoffs. If your inhaler costs are high, compare Part D formularies carefully.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">
        Your inhaler costs matter more than you think
      </h2>
      <p className="mb-4">
        People managing asthma know the real cost isn't the doctor visit - it's the medications. Brand-name inhalers can land on Tier 3 or Tier 4 of a Part D formulary, meaning $40-$100+ copays per fill. I compare formularies across Part D and Medicare Advantage plans to find the lowest out-of-pocket cost for your exact prescriptions.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">
        Timing your enrollment to protect your options
      </h2>
      <p className="mb-4">
        If you're approaching 65 and have asthma, your Medigap Open Enrollment Period is the most important window you'll get. During those 6 months, every carrier must accept you at standard rates regardless of your asthma history.
      </p>
      <p className="mb-4">
        I typically have clients apply up to 6 months before their Part B start date to lock in the best rate early. Once that window closes, underwriting applies - and your options shrink.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">
        What I do differently for clients with pre-existing conditions
      </h2>
      <p className="mb-4">
        I don't just run a quote. I review your medication list, check which carriers are currently approving your profile, and submit to the right one first. That means less paperwork, fewer surprises, and a plan that actually covers how you use healthcare - not just a premium that looks good on paper.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-10 mb-10 text-center">
        <p className="text-lg font-semibold mb-2">
          Ready to compare plans that work with your asthma?
        </p>
        <p className="mb-3">
          Call{" "}
          <a href="tel:8555591700" className="text-blue-700 font-bold hover:underline">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/contact" className="text-blue-700 font-bold hover:underline">
            get a free quote
          </Link>{" "}
          - no cost, no obligation.
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/services/medicare-broker-pre-existing-conditions"
              className="text-blue-700 hover:underline"
            >
              Medicare Broker for Pre-Existing Conditions
            </Link>
          </li>
          <li>
            <Link
              href="/guides/medigap-open-enrollment"
              className="text-blue-700 hover:underline"
            >
              Medigap Open Enrollment: What You Need to Know
            </Link>
          </li>
          <li>
            <Link
              href="/guides/plan-g-vs-medicare-advantage"
              className="text-blue-700 hover:underline"
            >
              Plan G vs. Medicare Advantage: How to Choose
            </Link>
          </li>
          <li>
            <Link
              href="/guides/part-d-prescription-drug-coverage"
              className="text-blue-700 hover:underline"
            >
              Part D Prescription Drug Coverage Guide
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}