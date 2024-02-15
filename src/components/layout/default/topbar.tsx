import React from 'react';

import WalletButton from '@/components/common/walletButton';

import Logo from '~/svg/logo.svg';
import NotificationIcon from '~/svg/notification.svg';

const Topbar = (): JSX.Element => {
  return (
    <div className='shadow-inputFocus sticky top-0 z-30 flex w-full items-center justify-between rounded-b-xl bg-white px-4 py-3 lg:hidden'>
      <div className='flex items-center gap-2'>
        <Logo className='h-12 w-12' />
        <div className='hidden sm:text-xl font-bold'>LastLaunch</div>
      </div>
      <NotificationIcon />
      <WalletButton />
    </div>
  );
};

export default Topbar;
