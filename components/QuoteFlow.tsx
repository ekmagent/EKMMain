"use client";

import { useEffect, useRef, useState } from "react";

const REASONS = [
  { value: "turning-65", label: "I'm turning 65 / new to Medicare", emoji: "🎂" },
  { value: "rate-increase", label: "My rate went up", emoji: "📈" },
  { value: "compare-rates", label: "I want to compare plans & rates", emoji: "🔍" },
  { value: "losing-coverage", label: "I'm losing employer coverage", emoji: "💼" },
  { value: "helping-someone", label: "I'm helping a parent or spouse", emoji: "👪" },
  { value: "researching", label: "Just doing my research", emoji: "📚" },
];

const SOURCES = [
  { value: "google", label: "Google search", emoji: "🔎" },
  { value: "ai-assistant", label: "ChatGPT or another AI", emoji: "🤖" },
  { value: "youtube", label: "YouTube", emoji: "▶️" },
  { value: "reddit-forum", label: "Reddit or a forum", emoji: "💬" },
  { value: "friend-family", label: "A friend or family member", emoji: "❤️" },
  { value: "other", label: "Somewhere else", emoji: "✨" },
];

const CONTACT_PREFS = [
  { value: "call", label: "Give me a call", emoji: "📞" },
  { value: "text", label: "Text me", emoji: "💬" },
  { value: "email", label: "Email me", emoji: "✉️" },
];

const TOTAL_STEPS = 8;

function formatPhone(raw: string) {
  const d = raw.replace(/\D/g, "").slice(0, 10);
  if (d.length <= 3) return d;
  if (d.length <= 6) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function QuoteFlow() {
  const [step, setStep] = useState(0);
  const [reason, setReason] = useState("");
  const [source, setSource] = useState("");
  const [name, setName] = useState("");
  const [zip, setZip] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [contactPref, setContactPref] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [step]);

  const firstName = name.trim().split(/\s+/)[0] || "";

  function next() {
    setError("");
    setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
  }
  function back() {
    setError("");
    setStep((s) => Math.max(s - 1, 0));
  }

  function validateAndNext() {
    switch (step) {
      case 2:
        if (name.trim().length < 2) return setError("Mind sharing your name?");
        break;
      case 3:
        if (!/^\d{5}$/.test(zip)) return setError("That ZIP doesn't look right — 5 digits.");
        break;
      case 4: {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(dob)) return setError("Please pick your date of birth.");
        const year = Number(dob.slice(0, 4));
        if (year < 1920 || year > 2010) return setError("Please double-check that birth year.");
        break;
      }
      case 5:
        if (!isValidEmail(email)) return setError("That email doesn't look quite right.");
        break;
      case 6:
        if (phone.replace(/\D/g, "").length < 10) return setError("Please enter a 10-digit phone number.");
        break;
    }
    next();
  }

  async function submit(pref: string) {
    setContactPref(pref);
    setSubmitting(true);
    setError("");

    let attribution: Record<string, string> = {};
    try {
      attribution = {
        landing: sessionStorage.getItem("ekm_landing") || "",
        referrer: sessionStorage.getItem("ekm_referrer") || "",
        prevPage: sessionStorage.getItem("ekm_prev") || "",
      };
    } catch {
      // best-effort
    }

    try {
      const res = await fetch("/api/quote-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          reason,
          source,
          name: name.trim(),
          zip,
          dob,
          email: email.trim(),
          phone,
          contactPref: pref,
          attribution,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setError(data?.error ?? "Something went wrong. Please call us at 855-559-1700.");
        setSubmitting(false);
        return;
      }
      setDone(true);
    } catch {
      setError("Something went wrong. Please call us at 855-559-1700.");
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="bg-white border border-[#D0E4DE] rounded-2xl shadow-sm p-8 sm:p-10 text-center">
        <div className="text-5xl mb-4">🎉</div>
        <h2 className="text-2xl font-bold text-[#2D6E5F] mb-3">
          You&apos;re all set{firstName ? `, ${firstName}` : ""}!
        </h2>
        <p className="text-[#3A5048] mb-6">
          A licensed broker (a real human — Anthony) will{" "}
          {contactPref === "text" ? "text" : contactPref === "email" ? "email" : "call"} you shortly
          with your personalized quote. No robots, no spam, no pressure.
        </p>
        <p className="text-[#3A5048]">
          Can&apos;t wait?{" "}
          <a href="tel:8555591700" className="font-bold text-[#E8842A] hover:underline">
            Call 855-559-1700 now
          </a>
        </p>
      </div>
    );
  }

  const optionBtn =
    "w-full flex items-center gap-3 text-left border-2 border-[#D0E4DE] rounded-xl px-5 py-4 text-[#3A5048] font-medium hover:border-[#2D6E5F] hover:bg-[#F6FAF8] transition-colors text-base sm:text-lg";
  const textInput =
    "w-full border-2 border-[#D0E4DE] rounded-xl px-5 py-4 text-lg text-gray-900 focus:border-[#2D6E5F] focus:outline-none";
  const continueBtn =
    "w-full bg-[#E8842A] hover:bg-[#d67722] text-white font-bold rounded-xl px-6 py-4 text-lg transition-colors disabled:opacity-50";

  return (
    <div className="bg-white border border-[#D0E4DE] rounded-2xl shadow-sm overflow-hidden">
      {/* Progress */}
      <div className="h-2 bg-[#F6FAF8]">
        <div
          className="h-2 bg-[#2D6E5F] transition-all duration-300"
          style={{ width: `${((step + 1) / TOTAL_STEPS) * 100}%` }}
        />
      </div>

      <div className="p-6 sm:p-10">
        <p className="text-sm font-semibold text-[#2D6E5F] mb-2">
          Step {step + 1} of {TOTAL_STEPS}
        </p>

        {step === 0 && (
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
              What brings you here today?
            </h2>
            <div className="grid gap-3">
              {REASONS.map((r) => (
                <button
                  key={r.value}
                  type="button"
                  className={optionBtn}
                  onClick={() => {
                    setReason(r.value);
                    next();
                  }}
                >
                  <span className="text-2xl">{r.emoji}</span> {r.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 1 && (
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
              How did you find us?
            </h2>
            <div className="grid gap-3">
              {SOURCES.map((s) => (
                <button
                  key={s.value}
                  type="button"
                  className={optionBtn}
                  onClick={() => {
                    setSource(s.value);
                    next();
                  }}
                >
                  <span className="text-2xl">{s.emoji}</span> {s.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
              Great — what&apos;s your name?
            </h2>
            <input
              ref={inputRef}
              type="text"
              autoComplete="name"
              placeholder="First and last name"
              className={textInput}
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && validateAndNext()}
            />
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
              {firstName ? `Nice to meet you, ${firstName}!` : "Nice to meet you!"} What&apos;s your
              ZIP code?
            </h2>
            <p className="text-[#3A5048] mb-4 text-sm">
              Medigap rates are priced by ZIP — this is how we find your lowest rate.
            </p>
            <input
              ref={inputRef}
              type="text"
              inputMode="numeric"
              autoComplete="postal-code"
              placeholder="e.g. 08053"
              maxLength={5}
              className={textInput}
              value={zip}
              onChange={(e) => setZip(e.target.value.replace(/\D/g, "").slice(0, 5))}
              onKeyDown={(e) => e.key === "Enter" && validateAndNext()}
            />
          </div>
        )}

        {step === 4 && (
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
              When&apos;s your birthday?
            </h2>
            <p className="text-[#3A5048] mb-4 text-sm">
              Your exact age (down to the month) changes your rate. Timing it right can lock in a
              lower premium.
            </p>
            <input
              ref={inputRef}
              type="date"
              autoComplete="bday"
              className={textInput}
              value={dob}
              min="1920-01-01"
              max="2010-12-31"
              onChange={(e) => setDob(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && validateAndNext()}
            />
          </div>
        )}

        {step === 5 && (
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
              Where should we send your quote?
            </h2>
            <input
              ref={inputRef}
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              className={textInput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && validateAndNext()}
            />
          </div>
        )}

        {step === 6 && (
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
              And the best number to reach you?
            </h2>
            <input
              ref={inputRef}
              type="tel"
              autoComplete="tel"
              placeholder="(555) 555-5555"
              className={textInput}
              value={phone}
              onChange={(e) => setPhone(formatPhone(e.target.value))}
              onKeyDown={(e) => e.key === "Enter" && validateAndNext()}
            />
          </div>
        )}

        {step === 7 && (
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
              Last one — how should we reach out?
            </h2>
            <div className="grid gap-3 mb-5">
              {CONTACT_PREFS.map((c) => (
                <button
                  key={c.value}
                  type="button"
                  disabled={submitting}
                  className={`${optionBtn} disabled:opacity-50`}
                  onClick={() => submit(c.value)}
                >
                  <span className="text-2xl">{c.emoji}</span> {c.label}
                </button>
              ))}
            </div>
            {submitting && (
              <p className="text-[#2D6E5F] font-semibold text-center mb-3">Sending…</p>
            )}
            <p className="text-xs text-gray-500 leading-relaxed">
              By choosing an option above, you agree that a licensed insurance agent from easyKind
              Medicare may contact you by phone, text, or email about Medicare insurance options.
              This is not a condition of purchase. Message and data rates may apply.
            </p>
          </div>
        )}

        {error && <p className="text-red-600 font-medium mt-4">{error}</p>}

        {/* Continue / Back controls for typed steps */}
        {step >= 2 && step <= 6 && (
          <button type="button" className={`${continueBtn} mt-6`} onClick={validateAndNext}>
            Continue →
          </button>
        )}
        {step > 0 && !submitting && (
          <button
            type="button"
            className="mt-4 text-sm text-[#3A5048] hover:text-[#2D6E5F] underline"
            onClick={back}
          >
            ← Go back
          </button>
        )}
      </div>
    </div>
  );
}
