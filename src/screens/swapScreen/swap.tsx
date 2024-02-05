import { AiFillCheckCircle } from 'react-icons/ai';
import { FiRefreshCcw } from 'react-icons/fi';
import { MdOutlineSwapHoriz } from 'react-icons/md';
import { MdOutlineSettings } from 'react-icons/md';

import Button from '@/components/common/button';
import NumericalInput from '@/components/common/numericalInput';

import ChangeIcon from '~/svg/change.svg';
import MarkIcon from '~/svg/mark.svg';
import MeeIcon from '~/svg/mee.svg';

const SwapScreen = (): JSX.Element => {
  return (
    <div className='flex h-full w-full items-start justify-center p-20'>
      <div className='flex w-[436px] flex-col gap-3 rounded-lg bg-white p-4'>
        <div className='text-2xl font-bold'>Swap</div>
        <div className='flex flex-col gap-2 rounded-lg bg-[#FFF8E3] p-3'>
          <div className='flex w-full items-center justify-between'>
            <div className='flex min-w-[150px] items-center gap-2 rounded-lg border border-black bg-white px-3 py-1'>
              <MarkIcon />
              <div className='font-bold'>APT</div>
            </div>
            <NumericalInput value={0} onChange={(v) => console.log(v)} />
          </div>

          <div className='flex w-full items-center justify-between text-xs font-semibold'>
            <div className='flex items-center gap-2'>
              <div>Balance:</div>
              <div>0.0000000</div>
            </div>
            <div>~$0</div>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <div className='rounded-full bg-[#FCDA4F] px-5 py-2'>
            <ChangeIcon />
          </div>
        </div>
        <div className='flex flex-col gap-2 rounded-lg bg-[#FFF8E3] p-3'>
          <div className='flex w-full items-center justify-between'>
            <div className='flex min-w-[150px] items-center gap-2 rounded-lg border border-black bg-white px-3 py-1'>
              <MeeIcon />
              <div className='font-bold'>MEE</div>
            </div>
            <NumericalInput value={0} onChange={(v) => console.log(v)} />
          </div>

          <div className='flex w-full items-center justify-between text-xs font-semibold'>
            <div className='flex items-center gap-2'>
              <div>Balance:</div>
              <div>0.0000000</div>
            </div>
            <div>~$0</div>
          </div>
        </div>
        <div className='flex items-center justify-center gap-2 text-xs font-bold'>
          <div>1 APT</div>
          <div>=</div>
          <div>0.000000 MEE</div>
          <div>
            <MdOutlineSwapHoriz />
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <AiFillCheckCircle className='fill-[#31B79F]' />
            <div className='font-bold text-[#31B79F]'>Fair Price</div>
          </div>
          <div className='flex gap-2'>
            <div className='rounded-lg bg-[#FCDA4F] p-1'>
              <MdOutlineSettings />
            </div>
            <div className='rounded-lg bg-[#FCDA4F] p-1'>
              <FiRefreshCcw />
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-2 rounded-lg bg-[#F6F6F6] px-4 py-2 text-sm'>
          <div className='font-bold'>Price impact</div>
          <div className='font-bold text-[#737373]'>0.00%</div>
          <div className='font-bold'>Minimum Received</div>
          <div className='font-bold text-[#737373]'>0.0000MEE</div>
        </div>
        <Button className='shadow-card'>
          <div className='flex items-center justify-center w-full text-lg'>Swap</div>
        </Button>
      </div>
    </div>
  );
};

export default SwapScreen;
