# Phase 3.7 - Predefined Interview System

## Objective

Modify the existing Elev8 Interview Module to support predefined interviews while preserving the current interview architecture and workflow.

This phase must NOT replace or remove the existing:

- Interview Session Engine
- Interview State Machine
- Text Answering
- Voice Input
- Autosave
- Pause & Resume
- Interview Submission
- Trigger.dev Assessment
- Question Assessment
- Overall Assessment
- Interview Insights
- Interview Workspace
- Blob Storage
- Prisma persistence

The new functionality should provide users with a curated set of predefined interviews that can be selected and attempted.

---

# Core Requirement

For the current version, users must NOT be able to create arbitrary interviews through:

/dashboard/interviews/new

The route must be inaccessible to users who have not completed their profile setup.

Profile completion enforcement will be implemented as a route/access guard.

The actual profile setup workflow is outside the scope of this phase.

# Existing Architecture Preservation

The implementation MUST integrate with the existing Interview architecture.

Do NOT create a separate interview execution system.

The flow must remain:

Predefined Interview

↓

Create Interview Session

↓

Existing Interview Session Engine

↓

Text / Voice Answers

↓

Autosave

↓

Pause / Resume

↓

Submit

↓

Trigger.dev Assessment

↓

Interview Insights

The predefined interview system only determines the initial interview configuration and questions.

# Route Protection

/dashboard/interviews/new
The route should be protected by a profile-completion guard.

User

↓

Authentication

↓

Profile Exists?

↓

Profile Complete?

        /       \

      NO         YES
      │           │
      ▼           ▼

Redirect Allow

# Profile Completion

Create a reusable utility:
isProfileComplete()
This function should determine whether the minimum required profile information exists.
FOR NOW, SET isProfileComplete() always FALSE.

# Access Behavior

If the user has not completed their profile:
/dashboard/interviews/new

must not render the interview selection interface.

Redirect to /dashboard/interviews.

# Important

Do NOT disable or delete the existing route implementation.

Implement the restriction through:

Route guard
Middleware
Server-side authorization
Reusable profile-completion check

The restriction must be easy to remove or modify in a future phase.

# Predefined Interview Catalog

Create exactly:
20 predefined interview definitions

The catalog should support multiple:

Roles
Interview Types
Difficulty Levels

# Interview Roles

Create predefined interviews for:

Full Stack Developer
Frontend Developer
Backend Developer
Software Engineer
Data Scientist
Machine Learning Engineer
AI Engineer
Data Analyst
DevOps Engineer
Cloud Engineer
Cybersecurity Analyst
QA / Test Engineer
Product Manager
Business Analyst
UI/UX Designer
Digital Marketing Specialist
Software Engineer
Product Manager
General HR / Behavioral
Leadership & Management

# Interview Types

Supported types:
type InterviewType =
| "TECHNICAL"
| "NON_TECHNICAL"
| "BEHAVIORAL";

The predefined catalog should contain a meaningful mixture of these types.

# Difficulty Levels

Every interview must support:
type InterviewDifficulty =
| "EASY"
| "MEDIUM"
| "HARD";

# Question Count

Each difficulty level should contain approximately:
Easy:
7–8 questions

Medium:
9–10 questions

Hard:
11–12 questions

Do not create extremely short interviews.

Do not exceed 12 questions.

# Difficulty Progression

Difficulty must represent actual question complexity.

Easy
Focus on:
Fundamentals
Basic concepts
Basic role knowledge
Simple practical questions

Medium
Focus on:
Practical application
Debugging
Scenario-based questions
Intermediate concepts
Decision-making

Hard
Focus on:
Advanced concepts
System-level reasoning
Complex scenarios
Trade-offs
Architecture
Leadership/decision-making where applicable

Changing only the difficulty label is NOT sufficient.

# Predefined Interview Data Structure

Use an object keyed by a unique interview ID.

Recommended structure:
Difficulty Progression

Difficulty must represent actual question complexity.

Easy

Focus on:

Fundamentals
Basic concepts
Basic role knowledge
Simple practical questions
Medium

Focus on:

Practical application
Debugging
Scenario-based questions
Intermediate concepts
Decision-making
Hard

Focus on:

Advanced concepts
System-level reasoning
Complex scenarios
Trade-offs
Architecture
Leadership/decision-making where applicable

Changing only the difficulty label is NOT sufficient.

Predefined Interview Data Structure

Use an object keyed by a unique interview ID.

Recommended structure:
const PREDEFINED_INTERVIEWS = {
"fullstack-developer": {
id: "fullstack-developer",
role: "Full Stack Developer",
type: "TECHNICAL",
description: "...",

    levels: {
      EASY: {
        questions: {}
      },

      MEDIUM: {
        questions: {}
      },

      HARD: {
        questions: {}
      }
    }

}
};

# Why Object-Based Storage

Use:
PREDEFINED_INTERVIEWS[id]

instead of searching through an array.

Advantages:

O(1) lookup
Easier validation
Easier extension
Unique IDs are explicit
Easier server-side loading

# Question Structure

Questions should also use an object keyed by question ID.

Example:
questions: {
"q1": {
id: "q1",
question: "What is the difference between SSR and CSR?",
answer: ""
},

"q2": {
id: "q2",
question: "Explain REST APIs.",
answer: ""
}
}

# Question Schema

Create:
interface PredefinedInterviewQuestion {
id: string;

question: string;

answer: string;

category?: string;

expectedTopics?: string[];

estimatedAnswerTime?: number;
}

The initial value must always be:
answer: ""

The predefined template must never contain user answers.

# Interview Definition Schema

Create:
interface PredefinedInterview {
id: string;

role: string;

type: InterviewType;

description: string;

levels: {
EASY: InterviewLevel;
MEDIUM: InterviewLevel;
HARD: InterviewLevel;
};
}

# Interview Level

interface InterviewLevel {
questions: Record<string, PredefinedInterviewQuestion>;
}

# Immutable Templates

Predefined interviews are templates.

They must never be modified by a user.

Flow:
Predefined Interview Template

↓

Clone

↓

Interview Session

↓

User Answers

# Interview Session Creation

When the user selects:
Role

-

Interview Type

-

Difficulty
load the appropriate predefined template.

Create a new Interview Session using the existing session creation workflow.

# IMPORTANT

Do NOT directly mutate:
PREDEFINED_INTERVIEWS

The selected interview must be deep-cloned before adding session-specific information.

# Session Data

The created session should contain:
Interview Metadata

-

Questions

-

Empty Answers

-

Session State

Example:
{
"metadata": {
"role": "Full Stack Developer",
"type": "TECHNICAL",
"difficulty": "MEDIUM",
"source": "PREDEFINED"
},

"questions": {
"q1": {
"id": "q1",
"question": "...",
"answer": ""
}
}
}

Existing Interview Workflow

After session creation:

Predefined Interview

↓

Interview Session

↓

/dashboard/interviews/[interviewId]

↓

Existing Session Engine

Do not create a new session UI.

Do not create a second answer mechanism.

Do not create a second autosave mechanism.

Interview Selection UI

The /dashboard/interviews/new page should allow users to select:

Role

Interview Type

Difficulty
Selection Flow

Recommended:

Select Role

↓

Select Interview Type

↓

Select Difficulty

↓

View Interview Information

↓

Start Interview
Interview Information

Before starting, display:

Role

Interview Type

Difficulty

Number of Questions

Estimated Duration

Description

Example:

Full Stack Developer

Technical

Medium

10 Questions

Estimated Time: 30 minutes
Start Interview

Button:

Start Interview

When clicked:

Validate Selection

↓

Load Template

↓

Clone Template

↓

Create Session

↓

Redirect to Existing Interview Session
API

Create or extend the existing interview session creation endpoint.

Do NOT create a completely separate interview execution endpoint if an appropriate existing endpoint already exists.

The API should accept:

interface CreatePredefinedInterviewRequest {
interviewId: string;

difficulty:
| "EASY"
| "MEDIUM"
| "HARD";
}

The role and type should be derived from the predefined catalog.

Do not trust role/type values sent independently by the client.

Server-Side Validation

The server must validate:

User authentication
Profile completion
Interview ID
Difficulty
Interview existence
Difficulty availability
Question count
Question schema

Never trust the client-side catalog.

Client-Side Validation

The UI should provide immediate validation.

The server remains authoritative.

Existing Assessment Workflow

After the user submits the interview:

Interview Submitted

↓

Existing Trigger.dev Assessment

↓

Bulk Question Assessment

↓

Overall Assessment

↓

Artifact Update

↓

Blob

↓

Prisma

↓

Interview Insights

Do not modify the existing assessment architecture.

The assessment should receive:

Role

Interview Type

Difficulty

Questions

User Answers

Experience Level

where already supported by the current workflow.

Source Metadata

Add or preserve:

source: "PREDEFINED"

This allows future interview sources:

PREDEFINED
ROADMAP
CUSTOM

Do not implement CUSTOM in this phase.

Roadmap Integration

Do NOT implement automatic roadmap → interview generation in this phase.

However, the architecture should allow a future interview session to use:

source: "ROADMAP"

and additional context such as:

sourceContext: {
roadmapId: string;
phaseId: string;
topics: string[];
}

Do not implement this functionality yet.

Interview Workspace Integration

Predefined interviews must appear correctly in the existing Interview Workspace.

Cards should display:

Role

Type

Difficulty

Status

Score

Created Date
Interview Insights Integration

Completed predefined interviews must open through the existing Interview Insights page.

No separate report UI should be created.

Interview Catalog Organization

Create:

features/interview/data/

and store the predefined catalog there.

Recommended structure:

features/interview/

├── data/
│ ├── predefined-interviews.ts
│ ├── interview-types.ts
│ ├── interview-roles.ts
│ └── interview-difficulties.ts
│
├── types/
│ └── predefined-interview.ts
Recommended Data Organization

Use one central catalog:

predefinedInterviews

and supporting constants:

INTERVIEW_TYPES

INTERVIEW_DIFFICULTIES

INTERVIEW_ROLES

Do not duplicate role/type strings throughout components.

Suggested Interview Distribution

Ensure the 20 interviews contain a reasonable distribution.

Technical
Full Stack Developer
Frontend Developer
Backend Developer
Software Engineer
Data Scientist
Machine Learning Engineer
AI Engineer
Data Analyst
DevOps Engineer
Cloud Engineer
Cybersecurity Analyst
QA / Test Engineer
Non-Technical
Product Manager
Business Analyst
UI/UX Designer
Digital Marketing Specialist
Behavioral
Software Engineer Behavioral
Product Manager Behavioral
General HR / Behavioral
Leadership & Management
Question Quality

Questions must be:

Role-specific
Relevant to the selected interview type
Appropriate for the difficulty
Clear
Non-duplicative
Suitable for text and voice responses

Avoid generic questions when role-specific questions are possible.

Behavioral Interviews

Behavioral questions should focus on areas such as:

Communication
Conflict resolution
Leadership
Teamwork
Decision-making
Adaptability
Problem solving

Do not turn behavioral interviews into technical interviews.

Non-Technical Interviews

Questions should focus on role-specific non-technical competencies.

Examples:

Product Manager:

Prioritization
Product strategy
Stakeholder management
Product metrics
User research

Business Analyst:

Requirements gathering
Stakeholder communication
Business processes
Problem analysis
Technical Interviews

Questions should cover appropriate technical topics for the role.

Example:

Full Stack Developer:

Frontend

Backend

Databases

APIs

Authentication

System Design

Deployment

Difficulty should determine depth.

Estimated Duration

Each interview level should have an estimated duration based on question count.

Example:

Easy:
20–25 minutes

Medium:
25–35 minutes

Hard:
35–45 minutes

This is metadata only.

Do not implement a mandatory timer unless the existing Interview Session Engine already supports one.

File Structure

Use the existing feature structure.

Add only what is required:

features/
└── interview/
│
├── data/
│ ├── predefined-interviews.ts
│ ├── interview-types.ts
│ ├── interview-roles.ts
│ └── interview-difficulties.ts
│
├── types/
│ └── predefined-interview.ts
│
├── components/
│ └── predefined-interview/
│ ├── interview-selector.tsx
│ ├── role-selector.tsx
│ ├── type-selector.tsx
│ ├── difficulty-selector.tsx
│ ├── interview-preview.tsx
│ └── index.ts
│
└── services/
└── predefined-interview.service.ts

Adapt paths to the existing project structure rather than duplicating existing components/services.

Service

Create:

predefined-interview.service.ts

Responsibilities:

getAllInterviews()

getInterviewById()

getInterviewLevel()

validateInterviewSelection()

createSessionFromTemplate()

Do not put UI logic inside this service.

API Response

For interview catalog retrieval:

interface PredefinedInterviewSummary {
id: string;

role: string;

type: InterviewType;

description: string;

availableLevels: InterviewDifficulty[];
}

Do not send unnecessary answer/session fields to the client.

Security

The client must not be trusted to define:

Question

Expected Topics

Role

Interview Type

The server should retrieve these from the predefined catalog.

The client only submits:

interviewId

difficulty
Profile Gate

The profile gate must be evaluated server-side.

Do not rely solely on:

if (!profileComplete) {
router.push(...)
}

because the user could bypass the UI.

The API/session creation endpoint must perform the same validation.

Unauthorized Behavior

If the user is authenticated but profile incomplete:

/dashboard/interviews/new

→ redirect to profile setup.

If an API request attempts to create a predefined interview without a complete profile:

HTTP 403

with a structured error response.

Existing Users

Do not invalidate existing Interview Sessions.

Existing sessions must continue to work.

This phase is additive.

Existing Data

Do not migrate existing Interview Artifacts unless required.

Existing interviews should continue to be recognized by the current system.

Testing Requirements
Route Protection

Test:

Unauthenticated user
Authenticated user with incomplete profile
Authenticated user with complete profile
Catalog

Test:

All 20 interviews load
Every interview has required metadata
Every interview has Easy/Medium/Hard
Question counts are between 7 and 12
Question IDs are unique
Interview IDs are unique
Session Creation

Test:

Valid interview selection
Invalid interview ID
Invalid difficulty
Incomplete profile
Deep cloning
Empty answers
Session Isolation

Test:

User A

↓

Interview Template

↓

User A Session

and

User B

↓

Same Interview Template

↓

User B Session

Modifying User A's answers must never modify User B's session or the predefined template.

Existing Workflow

Verify:

Text answering works
Voice answering works
Autosave works
Pause works
Resume works
Submission works
Trigger.dev assessment works
Blob persistence works
Prisma metadata works
Interview Insights works
Interview Workspace works
Acceptance Criteria
Profile Access
/dashboard/interviews/new is inaccessible to incomplete profiles.
Server-side protection exists.
Complete profiles can access the route.
Existing interview sessions remain accessible.
Predefined Interviews
Exactly 20 interview definitions exist.
Multiple roles are represented.
Technical, Non-Technical and Behavioral types are represented.
Every interview has Easy, Medium and Hard levels.
Each level contains 7–12 questions.
Selection
User can select role/interview.
User can select difficulty.
Interview preview displays correctly.
User can start interview.
Session
Template is deep-cloned.
Answers start empty.
User-specific session is created.
Existing session engine is used.
Existing Architecture
Existing autosave preserved.
Existing pause/resume preserved.
Existing voice input preserved.
Existing Trigger.dev assessment preserved.
Existing Blob storage preserved.
Existing Interview Insights preserved.
Existing Interview Workspace preserved.
Security
Server validates profile completion.
Server validates interview selection.
Client cannot inject arbitrary questions.
Code Quality
No TypeScript errors.
No lint errors.
Project builds successfully.
No duplicated interview execution architecture.
Out of Scope

Do NOT implement:

Profile setup workflow
Career Assessment
Recommendation Engine
Custom interview creation
LLM-generated interview questions
Roadmap → Interview automation
AI-generated predefined interviews at runtime
New assessment architecture
New session architecture
New Blob architecture
New Interview Insights architecture
Deliverables
✓ Profile Completion Route Guard

✓ Server-Side Profile Gate

✓ 20 Predefined Interview Definitions

✓ Technical Interviews

✓ Non-Technical Interviews

✓ Behavioral Interviews

✓ Easy / Medium / Hard Levels

✓ 7–12 Questions Per Level

✓ Object-Based Interview Catalog

✓ Object-Based Questions

✓ Immutable Interview Templates

✓ Template → Session Cloning

✓ Predefined Interview Selection UI

✓ Existing Session Engine Integration

✓ Existing Assessment Integration

✓ Existing Workspace Integration

✓ Existing Insights Integration
Final Architecture
PROFILE
│
│
Profile Complete?
/ \
 NO YES
│ │
▼ ▼
Profile Setup Interview Catalog
│
▼
Predefined Interview
│
┌──────────┼──────────┐
▼ ▼ ▼
EASY MEDIUM HARD
│ │ │
└──────────┼──────────┘
▼
Clone Template
│
▼
Interview Session
│
┌──────────┼──────────┐
▼ ▼ ▼
TEXT VOICE AUTOSAVE
│ │ │
└──────────┼──────────┘
▼
SUBMIT
│
▼
Trigger.dev Job
│
▼
Bulk Question Assessment
│
▼
Overall Assessment
│
▼
Blob Artifact
│
▼
Prisma
│
┌──────────┴──────────┐
▼ ▼
Interview Insights Interview Workspace
Important implementation constraint

The predefined interview system is an input/source layer, not a replacement for the Interview module.

The existing architecture should remain responsible for:

Session lifecycle
Answer handling
Voice
Autosave
Pause/Resume
Submission
Assessment
Persistence
Insights
Workspace

The new functionality should only answer:

"Which predefined interview does the user want to attempt, and how do we initialize the existing interview session with it?"

This keeps the change isolated and minimizes the risk of breaking the functioning Interview module.
