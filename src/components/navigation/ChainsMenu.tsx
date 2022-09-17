import styles from 'src/styles/modules/ChainsMenu.module.scss';
import { useContext } from 'react';
import { AppContext, UserContext } from 'src/context/';
const ChainMenu: any = () => {
  const { supportedChains } = useContext(AppContext);
  const { activeChain, setActiveChain } = useContext(UserContext);

  return (
    <div className={styles['chains-menu']}>
      <div className={styles['chains-menu-title']}> Chains ⛓ </div>
      <div className={styles['chains-menu-options']}>
        {supportedChains.map((chain, index) => {
          return (
            <div
              key={index}
              className={`${styles['switch']} ${
                activeChain === chain ? styles['switch-active'] : ''
              }`}
              onClick={() => setActiveChain(chain)}
            >
              <span>{chain}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChainMenu;
