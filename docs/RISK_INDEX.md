# Exposure Index Specification

## Purpose

The Exposure Index is a transparent **prioritization heuristic** for a synthetic Day Challenge prototype.

It is not a probability model, prediction engine or validated security-control framework.

## Formula

Maximum score: **100**.

```text
Exposure Index =
  Cargo Value            (0–25)
+ Geography Context      (0–20)
+ Dwell Exposure         (0–15)
+ Commodity Context      (0–15)
+ Timing                 (0–10)
+ Carrier Verification   (0–10)
+ Public Context         (0–5)
```

Every point must be traceable to an input displayed in the product.

## Factor mappings

### Cargo value — 0 to 25

Prototype bands:
- low → 4
- medium → 10
- high → 18
- very_high → 25

This reflects potential financial exposure only; value alone must not determine priority.

### Geography / route context — 0 to 20

Synthetic levels:
- low → 3
- moderate → 8
- elevated → 14
- high → 20

The context represents an aggregate route/geography signal for the prototype, not a statement that a place is unsafe or criminal.

### Dwell exposure — 0 to 15

Suggested transparent mapping:
- `< 30 min` → 2
- `30–90 min` → 5
- `91–180 min` → 9
- `181–360 min` → 12
- `> 360 min` → 15

Secure-parking planning may reduce the effective dwell contribution in the synthetic logic, but the reduction must be visible.

### Commodity context — 0 to 15

Synthetic context levels:
- low → 2
- moderate → 6
- elevated → 10
- high → 15

The level should be based on aggregate public trend context encoded into the synthetic dataset and clearly labelled as contextual.

### Timing — 0 to 10

Candidate mapping:
- ordinary weekday/daytime → 2
- weekday overnight → 4
- weekend → 6
- holiday/long-weekend → 8
- holiday + extended dwell combination → 10

Avoid double-counting: dwell duration remains a separate factor.

### Carrier verification — 0 to 10

- verified → 0
- verification_pending → 4
- verification_gap → 10

This reflects process completeness, not accusation of wrongdoing.

### Recent public context — 0 to 5

- none/low → 0
- moderate → 2
- elevated → 4
- strong relevant aggregate trend → 5

This factor is deliberately capped at 5 so public historical trends do not masquerade as shipment-specific evidence.

## Risk bands

Prototype-only labels:

| Index | Label |
|---|---|
| 0–29 | Low exposure |
| 30–49 | Watch |
| 50–69 | Elevated |
| 70–100 | Priority review |

Always pair the band with explanation. Never show the score as unexplained certainty.

## Explainability contract

For each shipment the interface must expose:
- total Exposure Index;
- contribution of all seven factors;
- top 2–3 reason codes;
- segment where exposure peaks;
- any mitigating condition such as secure parking or completed verification;
- relevant public-context reference separately.

## Segment exposure

The Risk Corridor may compute a separate segment exposure for visual storytelling. Segment exposure should reuse only the factors relevant to that segment, for example:

```text
segment_exposure =
  geography_context
+ dwell_component
+ timing_component
+ shipment-level cargo/commodity context
```

It does **not** need to sum to the shipment's 0–100 index. It is a local visualization aid and must be labelled accordingly if numeric values are shown.

## Human review

The product output is a **review priority**, not an automated decision.

A high index may lead to:
- verification;
- dwell-plan review;
- enhanced monitoring;
- manual security review.

A low index must not be treated as a guarantee of safety.

## Language QA

Allowed:
- “Priority review”
- “Exposure is elevated because…”
- “Three factors concentrate during this dwell window.”
- “Public context indicates a recent aggregate trend.”

Disallowed:
- “82% chance of theft”
- “This shipment will be stolen”
- “AI predicts theft”
- “Carrier is suspicious”
- “Route is criminal”
