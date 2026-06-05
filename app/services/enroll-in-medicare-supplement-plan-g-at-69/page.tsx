import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "enroll in medicare supplement plan g at 69 | Free Broker Guidance | MedicareYourself",
  description:
    "Enroll in Medicare Supplement Plan G at 69 with free licensed broker help. Compare carriers, navigate underwriting, and apply. Call 855-559-1700 today.",
  alternates: { canonical: "https://medicareyourself.com/services/enroll-in-medicare-supplement-plan-g-at-69" },
  openGraph: {
    title:
      "enroll in medicare supplement plan g at 69 | Free Broker Guidance | MedicareYourself",
    description:
      "Enroll in Medicare Supplement Plan G at 69 with licensed broker help. Learn eligibility, underwriting steps, and how to apply. No fee, no obligation.",
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
      name: "Enroll in Medicare Supplement Plan G at 69",
      item: "https://medicareyourself.com/services/enroll-in-medicare-supplement-plan-g-at-69",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Enroll in Medicare Supplement Plan G at 69: Eligibility, Timing, and Next Steps",
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
  dateModified: "2026-03-19",
};

const faqs = [
  {
    question: "When can I enroll in Medigap Plan G?",
    answer:
      "Your best window is your 6-month Medigap Open Enrollment Period, which starts the month you turn 65 and have Part B. At 69, you're past that window and will likely need to pass medical underwriting. Some states offer additional protections, so check your state's rules or call a licensed broker.",
  },
  {
    question:
      "Can I get Plan G at 69 if I have a pre-existing condition?",
    answer:
      "It depends on the condition and the carrier. Some insurers are more lenient than others. Conditions like well-controlled high blood pressure may not be an issue, while insulin-dependent diabetes or recent cancer treatment could lead to a decline. A broker can match you with carriers most likely to approve your application.",
  },
  {
    question: "Is Plan G worth it at 69 versus Medicare Advantage?",
    answer:
      "Plan G covers everything Original Medicare doesn't pay except the Part B deductible ($283 in 2026). You get no networks, no referrals, and predictable costs. Medicare Advantage may have lower premiums but adds copays, prior authorizations, and network restrictions. Your health needs and budget should drive the decision.",
  },
  {
    question: "How much does Plan G cost at age 69?",
    answer:
      "Rates vary by carrier, state, gender, and tobacco status. At 69, you'll pay more than someone who enrolled at 65 because most carriers use attained-age pricing. A licensed broker can pull real quotes from multiple carriers at no cost to you.",
  },
,
  {
    question: "What happens if I'm denied Plan G at 69 due to underwriting?",
    answer:
      "If one carrier declines your application, another may still approve you because each insurer uses different underwriting criteria. A licensed broker can help you identify carriers most likely to accept your health profile before you apply. You can also explore Medicare Advantage as an alternative, since it has guaranteed issue during your annual enrollment windows.",
  },
  {
    question: "Do I need to drop my current coverage before applying for Plan G?",
    answer:
      "No. You should keep your existing coverage in place until your Plan G application is approved and the new policy's effective date is confirmed. Dropping coverage too early can leave you with gaps in protection. Once approved, you can coordinate the cancellation of your prior plan with the start date of Plan G.",
  }
];

export default function EnrollInMedicareSupplementPlanGAt69() {
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
          Enroll in Medicare Supplement Plan G at 69
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Enroll in Medicare Supplement Plan G at 69: Eligibility, Timing, and
        Next Steps
      </h1>

      <Image
        src="/images/enroll-in-medicare-supplement-plan-g-at-69.webp"
        alt="Enroll in Medicare Supplement Plan G at 69"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        Enrolling in Medicare Supplement Plan G at 69 is absolutely possible,
        but the process looks different than it did at 65. Your Medigap Open
        Enrollment Period is behind you, which means most carriers will ask
        health questions before they approve your application.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        That's not a dealbreaker. It just means you need to apply strategically.
        A licensed broker can steer you toward carriers with the best approval
        odds for your situation, at no cost to you.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Are you guaranteed issue for Plan G at age 69?
        </h2>
        <p className="text-gray-700 mb-2">
          Under federal law, your guaranteed issue right to buy any Medigap plan
          lasts 6 months. It starts the month you're both 65 or older and
          enrolled in Part B. At 69, that window has closed unless a specific
          trigger event applies.
        </p>
        <p className="text-gray-700">
          Federal guaranteed issue triggers include losing employer coverage,
          leaving a Medicare Advantage plan, or having your carrier go bankrupt.
          Some states extend additional protections. If none of these apply,
          you'll go through underwriting.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What underwriting looks like outside open enrollment
        </h2>
        <p className="text-gray-700 mb-2">
          Medical underwriting means the insurance company reviews your health
          history before deciding whether to offer you a policy. They'll
          typically ask about conditions diagnosed, medications prescribed, and
          treatments received over the past 2 to 5 years.
        </p>
        <p className="text-gray-700">
          The process isn't as scary as it sounds. Most applications take 1 to 3
          weeks. There's no physical exam. It's a paper review. The key is
          applying with carriers that have favorable underwriting guidelines for
          your specific health profile.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Step-by-step enrollment process with a licensed broker
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Review your health history</strong> with your broker so they
            know which carriers to target.
          </li>
          <li>
            <strong>Compare quotes</strong> from multiple carriers. Plan G
            benefits are identical no matter the company, but premiums and
            long-term rate behavior are not.
          </li>
          <li>
            <strong>Submit your application.</strong> Your broker handles the
            paperwork and follows up with the carrier.
          </li>
          <li>
            <strong>Get your approval</strong> and start using your Plan G.
            Coverage typically begins the first of the following month.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Common health conditions that may affect your application
        </h2>
        <p className="text-gray-700 mb-2">
          Carriers evaluate conditions differently. Controlled high blood
          pressure or cholesterol rarely causes problems. Conditions that may
          trigger a closer look or a decline include:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Insulin-dependent diabetes</li>
          <li>Cancer treatment within the past 2 to 5 years</li>
          <li>COPD requiring oxygen therapy</li>
          <li>Recent heart surgery or stroke</li>
        </ul>
        <p className="text-gray-700 mt-2">
          Even with these conditions, options may exist. Some carriers are more
          lenient than others, which is exactly why working with a broker
          matters.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why the carrier you choose matters more than you think
        </h2>
        <p className="text-gray-700 mb-2">
          Plan G is standardized. Every carrier offers the exact same medical
          benefits. What's not standardized: premiums, rate increase history, and
          how aggressively they price new enrollees.
        </p>
        <p className="text-gray-700">
          Some companies offer low introductory rates, then stack age increases
          and block rate increases that hit 10 to 18% in a single year. At 69,
          long-term rate stability should weigh heavily in your decision. A
          broker who tracks rate histories across carriers can save you thousands
          over the life of your policy.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What Plan G covers in 2026
        </h2>
        <p className="text-gray-700 mb-2">
          Plan G pays nearly all of your out-of-pocket costs under Original
          Medicare. You're responsible only for the Part B deductible ($283 in
          2026). Everything else is covered:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Part A deductible ($1,676 per benefit period)</li>
          <li>Part A hospital coinsurance and extra 365 days</li>
          <li>Skilled nursing facility coinsurance ($209.50/day, days 21-100)</li>
          <li>Part B coinsurance and copayments</li>
          <li>Part B excess charges</li>
          <li>First 3 pints of blood</li>
          <li>Foreign travel emergency care (80%)</li>
        </ul>
        <p className="text-gray-700 mt-2">
          No referrals. No networks. Any doctor who accepts Medicare accepts your
          Plan G.
        </p>
      </section>

      <section className="mt-12 bg-blue-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">
          Ready to see if you qualify for Plan G?
        </h2>
        <p className="text-lg mb-4">
          Call us for a free, no-obligation review of your options. We'll check
          your eligibility and pull quotes from multiple carriers.
        </p>
        <a
          href="tel:8555591700"
          className="text-3xl font-bold hover:underline block mb-3"
        >
          855-559-1700
        </a>
        <Link
          href="/quote"
          className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
        >
          Get a Free Quote
        </Link>
      </section>

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
              href="/services/compare-and-enroll-in-plan-g-online"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plan G: Full Benefits Guide
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/turning-65"
              className="text-blue-600 hover:underline"
            >
              Understanding Your Medigap Open Enrollment Period
            </Link>
          </li>
          <li>
            <Link
              href="/services/how-long-does-it-take-to-get-approved-for-a-medicare-supplement-plan"
              className="text-blue-600 hover:underline"
            >
              How Medicare Supplement Underwriting Works
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Plan G vs. Medicare Advantage: Which Is Right for You?
            </Link>
          </li>
        </ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/health-drug-plans/medigap" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov Medigap overview</a> and <a href="https://www.medicare.gov/health-drug-plans/medigap/basics/when-to-get" rel="noopener noreferrer" target="_blank" className="underline">When to get a Medigap policy</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact <a href="https://www.state.nj.us/dobi/division_insurance/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific guidance, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free local Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific guidance, visit the <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">State Health Insurance Assistance Program (SHIP)</a> to find free, unbiased Medicare counseling in your state.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific guidance? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free local Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact <a href="https://www.state.nj.us/dobi/division_insurance/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific Medigap rules and free counseling, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> or your state Department of Banking and Insurance.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific Medigap rights and free counseling, visit your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
      </section>
    </main>
  );
}