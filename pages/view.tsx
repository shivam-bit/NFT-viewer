import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { AppContext, UserContext } from 'src/context/';
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from 'src/styles/Home.module.scss';
import {
  Button,
  ChainsMenu,
  NftCard,
  CollectionsSelect,
  UserHelperCard,
  OverlayBox,
  LoadingCard,
} from '../src/components';
import { GalleryGrid } from '/src/layout/';

import NftSDKInstance from '/src/services/NftSdk';

const Home: NextPage = () => {
  const { activateConfetti, isConnected, nftsLoading, setNftsLoading } =
    useContext(AppContext);
  const {
    walletAddress,
    activeChain,
    allCollections,
    activeCollections,
    nftsArray,
    setNftsArray,
    moreResultsAvailable,
    setMoreResultsAvailable,
  } = useContext(UserContext);

  const router = useRouter();

  const loadMoreNfts = () => {
    setNftsLoading(true);
    NftSDKInstance.getNext()
      .then((response) => {
        setNftsArray([...nftsArray, ...(response?.result || [])]);
        setMoreResultsAvailable(NftSDKInstance.moreNftsAvailable());
      })
      .finally(() => {
        setNftsLoading(false);
      });
  };
  useEffect(() => {
    setNftsLoading(true);
    if (walletAddress) {
      NftSDKInstance.getAllNFTsOfWallet(
        walletAddress,
        activeChain,
        activeCollections,
        allCollections
      )
        .then((response) => {
          setNftsArray([...(response?.result || [])]);
          setMoreResultsAvailable(NftSDKInstance.moreNftsAvailable());
        })
        .finally(() => {
          setNftsLoading(false);
        });
    } else {
      setNftsLoading(false);
    }
  }, [activeCollections, activeChain, walletAddress]);

  useEffect(() => {
    if (!isConnected && !localStorage.getItem('isConnected'))
      router.replace('/');
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>NFT Gallery</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChainsMenu />
      <CollectionsSelect />
      <main className={styles.main}>
        <InfiniteScroll
          dataLength={nftsArray.length} //This is important field to render the next data
          next={loadMoreNfts}
          hasMore={nftsLoading || moreResultsAvailable}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              {nftsArray.length > 0 ? (
                <img src="/peace.gif" />
              ) : (
                <img src="/no-results.gif" />
              )}
            </p>
          }
        >
          <GalleryGrid>
            {nftsArray.map((nft, index) => {
              const data = {
                ...nft.metadata,
                token_address: nft.token_address,
              };
              return <NftCard nftDta={data} name={nft.name} key={index} />;
            })}
            {nftsLoading ? (
              <>
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
              </>
            ) : null}
          </GalleryGrid>
        </InfiniteScroll>
      </main>
      <OverlayBox>
        <UserHelperCard />
      </OverlayBox>
    </div>
  );
};

export default Home;
