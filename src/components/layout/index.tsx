import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';

import Default from '@/components/layout/default';

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  const { pathname } = useRouter();

  if (
    pathname.includes('register') ||
    pathname.includes('login') ||
    pathname.includes('password')
  )
    return <>{children}</>;

  return <Default>{children}</Default>;
};

export default Layout;
