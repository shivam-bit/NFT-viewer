// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import Moralis  from 'moralis';
import { EvmChain } from '@moralisweb3/evm-utils';
import { destructureCollectionsString } from 'src/utils/responseFormatting';

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
const url = collections?`https://deep-index.moralis.io/api/v2/${wallet}/nft?chain=${chain.toLowerCase()}&format=decimal&${collections}`:`https://deep-index.moralis.io/api/v2/${wallet}/nft?chain=${chain.toLowerCase()}&format=decimal`;
console.log("🚀 ~ file: nfts.ts ~ line 25 ~ url", url)
const response = await fetch(url, options);
const jsonResponse = await response.json();
return res.status(200).json(jsonResponse);
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
