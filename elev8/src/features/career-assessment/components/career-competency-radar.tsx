"use client";

import React, { useState, useEffect } from "react";
import { CareerAssessmentResult } from "../types";
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

interface CareerCompetencyRadarProps {
  assessment: CareerAssessmentResult;
  className?: string;
}

export function CareerCompetencyRadar({
  assessment,
  className = "",
}: CareerCompetencyRadarProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const strengthsCount = assessment.strengths?.length ?? 0;
  const gapsCount = assessment.gaps?.length ?? 0;
  const skillsCount = assessment.inputSnapshot?.skills?.length ?? 0;
  const weeklyHours = assessment.inputSnapshot?.weeklyLearningHours ?? 10;

  // Derive standardized 0-100 dimensions from the assessment signals
  const data = [
    {
      subject: "Readiness Index",
      score: assessment.readinessScore,
      fullMark: 100,
      description: "Overall target alignment and career readiness",
    },
    {
      subject: "Core Strengths",
      score: Math.min(100, Math.max(40, Math.round((strengthsCount / 5) * 100))),
      fullMark: 100,
      description: `${strengthsCount} verified strength areas`,
    },
    {
      subject: "Skill Inventory",
      score: Math.min(100, Math.max(30, Math.round(skillsCount * 14))),
      fullMark: 100,
      description: `${skillsCount} recorded capabilities`,
    },
    {
      subject: "Gap Coverage",
      score: Math.max(20, Math.round(100 - gapsCount * 15)),
      fullMark: 100,
      description: `${gapsCount} identified friction areas`,
    },
    {
      subject: "Study Velocity",
      score: Math.min(100, Math.max(30, Math.round((weeklyHours / 20) * 100))),
      fullMark: 100,
      description: `${weeklyHours} hrs/week committed`,
    },
  ];

  return (
    <div
      className={`bg-dashboard-card p-6 sm:p-8 rounded-[var(--card-radius-lg)] border border-dashboard-cardBorder shadow-sm flex flex-col justify-between h-full ${className}`}
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-display font-bold text-text-primary flex items-center gap-2">
            <Compass className="w-5 h-5 text-text-primary" />
            Career Competency Radar
          </h3>
          <p className="text-xs font-sans text-text-secondary mt-1">
            5-axis breakdown of readiness, strengths, skill inventory, and development bandwidth
          </p>
        </div>
      </div>

      <div className="w-full h-[300px] sm:h-[340px] flex items-center justify-center">
        {mounted ? (
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="72%" data={data}>
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
                      <div className="bg-white dark:bg-zinc-900 p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-2xl font-sans text-xs z-50 text-zinc-900 dark:text-zinc-100 min-w-[160px]">
                        <p className="font-display font-bold text-zinc-900 dark:text-zinc-100">
                          {item.subject}
                        </p>
                        <p className="text-amber-500 dark:text-yellow-400 font-bold text-sm mt-0.5">
                          {item.score}{" "}
                          <span className="text-zinc-400 text-[10px]">/ 100</span>
                        </p>
                        {item.description && (
                          <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1">
                            {item.description}
                          </p>
                        )}
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Radar
                name="Competency Signal"
                dataKey="score"
                stroke="#FFDB00"
                fill="#FFDB00"
                fillOpacity={0.35}
                strokeWidth={2.5}
              />
            </RadarChart>
          </ResponsiveContainer>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-32 h-32 rounded-full border-4 border-dashed border-border-subtle animate-spin" />
          </div>
        )}
      </div>
    </div>
  );
}
