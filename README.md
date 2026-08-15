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
- **A — Visual Direction:** PASS
- **A — Visual Prototype:** **C — Intermodal Ledger selected / PASS**
- **Current gate:** **2.5 — Palette / Brand**
- **Selected palette:** `Mineral Intermodal`
- **Next required output:** validate palette in the chosen full-screen composition, then formalize Gate 3 Design System

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

### Primary signature — Intermodal Risk Corridor

The central visualization combines **route + time + modal segments + exposure factors** so the reviewer can see when a shipment enters an exposure window and which factors created that state.

The selected prototype expresses this as an intermodal route strip rather than a conventional map-first security dashboard.

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

## Selected visual prototype — C: Intermodal Ledger

The selected composition makes the freight domain visible through:
- manifest/index structure;
- modular route segments;
- route/time progression;
- reason codes attached to operational segments;
- a review-mark style human outcome;
- one dominant Intermodal Risk Corridor.

A and B remain archived as exploration references only.

See [`docs/DESIGN_DIRECTION.md`](docs/DESIGN_DIRECTION.md).

## Palette — Mineral Intermodal

The current Gate 2.5 palette deliberately avoids white/navy/red dashboard conventions.

Core colors:
- mineral sage canvas `#D8DCCF`;
- warm bone surfaces `#EAE1D5`;
- aubergine-charcoal ink `#2B2730`;
- freight violet active state `#635D9A`;
- oxidized teal normal/verified `#3E7B6C`;
- terracotta elevated exposure `#D46A4C`;
- plum critical review `#8E4662`;
- muted brass public context `#B7A85A`.

See [`docs/PALETTE_BRAND.md`](docs/PALETTE_BRAND.md).

## Repository map

```text
docs/
  PRODUCT_CONTRACT.md       Product truth, users, claims and frozen flow
  DATA_MODEL.md             Synthetic dataset contract
  RISK_INDEX.md             Transparent exposure-index specification
  DESIGN_DIRECTION.md       Selected Intermodal Ledger composition
  VISUAL_PROTOTYPE_BRIEF.md Gate 2.25 comparison contract
  PALETTE_BRAND.md          Gate 2.5 Mineral Intermodal palette

data/
  synthetic-schema.json     Machine-readable synthetic data schema
src/                        Product implementation — created after design-system lock
public/                     Public assets — created when implementation starts
```

## Data policy

- shipment data: **synthetic only**;
- public incident/trend information: aggregate contextual reference only;
- private/confidential logistics data: prohibited;
- personal data: none;
- synthetic/public boundaries must remain visible in the UI and case study.

## Current status

**Planning / Gate 2.5 — palette validation before Design System.**

Do not start implementation with a generic dashboard shell. Validate the selected Intermodal Ledger composition using the Mineral Intermodal palette, then proceed to Gate 3 for typography, spacing, component states, route-module rules, visualization semantics and responsive behavior.
