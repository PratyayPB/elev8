# Elev8 Roadmap — Prompt & Personalization Update

## Objective

Update the Roadmap module so personalization is intentional and deterministic.

Replace:

```text
Profile → dump into prompt → LLM
```

with:

```text
Profile
  ↓
Profile Context Builder
  ↓
Normalized Roadmap Personalization Context
  ↓
LLM
  ↓
Validated roadmap
  ↓
DAG validation
  ↓
Dagre layout
  ↓
Blob + Prisma
```

Do not break the existing Trigger.dev, Prisma, Vercel Blob, DAG validation, Dagre, or roadmap viewer pipeline.

## 1. Profile Context Builder

Create or refactor a dedicated function/service such as:

```ts
buildRoadmapProfileContext(profile)
```

Do not serialize the raw Prisma Profile object.

Build a dedicated context containing only:

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

Exclude `name`, `age`, `phoneCountryCode`, `phoneNumber`, and `isMandatoryCompleted`.

Only include `country` if the roadmap actually uses geographic/job-market context.

## 2. Personalization Rules

Add these rules to `ROADMAP_SYSTEM_PROMPT`:

```text
PERSONALIZATION REQUIREMENTS:
- Treat existing skills as the user's current capability baseline.
- Compare existing skills against the skills required for the target role.
- Prioritize genuine skill gaps.
- Avoid unnecessary beginner-level repetition when proficiency indicates mastery.
- Reinforce partially known skills where appropriate.
- Introduce prerequisites required for downstream topics.
- Use targetRole as the primary destination.
- Use currentRole and currentStatus to understand starting context.
- Use yearsOfExperience to understand practical exposure.
- Use highestQualification and fieldOfStudy to infer relevant academic foundations.
- Use primaryGoal to prioritize roadmap strategy where relevant.
- Use targetCompanyType to adjust depth and expectations when relevant.
- Use weeklyLearningHours to make the roadmap achievable.
```

## 3. Desired Skills

Add:

```text
DESIRED SKILLS:
- Desired skills represent preferences, not authoritative role requirements.
- Include desired skills when relevant to the target role.
- Do not distort the roadmap merely to include every desired skill.
- Role requirements and prerequisites take priority over unrelated desired skills.
```

## 4. Experience-Level Logic

Add:

```text
TARGET-ROLE EXPERIENCE:
- The provided Experience Level describes experience specifically in the target role.
- Use it as the primary signal for technical starting depth.
- Overall professional experience may influence practical context and learning style.
- Overall professional experience must NOT automatically imply technical proficiency in the target role.
```

## 5. Missing Profile Data

Add:

```text
MISSING DATA:
- Profile fields may be null or unavailable.
- Never invent missing user information.
- Do not assume skills, qualifications, experience, goals, or preferences that were not provided.
- When personalization data is unavailable, fall back to target role and target-role experience level.
```

## 6. Realism

Add:

```text
REALISM:
- The roadmap must be achievable within the specified weekly time commitment.
- Prioritize essential skills over exhaustive coverage.
- Do not overload milestones with unrealistic numbers of skills, projects, or resources.
- Estimated hours must be internally consistent.
- Projects and resources must be appropriate for the user's current level.
```

## 7. DAG Semantics

Add:

```text
GRAPH SEMANTICS:
- Every edge must represent a genuine learning prerequisite.
- Do not create edges merely to make the graph connected.
- Avoid unnecessary edges.
- Foundational skills must precede dependent skills.
- Projects should depend on skills they actually require.
- Milestones should represent meaningful learning phases.
- The graph must remain a true Directed Acyclic Graph.
```

## 8. Cross-Structure Consistency

Add:

```text
CONSISTENCY:
- Milestone order must agree with prerequisite relationships.
- Skills referenced in milestones should correspond to relevant graph nodes where appropriate.
- Project difficulty must match required skills.
- Estimated hours must be plausible.
- Do not create references to nonexistent IDs.
```

## 9. Remove `generatedAt` From LLM Responsibility

Remove `generatedAt` from the LLM output requirements.

Set it in application code:

```ts
const generatedAt = new Date();
```

The LLM should generate curriculum content, not application timestamps.

## 10. Remove Deterministic Overall Duration From LLM Responsibility

Do not ask the LLM to independently generate the final overall roadmap duration.

The LLM should provide milestone estimates where required.

The application should calculate:

```text
Total estimated hours
        ÷
Weekly learning hours
        =
Estimated weeks
```

Then derive the human-readable overall duration.

Handle missing/zero weekly hours safely.

## 11. Updated User Prompt

Update `ROADMAP_USER_PROMPT_TEMPLATE` to conceptually follow:

```ts
export const ROADMAP_USER_PROMPT_TEMPLATE = `
Target Role: {role}
Experience Level (in target role): {experienceLevel}
Weekly Time Commitment: {hoursPerWeek} hours/week

Normalized User Profile Context:
{profileContextText}

Use the profile context to personalize the roadmap.

The target-role experience level is the primary signal for technical starting depth.

Use existing skills as the user's baseline:
- avoid unnecessarily repeating mastered fundamentals
- identify meaningful skill gaps
- reinforce partially known skills
- introduce prerequisite skills when necessary

Use desired skills as preferences only when relevant to the target role.

Use weekly time commitment to keep the roadmap realistic and achievable.

If profile information is missing, do not invent it. Fall back to the target
role and target-role experience level.

Generate the complete logical roadmap according to the required JSON schema.
`;
```

Adapt exact fields to the current Zod/JSON schema.

## 12. Recommended System Prompt Structure

Keep the existing JSON/schema requirements, but organize the system prompt into:

```text
ROLE
PERSONALIZATION REQUIREMENTS
TARGET-ROLE EXPERIENCE
MISSING DATA
REALISM
GRAPH SEMANTICS
CONSISTENCY
CRITICAL OUTPUT INSTRUCTIONS
STRUCTURAL REQUIREMENTS
```

Preserve existing requirements for:

- valid JSON
- no Markdown
- no React Flow coordinates
- non-empty IDs
- valid node/edge references
- DAG structure
- complete project/resource objects

## 13. Profile Context Example

The LLM should receive intentionally structured data such as:

```text
Current Status: STUDENT
Current Role: Computer Science Student
Years of Experience: 0

Highest Qualification: BSc Computer Science
Field of Study: Computer Science

Primary Goal: LAND_A_JOB
Target Role: Backend Engineer
Target Company Type: ENTERPRISE

Weekly Learning Hours: 12

Existing Skills:
- Java — INTERMEDIATE
- SQL — BASIC
- Git — INTERMEDIATE

Desired Skills:
- Spring Boot
- Docker
```

Do not dump unrelated Profile fields.

## 14. Application-Side Pipeline

Maintain:

```text
Profile
 ↓
Profile Context Builder
 ↓
RoadmapPromptService
 ↓
Gemini
 ↓
Schema validation
 ↓
Application-side timestamp/duration enrichment
 ↓
RoadmapValidator
 ↓
Dagre
 ↓
RoadmapRenderService
 ↓
RoadmapArtifactService
 ↓
Vercel Blob
 ↓
Prisma Roadmap
```

Do not bypass deterministic application-side validation.

## 15. Testing

Add tests covering:

### Existing skills

If the user already has advanced proficiency in a skill, verify that the roadmap does not unnecessarily teach it from the beginning.

### Skill gaps

Verify that relevant missing skills receive appropriate priority.

### Desired skills

Verify relevant desired skills are incorporated without overriding core role requirements.

### Career switch

Example:

```text
Overall professional experience: 10 years
Target-role experience: ENTRY
Target role: Software Engineer
```

Verify the roadmap is technically entry-level rather than senior solely because of total career experience.

### Missing data

Verify null profile fields do not cause invented user information.

### Weekly hours

Verify low weekly hours result in a realistic workload and higher availability does not create unreasonable scope.

### Duration

Verify overall duration is calculated by application code and is consistent with milestone workload and weekly hours.

### Timestamp

Verify `generatedAt` is generated by the application, not the LLM.

### DAG

Verify cycles, invalid references, orphan nodes, and invalid prerequisites are still rejected.

## 16. Regression Testing

Verify:

- Trigger.dev generation
- Job creation/progress
- Job completion/failure
- Gemini generation
- schema validation
- DAG validation
- Dagre layout
- Blob upload
- Prisma Roadmap persistence
- roadmap viewer
- polling
- React Flow rendering
- node completion/activity
- export functionality

Run the project's normal type-check, lint, test, Prisma validation/generation, and production build commands.

## Final Principle

The LLM should make curriculum decisions:

```text
What should the user learn?
What can be skipped?
What are the skill gaps?
What prerequisites are required?
What projects are appropriate?
```

The application should make deterministic system decisions:

```text
When was generation performed?
What is the calculated duration?
Is the JSON valid?
Is the graph a valid DAG?
Are references valid?
Where is the artifact stored?
```

This separation should make the Elev8 Roadmap module more personalized, predictable, testable, and maintainable.
