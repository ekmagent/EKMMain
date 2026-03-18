"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ToolsLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await fetch("/api/tools/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/tools/keyword-checker");
    } else {
      setError("Wrong password");
    }
    setLoading(false);
  }

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#0a0a0a" }}>
      <form onSubmit={handleSubmit} style={{ background: "#1a1a1a", padding: "2rem", borderRadius: "12px", width: "100%", maxWidth: "360px", border: "1px solid #333" }}>
        <h1 style={{ color: "#fff", fontSize: "1.25rem", marginBottom: "0.5rem" }}>Internal Tools</h1>
        <p style={{ color: "#888", fontSize: "0.875rem", marginBottom: "1.5rem" }}>Enter password to continue</p>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          autoFocus
          style={{
            width: "100%", padding: "0.75rem", borderRadius: "8px",
            border: "1px solid #444", background: "#111", color: "#fff",
            fontSize: "1rem", marginBottom: "1rem", boxSizing: "border-box",
          }}
        />

        {error && <p style={{ color: "#ef4444", fontSize: "0.875rem", marginBottom: "0.75rem" }}>{error}</p>}

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%", padding: "0.75rem", borderRadius: "8px",
            border: "none", background: "#2563eb", color: "#fff",
            fontSize: "1rem", cursor: loading ? "wait" : "pointer",
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? "..." : "Log in"}
        </button>
      </form>
    </div>
  );
}
