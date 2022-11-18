import React, { ContextType } from 'react';
import { dehydrate, Query, QueryCache, QueryClient, useQuery } from 'react-query';
import Post from '../../components/Post';
import CommentBox from '../../components/CommentBox';
import Comments from '../../components/Comments';
import { fetchPost, fetchPosts } from '../../api/posts';
import { useRouter } from 'next/router';
import { usePost } from '../../hooks/usePost';

export const getServerSideProps = async (context: any) => {
    const { id, url }: Record<string, string> = context.query;

    const queryClient = new QueryClient()

    // prefetch data on the server
    await queryClient.prefetchQuery(['post', id], fetchPost(url));

    return {
        props: {
            // dehydrate query cache
            dehydratedState: dehydrate(queryClient),
        },
    }
}

interface PostPage {
  postId: string;
}

const selector = (data: any) => {
  return {
    post: data[0]?.data?.children[0]?.data,
    comments: data[1]?.data?.children.map((child: any) => child.data),
  }
};

function PostPage() {
  const { query: { id, url } }= useRouter();

  const { data, isLoading } = usePost(id, url, {select: selector, enabled: false});

  if (isLoading) return <div>Loading...</div>;

  const { post, comments } = data;

  return (
    <div className="max-w-2xl m-auto my-10">
      <Post post={post}>
        <CommentBox />
        <Comments comments={comments} />
      </Post>
    </div>
  );
}

export default PostPage;
