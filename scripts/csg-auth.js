/**
 * csg-auth.js — shared CSG Actuarial auth with disk-backed token cache.
 *
 * CSG caps concurrent sessions per account (5 by default). In-memory token
 * caching only helps within a single process run; repeated script invocations
 * each consumed a fresh session, eating the cap and triggering 403s with
 * "Max Session Reached" errors. This module persists the token to
 * `scripts/.csg-token.json` (gitignored) so every local script run reuses
 * the same session until it actually expires.
 *
 * Usage:
 *   const { csgFetch, getToken } = require("./csg-auth");
 *   const data = await csgFetch("med_supp/quotes.json", { zip5: "19103", ... });
 *
 * Env (from .env.local or scripts/.env):
 *   CSG_API_KEY      — required
 *   CSG_PORTAL_NAME  — optional, defaults to "csg_individual"
 *   CSG_BASE_URL     — optional, defaults to "https://api.csgactuarial.com/v1"
 */

const fs = require("fs");
const path = require("path");

// Load env from .env.local first (where the Next.js app reads CSG credentials
// from), falling back to scripts/.env if present.
function loadEnv() {
  const candidates = [
    path.resolve(__dirname, "..", ".env.local"),
    path.resolve(__dirname, ".env"),
  ];
  for (const file of candidates) {
    try {
      const text = fs.readFileSync(file, "utf8");
      for (const line of text.split("\n")) {
        const m = line.match(/^\s*([A-Z_]+)\s*=\s*(.*)\s*$/);
        if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
      }
    } catch { /* no-op */ }
  }
}
loadEnv();

const CSG_BASE = process.env.CSG_BASE_URL || "https://api.csgactuarial.com/v1";
const CSG_API_KEY = process.env.CSG_API_KEY || "";
const CSG_PORTAL = process.env.CSG_PORTAL_NAME || "csg_individual";
const TOKEN_FILE = path.resolve(__dirname, ".csg-token.json");

// Refresh the token if it expires within this buffer (15 min)
const EXPIRY_BUFFER_MS = 15 * 60 * 1000;

function readCachedToken() {
  try {
    const raw = JSON.parse(fs.readFileSync(TOKEN_FILE, "utf8"));
    if (!raw?.token || !raw?.expiresMs) return null;
    if (raw.expiresMs <= Date.now() + EXPIRY_BUFFER_MS) return null;
    if (raw.apiKeySuffix !== CSG_API_KEY.slice(-6)) return null; // different key → invalid
    return raw;
  } catch {
    return null;
  }
}

function writeCachedToken(token, expiresMs) {
  try {
    fs.writeFileSync(
      TOKEN_FILE,
      JSON.stringify({
        token,
        expiresMs,
        apiKeySuffix: CSG_API_KEY.slice(-6),
        cachedAt: new Date().toISOString(),
      }, null, 2),
      { mode: 0o600 }, // owner read/write only — token is a credential
    );
  } catch (err) {
    console.warn(`[csg-auth] failed to persist token: ${err.message}`);
  }
}

function clearCachedToken() {
  try { fs.unlinkSync(TOKEN_FILE); } catch { /* already gone */ }
}

async function getToken({ forceRefresh = false } = {}) {
  if (!CSG_API_KEY) throw new Error("CSG_API_KEY not set in .env.local");

  if (!forceRefresh) {
    const cached = readCachedToken();
    if (cached) return cached.token;
  }

  const res = await fetch(`${CSG_BASE}/auth.json`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ api_key: CSG_API_KEY, portal_name: CSG_PORTAL }),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`CSG auth failed (${res.status}): ${text.slice(0, 300)}`);
  }
  const data = await res.json();
  if (!data?.token) throw new Error("CSG auth returned no token");

  const expiresMs = data.expires_date
    ? new Date(data.expires_date).getTime()
    : Date.now() + 60 * 60 * 1000;

  writeCachedToken(data.token, expiresMs);
  return data.token;
}

/**
 * GET a CSG endpoint with authenticated token. Transparently retries once on
 * 401/403 with a force-refreshed token (in case the cached token was revoked).
 */
async function csgFetch(endpoint, params) {
  let token = await getToken();
  const qs = new URLSearchParams(params).toString();
  const url = `${CSG_BASE}/${endpoint}?${qs}`;

  let res = await fetch(url, { headers: { "x-api-token": token } });
  if (res.status === 401 || res.status === 403) {
    // Token may have been revoked; clear and retry once with a fresh auth
    clearCachedToken();
    token = await getToken({ forceRefresh: true });
    res = await fetch(url, { headers: { "x-api-token": token } });
  }
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`CSG ${endpoint} failed (${res.status}): ${text.slice(0, 300)}`);
  }
  return res.json();
}

module.exports = {
  getToken,
  csgFetch,
  clearCachedToken,
  TOKEN_FILE,
};
