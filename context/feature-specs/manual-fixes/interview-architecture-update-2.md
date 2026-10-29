# Update Request — Predefined Interview Storage Architecture

## Objective

Update the current Interview Module implementation to use a **database-backed, immutable predefined interview template architecture**.

Do NOT rebuild the Interview Module.

Do NOT remove or replace any currently functioning Interview architecture.

This is an architectural update to the predefined interview system described in Phase 3.7.

---

# 1. Existing Architecture Must Be Preserved

Before making changes:

1. Inspect the existing Interview Module.
2. Read the relevant Interview specifications.
3. Identify the existing:
   - Interview Session model
   - Interview Artifact structure
   - BlobStorageService
   - Autosave implementation
   - Pause/Resume implementation
   - Interview submission flow
   - Trigger.dev assessment workflow
   - Interview Workspace
   - Interview Insights
   - Prisma schema

Reuse existing services and patterns wherever possible.

Do NOT create duplicate implementations.

The existing post-submission assessment architecture must remain unchanged.

---

# 2. New Architecture

There are now two distinct types of interview data:

## A. Interview Template

System-owned and immutable.

```text
InterviewTemplate
        │
        └── templateBlobUrl
                 │
                 ▼
            Vercel Blob
```

The template contains:

- Role
- Interview Type
- Difficulty
- Questions
- Empty answers

Users must never be able to modify this Blob.

---

## B. User Interview Artifact

User-owned and mutable.

```text
InterviewTemplate
        │
        │ clone
        ▼
User Interview Artifact
        │
        ├── User Answers
        ├── Session State
        ├── Progress
        └── Metadata
```

The user-specific artifact is stored as a separate Blob.

The user can modify this artifact through the existing autosave mechanism.

---

# 3. Storage Model

## InterviewTemplate

Create or update the Prisma model to represent predefined interview templates.

Conceptually:

```prisma
model InterviewTemplate {
  id              String   @id
  role            String
  type            String
  difficulty      String
  questionCount   Int
  templateBlobUrl String

  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  interviews      Interview[]
}
```

Adapt this to the existing Prisma conventions and relations.

Do NOT blindly copy this schema if an equivalent existing structure already exists.

---

# 4. Interview Model

The existing Interview model should reference the template when applicable.

Conceptually:

```prisma
model Interview {
  id              String   @id
  userId          String

  templateId      String?
  artifactBlobUrl String

  status          String

  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  template        InterviewTemplate?
}
```

Important:

- `templateId` identifies the source predefined interview.
- `artifactBlobUrl` points to the user's mutable interview artifact.
- The existing Interview fields must be preserved.
- Do not break existing interviews that were not created from a predefined template.

Use a nullable `templateId` if required for backwards compatibility.

---

# 5. Predefined Interview Storage

The 20 predefined interviews must NOT be stored as the primary source in:

```text
predefined-interviews.ts
```

and must NOT rely on static TypeScript objects as the source of truth.

The questions must already be generated and stored before users attempt the interviews.

The source of truth should be:

```text
Prisma
   +
Vercel Blob
```

Prisma stores template metadata.

Blob stores the complete question template.

---

# 6. Template Blob Structure

Each predefined interview must have its own immutable JSON Blob.

Example:

```json
{
  "templateId": "full-stack-developer-medium",
  "role": "Full Stack Developer",
  "type": "TECHNICAL",
  "difficulty": "MEDIUM",

  "questions": {
    "q1": {
      "id": "q1",
      "question": "Explain the difference between SSR and CSR.",
      "answer": "",
      "category": "Web Architecture"
    },

    "q2": {
      "id": "q2",
      "question": "How would you design a REST API?",
      "answer": "",
      "category": "Backend"
    }
  }
}
```

All predefined questions must already exist.

There must be:

- No runtime LLM generation
- No Trigger.dev generation
- No user modification of the template

---

# 7. Template Count

Create exactly:

```text
20 predefined interviews
```

Each interview supports:

```text
EASY
MEDIUM
HARD
```

Each difficulty level contains:

```text
Easy   → 7–8 questions
Medium → 9–10 questions
Hard   → 11–12 questions
```

The exact question counts may vary within these ranges.

---

# 8. Predefined Interview Types

Support:

```text
TECHNICAL
NON_TECHNICAL
BEHAVIORAL
```

The existing planned interview roles should be preserved:

1. Full Stack Developer
2. Frontend Developer
3. Backend Developer
4. Software Engineer
5. Data Scientist
6. Machine Learning Engineer
7. AI Engineer
8. Data Analyst
9. DevOps Engineer
10. Cloud Engineer
11. Cybersecurity Analyst
12. QA / Test Engineer
13. Product Manager
14. Business Analyst
15. UI/UX Designer
16. Digital Marketing Specialist
17. Software Engineer — Behavioral
18. Product Manager — Behavioral
19. General HR / Behavioral
20. Leadership & Management

Ensure the catalog contains a meaningful distribution of Technical, Non-Technical and Behavioral interviews.

---

# 9. Template Generation / Seeding

Create a repeatable seed/setup mechanism for the predefined interview templates.

The seed process should:

1. Create/update the `InterviewTemplate` metadata.
2. Generate the predefined JSON template.
3. Upload the template JSON to Vercel Blob.
4. Store the resulting Blob URL in `InterviewTemplate.templateBlobUrl`.

The process must be idempotent.

Running the seed/setup process again must NOT create duplicate templates or uncontrolled duplicate Blobs.

Use deterministic template IDs.

Example:

```text
full-stack-developer-technical-easy
full-stack-developer-technical-medium
full-stack-developer-technical-hard
```

Use the project's existing naming conventions where applicable.

---

# 10. Blob Immutability

Predefined template Blobs are immutable from the user's perspective.

Users must never be given a Blob URL or API capability that allows them to overwrite the template.

When a user starts an interview:

```text
Template Blob
     ↓
READ
     ↓
Deep Clone
     ↓
User Artifact
     ↓
NEW Blob
```

Never perform an update against the template Blob.

---

# 11. User Interview Creation

When a user selects:

```text
Role
+
Type
+
Difficulty
```

the server should:

1. Validate authentication.
2. Validate profile completion.
3. Find the corresponding `InterviewTemplate`.
4. Retrieve `templateBlobUrl` from Prisma.
5. Fetch the template JSON from Blob.
6. Validate the template.
7. Deep clone the template.
8. Create a new user-specific Interview Artifact.
9. Upload the cloned artifact to a new Blob.
10. Create the Interview Prisma record.
11. Set:

```text
status = READY
```

12. Redirect the user to the existing Interview Session UI.

---

# 12. No Trigger.dev During Session Creation

This is mandatory.

Because predefined interviews already contain their questions:

```text
NO Trigger.dev
NO LLM generation
NO background question generation
```

The creation flow is synchronous:

```text
Select Interview
       ↓
Fetch Template
       ↓
Clone Template
       ↓
Upload User Artifact
       ↓
Create Interview Record
       ↓
status = READY
       ↓
Open Interview
```

The interview must be immediately ready after successful creation.

---

# 13. Trigger.dev Remains for Assessment

Do NOT remove the existing Trigger.dev assessment workflow.

Trigger.dev begins only after the user submits the interview.

```text
User completes interview
        ↓
Submit
        ↓
Existing assessment pipeline
        ↓
Trigger.dev
        ↓
Question Assessment
        ↓
Overall Assessment
        ↓
Existing persistence / Insights workflow
```

Do not change this workflow unless necessary to accommodate the new template/session distinction.

---

# 14. User Artifact

The user-specific artifact should contain:

```json
{
  "interviewId": "interview_123",
  "userId": "user_456",

  "metadata": {
    "role": "Full Stack Developer",
    "type": "TECHNICAL",
    "difficulty": "MEDIUM",
    "source": "PREDEFINED",
    "templateId": "full-stack-developer-technical-medium"
  },

  "questions": {
    "q1": {
      "id": "q1",
      "question": "...",
      "answer": ""
    }
  }
}
```

The user answers mutate this artifact.

The template remains unchanged.

---

# 15. Autosave

Reuse the existing Interview autosave implementation.

When the user answers:

```text
answer = ""
```

becomes:

```text
answer = "User response..."
```

The mutated user artifact is saved to its own Blob.

Do NOT modify the predefined template.

Do NOT create a second autosave system.

---

# 16. Pause & Resume

Reuse the existing pause/resume implementation.

A paused predefined interview must resume from the user's own artifact.

The system must never reconstruct the session from the immutable template after the user has started answering.

---

# 17. Final Submission

When the user submits:

```text
User Interview Artifact
        ↓
Fetch latest artifact
        ↓
Validate
        ↓
Submit to existing assessment workflow
```

The final user-mutated JSON is the input to the assessment.

It must contain:

- Questions
- User answers
- Interview metadata
- User/session identifiers as required by the existing architecture

---

# 18. Template vs User Artifact

Maintain this strict separation:

```text
┌───────────────────────────┐
│ InterviewTemplate         │
│                           │
│ System-owned              │
│ Immutable                 │
│ Pre-written questions     │
│ Empty answers             │
│                           │
│ Blob: TEMPLATE            │
└─────────────┬─────────────┘
              │
              │ clone
              ▼
┌───────────────────────────┐
│ Interview                 │
│                           │
│ User-owned                │
│ Mutable                   │
│ User answers              │
│ Session state              │
│                           │
│ Blob: USER ARTIFACT       │
└───────────────────────────┘
```

---

# 19. Route Protection

The existing requirement remains:

```text
/dashboard/interviews/new
```

must be inaccessible to users who have not completed their profile.

Implement:

```ts
isProfileComplete();
```

as a reusable server-side check.

The check should be applied to:

1. The `/dashboard/interviews/new` route.
2. The interview creation endpoint.

Do not rely only on client-side redirects.

If profile setup is incomplete:

```text
Page → Redirect
API  → 403
```

The profile setup workflow itself is outside the scope of this update.

---

# 20. Existing Interview Compatibility

Do not break existing Interview records.

Existing interviews that do not have:

```text
templateId
```

must continue to work.

Use nullable relationships where necessary.

Do not perform destructive migrations.

Do not migrate existing interview artifacts unless required.

---

# 21. Recommended Folder Structure

Adapt this to the existing project structure rather than duplicating existing directories.

```text
features/interview/

├── data/
│   └── predefined/
│       ├── interview-catalog.ts
│       ├── interview-types.ts
│       ├── interview-roles.ts
│       └── interview-difficulties.ts
│
├── services/
│   ├── predefined-interview.service.ts
│   ├── interview-template.service.ts
│   └── interview-session.service.ts
│
├── types/
│   └── predefined-interview.ts
│
└── validation/
    └── predefined-interview.schema.ts
```

The actual question content should be generated/stored through the database + Blob seeding mechanism, not treated as runtime source code.

---

# 22. Required Services

## `interview-template.service.ts`

Responsibilities:

- Find template
- Retrieve template Blob
- Validate template
- Return immutable template data

---

## `predefined-interview.service.ts`

Responsibilities:

- List available predefined interviews
- Find interview by selection
- Validate role/type/difficulty
- Create user session from template

---

## Existing Session Service

Reuse the existing session service wherever possible.

Do not create a duplicate session implementation.

---

# 23. Template Validation

Create a schema for validating template JSON.

Validate:

- Template ID
- Role
- Type
- Difficulty
- Question count
- Question IDs
- Question text
- Empty answer field
- Required metadata

Example:

```ts
answer: z.literal("");
```

for predefined templates.

This prevents malformed templates from entering the system.

---

# 24. User Artifact Validation

The user artifact should use a separate schema.

The answer must be mutable:

```ts
answer: z.string();
```

Do not reuse the immutable template schema for mutated user artifacts.

---

# 25. Security Requirements

The client must NOT be trusted to provide:

```text
questions
role
type
difficulty
expectedTopics
```

The client should submit only a template identifier or validated selection.

The server retrieves the authoritative template.

The server creates the user artifact.

---

# 26. API Behavior

The interview selection API should conceptually receive:

```ts
{
  templateId: string;
}
```

or the existing equivalent selection format.

The server should derive:

```text
role
type
difficulty
questions
```

from the database-backed template.

Do not accept arbitrary question arrays from the client.

---

# 27. Acceptance Criteria

## Database

- [ ] `InterviewTemplate` model exists.
- [ ] Interview references template where applicable.
- [ ] Existing Interview records remain compatible.
- [ ] No destructive migration.

## Predefined Templates

- [ ] Exactly 20 predefined interviews exist.
- [ ] Questions are pre-generated.
- [ ] Templates exist in Blob Storage.
- [ ] Template metadata exists in Prisma.
- [ ] Every interview has Easy/Medium/Hard.
- [ ] Every difficulty has 7–12 questions.

## Template Integrity

- [ ] Template Blob is never modified by users.
- [ ] Template schema validation works.
- [ ] Template IDs are deterministic.
- [ ] Seeding is idempotent.

## Session Creation

- [ ] Template is fetched from Blob.
- [ ] Template is deep-cloned.
- [ ] New user artifact is created.
- [ ] User artifact receives a new Blob.
- [ ] Interview record references the template.
- [ ] Interview record references the user artifact.
- [ ] Interview status becomes `READY`.
- [ ] No Trigger.dev task is created during session creation.

## User Interaction

- [ ] User can answer questions.
- [ ] Existing autosave works.
- [ ] Existing pause/resume works.
- [ ] Template remains unchanged.
- [ ] User artifact is updated independently.

## Submission

- [ ] Final mutated artifact is submitted.
- [ ] Existing Trigger.dev assessment workflow executes.
- [ ] Existing Question Assessment works.
- [ ] Existing Overall Assessment works.
- [ ] Existing Interview Insights works.

## Security

- [ ] Incomplete profiles cannot access `/dashboard/interviews/new`.
- [ ] Incomplete profiles cannot create interview sessions through the API.
- [ ] Client cannot inject questions.
- [ ] Client cannot modify template Blob.

## Compatibility

- [ ] Existing interviews continue to work.
- [ ] Existing Interview Workspace continues to work.
- [ ] Existing Interview Insights continues to work.
- [ ] Existing Blob persistence continues to work.

## Code Quality

- [ ] No TypeScript errors.
- [ ] No lint errors.
- [ ] Project builds successfully.
- [ ] No duplicate Interview execution architecture.
- [ ] No unnecessary Trigger.dev usage.

# Temporary Question Content

For the current implementation, use **one common placeholder question set across every predefined interview**.

Generate exactly **15 generic placeholder questions** and reuse the same 15 questions for every interview role, type, and difficulty.

Requirements:

- Generate exactly 15 questions once.
- Use the same 15 questions in every predefined interview template.
- Do not create role-specific or type-specific questions yet.
- Do not create different question sets for Easy/Medium/Hard.
- Each question must follow the existing `PredefinedInterviewQuestion` schema.
- Each question must have:
  - `id`
  - `question`
  - `answer: ""`
- Store the same question set inside every predefined interview template.
- The questions are temporary placeholders and will be replaced with properly curated questions later.
- Do NOT use an LLM or Trigger.dev for runtime question generation.
