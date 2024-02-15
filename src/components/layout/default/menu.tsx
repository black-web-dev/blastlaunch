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
          <Button className='w-full' icon={<CoinIcon className="fill-[#5A6671]"/>}>
            IDO
          </Button>
        </Link>
        <Link href='/staking'>
          <Button className='w-full' icon={<StakingIcon className="fill-[#5A6671]"/>}>
            Staking
          </Button>
        </Link>
        <Link href='/swap'>
          <Button className='w-full' icon={<SwapIcon className="fill-[#5A6671]"/>}>
            Swap
          </Button>
        </Link>
        <Link href='/governance'>
          <Button className='w-full' icon={<GovernanceIcon className="fill-[#5A6671]"/>}>
            Govenance
          </Button>
        </Link>
      </div>
      <div className='mx-4 h-[2px] bg-[#EFF4F5]'></div>
      <div className='flex flex-col gap-2'>
        <Link href='https://ezfi.gitbook.io/blastlaunch/' target='_blank'>
          <Button className='w-full' icon={<DocsIcon className="fill-[#5A6671]"/>}>Docs</Button>
        </Link>
        <Button icon={<DownloadIcon className="fill-[#5A6671]"/>}>Apply IDO</Button>
      </div>
    </div>
  );
};
