import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "quickest way to enroll into plan g | Same-Day Coverage Available | MedicareYourself",
  description:
    "Quickest way to enroll in Medicare Plan G? During Medigap Open Enrollment, finish your application in one call with a licensed broker. Call 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/quickest-way-to-enroll-into-plan-g" },
  openGraph: {
    title:
      "quickest way to enroll into plan g | Same-Day Coverage Available | MedicareYourself",
    description:
      "Quickest way to enroll into Plan G? With the right timing, you can finish in one call. Anthony Orner handles the application same day. Start your free quote.",
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
      name: "Quickest Way to Enroll Into Plan G",
      item: "https://medicareyourself.com/services/quickest-way-to-enroll-into-plan-g",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Quickest Way to Enroll Into Plan G: A Step-by-Step Timeline",
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
    question: "Can I enroll in Medicare Plan G anytime?",
    answer:
      "Not without conditions. You're guaranteed acceptance during your 6-month Medigap Open Enrollment Period, which starts the month you turn 65 and are enrolled in Part B. Outside that window, you'll typically need to pass medical underwriting unless you qualify for a federal guaranteed issue right.",
  },
  {
    question: "What is the best time to enroll in a Medigap plan?",
    answer:
      "Your Medigap Open Enrollment Period is the best time. During these 6 months, no insurance company can deny you or charge more based on health conditions. If you're past that window, certain life events like losing employer coverage or leaving a Medicare Advantage plan can also trigger guaranteed issue rights.",
  },
  {
    question: "How long does a Plan G application take to process?",
    answer:
      "If you're in your Open Enrollment Period, the application itself can be completed in a single phone call. Most carriers issue approval within a few days. During guaranteed issue or medical underwriting situations, processing can take 1-3 weeks depending on the carrier.",
  },
  {
    question: "What if my Plan G application gets denied?",
    answer:
      "Denials happen outside of Open Enrollment when medical underwriting is required. Health conditions like diabetes can lead to rejection. If you're denied, a licensed broker can help identify carriers with more flexible underwriting or find a guaranteed issue window that applies to your situation.",
  },
];

export default function QuickestWayToEnrollIntoPlanG() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">Quickest Way to Enroll Into Plan G</span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Quickest Way to Enroll Into Plan G: A Step-by-Step Timeline
        </h1>

        <Image
          src="/images/quickest-way-to-enroll-into-plan-g.webp"
          alt="quickest way to enroll into plan g"
          width={800}
          height={400}
          className="w-full h-auto rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          The quickest way to enroll into Plan G depends on one thing: your enrollment window. If you're in the right window, I can complete your application in a single phone call and have approval back within days.
        </p>
        <p className="text-lg mb-6">
          If you're outside that window, it still doesn't have to be slow. Here's how the timeline actually works.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            The fastest enrollment path depending on your situation
          </h2>
          <p className="mb-3">
            Your speed depends on which category you fall into:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-3">
            <li>
              <strong>Medigap Open Enrollment Period:</strong> No health questions. No underwriting. One call, same-day application. This is the fastest path. It starts the month you're 65+ and enrolled in Part B, lasting 6 months.
            </li>
            <li>
              <strong>Guaranteed issue rights:</strong> If you lost employer coverage, your Medicare Advantage plan left your area, or your carrier went bankrupt, you may qualify. No medical questions required. Application takes one call.
            </li>
            <li>
              <strong>Medical underwriting:</strong> Outside those windows, you'll answer health questions. Approval typically takes 1-3 weeks depending on the carrier and your health history.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Open enrollment vs. guaranteed issue: which applies to you
          </h2>
          <p className="mb-3">
            Your Medigap Open Enrollment Period is automatic. You don't apply for it. It starts the first day of the month you're both 65 or older and enrolled in Part B. During these 6 months, every Plan G carrier in your state must accept you at their standard rate regardless of health conditions.
          </p>
          <p>
            Guaranteed issue is different. It's triggered by specific life events defined by federal law. You won't always know you qualify unless someone checks. That's part of what I do.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What slows down Plan G enrollment (and how to avoid it)
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Applying outside your window without knowing it.</strong> I've seen people get denied because they applied during underwriting when they actually had guaranteed issue rights. A broker catches that.
            </li>
            <li>
              <strong>Incomplete applications.</strong> Missing your Medicare number or Part B effective date delays processing. Have your red, white, and blue Medicare card ready.
            </li>
            <li>
              <strong>Waiting too long after turning 65.</strong> Once your 6-month window closes, you're subject to health questions. Pre-existing conditions like diabetes can mean denial.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What Plan G actually covers (and why people want it fast)
          </h2>
          <p className="mb-3">
            Plan G covers the Part A deductible ($1,676 per benefit period in 2026), skilled nursing facility coinsurance ($209.50/day for days 21-100), Part B excess charges, and foreign travel emergency care. You pay only the annual Part B deductible of $283, then Plan G picks up essentially everything else Original Medicare approves.
          </p>
          <p>
            People rush to lock it in because rates are lowest when you're youngest and healthiest. Every month you wait past your open enrollment, you risk higher premiums or denial.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Switching to Plan G from Medicare Advantage
          </h2>
          <p className="mb-3">
            This is the situation I hear about most. Someone switched to an Advantage plan, hit the referral walls and copays, and wants Plan G back. The hard truth: outside of guaranteed issue, you'll face medical underwriting.
          </p>
          <p>
            Some states have birthday rules or other protections that create windows. Rules vary by state, so call to confirm your options. The sooner you explore it, the more paths are available.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Enroll in Plan G today with a licensed broker
          </h2>
          <p className="mb-3">
            I'm Anthony Orner, a licensed Medicare broker. I handle Plan G applications same day. No cost to you. I'll confirm your enrollment window, compare carrier rates in your state, and submit the application while we're on the phone.
          </p>
          <p>
            If you're turning 65 soon, the smartest move is to start this process about 6 months before your Part B effective date. That locks in the best rate at the earliest possible moment.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center my-10">
          <p className="text-xl font-semibold mb-3">
            Ready to enroll in Plan G? One call is all it takes.
          </p>
          <p className="text-3xl font-bold mb-4">
            <a href="tel:8555591700" className="hover:underline">
              855-559-1700
            </a>
          </p>
          <Link
            href="/quote"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Get a Free Quote
          </Link>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
                className="text-blue-600 hover:underline"
              >
                Plan G vs. Plan N: Which Medigap Plan Is Right for You?
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
                href="/medicare-supplement/switch-carriers"
                className="text-blue-600 hover:underline"
              >
                Switching From Medicare Advantage to Medigap
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-supplement-plan-g-cost-for-68-year-old"
                className="text-blue-600 hover:underline"
              >
                How Much Does Medicare Supplement Plan G Cost?
              </Link>
            </li>
                      <li>
              <Link
                href="/services/compare-and-enroll-in-plan-g-online"
                className="text-blue-600 hover:underline"
              >
                Compare And Enroll In Plan G Online
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
                href="/services/how-to-enroll-in-medicare-in-new-jersey"
                className="text-blue-600 hover:underline"
              >
                How To Enroll In Medicare In New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/services/enroll-in-plan-g-online"
                className="text-blue-600 hover:underline"
              >
                Enroll In Plan G Online
              </Link>
            </li>
</ul>
              <div className="text-sm text-gray-600 mt-4">Official Medicare resources: <a href="https://www.medicare.gov/health-drug-plans/medigap/ready-to-buy" rel="noopener noreferrer" target="_blank" className="underline">Get ready to buy a Medigap policy</a> and <a href="https://www.medicare.gov/health-drug-plans/medigap/ready-to-buy/how" rel="noopener noreferrer" target="_blank" className="underline">How to buy a Medigap policy</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/ihcseniors/shipdir.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/dobi/division_insurance/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/dobi/division_consumers/insurance/ship.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/dobi/division_consumers/insurance/ship.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/dobi/division_consumers/insurance/ship.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/dobi/division_consumers/insurance/ship.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/dobi/division_consumers/insurance/ship.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.html" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medigap counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/shipindex.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medigap counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also consult the <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medigap counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-2">New Jersey residents can also contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or the free <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP counseling program</a> for unbiased Medigap guidance.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medigap counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can verify broker licensing and Medigap rules with the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or call the <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling from the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medigap counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/dobi/division_consumers/insurance/ship.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP program</a> for free Medigap counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medigap counseling.</div>
      </section>
      </article>
    </>
  );
}