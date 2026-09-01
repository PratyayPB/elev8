"use client";

import { ResumeOverallAssessment } from "../../types";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Compass } from "lucide-react";

interface ResumeRadarChartProps {
  overallAssessment: ResumeOverallAssessment;
}

export function ResumeRadarChart({ overallAssessment }: ResumeRadarChartProps) {
  const data = [
    {
      subject: "Overall Score",
      score: overallAssessment.overallScore ?? 0,
      fullMark: 100,
    },
    {
      subject: "ATS Readiness",
      score: overallAssessment.atsScore ?? 0,
      fullMark: 100,
    },
    {
      subject: "Technical Strength",
      score: overallAssessment.technicalStrength ?? 0,
      fullMark: 100,
    },
    {
      subject: "Project Quality",
      score: overallAssessment.projectQuality ?? 0,
      fullMark: 100,
    },
    {
      subject: "Experience Depth",
      score: overallAssessment.experienceStrength ?? 0,
      fullMark: 100,
    },
  ];

  return (
    <div className="bg-dashboard-card p-6 sm:p-8 rounded-[var(--card-radius)] border border-dashboard-cardBorder shadow-sm flex flex-col justify-between h-full">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-display font-bold text-text-primary flex items-center gap-2">
            <Compass className="w-5 h-5 text-text-primary" />
            Resume Competency Radar
          </h3>
          <p className="text-xs font-sans text-text-secondary mt-1">
            5-axis breakdown of ATS compatibility, technical proficiency, and experiential depth
          </p>
        </div>
      </div>

      <div className="w-full h-[300px] sm:h-[340px] flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
            <PolarGrid stroke="currentColor" className="text-border-subtle" />
            <PolarAngleAxis
              dataKey="subject"
              tick={{ fill: "currentColor", fontSize: 11, fontWeight: 600 }}
              className="text-text-primary font-display"
            />
            <PolarRadiusAxis
              angle={30}
              domain={[0, 100]}
              tick={{ fill: "currentColor", fontSize: 10 }}
              className="text-text-muted"
            />
            <Tooltip
              wrapperStyle={{ zIndex: 100, outline: "none" }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const item = payload[0].payload;
                  return (
                    <div className="bg-white dark:bg-zinc-900 p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-2xl font-sans text-xs z-50 text-zinc-900 dark:text-zinc-100">
                      <p className="font-display font-bold text-zinc-900 dark:text-zinc-100">{item.subject}</p>
                      <p className="text-amber-500 dark:text-yellow-400 font-bold text-sm mt-0.5">
                        {item.score} <span className="text-zinc-400 text-[10px]">/ 100</span>
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Radar
              name="Assessment Score"
              dataKey="score"
              stroke="#FFDB00"
              fill="#FFDB00"
              fillOpacity={0.4}
              strokeWidth={2.5}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
