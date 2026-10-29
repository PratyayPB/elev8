---
name: Structural Wireframe
colors:
  surface: '#fbf8fc'
  surface-dim: '#dcd9dd'
  surface-bright: '#fbf8fc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f2f7'
  surface-container: '#f0edf1'
  surface-container-high: '#eae7eb'
  surface-container-highest: '#e4e1e6'
  on-surface: '#1b1b1e'
  on-surface-variant: '#46464b'
  inverse-surface: '#303033'
  inverse-on-surface: '#f3f0f4'
  outline: '#77767c'
  outline-variant: '#c7c5cb'
  surface-tint: '#5d5e66'
  primary: '#585961'
  on-primary: '#ffffff'
  primary-container: '#71717a'
  on-primary-container: '#f9f7ff'
  inverse-primary: '#c6c5cf'
  secondary: '#5d5e60'
  on-secondary: '#ffffff'
  secondary-container: '#dfdfe0'
  on-secondary-container: '#616364'
  tertiary: '#61584b'
  on-tertiary: '#ffffff'
  tertiary-container: '#7a7063'
  on-tertiary-container: '#fff6ee'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e3e1ec'
  primary-fixed-dim: '#c6c5cf'
  on-primary-fixed: '#1a1b22'
  on-primary-fixed-variant: '#46464e'
  secondary-fixed: '#e2e2e3'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1d'
  on-secondary-fixed-variant: '#454748'
  tertiary-fixed: '#eee0d1'
  tertiary-fixed-dim: '#d1c5b5'
  on-tertiary-fixed: '#211b11'
  on-tertiary-fixed-variant: '#4e453a'
  background: '#fbf8fc'
  on-background: '#1b1b1e'
  surface-variant: '#e4e1e6'
typography:
  display:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1200px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 128px
  element-gap: 24px
---

## Brand & Style
The design system is a low-fidelity, structural framework designed to focus on content hierarchy, user flow, and information architecture without the distraction of high-fidelity aesthetics. The brand personality is clinical, objective, and organized. It targets stakeholders and product teams who need to validate layouts and copy before final visual skinning. 

The aesthetic is strictly **Minimalist** and **Structural**, utilizing a "blueprint" approach. It relies on grayscale tones, generous whitespace, and intentional lack of ornamentation to emphasize function over form. All visual elements serve as placeholders for future high-fidelity assets.

## Colors
The palette is monochromatic to ensure the interface remains neutral.
- **Primary Gray (#71717a):** Reserved exclusively for primary action triggers and focus states.
- **Surface Tiers:** Use White (#ffffff) for the main canvas, Off-white (#fafafa) for subtle section shifts, and Light Gray (#f4f4f5) for distinct structural blocks or headers.
- **Typography:** Headlines use Dark Gray (#18181b) for maximum contrast. Body copy uses Slate Gray (#3f3f46) to create a visual distinction between hierarchy levels.
- **Borders:** Thin Light Gray (#e4e4e7) lines are used to define component boundaries and grid structures.

## Typography
This design system utilizes **Inter** for its neutral, systematic, and utilitarian qualities. The hierarchy is exaggerated to clearly distinguish between core value propositions (Display) and supporting details (Body).

- **Headlines:** High-weight, tight line-height, and slight negative letter-spacing for a grounded, professional look.
- **Body:** Open line-height (1.5 - 1.6) to ensure legibility during long-form copy reviews.
- **Labels:** Used for buttons, tags, and small metadata. Capitalization is used sparingly for semantic differentiation.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop to maintain structural integrity. 
- **Desktop:** 12-column grid with a 1200px max-width, 24px gutters, and 64px side margins.
- **Mobile:** Single column fluid layout with 20px horizontal margins.
- **Vertical Rhythm:** Sections are separated by large 128px gaps to emphasize content blocks. Individual elements within a component (e.g., card content) use an 8px base scaling system (8, 16, 24, 32).

## Elevation & Depth
Depth is conveyed through **Low-contrast outlines** rather than shadows. 
- **Surface Differentiation:** Differentiation is achieved by swapping background fills between #ffffff and #fafafa.
- **Borders:** All cards, inputs, and containers use a 1px solid border (#e4e4e7). 
- **Active States:** Subtle tonal shifts (e.g., #f4f4f5 fill) indicate interactivity. No ambient shadows or blurs are permitted, keeping the design strictly "flat" and "structural."

## Shapes
The design system uses a **Soft (0.25rem)** roundedness level. This subtle rounding prevents the wireframe from looking overly aggressive or "brutalist," maintaining a modern SaaS feel while remaining clearly unfinished. 
- **Standard Radius:** 4px (0.25rem) for buttons, inputs, and small cards.
- **Large Radius:** 8px (0.5rem) for major section containers or dashboard placeholders.

## Components
- **Buttons:** 
  - *Primary:* Solid #71717a fill with white text. 
  - *Secondary:* 1px #e4e4e7 border, transparent background, #18181b text.
- **Placeholders:** Used for images/UI mocks. Rectangles with a #e4e4e7 border and a centered 'X' formed by two diagonal 1px lines.
- **Cards:** Simple containers with #ffffff background and #e4e4e7 border. No shadows.
- **Inputs:** 1px #e4e4e7 border with #fafafa background. Placeholder text in #a1a1aa.
- **Accordions:** Horizontal 1px dividers. Use simple '+' and '-' icons to indicate state.
- **Chips/Tags:** Light gray #f4f4f5 background with #3f3f46 small-label text, 4px border radius.
- **Lists:** Bullet points are simple 4px gray squares to maintain the geometric, structural theme.