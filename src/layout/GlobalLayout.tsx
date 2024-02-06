import React from 'react';
import Head from 'next/head';

type GlobalLayoutProps = {
  children: React.ReactNode;
};

const GlobalLayout: React.FC<GlobalLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Ewerton Augusto Personal Website. Front-end Developer | Web Developer"
        />
        <link rel="icon" type="image/x-icon" href="/assets/images/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="use-credentials" />
        <title>Ewerton Augusto</title>
      </Head>
      <main>{children}</main>
    </>
  );
};

export default GlobalLayout;
