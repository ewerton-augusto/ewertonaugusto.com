import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import Header from '../components/sections/Header';

type GlobalLayoutProps = {
  children: React.ReactNode;
  title?: string;
};

const GlobalLayout: React.FC<GlobalLayoutProps> = ({ children, title }) => {
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
        <title>Ewerton Augusto {title && `| ${title}`}</title>
      </Head>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Header />
        <main>{children}</main>
      </ThemeProvider>
    </>
  );
};

export default GlobalLayout;
