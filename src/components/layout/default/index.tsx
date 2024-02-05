import React, { ReactNode } from 'react';

import { Header } from './header';
import { Sidebar } from './sidebar';

const Default = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <>
      <div className='relative flex min-h-screen gap-4 bg-[#F0F2F5] p-10 text-[#070D13]'>
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
