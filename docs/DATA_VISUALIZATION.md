# Gate 4.5 — Data Visualization

## Objective

Select visualization methods by analytical job while preserving the Intermodal Ledger identity.

The product is not a collection of charts. The primary analytical object is the **Intermodal Risk Corridor**.

## Tool routing — revised after implementation evidence

### Primary visualization owner — semantic React modules + CSS

The rendered implementation demonstrated that the Risk Corridor is fundamentally a **categorical operational sequence**, not a continuous quantitative geometry problem.

Its important semantics are:
- ordered route/operational modules;
- start/end time labels;
- mode and location;
- exposure state;
- critical dwell window;
- reason-code anchors;
- mitigating condition;
- human-readable explanation.

For the one-day MVP, React semantic markup + CSS grid/flex layout is therefore the preferred implementation.

This replaces the earlier pre-build assumption that D3 scale/geometry helpers were required.

### Why D3 is not required for the MVP

Rendered QA showed that installing D3 would add implementation complexity without improving the user's core answer:

> Which shipment needs attention, where does exposure concentrate, why, and what should a human reviewer do next?

TRACE's `tool by job` rule therefore favors the smaller implementation when it communicates the analytical mechanism more clearly.

D3 may be introduced later only if a real requirement appears for:
- proportional continuous time positioning;
- complex data-driven route geometry;
- collision-aware annotation placement;
- linked analytical scales that are cumbersome in native React/CSS/SVG.

Do **not** install it simply because this is a data product.

### SVG policy

SVG remains allowed for lightweight connectors, route rails, patterns or data-driven annotations if those become clearer than CSS. It is not mandatory for the complete corridor container.

### Supporting visuals

Use simple React/CSS/SVG for:
- factor contribution bars;
- small context comparisons;
- selected/critical segment annotations.

Avoid installing a generic chart suite unless an unresolved analytical job genuinely needs it.

### Bklit
Not required for the initial MVP. It may be consulted as visual/reference inspiration if a supporting web-chart problem remains unresolved, but should not replace the product-specific Risk Corridor.

### Deneb / Vega
Not selected because this product is a standalone web application rather than a BI-hosted visual. Use only if the implementation context changes materially.

---

# 1. Intermodal Risk Corridor encoding

The corridor must answer:

> Where in route + time does exposure concentrate, and which factors create that state?

## Primary progression

The MVP uses **ordered operational progression with explicit time labels**.

Each route segment exposes:
- start time;
- end time;
- mode/operation;
- location/region;
- exposure state;
- reason codes;
- mitigating conditions when applicable.

Segment width is allowed to remain modular/equal in the one-day MVP because the primary task is comparing operational states and locating the critical window, not performing precise duration measurement from pixel length.

If future validation shows that proportional duration is necessary, reopen this decision and introduce a real time scale.

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
- semantic color;
- structural emphasis / border weight;
- explicit critical label/state;
- reason-code anchors;
- text.

Do not use hue alone.

### Routine / verified
Oxidized teal + normal structure.

### Active / selected
Freight violet + selection/index structure.

### Elevated exposure
Terracotta + stronger module emphasis.

### Critical review window
Plum + explicit critical state / labels / reason codes.

The critical state means **priority for human review**, not predicted theft.

---

# 2. Critical Exposure Window

A critical window appears when several heuristic factors are simultaneously elevated over a route/time interval.

Required visual elements:
- clear start/end time;
- affected route/operational segment;
- top reason codes;
- local explanation;
- any mitigating factor;
- explicit human-review framing.

Do not show an opaque heatmap blob with no explanation.

---

# 3. Exposure Index breakdown

Display each factor as earned points over maximum points.

Preferred encoding:
- lightweight horizontal contribution bar;
- earned/max numeric pair;
- reason code where applicable;
- plain-language explanation.

The sum must visibly reconcile with the Exposure Index total.

Never replace this with only a radial gauge.

---

# 4. Review queue

The queue is a ranked manifest, not a chart.

Default sort:
- Exposure Index descending.

Each row exposes:
- score;
- band;
- route;
- relevant operational context;
- review state.

The selected Day Challenge hero scenario must remain consistent with the sorted priority narrative.

---

# 5. Public aggregate context

Public contextual information must remain visually and semantically separate from synthetic shipment evidence.

Allowed supporting forms:
- aggregate incident count;
- aggregate value comparison;
- commodity-targeting share;
- rising/stable/falling trend;
- small chart only if it improves interpretation.

Every comparison must display the relevant period/baseline/unit where appropriate and remain explicitly labelled as aggregate/public context.

Do not imply that public context proves a specific shipment will be stolen.

---

# 6. Map policy

A geographic map is **secondary**.

The selected Intermodal Ledger concept does not depend on a map to communicate the core job.

If a map appears later:
- it should orient the reviewer, not dominate;
- no pulsing threat pins;
- no red heatmap theatre;
- route/segment links must correspond to the Risk Corridor;
- the corridor remains primary.

For the one-day MVP, no map library is required.

---

# 7. Scale / normalization rules

- Exposure Index remains 0–100 because the documented heuristic weights sum to 100.
- Never label it probability, confidence or likelihood.
- Local segment exposure uses semantic states, labelled as exposure/review state rather than probability.
- Public-context values retain their units.
- Do not normalize unrelated metrics into an undocumented index.

---

# 8. Tool economy

Validated MVP visualization stack:

```text
React semantic modules
  + CSS grid/flex
  + lightweight CSS/SVG marks where useful
```

Motion ownership remains separate:
- Motion → React layout/state transitions;
- Anime.js → sequential corridor/reason reveal.

Do not add:
- D3 without a continuous geometry/scale requirement;
- a generic chart suite solely for convenience;
- WebGL;
- 3D maps;
- extra chart-animation libraries.

---

# 9. Accessibility

Every visualization needs a textual equivalent or summary.

For the Risk Corridor, expose:
- shipment;
- critical start/end time;
- affected segment;
- top reasons;
- mitigation;
- next human action.

Keyboard/focus users must not depend on pointer hover only.

Color states require labels/icons/structure.

---

# Gate result

**Gate 4.5 — Data Visualization: PASS / REVISED FROM IMPLEMENTATION EVIDENCE.**

Validated approach:
- custom Intermodal Risk Corridor → semantic React modules + CSS; lightweight SVG optional;
- D3 → **not required for MVP**;
- factor contributions → lightweight horizontal bars + numeric reconciliation;
- public context → explicitly labelled supporting metrics/visuals;
- map → optional/secondary, no map library required.

Reason for reopening the tool choice:
- rendered implementation demonstrated that the original D3 assumption was unnecessary complexity for a categorical operational sequence.

The analytical contract, product flow and visual direction remain unchanged.

Next: Gate 6 QA / Polish on the working product.
