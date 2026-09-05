"use client";

import React, { useState, useEffect, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SearchBar } from "./SearchBar";
import { FilterPanel } from "./FilterPanel";
import { RoadmapCard } from "./RoadmapCard";
import { DeleteDialog } from "./DeleteDialog";
import {
  fetchUserRoadmaps,
  duplicateRoadmapAction,
  deleteRoadmapAction,
} from "@/features/roadmaps/actions/roadmap-actions";
import { Compass, Plus, Loader2, Globe, User, Sparkles } from "lucide-react";
import Link from "next/link";
import { PageHeader } from "@/components/dashboard";
import { LibraryRoadmap } from "@/features/roadmaps/types";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const RoadmapLibrary: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const tabParam = searchParams?.get("tab");
  const initialSection = tabParam === "global" ? "global" : "mine";

  const [section, setSection] = useState<"mine" | "global">(initialSection);
  const [search, setSearch] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("ALL");
  const [status, setStatus] = useState("ALL");
  const [sort, setSort] = useState<"newest" | "oldest" | "updated" | "alphabetical">("newest");
  const [page, setPage] = useState(1);

  const [roadmaps, setRoadmaps] = useState<LibraryRoadmap[]>([]);
  const [pagination, setPagination] = useState({
    total: 0,
    page: 1,
    limit: 9,
    totalPages: 1,
  });
  const [loading, setLoading] = useState(true);

  // Delete modal state
  const [deleteTarget, setDeleteTarget] = useState<LibraryRoadmap | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Sync state if URL search param changes
  useEffect(() => {
    if (tabParam === "global" && section !== "global") {
      setSection("global");
      setPage(1);
    } else if (tabParam !== "global" && section !== "mine") {
      setSection("mine");
      setPage(1);
    }
  }, [tabParam]);

  const loadData = async () => {
    setLoading(true);
    try {
      const res = await fetchUserRoadmaps({
        section,
        search,
        experienceLevel,
        status,
        sort,
        page,
        limit: 9,
      });
      setRoadmaps(res.roadmaps);
      setPagination(res.pagination);
    } catch (err) {
      console.error("Failed to load roadmaps:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [section, search, experienceLevel, status, sort, page]);

  const handleTabChange = (newTab: string) => {
    const nextSection = newTab as "mine" | "global";
    setSection(nextSection);
    setPage(1);
    const params = new URLSearchParams(searchParams?.toString() || "");
    if (nextSection === "global") {
      params.set("tab", "global");
    } else {
      params.delete("tab");
    }
    router.replace(`/dashboard/roadmaps${params.toString() ? `?${params.toString()}` : ""}`);
  };

  const handleDuplicate = async (roadmapId: string) => {
    try {
      await duplicateRoadmapAction(roadmapId);
      loadData();
    } catch (err) {
      console.error("Failed to duplicate roadmap:", err);
    }
  };

  const handleConfirmDelete = async () => {
    if (!deleteTarget) return;
    setIsDeleting(true);
    try {
      await deleteRoadmapAction(deleteTarget.id);
      setDeleteTarget(null);
      loadData();
    } catch (err) {
      console.error("Failed to delete roadmap:", err);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleRegenerate = (roadmap: LibraryRoadmap) => {
    const role = encodeURIComponent(roadmap.targetRole || "");
    const level = encodeURIComponent(roadmap.experienceLevel || "BEGINNER");
    router.push(`/dashboard/roadmaps/new?role=${role}&experienceLevel=${level}`);
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-10">
      {/* Header Bar */}
      <PageHeader
        title="Roadmap Library"
        description="Browse, manage, and explore both your personalized roadmaps and global career guides."
        section="Learning Paths"
        action={
          <Link
            href="/dashboard/roadmaps/new"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-text-primary hover:bg-black/80 dark:hover:bg-brand-secondary-200 text-white text-sm font-display font-semibold rounded-xl transition-all shadow-sm active:scale-[0.98]"
          >
            <Plus className="w-4 h-4" /> Create New Roadmap
          </Link>
        }
      />

      {/* Tabs Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border-subtle pb-4">
        <Tabs value={section} onValueChange={handleTabChange} className="w-full sm:w-auto">
          <TabsList className="grid grid-cols-2 w-full sm:w-[360px] bg-surface-muted p-1 rounded-xl border border-border-subtle">
            <TabsTrigger
              value="mine"
              className="flex items-center justify-center gap-2 py-2 text-xs font-display font-bold rounded-lg data-[state=active]:bg-dashboard-card data-[state=active]:text-text-primary data-[state=active]:shadow-sm transition-all"
            >
              <User className="w-3.5 h-3.5" /> My Roadmaps
            </TabsTrigger>
            <TabsTrigger
              value="global"
              className="flex items-center justify-center gap-2 py-2 text-xs font-display font-bold rounded-lg data-[state=active]:bg-dashboard-card data-[state=active]:text-text-primary data-[state=active]:shadow-sm transition-all"
            >
              <Globe className="w-3.5 h-3.5" /> Global Roadmaps
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <p className="text-xs font-sans text-text-secondary">
          {section === "mine"
            ? "Personalized career paths tailored to your profile & your generated roadmaps."
            : "Pre-generated community roadmaps available for instant exploration."}
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-dashboard-card border border-dashboard-cardBorder rounded-[var(--card-radius)] p-4 shadow-sm">
        <SearchBar value={search} onChange={(val) => { setSearch(val); setPage(1); }} />
        <FilterPanel
          experienceLevel={experienceLevel}
          status={status}
          sort={sort}
          onExperienceChange={(val) => { setExperienceLevel(val); setPage(1); }}
          onStatusChange={(val) => { setStatus(val); setPage(1); }}
          onSortChange={(val) => { setSort(val); setPage(1); }}
        />
      </div>

      {/* Roadmap Grid */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 text-text-muted">
          <Loader2 className="w-8 h-8 animate-spin text-text-primary mb-3" />
          <p className="text-sm font-sans">
            {section === "mine" ? "Loading your roadmaps..." : "Loading global roadmaps..."}
          </p>
        </div>
      ) : roadmaps.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 bg-dashboard-card border border-dashboard-cardBorder rounded-[var(--card-radius-lg)] text-center p-8">
          <div className="w-16 h-16 rounded-full bg-surface-muted text-text-primary flex items-center justify-center mb-4 shadow-sm">
            {section === "mine" ? <Compass className="w-8 h-8" /> : <Globe className="w-8 h-8" />}
          </div>
          <h3 className="text-xl font-display font-bold text-text-primary">
            {section === "mine" ? "No Personal Roadmaps Found" : "No Global Roadmaps Found"}
          </h3>
          <p className="text-sm font-sans text-text-secondary max-w-sm mt-2 mb-6">
            {search || experienceLevel !== "ALL" || status !== "ALL"
              ? "No roadmaps matched your search and filter criteria. Try resetting your filters."
              : section === "mine"
              ? "Generate your first personalized AI career roadmap or generate a generic role roadmap to get started."
              : "No pre-generated global roadmaps are available yet. Generate one now to start populating the catalog!"}
          </p>
          <Link
            href="/dashboard/roadmaps/new"
            className="px-6 py-2.5 bg-text-primary hover:bg-black/80 dark:hover:bg-brand-secondary-200 text-white text-sm font-display font-semibold rounded-xl transition-all shadow-sm"
          >
            Generate Roadmap
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roadmaps.map((item) => (
            <RoadmapCard
              key={item.id}
              roadmap={item}
              onDuplicate={handleDuplicate}
              onDeleteClick={(target) => setDeleteTarget(target)}
              onRegenerate={handleRegenerate}
            />
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      {pagination.totalPages > 1 && (
        <div className="flex items-center justify-between pt-4 border-t border-border-subtle text-xs font-sans text-text-secondary">
          <div>
            Showing Page {pagination.page} of {pagination.totalPages} ({pagination.total} total)
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-3.5 py-2 bg-surface-muted border border-border-subtle rounded-xl hover:bg-border-subtle text-text-primary font-display font-medium disabled:opacity-40 transition-colors"
            >
              Previous
            </button>
            <button
              onClick={() => setPage((p) => Math.min(pagination.totalPages, p + 1))}
              disabled={page === pagination.totalPages}
              className="px-3.5 py-2 bg-surface-muted border border-border-subtle rounded-xl hover:bg-border-subtle text-text-primary font-display font-medium disabled:opacity-40 transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      <DeleteDialog
        isOpen={Boolean(deleteTarget)}
        roadmapTitle={deleteTarget?.title}
        isDeleting={isDeleting}
        onConfirm={handleConfirmDelete}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
};
