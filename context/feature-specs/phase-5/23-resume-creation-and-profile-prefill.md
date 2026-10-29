# Phase 5.2 — Resume Creation & Profile Prefill

## Objective

Implement the Resume Builder MVP's **resume creation workflow** and **Profile → Resume prefill system**.

This phase builds on Phase 5.1.

The user should be able to:

1. Start creating a new resume.
2. Provide basic resume metadata.
3. Initialize the resume from their existing Profile.
4. Create an independent Resume Artifact.
5. Persist the initialized artifact using the existing Prisma + Vercel Blob architecture.
6. Continue to the Resume Editor implemented in Phase 5.3.

This phase does **not** implement the complete Resume Editor, templates, live preview, or PDF generation.

---

# 1. Existing Architecture

Before implementation, inspect:

- Phase 5.1 implementation
- Prisma Resume model
- Resume Artifact schema
- Resume service
- BlobStorageService
- Profile model
- Authentication system
- Existing API conventions
- Existing routing conventions

Reuse existing services.

Do NOT create:

- Another Blob service
- Another Resume model
- Another Resume Artifact format
- Another authentication mechanism

The architecture established in Phase 5.1 is the source of truth.

---

# 2. Creation Flow

The intended flow is:

```text
/dashboard/resumes
        ↓
Create Resume
        ↓
/dashboard/resumes/new
        ↓
Resume Setup
        ↓
User enters:
    Title
    Target Role
    Template
        ↓
Profile Data Prefill
        ↓
Create Resume Artifact
        ↓
Upload Artifact → Blob
        ↓
Create Resume → Prisma
        ↓
Redirect to Editor
```

The Editor itself is implemented in Phase 5.3.

---

# 3. Routes

Create or extend the following routes according to the project's existing routing conventions.

## Resume Workspace

```text
/dashboard/resumes
```

This will eventually display the user's Resume Workspace.

For this phase, it only needs enough functionality to provide a clear entry point to:

```text
Create Resume
```

Do not implement the complete Workspace yet.

---

## New Resume

```text
/dashboard/resumes/new
```

This page handles resume initialization.

---

## Resume Editor

The creation flow should redirect to:

```text
/dashboard/resumes/[resumeId]
```

The editor itself is out of scope.

For now, the route may display a placeholder indicating that the editor will be implemented in Phase 5.3.

---

# 4. Resume Creation Form

The new resume page should collect:

```text
Resume Title
Target Role
Template
```

Example:

```text
Resume Title:
Full Stack Developer Resume

Target Role:
Full Stack Developer

Template:
Modern
```

---

# 5. Resume Title

Resume title is required.

Example:

```text
Full Stack Developer Resume
```

It is a user-facing identifier and is separate from the target role.

Examples:

```text
Title:
Google Software Engineer Resume

Target Role:
Software Engineer
```

---

# 6. Target Role

Target role should be optional.

Examples:

```text
Software Engineer
Frontend Developer
Data Scientist
Product Manager
```

If the user's Profile already contains a target role, prefill it.

The user must be able to modify it during resume creation.

Changing the resume's target role must NOT modify:

```text
Profile.targetRole
```

---

# 7. Template Selection

Use the three MVP templates defined in Phase 5.1:

```text
CLASSIC
MODERN
MINIMAL
```

The selected template is stored as Resume metadata.

The actual template renderer is out of scope for this phase.

If the user does not select a template, use:

```text
MODERN
```

as the default.

---

# 8. Profile Prefill

The user's Profile is the primary source for initializing the Resume Artifact.

Architecture:

```text
Profile
   ↓
Profile → Resume Mapper
   ↓
ResumeArtifact
   ↓
User can edit independently
```

The mapper should create a **copy** of the relevant Profile information.

Do not maintain a live reference between Profile and Resume.

---

# 9. Profile → Resume Mapping

Create a dedicated mapper:

```ts
profileToResumeArtifact();
```

Do NOT put profile mapping logic directly inside the API route or page component.

Recommended location:

```text
features/resume-builder/
└── services/
    └── profile-to-resume.mapper.ts
```

Adapt to the project's existing architecture if a shared mapper/service location exists.

---

# 10. Personal Information Mapping

Map Profile data into:

```ts
personalInformation;
```

Recommended mapping:

```text
Profile.name
        ↓
personalInformation.fullName

Profile.email
        ↓
personalInformation.email

Profile.location
        ↓
personalInformation.location
```

If the Profile contains additional compatible contact fields, map them where appropriate.

Do not invent Profile fields that do not exist.

For fields unavailable in Profile:

```text
phone = ""
linkedin = ""
github = ""
portfolio = ""
```

or the equivalent empty value defined by the Resume Artifact schema.

---

# 11. Professional Summary

Do NOT generate an AI summary in this phase.

If Profile contains a suitable summary/about field, map it.

Otherwise:

```text
professionalSummary = ""
```

The user can create the summary later in the Editor.

Do NOT call Gemini or another LLM during resume creation.

---

# 12. Education Mapping

Map the user's Profile education data into:

```ts
education: EducationEntry[]
```

Example:

```text
Profile Education
        ↓
Resume Education
```

Preserve relevant:

- Institution
- Degree
- Field of Study
- Dates

Do not invent missing information.

---

# 13. Experience Mapping

Map existing Profile experience into:

```ts
experience: ExperienceEntry[]
```

Preserve:

- Job title
- Company
- Location
- Dates
- Description
- Achievements

If the Profile contains no experience:

```ts
experience: [];
```

Do not fabricate experience for students or entry-level users.

---

# 14. Projects Mapping

Map Profile projects into:

```ts
projects: ProjectEntry[]
```

Preserve:

- Project name
- Description
- Technologies
- URL
- Dates

If no projects exist:

```ts
projects: [];
```

---

# 15. Skills Mapping

Map:

```text
Profile.currentSkills
```

into:

```ts
skills: SkillEntry[]
```

If the Profile contains structured proficiency information, preserve it.

If the Profile only contains skill names, create:

```json
{
  "id": "...",
  "name": "React"
}
```

Do not invent proficiency levels.

---

# 16. Certifications Mapping

If the Profile contains certifications:

```text
Profile
   ↓
Resume certifications
```

Otherwise:

```ts
certifications: [];
```

Do not generate certifications.

---

# 17. Achievements Mapping

If the Profile contains achievements:

```text
Profile
   ↓
Resume achievements
```

Otherwise:

```ts
achievements: [];
```

Do not fabricate achievements.

---

# 18. Missing Profile Data

Profile completion is NOT required for creating a Resume.

A user may create a resume with incomplete Profile information.

Example:

```text
Profile:

Name ✓
Education ✓
Skills ✓
Experience ✗
Projects ✗
Certifications ✗
```

The generated Resume should simply contain:

```text
experience: []
projects: []
certifications: []
```

The user can fill these sections later through the Resume Editor.

This is important because Resume Builder should remain independently usable.

---

# 19. Profile Independence

Once the Resume is created:

```text
Profile
   ↓
INITIAL COPY
   ↓
Resume Artifact
```

The relationship becomes independent.

Example:

```text
Profile.skills:
React
Node.js

Resume.skills:
React
Node.js
Docker
```

The Resume may contain information that is not currently present in Profile.

Similarly, changing the Resume must not modify Profile.

---

# 20. Existing Resume Creation Service

Use the service created in Phase 5.1.

Conceptually:

```ts
createResume({
  userId,
  title,
  targetRole,
  template,
  artifact,
});
```

The service should remain responsible for:

- Resume ID generation
- Artifact validation
- Blob creation
- Prisma creation
- Error handling
- Ownership association

Do not duplicate this logic in the route.

---

# 21. Creation API

Use the API established in Phase 5.1:

```text
POST /api/resumes
```

The request should contain only the necessary creation metadata.

Example:

```json
{
  "title": "Full Stack Developer Resume",
  "targetRole": "Full Stack Developer",
  "template": "MODERN"
}
```

The server should retrieve the authenticated user's Profile itself.

Do NOT accept the complete Profile or Resume Artifact from the client during initialization.

---

# 22. Server-Side Profile Retrieval

The API should:

1. Authenticate the user.
2. Retrieve the user's Profile.
3. Validate creation input.
4. Map Profile → Resume Artifact.
5. Create the Resume.

Do not trust client-provided:

```text
userId
profileId
```

Derive the user identity from the existing authentication system.

---

# 23. Creation Sequence

The server-side sequence should be:

```text
Authenticate User
       ↓
Validate Input
       ↓
Retrieve Profile
       ↓
Generate Resume ID
       ↓
Create Empty Resume Artifact
       ↓
Map Profile Data
       ↓
Validate Resume Artifact
       ↓
Upload Artifact → Blob
       ↓
Create Resume → Prisma
       ↓
Return Resume
```

Follow the failure-handling strategy implemented in Phase 5.1.

---

# 24. Initial Resume Status

New resumes should begin as:

```text
DRAFT
```

Example:

```json
{
  "status": "DRAFT",
  "version": 1
}
```

The Resume becomes `READY` later when appropriate.

Do not mark a newly created editable resume as completed.

---

# 25. Resume ID

Generate the Resume ID on the server.

The Resume Artifact must contain the same ID:

```text
Prisma Resume.id
        =
ResumeArtifact.resumeId
```

This provides consistency between metadata and Blob content.

---

# 26. Initial Artifact

After profile mapping, the artifact should resemble:

```json
{
  "resumeId": "resume_123",
  "version": 1,

  "personalInformation": {
    "fullName": "User Name",
    "email": "user@example.com",
    "location": "Guwahati"
  },

  "professionalSummary": "",

  "education": [],

  "experience": [],

  "projects": [],

  "skills": [],

  "certifications": [],

  "achievements": []
}
```

The exact content depends on the user's Profile.

Do not hard-code example data.

---

# 27. Resume Creation UI

The `/dashboard/resumes/new` page should contain:

```text
Resume Title
Target Role
Template Selection

        ↓

Create Resume
```

Keep the interface simple.

Do not implement the complete editor in this phase.

---

# 28. Template Selection UI

Display:

```text
Classic
Modern
Minimal
```

The user should be able to select one.

The selected value is submitted to the API.

The visual design of the templates themselves is out of scope.

---

# 29. Loading State

While creating the Resume:

```text
Creating your resume...
```

Prevent duplicate submissions.

Disable the submit button while the request is pending.

---

# 30. Error Handling

Handle:

```text
Unauthorized
Invalid input
Profile retrieval failure
Resume creation failure
Blob upload failure
```

Display user-friendly errors.

Do not expose:

- Stack traces
- Database errors
- Blob credentials
- Internal URLs

---

# 31. Duplicate Submission Protection

The UI should prevent accidental duplicate submissions.

The server should also avoid creating duplicate records from a single request where practical.

Do not implement a complex idempotency system unless the existing application already uses one.

---

# 32. Redirect

After successful creation:

```text
POST /api/resumes
        ↓
Resume created
        ↓
redirect
        ↓
/dashboard/resumes/[resumeId]
```

The destination will contain the Resume Editor placeholder until Phase 5.3.

---

# 33. Resume Workspace Entry Point

The existing or placeholder:

```text
/dashboard/resumes
```

should contain:

```text
Create Resume
```

which links to:

```text
/dashboard/resumes/new
```

Do not implement the complete Resume Workspace yet.

---

# 34. API Response

A successful creation should return enough information for the client to navigate.

Example:

```json
{
  "resume": {
    "id": "resume_123",
    "title": "Full Stack Developer Resume",
    "targetRole": "Full Stack Developer",
    "template": "MODERN",
    "status": "DRAFT",
    "version": 1
  }
}
```

Do not return the entire Blob artifact unless required.

---

# 35. Security

The server must ensure:

- Authenticated user owns the created Resume.
- `userId` comes from authentication.
- Profile belongs to the authenticated user.
- Resume metadata is validated.
- Resume Artifact is validated before Blob persistence.

Do not trust client-provided Profile data.

---

# 36. No AI

This phase must NOT use:

- Gemini
- OpenAI
- Trigger.dev
- AI-generated summaries
- AI-generated experience
- AI-generated project descriptions
- AI-generated skills

The Resume Builder MVP creation flow should be deterministic.

```text
Profile → Mapper → Resume
```

---

# 37. No Resume Scoring

Do not invoke the Resume Scoring system during Resume creation.

The Builder and Scoring modules remain separate.

Future integration may allow:

```text
Resume Builder
      ↓
Save Resume
      ↓
Resume Scoring
```

but that is outside this phase.

---

# 38. Testing

Implement tests for:

## Profile Mapping

- [ ] Name maps correctly.
- [ ] Email maps correctly.
- [ ] Location maps correctly.
- [ ] Education maps correctly.
- [ ] Experience maps correctly.
- [ ] Projects map correctly.
- [ ] Skills map correctly.
- [ ] Certifications map correctly.
- [ ] Achievements map correctly.
- [ ] Missing fields produce empty sections.
- [ ] No data is fabricated.

## Independence

- [ ] Editing Resume does not modify Profile.
- [ ] Resume can contain additional information.
- [ ] Multiple resumes can be created from the same Profile.
- [ ] Each Resume has an independent artifact.

## Creation

- [ ] Resume receives unique ID.
- [ ] Artifact receives matching Resume ID.
- [ ] Blob artifact is created.
- [ ] Prisma record is created.
- [ ] Blob URL is stored in Prisma.
- [ ] Initial status is DRAFT.
- [ ] Initial version is 1.

## Security

- [ ] Unauthenticated users cannot create resumes.
- [ ] User ID is derived server-side.
- [ ] Profile is retrieved server-side.
- [ ] Client cannot inject another user's profile data.

## UI

- [ ] New Resume route loads.
- [ ] Title field works.
- [ ] Target Role field works.
- [ ] Template selection works.
- [ ] Loading state works.
- [ ] Error state works.
- [ ] Successful creation redirects correctly.

---

# 39. Out of Scope

Do NOT implement:

- Resume Editor
- Section editing
- Autosave
- Live preview
- Template rendering
- PDF generation
- AI features
- Resume Scoring
- ATS optimization
- Resume sharing
- Resume version history
- Advanced Workspace functionality

These belong to later specifications.

---

# 40. Acceptance Criteria

Phase 5.2 is complete when:

- [ ] `/dashboard/resumes/new` exists.
- [ ] User can enter Resume Title.
- [ ] User can enter Target Role.
- [ ] User can select Classic, Modern, or Minimal.
- [ ] Profile data is retrieved server-side.
- [ ] Profile is mapped into a new Resume Artifact.
- [ ] Missing Profile data remains empty.
- [ ] No data is fabricated.
- [ ] Resume is independent from Profile after creation.
- [ ] Resume Artifact is validated.
- [ ] Artifact is uploaded to Vercel Blob.
- [ ] Blob URL is stored in Prisma.
- [ ] Resume status is `DRAFT`.
- [ ] Resume version is `1`.
- [ ] Multiple resumes are supported.
- [ ] Existing Phase 5.1 architecture is reused.
- [ ] No AI is invoked.
- [ ] No Trigger.dev job is created.
- [ ] Successful creation redirects to `/dashboard/resumes/[resumeId]`.
- [ ] TypeScript passes.
- [ ] Lint passes.
- [ ] Production build succeeds.
- [ ] Tests pass.

---

# Final Architecture

```text
                         USER
                          │
                          ▼
                       Profile
                          │
                          │
                          ▼
                /dashboard/resumes/new
                          │
                ┌─────────┼─────────┐
                ▼         ▼         ▼
              Title   Target Role  Template
                │         │         │
                └─────────┼─────────┘
                          ▼
                    POST /api/resumes
                          │
                          ▼
                  Authenticate User
                          │
                          ▼
                  Retrieve Profile
                          │
                          ▼
              Profile → Resume Mapper
                          │
                          ▼
                 Resume Artifact
                          │
                          ▼
                    Zod Validation
                          │
                 ┌────────┴────────┐
                 ▼                 ▼
            Vercel Blob         Prisma
                 │                 │
          Artifact JSON       Resume Metadata
                 │                 │
                 │          artifactBlobUrl
                 └────────┬────────┘
                          ▼
                    Resume Created
                     status=DRAFT
                          │
                          ▼
             /dashboard/resumes/[resumeId]
                          │
                          ▼
                   Phase 5.3 Editor
```

## Implementation Principle

The critical architectural rule for this phase is:

> **Profile data is used to initialize a Resume, not to continuously synchronize with it.**

Once the Resume is created, it becomes an independent user-owned artifact.
