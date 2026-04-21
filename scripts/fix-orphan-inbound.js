#!/usr/bin/env node
/**
 * fix-orphan-inbound.js
 * For each orphan service page (zero inbound links from siblings),
 * find 2-3 related pages and add a link TO the orphan in their
 * Related resources section.
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const servicesDir = path.join(__dirname, "..", "app", "services");
const repoRoot = path.join(__dirname, "..");

// Get all existing slugs
const allSlugs = fs.readdirSync(servicesDir).filter(d => {
  const full = path.join(servicesDir, d);
  return fs.statSync(full).isDirectory() && fs.existsSync(path.join(full, "page.tsx"));
});

// Find orphans: pages with zero inbound links from other service pages
function getOrphans() {
  const orphans = [];
  for (const slug of allSlugs) {
    // Check if any other service page links to this slug
    let hasInbound = false;
    for (const otherSlug of allSlugs) {
      if (otherSlug === slug) continue;
      const otherFile = path.join(servicesDir, otherSlug, "page.tsx");
      const content = fs.readFileSync(otherFile, "utf8");
      if (content.includes(`/services/${slug}"`)) {
        hasInbound = true;
        break;
      }
    }
    // Also check learn, supplement, advantage pages
    if (!hasInbound) {
      try {
        const result = execSync(
          `grep -rl "services/${slug}\\"" app/learn app/medicare-supplement app/medicare-advantage app/page.tsx 2>/dev/null | head -1`,
          { cwd: repoRoot, encoding: "utf8" }
        ).trim();
        if (result) hasInbound = true;
      } catch {}
    }
    if (!hasInbound) orphans.push(slug);
  }
  return orphans;
}

// Cluster mapping: which slugs should link to which orphans
function findBestHost(orphanSlug) {
  // Find pages in the same topic that already have inbound links (good candidates to add a link FROM)
  const keywords = orphanSlug.split("-").filter(w => w.length > 3);

  const candidates = [];
  for (const slug of allSlugs) {
    if (slug === orphanSlug) continue;
    // Score by shared keywords
    const slugWords = slug.split("-");
    const shared = keywords.filter(w => slugWords.includes(w)).length;
    if (shared >= 2) candidates.push({ slug, score: shared });
  }

  // Sort by score descending, take top 2
  candidates.sort((a, b) => b.score - a.score);
  return candidates.slice(0, 2).map(c => c.slug);
}

function slugToTitle(slug) {
  return slug
    .replace(/-/g, " ")
    .replace(/\bnj\b/gi, "NJ")
    .replace(/\bfl\b/gi, "FL")
    .replace(/\bnm\b/gi, "NM")
    .replace(/\bpa\b/gi, "PA")
    .replace(/\b\w/g, c => c.toUpperCase());
}

console.log("Finding orphan pages...");
const orphans = getOrphans();
console.log(`Found ${orphans.length} orphan pages with zero inbound links`);

let linksAdded = 0;
let filesModified = new Set();

for (const orphan of orphans) {
  const hosts = findBestHost(orphan);

  for (const hostSlug of hosts) {
    const hostFile = path.join(servicesDir, hostSlug, "page.tsx");
    let content = fs.readFileSync(hostFile, "utf8");

    // Skip if it already links to this orphan
    if (content.includes(`/services/${orphan}"`)) continue;

    // Find the Related resources </ul> and add a link
    const pattern = /(Related resources<\/h2>\s*<ul[^>]*>[\s\S]*?)(<\/ul>)/;
    const match = content.match(pattern);

    if (match) {
      const linkClass = content.includes("text-blue-700 hover:underline")
        ? "text-blue-700 hover:underline"
        : "text-blue-600 hover:underline";

      const title = slugToTitle(orphan);
      const newLink = `            <li>
              <Link
                href="/services/${orphan}"
                className="${linkClass}"
              >
                ${title}
              </Link>
            </li>\n`;

      content = content.replace(pattern, `$1${newLink}$2`);
      fs.writeFileSync(hostFile, content);
      linksAdded++;
      filesModified.add(hostSlug);
    }
  }
}

console.log(`✓ Added ${linksAdded} inbound links across ${filesModified.size} files`);

// Re-check orphans
const remaining = getOrphans();
console.log(`Remaining orphans: ${remaining.length}`);
if (remaining.length > 0 && remaining.length <= 20) {
  console.log("Remaining:", remaining.join(", "));
}
