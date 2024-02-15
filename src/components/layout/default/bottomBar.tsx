import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import CoinIcon from '~/svg/coin.svg';
import GovernanceIcon from '~/svg/governance.svg';
import MoreIcon from '~/svg/more.svg';
import StakingIcon from '~/svg/staking.svg';
import SwapIcon from '~/svg/swap.svg';

const BottomBar = (): JSX.Element => {
  const router = useRouter();

  return (
    <div className='shadow-bottomBar sticky bottom-0 z-30 flex w-full items-center justify-between rounded-t-xl bg-white px-8 py-5 lg:hidden'>
      <Link href='/ido/projects'>
        <CoinIcon
          className={clsx(
            'h-[31px] w-[25px]',
            router.pathname.includes('ido')
              ? 'fill-[#fbe460]'
              : 'fill-[#5A6671]'
          )}
        />
      </Link>
      <Link href='/staking'>
        <StakingIcon
          className={clsx(
            'h-[31px] w-[25px]',
            router.pathname.includes('staking')
              ? 'fill-[#fbe460]'
              : 'fill-[#5A6671]'
          )}
        />
      </Link>
      <Link href='/swap'>
        <SwapIcon
          className={clsx(
            'h-[31px] w-[25px]',
            router.pathname.includes('swap')
              ? 'fill-[#fbe460]'
              : 'fill-[#5A6671]'
          )}
        />
      </Link>
      <Link href='/governance'>
        <GovernanceIcon
          className={clsx(
            'h-[31px] w-[25px]',
            router.pathname.includes('governance')
              ? 'fill-[#fbe460]'
              : 'fill-[#5A6671]'
          )}
        />
      </Link>
      <div>
        <MoreIcon
          className='h-[31px] w-[25px] stroke-[#5A6671] hover:stroke-[#fbe460]'
        />
      </div>
    </div>
  );
};

export default BottomBar;
