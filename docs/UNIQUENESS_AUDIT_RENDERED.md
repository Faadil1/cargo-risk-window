# Gate 6 — Rendered Uniqueness Audit

Date: 2026-08-15
Branch: `build/intermodal-ledger`
Reference rendered QA run: `31888195853`

## Audit question

Without relying on the product name or pitch, does the rendered viewport read as a **freight/logistics exposure-review instrument** rather than a generic SaaS, BI or cybersecurity dashboard?

**Result: PASS.**

## Rendered scoring

Scale: 1–5, where 5 is strongest. Generic-AI/SaaS risk is inverse: lower is better.

| Dimension | Rendered score | Evidence in the actual viewport |
|---|---:|---|
| Domain specificity | 5/5 | Ranked shipment manifest, truck/transfer/dwell/border/final-mile modules, lane and carrier language are immediately visible. |
| Visual recognizability | 4.5/5 | Mineral sage + warm bone + aubergine/teal/terracotta/plum creates a recognizable non-cyber, non-default BI environment. |
| Interaction specificity | 4.5/5 | Manifest Index Transfer changes the selected shipment and reconstructs the operational corridor; review actions resolve into human state. |
| Explanation specificity | 5/5 | Reason codes, critical dwell window, factor contributions, mitigation and public-context qualification are tied to the shipment. |
| Generic dashboard dependence | 2/5 | Factor bars and the side review column use familiar dashboard forms, but remain subordinate to the freight-specific manifest/corridor system. |
| Generic AI/SaaS risk | 1.25/5 | No AI confidence language, glassmorphism, map-first shell, generic KPI hero or dark cyber command center appears. |

## Invariant check

The design-contract audit required at least five product-specific invariants to remain obvious. The rendered build visibly preserves all ten:

1. manifest/index structure — **visible**;
2. intermodal route modules — **visible**;
3. route/time exposure corridor — **visible**;
4. critical exposure/dwell window — **visible**;
5. reason codes attached to operational segments — **visible**;
6. transparent factor contributions — **visible**;
7. public aggregate context separated from shipment evidence — **visible**;
8. human review outcome — **visible**;
9. Mineral Intermodal materiality — **visible**;
10. Archivo + IBM Plex Mono operational typography — **visible**.

## Generic-risk watchlist — rendered result

- generic 4× KPI-card top row → absent;
- giant circular risk gauge → absent;
- dark navy command-center shell → absent;
- red alert everywhere → absent;
- pulsing threat map pins → absent;
- AI recommendation copy → absent;
- probability/confidence language → absent; explicit opposite claim is visible;
- glass cards → absent;
- world map dominating first viewport → absent;
- decorative sparklines → absent;
- excessive rounded SaaS cards → absent.

## Actual viewport questions

### Can the domain be inferred without the pitch?
**Yes.**

The combination of ranked shipments, intermodal operational stages, dwell/border/final-mile language, carrier verification and route-linked reason codes makes freight/logistics visible immediately.

### Can a reviewer identify what needs attention, where and why?
**Yes.**

At the canonical desktop viewport:
- selected priority shipment is visible;
- Exposure Index + non-probability qualification are visible;
- critical dwell module is visually distinct;
- reason codes are attached to that module;
- plain-language summary explains the concentration;
- human review action is present in the right region.

## Minor uniqueness risk

The human-review side panel uses a familiar enterprise side-column pattern and has generous empty vertical space at 1440×900.

This is **not a blocking generic-SaaS problem** because:
- it represents the human resolution layer rather than the product signature;
- the Intermodal Risk Corridor dominates the analytical center;
- the panel uses the frozen palette/typography and explicit carrier-verification language.

Potential later polish: add a compact domain-specific review checklist only if it improves the human-review job; do not fill the space with decorative metrics.

## Gate result

**Rendered Gate 4.25 recheck at Gate 6: PASS.**

No visual-direction or signature rework required.

Proceed to final Gate 6 polish / Gate 6.5 Evaluation Capture. Keep PR in draft until the owner reviews the actual rendered screenshots or live preview.
