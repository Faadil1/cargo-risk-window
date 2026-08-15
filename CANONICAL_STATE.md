# Cargo Risk Window — Canonical State

> Durable project handoff entry point. The machine-readable **project** runtime state lives at `Faadil1/trace-design-workflow/state/projects/cargo-risk-window/CURRENT.yaml`. TRACE framework evolution is separate at `state/trace-workflow/CURRENT.yaml` and must not be used as this project's runtime Gate.

## Resume from here

- TRACE phase: **E**
- Current project gate: **6.5 — Evaluation Capture**
- Status: **READY_FOR_EVALUATION_CAPTURE**
- Active branch: `build/intermodal-ledger`
- Product build validated/deployed: `a048800d6a8317e259a02c6b0df719b629cc12b6`
- Later branch changes after that build are handoff/documentation-only unless the project state says otherwise.
- PR: **#1**, open, draft, not merged
- `main`: not merged with the active build
- Rendered QA: **PASS** for desktop, tablet, mobile, keyboard focus, alternate shipment selection, human escalation state, reduced motion and rendered uniqueness recheck
- Vercel deployment: **READY**
- Vercel environment: **production**
- Live alias: `https://cargo-risk-window.vercel.app`
- Vercel deployment ID: `dpl_fatCVFmMaKndbiRhUvQt96SZUoYn`
- Vercel project ID: `prj_OO3aEEAAGX0WRMizsiitUWHswTzD`

## Frozen product truth

Cargo Risk Window is a defensive freight-security prioritization prototype. Shipment records are synthetic. Public incident information is aggregate context only. The Exposure Index is a transparent deterministic heuristic and **not** a validated probability-of-theft model. Human security review remains the action authority.

The visual/product direction is frozen as **Intermodal Ledger** with the **Mineral Intermodal** palette, canvas `#D8DCCF`, Archivo + IBM Plex Mono, manifest structure, Intermodal Risk Corridor, transparent factor contributions and Human Review resolution.

## Next required output

Run **Gate 6.5 live evaluation capture** against the deployed product. Confirm whether the right-side Human Review density issue is material in the live context. Record evaluator-visible evidence and any material issues. Only after that decide whether PR #1 leaves draft and proceeds toward Gate 6.75 / merge.

## Resume instruction for a fresh conversation

Tell the agent: **“Read `state/projects/cargo-risk-window/CURRENT.yaml` in `Faadil1/trace-design-workflow`, then read `CANONICAL_STATE.md` in `Faadil1/cargo-risk-window` on `build/intermodal-ledger` and the Cargo Risk Window adapter. Continue from the project's `next_required_output`; do not reconstruct the project from chat and do not use `state/trace-workflow/CURRENT.yaml` as the project Gate.”**

## State separation

- TRACE framework state: `state/trace-workflow/CURRENT.yaml`
- Cargo project state: `state/projects/cargo-risk-window/CURRENT.yaml`
- Cargo Project Adapter: durable product/design contracts

Every meaningful Cargo milestone updates only the Cargo project `CURRENT.yaml` and its project history. TRACE framework state changes only when the milestone changes TRACE's own validation/maturity/learning-promotion status.
