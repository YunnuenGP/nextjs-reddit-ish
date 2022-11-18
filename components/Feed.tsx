import Link from 'next/link';
import React from 'react';
import Post from './Post';

interface FeedProps {
  posts: Post[];
}

function Feed({ posts }: FeedProps) {
  return (
    <div className="flex flex-col mt-5 space-y-4">
      {posts?.map((post) => (
        <Link
          key={post.id}
          href={{
            pathname: 'post/[id]',
            query: {
              id: post.id,
              url: post.permalink,
            },
          }}
        >
          <Post post={post} />
        </Link>
      ))}
    </div>
  );
}

export default Feed;
