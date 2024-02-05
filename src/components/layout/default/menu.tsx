import Link from 'next/link';

import Button from '@/components/common/button';

import CoinIcon from '~/svg/coin.svg';
import DocsIcon from '~/svg/docs.svg';
import DownloadIcon from '~/svg/download.svg';
import GovernanceIcon from '~/svg/governance.svg';
import StakingIcon from '~/svg/staking.svg';
import SwapIcon from '~/svg/swap.svg';

export const Menu = () => {
  return (
    <div className='flex flex-col gap-8 text-base'>
      <div className='mx-4 h-[2px] bg-[#EFF4F5]'></div>
      <div className='flex flex-col gap-2'>
        <Link href='/ido/projects'>
          <Button className='w-full' icon={<CoinIcon />}>
            IDO
          </Button>
        </Link>
        <Link href='/staking'>
          <Button className='w-full' icon={<StakingIcon />}>
            Staking
          </Button>
        </Link>
        <Link href='/swap'>
          <Button className='w-full' icon={<SwapIcon />}>
            Swap
          </Button>
        </Link>
        <Link href='/governance'>
          <Button className='w-full' icon={<GovernanceIcon />}>
            Govenance
          </Button>
        </Link>
      </div>
      <div className='mx-4 h-[2px] bg-[#EFF4F5]'></div>
      <div className='flex flex-col gap-2'>
        <Button icon={<DocsIcon />}>Docs</Button>
        <Button icon={<DownloadIcon />}>Apply IDO</Button>
      </div>
    </div>
  );
};
