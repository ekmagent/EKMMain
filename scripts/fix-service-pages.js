#!/usr/bin/env node
/**
 * fix-service-pages.js
 * One-shot script to fix broken internal links, add canonical URLs,
 * fix breadcrumbs, and correct article schema dates across all service pages.
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const servicesDir = path.join(__dirname, "..", "app", "services");
const SITE_URL = "https://medicareyourself.com";

// ── Broken link mapping ────────────────────────────────────────────────
// Maps broken href paths to correct paths.
// Order matters: longer/more-specific patterns first to avoid partial matches.
const linkMap = {
  // /get-a-free-quote and /get-quote
  "/get-a-free-quote": "/quote",
  "/get-quote": "/quote",

  // ── /guides/... (entire route doesn't exist) ─────────────────────────
  "/guides/medicare-advantage-vs-medigap": "/medicare-supplement/new-jersey/vs-medicare-advantage",
  "/guides/medigap-vs-medicare-advantage": "/medicare-supplement/new-jersey/vs-medicare-advantage",
  "/guides/medicare-supplement-vs-advantage": "/medicare-supplement/new-jersey/vs-medicare-advantage",
  "/guides/medigap-plan-g-vs-plan-n": "/medicare-supplement/new-jersey/plan-g-vs-plan-n",
  "/guides/medigap-plan-g-new-jersey": "/medicare-supplement/new-jersey/plan-g-vs-plan-n",
  "/guides/medigap-plan-g-nj": "/medicare-supplement/new-jersey/plan-g-vs-plan-n",
  "/guides/medigap-plan-g": "/medicare-supplement/new-jersey/plan-g-vs-plan-n",
  "/guides/medicare-part-d-drug-coverage": "/learn/medicare-parts-explained",
  "/guides/medicare-part-d-explained": "/learn/medicare-parts-explained",
  "/guides/medicare-part-d-specialty-drugs": "/learn/medicare-parts-explained",
  "/guides/medicare-prescription-drug-costs": "/learn/medicare-parts-explained",
  "/guides/medigap-open-enrollment-period": "/medicare-supplement/new-jersey/turning-65",
  "/guides/medigap-open-enrollment": "/medicare-supplement/new-jersey/turning-65",
  "/guides/when-to-enroll-in-medicare": "/learn/how-to-sign-up-for-medicare",
  "/guides/new-to-medicare-nj": "/learn/how-to-sign-up-for-medicare",
  "/guides/new-jersey-medigap-enrollment-rules": "/medicare-supplement/new-jersey",
  "/guides/guaranteed-issue-rights": "/medicare-supplement/new-jersey",
  "/guides/annual-enrollment-period": "/learn/medicare-enrollment-periods",
  "/guides/medicare-under-65-disability": "/services/you-get-a-medicare-supplement-if-you-are-on-disability",
  "/guides/medicare-vs-employer-coverage": "/learn/medicare-parts-explained",

  // ── /medicare-guides/... (entire route doesn't exist) ─────────────────
  // Supplement vs Advantage
  "/medicare-guides/medicare-advantage-vs-medigap": "/medicare-supplement/new-jersey/vs-medicare-advantage",
  "/medicare-guides/medigap-vs-medicare-advantage": "/medicare-supplement/new-jersey/vs-medicare-advantage",
  "/medicare-guides/medicare-supplement-vs-medicare-advantage": "/medicare-supplement/new-jersey/vs-medicare-advantage",
  "/medicare-guides/medicare-supplement-vs-advantage": "/medicare-supplement/new-jersey/vs-medicare-advantage",
  "/medicare-guides/original-medicare-vs-medicare-advantage": "/medicare-supplement/new-jersey/vs-medicare-advantage",
  "/medicare-guides/medicare-advantage-vs-original-medicare": "/medicare-supplement/new-jersey/vs-medicare-advantage",
  // Plan G vs N
  "/medicare-guides/medigap-plan-g-vs-plan-n": "/medicare-supplement/new-jersey/plan-g-vs-plan-n",
  "/medicare-guides/plan-g-vs-plan-n": "/medicare-supplement/new-jersey/plan-g-vs-plan-n",
  // Plan G
  "/medicare-guides/medigap-plan-g-new-jersey": "/medicare-supplement/new-jersey/plan-g-vs-plan-n",
  "/medicare-guides/medigap-plan-g-nj": "/medicare-supplement/new-jersey/plan-g-vs-plan-n",
  "/medicare-guides/medigap-plan-g": "/medicare-supplement/new-jersey/plan-g-vs-plan-n",
  "/medicare-guides/medicare-plan-g": "/medicare-supplement/new-jersey/plan-g-vs-plan-n",
  "/medicare-guides/medicare-supplement-plan-g-nj": "/medicare-supplement/new-jersey/plan-g-vs-plan-n",
  "/medicare-guides/medicare-supplement-plan-g": "/medicare-supplement/new-jersey/plan-g-vs-plan-n",
  "/medicare-guides/plan-g-new-jersey": "/medicare-supplement/new-jersey/plan-g-vs-plan-n",
  // Open enrollment
  "/medicare-guides/medigap-open-enrollment-period": "/medicare-supplement/new-jersey/turning-65",
  "/medicare-guides/medigap-open-enrollment-nj": "/medicare-supplement/new-jersey/turning-65",
  "/medicare-guides/medigap-open-enrollment": "/medicare-supplement/new-jersey/turning-65",
  "/medicare-guides/nj-medigap-open-enrollment": "/medicare-supplement/new-jersey/turning-65",
  "/medicare-guides/turning-65-medicare-checklist": "/medicare-supplement/new-jersey/turning-65",
  "/medicare-guides/turning-65-checklist": "/medicare-supplement/new-jersey/turning-65",
  "/medicare-guides/turning-65-nj": "/medicare-supplement/new-jersey/turning-65",
  "/medicare-guides/what-to-do-when-turning-65": "/medicare-supplement/new-jersey/turning-65",
  // Enrollment periods
  "/medicare-guides/medicare-open-enrollment": "/learn/medicare-enrollment-periods",
  "/medicare-guides/medicare-enrollment-periods": "/learn/medicare-enrollment-periods",
  "/medicare-guides/medicare-enrollment-deadlines": "/learn/medicare-enrollment-periods",
  "/medicare-guides/nj-medicare-enrollment-deadlines": "/learn/medicare-enrollment-periods",
  "/medicare-guides/new-jersey-medicare-enrollment": "/learn/how-to-sign-up-for-medicare",
  "/medicare-guides/when-to-enroll-in-medicare-nj": "/learn/how-to-sign-up-for-medicare",
  "/medicare-guides/when-to-enroll-medicare-nj": "/learn/how-to-sign-up-for-medicare",
  "/medicare-guides/when-to-enroll-in-medicare-part-b": "/learn/how-to-sign-up-for-medicare",
  "/medicare-guides/when-to-enroll-in-medicare": "/learn/how-to-sign-up-for-medicare",
  "/medicare-guides/how-to-enroll-in-medicare": "/learn/how-to-sign-up-for-medicare",
  "/medicare-guides/how-to-choose-a-medicare-plan": "/learn/medicare-parts-explained",
  // Medigap plans
  "/medicare-guides/medigap-plans-new-jersey": "/medicare-supplement/new-jersey",
  "/medicare-guides/medigap-plans-in-new-jersey": "/medicare-supplement/new-jersey",
  "/medicare-guides/medigap-plans-nj": "/medicare-supplement/new-jersey",
  "/medicare-guides/medigap-plans-explained": "/learn/what-is-medigap",
  "/medicare-guides/medigap-plans": "/learn/what-is-medigap",
  "/medicare-guides/medigap-underwriting": "/medicare-supplement/new-jersey",
  "/medicare-guides/medicare-supplement-plans-new-jersey": "/medicare-supplement/new-jersey",
  "/medicare-guides/medicare-supplement-plans-nj": "/medicare-supplement/new-jersey",
  "/medicare-guides/medicare-supplement-plans": "/learn/what-is-medigap",
  // Rates
  "/medicare-guides/medicare-supplement-rates-nj": "/medicare-supplement/new-jersey/cost",
  "/medicare-guides/medicare-supplement-rate-increases": "/medicare-supplement/new-jersey/cost",
  "/medicare-guides/medicare-supplement-rates": "/medicare-supplement/new-jersey/cost",
  // Medicare Advantage
  "/medicare-guides/medicare-advantage-plans-new-jersey": "/medicare-advantage/new-jersey",
  "/medicare-guides/medicare-advantage-plans-nj": "/medicare-advantage/new-jersey",
  "/medicare-guides/medicare-advantage-nj": "/medicare-advantage/new-jersey",
  "/medicare-guides/medicare-advantage-plans-hudson-county": "/medicare-advantage/new-jersey",
  "/medicare-guides/medicare-advantage-plans-union-county": "/medicare-advantage/new-jersey",
  "/medicare-guides/medicare-advantage-hudson-county": "/medicare-advantage/new-jersey",
  "/medicare-guides/medicare-advantage-bergen-county": "/medicare-advantage/new-jersey",
  "/medicare-guides/medicare-advantage-camden-county": "/medicare-advantage/new-jersey",
  "/medicare-guides/medicare-advantage-monmouth-county": "/medicare-advantage/new-jersey",
  "/medicare-guides/medicare-advantage-passaic-county": "/medicare-advantage/new-jersey",
  "/medicare-guides/medicare-advantage-south-jersey": "/medicare-advantage/new-jersey",
  // Part B
  "/medicare-guides/medicare-part-b-late-enrollment-penalty": "/learn/how-to-sign-up-for-medicare",
  "/medicare-guides/medicare-part-b-enrollment": "/learn/how-to-sign-up-for-medicare",
  "/medicare-guides/part-b-late-enrollment-penalty": "/learn/how-to-sign-up-for-medicare",
  "/medicare-guides/part-b-enrollment": "/learn/how-to-sign-up-for-medicare",
  "/medicare-guides/medicare-part-b-outpatient-costs": "/learn/medicare-parts-explained",
  "/medicare-guides/medicare-part-b-coverage": "/learn/medicare-parts-explained",
  "/medicare-guides/medicare-part-b-costs": "/learn/medicare-parts-explained",
  "/medicare-guides/medicare-part-b-premium-2026": "/learn/irmaa-medicare-surcharge",
  "/medicare-guides/medicare-part-b": "/learn/medicare-parts-explained",
  "/medicare-guides/part-b-deductible-and-coinsurance": "/learn/medicare-parts-explained",
  // Part D
  "/medicare-guides/medicare-part-d-prescription-drug-plans": "/learn/medicare-parts-explained",
  "/medicare-guides/medicare-part-d-prescription-drug-coverage": "/learn/medicare-parts-explained",
  "/medicare-guides/medicare-part-d-drug-coverage": "/learn/medicare-parts-explained",
  "/medicare-guides/medicare-part-d-drug-plans": "/learn/medicare-parts-explained",
  "/medicare-guides/medicare-part-d-enrollment": "/learn/medicare-parts-explained",
  "/medicare-guides/medicare-part-d-explained": "/learn/medicare-parts-explained",
  "/medicare-guides/medicare-part-d-insulin-costs": "/learn/medicare-parts-explained",
  "/medicare-guides/medicare-part-d-biologics": "/learn/medicare-parts-explained",
  "/medicare-guides/medicare-part-d-nj": "/learn/medicare-parts-explained",
  "/medicare-guides/medicare-part-d-new-jersey": "/learn/medicare-parts-explained",
  "/medicare-guides/medicare-part-d": "/learn/medicare-parts-explained",
  "/medicare-guides/part-d-prescription-drug-plans": "/learn/medicare-parts-explained",
  "/medicare-guides/part-d-prescription-drug-coverage": "/learn/medicare-parts-explained",
  "/medicare-guides/part-d-drug-coverage": "/learn/medicare-parts-explained",
  "/medicare-guides/part-d-drug-plans": "/learn/medicare-parts-explained",
  "/medicare-guides/part-d-late-enrollment-penalty": "/learn/medicare-parts-explained",
  "/medicare-guides/part-d-standalone-drug-plans": "/learn/medicare-parts-explained",
  // Guaranteed issue
  "/medicare-guides/guaranteed-issue-rights": "/medicare-supplement/new-jersey",
  "/medicare-guides/guaranteed-issue-medigap": "/medicare-supplement/new-jersey",
  // Switching
  "/medicare-guides/switching-from-advantage-to-medigap": "/medicare-supplement/switch-carriers",
  // Disability
  "/medicare-guides/medicare-disability-under-65": "/services/you-get-a-medicare-supplement-if-you-are-on-disability",
  "/medicare-guides/esrd-medicare-eligibility": "/services/what-is-the-best-medicare-plan-for-dialysis",
  "/medicare-guides/esrd-and-medicare-enrollment": "/services/what-is-the-best-medicare-plan-for-dialysis",
  // Coverage topics
  "/medicare-guides/medicare-physical-therapy-coverage": "/services/best-medicare-plan-for-chronic-conditions",
  "/medicare-guides/medicare-preventive-services": "/learn/medicare-parts-explained",
  "/medicare-guides/medicare-specialist-coverage": "/learn/medicare-parts-explained",
  "/medicare-guides/medicare-skilled-nursing-facility-coverage": "/learn/medicare-parts-explained",
  "/medicare-guides/skilled-nursing-facility-coverage": "/learn/medicare-parts-explained",
  "/medicare-guides/durable-medical-equipment-coverage": "/learn/medicare-parts-explained",
  "/medicare-guides/medicare-cgm-coverage": "/services/medicare-enrollment-help-for-people-with-diabetes",
  "/medicare-guides/mental-health-coverage": "/services/medicare-broker-for-anxiety-disorder-patients",
  "/medicare-guides/medicare-for-chronic-conditions": "/services/best-medicare-plan-for-chronic-conditions",
  "/medicare-guides/independent-broker-vs-captive-agent": "/services/best-medicare-broker-no-cost-to-you",
  "/medicare-guides/new-jersey-medicare-savings-programs": "/learn/medicare-help-low-income",
  "/medicare-guides/florida-birthday-rule": "/services/medicare-consultant-in-ft-lauderdale-fl",
  "/medicare-guides/florida-medigap-rules": "/services/tampa-medicare-agent",

  // ── /medicare/... (route doesn't exist) ───────────────────────────────
  "/medicare/medicare-advantage-vs-medigap": "/medicare-supplement/new-jersey/vs-medicare-advantage",
  "/medicare/medigap-vs-medicare-advantage": "/medicare-supplement/new-jersey/vs-medicare-advantage",
  "/medicare/medicare-advantage-vs-original-medicare": "/medicare-supplement/new-jersey/vs-medicare-advantage",
  "/medicare/medicare-advantage-plans-nj": "/medicare-advantage/new-jersey",
  "/medicare/medicare-advantage-new-jersey": "/medicare-advantage/new-jersey",
  "/medicare/medicare-advantage-bergen-county": "/medicare-advantage/new-jersey",
  "/medicare/medicare-advantage-middlesex-county": "/medicare-advantage/new-jersey",
  "/medicare/medicare-advantage": "/medicare-advantage/new-jersey",
  "/medicare/advantage-plans-nj": "/medicare-advantage/new-jersey",
  "/medicare/advantage-plans": "/medicare-advantage/new-jersey",
  "/medicare/advantage": "/medicare-advantage/new-jersey",
  "/medicare/medigap-plans-new-jersey": "/medicare-supplement/new-jersey",
  "/medicare/medigap-plans-nj": "/medicare-supplement/new-jersey",
  "/medicare/medigap-plans": "/learn/what-is-medigap",
  "/medicare/medigap-plan-g-new-jersey": "/medicare-supplement/new-jersey/plan-g-vs-plan-n",
  "/medicare/medigap-plan-g-nj": "/medicare-supplement/new-jersey/plan-g-vs-plan-n",
  "/medicare/plan-g-vs-plan-n": "/medicare-supplement/new-jersey/plan-g-vs-plan-n",
  "/medicare/plan-g": "/medicare-supplement/new-jersey/plan-g-vs-plan-n",
  "/medicare/medigap-open-enrollment": "/medicare-supplement/new-jersey/turning-65",
  "/medicare/medigap": "/learn/what-is-medigap",
  "/medicare/supplement-plans-nj": "/medicare-supplement/new-jersey",
  "/medicare/supplement-plans": "/medicare-supplement/new-jersey",
  "/medicare/supplement": "/medicare-supplement/new-jersey",
  "/medicare/enrollment-periods": "/learn/medicare-enrollment-periods",
  "/medicare/medicare-enrollment-periods": "/learn/medicare-enrollment-periods",
  "/medicare/when-to-enroll-in-medicare": "/learn/how-to-sign-up-for-medicare",
  "/medicare/when-to-enroll": "/learn/how-to-sign-up-for-medicare",
  "/medicare/turning-65-medicare-checklist": "/medicare-supplement/new-jersey/turning-65",
  "/medicare/part-b-enrollment": "/learn/how-to-sign-up-for-medicare",
  "/medicare/part-b-premium-2026": "/learn/irmaa-medicare-surcharge",
  "/medicare/medicare-part-b-coverage": "/learn/medicare-parts-explained",
  "/medicare/part-d-drug-coverage": "/learn/medicare-parts-explained",
  "/medicare/part-d-drug-plans": "/learn/medicare-parts-explained",
  "/medicare/part-d-new-jersey": "/learn/medicare-parts-explained",
  "/medicare/medicare-part-d-nj": "/learn/medicare-parts-explained",
  "/medicare/part-d": "/learn/medicare-parts-explained",
  "/medicare/guaranteed-issue-rights": "/medicare-supplement/new-jersey",
  "/medicare/skilled-nursing-facility-coverage": "/learn/medicare-parts-explained",

  // ── Broken /services/... slugs ────────────────────────────────────────
  // Plan comparisons
  "/services/medicare-supplement-plan-g-vs-plan-n": "/medicare-supplement/new-jersey/plan-g-vs-plan-n",
  "/services/plan-g-vs-plan-n-new-jersey": "/medicare-supplement/new-jersey/plan-g-vs-plan-n",
  "/services/plan-g-vs-plan-n-in-new-jersey": "/medicare-supplement/new-jersey/plan-g-vs-plan-n",
  "/services/plan-g-vs-plan-n": "/medicare-supplement/new-jersey/plan-g-vs-plan-n",
  "/services/medicare-plan-g-vs-plan-n-nj": "/medicare-supplement/new-jersey/plan-g-vs-plan-n",
  "/services/medicare-plan-n-vs-plan-g": "/medicare-supplement/new-jersey/plan-g-vs-plan-n",
  "/services/medigap-plan-g-vs-plan-n": "/medicare-supplement/new-jersey/plan-g-vs-plan-n",
  "/services/plan-f-vs-plan-g": "/services/how-much-is-plan-f-in-nj",
  "/services/plan-g-vs-medicare-advantage": "/medicare-supplement/new-jersey/vs-medicare-advantage",
  "/services/medicare-supplement-plan-g": "/services/compare-and-enroll-in-plan-g-online",
  "/services/medicare-supplement-plan-n": "/services/quickest-way-to-enroll-into-plan-n",
  "/services/medigap-plan-g-nj": "/services/how-much-is-plan-g-in-nj",
  "/services/medigap-plan-g": "/services/compare-and-enroll-in-plan-g-online",
  "/services/medigap-plan-n": "/services/quickest-way-to-enroll-into-plan-n",
  "/services/medicare-plan-g": "/services/compare-and-enroll-in-plan-g-online",
  "/services/medicare-plan-g-new-jersey": "/services/how-much-is-plan-g-in-nj",
  "/services/medicare-supplement-plan-g-nj": "/services/how-much-is-plan-g-in-nj",
  "/services/medicare-supplement-plan-g-cost": "/services/medicare-supplement-plan-g-cost-for-68-year-old",
  // Supplement vs Advantage
  "/services/medicare-advantage-vs-medigap": "/medicare-supplement/new-jersey/vs-medicare-advantage",
  "/services/medicare-supplement-vs-medicare-advantage": "/medicare-supplement/new-jersey/vs-medicare-advantage",
  "/services/medicare-supplement-vs-advantage": "/medicare-supplement/new-jersey/vs-medicare-advantage",
  "/services/original-medicare-vs-medicare-advantage": "/medicare-supplement/new-jersey/vs-medicare-advantage",
  // Open enrollment
  "/services/medigap-open-enrollment-period": "/medicare-supplement/new-jersey/turning-65",
  "/services/medigap-open-enrollment-nj": "/medicare-supplement/new-jersey/turning-65",
  "/services/medigap-open-enrollment": "/medicare-supplement/new-jersey/turning-65",
  // Broker NJ generic
  "/services/medicare-broker-near-me-nj": "/services/free-medicare-broker-new-jersey",
  "/services/medicare-broker-new-jersey": "/services/free-medicare-broker-new-jersey",
  "/services/medicare-broker-nj": "/services/free-medicare-broker-new-jersey",
  "/services/medicare-broker-near-me": "/services/medicare-agents-near-me",
  "/services/independent-medicare-broker-nj": "/services/free-independent-medicare-broker-near-me-new-jersey",
  // County-specific
  "/services/bergen-county-medicare-broker": "/services/hackensack-nj-medicare-insurance-agents",
  "/services/hudson-county-medicare-broker": "/services/hoboken-nj-medicare-insurance-agents",
  "/services/monmouth-county-medicare-broker": "/services/howell-nj-medicare-insurance-agents",
  "/services/ocean-county-medicare-broker": "/services/lakewood-nj-medicare-insurance-agents",
  "/services/somerset-county-medicare-broker": "/services/hillsborough-nj-medicare-insurance-agents",
  "/services/union-county-medicare-broker": "/services/linden-nj-medicare-insurance-agents",
  "/services/medicare-broker-essex-county-nj": "/services/find-a-medicare-agent-in-montclair-nj",
  "/services/medicare-broker-middlesex-county-nj": "/services/find-a-medicare-agent-in-new-brunswick-nj",
  "/services/medicare-broker-monmouth-county": "/services/howell-nj-medicare-insurance-agents",
  "/services/medicare-broker-ocean-county-nj": "/services/lakewood-nj-medicare-insurance-agents",
  "/services/medicare-broker-union-county-nj": "/services/linden-nj-medicare-insurance-agents",
  "/services/medicare-broker-south-jersey": "/services/local-medicare-agents-in-sewell-nj",
  "/services/medicare-agents-essex-county-nj": "/services/find-a-medicare-agent-in-montclair-nj",
  "/services/medicare-insurance-agents-in-essex-county-new-jersey": "/services/find-a-medicare-agent-in-montclair-nj",
  "/services/medicare-insurance-agents-in-atlantic-county-nj": "/services/medicare-insurance-agents-in-atlantic-city-new-jersey",
  "/services/medicare-insurance-agents-in-new-jersey": "/services/find-an-nj-medicare-broker-near-you",
  // City-specific broken
  "/services/jersey-city-nj-medicare-insurance-agents": "/services/hoboken-nj-medicare-insurance-agents",
  "/services/newark-nj-medicare-insurance-agents": "/services/find-a-medicare-agent-in-newark-nj",
  "/services/find-a-medicare-agent-in-jersey-city-nj": "/services/hoboken-nj-medicare-insurance-agents",
  "/services/local-medicare-agents-in-old-bridge-nj": "/services/local-medicare-agents-in-sayreville-nj",
  // Out-of-state
  "/services/medicare-broker-broward-county": "/services/medicare-consultant-in-ft-lauderdale-fl",
  "/services/california-medicare-broker": "/services/medicare-agent-for-someone-with-pre-existing-conditions-california",
  "/services/medicare-broker-new-mexico": "/services/independent-medicare-agents-abq-nm",
  "/services/medicare-brokers-pennsylvania": "/medicare-supplement/pennsylvania",
  // Condition-specific
  "/services/medicare-broker-for-chronic-conditions": "/services/best-medicare-plan-for-chronic-conditions",
  "/services/medicare-broker-for-mental-health": "/services/medicare-broker-for-anxiety-disorder-patients",
  "/services/medicare-broker-mental-health": "/services/medicare-broker-for-anxiety-disorder-patients",
  "/services/medicare-broker-for-caregivers": "/services/medicare-broker-for-dementia-patients",
  "/services/medicare-broker-for-cancer-patients": "/services/medicare-broker-for-cancer-survivors",
  "/services/medicare-broker-for-disability-patients": "/services/medicare-broker-for-people-on-disability",
  "/services/medicare-broker-for-veterans": "/services/best-medicare-plan-for-chronic-conditions",
  "/services/medicare-broker-for-vision-care": "/services/medicare-broker-for-cataracts-patients",
  "/services/medicare-mental-health-coverage": "/services/medicare-broker-for-anxiety-disorder-patients",
  "/services/medicare-telehealth-options": "/services/medicare-broker-for-anxiety-disorder-patients",
  "/services/medicare-telehealth-plans": "/services/medicare-broker-for-ptsd-patients",
  // Supplement plans NJ
  "/services/medicare-supplement-plans-new-jersey": "/medicare-supplement/new-jersey",
  "/services/medicare-supplement-plans-nj": "/medicare-supplement/new-jersey",
  "/services/medigap-plans-in-new-jersey": "/medicare-supplement/new-jersey",
  "/services/medigap-plans-in-nj": "/medicare-supplement/new-jersey",
  "/services/best-medigap-plans-new-jersey": "/services/best-and-cheapest-medicare-supplement",
  "/services/best-medigap-plans-in-nj": "/services/best-and-cheapest-medicare-supplement",
  "/services/best-medigap-plans-in-new-jersey": "/services/best-and-cheapest-medicare-supplement",
  "/services/best-medicare-supplement-plans-in-nj": "/services/best-and-cheapest-medicare-supplement",
  "/services/best-medicare-supplement-plans": "/services/best-and-cheapest-medicare-supplement",
  // Medicare Advantage
  "/services/medicare-advantage-plans-passaic-county": "/medicare-advantage/new-jersey",
  "/services/medicare-advantage-plans-in-new-jersey": "/medicare-advantage/new-jersey",
  "/services/medicare-advantage-plans-new-jersey": "/medicare-advantage/new-jersey",
  "/services/medicare-advantage-plans-nj": "/medicare-advantage/new-jersey",
  "/services/medicare-advantage-nj": "/medicare-advantage/new-jersey",
  "/services/medicare-advantage-plans": "/medicare-advantage/new-jersey",
  // Rate increases
  "/services/medicare-supplement-rate-increases": "/services/medicare-supplement-rate-jumped-why-and-what-can-i-do",
  "/services/medicare-supplement-rate-increase": "/services/medicare-supplement-rate-jumped-why-and-what-can-i-do",
  // Switching
  "/services/switching-from-medicare-advantage-to-medigap": "/medicare-supplement/switch-carriers",
  "/services/switching-medigap-plans": "/medicare-supplement/switch-carriers",
  "/services/how-to-switch-medicare-supplement-plans": "/services/what-time-of-year-can-you-switch-medicare-supplement-plans",
  // Underwriting
  "/services/medicare-supplement-underwriting": "/services/how-long-does-it-take-to-get-approved-for-a-medicare-supplement-plan",
  "/services/medigap-underwriting": "/services/how-long-does-it-take-to-get-approved-for-a-medicare-supplement-plan",
  // Guaranteed issue
  "/services/guaranteed-issue-rights-medicare": "/services/you-get-a-medicare-supplement-plan-if-you-have-a-pre-existing-condition",
  "/services/guaranteed-issue-rights-medigap": "/services/you-get-a-medicare-supplement-plan-if-you-have-a-pre-existing-condition",
  "/services/guaranteed-issue-medigap": "/services/you-get-a-medicare-supplement-plan-if-you-have-a-pre-existing-condition",
  "/services/medigap-guaranteed-issue-rights": "/services/you-get-a-medicare-supplement-plan-if-you-have-a-pre-existing-condition",
  "/services/medicare-supplement-guaranteed-issue-rights": "/services/you-get-a-medicare-supplement-plan-if-you-have-a-pre-existing-condition",
  // Rates by age
  "/services/medicare-supplement-rates-by-age": "/services/best-medicare-supplement-rates-by-age-plan-g-plan-n-plan-f-rates",
  "/services/plan-g-rates-by-age-in-new-jersey": "/services/plan-g-rates-by-age-new-jersey",
  "/services/plan-g-cost-nj": "/services/how-much-is-plan-g-in-nj",
  // Part D
  "/services/medicare-part-d-drug-coverage": "/learn/medicare-parts-explained",
  "/services/medicare-part-d-drug-plans": "/learn/medicare-parts-explained",
  "/services/medicare-part-d-enrollment": "/learn/medicare-parts-explained",
  "/services/medicare-part-d-prescription-coverage": "/learn/medicare-parts-explained",
  "/services/medicare-part-d-prescription-drug-coverage": "/learn/medicare-parts-explained",
  // Part B
  "/services/medicare-part-b-enrollment": "/learn/how-to-sign-up-for-medicare",
  // Enrollment
  "/services/medicare-enrollment-periods": "/learn/medicare-enrollment-periods",
  "/services/medicare-enrollment-new-jersey": "/learn/how-to-sign-up-for-medicare",
  "/services/medicare-enrollment-help-nj": "/services/how-to-enroll-in-medicare-in-new-jersey",
  "/services/medicare-supplement-enrollment-new-jersey": "/services/how-to-enroll-in-medicare-in-new-jersey",
  "/services/medicare-open-enrollment": "/learn/medicare-enrollment-periods",
  "/services/when-to-enroll-in-medigap": "/services/medicare-supplement-open-enrollment-online",
  "/services/when-to-enroll-in-medicare-supplement": "/services/medicare-supplement-open-enrollment-online",
  "/services/when-to-enroll-in-medicare-nj": "/services/how-to-enroll-in-medicare-in-new-jersey",
  "/services/when-to-apply-for-medicare": "/learn/how-to-sign-up-for-medicare",
  // Disability / ESRD
  "/services/ssdi-and-medicare-enrollment": "/services/you-get-a-medicare-supplement-if-you-are-on-disability",
  "/services/medicare-for-people-with-disabilities": "/services/best-medicare-supplement-for-people-on-disability",
  "/services/medigap-plans-under-65": "/services/best-medicare-supplement-for-people-on-disability",
  "/services/esrd-medicare-eligibility": "/services/what-is-the-best-medicare-plan-for-dialysis",
  // Misc
  "/services/free-medicare-consultation": "/services/help-with-your-medicare-decision",
  "/services/free-medicare-plan-review": "/services/help-with-your-medicare-decision",
  "/services/medicare-savings-programs": "/learn/medicare-help-low-income",
  "/services/2026-medicare-costs": "/services/average-cost-of-medicare-supplement-insurance-by-age-in-2026",
};

// ── Helper: get first git commit date for a file ────────────────────────
function getGitDate(filePath) {
  try {
    const date = execSync(
      `git log --diff-filter=A --follow --format=%aI -- "${filePath}" | tail -1`,
      { cwd: path.join(__dirname, ".."), encoding: "utf8" }
    ).trim();
    if (date) return date.split("T")[0];
  } catch {}
  return null;
}

// ── Main ────────────────────────────────────────────────────────────────
const dirs = fs
  .readdirSync(servicesDir)
  .filter((d) => {
    const full = path.join(servicesDir, d);
    return fs.statSync(full).isDirectory() && fs.existsSync(path.join(full, "page.tsx"));
  });

// Sort link map keys by length descending so longer paths match first
const sortedPaths = Object.keys(linkMap).sort((a, b) => b.length - a.length);

let totalLinksFixed = 0;
let totalCanonicalAdded = 0;
let totalDatesFixed = 0;
let totalBreadcrumbFixed = 0;
let filesModified = 0;

for (const slug of dirs) {
  const filePath = path.join(servicesDir, slug, "page.tsx");
  let content = fs.readFileSync(filePath, "utf8");
  const original = content;

  // ── 1. Fix broken links ──────────────────────────────────────────────
  for (const broken of sortedPaths) {
    // Match href="..." patterns (both relative paths and full URLs)
    const relPattern = `href="${broken}"`;
    const absPattern = `href="${SITE_URL}${broken}"`;
    const replacement = linkMap[broken];

    if (content.includes(relPattern)) {
      content = content.split(relPattern).join(`href="${replacement}"`);
      totalLinksFixed++;
    }
    if (content.includes(absPattern)) {
      content = content.split(absPattern).join(`href="${SITE_URL}${replacement}"`);
      totalLinksFixed++;
    }

    // Also fix schema "item" values (full URLs in breadcrumb/schema)
    const schemaPattern = `"item": "${SITE_URL}${broken}"`;
    const schemaPattern2 = `item: "${SITE_URL}${broken}"`;
    if (content.includes(schemaPattern)) {
      content = content.split(schemaPattern).join(`"item": "${SITE_URL}${replacement}"`);
      totalLinksFixed++;
    }
    if (content.includes(schemaPattern2)) {
      content = content.split(schemaPattern2).join(`item: "${SITE_URL}${replacement}"`);
      totalLinksFixed++;
    }
  }

  // Also catch the bare /medicare-guides and /medicare breadcrumb patterns
  // that aren't sub-paths (the breadcrumb position 2 link)
  content = content.split(`href="/medicare-guides"`).join(`href="/services"`);
  content = content.split(`href="/medicare"`).join(`href="/services"`);
  content = content.split(`item: "${SITE_URL}/medicare-guides"`).join(`item: "${SITE_URL}/services"`);
  content = content.split(`item: "${SITE_URL}/medicare"`).join(`item: "${SITE_URL}/services"`);
  content = content.split(`"item": "${SITE_URL}/medicare-guides"`).join(`"item": "${SITE_URL}/services"`);
  content = content.split(`"item": "${SITE_URL}/medicare"`).join(`"item": "${SITE_URL}/services"`);

  // ── 2. Add canonical URL if missing ──────────────────────────────────
  if (!content.includes("alternates") && !content.includes("canonical")) {
    // Find the metadata export and add alternates
    const metaMatch = content.match(
      /export const metadata:\s*Metadata\s*=\s*\{[^}]*?description:\s*\n?\s*"[^"]*",/s
    );
    if (metaMatch) {
      const insertPoint = metaMatch[0];
      const canonical = `\n  alternates: { canonical: "${SITE_URL}/services/${slug}" },`;
      content = content.replace(insertPoint, insertPoint + canonical);
      totalCanonicalAdded++;
    } else {
      // Try alternate pattern: description followed by openGraph
      const altMatch = content.match(
        /(description:\s*\n?\s*"[^"]*",\s*\n?\s*openGraph:)/s
      );
      if (altMatch) {
        const canonical = `alternates: { canonical: "${SITE_URL}/services/${slug}" },\n  `;
        content = content.replace(altMatch[1], canonical + altMatch[1]);
        totalCanonicalAdded++;
      }
    }
  }

  // ── 3. Fix article schema dates ──────────────────────────────────────
  const gitDate = getGitDate(filePath);
  if (gitDate) {
    // Replace hardcoded datePublished
    const dpMatch = content.match(/datePublished:\s*"(\d{4}-\d{2}-\d{2})"/);
    if (dpMatch && dpMatch[1] !== gitDate) {
      content = content.replace(
        /datePublished:\s*"(\d{4}-\d{2}-\d{2})"/,
        `datePublished: "${gitDate}"`
      );
      totalDatesFixed++;
    }
    // Replace hardcoded dateModified (set to same as published for now)
    const dmMatch = content.match(/dateModified:\s*"(\d{4}-\d{2}-\d{2})"/);
    if (dmMatch) {
      // Use file mtime for dateModified
      const mtime = fs.statSync(filePath).mtime.toISOString().split("T")[0];
      content = content.replace(
        /dateModified:\s*"(\d{4}-\d{2}-\d{2})"/,
        `dateModified: "${mtime}"`
      );
    }
    // Fix dynamic new Date() dateModified
    if (content.includes('dateModified: new Date().toISOString().split("T")[0]')) {
      const mtime = fs.statSync(filePath).mtime.toISOString().split("T")[0];
      content = content.replace(
        /dateModified:\s*new Date\(\)\.toISOString\(\)\.split\("T"\)\[0\]/,
        `dateModified: "${mtime}"`
      );
      totalDatesFixed++;
    }

    // If datePublished is missing entirely but articleSchema exists, add it
    if (
      content.includes("articleSchema") &&
      !content.includes("datePublished")
    ) {
      const pubMatch = content.match(
        /(publisher:\s*\{[^}]*\},?\s*\n)/s
      );
      if (pubMatch) {
        const mtime = fs.statSync(filePath).mtime.toISOString().split("T")[0];
        content = content.replace(
          pubMatch[0],
          pubMatch[0] + `  datePublished: "${gitDate}",\n  dateModified: "${mtime}",\n`
        );
        totalDatesFixed++;
      }
    }
  }

  // ── Write if changed ─────────────────────────────────────────────────
  if (content !== original) {
    fs.writeFileSync(filePath, content);
    filesModified++;
  }
}

console.log(`\n✓ Fixed ${totalLinksFixed} broken link instances`);
console.log(`✓ Added canonical URLs to ${totalCanonicalAdded} pages`);
console.log(`✓ Fixed dates on ${totalDatesFixed} pages`);
console.log(`✓ ${filesModified} files modified total\n`);
