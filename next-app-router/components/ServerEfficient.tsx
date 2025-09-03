// Server Component - all data fetched efficiently on server

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

async function fetchData() {
  const startTime = Date.now();

  // Fetch posts
  const postsResponse = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=10'
  );
  const posts: Post[] = await postsResponse.json();

  // Fetch comments for first post in parallel (could be parallel if we had multiple posts)
  const commentsResponse = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${posts[0]?.id}`
  );
  const comments: Comment[] = await commentsResponse.json();

  const totalTime = Date.now() - startTime;

  return { posts, comments, totalTime };
}

export default async function ServerEfficient() {
  const { posts, comments, totalTime } = await fetchData();

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-green-800">
          ⚡ Server Components (Efficient)
        </h3>
        <div className="text-sm text-green-600">Total: {totalTime}ms</div>
      </div>

      <div className="mb-4 p-3 bg-green-100 rounded text-sm text-green-800">
        <strong>Solution:</strong> All data fetched efficiently on the server,
        then sent to client as complete HTML.
      </div>

      <div className="space-y-4">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="text-green-700">
            <strong>✓ Posts Data:</strong> Found {posts.length} posts
          </div>
          <div className="mt-2 text-sm text-green-600">
            <strong>First Post:</strong> "{posts[0]?.title}"
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="text-green-700">
            <strong>✓ Comments Data:</strong> Found {comments.length} comments
            for first post
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-green-200 rounded text-sm text-green-800">
        <strong>Result:</strong> All data fetched efficiently on server!
        <br />
        <strong>Total Time:</strong> {totalTime}ms (much faster!)
      </div>
    </div>
  );
}
