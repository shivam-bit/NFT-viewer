import React, {useContext} from 'react';
import {AppContext} from "src/context/";
import { EmojiImage,Button } from 'src/components';
import Image from 'next/image';
import styles from './ConnectCard.module.scss';
import metamaskInstance from 'src/services/MetaMask';


const NftCard: any = (props) => {
  const {walletAddress,isConnected,setWalletAddress,setIsConnected} = useContext(AppContext);
        
  return (
    <div className='card'>
            <Image
      src="/metamask-fox.svg"
      width={200}
      height={200}
    />
        {/* <div className='card-title'>Connect your MetaMask Wallet</div>  */}
        <p>Connect your MetaMask Wallet</p> 
    </div>
  )
}

export default NftCard;

