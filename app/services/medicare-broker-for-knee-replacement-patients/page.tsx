import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for knee replacement patients | Free Pre-Surgery Review | MedicareYourself",
  description:
    "Medicare broker for knee replacement patients — Anthony Orner reviews hospital, rehab & PT coverage before surgery. Call 855-559-1700 for a free pre-op review.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-knee-replacement-patients" },
  openGraph: {
    title:
      "Medicare broker for knee replacement patients | Free Pre-Surgery Review | MedicareYourself",
    description:
      "Medicare broker for knee replacement patients helping you pick the right plan before surgery. Anthony Orner compares rehab and hospital coverage — free review.",
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
      name: "Medicare Broker for Knee Replacement Patients",
      item: "https://medicareyourself.com/services/medicare-broker-for-knee-replacement-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Knee Replacement Patients: Plan the Coverage Before You Plan the Surgery",
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
    question: "Does Medicare pay 100% of knee replacement surgery?",
    answer:
      "No. Under Original Medicare, Part A covers the hospital stay after you pay the $1,676 deductible per benefit period. Part B covers the surgeon's fee at 80% after your $283 annual deductible. Without a Medigap plan, you're responsible for the remaining 20% coinsurance on Part B services, which can add up to thousands of dollars on a major surgery.",
  },
  {
    question: "Will Medicare pay for knee replacement after age 70?",
    answer:
      "Yes. Medicare has no age limit on knee replacement coverage. The only requirement is that your doctor documents the procedure as medically necessary. Whether you're 66 or 86, the same coverage rules apply.",
  },
  {
    question: "What is the average out-of-pocket cost for knee replacement with Medicare?",
    answer:
      "Costs vary by location, facility, and your coverage type. With Original Medicare alone, you could owe the Part A deductible ($1,676), 20% of the surgeon and anesthesia fees under Part B, and significant skilled nursing costs if rehab extends past 20 days. A Medigap Plan G holder typically pays only the $283 Part B deductible for the entire episode of care.",
  },
  {
    question: "Does Medicare cover physical therapy at home after knee replacement?",
    answer:
      "If you qualify for Medicare home health services, Part A covers in-home physical therapy at no cost to you when ordered by your doctor. Outpatient PT at a clinic falls under Part B, where you'll pay 20% coinsurance per session after meeting the $283 deductible. Each session can run around $150 before Medicare adjustments, so those costs add up fast without supplemental coverage.",
  },
,
  {
    question: "Should I switch Medicare plans before my knee replacement surgery?",
    answer:
      "If you're outside your Initial Enrollment Period or a Special Enrollment window, switching plans can be tricky — especially moving from Medicare Advantage to Original Medicare with a Medigap plan, which may require medical underwriting in most states. A licensed broker can review your timing, your surgeon's network status, and your rehab needs before you commit. The best time to review coverage is well before surgery is scheduled, not after.",
  },
  {
    question: "Does Medicare Advantage cover knee replacement differently than Original Medicare?",
    answer:
      "Medicare Advantage plans must cover the same medically necessary services as Original Medicare, but cost-sharing, networks, and prior authorization rules vary by plan. Many Advantage plans require prior authorization for knee replacement and limit you to in-network surgeons and rehab facilities. Original Medicare with a Medigap plan typically offers broader provider access but higher monthly premiums.",
  },
  {
    question: "How long does Medicare cover skilled nursing or rehab after knee surgery?",
    answer:
      "Medicare Part A covers up to 100 days of skilled nursing facility care per benefit period if you qualify, but coverage is only full for the first 20 days. After day 20, a daily coinsurance applies, and after day 100, you pay the full cost. Most knee replacement patients don't need the full 100 days, but understanding the coinsurance tiers helps you avoid surprise bills.",
  }
,
  {
    question: "How long does Medicare cover rehab in a skilled nursing facility after knee replacement?",
    answer:
      "Medicare Part A covers up to 100 days in a skilled nursing facility per benefit period, but only if you had a qualifying inpatient hospital stay of at least three days first. The first 20 days are covered in full, and days 21 through 100 require a daily coinsurance. After day 100, you pay all costs unless you have supplemental coverage.",
  },
  {
    question: "Does a Medicare Advantage plan cover knee replacement differently than Original Medicare?",
    answer:
      "Medicare Advantage plans must cover knee replacement surgery, but they use their own copays, network rules, and prior authorization requirements. Your surgeon and rehab facility usually need to be in-network, and the plan may require approval before scheduling the procedure. That's why reviewing your plan's specific cost-sharing and network before surgery is critical.",
  },
  {
    question: "Can I change my Medicare plan if I'm scheduled for knee surgery?",
    answer:
      "You can only change plans during a valid enrollment period, such as the Annual Election Period each fall or a Special Enrollment Period if you qualify. If surgery is imminent and you're locked into your current plan, a broker can still help you minimize costs within that plan. Planning the coverage months ahead of surgery gives you the most flexibility.",
  }
];

export default function MedicareBrokerKneReplacementPage() {
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
          Medicare Broker for Knee Replacement Patients
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
        Medicare Broker for Knee Replacement Patients: Plan the Coverage Before
        You Plan the Surgery
      </h1>

      <Image
        src="/images/medicare-broker-for-knee-replacement-patients.webp"
        alt="Medicare broker for knee replacement patients"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        A Medicare broker for knee replacement patients does one thing your
        surgeon's office won't: review your actual coverage before you're wheeled
        into the OR. I'm Anthony Orner, a licensed broker who helps people
        understand exactly what they'll owe for the hospital stay, the rehab, and
        the weeks of physical therapy that follow.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        The wrong plan can cost you thousands in surprise bills. The right plan
        can reduce your out-of-pocket to almost nothing.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What Original Medicare covers for total knee replacement
        </h2>
        <p className="text-gray-700 mb-2">
          Medicare only covers knee replacement when your doctor documents it as
          medically necessary. Once approved, here's how the costs break down:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-2">
          <li>
            <strong>Part A</strong> covers the hospital stay after you pay the
            $1,676 deductible per benefit period
          </li>
          <li>
            <strong>Part B</strong> covers the surgeon, anesthesiologist, and
            outpatient services at 80% after your $283 annual deductible
          </li>
          <li>
            That remaining 20% on a $30,000+ surgery is real money
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Skilled nursing and rehab: where the real costs add up
        </h2>
        <p className="text-gray-700 mb-2">
          Many knee replacement patients need skilled nursing facility (SNF) care
          after discharge. Days 1-20 are covered at $0 under Part A. Days 21-100
          cost you $209.50 per day in 2026 coinsurance.
        </p>
        <p className="text-gray-700">
          That's up to $16,760 if you need the full 100 days. People don't
          expect this bill. A Medigap plan covers every dollar of it.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Outpatient physical therapy costs most people miss
        </h2>
        <p className="text-gray-700 mb-2">
          Your surgeon will likely prescribe 8-10 weeks of PT, twice a week.
          Each session runs about $150 before Medicare adjustments. Under Part B,
          you pay 20% coinsurance per visit.
        </p>
        <p className="text-gray-700">
          Over two months, that's $500+ out of pocket with Original Medicare
          alone. With Medigap Plan G, you pay $0 after your annual deductible.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Medigap vs. Advantage for major orthopedic surgery
        </h2>
        <p className="text-gray-700 mb-2">
          Medicare Advantage plans cap your yearly out-of-pocket, which sounds
          great. But many Advantage plans require prior authorization, limit
          which surgeons you can see, and charge copays at every stage: hospital,
          SNF, PT visits.
        </p>
        <p className="text-gray-700">
          Medigap Plan G paired with Original Medicare gives you the widest
          surgeon choice and the most predictable costs. For a planned surgery
          this significant, predictability matters.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          If you need both knees done
        </h2>
        <p className="text-gray-700 mb-2">
          Surgeons typically schedule each knee months apart. That means two
          hospital stays, two rounds of rehab, and potentially two Part A
          deductibles if they fall in separate benefit periods.
        </p>
        <p className="text-gray-700">
          Getting the right supplemental plan before the first surgery protects
          you for both. Timing your enrollment matters as much as timing the
          procedure.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Schedule a free knee replacement coverage review
        </h2>
        <p className="text-gray-700 mb-2">
          I'll pull up your current coverage, walk through the hospital, rehab,
          and PT costs specific to your situation, and show you exactly what
          you'll owe under each plan option. No cost, no obligation.
        </p>
        <p className="text-gray-700">
          Call before your pre-op appointment. That's when this conversation
          helps most.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Talk to Anthony about your knee replacement coverage
        </p>
        <p className="text-3xl font-bold mb-3">
          <a href="tel:8555591700" className="hover:underline">
            855-559-1700
          </a>
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-2 rounded-md hover:bg-blue-50 transition"
        >
          Get a Free Quote
        </Link>
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
              href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medigap Plan G: What It Covers and What It Costs
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage vs. Medigap: Which Is Better for Surgery?
            </Link>
          </li>
          <li>
            <Link
              href="/learn/medicare-parts-explained"
              className="text-blue-600 hover:underline"
            >
              How Medicare Covers Skilled Nursing Facility Stays
            </Link>
          </li>
          <li>
            <Link
              href="/learn/medicare-parts-explained"
              className="text-blue-600 hover:underline"
            >
              Understanding Part B Costs for Outpatient Services
            </Link>
          </li>
        </ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/coverage/knee-replacement" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Knee Replacement Coverage</a> and <a href="https://www.medicare.gov/coverage/inpatient-hospital-care" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Inpatient Hospital Care</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need help from a neutral counselor? Contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey SHIP</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" target="_blank" rel="noopener noreferrer" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need free state-level help? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> or the <a href="https://www.state.nj.us/dobi/division_insurance/" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a>. Or call Anthony Orner at 855-559-1700.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">New Jersey Department of Banking and Insurance</a> or your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">SHIP counselor</a> for free Medicare guidance.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" target="_blank" rel="noopener noreferrer" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling before your procedure.</div>
      </section>
    </main>
  );
}