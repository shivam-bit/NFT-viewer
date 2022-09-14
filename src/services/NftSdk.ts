import axiosInstance from '/src/utils/axios';

import {formatForReactSelect} from 'src/utils/responseFormatting.js'
class NftSDK{
  constructor(){
    this.cursor="";
  }
  async getWalletCollections(walletAddress: string,activeChain:string){
    try{
      const response = await axiosInstance.get('/wallet/collection',{
        params:{
            wallet: walletAddress,
            chain: activeChain
        }
      })
      const filteredOutput = response.data.filter((token)=>{
        return token.name || token.symbol;
      })
      return formatForReactSelect(filteredOutput);
    }catch(err){
      console.error(err.message);
    }
  }
  async getAllNFTsOfWallet(walletAddress: string,activeChain:string){
    try{
      const response = await axiosInstance.get('/wallet/nfts',{
        params:{
            wallet: walletAddress,
            chain: activeChain,
            collections: [],
            cursor:this.cursor,
        }
      })
      this.cursor = response?.data?.cursor;
      return response;
    }catch(err){
      console.error(err.message);
    }
  }
  async resetCursor(){
    this.cursor="";
  }
}

export default new NftSDK();