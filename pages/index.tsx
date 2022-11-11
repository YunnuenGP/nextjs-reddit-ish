import type { NextPage } from 'next';
import Head from 'next/head';
import Feed from '../components/Feed';
import PostBox from '../components/PostBox';
import { dehydrate, QueryClient, useQuery } from 'react-query';

const fetchPosts = async () => fetch('https://www.reddit.com/r/all.json').then((res) => res.json());

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['posts'], fetchPosts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const Home: NextPage = () => {
  const { isLoading, data } = useQuery('posts', fetchPosts, {
    select: (data) => data.data.children.map((post: any) => post.data),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
