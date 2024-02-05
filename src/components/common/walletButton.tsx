import { useWeb3Modal } from '@web3modal/wagmi/react';
import { FaAngleRight } from 'react-icons/fa';
import { useAccount } from 'wagmi';

import Button from './button';

export default function WalletButton() {
  const { open } = useWeb3Modal();
  const { isConnected } = useAccount();

  return (
    <div className='flex items-center gap-2'>
      {isConnected ? (
        <w3m-account-button />
      ) : (
        <Button variant='outline' onClick={() => open()}>
          <div className='flex min-w-[100px] items-center justify-between'>
            <div>Connect</div>
            <FaAngleRight />
          </div>
        </Button>
      )}
      {/* <Button onClick={() => open({ view: 'Networks' })}>Network</Button> */}
    </div>
  );
}
