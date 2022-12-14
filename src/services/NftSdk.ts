import axiosInstance from '/src/utils/axios';
import {formatForReactSelect,convertMetadataToObject} from 'src/utils/responseFormatting'
class NftSDK{
  constructor(){
    this.cursor="";
    this.walletAddress="";
    this.activeChain="";
    this.activeCollections=[];
    this.allCollections=[];
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
  async getAllNFTsOfWallet(walletAddress: string,activeChain:string,activeCollections,allCollections,cursor){

    try{
      const extractCollectionId = collection => collection.value;
      const collections = activeCollections?activeCollections.map(extractCollectionId):allCollections.map(extractCollectionId);
      const response = await axiosInstance.get('/wallet/nfts',{
        params:{
            wallet: walletAddress,
            chain: activeChain,
            collections: ([...collections] || []).map((n) => `token_addresses=${n}`).join('&'),
            cursor:cursor || "",
        },
      })

      this.cursor = response?.data?.cursor;
      this.walletAddress=walletAddress;
      this.activeChain=activeChain;
      this.activeCollections=[...activeCollections];
      this.allCollections=[...allCollections];

      response.data.result = convertMetadataToObject(response?.data?.result);
      return response.data;
    }catch(err){
      console.error(err.message);
    }
  }
  async getNext(){
    return this.getAllNFTsOfWallet(this.walletAddress,this.activeChain,this.activeCollections,this.allCollections,this.cursor);
  }
  moreNftsAvailable(){
    return Boolean(this.cursor);
  }
  resetCursor(){
    this.cursor="";
  }
}

export default new NftSDK();