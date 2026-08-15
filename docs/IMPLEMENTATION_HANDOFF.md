# Cargo Risk Window — Implementation Handoff

## Source of truth

Repository: `Faadil1/cargo-risk-window`

TRACE state:
`Faadil1/trace-design-workflow/adapters/day-challenge-cargo-risk-window.yaml`

Status: **READY FOR IMPLEMENTATION**.

Do not redesign the product before building the frozen contracts.

## Read first — in order

1. `README.md`
2. `docs/PRODUCT_CONTRACT.md`
3. `docs/DATA_MODEL.md`
4. `docs/RISK_INDEX.md`
5. `docs/DESIGN_DIRECTION.md`
6. `docs/PALETTE_BRAND.md`
7. `docs/DESIGN_SYSTEM.md`
8. `docs/TYPOGRAPHY.md`
9. `docs/DIFFERENTIATION_MOTION.md`
10. `docs/UNIQUENESS_AUDIT.md`
11. `docs/DATA_VISUALIZATION.md`

Machine-readable inputs:
- `data/synthetic-schema.json`
- `design/typography.tokens.json`

## Frozen decisions

Do not change without a concrete conflict:
- product problem / claim boundaries;
- synthetic-only shipment data;
- one-workspace product flow;
- C — Intermodal Ledger composition;
- Mineral Intermodal palette;
- canvas `#D8DCCF`;
- Intermodal Ledger component grammar;
- Archivo + IBM Plex Mono;
- Intermodal Risk Corridor as primary signature;
- transparent 0–100 heuristic Exposure Index;
- Motion owns React layout/state motion;
- Anime.js owns corridor/SVG editorial sequence;
- React SVG + D3 helpers own custom analytical geometry;
- map remains optional/secondary;
- human review remains the resolution state.

## First implementation objective

Build a working desktop-first prototype that allows a reviewer to:

1. see a ranked synthetic shipment manifest;
2. select a shipment;
3. see its focus summary and Exposure Index;
4. inspect the Intermodal Risk Corridor;
5. identify its critical exposure window and reason codes;
6. reconcile factor contributions with the total score;
7. see explicitly separated public aggregate context;
8. record a human review action.

The first viewport should communicate the priority shipment and core exposure mechanism without scrolling.

## Suggested implementation order

### Pass 1 — Functional shell
- application frame;
- navigation/index rail;
- manifest list;
- selected shipment state;
- focus shipment header;
- static corridor modules;
- factor breakdown;
- context section;
- review action.

No animation required yet.

### Pass 2 — Synthetic dataset
- generate at least 24 synthetic shipments matching `DATA_MODEL.md`;
- include multiple route/modal patterns;
- include low/watch/elevated/priority-review examples;
- ensure no single factor always determines the score;
- calculate/reconcile the Exposure Index transparently.

### Pass 3 — Intermodal Risk Corridor
- time-based horizontal progression;
- route/modal modules;
- critical window;
- reason anchors;
- mitigating condition;
- accessible textual summary.

Use React/SVG and D3 scale/geometry helpers where useful.

### Pass 4 — Frozen visual system
- Mineral Intermodal colors;
- Archivo + IBM Plex Mono roles;
- manifest/container geometry;
- structural rules;
- density and responsive behavior.

### Pass 5 — Character
- Manifest Index Transfer using Motion;
- Exposure Window Build / Risk Corridor sequence using Anime.js;
- Review Mark confirmation;
- reduced-motion static equivalent.

### Pass 6 — QA
Proceed to TRACE Gate 6 only after a real rendered implementation exists.

Check:
- desktop 1440×900 presentation capture;
- tablet/mobile sequential layout;
- typography/readability;
- keyboard/focus behavior;
- semantic color + non-color cues;
- reduced motion;
- synthetic/public boundary;
- no probability wording;
- uniqueness audit against actual viewport.

## Prohibited shortcuts

Do not begin with:
- generic KPI cards;
- a circular risk gauge hero;
- a dark command-center template;
- a generic map dashboard;
- random chart-library components;
- AI recommendation copy;
- untraceable risk scoring;
- tiny limitation/footer text;
- real/private logistics data.

## First agent prompt

```text
We are implementing Cargo Risk Window from the frozen TRACE design contracts in this repository.

Before changing anything, read README.md and the files listed in docs/IMPLEMENTATION_HANDOFF.md under “Read first — in order”. Treat the frozen decisions as constraints, not suggestions.

Do not redesign the product. Do not introduce real shipment data, prediction/probability language, generic KPI-card layouts, a map-first dashboard, or a dark cyber/SOC theme.

First return:
1. a concise implementation plan,
2. the proposed application/file structure,
3. the synthetic-data generation approach,
4. the component breakdown for the Intermodal Risk Corridor,
5. the exact dependencies you believe are required and the job each dependency owns.

Do not write application code until that plan is reviewed.
```
