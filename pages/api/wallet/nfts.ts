import type { NextApiRequest, NextApiResponse } from 'next';
import Moralis  from 'moralis';
import { createRequestUrlForNFTsInWallet } from 'src/utils/urlFormatting';

type Data = {
  name: string
}

(async function () {
  await Moralis.start({
    apiKey: process.env.MORALIS_API_KEY,
});
})();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    try{
      const {wallet,chain,collections,cursor} =req.query;
      const options = {method: 'GET', headers: {Accept: 'application/json', 'X-API-Key': `${process.env.MORALIS_API_KEY}`}};
      const url = createRequestUrlForNFTsInWallet(wallet,chain,collections,cursor);
      const response = await fetch(url, options).then((response)=> response.json());
      return res.status(200).json( response );

      // TODO: Migrate to moralis sdk when it starts supporting collections
      
      // const response = await Moralis.EvmApi.nft.getWalletNFTs({
      //   address: wallet,
      //   chain: EvmChain[chain.toUpperCase()],
      //   token_addresses: destructureCollectionsString(collections) || [],
      //   limit: 50,
      //   cursor:cursor,
      // })
      // const data  = response.toJSON()
      // console.log((await response.next()).pagination)
      // return res.status(200).json({
      //   ...response.pagination,
      //   data
      // })
      }catch(err){
        console.error(err.message);
      }
  
}

export const config = {
    api: {
      externalResolver: true,
    },
  }
