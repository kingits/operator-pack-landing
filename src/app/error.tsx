'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Something went wrong!</h1>
      <p className="text-gray-500 max-w-md mb-8">
        We encountered an unexpected error. Please try again.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="bg-gray-200 text-gray-800 font-semibold px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
        >
          Try again
        </button>
        <Link 
          href="/operator-pack" 
          className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}