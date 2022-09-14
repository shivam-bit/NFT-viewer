import React, { useContext } from 'react';
import { AppContext } from 'src/context/';
import { EmojiImage, Button } from 'src/components';
import Image from 'next/image';
import styles from './ConnectCard.module.scss';
import { formatNftImageUrl } from 'src/utils/responseFormatting';

const NftCard: any = ({ nftMetaDta }) => {
  const { walletAddress, isConnected, setWalletAddress, setIsConnected } =
    useContext(AppContext);
  // console.log(nftMetaDta)
  return (
    <div className="card">
      <Image
        src={formatNftImageUrl(nftMetaDta?.image)}
        width={200}
        height={200}
        style={{ borderRadius: '6px' }}
      />
      <div className="card-title">{nftMetaDta?.name}</div>
      <div className="card-description">{nftMetaDta?.description}</div>
    </div>
  );
};

export default NftCard;
