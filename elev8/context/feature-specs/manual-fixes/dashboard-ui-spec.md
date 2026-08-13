# Dashboard UI Implementation Specification

## Objective

Create the complete UI/UX for `/dashboard` and all child pages under
`/dashboard/*`.

The goal is to build a polished, modern, responsive dashboard experience
that feels cohesive across every dashboard route while remaining easy to
extend with additional modules.

Examples of child pages include:

- `/dashboard/roadmaps`
- `/dashboard/interview`
- `/dashboard/career-guidance`
- `/dashboard/assessment`
- `/dashboard/resume`
- `/dashboard/settings`

If additional dashboard routes already exist in the codebase, apply the
same design system and layout rules to them.

---

## 1. Design Direction

Use a modern, premium SaaS/productivity-app aesthetic.

The interface should feel:

- Clean
- Minimal
- Professional
- Visually rich
- Spacious without wasting screen space
- Strongly structured
- Accessible
- Responsive
- Subtle rather than overly animated

Avoid:

- Excessive gradients
- Excessive shadows
- Extremely rounded UI everywhere
- Low-contrast text
- Visually noisy backgrounds
- Random colors outside the defined palette
- Generic template-like layouts

The dashboard should look like a coherent product rather than a
collection of unrelated pages.

---

# 2. Typography

## Headline / Labels

Use **Albert Sans** for:

- Page titles
- Section headings
- Card headings
- Navigation labels
- Buttons
- Form labels
- Badges
- Tabs
- Important UI metadata

Recommended weights:

- 500 --- secondary labels
- 600 --- buttons and card headings
- 700 --- major headings

## Body

Use **Geist** for:

- Paragraphs
- Descriptions
- Supporting text
- Form input text
- Helper text
- Long-form content

Recommended weights:

- 400 --- normal body
- 500 --- emphasized body
- 600 --- important supporting text

Do not use more than these two font families.

---

# 3. Color System

Use the following design tokens consistently.

```css
--color-primary: #000000;
--color-secondary: #f0ece6;
--color-tertiary: #fef7af;
--color-black: #000000;
--color-neutral: #f4f2ee;
```

> Note: The provided secondary color was written as `#foece6`. Treat
> this as a typo and use `#F0ECE6`.

## Color Usage

### Primary --- Black

Use for:

- Primary buttons
- Strong headings
- Navigation emphasis
- Important icons
- Active states
- High-priority UI

### Secondary --- Warm Off-White

`#F0ECE6`

Use for:

- Secondary surfaces
- Card backgrounds
- Sidebar sections
- Supporting panels
- Subtle visual separation

### Tertiary --- Soft Yellow

`#FEF7AF`

Use sparingly for:

- Highlights
- Important callouts
- Progress indicators
- Achievement states
- Selected dashboard metrics
- Decorative accents

### Neutral

`#F4F2EE`

Use for:

- Main page backgrounds
- Secondary surfaces
- Empty spaces
- Form backgrounds
- Section separation

### White

White may be used where necessary for:

- Cards
- Modals
- Inputs
- High-priority content surfaces

Do not introduce arbitrary colors unless required for semantic states
such as success, warning, or error.

---

# 4. Accessibility and Contrast

High contrast is mandatory.

Every section must maintain clear visual separation between:

- Background and text
- Card and page background
- Primary and secondary content
- Buttons and their labels
- Interactive elements and their surrounding surfaces

Do not use light-gray text on light backgrounds.

Avoid using the tertiary yellow as a text background unless the text has
sufficient contrast.

Interactive controls must have clear:

- Default state
- Hover state
- Focus state
- Active state
- Disabled state

Keyboard focus must be visible.

---

# 5. Global Dashboard Layout

Create a shared dashboard shell that is reused across all `/dashboard/*`
routes.

Recommended structure:

```text
DashboardShell
├── Sidebar
├── Mobile Navigation
├── Main Content Area
│   ├── Page Header
│   ├── Page Content
│   └── Optional Page Footer
```

## Desktop

For medium and large screens:

```text
┌─────────────────────────────────────────────────────────────┐
│ Sidebar │ Header / Page Content                             │
│         │                                                   │
│         │ Main Dashboard Content                            │
│         │                                                   │
│         │                                                   │
└─────────────────────────────────────────────────────────────┘
```

The sidebar should remain visually distinct without dominating the
screen.

Recommended desktop sidebar width:

- \~240--280px

The main content area should be flexible and occupy the remaining width.

## Tablet

Collapse or reduce the sidebar when necessary.

Possible behavior:

- Compact sidebar
- Icon-based sidebar
- Collapsible sidebar
- Drawer navigation

## Mobile

Do not attempt to squeeze the desktop sidebar into the viewport.

Use:

- Top navigation
- Menu button
- Slide-out navigation drawer
- Bottom navigation only if it improves usability

The main content should have comfortable horizontal padding.

Recommended mobile horizontal padding:

```text
16px–20px
```

---

# 6. Sidebar

The sidebar should contain:

## Branding

Include:

- Product logo
- Product name
- Optional collapse control

## Main Navigation

Example:

```text
Dashboard
Roadmaps
Career Guidance
Interview Simulation
Assessment
```

## Secondary Navigation

Example:

```text
Profile
Settings
Help
```

## User Section

At the bottom:

```text
Avatar
User Name
User Role / Email
Dropdown
```

The active route must be visually obvious.

Recommended active-state treatment:

- Black background
- White text
- Slightly rounded container

Avoid overly large pills.

---

# 7. Page Header

Every dashboard child page should have a consistent page-header
structure.

Example:

```text
[Section Label]

Page Title
Short description explaining the purpose of the page.

                         [Primary Action]
```

On mobile:

```text
Section Label

Page Title

Description

[Primary Action]
```

The title should be visually dominant.

Use Albert Sans.

---

# 8. Dashboard Home --- `/dashboard`

The dashboard home should provide a quick overview of the user's
career-development activity.

Suggested structure:

```text
Page Header
↓
Welcome / Overview Card
↓
Key Metrics
↓
Continue Learning / Active Roadmap
↓
Career Progress
↓
Recommended Actions
↓
Recent Activity
```

## Hero / Welcome Card

Create a visually compelling primary card.

Include:

- Personalized greeting
- Short description
- Primary CTA
- Secondary CTA
- Decorative image or illustration

Example content:

```text
Welcome back, Pratyay

Continue building the skills that move you closer
to your target career.

[Continue Roadmap]
[Explore Opportunities]
```

Do not hard-code the user's real name in production. Use dynamic user
data.

---

# 9. Dashboard Metrics

Create visually appealing metric cards.

Possible metrics:

```text
Roadmap Progress
Interview Sessions
Skills Acquired
Career Readiness
```

Each card can contain:

- Label
- Large number
- Supporting description
- Trend/progress indicator
- Small visual element

Example:

```text
ROADMAP PROGRESS

68%

+12% this month
```

Use the tertiary yellow selectively for highlighted metrics.

---

# 10. Roadmaps --- `/dashboard/roadmaps`

The roadmap page should be visually centered around active learning
paths.

Suggested structure:

```text
Page Header
↓
Featured / Active Roadmap
↓
Roadmap Cards
↓
Recommended Roadmaps
```

## Roadmap Card

Each card should contain:

- Roadmap title
- Short description
- Difficulty
- Estimated duration
- Progress
- Number of skills
- Last activity
- CTA

Example:

```text
Full-Stack Developer

Build production-ready full-stack applications
using modern frontend and backend technologies.

68% Complete

12 / 18 Skills

[Continue]
```

Cards should have strong hierarchy and clear actions.

---

# 11. Roadmap Detail Pages

For pages such as:

```text
/dashboard/roadmaps/[id]
```

Create a structured learning experience.

Recommended layout:

```text
Back Navigation
↓
Roadmap Header
↓
Progress Overview
↓
Learning Timeline / Skill Graph
↓
Current Module
↓
Upcoming Modules
↓
Resources
```

The learning roadmap can use:

- Timeline cards
- Skill nodes
- Progress bars
- Completion indicators
- Expandable sections

Keep the visual hierarchy clear even when the roadmap contains many
nodes.

---

# 12. Career Guidance --- `/dashboard/career-guidance`

Design this page as an AI-powered career analysis workspace.

Suggested sections:

```text
Page Header
↓
Career Profile Summary
↓
Recommended Roles
↓
Strengths
↓
Skill Gaps
↓
Market Readiness
↓
Recommended Actions
```

## Career Recommendation Cards

Each card may contain:

- Job title
- Match percentage
- Required skills
- User's strengths
- Missing skills
- CTA

Example:

```text
Full-Stack Developer

92% Match

Strong match based on:
React · Node.js · REST APIs

Skill gaps:
Testing · System Design

[View Analysis]
```

Use progress indicators and badges carefully.

---

# 13. Assessment --- `/dashboard/assessment`

Create a professional assessment interface.

Suggested structure:

```text
Assessment Overview
↓
Current Assessment
↓
Skill Categories
↓
Performance Summary
↓
Recommended Improvements
```

Use cards for categories such as:

```text
Frontend
Backend
Databases
DevOps
Problem Solving
Communication
```

Visualize scores with:

- Progress bars
- Circular indicators
- Small charts
- Score cards

Avoid making the page look like a generic analytics dashboard.

---

# 14. Interview Simulation --- `/dashboard/interview-simulation`

Design this module around an interview workflow.

## Start Screen

Include:

```text
Role
Experience Level
Difficulty
Interview Type
Number of Questions
```

Use a clean configuration card.

## Interview Screen

Structure:

```text
Interview Progress
↓
Question
↓
Answer Area
↓
Voice / Text Controls
↓
Submit / Next
```

The UI should clearly differentiate:

- Question
- User response
- Timer
- Progress
- Controls

## Results Screen

Include:

```text
Overall Score
↓
Strengths
↓
Weaknesses
↓
Question-by-question feedback
↓
Recommended improvements
```

---

# 15. Profile --- `/dashboard/profile`

Create a clean profile management page.

Suggested sections:

```text
Profile Header
↓
Personal Information
↓
Career Preferences
↓
Skills
↓
Education
↓
Experience
```

Use a two-column layout on desktop where appropriate.

On mobile, stack sections vertically.

---

# 16. Settings --- `/dashboard/settings`

Use a structured settings layout.

Possible sections:

```text
Account
Appearance
Notifications
Privacy
AI Preferences
```

Use tabs or a left-side settings navigation on desktop.

Each setting should be presented as a clear row/card with:

- Setting name
- Description
- Control

---

# 17. Cards

Cards are a major component of the visual language.

Use:

- Moderate corner radius
- Clear hierarchy
- Consistent padding
- Subtle borders
- Minimal shadows

Suggested radius:

```css
border-radius: 16px;
```

For prominent cards:

```css
border-radius: 20px;
```

Avoid using excessive `border-radius: 9999px` except for:

- Avatars
- Status indicators
- Small badges
- Compact controls

---

# 18. Buttons

Buttons should have strong visual hierarchy.

## Primary Button

```text
Black background
White text
```

Example:

```text
[ Continue Roadmap ]
```

## Secondary Button

Use:

```text
Neutral / secondary background
Black text
```

## Tertiary Button

Use:

```text
Transparent background
Black text
```

Buttons should include subtle transitions.

Recommended interaction:

```text
Default
→ Hover: slight lift / tonal change
→ Active: slight scale reduction
→ Focus: visible focus ring
```

Avoid excessive motion.

---

# 19. Animations

Animations should feel smooth and intentional.

Use animations for:

- Page transitions
- Card hover
- Button interaction
- Navigation state changes
- Modal opening
- Drawer opening
- Progress updates
- Content reveal
- Loading states

Recommended principles:

```text
Duration: 150–300ms
Easing: ease-out / cubic-bezier
```

Use longer durations only for larger layout transitions.

Avoid:

- Constant floating animations
- Excessive parallax
- Large bouncing elements
- Animation on every element simultaneously

Respect:

```css
prefers-reduced-motion: reduce;
```

When reduced motion is enabled, minimize or disable non-essential
animations.

---

# 20. Images and Visual Assets

Use compelling dummy images where imagery improves the UI.

Preferred visual direction:

- Modern career imagery
- Abstract technology illustrations
- Professional workspace imagery
- Skill-related illustrations
- Subtle editorial-style photography

Do not use random stock images simply to fill space.

Images should support the content.

Use appropriate:

- `object-fit`
- Aspect ratios
- Rounded corners
- Responsive sizing
- Lazy loading where appropriate

If remote images are used, make sure they are compatible with the
application's image configuration.

---

# 21. Responsive Breakpoints

The UI must work across:

### Mobile

Approx:

```text
320px–639px
```

### Tablet

Approx:

```text
640px–1023px
```

### Medium Desktop

Approx:

```text
1024px–1279px
```

### Large Desktop

Approx:

```text
1280px+
```

Do not rely only on fixed pixel widths.

Prefer:

- CSS Grid
- Flexbox
- `minmax()`
- `clamp()`
- Responsive padding
- Fluid typography

Example:

```css
font-size: clamp(1.75rem, 3vw, 3rem);
```

---

# 22. Responsive Card Grids

Use adaptive grids.

Example:

```css
grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
```

Cards should naturally resize rather than creating horizontal overflow.

Never allow the dashboard to require horizontal scrolling on mobile.

---

# 23. Empty States

Every major data-driven page should have a useful empty state.

Example:

```text
No active roadmaps yet

Start your first roadmap and build a personalized
learning path based on your career goals.

[Create Roadmap]
```

Empty states should include:

- Illustration or visual
- Explanation
- Primary CTA

Avoid blank pages.

---

# 24. Loading States

Use skeleton loaders for asynchronous dashboard content.

Skeletons should match the approximate dimensions of the final content.

Avoid showing a blank page while data loads.

For buttons performing asynchronous operations:

```text
Normal
→ Loading indicator
→ Success / completion state
```

---

# 25. Error States

Errors should be understandable and actionable.

Example:

```text
Something went wrong

We couldn't load your roadmap.

[Try Again]
```

Do not expose raw API errors to users.

---

# 26. Component Reuse

Create reusable components rather than duplicating UI.

Suggested component structure:

```text
components/
└── dashboard/
    ├── DashboardShell
    ├── DashboardSidebar
    ├── DashboardHeader
    ├── MobileNavigation
    ├── PageHeader
    ├── MetricCard
    ├── FeatureCard
    ├── RoadmapCard
    ├── CareerCard
    ├── ProgressCard
    ├── EmptyState
    ├── LoadingSkeleton
    └── SectionHeader
```

Reuse the same components throughout dashboard routes.

Do not create slightly different versions of the same card for every
page unless there is a genuine UX requirement.

---

# 27. Interaction States

All interactive elements must support:

```text
Default
Hover
Focus
Active
Disabled
Loading
```

Examples:

- Navigation items
- Buttons
- Cards
- Tabs
- Dropdowns
- Inputs
- Checkboxes
- Toggles

Cards that are clickable should visibly communicate clickability.

---

# 28. Forms

Forms should have:

- Clear labels
- Adequate spacing
- Strong focus states
- Error messages
- Helpful placeholder text
- Accessible controls

Do not rely on placeholder text as the only label.

Inputs should visually match the rest of the design system.

---

# 29. Spacing System

Use a consistent spacing scale.

Prefer multiples of approximately:

```text
4
8
12
16
20
24
32
40
48
64
80
```

Use larger spacing between major sections.

Avoid inconsistent arbitrary margins.

---

# 30. Visual Hierarchy

Every page should have a clear hierarchy:

```text
Page
 └── Section
      └── Card
           └── Content
                └── Action
```

Users should be able to understand:

1.  Where they are
2.  What the page is about
3.  What information matters
4.  What they can do next

within a few seconds.

---

# 31. Technical Implementation Principles

Before changing the UI:

1.  Inspect the existing project structure.
2.  Identify the framework and styling system already being used.
3.  Reuse existing components where possible.
4.  Reuse existing design tokens where appropriate.
5.  Avoid unnecessary dependency additions.
6.  Do not break existing routing or functionality.
7.  Keep business logic separate from presentation logic.
8.  Make components reusable.
9.  Preserve existing API/data integrations.
10. Use responsive CSS rather than hard-coded viewport-specific hacks.

The task is primarily a UI implementation task. Do not rewrite unrelated
application logic.

---

# 32. Existing Functionality

If a page already contains functional:

- API calls
- Authentication
- Database operations
- Forms
- Navigation
- State management
- AI integrations

preserve the functionality.

Improve the presentation layer without unnecessarily replacing working
logic.

Where real data is unavailable, use realistic dummy data that matches
the eventual data shape.

---

# 33. Data and Dummy Content

Dummy content should look realistic.

Avoid:

```text
Lorem ipsum
Test User
123
Sample text
```

Instead use realistic examples:

```text
Full-Stack Developer
Frontend Engineer
Cloud Engineer
AI Engineer
Backend Developer
```

Example skills:

```text
React
Next.js
Node.js
TypeScript
PostgreSQL
Docker
AWS
System Design
```

Example progress values:

```text
42%
68%
76%
91%
```

Dummy content should communicate how the final product will look with
real user data.

---

# 34. Visual Polish Checklist

Before considering a page complete, verify:

- [ ] Typography is consistent.
- [ ] Albert Sans is used for headings/labels.
- [ ] Geist is used for body text.
- [ ] Colors follow the defined palette.
- [ ] Text/background contrast is high.
- [ ] Cards have consistent spacing.
- [ ] Buttons have interaction states.
- [ ] Navigation clearly indicates the active route.
- [ ] Mobile layout works without horizontal scrolling.
- [ ] Tablet layout works correctly.
- [ ] Desktop layout uses available space effectively.
- [ ] Images are visually relevant.
- [ ] Loading states exist where necessary.
- [ ] Empty states exist where necessary.
- [ ] Error states exist where necessary.
- [ ] Animations are subtle and smooth.
- [ ] Reduced-motion preferences are respected.
- [ ] Components are reusable.
- [ ] Existing functionality remains intact.

---

# 35. Definition of Done

The implementation is complete when:

1.  `/dashboard` has a polished overview experience.
2.  All existing `/dashboard/*` child routes use the same visual system.
3.  A shared dashboard shell is implemented.
4.  Navigation works across desktop, tablet, and mobile.
5.  Typography is consistent.
6.  The specified color palette is consistently applied.
7.  Contrast is accessible throughout the interface.
8.  Cards and sections have strong visual hierarchy.
9.  Dummy content and images are realistic and visually compelling.
10. Interactions have polished hover/focus/active states.
11. Page and component transitions feel smooth.
12. Responsive layouts work from approximately 320px to large desktop
    displays.
13. Existing functionality and data integrations are preserved.
14. No unnecessary dependencies or unrelated architectural changes are
    introduced.
15. The resulting UI feels like one cohesive product rather than
    separate page designs.
