# Phase 1.4 - Authentication Foundation

## Objective

Implement a secure, scalable authentication foundation for **Elev8** using **Clerk Authentication**.

This phase establishes the authentication infrastructure required for the application, including authentication providers, protected routes, middleware, session management, and authentication pages.

**No user profile, onboarding, or application-specific data should be implemented in this phase.**

---

# Background

Elev8 is an AI-powered career development platform where every personalized feature requires authentication.

Authentication serves only one purpose in this phase:

> Verify the identity of users and securely manage their sessions.

Personalization, profile creation, career assessment, and onboarding will be implemented in later phases.

---

# AI Implementation Rules

Before implementation:

- Read this specification completely.
- Only implement authentication infrastructure.
- Do NOT implement onboarding.
- Do NOT implement user profiles.
- Do NOT implement database models.
- Do NOT create feature-specific logic.
- Do NOT build the dashboard.
- Follow Clerk best practices.
- Follow Next.js App Router conventions.
- Use TypeScript.
- Keep all authentication code modular and reusable.

---

# Tech Stack

Authentication

- Clerk

Framework

- Next.js App Router

Language

- TypeScript

---

# Authentication Providers

Configure Clerk with:

- Email & Password Authentication
- Google OAuth

Do not customize Clerk UI.

Use Clerk's default appearance.

---

# Functional Requirements

The authentication system should provide:

- Authentication Provider
- Clerk middleware
- Session management
- Protected routes
- Public routes
- Sign In page
- Sign Up page
- Logout
- Current user retrieval
- Authentication helpers
- User Button

---

# Public Routes

The following routes must remain publicly accessible.

```
/

pricing

sign-in

sign-up
```

No authentication required.

---

# Protected Routes

The following routes require authentication.

```
/dashboard
/dashboard/career-assessment
/dashboard/career-guidance
/dashboard/roadmaps
/dashboard/resume
/dashboard/interview
/dashboard/progress
/dashboard/settings
```

Unauthenticated users should automatically be redirected to:

```
/sign-in
```

---

# Middleware

Create

```
middleware.ts
```

Responsibilities

- Configure Clerk middleware.
- Protect dashboard routes.
- Allow public routes.
- Handle authentication redirects.

No custom authorization logic.

---

# Root Provider

Configure

```
ClerkProvider
```

inside

```
app/layout.tsx
```

The application should compile successfully.

---

# Authentication Layout

Create

```
app/(auth)/layout.tsx
```

Responsibilities

- Shared layout for authentication pages.
- Center authentication content.
- Responsive container.

No styling beyond basic layout.

---

# Authentication Pages

Create

```
sign-in/

page.tsx

sign-up/

page.tsx
```

Use Clerk components.

Do not build custom forms.

Do not customize appearance.

---

# Shared Authentication Components

Create

```
components/auth/

user-button.tsx

auth-guard.tsx

auth-loading.tsx

protected-route.tsx

index.ts
```

Only minimal wrappers where necessary.

---

# Authentication Library

Create

```
lib/auth.ts
```

Export reusable helpers.

Example responsibilities

- Get current user
- Get current session
- Authentication helper utilities

---

# Environment Variables

Update

```
.env.example
```

Include

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=

CLERK_SECRET_KEY=
```

Do not include actual keys.

---

# Navigation Behavior

Guest users

Display

- Sign In
- Get Started

Authenticated users

Display

- Dashboard
- User Button

Only prepare placeholders.

---

# Session Management

Implement

- Current user retrieval
- Current session retrieval
- Logout
- Session persistence

Use Clerk APIs only.

---

# Error Handling

Gracefully handle

- Missing session
- Unauthorized access
- Invalid authentication state

Use Clerk defaults whenever possible.

---

# Folder Structure

```
src/

app/

(auth)/

sign-in/

sign-up/

components/

auth/

lib/

auth.ts

providers/

clerk-provider.tsx

middleware.ts
```

---

# Security Requirements

- All protected routes require authentication.
- Authentication state persists across refreshes.
- Sessions remain secure.
- Secrets must never be exposed.
- Logout completely clears the session.

---

# Non-Functional Requirements

- Modular authentication.
- Type-safe implementation.
- Reusable helpers.
- Production-ready structure.
- Follow Clerk best practices.
- Clean separation of concerns.

---

# Acceptance Criteria

Authentication Infrastructure

- Clerk is installed.
- Clerk Provider is configured.
- Middleware is configured.
- Environment variables are documented.

Authentication

- Sign In page works.
- Sign Up page works.
- Google authentication works.
- Email/password authentication works.
- User Button renders correctly.
- Logout works.

Routing

- Public routes remain accessible.
- Protected routes require authentication.
- Unauthorized users are redirected.
- Sessions persist across refreshes.

Code Quality

- No TypeScript errors.
- No lint errors.
- Application builds successfully.
- Authentication code is modular.

---

# Out of Scope

The following features must NOT be implemented during this phase.

## User Management

- User Profile
- Profile Editing
- Avatar Upload
- Preferences
- Account Settings

## Onboarding

- Welcome Flow
- Career Assessment
- Initial Setup Wizard
- Skill Selection
- Goal Selection

## Application Features

- Dashboard
- Roadmaps
- Resume Builder
- Resume Scorer
- Interview Simulation
- Progress Tracking
- AI Chatbot

## Database

- Prisma Models
- User Synchronization
- Profile Tables

## Authorization

- Roles
- Permissions
- Admin Accounts
- Teams
- Organizations

---

# Deliverables

The implementation should include:

```
✓ Clerk configured

✓ Authentication middleware

✓ Authentication provider

✓ Sign In page

✓ Sign Up page

✓ Authentication layout

✓ Authentication helper library

✓ User Button

✓ Session handling

✓ Environment configuration

✓ Route protection
```

---

# Task Checklist

## Dependencies

- [ ] Install Clerk
- [ ] Configure Clerk

---

## Providers

- [ ] Configure ClerkProvider
- [ ] Verify provider loads correctly

---

## Environment

- [ ] Create environment variables
- [ ] Update `.env.example`

---

## Middleware

- [ ] Configure Clerk middleware
- [ ] Configure protected routes
- [ ] Configure public routes
- [ ] Verify redirects

---

## Pages

- [ ] Create Sign In page
- [ ] Create Sign Up page
- [ ] Configure authentication layout

---

## Components

- [ ] Create User Button
- [ ] Create Auth Guard
- [ ] Create Protected Route helper
- [ ] Create Authentication Loading component

---

## Authentication Library

- [ ] Create `lib/auth.ts`
- [ ] Export reusable authentication helpers

---

## Session Management

- [ ] Current user retrieval
- [ ] Current session retrieval
- [ ] Logout
- [ ] Session persistence

---

## Validation

- [ ] Guest users can access public pages.
- [ ] Guest users are redirected from protected pages.
- [ ] Authenticated users can access protected pages.
- [ ] Sessions persist after page refresh.
- [ ] Google authentication works.
- [ ] Email/password authentication works.
- [ ] Logout works correctly.
- [ ] Project builds successfully.
- [ ] No TypeScript errors.
- [ ] No lint errors.
