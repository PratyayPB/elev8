import Link from "next/link";
import { ArrowRight, FileText, Map, RefreshCw, UserCheck } from "lucide-react";
import { InterviewMetadata } from "../../types";

interface NextStepsProps {
  metadata: InterviewMetadata;
}

export function NextSteps({ metadata }: NextStepsProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Next Steps in Elev8</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Action 1: Create Roadmap */}
        <Link
          href="/roadmaps"
          className="p-5 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:border-blue-500 dark:hover:border-blue-500 transition-all flex flex-col justify-between group"
        >
          <div>
            <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl w-fit mb-3">
              <Map className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
              Generate Roadmap
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Build a personalized learning plan targeting your weak areas.
            </p>
          </div>
          <div className="flex items-center text-xs font-semibold text-blue-600 dark:text-blue-400 mt-4">
            Start Learning <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        {/* Action 2: Career Guidance */}
        <Link
          href="/career"
          className="p-5 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:border-purple-500 dark:hover:border-purple-500 transition-all flex flex-col justify-between group"
        >
          <div>
            <div className="p-3 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl w-fit mb-3">
              <UserCheck className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-purple-600 transition-colors">
              Career Guidance
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Analyze your readiness for {metadata.role} roles.
            </p>
          </div>
          <div className="flex items-center text-xs font-semibold text-purple-600 dark:text-purple-400 mt-4">
            Explore Advice <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        {/* Action 3: Resume Review */}
        <Link
          href="/resumes"
          className="p-5 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:border-green-500 dark:hover:border-green-500 transition-all flex flex-col justify-between group"
        >
          <div>
            <div className="p-3 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-xl w-fit mb-3">
              <FileText className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-green-600 transition-colors">
              Resume Analysis
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Optimize your resume for {metadata.role} positions.
            </p>
          </div>
          <div className="flex items-center text-xs font-semibold text-green-600 dark:text-green-400 mt-4">
            Review Resume <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        {/* Action 4: Retake Interview */}
        <Link
          href="/interviews/new"
          className="p-5 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:border-amber-500 dark:hover:border-amber-500 transition-all flex flex-col justify-between group"
        >
          <div>
            <div className="p-3 bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-xl w-fit mb-3">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-amber-600 transition-colors">
              Retake Interview
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Start a new session to test your knowledge again.
            </p>
          </div>
          <div className="flex items-center text-xs font-semibold text-amber-600 dark:text-amber-400 mt-4">
            New Interview <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
      </div>
    </div>
  );
}
