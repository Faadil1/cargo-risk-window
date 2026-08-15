# Gate 6.5 — Evaluation Capture 001

## Status

**POLISH VALIDATED — LIVE PROMOTION REQUIRED**

Evaluation date: 2026-08-15

## Evaluator question

Can a first-time reviewer understand, without the project pitch:

1. which shipment needs attention;
2. where exposure concentrates;
3. why it is prioritized;
4. what the score means and does not mean;
5. what a human reviewer should do next?

## Live evaluation baseline

The production alias `https://cargo-risk-window.vercel.app` returned HTTP 200 and served the Cargo Risk Window Vite application.

The live deployment at the start of Gate 6.5 was built from product commit:

`a048800d6a8317e259a02c6b0df719b629cc12b6`

### Baseline verdict

The main product story passed:

- ranked Manifest makes the priority shipment visible;
- SHPM-5687 is #1 at 82/100;
- the Intermodal Risk Corridor exposes where exposure concentrates;
- reason codes and the factor breakdown explain the index;
- the UI explicitly says the index is not a probability of theft;
- public aggregate context remains visually separated from synthetic shipment evidence;
- Human Review retains the final action authority.

One material presentation gap remained in the right-side Human Review column: the panel stated that the decision remained human, but a large empty region did not show enough of the review work itself.

## Material polish decision

The density issue was considered material for evaluator proof because the protected promise is not merely “a human clicks a button”; it is that human review remains the operational resolution path.

The correction adds a compact freight-native review checklist instead of decorative KPIs:

- Carrier verification
- Dwell plan
- Secure parking / handoff
- Monitoring priority

The checklist shows review tasks/status without claiming that safeguards were completed when the underlying prototype does not contain such evidence.

Implementation commit:

`2b4135a0a264f63cc604942d1fbd0dc22e47584b`

## Post-polish rendered validation

GitHub Actions run:

`31892107982`

Result: **PASS**

The run passed:

- install;
- TypeScript/Vite production build;
- desktop 1440×900 render;
- keyboard focus;
- alternate shipment selection;
- escalation state;
- tablet 900×1100;
- mobile 390×844;
- reduced-motion state.

Rendered evidence confirms that the Human Review column now has a clear operational sequence while preserving visual restraint. In the escalation state, Monitoring priority changes to `Enhanced`, while other checklist items remain review tasks rather than being falsely marked complete.

## Gate 6.5 decision

The evaluator-facing composition and interaction are now **PASS at the validated rendered build**.

Gate 6.5 remains open only because the production alias still serves the previous validated build. The corrected build must be promoted to Vercel and rechecked at the live alias before Gate 6.5 can be recorded as fully complete.

## Next required output

Promote commit `2b4135a0a264f63cc604942d1fbd0dc22e47584b` (or its exact CI-produced Vite artifact) to the Cargo Risk Window Vercel production project, verify the alias, then close Gate 6.5 and proceed to Gate 6.75 Demo Narrative / Evidence Film.
