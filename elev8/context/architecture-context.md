# Architecture Context

## Technology Stack

| Layer             | Technology               | Role                                                                                          |
| ----------------- | ------------------------ | --------------------------------------------------------------------------------------------- |
| Framework         | Next.js 16 + TypeScript  | Full-stack application with App Router, Server Components, Route Handlers, and Server Actions |
| UI                | Tailwind CSS + shadcn/ui | Component composition, styling, and accessible UI                                             |
| Authentication    | Clerk                    | User authentication, session management, and route protection                                 |
| Database          | PostgreSQL + Prisma      | Relational data storage and type-safe ORM                                                     |
| AI                | Google Gemini            | AI-powered career guidance, roadmap generation, resume analysis, and interview simulation     |
| AI SDK            | Vercel AI SDK            | Unified AI provider integration and structured AI responses                                   |
| Background Jobs   | Trigger.dev              | Durable execution of long-running AI workflows                                                |
| Storage           | Vercel Blob              | Storage for uploaded resumes and generated files                                              |
| State Management  | Zustand                  | Lightweight global client-side state management                                               |
| Forms             | React Hook Form + Zod    | Type-safe forms and validation                                                                |
| Charts            | Recharts                 | Progress analytics and dashboard visualizations                                               |
| Payments (Future) | Razorpay                 | Subscription and payment processing                                                           |
| Monitoring        | Sentry                   | Error tracking and performance monitoring                                                     |
| Analytics         | PostHog                  | Product analytics and user behavior tracking                                                  |
| Testing           | Playwright + Vitest      | End-to-end, integration, and unit testing                                                     |
| Deployment        | Vercel                   | Hosting, deployment, and serverless infrastructure                                            |

---

# System Boundaries

## `app`

- Routes, layouts, pages, and Server Components.
- Feature-level UI composition.
- Route Handlers and Server Actions.

---

## `app/api`

- Authenticated API endpoints.
- Input validation.
- Authorization.
- Database operations.
- Triggering background jobs.
- No long-running AI execution.

---

## `trigger`

- Trigger.dev background workflows.
- Long-running AI generation.
- Scheduled jobs.
- Retry handling.
- Workflow orchestration.

---

## `lib`

Shared application infrastructure.

Examples:

- Prisma client
- Clerk helpers
- AI utilities
- Blob helpers
- Validation schemas
- Common utilities

---

## `components`

Reusable UI components.

- Feature components
- Shared layouts
- Dialogs
- Dashboard widgets
- Forms
- Charts

Generated `components/ui/*` (shadcn/ui) remain unmodified.

---

## `prisma`

- Prisma schema
- Database migrations
- Generated Prisma client

---

## `public`

Static assets.

---

# Storage Model

## PostgreSQL

Stores relational application data.

Examples:

- Users
- Career assessments
- Career guidance reports
- Learning roadmaps
- Roadmap progress
- Resume metadata
- Interview sessions
- Interview results
- Career analytics
- User settings

---

## Vercel Blob

Stores large files and generated artifacts.

Examples:

- Uploaded resumes
- Generated PDF resumes
- AI-generated reports (if exported)
- Other downloadable documents

Only blob URLs are stored in PostgreSQL.

---

# Authentication Model

- Clerk manages authentication.
- Every user owns their personal career profile.
- Protected routes require authentication.
- Users can only access their own career data.
- Authorization is enforced at every mutation boundary.

---

# AI Architecture

## AI Provider

Google Gemini

Used for:

- Career Guidance
- Roadmap Generation
- Resume Analysis
- Resume Content Generation
- Interview Question Generation
- Interview Evaluation
- Personalized Recommendations

---

## AI SDK

Vercel AI SDK

Responsibilities:

- Provider abstraction
- Streaming responses
- Structured outputs
- AI utilities

---

## Prompt Management

Store prompts inside:

```
lib/ai/prompts/
```

One prompt per feature.

Example:

```
career-guidance.ts
roadmap.ts
resume-analysis.ts
resume-builder.ts
interview-generation.ts
interview-feedback.ts
recommendations.ts
```

Prompts should be:

- Modular
- Versionable
- Reusable
- Easy to iterate

---

## Structured Outputs

Every AI response should return structured JSON.

Validate responses using Zod before:

- Rendering
- Database persistence
- Further processing

Never persist unvalidated AI output.

---

## Background AI Workflows

Long-running AI operations execute through Trigger.dev.

Examples:

- Generate Career Guidance
- Generate Learning Roadmap
- Resume ATS Analysis
- Resume Improvement Suggestions
- Interview Session Generation
- Interview Evaluation
- Weekly Career Reports (Future)
- Recommendation Regeneration

Trigger.dev handles:

- Retries
- Durable execution
- Long-running workflows
- Error recovery

---

## AI Persistence

Persist AI-generated data according to its type.

### PostgreSQL

Store:

- Career guidance
- Skill gap analysis
- Roadmaps
- Resume scores
- Interview sessions
- Interview evaluations
- Progress metrics
- Career readiness

### Vercel Blob

Store:

- Uploaded resumes
- Generated resume PDFs
- Exported reports
- Other downloadable artifacts

---

# State Management

## Zustand

Global client state only.

Examples:

- Dashboard preferences
- Current roadmap
- Theme
- UI state
- Active interview session
- Temporary AI generation state

Server state should remain on the server.

Avoid duplicating database state inside Zustand.

---

# Form Management

React Hook Form + Zod

Used for:

- Career Assessment
- Resume Builder
- Profile Settings
- Roadmap Preferences
- Interview Setup

All inputs should be validated using shared Zod schemas.

---

# Background Jobs

Trigger.dev should be used for operations that:

- Take more than a few seconds
- Require retries
- Chain multiple AI calls
- Generate large outputs
- Execute asynchronously

Do not perform long-running AI work inside Route Handlers or Server Actions.

---

# Invariants

1. Route Handlers must never execute long-running AI workflows.
2. Long-running AI work belongs in Trigger.dev.
3. Authentication and authorization are enforced for every protected action.
4. Large files are stored in Vercel Blob.
5. Metadata is stored in PostgreSQL.
6. Blob URLs—not files—are stored in the database.
7. All AI responses must be validated before persistence.
8. Business logic remains separate from UI components.
9. Generated third-party components are never modified directly.
10. Client Components are used only where browser interactivity requires them.
11. Server Components are preferred whenever possible.
12. Documentation must stay synchronized with implementation.
13. Every completed feature must satisfy its specification before moving to the next implementation unit.
