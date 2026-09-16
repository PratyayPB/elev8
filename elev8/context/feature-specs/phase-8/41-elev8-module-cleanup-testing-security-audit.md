# Elev8 Module Cleanup, Testing, Optimization & Security Audit

## Objective

Perform a complete engineering audit of the target module. This specification is module-independent and must work for any Elev8 module.

The goal is to:
1. Identify and safely remove unused database structures, backend code, frontend/UI code, and dead logic.
2. Write and execute comprehensive tests.
3. Identify expensive or long-running operations and optimize them.
4. Normalize and validate data throughout the complete workflow.
5. Enforce proper frontend/backend separation.
6. Identify and remediate security vulnerabilities.
7. Preserve intended product behavior.

Do not introduce unrelated architecture changes, AI recommendations, or premature abstractions.

---

## 1. Full Module Discovery

Before changing code, analyze the entire module and its repository-wide dependencies.

Identify:
- Frontend routes/pages/components/hooks/state
- API routes/server actions
- Middleware/auth/authorization
- Services/business logic/utilities
- Prisma models, relations, indexes and migrations
- External APIs and SDKs
- Storage integrations
- Trigger.dev/background jobs
- Environment/configuration dependencies
- Existing tests
- Shared components/utilities imported by the module

Map the workflow:

```text
UI → hooks/state → API/server action → middleware/auth → service → database/external API → response → UI
```

Do not modify anything during initial discovery.

---

## 2. Unused Database Cleanup

Audit all database models/fields related to the module.

Find:
- Unused tables/models
- Unused attributes/columns
- Obsolete relations
- Redundant indexes
- Legacy/duplicated derived data
- Fields never read or written

For every candidate, search the entire repository, including:
- API routes
- services
- server actions
- background jobs
- dynamic imports
- migrations
- seeds
- scripts/admin tooling
- tests

Do not delete uncertain data.

For confirmed unused items document:

```text
Item
Evidence
Dependencies
Risk
Source of truth / replacement
Removal plan
```

Apply confirmed database changes through Prisma migrations. Never silently modify production database state.

---

## 3. Unused Backend Logic

Audit:
- Services
- Functions
- Server actions
- API handlers
- Utilities
- Repositories
- Workers/Trigger tasks
- Validators/adapters

Identify:
- Never-used functions
- Unreachable code
- Obsolete implementations
- Duplicate business logic
- Dead branches
- Unused parameters/response fields
- Redundant database queries
- Obsolete endpoints

Before deleting anything, trace repository-wide references, route registration, dynamic imports, jobs, tests and configuration.

---

## 4. Unused UI Components

Audit:
- Pages/routes
- Components
- Hooks
- Forms/dialogs
- Loading/error/empty states
- Providers
- Client components
- Styles/assets

Identify unused components, props, hooks, state, CSS, assets, duplicate components and unreachable UI branches.

Check dynamic imports and routing before removal.

---

## 5. Cleanup Classification

Classify findings as:

```text
SAFE TO REMOVE
REQUIRES MIGRATION
REQUIRES MANUAL VERIFICATION
DO NOT REMOVE
```

For uncertain items, leave them unchanged and document the uncertainty.

After cleanup, search again for references to every removed model, field, function, component, route and environment variable.

---

# 6. Testing

Write and execute tests in five categories.

## A. UI Tests

Cover:
- Initial rendering
- Loading/empty/error/success states
- Form validation
- Invalid user input
- Buttons/actions/navigation
- Disabled states
- Retry behavior
- Partial workflows
- Auth-dependent UI
- Authorization-dependent UI

## B. Middleware Tests

Cover:
- Unauthenticated access
- Authenticated access
- Authorization
- Protected/public routes
- Redirects
- Invalid/missing sessions or tokens
- Malformed requests
- Route matcher behavior

Frontend protection must never be treated as sufficient authorization.

## C. Backend Logic Tests

Cover:
- Services/functions
- Business rules
- Validation
- Edge cases
- Null/undefined/malformed input
- Authorization/ownership
- Database failures
- External API failures
- Retry/idempotency behavior where relevant

Test business logic independently of HTTP/UI layers.

## D. External API Tests

For every integration test:
- Success
- Invalid request
- Unauthorized/forbidden
- Rate limiting
- Timeout/network failure
- Malformed/unexpected response
- Provider failure
- Partial response

Use mocks/test credentials/test environments. Never expose production credentials in tests.

## E. Database Tests

Cover:
- Create/read/update/delete
- Relations
- Unique constraints
- Foreign keys
- Transactions/rollback
- Missing records
- Invalid IDs
- Concurrent operations where relevant
- Pagination/filtering
- User ownership/authorization scoping
- Duplicate requests

Actually execute the applicable test suites. Do not claim tests passed unless they were run.

Also run existing typecheck, lint and build commands.

---

# 7. Performance Audit

Identify expensive or long-running:
- AI/LLM calls
- External API calls
- Database queries
- Large loops/data transformations
- File/blob operations
- PDF/image generation
- Serialization/deserialization
- Polling
- Background jobs

For each issue document:

```text
Operation
Current behavior
Why expensive
Frequency/input size
Bottleneck
Optimization
Expected impact
Risk
```

Prefer simple, measurable improvements.

---

## 8. Database Optimization

Look for:
- N+1 queries
- Over-fetching
- Duplicate queries
- Missing useful indexes
- Redundant writes
- Unbounded reads
- Long transactions

Use Prisma `select`/appropriate relations where applicable.

Do not perform slow external API calls inside database transactions.

Use pagination for unbounded datasets.

Only add indexes when supported by actual query patterns.

---

## 9. External API & Long-Running Task Optimization

Look for duplicate/unnecessary requests, sequential independent calls, excessive payloads, missing timeouts and poor retry behavior.

Where safe, parallelize independent operations.

Consider caching, batching, deduplication, debouncing or background processing only when justified.

For existing Trigger.dev workflows, ensure jobs are idempotent and retry-safe and do not unnecessarily hold database transactions.

---

# 10. Input Normalization & Validation

Validate at every meaningful trust boundary:

```text
User Input
 ↓
Frontend Validation
 ↓
HTTP/API Request
 ↓
Middleware
 ↓
Server Validation
 ↓
Business Logic
 ↓
Database / External API
```

Frontend validation is for UX; server-side validation is mandatory.

Normalize where appropriate:
- Strings/whitespace
- Emails
- URLs
- IDs
- Enum values
- Phone numbers
- Optional values
- Dates
- Numeric values
- Arrays/nested objects

Do not alter semantic meaning through normalization.

Validate:
- Required fields
- Types/formats
- Length/range
- Enums
- Array sizes
- Nested objects
- IDs
- URLs
- Files where applicable
- Cross-field dependencies
- Ownership/authorization

Reuse the project's existing validation library and conventions.

Use database constraints (`UNIQUE`, `NOT NULL`, foreign keys and appropriate checks) where appropriate.

---

# 11. Frontend/Backend Separation

Audit every client component and API boundary.

Never expose to the frontend:
- Database credentials
- Private API keys
- Service-role credentials
- Server-only environment variables
- Secrets/tokens
- Privileged database operations
- Server-only business logic

Treat all client-exposed environment variables as public.

If a secret is required for an external API:

```text
Frontend → Own backend endpoint → Secret API key → External API
```

Never place the secret API key in browser code.

---

# 12. Security Audit

## Authentication

Check for missing authentication, incorrect session handling and trust in client-provided identity.

## Authorization

Every protected resource must verify ownership/permission on the server.

Do not trust client-provided `userId`, `ownerId`, roles or permissions.

Prefer deriving identity from the authenticated server session.

## Injection

Audit:
- Raw SQL
- `$queryRaw` / `$executeRaw`
- Dynamic query construction
- Untrusted filters/sorting
- NoSQL/query-object construction where applicable

Use parameterized queries and safe query builders.

## API Security

Check:
- Authentication
- Authorization
- Input validation
- Rate limits where appropriate
- Request size limits
- Error leakage
- Sensitive response data
- CORS/CSRF considerations where applicable
- Webhook verification where applicable

## Secrets

Search repository/configuration for:

```text
API_KEY
SECRET
TOKEN
PASSWORD
PRIVATE_KEY
DATABASE_URL
SERVICE_ROLE
```

Inspect environment/config/public directories and client bundles.

If a real secret is discovered in source/history, document the exposure and recommend rotation/remediation rather than merely deleting the current copy.

---

# 13. AI/LLM Security

If the module uses AI:
- Keep provider keys server-side.
- Validate prompt/input size.
- Treat model output as untrusted.
- Validate structured model output against a schema.
- Do not allow model output to bypass authorization.
- Sanitize rendered HTML/content where applicable.
- Prevent model output from directly executing code.
- Send only the minimum required sensitive data.

---

# 14. Error Handling

Do not expose to clients:
- Stack traces
- SQL queries
- Database credentials
- API keys
- Internal filesystem paths
- Provider credentials
- Sensitive object contents

Use safe client errors and detailed server-side logs without leaking secrets or personal data.

---

# 15. Preserve Source-of-Truth Ownership

For every important data field determine:

```text
Who owns it?
Where is the source of truth?
Who reads it?
Is it duplicated or derived?
```

Do not create duplicate authoritative data during cleanup or optimization.

Intentional historical snapshots/denormalization may be retained when their purpose is documented.

---

# 16. Change Safety

Before destructive changes:

1. Search references.
2. Trace dependencies.
3. Identify source of truth.
4. Check migrations/seeds.
5. Check tests.
6. Check background jobs/dynamic imports.
7. Confirm replacement behavior.
8. Make the smallest safe change.
9. Run tests.
10. Re-search for obsolete references.

Do not perform speculative refactoring.

---

# 17. Required Deliverables

Produce the following audit/implementation reports.

## Cleanup Report

```text
Unused models
Unused fields
Unused indexes
Unused backend functions
Unused API routes
Unused UI components/hooks
Dead logic
Duplicate logic
```

Each finding should include evidence, risk and action.

## Security Report

```text
Finding
Severity
Location
Impact
Fix
Verification
```

Severity:

```text
CRITICAL
HIGH
MEDIUM
LOW
INFO
```

## Performance Report

```text
Operation
Bottleneck
Optimization
Expected impact
Risk
```

## Test Report

```text
Category
Tests written
Tests executed
Passed
Failed
Skipped
Coverage if available
```

## Implementation Summary

Document:
- Files added
- Files modified
- Files removed
- Database migrations
- Tests added
- Security fixes
- Performance optimizations
- Remaining technical debt

---

# 18. Final Verification

After implementation:

```text
Run tests
Run typecheck
Run lint
Run build
Search removed identifiers
Validate migrations
Review API boundaries
Review authentication/authorization
Review environment variables/secrets
Review external API calls
Review expensive operations
```

The final module must build successfully and preserve intended functionality.

Do not claim an issue was fixed, a test passed, or a security vulnerability was resolved without verification.

---

# 19. Engineering Principles

1. Preserve intended product behavior.
2. Prefer evidence over assumptions.
3. Do not delete uncertain code.
4. Keep business logic on the server.
5. Never trust client input for authorization.
6. Validate at every trust boundary.
7. Keep source-of-truth ownership clear.
8. Prefer simple optimizations with measurable benefit.
9. Reuse existing project architecture and dependencies.
10. Avoid premature abstractions.
11. Keep cleanup changes understandable and reviewable.
12. Test every meaningful behavioral change.

## Final Goal

```text
Less dead code
+ Cleaner database
+ Cleaner backend
+ Cleaner UI
+ Better tests
+ Better performance
+ Validated data
+ Clear frontend/backend boundaries
+ Stronger security
+ No exposed secrets
        ↓
Cleaner, safer, more maintainable module
```

The cleanup must be evidence-driven, test-verified, security-conscious and behavior-preserving.

# 32. Graceful Error Handling

Every event, workflow, API operation, database operation, external API call, background task, and UI action in the module must have graceful error handling.

The application must never leave the user with an unexplained blank screen, broken state, raw exception, stack trace, or indefinite loading state.

## Error Handling Principles

Handle errors at both levels:

```text
Frontend
  ↓
User-friendly error state/message
  ↓
Safe recovery action

Backend
  ↓
Log detailed technical error internally
  ↓
Return safe structured error response
  ↓
Frontend displays concise message
```

Do not expose internal implementation details to users.

Never expose:

- stack traces
- SQL/database errors
- API keys or secrets
- provider credentials
- internal filesystem paths
- internal service details
- sensitive user data
- raw exception messages when they may contain sensitive information

## Frontend Error Handling

Every asynchronous/user-triggered operation must account for:

```text
Loading
Success
Failure
Retry/recovery
```

Handle at minimum:

- invalid user input
- validation errors
- authentication errors
- authorization errors
- network failures
- API errors
- timeout errors
- external service failures
- database-related errors returned by the backend
- background-job failures
- unexpected/unknown errors
- missing/deleted resources
- expired sessions

The UI must display a concise, understandable message.

Example:

```text
Unable to generate your roadmap right now.
Please try again.

[Try Again] [Back to Dashboard]
```

For errors where retrying is not appropriate:

```text
We couldn't load this resume.
It may have been deleted or is temporarily unavailable.

[Back to Resumes]
```

## Safe Route Requirement

Every user-facing error state that can prevent normal navigation must provide a safe recovery route.

Depending on the module, this may be:

```text
Back
Back to Dashboard
Back to Module Home
Back to Resumes
Back to Interviews
Back to Roadmaps
```

The safe route must not depend on the failed operation succeeding.

Do not redirect users into another potentially broken state.

## Backend Error Handling

Every API route/server action/service must:

1. Validate input.
2. Authenticate the request where required.
3. Authorize resource access.
4. Execute the operation inside appropriate error handling.
5. Log useful technical details server-side.
6. Return a consistent, safe error response.
7. Avoid leaking implementation details.

Use appropriate HTTP/error semantics rather than returning `200` for failed operations.

Example response shape:

```json
{
  "success": false,
  "error": {
    "code": "ROADMAP_GENERATION_FAILED",
    "message": "Unable to generate the roadmap right now. Please try again."
  }
}
```

The exact response contract should follow the project's existing API conventions if one already exists.

## Error Classification

Where practical, classify errors as:

```text
VALIDATION_ERROR
AUTHENTICATION_ERROR
AUTHORIZATION_ERROR
NOT_FOUND
CONFLICT
RATE_LIMITED
EXTERNAL_SERVICE_ERROR
DATABASE_ERROR
TIMEOUT
BACKGROUND_JOB_ERROR
INTERNAL_ERROR
```

Technical details belong in server logs, while the client receives a safe user-facing message.

## Background Jobs

For Trigger.dev or other asynchronous tasks:

```text
Job started
   ↓
Processing
   ├── success → COMPLETED
   └── failure → FAILED
                    ↓
             Persist failure state
                    ↓
             Notify/update frontend
                    ↓
             Offer retry or safe route
```

Never leave a module permanently showing `PROCESSING` after a failed job.

Persist an appropriate failed state and ensure the frontend can recover.

Retries must be safe and idempotent where applicable.

## Database Errors

Handle:

- connection failures
- constraint violations
- missing records
- transaction failures
- timeout errors
- concurrent update/conflict errors

Do not expose raw Prisma/database errors to the frontend.

Where a conflict occurs, provide an appropriate recovery path such as retrying or reloading the current resource.

## External API Errors

Handle:

- timeout
- network failure
- authentication failure
- authorization failure
- rate limiting
- provider errors
- malformed responses
- unavailable services
- unexpected response structures

Do not assume external APIs always return successful or correctly shaped responses.

Validate external responses before using or persisting them.

## Error Boundaries

Inspect the module for appropriate React/Next.js error boundaries and route-level error handling.

Where applicable, provide:

```text
error.tsx
not-found.tsx
loading.tsx
```

or the project's equivalent patterns.

Do not add duplicate error-handling infrastructure if the application already has a centralized pattern.

## Preserve User State

When an operation fails, preserve user-entered or already-saved data whenever possible.

Examples:

```text
Resume save fails
→ Keep editor contents in memory
→ Inform user that saving failed
→ Offer retry

Interview evaluation fails
→ Preserve all answers
→ Show evaluation failure
→ Allow retry

Roadmap generation fails
→ Preserve generation inputs
→ Show failure
→ Allow retry
```

Never unnecessarily discard valid user data because of an unrelated error.

## Error Handling Tests

Add tests covering:

### Frontend

- error message renders
- loading state ends after failure
- retry works
- safe-route navigation works
- user data remains available after failure
- unexpected errors show fallback UI

### Backend

- validation errors
- authentication failures
- authorization failures
- missing resources
- database failures
- external API failures
- timeouts
- background-job failures
- unexpected exceptions
- safe error responses
- correct HTTP/error status

### End-to-End

Verify that a realistic failure produces:

```text
Operation fails
      ↓
Backend handles/logs error
      ↓
Safe response returned
      ↓
Frontend displays concise message
      ↓
User can retry or navigate to safe route
```

## Final Error-Handling Requirement

For every meaningful event in the module, verify this contract:

```text
SUCCESS → complete normally
FAILURE → fail safely
         → preserve valid state
         → log technical details internally
         → show concise user-facing message
         → provide retry when appropriate
         → provide a safe navigation route
```

No user-facing workflow should terminate in an unexplained or unrecoverable error state.
