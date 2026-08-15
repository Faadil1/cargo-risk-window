# TRACE Gate 8 — Cargo Risk Window Post-mortem 001

Date: 2026-08-15

## Outcome

Cargo Risk Window shipped as a promoted, evaluator-verified defensive freight-security prioritization prototype.

Promotion evidence:

- PR #1 promoted to `main`.
- Merge commit: `901fd1768c55225f47e3841fc9f9521ff2d7a7d9`.
- Post-merge CI run: `31902744055` — **PASS**.
- Production alias: `https://cargo-risk-window.vercel.app` — HTTP 200 after promotion.
- Production assets remained the previously validated product artifact:
  - JS: `assets/index-BYTxu-5Z.js`
  - CSS: `assets/index-784W_psI.css`
- Product behavior validated at commit `2b4135a0a264f63cc604942d1fbd0dc22e47584b`.
- Gate 6.5 Evaluation Capture: **PASS — LIVE VERIFIED**.
- Gate 6.75 Demo / Evidence Film: **PASS — LIVE EVIDENCE SEQUENCE VERIFIED**.
- Gate 7 Freeze Audit: **FREEZE_PASS**.
- Dependency resolution is frozen with `package-lock.json`; CI uses `npm ci`.

The shipped product preserves the original truth contract: shipment records are synthetic, public incident information is aggregate context only, the Exposure Index is a transparent deterministic heuristic rather than a probability-of-theft model, and human review remains the action authority.

## What improved quality

### 1. Proof Contract before interface work

Freezing the protected claims and limitations prevented the product from drifting into prediction language. This was especially important because the visual form could easily have become a generic threat-scoring or cyber-command dashboard.

### 2. Domain metaphor before visual effects

The selected vocabulary — Manifest, Corridor, Exposure Window and Review Mark — produced a product-specific information architecture before animation or styling. That gave the implementation a freight/logistics identity without relying on decorative industry imagery.

### 3. Full-screen prototype before production build

Comparing coherent directions before coding prevented competing visual grammars from entering the product. The final Intermodal Ledger system remained implementable and distinctive.

### 4. Rendered QA instead of code-only verification

Rendered QA found problems that static contracts and build success could not reveal. Earlier QA also exposed a narrative/data consistency problem where generated shipments could outrank the intended hero scenario. The final rendered suite validated desktop, tablet, mobile, keyboard focus, alternate selection, escalation and reduced-motion behavior.

### 5. Gate 6.5 evaluator capture exposed a material proof gap

The first live evaluator pass showed that the Human Review panel correctly stated that the decision remained human, but did not show enough of the actual review work. That gap was material because the protected promise concerned the operational resolution path, not merely the existence of a button.

The compact review checklist — Carrier verification, Dwell plan, Secure parking / handoff and Monitoring priority — made the human review path experienceable without inventing completion evidence.

### 6. Gate 6.75 treated the demo as evidence, not marketing

The evidence film was captured against the production alias and asserted the important product truths: hero shipment rank, 82/100 factor reconciliation, non-probability disclosure, checklist presence and the user-triggered escalation state. This prevented the final story from becoming stronger than the live product.

### 7. Freeze separated product identity from later evidence work

After the validated product commit, later changes were classified explicitly. No later `src/` changes were present at Freeze; the remaining work was evidence, documentation, QA/reproducibility workflows and dependency locking. This made the promotion decision auditable.

## What created unnecessary iteration

### 1. D3 was assumed before the analytical job was proven

The first Gate 4.5 assumption treated the Risk Corridor as a custom data-visualization problem. Rendered implementation showed that it was primarily a categorical operational sequence and was clearer as semantic React modules plus CSS.

Lesson: a visualization library should be routed by the analytical transformation and interaction job, not by the fact that information is visual.

### 2. Validated build and live deployment briefly diverged

Gate 6.5 polish passed CI while the production alias still served the previous product build. The Gate could not truthfully close until production identity was rechecked.

Lesson: evaluator-facing Gates need explicit artifact identity, not only a green source commit.

### 3. Human Review proof was initially too implicit

The product contract correctly protected human authority, but the first rendered composition treated that mostly as copy and action buttons. The evaluator pass revealed that the interface needed to expose the review work itself.

Lesson: when a critical promise concerns a human process, proof should show the process structure, not only a statement about it.

### 4. First live evidence automation used stale CSS selectors

The first Gate 6.75 workflow failed because the capture script referenced classes that were not present in the live implementation. The corrected selectors then passed.

This is implementation-specific and should not become a Kernel rule.

## Learning candidates

### Candidate A — Evaluated artifact identity

1. Did it solve a real problem? **Yes.** It prevented Gate 6.5 from closing while production still served an older artifact.
2. Was the improvement observable? **Yes.** Production was explicitly promoted and rechecked before PASS.
3. Useful beyond this project? **Yes.** Any deployed product can have source/build/live divergence.
4. Existing Kernel coverage? **Partial.** `proof_preservation`, Gate 6.5 and Gate 7 existed, but artifact identity was not explicit.
5. Destination: **Kernel** — strengthen existing evaluation/promotion criteria rather than add a new Gate.

### Candidate B — Evidence-film truth exit criteria

1. Did it solve a real problem? **Yes.** The final demo was constrained to real product behavior and protected claim boundaries.
2. Was the improvement observable? **Yes.** Automated live assertions and claim audit passed.
3. Useful beyond this project? **Yes.** Demo assets commonly overstate live capability.
4. Existing Kernel coverage? **Partial.** `demo_fidelity` already existed, but Gate 6.75 lacked explicit exit criteria.
5. Destination: **Kernel** — formalize the existing rule, do not create a new concept.

### Candidate C — Reproducible Freeze + post-promotion verification

1. Did it solve a real problem? **Yes.** The dependency graph was not initially locked and `main` had not been verified after merge.
2. Was the improvement observable? **Yes.** `package-lock.json` was committed, CI moved to `npm ci`, and the post-merge CI passed on `main`.
3. Useful beyond this project? **Yes, when the artifact is code-based.**
4. Existing Kernel coverage? **Partial.** Gate 7 said preserve/promote known-good layers but did not define reproducibility or post-promotion verification.
5. Destination: **Kernel** — add conditional reproducibility and post-promotion checks to Gate 7.

### Candidate D — D3 routing refinement

1. Did it solve a real problem? **Yes.** Removing an unnecessary visualization dependency simplified the implementation without weakening the analytical contract.
2. Was the improvement observable? **Yes.** The semantic corridor passed rendered QA and evaluator review.
3. Useful beyond this project? **Yes.** Categorical sequences often do not require a full data-vis library.
4. Existing Kernel coverage? **Tool Registry already owns D3 routing.**
5. Destination: **Tool Registry** — add an `avoid_for` condition for simple categorical/semantic sequences without scale or graph needs.

### Candidate E — Human Review checklist structure

1. Did it solve a real problem? **Yes.** It made human authority experienceable.
2. Useful beyond this project? **The principle is broader; the exact checklist is freight-specific.**
3. Existing Kernel coverage? **The broader proof principle is addressed through evaluation capture.**
4. Destination: **Project-local / Project Adapter** for the exact fields and wording.

### Candidate F — GitHub Actions live-capture implementation

It was useful, but the exact workflow, Playwright selectors and artifact packaging are implementation choices rather than stable TRACE rules.

Destination: **Keep as project example; do not promote to Kernel.**

## Promotions

### Kernel

Promote only by strengthening existing Gates/rules:

- Gate 6.5: require evaluator artifact identity and critical-promise visibility/experienceability.
- Gate 6.75: require proof-bearing moments from the validated product plus claim audit.
- Gate 7: require known-good source promotion, reproducibility where applicable, post-promotion verification and live artifact identity preservation where applicable.
- Decision rule: evaluation/demo/freeze cannot pass against a materially different artifact than the one actually validated.

### Project Adapter / local

Keep Cargo-specific:

- Carrier verification / Dwell plan / Secure parking or handoff / Monitoring priority checklist.
- Exposure Index formula and thresholds.
- Freight-specific reason codes and Intermodal Ledger vocabulary.

### Tool Registry

- Refine D3 routing: avoid it for simple categorical semantic sequences where DOM/CSS/component structure is clearer and no scale/graph transformation is required.

## Next experiment

Run TRACE on a materially different product type — ideally a SaaS conversion product or consumer-facing workflow — and test whether the strengthened Gate 6.5 / 6.75 / 7 rules remain useful without turning into deployment-specific overhead.

Do not use Cargo alone as justification for appifying TRACE. The existing appification threshold still requires multiple materially different project types.