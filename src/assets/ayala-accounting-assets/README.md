# Ayala Accounting mockup asset pack

This pack is meant to reproduce the attached mockup without turning UI details into unnecessary bitmap images.

## Raster images
- `images/hero-accounting-desk.png` — exact crop of the hero photography from the mockup.
- `images/ayala-logo-reference.png` — reference crop of the logo/wordmark from the mockup. For production, replace this with the original brand SVG/PNG if available.

## SVG assets
- Four service icons
- Mail / phone / location icons
- Testimonial quote mark
- Carousel left / right arrows
- Carousel dots
- Pale botanical leaf decoration

All SVGs use `currentColor`, so their color can be controlled from CSS.

Suggested colors from the mockup:
- dark brown: `#6A3928`
- terracotta: `#BE785E`
- warm text: `#403935`
- cream background: `#FBF6F2`

## Build as CSS, not image files
The following visual details in the mockup should be created in CSS:
- thin section divider lines
- service-card vertical separators
- rounded CTA buttons
- testimonial card background
- input borders
- subtle warm page gradients / backgrounds

That keeps the page sharper and easier to make responsive.
