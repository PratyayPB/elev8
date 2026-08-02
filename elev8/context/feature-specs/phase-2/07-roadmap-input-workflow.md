# Phase 7.1 - Roadmap Input Workflow

## Objective

Implement the complete roadmap request workflow for **Elev8**.

This phase is responsible for collecting user inputs, progressively gathering optional information through AI-generated follow-up questions, validating the collected data, and producing a standardized request payload for roadmap generation.

**This phase must NOT generate a roadmap.**

**This phase must NOT call the roadmap generation model.**

**This phase ends once a valid `RoadmapRequest` object has been created.**

---

# Background

The Roadmap Generator follows Elev8's **Progressive Personalization** principle.

Users should be able to generate a roadmap with only the minimum required information.

Additional information is optional and is collected only to improve roadmap quality.

Users should never be forced to answer optional questions.

---

# AI Implementation Rules

Before implementation:

- Read AGENT_RULES.md.
- Read PROJECT_OVERVIEW.md.
- Read this specification completely.
- Implement only the roadmap request workflow.
- Do NOT generate any roadmap.
- Do NOT render React Flow.
- Do NOT store anything in Blob.
- Do NOT write to Prisma.
- Do NOT implement export functionality.
- Follow Progressive Personalization.

---

# User Flow

```
User Opens Roadmap Generator

↓

Step 1

Required Information

↓

Generate Optional Questions

↓

(Optional)

User Answers Questions

OR

Skip

↓

Validate

↓

Create RoadmapRequest

↓

Pass Request To Generation Service
```

---

# Functional Requirements

The workflow consists of two stages.

## Stage 1

Required Inputs

## Stage 2

Optional AI-powered Personalization

---

# Stage 1

## Required Inputs

Collect exactly three required inputs.

---

### Target Role

Required

Type

Searchable Combobox

Examples

- Frontend Developer
- Backend Developer
- Full Stack Developer
- AI Engineer
- DevOps Engineer
- Data Scientist
- Cybersecurity Engineer
- Mobile Developer

Allow custom roles.

---

### Weekly Study Hours

Required

Type

Dropdown

Options

```
5

10

15

20

25+

Flexible
```

---

### Current Experience Level

Required

Type

Single Select

Options

```
Beginner

Basic

Intermediate

Advanced
```

---

# Validation

All three fields are required.

The user cannot continue until they are completed.

---

# Continue Button

Once validation succeeds,

display

```
Continue
```

---

# Stage 2

## AI-Powered Personalization

After the user completes Stage 1,

request an LLM to generate additional questions.

---

# Objective

Collect additional information that improves roadmap quality.

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

Questions must be

- Dynamic
- Role-specific
- Experience-aware
- Multiple-choice only

---

# Question Types

Supported

Single Select

Example

```
Which company type are you targeting?

○ Startup

○ Mid-sized Company

○ FAANG

○ No Preference
```

---

Multi Select

Example

```
Which technologies do you already know?

□ HTML

□ CSS

□ React

□ Node.js
```

---

Unsupported

- Text Input
- File Upload
- Paragraph Input
- Voice Input
- Numeric Input

---

# AI Question Rules

Questions should

- Improve roadmap quality.
- Never ask unnecessary questions.
- Never exceed four.
- Never repeat required inputs.
- Be easy to answer.
- Be skippable.

---

# Example Questions

Software Engineering

```
Which frontend framework do you know?
```

---

```
What type of company are you targeting?
```

---

```
Do you prefer project-based learning?
```

---

```
Would you like to include interview preparation?
```

---

# Skip Functionality

Users may skip

- Individual questions
- Entire personalization stage

Display

```
Skip Personalization
```

Skipping should never block roadmap generation.

---

# AI Response Format

The LLM should return

```json
[
  {
    "id": "q1",
    "question": "Which frontend framework are you familiar with?",
    "type": "multi",
    "options": ["React", "Vue", "Angular", "None"]
  }
]
```

---

# Validation

Validate

- Maximum four questions
- Valid JSON
- Required fields
- Valid option arrays

Reject invalid responses.

---

# Roadmap Request

After completion,

create

```
RoadmapRequest
```

Structure

```ts
interface RoadmapRequest {
  role: string;

  hoursPerWeek: number | "Flexible";

  experienceLevel: "Beginner" | "Basic" | "Intermediate" | "Advanced";

  personalization: {
    skipped: boolean;

    answers: Answer[];
  };
}
```

Do not include AI-generated roadmap content.

---

# Navigation

Users should be able to

- Go Back
- Continue
- Skip Personalization
- Edit Required Inputs

---

# Persistence

Temporarily preserve user inputs while navigating between steps.

No database persistence.

No Blob uploads.

---

# Components

Create

```
features/roadmaps/components/

roadmap-form/

role-selector/

experience-selector/

study-hours-selector/

personalization-step/

dynamic-question/

question-card/

step-indicator/

summary/

navigation/

index.ts
```

---

# Hooks

Create

```
use-roadmap-form.ts

use-personalization.ts

use-roadmap-request.ts
```

---

# Services

Create

```
roadmap-request.service.ts

personalization.service.ts
```

Responsibilities

Roadmap Request

- Validate inputs
- Build payload

Personalization Service

- Request questions
- Validate response
- Return structured questions

---

# Types

Create

```
RoadmapRequest

Question

QuestionOption

Answer

ExperienceLevel
```

---

# Constants

Create

```
experience-levels.ts

study-hours.ts

roadmap-roles.ts
```

---

# Validation

Use

- React Hook Form
- Zod

Validation should cover

- Required fields
- Enum values
- Study hours
- AI response format

---

# UI Requirements

The workflow should feel like a wizard.

Desktop-first.

Suggested layout

```
Header

↓

Step Indicator

↓

Current Step

↓

Navigation Buttons
```

No visual polish required.

Focus on usability.

---

# Accessibility

Support

- Keyboard navigation
- Screen readers
- Focus management
- Proper labels

---

# Non-Functional Requirements

- Modular
- Type-safe
- Reusable
- Scalable
- Easily extensible

---

# Acceptance Criteria

## Required Inputs

- Role is collected.
- Weekly hours are collected.
- Experience level is collected.

---

## Personalization

- AI generates at most four questions.
- Questions are multiple-choice only.
- Questions depend on role.
- Users can skip personalization.
- Users can skip individual questions.

---

## Payload

- RoadmapRequest is generated successfully.
- Payload validates successfully.
- Invalid AI responses are rejected.

---

## UX

- Wizard navigation works.
- Previous/Next works.
- Validation works.
- Inputs persist while navigating.

---

## Code Quality

- No TypeScript errors.
- No lint errors.
- Project builds successfully.

---

# Out of Scope

Do NOT implement

- Roadmap generation
- Prompt engineering
- React Flow
- Blob storage
- Prisma
- PDF export
- SVG export
- Dashboard integration
- Roadmap history
- Saved roadmaps
- Resource generation

---

# Deliverables

```
✓ Multi-step roadmap wizard

✓ Required input collection

✓ AI-powered personalization workflow

✓ Skip personalization

✓ Dynamic question rendering

✓ Validation

✓ RoadmapRequest builder

✓ Reusable hooks

✓ Services

✓ Types

✓ Constants
```

---

# Task Checklist

## Wizard

- [ ] Create roadmap wizard
- [ ] Implement step navigation
- [ ] Add progress indicator

---

## Required Inputs

- [ ] Create Role selector
- [ ] Create Study Hours selector
- [ ] Create Experience selector
- [ ] Add validation

---

## AI Personalization

- [ ] Create personalization service
- [ ] Request dynamic questions
- [ ] Validate AI response
- [ ] Render dynamic questions
- [ ] Support single-select
- [ ] Support multi-select
- [ ] Implement Skip Personalization

---

## Request Builder

- [ ] Build RoadmapRequest
- [ ] Validate payload
- [ ] Expose payload for the next phase

---

## Validation

- [ ] React Hook Form
- [ ] Zod schemas
- [ ] Navigation validation

---

## Testing

- [ ] Required fields validate correctly
- [ ] AI questions render correctly
- [ ] Skip personalization works
- [ ] Payload is generated successfully
- [ ] Project builds successfully
- [ ] No TypeScript errors
- [ ] No lint errors
