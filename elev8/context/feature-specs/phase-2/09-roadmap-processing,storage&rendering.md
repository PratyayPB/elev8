# Spec File 09 - Roadmap Processing, Storage & Rendering

## Objective

Implement the complete post-generation pipeline for AI-generated roadmaps.

This phase is responsible for processing the logical roadmap graph generated in Phase 7.2, computing an optimized layout, converting it into React Flow format, persisting the roadmap artifact in Blob Storage, storing metadata in Prisma, and rendering the completed roadmap.

Roadmaps generated in this phase are **read-only**.

Users may view, zoom, download, duplicate, and regenerate roadmaps, but they cannot modify nodes or connections.

---

# Background

Phase 08 produces a validated logical roadmap graph.

This phase transforms that logical graph into a visual roadmap.

The processing pipeline executes inside a Trigger.dev background job to prevent long-running requests and improve reliability.

---

# AI Implementation Rules

Before implementation

- Read AGENT_RULES.md
- Read PROJECT_OVERVIEW.md
- Read this specification completely
- Read .agents/skills

Implement only

- Background processing
- Layout computation
- Blob persistence
- Rendering
- Metadata persistence

Do NOT implement

- Roadmap generation
- Prompt engineering
- Dashboard integration
- Roadmap library
- Editing functionality

---

# Processing Pipeline

```
RoadmapRequest

↓

Trigger.dev Job

↓

Logical Graph

↓

Schema Validation

↓

Compute Layout (Dagre)

↓

Convert to React Flow

↓

Create Versioned Artifact

↓

Upload JSON to Blob

↓

Persist Metadata

↓

Status = COMPLETED

↓

Frontend renders roadmap
```

---

# Generic Background Job System

Elev8 should use a shared background job system for every long-running AI workflow.

Future modules should reuse this system.

Examples

- Roadmaps
- Resume Analysis
- Career Guidance
- Interview Simulation
- PDF Export

---

# Job Model

Create a generic Job model.

Example fields

```
id

type

status

progress

triggerRunId

userId

artifactId

artifactType

error

startedAt

completedAt

createdAt

updatedAt
```

---

# Job Types

```
ROADMAP

CAREER_GUIDANCE

INTERVIEW

RESUME_ANALYSIS

EXPORT
```

---

# Job Status

```
QUEUED

RUNNING

COMPLETED

FAILED

CANCELLED
```

---

# Progress Updates

Expose progress throughout execution.

Example

```
10%

Preparing Prompt

↓

25%

Generating Roadmap

↓

45%

Validating Graph

↓

65%

Computing Layout

↓

80%

Uploading Artifact

↓

95%

Saving Metadata

↓

100%

Completed
```

---

# Layout Engine

Use

```
Dagre
```

Responsibilities

- Compute node positions
- Minimize overlapping
- Generate clean top-to-bottom layouts
- Produce deterministic layouts

Do not use the LLM for node positioning.

Future versions may replace Dagre with ELK.js without changing the roadmap generation engine.

---

# React Flow Conversion

Convert the logical graph into React Flow format.

Generate

```
nodes

edges
```

Every node should contain

```
id

type

position

data
```

Every edge should contain

```
id

source

target
```

---

# Roadmap Artifact

Every generated roadmap stored in Blob must adhere to the schema.

Example

```json
{
  "metadata": {},

  "logicalGraph": {},

  "reactFlow": {},

  "roadmap": {},

  "resources": {}
}
```

---

# Blob Storage

Store

```
roadmaps/

{roadmapId}.json
```

The uploaded artifact should contain

- Metadata
- Version
- Logical Graph
- React Flow Graph
- Learning Resources
- Projects
- Career Tips

---

# Prisma Persistence

Prisma stores only metadata.

Example

```
Roadmap

id

userId

title

targetRole

experienceLevel

blobUrl

version

status

createdAt

updatedAt
```

No roadmap JSON should be stored in PostgreSQL.

---

# Rendering

Render the completed roadmap using React Flow.

Users should be able to

- Zoom
- Pan
- Fit View
- Collapse sidebar (future)
- Open resource links

Roadmaps remain read-only.

---

# Read-only Roadmaps

Users may

- View roadmap
- Zoom
- Pan
- Download
- Duplicate
- Regenerate

Users may NOT

- Drag nodes
- Delete nodes
- Rename milestones
- Create edges
- Modify roadmap structure

Any modifications require regenerating a new roadmap.

---

# Restore Workflow

When opening an existing roadmap

```
Load Prisma Metadata

↓

Retrieve Blob URL

↓

Download Artifact

↓

Validate Version

↓

Render React Flow
```

---

# Version Validation

Before rendering

Validate

- Version exists
- Artifact schema matches version
- Required sections exist

Reject corrupted artifacts.

---

# Export Preparation

Prepare the rendered roadmap for export.

Supported formats

```
SVG

PDF
```

Actual export implementation belongs to a later phase.

---

# Components

Create

```
features/roadmaps/components/

roadmap-viewer/

react-flow-canvas/

loading-overlay/

job-progress/

read-only-toolbar/

empty-state/

index.ts
```

---

# Services

Create

```
layout.service.ts

blob-storage.service.ts

roadmap-artifact.service.ts

job.service.ts

roadmap-render.service.ts
```

Responsibilities

Layout Service

- Compute Dagre layout

Blob Service

- Upload artifact
- Retrieve artifact

Artifact Service

- Create versioned roadmap artifact
- Validate artifact

Job Service

- Track background jobs
- Update progress
- Report failures

Render Service

- Convert artifact into React Flow objects

---

# Types

Create

```
RoadmapArtifact

RoadmapVersion

LogicalGraph

ReactFlowGraph

Job

JobStatus

JobType

ArtifactMetadata
```

---

# Validation

Validate

- Artifact version
- Blob upload success
- Blob retrieval
- Dagre output
- React Flow graph
- Metadata integrity

---

# Non-Functional Requirements

- Modular
- Versioned
- Deterministic layouts
- Provider agnostic
- Read-only rendering
- Blob-first storage
- Production ready

---

# Acceptance Criteria

Processing

- Dagre computes layout successfully
- React Flow graph generated
- Versioned artifact created

Storage

- Artifact uploaded to Blob
- Blob URL stored in Prisma
- Metadata persists correctly

Jobs

- Generic job system works
- Progress updates correctly
- Retry works
- Errors handled gracefully

Rendering

- Roadmap renders correctly
- Zoom works
- Pan works
- Fit View works
- Read-only mode enforced

Validation

- Version validation works
- Invalid artifacts rejected

Code Quality

- No TypeScript errors
- No lint errors
- Project builds successfully

---

# Out of Scope

Do NOT implement

- Editing roadmaps
- Collaborative editing
- Version history
- Merge conflicts
- Real-time synchronization
- Roadmap library
- Sharing
- Analytics
- Export implementation
- Regeneration workflow

---

# Deliverables

```
✓ Generic Background Job System

✓ Trigger.dev Processing Pipeline

✓ Dagre Layout Engine

✓ React Flow Conversion

✓ Versioned Roadmap Artifact

✓ Blob Storage Integration

✓ Prisma Metadata Persistence

✓ Read-only Roadmap Viewer

✓ Artifact Validation

✓ Job Progress Tracking
```

---

# Task Checklist

## Background Jobs

- [ ] Create generic Job model
- [ ] Create Job service
- [ ] Integrate Trigger.dev
- [ ] Track progress
- [ ] Handle retries

---

## Layout

- [ ] Integrate Dagre
- [ ] Compute node positions
- [ ] Validate layout
- [ ] Convert to React Flow

---

## Storage

- [ ] Create artifact schema
- [ ] Upload artifact to Blob
- [ ] Store Blob URL in Prisma
- [ ] Retrieve artifact

---

## Rendering

- [ ] Render React Flow
- [ ] Enable zoom
- [ ] Enable pan
- [ ] Enable Fit View
- [ ] Enforce read-only mode

---

## Validation

- [ ] Validate artifact schema
- [ ] Validate React Flow graph
- [ ] Validate Blob upload

---

## Testing

- [ ] Processing pipeline succeeds
- [ ] Blob upload succeeds
- [ ] Artifact restores correctly
- [ ] Roadmap renders correctly
- [ ] Read-only restrictions enforced
- [ ] Job progress updates correctly
- [ ] Project builds successfully
- [ ] No TypeScript errors
- [ ] No lint errors
