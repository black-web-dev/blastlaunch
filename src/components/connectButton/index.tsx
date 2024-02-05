import { ConnectButton } from '@rainbow-me/rainbowkit';
import React, { useCallback, useEffect, useState } from 'react';
import { BsExclamationTriangle } from 'react-icons/bs';
import { CiWallet } from 'react-icons/ci';
import { useSelector } from 'react-redux';
import { useNetwork, useSwitchNetwork } from 'wagmi';

import useDesktopMediaQuery from '@/hooks/useDesktopMediaQuery';

import { arbitrum } from '@/configs/wagmiConfig';
import { selectUserdata } from '@/services/auth';

const WalletConnect = () => {
  const isDesktop = useDesktopMediaQuery();
  const user = useSelector(selectUserdata);

  const { chain } = useNetwork();
  const {
    isLoading,
    pendingChainId,
    switchNetworkAsync: switchNetwork,
  } = useSwitchNetwork({
    chainId: arbitrum.id,
  });

  const handleSwitchChain = useCallback(
    async (id: number) => {
      try {
        await switchNetwork?.(id);
        // eslint-disable-next-line no-empty
      } catch (error) {}
    },
    [switchNetwork]
  );

  useEffect(() => {
    if (
      chain &&
      chain.unsupported &&
      pendingChainId !== arbitrum.id &&
      !isLoading
    ) {
      handleSwitchChain(arbitrum.id);
    }
  }, [chain, handleSwitchChain, isLoading, pendingChainId]);

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === 'authenticated');
        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    type='button'
                    className='hover:bg-back-200 flex items-center gap-2 rounded bg-white/10 px-5 py-2.5 text-white transition-all active:scale-95'
                  >
                    <CiWallet className='h-5 w-5 fill-white' />
                    <div className='text-sm font-normal capitalize'>
                      {isDesktop ? 'connect wallet' : 'connect'}
                    </div>
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button
                    className='text-text-100 flex items-center gap-1 text-xs'
                    onClick={openChainModal}
                    type='button'
                  >
                    <BsExclamationTriangle />
                    <div>
                      {isLoading && pendingChainId
                        ? 'Switching'
                        : 'Wrong network'}
                    </div>
                  </button>
                );
              }
              return (
                <div style={{ display: 'flex', gap: 12 }}>
                  <button
                    onClick={openChainModal}
                    style={{ display: 'flex', alignItems: 'center' }}
                    type='button'
                  >
                    {/* {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 24,
                          height: 24,
                          borderRadius: 999,
                          overflow: "hidden",
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? "Chain icon"}
                            src={chain.iconUrl}
                            style={{ width: 24, height: 24 }}
                          />
                        )}
                      </div>
                    )} */}
                    {/* {chain.name} */}
                  </button>
                  <button
                    onClick={openAccountModal}
                    type='button'
                    className='text-text-100 text-xs'
                  >
                    <div className='flex flex-col items-end gap-1'>
                      <div>{user.email}</div>
                      <div>{account.displayName}</div>
                    </div>

                    {/* {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ""} */}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default WalletConnect;
