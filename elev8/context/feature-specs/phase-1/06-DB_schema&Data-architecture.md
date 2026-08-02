# Phase 1.6 - Database Schema & Data Architecture

## Objective

Design and implement the relational database schema for Elev8 using Prisma ORM and PostgreSQL.

The database will serve as the system of record for users, metadata, ownership, relationships, application state, and references to stored artifacts.

Large generated content—including AI responses, learning roadmaps, career guidance reports, interview transcripts, resume analyses, and exported documents—must be stored in Blob Storage. Prisma should store only the metadata and the corresponding Blob URLs.

## This phase should establish a scalable data architecture that separates structured relational data from large generated artifacts.

## Artifact Storage Strategy

Elev8 follows a metadata + blob architecture.

Structured relational data should be stored in PostgreSQL via Prisma.

Large generated artifacts should be stored in Blob Storage.

Prisma models should reference these artifacts using Blob URLs.

The database should never store:

- AI-generated roadmap JSON
- Career guidance reports
- Interview transcripts
- Resume analysis JSON
- Exported markdown
- Large documents

# Background

Elev8 is an AI-powered career development platform consisting of multiple interconnected modules.

Instead of creating database models incrementally throughout development, this phase establishes a complete and centralized schema that future features will build upon.

The schema should be modular, scalable, and easy to extend.

---

# AI Implementation Rules

Before implementation:

- Read this specification completely.
- Only implement Prisma schema.
- Do not implement API routes.
- Do not implement UI.
- Do not implement AI features.
- Do not seed production data.
- Keep the schema normalized.
- Follow Prisma best practices.
- Use meaningful relation names.
- Add indexes where appropriate.

---

# Technology

Database

- PostgreSQL

ORM

- Prisma

Validation

- Prisma Client generation

---

# Database Goals

The schema should support:

- Authentication
- User Profiles
- Career Assessments
- Career Guidance Reports
- Learning Roadmaps
- Resume Builder
- Resume Scoring
- Interview Simulation
- Progress Tracking
- User Preferences
- Future AI features

---

# Design Principles

- Normalize data.
- Minimize duplication.
- Prefer relations over JSON when appropriate.
- Use enums for finite values.
- Add timestamps to every model.
- Support future feature expansion.
- Soft delete only where necessary.
- Keep naming consistent.

---

# Models

Implement the following models.

---

## User

Purpose

Represents an authenticated Clerk user.

Responsibilities

- Store Clerk User ID
- Link every feature to the user

Relationships

- One Profile
- Many Career Assessments
- Many Roadmaps
- Many Resumes
- Many Interview Sessions

---

## UserProfile

Stores professional information.

Fields should include

Personal Information

Academic Information

Professional Information

Skills

Career Interests

Career Goals

Preferences

Profile Completion

Onboarding Status

---

## CareerAssessment

Stores assessment inputs.

Examples

- Current Skill Level
- Interests
- Goals
- Preferred Industry
- Preferred Role
- Current Experience

---

## CareerGuidance

Stores generated guidance.

Should support

- Career Match
- Skill Gap Analysis
- Recommendations
- Salary Insights
- Market Readiness

---

## Roadmap

Stores generated learning roadmaps.

Fields

- Title
- Description
- Target Career
- Estimated Duration
- Current Status

Relationships

- Multiple Milestones

---

## RoadmapMilestone

Represents one milestone.

Fields

- Title
- Description
- Order
- Status
- Estimated Time

---

## Resume

Stores user resumes.

Fields

- Title
- Resume JSON
- Resume Version
- ATS Score
- Overall Score

Support multiple resumes per user.

---

## ResumeAnalysis

Stores AI analysis.

Examples

- Suggestions
- Missing Keywords
- Weak Sections
- Improvement Areas

---

## InterviewSession

Represents one mock interview.

Fields

- Target Role
- Difficulty
- Overall Score
- Duration
- Status

Relationships

Multiple Questions

---

## InterviewQuestion

Fields

- Question
- Category
- Difficulty
- User Answer
- AI Feedback
- Score

---

## Progress

Stores learning progress.

Examples

- Completed Milestones
- Interview Readiness
- Resume Readiness
- Career Readiness
- Overall Progress

---

## Notification (Future Ready)

Placeholder model.

No implementation logic.

---

# Enumerations

Create enums where appropriate.

Examples

Career Level

```
BEGINNER

INTERMEDIATE

ADVANCED
```

Employment Status

```
STUDENT

EMPLOYED

UNEMPLOYED

CAREER_SWITCHER
```

Roadmap Status

```
NOT_STARTED

IN_PROGRESS

COMPLETED
```

Interview Difficulty

```
EASY

MEDIUM

HARD
```

Onboarding Status

```
NOT_STARTED

IN_PROGRESS

COMPLETED

SKIPPED
```

Resume Status

```
DRAFT

COMPLETED

ARCHIVED
```

Create additional enums where beneficial.

---

# Relationships

The schema should support

```
User

│

├── Profile

├── Career Assessments

├── Career Guidance Reports

├── Roadmaps

│      └── Milestones

├── Resumes

│      └── Resume Analyses

├── Interview Sessions

│      └── Questions

└── Progress
```

---

# Indexing

Add indexes for

- Clerk User ID
- Foreign Keys
- Frequently queried status fields
- Created At timestamps

Avoid unnecessary indexes.

---

# Prisma Configuration

Implement

```
schema.prisma

generator

datasource

models

enums
```

Generate Prisma Client.

---

# Seed File

Create

```
prisma/

seed.ts
```

Populate with

- TODO comments
- Example structure

Do not insert production data.

---

# Migration

Generate the initial migration.

Migration should succeed without errors.

---

# Documentation

Document

- Model relationships
- Important enums
- Naming conventions

inside

```
docs/database.md
```

---

# Non-Functional Requirements

- Fully normalized schema
- Production-ready
- Type-safe
- Easily extendable
- Clean naming
- Consistent relations
- Prisma best practices

---

# Acceptance Criteria

Database

- Prisma schema compiles.
- Prisma Client generates successfully.
- Migration runs successfully.
- Relationships are valid.
- Enums compile.

Models

- All required models exist.
- Relations are correct.
- Indexes are configured.

Code Quality

- No schema warnings.
- No migration errors.
- No lint errors.
- Project builds successfully.

---

# Out of Scope

Do NOT implement

- CRUD operations
- API routes
- AI integrations
- Database queries
- Dashboard
- Authentication logic
- Resume generation
- Career Guidance generation
- Roadmap generation
- Interview simulation
- Progress calculations
- Seed data beyond placeholders

---

# Deliverables

The implementation should include

```
✓ Complete Prisma schema

✓ Database relationships

✓ Enums

✓ Indexes

✓ Prisma Client generation

✓ Initial migration

✓ Seed file

✓ Database documentation
```

---

# Task Checklist

## Prisma Setup

- [ ] Configure datasource
- [ ] Configure generator
- [ ] Generate Prisma Client

---

## Models

- [ ] Create User model
- [ ] Create UserProfile model
- [ ] Create CareerAssessment model
- [ ] Create CareerGuidance model
- [ ] Create Roadmap model
- [ ] Create RoadmapMilestone model
- [ ] Create Resume model
- [ ] Create ResumeAnalysis model
- [ ] Create InterviewSession model
- [ ] Create InterviewQuestion model
- [ ] Create Progress model
- [ ] Create Notification placeholder model

---

## Enums

- [ ] Create all required enums
- [ ] Apply enums to models

---

## Database

- [ ] Add relationships
- [ ] Add indexes
- [ ] Add timestamps

---

## Migration

- [ ] Generate migration
- [ ] Verify migration succeeds

---

## Documentation

- [ ] Create database documentation
- [ ] Document relationships
- [ ] Document enums

---

## Validation

- [ ] Prisma validates successfully
- [ ] Prisma Client generates
- [ ] Migration succeeds
- [ ] No schema warnings
- [ ] No TypeScript errors
