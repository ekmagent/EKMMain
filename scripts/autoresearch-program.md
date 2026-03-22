# autoresearch — keyword discovery

This is an experiment to have the LLM do its own keyword research autonomously.

## Setup

Read these files for full context:
- `autoresearch-program.md` — this file. The rules and loop structure. Do not modify.
- `autoresearch-evaluate.js` — frozen evaluation script. Do not modify. It reads the prompt, generates keywords via Claude API, scores them via Serper + Moz, outputs JSON results to stdout.
- `autoresearch-prompt.txt` — the file you modify. The keyword generation prompt. Everything is fair game: strategy, examples, patterns, modifiers, constraints.

## Experimentation

Each experiment runs the evaluator once. You launch it simply as: `node scripts/autoresearch-evaluate.js 2>/dev/null`

**What you CAN do:**
- Modify `autoresearch-prompt.txt` — this is the only file you edit. Everything is fair game: keyword strategy, example patterns, geographic modifiers, intent signals, avoid lists, structural templates.

**What you CANNOT do:**
- Modify `autoresearch-evaluate.js`. It is read-only. It contains the frozen scoring rubric.
- Change the scoring rubric or thresholds.
- Modify `moz-api.js` or any other script.

**The goal is simple: find keywords that score >= 70/90 AND pass the volume gate (Moz volume >= 1).** These are keywords where medicareyourself.com can realistically rank #1 and people actually search for them.

**Scoring rubric (frozen, max 95 pts — aligned to Edward Sturm Compact Keywords):**
- Title Gap (35 pts): exact keyword phrase missing from top 3 Google SERP titles/URLs
- DA Weakness (25 pts): any DA < 30 in top 5 → 25. All DA ≥ 70 → 0. Linear scale between.
- Intent Match (20 pts): "for [plural group]" → 20. Action keyword (switch, compare, enroll, cost, rate) → 15. Product keyword → 10. Listicle/how-to → 0.
- Brand Match (10 pts): medicareyourself.com can solve this query → 10.
- Difficulty Bonus (5 pts): Moz difficulty ≤ 35 → +5 bonus.
- **Difficulty Hard Filter**: Moz difficulty > 60 → keyword DROPPED (score = 0). Edward says don't bother.
- Volume Gate (PASS/FAIL): Moz must have data (volume ≥ 1 OR difficulty exists). Edward: compact keywords show 0 in tools but get traffic through semantic overlap.
- **Dedup**: Keywords already in the Internal SEO Keywords sheet are skipped automatically.

**The first run**: Your very first run should always be to establish the baseline with the prompt as-is.

## Output format

The evaluator prints JSON to stdout:

```json
{
  "status": "has_winners" | "no_winners" | "crash",
  "avgScore": 64,
  "winners": [{"keyword": "...", "score": 85, "volume": 31, "difficulty": 31}],
  "volPassRate": 40,
  "allResults": [...]
}
```

## Logging results

The evaluator automatically appends to `autoresearch-results.tsv` and `autoresearch-results.jsonl`. The TSV has columns:

```
timestamp	avg_score	winners	vol_pass	status	description
```

## The experiment loop

LOOP FOREVER:

1. Read the current `autoresearch-prompt.txt`
2. Think about what to try next. Study the results — what scored high? What had volume? Where are the patterns?
3. Edit `autoresearch-prompt.txt` with your experimental idea
4. Run the experiment: `node scripts/autoresearch-evaluate.js 2>/dev/null` — capture the stdout JSON
5. Read the results JSON
6. If winners increased or avgScore improved → KEEP the edit
7. If winners decreased or avgScore dropped → REVERT `autoresearch-prompt.txt` to what it was before the edit
8. Think about what you learned and plan the next experiment

**Known challenge**: The Medicare supplement keyword space has a structural tension — keywords with search volume tend to have high-DA competitors (medicare.gov, aarp.org), while keywords with weak competitors tend to have no volume in Moz. The sweet spot is narrow. Proven winners so far:
- "switch medigap plans" (vol=27, score=70) — action + product
- "medigap rate increase" (vol=11, score=85) — problem-driven
- "medicare supplement agent" (vol=31, score=85) — service search
- "medicare supplement plans tennessee" (vol=31, score=80) — state-level

**Crashes**: If the evaluator crashes (API error, JSON parse failure), treat it as a failed experiment. Revert the prompt and try something different.

**NEVER STOP**: Once the experiment loop has begun, do NOT pause to ask the human if you should continue. Do NOT ask "should I keep going?" or "is this a good stopping point?". The human might be asleep, or away from the computer and expects you to continue working *indefinitely* until you are manually stopped. You are autonomous. If you run out of ideas, think harder — study the SERP data from previous runs, try combining near-misses, try radically different keyword angles, look at the allResults data for patterns in what passes vs fails the volume gate. The loop runs until the human interrupts you, period.

Each experiment takes ~3 minutes (API calls). You can run ~20/hour, ~160 overnight. The user wakes up to a list of discovered keywords.
