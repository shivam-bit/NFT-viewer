import React, {createContext, useState} from 'react';

export const AppContext = createContext({});

export const AppContextProvider = ({children}) => {
    const supportedChains = [
        'Polygon','ETH_Mainet','Ropsten','Goerli','Rinkeby'
      ]
    
    const [walletAddress, setWalletAddress] = useState("");
    const [isConnected, setIsConnected] = useState(false);
    const [activeChain, setActiveChain] = useState('Polygon')

    const value = {
        walletAddress,
        setWalletAddress,
        isConnected,
        setIsConnected,
        activeChain,
        setActiveChain,
        supportedChains
    }
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}