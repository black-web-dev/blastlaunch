import { useRouter } from 'next/router';

import Button from '@/components/common/button';

export const IDOSubHeader = () => {
  const router = useRouter();
  const asPath = router.pathname.split('/')[2];

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex items-center gap-2'>
        <Button onClick={() => router.push('/ido/projects')}>Projects</Button>
        <Button onClick={() => router.push('/ido/funded')} variant='outline'>
          Funded
        </Button>
      </div>
      <div className='flex text-xs capitalize'>{`IDO > ${asPath}`}</div>
    </div>
  );
};
