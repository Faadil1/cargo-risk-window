# Gate 6.75 — Demo Narrative / Evidence Film 001

## Status

**IN PROGRESS — NARRATIVE CONTRACT DEFINED**

Target length: **50–60 seconds**

Primary source: the live product at `https://cargo-risk-window.vercel.app`.

## Demo rule

Every proof-bearing moment must show the real deployed Cargo Risk Window interface. Stylized title cards, crops or transitions may frame the story, but they may not fabricate states, data, capabilities, external feeds or outcomes that the live product cannot produce.

Never imply:

- validated probability of theft;
- real-time threat intelligence;
- private CargoNet/carrier feeds;
- automated security decisions;
- guaranteed prevention or safety.

## Core evaluator story

A reviewer should understand this sequence without narration-heavy explanation:

`Which shipment needs attention? → Where does exposure concentrate? → Why? → What does the index mean? → What should a human reviewer inspect next?`

## Evidence film sequence

### 0–5s — The review problem

**Live product:** wide desktop view with the ranked Manifest visible.

Focus:
- `SHPM-5687` at rank `01`;
- Exposure Index `82/100`;
- visible `Synthetic data` label.

Optional on-screen line:

> Prioritize concentrated exposure — not incident counts alone.

Do not open with generic cargo footage before the product. The interface should establish the product immediately.

### 5–13s — Select the shipment

**Live interaction:** select or refocus `SHPM-5687`.

Show:
- route and shipment identity;
- `82/100`;
- `Priority review`;
- the explicit line that the index is a heuristic and **not a probability of theft**.

Purpose: establish prioritization and the claim boundary in the same beat.

### 13–27s — Risk Corridor signature

**Live product:** move attention across the Intermodal Risk Corridor from left to right.

Show:
- route/time modules;
- exposure state changes;
- the critical/elevated dwell window;
- visible reason codes associated with the relevant segments.

Allow the existing sequential corridor animation to do the storytelling. Do not add fake map paths, alert pulses or surveillance effects.

Optional on-screen line:

> Exposure becomes useful when the contributing conditions stay visible.

### 27–38s — Explain the score

**Live product:** move from corridor to Exposure Breakdown + Top Reason Codes.

Show that `82/100` decomposes into transparent contributions rather than appearing as a black-box AI score.

Then briefly reveal Public Aggregate Context with its visible boundary language.

Purpose:
- explainability;
- public context separated from synthetic shipment evidence;
- no predictive certainty.

### 38–51s — Human review remains the authority

**Live product:** Human Review panel.

Show the operational checklist:
- Carrier verification;
- Dwell plan;
- Secure parking / handoff;
- Monitoring priority.

Then click **Escalate review**.

Capture the resulting `Escalated for review` state and `Monitoring priority: Enhanced` without falsely marking unrelated checklist items complete.

Optional on-screen line:

> The system prioritizes. The reviewer decides.

### 51–58s — Close on the product promise

Return to a clean composition containing Manifest + Risk Corridor + Human Review.

Recommended closing copy:

> **Cargo Risk Window**  
> Exposure prioritization with visible reasons and human review.

Secondary disclosure:

> Synthetic operational data · Public aggregate context · Prototype heuristic

## Capture requirements

Required live captures:

1. desktop default hero state;
2. SHPM-5687 focus with `82/100` and non-probability disclosure;
3. complete Intermodal Risk Corridor;
4. Exposure Breakdown + Top Reason Codes;
5. Public Aggregate Context boundary;
6. Human Review checklist;
7. live escalation state.

Recommended master capture: 1440×900 or 1920×1080 browser viewport, with browser chrome cropped only if doing so does not conceal the live-product identity or disclosures.

## Motion/editing constraints

- Prefer cuts, restrained crops and slow focus moves over cinematic effects.
- Preserve the existing Motion/Anime.js product interactions.
- No fake cursor trails, holograms, threat maps, red alarm overlays or generated security footage as evidence.
- Any contextual B-roll, if used at all, is atmosphere only and should not appear to be product evidence.
- Keep important disclosure text legible for long enough to read.

## Audio

Narration is optional. If narration is used, keep it factual and synchronized to what is visible.

Candidate narration:

> Cargo Risk Window ranks synthetic shipments by concentrated exposure, not by incident count alone. For each prioritized shipment, the Risk Corridor shows where conditions accumulate and the factor breakdown explains exactly why. Public trends remain context — not shipment-level evidence — and the index is a transparent heuristic, not a theft probability. The final action stays with the reviewer, who verifies the operational plan and decides whether to escalate.

## Gate 6.75 acceptance criteria

Gate 6.75 can PASS when:

- all critical promises are demonstrated by real product states;
- the non-predictive claim boundary is visible or explicitly stated;
- synthetic and public-context boundaries are preserved;
- the Human Review action is shown as human-controlled;
- no stylized framing implies unsupported capability;
- a viewer can reconstruct the product job in under one minute.

## Next production task

Capture the seven required live moments from the production alias, assemble a 50–60 second evidence-first cut, then perform a final claim/evaluator audit before Gate 7 Freeze.
