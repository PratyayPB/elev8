# Phase 4.3 - Resume Improvement Hub

## Objective

Implement the Resume Improvement Hub for Elev8.

This phase transforms a completed Resume Assessment into an actionable improvement experience.

Instead of simply displaying resume scores, the Improvement Hub should explain:

- What makes the resume strong
- Which sections need improvement
- Which ATS keywords are missing
- Which skills should be added
- Which projects would improve employability
- Which Elev8 modules the user should use next

The Resume Improvement Hub is a read-only visualization of the Resume Artifact.

No AI generation occurs in this phase.

---

# Background

After Phase 4.2 every Resume Artifact contains

- Metadata
- Original PDF
- Parsed Resume
- Section Assessment
- Overall Assessment
- Analytics
- Recommendations

This phase visualizes that artifact.

No Blob modifications occur.

No assessment occurs.

---

# AI Implementation Rules

Before implementation

- Read AGENT_RULES.md
- Read PROJECT_OVERVIEW.md
- Read this specification completely.

Implement only

- Resume Improvement Hub
- Assessment Visualization
- Analytics Visualization
- Resume Section Review
- Cross-Module Navigation

Do NOT implement

- Resume Parsing
- Resume Assessment
- Resume Builder
- Blob uploads
- Trigger.dev

---

# Routing

Create

```
/resumes/[resumeId]
```

Loading workflow

```
Load Resume Metadata

↓

Retrieve Artifact Blob URL

↓

Download Resume Artifact

↓

Validate Version

↓

Render Improvement Hub
```

---

# Page Structure

The Resume Improvement Hub consists of seven major sections.

```
Overview

↓

Resume Health

↓

Section Breakdown

↓

ATS & Keyword Analysis

↓

Improvement Plan

↓

Next Steps

↓

Analytics
```

---

# Section 1 — Overview

Display

```
Overall Resume Score

ATS Score

Target Role

Experience Level

Assessment Date

Resume Status
```

Display summary cards

```
Biggest Strength

Highest Scoring Section

Biggest Weakness

Highest Priority Improvement
```

---

# Score Cards

Display

```
Overall Score

ATS Score

Technical Skills

Projects

Experience

Education
```

Scores are read-only.

---

# Section 2 — Resume Health

Display an overall health summary.

Example

```
Excellent

Good

Needs Improvement

Critical
```

Health should summarize

- Resume completeness
- ATS readiness
- Technical strength
- Recruiter readiness

Display

```
Resume Strength Summary

↓

Resume Weakness Summary
```

---

# Section 3 — Section Breakdown

Display every resume section individually.

Examples

```
Summary

Skills

Projects

Experience

Education

Certifications
```

Each section expands into

```
Section Score

↓

Strengths

↓

Weaknesses

↓

Missing Content

↓

Recommendations
```

---

# Resume Preview

Display a read-only preview of the parsed resume.

Users should be able to expand individual sections.

Editing is not supported.

---

# Section Navigation

Support

- Expand All
- Collapse All
- Jump to Section

---

# Section 4 — ATS & Keyword Analysis

Display ATS-specific insights.

Examples

```
ATS Score

Keyword Coverage

Missing Keywords

Recommended Keywords

Keyword Density

Formatting Issues
```

Display

```
Present Keywords

Missing Keywords

Recommended Keywords
```

Users should understand why keywords matter.

---

# Section 5 — Improvement Plan

Display prioritized improvements.

Examples

```
Add measurable project outcomes

↓

Improve React keyword coverage

↓

Add backend project

↓

Rewrite professional summary

↓

Improve work experience descriptions
```

Each recommendation should include

- Priority
- Expected impact
- Related resume section

---

# Section 6 — Next Steps

The Resume Improvement Hub should integrate with the rest of Elev8.

Display action cards.

---

## Generate Roadmap

Generate a roadmap for

- Missing Skills
- Recommended Technologies

Pre-fill

- Target Role
- Experience
- Missing Skills

---

## Practice Interview

Generate interview using

- Target Role
- Weak Technical Areas

---

## Career Guidance

Open Career Guidance using

- Resume Assessment
- Missing Skills
- Target Role

---

## Resume Builder

When Resume Builder is implemented

Display

```
Improve Resume

(Open Builder)
```

The Builder should later preload this parsed resume.

---

# Section 7 — Analytics

Display deterministic analytics.

Examples

```
Word Count

Project Count

Skill Count

Experience Count

Education Count

Certification Count

Estimated ATS Keyword Density

Resume Length
```

Analytics should never use AI.

---

# Resume Timeline

Display

```
Resume Uploaded

↓

Parsing Complete

↓

Assessment Complete
```

---

# Components

Create

```
features/resume/components/

resume-improvement-hub/

overview-card/

resume-health/

score-card/

section-breakdown/

section-card/

resume-preview/

keyword-analysis/

improvement-plan/

analytics-dashboard/

next-steps/

action-card/

timeline/

index.ts
```

---

# Hooks

Create

```
use-resume-report.ts

use-resume-sections.ts

use-keyword-analysis.ts

use-resume-analytics.ts

use-improvement-plan.ts
```

---

# Services

Create

```
resume-report.service.ts

keyword-analysis.service.ts

analytics.service.ts

recommendation.service.ts
```

Responsibilities

Resume Report

- Load Resume Artifact

Keyword Analysis

- Generate keyword datasets

Analytics

- Compute deterministic metrics

Recommendation

- Build cross-module recommendations

---

# Types

Create

```
ResumeReport

ResumeSection

ResumeSectionScore

KeywordAnalysis

ImprovementRecommendation

ResumeAnalytics

ResumeHealth
```

---

# Validation

Validate

- Artifact version
- Assessment exists
- Parsed Resume exists
- Metadata integrity
- Analytics integrity

Reject invalid artifacts.

---

# Accessibility

Support

- Keyboard navigation
- Screen readers
- Focus management

---

# Non-Functional Requirements

- Read-only
- Responsive
- Modular
- Type-safe
- Production-ready

---

# Acceptance Criteria

Overview

- Metadata displayed correctly
- Scores displayed correctly

Resume Health

- Health summary generated
- Strengths displayed
- Weaknesses displayed

Section Breakdown

- Every section rendered
- Expand/collapse works
- Recommendations displayed

ATS Analysis

- Keyword analysis displayed
- Missing keywords highlighted

Improvement Plan

- Prioritized improvements shown
- Expected impact displayed

Next Steps

- Roadmap integration works
- Interview integration works
- Career Guidance integration works
- Resume Builder placeholder works

Analytics

- Metrics calculated correctly
- Timeline displayed

Validation

- Invalid artifacts rejected

Code Quality

- No TypeScript errors
- No lint errors
- Project builds successfully

---

# Out of Scope

Do NOT implement

- Resume editing
- Resume Builder
- PDF generation
- Trigger.dev
- Resume Assessment
- Blob updates
- Collaboration
- Sharing

---

# Deliverables

```
✓ Resume Improvement Hub

✓ Overview Dashboard

✓ Resume Health

✓ Section Breakdown

✓ ATS & Keyword Analysis

✓ Improvement Plan

✓ Analytics Dashboard

✓ Timeline

✓ Cross-Module Navigation
```

---

# Task Checklist

## Report

- [ ] Load Resume Artifact
- [ ] Validate artifact
- [ ] Render overview

---

## Resume Health

- [ ] Render health summary
- [ ] Display strengths
- [ ] Display weaknesses

---

## Sections

- [ ] Render section cards
- [ ] Expand/collapse sections
- [ ] Display recommendations

---

## ATS

- [ ] Render keyword analysis
- [ ] Display missing keywords
- [ ] Display ATS score

---

## Improvement Plan

- [ ] Prioritize improvements
- [ ] Display expected impact

---

## Next Steps

- [ ] Roadmap integration
- [ ] Interview integration
- [ ] Career Guidance integration
- [ ] Resume Builder placeholder

---

## Analytics

- [ ] Compute deterministic metrics
- [ ] Render analytics dashboard
- [ ] Render timeline

---

## Testing

- [ ] Artifact loads successfully
- [ ] Resume Health renders correctly
- [ ] Section Breakdown works
- [ ] ATS analysis renders correctly
- [ ] Improvement Plan renders correctly
- [ ] Next Steps navigation works
- [ ] Analytics display correctly
- [ ] Project builds successfully
- [ ] No TypeScript errors
- [ ] No lint errors
