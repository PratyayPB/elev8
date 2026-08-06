import { InterviewMetadata, AssessmentReport } from "../../types";
import { Calendar, CheckCircle2, Clock, HelpCircle, User, Zap } from "lucide-react";

interface OverviewCardProps {
  metadata: InterviewMetadata;
  assessment: AssessmentReport;
}

export function OverviewCard({ metadata, assessment }: OverviewCardProps) {
  const { overallScores } = assessment;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gray-100 dark:border-gray-700 pb-6 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 font-semibold text-xs rounded-full">
              {metadata.interviewType}
            </span>
            <span className="px-3 py-1 bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 font-semibold text-xs rounded-full">
              {metadata.difficulty}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
            {metadata.role} Interview Assessment
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            Completed on {new Date(assessment.assessedAt).toLocaleDateString()}
          </p>
        </div>

        <div className="flex items-center gap-4 bg-gray-50 dark:bg-gray-900/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-800">
          <div className="text-center px-2">
            <span className="text-xs text-gray-400 uppercase font-semibold">Questions</span>
            <p className="text-lg font-bold text-gray-900 dark:text-white flex items-center justify-center gap-1">
              <HelpCircle className="w-4 h-4 text-blue-500" />
              {metadata.questionCount}
            </p>
          </div>
          <div className="w-px h-8 bg-gray-200 dark:bg-gray-700" />
          <div className="text-center px-2">
            <span className="text-xs text-gray-400 uppercase font-semibold">Est. Time</span>
            <p className="text-lg font-bold text-gray-900 dark:text-white flex items-center justify-center gap-1">
              <Clock className="w-4 h-4 text-amber-500" />
              {metadata.estimatedDuration}
            </p>
          </div>
        </div>
      </div>

      {/* Summary Paragraph */}
      <div className="mb-6">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Executive Summary</h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {overallScores.summary}
        </p>
      </div>
    </div>
  );
}
