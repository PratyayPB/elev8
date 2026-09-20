"use client";

import React from "react";
import { HttpErrorView } from "@/components/errors";

interface ProgressErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ProgressError({ error, reset }: ProgressErrorProps) {
  return (
    <HttpErrorView
      error={error}
      reset={reset}
      fallbackRoute="/dashboard"
      logPrefix="[ProgressError]"
    />
  );
}
