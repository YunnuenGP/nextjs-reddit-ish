import type { NextPage } from 'next';
import Head from 'next/head';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import Feed from '../components/Feed';
import PostBox from '../components/PostBox';
import { fetchPosts } from '../api/posts';

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['posts'], fetchPosts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

// const _fetchPost = () => fetch("https://www.reddit.com/r/all.json").then(res => res.json());

const Home: NextPage = () => {
  const { data } = useQuery('posts', fetchPosts, {
    select: (data) => data.data.children.map((post: any) => post.data),
  });

  console.log('Home', data);

  return (
    <div className="max-w-2xl mx-auto">
      <Head>
        <title>Reddit-ish</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostBox />
      <Feed posts={data} />
    </div>
  );
};

export default Home;
