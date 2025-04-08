# Semantic theming
Based on https://blog.firsov.net/search/label/Semantic%20Theme

# Basic principles

## Variations
[7 design tockens](https://blog.firsov.net/2025/04/7-ux-design-tokens.html) 
as Pattern Recognition and Short-term Memory Capacity.

# Semantic Colors

| `color-` token   |                                                           | sample    |
|------------------|-----------------------------------------------------------|-----------|
| `focus`          | main reading background, text color for `focus-invert`    | white     |
| `focus-invert`   | alternative reading background, text color for `focus`    | black     |
| ---------------- | --------------------------------------------------------- | --------- |
| `attention`      | title,primary action background, current selection        | green     |
| `alert`          | alert action background, error message color              | red       |
| `brand-1`        | 1st brand color, mostly for interleaving backgrounds      | ?         |
| `brand-2`        | 2st brand color, mostly for interleaving backgrounds      | ?         |
| `brand-3`        | 3st brand color, mostly for interleaving backgrounds      | ?         |

Semantic colors should be expressed via emotional palette tokens

# Emotional Palette
| `palette-` token |                                                           | sample    |
|------------------|-----------------------------------------------------------|-----------|
| `focus`          | main reading background, text color for `focus-invert`    | white     |
...

Emotional palette should be expressed via branded palette tokens

# Branded palette
The branded palette establishes a set of base colors and their variations, ensuring adherence to accessibility standards. 
These variations should follow a specific color transformation formula that takes accessibility into account, as outlined in the ADA guidelines.

To promote inclusivity, sibling color values must be distinct enough to be easily distinguishable, 
even for individuals with color blindness or visual impairments.

Typically, the formula adjusts brightness levels; however, shifts within the color space are also a viable approach.

The minimal number of base color variations is 7.

## custom-element material branded colors
| `cem-` token | definition | emotion intent | semantic intent | sample   | angular material |
|--------------|------------|----------------|-----------------|----------|------------------|
| `azure`      | light blue | trust, focus   | focus, reading  |  #d7e3ff | --ng-azure-90 |
...

# Line thickness, stroke weight
[Typography Guide Part 2: Weight and Width](https://creativebeacon.com/typography-guide-part-2-weight-and-width/)
    The different weights can be 

| `thickness-` token |                      | [font-weight](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight) |
|------------------|----------------------|-----------------|
| `xx-light`       | thin  (Hairline)     | 100             |
| `x-light`        | extra light,         | 200             |
| `light`          |                      | 300             |
| `normal`         | or roman,  regular   | 400             |
| `bold`           | medium               | 700             |
| `x-bold`         | extra bold,          | 800             |
| `xx-bold`        | ultra bold or black, | 900             |


    
# Text Tracking/Spacing
[wiki](https://en.wikipedia.org/wiki/Letter_spacing), 
[units](https://css-tricks.com/keeping-track-letter-spacing-guidelines/)