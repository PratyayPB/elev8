# Resume Scoring — Task 1: Profile Personalization

## Objective

Replace the existing Resume Scoring personalization flow with the same **Add Profile Data** approach already used by the Roadmap and Interview modules.

Do not remove or modify unrelated Resume Scoring functionality.

## 1. Remove Existing Personalization

Completely remove the current personalization logic that asks the user LLM-generated questions.

Remove:
- LLM-generated personalization questions.
- The UI for answering those questions.
- Persistence of answers from that flow.
- Sending those answers to the Resume Scoring LLM.

The user should no longer have to answer AI-generated questions before their resume is scored.

## 2. Add Profile Data Flow

Implement the established Add Profile Data pattern.

Recommended flow:

```text
Resume Scoring Form
        ↓
Target Role
Experience Level
Optional Job Description
        ↓
Add Profile Data?
        │
        ├── YES → Fetch Profile → Include Profile Context
        │
        └── NO  → Continue Without Profile
        ↓
Existing Resume Scoring Workflow
```

Reuse the implementation patterns from Roadmap and Interview rather than creating a new personalization architecture.

Profile personalization must be optional.

## 3. Profile Attributes

When the user chooses to add Profile data, fetch the authenticated user's Profile server-side and send only:

```ts
profile: {
  currentRole,
  currentStatus,
  yearsOfExperience,
  highestQualification,
  fieldOfStudy,
  primaryGoal,
  targetCompanyType,
  skills,
  desiredSkills
}
```

Do not send:

```text
name
age
country
phoneCountryCode
phoneNumber
weeklyLearningHours
isMandatoryCompleted
```

Do not trust Profile data supplied by the client.

If personalization is skipped, omit Profile context from the LLM request.

## 4. Form Inputs

The Resume Scoring form must collect:

```text
Target Role
Experience Level
Job Description (optional)
```

Example:

```text
Target Role: Full Stack Engineer
Experience Level: Mid
Job Description: Optional job description
```

These inputs are independent of Profile data.

## 5. Experience-Level Semantics

The distinction between the two experience fields must be preserved.

### Form `experienceLevel`

This represents the experience level **for the target role**.

Example:

```text
Target Role: Full Stack Engineer
Experience Level: Entry
```

### Profile `yearsOfExperience`

This represents the user's **overall professional working experience**.

Example:

```text
yearsOfExperience: 5
```

These values can legitimately differ:

```text
Target Role: Full Stack Engineer
Experience Level: Entry
Overall Years of Experience: 5
```

This can represent a career transition.

The LLM must not infer role-specific experience level solely from `yearsOfExperience`.

## 6. LLM Input

The scoring request should conceptually contain:

```ts
{
  resume: {
    // existing parsed resume data
  },

  target: {
    role: string,
    experienceLevel: string,
    jobDescription?: string
  },

  profile?: {
    currentRole,
    currentStatus,
    yearsOfExperience,
    highestQualification,
    fieldOfStudy,
    primaryGoal,
    targetCompanyType,
    skills,
    desiredSkills
  }
}
```

The target role, role-specific experience level, and optional job description define the primary evaluation target.

Profile data provides candidate context and personalization.

## 7. Profile Usage Rules

Use Profile data to improve:
- Career-context understanding
- Experience interpretation
- Skill relevance
- Career-transition context
- Education relevance
- Resume positioning
- Goal-specific evaluation

Do not treat every Profile attribute as an independent scoring requirement.

### Skills

`skills` represent current capabilities and may be compared against what the resume demonstrates.

### Desired Skills

`desiredSkills` represent aspirations.

Do not automatically penalize the resume because a desired skill is absent.

## 8. Job Description

If supplied, the Job Description should be used as a high-value scoring context.

Evaluate:
- Role alignment
- Relevant skills
- Relevant experience
- Keyword/ATS alignment
- Missing evidence
- Achievement relevance
- Resume positioning

If no Job Description is provided, evaluate primarily against the target role, role-specific experience level, and resume content.

## 9. Security

Use:

```text
Authenticated User
      ↓
Backend
      ↓
Profile lookup
      ↓
Approved Profile fields
      ↓
LLM
```

Never accept arbitrary Profile data from the client as authoritative.

Never send `phoneNumber` or `phoneCountryCode` to the LLM.

## 10. Acceptance Criteria

- [ ] Existing LLM-generated personalization-question flow is completely removed.
- [ ] Add Profile Data flow is implemented.
- [ ] Flow follows Roadmap/Interview personalization conventions.
- [ ] Profile personalization is optional.
- [ ] Profile data is fetched server-side.
- [ ] Only the approved Profile fields are sent to the LLM.
- [ ] Target Role is required.
- [ ] Experience Level is required.
- [ ] Job Description is optional.
- [ ] Role-specific Experience Level is distinct from overall `yearsOfExperience`.
- [ ] Resume scoring works correctly without Profile data.
- [ ] Desired Skills are treated as aspirational context, not automatic requirements.
- [ ] Existing PDF parsing, Blob Storage, Resume Artifact, assessment, and persistence workflows remain functional.
- [ ] TypeScript passes.
- [ ] Lint passes.
- [ ] Tests pass.
- [ ] Production build passes.

## Implementation Guidance

Before changing code:

1. Inspect the existing Resume Scoring personalization implementation.
2. Remove only the old LLM-question flow.
3. Inspect the Roadmap Add Profile Data implementation.
4. Inspect the Interview Add Profile Data implementation.
5. Reuse their established architecture.
6. Inspect the existing Resume Scoring prompt and structured output schema.
7. Extend it to accept the new target and Profile context.
8. Preserve existing PDF parsing, Blob Storage, and assessment workflows.
