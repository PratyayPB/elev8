import Link from "next/link";
import { PlusCircle, PlayCircle, Award } from "lucide-react";
import { Interview } from "@prisma/client";

interface QuickActionsProps {
  latestInProgress?: Interview;
  latestCompleted?: Interview;
}

export function QuickActions({ latestInProgress, latestCompleted }: QuickActionsProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* 1. Generate New Interview */}
      <Link
        href="/interviews/new"
        className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-sm transition-colors flex items-center gap-2"
      >
        <PlusCircle className="w-4 h-4" />
        Generate New Interview
      </Link>

      {/* 2. Continue Active Session if available */}
      {latestInProgress && (
        <Link
          href={`/interviews/${latestInProgress.id}/session`}
          className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm rounded-xl shadow-sm transition-colors flex items-center gap-2"
        >
          <PlayCircle className="w-4 h-4" />
          Continue Interview ({latestInProgress.role})
        </Link>
      )}

      {/* 3. Latest Report if available */}
      {latestCompleted && (
        <Link
          href={`/interviews/${latestCompleted.id}`}
          className="px-5 py-2.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-bold text-sm rounded-xl border border-gray-200 dark:border-gray-700 transition-colors flex items-center gap-2"
        >
          <Award className="w-4 h-4 text-blue-500" />
          View Latest Report
        </Link>
      )}
    </div>
  );
}
