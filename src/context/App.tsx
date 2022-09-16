import React, { createContext, useState } from 'react';
import { SUPPORTED_CHAINS, ONBOARDING_STATUSES } from 'src/constants/';
import confettiObject from 'src/utils/confetti';

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const supportedChains = SUPPORTED_CHAINS;

  const [isConnected, setIsConnected] = useState(false);
  const [collectionsLoading, setCollectionsLoading] = useState(false);
  const [nftsLoading, setNftsLoading] = useState(false);
  const [onboardingStatus, setOnboardingStatus] = useState(
    ONBOARDING_STATUSES['Not-Started']
  );

  const activateConfetti = () => {
    confettiObject.startConfettiInner();
    setTimeout(() => {
      confettiObject.stopConfettiInner();
    }, 3 * 1000);
  };

  const value = {
    isConnected,
    setIsConnected,
    supportedChains,
    onboardingStatus,
    setOnboardingStatus,
    activateConfetti,
    collectionsLoading,
    setCollectionsLoading,
    nftsLoading,
    setNftsLoading,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const AppContextConsumer = ({ children }) => {
  return <AppContext.Consumer>{children}</AppContext.Consumer>;
};
