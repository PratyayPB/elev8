# Progress Tracker

Update this file whenever the current phase, active feature, or implementation state changes.

## Current Phase
Phase 7: User Onboarding & Dashboard System

## Current Goal
Phase 7.2: Release & Production Verification

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
- [x] Analyzed `.agents/skills` directory and integrated all 15 installed skills across core project documentation.
- [x] Implemented Phase 2 Spec 08 — Roadmap Generation Engine.
- [x] Implemented Phase 2 Spec 09 — Roadmap Processing, Storage & Rendering.
- [x] Implemented Phase 2 Spec 10 — Roadmap Library & Viewer.
- [x] Implemented Phase 3 Spec 11 — Interview Request Workflow (Progressive wizard, required inputs, opt-in AI personalization).
- [x] Implemented Phase 3 Spec 12 — Interview Generation Engine.
- [x] **Phase 3.1: Config Wizard** (Wizard UI, validation, personalization state)
- [x] **Phase 3.2: Generation Engine** (AI prompt pipeline, Artifact generation, Blob storage)
- [x] **Phase 3.3: Session Engine** (State machine, autosave, Web Speech API integration)
- [x] **Phase 3.4: Assessment Engine** (AI evaluation, report generation)
- [x] **Phase 3.5: Library & Reports** (Dashboard views, detail pages, stats)
- [x] **Phase 3.6: Workspace** (Central management hub, searching, filtering, trends, recommendations)
- [x] **Phase 4.1: Resume Upload Workflow** (Upload dropzone, PDF validation, required inputs, personalization, review step)
- [x] **Phase 4.2: Resume Scoring & Parsing Engine** (PDF text extraction, Gemini normalization & scoring, Trigger.dev background task)
- [x] **Phase 4.3: Resume Improvement Hub** (Read-only artifact visualization dashboard, 7-section breakdown, ATS analysis, cross-module navigation)
- [x] **Phase 4.5: Resume Builder Foundation** (Routing, types, schema, API endpoints, empty placeholders)
- [x] **Phase 5.1: Resume Data Model & Artifact Foundation** (Independent `BuilderResume` model, enums, Zod schemas, empty artifact factory, `upsertJson` Blob storage, `ResumeBuilderService` CRUD & artifact operations, `/api/resumes` REST endpoints, unit tests)
- [x] **Dashboard UI Overhaul** (Implemented shared `DashboardShell`, Sidebar, MobileNav, MetricCards, and redesigned Dashboard Home, Career Guidance, Career Assessment, and Progress pages according to `dashboard-ui-spec.md`)
- [x] **Route Cleanup** (Nested all dashboard feature routes strictly under `/dashboard/*` and removed legacy landing pages `/about`, `/pricing`, `/contact`, `/faq`, `/forgot-password`)
- [x] **Phase 5.2: Profile Prefill & Resume Initialization** (Mapper for Profile -> Resume Artifact, prefilling personal info, education, and skills. Integrates with ResumeBuilderService, adds /dashboard/resumes/builder workspace and creation UI, unit tested, compiles successfully)
- [x] **Phase 5.3: Resume Editor UI & Autosave** (Isolated editor route /dashboard/resumes/builder/[resumeId], editor-header, editor-sidebar, editor-section wrappers, and 8 individual section editor sub-components. Built debounced autosave state hook with client versioning/409 conflict checks, migrated APIs to /api/builder/resumes/*, unit tested and built successfully)
- [x] **Phase 5.4: Resume Templates, Live Preview & PDF Export** (Classic, Modern, Minimal template renderers consuming standard ResumeArtifact, live side-by-side preview panel driven by local editor state, template switching with Prisma persistence, server-side PDF generation API using Puppeteer with clean sanitized filename header, unit tested and built successfully)
- [x] **Phase 5.5: Resume Workspace & Final MVP Integration** (Implemented independent Resume Workspace at /dashboard/resumes/builder, added duplicate functionality with deep cloning and new Blob IDs, implemented rename/delete actions with modals, maintained strict isolation from Resume Scoring module, verified flow from profile to PDF export)
- [x] **Phase 6.1: Profile Foundation & Data Model** (Destructive migration to new `Profile`, `ProfileSkill`, and `ProfileDesiredSkill` models with 5 new enums [`CurrentStatus`, `PrimaryGoal`, `SkillProficiency`, `CareerExperienceLevel`, `TargetCompanyType`]. Built transactional `ProfileService` with version incrementing on career-context updates and normalized skill deduplication. Implemented REST API at `/api/profile`, Zod schemas, single-page `ProfileForm` with 7 sections, updated Resume Builder prefill mapper, cleaned up Clerk webhook, verified unit tests, type safety, and clean production build)
- [x] **Phase 6.2: Profile Setup, Completion & Progressive Profiling** (Implemented server-side weighted completeness calculation engine [10 field weights summing to 100 points, derived states `NOT_STARTED`, `IN_PROGRESS`, `COMPLETED`], deterministic contextual progressive profiling prompt engine for `RESUME`, `INTERVIEW`, `ROADMAP`, `DASHBOARD`, and `PROFILE` contexts, REST APIs at `/api/profile/completion` and `/api/profile/prompts`, UI components [`ProfileCompletenessCard`, `ProgressivePromptBanner`], dedicated `/dashboard/profile` management route, 100% unit tests passing, zero TypeScript errors, and successful production build)
- [x] **Phase 6.3: Career Assessment Engine** (Implemented complete AI-driven Career Assessment system. Replaced placeholder `CareerAssessment` Prisma schema with immutable snapshot model capturing `profileVersion`, `readinessScore`, `strengths`, `gaps`, `suggestedFocusAreas`, `narrative`, `inputSnapshot`, `model`, `promptVersion`, `processingDurationMs`, and `CareerAssessmentStatus`. Built `CareerAssessmentPromptBuilder` with strict safety rules and no-module-recommendation boundaries, `ModuleActivityContextService` for recent 90-day signals, `CareerAssessmentLLMService` with Gemini structured output and Zod validation, `CareerAssessmentService` with deterministic staleness comparison, Server Actions, REST routes `GET/POST /api/career-assessment`, UI components [`AssessmentReadinessScore`, `AssessmentStrengths`, `AssessmentGaps`, `AssessmentFocusAreas`, `AssessmentNarrative`, `AssessmentStaleBanner`, `AssessmentCtaCard`, `AssessmentClientView`], `/dashboard/career-assessment` page integration, 100% unit tests passing, and successful build)
- [x] **Phase 6.4: RoleSkillMap & Deterministic Skill Gap Engine** (Implemented complete deterministic skill gap intelligence layer. Added `RoleSkillProfile`, `RoleSkillRequirement` models and `SkillImportance` enum to Prisma. Built seed data architecture with 46 `RoleSkillProfiles` and 237 `RoleSkillRequirements` across 20 canonical roles. Implemented `skill-normalizer.ts` with controlled alias mapping, `role-normalizer.ts` with slugification and alias resolution, `RoleSkillMapService` for database querying, and `SkillGapService` for pure-function gap computation [5-tier proficiency comparison, weighted severity formula clamping between 0.0–1.0, top skill gap prioritization, and profile orchestrator handling `NO_TARGET_ROLE`, `ROLE_NOT_SUPPORTED`, `ROLE_LEVEL_NOT_SUPPORTED`, and `SUCCESS`]. Integrated real `GapAnalysis` into the Career Assessment AI prompt builder, added REST endpoint `GET /api/profile/skill-gap`, verified 100% unit test coverage, zero TypeScript errors, and clean production build)
- [x] **Phase 6.5: Recommendation Engine** (Implemented deterministic-first Recommendation Engine connecting Profile, Skill Gap, Career Assessment, and Module Activity. Added `ModuleActivity`, `RecommendationSet`, `Recommendation` Prisma models and `RecommendationSource`, `RecommendationType`, `RecommendationStatus`, `ModuleType` enums. Created centralized `recommendation.config.ts` with normalized weights summing to 1.00 and 11 PrimaryGoal mappings. Built 7-stage pipeline: Context Gathering, Candidate Generation [Cold-start, Partial, Standard, Hybrid, Maintenance], Candidate Filtering [Eligibility, 7-day 3-dismissal cooldown, 30-day completed suppression], 7-signal Composite Scoring, Diversity Deduplication, Top 3 Ranking, and Database Persistence. Created `RecommendationService` facade with staleness auto-regeneration, reason template generator, Server Actions, REST APIs `GET/POST /api/recommendations` and `PATCH /api/recommendations/[id]`, live `RecommendationPanel` & `RecommendationCard` UI components embedded in the Dashboard, 100% unit test coverage, zero TypeScript errors, and clean production build)
- [x] **Phase 6.6: Integration & Unified Career Dashboard** (Built `ModuleActivityService` to capture actions across the platform like finishing an interview, scoring a resume, completing a roadmap phase, and automatically triggering synchronous updates. Implemented `useRecommendationRouter` hook to route action types into navigation paths. Redesigned the main dashboard view `page.tsx` with a strict hierarchy of user attention: Profile Completeness Banner, Career Assessment Status CTA, and Recent Module Activity.)
- [x] **Manual Fixes: Schema Migration & Database Cleanup (`elev8-schema-migration-spec.md`)**:
  - Executed full database migration & reset (`prisma migrate reset --force` and `prisma migrate dev --name schema_migration_cleanup`).
  - Replaced legacy models: `Resume` -> `ResumeScore` (`resume_scores`), `BuilderResume` -> `ResumeBuild` (`resume_builds`), `Interview` -> `InterviewSession` (`interviews`).
  - Overhauled `InterviewTemplate` to support `experienceLevel`, `interviewType`, and `InterviewSession` relations.
  - Aligned `Profile`, `CareerAssessment`, `Roadmap`, and `ModuleActivity` schemas to match manual fix specifications.
  - Completely removed the `CareerGuidance` model, associated features (`src/features/career-guidance`), routes (`/dashboard/career-guidance`), navigation items, and exports.
  - Unwired dormant models (`Progress`, `RecommendationSet`, `Recommendation`), removing User foreign key relations, recommendation dashboard panels, and live generation hooks.
- [x] **Manual Fixes: Enum Updates & Schema Standardization (`elev8-enum-update-spec.md`)**:
  - Replaced obsolete enums (`CurrentStatus` -> `CareerStatus`, `ResumeStatus` -> `ResumeScoreStatus`, `BuilderResumeStatus` -> `ResumeBuildStatus`, `BuilderResumeTemplate` -> `ResumeBuilderTemplate`, `InterviewCategory` -> `InterviewType`, removed `InterviewDifficulty`).
  - Added new enums (`InterviewType`, `InterviewTemplateType`, `InterviewTemplateStatus`, `ModuleCompletionStatus`).
  - Retained `InterviewStatus.GENERATING` to maintain operational continuity across interview creation and UI workflows.
  - Updated model fields: `Profile.currentStatus` (`CareerStatus`), `ResumeScore.status` (`ResumeScoreStatus`), `ResumeBuild.status` (`ResumeBuildStatus`), `ResumeBuild.template` (`ResumeBuilderTemplate`), `InterviewTemplate.type` (`InterviewTemplateType`), `InterviewTemplate.status` (`InterviewTemplateStatus`), `InterviewTemplate.interviewType` (`InterviewType`), `InterviewSession.interviewType` (`InterviewType`), `ModuleActivity.completionStatus` (`ModuleCompletionStatus`).
  - Applied migration `20260821223350_enum_updates` and regenerated Prisma Client.
  - Updated all downstream TypeScript types, schemas, services, actions, and UI components.
  - Verified 100% type safety (`npx tsc --noEmit`) with 0 errors.
- [x] **Manual Fixes: Codebase Compatibility Update (`elev8-code-compatibility-update-spec.md`)**:
  - Removed deprecated Profile fields (`currentCompany`, `institution`, `graduationYear`, `goalDescription`, `targetIndustry`, `careerExperienceLevel`) across frontend components, schemas, and backend mapping. Added `phoneNumber` field.
  - Rebalanced Profile completeness weights to account for field removal.
  - Removed deprecated `promptVersion` and `processingDurationMs` from Career Assessment Module.
  - Removed legacy `originalPdfBlobUrl` logic from Resume Score module.
  - Fixed Resume Builder module version increment bug by reading version from Blob artifact. Removed `targetRole` and `version` mapping from Prisma models and UI.
  - Fixed Interview Session timer accumulation and updated `submitInterview` and `saveSessionProgress` actions to correctly track `durationSeconds`.
  - Added support for `personalized` and `profileSnapshot` mapping on interview generation.
  - Verified 100% type safety with zero TS errors across the codebase.
- [x] **Phase 7.1: User Onboarding Implementation** (Mandatory/Optional modals, Profile schema migration for nullable fields, upsert semantics, Clerk webhook svix verification, Shadcn UI country selector combobox)
- [x] **Phase 7 Task 34: Dashboard Design System Implementation (`34-dashboard-design-system.md`)**:
  - Generated full **50–950 tonal scales** for brand colors (Primary `#171816`, Secondary `#FCFBFA`, Accent `#FFDB00`) in `globals.css` and mapped all semantic CSS variables for Light and Dark modes.
  - Configured `components.json` to use shadcn **New York** style and wired Tailwind configuration with full brand scales and semantic tokens.
  - Integrated `next-themes` with `defaultTheme="system"` and class-based theme switching (`.dark`).
  - Created `ThemeToggle` component with segmented Light/Dark/System controls and compact icon mode, integrated exclusively inside the `DashboardSidebar` and `MobileNavigation`.
  - Rethemed `DashboardSidebar`, `DashboardShell`, and `MobileNavigation` using semantic tokens with vivid Accent (`#FFDB00`) active state indicators.
  - Rethemed existing UI primitives (`button`, `input`, `badge`, `dialog`, `select`, `label`, `form`, `command`, `popover`) and built missing shadcn components (`card`, `table`, `avatar`, `tooltip`, `skeleton`, `tabs`, `dropdown-menu`, `switch`, `checkbox`, `radio-group`, `textarea`, `alert`, `separator`, `breadcrumb`, `sonner`).
  - Rethemed dashboard UI blocks (`MetricCard`, `EmptyState`, `PageHeader`, `SectionHeader`, `LoadingSkeleton`).
  - Built interactive Design System preview page at `/dashboard/design-system`.
  - Verified 100% type safety with zero TypeScript compilation errors.

## In Progress
- [ ] **Phase 7.2: Final Integration & QA Review**

## Next Up
- Project Polish & Release

## Open Questions
- None at present.

## Architecture Decisions
- Central `User` model anchors all feature entities with `clerkId` mapping.
- All 15 installed agent skills in `.agents/skills/` are formally linked and required for subagents during build and execution.
- Large AI-generated artifacts store `blobUrl` references to Blob Storage rather than large JSON strings in PostgreSQL.
- Full type-safety across Zod schemas, Prisma models, Server Actions, and UI components.
- Phase 3.1 uses strictly mocked AI personalization to avoid Gemini usage before Phase 3.2.
- **Resume Builder & Resume Scoring Separation**: Resume Scoring (Phase 4, `ResumeScore` model) and Resume Builder (Phase 5, `ResumeBuild` model) are fully independent modules with separate Prisma models, separate enums (`BuilderResumeStatus`, `BuilderResumeTemplate`), separate artifact schemas, and isolated API endpoints (`/api/resumes/*`).
- **Profile as Central Career Context (Phase 6)**: The Profile model represents the user's current career context and is decoupled from module artifacts (Resume, Interview, Roadmap). Skills and desired skills are stored as structured relations with compound uniqueness on normalized names.
- **Progressive Profiling & Weighted Completeness (Phase 6.2)**: Profile completion is progressive and non-blocking. Completeness is calculated deterministically on the server via 10 weighted fields (summing to 100). Progressive prompts are module-contextual, deterministic (no LLM), and skippable.
- **Career Assessment as Analysis Layer (Phase 6.3)**: Career Assessment is an optional analysis layer that transforms Profile context + recent module signals into an immutable snapshot (readiness score, strengths, gaps, focus areas, narrative). It does NOT directly recommend Elev8 modules. Staleness is computed deterministically by comparing `assessment.profileVersion` against the active `profile.profileVersion`. Old assessments are preserved historically when retaking.
- **Deterministic RoleSkillMap & Skill Gap Engine (Phase 6.4)**: RoleSkillMap is the canonical knowledge base of role skill requirements across 5 experience levels (`ENTRY`, `JUNIOR`, `MID`, `SENIOR`, `LEAD`) with weighted importance (`CORE=3`, `IMPORTANT=2`, `SUPPORTING=1`). Skill Gap calculation is 100% deterministic (pure function, no LLM, no Trigger.dev). Skill gaps are computed dynamically on request and not persisted as redundant database state. Gaps are consumed by both Career Assessment (Phase 6.3).
- **Dormant Models Unwiring & Career Guidance Removal**: `CareerGuidance` is fully excised. `Progress`, `RecommendationSet`, and `Recommendation` remain dormant in `schema.prisma` without active application wiring or User relations.
- **Unified Career Dashboard & Module Activity Logging**: The main dashboard dynamically adjusts to user state through an attention hierarchy (Profile Completion -> Assessment CTA -> Recent Activity). `ModuleActivity` logs user milestones cleanly.
- **Dashboard Design System Scope & Theming**: The dashboard design system tokens and dark mode toggle apply strictly to `/dashboard/**`. Base brand palette scales: Primary (`#171816`), Secondary (`#FCFBFA`), Accent (`#FFDB00`). Theme toggle is placed in the sidebar with system preference default.
