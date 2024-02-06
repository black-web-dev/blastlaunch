import Head from 'next/head';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import { cookieToInitialState } from 'wagmi';

import LoadingIndicator from '@/components/common/loadingIndicator';
import Layout from '@/components/layout';

import { config } from '@/configs/wagmiConfig';
import { Web3Provider } from '@/providers/wagmiProvider';

export interface IBaseProps {
  title?: string;
  description?: string | null;
}

function Base<P>({
  Component,
  pageProps,
}: {
  Component: typeof React.Component;
  pageProps: P & IBaseProps;
}): JSX.Element {
  const { description, title } = pageProps;
  const initialState = cookieToInitialState(config);

  return (
    <React.StrictMode>
      <Head>
        <title>{`${title ? `${title} | ` : ''} Blastlaunch`}</title>
        {description && <meta name='description' content={description} />}
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover'
        />
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
      </Head>
      <LoadingIndicator />
      <SnackbarProvider
        preventDuplicate
        autoHideDuration={2000}
        dense
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Web3Provider initialState={initialState}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Web3Provider>
      </SnackbarProvider>
    </React.StrictMode>
  );
}

export default Base;
