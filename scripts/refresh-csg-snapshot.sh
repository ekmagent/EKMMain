#!/usr/bin/env bash
# refresh-csg-snapshot.sh
# Monthly CSG filed-rate snapshot refresh, run locally by launchd
# (com.easykindmedicare.csg-refresh). Runs on this machine — not CI — because
# CSG Actuarial auth (token cache) lives here and must never reach the repo.
#
# Flow: pull → re-snapshot → if rates changed: build gate → commit ONLY the
# snapshot JSON → push (Vercel deploys) → IndexNow ping so Bing/ChatGPT pick
# up the fresh data without waiting for a crawl.
#
# Load/unload:
#   cp scripts/launchd/com.easykindmedicare.csg-refresh.plist ~/Library/LaunchAgents/
#   launchctl load ~/Library/LaunchAgents/com.easykindmedicare.csg-refresh.plist
# Logs: ~/Library/Logs/csg-refresh.log

set -euo pipefail

# launchd runs with a minimal PATH; pick up Homebrew/system node + git
export PATH="/opt/homebrew/bin:/usr/local/bin:$PATH"

REPO="/Users/anthonyorner/Claude Code/easykindmedicare"
cd "$REPO"

echo "=== CSG snapshot refresh: $(date) ==="

if [ "$(git rev-parse --abbrev-ref HEAD)" != "main" ]; then
  echo "Not on main — aborting."
  exit 1
fi

# Refuse to run over unrelated work-in-progress; we must only ever commit
# csg-snapshot.json from an otherwise clean tree.
if ! git diff --quiet -- . ':!csg-snapshot.json' ':!nj-county-snapshot.json' || ! git diff --cached --quiet; then
  echo "Uncommitted changes present — aborting so they aren't swept into a bot commit."
  exit 1
fi

git pull --ff-only

node scripts/csg-snapshot.js
# County-level NJ probe (21 counties) — powers the /medicare-broker/new-jersey
# hub's uniform-rates callout. Non-fatal: a failed probe must not block the
# state refresh.
node scripts/csg-nj-county-probe.js || echo "NJ county probe failed (non-fatal, keeping previous county snapshot)"

# Stage both snapshots (only if present) so the change check also sees a
# newly created, previously untracked county snapshot.
git add -- csg-snapshot.json
if [ -f nj-county-snapshot.json ]; then
  git add -- nj-county-snapshot.json
fi

if git diff --cached --quiet; then
  echo "No rate changes since last snapshot — nothing to publish."
  exit 0
fi

# BUILD GATE — the rate-index pages consume this JSON at build time; never
# push data the site can't compile with.
npm run build
git commit -m "CSG rate snapshot refresh: $(date +%Y-%m-%d)"
git push

# Let the Vercel deploy triggered by the push go live, then submit the
# sitemap to IndexNow (Bing's index powers ChatGPT search).
sleep 240
node scripts/indexnow-submit.js || echo "IndexNow submission failed (non-fatal)"

echo "=== Refresh complete: $(date) ==="
