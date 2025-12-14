# Voice, Fonts & Typography Document Review

**Document:** `voice-fonts-typography.md`
**Review Date:** 2025-12-13
**Reviewed Against:** CEM Principles from `README.md`, `Base-Principles.md`, `theme-data.xhtml`

---

## Executive Summary

The `voice-fonts-typography.md` document is a well-structured revision that introduces semantic typography tokens with a novel cross-modal "voice" concept. It demonstrates **strong alignment** with core CEM principles, particularly the 7-token bounded variation rule and semantic-first design. However, several inconsistencies and gaps require attention.

| Category                         | Status       |
|----------------------------------|--------------|
| Alignment with 7-token principle | Strong       |
| Semantic intent compliance       | Strong       |
| Thickness token consistency      | Minor issues |
| State model integration          | Missing      |
| Theme variant coverage           | Incomplete   |
| Accessibility compliance         | Good         |

---

## Alignment Analysis

### 1. Bounded Variation (7-Token Principle)

**Status:** Compliant with observations

| Token Category            | Count  | CEM Requirement  | Verdict  |
|---------------------------|--------|------------------|----------|
| Thickness scale           | 7      | 7                | PASS     |
| Size scale                | 7      | 7                | PASS     |
| Voice levels              | 7      | 7                | PASS     |
| Semantic typography roles | 8      | 7 (recommended)  | WARN     |

**Observation:** The document defines 8 semantic typography roles (Reading, UI, Tag, Script, Data, Initialism, Iconized, Brand) but recommends starting with 6. Section 10.4 acknowledges this by suggesting "Add Brand/Iconized only when a real use-case exists." This is acceptable guidance.

---

### 2. Thickness Token Mapping

**Status:** Minor Inconsistency

#### Source of Truth (from `theme-data.xhtml` lines 2267-2315):

| Token | Alternative Names | Value |
|-------|-------------------|-------|
| `xx-light` | Thin, Hairline | 100 |
| `x-light` | Extra Light | 200 |
| `light` | Light | 300 |
| `normal` | Regular, Roman | 400 |
| `bold` | Medium, Semi-Bold | 700 |
| `x-bold` | Extra Bold | 800 |
| `xx-bold` | Ultra Bold, Black | 900 |

#### Voice-to-Ink Thickness Mapping (lines 206-212):

| Voice Level | Maps To | Weight Value |
|-------------|---------|--------------|
| whisper | x-light | 200 |
| soft | light | 300 |
| gentle | normal | 400 |
| regular | normal | 400 |
| firm | bold | 700 |
| strong | x-bold | 800 |
| loud | xx-bold | 900 |

**Issues Identified:**

1. **Duplicate mapping:** Both `gentle` and `regular` map to `normal` (400), reducing effective weight variations to 6 instead of 7.

2. **Unused token:** `xx-light` (100) is defined in the thickness scale but never used in any voice mapping. This breaks the principle of bounded useful variation.

**Recommendation:** Consider mapping `whisper` to `xx-light` (100) and `soft` to `x-light` (200), then adjust subsequent mappings to utilize all 7 thickness levels.

---

### 3. Semantic Intent Compliance

**Status:** Strong

The document excels at following Principle P1 (Semantic intent first):

- Token names describe intent: `--cem-typography-reading-*`, `--cem-typography-data-*`
- Clear separation of concerns: Fontography vs Typography vs Voice
- Consumer-flow purpose drives role selection (Section 7)

**Positive Examples:**
- Line 73: "Tokens should communicate intent (reading, data, tag) rather than implementation details (Roboto 14px)"
- Section 6 naming guideline: "roles should describe meaning/purpose, not placement. Prefer `reading`, `data`, `tag` over `body2`, `subtitle`"

---

### 4. State Model Integration

**Status:** Not Addressed

**Gap:** The document does not address how typography tokens interact with the CEM state model defined in `Base-Principles.md`:

| Missing State Coverage | Expected Behavior |
|------------------------|-------------------|
| `:hover` | Typography change? |
| `:active` | Typography change? |
| `:disabled` | Reduced weight/opacity? |
| `:focus-visible` | No typography change (outline only) |
| `pending` | No typography change (animation only) |

**Impact:** Developers may be uncertain whether typography should change based on interaction states.

**Recommendation:** Add a section clarifying that typography tokens remain stable across states, with state changes expressed through color, outline (zebra), and animation channels only.

---

### 5. Theme Variant Coverage

**Status:** Incomplete

**Gap:** The document doesn't explain how typography tokens vary across CEM theme variants:

| Theme | Coverage in Document |
|-------|---------------------|
| `native` | Not mentioned |
| `light` | Implicit (examples use light theme values) |
| `dark` | Not mentioned |
| `contrast-light` | Not mentioned |
| `contrast-dark` | Not mentioned |

**CEM Principle from `README.md` (line 41):**
> "On `theme variant`(light, dark, contrast-dark...) those base colors can have shift to matching variant brightness."

**Recommendation:** Add guidance on:
- Whether font families change per theme (they shouldn't)
- Whether size scales adjust for contrast themes
- Thickness adjustments for dark themes (per `theme-data.xhtml` lines 2444-2447: "Dark theme: slightly lighter weight to compensate for contrast")

---

### 6. Hardcoded Values

**Status:** Inconsistency Found

**Location:** Line 316
```css
--cem-typography-data-speech-rate: 0.98;
```

**Issue:** All other semantic endpoint speech tokens reference voice tokens (e.g., `var(--cem-voice-regular-speech-rate)`), but Data's speech-rate is hardcoded to `0.98`.

**Impact:** Breaks the token indirection principle; changes to voice tokens won't propagate to Data.

**Recommendation:** Change to:
```css
--cem-typography-data-speech-rate: var(--cem-voice-gentle-speech-rate);
```
Or define a dedicated voice level for data reading.

---

### 7. Terminology Consistency

**Status:** New Term Introduced

**Observation:** The document introduces "Fontography" as a distinct concept (Section 3.1, lines 55-56):
> "Fontography tokens describe the *font assets* and their feature policies."

This term does not appear in:
- `README.md`
- `Base-Principles.md`
- `theme-data.xhtml`

**Assessment:** The term is well-defined and serves a clear purpose in separating font asset concerns from layout concerns. However, it should be added to the CEM glossary in `README.md` or `theme-data.xhtml` for consistency.

---

### 8. Accessibility Compliance

**Status:** Good

The document addresses accessibility well:

| Requirement | Coverage | Location |
|-------------|----------|----------|
| rem-based sizing | Yes | P3, line 80 |
| Readable line-height | Yes | Line 81 |
| Avoid micro text | Yes | Line 82 |
| User scaling support | Yes | Line 569 |
| Internationalization | Yes | Section 9 |
| Screen reader independence | Yes | Section 10.2 (lines 594-595) |

**Positive:** Lines 594-595 correctly note that voice tokens do NOT control screen reader output:
> "Screen readers primarily follow HTML semantics and ARIA, not CSS typography."

---

### 9. Consumer Flow Mapping

**Status:** Well Aligned

Section 7 (lines 535-545) provides clear consumer-flow to typography-role mapping that aligns with CEM's consumer semantic approach:

| Consumer Flow | Typography Roles | CEM Alignment |
|---------------|------------------|---------------|
| Orient/Navigate | UI, Tag, Initialism | Matches README state model |
| Scan/Compare | Data, UI, Tag | Supports new Data semantic |
| Read/Learn | Reading | Core CEM use case |
| Act | UI, Tag | Action-focused |
| Confirm/Reflect | Reading, Data, Tag | Mixed content support |

---

### 10. Missing Cross-References

**Status:** Documentation Gap

The document should reference or be referenced from:

| Document | Current Status | Recommended Action |
|----------|----------------|-------------------|
| `theme-data.xhtml` | References timing.md | Add reference to voice-fonts-typography.md |
| `README.md` | **Updated** - Typography section added | Done |
| `Base-Principles.md` | No reference | Add note about typography stability across states |
| `consumer-theme.css` | Should implement tokens | Verify token implementation |
| `todo.md` | **Updated** - Phase 6.4 added | Done |

---

## Summary of Findings

### Strengths

1. **Exemplary bounded variation:** Strict adherence to 7-token principle across thickness, size, and voice scales
2. **Clear semantic hierarchy:** Fontography → Typography → Voice model is logical and well-explained
3. **Cross-modal innovation:** Voice tokens enabling both visual and speech output is forward-thinking
4. **Practical implementation:** CSS examples are complete and actionable
5. **Accessibility-first:** rem units, line-height guidance, i18n considerations

### Issues Requiring Action

| Priority | Issue | Section | Status |
|----------|-------|---------|--------|
| High | Duplicate voice-to-weight mapping (gentle/regular both → 400) | 5.2 | **RESOLVED** - Remapped to use all 7 levels |
| High | Hardcoded Data speech-rate value | 5.2 | **RESOLVED** - Now uses `var(--cem-voice-firm-speech-rate)` |
| Medium | No state model integration guidance | New | Pending |
| Medium | No theme variant guidance | New | Pending |
| Low | Unused xx-light (100) thickness | 5.2 | **RESOLVED** - whisper now maps to xx-light |
| Low | "Fontography" term not in glossary | 3.1 | **RESOLVED** - Added to README.md |

### Recommended Document Updates

1. **Add Section 4.1:** "Relationship to State Model" - clarify typography stability across interaction states

2. **Add Section 8.3:** "Theme Variant Considerations" - document any weight adjustments for dark/contrast themes

3. **Fix Line 316:** Replace hardcoded `0.98` with voice token reference

4. **Update voice-to-ink mapping:** Either differentiate gentle/regular or document why dual-mapping is intentional

5. **Cross-reference:** Add this document to `theme-data.xhtml` Typography section

---

## Conclusion

The `voice-fonts-typography.md` document represents a mature, well-considered approach to semantic typography that largely aligns with CEM principles. The identified issues are primarily about completeness and consistency rather than fundamental design flaws. With the recommended updates, this document will provide comprehensive guidance for implementing accessible, semantic typography across the CEM design system.
