# Phase 10 - Roadmap Library & Viewer

## Objective

Implement the Roadmap Library and Viewer for Elev8.

This phase enables users to browse, search, organize, view, download, duplicate, regenerate, and delete their generated roadmaps.

Roadmaps are immutable AI-generated artifacts. Users cannot edit their contents. Any regeneration creates a new roadmap.

---

# Background

Previous phases implemented

- Roadmap request workflow
- AI generation engine
- Background processing
- Blob storage
- React Flow rendering

This phase provides the interface for managing generated roadmaps.

---

# AI Implementation Rules

Before implementation

- Read AGENT_RULES.md
- Read PROJECT_OVERVIEW.md
- Read this specification completely.

Implement only

- Roadmap Library
- Roadmap Viewer
- Search
- Filters
- Metadata
- CRUD actions
- Download actions

Do NOT implement

- AI generation
- Blob uploads
- Layout generation
- Editing
- Prompt engineering

---

# Architecture

Roadmaps are immutable.

Every roadmap is an independent artifact.

Any regeneration creates

```
New Roadmap ID

↓

New Blob Artifact

↓

New Metadata Record
```

Existing roadmaps remain unchanged.

---

# Routing

Create

```
/roadmaps
```

Roadmap Library

---

Create

```
/roadmaps/[roadmapId]
```

Roadmap Viewer

---

# Roadmap Library

Display all generated roadmaps belonging to the authenticated user.

Each roadmap should display

- Title
- Target Role
- Experience Level
- Status
- Generated Date
- Last Updated
- Estimated Duration

---

# Card Actions

Each roadmap card should provide

```
Open

Download

Duplicate

Regenerate

Delete
```

No edit action.

---

# Search

Support searching by

- Title
- Target Role

Search should be case-insensitive.

---

# Filters

Support

Experience Level

```
Beginner

Basic

Intermediate

Advanced
```

Status

```
Generating

Completed

Failed
```

Sort

```
Newest

Oldest

Recently Updated

Alphabetical
```

---

# Empty State

Display

```
No Roadmaps Yet

Generate your first personalized roadmap.
```

Include

```
Generate Roadmap
```

button.

---

# Roadmap Viewer

When a roadmap is opened

Load

```
Prisma Metadata

↓

Blob URL

↓

Roadmap Artifact

↓

Validate Version

↓

Render React Flow
```

---

# Viewer Features

Support

- Zoom
- Pan
- Fit View
- Mini Map
- Controls
- Background Grid

React Flow should remain read-only.

---

# Learning Resources

Selecting a milestone should display

- Description
- Recommended Resources
- Suggested Projects
- Career Tips

Resources should open in a new tab.

---

# Download

Support

```
Download SVG

Download PDF
```

The export service should use the stored artifact.

No regeneration required.

---

# Duplicate

Duplicate should

- Create a new roadmap metadata record
- Reuse the same Blob artifact
- Assign a new roadmap ID

This allows users to organize copies without regenerating.

---

# Regenerate

Regeneration should

- Reopen the roadmap generation workflow
- Pre-fill the original inputs
- Allow changes
- Create a completely new roadmap

The original roadmap remains unchanged.

---

# Delete

Deleting a roadmap should

- Remove Prisma metadata
- Remove Blob artifact
- Remove associated Job records

Display a confirmation dialog before deletion.

Deletion is permanent.

---

# Job Status

If a roadmap is still generating

Display

```
Generating...

Current Step

Progress Bar
```

Retrieve progress from the shared Job system.

Automatically refresh until completion.

---

# Error State

If generation failed

Display

```
Generation Failed

Retry Generation
```

Retry should create a new generation job.

---

# Blob Restoration

When opening a roadmap

Validate

- Blob exists
- Version supported
- Artifact schema valid

Gracefully handle corrupted or missing artifacts.

---

# Components

Create

```
features/roadmaps/components/

roadmap-library/

roadmap-card/

roadmap-viewer/

roadmap-toolbar/

roadmap-sidebar/

resource-panel/

search-bar/

filter-panel/

empty-state/

delete-dialog/

generation-status/

download-menu/

viewer-controls/

index.ts
```

---

# Services

Create

```
roadmap-library.service.ts

roadmap-viewer.service.ts

roadmap-download.service.ts

roadmap-delete.service.ts

roadmap-duplicate.service.ts

roadmap-regeneration.service.ts
```

---

# Hooks

Create

```
use-roadmaps.ts

use-roadmap.ts

use-job-progress.ts

use-roadmap-search.ts

use-roadmap-filters.ts
```

---

# Types

Create

```
RoadmapSummary

RoadmapFilter

RoadmapSort

RoadmapViewerState

DownloadFormat

GenerationStatus
```

---

# UI Requirements

Library

```
Header

↓

Search

↓

Filters

↓

Roadmap Grid

↓

Pagination
```

Viewer

```
Toolbar

↓

React Flow Canvas

↓

Sidebar

↓

Resource Panel
```

Desktop-first.

Responsive.

---

# Accessibility

Support

- Keyboard navigation
- Screen reader labels
- Focus management
- Accessible dialogs

---

# Non-Functional Requirements

- Modular
- Type-safe
- Blob-first architecture
- Read-only rendering
- Responsive
- Scalable

---

# Acceptance Criteria

Library

- User can browse roadmaps.
- Search works.
- Filters work.
- Sorting works.
- Pagination works.

Viewer

- Roadmap loads from Blob.
- Version validates.
- React Flow renders.
- Resources display correctly.

Actions

- Download works.
- Duplicate works.
- Delete works.
- Regenerate starts a new generation.

Jobs

- Progress updates correctly.
- Failed jobs display retry state.

Code Quality

- No TypeScript errors.
- No lint errors.
- Project builds successfully.

---

# Out of Scope

Do NOT implement

- Editing nodes
- Dragging nodes
- Collaboration
- Comments
- Version history
- Shared editing
- Real-time synchronization
- Analytics
- Favorites
- Collections

---

# Deliverables

```
✓ Roadmap Library

✓ Roadmap Viewer

✓ Search

✓ Filters

✓ Sorting

✓ Blob Restoration

✓ Download Actions

✓ Duplicate

✓ Regeneration

✓ Delete

✓ Job Progress Integration

✓ Read-only React Flow Viewer
```

---

# Task Checklist

## Library

- [ ] Create roadmap library page
- [ ] Create roadmap cards
- [ ] Add pagination
- [ ] Implement empty state

---

## Search & Filters

- [ ] Search by title
- [ ] Search by role
- [ ] Filter by experience
- [ ] Filter by status
- [ ] Sorting options

---

## Viewer

- [ ] Load metadata
- [ ] Retrieve Blob artifact
- [ ] Validate version
- [ ] Render React Flow
- [ ] Display resources
- [ ] Enable read-only controls

---

## Actions

- [ ] Download SVG
- [ ] Download PDF
- [ ] Duplicate roadmap
- [ ] Regenerate roadmap
- [ ] Delete roadmap

---

## Jobs

- [ ] Display generation progress
- [ ] Handle failed jobs
- [ ] Refresh completed jobs

---

## Validation

- [ ] Blob retrieval
- [ ] Artifact validation
- [ ] Version validation
- [ ] Missing artifact handling

---

## Testing

- [ ] Roadmaps load correctly
- [ ] Search and filters work
- [ ] Downloads succeed
- [ ] Duplicate creates a new metadata record
- [ ] Delete removes artifact and metadata
- [ ] Regeneration creates a new roadmap
- [ ] Progress updates correctly
- [ ] Project builds successfully
- [ ] No TypeScript errors
- [ ] No lint errors
