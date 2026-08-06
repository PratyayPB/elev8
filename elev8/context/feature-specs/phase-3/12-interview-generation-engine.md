# Phase 3.2 - Interview Generation Engine

## Objective

Implement the AI-powered Interview Generation Engine for **Elev8**.

This phase is responsible for transforming a validated `InterviewRequest` into a complete **Interview Artifact** using Gemini.

Interview generation must execute as a **Trigger.dev background task**.

The engine should:

- Generate an interview plan
- Generate interview questions
- Validate AI responses
- Build a versioned Interview Artifact
- Upload the artifact to Blob Storage
- Store metadata in Prisma
- Update the shared Job System

This phase **must NOT** conduct the interview.

This phase **must NOT** evaluate user responses.

Those responsibilities belong to later phases.

---

# Background

The Interview Generator follows the same architecture as the Roadmap Generator.

Instead of immediately producing questions, interview generation occurs in two AI stages:

```
Interview Request

↓

Interview Planning

↓

Question Generation

↓

Artifact Validation

↓

Interview Artifact

↓

Blob Storage

↓

READY
```

Separating planning from question generation produces better-balanced interviews while keeping prompts smaller and easier to maintain.

---

# AI Implementation Rules

Before implementation

- Read AGENT_RULES.md
- Read PROJECT_OVERVIEW.md
- Read this specification completely.

Implement only

- Trigger.dev generation pipeline
- Interview planning
- Question generation
- Validation
- Artifact creation
- Blob upload
- Prisma metadata update

Do NOT implement

- Interview session
- Voice recognition
- Autosave
- Assessment
- Interview library

---

# Background Job Architecture

Interview generation is a long-running AI workflow.

Generation should execute inside a Trigger.dev task.

The frontend should immediately return after creating the generation job.

Users should see generation progress through the shared Job System.

---

# Processing Pipeline

```
InterviewRequest

↓

Create Interview Metadata

↓

Status = GENERATING

↓

Trigger.dev Job

↓

Build Prompt

↓

Generate Interview Plan

↓

Generate Questions

↓

Validate Artifact

↓

Upload Artifact

↓

Save Blob URL

↓

Status = READY
```

---

# Trigger.dev Integration

Create

```
tasks/generate-interview.ts
```

Responsibilities

- Receive InterviewRequest
- Build prompts
- Generate Interview Plan
- Generate Questions
- Validate responses
- Create Interview Artifact
- Upload Blob
- Update Prisma
- Update Job progress

---

# Job Progress

Expose progress.

Example

```
10%

Preparing Prompt

↓

25%

Generating Interview Plan

↓

50%

Generating Questions

↓

75%

Validating Artifact

↓

90%

Uploading Artifact

↓

100%

Interview Ready
```

---

# Step 1 — Interview Planning

Generate a structured interview blueprint.

Purpose

Ensure balanced topic distribution before generating questions.

Example

```json
{
  "title": "Frontend Developer Interview",

  "estimatedDuration": "35 Minutes",

  "sections": [
    {
      "name": "HTML & CSS",

      "questions": 2
    },

    {
      "name": "JavaScript",

      "questions": 3
    },

    {
      "name": "React",

      "questions": 3
    },

    {
      "name": "Behavioral",

      "questions": 2
    }
  ]
}
```

---

# Planning Rules

The generated plan should

- Match interview type
- Match difficulty
- Match experience level
- Match personalization answers
- Produce the correct number of questions

The plan should not contain actual interview questions.

---

# Step 2 — Question Generation

Generate interview questions based on the approved interview plan.

Questions should

- Follow section order
- Increase gradually in difficulty
- Avoid repetition
- Cover different concepts
- Be role-specific

---

# Question Count

Automatically determined.

```
Quick Practice

5 Questions

Standard

10 Questions

Comprehensive

15 Questions

Mock Final Round

20 Questions
```

---

# Question Categories

Examples

Technical

Behavioral

Problem Solving

System Design

Coding Concepts

Scenario-Based

Leadership

Communication

Categories depend on role.

---

# Question Structure

Each question should include

```json
{
  "id": "q1",

  "category": "React",

  "question": "Explain React reconciliation.",

  "difficulty": "Medium",

  "expectedTopics": ["Virtual DOM", "Diffing", "Performance"],

  "estimatedAnswerTime": "2-3 minutes"
}
```

---

# AI Prompt Rules

Prompt should instruct Gemini to

- Return JSON only
- No Markdown
- No explanations
- No code blocks
- No additional text

Responses must strictly follow the schema.

---

# Interview Artifact

Create a versioned Interview Artifact.

Example

```json
{
  "version": "1.0.0",

  "metadata": {},

  "questions": [],

  "answers": [],

  "assessment": null
}
```

---

# Artifact Metadata

Include

```
Interview ID

Role

Experience

Difficulty

Interview Type

Question Count

Estimated Duration

Generated At

Generator Version
```

---

# Blob Storage

Store

```
interviews/

{interviewId}.json
```

Only one artifact should exist for the interview lifecycle.

The same Blob URL will later contain

- Answers
- Assessment

---

# Prisma Persistence

Store only metadata.

Example

```
Interview

id

userId

role

difficulty

experienceLevel

status

blobUrl

questionCount

estimatedDuration

createdAt

updatedAt
```

No interview questions should be stored in PostgreSQL.

---

# Validation

Create

```
interview-validator.ts
```

Validate

- Planning schema
- Question schema
- Required metadata
- Duplicate IDs
- Question count
- Categories
- Expected topics
- JSON validity

Reject malformed responses.

---

# Retry Strategy

Generation executes inside Trigger.dev.

Retry

Maximum

```
3 Attempts
```

Retry only

- Provider timeout
- Temporary API failure
- Invalid JSON

Permanent schema violations should terminate the job.

---

# Services

Create

```
interview-planner.service.ts

interview-generation.service.ts

interview-artifact.service.ts

interview-validator.ts
```

Responsibilities

Planner

- Build planning prompt
- Generate interview plan

Generation

- Generate interview questions

Artifact

- Create versioned Interview Artifact

Validator

- Validate all AI outputs

---

# Types

Create

```
InterviewPlan

InterviewSection

InterviewQuestion

InterviewArtifact

InterviewMetadata

InterviewStatus
```

---

# Constants

Create

```
interview-prompts.ts

interview-schema.ts

question-categories.ts
```

---

# Non-Functional Requirements

- Modular
- Deterministic
- Versioned artifacts
- Provider agnostic
- Production-ready
- Blob-first architecture

---

# Acceptance Criteria

Generation

- Trigger.dev task executes successfully.
- Interview plan generated.
- Questions generated.
- Correct question count.
- Categories distributed logically.

Storage

- Artifact uploaded to Blob.
- Blob URL saved.
- Prisma metadata stored.

Validation

- Invalid JSON rejected.
- Invalid schema rejected.
- Duplicate IDs rejected.

Jobs

- Progress updates correctly.
- Retry strategy works.
- Failures handled gracefully.

Code Quality

- No TypeScript errors.
- No lint errors.
- Project builds successfully.

---

# Out of Scope

Do NOT implement

- Interview session
- Voice input
- Speech-to-text
- Autosave
- Pause & Resume
- Assessment
- Report generation
- Interview library
- Download
- Export

---

# Deliverables

```
✓ Trigger.dev Interview Generation Task

✓ Interview Planning Engine

✓ Question Generation Engine

✓ Versioned Interview Artifact

✓ Blob Storage Integration

✓ Prisma Metadata Persistence

✓ Validation Layer

✓ Retry Strategy

✓ Job Progress Tracking
```

---

# Task Checklist

## Trigger.dev

- [ ] Create generate-interview task
- [ ] Register task
- [ ] Add progress updates
- [ ] Configure retries

---

## Planning

- [ ] Create planning service
- [ ] Generate interview blueprint
- [ ] Validate plan

---

## Question Generation

- [ ] Generate interview questions
- [ ] Validate question count
- [ ] Validate categories
- [ ] Validate expected topics

---

## Artifact

- [ ] Create Interview Artifact
- [ ] Add schema version
- [ ] Upload to Blob
- [ ] Save Blob URL

---

## Prisma

- [ ] Save interview metadata
- [ ] Update generation status

---

## Validation

- [ ] Validate planning schema
- [ ] Validate question schema
- [ ] Validate artifact

---

## Testing

- [ ] Quick Practice interview
- [ ] Standard interview
- [ ] Comprehensive interview
- [ ] Mock Final Round
- [ ] Retry strategy
- [ ] Blob upload
- [ ] Prisma persistence
- [ ] Project builds successfully
- [ ] No TypeScript errors
- [ ] No lint errors
