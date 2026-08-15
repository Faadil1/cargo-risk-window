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

## TRACE workflow

This project is developed with the TRACE Design Workflow.

Workflow source of truth:

`Faadil1/trace-design-workflow/adapters/day-challenge-cargo-risk-window.yaml`

Current TRACE state:

- **T — Truth:** PASS
- **R — Research / Product Flow:** PASS
- **R — Domain Metaphor:** PASS
- **A — Visual Direction:** `Freight Ledger` selected
- **Current gate:** **2.25 — Visual Prototype**
- **Next required output:** 2–3 coherent full-screen visual prototypes before implementation

Frozen decisions must not be reopened without a concrete conflict.

## Frozen product structure

The Day Challenge is intentionally compact. It is one operational review workspace rather than a six-page dashboard.

```text
Review Queue
    ↓
Shipment Review
    ↓
Risk Corridor
    ↓
Public Context
    ↓
Human Review Outcome
```

### Primary signature — Risk Corridor

The central visualization combines **route + time + exposure factors** so the reviewer can see when a shipment enters an exposure window and which factors created that state.

The signature is the business mechanism itself — not a decorative chart.

## Exposure Index

The current transparent heuristic allocates a maximum of 100 points:

| Factor | Max points |
|---|---:|
| Cargo value | 25 |
| Geography / route context | 20 |
| Dwell exposure | 15 |
| Commodity context | 15 |
| Timing | 10 |
| Carrier verification | 10 |
| Recent public incident context | 5 |

Every shipment must expose the component contributions and visible reason codes. See [`docs/RISK_INDEX.md`](docs/RISK_INDEX.md).

## Visual direction — Freight Ledger

The selected art direction is **Freight Ledger**: a contemporary logistics-intelligence workspace with editorial clarity rather than a generic cyber/SOC aesthetic.

Key principles:

- mineral/light operational canvas rather than black hacker UI;
- graphite/navy structure;
- copper/amber reserved for exposure/action;
- manifest-like information density;
- one dominant Risk Corridor;
- modular route segments;
- restrained cinematic focus only where it improves review priority;
- no neon radar, pulsing map pins or fake prediction confidence.

See [`docs/DESIGN_DIRECTION.md`](docs/DESIGN_DIRECTION.md).

## Repository map

```text
docs/
  PRODUCT_CONTRACT.md   Product truth, users, claims and frozen flow
  DATA_MODEL.md         Synthetic dataset contract
  RISK_INDEX.md         Transparent exposure-index specification
  DESIGN_DIRECTION.md   Freight Ledger visual direction

data/
  synthetic-schema.json Machine-readable synthetic data schema
src/                    Product implementation — created after Gate 2.25
public/                 Public assets — created when implementation starts
```

## Data policy

- shipment data: **synthetic only**;
- public incident/trend information: aggregate contextual reference only;
- private/confidential logistics data: prohibited;
- personal data: none;
- synthetic/public boundaries must remain visible in the UI and case study.

## Current status

**Planning / Gate 2.25 — visual prototype before code.**

Do not start implementation by creating KPI cards or a generic dashboard shell. First produce and validate the full-screen Freight Ledger composition against the frozen product flow, Risk Corridor and explainability requirements.
