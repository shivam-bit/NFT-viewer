import React, { useEffect, useId } from 'react';
import styles from './ChainsMenu.module.scss';
import { useState, useContext } from 'react';
import { AppContext, UserContext } from 'src/context/';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import NftSDKInstance from '/src/services/NftSdk';

const animatedComponents = makeAnimated();

const CollectionsSelect: any = () => {
  const {
    walletAddress,
    activeChain,
    allCollections,
    setAllCollections,
    activeCollections,
    setActiveCollections,
  } = useContext(UserContext);
  const { collectionsLoading, setCollectionsLoading } = useContext(AppContext);

  const [options, setOptions] = useState([]);
  const handleInputChange = (value) => {
    setActiveCollections([...value]);
  };
  useEffect(() => {
    console.log(walletAddress);
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
    <div
      style={{
        maxWidth: '50em',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <Select
        options={options}
        instanceId={useId()}
        // components={animatedComponents}
        isMulti
        name="collections"
        isLoading={collectionsLoading}
        // options={colourOptions}
        // className="basic-multi-select"
        classNamePrefix="collections-select"
        // blurInputOnSelect={true}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default CollectionsSelect;
