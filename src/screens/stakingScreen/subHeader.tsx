import { useRouter } from 'next/router';

import Button from '@/components/common/button';

export const StakingSubHeader = () => {
  const router = useRouter();

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex items-center gap-2'>
        <Button onClick={() => router.push('/staking')}>
          BTL Staking
        </Button>
      </div>
    </div>
  );
};
