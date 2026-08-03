# Spec file 08 - Roadmap Generation Engine

## Objective

Implement the AI-powered roadmap generation engine for **Elev8**.

This phase is responsible for transforming a validated `RoadmapRequest` into a structured roadmap using an LLM.

The generation engine should produce a **logical roadmap graph**, learning milestones, projects, resources, and metadata.

The LLM **must not generate React Flow node positions**. Instead, it should generate a logical graph describing the relationships between roadmap nodes. Node positioning and rendering will be handled in the next phase.

Roadmap generation should execute as a **Trigger.dev background task** to provide a fast user experience, improve reliability, and support long-running AI workflows.

This phase must NOT:

- Render React Flow
- Compute node positions
- Upload artifacts to Blob Storage
- Write metadata to Prisma
- Export SVG or PDF

## Those responsibilities belong to spec file 09.

# Background

The Roadmap Generator is the flagship feature of Elev8.

The generation engine receives a validated `RoadmapRequest` from 07-roadmap-input-workflow and returns a structured roadmap object.

The returned object will later be

- Rendered using React Flow
- Stored in Vercel Blob
- Exported as SVG/PDF

The model must return structured JSON only.

---

# Background Job Architecture

Roadmap generation is a long-running AI workflow and should never block the user interface.

After the user submits a valid `RoadmapRequest`, the application should immediately create a roadmap record with a generation status and enqueue a Trigger.dev background task.

Example workflow

```text
User submits request

↓

Create roadmap metadata

↓

Status = GENERATING

↓

Trigger.dev Job

↓

Generate roadmap

↓

Return immediately to user
```

The frontend should display generation progress while the background task completes.

# AI Implementation Rules

Before implementation

- Read AGENT_RULES.md
- Read PROJECT_OVERVIEW.md
- Read this specification completely

Only implement

- Prompt construction
- LLM communication
- Response validation
- Structured output generation

Do NOT implement

- React Flow rendering
- Blob Storage
- Prisma persistence
- Downloads
- Dashboard integration

---

# Functional Requirements

The engine should

- Receive a validated RoadmapRequest
- Construct a structured LLM prompt
- Generate a roadmap
- Validate AI output
- Return a normalized Roadmap object

---

# Input

Receive

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

Input should already be validated.

---

# Prompt Builder

Create

```
roadmap-prompt.service.ts
```

Responsibilities

- Build system prompt
- Build user prompt
- Inject personalization answers
- Define output schema

The prompt should produce deterministic JSON.

---

# AI Generation Service

Create

```
roadmap-generation.service.ts
```

Responsibilities

- Receive RoadmapRequest
- Build LLM prompt
- Call the AI provider
- Parse response
- Validate response
- Return a structured logical roadmap

## This service should be invoked from a Trigger.dev task rather than directly from an API route.

# Prompt Rules

The prompt should instruct the LLM to

Generate

- Learning roadmap
- Milestones
- Projects
- Learning resources
- React Flow graph

The prompt should explicitly instruct

- Return JSON only
- No Markdown
- No explanations
- No code fences
- No extra text

---

# Trigger.dev Integration

Implement roadmap generation as a Trigger.dev background task.

Create

```
tasks/generate-roadmap.ts
```

Responsibilities

- Receive RoadmapRequest
- Build prompt
- Call LLM
- Validate response
- Return logical roadmap

Do NOT

- Compute layout
- Upload Blob
- Update Prisma
- Render React Flow

Those responsibilities belong to spec file 09.

The task should expose progress updates for each major step.

Example

```
Building Prompt

↓

Generating Roadmap

↓

Validating Response

↓

Completed
```

The task should support automatic retries for transient failures.

# Roadmap Requirements

The generated roadmap should

- Match the user's target role
- Match experience level
- Respect weekly study hours
- Include realistic milestones
- Follow logical learning order

---

# Learning Resources

Every milestone should contain recommended resources.

Examples

Documentation

Courses

Videos

Articles

GitHub Repositories

Official Documentation

Prefer free resources where possible.

---

# Projects

Include projects appropriate to the user's level.

Example

Beginner

```
Calculator

Todo App

Weather App
```

Intermediate

```
Chat App

Task Manager

Blog Platform
```

Advanced

```
Distributed Cache

Event Streaming Platform

Large Scale E-commerce
```

---

# Logical Graph Generation

The LLM should generate a **logical roadmap graph**, not a rendered React Flow graph.

The graph should describe:

- Learning nodes
- Relationships between nodes
- Node types
- Learning order

The LLM must NOT generate:

- x coordinates
- y coordinates
- layout positions
- rendering metadata

Example

```json
{
  "nodes": [
    {
      "id": "html",
      "title": "Learn HTML",
      "description": "...",
      "type": "skill"
    },
    {
      "id": "css",
      "title": "Learn CSS",
      "description": "...",
      "type": "skill"
    }
  ],
  "edges": [
    {
      "source": "html",
      "target": "css"
    }
  ]
}
```

This logical graph will later be transformed into React Flow nodes during spec file 09.

---

# Roadmap Structure

Return

```ts
interface GeneratedRoadmap {
  metadata;

  roadmap;

  logicalGraph;
}
```

The response should contain:

- Metadata
- Learning roadmap
- Logical graph
- Resources
- Projects
- Career tips

## Do not include React Flow positioning information.

# Metadata

Include

```
title

role

estimatedDuration

experienceLevel

generatedAt
```

---

# Roadmap Content

Include

```
Summary

Milestones

Projects

Resources

Career Tips
```

---

# React Flow

Return

```
nodes

edges
```

Each node should contain

```
id

type

position

data
```

Edges

```
id

source

target
```

---

# Validation

Create

```
roadmap-validator.ts
```

Validate

- Valid JSON
- Metadata
- Milestones
- Projects
- Resources
- Logical graph nodes
- Logical graph edges

Reject

- Invalid JSON
- Circular references
- Missing nodes
- Missing edges
- Duplicate IDs
- Empty graphs

Do not validate rendering coordinates, as they are not generated in this phase.

---

# Retry Strategy

If validation fails

Retry generation.

Maximum

```
3 Attempts
```

After final failure

Return structured error.

---

# Retry Strategy

Roadmap generation should execute within a Trigger.dev task.

If generation fails

- Retry automatically

Maximum

```
3 Attempts
```

Retry only for transient failures such as

- AI provider timeout
- Temporary network failure
- Invalid JSON generation

Permanent validation failures should immediately terminate the task with a structured error.

---

# Types

Create

```
GeneratedRoadmap

RoadmapMetadata

RoadmapNode

RoadmapEdge

Milestone

LearningResource

Project

CareerTip
```

---

# Services

Create

```
roadmap-prompt.service.ts

roadmap-generation.service.ts

roadmap-validator.ts
```

---

# Constants

Create

```
roadmap-schema.ts

roadmap-prompts.ts
```

---

# Non-Functional Requirements

- Type-safe
- Deterministic
- Modular
- Reusable
- Extensible
- Provider agnostic

---

# Acceptance Criteria

Generation

- Prompt builds successfully
- AI returns valid JSON
- Roadmap matches user input
- Projects are appropriate
- Resources are relevant

Validation

- Invalid responses rejected
- Retry works
- Errors handled gracefully

React Flow

- Nodes generated
- Edges generated
- Graph validates

Code Quality

- No TypeScript errors
- No lint errors
- Project builds successfully

---

# Out of Scope

Do NOT implement

- React Flow rendering
- Blob uploads
- Prisma
- SVG export
- PDF export
- Dashboard
- Roadmap Library
- Sharing
- Editing
- Versioning
- Dagre layout
- ELK.js layout
- React Flow node positioning
- Blob uploads
- Prisma updates
- SVG export
- PDF export

---

# Deliverables

```
✓ Prompt Builder

✓ Trigger.dev task

✓ AI Generation Service

✓ Logical Graph Generation

✓ Prompt Templates

✓ Output Validator

✓ Retry Strategy

✓ Structured Roadmap

✓ Projects

✓ Resources

✓ Metadata
```

---

# Task Checklist

## Prompt

- [ ] Create prompt builder
- [ ] Build system prompt
- [ ] Build user prompt
- [ ] Inject personalization

---

## Trigger.dev

- [ ] Create Trigger.dev roadmap generation task
- [ ] Register task
- [ ] Add progress updates
- [ ] Configure retries

---

## AI

- [ ] Build prompt
- [ ] Generate logical roadmap
- [ ] Parse JSON
- [ ] Normalize response

---

## Validation

- [ ] Validate metadata
- [ ] Validate roadmap
- [ ] Validate logical graph
- [ ] Validate resources
- [ ] Validate projects

---

## Validation

- [ ] Validate metadata
- [ ] Validate roadmap
- [ ] Validate milestones
- [ ] Validate resources
- [ ] Validate React Flow nodes
- [ ] Validate React Flow edges

---

## Error Handling

- [ ] Retry failed generations
- [ ] Handle invalid JSON
- [ ] Handle malformed graphs
- [ ] Return structured errors

---

## Testing

- [ ] Beginner roadmap
- [ ] Intermediate roadmap
- [ ] Advanced roadmap
- [ ] Different study hours
- [ ] Different roles
- [ ] Invalid AI responses
- [ ] Retry strategy
- [ ] Project builds successfully
- [ ] No TypeScript errors
- [ ] No lint errors
