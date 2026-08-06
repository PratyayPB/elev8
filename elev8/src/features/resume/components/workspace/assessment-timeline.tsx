"use client";

import React from "react";
import { ResumeSummary } from "../../types/workspace";
import { Clock, CheckCircle } from "lucide-react";
import Link from "next/link";

interface AssessmentTimelineProps {
  resumes: ResumeSummary[];
}

export function AssessmentTimeline({ resumes }: AssessmentTimelineProps) {
  const sorted = [...resumes].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  if (sorted.length === 0) return null;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Assessment History</h2>
      <div className="relative pl-6 border-l-2 border-gray-200 space-y-6">
        {sorted.map((item) => (
          <div key={item.id} className="relative">
            <div className="absolute -left-[31px] top-0.5 p-1 bg-white rounded-full">
              {item.status === "COMPLETED" ? (
                <CheckCircle className="w-4 h-4 text-emerald-600" />
              ) : (
                <Clock className="w-4 h-4 text-amber-500" />
              )}
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h4 className="font-semibold text-sm text-gray-900">{item.role}</h4>
                <p className="text-xs text-gray-500">
                  {new Date(item.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="mt-2 sm:mt-0 flex items-center space-x-3">
                {item.overallScore !== null && (
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-gray-100 text-gray-800">
                    Score: {item.overallScore}/100
                  </span>
                )}
                <Link
                  href={`/resumes/${item.id}`}
                  className="text-xs font-medium text-black underline hover:text-gray-600"
                >
                  View Assessment
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
