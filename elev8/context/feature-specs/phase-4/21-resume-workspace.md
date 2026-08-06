# Phase 4.4 - Resume Workspace

## Objective

Implement the Resume Workspace for Elev8.

The Resume Workspace serves as the central hub where users can manage their resume assessment journey.

It should allow users to

- Upload new resumes
- Browse previous resume assessments
- Search and filter assessments
- Monitor resume improvement over time
- View assessment reports
- Re-score resumes
- Delete resumes
- Access Resume Builder
- Navigate to other Elev8 modules

The Workspace should emphasize continuous resume improvement rather than acting as simple file storage.

---

# Background

Every uploaded resume creates an immutable Resume Artifact.

Storage Architecture

```
Original Resume PDF

↓

Blob Storage

↓

Resume Artifact

↓

Blob Storage

↓

Metadata

↓

Prisma
```

The Resume Workspace primarily loads metadata from Prisma.

Blob artifacts are retrieved only when users open an assessment.

No AI generation occurs in this phase.

---

# AI Implementation Rules

Before implementation

- Read AGENT_RULES.md
- Read PROJECT_OVERVIEW.md
- Read this specification completely.

Implement only

- Resume Workspace
- Search
- Filters
- Performance Dashboard
- Workspace Navigation

Do NOT implement

- Resume Assessment
- Resume Parsing
- Resume Builder logic
- Trigger.dev
- Blob uploads

---

# Routing

Create

```
/resumes
```

This page becomes the Resume Workspace.

---

# Workspace Layout

```
Header

↓

Quick Actions

↓

Performance Overview

↓

Resume Status Sections

↓

Resume Library

↓

Improvement Trends

↓

Recommended Actions
```

---

# Section 1 — Quick Actions

Display

```
Upload Resume

Resume Builder (Coming Soon)

View Latest Assessment

Resume Templates (Coming Soon)
```

The Resume Builder button should route to the placeholder Builder page.

---

# Section 2 — Performance Overview

Display

```
Total Resume Assessments

Average Resume Score

Highest Resume Score

Average ATS Score

Most Recent Assessment

Total Uploads
```

Metrics should be generated from Prisma metadata.

---

# Section 3 — Resume Status

Display grouped sections

```
Processing

Completed

Failed
```

Processing resumes should always appear first.

---

# Section 4 — Resume Library

Display resume cards.

Each card displays

```
Resume Filename

Target Role

Experience Level

Overall Score

ATS Score

Status

Upload Date

Assessment Date
```

---

# Resume Card Actions

Each card supports

```
View Assessment

Re-score Resume

Download Original PDF

Delete

Upload Similar Resume
```

No editing.

No version history.

---

# View Assessment

Navigate to

```
Resume Improvement Hub
```

implemented in Phase 4.3.

---

# Re-score Resume

Re-score should

- Reuse the stored original PDF
- Allow user to update
  - Target Role
  - Experience Level
  - Personalization

- Generate a completely new Resume Artifact

Original assessment remains unchanged.

---

# Upload Similar Resume

Starts a new upload workflow

Pre-fill

- Target Role
- Experience Level

The user uploads a new PDF.

Creates a new Resume Artifact.

---

# Download Original Resume

Download the PDF stored in Blob Storage.

Do not download the Resume Artifact.

---

# Search

Support searching by

- Filename
- Target Role

Case-insensitive.

---

# Filters

Support

Status

```
Processing

Completed

Failed
```

Experience

```
Beginner

Basic

Intermediate

Advanced
```

Score

```
90+

80+

70+

60+

Below 60
```

ATS Score

```
90+

80+

70+

60+
```

---

# Sorting

Support

```
Newest

Oldest

Highest Score

Lowest Score

Highest ATS Score

Recently Updated

Alphabetical
```

---

# Section 5 — Resume Improvement Trends

Display deterministic trend charts.

Examples

```
Overall Resume Score Over Time

ATS Score Over Time

Uploads Per Month

Resume Assessments Completed

Average Resume Score
```

Generate charts using Prisma metadata.

No AI required.

---

# Personal Best

Display

```
Highest Resume Score

Highest ATS Score

Most Improved Resume

Most Frequently Targeted Role
```

---

# Assessment Timeline

Display

```
Resume Upload

↓

Resume Assessment

↓

Resume Upload

↓

Resume Assessment
```

Each timeline entry shows

- Upload Date
- Role
- Overall Score

---

# Section 6 — Recommended Actions

Generate deterministic recommendations.

Examples

```
Upload Updated Resume

↓

Generate Skill Roadmap

↓

Practice Interview

↓

Career Guidance

↓

Resume Builder
```

No AI generation required.

Recommendations should use existing assessment metadata.

---

# Empty State

Display

```
No Resume Assessments Yet

Upload your first resume to receive AI-powered feedback.
```

Display

```
Upload Resume
```

button.

---

# Resume Builder Placeholder

Provide

```
Resume Builder

Coming Soon
```

Button routes to

```
/resume-builder
```

Create the route.

Display placeholder UI.

No editing functionality.

---

# Components

Create

```
features/resume/components/

workspace/

performance-overview/

quick-actions/

status-section/

resume-card/

resume-library/

search/

filters/

trend-chart/

timeline/

recommendations/

empty-state/

builder-placeholder/

index.ts
```

---

# Hooks

Create

```
use-resume-workspace.ts

use-resume-search.ts

use-resume-filters.ts

use-resume-performance.ts

use-resume-trends.ts
```

---

# Services

Create

```
workspace.service.ts

performance.service.ts

trend.service.ts

recommendation.service.ts
```

Responsibilities

Workspace

- Load Resume metadata
- Group by status

Performance

- Aggregate statistics

Trend

- Generate trend datasets

Recommendation

- Build deterministic recommendations

---

# Types

Create

```
ResumeSummary

ResumeWorkspaceSection

ResumePerformanceSummary

ResumeTrendPoint

ResumeRecommendation

ResumeWorkspaceFilters
```

---

# Validation

Validate

- Metadata integrity
- Blob URLs
- Resume status
- Score ranges

Gracefully handle missing artifacts.

---

# Accessibility

Support

- Keyboard navigation
- Screen readers
- Focus management

---

# Non-Functional Requirements

- Responsive
- Read-only
- Modular
- Type-safe
- Blob-first architecture
- Production-ready

---

# Acceptance Criteria

Workspace

- Resume assessments load successfully.
- Processing resumes displayed first.
- Completed assessments grouped correctly.

Search

- Search by filename.
- Search by target role.

Filters

- Status filter works.
- Experience filter works.
- Score filter works.
- ATS filter works.

Performance

- Statistics calculated correctly.
- Trend charts rendered.
- Timeline displayed.

Actions

- View Assessment works.
- Re-score works.
- Upload Similar Resume works.
- Download Original PDF works.
- Delete works.

Navigation

- Roadmap integration works.
- Interview integration works.
- Career Guidance integration works.
- Resume Builder placeholder works.

Code Quality

- No TypeScript errors.
- No lint errors.
- Project builds successfully.

---

# Out of Scope

Do NOT implement

- Resume editing
- Resume Builder logic
- Resume templates
- AI comparison
- Version history
- Collaboration
- Sharing
- Real-time updates

---

# Deliverables

```
✓ Resume Workspace

✓ Resume Library

✓ Search

✓ Filters

✓ Sorting

✓ Performance Dashboard

✓ Resume Trends

✓ Timeline

✓ Re-score Workflow

✓ Upload Similar Resume

✓ Download Original Resume

✓ Resume Builder Placeholder

✓ Cross-Module Navigation
```

---

# Task Checklist

## Workspace

- [ ] Create Resume Workspace
- [ ] Implement status sections
- [ ] Create quick actions

---

## Resume Library

- [ ] Resume cards
- [ ] View Assessment
- [ ] Re-score Resume
- [ ] Upload Similar Resume
- [ ] Download PDF
- [ ] Delete Resume

---

## Search & Filters

- [ ] Search by filename
- [ ] Search by role
- [ ] Filter by status
- [ ] Filter by experience
- [ ] Filter by score
- [ ] Filter by ATS
- [ ] Sorting

---

## Performance

- [ ] Aggregate statistics
- [ ] Trend charts
- [ ] Assessment timeline
- [ ] Personal best metrics

---

## Recommendations

- [ ] Roadmap integration
- [ ] Interview integration
- [ ] Career Guidance integration
- [ ] Resume Builder placeholder

---

## Builder Placeholder

- [ ] Create /resume-builder route
- [ ] Create placeholder page
- [ ] Add Coming Soon UI

---

## Validation

- [ ] Validate metadata
- [ ] Validate Blob URLs
- [ ] Handle missing artifacts
- [ ] Handle deleted PDFs

---

## Testing

- [ ] Workspace loads successfully
- [ ] Search and filters work
- [ ] Resume cards render
- [ ] Assessment opens correctly
- [ ] Download works
- [ ] Re-score creates a new workflow
- [ ] Trend charts render
- [ ] Placeholder route works
- [ ] Project builds successfully
- [ ] No TypeScript errors
- [ ] No lint errors
