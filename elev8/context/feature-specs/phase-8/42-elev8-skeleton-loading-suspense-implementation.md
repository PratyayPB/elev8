# Elev8 — Skeleton Loading UI & React Suspense Implementation Specification

## Objective

Implement a consistent loading-state system across all the pages inside the app (landing and /dashboard/\*) using:

- `shadcn/ui` Skeleton components
- React `Suspense`
- Next.js route-level `loading.tsx` where appropriate
- Component-level skeletons for independently loading sections

Primary objectives:

1. **Perceived Performance** — show page structure immediately.
2. **Layout Stability** — reserve approximately the same space as final content.
3. **Visual Progress** — subtle animation communicates that content is loading.
4. **Consistency** — use the existing design system.
5. **Maintainability** — create reusable skeletons where reuse is justified.

Do not redesign existing UI or change business behavior.

---

## 1. Audit the Entire Module First

Before implementation, identify:

- all pages/routes
- major UI components
- server/client components
- async server components
- API requests and server actions
- client-side data fetching
- existing `Suspense` boundaries
- existing `loading.tsx` files
- existing spinners/placeholders
- areas with layout shifts
- pages containing independently loading sections

Do not add skeletons blindly. Determine actual loading boundaries first.

---

## 2. Use shadcn/ui Skeleton

Reuse the project's existing Skeleton component if present:

```tsx
import { Skeleton } from "@/components/ui/skeleton";
```

If it does not exist, add it through the project's established shadcn/ui workflow.

Do not introduce another skeleton library or a parallel design system.

---

## 3. Loading Boundary Strategy

Use three levels where appropriate:

```text
Route
 ├── loading.tsx
 └── Page
      ├── Suspense → Section Skeleton
      ├── Suspense → Section Skeleton
      └── Suspense → Section Skeleton
```

### Route-level loading

Use `loading.tsx` when a route has meaningful asynchronous rendering/navigation.

```tsx
export default function Loading() {
  return <PageSkeleton />;
}
```

The route skeleton should represent the complete page structure.

### Component-level Suspense

Use Suspense for independently loading sections:

```tsx
<Suspense fallback={<StatsSkeleton />}>
  <StatsSection />
</Suspense>
```

Do not wrap an entire page in one large Suspense boundary when independent sections can progressively render.

---

## 4. Avoid Unnecessary Suspense Boundaries

Add Suspense when a section:

- performs asynchronous work
- depends on potentially slow data
- can render independently
- benefits from progressive rendering
- has an accurate fallback

Avoid excessive nested boundaries that make the architecture difficult to understand.

---

## 5. Skeleton Design

Skeletons must closely match final component geometry:

- width
- height
- spacing
- padding
- number of rows
- card dimensions
- image aspect ratios
- button dimensions
- grid structure

Do not use a generic full-page rectangle for a structured page.

Example:

```tsx
<div className="space-y-4">
  <Skeleton className="h-8 w-48" />
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-3/4" />
  <Skeleton className="h-10 w-28" />
</div>
```

The exact dimensions must be based on the real component.

---

## 6. Reusable Skeleton Components

Create reusable skeletons for genuinely repeated patterns:

```text
components/skeletons/
├── page-header-skeleton.tsx
├── card-skeleton.tsx
├── stats-card-skeleton.tsx
├── list-skeleton.tsx
├── table-skeleton.tsx
└── ...
```

For complex module-specific layouts, colocate the skeleton with the feature:

```text
features/<module>/components/
├── example-page.tsx
├── example-page-skeleton.tsx
├── example-card.tsx
└── example-card-skeleton.tsx
```

Do not create abstractions for one-off layouts unless reuse is justified.

---

## 7. Responsive Skeletons

Skeletons must follow the final responsive layout.

If the real component changes from:

```text
Desktop → 3 columns
Mobile  → 1 column
```

the skeleton must behave the same way.

Preserve responsive spacing, stacking, widths and image ratios.

---

## 8. Shimmer / Animation

Reuse the animation already provided by the project's Skeleton component.

Do not introduce heavy custom animations.

If custom animation is genuinely required:

- prefer CSS over JavaScript
- keep it subtle
- minimize DOM/CPU/GPU cost
- respect reduced-motion preferences

---

## 9. Accessibility

Skeletons should not create excessive screen-reader announcements.

Where appropriate, expose loading state at the parent region:

```tsx
<div aria-busy="true">...</div>
```

Do not put `aria-live` on every skeleton element.

Follow existing accessibility conventions in the project.

---

## 10. Avoid Client-Side Waterfalls

Audit data fetching while implementing loading states.

If independent requests currently execute sequentially:

```text
Request A
 ↓
Request B
 ↓
Request C
```

consider safe concurrent execution:

```ts
const [a, b, c] = await Promise.all([getA(), getB(), getC()]);
```

Only parallelize independent operations. Do not alter workflows with real dependencies.

Do not use skeletons to hide inefficient data fetching.

---

## 11. Forms

For forms whose initial state depends on asynchronous data, skeleton the actual structure:

```text
Label
Input
Label
Textarea
Label
Select
Button
```

Preserve the dimensions of the final form.

If only one portion of the form is asynchronous, skeleton only that portion rather than the entire form.

---

## 12. Tables and Lists

### Tables

Represent:

- header
- realistic number of visible rows
- column widths
- row height

Do not render hundreds of skeleton rows.

### Lists

Represent:

- avatar/image size
- title/text line count
- spacing
- representative number of items

---

## 13. Charts and Analytics

Do not create fake chart data merely to make a loading state look complete.

Use a structural placeholder:

```text
Chart title skeleton
Controls skeleton
Chart-area skeleton
Legend skeleton
```

Reserve approximately the same dimensions as the final chart.

---

## 14. Images

Preserve the final image aspect ratio:

```tsx
<Skeleton className="aspect-video w-full rounded-lg" />
```

Avoid arbitrary fixed heights when the final component uses a responsive ratio.

---

## 15. Loading vs Empty vs Error

These are different states:

```text
LOADING
   ↓
SUCCESS → DATA
   ↓
EMPTY → Empty State

LOADING
   ↓
ERROR → Error State
```

Skeletons are only for loading.

Do not display skeletons indefinitely after an error or when there is simply no data.

---

## 16. Error Handling Compatibility

Loading states must integrate with the module's existing graceful error handling.

Every asynchronous region should support:

```text
Loading
   ↓
 ┌───────┴────────┐
 ▼                ▼
Success          Error
 │                │
 ▼                ▼
Content        Error UI
```

Suspense fallbacks must not hide actual errors.

Use existing error boundaries/error UI where available.

---

## 17. Long-Running Operations

Do not replace meaningful real progress UI with a skeleton for operations such as:

- AI generation
- PDF generation
- interview evaluation
- roadmap generation
- large imports/exports
- long external API workflows

For these operations, retain meaningful stage/progress indicators when available.

Skeletons are primarily for waiting for content/data to render.

---

## 18. Server vs Client Components

Do not convert Server Components to Client Components solely to implement loading UI.

Prefer:

```text
Server Component
   ↓
Suspense
   ↓
Async Server Component
```

over introducing client-side `useEffect` fetching solely for loading state.

Follow the existing architecture where client-side behavior is genuinely required.

---

## 19. Audit Existing Loading Implementations

Search the module/repository for:

```text
isLoading
loading
Loading
Spinner
Skeleton
Suspense
fallback
pending
isPending
useTransition
loading.tsx
```

Identify:

- duplicate loading implementations
- inconsistent loading states
- loading states that never resolve
- loading states missing error handling
- unnecessary spinners
- components that can use Suspense

Replace only when behavior is preserved or improved.

---

## 20. Do Not Build One Giant Skeleton

Avoid a universal component with dozens of props:

```text
UniversalPageSkeleton
```

Prefer composable skeletons:

```text
PageHeaderSkeleton
StatsCardSkeleton
CardSkeleton
ListSkeleton
TableSkeleton
FormSkeleton
```

Then compose them according to each page's real layout.

---

## 21. Testing Requirements

Add or update tests for loading states.

### UI

Verify:

- skeleton appears while content is loading
- skeleton disappears after resolution
- correct content appears
- no duplicate content
- error replaces loading UI
- empty state replaces loading UI

### Suspense

Verify:

- fallback renders
- async component resolves
- fallback disappears
- independent sections resolve independently

### Route Loading

Verify:

- `loading.tsx` renders during route loading/navigation where testable
- final page replaces loading UI

### Accessibility

Verify:

- appropriate `aria-busy` behavior
- no excessive screen-reader announcements
- keyboard interaction remains unaffected

### Responsive

Verify skeleton layout at relevant breakpoints.

---

## 22. Performance Verification

Ensure the loading implementation does not introduce performance problems.

Check:

- skeleton DOM node count
- animation overhead
- unnecessary Client Components
- unnecessary JavaScript
- duplicate requests
- duplicate data fetching
- Suspense waterfalls
- excessive nested boundaries

Prefer CSS animation over JavaScript animation.

---

## 23. Implementation Process

### Step 1 — Audit

Map pages, components, async boundaries, API calls, server actions and existing loading states.

### Step 2 — Design

For every asynchronous region define:

```text
Final component
Loading skeleton
Empty state
Error state
```

### Step 3 — Implement

Add only justified:

```text
loading.tsx
Suspense boundaries
Skeleton components
```

### Step 4 — Verify

Test:

```text
Loading
Success
Empty
Error
Slow network
Fast network
Mobile
Desktop
```

---

## 24. Acceptance Criteria

### Coverage

- Every meaningful asynchronous page/component has an appropriate loading strategy.
- Route-level loading exists where beneficial.
- Component-level Suspense exists where independent loading is beneficial.

### Visual

- Skeletons resemble final layouts.
- Major layout shifts are reduced/eliminated.
- Responsive structure is preserved.
- Animation is subtle and consistent.

### Architecture

- Server/client boundaries remain appropriate.
- No unnecessary Client Components were introduced.
- No unnecessary dependencies were added.
- Existing async architecture is preserved or improved.

### Error/Empty States

- Loading does not mask errors.
- Error UI replaces loading UI appropriately.
- Empty state is distinct from loading.

### Performance

- No unnecessary API requests were introduced.
- No major Suspense waterfalls were introduced.
- Skeleton rendering remains lightweight.

### Testing

- Loading states are tested.
- Suspense fallbacks are tested.
- Error/empty transitions are tested.
- Relevant route/component behavior is verified.

---

## 25. Required Deliverables

### A. Loading UI Audit

For each relevant page/component:

```text
Page/component
Current loading behavior
Recommended approach
Implemented approach
```

### B. Files Changed

```text
Added
Modified
Removed
```

### C. Suspense Boundaries

Document:

```text
Route
Boundary
Fallback
Async content
Reason
```

### D. Test Results

```text
UI tests
Suspense tests
Route tests
Accessibility tests
Build
Typecheck
Lint
```

Do not claim tests passed unless actually executed.

### E. Remaining Issues

Document any component where:

- loading behavior could not safely be changed
- current data architecture prevents effective Suspense
- a spinner is intentionally retained
- final dimensions could not be accurately represented
- additional refactoring is recommended later

---

## 26. Final Engineering Principle

The goal is not:

> Add Skeleton components everywhere.

The goal is:

> **Make every meaningful loading state communicate the structure of the content that is about to appear, while keeping the application responsive, stable, accessible, and architecturally clean.**

Use:

```text
Route loading
    +
Suspense boundaries
    +
Reusable Skeleton components
    +
Correct error/empty states
    +
Efficient data fetching
```

to create a consistent loading experience across the module while preserving existing business logic and functionality.
