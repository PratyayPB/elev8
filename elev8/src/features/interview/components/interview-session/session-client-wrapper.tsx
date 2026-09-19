"use client";

import { useEffect, useState } from "react";
import { InterviewArtifact } from "../../types";
import { useInterviewSessionStore } from "../../hooks/use-interview-session";
import { SessionContainer } from "./session-container";

import InterviewSessionLoading from "@/app/(dashboard)/dashboard/interviews/[interviewId]/session/loading";

interface SessionClientWrapperProps {
  interviewId: string;
  artifact: InterviewArtifact;
  blobUrl: string;
  durationSeconds: number;
}

export function SessionClientWrapper({ interviewId, artifact, blobUrl, durationSeconds }: SessionClientWrapperProps) {
  const initializeSession = useInterviewSessionStore((state: any) => state.initializeSession);
  const status = useInterviewSessionStore((state: any) => state.status);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    initializeSession(artifact, blobUrl, durationSeconds);
    setIsInitialized(true);
  }, [artifact, blobUrl, durationSeconds, initializeSession]);

  if (status === "NOT_STARTED" || !isInitialized) {
    return <InterviewSessionLoading />;
  }

  return <SessionContainer interviewId={interviewId} />;
}
