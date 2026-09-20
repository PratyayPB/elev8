### 1. Roadmap Module (`RoadmapStatus`: `NOT_STARTED`, `IN_PROGRESS`, `COMPLETED`)
Background task: [`generateRoadmapTask`](file:///d:/Portfolio-projects/elev8/src/trigger/generate-roadmap.ts)

| `JobStatus` | `RoadmapStatus` | What Happens in the Codebase |
| :--- | :--- | :--- |
| **`QUEUED`** | `IN_PROGRESS` | `generateRoadmapAction` creates a placeholder `Roadmap` or `GlobalRoadmap` record with `status: IN_PROGRESS` and dispatches the task. |
| **`RUNNING`** | `IN_PROGRESS` | Trigger.dev updates `job.progress` from `10%` to `95%` through stages (*Generating*, *Validating*, *Computing Layout*, *Uploading*). |
| **`COMPLETED`** | **`COMPLETED`** | Graph artifact is uploaded to Blob storage. The task executes `prisma.roadmap.update({ data: { status: RoadmapStatus.COMPLETED, blobUrl } })`, and [`JobService.completeJob`](file:///d:/Portfolio-projects/elev8/src/services/jobs/job.service.ts#L42-L58) sets `job.status = COMPLETED`. |
| **`FAILED`** | `IN_PROGRESS` / Failed Job | [`JobService.failJob`](file:///d:/Portfolio-projects/elev8/src/services/jobs/job.service.ts#L60-L69) saves normalized error text in `job.error`. [`RoadmapViewerService`](file:///d:/Portfolio-projects/elev8/src/services/roadmaps/roadmap-viewer.service.ts#L140) checks `job.status === FAILED` and triggers the retry error UI. |
| **`CANCELLED`** | Aborted | If Trigger.dev or the user aborts execution, [`RoadmapViewer.tsx`](file:///d:/Portfolio-projects/elev8/src/features/roadmaps/components/roadmap-viewer/RoadmapViewer.tsx#L114) catches `jobState === CANCELLED` and shows the "Generation Cancelled" card. |

---

### 2. Mock Interview Practice (`InterviewStatus`: `GENERATING`, `READY`, `IN_PROGRESS`, `COMPLETED`, `FAILED`, `ABANDONED`)
Background tasks: [`generateInterviewTask`](file:///d:/Portfolio-projects/elev8/src/trigger/generate-interview.ts) & [`assessInterviewJob`](file:///d:/Portfolio-projects/elev8/src/trigger/assess-interview.ts)

- **Phase A: Interview Question Generation**
  - **`QUEUED` / `RUNNING`** $\rightarrow$ `InterviewSession.status = GENERATING`
  - **`COMPLETED`** $\rightarrow$ `InterviewSession.status = READY` (questions uploaded to Blob storage, user can now start interview)
  - **`FAILED`** $\rightarrow$ `InterviewSession.status = FAILED` (shows retry state on interview cards & routes)
- **Phase B: AI Assessment after submission**
  - **`QUEUED` / `RUNNING`** $\rightarrow$ `InterviewSession.status = IN_PROGRESS` / Processing
  - **`COMPLETED`** $\rightarrow$ `InterviewSession.status = COMPLETED` (scores, radar metrics, and feedback attached)
  - **`FAILED`** $\rightarrow$ `InterviewSession.status = FAILED`

---

### 3. Resume Scoring (`ResumeScoreStatus`: `PROCESSING`, `COMPLETED`, `FAILED`, `ARCHIVED`)
Background task: [`assessResumeTask`](file:///d:/Portfolio-projects/elev8/src/trigger/assess-resume.ts)

| `JobStatus` | `ResumeScoreStatus` | What Happens in the Codebase |
| :--- | :--- | :--- |
| **`QUEUED`** | `PROCESSING` | Initial upload server action creates `ResumeScore` record with `status: PROCESSING`. |
| **`RUNNING`** | `PROCESSING` | PDF is parsed, normalized, and scored by Gemini (10% $\rightarrow$ 90% progress steps). |
| **`COMPLETED`** | **`COMPLETED`** | Overall score & ATS score are saved to the database, report artifact uploaded to Blob storage. |
| **`FAILED`** | **`FAILED`** | Task catches exception, executes `prisma.resumeScore.update({ data: { status: FAILED } })`, and sets `job.status = FAILED`. |
| **`CANCELLED`** | `FAILED` / Archived | Run canceled; UI prevents access to unfinished report. |

---

### 4. AI Resume Build (`ResumeBuildStatus`: `DRAFT`, `READY`, `ARCHIVED`)
Background task: [`buildAiResumeTask`](file:///d:/Portfolio-projects/elev8/src/trigger/build-ai-resume.ts)

- **`QUEUED` / `RUNNING`**: `Job.status = RUNNING`. In the UI, the `AiBuildDialog` polls the status endpoint and advances the step indicator (Validating $\rightarrow$ Context Gathering $\rightarrow$ Crafting $\rightarrow$ Persisting).
- **`COMPLETED`**: `Job.status = COMPLETED`. `ResumeBuild` updates `artifactBlobUrl`, sets `isAiGenerated = true`, and reloads the editor live preview. (The entity's status remains `DRAFT` or `READY` for user editing/export).
- **`FAILED`**: `Job.status = FAILED`. Existing resume artifact is preserved without corruption; error is surfaced directly to the dialog modal.

---

### 5. Career Assessment (`CareerAssessmentStatus`: `PROCESSING`, `COMPLETED`, `FAILED`)
Pipeline: [`CareerAssessmentService`](file:///d:/Portfolio-projects/elev8/src/app/api/career-assessment/route.ts)

- **`QUEUED` / `RUNNING`** $\rightarrow$ `CareerAssessment.status = PROCESSING`
- **`COMPLETED`** $\rightarrow$ `CareerAssessment.status = COMPLETED` (readiness score, strengths, gaps, focus areas calculated)
- **`FAILED`** $\rightarrow$ `CareerAssessment.status = FAILED`

---

### Summary: Unified Progress Projection
Across all modules, the [`ModuleActivityService`](file:///d:/Portfolio-projects/elev8/src/features/progress/services/module-activity.service.ts) aggregates these job events and projects them onto the unified **`ModuleProgressStatus`** for the dashboard:

$$\begin{aligned}
\text{Job: } \mathbf{QUEUED} \text{ or } \mathbf{RUNNING} &\longrightarrow \mathbf{PROCESSING} \text{ or } \mathbf{IN\_PROGRESS} \\
\text{Job: } \mathbf{COMPLETED} &\longrightarrow \mathbf{READY} \text{ or } \mathbf{COMPLETED} \ (100\%) \\
\text{Job: } \mathbf{FAILED} &\longrightarrow \mathbf{FAILED} \\
\text{Job: } \mathbf{CANCELLED} &\longrightarrow \mathbf{ABANDONED}
\end{aligned}$$