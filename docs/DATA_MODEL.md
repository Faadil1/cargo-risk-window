# Synthetic Data Model — Cargo Risk Window

## Principle

All shipment-level data is fictitious. Public theft/security trends may be used only as aggregate contextual inspiration and must not be represented as shipment-level historical truth.

The dataset should be designed to test the product logic, not to impersonate a real operational feed.

## Minimum dataset

Create at least **24 synthetic shipments** spanning:
- multiple origins and destinations;
- multiple cargo categories;
- low, medium, high and very-high cargo-value bands;
- varied dwell windows;
- weekday/weekend/holiday timing;
- varied carrier-verification states;
- varied public-context levels;
- at least 3–5 route segments per shipment.

The dataset must include deliberately contrasting cases so no single factor always determines priority.

Examples:
- high value but low dwell and verified carrier;
- medium value with long dwell + weekend + elevated geography context;
- high commodity context but low route context;
- strong public trend context but otherwise low exposure;
- low value with several moderate factors;
- missing verification creating a visible but not automatically dominant contribution.

## Entities

### Shipment

Required fields:
- `shipment_id`
- `origin`
- `destination`
- `cargo_category`
- `cargo_value_band`
- `departure_at`
- `eta_at`
- `timing_context`
- `carrier_verification_status`
- `review_status`
- `exposure_index`
- `risk_band`
- `reason_codes[]`
- `factor_scores`
- `segments[]`
- `public_context_refs[]`

### Segment

Each shipment contains route/time segments with:
- `segment_id`
- `sequence`
- `label`
- `start_at`
- `end_at`
- `geography_context`
- `dwell_minutes`
- `secure_parking_planned`
- `segment_exposure`
- `dominant_factors[]`

Segments are conceptual route/dwell intervals for the prototype. They do not need real GPS traces.

### Public context reference

Fields:
- `context_id`
- `source_label`
- `context_type`
- `period`
- `summary`
- `scope`
- `source_url`

Allowed `context_type` values can include:
- `commodity_trend`
- `geography_trend`
- `timing_trend`
- `general_theft_trend`

The UI must show that this is aggregate context.

### Review outcome

Fields:
- `status`
- `action`
- `note`
- `reviewed_at`

Allowed actions:
- `no_escalation`
- `manual_security_review`
- `verify_carrier`
- `review_dwell_plan`
- `enhanced_monitoring`

## Factor-score object

```json
{
  "cargo_value": 20,
  "geography": 15,
  "dwell": 10,
  "commodity": 12,
  "timing": 5,
  "carrier_verification": 10,
  "public_context": 4
}
```

The total must equal `exposure_index`.

## Reason codes

Reason codes should be generated from factor contributions, not from hidden logic.

Candidate codes:
- `HIGH_VALUE_CARGO`
- `ELEVATED_ROUTE_CONTEXT`
- `LONG_DWELL_WINDOW`
- `HIGH_INTEREST_COMMODITY`
- `WEEKEND_OR_HOLIDAY_WINDOW`
- `CARRIER_VERIFICATION_GAP`
- `RECENT_PUBLIC_TREND`
- `SECURE_PARKING_NOT_PLANNED`

The top 2–3 codes should normally correspond to the largest score contributions or the most operationally important segment condition.

## Risk bands

Risk bands are prioritization labels only.

Initial prototype thresholds:
- `0–29` → low exposure
- `30–49` → watch
- `50–69` → elevated
- `70–100` → priority review

These thresholds are product-design defaults, not validated statistical thresholds.

## Synthetic-data QA

Before using the dataset:
- verify every score sums correctly;
- verify reason codes match visible factors;
- verify multiple factor combinations can produce similar totals;
- verify no geography or carrier is portrayed as intrinsically criminal;
- verify all names/IDs are synthetic;
- verify the UI can clearly separate aggregate context from shipment facts.
