# Cargo Risk Window — Canonical State

> Durable project handoff entry point. The machine-readable **project** runtime state lives at `Faadil1/trace-design-workflow/state/projects/cargo-risk-window/CURRENT.yaml`. TRACE framework evolution is separate at `state/trace-workflow/CURRENT.yaml` and must not be used as this project's runtime Gate.

## Resume from here

- TRACE phase: **E**
- Current project gate: **7 — Freeze / Promotion Decision**
- Status: **READY_FOR_FREEZE_AUDIT**
- Active branch: `build/intermodal-ledger`
- Product commit validated by CI and promoted live: `2b4135a0a264f63cc604942d1fbd0dc22e47584b`
- GitHub Actions rendered QA: **PASS** — run `31892107982`
- Gate 6.5 Evaluation Capture: **PASS — LIVE VERIFIED**
- Gate 6.75 Demo / Evidence Film: **PASS — LIVE EVIDENCE SEQUENCE VERIFIED**
- Gate 6.5 report: `docs/EVALUATION_CAPTURE_001.md`
- Gate 6.75 narrative: `docs/DEMO_NARRATIVE_001.md`
- Gate 6.75 audit: `docs/DEMO_AUDIT_001.md`
- Live demo-capture workflow run: **PASS** — `31892866069`
- Live evidence artifact ID: `9249025023`
- Evidence video duration: approximately **60.12 s**
- PR: **#1**, open, draft, mergeable, not merged
- `main`: not merged with the active build
- Vercel production alias: `https://cargo-risk-window.vercel.app`
- Vercel production deployment ID: `dpl_7su3zUSqMLdCtisBQ4xfHA8peUZT`
- Vercel project ID: `prj_OO3aEEAAGX0WRMizsiitUWHswTzD`
- Live JS asset verified: `assets/index-BYTxu-5Z.js`
- Live CSS asset verified: `assets/index-784W_psI.css`
- Source branch head observed immediately before this canonical-state update: `2d0f7f864851614ee659400940aed2e4b6b0a990`; this state-file update itself advances the branch with documentation only.

## Frozen product truth

Cargo Risk Window is a defensive freight-security prioritization prototype. Shipment records are synthetic. Public incident information is aggregate context only. The Exposure Index is a transparent deterministic heuristic and **not** a validated probability-of-theft model. Human security review remains the action authority.

The visual/product direction is frozen as **Intermodal Ledger** with the **Mineral Intermodal** palette, canvas `#D8DCCF`, Archivo + IBM Plex Mono, manifest structure, Intermodal Risk Corridor, transparent factor contributions and Human Review resolution.

The final Human Review structure is also frozen: Carrier verification, Dwell plan, Secure parking / handoff and Monitoring priority remain reviewer-facing checks rather than automated decisions.

## Evaluation evidence

Gate 6.5 live proof path:

`priority shipment → exposure corridor → reason codes/factor breakdown → claim boundary → human review checklist → reviewer action`

Gate 6.75 live evidence artifact was captured against the production alias and includes eight proof frames plus `cargo-risk-window-live-evidence.webm`. Automated assertions confirm SHPM-5687 rank 01, 82/100 factor reconciliation, the non-probability disclosure, all four Human Review checklist items, and the user-triggered `Escalated for review / Monitoring priority: Enhanced` state.

## Gate 7 required audit

Before promotion to `main`:

1. verify the active branch/source HEAD and classify changes after product commit `2b4135a…` as product-changing or evidence/documentation-only;
2. confirm CI/evidence workflows relevant to the frozen source are green;
3. confirm production still serves the validated product build;
4. confirm PR #1 remains mergeable and review the final changed-file set;
5. confirm no frozen claim, data or design contract is reopened;
6. decide whether to promote PR #1 to `main`.

## Next required output

Complete the Gate 7 freeze audit and produce an explicit **FREEZE_PASS / REWORK_REQUIRED** verdict. Do not merge PR #1 until that verdict is recorded.

## Resume instruction for a fresh conversation

Tell the agent: **“Read `state/projects/cargo-risk-window/CURRENT.yaml` in `Faadil1/trace-design-workflow`, then read `CANONICAL_STATE.md`, `docs/EVALUATION_CAPTURE_001.md` and `docs/DEMO_AUDIT_001.md` in `Faadil1/cargo-risk-window` on `build/intermodal-ledger`. Continue at Gate 7 Freeze audit. Do not reconstruct the project from chat and do not use `state/trace-workflow/CURRENT.yaml` as the project Gate.”**

## State separation

- TRACE framework state: `state/trace-workflow/CURRENT.yaml`
- Cargo project state: `state/projects/cargo-risk-window/CURRENT.yaml`
- Cargo Project Adapter: durable product/design contracts

Every meaningful Cargo milestone updates only the Cargo project `CURRENT.yaml` and its project history. TRACE framework state changes only when the milestone changes TRACE's own validation/maturity/learning-promotion status.
