# Phase 3.4 - Interview Assessment Engine

## Objective

Implement the AI-powered Interview Assessment Engine for Elev8.

This phase is responsible for evaluating a completed interview and generating a comprehensive assessment report.

Assessment should execute as a **Trigger.dev background task** after the user submits an interview.

The assessment process consists of two AI stages:

1. Question-by-question assessment
2. Overall interview assessment

The completed assessment should be appended to the existing Interview Artifact stored in Blob Storage.

---

# Background

After Phase 3.3, the Interview Artifact contains:

- Metadata
- Questions
- User Answers
- Session Information

The interview is immutable after submission.

The Assessment Engine enriches the Interview Artifact by adding detailed AI-generated feedback.

---

# AI Implementation Rules

Before implementation

- Read AGENT_RULES.md
- Read PROJECT_OVERVIEW.md
- Read this specification completely.

Implement only

- Assessment pipeline
- Trigger.dev task
- AI evaluation
- Artifact update
- Prisma metadata update

Do NOT implement

- Interview generation
- Interview session
- Interview library
- Report viewer
- PDF export

---

# Assessment Pipeline

```
Interview Submitted

↓

Load Interview Artifact

↓

Validate Artifact

↓

Question Assessment

↓

Overall Assessment

↓

Update Interview Artifact

↓

Upload Blob

↓

Update Prisma

↓

COMPLETED
```

---

# Trigger.dev Integration

Create

```
tasks/assess-interview.ts
```

Responsibilities

- Load Interview Artifact
- Validate artifact
- Assess each question
- Generate overall report
- Update Interview Artifact
- Upload Blob
- Update Prisma
- Update shared Job

---

# Job Progress

Expose progress.

Example

```
10%

Loading Interview

↓

20%

Validating Artifact

↓

60%

Assessing Questions

↓

85%

Generating Overall Report

↓

95%

Updating Artifact

↓

100%

Assessment Complete
```

---

# Stage 1 — Question Assessment

Assess every interview question independently.

Each question should be evaluated using

- Original question
- Expected topics
- User answer
- Difficulty
- Experience level
- Role

---

# Purpose

Provide detailed and actionable feedback.

---

# Question Assessment Output

Store inside

```
assessment.questionAnalysis
```

Example

```json
{
  "q1": {
    "score": 82,

    "strengths": ["Correctly explained Virtual DOM"],

    "weaknesses": ["Missed reconciliation algorithm"],

    "missedTopics": ["Fiber Architecture"],

    "communication": 80,

    "technicalAccuracy": 84,

    "feedback": "..."
  }
}
```

---

# Assessment Rules

Each question should receive

- Numeric score
- Technical accuracy
- Communication quality
- Strengths
- Weaknesses
- Missing concepts
- Improvement suggestions

Questions should be assessed independently.

---

# Stage 2 — Overall Assessment

Once every question has been evaluated,

generate the final interview assessment.

Input

- Interview metadata
- Question assessments
- User answers

---

# Overall Assessment Output

Example

```json
{
  "overallScore": 84,

  "technicalScore": 88,

  "communicationScore": 80,

  "confidenceScore": 82,

  "problemSolvingScore": 86,

  "strengths": [],

  "weaknesses": [],

  "recommendedLearning": [],

  "nextSteps": [],

  "summary": "..."
}
```

---

# Overall Assessment Rules

The report should

- Aggregate question scores
- Identify recurring weaknesses
- Highlight strengths
- Recommend learning priorities
- Recommend next interview difficulty
- Recommend roadmap improvements

---

# Interview Artifact

Append

```json
{
  "assessment": {}
}
```

The original

- Questions
- Answers

must never be modified.

Only

```
assessment

analytics
```

may change.

---

# Prisma Metadata

Update

```
Interview

overallScore

assessmentCompletedAt

status

updatedAt
```

Do not store detailed assessment in PostgreSQL.

---

# Validation

Create

```
assessment-validator.ts
```

Validate

- Assessment schema
- Question count
- Duplicate IDs
- Score ranges
- Required fields
- JSON validity

Reject malformed responses.

---

# Retry Strategy

Assessment executes inside Trigger.dev.

Retry

Maximum

```
3 Attempts
```

Retry only

- Provider timeout
- Temporary API failure
- Invalid JSON

Permanent validation failures terminate the job.

---

# Services

Create

```
question-assessment.service.ts

overall-assessment.service.ts

assessment-artifact.service.ts

assessment-validator.ts
```

Responsibilities

Question Assessment

- Evaluate each question

Overall Assessment

- Generate interview summary

Artifact

- Append assessment

Validator

- Validate assessment

---

# Types

Create

```
QuestionAssessment

OverallAssessment

AssessmentReport

QuestionFeedback

InterviewScores
```

---

# Constants

Create

```
assessment-prompts.ts

assessment-schema.ts

score-ranges.ts
```

---

# Shared Scoring System

Each interview should generate

```
Overall Score

Technical Score

Communication Score

Confidence Score

Problem Solving Score
```

Every score

```
0–100
```

---

# Artifact Structure

Assessment should follow

```text
assessment

├── overallScores

├── questionAnalysis

├── strengths

├── weaknesses

├── recommendations

├── summary
```

---

# Analytics

Update

```
analytics
```

Examples

```
Average Answer Time

Questions Attempted

Voice Usage

Completion Percentage

Total Words

Average Words Per Answer
```

Analytics are deterministic.

Do not generate them using AI.

---

# Non-Functional Requirements

- Modular
- Deterministic
- Versioned artifacts
- Provider agnostic
- Production-ready

---

# Acceptance Criteria

Assessment

- Question assessment generated
- Overall assessment generated
- Scores valid
- Feedback generated

Artifact

- Assessment appended
- Existing interview preserved
- Blob updated successfully

Jobs

- Trigger.dev executes
- Retry strategy works
- Progress updates correctly

Validation

- Invalid responses rejected
- Invalid scores rejected
- Invalid schema rejected

Code Quality

- No TypeScript errors
- No lint errors
- Project builds successfully

---

# Out of Scope

Do NOT implement

- Interview Viewer
- Interview Library
- PDF export
- Markdown export
- Comparison reports
- Interview history
- Leaderboards

---

# Deliverables

```
✓ Trigger.dev Assessment Task

✓ Question Assessment Engine

✓ Overall Assessment Engine

✓ Assessment Validator

✓ Artifact Update

✓ Blob Synchronization

✓ Prisma Metadata Update

✓ Shared Scoring System

✓ Analytics Generation
```

---

# Task Checklist

## Trigger.dev

- [ ] Create assess-interview task
- [ ] Register task
- [ ] Configure retries
- [ ] Add progress updates

---

## Question Assessment

- [ ] Generate per-question assessment
- [ ] Validate scores
- [ ] Validate feedback

---

## Overall Assessment

- [ ] Aggregate question scores
- [ ] Generate summary
- [ ] Generate recommendations

---

## Artifact

- [ ] Append assessment
- [ ] Generate analytics
- [ ] Upload updated artifact

---

## Prisma

- [ ] Update metadata
- [ ] Update status
- [ ] Save overall score

---

## Validation

- [ ] Validate assessment schema
- [ ] Validate scores
- [ ] Validate JSON
- [ ] Reject malformed responses

---

## Testing

- [ ] Question assessment succeeds
- [ ] Overall assessment succeeds
- [ ] Blob updated successfully
- [ ] Prisma updated successfully
- [ ] Retry strategy works
- [ ] Progress updates correctly
- [ ] Project builds successfully
- [ ] No TypeScript errors
- [ ] No lint errors
