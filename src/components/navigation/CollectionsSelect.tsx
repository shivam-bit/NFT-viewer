import React, { useEffect, useId } from 'react';
import styles from './ChainsMenu.module.scss';
import { useState, useContext } from 'react';
import { AppContext, UserContext } from 'src/context/';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import NftSDKInstance from '/src/services/NftSdk';
// import { colourOptions } from '../data';

const animatedComponents = makeAnimated();
// const options = [
//     { id:0, value: 'red', label: 'red' },
//     { id:1, value: 'yellow', label: 'yellow' },
//     { id:2, value: 'brown', label: 'brown' }
//   ]
const CollectionsSelect: any = () => {
  const {
    walletAddress,
    activeChain,
    allCollections,
    setAllCollections,
    activeCollections,
    setActiveCollections,
  } = useContext(UserContext);
  const [options, setOptions] = useState([]);
  const handleInputChange = (value) => {
    setActiveCollections([...value]);
  };
  useEffect(() => {
    NftSDKInstance.getWalletCollections(walletAddress, activeChain).then(
      (response) => {
        setAllCollections(response);
        setOptions(response);
      }
    );
  }, [activeChain]);
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
        name="colors"
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
