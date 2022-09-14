import axiosInstance from '/src/utils/axios';
import {formatForReactSelect,convertMetadataToObject} from 'src/utils/responseFormatting.js'
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
  async getAllNFTsOfWallet(walletAddress: string,activeChain:string,activeCollections,allCollections){
    
    try{

      const extractCollectionId = collection => collection.value;
      const collections = activeCollections?activeCollections.map(extractCollectionId):allCollections.map(extractCollectionId);
      const response = await axiosInstance.get('/wallet/nfts',{
        params:{
            wallet: walletAddress,
            chain: activeChain,
            collections: ([...collections] || []).map((n) => `token_addresses=${n}`).join('&'),
            cursor:this.cursor,
        },
      })
      this.cursor = response?.data?.cursor;
      // console.log({response});
      // console.log(convertMetadataToObject(response?.data?.result))
      console.log({response});
      response.data.result = convertMetadataToObject(response?.data?.result);
      return response.data;
    }catch(err){
      console.error(err.message);
    }
  }
  async resetCursor(){
    this.cursor="";
  }
}

export default new NftSDK();