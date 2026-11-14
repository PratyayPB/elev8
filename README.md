# Elev8

An AI-powered career development platform that guides users through career assessments, dynamic learning roadmaps, ATS-optimized resume building, and simulated technical interviews.

[![CI Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/PratyayPB/elev8/actions)
[![Next.js](https://img.shields.io/badge/Next.js-15.2.3-black.svg?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg?logo=typescript)](https://www.typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## What it does and why use it

Career preparation tools are typically fragmented: candidates use one tool to format a resume, another for interview practice, and search blogs or forums to figure out what skills to learn next. This leads to disjointed feedback, duplicated effort, and no centralized way to gauge job readiness.

Elev8 unites these stages into a continuous, data-driven career development workflow:

- **AI Career Assessment & Skill Gap Analysis:** Evaluates your education, background, and target roles against market requirements to identify missing competencies and salary expectations.
- **Dynamic Learning Roadmaps:** Generates interactive milestone graphs (powered by `@xyflow/react`) featuring project ideas, recommended resources, and progress tracking checkpoints.
- **ATS Resume Studio & Scorer:** Scores resumes against job descriptions with keyword gap detection, real-time template switching across 15+ JSONResume styles, and headless PDF exports.
- **Tailored Mock Interview Simulations:** Simulates role-specific technical and behavioral interviews with speech-to-text recording, adaptive question difficulty, and automated evaluation metrics.
- **Centralized Readiness Analytics:** Tracks completed milestones, resume scores, and interview performance in a unified dashboard that dynamically updates career guidance over time.
- **Multi-Provider AI Resilience:** Automatically routes LLM workloads across Google Gemini, Groq, and OpenRouter with failover handling and durable background orchestration.

Unlike standalone resume scanners or generic chatbots, Elev8 shares profile context across roadmaps, resumes, and interview simulations so every recommendation evolves as you improve.

## Prerequisites

Before setting up the project, ensure you have the following installed:

- **Node.js:** `v20.0.0` or higher (verified on Node.js v20.x, v22.x, and v23.x)
- **Package Manager:** `npm` v10+ (or `pnpm` v9+)
- **PostgreSQL Database:** PostgreSQL 15+ instance (local installation or hosted provider such as Neon, Supabase, or AWS RDS)
- **External Service Accounts & API Keys:**
  - [Clerk](https://clerk.com) — User authentication and session management
  - [Google AI Studio](https://aistudio.google.com) — Gemini API key for primary AI inference
  - [Trigger.dev v3](https://trigger.dev) — Durable background execution for AI workflows and headless PDF exports
  - [Vercel Blob](https://vercel.com/docs/storage/vercel-blob) — Cloud object storage for uploaded PDFs and generated JSON artifacts
  - [Upstash Redis](https://upstash.com) *(optional)* — Serverless Redis for distributed rate limiting and artifact caching (falls back to local memory if omitted)
  - [Ably](https://ably.com) *(optional)* — Realtime WebSocket transport for live background job notifications (falls back to HTTP polling if omitted)

## Build / Install

1. Clone the repository:

```bash
git clone https://github.com/PratyayPB/elev8.git
cd elev8
```

2. Install dependencies:

```bash
npm install
```

> **Note:** The `postinstall` script automatically compiles uncompiled JSONResume template bundles located under `scripts/build-uncompiled-themes.cjs`.

3. Configure environment variables:

```bash
cp .env.example .env
```

Open `.env` in your text editor and fill in your database credentials and API keys (see [Configuration](#configuration) below).

4. Generate the Prisma client and push database migrations:

```bash
npm run db:generate
npm run db:push
```

5. (Optional) Seed the database with global roadmap templates and interview catalogs:

```bash
npm run db:seed
```

6. Confirm the installation by running the test suite:

```bash
npm run test
```

Expected output:

```text
 ✓ src/services/cache/__tests__/cache.service.test.ts (12 tests)
 ✓ src/features/resume-builder/__tests__/template-renderer.test.ts (3 tests)
 ✓ src/lib/llm/__tests__/llm-router.test.ts (7 tests)
 Test Files  27 passed (62)
      Tests  149 passed (149)
```

## Quickstart

Elev8 requires two processes in local development: the Next.js web application and the Trigger.dev background worker.

1. Start the Next.js development server:

```bash
npm run dev
```

Expected output:

```text
   ▲ Next.js 15.2.3
   - Local:        http://localhost:3000
   - Environments: .env.local, .env

   ✓ Starting...
   ✓ Ready in 1.8s
```

2. In a separate terminal, start the Trigger.dev development listener:

```bash
npm run trigger:dev
```

Expected output:

```text
Trigger.dev dev session active
✓ Connected to Trigger.dev cloud (project: proj_wcsssvghiwzgvtnnyfti)
✓ 6 background tasks listening for runs
```

3. Open your browser and navigate to:

```text
http://localhost:3000
```

4. Sign in using Clerk, complete the Onboarding Career Assessment, and generate your first career roadmap or ATS resume audit.

To stop the servers, press `Ctrl+C` in each terminal window.

## Configuration

Configuration values are loaded from the `.env` file located in the project root. Precedence: process environment variables override `.env.local`, which overrides `.env`.

| Name | Description | Default | Required |
|------|-------------|---------|----------|
| `DATABASE_URL` | PostgreSQL connection string (pooled runtime URL) | `none` | Yes |
| `DIRECT_DATABASE_URL` | Direct PostgreSQL connection string for Prisma migrations | `none` | No |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk frontend publishable key (`pk_test_...` or `pk_live_...`) | `none` | Yes |
| `CLERK_SECRET_KEY` | Clerk backend secret key (`sk_test_...` or `sk_live_...`) | `none` | Yes |
| `WEBHOOK_SECRET` | Secret token to verify inbound Clerk webhook signatures | `none` | Yes (for user sync) |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL` | Relative route path for the sign-in page | `/sign-in` | No |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL` | Relative route path for the sign-up page | `/sign-up` | No |
| `GEMINI_API_KEY` | Google Gemini API key for AI generation tasks | `none` | Yes |
| `GEMINI_MODEL` | Comma-delimited Gemini model priority list with fallback | `gemini-3.8-flash,gemini-3.6-flash,gemini-3.5-flash-lite` | No |
| `GROQ_API_KEY` | Groq API key for secondary LLM failover | `none` | No |
| `GROQ_MODEL` | Groq model identifier for fallback inference | `openai/gpt-oss-120b` | No |
| `OPENROUTER_API_KEY` | OpenRouter API key for tertiary LLM failover | `none` | No |
| `OPENROUTER_MODEL` | Comma-delimited OpenRouter models for fallback | `minimax/minimax-m3,minimax/minimax-m2.7,nvidia/nemotron-3-super-120b-a12b,nvidia/nemotron-3-ultra-550b-a55b,tencent/hy3` | No |
| `LLM_PRIMARY_PROVIDER` | Initial LLM provider attempted (`gemini`, `groq`, or `openrouter`) | `gemini` | No |
| `LLM_FALLBACK_ORDER` | Comma-delimited provider execution order on failure | `gemini,groq,openrouter` | No |
| `TRIGGER_SECRET_KEY` | Trigger.dev secret API key (`tr_dev_...` or `tr_prod_...`) | `none` | Yes |
| `BLOB_READ_WRITE_TOKEN` | Vercel Blob access token for storing files and artifacts | `none` | Yes |
| `UPLOADTHING_TOKEN` | Optional UploadThing token for secondary storage provider | `none` | No |
| `ABLY_API_KEY` | Ably Root API key for serverless push notifications | `none` | No |
| `UPSTASH_REDIS_REST_URL` | Upstash Redis REST URL for distributed caching & rate limiting | `none` | No |
| `UPSTASH_REDIS_REST_TOKEN` | Upstash Redis REST authorization token | `none` | No |
| `REDIS_CACHE_ENABLED` | Toggle switch to enable or disable Redis caching (`true`/`false`) | `true` | No |
| `SKIP_PROFILE_GATE` | Bypass onboarding profile check during testing (`true`/`false`) | `false` | No |

### Example Configuration (`.env`)

```bash
# Database
DATABASE_URL="postgresql://postgres:<password>@localhost:5432/elev8?schema=public"
DIRECT_DATABASE_URL="postgresql://postgres:<password>@localhost:5432/elev8?schema=public"

# Authentication (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_<your-clerk-publishable-key>"
CLERK_SECRET_KEY="sk_test_<your-clerk-secret-key>"
WEBHOOK_SECRET="whsec_<your-svix-webhook-secret>"
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"

# AI Inference & Multi-Provider Fallback Engine
GEMINI_API_KEY="<your-gemini-api-key>"
GEMINI_MODEL="gemini-3.8-flash,gemini-3.6-flash,gemini-3.5-flash-lite"
GROQ_API_KEY="<your-groq-api-key>"
GROQ_MODEL="openai/gpt-oss-120b"
OPENROUTER_API_KEY="<your-openrouter-api-key>"
OPENROUTER_MODEL="minimax/minimax-m3,minimax/minimax-m2.7,nvidia/nemotron-3-super-120b-a12b,nvidia/nemotron-3-ultra-550b-a55b,tencent/hy3"
LLM_PRIMARY_PROVIDER="gemini"
LLM_FALLBACK_ORDER="gemini,groq,openrouter"

# Background Workflow Orchestration (Trigger.dev v3)
TRIGGER_SECRET_KEY="tr_dev_<your-trigger-secret-key>"

# File & Artifact Storage (Vercel Blob)
BLOB_READ_WRITE_TOKEN="vercel_blob_rw_<your-blob-token>"

# Realtime Push Notifications (Ably)
ABLY_API_KEY="<your-ably-root-api-key>"

# Serverless Cache & Rate Limiting (Upstash Redis)
UPSTASH_REDIS_REST_URL="https://<your-instance>.upstash.io"
UPSTASH_REDIS_REST_TOKEN="<your-upstash-rest-token>"
REDIS_CACHE_ENABLED="true"
```

## Documentation

- [System Architecture](ARCHITECTURE.md) — High-level system structure, hybrid metadata-blob storage architecture, and agent skill references.
- [Database Architecture & Schema Reference](docs/database.md) — Detailed PostgreSQL model relationships, indexing strategies, and enum definitions.
- [Project Overview & Scope](context/project-overview.md) — Product definition, core user flows, and functional scope boundaries.
- [UI Context & Design Tokens](context/ui-context-native.md) — Grovia-inspired design tokens, typography scale, and dark mode conventions.
- [Engineering Code Standards](context/code-standards.md) — Architectural invariants, React 19 / Next.js guidelines, and error handling rules.
- [Progress Tracker](context/progress-tracker.md) — Implementation history, performance optimizations, and current production status.
- [Release Changelog](CHANGELOG.md) — Version history and release notes.

## Troubleshooting

**`error: P1001: Can't reach database server at localhost:5432`**
PostgreSQL is offline or the connection string is incorrect. Verify that your PostgreSQL service is running and that credentials in `DATABASE_URL` match your local or hosted database.

**`TriggerApiError: No matching branch env or connection failed`**
The background Trigger.dev worker process is not active or `TRIGGER_SECRET_KEY` is missing. Ensure you have run `npm run trigger:dev` in a separate terminal and verified your project ref in `trigger.config.ts`.

**`403 Forbidden when downloading exported PDF resumes`**
Exported PDF artifacts are stored in secure, private Vercel Blob storage. Client browsers cannot access private blob URLs directly. All downloads must route through the authenticated proxy endpoint at `/api/builder/resumes/[resumeId]/download`.

**`EPERM: operation not permitted, mkdir '.next/...'` (Windows)**
On Windows, file system locks from antivirus software or lingering processes can block `.next` directory mutations. Stop the development server, delete the `.next` directory (`Remove-Item -Recurse -Force .next` in PowerShell), and restart with `npm run dev`.

**`[NotificationTransport] ABLY_API_KEY is not configured; skipping realtime push`**
When `ABLY_API_KEY` is omitted, the application logs a warning and gracefully falls back to exponential backoff HTTP polling for background job status updates. To enable instant WebSocket pushes, configure an Ably Root API key in `.env`.

Need help? Open an issue on [GitHub Issues](https://github.com/PratyayPB/elev8/issues) or start a discussion on [GitHub Discussions](https://github.com/PratyayPB/elev8/discussions).

## Contributing

We welcome contributions! Please review [CONTRIBUTING.md](CONTRIBUTING.md) and our [Code Standards](context/code-standards.md) before submitting pull requests.

Run unit and integration tests before submitting code:

```bash
npm run test
```

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
