"use client";

import React, { useState, useEffect } from "react";
import { CareerAssessmentResult } from "../types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { BarChart3, CheckCircle2, AlertTriangle, Lightbulb, Clock } from "lucide-react";
import { useTheme } from "next-themes";

interface AssessmentMetricsChartProps {
  assessment: CareerAssessmentResult;
  className?: string;
}

export function AssessmentMetricsChart({
  assessment,
  className = "",
}: AssessmentMetricsChartProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const strengthsCount = assessment.strengths?.length ?? 0;
  const gapsCount = assessment.gaps?.length ?? 0;
  const focusAreasCount = assessment.suggestedFocusAreas?.length ?? 0;
  const weeklyHours = assessment.inputSnapshot?.weeklyLearningHours ?? 10;
  const isDark = mounted && resolvedTheme === "dark";

  const getScoreColor = (score: number) => {
    if (score >= 80) return "#10B981"; // Emerald
    if (score >= 60) return "#FFDB00"; // Metric highlight yellow
    return "#3B82F6"; // Blue
  };

  const chartData = [
    {
      name: "Readiness",
      score: assessment.readinessScore,
      rawLabel: `${assessment.readinessScore}/100`,
      color: getScoreColor(assessment.readinessScore),
      description: "Overall alignment score",
    },
    {
      name: "Strengths",
      score: Math.min(100, Math.round((strengthsCount / 5) * 100)),
      rawLabel: `${strengthsCount} items`,
      color: "#10B981",
      description: "Verified capabilities",
    },
    {
      name: "Gaps",
      score: Math.min(100, Math.round((gapsCount / 5) * 100)),
      rawLabel: `${gapsCount} items`,
      color: "#F43F5E",
      description: "Development friction",
    },
    {
      name: "Focus Areas",
      score: Math.min(100, Math.round((focusAreasCount / 5) * 100)),
      rawLabel: `${focusAreasCount} topics`,
      color: "#FFDB00",
      description: "High-leverage next steps",
    },
    {
      name: "Study Capacity",
      score: Math.min(100, Math.round((weeklyHours / 20) * 100)),
      rawLabel: `${weeklyHours}h/wk`,
      color: "#3B82F6",
      description: "Weekly learning bandwidth",
    },
  ];

  return (
    <div
      className={`bg-dashboard-card p-6 sm:p-8 rounded-[var(--card-radius-lg)] border border-dashboard-cardBorder shadow-sm space-y-4 flex flex-col justify-between h-full ${className}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h3 className="text-xl font-display font-bold text-text-primary flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-text-primary" />
            Evaluation Metrics Breakdown
          </h3>
          <p className="text-xs font-sans text-text-secondary mt-1">
            Comparative distribution across key readiness drivers, gaps, and learning commitment
          </p>
        </div>
      </div>

      <div className="w-full h-[260px] sm:h-[280px] pt-2">
        {mounted ? (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 10, right: 10, left: -15, bottom: 0 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="currentColor"
                className="text-border-subtle"
              />
              <XAxis
                dataKey="name"
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
                cursor={{ fill: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)" }}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-white dark:bg-zinc-900 p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-2xl font-sans text-xs space-y-1 z-50 text-zinc-900 dark:text-zinc-100 min-w-[150px]">
                        <div className="flex items-center justify-between gap-4">
                          <p className="font-display font-bold text-zinc-900 dark:text-zinc-100">
                            {data.name}
                          </p>
                          <span
                            className="font-display font-bold"
                            style={{ color: data.color }}
                          >
                            {data.rawLabel}
                          </span>
                        </div>
                        <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                          {data.description} ({data.score}% benchmark)
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar dataKey="score" radius={[6, 6, 0, 0]} maxBarSize={44}>
                {chartData.map((entry, index) => (
                  <Cell key={`metric-cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-24 h-24 rounded-full border-4 border-dashed border-border-subtle animate-spin" />
          </div>
        )}
      </div>

      {/* Mini telemetry pills */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-border-subtle">
        <div className="flex items-center gap-1.5 p-2 bg-surface-muted rounded-lg text-[11px] font-sans text-text-secondary">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span className="truncate">{strengthsCount} Strengths</span>
        </div>
        <div className="flex items-center gap-1.5 p-2 bg-surface-muted rounded-lg text-[11px] font-sans text-text-secondary">
          <AlertTriangle className="w-3.5 h-3.5 text-rose-500 shrink-0" />
          <span className="truncate">{gapsCount} Gaps</span>
        </div>
        <div className="flex items-center gap-1.5 p-2 bg-surface-muted rounded-lg text-[11px] font-sans text-text-secondary">
          <Lightbulb className="w-3.5 h-3.5 text-amber-500 shrink-0" />
          <span className="truncate">{focusAreasCount} Focus Topics</span>
        </div>
        <div className="flex items-center gap-1.5 p-2 bg-surface-muted rounded-lg text-[11px] font-sans text-text-secondary">
          <Clock className="w-3.5 h-3.5 text-blue-500 shrink-0" />
          <span className="truncate">{weeklyHours}h Capacity</span>
        </div>
      </div>
    </div>
  );
}
