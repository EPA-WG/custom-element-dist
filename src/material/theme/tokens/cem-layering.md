# CEM D4 Layering — Signed Depth, Planes, and Appearance Shifts

**Status:** Proposed (canonical CEM spec)
**Last updated:** December 21, 2025
**Taxonomy placement:** D4. Layering (treats *depth + elevation + stacking* as one consumer concept)

> **Canonical layering contract (semantic-first).**
> This spec defines a **signed 7-tier ladder** (recess + base + lift) and the consumer-facing meaning of `--sem-elevation-*`.
> **Disclaimer:** Tier numbering encodes semantic priority (user psychology). Physical stacking may differ 
> (e.g., tooltips/menus/DnD may portal above dialogs) without violating this contract.

**Companion specs**
- **D0. Color ladder (Emotional Palette)** — tonal demotion/promotion that must agree with recess/lift.
- **Action states** (theme taxonomy) — visual priority order for interaction states; escalation must align with layering cues.
- **D5. Stroke & Separation** — boundaries as a substitute when shadows flatten (contrast/forced-colors).
- **D1. Space & Rhythm** — prominent layers “earn” breathing room (insets/gaps).
- **D3. Shape — Bend** — overlays vs dialogs must match bend roles.
- **D7. Time & Motion** — lift/drop transitions.

---

## Contents

1. [What layering means to users](#1-what-layering-means-to-users)
2. [Consumer layering vocabulary](#2-consumer-layering-vocabulary)
3. [User-flow journey through layering](#3-user-flow-journey-through-layering)
4. [Design goals](#4-design-goals)
5. [Signed ladder and planes](#5-signed-ladder-and-planes)
6. [Token model (basis → endpoints → adapters)](#6-token-model-basis--endpoints--adapters)
7. [Basis tokens: the canonical signed ladder](#7-basis-tokens-the-canonical-signed-ladder)
8. [Semantic endpoints: product-facing contract](#8-semantic-endpoints-product-facing-contract)
9. [Representation channels](#9-representation-channels)
10. [Scrim](#10-scrim)
11. [Action states align with layering and the color ladder](#11-action-states-align-with-layering-and-the-color-ladder)
12. [Cross-dimension coupling](#12-cross-dimension-coupling)
13. [Accessibility and forced-colors requirements](#13-accessibility-and-forced-colors-requirements)
14. [Component mapping matrix](#14-component-mapping-matrix)
15. [Implementation guidance](#15-implementation-guidance)
16. [Canonical token summary](#16-canonical-token-summary)
17. [Governance and versioning](#17-governance-and-versioning)
18. [Migration notes](#18-migration-notes)
19. [References](#19-references)

---

## 1. What layering means to users

Users do not perceive “dp” or “shadow recipes”; they perceive **where something lives** in a spatial hierarchy:

- **Backstage context** (navigation, scaffolding, background)
- **Work layer** (primary reading/doing)
- **Interruption and command** (menus, dialogs, confirmations)

CEM uses **layering** as the umbrella term for:

- **Depth (signed):** behind vs in front of the base (recess vs lift).
- **Elevation (positive):** steps above the base (raised layers).
- **Planes (stacking):** global ordering rules for overlays/commands, independent of local nesting.

Layering exists to support three outcomes:

1) **Orientation** — know what is “infrastructure” vs “work.”
2) **Separability** — see boundaries without reading.
3) **Commitment clarity** — distinguish “context” from “decision.”

---

## 2. Consumer layering vocabulary

This vocabulary is what designers, engineers, and docs should use. It is intentionally not “z-index” or “dp.”

### 2.1 Common terms

- **Layer:** a named role in the hierarchy (Back, Base, Work, Overlay, Command).
- **Recess:** a signed shift *behind* the base ("dig down").
- **Lift:** a signed shift *in front of* the base ("shoveled up").
- **Plane:** a global rendering order rule; planes are implemented with portals/top-layer APIs.
- **Semantic tier:** the rung in the signed ladder that communicates priority and meaning.

### 2.2 Semantic tiers are not a z-index ladder

The tier number communicates **priority and meaning** (user psychology), not guaranteed draw order. Some UI must render “above” other content for correctness (escaping clipping, global dismissal, portal/top-layer APIs). That physical stacking **does not** change the semantic contract.

**Normative rules**

- **MUST NOT** use `--sem-elevation-*` as a z-index value.
- **MUST NOT** infer semantic tier from physical draw order.
- **MUST** preserve the semantic meaning of layers even when physical stacking differs.
- **MUST** treat Command as the owner of modality (scrim, focus trap, blocked interaction), even if an Overlay renders above it.
- **MUST** apply dismissal precedence: dismiss the topmost Overlay first, then the Command layer (if present).

**Discriminator rules: Overlay vs Floating**

Use these rules when physical appearance could be misread (notably when overlays appear over dialogs).

- Choose **Overlay** when the UI is a **separate transient surface** with its own dismissal semantics (appears/disappears without becoming part of layout).  
  Typical: menus, popovers, autocomplete lists, date pickers, **tooltips**.

- Choose **Floating** when the UI is the **same object** as in the work layer, temporarily lifted for affordance while remaining part of the current task context.  
  Typical: hover lift, “picked-up” cards, **dragged items**.

**Examples (required interpretation)**

- **Tooltip over a dialog:** Tooltip remains **Overlay** (context/help), even when rendered above the dialog. It must not outrank the dialog’s “must respond” semantics; it dismisses first.
- **Dragging while a dialog is present:** The dragged object remains **Floating** (a work object lifted). A drag ghost/preview **MAY** be rendered in a portal/top rendering plane to avoid clipping, but it must not be reclassified as Overlay.

### 2.3 7-tier canonical ladder

CEM defines exactly **7 canonical tiers**. The ladder is signed: two recess rungs, one base rung, and four lift rungs.

> The ladder is designed to be perceptually distinct and implementable across light/dark/contrast themes.

| Signed tier   | Token               | Canonical name    | Intended meaning                    | Typical examples                        |
|--------------:|---------------------|-------------------|-------------------------------------|-----------------------------------------|
|        **−2** | `--cem-recess-2`    | **Deep recessed** | Infrastructure far behind attention | deep shell wells, backstage panels      |
|        **−1** | `--cem-recess-1`    | **Recessed**      | Back layer (context behind work)    | side navigation rail, filter plane      |
|         **0** | `--sem-elevation-0` | **Base**          | Ground / canvas                     | app background, page canvas             |
|        **+1** | `--sem-elevation-1` | **Raised**        | Work region separation              | cards, primary panels, editors          |
|        **+2** | `--sem-elevation-2` | **Floating**      | Interactive lift / grouped focus    | draggable sheets, hover-lift regions    |
|        **+3** | `--sem-elevation-3` | **Overlay**       | Contextual transient layer          | menus, tooltips, popovers, select lists |
|        **+4** | `--sem-elevation-4` | **Command**       | Must respond / modal decision       | dialogs, blocking confirmations         |

**Design intent**

- Recess reduces brand energy and edge energy.
- Lift increases separation via tone, contour, shadow, and space.
- Overlay and Command are implemented as **global planes**; they are not “children” of local layout.

---

## 3. User-flow journey through layering

Layering cues are consumed differently across the flow.

### 3.1 Landing (orient)

- The user identifies **Back vs Work** immediately.
- Recess is used to make scaffolding feel “behind.”

```
[ Back layer ]   |  [ Work layer ]
(nav/context)    |  (primary content)
```

### 3.2 Scanning (compare)

- The user needs separability at speed.
- Work layer regions should be visually grouped (Raised).

### 3.3 Interacting (act)

- Hover/press can use micro-lift/micro-drop without changing layer role.
- Overlay appears for local commands and choices.

### 3.4 Contextualizing (choose)

- Overlays should remain clearly subordinate to the work meaning.
- If an overlay blocks reading or causes ambiguity, it has become a Command.

### 3.5 Deciding (commit)

- Command is the highest semantic priority.
- Scrim and focus trapping communicate that everything else is “not available.”

---

## 4. Design goals

1) **One consumer term:** “layering” is the shared vocabulary.
2) **Signed meaning:** both “dig down” and “lift up” are first-class.
3) **Multiple channels:** tone, contour, shadow, blur/material, space, and motion are coordinated.
4) **Theme resilience:** the ladder works in light/dark/forced-colors.
5) **Avoid false importance:** overlays can render above commands physically, but they must not steal semantic priority.

---

## 5. Signed ladder and planes

Layering is a composition of:

- **Semantic tier** (the signed ladder rung)
- **Plane** (the global rendering order / portal)

### 5.1 Planes

CEM defines five named planes. These are semantic roles; they are typically implemented with portals.

- **Back plane** — recessed context.
- **Base plane** — canvas.
- **Work plane** — primary doing/reading.
- **Overlay plane** — contextual transient UI.
- **Command plane** — modal decisions.

**Normative rules**

- Overlays and commands **MUST** render in global planes to avoid clipping by scroll containers.
- A component’s **semantic tier** is independent of its **rendering plane**.

### 5.2 Physical stacking exceptions are allowed

A tooltip can render above a dialog while remaining an **Overlay-tier** element.

This is not a contradiction; it reflects two truths:

- **Physical topness** is about rendering constraints (portals, clipping, platform APIs).
- **Semantic topness** is about attention and commitment (what the user must respond to).

---

## 6. Token model (basis → endpoints → adapters)

CEM D4 defines three layers of contract.

### 6.1 Basis tokens (rungs)

Basis tokens are the minimal numeric “rungs.” They encode signed tier meaning.

- `--cem-recess-2`
- `--cem-recess-1`
- `--sem-elevation-0`
- `--sem-elevation-1`
- `--sem-elevation-2`
- `--sem-elevation-3`
- `--sem-elevation-4`

### 6.2 Semantic endpoints (product-facing)

Semantic endpoints are what components use. They map to basis rungs.

- `--cem-layer-back`
- `--cem-layer-base`
- `--cem-layer-work`
- `--cem-layer-overlay`
- `--cem-layer-command`

### 6.3 Adapters (appearance channels)

Adapters describe how the rung is rendered:

- tonal shift (color ladder)
- shadow recipe
- contour/stroke reinforcement
- material/blur recipe
- spacing adjustments
- motion/transition recipe

Adapters can vary per theme/density without changing semantics.

---

## 7. Basis tokens: the canonical signed ladder

### 7.1 Required rung tokens

The ladder is required and complete as defined in §2.3.

**Normative rules**

- Themes **MUST** provide values for all 7 rung tokens.
- Themes **MAY** provide intermediate “micro” rungs for animation, but they are not part of the canonical contract.

### 7.2 Appearance-change principle

When moving by one rung, **at least one** of the following must change in a perceivable way (and ideally two in high-density UI):

- **Tone** (surface/container tone, chroma shift)
- **Contour** (stroke/outline, especially in forced-colors)
- **Shadow** (soft separation)
- **Material** (blur/opacity)
- **Space** (inset/gap or breathing room)
- **Motion** (lift/drop transition)

Recess should primarily use **tone and contour** (shadows are often imperceptible “into” the page).

Lift should primarily use **tone + shadow**, with contour as a fallback.

---

## 8. Semantic endpoints: product-facing contract

Semantic endpoints allow components to express layering without knowing numeric rungs.

### 8.1 Canonical endpoints

| Endpoint              | Maps to rung        | Meaning                         |
|-----------------------|---------------------|---------------------------------|
| `--cem-layer-back`    | `--cem-recess-1`    | back layer: context behind work |
| `--cem-layer-base`    | `--sem-elevation-0` | canvas/base                     |
| `--cem-layer-work`    | `--sem-elevation-1` | primary work regions            |
| `--cem-layer-overlay` | `--sem-elevation-3` | contextual transient UI         |
| `--cem-layer-command` | `--sem-elevation-4` | must respond: modal decision    |

> Note: `--sem-elevation-2` (Floating) is most often an **internal component choice** within the Work layer (e.g., a temporary lifted region), not a global plane.

### 8.2 Optional endpoints

Optional endpoints are allowed if they remain stable and scoped.

Examples:

- `--cem-layer-back-deep` → `--cem-recess-2`
- `--cem-layer-work-floating` → `--sem-elevation-2`

---

## 9. Representation channels

Layering cues are multi-channel. No single channel is reliable across all themes.

### 9.1 Tone and the color ladder

Your color ladder is the primary driver of “dig down” vs “lift up.”

**Rules**

- Recess **SHOULD** move toward neutral/gray (less chroma/brand energy).
- Lift **SHOULD** move toward brighter/branded tones (more chroma/energy).
- Tone changes must preserve text contrast; do not “flip” text color unless the rung truly becomes Overlay/Command.

### 9.2 Shadow

- Shadow is a lift cue, not a recess cue.
- Shadow should never be the only separator.

### 9.3 Contour / stroke

Contours substitute for shadow when contrast themes flatten elevation.

- Back and Base layers **SHOULD** have minimal contour.
- Work and above **SHOULD** provide optional contour reinforcement for dense layouts.

### 9.4 Material / blur

Where platform supports it, blur/opacity materials can communicate Overlay.

- Use materials to separate Overlay without excessive tone contrast.

### 9.5 Space (inset and gap)

- Higher semantic priority layers “earn” space.
- Recess can be communicated by reduced padding/visual weight, but never by reducing hit targets.

### 9.6 Motion

- Lift/drop transitions are allowed for state changes (hover, focus) but must not change semantic tier.
- Respect reduced-motion preferences.

---

## 10. Scrim

Scrim communicates modality and commitment.

### 10.1 Scrim usage matrix

| Layer role         | Typical components              | Scrim           | Notes                                                       |
|--------------------|---------------------------------|-----------------|-------------------------------------------------------------|
| Back / Base / Work | nav, content                    | none            | scrim would reduce usability                                |
| Overlay            | menus, popovers, tooltips       | optional (rare) | only if overlay must strongly detach from busy content      |
| Command            | dialogs, blocking confirmations | **required**    | command owns modality, focus trap, and dismissal precedence |

### 10.2 Command owns modality

**Normative rules**

- A Command layer **MUST** own the scrim when present.
- A Command layer **MUST** trap focus.
- Dismissal precedence: **dismiss the topmost Overlay first, then Command**.

---

## 11. Action states align with layering and the color ladder

Action states must align with layering cues and color ladder direction.

### 11.1 Principle

- Passive/degraded states shift “down” (toward recess): less chroma/contrast energy.
- Active/committed states shift “up” (toward lift): clearer separation and attention.

### 11.2 State escalation should not change layer role

A button becoming hovered does not become an Overlay. State changes should be expressed as **micro-shifts** within the component’s assigned layer role.

Recommended mapping (illustrative):

- **Default**: no micro-shift
- **Hover / Focus**: micro-lift within the same layer
- **Pressed**: micro-drop toward base (tactile), but retain salience via tone/contour
- **Selected / Active**: sustained lift and chroma (within role)
- **Disabled / Readonly**: tonal demotion and contour reduction

---

## 12. Cross-dimension coupling

Layering is not independent; it must harmonize with other CEM dimensions.

- **D0 Color:** tonal ladder must agree with recess/lift.
- **D5 Stroke:** forced-colors/high-contrast often requires boundary reinforcement.
- **D3 Shape:** dialogs/overlays should adopt bend roles appropriate to their semantic tier.
- **D1 Space:** higher priority layers earn space; do not compress hit targets.
- **D7 Time:** transitions should signal change of attention without becoming distracting.

---

## 13. Accessibility and forced-colors requirements

- Do not rely on shadow alone to communicate layering.
- Provide focus indicators that remain visible across all tiers.
- In forced-colors mode, contour becomes primary: ensure outlines/borders are present where needed.
- Ensure overlays and commands are reachable and dismissible via keyboard.
- Respect reduced motion.

---

## 14. Component mapping matrix

This matrix maps common component families to semantic endpoints and tiers.

| Component family                   | Endpoint                      | Typical tier  | Notes                                              |
|------------------------------------|-------------------------------|--------------:|----------------------------------------------------|
| App shell (chrome)                 | `--cem-layer-back`            |            −1 | recessed, low brand energy                         |
| Backstage wells                    | optional back-deep            |            −2 | rare; avoid overuse                                |
| Page canvas                        | `--cem-layer-base`            |             0 | base plane                                         |
| Main content panels                | `--cem-layer-work`            |            +1 | default work separation                            |
| Floating affordances (within work) | optional work-floating        |            +2 | local, not global plane                            |
| Tooltip                            | `--cem-layer-overlay`         |            +3 | may portal above dialogs; semantic remains Overlay |
| Menu / popover / select list       | `--cem-layer-overlay`         |            +3 | portal/top-layer; dismiss precedence above dialog  |
| Sheet (non-blocking)               | `--cem-layer-overlay`         |            +3 | consider optional scrim if needed                  |
| Dialog / confirmation              | `--cem-layer-command`         |            +4 | owns modality, scrim, focus trap                   |
| Toast / global banner              | overlay or command by meaning |         +3/+4 | depends on whether it blocks action                |

---

## 15. Implementation guidance

### 15.1 Keep semantics separate from z-index

Use semantic endpoints to select tone/shadow/contour recipes. Use a separate mechanism for stacking:

- Portals/top-layer for overlays and commands
- A bounded set of z-index values per plane

### 15.2 Example CSS pattern (illustrative)

```css
/* Basis rungs */
:root {
  --cem-recess-2:  -2;
  --cem-recess-1:  -1;
  --sem-elevation-0: 0;
  --sem-elevation-1: 1;
  --sem-elevation-2: 2;
  --sem-elevation-3: 3;
  --sem-elevation-4: 4;
}

/* Endpoints */
:root {
  --cem-layer-back:   var(--cem-recess-1);
  --cem-layer-base:   var(--sem-elevation-0);
  --cem-layer-work:   var(--sem-elevation-1);
  --cem-layer-overlay: var(--sem-elevation-3);
  --cem-layer-command: var(--sem-elevation-4);
}

/* BEM-style modifier usage (examples) */
.cem-layer { /* base recipe */ }
.cem-layer--back { /* maps to --cem-layer-back */ }
.cem-layer--work { /* maps to --cem-layer-work */ }
.cem-layer--overlay { /* maps to --cem-layer-overlay */ }
.cem-layer--command { /* maps to --cem-layer-command */ }
```

> The example shows **ordinal tier numbers**. Do not use them as z-index values; use them only to select tone/shadow/contour recipes via your theming layer.

### 15.3 Dismissal and focus precedence

- Escape closes the topmost Overlay first.
- If no overlays remain, escape closes the Command (if allowed).

---

## 16. Canonical token summary

### 16.1 Required rung tokens

- `--cem-recess-2`
- `--cem-recess-1`
- `--sem-elevation-0`
- `--sem-elevation-1`
- `--sem-elevation-2`
- `--sem-elevation-3`
- `--sem-elevation-4`

### 16.2 Required semantic endpoints

- `--cem-layer-back`
- `--cem-layer-base`
- `--cem-layer-work`
- `--cem-layer-overlay`
- `--cem-layer-command`

---

## 17. Governance and versioning

### 17.1 Breaking (major)

Treat as breaking if you:

- Rename or remove any required D4 token in §16.
- Change the semantic meaning of any tier or endpoint.
- Change the canonical ladder size (add/remove a required rung).
- Change the rule that Command owns modality.

### 17.2 Non-breaking (minor/patch)

Treat as minor/patch if you:

- Adjust theme recipes (shadow geometry, tonal values) while preserving meaning.
- Apply density-mode tweaks that preserve layer meaning.
- Add optional endpoints with stable consumer meaning.
- Clarify documentation or add mapping guidance.

---

## 18. Migration notes

This spec is the canonical D4 contract for layering (signed depth). If you previously used other elevation ladders:

- You can keep legacy tokens as internal aliases.
- Prefer `--sem-elevation-*` and `--cem-recess-*` as the public CEM contract going forward.

---

## 19. References

**Internal**
- CEM theme discussion: action states in visual priority order.

**External (concept alignment)**
- Material Backdrop (back layer / front layer concept).
- Material 3 elevation (shadow + tonal approaches).
- Fluent 2 elevation (z-axis hierarchy and prominence).
- Apple HIG materials and overlays (depth via materials; popovers/sheets).
- Atlassian elevation/z-index guidance (separating visual elevation from stacking order).
