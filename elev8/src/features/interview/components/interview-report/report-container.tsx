"use client";

import { InterviewMetadata, AssessmentReport, InterviewArtifact } from "../../types";
import { OverviewCard } from "./overview-card";
import { ScoreCard } from "./score-card";
import { SkillBreakdown } from "./skill-breakdown";
import { QuestionReview } from "./question-review";
import { ImprovementPlan } from "./improvement-plan";
import { NextSteps } from "./next-steps";
import { AnalyticsDashboard } from "./analytics-dashboard";

interface ReportContainerProps {
  artifact: InterviewArtifact;
}

export function ReportContainer({ artifact }: ReportContainerProps) {
  const { metadata, assessment } = artifact;

  if (!assessment) {
    return (
      <div className="p-8 text-center text-gray-500">
        Assessment data is still being processed or unavailable.
      </div>
    );
  }

  const { overallScores } = assessment;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* 1. Overview */}
        <OverviewCard metadata={metadata} assessment={assessment} />

        {/* Score Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          <ScoreCard label="Overall Score" score={overallScores.overallScore} type="overall" />
          <ScoreCard label="Technical" score={overallScores.technicalScore} type="technical" />
          <ScoreCard label="Communication" score={overallScores.communicationScore} type="communication" />
          <ScoreCard label="Confidence" score={overallScores.confidenceScore} type="confidence" />
          <ScoreCard label="Problem Solving" score={overallScores.problemSolvingScore} type="problemSolving" />
        </div>

        {/* 2. Skill Breakdown */}
        <SkillBreakdown overallScores={overallScores} />

        {/* 3. Question Review */}
        <QuestionReview artifact={artifact} />

        {/* 4. Improvement Plan */}
        <ImprovementPlan overallScores={overallScores} />

        {/* 5. Next Steps */}
        <NextSteps metadata={metadata} />

        {/* 6. Analytics */}
        {assessment.analytics && <AnalyticsDashboard analytics={assessment.analytics} />}
      </div>
    </div>
  );
}
