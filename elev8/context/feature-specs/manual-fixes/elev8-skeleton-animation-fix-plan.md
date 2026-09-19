# Elev8 — Skeleton Animation Fix Plan

## Objective

The skeleton loading implementation is functionally correct, but the current placeholders appear as static boxes. Update the implementation so skeletons provide a subtle animated loading treatment while preserving the existing layout, React Suspense architecture, and shadcn/ui conventions.

The target behavior should resemble the current shadcn/ui Skeleton approach: the official documentation uses the `Skeleton` component as the loading placeholder, and the current shadcn guidance explicitly recommends using `Skeleton` rather than custom `animate-pulse` markup. citeturn0search0

## 1. First Diagnose the Existing Implementation

Before changing code, inspect:

- `components/ui/skeleton.tsx`
- all module-specific `*-skeleton.tsx` components
- route `loading.tsx` files
- Tailwind configuration / CSS files
- global CSS
- any custom animation utilities
- `components.json`
- package versions

Determine why the current Skeleton is static:

1. `Skeleton` may not include an animation class.
2. An existing animation class may be overridden.
3. Tailwind may not be generating the animation utility.
4. A custom Skeleton implementation may have removed the default animation.
5. CSS may disable animation globally.
6. Reduced-motion rules may be affecting the result.
7. A custom class may override the Skeleton styles.

Do not immediately add animation to every individual skeleton component.

## 2. Use the Existing shadcn Skeleton as the Base

The preferred implementation is to fix the shared Skeleton primitive rather than manually adding animation classes to every placeholder.

The current shadcn ecosystem documents Skeleton as the reusable loading placeholder and shows it being composed by size/shape using `className`. citeturn0search0

Inspect the project's installed Skeleton implementation first.

If it is missing the intended animation, update the shared component so existing usages automatically become animated.

The shadcn project's own current guidance says to use `Skeleton` for loading placeholders rather than custom styled `div`s with `animate-pulse`. citeturn0search5turn0search7

## 3. Preferred MVP Animation: Pulse

For the first fix, use a lightweight CSS pulse animation.

Expected conceptual implementation:

```tsx
function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "animate-pulse rounded-md bg-accent",
        className
      )}
      {...props}
    />
  )
}
```

Do not copy this blindly. Adapt it to the project's current shadcn version, theme tokens, and existing `cn()` utility.

A current shadcn-based implementation commonly uses `animate-pulse` directly on the Skeleton primitive. citeturn0search3

## 4. Important: Do Not Add `animate-pulse` Everywhere

Avoid this pattern:

```tsx
<Skeleton className="h-4 w-32 animate-pulse" />
<Skeleton className="h-4 w-24 animate-pulse" />
<Skeleton className="h-4 w-40 animate-pulse" />
```

If the shared Skeleton primitive owns the animation, all existing skeleton instances inherit it consistently.

This makes the system:

```text
Skeleton primitive
       ↓
All Skeleton instances
       ↓
Consistent animation
```

rather than:

```text
Every skeleton component
       ↓
Manually configured animation
```

## 5. Verify Tailwind Animation Support

Check whether the project supports:

```text
animate-pulse
```

If it does, use the existing utility.

Do not introduce a custom keyframe animation unless the existing utility cannot provide the required UX.

If `animate-pulse` is not available:

1. Determine the project's Tailwind version/configuration.
2. Check whether animation utilities are being generated.
3. Fix the configuration only if necessary.
4. Rebuild and verify the generated CSS.

Do not add a second animation framework just for Skeleton.

## 6. If the Product Specifically Wants a Shimmer

The user's desired visual is described as a shifting gradient/shimmer rather than merely a static placeholder.

After verifying the standard pulse implementation, evaluate whether a subtle shimmer is preferable for Elev8.

There are two acceptable approaches:

### Option A — Keep standard shadcn pulse

Recommended first choice for the MVP because it is simple, lightweight, and aligns directly with the project's current Skeleton primitive.

### Option B — Add a reusable shimmer variant

If the existing Elev8 design requires a moving highlight across the placeholder, implement shimmer centrally in the Skeleton primitive or as a reusable Skeleton variant.

Do not implement shimmer independently inside every page.

Example conceptual API:

```tsx
<Skeleton animation="shimmer" />
```

or, if the project prefers class-based composition:

```tsx
<Skeleton className="skeleton-shimmer" />
```

Choose only one architecture after inspecting the existing codebase.

## 7. Shimmer Implementation Requirements

If shimmer is implemented:

- Use CSS animation.
- Avoid JavaScript animation.
- Avoid `requestAnimationFrame`.
- Avoid React state for animation.
- Keep the animation compositor-friendly where possible.
- Use a subtle moving gradient/highlight.
- Keep the animation duration moderate.
- Avoid excessive contrast.
- Do not change the Skeleton's layout dimensions.
- Ensure the effect works in light and dark themes.

Conceptually:

```text
Base skeleton
████████████████████
       → highlight
    █████
         →
            █████
                 →
```

The highlight should travel across the placeholder and loop.

## 8. Avoid Over-Animating the UI

Do not animate every individual skeleton with a highly visible effect.

The goal is:

```text
Subtle motion
     ↓
User recognizes loading
     ↓
Low visual distraction
```

Not:

```text
Strong gradient
Rapid animation
High contrast
     ↓
Distracting loading screen
```

The Skeleton should communicate activity without competing with the actual UI.

## 9. Respect Reduced Motion

Check whether the application already supports `prefers-reduced-motion`.

For users who prefer reduced motion, disable or reduce the animation.

Conceptually:

```css
@media (prefers-reduced-motion: reduce) {
  .skeleton-shimmer,
  .skeleton-pulse {
    animation: none;
  }
}
```

Adapt this to the project's existing CSS/Tailwind conventions.

Do not introduce duplicate global accessibility rules if the project already has an established reduced-motion implementation.

## 10. Preserve the Existing Suspense Architecture

Do not change the successful React Suspense implementation merely to add animation.

Keep:

```text
Route
  ↓
loading.tsx

Page
  ↓
Suspense
  ↓
Skeleton
  ↓
Async Content
```

The fix should primarily affect the Skeleton presentation layer.

For example:

```tsx
<Suspense fallback={<DashboardSkeleton />}>
  <DashboardContent />
</Suspense>
```

`DashboardSkeleton` should continue using the shared `Skeleton` component.

## 11. Preserve Layout Stability

Animation must not change:

- width
- height
- padding
- margins
- grid structure
- aspect ratio
- border radius
- responsive behavior

The existing skeleton implementation was introduced specifically to prevent layout shifts. Keep that behavior intact.

The official shadcn documentation demonstrates sizing Skeleton instances to the content they represent. citeturn0search0

## 12. Do Not Add Spinners to Skeletons

Do not add a spinner inside every skeleton.

The animation itself communicates that the content is loading.

Keep spinners for actions such as:

- submitting a form
- saving
- generating
- evaluating
- uploading
- mutating data

Skeletons are appropriate for content/data loading.

## 13. Audit Existing Skeleton Components

After fixing the shared Skeleton primitive, search the module for:

```text
Skeleton
animate-pulse
animate-
skeleton
shimmer
loading
loading.tsx
Suspense
fallback
```

Identify manually implemented static placeholders such as:

```tsx
<div className="h-4 w-32 rounded bg-muted" />
```

If they represent loading content, replace them with the shared Skeleton component.

Do not replace ordinary decorative elements that are not loading placeholders.

## 14. Remove Duplicate Animation Implementations

If individual components currently contain:

```text
animate-pulse
custom shimmer classes
custom loading keyframes
```

determine whether those implementations became redundant after the shared Skeleton primitive is fixed.

Remove redundant animation logic where safe.

The goal should be:

```text
One Skeleton primitive
        ↓
Consistent animation behavior
        ↓
Many composed skeleton layouts
```

## 15. Animation Consistency

All Skeleton-based loading components should have a consistent default animation.

Examples:

```text
PageHeaderSkeleton
CardSkeleton
TableSkeleton
FormSkeleton
StatsSkeleton
TimelineSkeleton
```

They should all inherit the same animation unless there is a specific UX reason to vary it.

## 16. Dark and Light Theme Verification

Check the animation in both themes.

Verify:

- Skeleton remains visible.
- Moving highlight is subtle.
- Contrast remains appropriate.
- No harsh white/black flash occurs.
- Existing theme tokens are respected.

Do not hardcode a color that breaks the application's existing design system.

## 17. Performance Requirements

The animation must be cheap enough to run across pages containing many skeleton elements.

Avoid:

```text
JavaScript animation loops
React state updates per animation frame
setInterval-based animation
large DOM overlays
multiple nested animated layers
heavy blur/filter effects
```

Prefer a single CSS animation on the Skeleton element.

If using shimmer, keep the implementation lightweight and avoid unnecessarily expensive effects.

## 18. Testing Plan

### Component test

Verify the shared Skeleton renders with its animation class/variant.

Example assertions should verify behavior rather than brittle exact class strings where possible.

### Visual/manual test

Check:

```text
Skeleton appears
Animation starts
Animation loops
Animation stops when real content renders
```

### Suspense test

Verify:

```text
Async content pending
        ↓
Animated Skeleton visible
        ↓
Async content resolves
        ↓
Skeleton disappears
```

### Error test

Verify:

```text
Loading
  ↓
Error
  ↓
Error UI replaces Skeleton
```

Skeleton must not remain indefinitely after a failed request.

### Reduced-motion test

Verify animation is disabled/reduced when the user's system requests reduced motion.

### Responsive test

Verify animation works correctly at relevant breakpoints without affecting layout.

### Theme test

Verify both light and dark modes.

## 19. Performance Verification

After implementation, inspect the page with multiple skeletons visible.

Check for:

- excessive CPU usage
- excessive repainting
- animation jank
- dropped frames
- unnecessary JavaScript
- hydration warnings
- layout shifts

Do not optimize prematurely; first confirm the standard CSS animation is sufficient.

## 20. Recommended Implementation Sequence

### Step 1
Inspect the existing `components/ui/skeleton.tsx`.

### Step 2
Compare it against the current shadcn/ui Skeleton documentation and project conventions. citeturn0search0

### Step 3
Determine why the current placeholders are static.

### Step 4
Restore the standard `animate-pulse` behavior in the shared Skeleton primitive if missing.

### Step 5
Verify all existing skeleton components automatically become animated.

### Step 6
Remove redundant per-component animation classes/implementations.

### Step 7
If pulse is insufficient for the desired Elev8 UX, implement a centralized optional shimmer variant.

### Step 8
Add/reuse reduced-motion behavior.

### Step 9
Test Suspense, route loading, errors, themes, responsiveness, and performance.

### Step 10
Run:

```text
Typecheck
Lint
Tests
Production build
```

Do not claim success unless these checks actually run successfully.

## 21. Acceptance Criteria

The implementation is complete when:

- Existing Skeleton placeholders are no longer static.
- Animation is implemented centrally rather than duplicated across pages.
- The animation is subtle and continuous while loading.
- Skeleton dimensions remain unchanged.
- React Suspense boundaries continue working.
- `loading.tsx` behavior remains intact.
- Skeleton disappears when content resolves.
- Error states replace Skeletons correctly.
- Empty states are not treated as loading states.
- Light/dark themes work correctly.
- Reduced-motion users are respected.
- No unnecessary animation library is introduced.
- No unnecessary client-side JavaScript is introduced.
- Existing functionality remains unchanged.
- Tests, typecheck, lint, and build pass.

## 22. Final Recommendation

For Elev8, implement this in two stages:

```text
Current static Skeleton
        ↓
Fix shared Skeleton primitive
        ↓
animate-pulse
        ↓
Verify across entire module
        ↓
Only if needed
        ↓
Add centralized shimmer variant
```

Start with the standard shadcn Skeleton animation rather than immediately introducing a custom shimmer system. The current shadcn documentation establishes Skeleton as the reusable loading placeholder, while the project's shadcn guidance explicitly favors the Skeleton component over custom animated placeholder markup. citeturn0search0turn0search5

If the desired Elev8 visual specifically requires a moving gradient rather than a pulse, add that as a **single reusable Skeleton animation variant**, not as page-specific CSS.
