# Elev8 Progress Module — MVP Implementation Specification

## Objective

Upgrade the existing Progress module into a reliable:

1. **Activity History Layer** — records meaningful user activity across all five modules.
2. **Current-State Layer** — stores the user's latest progress/state for each module.
3. **Lightweight Recommendation Layer** — deterministically recommends what the user should do next.

The MVP must remain simple.

Do **not** introduce:
- AI-based recommendations
- `CareerJourney`
- graph-based recommendation logic
- machine-learning ranking
- a separate recommendation database
- complex aggregate readiness calculations

The recommendation engine should rely primarily on Progress data, with `Profile.isMandatoryCompleted` used for the mandatory Profile → Career Assessment flow.

---

# 1. Existing Schema

The application currently has:

```prisma
model ModuleActivity {
  id     String @id @default(cuid())
  userId String
  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)

  module           ModuleType
  completionStatus ModuleCompletionStatus
  metadata         Json?

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([userId, module])
  @@index([userId, createdAt])
  @@map("module_activities")
}

model Progress {
  id     String @id @default(cuid())
  userId String @unique

  completedMilestones Int  @default(0)
  totalMilestones     Int  @default(0)
  interviewReadiness  Int?
  resumeReadiness     Int?
  careerReadiness     Int?
  overallProgress     Int?

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([userId])
  @@map("progress")
}
```

The existing `Progress` aggregate fields such as:

```text
completedMilestones
totalMilestones
interviewReadiness
resumeReadiness
careerReadiness
overallProgress
```

should no longer be treated as authoritative sources of truth.

The domain modules remain authoritative for their actual business data.

---

# 2. Target Architecture

Implement:

```text
                         DOMAIN MODULES
                              │
         ┌────────────┬───────┼────────┬────────────┐
         ▼            ▼       ▼        ▼            ▼
    Assessment      Roadmap Interview ResumeScore ResumeBuild
         │            │       │        │            │
         └────────────┴───────┴────────┴────────────┘
                              │
                              ▼
                   ModuleActivityService
                         │          │
                         ▼          ▼
                  ModuleActivity   Progress
                  Activity Ledger  Current State
                         │          │
                         └────┬─────┘
                              ▼
                    RecommendationService
                              │
                              ▼
                       Next Best Action
                              │
                              ▼
                         Progress UI
```

For MVP, reuse the existing `Progress` table as the current-state projection rather than immediately creating a new `ModuleProgressState` table.

However, redesign the `Progress` model so it stores **current module states**, not stale global aggregate numbers.

---

# 3. ModuleActivity: Convert It Into an Activity Ledger

`ModuleActivity` should answer:

> What has the user done?

It should be an append-oriented historical record.

The current `completionStatus` field is insufficient to represent detailed states such as:

```text
Interview:
5/10 questions answered
10/10 answered but not submitted
Evaluation in progress
Completed

Roadmap:
Generated
3/8 milestones completed
8/8 milestones completed

Resume:
Built
Edited
Scored
Score improved
```

Add an event/action identifier.

Recommended conceptual schema:

```prisma
model ModuleActivity {
  id     String @id @default(cuid())
  userId String
  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)

  module           ModuleType
  eventType        ModuleActivityEventType
  completionStatus ModuleCompletionStatus?

  entityId String?
  metadata Json?

  createdAt DateTime @default(now())

  @@index([userId, module, createdAt])
  @@index([userId, entityId, createdAt])
  @@index([userId, eventType, createdAt])
  @@map("module_activities")
}
```

Use the existing naming conventions where appropriate.

`updatedAt` is unnecessary for an append-only event ledger and should be removed unless the existing implementation requires it.

---

# 4. Activity Event Types

Create a centralized enum or constant set.

## Career Assessment

```text
ASSESSMENT_STARTED
ASSESSMENT_INPUT_UPDATED
ASSESSMENT_READY
ASSESSMENT_SUBMITTED
ASSESSMENT_GENERATION_STARTED
ASSESSMENT_GENERATION_STAGE_CHANGED
ASSESSMENT_COMPLETED
ASSESSMENT_GENERATION_FAILED
ASSESSMENT_VIEWED
```

## Roadmap

```text
ROADMAP_STARTED
ROADMAP_GENERATION_STARTED
ROADMAP_GENERATION_STAGE_CHANGED
ROADMAP_GENERATED
ROADMAP_GENERATION_FAILED

MILESTONE_STARTED
MILESTONE_COMPLETED

ROADMAP_COMPLETED
ROADMAP_VIEWED
```

## Interview

```text
INTERVIEW_STARTED
INTERVIEW_QUESTION_ANSWERED
INTERVIEW_ALL_QUESTIONS_ANSWERED
INTERVIEW_SUBMITTED
INTERVIEW_EVALUATION_STARTED
INTERVIEW_COMPLETED
INTERVIEW_FAILED
INTERVIEW_ABANDONED
INTERVIEW_VIEWED
```

## Resume Build

```text
RESUME_BUILD_STARTED
RESUME_UPDATED
RESUME_SECTION_UPDATED
RESUME_BUILD_READY
RESUME_BUILD_COMPLETED
RESUME_TEMPLATE_CHANGED

AI_RESUME_BUILD_REQUESTED
AI_RESUME_BUILD_STARTED
AI_RESUME_BUILD_COMPLETED
AI_RESUME_BUILD_FAILED

RESUME_PDF_GENERATED
RESUME_VIEWED
```

## Resume Score

```text
RESUME_SCORE_STARTED
RESUME_SCORE_COMPLETED
RESUME_SCORE_FAILED
RESUME_SCORE_VIEWED
```

Do not log trivial UI events such as button hover, modal rendering, or mouse movement.

---

# 5. Entity References

`entityId` should identify the actual domain object responsible for the activity.

Examples:

```text
Career Assessment → assessmentId
Roadmap → roadmapId
Milestone → roadmapId or milestone identifier as appropriate
Interview → interviewId
Resume Build → resumeBuildId
Resume Score → resumeScoreId
```

Do not duplicate the full domain object inside `ModuleActivity`.

The activity should contain enough metadata to understand the event while the domain entity remains authoritative.

---

# 6. Activity Metadata

Use `metadata Json` for event-specific details.

Do not create dozens of database columns.

## Interview

For question 5 of 10:

```json
{
  "questionNumber": 5,
  "answeredQuestions": 5,
  "totalQuestions": 10
}
```

For all questions answered:

```json
{
  "answeredQuestions": 10,
  "totalQuestions": 10
}
```

## Roadmap

```json
{
  "milestoneId": "milestone_3",
  "completedMilestones": 3,
  "totalMilestones": 8
}
```

## Roadmap generation

```json
{
  "stage": "BUILDING_SKILL_REQUIREMENTS",
  "stageNumber": 2,
  "totalStages": 4
}
```

## Resume Score

```json
{
  "resumeId": "resume_123",
  "scoreId": "score_123",
  "overallScore": 72,
  "atsScore": 78
}
```

The actual score remains authoritative in the Resume Score domain model.

---

# 7. Progress Table: Make It the Current-State Projection

For MVP, retain the existing `Progress` model instead of creating `ModuleProgressState`.

Replace the old aggregate fields with current module state information.

Recommended conceptual structure:

```prisma
model Progress {
  id     String @id @default(cuid())
  userId String @unique

  careerAssessmentStatus ModuleProgressStatus @default(NOT_STARTED)
  roadmapStatus          ModuleProgressStatus @default(NOT_STARTED)
  interviewStatus        ModuleProgressStatus @default(NOT_STARTED)
  resumeBuildStatus      ModuleProgressStatus @default(NOT_STARTED)
  resumeScoreStatus      ModuleProgressStatus @default(NOT_STARTED)

  careerAssessmentProgress Int @default(0)
  roadmapProgress          Int @default(0)
  interviewProgress        Int @default(0)
  resumeBuildProgress      Int @default(0)
  resumeScoreProgress      Int @default(0)

  careerAssessmentMetadata Json?
  roadmapMetadata          Json?
  interviewMetadata        Json?
  resumeBuildMetadata      Json?
  resumeScoreMetadata      Json?

  lastActivityAt DateTime?

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([userId])
  @@index([lastActivityAt])
  @@map("progress")
}
```

Adapt the exact schema to existing conventions and migrations.

Important:

`Progress` should represent **current state**, not historical activity.

For example:

```json
{
  "interviewStatus": "IN_PROGRESS",
  "interviewProgress": 50,
  "interviewMetadata": {
    "interviewId": "int_123",
    "answeredQuestions": 5,
    "totalQuestions": 10,
    "currentQuestion": 6
  }
}
```

---

# 8. Recommended Module Statuses

Use a shared high-level status enum where possible:

```text
NOT_STARTED
IN_PROGRESS
PROCESSING
READY
COMPLETED
FAILED
ABANDONED
```

Module-specific metadata/status can represent finer details.

For example, Interview:

```text
IN_PROGRESS
```

with:

```json
{
  "answeredQuestions": 5,
  "totalQuestions": 10
}
```

When all questions are answered:

```text
READY
```

with:

```json
{
  "answeredQuestions": 10,
  "totalQuestions": 10,
  "assessmentSubmitted": false
}
```

This avoids creating an enormous universal status enum.

---

# 9. Module State Definitions

## Career Assessment

```text
NOT_STARTED
IN_PROGRESS
READY
PROCESSING
COMPLETED
FAILED
```

`READY` means all required inputs are populated and the assessment can be submitted.

---

## Roadmap

```text
NOT_STARTED
PROCESSING
READY
IN_PROGRESS
COMPLETED
FAILED
```

Metadata:

```json
{
  "roadmapId": "...",
  "completedMilestones": 5,
  "totalMilestones": 8
}
```

---

## Interview

```text
NOT_STARTED
IN_PROGRESS
READY
PROCESSING
COMPLETED
FAILED
ABANDONED
```

Interpretation:

```text
IN_PROGRESS → some questions answered
READY → all questions answered but evaluation not submitted
PROCESSING → evaluation running
COMPLETED → evaluation finished
```

---

## Resume Build

```text
NOT_STARTED
IN_PROGRESS
READY
PROCESSING
COMPLETED
FAILED
```

Use metadata to track completion of required fields/sections.

---

## Resume Score

```text
NOT_STARTED
PROCESSING
COMPLETED
FAILED
```

Store latest score information as projection metadata only.

---

# 10. Central ModuleActivityService

All five modules should write activity through one service:

```text
src/features/progress/services/module-activity.service.ts
```

Conceptual API:

```ts
recordActivity({
  userId,
  module,
  eventType,
  entityId,
  metadata,
})
```

The service should:

1. Validate the event.
2. Insert the `ModuleActivity`.
3. Update the user's `Progress` current-state projection when applicable.
4. Keep the operation idempotent where retries are possible.
5. Avoid directly calculating business metrics owned by other modules.

The service should be reusable from:

- Server actions
- API routes
- Background jobs
- Trigger.dev tasks
- Module services

---

# 11. Idempotency

Prevent duplicate activities from:

- API retries
- double submissions
- Trigger.dev retries
- network retries
- duplicate client requests

For important events, use an idempotency key or deterministic uniqueness strategy.

Examples:

```text
interview_123:question_5:answered
roadmap_123:milestone_3:completed
resume_score_123:completed
```

Do not compromise historical accuracy because of duplicate requests.

---

# 12. RecommendationService

Create:

```text
src/features/progress/services/recommendation.service.ts
```

It should read:

```text
Progress
+
recent ModuleActivity
+
Profile.isMandatoryCompleted
```

It should return a small standardized object.

Example:

```ts
{
  type: "COMPLETE",
  module: "INTERVIEW",
  action: "CONTINUE",
  priority: 90,
  title: "Continue your interview",
  description: "You've answered 5 of 10 questions.",
  targetId: "interview_123"
}
```

Another:

```ts
{
  type: "IMPROVE",
  module: "RESUME_SCORE",
  action: "IMPROVE",
  priority: 85,
  title: "Improve your resume",
  description: "Your latest resume score is 62/100.",
  targetId: "resume_123"
}
```

The frontend should not contain recommendation logic.

---

# 13. Recommendation Types

Only implement three MVP types:

## COMPLETE

Examples:

```text
Complete Profile
Continue Interview
Complete Roadmap Milestone
Complete Resume
Submit Career Assessment
Submit Interview
```

## IMPROVE

Examples:

```text
Improve Resume
Reattempt Resume Score
Reattempt Interview
```

## NEXT_MODULE

Examples:

```text
Career Assessment → Roadmap
Roadmap → Interview
Resume Build → Resume Score
Resume Score → Interview
Interview → Roadmap / Resume improvement
```

---

# 14. Recommendation Priority

Use a simple deterministic priority order:

```text
1. Complete mandatory Profile
2. Finish an in-progress module
3. Submit/evaluate something that is ready
4. Resolve a failed process
5. Improve a low score
6. Complete the next Roadmap milestone
7. Recommend the next connected module
```

Return one primary recommendation.

Optionally return up to two secondary recommendations.

Do not overwhelm the user with all possible actions.

---

# 15. Hardcoded Profile → Career Assessment Rule

This is a mandatory MVP rule.

```text
IF Profile.isMandatoryCompleted === false
THEN
    COMPLETE_PROFILE
```

Once:

```text
Profile.isMandatoryCompleted === true
```

and there is no completed/current Career Assessment:

```text
TAKE_CAREER_ASSESSMENT
```

This rule should have the highest priority.

---

# 16. Cross-Module MVP Rules

Do not create `CareerJourney`.

Use existing module data and target-role/context fields.

Recommended initial rules:

```text
Career Assessment completed
→ Recommend Roadmap

Roadmap generated
→ Recommend completing Roadmap milestones

Roadmap completed
→ Recommend Interview for the same target role

Resume Build completed
→ Recommend Resume Score

Resume Score below configured threshold
→ Recommend improving Resume

Interview completed with low score
→ Recommend Interview reattempt

Interview completed with identified skill gaps
→ Recommend relevant Roadmap/skill work
```

Only recommend a connected module when sufficient context exists.

For example, a Roadmap → Interview recommendation should use the Roadmap's target role.

---

# 17. Interview Multi-Source Context

Extend the Interview generation flow to optionally consume:

```text
Profile
Resume
Roadmap
Job Description / Target Role
```

Users should be able to select available sources.

Example:

```text
Generate Interview

☑ Profile
☑ Resume
☑ Roadmap

Target Role: Backend Engineer
```

The generated interview should retain references to the source entities where applicable:

```text
profileId
resumeId
roadmapId
```

The imported data must remain read-only context.

Do not copy the entire Resume or Roadmap into the Interview as a second source of truth.

---

# 18. Example Recommendation Flow

## Scenario A

```text
Profile = incomplete
```

Recommendation:

```text
Complete Profile
```

---

## Scenario B

```text
Profile = complete
Career Assessment = not started
```

Recommendation:

```text
Take Career Assessment
```

---

## Scenario C

```text
Career Assessment = completed
Roadmap = not started
```

Recommendation:

```text
Create Roadmap
```

---

## Scenario D

```text
Roadmap = 5/8 milestones
```

Recommendation:

```text
Complete Next Roadmap Milestone
```

---

## Scenario E

```text
Roadmap = 8/8 milestones
Interview = not started
```

Recommendation:

```text
Attempt Backend Engineer Interview
```

---

## Scenario F

```text
Interview = 5/10 questions
```

Recommendation:

```text
Continue Interview
```

---

## Scenario G

```text
Interview = 10/10
Evaluation not submitted
```

Recommendation:

```text
Submit Interview
```

---

## Scenario H

```text
Interview Score = 55
```

Recommendation:

```text
Reattempt Interview
```

---

## Scenario I

```text
Resume Build = completed
Resume Score = not started
```

Recommendation:

```text
Score Your Resume
```

---

## Scenario J

```text
Resume Score = 61
```

Recommendation:

```text
Improve Your Resume
```

---

# 19. Stale Result Handling

Use lightweight staleness logic.

Example:

```text
Resume
  ↓
Resume Score = 82
  ↓
User edits Resume
  ↓
RESUME_UPDATED activity
  ↓
Previous score is no longer current
  ↓
Recommend scoring again
```

Do not delete old scores.

The historical score remains available for the timeline and score history.

The recommendation engine should prefer the latest valid result.

The same principle can apply to Career Assessment when important Profile data changes.

---

# 20. Progress Dashboard API

Expose a consolidated response such as:

```ts
{
  modules: {
    careerAssessment: {...},
    roadmap: {...},
    interview: {...},
    resumeBuild: {...},
    resumeScore: {...}
  },

  recentActivities: [...],

  recommendation: {...}
}
```

The frontend should not independently reconstruct module state from raw activity events.

Use `Progress` for current state and `ModuleActivity` for the activity timeline.

---

# 21. Progress UI

Display:

```text
CAREER PROGRESS

Career Assessment
✓ Completed

Roadmap
5 / 8 milestones

Resume
✓ Built
Score: 72

Interview
5 / 10 questions
```

Then:

```text
NEXT STEP

Continue your interview
You've answered 5 of 10 questions.
[Continue Interview]
```

Activity timeline:

```text
Today
10:42  Answered Interview Question 5
10:38  Answered Interview Question 4

Yesterday
18:15  Completed React milestone
17:30  Resume scored — 72/100
```

---

# 22. Aggregate Metrics

Do not recreate the old static aggregate fields:

```text
overallProgress
interviewReadiness
resumeReadiness
careerReadiness
```

unless a future product requirement explicitly needs them.

When the UI needs an aggregate metric, calculate it from authoritative current module state or domain data.

For example:

```text
Roadmap progress = completedMilestones / totalMilestones
Interview progress = answeredQuestions / totalQuestions
```

Do not store duplicated aggregate values that can become stale.

---

# 23. Historical vs Current Data

Maintain a strict distinction:

### `ModuleActivity`

```text
Historical:
What happened?
When did it happen?
Which entity did it concern?
What was the relevant context?
```

### `Progress`

```text
Current:
Where is the user now?
What is the current status?
What is the current progress?
What is the latest relevant entity?
```

### Domain modules

```text
Authoritative:
What is the actual roadmap?
What are the actual milestones?
What is the actual interview score?
What is the actual resume?
What is the actual assessment?
```

---

# 24. Implementation Rules

The agent must:

- Inspect the existing Progress, ModuleActivity, ModuleType and ModuleCompletionStatus definitions before modifying them.
- Reuse existing enums and services where appropriate.
- Avoid creating duplicate progress/activity infrastructure.
- Preserve existing module functionality.
- Make the migration backward-compatible where practical.
- Create database migrations for schema changes.
- Update all existing code that reads/writes the old `Progress` fields.
- Search the entire codebase for references to:
  - `Progress`
  - `ModuleActivity`
  - `completedMilestones`
  - `interviewReadiness`
  - `resumeReadiness`
  - `careerReadiness`
  - `overallProgress`
- Remove or migrate obsolete writes.
- Ensure existing dashboard functionality continues to work.
- Add tests for every state transition and recommendation rule.

---

# 25. Testing Requirements

At minimum, test:

### Activity

```text
Interview question answered
→ activity created

Milestone completed
→ activity created

Resume scored
→ activity created
```

### Current state

```text
Interview 5/10
→ Progress shows 50%

Interview 10/10 but not submitted
→ status READY

Roadmap 5/8
→ Progress shows correct milestone state
```

### Recommendations

```text
Profile incomplete
→ COMPLETE_PROFILE

Profile complete + Assessment absent
→ TAKE_CAREER_ASSESSMENT

Interview 5/10
→ CONTINUE_INTERVIEW

Interview 10/10 + not submitted
→ SUBMIT_INTERVIEW

Low Resume Score
→ IMPROVE_RESUME

Completed Roadmap
→ START_INTERVIEW

Completed Resume Build
→ SCORE_RESUME
```

### Regression

Ensure existing:

- Progress dashboard
- ModuleActivity
- Career Assessment
- Roadmap
- Interview
- Resume Builder
- Resume Score

continue functioning.

---

# 26. Implementation Priority

Implement in this order:

### Phase 1
Refactor/extend `ModuleActivity`.

### Phase 2
Convert `Progress` into the current-state projection.

### Phase 3
Integrate all five modules with `ModuleActivityService`.

### Phase 4
Persist partial states such as:

```text
Interview 5/10
Roadmap 5/8
Resume 70% complete
Assessment ready to submit
```

### Phase 5
Implement `RecommendationService`.

### Phase 6
Add the hardcoded Profile → Career Assessment rule.

### Phase 7
Add cross-module rules.

### Phase 8
Expose recommendations and activity through the Progress API/UI.

### Phase 9
Extend Interview generation to accept Profile + Resume + Roadmap context.

---

# 27. Final MVP Principle

Keep the Progress module simple:

```text
ModuleActivity
    =
"What happened?"

Progress
    =
"Where is the user now?"

RecommendationService
    =
"What should the user do next?"
```

The domain modules remain the authoritative source of their own business data.

The Progress module should **observe and project**, not duplicate the business data.

The recommendation engine should remain deterministic and lightweight, with approximately 10–20 clear rules rather than a sophisticated recommendation system.

This provides enough infrastructure for Elev8's MVP to:

1. Track detailed career activity.
2. Preserve partial/incomplete states.
3. Display a meaningful progress timeline.
4. Identify the user's current position across all five modules.
5. Recommend the next useful action.
6. Connect the five modules through simple deterministic rules.
7. Create a foundation that can later evolve into a more sophisticated recommendation engine without rebuilding the Progress system.
