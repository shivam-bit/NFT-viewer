import React, { useContext } from 'react';
import { AppContext } from 'src/context/';
import { EmojiImage, Button, DataBox } from 'src/components';
import styles from './ConnectCard.module.scss';
import ContentLoader from 'react-content-loader';

const LoadingCard: any = ({ nftDta, name }) => {
  const { walletAddress, isConnected, setWalletAddress, setIsConnected } =
    useContext(AppContext);
  // console.log(nftMetaDta)
  return (
    <ContentLoader
      speed={2.4}
      height={340}
      viewBox="0 0 280 320"
      backgroundColor="#f3f3f3"
      foregroundColor="#ffffff"
      className="card"
      style={{ width: '100%' }}
    >
      <rect x="0" y="0" rx="0" ry="0" width="280" height="180" />
      <rect x="0" y="220" rx="0" ry="0" width="280" height="40" />
      <rect x="0" y="280" rx="0" ry="0" width="280" height="40" />
    </ContentLoader>
  );
};

export default LoadingCard;
