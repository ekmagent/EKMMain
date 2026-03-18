import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for cancer survivors | Free Coverage Review | MedicareYourself",
  description:
    "Medicare broker for cancer survivors navigating post-treatment coverage — scans, oncology visits, prescriptions. Anthony Orner reviews your plan for free.",
  openGraph: {
    title:
      "Medicare broker for cancer survivors | Free Coverage Review | MedicareYourself",
    description:
      "Medicare broker for cancer survivors navigating post-treatment coverage — scans, oncology visits, prescriptions. Anthony Orner reviews your plan for free.",
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
      name: "Medicare Broker for Cancer Survivors",
      item: "https://www.medicareyourself.com/services/medicare-broker-for-cancer-survivors",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Cancer Survivors — Because the Fight Doesn't End When Treatment Does",
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
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. Medicare brokers are paid by the insurance carriers, not by you. My plan reviews, comparisons, and enrollment help are completely free. You get the same plans at the same price as going direct - but with someone in your corner who understands post-cancer coverage needs.",
  },
  {
    question: "Should I use a Medicare insurance broker?",
    answer:
      "If you're a cancer survivor, absolutely. The difference between a Supplement and an Advantage plan can mean thousands of dollars in out-of-pocket costs for scans, labs, and oncology visits. A broker who understands post-treatment surveillance can match your plan to your actual care schedule - not just the cheapest premium.",
  },
  {
    question:
      "Can I switch Medicare plans if my current plan isn't covering my cancer follow-up care?",
    answer:
      "You can switch during the Annual Enrollment Period (October 15 - December 7) or during the Medicare Advantage Open Enrollment Period (January 1 - March 31). Certain qualifying events - like moving or losing coverage - may trigger a Special Enrollment Period. Call me and I'll walk through your specific situation.",
  },
  {
    question:
      "Does Medicare cover follow-up scans and oncology visits after cancer treatment?",
    answer:
      "Original Medicare (Part B) covers medically necessary follow-up care including CT scans, PET scans, blood work, and oncologist visits - but you'll pay 20% coinsurance after the $283 annual deductible unless you have supplemental coverage. A Medigap plan can cover most or all of that 20%.",
  },
];

export default function MedicareBrokerForCancerSurvivors() {
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
        <span className="text-gray-700">Medicare Broker for Cancer Survivors</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Medicare Broker for Cancer Survivors — Because the Fight Doesn't End When Treatment Does
      </h1>

      <Image
        src="/images/medicare-broker-for-cancer-survivors.webp"
        alt="Medicare broker for cancer survivors"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        A Medicare broker for cancer survivors can be the difference between a plan that quietly fails you and one that actually covers what's next. Everyone celebrated when you finished treatment. Nobody handed you a guide for the scans, the bloodwork, the oncology visits that don't stop just because the chemo did.
      </p>
      <p className="text-lg mb-6">
        I'm Anthony Orner, a licensed Medicare broker in New Jersey, and I help cancer survivors make sure their coverage matches their reality - not just their diagnosis code.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What post-treatment coverage actually looks like on Medicare
        </h2>
        <p className="mb-3">
          Finishing treatment doesn't mean finishing with doctors. Most oncologists schedule surveillance every 3 to 6 months for the first few years - sometimes longer. That means CT scans, PET scans, bloodwork, and specialist visits on a regular cycle.
        </p>
        <p>
          Original Medicare Part B covers medically necessary follow-up care at 80% after the $283 annual deductible. That remaining 20% has no cap. For expensive imaging, 20% adds up fast.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Follow-up scans, labs, and oncology visits: what's covered and what's not
        </h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Covered under Part B:</strong> diagnostic CT/PET scans, blood panels, oncologist office visits, and Part B-administered drugs (like immunotherapy infusions)
          </li>
          <li>
            <strong>Covered under Part D:</strong> oral chemo drugs and take-home prescriptions - but formularies vary widely between plans
          </li>
          <li>
            <strong>Not automatically covered:</strong> some genetic testing, certain experimental treatments, and drugs not on your plan's formulary
          </li>
        </ul>
        <p className="mt-3">
          I've seen survivors blindsided by oral chemo costs hitting $3,000 a month under the wrong Part D plan. The 2026 Part D out-of-pocket cap helps, but your plan choice still determines what you pay month to month.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Supplement vs. Advantage plans for ongoing cancer surveillance
        </h2>
        <p className="mb-3">
          This is the decision that matters most for survivors. Here's the honest breakdown:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Medigap (Supplement) plans</strong> like Plan G cover the 20% coinsurance with no network restrictions. You pick any doctor or hospital that accepts Medicare. No prior authorizations for scans. For someone seeing specialists regularly, this freedom matters.
          </li>
          <li>
            <strong>Medicare Advantage plans</strong> often have lower premiums but use networks, require authorizations, and carry annual out-of-pocket maximums. If your oncologist or cancer center drops out of network mid-year, you could lose access to care when you need it most.
          </li>
        </ul>
        <p className="mt-3">
          I've talked to families dealing with exactly that - a provider dropping their Advantage plan's network in January, leaving someone mid-treatment scrambling for a new oncologist. That's the kind of risk worth understanding before enrollment, not after.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why the wrong Part D plan can cost you thousands
        </h2>
        <p className="mb-3">
          Oral chemotherapy drugs and maintenance medications vary dramatically in cost between Part D plans. One plan might put your drug in Tier 3. Another puts it in Tier 5 with a $2,000 monthly copay before you hit catastrophic coverage.
        </p>
        <p>
          I check your specific prescriptions against every available plan's formulary. This alone can save survivors hundreds or thousands of dollars a year.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Scanxiety is real - your insurance shouldn't make it worse
        </h2>
        <p className="mb-3">
          The anxiety before every follow-up scan is something most insurance websites never talk about. You're already carrying enough. Worrying about whether a scan will be approved, whether your lab is in-network, or whether you'll get a surprise bill shouldn't be part of the equation.
        </p>
        <p>
          The right plan removes those variables so you can focus on staying well.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          A free plan review for the chapter nobody prepared you for
        </h2>
        <p className="mb-3">
          I'll review your current coverage against your treatment history, surveillance schedule, and prescriptions. If your plan already fits, I'll tell you. If it doesn't, I'll show you what does.
        </p>
        <p>
          No cost. No obligation. No pressure. Just someone who understands what survivors actually need from their Medicare coverage.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center my-10">
        <p className="text-xl font-semibold mb-2">
          Talk to a Medicare broker who understands post-cancer coverage.
        </p>
        <p className="text-lg mb-4">
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
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-guides/medicare-supplement-plan-g"
              className="text-blue-700 hover:underline"
            >
              Medicare Supplement Plan G: What It Covers
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-vs-medigap"
              className="text-blue-700 hover:underline"
            >
              Medicare Advantage vs. Medigap: How to Choose
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-part-d-prescription-drug-plans"
              className="text-blue-700 hover:underline"
            >
              Medicare Part D: Finding the Right Prescription Drug Plan
            </Link>
          </li>
          <li>
            <Link
              href="/services/free-medicare-plan-review"
              className="text-blue-700 hover:underline"
            >
              Free Medicare Plan Review with Anthony Orner
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}