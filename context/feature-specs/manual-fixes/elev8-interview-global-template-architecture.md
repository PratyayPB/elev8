# Elev8 Interview Module — Global Interview Template Architecture

## Objective

Refactor the Interview module to have two template entities:

1. `InterviewTemplate` — user-owned AI-generated personalized templates.
2. `GlobalInterviewTemplate` — shared, reusable AI-generated generic templates.

Remove predefined/platform-curated interviews completely.

`InterviewSession` remains the entity representing an individual user's attempt.

## 1. Final Architecture

```text
Interview Request
      ↓
Personalization choice
   ┌──┴──┐
  YES    NO
   ↓      ↓
Profile  Generic inputs
   ↓      ↓
InterviewTemplate   GlobalInterviewTemplate lookup
(user-owned)          ↓
                    Found → reuse
                    Missing → LLM → validate → store
             \        /
              \      /
             InterviewSession
                    ↓
          Answers / Assessment
```

A template is a reusable question set. A session is an actual user attempt.

## 2. Remove Predefined Interviews

Remove the predefined interview concept completely.

Remove or replace:

- predefined interview templates
- predefined interview services
- predefined generation paths
- predefined UI/catalog sections
- `PREDEFINED`-specific logic
- obsolete predefined template records if migration/business rules permit

The system should instead use:

```text
GlobalInterviewTemplate = generic AI-generated shared template
InterviewTemplate       = personalized AI-generated user-owned template
```

## 3. Keep InterviewTemplate as User-Owned

Keep the existing `InterviewTemplate` structure and ownership behavior.

Conceptually:

```prisma
model InterviewTemplate {
  id                String                @id @default(cuid())
  userId            String?
  user              User?                 @relation(
    fields: [userId],
    references: [id],
    onDelete: Cascade
  )

  type              InterviewTemplateType
  role              String
  experienceLevel   CareerExperienceLevel
  interviewType     InterviewType
  questionCount     Int
  estimatedDuration String?

  personalized      Boolean?
  profileSnapshot   Json?

  templateBlobUrl   String

  status            InterviewTemplateStatus @default(ACTIVE)

  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt

  interviews        InterviewSession[]

  @@index([userId])
  @@index([type])
  @@index([status])
  @@map("interview_templates")
}
```

Adapt this to the actual current schema.

## 4. Add GlobalInterviewTemplate

Create a separate Prisma model:

```prisma
model GlobalInterviewTemplate {
  id                String                @id @default(cuid())

  createdByUserId   String?
  createdByUser     User?                 @relation(
    fields: [createdByUserId],
    references: [id],
    onDelete: SetNull
  )

  type              InterviewTemplateType
  role              String
  experienceLevel   CareerExperienceLevel
  interviewType     InterviewType
  questionCount     Int
  estimatedDuration String?

  templateBlobUrl   String

  status            InterviewTemplateStatus @default(ACTIVE)

  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt

  @@index([createdByUserId])
  @@index([role])
  @@index([experienceLevel])
  @@index([type])
  @@index([status])
  @@map("global_interview_templates")
}
```

Adapt exact types/enums to the existing project.

## 5. Creator Is Not Owner

Use:

```text
createdByUserId
```

rather than `userId`.

The creator is only provenance.

Do not expose creator information to the frontend or use it for normal access control.

All authenticated users can access GlobalInterviewTemplates.

## 6. Use SetNull

Use:

```prisma
onDelete: SetNull
```

not `Cascade`.

Correct behavior:

```text
User A creates GlobalInterviewTemplate
        ↓
User A is deleted
        ↓
createdByUserId = NULL
        ↓
GlobalInterviewTemplate remains
```

This is required because the template is a shared application resource.

## 7. Separate Physical Tables

Do not map both models to the same physical table.

Use:

```prisma
InterviewTemplate
@@map("interview_templates")
```

and:

```prisma
GlobalInterviewTemplate
@@map("global_interview_templates")
```

## 8. Remove Personalization Data From Global Templates

`GlobalInterviewTemplate` must not contain:

```text
personalized
profileSnapshot
```

Generic generation must not use user Profile data.

## 9. Global Template Reuse

Before making an LLM call for a generic interview:

```text
Generic request
    ↓
Normalize role
    ↓
Lookup GlobalInterviewTemplate
    ↓
Matching template?
   ├── YES → reuse
   └── NO  → LLM → validate → store
```

This reduces:

- LLM/API calls
- Trigger.dev executions
- generation latency
- Blob uploads
- duplicate templates

## 10. Generic Template Identity

For the initial implementation, determine compatibility using:

```text
normalizedRole
+
experienceLevel
+
interviewType
```

Do not rely on raw display role strings.

Consider adding:

```prisma
normalizedRole String
```

and, if these fields fully determine a generic template:

```prisma
@@unique([
  normalizedRole,
  experienceLevel,
  interviewType
])
```

Do not add the unique constraint if other generic inputs materially change the question set.

## 11. Generic Generation Must Not Receive Profile Data

When personalization is disabled, do not send Profile-derived:

```text
currentRole
yearsOfExperience
skills
desiredSkills
primaryGoal
targetCompanyType
weeklyLearningHours
profileSnapshot
```

The generic prompt should use only generic interview-generation inputs.

## 12. Personalized Generation

When personalization is enabled:

```text
User Profile
    ↓
Profile Context Builder
    ↓
Personalized prompt
    ↓
LLM
    ↓
InterviewTemplate
```

The resulting template is user-owned and must not enter `GlobalInterviewTemplate`.

## 13. Critical InterviewSession Relationship Change

The current session has:

```prisma
templateId String
template   InterviewTemplate @relation(...)
```

This can reference only `InterviewTemplate`.

It cannot directly reference both template types.

Do not attempt to make one Prisma foreign key point to two different tables.

Use explicit nullable relationships and a discriminator.

Recommended structure:

```prisma
enum InterviewTemplateSource {
  USER_CREATED
  GLOBAL
}
```

Then conceptually:

```prisma
model InterviewSession {
  id     String @id @default(cuid())

  userId String
  user   User   @relation(...)

  interviewTemplateId String?
  interviewTemplate   InterviewTemplate? @relation(...)

  globalInterviewTemplateId String?
  globalInterviewTemplate   GlobalInterviewTemplate? @relation(...)

  templateSource InterviewTemplateSource

  // existing session fields...
}
```

Rules:

```text
USER_CREATED:
interviewTemplateId required
globalInterviewTemplateId null

GLOBAL:
globalInterviewTemplateId required
interviewTemplateId null
```

Enforce this in the service/application layer and with database constraints where practical.

Never allow both to be populated.

Never allow both to be null.

## 14. Keep Historical Session Snapshots

Keep:

```text
role
experienceLevel
interviewType
questionCount
estimatedDuration
```

in `InterviewSession`.

These are historical snapshots of what the user actually attempted.

Template configuration may change/archive later, while a completed session must remain historically accurate.

## 15. Keep Session Data User-Specific

`InterviewSession` should contain:

```text
answers
blobUrl
overallScore
durationSeconds
assessment
status
```

Do not put these in GlobalInterviewTemplate.

Global template:

```text
questions + criteria + model answers
```

Session:

```text
candidate attempt + answers + grading
```

## 16. Blob Separation

`GlobalInterviewTemplate.templateBlobUrl` should reference a shared immutable artifact containing:

```text
questions
hints
criteria
model answers
question metadata
```

Do not store candidate answers, transcript, scores, or assessment in the global artifact.

When reused, users should reference the same Blob artifact rather than creating a new one.

## 17. Immutability

Treat GlobalInterviewTemplate as an immutable shared question set.

After:

```text
Generate
 ↓
Validate
 ↓
Blob
 ↓
GlobalInterviewTemplate
```

ordinary users must not modify:

- questions
- answers/model answers
- evaluation criteria
- role
- experience level
- interview type

If content needs to change substantially, create a new version rather than silently modifying the shared artifact.

## 18. Access Control

Authenticated users:

```text
Can read GlobalInterviewTemplate
```

Only the owning user:

```text
Can read their InterviewTemplate
```

Backend authorization must enforce this.

Do not rely on frontend filtering.

Do not expose `createdByUserId` in frontend DTOs/client props unless explicitly required in the future.

## 19. Generation Services

Inspect and refactor:

```text
interview-prompts.ts
interview-generation.service.ts
predefined-interview.service.ts
```

Remove/replace `predefined-interview.service.ts`.

Avoid duplicating the complete generation pipeline. Shared validation, Blob handling, and LLM logic should be reused where appropriate while allowing the persistence destination to differ.

## 20. Interview Session Flow

Both template types should feed the same session engine:

```text
GlobalInterviewTemplate ─┐
                         ├→ InterviewSession → Answers → Assessment
InterviewTemplate ───────┘
```

The session engine should operate on the resolved question set and should not need unnecessary knowledge of template origin.

## 21. Assessment and Grading

Assessment must operate on `InterviewSession`.

Flow:

```text
Template
   ↓
Session
   ↓
User answers
   ↓
Assessment / grading
   ↓
overallScore
assessment
```

This applies equally to global and user-created templates.

## 22. Job Integration

If background generation uses `Job`:

Global:

```text
type = INTERVIEW
artifactType = GLOBAL_INTERVIEW_TEMPLATE
artifactId = GlobalInterviewTemplate.id
```

User-created:

```text
type = INTERVIEW
artifactType = INTERVIEW_TEMPLATE
artifactId = InterviewTemplate.id
```

Follow existing project conventions if they differ.

## 23. Do Not Run Jobs When Reusing

If a compatible GlobalInterviewTemplate already exists:

```text
Lookup
 ↓
Found
 ↓
Reuse
```

Do not trigger Gemini or a background generation task just to retrieve it.

If the current frontend contract requires a Job ID, create only the minimum completed tracking record necessary; do not execute unnecessary generation.

## 24. Frontend Changes

Remove all predefined interview UI.

Introduce/retain clear concepts for:

```text
Global Interviews
User-Created Interviews
```

When requesting a generic interview:

```text
Role
Experience Level
Interview Type
```

When requesting a personalized interview:

```text
Role
Experience Level
Interview Type
Use Profile for personalization
```

Do not display creator information.

## 25. Database Migration

Create a Prisma migration that:

- creates `global_interview_templates`
- adds creator provenance
- uses `SetNull`
- adds required indexes
- adds normalized role if implemented
- adds uniqueness if appropriate
- updates InterviewSession relationships
- removes obsolete predefined-template assumptions

Do not delete valid user-created interview data without an explicit migration strategy.

## 26. Tests

Test:

### First global generation

```text
No matching template
→ LLM
→ validation
→ Blob
→ GlobalInterviewTemplate
```

### Global reuse

```text
Same normalized role
Same experience
Same interview type
```

Expected:

```text
No LLM call
No duplicate Blob
No duplicate GlobalInterviewTemplate
```

### Different role

Backend Engineer must not reuse Frontend Engineer.

### Different experience

ENTRY must not reuse SENIOR.

### Different interview type

TECHNICAL must not reuse BEHAVIORAL.

### Personalized generation

Verify:

```text
Profile Context
→ LLM
→ InterviewTemplate
```

and that only the owner can access it.

### Creator deletion

Verify:

```text
Creator deleted
→ createdByUserId = NULL
→ GlobalInterviewTemplate remains
```

### Session relationships

Verify both:

```text
GlobalInterviewTemplate → InterviewSession
```

and:

```text
InterviewTemplate → InterviewSession
```

work correctly.

Verify a session cannot reference both or neither template.

### Assessment

Verify both template sources can create sessions and produce:

```text
answers
assessment
overallScore
```

### Immutability

Verify ordinary users cannot modify GlobalInterviewTemplate content.

## 27. Repository Audit

Search the entire codebase for:

```text
PREDEFINED
InterviewTemplateType
InterviewTemplate
InterviewSession
predefined-interview
interview-prompts
interview-generation
templateId
templateBlobUrl
```

Update every affected:

- route
- Server Action
- API handler
- service
- Trigger.dev task
- Prisma relation
- DTO
- Zod schema
- frontend component
- hook
- access-control check
- test

Do not leave stale predefined-interview assumptions.

## 28. Acceptance Criteria

- [ ] Predefined interviews are completely removed.
- [ ] `InterviewTemplate` represents user-owned AI-generated templates.
- [ ] `GlobalInterviewTemplate` represents shared AI-generated generic templates.
- [ ] Global templates use a separate physical table.
- [ ] Creator is stored as `createdByUserId`.
- [ ] Creator relation uses `SetNull`.
- [ ] Creator information is backend-only.
- [ ] Global templates are accessible to authenticated users.
- [ ] User templates remain private to their owners.
- [ ] Global templates do not contain Profile personalization data.
- [ ] Generic requests search for an existing matching template before calling the LLM.
- [ ] Matching global templates are reused.
- [ ] Generic identity is based on normalized role + experience + interview type.
- [ ] Duplicate global templates are prevented where the unique constraint is valid.
- [ ] InterviewSession supports both template sources.
- [ ] InterviewSession historical snapshots remain intact.
- [ ] Session answers/scores/assessment remain user-specific.
- [ ] Global template artifacts are shared and immutable.
- [ ] Blob artifacts are not duplicated on reuse.
- [ ] Job/artifact handling supports both template types.
- [ ] Existing assessment/grading/session engine continues to work.
- [ ] Frontend contains no predefined-interview assumptions.
- [ ] Type checking passes.
- [ ] Tests pass.
- [ ] Production build passes.

# Final Architecture

```text
                         INTERVIEW REQUEST
                                │
                     Personalization choice
                         /                                    YES              NO
                        │                │
                        ▼                ▼
                 Profile Context    Generic inputs
                        │                │
                        ▼                ▼
                InterviewTemplate   Global lookup
                  (user-owned)       /                                          Found      Missing
                                    │           │
                                    │          LLM
                                    │           │
                                    │    GlobalInterviewTemplate
                                    │           │
                                    └─────┬─────┘
                                          ↓
                                  InterviewSession
                                          ↓
                              Answers / Transcript
                                          ↓
                                Assessment / Grading
                                          ↓
                                  Score / Report
```

Core principle:

```text
InterviewTemplate
= personalized AI-generated template
= user-owned

GlobalInterviewTemplate
= generic AI-generated template
= shared
= creator recorded only for backend provenance

InterviewSession
= individual user attempt
= always user-specific
```
