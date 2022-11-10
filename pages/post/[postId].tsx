import React from 'react';
import Post from '../../components/Post';
import CommentBox from '../../components/CommentBox';
import Comments from '../../components/Comments';
import { useQuery } from 'react-query';

interface PostPage {
  postURL: string;
}
function PostPage({ postURL }: PostPage) {
  const { isLoading, error, data } = useQuery(
    'posts',
    () => fetch(`https://www.reddit.com${postURL}.json`).then((res) => res.json()),
    {
      select: React.useCallback(
        (data: any) => ({
          post: data[0].data.children[0].data,
          comments: data[1].data.children.map((child: any) => child.data),
        }),
        [],
      ),
    },
  );

  if (isLoading) return <div>Loading...</div>;
  // console.log(data);

  const { post, comments } = { ...data };

  return (
    <div className="max-w-2xl m-auto my-10">
      <Post post={post}>
        <CommentBox />
        <Comments comments={comments} />
      </Post>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  return {
    props: {
      postURL: context.query.postId.replaceAll('-', '/'), //pass it to the page props
    },
  };
}

export default PostPage;
