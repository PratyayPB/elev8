import { useState, useCallback, useRef } from "react";
import { saveSessionProgress } from "../actions/session-actions";
import { useInterviewSessionStore } from "./use-interview-session";

export type AutosaveStatus = "idle" | "saving" | "saved" | "error";

export function useAutosave(interviewId: string) {
  const [status, setStatus] = useState<AutosaveStatus>("idle");
  const isSavingRef = useRef(false);
  const statusTimerRef = useRef<NodeJS.Timeout | null>(null);

  const save = useCallback(async () => {
    const state = useInterviewSessionStore.getState();
    const { artifact, blobUrl, setBlobUrl, durationSeconds } = state;
    if (!artifact || !blobUrl || isSavingRef.current) return;

    isSavingRef.current = true;
    setStatus("saving");
    try {
      const res = await saveSessionProgress(interviewId, blobUrl, artifact, durationSeconds);
      if (res.success) {
        setBlobUrl(res.data);
        setStatus("saved");
      } else {
        setStatus("error");
      }

      if (statusTimerRef.current) {
        clearTimeout(statusTimerRef.current);
      }
      statusTimerRef.current = setTimeout(() => {
        setStatus("idle");
      }, 3000);
    } catch (error) {
      console.error("Autosave failed:", error);
      setStatus("error");
    } finally {
      isSavingRef.current = false;
    }
  }, [interviewId]);

  return { status, save };
}
