# Interview Module — Personalization & Timing Updates

## Objective

Update the existing Interview Module without removing or breaking its current architecture.

Implement:
1. Remove question-count input from the form.
2. Control question count explicitly through the generation prompt/configuration.
3. Add selected Profile fields for personalized interview generation.
4. Add a second setup step for optional Profile personalization.
5. Generate an estimated answer time for every question.
6. Measure actual time spent answering each question.
7. Send estimated and actual times to the existing assessment pipeline.

## 1. Remove Question Count Input

Remove the question-count field completely from the interview creation form.

The user must no longer choose the number of questions.

The backend generation prompt/configuration must explicitly specify the required number of questions and validate the generated count.

Use the existing product requirement/configuration for the interview's question count (approximately 7–12 questions), rather than allowing the LLM or frontend to decide arbitrarily.

## 2. Interview Setup — Step 1

Keep the existing basic inputs:

- Target Role
- Experience Level
- Difficulty
- Interview Type

Follow the application's existing form, validation, and UI conventions.

## 3. Interview Setup — Step 2: Profile Personalization

After Step 1, check the existing Profile completion attribute (`isCompleted` or its current equivalent).

### Profile is complete

If the Profile is complete, ask whether the user wants to use Profile data for a personalized interview.

Example:

> Personalize your interview?
>
> Use your profile information to generate questions based on your career background and experience.
>
> [Use Profile Data] [Skip]

If the user chooses personalization:
- Fetch the Profile server-side for the authenticated user.
- Include the approved Profile fields in generation.

If the user skips:
- Generate using only the Step 1 interview inputs.
- Do not send Profile data unnecessarily.

### Profile is incomplete

If the Profile is incomplete, ask whether the user wants to complete it.

Example:

> Complete your profile to personalize this interview.
>
> [Complete Profile] [Skip]

If the user chooses Complete Profile:
- Redirect to the existing Profile setup flow.
- After successful completion, return to the appropriate interview setup flow according to the existing navigation architecture.

If the user chooses Skip:
- Continue interview generation without Profile personalization.
- Do not block interview creation.

## 4. Profile Data for Personalization

When personalization is enabled, send only:

```ts
profile: {
  currentStatus,
  currentRole,
  yearsOfExperience,
  highestQualification,
  fieldOfStudy,
  primaryGoal,
  targetCompanyType
}
```

The complete generation input should conceptually be:

```ts
{
  targetRole,
  experienceLevel,
  difficulty,
  interviewType,
  profile?: {
    currentStatus,
    currentRole,
    yearsOfExperience,
    highestQualification,
    fieldOfStudy,
    primaryGoal,
    targetCompanyType
  }
}
```

Omit `profile` when the user skips personalization.

Do not send unrelated Profile fields such as name, age, phone number, country, weekly learning hours, or application status flags.

Profile data must be fetched server-side. Never trust Profile data supplied by the client.

## 5. Personalized Interview Generation

Use Profile data to improve:
- Question relevance
- Practical experience relevance
- Expected depth
- Career-transition context
- Behavioral/contextual framing where appropriate

Example:

```text
Current Role: Frontend Developer
Target Role: Full Stack Developer
Years of Experience: 2
Primary Goal: SWITCH_CAREER
```

should allow the LLM to generate questions appropriate to the candidate's existing background and target.

Do not merely repeat Profile information inside questions.

## 6. Explicit Question Count

The generation prompt must explicitly instruct the model to generate the configured number of questions.

Example:

```text
Generate exactly N interview questions.
```

Do not expose this as a user-controlled field.

The structured output must validate the generated count before the artifact is persisted.

## 7. Estimated Time Per Question

Every generated question must include an estimated answer time.

Example:

```json
{
  "id": "q1",
  "question": "Explain how React hooks work.",
  "estimatedTimeSeconds": 120,
  "answer": ""
}
```

The LLM must generate `estimatedTimeSeconds` for every question.

The estimate should reflect the expected time required to understand and reasonably answer the question.

Use appropriate estimates based on question complexity and type.

The backend must validate the field before persisting the generated artifact.

## 8. Interview Artifact

Preserve the existing Interview Artifact architecture.

If the current architecture uses the object-based question structure, extend it rather than reverting to arrays.

Conceptually:

```json
{
  "questions": {
    "q1": {
      "question": "...",
      "estimatedTimeSeconds": 120,
      "answer": "",
      "actualTimeSeconds": null
    }
  }
}
```

Use the actual existing field names/schema where they differ.

Do not create a competing artifact structure.

## 9. Actual Question Time Tracking

Measure how long the user spends answering each question.

Flow:

```text
Question becomes active
        ↓
Timer starts
        ↓
User answers using text or voice
        ↓
User submits/proceeds
        ↓
Timer stops
        ↓
actualTimeSeconds stored
```

The timing implementation must survive React re-renders and must not restart unexpectedly.

## 10. Pause/Resume

The existing Interview pause/resume architecture must remain functional.

Pausing an interview must not incorrectly reset a question's accumulated answer time.

When the interview resumes, timing should continue according to the existing session semantics.

Do not create a separate persistence system solely for timers.

## 11. Text and Voice Input

Both existing input modes must use the same timing mechanism:

- Text input
- Web Speech API voice input

The timer measures the overall time spent answering the question, regardless of input method.

Do not create separate scoring/timing models for text and voice.

## 12. Autosave

Integrate timing into the existing Interview autosave/mutation flow.

A question's persisted data should conceptually include:

```json
{
  "question": "...",
  "answer": "User answer...",
  "estimatedTimeSeconds": 120,
  "actualTimeSeconds": 98
}
```

Use the existing Interview Artifact/Blob persistence architecture.

## 13. Assessment Workflow

Do not change the existing assessment architecture unnecessarily.

When the user requests assessment:

```text
Completed Interview
        ↓
Final Interview Artifact
        ↓
Questions + Answers
        ↓
Estimated Question Times
        ↓
Actual Question Times
        ↓
Existing LLM Assessment Pipeline
        ↓
Question-level Assessment
        ↓
Overall Assessment
```

The assessment input must contain both estimated and actual time for each question.

## 14. Timing as an Assessment Signal

The assessment LLM should consider timing alongside:
- Correctness
- Completeness
- Technical depth
- Relevance
- Clarity
- Difficulty
- Interview type
- Experience level

Do not automatically interpret longer time as poor performance.

Example:

```text
Estimated: 120 seconds
Actual: 300 seconds
```

may indicate the candidate needed more time, but this must be interpreted in context.

Timing is a supporting signal, not the sole scoring criterion.

## 15. Assessment Input Example

Conceptually:

```json
{
  "interview": {
    "targetRole": "Full Stack Developer",
    "experienceLevel": "JUNIOR",
    "difficulty": "MEDIUM",
    "interviewType": "TECHNICAL"
  },
  "questions": {
    "q1": {
      "question": "Explain React state management.",
      "answer": "User answer...",
      "estimatedTimeSeconds": 120,
      "actualTimeSeconds": 145
    }
  }
}
```

Follow the existing Interview Assessment contract and schema rather than introducing a second assessment payload format.

## 16. Validation

Use the existing structured-output validation architecture.

Validate:
- Question count
- Question IDs
- Question text
- `estimatedTimeSeconds`
- Answer fields
- `actualTimeSeconds`
- Interview metadata

Recommended timing constraints:

```text
estimatedTimeSeconds > 0
actualTimeSeconds >= 0
```

Apply sensible upper bounds if consistent with the existing validation architecture.

Never persist malformed LLM output directly.

## 17. Trigger.dev

Do not introduce a new Trigger.dev task for:
- Profile retrieval
- Form validation
- Question timing
- Question-count removal

Timing is a frontend/session concern.

Preserve existing Trigger.dev usage where the current Interview architecture already requires background generation or assessment.

## 18. Security

Only retrieve Profile data for the authenticated user.

Correct flow:

```text
Authenticated User
       ↓
Fetch Profile
       ↓
Select approved fields
       ↓
Construct LLM payload
```

Never accept arbitrary Profile data from the client as authoritative input.

Do not send phone number or phone country code to the LLM.

## 19. Implementation Guidance

Before modifying code:
1. Inspect the current Interview Module architecture.
2. Identify the existing interview creation form and step system.
3. Inspect the Roadmap personalization implementation and reuse compatible patterns.
4. Identify the current Interview Artifact schema.
5. Identify existing autosave behavior.
6. Identify the current assessment payload/schema.
7. Identify the Web Speech API implementation.
8. Integrate timing without disrupting the existing input and pause/resume behavior.
9. Reuse existing services, validation, Blob Storage utilities, authentication, and API patterns.

Do not create parallel implementations when an existing service already provides the required functionality.

## 20. Acceptance Criteria

### Form
- [ ] Question-count input is completely removed.
- [ ] Step 1 collects Target Role, Experience Level, Difficulty, and Interview Type.
- [ ] Step 2 checks Profile completion.
- [ ] Complete Profile allows personalization or skipping.
- [ ] Incomplete Profile allows Profile completion or skipping.
- [ ] Skipping personalization never blocks interview generation.

### Personalization
- [ ] Only the seven approved Profile attributes are used.
- [ ] Profile data is fetched server-side.
- [ ] Personalization follows the existing Roadmap-style approach.
- [ ] Interview generation works correctly without Profile data.

### Questions
- [ ] Question count is controlled by backend prompt/configuration.
- [ ] Generated question count is validated.
- [ ] Every question contains `estimatedTimeSeconds`.
- [ ] Estimated time is validated.

### User Timing
- [ ] Timer starts when a question becomes active.
- [ ] Timer stops when the user submits/proceeds.
- [ ] Text input is timed.
- [ ] Voice input is timed.
- [ ] Pause/resume does not reset timing incorrectly.
- [ ] React re-renders do not restart the timer.
- [ ] Timing is persisted through the existing autosave flow.

### Assessment
- [ ] Assessment receives estimated time per question.
- [ ] Assessment receives actual time per question.
- [ ] Timing is treated as a supporting signal.
- [ ] Existing question-level assessment remains functional.
- [ ] Existing overall assessment remains functional.

### Architecture
- [ ] Existing Interview architecture remains intact.
- [ ] Existing Blob Storage architecture remains intact.
- [ ] Existing Trigger.dev usage remains intact where applicable.
- [ ] No unnecessary background task is introduced.
- [ ] Existing text input remains functional.
- [ ] Existing Web Speech API remains functional.
- [ ] Existing authentication/authorization remains intact.
- [ ] TypeScript passes.
- [ ] Lint passes.
- [ ] Production build passes.
- [ ] Relevant tests pass.

## Final Architecture

```text
INTERVIEW SETUP
      │
      ▼
Step 1:
Target Role
Experience Level
Difficulty
Interview Type
      │
      ▼
Step 2:
Check Profile.isCompleted
      │
      ├── Complete
      │      ↓
      │   Personalize?
      │      ├── Yes → Fetch approved Profile fields
      │      └── No  → Generate without Profile
      │
      └── Incomplete
             ↓
          Complete Profile?
             ├── Yes → Existing Profile flow → return
             └── No  → Generate without Profile
      │
      ▼
INTERVIEW GENERATION
      │
      ├── Interview Inputs
      ├── Optional Profile Context
      ├── Explicit Question Count
      └── Estimated Time Per Question
      │
      ▼
Validated Interview Artifact
      │
      ▼
USER INTERVIEW
      │
      ├── Question displayed
      ├── Timer starts
      ├── Text / Voice answer
      ├── Timer stops
      └── Autosave answer + actual time
      │
      ▼
INTERVIEW COMPLETE
      │
      ▼
ASSESSMENT
      │
      ├── Questions
      ├── Answers
      ├── Estimated Times
      └── Actual Times
      │
      ▼
Existing LLM Assessment Pipeline
      │
      ├── Question-level Assessment
      └── Overall Assessment
```

## Key Decisions

1. No user-controlled question count.
2. Question count is explicitly controlled by backend prompt/configuration.
3. Profile personalization is optional when the Profile is complete.
4. Incomplete Profiles can be completed or skipped without blocking interviews.
5. Only the seven approved Profile attributes are sent for personalization.
6. Every generated question contains an estimated answer time.
7. The frontend measures actual answer time per question.
8. Estimated and actual times are included in assessment.
9. Timing is a supporting assessment signal.
10. The existing Interview architecture must remain intact.
