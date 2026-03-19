import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for peripheral artery disease patients | Free Consultation | MedicareYourself",
  description:
    "Medicare broker for peripheral artery disease patients matching you with plans covering vascular procedures and Rx. Anthony Orner offers free consultations.",
  openGraph: {
    title:
      "Medicare broker for peripheral artery disease patients | Free Consultation | MedicareYourself",
    description:
      "Medicare broker for peripheral artery disease patients matching you with plans covering vascular procedures and Rx. Anthony Orner offers free consultations.",
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
      name: "Medicare Broker for Peripheral Artery Disease Patients",
      item: "https://medicareyourself.com/services/medicare-broker-for-peripheral-artery-disease-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Peripheral Artery Disease Patients — Plans That Cover Vascular Care",
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
    question:
      "What kind of doctor should you see for peripheral artery disease?",
    answer:
      "A vascular specialist or vascular surgeon is the go-to for PAD. Your primary care doctor can refer you, but Medicare Part B covers vascular specialist visits without a referral when you have Original Medicare. If you're on a Medicare Advantage plan, check whether your plan requires a referral first.",
  },
  {
    question: "What is the first line treatment for peripheral artery disease?",
    answer:
      "Supervised exercise therapy and medication management are typically the first steps. Doctors usually prescribe blood thinners and statins to slow plaque buildup. If the disease progresses, procedures like angioplasty or stenting may be needed - all covered under Medicare Part B when medically necessary.",
  },
  {
    question: "What conditions are considered peripheral artery disease?",
    answer:
      "PAD refers to narrowed arteries outside the heart, most commonly in the legs. Related conditions include intermittent claudication (leg pain when walking), critical limb ischemia, and chronic wounds from poor circulation. All are part of the peripheral vascular disease spectrum and covered under Medicare when treated by qualified providers.",
  },
  {
    question: "Does Medicare cover vascular screenings for PAD?",
    answer:
      "Medicare Part B covers an abdominal aortic aneurysm screening once if you're at risk, and diagnostic vascular tests when ordered by your doctor. Ankle-brachial index tests and duplex ultrasounds are covered when medically necessary. Your Part B deductible ($283 in 2026) and 20% coinsurance apply unless you have supplemental coverage.",
  },
];

export default function MedicareBrokerForPADPatients() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        {" > "}
        <Link href="/medicare-guides" className="hover:underline">
          Medicare Guides
        </Link>
        {" > "}
        <span className="text-gray-700">
          Medicare Broker for Peripheral Artery Disease Patients
        </span>
      </nav>

      <div className="bg-[#1e40af] rounded-lg p-1 mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-white p-4">
          Medicare Broker for Peripheral Artery Disease Patients - Plans That
          Cover Vascular Care
        </h1>
        <Image
          src="/images/medicare-broker-for-peripheral-artery-disease-patients.webp"
          alt="Medicare broker for peripheral artery disease patients"
          width={800}
          height={400}
          className="rounded-lg w-full"
        />
      </div>

      <p className="text-lg mb-2">
        A Medicare broker for peripheral artery disease patients can match you
        with coverage that actually fits your vascular care needs - from
        specialist visits and procedures to the medications keeping your
        circulation stable. I'm Anthony Orner, a licensed Medicare broker, and I
        help people with PAD find plans that won't leave them exposed to
        surprise costs.
      </p>
      <p className="text-lg mb-6">
        PAD isn't a one-appointment condition. It's ongoing monitoring, changing
        prescriptions, and sometimes procedures you didn't expect. Your plan
        should account for that.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What Medicare covers for PAD: angioplasty, stents, and monitoring
        </h2>
        <p className="mb-3">
          Medicare Part B covers medically necessary vascular procedures -
          angioplasty, stent placement, atherectomy, and bypass surgery. It also
          covers diagnostic tests like duplex ultrasounds and ankle-brachial
          index testing when your doctor orders them.
        </p>
        <p>
          You'll pay 20% of the Medicare-approved amount after your $283 annual
          Part B deductible. For a procedure that runs $15,000 or more, that 20%
          adds up fast. That's where supplemental coverage matters.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Part D plans with strong blood thinner and statin coverage
        </h2>
        <p className="mb-3">
          Most PAD patients take a statin and at least one blood thinner -
          sometimes clopidogrel, sometimes something newer and more expensive.
          Part D formularies vary significantly between carriers.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Generic statins and clopidogrel are on most formularies at lower
            tiers
          </li>
          <li>
            Brand-name blood thinners like rivaroxaban can have widely different
            copays depending on the plan
          </li>
          <li>
            Cilostazol (for claudication symptoms) coverage and tier placement
            varies by carrier
          </li>
        </ul>
        <p className="mt-3">
          I compare your actual prescriptions across available Part D plans so
          you're not guessing at the pharmacy counter.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why Medigap often makes sense for vascular disease patients
        </h2>
        <p className="mb-3">
          With Original Medicare alone, a single vascular procedure can leave you
          with thousands in out-of-pocket costs. A Medigap plan like Plan G
          covers that 20% Part B coinsurance and the $1,676 Part A hospital
          deductible.
        </p>
        <p>
          For someone managing PAD, that predictability matters. You shouldn't
          have to weigh whether you can afford the angioplasty your doctor
          recommends. Rates vary by carrier and your age - I'll compare them for
          you at no cost.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare Advantage vs. Original Medicare for PAD
        </h2>
        <p className="mb-3">
          Some Medicare Advantage plans offer $0 premiums and extra benefits. But
          they also come with networks. If your vascular specialist isn't
          in-network, you'll pay more or need to switch doctors.
        </p>
        <p>
          Original Medicare with a Medigap plan lets you see any provider
          nationwide that accepts Medicare - no referrals needed for vascular
          specialists. For PAD patients who need flexibility and ongoing
          specialist access, that freedom matters.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Supervised exercise therapy coverage
        </h2>
        <p className="mb-3">
          Medicare covers supervised exercise therapy for PAD - up to 36
          sessions over 12 weeks, with the option to extend. This is a
          first-line treatment that can improve walking distance and reduce
          symptoms without surgery.
        </p>
        <p>
          Not every plan handles the referral and cost-sharing the same way. I
          can help you understand what you'll owe before you start a program.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Schedule a free consultation about your PAD coverage
        </h2>
        <p>
          Living with PAD means planning around appointments, staying on top of
          medications, and knowing your next step if symptoms change. Your
          Medicare plan should support that - not add another layer of stress. I
          review your doctors, prescriptions, and upcoming needs, then show you
          what fits. No cost, no obligation.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center my-10">
        <p className="text-xl font-semibold mb-2">
          Talk to a licensed Medicare broker who understands vascular care
          coverage.
        </p>
        <p className="text-2xl font-bold mb-3">
          <a href="tel:8555591700" className="underline">
            855-559-1700
          </a>
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100"
        >
          Get a Free Quote
        </Link>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-guides/medigap-plan-g"
              className="text-blue-600 hover:underline"
            >
              Medigap Plan G: What It Covers and What It Costs
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-part-b-coverage"
              className="text-blue-600 hover:underline"
            >
              What Medicare Part B Covers
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/part-d-prescription-drug-plans"
              className="text-blue-600 hover:underline"
            >
              How to Compare Part D Prescription Drug Plans
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-broker-for-chronic-conditions"
              className="text-blue-600 hover:underline"
            >
              Medicare Broker for Chronic Condition Patients
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}