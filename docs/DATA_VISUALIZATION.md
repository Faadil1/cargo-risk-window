# Gate 4.5 — Data Visualization

## Objective

Select visualization methods by analytical job while preserving the Intermodal Ledger identity.

The product is not a collection of charts. The primary analytical object is the **Intermodal Risk Corridor**.

## Tool routing

### Primary custom visualization owner — D3 + React SVG

Use D3 for:
- scales;
- time positioning;
- segment geometry;
- interpolation where needed;
- custom data-driven positioning of route/reason anchors.

Render through React/SVG so the visualization remains integrated with product state and accessible UI structure.

Do not let D3 own the entire application DOM.

### Supporting visuals

Use simple React/CSS/SVG with the same scale logic for:
- factor contribution bars;
- small 7-day context trends;
- count/value comparison marks;
- selected/critical segment annotations.

Avoid installing a second chart library for these small jobs unless implementation evidence shows a real need.

### Bklit
Not required for the initial MVP. May be consulted as visual/reference inspiration if a supporting web-chart problem remains unresolved, but should not replace the product-specific Risk Corridor.

### Deneb / Vega
Not selected because this product is a standalone web application rather than a BI-hosted visual. Use only if the implementation context changes materially.

---

# 1. Intermodal Risk Corridor encoding

The corridor must answer:

> Where in route + time does exposure concentrate, and which factors create that state?

## Horizontal dimension

Primary x-axis = **time progression**, aligned with route/operational sequence.

Each route segment has:
- start time;
- end time;
- duration;
- mode/operation;
- location/region;
- local exposure contribution;
- reason codes;
- mitigating conditions.

Segment width should primarily reflect duration, with a minimum visual width for very short operational events.

## Segment identity

Represent segments as intermodal modules rather than a continuous generic line series.

Examples:
- truck linehaul;
- rail-yard transfer;
- terminal dwell;
- border/inspection;
- secure parking;
- final-mile truck.

Each module includes icon/label + time span + exposure state.

## Exposure encoding

Use multiple cues:
- color semantic state;
- structural emphasis / border weight;
- exposure-window overlay;
- reason-code anchors;
- labels.

Do not use hue alone.

### Routine / verified
Oxidized teal + normal structure.

### Active / selected
Freight violet + selection/index structure.

### Elevated exposure
Terracotta + stronger route/module emphasis.

### Critical review window
Plum + explicit `CRITICAL REVIEW WINDOW` label / pattern or rule.

The critical state means **priority for review**, not predicted theft.

---

# 2. Critical Exposure Window

A critical window appears when several heuristic factors are simultaneously elevated over a route/time interval.

Required visual elements:
- clear start/end time;
- affected route/operational segment;
- top reason codes;
- local factor explanation;
- any mitigating factor;
- explicit human-review framing.

Do not show an opaque heatmap blob with no explanation.

---

# 3. Exposure Index breakdown

Display each factor as earned points over maximum points.

Example:

```text
Cargo value            21 / 25
Geography context      17 / 20
Dwell exposure         12 / 15
Commodity context      10 / 15
Timing                   7 / 10
Carrier verification     7 / 10
Public trend context      3 / 5
```

Preferred encoding:
- horizontal contribution bar;
- earned/max numeric pair;
- reason code where applicable;
- plain-language explanation on selection/expand.

The sum must visibly reconcile with the Exposure Index total.

Never replace this with only a radial gauge.

---

# 4. Review queue

The queue is a ranked manifest, not a chart.

Sort default:
- Exposure Index descending.

Each row exposes enough information to understand why it is high:
- score;
- band;
- route;
- top reason marks;
- review state.

Avoid tiny in-row sparklines unless they answer a specific task.

---

# 5. Public aggregate context

Public contextual information must remain visually and semantically separate from synthetic shipment evidence.

Allowed supporting visuals:
- incident count over the last 7 days;
- aggregate theft-value comparison;
- commodity-targeting share;
- simple rising/stable/falling trend.

Every comparison must display:
- current period;
- comparison period/baseline;
- unit;
- aggregate/public label.

Do not imply that the public context proves a specific shipment will be stolen.

---

# 6. Map policy

A geographic map is **secondary**.

The selected Intermodal Ledger concept does not depend on a map to communicate the core product job.

If a map appears:
- it should orient the reviewer, not dominate the screen;
- no pulsing threat pins;
- no red heatmap theatre;
- route/segment links must correspond to the Risk Corridor;
- the corridor remains the primary analytical artifact.

For the one-day MVP, a map library is not required unless the corridor cannot provide sufficient spatial orientation.

---

# 7. Scale / normalization rules

- Exposure Index remains 0–100 because the heuristic weights sum to 100.
- Never label it probability, confidence or likelihood.
- Local segment exposure may use the same semantic bands, but must be labelled as contribution/exposure state rather than probability.
- Public-context values retain their actual units.
- Do not normalize unrelated metrics into one misleading index unless the transformation is explicitly documented.

---

# 8. Tool economy

Initial visualization stack:

```text
React
  + SVG
  + D3 scales/geometry where custom data positioning is needed
```

Supporting bars and small context charts should remain lightweight.

Do not add:
- a generic chart suite solely for convenience;
- WebGL;
- 3D maps;
- chart animation libraries separate from the frozen Motion/Anime ownership model.

---

# 9. Accessibility

Every data visualization needs a textual equivalent or summary.

For the Risk Corridor, expose:
- shipment;
- critical start/end time;
- affected segment;
- top reasons;
- mitigation;
- next human action.

Keyboard/focus users must be able to inspect route modules/reasons without pointer hover only.

Color states require labels/icons/structure.

---

# Gate result

**Gate 4.5 — Data Visualization: PASS / READY FOR IMPLEMENTATION.**

Selected visualization approach:
- custom Intermodal Risk Corridor → React SVG + D3 scale/geometry helpers;
- factor contributions → lightweight horizontal bars + numeric reconciliation;
- public context → small, explicitly labelled supporting charts;
- map → optional/secondary, no map library required for MVP.

Gate 4.75 Visual Assets: **not required for core product implementation**.

Gate 5 Targeted Reference: **not currently required**; use only if a specific unresolved component appears during build.

Next required output: **working product implementation**, followed by Gate 6 QA / Polish.