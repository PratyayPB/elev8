"use client";

import { GeneratedQuestion, InterviewArtifact } from "../../types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Timer } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface PacingComparisonChartProps {
  questions: GeneratedQuestion[];
  answers: InterviewArtifact["answers"];
}

export function PacingComparisonChart({
  questions,
  answers,
}: PacingComparisonChartProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";
  const estimatedBarColor = isDark ? "#FFFFFF" : "#171816";

  const chartData = questions.map((q, idx) => {
    const answer = answers.find((a) => a.questionId === q.id);
    const actualSeconds = answer?.actualTimeSeconds ?? 0;
    const estSeconds = q.estimatedTimeSeconds ?? 120;
    const diff = actualSeconds - estSeconds;

    let pacingLabel = "Optimal";
    if (actualSeconds === 0) {
      pacingLabel = "Skipped";
    } else if (actualSeconds < estSeconds * 0.7) {
      pacingLabel = "Fast / Brief";
    } else if (actualSeconds > estSeconds * 1.35) {
      pacingLabel = "Deliberate";
    }

    return {
      name: `Q${idx + 1}`,
      questionText: q.question,
      category: q.category,
      estimated: estSeconds,
      actual: actualSeconds,
      diff,
      pacingLabel,
    };
  });

  return (
    <div className="bg-dashboard-card p-6 sm:p-8 rounded-[var(--card-radius)] border border-dashboard-cardBorder shadow-sm space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h3 className="text-xl font-display font-bold text-text-primary flex items-center gap-2">
            <Timer className="w-5 h-5 text-text-primary" />
            Response Time & Pacing Breakdown
          </h3>
          <p className="text-xs font-sans text-text-secondary mt-1">
            Question-by-question comparison of target estimated duration vs actual response time
          </p>
        </div>
      </div>

      <div className="w-full h-[280px] sm:h-[320px] pt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 10, right: 10, left: -15, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="currentColor" className="text-border-subtle" />
            <XAxis
              dataKey="name"
              tick={{ fill: "currentColor", fontSize: 12, fontWeight: 600 }}
              className="text-text-primary font-display"
            />
            <YAxis
              unit="s"
              tick={{ fill: "currentColor", fontSize: 11 }}
              className="text-text-muted font-sans"
            />
            <Tooltip
              wrapperStyle={{ zIndex: 100, outline: "none" }}
              cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-2xl font-sans text-xs space-y-1.5 max-w-xs z-50 text-zinc-900 dark:text-zinc-100">
                      <div className="flex items-center justify-between gap-4">
                        <p className="font-display font-bold text-zinc-900 dark:text-zinc-100">{data.name}: {data.category}</p>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-display font-bold bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200">
                          {data.pacingLabel}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed">{data.questionText}</p>
                      <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 flex justify-between gap-4">
                        <span className="text-zinc-500 dark:text-zinc-400">Target: <strong className="text-zinc-900 dark:text-zinc-100">{data.estimated}s</strong></span>
                        <span className="text-zinc-500 dark:text-zinc-400">Actual: <strong className="text-amber-500 dark:text-yellow-400">{data.actual}s</strong></span>
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Legend
              wrapperStyle={{ paddingTop: 12 }}
              formatter={(value) => (
                <span className="text-xs font-sans text-text-secondary font-medium">
                  {value === "estimated" ? "Estimated Target (s)" : "Actual Response (s)"}
                </span>
              )}
            />
            <Bar dataKey="estimated" fill={estimatedBarColor} radius={[6, 6, 0, 0]} maxBarSize={48} />
            <Bar dataKey="actual" fill="#FFDB00" radius={[6, 6, 0, 0]} maxBarSize={48} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
