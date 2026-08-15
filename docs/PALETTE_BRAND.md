# Gate 2.5 — Palette / Brand

## Selected palette — Mineral Intermodal

This palette intentionally avoids the classic white/navy/red security-dashboard combination.

The interface should feel industrial and operational without looking militarized or cyber-themed.

## User-confirmed anchor

The main application canvas is **explicitly selected and locked by the user**:

- `#D8DCCF` — mineral sage / industrial mist.

This is the visual anchor for the Intermodal Ledger direction. Do not silently replace it with white, off-white, navy or black during implementation.

## Core colors

| Role | Hex | Use |
|---|---|---|
| Canvas / mineral sage | `#D8DCCF` | Main application background — USER LOCKED |
| Surface / warm bone | `#EAE1D5` | Panels, manifest rows, review surfaces |
| Structural ink | `#2B2730` | Primary text, rules, strong structure |
| Freight violet | `#635D9A` | Selected shipment, active route/module, focus state |
| Oxidized teal | `#3E7B6C` | Verified, routine, completed, low-exposure route state |
| Terracotta exposure | `#D46A4C` | Elevated exposure and active warning context |
| Plum critical | `#8E4662` | Critical review window; rare and highly semantic |
| Muted brass | `#B7A85A` | Public context, secondary operational annotation |

## Semantic hierarchy

### Normal / verified
Use oxidized teal, not green-success UI.

### Active / selected
Use freight violet. It belongs to interaction/focus, not risk severity.

### Elevated exposure
Use terracotta. This should be the dominant warning hue in most high-exposure states.

### Critical review
Use plum sparingly for the highest review state or critical exposure window.

### Public aggregate context
Use muted brass or neutral structural ink so public trend context cannot be mistaken for shipment-level evidence.

## Background strategy

Avoid large fields of pure white.

Preferred layering:

```text
Mineral sage canvas #D8DCCF  ← user-selected anchor
  ↓
Warm bone operational surfaces #EAE1D5
  ↓
Occasional muted violet/teal tinted modules
  ↓
Terracotta/plum only where exposure meaning requires it
```

The page should feel colored even before any warning state appears.

## Contrast rules

- `#2B2730` is the default text color on both core light surfaces.
- Do not place small light text directly on terracotta/plum unless contrast is verified.
- Route and score distinctions cannot rely on hue alone; pair color with labels, symbols or position.
- Synthetic/public-context labels must remain legible at presentation size.

## Anti-generic rules

Do not introduce:
- default corporate navy;
- bright success green;
- pure danger red everywhere;
- cyan/blue AI gradients;
- neon purple;
- glass cards;
- white canvas with one accent color.

## Brand character

Keywords:
- intermodal
- mineral
- dispatch
- routed
- coded
- tactile
- contemporary
- calm under risk

The brand should feel like a purpose-built logistics instrument, not a security startup skin.

## Gate result

**Gate 2.5: PASS / FROZEN.**

Frozen:
- Intermodal Ledger composition;
- mineral sage canvas `#D8DCCF`;
- warm bone operational surfaces;
- semantic separation of active, verified, elevated, critical and public-context colors.

The palette is now the basis for [`DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md). Future tuning is allowed only for accessibility/contrast defects, not to drift back toward generic white/navy/red styling.