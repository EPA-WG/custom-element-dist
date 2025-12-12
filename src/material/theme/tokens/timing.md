# Timing tokens

In Material Design 3 (which Angular Material follows), motion tokens are organized into three main groups:

* **Duration**: discrete durations such as **instant**(~50 ms) for micro interactions, **noticeable** (~250 ms) for mid‑sized UI changes, and **Lingering** (~300 ms) for larger transitions or overlays. Cem’s drop transition (300 ms) and action transition (≈280 ms) correspond to these categories
[github.com](https://github.com/EPA-WG/custom-element-dist/blob/develop/src/material/theme/semantic.css#L43-L46)
.

* **Easing**: easing curves that shape the animation’s acceleration. Standard easing (as used in cem’s tokens
[github.com](https://github.com/EPA-WG/custom-element-dist/blob/develop/src/material/theme/semantic.css#L43-L46)
), emphasized easing (with stronger acceleration/deceleration), and linear easing are all part of Angular’s motion system.

* **Spring**: Material Design 3 also includes spring tokens, which define physical motion with damping and stiffness values (e.g., fast, standard, or slow springs) for expressive transitions. While cem doesn’t currently expose spring tokens, Angular’s underlying design system (via md.sys.motion) does provide them for more dynamic animations.

## CEM easing tokens

Original Material easing token              | Intended effect                                            | Proposed consumer‑intent name
------------------------------------------- |------------------------------------------------------------| --
standard (ease‑in‑out)                       | Balanced start and end; the “default” feel                 | smooth
standard.accelerate (ease‑in)                | Quickly ramps up at start; good for entrance animations    | start‑smooth
standard.decelerate (ease‑out)               | Slows into its final state; good for exit animations       | end‑smooth
emphasized (pronounced ease‑in‑out)          | Adds drama to both start and end; draws attention          | highlighted
emphasized.accelerate (pronounced ease‑in)   | Dramatic lift‑off; emphasises entry                        | highlighted‑start
emphasized.decelerate (pronounced ease‑out)  | Dramatic finish; emphasises exit                           | highlighted‑end
linear                                       | Constant speed throughout; for mechanical or subtle motion | uniform
legacy easing set (older curves)             | Classic curves retained for compatibility                  | classic

### Guidance for use

Use “smooth” variants for everyday transitions, where motion should feel natural and unobtrusive.

Use “highlighted” variants when the motion’s purpose is to draw a user’s eye to an element or emphasise a state change.

Use “start‑smooth” or “highlighted‑start” for introducing new UI elements, and “end‑smooth” or “highlighted‑end” for dismissing them.

Use “uniform” when the intent is neutrality (e.g., progress bars or loading indicators) or when motion needs to avoid acceleration or deceleration.

Use “classic” only when maintaining legacy patterns or supporting older components.
## Semantic naming for spring variants

Because CEM wants to mirror the way consumers perceive durations (“blink”, “noticeable”, “obvious”), spring variants should reflect how the motion feels. Below are two possible naming schemes—one using a neutral/standard vs expressive distinction, and another using a single set of names across all springs.


Axis                                     | Original MD3 values                                        | Intent‑based names (Consumer‑friendly) | Rationale
-----------------------------------------|------------------------------------------------------------|---------------------------------------| ---
Focus (what property is being animated)  | Spatial, Effects                                           | Reposition, Highlight                 | “Reposition” describes motions that move or resize elements (positions, layouts), while “Highlight” covers non‑spatial property changes (opacity, color) that draw attention or indicate state.  These names explain purpose rather than technical details.
Feel (how lively the motion is)          | Standard (little overshoot), Expressive (overshoot/bounce) | Functional, Delight                   | Standard springs are intended for functional or utilitarian interactions, while expressive springs add delight and emotional emphasis.  “Functional” vs “Delight” captures the intent—whether the motion is purely about conveying a change or creating a memorable moment.
Speed (how long the interaction lasts)   | Fast, Default, Slow                                        | Instant, Noticeable, Lingering        | Speeds should reflect the user’s experience: Instant for micro interactions that shouldn’t interrupt, Noticeable for transitions the user should register but not dwell on, and Lingering for large or emotionally resonant transitions that invite attention.  These names align with token best‑practice to convey intent, not numeric values.

Missing values?

This scheme mirrors Material Design’s three‑by‑two structure (focus × feel × speed)
[zoewave.medium.com](https://zoewave.medium.com/material-3-design-system-e91a15d303a0#:~:text=Expressive%20Scheme%20%E2%80%94%20This%20is,more%20spirited%20feel%20is%20desired)
, so no additional values are necessary. If your product requires more nuance, you could introduce intermediate speed (“Smooth”) or an extra feel (“**Dramatic**”) slot for rare, high‑impact motions, but only if those use cases recur often and the names still communicate clear intent.

Using intent‑oriented names like reposition‑functional‑instant, highlight‑delight‑lingering, etc., helps designers and developers pick the right token based on why a motion is applied, rather than guessing from its visual description.

Easing and duration tokens are still useful for non‑spring animations. easing and duration tokens are still useful for non‑spring animations. Many transitions in a UI—simple fades, opacity changes, color shifts—don’t require physical overshoot or damping. For those, having standalone duration and easing tokens (e.g. standard, emphasized, linear) lets you:

Adjust timing independently of the spring‑based tokens (important for reduced‑motion modes).

Maintain backwards compatibility with components built on the earlier easing/duration system.

In short, if your system fully embraces the 3‑dimensional spring tokens, you can rely on those tokens alone to “materialize” your spring animations. However, you should keep a small set of duration and easing tokens on hand for traditional, non‑spring transitions or to support legacy components.

## final CEM time tokens
* duration ( **Instant** - 50ms, **Noticeable**~250ms, **Lingering** 300ms) 
* easing (smooth, highlighted x start, end | uniform | classic)
* spring (2 focus × 2 feel × 3 speed)

