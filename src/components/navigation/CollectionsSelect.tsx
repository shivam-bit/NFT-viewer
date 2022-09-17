import React, { useEffect, useId } from 'react';
import styles from 'src/styles/modules/CollectionsSelect.module.scss';
import { useState, useContext } from 'react';
import { AppContext, UserContext } from 'src/context/';
import Select from 'react-select';
import NftSDKInstance from '/src/services/NftSdk';

const CollectionsSelect: any = () => {
  const {
    walletAddress,
    activeChain,
    setAllCollections,
    setActiveCollections,
  } = useContext(UserContext);
  const { collectionsLoading, setCollectionsLoading } = useContext(AppContext);

  const [options, setOptions] = useState([]);
  const handleInputChange = (value) => {
    setActiveCollections([...value]);
  };
  useEffect(() => {
    setCollectionsLoading(true);
    NftSDKInstance.getWalletCollections(walletAddress, activeChain)
      .then((userCollections) => {
        setAllCollections(userCollections);
        setOptions(userCollections);
        setCollectionsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setCollectionsLoading(false);
      });
  }, [activeChain, walletAddress]);

  return (
    <div className={styles['collection']}>
      <span className={styles['collection-title']}>Collections 🗂 </span>
      <div className={styles['collection-select-wrapper']}>
        <Select
          options={options}
          instanceId={useId()}
          isMulti
          name="collections"
          isLoading={collectionsLoading}
          classNamePrefix="collections-select"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default CollectionsSelect;
