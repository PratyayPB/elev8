# Phase 1 - Project Setup

## Objective

Initialize a scalable, production-ready foundation for **Elev8**, an AI-powered career development platform built with Next.js. This phase establishes the project architecture, development environment, coding standards, and shared infrastructure without implementing any business features.

---

# Background

Elev8 is an end-to-end AI career development platform consisting of multiple interconnected modules:

- Landing Page
- Authentication
- Dashboard
- Career Assessment
- AI Career Guidance
- AI Roadmap Generator
- Resume Builder
- Resume Scorer
- Interview Simulation
- Progress Tracker
- AI Career Assistant

The project should be built using a modular, feature-first architecture that supports long-term scalability and maintainability.

---

# AI Implementation Rules

Before implementing this specification:

- Read the entire specification.
- Only implement tasks listed in this document.
- Do not build business features.
- Do not create API endpoints.
- Do not implement authentication logic.
- Do not write AI prompts.
- Do not connect external services.
- Do not create database models.
- Keep the codebase modular.
- Follow Next.js App Router best practices.
- Use TypeScript everywhere.
- Add TODO comments where future implementation is expected.

---

# Tech Stack

Frontend

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion

Backend

- Next.js Route Handlers
- Prisma
- PostgreSQL

Authentication

- Clerk

State Management

- Zustand

Data Fetching

- TanStack Query

Forms

- React Hook Form
- Zod

AI

- Google ADK
- Trigger.dev

Storage

- Vercel Blob

Utilities

- Lucide Icons
- clsx
- class-variance-authority

---

# Functional Requirements

The project should include:

- Next.js App Router setup
- TypeScript configuration
- Tailwind configuration
- shadcn/ui initialization
- ESLint
- Prettier
- Environment variable support
- Path aliases
- Shared providers
- Feature-first folder structure
- Shared utility folders
- Placeholder pages
- Placeholder components
- Placeholder services
- Documentation files

No feature implementation is required.

---

# Project Folder Structure

```
elev8/

src/

app/

components/

features/

hooks/

lib/

providers/

services/

store/

types/

constants/

config/

utils/

styles/

public/

prisma/

docs/

specs/
```

---

# App Router

Initialize the following pages only.

```
/

(sign-in)

/(sign-up)

/dashboard

/career-assessment

/career-guidance

/roadmaps

/resume

/interview

/progress

/pricing

/settings
```

Each page should export a minimal placeholder component.

Example

```tsx
export default function DashboardPage() {
  return <div>Dashboard</div>;
}
```

---

# Shared Components

Create folders only.

```
layout/

navigation/

landing/

dashboard/

cards/

charts/

forms/

dialogs/

feedback/

animations/

shared/

career/

roadmaps/

resume/

interview/

progress/

ui/
```

Every folder should contain

```
index.ts
```

---

# Landing Page Components

Create placeholders for

```
Header

Hero

Social Proof

About

Features

How It Works

Dashboard Preview

Gallery

Pricing

Testimonials

FAQ

CTA

Contact

Footer

Chatbot
```

---

# Features

Create modules.

```
career-assessment/

career-guidance/

roadmaps/

resume/

interview/

progress/

dashboard/
```

Every feature should contain

```
components/

hooks/

services/

types.ts

constants.ts

utils.ts

index.ts
```

---

# Shared Services

Create placeholder services.

```
ai/

career/

dashboard/

roadmaps/

resume/

interview/

analytics/

storage/

user/
```

Each service should export an empty placeholder class or functions.

---

# Shared Hooks

Initialize

```
use-mobile.ts

use-user.ts

use-theme.ts

use-local-storage.ts

use-api.ts

use-debounce.ts
```

---

# Zustand Stores

Initialize empty stores.

```
user.store.ts

career.store.ts

roadmap.store.ts

resume.store.ts

interview.store.ts

dashboard.store.ts

progress.store.ts
```

---

# Providers

Create providers.

```
ThemeProvider

QueryProvider

ToastProvider

ClerkProvider
```

Only boilerplate.

---

# Utilities

Initialize

```
helpers.ts

format.ts

validation.ts

dates.ts

storage.ts
```

---

# Constants

```
routes.ts

navigation.ts

pricing.ts

career.ts

roadmap.ts

resume.ts
```

---

# Types

```
career.ts

roadmap.ts

resume.ts

interview.ts

dashboard.ts

common.ts

api.ts
```

---

# Configuration

Initialize

```
site.ts

env.ts

auth.ts

ai.ts

dashboard.ts
```

---

# Library

Initialize

```
prisma.ts

db.ts

auth.ts

openai.ts

trigger.ts

uploadthing.ts

utils.ts
```

Each file should export placeholders only.

---

# Database

Initialize

```
prisma/

schema.prisma

seed.ts

migrations/
```

Leave schema empty.

---

# Public Assets

Create

```
images/

logos/

avatars/

icons/

illustrations/
```

---

# Documentation

Create

```
README.md

PROJECT_OVERVIEW.md

ARCHITECTURE.md

CONTRIBUTING.md

CHANGELOG.md

ROADMAP.md

LICENSE

.env.example
```

Populate each file with headings and TODO sections only.

---

# Specs Directory

Create

```
specs/

phase-01-project-setup.md

phase-02-landing-page.md

phase-03-authentication.md

phase-04-dashboard.md

phase-05-career-assessment.md

phase-06-career-guidance.md

phase-07-roadmaps.md

phase-08-resume.md

phase-09-interview.md

phase-10-progress.md
```

Each file should contain only a placeholder heading.

---

# Code Quality

Initialize

```
.gitignore

.prettierrc

.prettierignore

.eslintrc

tsconfig.json

next.config.ts

tailwind.config.ts

postcss.config.js

components.json
```

No customization beyond boilerplate.

---

# Non-Functional Requirements

- Modular architecture
- Feature-first organization
- Strict TypeScript
- Reusable shared components
- Consistent folder naming
- Path aliases configured
- Fast build times
- Production-ready structure
- Maintainable codebase
- No dead code

---

# Acceptance Criteria

- Project initializes successfully.
- Development server runs without errors.
- Folder structure matches specification.
- All placeholder pages compile.
- Shared folders exist.
- Placeholder services compile.
- Placeholder providers compile.
- Documentation files exist.
- Prisma initializes successfully.
- No business logic is implemented.
- No authentication flow exists.
- No API routes are implemented.
- No AI functionality is implemented.

---

# Out of Scope

The following must NOT be implemented during this phase:

- Landing page UI
- Dashboard UI
- Authentication
- Database models
- AI integrations
- API endpoints
- Resume Builder
- Resume Scorer
- Career Assessment
- Career Guidance
- Roadmap Generator
- Interview Simulation
- Progress Tracking
- Payments
- Notifications

---

# Task Checklist

## Repository

- [ ] Initialize Next.js project
- [ ] Configure TypeScript
- [ ] Configure Tailwind CSS
- [ ] Initialize shadcn/ui
- [ ] Configure ESLint
- [ ] Configure Prettier
- [ ] Configure aliases

## Project Structure

- [ ] Create shared folders
- [ ] Create feature folders
- [ ] Create services
- [ ] Create hooks
- [ ] Create stores
- [ ] Create providers
- [ ] Create utilities
- [ ] Create configuration files

## Pages

- [ ] Create placeholder routes
- [ ] Create placeholder layouts

## Documentation

- [ ] Create README
- [ ] Create Architecture document
- [ ] Create Project Overview
- [ ] Create Roadmap
- [ ] Create Specs directory

## Database

- [ ] Initialize Prisma
- [ ] Create empty schema
- [ ] Create seed file

## Assets

- [ ] Create public asset folders

## Validation

- [ ] Verify project builds successfully
- [ ] Verify lint passes
- [ ] Verify no TypeScript errors
- [ ] Verify all placeholder pages render
