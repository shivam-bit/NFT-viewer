import React, { createContext, useState } from 'react';
import { SUPPORTED_CHAINS } from 'src/constants/';

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  // 0xFd7736371d52725527294844b95aA92bBD4B8724
  const [walletAddress, setWalletAddress] = useState(
    '0xFd7736371d52725527294844b95aA92bBD4B8724'
  );
  const [activeChain, setActiveChain] = useState(SUPPORTED_CHAINS[0]);
  const [allCollections, setAllCollections] = useState([]);
  const [activeCollections, setActiveCollections] = useState([]);
  const [nftsArray, setNftsArray] = useState([]);
  const value = {
    walletAddress,
    setWalletAddress,
    activeChain,
    setActiveChain,
    allCollections,
    setAllCollections,
    activeCollections,
    setActiveCollections,
    nftsArray,
    setNftsArray,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const UserContextConsumer = ({ children }) => {
  return <UserContext.Consumer>{children}</UserContext.Consumer>;
};
