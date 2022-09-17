import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { AppContext, UserContext } from 'src/context/';
import { Button } from 'src/components';
import Image from 'next/image';
import styles from 'src/styles/modules/DemoCard.module.scss';

const UserHelperCard: any = () => {
  const router = useRouter();
  const { setIsConnected } = useContext(AppContext);
  const { setWalletAddress } = useContext(UserContext);

  const [openUserInfo, setUserDemoInfo] = useState(false);

  const toggleUserInfoBox = () => {
    setUserDemoInfo(!openUserInfo);
  };

  const logout = () => {
    setWalletAddress('');
    setIsConnected(false);
    router.replace('/');
  };

  return (
    <div className={styles['demo-card']}>
      {!openUserInfo ? null : (
        <div className={styles['demo-card-popover']}>
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
      <Button
        triggerOnClick={toggleUserInfoBox}
        classes={styles['demo-card-logo']}
      >
        <img src="/icons8-jake.svg" />
      </Button>
    </div>
  );
};

export default UserHelperCard;
