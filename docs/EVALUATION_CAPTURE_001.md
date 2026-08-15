# Gate 6.5 — Evaluation Capture 001

## Status

**PASS — LIVE VERIFIED**

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

At the start of Gate 6.5, production served the earlier validated product build `a048800d6a8317e259a02c6b0df719b629cc12b6`.

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

The checklist shows review tasks/status without claiming that safeguards were completed when the prototype does not contain such evidence.

Implementation commit:

`2b4135a0a264f63cc604942d1fbd0dc22e47584b`

## Post-polish rendered validation

GitHub Actions run `31892107982`: **PASS**.

The run passed install, TypeScript/Vite production build, desktop 1440×900, keyboard focus, alternate shipment selection, escalation state, tablet 900×1100, mobile 390×844 and reduced-motion QA.

Rendered evidence confirms that the Human Review column now has a clear operational sequence while preserving visual restraint. In the escalation state, Monitoring priority changes to `Enhanced`, while other checklist items remain review tasks rather than being falsely marked complete.

## Live promotion verification

The exact Gate 6.5 product commit was independently rebuilt by Vercel from Git commit `2b4135a0a264f63cc604942d1fbd0dc22e47584b`.

Production deployment:

- Vercel deployment ID: `dpl_7su3zUSqMLdCtisBQ4xfHA8peUZT`
- canonical alias: `https://cargo-risk-window.vercel.app`
- deployment status: `READY`
- target: `production`
- JavaScript asset: `assets/index-BYTxu-5Z.js`
- CSS asset: `assets/index-784W_psI.css`

The canonical alias returned HTTP 200 with those exact asset hashes. The live JavaScript bundle contains the new Human Review checklist labels, confirming that production is no longer serving the pre-polish build.

## Gate 6.5 decision

**PASS.**

The evaluator can see the full proof path in the live product:

`priority shipment → exposure corridor → reason codes/factor breakdown → claim boundary → human review checklist → reviewer action`

No material evaluator-facing gap remains from Gate 6.5. The live product preserves the synthetic/public-data boundary and the non-predictive claim boundary.

## Next required output

Proceed to **Gate 6.75 — Demo Narrative / Evidence Film**. The demo must use the real live product for every proof-bearing moment and must not imply prediction accuracy, real-time threat intelligence, automated security decisions or any capability stronger than the deployed prototype.
