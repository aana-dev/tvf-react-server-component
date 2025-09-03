import { Suspense } from 'react';
import { getPosts } from '../../lib/api';
import PostsList from '../../components/PostsList';

export default function DemoUseHookPage() {
  // Don't await the data fetching function - pass the promise directly
  const postsPromise = getPosts();

  return (
    <div className="min-h-screen bg-gray-50 pb-12 pt-4">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Streaming with the `use` Hook
          </h1>
          <div className="space-y-4 text-left max-w-3xl mx-auto">
            <p className="text-lg text-gray-600">
              In case we need to integrate streaming with client components, use
              the React{' '}
              <code className="bg-gray-100 px-2 py-1 rounded">use</code> hook.
            </p>
            <p className="text-lg text-gray-600">
              Behind the scene, streaming works the same.
            </p>
            <p className="text-base text-gray-600">
              This pattern allows you to start data fetching in a Server
              Component and consume it in a Client Component. The Server
              Component passes a promise (without awaiting it) to the Client
              Component, which uses the{' '}
              <code className="bg-gray-100 px-2 py-1 rounded">use</code> hook to
              read the promise.
            </p>
          </div>
        </div>

        {/* Live Demo */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <Suspense
            fallback={
              <div className="space-y-4">
                <div className="text-center py-8">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                  <p className="mt-2 text-gray-600">
                    Loading posts from API...
                  </p>
                </div>
              </div>
            }
          >
            <PostsList postsPromise={postsPromise} />
          </Suspense>
        </div>

        {/* Key Benefits */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            Key Benefits
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>• Start data fetching early in Server Components</li>
            <li>• Stream data to Client Components that need interactivity</li>
            <li>
              • Maintain the benefits of both Server and Client Components
            </li>
            <li>
              • Suspense boundaries work seamlessly with the{' '}
              <code className="bg-white px-1 rounded">use</code> hook
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
