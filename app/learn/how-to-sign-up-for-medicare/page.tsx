import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "How to Sign Up for Medicare (2026 Guide)",
  description:
    "Step-by-step 2026 guide to signing up for Medicare Parts A & B, enrollment windows, and avoiding late penalties. Free broker help: 855-559-1700.",
  alternates: { canonical: `${SITE_URL}/learn/how-to-sign-up-for-medicare` },
  openGraph: {
    title: "How to Sign Up for Medicare (2026 Guide)",
    description:
      "Learn Medicare enrollment windows, how to avoid late penalties, and what happens if you miss your deadline. Free help: 855-559-1700.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://medicareyourself.com" },
    { "@type": "ListItem", position: 2, name: "Learn", item: "https://medicareyourself.com/learn" },
    { "@type": "ListItem", position: 3, name: "How to Sign Up for Medicare", item: "https://medicareyourself.com/learn/how-to-sign-up-for-medicare" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How and When to Sign Up for Medicare (2026)",
  datePublished: "2026-01-01",
  dateModified: "2026-03-13",
  author: {
    "@type": "Person",
    name: "Anthony Orner",
    url: "https://medicareyourself.com/about",
  },
  publisher: {
    "@type": "Organization",
    name: "MedicareYourself",
    url: "https://medicareyourself.com",
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Sign Up for Medicare",
  description: "Step-by-step guide to enrolling in Medicare Part A and Part B",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Check if you are automatically enrolled",
      text: "If you are already receiving Social Security benefits, you will be automatically enrolled in Medicare Parts A and B the month you turn 65. You will receive your red, white, and blue Medicare card in the mail 3 months before your birthday month.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Sign up online at SSA.gov if not automatic",
      text: "If you are not yet collecting Social Security, go to ssa.gov/medicare to apply online. The process takes about 10 minutes. You can apply up to 3 months before the month you turn 65.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Decide whether to delay Part B",
      text: "If you have employer coverage from active work (yours or a spouse's), you may be able to delay Part B without penalty. Confirm with your HR department that your coverage counts as creditable coverage before delaying.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Choose a Medicare Supplement or Advantage plan",
      text: "Original Medicare covers about 80% of costs. Most people add a Medicare Supplement (Medigap) or Medicare Advantage plan to cover the rest. Call 855-559-1700 to compare plans in your area — free, no obligation.",
    },
  ],
};

const faqs = [
  {
    question: "Do I have to sign up for Medicare when I turn 65?",
    answer:
      "Most people should sign up for Medicare Part A at 65 since it is free for anyone with 40+ work credits. Part B has a monthly premium ($202.90/month in 2026), so you may delay it if you have employer coverage from active work. If you do not have creditable employer coverage, you should enroll in Part B during your Initial Enrollment Period to avoid a permanent late penalty.",
  },
  {
    question: "What is the Medicare Initial Enrollment Period?",
    answer:
      "The Initial Enrollment Period (IEP) is a 7-month window: the 3 months before your birthday month, your birthday month itself, and the 3 months after. This is the best time to enroll. If you sign up in your birthday month or after, your coverage start date may be delayed by 1–3 months.",
  },
  {
    question: "What happens if I miss my Medicare enrollment window?",
    answer:
      "If you miss your Initial Enrollment Period without a valid reason (like employer coverage from active work), you will face a Part B late enrollment penalty. The penalty is 10% added to your Part B premium for every 12-month period you were eligible but not enrolled — and it is permanent for life. The General Enrollment Period runs January 1 through March 31 each year, with coverage starting July 1.",
  },
  {
    question: "Can I delay Medicare if I have employer insurance?",
    answer:
      "Yes, if you are actively working and have employer coverage through your own job or a spouse's active employment. Retirement coverage, COBRA, and retiree health plans generally do not qualify. When your employer coverage ends, you get a Special Enrollment Period of 8 months to sign up for Part B without penalty. Do not wait for the 8 months to expire — coverage gaps can affect Medigap enrollment.",
  },
  {
    question: "How do I actually sign up for Medicare?",
    answer:
      "If you are already getting Social Security benefits, enrollment is automatic — your Medicare card arrives in the mail 3 months before your 65th birthday. If not collecting Social Security, apply online at ssa.gov/medicare, by calling 1-800-772-1213, or at your local Social Security office. The online application takes about 10 minutes.",
  },
  {
    question: "When should I call a Medicare broker about my supplement plan?",
    answer:
      "Call a broker during the same window you enroll in Medicare — ideally 2–3 months before you turn 65. Your 6-month Medigap Open Enrollment Period starts the month you are both 65 and enrolled in Part B. Enrolling in a supplement during this window means no carrier can deny you or charge extra based on health. After this window, your options may be more limited.",
  },
  {
    question: "What happens if I miss my Initial Enrollment Period?",
    answer:
      "If you miss your 7-month Initial Enrollment Period and do not qualify for a Special Enrollment Period, you will need to sign up during the General Enrollment Period, which runs January 1 through March 31 each year. Coverage begins the month after you enroll. You may also owe a permanent Part B late enrollment penalty for each 12-month period you could have had Part B but didn't.",
  },
  {
    question: "Can I sign up for Medicare if I'm still working?",
    answer:
      "Yes. You can enroll in premium-free Part A at 65 even if you're still working, and it generally won't affect your employer coverage. Whether to enroll in Part B depends on whether your employer plan counts as creditable coverage. If your employer has fewer than 20 employees, Medicare usually becomes primary and you should enroll in Part B on time.",
  },
  {
    question: "How long does it take for Medicare coverage to start after I apply?",
    answer:
      "If you sign up during the 3 months before your 65th birthday, coverage starts the first day of your birthday month. If you sign up during your birthday month or the 3 months after, coverage begins the month after you enroll. For help choosing the right start date, call 855-559-1700.",
  }
,
  {
    question: "How do I sign up for Medicare if I'm not automatically enrolled?",
    answer:
      "You can apply online at ssa.gov/medicare, which typically takes about 10 minutes. You may also call Social Security or visit a local SSA office to enroll. Applications can be submitted starting 3 months before the month you turn 65.",
  },
  {
    question: "What happens if I miss my Medicare enrollment deadline?",
    answer:
      "If you miss your Initial Enrollment Period and don't qualify for a Special Enrollment Period, you'll need to wait for the General Enrollment Period (January 1 – March 31) to sign up for Part B. You may also owe a permanent Part B late enrollment penalty that is added to your monthly premium for as long as you have Medicare. Call 855-559-1700 if you're unsure which enrollment window applies to you.",
  },
  {
    question: "Do I need to sign up for Medicare if I have employer coverage?",
    answer:
      "If you or your spouse are still actively working and have creditable employer coverage, you may be able to delay Part B without penalty. Most people still enroll in Part A at 65 since it is premium-free for those with enough work credits. Confirm with your HR department that your plan counts as creditable before delaying any part of Medicare.",
  }
,
  {
    question: "How do I actually apply for Medicare?",
    answer:
      "You can apply online at ssa.gov/medicare in about 10 minutes, call Social Security, or visit your local Social Security office. If you are already receiving Social Security or Railroad Retirement benefits, you will be enrolled automatically in Parts A and B when you turn 65. Your Medicare card arrives in the mail about 3 months before your 65th birthday.",
  },
  {
    question: "What happens if I miss my Medicare enrollment deadline?",
    answer:
      "If you miss your Initial Enrollment Period and do not qualify for a Special Enrollment Period, you may have to wait for the General Enrollment Period (January 1 – March 31) to sign up for Part B. You could also owe a permanent Part B late enrollment penalty that gets added to your monthly premium for as long as you have Medicare. Call 855-559-1700 if you are unsure which enrollment window applies to you.",
  },
  {
    question: "Can I sign up for Medicare if I am still working?",
    answer:
      "Yes. Many people enroll in premium-free Part A at 65 and delay Part B while they have creditable employer coverage from active work. When that employment or coverage ends, you get an 8-month Special Enrollment Period to sign up for Part B without penalty. Always confirm with your HR department that your plan counts as creditable before delaying.",
  }
,
  {
    question: "How do I sign up for Medicare if I'm not getting Social Security yet?",
    answer:
      "You can apply online at ssa.gov/medicare, which takes about 10 minutes. You can also call Social Security or visit a local office. Apply up to 3 months before the month you turn 65 so your coverage starts on time.",
  },
  {
    question: "What happens if I miss my Medicare Initial Enrollment Period?",
    answer:
      "If you miss your IEP and don't qualify for a Special Enrollment Period, you'll have to wait for the General Enrollment Period (January 1 – March 31) to sign up for Part B. You may also owe a permanent Part B late enrollment penalty added to your monthly premium for as long as you have Medicare.",
  },
  {
    question: "Do I need to sign up for Part D when I enroll in Medicare?",
    answer:
      "Part D prescription drug coverage is optional but recommended unless you have other creditable drug coverage. If you go more than 63 days without creditable coverage after your IEP, you'll face a permanent Part D late enrollment penalty. Call 855-559-1700 to review Part D options before you enroll.",
  }
,
  {
    question: "How do I sign up for Medicare if I'm not getting Social Security?",
    answer:
      "You can apply online at SSA.gov/medicare, which takes about 10 minutes. You may also apply by calling Social Security or visiting your local Social Security office. Applications can be submitted starting 3 months before the month you turn 65.",
  },
  {
    question: "What happens if I miss my Initial Enrollment Period?",
    answer:
      "If you miss your IEP and don't qualify for a Special Enrollment Period, you'll need to wait for the General Enrollment Period (January 1 – March 31) to sign up for Part B. You may also face a permanent Part B late enrollment penalty that's added to your monthly premium for as long as you have Medicare. Call 855-559-1700 if you're unsure which window applies to you.",
  },
  {
    question: "Do I need to sign up for Medicare if I have employer coverage?",
    answer:
      "If you or your spouse are still actively working and covered by a group health plan with 20 or more employees, you may be able to delay Part B without penalty. Confirm with your HR department that your coverage qualifies as creditable before delaying. When the employer coverage ends, you'll have an 8-month Special Enrollment Period to sign up for Part B.",
  }
,
  {
    question: "Can I sign up for Medicare online?",
    answer:
      "Yes. You can apply for Medicare online at ssa.gov/medicare in about 10 minutes. You can submit your application up to 3 months before the month you turn 65, even if you are not ready to start Social Security benefits yet.",
  },
  {
    question: "What happens if I miss my Initial Enrollment Period?",
    answer:
      "If you miss your Initial Enrollment Period and do not qualify for a Special Enrollment Period, you may have to wait until the General Enrollment Period (January 1 – March 31) to sign up for Part B. You may also owe a permanent late enrollment penalty that is added to your Part B premium for as long as you have Medicare.",
  }
,
  {
    question: "What happens if I miss my Initial Enrollment Period?",
    answer:
      "If you miss your Initial Enrollment Period and don't qualify for a Special Enrollment Period, you'll need to wait for the General Enrollment Period (January 1 through March 31) to sign up for Part B. You may also owe a late enrollment penalty that is added to your Part B premium for as long as you have Medicare. To avoid this, enroll on time or confirm you have creditable employer coverage.",
  },
  {
    question: "Can I sign up for Medicare online?",
    answer:
      "Yes. You can apply for Medicare Part A and Part B online at ssa.gov/medicare in about 10 minutes. You can start your application up to 3 months before the month you turn 65. If you're already receiving Social Security benefits, you'll be enrolled automatically and don't need to apply.",
  },
  {
    question: "Do I need to sign up for Medicare if I have employer coverage?",
    answer:
      "If you or your spouse are still actively working and have group health coverage from an employer with 20 or more employees, you may delay Part B without penalty. You should still consider enrolling in Part A since it's typically premium-free. Always confirm with your HR department that your plan counts as creditable coverage before delaying. Call 855-559-1700 if you'd like help reviewing your options.",
  }
];

export default function HowToSignUpPage() {
  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema, howToSchema]} />

      <nav className="max-w-4xl mx-auto px-4 pt-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/learn/what-is-medigap" className="hover:text-blue-600">Learn</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-900 font-medium">How to Sign Up for Medicare</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          How and When to Sign Up for Medicare (2026)
        </h1>
        <p className="text-sm text-gray-400 mb-6">
          By <strong className="text-gray-600">Anthony Orner</strong>, Licensed Medicare Insurance Broker · Updated March 2026
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The most important thing to know: Medicare has enrollment deadlines, and missing them
          results in permanent penalties on your monthly premium. Here is exactly when to sign up
          and what to do if you have employer coverage.
        </p>

        {/* Key deadlines callout */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Key Medicare Enrollment Windows</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white rounded-lg p-4 border border-blue-100">
              <p className="font-semibold text-blue-800 mb-1">Initial Enrollment Period</p>
              <p className="text-gray-600">7-month window around your 65th birthday. Best time to enroll — no penalties, full plan choice.</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-blue-100">
              <p className="font-semibold text-blue-800 mb-1">Special Enrollment Period</p>
              <p className="text-gray-600">8 months after losing employer coverage from active work. No penalty if you qualify.</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-blue-100">
              <p className="font-semibold text-blue-800 mb-1">General Enrollment Period</p>
              <p className="text-gray-600">Jan 1 – Mar 31 each year. Coverage starts July 1. Late penalty applies.</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step-by-Step: How to Enroll</h2>

        <div className="space-y-4 mb-8">
          {[
            {
              step: "1",
              title: "Check if you are automatically enrolled",
              body: "If you are already receiving Social Security retirement or disability benefits, Medicare Parts A and B will be activated automatically when you turn 65. Your red, white, and blue Medicare card arrives in the mail about 3 months before your birthday month. You do not need to do anything.",
            },
            {
              step: "2",
              title: "Apply online at SSA.gov if enrollment is not automatic",
              body: "If you are not yet collecting Social Security, go to ssa.gov/medicare to apply online. You can also call 1-800-772-1213 or visit your local Social Security office. The online application takes about 10 minutes and can be started up to 3 months before your birthday month.",
            },
            {
              step: "3",
              title: "Decide whether to delay Part B if you have employer coverage",
              body: "Part B costs $202.90/month in 2026. If you have coverage through an employer where you or your spouse is actively working, you may delay Part B without penalty. Retiree insurance, COBRA, and marketplace plans do not qualify. Confirm with your HR department before delaying.",
            },
            {
              step: "4",
              title: "Add a Medicare Supplement or Advantage plan",
              body: "Original Medicare covers roughly 80% of costs. The remaining 20%, plus hospital deductibles, can add up quickly. Most people add either a Medicare Supplement (Medigap) plan — which covers the gaps with predictable costs — or a Medicare Advantage plan. Call 855-559-1700 to compare options in your area at no cost.",
            },
          ].map((item) => (
            <div key={item.step} className="flex gap-4 p-4 border border-gray-100 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-sm">
                {item.step}
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                <p className="text-gray-600 text-sm">{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Penalty warning */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-2">The Part B Late Enrollment Penalty</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            If you do not sign up for Part B when first eligible and do not have qualifying employer coverage,
            your premium will increase by <strong>10% for every 12-month period</strong> you were eligible but
            did not enroll. This penalty is <strong>permanent</strong> — it follows you for life.
            At $202.90/month today, even a 1-year delay adds $20.29/month forever. A 5-year delay adds $101.45/month.
          </p>
        </div>

        <div className="mb-10">
          <PhoneCTA label="Questions About Enrollment? Call Free" />
        </div>

        <div className="mb-10">
          <FAQSection faqs={faqs} title="Medicare Sign-Up Questions" />
        </div>

        <div className="bg-gray-50 rounded-xl p-6 text-sm border border-gray-100 mb-8">
          <p className="font-semibold text-gray-900 mb-2">Next steps after enrollment</p>
          <ul className="space-y-1 text-gray-600">
            <li>
              <Link href="/services/medicare-supplement-for-seniors-turning-65" className="text-blue-600 hover:underline">
                Medicare Supplement for Seniors Turning 65
              </Link>
            </li>
            <li>
              <Link href="/services/compare-and-enroll-in-plan-g-online" className="text-blue-600 hover:underline">
                Compare and Enroll in Plan G Online
              </Link>
            </li>
            <li>
              <Link href="/services/how-long-does-it-take-to-enroll-in-medicare-supplements" className="text-blue-600 hover:underline">
                How Long Does It Take to Enroll in Medicare Supplements?
              </Link>
            </li>
            <li>
              <Link href="/services/help-with-your-medicare-decision" className="text-blue-600 hover:underline">
                Help With Your Medicare Decision
              </Link>
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 text-sm text-gray-600 border border-gray-100">
          <p className="font-semibold text-gray-900 mb-1">Official Resources</p>
          <ul className="space-y-1">
            <li>
              <a href="https://www.medicare.gov/sign-up-change-plans/how-do-i-get-parts-a-b" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Medicare.gov — How to get Parts A &amp; B
              </a>
            </li>
            <li>
              <a href="https://www.ssa.gov/medicare" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Social Security Administration — Medicare enrollment
              </a>
            </li>
          </ul>
          <p className="mt-3 text-xs text-gray-400">
            EasyKind Medicare is an independent brokerage. We are not affiliated with Medicare, CMS, or SSA.
          </p>
        </div>
      </article>
    </>
  );
}
