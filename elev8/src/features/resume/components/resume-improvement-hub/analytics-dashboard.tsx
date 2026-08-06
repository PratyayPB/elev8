"use client";

import { ResumeReport } from "../../types";
import { BarChart3, FileText, Code2, Briefcase, GraduationCap, Award, Percent } from "lucide-react";

interface AnalyticsDashboardProps {
  report: ResumeReport;
}

export function AnalyticsDashboard({ report }: AnalyticsDashboardProps) {
  const { analytics } = report.artifact;

  const stats = [
    { label: "Word Count", value: analytics.wordCount, icon: FileText },
    { label: "Skills Identified", value: analytics.skillCount, icon: Code2 },
    { label: "Projects Included", value: analytics.projectCount, icon: BarChart3 },
    { label: "Work Experiences", value: analytics.experienceCount, icon: Briefcase },
    { label: "Educations", value: analytics.educationCount, icon: GraduationCap },
    { label: "Certifications", value: analytics.certificationCount, icon: Award },
    { label: "Estimated ATS Density", value: `${analytics.estimatedAtsKeywordDensity}%`, icon: Percent },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700 shadow-sm space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-teal-100 dark:bg-teal-900/40 text-teal-600 flex items-center justify-center">
          <BarChart3 className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Deterministic Analytics</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Rule-based structural breakdown computed directly from parsed resume content.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
        {stats.map((st, i) => {
          const Icon = st.icon;
          return (
            <div
              key={i}
              className="p-4 bg-gray-50 dark:bg-gray-700/40 rounded-2xl border border-gray-100 dark:border-gray-700 text-center space-y-1"
            >
              <Icon className="w-4 h-4 mx-auto text-gray-400" />
              <p className="text-xl font-extrabold text-gray-900 dark:text-white">{st.value}</p>
              <p className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-tight">{st.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
