import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "What's the Best Medicare Plan for Someone With Chronic Conditions | Free Broker Help | MedicareYourself",
  description:
    "Chronic condition? Compare Medigap vs. C-SNP for predictable costs and nationwide doctor access. Free licensed broker help — call 855-559-1700 today.",
  alternates: { canonical: "https://medicareyourself.com/services/best-medicare-plan-for-chronic-conditions" },
  openGraph: {
    title:
      "What's the Best Medicare Plan for Someone With Chronic Conditions | Free Broker Help | MedicareYourself",
    description:
      "What's the best Medicare plan for chronic conditions? Learn why Medigap often beats Advantage for ongoing care. Free broker guidance, no health screening.",
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
      name: "Best Medicare Plan for Chronic Conditions",
      item: "https://medicareyourself.com/services/best-medicare-plan-for-chronic-conditions",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "What's the Best Medicare Plan for Someone With Chronic Conditions?",
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
  datePublished: "2026-03-17",
  dateModified: "2026-03-22",
};

const faqs = [
  {
    question: "Which Medicare plan is best for chronic illness?",
    answer:
      "For most people with chronic conditions, Original Medicare paired with a Medigap plan like Plan G or Plan N offers the most predictable costs and widest doctor access. Medicare Advantage C-SNPs exist for specific chronic conditions but often carry higher copays and out-of-pocket maximums than expected.",
  },
  {
    question: "Does Medicare cover osteoarthritis?",
    answer:
      "Yes. Original Medicare covers osteoarthritis-related doctor visits, imaging, physical therapy, and joint replacement surgery under Part A and Part B. You'll still owe deductibles and coinsurance unless you have supplemental coverage like a Medigap plan.",
  },
  {
    question:
      "Can I get a Medigap plan if I already have a chronic condition?",
    answer:
      "During your 6-month Medigap Open Enrollment Period (starting the month you turn 65 and enroll in Part B), carriers cannot deny you or charge more due to health conditions. Outside that window, federal guaranteed issue rights may apply if you lose employer coverage, leave a Medicare Advantage plan, or experience other qualifying events. Rules vary by state, so call to confirm your options.",
  },
  {
    question: "What is a C-SNP plan for chronic conditions?",
    answer:
      "A Chronic Condition Special Needs Plan (C-SNP) is a Medicare Advantage plan designed for people with qualifying conditions like diabetes, heart failure, or cardiovascular disorders. C-SNPs coordinate care for your specific condition but still operate as HMO or PPO plans with network restrictions and cost-sharing.",
  },
,
  {
    question: "Do Special Needs Plans include prescription drug coverage?",
    answer:
      "Yes. All Chronic Condition Special Needs Plans (C-SNPs) are required to include Medicare Part D prescription drug coverage as part of the plan. The formulary is tailored to the chronic conditions the plan serves, which can be helpful if you take specialty medications. However, you're locked into that plan's drug list and pharmacy network.",
  },
  {
    question: "Is Medigap or Medicare Advantage better if I see multiple specialists?",
    answer:
      "If you regularly see multiple specialists, Medigap paired with Original Medicare usually gives you broader access because any provider that accepts Medicare nationwide will accept your supplement. Medicare Advantage plans, including C-SNPs, typically restrict you to in-network providers and may require referrals. For complex chronic care across several doctors, the freedom of Medigap is often worth the higher monthly premium.",
  },
  {
    question: "Can I switch from Medicare Advantage to Medigap if my chronic condition worsens?",
    answer:
      "You can switch during the Annual Election Period or Medicare Advantage Open Enrollment Period, but Medigap carriers can medically underwrite you outside of guaranteed issue windows. That means a carrier could deny coverage or charge more based on your health. A few states have more generous Medigap switching rules, so call 855-559-1700 to review what's available where you live.",
  }
,
  {
    question: "Are chronic care management services covered by Medicare?",
    answer:
      "Yes. Medicare Part B covers Chronic Care Management (CCM) services for beneficiaries with two or more chronic conditions expected to last at least 12 months. These services include a comprehensive care plan, medication management, and coordination between your providers. Standard Part B cost-sharing applies unless you have Medigap coverage.",
  }
,
  {
    question: "Are Medigap plans better than Medicare Advantage for people with multiple chronic conditions?",
    answer:
      "For most people managing multiple chronic conditions, Medigap paired with Original Medicare offers more predictable costs and nationwide access to any doctor or specialist who accepts Medicare. Medicare Advantage plans, including C-SNPs, use provider networks and require referrals or prior authorization for many services, which can complicate care when you see multiple specialists. The right choice depends on your providers, medications, and budget — a licensed broker can compare both side by side at 855-559-1700.",
  }
,
  {
    question: "Are Medigap plans better than Medicare Advantage for chronic conditions?",
    answer:
      "For many people managing chronic conditions, Medigap plans offer advantages because they work with any doctor that accepts Medicare nationwide, with no network restrictions or referrals. Medicare Advantage plans, including C-SNPs, typically require you to use in-network providers and may require prior authorization for specialist care and treatments. The right choice depends on your providers, prescriptions, and budget — a licensed broker can compare your options at no cost.",
  },
  {
    question: "Do C-SNPs coordinate care for chronic conditions?",
    answer:
      "Yes. According to Medicare.gov, Special Needs Plans include care coordination services and tailor their benefits, provider networks, and drug formularies to the specific group they serve. For chronic condition SNPs, this often means dedicated care managers and condition-specific resources, but you'll still need to stay in-network and follow plan rules to get the coordination benefits.",
  }
,
  {
    question: "Are Medicare Advantage plans or Medigap better for managing multiple chronic conditions?",
    answer:
      "Medigap paired with Original Medicare typically works better for people managing multiple chronic conditions because you can see any provider nationwide that accepts Medicare without referrals or network restrictions. Medicare Advantage plans, including C-SNPs, use HMO or PPO networks and may require prior authorization for specialists, imaging, and procedures. A licensed broker can compare both options based on your specific doctors and medications.",
  },
  {
    question: "Can I switch from a Medicare Advantage plan to Medigap if my chronic condition worsens?",
    answer:
      "You can switch during the Annual Enrollment Period or Medicare Advantage Open Enrollment Period, but Medigap carriers can use medical underwriting outside your initial Medigap Open Enrollment Period in most states. That means approval and pricing may depend on your health status. Some states have additional protections, so call to review your guaranteed issue rights before making a change.",
  },
  {
    question: "Does Medicare cover care coordination for chronic conditions?",
    answer:
      "Yes. Original Medicare covers Chronic Care Management services through Part B for people with two or more chronic conditions expected to last at least 12 months. Medicare Advantage Special Needs Plans also include care coordination tailored to the specific condition the plan serves, such as diabetes or cardiovascular disease.",
  }
,
  {
    question: "Do Special Needs Plans cover the same benefits as Original Medicare?",
    answer:
      "Yes. SNPs are required to cover all the same Part A and Part B benefits that Original Medicare and other Medicare Advantage plans cover. They also include care coordination services and tailor their provider networks and drug formularies to the specific condition group they serve.",
  },
  {
    question: "Are C-SNPs offered as HMO or PPO plans?",
    answer:
      "C-SNPs are structured as either HMO or PPO Medicare Advantage plans, which means network rules and referral requirements still apply. That's an important difference from Original Medicare with Medigap, which lets you see any provider nationwide that accepts Medicare.",
  },
  {
    question: "How do I know whether Medigap or a C-SNP is better for my situation?",
    answer:
      "The right choice depends on your providers, prescriptions, budget, and how often you need specialty care. A licensed broker can compare both options side by side at no cost — call 855-559-1700 to walk through your specific conditions and doctors.",
  }
,
  {
    question: "What chronic conditions qualify for a C-SNP?",
    answer:
      "Chronic Condition Special Needs Plans are available for specific severe or disabling conditions identified by Medicare, including diabetes, chronic heart failure, cardiovascular disorders, chronic lung disorders, and end-stage renal disease, among others. Availability varies by ZIP code, and you must have a qualifying diagnosis confirmed by your provider to enroll. Call 855-559-1700 to see which C-SNPs are offered in your area.",
  },
  {
    question: "Can I switch from a Medicare Advantage plan back to Original Medicare with Medigap if my health changes?",
    answer:
      "You can switch back to Original Medicare during the Annual Enrollment Period or the Medicare Advantage Open Enrollment Period each year. However, getting a Medigap policy outside your initial open enrollment window may require medical underwriting unless you qualify for a guaranteed issue right. A licensed broker can review your situation and confirm which protections apply in your state.",
  },
  {
    question: "Do Medigap plans coordinate care for chronic conditions like C-SNPs do?",
    answer:
      "No. Medigap plans are supplemental insurance that pays for cost-sharing left over from Original Medicare, but they do not provide care coordination services. C-SNPs include tailored care coordination, condition-specific provider networks, and customized drug formularies designed around the qualifying condition.",
  }
,
  {
    question: "Are Medigap plans better than Medicare Advantage for chronic conditions?",
    answer:
      "For many people managing ongoing chronic conditions, Medigap offers more predictable costs and lets you see any provider nationwide who accepts Medicare — with no network restrictions or referrals. Medicare Advantage plans, including C-SNPs, use networks and cost-sharing that can add up quickly with frequent specialist visits. The right choice depends on your doctors, medications, and budget, which is why a free broker review helps.",
  },
  {
    question: "Do all C-SNPs cover the same chronic conditions?",
    answer:
      "No. Each C-SNP is designed for one or more qualifying chronic conditions defined by CMS, such as diabetes, chronic heart failure, or cardiovascular disorders. Plan availability, formularies, and provider networks vary by county, so a plan available in one ZIP code may not exist in another.",
  }
];

export default function BestMedicarePlanForChronicConditions() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="mb-4 text-sm text-gray-500">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Best Medicare Plan for Chronic Conditions
        </span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          What&#39;s the Best Medicare Plan for Someone With Chronic Conditions?
        </h1>

        <Image
          src="/images/best-medicare-plan-for-chronic-conditions_vector.webp"
          alt="best medicare plan for someone with chronic conditions"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          What&#39;s the best Medicare plan for someone with chronic conditions? It depends on how often you see specialists, how many medications you take, and whether you can afford surprises. For most people managing ongoing health issues, Original Medicare plus a Medigap supplement gives you the fewest barriers and the most predictable bills.
        </p>
        <p className="text-lg mb-6">
          I&#39;m Anthony Orner, a licensed Medicare broker, and I help people with conditions like diabetes, heart failure, and autoimmune disorders find coverage that actually works for their daily reality.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why Medigap usually beats Medicare Advantage for chronic illness
          </h2>
          <p className="mb-2">
            Medicare Advantage plans look great on paper. Zero-dollar premiums, dental and vision perks, even Chronic Condition Special Needs Plans (C-SNPs) designed for specific diagnoses. But people with chronic conditions use healthcare constantly, and that&#39;s where the cracks show.
          </p>
          <p>
            Advantage plans require network referrals, prior authorizations, and can change their provider networks every year. When you&#39;re seeing three specialists and filling six prescriptions, a surprise network change isn&#39;t an inconvenience. It&#39;s a crisis. Medigap with Original Medicare lets you see any doctor who accepts Medicare, anywhere in the country, with no referrals.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How Plan G and Plan N protect you from unpredictable costs
          </h2>
          <p className="mb-2">
            Plan G covers everything Original Medicare doesn&#39;t except the Part B deductible ($283/year in 2026). After that, your out-of-pocket cost for approved services is zero. No copays at the oncologist. No coinsurance after surgery. No $209.50/day for skilled nursing days 21 through 100.
          </p>
          <p>
            Plan N costs less per month but adds small copays: up to $20 for office visits and up to $50 for ER visits that don&#39;t result in admission. If your condition is stable and you mostly see your primary doctor, Plan N can save you real money. If you&#39;re in and out of hospitals, Plan G is worth the higher premium.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What about chronic condition special needs plans?
          </h2>
          <p className="mb-2">
            C-SNPs are Medicare Advantage plans built around qualifying conditions like diabetes, chronic heart failure, and cardiovascular disorders. They coordinate care and may cover extra services for those specific conditions.
          </p>
          <p>
            But they&#39;re still Advantage plans. They still have networks, out-of-pocket maximums, and cost-sharing. Some people on public forums have noticed that C-SNPs actually carry higher copays and drug costs than standard Advantage plans from the same carrier. That&#39;s worth looking at carefully before enrolling.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Guaranteed issue rights that bypass health questions entirely
          </h2>
          <p className="mb-2">
            Your best shot at Medigap is during your 6-month Open Enrollment Period, which starts the month you turn 65 and enroll in Part B. During this window, no carrier can deny you or charge more because of a chronic condition. None.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Losing employer or union group coverage</li>
            <li>Leaving a Medicare Advantage plan</li>
            <li>Your plan carrier goes bankrupt or violates its contract</li>
            <li>Moving out of your plan&#39;s service area</li>
          </ul>
          <p className="mt-2">
            These are federal guaranteed issue triggers. Some states offer additional protections. Rules vary by state, so call to confirm what applies to you.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            The real cost of choosing wrong
          </h2>
          <p className="mb-2">
            I&#39;ve talked to people who picked a $0 Advantage plan and then watched copays pile up after a hospital stay. Or found their longtime specialist dropped from the network mid-year. When you have a chronic condition, switching plans isn&#39;t just paperwork. It can mean gaps in treatment.
          </p>
          <p>
            The Part A deductible alone is $1,676 per benefit period in 2026. If your condition puts you in the hospital more than once a year, that resets each time. A Medigap plan eliminates that exposure entirely.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How Anthony matches your conditions to the right plan
          </h2>
          <p className="mb-2">
            I don&#39;t sell one type of plan. I compare Medigap, Advantage, and Part D options across carriers to find what fits your actual health situation. That means looking at your medications, your doctors, how often you need specialists, and what you can budget monthly.
          </p>
          <p>
            There&#39;s no cost for my help, no health screening to talk, and no pressure to enroll. If you&#39;re managing a chronic condition, you already deal with enough hassle. Getting the right Medicare plan shouldn&#39;t add to it.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center mb-10">
          <p className="text-xl font-semibold mb-2">
            Talk to a licensed broker who understands chronic conditions.
          </p>
          <p className="text-2xl font-bold mb-4">
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

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/services/compare-and-enroll-in-plan-g-online"
                className="text-blue-600 hover:underline"
              >
                Medigap Plan G: What It Covers and What It Costs
              </Link>
            </li>
            <li>
              <Link
                href="/services/quickest-way-to-enroll-into-plan-n"
                className="text-blue-600 hover:underline"
              >
                Medigap Plan N: A Lower-Cost Supplement Option
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-supplement/new-jersey/vs-medicare-advantage"
                className="text-blue-600 hover:underline"
              >
                Medicare Advantage vs. Medigap: Which Is Right for You?
              </Link>
            </li>
            <li>
              <Link
                href="/services/you-get-a-medicare-supplement-plan-if-you-have-a-pre-existing-condition"
                className="text-blue-600 hover:underline"
              >
                Medigap Guaranteed Issue Rights Explained
              </Link>
            </li>
                      <li>
              <Link
                href="/services/help-with-your-medicare-decision"
                className="text-blue-600 hover:underline"
              >
                Help With Your Medicare Decision
              </Link>
            </li>
            <li>
              <Link
                href="/services/best-and-cheapest-medicare-supplement"
                className="text-blue-600 hover:underline"
              >
                Best And Cheapest Medicare Supplement
              </Link>
            </li>
            <li>
              <Link
                href="/services/independent-medicare-agents-near-me"
                className="text-blue-600 hover:underline"
              >
                Independent Medicare Agents Near Me
              </Link>
            </li>
            <li>
              <Link
                href="/services/best-medicare-plan-for-foreign-travel"
                className="text-blue-600 hover:underline"
              >
                Best Medicare Plan For Foreign Travel
              </Link>
            </li>
            <li>
              <Link
                href="/services/whats-the-best-medicare-plan-for-someone-with-diabetes"
                className="text-blue-600 hover:underline"
              >
                Whats The Best Medicare Plan For Someone With Diabetes
              </Link>
            </li>
            <li>
              <Link
                href="/services/which-medicare-supplemental-plan-best-for-copd-patient"
                className="text-blue-600 hover:underline"
              >
                Which Medicare Supplemental Plan Best For Copd Patient
              </Link>
            </li>
</ul>
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/coverage/chronic-care-management-services" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov – Chronic Care Management Services</a> and <a href="https://www.medicare.gov/health-drug-plans/health-plans/your-health-plan-options/SNP" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov – Special Needs Plans (SNPs)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also reach the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-700 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: free unbiased counseling is available through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free local Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For free local counseling on plan choices with chronic conditions, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> or the <a href="https://www.nj.gov/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free local counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For free local counseling, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> or the <a href="https://www.nj.gov/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: get free unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free local Medicare counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>, or call 855-559-1700 for licensed broker help.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: contact <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-700 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free unbiased Medicare counseling.</div>
      </section>
      </article>
    </>
  );
}