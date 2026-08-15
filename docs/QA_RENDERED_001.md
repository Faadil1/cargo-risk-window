# Rendered QA #001 — Intermodal Ledger Build

Date: 2026-08-15
Branch: `build/intermodal-ledger`
Validated commit: `04de0591998cde9338d7875e33aa6b03014d5623`
GitHub Actions run: `31887977828`

## Validation method

The application is built in GitHub Actions and rendered with Chromium/Playwright after a successful `npm run build`.

Captured viewports:
- desktop: `1440×900`;
- mobile: `390×844`, full-page.

The CI also verifies that the Vite/TypeScript production build succeeds before screenshots are captured.

## Result

**BUILD: PASS**  
**DESKTOP RENDER: PASS WITH MINOR POLISH ITEMS**  
**MOBILE RENDER: PASS WITH INTENTIONAL HORIZONTAL CORRIDOR SCROLL**

## Desktop observations

### Passed
- `SHPM-5687` is now the highest-priority shipment in the sorted manifest at `82 / 100`.
- The selected shipment, Exposure Index and Intermodal Risk Corridor are visible in the first 1440×900 viewport.
- The mineral sage canvas `#D8DCCF` is clearly present and does not collapse into a generic white/navy security dashboard.
- The manifest reads as a dense operational index rather than floating KPI cards.
- The Risk Corridor remains the dominant analytical mechanism.
- The critical dwell segment is visible through both plum state treatment and explicit labels/reason codes.
- The public-vs-synthetic claim boundary remains visible in the interface.
- Human review remains visibly separate from the heuristic score.

### Minor polish items
- The right-side human-review column intentionally has generous vertical space at 1440×900; evaluate later whether a small review checklist would improve information density without turning the panel into another dashboard column.
- Public aggregate context sits below the first viewport on desktop. This is acceptable for the current contract because priority + reason + concentration + human action are visible first, but should be rechecked during final evaluation capture.
- Continue checking that small mono reason codes survive compressed video/social capture.

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
- The mobile implementation does **not** compress all five route modules into 390 px because that would make the route/time/reason labels unreadable.

## QA correction made during this pass

Initial rendered QA revealed that two generated synthetic shipments scored above the intended hero scenario, placing `SHPM-5687` third in a manifest explicitly sorted high-to-low.

The deterministic generator was adjusted so the hero scenario remains the top review case while keeping varied synthetic factor combinations. This was a narrative/data consistency defect, not a styling defect.

## Remaining Gate 6 work

Before final freeze:
- keyboard/focus interaction check;
- reduced-motion rendered check;
- tablet viewport check;
- interaction-state capture after selecting a different shipment;
- review-action state capture;
- final uniqueness audit on rendered viewport;
- optional review-panel density polish;
- final presentation/evaluation capture.

## Current verdict

The implementation is strong enough to open a **draft PR** for review, but not yet to merge automatically into `main`.
