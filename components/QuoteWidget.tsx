"use client";

import { useState } from "react";

interface Quote {
  carrier: string;
  amBestRating: string;
  amBestOutlook: string;
  monthlyRate: number;
  rateType: string;
  lastRateIncrease: { pct: string; date: string } | null;
  plan: string;
}

interface QuoteResult {
  quotes: Quote[];
  plan: string;
  zip: string;
  age: number;
}

const PLAN_OPTIONS = [
  { value: "G", label: "Plan G (most popular)" },
  { value: "N", label: "Plan N (lower premium)" },
  { value: "F", label: "Plan F (if eligible)" },
  { value: "HDF", label: "High-Deductible Plan G" },
];

const AM_BEST_COLORS: Record<string, string> = {
  "A++": "text-green-700 font-bold",
  "A+": "text-green-700 font-bold",
  "A": "text-green-600 font-semibold",
  "A-": "text-green-600",
  "B++": "text-yellow-600",
  "B+": "text-yellow-600",
};

export default function QuoteWidget({ defaultZip = "" }: { defaultZip?: string }) {
  const [zip, setZip] = useState(defaultZip);
  const [age, setAge] = useState("65");
  const [gender, setGender] = useState("F");
  const [tobacco, setTobacco] = useState("0");
  const [plan, setPlan] = useState("G");
  const [result, setResult] = useState<QuoteResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setResult(null);

    if (!/^\d{5}$/.test(zip)) {
      setError("Please enter a valid 5-digit zip code.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ zip, age: Number(age), gender, tobacco: Number(tobacco), plan }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please call us for a quote.");
      } else {
        setResult(data);
      }
    } catch {
      setError("Unable to load quotes. Please call 855-559-1700 for immediate help.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
      <div className="bg-blue-800 text-white px-5 py-4">
        <p className="font-bold text-lg">Compare Medicare Supplement Rates</p>
        <p className="text-blue-200 text-sm">Real carrier rates for your zip code — updated daily</p>
      </div>

      <form onSubmit={handleSubmit} className="p-5 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">Zip Code</label>
          <input
            type="text"
            inputMode="numeric"
            maxLength={5}
            value={zip}
            onChange={(e) => setZip(e.target.value.replace(/\D/g, "").slice(0, 5))}
            placeholder="e.g. 07901"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">Age</label>
          <select
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {Array.from({ length: 21 }, (_, i) => 65 + i).map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="F">Female</option>
            <option value="M">Male</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">Tobacco use?</label>
          <select
            value={tobacco}
            onChange={(e) => setTobacco(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">Plan</label>
          <select
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {PLAN_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
        <div className="flex items-end">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg text-sm transition disabled:opacity-60"
          >
            {loading ? "Loading…" : "Compare Rates"}
          </button>
        </div>
      </form>

      {error && (
        <div className="mx-5 mb-4 bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {result && result.quotes.length > 0 && (
        <div className="px-5 pb-5">
          <p className="text-xs text-gray-500 mb-3">
            Showing Plan {result.plan} rates for ZIP {result.zip}, age {result.age} — sorted lowest to highest. Rates include EFT discount.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700 text-xs uppercase">
                  <th className="text-left px-3 py-2">Carrier</th>
                  <th className="text-center px-3 py-2">AM Best</th>
                  <th className="text-right px-3 py-2">Monthly</th>
                  <th className="text-center px-3 py-2 hidden md:table-cell">Rate Type</th>
                  <th className="text-center px-3 py-2 hidden md:table-cell">Last Increase</th>
                </tr>
              </thead>
              <tbody>
                {result.quotes.map((q, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-3 py-2 font-medium text-gray-900 border-b border-gray-100">{q.carrier}</td>
                    <td className={`px-3 py-2 text-center border-b border-gray-100 ${AM_BEST_COLORS[q.amBestRating] ?? "text-gray-600"}`}>
                      {q.amBestRating}
                    </td>
                    <td className="px-3 py-2 text-right font-bold text-gray-900 border-b border-gray-100">
                      ${q.monthlyRate.toFixed(2)}/mo
                    </td>
                    <td className="px-3 py-2 text-center text-gray-600 border-b border-gray-100 hidden md:table-cell text-xs">
                      {q.rateType}
                    </td>
                    <td className="px-3 py-2 text-center text-gray-600 border-b border-gray-100 hidden md:table-cell text-xs">
                      {q.lastRateIncrease
                        ? `${(Number(q.lastRateIncrease.pct) * 100).toFixed(1)}% (${q.lastRateIncrease.date.slice(0, 4)})`
                        : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm">
            <p className="font-semibold text-gray-900 mb-1">Want help choosing the right carrier?</p>
            <p className="text-gray-600 mb-3 text-xs">Rate is only one factor — rate increase history, financial stability, and enrollment process matter too. We compare all of this for you, free.</p>
            <a
              href="tel:8555591700"
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-5 rounded-lg text-sm transition"
            >
              Call 855-559-1700 — Free Help
            </a>
          </div>
        </div>
      )}

      {result && result.quotes.length === 0 && (
        <div className="px-5 pb-5 text-sm text-gray-600">
          No rates found for that zip code. Call <a href="tel:8555591700" className="text-blue-600 underline">855-559-1700</a> and we&apos;ll look it up for you.
        </div>
      )}
    </div>
  );
}
