"use client";

import { InterviewArtifact } from "../../types";
import { OverviewCard } from "./overview-card";
import { ScoreCard } from "./score-card";
import { CompetencyRadarChart } from "./competency-radar-chart";
import { AnalyticsDashboard } from "./analytics-dashboard";
import { PacingComparisonChart } from "./pacing-comparison-chart";
import { PerformanceTrajectoryChart } from "./performance-trajectory-chart";
import { SkillBreakdown } from "./skill-breakdown";
import { TopicMasteryCard } from "./topic-mastery-card";
import { QuestionReview } from "./question-review";
import { ImprovementPlan } from "./improvement-plan";
import { NextSteps } from "./next-steps";

interface ReportContainerProps {
  artifact: InterviewArtifact;
}

export function ReportContainer({ artifact }: ReportContainerProps) {
  const { metadata, assessment, questions, answers } = artifact;

  if (!assessment) {
    return (
      <div className="p-8 text-center text-text-muted">
        Assessment data is still being processed or unavailable.
      </div>
    );
  }

  const { overallScores, questionAnalysis, analytics } = assessment;

  return (
    <div className="space-y-8 pb-10 text-text-primary">
      {/* 1. Overview */}
      <OverviewCard metadata={metadata} assessment={assessment} />

      {/* 2. Core Score Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        <ScoreCard label="Overall Score" score={overallScores.overallScore} type="overall" />
        <ScoreCard label="Technical" score={overallScores.technicalScore} type="technical" />
        <ScoreCard label="Communication" score={overallScores.communicationScore} type="communication" />
        <ScoreCard label="Problem Solving" score={overallScores.problemSolvingScore} type="problemSolving" />
        <ScoreCard label="Confidence" score={overallScores.confidenceScore} type="confidence" />
        <ScoreCard
          label="Practical Depth"
          score={overallScores.practicalDepthScore ?? overallScores.overallScore}
          type="practicalDepth"
        />
      </div>

      {/* 3. Visual Competency Radar & Session Telemetry */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CompetencyRadarChart overallScores={overallScores} />
        {analytics && <AnalyticsDashboard analytics={analytics} />}
      </div>

      {/* 4. Pacing & Time Comparison */}
      <PacingComparisonChart questions={questions} answers={answers} />

      {/* 5. Performance Trajectory across Questions */}
      <PerformanceTrajectoryChart
        questions={questions}
        questionAnalysis={questionAnalysis}
        overallScore={overallScores.overallScore}
      />

      {/* 6. Strengths & Weaknesses Breakdown */}
      <SkillBreakdown overallScores={overallScores} />

      {/* 7. Topic Mastery Breakdown */}
      <TopicMasteryCard topicMastery={overallScores.topicMastery} />

      {/* 8. Question Review & Analysis */}
      <QuestionReview artifact={artifact} />

      {/* 9. Actionable Improvement Plan */}
      <ImprovementPlan overallScores={overallScores} />

      {/* 10. Next Steps */}
      <NextSteps metadata={metadata} />
    </div>
  );
}
