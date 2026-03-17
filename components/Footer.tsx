import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F6FAF8] border-t border-[#D0E4DE] mt-20">
      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">

          <div>
            <span className="text-lg font-black tracking-tight text-[#2D6E5F]">
              Medicare<span className="text-[#1C2B27]">Yourself</span>
            </span>
            <p className="mt-3 text-sm text-[#3A5048] leading-relaxed">
              A service of EasyKind Medicare. Independent broker helping beneficiaries
              find the right Medicare Supplement and Advantage plans.
            </p>
            <p className="text-xs text-[#3A5048] mt-2">
              1309 Route 79 West, Cherry Hill, NJ 08002
            </p>
            <a
              href="tel:8555591700"
              className="inline-flex items-center gap-2 mt-4 text-[#2D6E5F] hover:text-[#1f5245] font-bold text-sm transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              855-559-1700
            </a>
          </div>

          <div>
            <h3 className="text-sm font-bold text-[#1C2B27] uppercase tracking-wide mb-4">Medicare Plans</h3>
            <ul className="space-y-3 text-sm text-[#3A5048]">
              <li><Link href="/medicare-supplement/new-jersey" className="hover:text-[#2D6E5F] transition-colors">Medicare Supplement — New Jersey</Link></li>
              <li><Link href="/medicare-supplement/pennsylvania" className="hover:text-[#2D6E5F] transition-colors">Medicare Supplement — Pennsylvania</Link></li>
              <li><Link href="/medicare-advantage/new-jersey" className="hover:text-[#2D6E5F] transition-colors">Medicare Advantage — New Jersey</Link></li>
              <li><Link href="/hub" className="hover:text-[#2D6E5F] transition-colors">Medicare Guides</Link></li>
              <li><Link href="/learn/medicare-help-low-income" className="hover:text-[#2D6E5F] transition-colors">Medicare Help — Low Income</Link></li>
              <li><Link href="/quote" className="hover:text-[#2D6E5F] transition-colors">Get a Free Quote</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-[#1C2B27] uppercase tracking-wide mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-[#3A5048]">
              <li><Link href="/about" className="hover:text-[#2D6E5F] transition-colors">About Us</Link></li>
              <li><Link href="/privacy" className="hover:text-[#2D6E5F] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#2D6E5F] transition-colors">Terms of Service</Link></li>
              <li><Link href="/write-for-us" className="hover:text-[#2D6E5F] transition-colors">Write for Us</Link></li>
            </ul>
          </div>

        </div>

        {/* CMS-required TPMO disclaimer */}
        <div className="border-t border-[#D0E4DE] pt-6">
          <p className="text-xs text-[#3A5048] leading-relaxed mb-3">
            <strong className="text-[#1C2B27]">Important Disclosure:</strong> We do not offer every plan available in
            your area. Currently we represent multiple organizations which offer products in your area. You can always
            contact{" "}
            <a href="https://www.medicare.gov" className="underline hover:text-[#2D6E5F]" target="_blank" rel="noopener noreferrer">
              Medicare.gov
            </a>
            , 1-800-MEDICARE (1-800-633-4227), TTY users should call 1-877-486-2048, 24 hours a day/7 days a week, or
            your local State Health Insurance Assistance Program (SHIP) for help with plan choices.
          </p>
          <p className="text-xs text-[#3A5048]">
            © {new Date().getFullYear()} MedicareYourself, a service of EasyKind Medicare (EasyKind Health LLC). All rights reserved.
            Licensed insurance broker. Not affiliated with or endorsed by Medicare or any government agency.
          </p>
        </div>
      </div>
    </footer>
  );
}
