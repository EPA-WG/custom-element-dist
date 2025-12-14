# Semantic theming
Based on https://blog.firsov.net/search/label/Semantic%20Theme

# Basic principles
[Consumer Semantic Theme tokens](https://github.com/EPA-WG/custom-element-dist/discussions/14)

## Variations limit
[7 design tockens](https://blog.firsov.net/2025/04/7-ux-design-tokens.html) 
as Pattern Recognition and Short-term Memory Capacity.

## Values proximity
TBD

Potential reasoning
* The maximized distance across available range. While the base is outlined more of less strictly, how to choose the max value?
Extreme light conditions like bright or dark surrounding environment, would elevate the need for high contrast. 
By either main light theme palette or availability of high contrast color themes and their automatic switch.   
* Assured difference to guarantee the step recognition as next to each other as in mixed content.
* Targeted Device capabilities. Some rare devices still have bo be accounted for niche markets. 
The e-paper with black/white, shades of grey, limited color palette better to be accounted for when app serves 
the hand-writing and wanted to be listed in compatible apps list. In addition to color palette, such devices are sensitive to 
the change speed which on its own depends on the color/brightness difference.


# Semantic Colors

| `color-` token   |                                                           | sample          |
|------------------|-----------------------------------------------------------|-----------------|
| `focus`          | main reading background, text color for `focus-invert`    | comfort         |
| `focus-invert`   | alternative reading background, text color for `focus`    | calm            |
| ---------------- | --------------------------------------------------------- | --------------- |
| `attention`      | title,primary action background, current selection        | trust           |
| `alert`          | alert action background, error message color              | danger          |
| `brand-1`        | 1st emotional color, mostly for interleaving backgrounds  | ? creativity    |
| `brand-2`        | 2nd emotional color, mostly for interleaving backgrounds  | ? enthusiasm    |
| `brand-3`        | 3rd emotional color, mostly for interleaving backgrounds  | ? conservative  |

Semantic colors should be expressed via emotional palette tokens. 
7 base colors limit. 

On `theme variant`( light,dark,contrast-dark...) those base colors can have shift to matching variant brightness.
## color accent
The base colors are used in static UX when user interaction not yet engaged. The slight but noticeable base color change is
used for `elevation` or element state.
### Elevation

<details>
    <summary> the concept of elevation of surface </summary>

In UI design, layer elevation refers to a technique using shadows and layering to create a sense of depth and hierarchy 
between UI elements. 
It helps distinguish elements, like floating action buttons or cards, suggesting which ones are above others. 

Elevations are essentially surfaces with visual layering that forms the foundation of the UI, creating a canvas 
for other elements like text, icons, and layers with own backgrounds.

Any visual grouping like the headers often representing the content hierarchy and along with content can be presented as layers. 

</details>

Layering includes as the visual impression for popping out by adding the shadows, outlines, as the slight surface color change.
Usually in the direction to opposite brightness ( i.e. for light background the elevated surface would become darker ).

The number of elevations usually is limited, but for in-depth incrementally detailed scenes, the number of layers can 
become unlimited. In such case the layer darkening would not work efficiently. Instead, the same brightness color shift
would give a bigger number of color variations. Which is still limited. To make UI serving unlimited elevations, 
the shifted colors would need a rotation - start the sequence again once reached the last variation in the sequence.

<details>
    <summary>Conflict with interleaving sequences</summary>
    while the elevation meant to reflect the difference in hierarchy, the sequential 
    same level content needs the distinguishing of the zones in same hierarchy location. The good sample is the article section
    in the list of articles.  <br/>
    Usually apps use either elevation or interleaving but not both in same visual content/page/screen. 
    What to do if interleaving would be needed on the surface with same elevation? 
    There is no golden solution, but other means than color can help there: The elevation would use the popping effect, the 
    interleaving sections would be separated by visual separation. The colors then would use the brightness for elevation 
    and color shift for interleaving (or wise versa but always keeping the same principle for own presentation ).
</details>

### element state

<details><summary>
A reflection of element change due to user interaction or result of flow state change
</summary>

</details>

#### HTML5 element states by props and pseudo-class

| prop            | semantic token | description                                                         |
|-----------------|----------------|---------------------------------------------------------------------|
| default         |                | base color                                                          |   
| checked         | selected       |                                                                     |   
| disabled        | .              |                                                                     |      
| readonly        | .              |                                                                     |       
| contentEditable | editable       | editable                                                            |       
| required        | .              |                                                                     |
| indeterminate   | .              | "select all" checkbox when not all of its sub-controls are checked. |

| pseudo-class  | semantic token | description                                                        |     
|---------------|----------------|--------------------------------------------------------------------|
| active        | .              | pressed down                                                       |      
| focus         | .              | no visual effect, focus outline is not shown                       |
| focus-visible | .              | focus triggered by keyboard, triggers outline                      |      
| hover         | .              | mouse over                                                         |      
| focus-within  | .              | focus on child element, outline on CE and hide outline on children |      
| target        | .              | element which matched #id in URL                                   |      
| read-write    | editable       | is editable by the user                                            |      
| indeterminate | .              | no value available                                                 |      

#### transitional states

* `pending` usually associated with state change when the component temporary is not available and expected to be resolved 
to another "permanent" state. Applied often to single component(input, button) or group  (form, fieldset) during 
data retrieval period or action completion. 
* `in-progress` usually associated with system activities like module loading, often accompanied by "loading..." animation.

Both, `pending` and `in-progress`, do not have the HTML5 reflection but implemented by frameworks. 

### state, elevation, interleaving colors choice

1. The colors of these categories must not overlap and should be sufficiently distinct to ensure clear differentiation.
2. The state begins with "normal" base color and ends with shift which would trigger the reversing the text color.
( i.e. if text is black on light background initially, on final `active` state the text would become light as the background 
brightness becomes too dark to keep the text black ) 
 
<button style="background-color:#abc7ff;color:black">default</button>
<button style="background-color:#7cabff;color:black">hover</button>
<button style="background-color:#0074e9;color:white">pressed</button>

3. Interleaving and elevation should not be drastically different and should NOT cross the brightness level which would
trigger the change of content text color.

Example of colors sequence with shift by brightness or color wheel.

The tokens sequence in low to more emphasized importance/attention:


| token          | bg   | light                                | dark                                | contrast-dark                                | contrast-light                                | 
|----------------|------|--------------------------------------|-------------------------------------|----------------------------------------------|-----------------------------------------------|
| disabled       |      | <b class="light disabled">*</b>      | <b class="dark disabled">*</b>      | <b class="contrast-dark disabled">*</b>      | <b class="contrast-light disabled">*</b>      |
| readonly       |      | <b class="light readonly">*</b>      | <b class="dark readonly">*</b>      | <b class="contrast-dark readonly">*</b>      | <b class="contrast-light readonly">*</b>      |
| editable       | ^1   | <b class="light editable">*</b>      | <b class="dark editable">*</b>      | <b class="contrast-dark editable">*</b>      | <b class="contrast-light editable">*</b>      |
| required       | no   | <b class="light required">*</b>      | <b class="dark required">*</b>      | <b class="contrast-dark required">*</b>      | <b class="contrast-light required">*</b>      |
| default        | base | <b class="light default">*</b>       | <b class="dark default">*</b>       | <b class="contrast-dark default">*</b>       | <b class="contrast-light default">*</b>       |
| indeterminate  | no   | <b class="light target">*</b>        | <b class="dark target">*</b>        | <b class="contrast-dark target">*</b>        | <b class="contrast-light target">*</b>        |
| target         | no   | <b class="light target">*</b>        | <b class="dark target">*</b>        | <b class="contrast-dark target">*</b>        | <b class="contrast-light target">*</b>        |
| focus-within   | no   | <b class="light focus-within">*</b>  | <b class="dark focus-within">*</b>  | <b class="contrast-dark focus-within">*</b>  | <b class="contrast-light focus-within">*</b>  |
| focus          | no   | <b class="light focus">*</b>         | <b class="dark focus">*</b>         | <b class="contrast-dark focus">*</b>         | <b class="contrast-light focus">*</b>         |
| focus-visible  | no   | <b class="light focus-visible">*</b> | <b class="dark focus-visible">*</b> | <b class="contrast-dark focus-visible">*</b> | <b class="contrast-light focus-visible">*</b> |
| hover          |      | <b class="light hover">*</b>         | <b class="dark hover">*</b>         | <b class="contrast-dark hover">*</b>         | <b class="contrast-light hover">*</b>         |
| selected       |      | <b class="light selected">*</b>      | <b class="dark selected">*</b>      | <b class="contrast-dark selected">*</b>      | <b class="contrast-light selected">*</b>      |
| active         |      | <b class="light active">*</b>        | <b class="dark active">*</b>        | <b class="contrast-dark active">*</b>        | <b class="contrast-light active">*</b>        |
| pending        | ^2   | <b class="light pending">*</b>       | <b class="dark pending">*</b>       | <b class="contrast-dark pending">*</b>       | <b class="contrast-light pending">*</b>       |

^1 - `editable`/`:read-write` usually uses decorators but Material Design also applies high contrast background
( for light theme it is white on the slightly darker surface ).  

^2 - `pending` often accompanied by `in-progress` animation

# Emotional Palette
| `palette-` token |                                                                    | warmth  | sample                  | system                     |
|------------------|--------------------------------------------------------------------|---------|-------------------------|----------------------------|
| `comfort`        | light scene color, the scene is full of object                     | cool    | white                   | Canvas                     |
|                  | Purity, innocence, cleanliness, peace,  coldness or emptiness      |         |                         |                            |
| `calm`           | dark scene color, few objects around                               | cool    | black                   | CanvasText                 |
|                  | Mystery, elegance, power, evil, mourning, formality, security      |         |                         |                            |
| `trust`          | primary action background, text color for `focus-invert`           | cool    | blue                    | Highlight w/ HighlightText |
| `danger`         | Passion, excitement, love, anger, energy, danger                   | warm    | red                     | N/A                        |
| `creativity`     | Luxury, creativity, royalty, mystery, but also grief or melancholy | cool    | cyan/purple             | ButtonFace w/ ButtonText   |
| `enthusiasm`     | Warmth, enthusiasm, happiness, optimism, energy                    | warm    | orange( yellow, pink)   | Mark w/ MarkText           |
| `conservative`   | Natural, earthy, conservative, but also bland or boring            | neutral | brown (tan/beige, grey) | GrayText                   |
...

Emotional palette should be expressed via branded palette tokens. 
The emotions set supports particular application flow. Limit 7 per flow or SPA. 

NOTE. SPA( single page application ) usually is not limited to 1 flow. Settings/profile/contacts, etc. are the sample of separate flows even in SPA.
 

# Branded palette
The branded palette establishes a set of base colors and their variations, ensuring adherence to accessibility standards. 
These variations should follow a specific color transformation formula that takes accessibility into account, as outlined in the ADA guidelines.

Browsers provide a [System colors](https://developer.mozilla.org/en-US/docs/Web/CSS/system-color) as universal 
out-of-the-box branded palette which comply to the user settings on OS level.

To promote inclusivity, sibling color values should be sufficiently distinct to ensure easy differentiation, 
particularly for individuals with color blindness or other visual impairments.
Typically, the formula adjusts brightness levels; however, shifts within the color space is also a viable approach.


The minimal number of base color variations is 7.

## custom-element material branded colors
| `cem-color` token | definition    | emotion intent         | semantic intent | sample  | angular material            |
|-------------------|---------------|------------------------|-----------------|---------|-----------------------------|
| `blue-xl`         | lightest blue | `comfort`, light scene | reading         | #faf9fd | --ng-azure-neutral-98       |
|                   |               |                        |                 |         | --mat-sys-surface           |
| `cyan-d`          | dark cyan     | dark scene             | reading         | #101414 | --ng-cyan-neutral-6         |
|                   |               |                        |                 |         | --mat-sys-surface           |
| `blue`            | blue          | trust                  | attention       | #005cbb | --ng-azure-40               |
|                   |               |                        |                 |         | --mat-sys-primary           |
| `red`             | red           | danger                 | alert           | #ba1a1a | --ng-error-40               |
|                   |               |                        |                 |         | --mat-sys-error             |
| `blue-l`          | light blue    | conservative           | brand-1         | #d7e3ff | --ng-azure-90               |
|                   |               |                        |                 |         | --mat-sys-primary-container |
| `cyan-l`          | light cyan    | creativity             | brand-2         | #adfffe | --ng-cyan-95                |
|                   |               |                        |                 |         | --mat-sys-primary-container |
| `orange-l`        | light orange  | enthusiasm             | brand-3         | #ffdcc7 | --ng-orange-90              |
|                   |               |                        |                 |         |                             |
...

# Line thickness, stroke weight
[Typography Guide Part 2: Weight and Width](https://creativebeacon.com/typography-guide-part-2-weight-and-width/)
    The different weights can be 

| `thickness-` token |                      | [font-weight](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)   |
|--------------------|----------------------|-------------------------------------------------------------------------------|
| `xx-light`         | thin  (Hairline)     | 100                                                                           |
| `x-light`          | extra light,         | 200                                                                           |
| `light`            |                      | 300                                                                           |
| `normal`           | or roman,  regular   | 400                                                                           |
| `bold`             | medium               | 700                                                                           |
| `x-bold`           | extra bold,          | 800                                                                           |
| `xx-bold`          | ultra bold or black, | 900                                                                           |


    
# Text Tracking/Spacing
[wiki](https://en.wikipedia.org/wiki/Letter_spacing),
[units](https://css-tricks.com/keeping-track-letter-spacing-guidelines/)

# Typography and Voice

See [Voice and Fonts in Typography](./tokens/voice-fonts-typography.md) for the complete semantic typography system.

Typography tokens are organized into three layers:
- **Fontography** — font families and feature policies
- **Typography** — size, line-height, spacing, and layout
- **Voice** — cross-modal prominence (ink weight + speech prosody)

## Voice-to-Thickness Mapping

Voice tokens map to thickness tokens for visual weight:

| Voice Level | Thickness Token | Weight | Semantic Use |
|-------------|-----------------|--------|--------------|
| `whisper`   | `xx-light`      | 100    | Minimal emphasis |
| `soft`      | `x-light`       | 200    | Subtle, secondary |
| `gentle`    | `light`         | 300    | Calm, understated |
| `regular`   | `normal`        | 400    | Baseline (default) |
| `firm`      | `bold`          | 700    | Confident emphasis |
| `strong`    | `x-bold`        | 800    | Strong assertion |
| `loud`      | `xx-bold`       | 900    | Maximum impact |

All 7 thickness levels are utilized with distinct voice mappings.

# Outline


| tokens                              | scope                                     | CSS key                         | value                                                                                                      | comment                                                                        |
|-------------------------------------|-------------------------------------------|---------------------------------|------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------|
| `box-shadow`                        | `.action`                                 | box-shadow:                     | var(--cem-action-box-shadow)                                                                               | base applied to `box-shadow` rule                                              |
| `box-shadow`                        | `.action`                                 | --cem-action-box-shadow         | 0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12) | default, all themes. Button shadow.                                            |
| `hover`                             | `.action`                                 | --cem-action-box-shadow-hover   | 0px 4px 6px -2px rgba(0, 0, 0, .2), 0px 2px 2px 0px rgba(0, 0, 0, .14), 0px 2px 4px 0px rgba(0, 0, 0, .12) | default, all themes. Slightly larger shadow on hover                           |
| `{STATE}`     , ...`active`         | `.action`                                 | --cem-action-box-shadow-{STATE} | ...                                                                                                        | Subtler shadow for active state                                                |
| `pending`                           | `.action`                                 | --cem-action-box-shadow-pending | same as default                                                                                            | Subtler shadow for active state                                                |
| `hover`                             | `.action:hover`                           | --cem-action-box-shadow         | var(--cem-action-box-shadow-hover)                                                                         | state-specific prop                                                            |
| `{STATE}`, ...`active`,`pending`    | `.action:{STATE}`                         | --cem-action-box-shadow         | var(--cem-action-box-shadow-{STATE})                                                                       | state-specific prop                                                            |
| high contrast                       | `[data-theme*="cem-theme-contrast-"]`     |                                 |                                                                                                            |                                                                                |
| `box-shadow`                        | `.action`                                 | --cem-action-box-shadow         | var(--cem-action-box-shadow-default)                                                                       | default in contrast theme                                                      |
| `box-shadow`                        | `.action`                                 | --cem-action-box-shadow-default | 0 0 0 2px var(--cem-palette-comfort), 0 0 0 4px var(--cem-action-box-shadow-color)                         | state-specific prop. 2px zebra, inner strip matches main background            |
| `box-shadow` `hover`                | `.action`                                 | --cem-action-box-shadow-hover   | 0 0 0 4px var(--cem-palette-comfort), 0 0 0 8px var(--cem-action-box-shadow-color)                         | state-specific prop. Slightly larger shadow on hover                           |
| `box-shadow` `hover`                | `.action:hover`                           | --cem-action-box-shadow         | var(--cem-action-box-shadow-hover)                                                                         | colors escalation from default where default is contrast on comfort background |
| `explicit`   `box-shadow` `hover`   | `.action.explicit:hover`                  | --cem-action-box-shadow-color   | blue                                                                                                       | colors escalation from default where default is contrast on comfort background |
| `explicit`   `box-shadow` `{STATE}` | `.action.explicit[{STATE}]`               | --cem-action-box-shadow-color   | color elevation by STATE relative to `default`                                                             | colors escalation from default where default is contrast on comfort background |
| `contextual` `box-shadow` `default` | `.action.contextual[ not( all {STATE}) ]` | --cem-action-box-shadow         | `none`                                                                                                     | hide outline for `default` state                                               |

`contextual` does not have an outline in default state for all themes, needs an override rule to set `--cem-action-box-shadow: none`

_High contrast mode_ inherits `box-shadow:`  css rule from `.action` top level. There are 2 shapes of outline. 
Each has 2 strips "zebra" presentation when closest strip is least visible and outer is most contrast.

* default - 2px zebra, used for all states except
* wide - triggered for real-time actions like hover and pressed (active)

The  color escalation on the state change is combined with zebra size which requires less color gradations for better contrast.

Chromium adds `:focus-visible` outline. Which has to be hidden when `border-box` is in use.
```css
:focus-visible{ outline: -webkit-focus-ring-color auto 1px; }
```