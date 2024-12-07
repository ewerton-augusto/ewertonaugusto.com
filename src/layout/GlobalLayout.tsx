import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { Header, Footer } from '@/components';

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
        <title>{title && `${title} | `}Ewerton Augusto</title>
      </Head>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="flex flex-col gap-12 min-h-screen pb-4">
          <Header />
          {children}
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
};

export default GlobalLayout;
