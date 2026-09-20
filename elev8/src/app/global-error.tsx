"use client";

import { HttpErrorView } from "@/components/errors";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center bg-background">
        <HttpErrorView
          error={error}
          reset={reset}
          fallbackRoute="/"
          logPrefix="[GlobalError]"
        />
      </body>
    </html>
  );
}
