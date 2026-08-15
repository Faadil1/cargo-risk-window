# Design Direction — Freight Ledger

## Selected direction

**Freight Ledger**

A contemporary logistics-intelligence workspace built around manifest density, route evidence and operational review — not a cyber command center.

## Design intent

The interface should feel like a high-value shipment review desk where the user can understand **what requires attention and why** without decoding a wall of security telemetry.

Core visual qualities:
- editorial clarity;
- operational precision;
- restrained materiality;
- high information density with strong hierarchy;
- visible route/time structure;
- risk color used sparingly and semantically.

## Avoid

- black/red SOC aesthetic;
- neon gradients;
- radar sweeps;
- pulsing threat pins;
- glowing world maps;
- glassmorphism;
- AI confidence gauges;
- generic 4× KPI-card hero;
- decorative charts that do not explain the exposure mechanism.

## Composition

Desktop-first Day Challenge workspace.

Recommended structure:

```text
┌──────────────────────────────────────────────────────────────┐
│ Cargo Risk Window / date / synthetic-data status            │
├───────────────┬───────────────────────────────┬──────────────┤
│ REVIEW QUEUE  │ SHIPMENT / RISK CORRIDOR      │ REVIEW       │
│               │                               │ CONTEXT      │
│ prioritized   │ dominant visual               │ + ACTION     │
│ manifest      │ route + time + exposure       │              │
└───────────────┴───────────────────────────────┴──────────────┘
```

Approximate emphasis:
- queue: 22–25%;
- corridor/detail: 50–55%;
- explanation/action: 23–27%.

The center must dominate.

## Material language

### Canvas
Mineral off-white / cool paper tone.

### Structure
Graphite and deep freight/navy for primary text, dividers and selected manifest states.

### Exposure/action
Copper / amber rather than warning-red for most elevated states.

Red is reserved only for a genuinely critical review signal and should be rare.

### Secondary context
Muted steel, slate and desaturated route colors.

## Typography

Desired character:
- highly legible grotesk/sans for operational reading;
- mono or tabular-numeric face for shipment IDs, dates, route codes and scores;
- optional restrained editorial serif only if it strengthens the ledger identity without reducing speed.

Do not lock a font family until Gate 3.25. Gate 2.25 prototypes may test roles and proportions first.

## Primary signature — Risk Corridor

The Risk Corridor should visually combine:
- origin → destination progression;
- time / dwell windows;
- route segments;
- local exposure intensity;
- peak exposure window;
- dominant reason codes;
- mitigating conditions.

It should read more like a **shipment strip / logistics ledger / route evidence band** than a conventional line chart.

A selected high-exposure interval can receive controlled cinematic focus — slight contrast/depth emphasis, not neon glow.

## Queue — Manifest language

Rows should feel like a manifest rather than SaaS cards.

Prioritize:
- shipment ID;
- lane;
- cargo/value;
- score/band;
- reason marks;
- review state.

Selection may use a travelling index mark, rule or ledger tab rather than a large filled card.

## Explanation panel

The right-hand area should answer:

> Why is this shipment prioritized?

Preferred visual hierarchy:
1. exposure index + band;
2. plain-language explanation;
3. top reason codes;
4. factor contribution breakdown;
5. public-context reference;
6. human-review action.

## Motion guidance

Motion is not yet selected at Gate 2.25.

Potential jobs only:
- move selection between manifest rows;
- trace the Risk Corridor when a shipment is selected;
- reveal factor contributions in causal/order sequence;
- mark the recorded human-review outcome.

No ambient looping threat animation.

## Responsive intent

Desktop is primary because the product represents an operational review workspace.

Tablet/mobile should preserve:
1. prioritized queue;
2. selected shipment summary;
3. Risk Corridor;
4. explanation;
5. action.

Do not attempt to preserve a three-column desktop layout on narrow screens.

## Uniqueness test

Before implementation ask:
- Could this screen belong to a generic cybersecurity startup?
- Is the manifest/route/dwell language visible without reading the pitch?
- Is the Risk Corridor inseparable from the freight-review job?
- Are we exposing exposure concentration rather than merely decorating risk scores?

If the answer is weak, rework composition before adding effects.
