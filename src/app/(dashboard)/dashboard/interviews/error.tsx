"use client";

import React from "react";
import { HttpErrorView } from "@/components/errors";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function InterviewWorkspaceError({ error, reset }: ErrorProps) {
  return (
    <HttpErrorView
      error={error}
      reset={reset}
      fallbackRoute="/dashboard"
      logPrefix="[InterviewWorkspaceError]"
    />
  );
}
