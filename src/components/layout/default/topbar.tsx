import Image from 'next/image';
import React from 'react';

import WalletButton from '@/components/common/walletButton';

import NotificationIcon from '~/svg/notification.svg';

const Topbar = (): JSX.Element => {
  return (
    <div className='shadow-inputFocus gap-4 sticky top-0 z-30 flex w-full items-center justify-between rounded-b-xl bg-white px-4 py-3 lg:hidden'>
      <div className='flex items-center gap-2'>
        <Image src='/svg/logo.svg' width={48} height={48} alt='logo' />
        <div className='hidden sm:text-xl font-bold'>LastLaunch</div>
      </div>
      <div className='flex-auto'></div>
      <NotificationIcon />
      <WalletButton />
    </div>
  );
};

export default Topbar;
