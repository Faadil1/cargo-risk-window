# Gate 3 — Design System

## System name

**Intermodal Ledger System**

This system operationalizes the selected `C — Intermodal Ledger` composition and the `Mineral Intermodal` palette.

The system must feel like a purpose-built freight review instrument: modular, coded, tactile and calm under risk.

## 1. Layout grid

### Desktop reference
- reference viewport: 1440×900 or wider;
- outer application padding: 20–24 px;
- 12-column grid;
- 8 px base spacing unit;
- workspace gap: 12–16 px;
- primary content should occupy the first viewport without requiring scroll to identify the highest-priority shipment.

### Workspace proportions

```text
Navigation rail     64–72 px
Review manifest     260–300 px
Primary workspace   flexible / dominant
Context/action      260–320 px when visible as a separate region
```

For the selected Intermodal Ledger composition, the **Risk Corridor remains the dominant visual region**.

## 2. Surface system

### Canvas
`#D8DCCF` — mineral sage / industrial mist — **USER LOCKED**.

Never silently replace with white, navy or black.

### Primary operational surface
`#EAE1D5` — warm bone.

Use for:
- focus shipment header;
- manifest regions;
- factor breakdown;
- context modules;
- human review surface.

### Secondary tinted modules
Use low-saturation tints derived from freight violet and oxidized teal for selected/verified modules rather than introducing new saturated colors.

### Structure
`#2B2730` for strong text, borders and route/index rules.

## 3. Shape language

Avoid floating SaaS cards.

Preferred geometry:
- module blocks inspired by container labels and intermodal transfer segments;
- 4–8 px radius maximum for ordinary modules;
- selected route modules may use squared or clipped corners;
- thin structural rules rather than large shadows;
- no glassmorphism;
- no excessive elevation stack.

## 4. Manifest row component

Each row must expose:
1. shipment ID;
2. route/lane;
3. exposure index;
4. band label;
5. top one or two reason marks;
6. review state.

States:
- default;
- hover/focus;
- selected;
- reviewed;
- escalated.

Selection uses **freight violet**, position and an index/tab mark. It must not look like a warning state.

## 5. Focus shipment header

Required fields:
- shipment ID;
- origin → destination;
- current status;
- equipment / commodity;
- synthetic cargo-value band/value;
- carrier verification state;
- Exposure Index + semantic band.

The index number must not visually imply a probability.

Always retain nearby microcopy such as:

> Heuristic prioritization index — not a probability of theft.

## 6. Intermodal Risk Corridor

The Risk Corridor is the primary product signature.

It combines:
- route progression;
- time progression;
- modal/operational segments;
- dwell windows;
- local exposure contribution;
- critical exposure window;
- reason-code anchors;
- mitigating conditions.

### Segment language

Examples:
- truck;
- rail yard;
- terminal/transfer;
- secure parking/dwell;
- border/inspection;
- final-mile truck.

Each segment should behave like a **modular operational block**, not a generic chart series.

### Exposure state

Use both color and structure:
- routine/verified → oxidized teal;
- active/selected → freight violet;
- elevated → terracotta;
- critical review window → plum;
- public aggregate context → muted brass/neutral.

Never encode severity by color alone. Pair with labels, symbols, line weight, fill pattern or position.

## 7. Reason-code system

Reason codes must be short, visible and tied to the segment or factor that caused them.

Examples:
- `RC-104` — elevated geographic context;
- `DWELL-2H+` — extended stop/dwell;
- `VALUE-HIGH` — high cargo value;
- `VERIFY-PENDING` — carrier verification incomplete.

Each code needs:
- code;
- plain-language label;
- factor contribution;
- route/time anchor when applicable.

## 8. Factor contribution component

Show the full transparent breakdown of the Exposure Index.

The component must support:
- factor name;
- earned points;
- max points;
- contribution bar or mark;
- optional reason code;
- plain-language explanation.

Never hide the scoring model behind a single circular gauge.

## 9. Public-context modules

Public aggregate trend context must remain visually separate from shipment-level synthetic data.

Required visual distinction:
- different surface or brass annotation;
- explicit label `PUBLIC AGGREGATE CONTEXT`;
- source line in the eventual case study;
- no language implying that public incident data proves risk for the selected shipment.

## 10. Human review action

The action area is a **review mark**, not an AI recommendation box.

Allowed actions for the prototype:
- escalate for manual security review;
- request enhanced carrier verification;
- review secure parking/dwell plan;
- increase monitoring priority;
- add reviewer note;
- mark reviewed.

The UI must preserve human agency.

## 11. Color semantics

Current system palette:

| Role | Hex |
|---|---|
| Canvas | `#D8DCCF` |
| Operational surface | `#EAE1D5` |
| Structural ink | `#2B2730` |
| Active / selected | `#635D9A` |
| Routine / verified | `#3E7B6C` |
| Elevated exposure | `#D46A4C` |
| Critical review | `#8E4662` |
| Public context | `#B7A85A` |

These colors are semantic, not decorative.

## 12. Spacing scale

Base unit: `4 px`.

Preferred scale:
- 4 — micro gap;
- 8 — inline/content gap;
- 12 — compact module gap;
- 16 — standard module padding;
- 24 — section separation;
- 32 — major composition separation;
- 48+ — only for major breathing room.

Density should remain operational, not sparse marketing UI.

## 13. Border / divider language

Preferred:
- 1 px structural rule;
- low-contrast dividers using structural ink at reduced opacity;
- stronger rule only for selected/critical state;
- avoid large drop shadows as hierarchy.

## 14. Iconography

Use simple line icons with logistics-specific meaning where useful:
- truck;
- container;
- rail/yard;
- terminal;
- shield/review;
- clock/dwell;
- map pin;
- verification mark.

Avoid generic cyber icons such as radar, crosshair, lock-wall or hacker motifs unless directly tied to a real action.

## 15. Data-viz rules

- no generic KPI-card hero;
- the Risk Corridor carries the main story;
- small contextual charts may support, not compete;
- line/bar charts must answer a specific question;
- expose baselines/periods where comparisons appear;
- no unexplained decorative sparklines;
- no confidence/probability visual unless a real statistical model exists.

## 16. Responsive behavior

### Desktop
Three functional zones may coexist.

### Tablet
Order:
1. focus shipment;
2. Risk Corridor;
3. reasons/factor breakdown;
4. review queue;
5. context/action.

### Mobile
Do not compress the desktop dashboard.

Use a sequential review flow:
1. priority shipment list;
2. selected shipment summary;
3. horizontally scrollable/stacked corridor modules;
4. reasons;
5. context;
6. human action.

## 17. Accessibility and readability

- all semantic colors need non-color cues;
- minimum body target: 14 px desktop;
- IDs/metadata may go smaller only if still clearly readable in presentation capture;
- interactive targets: ~40–44 px minimum where possible;
- preserve visible focus states;
- critical/review labels must remain readable in grayscale/print capture.

## 18. Typography status

**Not locked yet.**

Gate 3.25 must select and validate:
- operational reading face;
- technical/ID face;
- display role if needed;
- loaded weights;
- exact type scale;
- tabular numeral behavior.

Do not hard-code a random font stack before Gate 3.25.

## Gate result

**Gate 3 design-system architecture: defined.**

Before implementation, proceed to **Gate 3.25 — Typography Lock** and then run the uniqueness audit against the selected Intermodal Ledger full-screen composition.