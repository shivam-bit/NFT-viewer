import React, { useContext } from 'react';
import { AppContext, UserContext } from 'src/context/';
import { Button } from 'src/components';
import Image from 'next/image';
import styles from 'src/styles/modules/ConnectCard.module.scss';
import metamaskInstance from 'src/services/MetaMask';
import { ONBOARDING_STATUSES } from 'src/constants/';
const ConnectCard: any = (props) => {
  const { activateConfetti, setOnboardingStatus, isConnected, setIsConnected } =
    useContext(AppContext);
  const { setWalletAddress } = useContext(UserContext);

  const connectWallet = async () => {
    setOnboardingStatus(ONBOARDING_STATUSES['In-progress']);
    const accounts = await metamaskInstance.onClickConnect();

    if (accounts.length > 0) {
      activateConfetti();
      setOnboardingStatus(ONBOARDING_STATUSES['Successful']);
      setWalletAddress(accounts[0]);
      setIsConnected(true);
    }
  };

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
