import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "switch medigap plans | Compare Carriers & Switch Online | MedicareYourself",
  description:
    "Switch Medigap plans any month to lower your premium while keeping identical Plan G or N benefits. Free licensed broker help — call 855-559-1700 today.",
  alternates: {
    canonical: `${SITE_URL}/services/switch-medigap-plans`,
  },
  openGraph: {
    title: "Switch Medigap Plans | Compare Carriers & Switch Online",
    description:
      "Switch Medigap plans online or with free help from a licensed broker. Compare carriers, check your eligibility, and start saving in minutes.",
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
      name: "Switch Medigap Plans",
      item: "https://medicareyourself.com/services/switch-medigap-plans",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Switch Medigap Plans: Compare Carriers and Switch Online",
  description:
    "How to switch Medigap plans — compare carriers side by side, check eligibility, and complete your switch online or with free broker help.",
  datePublished: "2026-03-23",
  dateModified: "2026-03-23",
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
    question: "Can I switch Medigap plans at any time of year?",
    answer:
      "Yes. Unlike Medicare Advantage, there is no annual enrollment window for Medigap. You can apply to switch any month. During your initial 6-month Medigap Open Enrollment Period or a guaranteed issue event, no carrier can deny you or charge more for health conditions. Outside those windows, most states allow carriers to ask health questions, but if you are in good health the switch is usually straightforward.",
  },
  {
    question: "Will I lose coverage if I switch Medigap plans?",
    answer:
      "Not if you do it correctly. Keep your current plan active until your new plan is approved and in force. Most new plans come with a 30-day free look period. Once you confirm the new plan is active, send written notice to cancel the old one. A brief one-day overlap is normal and protects you from any gap.",
  },
  {
    question:
      "Does switching Medigap carriers change my benefits?",
    answer:
      "No. Medigap plan letters are federally standardized. Plan G from one carrier covers exactly the same benefits as Plan G from any other carrier. Switching carriers changes your premium, not your coverage. Your doctors stay the same because Medigap has no provider networks — any doctor who accepts Original Medicare accepts your plan.",
  },
  {
    question:
      "How much can I save by switching Medigap plans?",
    answer:
      "Savings depend on your age, zip code, current carrier, and how long you have had your plan. People who have been on the same Plan G for 5 or more years often find rates $30 to $100 per month lower at a different carrier for identical coverage. That is $360 to $1,200 per year in savings with no change to your benefits or doctors.",
  },
  {
    question:
      "Can I switch from Medicare Advantage back to a Medigap plan?",
    answer:
      "Yes, but timing matters. If you have been on Medicare Advantage for less than 12 months and had a Medigap plan before, you may have a trial right to return to your old plan without health questions. Outside that window, you can apply during Medicare Advantage Open Enrollment (January 1 through March 31), but most states allow medical underwriting. Talk to a broker before making this switch — the rules are specific to your situation.",
  },
  {
    question: "Is there a fee to use a broker to switch Medigap plans?",
    answer:
      "No. Independent Medicare brokers are paid by the insurance carriers, not by you. The commission is the same regardless of which carrier you choose, so there is no incentive to push one company over another. Using a broker costs you nothing and saves you the work of calling each carrier individually.",
  },

  {
    question: "Do I have a federal right to switch Medigap policies after my Open Enrollment Period ends?",
    answer:
      "In most cases, no. Under federal law, you generally can only switch Medigap policies during your 6-month Medigap Open Enrollment Period or when you qualify for a guaranteed issue right. Outside those windows, carriers can use medical underwriting. However, some states offer additional opportunities to change policies, so it is worth checking with your State Insurance Department.",
  },
  {
    question: "What happens during the 30-day free look period?",
    answer:
      "When you buy a new Medigap policy, you have 30 days to decide if you want to keep it. You should keep your old Medigap policy active during this time and pay both premiums for one month. If you are satisfied with the new policy, cancel the old one; if not, you can return the new plan during the free look window.",
  }
,
  {
    question: "Do I have a federal right to switch Medigap policies whenever I want?",
    answer:
      "In most cases, no. Federal law only guarantees the right to switch during your 6-month Medigap Open Enrollment Period or when you qualify for a guaranteed issue right. Outside those windows, carriers in most states can use medical underwriting. Some states offer additional rights, so it is worth checking with your state insurance department or a licensed broker.",
  },
  {
    question: "What is the 30-day free look period when switching Medigap plans?",
    answer:
      "When you buy a new Medigap policy, you have 30 days to decide if you want to keep it. During this free look period, you should keep your old policy active and pay both premiums. If you decide to keep the new plan, you then cancel the old one. This protects you from being left without coverage if the new plan is not what you expected.",
  },
  {
    question: "Will I have to answer health questions to switch Medigap plans?",
    answer:
      "Usually yes, unless you are in your Medigap Open Enrollment Period or qualify for a guaranteed issue right. Outside those protected windows, most states allow carriers to use medical underwriting and review your health history before approving the switch. A licensed broker can pre-screen carriers to find the ones most likely to approve you based on your conditions.",
  }
,
  {
    question: "Do I have a federal right to switch Medigap policies whenever I want?",
    answer:
      "In most cases, no. Under federal law, you generally only have a right to switch Medigap policies during your 6-month Medigap Open Enrollment Period or when you qualify for a guaranteed issue right. Outside those windows, switching is still possible in most states, but a carrier may use medical underwriting to decide whether to accept your application.",
  },
  {
    question: "Does my state offer extra rights to switch Medigap plans?",
    answer:
      "Some states provide broader rights than federal law — for example, annual switching windows, birthday rules, or anniversary rules that let you change carriers without underwriting. Medicare.gov recommends contacting your State Insurance Department to confirm what protections apply where you live. A licensed broker can also walk you through your state's specific rules before you apply.",
  },
  {
    question: "What happens during the 30-day free look period after I switch?",
    answer:
      "When you buy a new Medigap policy, you have a 30-day free look period to decide if you want to keep it. Medicare recommends keeping your old policy active during those 30 days so you are not left without coverage. You'll pay both premiums for that month, but once you're satisfied with the new plan, you can cancel the old one in writing.",
  }
,
  {
    question: "Do I have a federal right to switch Medigap policies outside open enrollment?",
    answer:
      "In most cases, federal law does not guarantee the right to switch Medigap policies unless you are within your 6-month Medigap Open Enrollment Period or qualify for a guaranteed issue right. Outside those windows, carriers in most states can use medical underwriting to decide whether to approve your application. Some states offer broader rights to change Medigap plans, so it is worth checking with your state insurance department before applying.",
  },
  {
    question: "What happens during the 30-day free look period when I switch Medigap plans?",
    answer:
      "Medicare gives you a 30-day free look period when you buy a new Medigap policy. During this window you can try the new plan while keeping your old one active, which means you pay both premiums for one month. If you decide to keep the new plan, you then cancel the old one in writing — this protects you from any gap in coverage.",
  },
  {
    question: "Do I need to answer health questions to switch Medigap carriers?",
    answer:
      "In most states, yes — if you are outside your Medigap Open Enrollment Period or a guaranteed issue situation, the new carrier can ask health questions and review your medical history before approving your application. If you are in reasonably good health, approval is usually straightforward. A licensed broker can pre-screen carriers so you only apply where you are likely to be accepted.",
  }
,
  {
    question: "Do I have a federal right to switch Medigap policies outside open enrollment?",
    answer:
      "In most cases, federal law does not give you the right to switch Medigap policies outside your 6-month Medigap Open Enrollment Period or a guaranteed issue situation. However, many carriers will still accept your application subject to medical underwriting if you are in reasonable health. Some states also offer broader switching rights than federal law, so it is worth checking with your State Insurance Department.",
  },
  {
    question: "Is there a free look period when I switch Medigap plans?",
    answer:
      "Yes. When you buy a new Medigap policy, you generally get a 30-day free look period to decide if you want to keep it. During this window you should keep your old policy active and pay both premiums. If you decide to keep the new plan, cancel the old one in writing once you are sure the new coverage is in force.",
  },
  {
    question: "Will I have to answer health questions when I switch?",
    answer:
      "If you are outside your Medigap Open Enrollment Period and do not qualify for a guaranteed issue right, most carriers will use medical underwriting and ask health questions. Approval and pricing can depend on your answers. A licensed broker can pre-screen carriers to identify the ones most likely to approve you before you submit a full application.",
  }
,
  {
    question: "Do I have a federal right to switch Medigap policies outside Open Enrollment?",
    answer:
      "In most cases, federal law does not guarantee the right to switch Medigap policies outside your 6-month Medigap Open Enrollment Period unless you qualify for a guaranteed issue right. Some states offer broader switching rights than federal law requires. Contact your State Insurance Department or call 855-559-1700 to confirm what protections apply where you live.",
  },
  {
    question: "Is there a free look period when I switch Medigap policies?",
    answer:
      "Yes. When you buy a new Medigap policy, you generally have a 30-day free look period to decide if you want to keep it. You must keep your old policy active during those 30 days and pay both premiums for that month. After you confirm the new policy works for you, you can cancel the old one in writing.",
  },
  {
    question: "Will I have to answer health questions when I switch?",
    answer:
      "Outside of your Medigap Open Enrollment Period or a guaranteed issue situation, most states allow carriers to use medical underwriting, which means health questions and possible denial. If you are reasonably healthy, underwriting is often manageable. A licensed broker can pre-screen carriers so you only apply where you are likely to be approved.",
  }
,
  {
    question: "Do I need to answer health questions to switch Medigap plans?",
    answer:
      "In most states, yes — once you are outside your 6-month Medigap Open Enrollment Period or a guaranteed issue situation, carriers can use medical underwriting. That means they may ask health questions and review prescriptions before approving your application. Some states have additional rules that make switching easier, so it is worth checking your state insurance department or calling 855-559-1700 to review your options.",
  },
  {
    question: "What is the 30-day free look period when switching Medigap plans?",
    answer:
      "When you buy a new Medigap policy, you have 30 days to decide if you want to keep it, and you can hold both policies during that window. You will pay both premiums for one month, but it guarantees you do not lose coverage if the new plan is not the right fit. After you confirm the new plan works, you cancel the old one in writing.",
  },
  {
    question: "Should I work with a broker to switch Medigap plans?",
    answer:
      "A licensed independent broker can compare multiple carriers at once and check whether you qualify for a lower premium on the same plan letter. There is no cost to you because brokers are paid by the insurance company you choose. To compare your options with no obligation, call Anthony Orner at 855-559-1700.",
  }
,
  {
    question: "Do I need to answer health questions to switch Medigap plans?",
    answer:
      "It depends on when you apply. Inside your 6-month Medigap Open Enrollment Period or when you have a guaranteed issue right, carriers cannot deny you or use medical underwriting. Outside those windows, federal law allows carriers to ask health questions and decide whether to approve your application, though some states offer additional protections.",
  },
  {
    question: "Will I have to repeat the Part B deductible if I switch mid-year?",
    answer:
      "No. The Part B deductible is tied to Original Medicare, not to your Medigap policy. If you have already met it for the year, switching Medigap carriers does not reset it. Your new Medigap plan simply picks up where the old one left off in covering the gaps after Medicare pays.",
  }
,
  {
    question: "Do I have a federal right to switch Medigap policies outside open enrollment?",
    answer:
      "In most cases, federal law does not guarantee the right to switch Medigap policies outside your 6-month Medigap Open Enrollment Period unless you qualify for a guaranteed issue right. Some states offer additional opportunities to switch, so it is worth checking your state's rules. A licensed broker can review whether you qualify for a guaranteed issue situation or can pass underwriting in your state.",
  }
,
  {
    question: "Do I have a federal right to switch Medigap policies after my open enrollment period?",
    answer:
      "In most cases, federal law does not give you the right to switch Medigap policies outside your 6-month Medigap Open Enrollment Period unless you qualify for a guaranteed issue right. Some states offer broader rights to switch — for example, on a birthday, anniversary, or year-round under certain rules. Contact your State Insurance Department or call 855-559-1700 to confirm what applies in your state.",
  },
  {
    question: "What is the 30-day free look period when switching Medigap plans?",
    answer:
      "When you buy a new Medigap policy, you have 30 days to decide if you want to keep it. During this free look period, you should keep your old policy active and pay both premiums for the month. If you decide the new plan is not right for you, you can cancel it and stay on the original policy without a coverage gap.",
  },
  {
    question: "Can I be denied a new Medigap policy because of my health?",
    answer:
      "Outside your Medigap Open Enrollment Period or a guaranteed issue situation, carriers in most states can use medical underwriting and may deny coverage or charge more based on your health. If you are in good health, approval is usually straightforward. A licensed broker can pre-screen carriers for you before you submit an application — call 855-559-1700 for a free review.",
  }
,
  {
    question: "Do I need to answer health questions when I switch Medigap plans?",
    answer:
      "It depends on when you switch. During your 6-month Medigap Open Enrollment Period or when you have a guaranteed issue right, carriers cannot use medical underwriting. Outside those windows, most states allow carriers to ask health questions and decide whether to approve your application. Some states, however, offer additional protections that let you switch more freely — your licensed broker can confirm the rules where you live.",
  },
  {
    question: "What is the Medigap 30-day free look period?",
    answer:
      "When you buy a new Medigap policy, federal rules give you 30 days to decide if you want to keep it. You must pay both premiums for one month — your old plan and the new one — but if you cancel within those 30 days, you can return to your prior coverage situation without penalty. This protection is why we recommend keeping your current plan active until the new one is fully in force.",
  },
  {
    question: "Should I work with a broker or switch Medigap plans on my own?",
    answer:
      "You can apply directly with any carrier, but a licensed independent broker compares multiple carriers at once and checks each one's underwriting rules before you apply. That helps avoid declines and makes sure you keep identical Plan G or Plan N benefits at the lowest available premium. Broker help is free — carriers pay the same commission whether you apply alone or with guidance. Call 855-559-1700 to review your options.",
  }
];

export default function SwitchMedigapPlansPage() {
  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-6xl mx-auto px-4 pt-4 text-sm text-gray-500"
      >
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <span className="mx-2">&gt;</span>
        <Link href="/services" className="hover:text-blue-600">
          Medicare Guides
        </Link>
        <span className="mx-2">&gt;</span>
        <span className="text-gray-900 font-medium">Switch Medigap Plans</span>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Switch Medigap Plans — See If You Could Save in 2 Minutes
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Keep what you like. See what could cost less. No phone number or
              email required to see your possible savings.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Under 2 minutes. No commitment. See your number — then decide.
            </p>
            <Link
              href="/quote"
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold text-lg py-4 px-8 rounded-lg transition-colors shadow-lg"
            >
              CHECK MY SAVINGS
            </Link>
            <p className="text-xs text-gray-400 mt-3">
              By Anthony Orner, Licensed Medicare Broker · Updated March 2026
            </p>
          </div>

          {/* Hero image — right side */}
          <div className="flex justify-center">
            <Image
              src="/images/switch-medigap-plans.webp"
              alt="Switch medigap plans — compare carriers and save"
              width={400}
              height={300}
              className="rounded-xl"
              priority
            />
          </div>
        </div>

        {/* Comparison chart — below hero, full width */}
        <div className="mt-10 max-w-xl mx-auto">

          {/* Comparison chart */}
          <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-3 text-center">
              <div className="p-3 bg-gray-50 border-b border-r border-gray-200" />
              <div className="p-3 bg-gray-50 border-b border-r border-gray-200">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Current Plan</p>
              </div>
              <div className="p-3 bg-blue-50 border-b border-gray-200">
                <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide">New Plan</p>
              </div>
            </div>
            {/* Monthly Premium row */}
            <div className="grid grid-cols-3 text-center border-b border-gray-100">
              <div className="p-3 text-sm text-gray-600 text-left pl-4 font-medium border-r border-gray-100">Monthly Premium</div>
              <div className="p-3 border-r border-gray-100">
                <p className="text-2xl font-bold text-red-600">$198<span className="text-sm font-normal text-gray-500">/mo</span></p>
              </div>
              <div className="p-3 bg-blue-50/50">
                <p className="text-2xl font-bold text-green-600">$112<span className="text-sm font-normal text-gray-500">/mo</span></p>
              </div>
            </div>
            {[
              ["Costs Less Every Month", "—", true],
              ["Keep My Doctors", true, true],
              ["Same Plan Letter (G, N, or F)", true, true],
              ["Keep Same Coverage", true, true],
              ["No Change to Drug Plan", true, true],
            ].map(([label, current, newPlan], i) => (
              <div key={i} className={`grid grid-cols-3 text-center ${i < 4 ? "border-b border-gray-100" : ""}`}>
                <div className="p-3 text-sm text-gray-600 text-left pl-4 border-r border-gray-100">{label as string}</div>
                <div className="p-3 border-r border-gray-100">
                  {current === true ? (
                    <span className="text-green-600 font-bold text-lg">✓</span>
                  ) : (
                    <span className="text-gray-300">—</span>
                  )}
                </div>
                <div className="p-3 bg-blue-50/50">
                  {newPlan === true ? (
                    <span className="text-green-600 font-bold text-lg">✓</span>
                  ) : (
                    <span className="text-gray-300">—</span>
                  )}
                </div>
              </div>
            ))}
            {/* Savings row */}
            <div className="bg-green-50 p-4 text-center">
              <p className="text-sm text-gray-600">Potential Annual Savings</p>
              <p className="text-3xl font-bold text-green-700">$1,032<span className="text-base font-normal text-green-600"> / year</span></p>
            </div>
            <div className="p-3 text-center">
              <Link
                href="/quote"
                className="inline-block w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 rounded-lg transition-colors"
              >
                See My Savings Now
              </Link>
              <p className="text-xs text-gray-400 mt-2">
                Rates shown are illustrative. Your savings depend on age, zip code, and carrier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Carrier logos */}
      <section className="border-y border-gray-200 py-6 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs text-gray-400 uppercase tracking-wide mb-3">We compare 30+ carriers including</p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-sm font-medium text-gray-500">
            <span>Aetna</span>
            <span>AARP/UHC</span>
            <span>Mutual of Omaha</span>
            <span>Cigna</span>
            <span>Humana</span>
            <span>Bankers Fidelity</span>
          </div>
        </div>
      </section>

      {/* Why switching works — the Diet Coke explanation */}
      <section className="bg-amber-50 border-b border-amber-100 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why You Can Switch Medigap Plans Without Losing Anything
          </h2>
          <p className="text-gray-700 mb-6">
            Medigap plan letters are federally standardized. Plan G is Plan G,
            no matter which insurance company sells it. Switching carriers
            changes your bill, not your benefits. Not your doctors. Not your
            coverage. Just the price.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="bg-white rounded-lg p-5 border border-amber-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Same Coverage, Different Price
              </h3>
              <p className="text-gray-600">
                Plan G from Aetna covers the exact same things as Plan G from
                Mutual of Omaha, Cigna, or any other carrier. Congress sets the
                benefits. The only difference between carriers is the monthly
                premium and how fast they raise it.
              </p>
            </div>
            <div className="bg-white rounded-lg p-5 border border-amber-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Your Doctors Do Not Change
              </h3>
              <p className="text-gray-600">
                Medigap plans have no networks. Any doctor in the country who
                accepts Original Medicare accepts your Medigap plan — regardless
                of which carrier issued it. Switching carriers does not affect a
                single doctor relationship.
              </p>
            </div>
            <div className="bg-white rounded-lg p-5 border border-amber-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Rate Increases Compound
              </h3>
              <p className="text-gray-600">
                Carriers raise rates every year. After 5 years on the same plan,
                you might be paying $50 to $100 per month more than a new
                enrollee at a different carrier for identical coverage. That is
                $600 to $1,200 a year you do not need to spend.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 3 types of Medigap switches */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Two Ways to Switch Medigap Plans
        </h2>
        <p className="text-gray-700 mb-6">
          When people say they want to switch Medigap plans, they usually mean
          one of two things. Each one works differently.
        </p>

        <div className="space-y-8">
          {/* Type 1 */}
          <div className="border rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Switch Carriers — Same Plan Letter, Lower Rate
                </h3>
                <p className="text-gray-700 mb-3">
                  This is the most common switch. You keep the same plan letter
                  (usually Plan G or Plan N) but move to a carrier with a lower
                  premium. Your benefits stay identical. This is what the online
                  comparison tool is built for.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-sm">
                  <p className="text-green-800">
                    <strong>Typical savings:</strong> $30 to $100 per month ($360
                    to $1,200 per year) depending on age, zip code, and how long
                    you have been with your current carrier.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Type 2 */}
          <div className="border rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Switch from Medicare Advantage Back to Medigap
                </h3>
                <p className="text-gray-700 mb-3">
                  If you tried Medicare Advantage and want to go back to
                  Original Medicare with a Medigap plan, you can — but timing
                  and health matter. If you have been on Advantage for less than
                  12 months and had Medigap before, you may have a trial right
                  to return without health questions. Outside that window, most
                  states allow medical underwriting.
                </p>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm">
                  <p className="text-yellow-800">
                    <strong>Important:</strong> Call before you make this switch.
                    The rules are specific to your state and situation. Getting
                    this wrong can mean losing access to Medigap coverage
                    permanently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to do it — step by step */}
      <section className="bg-gray-50 border-y py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            How to Switch Medigap Plans — Step by Step
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Compare carriers in your zip code
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Use the{" "}
                    <Link
                      href="/quote"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      online comparison tool
                    </Link>{" "}
                    or call 855-559-1700. An independent broker pulls rates from
                    all carriers — not just one company.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Check your eligibility
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    If you are in your Open Enrollment Period or have a
                    guaranteed issue right, no carrier can deny you. If not, your
                    health history matters. Most healthy applicants get approved
                    quickly.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Apply with the new carrier
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Your broker handles the application. Do not cancel your
                    current plan until the new one is approved and active.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Cancel your old plan
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Once approved, send written notice to your old carrier. Most
                    require 30 days. You get a 30-day free look period on the
                    new plan as a safety net.
                  </p>
                </div>
              </div>
            </div>

            {/* What you need */}
            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-semibold text-gray-900 mb-4">
                What to have ready when you call or go online:
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold flex-shrink-0">
                    ✓
                  </span>
                  Your Medicare number (red, white, and blue card)
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold flex-shrink-0">
                    ✓
                  </span>
                  Your Medicare Part B effective date
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold flex-shrink-0">
                    ✓
                  </span>
                  Current plan letter and carrier name
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold flex-shrink-0">
                    ✓
                  </span>
                  Current monthly premium amount
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold flex-shrink-0">
                    ✓
                  </span>
                  Your zip code (rates vary by area)
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold flex-shrink-0">
                    ✓
                  </span>
                  Basic health history (if outside Open Enrollment)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* When you can switch — the rules section (for topical depth) */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          When Can You Switch Medigap Plans?
        </h2>
        <p className="text-gray-700 mb-6">
          You can apply to switch any time of year. But whether a carrier can
          ask health questions depends on your situation. Here are the windows
          that matter.
        </p>

        <div className="space-y-6">
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-semibold text-gray-900">
              Your 6-month Medigap Open Enrollment Period
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              Starts the month you turn 65 and have Part B. During this window,
              every carrier must accept you regardless of health. This is your
              strongest protection. If you are still in this window and unhappy
              with your current plan, switching now is risk-free.
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-semibold text-gray-900">
              Guaranteed Issue Rights
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              Federal law gives you the right to switch without health questions
              in specific situations: your carrier goes bankrupt, your plan
              leaves your area, you lose employer coverage, or you tried
              Medicare Advantage and want to return within 12 months. These
              windows usually last 63 days from the triggering event.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold text-gray-900">
              State Birthday Rules and Annual Windows
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              Some states give you additional switching windows. California,
              Oregon, Illinois, and others have birthday rules that let you
              switch to any plan with equal or lesser benefits around your
              birthday each year without health questions. Check with a broker
              to see what your state offers.
            </p>
          </div>

          <div className="border-l-4 border-gray-300 pl-4">
            <h3 className="font-semibold text-gray-900">
              Outside Protected Windows — Medical Underwriting
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              If none of the above apply, you can still apply to switch any
              time. Most states allow carriers to ask health questions. If you
              are in good health, approval is usually fast — often the same day.
              Conditions like diabetes, COPD, or heart disease may result in a
              denial or higher premium. Always apply for the new plan before
              canceling the old one.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-blue-700 text-white py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">
            See If You Could Save on Your Medicare Supplement
          </h2>
          <p className="text-blue-100 mb-6 text-lg">
            Under 2 minutes. No commitment. See your number — then decide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-white text-blue-700 hover:bg-blue-50 font-bold text-lg px-10 py-4 rounded-lg transition-colors shadow-lg"
            >
              CHECK MY SAVINGS
            </Link>
            <a
              href="tel:8555591700"
              className="border-2 border-white text-white hover:bg-blue-600 font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Call 855-559-1700
            </a>
          </div>
          <p className="text-blue-200 text-sm mt-4">
            Online tool: FL, NJ, PA, TX, VA · All other states: call for free
            comparison
          </p>
        </div>
      </section>

      {/* Why people switch — social proof / empathy */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Why People Switch Medigap Plans
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-700 mb-4">
              Most people call me after opening a rate increase letter. It is
              the single most common reason someone switches. On attained-age
              rated plans, your rate goes up every year as you get older. On top
              of that, carriers can raise rates across the board when claims
              increase. When both hit in the same year, 10 to 18 percent jumps
              are common.
            </p>
            <p className="text-gray-700">
              Other people switch because a friend mentioned they are paying less
              for the same Plan G. That conversation usually leads to a call
              asking me to check rates. More often than not, there is a
              lower-cost carrier available.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">
              Common reasons people switch:
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">→</span>
                Annual rate increase letter arrived
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">→</span>
                Premium has grown $50 or more since enrollment
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">→</span>
                Friend or family member mentioned a lower rate
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">→</span>
                Current broker has not reviewed coverage in years
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">→</span>
                Switching from Medicare Advantage back to Medigap
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">→</span>
                Moving to a new state and need to re-evaluate carriers
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* About Anthony — trust section */}
      <section className="bg-gray-50 border-y py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            About Anthony Orner — Your Medicare Broker
          </h2>
          <p className="text-gray-700 mb-3">
            I am an independent licensed Medicare broker based in New Jersey,
            working with clients in 35 states. Independent means I am not
            employed by any single insurance company. I compare plans from every
            carrier available in your area and recommend the one that fits your
            budget and health situation.
          </p>
          <p className="text-gray-700">
            There is no cost for my help. Carriers pay brokers the same
            commission regardless of which plan you choose, so I have no
            financial reason to push one carrier over another. If switching does
            not make sense for your situation, I will tell you that. My job is
            to give you honest information and let you decide.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions About Switching Medigap Plans
        </h2>
        <FAQSection faqs={faqs} />
      </section>

      {/* Internal links */}
      <section className="bg-gray-50 border-t py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Related Resources
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <Link
              href="/medicare-supplement/switch-carriers"
              className="text-blue-600 hover:underline"
            >
              Switch Carriers — Same Plan G, Lower Rate
            </Link>
            <Link
              href="/services/what-time-of-year-can-you-switch-medicare-supplement-plans"
              className="text-blue-600 hover:underline"
            >
              When Can You Switch Supplement Plans?
            </Link>
            <Link
              href="/services/why-did-my-medicare-supplement-rate-change"
              className="text-blue-600 hover:underline"
            >
              Why Did My Rate Change?
            </Link>
            <Link
              href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
              className="text-blue-600 hover:underline"
            >
              Plan G vs Plan N — Which Saves More?
            </Link>
            <Link
              href="/medicare-supplement/new-jersey/cost"
              className="text-blue-600 hover:underline"
            >
              Medigap Costs in NJ
            </Link>
            <Link
              href="/services/how-can-i-save-money-on-my-medicare-supplement"
              className="text-blue-600 hover:underline"
            >
              How to Save Money on Your Supplement
            </Link>
            <Link
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Supplement vs Advantage
            </Link>
            <Link
              href="/services/you-get-a-medicare-supplement-plan-if-you-have-a-pre-existing-condition"
              className="text-blue-600 hover:underline"
            >
              Medigap with Pre-Existing Conditions
            </Link>
          </div>
        </div>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/health-drug-plans/medigap/ready-to-buy/change-policies" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">Medicare.gov — Can I change my Medigap policy?</a> and <a href="https://www.medicare.gov/health-drug-plans/medigap/ready-to-buy/change-policies/switch-drop" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">Medicare.gov — Switch or drop your Medigap policy</a>.</div>
            <div className="text-sm text-gray-600 mt-4">State help: <a href="https://www.nj.gov/dobi/division_insurance/ship/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey SHIP (State Health Insurance Assistance Program)</a> offers free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP program</a> for free Medigap counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP program</a> for free Medigap counseling and state-specific switching rights.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific rules on switching Medigap, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a> or your state insurance department for free, unbiased counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">New Jersey Department of Banking and Insurance</a> or the free <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP program</a> for state-specific Medigap switching rights.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">New Jersey Department of Banking and Insurance</a> or the free <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP program</a> for state-specific Medigap switching rules.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can verify state-specific Medigap rules with the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">New Jersey Department of Banking and Insurance</a> or get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">State help: <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">Find your local SHIP program</a> for free, unbiased counseling on Medigap rights and switching rules in your state.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP program</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or the free <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP counseling program</a> for state-specific Medigap switching rules.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/index.shtml" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance</a> or the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medigap counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP program</a> for free, unbiased counseling about Medigap switching rules in your state.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free counseling on state-specific Medigap switching rights.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific Medigap switching rules and rights, contact the <a href="https://www.nj.gov/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">New Jersey Department of Banking and Insurance</a> or your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medigap guidance.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-level help? Contact your <a href="https://www.shiphelp.org/about-medicare/regional-ship-location" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">local SHIP (State Health Insurance Assistance Program)</a> for free Medigap counseling in your state.</div>
            <div className="text-sm text-gray-600 mt-4">State help: <a href="https://www.nj.gov/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance</a> or contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a> for free local counseling on Medigap rights.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/index.shtml" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or the free <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP program</a> for state-specific Medigap switching rights.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can verify carrier rates and consumer rights with the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">New Jersey Department of Banking and Insurance</a> or get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medigap counseling.</div>
            <div className="text-sm text-gray-600 mt-4">State help: <a href="https://www.state.nj.us/dobi/index.shtml" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance</a> — your State Insurance Department can tell you whether your state offers additional rights to change Medigap policies beyond federal protections.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific Medigap rules and free counseling, contact the <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a> in your state.</div>
            <div className="text-sm text-gray-600 mt-4">State help: <a href="https://www.nj.gov/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free local counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can confirm state-specific Medigap switching rules with the <a href="https://www.state.nj.us/dobi/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey Department of Banking and Insurance</a> or get free counseling through <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">your local SHIP program</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance</a> or the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP program</a> for free counseling on Medigap rights.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">New Jersey Department of Banking and Insurance</a> or the free <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey SHIP program</a> for unbiased Medigap switching guidance.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/dobi/division_consumers/insurance/ship.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medigap counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/index.shtml" rel="noopener noreferrer" target="_blank" className="underline">New Jersey Department of Banking and Insurance</a> or the free <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP program</a> for state-specific Medigap switching rights.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact <a href="https://www.state.nj.us/dobi/division_insurance/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-700 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medigap counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medigap switching guidance.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can verify carrier rates and switching rules with the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">New Jersey Department of Banking and Insurance</a> or get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or the free <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP program</a> for unbiased Medigap counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">New Jersey Department of Banking and Insurance</a> or the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medigap guidance.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> or contact the <a href="https://www.state.nj.us/dobi/division_insurance/" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">New Jersey Department of Banking and Insurance</a> or the free <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP program</a> for state-specific Medigap rights.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or the free <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP counseling program</a> for guidance on Medigap switching rights in your state.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific Medigap switching rules, contact the <a href="https://www.nj.gov/dobi/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey Department of Banking and Insurance</a> or your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free, unbiased counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Some states offer broader rights to switch Medigap policies than federal law requires. Check with the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">New Jersey Department of Banking and Insurance</a> or your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for state-specific rules.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> before switching Medigap carriers.</div>
      </section>
    </>
  );
}
