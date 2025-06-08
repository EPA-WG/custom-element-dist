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

HTML5 element states by props and pseudo-class

| prop          | semantic token | description |
|---------------|----------------|-------------|
| default       |                | base color  |   
| checked       | selected       |             |   
| disabled      | .              |             |      
| readonly      | .              |             |       
| required      | .              |             |

| pseudo-class  | semantic token | description                      |     
|---------------|----------------|----------------------------------|
| active        | .              | pressed down                     |      
| focus         | .              |                                  |
| focus-visible | .              | focus triggered by keyboard      |      
| hover         | .              | mouse over                       |      
| focus-within  | .              | focus on child element           |      
| target        | .              | element which matched #id in URL |      
| read-write    | editable       | is editable by the user          |      


### state, elevation, interleaving colors choice

1. The colors of these categories must not overlap and should be sufficiently distinct to ensure clear differentiation.
2. The state begins with "normal" base color and ends with shift which would trigger the reversing the text color.
( i.e. if text is black on light background initially, on final `active` state the text would become light as the background 
brightness becomes too dark to keep the text black ) 
 
<button style="background-color:#abc7ff;color:black">default</button>
<button style="background-color:#7cabff;color:black">hover</button>
<button style="background-color:#0074e9;color:white">pressed</button>

3. Interleaving and elevation should not be drastically different and should NOT cross the brightness level which would
trigger the content text color.

Example of colors sequence with shift by brightness or color wheel.

The tokens sequence in low to more emphasized importance/attention:
<style>
b{ display: inline-flex; padding: 0.5rem; border-radius: 0.5rem; }
.light{
&.disabled     ,& .disabled         {   background-color: #00F; }     
&.readonly     ,& .readonly         {   background-color: #00F; }     
&.read-write   ,& .read-write       {   background-color: #00F; }   
&.required     ,& .required         {   background-color: #00F; }     
&.default      ,& .default          {   background-color: #00F; }      
&.target       ,& .target           {   background-color: #00F; }       
&.focus-within ,& .focus-within     {   background-color: #00F; } 
&.focus        ,& .focus            {   background-color: #00F; }        
&.focus-visible,& .focus-visible    {   background-color: #00F; }
&.hover        ,& .hover            {   background-color: #00F; }        
&.selected     ,& .selected         {   background-color: #00F; }     
&.active       ,& .active           {   background-color: #00F; }       
}
</style>

| pseudo-class  | bg   | light                                    | dark                                | dark-contrast                                | light-contrast                                | 
|---------------|------|------------------------------------------|-------------------------------------|----------------------------------------------|-----------------------------------------------|
| disabled      |      | <b class="light disabled">*</b>          | <b class="dark disabled">*</b>      | <b class="dark-contrast disabled">*</b>      | <b class="light-contrast disabled">*</b>      |
| readonly      |      | <b class="light readonly">*</b>          | <b class="dark readonly">*</b>      | <b class="dark-contrast readonly">*</b>      | <b class="light-contrast readonly">*</b>      |
| read-write    | ^1   | <b class="light read-write">*</b>        | <b class="dark read-write">*</b>    | <b class="dark-contrast read-write">*</b>    | <b class="light-contrast read-write">*</b>    |
| required      | no   | <b class="light required">*</b>          | <b class="dark required">*</b>      | <b class="dark-contrast required">*</b>      | <b class="light-contrast required">*</b>      |
| default       | base | <b class="light default">*</b>           | <b class="dark default">*</b>       | <b class="dark-contrast default">*</b>       | <b class="light-contrast default">*</b>       |
| target        | no   | <b class="light target">*</b>            | <b class="dark target">*</b>        | <b class="dark-contrast target">*</b>        | <b class="light-contrast target">*</b>        |
| focus-within  | no   | <b class="light focus-within">*</b>      | <b class="dark focus-within">*</b>  | <b class="dark-contrast focus-within">*</b>  | <b class="light-contrast focus-within">*</b>  |
| focus         | no   | <b class="light focus">*</b>             | <b class="dark focus">*</b>         | <b class="dark-contrast focus">*</b>         | <b class="light-contrast focus">*</b>         |
| focus-visible | no   | <b class="light focus-visible">*</b>     | <b class="dark focus-visible">*</b> | <b class="dark-contrast focus-visible">*</b> | <b class="light-contrast focus-visible">*</b> |
| hover         |      | <b class="light hover">*</b>             | <b class="dark hover">*</b>         | <b class="dark-contrast hover">*</b>         | <b class="light-contrast hover">*</b>         |
| selected      |      | <b class="light selected">*</b>          | <b class="dark selected">*</b>      | <b class="dark-contrast selected">*</b>      | <b class="light-contrast selected">*</b>      |
| active        |      | <b class="light active">*</b>            | <b class="dark active">*</b>        | <b class="dark-contrast active">*</b>        | <b class="light-contrast active">*</b>        |

^1 - `read-write` / editable usually uses decorators but Material Design also applies high contrast background
( for light theme it is white on the slightly darker surface ).  

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