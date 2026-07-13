import fs from "node:fs";
import path from "node:path";
import PrintButton from "./PrintButton";

export const dynamic = "force-dynamic";

type CarrierRow = {
  rank: number;
  carrier: string;
  monthly_premium: string;
  am_best_rating: string;
  household_discount_eligible: string;
  commentary: string;
};

type StabilityRow = {
  carrier: string;
  plan_letter: string;
  five_year_avg_annual_increase: string;
  stability_assessment: string;
  commentary: string;
};

type RecCarrier = {
  carrier: string;
  plan_letter: string;
  monthly_premium: string;
  why_consider_for_you: string;
  honest_caveats: string;
};

type Report = {
  cover: {
    title: string;
    subtitle: string;
    buyer_first_name: string;
    location: string;
    generated_date: string;
    report_id: string;
    prepared_by: string;
  };
  executive_summary: { personalized_intro: string; key_findings: string[] };
  plan_g_vs_plan_n_for_you: {
    section_header: string;
    plan_g_overview: string;
    plan_n_overview: string;
    key_difference_for_buyer: string;
    factors_leaning_toward_g: string[];
    factors_leaning_toward_n: string[];
    honest_note: string;
  };
  current_rates_in_your_zip: {
    section_header: string;
    data_as_of: string;
    intro_paragraph: string;
    plan_g_table: CarrierRow[];
    plan_n_table: CarrierRow[];
    interpretation: string;
  };
  rate_stability_analysis: {
    section_header: string;
    why_this_matters: string;
    carrier_stability_ranking: StabilityRow[];
    key_insight: string;
  };
  closed_block_alert: {
    applies_to_this_buyer: boolean;
    current_carrier_name: string;
    what_closed_block_means: string;
    why_rates_climb_in_closed_blocks: string;
    buyer_specific_situation: string;
    historical_evidence: string;
    options_to_consider: string;
    consultation_value: string;
  };
  personalized_recommendations: {
    section_header: string;
    framing: string;
    top_carriers_to_consider: RecCarrier[];
    decision_framework: string;
  };
  what_this_report_doesnt_cover: {
    section_header: string;
    limitations: string[];
    consultation_value_proposition: string;
  };
  your_next_steps: {
    section_header: string;
    intro: string;
    action_items: string[];
    consultation_invitation: {
      headline: string;
      what_youll_get: string[];
      scheduling_options: string;
    };
  };
  methodology_and_disclaimers: {
    section_header: string;
    data_sources: string;
    methodology_summary: string;
    what_personalization_means: string;
    required_disclaimers: string[];
    agent_credentials: {
      name: string;
      license_number: string;
      states_licensed: string;
      contact_info: string;
    };
    report_metadata: { report_id: string; generated_at: string; version: string };
  };
};

function loadReport(): Report {
  const file = path.resolve(process.cwd(), "artifacts/csg-reports/sample-report.json");
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

const TEAL = "#2D6E5F";
const ORANGE = "#E8842A";
const MUTED = "#3A5048";
const BORDER = "#D0E4DE";
const SECTION_BG = "#F6FAF8";
const ALERT_BG = "#FFF6EC";
const ALERT_BORDER = "#F0C99C";

export default function MedsupReportPreview() {
  const r = loadReport();
  const ratesG = r.current_rates_in_your_zip.plan_g_table;
  const ratesN = r.current_rates_in_your_zip.plan_n_table;

  return (
    <>
      {/* Override the dark /tools/ layout — this is a buyer-facing document, not an admin tool */}
      <style>{`
        #tools-root { background: #ECEEF1 !important; }
        @media print {
          #tools-root { background: white !important; position: static !important; }
          .no-print { display: none !important; }
          .report-page { box-shadow: none !important; margin: 0 !important; page-break-after: always; }
        }
      `}</style>

      <div style={{ maxWidth: 880, margin: "0 auto", padding: "40px 24px", fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", color: "#1a2e2a", fontSize: 16, lineHeight: 1.6 }}>
        {/* Preview toolbar — non-print */}
        <div className="no-print" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, padding: "12px 16px", background: "white", borderRadius: 8, boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}>
          <div style={{ fontSize: 13, color: MUTED }}>
            <strong>Preview</strong> · Personalized Medigap Rate Report · Buyer: {r.cover.buyer_first_name} · {r.cover.location}
          </div>
          <PrintButton />
        </div>

        {/* COVER */}
        <section className="report-page" style={{ background: "white", padding: "64px 56px", borderRadius: 4, boxShadow: "0 1px 3px rgba(0,0,0,0.08)", marginBottom: 24, minHeight: 1000 }}>
          <div style={{ borderBottom: `4px solid ${TEAL}`, paddingBottom: 24, marginBottom: 32 }}>
            <div style={{ fontSize: 12, letterSpacing: 2, textTransform: "uppercase", color: MUTED, fontWeight: 600 }}>
              EasyKind Medicare · Personalized Rate Report
            </div>
          </div>

          <h1 style={{ fontSize: 36, lineHeight: 1.2, color: TEAL, margin: "0 0 12px", fontWeight: 700 }}>
            {r.cover.title}
          </h1>
          <p style={{ fontSize: 20, color: MUTED, margin: "0 0 48px" }}>
            {r.cover.subtitle}
          </p>

          <div style={{ background: SECTION_BG, padding: "28px 32px", borderRadius: 8, border: `1px solid ${BORDER}` }}>
            <CoverRow label="Prepared for" value={r.cover.buyer_first_name} />
            <CoverRow label="Location" value={r.cover.location} />
            <CoverRow label="Report date" value={r.cover.generated_date} />
            <CoverRow label="Report ID" value={r.cover.report_id} />
            <CoverRow label="Prepared by" value={r.cover.prepared_by} last />
          </div>

          <div style={{ marginTop: 64, padding: "24px 28px", background: "#fff8ef", borderLeft: `4px solid ${ORANGE}`, borderRadius: 4 }}>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: ORANGE, marginBottom: 8 }}>
              Why this report exists
            </div>
            <p style={{ margin: 0, fontSize: 15, color: MUTED, lineHeight: 1.65 }}>
              Most online Medigap quote tools show you a single low rate and stop there.
              This report shows you every carrier filed in your ZIP, the rate-increase
              history they have actually filed with the state, and an honest read of which
              ones have the most credible long-run track record.
            </p>
          </div>
        </section>

        {/* EXECUTIVE SUMMARY */}
        <ReportSection title="Executive Summary">
          <p style={{ fontSize: 17, lineHeight: 1.65, marginTop: 0 }}>
            {r.executive_summary.personalized_intro}
          </p>
          <h3 style={{ color: TEAL, fontSize: 18, marginTop: 32, marginBottom: 12 }}>
            Top-line findings
          </h3>
          <ol style={{ paddingLeft: 24, margin: 0 }}>
            {r.executive_summary.key_findings.map((f, i) => (
              <li key={i} style={{ marginBottom: 12, lineHeight: 1.65 }}>{f}</li>
            ))}
          </ol>
        </ReportSection>

        {/* PLAN G VS N */}
        <ReportSection title={r.plan_g_vs_plan_n_for_you.section_header}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }}>
            <PlanCard letter="G" title="Plan G">{r.plan_g_vs_plan_n_for_you.plan_g_overview}</PlanCard>
            <PlanCard letter="N" title="Plan N">{r.plan_g_vs_plan_n_for_you.plan_n_overview}</PlanCard>
          </div>

          <div style={{ background: SECTION_BG, padding: "20px 24px", borderRadius: 8, border: `1px solid ${BORDER}`, marginBottom: 24 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: TEAL, marginBottom: 8 }}>
              Key difference for you
            </div>
            <p style={{ margin: 0 }}>{r.plan_g_vs_plan_n_for_you.key_difference_for_buyer}</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <FactorList title="Lean toward Plan G if…" color={TEAL} items={r.plan_g_vs_plan_n_for_you.factors_leaning_toward_g} />
            <FactorList title="Lean toward Plan N if…" color="#4A6B61" items={r.plan_g_vs_plan_n_for_you.factors_leaning_toward_n} />
          </div>

          <p style={{ fontStyle: "italic", color: MUTED, marginTop: 20, marginBottom: 0, fontSize: 15 }}>
            {r.plan_g_vs_plan_n_for_you.honest_note}
          </p>
        </ReportSection>

        {/* CURRENT RATES */}
        <ReportSection title={r.current_rates_in_your_zip.section_header}>
          <div style={{ fontSize: 13, color: MUTED, marginBottom: 16 }}>
            Data as of <strong>{r.current_rates_in_your_zip.data_as_of}</strong>
          </div>
          <p style={{ marginTop: 0 }}>{r.current_rates_in_your_zip.intro_paragraph}</p>

          <h3 style={{ color: TEAL, fontSize: 20, marginTop: 32, marginBottom: 16 }}>Plan G — top {ratesG.length} carriers</h3>
          <RateTable rows={ratesG} />

          <h3 style={{ color: TEAL, fontSize: 20, marginTop: 40, marginBottom: 16 }}>Plan N — top {ratesN.length} carriers</h3>
          <RateTable rows={ratesN} />

          <div style={{ marginTop: 32, padding: "20px 24px", background: SECTION_BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: TEAL, marginBottom: 8 }}>
              What you are looking at
            </div>
            <p style={{ margin: 0 }}>{r.current_rates_in_your_zip.interpretation}</p>
          </div>
        </ReportSection>

        {/* RATE STABILITY */}
        <ReportSection title={r.rate_stability_analysis.section_header}>
          <p style={{ marginTop: 0 }}>{r.rate_stability_analysis.why_this_matters}</p>

          <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 24 }}>
            <thead>
              <tr>
                <th style={th}>Carrier</th>
                <th style={th}>Plan</th>
                <th style={{ ...th, textAlign: "right" }}>5-yr avg</th>
                <th style={th}>Assessment</th>
              </tr>
            </thead>
            <tbody>
              {r.rate_stability_analysis.carrier_stability_ranking.map((row, i) => (
                <tr key={i} style={{ borderTop: `1px solid ${BORDER}`, background: i % 2 === 0 ? "white" : SECTION_BG }}>
                  <td style={tdMain}>
                    <div style={{ fontWeight: 600 }}>{row.carrier}</div>
                    <div style={{ fontSize: 13, color: MUTED, marginTop: 4, lineHeight: 1.5 }}>{row.commentary}</div>
                  </td>
                  <td style={td}>{row.plan_letter}</td>
                  <td style={{ ...td, textAlign: "right", fontVariantNumeric: "tabular-nums" }}>{row.five_year_avg_annual_increase}</td>
                  <td style={td}>
                    <StabilityBadge label={row.stability_assessment} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ marginTop: 32, padding: "20px 24px", background: SECTION_BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: TEAL, marginBottom: 8 }}>
              Key insight for you
            </div>
            <p style={{ margin: 0 }}>{r.rate_stability_analysis.key_insight}</p>
          </div>
        </ReportSection>

        {/* CLOSED BLOCK ALERT */}
        <ReportSection title="Closed-Block Risk">
          {r.closed_block_alert.applies_to_this_buyer ? (
            <div style={{ background: ALERT_BG, padding: "24px 28px", borderRadius: 8, border: `2px solid ${ALERT_BORDER}` }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: ORANGE, marginBottom: 12 }}>
                Applies to your current carrier: {r.closed_block_alert.current_carrier_name}
              </div>
              <ClosedBlockBody d={r.closed_block_alert} />
            </div>
          ) : (
            <div style={{ background: SECTION_BG, padding: "20px 24px", borderRadius: 8, border: `1px dashed ${BORDER}` }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: MUTED, marginBottom: 8 }}>
                Does not apply to you today
              </div>
              <p style={{ margin: "0 0 12px" }}>{r.closed_block_alert.buyer_specific_situation}</p>
              <div style={{ fontSize: 14, color: MUTED }}><strong>Why it&apos;s still in your report:</strong> {r.closed_block_alert.what_closed_block_means} {r.closed_block_alert.why_rates_climb_in_closed_blocks}</div>
            </div>
          )}
        </ReportSection>

        {/* RECOMMENDATIONS */}
        <ReportSection title={r.personalized_recommendations.section_header}>
          <p style={{ marginTop: 0, fontStyle: "italic", color: MUTED }}>{r.personalized_recommendations.framing}</p>

          <div style={{ display: "grid", gap: 16, marginTop: 24 }}>
            {r.personalized_recommendations.top_carriers_to_consider.map((c, i) => (
              <div key={i} style={{ padding: "20px 24px", background: "white", border: `1px solid ${BORDER}`, borderLeft: `4px solid ${TEAL}`, borderRadius: 6 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
                  <div>
                    <div style={{ fontSize: 18, fontWeight: 700, color: TEAL }}>{c.carrier}</div>
                    <div style={{ fontSize: 13, color: MUTED }}>Plan {c.plan_letter}</div>
                  </div>
                  <div style={{ fontSize: 24, fontWeight: 700, color: "#1a2e2a", fontVariantNumeric: "tabular-nums" }}>{c.monthly_premium}<span style={{ fontSize: 13, fontWeight: 400, color: MUTED }}> /mo</span></div>
                </div>
                <div style={{ marginBottom: 12 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 0.5, textTransform: "uppercase", color: TEAL, marginBottom: 4 }}>Why consider</div>
                  <div>{c.why_consider_for_you}</div>
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 0.5, textTransform: "uppercase", color: ORANGE, marginBottom: 4 }}>Honest caveats</div>
                  <div style={{ color: MUTED }}>{c.honest_caveats}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 32, padding: "20px 24px", background: SECTION_BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: TEAL, marginBottom: 8 }}>
              Questions to ask yourself
            </div>
            <p style={{ margin: 0 }}>{r.personalized_recommendations.decision_framework}</p>
          </div>
        </ReportSection>

        {/* WHAT REPORT DOESN'T COVER */}
        <ReportSection title={r.what_this_report_doesnt_cover.section_header}>
          <ul style={{ paddingLeft: 20, marginTop: 0 }}>
            {r.what_this_report_doesnt_cover.limitations.map((l, i) => (
              <li key={i} style={{ marginBottom: 10, lineHeight: 1.6 }}>{l}</li>
            ))}
          </ul>
          <p style={{ marginTop: 24, marginBottom: 0 }}>{r.what_this_report_doesnt_cover.consultation_value_proposition}</p>
        </ReportSection>

        {/* NEXT STEPS / CTA */}
        <ReportSection title={r.your_next_steps.section_header}>
          <p style={{ marginTop: 0 }}>{r.your_next_steps.intro}</p>
          <ol style={{ paddingLeft: 24 }}>
            {r.your_next_steps.action_items.map((a, i) => (
              <li key={i} style={{ marginBottom: 10, lineHeight: 1.6 }}>{a}</li>
            ))}
          </ol>

          <div style={{ marginTop: 32, padding: "32px 36px", background: TEAL, borderRadius: 12, color: "white" }}>
            <div style={{ fontSize: 13, letterSpacing: 1, textTransform: "uppercase", opacity: 0.85, marginBottom: 8 }}>
              Free, no pressure
            </div>
            <h3 style={{ fontSize: 26, margin: "0 0 16px", color: "white" }}>{r.your_next_steps.consultation_invitation.headline}</h3>
            <ul style={{ paddingLeft: 20, margin: "0 0 20px" }}>
              {r.your_next_steps.consultation_invitation.what_youll_get.map((w, i) => (
                <li key={i} style={{ marginBottom: 8, lineHeight: 1.6 }}>{w}</li>
              ))}
            </ul>
            <div style={{ background: "rgba(255,255,255,0.15)", padding: "12px 16px", borderRadius: 6, fontSize: 14 }}>
              {r.your_next_steps.consultation_invitation.scheduling_options}
            </div>
          </div>
        </ReportSection>

        {/* METHODOLOGY */}
        <ReportSection title={r.methodology_and_disclaimers.section_header}>
          <Sub label="Data sources" body={r.methodology_and_disclaimers.data_sources} />
          <Sub label="Methodology" body={r.methodology_and_disclaimers.methodology_summary} />
          <Sub label="Personalization" body={r.methodology_and_disclaimers.what_personalization_means} />

          <div style={{ marginTop: 24 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: TEAL, marginBottom: 8 }}>
              Required disclaimers
            </div>
            <ul style={{ paddingLeft: 20, fontSize: 13, color: MUTED }}>
              {r.methodology_and_disclaimers.required_disclaimers.map((d, i) => (
                <li key={i} style={{ marginBottom: 8, lineHeight: 1.55 }}>{d}</li>
              ))}
            </ul>
          </div>

          <div style={{ marginTop: 24, padding: "16px 20px", background: SECTION_BG, borderRadius: 6, fontSize: 13, color: MUTED, border: `1px solid ${BORDER}` }}>
            <div style={{ fontWeight: 700, color: "#1a2e2a", marginBottom: 6 }}>Agent credentials</div>
            <div>{r.methodology_and_disclaimers.agent_credentials.name}</div>
            <div>License: {r.methodology_and_disclaimers.agent_credentials.license_number}</div>
            <div>States licensed: {r.methodology_and_disclaimers.agent_credentials.states_licensed}</div>
            <div>{r.methodology_and_disclaimers.agent_credentials.contact_info}</div>
            <div style={{ marginTop: 12, fontSize: 11, color: "#7B8C87" }}>
              Report {r.methodology_and_disclaimers.report_metadata.report_id} · v{r.methodology_and_disclaimers.report_metadata.version} · generated {r.methodology_and_disclaimers.report_metadata.generated_at}
            </div>
          </div>
        </ReportSection>
      </div>
    </>
  );
}

function CoverRow({ label, value, last = false }: { label: string; value: string; last?: boolean }) {
  return (
    <div style={{ display: "flex", padding: "10px 0", borderBottom: last ? "none" : `1px solid ${BORDER}` }}>
      <div style={{ width: 140, fontSize: 13, color: MUTED, fontWeight: 600, letterSpacing: 0.5, textTransform: "uppercase" }}>{label}</div>
      <div style={{ flex: 1, fontWeight: 600 }}>{value}</div>
    </div>
  );
}

function ReportSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="report-page" style={{ background: "white", padding: "48px 56px", borderRadius: 4, boxShadow: "0 1px 3px rgba(0,0,0,0.08)", marginBottom: 24 }}>
      <h2 style={{ fontSize: 26, color: TEAL, margin: "0 0 24px", lineHeight: 1.25, borderBottom: `2px solid ${BORDER}`, paddingBottom: 12 }}>
        {title}
      </h2>
      {children}
    </section>
  );
}

function PlanCard({ letter, title, children }: { letter: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{ border: `1px solid ${BORDER}`, borderRadius: 8, padding: "20px 24px", background: "white" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
        <div style={{ width: 36, height: 36, borderRadius: 8, background: TEAL, color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 20 }}>
          {letter}
        </div>
        <div style={{ fontSize: 18, fontWeight: 700, color: TEAL }}>{title}</div>
      </div>
      <div style={{ fontSize: 15, lineHeight: 1.6 }}>{children}</div>
    </div>
  );
}

function FactorList({ title, color, items }: { title: string; color: string; items: string[] }) {
  return (
    <div style={{ background: SECTION_BG, padding: "16px 20px", borderRadius: 6, border: `1px solid ${BORDER}` }}>
      <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 0.5, textTransform: "uppercase", color, marginBottom: 8 }}>{title}</div>
      <ul style={{ paddingLeft: 18, margin: 0 }}>
        {items.map((i, k) => <li key={k} style={{ marginBottom: 6, lineHeight: 1.55, fontSize: 15 }}>{i}</li>)}
      </ul>
    </div>
  );
}

const th: React.CSSProperties = { textAlign: "left", padding: "10px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 0.5, textTransform: "uppercase", color: MUTED, borderBottom: `2px solid ${BORDER}` };
const td: React.CSSProperties = { padding: "12px 12px", fontSize: 14, verticalAlign: "top" };
const tdMain: React.CSSProperties = { ...td, paddingRight: 20 };

function RateTable({ rows }: { rows: CarrierRow[] }) {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th style={{ ...th, width: 36, textAlign: "center" }}>#</th>
          <th style={th}>Carrier</th>
          <th style={{ ...th, textAlign: "right" }}>Monthly</th>
          <th style={{ ...th, textAlign: "center" }}>AM Best</th>
          <th style={{ ...th, textAlign: "center" }}>HHD</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} style={{ borderTop: `1px solid ${BORDER}`, background: i % 2 === 0 ? "white" : SECTION_BG }}>
            <td style={{ ...td, textAlign: "center", fontWeight: 700, color: MUTED }}>{row.rank}</td>
            <td style={tdMain}>
              <div style={{ fontWeight: 600 }}>{row.carrier}</div>
              <div style={{ fontSize: 13, color: MUTED, marginTop: 4, lineHeight: 1.5 }}>{row.commentary}</div>
            </td>
            <td style={{ ...td, textAlign: "right", fontWeight: 700, fontVariantNumeric: "tabular-nums" }}>{row.monthly_premium}</td>
            <td style={{ ...td, textAlign: "center" }}>{row.am_best_rating}</td>
            <td style={{ ...td, textAlign: "center", color: row.household_discount_eligible === "Yes" ? TEAL : MUTED }}>{row.household_discount_eligible}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function StabilityBadge({ label }: { label: string }) {
  const palette: Record<string, { bg: string; fg: string }> = {
    "Strong": { bg: "#E0F2EC", fg: "#1F5A4D" },
    "Moderate": { bg: "#FFF4E0", fg: "#8A5A0E" },
    "Concerning": { bg: "#FCE7DF", fg: "#A23F1A" },
    "Data not available": { bg: "#EEF1F0", fg: MUTED },
  };
  const colors = palette[label] || palette["Data not available"];
  return (
    <span style={{ display: "inline-block", padding: "4px 10px", borderRadius: 999, fontSize: 12, fontWeight: 600, background: colors.bg, color: colors.fg, whiteSpace: "nowrap" }}>
      {label}
    </span>
  );
}

function ClosedBlockBody({ d }: { d: Report["closed_block_alert"] }) {
  return (
    <>
      <p><strong>What this means:</strong> {d.what_closed_block_means}</p>
      <p><strong>Why rates climb:</strong> {d.why_rates_climb_in_closed_blocks}</p>
      <p><strong>Your situation:</strong> {d.buyer_specific_situation}</p>
      <p><strong>Historical evidence:</strong> {d.historical_evidence}</p>
      <p><strong>Options:</strong> {d.options_to_consider}</p>
      <p style={{ marginBottom: 0 }}><strong>Why a consultation helps:</strong> {d.consultation_value}</p>
    </>
  );
}

function Sub({ label, body }: { label: string; body: string }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: TEAL, marginBottom: 6 }}>{label}</div>
      <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "#2a3f3a" }}>{body}</p>
    </div>
  );
}
