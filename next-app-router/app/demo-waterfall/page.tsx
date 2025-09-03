import { Suspense } from 'react';
import ClientWaterfall from '../../components/ClientWaterfall';
import ServerEfficient from '../../components/ServerEfficient';

export default function WaterfallDemoPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-12 pt-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Expensive Client-Server Waterfall
          </h1>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-left max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">⚠</span>
                  </div>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p className="font-semibold text-gray-900">
                    The Problem: Client-Server Waterfall
                  </p>
                  <p>
                    When using Client Components to fetch data, each component
                    must wait for the previous one to complete before starting
                    its own fetch request. This creates a "waterfall" effect
                    that significantly increases loading times.
                  </p>
                  <div className="bg-red-50 border border-red-200 rounded p-3">
                    <p className="text-red-800 font-medium">
                      Client Components (Slow):
                    </p>
                    <p className="text-red-700 text-sm">
                      Fetch Posts → Wait → Fetch Comments → Done
                    </p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded p-3">
                    <p className="text-green-800 font-medium">
                      Server Components (Fast):
                    </p>
                    <p className="text-green-700 text-sm">
                      Fetch Posts → Fetch Comments → Done (on server)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Comparison */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Live Performance Comparison
            </h2>
            <p className="text-gray-600 mb-6">
              Both versions fetch the same data (Posts + Comments) from
              JSONPlaceholder API
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {/* Client Component Version (Waterfall) */}
            <div>
              <h3 className="text-xl font-semibold text-red-800 mb-4 text-center">
                ❌ Client Components (Waterfall Problem)
              </h3>
              <ClientWaterfall />
            </div>

            {/* Server Component Version (Efficient) */}
            <div>
              <h3 className="text-xl font-semibold text-green-800 mb-4 text-center">
                ✅ Server Components (Efficient)
              </h3>
              <Suspense
                fallback={
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center space-x-2 text-green-700">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-500"></div>
                      <span>Fetching all data on server...</span>
                    </div>
                  </div>
                }
              >
                <ServerEfficient />
              </Suspense>
            </div>
          </div>

          {/* Code Comparison */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Code Comparison
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Client Code */}
              <div>
                <h4 className="font-medium text-red-800 mb-3">
                  ❌ Client Components (Waterfall)
                </h4>
                <pre className="bg-red-50 p-4 rounded text-sm overflow-x-auto border border-red-200">
                  {`// Each component waits for previous
function PostsList() {
  useEffect(() => {
    fetch('/api/posts').then(setPosts);
  }, []);
}

function PostComments({ posts }) {
  useEffect(() => {
    if (!posts.length) return; // ⚠️ WAITS!
    fetch('/api/comments').then(setComments);
  }, [posts]);
}`}
                </pre>
              </div>

              {/* Server Code */}
              <div>
                <h4 className="font-medium text-green-800 mb-3">
                  ✅ Server Components (Parallel)
                </h4>
                <pre className="bg-green-50 p-4 rounded text-sm overflow-x-auto border border-green-200">
                  {`// All data fetched efficiently on server
async function ServerComponent() {
  // Fetch posts first
  const posts = await fetch('/api/posts');
  
  // Then fetch dependent data
  const comments = await fetch(
    \`/api/comments?postId=\${posts[0].id}\`
  );
  
  return <div>All data ready!</div>;
}`}
                </pre>
              </div>
            </div>
          </div>

          {/* Solution Summary */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-900 mb-3">
              🎯 The Solution: Server Components
            </h3>
            <div className="space-y-2 text-green-800">
              <p>✅ Fetch data in parallel on the server</p>
              <p>✅ Send complete HTML to the client</p>
              <p>✅ Eliminate client-server waterfalls</p>
              <p>✅ Faster loading and better user experience</p>
            </div>
            <p className="text-green-700 mt-3 font-medium">
              Use Server Components for data fetching, Client Components for
              interactivity!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
