"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Roadmap, RoadmapStatus, CareerLevel } from "@prisma/client";
import {
  Compass,
  Clock,
  Calendar,
  MoreVertical,
  ExternalLink,
  Copy,
  Trash2,
  RefreshCw,
  AlertCircle,
  Loader2,
  CheckCircle2,
} from "lucide-react";

interface RoadmapCardProps {
  roadmap: Roadmap;
  onDuplicate: (id: string) => void;
  onDeleteClick: (roadmap: Roadmap) => void;
  onRegenerate: (roadmap: Roadmap) => void;
}

export const RoadmapCard: React.FC<RoadmapCardProps> = ({
  roadmap,
  onDuplicate,
  onDeleteClick,
  onRegenerate,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const getStatusBadge = (status: RoadmapStatus) => {
    switch (status) {
      case RoadmapStatus.COMPLETED:
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
            <CheckCircle2 className="w-3 h-3" /> Completed
          </span>
        );
      case RoadmapStatus.IN_PROGRESS:
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-2.5 py-0.5 rounded-full">
            <Loader2 className="w-3 h-3 animate-spin" /> Generating...
          </span>
        );
      case RoadmapStatus.ARCHIVED:
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-slate-800 text-slate-400 border border-slate-700 px-2.5 py-0.5 rounded-full">
            Archived
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2.5 py-0.5 rounded-full">
            <AlertCircle className="w-3 h-3" /> Not Started
          </span>
        );
    }
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="group relative bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-5 shadow-xl transition-all hover:shadow-cyan-500/5 flex flex-col justify-between">
      <div>
        {/* Card Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                {roadmap.targetRole || roadmap.targetCareer}
              </span>
              {roadmap.experienceLevel && (
                <span className="text-[11px] text-slate-400 font-medium capitalize">
                  {roadmap.experienceLevel.toLowerCase()}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {getStatusBadge(roadmap.status)}
            <div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-1.5 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-slate-200 transition-colors"
                aria-label="Options"
              >
                <MoreVertical className="w-4 h-4" />
              </button>

              {menuOpen && (
                <div
                  className="absolute right-0 top-8 w-44 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl z-50 py-1 text-xs text-slate-300 backdrop-blur-md"
                  onMouseLeave={() => setMenuOpen(false)}
                >
                  <Link
                    href={`/roadmaps/${roadmap.id}`}
                    className="w-full flex items-center gap-2 px-3 py-2 hover:bg-slate-800 text-slate-200"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> View Roadmap
                  </Link>
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      onDuplicate(roadmap.id);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2 hover:bg-slate-800 text-slate-200 text-left"
                  >
                    <Copy className="w-3.5 h-3.5" /> Duplicate
                  </button>
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      onRegenerate(roadmap);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2 hover:bg-slate-800 text-slate-200 text-left"
                  >
                    <RefreshCw className="w-3.5 h-3.5" /> Regenerate
                  </button>
                  <div className="my-1 border-t border-slate-800" />
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      onDeleteClick(roadmap);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2 hover:bg-red-500/10 text-red-400 text-left"
                  >
                    <Trash2 className="w-3.5 h-3.5" /> Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Roadmap Title */}
        <h3 className="text-base font-bold text-slate-100 group-hover:text-cyan-400 transition-colors line-clamp-1 mb-2">
          {roadmap.title}
        </h3>

        {/* Description / Summary */}
        {roadmap.description && (
          <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
            {roadmap.description}
          </p>
        )}
      </div>

      {/* Card Footer */}
      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-medium">
        <div className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5 text-slate-400" />
          <span>{formatDate(roadmap.createdAt)}</span>
        </div>

        {roadmap.estimatedDuration && (
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>{roadmap.estimatedDuration}</span>
          </div>
        )}

        <Link
          href={`/roadmaps/${roadmap.id}`}
          className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1"
        >
          Open &rarr;
        </Link>
      </div>
    </div>
  );
};
