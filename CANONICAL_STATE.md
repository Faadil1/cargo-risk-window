# Cargo Risk Window — Canonical State

> Durable project handoff entry point. The machine-readable **project** runtime state lives at `Faadil1/trace-design-workflow/state/projects/cargo-risk-window/CURRENT.yaml`. TRACE framework evolution is separate at `state/trace-workflow/CURRENT.yaml` and must not be used as this project's runtime Gate.

## Resume from here

- TRACE phase: **E**
- Current project gate: **7 — Freeze / Promotion Decision**
- Status: **FREEZE_PASS_AWAITING_PROMOTION**
- Active branch: `build/intermodal-ledger`
- Product commit validated by CI and promoted live: `2b4135a0a264f63cc604942d1fbd0dc22e47584b`
- Final freeze-audit branch HEAD before this canonical-state update: `60e084ad67136bbca1154d8ce807423a3c2102b9`; this update itself is documentation-only and advances the branch once more.
- Final PR-head CI checked before freeze verdict: **PASS** — run `31893342083` on `bcf5c489cfb62173bd0ab989f4c889822c79dd95`
- CI install is frozen to `npm ci`
- `package-lock.json`: committed, lockfileVersion 3
- Gate 6.5 Evaluation Capture: **PASS — LIVE VERIFIED**
- Gate 6.75 Demo / Evidence Film: **PASS — LIVE EVIDENCE SEQUENCE VERIFIED**
- Gate 7 Freeze Audit: **FREEZE_PASS**
- Freeze report: `docs/FREEZE_AUDIT_001.md`
- Gate 6.5 report: `docs/EVALUATION_CAPTURE_001.md`
- Gate 6.75 audit: `docs/DEMO_AUDIT_001.md`
- Live demo-capture workflow run: **PASS** — `31892866069`
- Live evidence artifact ID: `9249025023`
- Evidence video duration: approximately **60.12 s**
- PR: **#1**, open, draft, mergeable, not merged
- `main`: not merged with the active build
- Vercel production alias: `https://cargo-risk-window.vercel.app`
- Vercel production deployment ID: `dpl_7su3zUSqMLdCtisBQ4xfHA8peUZT`
- Vercel project ID: `prj_OO3aEEAAGX0WRMizsiitUWHswTzD`
- Freeze-audit live recheck: HTTP 200
- Live JS asset verified: `assets/index-BYTxu-5Z.js`
- Live CSS asset verified: `assets/index-784W_psI.css`

## Frozen product truth

Cargo Risk Window is a defensive freight-security prioritization prototype. Shipment records are synthetic. Public incident information is aggregate context only. The Exposure Index is a transparent deterministic heuristic and **not** a validated probability-of-theft model. Human security review remains the action authority.

The visual/product direction is frozen as **Intermodal Ledger** with the **Mineral Intermodal** palette, canvas `#D8DCCF`, Archivo + IBM Plex Mono, manifest structure, Intermodal Risk Corridor, transparent factor contributions and Human Review resolution.

The final Human Review structure is frozen: Carrier verification, Dwell plan, Secure parking / handoff and Monitoring priority remain reviewer-facing checks rather than automated decisions.

## Evaluation evidence

Gate 6.5 live proof path:

`priority shipment → exposure corridor → reason codes/factor breakdown → claim boundary → human review checklist → reviewer action`

Gate 6.75 live evidence artifact was captured against the production alias and includes eight proof frames plus `cargo-risk-window-live-evidence.webm`. Automated assertions confirm SHPM-5687 rank 01, 82/100 factor reconciliation, the non-probability disclosure, all four Human Review checklist items, and the user-triggered `Escalated for review / Monitoring priority: Enhanced` state.

## Gate 7 result

Comparison from the deployed product commit `2b4135a…` to the audited PR head showed **no changes under `src/`**. Later changes are limited to evaluator/demo evidence, canonical documentation, QA/reproducibility workflows and `package-lock.json`.

The dependency graph is frozen and CI now uses `npm ci`. The final audited CI passed the build and rendered interaction suite. The Vercel production alias continues to serve the exact validated JS/CSS assets. PR #1 remains open, draft, mergeable and unmerged.

No frozen product, design, data or claim contract was reopened.

**Gate 7 verdict: FREEZE_PASS.**

## Next required output

Make the explicit promotion decision:

- **PROMOTE** → mark PR #1 ready and merge it to `main`, verify the post-merge source identity, then proceed to Gate 8 Postmortem / Learning Promotion;
- **HOLD** → preserve the frozen branch and production deployment unchanged.

No additional product rework is required before promotion.

## Resume instruction for a fresh conversation

Tell the agent: **“Read `state/projects/cargo-risk-window/CURRENT.yaml` in `Faadil1/trace-design-workflow`, then read `CANONICAL_STATE.md` and `docs/FREEZE_AUDIT_001.md` in `Faadil1/cargo-risk-window` on `build/intermodal-ledger`. Cargo is at Gate 7 with FREEZE_PASS and is awaiting an explicit PROMOTE/HOLD decision. Do not reconstruct the project from chat and do not use `state/trace-workflow/CURRENT.yaml` as the project Gate.”**

## State separation

- TRACE framework state: `state/trace-workflow/CURRENT.yaml`
- Cargo project state: `state/projects/cargo-risk-window/CURRENT.yaml`
- Cargo Project Adapter: durable product/design contracts

Every meaningful Cargo milestone updates only the Cargo project `CURRENT.yaml` and its project history. TRACE framework state changes only when the milestone changes TRACE's own validation/maturity/learning-promotion status.
