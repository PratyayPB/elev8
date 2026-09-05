# AI Resume Build — Implementation Specification

## Objective

Add an **AI Resume Build** feature to the existing Resume Builder. The feature generates truthful, job-targeted resume content using the user's completed Profile, mandatory job requirements, and existing resume artifact, then feeds the result into the existing Resume Builder editor/rendering pipeline.

AI generation must run as a **Trigger.dev background job**, following the application's existing AI-generation architecture.

After successful generation, normal Resume Builder behavior remains unchanged: editing, autosave, template switching, live preview, and PDF export.

---

## 1. Existing Architecture to Preserve

Do not rewrite the existing Resume Builder architecture.

```text
ResumeBuild
    ↓
BuilderResumeArtifact
    ↓
JSON Resume Adapter
    ↓
JSON Resume Schema
    ↓
Selected JSON Resume Theme
    ↓
HTML
    ↓
Puppeteer
    ↓
PDF
```

AI Resume Build is an additional content-generation workflow that produces/updates the `BuilderResumeArtifact`. It must not become part of the template-rendering layer.

---

## 2. Entry Point

On:

```text
/dashboard/resumes/builder/[resumeId]
```

add a **Build Resume using AI** button on the left side of the `EditorHeader`.

Clicking it opens the AI Resume Build popup/dialog.

---

## 3. Profile Completion Business Rule

The user **MUST have a completed Profile** to use this feature.

Use:

```text
Profile.isMandatoryCompleted === true
```

as the business-policy gate.

If `isMandatoryCompleted === false`:

- Do not open the AI generation form.
- Notify the user that they must complete their Profile before using AI Resume Build.
- Provide an appropriate path/action to complete the Profile if supported by the existing UI.
- There is **no skip option**.

This is an explicit business policy and must not be relaxed.

---

## 4. AI Resume Build Form

After the Profile completion check passes, display a popup/dialog containing:

### Mandatory

**Target Job Title / Role**

Example:

```text
Senior Software Engineer
```

**Job Description**

The complete job description should be accepted and is mandatory.

### Optional

**Target Company**

Example:

```text
Google
```

**Target Company Type**

Dropdown with options such as:

```text
Startup
Product Company
Consulting
FAANG / Enterprise
Government
Non-Profit
Agency
Other
```

Follow existing project enum conventions and reuse an equivalent enum if one already exists.

### Explicitly removed

Do **not** implement Resume Length Preference.

There must be no `1 page / 2 pages` input, database field, prompt field, or generation logic related to resume length.

---

## 5. Generation Input

The AI generation workflow should use:

```text
Job Requirements
    ├── Target Job Title
    ├── Job Description
    ├── Target Company (optional)
    └── Target Company Type (optional)

+

Completed User Profile

+

Current ResumeBuild / BuilderResumeArtifact
```

The existing artifact is important because users may have manually entered information that is not yet represented in Profile.

The current artifact must be treated as an important source of user-provided facts.

---

## 6. Trigger.dev Background Generation

AI generation must be asynchronous and implemented using **Trigger.dev**, consistent with the application's existing AI-generation tasks.

Conceptual flow:

```text
User
 ↓
Build Resume using AI
 ↓
Validate Profile completion
 ↓
AI Build Form
 ↓
Submit
 ↓
Create/prepare generation request
 ↓
Trigger.dev task
 ↓
LLM
 ↓
Structured response
 ↓
Validate response
 ↓
Persist generated artifact
 ↓
Notify/update client
 ↓
Resume Builder Editor
```

Do not perform the LLM generation directly inside the Next.js request if the existing application already uses Trigger.dev for AI generation.

Reuse existing Trigger.dev patterns for task creation, retries, status handling, and client updates/polling where applicable.

---

## 7. Trigger.dev Task

Create a dedicated Trigger.dev task for AI Resume Build, following existing project naming conventions. A conceptual name is:

```text
build-ai-resume
```

The task should:

1. Receive the `ResumeBuild` ID and/or generation request ID.
2. Verify ResumeBuild ownership.
3. Verify Profile ownership and completion.
4. Retrieve the completed Profile.
5. Retrieve the current resume artifact.
6. Retrieve stored job requirements.
7. Build the LLM input.
8. Call the configured LLM provider.
9. Parse the response.
10. Validate the generated structure.
11. Persist the generated artifact only after successful validation.
12. Update AI generation metadata/status.
13. Allow the client to detect completion or failure using the existing background-job pattern.

Do not create a separate background-job mechanism.

---

## 8. Structured AI Output

The LLM should return structured JSON compatible with the existing `BuilderResumeArtifact`.

Preferred flow:

```text
LLM
 ↓
Structured JSON
 ↓
Zod/schema validation
 ↓
BuilderResumeArtifact
 ↓
Blob Storage
```

Do not trust arbitrary LLM output.

If validation fails:

- Mark generation as failed.
- Preserve the existing resume artifact.
- Do not partially overwrite the user's resume.
- Surface the failure through the existing background-job UX.

---

## 9. Template-Agnostic Generation

Different JSON Resume themes support different sections.

Therefore, AI generation must **not be template-specific**.

Use:

```text
Profile + Job Requirements + Existing Resume
                    ↓
             Complete Resume
                    ↓
          BuilderResumeArtifact
                    ↓
            JSON Resume Adapter
                    ↓
          Selected JSON Resume Theme
```

Generate every **applicable, truthful** section for which source information exists, such as:

```text
Personal Information
Professional Summary
Experience
Education
Projects
Skills
Certifications
Achievements
```

If a section has no truthful data, leave it empty rather than inventing content.

For example:

```json
"certifications": []
```

The selected theme determines which sections are displayed.

---

## 10. No Fabrication Policy

This is a critical system requirement.

The LLM must never invent information merely to match a job description.

### Allowed

The AI may:

- Rewrite existing information professionally.
- Improve grammar.
- Improve bullet-point clarity.
- Reorder information based on relevance.
- Emphasize relevant existing skills.
- Select relevant projects.
- Tailor the professional summary.
- Align terminology with the JD when supported by user data.
- Reorganize existing information without changing its factual meaning.

### Not allowed

The AI must not invent:

- Companies.
- Employment history.
- Job titles.
- Projects.
- Technologies.
- Skills.
- Certifications.
- Degrees.
- Achievements.
- Metrics.
- Responsibilities.
- Years of experience.
- Clients.
- Awards.
- Tools.
- Production systems.
- Domain experience.

Example:

If the JD requires AWS but neither Profile nor existing Resume contains AWS experience, do not add AWS.

If the user has generic cloud experience but does not specify AWS, the AI may emphasize existing cloud experience but must not transform it into fabricated AWS experience.

**Truthfulness has higher priority than keyword matching.**

---

## 11. Job Requirement Matching

The LLM should optimize the resume for the target job as much as truthfully possible.

Consider:

```text
Target Role
Job Description
Target Company
Company Type
Profile
Existing Resume
```

Prioritize relevant:

- Skills.
- Responsibilities.
- Experience.
- Projects.
- Achievements.
- Domain information.
- Seniority signals.
- Terminology.

Never allow job matching to override factual accuracy.

---

## 12. Existing Resume Handling

Treat the current `BuilderResumeArtifact` as a source of user-provided information.

If the resume already contains experience, projects, skills, achievements, etc., preserve and improve relevant information instead of unnecessarily removing it.

Capture the current artifact/version before starting generation.

Do not silently overwrite newer manual edits made while generation is running.

Use the existing optimistic version/concurrency architecture where applicable.

If the artifact changes while the Trigger.dev job is running, handle the conflict safely according to existing Resume Builder concurrency behavior.

---

## 13. Confirmation Before Replacement

If the current resume contains meaningful content, do not silently replace it.

Show a confirmation dialog such as:

```text
Build Resume using AI?

AI will generate new resume content using your Profile, current resume data, and job requirements.

Your current resume content will be replaced by the generated version.

Cancel     Build with AI
```

Follow the application's existing UX style.

The previous artifact should remain recoverable where practical.

At minimum:

- Never replace the artifact until AI generation succeeds.
- Never destroy the old artifact when generation fails.

---

## 14. ResumeBuild Database Changes

Extend the existing `ResumeBuild` model to store AI job requirements and generation metadata.

Conceptually:

```prisma
model ResumeBuild {
  id     String @id @default(cuid())
  userId String
  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)

  title           String
  template        ResumeBuilderTemplate @default(CLASSIC)
  artifactBlobUrl String?
  status          ResumeBuildStatus     @default(DRAFT)

  targetJobTitle    String?
  jobDescription    String?
  targetCompany     String?
  targetCompanyType ResumeCompanyType?

  isAiGenerated   Boolean  @default(false)
  aiGeneratedAt   DateTime?
  aiModel         String?
  aiPromptVersion String?

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([userId])
  @@index([status])
  @@index([createdAt])
  @@map("resume_builds")
}
```

Important:

- `targetJobTitle` and `jobDescription` may remain nullable because non-AI ResumeBuild records can exist without AI job requirements.
- Do not add a resume-length field.
- `isAiGenerated` becomes `true` only after successful generation and persistence.
- Store `aiGeneratedAt`, actual `aiModel`, and `aiPromptVersion` when available.

---

## 15. Company Type Enum

Prefer a Prisma enum rather than an arbitrary string.

Conceptually:

```prisma
enum ResumeCompanyType {
  STARTUP
  PRODUCT_COMPANY
  CONSULTING
  FAANG_ENTERPRISE
  GOVERNMENT
  NON_PROFIT
  AGENCY
  OTHER
}
```

Reuse an existing equivalent enum if the project already has one.

Do not create duplicate enums.

---

## 16. AI Generation Status

If the application already has a reusable Trigger.dev/AI generation status pattern, use it.

Otherwise introduce a minimal state representation such as:

```text
IDLE
GENERATING
COMPLETED
FAILED
```

Do not overload `ResumeBuildStatus` unless that enum is explicitly intended to represent AI generation state.

Resume lifecycle status and AI generation status are separate concepts.

If adding a persistent generation status is necessary, prefer a dedicated field/enum rather than changing the semantics of `DRAFT`, `READY`, or `ARCHIVED`.

---

## 17. Client UX During Generation

After confirmation:

```text
Build with AI
      ↓
Generating...
```

Show a clear loading state.

Possible stages:

```text
Analyzing job requirements
Reviewing your profile
Building resume content
Finalizing resume
```

Only display stage completion if the implementation actually tracks it; otherwise use a generic loading state.

On success:

```text
AI Resume Generated
      ↓
Load generated artifact
      ↓
Populate editor
```

On failure:

```text
AI Resume Build failed.
Your existing resume has not been changed.
```

Follow the existing Trigger.dev/AI generation UX pattern.

---

## 18. Persisting Generated Artifact

After successful generation and validation:

```text
Generated BuilderResumeArtifact
        ↓
Blob Storage
        ↓
ResumeBuild.artifactBlobUrl
```

Update:

```text
isAiGenerated = true
aiGeneratedAt = current timestamp
aiModel = actual model used
aiPromptVersion = actual prompt version
```

Do not mark the build as AI-generated before successful generation and persistence.

---

## 19. Existing Editor Behavior After Generation

Once generation succeeds, the normal Resume Builder takes over:

```text
Generated Artifact
       ↓
Existing Editor
       ├── Edit
       ├── Autosave
       ├── Change Template
       ├── Live Preview
       └── PDF Export
```

Do not create a separate AI-specific editor.

---

## 20. Template Switching

AI generation remains template-agnostic.

Users can switch between all installed JSON Resume themes after generation.

Existing template compatibility behavior remains active:

```text
Selected template
       ↓
supportedSections
       ↓
Compare with populated artifact sections
       ↓
Unsupported populated sections
       ↓
Toast notification
```

AI-generated data must never be deleted because a selected template does not support a section.

---

## 21. Security

The AI generation flow must verify:

- Authenticated user.
- ResumeBuild ownership.
- Profile ownership.
- Profile completion.
- Valid mandatory job inputs.

The Trigger.dev task must perform server-side ownership/security validation rather than trusting client-supplied identifiers.

Never expose another user's Profile or resume data to the LLM.

---

## 22. LLM Prompt Requirements

The system prompt should establish this priority order:

```text
1. Follow the target role and job requirements.
2. Use Profile and existing resume as factual sources.
3. Maximize truthful relevance to the job description.
4. Never fabricate information.
5. Preserve factual accuracy.
6. Produce structured output matching the required schema.
7. Produce a template-agnostic resume artifact.
8. Do not create invented sections/content for completeness.
9. Return only structured JSON.
```

Clearly distinguish:

```text
User facts
vs.
Job requirements
```

The JD describes employer requirements; it does not establish facts about the candidate.

---

## 23. Prompt Versioning

Store the prompt version with each successful AI generation.

Example:

```text
resume-build-v1
```

When materially changing the prompt:

```text
resume-build-v2
```

Do not use undocumented prompt versions.

---

## 24. Recommended Service Separation

Keep responsibilities separated.

Suggested structure:

```text
services/
├── resume-builder.service.ts
└── ai-resume-build.service.ts

adapters/
└── builder-to-json-resume.ts

trigger/
└── build-ai-resume.ts
```

The AI service should orchestrate generation input/output.

The Trigger.dev task should handle background execution.

The existing `ResumeBuilderService` remains responsible for normal ResumeBuild operations.

Avoid placing the entire AI workflow into the general-purpose ResumeBuilderService.

---

## 25. Failure Handling

If any of these fail:

- Profile retrieval.
- Artifact retrieval.
- LLM call.
- JSON parsing.
- Schema validation.
- Blob persistence.

then:

1. Mark AI generation as failed.
2. Preserve the existing artifact.
3. Do not partially save generated content.
4. Surface the failure through the existing background-job UX.

LLM failures should use the existing Trigger.dev retry strategy where appropriate.

---

## 26. Acceptance Criteria

### Entry & Profile

- [ ] `Build Resume using AI` exists on the left side of `EditorHeader`.
- [ ] Clicking it checks `Profile.isMandatoryCompleted`.
- [ ] Incomplete Profile prevents access to the feature.
- [ ] User receives a clear notification when Profile is incomplete.
- [ ] There is no Profile skip option.

### Form

- [ ] Target Job Title/Role is present and mandatory.
- [ ] Job Description is present and mandatory.
- [ ] Target Company is present and optional.
- [ ] Target Company Type is present and optional.
- [ ] Resume Length does not exist anywhere in this feature.
- [ ] Form validation prevents generation without the two mandatory inputs.

### AI Generation

- [ ] Generation runs through Trigger.dev.
- [ ] Existing Trigger.dev conventions are reused.
- [ ] Completed Profile data is provided to generation.
- [ ] Current ResumeBuild artifact is provided when available.
- [ ] Job requirements are provided to the LLM.
- [ ] LLM output is structured JSON.
- [ ] Output is schema validated before persistence.
- [ ] LLM cannot fabricate candidate information.
- [ ] Generated content is template-agnostic.

### Persistence

- [ ] Job requirements are stored in `ResumeBuild`.
- [ ] `isAiGenerated` is stored.
- [ ] AI generation timestamp/model/prompt version are stored where implemented.
- [ ] No resume-length field is added.
- [ ] Generated artifact is saved to Blob Storage only after successful validation.
- [ ] Existing artifact remains safe if generation fails.

### Editor

- [ ] Successful generation populates the existing editor.
- [ ] User can edit generated content normally.
- [ ] Autosave continues to work.
- [ ] User can switch templates.
- [ ] Live preview continues to work.
- [ ] PDF export continues to work.

### Template Compatibility

- [ ] Generated artifact contains all applicable truthful sections.
- [ ] Template-specific section omissions do not cause data deletion.
- [ ] Existing template-switching Toast behavior works with AI-generated content.

---

## 27. Non-Goals

Do not:

- Replace `BuilderResumeArtifact` with JSON Resume as the persistence model.
- Make AI generation synchronous.
- Remove Trigger.dev.
- Add resume-length preferences.
- Generate separate content for each template.
- Allow the LLM to invent candidate information.
- Delete existing resume content when generation fails.
- Create a separate AI-specific resume editor.
- Bypass the existing JSON Resume adapter.
- Bypass the existing template registry.
- Bypass existing autosave/versioning.
- Bypass existing Puppeteer PDF generation.
- Create a new rendering architecture.

---

## 28. Final Architecture

```text
                    User
                     │
                     ▼
            Resume Builder Editor
                     │
                     ▼
          "Build Resume using AI"
                     │
                     ▼
            Profile Completion Check
                     │
                     ▼
              Profile Complete
                     │
                     ▼
                AI Build Form
                     │
                     ├── Target Job Title *
                     ├── Job Description *
                     ├── Target Company
                     └── Company Type
                              │
                              ▼
                     Trigger.dev Task
                              │
             ┌────────────────┼────────────────┐
             │                │                │
          Profile       Current Artifact   Job Requirements
             │                │                │
             └────────────────┼────────────────┘
                              ▼
                             LLM
                              │
                              ▼
                       Structured JSON
                              │
                              ▼
                       Schema Validation
                              │
                       ┌──────┴──────┐
                       │             │
                     FAIL          PASS
                       │             │
                       ▼             ▼
                Preserve old     BuilderResume
                   artifact        Artifact
                                    │
                                    ▼
                               Blob Storage
                                    │
                                    ▼
                            Existing Resume Editor
                                    │
                    ┌───────────────┼───────────────┐
                    ▼               ▼               ▼
                  Edit          Templates          PDF
                                    │
                                    ▼
                           JSON Resume Adapter
                                    │
                                    ▼
                           Selected JSON Theme
                                    │
                              ┌─────┴─────┐
                              ▼           ▼
                         Live Preview  Puppeteer
                                             │
                                             ▼
                                            PDF
```

## Core Principle

**AI generates truthful, structured, job-targeted resume content. The existing Resume Builder remains responsible for editing, template rendering, preview, persistence, and PDF generation.**
