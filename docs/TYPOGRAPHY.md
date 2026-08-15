# Gate 3.25 — Typography Lock

## Selected typography

Cargo Risk Window uses a two-family system:

- **Archivo** — operational reading, hierarchy, navigation, labels and explanatory copy.
- **IBM Plex Mono** — shipment IDs, route codes, reason codes, dates/times, score components and technical metadata.

No third display family is used.

The goal is a typography system that feels closer to a coded intermodal manifest / dispatch instrument than a generic SaaS dashboard.

## Why this pairing

### Archivo
Use for fast operational reading. It should carry nearly all human-language content:
- application and screen titles;
- section headers;
- manifest route descriptions;
- plain-language explanations;
- action labels;
- public-context summaries;
- buttons and navigation.

### IBM Plex Mono
Use only when fixed-width rhythm improves scanning or reinforces the freight/ledger identity:
- `SHPM-5687`;
- `RC-104`;
- `DWELL-2H+`;
- `18:00 → 06:00`;
- earned/max score pairs such as `21 / 25`;
- route/terminal shorthand;
- synthetic-data technical labels.

Do not set long explanatory paragraphs in mono.

---

# 1. Font roles

| Token | Family | Weight | Desktop size / line-height | Primary use |
|---|---|---:|---|---|
| `display.app` | Archivo | 700 | 30 / 34 px | Cargo Risk Window title / rare major heading |
| `display.score` | Archivo | 700 | 38 / 40 px | Exposure Index number |
| `heading.screen` | Archivo | 700 | 24 / 30 px | Focus shipment / major workspace title |
| `heading.section` | Archivo | 600 | 16 / 20 px | Risk Corridor, Exposure Breakdown, Public Context |
| `heading.module` | Archivo | 600 | 14 / 18 px | Module titles / manifest group labels |
| `body.primary` | Archivo | 400 | 14 / 20 px | Core explanatory copy |
| `body.compact` | Archivo | 400 | 13 / 18 px | Dense operational rows / supporting labels |
| `label.action` | Archivo | 600 | 13 / 16 px | Buttons, action labels, review states |
| `label.micro` | Archivo | 500 | 11 / 14 px | Secondary microcopy only |
| `mono.id` | IBM Plex Mono | 600 | 13 / 18 px | Shipment IDs / prominent technical IDs |
| `mono.data` | IBM Plex Mono | 500 | 12 / 16 px | Dates, times, codes, earned/max scores |
| `mono.micro` | IBM Plex Mono | 400 | 11 / 14 px | Technical metadata only |

## Minimum meaningful text

- Do not place meaningful product information below **11 px** on desktop.
- Default explanatory body remains **14 px**.
- Dense manifest content may use **13 px**.
- 11 px is reserved for low-priority labels, source/context markers or technical metadata.
- If a label matters to the review decision, raise it to 12–14 px rather than compressing it.

---

# 2. Hierarchy by product region

## Application shell

- Product name: `display.app`.
- Navigation: `body.compact` / weight 500.
- Synthetic-data status: `mono.micro`.

The shell must not visually overpower the selected shipment or Risk Corridor.

## Review manifest

Each shipment row should use:
- shipment ID → `mono.id`;
- origin → destination → `body.compact`;
- score → Archivo 700, 18–20 px with tabular numerals;
- band label → `label.micro`, semantically colored plus non-color cue;
- reason mark/code → `mono.micro` or icon + accessible label.

The manifest must remain readable at presentation scale without zoom.

## Focus shipment

- `SHPM-5687` → `heading.screen` may use Archivo 700 if treated as the dominant selected object; a nearby technical ID may additionally use `mono.id` where useful.
- route → `body.primary` or `body.compact` depending density;
- equipment / commodity / value / verification → `body.compact` + selective `mono.data` values.

## Exposure Index

- score number → `display.score`;
- `/ 100` → `mono.data`;
- band label → `label.action`;
- claim-boundary microcopy → minimum 11–12 px; never hide it as illegible legal text.

Required nearby language:

> Heuristic prioritization index — not a probability of theft.

## Intermodal Risk Corridor

- route segment name → `heading.module`;
- segment time / code → `mono.data`;
- dwell duration → `mono.data`;
- exposure-window label → `label.action`;
- reason codes → `mono.data`;
- explanatory annotation → `body.compact`.

The corridor should be scannable through typography even with all semantic color removed.

## Factor contribution breakdown

- factor name → `body.compact`;
- earned/max points → `mono.data` with tabular numerals;
- reason code → `mono.micro` or `mono.data` depending importance;
- plain-language explanation → `body.compact`.

## Public context

Use Archivo for explanation and IBM Plex Mono for dates / periods / numeric comparisons.

`PUBLIC AGGREGATE CONTEXT` should be visibly labelled at 11–12 px minimum and must not look like shipment-level evidence.

## Human review outcome

- action title → `heading.module`;
- action/button → `label.action`;
- reviewer note → `body.primary`;
- review timestamp / status code → `mono.data`.

---

# 3. Numeric behavior

All operational numbers that align in rows or tables should use tabular numerals:

```css
font-variant-numeric: tabular-nums;
```

Use for:
- Exposure Index;
- factor earned/max points;
- cargo values;
- time stamps;
- dwell durations;
- incident counts and public-context comparisons.

Do not use stylistic numeral effects that reduce fast comparison.

---

# 4. Tracking / casing

## Archivo

- normal body tracking: `0`;
- compact uppercase labels: `0.04em` to `0.07em` maximum;
- major headings: `-0.01em` to `-0.02em` when visually beneficial.

Avoid all-caps paragraphs.

## IBM Plex Mono

- default tracking: `0`;
- technical micro labels may use `0.02em`;
- do not artificially expand shipment IDs or timestamps.

---

# 5. Weight discipline

Archivo:
- 400 — normal reading;
- 500 — compact labels / navigation when needed;
- 600 — modules / actions;
- 700 — major titles / selected shipment / key score.

IBM Plex Mono:
- 400 — metadata;
- 500 — operational data;
- 600 — important IDs / reason codes.

Avoid using bold as a substitute for hierarchy. Size, position, spacing and semantic grouping should do most of the work.

---

# 6. Responsive typography

## Desktop ≥ 1200 px
Use the scale above.

## Tablet 768–1199 px
- `display.app`: 26–28 px;
- `heading.screen`: 22–24 px;
- body remains 14 px;
- manifest may remain 13 px;
- do not reduce technical data below 11–12 px.

## Mobile < 768 px
The layout becomes sequential rather than compressing the desktop workspace.

- major screen title: 22–24 px;
- selected shipment: 20–22 px;
- body: 14–15 px;
- technical data: 12–13 px;
- touch/action labels: 14 px where possible.

Never solve mobile density by shrinking the entire dashboard.

---

# 7. Presentation / capture rule

This Day Challenge must survive screenshot/video presentation.

Before freeze, test the rendered app at the intended capture size and verify:
- manifest IDs remain readable without zoom;
- corridor labels and times remain legible;
- Exposure Index claim-boundary text is visible;
- public-context qualification is not lost;
- factor scores can be compared at a glance.

If a text role cannot survive a 1440×900 capture, increase it or simplify the layout.

---

# 8. Anti-generic typography rules

Do not:
- replace Archivo with Inter/Geist/Manrope by convenience;
- use mono for every label just to look technical;
- create 8–9 px dashboard microcopy;
- use enormous marketing-style headings that consume workspace;
- use font-weight 700 everywhere;
- use a decorative serif with no freight/operational job;
- hide important limitations in tiny footer text.

---

# Gate result

**Gate 3.25 — Typography Lock: PASS.**

Frozen:
- operational family: Archivo;
- technical family: IBM Plex Mono;
- no third display family;
- minimum meaningful desktop text: 11 px;
- default reading body: 14 px;
- manifest dense body: 13 px;
- numeric alignment uses tabular numerals;
- exposure/claim qualification remains readable in the main interface.

Next TRACE gate: **Gate 4 — Differentiation / Motion Job Matrix**, followed by **Gate 4.25 — Uniqueness Audit** before product implementation.