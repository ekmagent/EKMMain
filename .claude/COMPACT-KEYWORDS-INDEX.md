# Compact Keywords Reference Index
**Navigation guide for the Edward Sturm Compact Keywords SEO course implementation**

---

## THREE MAIN REFERENCE DOCUMENTS

### 1. **EDWARD-STURM-COMPACT-KEYWORDS.md** (23 KB)
**When to use:** Deep dives, understanding methodology, validation, comprehensive reference

**Contains:**
- Section 1: Methodology (compact keywords philosophy, searcher journey)
- Section 2: The Pipeline (research → build → deploy → monitor → optimize)
- Section 3: The Gaps (what's NOT automated)
- Section 4: Priority Actions (RIGHT NOW, FIRST MONTH, MONTHLY, QUARTERLY)
- Section 5: Quick Glossary (terms, Edward's rules, page template)
- Section 6: When The User Says... (diagnosis guide)
- Section 7: File Locations (what you touch, when)
- Section 8: Helpful Context (for Claude's code generation)
- Section 9: Current Status & Next Actions

**Best for:** Understanding the full system, long-term planning, answering "what's the philosophy behind this?"

---

### 2. **COMPACT-KEYWORDS-CHEATSHEET.md** (7.3 KB)
**When to use:** Quick answers, weekly rhythm, fast lookups during work

**Contains:**
- The core idea in 3 sentences
- Weekly rhythm (what you do every Monday)
- Page template (structure, score target)
- When-Then quick table (problem → solution)
- Edward's non-negotiable rules
- Skip rules checklist
- Key files reference
- Monthly & quarterly tasks
- Automation status
- Timeline expectations
- Priority actions checklist

**Best for:** Monday workflow, quick decision-making, "should we target this keyword?", refresher before work

---

### 3. **INDEXING-AND-RANKINGS-TROUBLESHOOTING.md** (14 KB)
**When to use:** Pages not ranking, indexing issues, diagnosis flowchart

**Contains:**
- Quick diagnosis flowchart
- 6-step diagnosis tree (in order of likelihood)
- Step-by-step troubleshooting for 2+ month old pages
- Common issues & fixes
- What to check if ALL pages not ranking
- What NOT to do (common mistakes)
- Pre-ranking checklist (is page ready?)
- When to escalate to Module 09

**Best for:** "Pages aren't ranking", "indexing is slow", troubleshooting stuck pages, diagnosis

---

## QUICK LOOKUP BY SITUATION

| You're asking... | Go to this file | Section |
|-----------------|-----------------|---------|
| What is compact keywords? | EDWARD-STURM | Section 1 |
| How does the pipeline work? | EDWARD-STURM | Section 2 |
| What's the overall strategy? | EDWARD-STURM | Section 4 (Priority Actions) |
| What do I do every Monday? | CHEATSHEET | "Your Weekly Rhythm" |
| What page template should I use? | CHEATSHEET | "Page Template" |
| What's Edward's rule on [X]? | CHEATSHEET or EDWARD-STURM | Section 5 (Quick Glossary) |
| Should we target this keyword? | CHEATSHEET | "When You See [This], Do [That]" |
| Pages not ranking | INDEXING | Quick Diagnosis Flowchart |
| Indexing is slow | INDEXING | Step-by-step Troubleshooting |
| Page has grammar issues | CHEATSHEET or INDEXING | When-Then table or Step 3 |
| Page score is 100 (over-optimized) | INDEXING | Common Issues & Fixes |
| Where should I put this code? | EDWARD-STURM | Section 7 (File Locations) |
| What files do I touch? | EDWARD-STURM | Section 7 |
| Automation status? What's manual? | EDWARD-STURM | Section 3 (Gaps) or CHEATSHEET |
| What's my next immediate action? | EDWARD-STURM | Section 9 or CHEATSHEET |
| Priority order? | CHEATSHEET | "Priority Actions (Right Now)" |
| I'm stuck at position 6+ after 3 months | INDEXING | Module 09 Escalation |

---

## READING ORDER

**If starting fresh:**
1. Start with CHEATSHEET (5 min read) — Get the core idea and weekly rhythm
2. Then EDWARD-STURM Section 4 (20 min read) — Understand what to do right now
3. Keep CHEATSHEET in tab. Use every Monday.
4. Reference EDWARD-STURM Section 5 when needed (rules, template, glossary)
5. Bookmark INDEXING for when you need to troubleshoot

**If coming back after a break:**
1. Skim CHEATSHEET "Priority Actions" — Reorient yourself
2. Check what needs doing this week
3. Reference as needed

---

## HOW CLAUDE SHOULD USE THESE

### When Claude is writing code/generating pages:
- Use EDWARD-STURM Section 5 (Page Template, Edward's Rules)
- Use EDWARD-STURM Section 8 (Helpful Context for Claude)
- Target on-page score 96-98 (not 100)
- Enforce keyword placement (URL, title, H1, first sentence, meta, image alt)

### When Claude is troubleshooting:
- Use INDEXING (entire guide)
- Follow the 6-step diagnosis tree
- Check GSC indexing status first
- Check on-page score second
- Check content quality third

### When Claude is planning:
- Use EDWARD-STURM Section 2 (Pipeline)
- Use EDWARD-STURM Section 4 (Priority Actions)
- Refer to timelines (3-4 months to rank)

### When Claude is validating decisions:
- Use EDWARD-STURM Section 5 (Edward's Rules, Skip Rules)
- Use CHEATSHEET (When-Then table)
- Ask: "Does this follow Edward's methodology?"

---

## FILE LOCATIONS IN CODEBASE

All three files are in: `/Users/anthonyorner/Claude Code/easykindmedicare/.claude/`

```
.claude/
├── EDWARD-STURM-COMPACT-KEYWORDS.md (comprehensive reference)
├── COMPACT-KEYWORDS-CHEATSHEET.md (quick lookup)
├── INDEXING-AND-RANKINGS-TROUBLESHOOTING.md (diagnosis guide)
└── COMPACT-KEYWORDS-INDEX.md (this file)
```

Also reference:
- `KEYWORD-CHECKLIST.md` (HITL playbook from course audit)
- `COURSE-AUDIT.md` (87% implementation coverage report)

---

## KEY TAKEAWAYS

**The Core Methodology:**
Target low-volume, low-competition, high-intent (bottom-of-funnel) keywords where competitors have DA under 30. Build 400-500 word pages with keyword in URL, title, H1, first sentence, meta, first image alt. Expect 3-4 months before ranking. Defend your house first (technical, on-page, structure), then link build.

**Your Role (HITL):**
- Research: SERP-check with MozBar (weekly, 45 min)
- Building: Approve keywords, read pages, replace images (per page, 10 min)
- Strategy: GSC decisions monthly, Module 09 troubleshooting quarterly

**Automation Status:**
87% automated (keyword discovery, page building, grammar/AI checks, technical audit). 13% manual (SERP judgment, image replacement, link building, video recording).

**Right Now:**
1. "Overlooked Details" brainstorm (30 min, highest ROI)
2. Weekly SERP-checking rhythm (start Monday)
3. Replace SVG placeholder images
4. Create social media profiles
5. Fill out Google Business Profile

**Timeline:**
- Month 1-2: Build pages, replace images, be patient
- Month 3-4: Pages start ranking
- Month 4-6: Optimize positions 6-25, build more pages
- Month 6+: If stuck, apply Module 09 advanced tactics

---

## LINKING STRATEGY

When the user mentions something, Claude can link to the right section:

- "How does this work?" → EDWARD-STURM Section 2 (Pipeline)
- "Should we skip this?" → CHEATSHEET "Skip Rules"
- "Pages not ranking?" → INDEXING "Quick Diagnosis Flowchart"
- "What's the page template?" → CHEATSHEET or EDWARD-STURM Section 5
- "What do I do now?" → EDWARD-STURM Section 4 or CHEATSHEET "Priority Actions"
- "Is this following Edward's rules?" → EDWARD-STURM Section 5 "Edward's Rules"

---

## LAST UPDATED

- Created: April 20, 2026
- Source: COURSE-AUDIT.md (March 14, 2026) + KEYWORD-CHECKLIST.md (no date)
- Implementation level: 87% automated
- Document accuracy: Reflects current .claude/CLAUDE.md baseline

---

**Use these documents to quickly understand context when the user mentions SEO, rankings, indexing, keywords, or next steps.**