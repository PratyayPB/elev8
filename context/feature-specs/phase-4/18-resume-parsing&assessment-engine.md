# Phase 4.2 - Resume Parsing & Assessment Engine

## Objective

Implement the AI-powered Resume Parsing & Assessment Engine for **Elev8**.

This phase is responsible for transforming an uploaded PDF resume into a fully assessed, versioned Resume Artifact.

The assessment pipeline should execute as a **Trigger.dev background task**.

The pipeline consists of five major stages:

1. PDF Parsing
2. Resume Normalization
3. Resume Section Assessment
4. Overall Resume Assessment
5. Artifact Generation & Persistence

This phase must NOT implement the Resume Builder.

Resume Insights are implemented in Phase 4.3.

---

# Background

The Resume Assessment Engine follows the same architecture as the Roadmap and Interview modules.

Every uploaded resume creates an immutable Resume Artifact.

The original PDF is preserved inside Blob Storage.

The parsed resume, AI assessment, analytics, and recommendations are appended to the artifact.

---

# AI Implementation Rules

Before implementation

- Read AGENT_RULES.md
- Read PROJECT_OVERVIEW.md
- Read this specification completely.

Implement only

- Trigger.dev pipeline
- PDF parsing
- Resume normalization
- AI assessment
- Artifact generation
- Blob persistence
- Prisma metadata update

Do NOT implement

- Resume Builder
- Resume Insights
- Resume Workspace

---

# Processing Pipeline

```
ResumeAssessmentRequest

↓

Upload Original PDF

↓

Create Resume Metadata

↓

Trigger.dev Job

↓

Download PDF

↓

pdf-parse

↓

Resume Normalizer

↓

Validate Resume JSON

↓

Section Assessment

↓

Overall Assessment

↓

Generate Analytics

↓

Create Resume Artifact

↓

Upload Artifact

↓

Update Prisma

↓

COMPLETED
```

---

# Trigger.dev Integration

Create

```
tasks/assess-resume.ts
```

Responsibilities

- Download PDF
- Parse PDF
- Normalize Resume
- Generate section assessment
- Generate overall assessment
- Generate analytics
- Build Resume Artifact
- Upload artifact
- Update Prisma
- Update Job progress

---

# Job Progress

Expose progress.

Example

```
10%

Downloading Resume

↓

20%

Parsing PDF

↓

35%

Normalizing Resume

↓

55%

Assessing Resume Sections

↓

75%

Generating Overall Assessment

↓

90%

Uploading Artifact

↓

100%

Assessment Complete
```

---

# Stage 1 — PDF Parsing

Use

```
pdf-parse
```

Responsibilities

- Extract text
- Validate extraction
- Reject corrupted PDFs
- Reject encrypted PDFs
- Return raw text

No AI should be used during parsing.

---

# Stage 2 — Resume Normalization

Create

```
resume-normalizer.service.ts
```

Purpose

Transform extracted text into a deterministic Resume JSON schema.

The normalization layer isolates the AI pipeline from the PDF parser.

Future parser replacements should not affect downstream services.

---

# Resume JSON Schema

Normalize into

```ts
interface ParsedResume {
  personalInformation;

  summary;

  skills;

  projects;

  experience;

  education;

  certifications;

  achievements;
}
```

---

# Validation

Create

```
resume-validator.ts
```

Validate

- Required fields
- Empty sections
- Schema integrity
- Duplicate sections

Reject malformed resumes.

---

# Stage 3 — Resume Section Assessment

Assess every resume section using a **single bulk Gemini call**.

Do NOT evaluate sections individually using multiple requests.

The model should return a structured response containing evaluations for all sections.

---

# Input

Provide

- Parsed Resume
- Role
- Experience Level
- Personalization Answers

---

# Output

Example

```json
{
  "sections": {
    "skills": {
      "score": 82,

      "strengths": [],

      "weaknesses": [],

      "missingSkills": []
    },

    "projects": {
      "score": 88
    },

    "experience": {
      "score": 74
    },

    "education": {
      "score": 91
    }
  }
}
```

---

# Section Assessment Rules

Evaluate

- Skills
- Projects
- Experience
- Education
- Certifications
- Resume Summary

The evaluation should remain section-specific.

---

# Stage 4 — Overall Resume Assessment

Generate the overall assessment using

- Section assessments
- Resume metadata
- Analytics

Do NOT send the original parsed resume again.

Only the structured section evaluations should be provided.

---

# Overall Assessment Output

Example

```json
{
  "overallScore": 84,

  "atsScore": 81,

  "technicalStrength": 88,

  "projectQuality": 86,

  "experienceStrength": 74,

  "strengths": [],

  "weaknesses": [],

  "missingKeywords": [],

  "recommendedSkills": [],

  "recommendedProjects": [],

  "recommendedRoadmap": "",

  "recommendedInterview": "",

  "summary": ""
}
```

---

# AI Prompt Rules

Prompt should instruct Gemini to

- Return JSON only
- No Markdown
- No explanations
- No code blocks
- Strictly follow schema

---

# Analytics

Generate deterministic analytics.

Do NOT use AI.

Examples

```
Skill Count

Project Count

Experience Count

Certification Count

Education Count

Word Count

Estimated ATS Keyword Density
```

---

# Resume Artifact

Create

```text
Resume Artifact

├── version

├── metadata

├── parsedResume

├── sectionAssessment

├── overallAssessment

├── analytics

└── recommendations
```

---

# Metadata

Include

```
Resume ID

User ID

Role

Experience Level

Assessment Date

Generator Version

Artifact Version
```

---

# Blob Storage

Store

```
resumes/

{resumeId}.json
```

Original PDF

```
resumes/

{resumeId}.pdf
```

The PDF and Resume Artifact should have separate Blob URLs.

---

# Prisma Persistence

Store only metadata.

```
Resume

id

userId

role

experienceLevel

overallScore

atsScore

artifactBlobUrl

originalPdfBlobUrl

status

createdAt

updatedAt
```

No parsed resume should be stored in PostgreSQL.

---

# Retry Strategy

Assessment executes inside Trigger.dev.

Retry

Maximum

```
3 Attempts
```

Retry only

- Temporary API failure
- Invalid JSON
- Timeout

Permanent validation failures terminate the job.

---

# Services

Create

```
pdf-parser.service.ts

resume-normalizer.service.ts

section-assessment.service.ts

overall-assessment.service.ts

resume-artifact.service.ts

resume-validator.ts
```

Responsibilities

PDF Parser

- Extract text

Normalizer

- Generate Resume JSON

Section Assessment

- Evaluate all resume sections

Overall Assessment

- Generate final report

Artifact

- Build Resume Artifact

Validator

- Validate every pipeline stage

---

# Types

Create

```
ParsedResume

ResumeSectionAssessment

ResumeOverallAssessment

ResumeArtifact

ResumeAnalytics

ResumeMetadata
```

---

# Constants

Create

```
resume-prompts.ts

resume-schema.ts

assessment-schema.ts
```

---

# Non-Functional Requirements

- Modular
- Provider agnostic
- Blob-first
- Versioned artifacts
- Deterministic normalization
- Production-ready

---

# Acceptance Criteria

Parsing

- PDF parsed successfully.
- Corrupted PDFs rejected.
- Normalization succeeds.

Assessment

- Section assessment generated.
- Overall assessment generated.
- Scores valid.

Storage

- Original PDF uploaded.
- Resume Artifact uploaded.
- Prisma metadata updated.

Validation

- Invalid JSON rejected.
- Invalid schema rejected.

Jobs

- Trigger.dev executes.
- Retry strategy works.
- Progress updates correctly.

Code Quality

- No TypeScript errors.
- No lint errors.
- Project builds successfully.

---

# Out of Scope

Do NOT implement

- Resume Insights
- Resume Workspace
- Resume Builder
- PDF export
- Resume editing
- Resume templates

---

# Deliverables

```
✓ Trigger.dev Resume Assessment Task

✓ PDF Parser

✓ Resume Normalizer

✓ Resume Validator

✓ Bulk Section Assessment

✓ Overall Assessment

✓ Resume Analytics

✓ Versioned Resume Artifact

✓ Blob Storage Integration

✓ Prisma Metadata Persistence

✓ Retry Strategy

✓ Job Progress Tracking
```

---

# Task Checklist

## Trigger.dev

- [ ] Create assess-resume task
- [ ] Register task
- [ ] Configure retries
- [ ] Track progress

---

## PDF Parsing

- [ ] Download PDF
- [ ] Parse PDF
- [ ] Validate extraction

---

## Resume Normalization

- [ ] Create ParsedResume schema
- [ ] Normalize extracted text
- [ ] Validate Resume JSON

---

## AI Assessment

- [ ] Bulk section assessment
- [ ] Validate section scores
- [ ] Overall assessment
- [ ] Generate recommendations

---

## Analytics

- [ ] Generate deterministic metrics
- [ ] Validate analytics

---

## Artifact

- [ ] Build Resume Artifact
- [ ] Upload JSON
- [ ] Update Blob URLs
- [ ] Update Prisma metadata

---

## Testing

- [ ] Valid PDF assessment
- [ ] Corrupted PDF rejection
- [ ] Section assessment succeeds
- [ ] Overall assessment succeeds
- [ ] Blob uploads succeed
- [ ] Prisma updates correctly
- [ ] Retry strategy works
- [ ] Project builds successfully
- [ ] No TypeScript errors
- [ ] No lint errors
