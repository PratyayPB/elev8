# Phase 6.6 — Profile, Assessment & Recommendation Integration

## Objective

Complete the Profile + Career Assessment + Skill Gap + Recommendation system by integrating the individual components into the existing Elev8 application.

Phase 6.1–6.5 established:

```text
Profile
Career Assessment
RoleSkillMap
Skill Gap Engine
Recommendation Engine
```

Phase 6.6 connects them into one complete product workflow.

The final system should behave as:

```text
User
 ↓
Profile Setup
 ↓
Profile Completion
 ↓
Career Assessment (optional)
 ↓
Recommendation Engine
 ↓
Recommended Module
 ↓
Module Activity / Result
 ↓
Recommendation Engine
 ↓
Next Recommendation
```

The implementation must follow the existing application's architecture and conventions.

Do not rewrite working implementations from previous phases.

---

# 1. Integration Principle

Phase 6.6 is an integration phase.

Do not introduce a second implementation of:

- Profile logic
- Career Assessment logic
- Skill Gap calculation
- Recommendation scoring

Instead:

```text
ProfileService
CareerAssessmentService
RoleSkillMapService
SkillGapService
RecommendationService
```

should remain the authoritative services for their respective domains.

---

# 2. Complete User Journey

The intended MVP journey is:

```text
New User
   ↓
Profile Setup
   ↓
Profile Completed
   ↓
Dashboard
   ↓
Career Assessment CTA
   │
   ├── Take Assessment
   │       ↓
   │   Assessment Insights
   │       ↓
   │   Recommendations
   │
   └── Skip
           ↓
       Rule-Based Recommendations
```

After module usage:

```text
Recommendation
      ↓
Module
      ↓
Module Result
      ↓
ModuleActivity
      ↓
Recommendation Refresh
      ↓
Next Recommendation
```

---

# 3. Profile as the Central Source

The Profile remains the central source of user career context.

Other modules should consume Profile data rather than maintaining duplicate copies of:

```text
name
age
currentStatus
currentRole
education
primaryGoal
targetRole
targetIndustry
skills
desiredSkills
careerExperienceLevel
targetCompanyType
weeklyLearningHours
```

Do not duplicate these fields into Roadmap, Resume, or Interview records unless they are required as historical snapshots.

---

# 4. Profile Version

Use the Profile versioning mechanism established in earlier phases.

Any meaningful Profile update should increment:

```text
profileVersion
```

At minimum, meaningful fields include:

```text
currentStatus
currentRole
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

---

# 5. Profile Update Effects

When the Profile changes:

```text
Profile
   ↓
profileVersion++
   ↓
Previous Career Assessment becomes stale
   ↓
Existing recommendations become stale
   ↓
Skill Gap is recalculated when needed
```

Do not manually update every dependent record.

Use version-based invalidation where possible.

---

# 6. Profile Completion

The Profile setup flow must calculate completion using the existing Profile completeness service.

Do not duplicate completeness calculations inside:

- Career Assessment
- Recommendation Engine
- Dashboard
- API routes

Use:

```text
ProfileCompletenessService
```

as the single source of truth.

---

# 7. Profile Completion Gate

Career Assessment should only be available after the Profile reaches the required completion state.

Flow:

```text
Profile incomplete
      ↓
Complete Profile
```

After completion:

```text
Profile complete
      ↓
Career Assessment available
```

The Recommendation Engine may still work before completion using its cold-start/progressive profiling logic.

---

# 8. Career Assessment Availability

The dashboard should display:

### If no Assessment exists

```text
Get personalized career insights.

[Take Career Assessment]
```

### If Assessment exists and is current

```text
Your Career Assessment
[View Assessment]
```

### If Assessment is stale

```text
Your Profile has changed since your last assessment.

[Retake Assessment]
```

Do not automatically launch the Assessment.

---

# 9. Assessment → Recommendation Flow

After Assessment completion:

```text
POST /api/career-assessment
       ↓
Assessment saved
       ↓
RecommendationService.refreshForUser()
       ↓
New recommendations generated
```

The Assessment itself must not directly create Recommendations.

The Recommendation Engine consumes it.

---

# 10. Recommendation Refresh Triggers

Recommendations should be regenerated after important state changes.

At minimum:

```text
Profile completed
Profile meaningfully updated
Career Assessment completed
Roadmap phase completed
Roadmap completed
Resume Score completed
Resume Build completed
Interview completed
```

Use existing module lifecycle hooks/services where possible.

Do not place recommendation refresh calls randomly inside UI components.

---

# 11. Recommended Integration Pattern

Prefer:

```text
Module Service
      ↓
Domain Event / Completion Hook
      ↓
RecommendationService.refreshForUser()
```

rather than:

```text
React Component
      ↓
POST /recommendations/refresh
```

The server should own recommendation regeneration.

If the existing application does not have a domain-event architecture, use a lightweight service call from the relevant server-side completion handler.

Do not introduce a complex event bus for this MVP.

---

# 12. Roadmap Integration

Roadmap completion is one of the most important recommendation signals.

When a user completes a roadmap phase:

```text
Roadmap Phase
      ↓
COMPLETED
      ↓
ModuleActivity
      ↓
Recommendation Refresh
```

The recommendation engine should be able to generate:

```text
INTERVIEW_PRACTICE
```

with context:

```json
{
  "source": "ROADMAP_PHASE_COMPLETION",
  "roadmapId": "...",
  "phaseId": "...",
  "topics": [
    "React",
    "Node.js"
  ]
}
```

---

# 13. Roadmap → Interview

The Recommendation Engine decides:

```text
An interview should be attempted.
```

The Interview module decides:

```text
Which interview/session should be created.
```

The Recommendation Engine must not generate Interview questions.

It may provide:

```text
topics
targetRole
careerExperienceLevel
difficulty
```

as launch context.

---

# 14. Interview Integration

When a recommended Interview is launched:

```text
Recommendation
      ↓
Interview Module
      ↓
Interview Session
```

The Interview module should use its existing architecture.

Do not replace the existing Interview implementation.

The recommendation system only provides context.

---

# 15. Interview Completion

When an interview is completed:

```text
Interview Result
      ↓
ModuleActivity
      ↓
Recommendation Refresh
```

The Recommendation Engine can then use:

```text
interview score
interview difficulty
interview history
```

to generate the next recommendation.

---

# 16. Interview Result Example

A ModuleActivity result may contain:

```json
{
  "score": 62,
  "completionStatus": "COMPLETED",
  "metadata": {
    "role": "Full Stack Developer",
    "difficulty": "MEDIUM"
  }
}
```

Do not require every module to use the same result structure.

Use the common ModuleActivity contract plus module-specific metadata.

---

# 17. Resume Score Integration

When Resume Score completes:

```text
Resume Score
      ↓
ModuleActivity
      ↓
Recommendation Refresh
```

If the score is poor:

```text
Resume Score < configured threshold
```

the Recommendation Engine should strongly consider:

```text
RESUME_BUILD
```

---

# 18. Resume Build Integration

When Resume Build completes:

```text
Resume Build
      ↓
ModuleActivity
      ↓
Recommendation Refresh
```

The engine should consider:

```text
RESUME_SCORE
```

after a sufficient period or when the target role changes.

Do not immediately recommend Resume Score repeatedly after every successful build unless other signals justify it.

---

# 19. Resume Dependency

Resume Score requires an available resume artifact.

The Recommendation Engine should verify the user's current Profile/resume state before creating:

```text
RESUME_SCORE
```

If no resume exists:

```text
RESUME_BUILD
```

may become eligible instead.

Do not generate a broken recommendation.

---

# 20. Skill Gap Integration

The Recommendation Engine should obtain Skill Gap data through:

```text
SkillGapService
```

Do not duplicate gap calculation.

Flow:

```text
Profile
 ↓
RoleSkillMapService
 ↓
SkillGapService
 ↓
GapAnalysis
 ↓
RecommendationService
```

---

# 21. Skill Gap Recalculation

Skill gaps should be calculated using current Profile data.

If:

```text
skills[]
```

change, the next recommendation generation should calculate a fresh gap.

Do not rely on a permanently cached gap result.

---

# 22. Career Assessment Integration

The Recommendation Engine should retrieve the latest Assessment.

Check:

```text
assessment.profileVersion
==
profile.profileVersion
```

If equal:

```text
use assessment
```

If not:

```text
assessment is stale
```

and the engine must continue without relying on its old signals.

---

# 23. Assessment Retake

If the user changes significant Profile information:

```text
Profile updated
      ↓
Assessment stale
```

The dashboard should offer:

```text
Retake Career Assessment
```

Do not delete the old Assessment.

---

# 24. Recommendation API

The application should expose:

```text
GET /api/recommendations
```

The endpoint must:

1. Authenticate the user.
2. Load the user's Profile.
3. Determine recommendation freshness.
4. Generate recommendations if necessary.
5. Return the current top recommendations.

The client must not implement recommendation scoring.

---

# 25. Recommendation Refresh API

Keep:

```text
POST /api/recommendations/refresh
```

for explicit refreshes.

Use it for:

- manual refresh
- development/debugging
- controlled regeneration

Do not make the dashboard call this endpoint on every render.

---

# 26. Recommendation Mutation APIs

Support:

```text
PATCH /api/recommendations/:id
```

or the project's equivalent mutation convention.

Operations:

```text
ACCEPT
DISMISS
```

Actual completion should preferably be driven by the underlying module rather than a client claiming completion.

---

# 27. Authorization

Every recommendation endpoint must derive:

```text
userId
```

from the authenticated session.

Never trust:

```text
body.userId
query.userId
route.userId
```

for ownership.

Users must only access their own:

```text
Profile
Assessment
Recommendations
ModuleActivity
```

---

# 28. Dashboard Integration

Add a Recommendation section to the main dashboard.

Recommended structure:

```text
Dashboard
│
├── Profile Status
│
├── Career Assessment
│
├── Recommended Next Steps
│
├── Recent Module Activity
│
└── Other Dashboard Content
```

Do not redesign unrelated dashboard sections.

Follow the application's existing dashboard UI system.

---

# 29. Recommendation Card

Each card should show:

```text
Title
Reason
Primary CTA
```

Example:

```text
Build a structured roadmap

Your target role has several skill gaps. A roadmap can help you address them systematically.

[Generate Roadmap]
```

Avoid showing raw:

```text
score = 0.823
```

---

# 30. Primary Recommendation

The highest-ranked recommendation should be visually emphasized.

Example:

```text
Your Next Step
──────────────
Generate a Roadmap

[Start]
```

Secondary recommendations can appear below.

---

# 31. Recommendation Explanation

Provide an optional:

```text
Why this?
```

interaction.

It may display:

```text
Based on:
• Your career goal
• Your target role
• Your current skills
• Your recent activity
```

Do not expose the full internal scoring formula.

---

# 32. Recommendation Empty State

Never leave the dashboard blank.

Possible fallback states:

### Profile incomplete

```text
Complete your Profile
```

### No meaningful candidates

```text
Take your Career Assessment
```

### Everything completed

```text
Explore your next career challenge
```

Use maintenance mode from Phase 6.5.

---

# 33. Progressive Profiling

If the user has not completed their Profile, ask only for information needed to improve the next recommendation.

Example:

```text
Resume Score completed
targetRole missing
```

Prompt:

```text
Add your target role to receive role-specific recommendations.
```

Do not force the user through the entire Profile form again.

---

# 34. Profile Completion CTA

Progressive profiling should deep-link to the relevant Profile section.

Example:

```text
[Add Target Role]
```

rather than:

```text
[Edit Profile]
```

if the application supports section-level navigation.

---

# 35. Career Assessment CTA Priority

If:

```text
Profile complete
Assessment absent
```

the Assessment CTA should be visible but should not necessarily replace the primary recommendation.

Example:

```text
Primary:
Generate Roadmap

Secondary:
Take Career Assessment for deeper personalization
```

This preserves the rule-based recommendation flow.

---

# 36. Assessment Without Recommendation

Even if the Assessment recommends no specific module, it should still produce:

```text
strengths
gaps
focus areas
```

The Recommendation Engine determines actions from these signals.

---

# 37. Module Activity Integration

All four modules should report relevant completion/result events through a common ModuleActivity mechanism.

Minimum modules:

```text
ROADMAP
RESUME_SCORE
RESUME_BUILD
INTERVIEW_PRACTICE
```

This is required for cross-module recommendations.

---

# 38. ModuleActivity Ownership

The module that owns the activity should create the activity.

Example:

```text
Interview Service
    ↓
creates Interview ModuleActivity
```

The Recommendation Engine consumes it.

Do not make RecommendationService responsible for fabricating module activity.

---

# 39. Activity Event Flow

Recommended:

```text
Module completes
      ↓
Module records result
      ↓
ModuleActivity created
      ↓
RecommendationService.refreshForUser()
```

The exact implementation should follow the current app's service architecture.

---

# 40. Avoid Circular Dependencies

Do not create:

```text
RecommendationService
   ↓
InterviewService
   ↓
RecommendationService
```

Instead:

```text
InterviewService
      ↓
ModuleActivity
      ↓
RecommendationService
```

RecommendationService should not directly execute modules.

---

# 41. Recommendation Launch Contract

The frontend needs a predictable action contract.

Recommended:

```ts
type RecommendationAction = {
  type: "MODULE" | "ACTION" | "SKILL" | "PROFILE_CLARIFICATION";
  refId: string;
  context?: Record<string, unknown>;
};
```

The UI/router maps this to the correct module.

---

# 42. Module Routing

Centralize recommendation-to-route mapping.

Example:

```text
ROADMAP
→ /dashboard/roadmaps

RESUME_SCORE
→ /dashboard/resumes/score

RESUME_BUILD
→ /dashboard/resumes/build

INTERVIEW_PRACTICE
→ /dashboard/interviews

TAKE_CAREER_ASSESSMENT
→ /dashboard/career-assessment
```

Use the application's actual routes if they differ.

Do not duplicate this mapping across cards.

---

# 43. Recommendation Context Preservation

When launching a recommendation, preserve relevant context.

Example:

```text
Roadmap recommendation
targetRole = Full Stack Developer
```

should launch the Roadmap module with the appropriate context.

For Interview:

```text
roadmapId
phaseId
topics
targetRole
difficulty
```

may be passed.

Do not pass large artifacts through query strings.

Use server-side references where appropriate.

---

# 44. Inter-Module Deep Linking

Recommended:

```text
Recommendation
    ↓
Launch Action
    ↓
Module
```

The target module should validate that:

```text
context belongs to authenticated user
```

Never trust recommendation context simply because it originated from the UI.

---

# 45. Recommendation Refresh Timing

Do not synchronously regenerate recommendations during a long-running module operation.

For example:

```text
Interview completion
    ↓
save result
    ↓
create activity
    ↓
refresh recommendations
```

The refresh should only run after the result has been safely persisted.

---

# 46. Trigger.dev

For the integrated MVP, RecommendationService remains synchronous.

Do not introduce Trigger.dev just to connect modules.

Use Trigger.dev only if a future operation becomes sufficiently long-running.

The current architecture should remain:

```text
module completion
    ↓
server-side refresh
```

---

# 47. Error Isolation

Recommendation generation failure must not invalidate successful module completion.

Example:

```text
Interview completed successfully
        ↓
ModuleActivity saved
        ↓
Recommendation refresh fails
```

The Interview completion should still be successful.

Log the recommendation failure and allow regeneration later.

---

# 48. Recommendation Retry

If refresh fails:

```text
GET /api/recommendations
```

should be able to regenerate later.

Do not require the user to repeat the completed module.

---

# 49. Database Transaction Boundaries

Do not wrap:

```text
LLM call
+
entire module completion
```

inside one database transaction.

Use transactions for short database operations only.

Career Assessment and recommendation persistence should follow the existing application's transaction conventions.

---

# 50. Performance

The dashboard should not perform:

```text
Profile query
+
Assessment query
+
RoleSkillMap query
+
ModuleActivity query
+
Recommendation scoring
```

independently from the browser.

Prefer:

```text
GET /api/recommendations
```

as the primary dashboard data source for recommendations.

The backend aggregates the necessary information.

---

# 51. Recommendation Caching

Persist recommendations in Prisma.

The dashboard should usually read:

```text
current recommendations
```

instead of recalculating them on every render.

Regenerate only when:

```text
stale
or
important state changed
```

---

# 52. Recommendation Freshness

Use the freshness mechanism established in Phase 6.5.

Recommended initial threshold:

```text
30 days
```

But event-driven regeneration should happen sooner after meaningful changes.

---

# 53. Profile Change Detection

Use:

```text
profileVersion
```

to identify stale recommendations.

A RecommendationSet may store:

```text
profileVersion
assessmentVersion
```

if that matches the existing design.

This allows:

```text
RecommendationSet
profileVersion = 4

Current Profile
profileVersion = 5

→ regenerate
```

---

# 54. RecommendationSet Integration

If Phase 6.5 implemented RecommendationSet, use it as the batch container.

Example:

```text
RecommendationSet
├── profileVersion
├── createdAt
├── source
└── recommendations[]
```

Do not create a second recommendation batch concept.

---

# 55. Current Recommendation Selection

The backend should identify the current valid set based on:

```text
userId
+
freshness
+
profileVersion
```

and, when available:

```text
assessment/profile context
```

---

# 56. Recommendation History UI

The MVP does not need a full recommendation history page.

However, historical records should remain in the database.

Future phases can use them for:

```text
behavioral analysis
engagement analytics
recommendation tuning
```

---

# 57. Career Dashboard State

The dashboard should be able to represent:

```text
PROFILE_INCOMPLETE
PROFILE_COMPLETE_NO_ASSESSMENT
PROFILE_COMPLETE_ASSESSMENT_CURRENT
PROFILE_COMPLETE_ASSESSMENT_STALE
MAINTENANCE
```

Do not create five independent backend systems.

These are presentation/state interpretations of the same underlying data.

---

# 58. Recommended Dashboard Priority

A sensible MVP hierarchy is:

```text
1. Profile completion if incomplete
2. Primary Recommendation
3. Career Assessment CTA/insight
4. Secondary Recommendations
5. Recent Module Activity
```

Once Profile is complete:

```text
1. Primary Recommendation
2. Assessment status/insight
3. Secondary Recommendations
4. Recent Activity
```

---

# 59. First-Time User Experience

For a completely new user:

```text
Create account
      ↓
Profile Setup
      ↓
Complete Profile
      ↓
Dashboard
      ↓
Career Assessment CTA
      ↓
Recommendation
```

Do not immediately trigger an expensive LLM call after Profile completion.

Let the user choose whether to run the Assessment.

---

# 60. Profile Completion Redirect

After completing Profile:

```text
Profile
   ↓
completion confirmation
   ↓
Dashboard
```

The dashboard should then surface:

```text
Career Assessment
+
Recommendation
```

Do not require the user to manually navigate to another page.

---

# 61. Recommendation After Profile Completion

At the moment Profile becomes complete:

```text
Profile saved
      ↓
RecommendationService.refreshForUser()
```

This should generate the first meaningful rule-based recommendation.

If the user later completes Career Assessment:

```text
Assessment saved
      ↓
RecommendationService.refreshForUser()
```

The recommendation stack becomes more personalized.

---

# 62. Assessment Page Integration

The Assessment page should have:

```text
Current Profile context
Assessment status
Start/Retake action
Results
```

Do not expose internal recommendation scoring here.

The page is an assessment experience, not the Recommendation Engine UI.

---

# 63. Recommendation Page

A dedicated recommendation page is optional.

For MVP, dashboard integration is sufficient.

If a route already exists:

```text
/dashboard/recommendations
```

it may be used for a more detailed view.

Do not create a separate page merely to duplicate dashboard cards.

---

# 64. Recommendation Analytics

Do not build a full analytics dashboard in this phase.

However, persist enough data to later answer:

```text
Which recommendation was shown?
Was it accepted?
Was it dismissed?
Was it completed?
What module result followed?
```

This is why Recommendation history and ModuleActivity must both exist.

---

# 65. Logging

Useful events:

```text
profile.completed
profile.updated
assessment.started
assessment.completed
assessment.failed
recommendation.generated
recommendation.accepted
recommendation.dismissed
recommendation.completed
```

Follow existing logging conventions.

Do not log sensitive Profile contents.

---

# 66. Observability

At minimum, recommendation generation should be diagnosable through:

```text
userId
recommendationSetId
candidate count
generation duration
selected recommendation IDs
```

Optionally:

```text
score breakdown
```

Avoid storing complete prompts or sensitive user data in ordinary logs.

---

# 67. Testing — End-to-End Flow

Test:

```text
New User
→ Complete Profile
→ Receive Recommendation
```

---

Test:

```text
Complete Profile
→ Skip Assessment
→ Use Resume Score
→ Receive Resume Build recommendation
```

---

Test:

```text
Complete Profile
→ Career Assessment
→ Receive updated recommendations
```

---

Test:

```text
Generate Roadmap
→ Complete Phase
→ Receive Interview recommendation
```

---

Test:

```text
Complete Interview
→ Weak result
→ Receive relevant development recommendation
```

---

# 68. Testing — Profile Updates

Test:

```text
Change targetRole
```

and verify:

```text
Assessment becomes stale
Skill Gap uses new role
Recommendations regenerate
Old recommendation context is not reused incorrectly
```

---

# 69. Testing — Resume Flow

Test:

```text
No resume
→ Resume Build eligible
→ Resume Score not incorrectly recommended
```

Then:

```text
Resume exists
→ Resume Score eligible
```

Then:

```text
Low Resume Score
→ Resume Build priority increases
```

---

# 70. Testing — Interview Flow

Test:

```text
Roadmap phase completed
→ Interview recommendation
```

Verify context includes:

```text
roadmapId
phaseId
topics
targetRole
```

Verify the Interview module remains responsible for creating the actual session.

---

# 71. Testing — Assessment Staleness

Test:

```text
Profile Version 4
Assessment Version 4
```

→ current.

Then:

```text
Profile Version 5
Assessment Version 4
```

→ stale.

Recommendation Engine should not use the stale Assessment as a strong signal.

---

# 72. Testing — Recommendation Failure Isolation

Simulate:

```text
Module completion succeeds
Recommendation refresh fails
```

Verify:

```text
Module result remains saved.
ModuleActivity remains saved.
User can later regenerate recommendations.
```

---

# 73. Testing — Authorization

Verify users cannot:

- read another user's Profile
- read another user's Assessment
- read another user's recommendations
- mutate another user's recommendations
- launch recommendation context belonging to another user

---

# 74. Testing — UI States

Verify:

```text
Profile incomplete
Profile complete
No assessment
Current assessment
Stale assessment
No recommendations
One recommendation
Three recommendations
Maintenance mode
Loading
Error
```

---

# 75. Acceptance Criteria

Phase 6.6 is complete when:

- [ ] Profile, Assessment, Skill Gap, and Recommendation services are integrated.
- [ ] Profile remains the central career-context source.
- [ ] Profile version invalidation works.
- [ ] Profile completion triggers initial recommendations.
- [ ] Career Assessment is gated behind Profile completion.
- [ ] Assessment completion refreshes recommendations.
- [ ] Stale Assessment state is displayed correctly.
- [ ] Roadmap completion feeds ModuleActivity.
- [ ] Roadmap phase completion can generate Interview recommendations.
- [ ] Interview recommendations preserve roadmap context.
- [ ] Interview completion feeds ModuleActivity.
- [ ] Resume Score completion feeds ModuleActivity.
- [ ] Low Resume Score can generate Resume Build recommendations.
- [ ] Resume Build completion feeds ModuleActivity.
- [ ] Recommendation API exists.
- [ ] Recommendation mutations exist.
- [ ] Dashboard renders recommendations.
- [ ] Recommendation CTA routing is centralized.
- [ ] Recommendation context is validated server-side.
- [ ] Progressive profiling is supported.
- [ ] Recommendation failures do not break module completion.
- [ ] Recommendation freshness works.
- [ ] Profile changes regenerate relevant recommendations.
- [ ] Assessment staleness is respected.
- [ ] Maintenance mode works.
- [ ] Cold-start behavior works.
- [ ] No duplicate recommendation engine exists.
- [ ] No duplicate Profile completeness logic exists.
- [ ] No LLM directly chooses modules.
- [ ] No Trigger.dev dependency is required for integration.
- [ ] Existing Roadmap module remains functional.
- [ ] Existing Resume module remains functional.
- [ ] Existing Interview module remains functional.
- [ ] TypeScript passes.
- [ ] Lint passes.
- [ ] Production build succeeds.
- [ ] Tests pass.

---

# 76. Out of Scope

Do NOT implement:

- Machine-learning recommendation ranking
- Collaborative filtering
- External job-market recommendations
- Recommendation analytics dashboards
- A/B testing
- Automatic role discovery
- LLM-selected modules
- Complex event-bus infrastructure
- Trigger.dev-based recommendation generation
- New versions of existing Roadmap/Resume/Interview architecture
- Automatic Career Assessment execution
- Full recommendation history UI

---

# Final Integrated Architecture

```text
                              USER
                               │
                               ▼
                            PROFILE
                               │
                ┌──────────────┼──────────────┐
                │              │              │
                ▼              ▼              ▼
         Completeness      Target Role      Skills
                │              │              │
                │              ▼              │
                │        RoleSkillMap         │
                │              │              │
                │              └──────┬───────┘
                │                     ▼
                │                Skill Gap
                │                     │
                └──────────┬──────────┘
                           │
                           ▼
                    CAREER ASSESSMENT
                           │
                           ▼
                 RECOMMENDATION ENGINE
                           │
                           ▼
                    TOP 3 ACTIONS
                           │
          ┌────────────────┼────────────────┐
          ▼                ▼                ▼
       ROADMAP        RESUME MODULE      INTERVIEW
          │                │                │
          │                │                │
          └────────────────┼────────────────┘
                           │
                           ▼
                    MODULE ACTIVITY
                           │
                           ▼
                 RECOMMENDATION REFRESH
                           │
                           └───────────────→
```

# Complete Inter-Module Example

```text
User Profile
│
├── Goal: LAND_A_JOB
├── Target Role: Full Stack Developer
├── Skills:
│   ├── JavaScript → INTERMEDIATE
│   ├── React → INTERMEDIATE
│   └── Node.js → BEGINNER
│
└── Profile Complete
        │
        ▼
Recommendation Engine
        │
        ├── RoleSkillMap
        │
        └── SkillGap
              │
              └── Node.js underqualified
        │
        ▼
Recommendation:
ROADMAP
        │
        ▼
User generates Roadmap
        │
        ▼
Phase 1 completed
        │
        ▼
ModuleActivity
        │
        ├── Topics:
        │   ├── Node.js
        │   └── REST APIs
        │
        └── targetRole:
            Full Stack Developer
        │
        ▼
Recommendation Engine
        │
        ▼
Recommendation:
INTERVIEW_PRACTICE
        │
        ▼
Interview Module
        │
        ├── Role: Full Stack Developer
        ├── Topics: Node.js, REST APIs
        └── Experience: ENTRY
        │
        ▼
Interview completed
        │
        ├── Score: 48
        └── Weakness: Backend
        │
        ▼
ModuleActivity
        │
        ▼
Recommendation Engine
        │
        ▼
Recommendation:
ROADMAP / NODE.JS DEVELOPMENT
        │
        ▼
User improves skill
        │
        ▼
Interview again
```

This creates the intended Elev8 feedback loop:

```text
PROFILE
   ↓
ASSESS
   ↓
RECOMMEND
   ↓
ACT
   ↓
MEASURE
   ↓
RECOMMEND AGAIN
```

## Implementation Principles

1. **Phase 6.6 integrates existing services rather than replacing them.**
2. **Profile remains the central career-context source.**
3. **Career Assessment is optional but gated behind Profile completion.**
4. **Recommendation Engine works with or without Career Assessment.**
5. **Skill Gap is always deterministic.**
6. **ModuleActivity is the bridge between modules.**
7. **Roadmap phase completion is a first-class Interview recommendation trigger.**
8. **Module results can influence the next recommendation.**
9. **Recommendation generation failures must never undo successful module completion.**
10. **Recommendation context must be validated server-side.**
11. **The frontend renders recommendations but does not calculate them.**
12. **Profile changes invalidate dependent Assessment/recommendation state through versioning.**
13. **Recommendation history is preserved.**
14. **The system should never leave the user at an empty recommendation state.**
15. **Progressive profiling should collect only the missing information needed to improve recommendations.**
16. **The LLM provides career insight; deterministic logic decides actions.**
17. **Trigger.dev is not required for this integration layer.**
18. **The four modules form a continuous feedback loop rather than isolated features.**
