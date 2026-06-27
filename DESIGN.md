---
name: WebBay Digital Excellence
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#20201f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c3c5d9'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8d90a2'
  outline-variant: '#434656'
  surface-tint: '#b6c4ff'
  primary: '#b6c4ff'
  on-primary: '#00277f'
  primary-container: '#0057ff'
  on-primary-container: '#e5e8ff'
  inverse-primary: '#004ee7'
  secondary: '#c9c6c5'
  on-secondary: '#313030'
  secondary-container: '#4a4949'
  on-secondary-container: '#bab8b7'
  tertiary: '#c6c6c7'
  on-tertiary: '#2f3131'
  tertiary-container: '#676969'
  on-tertiary-container: '#e9e9e9'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b6c4ff'
  on-primary-fixed: '#001550'
  on-primary-fixed-variant: '#003ab2'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c9c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353535'
typography:
  display-lg:
    fontFamily: Sora
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Sora
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 32px
  margin-desktop: 80px
  margin-mobile: 20px
  stack-unit: 8px
  section-gap: 120px
---

## Brand & Style

This design system is engineered to evoke a sense of high-performance luxury and regional authority. It targets small business owners in Oman and the GCC who seek digital transformation that reflects prestige and reliability. 

The aesthetic is **Luxury Tech Minimalism** infused with **Glassmorphism**. The UI should feel like a high-end physical product—expensive, precision-engineered, and incredibly fast. By utilizing deep charcoal foundations and ethereal translucent layers, the system prioritizes focus on the "results" (the websites being sold) rather than the interface itself. The emotional response should be one of immediate trust, "Omani excellence," and future-readiness.

## Colors

The palette is strictly curated to maintain a premium "Dark Mode" default.
- **Charcoal Black (#0A0A0A):** The primary canvas. It is not pure black, allowing for subtle depth and shadow definition.
- **Electric Blue (#0057FF):** The high-energy catalyst. Used sparingly for primary actions, progress indicators, and interactive highlights.
- **Pure White (#FFFFFF):** Reserved for primary typography and high-contrast icons to ensure maximum legibility against dark backgrounds.
- **Surface Gray (#1A1A1A):** Used for glass container fills and subtle borders to separate content hierarchies.

## Typography

The typography system uses **Sora** (as a high-quality alternative to Cy Bold) to provide a geometric, technical edge for headings. **Inter** is utilized for body text to ensure absolute clarity across all screen sizes. For Arabic counterparts, **Alexandria** must be used, maintaining the same weight-scaling logic.

Large-scale display type is the hero of the system. Headings should be tight and impactful, while body text requires generous line-height to maintain the "expensive" feel of whitespace. Use `label-caps` for eyebrows and small metadata to lean into the technical aesthetic.

## Layout & Spacing

The layout follows a **Fluid Grid** model with an emphasis on oversized margins. To feel "high-value," content is never cramped. 
- **Desktop:** A 12-column grid with a 1280px max-width. Use 32px gutters to allow the glassmorphic cards to breathe.
- **Vertical Rhythm:** A strict 8px base unit. Section gaps should be aggressive (120px+) to distinguish different service offerings.
- **Mobile:** Transition to a 4-column grid. Reduce section gaps to 64px but maintain high padding within cards (24px) to preserve the luxury feel.

## Elevation & Depth

Depth is achieved through **Glassmorphism** rather than traditional drop shadows.
- **Layer 0 (Background):** Solid Charcoal Black.
- **Layer 1 (Cards/Containers):** Background-blur (20px to 40px) with a semi-transparent fill (rgba(255, 255, 255, 0.05)).
- **Borders:** "Ghost borders" are essential. Use a 1px solid stroke with a linear gradient (top-left to bottom-right) from white at 15% opacity to white at 2% opacity. This creates a "diamond-cut" edge effect.
- **Interaction:** Upon hover, an Electric Blue glow (`accent_glow`) should emanate from behind the card, suggesting the element is "powered on."

## Shapes

The shape language is "Squircle" inspired—soft but intentional. 
- **Standard Cards:** Use `rounded-lg` (16px) for a modern, approachable tech look.
- **Primary Buttons:** Use `rounded-xl` (24px) to create a distinct, tactile feel that invites clicking.
- **Inner Elements:** Chips and small badges should use a full pill-shape to contrast against the more structural card layouts.

## Components

### Buttons
- **Primary:** Solid Electric Blue with white text. Apply a subtle outer glow on hover.
- **Secondary:** Transparent with the "Ghost border" gradient and a backdrop blur. Text is white.
- **Tertiary:** Text-only in Electric Blue with an arrow icon for "Result-driven" CTAs.

### Glass Cards
- All cards must feature a 32px padding and the 1px gradient border. 
- Headlines within cards should be `headline-sm`.

### Input Fields
- Dark backgrounds (slightly darker than the surface layer) with a 1px border that turns Electric Blue on focus. Use `label-caps` for field headers.

### Selection Controls
- **Checkboxes/Radios:** Custom-styled to be Electric Blue when active. Avoid browser defaults.

### Website Preview Plates
- Since the product is "Ready-made websites," previews should be housed in "MacBook Pro" or "Mobile" style frames with a subtle parallax scroll effect on hover to showcase the full page.