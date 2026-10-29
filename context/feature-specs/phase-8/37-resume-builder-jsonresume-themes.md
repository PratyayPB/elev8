# Resume Builder: JSON Resume Theme Architecture & Integration

## Objective

Implement the Resume Builder template architecture so that all resume templates use:

```text
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

Keep `BuilderResumeArtifact` as the application's internal source of truth. Do not replace it with the JSON Resume schema.

## 1. JSON Resume Adapter

Create an adapter, suggested location:

```text
src/features/resume-builder/adapters/builder-to-json-resume.ts
```

It must:
- Accept `BuilderResumeArtifact`.
- Return a valid JSON Resume object.
- Map `personalInformation` → `basics`.
- Map `professionalSummary` → `basics.summary`.
- Map `experience` → `work`.
- Map `education` → `education`.
- Map `projects` → `projects`.
- Map `skills` → `skills`.
- Map `certifications` → `certificates`.
- Map `achievements` → `awards`.
- Preserve all compatible data and never invent data.
- Handle optional/empty sections safely.
- Be deterministic and independently testable.

The adapter is the only layer responsible for translating the application's artifact into JSON Resume format.

## 2. JSON Resume Schema

Use the official JSON Resume schema as the target contract. Validate the generated object where practical before passing it to a theme.

Do not change `BuilderResumeArtifact` merely to match JSON Resume.

## 3. Resume Template Categories

Add exactly four categories:

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

## 4. Templates to Install

Integrate these 17 JSON Resume themes.

### ATS Friendly

- Academic CV Lite — `academic-cv-lite`
- Consultant Polished — `consultant-polished`
- Developer Mono — `developer-mono`
- Government Standard — `government-standard`

Registry references:

- https://registry.jsonresume.org/thomasdavis?theme=academic-cv-lite
- https://registry.jsonresume.org/thomasdavis?theme=consultant-polished
- https://registry.jsonresume.org/thomasdavis?theme=developer-mono
- https://registry.jsonresume.org/thomasdavis?theme=government-standard

### Minimal & Modern

- Architects Portfolio — `architects-portfolio`
- Minimalist Grid — `minimalist-grid`
- Nordic Minimal — `nordic-minimal`
- Desert Modern — `desert-modern`

Registry references:

- https://registry.jsonresume.org/thomasdavis?theme=architects-portfolio
- https://registry.jsonresume.org/thomasdavis?theme=minimalist-grid
- https://registry.jsonresume.org/thomasdavis?theme=nordic-minimal
- https://registry.jsonresume.org/thomasdavis?theme=desert-modern

### 2 Column

- Executive Slate — `executive-slate`
- Elegant — `elegant`
- Macchiato — `macchiato`
- Sidebar — `sidebar`

Registry references:

- https://registry.jsonresume.org/thomasdavis?theme=executive-slate
- https://registry.jsonresume.org/thomasdavis?theme=elegant
- https://registry.jsonresume.org/thomasdavis?theme=macchiato
- https://registry.jsonresume.org/thomasdavis?theme=sidebar

### Creative

- Creative Studio — `creative-studio`
- Even — `even`
- Art Deco — `art-deco`
- Art School Modern — `art-school-modern`
- Brutalist — `brutalist`

Registry references:

- https://registry.jsonresume.org/thomasdavis?theme=creative-studio
- https://registry.jsonresume.org/thomasdavis?theme=even
- https://registry.jsonresume.org/thomasdavis?theme=art-deco
- https://registry.jsonresume.org/thomasdavis?theme=art-school-modern
- https://registry.jsonresume.org/thomasdavis?theme=brutalist

Before installation, verify the actual npm package/repository, license, React/Next.js compatibility, rendering method, runtime/build requirements, and Puppeteer compatibility for every theme. Do not assume the registry slug is the npm package name.

## 5. Template Metadata

Add a Prisma model based on:

```prisma
model ResumeTemplate {
  id          String @id
  name        String
  slug        String @unique
  category    ResumeTemplateCategory

  supportedSections String[]

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

Use the database as the source of truth for available template metadata.

Store for every template:
- `id`
- `name`
- `slug`
- `category`
- `supportedSections`

The exact `supportedSections` values must be determined from the actual theme implementation/verified authoritative JSON Resume theme coverage data. Do not guess.

Supported JSON Resume section identifiers may include:

```text
basics
work
volunteer
education
awards
certificates
publications
skills
languages
interests
references
projects
```

Only include sections the theme actually renders.

## 6. Template Registry

Create a centralized registry rather than expanding the current renderer with a large switch.

Suggested location:

```text
src/features/resume-builder/templates/registry.ts
```

Conceptually:

```ts
const RESUME_TEMPLATE_REGISTRY = {
  "academic-cv-lite": AcademicCvLite,
  "consultant-polished": ConsultantPolished,
  "developer-mono": DeveloperMono,
  // ...all 17 themes
};
```

Use the actual export/import mechanism required by each theme.

## 7. ResumeTemplateRenderer

Keep `ResumeTemplateRenderer` as the single rendering entry point.

New flow:

```text
ResumeTemplateRenderer
        ↓
BuilderResumeArtifact
        ↓
builderToJsonResume()
        ↓
JSON Resume
        ↓
Template Registry
        ↓
Selected JSON Resume Theme
```

Do not scatter template-selection logic across the application.

## 8. Live Preview

Preserve the existing `resume-preview.tsx` flow:

```text
Editor state
    ↓
BuilderResumeArtifact
    ↓
JSON Resume Adapter
    ↓
Selected Theme
    ↓
Live Preview
```

Preview must update from current in-memory editor state without requiring a save.

## 9. PDF Generation

Preserve the existing Puppeteer pipeline:

```text
BuilderResumeArtifact
        ↓
JSON Resume Adapter
        ↓
Selected JSON Resume Theme
        ↓
HTML
        ↓
Puppeteer
        ↓
A4 PDF
```

Use the same theme renderer for preview and PDF wherever technically possible.

Preserve existing authentication, ownership checks, artifact retrieval, A4 output, print/background settings, and sanitized filenames.

## 10. Template Switching During Building

Users must be able to switch templates during an active resume-building session.

When a template is selected:

1. Load its database metadata.
2. Determine which Builder Resume sections contain meaningful user data.
3. Map those sections to JSON Resume section identifiers.
4. Compare them with `supportedSections`.
5. If populated sections are unsupported, show an existing application Toast.
6. Allow the user to continue switching.

Example:

```text
You switched to Developer Mono.
This template does not support the Certifications section.
Your certification data will remain saved but will not appear in this template.
```

Never delete or modify unsupported data. Switching back to a supporting template must make the data visible again.

If multiple sections are unsupported, identify all affected sections while respecting the application's Toast UX constraints.

## 11. Detecting Populated Sections

Do not treat merely existing objects/arrays as populated.

Examples:

```text
experience: []
→ not populated

experience: [{ actual data }]
→ populated
```

Empty strings, empty arrays, and objects with no meaningful user data must not count.

Create a reusable helper, e.g.:

```ts
getPopulatedBuilderSections(artifact)
```

## 12. Centralized Section Mapping

Create one mapping between Builder sections and JSON Resume sections:

```ts
const BUILDER_TO_JSON_RESUME_SECTION = {
  personalInformation: "basics",
  professionalSummary: "basics",
  experience: "work",
  education: "education",
  projects: "projects",
  skills: "skills",
  certifications: "certificates",
  achievements: "awards",
};
```

Use it for compatibility checks. Do not duplicate this mapping in components.

## 13. Database Seeding

Create an idempotent seed/migration mechanism for all 17 templates.

Use the theme slug as the stable unique identifier.

Populate:

```text
id
name
slug
category
supportedSections
```

Running the seed multiple times must not create duplicates.

## 14. Template Selection UI

Update the template selection UI to show:

```text
ATS Friendly
Minimal & Modern
2 Column
Creative
```

Display the corresponding templates under each category.

Use database template metadata rather than hardcoding the available template list.

Use the template slug for rendering.

## 15. Existing Architecture Preservation

Do not break:

- `BuilderResumeArtifact` as persisted content model
- Blob Storage artifact persistence
- PostgreSQL resume metadata
- Autosave/debounce behavior
- Optimistic locking/version protection
- Duplicate/delete/rename/status operations
- Authentication and authorization
- Existing saved resumes

Template switching must not create a new resume and must not mutate resume content.

If old `CLASSIC`, `MODERN`, or `MINIMAL` templates remain in existing saved resumes, keep them working or perform an explicit safe migration. Do not silently change the meaning of existing saved template identifiers.

## 16. Testing

Add tests for:

### Adapter
- All supported artifact sections map correctly.
- Optional fields are handled.
- Empty sections do not create invalid data.
- User data is not silently lost.

### Registry
- All 17 configured templates resolve correctly.
- Unknown template IDs fail safely.
- No duplicate template registration.

### Metadata
- All 17 templates exist after seeding.
- Slugs are unique.
- Categories are correct.
- Supported sections come from verified theme capabilities.

### Switching
- No populated data + any template → no warning.
- Supported populated section → no warning.
- Unsupported populated section → Toast shown.
- Unsupported data remains in the artifact.
- Switching back to a supporting template restores visibility.

### PDF
- Every installed theme renders successfully through the existing Puppeteer pipeline.
- Every theme produces a valid A4 PDF.

## 17. Non-Goals

Do not:
- Replace `BuilderResumeArtifact` with JSON Resume as the database model.
- Remove Blob Storage.
- Remove autosave/version control.
- Rewrite the entire Resume Builder.
- Create separate data models for individual themes.
- Delete user data when switching templates.
- Hardcode unverified theme section support.
- Assume all JSON Resume themes have identical section coverage.
- Add Trigger.dev/background jobs for template rendering.

## Final Architecture

```text
                    BuilderResumeArtifact
                             │
                             ▼
                   JSON Resume Adapter
                             │
                             ▼
                     JSON Resume Schema
                             │
                             ▼
                    Template Registry
                             │
              ┌──────────────┼──────────────┐
              ▼              ▼              ▼
          ATS Friendly   Minimal/Modern   2 Column
              │              │              │
              └──────────────┼──────────────┘
                             │
                         Creative
                             │
                             ▼
                   Selected JSON Resume
                           Theme
                             │
                   ┌─────────┴─────────┐
                   ▼                   ▼
             Live Preview          Puppeteer
                                       │
                                       ▼
                                      PDF
```

**Core principle:** One application resume artifact → one JSON Resume adapter → many interchangeable themes.
