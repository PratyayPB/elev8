# Phase 3.5 - Interview Insights & Report Viewer

## Objective

Implement the Interview Insights module for Elev8.

This phase is responsible for presenting completed interview results in a meaningful, actionable, and visually organized manner.

Instead of simply displaying scores, the Insights module should explain:

- What the user did well
- Where they struggled
- Which skills need improvement
- Which questions caused problems
- What they should do next

The Interview Insights module should seamlessly integrate with other Elev8 features, allowing users to continue improving after the interview.

---

# Background

After Phase 3.4, the Interview Artifact contains

- Metadata
- Questions
- Answers
- AI Assessment
- Analytics

This phase visualizes that artifact.

No AI generation occurs here.

No Interview Artifact modifications occur here.

This module is strictly read-only.

---

# AI Implementation Rules

Before implementation

- Read AGENT_RULES.md
- Read PROJECT_OVERVIEW.md
- Read this specification completely.

Implement only

- Interview Report
- Interview Insights
- Assessment Visualization
- Analytics Visualization
- Resource Navigation

Do NOT implement

- Assessment
- Interview Generation
- Interview Session
- Blob uploads
- Trigger.dev

---

# Routing

Create

```
/interviews/[interviewId]
```

Opening the page should

```
Load Prisma Metadata

↓

Retrieve Blob URL

↓

Download Interview Artifact

↓

Validate Version

↓

Render Insights
```

---

# Page Structure

The page consists of six major sections.

```
Overview

↓

Skill Breakdown

↓

Question Review

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
Overall Score

Interview Status

Role

Difficulty

Experience Level

Question Count

Completion Time

Assessment Date
```

Show

```
Strength Summary

Weakness Summary
```

---

# Score Cards

Display

```
Overall Score

Technical Score

Communication Score

Confidence Score

Problem Solving Score
```

Each score should be displayed visually.

---

# Section 2 — Skill Breakdown

Visualize strengths and weaknesses.

Example

```
React

★★★★★

JavaScript

★★★★☆

System Design

★★☆☆☆

Communication

★★★☆☆
```

Display

- Strongest Skills
- Weakest Skills

---

# Section 3 — Question Review

Display every interview question.

Each question expands into

```
Question

↓

User Answer

↓

Expected Topics

↓

AI Feedback

↓

Strengths

↓

Weaknesses

↓

Missed Concepts

↓

Score
```

Questions should remain read-only.

---

# Question Navigation

Support

- Previous
- Next
- Expand All
- Collapse All

---

# Section 4 — Improvement Plan

Display prioritized recommendations.

Examples

```
Improve React Hooks

↓

Study Event Loop

↓

Practice Behavioral Questions

↓

Improve Communication
```

Every recommendation should include

- Priority
- Estimated effort
- Related skill

---

# Section 5 — Next Steps

This section connects the Interview module to the rest of Elev8.

Display action cards.

---

## Generate Roadmap

Pre-fill

- Target Role
- Experience
- Weak Skills

Navigate

```
Roadmap Generator
```

---

## Career Guidance

Open Career Guidance

using

- Interview Assessment
- Scores

---

## Resume Review

Recommend

Resume Analysis

based on interview performance.

---

## Retake Interview

Generate a new interview

using

- Same role

or

Higher difficulty

---

# Section 6 — Analytics

Display deterministic analytics.

Examples

```
Average Answer Time

Total Words

Questions Attempted

Voice Usage

Text Usage

Completion Rate

Longest Answer

Shortest Answer
```

Analytics are generated programmatically.

Never by AI.

---

# Timeline

Display interview timeline.

Example

```
Interview Started

↓

Question 1

↓

Question 5

↓

Paused

↓

Resumed

↓

Submitted

↓

Assessment Complete
```

---

# Components

Create

```
features/interview/components/

interview-report/

overview-card/

score-card/

skill-breakdown/

question-review/

question-card/

improvement-plan/

next-steps/

analytics-dashboard/

timeline/

resource-card/

action-card/

index.ts
```

---

# Hooks

Create

```
use-interview-report.ts

use-question-review.ts

use-skill-breakdown.ts

use-interview-analytics.ts
```

---

# Services

Create

```
interview-report.service.ts

analytics.service.ts

recommendation.service.ts
```

Responsibilities

Interview Report

- Load Interview Artifact

Analytics

- Compute deterministic metrics

Recommendation

- Generate navigation links
- Build Next Steps

---

# Types

Create

```
InterviewReport

SkillScore

Recommendation

InterviewTimeline

AnalyticsSummary
```

---

# Validation

Validate

- Artifact version
- Assessment exists
- Question count
- Analytics
- Metadata

Reject invalid artifacts.

---

# Accessibility

Support

- Keyboard navigation
- Focus management
- Screen readers

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

- Metadata displayed correctly.
- Scores displayed correctly.

Skill Breakdown

- Skills visualized.
- Strengths identified.
- Weaknesses identified.

Question Review

- Questions displayed.
- Feedback displayed.
- Navigation works.

Improvement Plan

- Recommendations displayed.
- Priorities shown.

Next Steps

- Roadmap integration works.
- Career Guidance integration works.
- Resume Review integration works.
- Retake Interview works.

Analytics

- Metrics displayed.
- Timeline displayed.

Validation

- Invalid artifacts rejected.

Code Quality

- No TypeScript errors.
- No lint errors.
- Project builds successfully.

---

# Out of Scope

Do NOT implement

- Editing answers
- Editing assessment
- AI generation
- Interview session
- Trigger.dev
- Blob updates
- Sharing
- Collaboration

---

# Deliverables

```
✓ Interview Insights Dashboard

✓ Overview

✓ Skill Breakdown

✓ Question Review

✓ Improvement Plan

✓ Next Steps

✓ Analytics Dashboard

✓ Timeline

✓ Cross-Module Navigation
```

---

# Task Checklist

## Report

- [ ] Load Interview Artifact
- [ ] Validate version
- [ ] Render Overview

---

## Skills

- [ ] Render Skill Breakdown
- [ ] Render strengths
- [ ] Render weaknesses

---

## Questions

- [ ] Render Question Review
- [ ] Expand/collapse questions
- [ ] Display AI feedback

---

## Improvement Plan

- [ ] Prioritize recommendations
- [ ] Display learning suggestions

---

## Next Steps

- [ ] Generate Roadmap action
- [ ] Career Guidance action
- [ ] Resume Review action
- [ ] Retake Interview action

---

## Analytics

- [ ] Compute metrics
- [ ] Render charts
- [ ] Render timeline

---

## Testing

- [ ] Artifact loads successfully
- [ ] Overview renders correctly
- [ ] Skill Breakdown renders correctly
- [ ] Question Review renders correctly
- [ ] Next Steps navigate correctly
- [ ] Analytics display correctly
- [ ] Project builds successfully
- [ ] No TypeScript errors
- [ ] No lint errors
