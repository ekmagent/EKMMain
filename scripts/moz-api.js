/**
 * moz-api.js — Shared helper module for the Moz Links API v2.
 *
 * Provides convenience wrappers for URL metrics, domain authority,
 * top pages, and (experimental) ranking keywords.
 *
 * Auth uses HTTP Basic with the pre-encoded token from .env.
 *
 * Row budget: Starter Medium plan = 3,000 rows/month.
 * Automated weekly runs target ~2,200 rows/month, leaving ~800 for manual use.
 */

require("dotenv").config({ path: __dirname + "/.env" });
const fs = require("fs");
const path = require("path");

const MOZ_API_TOKEN = process.env.MOZ_API_TOKEN;
const MOZ_API_BASE = "https://lsapi.seomoz.com/v2";

// Row budget tracking — persists across script invocations within a month
const MOZ_MONTHLY_BUDGET = 50000;
const MOZ_USAGE_FILE = path.join(__dirname, "..", "moz-usage.json");

if (!MOZ_API_TOKEN) {
  console.warn("[moz-api] MOZ_API_TOKEN is not set in .env — all requests will fail.");
}

// ---------------------------------------------------------------------------
// Row usage tracking
// ---------------------------------------------------------------------------

function loadUsage() {
  try {
    const data = JSON.parse(fs.readFileSync(MOZ_USAGE_FILE, "utf8"));
    const currentMonth = new Date().toISOString().slice(0, 7); // "2026-03"
    if (data.month === currentMonth) return data;
    // New month — reset
    return { month: currentMonth, rowsUsed: 0, calls: [] };
  } catch {
    return { month: new Date().toISOString().slice(0, 7), rowsUsed: 0, calls: [] };
  }
}

function saveUsage(usage) {
  fs.writeFileSync(MOZ_USAGE_FILE, JSON.stringify(usage, null, 2));
}

function trackRows(endpoint, rowCount) {
  const usage = loadUsage();
  usage.rowsUsed += rowCount;
  usage.calls.push({
    date: new Date().toISOString(),
    endpoint,
    rows: rowCount,
  });
  // Keep only last 100 call entries to avoid file bloat
  if (usage.calls.length > 100) usage.calls = usage.calls.slice(-100);
  saveUsage(usage);

  const remaining = MOZ_MONTHLY_BUDGET - usage.rowsUsed;
  if (remaining < 500) {
    console.warn(`[moz-api] Budget warning: ${usage.rowsUsed}/${MOZ_MONTHLY_BUDGET} rows used this month (${remaining} remaining)`);
  }
}

/**
 * Check remaining row budget for the current month.
 * @returns {{ rowsUsed: number, remaining: number, month: string }}
 */
function getUsageSummary() {
  const usage = loadUsage();
  return {
    rowsUsed: usage.rowsUsed,
    remaining: MOZ_MONTHLY_BUDGET - usage.rowsUsed,
    month: usage.month,
  };
}

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

/**
 * Sleep for the given number of milliseconds.
 */
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Make a POST request to a Moz API endpoint with automatic 429 retry.
 *
 * @param {string}  url      Full endpoint URL.
 * @param {object}  body     JSON body to send.
 * @param {object}  [headers]  Additional headers (merged with defaults).
 * @param {number}  [retries]  How many times to retry on 429 (default 1).
 * @returns {object|null}  Parsed JSON response, or null on failure.
 */
async function mozPost(url, body, headers = {}, retries = 1) {
  const defaultHeaders = {
    "Content-Type": "application/json",
    Authorization: `Basic ${MOZ_API_TOKEN}`,
  };

  const mergedHeaders = { ...defaultHeaders, ...headers };

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: mergedHeaders,
        body: JSON.stringify(body),
      });

      // Rate-limited — back off and retry once.
      if (res.status === 429) {
        const retryAfter = parseInt(res.headers.get("retry-after") || "10", 10);
        const waitMs = (retryAfter || 10) * 1000;
        if (attempt < retries) {
          console.warn(`[moz-api] 429 rate-limited. Waiting ${waitMs / 1000}s before retry...`);
          await sleep(waitMs);
          continue;
        }
        console.error("[moz-api] 429 rate-limited and no retries left.");
        return null;
      }

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        console.error(`[moz-api] ${res.status} ${res.statusText} — ${url}\n  ${text}`);
        return null;
      }

      return await res.json();
    } catch (err) {
      console.error(`[moz-api] Network error for ${url}: ${err.message}`);
      return null;
    }
  }

  return null;
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Fetch URL-level metrics for up to 50 targets at once.
 *
 * @param {string[]} targets  Array of URLs or domains (max 50).
 * @returns {Array<object|null>}  One result per target. Failed lookups are null.
 *   Successful entries: { page, domain_authority, page_authority,
 *                         spam_score, external_pages_to_root_domain }
 */
async function getUrlMetrics(targets) {
  if (!Array.isArray(targets) || targets.length === 0) return [];
  if (targets.length > 50) {
    console.warn("[moz-api] getUrlMetrics: max 50 targets per call — truncating.");
    targets = targets.slice(0, 50);
  }

  const data = await mozPost(`${MOZ_API_BASE}/url_metrics`, {
    targets,
  });

  if (!data) {
    // Return null for every target so callers can zip by index.
    return targets.map(() => null);
  }

  trackRows("url_metrics", targets.length);

  const results = Array.isArray(data.results) ? data.results : data;

  return targets.map((target, i) => {
    const entry = results[i];
    if (!entry) return null;
    return {
      page: entry.page || target,
      domain_authority: entry.domain_authority ?? null,
      page_authority: entry.page_authority ?? null,
      spam_score: entry.spam_score ?? null,
      external_pages_to_root_domain: entry.root_domains_to_root_domain ?? entry.external_pages_to_root_domain ?? null,
    };
  });
}

/**
 * Convenience wrapper: get Domain Authority scores for a list of domains.
 *
 * @param {string[]} domains  e.g. ["boomerbenefits.com", "medicareresources.org"]
 * @returns {Map<string, number|null>}  domain -> DA score (null if lookup failed).
 */
async function getDomainAuthority(domains) {
  const metrics = await getUrlMetrics(domains);
  const map = new Map();
  domains.forEach((domain, i) => {
    const m = metrics[i];
    map.set(domain, m ? m.domain_authority : null);
  });
  return map;
}

/**
 * Get the top pages on a domain, sorted by external links.
 *
 * @param {string} domain   e.g. "boomerbenefits.com"
 * @param {object} [options]
 * @param {number} [options.limit=50]  Max pages to return.
 * @returns {Array<object>}  Array of { page, title, page_authority, external_pages_to_page }
 */
async function getTopPages(domain, options = {}) {
  const limit = options.limit ?? 50;

  const data = await mozPost(`${MOZ_API_BASE}/top_pages`, {
    target: domain,
    limit,
  });

  if (!data) return [];

  trackRows("top_pages", Array.isArray(data.results) ? data.results.length : limit);

  const results = Array.isArray(data.results) ? data.results : Array.isArray(data) ? data : [];

  return results.map((entry) => ({
    page: entry.page || "",
    title: entry.title || "",
    page_authority: entry.page_authority ?? null,
    external_pages_to_page: entry.external_pages_to_page ?? null,
  }));
}

/**
 * Experimental: fetch ranking keywords for a domain.
 *
 * Uses a different Moz endpoint that may require a separate token.
 * If the endpoint returns 401/403 the function logs a warning and
 * returns an empty array — callers should handle that gracefully.
 *
 * @param {string} domain  e.g. "boomerbenefits.com"
 * @returns {Array<object>}  Keyword data, or [] if unavailable.
 */
async function getRankingKeywords(domain) {
  const url = "https://moz.com/api/v2/keyword_metrics";

  // This endpoint uses a different auth header.
  const headers = {
    "x-moz-token": MOZ_API_TOKEN,
  };
  // Remove the default Basic auth — override via headers.
  const fullHeaders = {
    "Content-Type": "application/json",
    "x-moz-token": MOZ_API_TOKEN,
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: fullHeaders,
      body: JSON.stringify({ target: domain }),
    });

    if (res.status === 401 || res.status === 403) {
      console.warn(
        `[moz-api] getRankingKeywords: ${res.status} — this endpoint may require a different API token. Returning [].`
      );
      return [];
    }

    if (res.status === 429) {
      console.warn("[moz-api] getRankingKeywords: rate-limited (429). Returning [].");
      return [];
    }

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error(`[moz-api] getRankingKeywords: ${res.status} ${res.statusText}\n  ${text}`);
      return [];
    }

    const data = await res.json();
    return Array.isArray(data.results) ? data.results : Array.isArray(data) ? data : [];
  } catch (err) {
    console.error(`[moz-api] getRankingKeywords network error: ${err.message}`);
    return [];
  }
}

// ---------------------------------------------------------------------------
// Self-audit: check your own site's page authority and link metrics
// ---------------------------------------------------------------------------

/**
 * Audit your own site's pages for Page Authority, spam score, and link metrics.
 * Discovers pages automatically from the app/ directory.
 *
 * @param {object} [options]
 * @param {string} [options.siteUrl]  Base URL (default: https://www.medicareyourself.com)
 * @param {string} [options.appDir]   Path to app/ directory for page discovery.
 * @param {string[]} [options.urls]   Explicit list of URLs to audit (overrides discovery).
 * @returns {Array<object>}  Metrics per page, sorted by page_authority ascending (weakest first).
 */
async function auditOwnSite(options = {}) {
  const siteUrl = options.siteUrl || process.env.SITE_URL || "https://www.medicareyourself.com";
  let urls = options.urls;

  if (!urls) {
    // Discover pages from app/ directory
    const appDir = options.appDir || path.resolve(__dirname, "..", "app");
    urls = discoverSiteUrls(appDir, siteUrl);
  }

  if (urls.length === 0) {
    console.warn("[moz-api] auditOwnSite: no URLs to audit.");
    return [];
  }

  console.log(`[moz-api] Auditing ${urls.length} pages on ${siteUrl}...`);

  // getUrlMetrics handles batching up to 50
  const metrics = await getUrlMetrics(urls);

  const results = urls.map((url, i) => {
    const m = metrics[i];
    return {
      url,
      page_authority: m?.page_authority ?? null,
      domain_authority: m?.domain_authority ?? null,
      spam_score: m?.spam_score ?? null,
      external_links: m?.external_pages_to_root_domain ?? null,
      needs_attention: m ? (m.page_authority !== null && m.page_authority < 15) || (m.spam_score !== null && m.spam_score > 5) : false,
    };
  });

  // Sort weakest pages first — these need the most help
  results.sort((a, b) => (a.page_authority ?? 0) - (b.page_authority ?? 0));

  return results;
}

/**
 * Discover site URLs by scanning app/ for page.tsx files.
 */
function discoverSiteUrls(appDir, siteUrl) {
  const urls = [];
  function walk(dir) {
    let entries;
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
    for (const entry of entries) {
      if (entry.name.startsWith(".") || entry.name === "node_modules") continue;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (entry.name === "page.tsx") {
        const rel = path.relative(appDir, dir);
        const urlPath = rel === "." ? "/" : "/" + rel.replace(/\\/g, "/");
        urls.push(siteUrl.replace(/\/$/, "") + urlPath);
      }
    }
  }
  walk(appDir);
  return urls;
}

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

module.exports = {
  getUrlMetrics,
  getDomainAuthority,
  getTopPages,
  getRankingKeywords,
  auditOwnSite,
  getUsageSummary,
};
