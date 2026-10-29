"use client";

import React from "react";
import Link from "next/link";
import { ResumeRecommendation } from "../../types/workspace";
import { ArrowUpRight, Sparkles } from "lucide-react";

interface RecommendedActionsProps {
  recommendations: ResumeRecommendation[];
}

export function RecommendedActions({ recommendations }: RecommendedActionsProps) {
  if (!recommendations || recommendations.length === 0) return null;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-8">
      <div className="flex items-center space-x-2 mb-4">
        <Sparkles className="w-5 h-5 text-amber-500" />
        <h2 className="text-lg font-semibold text-gray-900">Recommended Actions</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recommendations.map((rec) => (
          <div
            key={rec.id}
            className="p-4 border border-gray-100 rounded-lg bg-gray-50 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {rec.type}
                </span>
                <span
                  className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${
                    rec.priority === "high"
                      ? "bg-rose-100 text-rose-800"
                      : rec.priority === "medium"
                      ? "bg-amber-100 text-amber-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {rec.priority} Priority
                </span>
              </div>
              <h4 className="font-semibold text-gray-900 text-sm mb-1">{rec.title}</h4>
              <p className="text-xs text-gray-600 mb-4">{rec.description}</p>
            </div>

            <Link
              href={rec.actionUrl}
              className="inline-flex items-center justify-between text-xs font-semibold text-black hover:underline"
            >
              <span>{rec.actionText}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
