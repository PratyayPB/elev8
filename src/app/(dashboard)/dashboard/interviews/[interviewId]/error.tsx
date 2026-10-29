"use client";

import React from "react";
import { HttpErrorView } from "@/components/errors";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function InterviewReportError({ error, reset }: ErrorProps) {
  return (
    <HttpErrorView
      error={error}
      reset={reset}
      fallbackRoute="/dashboard/interviews"
      logPrefix="[InterviewReportError]"
    />
  );
}
