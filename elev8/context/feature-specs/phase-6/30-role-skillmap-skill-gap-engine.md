# Phase 6.4 — RoleSkillMap & Deterministic Skill Gap Engine

## Objective

Build the deterministic career-skill intelligence layer that maps a user's target role and career level to expected skills, then compares those requirements against the user's Profile.

This phase creates the foundation required by the Recommendation Engine in Phase 6.5.

The pipeline is:

```text
Profile
  │
  ├── targetRole
  ├── careerExperienceLevel
  ├── currentStatus
  └── skills[]
          │
          ▼
     RoleSkillMap
          │
          ▼
  Skill Gap Engine
          │
          ├── Missing Skills
          ├── Underqualified Skills
          ├── Matched Skills
          └── Gap Severity
```

The Skill Gap Engine must be deterministic.

Do NOT use an LLM to determine whether a skill is required or whether the user's proficiency satisfies a requirement.

---

# 1. Architectural Principle

The system should separate:

```text
What does this role require?
```

from:

```text
What does this user currently have?
```

Therefore:

```text
RoleSkillMap
        +
ProfileSkill[]
        ↓
Skill Gap Engine
```

The LLM from Phase 6.3 may consume the resulting gap analysis, but it should not replace this deterministic computation.

---

# 2. Responsibilities

Phase 6.4 owns:

- RoleSkillMap data model
- Role/skill requirement data
- Experience-level requirements
- Skill proficiency comparison
- Skill normalization
- Missing skill detection
- Underqualified skill detection
- Matched skill detection
- Gap severity
- Gap summary
- Role lookup
- Seed data for initial supported roles

Phase 6.4 does NOT own:

- Career Assessment
- Recommendation ranking
- Recommendation persistence
- Recommendation UI
- Recommendation cooldowns
- ModuleActivity
- RecommendationSet

---

# 3. RoleSkillMap

Create a first-class representation of role requirements.

Conceptually:

```text
RoleSkillMap
│
├── targetRole
│
└── requiredSkills[]
       │
       ├── skillName
       ├── minimumProficiency
       ├── importance
       └── estimatedLearningHours
```

Example:

```text
Full Stack Developer
│
├── JavaScript       → INTERMEDIATE
├── React             → INTERMEDIATE
├── Node.js           → INTERMEDIATE
├── SQL               → BASIC
├── Git               → BASIC
└── System Design     → BASIC
```

---

# 4. Experience-Level Dimension

Role requirements should account for the user's target career level.

At minimum support:

```text
ENTRY
JUNIOR
MID
SENIOR
LEAD
```

A role may therefore have different requirements:

```text
Software Engineer / ENTRY
```

versus:

```text
Software Engineer / SENIOR
```

Do not assume the same skill thresholds apply to every career level.

---

# 5. Recommended Data Model

Use normalized relational data rather than storing the complete role map as an opaque JSON blob.

Recommended conceptual structure:

```prisma
model RoleSkillProfile {
  id                    String                @id @default(cuid())
  role                  String
  normalizedRole        String
  experienceLevel       CareerExperienceLevel
  createdAt             DateTime              @default(now())
  updatedAt             DateTime              @updatedAt

  skills                RoleSkillRequirement[]

  @@unique([normalizedRole, experienceLevel])
  @@index([normalizedRole])
}

model RoleSkillRequirement {
  id                  String              @id @default(cuid())
  roleSkillProfileId  String
  name                String
  normalizedName      String
  minimumProficiency  SkillProficiency
  importance          SkillImportance
  estimatedHours      Int?

  roleSkillProfile    RoleSkillProfile    @relation(
    fields: [roleSkillProfileId],
    references: [id],
    onDelete: Cascade
  )

  @@unique([roleSkillProfileId, normalizedName])
  @@index([roleSkillProfileId])
}
```

Adapt this to the project's existing Prisma conventions.

Do not blindly copy the schema.

---

# 6. Skill Importance

Create:

```text
SkillImportance
```

with:

```text
CORE
IMPORTANT
SUPPORTING
```

Meaning:

### CORE

The skill is fundamental to the role.

Missing a CORE skill should have a stronger effect on gap severity.

### IMPORTANT

The skill is highly useful but not necessarily fundamental.

### SUPPORTING

The skill provides additional value but should have a smaller impact on severity.

---

# 7. Why Importance Is Required

A simple count:

```text
missingSkills / requiredSkills
```

treats all skills equally.

That is undesirable.

Example:

```text
Software Engineer

Data Structures → CORE
Docker         → SUPPORTING
```

Missing Data Structures should matter more than missing Docker.

Therefore the gap engine should use weighted requirements.

---

# 8. Requirement Weight

Recommended mapping:

```text
CORE       = 3
IMPORTANT  = 2
SUPPORTING = 1
```

This mapping should be centralized.

Do not scatter numeric values throughout the codebase.

---

# 9. Estimated Learning Hours

Each RoleSkillRequirement may optionally contain:

```text
estimatedHours
```

Example:

```text
Docker → 20
System Design → 60
```

This is not the time required to become an expert.

It represents an approximate amount of structured learning/practice needed to reach the defined minimum proficiency.

This field will later help the Recommendation Engine respect:

```text
weeklyLearningHours
```

Do not use it to generate recommendations in Phase 6.4.

---

# 10. Role Normalization

Role matching must not depend on capitalization.

Examples:

```text
Full Stack Developer
full stack developer
FULL STACK DEVELOPER
```

should resolve to:

```text
full-stack-developer
```

Use a centralized normalization utility.

The exact slug strategy should follow the existing application's conventions.

---

# 11. Role Alias Support

The engine should support common role aliases without making the LLM responsible for role matching.

Example:

```text
Full Stack Developer
Full-Stack Developer
Full Stack Engineer
```

may map to the same canonical role where appropriate.

Recommended structure:

```text
RoleAlias
├── alias
├── normalizedAlias
└── roleSkillProfileId
```

If this creates unnecessary complexity for the MVP, use a static alias map in the role catalog.

The canonical role remains the source of truth.

---

# 12. Skill Normalization

Skill comparison must be case-insensitive and normalization-aware.

Examples:

```text
JavaScript
javascript
JS
```

may need to map to:

```text
JavaScript
```

where the alias is known.

Do not rely on simple lowercase conversion for every skill.

Use a controlled skill alias/canonicalization map.

---

# 13. Canonical Skill Names

The RoleSkillMap should use canonical display names.

Examples:

```text
JavaScript
TypeScript
React
Node.js
Python
SQL
Docker
Git
```

User-entered Profile skills should be normalized against these canonical names when possible.

Unknown skills should not be silently discarded.

---

# 14. Unknown Skill Handling

If a user's Profile contains:

```text
SomeNewFramework
```

and the Skill catalog does not recognize it:

- Preserve it in Profile.
- Do not treat it as a required-role match.
- Do not delete it.
- Do not automatically classify it as irrelevant.

The gap engine may return it as:

```text
unmatchedUserSkills
```

if useful for diagnostics.

The Recommendation Engine does not need to display all unmatched skills.

---

# 15. Proficiency Ordering

Use the Profile proficiency levels:

```text
BEGINNER
BASIC
INTERMEDIATE
ADVANCED
EXPERT
```

Map them internally:

```text
BEGINNER      = 1
BASIC         = 2
INTERMEDIATE  = 3
ADVANCED      = 4
EXPERT        = 5
```

Centralize this mapping.

Do not store these numeric values in Profile.

---

# 16. Proficiency Comparison

For a requirement:

```text
React → INTERMEDIATE
```

and user skill:

```text
React → ADVANCED
```

the skill is:

```text
MATCHED
```

For:

```text
React → BEGINNER
```

the skill is:

```text
UNDERQUALIFIED
```

For no user skill:

```text
React → missing
```

the skill is:

```text
MISSING
```

---

# 17. Gap Categories

The Skill Gap Engine should produce:

```text
MATCHED
UNDERQUALIFIED
MISSING
```

Optionally:

```text
UNMATCHED_USER_SKILL
```

for user skills not present in the role requirements.

---

# 18. Gap Result Structure

Recommended output:

```json
{
  "targetRole": "Full Stack Developer",
  "experienceLevel": "ENTRY",
  "matchedSkills": [
    {
      "name": "JavaScript",
      "userProficiency": "INTERMEDIATE",
      "requiredProficiency": "INTERMEDIATE"
    }
  ],
  "underqualifiedSkills": [
    {
      "name": "Node.js",
      "userProficiency": "BEGINNER",
      "requiredProficiency": "INTERMEDIATE",
      "importance": "CORE"
    }
  ],
  "missingSkills": [
    {
      "name": "Docker",
      "requiredProficiency": "BASIC",
      "importance": "SUPPORTING"
    }
  ],
  "severity": 0.32,
  "estimatedLearningHours": 40
}
```

The exact TypeScript type should be defined centrally.

---

# 19. Gap Severity

Calculate a normalized value:

```text
0.0 → no meaningful gap
1.0 → very large gap
```

Use weighted requirements.

Recommended conceptual formula:

```text
severity =
weightedDeficit /
totalRequirementWeight
```

where:

```text
MATCHED        → 0 deficit
UNDERQUALIFIED → proportional deficit
MISSING        → full deficit
```

The exact calculation must be deterministic and documented in code.

---

# 20. Proficiency Deficit

For an underqualified skill:

```text
required = 4
user = 2
```

the deficit is:

```text
(4 - 2) / 4
```

For a missing skill:

```text
required = 4
user = 0
```

the deficit is:

```text
1.0
```

Multiply the deficit by the requirement importance weight.

---

# 21. Weighted Severity Example

Suppose:

```text
JavaScript → CORE → matched
Node.js     → CORE → beginner, required intermediate
Docker      → SUPPORTING → missing
```

The result should reflect that:

```text
Node.js
```

is more significant than:

```text
Docker
```

because it is a CORE requirement.

Do not allow a large number of minor SUPPORTING skills to completely dominate a small number of CORE deficiencies.

---

# 22. Gap Severity Boundaries

Ensure:

```text
0 <= severity <= 1
```

Always clamp the result.

Example:

```ts
Math.max(0, Math.min(1, severity))
```

---

# 23. No Target Role

If:

```text
profile.targetRole === null
```

the engine must not fabricate a role.

Return a structured result such as:

```json
{
  "targetRole": null,
  "experienceLevel": "ENTRY",
  "severity": 0,
  "status": "NO_TARGET_ROLE",
  "matchedSkills": [],
  "underqualifiedSkills": [],
  "missingSkills": []
}
```

This is especially important for:

```text
EXPLORE_CAREERS
```

---

# 24. Unsupported Role

If the target role exists but no RoleSkillProfile exists:

```text
status = ROLE_NOT_SUPPORTED
```

Do not return a fabricated skill gap.

Example:

```json
{
  "targetRole": "Unknown Role",
  "experienceLevel": "ENTRY",
  "severity": 0,
  "status": "ROLE_NOT_SUPPORTED"
}
```

The Recommendation Engine can later use this state to provide a broader recommendation.

---

# 25. Role Catalog

Create a centralized catalog of supported roles.

For the MVP, target approximately:

```text
20–30 roles
```

Prioritize roles aligned with the existing Elev8 modules.

Recommended initial roles include:

```text
Full Stack Developer
Frontend Developer
Backend Developer
Software Engineer
Data Analyst
Data Scientist
Machine Learning Engineer
AI Engineer
DevOps Engineer
Cloud Engineer
Cybersecurity Analyst
UI/UX Designer
Product Manager
Mobile App Developer
QA Engineer
Automation Test Engineer
Database Administrator
Business Analyst
Digital Marketing Specialist
Technical Writer
```

Do not assume these exact roles must all be implemented if the product's existing data uses different naming.

---

# 26. Role Data Should Be Seeded

RoleSkillMap data should be inserted through a deterministic seed process.

Recommended:

```text
prisma/seed
```

or the existing project seed architecture.

Do not manually insert role requirements through production UI.

---

# 27. Seed Data Source

Keep the role definitions in version-controlled source files.

Recommended:

```text
data/role-skill-maps/
```

Example:

```text
full-stack-developer.ts
frontend-developer.ts
backend-developer.ts
data-scientist.ts
...
```

The seed process should read these definitions and populate Prisma.

At runtime, the application should read from the database.

Do not import seed data into runtime recommendation logic.

---

# 28. Runtime Source of Truth

After seeding:

```text
Prisma DB
    ↓
RoleSkillMap
    ↓
Runtime queries
```

The static seed files are development/deployment inputs.

They are not the runtime source of truth.

This mirrors the established pattern used elsewhere in the application.

---

# 29. Role Requirement Example

Example seed definition:

```ts
{
  role: "Full Stack Developer",
  experienceLevel: "ENTRY",
  skills: [
    {
      name: "JavaScript",
      minimumProficiency: "INTERMEDIATE",
      importance: "CORE",
      estimatedHours: 40
    },
    {
      name: "React",
      minimumProficiency: "INTERMEDIATE",
      importance: "CORE",
      estimatedHours: 35
    },
    {
      name: "Node.js",
      minimumProficiency: "BASIC",
      importance: "IMPORTANT",
      estimatedHours: 30
    },
    {
      name: "SQL",
      minimumProficiency: "BASIC",
      importance: "IMPORTANT",
      estimatedHours: 20
    },
    {
      name: "Git",
      minimumProficiency: "BASIC",
      importance: "SUPPORTING",
      estimatedHours: 10
    }
  ]
}
```

These values are illustrative seed values and should be treated as initial product data, not authoritative industry standards.

---

# 30. Do Not Claim Universal Role Requirements

RoleSkillMap is a product knowledge base.

It should not claim:

```text
"Every Full Stack Developer must know X."
```

Instead, treat requirements as:

```text
Elev8's baseline skill model for this target role and level.
```

This keeps the system explainable without pretending that career requirements are universal.

---

# 31. Role Requirement Maintenance

The role map should be easy to update.

Future updates may:

- Add roles
- Add skills
- Remove skills
- Change proficiency thresholds
- Change importance
- Change estimated hours

Do not require application code changes for every runtime lookup.

Seed/update scripts should handle changes.

---

# 32. RoleSkillMap Service

Create a dedicated service:

```text
RoleSkillMapService
├── getRoleSkillProfile()
├── getSupportedRoles()
├── resolveRole()
└── getRequirements()
```

The service should:

- Normalize role names.
- Resolve aliases.
- Query Prisma.
- Return canonical requirements.

Do not put database queries directly into the gap calculation function.

---

# 33. Skill Gap Service

Create:

```text
SkillGapService
```

Conceptually:

```text
SkillGapService
├── calculateGap()
├── compareProficiency()
├── calculateSeverity()
└── summarizeGap()
```

The service receives:

```text
Profile
+
RoleSkillProfile
```

and returns a deterministic result.

---

# 34. Pure Calculation

The core gap calculation should ideally be a pure function.

Example:

```ts
calculateSkillGap({
  userSkills,
  requiredSkills
})
```

It should not:

- query Prisma
- call Gemini
- write to the database
- create recommendations

This makes it easy to unit test.

---

# 35. Query Layer Separation

Preferred architecture:

```text
RoleSkillMapService
        ↓
RoleSkillProfile
        ↓
SkillGapService
        ↓
GapAnalysis
```

Not:

```text
API Route
   ↓
Prisma
   ↓
LLM
   ↓
Recommendation
```

Keep domain logic separate from transport.

---

# 36. Gap Analysis Caching

Do not persist every calculated Skill Gap as a separate database record in this phase.

The calculation is deterministic and relatively inexpensive.

For MVP:

```text
Profile + RoleSkillMap
        ↓
calculate
        ↓
return
```

Later, caching can be added if profiling demonstrates a need.

---

# 37. Skill Gap Persistence

Do NOT create:

```text
SkillGap
```

database records for every calculation.

The Recommendation Engine can calculate the current gap when generating recommendations.

The Career Assessment can also calculate/consume the current gap when required.

This avoids stale duplicated state.

---

# 38. Assessment Integration

Phase 6.3 may consume this engine.

Preferred flow:

```text
Career Assessment
      ↓
RoleSkillMapService
      ↓
SkillGapService
      ↓
GapAnalysis
      ↓
Gemini
```

The LLM interprets the deterministic gap.

It does not reconstruct it.

---

# 39. Recommendation Integration

Phase 6.5 will use:

```text
gapSeverity
missingSkills
underqualifiedSkills
```

as recommendation signals.

For example:

```text
large gap
    ↓
ROADMAP priority increases
```

The actual scoring belongs to Phase 6.5.

---

# 40. Top Skill Gaps

The engine should provide an ordered list of the most significant deficiencies.

Sort primarily by:

```text
importance
+
proficiency deficit
```

Then use:

```text
estimatedHours
```

as a secondary useful attribute.

Return enough data for the Recommendation Engine to cap visible skill recommendations later.

---

# 41. Skill Gap Ordering

Recommended conceptual ordering:

```text
CORE missing
        ↓
CORE underqualified
        ↓
IMPORTANT missing
        ↓
IMPORTANT underqualified
        ↓
SUPPORTING missing
        ↓
SUPPORTING underqualified
```

Within the same category, use the largest proficiency deficit first.

---

# 42. Maximum Skill Gaps Returned

The internal engine may calculate all gaps.

However, provide a helper for top gaps:

```text
getTopSkillGaps(gapAnalysis, limit)
```

The Recommendation Engine can later request:

```text
limit = 3
```

Do not hardcode a UI-specific limit into the calculation engine.

---

# 43. Learning Hours Summary

If requirements include `estimatedHours`, calculate:

```text
estimatedLearningHours
```

for missing and underqualified skills.

Example:

```text
Node.js → 30
Docker → 15

total = 45
```

This is an estimate, not a promise.

---

# 44. Weekly Learning Capacity

Do not use:

```text
weeklyLearningHours
```

inside the gap calculation itself.

The gap describes:

```text
How large is the skill deficiency?
```

Weekly learning hours describe:

```text
How quickly can the user address it?
```

The Recommendation Engine will combine these later.

---

# 45. Experience Level vs Years of Experience

RoleSkillMap should primarily use:

```text
careerExperienceLevel
```

for target requirements.

The Profile also contains:

```text
yearsOfExperience
```

These should remain separate.

Do not automatically convert years of experience into CareerExperienceLevel.

---

# 46. Current Status

`currentStatus` may be passed as context to future recommendation logic, but it should not directly change the fundamental skill comparison in the MVP.

Example:

```text
STUDENT
vs
JOB_SEEKER
```

should not cause the same skill to have different numeric proficiency values.

Use:

```text
role
+
target career level
```

for core skill requirements.

---

# 47. Contradictory Profile Data

The gap engine should not attempt to resolve contradictory career context.

Example:

```text
currentStatus = EMPLOYED
primaryGoal = LAND_A_JOB
```

The engine can still calculate a skill gap.

Do not reinterpret the user's status or goal.

Later Recommendation Engine logic may produce:

```text
PROFILE_CLARIFICATION
```

when ambiguity materially affects recommendations.

---

# 48. Exploration Mode

If:

```text
primaryGoal = EXPLORE_CAREERS
targetRole = null
```

return:

```text
NO_TARGET_ROLE
```

Do not calculate role-specific gap severity.

Later Recommendation Engine logic may use education, skills, desired skills, and other context for exploration recommendations.

---

# 49. Unsupported Experience Level

All supported Profile enum values should have corresponding RoleSkillProfiles where possible.

If a role exists but the requested experience level does not:

```text
ROLE_LEVEL_NOT_SUPPORTED
```

Do not silently use another level.

For example:

```text
Senior Data Scientist
```

should not silently fall back to:

```text
Entry Data Scientist
```

unless explicitly configured as a product rule.

---

# 50. Fallback Role Resolution

If aliases resolve to a canonical role:

```text
"Full Stack Engineer"
        ↓
"Full Stack Developer"
```

use the canonical role.

If no canonical role exists:

```text
ROLE_NOT_SUPPORTED
```

Do not invoke an LLM merely to guess the closest supported role.

---

# 51. API

Expose the gap engine only if an application feature needs direct access.

Recommended optional endpoint:

```text
GET /api/profile/skill-gap
```

Behavior:

```text
Authenticate
    ↓
Get authenticated user's Profile
    ↓
Resolve target role
    ↓
Get RoleSkillProfile
    ↓
Calculate gap
    ↓
Return result
```

If the only consumers are server-side services, prefer not exposing an unnecessary public API.

---

# 52. Recommended Internal API

Prefer:

```ts
const gap = await skillGapService.calculateForProfile(profile);
```

rather than making one internal HTTP request from another server-side module.

Use direct service calls inside the backend.

---

# 53. Error States

Define clear internal states:

```text
NO_TARGET_ROLE
ROLE_NOT_SUPPORTED
ROLE_LEVEL_NOT_SUPPORTED
SUCCESS
```

Do not treat all of these as generic server errors.

Example:

```text
NO_TARGET_ROLE
```

is a valid user state.

---

# 54. Security

RoleSkillMap data is not user-private.

Profile skill data is user-private.

When calculating a gap:

```text
authenticatedUser
        ↓
their Profile
        ↓
RoleSkillMap
```

Do not accept arbitrary `profileId` from the client for private endpoints.

---

# 55. Performance

The calculation should be fast.

Avoid:

- LLM calls
- Trigger.dev
- multiple sequential DB calls
- unnecessary HTTP requests

Recommended:

```text
Get Profile + skills
        ↓
Get RoleSkillProfile + requirements
        ↓
Pure calculation
```

Use efficient Prisma queries.

---

# 56. Trigger.dev

Do NOT use Trigger.dev for Skill Gap calculation.

It is:

- deterministic
- CPU-light
- fast
- request-safe

Keep it synchronous.

---

# 57. Testing — Role Resolution

- [ ] Canonical role resolves.
- [ ] Case differences resolve.
- [ ] Known aliases resolve.
- [ ] Unsupported role returns `ROLE_NOT_SUPPORTED`.
- [ ] Unsupported level returns `ROLE_LEVEL_NOT_SUPPORTED`.
- [ ] No target role returns `NO_TARGET_ROLE`.

---

# 58. Testing — Proficiency

Test:

```text
required BEGINNER
user BEGINNER
```

→ MATCHED

```text
required INTERMEDIATE
user BEGINNER
```

→ UNDERQUALIFIED

```text
required ADVANCED
user EXPERT
```

→ MATCHED

```text
required EXPERT
user missing
```

→ MISSING

---

# 59. Testing — Severity

- [ ] No gaps produces severity `0`.
- [ ] Complete mismatch produces severity close to `1`.
- [ ] Severity never falls below `0`.
- [ ] Severity never exceeds `1`.
- [ ] CORE requirements influence severity more than SUPPORTING requirements.
- [ ] Underqualification is less severe than complete absence of the same requirement.
- [ ] Results are deterministic.

---

# 60. Testing — Skill Normalization

- [ ] `JavaScript` matches `javascript`.
- [ ] Known aliases match canonical skills.
- [ ] Duplicate Profile skills are prevented.
- [ ] Unknown skills remain preserved.
- [ ] Canonical display names remain stable.

---

# 61. Testing — Integration

- [ ] Career Assessment can consume GapAnalysis.
- [ ] Recommendation Engine can later consume GapAnalysis.
- [ ] Profile updates are reflected in newly calculated gaps.
- [ ] No stale SkillGap records need to be manually synchronized.
- [ ] No LLM is required.
- [ ] No Trigger.dev job is required.

---

# 62. Acceptance Criteria

Phase 6.4 is complete when:

- [ ] RoleSkillMap data model exists.
- [ ] RoleSkillRequirement data model exists.
- [ ] Experience-level requirements are supported.
- [ ] Skill importance is supported.
- [ ] Estimated learning hours are supported.
- [ ] Role normalization works.
- [ ] Role aliases work where configured.
- [ ] Skill normalization works.
- [ ] Proficiency comparison works.
- [ ] Missing skills are detected.
- [ ] Underqualified skills are detected.
- [ ] Matched skills are detected.
- [ ] Weighted gap severity is calculated.
- [ ] Gap severity is normalized between 0 and 1.
- [ ] Top skill gaps can be retrieved.
- [ ] No-target-role state is handled.
- [ ] Unsupported roles are handled.
- [ ] Unsupported career levels are handled.
- [ ] Initial role data is seeded.
- [ ] Runtime reads RoleSkillMap from Prisma.
- [ ] Runtime does not import static seed files.
- [ ] Skill gap calculation is deterministic.
- [ ] No LLM is used for gap calculation.
- [ ] No Trigger.dev job is used.
- [ ] No recommendation is generated.
- [ ] TypeScript passes.
- [ ] Lint passes.
- [ ] Production build succeeds.
- [ ] Tests pass.

---

# 63. Out of Scope

Do NOT implement:

- Career Assessment UI
- Career Assessment LLM calls
- Recommendation Engine
- Recommendation ranking
- RecommendationSet
- Recommendation persistence
- Recommendation cooldowns
- Recommendation diversity
- Maintenance mode
- ModuleActivity
- Roadmap → Interview recommendation
- Resume Score → Resume Build recommendation
- LLM role classification
- LLM skill-gap calculation
- Automated external labor-market research

---

# Final Architecture

```text
                         Profile
                            │
                            │
                            ▼
                  Role Resolution Service
                            │
                            ▼
                     RoleSkillMap
                            │
                     Required Skills
                            │
                            ▼
                    Skill Gap Service
                            │
             ┌──────────────┼──────────────┐
             ▼              ▼              ▼
          Matched      Underqualified    Missing
             │              │              │
             └──────────────┼──────────────┘
                            ▼
                     Gap Severity
                            │
               ┌────────────┴────────────┐
               ▼                         ▼
        Career Assessment       Recommendation Engine
        (Phase 6.3)             (Phase 6.5)
```

## Implementation Principles

1. **RoleSkillMap is the deterministic source of role requirements.**
2. **Skill Gap Engine is deterministic and must not use an LLM.**
3. **Role requirements vary by target career level.**
4. **Skill proficiency comparisons use the canonical five-level hierarchy.**
5. **Skill importance prevents minor gaps from overwhelming core deficiencies.**
6. **Gap severity is normalized between 0 and 1.**
7. **No target role is a valid state, not an error.**
8. **Unsupported roles are handled explicitly rather than guessed.**
9. **Unknown user skills are preserved.**
10. **Role and skill normalization is centralized.**
11. **Static role data is seed input; Prisma is the runtime source of truth.**
12. **Skill gaps are calculated dynamically rather than persisted as redundant state.**
13. **Weekly learning capacity is not part of gap severity.**
14. **Profile current status does not alter technical proficiency requirements in the MVP.**
15. **The Career Assessment interprets gap results; it does not reconstruct them.**
16. **The Recommendation Engine will consume gap signals but owns recommendation decisions.**
