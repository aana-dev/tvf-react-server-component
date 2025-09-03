// API utility functions for demo
export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export function getPosts(): Promise<Post[]> {
  // Don't await here - return the promise directly
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
      if (!res.ok) throw new Error('Failed to fetch posts');
      return res.json();
    })
    .then((posts) => posts.slice(0, 5)); // Only first 5 posts for demo
}
