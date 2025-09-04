import { someReallyBigFunc } from '@/lib/big-func';

export default function BasicServerPage() {
  const serverTime = new Date().toISOString();

  someReallyBigFunc();

  console.log('Hello from the server');

  return (
    <div className="min-h-screen bg-gray-50 pb-12 pt-4">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Basic Server Components
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Understanding the fundamentals of React Server Components
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* What are Server Components */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What are Server Components?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Server Components are React components that run exclusively on the
              server. They render to HTML during the build process or on each
              request, depending on your deployment strategy. They have access
              to server-side resources like databases, file systems, and APIs
              without exposing sensitive data to the client.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This page was rendered on the server at:{' '}
              <strong>{serverTime}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
