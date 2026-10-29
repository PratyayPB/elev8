# Elev8 System Architecture & Skill References

## Core Tech Stack & Agent Skills

| Subsystem | Technology | Agent Skills Guide (`.agents/skills/`) |
| :--- | :--- | :--- |
| **Framework** | Next.js 15 (App Router) | [clerk-nextjs-patterns](file:///.agents/skills/clerk-nextjs-patterns/SKILL.md) |
| **Language** | TypeScript | Strict types, Zod contracts, explicit interfaces |
| **Auth & Security** | Clerk | [clerk-nextjs-patterns](file:///.agents/skills/clerk-nextjs-patterns/SKILL.md), [clerk-webhooks](file:///.agents/skills/clerk-webhooks/SKILL.md), [clerk-backend-api](file:///.agents/skills/clerk-backend-api/SKILL.md), [clerk-testing](file:///.agents/skills/clerk-testing/SKILL.md) |
| **Database** | PostgreSQL + Prisma ORM | [prisma-client-api](file:///.agents/skills/prisma-client-api/SKILL.md), [prisma-database-setup](file:///.agents/skills/prisma-database-setup/SKILL.md), [prisma-postgres](file:///.agents/skills/prisma-postgres/SKILL.md) |
| **Background Jobs & AI Agents** | Trigger.dev v3 | [trigger-setup](file:///.agents/skills/trigger-setup/SKILL.md), [trigger-tasks](file:///.agents/skills/trigger-tasks/SKILL.md), [trigger-agents](file:///.agents/skills/trigger-agents/SKILL.md), [trigger-realtime](file:///.agents/skills/trigger-realtime/SKILL.md), [trigger-cost-savings](file:///.agents/skills/trigger-cost-savings/SKILL.md) |
| **AI & Multimodal Models** | Google Gemini (`@google/genai`) | [gemini-api-dev](file:///.agents/skills/gemini-api-dev/SKILL.md) |

---

## Data Architecture Strategy

Elev8 uses a **Metadata + Blob Storage** architecture:
- **Relational Metadata (PostgreSQL / Prisma)**: User accounts, status enums, foreign keys, milestone sequences, scores, and `contentUrl` pointers.
- **Large Generated Artifacts (Vercel Blob / UploadThing)**: Full AI-generated JSON roadmaps, career guidance reports, resume audit analyses, and mock interview transcripts.
