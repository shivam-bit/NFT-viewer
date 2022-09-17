import React, { useState, useEffect, useContext } from 'react';
import { AppContext, UserContext } from 'src/context/';
import { Button } from 'src/components';
import styles from 'src/styles/modules/DemoCard.module.scss';
import { ONBOARDING_STATUSES } from 'src/constants';

const DemoCard: any = () => {
  const { activateConfetti, setOnboardingStatus, setIsConnected } =
    useContext(AppContext);
  const { setWalletAddress } = useContext(UserContext);
  const [openDemoInfo, setOpenDemoInfo] = useState(false);

  const toggleDemoInfoPopover = () => {
    setOpenDemoInfo(!openDemoInfo);
  };

  const loginUsingDemoAcc = () => {
    activateConfetti();
    setOnboardingStatus(ONBOARDING_STATUSES['Successful']);
    setWalletAddress(process.env.NEXT_PUBLIC_DEMO_WALLET);
    setIsConnected(true);
    toggleDemoInfoPopover();
  };

  useEffect(() => {
    setTimeout(() => {
      setOpenDemoInfo(true);
    }, 4000);
  }, []);

  return (
    <div className={styles['demo-card']}>
      {!openDemoInfo ? null : (
        <div className={styles['demo-card-popover']}>
          <div>🤔 Do you wish to use demo account?</div>
          <div className={styles['demo-card-popover-options']}>
            <span onClick={loginUsingDemoAcc}>Yes sure 🔓</span>
            <span onClick={toggleDemoInfoPopover}>No, I am a real user 🎉</span>
          </div>
        </div>
      )}
      <Button
        triggerOnClick={toggleDemoInfoPopover}
        classes={styles['demo-card-logo']}
      >
        <img src="/icons8-jake.svg" />
      </Button>
    </div>
  );
};

export default DemoCard;
