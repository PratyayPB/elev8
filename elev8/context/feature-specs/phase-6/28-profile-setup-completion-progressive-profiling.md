# Phase 6.2 — Profile Setup, Completion & Progressive Profiling

## Objective

Build the user-facing Profile setup and editing experience on top of the Profile foundation created in Phase 6.1.

This phase is responsible for:

- Profile setup
- Profile editing
- Profile completion calculation
- Weighted completion score
- Progressive/skippable profile collection
- Context-aware prompts for missing information
- Profile completion state
- Profile UI/API integration

This phase must NOT implement:

- Career Assessment
- Recommendation Engine ranking
- RoleSkillMap
- Skill-gap calculations
- LLM assessment calls
- Recommendation persistence
- Recommendation scoring

Those belong to later phases.

---

# 1. Core Product Principle

Profile completion should be **progressive rather than mandatory**.

The user should not be forced to complete the entire Profile before accessing the application.

Preferred flow:

```text
Login
  ↓
Dashboard
  ├── Profile incomplete
  │      ↓
  │   Complete Profile CTA
  │
  ├── Roadmaps
  ├── Resume
  ├── Interviews
  └── Other modules
```

A user may skip Profile setup and continue using supported modules.

However, the application should progressively encourage Profile completion when additional information would materially improve personalization.

---

# 2. Profile Completion Is Different From Assessment

These are independent states.

Example:

```text
Profile:
COMPLETED

Career Assessment:
NOT_COMPLETED
```

is valid.

Likewise:

```text
Profile:
IN_PROGRESS

Career Assessment:
NOT_AVAILABLE
```

is valid.

Do not automatically launch Career Assessment from Profile completion in this phase.

---

# 3. Profile Completion State

Use three states:

```text
NOT_STARTED
IN_PROGRESS
COMPLETED
```

The state should be derived from the weighted completion score rather than being blindly stored.

Recommended interpretation:

```text
0%:
NOT_STARTED

>0% and <100%:
IN_PROGRESS

100%:
COMPLETED
```

If the product later requires a different threshold, keep the threshold centralized.

Do not duplicate completion logic across components.

---

# 4. Completion Score

Calculate a weighted Profile completeness score.

Recommended weights:

| Field / Group | Weight |
|---|---:|
| primaryGoal | 15 |
| currentStatus | 15 |
| skills | 15 |
| targetRole | 10 |
| targetIndustry | 10 |
| education | 10 |
| desiredSkills | 10 |
| weeklyLearningHours | 5 |
| targetCompanyType | 5 |
| currentRole | 5 |
| **Total** | **100** |

The score should be calculated from actual Profile data.

Do not simply count the number of filled database columns.

---

# 5. Completion Calculation

Create a single server-side/domain utility:

```text
calculateProfileCompleteness(profile)
```

Conceptually:

```ts
completion =
  Σ(weight for completed field/group)
```

Return:

```json
{
  "score": 75,
  "state": "IN_PROGRESS"
}
```

The exact implementation should use the project's existing TypeScript/domain conventions.

---

# 6. Field Completion Rules

A field is considered complete only when its value is meaningful.

Examples:

```text
null
undefined
""
```

are incomplete.

For arrays:

```text
[]
```

is incomplete.

For skills:

```text
skills.length > 0
```

counts as completed.

For desired skills:

```text
desiredSkills.length > 0
```

counts as completed.

Do not treat whitespace-only strings as completed.

---

# 7. Education Completion

Treat Education as one logical completion group for the weighted score.

The group is complete when:

```text
highestQualification
fieldOfStudy
institution
graduationYear
```

are all present and valid.

The entire group contributes:

```text
10 points
```

Do not award partial education points in the MVP unless the completion utility explicitly supports weighted subfields.

---

# 8. Skills Completion

The Skills group is complete when the user has at least one valid ProfileSkill.

Example:

```text
skills = [
  JavaScript → INTERMEDIATE
]
```

counts as complete.

The group contributes:

```text
15 points
```

---

# 9. Desired Skills Completion

The Desired Skills group is complete when at least one valid desired skill exists.

It contributes:

```text
10 points
```

---

# 10. Target Role

`targetRole` contributes:

```text
10 points
```

when present.

However:

```text
primaryGoal = EXPLORE_CAREERS
```

may legitimately have:

```text
targetRole = null
```

Therefore the UI should not force a target role simply to reach 100% completion.

For exploration users, Phase 6.5 may later use a specialized recommendation path.

For this phase, preserve the Profile data exactly as entered.

---

# 11. Target Industry

`targetIndustry` contributes:

```text
10 points
```

when present.

It should remain optional at the database level.

---

# 12. Current Status

`currentStatus` contributes:

```text
15 points
```

when present.

It is one of the highest-value Profile fields because it changes how other modules interpret the user's situation.

---

# 13. Primary Goal

`primaryGoal` contributes:

```text
15 points
```

when present.

It is required for a fully actionable career profile.

---

# 14. Current Role

`currentRole` contributes:

```text
5 points
```

when present.

For students/freshers, the UI should allow appropriate values such as:

```text
Student
Fresher
Graduate
```

Do not create artificial requirements for conventional employment.

---

# 15. Target Company Type

`targetCompanyType` contributes:

```text
5 points
```

when present.

The default:

```text
NO_PREFERENCE
```

counts as a valid selection.

---

# 16. Weekly Learning Hours

`weeklyLearningHours` contributes:

```text
5 points
```

when selected.

This should use the supported options defined in Phase 6.1.

---

# 17. Profile Completion UI

Create a Profile Details page following the existing dashboard design system.

Recommended route:

```text
/dashboard/profile
```

If an equivalent route already exists, update it instead of creating a duplicate.

The page should provide:

```text
Profile
├── Basic Information
├── Career Status
├── Education
├── Career Goals
├── Skills
├── Career Target
└── Learning Preferences
```

---

# 18. Profile Completion Header

At the top of the page show:

```text
Profile Completion

75%
██████████████░░░░░░
```

Also show a concise state:

```text
Profile almost complete
```

or:

```text
Complete your profile to unlock more personalized career guidance.
```

Do not claim that completing the Profile is required to use the application.

---

# 19. Missing Information

The UI should identify missing high-value information.

Example:

```text
Complete these next:

• Add your target role
• Add your current skills
• Add your learning hours
```

Sort missing fields by importance/weight.

For example:

```text
primaryGoal
currentStatus
skills
targetRole
targetIndustry
education
...
```

---

# 20. Progressive Profiling

Progressive profiling means collecting missing Profile information at useful moments rather than forcing the user through a large form immediately.

Example:

```text
User opens Resume Score
        ↓
Target role is missing
        ↓
Prompt:
"What role are you targeting?"
        ↓
User answers
        ↓
Profile updated
```

The prompt should be contextual.

Avoid generic interruptions such as:

```text
"Complete your profile now."
```

when a specific missing field can be requested instead.

---

# 21. Progressive Profiling Must Be Skippable

Every progressive prompt should provide a skip option where appropriate.

Example:

```text
What role are you targeting?

[Software Engineer]
[Data Scientist]
[Designer]
[Other]

[Skip for now]
```

Skipping should not block the module unless the module genuinely cannot operate without the information.

---

# 22. Module-Specific Missing Data

Progressive prompts should request information that improves the current module.

Examples:

### Resume Score

Missing:

```text
targetRole
```

Prompt:

```text
What role are you targeting?
```

### Interview

Missing:

```text
targetRole
careerExperienceLevel
```

Prompt for the relevant missing field.

### Roadmap

Missing:

```text
targetRole
desiredSkills
weeklyLearningHours
```

Prompt for whichever field is most relevant.

Do not implement the full recommendation logic in this phase.

Only provide the infrastructure for contextual Profile prompts.

---

# 23. Progressive Profile Prompt Service

Create a reusable domain/service function:

```text
getProfileCompletionPrompts(profile, context)
```

Where:

```text
context =
  PROFILE
  ROADMAP
  RESUME
  INTERVIEW
  DASHBOARD
```

The service returns prioritized missing information.

Example:

```json
[
  {
    "field": "targetRole",
    "priority": 10,
    "reason": "A target role improves roadmap and resume personalization."
  }
]
```

Do not call an LLM for this.

---

# 24. Deterministic Prompt Selection

Prompt selection should be deterministic.

Example:

```text
if targetRole is missing:
    targetRole prompt

else if skills are empty:
    skills prompt

else if weeklyLearningHours is missing:
    weeklyLearningHours prompt
```

Use field importance and module context.

Do not let an LLM decide which Profile field to request.

---

# 25. Profile Setup Flow

New users should have a lightweight setup experience.

Recommended:

```text
Profile Setup
      ↓
Basic Information
      ↓
Career Status
      ↓
Education
      ↓
Career Goal
      ↓
Skills
      ↓
Career Target
      ↓
Learning Preferences
      ↓
Review
```

However:

> The user must be able to skip optional sections.

Do not turn this into a hard multi-step blocking wizard unless the existing UX architecture requires it.

---

# 26. Recommended Initial Setup

For the initial setup, prioritize the fields that unlock personalization:

### Step 1

```text
Name
Age
Country
```

### Step 2

```text
Current Status
Current Role
Years of Experience
```

### Step 3

```text
Primary Goal
Target Role
Target Industry
```

### Step 4

```text
Current Skills
Desired Skills
```

### Step 5

```text
Education
Career Experience Level
Target Company Type
Weekly Learning Hours
```

This is a UX recommendation, not a backend requirement.

---

# 27. Form State

Use the application's existing form library/state conventions.

The form should:

- Preserve entered values between sections.
- Validate before submission.
- Avoid losing user input when navigating between sections.
- Handle server validation errors.
- Display save state.

Do not introduce a new form library if the application already has one.

---

# 28. Autosave

Do not implement aggressive per-keystroke Profile autosave.

For the MVP:

```text
User edits
    ↓
Save Profile
    ↓
PATCH /api/profile
```

For multi-section setup, save at section boundaries or explicit submission.

This avoids unnecessary Profile version increments and API calls.

---

# 29. Profile Version Interaction

Whenever the Profile API performs a meaningful update:

```text
profileVersion++
```

as defined in Phase 6.1.

The UI should not manually calculate or submit the next version.

Server-side Profile logic remains authoritative.

---

# 30. Save Feedback

Show clear states:

```text
Saved
Saving...
Unable to save
```

Avoid blocking the entire Profile page during a save.

---

# 31. Validation Feedback

Validation errors should appear next to the relevant field.

Examples:

```text
Years of experience cannot be negative.
```

```text
Please select your current status.
```

```text
Please add at least one skill.
```

Do not expose raw Zod/Prisma errors to the user.

---

# 32. Skill Input UI

The Profile should allow users to add multiple skills.

Recommended interaction:

```text
Add Skill

Skill: [JavaScript]
Proficiency: [Intermediate]

[Add]
```

Then:

```text
Current Skills

JavaScript       Intermediate   [Remove]
React             Intermediate   [Remove]
Python            Beginner       [Remove]
```

---

# 33. Desired Skill UI

Use a similar interaction:

```text
Desired Skills

[ Type a skill... ] [Add]

TypeScript
Docker
System Design
```

No proficiency selector is required.

---

# 34. Skill Editing

Users should be able to modify:

```text
skill name
proficiency
```

without creating duplicate records.

The client should prevent obvious duplicates, but the server remains authoritative.

---

# 35. Profile Data Normalization

Use the normalization strategy defined in Phase 6.1.

For example:

```text
JavaScript
javascript
JAVASCRIPT
```

should represent one logical skill.

Preserve a clean display value for the user.

---

# 36. Career Goal UI

Primary Goal should use a selectable list.

Options:

```text
Land a job
Get an internship
Switch career
Get promoted
Learn new skills
Prepare for interview
Build resume
Improve resume
Become job ready
Explore careers
Other
```

Store the enum values defined in Phase 6.1.

Do not store display labels in the database.

---

# 37. Current Status UI

Use the defined values:

```text
Student
Employed
Self-employed
Business owner
Freelancer
Job seeker
Recent graduate
Other
```

Store enum values.

---

# 38. Target Company UI

Use:

```text
Startup
Mid-size
Enterprise
FAANG
Government
Non-profit
No preference
```

Do not make this field mandatory for module access.

---

# 39. Career Experience Level UI

Use:

```text
Entry
Junior
Mid
Senior
Lead
```

Explain that this represents the user's **target career level**, not necessarily current experience.

This prevents confusion with:

```text
yearsOfExperience
```

---

# 40. Weekly Learning Hours UI

Use predefined options.

Recommended:

```text
5 hours/week
10 hours/week
15 hours/week
20 hours/week
25 hours/week
30 hours/week
40 hours/week
```

Allow only values supported by the Phase 6.1 validation.

---

# 41. Education UI

Collect:

```text
Highest Qualification
Field of Study
Institution
Graduation Year
```

Use appropriate controls:

```text
Highest Qualification → select
Field of Study → text/select
Institution → text
Graduation Year → numeric/select
```

Do not hardcode institution names.

---

# 42. Profile Review

Before final setup completion, provide a review section:

```text
Review your Profile

Basic Information
Career Status
Education
Career Goals
Skills
Career Target
Learning Preferences

[Edit]
```

The user should be able to return to any section.

---

# 43. Completion CTA

When the Profile reaches 100%:

```text
Profile Complete

Your profile is ready for personalized career guidance.

[Continue to Dashboard]
```

Do NOT automatically run Career Assessment in this phase.

The next phase will own that flow.

---

# 44. Incomplete Profile CTA

For users with incomplete Profiles:

```text
Complete your Profile
75% complete

Add your target role and skills to improve personalization.

[Continue Profile]
```

This CTA should appear in appropriate dashboard/profile surfaces.

---

# 45. Dashboard Profile Widget

If the existing dashboard supports widgets, add:

```text
Profile Completion
75%

Complete your profile to improve personalized recommendations.

[Complete Profile]
```

If the dashboard architecture does not yet have a suitable widget system, keep the integration minimal.

Do not redesign the entire dashboard.

---

# 46. No Recommendation Engine Dependency

The Profile Completion system must work without:

```text
Recommendation Engine
Career Assessment
RoleSkillMap
```

This is important because Profile should be usable before those systems exist.

---

# 47. Profile Prompt Context

The contextual prompt service may expose:

```text
PROFILE
ROADMAP
RESUME
INTERVIEW
DASHBOARD
```

But do not implement module-specific recommendation ranking.

Its only job is:

```text
What missing Profile information is most useful here?
```

---

# 48. Profile Prompt Example

For Resume:

```json
{
  "field": "targetRole",
  "title": "What role are you targeting?",
  "description": "Your target role helps us make your resume feedback more relevant.",
  "required": false,
  "skippable": true
}
```

For Roadmap:

```json
{
  "field": "weeklyLearningHours",
  "title": "How much time can you learn each week?",
  "description": "This helps us build a roadmap that fits your schedule.",
  "required": false,
  "skippable": true
}
```

---

# 49. No LLM for Profile Prompts

Do not use Gemini or another LLM to generate these prompts.

Use deterministic templates.

Reasons:

- predictable
- cheap
- fast
- easy to test
- consistent UX

Career Assessment will use the LLM later.

---

# 50. API Extensions

The existing Profile endpoints from Phase 6.1 remain the primary API.

If needed, expose:

```text
GET /api/profile/completion
GET /api/profile/prompts?context=ROADMAP
```

However, do not create redundant APIs if completion/prompts can be returned from existing Profile endpoints without architectural problems.

Prefer a small number of stable endpoints.

---

# 51. Completion Endpoint

If implemented:

```text
GET /api/profile/completion
```

returns:

```json
{
  "score": 75,
  "state": "IN_PROGRESS",
  "completed": [
    "primaryGoal",
    "currentStatus",
    "skills"
  ],
  "missing": [
    "targetRole",
    "targetIndustry",
    "desiredSkills"
  ]
}
```

The server remains the source of truth.

---

# 52. Prompt Endpoint

If implemented:

```text
GET /api/profile/prompts?context=RESUME
```

returns only the most useful missing fields for the specified context.

Example:

```json
{
  "context": "RESUME",
  "prompts": [
    {
      "field": "targetRole",
      "priority": 10
    }
  ]
}
```

Do not return every possible Profile field.

---

# 53. Contextual Prompt Priority

Recommended priority:

```text
Module-critical missing data
        ↓
High-weight Profile data
        ↓
Useful secondary data
```

For example:

```text
Resume Score + no targetRole
```

should prioritize:

```text
targetRole
```

over:

```text
weeklyLearningHours
```

---

# 54. Profile Completion and Goal Exceptions

The completion system should not force users to provide information that is logically irrelevant to their goal.

Example:

```text
EXPLORE_CAREERS
targetRole = null
```

is valid.

Similarly:

```text
STUDENT
currentCompany = null
```

is valid.

The completion score can still reach 100% based on the defined field groups without forcing invalid/irrelevant values.

If the product later requires goal-specific completeness, implement that as a separate rule layer rather than corrupting the base Profile model.

---

# 55. Testing

## Completion

- [ ] Empty Profile returns 0%.
- [ ] Completion increases when fields are populated.
- [ ] Weights sum to 100.
- [ ] Empty arrays count as incomplete.
- [ ] Valid skill arrays count as complete.
- [ ] Education requires all required education fields.
- [ ] `NO_PREFERENCE` counts as complete.
- [ ] `EXPLORE_CAREERS` does not require targetRole merely because the field is nullable.

## Profile UI

- [ ] Profile page loads.
- [ ] Existing Profile data renders correctly.
- [ ] All sections can be edited.
- [ ] Skills can be added.
- [ ] Skills can be removed.
- [ ] Skill proficiency can be changed.
- [ ] Desired skills can be added/removed.
- [ ] Validation errors display correctly.
- [ ] Save state displays correctly.
- [ ] Profile version is not client-controlled.

## Progressive Profiling

- [ ] Missing fields can be identified.
- [ ] Context changes prompt priority.
- [ ] Prompts are deterministic.
- [ ] Prompts can be skipped.
- [ ] Skipping does not corrupt Profile data.
- [ ] Existing module flow is not unnecessarily blocked.

## Security

- [ ] Profile APIs remain authenticated.
- [ ] Users can only modify their own Profile.
- [ ] Prompt endpoints cannot expose another user's Profile information.

## Compatibility

- [ ] Roadmap can read Profile data.
- [ ] Resume can read Profile data.
- [ ] Interview can read Profile data.
- [ ] Existing Resume Artifacts remain independent.
- [ ] Existing Interview Artifacts remain independent.

---

# 56. Acceptance Criteria

Phase 6.2 is complete when:

- [ ] `/dashboard/profile` exists or the existing Profile page has been updated.
- [ ] Users can create/edit their Profile.
- [ ] Profile setup is progressive.
- [ ] Users can skip optional Profile prompts.
- [ ] Profile completion score is calculated server-side.
- [ ] Completion weights are centralized.
- [ ] Completion state is exposed.
- [ ] Missing information can be identified.
- [ ] Contextual Profile prompts work.
- [ ] Prompt selection is deterministic.
- [ ] No LLM is used.
- [ ] No Recommendation Engine is used.
- [ ] No Career Assessment is used.
- [ ] Profile versioning continues to work through the Phase 6.1 service.
- [ ] Profile data is not duplicated into unrelated module records.
- [ ] TypeScript passes.
- [ ] Lint passes.
- [ ] Production build succeeds.
- [ ] Tests pass.

---

# 57. Out of Scope

Do NOT implement:

- Career Assessment
- Gemini integration
- Assessment prompts
- Assessment scoring
- RoleSkillMap
- Skill-gap analysis
- Recommendation candidate generation
- Recommendation ranking
- Recommendation persistence
- Recommendation history
- ModuleActivity
- RecommendationSet
- Roadmap → Interview recommendations
- Resume Score → Resume Build recommendations

These belong to later Phase 6 specifications.

---

# Final Architecture

```text
                         User
                          │
                          ▼
                       Profile
                          │
                ┌─────────┴─────────┐
                │                   │
                ▼                   ▼
       Profile Completion     Progressive Prompts
                │                   │
                └─────────┬─────────┘
                          ▼
                    Profile Context
                          │
       ┌──────────────────┼──────────────────┐
       ▼                  ▼                  ▼
    Roadmap             Resume            Interview
       │                  │                  │
       └──────────────────┼──────────────────┘
                          ▼
                 Future Career Assessment
                          │
                          ▼
                Future Recommendation Engine
```

## Implementation Principles

1. **Profile setup is progressive, not a hard application gate.**
2. **Profile completion and Career Assessment are independent states.**
3. **Completion is calculated from weighted Profile information.**
4. **The completion score is deterministic and server-authoritative.**
5. **High-value fields receive higher completion weights.**
6. **Missing information should be requested contextually.**
7. **Progressive prompts must be skippable where possible.**
8. **Profile prompts are deterministic and do not require an LLM.**
9. **Profile versioning remains owned by the Profile service.**
10. **Profile updates remain atomic.**
11. **The Profile remains the central career-context store.**
12. **Module artifacts remain independent from Profile.**
13. **No Recommendation Engine logic belongs in this phase.**
14. **No Career Assessment logic belongs in this phase.**
15. **The system should be ready for Phase 6.3 without requiring architectural changes.**
