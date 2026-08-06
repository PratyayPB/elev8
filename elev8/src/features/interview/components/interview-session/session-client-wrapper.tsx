"use client";

import { useEffect, useRef } from "react";
import { InterviewArtifact } from "../../types";
import { useInterviewSessionStore } from "../../hooks/use-interview-session";
import { SessionContainer } from "./session-container";

interface SessionClientWrapperProps {
  interviewId: string;
  artifact: InterviewArtifact;
  blobUrl: string;
}

export function SessionClientWrapper({ interviewId, artifact, blobUrl }: SessionClientWrapperProps) {
  const initializeSession = useInterviewSessionStore((state: any) => state.initializeSession);
  const status = useInterviewSessionStore((state: any) => state.status);
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initializeSession(artifact, blobUrl);
      initialized.current = true;
    }
  }, [artifact, blobUrl, initializeSession]);

  if (status === "NOT_STARTED" || !initialized.current) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return <SessionContainer interviewId={interviewId} />;
}
