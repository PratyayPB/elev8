# Code Standards

## General

- Keep modules small, cohesive, and single-purpose.
- Follow the Single Responsibility Principle.
- Fix root causes instead of adding workarounds.
- Do not mix unrelated concerns within the same component, hook, API route, or service.
- Respect the boundaries defined in `architecture-context.md`.
- Reuse existing components and utilities before creating new ones.
- Prefer clarity and maintainability over clever implementations.

---

## TypeScript

- Enable strict mode throughout the project.
- Avoid `any`.
- Use explicit interfaces for object contracts.
- Use type aliases for unions and utility types.
- Validate all external input before trusting it.
- Never suppress TypeScript errors without justification.
- Keep types close to the feature they belong to unless shared globally.

---

## Next.js

- Default to React Server Components.
- Add `"use client"` only when browser APIs, React hooks, or user interaction require it.
- Prefer Server Actions for server-side mutations.
- Keep Route Handlers thin.
- Route Handlers should orchestrate—not contain business logic.
- Never execute long-running AI tasks inside Route Handlers.

---

## React

- Keep components focused on one responsibility.
- Extract reusable UI into shared components.
- Separate presentation from business logic.
- Avoid deeply nested JSX.
- Prefer composition over prop drilling.
- Keep component files reasonably small.

---

## State Management

### Server State

- Keep server state on the server.
- Fetch data using Server Components whenever possible.

### Client State

Use Zustand only for UI state.

Examples:

- Theme
- Sidebar
- Dialog state
- Current interview session
- Wizard step

Do not duplicate persisted database state inside Zustand.

---

## Forms

- Use React Hook Form.
- Validate every form using Zod.
- Share validation schemas between client and server.
- Never trust client-side validation alone.
- Display meaningful validation errors.

---

## AI

- Every AI feature must have its own prompt.
- Store prompts under:

```
lib/ai/prompts/
```

- Request structured JSON responses whenever possible.
- Validate every AI response using Zod.
- Never persist invalid AI output.
- Keep prompts modular and reusable.
- Avoid embedding prompts directly inside components or API routes.

---

## Background Jobs

Use Trigger.dev for:

- Career guidance generation
- Roadmap generation
- Resume analysis
- Interview generation
- Interview evaluation
- Future scheduled jobs

Do not use Trigger.dev for:

- Simple CRUD operations
- Small database queries
- Lightweight API responses

---

## API Routes

Every Route Handler should:

1. Validate input
2. Authenticate user
3. Authorize access
4. Execute business logic
5. Return consistent responses

Keep Route Handlers thin.

Move business logic into:

- `lib/`
- `features/`
- `trigger/`

---

## Database

- Use Prisma for all database access.
- Prefer relations over duplicated data.
- Use migrations for schema changes.
- Never edit previous migrations.
- Keep models normalized.
- Avoid raw SQL unless necessary.

---

## Storage

### PostgreSQL

Store:

- User profiles
- Career assessments
- Career guidance
- Roadmaps
- Progress
- Resume metadata
- Interview sessions
- AI-generated structured data

### Vercel Blob

Store:

- Uploaded resumes
- Generated PDF resumes
- Exportable reports

Only Blob URLs belong in PostgreSQL.

---

## File Organization

```
app/
components/
features/
hooks/
lib/
prisma/
schemas/
trigger/
types/
```

Responsibilities

### app/

Routes, layouts, pages, Route Handlers, and Server Actions.

### components/

Reusable UI only.

No business logic.

### features/

Feature-specific components, services, and business logic.

### hooks/

Reusable React hooks.

### lib/

Shared infrastructure.

Examples:

- Prisma
- Clerk
- AI utilities
- Blob utilities
- Shared helpers

### schemas/

Zod validation schemas.

### trigger/

All Trigger.dev workflows.

### types/

Shared TypeScript types.

---

## Naming

Components

```
CareerDashboard.tsx
ResumeUploader.tsx
InterviewCard.tsx
```

Hooks

```
useCareerProgress.ts
useResumeAnalysis.ts
```

Utilities

```
calculateCareerScore.ts
extractResumeText.ts
```

Constants

```
MAX_RESUME_SIZE
DEFAULT_INTERVIEW_DURATION
```

Database Models

```
User
CareerAssessment
Roadmap
Resume
InterviewSession
```

---

## Styling

- Use Tailwind CSS.
- Use shadcn/ui as the component foundation.
- Never modify generated `components/ui/*`.
- Use design tokens instead of hardcoded colors.
- Keep layouts responsive.
- Maintain consistent spacing.
- Prefer utility classes over custom CSS.

---

## Error Handling

- Fail gracefully.
- Return consistent API responses.
- Never expose internal errors.
- Log unexpected failures.
- Show user-friendly error messages.

---

## Logging

Log:

- AI failures
- Trigger.dev workflow failures
- External API failures
- Unexpected server errors

Do not log:

- Passwords
- Tokens
- API keys
- Personal user information

---

## Performance

- Prefer Server Components.
- Lazy-load heavy components.
- Minimize client-side JavaScript.
- Avoid unnecessary re-renders.
- Memoize only when beneficial.
- Optimize images and assets.

---

## Security

- Validate every request.
- Authenticate protected routes.
- Authorize every mutation.
- Store secrets in environment variables.
- Sanitize uploaded files.
- Never trust client-side permissions.

---

## Testing

Use:

- Vitest for unit and integration tests.
- Playwright for end-to-end tests.

Test:

- Business logic
- API routes
- Validation
- AI response parsing
- Critical user journeys

---

## Protected Components

Do not modify generated third-party components unless explicitly required.

Examples:

- `components/ui/*`
- Prisma generated files
- Trigger.dev generated files

Extend functionality through wrappers or feature-specific components.

---

## Documentation

Whenever implementation changes:

- Architecture
- Database schema
- API contracts
- Folder structure
- Feature scope
- AI workflows

Update the corresponding context documents before considering the task complete.

Documentation must always reflect the current implementation.
