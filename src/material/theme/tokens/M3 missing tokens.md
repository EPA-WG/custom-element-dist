Suggested token categories to add (CEM-aligned)

Below are the categories I recommend adding to theme-data.xhtml, phrased in consumer semantic language (what the user
experiences), while still mapping cleanly onto Material UI / Angular Material expectations.

1) [x] Typography tokens (Readability & hierarchy)

Why (Material alignment): Typography is a top-level theme subsystem in Material theming
MUI
+1
and a first-class token surface in Angular Material.
Angular.love
+1

CEM category: “Text roles” (not “H1/H2” or “headline-4”).
Example CEM token families:

--cem-type-hero-*, --cem-type-section-heading-*, --cem-type-body-*, --cem-type-caption-*, --cem-type-ui-label-*

Include size, line-height, weight, letter-spacing, and font-family splits (e.g., “plain” vs “brand”).

Material mapping idea: maps to MUI theme.typography.*
MUI
+1
and Angular Material typography tokens/overrides.
Angular.love
+1

2) [x] Spacing & layout rhythm tokens (Breathing room)

Why (Material alignment): MUI treats spacing as a core theme variable, with a baseline scaling approach.
MUI
+1

CEM category: “Comfort spacing” / “Content density spacing” (what it feels like), not “8px grid”.
Example CEM token families:

--cem-space-2xs … --cem-space-2xl (foundation scale)

Semantic aliases: --cem-inset-page, --cem-inset-card, --cem-gap-content, --cem-gap-controls, --cem-gap-form-row

Material mapping idea: maps to MUI theme.spacing()/spacing scale
MUI
and is the substrate for Angular Material density customization (below).

3) [x] Density & touch-target tokens (Touchability) — see `coupling.md`

Why (Material alignment): Angular Material explicitly surfaces density as a token axis (commonly
“comfortable/cozy/compact”).
Angular.love
+1

CEM category: “Touchability” / “Compactness” (user-visible), not “density=-2”.
Example CEM token families:

--cem-density-touch (touch-first), --cem-density-balanced, --cem-density-compact

Or more directly: --cem-control-height, --cem-control-padding-x/y, --cem-list-row-height, --cem-hit-target-min

Material mapping idea: drives Angular Material density overrides.
Angular.love
+1

4) [x] Shape tokens beyond actions (Roundness & friendliness) — see `cem-shape.md`

You currently have action border radius, but not a general shape system.

Why (Material alignment): Material theming treats shapes as a subsystem
Android Developers
and token systems describe shape at system level.
Stack Overflow
+1

CEM category: “Roundness” / “Edge softness.”
Example CEM token families:

Foundation: --cem-radius-0/1/2/3/4, --cem-radius-pill

Semantic: --cem-radius-surface, --cem-radius-control, --cem-radius-tooltip

Material mapping idea: maps to MUI theme.shape.borderRadius usage patterns
MUI
and Angular Material shape/elevation tokens (system-level concepts).
Stack Overflow
+1

5) Elevation & shadow tokens beyond actions (Depth & layering cues)

You have action box-shadows, but not a general surface elevation system.

Why (Material alignment): Material’s token model treats elevation as a system-level concept.
Stack Overflow
+1

CEM category: “Depth” / “Raisedness” / “Overlay prominence.”
Example CEM token families:

--cem-elevation-0…5 (foundation)

Semantic: --cem-surface-raised-shadow, --cem-surface-overlay-shadow, --cem-surface-modal-shadow

Add --cem-scrim-opacity as a paired token for overlays (user-perceived depth).

6) Layering tokens (Stacking order)

Why (Material alignment): MUI treats z-index as a defined theme scale and documents canonical layers (app bar, drawer,
modal, tooltip, etc.).
MUI

CEM category: “UI layers” (what the user perceives: “tooltip above dialog”, etc.).
Example CEM token families:

--cem-layer-base, --cem-layer-sticky, --cem-layer-overlay, --cem-layer-modal, --cem-layer-tooltip

(Optionally keep a numeric mirror scale if needed for interoperability.)

7) Responsive breakpoints (Layout adaptation)

Why (Material alignment): MUI treats breakpoints as a core theme variable for responsive layout behavior.
MUI
+1

CEM category: “Layout modes” (compact/medium/expanded) rather than “sm/md/lg.”
Example CEM token families:

--cem-breakpoint-compact, --cem-breakpoint-comfortable, --cem-breakpoint-expanded

Pair with “container” tokens if you want component-level responsiveness later.

8) Component slot tokens (Bridging layer to Material component tokens)

This is the missing link if you want your CEM tokens to drive Angular Material/MUI components without sprinkling
per-component overrides everywhere.

Why (Material alignment):

MUI centralizes component theming under the theme’s components key.
MUI
+1

Angular Material exposes per-component token override APIs (color/typography/density).
Angular.love
+1

CEM category: “Component parts users recognize” (button fill, input border, dialog scrim), not library-internal slot
names.
Example pattern:

--cem-comp-button-fill, --cem-comp-button-text, --cem-comp-field-border, --cem-comp-dialog-scrim,
--cem-comp-tooltip-surface

Then map these to MUI component overrides / Angular Material override mixins in your implementation layer.

Recommended prioritization (if you want quickest Material parity)

Typography + Spacing (unblocks most layout and text parity with MUI/Angular Material).
MUI
+2
MUI
+2

Density (Angular Material-specific, high impact on real UI feel).
Bacancy
+1

Shape + Elevation (system-level parity beyond your action tokens).
Android Developers
+1

Z-index layers + Breakpoints (completes core MUI theme-variable coverage).
MUI
+1

Component slot tokens (keeps consumer semantics intact while still controlling Material components at scale).
Angular.love
+1

If you want, I can draft a concrete section outline + datalist structure for these new categories that matches the style
of your existing theme-data.xhtml (including naming conventions and example CSS snippets showing how each category maps
into MUI theme keys and Angular Material override mixins).