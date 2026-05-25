import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "enroll in medicare supplement plan g at 68 | Free Guidance | MedicareYourself",
  description:
    "Enroll in Medicare Supplement Plan G at 68 with broker guidance on underwriting, carriers, and rates. Call 855-559-1700 for a free Plan G review.",
  alternates: { canonical: "https://medicareyourself.com/services/enroll-in-medicare-supplement-plan-g-at-68" },
  openGraph: {
    title:
      "enroll in medicare supplement plan g at 68 | Free Guidance | MedicareYourself",
    description:
      "Enroll in Medicare Supplement Plan G at 68 — understand guaranteed issue rights, underwriting, and current rates. Anthony Orner guides you. Free consultation.",
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
      name: "Enroll in Medicare Supplement Plan G at 68",
      item: "https://medicareyourself.com/services/enroll-in-medicare-supplement-plan-g-at-68",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Enroll in Medicare Supplement Plan G at 68: Your Options and What to Expect",
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
    question: "Can you enroll in Medicare Supplement Plan G at any time?",
    answer:
      "You can apply for Plan G at any time of year, but acceptance isn't guaranteed outside your Medigap Open Enrollment Period. After that 6-month window, carriers can use medical underwriting and may decline your application based on health history.",
  },
  {
    question:
      "What happens if I'm denied Plan G coverage at 68?",
    answer:
      "If a carrier denies you through underwriting, a broker can submit your application to other carriers with different health guidelines. Some insurers are more lenient than others. You may also qualify for guaranteed issue rights if you're leaving a Medicare Advantage plan or losing employer coverage.",
  },
  {
    question: "Is Plan G the same regardless of which company sells it?",
    answer:
      "Yes. Plan G is standardized by Medicare, so the medical benefits are identical from every carrier. What differs is the premium, rate increase history, and customer service. That's why carrier selection matters as much as plan selection.",
  },
  {
    question: "Does Plan G cover the Part B deductible?",
    answer:
      "No. Plan G covers everything Plan F covers except the annual Part B deductible, which is $283 in 2026. After you meet that deductible, Plan G picks up the rest of your Original Medicare cost-sharing with no network restrictions.",
  },
];

export default function EnrollInMedicareSupplementPlanGAt68() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="mb-4 text-sm text-gray-600">
        <ol className="flex space-x-2">
          <li>
            <Link href="/" className="underline hover:text-blue-700">
              Home
            </Link>
            <span className="mx-1">&gt;</span>
          </li>
          <li>
            <Link href="/services" className="underline hover:text-blue-700">
              Medicare Guides
            </Link>
            <span className="mx-1">&gt;</span>
          </li>
          <li className="text-gray-900 font-medium">
            Enroll in Medicare Supplement Plan G at 68
          </li>
        </ol>
      </nav>

      <article className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Enroll in Medicare Supplement Plan G at 68: Your Options and What to
          Expect
        </h1>

        <Image
          src="/images/enroll-in-medicare-supplement-plan-g-at-68.webp"
          alt="enroll in medicare supplement plan g at 68"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Enrolling in Medicare Supplement Plan G at 68 looks different than it
          did at 65. Your guaranteed-issue window has likely closed, which means
          carriers can ask about your health before they approve you.
        </p>
        <p className="text-lg mb-6">
          That doesn't mean you're out of options. It means you need to know
          which doors are open and how to walk through them.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Guaranteed issue vs. underwriting at age 68
          </h2>
          <p className="mb-3">
            Under federal law, your Medigap Open Enrollment Period is a one-time,
            6-month window that starts the month you turn 65 and have Part B. During
            that period, no carrier can reject you or charge more due to health
            conditions.
          </p>
          <p className="mb-3">
            At 68, that window is closed unless you qualify for a federal
            guaranteed issue right. These triggers include:
          </p>
          <ul className="list-disc pl-6 mb-3 space-y-1">
            <li>Losing employer or union group coverage</li>
            <li>Leaving a Medicare Advantage plan within your first 12 months</li>
            <li>Your current Medigap carrier goes bankrupt or violates its contract</li>
            <li>Moving out of your plan's service area</li>
          </ul>
          <p>
            If none of those apply, you'll go through medical underwriting. That's
            normal at 68, and many people pass it.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What Plan G premiums look like at 68
          </h2>
          <p className="mb-3">
            Premiums at 68 will be higher than what a 65-year-old pays. With most
            carriers using attained-age rating, your rate increases as you get
            older. Rates vary by carrier, your zip code, gender, and tobacco use.
          </p>
          <p>
            The starting premium matters less than the carrier's long-term rate
            increase history. Some companies price low to attract new members, then
            hit the block with steep annual increases. I look at 5-to-10-year rate
            trends before I recommend any carrier.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Common health questions carriers ask during underwriting
          </h2>
          <p className="mb-3">
            Carriers typically ask about conditions diagnosed or treated in the
            past 2 to 5 years. Common questions include:
          </p>
          <ul className="list-disc pl-6 mb-3 space-y-1">
            <li>Heart disease, stroke, or diabetes requiring insulin</li>
            <li>Cancer treatment within the past few years</li>
            <li>COPD, kidney disease, or other chronic organ conditions</li>
            <li>Pending surgeries or hospitalizations</li>
          </ul>
          <p>
            Controlled blood pressure and cholesterol on standard medications
            usually aren't deal-breakers. Every carrier draws its own lines, which
            is exactly why working with a broker who knows each carrier's
            underwriting guidelines saves time and rejections.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why carrier selection matters more than plan selection
          </h2>
          <p className="mb-3">
            Plan G is standardized by Medicare. The benefits are identical no
            matter which company sells it. A Plan G from one carrier covers the
            same things as a Plan G from another.
          </p>
          <p>
            What's not identical: premium stability, customer service, and claims
            processing. Those differences compound over 10 or 15 years. Picking
            the cheapest Plan G today can cost you thousands more by 78.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What Plan G actually covers at any age
          </h2>
          <p className="mb-3">
            Plan G pays for nearly all the gaps in Original Medicare. After you
            meet the $283 annual Part B deductible (2026), Plan G covers:
          </p>
          <ul className="list-disc pl-6 mb-3 space-y-1">
            <li>Part A deductible ($1,676 per benefit period in 2026)</li>
            <li>Part A and Part B coinsurance and copayments</li>
            <li>Skilled nursing facility coinsurance ($209.50/day for days 21-100)</li>
            <li>Foreign travel emergency care (80%)</li>
            <li>Part B excess charges</li>
          </ul>
          <p>
            No networks, no referrals. Any doctor who accepts Medicare accepts
            your Plan G.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How a broker simplifies your Plan G enrollment at 68
          </h2>
          <p className="mb-3">
            Most people I talk to at 68 wish they'd had better guidance at 65. Some
            enrolled in Medicare Advantage and want to switch. Others delayed
            Medigap and now worry about qualifying.
          </p>
          <p className="mb-3">
            I review your health history, match you to carriers most likely to
            approve you, and handle the paperwork. If one carrier declines you, I
            know which ones to try next. There's no cost for my help. Carriers pay
            me the same rate whether you call them directly or go through me.
          </p>
          <p>
            You get honest answers and a second set of eyes on the details.
          </p>
        </section>

        <div className="bg-blue-700 text-white rounded-xl p-8 text-center my-10">
          <p className="text-xl font-semibold mb-2">
            Ready to explore your Plan G options at 68?
          </p>
          <p className="mb-4">
            Call{" "}
            <a
              href="tel:8555591700"
              className="underline font-bold text-white"
            >
              855-559-1700
            </a>{" "}
            for a free consultation with Anthony Orner.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
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
                href="/services/compare-and-enroll-in-plan-g-online"
                className="text-blue-700 underline hover:text-blue-900"
              >
                Medicare Supplement Plan G: Full Benefits Breakdown
              </Link>
            </li>
            <li>
              <Link
                href="/services/how-long-does-it-take-to-get-approved-for-a-medicare-supplement-plan"
                className="text-blue-700 underline hover:text-blue-900"
              >
                How Medigap Underwriting Works After 65
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
                className="text-blue-700 underline hover:text-blue-900"
              >
                Plan G vs. Plan N: Which Saves You More?
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-supplement-rate-jumped-why-and-what-can-i-do"
                className="text-blue-700 underline hover:text-blue-900"
              >
                Understanding Medicare Supplement Rate Increases
              </Link>
            </li>
                      <li>
              <Link
                href="/services/how-much-is-plan-g-in-nj"
                className="text-blue-600 hover:underline"
              >
                How Much Is Plan G In NJ
              </Link>
            </li>
            <li>
              <Link
                href="/services/best-medicare-supplement-rates-by-age-plan-g-plan-n-plan-f-rates"
                className="text-blue-600 hover:underline"
              >
                Best Medicare Supplement Rates By Age Plan G Plan N Plan F Rates
              </Link>
            </li>
            <li>
              <Link
                href="/services/quickest-way-to-enroll-into-plan-g"
                className="text-blue-600 hover:underline"
              >
                Quickest Way To Enroll Into Plan G
              </Link>
            </li>
            <li>
              <Link
                href="/services/enroll-in-medicare-supplement-plan-g-at-67"
                className="text-blue-600 hover:underline"
              >
                Enroll In Medicare Supplement Plan G At 67
              </Link>
            </li>
            <li>
              <Link
                href="/services/enroll-in-medicare-supplement-plan-g-at-69"
                className="text-blue-600 hover:underline"
              >
                Enroll In Medicare Supplement Plan G At 69
              </Link>
            </li>
            <li>
              <Link
                href="/services/enroll-in-medicare-supplement-plan-g-at-70"
                className="text-blue-600 hover:underline"
              >
                Enroll In Medicare Supplement Plan G At 70
              </Link>
            </li>
</ul>
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/health-drug-plans/medigap" rel="noopener noreferrer" target="_blank" className="underline hover:text-blue-700">Medicare.gov Medigap Overview</a> &middot; <a href="https://www.medicare.gov/health-drug-plans/medigap/basics/when-to-get" rel="noopener noreferrer" target="_blank" className="underline hover:text-blue-700">When to Enroll in Medigap</a></div>
            <div className="text-sm text-gray-600 mt-4">Need local help? Contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/shipmain.htm" rel="noopener noreferrer" target="_blank" className="underline hover:text-blue-700">New Jersey State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Contact the <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline hover:text-blue-700">State Health Insurance Assistance Program (SHIP)</a> for free one-on-one Medicare counseling in your state.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline hover:text-blue-700">State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline hover:text-blue-700">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need local help? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline hover:text-blue-700">State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling in your state.</div>
            <div className="text-sm text-gray-600 mt-4">For free, unbiased counseling in your state, contact your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline hover:text-blue-700">State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For free, unbiased counseling in your state, contact your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline hover:text-blue-700">State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific guidance, contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline hover:text-blue-700">New Jersey Department of Banking and Insurance</a> or your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline hover:text-blue-700">SHIP counselor</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline hover:text-blue-700">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific help, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline hover:text-blue-700">State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline hover:text-blue-700">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For New Jersey-specific guidance, contact the <a href="https://www.state.nj.us/dobi/index.shtml" rel="noopener noreferrer" target="_blank" className="underline hover:text-blue-700">NJ Department of Banking and Insurance</a> or your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline hover:text-blue-700">State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline hover:text-blue-700">State Health Insurance Assistance Program (SHIP)</a> for free local Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific guidance, visit the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline hover:text-blue-700">New Jersey Department of Banking and Insurance</a> or contact your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline hover:text-blue-700">SHIP counselor</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific guidance, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline hover:text-blue-700">State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Independent help: <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline hover:text-blue-700">SHIP — free state-based Medicare counseling</a></div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline hover:text-blue-700">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-level help? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline hover:text-blue-700">State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medigap counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Contact the <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline hover:text-blue-700">State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling in your state.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline hover:text-blue-700">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">State help: <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline hover:text-blue-700">NJ Department of Banking and Insurance</a> or contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline hover:text-blue-700">local SHIP program</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific help, visit the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline hover:text-blue-700">New Jersey Department of Banking and Insurance</a> or contact your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline hover:text-blue-700">SHIP counselor</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific guidance, contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline hover:text-blue-700">New Jersey Department of Banking and Insurance</a> or your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline hover:text-blue-700">SHIP counselor</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free Medicare counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline hover:text-blue-700">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific guidance, visit the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline hover:text-blue-700">New Jersey Department of Banking and Insurance</a> or contact your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline hover:text-blue-700">SHIP program</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline hover:text-blue-700">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
      </section>
      </article>
    </>
  );
}