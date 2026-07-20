/**
 * Annual Medicare cost figures — single source of truth.
 * Update these values once each year; every page imports from here.
 */

export const MEDICARE = {
  year: 2026,

  partA: {
    deductible: 1736,        // per benefit period
  },

  partB: {
    premium: 202.90,          // monthly (standard)
    deductible: 283,          // annual
  },

  partD: {
    oopCap: 2100,             // annual max out-of-pocket (was $2,000 in 2025)
  },

  snf: {
    coinsurancePerDay: 217.00, // days 21–100
  },
} as const;

/** Pre-formatted strings for direct use in JSX */
export const MF = {
  year: String(MEDICARE.year),
  partADeductible: `$${MEDICARE.partA.deductible.toLocaleString()}`,
  partBPremium: `$${MEDICARE.partB.premium.toFixed(2)}`,
  partBDeductible: `$${MEDICARE.partB.deductible}`,
  partDOopCap: `$${MEDICARE.partD.oopCap.toLocaleString()}`,
  snfCoinsurance: `$${MEDICARE.snf.coinsurancePerDay.toFixed(2)}`,
} as const;
