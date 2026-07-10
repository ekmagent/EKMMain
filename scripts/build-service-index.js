/**
 * build-service-index.js
 * Scans app/services/ for page directories and writes service-index.json.
 * Run before `next build` so the sitemap can reference all service pages
 * even when the source tree isn't available at runtime (e.g. Vercel).
 */

const fs = require("fs");
const path = require("path");

const servicesDir = path.join(__dirname, "..", "app", "services");
const outFile = path.join(__dirname, "..", "service-index.json");

// Prefer git-derived dates (scripts/build-page-dates.js); mtimes are just
// checkout time in CI and would mark every page as modified on every deploy.
let pageDates = {};
try {
  pageDates = JSON.parse(
    fs.readFileSync(path.join(__dirname, "..", "page-dates.json"), "utf8")
  );
} catch {
  // page-dates.json not built yet — fall back to mtime
}

const entries = fs
  .readdirSync(servicesDir)
  .filter((entry) => {
    const full = path.join(servicesDir, entry);
    return (
      fs.statSync(full).isDirectory() &&
      fs.existsSync(path.join(full, "page.tsx"))
    );
  })
  .sort()
  .map((slug) => {
    const pagePath = path.join(servicesDir, slug, "page.tsx");
    const mtime = fs.statSync(pagePath).mtime.toISOString().split("T")[0];
    return { slug, lastModified: pageDates[`services/${slug}`] || mtime };
  });

const slugs = entries.map((e) => e.slug);

fs.writeFileSync(
  outFile,
  JSON.stringify({ slugs, entries }, null, 2) + "\n"
);
console.log(`service-index.json: ${slugs.length} service pages indexed`);
