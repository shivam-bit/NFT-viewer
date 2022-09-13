import React, {createContext, useState} from 'react';
import {SUPPORTED_CHAINS} from 'src/constants/';
import confettiObject from 'src/utils/confetti';

export const AppContext = createContext({});

export const AppContextProvider = ({children}) => {
    const supportedChains = SUPPORTED_CHAINS;
    
    const [walletAddress, setWalletAddress] = useState("0xFd7736371d52725527294844b95aA92bBD4B8724");
    const [isConnected, setIsConnected] = useState(true);
    const [activeChain, setActiveChain] = useState(SUPPORTED_CHAINS[0]);

    const activateConfetti = () => {
        confettiObject.startConfettiInner();
        setTimeout(() => {
            confettiObject.stopConfettiInner();
        }, 3*1000);
    }
    const value = {
        walletAddress,
        setWalletAddress,
        isConnected,
        setIsConnected,
        activeChain,
        setActiveChain,
        supportedChains,
        activateConfetti
    }
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}