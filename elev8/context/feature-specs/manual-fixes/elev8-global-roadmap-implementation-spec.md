# Elev8 Roadmap Module — Global Roadmaps Implementation Specification

## Objective

Extend the existing Roadmap module with a shared, reusable `GlobalRoadmap` resource for non-personalized roadmap generation.

The implementation must:

- Keep personalized roadmaps in the existing `Roadmap` model.
- Store non-personalized/generated generic roadmaps only in `GlobalRoadmap`.
- Make GlobalRoadmaps available to authenticated users.
- Reuse an existing GlobalRoadmap when the requested **normalized role + experience level** match.
- Remove `hoursPerWeek` from the roadmap generation form entirely.
- Use `Profile.weeklyLearningHours` only for personalized roadmap generation.
- Keep creator/provenance information backend-only.
- Treat GlobalRoadmaps as immutable curriculum artifacts.
- Keep user-specific roadmap progress/activity separate from shared GlobalRoadmap content.
- Preserve the existing Trigger.dev, LLM, DAG validation, Dagre, Blob, Job, and Roadmap Viewer architecture.

---

# 1. Final Resource Architecture

There are two distinct roadmap resources.

## Personalized Roadmap

Generated using the user's Profile context.

```text
Profile
  ↓
RoadmapProfileContext
  ↓
LLM
  ↓
Roadmap
```

The personalized roadmap is user-specific.

## Global Roadmap

Generated without Profile data.

```text
Generic roadmap inputs
  ↓
GlobalRoadmap lookup
  ↓
Existing?
  ├── YES → reuse
  └── NO  → LLM → validate → store
```

GlobalRoadmap is shared by authenticated users.

---

# 2. Do Not Store the Same Roadmap in Both Tables

A generic roadmap must have one canonical storage location:

```text
Non-personalized
      ↓
GlobalRoadmap
```

Do NOT create a `Roadmap` copy for every user.

Only create a `Roadmap` when the roadmap is genuinely personalized.

This avoids duplicate records, Blob artifacts, LLM generation, synchronization problems, and ambiguous ownership.

---

# 3. GlobalRoadmap Schema

Create a separate Prisma model named:

```prisma
GlobalRoadmap
```

Use a separate physical table:

```prisma
@@map("global_roadmaps")
```

Recommended starting structure:

```prisma
model GlobalRoadmap {
  id                String        @id @default(cuid())

  createdByUserId   String?
  createdByUser     User?         @relation(
    fields: [createdByUserId],
    references: [id],
    onDelete: SetNull
  )

  title             String
  description       String?
  targetRole        String
  normalizedRole    String
  experienceLevel   CareerLevel
  estimatedDuration String?

  blobUrl           String?

  status            RoadmapStatus @default(COMPLETED)

  createdAt         DateTime      @default(now())
  updatedAt         DateTime      @updatedAt

  @@unique([normalizedRole, experienceLevel])
  @@index([createdByUserId])
  @@index([normalizedRole])
  @@index([experienceLevel])
  @@index([status])
  @@index([createdAt])
  @@map("global_roadmaps")
}
```

Adapt exact names/types to the current project if necessary, but preserve the architectural intent.

The original proposal's `@@map("roadmaps")` must not be used because the personalized `Roadmap` already owns that table.

---

# 4. Creator Data Is Backend-Only

`createdByUserId` exists for provenance only.

It must NOT be:

- returned in frontend display DTOs
- displayed on GlobalRoadmap cards
- exposed as an ownership field
- used by the frontend to determine access
- included in client props/state unless strictly required internally

The frontend should receive only fields required to display/use the roadmap.

---

# 5. Creator Deletion

A GlobalRoadmap is shared, not user-owned.

Therefore use:

```prisma
onDelete: SetNull
```

Expected behavior:

```text
User A creates GlobalRoadmap
        ↓
User A is deleted
        ↓
createdByUserId = NULL
        ↓
GlobalRoadmap remains available
```

Do not use `Cascade`.

---

# 6. Global Roadmap Identity

For this implementation, a generic roadmap is reusable based on:

```text
normalizedRole
+
experienceLevel
```

Normalize role values deterministically before lookup.

Example:

```text
Backend Engineer
→ backend-engineer
```

The database should enforce uniqueness:

```prisma
@@unique([normalizedRole, experienceLevel])
```

Do not include weekly hours in global roadmap identity because weekly-hours input is being removed from roadmap generation.

---

# 7. Remove `hoursPerWeek` From Roadmap Generation Form

Remove the roadmap-generation-form `hoursPerWeek` field completely.

There must be no manual weekly-hours input in the roadmap generation UI.

Search the entire codebase for stale form/request references to `hoursPerWeek`.

Do not remove `Profile.weeklyLearningHours`; that field remains part of the Profile.

---

# 8. Personalized Roadmap Weekly Hours

For personalized roadmaps only:

```text
Profile.weeklyLearningHours
          ↓
RoadmapProfileContext
          ↓
ROADMAP_USER_PROMPT_TEMPLATE
          ↓
LLM
```

The user is not asked to enter weekly hours again during roadmap generation.

The Profile is the single source of truth.

---

# 9. Personalized Roadmap Context

The roadmap profile context should include relevant fields such as:

```ts
{
  currentStatus,
  currentRole,
  yearsOfExperience,
  highestQualification,
  fieldOfStudy,
  primaryGoal,
  targetRole,
  targetCompanyType,
  weeklyLearningHours,
  existingSkills,
  desiredSkills
}
```

Do not pass the raw Prisma Profile object.

Do not include irrelevant/private fields such as phone number or onboarding flags.

---

# 10. Generic Roadmap Prompt

When personalization is skipped, do not send Profile context to the LLM.

The generic prompt should use only generic roadmap inputs:

```text
Target Role
Experience Level
```

No Profile-derived:

```text
currentRole
yearsOfExperience
skills
desiredSkills
primaryGoal
weeklyLearningHours
```

This guarantees that the resulting curriculum is generic.

---

# 11. Generation and Reuse Flow

Implement:

```text
User submits roadmap form
        ↓
Personalization selected?
       / \\
     YES  NO
      ↓    ↓
 Profile  Normalize role + experience
 context       ↓
      ↓   GlobalRoadmap lookup
     LLM      /       \\
      ↓    Found       Missing
   Roadmap    ↓           ↓
            reuse        LLM
                           ↓
                       validate
                           ↓
                     GlobalRoadmap
```

---

# 12. Global Roadmap Reuse

Before triggering Gemini/Trigger.dev for a non-personalized request:

1. Normalize the requested role.
2. Query `GlobalRoadmap` by normalized role and experience level.
3. If a matching record exists, reuse it.
4. Do not make an LLM call.
5. Do not upload a new Blob artifact.
6. Do not create a duplicate GlobalRoadmap.

If no match exists, run the existing generation pipeline and store the result as GlobalRoadmap.

Handle concurrent identical requests safely so two simultaneous requests do not create duplicate records. Use the database unique constraint and appropriate conflict/error handling.

---

# 13. GlobalRoadmap Immutability

Treat successful GlobalRoadmaps as immutable curriculum artifacts.

Normal users must not modify:

- title
- description
- target role
- normalized role
- experience level
- graph
- resources
- projects
- Blob artifact

If the curriculum must materially change, create a new version/resource rather than silently changing the shared curriculum.

Design the implementation so future curriculum versioning remains possible.

---

# 14. Shared Curriculum vs User Progress

This is critical.

```text
GlobalRoadmap
= shared curriculum
```

User-specific progress must remain separate:

```text
GlobalRoadmap
      │
      ├── User A → progress/activity
      ├── User B → progress/activity
      └── User C → progress/activity
```

Never store user-specific node completion inside the shared GlobalRoadmap Blob.

Inspect the existing roadmap activity implementation and determine whether `ModuleActivity` is sufficient. If node-level progress requires a dedicated user-specific structure, implement it separately rather than mutating GlobalRoadmap.

---

# 15. Job Integration

Continue using the existing `Job` model for actual generation.

For a newly generated generic roadmap, use the project's artifact conventions to identify:

```text
artifactType = GLOBAL_ROADMAP
artifactId   = GlobalRoadmap.id
```

For personalized generation:

```text
artifactType = ROADMAP
artifactId   = Roadmap.id
```

If the current application uses different values, preserve its established conventions while maintaining the distinction.

If a matching GlobalRoadmap already exists, do not trigger an LLM generation task merely to reuse it.

---

# 16. Blob Architecture

Maintain the existing hybrid architecture:

```text
Postgres
  ↓
GlobalRoadmap metadata + blobUrl

Vercel Blob
  ↓
large roadmap artifact
```

When a GlobalRoadmap is reused, reuse the existing `blobUrl`.

Do not create one Blob artifact per user.

---

# 17. Authentication

GlobalRoadmaps are available to authenticated users.

Backend access control:

```text
Authenticated → allow read
Unauthenticated → reject
```

Creator identity does not determine read access.

Do not expose creator data in frontend responses.

---

# 18. Frontend Changes

Update the roadmap generation form:

Remove:

```text
Hours per week
```

The form should contain the remaining roadmap inputs and personalization choice.

For personalized generation:

```text
Profile.weeklyLearningHours
```

is used automatically.

For generic generation, no weekly-hours Profile signal is sent.

Do not display creator information for GlobalRoadmaps.

---

# 19. Backend Changes

Inspect and update all affected:

- roadmap server actions
- roadmap generation service
- roadmap prompt service
- Profile Context Builder
- Trigger.dev task
- Job creation/update logic
- Blob artifact service
- roadmap retrieval logic
- authorization
- DTOs
- TypeScript types
- Zod schemas
- Prisma relations

Search for all references to:

```text
hoursPerWeek
weeklyLearningHours
```

Keep `weeklyLearningHours` as a Profile field and remove `hoursPerWeek` as a roadmap-form input.

---

# 20. Duration Handling

Do not reintroduce a manual weekly-hours input.

For personalized roadmaps, use Profile weekly hours for realistic curriculum generation.

For GlobalRoadmaps, do not personalize duration around an individual user's Profile.

Use the existing generic roadmap estimation strategy. If milestone estimates are generated, ensure they are internally consistent with the generic roadmap's stored duration.

---

# 21. Database Migration

Create a Prisma migration for `global_roadmaps`.

Verify:

- separate physical table
- creator foreign key
- `SetNull` behavior
- unique normalized role + experience constraint
- relevant indexes
- required/optional fields
- no conflict with `roadmaps`

Do not modify or delete existing personalized Roadmap data.

---

# 22. Tests

Test at minimum:

### Personalized request

Verify:

```text
Profile loaded
Profile.weeklyLearningHours included in RoadmapProfileContext
weeklyLearningHours reaches personalized prompt
no hoursPerWeek form input exists
Roadmap created
```

### Generic request

Verify:

```text
Profile data is not sent to LLM
GlobalRoadmap lookup occurs
```

### Existing generic roadmap

Verify:

```text
matching normalizedRole + experienceLevel
→ no Gemini call
→ no Trigger.dev generation
→ no new Blob
→ no duplicate GlobalRoadmap
→ existing GlobalRoadmap reused
```

### Missing generic roadmap

Verify:

```text
lookup miss
→ generation
→ validation
→ Dagre
→ Blob
→ GlobalRoadmap
```

### Different role

Verify different normalized roles do not reuse each other's roadmaps.

### Different experience

Verify different experience levels do not reuse each other's roadmaps.

### Concurrent generation

Simulate simultaneous identical generic requests and verify the database constraint prevents duplicate GlobalRoadmaps and the application handles the conflict safely.

### Creator deletion

Verify the GlobalRoadmap remains after deleting its creator and `createdByUserId` becomes null.

### Creator privacy

Verify `createdByUserId` is absent from frontend/client-facing DTOs.

### Authentication

Authenticated users can read GlobalRoadmaps; unauthenticated users cannot.

### Progress isolation

Verify User A's GlobalRoadmap progress does not appear for User B.

### Immutability

Verify ordinary users cannot modify shared curriculum data.

### Regression

Verify:

- personalized roadmap generation
- generic roadmap generation
- Job tracking
- Trigger.dev
- polling
- Blob upload
- DAG validation
- Dagre
- React Flow rendering
- roadmap activity
- exports
- existing roadmap retrieval

continue to work.

---

# 23. Codebase Verification

Search the repository for:

```text
hoursPerWeek
Roadmap
GlobalRoadmap
roadmap-actions
roadmap-generation
RoadmapPromptService
RoadmapProfileContext
Job
artifactId
artifactType
blobUrl
roadmap activity
```

Identify every affected route, Server Action, API handler, service, hook, component, schema, type, and test.

Do not leave stale code paths that assume every roadmap is stored in `Roadmap`.

---

# 24. Acceptance Criteria

- [ ] `GlobalRoadmap` exists as a separate Prisma model/table.
- [ ] It does not map to `roadmaps`.
- [ ] Generic roadmaps are stored only in `GlobalRoadmap`.
- [ ] Personalized roadmaps remain in `Roadmap`.
- [ ] Creator data is stored backend-side only.
- [ ] `createdByUserId` uses `SetNull`.
- [ ] Creator data is not exposed to frontend DTOs.
- [ ] GlobalRoadmaps are accessible to authenticated users.
- [ ] GlobalRoadmaps are reusable.
- [ ] Global identity is normalized role + experience level.
- [ ] Duplicate global roadmaps are prevented.
- [ ] Existing GlobalRoadmaps are checked before LLM generation.
- [ ] Matching GlobalRoadmaps do not trigger Gemini/Trigger.dev generation.
- [ ] Generic generation does not use Profile data.
- [ ] `hoursPerWeek` is completely removed from roadmap generation UI/request handling.
- [ ] `Profile.weeklyLearningHours` remains available.
- [ ] `Profile.weeklyLearningHours` reaches personalized RoadmapProfileContext.
- [ ] Personalized prompt uses weekly learning hours through profile context.
- [ ] Generic prompt receives no Profile context.
- [ ] GlobalRoadmaps are treated as immutable curriculum artifacts.
- [ ] User progress is separate from GlobalRoadmap content.
- [ ] User A's progress cannot affect User B.
- [ ] Blob reuse works.
- [ ] Job integration works.
- [ ] Existing DAG validation works.
- [ ] Existing Dagre layout works.
- [ ] Existing Roadmap Viewer works.
- [ ] Type checking passes.
- [ ] Lint passes.
- [ ] Relevant tests pass.
- [ ] Production build passes.

# Final Architecture

```text
                         ROADMAP REQUEST
                               │
                    Personalization choice
                         /            \\
                       YES             NO
                        │               │
                        ▼               ▼
              Load User Profile     Normalize Role
                        │           + Experience
                        ▼               │
             RoadmapProfileContext     ▼
                        │        GlobalRoadmap Lookup
                        │            /       \\
                        ▼         Found      Missing
                       LLM           │           │
                        │         reuse         LLM
                        ▼                       │
                    Roadmap                Validate
                                                │
                                               Dagre
                                                │
                                               Blob
                                                │
                                          GlobalRoadmap

Shared GlobalRoadmap
        │
        ├── User A → separate progress/activity
        ├── User B → separate progress/activity
        └── User C → separate progress/activity
```

## Core principle

```text
Roadmap
= personalized curriculum

GlobalRoadmap
= shared immutable generic curriculum

User progress
= always user-specific
```

The implementation should optimize generic roadmap generation through **deduplication and reuse**, while keeping shared curriculum, user progress, and creator provenance clearly separated.
