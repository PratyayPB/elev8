import React from "react";
import { RoadmapRequest } from "../../types";
import { CheckCircle, Code, ShieldCheck } from "lucide-react";

interface SummaryProps {
  request: RoadmapRequest | null;
  error: string | null;
}

export function Summary({ request, error }: SummaryProps) {
  if (error || !request) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs">
        Failed to build valid RoadmapRequest: {error || "Invalid form state."}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-gray-100 pb-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Roadmap Request Ready
          </h3>
          <p className="text-xs text-gray-500 mt-0.5">
            Phase 7.1 Input Workflow complete. Validated payload compiled successfully.
          </p>
        </div>
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
          <CheckCircle className="w-3.5 h-3.5" />
          Validated
        </span>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-200">
          <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider block">
            Target Role
          </span>
          <span className="text-sm font-bold text-gray-900 mt-1 block truncate">
            {request.role}
          </span>
        </div>

        <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-200">
          <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider block">
            Experience Level
          </span>
          <span className="text-sm font-bold text-gray-900 mt-1 block">
            {request.experienceLevel}
          </span>
        </div>

        <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-200">
          <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider block">
            Study Hours / Week
          </span>
          <span className="text-sm font-bold text-gray-900 mt-1 block">
            {request.hoursPerWeek === "Flexible"
              ? "Flexible"
              : `${request.hoursPerWeek} Hours`}
          </span>
        </div>
      </div>

      {/* Payload Inspection */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-gray-700 flex items-center gap-1">
            <Code className="w-3.5 h-3.5" />
            Compiled RoadmapRequest Payload (JSON)
          </span>
          <span className="text-[11px] text-gray-400">Ready for Roadmap Generator (Phase 7.2)</span>
        </div>
        <pre className="bg-gray-900 text-emerald-400 font-mono text-xs p-4 rounded-xl overflow-x-auto max-h-60">
          {JSON.stringify(request, null, 2)}
        </pre>
      </div>
    </div>
  );
}
