import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <Link
              href="/"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/demo-streaming"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors"
            >
              Demo Streaming
            </Link>
          </div>
          <div className="flex items-center">
            <h1 className="text-lg font-semibold text-gray-900">
              Next.js 15 Streaming Demo
            </h1>
          </div>
        </div>
      </div>
    </nav>
  );
}
