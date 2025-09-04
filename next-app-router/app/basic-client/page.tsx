'use client';

import { useState } from 'react';
import { someReallyBigFunc } from '@/lib/big-func';

export default function BasicClientPage() {
  const [count, setCount] = useState(0);

  someReallyBigFunc();

  console.log('Hello from the client');

  return (
    <div className="min-h-screen bg-gray-50 pb-12 pt-4">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Basic Client Components
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Understanding the fundamentals of React Client Components
          </p>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg max-w-2xl mx-auto">
            <p className="text-sm text-blue-800">
              <strong>Notice:</strong> This entire page is a Client Component
              (see the 'use client' directive at the top)
            </p>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Interactive Demo */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Interactive Demo
            </h2>
            <div className="flex items-center space-x-4 mb-6">
              <button
                onClick={() => setCount(count - 1)}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
              >
                -
              </button>
              <div className="text-2xl font-bold text-gray-800 min-w-[60px] text-center">
                {count}
              </div>
              <button
                onClick={() => setCount(count + 1)}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
              >
                +
              </button>
              <button
                onClick={() => setCount(0)}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
              >
                Reset
              </button>
            </div>
            <p className="text-gray-600 text-sm">
              Try clicking the buttons above! This demonstrates client-side
              interactivity using useState and onClick handlers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
