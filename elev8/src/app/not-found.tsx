import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 text-center">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p>Could not find requested resource</p>
      <Link href="/" className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
        Return Home
      </Link>
    </div>
  );
}
