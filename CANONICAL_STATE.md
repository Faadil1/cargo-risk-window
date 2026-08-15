# Cargo Risk Window — Canonical State

> Durable project handoff entry point. The machine-readable **project** runtime state lives at `Faadil1/trace-design-workflow/state/projects/cargo-risk-window/CURRENT.yaml`. TRACE framework evolution is separate at `state/trace-workflow/CURRENT.yaml` and must not be used as this project's runtime Gate.

## Resume from here

- TRACE phase: **E**
- Current project gate: **6.5 — Evaluation Capture**
- Status: **POLISH_VALIDATED_AWAITING_LIVE_REDEPLOY**
- Active branch: `build/intermodal-ledger`
- Current evaluator-polish product commit: `2b4135a0a264f63cc604942d1fbd0dc22e47584b`
- GitHub Actions rendered QA for that product commit: **PASS** — run `31892107982`
- Gate 6.5 report: `docs/EVALUATION_CAPTURE_001.md`
- PR: **#1**, open, draft, not merged
- `main`: not merged with the active build
- Current Vercel production alias: `https://cargo-risk-window.vercel.app`
- Current Vercel deployment is still the previous product build: `a048800d6a8317e259a02c6b0df719b629cc12b6`
- Vercel deployment ID currently live: `dpl_fatCVFmMaKndbiRhUvQt96SZUoYn`
- Vercel project ID: `prj_OO3aEEAAGX0WRMizsiitUWHswTzD`

## Frozen product truth

Cargo Risk Window is a defensive freight-security prioritization prototype. Shipment records are synthetic. Public incident information is aggregate context only. The Exposure Index is a transparent deterministic heuristic and **not** a validated probability-of-theft model. Human security review remains the action authority.

The visual/product direction is frozen as **Intermodal Ledger** with the **Mineral Intermodal** palette, canvas `#D8DCCF`, Archivo + IBM Plex Mono, manifest structure, Intermodal Risk Corridor, transparent factor contributions and Human Review resolution.

## Gate 6.5 finding

The live baseline passed the main evaluator story but exposed one material presentation gap: the Human Review column stated that the decision remained human while leaving too much empty space to demonstrate the review work.

The validated polish adds a compact operational checklist for:

- Carrier verification
- Dwell plan
- Secure parking / handoff
- Monitoring priority

This is evidence-bearing review structure, not decorative dashboard filler. The corrected rendered build passes desktop, tablet, mobile, keyboard focus, alternate shipment selection, escalation state and reduced-motion QA.

## Next required output

Promote the validated Gate 6.5 product build (`2b4135a0a264f63cc604942d1fbd0dc22e47584b`, or its exact CI Vite artifact) to the existing Cargo Risk Window Vercel production project. Recheck `https://cargo-risk-window.vercel.app`. If the live alias matches the validated composition, mark Gate 6.5 **PASS** and move to Gate 6.75 — Demo Narrative / Evidence Film.

## Resume instruction for a fresh conversation

Tell the agent: **“Read `state/projects/cargo-risk-window/CURRENT.yaml` in `Faadil1/trace-design-workflow`, then read `CANONICAL_STATE.md` and `docs/EVALUATION_CAPTURE_001.md` in `Faadil1/cargo-risk-window` on `build/intermodal-ledger`. Continue from the project's `next_required_output`; do not reconstruct the project from chat and do not use `state/trace-workflow/CURRENT.yaml` as the project Gate.”**

## State separation

- TRACE framework state: `state/trace-workflow/CURRENT.yaml`
- Cargo project state: `state/projects/cargo-risk-window/CURRENT.yaml`
- Cargo Project Adapter: durable product/design contracts

Every meaningful Cargo milestone updates only the Cargo project `CURRENT.yaml` and its project history. TRACE framework state changes only when the milestone changes TRACE's own validation/maturity/learning-promotion status.
