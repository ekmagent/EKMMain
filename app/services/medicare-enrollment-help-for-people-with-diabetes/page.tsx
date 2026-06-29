import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare Enrollment Help for People With Diabetes | Free Guidance | MedicareYourself",
  description:
    "Medicare enrollment help for people with diabetes—compare plans covering insulin, CGMs, pumps & test strips. Call 855-559-1700 for free expert guidance today.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-enrollment-help-for-people-with-diabetes" },
  openGraph: {
    title:
      "Medicare Enrollment Help for People With Diabetes | Free Guidance | MedicareYourself",
    description:
      "Medicare enrollment help for people with diabetes in NJ. Learn which plans cover insulin, CGMs, and supplies. Enroll even with pre-existing conditions. Free help.",
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
      name: "Medicare Enrollment Help for People With Diabetes",
      item: "https://medicareyourself.com/services/medicare-enrollment-help-for-people-with-diabetes",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Medicare Enrollment Help for People With Diabetes",
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
  mainEntityOfPage:
    "https://medicareyourself.com/services/medicare-enrollment-help-for-people-with-diabetes",
};

const faqs = [
  {
    question: "What's the best Medicare plan for someone with diabetes?",
    answer:
      "It depends on your medications and how you manage your diabetes. If you use insulin, a CGM, or an insulin pump, a Medigap plan paired with a strong Part D plan often gives you the most predictable costs. Medicare Advantage plans can also work well but check the formulary and supplier network before enrolling. Call Anthony at 855-559-1700 for a free plan comparison based on your specific prescriptions.",
  },
  {
    question: "Does Medicare cover continuous glucose monitors (CGMs)?",
    answer:
      "Yes. Medicare Part B covers CGMs like the Dexcom and FreeStyle Libre for beneficiaries who meet certain criteria, including using insulin or having a history of problematic blood sugar levels. Your doctor will need to document medical necessity. Coverage falls under durable medical equipment (DME), so you'll want a Medicare-approved DME supplier.",
  },
  {
    question: "Can I get a Medigap plan if I already have diabetes?",
    answer:
      "Yes, if you're within your 6-month Medigap Open Enrollment Period (starting the month you turn 65 and are enrolled in Part B). During this window, insurers cannot deny you or charge more because of diabetes. Outside this window, guaranteed issue rights may still apply in certain situations. Call 855-559-1700 to check your options.",
  },
  {
    question: "What resources are available for type 2 diabetes under Medicare?",
    answer:
      "Medicare Part B covers the Medicare Diabetes Prevention Program for people at risk of type 2 diabetes, diabetes self-management training, therapeutic shoes and inserts, blood sugar monitors and test strips, and glaucoma screenings. Many of these preventive services have no cost-sharing if your doctor accepts Medicare assignment.",
  },

  {
    question: "How much does insulin cost under Medicare in 2026?",
    answer:
      "Under the Inflation Reduction Act, covered insulin is capped at $35 for a one-month supply under Medicare Part D and Part B. There is no deductible for covered insulin under Part D. Your specific insulin must be on your plan's formulary, so check before enrolling.",
  },
  {
    question: "Does Medicare cover diabetes self-management training?",
    answer:
      "Yes. Medicare Part B covers diabetes self-management training (DSMT) for beneficiaries recently diagnosed with diabetes or at risk for complications. You'll need a written referral from the doctor treating your diabetes. After meeting the Part B deductible ($283 in 2026), you typically pay 20% of the Medicare-approved amount.",
  }
,
  {
    question: "Does Medicare cover the Medicare Diabetes Prevention Program?",
    answer:
      "Yes. Medicare Part B covers the Medicare Diabetes Prevention Program (MDPP) for eligible beneficiaries at no cost to you. The program provides training on diet, exercise, and lifestyle changes to help prevent type 2 diabetes. You can find an in-person or online program through Medicare.gov, and there is no cost-sharing if you qualify.",
  }
,
  {
    question: "Does Medicare Part D cover insulin?",
    answer:
      "Yes. Medicare Part D plans cover insulin, and there is a monthly cap on what you pay for a one-month supply of each covered insulin product. Coverage details and formularies vary by plan, so it's important to confirm your specific insulin is on the plan's drug list before enrolling. Call 855-559-1700 for help comparing Part D plans based on your prescriptions.",
  },
  {
    question: "Are diabetes self-management training and supplies covered by Medicare?",
    answer:
      "Yes. Medicare Part B covers diabetes self-management training when ordered by your doctor, along with blood sugar monitors, test strips, lancets, and therapeutic shoes or inserts for people with diabetes-related foot conditions. You generally pay coinsurance after meeting the Part B deductible, and the Part B premium applies. Supplies are typically obtained through a Medicare-enrolled supplier.",
  }
,
  {
    question: "Does Medicare cover the Medicare Diabetes Prevention Program?",
    answer:
      "Yes. Medicare Part B covers the Medicare Diabetes Prevention Program (MDPP) for eligible beneficiaries at no cost to you if you qualify. The program offers training to help you make lasting diet and exercise changes to prevent type 2 diabetes. You can find an in-person or online program through medicare.gov.",
  },
  {
    question: "Will Part D cover my insulin under Medicare?",
    answer:
      "Yes. Medicare Part D plans cover insulin, and recent law caps your monthly cost-sharing for a covered insulin product. Insulin used with a traditional insulin pump is generally covered under Part B as durable medical equipment instead. Call 855-559-1700 to make sure your specific insulin is on a plan's formulary before enrolling.",
  },
  {
    question: "Are diabetes test strips and blood sugar monitors covered by Medicare?",
    answer:
      "Yes. Medicare Part B covers blood sugar monitors, test strips, lancets, and control solutions as durable medical equipment when prescribed by your doctor. You'll need to use a Medicare-enrolled DME supplier to get the lowest cost. Quantities covered may depend on whether you use insulin.",
  }
,
  {
    question: "Does Medicare cover the Medicare Diabetes Prevention Program?",
    answer:
      "Yes. Medicare Part B covers the Medicare Diabetes Prevention Program for eligible beneficiaries at no cost to you. The program provides training to make lasting diet and exercise changes and is available in person and online. You can find a program through medicare.gov.",
  }
,
  {
    question: "Does Medicare cover the Medicare Diabetes Prevention Program?",
    answer:
      "Yes. Medicare Part B covers the Medicare Diabetes Prevention Program (MDPP) for eligible beneficiaries at no cost to you if you qualify. The program provides training to make lasting diet and exercise changes to help prevent type 2 diabetes. You can find an MDPP supplier near you or join an online program through medicare.gov.",
  }
,
  {
    question: "Does Medicare cover the Medicare Diabetes Prevention Program?",
    answer:
      "Yes. Medicare Part B covers the Medicare Diabetes Prevention Program for eligible beneficiaries at risk of type 2 diabetes. The program provides training on diet and lifestyle changes to help prevent the onset of type 2 diabetes, and you pay nothing if you qualify. You can find a program near you or attend online through medicare.gov.",
  },
  {
    question: "Will Medicare Part D help with the cost of insulin?",
    answer:
      "Yes. Medicare Part D plans and Medicare Advantage plans with drug coverage include insulin on their formularies, and federal law caps what you pay for a month's supply of covered insulin. Insulin used with a traditional pump is covered under Part B as durable medical equipment instead of Part D. Call 855-559-1700 for help comparing plans based on the specific insulin you take.",
  },
  {
    question: "Can I switch Medicare plans during the year if my diabetes care changes?",
    answer:
      "In most cases, you make plan changes during the Annual Enrollment Period each fall or the Medicare Advantage Open Enrollment Period in early spring. Special Enrollment Periods may apply if you move, lose other coverage, or qualify for Extra Help. Anthony can review your current coverage and let you know if you qualify to switch — call 855-559-1700.",
  }
,
  {
    question: "Does Medicare cover insulin under Part D?",
    answer:
      "Yes. Medicare Part D plans cover insulin, and a monthly cap on insulin copays applies to covered insulin products at the pharmacy. Insulin used with a traditional insulin pump is covered under Part B as durable medical equipment instead. Call 855-559-1700 to compare Part D plans that cover your specific insulin.",
  },
  {
    question: "Is the Medicare Diabetes Prevention Program free?",
    answer:
      "Yes. Medicare Part B covers the Medicare Diabetes Prevention Program at no cost to eligible beneficiaries with prediabetes. The program provides training on diet, exercise, and behavior changes to help prevent type 2 diabetes. You can find an in-person or online program through Medicare.gov.",
  },
  {
    question: "Are diabetes test strips and lancets covered by Medicare?",
    answer:
      "Yes. Medicare Part B covers blood sugar monitors, test strips, lancets, and control solutions as durable medical equipment when ordered by your doctor. You'll typically need to use a Medicare-enrolled supplier, and standard Part B cost-sharing applies after the deductible.",
  }
,
  {
    question: "Does Medicare cover insulin and diabetes medications?",
    answer:
      "Yes. Insulin used with a traditional pump is covered under Part B as durable medical equipment, while insulin taken by injection and most oral diabetes medications are covered under Part D prescription drug plans. Under the Inflation Reduction Act, monthly cost-sharing for a covered insulin product is capped at a set amount with no deductible. Call 855-559-1700 to confirm your specific insulin is on a plan's formulary.",
  },
  {
    question: "Are diabetes test strips and lancets covered by Medicare?",
    answer:
      "Yes. Medicare Part B covers blood sugar monitors, test strips, lancets, and lancet devices as durable medical equipment when prescribed by your doctor. You'll need to use a Medicare-enrolled supplier for coverage to apply. The amount you can get each month depends on whether you use insulin.",
  },
  {
    question: "Does Medicare pay for diabetes self-management training?",
    answer:
      "Yes. Medicare Part B covers Diabetes Self-Management Training (DSMT) for beneficiaries who have been diagnosed with diabetes, when ordered by a doctor as part of your treatment plan. The program teaches you how to manage blood sugar, plan meals, and reduce risks of complications. Medical nutrition therapy is also covered for people with diabetes or kidney disease.",
  }
,
  {
    question: "Does Medicare cover the Medicare Diabetes Prevention Program?",
    answer:
      "Yes. Medicare Part B covers the Medicare Diabetes Prevention Program for eligible beneficiaries at risk of type 2 diabetes, and you pay nothing if you qualify. The program offers training to help you make lasting diet and exercise changes. You can find a program near you or attend online through medicare.gov.",
  }
,
  {
    question: "Does Medicare Part D cover insulin?",
    answer:
      "Yes. Medicare Part D plans cover insulin, and recent changes under the Inflation Reduction Act capped monthly out-of-pocket costs for covered insulin products. Coverage details vary by plan formulary, so it's important to confirm your specific insulin is included before enrolling. Call 855-559-1700 for help comparing Part D plans that cover your insulin.",
  },
  {
    question: "Does Medicare cover diabetes self-management training?",
    answer:
      "Yes. Medicare Part B covers diabetes self-management training (DSMT) when ordered by your doctor as part of your treatment plan. This training helps you learn to manage your diabetes, including monitoring blood sugar, taking medication, and making healthy lifestyle choices. You'll typically need a referral from a Medicare-enrolled provider.",
  },
  {
    question: "Are diabetic test strips and monitors covered by Medicare?",
    answer:
      "Yes. Medicare Part B covers blood sugar monitors, test strips, lancets, and lancet devices as durable medical equipment when prescribed by your doctor. You'll need to use a Medicare-enrolled DME supplier to get the lowest cost. Coverage amounts may differ depending on whether you use insulin.",
  }
,
  {
    question: "Is there help paying for insulin and other diabetes medications under Medicare?",
    answer:
      "Yes. Medicare's Extra Help program assists people with limited income and resources in paying Part D premiums, deductibles, and copayments. Insulin covered under Part D also has a monthly cost cap set by Medicare. Call 855-559-1700 to see if you qualify for Extra Help or to compare Part D plans that include your insulin.",
  }
,
  {
    question: "Does Medicare cover diabetes self-management training?",
    answer:
      "Yes. Medicare Part B covers diabetes self-management training (DSMT) for beneficiaries diagnosed with diabetes when ordered by your doctor. This training helps you learn how to manage your condition, including monitoring blood sugar, nutrition, and medication. Call 855-559-1700 to confirm whether your provider offers covered DSMT sessions.",
  },
  {
    question: "Are insulin and diabetes supplies covered under Medicare Part D?",
    answer:
      "Yes. Medicare Part D plans cover insulin and supplies like syringes, needles, alcohol swabs, and gauze used for injecting insulin. Insulin used with a traditional insulin pump is covered under Part B as durable medical equipment instead. Plan formularies vary, so it's important to review which insulins your specific Part D plan covers before enrolling.",
  },
  {
    question: "Who is eligible for the Medicare Diabetes Prevention Program?",
    answer:
      "Medicare Part B covers the Medicare Diabetes Prevention Program for beneficiaries who meet specific criteria, including a recent qualifying blood test result indicating prediabetes and a BMI at or above the threshold set by Medicare. The program provides lifestyle and behavior change training at no cost to eligible enrollees. Your doctor can help confirm whether you qualify.",
  }
,
  {
    question: "Does Medicare cover the Medicare Diabetes Prevention Program?",
    answer:
      "Yes. Medicare Part B covers the Medicare Diabetes Prevention Program (MDPP) for eligible beneficiaries at no cost to you. The program provides training on diet, exercise, and lifestyle changes to help prevent type 2 diabetes. You can find an in-person or online MDPP program through Medicare.gov.",
  },
  {
    question: "Will Medicare Part D cover my insulin?",
    answer:
      "Yes. Medicare Part D plans cover insulin, and recent federal changes have capped monthly insulin copays under Part D and Medicare Advantage drug plans. Coverage details vary by plan formulary, so it's important to confirm your specific insulin is on your plan's drug list. Call 855-559-1700 to compare Part D plans that cover your prescriptions.",
  },
  {
    question: "Are diabetes test strips and blood sugar monitors covered by Medicare?",
    answer:
      "Yes. Medicare Part B covers blood sugar monitors, test strips, lancets, and control solutions as durable medical equipment when prescribed by your doctor. You'll need to use a Medicare-approved DME supplier to get the full benefit. Quantities may vary depending on whether you use insulin.",
  }
,
  {
    question: "Does Medicare cover insulin pumps?",
    answer:
      "Yes. Medicare Part B covers insulin pumps and the insulin used in them as durable medical equipment if you meet medical necessity criteria. If you use an insulin pen, vial, or syringe instead, your insulin is covered under Part D. Call 855-559-1700 to make sure your plan covers your specific insulin and delivery method.",
  },
  {
    question: "Am I eligible for the Medicare Diabetes Prevention Program?",
    answer:
      "The Medicare Diabetes Prevention Program is a once-per-lifetime benefit covered under Part B for eligible beneficiaries with prediabetes indicators, including a qualifying A1C, fasting plasma glucose, or oral glucose tolerance test result. You'll also need a BMI at or above the program threshold and no prior diagnosis of type 1 or type 2 diabetes. There is no cost-sharing if you qualify.",
  },
  {
    question: "Does Medicare cover diabetes self-management training?",
    answer:
      "Yes. Medicare Part B covers diabetes self-management training (DSMT) for beneficiaries diagnosed with diabetes when ordered by your doctor as part of your treatment plan. This training helps you manage blood sugar, nutrition, and lifestyle changes. Coverage typically includes an initial set of hours plus follow-up training in later years.",
  }
,
  {
    question: "Does Medicare Part D cover insulin?",
    answer:
      "Yes. Medicare Part D plans cover insulin, and recent federal changes cap monthly out-of-pocket costs for covered insulin products under Part D and Medicare Advantage drug plans. Coverage and tier placement vary by plan, so it's important to check the formulary for your specific insulin before enrolling. Call 855-559-1700 for a free formulary review.",
  },
  {
    question: "Are insulin pumps covered under Medicare?",
    answer:
      "Yes. Medicare Part B covers insulin pumps as durable medical equipment (DME) when your doctor documents medical necessity, and the insulin used in the pump is also covered under Part B. You'll need to use a Medicare-approved DME supplier to get coverage. A Medigap plan can help offset the Part B coinsurance for pump supplies.",
  },
  {
    question: "Can I switch Medicare plans if my diabetes medications change?",
    answer:
      "Yes. You can review and switch your Medicare Advantage or Part D plan during the Annual Enrollment Period each fall (October 15 – December 7), with changes taking effect January 1. There's also a Medicare Advantage Open Enrollment Period from January 1 – March 31. If your medications change mid-year, special enrollment rules may apply in limited situations.",
  }
,
  {
    question: "Does Medicare Part D cover insulin?",
    answer:
      "Yes. Medicare Part D plans cover insulin, and under the Inflation Reduction Act, there is a monthly cap on what you pay for a covered insulin product. Coverage details and formularies vary by plan, so it's important to confirm your specific insulin is on the plan's drug list before enrolling. Call 855-559-1700 for help comparing Part D plans that cover your insulin.",
  }
,
  {
    question: "Does Medicare cover the Diabetes Prevention Program?",
    answer:
      "Yes. Medicare Part B covers the Medicare Diabetes Prevention Program (MDPP) for eligible beneficiaries at risk of type 2 diabetes. The program provides training on diet and exercise changes designed to last, and there is no cost-sharing if you qualify. You can find an in-person or online program through Medicare.gov.",
  }
,
  {
    question: "Does Medicare cover insulin for people with diabetes?",
    answer:
      "Yes. Medicare Part D covers insulin taken by injection, and Part B covers insulin used with a traditional insulin pump as durable medical equipment. Thanks to recent changes, out-of-pocket costs for a month's supply of covered insulin are capped under Part D. Call 855-559-1700 to compare Part D plans that include your specific insulin.",
  },
  {
    question: "Are diabetes supplies like test strips and lancets covered by Medicare?",
    answer:
      "Yes. Medicare Part B covers blood sugar monitors, test strips, lancets, and control solutions as durable medical equipment when prescribed by your doctor. You'll typically pay coinsurance after meeting the Part B deductible, and you must use a Medicare-enrolled supplier. Therapeutic shoes and inserts are also covered for those who qualify.",
  },
  {
    question: "Can I switch Medicare plans if my diabetes medications change?",
    answer:
      "Yes, during the Annual Enrollment Period from October 15 to December 7, you can change your Medicare Advantage or Part D plan for any reason, including formulary changes. You may also qualify for a Special Enrollment Period in certain situations. Call 855-559-1700 for help reviewing whether your current plan still fits your prescriptions.",
  }
,
  {
    question: "Does Medicare Part D cover insulin?",
    answer:
      "Yes. Medicare Part D plans cover insulin, and under the Inflation Reduction Act, the monthly copay for a covered insulin product is capped. Insulin used with a traditional pump is covered under Part B as durable medical equipment instead of Part D. Call 855-559-1700 to make sure your specific insulin is on your plan's formulary before enrolling.",
  },
  {
    question: "Are diabetes self-management training and nutrition counseling covered?",
    answer:
      "Yes. Medicare Part B covers Diabetes Self-Management Training (DSMT) when ordered by your doctor, as well as Medical Nutrition Therapy (MNT) for people with diabetes or kidney disease. These services help you learn how to monitor blood sugar, manage medications, and plan meals. Your doctor must provide a written referral for these benefits.",
  },
  {
    question: "Will Medicare pay for therapeutic shoes if I have diabetes?",
    answer:
      "Yes. Medicare Part B covers one pair of therapeutic shoes and inserts per calendar year for people with diabetes who meet specific medical criteria, such as having neuropathy or a history of foot ulcers. Your doctor must certify the need, and the shoes must be prescribed by a podiatrist or qualified physician and supplied by a Medicare-approved provider.",
  }
,
  {
    question: "Can I get help paying for my insulin and diabetes medications under Medicare?",
    answer:
      "Yes. The Medicare Part D Extra Help program (also called the Low Income Subsidy) helps people with limited income and resources pay for prescription drug costs, including insulin. You can apply through the Social Security Administration at ssa.gov. Call 855-559-1700 if you'd like help reviewing your eligibility and Part D options.",
  }
,
  {
    question: "Does Medicare Part D cover insulin?",
    answer:
      "Yes. Medicare Part D plans cover insulin, and under the Inflation Reduction Act, the monthly copay for a covered insulin product is capped. Insulin used in a traditional pump is covered under Part B as durable medical equipment instead. Call 855-559-1700 to confirm your specific insulin is on a plan's formulary before enrolling.",
  },
  {
    question: "Are diabetes self-management training and nutrition counseling covered?",
    answer:
      "Yes. Medicare Part B covers Diabetes Self-Management Training (DSMT) when ordered by your doctor, as well as Medical Nutrition Therapy (MNT) for people with diabetes or kidney disease. These services help you manage blood sugar, plan meals, and reduce complications. A referral from your treating physician is required.",
  },
  {
    question: "What happens if I need an insulin pump under Medicare?",
    answer:
      "External insulin pumps and the insulin used in them are covered under Medicare Part B as durable medical equipment when you meet medical necessity criteria. You'll need to use a Medicare-approved DME supplier, and your share of the cost applies after the Part B deductible is met. A Medigap plan can help cover that coinsurance.",
  }
,
  {
    question: "Does Medicare Part D cover insulin?",
    answer:
      "Yes. Medicare Part D plans cover insulin, and the Inflation Reduction Act capped monthly out-of-pocket costs for covered insulin products. Insulin used with a traditional pump is covered under Part B as durable medical equipment instead of Part D. Call 855-559-1700 to confirm your specific insulin is on a plan's formulary before enrolling.",
  }
,
  {
    question: "Does Medicare Part D cover insulin?",
    answer:
      "Yes. Medicare Part D plans cover insulin, and recent changes under the Inflation Reduction Act capped monthly out-of-pocket costs for covered insulin products. Insulin used with a traditional pump is covered under Part B instead. Call 855-559-1700 to make sure your specific insulin is on a plan's formulary before you enroll.",
  },
  {
    question: "Are diabetes supplies like test strips and lancets covered by Medicare?",
    answer:
      "Yes. Medicare Part B covers blood sugar monitors, test strips, lancets, and lancet devices as durable medical equipment when prescribed by your doctor. You'll need to use a Medicare-enrolled supplier to get coverage. Therapeutic shoes and inserts are also covered for people with diabetes who meet specific criteria.",
  }
,
  {
    question: "Does Medicare cover insulin pumps and the insulin used in them?",
    answer:
      "Yes. Medicare Part B covers external insulin pumps and the insulin used with them as durable medical equipment when your doctor documents medical necessity. You'll need to use a Medicare-approved DME supplier. Insulin taken by injection (not through a pump) is typically covered under Part D.",
  }
,
  {
    question: "Does Medicare Part D cover insulin?",
    answer:
      "Yes. Medicare Part D plans cover insulin, and recent changes have capped monthly out-of-pocket costs for covered insulin products. The specific insulin brands covered depend on each plan's formulary, so it's important to check that your prescribed insulin is included. Call 855-559-1700 to compare Part D plans that cover your specific insulin.",
  },
  {
    question: "Are insulin pumps and pump supplies covered by Medicare?",
    answer:
      "Yes. Medicare Part B covers external insulin pumps and the insulin used in them as durable medical equipment (DME) when medical necessity is documented by your doctor. You'll need to use a Medicare-approved DME supplier for both the pump and ongoing supplies. Coverage rules differ from pharmacy-dispensed insulin, which falls under Part D.",
  },
  {
    question: "Does Medicare cover diabetes self-management training?",
    answer:
      "Yes. Medicare Part B covers diabetes self-management training (DSMT) when ordered by your doctor as part of your treatment plan. This includes education on monitoring blood sugar, healthy eating, managing medications, and reducing complications. Coverage also includes medical nutrition therapy services for people with diabetes.",
  }
,
  {
    question: "Does Medicare Part D cover insulin?",
    answer:
      "Yes. Medicare Part D plans cover insulin, and recent federal changes cap the monthly cost-sharing for a covered insulin product. Coverage details vary by plan formulary, so it's important to confirm your specific insulin is on the plan's drug list. Call 855-559-1700 for a free formulary check.",
  },
  {
    question: "Are insulin pumps and pump supplies covered by Medicare?",
    answer:
      "Yes. Medicare Part B covers external insulin pumps and the insulin used in them as durable medical equipment when medical necessity is documented by your doctor. You'll need to use a Medicare-enrolled DME supplier to ensure coverage. Replacement supplies like infusion sets and reservoirs are also typically covered under Part B.",
  },
  {
    question: "Does Medicare cover diabetes self-management training?",
    answer:
      "Yes. Medicare Part B covers diabetes self-management training (DSMT) for beneficiaries recently diagnosed or at risk of complications, with a written order from your doctor. The program teaches you how to monitor blood sugar, manage medications, and plan meals. Training must be provided by a Medicare-approved program.",
  }
,
  {
    question: "Does Medicare Part D cover insulin?",
    answer:
      "Yes. Medicare Part D plans cover insulin, and the Inflation Reduction Act capped monthly out-of-pocket costs for covered insulin products. Insulin used with a traditional pump is covered under Part B as durable medical equipment instead. Call 855-559-1700 to confirm your specific insulin is on a plan's formulary before enrolling.",
  }
,
  {
    question: "Does Medicare Part D cover insulin?",
    answer:
      "Yes. Medicare Part D plans cover insulin, and under the Inflation Reduction Act, there is a monthly copay cap on covered insulin products. Insulin used with a traditional pump is covered under Part B as durable medical equipment instead of Part D. Call 855-559-1700 to confirm your specific insulin is on a plan's formulary.",
  },
  {
    question: "Are diabetes test strips and lancets covered by Medicare?",
    answer:
      "Yes. Medicare Part B covers blood sugar monitors, test strips, lancets, and lancet devices as durable medical equipment when prescribed by your doctor. You'll need to use a Medicare-enrolled supplier, and quantity limits may apply based on whether you use insulin. Some Medicare Advantage plans offer expanded supply benefits.",
  },
  {
    question: "Does Medicare cover diabetic shoes and inserts?",
    answer:
      "Yes. Medicare Part B covers one pair of therapeutic shoes and inserts per calendar year for people with diabetes who meet certain conditions, such as having diabetic foot ulcers or neuropathy. Your doctor must certify the medical need, and the shoes must be prescribed by a podiatrist or qualified provider and fitted by an approved supplier.",
  }
,
  {
    question: "Is there help paying for insulin and other diabetes medications under Medicare?",
    answer:
      "Yes. Medicare's Extra Help program assists people with limited income and resources in paying Part D premiums, deductibles, and coinsurance. People who qualify for Extra Help also avoid the Part D late enrollment penalty. You can learn more at medicare.gov or call 855-559-1700 to see if you may qualify.",
  }
,
  {
    question: "Is there help paying for insulin and other diabetes medications under Medicare?",
    answer:
      "Yes. Medicare's Extra Help program assists people with limited income and resources in paying Part D premiums, deductibles, and copayments for prescription drugs, including insulin. People who qualify for Extra Help also avoid the Part D late enrollment penalty. You can apply through Social Security or call 855-559-1700 to see if you may qualify.",
  }
,
  {
    question: "Does Medicare Part D cover insulin?",
    answer:
      "Yes. Medicare Part D plans cover insulin, and recent federal changes have capped monthly out-of-pocket costs for covered insulin products. Insulin used with a traditional insulin pump is covered under Part B as durable medical equipment instead. Call 855-559-1700 to compare Part D formularies for your specific insulin.",
  }
,
  {
    question: "Does Medicare Part D cover insulin?",
    answer:
      "Yes. Medicare Part D plans cover insulin, and recent changes cap out-of-pocket costs for a month's supply of each covered insulin product. Insulin used with a traditional insulin pump is covered under Part B as durable medical equipment instead. Call 855-559-1700 to compare Part D plans that include your specific insulin.",
  },
  {
    question: "Are diabetes test strips and lancets covered by Medicare?",
    answer:
      "Yes. Medicare Part B covers blood sugar monitors, test strips, lancets, and lancet devices as durable medical equipment when prescribed by your doctor. The quantity covered depends on whether you use insulin. You'll need to get supplies from a Medicare-enrolled DME supplier to ensure coverage.",
  },
  {
    question: "Does Medicare cover diabetes self-management training?",
    answer:
      "Yes. Medicare Part B covers diabetes self-management training (DSMT) when ordered by your doctor as part of your treatment plan. This program teaches you how to manage your condition, monitor blood sugar, eat well, and reduce risks of complications. Medical nutrition therapy is also covered for people with diabetes.",
  }
,
  {
    question: "Does Medicare Part D cover insulin?",
    answer:
      "Yes. Medicare Part D plans cover insulin, and the Inflation Reduction Act capped monthly out-of-pocket costs for covered insulin products at Part D plans and through Part B for insulin used with a pump. Each plan has its own formulary, so it's important to confirm your specific insulin is covered before enrolling. Call 855-559-1700 to review formularies side by side.",
  },
  {
    question: "Are diabetes test strips and lancets covered by Medicare?",
    answer:
      "Yes. Medicare Part B covers blood sugar monitors, test strips, lancets, and lancet devices as durable medical equipment when prescribed by your doctor. You'll typically pay the Part B coinsurance after meeting the Part B deductible. Using a Medicare-approved supplier helps keep your costs predictable.",
  },
  {
    question: "Can I switch Medicare plans if my diabetes medications change?",
    answer:
      "Yes, during the Annual Enrollment Period each fall you can switch Part D or Medicare Advantage plans to better match your current prescriptions. You may also qualify for a Special Enrollment Period in certain situations, such as moving or losing other coverage. A free annual review with a licensed broker helps confirm your plan still fits your medication list.",
  }
,
  {
    question: "Does Medicare Part D cover insulin?",
    answer:
      "Yes. Medicare Part D plans cover insulin, and recent law caps your monthly copay for covered insulin products. Insulin used with a traditional pump may be covered under Part B as durable medical equipment instead. Call 855-559-1700 to compare Part D formularies and find the plan that covers your specific insulin.",
  },
  {
    question: "Are diabetes test strips and lancets covered by Medicare?",
    answer:
      "Yes. Medicare Part B covers blood sugar monitors, test strips, lancets, and lancet devices as durable medical equipment when prescribed by your doctor. You'll need to use a Medicare-enrolled supplier to get the lowest cost. Quantities may vary depending on whether you use insulin.",
  },
  {
    question: "Can I switch Medicare plans if my diabetes medications change?",
    answer:
      "Yes, you can change Medicare Advantage or Part D plans during the Annual Enrollment Period (October 15 – December 7) each year. If your new prescriptions aren't well-covered by your current plan, switching can lower your out-of-pocket costs. Anthony can review your current plan against your updated medication list at no charge.",
  }
,
  {
    question: "Does Medicare Part D cover insulin?",
    answer:
      "Yes. Medicare Part D plans cover insulin, and under the Inflation Reduction Act, out-of-pocket costs for a month's supply of covered insulin are capped. Insulin used with a traditional pump may be covered under Part B as durable medical equipment instead. Call 855-559-1700 to compare Part D plans that include your specific insulin.",
  },
  {
    question: "Are diabetes test strips and lancets covered by Medicare?",
    answer:
      "Yes. Medicare Part B covers blood sugar monitors, test strips, lancets, and lancet devices as durable medical equipment when prescribed by your doctor. You'll need to use a Medicare-enrolled supplier, and quantities may depend on whether you use insulin. Some Medicare Advantage plans may offer additional supplies through preferred suppliers.",
  },
  {
    question: "Can I get help paying for diabetes medications if I'm on a fixed income?",
    answer:
      "Yes. The Extra Help program (also called the Low Income Subsidy) helps pay for Part D premiums, deductibles, and copays for prescription drugs including insulin. Medicare Savings Programs run by your state can also help cover Part A and Part B premiums. Call 855-559-1700 and we'll help you determine if you qualify.",
  }
,
  {
    question: "Does Medicare cover insulin and diabetes supplies?",
    answer:
      "Yes. Medicare Part D covers insulin used with injection pens or syringes, while Part B covers insulin used with a Medicare-covered insulin pump as durable medical equipment. Part B also covers blood sugar test strips, lancets, and glucose monitors. Call 855-559-1700 to review plans that include your specific insulin and supplies.",
  },
  {
    question: "Are there programs to help lower my Medicare costs if I have diabetes?",
    answer:
      "Yes. Medicare Savings Programs run by your state can help pay Part A and Part B premiums, deductibles, and copays, and Extra Help (Low Income Subsidy) can lower your Part D prescription drug costs. Eligibility is based on income and resources. You can learn more at medicare.gov/basics/costs/help or call 855-559-1700 for guidance.",
  },
  {
    question: "Will switching Medicare plans disrupt my diabetes care?",
    answer:
      "It can if you don't plan carefully. Formularies, preferred pharmacies, and DME suppliers vary by plan, so your insulin tier or CGM supplier could change. Before switching, we verify that your medications, doctors, and supply providers are covered under the new plan to avoid gaps in your diabetes care.",
  }
];

export default function MedicareEnrollmentHelpDiabetes() {
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
          Medicare Enrollment Help for People With Diabetes
        </span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Medicare Enrollment Help for People With Diabetes
        </h1>

        <Image
          src="/images/medicare-enrollment-help-for-people-with-diabetes_vector.webp"
          alt="Medicare enrollment help for people with diabetes"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Medicare enrollment help for people with diabetes starts with one
          question: which plans actually cover what you use every day? Between
          insulin costs, CGM coverage denials, and underwriting worries, picking
          the wrong plan can cost you thousands or leave you fighting for
          supplies you need to stay alive.
        </p>
        <p className="text-lg mb-6">
          I'm Anthony Orner, a licensed Medicare broker in NJ, and I help
          diabetic clients sort through this every week. No cost to you, ever.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How diabetes affects your Medicare Supplement underwriting options
          </h2>
          <p className="mb-2">
            Outside of guaranteed issue periods, most Medigap carriers ask health
            questions. A diabetes diagnosis can mean higher premiums or outright
            denial depending on the carrier and your treatment history.
          </p>
          <p>
            That's why timing matters so much. Your best window is the 6-month
            Medigap Open Enrollment Period that starts the month you turn 65 and
            have Part B. During those six months, no carrier can turn you down or
            charge more because of diabetes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Which Medicare plans cover insulin, CGMs, and diabetic supplies
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Part B</strong> covers CGMs (Dexcom, FreeStyle Libre),
              insulin pumps, blood sugar monitors, and test strips as durable
              medical equipment.
            </li>
            <li>
              <strong>Part D</strong> covers injectable and inhaled insulin.
              Under the Inflation Reduction Act, insulin copays are capped at
              $35/month for Part D enrollees.
            </li>
            <li>
              <strong>Part B also covers</strong> diabetes self-management
              training, therapeutic shoes, and the Medicare Diabetes Prevention
              Program for those at risk of type 2.
            </li>
          </ul>
          <p className="mt-2">
            The catch: not every Part D plan covers your specific insulin brand
            at the same tier. I check formularies before recommending anything.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Guaranteed issue periods that bypass health questions
          </h2>
          <p className="mb-2">
            Federal guaranteed issue rights let you enroll in certain Medigap
            plans without medical underwriting. Common triggers include:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Losing employer or union group coverage</li>
            <li>Your Medicare Advantage plan leaves your area</li>
            <li>Your Medigap carrier goes bankrupt</li>
            <li>
              Dropping a Medicare Advantage plan within 12 months of first
              enrolling
            </li>
          </ul>
          <p className="mt-2">
            If any of these apply to you, diabetes won't be a barrier to getting
            a Medigap plan. But the window is narrow, so don't wait.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            The real cost of picking the wrong plan
          </h2>
          <p className="mb-2">
            I talk to diabetics who chose a plan based on a low premium, then got
            hit with surprise costs for CGM sensors or found their insulin at a
            non-preferred tier. Others had coverage denials for equipment they'd
            used for years.
          </p>
          <p>
            Your Part B deductible in 2026 is $283/year. The Part A deductible
            is $1,676 per benefit period. Without the right supplemental
            coverage, one hospitalization for a diabetic complication can be
            devastating.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Medicare Advantage vs. Medigap for diabetics
          </h2>
          <p className="mb-2">
            Medicare Advantage plans often include Part D drug coverage and
            extras like vision. But they use provider networks, which means your
            endocrinologist and DME supplier need to be in-network.
          </p>
          <p>
            Medigap plans paired with standalone Part D give you more freedom to
            see any provider who accepts Medicare. For people managing diabetes
            with specialists and specific devices, that flexibility can matter
            more than a $0 premium.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How Anthony helps diabetic clients find affordable coverage
          </h2>
          <p className="mb-2">
            I pull your current medications, check every formulary, verify your
            doctors and suppliers are covered, and identify any guaranteed issue
            rights you may have. Then I show you the actual numbers side by side.
          </p>
          <p>
            No pressure. No cost. I work with multiple carriers so the
            recommendation fits your situation, not a sales quota. Call
            855-559-1700 or use the link below to get started.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-6 text-center mb-10">
          <p className="text-xl font-semibold mb-2">
            Ready to find a plan that covers your diabetes needs?
          </p>
          <p className="mb-4">
            Call{" "}
            <a href="tel:855-559-1700" className="underline font-bold">
              855-559-1700
            </a>{" "}
            or{" "}
            <Link href="/quote" className="underline font-bold">
              Get a Free Quote
            </Link>
          </p>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
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
                href="/learn/medicare-parts-explained"
                className="text-blue-600 hover:underline"
              >
                How Medicare Part D Covers Prescription Drugs
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-supplement/new-jersey"
                className="text-blue-600 hover:underline"
              >
                Guaranteed Issue Rights for Medigap Plans
              </Link>
            </li>
            <li>
              <Link
                href="/services/how-to-enroll-in-medicare-in-new-jersey"
                className="text-blue-600 hover:underline"
              >
                Medicare Enrollment Help in New Jersey
              </Link>
            </li>
                      <li>
              <Link
                href="/services/best-medicare-plan-for-chronic-conditions"
                className="text-blue-600 hover:underline"
              >
                Best Medicare Plan For Chronic Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-people-with-pre-existing-conditions"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For People With Pre Existing Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/services/you-get-a-medicare-supplement-plan-if-you-have-a-pre-existing-condition"
                className="text-blue-600 hover:underline"
              >
                You Get A Medicare Supplement Plan If You Have A Pre Existing Condition
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
                href="/services/medicare-enrollment-help-for-people-with-diabetes-texas"
                className="text-blue-600 hover:underline"
              >
                Medicare Enrollment Help For People With Diabetes Texas
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-enrollment-help-for-people-with-lupus"
                className="text-blue-600 hover:underline"
              >
                Medicare Enrollment Help For People With Lupus
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-enrollment-help-for-people-with-lupus-california"
                className="text-blue-600 hover:underline"
              >
                Medicare Enrollment Help For People With Lupus California
              </Link>
            </li>
</ul>
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/coverage/medicare-diabetes-prevention-program" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">Medicare Diabetes Prevention Program (Medicare.gov)</a> and <a href="https://www.medicare.gov/coverage/continuous-glucose-monitors" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">CGM coverage under Part B</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For free, unbiased counseling, contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free local Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Free state counseling: <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a></div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need one-on-one local help? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased Medicare counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free Medicare counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
      </article>
    </>
  );
}