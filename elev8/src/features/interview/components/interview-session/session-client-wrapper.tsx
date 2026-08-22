"use client";

import { useEffect, useRef } from "react";
import { InterviewArtifact } from "../../types";
import { useInterviewSessionStore } from "../../hooks/use-interview-session";
import { SessionContainer } from "./session-container";

interface SessionClientWrapperProps {
  interviewId: string;
  artifact: InterviewArtifact;
  blobUrl: string;
  durationSeconds: number;
}

export function SessionClientWrapper({ interviewId, artifact, blobUrl, durationSeconds }: SessionClientWrapperProps) {
  const initializeSession = useInterviewSessionStore((state: any) => state.initializeSession);
  const status = useInterviewSessionStore((state: any) => state.status);
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initializeSession(artifact, blobUrl, durationSeconds);
      initialized.current = true;
    }
  }, [artifact, blobUrl, durationSeconds, initializeSession]);

  if (status === "NOT_STARTED" || !initialized.current) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-text-primary"></div>
      </div>
    );
  }

  return <SessionContainer interviewId={interviewId} />;
}
