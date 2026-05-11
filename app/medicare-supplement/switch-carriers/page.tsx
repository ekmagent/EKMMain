import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Switch Medigap Carriers, Same Plan G (2026)",
  description:
    "Switch Medigap Plan G carriers and keep identical federally standardized benefits at a lower rate. Free carrier comparison — call 855-559-1700 today.",
  alternates: { canonical: `${SITE_URL}/medicare-supplement/switch-carriers` },
  openGraph: {
    title: "Switch Medigap Carriers, Same Plan G (2026)",
    description:
      "Got a Plan G rate increase? Switch to a cheaper carrier with identical coverage. Free help comparing carriers in NJ and PA.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://medicareyourself.com" },
    { "@type": "ListItem", position: 2, name: "Medicare Supplement", item: "https://medicareyourself.com/medicare-supplement" },
    { "@type": "ListItem", position: 3, name: "Switch Carriers", item: "https://medicareyourself.com/medicare-supplement/switch-carriers" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Switch Medicare Supplement Carriers – Same Plan G, Lower Rate",
  description: "How to switch from one Medicare Supplement Plan G carrier to a cheaper one without changing your benefits.",
  datePublished: "2026-01-01",
  dateModified: "2026-03-13",
  author: {
    "@type": "Person",
    name: "Anthony Orner",
    url: "https://medicareyourself.com/about",
  },
  publisher: {
    "@type": "Organization",
    name: "MedicareYourself / EasyKind Medicare",
    url: "https://medicareyourself.com",
  },
};

const faqs = [
  {
    question: "Can I switch Medicare Supplement carriers without losing coverage?",
    answer:
      "Yes — if you are switching between the same plan letter (for example, Plan G to Plan G), your benefits do not change at all. Plan letters are federally standardized. You give up nothing except the higher premium. The main risk is that switching after your Medigap Open Enrollment Period may require medical underwriting, meaning a carrier can decline you based on health. A licensed broker can check which carriers in your state currently accept switchers and whether you qualify.",
  },
  {
    question: "When can I switch my Medicare Supplement plan?",
    answer:
      "You can apply to switch at any time, but outside of your initial 6-month Open Enrollment Period most states allow carriers to ask health questions and deny coverage. There are specific Guaranteed Issue rights (job loss, plan leaving the market, moving out of service area) that let you switch without underwriting. If you are in good health, switching is usually straightforward — you apply with the new carrier, get approved, then cancel the old plan once the new one starts.",
  },
  {
    question: "Is Plan G the same at every insurance company?",
    answer:
      "Yes. Medicare Supplement plan letters are standardized by federal law. Plan G from Aetna covers exactly the same benefits as Plan G from Mutual of Omaha, United American, Cigna, or any other carrier. The only differences are the monthly premium and how aggressively the carrier raises rates over time. Switching carriers to get a lower rate does not reduce your coverage in any way.",
  },
  {
    question: "How much can I save by switching Medicare Supplement carriers?",
    answer:
      "Savings vary by age, zip code, and how long you have been with your current carrier. Rate increases compound over time, so someone who has had Plan G for 5 or more years may be paying $50–$100 per month more than a new enrollee at a different carrier for identical coverage. A broker can pull current rates from all carriers in your area and calculate your exact potential savings.",
  },
  {
    question: "What happens to my coverage when I switch Medicare Supplement plans?",
    answer:
      "Once your new plan is approved and active, you cancel your old plan — often with a 30-day notice. There should be no gap in coverage if you time it correctly. Your Medicare benefits (Original Medicare Parts A and B) stay exactly the same throughout the switch. The Medigap plan just wraps around them. Most people experience zero disruption to their doctor relationships or claims processing.",
  },
  {
    question: "Can I switch from Medicare Advantage back to a Medicare Supplement plan?",
    answer:
      "Yes, but it requires careful timing. If you have been on Medicare Advantage for less than 12 months and had a Medigap plan before enrolling, you may have a trial right to return to your old Medigap plan. Outside that window, you can apply for Medigap during Medicare Advantage Open Enrollment (January 1 – March 31) or during your Special Enrollment Period, but most states allow carriers to use medical underwriting. Talk to a broker before making this switch.",
  },

  {
    question: "Will I have to answer health questions to switch carriers?",
    answer:
      "In most states, yes — once your 6-month Medigap Open Enrollment Period ends, carriers can use medical underwriting to approve or decline your application. Certain guaranteed issue situations (like your plan leaving the market or moving out of the service area) let you switch without health questions. A few states, such as New York and Connecticut, allow year-round switching without underwriting. Your broker can confirm the rules that apply in your state.",
  },
  {
    question: "Should I cancel my old Medigap plan before the new one starts?",
    answer:
      "No — never cancel your existing policy until the new carrier has approved your application and confirmed an effective date. Medicare allows a 30-day free look period where you can try the new plan while keeping the old one, then cancel the old policy once you are satisfied. This protects you from any gap in coverage if something unexpected happens during the switch.",
  },
  {
    question: "Will I have to answer health questions to switch Medigap carriers?",
    answer:
      "In most states, yes — outside of your 6-month Medigap Open Enrollment Period or a Guaranteed Issue situation, carriers can use medical underwriting and deny coverage based on health. Some states (like New York and Connecticut) have year-round guaranteed issue rules, and others have birthday or anniversary rules that allow switching without underwriting. Check with your state insurance department or ask a licensed broker to confirm what applies in your state.",
  },
  {
    question: "Will I have to answer health questions when switching Medigap carriers?",
    answer:
      "In most states, yes — if you apply outside your 6-month Medigap Open Enrollment Period or a Guaranteed Issue situation, the new carrier can use medical underwriting. That means they can ask health questions and decline your application based on your answers. Some states (like New York and Connecticut) have year-round guaranteed issue rules, and a few others have limited 'birthday rule' or anniversary windows. A licensed broker can tell you which rules apply in your state before you apply.",
  },
  {
    question: "Should I cancel my old Medigap policy before the new one is approved?",
    answer:
      "No. Always wait until your new Medicare Supplement policy is approved and has an active start date before cancelling the old one. This prevents any gap in coverage if the new carrier declines your application due to underwriting. Once the new plan is in force, contact your old carrier in writing to cancel and request a refund of any unused premium.",
  }
,
  {
    question: "Will I have to answer health questions to switch Medigap carriers?",
    answer:
      "In most states, yes. Outside of your 6-month Medigap Open Enrollment Period or a Guaranteed Issue situation, carriers can use medical underwriting and deny your application based on health. Some states have additional protections that let you switch more freely, so it's worth checking your state's rules. A licensed broker can pre-screen your health questions to tell you which carriers are likely to approve you before you apply.",
  },
  {
    question: "What happens to my old Medigap policy when I switch?",
    answer:
      "You keep your current policy active until the new carrier approves you and sets a start date. Once the new plan is effective, you contact the old carrier to cancel. Most new Medigap policies also include a 30-day free look period, during which you can cancel the new plan and keep the old one if you change your mind.",
  },
  {
    question: "Does switching Medigap carriers restart a deductible or waiting period?",
    answer:
      "Plan G has no annual deductible to restart, so there is no coverage gap when you switch. If you've had creditable coverage continuously, the new carrier generally cannot impose a pre-existing condition waiting period. Your Medicare Part A and Part B benefits are unaffected by the Medigap change.",
  }
,
  {
    question: "What is a Medigap guaranteed issue right when switching carriers?",
    answer:
      "Guaranteed issue rights are specific situations where a Medigap carrier must sell you a policy, cover all pre-existing conditions, and cannot charge more due to health. Common triggers include losing employer coverage, your current plan leaving the market, or moving outside your plan's service area. Outside of these situations and your initial 6-month Open Enrollment Period, federal law generally does not require carriers to accept you, though some states offer broader switching rights.",
  },
  {
    question: "Will I have a waiting period for pre-existing conditions if I switch Medigap plans?",
    answer:
      "If you have had your current Medigap policy for at least six months, the new carrier generally cannot impose a new pre-existing condition waiting period when you switch to the same or lesser benefits. If you are switching during a guaranteed issue right, the waiting period also cannot be applied. A broker can confirm how this works with the specific carrier you are considering.",
  },
  {
    question: "Should I cancel my old Medigap policy before the new one starts?",
    answer:
      "No. Medicare allows a 30-day free-look period when you start a new Medigap policy, so you should keep the old policy active until the new one is approved and in force. Once you confirm the new plan has started, contact the prior carrier in writing to cancel. This prevents any gap in supplemental coverage.",
  }
,
  {
    question: "Will I have to answer health questions when I switch Medigap carriers?",
    answer:
      "In most states, yes — outside your 6-month Medigap Open Enrollment Period, carriers can use medical underwriting and ask about your health history. There are exceptions called Guaranteed Issue rights (such as your plan leaving the market or losing employer coverage) where carriers must accept you. Some states also offer broader switching rights, so it's worth checking with your State Insurance Department or a licensed broker.",
  }
,
  {
    question: "Will I have to answer health questions to switch Plan G carriers?",
    answer:
      "In most states, yes — outside your 6-month Medigap Open Enrollment Period, carriers can use medical underwriting and may decline your application based on health. Some states have additional rules that allow easier switching, and federal Guaranteed Issue rights apply in specific situations like losing other coverage. Contact your State Insurance Department or a licensed broker to confirm what applies in your state.",
  },
  {
    question: "Should I cancel my old Medigap policy before applying for a new one?",
    answer:
      "No. Always wait until the new Medigap policy is approved and active before canceling the old one. Medicare allows a 30-day free-look period to review the new policy, and you should keep your existing coverage in place until you are certain the new plan has started. Canceling early could leave you with a gap in supplemental coverage.",
  }
,
  {
    question: "Do I have a federal right to switch Medigap policies anytime?",
    answer:
      "In most cases, no. Under federal law you generally only have the right to switch Medigap policies during your 6-month Medigap Open Enrollment Period or when you qualify for a guaranteed issue right. Some states offer broader switching rights, so it is worth checking with your State Insurance Department or a licensed broker before assuming you cannot change carriers.",
  }
,
  {
    question: "Do I have to medically qualify to switch Medigap carriers?",
    answer:
      "In most states, yes — outside of your 6-month Medigap Open Enrollment Period, federal law does not give you the right to switch Medigap policies unless you qualify for a guaranteed issue situation. Carriers can ask health questions and decline coverage based on your answers. Some states offer additional protections beyond federal rules, so it's worth checking with your State Insurance Department or a licensed broker before applying.",
  },
  {
    question: "What happens to my old Medigap policy when I switch?",
    answer:
      "You should not cancel your existing Medigap policy until the new one is approved and active. Once your new plan's start date is confirmed, you contact the old carrier to cancel. New policies typically include a 30-day free look period, during which you can review the new plan and return to the old one if needed, though you'll pay both premiums for that month.",
  },
  {
    question: "Will switching carriers reset any waiting periods?",
    answer:
      "If you've had your current Medigap policy for at least 6 months, a new carrier generally cannot impose a new pre-existing condition waiting period when you switch to the same or lesser benefits. This continuous coverage protection helps people move between carriers without losing access to care for known conditions. Confirm the rules in your state before applying.",
  }
,
  {
    question: "Do I have a federal right to switch Medigap policies anytime?",
    answer:
      "In most cases, no. Under federal law, you generally only have a right to switch Medigap policies during your 6-month Medigap Open Enrollment Period or if you qualify for a guaranteed issue right. Outside those windows, carriers in most states can require medical underwriting. Some states offer additional switching rights beyond federal protections, so it's worth checking with your State Insurance Department.",
  }
,
  {
    question: "Will I have to answer health questions to switch Medigap carriers?",
    answer:
      "In most states, yes. Outside your 6-month Medigap Open Enrollment Period or a guaranteed issue situation, carriers can use medical underwriting and may decline your application based on health. Some states offer additional protections, so it's worth checking with your State Insurance Department or a licensed broker before applying.",
  },
  {
    question: "Should I cancel my old Medigap policy before the new one starts?",
    answer:
      "No. Always wait until your new Medigap policy is approved and active before cancelling the old one. Most carriers also give you a 30-day free look period to review the new plan, so you can change your mind and keep your original coverage if needed. Your broker can coordinate the effective dates so you are never without protection.",
  }
,
  {
    question: "Will I have to answer health questions when I switch Medigap carriers?",
    answer:
      "In most cases, yes. Outside of your 6-month Medigap Open Enrollment Period or a Guaranteed Issue situation, federal law does not give you the right to switch Medigap policies, so carriers can use medical underwriting and ask about your health history. If you qualify for a Guaranteed Issue right — such as your plan leaving the market or losing employer coverage — the new carrier must accept you without health questions. Call 855-559-1700 and we'll review which path applies to you.",
  }
,
  {
    question: "Will I have to answer health questions to switch Medigap carriers?",
    answer:
      "In most states, yes. Outside your 6-month Medigap Open Enrollment Period or a guaranteed issue situation, federal law does not require carriers to accept you, so they can use medical underwriting and decline applicants based on health history. Some states have additional rules that give residents more opportunities to switch — your State Insurance Department or a licensed broker can confirm what applies in your area.",
  }
,
  {
    question: "Will I have to answer health questions when I switch Medigap carriers?",
    answer:
      "In most states, yes — outside of your 6-month Medigap Open Enrollment Period or a guaranteed issue situation, federal law does not require carriers to accept you. Insurers can use medical underwriting to review your health history and either approve, decline, or rate you. Some states have additional rules that give you more freedom to switch, so it is worth checking with your State Insurance Department or a licensed broker before you apply.",
  }
,
  {
    question: "Do I need to answer health questions to switch Medigap carriers?",
    answer:
      "Outside of your 6-month Medigap Open Enrollment Period, most states allow carriers to use medical underwriting when you apply to switch. That means the new carrier can ask health questions and decline you based on your conditions. Exceptions include federal guaranteed issue rights and any extra switching protections your state may offer.",
  },
  {
    question: "Should I cancel my old Medigap plan before the new one is approved?",
    answer:
      "No. Never cancel your existing Medigap policy until the new carrier has officially approved your application and given you a confirmed start date. Once the new plan is in force, you can cancel the old one and align the termination date so you avoid a gap or overlap in coverage.",
  },
  {
    question: "Will I have to start a new waiting period for pre-existing conditions?",
    answer:
      "If you have had continuous creditable coverage for at least 6 months, a new Medigap carrier generally cannot impose a new pre-existing condition waiting period. If your prior coverage was shorter, the new carrier may apply a waiting period of up to 6 months for conditions treated or diagnosed before the policy started.",
  }
];

export default function SwitchCarriersPage() {
  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />

      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-4 pt-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/medicare-supplement/new-jersey" className="hover:text-blue-600">Medicare Supplement</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-900 font-medium">Switch Carriers</span>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Switch Medicare Supplement Carriers — Same Plan G, Lower Monthly Rate
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              <strong>Got a rate increase letter?</strong> You may be able to switch to a different carrier with the exact same Plan G coverage for $30–$100 less per month. Plan letters are federally standardized — switching carriers changes your bill, not your benefits.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Anthony Orner, licensed independent Medicare broker, can compare every carrier in your zip code in minutes. The service is free — brokers are paid by carriers, not by you.
            </p>
            <p className="text-xs text-gray-400 mb-6">
              By Anthony Orner, Licensed Medicare Broker · Last reviewed: March 2026
            </p>
            <PhoneCTA label="Check If You Can Switch — Free" />
          </div>

          {/* Sidebar CTA */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 h-fit">
            <h2 className="text-lg font-bold text-gray-900 mb-2">Ready to Switch?</h2>
            <p className="text-sm text-gray-600 mb-4">
              Use our online carrier comparison tool or call to speak with Anthony directly.
            </p>
            <Link
              href="/quote"
              className="block w-full text-center bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition-colors mb-3"
            >
              Compare Carriers Online
            </Link>
            <a
              href="tel:8555591700"
              className="block w-full text-center border border-blue-700 text-blue-700 hover:bg-blue-50 font-semibold py-3 rounded-lg transition-colors text-sm mb-3"
            >
              Call 855-559-1700
            </a>
            <p className="text-xs text-gray-400 mt-1 text-center">Free · No pressure · Licensed in NJ &amp; 34 states</p>
          </div>
        </div>
      </section>

      {/* The Diet Coke Concept */}
      <section className="bg-amber-50 border-y border-amber-100 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Why Switching Carriers Does Not Change Your Coverage
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="bg-white rounded-lg p-4 border border-amber-100">
              <h3 className="font-semibold text-gray-900 mb-2">Plan Letters Are Federally Standardized</h3>
              <p className="text-gray-600">
                Congress and <a href="https://www.medicare.gov/health-drug-plans/medigap" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">CMS</a> define exactly what each Medigap plan letter covers. A Plan G from
                any carrier pays the same bills in the same situations. Think of it like a can of
                Coke — same product at every store, different price tag.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-amber-100">
              <h3 className="font-semibold text-gray-900 mb-2">Your Doctors Stay the Same</h3>
              <p className="text-gray-600">
                Medigap plans have no networks. You can see any doctor in the country who accepts
                Original Medicare, regardless of which carrier you use. Switching from Carrier A to
                Carrier B does not affect a single one of your doctor relationships.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-amber-100">
              <h3 className="font-semibold text-gray-900 mb-2">Rate History Matters</h3>
              <p className="text-gray-600">
                Carriers differ in how aggressively they raise premiums each year. A carrier that
                came in cheapest 5 years ago may now be the most expensive. Comparing current rates
                and historical increases helps you find a carrier likely to stay affordable long-term.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How switching works */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Switch Medicare Supplement Carriers</h2>
        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
            <div>
              <h3 className="font-semibold text-gray-900">Compare carriers in your zip code</h3>
              <p className="text-gray-600 text-sm mt-1">
                An independent broker pulls rates from all carriers available to you — not just one company.
                You can do this online at{" "}
                <Link href="/quote" className="text-blue-600 hover:underline">
                  our online comparison tool
                </Link>{" "}
                or by calling 855-559-1700.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
            <div>
              <h3 className="font-semibold text-gray-900">Apply with the new carrier</h3>
              <p className="text-gray-600 text-sm mt-1">
                Outside your initial Open Enrollment Period, most states allow health questions. If you are
                in good health, approval is typically fast — often same-day. Your broker walks you through
                the application at no cost.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
            <div>
              <h3 className="font-semibold text-gray-900">Set your new plan's start date</h3>
              <p className="text-gray-600 text-sm mt-1">
                Coordinate the new plan's effective date so there is no gap between the old plan ending
                and the new one beginning. A brief overlap (one day) is fine and avoids any risk of a gap.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
            <div>
              <h3 className="font-semibold text-gray-900">Cancel your old plan</h3>
              <p className="text-gray-600 text-sm mt-1">
                Once approved and your new plan is active, send written notice to your old carrier.
                Most require 30 days' notice. You are done — same coverage, lower bill.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-blue-700 text-white py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">See If You Can Save on Your Plan G Today</h2>
          <p className="text-blue-100 mb-6 text-lg">
            Free, no-obligation comparison from every carrier in your zip code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Compare Carriers Online
            </Link>
            <a
              href="tel:8555591700"
              className="border-2 border-white text-white hover:bg-blue-600 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Call 855-559-1700
            </a>
          </div>
          <p className="text-blue-200 text-sm mt-4">Free · Independent · Licensed in NJ and 34 states</p>
        </div>
      </section>

      {/* What you need to switch */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What You Need to Switch Carriers</h2>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Information to have ready:</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> Your Medicare number (red, white, and blue card)</li>
              <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> Your Medicare Part B effective date</li>
              <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> Current plan letter and carrier name</li>
              <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> Current monthly premium</li>
              <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> Basic health history (if outside Open Enrollment)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Common reasons people switch:</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex gap-2"><span className="text-blue-600 font-bold">→</span> Annual rate increase letter arrived</li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold">→</span> Premium has grown $50+ since original enrollment</li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold">→</span> Friend or family member mentioned a lower rate</li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold">→</span> Just curious if a better rate exists</li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold">→</span> Broker hasn't reviewed coverage in 2+ years</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <FAQSection faqs={faqs} />
      </section>

      {/* Internal links */}
      <section className="bg-gray-50 border-t py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Related Resources</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <Link href="/medicare-supplement/new-jersey" className="text-blue-600 hover:underline">Medicare Supplement Plans NJ</Link>
            <Link href="/medicare-supplement/new-jersey/plan-g-vs-plan-n" className="text-blue-600 hover:underline">Plan G vs Plan N</Link>
            <Link href="/medicare-supplement/new-jersey/cost" className="text-blue-600 hover:underline">Medigap Costs in NJ</Link>
            <Link href="/medicare-supplement/new-jersey/vs-medicare-advantage" className="text-blue-600 hover:underline">Supplement vs Advantage</Link>
            <Link href="/services/what-time-of-year-can-you-switch-medicare-supplement-plans" className="text-blue-600 hover:underline">When Can You Switch Supplement Plans?</Link>
            <Link href="/services/when-can-i-change-my-medicare-supplement-plan-for-2026" className="text-blue-600 hover:underline">Change Your Supplement Plan for 2026</Link>
            <Link href="/services/why-did-my-medicare-supplement-rate-change" className="text-blue-600 hover:underline">Why Did My Rate Change?</Link>
            <Link href="/services/how-can-i-save-money-on-my-medicare-supplement" className="text-blue-600 hover:underline">How to Save Money on Your Supplement</Link>
          </div>
        </div>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/health-drug-plans/medigap/ready-to-buy/change-policies/switch-drop" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">Medicare.gov – Switching or Dropping a Medigap Policy</a> · <a href="https://www.medicare.gov/health-drug-plans/medigap/basics/when-to-get" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">Medigap Open Enrollment Period</a></div>
            <div className="text-sm text-gray-600 mt-4">State help: <a href="https://www.nj.gov/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance</a> — confirms carrier rates and any state-specific Medigap switching rules.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: contact <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or the free <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP program</a> for unbiased counseling on switching Medigap carriers.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can verify carrier rates and complaint history with the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or the free <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP program</a> for unbiased Medigap guidance.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or the free <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP program</a> for unbiased Medigap switching guidance.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can confirm state-specific switching rules with the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or free SHIP counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific Medigap switching rights, contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">New Jersey Department of Banking and Insurance</a> or your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">SHIP counselor</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or the free <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP program</a> for unbiased Medigap switching guidance.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance</a> or the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP program</a> for free Medigap counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can verify carrier rates and consumer rights with the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or free SHIP counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can verify carrier rates and rights through the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">New Jersey Department of Banking and Insurance</a> or the free <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP counseling program</a>.</div>
            <div className="text-sm text-gray-600 mt-2">For state-specific switching rights, contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">New Jersey Department of Banking and Insurance</a> or your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">SHIP counselor</a>.</div>
      </section>
    </>
  );
}
