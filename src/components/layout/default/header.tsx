import { useRouter } from 'next/router';

import WalletButton from '@/components/common/walletButton';

import { IDOSubHeader } from '@/screens/idoScreen';
import { StakingSubHeader } from '@/screens/stakingScreen';
import { SwapSubHeader } from '@/screens/swapScreen';

import NotificationIcon from '~/svg/notification.svg';

export const Header = (): JSX.Element => {
  const { pathname } = useRouter();

  const SubMenu = () => {
    if (pathname.includes('ido')) return <IDOSubHeader />;
    if (pathname.includes('staking')) return <StakingSubHeader />;
    if (pathname.includes('swap')) return <SwapSubHeader />;
    return <IDOSubHeader />;
  };

  return (
    <div className='flex items-start justify-between gap-5'>
      <SubMenu />
      <div className='flex-auto'></div>
      <div className='flex items-center gap-5'>
        <NotificationIcon />
        <WalletButton />
      </div>
    </div>
  );
};
