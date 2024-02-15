import React from 'react';

import DiscordIcon from '~/svg/discord.svg';
import BTLIcon from '~/svg/logo.svg';
import TwitterIcon from '~/svg/twitter.svg';

const Description = (): JSX.Element => {
  return (
    <>
      <div className='flex items-start justify-between'>
        <div className='flex items-center gap-2'>
          <BTLIcon className='h-10 w-10' />
          <div className='flex flex-col'>
            <div className='font-bold'>Blastlaunch</div>
          </div>
        </div>
        <div className='hidden max-w-[500px] whitespace-pre-wrap text-base font-semibold lg:block'>
          A user driven IDO launchpad on Blast connecting retail investors and
          projects together.
        </div>
      </div>
      <div className='max-w-[500px] whitespace-pre-wrap text-base font-semibold lg:hidden'>
        A user driven IDO launchpad on Blast connecting retail investors and
        projects together.
      </div>
      <div className='flex items-start justify-between'>
        <div className='hidden flex-col gap-4 lg:flex'>
          <div className='flex items-center gap-4'>
            <TwitterIcon className='h-8 w-8' />
            <DiscordIcon className='h-8 w-8' />
          </div>
        </div>
        <div className='flex gap-2'>
          <div className='rounded-full bg-[#EFF8FD] px-4 py-1 text-center text-sm text-[#070D13]'>
            Launchpad
          </div>
          <div className='rounded-full bg-[#EFF8FD] px-4 py-1 text-center text-sm text-[#070D13]'>
            DeFi
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
