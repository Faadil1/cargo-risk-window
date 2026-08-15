# Gate 7 — Freeze Audit 001

## Status

**FREEZE_PASS — READY FOR PROMOTION DECISION**

Audit date: 2026-08-15

## Frozen product identity

Validated and deployed product commit:

`2b4135a0a264f63cc604942d1fbd0dc22e47584b`

The application behavior and visual product frozen at that commit include:

- 24 deterministic synthetic shipments;
- SHPM-5687 ranked #1 at 82/100;
- transparent additive Exposure Index;
- Intermodal Risk Corridor;
- visible reason codes and factor breakdown;
- explicit synthetic/public-context boundary;
- explicit `not a probability of theft` claim boundary;
- Human Review checklist and user-triggered escalation;
- Intermodal Ledger / Mineral Intermodal visual system;
- Archivo + IBM Plex Mono;
- Motion + Anime.js scoped signatures;
- responsive and reduced-motion states.

## Active branch identity

Freeze-audit source HEAD before writing this report:

`bcf5c489cfb62173bd0ab989f4c889822c79dd95`

The branch is ahead of the deployed product commit because Gate 6.5/6.75 evidence, canonical handoff, demo-capture automation and reproducibility files were added after the product itself was validated.

## Post-product diff classification

Comparison `2b4135a… → bcf5c489…` shows no changes under `src/`.

Files changed after the frozen product commit are limited to:

- `.github/workflows/ci.yml` — reproducible install changed to `npm ci`;
- `.github/workflows/demo-capture.yml` — live evidence capture automation;
- `CANONICAL_STATE.md` — durable handoff;
- `demo/live-capture.mjs` — production evidence capture/assertions;
- `docs/DEMO_AUDIT_001.md`;
- `docs/DEMO_NARRATIVE_001.md`;
- `docs/EVALUATION_CAPTURE_001.md`;
- `package-lock.json` — dependency graph freeze.

Classification: **evidence / documentation / QA automation / reproducibility only**. No frozen product behavior, data semantics, claims or visual contract changed after the deployed product commit.

## Dependency reproducibility

`package-lock.json` is now committed with lockfileVersion 3.

The CI install step now uses:

`npm ci`

Final PR-head CI run checked for this audit:

- run: `31893342083`
- head: `bcf5c489cfb62173bd0ab989f4c889822c79dd95`
- conclusion: **SUCCESS**

That run passed install, TypeScript/Vite build, preview startup, Playwright rendered interaction QA and QA artifact upload.

## Evaluation evidence

### Gate 6.5

**PASS — LIVE VERIFIED**

Report: `docs/EVALUATION_CAPTURE_001.md`

The evaluator-facing Human Review density gap was corrected with the freight-native review checklist and promoted to production.

### Gate 6.75

**PASS — LIVE EVIDENCE SEQUENCE VERIFIED**

Report: `docs/DEMO_AUDIT_001.md`

Live capture run: `31892866069`

Evidence artifact:

- ID: `9249025023`
- digest: `sha256:82dddb83bbe588d902741ea94bed3bce813ec1b3b79a5467f52ffede66ac50ff`
- WebM duration: approximately 60.12 seconds

The capture was executed directly against the production alias, not a local mock.

## Production identity

Production alias:

`https://cargo-risk-window.vercel.app`

Production deployment:

`dpl_7su3zUSqMLdCtisBQ4xfHA8peUZT`

Freeze-audit live recheck returned HTTP 200 and continued to serve:

- JS: `assets/index-BYTxu-5Z.js`
- CSS: `assets/index-784W_psI.css`

These are the validated Gate 6.5 product assets.

## Pull request state

PR #1:

- state: OPEN
- draft: YES
- merged: NO
- mergeable: YES
- base: `main`
- head at audit: `bcf5c489cfb62173bd0ab989f4c889822c79dd95`

The PR remains intentionally unmerged pending the explicit promotion decision.

## Frozen-contract audit

No frozen contract is reopened.

Still frozen:

- defensive prioritization job;
- synthetic shipment data only;
- public aggregate context only;
- non-predictive Exposure Index;
- human review as final authority;
- Intermodal Ledger direction;
- Mineral Intermodal palette and `#D8DCCF` canvas;
- Archivo + IBM Plex Mono;
- Risk Corridor as primary signature;
- reason-code/factor explainability;
- Human Review checklist;
- no unsupported demo claims.

## Gate 7 verdict

**FREEZE_PASS.**

Cargo Risk Window is reproducibly buildable, evaluator-verified, live-verified, evidence-captured and contract-consistent.

No material rework is required before promotion.

## Next required output

Make the explicit promotion decision for PR #1:

- **PROMOTE** → mark ready/merge to `main`, verify the post-merge source identity, then proceed to Gate 8 Postmortem / Learning Promotion;
- **HOLD** → leave the frozen branch and live production unchanged until promotion is desired.
