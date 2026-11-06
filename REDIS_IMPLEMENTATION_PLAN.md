# Redis Integration & Server Performance Optimization Plan

**Application:** PathPolish / Elev8 (AI-Powered Career Development Platform)  
**Author:** Principal Systems Architect & Senior Performance Engineer  
**Date:** November 2026  
**Document Status:** Architectural Proposal & Implementation Blueprint (Planning Phase)  
**Target Runtime:** Next.js 15.2.3 (App Router), Node.js 20+, Vercel Serverless Functions, PostgreSQL (Prisma ORM 6.0.0), Trigger.dev v3  

---

## 1. Executive Summary

PathPolish (Elev8) is a comprehensive full-stack career development platform offering AI-driven career guidance, interactive learning roadmaps, ATS resume analysis, dynamic resume building, mock interview simulations, and progress tracking. The application is built on **Next.js 15 (App Router)** deployed to **Vercel Serverless Functions**, backed by **PostgreSQL** (via Prisma ORM), **Clerk** (Authentication), **Google Gemini & OpenRouter** (LLM services via Vercel AI SDK), **Trigger.dev v3** (durable background task execution), and **Vercel Blob** (artifact storage).

While the system has undergone significant latency remediation (such as eliminating client-side layout recalculation and moving heavy PDF generation to isolated Trigger.dev workers), an architectural audit reveals that **the primary remaining bottlenecks stem from repetitive database queries, high-frequency external network waterfalls to Vercel Blob, in-memory rate limiting that cannot scale across serverless instances, and relational database `COUNT(*)` scans used for quota verification.**

This blueprint designs a robust, serverless-native **Redis** integration using **Upstash Redis** (`@upstash/redis`). It outlines a non-disruptive, phased implementation that optimizes data retrieval, protects against abusive traffic patterns, deduplicates expensive compute operations, and preserves application reliability through a resilient **fail-open** design.

### Key Strategic Decisions

1. **Adopt Upstash Serverless Redis (HTTP/REST):** Avoid traditional TCP-based Redis clients (`ioredis`/`node-redis`) that suffer from connection-exhaustion and cold-start latency in Vercel's ephemeral serverless lambdas.
2. **Preserve Clerk Authentication Invariants:** Clerk's edge-verified JWTs and session tokens will remain the source of truth for authentication. Redis will only cache the internal PostgreSQL user mapping (`clerkId -> dbUser`) to eliminate repetitive `User` lookups.
3. **Retain Trigger.dev v3 (Reject BullMQ):** Trigger.dev already orchestrates long-running AI tasks, Chromium Puppeteer exports, and SSE streaming to the client. Introducing BullMQ would require provisioning persistent worker container instances, violating the serverless deployment model. Redis will instead provide **distributed mutex locks** and **atomic quota counters** to guard Trigger.dev workflows.
4. **Implement Resilient Fail-Open Caching:** Redis is treated as an accelerator, never a single point of failure. If Redis experiences network partition or downtime, the application transparently falls back to PostgreSQL and Vercel Blob without error disruption to the user.

---

## 2. Existing Architecture Analysis

### 2.1 Framework & Request Lifecycle

- **Next.js 15.2.3 (App Router):** The application relies on React Server Components (RSC) for page composition (`src/app/(dashboard)/*`), Next.js Server Actions for mutations (`src/features/*/actions/*`), and Route Handlers for specific API capabilities (`src/app/api/*`).
- **Execution Environment:** Deployed on **Vercel Serverless Functions**. Each incoming HTTP request may spin up a new stateless lambda instance or execute on an already-warm container. Local memory (`globalThis`, in-memory `Map`) is isolated to a single container and wiped upon scale-down or cold start.

### 2.2 Database & ORM Layer

- **Database:** Managed PostgreSQL connected via a pooled `DATABASE_URL` for runtime queries and a direct `DIRECT_DATABASE_URL` for schema migrations.
- **ORM:** Prisma Client 6.0.0 (`src/lib/prisma.ts`), configured with a 25-second query timeout extension to prevent runaway locks.
- **Relational Tables:** 16 core models including `User`, `Profile`, `ProfileSkill`, `CareerAssessment`, `Roadmap`, `GlobalRoadmap`, `ResumeScore`, `ResumeBuild`, `ResumeTemplate`, `InterviewSession`, `GlobalInterviewTemplate`, `Job`, `RoleSkillProfile`, `ModuleActivity`, `Progress`, and `Notification`.

### 2.3 Authentication & Authorization

- **Clerk (`@clerk/nextjs` 6.0.0):** Sessions are authenticated via Clerk cookies/JWTs.
- **User Synchronization:** The `src/lib/auth.ts` helper exports `getOrCreateDbUser()`, wrapped in React 19's `cache()`. This deduplicates queries *strictly within a single server request*, but subsequent HTTP requests, page navigations, and API calls must re-query `prisma.user.findUnique({ where: { clerkId } })`.

### 2.4 External Storage & Background Tasks

- **Vercel Blob (`@vercel/blob` 2.6.1):** Stores large JSON artifacts (parsed resume models, full learning roadmap graph schemas) and generated binary PDFs.
- **Trigger.dev v3 (`@trigger.dev/sdk` 4.8.3):** Handles compute-heavy, long-running tasks including `export-resume-pdf` (Puppeteer), `generate-roadmap` (Gemini), `generate-interview`, `assess-interview`, and `build-ai-resume`. Real-time progress is consumed via `@trigger.dev/react-hooks` (`useRealtimeRun`).

---

## 3. Identified Performance Bottlenecks

A comprehensive audit of the source files identified seven specific performance bottlenecks:

| ID | Bottleneck | Affected Source Files | Root Cause & Impact |
|:---|:---|:---|:---|
| **B1** | **Fragile In-Memory Rate Limiter** | `src/lib/rate-limiter.ts`, `src/app/api/webhooks/clerk/route.ts`, `src/app/api/profile/skill-gap/route.ts`, `src/features/interview/actions/workspace-actions.ts` | The current rate limiter uses an in-memory `Map<string, number[]>`. In a serverless deployment, concurrent requests hitting different lambda instances bypass the limit completely. Memory is leaked until garbage collected or restarted. |
| **B2** | **Relational Quota Scans (`COUNT(*)`)** | `src/services/quota/user-quota.service.ts`, `src/features/career-assessment/services/assessment-quota.service.ts` | Hourly and weekly quotas execute multi-table `prisma.job.count` and `prisma.careerAssessment.findMany` with timestamp filters (`createdAt >= now - 1h`). As the `jobs` and `career_assessments` tables scale to millions of rows, sequential index range scans increase database CPU load. |
| **B3** | **Repetitive User & Profile Queries** | `src/lib/auth.ts`, `src/features/profile/services/profile.service.ts`, `src/app/(dashboard)/dashboard/page.tsx` | Every protected route, Server Action, and API handler queries PostgreSQL for `clerkId -> user`. The main dashboard then queries `Profile` with 2 relation joins (`skills`, `desiredSkills`). Profile updates occur rarely, but reads occur on nearly 100% of user interactions. |
| **B4** | **Vercel Blob Network Waterfalls** | `src/services/roadmaps/roadmap-viewer.service.ts`, `src/features/resume/services/resume-report.service.ts` | When viewing a completed roadmap or resume score, the server performs an outbound HTTP fetch to Vercel Blob (`fetchJson`), parses the multi-kilobyte JSON payload, and runs complex validation/formatting on every single request. |
| **B5** | **Static & Catalog Database Lookups** | `src/features/skill-gap/services/role-skillmap.service.ts`, `src/app/api/builder/templates/route.ts`, `src/services/roadmaps/roadmap-library.service.ts` | Reference data that never changes at runtime (canonical role-skill maps, supported resume templates, and shared global roadmaps) is fetched from PostgreSQL repeatedly across all users. |
| **B6** | **Notification Polling Pressure** | `src/app/api/notifications/route.ts`, `src/components/notifications/notification-watcher.tsx` | Client browser tabs run periodic 30-second background polling plus window-focus revalidation. Each poll triggers `prisma.notification.findMany` and `prisma.notification.count({ where: { status: 'UNREAD' } })`, creating a continuous stream of DB queries for static or unchanged notifications. |
| **B7** | **Double-Click & Concurrent Task Race Conditions** | `src/features/roadmaps/actions/roadmap-actions.ts`, `src/features/resume-builder/services/ai-resume-build.service.ts`, `src/features/career-assessment/services/actions.ts` | Rapid repeated clicks or distributed automated requests can launch parallel Trigger.dev background workflows before the first job record is committed, consuming costly LLM tokens and creating duplicate artifacts. |

---

## 4. Redis Use Case Evaluation

### 4.1 Caching

| Use Case | Existing Problem | Proposed Redis Solution | Expected Benefit | Complexity | Verdict |
|:---|:---|:---|:---|:---|:---|
| **Static Catalog Data** | `RoleSkillProfile`, `ResumeTemplate`, and `GlobalRoadmap` tables are queried continuously despite changing only during deployments or admin seeds. | Cache serialized catalog objects in Redis with a 24-hour TTL and explicit invalidation on seed or creator regeneration. | Eliminates 90%+ of catalog database queries; sub-5ms retrieval. | Low | **Essential** |
| **User Identity & Profile** | `getOrCreateDbUser()` and `ProfileService.getProfile()` execute on every page visit and Server Action. | Cache user record and profile DTO under `user:clerk:{clerkId}` and `user:{id}:profile` with a 30-minute TTL; invalidate on profile mutation actions. | Drops DB query count per page load from 4-6 queries to 1-2 queries; cuts initial server response time by 40-80ms. | Low | **Essential** |
| **Computed Blob Artifacts** | `RoadmapViewerService` and `ResumeReportService` fetch JSON from Vercel Blob over HTTP and execute compute-heavy scoring. | Cache parsed roadmap graph artifacts and resume analytics reports in Redis for completed items with a 4-hour TTL. | Eliminates outbound HTTP hop to Vercel Blob (saving 150-350ms); eliminates CPU-bound keyword re-analysis. | Medium | **High Impact** |
| **Unread Notification Count** | High-frequency polling on `/api/notifications` counts unread rows in PostgreSQL on every 30s interval. | Store unread notification integer in Redis (`user:{id}:unread_notifications`). Increment on creation, decrement/clear on read. | Bypasses database `COUNT(*)` entirely during client polling cycles. | Medium | **High Impact** |

### 4.2 Rate Limiting

- **Existing Problem:** `src/lib/rate-limiter.ts` uses an in-memory `Map`. In Vercel serverless environments, each lambda container possesses an independent memory space. Users sending parallel requests hit separate lambdas, circumventing rate limits.
- **Proposed Solution:** Implement distributed sliding-window rate limiting backed by Upstash Redis (`@upstash/ratelimit`).
- **Expected Benefit:** Bulletproof protection across all edge instances against DDoS, API abuse, brute-force attacks on public endpoints (e.g. Clerk webhooks, library search), and quota bypass.
- **Verdict:** **Essential** (critical security and cost-protection requirement).

### 4.3 Session Management

- **Existing Problem Evaluation:** Should Redis replace or manage Clerk session tokens?
- **Analysis:** Clerk already signs cryptographically secure JWTs validated via edge-cached JWKS public keys. Moving active session state into Redis would introduce unnecessary statefulness, add network latency to auth validation, and contradict Clerk best practices.
- **Verdict:** **Rejected**. Keep Clerk for session verification. Use Redis *only* to cache the application user profile and internal DB ID mapped to `clerkId`.

### 4.4 Background Processing (BullMQ vs. Trigger.dev)

- **Existing Problem Evaluation:** Should Elev8 replace or augment Trigger.dev with BullMQ?
- **Analysis:**
  - **BullMQ Requirements:** Requires a long-running, continuous Node.js daemon process running an active event loop to poll and process Redis streams/lists.
  - **Elev8 Environment:** Next.js 15 App Router deployed to **Vercel Serverless Functions**. Vercel terminates function execution after request response. There is no persistent process to run a BullMQ worker.
  - **Trigger.dev v3:** The application already runs production tasks on Trigger.dev v3, utilizing specialized machine sizes (`medium-2x` for Puppeteer PDF rendering, `small-1x` for Gemini AI generation), automated exponential retries, durable recovery, and real-time SSE frontend streaming via `@trigger.dev/react-hooks`.
  - Introducing BullMQ would require provisioning and maintaining dedicated virtual machine infrastructure (e.g. AWS ECS or Railway), duplicating Trigger.dev's existing capabilities.
- **Verdict:** **Rejected for Background Tasks.** Trigger.dev is the superior, already-integrated solution for serverless background jobs. Redis should be used for **concurrency locking** and **pre-flight rate limiting** prior to task triggering.

### 4.5 Real-Time and Concurrent Operations

- **Distributed Mutex Locks (`SETNX` / Redlock pattern):**
  - **Problem:** When users click "Generate Roadmap" or "Start AI Resume Build", rapid subsequent clicks or network retries can invoke multiple concurrent Trigger.dev tasks.
  - **Solution:** Acquire a Redis key lock with a 30-second TTL (`lock:user:{id}:action:{actionName}`) before triggering tasks. Release lock upon task queue confirmation.
  - **Verdict:** **Essential** (prevents duplicate costly AI generation calls).
- **Atomic Rolling Quota Counters:**
  - **Problem:** Database `prisma.job.count` checks require SQL range scans across historical tables.
  - **Solution:** Maintain rolling hourly/daily quota buckets in Redis Hashes or Sorted Sets.
  - **Verdict:** **Recommended** (offloads repetitive DB write/read pressure).

---

## 5. Redis Architecture & Technology Selection

### 5.1 Technology Comparison: Upstash Redis vs. Traditional Redis (ioredis / node-redis)

| Dimension | Upstash Redis (`@upstash/redis`) | Self-Hosted / Managed TCP Redis (`ioredis`, `node-redis`) |
|:---|:---|:---|
| **Connection Protocol** | **HTTP / REST (Stateless)** | **TCP (Persistent Socket Connection)** |
| **Serverless Compatibility** | **Native.** Designed specifically for Vercel, AWS Lambda, and Cloudflare Workers. Zero connection pooling overhead. | **Poor in serverless.** Spawns 1 socket per lambda. Under concurrent burst traffic (100+ lambdas), exhausts Redis max-client limits instantly. |
| **Cold Start Impact** | **< 1ms.** Standard HTTPS request over keep-alive HTTP/1.1 or HTTP/2. | **50ms – 250ms.** TCP handshake and TLS negotiation on every new container spin-up. |
| **Operational Maintenance** | Fully managed serverless. Automatic failover, automated backups, zero patch management. | Requires provisioning VPCs, NAT gateways, connection poolers (like AWS RDS Proxy equivalent for Redis), and monitoring. |
| **Pricing Model** | Pay-per-request ($0.20 per 100,000 commands; generous free tier of 10,000 commands/day). | Fixed monthly cost ($15 – $100+/month) regardless of utilization. |
| **Decision** | **SELECTED** | **REJECTED** |

### 5.2 Client Architecture & Connection Management

To adhere to the Single Responsibility Principle and maintain clean boundaries as dictated by `architecture-context.md`, all Redis interactions will be centralized inside:

- `src/lib/redis.ts` — Client singleton configuration and resilient connection instantiation.
- `src/services/cache/cache.service.ts` — High-level cache abstraction providing type-safe `getOrSet`, key invalidation, and telemetry.
- `src/services/cache/rate-limit.service.ts` — Distributed rate-limiting utilities powered by `@upstash/ratelimit`.

```
┌─────────────────────────────────────────────────────────┐
│                    Next.js App Router                   │
│   (Server Components, Server Actions, Route Handlers)   │
└────────────┬───────────────────────────────┬────────────┘
             │                               │
             ▼                               ▼
┌─────────────────────────┐     ┌─────────────────────────┐
│   CacheService (Cache)  │     │ RateLimitService (Limit)│
└────────────┬────────────┘     └────────────┬────────────┘
             │                               │
             └───────────────┬───────────────┘
                             ▼
┌─────────────────────────────────────────────────────────┐
│              src/lib/redis.ts (Singleton)               │
│        Resilient Fail-Open Wrapper & Telemetry          │
└────────────────────────────┬────────────────────────────┘
                             │ (HTTPS / REST)
                             ▼
┌─────────────────────────────────────────────────────────┐
│                 Upstash Serverless Redis                │
└─────────────────────────────────────────────────────────┘
```

### 5.3 Eviction Policies & Resource Configuration

1. **Eviction Policy:** Configure Upstash with `volatile-lru` (Least Recently Used among keys with an explicit expiration TTL). This guarantees that permanent metadata keys are preserved while transient caches roll off under memory pressure.
2. **TTL Mandate:** **Every key placed into Redis MUST have an explicit TTL.** Indefinite keys are strictly prohibited (with the sole exception of static catalog hash roots that are programmatically invalidated on deployment).
3. **Payload Compression:** JSON artifacts exceeding 32KB (such as large SVG/ReactFlow roadmap schemas) will be compressed using Node.js native `zlib` (Brotli or Gzip) prior to caching in Redis, saving 60-80% memory footprint.

---

## 6. Caching Strategy

### 6.1 Cache-Aside Pattern with Single-Flight Stampede Prevention

Elev8 will use the **Cache-Aside (Lazy Loading)** pattern wrapped in a type-safe helper:

1. Application checks Redis for key `k`.
2. **Cache Hit:** Redis returns serialized data. Parse and return immediately.
3. **Cache Miss:** Application acquires short local lock or executes database/blob query, stores result in Redis with designated TTL, and returns data.
4. **Cache Stampede Prevention:** For expensive computed queries (e.g. `ResumeReportService`), the `getOrSet` utility utilizes single-flight promise memoization within the active request context and an atomic Redis lock (`SET ... NX EX 5`) across concurrent instances to ensure only one worker computes the result.

```
Incoming Request
       │
       ▼
[ Check Redis ] ── (Hit) ──────────────────────────► Return Data
       │
     (Miss)
       ▼
[ Acquire Lock ] ── (Lock Failed) ──► Wait 50ms ──► [ Re-check Redis ]
       │ (Lock Won)
       ▼
[ Query DB / Vercel Blob ]
       │
       ▼
[ Write to Redis with TTL ]
       │
       ▼
[ Release Lock ] ──► Return Fresh Data
```

### 6.2 Key Naming Conventions

All Redis keys adhere to an explicit hierarchical namespace structure:

```
elev8:<environment>:<namespace>:<entityId>[:<qualifier>]
```

| Namespace | Key Pattern | TTL | Data Type | Purpose |
|:---|:---|:---|:---|:---|
| **User Map** | `elev8:prod:user:clerk:<clerkId>` | 30 minutes | String (JSON) | Maps Clerk ID to internal DB User record. |
| **Profile** | `elev8:prod:user:profile:<userId>` | 30 minutes | String (JSON) | Full `ProfileData` DTO with relations. |
| **Catalog** | `elev8:prod:catalog:roles:all` | 24 hours | String (JSON) | Array of canonical supported roles. |
| **Catalog** | `elev8:prod:catalog:role:<normalizedRole>` | 24 hours | String (JSON) | Role skill requirements and proficiency data. |
| **Catalog** | `elev8:prod:catalog:templates:resume` | 24 hours | String (JSON) | Predefined resume templates list. |
| **Catalog** | `elev8:prod:catalog:roadmaps:global:<page>:<sort>` | 6 hours | String (JSON) | Paginated global roadmap library directory. |
| **Artifact** | `elev8:prod:artifact:roadmap:<roadmapId>` | 4 hours | String (Compressed JSON) | Pre-parsed ReactFlow roadmap schema. |
| **Artifact** | `elev8:prod:artifact:resume:<resumeId>` | 4 hours | String (JSON) | Computed ATS scores, keyword matches, health. |
| **Notifications** | `elev8:prod:notify:unread:<userId>` | 1 hour | Integer | Real-time counter of unread user notifications. |
| **Quota** | `elev8:prod:quota:<type>:<userId>` | Rolling window (1h / 7d) | Sorted Set / Integer | Distributed sliding-window quota usage. |
| **Lock** | `elev8:prod:lock:<action>:<entityId>` | 30 seconds | String | Distributed mutex preventing duplicate AI execution. |
| **Rate Limit** | `elev8:prod:rl:<feature>:<identifier>` | Window (60s) | `@upstash/ratelimit` internal | Distributed rate limiter state. |

### 6.3 Invalidation Strategy

Stale data is prevented by coupling database mutations directly to Redis invalidation in Server Actions and Service wrappers:

1. **Profile Mutations (`ProfileService.updateProfile` / `upsertProfile`):**
   - Mutation updates PostgreSQL.
   - Server Action explicitly calls:
     ```ts
     await CacheService.del(`user:profile:${userId}`);
     ```
2. **Clerk Webhooks (`/api/webhooks/clerk`):**
   - `user.updated` / `user.deleted` deletes:
     ```ts
     await CacheService.del(`user:clerk:${clerkId}`);
     await CacheService.del(`user:profile:${userId}`);
     ```
3. **Roadmap / Resume Completion (Trigger.dev Tasks):**
   - When Trigger.dev completes `generate-roadmap` or `assess-resume`, it invalidates or pre-warms the cache:
     ```ts
     await CacheService.del(`artifact:roadmap:${roadmapId}`);
     ```
4. **Global Roadmap Regeneration:**
   - Creator regenerates global roadmap -> deletes all matching `catalog:roadmaps:global:*` cache keys using pattern-based batch invalidation.
5. **Notification Lifecycle:**
   - New notification created -> `CacheService.incr("notify:unread:" + userId)`.
   - `markAllNotificationsAsReadAction` -> `CacheService.set("notify:unread:" + userId, 0)`.

### 6.4 Data That Must NEVER Be Cached in Redis

To uphold zero-trust security and data privacy:
- ❌ **API Secrets & Private Keys:** `GEMINI_API_KEY`, `CLERK_SECRET_KEY`, `TRIGGER_SECRET_KEY`, `BLOB_READ_WRITE_TOKEN`.
- ❌ **Authentication Tokens:** Raw Clerk session JWTs or Bearer tokens.
- ❌ **Raw Uploaded Binary Files:** Resumes (PDF/DOCX) belong solely in private Vercel Blob storage. Only structured assessment metadata is cached.
- ❌ **Active Real-Time Keystroke Progress:** Autosaving in-flight interview answers or resume drafts while typing remains directly in client Zustand state and debounced PostgreSQL saves to prevent distributed cache corruption during active editing.

### 6.5 Fail-Open Graceful Degradation

If Upstash Redis encounters a network timeout (configured at 1,500ms), DNS resolution failure, or service degradation:
- The `CacheService` catches the error, logs a warning to Sentry/console, and **executes the underlying database or storage query directly**.
- Under no circumstances will a Redis outage result in an HTTP 500 or broken user experience.

---

## 7. Implementation Roadmap

The implementation is structured into seven discrete, testable phases designed to minimize risk and verify stability at each milestone.

```
┌────────────────────────────────────────────────────────┐
│ Phase 1: Infrastructure & Configuration                │
└───────────────────────────┬────────────────────────────┘
                            ▼
┌────────────────────────────────────────────────────────┐
│ Phase 2: Client Abstraction & Fail-Open Service Layer  │
└───────────────────────────┬────────────────────────────┘
                            ▼
┌────────────────────────────────────────────────────────┐
│ Phase 3: Distributed Rate Limiting & Quota Management  │
└───────────────────────────┬────────────────────────────┘
                            ▼
┌────────────────────────────────────────────────────────┐
│ Phase 4: Static & Shared Catalog Caching               │
└───────────────────────────┬────────────────────────────┘
                            ▼
┌────────────────────────────────────────────────────────┐
│ Phase 5: High-Impact User Data & Blob Artifact Caching │
└───────────────────────────┬────────────────────────────┘
                            ▼
┌────────────────────────────────────────────────────────┐
│ Phase 6: Distributed Workflow Mutex Locks              │
└───────────────────────────┬────────────────────────────┘
                            ▼
┌────────────────────────────────────────────────────────┐
│ Phase 7: Observability, Metrics & Production Tuning    │
└────────────────────────────────────────────────────────┘
```

---

### Phase 1: Infrastructure & Configuration

- **Focus:** Provision Upstash Redis instance and configure environment settings.
- **Dependencies to Install:**
  ```bash
  pnpm add @upstash/redis @upstash/ratelimit
  ```
- **Configuration Updates:**
  - Add to `.env.example`:
    ```env
    UPSTASH_REDIS_REST_URL="https://your-upstash-instance.upstash.io"
    UPSTASH_REDIS_REST_TOKEN="your_upstash_rest_token"
    REDIS_CACHE_ENABLED="true"
    ```
- **Implementation Approach:** Verify connectivity with a dry-run test script in `scripts/test-redis-connection.ts`.
- **Potential Risks:** Missing environment variables in Vercel production deployment.
- **Testing Requirements:** Connectivity unit test verifying HTTPS REST ping to Upstash.
- **Expected Benefits:** Foundation ready for zero-overhead serverless Redis communication.

---

### Phase 2: Redis Client Abstraction & Utilities

- **Focus:** Build the centralized, fail-open `CacheService` and Redis client module.
- **New Files to Create:**
  - `src/lib/redis.ts` — Upstash client singleton with timeout and retry configuration.
  - `src/services/cache/cache.service.ts` — Generic `getOrSet<T>()`, `get<T>()`, `set<T>()`, `del()`, `delPattern()`.
  - `src/services/cache/cache-keys.ts` — Type-safe key builder functions.
  - `src/services/cache/__tests__/cache.service.test.ts` — Comprehensive unit tests.
- **Implementation Approach:** Wrap all Redis operations in `try/catch` blocks. If `process.env.REDIS_CACHE_ENABLED === "false"` or Redis throws an error, default immediately to the database query fallback.
- **Potential Risks:** Silent failures masking configuration errors; addressed by structured warning logs.
- **Testing Requirements:** Mock Redis network failure to verify transparent fallback to database fetcher.
- **Expected Benefits:** Standardized, type-safe caching API across all application modules.

---

### Phase 3: Distributed Rate Limiting & Quota Management

- **Focus:** Replace fragile in-memory rate limiting and offload database `COUNT(*)` quota queries.
- **Files to Modify:**
  - `src/lib/rate-limiter.ts` — Refactor to use `@upstash/ratelimit` when configured, preserving the in-memory limiter strictly as an offline fallback.
  - `src/services/quota/user-quota.service.ts` — Cache hourly generation counts in Redis instead of executing sequential `prisma.job.count` queries.
  - `src/features/career-assessment/services/assessment-quota.service.ts` — Cache weekly assessment allowance in Redis with 1-hour TTL.
  - `src/app/api/webhooks/clerk/route.ts` — Update webhook IP rate-limiter to use distributed Redis sliding window.
- **New Files to Create:**
  - `src/services/cache/rate-limit.service.ts` — Rate limiting presets (e.g. `webhooks`, `auth`, `search`, `generation`).
- **Potential Risks:** Users incorrectly blocked if clock skew occurs; mitigated by sliding-window algorithm.
- **Testing Requirements:** Concurrency test firing 50 simulated requests across simulated multi-instance clients to verify precise cutoff.
- **Expected Benefits:** 100% reliable rate limiting across distributed Vercel lambdas; elimination of recurring `COUNT(*)` DB scans.

---

### Phase 4: Static & Shared Catalog Data Caching

- **Focus:** Cache static reference tables that rarely or never change at runtime.
- **Files to Modify:**
  - `src/features/skill-gap/services/role-skillmap.service.ts`:
    - Cache `getRoleSkillProfile(normalizedRole)` (24-hour TTL).
    - Cache `getSupportedRoles()` (24-hour TTL).
  - `src/app/api/builder/templates/route.ts`:
    - Cache `prisma.resumeTemplate.findMany()` (24-hour TTL).
  - `src/services/roadmaps/roadmap-library.service.ts`:
    - Cache `getRoadmaps({ section: "global", ... })` (6-hour TTL).
    - Invalidate global cache upon creator regeneration in `src/features/roadmaps/actions/roadmap-actions.ts`.
  - `src/features/interview/actions/workspace-actions.ts`:
    - Cache `getGlobalInterviews()` catalog queries (6-hour TTL).
- **Implementation Approach:** Wrap existing Prisma queries in `CacheService.getOrSet()`.
- **Potential Risks:** Global roadmap regeneration does not reflect immediately if invalidation misses a key; mitigated by prefix pattern invalidation (`delPattern("catalog:roadmaps:global:*")`).
- **Testing Requirements:** Verify cache hit on second query; verify cache invalidation on global roadmap update.
- **Expected Benefits:** 90%+ database query reduction on catalog pages; search and browse latencies drop from ~120ms to ~15ms.

---

### Phase 5: High-Impact User Data & Computed Artifact Caching

- **Focus:** Accelerate user dashboard loading and eliminate Vercel Blob network waterfalls.
- **Files to Modify:**
  - `src/lib/auth.ts`:
    - In `getOrCreateDbUser()`, cache the database user object keyed by `clerkId` (15-minute TTL).
  - `src/features/profile/services/profile.service.ts`:
    - Cache `getProfile(userId)` (30-minute TTL).
    - Invalidate `user:profile:${userId}` in `createProfile`, `updateProfile`, and `upsertProfile`.
  - `src/services/roadmaps/roadmap-viewer.service.ts`:
    - Cache parsed and validated `artifact` for completed roadmaps (4-hour TTL).
  - `src/features/resume/services/resume-report.service.ts`:
    - Cache computed `health`, `keywords`, and `recommendations` report (4-hour TTL).
  - `src/app/api/notifications/route.ts`:
    - Cache unread notification count; bypass DB count during polling.
- **Potential Risks:** Users editing their profile seeing stale data if cache is not properly cleared; mitigated by write-through invalidation within the same transaction/action.
- **Testing Requirements:** Edit profile -> verify dashboard immediately displays new name/title.
- **Expected Benefits:** Main dashboard database queries drop from 4 to 1; roadmap and resume report load times drop by 200-400ms.

---

### Phase 6: Distributed Workflow Mutex Locks

- **Focus:** Guard expensive AI background jobs against race conditions and rapid double-clicks.
- **Files to Modify:**
  - `src/features/roadmaps/actions/roadmap-actions.ts` (`requestRoadmapGenerationAction`).
  - `src/features/career-assessment/services/actions.ts` (`createAssessmentAction`).
  - `src/features/resume-builder/actions/export-actions.ts` (`requestResumePdfExportAction`).
  - `src/features/resume-builder/services/ai-resume-build.service.ts` (`triggerAiBuild`).
- **Implementation Approach:**
  ```ts
  const lockKey = `lock:user:${userId}:workflow:${workflowType}`;
  const acquired = await CacheService.acquireLock(lockKey, 30); // 30s TTL
  if (!acquired) {
    throw new Error("A generation workflow is already being initiated. Please wait.");
  }
  ```
- **Potential Risks:** Lock not released if unhandled exception occurs; mitigated by strict `try/finally` blocks and a conservative 30-second automatic expiration.
- **Testing Requirements:** Parallel execution simulation asserting that only 1 task is enqueued in Trigger.dev.
- **Expected Benefits:** Eliminates duplicate LLM token consumption and duplicate DB job rows.

---

### Phase 7: Observability, Metrics & Production Tuning

- **Focus:** Establish observability, monitor cache hit rates, and benchmark latency.
- **Files to Modify:**
  - `src/lib/redis.ts` — Add telemetry hooks (logs cache hit/miss/error events to console or Sentry).
- **Implementation Approach:** Create dashboard in Upstash Console to track throughput, latency, and memory usage. Configure alerts for memory thresholds (>80%).
- **Testing Requirements:** End-to-end integration and load testing using Vitest and Playwright.
- **Expected Benefits:** Complete visibility into cache performance, memory consumption, and cost efficiency.

---

## 8. File-Level Implementation Breakdown

The following table summarizes all codebase touchpoints across the implementation:

| File Path | Action | Description of Changes |
|:---|:---|:---|
| `package.json` | Modify | Add `@upstash/redis` and `@upstash/ratelimit` dependencies. |
| `.env.example` | Modify | Document `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`, and `REDIS_CACHE_ENABLED`. |
| `src/lib/redis.ts` | **Create** | Upstash client singleton with timeout configuration and error handlers. |
| `src/services/cache/cache-keys.ts` | **Create** | Centralized type-safe key formatting constants and functions. |
| `src/services/cache/cache.service.ts` | **Create** | Primary cache abstraction (`getOrSet`, `del`, `acquireLock`, `delPattern`). |
| `src/services/cache/rate-limit.service.ts` | **Create** | Upstash sliding-window rate limit wrappers for API and Action endpoints. |
| `src/lib/rate-limiter.ts` | Modify | Integrate Redis rate limiter as primary provider; retain in-memory `Map` as fallback. |
| `src/lib/auth.ts` | Modify | Cache `getOrCreateDbUser()` result in Redis (`elev8:user:clerk:{clerkId}`). |
| `src/app/api/webhooks/clerk/route.ts` | Modify | Invalidate Redis user cache on `user.updated` and `user.deleted`. |
| `src/features/profile/services/profile.service.ts` | Modify | Cache `getProfile()`; invalidate cache in `createProfile`, `updateProfile`, `upsertProfile`. |
| `src/features/skill-gap/services/role-skillmap.service.ts` | Modify | Cache `getRoleSkillProfile()` and `getSupportedRoles()` with 24-hour TTL. |
| `src/app/api/builder/templates/route.ts` | Modify | Cache resume template catalog with 24-hour TTL. |
| `src/services/roadmaps/roadmap-library.service.ts` | Modify | Cache global roadmap listing with 6-hour TTL. |
| `src/features/roadmaps/actions/roadmap-actions.ts` | Modify | Add mutex lock on roadmap generation; invalidate global catalog on regeneration. |
| `src/services/roadmaps/roadmap-viewer.service.ts` | Modify | Cache parsed roadmap JSON artifact for completed roadmaps. |
| `src/features/resume/services/resume-report.service.ts` | Modify | Cache parsed resume report, health score, and keyword analysis. |
| `src/services/quota/user-quota.service.ts` | Modify | Offload hourly quota check queries to Redis atomic keys. |
| `src/features/career-assessment/services/assessment-quota.service.ts` | Modify | Cache weekly assessment quota status in Redis. |
| `src/app/api/notifications/route.ts` | Modify | Cache unread notifications count; update on read/delete. |
| `src/features/notifications/actions.ts` | Modify | Update Redis unread count on notification creation and read-all actions. |
| `src/features/resume-builder/services/ai-resume-build.service.ts` | Modify | Add distributed mutex lock preventing concurrent AI builds for the same user. |

### 8.1 Core Architectural Blueprints

#### 8.1.1 Redis Client Singleton (`src/lib/redis.ts`)

```typescript
import { Redis } from "@upstash/redis";

const globalForRedis = globalThis as unknown as {
  redisClient: Redis | undefined;
};

function createRedisClient(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    if (process.env.NODE_ENV === "production") {
      console.warn("[Redis] UPSTASH_REDIS_REST_URL or UPSTASH_REDIS_REST_TOKEN missing. Caching disabled.");
    }
    return null;
  }

  return new Redis({
    url,
    token,
    retry: {
      retries: 2,
      backoff: (retryCount) => Math.min(Math.exp(retryCount) * 50, 500),
    },
  });
}

export const redis = globalForRedis.redisClient ?? createRedisClient();

if (process.env.NODE_ENV !== "production" && redis) {
  globalForRedis.redisClient = redis;
}

export const isRedisConfigured = (): boolean => {
  return Boolean(redis && process.env.REDIS_CACHE_ENABLED !== "false");
};
```

#### 8.1.2 Central Cache Service (`src/services/cache/cache.service.ts`)

```typescript
import { redis, isRedisConfigured } from "@/lib/redis";

export class CacheService {
  /**
   * Retrieves an item from cache, or executes the fetcher on cache miss and stores the result.
   * Completely fail-open: if Redis throws or is unconfigured, executes fetcher directly.
   */
  public static async getOrSet<T>(
    key: string,
    fetcher: () => Promise<T>,
    ttlSeconds: number = 300
  ): Promise<T> {
    if (!isRedisConfigured() || !redis) {
      return fetcher();
    }

    try {
      const cached = await redis.get<T>(key);
      if (cached !== null && cached !== undefined) {
        return cached;
      }
    } catch (err) {
      console.warn(`[CacheService] Read error for key "${key}", falling back to DB:`, err);
    }

    const freshData = await fetcher();

    if (freshData !== null && freshData !== undefined) {
      try {
        await redis.set(key, freshData, { ex: ttlSeconds });
      } catch (err) {
        console.warn(`[CacheService] Write error for key "${key}":`, err);
      }
    }

    return freshData;
  }

  /**
   * Deletes a specific key.
   */
  public static async del(key: string): Promise<void> {
    if (!isRedisConfigured() || !redis) return;
    try {
      await redis.del(key);
    } catch (err) {
      console.warn(`[CacheService] Delete error for key "${key}":`, err);
    }
  }

  /**
   * Deletes multiple keys matching a wildcard pattern (e.g. "catalog:roadmaps:*").
   */
  public static async delPattern(pattern: string): Promise<void> {
    if (!isRedisConfigured() || !redis) return;
    try {
      const keys = await redis.keys(pattern);
      if (keys.length > 0) {
        await redis.del(...keys);
      }
    } catch (err) {
      console.warn(`[CacheService] Pattern delete error for "${pattern}":`, err);
    }
  }

  /**
   * Acquires a distributed lock using SETNX with an expiration TTL.
   */
  public static async acquireLock(
    lockKey: string,
    ttlSeconds: number = 30
  ): Promise<boolean> {
    if (!isRedisConfigured() || !redis) return true; // Fail-open: allow execution if cache disabled
    try {
      const result = await redis.set(lockKey, "locked", {
        nx: true,
        ex: ttlSeconds,
      });
      return result === "OK";
    } catch (err) {
      console.warn(`[CacheService] Lock acquisition error for "${lockKey}":`, err);
      return true; // Allow execution on Redis error
    }
  }

  /**
   * Releases a distributed lock.
   */
  public static async releaseLock(lockKey: string): Promise<void> {
    if (!isRedisConfigured() || !redis) return;
    try {
      await redis.del(lockKey);
    } catch (err) {
      console.warn(`[CacheService] Lock release error for "${lockKey}":`, err);
    }
  }
}
```

#### 8.1.3 Upgraded Distributed Rate Limiter (`src/services/cache/rate-limit.service.ts`)

```typescript
import { redis, isRedisConfigured } from "@/lib/redis";
import { Ratelimit } from "@upstash/ratelimit";
import { checkRateLimit as checkInMemoryLimit } from "@/lib/rate-limiter";

const limiters: Record<string, Ratelimit> = {};

function getLimiter(limit: number, windowMs: number): Ratelimit | null {
  if (!isRedisConfigured() || !redis) return null;

  const key = `${limit}_${windowMs}`;
  if (!limiters[key]) {
    limiters[key] = new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(limit, `${windowMs} ms`),
      analytics: false,
      prefix: "elev8:rl",
    });
  }
  return limiters[key];
}

export interface RateLimitCheckResult {
  success: boolean;
  limit: number;
  remaining: number;
  resetMs: number;
}

export async function checkDistributedRateLimit(
  key: string,
  config: { limit: number; windowMs: number }
): Promise<RateLimitCheckResult> {
  const limiter = getLimiter(config.limit, config.windowMs);

  if (!limiter) {
    return checkInMemoryLimit(key, config);
  }

  try {
    const { success, limit, remaining, reset } = await limiter.limit(key);
    return {
      success,
      limit,
      remaining,
      resetMs: Math.max(0, reset - Date.now()),
    };
  } catch (err) {
    console.warn(`[RateLimitService] Redis rate limit check failed for "${key}", falling back to in-memory:`, err);
    return checkInMemoryLimit(key, config);
  }
}
```

---

## 9. Testing Strategy

A thorough testing pipeline ensures caching and rate-limiting behave correctly without regressing database consistency.

### 9.1 Unit Testing (Vitest)

- **Mocked Redis Client:** Create `src/lib/__mocks__/redis.ts` simulating Upstash key-value store, expiration, and error injection in unit test environments.
- **Cache Hit / Miss Scenarios:** Test `CacheService.getOrSet()` to ensure fetcher is called exactly once on cache miss and zero times on cache hit.
- **Cache Invalidation:** Verify that modifying a profile or generating a roadmap calls `redis.del()` with the expected key format.
- **Fail-Open Verification:** Simulate Upstash connection timeouts and network errors; assert that `CacheService` catches the error, logs a warning, and returns fresh data from the mock database without throwing.

### 9.2 Distributed Concurrency & Rate Limiting Tests

- **Sliding-Window Boundaries:** Test request bursts at `t = 0`, `t = 59s`, and `t = 61s` to ensure sliding window permits requests correctly across window boundaries.
- **Distributed Mutex Lock:** Simulate 5 concurrent requests attempting `CacheService.acquireLock("lock:test", 30)`; verify exactly 1 succeeds and 4 receive `false`.

### 9.3 Integration & E2E Testing (Playwright)

- **End-to-End Profile Update:**
  1. Load `/dashboard` (records initial profile in cache).
  2. Navigate to `/dashboard/settings` and update user title.
  3. Return to `/dashboard`; assert that updated title renders immediately (verifies cache invalidation).
- **Global Roadmap Browser:**
  1. Visit `/dashboard/roadmaps?section=global`.
  2. Measure server response time (target < 50ms on second visit).

---

## 10. Monitoring and Performance Benchmarks

### 10.1 Measurable Target Benchmarks

All performance targets are explicitly distinguished as measurable baseline comparisons rather than unsubstantiated claims:

| Metric | Pre-Implementation Baseline | Target With Redis | Measurement Method |
|:---|:---|:---|:---|
| **Dashboard Initial Load (p95)** | ~380ms – 650ms | **< 200ms** | Next.js Server-Timing headers / Sentry Tracing |
| **Global Roadmap Catalog Query** | ~110ms – 190ms | **< 25ms** | Prisma Query Duration vs Upstash REST Duration |
| **Roadmap Viewer Artifact Load** | ~280ms – 450ms (HTTP Blob hop) | **< 40ms** | `RoadmapViewerService.getRoadmapForViewer` latency |
| **PostgreSQL Queries / Dashboard Load** | 4 – 6 queries | **1 query** (only dynamic activity log) | Prisma logging in development & Datadog in staging |
| **PostgreSQL `COUNT(*)` Load** | Continuous during notification polling & quotas | **Reduced by > 80%** | PostgreSQL pg_stat_statements query frequency |
| **Cache Hit Ratio (Catalog)** | 0% (No cache) | **> 90%** | Upstash Console Analytics |
| **Cache Hit Ratio (User Profile)** | 0% | **> 70%** | Upstash Console Analytics |

### 10.2 Monitoring Tools & Observability

1. **Upstash Console:** Monitor commands per second, read/write latency, connection count, and memory utilization.
2. **Sentry Performance Tracing:** Instrument `CacheService.getOrSet` with custom Sentry spans (`op: "cache.get"`, `op: "cache.set"`) to trace cache hits and misses in production.
3. **Next.js Server-Timing API:** Emit `Server-Timing: redis;dur=X` headers in development and preview deployments to track latency breakdown directly in browser DevTools.

---

## 11. Security and Reliability Considerations

1. **Transport Encryption:** All traffic between Vercel Serverless Functions and Upstash is encrypted over TLS (HTTPS port 443).
2. **Tenant Isolation:** Cache keys are strictly segregated by internal user ID (`user:{userId}:*`). Users can never access or invalidate another user's cached profile or artifact.
3. **Graceful Degradation (Fail-Open):**
   - Redis timeouts are capped at 1,500ms.
   - Any Redis exception triggers immediate fallback to PostgreSQL / Vercel Blob.
   - The platform remains 100% operational even during complete Redis cloud outages.
4. **Environment Isolation:** Keys are prefixed with the active environment (`elev8:prod:*`, `elev8:staging:*`, `elev8:dev:*`) to prevent cross-environment cache pollution when testing against shared clusters.
5. **Memory Cap Protection:** Every key is tagged with a conservative TTL, and the Upstash instance is configured with `volatile-lru` eviction to prevent memory exhaustion under unexpected traffic surges.

---

## 12. Infrastructure and Cost Analysis

### 12.1 Cost Comparison: Upstash vs. Alternatives

| Provider | Architecture | Cost Model | Estimated Monthly Cost (Elev8) |
|:---|:---|:---|:---|
| **Upstash Serverless Redis** | Serverless REST | $0.20 per 100,000 commands (Free tier: 10k cmds/day) | **$0.00 – $5.00 / month** (at ~1-2M commands/mo) |
| **Redis Cloud (Fixed)** | Dedicated instance | $5.00 / month (30MB) to $15.00 / month (100MB) | **$15.00 / month minimum** |
| **AWS ElastiCache (t4g.micro)** | VPC TCP cluster | Hourly instance billing + NAT Gateway data transfer | **$35.00 – $65.00 / month** |

### 12.2 Resource Footprint

- **Memory Estimate:** 1,000 active daily users caching profiles (~2KB each), active roadmap artifacts (~15KB each), and rate limit keys (~100 bytes each) require **under 35MB of total Redis memory**.
- **Network Bandwidth:** Less than 500MB data transfer per month, falling well within standard free and entry-level tiers.

---

## 13. Risks, Trade-offs and Alternatives

### 13.1 Trade-Offs

| Decision | Trade-Off Accepted | Mitigation |
|:---|:---|:---|
| **HTTP REST vs. TCP Sockets** | Upstash REST requests have slightly higher per-command latency (10-20ms) compared to persistent TCP sockets (1-3ms) on a continuous connection. | In serverless lambdas, TCP handshake overhead and socket exhaustion far outweigh the 10ms REST overhead. Zero connection management makes HTTP far superior for Vercel. |
| **Cache Invalidation Complexity** | Manual cache invalidation across mutations requires strict discipline to prevent serving stale profile data. | Centralize invalidations directly within Service methods (`ProfileService`, `UserAccountDeletionService`) rather than spreading invalidation calls across UI components. |
| **Rejecting BullMQ** | Cannot use Redis-native BullMQ dashboards. | Trigger.dev already provides an enterprise-grade cloud dashboard, real-time log streaming, and automated execution tracing, rendering BullMQ redundant. |

### 13.2 Alternative Technologies Considered

1. **Next.js `unstable_cache` / Data Cache:** Next.js built-in data cache works well for static RSC pages, but does not support distributed atomic mutex locks, cross-server rate-limiting, or granular TTL-based key invalidation from background workers.
2. **PostgreSQL In-Memory Caching (Unlogged Tables):** Adds strain to the existing relational database rather than offloading it.
3. **Memcached:** Lacks atomic operations (`SETNX`, `ZREMRANGEBYSCORE`), preventing its use for distributed rate limiting and locking.

---

## 14. Final Recommendations and Implementation Priorities

### Prioritization Matrix

```
   HIGH IMPACT │   [Phase 3] Distributed Rate Limiting
               │   [Phase 5] User Profile & Blob Caching
               │   [Phase 6] Workflow Mutex Locks
               │
               │   [Phase 4] Static Catalog Caching
               │   [Phase 2] Centralized Client Setup
               │   [Phase 1] Infrastructure Provisioning
    LOW IMPACT │   [Phase 7] Observability Tuning
               └─────────────────────────────────────────
                 LOW COMPLEXITY           HIGH COMPLEXITY
```

### Action Plan for Execution (When Approved)

1. **Step 1:** Create Upstash Redis database in the same geographical region as the Vercel deployment (e.g. `us-east-1` or `iad1`).
2. **Step 2:** Execute Phase 1 & Phase 2: Install `@upstash/redis` and `@upstash/ratelimit`, configure environment variables, and create `src/lib/redis.ts` and `src/services/cache/cache.service.ts`.
3. **Step 3:** Implement Phase 3: Upgrade `src/lib/rate-limiter.ts` to distributed rate limiting to immediately secure edge routes and webhooks.
4. **Step 4:** Implement Phase 4 & Phase 5: Wrap static catalog queries (`RoleSkillMapService`, `ResumeTemplate`) and high-frequency user profile lookups in `CacheService.getOrSet()`.
5. **Step 5:** Implement Phase 6: Guard Trigger.dev workflows with distributed mutex locks.
6. **Step 6:** Run complete verification test suite (`vitest run`, `playwright test`) and monitor latency improvements.

---
*End of Architectural Plan.*
