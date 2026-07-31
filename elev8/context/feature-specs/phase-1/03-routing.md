# Phase 1.3 - Routing

## Objective

Establish the complete routing structure for **Elev8** using the Next.js App Router. This phase should create all application routes, layouts, route groups, loading states, error boundaries, and placeholder pages without implementing any business logic or UI.

The goal is to provide a scalable navigation foundation that future features can build upon.

---

# Background

Elev8 is an AI-powered career development platform consisting of multiple independent modules.

Each module should have its own route and be organized using the App Router.

Only routing and page scaffolding should be created during this phase.

---

# AI Implementation Rules

Before implementation:

- Read this entire specification.
- Only implement routing.
- Do not implement UI.
- Do not implement business logic.
- Do not connect APIs.
- Do not create authentication flows.
- Do not create database models.
- Do not install additional packages unless required for routing.
- Every page should render a simple placeholder.

Example:

```tsx
export default function CareerAssessmentPage() {
  return <div>Career Assessment</div>;
}
```

---

# Functional Requirements

The routing system should:

- Use the Next.js App Router.
- Use route groups where appropriate.
- Separate public and protected sections.
- Support nested layouts.
- Include loading and error boundaries.
- Include a 404 page.
- Be easily scalable.

---

# Route Architecture

```
src/
└── app/
    │
    ├── (public)/
    │   ├── page.tsx
    │   ├── pricing/
    │   ├── about/
    │   ├── contact/
    │   ├── faq/
    │   └── layout.tsx
    │
    ├── (auth)/
    │   ├── sign-in/
    │   ├── sign-up/
    │   ├── forgot-password/
    │   └── layout.tsx
    │
    ├── (dashboard)/
    │   ├── dashboard/
    │   ├── career-assessment/
    │   ├── career-guidance/
    │   ├── roadmaps/
    │   ├── resume/
    │   ├── interview/
    │   ├── progress/
    │   ├── settings/
    │   └── layout.tsx
    │
    ├── api/
    │
    ├── not-found.tsx
    ├── loading.tsx
    ├── error.tsx
    └── global-error.tsx
```

---

# Public Routes

Create placeholder pages for:

```
/

about

pricing

contact

faq
```

These pages should use the Public Layout.

---

# Authentication Routes

Create:

```
/sign-in

/sign-up

/forgot-password
```

These pages should use the Authentication Layout.

No authentication logic should be implemented.

---

# Protected Routes

Create placeholder pages for:

```
/dashboard

/career-assessment

/career-guidance

/roadmaps

/resume

/interview

/progress

/settings
```

These pages should use the Dashboard Layout.

No route protection should be implemented during this phase.

---

# Shared Layouts

Create the following layouts:

## Root Layout

Responsibilities

- Global HTML structure
- Providers placeholder
- Global styles

---

## Public Layout

Responsibilities

- Public navigation placeholder
- Footer placeholder
- Main content wrapper

---

## Authentication Layout

Responsibilities

- Centered authentication container
- Authentication wrapper

---

## Dashboard Layout

Responsibilities

- Sidebar placeholder
- Top navigation placeholder
- Main content area

---

# Error Handling

Create placeholder files for:

```
loading.tsx

error.tsx

global-error.tsx

not-found.tsx
```

Each should render a minimal placeholder component.

---

# Route Metadata

Every page should export metadata.

Example

```tsx
export const metadata = {
  title: "Dashboard | Elev8",
};
```

Use appropriate placeholder titles.

---

# Navigation Constants

Create:

```
constants/routes.ts
```

Include route constants.

Example

```ts
export const ROUTES = {
  HOME: "/",
  DASHBOARD: "/dashboard",
  CAREER_ASSESSMENT: "/career-assessment",
  CAREER_GUIDANCE: "/career-guidance",
  ROADMAPS: "/roadmaps",
  RESUME: "/resume",
  INTERVIEW: "/interview",
  PROGRESS: "/progress",
  SETTINGS: "/settings",
};
```

---

# Navigation Configuration

Create:

```
constants/navigation.ts
```

Export placeholder navigation arrays.

Example

```ts
export const PUBLIC_NAVIGATION = [];

export const DASHBOARD_NAVIGATION = [];
```

No implementation required.

---

# Folder Structure

```
app/

(public)/

(auth)/

(dashboard)/

api/

loading.tsx

error.tsx

global-error.tsx

not-found.tsx
```

---

# UI Requirements

Only render simple placeholders.

No styling beyond minimal spacing.

No responsive implementation.

No components.

No animations.

---

# Non-Functional Requirements

- Use TypeScript.
- Use App Router conventions.
- Keep routing modular.
- Use route groups.
- Support future nested routing.
- Keep layouts reusable.
- Follow Next.js best practices.

---

# Acceptance Criteria

- App Router structure is complete.
- Public routes compile.
- Authentication routes compile.
- Dashboard routes compile.
- Route groups are correctly organized.
- Layouts compile.
- Error pages compile.
- Loading page compiles.
- Route constants exist.
- Navigation constants exist.
- No business logic is implemented.
- No authentication is implemented.
- No API routes are implemented.

---

# Out of Scope

Do NOT implement:

- Navigation UI
- Sidebar
- Header
- Footer
- Clerk authentication
- Route guards
- Middleware
- API routes
- Feature pages
- Database
- AI functionality
- State management

---

# Task Checklist

## App Router

- [ ] Create route groups
- [ ] Create Root Layout
- [ ] Create Public Layout
- [ ] Create Authentication Layout
- [ ] Create Dashboard Layout

## Public Pages

- [ ] Home
- [ ] About
- [ ] Pricing
- [ ] Contact
- [ ] FAQ

## Authentication Pages

- [ ] Sign In
- [ ] Sign Up
- [ ] Forgot Password

## Dashboard Pages

- [ ] Dashboard
- [ ] Career Assessment
- [ ] Career Guidance
- [ ] Roadmaps
- [ ] Resume
- [ ] Interview
- [ ] Progress
- [ ] Settings

## Error Handling

- [ ] Create loading.tsx
- [ ] Create error.tsx
- [ ] Create global-error.tsx
- [ ] Create not-found.tsx

## Constants

- [ ] Create routes.ts
- [ ] Create navigation.ts

## Validation

- [ ] Verify all routes compile
- [ ] Verify layouts compile
- [ ] Verify placeholder pages render
- [ ] Verify metadata exists for every page
- [ ] Verify project builds successfully
