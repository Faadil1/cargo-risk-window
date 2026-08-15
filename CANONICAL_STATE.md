# Cargo Risk Window — Canonical State

> Durable handoff entry point. For the machine-readable TRACE state, use `Faadil1/trace-design-workflow/state/cargo-risk-window/CURRENT.yaml`.

## Resume from here

- TRACE phase: **E**
- Current gate: **6.5 — Evaluation Capture**
- Status: **READY_FOR_EVALUATION_CAPTURE**
- Active branch: `build/intermodal-ledger`
- Source HEAD validated/deployed: `a048800d6a8317e259a02c6b0df719b629cc12b6`
- PR: **#1**, open, draft, not merged
- `main`: not merged with the active build
- GitHub Actions CI: **PASS** — run `31889048276`
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

Tell the agent: **“Read `CANONICAL_STATE.md` in `Faadil1/cargo-risk-window` on `build/intermodal-ledger`, then read `state/cargo-risk-window/CURRENT.yaml` and the Cargo Risk Window adapter in `Faadil1/trace-design-workflow`. Continue from `next_required_output`; do not reconstruct the project from chat.”**

## State protocol

Every meaningful milestone must update the TRACE `CURRENT.yaml` and append a timestamped history snapshot. Meaningful milestones include gate changes, contract freezes/reopens, source HEAD changes, QA/build reruns, blocker changes, deployments, PR/merge changes, evaluation capture, freeze and postmortem.
