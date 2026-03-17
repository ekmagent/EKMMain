"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/medicare-supplement/new-jersey", label: "Medicare Supplement" },
  { href: "/medicare-advantage/new-jersey", label: "Medicare Advantage" },
  { href: "/hub", label: "Guides" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b border-[#D0E4DE] sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <span className="text-xl font-black tracking-tight text-[#2D6E5F]">
            Medicare<span className="text-[#1C2B27]">Yourself</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#3A5048]">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="hover:text-[#2D6E5F] transition-colors">
              {label}
            </Link>
          ))}
        </nav>

        {/* Right side: hamburger (mobile) + call button */}
        <div className="flex items-center gap-3">
          <button
            className="md:hidden p-2 rounded-lg text-[#3A5048] hover:bg-[#EFF6F3] transition-colors"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          <a
            href="tel:8555591700"
            className="bg-[#2D6E5F] hover:bg-[#1f5245] text-white font-bold px-4 py-2.5 rounded-lg text-sm transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            <span className="hidden sm:inline">855-559-1700</span>
            <span className="sm:hidden">Call Now</span>
          </a>
        </div>

      </div>

      {/* Mobile nav drawer */}
      {open && (
        <nav className="md:hidden border-t border-[#D0E4DE] bg-white px-6 py-4 flex flex-col gap-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-base font-semibold text-[#1C2B27] hover:text-[#2D6E5F] py-3 border-b border-[#EFF6F3] last:border-0 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
