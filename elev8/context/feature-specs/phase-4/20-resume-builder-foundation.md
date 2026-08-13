# Phase 4.5 - Resume Builder Foundation

## Objective

Implement the complete architectural foundation for the Resume Builder.

This phase creates the complete project structure, routing, APIs, data models, validation schemas, and reusable components required for the Resume Builder.

This phase intentionally does **NOT** implement resume editing, template rendering, or PDF generation.

The goal is to establish a scalable architecture that integrates seamlessly with the rest of Elev8.

---

# Background

The Resume Builder is independent from Resume Scoring.

However, both modules share the same Resume data model.

Future versions will allow users to

- Import parsed resumes
- Edit resume sections
- Generate PDFs
- Switch templates

Those capabilities are outside the scope of this phase.

---

# AI Implementation Rules

Before implementation

- Read AGENT_RULES.md
- Read PROJECT_OVERVIEW.md
- Read this specification completely.

Implement only

- Builder routes
- Boilerplate
- Folder structure
- Types
- Validation schemas
- Placeholder UI
- API routes
- Builder state

Do NOT implement

- Resume editing
- Live preview
- PDF generation
- Template rendering
- AI rewriting
- Blob uploads

---

# Routing

Create

```
/dashboard/resume-builder
```

Builder Home

---

Create

```
/dashboard/resume-builder/new
```

New Resume

---

Create

```
/dashboard/resume-builder/[resumeId]
```

Resume Editor (Placeholder)

---

Create

```
/dashboard/resume-builder/templates
```

Template Gallery (Placeholder)

---

# Builder Architecture

The Resume Builder should use structured resume data.

Never edit HTML directly.

Architecture

```
Resume Data

↓

Builder State

↓

Template

↓

Preview

↓

Export
```

Only the Builder State layer is created in this phase.

---

# Resume Schema

Create

```ts
interface ResumeProfile {
  personalInformation;

  professionalSummary;

  skills;

  projects;

  experience;

  education;

  certifications;

  achievements;
}
```

This schema should match the ParsedResume schema from Phase 4.2.

---

# Builder State

Create

```
BuilderState
```

Responsibilities

- Active Resume
- Active Template
- Dirty State
- Last Saved
- Validation Status

No persistence yet.

---

# Validation

Create

```
resume-builder.schema.ts
```

Validate

- Required fields
- Data types
- Empty arrays
- String lengths

Use

- Zod

---

# API Routes

Create placeholder endpoints

```
GET

/api/resume-builder

POST

/api/resume-builder

PATCH

/api/resume-builder/[id]

DELETE

/api/resume-builder/[id]
```

Return placeholder responses.

No database logic.

---

# Components

Create

```
features/resume-builder/components/

builder-layout/

builder-sidebar/

builder-toolbar/

builder-content/

section-card/

section-list/

resume-preview/

template-selector/

builder-header/

builder-footer/

coming-soon/

index.ts
```

---

# Hooks

Create

```
use-builder.ts

use-builder-state.ts

use-builder-validation.ts

use-active-template.ts
```

---

# Services

Create

```
builder.service.ts

builder-validation.service.ts

template.service.ts
```

Responsibilities

Builder

- Manage Builder State

Validation

- Validate ResumeProfile

Template

- Load template metadata

---

# Templates

Create placeholder metadata

```
Classic

Modern

Minimal
```

Do not render templates.

---

# Preview

Create

```
Resume Preview
```

placeholder component.

Display

```
Live Preview

Coming Soon
```

---

# Builder Layout

Desktop Layout

```
Sidebar

↓

Toolbar

↓

Editor Area

↓

Preview Panel
```

Only placeholders.

---

# Sidebar Sections

Display

```
Personal Information

Professional Summary

Skills

Projects

Experience

Education

Certifications

Achievements
```

No editing.

---

# Toolbar

Display

```
Save

Export PDF

Import Resume

Templates
```

All buttons disabled.

Display

```
Coming Soon
```

---

# Template Gallery

Display

```
Classic

Modern

Minimal
```

Selecting templates has no effect.

---

# Import Resume

Create placeholder

```
Import From Resume Assessment
```

No functionality.

---

# Export

Display

```
Export PDF

Coming Soon
```

No implementation.

---

# Components

Create

```
ResumeBuilderLayout

BuilderSidebar

BuilderToolbar

ResumePreview

TemplateGallery

ComingSoonCard

EmptyBuilder
```

---

# Types

Create

```
ResumeProfile

BuilderState

BuilderSection

Template

TemplateMetadata

ValidationState
```

---

# Constants

Create

```
builder-sections.ts

templates.ts

builder-routes.ts
```

---

# Accessibility

Support

- Keyboard navigation
- Focus management
- Screen readers

---

# Non-Functional Requirements

- Modular
- Feature-first
- Type-safe
- Shared Resume schema
- Production-ready architecture

---

# Acceptance Criteria

Routes

- All builder routes exist.
- Placeholder pages render.

Builder

- Builder layout renders.
- Sidebar renders.
- Toolbar renders.
- Preview placeholder renders.

Types

- ResumeProfile created.
- BuilderState created.
- Validation schema created.

API

- Placeholder endpoints exist.

Templates

- Template metadata loads.
- Gallery renders.

Code Quality

- No TypeScript errors.
- No lint errors.
- Project builds successfully.

---

# Out of Scope

Do NOT implement

- Resume editing
- PDF export
- Live preview
- Blob Storage
- Prisma persistence
- AI rewriting
- Import functionality
- Template rendering

---

# Deliverables

```
✓ Resume Builder Routes

✓ Builder Layout

✓ Sidebar

✓ Toolbar

✓ Resume Schema

✓ Builder State

✓ Validation Schema

✓ Placeholder APIs

✓ Template Metadata

✓ Preview Placeholder

✓ Shared Resume Model

✓ Foundation for Future Builder
```

---

# Task Checklist

## Routing

- [ ] Create Builder Home
- [ ] Create New Resume route
- [ ] Create Resume Editor placeholder
- [ ] Create Template Gallery

---

## Builder

- [ ] Create Builder Layout
- [ ] Create Sidebar
- [ ] Create Toolbar
- [ ] Create Preview placeholder

---

## Types

- [ ] ResumeProfile
- [ ] BuilderState
- [ ] Template
- [ ] ValidationState

---

## Validation

- [ ] Create Zod schema
- [ ] Validate ResumeProfile

---

## Services

- [ ] Builder service
- [ ] Validation service
- [ ] Template service

---

## APIs

- [ ] GET endpoint
- [ ] POST endpoint
- [ ] PATCH endpoint
- [ ] DELETE endpoint

---

## Templates

- [ ] Classic metadata
- [ ] Modern metadata
- [ ] Minimal metadata

---

## Testing

- [ ] Builder routes render
- [ ] Placeholder UI renders
- [ ] APIs respond
- [ ] Types compile
- [ ] Project builds successfully
- [ ] No TypeScript errors
- [ ] No lint errors
