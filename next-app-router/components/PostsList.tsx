'use client';

import { use } from 'react';
import type { Post } from '../lib/api';

interface PostsListProps {
  postsPromise: Promise<Post[]>;
}

export default function PostsList({ postsPromise }: PostsListProps) {
  // Use the `use` hook to read the promise
  const posts = use(postsPromise);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">Posts from API</h2>
      <ul className="space-y-3">
        {posts.slice(0, 3).map((post) => (
          <li
            key={post.id}
            className="border border-gray-200 rounded-lg p-4 bg-white"
          >
            <h3 className="font-medium text-gray-900 mb-2">
              {post.id}. {post.title}
            </h3>
            <p className="text-gray-600 text-sm">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
