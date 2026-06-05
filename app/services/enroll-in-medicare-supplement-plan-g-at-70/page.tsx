import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "enroll in medicare supplement plan g at 70 | Free Broker Help | MedicareYourself",
  description:
    "Enrolling in Medicare Supplement Plan G at 70? Get free licensed broker help comparing carriers and navigating underwriting. Call 855-559-1700 today.",
  alternates: { canonical: "https://medicareyourself.com/services/enroll-in-medicare-supplement-plan-g-at-70" },
  openGraph: {
    title:
      "enroll in medicare supplement plan g at 70 | Free Broker Help | MedicareYourself",
    description:
      "Enroll in Medicare Supplement Plan G at 70 — even outside open enrollment. Learn about underwriting, top carriers, and guaranteed issue. Free broker help.",
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
      name: "Enroll in Medicare Supplement Plan G at 70",
      item: "https://medicareyourself.com/services/enroll-in-medicare-supplement-plan-g-at-70",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Enroll in Medicare Supplement Plan G at 70: What You Need to Know",
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
  mainEntityOfPage:
    "https://medicareyourself.com/services/enroll-in-medicare-supplement-plan-g-at-70",
};

const faqs = [
  {
    question: "Is Medicare Plan G worth it for seniors?",
    answer:
      "Plan G covers everything Original Medicare doesn't except the Part B deductible ($283/year in 2026). For most seniors, that makes it the most cost-effective Medigap plan available since Plan F is closed to new enrollees. You'll pay one predictable premium with virtually no surprise bills.",
  },
  {
    question:
      "What is the biggest mistake seniors make when enrolling in Medicare?",
    answer:
      "Waiting too long to apply for a Medigap plan. Your Medigap Open Enrollment Period lasts 6 months starting when you're 65+ and enrolled in Part B. Outside that window, carriers can deny you or charge more based on health history. At 70, you've likely passed that window, so working with a broker who knows which carriers are most lenient with underwriting is critical.",
  },
  {
    question: "Can I get Plan G at 70 without health questions?",
    answer:
      "Only if you qualify for federal Guaranteed Issue rights — for example, you're leaving a Medicare Advantage plan during open enrollment, or your current carrier is leaving your area. Otherwise, most carriers will require medical underwriting. Many 70-year-olds still pass underwriting with common conditions like managed blood pressure or cholesterol.",
  },
  {
    question: "How much does Plan G cost at age 70?",
    answer:
      "Rates vary by carrier, zip code, and health status. Attained-age-rated plans will be higher at 70 than at 65, but choosing a carrier with stable long-term rate behavior matters more than chasing the lowest starting premium. Call 855-559-1700 for a free rate comparison.",
  },
,
  {
    question: "Do I have to wait for an open enrollment period to apply for Plan G at 70?",
    answer:
      "No. Unlike Medicare Advantage and Part D, Medigap plans like Plan G can be applied for at any time of year. However, outside of your initial Medigap Open Enrollment Period or a Guaranteed Issue situation, you'll typically need to answer health questions. A broker can pre-screen you with multiple carriers before you submit a formal application.",
  },
  {
    question: "Can I switch from Medicare Advantage to Plan G at age 70?",
    answer:
      "Yes, you can apply to switch from Medicare Advantage to Original Medicare with a Plan G supplement, but you'll usually need to pass medical underwriting unless you qualify for a Guaranteed Issue right. The Medicare Advantage Open Enrollment Period each year is a common time people make this move. We can review your health profile and identify which carriers are most likely to approve you.",
  },
  {
    question: "Does Plan G cover prescription drugs at 70?",
    answer:
      "No. Medigap Plan G does not include prescription drug coverage. To get drug coverage, you'll need to enroll in a standalone Medicare Part D plan alongside your Plan G. We can help you compare Part D plans based on your specific medications and preferred pharmacy.",
  }
,
  {
    question: "What happens if I'm denied Plan G coverage at 70?",
    answer:
      "If one carrier declines you due to underwriting, you still have options. Different carriers use different underwriting criteria, so a broker can shop your application to companies more likely to approve your specific health profile. If no Medigap carrier will accept you, alternatives like Medicare Advantage remain guaranteed issue during certain enrollment windows.",
  },
  {
    question: "Can I switch from Medicare Advantage to Plan G at 70?",
    answer:
      "Yes, but timing matters. You can disenroll from Medicare Advantage during the Annual Enrollment Period or the Medicare Advantage Open Enrollment Period. However, unless you have a Guaranteed Issue right, you'll typically need to pass medical underwriting to get Plan G. Call 855-559-1700 to review your switch options before you cancel anything.",
  },
  {
    question: "Does Plan G cover prescription drugs at 70?",
    answer:
      "No. Medigap Plan G covers gaps in Original Medicare Parts A and B, but it does not include prescription drug coverage. You'll need a separate Part D plan to cover medications. A broker can help you enroll in both at the same time so there are no coverage gaps.",
  }
,
  {
    question: "Will I need to answer health questions to switch to Plan G at 70?",
    answer:
      "In most cases, yes. Once you're outside your 6-month Medigap Open Enrollment Period, federal law allows carriers to use medical underwriting unless you qualify for a Guaranteed Issue right. Some states offer additional protections beyond federal rules, so it's worth checking your state's specific Medigap laws before applying.",
  },
  {
    question: "Can I switch from Medicare Advantage to Plan G at age 70?",
    answer:
      "Yes, but timing matters. You typically need to disenroll from Advantage during a valid election period and then apply for Plan G, which may involve underwriting unless you have a trial right or other Guaranteed Issue protection. A licensed broker can help you sequence the change so you don't end up with a coverage gap.",
  },
  {
    question: "Does Plan G coverage work the same in every state?",
    answer:
      "Yes. Plan G benefits are standardized by federal law, so the coverage is identical from carrier to carrier and state to state, with the exception of Massachusetts, Minnesota, and Wisconsin which standardize Medigap differently. What varies is the monthly premium, customer service, and how each carrier handles future rate increases.",
  }
,
  {
    question: "Can I switch from Medicare Advantage to Plan G at 70?",
    answer:
      "Yes, but in most states you'll need to pass medical underwriting unless you qualify for a federal Guaranteed Issue right, such as a trial right within your first year on Medicare Advantage. Some states offer additional protections beyond federal rules. A licensed broker can review your situation and identify carriers most likely to approve your application.",
  },
  {
    question: "What documents do I need to enroll in Plan G at 70?",
    answer:
      "You'll need your Medicare card showing your Part A and Part B effective dates, a valid ID, and basic health history for the underwriting questions. Some carriers also pull a prescription history report. The application itself usually takes about 20 minutes when working with a broker.",
  }
];

export default function EnrollInMedicareSupplementPlanGAt70() {
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
        <span className="text-gray-700">
          Enroll in Medicare Supplement Plan G at 70
        </span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Enroll in Medicare Supplement Plan G at 70: What You Need to Know
        </h1>

        <Image
          src="/images/enroll-in-medicare-supplement-plan-g-at-70.webp"
          alt="enroll in medicare supplement plan g at 70"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Enrolling in Medicare Supplement Plan G at 70 is absolutely possible, but the process looks different than it did at 65. You've likely missed your Medigap Open Enrollment Period, which means most carriers will ask health questions before approving your application.
        </p>
        <p className="text-lg mb-6">
          That doesn't mean you're out of options. It means you need to pick the right carrier and work with someone who knows which ones to approach first.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Do you still have guaranteed issue rights at 70?
          </h2>
          <p className="mb-2">
            Maybe. Federal law grants Guaranteed Issue rights in specific situations, regardless of age:
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-2">
            <li>You're leaving a Medicare Advantage plan during open enrollment (Oct 15 - Dec 7)</li>
            <li>Your current Medigap carrier went bankrupt or left your area</li>
            <li>You lost employer or union group coverage</li>
            <li>Your plan violated its contract</li>
          </ul>
          <p>
            If one of these applies to you, carriers must sell you Plan G without health questions or higher pricing. If none apply, you'll go through underwriting.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Health questions you may face during underwriting
          </h2>
          <p className="mb-2">
            Underwriting at 70 isn't automatic rejection. Carriers typically ask about conditions diagnosed or treated in the last 2-5 years. Common questions cover:
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-2">
            <li>Cancer treatment history</li>
            <li>Heart disease, stroke, or COPD</li>
            <li>Diabetes (insulin use matters)</li>
            <li>Kidney disease or dialysis</li>
            <li>Pending surgeries or recent hospitalizations</li>
          </ul>
          <p>
            Managed blood pressure, cholesterol medication, and mild arthritis? Most carriers approve those without issue. The details matter, and each company draws the line differently.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Best carriers for 70-year-old applicants in 2025
          </h2>
          <p className="mb-2">
            Plan G is standardized. Every carrier's Plan G pays the same benefits. What differs is premium pricing, rate stability over time, and underwriting flexibility.
          </p>
          <p className="mb-2">
            Some carriers price aggressively low to attract new members, then stack rate increases as the block ages. At 70, you want a carrier known for stable long-term rate behavior, not the cheapest month-one premium. That distinction can save you thousands between now and 80.
          </p>
          <p>
            I compare multiple carriers for every client. Rates vary by zip code, so there's no single "best" answer without looking at your specific situation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why the starting premium isn't the number that matters most
          </h2>
          <p className="mb-2">
            Here's what catches people off guard: attained-age rate increases plus block rate increases can stack. A 10-18% jump in a single year isn't unusual with the wrong carrier.
          </p>
          <p>
            I look at each carrier's rate increase history before recommending them. A plan that costs $20 more per month now but holds steady saves you real money over a decade.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What Plan G actually covers at 70
          </h2>
          <p className="mb-2">
            Plan G covers nearly all out-of-pocket costs under Original Medicare. You pay the annual Part B deductible ($283 in 2026) and your monthly premium. That's it.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Part A deductible: $1,676 per benefit period — covered</li>
            <li>SNF coinsurance: $209.50/day for days 21-100 — covered</li>
            <li>Part B excess charges — covered</li>
            <li>Foreign travel emergency care — covered</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How Anthony Orner handles your application start to finish
          </h2>
          <p className="mb-2">
            I pull rate quotes from multiple carriers in your zip code, review your health history, and identify which companies are most likely to approve you. If you have Guaranteed Issue rights, I'll make sure we use them.
          </p>
          <p className="mb-2">
            I fill out the application with you over the phone, submit it, and follow up with the carrier until your policy is issued. No cost to you. Brokers are paid by the insurance company, not the client.
          </p>
          <p>
            Call <strong>855-559-1700</strong> and we'll get your options sorted in one conversation.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center my-10">
          <p className="text-xl font-semibold mb-2">
            Ready to enroll in Plan G at 70? Let's find your best carrier match.
          </p>
          <p className="text-2xl font-bold mb-4">
            <a href="tel:855-559-1700" className="underline">
              855-559-1700
            </a>
          </p>
          <Link
            href="/quote"
            className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
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
                Medigap Open Enrollment Period Explained
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
                href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
                className="text-blue-600 hover:underline"
              >
                Plan G vs Plan N: Which Is Right for You?
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
</ul>
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/health-drug-plans/medigap/ready-to-buy/when" rel="noopener noreferrer" target="_blank" className="underline">When can I buy a Medigap policy? (Medicare.gov)</a> &middot; <a href="https://www.medicare.gov/medigap-supplemental-insurance-plans/" rel="noopener noreferrer" target="_blank" className="underline">Find a Medigap plan (Medicare.gov)</a></div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: free counseling is available through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-level help? Contact your <a href="https://www.shiphelp.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need unbiased state help? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free local Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need local help? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free one-on-one Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">local SHIP counselor</a> for free, unbiased Medicare counseling in your state.</div>
            <div className="text-sm text-gray-600 mt-4">Need free, unbiased counseling? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for one-on-one Medicare guidance in your state.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-level help? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free local Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need free, unbiased counseling? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for one-on-one Medicare guidance in your state.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free local Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-level help? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need free state-based counseling? Visit the <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> to find local Medicare help.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-level help? Contact <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">your local SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need state help? Contact your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">SHIP (State Health Insurance Assistance Program)</a> for free unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_consumers/insurance/ship.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-level help? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free local Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">local SHIP counselor</a> for free, unbiased Medicare guidance.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free local Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: <a href="https://www.state.nj.us/dobi/division_insurance/ship/" target="_blank" rel="noopener noreferrer" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> offers free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific guidance? Contact the <a href="https://www.nj.gov/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">New Jersey Department of Banking and Insurance</a> or your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling in your area.</div>
            <div className="text-sm text-gray-600 mt-4">State help: <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">Find your local SHIP counselor</a> for free, unbiased Medicare counseling in your state.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Contact your <a href="https://www.shiphelp.org/about-medicare/regional-ship-location" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">local SHIP counselor</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need free unbiased counseling? Contact your <a href="https://www.shiphelp.org/about-medicare/regional-ship-location" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> or the <a href="https://www.nj.gov/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medigap counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> or the <a href="https://www.nj.gov/dobi/" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a>.</div>
      </section>
      </article>
    </>
  );
}