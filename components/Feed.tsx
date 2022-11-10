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
              url: post.permalink,
            },
          }}
          as={`post/${post.permalink.replaceAll('/', '-')}`}
        >
          <Post post={post} />
        </Link>
      ))}
    </div>
  );
}

export default Feed;
