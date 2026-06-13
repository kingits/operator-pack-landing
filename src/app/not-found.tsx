import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-black text-gray-900 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-gray-700 mb-6">Page not found</h2>
      <p className="text-gray-500 max-w-md mb-8">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link 
        href="/operator-pack" 
        className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Return to Operator Pack
      </Link>
    </div>
  );
}