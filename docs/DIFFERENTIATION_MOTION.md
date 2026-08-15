# Gate 4 — Differentiation / Motion Job Matrix

## Objective

Give Cargo Risk Window product-specific character without turning the interface into an effects demo.

The differentiation must reinforce the freight-review job:

> Which shipment needs attention, where does exposure concentrate, why, and what should a human reviewer do next?

## Signature budget

### Primary product signature — Intermodal Risk Corridor

A route + time + modal-segment structure that reveals where multiple exposure factors concentrate.

It must remain meaningful as a static visualization. Motion only helps the reviewer understand sequence and concentration.

### Narrative signature — Exposure Window Build

When a shipment is selected, the interface should reveal how its exposure is assembled:

`shipment → route segments → critical window → reason anchors → factor contributions → human review state`

This is explanatory choreography, not an animated risk alarm.

### Micro-interaction 1 — Manifest Index Transfer

The active manifest/index marker moves from one shipment row to another while the selected shipment state updates.

Purpose:
- preserve spatial continuity;
- reinforce manifest/ledger language;
- make selection feel like moving an operational index rather than opening a SaaS card.

### Micro-interaction 2 — Review Mark

After a human action is recorded, a restrained dispatch/review mark confirms the state change.

Purpose:
- make human resolution visible;
- close the review loop;
- avoid AI-recommendation theatrics.

No additional major signature effect is allowed without reopening Gate 4.

---

# Motion Job Matrix

TRACE registry rule: one preferred owner per motion class; do not install a second library for a job already solved well.

## Motion — React layout/state owner

Use **Motion** for:
- manifest index transfer / shared-layout selection;
- panel/state transition between selected shipments;
- compact expand/collapse of reason details;
- responsive layout transitions where state continuity matters.

Why:
- these are React layout/state jobs;
- spring/layout behavior is appropriate;
- no need for a timeline engine.

## Anime.js — sequence/SVG owner

Use **Anime.js** only for:
- drawing/revealing the Intermodal Risk Corridor after shipment selection;
- sequential activation of route modules when sequence clarifies the exposure build;
- revealing reason-code anchors in route order;
- restrained Review Mark confirmation if implemented as SVG/DOM sequence.

Why:
- this is editorial/SVG sequencing;
- it should remain deterministic and short;
- the sequence explains causality/order.

## Explicitly not required

### GSAP
Not needed unless the product later develops genuinely complex timeline/scroll orchestration. No install for the current MVP.

### Rive
Not needed. There is no vector state-machine product job.

### Three.js
Not needed. The product job is analytical/logistics review, not spatial 3D.

### React Bits / Magic UI novelty packages
Not required. Do not import a component package simply to make the dashboard feel animated.

---

# Motion language

Character:
- routed;
- mechanical;
- indexed;
- precise;
- calm under risk;
- no ambient urgency loops.

Suggested timing:
- selection/index transfer: 180–260 ms;
- small state changes: 160–220 ms;
- corridor sequence: 380–650 ms total;
- reason-code stagger: 40–70 ms between meaningful ordered items;
- review confirmation: 220–360 ms.

Do not use long cinematic transitions inside the operational workflow.

## Easing

Prefer restrained ease-out or light spring behavior for layout/state.

Avoid:
- rubbery overshoot;
- bouncy consumer-app motion;
- repeated pulses;
- infinite glow cycles;
- shaking alert states;
- map-pin radar effects.

---

# Reduced motion

`prefers-reduced-motion` must preserve the complete final state.

When reduced motion is enabled:
- manifest selection changes immediately or with near-zero fade;
- Risk Corridor renders fully without drawing animation;
- all reason anchors are visible immediately;
- Review Mark appears as a static confirmed state;
- no information is hidden behind animation completion.

---

# Interaction ownership

| Job | Owner | Notes |
|---|---|---|
| Manifest row selection continuity | Motion | layout/state |
| Selected shipment panel transition | Motion | subtle only |
| Risk Corridor trace | Anime.js | SVG/DOM sequence |
| Route-module ordered reveal | Anime.js | only if order matters |
| Reason-anchor ordered reveal | Anime.js | route sequence |
| Reason detail expand/collapse | Motion | UI state |
| Review Mark confirmation | Anime.js or static CSS | Anime only if SVG sequence adds clarity |
| Ambient dashboard animation | None | prohibited |

The Review Mark must not cause both Motion and Anime.js to own the same animation job. Pick one implementation when building.

---

# Gate result

**Gate 4 — Differentiation: PASS.**

Frozen signature budget:
- 1 primary product signature: Intermodal Risk Corridor;
- 1 narrative signature: Exposure Window Build;
- 2 supporting micro-interactions: Manifest Index Transfer + Review Mark.

Execution routing:
- Motion → React layout/state;
- Anime.js → route/SVG/editorial sequence;
- GSAP/Rive/Three.js → not required for MVP.

Next: Gate 4.25 Uniqueness Audit.