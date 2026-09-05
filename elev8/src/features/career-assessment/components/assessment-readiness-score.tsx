"use client";

import React, { useState, useEffect } from "react";
import { Target, Info } from "lucide-react";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

interface AssessmentReadinessScoreProps {
  score: number;
  className?: string;
}

export function AssessmentReadinessScore({
  score,
  className = "",
}: AssessmentReadinessScoreProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getScoreBand = (val: number) => {
    if (val >= 80) return { label: "High Preparedness", color: "text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/50 border-emerald-300 dark:border-emerald-800" };
    if (val >= 60) return { label: "Moderate Readiness", color: "text-amber-800 dark:text-yellow-400 bg-amber-100 dark:bg-yellow-950/50 border-amber-300 dark:border-yellow-800" };
    return { label: "Foundational Phase", color: "text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-950/50 border-blue-300 dark:border-blue-800" };
  };

  const getGaugeColor = (val: number) => {
    if (val >= 80) return "#10B981"; // Emerald
    if (val >= 60) return "#FFDB00"; // Signature Gold / Yellow
    return "#3B82F6"; // Blue
  };

  const band = getScoreBand(score);
  const gaugeColor = getGaugeColor(score);
  const chartData = [{ name: "Readiness", value: score, fill: gaugeColor }];

  return (
    <div
      className={`rounded-[var(--card-radius-lg)] border border-dashboard-cardBorder bg-dashboard-card p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm relative overflow-hidden ${className}`}
    >
      <div className="space-y-2 relative z-10 max-w-lg">
        <div className="flex items-center gap-2">
          <span className="text-xs font-display font-semibold text-text-secondary uppercase tracking-wider">
            Overall Readiness Signal
          </span>
          <span
            className={`text-[11px] px-2.5 py-0.5 rounded-full font-display font-semibold border ${band.color}`}
          >
            {band.label}
          </span>
        </div>
        <h3 className="text-2xl font-display font-bold text-text-primary">
          Career Direction Alignment
        </h3>
        <p className="text-xs font-sans text-text-secondary flex items-start gap-1.5 pt-1">
          <Info className="h-3.5 w-3.5 shrink-0 text-text-muted mt-0.5" />
          <span>
            This score reflects the alignment between your current skills, experience, and target career direction. It serves as an analytical guidance signal.
          </span>
        </p>
      </div>

      <div className="flex items-center gap-6 relative z-10 shrink-0">
        <div className="flex flex-col items-end">
          <div className="flex items-baseline gap-1">
            <span className="text-5xl font-display font-black text-text-primary tracking-tight">
              {score}
            </span>
            <span className="text-xl font-display font-medium text-text-secondary">
              / 100
            </span>
          </div>
          <span className="text-[11px] font-sans text-text-muted">
            Readiness Index
          </span>
        </div>

        {/* Dynamic Recharts Circular Gauge */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center shrink-0">
          {mounted ? (
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="74%"
                outerRadius="100%"
                barSize={9}
                data={chartData}
                startAngle={90}
                endAngle={-270}
              >
                <PolarAngleAxis
                  type="number"
                  domain={[0, 100]}
                  angleAxisId={0}
                  tick={false}
                />
                <RadialBar
                  background={{ fill: "currentColor" }}
                  className="text-border-subtle"
                  dataKey="value"
                  cornerRadius={10}
                />
              </RadialBarChart>
            </ResponsiveContainer>
          ) : (
            <div className="w-20 h-20 rounded-full border-4 border-border-subtle flex items-center justify-center" />
          )}

          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <Target className="h-5 w-5 text-text-primary" />
            <span className="text-[10px] font-display font-bold text-text-secondary mt-0.5">
              {score}%
            </span>
          </div>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 h-48 w-48 bg-dashboard-metricHighlight/15 rounded-full blur-3xl -mr-16 -mb-16 pointer-events-none" />
    </div>
  );
}

