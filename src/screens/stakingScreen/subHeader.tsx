import { useRouter } from 'next/router';

import Button from '@/components/common/button';

export const StakingSubHeader = () => {
  const router = useRouter();

  return (
    <div className='flex flex-col gap-2 w-full'>
      <div className='flex items-center gap-2'>
        <Button className='w-full lg:w-fit justify-center lg:justify-start' onClick={() => router.push('/staking')}>
          BTL Staking
        </Button>
      </div>
    </div>
  );
};
