import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for cataracts patients | Free Plan Comparison | MedicareYourself",
  description:
    "Medicare broker for cataracts patients — Anthony Orner helps you find plans covering surgery, IOLs, and follow-up care in NJ. Free comparison, no obligation.",
  openGraph: {
    title:
      "Medicare broker for cataracts patients | Free Plan Comparison | MedicareYourself",
    description:
      "Medicare broker for cataracts patients — Anthony Orner helps you find plans covering surgery, IOLs, and follow-up care in NJ. Free comparison, no obligation.",
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
      item: "https://medicareyourself.com/medicare-guides",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Medicare Broker for Cataracts Patients",
      item: "https://medicareyourself.com/services/medicare-broker-for-cataracts-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Cataracts Patients — Find Plans That Cover Surgery and Follow-Up Care",
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
  mainEntityOfPage:
    "https://medicareyourself.com/services/medicare-broker-for-cataracts-patients",
};

const faqs = [
  {
    question: "How bad do cataracts have to be for Medicare to pay?",
    answer:
      "Medicare doesn't use a specific vision score as a cutoff. Your ophthalmologist needs to document that cataracts are causing functional impairment - difficulty driving, reading, or performing daily tasks. Once your doctor determines the cataract is medically necessary to treat, Part B covers the surgery.",
  },
  {
    question: "What does Medicare pay for cataract surgery in 2026?",
    answer:
      "Medicare Part B covers 80% of the Medicare-approved amount for cataract surgery after you meet the $283 annual deductible. You're responsible for the remaining 20% coinsurance - which is where a Supplement or Advantage plan can help cover your out-of-pocket share.",
  },
  {
    question: "Is Medicare going to stop paying for cataract surgery?",
    answer:
      "No. Cataract surgery remains a covered Part B benefit. It's one of the most common Medicare-covered procedures in the country. Coverage rules for conventional lenses and standard surgical techniques have not changed.",
  },
  {
    question: "How does Medicare cover cataracts?",
    answer:
      "Medicare Part B covers cataract surgery (blade or laser technique) with a conventional monofocal intraocular lens. It also covers one pair of corrective eyeglasses or contact lenses after surgery. You pay 20% coinsurance after your Part B deductible. Premium lens upgrades like toric or multifocal IOLs are not covered - you pay the difference out of pocket.",
  },
];

export default function MedicareBrokerForCataractsPatients() {
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
          Medicare Broker for Cataracts Patients
        </span>
      </nav>

      <div className="bg-[#1e40af] rounded-lg p-6 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Medicare Broker for Cataracts Patients — Find Plans That Cover Surgery
          and Follow-Up Care
        </h1>
        <Image
          src="/images/medicare-broker-for-cataracts-patients.webp"
          alt="Medicare broker for cataracts patients"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />
      </div>

      <p className="text-lg mb-2">
        A Medicare broker for cataracts patients can save you real money and a
        lot of confusion before you go under the light. I'm Anthony Orner, a
        licensed broker in NJ, and I help people figure out exactly what their
        Medicare plan covers before the surgery date - not after the bill shows
        up.
      </p>
      <p className="text-lg mb-6">
        Cataract surgery is common, but the cost conversation is anything but
        simple. Lens upgrades, post-op visits, the 20% coinsurance gap - these
        details matter. Let me walk you through it.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What Medicare Parts A and B cover for cataract surgery
        </h2>
        <p className="mb-2">
          Medicare Part B covers cataract surgery - both traditional blade and
          laser techniques - when your doctor documents it as medically
          necessary. That includes the procedure itself, the facility fee, and a
          standard monofocal intraocular lens (IOL).
        </p>
        <p>
          After your $283 Part B deductible in 2026, Medicare pays 80%. You're
          responsible for the other 20% coinsurance. Part B also covers one pair
          of corrective eyeglasses or contact lenses after each cataract surgery.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How Supplement and Advantage plans handle post-op costs
        </h2>
        <p className="mb-2">
          That 20% coinsurance adds up fast on a surgical procedure. A Medigap
          plan like Plan G picks up the coinsurance so your out-of-pocket cost
          for the Medicare-covered portion drops to nearly zero.
        </p>
        <p>
          Medicare Advantage plans handle it differently - you'll have a copay or
          coinsurance set by the plan, and you'll need to use in-network
          surgeons. Some Advantage plans also bundle extra vision benefits that
          Original Medicare doesn't offer. The right plan depends on your
          situation.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          IOL upgrades, premium lenses, and out-of-pocket gaps
        </h2>
        <p className="mb-2">
          Here's where most people get surprised. Medicare covers a standard
          monofocal lens. If your surgeon recommends a toric lens for
          astigmatism or a multifocal lens to reduce glasses dependence, you pay
          the difference out of pocket. That upgrade can run $1,500 to $4,000 or
          more per eye.
        </p>
        <p>
          Doctors sometimes push premium lenses hard. That doesn't mean they're
          wrong - but you deserve clear information about what Medicare covers
          and what comes out of your wallet before you agree.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why the upsell conversation catches people off guard
        </h2>
        <p className="mb-2">
          Many patients walk into a pre-op appointment expecting a
          straightforward process and instead face a high-pressure sales pitch
          for premium lenses. It can feel rushed and confusing - especially when
          no one explains the baseline of what Medicare already pays for.
        </p>
        <p>
          Knowing your coverage before that appointment changes the dynamic.
          You'll know what's covered, what's optional, and what questions to ask.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Follow-up visits and ongoing eye care after surgery
        </h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            Post-operative visits within 90 days are typically bundled into the
            surgery cost under Medicare
          </li>
          <li>
            Prescription eye drops after surgery may be covered under Part D -
            but formularies vary by plan
          </li>
          <li>
            Routine vision exams after recovery are not covered by Original
            Medicare - some Advantage plans include them
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Get a plan comparison specific to your cataract treatment
        </h2>
        <p className="mb-2">
          I'll review your current Medicare coverage, check whether your surgeon
          is in-network, and show you what your actual costs look like under
          different plans - Supplement vs. Advantage, side by side.
        </p>
        <p>
          No cost for the call. No obligation to switch anything. Just clear
          answers before your surgery date.
        </p>
      </section>

      <div className="bg-blue-700 text-white rounded-lg p-6 my-10 text-center">
        <p className="text-xl font-semibold mb-2">
          Talk to a licensed Medicare broker who understands cataract coverage.
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/quote" className="underline font-bold">
            get a free quote online
          </Link>
          .
        </p>
        <p className="text-sm opacity-90">
          Anthony Orner - Licensed Medicare Broker, NJ
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-guides/medicare-part-b-explained"
              className="text-blue-700 hover:underline"
            >
              Medicare Part B Explained - What It Covers and What It Costs
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medigap-plan-g-nj"
              className="text-blue-700 hover:underline"
            >
              Medigap Plan G in NJ - Benefits, Rates, and How to Enroll
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-vs-medigap"
              className="text-blue-700 hover:underline"
            >
              Medicare Advantage vs. Medigap - Which Is Right for You?
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-broker-nj"
              className="text-blue-700 hover:underline"
            >
              Find a Medicare Broker in New Jersey
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}