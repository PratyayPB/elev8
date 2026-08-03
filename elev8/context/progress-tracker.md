# Progress Tracker

Update this file whenever the current phase, active feature, or implementation state changes.

## Current Phase
Phase 2: Feature Development — Roadmap Library & Viewer

## Current Goal
Complete Roadmap Library management interface, search & filtering, CRUD actions (duplicate, delete, regenerate), PDF/SVG client-side export, and dynamic viewer routes.

## Completed
- [x] Initialized production-ready repository directory structure under `src/`.
- [x] Configured root config & tool files (`package.json`, `tsconfig.json`, `tailwind.config.ts`, `next.config.ts`, `components.json`, `postcss.config.js`, `.eslintrc`, `.prettierrc`, `.prettierignore`, `.gitignore`, `.env.example`).
- [x] Resolved dependency conflicts with `@clerk/nextjs` by upgrading `next` and `eslint-config-next` to `^15.2.3` and adding `autoprefixer`.
- [x] Documented UI design tokens, aesthetics, and layout rules in `context/ui-context-native.md`.
- [x] Implemented App Router route groups (`(public)`, `(auth)`, `(dashboard)`), layouts, fallback error/loading pages, metadata exports, and navigation constants.
- [x] Configured Clerk Authentication foundation (middleware route protection, ClerkAuthProvider in root layout, Sign In & Sign Up pages, auth component wrappers, server helpers in `lib/auth.ts`).
- [x] Implemented all 16 landing page sections using the Grovia design system.
- [x] Implemented complete optional User Profile & Onboarding system (Phase 1.5 based on `05-user-profile-onboarding.md`).
- [x] Implemented complete relational Database Schema & Data Architecture (Phase 1.6 based on `06-DB_schema&Data-architecture.md`).
- [x] Analyzed `.agents/skills` directory and integrated all 15 installed skills across core project documentation:
  1. `Agents.md` — Linked all 15 skills grouped by domain (Clerk, Prisma, Gemini, Trigger.dev).
  2. `Agent-Rules.md` — Added mandatory skill consultation section before implementing domain features.
  3. `ARCHITECTURE.md` — Mapped tech stack layers to skill guides.
  4. `context/code-standards.md` — Referenced skills for Database (Prisma), AI (Gemini), and Background Jobs (Trigger.dev).
  5. `context/ai-workflow-rules.md` — Enforced reading domain `SKILL.md` prior to code generation.
- [x] Implemented Phase 2 Spec 08 — Roadmap Generation Engine:
  - Created `trigger.config.ts` and initialized `src/trigger` directory for Trigger.dev background jobs.
  - Defined strict TypeScript types (`GeneratedRoadmap`, `RoadmapMetadata`, `RoadmapNode`, `RoadmapEdge`, `Milestone`, `LearningResource`, `Project`, `CareerTip`).
  - Created Zod validation schemas (`roadmap-schema.ts`) and prompt templates (`roadmap-prompts.ts`).
  - Built output validator (`roadmap-validator.ts`) with DAG cycle detection and node/edge integrity checks.
  - Built prompt builder (`roadmap-prompt.service.ts`) and AI generation service (`roadmap-generation.service.ts`) using Google Gemini.
  - Created Trigger.dev background task `src/trigger/generate-roadmap.ts` with progress reporting metadata and auto-retries.
- [x] Implemented Phase 2 Spec 09 — Roadmap Processing, Storage & Rendering:
  - Completely uninstalled `uploadthing` and installed `@vercel/blob`, `dagre`, `@types/dagre`, `@xyflow/react`.
  - Added `Job`, `JobStatus`, `JobType` models & enums to `schema.prisma`, and updated `Roadmap` model (`blobUrl`, `version`, `targetRole`, `experienceLevel`).
  - Implemented `JobService` (`job.service.ts`) for background job progress tracking.
  - Implemented `LayoutService` (`layout.service.ts`) using Dagre for top-to-bottom node positioning.
  - Implemented `RoadmapRenderService` (`roadmap-render.service.ts`) converting logical graphs into `@xyflow/react` node/edge structures.
  - Implemented `BlobStorageService` (`blob-storage.service.ts`) using `@vercel/blob`.
  - Implemented `RoadmapArtifactService` (`roadmap-artifact.service.ts`) for versioned `1.0.0` JSON schema storage.
  - Updated Trigger.dev task `generate-roadmap.ts` to execute layout computation, blob upload, and Prisma metadata persistence.
  - Built read-only React Flow roadmap viewer (`ReactFlowCanvas`, `ReadOnlyToolbar`, `LoadingOverlay`, `EmptyState`, `RoadmapViewer`).
- [x] Implemented Phase 2 Spec 10 — Roadmap Library & Viewer:
  - Installed `html-to-image` and `jspdf` for client-side SVG/PDF exports.
  - Created `RoadmapLibraryService` (`roadmap-library.service.ts`) for searching, filtering by level/status, sorting, and pagination.
  - Created `RoadmapViewerService` (`roadmap-viewer.service.ts`) for fetching metadata, Blob artifacts, and job progress.
  - Created `RoadmapActionsService` (`roadmap-actions.service.ts`) for duplicating and deleting roadmaps (with orphan Blob cleanup).
  - Built Server Actions in `src/features/roadmaps/actions/roadmap-actions.ts`.
  - Built Library UI (`RoadmapLibrary`, `RoadmapCard`, `SearchBar`, `FilterPanel`, `DeleteDialog`).
  - Built `RoadmapExportUtility` for SVG and PDF canvas export.
  - Created dynamic viewer page at `/roadmaps/[roadmapId]` and updated `/roadmaps` library page.

## In Progress
- Phase 2: Feature Development (Career Guidance & Assessment).

## Next Up
- Phase 2: Career Guidance & Assessment modules.

## Open Questions
- None at present.

## Architecture Decisions
- Central `User` model anchors all feature entities with `clerkId` mapping.
- All 15 installed agent skills in `.agents/skills/` are formally linked and required for subagents during build and execution.
- Large AI-generated artifacts store `contentUrl` references to Blob Storage rather than large JSON strings in PostgreSQL.
- Full type-safety across Zod schemas, Prisma models, Server Actions, and UI components.
