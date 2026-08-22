# Phase 6.1 — Profile Foundation & Data Model

## Objective

Replace the existing Profile implementation with a new Profile architecture that becomes the central source of user career context for:

- Roadmap Generation
- Resume Scoring
- Resume Building
- Interview Simulation
- Career Assessment
- Recommendation Engine

The existing Profile data/model should be removed and recreated from scratch.

This phase focuses only on the **Profile foundation**.

Do NOT implement:

- Career Assessment
- Recommendation Engine
- RoleSkillMap
- Skill Gap Engine
- Recommendation UI
- Assessment LLM calls
- New cross-module recommendation logic

Those belong to later Phase 6 specifications.

---

# 1. Critical Architectural Principle

The new Profile is the application's primary representation of the user's current career context.

```text
                         Profile
                            │
          ┌─────────────────┼──────────────────┐
          │                 │                  │
          ▼                 ▼                  ▼
      Roadmaps          Resume Module      Interviews
          │                 │                  │
          └─────────────────┼──────────────────┘
                            │
                            ▼
                    Career Assessment
                            │
                            ▼
                  Recommendation Engine
```

Profile data is context, not the source of truth for module artifacts.

For example:

```text
Profile
   │
   └── current skills
          │
          ▼
     Resume creation
          │
          ▼
     Resume Artifact
```

Once a Resume is created, its artifact remains independent from the Profile.

---

# 2. Existing Profile Must Be Removed

The current Profile implementation should NOT be incrementally extended.

The implementation should:

1. Inspect the existing Prisma Profile model.
2. Identify all existing Profile-related code.
3. Identify all existing Profile references.
4. Remove the old Profile schema.
5. Remove obsolete Profile fields/types/services.
6. Create the new Profile schema.
7. Update application references to use the new schema.
8. Apply the new migration/database state.

This is an intentional destructive schema change.

---

# 3. Destructive Migration Requirement

Because the user explicitly chose:

```text
Remove existing profile data
Create new Profile from scratch
```

the implementation may delete existing Profile records.

Do NOT attempt to preserve or migrate old Profile records unless required for referential integrity of unrelated data.

Before deleting the old model, inspect:

- Prisma relations
- API routes
- Server actions
- Hooks
- Components
- Profile forms
- Existing module integrations

No unrelated user data should be deleted.

Only obsolete Profile data/schema should be removed.

---

# 4. New Profile Structure

The new Profile should conceptually follow:

```text
Profile
│
├── Basic
│   ├── name
│   ├── age
│   └── country
│
├── Career Status
│   ├── currentStatus
│   ├── currentRole
│   ├── currentCompany
│   └── yearsOfExperience
│
├── Education
│   ├── highestQualification
│   ├── fieldOfStudy
│   ├── institution
│   └── graduationYear
│
├── Career Goals
│   ├── primaryGoal
│   ├── goalDescription
│   ├── targetRole
│   └── targetIndustry
│
├── Skills
│   ├── skills[]
│   └── desiredSkills[]
│
├── Career Target
│   ├── careerExperienceLevel
│   └── targetCompanyType
│
├── Learning Preferences
│   └── weeklyLearningHours
│
└── Metadata
    ├── profileVersion
    ├── createdAt
    └── updatedAt
```

---

# 5. Prisma Profile Model

Adapt naming to the existing project's Prisma conventions.

Recommended conceptual model:

```prisma
model Profile {
  id                    String   @id @default(cuid())
  userId                String   @unique

  name                  String
  age                   Int
  country               String

  currentStatus         CurrentStatus
  currentRole           String
  currentCompany        String?
  yearsOfExperience     Int      @default(0)

  highestQualification  String
  fieldOfStudy          String
  institution           String
  graduationYear        Int

  primaryGoal           PrimaryGoal
  goalDescription       String?
  targetRole            String?
  targetIndustry        String?

  careerExperienceLevel CareerExperienceLevel
  targetCompanyType     TargetCompanyType

  weeklyLearningHours   Int

  profileVersion        Int      @default(1)

  createdAt             DateTime @default(now())
  updatedAt             DateTime @updatedAt

  user                  User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  skills                ProfileSkill[]
  desiredSkills         ProfileDesiredSkill[]
}
```

Do not copy this schema blindly. Inspect the existing User relation and Prisma conventions first.

---

# 6. User → Profile Relationship

A user should have exactly one Profile.

Conceptually:

```text
User
 │
 └── Profile
```

Use:

```text
userId @unique
```

to enforce one Profile per user.

The authenticated user is the owner of the Profile.

Do not allow a client to create or update a Profile for another user.

---

# 7. Basic Information

Required fields:

```text
name
age
country
```

### Name

String. Validate that it is not empty.

Recommended:

```text
1–100 characters
```

### Age

Integer. Validate that it is within a sensible career-profile range.

Do not accept negative, zero, or unrealistically large values.

The exact limits should be implemented as a shared validation constant.

### Country

String.

Do not hardcode a country list into the Prisma enum.

If the existing application has a standardized country representation, reuse it.

---

# 8. Current Status Enum

Create:

```text
CurrentStatus
```

with exactly:

```text
STUDENT
EMPLOYED
SELF_EMPLOYED
BUSINESS_OWNER
FREELANCER
JOB_SEEKER
RECENT_GRADUATE
OTHER
```

Do not allow arbitrary current-status strings.

---

# 9. Current Career Information

Fields:

```text
currentRole
currentCompany
yearsOfExperience
```

### currentRole

Required.

For students/freshers without a conventional role, the UI may collect an appropriate value such as:

```text
Student
```

Roles should remain flexible.

### currentCompany

Optional.

Do not enforce employment-specific logic too aggressively in this phase.

### yearsOfExperience

Required integer.

For freshers/students:

```text
0
```

Negative values are invalid.

---

# 10. Education

Fields:

```text
highestQualification
fieldOfStudy
institution
graduationYear
```

### highestQualification

Keep extensible.

Examples:

```text
High School
Diploma
Bachelor's Degree
Master's Degree
Doctorate
```

Do not create a restrictive enum unless required by the existing product.

### fieldOfStudy

String.

### institution

String.

### graduationYear

Integer.

For students currently studying, use the expected graduation year.

---

# 11. Primary Goal Enum

Create:

```text
PrimaryGoal
```

with exactly:

```text
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
```

These values should remain aligned with actual Elev8 capabilities.

---

# 12. Goal Description

```text
goalDescription: String?
```

Optional free-text context.

Example:

```text
"I want to transition from frontend development into machine learning."
```

This will later be useful for Career Assessment.

Do not make recommendation logic depend exclusively on this free-text field.

---

# 13. Target Role

```text
targetRole: String?
```

Target Role is optional at the Profile schema level.

This is important because:

```text
EXPLORE_CAREERS
```

does not necessarily have a target role.

Therefore:

```text
primaryGoal = EXPLORE_CAREERS
targetRole = null
```

must be valid.

---

# 14. Target Industry

```text
targetIndustry: String?
```

Keep this flexible.

Examples:

```text
Technology
Finance
Healthcare
Education
Gaming
Automotive
```

It will later provide context for Career Assessment, Recommendations, Roadmap generation, and Resume customization.

---

# 15. Skills

The Profile must support structured skill proficiency.

Do NOT store skills only as:

```text
["JavaScript", "React", "Python"]
```

Use structured records.

Conceptually:

```text
ProfileSkill
├── profileId
├── name
└── proficiency
```

Example:

```json
{
  "name": "JavaScript",
  "proficiency": "INTERMEDIATE"
}
```

---

# 16. Skill Proficiency Enum

Create:

```text
SkillProficiency
```

with exactly:

```text
BEGINNER
BASIC
INTERMEDIATE
ADVANCED
EXPERT
```

The order is semantically meaningful.

The Recommendation Engine will later map these values to:

```text
BEGINNER      = 1
BASIC         = 2
INTERMEDIATE  = 3
ADVANCED      = 4
EXPERT        = 5
```

Do not implement recommendation scoring in this phase.

---

# 17. ProfileSkill

Recommended conceptual model:

```prisma
model ProfileSkill {
  id          String          @id @default(cuid())
  profileId   String
  name        String
  proficiency SkillProficiency

  profile     Profile         @relation(fields: [profileId], references: [id], onDelete: Cascade)

  @@index([profileId])
}
```

Adapt to existing Prisma conventions.

---

# 18. Skill Uniqueness

A user should not have:

```text
JavaScript → BEGINNER
JavaScript → INTERMEDIATE
```

as two separate ProfileSkill records.

Enforce uniqueness per Profile:

```text
(profileId, normalizedSkillName)
```

If keeping a normalized field is unnecessary for the current architecture, implement normalization consistently in the service layer.

---

# 19. Skill Name Normalization

Skill names should be normalized before comparison.

For example:

```text
javascript
JavaScript
JAVASCRIPT
```

should resolve to the same logical skill.

Do not unnecessarily destroy the user's preferred display formatting.

A recommended representation is:

```text
displayName: "JavaScript"
normalizedName: "javascript"
```

Use the simplest approach compatible with the current database architecture.

---

# 20. Desired Skills

Track skills the user wants to acquire or improve.

Example:

```json
["TypeScript", "Docker", "System Design"]
```

Recommended model:

```text
ProfileDesiredSkill
├── id
├── profileId
└── name
```

Do not assign proficiency to desired skills.

They represent aspiration rather than current capability.

---

# 21. Desired Skill Uniqueness

Prevent duplicates within the same Profile.

For example:

```text
Docker
docker
DOCKER
```

should resolve to one desired skill.

Use the same normalization approach as ProfileSkill.

---

# 22. Career Experience Level

Create:

```text
CareerExperienceLevel
```

with:

```text
ENTRY
JUNIOR
MID
SENIOR
LEAD
```

This represents the level the user is targeting.

It is NOT necessarily the same thing as:

```text
yearsOfExperience
```

Do not reject combinations solely because they appear unusual.

---

# 23. Target Company Type

Create:

```text
TargetCompanyType
```

with:

```text
STARTUP
MID_SIZE
ENTERPRISE
FAANG
GOVERNMENT
NON_PROFIT
NO_PREFERENCE
```

This represents the user's target environment.

Do not use this field as a hard recommendation filter in Phase 6.1.

---

# 24. Weekly Learning Hours

```text
weeklyLearningHours: Int
```

Recommended supported values:

```text
5
10
15
20
25
30
40
```

If the UI requires additional values, use shared configuration rather than a Prisma enum.

Do not implement recommendation pacing yet.

---

# 25. Profile Version

Add:

```text
profileVersion: Int
```

Default:

```text
1
```

Whenever meaningful Profile data changes:

```text
profileVersion += 1
```

Example:

```text
Profile v1
   ↓
User changes targetRole
   ↓
Profile v2
```

This enables later stale-assessment and stale-recommendation detection.

---

# 26. What Counts as a Profile Version Change

A version should increase when career-context data changes, including:

```text
currentStatus
currentRole
currentCompany
yearsOfExperience
education
primaryGoal
goalDescription
targetRole
targetIndustry
skills
desiredSkills
careerExperienceLevel
targetCompanyType
weeklyLearningHours
```

Do not increment the version merely because `updatedAt` changes due to an unrelated technical update.

Use a single Profile service/update path to control version increments.

---

# 27. Profile Version Atomicity

Updating Profile data and incrementing `profileVersion` must happen atomically.

Recommended:

```text
Database Transaction
    ├── Update Profile
    ├── Update Skills
    ├── Update Desired Skills
    └── Increment profileVersion
```

Do not allow partial updates that leave Profile data at the wrong version.

---

# 28. Profile API

Implement the basic Profile API following existing project conventions.

Recommended:

```text
GET   /api/profile
POST  /api/profile
PATCH /api/profile
```

If equivalent endpoints already exist, update them instead of creating duplicates.

---

# 29. GET /api/profile

Behavior:

```text
Authenticate user
      ↓
Find Profile by authenticated userId
      ↓
Return Profile
```

Response should contain:

- Basic information
- Career status
- Education
- Goals
- Skills
- Desired skills
- Career targeting
- Learning preferences
- Profile version

Do not expose unrelated database fields.

---

# 30. POST /api/profile

Creates the Profile for the authenticated user.

Requirements:

1. Authenticate.
2. Verify the user does not already have a Profile.
3. Validate the complete payload.
4. Create Profile.
5. Create skills.
6. Create desired skills.
7. Set `profileVersion = 1`.

If a Profile already exists, do not silently overwrite it.

Return an appropriate conflict response.

---

# 31. PATCH /api/profile

Updates the authenticated user's Profile.

Requirements:

1. Authenticate.
2. Retrieve Profile by authenticated user ID.
3. Validate the update.
4. Determine whether career-context data changed.
5. If meaningful data changed, increment `profileVersion`.
6. Update related skills/desired skills atomically.
7. Return the updated Profile.

Do not accept `userId` or `profileVersion` as trusted client-controlled values.

---

# 32. Profile Service

Create/reuse a server-side service responsible for Profile operations.

Conceptually:

```text
ProfileService
├── getProfile()
├── createProfile()
├── updateProfile()
├── updateSkills()
├── updateDesiredSkills()
└── incrementVersion()
```

The service should be the preferred entry point for Profile mutations.

Do not scatter Profile update logic across API routes.

---

# 33. Validation

Use the application's existing validation library/conventions.

If the application uses Zod, create schemas such as:

```text
profileCreateSchema
profileUpdateSchema
profileSkillSchema
profileDesiredSkillSchema
```

Validation must exist on the server.

Client-side validation is only for UX.

---

# 34. Conditional Validation

Do not over-constrain Profile data based on currentStatus.

Examples:

```text
STUDENT
currentCompany = null
yearsOfExperience = 0
```

must be valid.

```text
EMPLOYED
currentCompany = null
```

should not necessarily fail at the database layer.

The Profile is intended to evolve progressively.

---

# 35. Profile Completeness

Do not implement the final recommendation completeness algorithm in this phase.

The Profile service only needs to expose enough structured data for Phase 6.2 to calculate it.

The planned weights are:

```text
primaryGoal             15
currentStatus           15
skills                  15
targetRole              10
targetIndustry          10
education               10
desiredSkills           10
weeklyLearningHours      5
targetCompanyType        5
currentRole              5
```

These weights belong to Phase 6.2, not the Prisma schema.

---

# 36. Profile Completion vs Required Database Fields

Do not confuse:

```text
database-required
```

with:

```text
recommendation-required
```

For example:

```text
targetRole = null
```

is valid at the database level.

It simply means some later recommendation operations cannot perform role-specific gap analysis.

This is especially important for:

```text
EXPLORE_CAREERS
```

---

# 37. Module Compatibility

The new Profile must expose enough information for existing modules.

### Roadmap

Needs:

```text
primaryGoal
targetRole
targetIndustry
skills
desiredSkills
careerExperienceLevel
weeklyLearningHours
```

### Resume

Needs:

```text
name
currentRole
currentCompany
education
skills
targetRole
targetIndustry
```

### Interview

Needs:

```text
targetRole
careerExperienceLevel
yearsOfExperience
skills
```

### Career Assessment

Needs broad Profile context.

### Recommendation Engine

Needs:

```text
currentStatus
primaryGoal
skills
targetRole
targetIndustry
desiredSkills
careerExperienceLevel
targetCompanyType
weeklyLearningHours
education
currentRole
```

---

# 38. Resume Field

Do NOT add a new Profile-owned Resume Blob field.

Existing Resume Builder artifacts remain separate.

If the existing architecture contains a Profile → Resume relation or `currentResumeId`, inspect it and preserve only what is still architecturally valid.

The Resume Builder's canonical content remains its own Resume Artifact.

---

# 39. No Recommendation Logic

Do not add recommendation logic to Profile services.

For example, do NOT implement:

```ts
if (profile.primaryGoal === "LAND_A_JOB") {
  return "RESUME_SCORE";
}
```

The Profile only stores user context.

Recommendation decisions belong to Phase 6.5.

---

# 40. No Assessment Logic

Do not call Gemini or another LLM from:

```text
ProfileService
Profile API
database hooks
```

Career Assessment is a separate module.

---

# 41. No Trigger.dev

Profile CRUD operations should be synchronous.

Do not create Trigger.dev tasks for:

- Profile creation
- Profile update
- Skill update
- Desired skill update

---

# 42. Security

Every Profile operation must derive the user from the authenticated session.

Never trust `userId` from the request body.

Correct:

```text
session.userId
        ↓
Profile lookup
```

Incorrect:

```text
request.body.userId
        ↓
Profile lookup
```

---

# 43. Profile Ownership

The server must enforce:

```text
profile.userId === authenticatedUserId
```

Users must not be able to:

- Read another user's Profile.
- Update another user's Profile.
- Modify another user's skills.
- Modify another user's desired skills.

---

# 44. Delete Profile

Profile deletion is NOT part of the normal MVP UI.

If the application already requires account deletion, the Profile should follow the existing User lifecycle.

Recommended relation:

```text
User
  ↓ onDelete: Cascade
Profile
```

Do not create a public `DELETE /api/profile` endpoint unless the existing account architecture requires it.

---

# 45. Database Indexing

At minimum:

```text
Profile.userId → UNIQUE
ProfileSkill.profileId → INDEX
ProfileDesiredSkill.profileId → INDEX
```

Add indexes only for real query patterns.

---

# 46. Transaction Requirements

Use transactions when modifying:

```text
Profile
+
ProfileSkill[]
+
ProfileDesiredSkill[]
```

For example:

```text
PATCH Profile
      ↓
BEGIN TRANSACTION
      ├── Update Profile
      ├── Replace/update skills
      ├── Replace/update desired skills
      └── Increment profileVersion
      ↓
COMMIT
```

If any operation fails:

```text
ROLLBACK
```

---

# 47. Profile Update Strategy

For the MVP, structured replacement of skill collections is acceptable.

Example:

```text
Incoming skills
      ↓
Validate
      ↓
Replace existing ProfileSkill records
      ↓
Create new records
```

Use this only while skill collection sizes remain small.

---

# 48. Profile Read Response

A suitable response shape is:

```json
{
  "id": "profile_123",
  "name": "User",
  "age": 21,
  "country": "India",

  "currentStatus": "STUDENT",
  "currentRole": "Computer Science Student",
  "currentCompany": null,
  "yearsOfExperience": 0,

  "education": {
    "highestQualification": "Bachelors",
    "fieldOfStudy": "Computer Science",
    "institution": "Example University",
    "graduationYear": 2027
  },

  "careerGoals": {
    "primaryGoal": "LAND_A_JOB",
    "goalDescription": "I want to become a full stack developer.",
    "targetRole": "Full Stack Developer",
    "targetIndustry": "Technology"
  },

  "skills": [
    {
      "name": "JavaScript",
      "proficiency": "INTERMEDIATE"
    }
  ],

  "desiredSkills": ["TypeScript", "Docker"],

  "careerExperienceLevel": "ENTRY",
  "targetCompanyType": "STARTUP",
  "weeklyLearningHours": 10,

  "profileVersion": 1
}
```

Adapt the exact API shape to existing project conventions.

---

# 49. Internal Data vs API Shape

The database does not have to mirror the exact JSON structure.

For example, education may remain flat in Prisma:

```text
highestQualification
fieldOfStudy
institution
graduationYear
```

while the API returns:

```json
"education": {}
```

Choose what fits the existing architecture.

Do not introduce JSON blobs into Prisma simply to mimic the API response.

---

# 50. Testing

## Database

- [ ] Old Profile model/data is removed.
- [ ] New Profile model migrates successfully.
- [ ] One Profile per User is enforced.
- [ ] Skills are related correctly.
- [ ] Desired skills are related correctly.
- [ ] ProfileSkill uniqueness works.
- [ ] ProfileDesiredSkill uniqueness works.

## Creation

- [ ] Authenticated user can create a Profile.
- [ ] Unauthenticated user cannot create one.
- [ ] Duplicate creation is rejected.
- [ ] Initial `profileVersion` is 1.

## Updates

- [ ] Profile fields update correctly.
- [ ] Skills update correctly.
- [ ] Desired skills update correctly.
- [ ] Profile version increments on meaningful changes.
- [ ] Profile version does not increment for irrelevant technical updates.
- [ ] Updates are atomic.

## Validation

- [ ] Invalid enum values are rejected.
- [ ] Invalid age is rejected.
- [ ] Negative experience is rejected.
- [ ] Invalid weekly hours are rejected.
- [ ] Empty required fields are rejected.
- [ ] Optional targetRole works.
- [ ] Optional currentCompany works.

## Security

- [ ] Users can only access their own Profile.
- [ ] Users cannot provide another userId to bypass ownership.
- [ ] Users cannot modify another user's skills.
- [ ] Users cannot modify another user's Profile.

## Compatibility

- [ ] Existing Roadmap code can consume required Profile data.
- [ ] Existing Resume code can consume required Profile data.
- [ ] Existing Interview code can consume required Profile data.
- [ ] Existing Resume Artifacts are not modified by Profile updates.
- [ ] Existing Interview Artifacts are not modified by Profile updates.

---

# 51. Acceptance Criteria

Phase 6.1 is complete when:

- [ ] Existing Profile model/data has been intentionally removed.
- [ ] New Profile schema exists.
- [ ] User → Profile one-to-one relationship works.
- [ ] All required enums exist.
- [ ] Structured skills exist.
- [ ] Structured desired skills exist.
- [ ] Skill proficiency levels work.
- [ ] Career experience level works.
- [ ] Target company type works.
- [ ] Weekly learning hours works.
- [ ] Profile version exists.
- [ ] Profile version increments correctly.
- [ ] Profile CRUD works.
- [ ] Authentication is enforced.
- [ ] Authorization is enforced.
- [ ] Profile mutations are transactional.
- [ ] Server-side validation exists.
- [ ] Existing modules can access the new Profile.
- [ ] No Career Assessment logic has been introduced.
- [ ] No Recommendation Engine logic has been introduced.
- [ ] No RoleSkillMap has been introduced.
- [ ] No Trigger.dev job is introduced.
- [ ] TypeScript passes.
- [ ] Lint passes.
- [ ] Production build succeeds.
- [ ] Tests pass.

---

# 52. Out of Scope

Do NOT implement:

- Profile completion percentage
- Progressive profiling
- Career Assessment
- Gemini/LLM calls
- Assessment prompts
- Assessment scoring
- RoleSkillMap
- Skill gap calculations
- Recommendation candidates
- Recommendation ranking
- Recommendation persistence
- Recommendation UI
- ModuleActivity
- RecommendationSet

These belong to later Phase 6 specifications.

---

# Final Architecture

```text
                         User
                          │
                          │ 1:1
                          ▼
                       Profile
                          │
        ┌─────────────────┼──────────────────┐
        │                 │                  │
        ▼                 ▼                  ▼
   ProfileSkill    DesiredSkill       Career Context
        │                 │                  │
        └─────────────────┼──────────────────┘
                          │
                          ▼
                 Future Profile Consumers
                          │
       ┌──────────────────┼───────────────────┐
       ▼                  ▼                   ▼
    Roadmap             Resume             Interview
       │                  │                   │
       └──────────────────┼───────────────────┘
                          ▼
                 Career Assessment
                          │
                          ▼
               Recommendation Engine
```

## Implementation Principles

1. **The new Profile replaces the existing Profile implementation.**
2. **Existing Profile data may be deleted because this is an intentional reset.**
3. **Profile is the central career-context store for the application.**
4. **Resume, Interview, and Roadmap artifacts remain independent from Profile.**
5. **Skills are structured records with explicit proficiency.**
6. **Desired skills represent goals and do not have proficiency.**
7. **Target Role remains optional to support career exploration.**
8. **Profile versioning enables future stale-assessment and stale-recommendation detection.**
9. **Profile mutations are transactional.**
10. **Authentication and ownership are enforced server-side.**
11. **Profile does not contain recommendation logic.**
12. **Profile does not call an LLM.**
13. **Profile CRUD is synchronous.**
14. **Completeness, assessment, skill-gap analysis, and recommendations are separate layers.**
