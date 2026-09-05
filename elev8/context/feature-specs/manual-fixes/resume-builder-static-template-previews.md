# Resume Builder: Static Template Screenshots for Template Gallery

## Objective

Use static screenshots for template browsing/selection, while keeping the real JSON Resume rendering pipeline for the editor preview and PDF generation.

```text
TEMPLATE GALLERY
       ↓
Static Template Screenshots
       ↓
User selects template
       ↓
RESUME EDITOR
       ↓
BuilderResumeArtifact
       ↓
JSON Resume Adapter
       ↓
JSON Resume Schema
       ↓
Selected JSON Resume Theme
       ↓
Live Preview
       ↓
Puppeteer
       ↓
PDF
```

Do not replace the editor's actual preview with screenshots.

## 1. Create Screenshot Directory

Create:

```text
public/resume-templates/
```

The developer will manually add the screenshots. **Do not generate, download, or replace them automatically.**

Expected files:

```text
public/resume-templates/
├── academic-cv-lite.webp
├── consultant-polished.webp
├── developer-mono.webp
├── government-standard.webp
├── architects-portfolio.webp
├── minimalist-grid.webp
├── nordic-minimal.webp
├── desert-modern.webp
├── executive-slate.webp
├── elegant.webp
├── macchiato.webp
├── sidebar.webp
├── creative-studio.webp
├── even.webp
├── art-deco.webp
├── art-school-modern.webp
└── brutalist.webp
```

Prefer `.webp` unless existing project conventions require another format.

## 2. Store Screenshot Metadata

Extend the existing `ResumeTemplate` model:

```prisma
model ResumeTemplate {
  id          String @id
  name        String
  slug        String @unique
  category    ResumeTemplateCategory

  supportedSections String[]
  previewImage      String

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

Store public paths such as:

```text
/resume-templates/developer-mono.webp
```

Do not store image binaries in PostgreSQL.

## 3. Template Categories

Keep exactly four categories:

```text
ATS_FRIENDLY
MINIMAL_MODERN
TWO_COLUMN
CREATIVE
```

User-facing labels:

```text
ATS Friendly
Minimal & Modern
2 Column
Creative
```

## 4. Template Metadata

Seed all 17 templates with:

- `id`
- `name`
- `slug`
- `category`
- `supportedSections`
- `previewImage`

The seed must be idempotent.

Example:

```ts
{
  id: "developer-mono",
  name: "Developer Mono",
  slug: "developer-mono",
  category: "ATS_FRIENDLY",
  supportedSections: [...],
  previewImage: "/resume-templates/developer-mono.webp",
}
```

Do not guess `supportedSections`; use the verified theme capabilities already established for the JSON Resume integration.

## 5. Template Gallery

Update the template selector to use `ResumeTemplate.previewImage` from the database rather than rendering the actual resume just to show a template card.

Conceptually:

```tsx
<img
  src={template.previewImage}
  alt={`${template.name} resume template preview`}
/>
```

Prefer the project's existing Next.js image conventions where applicable.

The gallery must not call:

```text
POST /api/builder/preview
```

for template cards.

## 6. Template Selection

When a user selects a template:

1. Select the template.
2. Persist/update the selected template using the existing Resume Builder behavior.
3. Render the user's actual resume using the selected JSON Resume theme.
4. Do not use the screenshot as the editor preview.

## 7. Keep the Existing Real Preview

The editor preview remains:

```text
Editor state
    ↓
BuilderResumeArtifact
    ↓
POST /api/builder/preview
    ↓
builderToJsonResume()
    ↓
Template Registry
    ↓
JSON Resume Theme
    ↓
iframe srcDoc
```

Do not remove or bypass:

- `ResumeTemplateRenderer`
- JSON Resume adapter
- JSON Resume themes
- `/api/builder/preview`
- iframe-based actual preview
- Puppeteer PDF generation

## 8. Preview Debounce

The current real preview uses a 500ms debounce. Increase it to approximately **1000–1500ms** so preview rendering does not occur on every small editing action.

Keep preview debounce independent from the existing autosave debounce. Do not unintentionally change autosave behavior.

## 9. Optional Preview Caching

If it fits naturally into the existing architecture, avoid rendering identical preview content repeatedly using a key based on template slug and artifact content/version.

This is secondary. Do not introduce a complex caching system solely for this task.

## 10. Missing Screenshot Handling

Because screenshots are manually supplied, a missing screenshot must not break the template gallery.

If the expected image is unavailable:

- use the existing image fallback/placeholder if available;
- keep the template selectable;
- do not automatically fall back to `/api/builder/preview`.

## 11. Screenshot Guidelines

The implementation does not control screenshot contents. For consistency, screenshots should ideally:

- use the same sample resume data;
- use consistent dimensions/aspect ratio;
- show enough of the first page to communicate the design;
- represent the actual installed theme;
- use non-sensitive dummy data.

Do not add personal/user resume data to repository screenshots.

## 12. Performance Requirements

Template gallery should:

- use static images;
- avoid API rendering requests;
- avoid JSON Resume conversion;
- avoid dynamic theme imports;
- avoid iframe rendering;
- lazy-load images where appropriate.

The editor can continue using server-rendered HTML for the actual resume preview.

## 13. Architecture Preservation

Do not break or remove:

- `BuilderResumeArtifact`
- JSON Resume adapter
- JSON Resume schema
- template registry
- installed JSON Resume themes
- editor state
- autosave
- optimistic locking
- Blob Storage
- ResumeBuild metadata
- live preview
- Puppeteer PDF generation
- template switching
- authentication/authorization

This task optimizes **template browsing**, not resume rendering.

## 14. Acceptance Criteria

- [ ] `public/resume-templates/` exists.
- [ ] The application expects one screenshot for each of the 17 templates.
- [ ] The developer can manually place screenshots in that directory.
- [ ] `ResumeTemplate.previewImage` is stored in the database.
- [ ] Seed data contains all 17 preview image paths.
- [ ] Template gallery uses static screenshots.
- [ ] Template gallery does not call `/api/builder/preview`.
- [ ] All four categories are displayed correctly.
- [ ] All 17 templates are displayed.
- [ ] Missing screenshots do not break the UI.
- [ ] Selecting a template still renders the user's actual resume.
- [ ] JSON Resume adapter remains responsible for builder-to-JSON Resume conversion.
- [ ] Existing JSON Resume theme rendering remains intact.
- [ ] Existing Puppeteer PDF generation remains intact.
- [ ] Preview debounce changes from 500ms to approximately 1000–1500ms.
- [ ] Autosave behavior is not unintentionally changed.
- [ ] No user resume data is deleted or modified because of this change.
