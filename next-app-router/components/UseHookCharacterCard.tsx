'use client';

import { use, useState } from 'react';
import Image from 'next/image';
import type { Character } from '../lib/character-api';

interface UseHookCharacterCardProps {
  characterPromise: Promise<Character>;
}

export default function UseHookCharacterCard({
  characterPromise,
}: UseHookCharacterCardProps) {
  // Use the `use` hook to read the promise
  const character = use(characterPromise);

  // Client-side state for interactivity
  const [clickCount, setClickCount] = useState(0);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm transform transition-transform duration-200 hover:scale-105 relative">
      {/* Client Component Tag */}
      <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full shadow-lg">
        Client Component
      </div>
      {/* Avatar and Interactive Button */}
      <div className="flex justify-center mb-4 relative">
        <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200">
          <Image
            src={character.avatarUrl}
            alt={`${character.name} avatar`}
            fill
            className="object-cover"
            sizes="80px"
          />
        </div>
        {/* Interactive Circle Button */}
        <button
          onClick={() => setClickCount((prev) => prev + 1)}
          className="absolute -top-1 -right-1 w-8 h-8 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-lg transition-colors duration-200 transform hover:scale-110"
          title="Click to increment (demonstrates client interactivity)"
        >
          {clickCount}
        </button>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
        {character.name}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-center text-sm leading-relaxed mb-4">
        {character.description}
      </p>

      {/* Action Button */}
      <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200 font-medium">
        View Profile
      </button>
    </div>
  );
}
