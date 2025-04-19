# Semantic theming
Based on https://blog.firsov.net/search/label/Semantic%20Theme

# Basic principles

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

| `color-` token   |                                                           | sample    |
|------------------|-----------------------------------------------------------|-----------|
| `focus`          | main reading background, text color for `focus-invert`    | comfort   |
| `focus-invert`   | alternative reading background, text color for `focus`    | calm      |
| ---------------- | --------------------------------------------------------- | --------- |
| `attention`      | title,primary action background, current selection        | trust     |
| `alert`          | alert action background, error message color              | danger    |
| `brand-1`        | 1st emotional color, mostly for interleaving backgrounds  | ?         |
| `brand-2`        | 2nd emotional color, mostly for interleaving backgrounds  | ?         |
| `brand-3`        | 3rd emotional color, mostly for interleaving backgrounds  | ?         |

Semantic colors should be expressed via emotional palette tokens. 
7 base colors limit. 

On `theme variant`( light,dark,dark-contrast...) those base colors can have shift to matching variant brightness.
## color accent
The base colors are used in static UX when user interaction not yet engaged. The slight but noticeable base color change is
used for `elevation` or element state.
### Elevation

<details>
    <summary> the concept of elevation of surface </summary>

In UI design, layer elevation refers to a technique using shadows and layering to create a sense of depth and hierarchy 
between UI elements. 
It helps distinguish elements, like floating action buttons or cards, by suggesting which ones are above others. 

Elevations are essentially surfaces with visual layering that forms the foundation of the UI, creating a canvas 
for other elements like text, icons, and backgrounds.

</details>

includes as the visual impression for popping out by adding the shadows, outlines, as the slight surface color change.
Usually in the direction to opposite brightness ( i.e. for light background the elevated surface would become darker ).

The number of elevations usually is limited, but for in-depth incrementally detailed scenes, the number of layers can 
become unlimited. In such case the layer darkening would not work efficiently. Instead, the same brightness color shift
would give a bigger number of color variations. Which is still limited. To make UI serving unlimited elevations, 
the shifted colors would need a rotation - start the sequence again once reached the last variation in the sequence.



### element state

<details><summary>
When UI needs a reflection of element change due to user interaction or result of flow state
</summary>


</details>

# Emotional Palette
| `palette-` token |                                                                    | warmth  | sample                  |
|------------------|--------------------------------------------------------------------|---------|-------------------------|
| `comfort`        | light scene color, the scene is full of object                     | cool    | white                   |
|                  | Purity, innocence, cleanliness, peace,  coldness or emptiness      |         |                         |
| `calm`           | dark scene color, few objects around                               | cool    | black                   |
|                  | Mystery, elegance, power, evil, mourning, formality, security      |         |                         |
| `trust`          | primary action background, text color for `focus-invert`           | cool    | blue                    |
| `danger`         | Passion, excitement, love, anger, energy, danger                   | warm    | red                     |
| `creativity`     | Luxury, creativity, royalty, mystery, but also grief or melancholy | cool    | cyan/purple             |
| `enthusiasm`     | Warmth, enthusiasm, happiness, optimism, energy                    | warm    | orange( yellow, pink)   |
| `conservative`   | Natural, earthy, conservative, but also bland or boring            | neutral | brown (tan/beige, grey) |
...

Emotional palette should be expressed via branded palette tokens. 
The emotions set supports particular application flow. Limit 7 per flow or SPA. 

NOTE. SPA( single page application) usually is not limited to the 1 flow. Settings/profile/contacts, etc. are the sample of separate flows even in SPA.

# Branded palette
The branded palette establishes a set of base colors and their variations, ensuring adherence to accessibility standards. 
These variations should follow a specific color transformation formula that takes accessibility into account, as outlined in the ADA guidelines.

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