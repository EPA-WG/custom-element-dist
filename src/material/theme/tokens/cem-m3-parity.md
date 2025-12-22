# CEM ↔ Material Design 3 / Material UI token parity (coverage check)

## Intent and positioning

CEM is **not** designed to be an in-place replacement for Material Design 3 (M3) or Material UI (MUI) token systems.
Instead, CEM defines **consumer-semantic** system endpoints (dimensions, coupling, stroke, shape, layering, timing, typography)
that are sufficient to build a **functional UI** grounded in CEM principles, while allowing selective adoption of **some M3/MUI
values and conventions** via a **mapping/alias layer**.

This document records a coverage review of the following attached CEM specs:

- `cem-dimension.md`
- `cem-coupling.md`
- `cem-shape.md`
- `cem-stroke.md`
- `cem-layering.md`
- `cem-timing.md`
- `cem-voice-fonts-typography.md`

---

## M3 coverage (system + state)

M3 commonly exposes **system tokens** (color/typescale/shape/motion) and **state guidance** (state-layer behaviors, opacities).
This section summarizes coverage against the attached CEM specs.

| M3 area | Typical M3 token surface (concept) | Coverage in attached CEM specs | Notes |
|---|---|---|---|
| Color system | `md-sys-color-*` roles | **Missing** | Not present in this attachment set (no “D0 color” spec included). |
| Typography system | `md-sys-typescale-*` roles | **Partial** | CEM typography exists, but not a 1:1 mirror of M3 typescale role taxonomy. |
| Shape system | `md-sys-shape-*` corner scale | **Covered** | CEM shape endpoints align well with M3’s corner-scale concept. |
| Motion system | `md-sys-motion-*` style guidance | **Partial** | CEM timing provides durations/easings; naming differs from M3. |
| State layers | Hover/focus/press/drag layer opacities | **Missing** | No dedicated state-layer opacity token surface in this attachment set. |
| Component tokens | `md-<component>-*` | **Out of scope / Missing** | CEM set here is system-level; it does not enumerate per-component token sets. |

---

## MUI coverage (theme keys)

MUI’s “token” surface is primarily the **theme object** (and optionally generated CSS variables), including categories such as
`spacing`, `shape`, `typography`, `transitions`, `zIndex`, `breakpoints`, `palette`, and `shadows`.

| MUI area | MUI token surface (concept) | Coverage in attached CEM specs | Notes |
|---|---|---|---|
| Spacing | `theme.spacing()` / spacing scale | **Covered** | CEM dimension/rhythm tokens map cleanly via a function/alias layer. |
| Shape | `theme.shape.borderRadius` | **Covered** | CEM bend endpoints can be mapped to MUI radii. |
| Transitions | `theme.transitions.duration/easing` | **Covered (with mapping)** | CEM timing covers this, but names differ from MUI’s standard keys. |
| zIndex | `theme.zIndex.*` ladder | **Missing** | CEM layering describes semantic planes but lacks a canonical z-index ladder in this set. |
| Density | component props + spacing/unit adjustments | **Partial** | CEM coupling supports density concepts; MUI implements density through component patterns. |
| Typography | `theme.typography.*` variants | **Partial** | CEM semantics differ from MUI variant taxonomy; mapping table needed for parity. |
| Palette/colors | `theme.palette.*` + action states | **Missing** | Not covered without the CEM color spec (not present in these attachments). |
| Shadows | `theme.shadows[]` recipes | **Partial** | CEM layering supports the concept; full recipe arrays not included in this set. |
| Breakpoints | `theme.breakpoints.*` | **Missing** | No breakpoint tokenization/spec in the attached set. |
| Stroke/outlines | borders/focus ring widths | **Covered** | CEM stroke covers focus/outline constructs and endpoints. |

---

## High-impact gaps (most likely to matter for “parity”)

1. **Color system parity** (M3 system roles and MUI palette/action state surfaces).
2. **State-layer opacity tokens/guidance** (hover/focus/press/drag) as a first-class, tokenized surface.
3. **z-index ladder** (MUI-style stacking scale) as a canonical artifact derived from CEM layering semantics.
4. **Breakpoints** (responsive tokenization) if MUI-style responsive theming is required.
5. **Explicit crosswalk tables** for:
   - CEM timing ↔ MUI `theme.transitions.*` keys
   - CEM typography semantics ↔ MUI typography variants
   - CEM bend endpoints ↔ MUI `shape.borderRadius` policy/extensions

---

## Practical recommendation (compatibility without diluting CEM)

Use a **two-layer approach**:

1. **CEM canonical layer**  
   CEM tokens remain the normative contract (consumer-semantic endpoints).

2. **Compatibility/alias layer (optional)**  
   Provide aliases that map M3/MUI token surfaces to CEM endpoints (or vice versa), for example:
   - `--md-sys-shape-corner-small: var(--cem-bend-s);`
   - `theme.transitions.duration.shortest = var(--cem-time-fast);`
   - `theme.shape.borderRadius = var(--cem-bend-m);`

This approach preserves CEM’s semantic guarantees while enabling selective adoption of M3/MUI values and ecosystem integration.

---

## Notes on scope

This coverage review is limited to the **attached** CEM spec files listed above.
If additional CEM specs exist (e.g., a dedicated color system, elevation/shadow recipes, breakpoints/responsiveness),
they should be included in a subsequent parity pass.
