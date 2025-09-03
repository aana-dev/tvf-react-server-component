import StaticContent from '../../components/StaticContent';
import DynamicContent from '../../components/DynamicContent';

export default function StaticDynamicDemoPage() {
  const requestTime = new Date().toISOString();
  const randomId = Math.random().toString(36).substring(7);

  return (
    <div className="min-h-screen bg-gray-50 pb-12 pt-4">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Server Components Don't Require a Server
          </h1>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-left max-w-3xl mx-auto">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">i</span>
                </div>
              </div>
              <div className="space-y-3 text-gray-700">
                <p className="font-semibold text-gray-900">
                  Server Side Rendering is an "umbrella term" for different
                  rendering strategies:
                </p>
                <div className="space-y-2 ml-4">
                  <p>
                    <span className="text-blue-600 font-medium">→ Static:</span>{' '}
                    HTML is generated when the application is built, during the
                    deploy process.
                  </p>
                  <p>
                    <span className="text-blue-600 font-medium">
                      → Dynamic:
                    </span>{' '}
                    HTML is generated "on-demand", when the page is requested by
                    the user.
                  </p>
                </div>
                <p className="mt-4">
                  <strong>
                    React Server Components are compatible with either strategy.
                  </strong>{' '}
                  When Server Components are rendered in the Node.js runtime,
                  the JavaScript objects they return will be created either
                  on-demand or during the build.
                </p>
                <p className="mt-3 bg-yellow-50 border border-yellow-200 rounded p-3">
                  This means it's possible to use React Server Components{' '}
                  <strong>without a server!</strong> We can generate static HTML
                  files and host them wherever we want. This is what happens{' '}
                  <em>by default</em> in Next.js App Router.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Live Demonstration */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Displaying the timestamp and random ID of the server
            </h2>
            <p className="">
              <strong>Generated at:</strong> {requestTime}
            </p>
            <p className="">
              <strong>Random ID:</strong> {randomId}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Static Component */}
            <StaticContent />

            {/* Dynamic Component */}
            <DynamicContent />
          </div>

          {/* When to Use Each */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              When to Use Each Strategy
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Static Use Cases */}
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-medium text-green-800 mb-3">
                  Use Static Generation For:
                </h4>
                <ul className="space-y-2 text-green-700 text-sm">
                  <li>• Marketing pages</li>
                  <li>• Blog posts</li>
                  <li>• Documentation</li>
                  <li>• Product catalogs</li>
                  <li>• Any content that doesn't change per user</li>
                </ul>
                <div className="mt-3 p-2 bg-green-100 rounded text-xs text-green-800">
                  <strong>Benefits:</strong> Fastest possible loading, can host
                  anywhere (CDN, GitHub Pages, etc.), no server costs
                </div>
              </div>

              {/* Dynamic Use Cases */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-3">
                  Use Dynamic Generation For:
                </h4>
                <ul className="space-y-2 text-blue-700 text-sm">
                  <li>• User dashboards</li>
                  <li>• Personalized content</li>
                  <li>• Real-time data</li>
                  <li>• User-specific pages</li>
                  <li>• Content that changes frequently</li>
                </ul>
                <div className="mt-3 p-2 bg-blue-100 rounded text-xs text-blue-800">
                  <strong>Benefits:</strong> Fresh data on every request,
                  personalized content, access to request-time information
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
