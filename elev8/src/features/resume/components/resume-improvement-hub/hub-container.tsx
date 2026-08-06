"use client";

import { ResumeReport } from "../../types";
import { useResumeReport } from "../../hooks/use-resume-report";
import { OverviewCard } from "./overview-card";
import { ResumeHealthComponent } from "./resume-health";
import { SectionBreakdown } from "./section-breakdown";
import { KeywordAnalysisComponent } from "./keyword-analysis";
import { ImprovementPlanComponent } from "./improvement-plan";
import { NextStepsComponent } from "./next-steps";
import { AnalyticsDashboard } from "./analytics-dashboard";
import { TimelineComponent } from "./timeline";
import { LayoutDashboard, HeartPulse, Layers, Search, ListTodo, Sparkles, BarChart3 } from "lucide-react";

interface ResumeHubContainerProps {
  report: ResumeReport;
}

export function ResumeHubContainer({ report: initialReport }: ResumeHubContainerProps) {
  const { report, activeTab, setActiveTab } = useResumeReport(initialReport);

  const tabs = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "health", label: "Health", icon: HeartPulse },
    { id: "sections", label: "Sections", icon: Layers },
    { id: "ats", label: "ATS & Keywords", icon: Search },
    { id: "plan", label: "Action Plan", icon: ListTodo },
    { id: "next", label: "Elev8 Actions", icon: Sparkles },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
  ] as const;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Navigation Tab Bar */}
        <div className="bg-white dark:bg-gray-800 p-2 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm flex items-center gap-1 overflow-x-auto">
          {tabs.map((t) => {
            const Icon = t.icon;
            const isActive = activeTab === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveTab(t.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  isActive
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <Icon className="w-4 h-4" />
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            <OverviewCard report={report} />
            <ResumeHealthComponent report={report} />
            <NextStepsComponent report={report} />
          </div>
        )}

        {activeTab === "health" && <ResumeHealthComponent report={report} />}

        {activeTab === "sections" && <SectionBreakdown report={report} />}

        {activeTab === "ats" && <KeywordAnalysisComponent report={report} />}

        {activeTab === "plan" && <ImprovementPlanComponent report={report} />}

        {activeTab === "next" && <NextStepsComponent report={report} />}

        {activeTab === "analytics" && (
          <div className="space-y-8">
            <AnalyticsDashboard report={report} />
            <TimelineComponent report={report} />
          </div>
        )}
      </div>
    </div>
  );
}
