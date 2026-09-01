# Feature Specification: Interview Assessment Visualizations & Quantitative Metrics

## 1. Overview & Objective

Upgrade the **Interview Assessment Engine** and **Assessment Report UI** in Elev8 to provide:
1. **Rigorous Quantitative Evaluation**: Multi-dimensional scoring for each individual question and across overall competencies (Technical Accuracy, Communication, Problem Solving, Confidence, and Practical Depth).
2. **Timing & Pacing Analysis**: Contextual comparison between `estimatedTimeSeconds` and `actualTimeSeconds` without punitive bias, calculating pacing efficiency and duration analytics.
3. **Engaging Visual Analytics (Recharts)**: Interactive, visually compelling charts that capture user attention, including:
   - **Competency Radar Chart**: 5-axis visualization of candidate strengths and skill balance.
   - **Pacing & Time Comparison Chart**: Question-by-question estimated vs. actual answer duration.
   - **Performance Trajectory & Category Score Breakdown**: Visual progression of scores across questions and topics.
   - **Topic Mastery Progress & Heatmap**: Quantitative coverage of expected vs. missed technical topics.
4. **Qualitative Synthesis & Improvement Plan**: Executive summary of interview performance, key strengths, critical gap analysis, and a structured, prioritized next-steps roadmap.

---

## 2. Quantitative Scoring Model & Dimensions

### 2.1 Overall Competency Dimensions (0–100)
The overall assessment must evaluate the candidate across 5 core quantitative dimensions:

| Dimension | Description | Target Evaluation Focus |
| :--- | :--- | :--- |
| **Technical Accuracy** | Correctness of concepts, code structures, and domain principles. | Did the candidate accurately explain fundamental and advanced mechanisms? |
| **Communication Clarity** | Structure, conciseness, articulation, and vocabulary. | Was the answer well-structured, coherent, and free of rambling? |
| **Problem Solving** | Analytical thought process, breakdown of complex requirements. | Did the candidate address trade-offs, edge cases, and architectural constraints? |
| **Confidence & Delivery** | Decisiveness, flow, and completeness of responses. | Did the response demonstrate mastery and assertive technical delivery? |
| **Practical Depth** | Real-world experience, practical optimizations, edge-case handling. | Did the candidate move beyond textbook definitions to real-world considerations? |

---

### 2.2 Question-Level Quantitative Metrics
For every question, the assessment LLM and analytics engine calculate:
- **`score`** (0–100): Weighted composite score for the question.
- **`technicalAccuracy`** (0–100): Direct technical fidelity to role requirements.
- **`communication`** (0–100): Quality and structure of articulation.
- **`depthScore`** (0–100): Coverage of nuance, edge cases, and trade-offs.
- **`pacingRatio`**: Ratio of `actualTimeSeconds / estimatedTimeSeconds`.
- **`topicsCoveredCount`** vs. **`missedTopicsCount`**: Coverage percentage of `expectedTopics`.

---

## 3. Updated Assessment LLM Prompts & Schemas

### 3.1 Bulk Question Assessment Prompt (`BULK_QUESTION_ASSESSMENT_PROMPT`)

```typescript
export const BULK_QUESTION_ASSESSMENT_PROMPT = `
You are an expert technical interviewer and hiring manager assessing a candidate's interview responses.
You will be provided with a JSON array of interview questions, categories, expected topics, estimated answer time, candidate's actual answer time, and the candidate's answers.

Your task is to evaluate EVERY question independently with rigorous quantitative scoring and constructive qualitative feedback.

TIMING EVALUATION GUIDELINES:
- Consider "estimatedTimeSeconds" vs "actualTimeSeconds" as a SUPPORTING SIGNAL alongside technical correctness, depth, and clarity.
- Do NOT automatically penalize candidates solely for taking more time if their response is comprehensive, structured, and technically accurate.
- Taking significantly less time with a shallow/incomplete answer indicates rushing or superficial knowledge.
- Taking significantly more time with a high-quality answer reflects deliberate formulation and depth.
- Timing is never the sole scoring criterion.

CRITICAL OUTPUT FORMAT:
You MUST return a JSON object with a single top-level key named "assessments".
Inside "assessments", map each question's \`id\` string to its evaluation object.

Schema for each question assessment:
{
  "assessments": {
    "question_id_1": {
      "score": number (0-100),
      "technicalAccuracy": number (0-100),
      "communication": number (0-100),
      "depthScore": number (0-100),
      "strengths": string[],
      "weaknesses": string[],
      "coveredTopics": string[],
      "missedTopics": string[],
      "feedback": string
    }
  }
}

Evaluation criteria for each question:
- **score**: Balanced overall question score (0-100).
- **technicalAccuracy**: Technical correctness, truth, and alignment with industry best practices (0-100).
- **communication**: Structure, clarity, articulation, and concise phrasing (0-100).
- **depthScore**: Nuance, edge-case awareness, trade-offs, and practical considerations (0-100).
- **strengths**: 1-3 specific strong points in the answer.
- **weaknesses**: 1-3 specific deficiencies or oversights.
- **coveredTopics**: Exact subset of expected topics successfully addressed by the candidate.
- **missedTopics**: Expected topics the candidate failed to mention or explain incorrectly.
- **feedback**: Direct, actionable coaching notes explaining how to elevate the response to senior-level standard.

If an answer was left blank or skipped, assign a score of 0 across all metrics and note that the question was skipped.
`;
```

---

### 3.2 Overall Assessment Prompt (`OVERALL_ASSESSMENT_PROMPT`)

```typescript
export const OVERALL_ASSESSMENT_PROMPT = `
You are an expert technical interviewer and hiring manager finalizing an interview assessment report.
You will be provided with:
1. Interview Metadata (Role, Experience Level, Interview Type, Difficulty)
2. The candidate's questions and answers, including estimated and actual response times
3. The detailed question-by-question assessments generated previously.

Your task is to synthesize this information into a cohesive, highly quantitative and actionable evaluation report.

CRITICAL OUTPUT FORMAT:
Return a single JSON object matching this structure:
{
  "overallScore": number (0-100),
  "technicalScore": number (0-100),
  "communicationScore": number (0-100),
  "confidenceScore": number (0-100),
  "problemSolvingScore": number (0-100),
  "practicalDepthScore": number (0-100),
  "strengths": string[],
  "weaknesses": string[],
  "topicMastery": [
    {
      "topic": string,
      "score": number (0-100),
      "status": "STRONG" | "SATISFACTORY" | "NEEDS_IMPROVEMENT"
    }
  ],
  "recommendedLearning": [
    {
      "title": string,
      "description": string,
      "priority": "HIGH" | "MEDIUM" | "LOW"
    }
  ],
  "nextSteps": string[],
  "summary": string
}

Scoring Calibration:
- Scores 90-100: Exceptional, staff/senior level mastery.
- Scores 75-89: Solid competent performance with minor omissions.
- Scores 60-74: Foundational understanding, needs polish on edge cases or structure.
- Scores < 60: Significant gaps in core principles or omitted responses.

Be objective, encouraging, and highly specific to the provided transcript and answers.
`;
```

---

## 4. Visualizations & Charting Architecture (`Recharts`)

The Interview Report at `/dashboard/interviews/[interviewId]` will incorporate interactive charts styled to match Elev8 design tokens:

### 4.1 Visual Components Matrix

```text
┌───────────────────────────────────────────────────────────────────────────┐
│                           INTERVIEW REPORT HEADER                         │
│   Target Role: Senior Frontend Dev | Overall: 84/100 | Ready for Review   │
└───────────────────────────────────────────────────────────────────────────┘
                                     │
      ┌──────────────────────────────┴──────────────────────────────┐
      ▼                                                             ▼
┌───────────────────────────────┐             ┌─────────────────────────────┐
│    COMPETENCY RADAR CHART     │             │    PACING & TIME DURATION   │
│  • Technical (88)             │             │  • Est. vs Actual Time (s)  │
│  • Communication (82)         │             │  • Bar / Composed Chart     │
│  • Problem Solving (79)       │             │  • Pacing Efficiency Metric │
│  • Confidence (85)            │             │                             │
│  • Practical Depth (80)       │             │                             │
└───────────────────────────────┘             └─────────────────────────────┘
                                     │
      ┌──────────────────────────────┴──────────────────────────────┐
      ▼                                                             ▼
┌───────────────────────────────┐             ┌─────────────────────────────┐
│  QUESTION SCORE TRAJECTORY    │             │    TOPIC MASTERY MATRIX     │
│  • Step-by-step Bar/Line      │             │  • React Core (90%)         │
│  • Technical vs Depth trend   │             │  • System Design (65%)      │
│  • Hover tooltips with delta  │             │  • State Architecture (85%) │
└───────────────────────────────┘             └─────────────────────────────┘
                                     │
                                     ▼
┌───────────────────────────────────────────────────────────────────────────┐
│                     EXECUTIVE QUALITY SUMMARY & FEEDBACK                  │
│  • High-impact Strengths | Critical Improvement Gaps | Next Steps Roadmap │
└───────────────────────────────────────────────────────────────────────────┘
```

### 4.2 Chart Details & Configurations

1. **Competency Radar Chart (`CompetencyRadarChart.tsx`)**:
   - Library: `recharts` (`RadarChart`, `PolarGrid`, `PolarAngleAxis`, `Radar`, `ResponsiveContainer`).
   - Axes: Technical Accuracy, Communication, Problem Solving, Confidence, Practical Depth.
   - Styling: Primary brand color with subtle translucent fill and border stroke (`#171816` light / `#FFDB00` dark).

2. **Pacing Comparison Chart (`PacingComparisonChart.tsx`)**:
   - Library: `recharts` (`BarChart`, `Bar`, `XAxis`, `YAxis`, `Tooltip`, `Legend`, `ResponsiveContainer`).
   - Data Points: For each question ($Q_1 \dots Q_N$), display dual bars for `Estimated Time (s)` and `Actual Time (s)`.
   - Tooltip: Shows difference (+/- seconds) and pacing assessment ("Optimal", "Deliberate", "Fast").

3. **Performance Trajectory Chart (`PerformanceTrajectoryChart.tsx`)**:
   - Library: `recharts` (`AreaChart` / `LineChart` with gradient fill).
   - Data Points: Question Index vs. Score (0–100) with baseline average marker.
   - Helps candidates see if performance improved or degraded during the interview.

4. **Topic Mastery Breakdown (`TopicMasteryBreakdown.tsx`)**:
   - Quantitative progress bars and badges for each distinct topic category.
   - Highlights covered topics (green tag) vs. missed topics (amber/red tag).

---

## 5. Artifact Schema & Data Invariants

### 5.1 Updated `InterviewArtifact` Assessment Type

```typescript
export interface QuestionFeedback {
  score: number;
  technicalAccuracy: number;
  communication: number;
  depthScore: number;
  strengths: string[];
  weaknesses: string[];
  coveredTopics?: string[];
  missedTopics: string[];
  feedback: string;
}

export interface TopicMasteryItem {
  topic: string;
  score: number;
  status: "STRONG" | "SATISFACTORY" | "NEEDS_IMPROVEMENT";
}

export interface RecommendedLearningItem {
  title: string;
  description: string;
  priority: "HIGH" | "MEDIUM" | "LOW";
}

export interface OverallAssessment {
  overallScore: number;
  technicalScore: number;
  communicationScore: number;
  confidenceScore: number;
  problemSolvingScore: number;
  practicalDepthScore: number;
  strengths: string[];
  weaknesses: string[];
  topicMastery?: TopicMasteryItem[];
  recommendedLearning: RecommendedLearningItem[] | string[];
  nextSteps: string[];
  summary: string;
}

export interface Analytics {
  averageAnswerTimeMs: number | null;
  totalInterviewTimeSeconds: number;
  questionsAttempted: number;
  completionPercentage: number;
  totalWords: number;
  averageWordsPerAnswer: number;
  pacingEfficiencyRating: "OPTIMAL" | "FAST" | "DELIBERATE" | "VARIABLE";
}
```

---

## 6. Implementation Tasks Breakdown

### Task 1: Package Dependencies
- Ensure `recharts` (`^2.15.0` or compatible React 19 version) is installed in `package.json`.

### Task 2: Type Definitions & Zod Schemas
- Update `src/features/interview/types.ts` with multi-dimensional scores and topic mastery structures.
- Update `src/features/interview/assessment-schema.ts` with corresponding Zod schemas.

### Task 3: Assessment LLM Services & Prompts
- Update `src/features/interview/services/assessment-prompts.ts` with quantitative criteria and radar dimensions.
- Update `src/features/interview/services/question-assessment.service.ts` to map and validate the new per-question metrics.
- Update `src/features/interview/services/overall-assessment.service.ts` to compute pacing efficiency and topic mastery aggregation.

### Task 4: Interactive Visual Components (Recharts)
- Create `src/features/interview/components/interview-report/competency-radar-chart.tsx`.
- Create `src/features/interview/components/interview-report/pacing-comparison-chart.tsx`.
- Create `src/features/interview/components/interview-report/performance-trajectory-chart.tsx`.
- Create `src/features/interview/components/interview-report/topic-mastery-card.tsx`.

### Task 5: Report Container Overhaul
- Update `src/features/interview/components/interview-report/report-container.tsx` to arrange the visual analytics into a clean, modern dashboard grid.
- Update `overview-card.tsx` and `score-card.tsx` to reflect the 5 quantitative core dimensions.

### Task 6: Testing & Production Build
- Verify TypeScript compilation (`npx tsc --noEmit`).
- Verify production build (`npm run build`).
- Update progress tracking in `context/progress-tracker.md`.

---

## 7. Acceptance Criteria

- [ ] Bulk question assessment produces quantitative scores for `technicalAccuracy`, `communication`, and `depthScore`.
- [ ] Overall assessment generates 5-axis competency scores (`technicalScore`, `communicationScore`, `confidenceScore`, `problemSolvingScore`, `practicalDepthScore`).
- [ ] Interactive Recharts **Radar Chart** displays candidate competency distribution.
- [ ] Interactive Recharts **Pacing Chart** displays estimated vs. actual answer duration per question.
- [ ] Interactive Recharts **Performance Trajectory Chart** illustrates score flow across the session.
- [ ] Topic Mastery breakdown visually contrasts covered vs. missed topics.
- [ ] Summary section delivers clear qualitative insights, strengths, and prioritized next steps.
- [ ] Dark/Light mode theme switching renders all charts and labels seamlessly with Elev8 color tokens.
- [ ] TypeScript compilation (`npx tsc --noEmit`) and Next.js build (`npm run build`) pass cleanly.
