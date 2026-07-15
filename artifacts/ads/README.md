# Rate Data for Ad Creative

`rate-ads-data.csv` — filed Medigap rates as of **2026-07-15** (CSG Actuarial),
5 states (NC / NJ / OH / PA / TX), Plans G and N, ages 65/70/75, female
non-tobacco profile, cheapest 5 carriers per cell with the state's full
low/high/spread and each carrier's most recent filed rate increase.

Regenerate anytime: `node scripts/csg-full-snapshot.js` (needs `.env.local`
CSG key), then re-run the extract (see git log for the one-liner).

## Ad hooks this data supports

1. **The spread** — "Same government-standardized Plan G. [N] carriers.
   $[low] to $[high]/month. Enter your ZIP to see where yours falls."
2. **The rate-increase letter** — target switchers: "Some carriers filed
   increases up to [X]% this year. Others held steady. Identical coverage."
3. **NJ county-uniform** — rates verified identical across all 21 NJ counties;
   one statewide ad, fully honest.

## Rules for using these numbers in paid ads

- Numbers must come from the CURRENT csv (regenerate if older than ~45 days;
  rate filings land year-round).
- Prefer unnamed carriers in paid placements ("one major carrier filed +28%");
  named-carrier comparisons stay on editorial pages where context lives.
- Required disclaimer on every creative:
  "Rates from carrier rate filings as of [as_of date], for a 65-year-old
  female non-smoker in a sample ZIP; your rate will vary by age, gender,
  ZIP, and tobacco status. Not affiliated with or endorsed by Medicare or
  any government agency. Plan availability varies."
- Never claim NJ has year-round guaranteed issue. No NASDAQ/parent-company
  framing. (House compliance rules.)
