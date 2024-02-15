import React, { ReactNode } from 'react';

import { Header } from './header';
import { Sidebar } from './sidebar';

const Default = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <>
      <div className='relative flex min-h-screen max-w-[1440px] gap-4 p-10 text-[#070D13] mx-auto'>
        <Sidebar />
        <div className='flex flex-auto flex-col gap-4'>
          <Header />
          {children}
        </div>
      </div>
    </>
  );
};

export default Default;
