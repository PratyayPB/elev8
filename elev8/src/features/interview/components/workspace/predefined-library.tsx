"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PredefinedInterviewSummary, PredefinedDifficulty } from "../../types/predefined-interview";
import { PredefinedCard } from "./predefined-card";
import { DifficultySelector } from "../predefined-interview/difficulty-selector";
import { startPredefinedInterview } from "../../actions/predefined-actions";
import { X, Loader2, Library, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface PredefinedLibraryProps {
  catalog: PredefinedInterviewSummary[];
}

export function PredefinedLibrary({ catalog }: PredefinedLibraryProps) {
  const router = useRouter();
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(catalog.length / itemsPerPage);
  
  // Selection State
  const [selectedInterview, setSelectedInterview] = useState<PredefinedInterviewSummary | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<PredefinedDifficulty | null>(null);
  const [isStarting, setIsStarting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Paginated List
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedCatalog = catalog.slice(startIndex, startIndex + itemsPerPage);

  const handleStart = async () => {
    if (!selectedInterview || !selectedDifficulty) return;
    
    setIsStarting(true);
    setError(null);
    try {
      const result = await startPredefinedInterview(selectedInterview.id, selectedDifficulty);
      router.push(`/dashboard/interviews/${result.interviewId}/session`);
    } catch (err: any) {
      setError(err.message || "Failed to start interview");
      setIsStarting(false);
    }
  };

  const handleClose = () => {
    if (isStarting) return;
    setSelectedInterview(null);
    setSelectedDifficulty(null);
    setError(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-border-subtle pb-4">
        <h3 className="text-xl font-display font-bold text-text-primary flex items-center gap-2">
          <Library className="w-5 h-5 text-text-primary" />
          Predefined Practice Library
        </h3>
        <span className="text-xs font-sans text-text-secondary">
          Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, catalog.length)} of {catalog.length}
        </span>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedCatalog.map((interview) => (
          <PredefinedCard
            key={interview.id}
            interview={interview}
            onSelect={() => setSelectedInterview(interview)}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-4">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-lg border border-border-subtle bg-dashboard-card text-text-primary hover:bg-surface-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-lg text-sm font-display font-semibold transition-all ${
                currentPage === page
                  ? "bg-text-primary text-white border border-text-primary shadow-sm"
                  : "border border-border-subtle bg-dashboard-card text-text-primary hover:bg-surface-muted"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg border border-border-subtle bg-dashboard-card text-text-primary hover:bg-surface-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Modal Backdrop / Overlay */}
      <AnimatePresence>
        {selectedInterview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-dashboard-card border border-dashboard-cardBorder rounded-[var(--card-radius-lg)] w-full max-w-4xl overflow-hidden shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                disabled={isStarting}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-surface-muted text-text-secondary hover:text-text-primary transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8">
                {/* Header */}
                <div className="mb-8">
                  <span className="text-[10px] uppercase tracking-wider font-display font-bold px-2.5 py-1 rounded bg-surface-muted border border-border-subtle text-text-secondary">
                    {selectedInterview.type}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-text-primary mt-3">
                    {selectedInterview.role}
                  </h3>
                  <p className="text-sm font-sans text-text-secondary mt-2 max-w-2xl leading-relaxed">
                    {selectedInterview.description}
                  </p>
                </div>

                {error && (
                  <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-800 text-sm font-sans">
                    {error}
                  </div>
                )}

                {/* Difficulty Selector */}
                <div className="mb-8">
                  <h4 className="text-sm font-display font-semibold text-text-primary mb-4">
                    Choose Interview Difficulty
                  </h4>
                  <div className="bg-surface-muted border border-border-subtle rounded-xl p-6">
                    <DifficultySelector
                      selectedDifficulty={selectedDifficulty}
                      onSelect={setSelectedDifficulty}
                    />
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="flex justify-end gap-3 border-t border-border-subtle pt-6">
                  <button
                    onClick={handleClose}
                    disabled={isStarting}
                    className="px-5 py-2.5 rounded-xl border border-border-subtle bg-dashboard-card text-text-primary font-display font-semibold text-sm hover:bg-surface-muted disabled:opacity-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleStart}
                    disabled={!selectedDifficulty || isStarting}
                    className="px-6 py-2.5 rounded-xl bg-text-primary hover:bg-black/85 text-white font-display font-bold text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {isStarting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Generating Session...
                      </>
                    ) : (
                      "Start Session"
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
