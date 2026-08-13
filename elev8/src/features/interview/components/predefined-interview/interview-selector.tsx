"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { fetchPredefinedCatalog, startPredefinedInterview } from "../../actions/predefined-actions";
import { PredefinedInterviewSummary, PredefinedDifficulty } from "../../types/predefined-interview";
import { RoleSelector } from "./role-selector";
import { DifficultySelector } from "./difficulty-selector";
import { InterviewPreview } from "./interview-preview";
import { Loader2, ArrowLeft } from "lucide-react";

export function PredefinedInterviewSelector() {
  const router = useRouter();
  
  const [catalog, setCatalog] = useState<PredefinedInterviewSummary[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<PredefinedDifficulty | null>(null);
  
  const [isStarting, setIsStarting] = useState(false);

  useEffect(() => {
    async function loadCatalog() {
      try {
        const data = await fetchPredefinedCatalog();
        setCatalog(data);
      } catch (err: any) {
        setError(err.message || "Failed to load interview catalog");
      } finally {
        setIsLoading(false);
      }
    }
    loadCatalog();
  }, []);

  const handleStart = async () => {
    if (!selectedId || !selectedDifficulty) return;
    
    setIsStarting(true);
    setError(null);
    try {
      const result = await startPredefinedInterview(selectedId, selectedDifficulty);
      router.push(`/dashboard/interviews/${result.interviewId}/session`);
    } catch (err: any) {
      setError(err.message || "Failed to start interview");
      setIsStarting(false);
    }
  };

  const selectedInterview = catalog.find((c) => c.id === selectedId);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <Loader2 className="w-10 h-10 animate-spin text-text-primary mb-4" />
        <p className="text-text-secondary font-sans">Loading interview catalog...</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {error && (
        <div className="mb-6 p-4 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 font-sans">
          {error}
        </div>
      )}

      {/* Step 1: Select Role */}
      {!selectedId && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h2 className="text-xl font-display font-bold text-text-primary mb-6 flex items-center">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-surface-muted border border-border-subtle text-text-secondary mr-3 text-sm font-semibold">1</span>
            Select a Role
          </h2>
          <RoleSelector 
            catalog={catalog} 
            selectedId={selectedId} 
            onSelect={setSelectedId} 
          />
        </div>
      )}

      {/* Step 2: Select Difficulty */}
      {selectedId && !selectedDifficulty && (
        <div className="animate-in fade-in slide-in-from-right-8 duration-500">
          <button 
            onClick={() => setSelectedId(null)}
            className="flex items-center text-sm font-display font-semibold text-text-secondary hover:text-text-primary mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to roles
          </button>
          
          <h2 className="text-xl font-display font-bold text-text-primary mb-6 flex items-center">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-surface-muted border border-border-subtle text-text-secondary mr-3 text-sm font-semibold">2</span>
            Select Difficulty
          </h2>
          <DifficultySelector 
            selectedDifficulty={selectedDifficulty} 
            onSelect={setSelectedDifficulty} 
          />
        </div>
      )}

      {/* Step 3: Preview & Start */}
      {selectedId && selectedDifficulty && selectedInterview && (
        <div className="animate-in fade-in slide-in-from-right-8 duration-500">
          <button 
            onClick={() => setSelectedDifficulty(null)}
            className="flex items-center text-sm font-display font-semibold text-text-secondary hover:text-text-primary mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to difficulty
          </button>

          <InterviewPreview 
            interview={selectedInterview} 
            difficulty={selectedDifficulty} 
            isStarting={isStarting}
            onStart={handleStart}
          />
        </div>
      )}
    </div>
  );
}
