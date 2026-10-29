# Phase 5.5 — Resume Workspace & Final MVP Integration

## Objective

Complete the Resume Builder MVP by implementing the Resume Workspace and integrating all Resume Builder components created in Phases 5.1–5.4.

This phase should provide a complete user flow:

```text
Profile
   ↓
Create Resume
   ↓
Resume Workspace
   ↓
Resume Editor
   ↓
Live Preview
   ↓
Template Selection
   ↓
Autosave
   ↓
PDF Export
```

The Resume Builder MVP must remain compatible with the existing Elev8 architecture and the future Resume Scoring module.

---

# 1. Existing Architecture Must Be Preserved

Before implementation:

1. Inspect Phase 5.1.
2. Inspect Phase 5.2.
3. Inspect Phase 5.3.
4. Inspect Phase 5.4.
5. Inspect the existing Profile architecture.
6. Inspect authentication and authorization.
7. Inspect BlobStorageService.
8. Inspect existing API conventions.
9. Inspect existing dashboard UI conventions.

Do not create duplicate:

- Resume models
- Resume Artifact structures
- Blob services
- Authentication systems
- Editor state systems
- PDF systems

Use the implementations already created in previous phases.

---

# 2. Resume Workspace

Implement:

```text
/dashboard/resumes
```

This becomes the main entry point for the Resume Builder.

The Workspace should allow the user to:

- View their resumes
- Create a new resume
- Open an existing resume
- Rename a resume
- Duplicate a resume
- Delete a resume
- See basic resume metadata
- Identify the selected template
- Identify the target role
- See last updated information

---

# 3. Workspace Architecture

The intended structure is:

```text
/dashboard/resumes
        │
        ├── Create Resume
        │
        ├── Resume A
        │      ↓
        │   Open Editor
        │
        ├── Resume B
        │      ↓
        │   Open Editor
        │
        └── Resume C
               ↓
            Open Editor
```

Each Resume remains an independent artifact.

---

# 4. Resume Card

Each Resume should be represented by a card or equivalent UI element.

Display:

```text
Resume Title
Target Role
Template
Status
Last Updated
```

Example:

```text
Full Stack Developer Resume

Target Role:
Full Stack Developer

Template:
Modern

Last updated:
2 minutes ago

[Open]
```

Do not display unnecessary internal metadata.

---

# 5. Create Resume

Provide a clear:

```text
Create Resume
```

action.

It should navigate to:

```text
/dashboard/resumes/new
```

Reuse the creation flow implemented in Phase 5.2.

Do not create another resume creation implementation.

---

# 6. Open Resume

Selecting a Resume should navigate to:

```text
/dashboard/resumes/[resumeId]
```

Reuse the Phase 5.3 editor.

Do not create a second editor page.

---

# 7. Resume List API

Reuse or extend:

```text
GET /api/resumes
```

The endpoint should return only resumes belonging to the authenticated user.

The server must derive the user ID from authentication.

Do not accept arbitrary user IDs from the client.

---

# 8. Resume Ordering

Display resumes in a useful order.

Recommended:

```text
updatedAt DESC
```

Most recently modified resumes should appear first.

Use the existing database query conventions.

---

# 9. Empty Workspace

If the user has no resumes:

```text
No resumes yet.

Create your first resume to get started.

[Create Resume]
```

The empty state should be actionable.

---

# 10. Rename Resume

Users should be able to rename an existing resume.

Example:

```text
Old:
My Resume

New:
Google Software Engineer Resume
```

Use:

```text
PATCH /api/resumes/[resumeId]
```

with:

```json
{
  "title": "Google Software Engineer Resume"
}
```

The server must:

1. Authenticate the user.
2. Verify ownership.
3. Validate the title.
4. Update Prisma.
5. Return updated metadata.

Do not modify the Blob Artifact for a title-only change.

---

# 11. Rename Validation

Resume titles must:

- Be non-empty.
- Have a reasonable maximum length.
- Not contain invalid control characters.

Use the existing project's validation conventions.

A reasonable MVP maximum is:

```text
100 characters
```

---

# 12. Duplicate Resume

Users should be able to duplicate an existing Resume.

Example:

```text
Original:
Software Engineer Resume

Duplicate:
Software Engineer Resume — Copy
```

The duplicated Resume must be a completely independent Resume Artifact.

Flow:

```text
Existing Resume
      ↓
Fetch Artifact
      ↓
Deep Clone
      ↓
Generate New Resume ID
      ↓
Update artifact.resumeId
      ↓
Upload NEW Blob
      ↓
Create NEW Prisma Resume
```

Do not reuse the original Blob URL.

---

# 13. Duplicate Resume Metadata

The duplicated Resume should copy:

- Resume content
- Target role
- Template

But it should receive new:

- Resume ID
- Blob artifact
- Created timestamp
- Updated timestamp
- Version

The duplicated Resume should begin as:

```text
DRAFT
```

---

# 14. Duplicate API

Create:

```text
POST /api/resumes/[resumeId]/duplicate
```

The endpoint must:

1. Authenticate.
2. Verify ownership.
3. Retrieve the original artifact.
4. Validate the original artifact.
5. Deep clone it.
6. Generate a new Resume ID.
7. Update `artifact.resumeId`.
8. Reset version to `1`.
9. Upload a new Blob.
10. Create a new Prisma Resume.
11. Return the new Resume metadata.

---

# 15. Delete Resume

Users should be able to delete a Resume.

Recommended flow:

```text
User selects Delete
        ↓
Confirmation
        ↓
DELETE /api/resumes/[resumeId]
        ↓
Ownership validation
        ↓
Delete Resume Artifact
        ↓
Delete Prisma Resume
```

Follow the project's existing deletion conventions.

---

# 16. Delete Confirmation

Deleting a Resume is destructive.

Require confirmation.

Example:

```text
Delete "Frontend Developer Resume"?

This will permanently remove the resume and its saved data.

[Cancel] [Delete Resume]
```

Do not use confirmation for non-destructive actions.

---

# 17. Blob Cleanup

When a Resume is permanently deleted:

```text
Prisma Resume
       +
Resume Artifact Blob
```

should be cleaned up.

Do not leave unnecessary orphaned Resume artifacts.

Use the existing BlobStorageService.

If Blob deletion fails, handle the failure safely according to existing application conventions.

Do not silently report successful deletion if the application knows cleanup failed.

---

# 18. Ownership & Security

Every Workspace operation must verify ownership.

This includes:

- List
- Open
- Rename
- Duplicate
- Delete
- Template update
- Artifact read
- Artifact update
- PDF generation

The fundamental rule is:

```text
authenticatedUserId === resume.userId
```

Do not trust client-provided user IDs.

---

# 19. Workspace Actions

Each Resume card should expose appropriate actions:

```text
Open
Rename
Duplicate
Delete
```

Avoid overcrowding the card.

A dropdown/context menu may be used.

---

# 20. Editor Integration

The Workspace must connect cleanly to the existing editor:

```text
Workspace
    ↓
Open Resume
    ↓
/dashboard/resumes/[resumeId]
    ↓
Phase 5.3 Editor
```

The Workspace must not duplicate editor functionality.

---

# 21. Editor Toolbar Integration

Ensure the Phase 5.3/5.4 editor has access to:

```text
Back to Resumes
Resume Title
Save Status
Template Selector
Download PDF
```

The exact layout should follow the existing design system.

---

# 22. Back Navigation

Provide:

```text
Back to Resumes
```

which navigates to:

```text
/dashboard/resumes
```

If there are unsaved changes, use the existing unsaved-change protection implemented in Phase 5.3.

---

# 23. Save Status

The editor should clearly communicate:

```text
Saved
Saving...
Unsaved changes
Save failed
```

Reuse Phase 5.3 save state.

Do not create another save mechanism.

---

# 24. Template Integration

The Workspace may display the selected template:

```text
Classic
Modern
Minimal
```

The editor should continue to provide the actual template selector.

Changing the template must not modify the Resume Artifact.

---

# 25. PDF Integration

The Workspace does not need to generate PDFs directly.

PDF generation remains available inside the Resume Editor:

```text
Resume Editor
      ↓
Download PDF
      ↓
GET /api/resumes/[resumeId]/pdf
```

Reuse Phase 5.4.

---

# 26. Resume Builder → Resume Scoring Integration Point

Do not implement Resume Scoring in this phase.

However, provide a clean integration point for future functionality.

The Workspace may eventually expose:

```text
Score Resume
```

which will navigate to or trigger the Resume Scoring module.

For this phase, this action may be:

- omitted entirely, or
- represented as a disabled/future feature

Do not build the scoring workflow.

---

# 27. Resume Scoring Compatibility

The Resume Artifact must remain directly consumable by the future Resume Scoring module.

The scoring module should eventually be able to retrieve:

```text
Resume
   ↓
artifactBlobUrl
   ↓
Resume Artifact
```

Do not create a separate export format for scoring.

---

# 28. Resume Workspace API

The MVP should have the following backend capabilities:

```text
GET    /api/resumes
POST   /api/resumes

GET    /api/resumes/[resumeId]
PATCH  /api/resumes/[resumeId]
DELETE /api/resumes/[resumeId]

PATCH  /api/resumes/[resumeId]/artifact
POST   /api/resumes/[resumeId]/duplicate

GET    /api/resumes/[resumeId]/pdf
```

Use the routes already implemented in previous phases.

Do not duplicate endpoints.

---

# 29. API Response Consistency

Workspace APIs should return consistent metadata.

Example:

```json
{
  "id": "resume_123",
  "title": "Full Stack Developer Resume",
  "targetRole": "Full Stack Developer",
  "template": "MODERN",
  "status": "DRAFT",
  "version": 4,
  "updatedAt": "..."
}
```

Do not return the entire Blob Artifact from list requests.

---

# 30. Loading States

Implement appropriate loading states for:

### Workspace

```text
Loading resumes...
```

### Rename

```text
Saving...
```

### Duplicate

```text
Duplicating...
```

### Delete

```text
Deleting...
```

Avoid duplicate requests while an action is processing.

---

# 31. Error States

Handle:

```text
Unauthorized
Forbidden
Resume not found
Validation error
Blob read error
Blob write error
Blob delete error
Database error
Duplicate failure
```

Use existing application error conventions.

Provide user-friendly messages.

Do not expose internal stack traces.

---

# 32. Workspace Responsiveness

The Workspace must work on:

- Desktop
- Tablet
- Mobile

Resume cards should adapt appropriately.

Actions should remain accessible on small screens.

---

# 33. Resume Card Design

The card should prioritize:

```text
Title
Target Role
Last Updated
Template
Primary Action
```

Avoid displaying unnecessary technical information such as:

- Blob URLs
- Internal IDs
- Version numbers
- Database status codes

---

# 34. Status Display

Use the existing Resume status:

```text
DRAFT
READY
ARCHIVED
```

Display user-friendly labels.

For example:

```text
DRAFT → Draft
READY → Ready
ARCHIVED → Archived
```

Do not expose raw implementation terminology unnecessarily.

---

# 35. Archived Resumes

The MVP should not require a separate Archived Workspace.

If an existing Resume has:

```text
status = ARCHIVED
```

it should still be safely represented according to the existing data model.

Do not build a complex archive management system.

---

# 36. Multiple Resume Support

Verify that users can have:

```text
Resume A
Resume B
Resume C
```

and that each remains completely independent.

Test:

```text
Edit Resume A
```

must not modify:

```text
Resume B
Resume C
```

---

# 37. Profile Independence

The Workspace must preserve the architecture established in Phase 5.2.

Profile is used to initialize a Resume.

After creation:

```text
Profile
   │
   │ initial copy
   ▼
Resume Artifact
```

The Resume is independent.

Workspace operations must never automatically update Profile.

---

# 38. Authentication

All Resume Workspace pages and APIs require authentication.

Unauthenticated users should be redirected according to the existing Elev8 authentication flow.

Do not implement custom authentication.

---

# 39. Authorization

Authentication is not sufficient.

Every Resume operation must perform ownership validation.

Example:

```ts
const resume = await getResume(resumeId);

if (resume.userId !== authenticatedUserId) {
  throw new ForbiddenError();
}
```

Use the existing authorization helper/service if available.

---

# 40. Data Fetching

Use the project's existing data-fetching conventions.

Avoid:

- Fetching the same Resume metadata multiple times unnecessarily.
- Fetching full Blob artifacts for Workspace lists.
- Client-side filtering of another user's data.

The Workspace list should be server-authoritative.

---

# 41. Caching

Do not implement complex caching.

Resume metadata changes relatively frequently.

Correctness is more important than aggressive caching for the MVP.

The editor should continue to use the Phase 5.3 local state and autosave system.

---

# 42. Duplicate Resume Behavior

When duplicating:

```text
Original Resume
        │
        ├── Same targetRole
        ├── Same template
        └── Deep-cloned artifact
                  │
                  ▼
             New Resume
```

The user should be able to immediately open and edit the duplicated Resume.

---

# 43. Delete Behavior

After successful deletion:

```text
Resume Card
    ↓
Removed from Workspace
```

The user should not need to manually refresh the page.

Update the local Workspace state after successful deletion.

---

# 44. Rename Behavior

After successful rename:

```text
Resume Card
    ↓
Updated title immediately
```

Avoid forcing a full page reload.

---

# 45. Optimistic UI

Optimistic updates may be used for:

- Rename
- Removing a deleted card

but only if the existing application architecture supports them cleanly.

Do not use optimistic updates for operations where rollback would be complicated.

Server state remains authoritative.

---

# 46. Empty and Error States

Workspace should have distinct states:

```text
Loading
Empty
Loaded
Error
```

Do not display an empty state while the initial request is still loading.

---

# 47. Accessibility

Ensure:

- Buttons have accessible labels.
- Dropdown actions are keyboard accessible.
- Delete confirmation is keyboard accessible.
- Focus is managed appropriately for dialogs.
- Resume cards are navigable.
- Interactive elements are not nested incorrectly.

Follow existing UI component accessibility patterns.

---

# 48. Testing

## Workspace

- [ ] Workspace loads.
- [ ] User's resumes are listed.
- [ ] Other users' resumes are never listed.
- [ ] Empty state works.
- [ ] Loading state works.
- [ ] Error state works.

## Create

- [ ] Create button navigates correctly.
- [ ] Existing Phase 5.2 creation flow works.
- [ ] Newly created resume appears in Workspace.

## Open

- [ ] Resume opens correctly.
- [ ] Correct artifact loads.
- [ ] User cannot open another user's Resume.

## Rename

- [ ] Rename works.
- [ ] Validation works.
- [ ] Updated title appears immediately.
- [ ] Blob artifact is not unnecessarily modified.

## Duplicate

- [ ] Duplicate creates a new Resume ID.
- [ ] Duplicate creates a new Blob artifact.
- [ ] Duplicate copies content.
- [ ] Duplicate copies target role.
- [ ] Duplicate copies template.
- [ ] Duplicate resets version to 1.
- [ ] Editing duplicate does not modify original.

## Delete

- [ ] Confirmation is displayed.
- [ ] Delete removes Resume.
- [ ] Blob artifact is cleaned up.
- [ ] Deleted Resume disappears from Workspace.
- [ ] Other resumes remain unaffected.

## Editor

- [ ] Workspace opens Phase 5.3 editor.
- [ ] Autosave continues working.
- [ ] Template selector works.
- [ ] Preview works.
- [ ] PDF export works.

## Security

- [ ] Unauthenticated Workspace access is blocked.
- [ ] Unauthorized Resume access is blocked.
- [ ] Unauthorized rename is blocked.
- [ ] Unauthorized duplication is blocked.
- [ ] Unauthorized deletion is blocked.
- [ ] Unauthorized PDF generation is blocked.

---

# 49. End-to-End MVP Flow

Verify the complete flow:

```text
User Login
    ↓
/dashboard/resumes
    ↓
Create Resume
    ↓
/dashboard/resumes/new
    ↓
Profile Prefill
    ↓
Resume Created
    ↓
/dashboard/resumes/[resumeId]
    ↓
Edit Resume
    ↓
Autosave
    ↓
Live Preview
    ↓
Change Template
    ↓
Autosave Metadata
    ↓
Download PDF
    ↓
Back to Workspace
    ↓
Resume appears in list
```

Also verify:

```text
Workspace
    ↓
Duplicate Resume
    ↓
Open Duplicate
    ↓
Edit Duplicate
    ↓
Original remains unchanged
```

---

# 50. Acceptance Criteria

Phase 5.5 is complete when:

## Workspace

- [ ] `/dashboard/resumes` is implemented.
- [ ] User resumes are listed.
- [ ] Empty state exists.
- [ ] Loading state exists.
- [ ] Error state exists.
- [ ] Create Resume action works.
- [ ] Open Resume works.
- [ ] Rename works.
- [ ] Duplicate works.
- [ ] Delete works.

## Data

- [ ] Multiple resumes per user work.
- [ ] Each Resume has an independent Blob artifact.
- [ ] Resume metadata remains in Prisma.
- [ ] Blob URL remains in Prisma.
- [ ] Resume content remains in Blob.
- [ ] Duplicate receives a new Blob.
- [ ] Delete cleans up the associated Blob.

## Editor Integration

- [ ] Workspace opens the existing Resume Editor.
- [ ] Autosave works.
- [ ] Save status works.
- [ ] Profile remains independent.
- [ ] Multiple resumes remain independent.

## Templates

- [ ] Classic works.
- [ ] Modern works.
- [ ] Minimal works.
- [ ] Template selection persists.
- [ ] Template switching does not modify content.

## PDF

- [ ] PDF generation works.
- [ ] PDF uses current Resume data.
- [ ] PDF uses selected template.
- [ ] PDF download works.
- [ ] PDF endpoint verifies ownership.

## Security

- [ ] Authentication is required.
- [ ] Authorization is enforced server-side.
- [ ] Users cannot access another user's resumes.
- [ ] Users cannot modify another user's resumes.

## Compatibility

- [ ] Resume Scoring remains untouched.
- [ ] Existing Profile architecture remains untouched.
- [ ] Existing BlobStorageService is reused.
- [ ] Existing authentication is reused.
- [ ] Existing Resume Editor is reused.
- [ ] Existing PDF implementation from Phase 5.4 is reused.

## Quality

- [ ] TypeScript passes.
- [ ] Lint passes.
- [ ] Production build succeeds.
- [ ] Tests pass.
- [ ] No duplicate architecture was introduced.

---

# 51. Out of Scope

Do NOT implement:

- Resume Scoring
- AI resume generation
- AI rewriting
- ATS optimization
- Resume analytics
- Public resume sharing
- Public resume URLs
- Full resume version history
- Collaboration
- Real-time multi-user editing
- Advanced template customization
- Custom template creation
- Drag-and-drop page layout

These can be addressed in future phases.

---

# Final Resume Builder MVP Architecture

```text
                         USER
                          │
                          ▼
                  /dashboard/resumes
                          │
                ┌─────────┴─────────┐
                ▼                   ▼
          Create Resume        Existing Resumes
                │                   │
                ▼                   ▼
       /dashboard/resumes/new   Resume Workspace
                │                   │
                ▼                   │
             Profile                │
                │                   │
          Initial Copy              │
                │                   │
                ▼                   │
          Resume Artifact            │
                │                   │
        ┌───────┴────────┐           │
        ▼                ▼           │
     Prisma          Vercel Blob     │
    Metadata         JSON Artifact   │
        │                │           │
        └───────┬────────┘           │
                ▼                    │
      /dashboard/resumes/[id] ◄──────┘
                │
        ┌───────┴───────────────┐
        ▼                       ▼
   Resume Editor            Live Preview
        │                       │
        │                       ▼
        │                  Selected Template
        │                       │
        ▼                       │
    Autosave                    │
        │                       │
        ▼                       ▼
   Vercel Blob              PDF Renderer
                                │
                                ▼
                         Download PDF
```

## Implementation Principles

1. **Profile initializes the Resume; it does not continuously synchronize with it.**
2. **Prisma stores Resume metadata and the Blob URL.**
3. **Vercel Blob stores the canonical Resume Artifact JSON.**
4. **Each Resume is an independent artifact.**
5. **Duplicating a Resume creates a new independent artifact.**
6. **Deleting a Resume cleans up its associated artifact.**
7. **Templates control presentation, not content.**
8. **The preview renders from local editor state and can show unsaved changes.**
9. **PDFs are generated on demand from the current Resume Artifact.**
10. **Resume Scoring remains a separate module and is not implemented in this phase.**
11. **No AI or Trigger.dev is required for the Resume Builder MVP.**
12. **All user-specific operations must enforce authentication and ownership server-side.**

The complete MVP should therefore provide a clean foundation for the next Resume-related phase without requiring changes to the core storage architecture.
