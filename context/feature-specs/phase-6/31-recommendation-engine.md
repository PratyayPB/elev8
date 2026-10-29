# Phase 6.5 — Recommendation Engine

## Objective

Implement the deterministic Recommendation Engine that connects the user's:

- Profile
- RoleSkillMap / Skill Gap analysis
- Career Assessment
- ModuleActivity
- Recommendation history

to produce a small, explainable set of recommended next actions and Elev8 modules.

The core architecture is:

```text
Profile
   │
   ├──────────────┐
   ▼              ▼
RoleSkillMap   ModuleActivity
   │              │
   ▼              │
Skill Gap         │
   │              │
   └──────┬───────┘
          ▼
   Rule / Scoring Engine
          │
          ├───────────────┐
          ▼               ▼
Assessment Signal     Behavioral Signals
          │               │
          └───────┬───────┘
                  ▼
          Recommendation Candidates
                  │
                  ▼
          Ranking / Filtering
                  │
                  ▼
          Recommendation Records
                  │
                  ▼
              Dashboard
```

The Recommendation Engine must remain **hybrid but deterministic-first**.

The LLM provides assessment signals and narrative insight.

The deterministic engine decides what to recommend.

---

# 1. Core Architectural Principle

Do NOT allow the LLM to directly decide:

```text
"Recommend Roadmap."
```

Instead:

```text
Profile
+
ModuleActivity
+
SkillGap
+
Assessment
        ↓
Deterministic Rule Engine
        ↓
Candidate Recommendations
        ↓
Scoring / Ranking
        ↓
Top Recommendations
```

This provides:

- predictable behavior
- explainability
- low cost
- fast generation
- consistent results
- easier testing
- support for users who have never completed Career Assessment

---

# 2. Recommendation Scope

The current Elev8 module recommendations are:

```text
ROADMAP
RESUME_SCORE
RESUME_BUILD
INTERVIEW_PRACTICE
```

The engine should initially recommend only:

```text
MODULE
ACTION
SKILL
PROFILE_CLARIFICATION
```

as recommendation types.

However, the primary MVP recommendation targets are the four modules.

---

# 3. Recommendation Entity

Create a persistent Recommendation model.

Conceptually:

```prisma
model Recommendation {
  id          String   @id @default(cuid())
  userId      String

  source      RecommendationSource
  type        RecommendationType

  refId       String

  priority    Int
  score       Float

  reason      String

  status      RecommendationStatus

  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  user        User     @relation(
    fields: [userId],
    references: [id],
    onDelete: Cascade
  )

  @@index([userId, createdAt])
  @@index([userId, status])
}
```

Adapt this to the existing Prisma architecture.

Do not blindly copy the schema.

---

# 4. Recommendation Source

Create:

```text
RecommendationSource
```

with:

```text
RULE_ENGINE
LLM_ASSESSMENT
HYBRID
MODULE_RESULT
PROFILE_SIGNAL
```

For the MVP, the engine should primarily use:

```text
RULE_ENGINE
HYBRID
MODULE_RESULT
PROFILE_SIGNAL
```

`LLM_ASSESSMENT` may identify that the Assessment influenced the recommendation, but the final module decision still belongs to deterministic scoring.

---

# 5. Recommendation Type

Create:

```text
RecommendationType
```

with:

```text
MODULE
SKILL
ACTION
PROFILE_CLARIFICATION
```

Examples:

```text
MODULE
refId = "ROADMAP"

SKILL
refId = "Docker"

ACTION
refId = "TAKE_CAREER_ASSESSMENT"

PROFILE_CLARIFICATION
refId = "TARGET_ROLE"
```

---

# 6. Recommendation Status

Create:

```text
RecommendationStatus
```

with:

```text
PENDING
ACCEPTED
DISMISSED
COMPLETED
```

Recommended behavior:

```text
PENDING
   ↓
ACCEPTED
   ↓
COMPLETED
```

or:

```text
PENDING
   ↓
DISMISSED
```

Do not delete dismissed recommendations.

Their history is useful as a behavioral signal.

---

# 7. Recommendation Record Philosophy

A Recommendation is an instruction for the user, not a snapshot of the entire decision process.

The record should contain:

```text
what
why
priority
score
status
source
```

The engine remains responsible for generating these records.

---

# 8. Recommendation Reason

Every recommendation must have a human-readable reason.

Example:

```text
Your target role requires backend skills that are currently underdeveloped. A structured roadmap would help you close those gaps.
```

The reason may be generated from deterministic templates.

If the Career Assessment provides useful narrative context, the reason may be enriched by the LLM, but the underlying recommendation must still be deterministic.

---

# 9. Do Not Make Reason Text the Decision Logic

Never parse recommendation reasons to determine behavior.

Incorrect:

```text
if reason.includes("resume")
```

Correct:

```text
recommendation.type === MODULE
recommendation.refId === RESUME_SCORE
```

---

# 10. ModuleActivity

The Recommendation Engine requires module usage history.

Use the existing/planned ModuleActivity concept.

Conceptually:

```text
ModuleActivity
├── userId
├── module
├── timestamp
├── result
├── completionStatus
└── metadata
```

Module values:

```text
ROADMAP
RESUME_SCORE
RESUME_BUILD
INTERVIEW_PRACTICE
```

---

# 11. ModuleActivity Result

ModuleActivity may contain:

```json
{
  "score": 42,
  "feedback": "...",
  "completionStatus": "COMPLETED"
}
```

Do not force every module to have a numeric score.

For example:

```text
ROADMAP phase completed
```

may have:

```text
score = null
```

---

# 12. Module Result Signals

Module results are strong deterministic signals.

Examples:

```text
Resume Score = 35
```

should strongly increase:

```text
RESUME_BUILD
```

priority.

Likewise:

```text
Interview Practice consistently weak
```

can increase:

```text
ROADMAP
```

or another appropriate skill-development recommendation.

---

# 13. Profile Completeness Gate

Use the Profile completeness calculation from Phase 6.2.

Recommendations should consider:

```text
profileCompleteness
```

before generating highly personalized recommendations.

However, incomplete Profiles must not make the application unusable.

---

# 14. Empty Profile / Cold Start

If:

```text
profileCompleteness = 0
```

and:

```text
no module activity
no assessment
```

do not run the full scoring engine.

Return a deterministic onboarding set:

```text
1. Complete your Profile
2. Try Resume Score
```

The exact ordering may be adjusted according to the user's available Profile data.

This is a dedicated cold-start branch.

---

# 15. Partial Profile + No Activity

If:

```text
Profile incomplete
No module activity
```

recommend:

```text
Complete Profile
```

first.

Then optionally recommend the lowest-friction useful module.

Do not fabricate a highly personalized recommendation from insufficient data.

---

# 16. Partial Profile + Module Activity

If the user has used a module but has an incomplete Profile:

```text
Module Activity
        +
Available Profile data
        ↓
Cold-start / progressive recommendation mode
```

Example:

```text
Resume Score = 45
targetRole missing
```

recommend:

```text
Complete target role
```

before generating role-specific recommendations.

---

# 17. Complete Profile + No Assessment + No Activity

Use the deterministic rule engine.

Primary input:

```text
primaryGoal
```

Secondary inputs:

```text
targetRole
skills
careerExperienceLevel
targetCompanyType
weeklyLearningHours
```

Show:

```text
top goal-aligned module
```

and encourage the user to take Career Assessment.

Example:

```text
Goal:
LAND_A_JOB

Recommendation:
RESUME_SCORE

Secondary:
TAKE_CAREER_ASSESSMENT
```

---

# 18. Complete Profile + No Assessment + Module Activity

Use:

```text
Profile
+
Skill Gap
+
ModuleActivity
```

No LLM call is required.

This allows the system to remain useful without forcing users through Career Assessment.

---

# 19. Complete Profile + Assessment

Use:

```text
Profile
+
SkillGap
+
ModuleActivity
+
CareerAssessment
```

This is the full recommendation mode.

The Assessment contributes:

```text
readinessScore
gaps
suggestedFocusAreas
```

as signals.

It does not directly determine the recommendation.

---

# 20. Goal → Default Module Priority

Seed the rule engine with:

| Primary Goal | Default Priority |
|---|---|
| LAND_A_JOB | RESUME_SCORE → RESUME_BUILD → INTERVIEW_PRACTICE |
| GET_AN_INTERNSHIP | RESUME_BUILD → ROADMAP → INTERVIEW_PRACTICE |
| PREPARE_FOR_INTERVIEW | INTERVIEW_PRACTICE → RESUME_SCORE |
| BUILD_RESUME | RESUME_BUILD → RESUME_SCORE |
| IMPROVE_RESUME | RESUME_SCORE → RESUME_BUILD |
| SWITCH_CAREER | ROADMAP → RESUME_SCORE → INTERVIEW_PRACTICE |
| GET_PROMOTED | ROADMAP → RESUME_SCORE → INTERVIEW_PRACTICE |
| LEARN_NEW_SKILLS | ROADMAP |
| BECOME_JOB_READY | ROADMAP → RESUME_SCORE → INTERVIEW_PRACTICE |
| EXPLORE_CAREERS | ROADMAP |
| OTHER | PROFILE_CLARIFICATION |

These are initial product rules.

Keep them centralized and configurable.

---

# 21. Candidate Generation

The engine should first generate candidates.

Example:

```text
Candidates
├── ROADMAP
├── RESUME_SCORE
├── RESUME_BUILD
├── INTERVIEW_PRACTICE
├── SKILL: Docker
└── ACTION: Career Assessment
```

Do not rank immediately.

Candidate generation and ranking should remain separate.

---

# 22. Candidate Sources

Candidates can originate from:

```text
Goal alignment
Skill gaps
Module results
Assessment signals
Profile completeness
Recency
User behavior
Staleness
```

Each candidate should contain structured evidence.

Example:

```ts
{
  type: "MODULE",
  refId: "ROADMAP",
  signals: {
    goalAlignment: 0.9,
    gapSeverity: 0.8,
    recency: 0.7
  }
}
```

---

# 23. Goal Alignment Score

Normalize:

```text
0.0 → no alignment
1.0 → perfect alignment
```

Example:

```text
LAND_A_JOB + RESUME_SCORE
```

may receive:

```text
1.0
```

while:

```text
LAND_A_JOB + ROADMAP
```

may receive:

```text
0.5
```

The exact values should be centralized in a rule configuration.

---

# 24. Gap Severity Signal

Use the Phase 6.4 Skill Gap Engine:

```text
gapSeverity ∈ [0,1]
```

A larger skill gap should generally increase:

```text
ROADMAP
SKILL
```

candidate priority.

Do not automatically increase every module's priority.

---

# 25. Resume Score Logic

Boost:

```text
RESUME_SCORE
```

when:

- User wants a job.
- User wants an internship.
- User wants to improve their resume.
- User has not recently run Resume Score.
- Target role exists.
- Resume exists.

If the user has no resume, do not recommend Resume Score as if a valid resume is available.

Instead:

```text
RESUME_BUILD
```

may become the more appropriate candidate.

---

# 26. Resume Build Logic

Boost:

```text
RESUME_BUILD
```

when:

- User has no current resume.
- Resume Score is low.
- User wants to build a resume.
- User wants an internship/job.
- Resume is stale relative to target role.

Example:

```text
Resume Score = 35
        ↓
RESUME_BUILD candidate
```

---

# 27. Interview Practice Logic

Boost:

```text
INTERVIEW_PRACTICE
```

when:

- User's skill gap is relatively low.
- User is preparing for interviews.
- User has completed relevant roadmap phases.
- User has not recently practiced.
- Resume/career foundation is sufficiently developed.

Do not recommend interview practice solely because the user has a high skill gap.

---

# 28. Roadmap Logic

Boost:

```text
ROADMAP
```

when:

- User wants to learn skills.
- User is switching careers.
- User has a significant skill gap.
- User is becoming job ready.
- User has no structured learning path.
- Assessment identifies major development gaps.

---

# 29. Roadmap Phase Completion Signal

When a user completes a roadmap phase:

```text
Roadmap Phase Completed
        ↓
ModuleActivity / Roadmap activity
        ↓
INTERVIEW_PRACTICE candidate
```

The Interview module should later receive:

```text
completed phase topics
targetRole
careerExperienceLevel
```

This is one of the most important inter-module recommendation flows.

The Recommendation Engine decides:

```text
recommend interview
```

while the Interview module decides:

```text
what interview/questions to create
```

---

# 30. Roadmap → Interview Context

The recommendation candidate should be able to contain context:

```json
{
  "module": "INTERVIEW_PRACTICE",
  "context": {
    "source": "ROADMAP_PHASE_COMPLETION",
    "roadmapId": "...",
    "phaseId": "...",
    "topics": [
      "React",
      "Node.js",
      "REST APIs"
    ]
  }
}
```

Do not duplicate the roadmap content into the Recommendation record if the existing architecture allows referencing the roadmap phase.

Use references where possible.

---

# 31. Assessment Signal

Career Assessment may provide:

```text
readinessScore
gaps
suggestedFocusAreas
```

Use these to modify deterministic candidate scores.

Example:

```text
Assessment gap:
Backend development

Target role:
Full Stack Developer

        ↓

ROADMAP score increases
```

The Assessment does not directly return:

```text
"Use Roadmap."
```

---

# 32. Assessment Staleness

Only use a Career Assessment as a strong signal when:

```text
assessment.profileVersion === profile.profileVersion
```

If stale:

```text
assessment signal weight → reduced / zero
```

The engine should still function using:

```text
Profile
+
SkillGap
+
ModuleActivity
```

---

# 33. Recommendation Scoring

Use a normalized candidate scoring formula.

Recommended conceptual model:

```text
score =
    W1 * goalAlignment
  + W2 * gapSignal
  + W3 * moduleResultSignal
  + W4 * recencySignal
  + W5 * assessmentSignal
  + W6 * profileSignal
  + W7 * behavioralSignal
```

The exact weights should be centralized.

Do not scatter magic numbers throughout the code.

---

# 34. Recommended Initial Weights

Start with:

```text
goalAlignment       = 0.25
gapSignal           = 0.20
moduleResultSignal  = 0.20
recencySignal       = 0.10
assessmentSignal    = 0.10
profileSignal       = 0.10
behavioralSignal    = 0.05
```

Total:

```text
1.00
```

These are initial product heuristics, not statistically optimized weights.

They should be easy to tune later.

---

# 35. Score Components

Every score component should be:

```text
0.0 → 1.0
```

before applying weights.

This makes the system explainable.

Example:

```text
goalAlignment = 0.9
gapSignal = 0.8
```

rather than arbitrary values such as:

```text
goalAlignment = 87
gapSignal = 42
```

---

# 36. Recency Signal

Recommendations should avoid repeatedly showing the same module.

Conceptually:

```text
recently used
    ↓
lower score

not recently used
    ↓
higher score
```

The exact decay should be centralized.

---

# 37. Module Recency

Use ModuleActivity timestamps.

Example:

```text
Interview Practice:
used yesterday
```

should receive a lower recency score than:

```text
Interview Practice:
not used in 30 days
```

Do not completely suppress a module solely because it was used recently.

---

# 38. Module Result Signal

Recent poor results should increase follow-up recommendations.

Example:

```text
Resume Score = 35
```

creates:

```text
RESUME_BUILD
moduleResultSignal = high
```

A strong result should reduce the need to immediately repeat the same module.

---

# 39. Good Result Diversification

If:

```text
Resume Score = 90
```

do not immediately recommend:

```text
Resume Score
```

again.

Instead diversify toward:

```text
INTERVIEW_PRACTICE
ROADMAP
```

depending on the user's goal and gap.

---

# 40. Bad Result Thresholds

Use centralized thresholds.

Recommended initial values:

```text
0–49   → poor
50–69  → needs improvement
70–84  → good
85–100 → strong
```

These are product heuristics.

Do not present them as universal standards.

---

# 41. Skill Gap Candidate

When gap severity is high, generate skill candidates from:

```text
missingSkills
underqualifiedSkills
```

Sort by:

```text
importance
+
deficit
```

Do not expose every missing skill.

---

# 42. Skill Candidate Limit

The engine may calculate all skill gaps.

For user-facing recommendations:

```text
maximum 3 skill candidates
```

This prevents:

```text
10 missing skills
```

from becoming:

```text
10 recommendations
```

---

# 43. Large Gap Strategy

If:

```text
gapSeverity >= 0.7
```

prefer:

```text
ROADMAP
```

over a long list of individual skill recommendations.

The user needs structure rather than a wall of deficiencies.

---

# 44. Moderate Gap Strategy

For:

```text
0.3 <= gapSeverity < 0.7
```

a mixture of:

```text
ROADMAP
+
top SKILL
+
MODULE
```

may be appropriate.

The exact candidate selection remains goal-dependent.

---

# 45. Low Gap Strategy

If:

```text
gapSeverity < 0.3
```

and the user has completed foundational work:

```text
INTERVIEW_PRACTICE
RESUME_SCORE
```

may receive higher priority.

This is particularly useful for job-seeking users.

---

# 46. Profile Clarification

When the Profile contains meaningful contradictions or insufficient context, create:

```text
PROFILE_CLARIFICATION
```

rather than guessing.

Example:

```text
currentStatus = EMPLOYED
primaryGoal = LAND_A_JOB
```

If the engine cannot confidently determine whether the user is:

```text
job hunting
career switching
seeking promotion
```

surface:

```text
Clarify your current career situation
```

---

# 47. Profile Clarification Must Not Become a Dead End

A clarification recommendation should contain a specific action.

Example:

```text
"Are you looking for a new job while currently employed?"
```

Do not simply say:

```text
"Your profile is unclear."
```

---

# 48. Profile Completeness Gating

Some candidates require specific Profile fields.

Examples:

```text
ROADMAP
targetRole or exploration goal

INTERVIEW_PRACTICE
targetRole / experience context

RESUME_SCORE
resume artifact

RESUME_BUILD
basic identity + career information
```

A candidate should receive:

```text
profileSignal = 0
```

or be filtered out if required context is missing.

---

# 49. Recommendation Eligibility

Before scoring, apply hard eligibility filters.

Example:

```text
RESUME_SCORE
requires current resume

INTERVIEW_PRACTICE
requires sufficient interview context

ROADMAP
requires target goal/context

SKILL
requires target role
```

Do not score obviously invalid candidates.

---

# 50. Candidate Filtering

Recommended pipeline:

```text
Generate candidates
        ↓
Eligibility filter
        ↓
Staleness filter
        ↓
Dismissal/cooldown filter
        ↓
Score
        ↓
Diversity
        ↓
Top 3
```

This is preferable to scoring everything and trying to repair the result later.

---

# 51. Completed Recommendation Suppression

If the user has recently completed a recommendation:

```text
status = COMPLETED
```

suppress the same candidate temporarily.

Do not suppress it forever.

A completed module may become relevant again later.

---

# 52. Dismissed Recommendation Suppression

If the user repeatedly dismisses a candidate type:

```text
DISMISSED
```

reduce its future priority.

Example:

```text
3+ dismissals
```

may trigger a cooldown.

The exact threshold should be configurable.

---

# 53. Dismissal Cooldown

Recommended initial cooldown:

```text
7 days
```

for repeated dismissal of the same candidate.

Do not permanently suppress the module.

---

# 54. Behavioral Signal

Use dismissal history as a small ranking signal.

For example:

```text
repeatedly dismissed
    ↓
lower score

accepted/completed
    ↓
neutral or positive depending on recency
```

Do not allow behavioral history to completely override strong career signals.

---

# 55. Single-Module Fixation

Detect if one module dominates recent usage.

Example:

```text
Interview Practice
5 times in 7 days
```

This may indicate:

```text
strong engagement
```

or:

```text
avoidance of another module
```

The engine cannot reliably distinguish these.

Therefore:

```text
keep recommending the preferred module when justified
+
maintain a small diversity floor
```

---

# 56. Diversity Rule

For the top 3 recommendations:

Do not allow all 3 to be identical module types unless the system has no meaningful alternative.

Example:

```text
1. Interview Practice
2. Interview Practice
3. Interview Practice
```

is undesirable.

Prefer:

```text
1. Interview Practice
2. Resume Score
3. Roadmap
```

when those candidates are sufficiently relevant.

---

# 57. Top Recommendation

The engine should produce:

```text
primaryRecommendation
```

plus:

```text
secondaryRecommendations[]
```

Maximum:

```text
3
```

user-facing recommendations.

---

# 58. Recommendation Priority

After sorting by score:

```text
priority 1 = highest
priority 2 = second
priority 3 = third
```

Persist this value.

Do not use priority as the only ranking signal.

The raw score should also be stored for debugging/tuning.

---

# 59. Recommendation Generation

Create a dedicated service:

```text
RecommendationEngine
├── buildContext()
├── generateCandidates()
├── filterCandidates()
├── scoreCandidates()
├── applyDiversity()
├── rankCandidates()
└── persistRecommendations()
```

Keep the individual stages separate.

---

# 60. Context Builder

Create:

```text
RecommendationContextBuilder
```

It should gather:

```text
Profile
Profile completeness
Skill Gap
Latest Assessment
ModuleActivity
Recommendation history
```

The engine should receive one structured context object.

---

# 61. Recommendation Context

Conceptually:

```ts
type RecommendationContext = {
  profile: ProfileContext;
  profileCompleteness: ProfileCompleteness;
  skillGap?: SkillGapAnalysis;
  assessment?: CareerAssessmentSignal;
  moduleActivity: ModuleActivity[];
  recommendationHistory: RecommendationHistory[];
};
```

Do not pass Prisma models directly throughout the scoring layer if DTO/domain types are already used by the project.

---

# 62. Candidate Type

Define a structured candidate type.

Example:

```ts
type RecommendationCandidate = {
  type: RecommendationType;
  refId: string;

  signals: {
    goalAlignment: number;
    gapSignal: number;
    moduleResultSignal: number;
    recencySignal: number;
    assessmentSignal: number;
    profileSignal: number;
    behavioralSignal: number;
  };

  score: number;

  reason: string;
  context?: Record<string, unknown>;
};
```

---

# 63. Reason Generation

Use deterministic templates first.

Examples:

### Roadmap

```text
Your target role has several skill gaps. A structured roadmap can help you address them systematically.
```

### Resume Score

```text
Your current goal is to land a job, and reviewing your resume is a useful next step before applying.
```

### Resume Build

```text
Your latest resume score indicates that your resume could benefit from a stronger rebuild.
```

### Interview

```text
You have completed the relevant learning phase. Practicing these topics in an interview can validate your understanding.
```

---

# 64. Assessment-Enriched Reason

If a valid Assessment exists, the reason may be enriched.

Example:

```text
Your assessment identified backend development as a key gap for your target role. A structured roadmap can help you build those skills.
```

Do not copy large chunks of the Assessment narrative.

---

# 65. Recommendation Explanation

Every recommendation should be explainable through structured signals.

Example internal explanation:

```json
{
  "goalAlignment": 0.9,
  "gapSignal": 0.8,
  "moduleResultSignal": 0.2,
  "recencySignal": 0.9,
  "assessmentSignal": 0.7
}
```

This can later power:

```text
"Why this recommendation?"
```

Do not expose raw scoring internals to users in the MVP.

---

# 66. LLM Assessment Integration

Use the latest valid Assessment.

If:

```text
assessment.profileVersion === profile.profileVersion
```

then:

```text
assessmentSignal > 0
```

Otherwise:

```text
assessmentSignal = 0
```

The Recommendation Engine must remain fully functional without Assessment.

---

# 67. Assessment Signal Mapping

Recommended initial mapping:

```text
readinessScore
```

should not directly map to one module.

Instead use:

```text
gaps
suggestedFocusAreas
```

to increase relevant candidate signals.

Example:

```text
Assessment gap:
System Design

Target role:
Software Engineer

        ↓

ROADMAP / SKILL candidates increase
```

---

# 68. Module Result + Assessment

If the two signals conflict:

```text
Resume Score = 35
Assessment says profile is strong
```

the fresh first-party module result should generally carry more weight for the immediate next action.

This is why:

```text
moduleResultSignal
```

has a higher initial weight than:

```text
assessmentSignal
```

---

# 69. Staleness

Recommendations themselves can become stale.

Recommended behavior:

```text
old recommendation
+
unchanged inputs
+
time passed
        ↓
lower confidence
```

Do not indefinitely replay identical recommendations.

---

# 70. Recommendation Freshness

Use a recency/freshness mechanism.

Recommended initial threshold:

```text
30 days
```

After that, the engine should regenerate recommendations rather than simply returning the old set.

The exact threshold should be centralized.

---

# 71. Profile Change Invalidation

When meaningful Profile data changes:

```text
profileVersion++
```

Recommendations based on old career context should be considered stale.

Examples:

```text
targetRole changed
primaryGoal changed
skills changed
careerExperienceLevel changed
```

The engine should regenerate recommendations immediately or on the next recommendation request.

---

# 72. Goal Change

A primary goal change is a major recommendation reset.

Example:

```text
LAND_A_JOB
        ↓
SWITCH_CAREER
```

Previous goal-specific recommendations should be deprioritized.

Do not wait for the old recommendation set to expire.

---

# 73. Target Role Change

Example:

```text
Software Engineer
        ↓
Data Scientist
```

should invalidate/deprioritize recommendations based on:

```text
old role skill gaps
old resume target
old assessment
```

The engine should use the new target role.

---

# 74. Assessment Staleness After Profile Change

If:

```text
assessment.profileVersion < profile.profileVersion
```

then:

```text
assessmentSignal = 0
```

and optionally generate:

```text
TAKE_CAREER_ASSESSMENT
```

as a low/medium priority action.

Do not make retaking Assessment the top recommendation unless it is genuinely useful.

---

# 75. All Modules Completed

If all four modules have been completed recently and there are no obvious next steps:

Do not return:

```text
[]
```

as the only outcome.

Enter:

```text
maintenance mode
```

---

# 76. Maintenance Mode

Possible candidates:

```text
RESUME_SCORE
INTERVIEW_PRACTICE
ROADMAP
SKILL
```

Examples:

```text
Re-run Resume Score after a target-role change.
Attempt a harder interview.
Explore another target role.
Review a newly identified skill gap.
```

Maintenance mode should be deterministic.

---

# 77. Maintenance Mode Timing

Do not immediately recommend repeating a recently completed module with a good result.

Use a reasonable time gap.

Example:

```text
Resume Score:
last completed 45 days ago
```

may become eligible again.

---

# 78. Resume Staleness

If:

```text
targetRole changed
```

previous Resume Score/Build activity may become stale.

The Recommendation Engine should increase:

```text
RESUME_SCORE
```

or:

```text
RESUME_BUILD
```

depending on whether a resume exists and its quality.

---

# 79. Interview Difficulty Progression

If the user repeatedly performs well in Interview Practice:

```text
difficulty ↑
```

A recommendation can contain:

```text
context:
{
  difficulty: "HARD"
}
```

Do not create new Interview questions inside the Recommendation Engine.

The Interview module remains responsible for session generation.

---

# 80. Weekly Learning Capacity

Use:

```text
weeklyLearningHours
```

to control recommendation volume and learning intensity.

For example:

```text
5 hours/week
```

should not generate:

```text
10 large learning tasks
```

---

# 81. Recommendation Workload

Each Skill/Action candidate may have:

```text
estimatedHours
```

from RoleSkillMap or module metadata.

Use this later to avoid overloading the user.

Recommended initial rule:

```text
total recommended learning effort
≈ weeklyLearningHours × 2
```

for a roughly two-week runway.

This should be treated as a soft cap.

---

# 82. Recommendation Count

Return at most:

```text
3
```

recommendations.

Do not overwhelm the dashboard.

Recommended:

```text
1 primary
2 secondary
```

---

# 83. Recommendation Generation Timing

Do not run the engine on every page render if the recommendations are persisted.

Preferred:

```text
Profile change
      ↓
invalidate/regenerate

Module completion
      ↓
regenerate

Assessment completion
      ↓
regenerate

Recommendation request
      ↓
return valid current set
```

---

# 84. Background Jobs

Do NOT introduce Trigger.dev solely for basic recommendation scoring.

The engine is deterministic and fast.

Use synchronous execution when:

```text
Profile changed
Module completed
Assessment completed
```

If future recommendation generation becomes expensive, it can be moved into a background task.

---

# 85. Recommendation Regeneration

Create:

```text
RecommendationService
```

with:

```text
generateForUser()
refreshForUser()
getCurrentRecommendations()
acceptRecommendation()
dismissRecommendation()
completeRecommendation()
```

---

# 86. Recommendation Persistence Strategy

When generating a new recommendation set:

1. Retrieve current context.
2. Generate candidates.
3. Filter.
4. Score.
5. Rank.
6. Apply diversity.
7. Mark previous PENDING recommendations as superseded/stale if required.
8. Persist the new top recommendations.

Do not delete historical ACCEPTED/COMPLETED/DISMISSED records.

---

# 87. Recommendation History

Historical records should remain available for behavioral analysis.

Example:

```text
Recommendation
  ↓
DISMISSED

new Recommendation
  ↓
same type
  ↓
lower behavioral score
```

Do not use history only for display.

---

# 88. Current Recommendation Set

The application needs a way to identify the current recommendations.

Possible approaches:

```text
generatedAt + status
```

or:

```text
recommendationSetId
```

Recommended for the MVP:

```text
RecommendationSet
```

may be introduced if multiple recommendations need to be treated as one generated batch.

If the existing architecture already has a recommendation-set concept, reuse it.

---

# 89. RecommendationSet

If implemented:

```prisma
model RecommendationSet {
  id        String   @id @default(cuid())
  userId    String
  createdAt DateTime @default(now())
  reason    String?

  recommendations Recommendation[]
}
```

Each Recommendation belongs to one generated set.

This makes it possible to:

```text
regenerate
compare
audit
```

sets without deleting history.

---

# 90. Recommendation Set Source

A set can store:

```text
RULE_ENGINE
HYBRID
PROFILE_UPDATE
MODULE_COMPLETION
ASSESSMENT_COMPLETION
SCHEDULED_REFRESH
```

This helps debugging and analytics.

---

# 91. API

Recommended:

```text
GET /api/recommendations
POST /api/recommendations/refresh
PATCH /api/recommendations/:id
```

If the existing project prefers route handlers with different conventions, follow those conventions.

---

# 92. GET Recommendations

Behavior:

```text
Authenticate
    ↓
Check whether current recommendations are fresh
    ↓
If fresh → return
If stale → regenerate
    ↓
Return top 3
```

The client should not implement scoring.

---

# 93. Refresh Recommendations

```text
POST /api/recommendations/refresh
```

should:

```text
Authenticate
    ↓
Generate current recommendations
    ↓
Persist
    ↓
Return result
```

Protect against excessive refreshes.

---

# 94. Accept Recommendation

When user accepts:

```text
status = ACCEPTED
```

This should be a lightweight mutation.

Do not regenerate the entire recommendation set merely because a user accepted one item unless the product needs it.

---

# 95. Dismiss Recommendation

When user dismisses:

```text
status = DISMISSED
```

Store the event.

Future generation will use it as a behavioral signal.

---

# 96. Complete Recommendation

When the user completes the recommended action:

```text
status = COMPLETED
```

The corresponding module should also produce its own ModuleActivity.

Example:

```text
Recommendation
RESUME_BUILD
        ↓
COMPLETED

ModuleActivity
RESUME_BUILD
        ↓
COMPLETED
```

Do not rely solely on the Recommendation record to track actual module completion.

---

# 97. Module Completion Correlation

Where possible, module completion should mark the corresponding recommendation as completed.

Example:

```text
Interview completed
        ↓
Find accepted/pending INTERVIEW_PRACTICE recommendation
        ↓
mark COMPLETED
```

This should be implemented carefully to avoid incorrectly completing unrelated recommendations.

---

# 98. Recommendation → Module Context

A module recommendation may include context.

Examples:

### Roadmap

```json
{
  "module": "ROADMAP",
  "context": {
    "targetRole": "Full Stack Developer"
  }
}
```

### Interview

```json
{
  "module": "INTERVIEW_PRACTICE",
  "context": {
    "source": "ROADMAP_PHASE_COMPLETION",
    "roadmapId": "...",
    "phaseId": "...",
    "topics": ["React", "Node.js"]
  }
}
```

### Skill

```json
{
  "type": "SKILL",
  "refId": "Docker",
  "context": {
    "requiredProficiency": "BASIC"
  }
}
```

---

# 99. Context Storage

Do not duplicate large artifacts into Recommendation records.

Store only the minimum context required to launch the action.

Prefer:

```text
roadmapId
phaseId
```

over:

```text
entire roadmap JSON
```

The module can retrieve the referenced artifact.

---

# 100. Recommendation Launching

The UI should be able to translate:

```text
type
+
refId
+
context
```

into a CTA.

Examples:

```text
ROADMAP
→ Generate Roadmap

RESUME_SCORE
→ Score Resume

RESUME_BUILD
→ Build Resume

INTERVIEW_PRACTICE
→ Start Interview

TAKE_CAREER_ASSESSMENT
→ Take Assessment
```

Do not hardcode navigation logic inside the scoring engine.

---

# 101. Recommendation UI Contract

The API should return:

```json
{
  "id": "rec_123",
  "type": "MODULE",
  "refId": "ROADMAP",
  "priority": 1,
  "reason": "Your target role has several skill gaps...",
  "status": "PENDING",
  "context": {
    "targetRole": "Full Stack Developer"
  }
}
```

The frontend renders the recommendation.

---

# 102. Why Recommendation Is Explainable

A recommendation must be traceable to signals such as:

```text
Goal
Skill gap
Module result
Recency
Assessment
Profile
Behavior
```

For debugging, optionally persist:

```text
scoreBreakdown
```

as JSON.

Example:

```json
{
  "goalAlignment": 0.9,
  "gapSignal": 0.8,
  "moduleResultSignal": 0.2,
  "recencySignal": 0.7,
  "assessmentSignal": 0.6,
  "profileSignal": 1,
  "behavioralSignal": 0.5
}
```

This is highly recommended for tuning the engine.

---

# 103. Score Breakdown Storage

If stored, treat it as diagnostic metadata.

Do not make future business logic depend on the exact historical score breakdown.

The engine may change weights later.

---

# 104. Deterministic Reproducibility

Given identical:

```text
Profile
SkillGap
Assessment
ModuleActivity
RecommendationHistory
configuration
```

the engine should produce the same candidate ranking.

Avoid random recommendation selection.

---

# 105. Configuration

Centralize:

```text
goal priorities
scoring weights
result thresholds
cooldowns
freshness thresholds
diversity rules
maximum recommendations
```

Recommended:

```text
recommendation.config.ts
```

or the project's existing configuration structure.

---

# 106. Do Not Hardcode Rules in UI

Incorrect:

```tsx
if (goal === "LAND_A_JOB") {
  showResumeScore();
}
```

The frontend should simply consume:

```text
GET /api/recommendations
```

and render the returned result.

---

# 107. No Direct LLM Recommendation

Never implement:

```text
LLM output:
{
  "recommendedModule": "ROADMAP"
}
```

as the final decision.

If the model produces such information internally, ignore it for module selection.

The engine's deterministic ranking remains authoritative.

---

# 108. Career Assessment Narrative

The LLM-generated narrative can be used to enrich the recommendation reason.

Example:

```text
Assessment:
"Backend development is your largest gap."

Recommendation:
"Your assessment identified backend development as a major gap. A structured roadmap can help you build those skills."
```

The engine should still have a deterministic candidate:

```text
ROADMAP
```

before the narrative is applied.

---

# 109. Recommendation Generation Cases

The engine must support the following:

## Case 1

```text
Complete Profile
→ Assessment
→ Recommendation
```

Use:

```text
Profile
+
SkillGap
+
Assessment
+
Activity
```

---

## Case 2

```text
Complete Profile
→ No Assessment
→ Uses Module
```

Use:

```text
Profile
+
SkillGap
+
Activity
```

---

## Case 3

```text
Uses Module
→ Partial Profile
```

Use:

```text
Module result
+
available Profile
```

and progressively request missing Profile data.

---

## Case 4

```text
Uses Module
→ Complete Profile
→ No Assessment
```

Use:

```text
Rule Engine
```

---

## Case 5

```text
Uses Module
→ Complete Profile
→ Assessment
```

Use:

```text
Full Hybrid Engine
```

---

# 110. Returning User

If:

```text
Profile unchanged
Recommendations old
```

do not simply replay forever.

After the freshness threshold:

```text
regenerate
```

even if the inputs are unchanged.

This prevents stale recommendations from appearing indefinitely.

---

# 111. Profile Changed

If:

```text
profileVersion changed
```

regenerate recommendations.

Do not continue displaying recommendations based on old career goals.

---

# 112. Module Completed

When a module completes:

```text
regenerate recommendations
```

This is one of the highest-value triggers.

Example:

```text
Roadmap Phase completed
        ↓
Interview recommendation
```

---

# 113. Assessment Completed

When a new Career Assessment is completed:

```text
regenerate recommendations
```

The new assessment becomes an input signal.

---

# 114. Recommendation Dismissed

When dismissed:

```text
do not necessarily regenerate immediately
```

The frontend may remove it from the current UI.

On the next recommendation refresh:

```text
dismissal history
```

affects ranking.

---

# 115. Recommendation Accepted

Acceptance should not automatically mean:

```text
COMPLETED
```

The user has only chosen the recommendation.

Keep:

```text
ACCEPTED
```

until the underlying action is completed.

---

# 116. No Good Candidate

If no candidate meets the minimum score:

Do not return misleading recommendations.

Possible fallback:

```text
Complete Profile
```

or:

```text
Take Career Assessment
```

depending on state.

If everything is completed:

```text
maintenance mode
```

---

# 117. Minimum Candidate Score

Use a configurable minimum.

Example:

```text
minimumScore = 0.35
```

Candidates below the threshold are filtered.

Do not expose the threshold to users.

---

# 118. Recommendation Safety

The engine should never recommend:

```text
actions unsupported by Elev8
```

Candidate generation must be limited to known:

```text
modules
actions
skills
```

No arbitrary LLM-generated action names.

---

# 119. Testing — Cold Start

- [ ] Empty Profile returns onboarding guidance.
- [ ] Partial Profile does not generate unsupported personalization.
- [ ] Profile completion CTA is available.
- [ ] Resume Score can be recommended only when a resume exists.
- [ ] No Assessment is required for basic recommendations.

---

# 120. Testing — Goal Rules

Test at least:

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
```

Ensure the expected default priority is respected unless stronger signals override it.

---

# 121. Testing — Skill Gap

- [ ] High gap increases Roadmap priority.
- [ ] Low gap does not automatically create excessive Skill recommendations.
- [ ] Top gaps are capped.
- [ ] Missing target role is handled.
- [ ] Unsupported role is handled.

---

# 122. Testing — Module Results

- [ ] Low Resume Score boosts Resume Build.
- [ ] High Resume Score reduces immediate Resume Score repetition.
- [ ] Roadmap phase completion can create Interview candidate.
- [ ] Repeated strong Interview results can increase harder Interview context.
- [ ] Module activity affects recency.

---

# 123. Testing — Assessment

- [ ] Valid current Assessment affects scoring.
- [ ] Stale Assessment is ignored/reduced.
- [ ] Assessment does not directly select modules.
- [ ] Recommendation generation works without Assessment.

---

# 124. Testing — Behavior

- [ ] Repeated dismissal lowers candidate priority.
- [ ] Dismissal cooldown works.
- [ ] Single-module fixation does not completely dominate all recommendations.
- [ ] Diversity rules work.
- [ ] Completed recommendations are suppressed appropriately.

---

# 125. Testing — Freshness

- [ ] Fresh recommendations are reused.
- [ ] Old recommendations regenerate.
- [ ] Profile changes trigger fresh recommendations.
- [ ] Goal changes reset priority.
- [ ] Target role changes invalidate old role-specific signals.

---

# 126. Testing — Maintenance Mode

- [ ] All modules completed does not produce an empty dead end.
- [ ] Old modules can become eligible again.
- [ ] Harder Interview Practice can be recommended after strong performance.
- [ ] Resume Score can become eligible after sufficient time/staleness.
- [ ] Career exploration can be suggested when appropriate.

---

# 127. Testing — Security

- [ ] Users can only retrieve their own recommendations.
- [ ] Users cannot mutate another user's recommendation.
- [ ] Recommendation context does not expose another user's artifacts.
- [ ] Recommendation refresh uses authenticated user context.

---

# 128. Acceptance Criteria

Phase 6.5 is complete when:

- [ ] Recommendation entity exists.
- [ ] Recommendation status exists.
- [ ] Recommendation type exists.
- [ ] Recommendation source exists.
- [ ] ModuleActivity is consumed.
- [ ] Profile completeness is consumed.
- [ ] SkillGap is consumed.
- [ ] Career Assessment is consumed when valid.
- [ ] Goal-based candidate generation exists.
- [ ] Candidate eligibility filtering exists.
- [ ] Deterministic scoring exists.
- [ ] Score weights are centralized.
- [ ] Recommendation reasons are generated.
- [ ] Recommendations are explainable.
- [ ] Top 3 recommendations are returned.
- [ ] Diversity rules exist.
- [ ] Dismissal behavior exists.
- [ ] Completion behavior exists.
- [ ] Freshness/staleness exists.
- [ ] Profile changes trigger updated recommendations.
- [ ] Module completion triggers updated recommendations.
- [ ] Assessment completion triggers updated recommendations.
- [ ] Maintenance mode exists.
- [ ] Cold-start behavior exists.
- [ ] Partial-profile behavior exists.
- [ ] No LLM directly selects modules.
- [ ] No Trigger.dev dependency is required.
- [ ] Recommendation API exists.
- [ ] Recommendation UI can consume the API.
- [ ] TypeScript passes.
- [ ] Lint passes.
- [ ] Production build succeeds.
- [ ] Tests pass.

---

# 129. Out of Scope

Do NOT implement:

- Advanced machine-learning ranking
- Collaborative filtering
- Embedding-based recommendations
- External job-market recommendation models
- A/B testing framework
- Recommendation analytics dashboard
- Automatic role discovery with LLM
- LLM-generated module decisions
- Complex recommendation personalization models
- Trigger.dev-based recommendation generation
- External labor-market APIs

The MVP should remain deterministic and explainable.

---

# Final Architecture

```text
                           USER
                            │
                            ▼
                         Profile
                            │
                ┌───────────┼────────────┐
                │           │            │
                ▼           ▼            ▼
          Completeness   RoleSkillMap   Activity
                              │            │
                              ▼            │
                          Skill Gap        │
                              │            │
                ┌─────────────┴────────────┘
                │
                ▼
                    Career Assessment
                           │
                           │
                           ▼
                 Recommendation Context
                           │
                           ▼
                Candidate Generation
                           │
                           ▼
                Eligibility Filtering
                           │
                           ▼
                   Deterministic Scoring
                           │
                           ▼
                    Behavioral Signals
                           │
                           ▼
                     Diversity Rules
                           │
                           ▼
                       Top 3
                           │
                           ▼
                  Recommendation Records
                           │
                           ▼
                       Dashboard
                           │
          ┌────────────────┼─────────────────┐
          ▼                ▼                 ▼
       ROADMAP        RESUME MODULE      INTERVIEW
          │                │                 │
          └────────────────┼─────────────────┘
                           ▼
                    ModuleActivity
                           │
                           └──────→ Regenerate
```

## Inter-Module Recommendation Loop

The core Elev8 loop should work as follows:

```text
Profile
   ↓
Recommendation
   ↓
Module
   ↓
Module Result / Completion
   ↓
ModuleActivity
   ↓
Recommendation Engine
   ↓
Next Recommendation
```

Example:

```text
User Profile
   ↓
Goal = LEARN_NEW_SKILLS
   ↓
Recommend ROADMAP
   ↓
User completes Roadmap Phase 1
   ↓
Topics = React + Node.js
   ↓
Recommend INTERVIEW_PRACTICE
   ↓
User performs Interview
   ↓
Interview result = weak backend knowledge
   ↓
ModuleActivity signal
   ↓
Recommend ROADMAP / Node.js skill
   ↓
User improves skills
   ↓
Re-run Interview
```

This feedback loop is the primary mechanism connecting Elev8's modules.

## Implementation Principles

1. **The Recommendation Engine is deterministic-first.**
2. **The LLM provides assessment signals, not final module decisions.**
3. **Every recommendation must be explainable.**
4. **Profile is the central career-context source.**
5. **RoleSkillMap provides deterministic role requirements.**
6. **ModuleActivity provides real user-behavior and result signals.**
7. **Career Assessment provides additional contextual signals.**
8. **Recent first-party module results should carry significant weight.**
9. **Recommendations should never overwhelm the user; cap the visible set at three.**
10. **Diversity prevents a single module from dominating the recommendation stack.**
11. **Dismissals are preference signals, not permanent bans.**
12. **Completed recommendations should eventually become eligible again when context changes.**
13. **Profile and goal changes should invalidate stale recommendations.**
14. **All four Elev8 modules participate in the recommendation loop.**
15. **Roadmap phase completion can trigger targeted Interview recommendations.**
16. **Interview results can feed back into skill/roadmap recommendations.**
17. **Resume Score can trigger Resume Build.**
18. **Strong module results should encourage diversification rather than pointless repetition.**
19. **Weak module results should create deterministic follow-up signals.**
20. **Weekly learning capacity controls recommendation workload, not career-gap severity.**
21. **Cold-start and maintenance-mode states must have explicit behavior.**
22. **The engine must remain useful without Career Assessment.**
23. **Recommendation history is retained for behavioral learning.**
24. **Trigger.dev is not required for MVP recommendation generation.**
25. **The architecture should allow future ML/LLM ranking to be added without replacing the deterministic foundation.**
