#!/usr/bin/env node
/**
 * indexnow-submit.js
 * Submits site URLs to IndexNow (Bing, Seznam, Naver, Yandex). Bing's index
 * powers ChatGPT search — our highest-converting discovery channel — so new
 * or updated pages should be pushed here instead of waiting for a crawl.
 *
 * The key file public/<KEY>.txt must be deployed and reachable first.
 *
 * Usage:
 *   node scripts/indexnow-submit.js                  # submit every sitemap URL
 *   node scripts/indexnow-submit.js /medicare-supplement /learn/what-is-medigap
 */

const KEY = "23b7a8ad805b6b3d5034e6a43a75309b";
const HOST = "medicareyourself.com";
const SITE = `https://${HOST}`;

async function sitemapUrls() {
  const res = await fetch(`${SITE}/sitemap.xml`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

async function main() {
  const args = process.argv.slice(2);
  const urlList = args.length
    ? args.map((p) => (p.startsWith("http") ? p : `${SITE}${p}`))
    : await sitemapUrls();

  // Sanity check the key file is live before submitting
  const keyRes = await fetch(`${SITE}/${KEY}.txt`);
  if (!keyRes.ok || (await keyRes.text()).trim() !== KEY) {
    console.error(`Key file ${SITE}/${KEY}.txt is not live yet — deploy first.`);
    process.exit(1);
  }

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: `${SITE}/${KEY}.txt`,
      urlList: urlList.slice(0, 10000),
    }),
  });
  console.log(`IndexNow: submitted ${urlList.length} URLs — HTTP ${res.status}`);
  if (!res.ok) console.error(await res.text());
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
