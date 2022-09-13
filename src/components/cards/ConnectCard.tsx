import React, {useContext} from 'react';
import {AppContext} from "src/context/App.tsx";
import { EmojiImage,Button } from 'src/components';
import Image from 'next/image';
import styles from './ConnectCard.module.scss';
import metamaskInstance from 'src/services/MetaMask';


const ConnectCard: any = (props) => {
  const {walletAddress,isConnected,setWalletAddress,setIsConnected} = useContext(AppContext);

    const connectWallet = async (e) => {
        const accounts = await metamaskInstance.onClickConnect();
        // console.log("🚀 ~ file: ConnectCard.tsx ~ line 16 ~ connectWal ~ accounts", accounts);
        if(accounts.length>0){
          setWalletAddress(accounts[0]);
          setIsConnected(true);
        }
        // TODO: Add analytics event
    }
        
  return (
        <div className='card'>
            <Image
      src="/metamask-fox.svg"
      width={200}
      height={200}
    />
    <div className='card-title'>Connect your MetaMask Wallet</div>
    <Button triggerOnClick={connectWallet} className="connect-wallet"> 
    Connect Wallet
    </Button>
            
        </div>
  )
}

export default ConnectCard;

