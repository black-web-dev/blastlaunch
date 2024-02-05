import { useRouter } from 'next/router';

import Button from '@/components/common/button';

export const StakingSubHeader = () => {
  const router = useRouter();
  const asPath = router.pathname.split('/')[2];

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex items-center gap-2'>
        <Button onClick={() => router.push('/staking/meeStaking')}>
          MEE Staking
        </Button>
        <Button
          onClick={() => router.push('/staking/meeAptSakting')}
          variant='outline'
        >
          MEE-APT Staking
        </Button>
      </div>
      <div className='flex text-xs capitalize'>{`staking > ${asPath}`}</div>
    </div>
  );
};
