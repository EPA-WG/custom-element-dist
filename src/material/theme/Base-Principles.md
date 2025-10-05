# Principles for Color & Outline‑Based Action Separation

> Scope: applies to components styled by `consumer-theme.css` following guidance in `src/material/theme/README.md`. States follow the `cem-action-state` listing from `src/material/theme/theme-data.xhtml`.

## 1) Goals

* **Separation of concerns**: use **background color** for non-outline states; use **outline zebra** for **selection-, focus-, and target-intent**.
* **Theming-first**: variables map cleanly across `Native`, `Light`, `Dark`, `contrast-light`, `contrast-dark`.
* **System-aware**: in the `Native` theme, prefer system colors (`SelectedItem`, `SelectedItemText`, `Canvas`, `CanvasText`).
* **Accessible by default**: stripe contrast ≥ 3:1 at 1px/45° (or ≥ 4.5:1 for 2+ px optical width) against the adjacent stripe.
* **Non-invasive**: outlines never occlude content; backgrounds never mimic zebra for the three outline states.

## 2) State Model

* **Background-driven**: `default`, `hover`, `active`, `pending`, `disabled`.
* **Outline-driven (zebra)**: `selected`, `focused`, `target`.
* **Pending** uses **animated background**; outline, if present, remains the outline style for the corresponding intent.

### 2.1 `cem-action-state` map (exact list from `theme-data.xhtml`)

| `cem-action-state` | Tokens                    | Complimentary token | Description                                         |
| ------------------ | ------------------------- | ------------------- | --------------------------------------------------- |
| disabled           | color font marker         | color-text          | Disabled — greyed out                               |
| readonly           | color outline font marker | color-text          | Readonly — underline grayed in Material Design      |
| editable           | color outline font marker | color-text          | Editable — underlined in Material Design            |
| required           | outline font marker       | color-text          | Required — often marked by star                     |
| default            | color outline font marker | color-text          | Default — baseline state (outlined or underlined)   |
| indeterminate      | color outline font marker | color-text          | Indeterminate — partial/"select all" checkbox state |
| target             | outline font marker       | color-text          | Target — element pointed by URL                     |
| focus              | outline font marker       | color-text          | Focus — input focus outline                         |
| hover              | color outline font marker | color-text          | Hover — keyboard navigation highlight               |
| selected           | color font marker         | color-text          | Selected — menu/radio checked                       |
| active             | color outline font marker | color-text          | Active — pressed, darkest background emphasis       |
| pending            | color outline font marker | color-text          | Pending — after active, action in progress          |

**Rule of thumb**

* Only `selected`, `focused`, and `target` use the **zebra-outline** driver across themes.
* All other states are **background-driven**; in `contrast-*` modes, backgrounds are neutralized and stripes take over state signaling (see §4.4).

## 3) Visual Language

### 3.1 Background (non-outline states)

* Tokens (example names used below):

  * `--cem-action-explicit-default-background`
  * `--cem-action-explicit-hover-background`
  * `--cem-action-explicit-active-background`
  * `--cem-action-disabled-background`
  * Semantic overlays (optional): `--cem-palette-comfort` (base surface), `--cem-palette-calm`, etc.

### 3.2 Outline Zebra (selection/focus/target)

* Zebra is a **striped outline** drawn outside the element box. It would use a zebra strip with own color for `selected`, `focused`, `target` (and base color for contrast theme), 3 and 4 strips accordingly. 
* when zebra is not applicable, the action shown with 3D border look matching the button in browser. This border is reactive to the hover and active states. On hover widening the border outline and on press inverting the shadow direction.
* **Parameters** (per state, per theme):

  * `--cem-zebra-strip-size`: 2 px. Recommended **2px** normal density; **1px** in compact UIs; ? **4px** for focus-visible.
  * `--cem-zebra-color-1` , 2, 3, 4 the interleaving colors.

     

> Implementation note: in default implementation the outline is implemented by `box-shadow`; Otherwise realize zebra outline via an **outline + border-image** or **mask‑composited pseudo-element** to keep backgrounds independent:

* Use `::after` positioned as an **outer ring** (via negative spread) and `mask: conic-gradient(...)` or `background: repeating-linear-gradient(...)`.
* Keep `pointer-events: none;` and respect `outline-offset`.

### 3.3 Required Marker (required)

uses a prefix/suffix marker like `*` (no zebra/background changes) with tokens and CSS hooks.

### 3.4 Animated or image background (pending)

**animated** or **image** backgrounds for temporary unavailable state like uploading in progress.

---

## 4) Theme Recipes

Below are **per-theme stripe characteristics**. Each block defines **selected**, **focused**, and **target** zebra parameters, plus background mapping for other states. Variables reference either system colors or design tokens.

### 4.1 Native

**Intent**: honor OS/browser selection & canvas colors.

* **Focused (zebra)**

  * `--cem-zebra-color-1: CanvasText;` focus-visible
  * `--cem-zebra-color-1: Canvas;` unfocused

* **Selected (zebra)**

  * `--cem-zebra-color-2: SelectedItem;` selected
  * `--cem-zebra-color-2: SelectedItemText;` unselected

* **Target (zebra)**

  * `--cem-zebra-color-3: SelectedItem;` marked by URL #
  * `--cem-zebra-color-3: Canvas;` not marked

* **Background states**

  * `default`: `--cem-palette-comfort` over `Canvas`.
  * `hover`: slightly raised mix of comfort vs. accent (≥ 1.2× contrast vs default).
  * `active`: darken by ~8–12% from hover.
  * `pending`: **animated** (see §5) over the current background.
  * `disabled`: reduce chroma + set text to `GrayText`; maintain ≥ 3:1 against surface.

**Fallbacks**: when system colors unavailable, map to tokens:

* `SelectedItem → var(--cem-accent-600)`; `SelectedItemText → var(--cem-ink-on-accent)`
* `Canvas → var(--cem-surface)`; `CanvasText → var(--cem-ink-strong)`

---

### 4.2 Light, Dark (emotional palette backgrounds)

**Intent**: use emotional palette base and extreme tokens for background-driven states. Text tokens flip (`*-text-x`) when contrast requires.

* **Focused (zebra)**

  * `--cem-zebra-color-1: var(--cem-palette-comfort-text, CanvasText)`  focus-visible
  * `--cem-zebra-color-1: var(--cem-invisible, --cem-palette-comfort)` unfocused

* **Selected (zebra)**

  * `--cem-zebra-color-2: var(--cem-palette-trust, SelectedItem)` selected, blue
  * `--cem-zebra-color-2: var(--cem-invisible, --cem-palette-comfort)` unselected, invisible

* **Target (zebra)**

  * `--cem-zebra-color-3: var(--cem-palette-enthusiasm, SelectedItem)` marked by URL #
  * `--cem-zebra-color-3: var(--cem-invisible, --cem-palette-comfort)` unfocused

* **Background states**

  total 7 background-bound states: default and 3 states bellow and above.

  From `disabled` toward `default` ( 3 states ) the conservative variation via `color-mix` goes towards base emotional color
  ***disabled*** color-mix(in srgb, var(--cem-palette-conservative    ) 30%, var(--cem-palette-conservative-x ))
  **readonly** color-mix(in srgb, var(--cem-palette-creativity      ) 80%, var(--cem-palette-creativity-x  ))
  **editable** color-mix(in srgb, var(--cem-palette-creativity     ) 90%, var(--cem-palette-creativity-x   ))
  ***default*** var(--cem-palette-creativity )\


  From `default` toward `active` (3 states) the colors intensify by `color-mix` and percent toward extreme variation on same emotional palette color.
  ***default*** var(--cem-palette-creativity  )
  ***indeterminate*** : color-mix(in srgb, var(--cem-palette-creativity     ) 90%, var(--cem-palette-creativity-x   ))
  ***hover***  color-mix(in srgb, var(--cem-palette-creativity ) 70%, var(--cem-palette-creativity-x ))
  ***active*** color-mix(in srgb, var(--cem-palette-creativity   ) 5%, var(--cem-palette-creativity-x   ))\

> Note: `*-text-x` tokens invert automatically if background contrast falls below threshold (too dark in light theme or too light in dark theme).

---

### 4.3 Dark

uses same tokens from emotional palette. The light and dark values are provided by `light-dark` CSS function over branded palette color `xl` and `xd` variations ( extra light and extra dark )\

```
--cem-palette-comfort: light-dark(var(--cem-color-cyan-xl), var(--cem-color-cyan-xd))
```

The switch is done by the system or enforced by css rules

```
color-scheme: light;
color-scheme: dark;
```

 

### 4.4 High Contrast — `contrast-light` & `contrast-dark`

**Intent**: replace **all backgrounds** with zebra for state signaling; base surface remains `--cem-palette-comfort` (or `Canvas` in Native-like HC). The **main zebra stripe should match the *****************************************************************default***************************************************************** background** (e.g., `--cem-action-explicit-default-background`) to preserve color semantics.

> Rule: **Backgrounds become neutral surface**, stripes carry intent.

`--cem-zebra-color-1` would match the intent base color and variations as in background for light/dark theme.
other `--cem-zebra-color-x` would be shifted by 1 zebra stripes of base palettes.
I.e. `--cem-zebra-color-2` selected, `--cem-zebra-color-3` focus, `--cem-zebra-color-3` target.

**contrast-light**

* Base surface: `--cem-palette-comfort` (or `Canvas`).
* For **all states**:

  * `--cem-hc-zebra-main: var(--cem-action-explicit-default-background);`
  * `--cem-hc-zebra-alt: var(--cem-ink-strong);` (ensures ≥ 7:1 against surface)
  * Apply zebra to **outline**; **suppress background color** to base surface.

**contrast-dark**

* Base surface: dark comfort: `--cem-palette-comfort-dark` (or `Canvas` under forced colors).
* For **all states**:

  * `--cem-hc-zebra-main: var(--cem-action-explicit-default-background-dark);`
  * `--cem-hc-zebra-alt: var(--cem-ink-on-surface);` (ensures ≥ 7:1)

**State differentiation in HC** (applies to both light/dark):

* **selected**: thicker outline (**+1px**).
* **focused**: keep size 8px, colors `Canvas`/`CanvasText` when available; otherwise `main/alt` with reduced motion.
* **target**: pulse opacity of zebra (not movement) for 1–2s when revealed.
* **hover/active**: adjust **stripe duty** (hover: 0.4, active: 0.6) rather than background.
* **pending**: animate **phase shift** of zebra (see §5) instead of background fill.

---

## 5) Pending State Animation (background‑based)

* Pattern: `repeating-linear-gradient(var(--cem-pending-angle, 45deg), color-stop-1, color-stop-1 <duty*size>, color-stop-2 0, color-stop-2 <size>)`.
* Colors: `--cem-pending-color-1` / `--cem-pending-color-2` chosen from the action’s default bg ± contrast bump.
* Motion: translate background position **120–160% per 2s** (prefers-reduced-motion: reduce to 10% and stop on focus).
* Ensure **outline zebra remains visible** above the animated background (z-index layering through pseudo-element ordering).

---

## 6) CSS Reference Snippets

### 6.1 Zebra Outline via Pseudo‑Element

```css
.cem-outline-zebra {
  position: relative;
  outline: none; /* avoid double rings */
}
.cem-outline-zebra::after {
  content: "";
  position: absolute;
  inset: calc(-1 * var(--cem-zebra-thickness, 3px));
  border-radius: calc(var(--cem-zebra-radius, 8px) + var(--cem-zebra-thickness, 3px));
  pointer-events: none;
  background:
    repeating-linear-gradient(
      var(--cem-zebra-angle,45deg),
      var(--cem-zebra-color-1, Canvas), 0,
      var(--cem-zebra-color-1, Canvas) calc(var(--cem-zebra-size,6px) * var(--cem-zebra-duty,.5)),
      var(--cem-zebra-color-2, CanvasText) 0,
      var(--cem-zebra-color-2, CanvasText) var(--cem-zebra-size,6px)
    );
  -webkit-mask:
    radial-gradient(circle, transparent calc(100% - var(--cem-zebra-thickness,3px)), black 0);
          mask:
    radial-gradient(circle, transparent calc(100% - var(--cem-zebra-thickness,3px)), black 0);
}
```

### 6.2 Pending Background Animation

```css
.cem-pending {
  --cem-pending-color-1: color-mix(in oklab, var(--cem-action-explicit-default-background), black 6%);
  --cem-pending-color-2: color-mix(in oklab, var(--cem-action-explicit-default-background), white 6%);
  background:
    repeating-linear-gradient(
      var(--cem-pending-angle, 45deg),
      var(--cem-pending-color-1), 0,
      var(--cem-pending-color-1) 8px,
      var(--cem-pending-color-2) 0,
      var(--cem-pending-color-2) 16px
    );
  background-size: 200% 200%;
  animation: cem-pending-shift 2s linear infinite;
}
@media (prefers-reduced-motion: reduce) {
  .cem-pending { animation: none; }
}
@keyframes cem-pending-shift {
  to { background-position: 160% 0; }
}
```

### 6.3 High‑Contrast Forcing

```css
.cem-contrast { /* toggled for contrast-light or contrast-dark */
  --cem-surface: var(--cem-palette-comfort, Canvas);
  background: var(--cem-surface) !important; /* backgrounds neutralized */
}
.cem-contrast.cem-outline-zebra::after {
  --cem-zebra-color-1: var(--cem-hc-zebra-main);
  --cem-zebra-color-2: var(--cem-hc-zebra-alt);
  --cem-zebra-thickness: 4px;
}
```

---

## 7) Accessibility & QA

* Confirm **adjacent-stripe contrast** (WCAG 2.2) and **text vs. base surface**.
* Support **forced-colors**: map stripe tokens to `SelectedItem`/`SelectedItemText`/`Canvas`/`CanvasText` where possible.
* Respect `` to prevent clipping in dense layouts.
* Provide **RTL-aware angle**: flip to `-45deg` under `:dir(rtl)`.
* Provide **token fallbacks** for legacy browsers.

---

## 8) Token Summary (suggested)

```css
:root {
  /* Base */
  --cem-surface: Canvas;
  --cem-ink-strong: CanvasText;
  --cem-accent-600: #2a7af7; /* example */
  --cem-ink-on-accent: white;
  --cem-action-explicit-default-background: #e8f0fe;
  --cem-action-explicit-default-background-dark: #14325f;

  /* Zebra defaults */
  --cem-zebra-angle: 45deg;
  --cem-zebra-size: 6px;
  --cem-zebra-duty: .5;
  --cem-zebra-thickness: 3px;
}
```

---

## 9) Migration Notes for `consumer-theme.css`

* Apply `.cem-outline-zebra` to components requiring `selected`, `focused`, `target` rings.
* Set tokens per theme scope (`.cem-theme-native`, `.cem-theme-light`, `.cem-theme-dark`, `.cem-theme-contrast-light`, `.cem-theme-contrast-dark`).
* Ensure `pending` keeps animated background while preserving zebra outline on top (pseudo-element stacking index).

---

**Outcome**: States are unambiguous: **color fills** for general interaction; **zebra outlines** for selection/focus/targets; **HC modes** rely solely on zebra for state signaling while base surfaces remain constant.

## 10) Source of truth

The declarative schema is defined in `theme-data.xhtml` file. It is translated to css by `theme-generate.html` into `consumer-theme.css` CLI TBD.
