import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { AppContext, UserContext } from 'src/context/';
import { EmojiImage, Button, DataBox } from 'src/components';
import Image from 'next/image';
import styles from 'src/styles/modules/DemoCard.module.scss';

const UserHelperCard: any = ({ nftDta, name }) => {
  const { isConnected, setIsConnected } = useContext(AppContext);
  const { setWalletAddress } = useContext(UserContext);
  const router = useRouter();
  const [openDemoInfo, setOpenDemoInfo] = useState(false);
  const logout = () => {
    setWalletAddress('');
    setIsConnected(false);
    router.replace('/');
  };
  return (
    <div className={styles['demo-card']}>
      {!openDemoInfo ? null : (
        <div className={styles['demo-card-popover']}>
          {/* <div>
            🤔 Do you wish to use demo account?
          </div> */}
          <div className={styles['demo-card-popover-options']}>
            <span onClick={logout}>Seen Enough! Logout 🫡 </span>
          </div>
          <footer>
            Made with ❤️ & ☕️ by{' '}
            <a
              href="https://twitter.com/cvam01"
              style={{ textDecoration: 'underline' }}
            >
              cvam01
            </a>
          </footer>
        </div>
      )}

      <div
        className={styles['demo-card-logo']}
        onClick={() => setOpenDemoInfo(!openDemoInfo)}
      >
        <img src="/icons8-jake.svg" />
      </div>
    </div>
  );
};

export default UserHelperCard;
