# Rendered QA #001 — Intermodal Ledger Build

Date: 2026-08-15
Branch: `build/intermodal-ledger`

Key validation runs:
- initial rendered consistency pass: `31887977828`;
- expanded interaction/responsive pass: `31888195853` at commit `0d1d04bfb63c889a53632e7653428cb02bb00a03`.

## Validation method

The application is built in GitHub Actions and rendered with Chromium/Playwright after a successful `npm run build`.

The expanded QA now asserts and captures:
- desktop `1440×900`;
- keyboard focus state;
- alternate shipment selection;
- escalated human-review state;
- tablet `900×1100`;
- mobile `390×844`, full-page;
- desktop with `prefers-reduced-motion: reduce`.

CI fails if the core assertions do not hold.

## Result

**PRODUCTION BUILD: PASS**  
**DESKTOP RENDER: PASS WITH MINOR POLISH ITEMS**  
**KEYBOARD / FOCUS: PASS**  
**ALTERNATE SHIPMENT STATE: PASS**  
**HUMAN REVIEW ACTION STATE: PASS**  
**TABLET SEQUENTIAL LAYOUT: PASS**  
**MOBILE RENDER: PASS WITH INTENTIONAL HORIZONTAL CORRIDOR SCROLL**  
**REDUCED-MOTION COMPLETE STATE: PASS**  
**RENDERED UNIQUENESS RECHECK: PASS**

## Automated product assertions

The expanded QA verifies:
- the first ranked shipment is `SHPM-5687`;
- the default focus shipment is `SHPM-5687`;
- factor contributions visibly reconcile to `82 / 100`;
- the non-probability claim boundary is present;
- manifest rows accept keyboard focus;
- selecting another shipment propagates into the focus workspace;
- clicking `Escalate review` produces the visible `Escalated for review` state;
- tablet layout becomes sequential instead of compressing the desktop grid;
- mobile keeps the hero shipment ranked first;
- reduced-motion rendering exposes all five corridor segments.

## Desktop observations

### Passed
- `SHPM-5687` is the highest-priority shipment in the sorted manifest at `82 / 100`.
- Selected shipment, Exposure Index and Intermodal Risk Corridor are visible in the first 1440×900 viewport.
- Mineral sage canvas `#D8DCCF` remains visibly dominant.
- Manifest reads as a dense operational index rather than floating KPI cards.
- Risk Corridor remains the primary analytical mechanism.
- Critical dwell segment uses structural + color + textual cues.
- Public-vs-synthetic claim boundary remains visible.
- Human review stays separate from the heuristic score.
- An alternate synthetic shipment produces a coherent corridor, factors, reason codes and human-action state rather than relying on hard-coded hero-only rendering.

### Minor polish items
- The right-side human-review column has generous vertical space at 1440×900. A compact review checklist may be tested later only if it improves the human-review job.
- Public aggregate context sits below the first viewport on desktop. This remains acceptable because priority + reason + concentration + human action appear first, but it should be considered during final evaluation capture.
- Small mono reason codes should be rechecked for compressed video/social capture.

## Tablet observations

- Layout correctly becomes sequential.
- Full corridor remains readable without requiring desktop-column compression.
- Factors, reasons, public context and human review retain clear ordering.

## Mobile observations

### Passed
- Flow becomes sequential rather than shrinking the desktop grid.
- Priority manifest appears first.
- `SHPM-5687` is first and selected.
- Selected shipment + score + explicit non-probability language remain readable.
- Factor contributions, reason codes, public aggregate context and human actions remain available in order.
- No core product claim is lost in the mobile flow.

### Intentional behavior
- Intermodal Risk Corridor modules are horizontally scrollable on narrow screens.
- The mobile implementation does **not** compress all five route modules into 390 px because that would make route/time/reason labels unreadable.

## Reduced motion

With the OS/browser reduced-motion preference enabled:
- all five corridor segments are present immediately;
- no information is gated behind animation;
- selection/review state remains understandable.

## QA corrections made during this pass

### 1. Hero ranking consistency
Initial rendered QA revealed generated synthetic shipments ranking above the intended hero scenario. The deterministic generator was adjusted so `SHPM-5687` is genuinely rank one while keeping varied synthetic factor combinations.

### 2. Data-viz tool economy
Implementation evidence showed that D3 added no useful analytical capability for the categorical intermodal corridor. Gate 4.5 tooling was reopened and simplified to semantic React modules + CSS, with lightweight SVG optional. The analytical contract did not change.

## Uniqueness recheck

Rendered audit: [`UNIQUENESS_AUDIT_RENDERED.md`](UNIQUENESS_AUDIT_RENDERED.md)

Result: **PASS**. All ten product-specific invariants remain visible in the actual build.

## Remaining Gate 6 / 6.5 work

Before final merge/freeze:
- owner review of the actual rendered desktop/mobile captures;
- decide whether right review-column density needs one targeted polish pass;
- final presentation/evaluation capture;
- optional live-preview deployment;
- package/dependency lock hygiene before final promotion if required.

## Current verdict

The implementation is **technically and visually strong enough for owner review in Draft PR #1**.

Do not merge automatically until the owner has reviewed the rendered screenshots/live preview and Gate 6.5 Evaluation Capture is resolved.
