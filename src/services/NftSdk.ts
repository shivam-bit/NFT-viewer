// import { Network, Alchemy } from 'alchemy-sdk';

// // Optional config object, but defaults to the API key 'demo' and Network 'eth-mainnet'.
// const settings = {
//   apiKey: '3AOWne3MP4hixC6lN1kf8EBM3qa4X3DT', // Replace with your Alchemy API key.
//   network: Network.ETH_MAINNET // Replace with your network.
// };

// const alchemy = new Alchemy(settings);

// export {
//     alchemy
// }
import axiosInstance from '/src/utils/axios';

class NftSDK{
  constructor(){
  }
  async getWalletCollections(walletAddress: string,activeChain:string){
    try{
      const response = await axiosInstance.post('/wallet/collection',null,{
        params:{
            wallet: walletAddress,
            chain: activeChain
        }
      })
      return response;
    }catch(err){
      console.error(err.message);
    }
  }

}

export default new NftSDK();