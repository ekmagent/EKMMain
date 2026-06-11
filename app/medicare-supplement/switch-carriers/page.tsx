import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Switch Medigap Carriers, Same Plan G (2026)",
  description:
    "Switch Medigap Plan G carriers and keep identical federal benefits at a lower premium. Free carrier comparison in NJ & 34 states — call 855-559-1700 today.",
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
,
  {
    question: "Is there a free-look period when I switch Medigap policies?",
    answer:
      "Yes. When you buy a new Medigap policy, you have a 30-day free-look period to decide if you want to keep it. During that window you can cancel the new policy and stay on your old one. To avoid paying two premiums at once, it is best to keep your old policy active until you have been approved for the new one and decided to keep it.",
  },
  {
    question: "Will I have to answer health questions when switching Medigap carriers?",
    answer:
      "In most cases, yes. Under federal law you generally do not have the right to switch Medigap policies outside your 6-month Medigap Open Enrollment Period unless you qualify for a guaranteed issue right. Some states offer additional protections, so it is worth checking with your State Insurance Department or a licensed broker before applying.",
  },
  {
    question: "Do I need to cancel my old Medigap plan before applying for a new one?",
    answer:
      "No, and you should not. Apply for the new policy first and wait until it is approved and in force before canceling your existing Medigap plan. This protects you from a coverage gap if the new carrier declines your application during underwriting.",
  }
,
  {
    question: "Do I need to answer health questions to switch Medigap carriers?",
    answer:
      "In most states, yes. Outside your 6-month Medigap Open Enrollment Period, carriers can use medical underwriting to approve or decline your application based on health. Some states offer additional opportunities to switch without underwriting, and federal Guaranteed Issue rights apply in specific situations like losing employer coverage. Contact your State Insurance Department or a licensed broker to confirm the rules where you live.",
  }
,
  {
    question: "Do I have a federal right to switch Medigap policies at any time?",
    answer:
      "In most cases, no. Under federal law, you generally only have the right to switch Medigap policies during your 6-month Medigap Open Enrollment Period or when you qualify for a guaranteed issue right. Outside of those windows, carriers in most states can use medical underwriting and deny your application. Some states offer additional switching rights beyond federal law, so it's worth checking with your State Insurance Department.",
  },
  {
    question: "What happens to my old Medigap policy when I switch carriers?",
    answer:
      "You keep your existing Medigap policy active until your new policy is approved and in force. Once the new carrier confirms your start date, you contact the old carrier to cancel — never cancel first. Medicare also allows a 30-day free look period on the new policy so you can compare it to your old plan before fully committing.",
  }
,
  {
    question: "Will I have to answer health questions to switch Plan G carriers?",
    answer:
      "In most cases, yes. Under federal law, you only have a guaranteed right to switch Medigap policies during your 6-month Medigap Open Enrollment Period or if you qualify for a specific guaranteed issue right, such as losing other coverage or your carrier leaving the market. Outside of those windows, carriers in most states can use medical underwriting and deny your application based on health history. A broker can pre-screen the health questions before you formally apply.",
  },
  {
    question: "What happens to my old Medigap policy when I switch?",
    answer:
      "You should never cancel your existing Medigap policy until the new one is approved and active. Once your new Plan G start date is confirmed in writing, you contact the old carrier to cancel — typically the day before the new policy begins so there is no gap. Medicare itself does not need to be notified; the carriers handle the transition.",
  },
  {
    question: "Is there a free look period when I switch Medigap carriers?",
    answer:
      "Yes. When you buy a new Medigap policy you generally get a 30-day free look period to review the coverage. During that window you can cancel the new policy and keep your old one if you kept it active during the overlap. You'll pay both premiums for the overlap month, but it protects you from being stranded if something goes wrong with the new application.",
  }
,
  {
    question: "Do I need to answer health questions when switching Medigap carriers?",
    answer:
      "In most states, yes — outside of your 6-month Medigap Open Enrollment Period or a Guaranteed Issue situation, federal law does not give you the right to switch Medigap policies without underwriting. That means the new carrier can ask health questions and may decline your application based on your health history. A few states (like New York and Connecticut) have year-round guaranteed issue rules, so the answer depends on where you live. Call 855-559-1700 to check the rules in your state.",
  }
,
  {
    question: "Will I need to answer health questions to switch Medigap carriers?",
    answer:
      "In most cases, yes. Under federal law, you only have a guaranteed right to switch Medigap policies during your 6-month Medigap Open Enrollment Period or if you qualify for a specific guaranteed issue right, such as losing other coverage or your plan leaving the market. Outside of those windows, carriers in most states can use medical underwriting to approve or deny your application. A broker can pre-screen the health questions before you apply so you only submit to carriers likely to approve you.",
  }
,
  {
    question: "Do I have a federal right to switch Medigap policies any time?",
    answer:
      "In most cases, no. Under federal law, you generally have the right to switch Medigap policies only during your 6-month Medigap Open Enrollment Period or if you qualify for a guaranteed issue right. Outside those windows, carriers in most states can use medical underwriting and decline your application based on health.",
  },
  {
    question: "What happens to my old Medigap policy when I switch carriers?",
    answer:
      "You should not cancel your existing Medigap policy until the new one is approved and active. Most carriers also give you a 30-day free look period to review the new policy after it starts. If you cancel during that window, you can return to your previous coverage without penalty in many cases.",
  },
  {
    question: "Will I have to answer health questions to switch Plan G carriers?",
    answer:
      "Usually yes, unless you are still in your initial 6-month Medigap Open Enrollment Period or qualify for a guaranteed issue right such as losing other coverage or moving out of a plan's service area. Carriers review prescriptions and medical history before approving. A licensed broker can pre-screen your health profile and match you with carriers most likely to accept your application.",
  }
,
  {
    question: "What is a Medigap guaranteed issue right when switching carriers?",
    answer:
      "Guaranteed issue rights are specific situations where an insurance company must sell you a Medigap policy without medical underwriting. Common triggers include your current Medigap carrier going bankrupt, losing employer retiree coverage, or moving out of a Medicare Advantage plan's service area. In these situations you cannot be denied or charged more due to health conditions, but you typically have only 63 days to apply.",
  },
  {
    question: "Will I have a waiting period for pre-existing conditions if I switch Medigap carriers?",
    answer:
      "If you have had your current Medigap policy for at least 6 months and you switch to a new Medigap policy with the same or fewer benefits, the new carrier generally cannot impose a new pre-existing condition waiting period. This is one reason switching between two Plan G policies is usually seamless. Always confirm with the new carrier in writing before canceling your existing plan.",
  },
  {
    question: "Should I cancel my old Medigap policy before the new one starts?",
    answer:
      "No. You should never cancel your existing Medigap policy until the new policy is approved and the effective date is confirmed in writing. Medicare also gives you a 30-day 'free look' period on the new policy so you can review it before fully committing. Once the new plan is active and you are satisfied, contact the old carrier to cancel.",
  }
,
  {
    question: "Will I have to answer health questions to switch Medigap carriers?",
    answer:
      "In most states, yes — unless you are still in your 6-month Medigap Open Enrollment Period or qualify for a guaranteed issue right. Outside of those windows, carriers can use medical underwriting and decline your application based on health history. A broker can help you identify which carriers have the most lenient underwriting in your state before you apply.",
  },
  {
    question: "What happens to my old Medigap policy when I switch?",
    answer:
      "You should never cancel your existing Medigap policy until your new policy has been approved and is in effect. Medicare allows a 30-day 'free look' period when you start a new Medigap policy, during which you can keep both policies briefly to make sure you want to continue with the new one. You will pay both premiums during that overlap, then cancel the old policy.",
  }
,
  {
    question: "Do I have a federal right to switch Medigap policies whenever I want?",
    answer:
      "In most cases, no. Under federal law you generally can only switch Medigap policies during your 6-month Medigap Open Enrollment Period or if you qualify for a guaranteed issue right, such as your current carrier leaving the market or you moving out of its service area. Some states offer additional opportunities to switch, so it is worth checking with your State Insurance Department or a licensed broker before applying.",
  }
,
  {
    question: "Do I have a federal right to switch Medigap policies at any time?",
    answer:
      "In most cases, no. Under federal law you have a right to switch Medigap policies during your 6-month Medigap Open Enrollment Period or if you qualify for a guaranteed issue right. Outside of those windows, carriers in most states can use medical underwriting to approve or deny your application. Some states have additional protections, so it's worth checking with a licensed broker before assuming you can or cannot switch.",
  },
  {
    question: "What happens to my old Medigap policy when I switch carriers?",
    answer:
      "You should not cancel your existing Medigap policy until the new one is approved and in force. Most new carriers offer a 30-day free look period during which you can review the new policy. Once the new coverage is active and you're satisfied, you contact the old carrier directly to cancel and set the termination date so there is no gap or overlap in coverage.",
  },
  {
    question: "Will I have to answer health questions to switch Plan G carriers?",
    answer:
      "Usually yes, unless you are still in your 6-month Medigap Open Enrollment Period or qualify for a guaranteed issue right. Most carriers ask a short list of health questions and may review prescription history. If you are reasonably healthy, approval is typically straightforward; if you have certain conditions, a broker can identify which carriers have more lenient underwriting in your state.",
  }
,
  {
    question: "Will I have to answer health questions when switching Medigap carriers?",
    answer:
      "In most states, yes — once you are outside your 6-month Medigap Open Enrollment Period, carriers can use medical underwriting and ask about your health history. Federal law only guarantees you the right to switch in specific situations, such as your current plan leaving the market or losing other coverage. If you qualify under one of these guaranteed issue rights, carriers cannot deny you or charge more based on health.",
  },
  {
    question: "What happens to my old Medigap plan when I switch?",
    answer:
      "You should never cancel your existing Medigap policy until the new one is approved and active. Once your new plan's effective date arrives, you contact the old carrier and request cancellation. Medicare allows a 30-day free-look period on the new policy, during which you can return to the old plan if you act quickly.",
  },
  {
    question: "Does switching Medigap carriers restart any waiting periods?",
    answer:
      "If you had your original Medigap policy for at least 6 months, the new carrier generally cannot impose a new pre-existing condition waiting period when you switch to the same or lesser benefits. However, if you are adding benefits not in your previous plan, a waiting period of up to 6 months can apply to those new benefits. A broker can confirm how this rule applies to your specific switch.",
  }
,
  {
    question: "Will I have to answer health questions to switch Medigap carriers?",
    answer:
      "In most states, yes — outside of your initial 6-month Medigap Open Enrollment Period or a federal guaranteed issue situation, carriers can use medical underwriting and may decline your application based on health. A few states have additional rules that make switching easier. A licensed broker can review your health history first and only submit to carriers likely to approve you.",
  },
  {
    question: "Does my new Medigap policy start before the old one ends?",
    answer:
      "You should never cancel your existing Medigap policy until the new one is approved and active. Medicare.gov recommends keeping the old policy in force during the 30-day 'free look' period on the new policy so you can compare them side by side. Once you're confident in the new coverage, you contact the old carrier to cancel and request a refund of any unused premium.",
  },
  {
    question: "Do I need to re-enroll in Medicare Part B to switch Medigap carriers?",
    answer:
      "No. Your Original Medicare (Parts A and B) stays exactly the same when you switch Medigap carriers. Only the supplement policy changes. Your doctors, hospitals, and Medicare claims process all continue without interruption.",
  }
,
  {
    question: "Do I have to answer health questions when switching Medigap carriers?",
    answer:
      "In most states, yes — outside your 6-month Medigap Open Enrollment Period or a guaranteed issue situation, carriers can use medical underwriting and may decline your application based on health history. Some states (like New York and Connecticut) have year-round guaranteed issue rules, and others offer birthday or anniversary rules that let you switch without underwriting. Your broker can confirm what applies in your state before you apply.",
  },
  {
    question: "Will I have a gap in coverage when I switch Medigap plans?",
    answer:
      "No, a proper switch is designed to avoid any coverage gap. You apply to the new carrier first, wait for approval, and only cancel the old policy once the new one has an active effective date. Medicare itself continues to pay its share the entire time, and the new Medigap policy picks up the secondary coverage on day one. Call 855-559-1700 if you want help timing the transition.",
  },
  {
    question: "Is there a free-look period if I switch Medigap policies?",
    answer:
      "Yes. When you buy a new Medigap policy, you have a 30-day free-look period during which you can decide whether to keep it. You'll need to pay both premiums for that month, but if you cancel the new policy within 30 days you can keep your original coverage. This protects you when testing a switch to a lower-priced carrier.",
  }
,
  {
    question: "Will I need to answer medical questions to switch Medigap carriers?",
    answer:
      "In most states, yes — if you are switching outside your 6-month Medigap Open Enrollment Period or a Guaranteed Issue situation, the new carrier can require medical underwriting. That means they can ask about your health history and prescriptions, and they can decline your application. A few states have more generous switching rules, so it is worth checking with your state insurance department or a licensed broker before applying.",
  },
  {
    question: "What happens to my old Medigap policy when I switch?",
    answer:
      "You should never cancel your existing Medigap policy until the new one is fully approved and has an active start date. Once approved, you notify your old carrier in writing to cancel, and Medicare also gives you a 30-day free look period to try the new policy. If you cancel within that window, you can return to your previous coverage without penalty in most cases.",
  },
  {
    question: "Do I lose any waiting period credit when I switch Medigap carriers?",
    answer:
      "If you had your previous Medigap policy for at least 6 months, the new carrier generally cannot impose a new pre-existing condition waiting period when you switch to the same or lesser benefits. This protection is part of federal Medigap rules. Your licensed broker can confirm how the rule applies to your specific switch.",
  }
,
  {
    question: "Do I have a 30-day free look period when switching Medigap policies?",
    answer:
      "Yes. Federal law gives you a 30-day free look period when you buy a new Medigap policy. During this window you can decide whether to keep the new plan, but you must pay premiums for both the old and new policy for one month. After confirming the new policy works for you, cancel the old one to avoid paying double premiums going forward.",
  },
  {
    question: "Will I have to answer health questions to switch carriers?",
    answer:
      "In most states, yes — outside of your 6-month Medigap Open Enrollment Period or a guaranteed issue situation, carriers can require medical underwriting and may decline coverage based on your health history. Some states offer additional rights that allow switching without underwriting, so it is worth contacting your State Insurance Department or a licensed broker to confirm your options.",
  },
  {
    question: "Should I cancel my old Medigap policy before the new one starts?",
    answer:
      "No. Always wait until your new Medigap policy is approved and in force before canceling the old one. This prevents any gap in coverage and protects you if the new application is delayed. Once the new policy's effective date arrives and you have confirmed it during the free look period, contact the old carrier to cancel.",
  }
,
  {
    question: "Will I have to answer health questions to switch Medigap carriers?",
    answer:
      "In most states, yes — once you are outside your 6-month Medigap Open Enrollment Period, carriers can use medical underwriting and ask about your health history. If you qualify for a federal guaranteed issue right (such as losing prior coverage or moving out of a plan's service area), you can switch without underwriting. A broker can pre-screen your health profile against carrier guidelines before you formally apply so you know your odds of approval.",
  }
,
  {
    question: "Will I have to answer health questions to switch Plan G carriers?",
    answer:
      "In most states, yes — once your 6-month Medigap Open Enrollment Period has ended, carriers can use medical underwriting to approve or decline your application. Exceptions apply if you qualify for a federal Guaranteed Issue right, such as losing employer coverage or your current carrier leaving the market. A broker can pre-screen your health profile against each carrier's underwriting guidelines before you apply, so you only submit to carriers likely to approve you.",
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
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medigap switching guidance from <a href="https://www.state.nj.us/dobi/division_insurance/ship/ship.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or the free <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">SHIP program</a> for unbiased Medigap switching guidance.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can confirm state-specific Medigap switching rules with the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or free <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP counseling</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific switching rules, see the <a href="https://www.state.nj.us/dobi/division_insurance/ihcseh/medsupp.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance — Medicare Supplement</a> resources or contact your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">SHIP counselor</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Contact <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or your local <a href="https://www.shiphelp.org/about-medicare/regional-ship-location" rel="noopener noreferrer" target="_blank" className="underline">SHIP counselor</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-level help? Contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">New Jersey Department of Banking and Insurance</a> or your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">SHIP counselor</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Free unbiased help in New Jersey: <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need free, unbiased help in your state? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> or the <a href="https://www.nj.gov/dobi/division_insurance/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey Department of Banking and Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can verify state-specific Medigap switching rules with the <a href="https://www.state.nj.us/dobi/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey Department of Banking and Insurance</a> or get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medigap counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need free state-level help? Contact <a href="https://www.state.nj.us/dobi/division_insurance/ship/shipmain.htm" rel="noopener noreferrer" target="_blank" className="underline">New Jersey SHIP (State Health Insurance Assistance Program)</a> for unbiased Medigap counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Free unbiased help in New Jersey: <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can verify carrier rates and switching rules with the <a href="https://www.nj.gov/dobi/division_insurance/managedcare/shipinfo.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> or contact the <a href="https://www.state.nj.us/dobi/" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medigap counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> before switching carriers.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> before switching carriers.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medigap counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> before switching carriers.</div>
      </section>
    </>
  );
}
