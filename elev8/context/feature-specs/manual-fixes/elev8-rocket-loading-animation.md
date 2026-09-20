# Elev8 Rocket Loading Animation — Implementation Specification

## Objective

Create a reusable branded loading animation using the provided rocket asset:
`/public/icons/elev8-rocket.png`

Example:

```text
        [Animated Rocket]

    Generating your roadmap...
```

The rocket must communicate **very high-speed flight**, with energetic thrusters and subtle aerodynamic instability. The full animation must be a seamless **4–5 second loop**, with **4.5s as the target**.

## 1. Required Visual Behaviour

### Rocket flight

- Rocket appears to travel at very high speed.
- Do not make it continuously spin.
- Keep the existing rocket orientation.
- Add subtle X-axis aerodynamic drift.
- Add very small Y-axis variation.
- Add very small rotational variation.

Suggested starting keyframes:

```text
0%    x: 0px   y: 0px   rotate:  0deg
18%   x: -5px  y: -2px  rotate: -1.1deg
37%   x: +4px  y: +2px  rotate: +0.9deg
55%   x: -3px  y: -1px  rotate: -0.8deg
77%   x: +5px  y: +1px  rotate: +1.2deg
100%  x: 0px   y: 0px   rotate:  0deg
```

These values are starting points. Visually tune them after rendering.

Keep X movement approximately within ±5–8px and rotation within approximately ±1–2°.

### Thrusters

The rear thrusters/exhaust must visibly react.

If the supplied PNG is flattened, keep it as the rocket artwork and add a CSS exhaust layer behind it.

Animate the exhaust with:

- rapidly changing length
- subtle scale/width variation
- opacity variation
- optional subtle glow
- optional tiny particles

Target exhaust variation cycle: approximately **0.12–0.25s**, tuned to avoid distracting flicker.

The exhaust must remain attached to the rocket and move with it.

### High-speed cues

Optional subtle speed streaks may be added behind the rocket. They should be:

- lightweight
- short-lived
- low visual weight
- opposite the direction of travel

Do not add excessive particles or a flashy sci-fi effect.

## 2. Technology

Prefer **native CSS keyframe animations** for this self-contained loader.

Only use an animation library if it materially improves the implementation or the project already uses it:

- Motion for React (`motion`)
- GSAP

Motion provides declarative React animation and repeated transitions; GSAP provides timeline orchestration and infinite repeats. citeturn0search0turn0search2

Do not add a dependency unnecessarily.

Official references:

- Motion: https://motion.dev/docs/react
- Motion React animation: https://motion.dev/docs/react-animation
- GSAP Timeline: https://gsap.com/docs/v3/GSAP/Timeline/
- GSAP CSS: https://gsap.com/docs/v3/GSAP/CorePlugins/CSS/

## 3. Loop

Target:

```css
animation-duration: 4.5s;
animation-iteration-count: infinite;
```

The first and last frame must match visually:

```css
transform: translate3d(0, 0, 0) rotate(0deg) scale(1);
```

Do not use a simple `yoyo` loop if it makes the flight feel like the rocket is reversing. The intended motion is a continuous high-speed flight cycle.

The thruster animation may run independently from the 4.5s flight cycle.

## 4. Transform Performance

Prefer GPU-friendly properties:

```css
transform: translate3d(...) rotate(...) scale(...);
opacity
```

Avoid animating layout properties such as `left`, `top`, `margin`, `width`, or `height` when transforms can be used.

Do not use React state updates on every animation frame.

## 5. Component

Create a reusable component following the project's existing component structure, for example:

```text
src/components/loading/rocket-loader.tsx
```

Recommended API:

```tsx
<RocketLoader message="Generating your roadmap..." />
```

Optional:

```tsx
<RocketLoader message="Generating your roadmap..." size="md" />
```

Do not over-engineer variants unless the project needs them.

The component must be reusable for:

```text
Generating your roadmap...
Analyzing your profile...
Building your career assessment...
Generating your interview...
Analyzing your resume...
Scoring your resume...
```

The animation component should handle presentation only. Process/business logic remains in the parent module.

## 6. Layout

Recommended:

```text
┌──────────────────────────────┐
│                              │
│           🚀                 │
│                              │
│   Generating your roadmap... │
│                              │
└──────────────────────────────┘
```

Provide sufficient whitespace for X-axis motion.

Prevent horizontal page overflow with an appropriate bounded/overflow-hidden container.

Keep the loading text static. Do not add a typewriter animation.

## 7. Accessibility

Use an accessible status container:

```html
<div role="status" aria-live="polite"></div>
```

The text must communicate what is happening.

Do not announce animation frames.

Support:

```css
@media (prefers-reduced-motion: reduce);
```

Reduced-motion behaviour:

- disable rocket movement
- disable rapid thruster animation
- show the static rocket
- retain the meaningful loading message

## 8. Optional Long-Running AI Stages

The loader may later support meaningful stages:

```text
        [Rocket]

    Generating your roadmap...

✓ Understanding your profile
✓ Analyzing target role
◉ Building skill requirements
○ Creating milestones
```

Do not put process orchestration inside `RocketLoader`.

If implemented, stages should be supplied by the parent.

## 9. Implementation Workflow

### Step 1 — Inspect

Inspect:

- `/mnt/data/elev8-rocket.png`
- existing loading components
- Tailwind/CSS setup
- existing Motion/GSAP dependencies
- existing design tokens
- accessibility conventions

Determine whether the PNG is flattened. Do not recreate the artwork unnecessarily.

### Step 2 — Choose technology

Use:

```text
Can CSS achieve it?
  → Yes: CSS

Otherwise:
  Existing Motion?
    → Use Motion

Otherwise:
  GSAP materially simplifies it?
    → Use GSAP
```

### Step 3 — Build

Implement:

- 4.5s rocket flight
- X-axis aerodynamic movement
- tiny Y movement
- subtle rotation
- animated thrusters
- optional subtle speed streaks
- seamless looping

### Step 4 — Integrate

Initially integrate into:

```text
Generating your roadmap...
```

Do not replace every loading state until the component has been visually validated.

### Step 5 — Verify

Test:

- desktop
- mobile
- light/dark backgrounds
- reduced-motion mode
- slow devices
- no horizontal overflow
- seamless loop
- component unmount/cleanup if a JS animation library is used

## 10. Do Not Use

Avoid:

- 360° continuous rotation
- large X/Y movement
- large bouncing
- excessive particles
- strobing/flashing
- excessive blur/glow
- full-screen spinning loaders
- GIF/video unless technically justified
- `setInterval()` for animation
- per-frame React state updates
- layout-affecting animation
- animation that causes horizontal scrolling

## 11. Acceptance Criteria

- [ ] Rocket clearly appears to fly at high speed.
- [ ] Rocket does not simply spin.
- [ ] Subtle left/right aerodynamic movement is visible.
- [ ] X-axis movement is approximately ±5–8px maximum.
- [ ] Rotation is approximately ±1–2° maximum.
- [ ] Vertical movement is minimal.
- [ ] Thrusters visibly animate.
- [ ] Thrusters feel energetic rather than like a slow pulse.
- [ ] Main loop is approximately 4.5 seconds.
- [ ] Loop is seamless.
- [ ] Rocket does not cause page overflow.
- [ ] Animation is lightweight.
- [ ] Reduced-motion users receive a static/non-moving alternative.
- [ ] Loading message remains readable.
- [ ] Component is reusable across AI loading states.
- [ ] No unnecessary dependency is introduced.
- [ ] No React state updates are required per animation frame.

## 12. Final Agent Report

After implementation, report:

1. Files created/modified
2. Technology used (CSS/Motion/GSAP) and why
3. Animation duration and keyframe approach
4. Thruster implementation
5. Reduced-motion implementation
6. Loading states integrated
7. Tests/checks performed
8. Any limitations caused by the source PNG
9. Recommended future improvements

Do not claim production readiness without rendering and testing the animation.
