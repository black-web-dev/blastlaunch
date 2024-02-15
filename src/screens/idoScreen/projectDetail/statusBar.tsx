import React from 'react';

import CheckIcon from '~/svg/check.svg';
import LockIcon from '~/svg/lock.svg';
import BTLIcon from '~/svg/logo.svg';

const StatusBar = (): JSX.Element => {
  return (
    <>
      <div className='flex items-center gap-2 rounded-lg bg-[#F6F6F6] p-4'>
        <BTLIcon className='h-10 w-10' />
        <div className='flex-auto font-bold'>Blastlaunch</div>
        <div className='rounded-lg bg-[#5CC88D] px-2 py-1 text-sm font-bold text-white'>
          Distribution
        </div>
      </div>
      <div className='flex flex-col items-start justify-start gap-4 rounded-lg bg-[#F6F6F6] p-4'>
        <div className='flex-auto font-bold'>IDO Process:</div>
        <div className='relative flex items-start'>
          <div className='absolute left-[12px] top-0 block h-full w-[1px] after:absolute after:top-[30px] after:block after:h-[15px] after:w-[1px] after:rounded-sm after:bg-[#5cc88d] after:transition-all after:content-[""]'></div>
          <div className='mr-4 flex h-6 w-6 items-center justify-center rounded-full bg-[#5cc88d] p-[5px] text-white'>
            <CheckIcon />
          </div>
          <div className='flex flex-col'>
            <div className='text-sm font-bold text-[#5cc88d]'>Preparation</div>
            <div className='text-xs'>Project is preparing for whitelist</div>
          </div>
        </div>
        <div className='relative flex items-start'>
          <div className='absolute left-[12px] top-0 block h-full w-[1px] after:absolute after:top-[30px] after:block after:h-[15px] after:w-[1px] after:rounded-sm after:bg-[#5cc88d] after:transition-all after:content-[""]'></div>
          <div className='mr-4 flex h-6 w-6 items-center justify-center rounded-full bg-[#5cc88d] p-[5px] text-white'>
            <CheckIcon />
          </div>
          <div className='flex flex-col'>
            <div className='text-sm font-bold text-[#5cc88d]'>Whitelist</div>
            <div className='text-xs'>You can whitelist for this project</div>
          </div>
        </div>
        <div className='relative flex items-start'>
          <div className='absolute left-[12px] top-0 block h-full w-[1px] after:absolute after:top-[30px] after:block after:h-[15px] after:w-[1px] after:rounded-sm after:bg-[#5cc88d] after:transition-all after:content-[""]'></div>
          <div className='mr-4 flex h-6 w-6 items-center justify-center rounded-full bg-[#5cc88d] p-[5px] text-white'>
            <CheckIcon />
          </div>
          <div className='flex flex-col'>
            <div className='text-sm font-bold text-[#5cc88d]'>Sale</div>
            <div className='text-xs'>You can fill your allocation</div>
          </div>
        </div>
        <div className='relative flex items-start'>
          <div className='absolute left-[12px] top-0 block h-full w-[1px] after:absolute after:top-[30px] after:block after:hidden after:h-[15px] after:w-[1px] after:rounded-sm after:bg-[#5cc88d] after:transition-all after:content-[""]'></div>
          <div className='mr-4 flex h-6 w-6 items-center justify-center rounded-full bg-[#5cc88d] p-[5px] text-white'>
            {/* <CheckIcon /> */}
            <div>4</div>
          </div>
          <div className='flex flex-col'>
            <div className='text-sm font-bold text-[#5cc88d]'>Distribution</div>
            <div className='text-xs'>You can claim your tokens</div>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-start justify-start gap-4 rounded-lg bg-[#F6F6F6] p-4'>
        <div className='relative flex items-start'>
          <LockIcon className='mr-4 h-5 w-5' />
          <div className='flex flex-col'>
            <div className='text-sm font-bold'>Hard Cap</div>
            <div className='text-xs'>N/A</div>
          </div>
        </div>
        <div className='relative flex items-start'>
          <LockIcon className='mr-4 h-5 w-5' />
          <div className='flex flex-col'>
            <div className='text-sm font-bold'>Token Price</div>
            <div className='text-xs'>N/A</div>
          </div>
        </div>
        <div className='relative flex items-start'>
          <BTLIcon className='mr-4 h-5 w-5' />
          <div className='flex flex-col'>
            <div className='text-sm font-bold'>Pool Size</div>
            <div className='text-xs'>N/A</div>
          </div>
        </div>
        <div className='relative flex items-start'>
          <LockIcon className='mr-4 h-5 w-5' />
          <div className='flex flex-col'>
            <div className='text-sm font-bold'>Type</div>
            <div className='text-xs'>N/A</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatusBar;
