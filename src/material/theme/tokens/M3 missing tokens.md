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

5) [x] Stroke & separation tokens (Boundaries & indicators) — see `cem-stroke.md`

Why (Material alignment): Material uses dividers (1dp), focus rings, and border patterns as core visual separation.

CEM category: "Boundaries" / "Separation" / "Indicators" (consumer-visible boundary geometry).
Example CEM token families:

Basis: --cem-stroke-none, --cem-stroke-hair, --cem-stroke-standard, --cem-stroke-strong

Semantic: --cem-stroke-boundary, --cem-stroke-divider, --cem-stroke-focus, --cem-stroke-selected, --cem-stroke-target

Zebra indicators: --cem-zebra-strip-size, --cem-zebra-color-0..3

Material mapping idea: maps to divider width, focus ring thickness, outlined field border widths.

6) [x] Layering tokens (Depth, elevation & stacking) — see `cem-layering.md`

Signed 7-tier ladder combining recess + elevation + planes.

Why (Material alignment): Material's token model treats elevation as a system-level concept.

CEM category: "Layering" — recess/lift/planes as one consumer concept.
Example CEM token families:

Basis rungs: --cem-recess-2, --cem-recess-1, --sem-elevation-0..4

Semantic endpoints: --cem-layer-back, --cem-layer-base, --cem-layer-work, --cem-layer-overlay, --cem-layer-command

Representation channels: tonal shift (D0), shadow, contour (D5), material/blur, space (D1), motion (D7).

Material mapping: signed depth + tonal elevation + scrim for modality.

7) [x] Stacking order (merged into Layering) — see `cem-layering.md`

Now part of D4 Layering. cem-layering.md defines:
- Five named planes: Back, Base, Work, Overlay, Command
- Semantic endpoints: --cem-layer-back, --cem-layer-base, --cem-layer-work, --cem-layer-overlay, --cem-layer-command
- Discriminator rules for Overlay vs Floating
- Dismissal precedence: topmost Overlay first, then Command

Note: z-index values are an implementation detail, not part of the semantic contract.

8) Responsive breakpoints (Layout adaptation)

Why (Material alignment): MUI treats breakpoints as a core theme variable for responsive layout behavior.
MUI
+1

CEM category: “Layout modes” (compact/medium/expanded) rather than “sm/md/lg.”
Example CEM token families:

--cem-breakpoint-compact, --cem-breakpoint-comfortable, --cem-breakpoint-expanded

Pair with “container” tokens if you want component-level responsiveness later.

9) Component slot tokens (Bridging layer to Material component tokens)

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