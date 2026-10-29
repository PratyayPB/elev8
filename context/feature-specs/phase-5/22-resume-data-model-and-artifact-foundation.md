# Phase 5.1 — Resume Data Model & Artifact Foundation

## Objective

Establish the backend and data foundation for the Elev8 Resume Builder MVP.

This phase creates the persistent architecture required for users to create and maintain **multiple independent resumes**.

The Resume Builder must use the existing Elev8 storage architecture:

```text
Prisma
   ↓
Resume metadata + Blob URL

Vercel Blob
   ↓
Resume Artifact JSON
```

The Resume JSON stored in Blob is the canonical source of truth for the actual resume content.

This phase does **not** implement the Resume Builder UI, editor, templates, live preview, or PDF generation.

---

# 1. Existing Architecture Must Be Preserved

Before implementation:

1. Inspect the existing Prisma schema.
2. Inspect the existing Profile model.
3. Inspect the existing BlobStorageService.
4. Inspect the existing Resume Scoring architecture.
5. Inspect existing service/repository conventions.
6. Inspect authentication and authorization patterns.
7. Inspect existing API route conventions.

Reuse existing infrastructure wherever possible.

Do not create duplicate:

- Blob storage services
- Prisma connection logic
- authentication utilities
- validation infrastructure
- API patterns

If an existing service already provides the required functionality, extend or reuse it rather than creating another implementation.

---

# 2. Core Architecture

A Resume consists of two layers.

## Prisma

Stores metadata and relationships.

```text
Resume
├── id
├── userId
├── title
├── targetRole
├── template
├── artifactBlobUrl
├── status
├── createdAt
└── updatedAt
```

## Vercel Blob

Stores the complete structured Resume Artifact.

```json
{
  "resumeId": "...",
  "version": 1,

  "personalInformation": {},
  "professionalSummary": "",
  "education": [],
  "experience": [],
  "projects": [],
  "skills": [],
  "certifications": [],
  "achievements": []
}
```

The Blob contains the complete resume content.

---

# 3. Single Source of Truth

For resume content:

```text
Resume Artifact JSON in Blob
        ↓
Source of Truth
```

Prisma must NOT contain duplicated copies of the complete resume content.

Prisma stores the metadata and pointer:

```text
artifactBlobUrl
```

Do not create individual Prisma columns for:

```text
summary
skills
experience
projects
education
```

unless an existing architecture explicitly requires a specific metadata field.

---

# 4. Resume Prisma Model

Create a `Resume` model or adapt an existing model if one already exists.

Conceptually:

```prisma
model Resume {
  id              String   @id @default(cuid())

  userId          String

  title           String
  targetRole      String?

  template        String

  artifactBlobUrl String

  status          String

  version         Int      @default(1)

  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
}
```

Adapt this to the project's existing Prisma conventions.

Do NOT blindly copy the schema.

---

# 5. User Relationship

Every Resume must belong to exactly one user.

The existing application's user/Profile relationship must be respected.

Conceptually:

```text
User
 │
 └── Profile
       │
       └── Resumes[]
```

A user can have multiple resumes.

Example:

```text
User
│
├── Full Stack Developer Resume
├── Frontend Developer Resume
└── Internship Resume
```

Do NOT enforce a one-resume-per-user relationship.

---

# 6. Multiple Resume Artifacts

The MVP must support multiple independent resumes.

Each resume has its own:

```text
Resume ID
Blob Artifact
Title
Target Role
Template
Version
Status
```

One resume must never overwrite another user's resume.

One resume must never overwrite another resume belonging to the same user.

---

# 7. Resume Status

Create a centralized status type.

Recommended:

```ts
type ResumeStatus = "DRAFT" | "READY" | "ARCHIVED";
```

Use the existing project's conventions if an equivalent status system already exists.

### DRAFT

Resume is being created or edited.

### READY

Resume is valid and available for use/export.

### ARCHIVED

Resume is retained but no longer actively used.

Do not physically delete archived resumes unless the user explicitly deletes them.

---

# 8. Template

Store the selected template as metadata:

```text
template
```

Example:

```text
CLASSIC
MODERN
MINIMAL
```

Create a centralized type:

```ts
type ResumeTemplate = "CLASSIC" | "MODERN" | "MINIMAL";
```

Do not implement the actual template renderers in this phase.

---

# 9. Resume Artifact Schema

Create a strongly typed structured Resume Artifact.

Recommended structure:

```ts
interface ResumeArtifact {
  resumeId: string;

  version: number;

  personalInformation: PersonalInformation;

  professionalSummary: string;

  education: EducationEntry[];

  experience: ExperienceEntry[];

  projects: ProjectEntry[];

  skills: SkillEntry[];

  certifications: CertificationEntry[];

  achievements: AchievementEntry[];
}
```

The structure should be designed to support future:

- Editing
- Template rendering
- PDF generation
- Resume scoring
- AI rewriting
- Resume tailoring

---

# 10. Personal Information

Create:

```ts
interface PersonalInformation {
  fullName: string;

  email: string;

  phone?: string;

  location?: string;

  linkedin?: string;

  github?: string;

  portfolio?: string;
}
```

Use the existing Profile schema where appropriate.

Do not assume all fields are mandatory.

---

# 11. Education

Create:

```ts
interface EducationEntry {
  id: string;

  institution: string;

  degree: string;

  fieldOfStudy?: string;

  startDate?: string;

  endDate?: string;

  description?: string;
}
```

Each education entry must have a stable ID.

---

# 12. Experience

Create:

```ts
interface ExperienceEntry {
  id: string;

  jobTitle: string;

  company: string;

  location?: string;

  startDate?: string;

  endDate?: string;

  currentlyWorking?: boolean;

  description?: string;

  achievements?: string[];
}
```

Do not restrict users to one experience entry.

---

# 13. Projects

Create:

```ts
interface ProjectEntry {
  id: string;

  name: string;

  description?: string;

  technologies?: string[];

  url?: string;

  startDate?: string;

  endDate?: string;
}
```

---

# 14. Skills

Use structured skill entries rather than a single comma-separated string.

```ts
interface SkillEntry {
  id: string;

  name: string;

  category?: string;

  proficiency?: string;
}
```

Example:

```json
{
  "id": "skill_1",
  "name": "React",
  "category": "Frontend",
  "proficiency": "Advanced"
}
```

The exact proficiency system can remain simple in this phase.

---

# 15. Certifications

Create:

```ts
interface CertificationEntry {
  id: string;

  name: string;

  issuingOrganization?: string;

  issueDate?: string;

  expiryDate?: string;

  credentialUrl?: string;
}
```

---

# 16. Achievements

Create:

```ts
interface AchievementEntry {
  id: string;

  title: string;

  description?: string;

  date?: string;
}
```

---

# 17. Empty Resume Artifact

Create a function:

```ts
createEmptyResumeArtifact();
```

It should return a valid Resume Artifact with empty sections.

Example:

```json
{
  "resumeId": "...",
  "version": 1,

  "personalInformation": {
    "fullName": "",
    "email": "",
    "phone": "",
    "location": "",
    "linkedin": "",
    "github": "",
    "portfolio": ""
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

---

# 18. Zod Validation

Create a complete Zod schema for the Resume Artifact.

Recommended:

```text
resume-artifact.schema.ts
```

Validate:

- Required fields
- String types
- Arrays
- Entry IDs
- URLs where applicable
- Date formats where applicable
- Enum values

Create separate schemas where useful:

```text
PersonalInformationSchema
EducationEntrySchema
ExperienceEntrySchema
ProjectEntrySchema
SkillEntrySchema
CertificationEntrySchema
AchievementEntrySchema
ResumeArtifactSchema
```

---

# 19. Blob Storage

Reuse the existing `BlobStorageService`.

Do NOT create another Blob utility.

The service must support:

```text
Create Resume Artifact
Read Resume Artifact
Update Resume Artifact
Delete Resume Artifact
```

The actual implementation should follow the existing Blob service conventions.

---

# 20. Blob Naming

Use a deterministic, user/resume-specific path.

Recommended:

```text
resumes/{userId}/{resumeId}/artifact.json
```

Do not use a shared filename such as:

```text
resume.json
```

because multiple resumes must coexist.

---

# 21. Blob Access

Resume artifacts are user-specific.

Follow the existing application's Blob access model.

Do not expose unrestricted public access unless the existing architecture explicitly requires it.

Users must only be able to access their own resume artifacts.

---

# 22. Blob Overwrite Behavior

Resume updates should update the user's existing artifact rather than creating unnecessary orphaned Blobs.

Follow the existing `BlobStorageService` behavior.

If the service supports:

```ts
addRandomSuffix?: boolean
```

use the appropriate configuration so that:

```text
resumes/{userId}/{resumeId}/artifact.json
```

can be updated without generating unnecessary versions.

Do not change the existing default behavior globally.

---

# 23. Resume Service

Create or extend:

```text
resume.service.ts
```

Responsibilities:

```text
createResume()

getResume()

updateResume()

deleteResume()

listUserResumes()

getResumeArtifact()

updateResumeArtifact()
```

The service should coordinate:

```text
Prisma
+
BlobStorageService
```

---

# 24. Ownership Validation

Every Resume operation must validate ownership.

For example:

```ts
getResume(userId, resumeId);
```

must verify:

```text
resume.userId === userId
```

before returning the resume.

The same applies to:

- Read
- Update
- Delete
- Artifact retrieval
- Artifact updates

Never trust a `userId` provided by the client.

Derive the authenticated user ID from the existing authentication system.

---

# 25. Transaction Considerations

Resume creation involves:

```text
Create Blob
     ↓
Create Prisma record
```

or the reverse depending on existing application conventions.

Handle partial failures carefully.

For example:

```text
Blob upload succeeds
Prisma creation fails
```

should not leave uncontrolled orphaned data.

Implement cleanup where practical.

Do not introduce a complex transaction system if the existing project already has a standard pattern.

---

# 26. API Foundation

Create the backend foundation for future Builder UI.

Recommended routes:

```text
GET    /api/resumes
POST   /api/resumes

GET    /api/resumes/[resumeId]
PATCH  /api/resumes/[resumeId]
DELETE /api/resumes/[resumeId]
```

For this phase, these endpoints should provide the data/storage foundation.

Do not implement the full Resume Editor UI.

---

# 27. Create Resume API

The create endpoint should accept minimal metadata:

```ts
{
  title: string;
  targetRole?: string;
  template?: ResumeTemplate;
}
```

The server should:

1. Authenticate the user.
2. Validate input.
3. Generate a Resume ID.
4. Create an empty Resume Artifact.
5. Upload the artifact to Blob.
6. Create the Prisma Resume record.
7. Return the created Resume.

The artifact should reference the generated Resume ID.

---

# 28. Get Resume API

The API should return resume metadata.

Example:

```json
{
  "id": "resume_123",
  "title": "Full Stack Developer Resume",
  "targetRole": "Full Stack Developer",
  "template": "MODERN",
  "status": "DRAFT",
  "version": 1,
  "createdAt": "...",
  "updatedAt": "..."
}
```

Do not unnecessarily return the entire Blob artifact when only metadata is requested.

---

# 29. Artifact Retrieval

Create a separate service/API mechanism for retrieving the actual Resume Artifact.

The application should be able to:

```text
Resume ID
    ↓
Prisma
    ↓
artifactBlobUrl
    ↓
Blob
    ↓
ResumeArtifact JSON
```

Do not store the complete artifact in Prisma.

---

# 30. Artifact Updates

The future editor will update the complete structured Resume Artifact.

The service should support:

```ts
updateResumeArtifact(userId, resumeId, artifact);
```

Before saving:

1. Validate ownership.
2. Validate the Resume Artifact with Zod.
3. Verify `resumeId`.
4. Increment version if appropriate.
5. Upload/update the Blob.
6. Update Prisma metadata.

Do not implement autosave UI in this phase.

---

# 31. Versioning

Use a simple numeric version:

```text
version: 1
version: 2
version: 3
```

For the MVP, versioning represents the current artifact revision.

Do NOT implement full historical version storage yet.

Do not create a separate database record for every edit.

---

# 32. Resume Title

Every Resume should have a user-friendly title.

Example:

```text
Full Stack Developer Resume
```

This is separate from:

```text
targetRole
```

Example:

```text
title:
"Google Software Engineer Resume"

targetRole:
"Software Engineer"
```

---

# 33. Target Role

Store:

```text
targetRole
```

as optional metadata.

This will later support:

- Resume Scoring
- Resume tailoring
- AI optimization
- Multiple resumes for different roles

---

# 34. Profile Independence

A Resume is initialized from Profile data in Phase 5.2.

Once created:

```text
Profile
   ↓
Resume
```

is a one-time initialization/copy operation.

Future Resume edits must NOT automatically modify Profile.

Likewise:

```text
Resume edits
```

must not silently change:

```text
Profile.currentRole
Profile.skills
Profile.experience
```

This separation is required.

---

# 35. Resume Scoring Compatibility

The Resume Builder must remain compatible with the existing Resume Scoring architecture.

The Resume Artifact should eventually be usable as input to:

```text
Resume Scoring
```

Do not implement the scoring integration in this phase.

However, avoid a data structure that would prevent future parsing/scoring.

---

# 36. Future Template Compatibility

The Resume Artifact must remain independent of visual design.

Do NOT store:

```text
HTML
CSS
font configuration
page coordinates
visual positioning
```

inside the Resume Artifact.

Instead:

```text
Resume JSON
     ↓
Template
     ↓
Rendered Resume
```

---

# 37. Recommended Folder Structure

Adapt this to the existing project architecture.

```text
features/
└── resume-builder/
    │
    ├── types/
    │   └── resume-artifact.ts
    │
    ├── schemas/
    │   └── resume-artifact.schema.ts
    │
    ├── services/
    │   └── resume.service.ts
    │
    ├── utils/
    │   └── create-empty-resume.ts
    │
    └── constants/
        └── resume.constants.ts
```

If the project already has a shared Resume feature, place shared types/services there instead of creating duplicate structures.

---

# 38. API Structure

Adapt to the existing Next.js routing conventions.

Conceptually:

```text
app/api/resumes/
├── route.ts
└── [resumeId]/
    ├── route.ts
    └── artifact/
        └── route.ts
```

Do not create routes that conflict with existing Resume Scoring routes.

---

# 39. Error Handling

Create consistent errors for:

```text
UNAUTHORIZED
RESUME_NOT_FOUND
RESUME_FORBIDDEN
INVALID_RESUME
INVALID_ARTIFACT
BLOB_UPLOAD_FAILED
BLOB_READ_FAILED
BLOB_UPDATE_FAILED
```

Use the project's existing API error conventions where available.

Do not expose internal Blob URLs, database errors, or stack traces unnecessarily.

---

# 40. Testing

Implement tests for:

## Resume Creation

- [ ] Creates Prisma Resume.
- [ ] Creates Blob Artifact.
- [ ] Artifact contains correct Resume ID.
- [ ] Initial status is DRAFT.
- [ ] Initial version is 1.

## Ownership

- [ ] User can access own resume.
- [ ] User cannot access another user's resume.
- [ ] User cannot update another user's resume.
- [ ] User cannot delete another user's resume.

## Artifact

- [ ] Artifact schema validates.
- [ ] Invalid artifact is rejected.
- [ ] Artifact can be retrieved.
- [ ] Artifact can be updated.
- [ ] Version increments correctly.

## Multiple Resumes

- [ ] User can create multiple resumes.
- [ ] Each resume has a unique ID.
- [ ] Each resume has an independent Blob artifact.
- [ ] Updating one resume does not modify another.

## Storage

- [ ] Blob URL is stored in Prisma.
- [ ] Resume content is not duplicated in Prisma.
- [ ] Existing BlobStorageService is reused.
- [ ] Updates do not unnecessarily create orphaned Blob files.

---

# 41. Out of Scope

Do NOT implement:

- Resume Builder UI
- Resume Editor
- Profile prefill
- Resume templates
- Live preview
- PDF generation
- AI resume generation
- AI rewriting
- Resume scoring
- ATS optimization
- Drag-and-drop editing
- Full version history
- Resume sharing
- Public resume URLs

These will be implemented in later specifications.

---

# 42. Acceptance Criteria

The phase is complete when:

- [ ] Resume Prisma model exists and follows existing project conventions.
- [ ] Multiple resumes per user are supported.
- [ ] Resume metadata is stored in Prisma.
- [ ] Resume content is stored as JSON in Vercel Blob.
- [ ] Prisma stores the Blob URL.
- [ ] Resume Artifact has a stable typed structure.
- [ ] Resume Artifact has Zod validation.
- [ ] Empty Resume Artifact can be generated.
- [ ] Resume CRUD service exists.
- [ ] Resume Artifact read/update service exists.
- [ ] Ownership checks are implemented.
- [ ] API foundation exists.
- [ ] BlobStorageService is reused.
- [ ] Existing authentication is reused.
- [ ] Existing project conventions are followed.
- [ ] Multiple resumes remain independent.
- [ ] No Builder UI is implemented.
- [ ] No PDF/template implementation is introduced.
- [ ] No AI functionality is introduced.
- [ ] No Resume Scoring functionality is modified.
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
                    Phase 5.2
                    Prefill Data
                          │
                          ▼
                    Resume Builder
                          │
                          ▼
                    Resume Service
                          │
                 ┌────────┴────────┐
                 ▼                 ▼
              Prisma          Vercel Blob
                 │                 │
          Resume Metadata     Resume Artifact
                 │                 │
                 │          Structured JSON
                 │                 │
                 └────────┬────────┘
                          ▼
                    Resume Artifact
                          │
              ┌───────────┼───────────┐
              ▼           ▼           ▼
           Editor      Template     Scoring
            5.3          5.4         Future
```

## Implementation Principle

The most important rule for this phase is:

> **Prisma stores Resume metadata and the Blob URL; Vercel Blob stores the complete structured Resume Artifact.**

Do not introduce a second storage strategy.

The Resume Artifact must remain independent of presentation so that future templates, PDF generation, Resume Scoring, and AI-powered improvements can operate on the same canonical JSON structure.
