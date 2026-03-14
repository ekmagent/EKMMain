import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-semibold mb-3">MedicareYourself</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Independent Medicare insurance broker. We help beneficiaries find the right
              Medicare Supplement and Medicare Advantage plans.
            </p>
            <a
              href="tel:8555591700"
              className="inline-flex items-center gap-2 mt-4 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              855-559-1700
            </a>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Medicare Plans</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/medicare-supplement/new-jersey" className="hover:text-white transition-colors">
                  Medicare Supplement — New Jersey
                </Link>
              </li>
              <li>
                <Link href="/medicare-supplement/pennsylvania" className="hover:text-white transition-colors">
                  Medicare Supplement — Pennsylvania
                </Link>
              </li>
              <li>
                <Link href="/medicare-advantage/new-jersey" className="hover:text-white transition-colors">
                  Medicare Advantage — New Jersey
                </Link>
              </li>
              <li>
                <Link href="/hub" className="hover:text-white transition-colors">
                  Medicare Guides
                </Link>
              </li>
              <li>
                <Link href="/learn/medicare-help-low-income" className="hover:text-white transition-colors">
                  Medicare Help — Low Income
                </Link>
              </li>
              <li>
                <Link href="/quote" className="hover:text-white transition-colors">
                  Get a Free Quote
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/write-for-us" className="hover:text-white transition-colors">
                  Write for Us
                </Link>
              </li>
            </ul>

            {/* TODO: Add social profile links once accounts are created (Edward Module 06 Part 3)
                Required: Facebook, LinkedIn, YouTube minimum. Link here in footer. */}
          </div>
        </div>

        {/* CMS-required TPMO disclaimer */}
        <div className="border-t border-gray-700 pt-6">
          <p className="text-xs text-gray-500 leading-relaxed mb-3">
            <strong className="text-gray-400">Important Disclosure:</strong> We do not offer every plan available in
            your area. Currently we represent multiple organizations which offer products in your area. You can always
            contact{" "}
            <a href="https://www.medicare.gov" className="underline hover:text-gray-300" target="_blank" rel="noopener noreferrer">
              Medicare.gov
            </a>
            , 1-800-MEDICARE (1-800-633-4227), TTY users should call 1-877-486-2048, 24 hours a day/7 days a week, or
            your local State Health Insurance Assistance Program (SHIP) for help with plan choices.
          </p>
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} MedicareYourself. All rights reserved. Licensed insurance broker. Not
            affiliated with or endorsed by Medicare or any government agency.
          </p>
        </div>
      </div>
    </footer>
  );
}
