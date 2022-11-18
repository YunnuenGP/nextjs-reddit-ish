import '../styles/globals.css';
import * as React from 'react';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import { Toaster } from 'react-hot-toast';
import Header from '../components/header/';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <div className="h-screen overflow-y-scroll bg-slate-200">
        <Header />
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </div>
    </QueryClientProvider>
  );
}

export default MyApp;
