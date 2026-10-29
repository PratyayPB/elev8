# Phase 3.3 - Interview Session Engine

## Objective

Implement the complete Interview Session Engine for Elev8.

This phase is responsible for conducting an interview using a previously generated Interview Artifact.

The session should support:

- Question navigation
- Text responses
- Voice responses (Web Speech API)
- Autosave
- Pause & Resume
- Progress tracking
- Interview submission

This phase must NOT perform interview assessment.

Assessment is implemented in Phase 3.4.

---

# Background

After Phase 3.2, an Interview Artifact already exists.

This phase allows users to complete that interview.

Unlike traditional interview simulators, Elev8 follows an autosave-first architecture.

Every answer is immediately persisted to Blob Storage.

Users can safely leave and resume interviews later.

---

# AI Implementation Rules

Before implementation

- Read AGENT_RULES.md
- Read PROJECT_OVERVIEW.md
- Read this specification completely.

Implement only

- Interview Session
- Autosave
- Voice transcription
- Pause & Resume
- Navigation

Do NOT implement

- Gemini Assessment
- Trigger.dev Assessment
- Interview Library
- Interview Generation

---

# Interview State Machine

The Interview Session must be driven by a finite state machine.

States

```
NOT_STARTED

↓

IN_PROGRESS

↓

PAUSED

↓

IN_PROGRESS

↓

SUBMITTED

↓

ASSESSING

↓

COMPLETED
```

Failure States

```
FAILED_GENERATION

FAILED_ASSESSMENT
```

Every session must always exist in exactly one state.

---

# Session Lifecycle

```
Interview Ready

↓

Start Interview

↓

Question 1

↓

Question N

↓

Submit Interview

↓

Assessment Job
```

---

# Loading

When opening an interview

```
Load Metadata

↓

Retrieve Blob Artifact

↓

Validate Version

↓

Restore Previous Progress

↓

Resume Session
```

---

# Question Navigation

Support

- Previous
- Next
- Jump to unanswered
- Jump to question

Prevent navigation beyond question limits.

---

# Current Question

Display

- Question Number
- Category
- Difficulty
- Estimated Answer Time

Example

```
Question 3 / 10

Category

React

Difficulty

Medium

Estimated Time

3 Minutes
```

---

# Answer Methods

Support

## Text Input

Standard textarea.

Users may edit responses freely.

---

## Voice Input

Use

```
Web Speech API
```

Workflow

```
Microphone

↓

Speech Recognition

↓

Transcript

↓

Textarea

↓

User Review

↓

Save
```

Users must always be able to edit the transcript before saving.

Speech recognition should never directly overwrite answers.

---

# Voice Controls

Support

```
Start Recording

Stop Recording

Retry Recording

Insert Transcript
```

Display microphone state.

---

# Autosave

Autosave after

- Next Question
- Previous Question
- Manual Save
- Pause
- Browser Refresh
- Browser Close (where possible)

Never wait until interview completion.

---

# Autosave Pipeline

```
Answer Updated

↓

Validate

↓

Update Artifact

↓

Upload Blob

↓

Success
```

Display save status.

Example

```
Saving...

↓

Saved
```

---

# Pause & Resume

Users may pause at any time.

Pausing should

- Save current answer
- Save current question index
- Update session state

Resuming should restore

- Current question
- Previous answers
- Progress
- Timer (if applicable)

---

# Progress Tracking

Display

```
Questions Answered

Questions Remaining

Completion Percentage
```

Example

```
7 / 10

70%
```

---

# Session Metadata

Maintain

```
Current Question

Answered Questions

Completion Percentage

Last Saved

Started At

Updated At
```

---

# Artifact Updates

The Interview Artifact evolves during the interview.

Initial

```json
{
  "questions": [],
  "answers": [],
  "assessment": null
}
```

After Question 1

```json
{
  "questions": [],

  "answers": [],

  "assessment": null
}
```

After Submission

```json
{
  "questions": [],

  "answers": [],

  "assessment": null,

  "status": "SUBMITTED"
}
```

---

# Submission

Users may submit only when

- All required questions answered

or

Confirm submission with unanswered questions.

Display confirmation dialog.

---

# Submission Workflow

```
Save Final Answer

↓

Validate Artifact

↓

Update Status

↓

SUBMITTED

↓

Start Assessment Job
```

---

# Components

Create

```
features/interview/components/

interview-session/

question-view/

question-navigation/

answer-editor/

voice-controls/

progress-bar/

session-toolbar/

save-indicator/

pause-dialog/

submit-dialog/

resume-banner/

index.ts
```

---

# Hooks

Create

```
use-interview-session.ts

use-question-navigation.ts

use-autosave.ts

use-voice-input.ts

use-session-progress.ts
```

---

# Services

Create

```
interview-session.service.ts

autosave.service.ts

speech.service.ts

session-state.service.ts
```

Responsibilities

Interview Session

- Load artifact
- Update answers
- Save session

Autosave

- Upload updated artifact
- Retry failed saves

Speech

- Web Speech API integration

State

- Handle state transitions

---

# Types

Create

```
InterviewSessionState

InterviewAnswer

SessionProgress

AutosaveState

VoiceState
```

---

# Validation

Validate

- Answer updates
- State transitions
- Blob upload success
- Session restoration

Reject invalid transitions.

---

# Accessibility

Support

- Keyboard shortcuts
- Screen readers
- Focus management

---

# Non-Functional Requirements

- Autosave-first
- Offline-friendly where possible
- Modular
- Type-safe
- Production-ready

---

# Acceptance Criteria

Session

- Interview loads successfully.
- Questions display correctly.
- Navigation works.

Voice

- Speech recognition works.
- Transcript editable.
- Voice controls work.

Autosave

- Answers autosave.
- Save indicator updates.
- Blob updates correctly.

Pause

- Session pauses.
- Session resumes.
- Current progress restored.

Submission

- Interview submits successfully.
- Assessment job starts.
- Status updates.

Code Quality

- No TypeScript errors.
- No lint errors.
- Project builds successfully.

---

# Out of Scope

Do NOT implement

- Assessment
- AI scoring
- Report generation
- Interview library
- Export
- Analytics
- Collaboration

---

# Deliverables

```
✓ Interview State Machine

✓ Session Engine

✓ Text Answering

✓ Voice Answering

✓ Autosave

✓ Pause & Resume

✓ Progress Tracking

✓ Blob Synchronization

✓ Submission Workflow
```

---

# Task Checklist

## Session

- [ ] Implement Interview State Machine
- [ ] Load Interview Artifact
- [ ] Restore previous progress

---

## Navigation

- [ ] Previous
- [ ] Next
- [ ] Jump to question
- [ ] Jump to unanswered

---

## Answers

- [ ] Text editor
- [ ] Voice transcription
- [ ] Editable transcript

---

## Autosave

- [ ] Save after answer
- [ ] Save on pause
- [ ] Save on navigation
- [ ] Retry failed uploads

---

## Pause & Resume

- [ ] Pause session
- [ ] Resume session
- [ ] Restore current state

---

## Submission

- [ ] Validate interview
- [ ] Submit artifact
- [ ] Trigger assessment

---

## Testing

- [ ] Resume after refresh
- [ ] Resume after browser close
- [ ] Autosave works
- [ ] Voice transcription works
- [ ] State transitions valid
- [ ] Blob updates correctly
- [ ] Project builds successfully
- [ ] No TypeScript errors
- [ ] No lint errors
