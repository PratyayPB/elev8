"use client";

import { ResumeReport } from "../../types";
import { ShieldCheck, CheckCircle2, XCircle, HeartPulse } from "lucide-react";

interface ResumeHealthProps {
  report: ResumeReport;
}

export function ResumeHealthComponent({ report }: ResumeHealthProps) {
  const { health } = report;

  const getHealthBadge = (status: string) => {
    switch (status) {
      case "Excellent":
        return "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-300";
      case "Good":
        return "bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 border-blue-300";
      case "Needs Improvement":
        return "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border-amber-300";
      default:
        return "bg-red-100 text-red-800 dark:bg-red-950/60 dark:text-red-300 border-red-300";
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700 shadow-sm space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-rose-100 dark:bg-rose-900/40 text-rose-600 flex items-center justify-center">
            <HeartPulse className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Resume Health Summary</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Evaluated across section completeness, ATS parsing readability, and recruiter impact.
            </p>
          </div>
        </div>

        <span
          className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider border ${getHealthBadge(
            health.status
          )}`}
        >
          {health.status}
        </span>
      </div>

      {/* Progress Bars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-bold">
            <span className="text-gray-600 dark:text-gray-400">Completeness</span>
            <span className="text-gray-900 dark:text-white">{health.completeness}%</span>
          </div>
          <div className="w-full bg-gray-100 dark:bg-gray-700 h-2.5 rounded-full overflow-hidden">
            <div
              className="bg-blue-600 h-full rounded-full transition-all duration-500"
              style={{ width: `${health.completeness}%` }}
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-xs font-bold">
            <span className="text-gray-600 dark:text-gray-400">ATS Readiness</span>
            <span className="text-gray-900 dark:text-white">{health.atsReadiness}%</span>
          </div>
          <div className="w-full bg-gray-100 dark:bg-gray-700 h-2.5 rounded-full overflow-hidden">
            <div
              className="bg-emerald-500 h-full rounded-full transition-all duration-500"
              style={{ width: `${health.atsReadiness}%` }}
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-xs font-bold">
            <span className="text-gray-600 dark:text-gray-400">Recruiter Readiness</span>
            <span className="text-gray-900 dark:text-white">{health.recruiterReadiness}%</span>
          </div>
          <div className="w-full bg-gray-100 dark:bg-gray-700 h-2.5 rounded-full overflow-hidden">
            <div
              className="bg-indigo-600 h-full rounded-full transition-all duration-500"
              style={{ width: `${health.recruiterReadiness}%` }}
            />
          </div>
        </div>
      </div>

      {/* Strengths & Weaknesses Detailed List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100 dark:border-gray-700">
        <div className="space-y-3">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-emerald-600 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" /> Core Strengths
          </h4>
          <ul className="space-y-2">
            {health.topStrengths.map((str, idx) => (
              <li key={idx} className="text-xs font-medium text-gray-700 dark:text-gray-300 flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                {str}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-rose-600 flex items-center gap-2">
            <XCircle className="w-4 h-4" /> Key Weaknesses
          </h4>
          <ul className="space-y-2">
            {health.topWeaknesses.map((wk, idx) => (
              <li key={idx} className="text-xs font-medium text-gray-700 dark:text-gray-300 flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                {wk}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
