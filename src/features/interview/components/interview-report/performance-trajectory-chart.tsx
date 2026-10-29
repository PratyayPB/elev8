"use client";

import { GeneratedQuestion, QuestionFeedback } from "../../types";
import {
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import { TrendingUp } from "lucide-react";

interface PerformanceTrajectoryChartProps {
  questions: GeneratedQuestion[];
  questionAnalysis: Record<string, QuestionFeedback>;
  overallScore: number;
}

export function PerformanceTrajectoryChart({
  questions,
  questionAnalysis,
  overallScore,
}: PerformanceTrajectoryChartProps) {
  const chartData = questions.map((q, idx) => {
    const feedback = questionAnalysis[q.id];
    return {
      name: `Q${idx + 1}`,
      questionText: q.question,
      category: q.category,
      score: feedback?.score ?? 0,
      technical: feedback?.technicalAccuracy ?? 0,
      depth: feedback?.depthScore ?? feedback?.score ?? 0,
    };
  });

  return (
    <div className="bg-dashboard-card p-6 sm:p-8 rounded-[var(--card-radius)] border border-dashboard-cardBorder shadow-sm space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h3 className="text-xl font-display font-bold text-text-primary flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-text-primary" />
            Performance Trajectory & Question Trends
          </h3>
          <p className="text-xs font-sans text-text-secondary mt-1">
            Question-by-question trajectory across overall score, technical precision, and practical depth
          </p>
        </div>
      </div>

      <div className="w-full h-[280px] sm:h-[320px] pt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 10, left: -15, bottom: 0 }}
          >
            <defs>
              <linearGradient id="scoreGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FFDB00" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#FFDB00" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="currentColor" className="text-border-subtle" />
            <XAxis
              dataKey="name"
              tick={{ fill: "currentColor", fontSize: 12, fontWeight: 600 }}
              className="text-text-primary font-display"
            />
            <YAxis
              domain={[0, 100]}
              tick={{ fill: "currentColor", fontSize: 11 }}
              className="text-text-muted font-sans"
            />
            <Tooltip
              wrapperStyle={{ zIndex: 100, outline: "none" }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-2xl font-sans text-xs space-y-2 max-w-xs z-50 text-zinc-900 dark:text-zinc-100">
                      <p className="font-display font-bold text-zinc-900 dark:text-zinc-100">{data.name}: {data.category}</p>
                      <p className="text-[11px] text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed">{data.questionText}</p>
                      <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 grid grid-cols-3 gap-2 text-center">
                        <div className="bg-zinc-100 dark:bg-zinc-800 p-2 rounded-lg">
                          <span className="text-[9px] uppercase text-zinc-500 dark:text-zinc-400 block font-display">Score</span>
                          <strong className="text-amber-500 dark:text-yellow-400 text-xs font-bold">{data.score}</strong>
                        </div>
                        <div className="bg-zinc-100 dark:bg-zinc-800 p-2 rounded-lg">
                          <span className="text-[9px] uppercase text-zinc-500 dark:text-zinc-400 block font-display">Tech</span>
                          <strong className="text-emerald-600 dark:text-emerald-400 text-xs font-bold">{data.technical}</strong>
                        </div>
                        <div className="bg-zinc-100 dark:bg-zinc-800 p-2 rounded-lg">
                          <span className="text-[9px] uppercase text-zinc-500 dark:text-zinc-400 block font-display">Depth</span>
                          <strong className="text-blue-600 dark:text-blue-400 text-xs font-bold">{data.depth}</strong>
                        </div>
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
                  {value === "score"
                    ? "Overall Score"
                    : value === "technical"
                    ? "Technical Accuracy"
                    : "Practical Depth"}
                </span>
              )}
            />
            <ReferenceLine
              y={overallScore}
              stroke="currentColor"
              strokeDasharray="4 4"
              className="text-text-muted"
              label={{
                value: `Avg: ${overallScore}`,
                fill: "currentColor",
                fontSize: 10,
                position: "insideTopRight",
              }}
            />
            <Area
              type="monotone"
              dataKey="score"
              stroke="#FFDB00"
              strokeWidth={2.5}
              fillOpacity={1}
              fill="url(#scoreGradient)"
            />
            <Line
              type="monotone"
              dataKey="technical"
              stroke="#10b981"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
            <Line
              type="monotone"
              dataKey="depth"
              stroke="#3b82f6"
              strokeWidth={2}
              strokeDasharray="3 3"
              dot={{ r: 3 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
