import React, {createContext, useState} from 'react';
import {SUPPORTED_CHAINS} from 'src/constants/';
import confettiObject from 'src/utils/confetti';

export const AppContext = createContext({});

export const AppContextProvider = ({children}) => {
    const supportedChains = SUPPORTED_CHAINS;

    const [isConnected, setIsConnected] = useState(true);
    const [collectionsLoading, setCollectionsLoading] = useState(false);
    const [nftsLoading, setNftsLoading] = useState(false);

    const activateConfetti = () => {
        confettiObject.startConfettiInner();
        setTimeout(() => {
            confettiObject.stopConfettiInner();
        }, 3*1000);
    }

    const value = {
        isConnected,
        setIsConnected,
        supportedChains,
        activateConfetti,
        collectionsLoading, 
        setCollectionsLoading,
        nftsLoading, 
        setNftsLoading
    }
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}