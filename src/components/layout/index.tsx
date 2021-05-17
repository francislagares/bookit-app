import React, { ReactNode } from 'react';
import Head from 'next/head';

import Footer from './Footer';
import Header from './Header';

interface ILayoutProps {
  children: ReactNode;
  title?: string;
}

const Layout = ({
  children,
  title = 'Book Best Hotels for your Holiday',
}: ILayoutProps) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    </Head>

    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
