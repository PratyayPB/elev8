"use client";

import { ResumeSectionAssessment } from "../../types";
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
import { Layers } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface SectionScoreChartProps {
  sectionAssessment: ResumeSectionAssessment;
}

export function SectionScoreChart({ sectionAssessment }: SectionScoreChartProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { sections } = sectionAssessment;

  const chartData = [
    {
      name: "Summary",
      score: sections.summary?.score ?? 0,
      strengths: sections.summary?.strengths?.length ?? 0,
      weaknesses: sections.summary?.weaknesses?.length ?? 0,
    },
    {
      name: "Skills",
      score: sections.skills?.score ?? 0,
      strengths: sections.skills?.strengths?.length ?? 0,
      weaknesses: sections.skills?.weaknesses?.length ?? 0,
    },
    {
      name: "Projects",
      score: sections.projects?.score ?? 0,
      strengths: sections.projects?.strengths?.length ?? 0,
      weaknesses: sections.projects?.weaknesses?.length ?? 0,
    },
    {
      name: "Experience",
      score: sections.experience?.score ?? 0,
      strengths: sections.experience?.strengths?.length ?? 0,
      weaknesses: sections.experience?.weaknesses?.length ?? 0,
    },
    {
      name: "Education",
      score: sections.education?.score ?? 0,
      strengths: sections.education?.strengths?.length ?? 0,
      weaknesses: sections.education?.weaknesses?.length ?? 0,
    },
  ];

  if (sections.certifications) {
    chartData.push({
      name: "Certifications",
      score: sections.certifications.score ?? 0,
      strengths: sections.certifications.strengths?.length ?? 0,
      weaknesses: sections.certifications.weaknesses?.length ?? 0,
    });
  }

  const isDark = mounted && resolvedTheme === "dark";

  const getBarColor = (score: number) => {
    if (score >= 80) return "#10B981"; // Emerald
    if (score >= 65) return "#FFDB00"; // Metric highlight yellow
    if (score >= 50) return isDark ? "#A1A1AA" : "#71717A"; // Zinc
    return "#F43F5E"; // Rose
  };

  return (
    <div className="bg-dashboard-card p-6 sm:p-8 rounded-[var(--card-radius)] border border-dashboard-cardBorder shadow-sm space-y-4 flex flex-col justify-between h-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h3 className="text-xl font-display font-bold text-text-primary flex items-center gap-2">
            <Layers className="w-5 h-5 text-text-primary" />
            Section Quality Benchmark
          </h3>
          <p className="text-xs font-sans text-text-secondary mt-1">
            Comparative performance and scoring distribution across individual CV sections
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
              cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-2xl font-sans text-xs space-y-1.5 max-w-xs z-50 text-zinc-900 dark:text-zinc-100">
                      <div className="flex items-center justify-between gap-4">
                        <p className="font-display font-bold text-zinc-900 dark:text-zinc-100">
                          {data.name} Section
                        </p>
                        <span className="font-display font-bold text-amber-500 dark:text-yellow-400">
                          {data.score} / 100
                        </span>
                      </div>
                      <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 flex justify-between gap-4 text-[11px]">
                        <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                          {data.strengths} strengths
                        </span>
                        <span className="text-rose-500 dark:text-rose-400 font-medium">
                          {data.weaknesses} gaps
                        </span>
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar dataKey="score" radius={[6, 6, 0, 0]} maxBarSize={48}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getBarColor(entry.score)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
