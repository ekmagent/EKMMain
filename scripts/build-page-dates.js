/**
 * build-page-dates.js
 * Writes page-dates.json mapping every app route (path to its page.tsx,
 * relative to app/) to the date of the last git commit that touched it.
 *
 * Why: sitemap lastmod must be stable and truthful. File mtimes are useless
 * in CI (every clone stamps checkout time on all files), which tells Google
 * "everything changed today" on every deploy and trains it to ignore lastmod.
 *
 * Run locally (full git history) whenever pages change; the output is
 * committed. In environments without git history (Vercel build), the script
 * leaves the committed file untouched. Files with no git date (brand-new,
 * uncommitted, or outside a shallow-clone window) keep their existing entry,
 * or get today's date if they've never been indexed.
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const root = path.join(__dirname, "..");
const appDir = path.join(root, "app");
const outFile = path.join(root, "page-dates.json");

function fullHistoryAvailable() {
  // CI clones are shallow — `git log -1 -- file` would return HEAD's date for
  // every file, stamping today on all 200+ pages. Only regenerate locally.
  if (process.env.VERCEL || process.env.CI) return false;
  try {
    execSync("git rev-parse --is-inside-work-tree", { cwd: root, stdio: "pipe" });
    const shallow = execSync("git rev-parse --is-shallow-repository", {
      cwd: root,
      stdio: "pipe",
    })
      .toString()
      .trim();
    return shallow !== "true";
  } catch {
    return false;
  }
}

function walkPages(dir, found) {
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (fs.statSync(full).isDirectory()) {
      walkPages(full, found);
    } else if (entry === "page.tsx" || entry === "page.mdx" || entry === "page.md") {
      found.push(full);
    }
  }
  return found;
}

function gitDate(file) {
  try {
    const out = execSync(`git log -1 --format=%cI -- "${file}"`, {
      cwd: root,
      stdio: "pipe",
    })
      .toString()
      .trim();
    return out ? out.split("T")[0] : null;
  } catch {
    return null;
  }
}

if (!fullHistoryAvailable()) {
  console.log("page-dates.json: no full git history here (CI/shallow), keeping committed file");
  process.exit(0);
}

let existing = {};
try {
  existing = JSON.parse(fs.readFileSync(outFile, "utf8"));
} catch {
  // first run
}

const today = new Date().toISOString().split("T")[0];
const dates = {};
let fromGit = 0;
let kept = 0;
let fresh = 0;

for (const file of walkPages(appDir, []).sort()) {
  // key is the route dir relative to app/, "" for app/page.tsx itself
  const key = path.relative(appDir, path.dirname(file)).split(path.sep).join("/");
  const d = gitDate(path.relative(root, file));
  if (d) {
    dates[key] = d;
    fromGit++;
  } else if (existing[key]) {
    dates[key] = existing[key];
    kept++;
  } else {
    dates[key] = today;
    fresh++;
  }
}

fs.writeFileSync(outFile, JSON.stringify(dates, null, 2) + "\n");
console.log(
  `page-dates.json: ${Object.keys(dates).length} routes (${fromGit} from git, ${kept} kept, ${fresh} new)`
);
