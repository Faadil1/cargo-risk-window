# Design Direction — Freight Ledger / Intermodal Ledger

## Selected direction

**Freight Ledger** remains the parent art direction.

**Selected Gate 2.25 composition: C — Intermodal Ledger.**

The chosen prototype makes the freight domain visible through modular route segments, manifest structure and dispatch/review marks rather than through a conventional map-first security dashboard.

## Design intent

The interface should feel like a contemporary high-value logistics review desk: operational, modular and materially specific to freight movement.

The user must understand **what requires attention, where exposure concentrates and why** without decoding generic security telemetry.

Core visual qualities:
- intermodal/container modularity;
- route and time as structural layout primitives;
- editorial information hierarchy;
- operational precision;
- colored material surfaces rather than default white/navy SaaS;
- exposure color used semantically, not as constant alarm styling.

## Chosen composition

Desktop-first operational workspace.

```text
┌──────────────────────────────────────────────────────────────┐
│ CARGO RISK WINDOW / scenario / synthetic-data marker        │
├──────────────┬───────────────────────────────────────────────┤
│ MANIFEST     │ SELECTED SHIPMENT + EXPOSURE INDEX           │
│ prioritized  ├───────────────────────────────────────────────┤
│ shipments    │ INTERMODAL RISK CORRIDOR                     │
│              │ route modules + time + dwell + critical zone │
│              ├───────────────────┬───────────────────────────┤
│              │ DRIVER BREAKDOWN  │ REASON CODES / ACTION     │
├──────────────┴───────────────────┴───────────────────────────┤
│ PUBLIC AGGREGATE CONTEXT / HUMAN REVIEW OUTCOME             │
└──────────────────────────────────────────────────────────────┘
```

The Risk Corridor remains the dominant mechanism, but it is expressed as an **intermodal route strip** rather than a standard map hero.

## Primary signature — Intermodal Risk Corridor

The corridor must combine:
- origin → destination progression;
- modal/route segments;
- timestamps and dwell intervals;
- local exposure intensity;
- one clearly marked critical exposure window;
- reason-code anchors attached to the relevant segment;
- mitigating conditions where present.

It should read like a hybrid of manifest, route plan and operational evidence strip.

## Manifest language

Rows should resemble a freight manifest/index, not SaaS cards.

Prioritize:
- shipment ID;
- lane;
- commodity/value cue;
- exposure score/band;
- review state;
- small reason marks.

The selected shipment should feel indexed or tagged, not presented as a floating gradient card.

## Color direction

Gate 2.5 deliberately rejects the classic white/navy/red security palette.

Use the palette defined in `docs/PALETTE_BRAND.md`:
- dusty mineral sage canvas;
- warm bone surfaces;
- aubergine-charcoal structure;
- muted freight violet for route/selection;
- oxidized teal for verified/normal states;
- terracotta for elevated exposure;
- plum for critical review;
- muted brass for contextual marks.

No pure white background, no navy-dominant shell, no bright warning red as the default risk color.

## Avoid

- black/red SOC aesthetic;
- navy corporate dashboard default;
- neon gradients;
- radar sweeps;
- pulsing threat pins;
- glowing world maps;
- glassmorphism;
- AI confidence gauges;
- generic KPI-card hero;
- decorative container motifs that do not encode route/state information.

## Explanation hierarchy

The interface must answer, in order:
1. which shipment needs attention;
2. exposure index and band;
3. where the exposure window occurs;
4. top reason codes;
5. factor contributions;
6. public aggregate context;
7. human-review action.

## Typography

Typography is not yet locked.

Desired roles:
- condensed or slightly industrial grotesk for manifests/route labels;
- highly legible sans for explanation and actions;
- tabular mono for shipment IDs, timestamps, scores and reason codes.

Do not turn the interface into retro shipping-label cosplay. Domain character must remain contemporary.

## Motion guidance

Motion is not yet selected.

Potential jobs only:
- selected manifest index travels to another row;
- corridor segments assemble in route order;
- critical window resolves from normal → elevated → review;
- reason codes attach to their source segment;
- human review mark confirms the outcome.

No ambient alarm loops.

## Uniqueness test

Before implementation ask:
- Is the freight/intermodal domain visible without reading the pitch?
- Is the route strip more important than decorative maps?
- Could this still be mistaken for a cybersecurity dashboard?
- Do colors feel specific and memorable rather than default SaaS?
- Does every container/module encode a real operational meaning?

If the answer is weak, rework composition before adding effects.
