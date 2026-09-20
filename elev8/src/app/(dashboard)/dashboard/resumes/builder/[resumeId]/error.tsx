"use client";

import React from "react";
import { HttpErrorView } from "@/components/errors";
import { BUILDER_ROUTES } from "@/features/resume-builder/constants/builder-routes";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ResumeEditorError({ error, reset }: ErrorProps) {
  return (
    <HttpErrorView
      error={error}
      reset={reset}
      fallbackRoute={BUILDER_ROUTES.HOME}
      logPrefix="[ResumeEditorError]"
    />
  );
}
