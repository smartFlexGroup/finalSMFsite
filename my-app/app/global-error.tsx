'use client';

import { useEffect } from 'react';
import { AlertCircle } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4">
          <div className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-8 shadow-lg">
            {/* Error Icon */}
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-red-100 p-3">
                <AlertCircle className="h-8 w-8 text-red-600" />
              </div>
            </div>
            
            {/* Heading */}
            <h2 className="mb-3 text-center text-2xl font-semibold text-gray-900">
              Something went wrong
            </h2>
            
            {/* Error Message */}
            <p className="mb-6 text-center text-gray-600">
              We encountered a critical error. Please try refreshing the page.
            </p>
            
            {/* Try Again Button */}
            <button
              onClick={reset}
              className="w-full rounded-lg bg-primary px-6 py-3 text-white font-medium transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}

