import { Award, CheckCircle, Clock, Trophy, Layers } from "lucide-react";
import { MetricCard } from "@/components/dashboard";

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
      <MetricCard
        label="Total Interviews"
        value={stats.total}
        icon={<Layers className="w-5 h-5" />}
      />

      <MetricCard
        label="Completed"
        value={stats.completedCount}
        icon={<CheckCircle className="w-5 h-5 text-emerald-600" />}
      />

      <MetricCard
        label="In Progress"
        value={stats.inProgressCount}
        icon={<Clock className="w-5 h-5 text-amber-500" />}
      />

      <MetricCard
        label="Average Score"
        value={`${stats.averageScore}%`}
        icon={<Award className="w-5 h-5 text-text-primary" />}
        highlighted={true}
      />

      <MetricCard
        label="Highest Score"
        value={`${stats.highestScore}%`}
        icon={<Trophy className="w-5 h-5 text-text-primary" />}
      />
    </div>
  );
}
