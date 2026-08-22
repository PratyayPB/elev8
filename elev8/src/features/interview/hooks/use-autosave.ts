import { useState, useCallback, useRef } from "react";
import { saveSessionProgress } from "../actions/session-actions";
import { useInterviewSessionStore } from "./use-interview-session";

export type AutosaveStatus = "idle" | "saving" | "saved" | "error";

export function useAutosave(interviewId: string) {
  const { artifact, blobUrl, setBlobUrl, durationSeconds } = useInterviewSessionStore();
  const [status, setStatus] = useState<AutosaveStatus>("idle");
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const save = useCallback(async () => {
    if (!artifact || !blobUrl) return;

    setStatus("saving");
    try {
      const newBlobUrl = await saveSessionProgress(interviewId, blobUrl, artifact, durationSeconds);
      setBlobUrl(newBlobUrl);
      setStatus("saved");
      
      // Reset to idle after a few seconds
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error("Autosave failed:", error);
      setStatus("error");
    }
  }, [artifact, blobUrl, interviewId, setBlobUrl]);

  const debouncedSave = useCallback(() => {
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }
    
    // We delay the actual save call to prevent rapid successive saves
    // However, for explicit triggers like 'Next' or 'Pause', calling `save()` directly is preferred.
    saveTimeoutRef.current = setTimeout(() => {
      save();
    }, 2000);
  }, [save]);

  return { status, save, debouncedSave };
}
