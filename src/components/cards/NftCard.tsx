import React, { useContext } from 'react';
import { AppContext } from 'src/context/';
import { EmojiImage, Button, DataBox } from 'src/components';
import Image from 'next/image';
import styles from './ConnectCard.module.scss';
import { formatNftImageUrl } from 'src/utils/responseFormatting';
import { addEllipsesToText } from 'src/utils/textFormatting';
const NftCard: any = ({ nftDta, name }) => {
  const { walletAddress, isConnected, setWalletAddress, setIsConnected } =
    useContext(AppContext);
  // console.log(nftMetaDta)
  return (
    <div className="card">
      <Image
        src={formatNftImageUrl(nftDta?.image)}
        width={200}
        height={200}
        style={{ borderRadius: '6px' }}
      />
      <div className="card-title">{nftDta?.name || name}</div>
      <div className="card-description">
        {addEllipsesToText(nftDta?.description, 100)}
      </div>
      <DataBox title="Token Address" data={nftDta.token_address} />
    </div>
  );
};

export default NftCard;
