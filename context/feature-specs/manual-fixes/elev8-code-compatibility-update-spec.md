# Elev8 Backend & Application Compatibility Update Specification

## Objective

Update the entire Elev8 codebase so that it is fully compatible with the newly updated Prisma schemas and enums.

The database schema has changed substantially. The agent must **not only update Prisma usage**, but also trace all affected backend routes, services, server actions, API requests, frontend requests, hooks, components, background jobs, and database operations.

The final application must compile, start, and behave correctly across the affected modules.

---

# 1. Primary Task

Update all application code to match the current Prisma schema and enum definitions.

The agent must:

1. Inspect the current Prisma schema.
2. Inspect the entire codebase before making changes.
3. Identify every usage of renamed, removed, added, or structurally changed fields/models/enums.
4. Update backend code.
5. Update frontend/server requests.
6. Update API request/response types.
7. Update Prisma queries and mutations.
8. Update validation schemas.
9. Update background jobs/workflows.
10. Update module-specific business logic.
11. Remove obsolete references.
12. Run comprehensive verification and test scenarios.

Do not make superficial search-and-replace changes without understanding how each affected field is used.

---

# 2. Updated Data Model Assumptions

The application now follows these major architectural decisions.

## User

The main user relations are:

```text
User
├── Profile
├── CareerAssessment[]
├── Roadmap[]
├── ResumeScore[]
├── ResumeBuild[]
├── InterviewTemplate[]
├── InterviewSession[]
├── Notification[]
├── Job[]
└── ModuleActivity[]
```

Do not continue using obsolete relations such as:

```text
User.resumes
User.builderResumes
User.interviews
```

unless the actual final schema explicitly contains them.

---

# 3. Profile

Profile now contains:

```text
name
age
country
phoneNumber

currentStatus
currentRole
yearsOfExperience

highestQualification
fieldOfStudy

primaryGoal
targetRole
targetCompanyType

weeklyLearningHours
```

Skills are now relational:

```text
Profile
├── ProfileSkill[]
└── ProfileDesiredSkill[]
```

Do not use:

```text
Profile.skills
Profile.desiredSkills
```

as JSON fields.

Instead use:

```text
ProfileSkill
ProfileDesiredSkill
```

### ProfileSkill

```text
name
normalizedName
proficiency
```

### ProfileDesiredSkill

```text
name
normalizedName
```

The application must preserve the distinction:

```text
name
→ UI/display value

normalizedName
→ backend matching/uniqueness/skill-gap logic
```

---

# 4. Career Assessment

Career assessments now contain:

```text
profileVersion
readinessScore
strengths
gaps
suggestedFocusArea
narrative
inputSnapshot
model
status
```

Removed fields must no longer be referenced:

```text
promptVersion
processingDuration
```

The application must preserve the `inputSnapshot` and `profileVersion` behavior.

---

# 5. Roadmap

Roadmap supports:

```text
title
description
targetRole
experienceLevel
estimatedDuration
status
blobUrl
personalized
profileSnapshot
```

The application must correctly handle:

```text
personalized = true
profileSnapshot = populated
```

and:

```text
personalized = false
profileSnapshot = null
```

Correct any invalid Prisma syntax or outdated field names.

---

# 6. Resume Score

Use `ResumeScore` rather than the old resume-score naming/structure.

Fields include:

```text
role
roleDesc
expLevel
ovrScore
atsScore
artifactBlobUrl
personalized
profileSnapshot
status
createdAt
deletedAt
```

The following must not be referenced:

```text
originalPdfBlobUrl
```

Resume score remains the source of truth for resume evaluation scores.

---

# 7. Resume Build

Use:

```text
ResumeBuild
```

with:

```text
title
template
artifactBlobUrl
status
createdAt
updatedAt
```

Do not use:

```text
targetRole
version
```

from the previous BuilderResume structure.

Update all frontend and backend code that still expects those fields.

---

# 8. Interview Architecture

The current architecture separates:

```text
InterviewTemplate
        ↓
InterviewSession
```

## InterviewTemplate

A template contains:

```text
id
userId?
type
role
experienceLevel
interviewType
questionCount
estimatedDuration
personalized?
profileSnapshot?
templateBlobUrl
status
```

Template type:

```text
PREDEFINED
AI_GENERATED
```

Ownership:

```text
PREDEFINED
→ userId = null
→ Elev8-owned
→ available to users

AI_GENERATED
→ userId = generating user
→ private to that user
```

Authorization must enforce this ownership rule.

## InterviewSession

The session contains:

```text
id
userId
templateId

role
experienceLevel
interviewType
questionCount
estimatedDuration

blobUrl

overallScore
durationSeconds
assessment

personalized
profileSnapshot

status

createdAt
updatedAt
```

The following fields are intentionally duplicated from the template:

```text
role
experienceLevel
interviewType
questionCount
estimatedDuration
```

These are **historical snapshots**.

When creating a session:

```text
InterviewTemplate
       ↓
copy configuration
       ↓
InterviewSession
```

Once a session is created, changes to the template must not alter the session's historical configuration.

---

# 9. Interview Session Duration

`durationSeconds` represents cumulative time spent on an interview.

Example:

```text
Attempt 1:
420 seconds
user exits

Attempt 2:
300 seconds
user completes

Final:
durationSeconds = 720
```

Do not overwrite the previous duration when a user resumes.

Verify:

- Start timer
- Pause/exit
- Resume
- Complete
- Accumulate total duration

---

# 10. Personalized AI Interviews

Personalized interviews use:

```text
personalized
profileSnapshot
```

When the user agrees to personalization:

```text
User Profile
+
User Interview Inputs
        ↓
Personalized prompt
        ↓
AI-generated template
```

Store the exact profile data used at generation time in:

```text
profileSnapshot
```

Do not dynamically read the current Profile later when displaying historical generated interviews.

When personalization is declined:

```text
personalized = false
profileSnapshot = null
```

---

# 11. ModuleActivity

`ModuleActivity` is now an activity/history layer.

It contains:

```text
userId
module
completionStatus
metadata
createdAt
updatedAt
```

There is no `score` field.

Do not attempt to store interview or resume scores in ModuleActivity.

Scores remain in:

```text
InterviewSession.overallScore
ResumeScore.ovrScore
ResumeScore.atsScore
```

Module-specific tables remain the source of truth.

---

# 12. Enum Compatibility

Update all code to use the new enums.

Important renamed/changed enums include:

```text
CareerStatus
PrimaryGoal
SkillProficiency
CareerExperienceLevel
TargetCompanyType
CareerLevel
RoadmapStatus

ResumeScoreStatus
ResumeBuildStatus
ResumeBuilderTemplate

InterviewStatus
InterviewType
InterviewTemplateType
InterviewTemplateStatus

CareerAssessmentStatus
SkillImportance
NotificationStatus
JobStatus
JobType
ModuleType
ModuleCompletionStatus
```

Remove active code references to obsolete enums:

```text
CurrentStatus
InterviewDifficulty
InterviewCategory
ResumeStatus
BuilderResumeStatus
BuilderResumeTemplate
```

If recommendation enums/models remain in Prisma but are currently inactive, do not re-enable their application wiring.

---

# 13. Backend Route Audit

This is a mandatory task.

Find and inspect every backend route related to:

```text
/api/profile
/api/career-assessment
/api/roadmap
/api/resume
/api/resume-score
/api/resume-builder
/api/interview
/api/interviews
/api/jobs
/api/notifications
/api/module-activity
```

Also inspect any equivalent routes using different naming conventions.

For every route verify:

### Request

- Request body fields match the updated schema.
- Removed fields are not accepted unless intentionally supported for backward compatibility.
- Enum values are valid.
- Required/optional fields match Prisma.
- Validation schemas match the new model.
- Authentication is enforced.

### Database operation

Verify:

```text
create
findUnique
findFirst
findMany
update
delete
upsert
```

operations use the correct model and field names.

### Response

Verify API responses do not expose obsolete fields or assume obsolete relationships.

---

# 14. Backend Request/Response Audit

Search the entire project for:

```text
role
experienceLevel
interviewType
questionCount
estimatedDuration
targetRole
targetCompanyType
currentStatus
skills
desiredSkills
score
status
templateId
userId
```

Do not blindly modify every occurrence.

For each occurrence determine:

1. Which module uses it?
2. Which schema owns it?
3. Whether it is input, output, derived data, or a historical snapshot.
4. Whether the field has been renamed.
5. Whether it has moved to another table.

---

# 15. Frontend Compatibility Audit

Inspect:

- Pages
- Components
- Hooks
- Server actions
- API clients
- Forms
- TypeScript interfaces
- Zod schemas
- React Query/SWR queries
- Dashboard cards
- Detail pages
- Loading/error states

Particularly verify:

### Profile

Profile forms must use:

```text
currentStatus
currentRole
yearsOfExperience
highestQualification
fieldOfStudy
primaryGoal
targetRole
targetCompanyType
weeklyLearningHours
```

Skills must be handled through the new relational skill structure.

### Interview cards

Interview cards should be able to display:

```text
role
experienceLevel
interviewType
questionCount
estimatedDuration
overallScore
createdAt
```

These values should come from the historical `InterviewSession` snapshot where appropriate.

### Interview detail page

The detail page must correctly load:

```text
assessment
overallScore
durationSeconds
questions/answers
historical configuration
```

---

# 16. Prisma Query Audit

Search for outdated queries such as:

```ts
prisma.resume
prisma.builderResume
prisma.interview
```

and determine whether they should now use:

```ts
prisma.resumeScore
prisma.resumeBuild
prisma.interviewSession
prisma.interviewTemplate
```

Do not assume the old model names map one-to-one without checking the intended functionality.

---

# 17. Recommendation and Progress Isolation

The following models remain in the database schema but are currently inactive:

```text
Recommendation
RecommendationSet
Progress
```

Do not delete them.

However, remove application-level wiring:

```text
Recommendation generation
Recommendation queries
Recommendation API routes
Recommendation hooks
Progress calculation services
Progress update calls
Progress dashboard queries
Automatic recommendation triggers
```

Do not allow other modules to accidentally write to these tables.

Search for all references and disable/remove only the active wiring.

---

# 18. Profile Snapshot Testing

Test both scenarios.

## Personalized

```text
Profile complete
        ↓
User chooses "Use my profile"
        ↓
personalized = true
profileSnapshot != null
        ↓
LLM receives profile snapshot + interview inputs
```

## Generic

```text
Profile complete
        ↓
User declines personalization
        ↓
personalized = false
profileSnapshot = null
        ↓
LLM receives interview inputs only
```

Also test users without completed profiles.

---

# 19. Interview Template Testing

Test:

### Predefined template

```text
type = PREDEFINED
userId = null
```

Verify:

- Any authorized user can access active predefined templates.
- User cannot modify Elev8-owned templates.
- Session creation copies the template configuration.

### AI-generated template

```text
type = AI_GENERATED
userId = currentUser.id
```

Verify:

- Only the owner can view/use it.
- Another user cannot access it by changing the template ID.
- Generated questions remain associated with the correct user.
- Profile snapshot is preserved.

---

# 20. Interview Session Test Cases

Test at minimum:

### Case 1 — Start

```text
Template exists
→ create session
→ configuration snapshot copied
→ status = READY/IN_PROGRESS
```

### Case 2 — Complete

```text
Answer all questions
→ submit
→ assessment
→ overallScore
→ status = COMPLETED
```

### Case 3 — Abandon

```text
Start
→ answer partially
→ exit
→ status = ABANDONED
```

### Case 4 — Resume

```text
Start
→ spend time
→ exit
→ resume
→ continue
→ complete
```

Verify cumulative `durationSeconds`.

### Case 5 — Template changes

```text
Create session using 5-question template
→ modify template to 10 questions
→ inspect old session
```

The old session must still show:

```text
5 questions
```

---

# 21. Resume Test Cases

Test:

### Resume score

```text
Upload/provide resume
→ evaluate
→ ResumeScore created
→ ovrScore / atsScore stored
```

Verify `originalPdfBlobUrl` is not used.

### Resume builder

```text
Create ResumeBuild
→ edit
→ save
→ artifactBlobUrl updated
→ updatedAt changes
```

Verify obsolete `targetRole` and `version` are not required.

---

# 22. Career Assessment Test Cases

Test:

```text
Profile
+
Assessment inputs
        ↓
CareerAssessment
```

Verify:

- `profileVersion` is stored.
- `inputSnapshot` is stored.
- LLM model is recorded.
- Result fields are populated.
- Processing state transitions correctly.

Test:

```text
PROCESSING
→ COMPLETED
```

and:

```text
PROCESSING
→ FAILED
```

---

# 23. Roadmap Test Cases

Test:

- Create roadmap.
- Personalized roadmap.
- Generic roadmap.
- Profile snapshot creation.
- Roadmap status transitions.
- Blob URL persistence.
- Existing roadmap remains historically consistent.

---

# 24. ModuleActivity Test Cases

Test each module:

```text
ROADMAP
RESUME_SCORE
RESUME_BUILD
INTERVIEW_PRACTICE
CAREER_ASSESSMENT
```

Verify:

```text
STARTED
COMPLETED
ABANDONED
```

are correctly written.

Verify `score` is never expected in `ModuleActivity`.

Verify metadata follows the project's common metadata structure.

---

# 25. Authentication & Authorization

For every user-owned resource, test:

```text
User A creates resource
        ↓
User A can access it
        ↓
User B attempts access
        ↓
Access denied
```

This is especially important for:

```text
Profile
CareerAssessment
Roadmap
ResumeScore
ResumeBuild
AI-generated InterviewTemplate
InterviewSession
ModuleActivity
Jobs
Notifications
```

AI-generated `InterviewTemplate` ownership must be explicitly enforced.

Do not rely only on the frontend hiding another user's resource.

---

# 26. Error Scenarios

Test:

- Missing authentication
- Invalid user ID
- Invalid template ID
- Template not found
- Template belongs to another user
- Invalid enum
- Missing required field
- Invalid profile
- Failed LLM generation
- Failed LLM assessment
- Blob unavailable
- Database failure
- Duplicate skill
- Duplicate normalized skill
- Resume evaluation failure
- Interview session resumed after completion
- Attempt to modify completed session

The application should return controlled errors rather than crashing.

---

# 27. Migration Safety

Before applying the new schema:

1. Back up anything that must be preserved if this is not a disposable development database.
2. Validate Prisma schema.
3. Generate Prisma client.
4. Apply migration.
5. Run application tests.
6. Verify database constraints.
7. Verify relations.
8. Verify enum values.
9. Verify no old columns are being accessed.

If the database reset is part of the development migration, all existing rows may be deleted as specified by the database-reset task.

---

# 28. Build & Runtime Verification

Run the project's relevant commands, such as:

```bash
npx prisma validate
npx prisma generate
npm run lint
npm run typecheck
npm run build
npm test
```

Use the project's actual package scripts rather than assuming these exact commands exist.

Fix all schema-related TypeScript errors.

Do not suppress errors with:

```text
any
@ts-ignore
@ts-expect-error
```

unless there is a documented and justified reason.

---

# 29. Final Regression Checklist

Before considering the task complete, verify:

- [ ] Prisma schema validates.
- [ ] Prisma client generates successfully.
- [ ] Application builds successfully.
- [ ] No obsolete Prisma model names remain in active code.
- [ ] No obsolete enum names remain in active code.
- [ ] Profile skill operations use `ProfileSkill`.
- [ ] Desired skill operations use `ProfileDesiredSkill`.
- [ ] Career assessment routes work.
- [ ] Roadmap routes work.
- [ ] Resume score routes work.
- [ ] Resume builder routes work.
- [ ] Interview template routes work.
- [ ] Interview session routes work.
- [ ] AI-generated templates are private to their owners.
- [ ] Interview historical snapshots work.
- [ ] Interview duration resumes cumulatively.
- [ ] ModuleActivity works for all active modules.
- [ ] Recommendation/Progress wiring is disabled.
- [ ] Authentication works.
- [ ] Authorization works.
- [ ] Invalid requests return controlled errors.
- [ ] Existing frontend cards/pages receive the expected fields.
- [ ] No broken API request/response contracts remain.
- [ ] No unintended database writes to inactive Recommendation/Progress models occur.

---

# 30. Final Requirement

Do not stop after fixing Prisma compilation errors.

The goal is **full application compatibility**.

The agent must trace the complete flow:

```text
Frontend
   ↓
Request
   ↓
API Route / Server Action
   ↓
Validation
   ↓
Service
   ↓
Prisma
   ↓
Database
   ↓
Response
   ↓
Frontend
```

for each affected module.

The implementation is complete only when the updated schema, enums, backend routes, frontend requests, services, workflows, authentication, authorization, and module behavior are all consistent and the regression scenarios pass.
