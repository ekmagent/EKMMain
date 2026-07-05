import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare supplement premiums increasing by double digits in 2025 | Free Rate Review | MedicareYourself",
  description:
    "Medigap premiums rising by double digits in 2025? Compare carriers with identical benefits and lower your rate. Free review — call 855-559-1700 today.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-supplement-premiums-increasing-by-double-digits-in-2025" },
  openGraph: {
    title:
      "medicare supplement premiums increasing by double digits in 2025 | Free Rate Review | MedicareYourself",
    description:
      "Medicare Supplement premiums increasing by double digits in 2025 — see which carriers raised rates and how switching could save you $50+/month. Free review.",
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
      name: "Medicare Supplement Premiums Increasing by Double Digits in 2025",
      item: "https://medicareyourself.com/services/medicare-supplement-premiums-increasing-by-double-digits-in-2025",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Supplement Premiums Increasing by Double Digits in 2025: Why It's Happening and How to Respond",
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
    question:
      "How much will Medicare Supplement premiums increase in 2026?",
    answer:
      "No one can predict exact 2026 rates yet. However, if medical claim trends stay elevated, expect continued increases in the 5-15% range for many carriers. A free rate review before your renewal can help you find a lower-cost option.",
  },
  {
    question: "How much does a Medicare Supplement cost in 2025?",
    answer:
      "Plan G premiums in 2025 range from roughly $100 to $300+ per month depending on your age, ZIP code, gender, tobacco use, and carrier. The same plan letter covers the same benefits regardless of carrier, so price shopping matters.",
  },
  {
    question: "Can I switch Medigap plans without underwriting?",
    answer:
      "In most states, switching carriers outside your initial Medigap Open Enrollment Period requires medical underwriting. Some states offer additional protections. Federal guaranteed issue rights apply in specific situations like losing employer coverage or a carrier leaving your area.",
  },
  {
    question: "Why are some carriers raising rates more than others?",
    answer:
      "Each carrier files rates based on its own claims experience. A carrier with an older or sicker pool of policyholders will raise rates faster. Newer market entrants often have lower rates because their risk pool hasn't aged yet.",
  },

  {
    question: "Does my Medicare Supplement plan automatically renew if my premium increases?",
    answer:
      "Yes. Medigap policies sold today are guaranteed renewable, meaning the carrier cannot cancel your coverage as long as you pay your premium. A rate increase does not change your benefits, but it is a good reason to compare other carriers offering the same plan letter.",
  },
  {
    question: "What should I do if I get a double-digit rate increase letter?",
    answer:
      "Don't cancel your current plan until you have a new one approved. Request a free rate review to compare carriers offering the identical plan letter at a lower price. If you can pass medical underwriting, switching carriers may lock in significant savings without changing your benefits.",
  }
,
  {
    question: "What should I do if I receive a rate increase notice from my Medigap carrier?",
    answer:
      "Don't panic or cancel your policy. Request a free rate review to compare the same plan letter across other carriers in your state. If you can pass medical underwriting, you may qualify for a lower premium with identical benefits. Call 855-559-1700 to review your options before your renewal date.",
  }
,
  {
    question: "What should I do if I received a rate increase letter from my Medigap carrier?",
    answer:
      "Don't panic or cancel your coverage before comparing options. Request a free rate review to see what other carriers charge for the same plan letter in your ZIP code. If you qualify medically, switching carriers while keeping the same benefits could lower your monthly premium. Call 855-559-1700 to compare.",
  }
,
  {
    question: "What should I do if I get a Medigap rate increase notice?",
    answer:
      "Don't panic or drop coverage. Request a free rate comparison from a licensed broker who can quote the same plan letter across multiple carriers. Because Plan G is Plan G regardless of carrier, switching to a lower-priced carrier preserves identical benefits if you can pass underwriting. Call 855-559-1700 to review your options.",
  },
  {
    question: "Why are Medigap premiums rising by double digits in 2025?",
    answer:
      "Carriers cite rising medical claim costs, increased utilization of healthcare services, and aging risk pools as the main drivers. When a carrier's block of policyholders gets older and sicker, premiums climb to keep pace with claims. Newer carriers with younger pools often file smaller increases.",
  },
  {
    question: "Will switching carriers change my doctors or hospitals?",
    answer:
      "No. Medicare Supplement plans work with any provider that accepts Original Medicare nationwide. Switching from one Medigap carrier to another does not affect which doctors or hospitals you can use, only who pays the supplemental portion of your bills.",
  }
,
  {
    question: "What should I do if I receive a Medigap rate increase letter?",
    answer:
      "Don't panic, but don't ignore it either. Compare your renewal premium to what other carriers charge for the same plan letter in your ZIP code, since benefits are standardized by Medicare. Call 855-559-1700 for a free rate review before your renewal date to see if switching makes sense for your health situation.",
  }
,
  {
    question: "What should I do first if I get a Medigap rate increase letter?",
    answer:
      "Don't panic or cancel your coverage. Call a licensed broker for a free rate review to compare other carriers offering the same plan letter in your ZIP code. If you qualify medically, switching can lock in a lower premium with identical benefits. Reach our office at 855-559-1700.",
  },
  {
    question: "Are all Medigap Plan G policies the same regardless of carrier?",
    answer:
      "Yes. Medigap benefits are standardized by the federal government, so Plan G from one carrier covers the exact same services as Plan G from another. The only differences are price, customer service, and optional extras like dental or vision discounts. That's why shopping carriers can save money without reducing coverage.",
  },
  {
    question: "Why are Medigap premiums rising by double digits in 2025?",
    answer:
      "Carriers cite higher medical claim costs, increased utilization of healthcare services, and the aging of existing policyholder pools as the main drivers. When claims paid out exceed projections, carriers file for rate increases with state regulators. Newer carriers or those with younger risk pools often have more competitive pricing.",
  }
,
  {
    question: "Will switching Medigap carriers change my doctors or hospitals?",
    answer:
      "No. Medigap plans work with any provider that accepts Original Medicare, regardless of which carrier issues your policy. Switching from one carrier's Plan G to another carrier's Plan G does not change your network or your access to doctors and hospitals.",
  },
  {
    question: "When is the best time to shop for a lower Medigap rate?",
    answer:
      "A good time to compare is 30-60 days before your policy anniversary or whenever you receive a rate increase notice. That gives time to apply, complete any required underwriting, and align the new policy's start date with the cancellation of your old one to avoid a coverage gap.",
  },
  {
    question: "Does a rate increase mean my carrier is in financial trouble?",
    answer:
      "Not necessarily. Rate increases usually reflect rising medical claim costs and the aging of a carrier's policyholder pool, not financial instability. Still, a sustained pattern of large increases is a signal to compare other carriers offering the same standardized plan letter.",
  }
,
  {
    question: "What should I do if I get a Medigap rate increase letter?",
    answer:
      "Don't panic or drop coverage immediately. Compare quotes from other carriers offering the same standardized plan letter, since benefits are identical by law. If you're healthy enough to pass underwriting in your state, switching can lock in a lower rate. Call 855-559-1700 for a free rate review.",
  },
  {
    question: "Are all Medigap Plan G policies the same?",
    answer:
      "Yes, benefits under each lettered plan are standardized by federal law, so Plan G from one carrier covers the exact same services as Plan G from another. The only differences between carriers are price, customer service, and rate increase history. That's why shopping carriers can save money without reducing coverage.",
  },
  {
    question: "Why are Medigap premiums rising faster in 2025?",
    answer:
      "Carriers point to higher medical claim costs, increased utilization of healthcare services, and an aging policyholder pool as the main drivers behind double-digit increases. Some blocks of business that have been closed to new enrollees see even steeper hikes. Reviewing your options at renewal is the best defense.",
  }
,
  {
    question: "What should I do if I receive a double-digit rate increase notice on my Medigap plan?",
    answer:
      "Don't panic, but don't ignore it either. Request a free rate comparison from a licensed broker who can quote multiple carriers offering the same standardized plan letter. If you're healthy enough to pass underwriting, switching carriers may save you a meaningful amount each month without changing your benefits. Call 855-559-1700 to start a review.",
  },
  {
    question: "Why are Medigap premiums rising so much in 2025?",
    answer:
      "Carriers point to higher medical claim costs, increased utilization of healthcare services, and an aging policyholder pool as the main drivers behind 2025 rate increases. Because Medigap plans pay the gaps left by Original Medicare, rising provider costs translate directly into higher premiums. Each carrier files rates independently, which is why increases vary widely.",
  },
  {
    question: "Will switching to Medicare Advantage lower my costs if my Medigap premium goes up?",
    answer:
      "Medicare Advantage plans often have lower monthly premiums but use networks, prior authorization, and cost-sharing that Medigap does not. The right choice depends on your health, providers, prescriptions, and travel needs. A licensed broker can walk you through the trade-offs before you make a switch you can't easily reverse.",
  }
,
  {
    question: "What should I do if I get a rate increase notice from my Medigap carrier?",
    answer:
      "Don't panic and don't cancel coverage before securing a replacement. Call a licensed broker at 855-559-1700 for a free rate review comparing carriers offering the same standardized plan letter. If you can pass medical underwriting, switching to a lower-priced carrier with identical benefits is often the best move.",
  },
  {
    question: "Why are Medigap premiums rising so much in 2025?",
    answer:
      "Carriers are responding to higher medical claim costs, increased utilization of services, and an aging risk pool. Because Medigap plans are standardized by the federal government, carriers compete primarily on price and service — so when claims rise, premiums follow. Shopping carriers annually helps offset these increases.",
  }
,
  {
    question: "What should I do if I get a rate increase letter from my Medigap carrier?",
    answer:
      "Don't panic and don't cancel coverage before lining up a replacement. Request a free rate review to compare other carriers offering the same standardized plan letter in your ZIP code. If you qualify medically, you may be able to switch to a lower-priced carrier with identical benefits. Call 855-559-1700 to start a comparison.",
  },
  {
    question: "Will switching Medigap carriers change my doctors or benefits?",
    answer:
      "No. Medigap plans are standardized by federal law, so Plan G with one carrier covers the exact same gaps in Original Medicare as Plan G with another carrier. Your doctors are tied to Original Medicare, not your Medigap carrier, so any provider who accepts Medicare will accept your new supplement.",
  },
  {
    question: "Why are Medicare Supplement rates rising faster than in past years?",
    answer:
      "Insurers cite higher medical claim costs, increased utilization of services, and inflation in hospital and outpatient pricing. As the Part A deductible and other Medicare cost-sharing amounts rise, the dollars carriers pay on each claim go up as well. Carriers with older closed blocks of business tend to see the steepest increases.",
  }
,
  {
    question: "What should I do first if I get a rate increase letter from my Medigap carrier?",
    answer:
      "Open the letter and note your new premium and effective date. Then request a free rate review to compare other carriers offering the same standardized plan letter in your ZIP code. If you qualify medically, switching can lock in a lower rate without changing your benefits. Call 855-559-1700 to start a comparison.",
  },
  {
    question: "Will switching Medigap carriers change my doctors or hospitals?",
    answer:
      "No. Medicare Supplement plans work with any provider in the U.S. that accepts Original Medicare. The carrier on your Medigap card does not affect your provider network, only the premium and customer service experience.",
  },
  {
    question: "Is it worth switching Medigap plans if I have to go through underwriting?",
    answer:
      "It depends on your health and the potential savings. If you qualify medically and the new premium is meaningfully lower, the long-term savings can be significant since Medigap rates tend to increase each year. A licensed broker can pre-screen underwriting questions before you submit a formal application.",
  }
,
  {
    question: "What should I do if my Medicare Supplement premium increases this year?",
    answer:
      "Start by reviewing your renewal notice and confirming your current plan letter. Then compare quotes from other carriers offering the same standardized plan in your ZIP code. A licensed broker can run a free rate review and explain whether you'd need to pass medical underwriting to switch.",
  },
  {
    question: "Do all Medigap carriers raise rates at the same time?",
    answer:
      "No. Each carrier files rate adjustments with state insurance departments on its own schedule, so increases can happen at different times of year and at different sizes. That's why two people with the same plan letter can pay very different premiums.",
  }
,
  {
    question: "What should I do if I get a renewal letter with a large premium increase?",
    answer:
      "Don't panic or cancel your existing policy until you have a replacement approved. Call a licensed broker for a free rate review to compare carriers offering the same standardized plan letter in your ZIP code. If you can pass medical underwriting, switching to a lower-cost carrier with identical benefits is often possible. Call 855-559-1700 to start a review.",
  },
  {
    question: "Are Medigap benefits different from one carrier to another?",
    answer:
      "No. Medicare Supplement plans are standardized by the federal government, so a Plan G from one carrier covers the exact same gaps in Original Medicare as a Plan G from any other carrier. The only differences are price, customer service, and optional extras like fitness or hearing discounts. This is why shopping carriers can save money without reducing coverage.",
  },
  {
    question: "Will Original Medicare costs also change for 2026?",
    answer:
      "Yes. The Part B premium, Part B deductible, and Part A deductible are reset each year by CMS and typically rise. These changes are separate from your Medigap premium but affect your total out-of-pocket costs. Check medicare.gov each fall for the official figures before your plan renews.",
  }
,
  {
    question: "What should I do if I get a rate increase letter from my Medigap carrier?",
    answer:
      "Do not panic or drop coverage right away. Request a free rate comparison from a licensed broker who can quote multiple carriers offering the same plan letter in your ZIP code. If you can pass medical underwriting, switching to a lower-priced carrier with identical benefits may save you money each month. Call 855-559-1700 for a no-cost review.",
  }
,
  {
    question: "What should I do if I get a Medigap rate increase notice?",
    answer:
      "Don't panic and don't cancel your policy before comparing options. Request a free rate review to see what other carriers charge for the same plan letter in your ZIP code. Because all Medigap plans with the same letter cover identical benefits, switching to a lower-priced carrier can reduce your premium without changing your coverage. Call 855-559-1700 to compare.",
  },
  {
    question: "Are all Medicare Supplement Plan G policies the same?",
    answer:
      "Yes, benefits for a given Medigap plan letter are standardized by federal law, so Plan G from one carrier covers the same services as Plan G from another. The only differences are the monthly premium, the carrier's rate increase history, and customer service. That's why comparing carriers is one of the most effective ways to lower your Medigap costs.",
  }
];

export default function MedicareSupplementPremiumsIncreasing2025() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Medicare Supplement Premiums Increasing by Double Digits in 2025
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
        Medicare Supplement Premiums Increasing by Double Digits in 2025: Why
        It&apos;s Happening and How to Respond
      </h1>

      <Image
        src="/images/medicare-supplement-premiums-increasing-by-double-digits-in-2025.webp"
        alt="medicare supplement premiums increasing by double digits in 2025"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        Medicare Supplement premiums increasing by double digits in 2025 isn't a
        rumor. It's on renewal notices landing in mailboxes right now. If your
        Medigap bill jumped 10%, 15%, or more this year, you're not alone and
        you're not stuck.
      </p>

      <PhoneCTA />

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Which carriers filed the largest rate hikes this year
        </h2>
        <p className="text-gray-700 mb-2">
          Industry data through early 2025 shows several major carriers filed
          significant Plan G and Plan N increases. Aetna, Mutual of Omaha, and
          UnitedHealthcare took some of the largest rate actions on open blocks
          of business. Smaller regional carriers varied widely by state.
        </p>
        <p className="text-gray-700">
          The same Plan G from one carrier might cost $50 to $80 more per month
          than from another. Benefits are identical. Only the price tag changes.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why rates spiked this year
        </h2>
        <p className="text-gray-700 mb-2">
          Medical claim costs have been elevated since 2023. Delayed
          procedures from the pandemic era, higher hospital charges, and
          increased utilization all hit carrier loss ratios hard. Carriers
          respond by raising premiums to cover what they're paying out.
        </p>
        <p className="text-gray-700">
          This isn't unique to one company. It's an industry-wide trend driven
          by real healthcare spending.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How attained-age pricing compounds over time
        </h2>
        <p className="text-gray-700 mb-2">
          Most Medigap plans use attained-age pricing. Your premium goes up as
          you get older, plus any rate increases the carrier files. A 5% age
          bump stacked on a 12% rate increase means your bill climbed 17% in
          one year.
        </p>
        <p className="text-gray-700">
          Over five or ten years, this compounding effect can double your
          original premium. That's why periodic rate reviews matter so much.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          When switching carriers makes sense (and when it doesn't)
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Good candidate to switch:</strong> You're in good health
            and can pass underwriting. A newer carrier offers the same plan
            letter at $50+ less per month.
          </li>
          <li>
            <strong>Proceed with caution:</strong> You have health conditions
            that might cause a denial. Never cancel your current plan until
            you're approved by the new one.
          </li>
          <li>
            <strong>Stay put:</strong> Your rate is still competitive after
            comparison, or you have guaranteed issue rights you'd lose by
            switching.
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What you can't control vs. what you can
        </h2>
        <p className="text-gray-700 mb-2">
          You can't stop carriers from filing rate increases. You can control
          which carrier you're with. Since every Plan G or Plan N covers the
          exact same benefits by law, the only variable is price and the
          company behind it.
        </p>
        <p className="text-gray-700">
          A 10-minute rate comparison could save you $600 to $1,000 a year.
          That's real money, especially on a fixed income.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Get a free rate review before your next renewal
        </h2>
        <p className="text-gray-700">
          I'll pull current rates from every carrier available in your ZIP code,
          compare them to what you're paying now, and tell you straight whether
          switching makes sense. No cost, no pressure. If your current plan is
          still the best deal, I'll tell you that too.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Stop overpaying for the same coverage.
        </p>
        <p className="mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/contact" className="underline font-bold">
            get a free quote online
          </Link>
          .
        </p>
        <p className="text-sm opacity-90">
          Anthony Orner, Licensed Medicare Broker
        </p>
      </div>

      <section className="mt-10">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Related resources
        </h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/services/compare-and-enroll-in-plan-g-online"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plan G: What It Covers and Costs
            </Link>
          </li>
          <li>
            <Link
              href="/services/quickest-way-to-enroll-into-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plan N: Lower Premiums, Small Tradeoffs
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/turning-65"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment: Your Best Window for Coverage
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/switch-carriers"
              className="text-blue-600 hover:underline"
            >
              Switching Medigap Plans: When It Works and When It Doesn&apos;t
            </Link>
          </li>
        </ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/health-drug-plans/medigap" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">Medicare.gov — Medigap (Medicare Supplement) basics</a> and <a href="https://www.medicare.gov/health-drug-plans/medigap/basics/when-to-buy" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">When to buy a Medigap policy</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Contact the <a href="https://www.nj.gov/dobi/division_insurance/" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">SHIP counselor</a> for free one-on-one Medicare guidance.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance</a> or the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP program</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance</a> or the free <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP counseling program</a> for unbiased guidance.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free unbiased help comparing Medigap rates through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> or contact the <a href="https://www.nj.gov/dobi/" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/shipindex.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance</a> or the free <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP program</a> for Medigap rate questions.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance</a> or the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP program</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance</a> or the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP program</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-700 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need free local help? Contact the <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> or the <a href="https://www.nj.gov/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">New Jersey Department of Banking and Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-level help comparing Medigap rates? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free, unbiased counseling, or call us at <a href="tel:8555591700" className="underline">855-559-1700</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need help comparing Medigap rates in your state? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a> for free, unbiased counseling.</div>
            <div className="text-sm text-gray-600 mt-4">State help: <a href="https://www.state.nj.us/dobi/division_insurance/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance</a> or find your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">SHIP counselor</a> for free Medigap guidance.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">NJ residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">New Jersey Department of Banking and Insurance</a> or the free <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance</a> or the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP program</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" target="_blank" rel="noopener noreferrer" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> or contact the <a href="https://www.state.nj.us/dobi/" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
      </section>
    </main>
  );
}