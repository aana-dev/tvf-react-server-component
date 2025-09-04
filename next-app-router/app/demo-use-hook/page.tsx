import { Suspense } from 'react';
import {
  getPeterPanData,
  getTinkerBellData,
  getHarryPotterData,
} from '../../lib/character-api';
import UseHookCharacterCard from '../../components/UseHookCharacterCard';
import LoadingSkeleton from '../../components/LoadingSkeleton';

export default function DemoUseHookPage() {
  // Don't await the data fetching functions - pass promises directly
  const peterPanPromise = getPeterPanData();
  const tinkerBellPromise = getTinkerBellData();
  const harryPotterPromise = getHarryPotterData();

  return (
    <div className="min-h-screen bg-gray-50 pb-12 pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            User Catalog - Streaming with `use` Hook
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch as components stream in horizontally with different loading
            times using the React{' '}
            <code className="bg-gray-100 px-2 py-1 rounded">use</code> hook!
          </p>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg max-w-3xl mx-auto">
            <p className="text-sm text-blue-800">
              <strong>Demo Details:</strong> In case we need to integrate
              streaming with client components, use the React{' '}
              <code className="bg-gray-100 px-1 py-0.5 rounded">use</code> hook.
              Behind the scene, streaming works the same. Peter Pan loads in 1s,
              Tinker Bell in 2s, and Harry Potter in 3s.
            </p>
            <p className="text-sm text-blue-700 mt-2">
              💡 <strong>Notice:</strong> These cards are labeled as "Client
              Components" and have interactive buttons you can click -
              demonstrating how the{' '}
              <code className="bg-gray-100 px-1 py-0.5 rounded">use</code> hook
              enables both streaming and interactivity!
            </p>
          </div>
        </div>

        {/* Character Cards Flex Row */}
        <div className="grid grid-cols-3 gap-8 items-start justify-center flex-wrap">
          {/* Peter Pan Card - 1 second delay */}
          <div className="flex-shrink-0">
            <Suspense fallback={<LoadingSkeleton />}>
              <UseHookCharacterCard characterPromise={peterPanPromise} />
            </Suspense>
          </div>

          {/* Tinker Bell Card - 2 seconds delay */}
          <div className="flex-shrink-0">
            <Suspense fallback={<LoadingSkeleton />}>
              <UseHookCharacterCard characterPromise={tinkerBellPromise} />
            </Suspense>
          </div>

          {/* Harry Potter Card - 3 seconds delay */}
          <div className="flex-shrink-0">
            <Suspense fallback={<LoadingSkeleton />}>
              <UseHookCharacterCard characterPromise={harryPotterPromise} />
            </Suspense>
          </div>
        </div>

        {/* Information Section */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            How the `use` Hook Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Server Creates Promises
              </h3>
              <p className="text-gray-600 text-sm">
                Server Component creates promises without awaiting them
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Client Uses `use` Hook
              </h3>
              <p className="text-gray-600 text-sm">
                Client Component uses the `use` hook to read promises
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Streaming Works
              </h3>
              <p className="text-gray-600 text-sm">
                Components stream in as promises resolve, just like Server
                Components
              </p>
            </div>
          </div>

          {/* Code Pattern */}
          <div className="mt-8 bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Code Pattern</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  Server Component:
                </h4>
                <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
                  {`// Don't await - pass promise directly
const characterPromise = getCharacterData();

return (
  <Suspense fallback={<Loading />}>
    <CharacterCard 
      characterPromise={characterPromise} 
    />
  </Suspense>
);`}
                </pre>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  Client Component:
                </h4>
                <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
                  {`'use client';
import { use } from 'react';

function CharacterCard({ characterPromise }) {
  const character = use(characterPromise);
  
  return <div>{character.name}</div>;
}`}
                </pre>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="mt-6 bg-blue-50 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Key Benefits</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>✅ Start data fetching early in Server Components</li>
              <li>
                ✅ Stream data to Client Components that need interactivity
              </li>
              <li>
                ✅ Maintain the benefits of both Server and Client Components
              </li>
              <li>
                ✅ Suspense boundaries work seamlessly with the{' '}
                <code className="bg-white px-1 rounded">use</code> hook
              </li>
              <li>
                ✅ Enable client-side interactivity (state, event handlers)
                while preserving streaming
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
