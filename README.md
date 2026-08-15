# Cargo Risk Window

**Cargo Risk Window** is a one-day data-product challenge exploring how freight-security teams can prioritize planned or active shipments when several known exposure factors concentrate at the same time.

The project begins with a real business problem — not with a dashboard concept.

> Freight-theft incident counts can appear relatively stable while financial exposure rises because commodity targets, geographies, shipment value, timing and tactics shift.

Cargo Risk Window is therefore designed around **exposure prioritization**, not raw incident counts.

## Product promise

Help a transportation-security or freight-risk manager answer, quickly and transparently:

1. Which shipments deserve attention first?
2. Why is each shipment flagged?
3. Where in the route or time window does exposure concentrate?
4. Which public historical pattern provides context?
5. What should be escalated for human security review?

## Important claim boundary

This is **not a theft-prediction model**.

The prototype uses a transparent synthetic **Exposure Index (0–100)** for prioritization. It does not estimate the probability that a shipment will be stolen and it does not use private CargoNet, carrier, customer or shipment data.

All shipment-level data in this repository is synthetic.

## Current implementation

A working implementation now exists on:

- branch: `build/intermodal-ledger`
- Draft PR: **#1 — Build Intermodal Ledger Cargo Risk Window prototype**

`main` remains the frozen product/design-contract layer until final QA and Evaluation Capture are approved.

Current implementation includes:
- 24 deterministic synthetic shipments;
- ranked review manifest;
- selectable shipment state;
- transparent 0–100 factor reconciliation;
- Intermodal Risk Corridor;
- reason codes and critical dwell state;
- separate public aggregate context;
- human review actions;
- Motion selection/state transitions;
- Anime.js scoped corridor/reason choreography;
- reduced-motion complete state.

## TRACE workflow

Workflow source of truth:

`Faadil1/trace-design-workflow/adapters/day-challenge-cargo-risk-window.yaml`

Current TRACE state:

- **T — Truth:** PASS
- **R — Product Flow:** PASS
- **R — Domain Metaphor:** PASS
- **A — Visual Direction:** PASS
- **A — Visual Prototype:** **C — Intermodal Ledger / PASS**
- **A — Palette / Brand:** **Mineral Intermodal / PASS**
- **A — Design System:** **Intermodal Ledger System / PASS**
- **A — Typography:** **Archivo + IBM Plex Mono / PASS**
- **C — Differentiation:** PASS
- **C — Uniqueness Audit:** PASS at design-contract level
- **C — Data Visualization:** PASS / revised from implementation evidence
- **E — Gate 6 QA / Polish:** **IN PROGRESS; automated rendered QA passing**
- **Next required output:** owner review + Gate 6.5 Evaluation Capture

Frozen product decisions must not be reopened without a concrete conflict.

## Frozen product structure

```text
Review Queue
    ↓
Shipment Review
    ↓
Intermodal Risk Corridor
    ↓
Public Context
    ↓
Human Review Outcome
```

### Primary signature — Intermodal Risk Corridor

The central visualization combines **route + time + modal segments + exposure factors** so the reviewer can see when a shipment enters an exposure window and which factors created that state.

### Narrative signature — Exposure Window Build

Selection reveals the logic in order:

`shipment → route modules → critical window → reason codes → factor contributions → human review state`

### Supporting micro-interactions

- Manifest Index Transfer
- Review Mark

See [`docs/DIFFERENTIATION_MOTION.md`](docs/DIFFERENTIATION_MOTION.md).

## Exposure Index

The transparent heuristic allocates a maximum of 100 points:

| Factor | Max points |
|---|---:|
| Cargo value | 25 |
| Geography / route context | 20 |
| Dwell exposure | 15 |
| Commodity context | 15 |
| Timing | 10 |
| Carrier verification | 10 |
| Recent public incident context | 5 |

Every shipment must expose component contributions and visible reason codes. See [`docs/RISK_INDEX.md`](docs/RISK_INDEX.md).

## Selected visual prototype — C: Intermodal Ledger

The selected composition makes the freight domain visible through:
- manifest/index structure;
- modular route segments;
- route/time progression;
- reason codes attached to operational segments;
- review-mark human outcome;
- one dominant Intermodal Risk Corridor.

A and B remain archived as exploration references only.

## Palette — Mineral Intermodal

Core colors:
- mineral sage canvas `#D8DCCF` — user locked;
- warm bone surfaces `#EAE1D5`;
- aubergine-charcoal ink `#2B2730`;
- freight violet active state `#635D9A`;
- oxidized teal routine/verified `#3E7B6C`;
- terracotta elevated exposure `#D46A4C`;
- plum critical review `#8E4662`;
- muted brass public context `#B7A85A`.

See [`docs/PALETTE_BRAND.md`](docs/PALETTE_BRAND.md).

## Typography — locked

- **Archivo** — operational/UI/readability.
- **IBM Plex Mono** — shipment IDs, codes, dates/times and technical numeric data.
- no third display family.
- default body: 14 px;
- dense manifest: 13 px;
- minimum meaningful desktop text: 11 px;
- operational numbers use tabular numerals.

See [`docs/TYPOGRAPHY.md`](docs/TYPOGRAPHY.md) and [`design/typography.tokens.json`](design/typography.tokens.json).

## Data visualization — validated implementation approach

The original pre-build assumption that D3 would be required was reopened after implementation evidence.

Validated MVP stack:

```text
React semantic route modules
  + CSS grid/flex
  + lightweight CSS/SVG marks where useful
```

The corridor is a categorical operational sequence, so adding D3 did not improve the core analytical job. D3 remains available only if a future continuous time/geometry requirement genuinely needs it.

The Risk Corridor remains the primary analytical artifact. A geographic map is optional and secondary.

See [`docs/DATA_VISUALIZATION.md`](docs/DATA_VISUALIZATION.md).

## Motion ownership

- **Motion** → React layout/state transitions such as manifest selection and review state.
- **Anime.js** → ordered Risk Corridor / reason-code reveal.
- GSAP / Rive / Three.js → not required for the MVP.
- no ambient looping threat animation.

Reduced motion preserves a complete static state.

## Rendered QA

The Draft PR uses GitHub Actions + Chromium/Playwright to build, render and assert the product.

Passing checks include:
- production TypeScript/Vite build;
- desktop 1440×900;
- keyboard focus;
- alternate shipment selection;
- human escalation state;
- tablet 900×1100;
- mobile 390×844;
- reduced-motion complete state;
- rendered uniqueness recheck.

Implementation QA docs live on the build branch:
- `docs/QA_RENDERED_001.md`
- `docs/UNIQUENESS_AUDIT_RENDERED.md`

## Repository map

```text
docs/
  PRODUCT_CONTRACT.md       Product truth, users, claims and frozen flow
  DATA_MODEL.md             Synthetic dataset contract
  RISK_INDEX.md             Transparent exposure-index specification
  DESIGN_DIRECTION.md       Selected Intermodal Ledger composition
  VISUAL_PROTOTYPE_BRIEF.md Gate 2.25 comparison contract
  PALETTE_BRAND.md          Frozen Mineral Intermodal palette
  DESIGN_SYSTEM.md          Intermodal Ledger design system
  TYPOGRAPHY.md             Locked typography system
  DIFFERENTIATION_MOTION.md Signature + motion ownership
  UNIQUENESS_AUDIT.md       Design-level anti-generic audit
  DATA_VISUALIZATION.md     Visualization job/tool contract
  IMPLEMENTATION_HANDOFF.md Build handoff

design/
  typography.tokens.json    Machine-readable typography tokens

data/
  synthetic-schema.json     Machine-readable synthetic data schema
```

Build branch adds the React/Vite implementation, CI and rendered QA artifacts.

## Data policy

- shipment data: **synthetic only**;
- public incident/trend information: aggregate contextual reference only;
- private/confidential logistics data: prohibited;
- personal data: none;
- synthetic/public boundaries remain visible in the UI and case study.

## Implementation guardrails

Do not replace the frozen product with:
- generic KPI-card hero layouts;
- a circular risk gauge as the main visualization;
- navy/black command-center styling;
- red alerts everywhere;
- pulsing maps/radar effects;
- AI recommendation/confidence language;
- glass cards;
- tiny limitation text;
- a map-first layout that makes the Intermodal Risk Corridor secondary.

## Current status

**Working prototype built — Draft PR #1 — Gate 6 rendered QA passing.**

Keep the PR in draft until the owner reviews the actual rendered captures and Gate 6.5 Evaluation Capture is resolved. Then the branch can be marked ready for review and promoted to `main` deliberately.
