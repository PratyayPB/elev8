# Elev8 — Global Interview & Roadmap Generation Blocker

## Objective

Prevent unnecessary AI generation when an equivalent non-personalized resource already exists.

This applies to:

- `GlobalRoadmap`
- `GlobalInterviewTemplate`

For a generic request, the backend must check the corresponding global table **before** triggering LLM generation.

```text
Generic request
      ↓
Normalize identifying inputs
      ↓
Global lookup
      ↓
Found?
  ├── YES → reuse existing resource
  └── NO  → LLM → validate → store globally
```

Goals:

- reduce LLM/API calls
- reduce Trigger.dev executions
- reduce generation latency
- reduce Blob uploads
- prevent duplicate global resources
- reuse identical generic resources across users

---

## 1. Personalization Bypasses the Blocker

The blocker applies only to non-personalized generation.

### Personalized roadmap

```text
personalized = true
→ Profile context
→ LLM
→ Roadmap
```

### Generic roadmap

```text
personalized = false
→ GlobalRoadmap lookup
```

### Personalized interview

```text
personalized = true
→ Profile context
→ LLM
→ InterviewTemplate
```

### Generic interview

```text
personalized = false
→ GlobalInterviewTemplate lookup
```

A global resource must never replace a personalized resource.

---

## 2. Global Roadmap Lookup

For the current architecture, generic roadmap identity is:

```text
normalizedRole
+
experienceLevel
```

Do not match using raw display role strings.

Use one centralized deterministic role-normalization function for both lookup and creation.

Example:

```text
"Backend Engineer"
→ "backend-engineer"
```

Recommended Prisma uniqueness:

```prisma
normalizedRole  String
experienceLevel CareerLevel

@@unique([normalizedRole, experienceLevel])
```

The application should use the generated Prisma compound-key lookup.

---

## 3. Global Interview Lookup

For the current architecture, generic interview-template identity is:

```text
normalizedRole
+
experienceLevel
+
interviewType
```

Recommended uniqueness:

```prisma
normalizedRole    String
experienceLevel   CareerExperienceLevel
interviewType     InterviewType

@@unique([
  normalizedRole,
  experienceLevel,
  interviewType
])
```

Example:

```text
backend-engineer
+
MID
+
TECHNICAL
```

must not reuse:

```text
backend-engineer
+
MID
+
BEHAVIORAL
```

or:

```text
backend-engineer
+
SENIOR
+
TECHNICAL
```

---

## 4. Do Not Use Non-Identity Fields for Lookup

Do not use:

```text
title
description
estimatedDuration
questionCount
blobUrl
createdByUserId
personalized
profileSnapshot
```

as global-resource identity.

Current identities are:

```text
GlobalRoadmap:
normalizedRole + experienceLevel

GlobalInterviewTemplate:
normalizedRole + experienceLevel + interviewType
```

Do not add `questionCount` unless the product later makes it an explicit generation input that materially changes the question set.

---

## 5. Roadmap Generation Flow

Refactor the authoritative roadmap backend action/service:

```text
Request
 ↓
Validate inputs
 ↓
Check personalization
 ↓
If generic:
    normalize role
    lookup GlobalRoadmap
 ↓
Found?
 ├── YES → return existing resource
 └── NO  → create Job
             ↓
          Trigger.dev
             ↓
             LLM
             ↓
          validate
             ↓
           Dagre
             ↓
            Blob
             ↓
       GlobalRoadmap
```

The lookup must occur before any expensive generation operation.

---

## 6. Interview Generation Flow

Refactor the authoritative interview-generation action/service:

```text
Request
 ↓
Validate inputs
 ↓
Check personalization
 ↓
If generic:
    normalize role
    lookup GlobalInterviewTemplate
 ↓
Found?
 ├── YES → reuse existing template
 └── NO  → create Job
             ↓
          Trigger.dev
             ↓
             LLM
             ↓
          validate
             ↓
            Blob
             ↓
     GlobalInterviewTemplate
```

---

## 7. Cache Hit Must Not Trigger Generation

When a matching global resource exists:

```text
NO Gemini call
NO Trigger.dev generation
NO new Blob
NO new global record
```

Return the existing resource.

If the existing frontend requires a Job ID, adapt the response contract appropriately rather than running an unnecessary generation job.

---

## 8. Backend Must Own the Lookup

Do not implement the blocker only in the frontend.

Correct:

```text
Frontend
   ↓
Server Action / API
   ↓
Database lookup
   ↓
reuse or generate
```

The backend must be the authoritative decision-maker.

---

## 9. Reuse Must Return the Canonical Resource

When a matching global resource exists:

```text
GlobalRoadmap A
```

or:

```text
GlobalInterviewTemplate A
```

must be reused directly.

Do not copy it into a user-owned resource merely because another user requested it.

Only a personalized request should generate a user-specific resource.

---

## 10. Personalized Exception

Even if a matching global resource exists:

```text
Backend Engineer
ENTRY
```

a personalized request must still generate a personalized Roadmap.

```text
Global exists
 ↓
personalized = true
 ↓
ignore global
 ↓
Profile context
 ↓
LLM
 ↓
Roadmap
```

The same rule applies to personalized interviews.

---

## 11. Concurrency / Race Conditions

Application-level lookup alone is insufficient.

Potential race:

```text
Request A → lookup miss
Request B → lookup miss
Request A → generate
Request B → generate
```

The database uniqueness constraint must prevent duplicate global records.

Handle unique-constraint conflicts safely:

```text
Request A ─┐
           ├→ generation
Request B ─┘

A stores canonical resource
B receives unique conflict
B fetches canonical resource
```

Where practical, implement generation-level deduplication/locking so identical simultaneous requests do not cause multiple expensive LLM calls.

Possible PostgreSQL strategies:

- advisory locks
- dedicated generation-lock table
- transactional coordination
- another reliable distributed lock already used by the project

Do not introduce unnecessary infrastructure if the application's scale does not require it, but duplicate records must be impossible.

---

## 12. Immutability

Global resources are shared.

After successful generation:

```text
GlobalRoadmap
GlobalInterviewTemplate
```

should be treated as immutable curriculum/template artifacts.

Do not modify shared questions or roadmap content because another user requests something different.

If content needs to change substantially, use a new version/identity strategy.

---

## 13. Generic Roadmap Reuse

Example:

```text
User A
Backend Engineer
ENTRY
generic
```

First request:

```text
lookup → miss
→ generate
→ store GlobalRoadmap
```

Later:

```text
User B
Backend Engineer
ENTRY
generic
```

must perform:

```text
lookup → hit
→ reuse
```

No new LLM generation.

---

## 14. Generic Interview Reuse

Example:

```text
User A
Backend Engineer
MID
TECHNICAL
generic
```

First request:

```text
lookup → miss
→ generate
→ store GlobalInterviewTemplate
```

Later:

```text
User B
Backend Engineer
MID
TECHNICAL
generic
```

must:

```text
lookup → hit
→ reuse
```

No new LLM generation.

---

## 15. Blob Reuse

On a global-resource cache hit:

```text
Existing global resource
        ↓
Existing blobUrl
        ↓
Reuse same artifact
```

Do not create a new Blob artifact for every user.

---

## 16. Job Integration

If the existing Job model is used:

### Global roadmap

```text
type = ROADMAP
artifactType = GLOBAL_ROADMAP
artifactId = GlobalRoadmap.id
```

### Personalized roadmap

```text
type = ROADMAP
artifactType = ROADMAP
artifactId = Roadmap.id
```

### Global interview

```text
type = INTERVIEW
artifactType = GLOBAL_INTERVIEW_TEMPLATE
artifactId = GlobalInterviewTemplate.id
```

### User interview template

```text
type = INTERVIEW
artifactType = INTERVIEW_TEMPLATE
artifactId = InterviewTemplate.id
```

Use the project's existing artifact conventions if they differ.

---

## 17. User Progress Must Remain Separate

Global resources are shared.

Never store user-specific state in the shared global artifact.

For roadmaps:

```text
GlobalRoadmap
= shared curriculum

User-specific progress
= separate data
```

For interviews:

```text
GlobalInterviewTemplate
= shared questions

InterviewSession
= user answers, duration, score, assessment
```

A global resource must never contain one user's progress, answers, scores, or assessment.

---

## 18. Frontend Behavior

The frontend must not assume every request results in AI generation.

On a global-resource hit, show an appropriate loading/opening state rather than a fake AI-generation progress state.

For example:

```text
Opening roadmap...
```

instead of:

```text
Generating roadmap... 42%
```

when no generation occurred.

Do not expose:

```text
createdByUserId
creator
owner
```

for global resources.

---

## 19. Error Handling

Do not treat database lookup errors as cache misses.

Bad:

```text
DB error
 ↓
assume resource doesn't exist
 ↓
generate
```

This can cause unnecessary duplicates.

Instead:

```text
Database lookup failure
 ↓
controlled error/retry
```

unless the application has a deliberately safe fallback.

---

## 20. Status Validation

Only reuse valid resources.

For example:

```text
GlobalInterviewTemplate.status = ACTIVE
```

and an appropriate usable GlobalRoadmap status should be required before reuse.

Do not return failed, invalid, or archived resources as normal reusable resources.

---

## 21. Logging and Metrics

If observability is available, record:

```text
GLOBAL_ROADMAP_LOOKUP
GLOBAL_ROADMAP_HIT
GLOBAL_ROADMAP_MISS
GLOBAL_ROADMAP_GENERATION
```

and:

```text
GLOBAL_INTERVIEW_LOOKUP
GLOBAL_INTERVIEW_HIT
GLOBAL_INTERVIEW_MISS
GLOBAL_INTERVIEW_GENERATION
```

Useful metric:

```text
Global Reuse Rate
=
reuse hits / total generic requests
```

This measures whether the optimization actually reduces AI generation.

Do not log private Profile data.

---

## 22. Testing — Roadmap

### Generic + existing

```text
Backend Engineer
ENTRY
generic
```

Expected:

```text
GlobalRoadmap found
No LLM call
No Trigger.dev generation
No new Blob
No duplicate record
Existing resource returned
```

### Generic + missing

Expected:

```text
lookup miss
→ LLM
→ validation
→ Dagre
→ Blob
→ GlobalRoadmap
```

### Personalized + global exists

Expected:

```text
GlobalRoadmap ignored
Profile context used
LLM generation
Roadmap created
```

### Different experience

```text
Backend Engineer + ENTRY
```

must not reuse:

```text
Backend Engineer + SENIOR
```

### Different role

```text
Frontend Engineer + ENTRY
```

must not reuse:

```text
Backend Engineer + ENTRY
```

---

## 23. Testing — Interview

### Generic + existing

```text
Backend Engineer
MID
TECHNICAL
generic
```

Expected:

```text
GlobalInterviewTemplate found
No LLM call
Existing template reused
```

### Generic + missing

Expected:

```text
LLM generation
validation
Blob
GlobalInterviewTemplate creation
```

### Personalized + global exists

Expected:

```text
Global template ignored
Profile context used
InterviewTemplate generated
```

### Different interview type

```text
TECHNICAL
```

must not reuse:

```text
BEHAVIORAL
```

### Different experience

```text
ENTRY
```

must not reuse:

```text
SENIOR
```

---

## 24. Concurrency Tests

Simulate multiple simultaneous identical generic requests.

Example:

```text
10 simultaneous requests
Backend Engineer
ENTRY
```

Verify:

- no duplicate global records
- database uniqueness is respected
- canonical resource is returned
- unique conflicts are handled safely
- generation deduplication works where implemented

Repeat for GlobalInterviewTemplate.

---

## 25. Regression Tests

Verify that the blocker does not break:

### Roadmap

- personalized roadmap generation
- generic roadmap generation
- roadmap polling
- Job tracking
- Trigger.dev
- Blob storage
- DAG validation
- Dagre
- React Flow
- roadmap activity/progress
- exports

### Interview

- personalized interview generation
- generic interview generation
- InterviewSession creation
- session engine
- answers
- assessment
- grading
- scoring
- performance reports

---

## 26. Codebase Audit

Search the entire repository for:

```text
roadmap generation
interview generation
generateRoadmap
generateInterview
Trigger.dev
@google/genai
GlobalRoadmap
GlobalInterviewTemplate
personalized
profileSnapshot
```

Identify every generation entry point.

The blocker must exist at the authoritative backend generation boundary so alternate routes/actions cannot bypass it.

Also inspect all frontend and backend paths that assume:

```text
every request = new AI generation
```

and update them accordingly.

---

## 27. Acceptance Criteria

### Global Roadmap

- [ ] Generic requests perform a GlobalRoadmap lookup before generation.
- [ ] Lookup uses normalized role + experience level.
- [ ] Existing matching resource is reused.
- [ ] No LLM call on cache hit.
- [ ] No Trigger.dev generation on cache hit.
- [ ] No new Blob on cache hit.
- [ ] No duplicate global record.
- [ ] Database uniqueness is enforced.
- [ ] Personalized requests bypass global reuse.
- [ ] GlobalRoadmaps are immutable.
- [ ] User progress is separate.

### Global Interview

- [ ] Generic requests perform a GlobalInterviewTemplate lookup before generation.
- [ ] Lookup uses normalized role + experience level + interview type.
- [ ] Existing matching template is reused.
- [ ] No LLM call on cache hit.
- [ ] No Trigger.dev generation on cache hit.
- [ ] No new Blob on cache hit.
- [ ] No duplicate global template.
- [ ] Database uniqueness is enforced.
- [ ] Personalized requests bypass global reuse.
- [ ] GlobalInterviewTemplates are immutable.

### Security

- [ ] Global resources are available only to authenticated users.
- [ ] Creator information is not exposed to the frontend.
- [ ] User-owned InterviewTemplates remain private.
- [ ] Profile data is never sent during generic generation.

### Quality

- [ ] TypeScript type checking passes.
- [ ] Lint passes.
- [ ] Relevant tests pass.
- [ ] Production build passes.
- [ ] Existing roadmap and interview flows remain functional.

# Final Rule

```text
Generic request
      ↓
Global lookup
   /       \
 HIT       MISS
  ↓          ↓
Reuse       LLM
             ↓
          Validate
             ↓
          Store global
             ↓
           Return
```

> **Never generate a new generic roadmap or interview template when an equivalent reusable global resource already exists.**

Personalized resources remain independent because Profile data makes them user-specific.
