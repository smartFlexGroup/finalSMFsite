import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4">
      <div className="text-center">
        {/* Large 404 */}
        <h1 className="mb-4 text-9xl font-bold text-primary">404</h1>
        
        {/* Heading */}
        <h2 className="mb-3 text-3xl font-semibold text-gray-900">
          Page not found
        </h2>
        
        {/* Subtext */}
        <p className="mb-8 text-gray-600 max-w-md mx-auto">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        
        {/* Return Home Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-white font-medium transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          <Home className="h-5 w-5" />
          Return Home
        </Link>
      </div>
    </div>
  );
}

