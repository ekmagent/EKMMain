import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "How to Sign Up for Medicare (2026 Guide)",
  description:
    "2026 step-by-step guide to signing up for Medicare through Social Security, avoiding Part B late penalties, and picking coverage. Free broker help: 855-559-1700.",
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
,
  {
    question: "What happens if I miss my Medicare Initial Enrollment Period?",
    answer:
      "If you miss your Initial Enrollment Period and do not qualify for a Special Enrollment Period, you will need to wait for the General Enrollment Period (January 1 – March 31) to sign up for Part B. You may also owe a permanent Part B late enrollment penalty for each 12-month period you were eligible but did not enroll. Call 855-559-1700 if you are unsure whether you qualify for a Special Enrollment Period.",
  },
  {
    question: "How do I actually sign up for Medicare?",
    answer:
      "You can apply online at ssa.gov/medicare, by calling Social Security at 1-800-772-1213, or by visiting your local Social Security office. The online application typically takes about 10 minutes, and you can apply up to 3 months before the month you turn 65. If you are already receiving Social Security benefits, your enrollment is automatic.",
  },
  {
    question: "Can I sign up for Medicare if I am still working?",
    answer:
      "Yes. You can enroll in Part A at 65 (it is usually premium-free if you have 40+ work credits) and delay Part B if you have creditable coverage from your or your spouse's active employment. When that employer coverage ends, you get an 8-month Special Enrollment Period to sign up for Part B without a late penalty. Confirm your plan is creditable with your HR department before delaying.",
  }
,
  {
    question: "What happens if I miss my Initial Enrollment Period?",
    answer:
      "If you miss your Initial Enrollment Period and do not qualify for a Special Enrollment Period, you will need to wait for the General Enrollment Period (January 1 – March 31) to sign up for Part B. You may also owe a permanent Part B late enrollment penalty that increases the longer you wait. Coverage from a General Enrollment Period sign-up begins the month after you enroll.",
  },
  {
    question: "Can I sign up for Medicare online?",
    answer:
      "Yes. You can apply for Medicare online at ssa.gov/medicare, and the application typically takes about 10 minutes. You can also apply by calling Social Security or by visiting your local Social Security office. If you already get Social Security or Railroad Retirement Board benefits, you will be enrolled automatically and do not need to apply.",
  },
  {
    question: "Do I need to sign up for Medicare every year?",
    answer:
      "No. Once you are enrolled in Medicare Parts A and B, your coverage continues automatically as long as you pay any required premiums. However, if you have a Medicare Advantage or Part D plan, you should review it each year during the Annual Enrollment Period (October 15 – December 7) to make sure it still fits your needs.",
  }
,
  {
    question: "What happens if I miss my Medicare Initial Enrollment Period?",
    answer:
      "If you miss your 7-month Initial Enrollment Period and do not qualify for a Special Enrollment Period, you will need to wait for the General Enrollment Period (January 1 to March 31) to sign up for Part B. You may also owe a permanent Part B late enrollment penalty that gets added to your monthly premium for as long as you have Medicare. Call 855-559-1700 if you missed your window — we can help you understand your options.",
  },
  {
    question: "Can I sign up for Medicare online?",
    answer:
      "Yes. The fastest way to enroll is at ssa.gov/medicare, where the application typically takes about 10 minutes. You can also apply by calling Social Security or visiting your local Social Security office. You do not enroll through Medicare.gov directly — Social Security handles Part A and Part B enrollment.",
  },
  {
    question: "Do I need to sign up for Medicare if I have employer coverage?",
    answer:
      "If you or your spouse are still actively working and have creditable group health coverage, you may delay Part B without a late penalty and enroll later through a Special Enrollment Period. Most people still sign up for Part A at 65 since it is premium-free for those with enough work credits. Always confirm with your HR department that your plan counts as creditable coverage before delaying Part B.",
  }
,
  {
    question: "How do I sign up for Medicare if I'm not automatically enrolled?",
    answer:
      "You can apply online at ssa.gov/medicare, which takes about 10 minutes. You can also apply by calling Social Security or by visiting your local Social Security office. Apply up to 3 months before the month you turn 65 to ensure coverage starts on time.",
  },
  {
    question: "What documents do I need to sign up for Medicare?",
    answer:
      "You'll typically need your Social Security number, birth certificate, and proof of U.S. citizenship or legal residency. If you're delaying Part B due to employer coverage, you'll also need form CMS-L564 from your employer when you eventually enroll. Most online applications don't require uploading documents unless Social Security requests them.",
  },
  {
    question: "What happens if I miss my Medicare Initial Enrollment Period?",
    answer:
      "If you miss your IEP and don't qualify for a Special Enrollment Period, you'll need to wait for the General Enrollment Period (January 1 – March 31) to sign up for Part B. You may also owe a permanent Part B late enrollment penalty that's added to your monthly premium for as long as you have Medicare. Call 855-559-1700 to review your options before missing a deadline.",
  }
,
  {
    question: "Can I sign up for Medicare online?",
    answer:
      "Yes. You can apply for Medicare online at ssa.gov/medicare, and the application typically takes about 10 minutes. You can submit your application up to 3 months before the month you turn 65, even if you are not ready to start Social Security retirement benefits.",
  },
  {
    question: "What happens if I miss my Medicare Initial Enrollment Period?",
    answer:
      "If you miss your Initial Enrollment Period and do not qualify for a Special Enrollment Period, you will need to wait for the General Enrollment Period (January 1 – March 31) to sign up for Part B. You may also owe a permanent Part B late enrollment penalty that is added to your monthly premium for as long as you have Medicare.",
  },
  {
    question: "Do I need to sign up for Medicare if I already get Social Security?",
    answer:
      "No. If you are already receiving Social Security or Railroad Retirement Board benefits when you become eligible, you are automatically enrolled in Medicare Part A and Part B. Your red, white, and blue Medicare card will arrive in the mail about 3 months before your 65th birthday.",
  }
,
  {
    question: "How long does it take to get my Medicare card after I apply?",
    answer:
      "If you apply online at SSA.gov, most people receive their red, white, and blue Medicare card within about 2 to 3 weeks. If you are automatically enrolled because you are already receiving Social Security, your card arrives roughly 3 months before your 65th birthday. You can also print a temporary card from your My Social Security account.",
  },
  {
    question: "Can I sign up for Medicare if I am still working?",
    answer:
      "Yes. You can enroll in Medicare at 65 even if you are still working. Many people sign up for Part A (which is usually free) and delay Part B if they have creditable employer coverage from active work. Confirm with your HR department that your group plan qualifies as creditable before delaying Part B to avoid a late enrollment penalty.",
  },
  {
    question: "What happens if I miss my Medicare Initial Enrollment Period?",
    answer:
      "If you miss your IEP and do not qualify for a Special Enrollment Period, you will need to wait for the General Enrollment Period (January 1 – March 31) to sign up, with coverage starting the month after you enroll. You may also owe a permanent Part B late enrollment penalty added to your monthly premium. Call 855-559-1700 if you missed your window and need help figuring out next steps.",
  }
,
  {
    question: "How do I sign up for Medicare if I'm not automatically enrolled?",
    answer:
      "You can apply online at ssa.gov/medicare in about 10 minutes, call Social Security, or visit your local Social Security office. The easiest option for most people is the online application. You can apply starting 3 months before the month you turn 65.",
  },
  {
    question: "What happens if I miss my Medicare Initial Enrollment Period?",
    answer:
      "If you miss your IEP and don't qualify for a Special Enrollment Period, you'll need to wait for the General Enrollment Period (January 1 – March 31) to sign up for Part B. You may also owe a permanent Part B late enrollment penalty that's added to your monthly premium for as long as you have Medicare. Call 855-559-1700 if you're unsure which window applies to you.",
  },
  {
    question: "Can I sign up for Medicare if I'm still working?",
    answer:
      "Yes. You can enroll in premium-free Part A at 65 even if you're still working, and many people do. Whether to enroll in Part B depends on whether your employer coverage is considered creditable — confirm with your HR department before delaying Part B to avoid a late penalty.",
  }
,
  {
    question: "Will I be automatically enrolled in Medicare at 65?",
    answer:
      "If you are already receiving Social Security or Railroad Retirement Board benefits before turning 65, you will be automatically enrolled in Medicare Part A and Part B the month you turn 65. Your red, white, and blue Medicare card will arrive in the mail about 3 months before your birthday month. If you are not yet collecting those benefits, you must actively sign up through SSA.gov.",
  },
  {
    question: "How do I apply for Medicare if I'm not getting Social Security yet?",
    answer:
      "You can apply online at ssa.gov/medicare, by calling Social Security, or by visiting a local Social Security office. The online application typically takes about 10 minutes. You can apply starting 3 months before the month you turn 65 to make sure your coverage starts on time.",
  },
  {
    question: "What happens if I miss my Medicare enrollment deadline?",
    answer:
      "If you miss your Initial Enrollment Period and do not qualify for a Special Enrollment Period, you may have to wait for the General Enrollment Period to sign up for Part B. You may also owe a permanent Part B late enrollment penalty that is added to your monthly premium for as long as you have Medicare. Call 855-559-1700 if you're unsure which window applies to you.",
  }
,
  {
    question: "Will I be automatically enrolled in Medicare at 65?",
    answer:
      "If you are already receiving Social Security or Railroad Retirement Board benefits before age 65, you will be automatically enrolled in Medicare Part A and Part B starting the month you turn 65. Your red, white, and blue Medicare card will arrive in the mail about three months before your birthday month. If you are not yet collecting those benefits, you must sign up yourself through SSA.gov.",
  },
  {
    question: "How do I apply for Medicare if I am not getting Social Security yet?",
    answer:
      "You can apply online at ssa.gov/medicare, and the application typically takes about 10 minutes to complete. You may also apply by calling Social Security or by visiting your local Social Security office. The earliest you can apply is three months before the month you turn 65.",
  },
  {
    question: "What happens if I miss my Medicare Initial Enrollment Period?",
    answer:
      "If you miss your Initial Enrollment Period and do not qualify for a Special Enrollment Period, you will need to wait for the General Enrollment Period (January 1 – March 31) to sign up. You may also owe a permanent Part B late enrollment penalty that increases the longer you go without coverage. Call 855-559-1700 if you are unsure which enrollment window applies to you.",
  }
,
  {
    question: "Where do I actually sign up for Medicare?",
    answer:
      "You sign up for Medicare through the Social Security Administration, not Medicare itself. The fastest way is online at ssa.gov/medicare, which takes about 10 minutes. You can also call Social Security or visit a local SSA office to apply in person.",
  },
  {
    question: "What happens if I miss my Initial Enrollment Period?",
    answer:
      "If you miss your IEP and do not qualify for a Special Enrollment Period, you will need to wait for the General Enrollment Period (January 1 – March 31) to sign up for Part B. You may also owe a permanent Part B late enrollment penalty that is added to your monthly premium for as long as you have Medicare. Coverage from a General Enrollment Period sign-up begins the month after you enroll.",
  },
  {
    question: "Do I need to sign up for Medicare every year?",
    answer:
      "No. Once you are enrolled in Original Medicare (Parts A and B), your coverage continues automatically as long as you pay the Part B premium. However, if you have a Medicare Advantage or Part D drug plan, you can review and change those plans each year during the Annual Enrollment Period from October 15 to December 7.",
  }
,
  {
    question: "Can I sign up for Medicare if I am still working at 65?",
    answer:
      "Yes. You can enroll in Medicare at 65 even if you are still working. Many people sign up for premium-free Part A and delay Part B if they have creditable employer coverage from active employment. Check with your HR department before delaying Part B to confirm your group plan qualifies as creditable coverage.",
  },
  {
    question: "How long does it take to get my Medicare card after I apply?",
    answer:
      "After applying through SSA.gov, most people receive their red, white, and blue Medicare card in the mail within about 2 to 4 weeks. If you are automatically enrolled, your card arrives about 3 months before the month you turn 65. You can also print a replacement card from your My Social Security account.",
  },
  {
    question: "What documents do I need to sign up for Medicare?",
    answer:
      "You generally need your Social Security number, birth certificate or proof of U.S. citizenship or lawful residency, and information about any current health coverage. If you are delaying Part B due to employer coverage, you will later need form CMS-L564 completed by your employer. Most applications can be completed online at SSA.gov/medicare in about 10 minutes.",
  }
,
  {
    question: "How do I sign up for Medicare if I'm not getting Social Security yet?",
    answer:
      "You can apply online at ssa.gov/medicare, which takes about 10 minutes. You may also apply by calling Social Security or by visiting your local Social Security office. Apply during the 3 months before your 65th birthday month so your coverage starts on time.",
  },
  {
    question: "What happens if I miss my Initial Enrollment Period?",
    answer:
      "If you miss your IEP and don't qualify for a Special Enrollment Period, you'll have to wait for the General Enrollment Period (January 1 – March 31) to sign up for Part B. You may also owe a permanent Part B late enrollment penalty for each 12-month period you went without coverage. Coverage from General Enrollment begins the month after you sign up.",
  },
  {
    question: "Can a licensed broker help me sign up for Medicare?",
    answer:
      "A licensed broker cannot enroll you in Part A or Part B — that's done through Social Security. However, a broker can help you understand your enrollment timing, avoid late penalties, and choose a Medicare Supplement, Advantage, or Part D plan once you have your Medicare number. Call 855-559-1700 for free, no-obligation help.",
  }
,
  {
    question: "Can I sign up for Medicare if I am still working at 65?",
    answer:
      "Yes. You can enroll in Medicare at 65 even if you are still working. Many people sign up for premium-free Part A and delay Part B if they have creditable employer coverage from active employment. Confirm with your employer's HR department whether your group plan counts as creditable coverage before delaying Part B.",
  },
  {
    question: "How long does it take to get my Medicare card after applying?",
    answer:
      "After you apply through SSA.gov, Social Security typically processes your application within a few weeks. Your red, white, and blue Medicare card is mailed to the address on file. If you are automatically enrolled, your card arrives about 3 months before your 65th birthday month.",
  },
  {
    question: "What happens if I miss my Medicare Initial Enrollment Period?",
    answer:
      "If you miss your 7-month Initial Enrollment Period and do not qualify for a Special Enrollment Period, you must wait for the General Enrollment Period (January 1 – March 31) to sign up for Part B. You may also owe a permanent Part B late enrollment penalty that is added to your monthly premium for as long as you have Medicare.",
  }
,
  {
    question: "Can I sign up for Medicare if I am still working at 65?",
    answer:
      "Yes, you can sign up for Medicare at 65 even if you are still working. Many people enroll in premium-free Part A and delay Part B if they have creditable employer coverage from active employment. Confirm with your HR department that your group plan qualifies as creditable coverage before delaying Part B to avoid a late enrollment penalty.",
  },
  {
    question: "How long does it take for Medicare coverage to start after I apply?",
    answer:
      "If you apply during the 3 months before your 65th birthday, your Medicare coverage starts the first day of your birthday month. If you apply during or after your birthday month, coverage can be delayed by up to a month or more. Applying early at ssa.gov/medicare helps ensure your coverage begins on time.",
  },
  {
    question: "Do I need to sign up for Medicare every year?",
    answer:
      "No, Medicare Part A and Part B enrollment is a one-time process and your coverage continues automatically as long as you pay any required premiums. However, if you have a Medicare Advantage or Part D prescription drug plan, you should review your options each year during the Annual Enrollment Period (October 15 – December 7) to make sure your plan still fits your needs.",
  }
,
  {
    question: "Can I sign up for Medicare if I am not yet collecting Social Security?",
    answer:
      "Yes. If you are not already receiving Social Security benefits, you will not be automatically enrolled and must actively sign up. You can apply online at ssa.gov/medicare, by calling Social Security, or by visiting a local Social Security office. Most people apply online because it takes about 10 minutes.",
  },
  {
    question: "When does my Medicare coverage actually start?",
    answer:
      "If you sign up during the 3 months before your 65th birthday month, coverage begins the first day of your birthday month. If you sign up during or after your birthday month, coverage starts the first day of the month after you enroll. Planning ahead helps avoid any gap in coverage.",
  },
  {
    question: "What happens if I miss my Medicare Initial Enrollment Period?",
    answer:
      "If you miss your 7-month Initial Enrollment Period and do not qualify for a Special Enrollment Period, you generally must wait for the General Enrollment Period (January 1 – March 31) to sign up for Part B. You may also owe a permanent Part B late enrollment penalty for each 12-month period you went without coverage. Call 855-559-1700 if you need help reviewing your options.",
  }
,
  {
    question: "How do I sign up for Medicare if I am not automatically enrolled?",
    answer:
      "You can apply online at ssa.gov/medicare, which usually takes about 10 minutes. You may also apply by calling Social Security or visiting your local Social Security office. Apply during the 3 months before the month you turn 65 to ensure coverage starts on time.",
  },
  {
    question: "What happens if I miss my Medicare Initial Enrollment Period?",
    answer:
      "If you miss your IEP and do not have creditable employer coverage, you may have to wait until the General Enrollment Period (January 1 – March 31) to sign up for Part B. You may also owe a permanent late enrollment penalty added to your Part B premium for as long as you have Medicare. Call 855-559-1700 if you are unsure whether your coverage qualifies.",
  },
  {
    question: "Can I sign up for Medicare if I am still working?",
    answer:
      "Yes, you can enroll in Medicare while still working, but you may choose to delay Part B if you have creditable health coverage through your or your spouse's active employment. Confirm with your HR department that your plan counts as creditable coverage before delaying. When that employment ends, you get an 8-month Special Enrollment Period to sign up for Part B without penalty.",
  }
,
  {
    question: "Can I sign up for Medicare if I am still working at 65?",
    answer:
      "Yes. You can enroll in Part A at 65 even if you are still working, and Part A is premium-free for most people with enough work credits. If you have creditable health coverage through your or your spouse's active employment, you may delay Part B without a late penalty and enroll later through a Special Enrollment Period.",
  },
  {
    question: "How long does it take to get my Medicare card after applying?",
    answer:
      "After applying through SSA.gov, most people receive their red, white, and blue Medicare card in the mail within about 2 to 3 weeks. If you are automatically enrolled, your card typically arrives about 3 months before your 65th birthday month.",
  },
  {
    question: "What happens if I miss my Initial Enrollment Period?",
    answer:
      "If you miss your IEP and do not qualify for a Special Enrollment Period, you generally must wait for the General Enrollment Period (January 1 – March 31) to sign up for Part B, with coverage starting the month after you enroll. You may also owe a permanent Part B late enrollment penalty for each 12-month period you went without coverage.",
  }
,
  {
    question: "Can I sign up for Medicare if I am still working at 65?",
    answer:
      "Yes, you can sign up for Medicare at 65 even if you are still working. Many people enroll in Part A since it is premium-free for those with 40+ work credits, and delay Part B if they have creditable employer coverage from active employment. Confirm with your HR department that your group plan qualifies as creditable coverage before delaying Part B to avoid a late enrollment penalty.",
  },
  {
    question: "How long does it take to get my Medicare card after applying?",
    answer:
      "After applying through SSA.gov, most people receive their red, white, and blue Medicare card in the mail within about 2 to 4 weeks. If you are automatically enrolled because you already collect Social Security, your card typically arrives about 3 months before your 65th birthday. You can also print a replacement card from your my Social Security account.",
  },
  {
    question: "What happens if I miss my Medicare Initial Enrollment Period?",
    answer:
      "If you miss your Initial Enrollment Period and do not qualify for a Special Enrollment Period, you will need to sign up during the General Enrollment Period, which runs January 1 through March 31 each year. Coverage begins the month after you enroll. You may also owe a permanent Part B late enrollment penalty added to your monthly premium for as long as you have Medicare.",
  }
,
  {
    question: "How do I sign up for Medicare if I'm not getting Social Security yet?",
    answer:
      "If you're not already receiving Social Security or Railroad Retirement Board benefits, you'll need to actively sign up for Medicare. The fastest way is online at ssa.gov/medicare, which takes about 10 minutes. You can also apply by calling Social Security at 1-800-772-1213 or visiting your local Social Security office.",
  },
  {
    question: "When can I first enroll in Medicare?",
    answer:
      "You can apply for Medicare up to 3 months before the month you turn 65. Your Initial Enrollment Period continues through your birthday month and the 3 months after, for a total 7-month window. Applying in the 3 months before your birthday helps ensure coverage starts the first day of your birthday month.",
  },
  {
    question: "What happens if I miss my Medicare Initial Enrollment Period?",
    answer:
      "If you miss your IEP and don't qualify for a Special Enrollment Period, you'll have to wait for the General Enrollment Period (January 1 through March 31) to sign up. You may also owe a permanent Part B late enrollment penalty that is added to your monthly premium for as long as you have Medicare. A licensed broker can help you confirm whether you qualify for an SEP — call 855-559-1700.",
  }
,
  {
    question: "Can I sign up for Medicare if I'm still working at 65?",
    answer:
      "Yes, you can enroll in Medicare at 65 even if you're still working. Most people take Part A since it's premium-free with 40+ work credits. You may delay Part B without penalty if you have creditable coverage through active employment (yours or a spouse's), but confirm with your HR department before delaying.",
  },
  {
    question: "What happens if I miss my Medicare enrollment deadline?",
    answer:
      "If you miss your Initial Enrollment Period and don't qualify for a Special Enrollment Period, you'll need to wait for the General Enrollment Period (January 1 – March 31) to sign up for Part B. You may also owe a permanent Part B late enrollment penalty that is added to your monthly premium for as long as you have Medicare.",
  },
  {
    question: "Do I need to re-enroll in Medicare every year?",
    answer:
      "No, your Medicare Part A and Part B enrollment is continuous and does not require yearly renewal. However, if you have a Medicare Advantage or Part D drug plan, you can review and change those plans each year during the Annual Enrollment Period (October 15 – December 7). Call 855-559-1700 for a free annual plan review.",
  }
,
  {
    question: "Can I sign up for Medicare if I am still working at 65?",
    answer:
      "Yes. You can enroll in Medicare at 65 even if you are still working. Many people sign up for Part A since it is premium-free for those with enough work credits, and delay Part B if they have creditable employer coverage from active employment. Confirm with your HR department before delaying Part B to avoid a late enrollment penalty.",
  },
  {
    question: "What happens if I miss my Medicare Initial Enrollment Period?",
    answer:
      "If you miss your Initial Enrollment Period and do not qualify for a Special Enrollment Period, you will need to wait for the General Enrollment Period (January 1 through March 31) to sign up. You may also owe a permanent Part B late enrollment penalty that is added to your monthly premium for as long as you have Medicare. Call 855-559-1700 for free help reviewing your options.",
  },
  {
    question: "How long does it take to get my Medicare card after I apply?",
    answer:
      "After you apply through SSA.gov, it typically takes a few weeks to receive your red, white, and blue Medicare card in the mail. If you are automatically enrolled, the card arrives about 3 months before your 65th birthday. You can also print a replacement card from your my Social Security account.",
  }
,
  {
    question: "Can I sign up for Medicare if I'm still working at 65?",
    answer:
      "Yes, you can enroll in Medicare at 65 even if you're still working. Many people enroll in Part A since it's premium-free for those with sufficient work credits, and delay Part B if they have creditable employer coverage from active employment. Confirm with your HR department that your group coverage qualifies as creditable before delaying Part B.",
  },
  {
    question: "What happens if I miss my Medicare Initial Enrollment Period?",
    answer:
      "If you miss your IEP and don't qualify for a Special Enrollment Period, you'll need to wait for the General Enrollment Period (January 1 – March 31) to sign up. You may also face a permanent Part B late enrollment penalty that's added to your monthly premium for as long as you have Medicare. Call 855-559-1700 if you're unsure which window applies to you.",
  },
  {
    question: "Where do I actually apply for Medicare?",
    answer:
      "You apply for Medicare through the Social Security Administration at ssa.gov/medicare, by calling Social Security, or by visiting a local SSA office. Medicare itself is administered by CMS, but enrollment is handled by Social Security. Once enrolled in Original Medicare, you can separately choose a Medicare Supplement, Part D, or Medicare Advantage plan.",
  }
,
  {
    question: "How do I sign up for Medicare if I'm not automatically enrolled?",
    answer:
      "You can apply online at ssa.gov/medicare, which usually takes about 10 minutes. You may also apply by calling Social Security or visiting your local SSA office. Apply up to 3 months before the month you turn 65 to ensure coverage starts on time.",
  },
  {
    question: "What happens if I miss my Initial Enrollment Period for Part B?",
    answer:
      "If you miss your IEP and don't qualify for a Special Enrollment Period, you'll have to wait for the General Enrollment Period (January 1 – March 31) to sign up. You may also owe a permanent Part B late enrollment penalty that increases the longer you go without coverage. Call 855-559-1700 if you're unsure which window applies to you.",
  },
  {
    question: "Do I need to sign up for Medicare if I have employer coverage?",
    answer:
      "If you or your spouse are still actively working and the employer plan is considered creditable coverage, you can usually delay Part B without penalty. Confirm creditable coverage status with your HR department before delaying enrollment. When you eventually leave that coverage, you'll have an 8-month Special Enrollment Period to sign up for Part B.",
  }
,
  {
    question: "Can I sign up for Medicare if I'm not collecting Social Security yet?",
    answer:
      "Yes. If you are not already receiving Social Security benefits, you will not be automatically enrolled and must apply yourself. You can apply online at ssa.gov/medicare, by calling Social Security, or by visiting a local SSA office. The online application takes about 10 minutes.",
  },
  {
    question: "What happens if I miss my Initial Enrollment Period?",
    answer:
      "If you miss your 7-month Initial Enrollment Period and do not have creditable employer coverage, you may have to wait for the General Enrollment Period (January 1 to March 31) to sign up for Part B. You may also owe a permanent Part B late enrollment penalty that is added to your monthly premium for as long as you have Medicare. Call 855-559-1700 if you are unsure which enrollment period applies to you.",
  },
  {
    question: "Do I need to sign up for Medicare if I have employer health insurance?",
    answer:
      "If you or your spouse are still actively working and have group health coverage from that employer, you may be able to delay Part B without a late penalty. Most people still enroll in Part A at 65 because it is premium-free for those with enough work credits. Always confirm with your HR department that your coverage is considered creditable before delaying Part B.",
  }
,
  {
    question: "How do I sign up for Medicare if I'm not getting Social Security yet?",
    answer:
      "If you are not already collecting Social Security or Railroad Retirement benefits, you must actively enroll in Medicare. The fastest way is online at ssa.gov/medicare, which takes about 10 minutes. You can also apply by calling Social Security or visiting a local SSA office.",
  },
  {
    question: "When can I first sign up for Medicare?",
    answer:
      "You can apply for Medicare starting 3 months before the month you turn 65. Your Initial Enrollment Period spans 7 months total — the 3 months before, the month of, and the 3 months after your 65th birthday. Signing up in the first 3 months helps ensure coverage begins the month you turn 65.",
  },
  {
    question: "What happens if I miss my Medicare enrollment deadline?",
    answer:
      "If you miss your Initial Enrollment Period and don't qualify for a Special Enrollment Period, you'll have to wait for the General Enrollment Period (January 1 – March 31) to sign up for Part B. You may also owe a permanent late enrollment penalty added to your Part B premium for as long as you have Medicare.",
  }
,
  {
    question: "How do I actually apply for Medicare?",
    answer:
      "Most people apply online through the Social Security Administration at ssa.gov/medicare, which takes about 10 minutes. You can also apply by calling Social Security or by visiting your local Social Security office. If you worked for a railroad, you should contact the Railroad Retirement Board instead.",
  },
  {
    question: "What if I miss my Initial Enrollment Period?",
    answer:
      "If you miss your IEP and do not qualify for a Special Enrollment Period, you must wait for the General Enrollment Period (January 1 – March 31) to sign up for Part B, with coverage starting the month after you enroll. You may also owe a permanent Part B late enrollment penalty for each 12-month period you went without coverage. A licensed broker can help you confirm whether you qualify for an SEP — call 855-559-1700.",
  },
  {
    question: "Do I need to sign up for Part D when I enroll in Medicare?",
    answer:
      "Part D prescription drug coverage is optional, but if you go without creditable drug coverage for 63 days or more after your Initial Enrollment Period, you may owe a permanent Part D late enrollment penalty. Most people enroll in either a stand-alone Part D plan or a Medicare Advantage plan that includes drug coverage when they first become eligible.",
  }
,
  {
    question: "What happens if I miss my Medicare Initial Enrollment Period?",
    answer:
      "If you miss your Initial Enrollment Period and do not qualify for a Special Enrollment Period, you will need to wait for the General Enrollment Period (January 1 – March 31) to sign up for Part B. Coverage begins the month after you enroll. You may also owe a permanent Part B late enrollment penalty that is added to your monthly premium for as long as you have Medicare.",
  },
  {
    question: "Can I sign up for Medicare if I am still working?",
    answer:
      "Yes. If you have group health coverage through your or your spouse's current employer, you can typically delay Part B without penalty and enroll later during a Special Enrollment Period. Most people still enroll in Part A at 65 since it is premium-free for those with 40+ work credits. Confirm with your HR department that your coverage is considered creditable before delaying.",
  },
  {
    question: "How do I apply for Medicare online?",
    answer:
      "You can apply for Medicare directly through the Social Security Administration at ssa.gov/medicare/sign-up. The online application takes about 10 minutes and you can apply up to 3 months before the month you turn 65. You can also apply by calling Social Security or visiting your local office.",
  }
,
  {
    question: "What happens if I miss my Medicare Initial Enrollment Period?",
    answer:
      "If you miss your Initial Enrollment Period and do not qualify for a Special Enrollment Period, you will need to wait for the General Enrollment Period, which runs January 1 through March 31 each year. You may also owe a permanent Part B late enrollment penalty that increases your premium for as long as you have Medicare. Call 855-559-1700 if you missed your window and need help figuring out your next step.",
  },
  {
    question: "Can I sign up for Medicare online?",
    answer:
      "Yes. You can apply for Medicare online at ssa.gov/medicare, even if you are not ready to start collecting Social Security retirement benefits. The application typically takes about 10 minutes, and you can apply starting 3 months before the month you turn 65.",
  },
  {
    question: "Do I need to sign up for Medicare if I already have employer health insurance?",
    answer:
      "If you have creditable coverage through active employment (yours or a spouse's), you can usually delay Part B without penalty and enroll later through a Special Enrollment Period. Most people still enroll in Part A at 65 because it is premium-free for those with enough work credits. Confirm with your HR department that your plan counts as creditable before delaying Part B.",
  }
,
  {
    question: "How do I sign up for Medicare if I'm not already getting Social Security?",
    answer:
      "If you are not already receiving Social Security or Railroad Retirement Board benefits, you need to actively enroll in Medicare. You can apply online at ssa.gov/medicare, call Social Security, or visit your local Social Security office. The online application typically takes about 10 minutes.",
  },
  {
    question: "When can I first sign up for Medicare?",
    answer:
      "You can first sign up during your Initial Enrollment Period, which begins 3 months before the month you turn 65 and ends 3 months after. Applying in the 3 months before your birthday month helps ensure your coverage starts the month you turn 65. If you miss this window without creditable coverage, you may face a late enrollment penalty.",
  },
  {
    question: "Do I need to sign up for Medicare if I already have employer insurance?",
    answer:
      "If you have group health coverage through active employment (yours or your spouse's), you may be able to delay Part B without penalty as long as that coverage is considered creditable. Most people still enroll in Part A at 65 since it is premium-free for those with enough work credits. Always confirm creditable coverage status with your HR department before delaying Part B.",
  }
,
  {
    question: "How long does it take to get my Medicare card after I apply?",
    answer:
      "If you enroll during your Initial Enrollment Period before your 65th birthday, your Medicare card typically arrives within about 3 weeks of approval. If you are automatically enrolled because you already receive Social Security, your card arrives about 3 months before your 65th birthday month. You can also print a replacement card from your My Social Security account.",
  },
  {
    question: "Can I sign up for Medicare if I am still working?",
    answer:
      "Yes. You can enroll in Part A at 65 even if you are still working, and Part A is premium-free for most people with enough work credits. Whether to enroll in Part B depends on whether your employer coverage is creditable — generally, employer plans from companies with 20 or more employees count. Call 855-559-1700 if you are unsure how your work coverage affects Medicare timing.",
  },
  {
    question: "What happens if I miss my Medicare enrollment deadline?",
    answer:
      "If you miss your Initial Enrollment Period and do not qualify for a Special Enrollment Period, you must wait for the General Enrollment Period from January 1 to March 31 each year, with coverage starting the month after you enroll. You may also owe a permanent Part B late enrollment penalty that is added to your monthly premium for as long as you have Medicare. A licensed broker can review your situation at 855-559-1700.",
  }
,
  {
    question: "Can I sign up for Medicare if I'm still working at 65?",
    answer:
      "Yes. You can enroll in Medicare at 65 even if you're still working. Many people sign up for Part A since it's premium-free for those with enough work credits, and delay Part B if they have creditable employer coverage from active employment. Check with your HR department before delaying Part B to avoid a late enrollment penalty.",
  },
  {
    question: "What happens if I miss my Medicare Initial Enrollment Period?",
    answer:
      "If you miss your IEP and don't qualify for a Special Enrollment Period, you'll need to wait for the General Enrollment Period (January 1 – March 31) to sign up for Part B, with coverage starting the month after you enroll. You may also owe a permanent Part B late enrollment penalty for each 12-month period you could have had Part B but didn't. Call 855-559-1700 if you're unsure which window applies to you.",
  }
,
  {
    question: "How do I sign up for Medicare if I am not getting Social Security yet?",
    answer:
      "You can apply online at ssa.gov/medicare, which typically takes about 10 minutes. You may also call the Social Security Administration or visit a local SSA office to enroll. Apply during the 3 months before the month you turn 65 to ensure coverage starts on time.",
  },
  {
    question: "What happens if I miss my Initial Enrollment Period?",
    answer:
      "If you miss your IEP and do not qualify for a Special Enrollment Period, you will need to wait for the General Enrollment Period (January 1 – March 31) to sign up for Part B. You may also owe a permanent Part B late enrollment penalty that increases the longer you wait. Coverage from a General Enrollment Period sign-up begins the month after you enroll.",
  },
  {
    question: "Do I need to sign up for Medicare if I have employer coverage?",
    answer:
      "If you or your spouse are still actively working and your employer plan is considered creditable coverage, you may delay Part B without penalty. Confirm with your HR department in writing that the coverage qualifies before delaying. When the employer coverage ends, you get an 8-month Special Enrollment Period to sign up for Part B.",
  }
,
  {
    question: "How do I sign up for Medicare if I am not getting Social Security?",
    answer:
      "You can apply online at ssa.gov/medicare, which takes about 10 minutes. You can also apply by calling Social Security or by visiting your local Social Security office. Apply during the 3 months before your 65th birthday month to make sure coverage starts on time.",
  },
  {
    question: "What happens if I miss my Initial Enrollment Period for Part B?",
    answer:
      "If you miss your IEP and do not qualify for a Special Enrollment Period, you will need to wait for the General Enrollment Period (January 1 to March 31) to sign up. You may also face a permanent Part B late enrollment penalty that is added to your monthly premium for as long as you have Medicare.",
  },
  {
    question: "Do I need to do anything to get Medicare if I am already on Social Security?",
    answer:
      "No. If you are already receiving Social Security or Railroad Retirement Board benefits, you will be automatically enrolled in Medicare Parts A and B starting the month you turn 65. Your Medicare card will arrive in the mail about 3 months before your birthday month.",
  }
,
  {
    question: "Am I automatically enrolled in Medicare at 65?",
    answer:
      "You are automatically enrolled in Medicare Parts A and B if you are already receiving Social Security or Railroad Retirement Board benefits before you turn 65. Your Medicare card will arrive in the mail about 3 months before your birthday month. If you are not yet collecting those benefits, you must sign up yourself through the Social Security Administration.",
  },
  {
    question: "How do I actually apply for Medicare?",
    answer:
      "The fastest way to apply is online at ssa.gov/medicare, which takes about 10 minutes. You can also apply by calling Social Security at 1-800-772-1213 or by visiting your local Social Security office. Medicare is administered by CMS, but enrollment is handled through the Social Security Administration.",
  },
  {
    question: "What happens if I miss my Initial Enrollment Period?",
    answer:
      "If you miss your Initial Enrollment Period and do not qualify for a Special Enrollment Period, you will need to wait for the General Enrollment Period (January 1 - March 31) to sign up for Part B. You may also owe a permanent Part B late enrollment penalty that is added to your monthly premium for as long as you have Medicare. Call 855-559-1700 if you are unsure which window applies to you.",
  }
,
  {
    question: "Can I sign up for Medicare if I'm still working?",
    answer:
      "Yes. You can enroll in Medicare at 65 even if you are still working. Many people sign up for Part A (which is premium-free for those with enough work credits) and delay Part B if they have creditable employer coverage from active employment. Confirm with your HR department before delaying any part of Medicare.",
  },
  {
    question: "What happens if I miss my Medicare Initial Enrollment Period?",
    answer:
      "If you miss your IEP and do not qualify for a Special Enrollment Period, you will need to wait for the General Enrollment Period (January 1 – March 31) to sign up. You may also owe a permanent Part B late enrollment penalty that is added to your monthly premium for as long as you have Medicare.",
  },
  {
    question: "Do I need to sign up for Medicare every year?",
    answer:
      "No. Once you are enrolled in Original Medicare, your coverage continues automatically. However, if you have a Medicare Advantage or Part D plan, you should review your plan each year during the Annual Enrollment Period (October 15 – December 7) since plan benefits, networks, and drug formularies can change.",
  }
,
  {
    question: "Can I sign up for Medicare if I am still working at 65?",
    answer:
      "Yes, you can enroll in Medicare at 65 even if you are still working. Many people sign up for Part A because it is premium-free for those with enough work credits, and delay Part B if they have creditable employer coverage from active employment. Confirm with your HR department that your group coverage qualifies before delaying Part B.",
  },
  {
    question: "What happens if I miss my Initial Enrollment Period?",
    answer:
      "If you miss your Initial Enrollment Period and do not qualify for a Special Enrollment Period, you will need to wait for the General Enrollment Period (January 1 – March 31) to sign up for Part B. You may also owe a permanent Part B late enrollment penalty that is added to your monthly premium for as long as you have Medicare.",
  },
  {
    question: "How long does it take for Medicare coverage to start after I apply?",
    answer:
      "If you apply during the 3 months before your 65th birthday, coverage typically begins the first day of your birthday month. If you apply during or after your birthday month, coverage start dates may be delayed. Applying early through ssa.gov/medicare is the best way to ensure your coverage is active on time.",
  }
,
  {
    question: "Can I sign up for Medicare online?",
    answer:
      "Yes. You can apply for Medicare online at ssa.gov/medicare in about 10 minutes. You do not need to be receiving Social Security benefits to apply, and you can start the application up to 3 months before the month you turn 65.",
  },
  {
    question: "What happens if I miss my Initial Enrollment Period?",
    answer:
      "If you miss your Initial Enrollment Period and do not qualify for a Special Enrollment Period, you will need to wait for the General Enrollment Period (January 1 – March 31) to sign up for Part B. You may also owe a permanent late enrollment penalty added to your Part B premium for as long as you have Medicare.",
  },
  {
    question: "Do I need to sign up for Medicare if I am still working?",
    answer:
      "If you have creditable health coverage through your or your spouse's active employment, you may delay Part B without penalty and enroll later through a Special Enrollment Period. Confirm with your HR department that your coverage qualifies as creditable before delaying. Most people still enroll in premium-free Part A at 65.",
  }
,
  {
    question: "Can I sign up for Medicare if I am still working at 65?",
    answer:
      "Yes. You can enroll in Medicare at 65 even if you are still working. Many people sign up for premium-free Part A and delay Part B if they have creditable employer coverage from active employment. Check with your HR department to confirm your group plan qualifies before delaying Part B.",
  },
  {
    question: "How long does it take to get my Medicare card after applying?",
    answer:
      "After applying through the Social Security Administration at ssa.gov/medicare, most people receive their red, white, and blue Medicare card in the mail within about 3 weeks. If you are automatically enrolled, the card arrives about 3 months before your 65th birthday month. You can also print a replacement card from your my Social Security account.",
  },
  {
    question: "What happens if I miss my Medicare Initial Enrollment Period?",
    answer:
      "If you miss your IEP and do not qualify for a Special Enrollment Period, you must wait for the General Enrollment Period (January 1 – March 31) to sign up for Part B, with coverage starting the month after you enroll. You may also owe a permanent Part B late enrollment penalty added to your monthly premium for as long as you have Medicare. Call 855-559-1700 if you need help reviewing your options.",
  }
,
  {
    question: "Can I sign up for Medicare if I'm still working at 65?",
    answer:
      "Yes. You can enroll in Part A at 65 even while working, and it is usually premium-free if you have enough work credits. If your employer coverage from active work is creditable, you may delay Part B without a late penalty and enroll later through a Special Enrollment Period. Call 855-559-1700 to confirm whether delaying makes sense for your situation.",
  },
  {
    question: "What happens if I miss my Medicare Initial Enrollment Period?",
    answer:
      "If you miss your IEP and don't qualify for a Special Enrollment Period, you'll need to wait for the General Enrollment Period from January 1 to March 31, with coverage starting the month after you enroll. You may also owe a permanent Part B late enrollment penalty that increases the longer you go without creditable coverage. A licensed broker can help you avoid gaps — call 855-559-1700.",
  },
  {
    question: "Is signing up for Medicare the same as choosing a plan?",
    answer:
      "No. Enrolling in Original Medicare (Parts A and B) is done through the Social Security Administration at ssa.gov/medicare. Choosing a Medicare Supplement, Part D drug plan, or Medicare Advantage plan is a separate decision made through a private insurer or licensed broker. Both steps matter to keep your out-of-pocket costs predictable.",
  }
,
  {
    question: "Can I sign up for Medicare if I am still working at 65?",
    answer:
      "Yes. You can enroll in Medicare at 65 even if you are still working. Many people sign up for premium-free Part A and delay Part B if they have creditable coverage through an active employer group health plan. Confirm with your HR department before delaying Part B to avoid a late enrollment penalty.",
  },
  {
    question: "How long does it take to get my Medicare card after applying?",
    answer:
      "After applying through the Social Security Administration at ssa.gov/medicare, most people receive their red, white, and blue Medicare card in the mail within about 2 to 3 weeks. If you are automatically enrolled, the card arrives about 3 months before your 65th birthday month.",
  },
  {
    question: "What happens if I miss my Medicare Initial Enrollment Period?",
    answer:
      "If you miss your 7-month Initial Enrollment Period and do not qualify for a Special Enrollment Period, you will need to wait for the General Enrollment Period (January 1 – March 31) to sign up for Part B. You may also face a permanent Part B late enrollment penalty added to your monthly premium for as long as you have Medicare.",
  }
,
  {
    question: "How do I actually apply for Medicare?",
    answer:
      "You can apply online at ssa.gov/medicare, which takes about 10 minutes, or by calling Social Security. You can also visit your local Social Security office in person. If you are already receiving Social Security benefits, you do not need to apply — you will be enrolled automatically in Parts A and B.",
  },
  {
    question: "What happens if I miss my Initial Enrollment Period?",
    answer:
      "If you miss your IEP and do not qualify for a Special Enrollment Period, you will need to wait for the General Enrollment Period from January 1 to March 31 each year. Coverage begins the month after you enroll. You may also owe a permanent Part B late enrollment penalty that is added to your monthly premium for as long as you have Part B.",
  },
  {
    question: "Do I need to sign up for Medicare if I have employer coverage?",
    answer:
      "If you or your spouse are still actively working and have employer health coverage, you can usually delay Part B without penalty and enroll later through a Special Enrollment Period. Most people still enroll in Part A at 65 since it is premium-free for those with enough work credits. Always confirm with your HR department that your plan counts as creditable coverage before delaying.",
  }
,
  {
    question: "Can I sign up for Medicare if I am still working at 65?",
    answer:
      "Yes. You can enroll in Medicare at 65 even while working, and many people sign up for premium-free Part A because it can coordinate with employer coverage. Whether to also take Part B depends on whether your employer plan counts as creditable coverage. Call 855-559-1700 to review your situation before making a decision.",
  },
  {
    question: "What happens if I miss my Medicare Initial Enrollment Period?",
    answer:
      "If you miss your Initial Enrollment Period and do not qualify for a Special Enrollment Period, you generally must wait for the General Enrollment Period (January 1 to March 31) to sign up for Part B. You may also owe a permanent Part B late enrollment penalty added to your monthly premium for as long as you have Medicare. A licensed broker can help you confirm whether a Special Enrollment Period applies to you.",
  },
  {
    question: "Do I sign up for Medicare through Social Security or Medicare directly?",
    answer:
      "You sign up for Medicare Parts A and B through the Social Security Administration at ssa.gov/medicare, by calling Social Security, or by visiting a local SSA office. Medicare Advantage and Part D drug plans are enrolled separately through Medicare or a licensed broker. We can walk you through both steps at 855-559-1700.",
  }
,
  {
    question: "Can I sign up for Medicare if I am still working at 65?",
    answer:
      "Yes. You can enroll in Part A at 65 even if you are still working, and it is usually premium-free if you have enough work credits. If your employer plan is considered creditable coverage, you may delay Part B without a late penalty. Confirm with your HR or benefits administrator before making a decision.",
  },
  {
    question: "What happens if I miss my Initial Enrollment Period?",
    answer:
      "If you miss your Initial Enrollment Period and do not qualify for a Special Enrollment Period, you will need to wait for the General Enrollment Period, which runs January 1 through March 31 each year. You may also owe a permanent Part B late enrollment penalty added to your monthly premium for as long as you have Medicare. Call 855-559-1700 if you are unsure which window applies to you.",
  }
,
  {
    question: "How do I actually apply for Medicare?",
    answer:
      "You apply through the Social Security Administration, not Medicare itself. The fastest way is online at ssa.gov/medicare, which takes about 10 minutes. You can also call Social Security or visit a local SSA office to apply in person.",
  },
  {
    question: "Will I be automatically enrolled in Medicare at 65?",
    answer:
      "You are automatically enrolled in Parts A and B if you are already receiving Social Security or Railroad Retirement Board benefits before turning 65. Your red, white, and blue Medicare card will arrive in the mail about three months before your birthday month. If you are not yet collecting those benefits, you must sign up yourself.",
  },
  {
    question: "What happens if I miss my Medicare Initial Enrollment Period?",
    answer:
      "If you miss your IEP and do not qualify for a Special Enrollment Period, you generally have to wait for the General Enrollment Period from January 1 to March 31 each year. You may also owe a permanent Part B late enrollment penalty that is added to your monthly premium for as long as you have Medicare. Call 855-559-1700 if you are unsure which window applies to you.",
  }
,
  {
    question: "Can I sign up for Medicare if I am still working at 65?",
    answer:
      "Yes, you can enroll in Medicare while still working. Many people sign up for Part A at 65 since it is typically premium-free, then delay Part B if they have creditable employer coverage from active employment. Check with your HR department to confirm your group coverage qualifies before delaying Part B.",
  },
  {
    question: "How long does it take to get my Medicare card after applying?",
    answer:
      "After you apply through SSA.gov, it typically takes about 2 to 4 weeks to receive your red, white, and blue Medicare card in the mail. If you are automatically enrolled because you already collect Social Security, your card arrives about 3 months before your 65th birthday. Call 855-559-1700 if you need help confirming your effective date.",
  },
  {
    question: "What happens if I miss my Initial Enrollment Period?",
    answer:
      "If you miss your Initial Enrollment Period and do not qualify for a Special Enrollment Period, you must wait for the General Enrollment Period (January 1 – March 31) to sign up for Part B. You may also owe a permanent Part B late enrollment penalty that increases your premium for as long as you have Medicare.",
  }
,
  {
    question: "Can I sign up for Medicare if I'm still working at 65?",
    answer:
      "Yes. You can enroll in Medicare at 65 even if you are still working. Many people sign up for premium-free Part A and delay Part B if they have creditable employer coverage through active employment. Confirm with your HR department before delaying Part B to avoid a late enrollment penalty.",
  },
  {
    question: "How long does it take to get my Medicare card after I apply?",
    answer:
      "After applying through SSA.gov, most people receive their red, white, and blue Medicare card in the mail within about 3 weeks. If you are automatically enrolled, your card typically arrives about 3 months before your 65th birthday. You can also print a replacement card from your My Social Security account.",
  },
  {
    question: "What happens if I miss my Medicare Initial Enrollment Period?",
    answer:
      "If you miss your IEP and don't qualify for a Special Enrollment Period, you'll need to wait for the General Enrollment Period (January 1 – March 31) to sign up for Part B, with coverage starting the month after you enroll. You may also owe a permanent Part B late enrollment penalty added to your monthly premium. Call 855-559-1700 if you missed your window — we can help you find the right next step.",
  }
,
  {
    question: "Can I sign up for Medicare if I am still working at 65?",
    answer:
      "Yes. You can enroll in premium-free Part A at 65 even if you are still working, and many people do since it has no monthly cost for those with enough work credits. Whether to enroll in Part B depends on whether your employer coverage qualifies as creditable. Confirm with your HR department before delaying Part B to avoid a late enrollment penalty.",
  },
  {
    question: "What happens if I miss my Medicare enrollment deadline?",
    answer:
      "If you miss your Initial Enrollment Period and do not qualify for a Special Enrollment Period, you will need to wait for the General Enrollment Period (January 1 through March 31) to sign up. You may also owe a permanent late enrollment penalty on Part B and possibly Part D. Call 855-559-1700 if you missed a deadline and we can help you understand your options.",
  },
  {
    question: "How long does Medicare enrollment take to process?",
    answer:
      "Online applications through SSA.gov typically take about 10 minutes to complete, and Social Security usually processes them within a few weeks. Your red, white, and blue Medicare card arrives by mail shortly after approval. If you apply during the 3 months before your 65th birthday, your coverage will start the month you turn 65.",
  }
,
  {
    question: "Can I sign up for Medicare if I am still working at 65?",
    answer:
      "Yes. You can enroll in premium-free Part A at 65 even if you are still working, and many people do since it has no monthly cost for those with enough work credits. If your employer plan is creditable, you may delay Part B without penalty until you stop working. Confirm creditable status with your HR department before delaying.",
  },
  {
    question: "How do I apply for Medicare if I am not taking Social Security yet?",
    answer:
      "You apply directly through the Social Security Administration at ssa.gov/medicare, which handles Medicare enrollment. The online application takes about 10 minutes and can be submitted up to 3 months before your 65th birthday month. You can also call Social Security or visit a local office to enroll.",
  },
  {
    question: "What happens if I miss my Initial Enrollment Period?",
    answer:
      "If you miss your IEP and do not qualify for a Special Enrollment Period, you must wait for the General Enrollment Period (January 1 – March 31) to sign up for Part B, with coverage starting the month after you enroll. You may also owe a permanent Part B late enrollment penalty that increases your premium for as long as you have Medicare. Call 855-559-1700 if you are unsure which enrollment window applies to you.",
  }
,
  {
    question: "Can I sign up for Medicare if I am still working at 65?",
    answer:
      "Yes. You can enroll in Part A at 65 even if you are still working, and it is usually premium-free if you have enough work credits. If you have creditable health coverage through your or your spouse's current employer, you may delay Part B without a late penalty and sign up later during a Special Enrollment Period.",
  },
  {
    question: "What happens if I miss my Medicare Initial Enrollment Period?",
    answer:
      "If you miss your IEP and do not qualify for a Special Enrollment Period, you will need to wait for the General Enrollment Period, which runs January 1 through March 31 each year, with coverage beginning the month after you enroll. You may also owe a permanent Part B late enrollment penalty that is added to your monthly premium for as long as you have Medicare.",
  },
  {
    question: "Do I need to sign up for Medicare every year?",
    answer:
      "No. Once you are enrolled in Original Medicare (Parts A and B), your coverage continues automatically as long as you pay any required premiums. However, if you have a Medicare Advantage or Part D plan, you can review and change it each year during the Annual Enrollment Period from October 15 through December 7.",
  }
,
  {
    question: "Can I sign up for Medicare if I'm still working at 65?",
    answer:
      "Yes. You can enroll in Medicare at 65 even if you are still working. Many people sign up for premium-free Part A and delay Part B if they have creditable employer coverage through active employment. Confirm with your HR department that your group plan qualifies as creditable before delaying Part B.",
  },
  {
    question: "What happens if I miss my Medicare Initial Enrollment Period?",
    answer:
      "If you miss your IEP and do not qualify for a Special Enrollment Period, you generally must wait for the General Enrollment Period (January 1 – March 31) to sign up for Part B, with coverage starting the month after you enroll. You may also owe a permanent Part B late enrollment penalty for each 12-month period you went without coverage.",
  },
  {
    question: "How long does Medicare enrollment take to process?",
    answer:
      "The online application at SSA.gov takes about 10 minutes to complete. Social Security typically processes Medicare applications within a few weeks and mails your red, white, and blue Medicare card once approved. You can check your application status by signing in to your my Social Security account.",
  }
,
  {
    question: "Can I sign up for Medicare if I am still working?",
    answer:
      "Yes. You can enroll in Part A at 65 even if you are still working, and it is usually free if you have enough work credits. If you have creditable employer health coverage from active employment, you may delay Part B without a late penalty and sign up later during a Special Enrollment Period.",
  },
  {
    question: "What happens if I miss my Medicare enrollment deadline?",
    answer:
      "If you miss your Initial Enrollment Period and do not qualify for a Special Enrollment Period, you must wait for the General Enrollment Period (January 1 – March 31) to sign up. You may also owe a permanent Part B late enrollment penalty that increases your premium for as long as you have Medicare.",
  },
  {
    question: "Do I need to sign up for Medicare every year?",
    answer:
      "No. Once you are enrolled in Original Medicare, your coverage continues automatically each year as long as you pay your premiums. However, if you have a Medicare Advantage or Part D drug plan, you can review and change it each fall during the Annual Enrollment Period (October 15 – December 7).",
  }
,
  {
    question: "Can I sign up for Medicare if I am still working at 65?",
    answer:
      "Yes, you can enroll in Medicare at 65 even if you are still working. Many people enroll in premium-free Part A and delay Part B if they have creditable employer coverage from active employment. Confirm with your HR department that your group plan qualifies as creditable coverage before delaying Part B to avoid a late enrollment penalty.",
  },
  {
    question: "What happens if I miss my Medicare Initial Enrollment Period?",
    answer:
      "If you miss your IEP and do not qualify for a Special Enrollment Period, you must wait for the General Enrollment Period (January 1 through March 31) to sign up. Coverage begins the month after you enroll, and you may owe a permanent Part B late enrollment penalty for each 12-month period you went without coverage.",
  },
  {
    question: "Do I sign up for Medicare through Social Security or Medicare.gov?",
    answer:
      "You enroll in Medicare Parts A and B through the Social Security Administration at ssa.gov/medicare, not through medicare.gov. Medicare.gov is used to compare and enroll in Part D drug plans, Medicare Advantage plans, and to review coverage options. Call 855-559-1700 if you would like free help comparing plans after you enroll.",
  }
,
  {
    question: "Can I sign up for Medicare if I am still working at 65?",
    answer:
      "Yes. You can enroll in Part A at 65 even if you are still working, and most people do because it is premium-free with enough work credits. If you have creditable employer health coverage from active employment, you may delay Part B without a late penalty and use a Special Enrollment Period to sign up later. Confirm with your HR department that your plan qualifies as creditable before delaying.",
  },
  {
    question: "What happens if I miss my Medicare Initial Enrollment Period?",
    answer:
      "If you miss your IEP and do not qualify for a Special Enrollment Period, you generally must wait for the General Enrollment Period from January 1 through March 31 each year, with coverage starting the month after you enroll. You may also owe a permanent Part B late enrollment penalty that increases the longer you wait. Call 855-559-1700 if you missed your window and need help understanding your options.",
  },
  {
    question: "Do I need to sign up for Medicare every year?",
    answer:
      "No. Once you enroll in Original Medicare (Parts A and B), your coverage continues automatically as long as you pay any required premiums. However, if you have a Medicare Advantage or Part D drug plan, you should review it each year during the Annual Enrollment Period (October 15 – December 7) because plan costs, networks, and drug formularies can change.",
  }
,
  {
    question: "How do I sign up for Medicare if I am not getting Social Security yet?",
    answer:
      "You can apply online at ssa.gov/medicare, which takes about 10 minutes. You can also call Social Security or visit your local SSA office. Apply during the 3 months before the month you turn 65 so your coverage starts on the first day of your birthday month.",
  },
  {
    question: "What happens if I miss my Medicare Initial Enrollment Period?",
    answer:
      "If you miss your IEP and do not have creditable employer coverage, you may have to wait for the General Enrollment Period (January 1 – March 31) to sign up for Part B. You may also owe a permanent late enrollment penalty added to your Part B premium for as long as you have Medicare. A licensed broker can help you confirm whether a Special Enrollment Period applies — call 855-559-1700.",
  },
  {
    question: "Do I need to sign up for Medicare every year?",
    answer:
      "No. Once you enroll in Medicare Part A and Part B, your coverage continues automatically each year. However, if you have a Medicare Advantage or Part D drug plan, you should review it each fall during the Annual Enrollment Period (October 15 – December 7) to make sure it still fits your needs.",
  }
,
  {
    question: "Can I sign up for Medicare online?",
    answer:
      "Yes. You can apply for Medicare online at ssa.gov/medicare in about 10 minutes, even if you are not ready to start Social Security retirement benefits. You can apply up to 3 months before the month you turn 65, and SSA will mail your red, white, and blue Medicare card after your application is processed.",
  },
  {
    question: "What happens if I miss my Initial Enrollment Period?",
    answer:
      "If you miss your IEP and do not qualify for a Special Enrollment Period, you will have to wait for the General Enrollment Period (January 1 – March 31) to sign up for Part B, with coverage starting the month after you enroll. You may also owe a permanent Part B late enrollment penalty for each 12-month period you went without coverage. Call 855-559-1700 if you missed your window and need help figuring out next steps.",
  },
  {
    question: "Do I need to sign up for Medicare if I have employer coverage?",
    answer:
      "If you or your spouse are still actively working and covered by a group health plan from an employer with 20+ employees, you can usually delay Part B without penalty and enroll later during a Special Enrollment Period. Confirm with your HR department that your plan counts as creditable coverage before delaying. Most people still enroll in Part A at 65 because it is premium-free for those with 40+ work credits.",
  }
,
  {
    question: "Can I sign up for Medicare online?",
    answer:
      "Yes. You can apply for Medicare online at ssa.gov/medicare in about 10 minutes. You can start your application up to 3 months before the month you turn 65, and you do not need to visit a Social Security office to complete the process.",
  },
  {
    question: "What happens if I miss my Medicare Initial Enrollment Period?",
    answer:
      "If you miss your IEP and do not qualify for a Special Enrollment Period, you will have to wait for the General Enrollment Period (January 1 – March 31) to sign up. You may also owe a permanent Part B late enrollment penalty that is added to your premium for as long as you have Medicare.",
  },
  {
    question: "Do I need to sign up for Medicare if I already get Social Security?",
    answer:
      "No. If you are already receiving Social Security or Railroad Retirement Board benefits before age 65, you will be automatically enrolled in Part A and Part B starting the month you turn 65. Your Medicare card will arrive in the mail about 3 months before your birthday month.",
  }
,
  {
    question: "How do I actually apply for Medicare if I'm not getting Social Security yet?",
    answer:
      "You can apply online at ssa.gov/medicare, which takes about 10 minutes. You can also apply by calling Social Security or by visiting your local Social Security office. Apply up to 3 months before the month you turn 65 so your coverage starts on time.",
  },
  {
    question: "What happens if I miss my Initial Enrollment Period?",
    answer:
      "If you miss your IEP and don't qualify for a Special Enrollment Period, you'll need to wait for the General Enrollment Period (January 1 – March 31) to sign up for Part B. You may also owe a permanent Part B late enrollment penalty added to your monthly premium for as long as you have Medicare. Call 855-559-1700 if you missed your window and need help reviewing your options.",
  },
  {
    question: "Do I need to sign up for Medicare if I have VA or TRICARE coverage?",
    answer:
      "VA benefits don't count as creditable coverage for Part B, so most veterans should still enroll in Part B during their IEP to avoid penalties and gain access to non-VA providers. TRICARE for Life requires you to enroll in both Part A and Part B to keep your TRICARE coverage after 65. Confirm your specific situation with the VA or TRICARE before delaying enrollment.",
  }
,
  {
    question: "How do I sign up for Medicare if I am not getting Social Security yet?",
    answer:
      "You can apply for Medicare online at ssa.gov/medicare, by calling Social Security, or by visiting your local Social Security office. The online application takes about 10 minutes and you can submit it up to 3 months before the month you turn 65. You do not need to be collecting Social Security retirement benefits to enroll in Medicare.",
  },
  {
    question: "What happens if I miss my Medicare Initial Enrollment Period?",
    answer:
      "If you miss your IEP and do not qualify for a Special Enrollment Period, you will have to wait for the General Enrollment Period (January 1 – March 31) to sign up for Part B. You may also owe a permanent Part B late enrollment penalty that is added to your monthly premium for as long as you have Medicare. Call 855-559-1700 if you are unsure which window applies to you.",
  },
  {
    question: "Can a broker help me sign up for Medicare?",
    answer:
      "A licensed broker cannot enroll you in Part A or Part B — that is done through Social Security at ssa.gov/medicare. However, a broker can help you understand your enrollment timing, avoid late penalties, and choose a Medicare Supplement, Advantage, or Part D plan once your Original Medicare is active. This help is free to you.",
  }
,
  {
    question: "What happens if I miss my Initial Enrollment Period?",
    answer:
      "If you miss your Initial Enrollment Period and don't qualify for a Special Enrollment Period, you'll need to sign up during the General Enrollment Period (January 1 – March 31), with coverage starting the month after you enroll. You may also owe a permanent Part B late enrollment penalty for each 12-month period you were eligible but didn't enroll. Call 855-559-1700 if you're unsure which window applies to you.",
  },
  {
    question: "Can I sign up for Medicare if I'm still working?",
    answer:
      "Yes. You can enroll in premium-free Part A at 65 even if you're still working, and many people do. If you have creditable employer coverage from active employment, you may delay Part B without penalty and use a Special Enrollment Period to sign up later. Confirm with your HR department that your plan qualifies before delaying.",
  },
  {
    question: "How do I actually apply for Medicare?",
    answer:
      "Most people apply through the Social Security Administration at ssa.gov/medicare, by calling SSA, or by visiting a local Social Security office. The online application takes about 10 minutes and you can apply up to 3 months before the month you turn 65. After enrolling, call 855-559-1700 for free help choosing a Supplement or Advantage plan.",
  }
,
  {
    question: "How do I sign up for Medicare if I'm not getting Social Security yet?",
    answer:
      "You can apply online at ssa.gov/medicare, which takes about 10 minutes. You can also apply by calling Social Security or visiting your local Social Security office. Apply up to 3 months before the month you turn 65 so your coverage starts on time.",
  },
  {
    question: "What happens if I miss my Medicare Initial Enrollment Period?",
    answer:
      "If you miss your IEP and don't qualify for a Special Enrollment Period, you'll need to wait for the General Enrollment Period (January 1 to March 31) to sign up for Part B. You may also face a permanent Part B late enrollment penalty added to your monthly premium for as long as you have Medicare. Call 855-559-1700 if you're unsure which window applies to you.",
  },
  {
    question: "Do I need to sign up for Medicare if I have employer coverage at 65?",
    answer:
      "If you have creditable coverage from active employment (yours or a spouse's), you can usually delay Part B without penalty and enroll later through a Special Enrollment Period. Most people still enroll in Part A at 65 because it's premium-free if you have enough work credits. Confirm with your HR department that your employer plan qualifies as creditable coverage before delaying.",
  }
,
  {
    question: "Can I sign up for Medicare if I'm still working at 65?",
    answer:
      "Yes, you can enroll in Medicare while still working. Many people sign up for Part A at 65 since it is premium-free for those with 40+ work credits, and delay Part B if they have creditable employer coverage from active employment. Confirm with your HR department that your group coverage qualifies as creditable before delaying Part B to avoid a late enrollment penalty.",
  },
  {
    question: "What happens if I miss my Medicare Initial Enrollment Period?",
    answer:
      "If you miss your IEP and don't qualify for a Special Enrollment Period, you'll need to wait for the General Enrollment Period (January 1 – March 31) to sign up for Part B, with coverage starting the month after you enroll. You may also owe a permanent Part B late enrollment penalty added to your monthly premium for as long as you have Medicare.",
  },
  {
    question: "How do I sign up for Medicare if I'm not getting Social Security yet?",
    answer:
      "If you're not already receiving Social Security benefits, you won't be automatically enrolled — you'll need to apply yourself. You can apply online at ssa.gov/medicare, by calling Social Security at 1-800-772-1213, or by visiting your local Social Security office. The online application typically takes about 10 minutes to complete.",
  }
,
  {
    question: "Can I sign up for Medicare if I'm still working at 65?",
    answer:
      "Yes, you can enroll in Medicare at 65 even if you're still working. Many people sign up for premium-free Part A and delay Part B if they have creditable coverage through an employer with 20 or more employees. Confirm with your HR department whether your group health plan is considered creditable before delaying Part B.",
  },
  {
    question: "How do I actually apply for Medicare?",
    answer:
      "You apply through the Social Security Administration, not Medicare directly. The fastest way is online at ssa.gov/medicare, which typically takes about 10 minutes. You can also call Social Security or visit a local office to enroll in person.",
  },
  {
    question: "What happens if I miss my Initial Enrollment Period?",
    answer:
      "If you miss your IEP and don't qualify for a Special Enrollment Period, you'll need to wait for the General Enrollment Period (January 1 – March 31) to sign up for Part B. You may also face a permanent Part B late enrollment penalty added to your monthly premium. Call 855-559-1700 if you're unsure which enrollment window applies to you.",
  }
,
  {
    question: "How do I sign up for Medicare if I am not automatically enrolled?",
    answer:
      "You can apply for Medicare online at ssa.gov/medicare, by calling Social Security, or by visiting your local Social Security office. The online application typically takes about 10 minutes. You can apply starting 3 months before the month you turn 65.",
  },
  {
    question: "What happens if I miss my Medicare Initial Enrollment Period?",
    answer:
      "If you miss your IEP and do not qualify for a Special Enrollment Period, you will have to wait for the General Enrollment Period (January 1 – March 31) to sign up for Part B. You may also owe a permanent Part B late enrollment penalty that gets added to your monthly premium for as long as you have Medicare. Call 855-559-1700 for help reviewing your options.",
  },
  {
    question: "Can a broker help me sign up for Medicare?",
    answer:
      "A licensed broker cannot enroll you in Part A or Part B — that is done through Social Security. However, a broker can walk you through the SSA enrollment process, help you decide whether to delay Part B, and compare Medicare Supplement, Advantage, and Part D plans at no cost to you.",
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
