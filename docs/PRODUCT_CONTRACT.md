# Product Contract — Cargo Risk Window

## Product type

One-day operational data-product prototype for freight-security review.

## Real business problem

Freight-theft counts alone can obscure rising financial exposure. High-value commodities, geographic hotspots, dwell windows, carrier-verification gaps and timing can combine into a materially different risk context even when raw incident counts do not increase.

## Primary user

Transportation security / freight-risk manager.

Secondary users:
- freight-broker operations;
- shipper logistics manager.

## Core job

Identify which planned or active shipments deserve enhanced human attention because multiple known exposure factors concentrate at the same time.

## Business moment

The prototype supports:
- pre-dispatch risk review;
- high-value shipment tender review;
- dwell / parking-plan review;
- holiday or weekend exposure review.

## Allowed actions

The product may help the reviewer:
- escalate a shipment for manual security review;
- request enhanced carrier verification;
- review secure-parking / dwell plans;
- increase monitoring priority.

It must not automatically accuse a carrier, driver, location or shipment of theft risk as a fact.

## Critical promises

1. Prioritize **exposure**, not raw incident count.
2. Explain why each shipment is flagged.
3. Keep synthetic shipment data visibly separate from public aggregate context.
4. Preserve human review and judgement.
5. Make the most important exposure understandable without analyst translation.

## Protected claim boundaries

The prototype must never imply:
- validated theft probability;
- predictive accuracy;
- real-time threat intelligence;
- access to private CargoNet / carrier / customer databases;
- causal certainty from public aggregate patterns;
- automated security decisions.

Preferred language:
- exposure index;
- exposure context;
- review priority;
- reason code;
- public trend context;
- human review required.

Avoid:
- probability of theft;
- theft predicted;
- guaranteed high risk;
- AI detected criminal activity.

## Frozen product flow

```text
1. Review Queue
   ↓
2. Shipment Review
   ↓
3. Risk Corridor
   ↓
4. Public Context
   ↓
5. Human Review Outcome
```

### 1 — Review Queue

Show the active/planned shipment set ordered by Exposure Index, with enough context to understand why the top items matter.

Minimum row/card information:
- shipment ID;
- origin → destination;
- cargo category;
- value band;
- departure / ETA window;
- Exposure Index;
- top 2–3 reason codes;
- review state.

### 2 — Shipment Review

Selecting a shipment opens its detailed operational context without navigating away from the review workspace.

### 3 — Risk Corridor

Primary signature. Show where exposure concentrates across route/time segments. A reviewer must be able to connect the total index back to factor contributions.

### 4 — Public Context

Provide public aggregate trend context only. The UI must clearly label this as contextual evidence, not shipment-level ground truth.

### 5 — Human Review Outcome

The user records a lightweight review outcome, for example:
- no escalation;
- verify carrier;
- revise dwell / parking plan;
- enhanced monitoring;
- manual review required.

## Reading sequence

Within 60 seconds, a reviewer should answer:

1. What requires attention?
2. Why?
3. Where/when does exposure concentrate?
4. What contextual evidence supports the concern?
5. What human review action should happen next?

## Acceptance criteria

- top-priority shipments identifiable in under 60 seconds;
- every exposure index visibly explainable;
- no raw incident count presented as sufficient risk evidence;
- synthetic vs public context boundary explicit;
- no predictive-certainty language;
- Risk Corridor carries the primary story rather than KPI-card decoration;
- product remains usable as one coherent operational workspace.
