'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()} className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
        Try again
      </button>
    </div>
  );
}
