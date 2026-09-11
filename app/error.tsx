'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="p-4 bg-red-900/20 border border-red-500 rounded-lg">
      <h2>Client Render Failed</h2>
      <p>{error.message}</p>
      {/* Re-attempts rendering the broken client component tree */}
      <button onClick={() => reset()} className="px-3 py-1 bg-red-600 rounded">
        Try Again
      </button>
    </div>
  );
}