# Semantic Theming Fonts in Typography (CEM) — 2025 Revision

> Replacement for the 2020 article. This revision focuses on **consumer-flow purpose** (what the user is trying to do) and **semantic meaning** (what the content *is*), and translates that into **fontography** and **typography** tokens that can be used consistently across products.

---

## 1. Problem statement

Typography is a high-leverage part of semantic theming: it shapes comprehension, scanning efficiency, and decision-making. Yet most systems treat it as “choose a font and a scale.” In consumer-facing products, this is insufficient.

We need a **semantic** way to express typography so that:

- The same user intent produces the same typographic behavior across the product.
- Tokens are understandable by *consumers of a design system* (engineers, designers, product owners).
- Tokens remain stable even when brands change (typefaces can change without changing intent).

---

## 2. CEM lens: consumer flow and meaning

Typography decisions should be driven by two orthogonal dimensions:

1) **Consumer flow purpose** — what the user is doing at that moment:

- **Orient / Navigate** (find where you are)
- **Scan / Compare** (quickly evaluate options and differences)
- **Read / Learn** (sustained comprehension)
- **Act** (commit an action: click, submit, approve)
- **Confirm / Reflect** (understand results, status, and next steps)

2) **Semantic meaning of content** — what the content *is*:

- **Reading** (prose, explanations)
- **Script** (code, commands)
- **Initialism** (acronyms, avatar initials)
- **Iconized** (letter-as-icon)
- **Tag** (labels and compact descriptors)
- **Data** (numbers, measurements, identifiers)

The 2020 set covered the first five categories; this revision adds **Data**, because consumer “scan/compare/decide” flows rely heavily on numeric alignment and stable rendering.

---

## 3. Definitions

### 3.1 Fontography vs Typography

- **Fontography tokens** describe the *font assets* and their feature policies.
  - Families, fallbacks, optical sizing, ligature policy, numeric features.

- **Typography tokens** describe how text is *laid out and perceived*.
  - Size scale, line height, letter spacing, casing rules, measure (line length), paragraph rhythm.

The critical rule: **fontography tokens rarely change**; typography tokens change by layout and density.

---

## 4. Principles

### P1. Semantic intent first
Tokens should communicate intent (reading, data, tag) rather than implementation details (Roboto 14px).

### P2. Bounded variation
Humans recognize a limited number of distinct variations reliably. Prefer a compact set (e.g., 7 steps) for weight, size, and spacing.

### P3. Accessibility by construction
Default tokens must work with user scaling and accessibility settings.
- Use `rem` for sizing.
- Preserve readable line-height for prose.
- Avoid micro text for critical content.

### P4. Internationalization and fallback are first-class
A semantic role must behave consistently across languages and glyph coverage.

### P5. Data is a distinct semantic
Numbers and identifiers require predictable alignment and glyph selection.

---

## 5. Token model

### 5.1 Token groups

1) **Font families (semantic aliases)**
2) **Font weight scale (bounded)**
3) **Size scale (bounded)**
4) **Line-height scale (role-based)**
5) **Tracking/casing policies**
6) **Feature policies** (numerics, ligatures, optical sizing)
7) **Reading ergonomics** (measure and paragraph rhythm)

### 5.2 Canonical tokens (CSS custom properties)

> These values are safe defaults. Brands override families first; products override density next.

```css
:root {
  /* =========================
   * 1) Fontography — semantic families
   * (consumer meaning first)
   * ========================= */

  /* Long-form reading / comprehension */
  --cem-fontography-reading-family:
    "Roboto","Source Sans Pro",
    system-ui,-apple-system,"Segoe UI","Helvetica Neue",Arial,
    "Noto Sans","Liberation Sans",sans-serif;

  /* UI labels / navigation / compact scanning */
  --cem-fontography-ui-family:
    var(--cem-fontography-reading-family);

  /* Code / scripts */
  --cem-fontography-script-family:
    ui-monospace,"SFMono-Regular",Menlo,Monaco,Consolas,
    "Liberation Mono","Courier New","Noto Sans Mono",monospace;

  /* Initialism / condensed emphasis (optional override) */
  --cem-fontography-initialism-family:
    "Barlow Semi Condensed","Roboto Condensed",
    var(--cem-fontography-ui-family);

  /* Brand / display (optional; alias until a brand face is chosen) */
  --cem-fontography-brand-family:
    var(--cem-fontography-reading-family);


  /* =========================
   * 2) Thickness — 7-step bounded scale
   * (aligns with theme-data.xhtml “Thickness” concept)
   * ========================= */
  --cem-thickness-xx-light: 100;
  --cem-thickness-x-light:  200;
  --cem-thickness-light:    300;
  --cem-thickness-normal:   400;
  --cem-thickness-bold:     700;
  --cem-thickness-x-bold:   800;
  --cem-thickness-xx-bold:  900;


  /* =========================
   * 3) Typography — 7-step size scale (rem-based)
   * ========================= */
  --cem-typography-size-xxs: 0.75rem;
  --cem-typography-size-xs:  0.8125rem;
  --cem-typography-size-s:   0.875rem;
  --cem-typography-size-m:   1rem;
  --cem-typography-size-l:   1.125rem;
  --cem-typography-size-xl:  1.375rem;
  --cem-typography-size-xxl: 1.75rem;


  /* =========================
   * 4) Typography — line-height primitives
   * ========================= */
  --cem-typography-line-height-reading: 1.55;
  --cem-typography-line-height-ui:      1.2;
  --cem-typography-line-height-script:  1.4;
  --cem-typography-line-height-badge:   1;


  /* =========================
   * 5) Typography — tracking / casing primitives
   * ========================= */
  --cem-typography-letter-spacing-reading: normal;
  --cem-typography-letter-spacing-ui:      0.01em;
  --cem-typography-letter-spacing-caps:    0.08em;


  /* =========================
   * 6) Typography — feature policies
   * ========================= */
  --cem-typography-feature-numeric-data: tabular-nums lining-nums;
  --cem-typography-feature-ligatures-script: none;
  --cem-typography-feature-optical-sizing: auto;


  /* =========================
   * 7) Typography — reading ergonomics
   * ========================= */
  --cem-typography-reading-measure-max: 65ch;
  --cem-typography-reading-paragraph-gap: 0.75em;


  /* =========================
   * Semantic endpoints
   * (consumer meaning visible at the front of the name)
   * ========================= */

  /* Reading */
  --cem-typography-reading-font-family: var(--cem-fontography-reading-family);
  --cem-typography-reading-font-size: var(--cem-typography-size-m);
  --cem-typography-reading-line-height: var(--cem-typography-line-height-reading);
  --cem-typography-reading-letter-spacing: var(--cem-typography-letter-spacing-reading);
  --cem-typography-reading-font-weight: var(--cem-thickness-normal);

  /* UI */
  --cem-typography-ui-font-family: var(--cem-fontography-ui-family);
  --cem-typography-ui-font-size: var(--cem-typography-size-m);
  --cem-typography-ui-line-height: var(--cem-typography-line-height-ui);
  --cem-typography-ui-letter-spacing: var(--cem-typography-letter-spacing-ui);
  --cem-typography-ui-font-weight: var(--cem-thickness-normal);

  /* Tag */
  --cem-typography-tag-font-family: var(--cem-fontography-ui-family);
  --cem-typography-tag-font-size: var(--cem-typography-size-s);
  --cem-typography-tag-line-height: var(--cem-typography-line-height-ui);
  --cem-typography-tag-letter-spacing: var(--cem-typography-letter-spacing-ui);
  --cem-typography-tag-font-weight: var(--cem-thickness-bold);

  /* Script */
  --cem-typography-script-font-family: var(--cem-fontography-script-family);
  --cem-typography-script-font-size: var(--cem-typography-size-s);
  --cem-typography-script-line-height: var(--cem-typography-line-height-script);
  --cem-typography-script-letter-spacing: normal;
  --cem-typography-script-font-weight: var(--cem-thickness-normal);
  --cem-typography-script-font-variant-ligatures: var(--cem-typography-feature-ligatures-script);

  /* Data */
  --cem-typography-data-font-family: var(--cem-fontography-ui-family);
  --cem-typography-data-font-size: var(--cem-typography-size-m);
  --cem-typography-data-line-height: var(--cem-typography-line-height-ui);
  --cem-typography-data-letter-spacing: var(--cem-typography-letter-spacing-ui);
  --cem-typography-data-font-weight: var(--cem-thickness-normal);
  --cem-typography-data-font-variant-numeric: var(--cem-typography-feature-numeric-data);

  /* Initialism */
  --cem-typography-initialism-font-family: var(--cem-fontography-initialism-family);
  --cem-typography-initialism-font-size: var(--cem-typography-size-s);
  --cem-typography-initialism-line-height: var(--cem-typography-line-height-badge);
  --cem-typography-initialism-letter-spacing: var(--cem-typography-letter-spacing-caps);
  --cem-typography-initialism-font-weight: var(--cem-thickness-bold);
  --cem-typography-initialism-text-transform: uppercase;

  /* Iconized */
  --cem-typography-iconized-font-family: var(--cem-fontography-initialism-family);
  --cem-typography-iconized-font-size: calc(var(--cem-typography-size-m) * 2);
  --cem-typography-iconized-line-height: var(--cem-typography-line-height-badge);
  --cem-typography-iconized-letter-spacing: var(--cem-typography-letter-spacing-caps);
  --cem-typography-iconized-font-weight: var(--cem-thickness-x-bold);
  --cem-typography-iconized-text-transform: uppercase;

  /* Brand / Display */
  --cem-typography-brand-font-family: var(--cem-fontography-brand-family);
  --cem-typography-brand-font-size: var(--cem-typography-size-xxl);
  --cem-typography-brand-line-height: 1.1;
  --cem-typography-brand-letter-spacing: normal;
  --cem-typography-brand-font-weight: var(--cem-thickness-x-bold);
}
```

---

## 6. Semantic typography roles

This section defines *what developers apply*. Each role is a stable semantic endpoint, with minimal knobs.

> Naming guideline: roles should describe **meaning/purpose**, not placement. Prefer `reading`, `data`, `tag` over `body2`, `subtitle`.

### 6.1 Reading

Used for:
- explanations, help text, descriptions, articles, long content

Behavior:

```css
.cem-typography-reading {
  font-family: var(--cem-typography-reading-font-family);
  font-size: var(--cem-typography-reading-font-size);
  line-height: var(--cem-typography-reading-line-height);
  letter-spacing: var(--cem-typography-reading-letter-spacing);
  font-weight: var(--cem-typography-reading-font-weight);

  font-optical-sizing: var(--cem-typography-feature-optical-sizing);
  max-inline-size: var(--cem-typography-reading-measure-max);
}

.cem-typography-reading p {
  margin-block: 0 var(--cem-typography-reading-paragraph-gap);
}
```

### 6.2 UI (scan/navigate)

Used for:
- navigation, button labels, form labels, menus, secondary text

Behavior:

```css
.cem-typography-ui {
  font-family: var(--cem-typography-ui-font-family);
  font-size: var(--cem-typography-ui-font-size);
  line-height: var(--cem-typography-ui-line-height);
  letter-spacing: var(--cem-typography-ui-letter-spacing);
  font-weight: var(--cem-typography-ui-font-weight);

  font-optical-sizing: var(--cem-typography-feature-optical-sizing);
}
```

### 6.3 Tag

Used for:
- compact labels, chips, metadata, status tags

Behavior:

```css
.cem-typography-tag {
  font-family: var(--cem-typography-tag-font-family);
  font-size: var(--cem-typography-tag-font-size);
  line-height: var(--cem-typography-tag-line-height);
  letter-spacing: var(--cem-typography-tag-letter-spacing);
  font-weight: var(--cem-typography-tag-font-weight);
}
```

### 6.4 Script

Used for:
- code blocks, commands, identifiers that must be copy-safe

Behavior:

```css
.cem-typography-script {
  font-family: var(--cem-typography-script-font-family);
  font-size: var(--cem-typography-script-font-size);
  line-height: var(--cem-typography-script-line-height);
  letter-spacing: var(--cem-typography-script-letter-spacing);
  font-weight: var(--cem-typography-script-font-weight);

  font-variant-ligatures: var(--cem-typography-script-font-variant-ligatures);
}
```

### 6.5 Data (new)

Used for:
- numbers in tables, prices, measurements, timestamps, IDs

Reason:
- numeric alignment is crucial in scan/compare flows; use **tabular numerals**.

Behavior:

```css
.cem-typography-data {
  font-family: var(--cem-typography-data-font-family);
  font-size: var(--cem-typography-data-font-size);
  line-height: var(--cem-typography-data-line-height);
  letter-spacing: var(--cem-typography-data-letter-spacing);
  font-weight: var(--cem-typography-data-font-weight);

  font-variant-numeric: var(--cem-typography-data-font-variant-numeric);
}
```

### 6.6 Initialism

Used for:
- acronyms, avatar initials, short codes meant to be “badge-like”

Behavior:

```css
.cem-typography-initialism {
  font-family: var(--cem-typography-initialism-font-family);
  font-size: var(--cem-typography-initialism-font-size);
  line-height: var(--cem-typography-initialism-line-height);
  letter-spacing: var(--cem-typography-initialism-letter-spacing);
  font-weight: var(--cem-typography-initialism-font-weight);

  text-transform: var(--cem-typography-initialism-text-transform);
}
```

### 6.7 Iconized

Used for:
- letter-as-icon (monograms, single-letter pictograms)

Behavior:

```css
.cem-typography-iconized {
  font-family: var(--cem-typography-iconized-font-family);
  font-size: var(--cem-typography-iconized-font-size);
  line-height: var(--cem-typography-iconized-line-height);
  letter-spacing: var(--cem-typography-iconized-letter-spacing);
  font-weight: var(--cem-typography-iconized-font-weight);

  text-transform: var(--cem-typography-iconized-text-transform);
}
```

### 6.8 Brand / Display (optional)

Used for:
- marketing headers, hero blocks, brand moments

Behavior:

```css
.cem-typography-brand {
  font-family: var(--cem-typography-brand-font-family);
  font-size: var(--cem-typography-brand-font-size);
  line-height: var(--cem-typography-brand-line-height);
  letter-spacing: var(--cem-typography-brand-letter-spacing);
  font-weight: var(--cem-typography-brand-font-weight);
}
```

---

## 7. Consumer-flow mapping (how to choose roles)

Use this table as a decision shortcut.

| Consumer flow purpose | Dominant typography role(s) |
|---|---|
| Orient / Navigate | UI, Tag, Initialism |
| Scan / Compare | Data, UI, Tag |
| Read / Learn | Reading |
| Act | UI (often bold), Tag (when actions are chip-like) |
| Confirm / Reflect | Reading (explanations), Data (metrics), Tag (status) |

---

## 8. Density and accessibility modes

Typography must respond to accessibility settings and product density.

### 8.1 Density tokens (optional extension)

If you need an explicit density switch, add one semantic knob:

```css
:root {
  --cem-typography-density: comfortable; /* compact | comfortable */
}
```

In compact density, prefer smaller sizes for UI and tags while keeping Reading stable.

### 8.2 Minimums

- Keep critical UI actions at `1rem`.
- Avoid reducing Reading line-height below `1.45`.
- Use `rem` so user scaling works.

---

## 9. Internationalization and fallback

Semantic tokens must include fallback coverage.

Guidelines:

- Always include a broad Unicode fallback (e.g., Noto Sans / Noto Sans Mono).
- Prefer font stacks that preserve x-height and metrics consistency.
- Validate all semantic roles on the languages you ship.

---

## 10. Practical implementation notes

### 10.1 Design tokens vs component tokens

- **Design tokens** define the semantic roles (this document).
- **Component tokens** map roles onto components (e.g., Button label uses UI; Table cells use Data).

### 10.2 Don’t over-tokenize

Start with these semantic roles:
- Reading
- UI
- Tag
- Data
- Script
- Initialism

Add Brand/Iconized only when a real use-case exists.

---

## 11. Summary

This revision replaces the “typography as style” mindset with **typography as semantics**:

- Semantic fontography families provide stable intent-driven aliases.
- Typography tokens define bounded, accessible, i18n-friendly behavior.
- A new **Data** semantic completes the consumer scan/compare flow.

The result is a token set that stays understandable to consumers of the design system and stable across brand changes.

