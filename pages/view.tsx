import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router'
import {useContext,useEffect} from 'react';
import {AppContext, UserContext} from "src/context/";
import styles from 'src/styles/Home.module.scss'
import {Button,ChainsMenu,NftCard,CollectionsSelect} from '../src/components';
import { GalleryGrid } from '/src/layout/';
import axiosInstance from '/src/utils/axios';
import NftSDKInstance from '/src/services/NftSdk';
const Home: NextPage = () => {
  const {activateConfetti,isConnected
} = useContext(AppContext);
const {walletAddress, activeChain} = useContext(UserContext);

  const router = useRouter();

  const loadMoreNfts=()=>{
    NftSDKInstance.getAllNFTsOfWallet(walletAddress,activeChain).then(console.log)
  }
  useEffect(() => {
    if(!isConnected) router.replace('/');
    // NftSDKInstance.getWalletCollections(walletAddress,activeChain).then(console.log)
    
  },[]);
  return (
<div className={styles.container}>
      <Head>
        <title>NFT  Gallery</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChainsMenu/>
      <CollectionsSelect/>
      <main className={styles.main}>
        <GalleryGrid>
        <NftCard/>
        <NftCard/>
        <NftCard/>
        <NftCard/>
        <NftCard/>
        <NftCard/>
        </GalleryGrid>
      </main>
      <Button triggerOnClick={loadMoreNfts}>
        Load More
      </Button>
    </div>
    
  )
}

export default Home
