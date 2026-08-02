'use client';

export default function GlobalError({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _error,
  reset,
}: {
  _error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen gap-4">
          <h2>Global Error</h2>
          <button onClick={() => reset()} className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
