<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

## Application Building Context

Read the following files in order before implementing or making any architectural decision:

1. `context/project-overview.md` — product definition, goals, features, and scope
2. `context/architecture-context.md` — system structure, boundaries, storage model, and invariants
3. `context/ui-context-native.md` — theme, colors, typography, canvas design, and component conventions
4. `context/code-standards.md` — implementation rules and conventions
5. `context/ai-workflow-rules.md` — development workflow, scoping rules, and delivery approach
6. `context/progress-tracker.md` — current phase, completed work, open questions, and next steps

Update `context/progress-tracker.md` after each meaningful implementation change.

If implementation changes the architecture, scope, or standards documented in the context files, update the relevant file before continuing.

---

## Installed Agent Skills (.agents/skills)

Before implementing features related to Authentication, Prisma Database, Gemini AI, or Trigger.dev background tasks, **you MUST consult the corresponding SKILL.md guide** in `.agents/skills/`:

### 🔐 Clerk Authentication & Testing
- [clerk-backend-api](file:///.agents/skills/clerk-backend-api/SKILL.md) — Clerk Backend REST API usage & management endpoints.
- [clerk-nextjs-patterns](file:///.agents/skills/clerk-nextjs-patterns/SKILL.md) — Next.js App Router middleware, Server Actions, and auth caching.
- [clerk-webhooks](file:///.agents/skills/clerk-webhooks/SKILL.md) — Real-time event verification (`verifyWebhook`), user & session sync.
- [clerk-testing](file:///.agents/skills/clerk-testing/SKILL.md) — E2E authentication flow testing patterns.

### 🗄️ Prisma Database & PostgreSQL
- [prisma-client-api](file:///.agents/skills/prisma-client-api/SKILL.md) — Prisma model queries, filters, CRUD, transactions.
- [prisma-database-setup](file:///.agents/skills/prisma-database-setup/SKILL.md) — Multi-provider database configuration guides.
- [prisma-postgres](file:///.agents/skills/prisma-postgres/SKILL.md) — Prisma Postgres CLI, Console, and Management API.
- [prisma-postgres-setup](file:///.agents/skills/prisma-postgres-setup/SKILL.md) — Database provisioning and local connection setups.

### 🤖 Gemini AI & Multimodal SDK
- [gemini-api-dev](file:///.agents/skills/gemini-api-dev/SKILL.md) — Multimodal prompts, structured outputs, function calling, and `@google/genai` SDK conventions.

### ⚡ Trigger.dev Background Jobs & AI Orchestration
- [trigger-setup](file:///.agents/skills/trigger-setup/SKILL.md) — Initializing Trigger.dev in Next.js (`trigger.config.ts`, `src/trigger`).
- [trigger-config](file:///.agents/skills/trigger-config/SKILL.md) — Configuring `trigger.config.ts` build extensions (Prisma, Playwright, FFmpeg).
- [trigger-tasks](file:///.agents/skills/trigger-tasks/SKILL.md) — Background tasks, cron schedules, retries, and concurrency control.
- [trigger-agents](file:///.agents/skills/trigger-agents/SKILL.md) — Orchestration, parallelization, routing, evaluator-optimizer, and human-in-the-loop agent workflows.
- [trigger-realtime](file:///.agents/skills/trigger-realtime/SKILL.md) — Real-time task run subscriptions, streaming AI responses, and React hooks.
- [trigger-cost-savings](file:///.agents/skills/trigger-cost-savings/SKILL.md) — Machine right-sizing and execution cost audit.

<!-- TRIGGER.DEV SKILLS START -->
## Trigger.dev agent skills

This project has Trigger.dev agent skills installed in `.agents/skills/`. Before writing or changing Trigger.dev code (background tasks, scheduled tasks, realtime, or chat.agent AI agents), load the most relevant skill: `trigger-authoring-chat-agent`, `trigger-authoring-tasks`, `trigger-chat-agent-advanced`, `trigger-cost-savings`, `trigger-realtime-and-frontend`.
<!-- TRIGGER.DEV SKILLS END -->
