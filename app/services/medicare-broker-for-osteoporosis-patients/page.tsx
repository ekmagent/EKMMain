import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for osteoporosis patients | Free Coverage Review | MedicareYourself",
  description:
    "Medicare broker for osteoporosis patients in NJ. Anthony Orner matches you with plans covering DEXA scans, infusions, and fracture rehab. Free quote today.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-osteoporosis-patients" },
  openGraph: {
    title:
      "Medicare broker for osteoporosis patients | Free Coverage Review | MedicareYourself",
    description:
      "Medicare broker for osteoporosis patients in NJ. Anthony Orner matches you with plans covering DEXA scans, infusions, and fracture rehab. Free quote today.",
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
      name: "Medicare Broker for Osteoporosis Patients",
      item: "https://medicareyourself.com/services/medicare-broker-for-osteoporosis-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Osteoporosis Patients Who Need Protection Before and After a Fall",
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
    question: "Is it a good idea to use a Medicare broker?",
    answer:
      "Yes. A licensed Medicare broker works for you, not an insurance company. Brokers compare plans across multiple carriers at no cost to you. For osteoporosis patients, this matters because drug coverage, infusion costs, and rehab benefits vary widely between plans.",
  },
  {
    question:
      "Does Medicare cover DEXA scans for osteoporosis?",
    answer:
      "Medicare Part B covers bone density tests (DEXA scans) once every 24 months for people at risk. If your doctor determines you're at high risk or is monitoring treatment, Medicare may cover them more frequently. You pay 20% of the Medicare-approved amount after your Part B deductible ($283 in 2026).",
  },
  {
    question:
      "Does Medicare cover Prolia or Reclast infusions?",
    answer:
      "Part B covers certain injectable osteoporosis drugs administered in a doctor's office or infusion center. Prolia and Reclast may also be covered under Part D depending on how they're administered. Costs vary significantly by plan, so comparing your options with a broker can save you hundreds per injection.",
  },
  {
    question:
      "What happens if I need rehab after a fracture?",
    answer:
      "Medicare Part A covers skilled nursing facility (SNF) care after a qualifying hospital stay. In 2026, days 1-20 cost $0. Days 21-100 carry a $209.50/day coinsurance charge. A Medigap plan or the right Medicare Advantage plan can cover that coinsurance and prevent a devastating bill.",
  },
];

export default function MedicareBrokerForOsteoporosisPatients() {
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
          Medicare Broker for Osteoporosis Patients
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
        Medicare Broker for Osteoporosis Patients Who Need Protection Before and After a Fall
      </h1>

      <Image
        src="/images/hub_medicare-broker-for-osteoporosis-patients.webp"
        alt="Medicare broker for osteoporosis patients"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        A Medicare broker for osteoporosis patients does one thing most plans can't do on their own: match your actual fracture risk to coverage that holds up when you need it. You grip the handrail tighter than other people. You think about your hip every time you step onto a wet floor. Your plan should reflect that reality.
      </p>
      <p className="text-lg mb-6">
        I'm Anthony Orner, a licensed Medicare broker in New Jersey. I help people with osteoporosis find plans that cover DEXA scans, infusions, and fracture rehab without surprise bills.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          What a broken hip really costs without the right coverage
        </h2>
        <p className="mb-3">
          A hip fracture typically means a hospital stay, surgery, and weeks of skilled nursing care. Under Original Medicare in 2026, you'd owe a $1,676 Part A deductible before coverage starts. If rehab extends past 20 days, you're looking at $209.50 per day in coinsurance for days 21 through 100.
        </p>
        <p>
          That's over $16,000 in potential out-of-pocket costs for a single fall. The right Medigap or Advantage plan eliminates most or all of that exposure.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          DEXA scans, infusions, and the benefits Medicare should cover
        </h2>
        <p className="mb-3">
          Medicare Part B covers DEXA bone density scans once every 24 months for qualifying patients. Part B also covers injectable osteoporosis drugs for eligible women who meet home health criteria and have a certified postmenopausal fracture.
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>DEXA scans: covered every 24 months (more often if medically necessary)</li>
          <li>Injectable drugs (like Prolia): may fall under Part B or Part D depending on administration</li>
          <li>Infusions (like Reclast): often covered under Part B when given in-office</li>
          <li>Home health injections: covered under Part A with qualifying conditions</li>
        </ul>
        <p>
          The gap between "covered" and "affordable" is where plan selection matters most. Some Part D plans charge $600+ per Prolia injection. Others bring it close to zero.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          How osteoporosis impacts your Medigap and Advantage options
        </h2>
        <p className="mb-3">
          During your Medigap Open Enrollment Period (6 months starting the month you turn 65 and enroll in Part B), carriers can't deny you or charge more for pre-existing conditions like osteoporosis. Miss that window, and medical underwriting kicks in. Carriers can decline your application.
        </p>
        <p>
          Medicare Advantage plans can't deny you for osteoporosis, but drug formularies, specialist networks, and rehab facility access vary wildly. I compare these details so you don't discover a gap after a fracture.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          The real problem: step therapy and drug denials
        </h2>
        <p className="mb-3">
          Many plans require step therapy for osteoporosis drugs. That means they force you to try (and fail on) a cheaper medication before approving the one your doctor actually prescribed. For someone with severe bone loss, "failing" a drug could mean another fracture.
        </p>
        <p>
          I review formulary restrictions and prior authorization rules before you enroll, not after you've been denied.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Build a safety net that matches the risk you live with daily
        </h2>
        <p className="mb-3">
          Your coverage should account for ongoing monitoring, treatment costs, and the possibility of a fracture in any given year. That means looking at the full picture:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Part B deductible and 20% coinsurance on scans and office infusions</li>
          <li>Part D formulary placement for your specific osteoporosis drugs</li>
          <li>SNF coinsurance exposure if rehab is needed</li>
          <li>Network access to endocrinologists and bone health specialists</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          What a free coverage review looks like
        </h2>
        <p className="mb-3">
          You call. We go through your current medications, your doctors, and your diagnosis. I run your drugs through every available plan's formulary and show you what you'd actually pay. No cost, no obligation. I get paid by the carrier you choose, never by you.
        </p>
        <p>
          If your current plan is already the best fit, I'll tell you that too.
        </p>
      </section>

      <section className="mt-10 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Get a free osteoporosis coverage review
        </p>
        <p className="mb-4">
          Call{" "}
          <a
            href="tel:8555591700"
            className="text-blue-700 font-bold hover:underline"
          >
            855-559-1700
          </a>{" "}
          or{" "}
          <Link
            href="/contact"
            className="text-blue-700 font-bold hover:underline"
          >
            Get a Free Quote
          </Link>
        </p>
        <p className="text-sm text-gray-600">
          Anthony Orner, Licensed Medicare Broker | NJ
        </p>
      </section>

      <section className="mt-12">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/learn/what-is-medigap"
              className="text-blue-700 hover:underline"
            >
              Medigap Plans Explained: What They Cover and What They Cost
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-700 hover:underline"
            >
              Medicare Advantage vs. Medigap: How to Choose
            </Link>
          </li>
          <li>
            <Link
              href="/learn/medicare-parts-explained"
              className="text-blue-700 hover:underline"
            >
              Medicare Part D Drug Coverage: What You Need to Know
            </Link>
          </li>
          <li>
            <Link
              href="/services/free-medicare-broker-new-jersey"
              className="text-blue-700 hover:underline"
            >
              Medicare Broker in New Jersey: Free Plan Comparison
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}