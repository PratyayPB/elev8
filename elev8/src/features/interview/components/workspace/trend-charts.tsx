"use client";

import { InterviewSession } from "@prisma/client";
import { TrendingUp, Award, Clock, ArrowUpRight, ArrowDownRight, Sparkles, CheckCircle } from "lucide-react";
import Link from "next/link";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

interface TrendChartsProps {
  completedInterviews: InterviewSession[];
}

export function TrendCharts({ completedInterviews }: TrendChartsProps) {
  // Filter for completed sessions with a score and sort chronologically (oldest to newest)
  const scoredInterviews = [...completedInterviews]
    .filter((i) => i.overallScore !== null && i.overallScore !== undefined)
    .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());

  if (scoredInterviews.length === 0) {
    return null;
  }

  // If only 1 interview exists, render a dedicated single-session benchmark card
  if (scoredInterviews.length === 1) {
    const single = scoredInterviews[0];
    const score = single.overallScore || 0;
    const dateFormatted = new Date(single.createdAt).toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    const getScoreTier = (s: number) => {
      if (s >= 80) return { label: "Strong Performance", color: "text-emerald-600 bg-emerald-500/10 border-emerald-500/20" };
      if (s >= 60) return { label: "Competent Foundation", color: "text-amber-600 bg-amber-500/10 border-amber-500/20" };
      return { label: "Needs Practice", color: "text-rose-600 bg-rose-500/10 border-rose-500/20" };
    };

    const tier = getScoreTier(score);

    return (
      <div className="bg-dashboard-card p-6 sm:p-8 rounded-[var(--card-radius)] border border-dashboard-cardBorder shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-xl font-display font-bold text-text-primary flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-text-primary" />
              Interview Performance Benchmark
            </h3>
            <p className="text-xs font-sans text-text-secondary mt-1">
              Initial baseline recorded from your completed mock interview
            </p>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-display font-bold bg-surface-muted text-text-secondary border border-border-subtle w-fit">
            1 Interview Completed
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Main Score Radial / Highlight */}
          <div className="p-6 bg-surface-muted/50 rounded-2xl border border-border-subtle flex flex-col items-center justify-center text-center gap-2">
            <span className="text-xs font-display font-semibold text-text-muted uppercase tracking-wider">
              Baseline Score
            </span>
            <div className="flex items-baseline gap-1 my-1">
              <span className="text-5xl font-display font-bold text-text-primary">
                {score}
              </span>
              <span className="text-sm font-display font-bold text-text-muted">/ 100</span>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-display font-bold border ${tier.color}`}>
              {tier.label}
            </span>
          </div>

          {/* Session Details */}
          <div className="space-y-3 md:col-span-2">
            <div className="p-5 bg-surface-muted/30 rounded-2xl border border-border-subtle space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h4 className="font-display font-bold text-text-primary text-base">
                    {single.role}
                  </h4>
                  <p className="text-xs text-text-secondary font-sans mt-0.5">
                    {single.interviewType.replace(/_/g, " ")} • {single.experienceLevel} Level • {dateFormatted}
                  </p>
                </div>
                <Link
                  href={`/dashboard/interviews/${single.id}`}
                  className="text-xs font-display font-bold text-text-primary underline hover:opacity-80 transition-opacity"
                >
                  View Full Report →
                </Link>
              </div>

              <div className="pt-3 border-t border-border-subtle flex items-center justify-between gap-4 text-xs font-sans text-text-secondary">
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-emerald-600" /> 10 Questions Evaluated
                </span>
                {single.durationSeconds ? (
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-text-muted" />
                    {Math.floor(single.durationSeconds / 60)}m {single.durationSeconds % 60}s Duration
                  </span>
                ) : null}
              </div>
            </div>

            {/* Growth Prompt Banner */}
            <div className="p-4 bg-dashboard-metricHighlight/15 rounded-xl border border-dashboard-metricHighlight/30 flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-text-primary shrink-0" />
                <p className="text-xs font-sans text-text-primary leading-relaxed">
                  Complete <strong>1 more interview</strong> to unlock longitudinal trendlines and comparative score tracking.
                </p>
              </div>
              <Link
                href="/dashboard/interviews/new"
                className="px-3.5 py-1.5 rounded-lg text-xs font-display font-bold text-white bg-text-primary hover:bg-black/85 transition-colors whitespace-nowrap"
              >
                Start Next Mock
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2+ Interviews: Multi-session Recharts AreaChart
  const chartData = scoredInterviews.slice(-8).map((session, idx) => {
    const dateStr = new Date(session.createdAt).toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
    });
    return {
      sessionNumber: `Session ${idx + 1}`,
      role: session.role,
      date: dateStr,
      score: session.overallScore || 0,
      type: session.interviewType.replace(/_/g, " "),
      durationMinutes: session.durationSeconds ? Math.round(session.durationSeconds / 60) : null,
    };
  });

  const latestScore = chartData[chartData.length - 1].score;
  const prevScore = chartData[chartData.length - 2].score;
  const scoreDiff = latestScore - prevScore;

  return (
    <div className="bg-dashboard-card p-6 sm:p-8 rounded-[var(--card-radius)] border border-dashboard-cardBorder shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="text-xl font-display font-bold text-text-primary flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-text-primary" />
            Score Trajectory & Growth Trends
          </h3>
          <p className="text-xs font-sans text-text-secondary mt-1">
            Chronological overall scores across your last {chartData.length} completed mock sessions
          </p>
        </div>

        {/* Delta Chip */}
        <div className="flex items-center gap-2">
          {scoreDiff > 0 ? (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-display font-bold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
              <ArrowUpRight className="w-3.5 h-3.5" /> +{scoreDiff}% vs previous
            </span>
          ) : scoreDiff < 0 ? (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-display font-bold bg-rose-500/10 text-rose-600 border border-rose-500/20">
              <ArrowDownRight className="w-3.5 h-3.5" /> {scoreDiff}% vs previous
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-display font-bold bg-surface-muted text-text-secondary border border-border-subtle">
              Score Maintained
            </span>
          )}
        </div>
      </div>

      <div className="w-full h-[260px] sm:h-[300px] pt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 10, right: 15, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FFDB00" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#FFDB00" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="currentColor" className="text-border-subtle" />
            <XAxis
              dataKey="date"
              tick={{ fill: "currentColor", fontSize: 11, fontWeight: 600 }}
              className="text-text-primary font-display"
            />
            <YAxis
              domain={[0, 100]}
              unit="%"
              tick={{ fill: "currentColor", fontSize: 11 }}
              className="text-text-muted font-sans"
            />
            <Tooltip
              wrapperStyle={{ zIndex: 100, outline: "none" }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-2xl font-sans text-xs space-y-1.5 max-w-xs z-50 text-zinc-900 dark:text-zinc-100">
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-display font-bold text-zinc-900 dark:text-zinc-100">{data.role}</span>
                        <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium">{data.date}</span>
                      </div>
                      <p className="text-[11px] text-zinc-600 dark:text-zinc-400">{data.type}</p>
                      <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between gap-4">
                        <span className="text-zinc-500 dark:text-zinc-400">Score:</span>
                        <strong className="text-base font-display font-bold text-amber-500 dark:text-yellow-400">
                          {data.score}%
                        </strong>
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <ReferenceLine
              y={75}
              stroke="currentColor"
              strokeDasharray="4 4"
              className="text-text-muted/60"
              label={{
                value: "Benchmark (75%)",
                fill: "currentColor",
                fontSize: 10,
                position: "insideTopRight",
              }}
            />
            <Area
              type="monotone"
              dataKey="score"
              stroke="#FFDB00"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#trendGradient)"
              dot={{ r: 4, fill: "#FFDB00", strokeWidth: 2, stroke: "#171816" }}
              activeDot={{ r: 6, fill: "#FFDB00" }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
