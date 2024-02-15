import React, { ReactNode } from 'react';

import BottomBar from './bottomBar';
import { Header } from './header';
import { Sidebar } from './sidebar';
import Topbar from './topbar';

const Default = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <>
      <Topbar />
      <div className='relative mx-auto flex min-h-screen max-w-[1440px] gap-4 p-5 text-[#070D13] lg:p-10'>
        <Sidebar />
        <div className='flex flex-auto flex-col gap-4'>
          <Header />
          {children}
        </div>
      </div>
      <BottomBar />
    </>
  );
};

export default Default;
