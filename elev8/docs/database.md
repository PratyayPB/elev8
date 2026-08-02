# Elev8 Database Architecture & Schema Documentation

## Overview

Elev8 utilizes **PostgreSQL** via **Prisma ORM**. The data architecture follows a **hybrid Metadata + Blob Storage** design:
- **PostgreSQL (Prisma)** stores relational metadata, user state, authentication mapping, status enums, foreign keys, timestamps, and Blob URLs.
- **Blob Storage (Vercel Blob / UploadThing)** stores large AI-generated content (e.g. detailed roadmap JSON, full career guidance reports, interview transcripts, resume analysis reports).

Prisma models reference large generated artifacts via `contentUrl: String?` fields pointing to Blob Storage.

---

## Model Relationships

```text
User (clerkId: unique)
 ├── UserProfile (1:1)
 ├── CareerAssessment (1:N)
 │      └── CareerGuidance (0:N)
 ├── CareerGuidance (1:N)
 ├── Roadmap (1:N)
 │      └── RoadmapMilestone (1:N)
 ├── Resume (1:N)
 │      └── ResumeAnalysis (1:N)
 ├── InterviewSession (1:N)
 │      └── InterviewQuestion (1:N)
 ├── Progress (1:1)
 └── Notification (1:N)
```

---

## Prisma Models Summary

| Model | Purpose | Key Relations | Storage Strategy |
| :--- | :--- | :--- | :--- |
| **`User`** | Authenticated Clerk user anchor | `UserProfile`, `Roadmap`, `Resume`, etc. | Relational DB |
| **`UserProfile`** | Professional profile, background & skills | Belongs to `User` (1:1) | Relational DB |
| **`CareerAssessment`** | Assessment inputs (skills, goals, role) | Belongs to `User`, has many `CareerGuidance` | Relational DB |
| **`CareerGuidance`** | AI career recommendations metadata | Belongs to `User` & `CareerAssessment` | `contentUrl` → Blob Storage |
| **`Roadmap`** | AI learning roadmap metadata | Belongs to `User`, has many `RoadmapMilestone` | `contentUrl` → Blob Storage |
| **`RoadmapMilestone`** | Individual step/milestone in a roadmap | Belongs to `Roadmap` | Relational DB |
| **`Resume`** | Resume versions & metadata | Belongs to `User`, has many `ResumeAnalysis` | `contentUrl` → Blob Storage |
| **`ResumeAnalysis`** | AI resume audit & keyword recommendations | Belongs to `Resume` | `contentUrl` → Blob Storage |
| **`InterviewSession`** | Mock interview session metadata & score | Belongs to `User`, has many `InterviewQuestion` | `contentUrl` → Blob Storage |
| **`InterviewQuestion`** | Q&A pair with AI feedback | Belongs to `InterviewSession` | Relational DB |
| **`Progress`** | Aggregate career readiness & completion scores | Belongs to `User` (1:1) | Relational DB |
| **`Notification`** | System & activity notification placeholders | Belongs to `User` | Relational DB |

---

## Enumerations

- **`CurrentStatus`**: `STUDENT`, `GRADUATE`, `WORKING_PROFESSIONAL`, `CAREER_SWITCHER`
- **`OnboardingStatus`**: `NOT_STARTED`, `IN_PROGRESS`, `COMPLETED`, `SKIPPED`
- **`CareerLevel`**: `BEGINNER`, `INTERMEDIATE`, `ADVANCED`
- **`RoadmapStatus`**: `NOT_STARTED`, `IN_PROGRESS`, `COMPLETED`, `ARCHIVED`
- **`MilestoneStatus`**: `NOT_STARTED`, `IN_PROGRESS`, `COMPLETED`, `SKIPPED`
- **`ResumeStatus`**: `DRAFT`, `COMPLETED`, `ARCHIVED`
- **`InterviewStatus`**: `IN_PROGRESS`, `COMPLETED`, `ABANDONED`
- **`InterviewDifficulty`**: `EASY`, `MEDIUM`, `HARD`
- **`InterviewCategory`**: `BEHAVIORAL`, `TECHNICAL`, `SYSTEM_DESIGN`, `ROLE_SPECIFIC`, `GENERAL`
- **`NotificationStatus`**: `UNREAD`, `READ`, `ARCHIVED`

---

## Indexing Strategy

To ensure high performance across scale:
- Primary mapping: `User.clerkId` indexed with `@unique` & `@@index([clerkId])`.
- All Foreign Keys (`userId`, `roadmapId`, `resumeId`, `sessionId`, `assessmentId`) are explicitly indexed with `@@index`.
- Compound ordering indexes applied to ordered items: `RoadmapMilestone(roadmapId, order)`, `InterviewQuestion(sessionId, order)`.
- Status & timestamp filtering: `@@index([status])`, `@@index([createdAt])`.
