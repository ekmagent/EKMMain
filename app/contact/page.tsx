"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";

function ContactForm() {
  const searchParams = useSearchParams();
  const zip = searchParams.get("zip") ?? "";

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, zip }),
      });
      const data = await res.json();
      if (data.ok) {
        setSubmitted(true);
      } else {
        setError(data.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setError("Could not send. Please call us at 855-559-1700.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 rounded-full bg-[#EFF6F3] flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-[#2D6E5F]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-black text-[#1C2B27] mb-3">You&rsquo;re all set!</h2>
        <p className="text-[#3A5048] leading-relaxed max-w-sm mx-auto">
          Anthony will reach out shortly. In the meantime, feel free to call directly at{" "}
          <a href="tel:8555591700" className="font-bold text-[#2D6E5F] hover:underline">855-559-1700</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {zip && (
        <div className="bg-[#EFF6F3] border border-[#D0E4DE] rounded-xl px-5 py-3 text-sm text-[#3A5048]">
          Finding plans for zip code <strong className="text-[#1C2B27]">{zip}</strong>
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-bold text-[#1C2B27] mb-1.5">
          Your Name
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="First and last name"
          className="w-full border-2 border-[#D0E4DE] rounded-lg bg-white text-[#1C2B27] placeholder-[#3A5048] font-medium px-4 py-3 text-base focus:outline-none focus:border-[#2D6E5F] transition-colors"
          required
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-bold text-[#1C2B27] mb-1.5">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="(555) 555-5555"
          className="w-full border-2 border-[#D0E4DE] rounded-lg bg-white text-[#1C2B27] placeholder-[#3A5048] font-medium px-4 py-3 text-base focus:outline-none focus:border-[#2D6E5F] transition-colors"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-bold text-[#1C2B27] mb-1.5">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full border-2 border-[#D0E4DE] rounded-lg bg-white text-[#1C2B27] placeholder-[#3A5048] font-medium px-4 py-3 text-base focus:outline-none focus:border-[#2D6E5F] transition-colors"
          required
        />
      </div>

      {error && (
        <p className="text-sm text-red-600 font-medium" role="alert">{error}</p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-[#E8842A] hover:bg-[#cf7020] disabled:opacity-60 text-white font-black text-lg py-4 rounded-xl transition-colors shadow-sm cursor-pointer"
      >
        {submitting ? "Sending…" : "Get My Free Options"}
      </button>

      <p className="text-xs text-[#3A5048] text-center leading-relaxed">
        No spam. No pressure. Anthony will personally reach out to walk you through your options.
      </p>
    </form>
  );
}

export default function ContactPage() {
  return (
    <section className="min-h-[80vh] flex items-center py-16 px-6">
      <div className="w-full max-w-lg mx-auto">

        <div className="text-center mb-10">
          <p className="text-sm font-bold uppercase tracking-widest text-[#2D6E5F] mb-3">
            Free · No Obligation
          </p>
          <h1 className="text-4xl font-black tracking-tight text-[#1C2B27] mb-3">
            Let&rsquo;s Find Your Plan
          </h1>
          <p className="text-[#3A5048] leading-relaxed">
            Tell us a little about yourself and Anthony will reach out with your best options —
            usually within the hour.
          </p>
        </div>

        <div className="bg-white border border-[#D0E4DE] rounded-2xl p-8 shadow-sm">
          <Suspense>
            <ContactForm />
          </Suspense>
        </div>

        <div className="mt-6 text-center text-sm text-[#3A5048]">
          Prefer to call?{" "}
          <a href="tel:8555591700" className="font-bold text-[#2D6E5F] hover:underline">
            855-559-1700
          </a>
        </div>

      </div>
    </section>
  );
}
