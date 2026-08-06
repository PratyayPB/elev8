import Link from "next/link";
import { ArrowRight, Map, FileText, UserCheck, Sparkles } from "lucide-react";

export function RecommendedActions() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-purple-600" />
        Recommended Next Actions
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Roadmap */}
        <Link
          href="/roadmaps"
          className="p-5 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:border-blue-500 transition-all flex flex-col justify-between group"
        >
          <div>
            <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-xl w-fit mb-3">
              <Map className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
              Learning Roadmaps
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Bridge your interview skill gaps with structured AI roadmaps.
            </p>
          </div>
          <div className="flex items-center text-xs font-semibold text-blue-600 mt-4">
            Create Roadmap <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        {/* Resume */}
        <Link
          href="/resumes"
          className="p-5 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:border-green-500 transition-all flex flex-col justify-between group"
        >
          <div>
            <div className="p-3 bg-green-50 dark:bg-green-900/30 text-green-600 rounded-xl w-fit mb-3">
              <FileText className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-green-600 transition-colors">
              Resume Analysis
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Ensure your resume aligns with the target roles you are practicing.
            </p>
          </div>
          <div className="flex items-center text-xs font-semibold text-green-600 mt-4">
            Optimize Resume <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        {/* Career Guidance */}
        <Link
          href="/career"
          className="p-5 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:border-purple-500 transition-all flex flex-col justify-between group"
        >
          <div>
            <div className="p-3 bg-purple-50 dark:bg-purple-900/30 text-purple-600 rounded-xl w-fit mb-3">
              <UserCheck className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-purple-600 transition-colors">
              Career Assessment
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Evaluate your market readiness and target compensation.
            </p>
          </div>
          <div className="flex items-center text-xs font-semibold text-purple-600 mt-4">
            Assess Career <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
      </div>
    </div>
  );
}
