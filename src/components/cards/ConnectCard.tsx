import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AppContext, UserContext } from 'src/context/';
import { Button } from 'src/components';
import Image from 'next/image';
import styles from 'src/styles/modules/ConnectCard.module.scss';
import metamaskInstance from 'src/services/MetaMask';
import { ONBOARDING_STATUSES } from 'src/constants/';
const ConnectCard: any = (props) => {
  const router = useRouter();
  const {
    activateConfetti,
    onboardingStatus,
    setOnboardingStatus,
    isConnected,
    setIsConnected,
  } = useContext(AppContext);
  const { setWalletAddress } = useContext(UserContext);
  const connectWallet = async (e) => {
    setOnboardingStatus(ONBOARDING_STATUSES['In-progress']);

    const accounts = await metamaskInstance.onClickConnect();
    // console.log("🚀 ~ file: ConnectCard.tsx ~ line 16 ~ connectWal ~ accounts", accounts);
    if (accounts.length > 0) {
      activateConfetti();
      localStorage.setItem('walletAddress', accounts[0]);
      localStorage.setItem(
        'onboardingStatus',
        ONBOARDING_STATUSES['Successful']
      );
      localStorage.setItem('isConnected', true);
      setOnboardingStatus(ONBOARDING_STATUSES['Successful']);
      setWalletAddress(accounts[0]);
      setIsConnected(true);
    }
    // TODO: Add analytics event
  };

  useEffect(() => {
    if (onboardingStatus === ONBOARDING_STATUSES['Successful'] && isConnected) {
      setTimeout(() => {
        router.push('/view');
      }, 3000);
    }
    if (onboardingStatus === ONBOARDING_STATUSES['Done'] && isConnected) {
      router.push('/view');
    }
  }, [isConnected]);

  return (
    <div className={styles.connectWallet}>
      <Image src="/metamask-fox.svg" width={200} height={200} />
      <div className="card-title">Connect your MetaMask Wallet</div>
      <Button triggerOnClick={connectWallet} className="connect-wallet">
        {isConnected ? 'Authenticated 🎉, Redirecting ..' : 'Connect Wallet'}
      </Button>
    </div>
  );
};

export default ConnectCard;
