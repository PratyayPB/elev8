import { Award, CheckCircle, Clock, Trophy, Layers } from "lucide-react";

interface PerformanceOverviewProps {
  stats: {
    total: number;
    completedCount: number;
    inProgressCount: number;
    averageScore: number;
    highestScore: number;
  };
}

export function PerformanceOverview({ stats }: PerformanceOverviewProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {/* Total */}
      <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col justify-between">
        <span className="text-xs text-gray-500 font-medium">Total Interviews</span>
        <div className="flex items-center justify-between mt-2">
          <span className="text-2xl font-extrabold text-gray-900 dark:text-white">{stats.total}</span>
          <Layers className="w-5 h-5 text-gray-400" />
        </div>
      </div>

      {/* Completed */}
      <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col justify-between">
        <span className="text-xs text-gray-500 font-medium">Completed</span>
        <div className="flex items-center justify-between mt-2">
          <span className="text-2xl font-extrabold text-green-600 dark:text-green-400">{stats.completedCount}</span>
          <CheckCircle className="w-5 h-5 text-green-500" />
        </div>
      </div>

      {/* In Progress */}
      <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col justify-between">
        <span className="text-xs text-gray-500 font-medium">In Progress</span>
        <div className="flex items-center justify-between mt-2">
          <span className="text-2xl font-extrabold text-amber-600 dark:text-amber-400">{stats.inProgressCount}</span>
          <Clock className="w-5 h-5 text-amber-500" />
        </div>
      </div>

      {/* Avg Score */}
      <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col justify-between">
        <span className="text-xs text-gray-500 font-medium">Average Score</span>
        <div className="flex items-center justify-between mt-2">
          <span className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">{stats.averageScore}%</span>
          <Award className="w-5 h-5 text-blue-500" />
        </div>
      </div>

      {/* Highest Score */}
      <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col justify-between">
        <span className="text-xs text-gray-500 font-medium">Highest Score</span>
        <div className="flex items-center justify-between mt-2">
          <span className="text-2xl font-extrabold text-purple-600 dark:text-purple-400">{stats.highestScore}%</span>
          <Trophy className="w-5 h-5 text-purple-500" />
        </div>
      </div>
    </div>
  );
}
