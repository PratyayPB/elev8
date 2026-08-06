# Phase 3.6 - Interview Workspace

## Objective

Implement the Interview Workspace for Elev8.

The Interview Workspace is the central hub where users can manage their interview practice journey.

It should allow users to

- Continue unfinished interviews
- Browse completed interviews
- Search and filter interviews
- Track interview performance
- Monitor improvement over time
- Access interview reports
- Retake interviews
- Generate new interviews
- Navigate to other Elev8 modules

The Workspace should focus on continuous learning rather than simply storing interview history.

---

# Background

After completing previous phases, users may have multiple interview artifacts stored in Blob Storage.

Prisma stores only searchable metadata while Blob stores the complete Interview Artifact.

This module reads metadata from Prisma and retrieves Blob artifacts only when needed.

No AI generation occurs here.

---

# AI Implementation Rules

Before implementation

- Read AGENT_RULES.md
- Read PROJECT_OVERVIEW.md
- Read this specification completely.

Implement only

- Interview Workspace
- Library
- Search
- Filters
- Progress Tracking
- Trend Visualization
- Navigation

Do NOT implement

- Interview Generation
- Interview Assessment
- Interview Session
- Blob Uploads
- Trigger.dev

---

# Routing

Create

```
/interviews
```

This page becomes the Interview Workspace.

---

# Workspace Layout

```
Header

↓

Quick Actions

↓

Performance Overview

↓

Interview Status Cards

↓

Interview Library

↓

Improvement Trends

↓

Recommended Actions
```

---

# Section 1 — Quick Actions

Display

```
Generate New Interview

Continue Interview

Retake Interview

View Latest Report
```

Buttons should navigate to the appropriate workflow.

---

# Section 2 — Performance Overview

Display

```
Total Interviews

Completed Interviews

In Progress

Average Score

Highest Score

Average Completion Time
```

These values should be calculated using Prisma metadata.

---

# Section 3 — Interview Status

Display separate sections for

```
In Progress

Completed

Failed
```

In Progress interviews should always appear first.

---

# Section 4 — Interview Library

Display interview cards.

Each card should include

```
Role

Difficulty

Experience Level

Interview Type

Question Count

Overall Score

Status

Created Date

Last Updated
```

---

# Card Actions

Every interview card should support

```
Open

Continue (if in progress)

View Report

Retake

Generate Similar Interview

Delete
```

No edit functionality.

---

# Continue Interview

If status is

```
IN_PROGRESS
```

Selecting Continue should

```
Load Artifact

↓

Restore Session

↓

Resume Current Question
```

---

# Completed Interview

Selecting Open should

Navigate to

```
Interview Insights
```

implemented in Phase 3.5.

---

# Generate Similar Interview

Create a new InterviewRequest using

- Same role
- Same experience
- Same difficulty

Allow the user to modify values before generation.

A completely new Interview Artifact should be created.

---

# Retake Interview

Retake should

- Reuse interview configuration
- Allow optional changes
- Generate a new interview

Original interview remains unchanged.

---

# Search

Support searching by

- Role
- Interview Type

Search should be case-insensitive.

---

# Filters

Support

Status

```
In Progress

Completed

Failed
```

Difficulty

```
Easy

Medium

Hard
```

Experience

```
Beginner

Basic

Intermediate

Advanced
```

Interview Type

```
Quick

Standard

Comprehensive

Mock
```

---

# Sorting

Support

```
Newest

Oldest

Highest Score

Lowest Score

Recently Updated

Alphabetical
```

---

# Section 5 — Improvement Trends

Display deterministic trend charts.

Examples

```
Average Score Over Time

Completed Interviews Per Month

Average Technical Score

Average Communication Score

Average Confidence Score
```

Charts should be generated using Prisma metadata.

No AI required.

---

# Performance Timeline

Display

```
Interview 1

↓

Interview 2

↓

Interview 3

↓

Interview 4
```

Show

- Date
- Role
- Score

---

# Personal Best

Highlight

```
Highest Overall Score

Best Technical Score

Longest Interview

Most Improved Month
```

---

# Section 6 — Recommended Actions

Generate recommendations programmatically.

Examples

```
Retake React Interview

↓

Generate Backend Interview

↓

Create Learning Roadmap

↓

Review Resume

↓

Career Guidance
```

These recommendations should use existing interview metadata and assessment results.

No LLM required.

---

# Empty State

Display

```
No Interviews Yet

Practice your first AI-powered interview.
```

Show

```
Generate Interview
```

button.

---

# Components

Create

```
features/interview/components/

workspace/

performance-overview/

quick-actions/

status-section/

interview-card/

library/

filters/

search/

trend-chart/

timeline/

recommendations/

empty-state/

index.ts
```

---

# Hooks

Create

```
use-interview-workspace.ts

use-interview-search.ts

use-interview-filters.ts

use-performance-summary.ts

use-interview-trends.ts
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

- Load interviews
- Group by status

Performance

- Aggregate interview statistics

Trend

- Generate trend datasets

Recommendation

- Build recommended actions

---

# Types

Create

```
InterviewSummary

WorkspaceSection

PerformanceSummary

TrendPoint

Recommendation

InterviewStatus

WorkspaceFilters
```

---

# Validation

Validate

- Metadata integrity
- Blob URL existence
- Interview status
- Performance calculations

Gracefully handle missing artifacts.

---

# Accessibility

Support

- Keyboard navigation
- Focus management
- Screen readers

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

- Interviews load successfully.
- In-progress interviews displayed first.
- Completed interviews grouped correctly.

Search

- Search by role.
- Search by interview type.

Filters

- Status filter works.
- Difficulty filter works.
- Experience filter works.

Performance

- Statistics calculated correctly.
- Trend charts displayed.
- Timeline generated.

Actions

- Continue interview works.
- View report works.
- Retake works.
- Generate similar interview works.
- Delete works.

Navigation

- Roadmap Generator integration works.
- Career Guidance integration works.
- Resume Analysis integration works.

Code Quality

- No TypeScript errors.
- No lint errors.
- Project builds successfully.

---

# Out of Scope

Do NOT implement

- Editing interviews
- Editing assessments
- AI interview comparison
- Leaderboards
- Social sharing
- Collaboration
- Real-time updates

---

# Deliverables

```
✓ Interview Workspace

✓ Performance Dashboard

✓ Interview Library

✓ Search

✓ Filters

✓ Sorting

✓ Improvement Trends

✓ Timeline

✓ Continue Interview

✓ Retake Interview

✓ Generate Similar Interview

✓ Cross-Module Navigation
```

---

# Task Checklist

## Workspace

- [ ] Create Interview Workspace
- [ ] Implement status sections
- [ ] Implement quick actions

---

## Library

- [ ] Render interview cards
- [ ] Continue interview
- [ ] Open report
- [ ] Delete interview
- [ ] Retake interview
- [ ] Generate similar interview

---

## Search & Filters

- [ ] Search by role
- [ ] Search by interview type
- [ ] Filter by status
- [ ] Filter by difficulty
- [ ] Filter by experience
- [ ] Sorting

---

## Performance

- [ ] Aggregate interview statistics
- [ ] Render trend charts
- [ ] Render timeline
- [ ] Display personal bests

---

## Recommendations

- [ ] Generate deterministic recommendations
- [ ] Link to Roadmap Generator
- [ ] Link to Career Guidance
- [ ] Link to Resume Analysis

---

## Validation

- [ ] Validate metadata
- [ ] Validate Blob URLs
- [ ] Handle missing artifacts
- [ ] Handle deleted artifacts

---

## Testing

- [ ] Workspace loads correctly
- [ ] Continue interview restores session
- [ ] Reports open correctly
- [ ] Search and filters work
- [ ] Trend charts render
- [ ] Recommendations display
- [ ] Project builds successfully
- [ ] No TypeScript errors
- [ ] No lint errors
