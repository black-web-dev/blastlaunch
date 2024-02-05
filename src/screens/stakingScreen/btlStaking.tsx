import Button from '@/components/common/button';

import EmptyIcon from '~/svg/empty.svg';

const BTLStakingScreen = (): JSX.Element => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='relative flex h-[213px] w-full items-center justify-center rounded-lg bg-[#EFF8FD]'>
        {/* <Image
          className='absolute left-0 rounded-l-lg'
          src='/svg/funded-bg-2.svg'
          width={168}
          height={213}
          alt='left'
        />
        <Image
          className='absolute right-0 rounded-r-lg'
          src='/svg/funded-bg-1.svg'
          width={463}
          height={213}
          alt='left'
        /> */}
        <div className='flex flex-col items-center justify-start gap-4 p-5 text-2xl'>
          <div className='text-4xl font-bold'>Funded Projects</div>
          <div className='grid grid-cols-4 items-center text-sm font-semibold'>
            <div className='rounded-l-lg border border-black/50 bg-white p-3 text-center'>
              Total raised capital
            </div>
            <div className='border border-l-0 border-black/50 bg-white p-3 text-center'>
              Num. of IDO
            </div>
            <div className='border border-l-0 border-black/50 bg-white p-3 text-center'>
              Total Paricipants
            </div>
            <div className='rounded-r-lg border border-l-0 border-black/50 bg-white p-3 text-center'>
              Av. ROI(ATH)
            </div>
          </div>
          <div className='grid w-full grid-cols-4 items-center justify-center'>
            <div className='flex justify-center font-bold'>-</div>
            <div className='flex justify-center font-bold'>-</div>
            <div className='flex justify-center font-bold'>-</div>
            <div className='flex justify-center font-bold'>-</div>
          </div>
        </div>
      </div>
      <div className='rounded-lg bg-white p-10'>
        <div className='flex flex-col items-center gap-10'>
          <div className='flex items-center gap-2'>
            <div className='text-2xl font-bold'>BTL Staking</div>
          </div>
          <div className='grid w-full grid-cols-3 gap-4'>
            <div className='shadow-card flex flex-col items-start gap-4 rounded-lg bg-[#EFF8FD] p-5'>
              <div className='text-xl font-semibold'>BTL STAKED:</div>
              <div className='text-xl font-semibold'>0</div>
              <div className='flex items-center gap-4'>
                <Button>Stake</Button>
                <Button disabled>UnStake</Button>
              </div>
            </div>
            <div className='shadow-card flex flex-col items-start gap-4 rounded-lg bg-[#EFF8FD] p-5'>
              <div className='text-xl font-semibold'>PENDING REWARDS:</div>
              <div className='text-xl font-semibold'>0</div>
              <div className='flex items-center gap-4'>
                <Button disabled>Harvest</Button>
              </div>
            </div>
            <div className='shadow-card flex flex-col items-start gap-4 rounded-lg bg-[#EFF8FD] p-5'>
              <div className='text-xl font-semibold'>
                ESTIMATED IDO ALLOCATION:
              </div>
              <div className='text-xl font-semibold'>N/A</div>
            </div>
          </div>
          <div className='grid w-full grid-cols-3 items-center justify-center rounded-lg bg-[#F0F0F0] p-3 font-semibold'>
            <div>Pending Withdraw</div>
            <div>Amount</div>
            <div>Actions</div>
          </div>
          <div className='flex min-h-[300px] w-full items-center justify-center'>
            <div className='flex flex-col items-center gap-2'>
              <EmptyIcon className='h-8 w-8' />
              <div className='font-semibold'>No data to display</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BTLStakingScreen;
