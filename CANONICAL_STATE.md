# Cargo Risk Window — Canonical State

> Durable project handoff entry point. The machine-readable **project** runtime state lives at `Faadil1/trace-design-workflow/state/projects/cargo-risk-window/CURRENT.yaml`. TRACE framework evolution is separate at `state/trace-workflow/CURRENT.yaml` and must not be used as this project's runtime Gate.

## Final project state

- TRACE phase: **E**
- Current project gate: **8 — Post-mortem / Learning Promotion**
- Status: **GATE_8_COMPLETE — PROMOTED TO MAIN**
- Canonical source branch: `main`
- Promotion merge commit: `901fd1768c55225f47e3841fc9f9521ff2d7a7d9`
- Product commit validated and deployed: `2b4135a0a264f63cc604942d1fbd0dc22e47584b`
- PR #1: **MERGED**
- Post-merge CI: **PASS** — run `31902744055` on merge commit `901fd1768c55225f47e3841fc9f9521ff2d7a7d9`
- Gate 6.5 Evaluation Capture: **PASS — LIVE VERIFIED**
- Gate 6.75 Demo / Evidence Film: **PASS — LIVE EVIDENCE SEQUENCE VERIFIED**
- Gate 7 Freeze Audit: **FREEZE_PASS**
- Gate 8 Post-mortem: `docs/POSTMORTEM_001.md`
- Gate 7 report: `docs/FREEZE_AUDIT_001.md`
- Gate 6.75 audit: `docs/DEMO_AUDIT_001.md`
- Gate 6.5 report: `docs/EVALUATION_CAPTURE_001.md`
- Live demo-capture workflow run: **PASS** — `31892866069`
- Live evidence artifact ID: `9249025023`
- Evidence video duration: approximately **60.12 s**
- Dependency resolution: frozen with `package-lock.json`
- CI install mode: `npm ci`
- Vercel production alias: `https://cargo-risk-window.vercel.app`
- Vercel production deployment ID: `dpl_7su3zUSqMLdCtisBQ4xfHA8peUZT`
- Vercel project ID: `prj_OO3aEEAAGX0WRMizsiitUWHswTzD`
- Post-promotion live recheck: HTTP 200
- Live JS asset: `assets/index-BYTxu-5Z.js`
- Live CSS asset: `assets/index-784W_psI.css`

The observed `main` HEAD before this final canonical-state update includes the Gate 8 post-mortem (`7e79de06b77321a7c4ed371ab21607a4ccb18ca0`). This canonical-state update itself advances `main` with documentation only.

## Frozen product truth

Cargo Risk Window is a defensive freight-security prioritization prototype. Shipment records are synthetic. Public incident information is aggregate context only. The Exposure Index is a transparent deterministic heuristic and **not** a validated probability-of-theft model. Human security review remains the action authority.

The frozen visual/product direction is **Intermodal Ledger** with the **Mineral Intermodal** palette, canvas `#D8DCCF`, Archivo + IBM Plex Mono, manifest structure, Intermodal Risk Corridor, transparent factor contributions and Human Review resolution.

The final Human Review structure remains project-specific: Carrier verification, Dwell plan, Secure parking / handoff and Monitoring priority.

## Evaluation and promotion proof

The evaluator proof path is:

`priority shipment → exposure corridor → reason codes/factor breakdown → claim boundary → human review checklist → reviewer action`

The live evidence film was captured against the production alias and verified the hero shipment rank, 82/100 factor reconciliation, non-probability disclosure, Human Review checklist and user-triggered escalation state.

At Gate 7, comparison from the validated/deployed product commit showed no later `src/` changes. Remaining branch changes were evidence, documentation, QA/reproducibility workflows and dependency locking. The dependency graph was frozen and the final branch CI passed. PR #1 was then promoted to `main` with an exact-head merge.

Post-promotion CI on `main` passed the full build and rendered interaction suite. Production continued serving the previously validated product artifact.

## Gate 8 learning result

The post-mortem promoted only generalizable lessons:

### Promoted to TRACE Kernel

- evaluator-facing Gates must identify the artifact actually being evaluated;
- Gate 6.5 now requires critical promises to be visible/experienceable and the evaluated artifact identity to be verified;
- Gate 6.75 now requires proof-bearing moments to use the validated product and demo claims to be audited against product truth;
- Gate 7 now requires reproducibility where applicable, source promotion, post-promotion verification and live artifact identity preservation when relevant.

### Promoted to TRACE Tool Registry

- D3 should be avoided for simple categorical semantic sequences when DOM/CSS/component structure is clearer and no scale/graph transformation is required.

### Kept project-local

- freight-specific Human Review checklist;
- Exposure Index formula and thresholds;
- reason codes and Intermodal Ledger terminology;
- exact Playwright/GitHub Actions evidence-capture implementation.

## Project verdict

**Cargo Risk Window completed TRACE Gates 0 → 8 successfully.**

The project is shipped, promoted and frozen. No further product work is required for this validation cycle.

## Next experiment

TRACE should next be tested on a materially different product type, ideally a SaaS conversion product or consumer-facing workflow, before any decision to appify the framework.

## Resume instruction for a fresh conversation

Tell the agent: **“Read `state/projects/cargo-risk-window/CURRENT.yaml` in `Faadil1/trace-design-workflow`, then `CANONICAL_STATE.md` and `docs/POSTMORTEM_001.md` in `Faadil1/cargo-risk-window` on `main`. Cargo Risk Window completed TRACE Gate 8 and is frozen/promoted. Do not reopen product Gates unless new evidence or a new product requirement explicitly requires it.”**

## State separation

- TRACE framework state: `state/trace-workflow/CURRENT.yaml`
- Cargo project state: `state/projects/cargo-risk-window/CURRENT.yaml`
- Cargo Project Adapter: durable product/design contracts

Cargo is now a completed TRACE validation case. Future TRACE framework changes must not silently alter this frozen project truth.