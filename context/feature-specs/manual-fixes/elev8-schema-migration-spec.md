# Elev8 Schema Migration & Database Cleanup Specification

## Objective

Update the Prisma schema to match the latest Elev8 architecture and
remove all existing database rows.

This is a **development/database-reset operation**. Do not preserve
existing application data.

---

# 1. Database Cleanup

Delete **all rows from every application table** in the database
before/after applying the schema changes, according to the project's
migration/reset workflow.

Requirements:

- Remove all existing records from every table.
- Respect foreign-key constraints.
- Do not delete the database itself unless the project's existing
  development workflow explicitly requires it.
- Do not leave orphaned records.
- Do not delete Prisma migration history merely to clear application
  data.
- Verify that all application tables contain zero rows after the
  reset.
- Do not seed old/test data unless explicitly requested.

Because foreign keys exist throughout the schema, use a safe
dependency-aware deletion strategy or Prisma's development reset
mechanism where appropriate.

---

# 2. User Schema

Update `User` to reflect the current model names and relationships.

Use:

```prisma
model User {
  id        String   @id @default(cuid())
  clerkId   String   @unique
  email     String?

  profile            Profile?
  careerAssessments  CareerAssessment[]
  roadmaps           Roadmap[]
  resumeScores       ResumeScore[]
  resumeBuilds       ResumeBuild[]
  interviewTemplates InterviewTemplate[]
  interviewSessions  InterviewSession[]
  notifications      Notification[]
  jobs               Job[]
  moduleActivities   ModuleActivity[]

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([clerkId])
  @@map("users")
}
```

Remove obsolete User relations such as:

- `resumes Resume[]`
- `builderResumes BuilderResume[]`
- `interviews Interview[]`

unless those models are still used elsewhere in the actual schema. The
current architecture uses `ResumeScore`, `ResumeBuild`,
`InterviewTemplate`, and `InterviewSession`.

Do not add Recommendation/Progress relations back to `User`.

---

# 3. Profile

Use the current Profile structure:

```prisma
model Profile {
  id     String @id @default(cuid())
  userId String @unique
  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)

  // Basic Information
  name        String?
  age         Int?
  country     String?
  phoneNumber String?

  // Current Situation
  currentStatus     CareerStatus
  currentRole       String?
  yearsOfExperience Int?

  // Education
  highestQualification String?
  fieldOfStudy         String?

  // Career Goals
  primaryGoal       String?
  targetRole        String?
  targetCompanyType String?

  // Learning Preferences
  weeklyLearningHours Int?

  // Skills
  skills        ProfileSkill[]
  desiredSkills ProfileDesiredSkill[]

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([currentStatus])
  @@index([targetRole])
  @@index([country])
  @@map("profiles")
}
```

model ProfileSkill {
id String @id @default(cuid())
profileId String
profile Profile @relation(fields: [profileId], references: [id], onDelete: Cascade)

name String
normalizedName String
proficiency SkillProficiency

@@unique([profileId, normalizedName])
@@index([profileId])
@@map("profile_skills")
}

model ProfileDesiredSkill {
id String @id @default(cuid())
profileId String
profile Profile @relation(fields: [profileId], references: [id], onDelete: Cascade)

name String
normalizedName String

@@unique([profileId, normalizedName])
@@index([profileId])
@@map("profile_desired_skills")
}

Do not restore deleted fields such as:

- `currentCompany`
- `institution`
- `graduationYear`
- `goalDescription`
- `targetIndustry`
- `careerXPpLevel`

---

# 4. CareerAssessment

Keep the current structure:

```prisma
model CareerAssessment {
  id     String @id @default(cuid())
  userId String
  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)

  profileVersion Int

  readinessScore     Int?
  strengths          Json?
  gaps               Json?
  suggestedFocusArea Json?
  narrative          String?

  inputSnapshot Json?

  model  String?
  status CareerAssessmentStatus @default(PROCESSING)

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([userId])
  @@index([userId, profileVersion])
  @@index([status])
  @@index([createdAt])
  @@map("career_assessments")
}
```

---

# 5. ModuleActivity

Keep this as a unified activity/history table.

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
```

`score` must not exist in this model.

Use module-specific tables as the source of truth for scores.

---

# 6. Job

Keep the current Job model:

```prisma
model Job {
  id           String    @id @default(cuid())
  userId       String
  user         User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  type         JobType
  status       JobStatus @default(QUEUED)
  progress     Int       @default(0)
  step         String?
  triggerRunId String?
  artifactId   String?
  artifactType String?
  error        String?
  startedAt    DateTime?
  completedAt  DateTime?

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([userId])
  @@index([status])
  @@index([createdAt])
  @@map("jobs")
}
```

---

# 7. Notification

Keep the current Notification model unchanged:

```prisma
model Notification {
  id     String @id @default(cuid())
  userId String
  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)

  title  String
  body   String?
  status NotificationStatus @default(UNREAD)
  readAt DateTime?

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([userId])
  @@index([status])
  @@index([createdAt])
  @@map("notifications")
}
```

---

# 8. Role Skill Profiles

Keep both models:

```prisma
model RoleSkillProfile {
  id              String                 @id @default(cuid())
  role            String
  normalizedRole  String
  experienceLevel CareerExperienceLevel

  skills RoleSkillRequirement[]

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@unique([normalizedRole, experienceLevel])
  @@index([normalizedRole])
  @@map("role_skill_profiles")
}

model RoleSkillRequirement {
  id                 String           @id @default(cuid())
  roleSkillProfileId String
  roleSkillProfile   RoleSkillProfile @relation(fields: [roleSkillProfileId], references: [id], onDelete: Cascade)

  name               String
  normalizedName     String
  minimumProficiency SkillProficiency
  importance         SkillImportance
  estimatedHours     Int?

  @@unique([roleSkillProfileId, normalizedName])
  @@index([roleSkillProfileId])
  @@map("role_skill_requirements")
}
```

---

# 9. Roadmap

Correct the invalid nullable Boolean syntax from:

```prisma
personalized (Boolean)?
```

to:

```prisma
personalized Boolean?
```

Use:

```prisma
model Roadmap {
  id                String        @id @default(cuid())
  userId            String
  user              User          @relation(fields: [userId], references: [id], onDelete: Cascade)

  title             String
  description       String?
  targetRole        String?
  experienceLevel   CareerLevel?
  estimatedDuration String?
  status            RoadmapStatus @default(NOT_STARTED)
  blobUrl           String?

  personalized    Boolean?
  profileSnapshot Json?

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([userId])
  @@index([status])
  @@index([createdAt])
  @@map("roadmaps")
}
```

---

# 10. ResumeScore

Use the current ResumeScore architecture:

```prisma
model ResumeScore {
  id     String @id @default(cuid())
  userId String
  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)

  role     String
  roleDesc String?
  expLevel CareerExperienceLevel

  ovrScore Int?
  atsScore Int?

  artifactBlobUrl String?

  personalized   Boolean?
  profileSnapshot Json?

  status ResumeScoreStatus @default(PROCESSING)

  createdAt DateTime  @default(now())
  deletedAt DateTime?

  @@index([userId])
  @@index([status])
  @@index([createdAt])
  @@map("resume_scores")
}
```

Do not restore `originalPdfBlobUrl`.

---

# 11. ResumeBuild

Use:

```prisma
model ResumeBuild {
  id     String @id @default(cuid())
  userId String
  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)

  title           String
  template        ResumeBuilderTemplate
  artifactBlobUrl String?
  status          ResumeBuildStatus @default(DRAFT)

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([userId])
  @@index([status])
  @@index([createdAt])
  @@map("resume_builds")
}
```

Do not restore `targetRole` or `version`.

---

# 12. InterviewTemplate

`InterviewTemplate` represents the reusable interview definition.

It supports both:

- predefined Elev8-owned templates
- user-owned AI-generated templates

Use:

```prisma
model InterviewTemplate {
  id                String                  @id @default(cuid())
  userId            String?
  user              User?                   @relation(fields: [userId], references: [id], onDelete: Cascade)

  type              InterviewTemplateType
  role              String
  experienceLevel   CareerExperienceLevel
  interviewType     String
  questionCount     Int
  estimatedDuration String?

  personalized   Boolean?
  profileSnapshot Json?

  templateBlobUrl String

  status InterviewTemplateStatus @default(ACTIVE)

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  interviews InterviewSession[]

  @@index([userId])
  @@index([type])
  @@index([status])
  @@map("interview_templates")
}
```

Ownership rules:

- `PREDEFINED` template → `userId = null`
- `AI_GENERATED` template → `userId = generating user's ID`

AI-generated templates must only be accessible to their owning user.

---

# 13. InterviewSession

The session contains the user's actual interview attempt and
intentionally stores a historical snapshot of the template
configuration.

Use:

```prisma
model InterviewSession {
  id         String            @id @default(cuid())
  userId     String
  user       User              @relation(fields: [userId], references: [id], onDelete: Cascade)

  templateId String
  template   InterviewTemplate @relation(fields: [templateId], references: [id])

  // Historical snapshot
  role              String
  experienceLevel   CareerExperienceLevel
  interviewType     String
  questionCount     Int
  estimatedDuration String?

  blobUrl String?

  overallScore    Int?
  durationSeconds Int?
  assessment      Json?

  personalized   Boolean @default(false)
  profileSnapshot Json?

  status InterviewStatus @default(READY)

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([userId])
  @@index([templateId])
  @@index([status])
  @@index([createdAt])
  @@map("interviews")
}
```

The duplicated fields are intentional.

When a session is created, copy the template configuration into the
session. Existing sessions must not change if the template is later
edited.

`durationSeconds` represents cumulative time spent across attempts. If
the user exits and later resumes, elapsed time must be accumulated
rather than overwritten.

---

# 14. Recommendation and Progress Models

The following models are **not required now**:

- `Recommendation`
- `RecommendationSet`
- `Progress`

Do **not delete these models from the Prisma schema**.

However, remove all active wiring/connections between these models and
the rest of the application.

This includes:

- User relations to these models
- Module/service imports
- API routes that create/update/read them
- Background jobs that populate them
- Progress calculation/update services
- Recommendation generation services
- Dashboard queries using them
- Frontend data fetching and mutations
- Hooks and server actions dedicated to them
- Any automatic writes triggered by other modules

Do not delete the model definitions merely because they are currently
unused.

If Prisma relation fields to these models are required to compile the
existing schema, remove them only if doing so does not break required
active functionality. The objective is to leave the models dormant and
unwired.

---

# 15. Important Architecture Rules

## Source of truth

Do not duplicate module-specific results into `ModuleActivity`.

Examples:

```text
InterviewSession.overallScore → source of truth
ResumeScore.ovrScore         → source of truth
ResumeScore.atsScore         → source of truth
Roadmap.status               → source of truth
```

`ModuleActivity` only records module activity and completion state.

## Historical snapshots

The following session data is intentionally duplicated from
`InterviewTemplate`:

```text
role
experienceLevel
interviewType
questionCount
estimatedDuration
```

Do not synchronize old sessions when templates change.

## Profile snapshots

For personalized AI-generated resources, preserve the exact profile
context used during generation:

```text
personalized
profileSnapshot
```

The snapshot should not automatically change when the user's Profile
changes.

## Predefined vs AI-generated interview templates

Do not create separate session models merely because the interview
template was AI-generated.

Both use:

```text
InterviewTemplate → InterviewSession
```

The difference is template ownership/type.

---

# 16. Migration and Verification

After updating the schema:

1.  Validate the Prisma schema.
2.  Generate the Prisma client.
3.  Create/apply the appropriate development migration.
4.  Reset/delete all application rows.
5.  Verify foreign-key relationships.
6.  Verify no obsolete User relation names remain.
7.  Search the codebase for references to:
    - `Recommendation`
    - `RecommendationSet`
    - `Progress`
    - `resumes`
    - `builderResumes`
    - old `interviews` relations
8.  Remove obsolete backend/frontend wiring.
9.  Verify TypeScript compilation.
10. Verify Prisma migration status.
11. Verify the database contains zero application records after reset.

Do not silently rename or delete unrelated models/fields that are not
covered by this specification.
