Phase 5.4 — Resume Templates, Live Preview & PDF Export

Objective

Implement the visual presentation layer of the Elev8 Resume Builder MVP.

This phase builds on:

Phase 5.1 — Resume Data Model & Artifact Foundation

Phase 5.2 — Resume Creation & Profile Prefill

Phase 5.3 — Resume Editor & Autosave

The user should now be able to:

Select between the three MVP resume templates.

See their Resume Artifact rendered as a professional resume.

Preview changes while editing.

Switch templates without modifying resume content.

Generate a PDF from the structured Resume Artifact.

Download the generated PDF.

The Resume Artifact remains the canonical source of resume content.

1. Existing Architecture Must Be Preserved

Before implementation:

Inspect Phase 5.1 Resume Artifact schema.

Inspect Phase 5.2 Resume creation flow.

Inspect Phase 5.3 Resume Editor.

Inspect existing BlobStorageService.

Inspect existing authentication and authorization.

Inspect existing API conventions.

Inspect existing PDF/file-generation patterns if available.

Reuse existing infrastructure.

Do NOT create:

A second Resume Artifact format.

A second Resume storage system.

A second Blob service.

A separate editor state.

A separate Resume database model.

Client-only PDF generation as the primary implementation.

2. Core Architecture

The rendering architecture must remain:

Resume Artifact JSON
↓
Selected Template
↓
Resume Renderer
↓
HTML / React Representation
↓
Preview / PDF

The template must only determine presentation.

It must never modify the underlying Resume Artifact.

3. Three MVP Templates

Implement exactly three templates:

CLASSIC
MODERN
MINIMAL

The templates should have clearly distinguishable visual structures.

They do not need to be highly customizable.

4. Template Architecture

Templates should be implemented as independent renderers.

Recommended:

resume-templates/
├── classic/
│ └── classic-template.tsx
│
├── modern/
│ └── modern-template.tsx
│
├── minimal/
│ └── minimal-template.tsx
│
└── resume-template-renderer.tsx

Adapt to the existing project structure.

5. Template Renderer Contract

Every template should accept the same data structure:

interface ResumeTemplateProps {
artifact: ResumeArtifact;
}

Example:

<ClassicTemplate artifact={artifact} />

<ModernTemplate artifact={artifact} />

<MinimalTemplate artifact={artifact} />

The templates must not modify:

artifact

They are pure presentation components.

6. Template Selection

The Resume's existing metadata:

template

determines which renderer is used.

Example:

CLASSIC → ClassicTemplate
MODERN → ModernTemplate
MINIMAL → MinimalTemplate

Do not duplicate template information inside the Resume Artifact.

7. Template Switching

Users must be able to switch between:

Classic
Modern
Minimal

without modifying:

Personal information

Summary

Education

Experience

Projects

Skills

Certifications

Achievements

Only:

Resume.template

should change.

8. Template Persistence

When the user selects a different template:

User selects template
↓
PATCH Resume metadata
↓
Prisma
↓
template updated

Do not rewrite the Resume Artifact just because the template changed.

9. Live Preview

Add a live Resume Preview to:

/dashboard/resumes/[resumeId]

The editor should eventually have a layout similar to:

┌───────────────────────────────────────────────────────┐
│ Toolbar │
├───────────────────┬───────────────────────────────────┤
│ │ │
│ Resume Editor │ Resume Preview │
│ │ │
│ Personal Info │ ┌───────────────────┐ │
│ Summary │ │ │ │
│ Education │ │ Resume │ │
│ Experience │ │ │ │
│ Projects │ │ │ │
│ Skills │ │ │ │
│ ... │ └───────────────────┘ │
│ │ │
└───────────────────┴───────────────────────────────────┘

Reuse the existing Phase 5.3 editor.

Do not create a second editor.

10. Preview Data Source

The preview must render directly from the current editor state.

Flow:

Editor State
↓
Resume Artifact
↓
Selected Template
↓
Preview

This allows the preview to update without waiting for autosave.

The preview should therefore reflect unsaved local changes.

11. Preview and Saved State

The preview can display unsaved changes.

Example:

User types:
"Full Stack Developer"

        ↓

Local editor state updates

        ↓

Preview updates immediately

        ↓

Autosave occurs separately

Do not require an API request for every preview update.

12. Resume Page Layout

The exact UI should follow the existing Elev8 design system.

At minimum, provide:

Resume Editor
Template Selector
Preview
Save Status
PDF Export

Do not over-engineer the layout.

13. Template Selector

Provide a simple selector:

Classic
Modern
Minimal

The selector should clearly indicate the active template.

If template previews are used, keep them lightweight.

14. Template Design Requirements

All templates must:

Be professional.

Be readable.

Have strong typography hierarchy.

Have appropriate spacing.

Work well on A4/Letter-style pages.

Avoid excessive decorative elements.

Preserve all important resume content.

Support empty sections gracefully.

Do not prioritize visual complexity over readability.

15. Classic Template

The Classic template should use a conventional resume structure.

Recommended structure:

NAME
Contact Information

Professional Summary

Experience

Education

Projects

Skills

Certifications

Achievements

Use a traditional professional layout.

16. Modern Template

The Modern template may use:

Stronger typography hierarchy.

More prominent section headings.

Subtle visual separation.

Modern spacing.

Avoid excessive graphics.

The resume must remain ATS-friendly and readable.

17. Minimal Template

The Minimal template should prioritize:

Whitespace

Clean typography

Simple section hierarchy

Minimal decoration

It should be the least visually complex template.

18. Empty Sections

If a section has no content:

experience: []

the template should normally omit that section from the rendered resume.

Do not render empty headings such as:

EXPERIENCE

unless the design explicitly requires it.

19. Long Content

Templates must handle:

Long summaries

Multiple experience entries

Multiple projects

Long achievement lists

Many skills

Do not truncate user content.

The content should flow naturally across pages.

20. Multiple Pages

A resume may exceed one page.

Templates must support:

Page 1
Page 2
Page 3
...

Do not force all content into a single page by shrinking the font excessively.

21. Page Layout

The renderer should use standard document dimensions.

Prefer:

A4

for the MVP.

The implementation should keep the layout compatible with standard PDF generation.

22. Print-Safe Styles

Create a print-safe representation of the resume.

Avoid:

Fixed viewport-dependent layouts.

Background effects that disappear during printing.

Interactive controls inside the resume.

UI navigation inside the resume.

Animations.

The rendered resume itself should be independent of the editor UI.

23. PDF Generation

PDF generation must be performed server-side.

Do NOT use:

window.print()

as the primary PDF-generation method.

Do NOT rely on client-side screenshots of the resume.

Recommended flow:

Resume ID
↓
Server
↓
Authenticate User
↓
Retrieve Resume
↓
Verify Ownership
↓
Fetch Resume Artifact
↓
Retrieve Selected Template
↓
Render Resume
↓
Generate PDF
↓
Return PDF

24. PDF API

Create a dedicated endpoint following existing project conventions.

Recommended:

GET /api/resumes/[resumeId]/pdf

The endpoint must:

Authenticate the user.

Retrieve Resume metadata.

Verify ownership.

Retrieve Resume Artifact from Blob.

Validate the artifact.

Determine the selected template.

Render the resume.

Generate the PDF.

Return the PDF response.

25. PDF Generation Technology

Use a server-compatible PDF generation solution already supported by the application.

If no existing solution is available, prefer a React-compatible server-side PDF renderer such as:

@react-pdf/renderer

Do not introduce a browser-only dependency.

The chosen implementation must work in the project's actual deployment environment.

Before implementation, verify compatibility with the current Next.js/Vercel runtime.

26. PDF Renderer Separation

Keep PDF rendering separate from the interactive editor.

Recommended conceptual structure:

ResumeTemplate
│
├── Preview Renderer
│
└── PDF Renderer

Where practical, share the underlying resume layout/components.

Do not force browser-only components into the PDF renderer.

27. PDF Content

The generated PDF must contain the current Resume Artifact content:

Personal Information
Professional Summary
Education
Experience
Projects
Skills
Certifications
Achievements

It must use the currently selected template.

28. PDF Filename

Use a clean filename based on the Resume title.

Example:

Full-Stack-Developer-Resume.pdf

Sanitize:

/

\

:

-

?

"

<

>

|

excessive whitespace

Do not expose internal IDs in the filename unless necessary.

29. Download Behavior

The user should have a:

Download PDF

action.

The browser should download the generated file.

Do not require the PDF to be permanently stored in Blob for the MVP.

The structured Resume Artifact remains the persistent source of truth.

30. PDF Caching

Do not implement complex PDF caching in this phase.

A PDF can be generated on demand from:

Resume Artifact + Template

This avoids synchronization problems between:

Resume JSON
PDF

31. PDF Security

A user must only be able to generate a PDF for their own Resume.

The endpoint must verify:

authenticatedUserId === resume.userId

Do not trust the client.

32. Template Selection API

Use the existing Resume metadata API.

For example:

PATCH /api/resumes/[resumeId]

Request:

{
"template": "MODERN"
}

The server must validate the template enum.

33. Template Update Rules

The template update must:

Verify ownership.

Validate template.

Update Prisma metadata.

Not modify Blob artifact content.

Return the updated Resume metadata.

34. Preview Loading

The preview should not require a separate API call every time the user edits something.

Use the editor's local artifact state.

Initial load:

Blob
↓
Resume Artifact
↓
Editor State
↓
Preview

After editing:

Editor State
↓
Preview

Autosave happens independently.

35. Error Handling

Handle:

401 Unauthorized
403 Forbidden
404 Resume Not Found
422 Invalid Template
422 Invalid Artifact
500 PDF Generation Error
500 Blob Read Error

Use existing application error conventions.

Do not expose internal errors or stack traces.

36. Loading States

Provide appropriate states for:

Preview

Loading preview...

Template switching

Updating template...

PDF

Generating PDF...

Disable duplicate PDF requests while generation is in progress.

37. PDF Generation Failure

If PDF generation fails:

Unable to generate PDF.
Please try again.

Do not lose the user's editor state.

Do not modify the Resume Artifact when PDF generation fails.

38. Editor Integration

Phase 5.4 should extend the Phase 5.3 Editor.

Do not replace:

useResumeEditor()

or the existing editor architecture.

The page should conceptually become:

ResumeEditorPage
├── EditorToolbar
│ ├── SaveStatus
│ ├── TemplateSelector
│ └── DownloadPDF
│
├── ResumeEditor
│
└── ResumePreview

Adapt this to the existing implementation.

39. Responsive Preview

On smaller screens, the preview can switch to a dedicated tab:

Edit | Preview

or another suitable responsive pattern.

Do not allow the preview to make the editor unusable on mobile.

40. Performance

Avoid unnecessary re-rendering.

The preview should update efficiently when the editor changes.

Do not:

Fetch the artifact from Blob after every edit.

Request a new PDF after every edit.

Call the backend for preview rendering on every keystroke.

The preview is a local rendering operation.

41. No AI

Do NOT introduce:

Gemini

OpenAI

AI summary generation

AI bullet rewriting

AI optimization

AI features may be added later.

42. No Resume Scoring

Do not invoke Resume Scoring.

The Resume Artifact should remain compatible with the future scoring system, but scoring is outside this phase.

43. Testing

Templates

Classic renders correctly.

Modern renders correctly.

Minimal renders correctly.

All templates accept the same ResumeArtifact.

Switching templates does not modify Resume content.

Empty sections are handled correctly.

Long content renders correctly.

Preview

Preview loads from editor state.

Preview updates when fields change.

Unsaved changes appear in preview.

Preview does not trigger API requests for every edit.

Template Persistence

Template selection updates Prisma.

Selected template persists after reload.

User cannot update another user's template.

PDF

PDF endpoint requires authentication.

Ownership is verified.

Artifact is retrieved correctly.

Selected template is used.

PDF contains resume content.

Multiple pages work.

Long content is not truncated.

Filename is sanitized.

Download works.

PDF errors do not modify resume data.

Security

User cannot generate another user's PDF.

User cannot modify another user's template.

Template values are validated server-side.

44. Acceptance Criteria

Phase 5.4 is complete when:

Classic template exists.

Modern template exists.

Minimal template exists.

All templates consume the same ResumeArtifact structure.

Template switching works.

Template selection persists in Prisma.

Resume preview is integrated into the editor.

Preview reflects unsaved local changes.

Preview does not require API calls per edit.

PDF generation works server-side.

PDF uses the selected template.

PDF supports multiple pages.

PDF download works.

PDF endpoint verifies authentication and ownership.

Resume content remains stored only in the structured Blob artifact.

No PDF is required to be stored permanently.

No AI is used.

No Trigger.dev task is used.

Resume Scoring remains untouched.

TypeScript passes.

Lint passes.

Production build succeeds.

Tests pass.

Final Architecture

                         Resume Artifact
                              │
                              ▼
                     Selected Template
                              │
                 ┌────────────┴────────────┐
                 ▼                         ▼
          Interactive Preview         PDF Renderer
                 │                         │
                 ▼                         ▼
          Browser Preview                 PDF
                 │                         │
                 │                         ▼
                 │                    Download
                 │
                 └──────────────┐
                                │
                         Editor State
                                │
                         Debounced Save
                                │
                                ▼
                          Vercel Blob
                                │
                                ▼
                         Resume Artifact

Implementation Principle

The Resume Artifact is the content; the template is the presentation.

Changing the template must never change the underlying Resume data.

The same Resume Artifact should be capable of being rendered as Classic, Modern, or Minimal and exported to PDF without modifying the canonical data.
