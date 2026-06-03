import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare insurance agents in burlington new jersey | Free Local Help | MedicareYourself",
  description:
    "Licensed Medicare broker serving Burlington, NJ. Compare Medigap, Advantage & Part D side-by-side at no cost. Call 855-559-1700 for free local guidance.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-insurance-agents-in-burlington-new-jersey" },
  openGraph: {
    title:
      "medicare insurance agents in burlington new jersey | Free Local Help | MedicareYourself",
    description:
      "Medicare insurance agents in Burlington, New Jersey — Anthony Orner is a licensed independent broker comparing plans across carriers. Free consultation, no obligation.",
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
      name: "Medicare Insurance Agents in Burlington, New Jersey",
      item: "https://medicareyourself.com/services/medicare-insurance-agents-in-burlington-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Insurance Agents in Burlington, New Jersey: Licensed Broker Serving Burlington County",
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
    question: "Should I use an insurance agent for Medicare?",
    answer:
      "Yes. A licensed independent broker compares plans from multiple carriers at no cost to you. Brokers are paid by the insurance companies, so there's no fee for their help. You get objective guidance instead of being steered toward a single company's products.",
  },
  {
    question: "What is the best Medicare plan in New Jersey?",
    answer:
      "There's no single best plan for everyone. The right choice depends on your doctors, prescriptions, budget, and how often you travel. An independent broker can run a side-by-side comparison of Medigap and Medicare Advantage options available in Burlington County to find what fits your situation.",
  },
  {
    question: "How do I pick a Medicare agent?",
    answer:
      "Look for an agent who is independently licensed (not captive to one carrier), willing to explain tradeoffs honestly, and available year-round for questions. Ask if they'll help you review your plan annually during Open Enrollment.",
  },
  {
    question: "How much does it cost to work with a Medicare broker?",
    answer:
      "Nothing. Independent Medicare brokers are compensated by insurance carriers. You pay the same premium whether you enroll directly or through a broker, but you get personalized guidance at no extra charge.",
  },
,
  {
    question: "Does a Medicare broker in Burlington, NJ help after I enroll?",
    answer:
      "Yes. A good independent broker stays available year-round for billing questions, ID card issues, and provider network changes. They also review your plan each fall during the Annual Enrollment Period to make sure your prescriptions and doctors are still covered for the coming year.",
  },
  {
    question: "When can I enroll in a Medigap plan in New Jersey?",
    answer:
      "Your best window is the 6-month Medigap Open Enrollment Period that starts the month you're 65 or older and enrolled in Part B. During this window, carriers cannot deny you coverage or charge more based on health. New Jersey uses community rating, so Medigap premiums are not based on your individual age.",
  },
  {
    question: "Can I switch from Medicare Advantage to Medigap later?",
    answer:
      "You can apply, but outside of your initial Medigap Open Enrollment Period or a specific guaranteed-issue situation, insurers in New Jersey can use medical underwriting and may decline coverage. It's important to understand these rules before choosing your first plan, which is where a licensed broker can help.",
  }
,
  {
    question: "When can I enroll in a Medigap plan in New Jersey?",
    answer:
      "Your best window is the 6-month Medigap Open Enrollment Period that begins the month you're 65 or older and enrolled in Part B. During this period, you have guaranteed issue rights and can't be turned down or charged more for health reasons. New Jersey uses community rating, meaning Medigap premiums are the same regardless of age within a given plan and carrier.",
  }
,
  {
    question: "Does Medicare cover services at Virtua Willingboro or other Burlington County hospitals?",
    answer:
      "Original Medicare is accepted at hospitals across Burlington County that participate in Medicare, including most major facilities. With a Medicare Advantage plan, coverage depends on whether the hospital is in your plan's network, so it's important to verify network status before enrolling. A licensed broker can check provider networks for the specific plans available in your ZIP code.",
  },
  {
    question: "Can a Burlington, NJ Medicare broker help me compare Medigap and Medicare Advantage?",
    answer:
      "Yes. An independent broker can walk you through the tradeoffs between Medigap (which pairs with Original Medicare and a standalone Part D plan) and Medicare Advantage (which bundles hospital, medical, and usually drug coverage). New Jersey uses community rating for Medigap, meaning premiums are not based on your individual age. The right fit depends on your doctors, prescriptions, and travel habits.",
  }
,
  {
    question: "Does an independent Medicare broker in Burlington work with multiple carriers?",
    answer:
      "Yes. An independent broker is appointed with several insurance companies rather than being captive to one. That means they can compare Medigap, Medicare Advantage, and Part D options side by side and recommend what fits your doctors, prescriptions, and budget.",
  },
  {
    question: "When is the Medigap Open Enrollment Period in New Jersey?",
    answer:
      "Your six-month Medigap Open Enrollment Period begins the month you are 65 or older and enrolled in Medicare Part B. During this window, you have guaranteed issue rights and cannot be denied a Medigap policy or charged more due to health conditions. New Jersey uses community rating, so premiums are not based on your individual age.",
  },
  {
    question: "Can a Burlington Medicare agent help me switch plans during AEP?",
    answer:
      "Yes. The Medicare Annual Enrollment Period runs October 15 through December 7 each year. A licensed broker can review your current coverage, check that your prescriptions and providers are still in-network, and help you switch Medicare Advantage or Part D plans for the following year.",
  }
,
  {
    question: "Does Anthony Orner serve all of Burlington County, NJ?",
    answer:
      "Yes. Anthony Orner is a licensed independent Medicare broker (NPI 1902584006) serving Burlington Township, Mount Laurel, Willingboro, Moorestown, Marlton, Medford, and surrounding Burlington County communities. Consultations are available by phone, video, or in person depending on your preference. Call 855-559-1700 to schedule a free review.",
  },
  {
    question: "How does New Jersey Medigap pricing work?",
    answer:
      "New Jersey uses community rating for Medigap policies, which means insurers charge the same premium to everyone with a given plan regardless of age. Your best opportunity to enroll without medical underwriting is during your 6-month Medigap Open Enrollment Period, which begins when you're 65 or older and enrolled in Part B. Outside that window, carriers in NJ may require health underwriting.",
  },
  {
    question: "What's the difference between Medigap and Medicare Advantage in Burlington?",
    answer:
      "Medigap (Medicare Supplement) works alongside Original Medicare and lets you see any provider nationwide that accepts Medicare, with predictable out-of-pocket costs. Medicare Advantage replaces Original Medicare with a private plan that typically uses local networks and may include extras like dental or vision. A broker can compare both options side-by-side based on your doctors and prescriptions.",
  }
,
  {
    question: "When can I enroll in a Medigap plan in New Jersey?",
    answer:
      "Your best window is the 6-month Medigap Open Enrollment Period that begins the month you're 65 or older and enrolled in Part B. During this window, insurers in New Jersey must sell you any Medigap plan they offer without medical underwriting. New Jersey also uses community rating, meaning premiums aren't based on your individual age.",
  }
,
  {
    question: "Does Burlington County, NJ have local Medicare help besides brokers?",
    answer:
      "Yes. New Jersey's State Health Insurance Assistance Program (SHIP) offers free, unbiased Medicare counseling to residents of Burlington County. SHIP counselors can answer questions about eligibility, enrollment periods, and coverage options. Many beneficiaries use SHIP alongside an independent broker for a second opinion.",
  },
  {
    question: "Are Medigap premiums the same for everyone in New Jersey?",
    answer:
      "New Jersey uses community rating for Medigap, meaning carriers cannot charge you more based on your age. Premiums still vary by carrier and plan letter, so comparing quotes across companies is important. An independent broker can show you side-by-side pricing for the same plan letter from different insurers.",
  }
,
  {
    question: "What is the Medigap Open Enrollment Period in New Jersey?",
    answer:
      "Your Medigap Open Enrollment Period is a one-time, six-month window that begins the month you're 65 or older and enrolled in Medicare Part B. During this window you have a guaranteed issue right to buy any Medigap policy sold in New Jersey, regardless of your health. New Jersey also uses community rating, meaning carriers cannot charge you more based on age.",
  },
  {
    question: "Do Burlington, NJ Medicare brokers charge a fee?",
    answer:
      "No. Licensed independent Medicare brokers serving Burlington County are paid by the insurance carriers, not by you. Your premium is the same whether you enroll directly with a carrier or through a broker like Anthony Orner.",
  },
  {
    question: "Can a broker help me compare Medicare Advantage plans in Burlington County?",
    answer:
      "Yes. An independent broker can review the Medicare Advantage plans available in your Burlington County ZIP code and compare provider networks, drug formularies, and out-of-pocket maximums. They can also compare those options against Original Medicare with a Medigap policy so you can weigh the tradeoffs.",
  }
,
  {
    question: "How does Medigap pricing work in New Jersey?",
    answer:
      "New Jersey uses community rating for Medigap policies, which means insurers charge the same premium for a given plan regardless of the applicant's age. Premiums can still vary between carriers and may change over time, so it's worth comparing identical plan letters across multiple companies.",
  },
  {
    question: "When is the Medigap Open Enrollment Period in New Jersey?",
    answer:
      "Your Medigap Open Enrollment Period is a one-time 6-month window that begins the month you're 65 or older and enrolled in Medicare Part B. During this window you have guaranteed issue rights and cannot be denied coverage or charged more for pre-existing conditions. Outside of this window, acceptance is not guaranteed in most situations.",
  },
  {
    question: "Do you serve all of Burlington County, NJ?",
    answer:
      "Yes. Anthony Orner is a licensed independent Medicare broker serving Burlington and surrounding Burlington County communities including Mount Laurel, Willingboro, Moorestown, Evesham, Bordentown, and Pemberton. Consultations are available by phone at 855-559-1700 at no cost to you.",
  }
,
  {
    question: "Does Burlington County have a SHIP counselor for Medicare questions?",
    answer:
      "Yes. New Jersey's State Health Insurance Assistance Program (SHIP) offers free, unbiased Medicare counseling to residents in every county, including Burlington. SHIP counselors can answer questions about enrollment, appeals, and low-income assistance programs. You can use SHIP alongside working with an independent broker.",
  }
,
  {
    question: "Does Medicare cover prescription drugs in Burlington, NJ?",
    answer:
      "Original Medicare (Parts A and B) does not include routine prescription drug coverage. To get drug coverage, you can either enroll in a standalone Part D plan alongside Original Medicare and a Medigap policy, or choose a Medicare Advantage plan that includes drug coverage. A broker can compare the available Part D formularies against your current prescription list.",
  },
  {
    question: "Can I switch from Medicare Advantage to Medigap later in New Jersey?",
    answer:
      "You can apply, but outside of your initial 6-month Medigap Open Enrollment Period or a qualifying guaranteed-issue situation, carriers in New Jersey may medical-underwrite your application. That means approval and pricing can depend on your health history. It's worth reviewing your options with a licensed broker before making the switch.",
  },
  {
    question: "What's the difference between Medigap and Medicare Advantage?",
    answer:
      "Medigap (Medicare Supplement) works alongside Original Medicare to help cover out-of-pocket costs like coinsurance and deductibles, and lets you see any provider that accepts Medicare. Medicare Advantage replaces Original Medicare with a private plan that typically uses a provider network and often bundles in drug and extra benefits. The right fit depends on your doctors, travel habits, and budget.",
  }
,
  {
    question: "When can I enroll in a Medigap plan in New Jersey?",
    answer:
      "Your best window is the 6-month Medigap Open Enrollment Period, which starts the month you're 65 or older and enrolled in Part B. During this window, insurers in New Jersey must sell you any Medigap plan they offer without medical underwriting. New Jersey also uses community rating, meaning premiums aren't based on your individual age.",
  },
  {
    question: "Can a Burlington Medicare broker help with both Medigap and Medicare Advantage?",
    answer:
      "Yes. An independent broker licensed in New Jersey can compare Medigap supplement plans, Medicare Advantage (Part C), and standalone Part D drug plans side by side. This lets you weigh tradeoffs like provider networks, prescription coverage, and out-of-pocket costs before deciding which path fits your needs in Burlington County.",
  },
  {
    question: "Do I have to live in Burlington to work with a New Jersey Medicare broker?",
    answer:
      "No. Anthony Orner is licensed in New Jersey and 34 other states, so he can help residents across Burlington County and beyond. Meetings can be done by phone, video, or in person, depending on what works best for you.",
  }
,
  {
    question: "Does Medicare cover services from doctors and hospitals in Burlington County?",
    answer:
      "Original Medicare is accepted by most hospitals and physicians across Burlington County and throughout New Jersey. With a Medigap plan, you can typically see any provider nationwide who accepts Medicare. Medicare Advantage plans use provider networks, so it's important to confirm your doctors are in-network before enrolling.",
  },
  {
    question: "When can I enroll in a Medigap plan in New Jersey?",
    answer:
      "Your strongest enrollment window is the 6-month Medigap Open Enrollment Period that begins the month your Part B becomes effective and you're 65 or older. During this window, carriers cannot deny you coverage or charge more based on health. New Jersey uses community rating, so Medigap premiums are not based on your individual age.",
  },
  {
    question: "What's the difference between Medigap and Medicare Advantage in Burlington, NJ?",
    answer:
      "Medigap supplements Original Medicare by helping pay deductibles and coinsurance, and it lets you use any Medicare-accepting provider. Medicare Advantage replaces Original Medicare with a private plan that often bundles drug coverage and extras but uses a network. A broker can compare both side by side based on your doctors and prescriptions.",
  }
,
  {
    question: "When can I enroll in a Medigap plan in New Jersey?",
    answer:
      "Your best window is the 6-month Medigap Open Enrollment Period that begins the month you're 65 or older and enrolled in Part B. During this period you have guaranteed issue rights, meaning carriers can't deny coverage or charge more based on health. Outside this window, medical underwriting may apply in New Jersey.",
  },
  {
    question: "How are Medigap premiums priced in New Jersey?",
    answer:
      "New Jersey uses community rating for Medigap policies, meaning everyone with the same plan from the same carrier pays the same base premium regardless of age. Premiums can still vary between carriers, so comparing quotes through an independent broker is the best way to find competitive pricing in Burlington County.",
  },
  {
    question: "Can a Burlington NJ broker help with both Medigap and Medicare Advantage?",
    answer:
      "Yes. A licensed independent broker can quote and enroll you in Medigap, Medicare Advantage, and Part D prescription drug plans. This lets you weigh the tradeoffs between the two main coverage paths side-by-side rather than only seeing options from a single carrier.",
  }
,
  {
    question: "When can I enroll in a Medigap plan in New Jersey?",
    answer:
      "Your best window is the 6-month Medigap Open Enrollment Period that begins when you're 65 or older and enrolled in Part B. During this window, you have guaranteed issue rights and can't be denied coverage or charged more due to health history. New Jersey uses community rating for Medigap, meaning premiums are not based on individual age.",
  }
,
  {
    question: "When can I enroll in a Medigap plan in New Jersey?",
    answer:
      "Your best window is the 6-month Medigap Open Enrollment Period that begins the month you turn 65 and are enrolled in Part B. During this window, carriers cannot deny you coverage or charge more based on health. New Jersey uses community rating, which means Medigap premiums are not based on your individual age. After this window closes, acceptance is no longer guaranteed in most situations.",
  }
,
  {
    question: "When can I enroll in a Medigap plan in New Jersey?",
    answer:
      "Your best window is the 6-month Medigap Open Enrollment Period that begins the month you're both 65 or older and enrolled in Part B. During this window, insurance companies cannot deny you coverage or charge more based on health history. New Jersey uses community rating, meaning premiums are not based on your age. Outside this window, you may be subject to medical underwriting.",
  },
  {
    question: "Do I need a local agent in Burlington County, or can I work with someone remote?",
    answer:
      "You can do either. A licensed broker can help by phone, video, or in person, and Anthony Orner is licensed in New Jersey and 34 other states. What matters most is that the agent understands the carriers available in Burlington County and the local provider networks for hospitals like Virtua Willingboro and area primary care groups.",
  },
  {
    question: "What's the difference between Medigap and Medicare Advantage in Burlington, NJ?",
    answer:
      "Medigap (Medicare Supplement) works alongside Original Medicare and helps pay your share of costs like the Part A deductible and coinsurance, with broad access to any provider that accepts Medicare. Medicare Advantage replaces Original Medicare with a private plan that often bundles drug coverage and extras but uses a network of doctors and hospitals. The right choice depends on your providers, travel habits, and how you prefer to handle out-of-pocket costs.",
  }
];

export default function MedicareInsuranceAgentsBurlingtonNJ() {
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
        <span>Medicare Insurance Agents in Burlington, New Jersey</span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Medicare Insurance Agents in Burlington, New Jersey: Licensed Broker
        Serving Burlington County
      </h1>

      <Image
        src="/images/medicare-insurance-agents-in-burlington-new-jersey.webp"
        alt="Medicare insurance agents in Burlington New Jersey"
        width={800}
        height={400}
        className="w-full h-auto rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        Medicare insurance agents in Burlington, New Jersey can make the
        difference between a plan that works and one that leaves you scrambling
        when a provider drops your network. I'm Anthony Orner, a licensed
        independent broker serving Burlington County and the surrounding area.
      </p>
      <p className="mb-6">
        I compare plans from multiple carriers so you don't have to call each
        one yourself. No cost, no obligation.
      </p>

      <PhoneCTA />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why Burlington County residents work with an independent broker
        </h2>
        <p className="mb-2">
          A captive agent sells one company's plans. I'm independent, which
          means I can pull quotes from every major carrier writing policies in
          Burlington County.
        </p>
        <p>
          That matters because network changes happen. When a major insurer
          stops contracting with local providers, you need someone who can move
          you to a plan that keeps your doctors. I stay on top of carrier
          changes at Virtua, Deborah Heart and Lung Center, and other South
          Jersey systems so you don't get caught off guard.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare Supplement and Advantage plans available in Burlington
        </h2>
        <p className="mb-3">
          Burlington County residents typically choose between two paths:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-3">
          <li>
            <strong>Medicare Supplement (Medigap):</strong> Pairs with Original
            Medicare. You pick any doctor who accepts Medicare. Plan G and Plan
            N are the most popular standardized options. Rates vary by carrier
            and age.
          </li>
          <li>
            <strong>Medicare Advantage (Part C):</strong> Replaces Original
            Medicare with a private plan. Often includes drug coverage, dental,
            and vision. Network restrictions apply.
          </li>
        </ul>
        <p>
          The 2026 Part B premium is $202.90/month, and the Part A deductible is
          $1,676 per benefit period. These costs factor into which plan type
          saves you the most.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Enrollment windows you need to know
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Medigap Open Enrollment:</strong> 6 months starting the
            month you turn 65 and are enrolled in Part B. This is your best
            window for guaranteed issue with no health questions.
          </li>
          <li>
            <strong>Medicare Advantage / Part D Open Enrollment:</strong>{" "}
            October 15 through December 7 each year.
          </li>
          <li>
            <strong>Part B late enrollment penalty:</strong> 10% added to your
            premium for every 12-month period you delayed. Don't let this sneak
            up on you.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What to expect during a free Medicare consultation
        </h2>
        <p className="mb-2">
          Bring your Medicare card, a list of current prescriptions, and the
          names of doctors you want to keep. That's it.
        </p>
        <p className="mb-2">
          I'll run a plan comparison showing your estimated out-of-pocket costs
          across carriers. We'll talk through tradeoffs honestly. If a plan
          doesn't fit, I'll tell you.
        </p>
        <p>
          Most calls take 20 to 30 minutes. No pressure, no sales pitch.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          I work with you after enrollment too
        </h2>
        <p className="mb-2">
          Signing up is just the start. Every fall during Open Enrollment, I
          review your plan to make sure it still fits your prescriptions,
          doctors, and budget.
        </p>
        <p>
          If a carrier raises rates or a network changes mid-year, you'll hear
          from me before you hear from them.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How to schedule a call or meeting from Burlington, NJ
        </h2>
        <p className="mb-2">
          Phone, video, or in-person at a time that works for you. I serve all
          of Burlington County, including Mount Laurel, Moorestown, Bordentown,
          Medford, and Pemberton.
        </p>
        <p>
          Call <strong>855-559-1700</strong> or use the link below to get
          started.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center mb-8">
        <p className="text-xl font-semibold mb-2">
          Ready to compare Medicare plans in Burlington County?
        </p>
        <p className="mb-4">
          Call <strong>855-559-1700</strong> or request your free quote online.
        </p>
        <Link
          href="/quote"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
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
              href="/medicare-supplement/new-jersey"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plans in New Jersey
            </Link>
          </li>
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
              href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
              className="text-blue-600 hover:underline"
            >
              Plan G vs. Plan N: Which Medigap Plan Is Right for You?
            </Link>
          </li>
          <li>
            <Link
              href="/learn/how-to-sign-up-for-medicare"
              className="text-blue-600 hover:underline"
            >
              When to Enroll in Medicare: Key Dates and Deadlines
            </Link>
          </li>
                    <li>
              <Link
                href="/services/find-an-nj-medicare-broker-near-you"
                className="text-blue-600 hover:underline"
              >
                Find An NJ Medicare Broker Near You
              </Link>
            </li>
            <li>
              <Link
                href="/services/free-medicare-broker-new-jersey"
                className="text-blue-600 hover:underline"
              >
                Free Medicare Broker New Jersey
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
                href="/services/how-to-enroll-in-medicare-in-new-jersey"
                className="text-blue-600 hover:underline"
              >
                How To Enroll In Medicare In New Jersey
              </Link>
            </li>
</ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/plan-compare" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov Plan Finder</a> and <a href="https://www.cms.gov/medicare/enrollment-renewal/health-plans" rel="noopener noreferrer" target="_blank" className="underline">CMS Medicare Enrollment</a>.</div>
            <div className="text-sm text-gray-600 mt-2">New Jersey residents can also get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> or the <a href="https://www.nj.gov/dobi/" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-2">New Jersey residents can also get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-2">New Jersey residents can also get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey help: <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a></div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey help: <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a></div>
            <div className="text-sm text-gray-600 mt-4">New Jersey help: <a href="https://www.state.nj.us/dobi/division_insurance/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a></div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
    </>
  );
}