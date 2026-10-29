# AGENT_RULES.md

# Elev8 — Global Implementation Rules

## Purpose

This document defines the global architecture, implementation guidelines, coding standards, and project conventions for **Elev8**.

Every implementation must follow these rules unless a specification explicitly overrides them.

Before implementing any specification, always read:

1. AGENT_RULES.md
2. project-overview.md
3. architecture-context.md
4. The current specification file
5. Installed skills in `.agents/skills/` (for domain-specific tasks)

---

# Installed Agent Skills & Domain Guides

When implementing features in specific technical domains, agents MUST read and follow the specialized instructions in `.agents/skills/`:

### 1. Auth & Clerk Integration
- **Clerk Next.js Patterns**: [clerk-nextjs-patterns](file:///.agents/skills/clerk-nextjs-patterns/SKILL.md) — Middleware, Server Actions, route protection.
- **Clerk Webhooks**: [clerk-webhooks](file:///.agents/skills/clerk-webhooks/SKILL.md) — Event handling (`verifyWebhook`), user sync.
- **Clerk Backend API**: [clerk-backend-api](file:///.agents/skills/clerk-backend-api/SKILL.md) — Backend management APIs.
- **Clerk Testing**: [clerk-testing](file:///.agents/skills/clerk-testing/SKILL.md) — Auth E2E testing.

### 2. Database & Prisma
- **Prisma Client API**: [prisma-client-api](file:///.agents/skills/prisma-client-api/SKILL.md) — Query patterns, filters, `$transaction`.
- **Prisma Database Setup**: [prisma-database-setup](file:///.agents/skills/prisma-database-setup/SKILL.md) — Connection & provider config.
- **Prisma Postgres**: [prisma-postgres](file:///.agents/skills/prisma-postgres/SKILL.md) & [prisma-postgres-setup](file:///.agents/skills/prisma-postgres-setup/SKILL.md) — CLI & provisioning.

### 3. AI & Multimodal Models
- **Gemini API Dev**: [gemini-api-dev](file:///.agents/skills/gemini-api-dev/SKILL.md) — `@google/genai` SDK, structured output, function calling, multimodal.

### 4. Background Jobs & AI Orchestration (Trigger.dev)
- **Trigger Setup & Config**: [trigger-setup](file:///.agents/skills/trigger-setup/SKILL.md) & [trigger-config](file:///.agents/skills/trigger-config/SKILL.md) — `trigger.config.ts` setup and build extensions.
- **Trigger Tasks & Realtime**: [trigger-tasks](file:///.agents/skills/trigger-tasks/SKILL.md) & [trigger-realtime](file:///.agents/skills/trigger-realtime/SKILL.md) — Background jobs, retries, cron, streaming UI hooks.
- **Trigger Agents & Cost Savings**: [trigger-agents](file:///.agents/skills/trigger-agents/SKILL.md) & [trigger-cost-savings](file:///.agents/skills/trigger-cost-savings/SKILL.md) — Multi-agent orchestration and usage audit.

---

# Project Vision

Elev8 is an AI-powered career development platform that provides a complete ecosystem for career growth.

The platform allows users to

- Discover career paths
- Receive AI-powered career guidance
- Generate personalized learning roadmaps
- Build ATS-friendly resumes
- Practice AI interviews
- Track career progress
- Improve career readiness over time

Elev8 is designed as a modular platform where each feature can be used independently while benefiting from shared user data and personalization.

---

# Core Product Principles

## 1. Progressive Personalization

Users should never be forced to complete information that is not necessary for the feature they want to use.

Instead,

- Collect information gradually.
- Ask only for information required by the current feature.
- Encourage profile completion instead of requiring it.

Examples

Roadmap Generator

Required

- Target Career
- Experience Level

Resume Builder

Required

- Resume Information

Interview Simulation

Required

- Target Role

Career Guidance

Benefits from a complete profile but should gracefully request missing information when needed.

---

## 2. Optional Onboarding

Onboarding is optional.

Users should be able to

- Skip onboarding
- Explore every module
- Return later
- Complete onboarding gradually

No feature should be blocked because onboarding was skipped.

---

## 3. Feature Independence

Each major module should work independently.

Examples

- Resume Builder should work without Career Assessment.
- Roadmap Generator should work without Resume Builder.
- Interview Simulation should work without Career Guidance.

Modules may use shared information but must not depend on each other.

---

## 4. AI Enhances Features

AI should enhance user experience.

AI should never become a requirement for navigation or basic functionality.

---

# Architecture Principles

## Feature-First Architecture

```
src/

features/

components/

services/

hooks/

lib/

providers/

store/

utils/
```

Every feature should remain self-contained.

---

## Shared Components

Shared UI belongs inside

```
components/
```

Feature-specific UI belongs inside

```
features/<feature>/components/
```

---

## Business Logic

Business logic belongs inside

```
services/
```

Never place business logic inside UI components.

---

## Hooks

Reusable logic belongs inside hooks.

Avoid duplicating state logic.

---

## Utilities

Pure utility functions belong inside

```
utils/
```

Utilities must never depend on UI.

---

# Data Architecture

## Metadata + Blob Strategy

Elev8 uses a hybrid storage architecture.

---

### PostgreSQL (Prisma)

Store

- User data
- Metadata
- Relationships
- Status
- Preferences
- Blob URLs
- IDs
- Timestamps

---

### Blob Storage

Store

- Roadmaps
- Career Guidance Reports
- Resume Analysis
- Interview Reports
- AI Responses
- Exported Markdown
- Exported PDF
- Uploaded Documents
- Generated JSON

---

Never store large AI-generated JSON inside PostgreSQL.

Instead

```
Prisma

↓

blobUrl

↓

Blob Storage
```

---

# Database Principles

- Normalize relational data.
- Use enums where appropriate.
- Use relations instead of duplicated fields.
- Add timestamps to every model.
- Add indexes where appropriate.

---

# UI Principles

The UI should be

- Clean
- Minimal
- Modern
- Accessible
- Responsive
- Consistent

---

Avoid

- Overly complex layouts
- Excessive animations
- Unnecessary visual clutter

---

# Component Principles

Components should

- Be reusable
- Have a single responsibility
- Remain small
- Be easy to test

Avoid massive components.

---

# State Management

Use

Zustand

Only for global state.

Keep local component state local.

---

# Forms

Use

React Hook Form

-

Zod

for every form.

Avoid manual validation.

---

# API Design

API routes should

- Validate input
- Return typed responses
- Handle errors gracefully
- Avoid unnecessary database queries

---

# AI Services

Every AI module should be separated into its own service.

Examples

```
services/

career/

roadmaps/

resume/

interview/
```

Never mix AI logic with UI components.

---

# Code Style

Always use

TypeScript

Prefer

- const
- async/await
- named exports
- explicit typing

Avoid

- any
- unnecessary comments
- duplicated code

---

# Naming Conventions

Components

```
CareerCard.tsx
```

Hooks

```
use-career.ts
```

Services

```
career.service.ts
```

Stores

```
career.store.ts
```

Types

```
career.ts
```

Constants

```
career.ts
```

---

# Folder Conventions

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

# Error Handling

Always

- Validate inputs.
- Handle loading states.
- Handle empty states.
- Handle API failures.
- Handle authentication failures.

---

# Performance Principles

Prefer

- Server Components
- Lazy Loading
- Dynamic Imports
- Pagination
- Debouncing
- Memoization only when beneficial

Avoid premature optimization.

---

# Accessibility

Every implementation should

- Support keyboard navigation.
- Include ARIA labels where appropriate.
- Use semantic HTML.
- Maintain sufficient contrast.

---

# Security

Never

- Expose secrets.
- Trust client input.
- Skip validation.

Always

- Validate inputs.
- Protect private routes.
- Sanitize user input.

---

# Documentation

Every major feature should include

- README
- Specification
- Types
- Constants

---

# Implementation Workflow

Every implementation should follow this process

1. Read AGENT_RULES.md.
2. Read PROJECT_OVERVIEW.md.
3. Read the current specification.
4. Understand the feature.
5. Identify dependencies.
6. Implement only the requested scope.
7. Validate implementation.
8. Ensure the project builds successfully.

---

# Implementation Rules

Always

- Follow the current specification.
- Keep implementations modular.
- Reuse existing code.
- Follow project architecture.
- Keep functions small.
- Keep components reusable.
- Use strict TypeScript.

Never

- Implement features outside the specification.
- Refactor unrelated code.
- Introduce breaking changes.
- Add unnecessary dependencies.
- Modify architecture without explicit approval.

---

# Out of Scope Rule

If a requested implementation is outside the current specification,

Do NOT implement it.

Instead,

- Leave a TODO comment if appropriate.
- Continue with only the requested work.

---

# Definition of Done

Before considering any specification complete, verify that

- The implementation satisfies every acceptance criterion.
- The project builds successfully.
- TypeScript reports no errors.
- Linting passes.
- No unrelated files were modified.
- The implementation follows AGENT_RULES.md.
- No scope creep occurred.

---

# Guiding Principle

**Build Elev8 as a modular, scalable, and maintainable platform where every feature delivers value independently, while progressively enhancing the user experience through optional personalization and AI-powered assistance.**
