import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "free medicare broker new jersey | No Fees, No Obligation | MedicareYourself",
  description:
    "Free New Jersey Medicare broker — compare Medigap, Advantage & Part D across top carriers with zero fees or pressure. Call 855-559-1700 for unbiased help.",
  alternates: { canonical: "https://medicareyourself.com/services/free-medicare-broker-new-jersey" },
  openGraph: {
    title:
      "free medicare broker new jersey | No Fees, No Obligation | MedicareYourself",
    description:
      "Free Medicare broker in New Jersey — Anthony Orner is licensed, independent, and paid by carriers so you pay nothing. Compare plans with zero obligation.",
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
      name: "Free Medicare Broker New Jersey",
      item: "https://medicareyourself.com/services/free-medicare-broker-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Free Medicare Broker in New Jersey: Licensed Help That Never Costs You a Dime",
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
    question: "Are Medicare brokers free?",
    answer:
      "Yes. Independent Medicare brokers like Anthony Orner are paid commissions directly by insurance carriers. You never pay a fee, a markup, or a hidden charge. The plans cost the same whether you enroll through a broker, online, or directly with the carrier.",
  },
  {
    question:
      "What's the difference between a Medicare agent and a Medicare broker?",
    answer:
      "A captive agent represents one insurance company and can only show you that company's plans. An independent broker is licensed with multiple carriers and can compare options across all of them. A broker works for you; an agent works for a single carrier.",
  },
  {
    question: "Do I have to enroll through the broker after getting a quote?",
    answer:
      "No. There's zero obligation. You can get a full plan comparison, ask every question you have, and walk away if nothing fits. The consultation is free regardless of whether you enroll.",
  },
  {
    question: "Can a New Jersey Medicare broker help with Medigap and Medicare Advantage?",
    answer:
      "Yes. An independent broker licensed in New Jersey can quote both Medigap (Medicare Supplement) and Medicare Advantage plans, plus standalone Part D prescription drug plans. You get a side-by-side view of all your options in one call.",
  },
  {
    question: "Is Anthony Orner licensed to help with Medicare in New Jersey?",
    answer:
      "Yes. Anthony Orner (NPI 1902584006) is a licensed Medicare insurance broker in New Jersey and 34 additional states. He works as an independent broker, which means he can compare plans across multiple carriers rather than representing just one company.",
  },
  {
    question: "How does a New Jersey broker help with Medigap enrollment?",
    answer:
      "New Jersey uses community rating for Medigap, meaning premiums are set the same regardless of your age. A broker can explain your 6-month Medigap Open Enrollment Period, which begins when you're 65 or older and enrolled in Part B, and help you compare letter plans like Plan G and Plan N across carriers.",
  }
,
  {
    question: "Does New Jersey have a SHIP program for free Medicare counseling?",
    answer:
      "Yes. New Jersey's State Health Insurance Assistance Program (SHIP) provides free, unbiased Medicare counseling to beneficiaries and their families. SHIP counselors do not sell insurance, while a licensed broker can both educate you and help you enroll in a plan that fits your situation.",
  },
  {
    question: "When can I enroll in a Medigap plan in New Jersey?",
    answer:
      "The federal 6-month Medigap Open Enrollment Period begins the month you are 65 or older and enrolled in Part B. During this window, you have guaranteed issue rights and cannot be denied or charged more for health reasons. Outside this period, eligibility may depend on medical underwriting or specific guaranteed-issue situations.",
  },
  {
    question: "How quickly can a New Jersey Medicare broker get me a plan comparison?",
    answer:
      "Most plan comparisons can be completed in a single phone call. Call 855-559-1700 to review Medigap, Medicare Advantage, and Part D options side by side with a licensed broker, with no fees and no obligation to enroll.",
  }
,
  {
    question: "When is the best time to enroll in a Medigap plan in New Jersey?",
    answer:
      "The strongest time to enroll is during your 6-month Medigap Open Enrollment Period, which begins the month you're 65 or older and enrolled in Part B. During this window, carriers in New Jersey cannot deny you coverage or charge more based on health history. A broker can walk you through the timing so you don't miss it.",
  },
  {
    question: "Does a Medicare broker in New Jersey also help with Part D drug plans?",
    answer:
      "Yes. An independent broker can compare standalone Part D prescription drug plans alongside Medigap, or review the drug coverage built into a Medicare Advantage plan. The goal is to match your specific medications and preferred pharmacies to the lowest-cost plan available.",
  },
  {
    question: "What free help is available in New Jersey besides a broker?",
    answer:
      "New Jersey residents can also contact the State Health Insurance Assistance Program (SHIP), run through the Division of Aging Services, for free, unbiased Medicare counseling. SHIP counselors don't sell plans, while a licensed broker can both advise you and complete enrollment. Many beneficiaries use both resources.",
  }
,
  {
    question: "When is the best time to enroll in a Medigap plan in New Jersey?",
    answer:
      "The best time is during your 6-month Medigap Open Enrollment Period, which begins the month you turn 65 and are enrolled in Part B. During this window, carriers cannot deny coverage or charge more based on health. A broker can help you compare community-rated NJ plans before that window closes.",
  },
  {
    question: "Does a New Jersey Medicare broker also help with Part D drug plans?",
    answer:
      "Yes. A licensed broker can review your prescription list and compare standalone Part D plans available in your county. This helps ensure your medications are covered and that you're not overpaying through the wrong formulary tier.",
  },
  {
    question: "What information should I have ready before calling a Medicare broker?",
    answer:
      "Have your Medicare card (or your Part A/B effective dates), a list of your current prescriptions with dosages, and the names of any doctors or specialists you want to keep. This lets the broker quickly compare plans that fit both your providers and your medications.",
  }
,
  {
    question: "When can I enroll in a Medigap plan in New Jersey?",
    answer:
      "Your 6-month Medigap Open Enrollment Period begins the month you're 65 or older and enrolled in Medicare Part B. During this window, you have guaranteed issue rights and can't be denied coverage or charged more due to health conditions. New Jersey also uses community rating, so Medigap premiums aren't based on your age.",
  },
  {
    question: "Where can I get free Medicare counseling in New Jersey besides a broker?",
    answer:
      "New Jersey's State Health Insurance Assistance Program (SHIP) offers free, unbiased Medicare counseling to residents. A licensed broker is a separate option that adds plan-shopping across multiple carriers at no cost to you. Many beneficiaries use both resources to make a confident decision.",
  },
  {
    question: "Does working with a broker cost more than enrolling directly with a carrier?",
    answer:
      "No. Medicare plan premiums are filed with CMS and the state, so the price is identical whether you enroll through a broker, the carrier, or medicare.gov. A broker simply adds licensed guidance and ongoing service at no extra cost to you.",
  }
,
  {
    question: "When is the best time to enroll in a Medigap plan in New Jersey?",
    answer:
      "The best time is during your 6-month Medigap Open Enrollment Period, which begins the month you're 65 or older and enrolled in Medicare Part B. During this window, you have guaranteed issue rights and cannot be denied coverage or charged more for health reasons. A New Jersey broker can help you compare Medigap plans before this window closes.",
  },
  {
    question: "Does a Medicare broker help after I'm already enrolled?",
    answer:
      "Yes. A broker can review your current coverage each year during the Annual Enrollment Period (October 15 to December 7) to make sure your plan still fits your doctors, medications, and budget. Ongoing service is part of working with an independent broker and does not cost extra.",
  },
  {
    question: "What information should I have ready when I call a New Jersey Medicare broker?",
    answer:
      "Have your Medicare card or Medicare number, a list of your current prescriptions with dosages, and the names of doctors or hospitals you want to keep. This lets the broker run an accurate plan comparison on the first call and identify which Medigap or Medicare Advantage plans match your needs.",
  }
,
  {
    question: "Does using a free broker change the price of my Medicare plan?",
    answer:
      "No. Medicare plan premiums are filed with CMS and state regulators, so the price is identical whether you enroll through a broker, directly with the carrier, or online. Working with a broker simply adds a licensed advocate who can compare options and help with claims questions later — at no added cost to you.",
  },
  {
    question: "What should I have ready before calling a New Jersey Medicare broker?",
    answer:
      "It helps to have your Medicare card (or Part A/B effective dates), a list of your current prescriptions with dosages, your preferred doctors and hospitals, and your ZIP code. With that information, a broker can quickly narrow down which Medigap, Medicare Advantage, and Part D plans actually fit your needs in New Jersey.",
  }
,
  {
    question: "When can I enroll in a Medigap plan in New Jersey?",
    answer:
      "Your best opportunity is the 6-month Medigap Open Enrollment Period, which starts the month you're 65 or older and enrolled in Part B. During this window, carriers cannot deny you coverage or charge more based on health history. Outside this window, medical underwriting may apply unless you qualify for a guaranteed issue right.",
  },
  {
    question: "Does New Jersey use community rating for Medigap premiums?",
    answer:
      "Yes. New Jersey uses community rating, which means Medigap premiums are not based on your age. A broker can walk you through how each carrier prices its plans and which letter plan (such as Plan G or Plan N) fits your needs and budget.",
  },
  {
    question: "How do I get started with a free Medicare review in New Jersey?",
    answer:
      "Call 855-559-1700 to speak directly with Anthony Orner. You'll get a side-by-side comparison of Medigap, Medicare Advantage, and Part D options available in your New Jersey ZIP code, with no fees and no obligation to enroll.",
  }
,
  {
    question: "When can I enroll in a Medigap plan in New Jersey?",
    answer:
      "Your best window is the 6-month Medigap Open Enrollment Period, which starts the month you're 65 or older and enrolled in Part B. During this window, you have guaranteed issue rights and cannot be denied coverage based on health. Outside this window, medical underwriting may apply unless you qualify for a separate guaranteed issue right.",
  },
  {
    question: "How does community rating affect Medigap premiums in New Jersey?",
    answer:
      "New Jersey requires Medigap insurers to use community rating, which means premiums for a given plan are the same regardless of the enrollee's age. Your premium won't go up just because you get older, though carriers can still adjust rates for inflation and claims experience. A broker can compare community-rated premiums across carriers to find the best value.",
  },
  {
    question: "What does a free Medicare broker actually do for me?",
    answer:
      "A broker reviews your doctors, prescriptions, and budget, then compares Medigap, Medicare Advantage, and Part D plans from multiple carriers. They handle the application paperwork, explain enrollment windows, and stay available for ongoing questions after you enroll. Because carriers pay the commission, none of this costs you anything.",
  }
,
  {
    question: "When is the best time to enroll in a Medigap plan in New Jersey?",
    answer:
      "The strongest time to enroll is during your 6-month Medigap Open Enrollment Period, which starts the month you're 65 or older and enrolled in Part B. During this window, carriers cannot deny you coverage or charge more based on health. A New Jersey broker can help you compare plans before the window closes. Call 855-559-1700 to review your timing.",
  },
  {
    question: "Does it cost more to use a broker instead of going directly to a carrier?",
    answer:
      "No. Medicare plan premiums are filed with CMS and the state, so the price is identical whether you enroll through a broker, the carrier directly, or Medicare.gov. Using an independent broker gives you a side-by-side comparison at no added cost.",
  },
  {
    question: "What information should I have ready before calling a Medicare broker?",
    answer:
      "It helps to have your Medicare card (or expected Part A and Part B effective dates), a list of your current medications with dosages, and the names of any doctors or hospitals you want to keep. With that information, a broker can quickly narrow plan options that fit your needs.",
  }
,
  {
    question: "When is the best time to enroll in a Medigap plan in New Jersey?",
    answer:
      "The best time is during your 6-month Medigap Open Enrollment Period, which begins the month you're 65 or older and enrolled in Part B. During this window, you have guaranteed issue rights and cannot be denied coverage or charged more due to health conditions. A broker can help you compare carriers before this window closes.",
  },
  {
    question: "Does a New Jersey Medicare broker also help with Part D drug plans?",
    answer:
      "Yes. A licensed independent broker can run your prescription list against every Part D plan available in your New Jersey county to find the lowest total annual cost. This includes standalone Part D plans for those keeping Original Medicare plus Medigap, as well as Medicare Advantage plans that include drug coverage.",
  },
  {
    question: "How do I get started with a free Medicare consultation?",
    answer:
      "Call 855-559-1700 to speak directly with Anthony Orner. There's no cost, no pressure, and no obligation to enroll. You'll get a clear side-by-side comparison of the Medicare options available in your New Jersey ZIP code.",
  }
];

export default function FreeMedicareBrokerNewJersey() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
        <Link href="/">Home</Link> &gt;{" "}
        <Link href="/services">Medicare Guides</Link> &gt;{" "}
        <span>Free Medicare Broker New Jersey</span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Free Medicare Broker in New Jersey: Licensed Help That Never Costs You
          a Dime
        </h1>

        <Image
          src="/images/free-medicare-broker-new-jersey.webp"
          alt="free medicare broker new jersey"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Free Medicare broker help in New Jersey exists because carriers pay the broker directly. You pay exactly $0 for my time, my advice, and every plan comparison I run. I'm Anthony Orner, an independent broker licensed across NJ, and I work for you, not one insurance company.
        </p>
        <p className="text-lg mb-6">
          If you're skeptical, good. Let me explain how this actually works.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How brokers get paid by carriers instead of by you
          </h2>
          <p className="mb-2">
            Every Medicare plan carrier builds a commission into the plan's cost. That commission is the same whether you enroll through a broker, on the phone with the carrier, or on their website. The price you pay doesn't change.
          </p>
          <p>
            The carrier pays me after you enroll. You never see a bill, a service fee, or a "consulting charge." If you don't enroll, I don't get paid, and that's fine. No strings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What an independent broker does that a captive agent cannot
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              A captive agent sells plans from one company. If that company's plan doesn't fit your doctors or drugs, tough luck.
            </li>
            <li>
              An independent broker is licensed with multiple carriers and shows you options side by side, including plans the captive agent can't mention.
            </li>
            <li>
              Only an agent or broker can make specific plan recommendations. Certified assisters and navigators can explain your options but can't tell you which plan to pick.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Carriers I quote across NJ
          </h2>
          <p className="mb-2">
            I hold active licenses with major Medicare carriers operating in New Jersey, including those offering Medicare Advantage, Medigap, and Part D plans. That means I can compare premiums, networks, drug formularies, and copay structures for you in one conversation.
          </p>
          <p>
            Rates vary by carrier, your zip code, age, and tobacco status. I'll show you exact numbers for your situation, not estimates.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What a plan comparison actually looks like
          </h2>
          <p className="mb-2">
            I pull your doctors, pharmacies, and current medications into a quoting tool. Then I run every available plan and rank them by total estimated annual cost, not just the monthly premium.
          </p>
          <p>
            You get a clear picture: what you'd pay each month, what you'd pay at the doctor, and what your worst-case out-of-pocket looks like. No surprises in January.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Key enrollment windows to know in 2026
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Medicare Advantage & Part D Open Enrollment:</strong> October 15 through December 7.
            </li>
            <li>
              <strong>Medigap Open Enrollment:</strong> 6 months starting the month you turn 65 and are enrolled in Part B. This is when carriers must accept you regardless of health history.
            </li>
            <li>
              <strong>Turning 65?</strong> Apply for Medigap up to 6 months before your Part B start date to lock in your rate.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Schedule a no-cost plan comparison in under 5 minutes
          </h2>
          <p className="mb-2">
            Call me or fill out the form below. I'll ask a few quick questions about your coverage, your doctors, and your prescriptions. Within minutes, you'll have a clear comparison you can trust.
          </p>
          <p>
            No pressure. No obligation. Just honest answers from a licensed broker who lives and works in New Jersey.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center my-10">
          <p className="text-xl font-semibold mb-2">
            Ready for your free plan comparison?
          </p>
          <p className="text-3xl font-bold mb-4">
            <a href="tel:8555591700" className="underline">
              855-559-1700
            </a>
          </p>
          <Link
            href="/contact"
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
                href="/medicare-advantage/new-jersey"
                className="text-blue-600 hover:underline"
              >
                Medicare Advantage Plans in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-supplement/new-jersey"
                className="text-blue-600 hover:underline"
              >
                Medigap Plans in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/learn/medicare-parts-explained"
                className="text-blue-600 hover:underline"
              >
                Part D Prescription Drug Plans in NJ
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-blue-600 hover:underline"
              >
                About Anthony Orner
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
                href="/services/best-medicare-broker-no-cost-to-you"
                className="text-blue-600 hover:underline"
              >
                Best Medicare Broker No Cost To You
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
                href="/services/irvington-nj-medicare-insurance-agents"
                className="text-blue-600 hover:underline"
              >
                Irvington NJ Medicare Insurance Agents
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-specialists-in-cranford-nj-office"
                className="text-blue-600 hover:underline"
              >
                Medicare Specialists In Cranford NJ Office
              </Link>
            </li>
</ul>
              <div className="text-sm text-gray-600 mt-4"><p>Official Medicare resources: <a href="https://www.medicare.gov/basics/get-started-with-medicare" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Get Started with Medicare (medicare.gov)</a> and <a href="https://www.medicare.gov/plan-compare/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Compare Plans on Medicare.gov</a>.</p></div>
            <div className="text-sm text-gray-600 mt-4"><p>New Jersey residents can also get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a> through the NJ Department of Human Services.</p></div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/dobi/division_insurance/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey help: <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a></div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free local help through <a href="https://www.nj.gov/getcoverednj/help/local/" rel="noopener noreferrer" target="_blank" className="underline">GetCoveredNJ Local Assistance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For free, unbiased Medicare counseling in New Jersey, visit the <a href="https://www.nj.gov/humanservices/doas/services/q-z/ship/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased Medicare counseling through <a href="https://www.nj.gov/humanservices/doas/services/q-z/ship/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey SHIP (State Health Insurance Assistance Program)</a>, operated by the NJ Division of Aging Services.</div>
            <div className="text-sm text-gray-600 mt-4">Free unbiased counseling for New Jersey beneficiaries: <a href="https://www.nj.gov/humanservices/doas/services/q-z/ship/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey help: <a href="https://www.nj.gov/humanservices/doas/services/q-z/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> offers free, unbiased Medicare counseling for New Jersey residents.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey resources: <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> &middot; <a href="https://www.nj.gov/getcoverednj/help/local/" rel="noopener noreferrer" target="_blank" className="underline">GetCoveredNJ Local Assistance</a></div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free local Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Free unbiased counseling for New Jersey beneficiaries is available through <a href="https://www.nj.gov/humanservices/doas/services/q-z/ship/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling from <a href="https://www.nj.gov/humanservices/doas/services/q-z/ship/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey SHIP (State Health Insurance Assistance Program)</a> through the Division of Aging Services.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased Medicare counseling from <a href="https://www.nj.gov/humanservices/doas/services/q-z/ship/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.nj.gov/humanservices/doas/services/q-z/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For free, unbiased counseling, contact the <a href="https://www.nj.gov/humanservices/doas/services/q-z/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">New Jersey State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased Medicare counseling through the <a href="https://www.nj.gov/humanservices/doas/services/q-z/ship/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For free, unbiased Medicare counseling from the state of New Jersey, visit the <a href="https://www.nj.gov/humanservices/doas/services/q-z/ship/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling from <a href="https://www.nj.gov/humanservices/doas/services/q-z/ship/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
      </article>
    </>
  );
}