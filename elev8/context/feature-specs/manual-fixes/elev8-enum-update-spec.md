# Elev8 Enum Update Specification

## Objective

Update the Prisma enums to match the newly finalized Elev8 schemas.

Replace the current enum block in `schema.prisma` with the active enums below, then update all model/code references.

## Active Enums

```prisma
enum CareerStatus {
  STUDENT
  EMPLOYED
  SELF_EMPLOYED
  BUSINESS_OWNER
  FREELANCER
  JOB_SEEKER
  RECENT_GRADUATE
  OTHER
}

enum PrimaryGoal {
  LAND_A_JOB
  GET_AN_INTERNSHIP
  SWITCH_CAREER
  GET_PROMOTED
  LEARN_NEW_SKILLS
  PREPARE_FOR_INTERVIEW
  BUILD_RESUME
  IMPROVE_RESUME
  BECOME_JOB_READY
  EXPLORE_CAREERS
  OTHER
}

enum SkillProficiency {
  BEGINNER
  BASIC
  INTERMEDIATE
  ADVANCED
  EXPERT
}

enum CareerExperienceLevel {
  ENTRY
  JUNIOR
  MID
  SENIOR
  LEAD
}

enum TargetCompanyType {
  STARTUP
  MID_SIZE
  ENTERPRISE
  FAANG
  GOVERNMENT
  NON_PROFIT
  NO_PREFERENCE
}

enum CareerLevel {
  BEGINNER
  INTERMEDIATE
  ADVANCED
}

enum RoadmapStatus {
  NOT_STARTED
  IN_PROGRESS
  COMPLETED
  ARCHIVED
}

enum ResumeScoreStatus {
  PROCESSING
  COMPLETED
  FAILED
  ARCHIVED
}

enum ResumeBuildStatus {
  DRAFT
  READY
  ARCHIVED
}

enum ResumeBuilderTemplate {
  CLASSIC
  MODERN
  MINIMAL
}

enum InterviewStatus {
  READY
  IN_PROGRESS
  COMPLETED
  FAILED
  ABANDONED
}

enum InterviewType {
  BEHAVIORAL
  TECHNICAL
  SYSTEM_DESIGN
  ROLE_SPECIFIC
  GENERAL
}

enum InterviewTemplateType {
  PREDEFINED
  AI_GENERATED
}

enum InterviewTemplateStatus {
  ACTIVE
  ARCHIVED
}

enum CareerAssessmentStatus {
  PROCESSING
  COMPLETED
  FAILED
}

enum SkillImportance {
  CORE
  IMPORTANT
  SUPPORTING
}

enum NotificationStatus {
  UNREAD
  READ
  ARCHIVED
}

enum JobStatus {
  QUEUED
  RUNNING
  COMPLETED
  FAILED
  CANCELLED
}

enum JobType {
  ROADMAP
  CAREER_GUIDANCE
  INTERVIEW
  RESUME_ANALYSIS
  EXPORT
}

enum ModuleType {
  ROADMAP
  RESUME_SCORE
  RESUME_BUILD
  INTERVIEW_PRACTICE
  CAREER_ASSESSMENT
}

enum ModuleCompletionStatus {
  STARTED
  COMPLETED
  ABANDONED
}
```

## Remove Obsolete Enums

Remove:

- `CurrentStatus`
- `InterviewDifficulty`
- `InterviewCategory`
- `ResumeStatus`
- `BuilderResumeStatus`
- `BuilderResumeTemplate`

`InterviewDifficulty` is no longer needed because interview depth is represented through `experienceLevel`.

`InterviewCategory` is replaced by `InterviewType`.

## Recommendation Enums

These may remain because the `Recommendation` and `RecommendationSet` models remain in the Prisma schema:

- `RecommendationSource`
- `RecommendationType`
- `RecommendationStatus`

However, they must remain **unwired** in application logic until the recommendation module is reactivated.

## Important Model Reference Updates

Update model fields to use the new names:

```text
Profile.currentStatus → CareerStatus
ResumeScore.status → ResumeScoreStatus
ResumeBuild.status → ResumeBuildStatus
ResumeBuild.template → ResumeBuilderTemplate
InterviewSession.status → InterviewStatus
InterviewTemplate.type → InterviewTemplateType
InterviewTemplate.status → InterviewTemplateStatus
ModuleActivity.completionStatus → ModuleCompletionStatus
```

For interview type, use:

```prisma
interviewType InterviewType
```

if the application only supports the defined interview types. If custom/free-form interview types are required, retain `String` instead and do not use `InterviewType`.

## Module Activity

`ModuleCompletionStatus` intentionally excludes `NOT_STARTED`.

A `ModuleActivity` record represents an activity that has actually occurred:

```text
STARTED → COMPLETED
       ↘ ABANDONED
```

A module that has never been used should not require a `ModuleActivity` record.

## Implementation Requirements

1. Replace the obsolete enum definitions.
2. Add the new enum definitions.
3. Update every Prisma model reference.
4. Search the entire codebase for obsolete enum names.
5. Update TypeScript imports and enum usages.
6. Run Prisma schema validation.
7. Generate the Prisma client.
8. Apply the appropriate migration.
9. Verify no obsolete enum names remain in active application code.
10. Do not modify unrelated schemas or business logic.
