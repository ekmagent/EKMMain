import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for rheumatoid arthritis patients | Free Plan Comparison | MedicareYourself",
  description:
    "Medicare broker for rheumatoid arthritis patients in NJ. Anthony Orner compares plans covering biologics, injections, and PT visits. Free consultation.",
  openGraph: {
    title:
      "Medicare broker for rheumatoid arthritis patients | Free Plan Comparison | MedicareYourself",
    description:
      "Medicare broker for rheumatoid arthritis patients in NJ. Anthony Orner compares plans covering biologics, injections, and PT visits. Free consultation.",
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
      name: "Medicare Broker for Rheumatoid Arthritis Patients",
      item: "https://www.medicareyourself.com/services/medicare-broker-for-rheumatoid-arthritis-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Rheumatoid Arthritis Patients Who Need a Plan That Fights Alongside Them",
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
    question: "Does Medicare cover biologics for rheumatoid arthritis?",
    answer:
      "Yes. Biologics administered by infusion at a doctor's office or infusion center (like Remicade or Orencia IV) are typically covered under Medicare Part B. Self-injected biologics like Humira or Enbrel fall under Part D. Coverage details and out-of-pocket costs vary significantly by plan, so comparing formularies before enrolling is critical.",
  },
  {
    question:
      "Can I get a Medigap plan if I already have rheumatoid arthritis?",
    answer:
      "During your Medigap Open Enrollment Period (6 months starting the month you turn 65 and have Part B), insurance companies cannot deny you or charge more because of RA. Outside that window, medical underwriting applies in most states, and RA could result in higher premiums or denial. Timing matters enormously.",
  },
  {
    question:
      "Medicare Advantage or Medigap - which is better for RA patients?",
    answer:
      "It depends on your medications and providers. Medicare Advantage plans may have lower premiums but use networks and prior authorization for specialty drugs. Medigap paired with a standalone Part D plan gives broader provider access and more predictable costs, but premiums are higher. A broker can compare total annual costs for your specific treatment plan.",
  },
  {
    question: "What is the best state for rheumatoid arthritis?",
    answer:
      "There's no single best state for RA. Climate can affect symptoms for some people, but access to rheumatologists and affordable medication coverage matters more. In New Jersey, proximity to major health systems like Hackensack Meridian and RWJBarnabas means strong access to rheumatology specialists and infusion centers.",
  },
];

export default function MedicareBrokerForRheumatoidArthritisPatients() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/medicare-guides" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Medicare Broker for Rheumatoid Arthritis Patients
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Medicare Broker for Rheumatoid Arthritis Patients Who Need a Plan That
        Fights Alongside Them
      </h1>

      <Image
        src="/images/medicare-broker-for-rheumatoid-arthritis-patients.webp"
        alt="Medicare broker for rheumatoid arthritis patients"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        A Medicare broker for rheumatoid arthritis patients does something most
        plan comparison tools can't: look at your actual medications, your
        infusion schedule, your rheumatologist, and figure out which plan won't
        surprise you with a $600 copay on a drug that used to cost $5.
      </p>
      <p className="text-lg mb-6">
        I'm Anthony Orner, a licensed Medicare broker in New Jersey. I help RA
        patients compare plans based on how they actually use their coverage -
        not how insurance companies hope they will.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Biologics, joint injections, and the real cost of RA treatment
        </h2>
        <p className="mb-3">
          RA treatment isn't a generic prescription and a follow-up. It's
          biologics that cost thousands per dose. It's infusions every 4 to 8
          weeks. It's joint injections, lab work, physical therapy, and
          specialist visits that stack up fast.
        </p>
        <p className="mb-3">
          Here's what trips people up: biologics given by infusion (like
          Remicade or Orencia IV) typically fall under Part B. Self-injected
          biologics like Humira or Enbrel go under Part D. That one distinction
          can mean a difference of hundreds of dollars a month depending on your
          plan.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          How RA affects Medigap underwriting and enrollment timing
        </h2>
        <p className="mb-3">
          Your 6-month Medigap Open Enrollment Period is the most important
          window you have. It starts the month you turn 65 and are enrolled in
          Part B. During that time, no carrier can deny you or charge more
          because of RA.
        </p>
        <p className="mb-3">
          Miss that window and medical underwriting applies. With an
          autoimmune condition on your chart, approval gets harder and premiums
          go up. If you're approaching 65, this is the one deadline that can't
          slip.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare Advantage vs. supplement when you're on specialty medications
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-3">
          <li>
            <strong>Medicare Advantage:</strong> Lower premiums, but networks
            restrict which rheumatologists and infusion centers you can use.
            Prior authorization for biologics is common. Formularies change
            yearly.
          </li>
          <li>
            <strong>Medigap + standalone Part D:</strong> Higher monthly
            premium, but you pick any provider who accepts Medicare. No referrals
            for specialists. Costs are predictable. You still need to compare
            Part D formularies carefully for your specific biologic.
          </li>
        </ul>
        <p>
          Neither option is automatically better. It depends on what you take,
          who you see, and what you can afford monthly vs. what you can afford if
          something goes wrong.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          The cost shock people don't see coming
        </h2>
        <p className="mb-3">
          People who had employer insurance or Medicaid before Medicare are often
          blindsided. A biologic that cost $5 on your old plan can suddenly run
          $500 to $1,800 a month under Medicare Part D. Manufacturer copay cards
          that worked before? Most don't apply once you're on Medicare.
        </p>
        <p className="mb-3">
          I check Part D formularies, tier placement, and whether Extra Help or
          patient assistance programs can close the gap for your specific drug.
          That's not something an online plan finder does well.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          What I actually look at for RA patients
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-3">
          <li>
            Which plans cover your current biologic - and at what tier and copay
          </li>
          <li>
            Whether your rheumatologist and infusion center are in-network
          </li>
          <li>Prior authorization requirements for specialty drugs</li>
          <li>Physical therapy visit limits and specialist copays</li>
          <li>
            Total annual out-of-pocket cost - not just the monthly premium
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          Find coverage that keeps up with a condition that never takes a day off
        </h2>
        <p className="mb-3">
          RA doesn't wait for open enrollment. The stiffness that eats your
          first hour every morning, the fatigue that rewrites your afternoon
          plans, the anxiety of wondering if your medication will stay covered
          next year - that's the reality I plan around.
        </p>
        <p>
          If you're managing RA on Medicare or about to transition, call me. I'll
          compare your options based on what you actually need. No cost, no
          obligation, no pressure.
        </p>
      </section>

      <div className="mt-10 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
        <p className="text-lg font-semibold mb-2">
          Talk to a broker who understands RA treatment costs
        </p>
        <p className="mb-4">
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
              href="/medicare-guides/medicare-plan-g-nj"
              className="text-blue-700 hover:underline"
            >
              Medicare Plan G in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-part-d-drug-coverage"
              className="text-blue-700 hover:underline"
            >
              Understanding Medicare Part D Drug Coverage
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medigap-open-enrollment"
              className="text-blue-700 hover:underline"
            >
              Medigap Open Enrollment Period Explained
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-vs-medigap"
              className="text-blue-700 hover:underline"
            >
              Medicare Advantage vs. Medigap: Which Is Right for You?
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}