# Theme Metadata Documentation Plan for theme-data.xhtml

## Overview
This plan outlines the tasks needed to fill out the theme metadata in `theme-data.xhtml` based on the existing 
implementation in `consumer-theme.css`, documentation in `README.md`, and principles in `Base-Principles.md`.

---

## Phase 1: Document Branded Palette Colors

### 1.1 Add Branded Color Definitions
- [x] Document all `--cem-color-*` tokens with their variants (xl, l, d, xd)
  - Cyan family (cyan-xl, cyan-l, cyan-d, cyan-xd)
  - Blue family (blue-xl, blue-l, blue-d, blue-xd)
  - Red family (red-xl, red-l, red-d, red-xd)
  - Purple family (purple-xl, purple-l, purple-d, purple-xd)
  - Orange family (orange-xl, orange-l, orange-d, orange-xd)
  - Brown family (brown-xl, brown-l, brown-d, brown-xd)
  - Grey family (grey-l, grey-d)

### 1.2 Map Branded Colors to Material Design
- [x] Add mapping table showing correspondence with Angular Material color tokens
- [x] Document the hex values for each branded color
- [x] Include notes about brightness levels (xl=extra light, l=light, d=dark, xd=extra dark)

---

## Phase 2: Expand Emotional Palette Documentation

### 2.1 Add Emotional Palette Variations
- [x] Document base emotional tokens with their `-text`, `-x`, and `-text-x` variants
  - `--cem-palette-comfort` and variants
  - `--cem-palette-calm` and variants
  - `--cem-palette-trust` and variants
  - `--cem-palette-danger` and variants
  - `--cem-palette-creativity` and variants
  - `--cem-palette-enthusiasm` and variants
  - `--cem-palette-conservative` and variants

### 2.2 Document Light-Dark Behavior
- [x] Explain `light-dark()` CSS function usage
- [x] Document how tokens automatically switch between light and dark themes
- [x] Add examples of color transitions across themes

### 2.3 Map Emotional to Branded Colors
- [x] Create comprehensive mapping showing which branded colors are used for each emotional token
- [x] Document the color-mix formulas used for state variations

---

## Phase 3: Document Action Intent Token System

### 3.1 Expand Action Intent Documentation
- [x] Add detailed descriptions for each intent:
  - `explicit` - user explicitly/intentionally clicks or activates
  - `primary` - default, confirmatory, implicit (triggered by ENTER)
  - `contextual` - integrated within a specific context (toolbar/menu)
  - `alternate` - triggering not usual alternative flow
  - `destructive` - risky, potentially harmful, requires caution

### 3.2 Document Intent-to-Emotion Mapping
- [x] Map each action intent to its emotional palette color:
  - explicit → creativity (purple)
  - primary → trust (blue)
  - contextual → comfort (cyan/white)
  - alternate → enthusiasm (orange/yellow)
  - destructive → danger (red)

---

## Phase 4: Complete Action State Documentation

### 4.1 Add CSS Variable Tokens for All States
For each combination of (intent × state), document:
- [x] Background token: `--cem-action-{intent}-{state}-background`
- [x] Text token: `--cem-action-{intent}-{state}-text`
- [x] Which tokens have values vs. which are intentionally undefined

### 4.2 Document State Sequences
- [x] Create visual/textual representation of state progression:
  ```
  disabled → readonly → editable → default → indeterminate → hover → active → pending
  (30% mix)  (80% mix)  (90% mix)  (base)    (90% mix)        (60-70% mix) (25% mix) (5% mix)
  ```

### 4.3 Document Zebra Outline States
- [x] Explain which states use zebra outlines (selected, focused, target)
- [x] Document zebra color tokens (`--cem-zebra-color-0`, `--cem-zebra-color-1`, etc.)
- [x] Add examples of zebra outline patterns

---

## Phase 5: Document Theme Variants

### 5.1 Native Theme
- [x] Document system color mappings:
  - Canvas, CanvasText, Highlight, HighlightText, etc.
- [x] Explain fallback behavior when system colors unavailable
- [x] Document forced-colors mode support

### 5.2 Light and Dark Themes
- [x] Document color-scheme declarations
- [x] Explain automatic switching via `light-dark()`
- [x] Add examples of theme-specific overrides

### 5.3 Contrast Themes (contrast-light, contrast-dark)
- [x] Document neutralized backgrounds principle
- [x] Explain zebra-only state signaling
- [x] Document 4-strip zebra pattern (vs 3-strip in normal themes)
- [x] Add notes about increased outline thickness

---

## Phase 6: Document Dimensional Tokens

### 6.1 Bend/Border-Radius Tokens
- [x] Document `--cem-bend` token system:
  - `--cem-bend-smooth` (0.5rem)
  - `--cem-bend-round` (50cqh)
  - `--cem-bend-sharp` (0)
- [x] Add examples showing different corner styles

### 6.2 Box Shadow Tokens
- [x] Document shadow tokens for each state:
  - `--cem-action-box-shadow` (default)
  - `--cem-action-box-shadow-hover`
  - `--cem-action-box-shadow-active`
  - `--cem-action-box-shadow-pending`
- [x] Explain contrast theme shadow overrides (zebra-based)

### 6.3 Thickness/Font-Weight Mapping
- [x] Document 7 thickness levels from README.md:
  - xx-light (100), x-light (200), light (300), normal (400), bold (700), x-bold (800), xx-bold (900)

---

## Phase 7: Add Interactive Examples

### 7.1 Create Interactive Color Swatches
- [ ] Add color visualization for each emotional palette token
- [ ] Show light and dark variants side-by-side
- [ ] Include text color overlays to demonstrate contrast

### 7.2 Add State Demonstration Elements
- [ ] Create interactive buttons showing all states
- [ ] Demonstrate state transitions with hover/active/focus
- [ ] Show pending animation examples

### 7.3 Add Theme Switcher Examples
- [ ] Provide controls to switch between themes
- [ ] Demonstrate zebra outlines in contrast modes
- [ ] Show system color integration in native theme

---

## Phase 8: Document Accessibility Features

### 8.1 Contrast Ratios
- [ ] Document WCAG compliance for all color combinations
- [ ] Explain 3:1 minimum for adjacent stripes
- [ ] Note 4.5:1 for text against backgrounds

### 8.2 Animation Controls
- [ ] Document `prefers-reduced-motion` support
- [ ] Explain pending animation behavior with reduced motion
- [ ] Note animation speed token (`--sem-animation-speed`)

### 8.3 Forced Colors Mode
- [ ] Document `@media (forced-colors: active)` support
- [ ] Explain system color fallbacks

---

## Phase 9: Add Technical Implementation Notes

### 9.1 CSS Variable Architecture
- [ ] Document token naming conventions
- [ ] Explain cascading pattern (theme → intent → state)
- [ ] Show override patterns for customization

### 9.2 Color-Mix Formulas
- [ ] Document the mixing percentages for each state
- [ ] Explain the progression from base to extreme colors
- [ ] Note the use of conservative color for disabled states

### 9.3 Selector Patterns
- [ ] Document attribute selectors: `[disabled]`, `[hover]`, etc.
- [ ] Document class selectors: `.disabled`, `.hover`, etc.
- [ ] Document pseudo-class selectors: `:disabled`, `:hover`, etc.
- [ ] Explain the triple-selector pattern for maximum compatibility

---

## Phase 10: Cross-Reference and Validation

### 10.1 Verify Token Completeness
- [ ] Cross-check all CSS variables in consumer-theme.css are documented
- [ ] Verify all states from Base-Principles.md are covered
- [ ] Ensure all emotional tokens from README.md are included

### 10.2 Add Usage Guidelines
- [ ] Create "Quick Start" section showing common patterns
- [ ] Add "Best Practices" for choosing intents and emotions
- [ ] Include "Common Pitfalls" section

### 10.3 Link to External Resources
- [ ] Add references to blog posts (blog.firsov.net)
- [ ] Link to GitHub discussions (#14)
- [ ] Reference Material Design and system color specifications

---

## Phase 11: Format and Structure Improvements

### 11.1 Enhance HTML Structure
- [ ] Add proper semantic sections with `<section>` tags
- [ ] Use `<table>` elements for token reference tables
- [ ] Add `<code>` tags for CSS variable names
- [ ] Include `<figure>` and `<figcaption>` for visual examples

### 11.2 Improve Styling
- [ ] Enhance datalist presentation with color swatches
- [ ] Add visual indicators for state sequences
- [ ] Style token names with monospace font
- [ ] Add hover effects for interactive elements

### 11.3 Add Navigation
- [ ] Create table of contents
- [ ] Add internal anchor links
- [ ] Include "Back to Top" navigation

---

## Phase 12: Generate Output Artifacts

### 12.1 CSS Documentation
- [ ] Generate CSS custom property reference
- [ ] Create printable token cheat sheet
- [ ] Build interactive token browser

### 12.2 Integration with Build Tools
- [ ] Document theme-generate.html usage (mentioned in Base-Principles.md)
- [ ] Explain CLI generation process (TBD)
- [ ] Add validation scripts for token completeness

---

## Priority Legend
- **High Priority**: Phases 1-4 (Core token documentation)
- **Medium Priority**: Phases 5-8 (Themes, dimensions, accessibility)
- **Low Priority**: Phases 9-12 (Technical details, validation, tooling)

---

## Notes
- Source of truth: `theme-data.xhtml` (as stated in Base-Principles.md §10)
- Implementation: `consumer-theme.css` contains actual CSS
- Documentation: `README.md` and `Base-Principles.md` provide context
- The 7-token limit is a key design principle to maintain
- Zebra outlines are distinctive for focus/selected/target states
- Contrast themes use zebra-only signaling with neutralized backgrounds
                                                                ````