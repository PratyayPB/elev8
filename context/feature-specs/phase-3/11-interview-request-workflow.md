# Phase 3.1 - Interview Request Workflow

## Objective

Implement the complete interview request workflow for **Elev8**.

This phase is responsible for collecting the user's interview requirements, progressively gathering optional personalization information, validating the collected inputs, and creating a standardized `InterviewRequest` object.

This phase **must NOT generate interview questions**.

This phase **must NOT invoke Gemini**.

This phase **must NOT create any interview artifacts**.

Generation begins in Phase 3.2.

---

# Background

The Interview Simulation module follows the same design philosophy as the Roadmap Generator.

Users should be able to generate an interview with only the minimum required information.

Additional information should improve interview quality but must never be mandatory.

This follows Elev8's **Progressive Personalization** principle.

---

# AI Implementation Rules

Before implementation

- Read AGENT_RULES.md
- Read PROJECT_OVERVIEW.md
- Read this specification completely

Implement only

- Interview request workflow
- Validation
- Dynamic personalization
- Request builder

Do NOT implement

- Interview generation
- Trigger.dev
- Gemini
- Blob Storage
- Prisma
- Assessment
- Voice recognition

---

# User Flow

```
Interview Library

↓

Generate Interview

↓

Required Inputs

↓

Optional AI Personalization

↓

Review

↓

InterviewRequest

↓

Phase 3.2
```

---

# Functional Requirements

The workflow consists of

## Stage 1

Required Inputs

## Stage 2

Optional AI Personalization

---

# Stage 1

## Required Inputs

Collect exactly four required inputs.

---

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
- Product Manager

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

## Difficulty

Required

Options

```
Easy

Medium

Hard
```

---

## Interview Type

Required

Options

```
Quick Practice

Standard Interview

Comprehensive Interview

Mock Final Round
```

Question count

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

The question count is determined automatically.

Users should not manually enter the number of questions.

---

# Validation

All required fields must be completed before continuing.

---

# Stage 2

## AI-Powered Personalization

After required information is completed,

request an LLM to generate additional interview personalization questions.

---

# Objective

Collect additional information that improves interview quality.

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

- Depend on target role
- Depend on experience
- Depend on interview type
- Improve interview relevance

---

# Supported Question Types

Single Select

Example

```
Which company are you targeting?

○ Startup

○ Mid-sized Company

○ FAANG

○ Government

○ No Preference
```

---

Multi Select

Example

```
Which topics should be included?

□ React

□ JavaScript

□ System Design

□ DSA

□ SQL
```

---

Unsupported

- Paragraph input
- File upload
- Voice input
- Numeric input

---

# AI Question Rules

Questions

- Must improve interview quality
- Must never exceed four
- Must not repeat required inputs
- Must be easy to answer
- Must be skippable

---

# Skip Personalization

Users should be able to

- Skip individual questions
- Skip the entire personalization stage

Display

```
Skip Personalization
```

Skipping should never block interview generation.

---

# Review Screen

Before creating the InterviewRequest,

display a summary.

Example

```
Target Role

Frontend Developer

Experience

Intermediate

Difficulty

Medium

Interview

Standard

Personalization

3 Questions Answered
```

Users can

- Edit
- Continue

---

# InterviewRequest

Create

```ts
interface InterviewRequest {
  role: string;

  experienceLevel: "Beginner" | "Basic" | "Intermediate" | "Advanced";

  difficulty: "Easy" | "Medium" | "Hard";

  interviewType: "Quick" | "Standard" | "Comprehensive" | "Mock";

  questionCount: number;

  personalization: {
    skipped: boolean;

    answers: Answer[];
  };
}
```

No interview questions should exist at this stage.

---

# Navigation

Support

- Previous
- Next
- Skip Personalization
- Edit Inputs
- Cancel

---

# Persistence

Temporarily preserve inputs while navigating.

Do not persist to Blob or Prisma.

---

# Components

Create

```
features/interview/components/

interview-wizard/

role-selector/

experience-selector/

difficulty-selector/

interview-type-selector/

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
use-interview-request.ts

use-interview-personalization.ts

use-interview-form.ts
```

---

# Services

Create

```
interview-request.service.ts

interview-personalization.service.ts
```

Responsibilities

Interview Request

- Validate inputs
- Build InterviewRequest

Personalization

- Generate optional questions
- Validate AI response
- Return structured questions

---

# Types

Create

```
InterviewRequest

InterviewType

Difficulty

ExperienceLevel

Question

Answer
```

---

# Constants

Create

```
interview-types.ts

difficulty.ts

experience-levels.ts
```

---

# Validation

Use

- React Hook Form
- Zod

Validate

- Required fields
- Enums
- AI responses
- Question limits

---

# UI Requirements

Wizard Layout

```
Header

↓

Step Indicator

↓

Current Step

↓

Navigation Buttons
```

Desktop-first

Responsive

No visual polish required.

---

# Accessibility

Support

- Keyboard navigation
- Proper labels
- Screen readers
- Focus management

---

# Non-Functional Requirements

- Modular
- Reusable
- Type-safe
- Scalable
- Production-ready

---

# Acceptance Criteria

Required Inputs

- Role collected
- Experience collected
- Difficulty collected
- Interview type collected

Personalization

- AI generates at most four questions
- Questions are dynamic
- Questions are skippable

Request

- InterviewRequest generated successfully
- Validation succeeds

Navigation

- Previous works
- Next works
- Review screen works
- Skip Personalization works

Code Quality

- No TypeScript errors
- No lint errors
- Project builds successfully

---

# Out of Scope

Do NOT implement

- Gemini
- Trigger.dev
- Interview generation
- Voice recognition
- Web Speech API
- Blob Storage
- Prisma
- Assessment
- Interview session
- Autosave
- Pause & Resume

---

# Deliverables

```
✓ Multi-step Interview Wizard

✓ Required Inputs

✓ AI Personalization

✓ Review Screen

✓ Validation

✓ InterviewRequest Builder

✓ Reusable Components

✓ Hooks

✓ Services

✓ Types
```

---

# Task Checklist

## Wizard

- [ ] Create interview wizard
- [ ] Create step indicator
- [ ] Implement navigation

---

## Required Inputs

- [ ] Role selector
- [ ] Experience selector
- [ ] Difficulty selector
- [ ] Interview type selector
- [ ] Validation

---

## Personalization

- [ ] Generate AI questions
- [ ] Validate AI response
- [ ] Render questions
- [ ] Support skip

---

## Review

- [ ] Summary screen
- [ ] Edit functionality
- [ ] Build InterviewRequest

---

## Validation

- [ ] React Hook Form
- [ ] Zod schemas
- [ ] Navigation validation

---

## Testing

- [ ] Required validation
- [ ] Dynamic questions
- [ ] Skip personalization
- [ ] InterviewRequest generation
- [ ] Project builds successfully
- [ ] No TypeScript errors
- [ ] No lint errors
