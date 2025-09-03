import { Suspense } from 'react';
import PeterPanCard from '../../components/PeterPanCard';
import TinkerBellCard from '../../components/TinkerBellCard';
import HarryPotterCard from '../../components/HarryPotterCard';
import LoadingSkeleton from '../../components/LoadingSkeleton';

export default function DemoStreamingPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            User Catalog - Streaming Demo
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch as all three card positions are always visible in one row,
            with loading skeletons transforming into actual content at different
            times! This demonstrates Next.js 15's React Server Components with
            Suspense boundaries.
          </p>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg max-w-3xl mx-auto">
            <p className="text-sm text-blue-800">
              <strong>Demo Details:</strong> All three positions start as
              loading skeletons. Peter Pan transforms in 1s, Tinker Bell in 2s,
              and Harry Potter in 3s. Each component uses local images and
              server-side delays to simulate real API calls.
            </p>
          </div>
        </div>

        {/* User Cards Flex Row */}
        <div className="grid grid-cols-3 gap-8 items-start justify-center">
          {/* Peter Pan Card - 1 second delay */}
          <div className="flex-shrink-0">
            <Suspense fallback={<LoadingSkeleton />}>
              <PeterPanCard />
            </Suspense>
          </div>

          {/* Tinker Bell Card - 2 seconds delay */}
          <div className="flex-shrink-0">
            <Suspense fallback={<LoadingSkeleton />}>
              <TinkerBellCard />
            </Suspense>
          </div>

          {/* Harry Potter Card - 3 seconds delay */}
          <div className="flex-shrink-0">
            <Suspense fallback={<LoadingSkeleton />}>
              <HarryPotterCard />
            </Suspense>
          </div>
        </div>

        {/* Information Section */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            How This Demo Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Server Components
              </h3>
              <p className="text-gray-600 text-sm">
                Each user card is a React Server Component that includes an
                artificial delay
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Suspense Boundaries
              </h3>
              <p className="text-gray-600 text-sm">
                Each card is wrapped in a Suspense boundary with a loading
                skeleton
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Streaming</h3>
              <p className="text-gray-600 text-sm">
                Components stream in as they finish loading, showing the power
                of React 18
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
