"use client";

import { HttpErrorView } from "@/components/errors";

export default function RootError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <HttpErrorView
        error={error}
        reset={reset}
        fallbackRoute="/"
        logPrefix="[RootError]"
      />
    </div>
  );
}
