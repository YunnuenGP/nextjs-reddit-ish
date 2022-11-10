import type { NextPage } from 'next';
import Head from 'next/head';
import Feed from '../components/Feed';
import PostBox from '../components/PostBox';
import { useQuery } from 'react-query';

const Home: NextPage = () => {
  const { isLoading, error, data } = useQuery(
    'posts',
    () => fetch('https://www.reddit.com/r/all.json').then((res) => res.json()),
    {
      select: (data) => data.data.children.map((post: any) => post.data),
    },
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
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
