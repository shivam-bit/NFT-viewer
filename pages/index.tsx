import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { UserContext, AppContext } from 'src/context/';
import styles from 'src/styles/Home.module.scss';
import { ConnectCard, OverlayBox, DemoCard } from '../src/components';
import { ONBOARDING_STATUSES } from 'src/constants/';

const Home: NextPage = () => {
  const router = useRouter();
  const { onboardingStatus, setOnboardingStatus, isConnected } =
    useContext(AppContext);
  const { walletAddress } = useContext(UserContext);

  useEffect(() => {
    if (isConnected && walletAddress) {
      console.log(onboardingStatus, ONBOARDING_STATUSES['Done']);
      if (onboardingStatus === ONBOARDING_STATUSES['Successful']) {
        setTimeout(() => {
          router.push('/view');
        }, 4000);
        setOnboardingStatus(ONBOARDING_STATUSES['Done']);
      } else {
        // Not a first time user, so immediately redirect
        router.push('/view');
      }
    }
  }, [isConnected, walletAddress]);

  return (
    <div className={styles.container}>
      <Head>
        <title>NFT Viewer App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <ConnectCard />
      </main>
      <OverlayBox>
        <DemoCard />
      </OverlayBox>
    </div>
  );
};

export default Home;
