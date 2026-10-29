# Module Activity Logging Hooks

## Problem

`ModuleActivity` is an append-only event ledger that drives the Progress current-state projection (`Progress` table) and the `/dashboard/progress` timeline. The Prisma enum `ModuleActivityEventType` defines 51 events across five modules, but only **10 events** currently have `ModuleActivityService.recordActivity` call sites.

The reported bug (roadmap generation not writing `module_activities` rows) is one instance of this gap. The same missing-hook pattern exists in Career Assessment, Interview, Resume Build, and Resume Score.

## Current Call Sites (implemented)

| Event | Location |
| --- | --- |
| `ASSESSMENT_COMPLETED` | `src/features/career-assessment/services/career-assessment.service.ts` after persist |
| `ROADMAP` / `MILESTONE_COMPLETED` | `src/features/roadmaps/actions/roadmap-activity.actions.ts` |
| `INTERVIEW_STARTED` | `src/features/interview/actions/interview-actions.ts` on session create (cache hit + generate path) |
| `INTERVIEW_QUESTION_ANSWERED` | `src/features/interview/actions/session-actions.ts` `saveSessionProgress` |
| `INTERVIEW_ALL_QUESTIONS_ANSWERED` | same, when answered count >= total |
| `INTERVIEW_SUBMITTED` | `src/features/interview/actions/session-actions.ts` `submitInterview` |
| `INTERVIEW_COMPLETED` | `src/features/interview/services/assessment-artifact.service.ts` after evaluation persist |
| `RESUME_BUILD_STARTED` | `src/features/resume-builder/services/resume-builder.service.ts` `createResume` |
| `RESUME_BUILD_READY` | same, `updateResume` when status becomes `READY` |
| `RESUME_SCORE_COMPLETED` | `src/trigger/assess-resume.ts` on success |

`ModuleActivityService.computeProgressState` already maps nearly every enum value to a `Progress` status. Projection logic is ahead of the producers.

## Audit: events without producers

### Career Assessment

| Event | Product hook exists? | Plan |
| --- | --- | --- |
| `ASSESSMENT_STARTED` | Yes — `createAssessmentAction` | Log at action start, before LLM |
| `ASSESSMENT_SUBMITTED` | Yes — same action (sync one-shot submit) | Log immediately after auth/profile checks, before generation |
| `ASSESSMENT_GENERATION_STARTED` | Yes — `CareerAssessmentService.createAssessment` before LLM | Log before `CareerAssessmentLLMService.generateAssessment` |
| `ASSESSMENT_GENERATION_FAILED` | Yes — catch in action/service | Log in catch with error metadata |
| `ASSESSMENT_VIEWED` | Yes — latest-assessment read on `/dashboard/career-assessment` | Log once per assessment entity from `getLatestAssessmentAction` when a record exists |
| `ASSESSMENT_INPUT_UPDATED` | No — assessment has no draft input form; inputs come from Profile | **Skip.** Do not invent an assessment wizard. |
| `ASSESSMENT_READY` | No — no draft “ready to submit” state | **Skip.** Profile completeness is a Profile concern, not an assessment event. |
| `ASSESSMENT_GENERATION_STAGE_CHANGED` | No — single synchronous LLM call, no stages | **Skip.** |

### Roadmap

| Event | Product hook exists? | Plan |
| --- | --- | --- |
| `ROADMAP_GENERATION_STARTED` | Yes — job created in `generateRoadmapAction` | Log after job create for Global and Personalized paths. Also log on Global cache-hit reuse so Progress still updates. |
| `ROADMAP_GENERATION_STAGE_CHANGED` | Yes — Trigger.dev / local fallback job steps | Log at each `JobService.updateProgress` stage in `src/trigger/generate-roadmap.ts` (and matching local fallback). Metadata: `{ stage, stageNumber, totalStages }` (4 stages: Generating, Layout, Upload, Save). |
| `ROADMAP_GENERATED` | Yes — Step 7 success + local fallback complete | Log in Trigger.dev success blocks (Global + Personalized, `userId` required) and both local fallbacks. |
| `ROADMAP_GENERATION_FAILED` | Yes — `JobService.failJob` paths | Log in Trigger.dev catch and both local fallbacks. |
| `ROADMAP_STARTED` | Yes — first user engagement with a generated roadmap | Log on first successful `completeRoadmapPhaseAction` **or** first viewer load of a `COMPLETED` roadmap if no prior `ROADMAP_STARTED` for that entity. Prefer viewer/page load of a completed personal/global roadmap. |
| `MILESTONE_STARTED` | Weak — no dedicated “start phase” action | **Skip** unless a start-phase action is added. Do not log on hover/open of a node. |
| `MILESTONE_COMPLETED` | Already implemented | Keep. After last milestone, also emit `ROADMAP_COMPLETED`. |
| `ROADMAP_COMPLETED` | Yes — last milestone | In `completeRoadmapPhaseAction`, if `completedMilestones >= totalMilestones`, record `ROADMAP_COMPLETED`. |
| `ROADMAP_VIEWED` | Yes — roadmap viewer page | Log once per `roadmapId` from the viewer server load. |

### Interview

| Event | Product hook exists? | Plan |
| --- | --- | --- |
| `INTERVIEW_STARTED` | Already implemented | Keep. |
| `INTERVIEW_QUESTION_ANSWERED` | Already implemented | Keep, but fix uniqueness so each question can log (see Idempotency). |
| `INTERVIEW_ALL_QUESTIONS_ANSWERED` | Already implemented | Keep. |
| `INTERVIEW_SUBMITTED` | Already implemented | Keep. |
| `INTERVIEW_EVALUATION_STARTED` | Yes — `submitInterview` after assessment job create / `assess-interview` start | Log after job is created (and again is prevented by uniqueness). |
| `INTERVIEW_COMPLETED` | Already implemented | Keep. |
| `INTERVIEW_FAILED` | Yes — generate + assess failure paths | Log in `generate-interview.ts` catch, `assess-interview.ts` catch, and Trigger dispatch failures in `interview-actions.ts` / `session-actions.ts`. |
| `INTERVIEW_VIEWED` | Yes — session or report page load | Log once per session from `fetchSessionArtifact` (session) or report fetch. |
| `INTERVIEW_ABANDONED` | Schema has `InterviewStatus.ABANDONED`, **no UI or action sets it** | **Skip.** Do not invent an abandon flow. Add the hook later when a status write exists. |

### Resume Build

| Event | Product hook exists? | Plan |
| --- | --- | --- |
| `RESUME_BUILD_STARTED` | Already implemented | Keep. |
| `RESUME_BUILD_READY` | Already implemented | Keep. |
| `RESUME_UPDATED` | Yes — `updateResume` / `updateResumeArtifact` | Log on artifact autosave (`updateResumeArtifact`). Treat as repeating; uniqueness must include version. |
| `RESUME_SECTION_UPDATED` | Yes — autosave payload has section identity | Log from `updateResumeArtifact` when a section key is present in metadata. If the API only receives the full artifact, log `RESUME_UPDATED` only (do not fake section names). Prefer `RESUME_UPDATED` as the canonical edit event for MVP. |
| `RESUME_TEMPLATE_CHANGED` | Yes — `updateResume` when `template` changes | Log when `input.template` is set and differs from previous. |
| `RESUME_BUILD_COMPLETED` | `ResumeBuildStatus` is `DRAFT \| READY \| ARCHIVED` — no `COMPLETED` | Map PDF export as the completion-adjacent event (`RESUME_PDF_GENERATED`). Do **not** duplicate `RESUME_BUILD_READY`. Skip a separate `RESUME_BUILD_COMPLETED` until a real complete status exists. |
| `AI_RESUME_BUILD_REQUESTED` | Yes — `AiResumeBuildService.triggerAiBuild` after job create | Log after job create. |
| `AI_RESUME_BUILD_STARTED` | Yes — `src/trigger/build-ai-resume.ts` run start | Log at task start. |
| `AI_RESUME_BUILD_COMPLETED` | Yes — task success after persist | Log after Prisma update / `completeJob`. |
| `AI_RESUME_BUILD_FAILED` | Yes — task catch + trigger dispatch fail | Log in both places. |
| `RESUME_PDF_GENERATED` | Yes — `src/pages/api/builder/resumes/[resumeId]/pdf.ts` after successful render | Log after PDF bytes are produced (before response). |
| `RESUME_VIEWED` | Yes — editor/getResume | Log once per resume from `getResume` used by the editor page. |

### Resume Score

| Event | Product hook exists? | Plan |
| --- | --- | --- |
| `RESUME_SCORE_STARTED` | Yes — `createResumeAssessmentJob` after job create | Log after `prisma.job.create`. Also on Trigger dispatch failure, still STARTED then FAILED. |
| `RESUME_SCORE_COMPLETED` | Already implemented | Keep. |
| `RESUME_SCORE_FAILED` | Yes — `assess-resume.ts` catch and dispatch fail in `resume-actions.ts` | Log in both. |
| `RESUME_SCORE_VIEWED` | Yes — improvement hub / score detail load | Log once per `resumeScoreId` from the score detail server fetch. |

## Shared implementation rules

1. All writes go through `ModuleActivityService.recordActivity` in `src/features/progress/services/module-activity.service.ts`. No direct `prisma.moduleActivity.create`.
2. Wrap every hook in try/catch so activity failures never fail the domain operation.
3. Global roadmaps: only log when `userId` is present (Trigger payload). Cache-hit reuse in `generateRoadmapAction` always has the requesting user — log for that user with `entityId = globalRoadmap.id`.
4. `entityId` is the domain object (`assessmentId`, `roadmapId`, `interviewId`, `resumeBuildId`, `resumeScoreId`). For milestones keep `entityId = phaseId` and put `roadmapId` in metadata.
5. Do not log hover, modal open, polling ticks, or mouse movement (`40-elev8-progress-tracker-mvp-implementation.md` §4).

## Idempotency fix (required for repeating events)

Current uniqueness is `(userId, module, eventType, entityId)`. That is correct for one-shot terminal events (`*_COMPLETED`, `*_GENERATED`, `*_FAILED`, `*_VIEWED`, `INTERVIEW_STARTED`) but **incorrect** for:

- `INTERVIEW_QUESTION_ANSWERED` (today only the first answer is stored)
- `ROADMAP_GENERATION_STAGE_CHANGED`
- `RESUME_UPDATED`

Change uniqueness to apply only to **one-shot** events, **or** encode a discriminator in `entityId` / a dedicated idempotency field:

| Event | Uniqueness key |
| --- | --- |
| One-shot | `{entityId}:{eventType}` |
| Question answered | `{interviewId}:question:{questionNumber}:answered` |
| Generation stage | `{roadmapId}:stage:{stageNumber}` |
| Resume updated | `{resumeId}:version:{version}` |

Do not skip uniqueness for Trigger.dev retries of terminal events.

## File-level work

### Roadmap (original bug + remaining events)

- `src/features/roadmaps/actions/roadmap-actions.ts`
  - Import `ModuleActivityService`, `ModuleType`, `ModuleActivityEventType`, `ModuleCompletionStatus`.
  - After job create (Global + Personalized): `ROADMAP_GENERATION_STARTED`.
  - On Global cache hit (completed): `ROADMAP_GENERATED` for the requesting user (generation skipped, ledger still needs a generated event).
  - Local fallback success: `ROADMAP_GENERATED`.
  - Local fallback `failJob`: `ROADMAP_GENERATION_FAILED`.
- `src/trigger/generate-roadmap.ts`
  - Import `ModuleActivityService`.
  - On each job progress step: `ROADMAP_GENERATION_STAGE_CHANGED` if `userId`.
  - Step 7 Global + Personalized success: `ROADMAP_GENERATED` if `userId`.
  - Catch: `ROADMAP_GENERATION_FAILED` if `userId`.
- `src/features/roadmaps/actions/roadmap-activity.actions.ts`
  - After last milestone: `ROADMAP_COMPLETED`.
- Roadmap viewer server path: `ROADMAP_VIEWED` / first-view `ROADMAP_STARTED`.

### Career Assessment

- `src/features/career-assessment/services/actions.ts`: `ASSESSMENT_STARTED`, `ASSESSMENT_SUBMITTED`.
- `src/features/career-assessment/services/career-assessment.service.ts`: `ASSESSMENT_GENERATION_STARTED` before LLM; keep `ASSESSMENT_COMPLETED`; catch `ASSESSMENT_GENERATION_FAILED`.
- `getLatestAssessmentAction` (or page): `ASSESSMENT_VIEWED` once per assessment.

### Interview

- `src/features/interview/actions/session-actions.ts`: `INTERVIEW_EVALUATION_STARTED` after assessment job create; `INTERVIEW_FAILED` if trigger dispatch fails; uniqueness for question answers.
- `src/trigger/assess-interview.ts`: `INTERVIEW_FAILED` in catch (needs `userId` — load session or pass it in payload).
- `src/trigger/generate-interview.ts`: `INTERVIEW_FAILED` in catch.
- `src/features/interview/actions/interview-actions.ts`: `INTERVIEW_FAILED` when generation dispatch fails.
- Session/report fetch: `INTERVIEW_VIEWED`.

### Resume Build

- `ResumeBuilderService.updateResume`: `RESUME_TEMPLATE_CHANGED`.
- `ResumeBuilderService.updateResumeArtifact`: `RESUME_UPDATED` (versioned uniqueness).
- `AiResumeBuildService.triggerAiBuild`: `AI_RESUME_BUILD_REQUESTED`; dispatch fail → `AI_RESUME_BUILD_FAILED`.
- `src/trigger/build-ai-resume.ts`: `AI_RESUME_BUILD_STARTED`, `AI_RESUME_BUILD_COMPLETED`, `AI_RESUME_BUILD_FAILED`.
- PDF API: `RESUME_PDF_GENERATED`.
- Editor `getResume`: `RESUME_VIEWED`.

### Resume Score

- `src/features/resume/actions/resume-actions.ts`: `RESUME_SCORE_STARTED`; dispatch fail → `RESUME_SCORE_FAILED`.
- `src/trigger/assess-resume.ts`: `RESUME_SCORE_FAILED` in catch (keep `RESUME_SCORE_COMPLETED`).
- Score detail fetch: `RESUME_SCORE_VIEWED`.

### Progress UI

- `src/features/progress/components/activity-ledger-timeline.tsx`: add labels for newly produced events (generation started/failed, AI resume, PDF, viewed, etc.). Unlabeled events currently fall through a generic branch.

## Implementation order

1. **Idempotency** in `ModuleActivityService` so repeating events can be stored.
2. **Roadmap generation** (`ROADMAP_GENERATION_STARTED` / `STAGE_CHANGED` / `GENERATED` / `FAILED`) — original bug.
3. **Roadmap completion + viewed**.
4. **Resume Score STARTED/FAILED/VIEWED**.
5. **AI Resume Build + PDF + template/update**.
6. **Interview evaluation started, failed, viewed**.
7. **Career Assessment started/submitted/generation/failed/viewed**.
8. Timeline copy + tests.

Skip events with no product surface in this pass (`ASSESSMENT_INPUT_UPDATED`, `ASSESSMENT_READY`, `ASSESSMENT_GENERATION_STAGE_CHANGED`, `MILESTONE_STARTED`, `INTERVIEW_ABANDONED`, `RESUME_BUILD_COMPLETED`, `RESUME_SECTION_UPDATED` unless the autosave API already identifies a section).

## Verification

### Roadmap (original)

1. Generate a personalized roadmap.
2. Confirm `module_activities` has `ROADMAP_GENERATION_STARTED`, stage-changed rows, then `ROADMAP_GENERATED`.
3. Force a generation failure (invalid key / abort) and confirm `ROADMAP_GENERATION_FAILED`.
4. Reuse a cached global roadmap and confirm the requesting user still gets `ROADMAP_GENERATED`.
5. Complete all milestones and confirm `ROADMAP_COMPLETED`.
6. Confirm `/dashboard/progress` status and timeline update.

### Other modules

1. Career Assessment: generate success → STARTED + SUBMITTED + GENERATION_STARTED + COMPLETED; fail LLM → GENERATION_FAILED.
2. Interview: submit → EVALUATION_STARTED; fail assess task → INTERVIEW_FAILED; answer Q2 after Q1 → two `INTERVIEW_QUESTION_ANSWERED` rows.
3. Resume Score: upload → STARTED then COMPLETED; fail parse → FAILED.
4. AI Resume Build: request → REQUESTED + STARTED + COMPLETED; fail → FAILED.
5. PDF download → `RESUME_PDF_GENERATED`.
6. Viewed events fire once per entity, not on every poll.

## Out of scope

- New Prisma enum values.
- Recommendation rule changes (unless a skipped event was the only signal — none of the skipped events are required for current `RecommendationService` rules).
- Inventing abandon/start-milestone/assessment-draft UX.
