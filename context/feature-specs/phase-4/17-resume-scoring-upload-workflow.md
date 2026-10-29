# Phase 4.1 - Resume Scoring Upload Workflow

## Objective

Implement the complete Resume Scoring upload workflow for **Elev8**.

This phase is responsible for collecting the user's resume, validating the uploaded file, creating a standardized `ResumeAssessmentRequest`, initializing the AI assessment workflow, and creating the metadata required for the background assessment pipeline.

This phase **must NOT parse the PDF**.

This phase **must NOT call the LLM**.

This phase **must NOT generate any assessment**.

Parsing and AI assessment are implemented in Phase 4.2.

---

# Background

The Resume Scoring feature follows the same architectural principles used throughout Elev8.

- Progressive Personalization
- Blob-first Storage
- Immutable AI Artifacts
- Shared Job System
- Trigger.dev Background Processing

Every uploaded resume creates a completely new Resume Artifact.

Resume uploads are immutable.

Uploading the same resume twice creates two independent Resume Artifacts.

---

# AI Implementation Rules

Before implementation

- Read AGENT_RULES.md
- Read PROJECT_OVERVIEW.md
- Read this specification completely.

Implement only

- Resume Upload Workflow
- Validation
- ResumeAssessmentRequest
- Metadata creation
- Upload UI

Do NOT implement

- pdf-parse
- Gemini
- Trigger.dev
- Resume parsing
- Resume assessment
- Resume Insights
- Resume Builder

---

# User Flow

```
Resume Workspace

↓

Resume Scoring

↓

Upload Resume

↓

Validation

↓

Optional Personalization

↓

Review

↓

ResumeAssessmentRequest

↓

Phase 4.2
```

---

# Functional Requirements

The workflow consists of

## Stage 1

Resume Upload

## Stage 2

Optional Personalization

## Stage 3

Review

---

# Stage 1

## Resume Upload

Allow users to upload exactly one resume.

Supported format

```
PDF
```

Maximum file size

```
10 MB
```

Drag & Drop should be supported.

Manual file selection should also be supported.

---

# File Validation

Validate

- PDF format
- Maximum size
- Non-empty file

Reject

- DOCX
- Images
- ZIP
- TXT
- Empty PDFs

Display meaningful validation errors.

---

# Resume Preview

Display

```
Filename

File Size

Upload Date
```

No PDF rendering required.

---

# Required Inputs

Collect

## Target Role

Required

Searchable Combobox

Examples

- Frontend Developer
- Backend Developer
- Full Stack Developer
- DevOps Engineer
- AI Engineer
- Data Scientist

Allow custom roles.

---

## Experience Level

Required

Options

```
Beginner

Basic

Intermediate

Advanced
```

---

# Stage 2

# AI-Powered Personalization

After required inputs are complete,

generate optional personalization questions.

Purpose

Improve assessment quality.

---

# Requirements

Maximum

```
4 Questions
```

Minimum

```
0 Questions
```

Questions should

- Depend on role
- Depend on experience
- Improve assessment quality

---

# Supported Question Types

Single Select

Example

```
Which companies are you targeting?

○ Startup

○ Mid-size

○ FAANG

○ Government

○ No Preference
```

---

Multi Select

Example

```
What areas should receive more attention?

□ Projects

□ ATS Optimization

□ Technical Skills

□ Work Experience

□ Leadership
```

---

Unsupported

- Paragraph Input
- Voice Input
- File Upload
- Numeric Input

---

# Skip Personalization

Users should be able to

- Skip individual questions
- Skip entire personalization

Display

```
Skip Personalization
```

---

# Stage 3

## Review

Display

```
Resume Filename

Target Role

Experience Level

Personalization Summary
```

Allow

- Edit
- Continue
- Cancel

---

# ResumeAssessmentRequest

Create

```ts
interface ResumeAssessmentRequest {
  role: string;

  experienceLevel: "Beginner" | "Basic" | "Intermediate" | "Advanced";

  uploadedFile: File;

  personalization: {
    skipped: boolean;

    answers: Answer[];
  };
}
```

---

# Navigation

Support

- Previous
- Next
- Edit
- Cancel
- Skip Personalization

---

# Persistence

Temporarily preserve form state while navigating.

Do not upload the PDF yet.

Do not create Blob artifacts.

Do not write to Prisma.

---

# Components

Create

```
features/resume/components/

resume-upload/

upload-dropzone/

file-preview/

role-selector/

experience-selector/

personalization-step/

dynamic-question/

review-step/

step-indicator/

navigation/

index.ts
```

---

# Hooks

Create

```
use-resume-upload.ts

use-resume-request.ts

use-resume-personalization.ts
```

---

# Services

Create

```
resume-request.service.ts

resume-personalization.service.ts
```

Responsibilities

Resume Request

- Validate upload
- Build ResumeAssessmentRequest

Personalization

- Generate optional questions
- Validate AI response

---

# Types

Create

```
ResumeAssessmentRequest

ResumeUpload

ResumeMetadata

ResumeExperience

Question

Answer
```

---

# Constants

Create

```
supported-file-types.ts

resume-experience.ts

resume-roles.ts
```

---

# Validation

Use

- React Hook Form
- Zod

Validate

- PDF only
- Maximum file size
- Required fields
- AI responses

---

# UI Requirements

Wizard Layout

```
Header

↓

Step Indicator

↓

Upload

↓

Personalization

↓

Review

↓

Navigation
```

Desktop-first.

Responsive.

No visual polish required.

---

# Accessibility

Support

- Keyboard navigation
- Drag & Drop accessibility
- Screen readers
- Focus management

---

# Non-Functional Requirements

- Modular
- Type-safe
- Reusable
- Production-ready

---

# Acceptance Criteria

Upload

- PDF upload works.
- Drag & Drop works.
- Validation works.

Inputs

- Role collected.
- Experience collected.

Personalization

- AI generates up to four questions.
- Skip works.

Review

- Summary displayed.
- Edit works.

Request

- ResumeAssessmentRequest created successfully.

Code Quality

- No TypeScript errors.
- No lint errors.
- Project builds successfully.

---

# Out of Scope

Do NOT implement

- PDF parsing
- Gemini
- Trigger.dev
- Blob uploads
- Prisma
- Resume scoring
- Resume insights
- Resume builder

---

# Deliverables

```
✓ Resume Upload Wizard

✓ PDF Validation

✓ Required Inputs

✓ AI Personalization

✓ Review Screen

✓ ResumeAssessmentRequest Builder

✓ Hooks

✓ Components

✓ Services

✓ Types
```

---

# Task Checklist

## Upload

- [ ] Create upload page
- [ ] Create drag & drop component
- [ ] Validate PDF
- [ ] Validate file size

---

## Inputs

- [ ] Role selector
- [ ] Experience selector

---

## Personalization

- [ ] Generate AI questions
- [ ] Validate response
- [ ] Skip functionality

---

## Review

- [ ] Build review screen
- [ ] Edit workflow
- [ ] Build ResumeAssessmentRequest

---

## Validation

- [ ] React Hook Form
- [ ] Zod schemas
- [ ] File validation

---

## Testing

- [ ] PDF upload succeeds
- [ ] Invalid files rejected
- [ ] Required validation works
- [ ] AI questions render
- [ ] ResumeAssessmentRequest generated
- [ ] Project builds successfully
- [ ] No TypeScript errors
- [ ] No lint errors
