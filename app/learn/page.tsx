import type { Metadata } from "next";
import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";
import PhoneCTA from "@/components/PhoneCTA";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Medicare Education Guides | MedicareYourself",
  description:
    "Free plain-English Medicare guides from a licensed broker. Learn Parts A-D, Medigap, enrollment periods, and IRMAA. Call 855-559-1700 for personal help.",
  alternates: { canonical: `${SITE_URL}/learn` },
  openGraph: {
    title: "Medicare Education Guides | MedicareYourself",
    description:
      "Free Medicare education guides: learn about Medigap, Medicare Parts A-D, enrollment steps, IRMAA surcharges, and low-income assistance.",
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
      name: "Learn",
      item: "https://medicareyourself.com/learn",
    },
  ],
};

const GUIDES = [
  {
    heading: "Understanding Medicare",
    links: [
      { href: "/learn/medicare-parts-explained", label: "Medicare Parts A, B, C, and D Explained Simply" },
      { href: "/learn/what-is-medigap", label: "What Is Medigap? Medicare Supplement Insurance Explained" },
      { href: "/learn/medicare-enrollment-periods", label: "Medicare Enrollment Periods: When You Can Sign Up or Switch" },
    ],
  },
  {
    heading: "Enrollment and sign-up",
    links: [
      { href: "/learn/how-to-sign-up-for-medicare", label: "How and When to Sign Up for Medicare (2026)" },
      { href: "/learn/ssa-online-enrollment-walkthrough", label: "SSA.gov Online Enrollment: Step-by-Step Walkthrough" },
    ],
  },
  {
    heading: "Costs and financial help",
    links: [
      { href: "/learn/irmaa-medicare-surcharge", label: "IRMAA Medicare Surcharge: What It Is and How to Avoid It" },
      { href: "/learn/medicare-help-low-income", label: "Medicare Help for People on a Fixed Income" },
    ],
  },
,
  {
    question: "Where should I start if I'm new to Medicare?",
    answer:
      "Start by learning the four parts of Medicare: Part A (hospital), Part B (medical), Part C (Medicare Advantage), and Part D (prescription drugs). Once you understand what each part covers, you can decide between Original Medicare with a Medigap policy or a Medicare Advantage plan. Our guide on Medicare Parts A-D explained is a good first read, or call 855-559-1700 to talk it through.",
  },
  {
    question: "Do I have to pay for help from a licensed Medicare broker?",
    answer:
      "No. Licensed brokers are paid by the insurance carrier when a client enrolls, so there is no extra cost to you for using one. The plan premium is the same whether you enroll directly with the carrier or through a broker. A broker can compare multiple carriers and help you avoid common enrollment mistakes.",
  },
  {
    question: "Are these Medicare education guides free to read?",
    answer:
      "Yes. Every guide on MedicareYourself is free and written in plain English by a licensed Medicare insurance broker. There is no signup or email required to read them. If you have a question a guide doesn't answer, you can call 855-559-1700 for personal help.",
  }
,
  {
    question: "What's the difference between Original Medicare and Medicare Advantage?",
    answer:
      "Original Medicare is the federal program that includes Part A (hospital) and Part B (medical), and you can add a standalone Part D drug plan and a Medigap policy. Medicare Advantage (Part C) is an all-in-one alternative offered by private insurers that bundles Part A, Part B, and usually Part D into one plan with its own network and rules. Each path has trade-offs in cost, flexibility, and provider access. Call 855-559-1700 if you'd like help comparing the two.",
  }
,
  {
    question: "When can I enroll in or change my Medicare coverage?",
    answer:
      "Most people first enroll during their Initial Enrollment Period, which is the seven-month window around their 65th birthday. After that, the Annual Enrollment Period each fall lets you change Medicare Advantage and Part D plans, and Medigap has its own one-time guaranteed-issue window. Special Enrollment Periods may also apply if you lose other coverage or move.",
  },
  {
    question: "Do these guides apply to my state?",
    answer:
      "The Medicare program is federal, so the rules in our guides apply nationwide. However, Medigap pricing, plan availability, and Medicare Advantage networks vary by state and ZIP code. Anthony Orner is licensed in New Jersey and 34 other states and can confirm what's available in your area at 855-559-1700.",
  },
  {
    question: "How do I know which guide to read first?",
    answer:
      "If you're new to Medicare, start with the Medicare Parts A-D guide, then read the enrollment periods guide so you know your timing. If you already have Medicare and are reviewing options, the Medigap and IRMAA guides are usually the most useful next reads.",
  }
,
  {
    question: "What's the difference between Original Medicare and Medicare Advantage?",
    answer:
      "Original Medicare is the federal program that includes Part A (hospital) and Part B (medical), and you can add a standalone Part D drug plan and a Medigap policy. Medicare Advantage (Part C) is an all-in-one alternative offered by private insurers that bundles Part A, Part B, and usually Part D into one plan with its own network and rules. Each path has trade-offs in cost, flexibility, and provider access. Call 855-559-1700 if you'd like help comparing the two.",
  }
,
  {
    question: "Can I switch from Medicare Advantage back to Original Medicare later?",
    answer:
      "Yes. You can switch during the Annual Enrollment Period each fall or during the Medicare Advantage Open Enrollment Period in the first months of the year. Keep in mind that if you want to add a Medigap policy after returning to Original Medicare, you may be subject to medical underwriting depending on your state and timing. Call 855-559-1700 if you want to review your options.",
  }
,
  {
    question: "How do I know if I should choose Original Medicare with Medigap or Medicare Advantage?",
    answer:
      "The right choice depends on your priorities around provider flexibility, predictable costs, and extra benefits. Original Medicare with a Medigap policy lets you see any provider that accepts Medicare nationwide and offers more predictable out-of-pocket costs, while Medicare Advantage often bundles drug coverage and extras but uses provider networks and prior authorization. Reviewing your doctors, prescriptions, and travel needs is a good starting point. Call 855-559-1700 to walk through your situation with a licensed broker.",
  }
,
  {
    question: "Can I switch from Medicare Advantage back to Original Medicare later?",
    answer:
      "Yes, but the timing matters. You can switch during the Annual Enrollment Period (October 15 to December 7) or the Medicare Advantage Open Enrollment Period (January 1 to March 31). Keep in mind that if you want to add a Medigap policy after switching back, you may have to answer health questions unless you qualify for a guaranteed issue right. Call 855-559-1700 if you'd like help reviewing your options.",
  }
,
  {
    question: "How do I know if I should choose Medigap or Medicare Advantage?",
    answer:
      "The right choice depends on your budget, preferred doctors, travel habits, and how predictable you want your costs to be. Medigap pairs with Original Medicare and offers broad provider access nationwide with more predictable out-of-pocket costs, while Medicare Advantage often has lower monthly premiums but uses networks and prior authorization. Call 855-559-1700 to compare both based on your situation.",
  }
,
  {
    question: "Can I switch from Medicare Advantage back to Original Medicare later?",
    answer:
      "Yes, you can switch during certain enrollment windows like the Annual Enrollment Period (October 15 to December 7) or the Medicare Advantage Open Enrollment Period (January 1 to March 31). However, if you want to add a Medigap policy after switching back, you may have to answer health questions unless you qualify for a guaranteed issue right. Our guide on Medicare enrollment periods explains the timing in detail, or call 855-559-1700 for help.",
  }
,
  {
    question: "Can I switch Medicare plans after I enroll?",
    answer:
      "Yes, but only during certain enrollment windows. The Annual Enrollment Period each fall lets you change Medicare Advantage and Part D plans, and there are separate windows for Medigap and special situations like moving or losing other coverage. Our guide on Medicare enrollment periods explains the timing, or call 855-559-1700 for help.",
  }
,
  {
    question: "How do I know if Medigap or Medicare Advantage is right for me?",
    answer:
      "It depends on how you value flexibility versus lower upfront premiums. Medigap paired with Original Medicare and a Part D plan lets you see any provider that accepts Medicare and tends to have predictable out-of-pocket costs, while Medicare Advantage usually has lower premiums but uses networks and prior authorization. The best fit depends on your doctors, prescriptions, travel habits, and budget. Call 855-559-1700 for a side-by-side comparison.",
  }
,
  {
    question: "How do I know if I should choose Original Medicare with Medigap or Medicare Advantage?",
    answer:
      "The right choice depends on your priorities around provider access, predictability of costs, travel needs, and prescription drug coverage. Original Medicare with a Medigap policy generally offers broader provider access and more predictable out-of-pocket costs, while Medicare Advantage often bundles extras but uses networks and prior authorization. Reading our Medigap and Parts A-D guides side by side can help, or call 855-559-1700 for a personal comparison.",
  }
,
  {
    question: "Can I switch from Medicare Advantage back to Original Medicare later?",
    answer:
      "Yes. You can switch from a Medicare Advantage plan back to Original Medicare during the Annual Enrollment Period each fall or during the Medicare Advantage Open Enrollment Period in the first quarter of the year. Keep in mind that if you want to add a Medigap policy after switching back, you may have to answer health questions unless you have a guaranteed-issue right. Call 855-559-1700 to review your options before making a change.",
  }
,
  {
    question: "When can I switch Medicare plans if I'm unhappy with my current coverage?",
    answer:
      "Medicare has set enrollment windows for changes. The Annual Enrollment Period runs each fall and lets you switch Medicare Advantage or Part D plans. There is also a Medicare Advantage Open Enrollment Period early in the year, plus Special Enrollment Periods for qualifying life events like moving or losing other coverage. Call 855-559-1700 to confirm which window applies to your situation.",
  }
,
  {
    question: "Can I switch from Medicare Advantage back to Original Medicare later?",
    answer:
      "Yes, you can switch during the Annual Enrollment Period (October 15 to December 7) or the Medicare Advantage Open Enrollment Period (January 1 to March 31). Keep in mind that if you want to add a Medigap policy after switching back, you may have to answer health questions unless you qualify for a guaranteed issue right. Call 855-559-1700 if you'd like help reviewing your timing and options.",
  }
,
  {
    question: "What is the difference between Medicare and Medicaid?",
    answer:
      "Medicare is a federal health insurance program primarily for people age 65 and older, and for some younger people with disabilities or End-Stage Renal Disease. Medicaid is a joint federal and state program that helps with medical costs for people with limited income and resources. Some people qualify for both programs, which is called being 'dual eligible.' Call 855-559-1700 if you want help understanding which programs you may qualify for.",
  }
,
  {
    question: "How do I know if I should choose Original Medicare with Medigap or a Medicare Advantage plan?",
    answer:
      "The right choice depends on your priorities around provider access, monthly budget, prescription needs, and travel. Original Medicare paired with a Medigap policy offers nationwide provider access and predictable out-of-pocket costs, while Medicare Advantage plans typically have lower premiums but use networks and prior authorization. Reviewing your doctors, medications, and budget side by side helps clarify the trade-offs. Call 855-559-1700 for a no-cost walkthrough.",
  },
  {
    question: "When can I switch Medicare plans after I'm already enrolled?",
    answer:
      "Most people can make changes during the Annual Enrollment Period each fall or the Medicare Advantage Open Enrollment Period in the first quarter of the year. Special Enrollment Periods may also apply if you move, lose other coverage, or qualify for assistance programs. Medigap rules vary by state and may involve medical underwriting outside your initial window. Our enrollment periods guide explains the options in plain English.",
  }
,
  {
    question: "What is the difference between Medicare and Medicaid?",
    answer:
      "Medicare is a federal health insurance program based mainly on age or disability, while Medicaid is a joint federal and state program based on income and resources. Some people qualify for both and are called dual-eligible. If you are not sure which applies to you, call 855-559-1700 and we can help you sort it out.",
  }
,
  {
    question: "Can I switch from Medicare Advantage back to Original Medicare later?",
    answer:
      "Yes. You can switch during the Annual Enrollment Period each fall or during the Medicare Advantage Open Enrollment Period in the first quarter of the year. Keep in mind that if you want to add a Medigap policy after switching back, you may be subject to medical underwriting unless you have a guaranteed issue right. Call 855-559-1700 to review your options before making a change.",
  }
,
  {
    question: "Can I switch from Medicare Advantage back to Original Medicare later?",
    answer:
      "Yes. You can switch during the Annual Enrollment Period each fall or during the Medicare Advantage Open Enrollment Period in the first quarter of the year. Keep in mind that if you want to add a Medigap policy after switching back, you may be subject to medical underwriting outside of your initial guaranteed-issue window. Call 855-559-1700 to review your options before making a change.",
  }
,
  {
    question: "How do I report Medicare fraud or a suspicious call?",
    answer:
      "Medicare.gov has a dedicated section on reporting fraud and abuse, including how to protect your Medicare Number and spot common scams. Never share your Medicare Number with unsolicited callers. If you suspect fraud, you can report it through the official Medicare fraud reporting channels.",
  }
,
  {
    question: "Can I get free one-on-one Medicare counseling from a non-broker source?",
    answer:
      "Yes. Every state has a State Health Insurance Assistance Program (SHIP) that offers free, unbiased Medicare counseling to beneficiaries and their families. SHIP counselors can answer questions about enrollment, coverage choices, and assistance programs. You can also call 855-559-1700 if you'd like to speak with a licensed broker.",
  }
,
  {
    question: "Can I switch from Medicare Advantage back to Original Medicare later?",
    answer:
      "Yes. You can switch during the Annual Enrollment Period each fall or during the Medicare Advantage Open Enrollment Period in the first quarter of the year. Keep in mind that if you want to add a Medigap policy after leaving Medicare Advantage, you may be subject to medical underwriting outside of a guaranteed-issue window. Call 855-559-1700 to review your options before making a switch.",
  }
,
  {
    question: "Where can I find official Medicare information from the government?",
    answer:
      "The official source for Medicare information is medicare.gov, which covers the parts of Medicare, costs, enrollment, and your rights. You can also call 1-800-MEDICARE for federal assistance. For personalized help comparing private plan options in your state, call 855-559-1700 to speak with a licensed broker.",
  }
,
  {
    question: "Can I switch from Medicare Advantage back to Original Medicare later?",
    answer:
      "Yes. You can switch between Medicare Advantage and Original Medicare during the Annual Enrollment Period each fall or the Medicare Advantage Open Enrollment Period in the first quarter of the year. Keep in mind that if you want to add a Medigap policy after leaving Medicare Advantage, medical underwriting may apply unless you have a guaranteed issue right. Call 855-559-1700 to review your options before making a change.",
  }
,
  {
    question: "How do I know if Medicare is right for me at 65?",
    answer:
      "Most people become eligible for Medicare at age 65, but the right choice depends on whether you have other coverage like an employer plan, retiree benefits, or VA health care. If you're already collecting Social Security, you'll typically be enrolled in Part A and Part B automatically. If not, you'll need to sign up through SSA.gov during your Initial Enrollment Period to avoid late penalties. Call 855-559-1700 to talk through your situation.",
  }
,
  {
    question: "Can I switch from Medicare Advantage back to Original Medicare later?",
    answer:
      "Yes, you can switch during the Annual Enrollment Period in the fall or during the Medicare Advantage Open Enrollment Period in early in the year. However, if you want to add a Medigap policy when switching back, you may be subject to medical underwriting depending on your state and timing. Call 855-559-1700 to review your switch options before you make changes.",
  }
,
  {
    question: "Can I switch from Medicare Advantage back to Original Medicare later?",
    answer:
      "Yes. You can switch from a Medicare Advantage plan back to Original Medicare during the Annual Enrollment Period each fall or during the Medicare Advantage Open Enrollment Period in early spring. Keep in mind that if you want to add a Medigap policy after leaving Advantage, medical underwriting may apply unless you have a guaranteed-issue right. Call 855-559-1700 if you want to review your switch options.",
  }
,
  {
    question: "Can I switch from Medicare Advantage back to Original Medicare later?",
    answer:
      "Yes. You can switch during the Annual Enrollment Period in the fall or during the Medicare Advantage Open Enrollment Period in the first quarter of the year. Keep in mind that if you want to add a Medigap policy after leaving Medicare Advantage, medical underwriting may apply outside of guaranteed issue situations. Call 855-559-1700 to review your options before making a change.",
  }
,
  {
    question: "How do I know if Original Medicare with Medigap or Medicare Advantage is right for me?",
    answer:
      "The right choice depends on your doctors, your budget, how often you travel, and how predictable you want your costs to be. Original Medicare with a Medigap policy offers broad provider access nationwide and predictable out-of-pocket costs, while Medicare Advantage typically uses networks and may bundle extras like dental or vision. A licensed broker can walk through both paths with you — call 855-559-1700 for a free comparison.",
  }
,
  {
    question: "How do I know if Medigap or Medicare Advantage is right for me?",
    answer:
      "The right choice depends on how you use care, whether you travel, your preferred doctors, and your budget for premiums versus out-of-pocket costs. Medigap pairs with Original Medicare and offers broad provider access nationwide, while Medicare Advantage typically uses networks but may include extra benefits. A licensed broker can walk through both options based on your situation. Call 855-559-1700 for a no-cost comparison.",
  }
,
  {
    question: "What is the best way to learn how Medicare works before I enroll?",
    answer:
      "Medicare.gov's 'Get Started with Medicare' section is the official starting point and explains the parts of Medicare, general costs, and how Original Medicare and Medicare Advantage work. Pairing that with a plain-English broker guide can help the rules click faster. If you'd rather talk it out, call 855-559-1700 for a no-cost conversation with a licensed broker.",
  }
];

export default function LearnHubPage() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />

      <nav className="max-w-3xl mx-auto px-4 pt-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <span className="mx-2">&rsaquo;</span>
        <span className="text-gray-900 font-medium">Learn</span>
      </nav>

      <section className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Medicare Education Guides
        </h1>
        <p className="text-sm text-gray-500 mt-2">By <strong>Anthony Orner</strong>, Licensed Medicare Insurance Broker — NJ &amp; 34 states</p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Straightforward explanations of how Medicare works, written by a
          licensed broker. Start here before choosing a plan:
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-4 pb-10 space-y-10">
        {GUIDES.map((category) => (
          <div key={category.heading}>
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              {category.heading}
            </h2>
            <ul className="space-y-2 text-sm">
              {category.links.map((link) => (
                <li key={link.href} className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">&bull;</span>
                  <Link
                    href={link.href}
                    className="text-blue-700 hover:text-blue-900 hover:underline font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="max-w-3xl mx-auto px-4 pb-10">
        <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 text-sm text-gray-600">
          <p className="mb-2">
            Ready to compare plans?
          </p>
          <ul className="space-y-1">
            <li>
              <Link href="/services" className="text-blue-600 hover:underline">
                Browse all Medicare services and guides
              </Link>
            </li>
            <li>
              <Link href="/medicare-supplement/new-jersey" className="text-blue-600 hover:underline">
                Medicare Supplement plans in New Jersey
              </Link>
            </li>
            <li>
              <Link href="/medicare-advantage/new-jersey" className="text-blue-600 hover:underline">
                Medicare Advantage plans in New Jersey
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-blue-700 text-white py-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">
            Still have questions?
          </h2>
          <p className="text-blue-100 mb-6 text-lg">
            Call Anthony for a free, no-pressure conversation about your
            Medicare options.
          </p>
          <PhoneCTA size="lg" label="Call 855-559-1700" />
          <p className="text-blue-200 text-sm mt-4">
            Free &middot; Independent &middot; Licensed in NJ and 34 states
          </p>
        </div>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/basics/get-started-with-medicare/medicare-basics" rel="noopener noreferrer" target="_blank" className="text-blue-700 hover:underline">Medicare Basics (Medicare.gov)</a> &middot; <a href="https://www.cms.gov/medicare" rel="noopener noreferrer" target="_blank" className="text-blue-700 hover:underline">CMS Medicare Program</a></div>
            <div className="text-sm text-gray-600 mt-4">Free unbiased counseling is available through your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-700 hover:underline">State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For free local counseling, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For free one-on-one Medicare counseling in your state, contact your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free local Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free local counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free local Medicare counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
    </>
  );
}
