# Elev8 Roadmap Generation Progress — Polling & Stage-Based UX

## Objective

Fix the current Roadmap Viewer behavior where the page fetches Job/Roadmap state only once and becomes visually frozen while the AI background job is running.

Implement:

1. Short polling every 2–3 seconds while the roadmap job is active.
2. Automatic polling termination when the job reaches a terminal state.
3. Stage-based progress UX instead of presenting the percentage as an exact measurement.
4. Correct handling of completed, failed, cancelled, and unexpected job states.
5. No manual browser refresh requirement.

## 1. Polling Architecture

Keep `RoadmapViewerPage` as a Server Component where possible. Use a client component to trigger `router.refresh()` while the job is active.

```text
RoadmapViewerPage (Server)
        ↓
RoadmapViewer / LoadingOverlay (Client)
        ↓
useEffect()
        ↓
router.refresh() every ~2500ms
        ↓
Server Component re-fetches Job/Roadmap
```

Do not introduce Trigger.dev Realtime, WebSockets, or SSE for this task.

## 2. Polling Rules

Poll only while the job is active:

```text
QUEUED  → poll
RUNNING → poll

COMPLETED → stop
FAILED    → stop
CANCELLED → stop
```

Use approximately 2000–3000ms; `2500ms` is recommended for deterministic testing.

Do not poll indefinitely or use very short intervals.

## 3. Timer Lifecycle

Use a correctly managed `useEffect` with cleanup. Prevent duplicate polling loops.

Clean up the timer when:

- the component unmounts
- the job reaches a terminal state
- loading ends

The application must never create a new polling timer on every render.

## 4. Stage-Based UX

Do not present `Job.progress` as an exact AI-completion percentage unless the backend genuinely measures it precisely.

Prefer meaningful stages:

```text
Analyzing your career goals       ✓
Building skill requirements       ✓
Generating roadmap                ●
Preparing your roadmap            ○
```

Where:

- `✓` = completed
- `●` = active
- `○` = pending

The active stage may use a subtle spinner/animation.

## 5. Recommended Stages

Use these user-facing stages:

1. Analyzing your career goals
2. Building skill requirements
3. Generating roadmap
4. Preparing your roadmap

Do not expose internal implementation details such as LLM calls, Prisma queries, Blob uploads, or Trigger.dev internals.

## 6. Job Step Mapping

If the backend exposes meaningful `Job.step` values, use them as the source for the visible stage.

Example mapping:

```text
analyzing_profile
    → Analyzing your career goals

building_requirements
    → Building skill requirements

generating_roadmap
    → Generating roadmap

preparing_result
    → Preparing your roadmap
```

Use the actual values implemented by the project rather than inventing incompatible backend values.

If meaningful `step` values do not exist, update the background job so they are available.

## 7. Progress Fallback

If only `Job.progress` exists, use broad ranges only as a UX fallback:

```text
0–24   → Analyzing your career goals
25–49  → Building skill requirements
50–79  → Generating roadmap
80–99  → Preparing your roadmap
100    → Completed
```

Treat this as an approximation. Prefer `step` when available.

## 8. Terminal States

### COMPLETED

- Stop polling immediately.
- Ensure the roadmap artifact is available.
- Remove the loading overlay.
- Render the roadmap.

A progress value of 100 alone must not be treated as proof that the artifact exists. Use actual Job status and artifact availability.

### FAILED

Stop polling and display a controlled error such as:

> We couldn't generate your roadmap. Please try again.

Display only safe user-facing errors; never expose stack traces, API keys, or internal infrastructure details.

### CANCELLED

Stop polling and display an appropriate cancelled state. Provide retry if supported.

### Missing/Unexpected Job

Do not leave the user in an infinite spinner. Display a controlled error/state and log detailed diagnostics server-side.

## 9. Job/Artifact Consistency

Continue using the Job as the background-processing status record:

```text
Job
├── status
├── progress
├── step
├── artifactId
└── artifactType
```

For a completed roadmap job, the artifact should resolve to the resulting roadmap/resource according to the existing application contract.

Do not make the browser infer completion solely from a percentage.

## 10. UX Transition

When the roadmap becomes available:

```text
Loading overlay
      ↓
completion detected
      ↓
stop polling
      ↓
render roadmap
```

A short visual transition is acceptable, but do not introduce unnecessary delays.

## 11. Required Test Cases

### Normal generation

```text
QUEUED → RUNNING → COMPLETED
```

Verify polling starts, stages update, roadmap appears automatically, and polling stops.

### Slow generation

Simulate a job taking several minutes. Verify:

- polling continues
- no duplicate timers occur
- request frequency remains reasonable
- UI remains responsive

### Already completed

If the page loads with `COMPLETED`, no polling should start.

### Failure

```text
RUNNING → FAILED
```

Verify polling stops and the error UI appears.

### Cancellation

```text
RUNNING → CANCELLED
```

Verify polling stops and the cancelled state appears.

### User leaves page

Verify polling cleanup occurs when the component unmounts.

### Step changes

Verify the UI correctly transitions through the configured backend steps.

### Manual refresh during generation

Verify the current Job state is reloaded, polling restarts only if the job remains active, and no duplicate background job is created.

## 12. Browser/Network Verification

Use browser developer tools to verify:

- requests occur approximately every 2–3 seconds while active
- requests stop after terminal states
- requests stop after navigation
- duplicate polling loops are not created

Do not rely only on visual inspection.

## 13. Implementation Constraints

Do not:

- introduce Trigger.dev Realtime for this task
- introduce WebSockets
- introduce SSE
- poll every few hundred milliseconds
- poll after terminal states
- convert the entire Roadmap page into a Client Component unnecessarily
- expose internal AI/Trigger.dev implementation details
- treat approximate percentage progress as exact
- create duplicate polling timers

## 14. Final Acceptance Criteria

- [ ] Roadmap Viewer no longer freezes at initial Job progress.
- [ ] Polling starts automatically for active jobs.
- [ ] Polling occurs approximately every 2–3 seconds.
- [ ] `router.refresh()` updates Server Component data.
- [ ] Polling stops on `COMPLETED`.
- [ ] Polling stops on `FAILED`.
- [ ] Polling stops on `CANCELLED`.
- [ ] Polling is cleaned up on unmount.
- [ ] Duplicate polling timers cannot occur.
- [ ] `QUEUED` jobs are handled.
- [ ] Meaningful stage-based UX is displayed.
- [ ] Active, completed, and pending stages are distinguishable.
- [ ] `Job.step` is used when reliable values are available.
- [ ] Percentage fallback works if `step` is unavailable.
- [ ] Completed roadmaps load without manual refresh.
- [ ] Failure and cancellation states are handled.
- [ ] Missing/invalid jobs are handled gracefully.
- [ ] Manual refresh during generation does not break the process.
- [ ] No Trigger.dev Realtime dependency is introduced.
- [ ] Existing Job/Roadmap architecture remains intact.
- [ ] Relevant frontend/backend tests pass.
- [ ] Production build passes.

## Final Architecture

```text
                Trigger.dev
                    │
                    │ updates
                    ↓
              PostgreSQL
             ┌────────────┐
             │    Job     │
             │ status     │
             │ progress   │
             │ step       │
             │ artifactId │
             └─────┬──────┘
                   │
                   │ Server Component query
                   ↓
          RoadmapViewerPage
              (Server)
                   │
                   ↓
          RoadmapViewer
              (Client)
                   │
             useEffect()
                   │
          every ~2500ms
                   │
                   ↓
          router.refresh()
                   │
                   └───────────────→ repeat

              Terminal state
                   ↓
             Stop polling
                   ↓
           Display roadmap
```

The target implementation is a simple, reliable polling-based progress system with terminal-state handling and a meaningful stage-based user experience, without introducing realtime infrastructure prematurely.
