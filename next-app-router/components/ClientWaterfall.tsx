'use client';

import { useState, useEffect, useCallback } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
  postId: number;
}

// Step 1: Fetch Posts (waits for this to complete before next step)
function PostsList({
  onPostsLoaded,
}: {
  onPostsLoaded: (posts: Post[]) => void;
}) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [startTime] = useState(Date.now());

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=10'
      );
      const postsData = await response.json();
      setPosts(postsData);
      setLoading(false);
      onPostsLoaded(postsData);
    };

    fetchPosts();
  }, []); // Empty dependency array - only run once on mount

  if (loading) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-500"></div>
          <span className="text-red-700">Step 1: Loading posts...</span>
          <span className="text-xs text-red-600">
            ({Date.now() - startTime}ms)
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
      <div className="text-red-700">
        <strong>✓ Step 1 Complete:</strong> Found {posts.length} posts
        <span className="text-xs ml-2">({Date.now() - startTime}ms)</span>
      </div>
      <div className="mt-2 text-sm text-red-600">
        <strong>First Post:</strong> "{posts[0]?.title}"
      </div>
    </div>
  );
}

// Step 2: Fetch Comments (only starts AFTER posts are loaded)
function PostComments({ posts }: { posts: Post[] }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);

  useEffect(() => {
    if (posts.length === 0) return;

    const fetchComments = async () => {
      setStartTime(Date.now());
      setLoading(true);
      // Get comments for the first post
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${posts[0].id}`
      );
      const commentsData = await response.json();
      setComments(commentsData);
      setLoading(false);
    };

    fetchComments();
  }, [posts]);

  if (posts.length === 0) return null;

  if (loading && startTime) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-500"></div>
          <span className="text-red-700">Step 2: Loading comments...</span>
          <span className="text-xs text-red-600">
            ({Date.now() - startTime}ms)
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
      <div className="text-red-700">
        <strong>✓ Step 2 Complete:</strong> Found {comments.length} comments for
        first post
        <span className="text-xs ml-2">
          ({startTime && Date.now() - startTime}ms)
        </span>
      </div>
      <div className="mt-2 text-sm text-red-600">
        <strong>First Post:</strong> "{posts[0].title}"
      </div>
    </div>
  );
}

// Main Client Component that orchestrates the waterfall
export default function ClientWaterfall() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [totalStartTime] = useState(Date.now());

  const handlePostsLoaded = useCallback((postsData: Post[]) => {
    setPosts(postsData);
  }, []);

  const isComplete = posts.length > 0;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-red-800">
          🐌 Client Components (Waterfall)
        </h3>
        <div className="text-sm text-red-600">
          Total: {Date.now() - totalStartTime}ms
        </div>
      </div>

      <div className="mb-4 p-3 bg-red-100 rounded text-sm text-red-800">
        <strong>Problem:</strong> Each component must wait for the previous one
        to complete before starting its fetch.
      </div>

      <PostsList onPostsLoaded={handlePostsLoaded} />
      <PostComments posts={posts} />

      {isComplete && (
        <div className="mt-4 p-3 bg-red-200 rounded text-sm text-red-800">
          <strong>Result:</strong> Sequential loading creates expensive
          waterfall effect!
          <br />
          <strong>Total Time:</strong> {Date.now() - totalStartTime}ms
        </div>
      )}
    </div>
  );
}
