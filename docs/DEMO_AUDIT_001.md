# Gate 6.75 — Demo / Evidence Film Audit 001

## Status

**PASS — LIVE EVIDENCE SEQUENCE VERIFIED**

Audit date: 2026-08-15

## Evidence identity

The evidence sequence was captured directly against:

`https://cargo-risk-window.vercel.app`

GitHub Actions live-capture run:

`31892866069`

Result: **PASS**

Workflow source head:

`7023fa51e4c4f379825dd60f98f3771454b336c2`

The workflow does not render a local copy of the application. It opens the Vercel production alias and asserts the live product state before recording.

Artifact:

- name: `gate-6-75-live-evidence`
- artifact ID: `9249025023`
- digest: `sha256:82dddb83bbe588d902741ea94bed3bce813ec1b3b79a5467f52ffede66ac50ff`
- video: `cargo-risk-window-live-evidence.webm`
- measured video duration: approximately **60.12 seconds**

## Captured proof moments

The artifact contains:

1. `01-manifest-priority.png` — ranked Manifest, SHPM-5687 first, 82/100, Synthetic Data visible;
2. `02-hero-82-non-probability.png` — hero focus and explicit non-probability claim boundary;
3. `03-risk-corridor.png` — complete Intermodal Risk Corridor;
4. `04-exposure-breakdown-reasons.png` — transparent factor contributions + top reason codes;
5. `05-public-context-boundary.png` — Public Aggregate Context and shipment-evidence limitation;
6. `06-human-review-checklist.png` — operational human-review checklist;
7. `07-human-escalation.png` — live `Escalated for review` state with `Monitoring priority: Enhanced`;
8. `08-closing-product-view.png` — return to the full product composition.

## Automated assertions

Before capture, the live workflow verifies:

- SHPM-5687 is rank 01;
- SHPM-5687 is the focus shipment;
- factor contributions reconcile to `82/100`;
- the visible score disclosure includes `not a probability`;
- Human Review contains Carrier verification;
- Human Review contains Dwell plan;
- Human Review contains Secure parking / handoff;
- Human Review contains Monitoring priority.

After the live escalation action, it verifies:

- the heading becomes `Escalated for review`;
- Monitoring priority becomes `Enhanced`.

## Claim audit

### PASS — prioritization claim

The sequence shows a ranked review queue and exposure factors. It does not label the Exposure Index as predictive accuracy or theft probability.

### PASS — explainability claim

The `82/100` score is shown with additive factor contributions and reason codes rather than as a black-box score.

### PASS — data-boundary claim

`Synthetic Data` is visible in the product. Public Aggregate Context is separately labeled and explicitly states that it is context only and does not prove or predict shipment-level theft.

### PASS — human-authority claim

The Human Review panel is visible before and after the explicit reviewer action. Escalation is user-triggered. The capture does not mark unrelated safeguards as completed after escalation.

### PASS — capability boundary

The sequence contains no real-time threat feed, private carrier feed, automated security decision, prediction confidence, guaranteed prevention claim, threat globe, fake surveillance footage or simulated enforcement action.

## Evaluator comprehension audit

A viewer can reconstruct the primary job from the evidence sequence:

`rank shipment → locate concentrated exposure → understand reasons → distinguish context from evidence → perform human review → escalate when warranted`

The strongest product-specific mechanism remains the Intermodal Risk Corridor. The demo does not depend on generic KPI-card spectacle or cinematic overlays to communicate the job.

## Materiality decision

No material product or proof gap remains for Gate 6.75.

The current WebM is an evidence-first capture rather than a polished social/portfolio edit. Optional narration, title cards or editorial cuts may be produced later, but they are presentation-layer enhancements and must preserve the same live proof and claim boundaries. They are not required to reopen the product or block Freeze.

## Gate 6.75 verdict

**PASS.**

## Next required output

Proceed to **Gate 7 — Freeze / Promotion Decision**. Confirm final source identity, CI/evidence state, Vercel deployment identity, PR status and frozen contracts. Only then decide whether PR #1 should leave draft and merge to `main`.
