# Phase 5.3 — Resume Editor & Autosave

## Objective

Implement the core Resume Builder editor for the Elev8 MVP.

This phase builds on:

- Phase 5.1 — Resume Data Model & Artifact Foundation
- Phase 5.2 — Resume Creation & Profile Prefill

The user should now be able to open a created Resume and independently edit its structured Resume Artifact.

The editor must persist changes to the user's Resume Artifact in Vercel Blob while Prisma continues to store Resume metadata and the Blob URL.

This phase does **not** implement:

- Final visual templates
- PDF generation
- AI rewriting
- Resume scoring
- Advanced drag-and-drop layout
- Full version history

---

# 1. Existing Architecture Must Be Preserved

Before implementation:

1. Inspect the Phase 5.1 Resume model and services.
2. Inspect the Phase 5.2 creation flow.
3. Inspect `BlobStorageService`.
4. Inspect existing authentication patterns.
5. Inspect existing API conventions.
6. Inspect existing autosave implementations in other Elev8 modules where applicable.

Reuse existing infrastructure.

Do NOT create:

- A second Resume storage system
- A second Blob service
- A second authentication system
- A separate Resume Artifact format
- Database columns for every editable Resume field

The Resume Artifact JSON in Blob remains the source of truth for Resume content.

---

# 2. Editor Route

Implement:

```text
/dashboard/resumes/[resumeId]
```

This route should load the user's Resume and display the Resume Editor.

Flow:

```text
/dashboard/resumes/[resumeId]
        ↓
Authenticate User
        ↓
Validate Resume Ownership
        ↓
Retrieve Resume Metadata
        ↓
Fetch Resume Artifact
        ↓
Validate Artifact
        ↓
Initialize Editor State
```

A user must not be able to access another user's Resume.

---

# 3. Editor Architecture

Use the following conceptual architecture:

```text
Resume Artifact
      ↓
Editor State
      ↓
User edits
      ↓
Local State Update
      ↓
Debounced Autosave
      ↓
API
      ↓
Resume Service
      ↓
Blob
```

The editor should primarily operate on a local structured state.

Do not make an API request for every keystroke.

---

# 4. Editor Layout

Create a basic MVP editor layout:

```text
┌────────────────────────────────────────────────────┐
│ Resume Header / Toolbar                            │
├───────────────┬────────────────────────────────────┤
│               │                                    │
│ Section       │                                    │
│ Navigation    │       Editor Content               │
│               │                                    │
│               │                                    │
│               │                                    │
└───────────────┴────────────────────────────────────┘
```

The live visual Resume Preview will be implemented in Phase 5.4.

Do not build the final preview in this phase.

---

# 5. Editor Sections

Implement editing support for:

```text
Personal Information
Professional Summary
Education
Experience
Projects
Skills
Certifications
Achievements
```

All sections must operate against the existing `ResumeArtifact` schema from Phase 5.1.

Do not introduce a new schema for the editor.

---

# 6. Personal Information Editor

Allow editing:

```text
Full Name
Email
Phone
Location
LinkedIn
GitHub
Portfolio
```

Use the existing `PersonalInformation` schema.

---

# 7. Professional Summary Editor

Provide a multiline text input for:

```text
professionalSummary
```

Do not generate or rewrite the summary using AI.

The user must be able to:

- Enter text
- Edit text
- Clear text

---

# 8. Education Editor

Support multiple education entries.

Each entry should allow:

```text
Institution
Degree
Field of Study
Start Date
End Date
Description
```

Actions:

```text
Add Education
Edit Education
Remove Education
```

Each entry must retain a stable ID.

Do not use array indexes as persistent IDs.

---

# 9. Experience Editor

Support multiple experience entries.

Each entry should allow:

```text
Job Title
Company
Location
Start Date
End Date
Currently Working
Description
Achievements
```

Actions:

```text
Add Experience
Edit Experience
Remove Experience
```

For achievements:

```text
Add Achievement
Remove Achievement
```

Each experience entry must retain a stable ID.

---

# 10. Projects Editor

Support multiple projects.

Each project should allow:

```text
Project Name
Description
Technologies
URL
Start Date
End Date
```

Actions:

```text
Add Project
Edit Project
Remove Project
```

Technologies should be represented as structured values:

```ts
technologies: string[]
```

---

# 11. Skills Editor

Allow users to:

```text
Add Skill
Edit Skill
Remove Skill
```

Each skill should support:

```text
Name
Category
Proficiency
```

Use the existing:

```ts
SkillEntry;
```

schema.

Do not introduce a separate skill representation.

---

# 12. Certifications Editor

Support multiple certifications.

Fields:

```text
Name
Issuing Organization
Issue Date
Expiry Date
Credential URL
```

Actions:

```text
Add Certification
Edit Certification
Remove Certification
```

---

# 13. Achievements Editor

Support multiple achievements.

Fields:

```text
Title
Description
Date
```

Actions:

```text
Add Achievement
Edit Achievement
Remove Achievement
```

---

# 14. Entry IDs

Every repeatable Resume entry must have a stable ID.

Applies to:

```text
Education
Experience
Projects
Skills
Certifications
Achievements
```

Example:

```json
{
  "id": "exp_abc123",
  "jobTitle": "Frontend Developer"
}
```

Do not use:

```text
experience[0]
experience[1]
```

as persistent identifiers.

---

# 15. Editor State

Create a dedicated editor state abstraction.

Recommended:

```text
useResumeEditor()
```

Responsibilities:

- Load Resume Artifact
- Maintain local state
- Update sections
- Add entries
- Remove entries
- Reorder entries where supported
- Track dirty state
- Track saving state
- Track errors
- Track last saved time

Do not put all editor state directly inside the page component.

---

# 16. Recommended State Structure

Conceptually:

```ts
interface ResumeEditorState {
  artifact: ResumeArtifact;

  isDirty: boolean;

  isSaving: boolean;

  lastSavedAt?: Date;

  saveError?: string | null;
}
```

Use the project's existing state-management approach if one already exists.

Do not introduce a new global state library solely for this feature.

---

# 17. Dirty State

The editor should detect unsaved changes.

States:

```text
CLEAN
DIRTY
SAVING
SAVED
ERROR
```

Suggested UI:

```text
Saved
Saving...
Unsaved changes
Unable to save
```

Do not rely exclusively on visual indicators.

The actual persisted state must be determined by the backend.

---

# 18. Autosave

Implement debounced autosave.

Do NOT save every keystroke.

Recommended behavior:

```text
User edits
   ↓
Local state changes
   ↓
Wait for inactivity
   ↓
Autosave
```

Use an appropriate debounce interval, approximately:

```text
1–3 seconds
```

after the user's last change.

Follow existing Elev8 autosave conventions where available.

---

# 19. Autosave API

Use the existing Resume API foundation.

Recommended:

```text
PATCH /api/resumes/[resumeId]/artifact
```

Request:

```json
{
  "artifact": {
    "...": "..."
  }
}
```

The exact API format should follow the implementation from Phase 5.1.

---

# 20. Server-Side Autosave Flow

The server should:

```text
Authenticate User
       ↓
Find Resume
       ↓
Verify Ownership
       ↓
Validate Artifact
       ↓
Verify Resume ID
       ↓
Persist Artifact to Blob
       ↓
Update Resume Metadata
       ↓
Return Save Result
```

Do not trust the `userId` sent by the client.

Derive it from authentication.

---

# 21. Artifact Validation

Every save must validate the complete Resume Artifact using the Zod schema created in Phase 5.1.

Do not rely solely on client-side validation.

The server must reject:

- Invalid structure
- Invalid IDs
- Invalid URLs
- Invalid enum values
- Malformed entries

---

# 22. Resume ID Validation

The artifact must contain:

```text
artifact.resumeId
```

and it must match:

```text
URL resumeId
```

Example:

```text
/api/resumes/resume_123/artifact

artifact.resumeId = resume_123
```

If they do not match, reject the update.

This prevents accidental or malicious cross-resume updates.

---

# 23. Ownership Validation

Before every artifact read or update:

```text
authenticatedUserId
        ↓
Resume.userId
```

must match.

If not:

```text
403 FORBIDDEN
```

Do not reveal whether another user's Resume exists if the application security conventions require resource concealment.

---

# 24. Blob Persistence

Reuse:

```text
BlobStorageService
```

Do not directly call Vercel Blob from React components.

The browser should communicate with the API.

The server-side Resume Service should handle Blob operations.

---

# 25. Blob Overwrite

The user's Resume Artifact should update the existing Blob associated with the Resume.

Recommended path:

```text
resumes/{userId}/{resumeId}/artifact.json
```

Do not create a new Blob for every autosave.

Follow the Blob overwrite strategy established in Phase 5.1.

Do not modify the global default behavior of `BlobStorageService`.

---

# 26. Save Concurrency

Prevent older autosave requests from overwriting newer changes.

Example problem:

```text
Request A → old state
Request B → new state

B finishes first
A finishes later
```

This must not result in the older state becoming the final artifact.

Use a lightweight concurrency strategy.

Recommended approach:

```text
Artifact Version
```

Example:

```text
version: 1
```

After save:

```text
version: 2
```

The server should reject or safely handle stale versions.

Do not implement full historical version storage.

---

# 27. Version Handling

Use the `version` field created in Phase 5.1.

Example:

```text
Current Artifact:
version = 3

Client sends:
version = 3

Server saves:
version = 4
```

The client receives the updated version.

If the client submits an outdated version:

```text
Client version = 2
Server version = 4
```

return a conflict response or follow the project's established concurrency strategy.

Do not silently overwrite newer data.

---

# 28. Manual Save

Although autosave is the primary persistence mechanism, provide a manual:

```text
Save
```

action if it fits the existing UI architecture.

Manual save should:

- Immediately persist the current state.
- Cancel/debounce any pending autosave where appropriate.
- Update save status.

---

# 29. Navigation Protection

If there are unsaved changes:

```text
isDirty === true
```

warn the user before leaving the page where browser/router APIs allow it.

Do not block navigation indefinitely.

The warning should only apply to genuinely unsaved changes.

---

# 30. Loading State

When opening a Resume:

```text
Loading resume...
```

Do not render an editor with fabricated/default data before the actual artifact is loaded.

If loading fails:

```text
Unable to load resume.
```

Provide an appropriate recovery action.

---

# 31. Empty Sections

Empty sections should still render cleanly.

Example:

```text
Experience

No experience added yet.

[Add Experience]
```

Do not hide sections permanently just because they are empty.

The user must be able to populate them.

---

# 32. Section Navigation

Provide navigation for:

```text
Personal Information
Summary
Education
Experience
Projects
Skills
Certifications
Achievements
```

Clicking a section should navigate/focus the relevant editor section.

Use accessible navigation.

---

# 33. Responsive Behavior

The editor must support:

- Desktop
- Tablet
- Mobile

For mobile, the sidebar may become:

```text
Dropdown
```

or:

```text
Horizontal section navigation
```

Do not implement a complex mobile-specific architecture.

---

# 34. Component Architecture

Recommended structure:

```text
features/
└── resume-builder/
    ├── components/
    │   └── editor/
    │       ├── resume-editor.tsx
    │       ├── editor-header.tsx
    │       ├── editor-sidebar.tsx
    │       ├── editor-section.tsx
    │       │
    │       ├── personal-information-editor.tsx
    │       ├── summary-editor.tsx
    │       ├── education-editor.tsx
    │       ├── experience-editor.tsx
    │       ├── projects-editor.tsx
    │       ├── skills-editor.tsx
    │       ├── certifications-editor.tsx
    │       └── achievements-editor.tsx
    │
    ├── hooks/
    │   └── use-resume-editor.ts
    │
    └── utils/
        └── resume-editor-utils.ts
```

Adapt this to existing project conventions.

Do not duplicate existing generic form components.

---

# 35. Reusable Form Components

Use existing shared UI components for:

- Inputs
- Textareas
- Selects
- Buttons
- Dialogs
- Form validation
- Toasts

Only create Resume-specific components where necessary.

---

# 36. Add / Remove Entry UX

For repeatable sections:

```text
Experience

[+ Add Experience]

Experience Entry
[Edit fields]

[Remove]
```

Use confirmation for destructive removal where appropriate.

Do not require confirmation for every minor interaction.

---

# 37. Reordering

For MVP, support simple ordering for:

```text
Education
Experience
Projects
Skills
Certifications
Achievements
```

The simplest acceptable implementation is:

```text
Move Up
Move Down
```

Do not implement complex drag-and-drop unless the existing project already has an appropriate reusable solution.

---

# 38. Data Integrity

When an entry is removed:

```text
UI state
   ↓
Resume Artifact
   ↓
Zod validation
   ↓
Blob
```

No deleted entry should remain in the persisted artifact.

---

# 39. No Profile Synchronization

This phase must NOT update Profile data.

For example:

```text
User adds Docker to Resume
```

must NOT automatically execute:

```text
Profile.currentSkills += Docker
```

Likewise:

```text
User removes React from Resume
```

must NOT remove React from Profile.

The Resume remains an independent artifact.

---

# 40. No AI

Do NOT use:

- Gemini
- OpenAI
- Trigger.dev
- AI rewriting
- AI summary generation
- AI bullet generation

The editor is deterministic.

---

# 41. No Templates

Do not implement the actual:

```text
Classic
Modern
Minimal
```

renderers.

The selected template remains Resume metadata.

Template rendering is Phase 5.4.

---

# 42. No PDF

Do not implement:

- PDF generation
- Print rendering
- PDF downloads

These belong to Phase 5.4.

---

# 43. Error Handling

Handle:

```text
401 Unauthorized
403 Forbidden
404 Resume Not Found
409 Version Conflict
422 Invalid Artifact
500 Storage Error
```

Use the existing application's error conventions.

Do not expose internal implementation details.

---

# 44. API Response

Successful artifact save should return:

```json
{
  "resumeId": "resume_123",
  "version": 4,
  "savedAt": "..."
}
```

Do not return unnecessary Blob internals.

---

# 45. Testing

## Loading

- [ ] Existing Resume loads correctly.
- [ ] Correct user's Resume is loaded.
- [ ] Unauthorized access is rejected.
- [ ] Missing Resume is handled.

## Personal Information

- [ ] Fields load correctly.
- [ ] Fields update correctly.
- [ ] Changes persist.

## Summary

- [ ] Summary can be edited.
- [ ] Empty summary is valid.
- [ ] Changes persist.

## Education

- [ ] Existing entries load.
- [ ] New entries can be added.
- [ ] Entries can be edited.
- [ ] Entries can be removed.
- [ ] IDs remain stable.

## Experience

- [ ] Existing entries load.
- [ ] New entries can be added.
- [ ] Entries can be edited.
- [ ] Entries can be removed.
- [ ] Achievements can be managed.

## Projects

- [ ] Projects can be added.
- [ ] Projects can be edited.
- [ ] Projects can be removed.

## Skills

- [ ] Skills can be added.
- [ ] Skills can be edited.
- [ ] Skills can be removed.

## Certifications

- [ ] Certifications can be added.
- [ ] Certifications can be edited.
- [ ] Certifications can be removed.

## Achievements

- [ ] Achievements can be added.
- [ ] Achievements can be edited.
- [ ] Achievements can be removed.

## Autosave

- [ ] Autosave is debounced.
- [ ] Autosave does not execute on every keystroke.
- [ ] Save status is visible.
- [ ] Failed saves are surfaced.
- [ ] Successful saves update version.
- [ ] Stale saves cannot overwrite newer data.

## Persistence

- [ ] Artifact is stored in Blob.
- [ ] Prisma Blob URL remains correct.
- [ ] Resume metadata remains intact.
- [ ] Multiple resumes remain independent.

## Security

- [ ] User cannot access another user's Resume.
- [ ] User cannot update another user's Resume.
- [ ] User cannot modify another user's Blob.
- [ ] User ID is derived from authentication.

---

# 46. Acceptance Criteria

Phase 5.3 is complete when:

- [ ] `/dashboard/resumes/[resumeId]` loads a Resume Editor.
- [ ] Resume Artifact is retrieved from Blob.
- [ ] Resume Artifact is validated before use.
- [ ] All eight Resume sections are editable.
- [ ] Repeatable sections support add/edit/remove.
- [ ] Stable IDs are used for repeatable entries.
- [ ] Editor state is separated from page implementation.
- [ ] Autosave is implemented with debouncing.
- [ ] Manual save is available if compatible with the UI.
- [ ] Save status is visible.
- [ ] Artifact versioning prevents stale overwrite.
- [ ] Blob is updated without unnecessary new artifacts.
- [ ] Ownership validation exists on every operation.
- [ ] Profile remains unchanged when Resume is edited.
- [ ] Multiple resumes remain independent.
- [ ] No AI is used.
- [ ] No Trigger.dev task is created.
- [ ] No PDF generation is implemented.
- [ ] No template renderer is implemented.
- [ ] TypeScript passes.
- [ ] Lint passes.
- [ ] Production build succeeds.
- [ ] Tests pass.

---

# Final Architecture

```text
                         RESUME
                            │
                            ▼
                   Resume Artifact
                            │
                     Vercel Blob
                            │
                            ▼
                    Resume Editor
                            │
                 ┌──────────┴──────────┐
                 ▼                     ▼
            Local State             Profile
                 │                     │
                 │                 READ ONLY
                 │
                 ▼
             User edits
                 │
                 ▼
          Debounced Autosave
                 │
                 ▼
          PATCH /artifact
                 │
                 ▼
          Resume Service
                 │
          ┌──────┴──────┐
          ▼             ▼
       Validate       Version
          │             │
          └──────┬──────┘
                 ▼
          Vercel Blob Update
                 │
                 ▼
          Prisma Metadata
                 │
                 ▼
          Saved Resume
```

## Implementation Principle

The critical rule for this phase is:

> **The Resume Editor modifies the user's independent Resume Artifact; it never modifies the Profile and never modifies a predefined/template artifact.**

The editor should treat the Resume Artifact as structured data and remain completely independent of how that data will eventually be rendered by the Classic, Modern, or Minimal templates.
